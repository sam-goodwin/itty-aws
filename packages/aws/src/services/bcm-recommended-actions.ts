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
  sdkId: "BCM Recommended Actions",
  serviceShapeName: "AWSBillingAndCostManagementRecommendedActions",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bcm-recommended-actions" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-11-14");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://bcm-recommended-actions-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(PartitionResult),
            {},
          );
        }
        return e(
          `https://bcm-recommended-actions.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          _p0(PartitionResult),
          {},
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
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "BCMRecommendedActionsAccessDenied",
        httpResponseCode: 403,
      }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "BCMRecommendedActionsInternalServer",
        httpResponseCode: 500,
      }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "BCMRecommendedActionsThrottling",
        httpResponseCode: 429,
      }),
      /*@__PURE__*/ T.HttpError(429),
    ),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "BCMRecommendedActionsValidation",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type FilterName = "FEATURE" | "SEVERITY" | "TYPE" | (string & {});
const FilterName = S.String;

export type MatchOption = "EQUALS" | "NOT_EQUALS" | (string & {});
const MatchOption = S.String;

export type FilterValue = string;
export type FilterValues = string[];
const FilterValues = /*@__PURE__*/ __L.at(__c0, 0);
export interface ActionFilter {
  key: FilterName;
  matchOption: MatchOption;
  values: string[];
}
const ActionFilter = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<ActionFilter>;
export type ActionFilterList = ActionFilter[];
const ActionFilterList = /*@__PURE__*/ __L.at(__c0, 2);
export interface RequestFilter {
  actions?: ActionFilter[];
}
const RequestFilter = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<RequestFilter>;
export type MaxResults = number;
export type NextToken = string;
export interface ListRecommendedActionsRequest {
  filter?: RequestFilter;
  maxResults?: number;
  nextToken?: string;
}
const ListRecommendedActionsRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<ListRecommendedActionsRequest>;
export type ActionType =
  | "ADD_ALTERNATE_BILLING_CONTACT"
  | "CREATE_ANOMALY_MONITOR"
  | "CREATE_BUDGET"
  | "ENABLE_COST_OPTIMIZATION_HUB"
  | "MIGRATE_TO_GRANULAR_PERMISSIONS"
  | "PAYMENTS_DUE"
  | "PAYMENTS_PAST_DUE"
  | "REVIEW_ANOMALIES"
  | "REVIEW_BUDGET_ALERTS"
  | "REVIEW_BUDGETS_EXCEEDED"
  | "REVIEW_EXPIRING_RI"
  | "REVIEW_EXPIRING_SP"
  | "REVIEW_FREETIER_USAGE_ALERTS"
  | "REVIEW_FREETIER_CREDITS_REMAINING"
  | "REVIEW_FREETIER_DAYS_REMAINING"
  | "REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS"
  | "UPDATE_EXPIRED_PAYMENT_METHOD"
  | "UPDATE_INVALID_PAYMENT_METHOD"
  | "UPDATE_TAX_EXEMPTION_CERTIFICATE"
  | "UPDATE_TAX_REGISTRATION_NUMBER"
  | (string & {});
const ActionType = S.String;

export type AccountId = string;
export type Severity = "INFO" | "WARNING" | "CRITICAL" | (string & {});
const Severity = S.String;

export type Feature =
  | "ACCOUNT"
  | "BUDGETS"
  | "COST_ANOMALY_DETECTION"
  | "COST_OPTIMIZATION_HUB"
  | "FREE_TIER"
  | "IAM"
  | "PAYMENTS"
  | "RESERVATIONS"
  | "SAVINGS_PLANS"
  | "TAX_SETTINGS"
  | (string & {});
const Feature = S.String;

export type Context = { [key: string]: string | undefined };
const Context = /*@__PURE__*/ __L.at(__c0, 5);
export type NextStep = string;
export type NextSteps = string[];
const NextSteps = FilterValues as any as S.Schema<NextSteps>;
export interface RecommendedAction {
  id?: string;
  type?: ActionType;
  accountId?: string;
  severity?: Severity;
  feature?: Feature;
  context?: { [key: string]: string | undefined };
  nextSteps?: string[];
  lastUpdatedTimeStamp?: string;
}
const RecommendedAction = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<RecommendedAction>;
export type RecommendedActions = RecommendedAction[];
const RecommendedActions = /*@__PURE__*/ __L.at(__c0, 7);
export interface ListRecommendedActionsResponse {
  recommendedActions: RecommendedAction[];
  nextToken?: string;
}
const ListRecommendedActionsResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<ListRecommendedActionsResponse>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c1, 2);
export type ListRecommendedActionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of recommended actions that match the filter criteria.
 */
export const listRecommendedActions: API.PaginatedOperationMethod<
  ListRecommendedActionsRequest,
  ListRecommendedActionsResponse,
  ListRecommendedActionsError,
  Credentials | HttpClient.HttpClient,
  RecommendedAction
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendedActionsRequest,
  output: ListRecommendedActionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendedActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recommendedActions",
    pageSize: "maxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ key: FilterName, matchOption: MatchOption, values: FilterValues }),
      ).annotate({ identifier: "ActionFilter" });
    case 2:
      return S.Array(ActionFilter);
    case 3:
      return S.suspend(() => S.Struct({ actions: S.optional(ActionFilterList) })).annotate({
        identifier: "RequestFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          filter: S.optional(RequestFilter),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRecommendedActionsRequest",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          type: S.optional(ActionType),
          accountId: S.optional(S.String),
          severity: S.optional(Severity),
          feature: S.optional(Feature),
          context: S.optional(Context),
          nextSteps: S.optional(NextSteps),
          lastUpdatedTimeStamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecommendedAction" });
    case 7:
      return S.Array(RecommendedAction);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ recommendedActions: RecommendedActions, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRecommendedActionsResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 2:
      return S.Array(ValidationExceptionField);
  }
}
