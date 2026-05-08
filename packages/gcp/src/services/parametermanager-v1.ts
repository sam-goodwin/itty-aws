// ==========================================================================
// Parameter Manager API (parametermanager v1)
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
  name: "parametermanager",
  version: "v1",
  rootUrl: "https://parametermanager.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ResourcePolicyMember {
  /** Output only. IAM policy binding member referring to a Google Cloud resource by user-assigned name (https://google.aip.dev/122). If a resource is deleted and recreated with the same name, the binding will be applicable to the new resource. Example: `principal://parametermanager.googleapis.com/projects/12345/name/locations/us-central1-a/parameters/my-parameter` */
  iamPolicyNamePrincipal?: string;
  /** Output only. IAM policy binding member referring to a Google Cloud resource by system-assigned unique identifier (https://google.aip.dev/148#uid). If a resource is deleted and recreated with the same name, the binding will not be applicable to the new resource Example: `principal://parametermanager.googleapis.com/projects/12345/uid/locations/us-central1-a/parameters/a918fed5` */
  iamPolicyUidPrincipal?: string;
}

export const ResourcePolicyMember: Schema.Schema<ResourcePolicyMember> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iamPolicyNamePrincipal: Schema.optional(Schema.String),
    iamPolicyUidPrincipal: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePolicyMember" });

export interface Parameter {
  /** Output only. [Output only] Create time stamp */
  createTime?: string;
  /** Output only. [Output only] Update time stamp */
  updateTime?: string;
  /** Optional. Specifies the format of a Parameter. */
  format?:
    | "PARAMETER_FORMAT_UNSPECIFIED"
    | "UNFORMATTED"
    | "YAML"
    | "JSON"
    | (string & {});
  /** Output only. [Output-only] policy member strings of a Google Cloud resource. */
  policyMember?: ResourcePolicyMember;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Identifier. [Output only] The resource name of the Parameter in the format `projects/* /locations/* /parameters/*`. */
  name?: string;
  /** Optional. Customer managed encryption key (CMEK) to use for encrypting the Parameter Versions. If not set, the default Google-managed encryption key will be used. Cloud KMS CryptoKeys must reside in the same location as the Parameter. The expected format is `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  kmsKey?: string;
}

export const Parameter: Schema.Schema<Parameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    policyMember: Schema.optional(ResourcePolicyMember),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "Parameter" });

export interface ListParametersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of Parameters */
  parameters?: ReadonlyArray<Parameter>;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListParametersResponse: Schema.Schema<ListParametersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(Parameter)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListParametersResponse" });

export interface ParameterVersionPayload {
  /** Required. bytes data for storing payload. */
  data?: string;
}

export const ParameterVersionPayload: Schema.Schema<ParameterVersionPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "ParameterVersionPayload" });

export interface ParameterVersion {
  /** Identifier. [Output only] The resource name of the ParameterVersion in the format `projects/* /locations/* /parameters/* /versions/*`. */
  name?: string;
  /** Required. Immutable. Payload content of a ParameterVersion resource. This is only returned when the request provides the View value of FULL (default for GET request). */
  payload?: ParameterVersionPayload;
  /** Output only. [Output only] Create time stamp */
  createTime?: string;
  /** Output only. [Output only] Update time stamp */
  updateTime?: string;
  /** Optional. Disabled boolean to determine if a ParameterVersion acts as a metadata only resource (payload is never returned if disabled is true). If true any calls will always default to BASIC view even if the user explicitly passes FULL view as part of the request. A render call on a disabled resource fails with an error. Default value is False. */
  disabled?: boolean;
  /** Optional. Output only. [Output only] The resource name of the KMS key version used to encrypt the ParameterVersion payload. This field is populated only if the Parameter resource has customer managed encryption key (CMEK) configured. */
  kmsKeyVersion?: string;
}

export const ParameterVersion: Schema.Schema<ParameterVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    payload: Schema.optional(ParameterVersionPayload),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    kmsKeyVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ParameterVersion" });

export interface ListParameterVersionsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of ParameterVersions */
  parameterVersions?: ReadonlyArray<ParameterVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListParameterVersionsResponse: Schema.Schema<ListParameterVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    parameterVersions: Schema.optional(Schema.Array(ParameterVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListParameterVersionsResponse" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RenderParameterVersionResponse {
  /** Output only. Resource identifier of a ParameterVersion in the format `projects/* /locations/* /parameters/* /versions/*`. */
  parameterVersion?: string;
  /** Payload content of a ParameterVersion resource. */
  payload?: ParameterVersionPayload;
  /** Output only. Server generated rendered version of the user provided payload data (ParameterVersionPayload) which has substitutions of all (if any) references to a SecretManager SecretVersion resources. This substitution only works for a Parameter which is in JSON or YAML format. */
  renderedPayload?: string;
}

export const RenderParameterVersionResponse: Schema.Schema<RenderParameterVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameterVersion: Schema.optional(Schema.String),
    payload: Schema.optional(ParameterVersionPayload),
    renderedPayload: Schema.optional(Schema.String),
  }).annotate({ identifier: "RenderParameterVersionResponse" });

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

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface GetProjectsLocationsParametersRequest {
  /** Required. Name of the resource in the format `projects/* /locations/* /parameters/*`. */
  name: string;
}

export const GetProjectsLocationsParametersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsParametersRequest>;

export type GetProjectsLocationsParametersResponse = Parameter;
export const GetProjectsLocationsParametersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Parameter;

export type GetProjectsLocationsParametersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Parameter. */
export const getProjectsLocationsParameters: API.OperationMethod<
  GetProjectsLocationsParametersRequest,
  GetProjectsLocationsParametersResponse,
  GetProjectsLocationsParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsParametersRequest,
  output: GetProjectsLocationsParametersResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsParametersRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the Parameter resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. [Output only] The resource name of the Parameter in the format `projects/* /locations/* /parameters/*`. */
  name: string;
  /** Request body */
  body?: Parameter;
}

export const PatchProjectsLocationsParametersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Parameter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsParametersRequest>;

export type PatchProjectsLocationsParametersResponse = Parameter;
export const PatchProjectsLocationsParametersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Parameter;

export type PatchProjectsLocationsParametersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single Parameter. */
export const patchProjectsLocationsParameters: API.OperationMethod<
  PatchProjectsLocationsParametersRequest,
  PatchProjectsLocationsParametersResponse,
  PatchProjectsLocationsParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsParametersRequest,
  output: PatchProjectsLocationsParametersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsParametersRequest {
  /** Required. Value for parent in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. Id of the Parameter resource */
  parameterId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Parameter;
}

export const CreateProjectsLocationsParametersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    parameterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("parameterId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Parameter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/parameters", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsParametersRequest>;

export type CreateProjectsLocationsParametersResponse = Parameter;
export const CreateProjectsLocationsParametersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Parameter;

export type CreateProjectsLocationsParametersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Parameter in a given project and location. */
export const createProjectsLocationsParameters: API.OperationMethod<
  CreateProjectsLocationsParametersRequest,
  CreateProjectsLocationsParametersResponse,
  CreateProjectsLocationsParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsParametersRequest,
  output: CreateProjectsLocationsParametersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsParametersRequest {
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Required. Parent value for ListParametersRequest in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListParameters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListParameters` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsParametersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/parameters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsParametersRequest>;

export type ListProjectsLocationsParametersResponse = ListParametersResponse;
export const ListProjectsLocationsParametersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListParametersResponse;

export type ListProjectsLocationsParametersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Parameters in a given project and location. */
export const listProjectsLocationsParameters: API.PaginatedOperationMethod<
  ListProjectsLocationsParametersRequest,
  ListProjectsLocationsParametersResponse,
  ListProjectsLocationsParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsParametersRequest,
  output: ListProjectsLocationsParametersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsParametersRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource in the format `projects/* /locations/* /parameters/*`. */
  name: string;
}

export const DeleteProjectsLocationsParametersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsParametersRequest>;

export type DeleteProjectsLocationsParametersResponse = Empty;
export const DeleteProjectsLocationsParametersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsParametersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Parameter. */
export const deleteProjectsLocationsParameters: API.OperationMethod<
  DeleteProjectsLocationsParametersRequest,
  DeleteProjectsLocationsParametersResponse,
  DeleteProjectsLocationsParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsParametersRequest,
  output: DeleteProjectsLocationsParametersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsParametersVersionsRequest {
  /** Required. Parent value for ListParameterVersionsRequest in the format `projects/* /locations/* /parameters/*`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListParameterVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListParameterVersions` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsParametersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsParametersVersionsRequest>;

export type ListProjectsLocationsParametersVersionsResponse =
  ListParameterVersionsResponse;
export const ListProjectsLocationsParametersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListParameterVersionsResponse;

export type ListProjectsLocationsParametersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ParameterVersions in a given project, location, and parameter. */
export const listProjectsLocationsParametersVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsParametersVersionsRequest,
  ListProjectsLocationsParametersVersionsResponse,
  ListProjectsLocationsParametersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsParametersVersionsRequest,
  output: ListProjectsLocationsParametersVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsParametersVersionsRequest {
  /** Required. Name of the resource in the format `projects/* /locations/* /parameters/* /versions/*`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsParametersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsParametersVersionsRequest>;

export type DeleteProjectsLocationsParametersVersionsResponse = Empty;
export const DeleteProjectsLocationsParametersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsParametersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ParameterVersion. */
export const deleteProjectsLocationsParametersVersions: API.OperationMethod<
  DeleteProjectsLocationsParametersVersionsRequest,
  DeleteProjectsLocationsParametersVersionsResponse,
  DeleteProjectsLocationsParametersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsParametersVersionsRequest,
  output: DeleteProjectsLocationsParametersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RenderProjectsLocationsParametersVersionsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const RenderProjectsLocationsParametersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:render" }),
    svc,
  ) as unknown as Schema.Schema<RenderProjectsLocationsParametersVersionsRequest>;

export type RenderProjectsLocationsParametersVersionsResponse =
  RenderParameterVersionResponse;
export const RenderProjectsLocationsParametersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RenderParameterVersionResponse;

export type RenderProjectsLocationsParametersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets rendered version of a ParameterVersion. */
export const renderProjectsLocationsParametersVersions: API.OperationMethod<
  RenderProjectsLocationsParametersVersionsRequest,
  RenderProjectsLocationsParametersVersionsResponse,
  RenderProjectsLocationsParametersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RenderProjectsLocationsParametersVersionsRequest,
  output: RenderProjectsLocationsParametersVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsParametersVersionsRequest {
  /** Required. Name of the resource in the format `projects/* /locations/* /parameters/* /versions/*`. */
  name: string;
  /** Optional. View of the ParameterVersion. In the default FULL view, all metadata & payload associated with the ParameterVersion will be returned. */
  view?: "VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsParametersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsParametersVersionsRequest>;

export type GetProjectsLocationsParametersVersionsResponse = ParameterVersion;
export const GetProjectsLocationsParametersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ParameterVersion;

export type GetProjectsLocationsParametersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ParameterVersion. */
export const getProjectsLocationsParametersVersions: API.OperationMethod<
  GetProjectsLocationsParametersVersionsRequest,
  GetProjectsLocationsParametersVersionsResponse,
  GetProjectsLocationsParametersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsParametersVersionsRequest,
  output: GetProjectsLocationsParametersVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsParametersVersionsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. [Output only] The resource name of the ParameterVersion in the format `projects/* /locations/* /parameters/* /versions/*`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ParameterVersion resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ParameterVersion;
}

export const PatchProjectsLocationsParametersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ParameterVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsParametersVersionsRequest>;

export type PatchProjectsLocationsParametersVersionsResponse = ParameterVersion;
export const PatchProjectsLocationsParametersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ParameterVersion;

export type PatchProjectsLocationsParametersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single ParameterVersion. */
export const patchProjectsLocationsParametersVersions: API.OperationMethod<
  PatchProjectsLocationsParametersVersionsRequest,
  PatchProjectsLocationsParametersVersionsResponse,
  PatchProjectsLocationsParametersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsParametersVersionsRequest,
  output: PatchProjectsLocationsParametersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsParametersVersionsRequest {
  /** Required. Value for parent in the format `projects/* /locations/* /parameters/*`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Id of the ParameterVersion resource */
  parameterVersionId?: string;
  /** Request body */
  body?: ParameterVersion;
}

export const CreateProjectsLocationsParametersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parameterVersionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("parameterVersionId"),
    ),
    body: Schema.optional(ParameterVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsParametersVersionsRequest>;

export type CreateProjectsLocationsParametersVersionsResponse =
  ParameterVersion;
export const CreateProjectsLocationsParametersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ParameterVersion;

export type CreateProjectsLocationsParametersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ParameterVersion in a given project, location, and parameter. */
export const createProjectsLocationsParametersVersions: API.OperationMethod<
  CreateProjectsLocationsParametersVersionsRequest,
  CreateProjectsLocationsParametersVersionsResponse,
  CreateProjectsLocationsParametersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsParametersVersionsRequest,
  output: CreateProjectsLocationsParametersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
