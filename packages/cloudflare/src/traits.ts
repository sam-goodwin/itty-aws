/**
 * Cloudflare SDK trait surface — hand-written.
 *
 * Re-exports the generic HTTP binding traits from core (so generated operations
 * import everything from one place) and adds the Cloudflare-specific traits the
 * v4 protocol needs.
 *
 * Generic traits (Body / Header / Query / Label / Http / ResponseCode) live in
 * `@distilled.cloud/core/trait` because any REST protocol reuses them. Anything
 * tied to Cloudflare's response envelope lives here.
 */
export {
  Body,
  Header,
  Query,
  Label,
  Http,
  ResponseCode,
  type HttpTrait,
  bodySymbol,
  headerSymbol,
  querySymbol,
  labelSymbol,
  httpSymbol,
  responseCodeSymbol,
} from "@distilled.cloud/core/trait";

// =============================================================================
// Cloudflare-specific traits
// =============================================================================

const annotationMetaSymbol = Symbol.for(
  "@distilled.cloud/core/annotation-meta",
);

type Annotatable = { annotate(annotations: any): Annotatable };

// Mirror core's Annotation shape so these callables behave identically when
// piped through a schema (preserving the schema's type).
interface Annotation {
  <A extends Annotatable>(schema: A): A;
  readonly [annotationMetaSymbol]: Array<{ symbol: symbol; value: unknown }>;
  readonly [key: symbol]: unknown;
}

const makeAnnotation = <T>(sym: symbol, value: T): Annotation => {
  const fn = <A extends Annotatable>(schema: A): A =>
    schema.annotate({ [sym]: value }) as A;
  (fn as any)[annotationMetaSymbol] = [{ symbol: sym, value }];
  (fn as any)[sym] = value;
  return fn as Annotation;
};

export const errorMatchersSymbol = Symbol.for(
  "@distilled.cloud/cloudflare/error-matchers",
);

/**
 * One wire-matching rule for a typed error class. A matcher matches a v4
 * envelope failure when every present field matches: `code` equals the
 * envelope error's code, `status` equals the HTTP status, and `message`
 * either equals the error message (string form) or satisfies
 * `includes` (substring) / `matches` (regex). A matcher with no fields
 * matches nothing. Semantics mirror the distilled cloudflare SDK.
 */
export interface ErrorMatcher {
  readonly code?: number;
  readonly status?: number;
  readonly message?:
    | string
    | { readonly includes?: string; readonly matches?: string };
}

/**
 * Stamp wire-matching rules onto a generated error class. The protocol
 * consults these to decide which of an operation's declared error classes a
 * failed response should surface as (first matching class wins, in the order
 * the operation declares them). Mirrors
 * `com.cloudflare.protocols#errorMatchers` in the Smithy models.
 */
export const applyErrorMatchers = <C>(
  cls: C,
  matchers: ReadonlyArray<ErrorMatcher>,
): C => {
  (cls as any)[errorMatchersSymbol] = matchers;
  return cls;
};

/** Read the matchers stamped on an error class, if any. */
export const getErrorMatchers = (
  cls: unknown,
): ReadonlyArray<ErrorMatcher> | undefined =>
  (cls as any)?.[errorMatchersSymbol];

export const keyDictionarySymbol = Symbol.for(
  "@distilled.cloud/cloudflare/key-dictionary",
);

/**
 * Deep camelCase→wire key dictionary for members whose full structure is not
 * modeled (e.g. the Worker upload `metadata` — a 12k-line union in the
 * upstream SDK). The protocol renames any matching key at any depth on
 * encode (and the reverse on decode); keys not in the dictionary pass
 * through verbatim. Mirrors `com.cloudflare.protocols#keyDictionary`.
 */
export const KeyDictionary = (dict: Record<string, string>) =>
  makeAnnotation(keyDictionarySymbol, dict);

export const formDataFileSymbol = Symbol.for(
  "@distilled.cloud/cloudflare/form-data-file",
);

/**
 * Marks an input member holding `File`/`Blob` parts for a multipart upload
 * (`Http({ contentType: "multipart" })`). Each file is appended to the form
 * under its own filename. Mirrors
 * `com.cloudflare.protocols#formDataFile` in the Smithy models.
 */
export const FormDataFile = () => makeAnnotation(formDataFileSymbol, true);

export const resultInfoSymbol = Symbol.for(
  "@distilled.cloud/cloudflare/result-info",
);

/**
 * Marks the output member that receives the envelope's top-level
 * `result_info` block (camelCased). Only honored by
 * `CloudflarePaginatedProtocol` — pagination-specific by design.
 */
export const ResultInfo = () => makeAnnotation(resultInfoSymbol, true);

export const envelopePayloadSymbol = Symbol.for(
  "@distilled.cloud/cloudflare/envelope-payload",
);

/**
 * Marks the single output member that receives the envelope's `result` value
 * wholesale, used when `result` is an array or scalar rather than an object.
 *
 * When an operation's `result` is an object, the response struct inlines its
 * fields directly (each mapped from `result.<field>`). When `result` is a list
 * or scalar there are no fields to inline, so the response struct has one member
 * tagged with `EnvelopePayload()` and the protocol assigns the whole `result`
 * to it. This mirrors `com.cloudflare.protocols#envelopePayload` in the Smithy
 * models.
 */
export const EnvelopePayload = () =>
  makeAnnotation(envelopePayloadSymbol, true);
