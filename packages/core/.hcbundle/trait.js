import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";

//#region lib/trait.js
var trait_exports = /* @__PURE__ */ __exportAll({
	Body: () => Body,
	DeepQuery: () => DeepQuery,
	FormDataFile: () => FormDataFile,
	Header: () => Header,
	Http: () => Http,
	HttpBody: () => HttpBody,
	KeyDictionary: () => KeyDictionary,
	Label: () => Label,
	LabelEncoding: () => LabelEncoding,
	Query: () => Query,
	ResponseCode: () => ResponseCode,
	StringEncoded: () => StringEncoded,
	UnionCases: () => UnionCases,
	all: () => all,
	annotationMetaSymbol: () => annotationMetaSymbol,
	applyErrorMatchers: () => applyErrorMatchers,
	bodySymbol: () => bodySymbol,
	deepQuerySymbol: () => deepQuerySymbol,
	errorMatchersSymbol: () => errorMatchersSymbol,
	formDataFileSymbol: () => formDataFileSymbol,
	getErrorMatchers: () => getErrorMatchers,
	headerSymbol: () => headerSymbol,
	httpBodySymbol: () => httpBodySymbol,
	httpSymbol: () => httpSymbol,
	keyDictionarySymbol: () => keyDictionarySymbol,
	labelEncodingSymbol: () => labelEncodingSymbol,
	labelSymbol: () => labelSymbol,
	makeAnnotation: () => makeAnnotation,
	querySymbol: () => querySymbol,
	responseCodeSymbol: () => responseCodeSymbol,
	stringEncodedSymbol: () => stringEncodedSymbol,
	unionCasesSymbol: () => unionCasesSymbol
});
const annotationMetaSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/annotation-meta");
function makeAnnotation(sym, value) {
	const fn = (schema) => schema.annotate({ [sym]: value });
	fn[annotationMetaSymbol] = [{
		symbol: sym,
		value
	}];
	fn[sym] = value;
	return fn;
}
function all(...annotations) {
	const entries = [];
	const raw = {};
	for (const a of annotations) for (const entry of a[annotationMetaSymbol]) {
		entries.push(entry);
		raw[entry.symbol] = entry.value;
	}
	const fn = (schema) => schema.annotate(raw);
	fn[annotationMetaSymbol] = entries;
	for (const { symbol: sym, value } of entries) fn[sym] = value;
	return fn;
}
const httpSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http");
const Http = (trait) => makeAnnotation(httpSymbol, trait);
const labelSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/label");
const Label = (name) => makeAnnotation(labelSymbol, name ?? true);
const labelEncodingSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/label-encoding");
const LabelEncoding = (options) => {
	if (!/^[!$&'()*+,;=:@]*$/.test(options.preserve)) throw new TypeError("LabelEncoding can preserve only URI path-segment delimiters");
	return makeAnnotation(labelEncodingSymbol, options.preserve);
};
const responseCodeSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/response-code");
const ResponseCode = () => makeAnnotation(responseCodeSymbol, true);
const headerSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/header");
const Header = (name) => makeAnnotation(headerSymbol, name ?? true);
const bodySymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/body");
const Body = (name) => makeAnnotation(bodySymbol, name ?? true);
const querySymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/query");
const Query = (name) => makeAnnotation(querySymbol, name ?? true);
const deepQuerySymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/deep-query");
const DeepQuery = (name) => makeAnnotation(deepQuerySymbol, name ?? true);
const httpBodySymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http-body");
const HttpBody = () => makeAnnotation(httpBodySymbol, true);
const stringEncodedSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/http/string-encoded");
const StringEncoded = () => makeAnnotation(stringEncodedSymbol, true);
const formDataFileSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/form-data-file");
const FormDataFile = () => makeAnnotation(formDataFileSymbol, true);
const keyDictionarySymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/key-dictionary");
const KeyDictionary = (dict) => makeAnnotation(keyDictionarySymbol, dict);
const unionCasesSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/union-cases");
const UnionCases = (cases, discriminator) => makeAnnotation(unionCasesSymbol, discriminator ? {
	cases,
	discriminator
} : { cases });
const errorMatchersSymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/error-matchers");
const applyErrorMatchers = (cls, matchers) => {
	cls[errorMatchersSymbol] = matchers;
	return cls;
};
const getErrorMatchers = (cls) => cls?.[errorMatchersSymbol];

//#endregion
export { Body, DeepQuery, FormDataFile, Header, Http, HttpBody, KeyDictionary, Label, LabelEncoding, Query, ResponseCode, StringEncoded, UnionCases, all, annotationMetaSymbol, applyErrorMatchers, bodySymbol, deepQuerySymbol, errorMatchersSymbol, formDataFileSymbol, getErrorMatchers, headerSymbol, httpBodySymbol, httpSymbol, keyDictionarySymbol, labelEncodingSymbol, labelSymbol, makeAnnotation, querySymbol, responseCodeSymbol, stringEncodedSymbol, trait_exports as t, unionCasesSymbol };