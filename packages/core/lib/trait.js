const annotationMetaSymbol = Symbol.for("@distilled.cloud/core/annotation-meta");
function makeAnnotation(sym, value) {
    const fn = (schema) => schema.annotate({ [sym]: value });
    fn[annotationMetaSymbol] = [{ symbol: sym, value }];
    fn[sym] = value;
    return fn;
}
//#region Generic Operation traits
//#endregion
//#region Generic Http traits
export const responseCodeSymbol = Symbol.for("@distilled.cloud/core/http/response-code");
export const ResponseCode = () => makeAnnotation(responseCodeSymbol, true);
export const headerSymbol = Symbol.for("@distilled.cloud/core/http/header");
export const Header = (name) => makeAnnotation(headerSymbol, name ?? true);
export const bodySymbol = Symbol.for("@distilled.cloud/core/http/body");
export const Body = (name) => makeAnnotation(bodySymbol, name ?? true);
export const querySymbol = Symbol.for("@distilled.cloud/core/http/query");
export const Query = (name) => makeAnnotation(querySymbol, name ?? true);
//#endregion
//#region Generic JSON traits
//#endregion
//# sourceMappingURL=trait.js.map