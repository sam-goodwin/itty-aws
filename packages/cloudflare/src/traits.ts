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
