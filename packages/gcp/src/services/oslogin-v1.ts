// ==========================================================================
// Cloud OS Login API (oslogin v1)
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
  name: "oslogin",
  version: "v1",
  rootUrl: "https://oslogin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SignSshPublicKeyResponse {
  /** The signed SSH public key to use in the SSH handshake. */
  signedSshPublicKey?: string;
}

export const SignSshPublicKeyResponse: Schema.Schema<SignSshPublicKeyResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signedSshPublicKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignSshPublicKeyResponse" });

export interface SignSshPublicKeyRequest {
  /** The Compute instance to sign the SSH public key for. Expected format: projects/{project}/zones/{zone}/instances/{numeric_instance_id} */
  computeInstance?: string;
  /** The App Engine instance to sign the SSH public key for. Expected format: apps/{app}/services/{service}/versions/{version}/instances/{instance} */
  appEngineInstance?: string;
  /** Required. The SSH public key to sign. */
  sshPublicKey?: string;
  /** Optional. The service account for the instance. If the instance in question does not have a service account, this field should be left empty. If the wrong service account is provided, this operation will return a signed certificate that will not be accepted by the VM. */
  serviceAccount?: string;
}

export const SignSshPublicKeyRequest: Schema.Schema<SignSshPublicKeyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeInstance: Schema.optional(Schema.String),
    appEngineInstance: Schema.optional(Schema.String),
    sshPublicKey: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignSshPublicKeyRequest" });

export interface PosixAccount {
  /** The path to the home directory for this account. */
  homeDirectory?: string;
  /** The operating system type where this account applies. */
  operatingSystemType?:
    | "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    | "LINUX"
    | "WINDOWS"
    | (string & {});
  /** System identifier for which account the username or uid applies to. By default, the empty value is used. */
  systemId?: string;
  /** Output only. The canonical resource name. */
  name?: string;
  /** The username of the POSIX account. */
  username?: string;
  /** Only one POSIX account can be marked as primary. */
  primary?: boolean;
  /** The user ID. */
  uid?: string;
  /** The GECOS (user information) entry for this account. */
  gecos?: string;
  /** The path to the logic shell for this account. */
  shell?: string;
  /** Output only. A POSIX account identifier. */
  accountId?: string;
  /** The default group ID. */
  gid?: string;
}

export const PosixAccount: Schema.Schema<PosixAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    homeDirectory: Schema.optional(Schema.String),
    operatingSystemType: Schema.optional(Schema.String),
    systemId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.Boolean),
    uid: Schema.optional(Schema.String),
    gecos: Schema.optional(Schema.String),
    shell: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    gid: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosixAccount" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface SshPublicKey {
  /** Output only. The SHA-256 fingerprint of the SSH public key. */
  fingerprint?: string;
  /** Required. Public key text in SSH format, defined by [RFC4253](https://www.ietf.org/rfc/rfc4253.txt) section 6.6. */
  key?: string;
  /** Output only. The canonical resource name. */
  name?: string;
  /** An expiration time in microseconds since epoch. */
  expirationTimeUsec?: string;
}

export const SshPublicKey: Schema.Schema<SshPublicKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    expirationTimeUsec: Schema.optional(Schema.String),
  }).annotate({ identifier: "SshPublicKey" });

export interface LoginProfile {
  /** The list of POSIX accounts associated with the user. */
  posixAccounts?: ReadonlyArray<PosixAccount>;
  /** Required. A unique user ID. */
  name?: string;
  /** A map from SSH public key fingerprint to the associated key object. */
  sshPublicKeys?: Record<string, SshPublicKey>;
}

export const LoginProfile: Schema.Schema<LoginProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    posixAccounts: Schema.optional(Schema.Array(PosixAccount)),
    name: Schema.optional(Schema.String),
    sshPublicKeys: Schema.optional(Schema.Record(Schema.String, SshPublicKey)),
  }).annotate({ identifier: "LoginProfile" });

export interface ImportSshPublicKeyResponse {
  /** The login profile information for the user. */
  loginProfile?: LoginProfile;
  /** Detailed information about import results. */
  details?: string;
}

export const ImportSshPublicKeyResponse: Schema.Schema<ImportSshPublicKeyResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loginProfile: Schema.optional(LoginProfile),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportSshPublicKeyResponse" });

export interface ProvisionPosixAccountRequest {
  /** Optional. The regions to wait for a POSIX account to be written to before returning a response. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region. */
  regions?: ReadonlyArray<string>;
}

export const ProvisionPosixAccountRequest: Schema.Schema<ProvisionPosixAccountRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProvisionPosixAccountRequest" });

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

export interface GetLoginProfileUsersRequest {
  /** Required. The unique ID for the user in format `users/{user}`. */
  name: string;
  /** Required. The project ID of the Google Cloud Platform project. */
  projectId?: string;
  /** Optional. A system ID for filtering the results of the request. */
  systemId?: string;
}

export const GetLoginProfileUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    systemId: Schema.optional(Schema.String).pipe(T.HttpQuery("systemId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/loginProfile" }),
    svc,
  ) as unknown as Schema.Schema<GetLoginProfileUsersRequest>;

export type GetLoginProfileUsersResponse = LoginProfile;
export const GetLoginProfileUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ LoginProfile;

export type GetLoginProfileUsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine. */
export const getLoginProfileUsers: API.OperationMethod<
  GetLoginProfileUsersRequest,
  GetLoginProfileUsersResponse,
  GetLoginProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLoginProfileUsersRequest,
  output: GetLoginProfileUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportSshPublicKeyUsersRequest {
  /** Required. The unique ID for the user in format `users/{user}`. */
  parent: string;
  /** The project ID of the Google Cloud Platform project. */
  projectId?: string;
  /** Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region. */
  regions?: string[];
  /** Request body */
  body?: SshPublicKey;
}

export const ImportSshPublicKeyUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    regions: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("regions"),
    ),
    body: Schema.optional(SshPublicKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:importSshPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportSshPublicKeyUsersRequest>;

export type ImportSshPublicKeyUsersResponse = ImportSshPublicKeyResponse;
export const ImportSshPublicKeyUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImportSshPublicKeyResponse;

export type ImportSshPublicKeyUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile. */
export const importSshPublicKeyUsers: API.OperationMethod<
  ImportSshPublicKeyUsersRequest,
  ImportSshPublicKeyUsersResponse,
  ImportSshPublicKeyUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportSshPublicKeyUsersRequest,
  output: ImportSshPublicKeyUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUsersSshPublicKeysRequest {
  /** Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. */
  name: string;
}

export const DeleteUsersSshPublicKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteUsersSshPublicKeysRequest>;

export type DeleteUsersSshPublicKeysResponse = Empty;
export const DeleteUsersSshPublicKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteUsersSshPublicKeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an SSH public key. */
export const deleteUsersSshPublicKeys: API.OperationMethod<
  DeleteUsersSshPublicKeysRequest,
  DeleteUsersSshPublicKeysResponse,
  DeleteUsersSshPublicKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersSshPublicKeysRequest,
  output: DeleteUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUsersSshPublicKeysRequest {
  /** Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. */
  name: string;
}

export const GetUsersSshPublicKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetUsersSshPublicKeysRequest>;

export type GetUsersSshPublicKeysResponse = SshPublicKey;
export const GetUsersSshPublicKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ SshPublicKey;

export type GetUsersSshPublicKeysError = DefaultErrors | NotFound | Forbidden;

/** Retrieves an SSH public key. */
export const getUsersSshPublicKeys: API.OperationMethod<
  GetUsersSshPublicKeysRequest,
  GetUsersSshPublicKeysResponse,
  GetUsersSshPublicKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersSshPublicKeysRequest,
  output: GetUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchUsersSshPublicKeysRequest {
  /** Optional. Mask to control which fields get updated. Updates all if not present. */
  updateMask?: string;
  /** Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. */
  name: string;
  /** Request body */
  body?: SshPublicKey;
}

export const PatchUsersSshPublicKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SshPublicKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchUsersSshPublicKeysRequest>;

export type PatchUsersSshPublicKeysResponse = SshPublicKey;
export const PatchUsersSshPublicKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ SshPublicKey;

export type PatchUsersSshPublicKeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an SSH public key and returns the profile information. This method supports patch semantics. */
export const patchUsersSshPublicKeys: API.OperationMethod<
  PatchUsersSshPublicKeysRequest,
  PatchUsersSshPublicKeysResponse,
  PatchUsersSshPublicKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUsersSshPublicKeysRequest,
  output: PatchUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateUsersSshPublicKeysRequest {
  /** Required. The unique ID for the user in format `users/{user}`. */
  parent: string;
  /** Request body */
  body?: SshPublicKey;
}

export const CreateUsersSshPublicKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SshPublicKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/sshPublicKeys",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateUsersSshPublicKeysRequest>;

export type CreateUsersSshPublicKeysResponse = SshPublicKey;
export const CreateUsersSshPublicKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ SshPublicKey;

export type CreateUsersSshPublicKeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an SSH public key */
export const createUsersSshPublicKeys: API.OperationMethod<
  CreateUsersSshPublicKeysRequest,
  CreateUsersSshPublicKeysResponse,
  CreateUsersSshPublicKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateUsersSshPublicKeysRequest,
  output: CreateUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUsersProjectsRequest {
  /** Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`. */
  name: string;
}

export const DeleteUsersProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteUsersProjectsRequest>;

export type DeleteUsersProjectsResponse = Empty;
export const DeleteUsersProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteUsersProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a POSIX account. */
export const deleteUsersProjects: API.OperationMethod<
  DeleteUsersProjectsRequest,
  DeleteUsersProjectsResponse,
  DeleteUsersProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersProjectsRequest,
  output: DeleteUsersProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProvisionPosixAccountUsersProjectsRequest {
  /** Required. The unique ID for the user in format `users/{user}/projects/{project}`. */
  name: string;
  /** Request body */
  body?: ProvisionPosixAccountRequest;
}

export const ProvisionPosixAccountUsersProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProvisionPosixAccountRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ProvisionPosixAccountUsersProjectsRequest>;

export type ProvisionPosixAccountUsersProjectsResponse = PosixAccount;
export const ProvisionPosixAccountUsersProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PosixAccount;

export type ProvisionPosixAccountUsersProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a POSIX account and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile. */
export const provisionPosixAccountUsersProjects: API.OperationMethod<
  ProvisionPosixAccountUsersProjectsRequest,
  ProvisionPosixAccountUsersProjectsResponse,
  ProvisionPosixAccountUsersProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProvisionPosixAccountUsersProjectsRequest,
  output: ProvisionPosixAccountUsersProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignSshPublicKeyProjectsLocationsRequest {
  /** Required. The parent for the signing request. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: SignSshPublicKeyRequest;
}

export const SignSshPublicKeyProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SignSshPublicKeyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:signSshPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SignSshPublicKeyProjectsLocationsRequest>;

export type SignSshPublicKeyProjectsLocationsResponse =
  SignSshPublicKeyResponse;
export const SignSshPublicKeyProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SignSshPublicKeyResponse;

export type SignSshPublicKeyProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine. */
export const signSshPublicKeyProjectsLocations: API.OperationMethod<
  SignSshPublicKeyProjectsLocationsRequest,
  SignSshPublicKeyProjectsLocationsResponse,
  SignSshPublicKeyProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignSshPublicKeyProjectsLocationsRequest,
  output: SignSshPublicKeyProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
