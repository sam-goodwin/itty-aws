/**
 * Cloudflare ORIGIN-TLS-CLIENT-AUTH API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service origin-tls-client-auth
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class CertificateAlreadyDeleted extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificateAlreadyDeleted>()(
    "CertificateAlreadyDeleted",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "already deleted" } }],
) {}

export class CertificateAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificateAlreadyExists>()(
    "CertificateAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1406, message: { includes: "already exists" } }],
) {}

export class CertificateNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificateNotFound>()("CertificateNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { code: 1552, message: { includes: "certificate not found" } },
    { status: 404 },
  ],
) {}

export class CertificatePendingDeletion extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificatePendingDeletion>()(
    "CertificatePendingDeletion",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1414, message: { includes: "pending deletion" } }],
) {}

export class CertificatePendingDeployment extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificatePendingDeployment>()(
    "CertificatePendingDeployment",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1434, message: { includes: "pending deployment" } }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class HostnameAssociationNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HostnameAssociationNotFound>()(
    "HostnameAssociationNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    {
      code: 1553,
      message: { includes: "setting for this hostname not found" },
    },
    { status: 404 },
  ],
) {}

export class HostnameCertificateIdRequired extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HostnameCertificateIdRequired>()(
    "HostnameCertificateIdRequired",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1404, message: { includes: "Certificate ID required" } }],
) {}

export class HostnameCertificateInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HostnameCertificateInUse>()(
    "HostnameCertificateInUse",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1433, message: { includes: "in use" } }],
) {}

export class HostnameCertificateNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HostnameCertificateNotFound>()(
    "HostnameCertificateNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1552 }, { code: 1551 }, { status: 404 }],
) {}

export class InvalidCertificate extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidCertificate>()("InvalidCertificate", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1408, message: { includes: "Unable to parse certificate" } }],
) {}

export class InvalidCertificateId extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidCertificateId>()("InvalidCertificateId", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1415, message: { includes: "Invalid Certificate ID" } }],
) {}

export class InvalidHostnameConfig extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidHostnameConfig>()("InvalidHostnameConfig", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1415 }],
) {}

export class ZoneClientCertConflict extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneClientCertConflict>()("ZoneClientCertConflict", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 409 }],
) {}

// =============================================================================
// Hostname
// =============================================================================

export interface GetHostnameRequest {
  hostname: string;
  /** Identifier. */
  zoneId: string;
}

export const GetHostnameRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      hostname: Schema.String.pipe(T.HttpPath("hostname")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}",
      }),
    ),
) as unknown as Schema.Schema<GetHostnameRequest>;

export interface GetHostnameResponse {
  /** Identifier. */
  certId?: string | null;
  /** Status of the certificate or the association. */
  certStatus?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** The time when the certificate was updated. */
  certUpdatedAt?: string | null;
  /** The time when the certificate was uploaded. */
  certUploadedOn?: string | null;
  /** The hostname certificate. */
  certificate?: string | null;
  /** The time when the certificate was created. */
  createdAt?: string | null;
  /** Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association. */
  enabled?: boolean | null;
  /** The date when the certificate expires. */
  expiresOn?: string | null;
  /** The hostname on the origin for which the client certificate uploaded will be used. */
  hostname?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The serial number on the uploaded certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate or the association. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** The time when the certificate was updated. */
  updatedAt?: string | null;
}

export const GetHostnameResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      certId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      certUpdatedAt: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      certUploadedOn: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      hostname: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          certId: "cert_id",
          certStatus: "cert_status",
          certUpdatedAt: "cert_updated_at",
          certUploadedOn: "cert_uploaded_on",
          certificate: "certificate",
          createdAt: "created_at",
          enabled: "enabled",
          expiresOn: "expires_on",
          hostname: "hostname",
          issuer: "issuer",
          serialNumber: "serial_number",
          signature: "signature",
          status: "status",
          updatedAt: "updated_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetHostnameResponse>;

export type GetHostnameError =
  | DefaultErrors
  | HostnameAssociationNotFound
  | Forbidden;

export const getHostname: API.OperationMethod<
  GetHostnameRequest,
  GetHostnameResponse,
  GetHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetHostnameRequest,
  output: GetHostnameResponse,
  errors: [HostnameAssociationNotFound, Forbidden],
}));

export interface PutHostnameRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  config: { certId?: string; enabled?: boolean | null; hostname?: string }[];
}

export const PutHostnameRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      config: Schema.Array(
        Schema.Struct({
          certId: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          hostname: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            certId: "cert_id",
            enabled: "enabled",
            hostname: "hostname",
          }),
        ),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/origin_tls_client_auth/hostnames",
      }),
    ),
) as unknown as Schema.Schema<PutHostnameRequest>;

export interface PutHostnameResponse {
  result: {
    certId?: string | null;
    certStatus?:
      | "initializing"
      | "pending_deployment"
      | "pending_deletion"
      | "active"
      | "deleted"
      | "deployment_timed_out"
      | "deletion_timed_out"
      | (string & {})
      | null;
    certUpdatedAt?: string | null;
    certUploadedOn?: string | null;
    certificate?: string | null;
    createdAt?: string | null;
    enabled?: boolean | null;
    expiresOn?: string | null;
    hostname?: string | null;
    issuer?: string | null;
    serialNumber?: string | null;
    signature?: string | null;
    status?:
      | "initializing"
      | "pending_deployment"
      | "pending_deletion"
      | "active"
      | "deleted"
      | "deployment_timed_out"
      | "deletion_timed_out"
      | (string & {})
      | null;
    updatedAt?: string | null;
    id?: string | null;
    privateKey?: string | null;
  }[];
}

export const PutHostnameResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          certId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          certStatus: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "initializing",
                  "pending_deployment",
                  "pending_deletion",
                  "active",
                  "deleted",
                  "deployment_timed_out",
                  "deletion_timed_out",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          certUpdatedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          certUploadedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          certificate: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          hostname: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          serialNumber: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          signature: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "initializing",
                  "pending_deployment",
                  "pending_deletion",
                  "active",
                  "deleted",
                  "deployment_timed_out",
                  "deletion_timed_out",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          updatedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          privateKey: Schema.optional(
            Schema.Union([SensitiveString, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            certId: "cert_id",
            certStatus: "cert_status",
            certUpdatedAt: "cert_updated_at",
            certUploadedOn: "cert_uploaded_on",
            certificate: "certificate",
            createdAt: "created_at",
            enabled: "enabled",
            expiresOn: "expires_on",
            hostname: "hostname",
            issuer: "issuer",
            serialNumber: "serial_number",
            signature: "signature",
            status: "status",
            updatedAt: "updated_at",
            id: "id",
            privateKey: "private_key",
          }),
        ),
      ),
    }),
) as unknown as Schema.Schema<PutHostnameResponse>;

export type PutHostnameError =
  | DefaultErrors
  | HostnameCertificateIdRequired
  | InvalidHostnameConfig
  | Forbidden;

export const putHostname: API.PaginatedOperationMethod<
  PutHostnameRequest,
  PutHostnameResponse,
  PutHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: PutHostnameRequest,
  output: PutHostnameResponse,
  errors: [HostnameCertificateIdRequired, InvalidHostnameConfig, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// HostnameCertificate
// =============================================================================

export interface GetHostnameCertificateRequest {
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetHostnameCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetHostnameCertificateRequest>;

export interface GetHostnameCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The hostname certificate. */
  certificate?: string | null;
  /** The date when the certificate expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The serial number on the uploaded certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate or the association. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** The time when the certificate was uploaded. */
  uploadedOn?: string | null;
}

export const GetHostnameCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          serialNumber: "serial_number",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetHostnameCertificateResponse>;

export type GetHostnameCertificateError =
  | DefaultErrors
  | HostnameCertificateNotFound
  | Forbidden;

export const getHostnameCertificate: API.OperationMethod<
  GetHostnameCertificateRequest,
  GetHostnameCertificateResponse,
  GetHostnameCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetHostnameCertificateRequest,
  output: GetHostnameCertificateResponse,
  errors: [HostnameCertificateNotFound, Forbidden],
}));

export interface ListHostnameCertificatesRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListHostnameCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates",
      }),
    ),
  ) as unknown as Schema.Schema<ListHostnameCertificatesRequest>;

export interface ListHostnameCertificatesResponse {
  result: {
    id?: string | null;
    certificate?: string | null;
    expiresOn?: string | null;
    issuer?: string | null;
    serialNumber?: string | null;
    signature?: string | null;
    status?:
      | "initializing"
      | "pending_deployment"
      | "pending_deletion"
      | "active"
      | "deleted"
      | "deployment_timed_out"
      | "deletion_timed_out"
      | (string & {})
      | null;
    uploadedOn?: string | null;
  }[];
}

export const ListHostnameCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          certificate: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          serialNumber: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          signature: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "initializing",
                  "pending_deployment",
                  "pending_deletion",
                  "active",
                  "deleted",
                  "deployment_timed_out",
                  "deletion_timed_out",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          uploadedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            certificate: "certificate",
            expiresOn: "expires_on",
            issuer: "issuer",
            serialNumber: "serial_number",
            signature: "signature",
            status: "status",
            uploadedOn: "uploaded_on",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ListHostnameCertificatesResponse>;

export type ListHostnameCertificatesError = DefaultErrors | Forbidden;

export const listHostnameCertificates: API.PaginatedOperationMethod<
  ListHostnameCertificatesRequest,
  ListHostnameCertificatesResponse,
  ListHostnameCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListHostnameCertificatesRequest,
  output: ListHostnameCertificatesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateHostnameCertificateRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The hostname certificate. */
  certificate: string;
  /** Body param: The hostname certificate's private key. */
  privateKey: string;
}

export const CreateHostnameCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      certificate: Schema.String,
      privateKey: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        certificate: "certificate",
        privateKey: "private_key",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates",
      }),
    ),
  ) as unknown as Schema.Schema<CreateHostnameCertificateRequest>;

export interface CreateHostnameCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The hostname certificate. */
  certificate?: string | null;
  /** The date when the certificate expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The serial number on the uploaded certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate or the association. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** The time when the certificate was uploaded. */
  uploadedOn?: string | null;
}

export const CreateHostnameCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          serialNumber: "serial_number",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateHostnameCertificateResponse>;

export type CreateHostnameCertificateError =
  | DefaultErrors
  | CertificateAlreadyExists
  | InvalidCertificate
  | Forbidden;

export const createHostnameCertificate: API.OperationMethod<
  CreateHostnameCertificateRequest,
  CreateHostnameCertificateResponse,
  CreateHostnameCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateHostnameCertificateRequest,
  output: CreateHostnameCertificateResponse,
  errors: [CertificateAlreadyExists, InvalidCertificate, Forbidden],
}));

export interface DeleteHostnameCertificateRequest {
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteHostnameCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteHostnameCertificateRequest>;

export interface DeleteHostnameCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The hostname certificate. */
  certificate?: string | null;
  /** The date when the certificate expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The serial number on the uploaded certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate or the association. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** The time when the certificate was uploaded. */
  uploadedOn?: string | null;
}

export const DeleteHostnameCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          serialNumber: "serial_number",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteHostnameCertificateResponse>;

export type DeleteHostnameCertificateError =
  | DefaultErrors
  | HostnameCertificateNotFound
  | HostnameCertificateInUse
  | CertificatePendingDeletion
  | CertificatePendingDeployment
  | InvalidCertificateId
  | Forbidden;

export const deleteHostnameCertificate: API.OperationMethod<
  DeleteHostnameCertificateRequest,
  DeleteHostnameCertificateResponse,
  DeleteHostnameCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteHostnameCertificateRequest,
  output: DeleteHostnameCertificateResponse,
  errors: [
    HostnameCertificateNotFound,
    HostnameCertificateInUse,
    CertificatePendingDeletion,
    CertificatePendingDeployment,
    InvalidCertificateId,
    Forbidden,
  ],
}));

// =============================================================================
// OriginTlsClientAuth
// =============================================================================

export interface GetOriginTlsClientAuthRequest {
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetOriginTlsClientAuthRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetOriginTlsClientAuthRequest>;

export interface GetOriginTlsClientAuthResponse {
  /** Identifier. */
  id?: string | null;
  /** The zone's leaf certificate. */
  certificate?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** This is the time the certificate was uploaded. */
  uploadedOn?: string | null;
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
  /** The zone's private key. */
  privateKey?: string | null;
}

export const GetOriginTlsClientAuthResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      privateKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
          enabled: "enabled",
          privateKey: "private_key",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetOriginTlsClientAuthResponse>;

export type GetOriginTlsClientAuthError =
  | DefaultErrors
  | CertificateNotFound
  | Forbidden;

export const getOriginTlsClientAuth: API.OperationMethod<
  GetOriginTlsClientAuthRequest,
  GetOriginTlsClientAuthResponse,
  GetOriginTlsClientAuthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOriginTlsClientAuthRequest,
  output: GetOriginTlsClientAuthResponse,
  errors: [CertificateNotFound, Forbidden],
}));

export interface ListOriginTlsClientAuthsRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListOriginTlsClientAuthsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth",
      }),
    ),
  ) as unknown as Schema.Schema<ListOriginTlsClientAuthsRequest>;

export interface ListOriginTlsClientAuthsResponse {
  result:
    | {
        id?: string | null;
        certificate?: string | null;
        expiresOn?: string | null;
        issuer?: string | null;
        signature?: string | null;
        status?:
          | "initializing"
          | "pending_deployment"
          | "pending_deletion"
          | "active"
          | "deleted"
          | "deployment_timed_out"
          | "deletion_timed_out"
          | (string & {})
          | null;
        uploadedOn?: string | null;
        enabled?: boolean | null;
        privateKey?: string | null;
      }[]
    | null;
}

export const ListOriginTlsClientAuthsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Union([
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            certificate: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            expiresOn: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            signature: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            status: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "initializing",
                    "pending_deployment",
                    "pending_deletion",
                    "active",
                    "deleted",
                    "deployment_timed_out",
                    "deletion_timed_out",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            uploadedOn: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            privateKey: Schema.optional(
              Schema.Union([SensitiveString, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              certificate: "certificate",
              expiresOn: "expires_on",
              issuer: "issuer",
              signature: "signature",
              status: "status",
              uploadedOn: "uploaded_on",
              enabled: "enabled",
              privateKey: "private_key",
            }),
          ),
        ),
        Schema.Null,
      ]),
    }),
  ) as unknown as Schema.Schema<ListOriginTlsClientAuthsResponse>;

export type ListOriginTlsClientAuthsError = DefaultErrors | Forbidden;

export const listOriginTlsClientAuths: API.PaginatedOperationMethod<
  ListOriginTlsClientAuthsRequest,
  ListOriginTlsClientAuthsResponse,
  ListOriginTlsClientAuthsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOriginTlsClientAuthsRequest,
  output: ListOriginTlsClientAuthsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateOriginTlsClientAuthRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The zone's leaf certificate. */
  certificate: string;
  /** Body param: The zone's private key. */
  privateKey: string;
}

export const CreateOriginTlsClientAuthRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      certificate: Schema.String,
      privateKey: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        certificate: "certificate",
        privateKey: "private_key",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/origin_tls_client_auth",
      }),
    ),
  ) as unknown as Schema.Schema<CreateOriginTlsClientAuthRequest>;

export interface CreateOriginTlsClientAuthResponse {
  /** Identifier. */
  id?: string | null;
  /** The zone's leaf certificate. */
  certificate?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** This is the time the certificate was uploaded. */
  uploadedOn?: string | null;
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
  /** The zone's private key. */
  privateKey?: string | null;
}

export const CreateOriginTlsClientAuthResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      privateKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
          enabled: "enabled",
          privateKey: "private_key",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateOriginTlsClientAuthResponse>;

export type CreateOriginTlsClientAuthError =
  | DefaultErrors
  | CertificateAlreadyExists
  | InvalidCertificate
  | ZoneClientCertConflict
  | Forbidden;

export const createOriginTlsClientAuth: API.OperationMethod<
  CreateOriginTlsClientAuthRequest,
  CreateOriginTlsClientAuthResponse,
  CreateOriginTlsClientAuthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOriginTlsClientAuthRequest,
  output: CreateOriginTlsClientAuthResponse,
  errors: [
    CertificateAlreadyExists,
    InvalidCertificate,
    ZoneClientCertConflict,
    Forbidden,
  ],
}));

export interface DeleteOriginTlsClientAuthRequest {
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteOriginTlsClientAuthRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/origin_tls_client_auth/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteOriginTlsClientAuthRequest>;

export interface DeleteOriginTlsClientAuthResponse {
  /** Identifier. */
  id?: string | null;
  /** The zone's leaf certificate. */
  certificate?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** This is the time the certificate was uploaded. */
  uploadedOn?: string | null;
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
  /** The zone's private key. */
  privateKey?: string | null;
}

export const DeleteOriginTlsClientAuthResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      privateKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
          enabled: "enabled",
          privateKey: "private_key",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteOriginTlsClientAuthResponse>;

export type DeleteOriginTlsClientAuthError =
  | DefaultErrors
  | CertificateNotFound
  | Forbidden
  | CertificateAlreadyDeleted
  | CertificatePendingDeployment
  | ZoneClientCertConflict;

export const deleteOriginTlsClientAuth: API.OperationMethod<
  DeleteOriginTlsClientAuthRequest,
  DeleteOriginTlsClientAuthResponse,
  DeleteOriginTlsClientAuthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOriginTlsClientAuthRequest,
  output: DeleteOriginTlsClientAuthResponse,
  errors: [
    CertificateNotFound,
    Forbidden,
    CertificateAlreadyDeleted,
    CertificatePendingDeployment,
    ZoneClientCertConflict,
  ],
}));

// =============================================================================
// Setting
// =============================================================================

export interface GetSettingRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetSettingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth/settings",
      }),
    ),
) as unknown as Schema.Schema<GetSettingRequest>;

export interface GetSettingResponse {
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
}

export const GetSettingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetSettingResponse>;

export type GetSettingError = DefaultErrors | Forbidden;

export const getSetting: API.OperationMethod<
  GetSettingRequest,
  GetSettingResponse,
  GetSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingRequest,
  output: GetSettingResponse,
  errors: [Forbidden],
}));

export interface PutSettingRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled: boolean;
}

export const PutSettingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      enabled: Schema.Boolean,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/origin_tls_client_auth/settings",
      }),
    ),
) as unknown as Schema.Schema<PutSettingRequest>;

export interface PutSettingResponse {
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
}

export const PutSettingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PutSettingResponse>;

export type PutSettingError = DefaultErrors | Forbidden;

export const putSetting: API.OperationMethod<
  PutSettingRequest,
  PutSettingResponse,
  PutSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutSettingRequest,
  output: PutSettingResponse,
  errors: [Forbidden],
}));

// =============================================================================
// ZoneCertificate
// =============================================================================

export interface GetZoneCertificateRequest {
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetZoneCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetZoneCertificateRequest>;

export interface GetZoneCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The zone's leaf certificate. */
  certificate?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** This is the time the certificate was uploaded. */
  uploadedOn?: string | null;
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
  /** The zone's private key. */
  privateKey?: string | null;
}

export const GetZoneCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      privateKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
          enabled: "enabled",
          privateKey: "private_key",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetZoneCertificateResponse>;

export type GetZoneCertificateError = DefaultErrors;

export const getZoneCertificate: API.OperationMethod<
  GetZoneCertificateRequest,
  GetZoneCertificateResponse,
  GetZoneCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneCertificateRequest,
  output: GetZoneCertificateResponse,
  errors: [],
}));

export interface ListZoneCertificatesRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListZoneCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/origin_tls_client_auth",
      }),
    ),
  ) as unknown as Schema.Schema<ListZoneCertificatesRequest>;

export interface ListZoneCertificatesResponse {
  result: {
    id?: string | null;
    certificate?: string | null;
    expiresOn?: string | null;
    issuer?: string | null;
    signature?: string | null;
    status?:
      | "initializing"
      | "pending_deployment"
      | "pending_deletion"
      | "active"
      | "deleted"
      | "deployment_timed_out"
      | "deletion_timed_out"
      | (string & {})
      | null;
    uploadedOn?: string | null;
    enabled?: boolean | null;
    privateKey?: string | null;
  }[];
}

export const ListZoneCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          certificate: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          signature: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "initializing",
                  "pending_deployment",
                  "pending_deletion",
                  "active",
                  "deleted",
                  "deployment_timed_out",
                  "deletion_timed_out",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          uploadedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          privateKey: Schema.optional(
            Schema.Union([SensitiveString, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            certificate: "certificate",
            expiresOn: "expires_on",
            issuer: "issuer",
            signature: "signature",
            status: "status",
            uploadedOn: "uploaded_on",
            enabled: "enabled",
            privateKey: "private_key",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ListZoneCertificatesResponse>;

export type ListZoneCertificatesError = DefaultErrors;

export const listZoneCertificates: API.PaginatedOperationMethod<
  ListZoneCertificatesRequest,
  ListZoneCertificatesResponse,
  ListZoneCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListZoneCertificatesRequest,
  output: ListZoneCertificatesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateZoneCertificateRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The zone's leaf certificate. */
  certificate: string;
  /** Body param: The zone's private key. */
  privateKey: string;
}

export const CreateZoneCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      certificate: Schema.String,
      privateKey: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        certificate: "certificate",
        privateKey: "private_key",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/origin_tls_client_auth",
      }),
    ),
  ) as unknown as Schema.Schema<CreateZoneCertificateRequest>;

export interface CreateZoneCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The zone's leaf certificate. */
  certificate?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** This is the time the certificate was uploaded. */
  uploadedOn?: string | null;
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
  /** The zone's private key. */
  privateKey?: string | null;
}

export const CreateZoneCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      privateKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
          enabled: "enabled",
          privateKey: "private_key",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateZoneCertificateResponse>;

export type CreateZoneCertificateError = DefaultErrors;

export const createZoneCertificate: API.OperationMethod<
  CreateZoneCertificateRequest,
  CreateZoneCertificateResponse,
  CreateZoneCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneCertificateRequest,
  output: CreateZoneCertificateResponse,
  errors: [],
}));

export interface DeleteZoneCertificateRequest {
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteZoneCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/origin_tls_client_auth/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteZoneCertificateRequest>;

export interface DeleteZoneCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The zone's leaf certificate. */
  certificate?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the certificate activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deleted"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | (string & {})
    | null;
  /** This is the time the certificate was uploaded. */
  uploadedOn?: string | null;
  /** Indicates whether zone-level authenticated origin pulls is enabled. */
  enabled?: boolean | null;
  /** The zone's private key. */
  privateKey?: string | null;
}

export const DeleteZoneCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deleted",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      privateKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
          enabled: "enabled",
          privateKey: "private_key",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteZoneCertificateResponse>;

export type DeleteZoneCertificateError = DefaultErrors;

export const deleteZoneCertificate: API.OperationMethod<
  DeleteZoneCertificateRequest,
  DeleteZoneCertificateResponse,
  DeleteZoneCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteZoneCertificateRequest,
  output: DeleteZoneCertificateResponse,
  errors: [],
}));
