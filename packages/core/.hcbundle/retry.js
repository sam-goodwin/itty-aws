import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { isThrottling, isTransientError } from "./category.js";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import "effect/Ref";
import * as Duration from "effect/Duration";
import "effect/Function";
import * as Schedule from "effect/Schedule";

//#region lib/retry.js
var retry_exports = /* @__PURE__ */ __exportAll({
	DEFAULT_SERVER_RETRY_HINT_CAP_MS: () => DEFAULT_SERVER_RETRY_HINT_CAP_MS,
	ServerRetryHintCapMs: () => ServerRetryHintCapMs,
	capped: () => capped,
	defaultOptions: () => defaultOptions,
	jittered: () => jittered,
	makeDefault: () => makeDefault,
	makeRetryService: () => makeRetryService,
	readServerRetryHintCapMsFromEnv: () => readServerRetryHintCapMsFromEnv,
	resolveServerRetryHintCapMs: () => resolveServerRetryHintCapMs,
	serverHintMillis: () => serverHintMillis,
	serverRetryHintCapLayer: () => serverRetryHintCapLayer,
	throttlingFactory: () => throttlingFactory,
	throttlingOptions: () => throttlingOptions,
	transientFactory: () => transientFactory,
	transientOptions: () => transientOptions
});
const makeRetryService = (name) => Context.Service()(name);
const jittered = /*@__PURE__*/ Schedule.addDelay(() => Effect.succeed(Duration.millis(Math.random() * 50)));
const capped = (max) => Schedule.modifyDelay(({ duration }) => Effect.succeed(Duration.isGreaterThan(duration, max) ? max : duration));
const DEFAULT_SERVER_RETRY_HINT_CAP_MS = 6e4;
const ENV_SERVER_RETRY_HINT_CAP_MS = "DISTILLED_SERVER_RETRY_HINT_CAP_MS";
const ServerRetryHintCapMs = /*@__PURE__*/ Context.Service("@distilled.cloud/core/ServerRetryHintCapMs");
const serverRetryHintCapLayer = (capMs) => Layer.succeed(ServerRetryHintCapMs, capMs);
const readServerRetryHintCapMsFromEnv = () => parseCapMs(globalThis.process?.env?.[ENV_SERVER_RETRY_HINT_CAP_MS]);
const parseCapMs = (raw) => {
	if (raw === void 0 || raw === "") return DEFAULT_SERVER_RETRY_HINT_CAP_MS;
	const n = Number(raw);
	return Number.isFinite(n) && n >= 0 ? Math.trunc(n) : DEFAULT_SERVER_RETRY_HINT_CAP_MS;
};
const CONFIG_PROVIDER_KEY = "effect/ConfigProvider";
const resolveServerRetryHintCapMs = () => Effect.gen(function* () {
	const fromLayer = yield* Effect.serviceOption(ServerRetryHintCapMs);
	if (Option.isSome(fromLayer)) {
		const n = fromLayer.value;
		if (Number.isFinite(n) && n >= 0) return Math.trunc(n);
	}
	const provider = (yield* Effect.context()).mapUnsafe.get(CONFIG_PROVIDER_KEY);
	if (!provider) return readServerRetryHintCapMsFromEnv();
	const node = yield* provider.load([ENV_SERVER_RETRY_HINT_CAP_MS]).pipe(Effect.orElseSucceed(() => void 0));
	return parseCapMs(node?._tag === "Value" ? node.value : void 0);
});
const serverHintMillis = (error, capMs) => {
	const hint = error?.retryAfter;
	if (!Duration.isDuration(hint)) return void 0;
	return Math.min(Duration.toMillis(hint), capMs);
};
const defaultOptions = {
	while: (error) => isTransientError(error),
	backoff: {
		baseMs: 250,
		factor: 2,
		capMs: 5e3,
		maxRetries: 8,
		jitterMs: 50,
		minThrottleMs: 500,
		serverHint: true
	}
};
const makeDefault = () => defaultOptions;
const slowBackoff = {
	baseMs: 1e3,
	factor: 2,
	capMs: 5e3,
	jitterMs: 50,
	serverHint: true
};
const slowBackoffNoHint = {
	baseMs: 1e3,
	factor: 2,
	capMs: 5e3,
	jitterMs: 50
};
const throttlingFactory = () => throttlingFactoryOptions;
const throttlingFactoryOptions = {
	while: (error) => isThrottling(error),
	backoff: slowBackoff
};
const throttlingOptions = {
	while: (error) => isThrottling(error),
	backoff: slowBackoffNoHint
};
const transientFactory = () => transientFactoryOptions;
const transientFactoryOptions = {
	while: isTransientError,
	backoff: slowBackoff
};
const transientOptions = {
	while: isTransientError,
	backoff: slowBackoffNoHint
};

//#endregion
export { DEFAULT_SERVER_RETRY_HINT_CAP_MS, ServerRetryHintCapMs, capped, defaultOptions, jittered, makeDefault, makeRetryService, readServerRetryHintCapMsFromEnv, resolveServerRetryHintCapMs, serverHintMillis, serverRetryHintCapLayer, retry_exports as t, throttlingFactory, throttlingOptions, transientFactory, transientOptions };