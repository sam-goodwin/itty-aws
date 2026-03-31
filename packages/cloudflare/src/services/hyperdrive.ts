/**
 * Cloudflare HYPERDRIVE API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service hyperdrive
 */

import * as stream from "effect/Stream";
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

export class HyperdriveConfigNotFound extends Schema.TaggedErrorClass<HyperdriveConfigNotFound>()(
  "HyperdriveConfigNotFound",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(HyperdriveConfigNotFound, [{ code: 2006 }]);

export class InvalidHyperdriveConfig extends Schema.TaggedErrorClass<InvalidHyperdriveConfig>()(
  "InvalidHyperdriveConfig",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(InvalidHyperdriveConfig, [{ code: 2007 }]);

export class InvalidObjectIdentifier extends Schema.TaggedErrorClass<InvalidObjectIdentifier>()(
  "InvalidObjectIdentifier",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(InvalidObjectIdentifier, [{ code: 7003 }]);

export class MethodNotAllowed extends Schema.TaggedErrorClass<MethodNotAllowed>()(
  "MethodNotAllowed",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(MethodNotAllowed, [
  { code: 10000, message: { includes: "method not allowed" } },
  { code: 10405, message: { includes: "Method not allowed" } },
]);

export class PrivateHostNotAllowed extends Schema.TaggedErrorClass<PrivateHostNotAllowed>()(
  "PrivateHostNotAllowed",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(PrivateHostNotAllowed, [{ code: 2009 }]);

// =============================================================================
// Shared Types
// =============================================================================

export interface AccessProtectedDatabaseBehindCloudflareTunnel {
  accessClientId: string;
  accessClientSecret: string;
  database: string;
  host: string;
  password: string;
  scheme: "postgres" | "postgresql" | "mysql";
  user: string;
}

export const AccessProtectedDatabaseBehindCloudflareTunnel: Schema.Schema<AccessProtectedDatabaseBehindCloudflareTunnel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accessClientId: Schema.String,
      accessClientSecret: SensitiveString,
      database: Schema.String,
      host: Schema.String,
      password: SensitiveString,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        accessClientId: "access_client_id",
        accessClientSecret: "access_client_secret",
        database: "database",
        host: "host",
        password: "password",
        scheme: "scheme",
        user: "user",
      }),
    ),
  ) as unknown as Schema.Schema<AccessProtectedDatabaseBehindCloudflareTunnel>;

export interface Hyperdrive {
  id: string;
  name: string;
  origin:
    | {
        database: string;
        host: string;
        port: number;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      }
    | {
        accessClientId: string;
        database: string;
        host: string;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      };
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled
    | null;
  createdOn?: string | null;
  modifiedOn?: string | null;
  mtls?: Mtls | null;
  originConnectionLimit?: number | null;
}

export const Hyperdrive: Schema.Schema<Hyperdrive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      origin: Schema.Union([
        Schema.Struct({
          database: Schema.String,
          host: Schema.String,
          port: Schema.Number,
          scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
          user: Schema.String,
        }),
        Schema.Struct({
          accessClientId: Schema.String,
          database: Schema.String,
          host: Schema.String,
          scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
          user: Schema.String,
        }).pipe(
          Schema.encodeKeys({
            accessClientId: "access_client_id",
            database: "database",
            host: "host",
            scheme: "scheme",
            user: "user",
          }),
        ),
      ]),
      caching: Schema.optional(
        Schema.Union([
          Schema.Union([
            HyperdriveHyperdriveCachingCommon,
            HyperdriveHyperdriveCachingEnabled,
          ]),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      mtls: Schema.optional(Schema.Union([Mtls, Schema.Null])),
      originConnectionLimit: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        name: "name",
        origin: "origin",
        caching: "caching",
        createdOn: "created_on",
        modifiedOn: "modified_on",
        mtls: "mtls",
        originConnectionLimit: "origin_connection_limit",
      }),
    ),
  ) as unknown as Schema.Schema<Hyperdrive>;

export interface HyperdriveHyperdriveCachingCommon {
  disabled?: boolean | null;
}

export const HyperdriveHyperdriveCachingCommon: Schema.Schema<HyperdriveHyperdriveCachingCommon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<HyperdriveHyperdriveCachingCommon>;

export interface HyperdriveHyperdriveCachingEnabled {
  disabled?: boolean | null;
  maxAge?: number | null;
  staleWhileRevalidate?: number | null;
}

export const HyperdriveHyperdriveCachingEnabled: Schema.Schema<HyperdriveHyperdriveCachingEnabled> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      maxAge: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      staleWhileRevalidate: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        disabled: "disabled",
        maxAge: "max_age",
        staleWhileRevalidate: "stale_while_revalidate",
      }),
    ),
  ) as unknown as Schema.Schema<HyperdriveHyperdriveCachingEnabled>;

export interface Mtls {
  caCertificateId?: string | null;
  mtlsCertificateId?: string | null;
  sslmode?: string | null;
}

export const Mtls: Schema.Schema<Mtls> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      caCertificateId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      mtlsCertificateId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      sslmode: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        caCertificateId: "ca_certificate_id",
        mtlsCertificateId: "mtls_certificate_id",
        sslmode: "sslmode",
      }),
    ),
  ) as unknown as Schema.Schema<Mtls>;

export interface PublicDatabase {
  database: string;
  host: string;
  password: string;
  port: number;
  scheme: "postgres" | "postgresql" | "mysql";
  user: string;
}

export const PublicDatabase: Schema.Schema<PublicDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      database: Schema.String,
      host: Schema.String,
      password: SensitiveString,
      port: Schema.Number,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }),
  ) as unknown as Schema.Schema<PublicDatabase>;

// =============================================================================
// Config
// =============================================================================

export interface GetConfigRequest {
  hyperdriveId: string;
  /** Define configurations using a unique string identifier. */
  accountId: string;
}

export const GetConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hyperdriveId: Schema.String.pipe(T.HttpPath("hyperdriveId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/hyperdrive/configs/{hyperdriveId}",
  }),
) as unknown as Schema.Schema<GetConfigRequest>;

export interface GetConfigResponse {
  /** Define configurations using a unique string identifier. */
  id: string;
  /** The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name: string;
  origin:
    | {
        database: string;
        host: string;
        port: number;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      }
    | {
        accessClientId: string;
        database: string;
        host: string;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      };
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled
    | null;
  /** Defines the creation time of the Hyperdrive configuration. */
  createdOn?: string | null;
  /** Defines the last modified time of the Hyperdrive configuration. */
  modifiedOn?: string | null;
  mtls?: Mtls | null;
  /** The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number | null;
}

export const GetConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  origin: Schema.Union([
    Schema.Struct({
      database: Schema.String,
      host: Schema.String,
      port: Schema.Number,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }),
    Schema.Struct({
      accessClientId: Schema.String,
      database: Schema.String,
      host: Schema.String,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        accessClientId: "access_client_id",
        database: "database",
        host: "host",
        scheme: "scheme",
        user: "user",
      }),
    ),
  ]),
  caching: Schema.optional(
    Schema.Union([
      Schema.Union([
        HyperdriveHyperdriveCachingCommon,
        HyperdriveHyperdriveCachingEnabled,
      ]),
      Schema.Null,
    ]),
  ),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  mtls: Schema.optional(Schema.Union([Mtls, Schema.Null])),
  originConnectionLimit: Schema.optional(
    Schema.Union([Schema.Number, Schema.Null]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      origin: "origin",
      caching: "caching",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      mtls: "mtls",
      originConnectionLimit: "origin_connection_limit",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetConfigResponse>;

export type GetConfigError =
  | DefaultErrors
  | PrivateHostNotAllowed
  | HyperdriveConfigNotFound
  | InvalidObjectIdentifier;

export const getConfig: API.OperationMethod<
  GetConfigRequest,
  GetConfigResponse,
  GetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigRequest,
  output: GetConfigResponse,
  errors: [
    PrivateHostNotAllowed,
    HyperdriveConfigNotFound,
    InvalidObjectIdentifier,
  ],
}));

export interface ListConfigsRequest {
  /** Define configurations using a unique string identifier. */
  accountId: string;
}

export const ListConfigsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/hyperdrive/configs" }),
) as unknown as Schema.Schema<ListConfigsRequest>;

export interface ListConfigsResponse {
  result: Hyperdrive[];
}

export const ListConfigsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(Hyperdrive),
}) as unknown as Schema.Schema<ListConfigsResponse>;

export type ListConfigsError =
  | DefaultErrors
  | PrivateHostNotAllowed
  | InvalidObjectIdentifier;

export const listConfigs: API.PaginatedOperationMethod<
  ListConfigsRequest,
  ListConfigsResponse,
  ListConfigsError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListConfigsRequest,
  ) => stream.Stream<
    ListConfigsResponse,
    ListConfigsError,
    Credentials | HttpClient.HttpClient
  >;
  items: (
    input: ListConfigsRequest,
  ) => stream.Stream<
    Hyperdrive,
    ListConfigsError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListConfigsRequest,
  output: ListConfigsResponse,
  errors: [PrivateHostNotAllowed, InvalidObjectIdentifier],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateConfigRequest {
  /** Path param: Define configurations using a unique string identifier. */
  accountId: string;
  /** Body param: The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name: string;
  /** Body param: */
  origin: PublicDatabase | AccessProtectedDatabaseBehindCloudflareTunnel;
  /** Body param: */
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled;
  /** Body param: */
  mtls?: Mtls;
  /** Body param: The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number;
}

export const CreateConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  name: Schema.String,
  origin: Schema.Union([
    PublicDatabase,
    AccessProtectedDatabaseBehindCloudflareTunnel,
  ]),
  caching: Schema.optional(
    Schema.Union([
      HyperdriveHyperdriveCachingCommon,
      HyperdriveHyperdriveCachingEnabled,
    ]),
  ),
  mtls: Schema.optional(Mtls),
  originConnectionLimit: Schema.optional(Schema.Number),
}).pipe(
  Schema.encodeKeys({
    name: "name",
    origin: "origin",
    caching: "caching",
    mtls: "mtls",
    originConnectionLimit: "origin_connection_limit",
  }),
  T.Http({ method: "POST", path: "/accounts/{account_id}/hyperdrive/configs" }),
) as unknown as Schema.Schema<CreateConfigRequest>;

export interface CreateConfigResponse {
  /** Define configurations using a unique string identifier. */
  id: string;
  /** The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name: string;
  origin:
    | {
        database: string;
        host: string;
        port: number;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      }
    | {
        accessClientId: string;
        database: string;
        host: string;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      };
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled
    | null;
  /** Defines the creation time of the Hyperdrive configuration. */
  createdOn?: string | null;
  /** Defines the last modified time of the Hyperdrive configuration. */
  modifiedOn?: string | null;
  mtls?: Mtls | null;
  /** The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number | null;
}

export const CreateConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  origin: Schema.Union([
    Schema.Struct({
      database: Schema.String,
      host: Schema.String,
      port: Schema.Number,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }),
    Schema.Struct({
      accessClientId: Schema.String,
      database: Schema.String,
      host: Schema.String,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        accessClientId: "access_client_id",
        database: "database",
        host: "host",
        scheme: "scheme",
        user: "user",
      }),
    ),
  ]),
  caching: Schema.optional(
    Schema.Union([
      Schema.Union([
        HyperdriveHyperdriveCachingCommon,
        HyperdriveHyperdriveCachingEnabled,
      ]),
      Schema.Null,
    ]),
  ),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  mtls: Schema.optional(Schema.Union([Mtls, Schema.Null])),
  originConnectionLimit: Schema.optional(
    Schema.Union([Schema.Number, Schema.Null]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      origin: "origin",
      caching: "caching",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      mtls: "mtls",
      originConnectionLimit: "origin_connection_limit",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateConfigResponse>;

export type CreateConfigError =
  | DefaultErrors
  | PrivateHostNotAllowed
  | InvalidHyperdriveConfig
  | InvalidObjectIdentifier;

export const createConfig: API.OperationMethod<
  CreateConfigRequest,
  CreateConfigResponse,
  CreateConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateConfigRequest,
  output: CreateConfigResponse,
  errors: [
    PrivateHostNotAllowed,
    InvalidHyperdriveConfig,
    InvalidObjectIdentifier,
  ],
}));

export interface UpdateConfigRequest {
  hyperdriveId: string;
  /** Path param: Define configurations using a unique string identifier. */
  accountId: string;
  /** Body param: The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name: string;
  /** Body param: */
  origin: PublicDatabase | AccessProtectedDatabaseBehindCloudflareTunnel;
  /** Body param: */
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled;
  /** Body param: */
  mtls?: Mtls;
  /** Body param: The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number;
}

export const UpdateConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hyperdriveId: Schema.String.pipe(T.HttpPath("hyperdriveId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  name: Schema.String,
  origin: Schema.Union([
    PublicDatabase,
    AccessProtectedDatabaseBehindCloudflareTunnel,
  ]),
  caching: Schema.optional(
    Schema.Union([
      HyperdriveHyperdriveCachingCommon,
      HyperdriveHyperdriveCachingEnabled,
    ]),
  ),
  mtls: Schema.optional(Mtls),
  originConnectionLimit: Schema.optional(Schema.Number),
}).pipe(
  Schema.encodeKeys({
    name: "name",
    origin: "origin",
    caching: "caching",
    mtls: "mtls",
    originConnectionLimit: "origin_connection_limit",
  }),
  T.Http({
    method: "PUT",
    path: "/accounts/{account_id}/hyperdrive/configs/{hyperdriveId}",
  }),
) as unknown as Schema.Schema<UpdateConfigRequest>;

export interface UpdateConfigResponse {
  /** Define configurations using a unique string identifier. */
  id: string;
  /** The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name: string;
  origin:
    | {
        database: string;
        host: string;
        port: number;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      }
    | {
        accessClientId: string;
        database: string;
        host: string;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      };
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled
    | null;
  /** Defines the creation time of the Hyperdrive configuration. */
  createdOn?: string | null;
  /** Defines the last modified time of the Hyperdrive configuration. */
  modifiedOn?: string | null;
  mtls?: Mtls | null;
  /** The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number | null;
}

export const UpdateConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  origin: Schema.Union([
    Schema.Struct({
      database: Schema.String,
      host: Schema.String,
      port: Schema.Number,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }),
    Schema.Struct({
      accessClientId: Schema.String,
      database: Schema.String,
      host: Schema.String,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        accessClientId: "access_client_id",
        database: "database",
        host: "host",
        scheme: "scheme",
        user: "user",
      }),
    ),
  ]),
  caching: Schema.optional(
    Schema.Union([
      Schema.Union([
        HyperdriveHyperdriveCachingCommon,
        HyperdriveHyperdriveCachingEnabled,
      ]),
      Schema.Null,
    ]),
  ),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  mtls: Schema.optional(Schema.Union([Mtls, Schema.Null])),
  originConnectionLimit: Schema.optional(
    Schema.Union([Schema.Number, Schema.Null]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      origin: "origin",
      caching: "caching",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      mtls: "mtls",
      originConnectionLimit: "origin_connection_limit",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateConfigResponse>;

export type UpdateConfigError =
  | DefaultErrors
  | PrivateHostNotAllowed
  | HyperdriveConfigNotFound
  | InvalidObjectIdentifier
  | MethodNotAllowed;

export const updateConfig: API.OperationMethod<
  UpdateConfigRequest,
  UpdateConfigResponse,
  UpdateConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigRequest,
  output: UpdateConfigResponse,
  errors: [
    PrivateHostNotAllowed,
    HyperdriveConfigNotFound,
    InvalidObjectIdentifier,
    MethodNotAllowed,
  ],
}));

export interface PatchConfigRequest {
  hyperdriveId: string;
  /** Path param: Define configurations using a unique string identifier. */
  accountId: string;
  /** Body param: */
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled;
  /** Body param: */
  mtls?: Mtls;
  /** Body param: The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name?: string;
  /** Body param: */
  origin?:
    | {
        database?: string;
        password?: string;
        scheme?: "postgres" | "postgresql" | "mysql";
        user?: string;
      }
    | { host: string; port: number }
    | { accessClientId: string; accessClientSecret: string; host: string };
  /** Body param: The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number;
}

export const PatchConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hyperdriveId: Schema.String.pipe(T.HttpPath("hyperdriveId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  caching: Schema.optional(
    Schema.Union([
      HyperdriveHyperdriveCachingCommon,
      HyperdriveHyperdriveCachingEnabled,
    ]),
  ),
  mtls: Schema.optional(Mtls),
  name: Schema.optional(Schema.String),
  origin: Schema.optional(
    Schema.Union([
      Schema.Struct({
        database: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
        scheme: Schema.optional(
          Schema.Literals(["postgres", "postgresql", "mysql"]),
        ),
        user: Schema.optional(Schema.String),
      }),
      Schema.Struct({
        host: Schema.String,
        port: Schema.Number,
      }),
      Schema.Struct({
        accessClientId: Schema.String,
        accessClientSecret: SensitiveString,
        host: Schema.String,
      }).pipe(
        Schema.encodeKeys({
          accessClientId: "access_client_id",
          accessClientSecret: "access_client_secret",
          host: "host",
        }),
      ),
    ]),
  ),
  originConnectionLimit: Schema.optional(Schema.Number),
}).pipe(
  Schema.encodeKeys({
    caching: "caching",
    mtls: "mtls",
    name: "name",
    origin: "origin",
    originConnectionLimit: "origin_connection_limit",
  }),
  T.Http({
    method: "PATCH",
    path: "/accounts/{account_id}/hyperdrive/configs/{hyperdriveId}",
  }),
) as unknown as Schema.Schema<PatchConfigRequest>;

export interface PatchConfigResponse {
  /** Define configurations using a unique string identifier. */
  id: string;
  /** The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. */
  name: string;
  origin:
    | {
        database: string;
        host: string;
        port: number;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      }
    | {
        accessClientId: string;
        database: string;
        host: string;
        scheme: "postgres" | "postgresql" | "mysql";
        user: string;
      };
  caching?:
    | HyperdriveHyperdriveCachingCommon
    | HyperdriveHyperdriveCachingEnabled
    | null;
  /** Defines the creation time of the Hyperdrive configuration. */
  createdOn?: string | null;
  /** Defines the last modified time of the Hyperdrive configuration. */
  modifiedOn?: string | null;
  mtls?: Mtls | null;
  /** The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. */
  originConnectionLimit?: number | null;
}

export const PatchConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  origin: Schema.Union([
    Schema.Struct({
      database: Schema.String,
      host: Schema.String,
      port: Schema.Number,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }),
    Schema.Struct({
      accessClientId: Schema.String,
      database: Schema.String,
      host: Schema.String,
      scheme: Schema.Literals(["postgres", "postgresql", "mysql"]),
      user: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        accessClientId: "access_client_id",
        database: "database",
        host: "host",
        scheme: "scheme",
        user: "user",
      }),
    ),
  ]),
  caching: Schema.optional(
    Schema.Union([
      Schema.Union([
        HyperdriveHyperdriveCachingCommon,
        HyperdriveHyperdriveCachingEnabled,
      ]),
      Schema.Null,
    ]),
  ),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  mtls: Schema.optional(Schema.Union([Mtls, Schema.Null])),
  originConnectionLimit: Schema.optional(
    Schema.Union([Schema.Number, Schema.Null]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      origin: "origin",
      caching: "caching",
      createdOn: "created_on",
      modifiedOn: "modified_on",
      mtls: "mtls",
      originConnectionLimit: "origin_connection_limit",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PatchConfigResponse>;

export type PatchConfigError =
  | DefaultErrors
  | PrivateHostNotAllowed
  | HyperdriveConfigNotFound
  | InvalidObjectIdentifier
  | MethodNotAllowed;

export const patchConfig: API.OperationMethod<
  PatchConfigRequest,
  PatchConfigResponse,
  PatchConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchConfigRequest,
  output: PatchConfigResponse,
  errors: [
    PrivateHostNotAllowed,
    HyperdriveConfigNotFound,
    InvalidObjectIdentifier,
    MethodNotAllowed,
  ],
}));

export interface DeleteConfigRequest {
  hyperdriveId: string;
  /** Define configurations using a unique string identifier. */
  accountId: string;
}

export const DeleteConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hyperdriveId: Schema.String.pipe(T.HttpPath("hyperdriveId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/hyperdrive/configs/{hyperdriveId}",
  }),
) as unknown as Schema.Schema<DeleteConfigRequest>;

export type DeleteConfigResponse = unknown;

export const DeleteConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteConfigResponse>;

export type DeleteConfigError =
  | DefaultErrors
  | PrivateHostNotAllowed
  | HyperdriveConfigNotFound
  | InvalidObjectIdentifier
  | MethodNotAllowed;

export const deleteConfig: API.OperationMethod<
  DeleteConfigRequest,
  DeleteConfigResponse,
  DeleteConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteConfigRequest,
  output: DeleteConfigResponse,
  errors: [
    PrivateHostNotAllowed,
    HyperdriveConfigNotFound,
    InvalidObjectIdentifier,
    MethodNotAllowed,
  ],
}));
