/**
 * Fly.io SDK trait surface — hand-written.
 *
 * Re-exports the generic protocol traits from core so generated operations
 * import everything from one place. Fly.io has no envelope; the only
 * additions beyond the generic REST vocabulary are the bare-payload and
 * sensitive-value traits from `core/protocol-rest`.
 */
export {
  Body,
  Header,
  Query,
  Label,
  Http,
  ResponseCode,
  HttpBody,
  FormDataFile,
  KeyDictionary,
  UnionCases,
  applyErrorMatchers,
  getErrorMatchers,
  type HttpTrait,
  type ErrorMatcher,
  bodySymbol,
  headerSymbol,
  querySymbol,
  labelSymbol,
  httpSymbol,
  responseCodeSymbol,
  httpBodySymbol,
  formDataFileSymbol,
  keyDictionarySymbol,
  unionCasesSymbol,
  errorMatchersSymbol,
} from "@distilled.cloud/core/trait";

export {
  RawResponse,
  RawResponseRoot,
  SensitiveValue,
  rawResponseSymbol,
  rawResponseRootSymbol,
  sensitiveValueSymbol,
} from "@distilled.cloud/core/protocol-rest";
