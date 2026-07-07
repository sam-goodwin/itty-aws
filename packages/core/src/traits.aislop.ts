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

// =============================================================================
// Annotation primitive
// =============================================================================

const annotationMetaSymbol = "@distilled.cloud/core/annotation-meta" as const;

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
  readonly [annotationMetaSymbol]: Array<{ symbol: string; value: unknown }>;
  readonly [key: symbol]: unknown;
  readonly [key: string]: unknown;
}

function makeAnnotation<T>(sym: string, value: T): Annotation {
  const fn = <A extends Annotatable>(schema: A): A =>
    schema.annotate({ [sym]: value }) as A;
  (fn as any)[annotationMetaSymbol] = [{ symbol: sym, value }];
  (fn as any)[sym] = value;
  return fn as Annotation;
}

/**
 * Combine multiple annotations into a single callable, for use as the second
 * argument to `S.Class(...)` where only one annotations value is accepted.
 */
export function all(...annotations: Annotation[]): Annotation {
  const entries: Array<{ symbol: string; value: unknown }> = [];
  const raw: Record<string, unknown> = {};
  for (const a of annotations) {
    for (const entry of a[annotationMetaSymbol]) {
      entries.push(entry);
      raw[entry.symbol] = entry.value;
    }
  }
  const fn = <A extends Annotatable>(schema: A): A => schema.annotate(raw) as A;
  (fn as any)[annotationMetaSymbol] = entries;
  for (const { symbol, value } of entries) (fn as any)[symbol] = value;
  return fn as Annotation;
}

// =============================================================================
// Symbols
// =============================================================================

export const bodySymbol = "@distilled.cloud/core/body" as const;
export const headerSymbol = "@distilled.cloud/core/header" as const;
export const prefixHeadersSymbol =
  "@distilled.cloud/core/prefix-headers" as const;
export const labelSymbol = "@distilled.cloud/core/label" as const;
export const querySymbol = "@distilled.cloud/core/query" as const;
export const queryParamsSymbol = "@distilled.cloud/core/query-params" as const;
export const responseCodeSymbol =
  "@distilled.cloud/core/response-code" as const;
export const hostLabelSymbol = "@distilled.cloud/core/host-label" as const;

export const httpSymbol = "@distilled.cloud/core/http" as const;
export const httpErrorSymbol = "@distilled.cloud/core/http-error" as const;
export const checksumRequiredSymbol =
  "@distilled.cloud/core/checksum-required" as const;

export const sparseSymbol = "@distilled.cloud/core/sparse" as const;
export const idempotencyTokenSymbol =
  "@distilled.cloud/core/idempotency-token" as const;
export const retryableSymbol = "@distilled.cloud/core/retryable" as const;

export const streamingSymbol = "@distilled.cloud/core/streaming" as const;
export const requiresLengthSymbol =
  "@distilled.cloud/core/requires-length" as const;

export const timestampFormatSymbol =
  "@distilled.cloud/core/timestamp-format" as const;

export const eventHeaderSymbol = "@distilled.cloud/core/event-header" as const;
export const eventPayloadSymbol =
  "@distilled.cloud/core/event-payload" as const;

export const serviceSymbol = "@distilled.cloud/core/service" as const;
export const serviceVersionSymbol =
  "@distilled.cloud/core/service-version" as const;
export const authSigv4Symbol = "@distilled.cloud/core/auth-sigv4" as const;

export const contextParamSymbol =
  "@distilled.cloud/core/context-param" as const;
export const staticContextParamsSymbol =
  "@distilled.cloud/core/static-context-params" as const;
export const clientContextParamsSymbol =
  "@distilled.cloud/core/client-context-params" as const;
export const endpointRuleSetSymbol =
  "@distilled.cloud/core/endpoint-rule-set" as const;
export const endpointResolverSymbol =
  "@distilled.cloud/core/endpoint-resolver" as const;

export const paginatedSymbol = "@distilled.cloud/core/paginated" as const;

// =============================================================================
// HTTP binding traits (member-level)
// =============================================================================

/** Bind a member to the request/response body. With a name, use that as the field key. */
export const Body = (name?: string) => makeAnnotation(bodySymbol, name ?? true);

/** Bind a member to an HTTP header. */
export const Header = (name?: string) =>
  makeAnnotation(headerSymbol, name ?? true);

/** Bind a map member: each entry becomes a header with the given key prefix. */
export const PrefixHeaders = (prefix: string) =>
  makeAnnotation(prefixHeadersSymbol, prefix);

/** Bind a member to a URI path label. */
export const Label = (name?: string) =>
  makeAnnotation(labelSymbol, name ?? true);

/** Bind a member to a query string parameter. */
export const Query = (name?: string) =>
  makeAnnotation(querySymbol, name ?? true);

/** Bind a map member: each entry becomes a query string parameter. */
export const QueryParams = () => makeAnnotation(queryParamsSymbol, true);

/** Bind a member to the HTTP response status code. */
export const ResponseCode = () => makeAnnotation(responseCodeSymbol, true);

/** Bind a member to a label in the endpoint host prefix. */
export const HostLabel = () => makeAnnotation(hostLabelSymbol, true);

// =============================================================================
// Operation-level
// =============================================================================

export interface HttpTrait {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  uri: string;
  /** Default success status code (overridable by `ResponseCode`). */
  code?: number;
}

/** Operation HTTP binding: method + URI template. */
export const Http = (trait: HttpTrait) => makeAnnotation(httpSymbol, trait);

/** Operation requires a body checksum (e.g. Content-MD5). */
export const ChecksumRequired = () =>
  makeAnnotation(checksumRequiredSymbol, true);

// =============================================================================
// Errors
// =============================================================================

/** Override the HTTP status code an error class corresponds to. */
export const HttpError = (statusCode: number) =>
  makeAnnotation(httpErrorSymbol, statusCode);

export interface RetryableTrait {
  throttling?: boolean;
}

/** Mark an error as retryable. Throttling errors get retry-after handling. */
export const Retryable = (trait?: RetryableTrait) =>
  makeAnnotation(retryableSymbol, trait ?? {});

// =============================================================================
// Shape behavior
// =============================================================================

/** List/map permits null entries on the wire. */
export const Sparse = () => makeAnnotation(sparseSymbol, true);

/** Auto-generate a UUID for this member if the caller didn't provide one. */
export const IdempotencyToken = () =>
  makeAnnotation(idempotencyTokenSymbol, true);

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

// =============================================================================
// Timestamp (annotation-only; protocol picks the wire transform)
// =============================================================================

export type TimestampFormatType = "date-time" | "http-date" | "epoch-seconds";

/**
 * Declare the wire format the protocol should use for this Date.
 * The schema's runtime type stays `Date` — protocols read this annotation to
 * pick the encode/decode transform.
 */
export const TimestampFormat = (format: TimestampFormatType) =>
  makeAnnotation(timestampFormatSymbol, format);

// =============================================================================
// Event streams
// =============================================================================

/** Within an event struct: this member is serialized as an event header. */
export const EventHeader = () => makeAnnotation(eventHeaderSymbol, true);

/** Within an event struct: this member is the event payload. */
export const EventPayload = () => makeAnnotation(eventPayloadSymbol, true);

// =============================================================================
// Service identity / auth
// =============================================================================

export interface ServiceTrait {
  sdkId: string;
  arnNamespace?: string;
  endpointPrefix?: string;
  cloudFormationName?: string;
  cloudTrailEventSource?: string;
}

/** Service identification (sdkId + related metadata). */
export const Service = (trait: ServiceTrait) =>
  makeAnnotation(serviceSymbol, trait);

/** Service API version. */
export const ServiceVersion = (version: string) =>
  makeAnnotation(serviceVersionSymbol, version);

export interface AuthSigv4Trait {
  name: string;
}

/** SigV4 signing configuration. */
export const AuthSigv4 = (trait: AuthSigv4Trait) =>
  makeAnnotation(authSigv4Symbol, trait);

// =============================================================================
// Endpoint routing
// =============================================================================

/** Member contributes to endpoint resolution context under the given name. */
export const ContextParam = (name: string) =>
  makeAnnotation(contextParamSymbol, name);

export type StaticContextParamsDefinition = Record<string, { value: unknown }>;

/** Operation-level: contribute fixed values to endpoint resolution context. */
export const StaticContextParams = (params: StaticContextParamsDefinition) =>
  makeAnnotation(staticContextParamsSymbol, params);

export interface ClientContextParamDefinition {
  type: string;
  documentation?: string;
}

/** Service-level: parameters the client constructor accepts for endpoint resolution. */
export const ClientContextParams = (
  params: Record<string, ClientContextParamDefinition>,
) => makeAnnotation(clientContextParamsSymbol, params);

/** Raw endpoint rule set (data-driven). */
export const EndpointRuleSet = (ruleSet: unknown) =>
  makeAnnotation(endpointRuleSetSymbol, ruleSet);

export type EndpointResolverResult =
  | {
      type: "endpoint";
      endpoint: {
        url: string;
        properties: Record<string, unknown>;
        headers: Record<string, string[]>;
      };
    }
  | { type: "error"; message: string };

export interface EndpointResolverHelpers {
  partition: (region: unknown) => unknown;
  parseArn: (value: unknown) => unknown;
  isVirtualHostableS3Bucket: (
    value: unknown,
    allowSubDomains?: unknown,
  ) => boolean;
  parseURL: (url: unknown) => unknown;
  substring: (
    input: unknown,
    start: unknown,
    stop: unknown,
    reverse: unknown,
  ) => unknown;
  uriEncode: (value: unknown) => unknown;
  isValidHostLabel: (value: unknown, allowSubDomains: unknown) => boolean;
  getAttr: (value: unknown, path: string) => unknown;
  resolveTemplates: <T>(value: T) => T;
}

export type EndpointResolverFn = (
  params: Record<string, unknown>,
  helpers: EndpointResolverHelpers,
) => EndpointResolverResult;

/** Compiled endpoint resolver (function form). */
export const EndpointResolver = (resolver: EndpointResolverFn) =>
  makeAnnotation(endpointResolverSymbol, resolver);

// =============================================================================
// Pagination
// =============================================================================

export interface PaginatedTrait {
  inputToken: string;
  outputToken: string;
  items?: string;
  pageSize?: string;
}

/** Operation is paginated; tokens identify the page cursor on input/output. */
export const Paginated = (trait: PaginatedTrait) =>
  makeAnnotation(paginatedSymbol, trait);

// =============================================================================
// AST accessors (used by protocols)
// =============================================================================

/**
 * Read an annotation off an AST node, transparently unwrapping through
 * `Suspend`, single-member nullable `Union`, and `Declaration.encoding`.
 * Protocols call this so traits survive `S.optional`, transforms, lazy refs.
 */
export const getAnnotation = <T>(
  ast: AST.AST,
  symbol: string,
): T | undefined => {
  const direct = ast.annotations?.[symbol] as T | undefined;
  if (direct !== undefined) return direct;
  if (ast._tag === "Suspend") return getAnnotation(ast.thunk(), symbol);
  if (ast._tag === "Declaration" && ast.encoding?.length) {
    const toValue = ast.encoding[0].to?.annotations?.[symbol] as T | undefined;
    if (toValue !== undefined) return toValue;
  }
  if (ast.encoding && ast.encoding.length > 0) {
    const encValue = getAnnotation<T>(ast.encoding[0].to, symbol);
    if (encValue !== undefined) return encValue;
  }
  if (ast._tag === "Union") {
    const nonNullish = ast.types.filter(
      (t) =>
        t._tag !== "Undefined" && !(t._tag === "Literal" && t.literal === null),
    );
    if (nonNullish.length === 1)
      return getAnnotation<T>(nonNullish[0]!, symbol);
  }
  return undefined;
};

/** Boolean form of `getAnnotation`. */
export const hasAnnotation = (ast: AST.AST, symbol: string): boolean =>
  getAnnotation(ast, symbol) !== undefined;

/** Read an annotation from a PropertySignature, falling back to its inner AST. */
export const getPropAnnotation = <T>(
  prop: AST.PropertySignature,
  symbol: string,
): T | undefined => {
  // @ts-expect-error — Effect's PropertySignature annotations are internal
  const direct = prop.annotations?.[symbol] as T | undefined;
  if (direct !== undefined) return direct;
  return getAnnotation<T>(prop.type, symbol);
};

/** Boolean form of `getPropAnnotation`. */
export const hasPropAnnotation = (
  prop: AST.PropertySignature,
  symbol: string,
): boolean => getPropAnnotation(prop, symbol) !== undefined;

// -- Member-level binding shortcuts ---------------------------------------------

/**
 * Get the wire name a member binds to (header / query / label / body field).
 * Returns the configured override, or `undefined` to fall back to the property key.
 */
const nameOf = (
  prop: AST.PropertySignature,
  symbol: string,
): string | undefined => {
  const v = getPropAnnotation<string | boolean>(prop, symbol);
  return typeof v === "string" ? v : undefined;
};

export const isBody = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, bodySymbol);
export const getBodyName = (prop: AST.PropertySignature): string | undefined =>
  nameOf(prop, bodySymbol);

export const isHeader = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, headerSymbol);
export const getHeaderName = (
  prop: AST.PropertySignature,
): string | undefined => nameOf(prop, headerSymbol);

export const getPrefixHeaders = (
  prop: AST.PropertySignature,
): string | undefined => getPropAnnotation<string>(prop, prefixHeadersSymbol);

export const isLabel = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, labelSymbol);
export const getLabelName = (prop: AST.PropertySignature): string | undefined =>
  nameOf(prop, labelSymbol);

export const isQuery = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, querySymbol);
export const getQueryName = (prop: AST.PropertySignature): string | undefined =>
  nameOf(prop, querySymbol);

export const isQueryParams = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, queryParamsSymbol);

export const isResponseCode = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, responseCodeSymbol);

export const isHostLabel = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, hostLabelSymbol);

export const isIdempotencyToken = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, idempotencyTokenSymbol);

export const getContextParam = (
  prop: AST.PropertySignature,
): string | undefined => getPropAnnotation<string>(prop, contextParamSymbol);

export const isEventHeader = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, eventHeaderSymbol);
export const isEventPayload = (prop: AST.PropertySignature): boolean =>
  hasPropAnnotation(prop, eventPayloadSymbol);

export const getTimestampFormat = (
  prop: AST.PropertySignature,
): TimestampFormatType | undefined =>
  getPropAnnotation<TimestampFormatType>(prop, timestampFormatSymbol);

// -- Shape / operation / service level -----------------------------------------

export const getHttp = (ast: AST.AST): HttpTrait | undefined =>
  getAnnotation<HttpTrait>(ast, httpSymbol);

export const getHttpErrorCode = (ast: AST.AST): number | undefined =>
  getAnnotation<number>(ast, httpErrorSymbol);

export const isChecksumRequired = (ast: AST.AST): boolean =>
  hasAnnotation(ast, checksumRequiredSymbol);

export const isStreaming = (ast: AST.AST): boolean => {
  if (hasAnnotation(ast, streamingSymbol)) return true;
  if (ast._tag === "Union")
    return (ast as AST.Union).types.some((t) => isStreaming(t));
  return false;
};

export const isRequiresLength = (ast: AST.AST): boolean =>
  hasAnnotation(ast, requiresLengthSymbol);

export const isSparse = (ast: AST.AST): boolean =>
  hasAnnotation(ast, sparseSymbol);

export const getRetryable = (ast: AST.AST): RetryableTrait | undefined =>
  getAnnotation<RetryableTrait>(ast, retryableSymbol);

export const getTimestampFormatFromAST = (
  ast: AST.AST,
): TimestampFormatType | undefined =>
  getAnnotation<TimestampFormatType>(ast, timestampFormatSymbol);

export const getService = (ast: AST.AST): ServiceTrait | undefined =>
  getAnnotation<ServiceTrait>(ast, serviceSymbol);

export const getServiceVersion = (ast: AST.AST): string | undefined =>
  getAnnotation<string>(ast, serviceVersionSymbol);

export const getAuthSigv4 = (ast: AST.AST): AuthSigv4Trait | undefined =>
  getAnnotation<AuthSigv4Trait>(ast, authSigv4Symbol);

export const getStaticContextParams = (
  ast: AST.AST,
): StaticContextParamsDefinition | undefined =>
  getAnnotation<StaticContextParamsDefinition>(ast, staticContextParamsSymbol);

export const getClientContextParams = (
  ast: AST.AST,
): Record<string, ClientContextParamDefinition> | undefined =>
  getAnnotation<Record<string, ClientContextParamDefinition>>(
    ast,
    clientContextParamsSymbol,
  );

export const getEndpointRuleSet = (ast: AST.AST): unknown =>
  getAnnotation<unknown>(ast, endpointRuleSetSymbol);

export const getEndpointResolver = (
  ast: AST.AST,
): EndpointResolverFn | undefined =>
  getAnnotation<EndpointResolverFn>(ast, endpointResolverSymbol);

export const getPaginated = (ast: AST.AST): PaginatedTrait | undefined =>
  getAnnotation<PaginatedTrait>(ast, paginatedSymbol);
