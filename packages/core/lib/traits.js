/**
 * Trait system for distilled.
 *
 * Traits are pure annotations — they only stamp a symbol on the schema.
 * Protocols read these annotations to decide how to serialize a request,
 * deserialize a response, route to an endpoint, etc.
 *
 * Traits MUST NOT:
 *   - select a protocol or wire format (that's the protocol layer's job)
 *   - embed transforms (the protocol picks the wire format for blobs / timestamps)
 *   - embed middleware (compose middleware into the protocol layer instead)
 *   - reference format-specific concepts (xmlName, jsonName, etc.) — use the
 *     unified binding traits (`Body(name?)`, `Header(name?)`, …) and let the
 *     protocol decide how to map the name into its format.
 */
// =============================================================================
// Annotation primitive
// =============================================================================
const annotationMetaSymbol = "@distilled.cloud/core/annotation-meta";
function makeAnnotation(sym, value) {
    const fn = (schema) => schema.annotate({ [sym]: value });
    fn[annotationMetaSymbol] = [{ symbol: sym, value }];
    fn[sym] = value;
    return fn;
}
/**
 * Combine multiple annotations into a single callable, for use as the second
 * argument to `S.Class(...)` where only one annotations value is accepted.
 */
export function all(...annotations) {
    const entries = [];
    const raw = {};
    for (const a of annotations) {
        for (const entry of a[annotationMetaSymbol]) {
            entries.push(entry);
            raw[entry.symbol] = entry.value;
        }
    }
    const fn = (schema) => schema.annotate(raw);
    fn[annotationMetaSymbol] = entries;
    for (const { symbol, value } of entries)
        fn[symbol] = value;
    return fn;
}
// =============================================================================
// Symbols
// =============================================================================
export const bodySymbol = "@distilled.cloud/core/body";
export const headerSymbol = "@distilled.cloud/core/header";
export const prefixHeadersSymbol = "@distilled.cloud/core/prefix-headers";
export const labelSymbol = "@distilled.cloud/core/label";
export const querySymbol = "@distilled.cloud/core/query";
export const queryParamsSymbol = "@distilled.cloud/core/query-params";
export const responseCodeSymbol = "@distilled.cloud/core/response-code";
export const hostLabelSymbol = "@distilled.cloud/core/host-label";
export const httpSymbol = "@distilled.cloud/core/http";
export const httpErrorSymbol = "@distilled.cloud/core/http-error";
export const checksumRequiredSymbol = "@distilled.cloud/core/checksum-required";
export const sparseSymbol = "@distilled.cloud/core/sparse";
export const idempotencyTokenSymbol = "@distilled.cloud/core/idempotency-token";
export const retryableSymbol = "@distilled.cloud/core/retryable";
export const streamingSymbol = "@distilled.cloud/core/streaming";
export const requiresLengthSymbol = "@distilled.cloud/core/requires-length";
export const timestampFormatSymbol = "@distilled.cloud/core/timestamp-format";
export const eventHeaderSymbol = "@distilled.cloud/core/event-header";
export const eventPayloadSymbol = "@distilled.cloud/core/event-payload";
export const serviceSymbol = "@distilled.cloud/core/service";
export const serviceVersionSymbol = "@distilled.cloud/core/service-version";
export const authSigv4Symbol = "@distilled.cloud/core/auth-sigv4";
export const contextParamSymbol = "@distilled.cloud/core/context-param";
export const staticContextParamsSymbol = "@distilled.cloud/core/static-context-params";
export const clientContextParamsSymbol = "@distilled.cloud/core/client-context-params";
export const endpointRuleSetSymbol = "@distilled.cloud/core/endpoint-rule-set";
export const endpointResolverSymbol = "@distilled.cloud/core/endpoint-resolver";
export const paginatedSymbol = "@distilled.cloud/core/paginated";
// =============================================================================
// HTTP binding traits (member-level)
// =============================================================================
/** Bind a member to the request/response body. With a name, use that as the field key. */
export const Body = (name) => makeAnnotation(bodySymbol, name ?? true);
/** Bind a member to an HTTP header. */
export const Header = (name) => makeAnnotation(headerSymbol, name ?? true);
/** Bind a map member: each entry becomes a header with the given key prefix. */
export const PrefixHeaders = (prefix) => makeAnnotation(prefixHeadersSymbol, prefix);
/** Bind a member to a URI path label. */
export const Label = (name) => makeAnnotation(labelSymbol, name ?? true);
/** Bind a member to a query string parameter. */
export const Query = (name) => makeAnnotation(querySymbol, name ?? true);
/** Bind a map member: each entry becomes a query string parameter. */
export const QueryParams = () => makeAnnotation(queryParamsSymbol, true);
/** Bind a member to the HTTP response status code. */
export const ResponseCode = () => makeAnnotation(responseCodeSymbol, true);
/** Bind a member to a label in the endpoint host prefix. */
export const HostLabel = () => makeAnnotation(hostLabelSymbol, true);
/** Operation HTTP binding: method + URI template. */
export const Http = (trait) => makeAnnotation(httpSymbol, trait);
/** Operation requires a body checksum (e.g. Content-MD5). */
export const ChecksumRequired = () => makeAnnotation(checksumRequiredSymbol, true);
// =============================================================================
// Errors
// =============================================================================
/** Override the HTTP status code an error class corresponds to. */
export const HttpError = (statusCode) => makeAnnotation(httpErrorSymbol, statusCode);
/** Mark an error as retryable. Throttling errors get retry-after handling. */
export const Retryable = (trait) => makeAnnotation(retryableSymbol, trait ?? {});
// =============================================================================
// Shape behavior
// =============================================================================
/** List/map permits null entries on the wire. */
export const Sparse = () => makeAnnotation(sparseSymbol, true);
/** Auto-generate a UUID for this member if the caller didn't provide one. */
export const IdempotencyToken = () => makeAnnotation(idempotencyTokenSymbol, true);
// =============================================================================
// Streaming
// =============================================================================
/**
 * Mark a member or shape as streaming. The protocol decides the runtime carrier
 * (Stream, ReadableStream, raw bytes) and the wire framing.
 */
export const Streaming = () => makeAnnotation(streamingSymbol, true);
/** Streaming body needs a known content length up front. */
export const RequiresLength = () => makeAnnotation(requiresLengthSymbol, true);
/**
 * Declare the wire format the protocol should use for this Date.
 * The schema's runtime type stays `Date` — protocols read this annotation to
 * pick the encode/decode transform.
 */
export const TimestampFormat = (format) => makeAnnotation(timestampFormatSymbol, format);
// =============================================================================
// Event streams
// =============================================================================
/** Within an event struct: this member is serialized as an event header. */
export const EventHeader = () => makeAnnotation(eventHeaderSymbol, true);
/** Within an event struct: this member is the event payload. */
export const EventPayload = () => makeAnnotation(eventPayloadSymbol, true);
/** Service identification (sdkId + related metadata). */
export const Service = (trait) => makeAnnotation(serviceSymbol, trait);
/** Service API version. */
export const ServiceVersion = (version) => makeAnnotation(serviceVersionSymbol, version);
/** SigV4 signing configuration. */
export const AuthSigv4 = (trait) => makeAnnotation(authSigv4Symbol, trait);
// =============================================================================
// Endpoint routing
// =============================================================================
/** Member contributes to endpoint resolution context under the given name. */
export const ContextParam = (name) => makeAnnotation(contextParamSymbol, name);
/** Operation-level: contribute fixed values to endpoint resolution context. */
export const StaticContextParams = (params) => makeAnnotation(staticContextParamsSymbol, params);
/** Service-level: parameters the client constructor accepts for endpoint resolution. */
export const ClientContextParams = (params) => makeAnnotation(clientContextParamsSymbol, params);
/** Raw endpoint rule set (data-driven). */
export const EndpointRuleSet = (ruleSet) => makeAnnotation(endpointRuleSetSymbol, ruleSet);
/** Compiled endpoint resolver (function form). */
export const EndpointResolver = (resolver) => makeAnnotation(endpointResolverSymbol, resolver);
/** Operation is paginated; tokens identify the page cursor on input/output. */
export const Paginated = (trait) => makeAnnotation(paginatedSymbol, trait);
// =============================================================================
// AST accessors (used by protocols)
// =============================================================================
/**
 * Read an annotation off an AST node, transparently unwrapping through
 * `Suspend`, single-member nullable `Union`, and `Declaration.encoding`.
 * Protocols call this so traits survive `S.optional`, transforms, lazy refs.
 */
export const getAnnotation = (ast, symbol) => {
    const direct = ast.annotations?.[symbol];
    if (direct !== undefined)
        return direct;
    if (ast._tag === "Suspend")
        return getAnnotation(ast.thunk(), symbol);
    if (ast._tag === "Declaration" && ast.encoding?.length) {
        const toValue = ast.encoding[0].to?.annotations?.[symbol];
        if (toValue !== undefined)
            return toValue;
    }
    if (ast.encoding && ast.encoding.length > 0) {
        const encValue = getAnnotation(ast.encoding[0].to, symbol);
        if (encValue !== undefined)
            return encValue;
    }
    if (ast._tag === "Union") {
        const nonNullish = ast.types.filter((t) => t._tag !== "Undefined" && !(t._tag === "Literal" && t.literal === null));
        if (nonNullish.length === 1)
            return getAnnotation(nonNullish[0], symbol);
    }
    return undefined;
};
/** Boolean form of `getAnnotation`. */
export const hasAnnotation = (ast, symbol) => getAnnotation(ast, symbol) !== undefined;
/** Read an annotation from a PropertySignature, falling back to its inner AST. */
export const getPropAnnotation = (prop, symbol) => {
    // @ts-expect-error — Effect's PropertySignature annotations are internal
    const direct = prop.annotations?.[symbol];
    if (direct !== undefined)
        return direct;
    return getAnnotation(prop.type, symbol);
};
/** Boolean form of `getPropAnnotation`. */
export const hasPropAnnotation = (prop, symbol) => getPropAnnotation(prop, symbol) !== undefined;
// -- Member-level binding shortcuts ---------------------------------------------
/**
 * Get the wire name a member binds to (header / query / label / body field).
 * Returns the configured override, or `undefined` to fall back to the property key.
 */
const nameOf = (prop, symbol) => {
    const v = getPropAnnotation(prop, symbol);
    return typeof v === "string" ? v : undefined;
};
export const isBody = (prop) => hasPropAnnotation(prop, bodySymbol);
export const getBodyName = (prop) => nameOf(prop, bodySymbol);
export const isHeader = (prop) => hasPropAnnotation(prop, headerSymbol);
export const getHeaderName = (prop) => nameOf(prop, headerSymbol);
export const getPrefixHeaders = (prop) => getPropAnnotation(prop, prefixHeadersSymbol);
export const isLabel = (prop) => hasPropAnnotation(prop, labelSymbol);
export const getLabelName = (prop) => nameOf(prop, labelSymbol);
export const isQuery = (prop) => hasPropAnnotation(prop, querySymbol);
export const getQueryName = (prop) => nameOf(prop, querySymbol);
export const isQueryParams = (prop) => hasPropAnnotation(prop, queryParamsSymbol);
export const isResponseCode = (prop) => hasPropAnnotation(prop, responseCodeSymbol);
export const isHostLabel = (prop) => hasPropAnnotation(prop, hostLabelSymbol);
export const isIdempotencyToken = (prop) => hasPropAnnotation(prop, idempotencyTokenSymbol);
export const getContextParam = (prop) => getPropAnnotation(prop, contextParamSymbol);
export const isEventHeader = (prop) => hasPropAnnotation(prop, eventHeaderSymbol);
export const isEventPayload = (prop) => hasPropAnnotation(prop, eventPayloadSymbol);
export const getTimestampFormat = (prop) => getPropAnnotation(prop, timestampFormatSymbol);
// -- Shape / operation / service level -----------------------------------------
export const getHttp = (ast) => getAnnotation(ast, httpSymbol);
export const getHttpErrorCode = (ast) => getAnnotation(ast, httpErrorSymbol);
export const isChecksumRequired = (ast) => hasAnnotation(ast, checksumRequiredSymbol);
export const isStreaming = (ast) => {
    if (hasAnnotation(ast, streamingSymbol))
        return true;
    if (ast._tag === "Union")
        return ast.types.some((t) => isStreaming(t));
    return false;
};
export const isRequiresLength = (ast) => hasAnnotation(ast, requiresLengthSymbol);
export const isSparse = (ast) => hasAnnotation(ast, sparseSymbol);
export const getRetryable = (ast) => getAnnotation(ast, retryableSymbol);
export const getTimestampFormatFromAST = (ast) => getAnnotation(ast, timestampFormatSymbol);
export const getService = (ast) => getAnnotation(ast, serviceSymbol);
export const getServiceVersion = (ast) => getAnnotation(ast, serviceVersionSymbol);
export const getAuthSigv4 = (ast) => getAnnotation(ast, authSigv4Symbol);
export const getStaticContextParams = (ast) => getAnnotation(ast, staticContextParamsSymbol);
export const getClientContextParams = (ast) => getAnnotation(ast, clientContextParamsSymbol);
export const getEndpointRuleSet = (ast) => getAnnotation(ast, endpointRuleSetSymbol);
export const getEndpointResolver = (ast) => getAnnotation(ast, endpointResolverSymbol);
export const getPaginated = (ast) => getAnnotation(ast, paginatedSymbol);
//# sourceMappingURL=traits.js.map