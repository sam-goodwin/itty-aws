import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { bodySymbol, deepQuerySymbol, formDataFileSymbol, getErrorMatchers, headerSymbol, httpBodySymbol, httpSymbol, keyDictionarySymbol, labelEncodingSymbol, labelSymbol, querySymbol, stringEncodedSymbol, unionCasesSymbol } from "./trait.js";
import * as HttpBody from "effect/http/HttpBody";
import * as HttpClientRequest from "effect/http/HttpClientRequest";

//#region lib/protocol-http.js
var protocol_http_exports = /* @__PURE__ */ __exportAll({
	buildRequest: () => buildRequest,
	encodeGreedyLabel: () => encodeGreedyLabel,
	getAnn: () => getAnn,
	getPropAnn: () => getPropAnn,
	getProps: () => getProps,
	hasPropAnn: () => hasPropAnn,
	isOpaqueValue: () => isOpaqueValue,
	mapKeys: () => mapKeys,
	mapKeysByDictionary: () => mapKeysByDictionary,
	matchTypedError: () => matchTypedError,
	matchesExpression: () => matchesExpression,
	nameOf: () => nameOf,
	resolveNode: () => resolveNode
});
const getProps = (ast) => {
	if (ast._tag === "Objects") return ast.propertySignatures;
	if (ast._tag === "Suspend") return getProps(ast.thunk());
	if (ast.encoding && ast.encoding.length > 0) return getProps(ast.encoding[0].to);
	return [];
};
const getAnn = (ast, symbol) => {
	const direct = ast.annotations?.[symbol];
	if (direct !== void 0) return direct;
	if (ast._tag === "Suspend") return getAnn(ast.thunk(), symbol);
	if (ast.encoding && ast.encoding.length > 0) return getAnn(ast.encoding[0].to, symbol);
	if (ast._tag === "Union") {
		const real = ast.types.filter((t) => t._tag !== "Undefined" && !(t._tag === "Literal" && t.literal === null));
		if (real.length === 1) return getAnn(real[0], symbol);
	}
};
const getPropAnn = (prop, symbol) => getAnn(prop.type, symbol);
const hasPropAnn = (prop, symbol) => getPropAnn(prop, symbol) !== void 0;
const nameOf = (prop, symbol) => {
	const v = getPropAnn(prop, symbol);
	return typeof v === "string" ? v : String(prop.name);
};
const resolveNode = (ast) => {
	if (ast._tag === "Suspend") return resolveNode(ast.thunk());
	if (ast.encoding && ast.encoding.length > 0) return resolveNode(ast.encoding[0].to);
	if (ast._tag === "Union") {
		const real = ast.types.filter((t) => t._tag !== "Undefined" && t._tag !== "Null" && !(t._tag === "Literal" && t.literal === null));
		if (real.length === 1) return resolveNode(real[0]);
	}
	return ast;
};
const isOpaqueValue = (v) => v instanceof Blob || v instanceof File || v instanceof ArrayBuffer || v instanceof Uint8Array || v instanceof Date;
const mapKeysByDictionary = (dict, value, direction) => {
	if (value === null || typeof value !== "object" || isOpaqueValue(value)) return value;
	if (Array.isArray(value)) return value.map((v) => mapKeysByDictionary(dict, v, direction));
	const rename = direction === "decode" ? Object.fromEntries(Object.entries(dict).flatMap(([ts, wire]) => typeof wire === "string" ? [[wire, ts]] : wire.map((w) => [w, ts]))) : Object.fromEntries(Object.entries(dict).map(([ts, wire]) => [ts, typeof wire === "string" ? wire : wire[0]]));
	const out = {};
	for (const [k, v] of Object.entries(value)) {
		if (v === void 0) continue;
		out[rename[k] ?? k] = mapKeysByDictionary(dict, v, direction);
	}
	return out;
};
const stringEncode = (value) => value === null ? null : Array.isArray(value) ? value.map(stringEncode) : String(value);
const mapKeys = (ast, value, direction, fallback) => {
	if (value === null || value === void 0 || typeof value !== "object" || isOpaqueValue(value)) return value;
	const dict = getAnn(ast, keyDictionarySymbol) ?? fallback;
	const unionCases = getAnn(ast, unionCasesSymbol);
	if (unionCases && direction === "decode" && !Array.isArray(value)) {
		const obj = dict ? mapKeysByDictionary(dict, value, "decode") : value;
		const present = Object.keys(obj).filter((k) => obj[k] !== void 0 && obj[k] !== null);
		const disc = unionCases.discriminator;
		const tag = disc ? obj[disc.key] : void 0;
		const tagged = typeof tag === "string" ? disc.values.indexOf(tag) : -1;
		let best;
		if (tagged >= 0) best = {
			keys: unionCases.cases[tagged],
			score: 0,
			matched: 0
		};
		else for (const keys of unionCases.cases) {
			const set = new Set(keys);
			let matched = 0;
			let excess = 0;
			for (const k of present) if (set.has(k)) matched++;
			else excess++;
			const score = matched - excess;
			if (matched > 0 && (!best || score > best.score || score === best.score && matched > best.matched)) best = {
				keys,
				score,
				matched
			};
		}
		if (best) {
			const out = {};
			for (const k of best.keys) out[k] = obj[k];
			return out;
		}
		return obj;
	}
	const node = resolveNode(ast);
	if (node._tag === "Union") {
		const arms = node.types.map(resolveNode);
		if (Array.isArray(value)) {
			const arr = arms.find((t) => t._tag === "Arrays");
			if (arr) return mapKeys(arr, value, direction, dict);
		} else {
			let best;
			let bestScore = 0;
			for (const t of arms) {
				if (t._tag !== "Objects") continue;
				let score = 0;
				for (const p of t.propertySignatures) if (value[direction === "encode" ? String(p.name) : nameOf(p, bodySymbol)] !== void 0) score++;
				if (score > bestScore) {
					best = t;
					bestScore = score;
				}
			}
			if (best) return mapKeys(best, value, direction, dict);
		}
		return dict ? mapKeysByDictionary(dict, value, direction) : value;
	}
	if (node._tag === "Arrays") {
		if (!Array.isArray(value)) return value;
		const elem = node.rest?.[0];
		return elem ? value.map((v) => mapKeys(elem, v, direction, dict)) : dict ? mapKeysByDictionary(dict, value, direction) : value;
	}
	if (node._tag === "Objects" && !Array.isArray(value)) {
		const props = node.propertySignatures;
		const isigs = node.indexSignatures;
		if (props.length === 0 && !(isigs && isigs.length)) return dict ? mapKeysByDictionary(dict, value, direction) : value;
		const out = {};
		const consumed = /* @__PURE__ */ new Set();
		for (const p of props) {
			const tsName = String(p.name);
			const wire = nameOf(p, bodySymbol);
			const from = direction === "encode" ? tsName : wire;
			const to = direction === "encode" ? wire : tsName;
			consumed.add(from);
			const v = value[from];
			if (v === void 0) continue;
			out[to] = direction === "encode" && hasPropAnn(p, stringEncodedSymbol) ? stringEncode(v) : mapKeys(p.type, v, direction, dict);
		}
		for (const [k, v] of Object.entries(value)) {
			if (consumed.has(k) || v === void 0) continue;
			const renamed = dict ? direction === "encode" ? dict[k] ?? k : Object.entries(dict).find(([, w]) => w === k)?.[0] ?? k : k;
			out[typeof renamed === "string" ? renamed : renamed[0]] = isigs && isigs.length ? mapKeys(isigs[0].type, v, direction, dict) : dict ? mapKeysByDictionary(dict, v, direction) : v;
		}
		return out;
	}
	return dict ? mapKeysByDictionary(dict, value, direction) : value;
};
const BODYLESS = /*@__PURE__*/ new Set(["GET", "HEAD"]);
const appendQuery = (query, name, value) => {
	if (Array.isArray(value)) for (const v of value) appendQuery(query, name, v);
	else if (value !== null && typeof value === "object" && !(value instanceof Date)) {
		for (const [k, v] of Object.entries(value)) if (v !== void 0) appendQuery(query, `${name}.${k}`, v);
	} else query.append(name, String(value));
};
const encodeGreedyLabel = (value) => value.replace(/^\/+/, "").split("/").map(encodeURIComponent).join("/");
const flattenToFormPairs = (obj, prefix = "") => {
	const pairs = [];
	for (const [key, value] of Object.entries(obj)) {
		if (value === void 0 || value === null) continue;
		const fullKey = prefix ? `${prefix}[${key}]` : key;
		if (Array.isArray(value)) for (let i = 0; i < value.length; i++) {
			const item = value[i];
			if (item === void 0 || item === null) continue;
			if (typeof item === "object" && !Array.isArray(item)) pairs.push(...flattenToFormPairs(item, `${fullKey}[${i}]`));
			else pairs.push([`${fullKey}[${i}]`, String(item)]);
		}
		else if (typeof value === "object") pairs.push(...flattenToFormPairs(value, fullKey));
		else pairs.push([fullKey, String(value)]);
	}
	return pairs;
};
const buildRequest = ({ input, inputAst, baseUrl, headers: baseHeaders, mapMemberHeader, unknownKeyToWire }) => {
	const inputObj = input ?? {};
	const http = getAnn(inputAst, httpSymbol);
	if (!http) throw new Error("operation input is missing the Http() trait");
	const rootDict = getAnn(inputAst, keyDictionarySymbol);
	const headers = { ...baseHeaders };
	const body = {};
	let rawBody;
	const files = [];
	const query = new URLSearchParams();
	let uri = http.uri;
	const consumed = /* @__PURE__ */ new Set();
	let hasBodyMembers = false;
	let memberContentType;
	for (const prop of getProps(inputAst)) {
		const key = String(prop.name);
		consumed.add(key);
		const value = inputObj[key];
		if (!hasPropAnn(prop, labelSymbol) && !hasPropAnn(prop, headerSymbol) && !hasPropAnn(prop, querySymbol) && !hasPropAnn(prop, deepQuerySymbol)) hasBodyMembers = true;
		if (value === void 0) continue;
		if (hasPropAnn(prop, labelSymbol)) {
			const token = nameOf(prop, labelSymbol);
			const preserve = getPropAnn(prop, labelEncodingSymbol);
			const encoded = encodeURIComponent(String(value));
			const label = typeof preserve === "string" ? encoded.replace(/%[0-9A-F]{2}/g, (escape) => {
				const character = String.fromCharCode(Number.parseInt(escape.slice(1), 16));
				return preserve.includes(character) ? character : escape;
			}) : encoded;
			uri = uri.includes(`{${token}+}`) ? uri.replace(`{${token}+}`, () => encodeGreedyLabel(String(value))) : uri.replace(`{${token}}`, () => label);
		} else if (hasPropAnn(prop, headerSymbol)) {
			const hName = nameOf(prop, headerSymbol).toLowerCase();
			const hVal = String(value);
			headers[hName] = mapMemberHeader ? mapMemberHeader(hName, hVal) : hVal;
			if (hName === "content-type") memberContentType = headers[hName];
		} else if (hasPropAnn(prop, querySymbol)) appendQuery(query, nameOf(prop, querySymbol), value);
		else if (hasPropAnn(prop, deepQuerySymbol)) {
			const base = nameOf(prop, deepQuerySymbol);
			const mapped = mapKeys(prop.type, value, "encode", rootDict);
			if (mapped !== null && typeof mapped === "object") {
				for (const [k, v] of Object.entries(mapped)) if (v !== void 0 && v !== null) appendQuery(query, `${base}.${k}`, v);
			}
		} else if (hasPropAnn(prop, formDataFileSymbol)) for (const f of Array.isArray(value) ? value : [value]) files.push(f);
		else if (hasPropAnn(prop, httpBodySymbol)) rawBody = mapKeys(prop.type, value, "encode", rootDict);
		else body[nameOf(prop, bodySymbol)] = hasPropAnn(prop, stringEncodedSymbol) ? stringEncode(value) : mapKeys(prop.type, value, "encode", rootDict);
	}
	for (const [key, value] of Object.entries(inputObj)) {
		if (consumed.has(key) || value === void 0) continue;
		const wire = rootDict?.[key] ?? (unknownKeyToWire ? unknownKeyToWire(key) : key);
		body[typeof wire === "string" ? wire : wire[0]] = rootDict ? mapKeysByDictionary(rootDict, value, "encode") : value;
		hasBodyMembers = true;
	}
	const qs = query.toString();
	const url = `${baseUrl}${uri}${qs ? `?${qs}` : ""}`;
	if (process.env.DISTILLED_DEBUG_HTTP) console.error(`[distilled] -> ${http.method} ${http.uri}`);
	let request = HttpClientRequest.make(http.method)(url).pipe(HttpClientRequest.setHeaders(headers));
	if (http.contentType === "multipart") {
		const form = new FormData();
		const parts = rawBody !== void 0 && typeof rawBody === "object" ? rawBody : body;
		const isFileOrBlob = (v) => v instanceof Blob || v instanceof File;
		for (const [key, value] of Object.entries(parts)) {
			if (value === void 0 || value === null) continue;
			if (isFileOrBlob(value)) form.append(key, value, value instanceof File ? value.name : key);
			else if (value instanceof Uint8Array || value instanceof ArrayBuffer) {
				const bytes = value instanceof Uint8Array ? new Uint8Array(value).buffer : value;
				form.append(key, new Blob([bytes]), key);
			} else if (Array.isArray(value) && value.length > 0 && isFileOrBlob(value[0])) {
				for (const file of value) if (isFileOrBlob(file)) form.append(file instanceof File ? file.name : key, file, file instanceof File ? file.name : void 0);
			} else if (typeof value === "object") form.append(key, JSON.stringify(value));
			else form.append(key, String(value));
		}
		for (const f of files) {
			const filename = f.name ?? "file";
			form.append(filename, f, filename);
		}
		request = request.pipe(HttpClientRequest.bodyFormData(form));
	} else if (http.contentType === "form-urlencoded" && !BODYLESS.has(http.method)) {
		const source = rawBody !== void 0 && typeof rawBody === "object" ? rawBody : body;
		const params = new URLSearchParams();
		for (const [k, v] of flattenToFormPairs(source)) params.append(k, v);
		request = request.pipe(HttpClientRequest.setBody(HttpBody.text(params.toString(), "application/x-www-form-urlencoded")));
	} else if (rawBody !== void 0 && !BODYLESS.has(http.method)) {
		const mediaType = memberContentType ?? http.bodyMediaType;
		if (rawBody instanceof Blob || rawBody instanceof ArrayBuffer) request = request.pipe(HttpClientRequest.setBody(HttpBody.raw(rawBody, { contentType: mediaType })));
		else if (rawBody instanceof Uint8Array) request = request.pipe(HttpClientRequest.setBody(HttpBody.uint8Array(rawBody, mediaType)));
		else if (http.bodyMediaType) request = request.pipe(HttpClientRequest.setBody(typeof rawBody === "string" ? HttpBody.text(rawBody, mediaType) : HttpBody.uint8Array(rawBody, mediaType)));
		else request = request.pipe(HttpClientRequest.bodyJsonUnsafe(rawBody));
	} else if (Object.keys(body).length > 0 || hasBodyMembers && !BODYLESS.has(http.method) && http.method !== "DELETE") request = request.pipe(HttpClientRequest.bodyJsonUnsafe(body));
	return request;
};
const matchesText = (matcher, value) => {
	if (typeof value !== "string") return false;
	if (typeof matcher === "string") return matcher === value;
	const { includes, matches } = matcher;
	return (includes !== void 0 || matches !== void 0) && (includes === void 0 || value.includes(includes)) && (matches === void 0 || new RegExp(matches).test(value));
};
const atPointer = (body, pointer) => {
	if (pointer === "") return body;
	if (!pointer.startsWith("/") || /~(?![01])/u.test(pointer)) return void 0;
	let value = body;
	for (const segment of pointer.slice(1).split("/")) {
		const key = segment.replace(/~1/g, "/").replace(/~0/g, "~");
		if (value === null || typeof value !== "object" || !Object.hasOwn(value, key) || Array.isArray(value) && !/^(0|[1-9][0-9]*)$/.test(key)) return void 0;
		value = value[key];
	}
	return value;
};
const matcherSpecificity = (m) => (m.code !== void 0 ? 1 : 0) + (m.status !== void 0 ? 1 : 0) + (m.message !== void 0 ? 1 : 0) + (m.body === void 0 ? 0 : Object.keys(m.body).length) + (m.headers === void 0 ? 0 : Object.keys(m.headers).length);
const matchesExpression = (m, code, status, message, response = {}) => {
	if (m.code === void 0 && m.status === void 0 && m.message === void 0 && matcherSpecificity(m) === 0) return false;
	if (m.code !== void 0 && m.code !== code) return false;
	if (m.status !== void 0 && m.status !== status) return false;
	if (m.message !== void 0 && !matchesText(m.message, message)) return false;
	if (m.body !== void 0) for (const [pointer, expected] of Object.entries(m.body)) {
		const actual = atPointer(response.body, pointer);
		if (typeof expected === "string" || expected !== null && typeof expected === "object") {
			if (!matchesText(expected, actual)) return false;
		} else if (actual !== expected) return false;
	}
	if (m.headers !== void 0) for (const [name, expected] of Object.entries(m.headers)) {
		if (response.headers === void 0) return false;
		const actual = Object.entries(response.headers).find(([key]) => key.toLowerCase() === name.toLowerCase())?.[1];
		if (!matchesText(expected, actual)) return false;
	}
	return true;
};
const matchTypedError = (errorClasses, status, errors, response = {}) => {
	let best;
	const wireErrors = errors.length > 0 ? errors : [{ message: `HTTP ${status}` }];
	for (const cls of errorClasses) {
		const matchers = getErrorMatchers(cls);
		if (!matchers) continue;
		for (const m of matchers) for (const e of wireErrors) {
			if (!matchesExpression(m, e.code, status, e.message, response)) continue;
			const specificity = matcherSpecificity(m);
			if (!best || specificity > best.specificity) best = {
				cls,
				specificity,
				code: e.code,
				message: e.message
			};
		}
	}
	if (!best) return void 0;
	return new best.cls({
		code: best.code ?? 0,
		message: best.message,
		body: response.body,
		headers: response.headers
	});
};

//#endregion
export { buildRequest, encodeGreedyLabel, getAnn, getPropAnn, getProps, hasPropAnn, isOpaqueValue, mapKeys, mapKeysByDictionary, matchTypedError, matchesExpression, nameOf, resolveNode, protocol_http_exports as t };