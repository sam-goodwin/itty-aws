import type * as AST from "effect/SchemaAST";
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
declare const annotationMetaSymbol: "@distilled.cloud/core/annotation-meta";
type Annotatable = {
    annotate(annotations: any): Annotatable;
};
/**
 * A callable that pipes through a schema (or PropertySignature) to attach a
 * symbol-keyed annotation. Also exposes the same key/value via index access so
 * the function can be passed directly as the second argument to `S.Class(...)`.
 */
export interface Annotation {
    <A extends Annotatable>(schema: A): A;
    readonly [annotationMetaSymbol]: Array<{
        symbol: string;
        value: unknown;
    }>;
    readonly [key: symbol]: unknown;
    readonly [key: string]: unknown;
}
/**
 * Combine multiple annotations into a single callable, for use as the second
 * argument to `S.Class(...)` where only one annotations value is accepted.
 */
export declare function all(...annotations: Annotation[]): Annotation;
export declare const bodySymbol: "@distilled.cloud/core/body";
export declare const headerSymbol: "@distilled.cloud/core/header";
export declare const prefixHeadersSymbol: "@distilled.cloud/core/prefix-headers";
export declare const labelSymbol: "@distilled.cloud/core/label";
export declare const querySymbol: "@distilled.cloud/core/query";
export declare const queryParamsSymbol: "@distilled.cloud/core/query-params";
export declare const responseCodeSymbol: "@distilled.cloud/core/response-code";
export declare const hostLabelSymbol: "@distilled.cloud/core/host-label";
export declare const httpSymbol: "@distilled.cloud/core/http";
export declare const httpErrorSymbol: "@distilled.cloud/core/http-error";
export declare const checksumRequiredSymbol: "@distilled.cloud/core/checksum-required";
export declare const sparseSymbol: "@distilled.cloud/core/sparse";
export declare const idempotencyTokenSymbol: "@distilled.cloud/core/idempotency-token";
export declare const retryableSymbol: "@distilled.cloud/core/retryable";
export declare const streamingSymbol: "@distilled.cloud/core/streaming";
export declare const requiresLengthSymbol: "@distilled.cloud/core/requires-length";
export declare const timestampFormatSymbol: "@distilled.cloud/core/timestamp-format";
export declare const eventHeaderSymbol: "@distilled.cloud/core/event-header";
export declare const eventPayloadSymbol: "@distilled.cloud/core/event-payload";
export declare const serviceSymbol: "@distilled.cloud/core/service";
export declare const serviceVersionSymbol: "@distilled.cloud/core/service-version";
export declare const authSigv4Symbol: "@distilled.cloud/core/auth-sigv4";
export declare const contextParamSymbol: "@distilled.cloud/core/context-param";
export declare const staticContextParamsSymbol: "@distilled.cloud/core/static-context-params";
export declare const clientContextParamsSymbol: "@distilled.cloud/core/client-context-params";
export declare const endpointRuleSetSymbol: "@distilled.cloud/core/endpoint-rule-set";
export declare const endpointResolverSymbol: "@distilled.cloud/core/endpoint-resolver";
export declare const paginatedSymbol: "@distilled.cloud/core/paginated";
/** Bind a member to the request/response body. With a name, use that as the field key. */
export declare const Body: (name?: string) => Annotation;
/** Bind a member to an HTTP header. */
export declare const Header: (name?: string) => Annotation;
/** Bind a map member: each entry becomes a header with the given key prefix. */
export declare const PrefixHeaders: (prefix: string) => Annotation;
/** Bind a member to a URI path label. */
export declare const Label: (name?: string) => Annotation;
/** Bind a member to a query string parameter. */
export declare const Query: (name?: string) => Annotation;
/** Bind a map member: each entry becomes a query string parameter. */
export declare const QueryParams: () => Annotation;
/** Bind a member to the HTTP response status code. */
export declare const ResponseCode: () => Annotation;
/** Bind a member to a label in the endpoint host prefix. */
export declare const HostLabel: () => Annotation;
export interface HttpTrait {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
    uri: string;
    /** Default success status code (overridable by `ResponseCode`). */
    code?: number;
}
/** Operation HTTP binding: method + URI template. */
export declare const Http: (trait: HttpTrait) => Annotation;
/** Operation requires a body checksum (e.g. Content-MD5). */
export declare const ChecksumRequired: () => Annotation;
/** Override the HTTP status code an error class corresponds to. */
export declare const HttpError: (statusCode: number) => Annotation;
export interface RetryableTrait {
    throttling?: boolean;
}
/** Mark an error as retryable. Throttling errors get retry-after handling. */
export declare const Retryable: (trait?: RetryableTrait) => Annotation;
/** List/map permits null entries on the wire. */
export declare const Sparse: () => Annotation;
/** Auto-generate a UUID for this member if the caller didn't provide one. */
export declare const IdempotencyToken: () => Annotation;
/**
 * Mark a member or shape as streaming. The protocol decides the runtime carrier
 * (Stream, ReadableStream, raw bytes) and the wire framing.
 */
export declare const Streaming: () => Annotation;
/** Streaming body needs a known content length up front. */
export declare const RequiresLength: () => Annotation;
export type TimestampFormatType = "date-time" | "http-date" | "epoch-seconds";
/**
 * Declare the wire format the protocol should use for this Date.
 * The schema's runtime type stays `Date` — protocols read this annotation to
 * pick the encode/decode transform.
 */
export declare const TimestampFormat: (format: TimestampFormatType) => Annotation;
/** Within an event struct: this member is serialized as an event header. */
export declare const EventHeader: () => Annotation;
/** Within an event struct: this member is the event payload. */
export declare const EventPayload: () => Annotation;
export interface ServiceTrait {
    sdkId: string;
    arnNamespace?: string;
    endpointPrefix?: string;
    cloudFormationName?: string;
    cloudTrailEventSource?: string;
}
/** Service identification (sdkId + related metadata). */
export declare const Service: (trait: ServiceTrait) => Annotation;
/** Service API version. */
export declare const ServiceVersion: (version: string) => Annotation;
export interface AuthSigv4Trait {
    name: string;
}
/** SigV4 signing configuration. */
export declare const AuthSigv4: (trait: AuthSigv4Trait) => Annotation;
/** Member contributes to endpoint resolution context under the given name. */
export declare const ContextParam: (name: string) => Annotation;
export type StaticContextParamsDefinition = Record<string, {
    value: unknown;
}>;
/** Operation-level: contribute fixed values to endpoint resolution context. */
export declare const StaticContextParams: (params: StaticContextParamsDefinition) => Annotation;
export interface ClientContextParamDefinition {
    type: string;
    documentation?: string;
}
/** Service-level: parameters the client constructor accepts for endpoint resolution. */
export declare const ClientContextParams: (params: Record<string, ClientContextParamDefinition>) => Annotation;
/** Raw endpoint rule set (data-driven). */
export declare const EndpointRuleSet: (ruleSet: unknown) => Annotation;
export type EndpointResolverResult = {
    type: "endpoint";
    endpoint: {
        url: string;
        properties: Record<string, unknown>;
        headers: Record<string, string[]>;
    };
} | {
    type: "error";
    message: string;
};
export interface EndpointResolverHelpers {
    partition: (region: unknown) => unknown;
    parseArn: (value: unknown) => unknown;
    isVirtualHostableS3Bucket: (value: unknown, allowSubDomains?: unknown) => boolean;
    parseURL: (url: unknown) => unknown;
    substring: (input: unknown, start: unknown, stop: unknown, reverse: unknown) => unknown;
    uriEncode: (value: unknown) => unknown;
    isValidHostLabel: (value: unknown, allowSubDomains: unknown) => boolean;
    getAttr: (value: unknown, path: string) => unknown;
    resolveTemplates: <T>(value: T) => T;
}
export type EndpointResolverFn = (params: Record<string, unknown>, helpers: EndpointResolverHelpers) => EndpointResolverResult;
/** Compiled endpoint resolver (function form). */
export declare const EndpointResolver: (resolver: EndpointResolverFn) => Annotation;
export interface PaginatedTrait {
    inputToken: string;
    outputToken: string;
    items?: string;
    pageSize?: string;
}
/** Operation is paginated; tokens identify the page cursor on input/output. */
export declare const Paginated: (trait: PaginatedTrait) => Annotation;
/**
 * Read an annotation off an AST node, transparently unwrapping through
 * `Suspend`, single-member nullable `Union`, and `Declaration.encoding`.
 * Protocols call this so traits survive `S.optional`, transforms, lazy refs.
 */
export declare const getAnnotation: <T>(ast: AST.AST, symbol: string) => T | undefined;
/** Boolean form of `getAnnotation`. */
export declare const hasAnnotation: (ast: AST.AST, symbol: string) => boolean;
/** Read an annotation from a PropertySignature, falling back to its inner AST. */
export declare const getPropAnnotation: <T>(prop: AST.PropertySignature, symbol: string) => T | undefined;
/** Boolean form of `getPropAnnotation`. */
export declare const hasPropAnnotation: (prop: AST.PropertySignature, symbol: string) => boolean;
export declare const isBody: (prop: AST.PropertySignature) => boolean;
export declare const getBodyName: (prop: AST.PropertySignature) => string | undefined;
export declare const isHeader: (prop: AST.PropertySignature) => boolean;
export declare const getHeaderName: (prop: AST.PropertySignature) => string | undefined;
export declare const getPrefixHeaders: (prop: AST.PropertySignature) => string | undefined;
export declare const isLabel: (prop: AST.PropertySignature) => boolean;
export declare const getLabelName: (prop: AST.PropertySignature) => string | undefined;
export declare const isQuery: (prop: AST.PropertySignature) => boolean;
export declare const getQueryName: (prop: AST.PropertySignature) => string | undefined;
export declare const isQueryParams: (prop: AST.PropertySignature) => boolean;
export declare const isResponseCode: (prop: AST.PropertySignature) => boolean;
export declare const isHostLabel: (prop: AST.PropertySignature) => boolean;
export declare const isIdempotencyToken: (prop: AST.PropertySignature) => boolean;
export declare const getContextParam: (prop: AST.PropertySignature) => string | undefined;
export declare const isEventHeader: (prop: AST.PropertySignature) => boolean;
export declare const isEventPayload: (prop: AST.PropertySignature) => boolean;
export declare const getTimestampFormat: (prop: AST.PropertySignature) => TimestampFormatType | undefined;
export declare const getHttp: (ast: AST.AST) => HttpTrait | undefined;
export declare const getHttpErrorCode: (ast: AST.AST) => number | undefined;
export declare const isChecksumRequired: (ast: AST.AST) => boolean;
export declare const isStreaming: (ast: AST.AST) => boolean;
export declare const isRequiresLength: (ast: AST.AST) => boolean;
export declare const isSparse: (ast: AST.AST) => boolean;
export declare const getRetryable: (ast: AST.AST) => RetryableTrait | undefined;
export declare const getTimestampFormatFromAST: (ast: AST.AST) => TimestampFormatType | undefined;
export declare const getService: (ast: AST.AST) => ServiceTrait | undefined;
export declare const getServiceVersion: (ast: AST.AST) => string | undefined;
export declare const getAuthSigv4: (ast: AST.AST) => AuthSigv4Trait | undefined;
export declare const getStaticContextParams: (ast: AST.AST) => StaticContextParamsDefinition | undefined;
export declare const getClientContextParams: (ast: AST.AST) => Record<string, ClientContextParamDefinition> | undefined;
export declare const getEndpointRuleSet: (ast: AST.AST) => unknown;
export declare const getEndpointResolver: (ast: AST.AST) => EndpointResolverFn | undefined;
export declare const getPaginated: (ast: AST.AST) => PaginatedTrait | undefined;
export {};
//# sourceMappingURL=traits.aislop.d.ts.map