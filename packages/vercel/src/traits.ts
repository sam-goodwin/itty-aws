/**
 * Vercel SDK trait surface — hand-written.
 *
 * Re-exports the generic protocol traits from core so generated operations
 * import everything from one place. The management API speaks plain
 * bearer-REST JSON with no success envelope; the DATA-PLANE services
 * (blob_data / queues_data / edge_config_data, from manual-specs) add two
 * provider traits for their non-JSON responses.
 */
export {
  Body,
  Header,
  Query,
  Label,
  HostLabel,
  Http,
  ResponseCode,
  HttpBody,
  FormDataFile,
  KeyDictionary,
  UnionCases,
  applyErrorMatchers,
  getErrorMatchers,
  makeAnnotation,
  type HttpTrait,
  type ErrorMatcher,
  bodySymbol,
  headerSymbol,
  querySymbol,
  labelSymbol,
  hostLabelSymbol,
  httpSymbol,
  responseCodeSymbol,
  httpBodySymbol,
  formDataFileSymbol,
  keyDictionarySymbol,
  unionCasesSymbol,
  errorMatchersSymbol,
} from "@distilled.cloud/core/trait";
import { makeAnnotation as make } from "@distilled.cloud/core/trait";

/**
 * Raw binary response body (data-plane blob content reads): the response
 * body is delivered as buffered bytes on this output member instead of
 * being decoded as JSON; sibling `Header()` members project response
 * headers. Mirrors `com.vercel.protocols#binaryResponseBody` in the manual
 * Smithy models.
 */
export type BinaryResponseBody = Uint8Array;
export const binaryResponseBodySymbol = Symbol.for(
  "@distilled.cloud/vercel/binary-response-body",
);
export const BinaryResponseBody = (_value?: unknown) =>
  make(binaryResponseBodySymbol, true);

/**
 * Multipart/mixed message batch (queues data-plane receives): the response
 * is parsed into one record per part — `Vqs-*` part headers become fields,
 * the part body becomes `payload` bytes. Mirrors
 * `com.vercel.protocols#multipartMessages` in the manual Smithy models.
 */
export const multipartMessagesSymbol = Symbol.for(
  "@distilled.cloud/vercel/multipart-messages",
);
export const MultipartMessages = (_value?: unknown) =>
  make(multipartMessagesSymbol, true);

// Bearer-REST protocol traits (sensitive strings, bare-payload responses).
export {
  SensitiveValue,
  RawResponse,
  RawResponseRoot,
  sensitiveValueSymbol,
  rawResponseSymbol,
  rawResponseRootSymbol,
} from "@distilled.cloud/core/protocol-rest";
