/**
 * Cloudflare CUSTOM-CERTIFICATES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service custom-certificates
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

export class CustomCertificateNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomCertificateNotFound>()(
    "CustomCertificateNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    { status: 404 },
    { code: 1002, message: { includes: "Invalid certificate" } },
  ],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class PlanLevelNotAllowed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PlanLevelNotAllowed>()("PlanLevelNotAllowed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1011 }],
) {}

export class ZoneNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneNotFound>()("ZoneNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 400, message: { includes: "Cannot find a valid zone" } }],
) {}

// =============================================================================
// CustomCertificate
// =============================================================================

export interface GetCustomCertificateRequest {
  customCertificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetCustomCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customCertificateId: Schema.String.pipe(
        T.HttpPath("customCertificateId"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/custom_certificates/{customCertificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetCustomCertificateRequest>;

export interface GetCustomCertificateResponse {
  /** Identifier. */
  id: string;
  /** Identifier. */
  zoneId: string;
  /** A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
  /** The identifier for the Custom CSR that was used. */
  customCsrId?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency whil */
  geoRestrictions?: {
    label?: "us" | "eu" | "highest_security" | (string & {}) | null;
  } | null;
  hosts?: string[] | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  keylessServer?: {
    id: string;
    createdOn: string;
    enabled: boolean;
    host: string;
    modifiedOn: string;
    name: string;
    permissions: string[];
    port: number;
    status: "active" | "deleted" | (string & {});
    tunnel?: { privateIp: string; vnetId: string } | null;
  } | null;
  /** When the certificate was last modified. */
  modifiedOn?: string | null;
  /** The policy restrictions returned by the API. This field is returned in responses when a policy has been set. The API accepts the "policy" field in requests but returns this field as "policy_restrictio */
  policyRestrictions?: string | null;
  /** The order/priority in which the certificate will be used in a request. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always */
  priority?: number | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the zone's custom SSL. */
  status?:
    | "active"
    | "expired"
    | "deleted"
    | "pending"
    | "initializing"
    | (string & {})
    | null;
  /** When the certificate was uploaded to Cloudflare. */
  uploadedOn?: string | null;
}

export const GetCustomCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      zoneId: Schema.String,
      bundleMethod: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["ubiquitous", "optimal", "force"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      customCsrId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      geoRestrictions: Schema.optional(
        Schema.Union([
          Schema.Struct({
            label: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["us", "eu", "highest_security"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      hosts: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      keylessServer: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            createdOn: Schema.String,
            enabled: Schema.Boolean,
            host: Schema.String,
            modifiedOn: Schema.String,
            name: Schema.String,
            permissions: Schema.Array(Schema.String),
            port: Schema.Number,
            status: Schema.Union([
              Schema.Literals(["active", "deleted"]),
              Schema.String,
            ]),
            tunnel: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  privateIp: Schema.String,
                  vnetId: Schema.String,
                }).pipe(
                  Schema.encodeKeys({
                    privateIp: "private_ip",
                    vnetId: "vnet_id",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              createdOn: "created_on",
              enabled: "enabled",
              host: "host",
              modifiedOn: "modified_on",
              name: "name",
              permissions: "permissions",
              port: "port",
              status: "status",
              tunnel: "tunnel",
            }),
          ),
          Schema.Null,
        ]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      policyRestrictions: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "expired",
              "deleted",
              "pending",
              "initializing",
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
          zoneId: "zone_id",
          bundleMethod: "bundle_method",
          customCsrId: "custom_csr_id",
          expiresOn: "expires_on",
          geoRestrictions: "geo_restrictions",
          hosts: "hosts",
          issuer: "issuer",
          keylessServer: "keyless_server",
          modifiedOn: "modified_on",
          policyRestrictions: "policy_restrictions",
          priority: "priority",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetCustomCertificateResponse>;

export type GetCustomCertificateError =
  | DefaultErrors
  | CustomCertificateNotFound
  | PlanLevelNotAllowed
  | Forbidden;

export const getCustomCertificate: API.OperationMethod<
  GetCustomCertificateRequest,
  GetCustomCertificateResponse,
  GetCustomCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomCertificateRequest,
  output: GetCustomCertificateResponse,
  errors: [CustomCertificateNotFound, PlanLevelNotAllowed, Forbidden],
}));

export interface ListCustomCertificatesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Whether to match all search requirements or at least one (any). */
  match?: "any" | "all" | (string & {});
  /** Query param: Status of the zone's custom SSL. */
  status?:
    | "active"
    | "expired"
    | "deleted"
    | "pending"
    | "initializing"
    | (string & {});
}

export const ListCustomCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "active",
            "expired",
            "deleted",
            "pending",
            "initializing",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/custom_certificates" }),
    ),
  ) as unknown as Schema.Schema<ListCustomCertificatesRequest>;

export interface ListCustomCertificatesResponse {
  result: {
    id: string;
    zoneId: string;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    customCsrId?: string | null;
    expiresOn?: string | null;
    geoRestrictions?: {
      label?: "us" | "eu" | "highest_security" | (string & {}) | null;
    } | null;
    hosts?: string[] | null;
    issuer?: string | null;
    keylessServer?: {
      id: string;
      createdOn: string;
      enabled: boolean;
      host: string;
      modifiedOn: string;
      name: string;
      permissions: string[];
      port: number;
      status: "active" | "deleted" | (string & {});
      tunnel?: { privateIp: string; vnetId: string } | null;
    } | null;
    modifiedOn?: string | null;
    policyRestrictions?: string | null;
    priority?: number | null;
    signature?: string | null;
    status?:
      | "active"
      | "expired"
      | "deleted"
      | "pending"
      | "initializing"
      | (string & {})
      | null;
    uploadedOn?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListCustomCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          zoneId: Schema.String,
          bundleMethod: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["ubiquitous", "optimal", "force"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          customCsrId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          geoRestrictions: Schema.optional(
            Schema.Union([
              Schema.Struct({
                label: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["us", "eu", "highest_security"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          hosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          keylessServer: Schema.optional(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                createdOn: Schema.String,
                enabled: Schema.Boolean,
                host: Schema.String,
                modifiedOn: Schema.String,
                name: Schema.String,
                permissions: Schema.Array(Schema.String),
                port: Schema.Number,
                status: Schema.Union([
                  Schema.Literals(["active", "deleted"]),
                  Schema.String,
                ]),
                tunnel: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      privateIp: Schema.String,
                      vnetId: Schema.String,
                    }).pipe(
                      Schema.encodeKeys({
                        privateIp: "private_ip",
                        vnetId: "vnet_id",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  id: "id",
                  createdOn: "created_on",
                  enabled: "enabled",
                  host: "host",
                  modifiedOn: "modified_on",
                  name: "name",
                  permissions: "permissions",
                  port: "port",
                  status: "status",
                  tunnel: "tunnel",
                }),
              ),
              Schema.Null,
            ]),
          ),
          modifiedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          policyRestrictions: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          signature: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "active",
                  "expired",
                  "deleted",
                  "pending",
                  "initializing",
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
            zoneId: "zone_id",
            bundleMethod: "bundle_method",
            customCsrId: "custom_csr_id",
            expiresOn: "expires_on",
            geoRestrictions: "geo_restrictions",
            hosts: "hosts",
            issuer: "issuer",
            keylessServer: "keyless_server",
            modifiedOn: "modified_on",
            policyRestrictions: "policy_restrictions",
            priority: "priority",
            signature: "signature",
            status: "status",
            uploadedOn: "uploaded_on",
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
  ) as unknown as Schema.Schema<ListCustomCertificatesResponse>;

export type ListCustomCertificatesError =
  | DefaultErrors
  | PlanLevelNotAllowed
  | ZoneNotFound
  | Forbidden;

export const listCustomCertificates: API.PaginatedOperationMethod<
  ListCustomCertificatesRequest,
  ListCustomCertificatesResponse,
  ListCustomCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomCertificatesRequest,
  output: ListCustomCertificatesResponse,
  errors: [PlanLevelNotAllowed, ZoneNotFound, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateCustomCertificateRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The zone's SSL certificate or certificate and the intermediate(s). */
  certificate: string;
  /** Body param: A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest i */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {});
  /** Body param: The identifier for the Custom CSR that was used. */
  customCsrId?: string;
  /** Body param: The environment to deploy the certificate to, defaults to production. */
  deploy?: "staging" | "production" | (string & {});
  /** Body param: Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some  */
  geoRestrictions?: {
    label?: "us" | "eu" | "highest_security" | (string & {});
  };
  /** Body param: Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some  */
  policy?: string;
  /** Body param: The zone's private key. Not required if custom_csr_id is provided, in which case the private key is retrieved from the CSR record held by Cloudflare. */
  privateKey?: string;
  /** Body param: The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. */
  type?: "legacy_custom" | "sni_custom" | (string & {});
}

export const CreateCustomCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      certificate: Schema.String,
      bundleMethod: Schema.optional(
        Schema.Union([
          Schema.Literals(["ubiquitous", "optimal", "force"]),
          Schema.String,
        ]),
      ),
      customCsrId: Schema.optional(Schema.String),
      deploy: Schema.optional(
        Schema.Union([
          Schema.Literals(["staging", "production"]),
          Schema.String,
        ]),
      ),
      geoRestrictions: Schema.optional(
        Schema.Struct({
          label: Schema.optional(
            Schema.Union([
              Schema.Literals(["us", "eu", "highest_security"]),
              Schema.String,
            ]),
          ),
        }),
      ),
      policy: Schema.optional(Schema.String),
      privateKey: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals(["legacy_custom", "sni_custom"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        certificate: "certificate",
        bundleMethod: "bundle_method",
        customCsrId: "custom_csr_id",
        deploy: "deploy",
        geoRestrictions: "geo_restrictions",
        policy: "policy",
        privateKey: "private_key",
        type: "type",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/custom_certificates" }),
    ),
  ) as unknown as Schema.Schema<CreateCustomCertificateRequest>;

export interface CreateCustomCertificateResponse {
  /** Identifier. */
  id: string;
  /** Identifier. */
  zoneId: string;
  /** A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
  /** The identifier for the Custom CSR that was used. */
  customCsrId?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency whil */
  geoRestrictions?: {
    label?: "us" | "eu" | "highest_security" | (string & {}) | null;
  } | null;
  hosts?: string[] | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  keylessServer?: {
    id: string;
    createdOn: string;
    enabled: boolean;
    host: string;
    modifiedOn: string;
    name: string;
    permissions: string[];
    port: number;
    status: "active" | "deleted" | (string & {});
    tunnel?: { privateIp: string; vnetId: string } | null;
  } | null;
  /** When the certificate was last modified. */
  modifiedOn?: string | null;
  /** The policy restrictions returned by the API. This field is returned in responses when a policy has been set. The API accepts the "policy" field in requests but returns this field as "policy_restrictio */
  policyRestrictions?: string | null;
  /** The order/priority in which the certificate will be used in a request. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always */
  priority?: number | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the zone's custom SSL. */
  status?:
    | "active"
    | "expired"
    | "deleted"
    | "pending"
    | "initializing"
    | (string & {})
    | null;
  /** When the certificate was uploaded to Cloudflare. */
  uploadedOn?: string | null;
}

export const CreateCustomCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      zoneId: Schema.String,
      bundleMethod: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["ubiquitous", "optimal", "force"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      customCsrId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      geoRestrictions: Schema.optional(
        Schema.Union([
          Schema.Struct({
            label: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["us", "eu", "highest_security"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      hosts: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      keylessServer: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            createdOn: Schema.String,
            enabled: Schema.Boolean,
            host: Schema.String,
            modifiedOn: Schema.String,
            name: Schema.String,
            permissions: Schema.Array(Schema.String),
            port: Schema.Number,
            status: Schema.Union([
              Schema.Literals(["active", "deleted"]),
              Schema.String,
            ]),
            tunnel: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  privateIp: Schema.String,
                  vnetId: Schema.String,
                }).pipe(
                  Schema.encodeKeys({
                    privateIp: "private_ip",
                    vnetId: "vnet_id",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              createdOn: "created_on",
              enabled: "enabled",
              host: "host",
              modifiedOn: "modified_on",
              name: "name",
              permissions: "permissions",
              port: "port",
              status: "status",
              tunnel: "tunnel",
            }),
          ),
          Schema.Null,
        ]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      policyRestrictions: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "expired",
              "deleted",
              "pending",
              "initializing",
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
          zoneId: "zone_id",
          bundleMethod: "bundle_method",
          customCsrId: "custom_csr_id",
          expiresOn: "expires_on",
          geoRestrictions: "geo_restrictions",
          hosts: "hosts",
          issuer: "issuer",
          keylessServer: "keyless_server",
          modifiedOn: "modified_on",
          policyRestrictions: "policy_restrictions",
          priority: "priority",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateCustomCertificateResponse>;

export type CreateCustomCertificateError =
  | DefaultErrors
  | PlanLevelNotAllowed
  | Forbidden;

export const createCustomCertificate: API.OperationMethod<
  CreateCustomCertificateRequest,
  CreateCustomCertificateResponse,
  CreateCustomCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomCertificateRequest,
  output: CreateCustomCertificateResponse,
  errors: [PlanLevelNotAllowed, Forbidden],
}));

export interface PatchCustomCertificateRequest {
  customCertificateId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest i */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {});
  /** Body param: The zone's SSL certificate or certificate and the intermediate(s). */
  certificate?: string;
  /** Body param: The identifier for the Custom CSR that was used. */
  customCsrId?: string;
  /** Body param: The environment to deploy the certificate to, defaults to production. */
  deploy?: "staging" | "production" | (string & {});
  /** Body param: Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some  */
  geoRestrictions?: {
    label?: "us" | "eu" | "highest_security" | (string & {});
  };
  /** Body param: Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some  */
  policy?: string;
  /** Body param: The zone's private key. Not required if custom_csr_id is provided, in which case the private key is retrieved from the CSR record held by Cloudflare. */
  privateKey?: string;
}

export const PatchCustomCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customCertificateId: Schema.String.pipe(
        T.HttpPath("customCertificateId"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      bundleMethod: Schema.optional(
        Schema.Union([
          Schema.Literals(["ubiquitous", "optimal", "force"]),
          Schema.String,
        ]),
      ),
      certificate: Schema.optional(Schema.String),
      customCsrId: Schema.optional(Schema.String),
      deploy: Schema.optional(
        Schema.Union([
          Schema.Literals(["staging", "production"]),
          Schema.String,
        ]),
      ),
      geoRestrictions: Schema.optional(
        Schema.Struct({
          label: Schema.optional(
            Schema.Union([
              Schema.Literals(["us", "eu", "highest_security"]),
              Schema.String,
            ]),
          ),
        }),
      ),
      policy: Schema.optional(Schema.String),
      privateKey: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        bundleMethod: "bundle_method",
        certificate: "certificate",
        customCsrId: "custom_csr_id",
        deploy: "deploy",
        geoRestrictions: "geo_restrictions",
        policy: "policy",
        privateKey: "private_key",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/custom_certificates/{customCertificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchCustomCertificateRequest>;

export interface PatchCustomCertificateResponse {
  /** Identifier. */
  id: string;
  /** Identifier. */
  zoneId: string;
  /** A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
  /** The identifier for the Custom CSR that was used. */
  customCsrId?: string | null;
  /** When the certificate from the authority expires. */
  expiresOn?: string | null;
  /** Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency whil */
  geoRestrictions?: {
    label?: "us" | "eu" | "highest_security" | (string & {}) | null;
  } | null;
  hosts?: string[] | null;
  /** The certificate authority that issued the certificate. */
  issuer?: string | null;
  keylessServer?: {
    id: string;
    createdOn: string;
    enabled: boolean;
    host: string;
    modifiedOn: string;
    name: string;
    permissions: string[];
    port: number;
    status: "active" | "deleted" | (string & {});
    tunnel?: { privateIp: string; vnetId: string } | null;
  } | null;
  /** When the certificate was last modified. */
  modifiedOn?: string | null;
  /** The policy restrictions returned by the API. This field is returned in responses when a policy has been set. The API accepts the "policy" field in requests but returns this field as "policy_restrictio */
  policyRestrictions?: string | null;
  /** The order/priority in which the certificate will be used in a request. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always */
  priority?: number | null;
  /** The type of hash used for the certificate. */
  signature?: string | null;
  /** Status of the zone's custom SSL. */
  status?:
    | "active"
    | "expired"
    | "deleted"
    | "pending"
    | "initializing"
    | (string & {})
    | null;
  /** When the certificate was uploaded to Cloudflare. */
  uploadedOn?: string | null;
}

export const PatchCustomCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      zoneId: Schema.String,
      bundleMethod: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["ubiquitous", "optimal", "force"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      customCsrId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      geoRestrictions: Schema.optional(
        Schema.Union([
          Schema.Struct({
            label: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["us", "eu", "highest_security"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      hosts: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      keylessServer: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.String,
            createdOn: Schema.String,
            enabled: Schema.Boolean,
            host: Schema.String,
            modifiedOn: Schema.String,
            name: Schema.String,
            permissions: Schema.Array(Schema.String),
            port: Schema.Number,
            status: Schema.Union([
              Schema.Literals(["active", "deleted"]),
              Schema.String,
            ]),
            tunnel: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  privateIp: Schema.String,
                  vnetId: Schema.String,
                }).pipe(
                  Schema.encodeKeys({
                    privateIp: "private_ip",
                    vnetId: "vnet_id",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              createdOn: "created_on",
              enabled: "enabled",
              host: "host",
              modifiedOn: "modified_on",
              name: "name",
              permissions: "permissions",
              port: "port",
              status: "status",
              tunnel: "tunnel",
            }),
          ),
          Schema.Null,
        ]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      policyRestrictions: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "expired",
              "deleted",
              "pending",
              "initializing",
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
          zoneId: "zone_id",
          bundleMethod: "bundle_method",
          customCsrId: "custom_csr_id",
          expiresOn: "expires_on",
          geoRestrictions: "geo_restrictions",
          hosts: "hosts",
          issuer: "issuer",
          keylessServer: "keyless_server",
          modifiedOn: "modified_on",
          policyRestrictions: "policy_restrictions",
          priority: "priority",
          signature: "signature",
          status: "status",
          uploadedOn: "uploaded_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchCustomCertificateResponse>;

export type PatchCustomCertificateError =
  | DefaultErrors
  | CustomCertificateNotFound
  | PlanLevelNotAllowed
  | Forbidden;

export const patchCustomCertificate: API.OperationMethod<
  PatchCustomCertificateRequest,
  PatchCustomCertificateResponse,
  PatchCustomCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomCertificateRequest,
  output: PatchCustomCertificateResponse,
  errors: [CustomCertificateNotFound, PlanLevelNotAllowed, Forbidden],
}));

export interface DeleteCustomCertificateRequest {
  customCertificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteCustomCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customCertificateId: Schema.String.pipe(
        T.HttpPath("customCertificateId"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/custom_certificates/{customCertificateId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteCustomCertificateRequest>;

export interface DeleteCustomCertificateResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteCustomCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteCustomCertificateResponse>;

export type DeleteCustomCertificateError =
  | DefaultErrors
  | CustomCertificateNotFound
  | PlanLevelNotAllowed
  | Forbidden;

export const deleteCustomCertificate: API.OperationMethod<
  DeleteCustomCertificateRequest,
  DeleteCustomCertificateResponse,
  DeleteCustomCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomCertificateRequest,
  output: DeleteCustomCertificateResponse,
  errors: [CustomCertificateNotFound, PlanLevelNotAllowed, Forbidden],
}));

// =============================================================================
// Prioritize
// =============================================================================

export interface PutPrioritizeRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Array of ordered certificates. */
  certificates: { id?: string; priority?: number }[];
}

export const PutPrioritizeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      certificates: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          priority: Schema.optional(Schema.Number),
        }),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/custom_certificates/prioritize",
      }),
    ),
) as unknown as Schema.Schema<PutPrioritizeRequest>;

export interface PutPrioritizeResponse {
  result: {
    id: string;
    zoneId: string;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    customCsrId?: string | null;
    expiresOn?: string | null;
    geoRestrictions?: {
      label?: "us" | "eu" | "highest_security" | (string & {}) | null;
    } | null;
    hosts?: string[] | null;
    issuer?: string | null;
    keylessServer?: {
      id: string;
      createdOn: string;
      enabled: boolean;
      host: string;
      modifiedOn: string;
      name: string;
      permissions: string[];
      port: number;
      status: "active" | "deleted" | (string & {});
      tunnel?: { privateIp: string; vnetId: string } | null;
    } | null;
    modifiedOn?: string | null;
    policyRestrictions?: string | null;
    priority?: number | null;
    signature?: string | null;
    status?:
      | "active"
      | "expired"
      | "deleted"
      | "pending"
      | "initializing"
      | (string & {})
      | null;
    uploadedOn?: string | null;
  }[];
}

export const PutPrioritizeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          zoneId: Schema.String,
          bundleMethod: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["ubiquitous", "optimal", "force"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          customCsrId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          geoRestrictions: Schema.optional(
            Schema.Union([
              Schema.Struct({
                label: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["us", "eu", "highest_security"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          hosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          keylessServer: Schema.optional(
            Schema.Union([
              Schema.Struct({
                id: Schema.String,
                createdOn: Schema.String,
                enabled: Schema.Boolean,
                host: Schema.String,
                modifiedOn: Schema.String,
                name: Schema.String,
                permissions: Schema.Array(Schema.String),
                port: Schema.Number,
                status: Schema.Union([
                  Schema.Literals(["active", "deleted"]),
                  Schema.String,
                ]),
                tunnel: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      privateIp: Schema.String,
                      vnetId: Schema.String,
                    }).pipe(
                      Schema.encodeKeys({
                        privateIp: "private_ip",
                        vnetId: "vnet_id",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  id: "id",
                  createdOn: "created_on",
                  enabled: "enabled",
                  host: "host",
                  modifiedOn: "modified_on",
                  name: "name",
                  permissions: "permissions",
                  port: "port",
                  status: "status",
                  tunnel: "tunnel",
                }),
              ),
              Schema.Null,
            ]),
          ),
          modifiedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          policyRestrictions: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          signature: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "active",
                  "expired",
                  "deleted",
                  "pending",
                  "initializing",
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
            zoneId: "zone_id",
            bundleMethod: "bundle_method",
            customCsrId: "custom_csr_id",
            expiresOn: "expires_on",
            geoRestrictions: "geo_restrictions",
            hosts: "hosts",
            issuer: "issuer",
            keylessServer: "keyless_server",
            modifiedOn: "modified_on",
            policyRestrictions: "policy_restrictions",
            priority: "priority",
            signature: "signature",
            status: "status",
            uploadedOn: "uploaded_on",
          }),
        ),
      ),
    }),
) as unknown as Schema.Schema<PutPrioritizeResponse>;

export type PutPrioritizeError =
  | DefaultErrors
  | PlanLevelNotAllowed
  | Forbidden;

export const putPrioritize: API.PaginatedOperationMethod<
  PutPrioritizeRequest,
  PutPrioritizeResponse,
  PutPrioritizeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: PutPrioritizeRequest,
  output: PutPrioritizeResponse,
  errors: [PlanLevelNotAllowed, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));
