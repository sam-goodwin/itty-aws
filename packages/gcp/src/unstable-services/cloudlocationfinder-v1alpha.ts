// ==========================================================================
// Cloud Location Finder API (cloudlocationfinder v1alpha)
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
  name: "cloudlocationfinder",
  version: "v1alpha",
  rootUrl: "https://cloudlocationfinder.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CloudLocation {
  /** Optional. The type of the cloud location. */
  cloudLocationType?:
    | "CLOUD_LOCATION_TYPE_UNSPECIFIED"
    | "CLOUD_LOCATION_TYPE_REGION"
    | "CLOUD_LOCATION_TYPE_ZONE"
    | "CLOUD_LOCATION_TYPE_REGION_EXTENSION"
    | "CLOUD_LOCATION_TYPE_GDCC_ZONE"
    | (string & {});
  /** Optional. The human-readable name of the cloud location. Example: us-east-2, us-east1. */
  displayName?: string;
  /** Optional. The carbon free energy percentage of the cloud location. This represents the average percentage of time customers' application will be running on carbon-free energy. See https://cloud.google.com/sustainability/region-carbon for more details. There is a difference between default value 0 and unset value. 0 means the carbon free energy percentage is 0%, while unset value means the carbon footprint data is not available. */
  carbonFreeEnergyPercentage?: number;
  /** Identifier. Name of the cloud location. Unique name of the cloud location including project and location using the form: `projects/{project_id}/locations/{location}/cloudLocations/{cloud_location}` */
  name?: string;
  /** Output only. The containing cloud location in the strict nesting hierarchy. For example, the containing cloud location of a zone is a region. */
  containingCloudLocation?: string;
  /** Optional. The provider of the cloud location. Values can be Google Cloud or third-party providers, including AWS, Azure, or Oracle Cloud Infrastructure. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "CLOUD_PROVIDER_GCP"
    | "CLOUD_PROVIDER_AWS"
    | "CLOUD_PROVIDER_AZURE"
    | "CLOUD_PROVIDER_OCI"
    | (string & {});
  /** Optional. The two-letter ISO 3166-1 alpha-2 code of the cloud location. Examples: US, JP, KR. */
  territoryCode?: string;
}

export const CloudLocation: Schema.Schema<CloudLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudLocationType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    carbonFreeEnergyPercentage: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    containingCloudLocation: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    territoryCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudLocation" });

export interface ListCloudLocationsResponse {
  /** Output only. List of cloud locations. */
  cloudLocations?: ReadonlyArray<CloudLocation>;
  /** Output only. The continuation token, used to page through large result sets. Provide this value in a subsequent request as page_token in subsequent requests to retrieve the next page. If this field is not present, there are no subsequent results. */
  nextPageToken?: string;
}

export const ListCloudLocationsResponse: Schema.Schema<ListCloudLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudLocations: Schema.optional(Schema.Array(CloudLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCloudLocationsResponse" });

export interface SearchCloudLocationsResponse {
  /** Output only. The continuation token, used to page through large result sets. Provide this value in a subsequent request as page_token in subsequent requests to retrieve the next page. If this field is not present, there are no subsequent results. */
  nextPageToken?: string;
  /** Output only. List of cloud locations. */
  cloudLocations?: ReadonlyArray<CloudLocation>;
}

export const SearchCloudLocationsResponse: Schema.Schema<SearchCloudLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    cloudLocations: Schema.optional(Schema.Array(CloudLocation)),
  }).annotate({ identifier: "SearchCloudLocationsResponse" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsCloudLocationsRequest {
  /** Optional. A token identifying a page of results the server should return. Provide page token returned by a previous 'ListCloudLocations' call to retrieve the next page of results. When paginating, all other parameters provided to 'ListCloudLocations' must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of cloud locations. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of cloud locations to return per page. The service might return fewer cloud locations than this value. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A filter expression that filters resources listed in the response. The expression is in the form of field=value. For example, 'cloud_location_type=CLOUD_LOCATION_TYPE_REGION'. Multiple filter queries are space-separated. For example, 'cloud_location_type=CLOUD_LOCATION_TYPE_REGION territory_code="US"' By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. */
  filter?: string;
}

export const ListProjectsLocationsCloudLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/cloudLocations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCloudLocationsRequest>;

export type ListProjectsLocationsCloudLocationsResponse =
  ListCloudLocationsResponse;
export const ListProjectsLocationsCloudLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCloudLocationsResponse;

export type ListProjectsLocationsCloudLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists cloud locations under a given project and location. */
export const listProjectsLocationsCloudLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudLocationsRequest,
  ListProjectsLocationsCloudLocationsResponse,
  ListProjectsLocationsCloudLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudLocationsRequest,
  output: ListProjectsLocationsCloudLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchProjectsLocationsCloudLocationsRequest {
  /** Optional. The query string in search query syntax. While filter is used to filter the search results by attributes, query is used to specify the search requirements. */
  query?: string;
  /** Required. The parent, which owns this collection of cloud locations. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of cloud locations to return. The service might return fewer cloud locations than this value. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The source cloud location to search from. Example search can be searching nearby cloud locations from the source cloud location by latency. */
  sourceCloudLocation?: string;
  /** Optional. A token identifying a page of results the server should return. Provide Page token returned by a previous 'ListCloudLocations' call to retrieve the next page of results. When paginating, all other parameters provided to 'ListCloudLocations' must match the call that provided the page token. */
  pageToken?: string;
}

export const SearchProjectsLocationsCloudLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    sourceCloudLocation: Schema.optional(Schema.String).pipe(
      T.HttpQuery("sourceCloudLocation"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/cloudLocations:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsCloudLocationsRequest>;

export type SearchProjectsLocationsCloudLocationsResponse =
  SearchCloudLocationsResponse;
export const SearchProjectsLocationsCloudLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchCloudLocationsResponse;

export type SearchProjectsLocationsCloudLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches for cloud locations from a given source location. */
export const searchProjectsLocationsCloudLocations: API.PaginatedOperationMethod<
  SearchProjectsLocationsCloudLocationsRequest,
  SearchProjectsLocationsCloudLocationsResponse,
  SearchProjectsLocationsCloudLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsCloudLocationsRequest,
  output: SearchProjectsLocationsCloudLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCloudLocationsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsCloudLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCloudLocationsRequest>;

export type GetProjectsLocationsCloudLocationsResponse = CloudLocation;
export const GetProjectsLocationsCloudLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CloudLocation;

export type GetProjectsLocationsCloudLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a resource containing information about a cloud location. */
export const getProjectsLocationsCloudLocations: API.OperationMethod<
  GetProjectsLocationsCloudLocationsRequest,
  GetProjectsLocationsCloudLocationsResponse,
  GetProjectsLocationsCloudLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCloudLocationsRequest,
  output: GetProjectsLocationsCloudLocationsResponse,
  errors: [NotFound, Forbidden],
}));
