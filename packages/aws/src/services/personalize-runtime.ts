import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Personalize Runtime",
  serviceShapeName: "AmazonPersonalizeRuntime",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "personalize" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-22");
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
              `https://personalize-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://personalize-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://personalize-runtime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://personalize-runtime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type UserID = string;
export type NumResults = number;
export type FilterAttributeName = string;
export type FilterAttributeValue = string | redacted.Redacted<string>;
export type FilterValues = { [key: string]: string | redacted.Redacted<string> | undefined };
const FilterValues = /*@__PURE__*/ __L.at(__c0, 0);
export interface GetActionRecommendationsRequest {
  campaignArn?: string;
  userId?: string;
  numResults?: number;
  filterArn?: string;
  filterValues?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const GetActionRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<GetActionRecommendationsRequest>;
export type ActionID = string;
export type Score = number;
export interface PredictedAction {
  actionId?: string;
  score?: number;
}
const PredictedAction = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<PredictedAction>;
export type ActionList = PredictedAction[];
const ActionList = /*@__PURE__*/ __L.at(__c0, 3);
export type RecommendationID = string;
export interface GetActionRecommendationsResponse {
  actionList?: PredictedAction[];
  recommendationId?: string;
}
const GetActionRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<GetActionRecommendationsResponse>;
export type ItemID = string;
export type InputList = string[];
const InputList = /*@__PURE__*/ __L.at(__c0, 5);
export type AttributeName = string;
export type AttributeValue = string | redacted.Redacted<string>;
export type Context = { [key: string]: string | redacted.Redacted<string> | undefined };
const Context = FilterValues as any as S.Schema<Context>;
export type DatasetType = string;
export type ColumnName = string;
export type ColumnNamesList = string[];
const ColumnNamesList = InputList as any as S.Schema<ColumnNamesList>;
export type MetadataColumns = { [key: string]: string[] | undefined };
const MetadataColumns = /*@__PURE__*/ __L.at(__c0, 6);
export interface GetPersonalizedRankingRequest {
  campaignArn: string;
  inputList: string[];
  userId: string;
  context?: { [key: string]: string | redacted.Redacted<string> | undefined };
  filterArn?: string;
  filterValues?: { [key: string]: string | redacted.Redacted<string> | undefined };
  metadataColumns?: { [key: string]: string[] | undefined };
}
const GetPersonalizedRankingRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<GetPersonalizedRankingRequest>;
export type Name = string;
export type ColumnValue = string;
export type Metadata = { [key: string]: string | undefined };
const Metadata = /*@__PURE__*/ __L.at(__c1, 0);
export type Reason = string;
export type ReasonList = string[];
const ReasonList = InputList as any as S.Schema<ReasonList>;
export interface PredictedItem {
  itemId?: string;
  score?: number;
  promotionName?: string;
  metadata?: { [key: string]: string | undefined };
  reason?: string[];
}
const PredictedItem = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<PredictedItem>;
export type ItemList = PredictedItem[];
const ItemList = /*@__PURE__*/ __L.at(__c1, 2);
export interface GetPersonalizedRankingResponse {
  personalizedRanking?: PredictedItem[];
  recommendationId?: string;
}
const GetPersonalizedRankingResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<GetPersonalizedRankingResponse>;
export type PercentPromotedItems = number;
export interface Promotion {
  name?: string;
  percentPromotedItems?: number;
  filterArn?: string;
  filterValues?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const Promotion = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Promotion>;
export type PromotionList = Promotion[];
const PromotionList = /*@__PURE__*/ __L.at(__c1, 5);
export interface GetRecommendationsRequest {
  campaignArn?: string;
  itemId?: string;
  userId?: string;
  numResults?: number;
  context?: { [key: string]: string | redacted.Redacted<string> | undefined };
  filterArn?: string;
  filterValues?: { [key: string]: string | redacted.Redacted<string> | undefined };
  recommenderArn?: string;
  promotions?: Promotion[];
  metadataColumns?: { [key: string]: string[] | undefined };
}
const GetRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<GetRecommendationsRequest>;
export interface GetRecommendationsResponse {
  itemList?: PredictedItem[];
  recommendationId?: string;
}
const GetRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<GetRecommendationsResponse>;
export type ErrorMessage = string;
export type GetActionRecommendationsError =
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of recommended actions in sorted in descending order by prediction score.
 * Use the `GetActionRecommendations` API if you have a custom
 * campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe.
 *
 * For more information about PERSONALIZED_ACTIONS recipes, see PERSONALIZED_ACTIONS recipes.
 * For more information about getting action recommendations, see Getting action recommendations.
 */
export const getActionRecommendations: API.OperationMethod<
  GetActionRecommendationsRequest,
  GetActionRecommendationsResponse,
  GetActionRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetActionRecommendationsRequest,
  output: GetActionRecommendationsResponse,
  errors: [InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetActionRecommendations",
}));

export type GetPersonalizedRankingError =
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Re-ranks a list of recommended items for the given user. The first item in the list is
 * deemed the most likely item to be of interest to the user.
 *
 * The solution backing the campaign must have been created using a recipe of type
 * PERSONALIZED_RANKING.
 */
export const getPersonalizedRanking: API.OperationMethod<
  GetPersonalizedRankingRequest,
  GetPersonalizedRankingResponse,
  GetPersonalizedRankingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPersonalizedRankingRequest,
  output: GetPersonalizedRankingResponse,
  errors: [InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPersonalizedRanking",
}));

export type GetRecommendationsError =
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to
 * create the solution backing the campaign as follows:
 *
 * - USER_PERSONALIZATION - `userId` required, `itemId` not used
 *
 * - RELATED_ITEMS - `itemId` required, `userId` not used
 *
 * Campaigns that are backed by a solution created using a recipe of type
 * PERSONALIZED_RANKING use the API.
 *
 * For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender.
 * For information on use case requirements see Choosing recommender use cases.
 */
export const getRecommendations: API.OperationMethod<
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommendationsRequest,
  output: GetRecommendationsResponse,
  errors: [InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendations",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          campaignArn: S.optional(S.String),
          userId: S.optional(S.String),
          numResults: S.optional(S.Number),
          filterArn: S.optional(S.String),
          filterValues: S.optional(FilterValues),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/action-recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetActionRecommendationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ actionId: S.optional(S.String), score: S.optional(S.Number) }),
      ).annotate({ identifier: "PredictedAction" });
    case 3:
      return S.Array(PredictedAction);
    case 4:
      return S.suspend(() =>
        S.Struct({ actionList: S.optional(ActionList), recommendationId: S.optional(S.String) }),
      ).annotate({
        identifier: "GetActionRecommendationsResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ ColumnNamesList.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          campaignArn: S.String,
          inputList: InputList,
          userId: S.String,
          context: S.optional(Context),
          filterArn: S.optional(S.String),
          filterValues: S.optional(FilterValues),
          metadataColumns: S.optional(MetadataColumns),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/personalize-ranking" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPersonalizedRankingRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          itemId: S.optional(S.String),
          score: S.optional(S.Number),
          promotionName: S.optional(S.String),
          metadata: S.optional(Metadata),
          reason: S.optional(ReasonList),
        }),
      ).annotate({ identifier: "PredictedItem" });
    case 2:
      return S.Array(PredictedItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          personalizedRanking: S.optional(ItemList),
          recommendationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetPersonalizedRankingResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          percentPromotedItems: S.optional(S.Number),
          filterArn: S.optional(S.String),
          filterValues: S.optional(FilterValues),
        }),
      ).annotate({ identifier: "Promotion" });
    case 5:
      return S.Array(Promotion);
    case 6:
      return S.suspend(() =>
        S.Struct({
          campaignArn: S.optional(S.String),
          itemId: S.optional(S.String),
          userId: S.optional(S.String),
          numResults: S.optional(S.Number),
          context: S.optional(Context),
          filterArn: S.optional(S.String),
          filterValues: S.optional(FilterValues),
          recommenderArn: S.optional(S.String),
          promotions: S.optional(PromotionList),
          metadataColumns: S.optional(MetadataColumns),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/recommendations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRecommendationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ itemList: S.optional(ItemList), recommendationId: S.optional(S.String) }),
      ).annotate({
        identifier: "GetRecommendationsResponse",
      });
  }
}
