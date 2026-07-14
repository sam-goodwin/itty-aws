// ==========================================================================
// Cloud OS Login API (oslogin v1alpha)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "oslogin",
  version: "v1alpha",
  rootUrl: "https://oslogin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface PosixAccount {
  /** The user ID. */
  uid?: string;
  /** System identifier for which account the username or uid applies to. By default, the empty value is used. */
  systemId?: string;
  /** The path to the home directory for this account. */
  homeDirectory?: string;
  /** Output only. A POSIX account identifier. */
  accountId?: string;
  /** Only one POSIX account can be marked as primary. */
  primary?: boolean;
  /** The username of the POSIX account. */
  username?: string;
  /** The default group ID. */
  gid?: string;
  /** The path to the logic shell for this account. */
  shell?: string;
  /** The GECOS (user information) entry for this account. */
  gecos?: string;
  /** The operating system type where this account applies. */
  operatingSystemType?:
    | "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    | "LINUX"
    | "WINDOWS"
    | (string & {});
  /** Output only. The canonical resource name. */
  name?: string;
}

export const PosixAccount: Schema.Codec<PosixAccount> =
  /*@__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    systemId: Schema.optional(Schema.String),
    homeDirectory: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.Boolean),
    username: Schema.optional(Schema.String),
    gid: Schema.optional(Schema.String),
    shell: Schema.optional(Schema.String),
    gecos: Schema.optional(Schema.String),
    operatingSystemType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosixAccount" });

export interface SignSshPublicKeyResponse {
  /** The signed SSH public key to use in the SSH handshake. */
  signedSshPublicKey?: string;
}

export const SignSshPublicKeyResponse: Schema.Codec<SignSshPublicKeyResponse> =
  /*@__PURE__*/ Schema.Struct({
    signedSshPublicKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignSshPublicKeyResponse" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyResponse {
  /** The signed SSH public key to use in the SSH handshake. */
  signedSshPublicKey?: string;
}

export const GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyResponse: Schema.Codec<GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyResponse> =
  /*@__PURE__*/ Schema.Struct({
    signedSshPublicKey: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyResponse",
  });

export interface WebAuthn {
  /** Relying party ID for Web Authentication. */
  rpId?: string;
}

export const WebAuthn: Schema.Codec<WebAuthn> =
  /*@__PURE__*/ Schema.Struct({
    rpId: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebAuthn" });

export interface SshPublicKey {
  /** Output only. The SHA-256 fingerprint of the SSH public key. */
  fingerprint?: string;
  /** Output only. The canonical resource name. */
  name?: string;
  /** Required. Public key text in SSH format, defined by [RFC4253](https://www.ietf.org/rfc/rfc4253.txt) section 6.6. */
  key?: string;
  /** An expiration time in microseconds since epoch. */
  expirationTimeUsec?: string;
}

export const SshPublicKey: Schema.Codec<SshPublicKey> =
  /*@__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    expirationTimeUsec: Schema.optional(Schema.String),
  }).annotate({ identifier: "SshPublicKey" });

export interface UniversalTwoFactor {
  /** Application ID for the U2F protocol. */
  appId?: string;
}

export const UniversalTwoFactor: Schema.Codec<UniversalTwoFactor> =
  /*@__PURE__*/ Schema.Struct({
    appId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UniversalTwoFactor" });

export interface SecurityKey {
  /** Hardware-backed private key text in SSH format. */
  privateKey?: string;
  /** The U2F protocol type. */
  universalTwoFactor?: UniversalTwoFactor;
  /** The Web Authentication protocol type. */
  webAuthn?: WebAuthn;
  /** Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6. */
  publicKey?: string;
  /** The security key nickname explicitly set by the user. */
  deviceNickname?: string;
}

export const SecurityKey: Schema.Codec<SecurityKey> =
  /*@__PURE__*/ Schema.Struct({
    privateKey: Schema.optional(Schema.String),
    universalTwoFactor: Schema.optional(UniversalTwoFactor),
    webAuthn: Schema.optional(WebAuthn),
    publicKey: Schema.optional(Schema.String),
    deviceNickname: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityKey" });

export interface LoginProfile {
  /** A map from SSH public key fingerprint to the associated key object. */
  sshPublicKeys?: Record<string, SshPublicKey>;
  /** Required. A unique user ID. */
  name?: string;
  /** The registered security key credentials for a user. */
  securityKeys?: ReadonlyArray<SecurityKey>;
  /** The list of POSIX accounts associated with the user. */
  posixAccounts?: ReadonlyArray<PosixAccount>;
}

export const LoginProfile: Schema.Codec<LoginProfile> =
  /*@__PURE__*/ Schema.Struct({
    sshPublicKeys: Schema.optional(Schema.Record(Schema.String, SshPublicKey)),
    name: Schema.optional(Schema.String),
    securityKeys: Schema.optional(Schema.Array(SecurityKey)),
    posixAccounts: Schema.optional(Schema.Array(PosixAccount)),
  }).annotate({ identifier: "LoginProfile" });

export interface ImportSshPublicKeyResponse {
  /** Detailed information about import results. */
  details?: string;
  /** The login profile information for the user. */
  loginProfile?: LoginProfile;
}

export const ImportSshPublicKeyResponse: Schema.Codec<ImportSshPublicKeyResponse> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    loginProfile: Schema.optional(LoginProfile),
  }).annotate({ identifier: "ImportSshPublicKeyResponse" });

export interface GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyRequest {
  /** Required. The SSH public key to sign. */
  sshPublicKey?: string;
  /** The Compute instance to sign the SSH public key for. Expected format: projects/{project}/zones/{zone}/instances/{numeric_instance_id} */
  computeInstance?: string;
  /** Optional. The service account for the instance. If the instance in question does not have a service account, this field should be left empty. If the wrong service account is provided, this operation will return a signed certificate that will not be accepted by the VM. */
  serviceAccount?: string;
  /** The App Engine instance to sign the SSH public key for. Expected format: apps/{app}/services/{service}/versions/{version}/instances/{instance} */
  appEngineInstance?: string;
  /** Optional. The Cloud Run resource to sign the SSH public key for. Expected formats: - `projects/{project}/locations/{location}/services/{service}` - `projects/{project}/locations/{location}/workerPools/{worker_pool}` - `projects/{project}/locations/{location}/jobs/{job}` - `projects/{project}/locations/{location}/instances/{instance}` */
  cloudRunResource?: string;
}

export const GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyRequest: Schema.Codec<GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyRequest> =
  /*@__PURE__*/ Schema.Struct({
    sshPublicKey: Schema.optional(Schema.String),
    computeInstance: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    appEngineInstance: Schema.optional(Schema.String),
    cloudRunResource: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyRequest",
  });

export interface ProvisionPosixAccountRequest {
  /** Optional. The regions to wait for a POSIX account to be written to before returning a response. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region. */
  regions?: ReadonlyArray<string>;
}

export const ProvisionPosixAccountRequest: Schema.Codec<ProvisionPosixAccountRequest> =
  /*@__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProvisionPosixAccountRequest" });

export interface SignSshPublicKeyRequest {
  /** Required. The SSH public key to sign. */
  sshPublicKey?: string;
}

export const SignSshPublicKeyRequest: Schema.Codec<SignSshPublicKeyRequest> =
  /*@__PURE__*/ Schema.Struct({
    sshPublicKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignSshPublicKeyRequest" });

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

export interface SignSshPublicKeyProjectsLocationsRequest {
  /** Required. The parent for the signing request. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyRequest;
}

export const SignSshPublicKeyProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}:signSshPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SignSshPublicKeyProjectsLocationsRequest>;

export type SignSshPublicKeyProjectsLocationsResponse =
  GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyResponse;
export const SignSshPublicKeyProjectsLocationsResponse =
  /*@__PURE__*/ GoogleCloudOsloginControlplaneRegionalV1alphaSignSshPublicKeyResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: SignSshPublicKeyProjectsLocationsRequest,
  output: SignSshPublicKeyProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetLoginProfileUsersRequest {
  /** Required. The project ID of the Google Cloud Platform project. */
  projectId?: string;
  /** Optional. A system ID for filtering the results of the request. */
  systemId?: string;
  /** Required. The unique ID for the user in format `users/{user}`. */
  name: string;
  /** Optional. The type of operating system associated with the account. */
  operatingSystemType?:
    | "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    | "LINUX"
    | "WINDOWS"
    | (string & {});
  /** The view configures whether to retrieve security keys information. */
  view?:
    | "LOGIN_PROFILE_VIEW_UNSPECIFIED"
    | "BASIC"
    | "SECURITY_KEY"
    | (string & {});
}

export const GetLoginProfileUsersRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    systemId: Schema.optional(Schema.String).pipe(T.HttpQuery("systemId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    operatingSystemType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("operatingSystemType"),
    ),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/loginProfile" }),
    svc,
  ) as unknown as Schema.Codec<GetLoginProfileUsersRequest>;

export type GetLoginProfileUsersResponse = LoginProfile;
export const GetLoginProfileUsersResponse = /*@__PURE__*/ LoginProfile;

export type GetLoginProfileUsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine. */
export const getLoginProfileUsers: API.OperationMethod<
  GetLoginProfileUsersRequest,
  GetLoginProfileUsersResponse,
  GetLoginProfileUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLoginProfileUsersRequest,
  output: GetLoginProfileUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportSshPublicKeyUsersRequest {
  /** The unique ID for the user in format `users/{user}`. */
  parent: string;
  /** The project ID of the Google Cloud Platform project. */
  projectId?: string;
  /** The view configures whether to retrieve security keys information. */
  view?:
    | "LOGIN_PROFILE_VIEW_UNSPECIFIED"
    | "BASIC"
    | "SECURITY_KEY"
    | (string & {});
  /** Optional. The regions to wait for a POSIX account to be written to before returning a response. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region. */
  regions?: string[];
  /** Request body */
  body?: SshPublicKey;
}

export const ImportSshPublicKeyUsersRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    projectId: Schema.optional(Schema.String).pipe(T.HttpQuery("projectId")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    regions: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("regions"),
    ),
    body: Schema.optional(SshPublicKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}:importSshPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportSshPublicKeyUsersRequest>;

export type ImportSshPublicKeyUsersResponse = ImportSshPublicKeyResponse;
export const ImportSshPublicKeyUsersResponse =
  /*@__PURE__*/ ImportSshPublicKeyResponse;

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
> = /*@__PURE__*/ API.make(() => ({
  input: ImportSshPublicKeyUsersRequest,
  output: ImportSshPublicKeyUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProvisionPosixAccountUsersProjectsRequest {
  /** Required. The unique ID for the user in format `users/{user}/projects/{project}`. */
  name: string;
  /** Request body */
  body?: ProvisionPosixAccountRequest;
}

export const ProvisionPosixAccountUsersProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProvisionPosixAccountRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ProvisionPosixAccountUsersProjectsRequest>;

export type ProvisionPosixAccountUsersProjectsResponse = PosixAccount;
export const ProvisionPosixAccountUsersProjectsResponse =
  /*@__PURE__*/ PosixAccount;

export type ProvisionPosixAccountUsersProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a POSIX account if it doesn't exist. */
export const provisionPosixAccountUsersProjects: API.OperationMethod<
  ProvisionPosixAccountUsersProjectsRequest,
  ProvisionPosixAccountUsersProjectsResponse,
  ProvisionPosixAccountUsersProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProvisionPosixAccountUsersProjectsRequest,
  output: ProvisionPosixAccountUsersProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUsersProjectsRequest {
  /** Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`. */
  name: string;
  /** Optional. The type of operating system associated with the account. */
  operatingSystemType?:
    | "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    | "LINUX"
    | "WINDOWS"
    | (string & {});
}

export const DeleteUsersProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    operatingSystemType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("operatingSystemType"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteUsersProjectsRequest>;

export type DeleteUsersProjectsResponse = Empty;
export const DeleteUsersProjectsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsersProjectsRequest,
  output: DeleteUsersProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignSshPublicKeyUsersProjectsLocationsRequest {
  /** Required. The parent project and region for the signing request. */
  parent: string;
  /** Request body */
  body?: SignSshPublicKeyRequest;
}

export const SignSshPublicKeyUsersProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SignSshPublicKeyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}:signSshPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SignSshPublicKeyUsersProjectsLocationsRequest>;

export type SignSshPublicKeyUsersProjectsLocationsResponse =
  SignSshPublicKeyResponse;
export const SignSshPublicKeyUsersProjectsLocationsResponse =
  /*@__PURE__*/ SignSshPublicKeyResponse;

export type SignSshPublicKeyUsersProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine. */
export const signSshPublicKeyUsersProjectsLocations: API.OperationMethod<
  SignSshPublicKeyUsersProjectsLocationsRequest,
  SignSshPublicKeyUsersProjectsLocationsResponse,
  SignSshPublicKeyUsersProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SignSshPublicKeyUsersProjectsLocationsRequest,
  output: SignSshPublicKeyUsersProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignSshPublicKeyUsersProjectsZonesRequest {
  /** Required. The parent project and region for the signing request. */
  parent: string;
  /** Request body */
  body?: SignSshPublicKeyRequest;
}

export const SignSshPublicKeyUsersProjectsZonesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SignSshPublicKeyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}:signSshPublicKey",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SignSshPublicKeyUsersProjectsZonesRequest>;

export type SignSshPublicKeyUsersProjectsZonesResponse =
  SignSshPublicKeyResponse;
export const SignSshPublicKeyUsersProjectsZonesResponse =
  /*@__PURE__*/ SignSshPublicKeyResponse;

export type SignSshPublicKeyUsersProjectsZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine. */
export const signSshPublicKeyUsersProjectsZones: API.OperationMethod<
  SignSshPublicKeyUsersProjectsZonesRequest,
  SignSshPublicKeyUsersProjectsZonesResponse,
  SignSshPublicKeyUsersProjectsZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SignSshPublicKeyUsersProjectsZonesRequest,
  output: SignSshPublicKeyUsersProjectsZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteUsersSshPublicKeysRequest {
  /** Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. */
  name: string;
}

export const DeleteUsersSshPublicKeysRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteUsersSshPublicKeysRequest>;

export type DeleteUsersSshPublicKeysResponse = Empty;
export const DeleteUsersSshPublicKeysResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsersSshPublicKeysRequest,
  output: DeleteUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateUsersSshPublicKeysRequest {
  /** Required. The unique ID for the user in format `users/{user}`. */
  parent: string;
  /** Request body */
  body?: SshPublicKey;
}

export const CreateUsersSshPublicKeysRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SshPublicKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/sshPublicKeys",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateUsersSshPublicKeysRequest>;

export type CreateUsersSshPublicKeysResponse = SshPublicKey;
export const CreateUsersSshPublicKeysResponse = /*@__PURE__*/ SshPublicKey;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUsersSshPublicKeysRequest,
  output: CreateUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUsersSshPublicKeysRequest {
  /** Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. */
  name: string;
}

export const GetUsersSshPublicKeysRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetUsersSshPublicKeysRequest>;

export type GetUsersSshPublicKeysResponse = SshPublicKey;
export const GetUsersSshPublicKeysResponse = /*@__PURE__*/ SshPublicKey;

export type GetUsersSshPublicKeysError = DefaultErrors | NotFound | Forbidden;

/** Retrieves an SSH public key. */
export const getUsersSshPublicKeys: API.OperationMethod<
  GetUsersSshPublicKeysRequest,
  GetUsersSshPublicKeysResponse,
  GetUsersSshPublicKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUsersSshPublicKeysRequest,
  output: GetUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchUsersSshPublicKeysRequest {
  /** Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`. */
  name: string;
  /** Optional. Mask to control which fields get updated. Updates all if not present. */
  updateMask?: string;
  /** Request body */
  body?: SshPublicKey;
}

export const PatchUsersSshPublicKeysRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SshPublicKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchUsersSshPublicKeysRequest>;

export type PatchUsersSshPublicKeysResponse = SshPublicKey;
export const PatchUsersSshPublicKeysResponse = /*@__PURE__*/ SshPublicKey;

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
> = /*@__PURE__*/ API.make(() => ({
  input: PatchUsersSshPublicKeysRequest,
  output: PatchUsersSshPublicKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
