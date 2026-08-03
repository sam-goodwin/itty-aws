/**
 * MongoDB Atlas SDK trait surface — hand-written.
 *
 * Re-exports the generic protocol traits from core (so generated operations
 * import everything from one place). Atlas has no envelope of its own; the
 * REST-protocol traits (SensitiveValue / RawResponse) come from
 * `core/protocol-rest`. The one Atlas-specific wire quirk — date-versioned
 * `Accept` media types — rides as an `accept` extension on the `Http` trait
 * (stamped by scripts/convert.ts, read by src/protocol.ts).
 */
export {
  Body,
  Header,
  Query,
  Label,
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

import {
  Http as CoreHttp,
  type HttpTrait as CoreHttpTrait,
} from "@distilled.cloud/core/trait";

/**
 * Atlas pins an API version per operation through a date-versioned
 * `Accept` media type (e.g. `application/vnd.atlas.2024-05-30+json`), so
 * its operation trait carries one more field than the generic one. The
 * value is stamped by scripts/convert.ts and read by src/protocol.ts.
 */
export interface AtlasHttpTrait extends CoreHttpTrait {
  readonly accept?: string;
}

/** `Http` widened to accept Atlas's per-operation `accept` media type. */
export const Http = (trait: AtlasHttpTrait) => CoreHttp(trait);

export {
  SensitiveValue,
  RawResponse,
  RawResponseRoot,
  sensitiveValueSymbol,
  rawResponseSymbol,
  rawResponseRootSymbol,
} from "@distilled.cloud/core/protocol-rest";
