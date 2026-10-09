import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "ElementalInference",
  serviceShapeName: "ElementalInference",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "elemental-inference" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-11-14");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://elemental-inference-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://elemental-inference-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://elemental-inference.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://elemental-inference.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(409), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class GatewayTimedOutException
  extends /*@__PURE__*/ S.TaggedError<GatewayTimedOutException>()(
    "GatewayTimedOutException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(504), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withTimeoutError, C.withRetryableError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(503), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class TooManyRequestException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestException>()(
    "TooManyRequestException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type FeedId = string;
export type AssociatedResourceName = string;
export type ResourceName = string;
export type S3Uri = string;
export type TemplateUriList = string[];
const TemplateUriList = /*@__PURE__*/ __L.at(__c0, 0);
export interface TemplateGroup {
  name: string;
  templateUris: string[];
}
const TemplateGroup = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<TemplateGroup>;
export type TemplateGroupList = TemplateGroup[];
const TemplateGroupList = /*@__PURE__*/ __L.at(__c0, 2);
export interface CroppingConfig {
  templateGroups?: TemplateGroup[];
}
const CroppingConfig = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<CroppingConfig>;
export type ResourceDescription = string;
export type FixtureId = string;
export interface DataSourceConfiguration {
  fixtureId: string;
}
const DataSourceConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<DataSourceConfiguration>;
export interface ClippingConfig {
  callbackMetadata?: string;
  dataSourceConfiguration?: DataSourceConfiguration;
}
const ClippingConfig = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<ClippingConfig>;
export type TranscriptionLanguage =
  | "eng"
  | "eng-au"
  | "eng-gb"
  | "eng-us"
  | "fra"
  | "ita"
  | "deu"
  | "spa"
  | "por"
  | (string & {});
const TranscriptionLanguage = S.String;

export interface AspectRatio {
  width: number;
  height: number;
}
const AspectRatio = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<AspectRatio>;
export type DictionaryId = string;
export type ProfanityFilterMode = "DISABLED" | "CENSOR" | "DROP" | (string & {});
const ProfanityFilterMode = S.String;

export interface SubtitlingConfig {
  language: TranscriptionLanguage;
  aspectRatio?: AspectRatio;
  dictionary?: string;
  profanityFilter?: ProfanityFilterMode;
}
const SubtitlingConfig = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<SubtitlingConfig>;
export type SummaryGenerationMode = "ENABLED" | "DISABLED" | (string & {});
const SummaryGenerationMode = S.String;

export type ExtendedAnalysisMode = "ENABLED" | "DISABLED" | (string & {});
const ExtendedAnalysisMode = S.String;

export interface ContextualMetadataConfig {
  summaryGeneration?: SummaryGenerationMode;
  extendedAnalysis?: ExtendedAnalysisMode;
}
const ContextualMetadataConfig = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<ContextualMetadataConfig>;
export type OutputConfig =
  | { cropping: CroppingConfig; clipping?: never; subtitling?: never; contextualMetadata?: never }
  | { cropping?: never; clipping: ClippingConfig; subtitling?: never; contextualMetadata?: never }
  | { cropping?: never; clipping?: never; subtitling: SubtitlingConfig; contextualMetadata?: never }
  | {
      cropping?: never;
      clipping?: never;
      subtitling?: never;
      contextualMetadata: ContextualMetadataConfig;
    };
const OutputConfig = /*@__PURE__*/ __L.at(__c1, 1);
export type OutputStatus = "ENABLED" | "DISABLED" | (string & {});
const OutputStatus = S.String;

export interface CreateOutput {
  name: string;
  outputConfig: OutputConfig;
  status: OutputStatus;
  description?: string;
}
const CreateOutput = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<CreateOutput>;
export type CreateOutputList = CreateOutput[];
const CreateOutputList = /*@__PURE__*/ __L.at(__c1, 3);
export interface AssociateFeedRequest {
  id: string;
  associatedResourceName: string;
  outputs: CreateOutput[];
  dryRun?: boolean;
}
const AssociateFeedRequest = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<AssociateFeedRequest>;
export type FeedArn = string;
export interface AssociateFeedResponse {
  arn: string;
  id: string;
}
const AssociateFeedResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<AssociateFeedResponse>;
export type DictionaryLanguage = "eng" | "fra" | "ita" | "deu" | "spa" | "por" | (string & {});
const DictionaryLanguage = S.String;

export type DictionaryEntriesPayload = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c1, 6);
export interface CreateDictionaryRequest {
  name: string;
  language: DictionaryLanguage;
  entries?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateDictionaryRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateDictionaryRequest>;
export type DictionaryArn = string;
export type DictionaryStatus =
  | "CREATING"
  | "AVAILABLE"
  | "REFERENCED"
  | "DELETING"
  | "DELETED"
  | (string & {});
const DictionaryStatus = S.String;

export type FeedReferences = string[];
const FeedReferences = TemplateUriList as any as S.Schema<FeedReferences>;
export interface CreateDictionaryResponse {
  name: string;
  arn: string;
  id: string;
  language: DictionaryLanguage;
  status: DictionaryStatus;
  references?: string[];
  tags?: { [key: string]: string | undefined };
}
const CreateDictionaryResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateDictionaryResponse>;
export type IamRoleArn = string;
export interface CreateFeedRequest {
  name: string;
  accessRoleArn?: string;
  outputs: CreateOutput[];
  tags?: { [key: string]: string | undefined };
}
const CreateFeedRequest = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<CreateFeedRequest>;
export type StringList = string[];
const StringList = TemplateUriList as any as S.Schema<StringList>;
export interface GetOutput {
  name: string;
  outputConfig: OutputConfig;
  status: OutputStatus;
  description?: string;
  fromAssociation?: boolean;
}
const GetOutput = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<GetOutput>;
export type GetOutputList = GetOutput[];
const GetOutputList = /*@__PURE__*/ __L.at(__c2, 3);
export type FeedStatus =
  | "CREATING"
  | "AVAILABLE"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "ARCHIVED"
  | (string & {});
const FeedStatus = S.String;

export interface FeedAssociation {
  associatedResourceName: string;
}
const FeedAssociation = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<FeedAssociation>;
export interface CreateFeedResponse {
  arn: string;
  name: string;
  id: string;
  dataEndpoints: string[];
  outputs: GetOutput[];
  accessRoleArn?: string;
  status: FeedStatus;
  association?: FeedAssociation;
  tags?: { [key: string]: string | undefined };
}
const CreateFeedResponse = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<CreateFeedResponse>;
export interface DeleteDictionaryRequest {
  id: string;
}
const DeleteDictionaryRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DeleteDictionaryRequest>;
export interface DeleteDictionaryResponse {
  arn: string;
  id: string;
  status: DictionaryStatus;
}
const DeleteDictionaryResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<DeleteDictionaryResponse>;
export interface DeleteFeedRequest {
  id: string;
}
const DeleteFeedRequest = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<DeleteFeedRequest>;
export interface DeleteFeedResponse {
  arn: string;
  id: string;
  status: FeedStatus;
}
const DeleteFeedResponse = DeleteDictionaryResponse as any as S.Schema<DeleteFeedResponse>;
export interface DeleteFeedPolicyRequest {
  id: string;
}
const DeleteFeedPolicyRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DeleteFeedPolicyRequest>;
export interface DeleteFeedPolicyResponse {}
const DeleteFeedPolicyResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DeleteFeedPolicyResponse>;
export interface DisassociateFeedRequest {
  id: string;
  associatedResourceName: string;
  dryRun?: boolean;
}
const DisassociateFeedRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DisassociateFeedRequest>;
export interface DisassociateFeedResponse {
  arn: string;
  id: string;
}
const DisassociateFeedResponse = AssociateFeedResponse as any as S.Schema<DisassociateFeedResponse>;
export interface ExportDictionaryEntriesRequest {
  id: string;
}
const ExportDictionaryEntriesRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<ExportDictionaryEntriesRequest>;
export interface ExportDictionaryEntriesResponse {
  entries?: string;
}
const ExportDictionaryEntriesResponse = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<ExportDictionaryEntriesResponse>;
export interface GetDictionaryRequest {
  id: string;
}
const GetDictionaryRequest = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<GetDictionaryRequest>;
export interface GetDictionaryResponse {
  name: string;
  arn: string;
  id: string;
  language: DictionaryLanguage;
  status: DictionaryStatus;
  references?: string[];
  tags?: { [key: string]: string | undefined };
}
const GetDictionaryResponse = CreateDictionaryResponse as any as S.Schema<GetDictionaryResponse>;
export interface GetFeedRequest {
  id: string;
}
const GetFeedRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<GetFeedRequest>;
export interface GetFeedResponse {
  arn: string;
  name: string;
  id: string;
  dataEndpoints: string[];
  outputs: GetOutput[];
  accessRoleArn?: string;
  status: FeedStatus;
  association?: FeedAssociation;
  tags?: { [key: string]: string | undefined };
}
const GetFeedResponse = CreateFeedResponse as any as S.Schema<GetFeedResponse>;
export interface GetFeedPolicyRequest {
  id: string;
}
const GetFeedPolicyRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<GetFeedPolicyRequest>;
export type PolicyDocument = string;
export interface GetFeedPolicyResponse {
  policy: string;
}
const GetFeedPolicyResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetFeedPolicyResponse>;
export interface GetFixtureRequest {
  fixtureId: string;
}
const GetFixtureRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<GetFixtureRequest>;
export interface Competitor {
  name?: string;
  isHome?: boolean;
}
const Competitor = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<Competitor>;
export type CompetitorList = Competitor[];
const CompetitorList = /*@__PURE__*/ __L.at(__c4, 4);
export interface GetFixtureResponse {
  fixtureId: string;
  name: string;
  fixtureGroup?: string;
  scheduledStart?: Date;
  status: string;
  competitors: Competitor[];
}
const GetFixtureResponse = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<GetFixtureResponse>;
export interface ListDictionariesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListDictionariesRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<ListDictionariesRequest>;
export interface DictionarySummary {
  arn: string;
  id: string;
  name: string;
  language: DictionaryLanguage;
  status: DictionaryStatus;
}
const DictionarySummary = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<DictionarySummary>;
export type DictionarySummaryList = DictionarySummary[];
const DictionarySummaryList = /*@__PURE__*/ __L.at(__c5, 0);
export interface ListDictionariesResponse {
  dictionaries: DictionarySummary[];
  nextToken?: string;
}
const ListDictionariesResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ListDictionariesResponse>;
export interface ListFeedsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListFeedsRequest = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<ListFeedsRequest>;
export interface FeedSummary {
  arn: string;
  id: string;
  name: string;
  association?: FeedAssociation;
  status: FeedStatus;
}
const FeedSummary = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<FeedSummary>;
export type FeedSummaryList = FeedSummary[];
const FeedSummaryList = /*@__PURE__*/ __L.at(__c5, 4);
export interface ListFeedsResponse {
  feeds: FeedSummary[];
  nextToken?: string;
}
const ListFeedsResponse = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ListFeedsResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutFeedPolicyRequest {
  id: string;
  policy: string;
}
const PutFeedPolicyRequest = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<PutFeedPolicyRequest>;
export interface PutFeedPolicyResponse {}
const PutFeedPolicyResponse = DeleteFeedPolicyResponse as any as S.Schema<PutFeedPolicyResponse>;
export type DataSourceSport = "basketball" | "american-football" | (string & {});
const DataSourceSport = S.String;

export type FixtureDate = string;
export type FilterName = "COMPETITOR" | (string & {});
const FilterName = S.String;

export type FilterValue = string;
export type FilterValueList = string[];
const FilterValueList = TemplateUriList as any as S.Schema<FilterValueList>;
export interface SearchFilter {
  name: FilterName;
  values: string[];
}
const SearchFilter = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<SearchFilter>;
export type SearchFilterList = SearchFilter[];
const SearchFilterList = /*@__PURE__*/ __L.at(__c6, 2);
export interface SearchFixturesRequest {
  sport: DataSourceSport;
  startDate: string;
  endDate?: string;
  filters?: SearchFilter[];
  maxResults?: number;
  nextToken?: string;
}
const SearchFixturesRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<SearchFixturesRequest>;
export interface FixtureSummary {
  fixtureId: string;
  name: string;
  fixtureGroup?: string;
  scheduledStart?: Date;
  status: string;
  competitors: Competitor[];
}
const FixtureSummary = GetFixtureResponse as any as S.Schema<FixtureSummary>;
export type FixtureSummaryList = FixtureSummary[];
const FixtureSummaryList = /*@__PURE__*/ __L.at(__c6, 4);
export interface SearchFixturesResponse {
  fixtures: FixtureSummary[];
  nextToken?: string;
}
const SearchFixturesResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<SearchFixturesResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteFeedPolicyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = TemplateUriList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteFeedPolicyResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateDictionaryRequest {
  id: string;
  name?: string;
  language?: DictionaryLanguage;
  entries?: string;
}
const UpdateDictionaryRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<UpdateDictionaryRequest>;
export interface UpdateDictionaryResponse {
  name: string;
  arn: string;
  id: string;
  language: DictionaryLanguage;
  status: DictionaryStatus;
  references?: string[];
  tags?: { [key: string]: string | undefined };
}
const UpdateDictionaryResponse =
  CreateDictionaryResponse as any as S.Schema<UpdateDictionaryResponse>;
export interface UpdateOutput {
  name: string;
  outputConfig: OutputConfig;
  status: OutputStatus;
  description?: string;
  fromAssociation?: boolean;
}
export type UpdateOutputList = UpdateOutput[];
const UpdateOutputList = GetOutputList as any as S.Schema<UpdateOutputList>;
export interface UpdateFeedRequest {
  name: string;
  accessRoleArn?: string;
  id: string;
  outputs: UpdateOutput[];
}
const UpdateFeedRequest = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<UpdateFeedRequest>;
export interface UpdateFeedResponse {
  arn: string;
  name: string;
  id: string;
  dataEndpoints: string[];
  outputs: GetOutput[];
  accessRoleArn?: string;
  status: FeedStatus;
  association?: FeedAssociation;
  tags?: { [key: string]: string | undefined };
}
const UpdateFeedResponse = CreateFeedResponse as any as S.Schema<UpdateFeedResponse>;
export type AssociateFeedError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Associates a resource with the feed. The resource provides the input that Elemental Inference needs in order to perform an Elemental Inference feature, such as cropping video. You always provide the resource by associating it with a feed. You can associate only one resource with each feed. With an association, a specific source media is claiming ownership of the feed.
 *
 * AssociateFeed is a PATCH operation, which means that you can include only parameters that you want to change. Parameters that you don't include will not be affected by the operation.
 *
 * Specifically:
 *
 * - You can add more outputs to the existing outputs. New outputs will be appended.
 *
 * - You can't modify an existing output (for example to change its name). Instead, use UpdateFeed.
 *
 * - You can't delete an existing output. Instead, use UpdateFeed.
 *
 * Also note that you can't change the feed name with AssociateFeed. Instead, use UpdateFeed.
 */
export const associateFeed: API.OperationMethod<
  AssociateFeedRequest,
  AssociateFeedResponse,
  AssociateFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateFeedRequest,
  output: AssociateFeedResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateFeed",
}));

export type CreateDictionaryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ServiceQuotaExceededException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom dictionary for improving transcription accuracy. A dictionary contains custom words and phrases that the ASR engine might not recognize, such as brand names, technical terms, or proper nouns. You can reference a dictionary when configuring a smart subtitles output.
 */
export const createDictionary: API.OperationMethod<
  CreateDictionaryRequest,
  CreateDictionaryResponse,
  CreateDictionaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDictionaryRequest,
  output: CreateDictionaryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ServiceQuotaExceededException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDictionary",
}));

export type CreateFeedError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ServiceQuotaExceededException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Creates a feed. The feed is the target for the live media stream that is being sent by the calling application. An example of a calling application is AWS Elemental MediaLive.
 *
 * The key contents of the feed is an array of outputs. Each output represents an Elemental Inference feature. After you create the feed, you must associate a resource with the feed. At that point, you will have a useable feed: resource - feed - output or outputs.
 */
export const createFeed: API.OperationMethod<
  CreateFeedRequest,
  CreateFeedResponse,
  CreateFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFeedRequest,
  output: CreateFeedResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ServiceQuotaExceededException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFeed",
}));

export type DeleteDictionaryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified dictionary. You cannot delete a dictionary that is referenced by a feed. You must first remove the dictionary reference from the feed's subtitling configuration.
 */
export const deleteDictionary: API.OperationMethod<
  DeleteDictionaryRequest,
  DeleteDictionaryResponse,
  DeleteDictionaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDictionaryRequest,
  output: DeleteDictionaryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDictionary",
}));

export type DeleteFeedError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified feed. You can delete the feed at any time. Elemental Inference doesn't block you from deleting a feed when the calling application is calling PutMedia or GetMetadata on that feed, although both these calls will start to fail. For more information about managing inactive feeds, see the Elemental Inference User Guide.
 */
export const deleteFeed: API.OperationMethod<
  DeleteFeedRequest,
  DeleteFeedResponse,
  DeleteFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFeedRequest,
  output: DeleteFeedResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFeed",
}));

export type DeleteFeedPolicyError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the resource-based policy attached to the specified feed. After you delete the policy, the operation revokes the cross-account access that the policy granted.
 */
export const deleteFeedPolicy: API.OperationMethod<
  DeleteFeedPolicyRequest,
  DeleteFeedPolicyResponse,
  DeleteFeedPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFeedPolicyRequest,
  output: DeleteFeedPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFeedPolicy",
}));

export type DisassociateFeedError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Releases the resource (the source media) that is associated with this feed. The outputs in the feed become DISABLED.
 */
export const disassociateFeed: API.OperationMethod<
  DisassociateFeedRequest,
  DisassociateFeedResponse,
  DisassociateFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFeedRequest,
  output: DisassociateFeedResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFeed",
}));

export type ExportDictionaryEntriesError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Exports the entries from the specified dictionary.
 */
export const exportDictionaryEntries: API.OperationMethod<
  ExportDictionaryEntriesRequest,
  ExportDictionaryEntriesResponse,
  ExportDictionaryEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportDictionaryEntriesRequest,
  output: ExportDictionaryEntriesResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportDictionaryEntries",
}));

export type GetDictionaryError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified dictionary.
 */
export const getDictionary: API.OperationMethod<
  GetDictionaryRequest,
  GetDictionaryResponse,
  GetDictionaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDictionaryRequest,
  output: GetDictionaryResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDictionary",
}));

export type GetFeedError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | CommonErrors;
/**
 * Retrieves information about the specified feed.
 */
export const getFeed: API.OperationMethod<
  GetFeedRequest,
  GetFeedResponse,
  GetFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFeedRequest,
  output: GetFeedResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFeed",
}));

export type GetFeedPolicyError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource-based policy attached to the specified feed.
 */
export const getFeedPolicy: API.OperationMethod<
  GetFeedPolicyRequest,
  GetFeedPolicyResponse,
  GetFeedPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFeedPolicyRequest,
  output: GetFeedPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFeedPolicy",
}));

export type GetFixtureError =
  | AccessDeniedException
  | GatewayTimedOutException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified fixture (a sports event, such as a specific basketball game). You obtain a fixtureId from SearchFixtures, or from the clipping output of a feed.
 */
export const getFixture: API.OperationMethod<
  GetFixtureRequest,
  GetFixtureResponse,
  GetFixtureError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFixtureRequest,
  output: GetFixtureResponse,
  errors: [
    AccessDeniedException,
    GatewayTimedOutException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFixture",
}));

export type ListDictionariesError =
  | AccessDeniedException
  | InternalServerErrorException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Lists the dictionaries in your account.
 */
export const listDictionaries: API.PaginatedOperationMethod<
  ListDictionariesRequest,
  ListDictionariesResponse,
  ListDictionariesError,
  Credentials | HttpClient.HttpClient,
  DictionarySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDictionariesRequest,
  output: ListDictionariesResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDictionaries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dictionaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFeedsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Displays a list of feeds that belong to this AWS account.
 */
export const listFeeds: API.PaginatedOperationMethod<
  ListFeedsRequest,
  ListFeedsResponse,
  ListFeedsError,
  Credentials | HttpClient.HttpClient,
  FeedSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFeedsRequest,
  output: ListFeedsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFeeds",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "feeds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * List all tags that are on an Elemental Inference resource in the current region.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutFeedPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Attaches or replaces a resource-based policy on the specified feed. A resource-based policy grants cross-account access to the feed.
 */
export const putFeedPolicy: API.OperationMethod<
  PutFeedPolicyRequest,
  PutFeedPolicyResponse,
  PutFeedPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutFeedPolicyRequest,
  output: PutFeedPolicyResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutFeedPolicy",
}));

export type SearchFixturesError =
  | AccessDeniedException
  | GatewayTimedOutException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Searches for the fixtures (sports events, such as a specific basketball game) that are available for a sport in a date window. Each fixture in the response includes a fixtureId that you specify in the clipping output of a feed, so that Elemental Inference maps the event data for that fixture onto the clipping metadata. This operation is paginated: if there are more fixtures than fit in one page, the response includes a nextToken that you pass in a subsequent request.
 */
export const searchFixtures: API.PaginatedOperationMethod<
  SearchFixturesRequest,
  SearchFixturesResponse,
  SearchFixturesError,
  Credentials | HttpClient.HttpClient,
  FixtureSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchFixturesRequest,
  output: SearchFixturesResponse,
  errors: [
    AccessDeniedException,
    GatewayTimedOutException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchFixtures",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "fixtures",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Associates the specified tags to the resource identified by the specified resourceArn in the current region. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Deletes specified tags from the specified resource in the current region.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDictionaryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified dictionary.
 */
export const updateDictionary: API.OperationMethod<
  UpdateDictionaryRequest,
  UpdateDictionaryResponse,
  UpdateDictionaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDictionaryRequest,
  output: UpdateDictionaryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDictionary",
}));

export type UpdateFeedError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestException
  | ValidationException
  | CommonErrors;
/**
 * Updates the name and/or outputs in a feed.
 *
 * UpdateFeed is a PUT operation, which means that the payload that you specify completely overwrites the existing payload.
 *
 * This means that if you want to touch the array of outputs, you must pass in the full new list. So you must omit outputs you want to delete, and include outputs you want to add or modify.
 *
 * If you want to patch the array of outputs to make selective additions, use AssociateFeed.
 */
export const updateFeed: API.OperationMethod<
  UpdateFeedRequest,
  UpdateFeedResponse,
  UpdateFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFeedRequest,
  output: UpdateFeedResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFeed",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, templateUris: TemplateUriList })).annotate({
        identifier: "TemplateGroup",
      });
    case 2:
      return S.Array(TemplateGroup);
    case 3:
      return S.suspend(() => S.Struct({ templateGroups: S.optional(TemplateGroupList) })).annotate({
        identifier: "CroppingConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ fixtureId: S.String })).annotate({
        identifier: "DataSourceConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          callbackMetadata: S.optional(S.String),
          dataSourceConfiguration: S.optional(DataSourceConfiguration),
        }),
      ).annotate({ identifier: "ClippingConfig" });
    case 6:
      return S.suspend(() => S.Struct({ width: S.Number, height: S.Number })).annotate({
        identifier: "AspectRatio",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          language: TranscriptionLanguage,
          aspectRatio: S.optional(AspectRatio),
          dictionary: S.optional(S.String),
          profanityFilter: S.optional(ProfanityFilterMode),
        }),
      ).annotate({ identifier: "SubtitlingConfig" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          summaryGeneration: S.optional(SummaryGenerationMode),
          extendedAnalysis: S.optional(ExtendedAnalysisMode),
        }),
      ).annotate({ identifier: "ContextualMetadataConfig" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cropping: CroppingConfig }),
        /*@__PURE__*/ S.Struct({ clipping: ClippingConfig }),
        /*@__PURE__*/ S.Struct({ subtitling: SubtitlingConfig }),
        /*@__PURE__*/ S.Struct({ contextualMetadata: ContextualMetadataConfig }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          outputConfig: OutputConfig,
          status: OutputStatus,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateOutput" });
    case 3:
      return S.Array(CreateOutput);
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          associatedResourceName: S.String.pipe(T.IdempotencyToken()),
          outputs: CreateOutputList,
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/feed/{id}/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateFeedRequest" });
    case 5:
      return S.suspend(() => S.Struct({ arn: S.String, id: S.String })).annotate({
        identifier: "AssociateFeedResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          language: DictionaryLanguage,
          entries: S.optional(S.String),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/dictionary" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDictionaryRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          arn: S.String,
          id: S.String,
          language: DictionaryLanguage,
          status: DictionaryStatus,
          references: S.optional(FeedReferences),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "CreateDictionaryResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          accessRoleArn: S.optional(S.String),
          outputs: CreateOutputList,
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/v1/feed" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateFeedRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          outputConfig: OutputConfig,
          status: OutputStatus,
          description: S.optional(S.String),
          fromAssociation: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GetOutput" });
    case 3:
      return S.Array(GetOutput);
    case 4:
      return S.suspend(() => S.Struct({ associatedResourceName: S.String })).annotate({
        identifier: "FeedAssociation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          id: S.String,
          dataEndpoints: StringList,
          outputs: GetOutputList,
          accessRoleArn: S.optional(S.String),
          status: FeedStatus,
          association: S.optional(FeedAssociation),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "CreateFeedResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/dictionary/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDictionaryRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String, id: S.String, status: DictionaryStatus }),
      ).annotate({ identifier: "DeleteDictionaryResponse" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/v1/feed/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFeedRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/feed/{id}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFeedPolicyRequest" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteFeedPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          associatedResourceName: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/feed/{id}/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisassociateFeedRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/dictionary/{id}/entries/export" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ExportDictionaryEntriesRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ entries: S.optional(S.String) })).annotate({
        identifier: "ExportDictionaryEntriesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/dictionary/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDictionaryRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/feed/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFeedRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/feed/{id}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFeedPolicyRequest" });
    case 1:
      return S.suspend(() => S.Struct({ policy: S.String })).annotate({
        identifier: "GetFeedPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ fixtureId: S.String.pipe(T.HttpLabel("fixtureId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/fixtures/{fixtureId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFixtureRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), isHome: S.optional(S.Boolean) }),
      ).annotate({ identifier: "Competitor" });
    case 4:
      return S.Array(Competitor);
    case 5:
      return S.suspend(() =>
        S.Struct({
          fixtureId: S.String,
          name: S.String,
          fixtureGroup: S.optional(S.String),
          scheduledStart: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.String,
          competitors: CompetitorList,
        }),
      ).annotate({ identifier: "GetFixtureResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/dictionaries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDictionariesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          name: S.String,
          language: DictionaryLanguage,
          status: DictionaryStatus,
        }),
      ).annotate({ identifier: "DictionarySummary" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DictionarySummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ dictionaries: DictionarySummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDictionariesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/v1/feeds" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFeedsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          name: S.String,
          association: S.optional(FeedAssociation),
          status: FeedStatus,
        }),
      ).annotate({ identifier: "FeedSummary" });
    case 4:
      return S.Array(FeedSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ feeds: FeedSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFeedsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")), policy: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/feed/{id}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutFeedPolicyRequest" });
    case 1:
      return S.suspend(() => S.Struct({ name: FilterName, values: FilterValueList })).annotate({
        identifier: "SearchFilter",
      });
    case 2:
      return S.Array(SearchFilter);
    case 3:
      return S.suspend(() =>
        S.Struct({
          sport: DataSourceSport,
          startDate: S.String,
          endDate: S.optional(S.String),
          filters: S.optional(SearchFilterList),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/fixtures" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SearchFixturesRequest" });
    case 4:
      return S.Array(FixtureSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ fixtures: FixtureSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchFixturesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
          language: S.optional(DictionaryLanguage),
          entries: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/v1/dictionary/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDictionaryRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          accessRoleArn: S.optional(S.String),
          id: S.String.pipe(T.HttpLabel("id")),
          outputs: UpdateOutputList,
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/v1/feed/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateFeedRequest" });
  }
}
