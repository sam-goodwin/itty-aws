// ==========================================================================
// Cloud Shell API (cloudshell v1)
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
  name: "cloudshell",
  version: "v1",
  rootUrl: "https://cloudshell.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface RemovePublicKeyRequest {
  /** Key that should be removed from the environment. */
  key?: string;
}

export const RemovePublicKeyRequest: Schema.Schema<RemovePublicKeyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemovePublicKeyRequest" });

export interface RemovePublicKeyResponse {}

export const RemovePublicKeyResponse: Schema.Schema<RemovePublicKeyResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemovePublicKeyResponse",
  });

export interface CreateEnvironmentMetadata {}

export const CreateEnvironmentMetadata: Schema.Schema<CreateEnvironmentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreateEnvironmentMetadata",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AddPublicKeyResponse {
  /** Key that was added to the environment. */
  key?: string;
}

export const AddPublicKeyResponse: Schema.Schema<AddPublicKeyResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddPublicKeyResponse" });

export interface StartEnvironmentMetadata {
  /** Current state of the environment being started. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STARTING"
    | "UNARCHIVING_DISK"
    | "AWAITING_COMPUTE_RESOURCES"
    | "FINISHED"
    | (string & {});
}

export const StartEnvironmentMetadata: Schema.Schema<StartEnvironmentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartEnvironmentMetadata" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface AuthorizeEnvironmentMetadata {}

export const AuthorizeEnvironmentMetadata: Schema.Schema<AuthorizeEnvironmentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AuthorizeEnvironmentMetadata",
  });

export interface AuthorizeEnvironmentRequest {
  /** The OAuth access token that should be sent to the environment. */
  accessToken?: string;
  /** The OAuth ID token that should be sent to the environment. */
  idToken?: string;
  /** The time when the credentials expire. If not set, defaults to one hour from when the server received the request. */
  expireTime?: string;
}

export const AuthorizeEnvironmentRequest: Schema.Schema<AuthorizeEnvironmentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthorizeEnvironmentRequest" });

export interface AddPublicKeyRequest {
  /** Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64. */
  key?: string;
}

export const AddPublicKeyRequest: Schema.Schema<AddPublicKeyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddPublicKeyRequest" });

export interface RemovePublicKeyMetadata {}

export const RemovePublicKeyMetadata: Schema.Schema<RemovePublicKeyMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemovePublicKeyMetadata",
  });

export interface Environment {
  /** Output only. The environment's identifier, unique among the user's environments. */
  id?: string;
  /** Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods. */
  publicKeys?: ReadonlyArray<string>;
  /** Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest". */
  dockerImage?: string;
  /** Output only. Port to which clients can connect to initiate SSH sessions with the environment. */
  sshPort?: number;
  /** Output only. Current execution state of this environment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUSPENDED"
    | "PENDING"
    | "RUNNING"
    | "DELETING"
    | (string & {});
  /** Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment. */
  webHost?: string;
  /** Output only. Host to which clients can connect to initiate SSH sessions with the environment. */
  sshHost?: string;
  /** Immutable. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`. */
  name?: string;
  /** Output only. Username that clients should use when initiating SSH sessions with the environment. */
  sshUsername?: string;
}

export const Environment: Schema.Schema<Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    publicKeys: Schema.optional(Schema.Array(Schema.String)),
    dockerImage: Schema.optional(Schema.String),
    sshPort: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    webHost: Schema.optional(Schema.String),
    sshHost: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sshUsername: Schema.optional(Schema.String),
  }).annotate({ identifier: "Environment" });

export interface GenerateAccessTokenResponse {
  /** The access token. */
  accessToken?: string;
}

export const GenerateAccessTokenResponse: Schema.Schema<GenerateAccessTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAccessTokenResponse" });

export interface StartEnvironmentRequest {
  /** The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment. */
  accessToken?: string;
  /** Public keys that should be added to the environment before it is started. */
  publicKeys?: ReadonlyArray<string>;
}

export const StartEnvironmentRequest: Schema.Schema<StartEnvironmentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(Schema.String),
    publicKeys: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StartEnvironmentRequest" });

export interface AddPublicKeyMetadata {}

export const AddPublicKeyMetadata: Schema.Schema<AddPublicKeyMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AddPublicKeyMetadata",
  });

export interface AuthorizeEnvironmentResponse {}

export const AuthorizeEnvironmentResponse: Schema.Schema<AuthorizeEnvironmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AuthorizeEnvironmentResponse",
  });

export interface DeleteEnvironmentMetadata {}

export const DeleteEnvironmentMetadata: Schema.Schema<DeleteEnvironmentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteEnvironmentMetadata",
  });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface StartEnvironmentResponse {
  /** Environment that was started. */
  environment?: Environment;
}

export const StartEnvironmentResponse: Schema.Schema<StartEnvironmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Environment),
  }).annotate({ identifier: "StartEnvironmentResponse" });

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

export interface AuthorizeUsersEnvironmentsRequest {
  /** Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`. */
  name: string;
  /** Request body */
  body?: AuthorizeEnvironmentRequest;
}

export const AuthorizeUsersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AuthorizeEnvironmentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:authorize", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AuthorizeUsersEnvironmentsRequest>;

export type AuthorizeUsersEnvironmentsResponse = Operation;
export const AuthorizeUsersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AuthorizeUsersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate. */
export const authorizeUsersEnvironments: API.OperationMethod<
  AuthorizeUsersEnvironmentsRequest,
  AuthorizeUsersEnvironmentsResponse,
  AuthorizeUsersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AuthorizeUsersEnvironmentsRequest,
  output: AuthorizeUsersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateAccessTokenUsersEnvironmentsRequest {
  /** Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future. */
  expireTime?: string;
  /** Required. The environment to generate the access token for. */
  environment: string;
  /** Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour. */
  ttl?: string;
}

export const GenerateAccessTokenUsersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String).pipe(T.HttpQuery("expireTime")),
    environment: Schema.String.pipe(T.HttpPath("environment")),
    ttl: Schema.optional(Schema.String).pipe(T.HttpQuery("ttl")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+environment}:generateAccessToken" }),
    svc,
  ) as unknown as Schema.Schema<GenerateAccessTokenUsersEnvironmentsRequest>;

export type GenerateAccessTokenUsersEnvironmentsResponse =
  GenerateAccessTokenResponse;
export const GenerateAccessTokenUsersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateAccessTokenResponse;

export type GenerateAccessTokenUsersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Generates an access token for the user's environment. */
export const generateAccessTokenUsersEnvironments: API.OperationMethod<
  GenerateAccessTokenUsersEnvironmentsRequest,
  GenerateAccessTokenUsersEnvironmentsResponse,
  GenerateAccessTokenUsersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAccessTokenUsersEnvironmentsRequest,
  output: GenerateAccessTokenUsersEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface StartUsersEnvironmentsRequest {
  /** Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`. */
  name: string;
  /** Request body */
  body?: StartEnvironmentRequest;
}

export const StartUsersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartEnvironmentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartUsersEnvironmentsRequest>;

export type StartUsersEnvironmentsResponse = Operation;
export const StartUsersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartUsersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field. */
export const startUsersEnvironments: API.OperationMethod<
  StartUsersEnvironmentsRequest,
  StartUsersEnvironmentsResponse,
  StartUsersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartUsersEnvironmentsRequest,
  output: StartUsersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemovePublicKeyUsersEnvironmentsRequest {
  /** Environment this key should be removed from, e.g. `users/me/environments/default`. */
  environment: string;
  /** Request body */
  body?: RemovePublicKeyRequest;
}

export const RemovePublicKeyUsersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.String.pipe(T.HttpPath("environment")),
    body: Schema.optional(RemovePublicKeyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+environment}:removePublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemovePublicKeyUsersEnvironmentsRequest>;

export type RemovePublicKeyUsersEnvironmentsResponse = Operation;
export const RemovePublicKeyUsersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemovePublicKeyUsersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND. */
export const removePublicKeyUsersEnvironments: API.OperationMethod<
  RemovePublicKeyUsersEnvironmentsRequest,
  RemovePublicKeyUsersEnvironmentsResponse,
  RemovePublicKeyUsersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemovePublicKeyUsersEnvironmentsRequest,
  output: RemovePublicKeyUsersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUsersEnvironmentsRequest {
  /** Required. Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`. */
  name: string;
}

export const GetUsersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetUsersEnvironmentsRequest>;

export type GetUsersEnvironmentsResponse = Environment;
export const GetUsersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type GetUsersEnvironmentsError = DefaultErrors | NotFound | Forbidden;

/** Gets an environment. Returns NOT_FOUND if the environment does not exist. */
export const getUsersEnvironments: API.OperationMethod<
  GetUsersEnvironmentsRequest,
  GetUsersEnvironmentsResponse,
  GetUsersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersEnvironmentsRequest,
  output: GetUsersEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddPublicKeyUsersEnvironmentsRequest {
  /** Environment this key should be added to, e.g. `users/me/environments/default`. */
  environment: string;
  /** Request body */
  body?: AddPublicKeyRequest;
}

export const AddPublicKeyUsersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.String.pipe(T.HttpPath("environment")),
    body: Schema.optional(AddPublicKeyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+environment}:addPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddPublicKeyUsersEnvironmentsRequest>;

export type AddPublicKeyUsersEnvironmentsResponse = Operation;
export const AddPublicKeyUsersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddPublicKeyUsersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS. */
export const addPublicKeyUsersEnvironments: API.OperationMethod<
  AddPublicKeyUsersEnvironmentsRequest,
  AddPublicKeyUsersEnvironmentsResponse,
  AddPublicKeyUsersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddPublicKeyUsersEnvironmentsRequest,
  output: AddPublicKeyUsersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOperationsRequest>;

export type DeleteOperationsResponse = Empty;
export const DeleteOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOperations: API.OperationMethod<
  DeleteOperationsRequest,
  DeleteOperationsResponse,
  DeleteOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOperationsRequest,
  output: DeleteOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOperationsRequest>;

export type CancelOperationsResponse = Empty;
export const CancelOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOperations: API.OperationMethod<
  CancelOperationsRequest,
  CancelOperationsResponse,
  CancelOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOperationsRequest,
  output: CancelOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  name: Schema.String.pipe(T.HttpPath("name")),
  returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("returnPartialSuccess"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<ListOperationsRequest>;

export type ListOperationsResponse_Op = ListOperationsResponse;
export const ListOperationsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse_Op,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));
