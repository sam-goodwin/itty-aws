/**
 * Cloudflare CLIENT-CERTIFICATES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service client-certificates
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class ClientCertificateAlreadyRevoked extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ClientCertificateAlreadyRevoked>()(
    "ClientCertificateAlreadyRevoked",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1407, message: { includes: "already deleted" } }],
) {}

export class ClientCertificateNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ClientCertificateNotFound>()(
    "ClientCertificateNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    { code: 1415, message: { includes: "Invalid Certificate ID" } },
    { status: 404 },
  ],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

// =============================================================================
// ClientCertificate
// =============================================================================

export interface GetClientCertificateRequest {
  clientCertificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetClientCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      clientCertificateId: Schema.String.pipe(
        T.HttpPath("clientCertificateId"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/client_certificates/{clientCertificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetClientCertificateRequest>;

export interface GetClientCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The Client Certificate PEM. */
  certificate?: string | null;
  /** Certificate Authority used to issue the Client Certificate. */
  certificateAuthority?: { id?: string | null; name?: string | null } | null;
  /** Common Name of the Client Certificate. */
  commonName?: string | null;
  /** Country, provided by the CSR. */
  country?: string | null;
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr?: string | null;
  /** Date that the Client Certificate expires. */
  expiresOn?: string | null;
  /** Unique identifier of the Client Certificate. */
  fingerprintSha256?: string | null;
  /** Date that the Client Certificate was issued by the Certificate Authority. */
  issuedOn?: string | null;
  /** Location, provided by the CSR. */
  location?: string | null;
  /** Organization, provided by the CSR. */
  organization?: string | null;
  /** Organizational Unit, provided by the CSR. */
  organizationalUnit?: string | null;
  /** The serial number on the created Client Certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the Client Certificate.. */
  signature?: string | null;
  /** Subject Key Identifier. */
  ski?: string | null;
  /** State, provided by the CSR. */
  state?: string | null;
  /** Client Certificates may be active or revoked, and the pending_reactivation or pending_revocation represent in-progress asynchronous transitions. */
  status?:
    | "active"
    | "pending_reactivation"
    | "pending_revocation"
    | "revoked"
    | (string & {})
    | null;
  /** The number of days the Client Certificate will be valid after the issued_on date. */
  validityDays?: number | null;
}

export const GetClientCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      commonName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      fingerprintSha256: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organizationalUnit: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ski: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "pending_reactivation",
              "pending_revocation",
              "revoked",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validityDays: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          certificateAuthority: "certificate_authority",
          commonName: "common_name",
          country: "country",
          csr: "csr",
          expiresOn: "expires_on",
          fingerprintSha256: "fingerprint_sha256",
          issuedOn: "issued_on",
          location: "location",
          organization: "organization",
          organizationalUnit: "organizational_unit",
          serialNumber: "serial_number",
          signature: "signature",
          ski: "ski",
          state: "state",
          status: "status",
          validityDays: "validity_days",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetClientCertificateResponse>;

export type GetClientCertificateError =
  | DefaultErrors
  | ClientCertificateNotFound
  | Forbidden;

export const getClientCertificate: API.OperationMethod<
  GetClientCertificateRequest,
  GetClientCertificateResponse,
  GetClientCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetClientCertificateRequest,
  output: GetClientCertificateResponse,
  errors: [ClientCertificateNotFound, Forbidden],
}));

export interface ListClientCertificatesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Limit to the number of records returned. */
  limit?: number;
  /** Query param: Offset the results. */
  offset?: number;
  /** Query param: Client Certitifcate Status to filter results by. */
  status?:
    | "all"
    | "active"
    | "pending_reactivation"
    | "pending_revocation"
    | "revoked"
    | (string & {});
}

export const ListClientCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "all",
            "active",
            "pending_reactivation",
            "pending_revocation",
            "revoked",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/client_certificates" }),
    ),
  ) as unknown as Schema.Schema<ListClientCertificatesRequest>;

export interface ListClientCertificatesResponse {
  result: {
    id?: string | null;
    certificate?: string | null;
    certificateAuthority?: { id?: string | null; name?: string | null } | null;
    commonName?: string | null;
    country?: string | null;
    csr?: string | null;
    expiresOn?: string | null;
    fingerprintSha256?: string | null;
    issuedOn?: string | null;
    location?: string | null;
    organization?: string | null;
    organizationalUnit?: string | null;
    serialNumber?: string | null;
    signature?: string | null;
    ski?: string | null;
    state?: string | null;
    status?:
      | "active"
      | "pending_reactivation"
      | "pending_revocation"
      | "revoked"
      | (string & {})
      | null;
    validityDays?: number | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListClientCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          certificate: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          certificateAuthority: Schema.optional(
            Schema.Union([
              Schema.Struct({
                id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
                name: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          commonName: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          fingerprintSha256: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          organization: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          organizationalUnit: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          serialNumber: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          signature: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          ski: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "active",
                  "pending_reactivation",
                  "pending_revocation",
                  "revoked",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          validityDays: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            certificate: "certificate",
            certificateAuthority: "certificate_authority",
            commonName: "common_name",
            country: "country",
            csr: "csr",
            expiresOn: "expires_on",
            fingerprintSha256: "fingerprint_sha256",
            issuedOn: "issued_on",
            location: "location",
            organization: "organization",
            organizationalUnit: "organizational_unit",
            serialNumber: "serial_number",
            signature: "signature",
            ski: "ski",
            state: "state",
            status: "status",
            validityDays: "validity_days",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListClientCertificatesResponse>;

export type ListClientCertificatesError = DefaultErrors | Forbidden;

export const listClientCertificates: API.PaginatedOperationMethod<
  ListClientCertificatesRequest,
  ListClientCertificatesResponse,
  ListClientCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListClientCertificatesRequest,
  output: ListClientCertificatesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateClientCertificateRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr: string;
  /** Body param: The number of days the Client Certificate will be valid after the issued_on date. */
  validityDays: number;
}

export const CreateClientCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      csr: Schema.String,
      validityDays: Schema.Number,
    }).pipe(
      Schema.encodeKeys({ csr: "csr", validityDays: "validity_days" }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/client_certificates" }),
    ),
  ) as unknown as Schema.Schema<CreateClientCertificateRequest>;

export interface CreateClientCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The Client Certificate PEM. */
  certificate?: string | null;
  /** Certificate Authority used to issue the Client Certificate. */
  certificateAuthority?: { id?: string | null; name?: string | null } | null;
  /** Common Name of the Client Certificate. */
  commonName?: string | null;
  /** Country, provided by the CSR. */
  country?: string | null;
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr?: string | null;
  /** Date that the Client Certificate expires. */
  expiresOn?: string | null;
  /** Unique identifier of the Client Certificate. */
  fingerprintSha256?: string | null;
  /** Date that the Client Certificate was issued by the Certificate Authority. */
  issuedOn?: string | null;
  /** Location, provided by the CSR. */
  location?: string | null;
  /** Organization, provided by the CSR. */
  organization?: string | null;
  /** Organizational Unit, provided by the CSR. */
  organizationalUnit?: string | null;
  /** The serial number on the created Client Certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the Client Certificate.. */
  signature?: string | null;
  /** Subject Key Identifier. */
  ski?: string | null;
  /** State, provided by the CSR. */
  state?: string | null;
  /** Client Certificates may be active or revoked, and the pending_reactivation or pending_revocation represent in-progress asynchronous transitions. */
  status?:
    | "active"
    | "pending_reactivation"
    | "pending_revocation"
    | "revoked"
    | (string & {})
    | null;
  /** The number of days the Client Certificate will be valid after the issued_on date. */
  validityDays?: number | null;
}

export const CreateClientCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      commonName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      fingerprintSha256: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organizationalUnit: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ski: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "pending_reactivation",
              "pending_revocation",
              "revoked",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validityDays: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          certificateAuthority: "certificate_authority",
          commonName: "common_name",
          country: "country",
          csr: "csr",
          expiresOn: "expires_on",
          fingerprintSha256: "fingerprint_sha256",
          issuedOn: "issued_on",
          location: "location",
          organization: "organization",
          organizationalUnit: "organizational_unit",
          serialNumber: "serial_number",
          signature: "signature",
          ski: "ski",
          state: "state",
          status: "status",
          validityDays: "validity_days",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateClientCertificateResponse>;

export type CreateClientCertificateError = DefaultErrors | Forbidden;

export const createClientCertificate: API.OperationMethod<
  CreateClientCertificateRequest,
  CreateClientCertificateResponse,
  CreateClientCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateClientCertificateRequest,
  output: CreateClientCertificateResponse,
  errors: [Forbidden],
}));

export interface PatchClientCertificateRequest {
  clientCertificateId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  reactivate?: boolean;
}

export const PatchClientCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      clientCertificateId: Schema.String.pipe(
        T.HttpPath("clientCertificateId"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      reactivate: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/client_certificates/{clientCertificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchClientCertificateRequest>;

export interface PatchClientCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The Client Certificate PEM. */
  certificate?: string | null;
  /** Certificate Authority used to issue the Client Certificate. */
  certificateAuthority?: { id?: string | null; name?: string | null } | null;
  /** Common Name of the Client Certificate. */
  commonName?: string | null;
  /** Country, provided by the CSR. */
  country?: string | null;
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr?: string | null;
  /** Date that the Client Certificate expires. */
  expiresOn?: string | null;
  /** Unique identifier of the Client Certificate. */
  fingerprintSha256?: string | null;
  /** Date that the Client Certificate was issued by the Certificate Authority. */
  issuedOn?: string | null;
  /** Location, provided by the CSR. */
  location?: string | null;
  /** Organization, provided by the CSR. */
  organization?: string | null;
  /** Organizational Unit, provided by the CSR. */
  organizationalUnit?: string | null;
  /** The serial number on the created Client Certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the Client Certificate.. */
  signature?: string | null;
  /** Subject Key Identifier. */
  ski?: string | null;
  /** State, provided by the CSR. */
  state?: string | null;
  /** Client Certificates may be active or revoked, and the pending_reactivation or pending_revocation represent in-progress asynchronous transitions. */
  status?:
    | "active"
    | "pending_reactivation"
    | "pending_revocation"
    | "revoked"
    | (string & {})
    | null;
  /** The number of days the Client Certificate will be valid after the issued_on date. */
  validityDays?: number | null;
}

export const PatchClientCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      commonName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      fingerprintSha256: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organizationalUnit: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ski: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "pending_reactivation",
              "pending_revocation",
              "revoked",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validityDays: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          certificateAuthority: "certificate_authority",
          commonName: "common_name",
          country: "country",
          csr: "csr",
          expiresOn: "expires_on",
          fingerprintSha256: "fingerprint_sha256",
          issuedOn: "issued_on",
          location: "location",
          organization: "organization",
          organizationalUnit: "organizational_unit",
          serialNumber: "serial_number",
          signature: "signature",
          ski: "ski",
          state: "state",
          status: "status",
          validityDays: "validity_days",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchClientCertificateResponse>;

export type PatchClientCertificateError =
  | DefaultErrors
  | ClientCertificateNotFound
  | Forbidden;

export const patchClientCertificate: API.OperationMethod<
  PatchClientCertificateRequest,
  PatchClientCertificateResponse,
  PatchClientCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchClientCertificateRequest,
  output: PatchClientCertificateResponse,
  errors: [ClientCertificateNotFound, Forbidden],
}));

export interface DeleteClientCertificateRequest {
  clientCertificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteClientCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      clientCertificateId: Schema.String.pipe(
        T.HttpPath("clientCertificateId"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/client_certificates/{clientCertificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteClientCertificateRequest>;

export interface DeleteClientCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** The Client Certificate PEM. */
  certificate?: string | null;
  /** Certificate Authority used to issue the Client Certificate. */
  certificateAuthority?: { id?: string | null; name?: string | null } | null;
  /** Common Name of the Client Certificate. */
  commonName?: string | null;
  /** Country, provided by the CSR. */
  country?: string | null;
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr?: string | null;
  /** Date that the Client Certificate expires. */
  expiresOn?: string | null;
  /** Unique identifier of the Client Certificate. */
  fingerprintSha256?: string | null;
  /** Date that the Client Certificate was issued by the Certificate Authority. */
  issuedOn?: string | null;
  /** Location, provided by the CSR. */
  location?: string | null;
  /** Organization, provided by the CSR. */
  organization?: string | null;
  /** Organizational Unit, provided by the CSR. */
  organizationalUnit?: string | null;
  /** The serial number on the created Client Certificate. */
  serialNumber?: string | null;
  /** The type of hash used for the Client Certificate.. */
  signature?: string | null;
  /** Subject Key Identifier. */
  ski?: string | null;
  /** State, provided by the CSR. */
  state?: string | null;
  /** Client Certificates may be active or revoked, and the pending_reactivation or pending_revocation represent in-progress asynchronous transitions. */
  status?:
    | "active"
    | "pending_reactivation"
    | "pending_revocation"
    | "revoked"
    | (string & {})
    | null;
  /** The number of days the Client Certificate will be valid after the issued_on date. */
  validityDays?: number | null;
}

export const DeleteClientCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      commonName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      fingerprintSha256: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      issuedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      organizationalUnit: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ski: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      state: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "pending_reactivation",
              "pending_revocation",
              "revoked",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      validityDays: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          certificateAuthority: "certificate_authority",
          commonName: "common_name",
          country: "country",
          csr: "csr",
          expiresOn: "expires_on",
          fingerprintSha256: "fingerprint_sha256",
          issuedOn: "issued_on",
          location: "location",
          organization: "organization",
          organizationalUnit: "organizational_unit",
          serialNumber: "serial_number",
          signature: "signature",
          ski: "ski",
          state: "state",
          status: "status",
          validityDays: "validity_days",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteClientCertificateResponse>;

export type DeleteClientCertificateError =
  | DefaultErrors
  | ClientCertificateNotFound
  | ClientCertificateAlreadyRevoked
  | Forbidden;

export const deleteClientCertificate: API.OperationMethod<
  DeleteClientCertificateRequest,
  DeleteClientCertificateResponse,
  DeleteClientCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteClientCertificateRequest,
  output: DeleteClientCertificateResponse,
  errors: [
    ClientCertificateNotFound,
    ClientCertificateAlreadyRevoked,
    Forbidden,
  ],
}));
