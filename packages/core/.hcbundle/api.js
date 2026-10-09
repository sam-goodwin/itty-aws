import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { isThrottling } from "./category.js";
import { extractItems, paginateWithDefaults } from "./pagination.js";
import { defaultOptions, resolveServerRetryHintCapMs, serverHintMillis } from "./retry.js";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import { pipeArguments } from "effect/Pipeable";
import * as Ref from "effect/Ref";
import "effect/Schema";
import * as Scope from "effect/Scope";
import { SingleShotGen } from "effect/Utils";

//#region lib/api.js
var api_exports = /* @__PURE__ */ __exportAll({
	Protocol: () => Protocol,
	make: () => make,
	makePaginated: () => makePaginated
});
var Protocol = class extends Context.Service()("Protocol") {};
const protocolMemoMap = /*@__PURE__*/ Layer.makeMemoMapUnsafe();
const protocolScope = /*@__PURE__*/ Scope.makeUnsafe();
const protocolContexts = /*@__PURE__*/ new WeakMap();
const protocolContext = (layer) => {
	const cached = protocolContexts.get(layer);
	if (cached) return Effect.succeed(cached);
	return Effect.map(Layer.buildWithMemoMap(layer, protocolMemoMap, protocolScope), (ctx) => {
		protocolContexts.set(layer, ctx);
		return ctx;
	});
};
const backoffDelay = (b, attempt, error) => {
	const base = Math.min(b.baseMs * b.factor ** attempt, b.capMs);
	const jitter = () => Math.random() * (b.jitterMs ?? 0);
	if (b.serverHint && error?.retryAfter !== void 0) return Effect.map(resolveServerRetryHintCapMs(), (capMs) => {
		return (serverHintMillis(error, capMs) ?? base) + jitter();
	});
	const floored = b.minThrottleMs !== void 0 && base < b.minThrottleMs && isThrottling(error) ? b.minThrottleMs : base;
	return Effect.succeed(floored + jitter());
};
const NO_BACKOFF = {
	baseMs: 0,
	factor: 1,
	capMs: 0
};
const applyRetry = (base, retryKey) => retryKey === void 0 ? base : Effect.catch(base, (error) => Effect.flatMap(Effect.serviceOption(retryKey), (opt) => {
	if (Option.isNone(opt)) return retryWith(base, defaultOptions, error);
	const policy = opt.value;
	if (typeof policy !== "function") return retryWith(base, policy, error);
	return Effect.flatMap(Ref.make(error), (lastError) => retryWith(Effect.tapError(base, (e) => Ref.set(lastError, e)), policy(lastError), error));
}));
const retryWith = (base, opts, error) => {
	const keepGoing = opts.while;
	if (!keepGoing || !keepGoing(error)) return Effect.fail(error);
	if (opts.schedule) {
		const schedule = opts.schedule;
		return Effect.flatMap(schedule.step, (next) => {
			const loop = (e) => !keepGoing(e) ? Effect.fail(e) : Effect.clockWith((clock) => Effect.matchEffect(next(clock.currentTimeMillisUnsafe(), e), {
				onFailure: () => Effect.fail(e),
				onSuccess: ([, delay]) => Effect.flatMap(Effect.sleep(delay), () => Effect.catch(base, loop))
			}));
			return loop(error);
		});
	}
	const b = opts.backoff ?? NO_BACKOFF;
	const step = (e, n) => !keepGoing(e) || b.maxRetries !== void 0 && n >= b.maxRetries ? Effect.fail(e) : Effect.flatMap(backoffDelay(b, n, e), (ms) => Effect.flatMap(Effect.sleep(ms), () => Effect.catch(base, (next) => step(next, n + 1))));
	return step(error, 0);
};
const stateKey = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/api/OperationState");
const prepare = (state) => {
	if (state.prepared) return state.prepared;
	const cfg = state.configFn();
	return state.prepared = {
		cfg,
		inputAst: cfg.input.ast,
		outputAst: cfg.output.ast
	};
};
const stateOf = (op) => op[stateKey];
const callOperation = (state, input) => Effect.suspend(() => {
	const { cfg, inputAst, outputAst } = prepare(state);
	const call = Effect.flatMap(protocolContext(cfg.protocol), (protocolCtx) => {
		const protocol = Context.get(protocolCtx, Protocol);
		return Effect.flatMap(HttpClient.HttpClient, (client) => Effect.flatMap(protocol.encode({
			input,
			inputAst,
			config: cfg
		}), (request) => Effect.flatMap(client.execute(request), (response) => protocol.decode({
			response,
			outputAst,
			errors: cfg.errors ?? [],
			config: cfg
		}))));
	});
	return applyRetry(call, cfg.retry);
});
const bindContext = (op) => Effect.map(Effect.context(), (context) => (input) => Effect.updateContext(op(input), (current) => Context.merge(context, current)));
const OperationProto = /*@__PURE__*/ Object.setPrototypeOf({
	[Symbol.iterator]() {
		return new SingleShotGen(this.asEffect());
	},
	pipe() {
		return pipeArguments(this.asEffect(), arguments);
	},
	asEffect() {
		return bindContext(this);
	},
	get input() {
		return prepare(stateOf(this)).cfg.input;
	},
	get output() {
		return prepare(stateOf(this)).cfg.output;
	},
	get errors() {
		return prepare(stateOf(this)).cfg.errors ?? [];
	},
	get operationName() {
		return prepare(stateOf(this)).cfg.operationName;
	},
	get pagination() {
		return prepare(stateOf(this)).cfg.pagination;
	}
}, Function.prototype);
const makeOperation = (state, proto) => {
	const fn = (input) => callOperation(state, input);
	Object.defineProperty(fn, stateKey, { value: state });
	return Object.setPrototypeOf(fn, proto);
};
function make(configFn) {
	return makeOperation({ configFn }, OperationProto);
}
const streamsOf = (state, call) => {
	const pag = () => prepare(state).cfg.pagination;
	const paginate = state.strategy ?? paginateWithDefaults;
	const pages = (input) => paginate(call, input, pag());
	const items = (input) => {
		const p = pag();
		return p.items ? extractItems(pages(input), p.items) : pages(input);
	};
	return {
		pages,
		items
	};
};
const streamGetter = (name) => function() {
	const fns = streamsOf(stateOf(this), this);
	Object.defineProperties(this, {
		pages: {
			value: fns.pages,
			configurable: true
		},
		items: {
			value: fns.items,
			configurable: true
		}
	});
	return fns[name];
};
const PaginatedOperationProto = /*@__PURE__*/ Object.create(OperationProto, {
	pages: {
		get: /*@__PURE__*/ streamGetter("pages"),
		configurable: true
	},
	items: {
		get: /*@__PURE__*/ streamGetter("items"),
		configurable: true
	},
	asEffect: {
		value() {
			const state = stateOf(this);
			return Effect.map(bindContext(this), (call) => Object.assign(call, streamsOf(state, call)));
		},
		configurable: true,
		writable: true
	}
});
function makePaginated(configFn, strategy) {
	return makeOperation(strategy ? {
		configFn,
		strategy
	} : { configFn }, PaginatedOperationProto);
}

//#endregion
export { Protocol, make, makePaginated, api_exports as t };