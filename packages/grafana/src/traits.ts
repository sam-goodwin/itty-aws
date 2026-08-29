/**
 * Grafana SDK traits — hand-written.
 *
 * Grafana's structured API is JSON REST, with one provider-specific detail:
 * dashboard PATCH operations support several RFC 6902/7386-style media
 * types.  The selected media type is carried alongside the normal HTTP trait
 * so the protocol can preserve it instead of silently sending plain JSON.
 */
import {
  type HttpTrait as CoreHttpTrait,
  httpSymbol,
  makeAnnotation,
} from "@distilled.cloud/core/trait";

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

/** Media types accepted by Grafana's structured dashboard PATCH endpoint. */
export const GRAFANA_PATCH_MEDIA_TYPES = [
  "application/apply-patch+yaml",
  "application/json-patch+json",
  "application/merge-patch+json",
  "application/strategic-merge-patch+json",
] as const;

export type GrafanaPatchMediaType = (typeof GRAFANA_PATCH_MEDIA_TYPES)[number];

/** Safe default for object-shaped partial dashboard updates. */
export const DEFAULT_PATCH_MEDIA_TYPE: GrafanaPatchMediaType =
  "application/merge-patch+json";

/** Core HTTP trait plus Grafana's optional PATCH media-type hint. */
export interface HttpTrait extends CoreHttpTrait {
  readonly patchMediaType?: GrafanaPatchMediaType;
}

/** Operation-level HTTP binding understood by the Grafana protocol. */
export const Http = (trait: HttpTrait) => makeAnnotation(httpSymbol, trait);

export {
  SensitiveValue,
  RawResponse,
  RawResponseRoot,
  sensitiveValueSymbol,
  rawResponseSymbol,
  rawResponseRootSymbol,
} from "@distilled.cloud/core/protocol-rest";
