// ==========================================================================
// Policy Analyzer API (policyanalyzer v1beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "policyanalyzer",
  version: "v1beta1",
  rootUrl: "https://policyanalyzer.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudPolicyanalyzerV1beta1ObservationPeriod {
  /** The observation start time. */
  startTime?: string;
  /** The observation end time. */
  endTime?: string;
}

export const GoogleCloudPolicyanalyzerV1beta1ObservationPeriod: Schema.Schema<GoogleCloudPolicyanalyzerV1beta1ObservationPeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicyanalyzerV1beta1ObservationPeriod",
  });

export interface GoogleCloudPolicyanalyzerV1beta1Activity {
  /** The type of the activity. */
  activityType?: string;
  /** The data observation period to build the activity. */
  observationPeriod?: GoogleCloudPolicyanalyzerV1beta1ObservationPeriod;
  /** A struct of custom fields to explain the activity. */
  activity?: Record<string, unknown>;
  /** The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
  fullResourceName?: string;
}

export const GoogleCloudPolicyanalyzerV1beta1Activity: Schema.Schema<GoogleCloudPolicyanalyzerV1beta1Activity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activityType: Schema.optional(Schema.String),
    observationPeriod: Schema.optional(
      GoogleCloudPolicyanalyzerV1beta1ObservationPeriod,
    ),
    activity: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    fullResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudPolicyanalyzerV1beta1Activity" });

export interface GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse {
  /** The set of activities that match the filter included in the request. */
  activities?: ReadonlyArray<GoogleCloudPolicyanalyzerV1beta1Activity>;
  /** If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`. */
  nextPageToken?: string;
}

export const GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse: Schema.Schema<GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activities: Schema.optional(
      Schema.Array(GoogleCloudPolicyanalyzerV1beta1Activity),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface QueryProjectsLocationsActivityTypesActivitiesRequest {
  /** Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=} - service_account_key_last_authn.full_resource_name {=} */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. */
  pageSize?: number;
  /** Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
  /** Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ */
  parent: string;
}

export const QueryProjectsLocationsActivityTypesActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/activities:query" }),
    svc,
  ) as unknown as Schema.Schema<QueryProjectsLocationsActivityTypesActivitiesRequest>;

export type QueryProjectsLocationsActivityTypesActivitiesResponse =
  GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;
export const QueryProjectsLocationsActivityTypesActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;

export type QueryProjectsLocationsActivityTypesActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Queries policy activities on GCP resources. */
export const queryProjectsLocationsActivityTypesActivities: API.PaginatedOperationMethod<
  QueryProjectsLocationsActivityTypesActivitiesRequest,
  QueryProjectsLocationsActivityTypesActivitiesResponse,
  QueryProjectsLocationsActivityTypesActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryProjectsLocationsActivityTypesActivitiesRequest,
  output: QueryProjectsLocationsActivityTypesActivitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface QueryOrganizationsLocationsActivityTypesActivitiesRequest {
  /** Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ */
  parent: string;
  /** Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=} - service_account_key_last_authn.full_resource_name {=} */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. */
  pageSize?: number;
  /** Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const QueryOrganizationsLocationsActivityTypesActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/activities:query" }),
    svc,
  ) as unknown as Schema.Schema<QueryOrganizationsLocationsActivityTypesActivitiesRequest>;

export type QueryOrganizationsLocationsActivityTypesActivitiesResponse =
  GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;
export const QueryOrganizationsLocationsActivityTypesActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;

export type QueryOrganizationsLocationsActivityTypesActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Queries policy activities on GCP resources. */
export const queryOrganizationsLocationsActivityTypesActivities: API.PaginatedOperationMethod<
  QueryOrganizationsLocationsActivityTypesActivitiesRequest,
  QueryOrganizationsLocationsActivityTypesActivitiesResponse,
  QueryOrganizationsLocationsActivityTypesActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryOrganizationsLocationsActivityTypesActivitiesRequest,
  output: QueryOrganizationsLocationsActivityTypesActivitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface QueryFoldersLocationsActivityTypesActivitiesRequest {
  /** Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ */
  parent: string;
  /** Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=} - service_account_key_last_authn.full_resource_name {=} */
  filter?: string;
  /** Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. */
  pageSize?: number;
  /** Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const QueryFoldersLocationsActivityTypesActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/activities:query" }),
    svc,
  ) as unknown as Schema.Schema<QueryFoldersLocationsActivityTypesActivitiesRequest>;

export type QueryFoldersLocationsActivityTypesActivitiesResponse =
  GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;
export const QueryFoldersLocationsActivityTypesActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;

export type QueryFoldersLocationsActivityTypesActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Queries policy activities on GCP resources. */
export const queryFoldersLocationsActivityTypesActivities: API.PaginatedOperationMethod<
  QueryFoldersLocationsActivityTypesActivitiesRequest,
  QueryFoldersLocationsActivityTypesActivitiesResponse,
  QueryFoldersLocationsActivityTypesActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryFoldersLocationsActivityTypesActivitiesRequest,
  output: QueryFoldersLocationsActivityTypesActivitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
