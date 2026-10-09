import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { Protocol } from "./api.js";
import { HTTP_STATUS_MAP, InternalServerError } from "./errors.js";
import { httpSymbol, makeAnnotation } from "./trait.js";
import { buildRequest, getAnn, getPropAnn, getProps, isOpaqueValue, mapKeys, matchTypedError, resolveNode } from "./protocol-http.js";
import { validateResponse } from "./response-validation.js";
import { parseRetryAfterForStatus } from "./retry-after.js";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

//#region lib/protocol-rest.js
var protocol_rest_exports = /* @__PURE__ */ __exportAll({
	BinaryResponse: () => BinaryResponse,
	RawResponse: () => RawResponse,
	RawResponseRoot: () => RawResponseRoot,
	SensitiveValue: () => SensitiveValue,
	binaryResponseSymbol: () => binaryResponseSymbol,
	makeRestProtocol: () => makeRestProtocol,
	rawResponseRootSymbol: () => rawResponseRootSymbol,
	rawResponseSymbol: () => rawResponseSymbol,
	sensitiveValueSymbol: () => sensitiveValueSymbol,
	unwrapRedactedDeep: () => unwrapRedactedDeep,
	wrapSensitive: () => wrapSensitive
});
const sensitiveValueSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/sensitive-value");
const SensitiveValue = (_value) => makeAnnotation(sensitiveValueSymbol, true);
const rawResponseSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/raw-response");
const RawResponse = (_value) => makeAnnotation(rawResponseSymbol, true);
const rawResponseRootSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/raw-response-root");
const RawResponseRoot = () => makeAnnotation(rawResponseRootSymbol, true);
const binaryResponseSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/binary-response");
const BinaryResponse = () => makeAnnotation(binaryResponseSymbol, true);
const isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v) && !isOpaqueValue(v) && (Object.getPrototypeOf(v) === Object.prototype || Object.getPrototypeOf(v) === null);
const unwrapRedactedDeep = (value) => {
	if (Redacted.isRedacted(value)) return Redacted.value(value);
	if (Array.isArray(value)) return value.map(unwrapRedactedDeep);
	if (isPlainObject(value)) {
		const out = {};
		for (const [k, v] of Object.entries(value)) {
			if (v === void 0) continue;
			out[k] = unwrapRedactedDeep(v);
		}
		return out;
	}
	return value;
};
const wrapSensitive = (ast, value) => {
	if (value === null || typeof value !== "object" || isOpaqueValue(value)) return value;
	const node = resolveNode(ast);
	if (node._tag === "Union") return node.types.reduce((redacted, arm) => wrapSensitive(arm, redacted), value);
	if (node._tag === "Arrays") {
		if (!Array.isArray(value)) return value;
		const elem = node.rest?.[0];
		return elem ? value.map((v) => wrapSensitive(elem, v)) : value;
	}
	if (node._tag === "Objects" && !Array.isArray(value)) {
		const props = getProps(node);
		if (props.length === 0) return value;
		const byName = new Map(props.map((p) => [String(p.name), p]));
		const out = {};
		for (const [k, v] of Object.entries(value)) {
			if (v === void 0) continue;
			const prop = byName.get(k);
			if (!prop) out[k] = v;
			else if (getPropAnn(prop, sensitiveValueSymbol) !== void 0 && typeof v === "string") out[k] = Redacted.make(v);
			else out[k] = wrapSensitive(prop.type, v);
		}
		return out;
	}
	return value;
};
const defaultErrorEnvelope = (body) => {
	if (body === null || typeof body !== "object") return void 0;
	const b = body;
	return {
		code: typeof b.code === "string" || typeof b.code === "number" ? b.code : void 0,
		message: typeof b.message === "string" ? b.message : typeof b.error === "string" ? b.error : void 0
	};
};
const fail = (e) => Effect.fail(e);
const makeRestProtocol = (options) => {
	const errorEnvelope = options.errorEnvelope ?? defaultErrorEnvelope;
	const statusMap = options.statusMap ?? HTTP_STATUS_MAP;
	const encode = ({ input, inputAst }) => Effect.gen(function* () {
		const creds = yield* options.credentials;
		const http = getAnn(inputAst, httpSymbol);
		let baseUrl;
		try {
			baseUrl = options.baseUrl(creds, {
				uri: http?.uri ?? "",
				method: http?.method ?? ""
			});
		} catch (e) {
			return yield* Effect.fail(e);
		}
		return buildRequest({
			input: unwrapRedactedDeep(input),
			inputAst,
			baseUrl,
			headers: options.headers(creds),
			mapMemberHeader: options.mapMemberHeader,
			unknownKeyToWire: options.unknownKeyToWire
		});
	});
	const decode = ({ response, outputAst, errors: errorClasses }) => Effect.gen(function* () {
		if (response.status >= 200 && response.status < 300 && getAnn(outputAst, binaryResponseSymbol) !== void 0) {
			const bytes = yield* response.arrayBuffer.pipe(Effect.orDie);
			return new Uint8Array(bytes);
		}
		const text = (yield* response.text.pipe(Effect.orDie)) ?? "";
		if (process.env.DISTILLED_DEBUG_HTTP) console.error(`[distilled] <- ${response.status}`);
		let json;
		let nonJson = false;
		if (text.trim().length > 0) try {
			json = JSON.parse(text);
		} catch {
			nonJson = true;
		}
		const status = response.status;
		const headers = response.headers;
		if (status >= 400) {
			const env = (nonJson ? void 0 : errorEnvelope(json)) ?? {};
			const message = env.message ?? (nonJson && text.trim() ? text.trim() : `HTTP ${status}`);
			const typed = matchTypedError(errorClasses, status, [{
				code: typeof env.code === "number" ? env.code : void 0,
				message
			}], {
				body: nonJson ? text : json,
				headers
			});
			if (typed !== void 0) return yield* fail(typed);
			const StatusErrorClass = statusMap[status];
			if (StatusErrorClass) return yield* fail(new StatusErrorClass({
				message,
				retryAfter: parseRetryAfterForStatus(status, headers)
			}));
			if (status >= 500) return yield* fail(new InternalServerError({
				message,
				retryAfter: parseRetryAfterForStatus(status, headers)
			}));
			return yield* fail(options.unknownError({
				status,
				code: env.code,
				message,
				body: nonJson ? text : json,
				headers
			}));
		}
		let body = nonJson ? text : json ?? {};
		if (options.transformResponse) body = options.transformResponse(body);
		const mapped = yield* validateResponse(outputAst, mapKeys(outputAst, body, "decode"), (cause) => options.parseError({
			body: nonJson ? text : json,
			cause
		})).pipe(Effect.catch(fail));
		return wrapSensitive(outputAst, mapped);
	});
	return Layer.succeed(Protocol, Protocol.of({
		encode: (args) => encode(args),
		decode
	}));
};

//#endregion
export { BinaryResponse, RawResponse, RawResponseRoot, SensitiveValue, binaryResponseSymbol, makeRestProtocol, rawResponseRootSymbol, rawResponseSymbol, sensitiveValueSymbol, protocol_rest_exports as t, unwrapRedactedDeep, wrapSensitive };