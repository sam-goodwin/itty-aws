/**
 * Cloudflare WORKERS-FOR-PLATFORMS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service workers-for-platforms
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class DispatchNamespaceAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceAlreadyExists>()(
    "DispatchNamespaceAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 100120 }],
) {}

export class DispatchNamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceNotFound>()(
    "DispatchNamespaceNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 100119 }],
) {}

export class DispatchNamespaceScriptNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DispatchNamespaceScriptNotFound>()(
    "DispatchNamespaceScriptNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10007 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

// =============================================================================
// DispatchNamespace
// =============================================================================

export interface GetDispatchNamespaceRequest {
  dispatchNamespace: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}",
      }),
    ),
  ) as unknown as Schema.Schema<GetDispatchNamespaceRequest>;

export interface GetDispatchNamespaceResponse {
  /** Identifier. */
  createdBy?: string | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Identifier. */
  modifiedBy?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** API Resource UUID tag. */
  namespaceId?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  namespaceName?: string | null;
  /** The current number of scripts in this Dispatch Namespace. */
  scriptCount?: number | null;
  /** Whether the Workers in the namespace are executed in a "trusted" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf`  */
  trustedWorkers?: boolean | null;
}

export const GetDispatchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      scriptCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      trustedWorkers: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdBy: "created_by",
          createdOn: "created_on",
          modifiedBy: "modified_by",
          modifiedOn: "modified_on",
          namespaceId: "namespace_id",
          namespaceName: "namespace_name",
          scriptCount: "script_count",
          trustedWorkers: "trusted_workers",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDispatchNamespaceResponse>;

export type GetDispatchNamespaceError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | Forbidden;

export const getDispatchNamespace: API.OperationMethod<
  GetDispatchNamespaceRequest,
  GetDispatchNamespaceResponse,
  GetDispatchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceRequest,
  output: GetDispatchNamespaceResponse,
  errors: [DispatchNamespaceNotFound, Forbidden],
}));

export interface ListDispatchNamespacesRequest {
  /** Identifier. */
  accountId: string;
}

export const ListDispatchNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces",
      }),
    ),
  ) as unknown as Schema.Schema<ListDispatchNamespacesRequest>;

export interface ListDispatchNamespacesResponse {
  result: {
    createdBy?: string | null;
    createdOn?: string | null;
    modifiedBy?: string | null;
    modifiedOn?: string | null;
    namespaceId?: string | null;
    namespaceName?: string | null;
    scriptCount?: number | null;
    trustedWorkers?: boolean | null;
  }[];
}

export const ListDispatchNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          createdBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          createdOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          namespaceId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          namespaceName: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          scriptCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          trustedWorkers: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdBy: "created_by",
            createdOn: "created_on",
            modifiedBy: "modified_by",
            modifiedOn: "modified_on",
            namespaceId: "namespace_id",
            namespaceName: "namespace_name",
            scriptCount: "script_count",
            trustedWorkers: "trusted_workers",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ListDispatchNamespacesResponse>;

export type ListDispatchNamespacesError = DefaultErrors;

export const listDispatchNamespaces: API.PaginatedOperationMethod<
  ListDispatchNamespacesRequest,
  ListDispatchNamespacesResponse,
  ListDispatchNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDispatchNamespacesRequest,
  output: ListDispatchNamespacesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateDispatchNamespaceRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The name of the dispatch namespace. */
  name?: string;
}

export const CreateDispatchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/dispatch/namespaces",
      }),
    ),
  ) as unknown as Schema.Schema<CreateDispatchNamespaceRequest>;

export interface CreateDispatchNamespaceResponse {
  /** Identifier. */
  createdBy?: string | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Identifier. */
  modifiedBy?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** API Resource UUID tag. */
  namespaceId?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  namespaceName?: string | null;
  /** The current number of scripts in this Dispatch Namespace. */
  scriptCount?: number | null;
  /** Whether the Workers in the namespace are executed in a "trusted" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf`  */
  trustedWorkers?: boolean | null;
}

export const CreateDispatchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespaceName: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      scriptCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      trustedWorkers: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdBy: "created_by",
          createdOn: "created_on",
          modifiedBy: "modified_by",
          modifiedOn: "modified_on",
          namespaceId: "namespace_id",
          namespaceName: "namespace_name",
          scriptCount: "script_count",
          trustedWorkers: "trusted_workers",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateDispatchNamespaceResponse>;

export type CreateDispatchNamespaceError =
  | DefaultErrors
  | DispatchNamespaceAlreadyExists
  | Forbidden;

export const createDispatchNamespace: API.OperationMethod<
  CreateDispatchNamespaceRequest,
  CreateDispatchNamespaceResponse,
  CreateDispatchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDispatchNamespaceRequest,
  output: CreateDispatchNamespaceResponse,
  errors: [DispatchNamespaceAlreadyExists, Forbidden],
}));

export interface DeleteDispatchNamespaceRequest {
  dispatchNamespace: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteDispatchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceRequest>;

export type DeleteDispatchNamespaceResponse = unknown;

export const DeleteDispatchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceResponse>;

export type DeleteDispatchNamespaceError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | Forbidden;

export const deleteDispatchNamespace: API.OperationMethod<
  DeleteDispatchNamespaceRequest,
  DeleteDispatchNamespaceResponse,
  DeleteDispatchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceRequest,
  output: DeleteDispatchNamespaceResponse,
  errors: [DispatchNamespaceNotFound, Forbidden],
}));

// =============================================================================
// DispatchNamespaceScript
// =============================================================================

export interface GetDispatchNamespaceScriptRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}",
      }),
    ),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptRequest>;

export interface GetDispatchNamespaceScriptResponse {
  /** When the script was created. */
  createdOn?: string | null;
  /** Name of the Workers for Platforms dispatch namespace. */
  dispatchNamespace?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  script?: {
    id?: string | null;
    compatibilityDate?: string | null;
    compatibilityFlags?: string[] | null;
    createdOn?: string | null;
    etag?: string | null;
    handlers?: string[] | null;
    hasAssets?: boolean | null;
    hasModules?: boolean | null;
    lastDeployedFrom?: string | null;
    logpush?: boolean | null;
    migrationTag?: string | null;
    modifiedOn?: string | null;
    namedHandlers?:
      | { handlers?: string[] | null; name?: string | null }[]
      | null;
    observability?: {
      enabled: boolean;
      headSamplingRate?: number | null;
      logs?: {
        enabled: boolean;
        invocationLogs: boolean;
        destinations?: string[] | null;
        headSamplingRate?: number | null;
        persist?: boolean | null;
      } | null;
      traces?: {
        destinations?: string[] | null;
        enabled?: boolean | null;
        headSamplingRate?: number | null;
        persist?: boolean | null;
        propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
      } | null;
    } | null;
    placement?:
      | {
          mode: "smart";
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          region: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          hostname: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          host: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          mode: "targeted";
          region: string;
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          hostname: string;
          mode: "targeted";
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          host: string;
          mode: "targeted";
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | {
          mode: "targeted";
          target: (
            | { region: string }
            | { hostname: string }
            | { host: string }
          )[];
          lastAnalyzedAt?: string | null;
          status?:
            | "SUCCESS"
            | "UNSUPPORTED_APPLICATION"
            | "INSUFFICIENT_INVOCATIONS"
            | (string & {})
            | null;
        }
      | null;
    placementMode?: "smart" | "targeted" | (string & {}) | null;
    placementStatus?:
      | "SUCCESS"
      | "UNSUPPORTED_APPLICATION"
      | "INSUFFICIENT_INVOCATIONS"
      | (string & {})
      | null;
    tag?: string | null;
    tags?: string[] | null;
    tailConsumers?:
      | {
          service: string;
          environment?: string | null;
          namespace?: string | null;
        }[]
      | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
  } | null;
}

export const GetDispatchNamespaceScriptResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dispatchNamespace: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      script: Schema.optional(
        Schema.Union([
          Schema.Struct({
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            compatibilityDate: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            compatibilityFlags: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            createdOn: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            handlers: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            hasAssets: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            hasModules: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            lastDeployedFrom: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            logpush: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            migrationTag: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            modifiedOn: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            namedHandlers: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    handlers: Schema.optional(
                      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            observability: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  logs: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        enabled: Schema.Boolean,
                        invocationLogs: Schema.Boolean,
                        destinations: Schema.optional(
                          Schema.Union([
                            Schema.Array(Schema.String),
                            Schema.Null,
                          ]),
                        ),
                        headSamplingRate: Schema.optional(
                          Schema.Union([Schema.Number, Schema.Null]),
                        ),
                        persist: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                      }).pipe(
                        Schema.encodeKeys({
                          enabled: "enabled",
                          invocationLogs: "invocation_logs",
                          destinations: "destinations",
                          headSamplingRate: "head_sampling_rate",
                          persist: "persist",
                        }),
                      ),
                      Schema.Null,
                    ]),
                  ),
                  traces: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        destinations: Schema.optional(
                          Schema.Union([
                            Schema.Array(Schema.String),
                            Schema.Null,
                          ]),
                        ),
                        enabled: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                        headSamplingRate: Schema.optional(
                          Schema.Union([Schema.Number, Schema.Null]),
                        ),
                        persist: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                        propagationPolicy: Schema.optional(
                          Schema.Union([
                            Schema.Union([
                              Schema.Literals(["authenticated", "accept"]),
                              Schema.String,
                            ]),
                            Schema.Null,
                          ]),
                        ),
                      }).pipe(
                        Schema.encodeKeys({
                          destinations: "destinations",
                          enabled: "enabled",
                          headSamplingRate: "head_sampling_rate",
                          persist: "persist",
                          propagationPolicy: "propagation_policy",
                        }),
                      ),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    enabled: "enabled",
                    headSamplingRate: "head_sampling_rate",
                    logs: "logs",
                    traces: "traces",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            placement: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Struct({
                    mode: Schema.Literal("targeted"),
                    region: Schema.String,
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      mode: "mode",
                      region: "region",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    hostname: Schema.String,
                    mode: Schema.Literal("targeted"),
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      hostname: "hostname",
                      mode: "mode",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    host: Schema.String,
                    mode: Schema.Literal("targeted"),
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      host: "host",
                      mode: "mode",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    mode: Schema.Literal("targeted"),
                    target: Schema.Array(
                      Schema.Union([
                        Schema.Struct({
                          region: Schema.String,
                        }),
                        Schema.Struct({
                          hostname: Schema.String,
                        }),
                        Schema.Struct({
                          host: Schema.String,
                        }),
                      ]),
                    ),
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      mode: "mode",
                      target: "target",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    mode: Schema.Literal("smart"),
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      mode: "mode",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    region: Schema.String,
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      region: "region",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    hostname: Schema.String,
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      hostname: "hostname",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                  Schema.Struct({
                    host: Schema.String,
                    lastAnalyzedAt: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    status: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "SUCCESS",
                            "UNSUPPORTED_APPLICATION",
                            "INSUFFICIENT_INVOCATIONS",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      host: "host",
                      lastAnalyzedAt: "last_analyzed_at",
                      status: "status",
                    }),
                  ),
                ]),
                Schema.Null,
              ]),
            ),
            placementMode: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["smart", "targeted"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            placementStatus: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "SUCCESS",
                    "UNSUPPORTED_APPLICATION",
                    "INSUFFICIENT_INVOCATIONS",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            tags: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            tailConsumers: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    service: Schema.String,
                    environment: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    namespace: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            usageModel: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["standard", "bundled", "unbound"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              id: "id",
              compatibilityDate: "compatibility_date",
              compatibilityFlags: "compatibility_flags",
              createdOn: "created_on",
              etag: "etag",
              handlers: "handlers",
              hasAssets: "has_assets",
              hasModules: "has_modules",
              lastDeployedFrom: "last_deployed_from",
              logpush: "logpush",
              migrationTag: "migration_tag",
              modifiedOn: "modified_on",
              namedHandlers: "named_handlers",
              observability: "observability",
              placement: "placement",
              placementMode: "placement_mode",
              placementStatus: "placement_status",
              tag: "tag",
              tags: "tags",
              tailConsumers: "tail_consumers",
              usageModel: "usage_model",
            }),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdOn: "created_on",
          dispatchNamespace: "dispatch_namespace",
          modifiedOn: "modified_on",
          script: "script",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptResponse>;

export type GetDispatchNamespaceScriptError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | DispatchNamespaceScriptNotFound
  | Forbidden;

export const getDispatchNamespaceScript: API.OperationMethod<
  GetDispatchNamespaceScriptRequest,
  GetDispatchNamespaceScriptResponse,
  GetDispatchNamespaceScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptRequest,
  output: GetDispatchNamespaceScriptResponse,
  errors: [
    DispatchNamespaceNotFound,
    DispatchNamespaceScriptNotFound,
    Forbidden,
  ],
}));

export interface PutDispatchNamespaceScriptRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: When set to "strict", the upload will fail if any `inherit` type bindings cannot be resolved against the previous version of the script. Without this, unresolvable inherit bindings are si */
  bindingsInherit?: "strict";
  /** Body param: JSON-encoded metadata about the uploaded parts and Worker configuration. */
  metadata: {
    assets?: {
      config?: {
        headers?: string;
        redirects?: string;
        htmlHandling?:
          | "auto-trailing-slash"
          | "force-trailing-slash"
          | "drop-trailing-slash"
          | "none"
          | (string & {});
        notFoundHandling?:
          | "none"
          | "404-page"
          | "single-page-application"
          | (string & {});
        runWorkerFirst?: string[] | boolean;
        serveDirectly?: boolean;
      };
      jwt?: string;
    };
    bindings?: (
      | { name: string; type: "ai" }
      | {
          instanceName: string;
          name: string;
          type: "ai_search";
          namespace?: string;
        }
      | { name: string; namespace: string; type: "ai_search_namespace" }
      | { dataset: string; name: string; type: "analytics_engine" }
      | { name: string; type: "assets" }
      | { name: string; type: "browser" }
      | { databaseId: string; name: string; type: "d1"; id?: string }
      | { name: string; part: string; type: "data_blob" }
      | {
          name: string;
          namespace: string;
          type: "dispatch_namespace";
          outbound?: {
            params?: { name: string }[];
            worker?: {
              entrypoint?: string;
              environment?: string;
              service?: string;
            };
          };
        }
      | {
          name: string;
          type: "durable_object_namespace";
          className?: string;
          dispatchNamespace?: string;
          environment?: string;
          namespaceId?: string;
          scriptName?: string;
        }
      | { id: string; name: string; type: "hyperdrive" }
      | { name: string; type: "inherit"; oldName?: string; versionId?: string }
      | { name: string; type: "images" }
      | { json: unknown; name: string; type: "json" }
      | { name: string; namespaceId: string; type: "kv_namespace" }
      | { name: string; type: "media" }
      | { certificateId: string; name: string; type: "mtls_certificate" }
      | { name: string; text: string; type: "plain_text" }
      | { name: string; pipeline: string; type: "pipelines" }
      | { name: string; queueName: string; type: "queue" }
      | {
          name: string;
          namespaceId: string;
          simple: { limit: number; period: number; mitigationTimeout?: number };
          type: "ratelimit";
        }
      | {
          bucketName: string;
          name: string;
          type: "r2_bucket";
          jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {});
        }
      | { name: string; text: string; type: "secret_text" }
      | {
          name: string;
          type: "send_email";
          allowedDestinationAddresses?: string[];
          allowedSenderAddresses?: string[];
          destinationAddress?: string;
        }
      | {
          name: string;
          service: string;
          type: "service";
          entrypoint?: string;
          environment?: string;
        }
      | { name: string; part: string; type: "text_blob" }
      | { indexName: string; name: string; type: "vectorize" }
      | { name: string; type: "version_metadata" }
      | {
          name: string;
          secretName: string;
          storeId: string;
          type: "secrets_store_secret";
        }
      | { appId: string; name: string; type: "flagship" }
      | {
          algorithm: unknown;
          format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
          name: string;
          type: "secret_key";
          usages: (
            | "encrypt"
            | "decrypt"
            | "sign"
            | "verify"
            | "deriveKey"
            | "deriveBits"
            | "wrapKey"
            | "unwrapKey"
            | (string & {})
          )[];
          keyBase64?: string;
          keyJwk?: unknown;
        }
      | {
          name: string;
          type: "workflow";
          workflowName: string;
          className?: string;
          scriptName?: string;
        }
      | { name: string; part: string; type: "wasm_module" }
      | { name: string; serviceId: string; type: "vpc_service" }
      | {
          name: string;
          type: "vpc_network";
          networkId?: string;
          tunnelId?: string;
        }
    )[];
    bodyPart?: string;
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    keepAssets?: boolean;
    keepBindings?: string[];
    limits?: { cpuMs?: number; subrequests?: number };
    logpush?: boolean;
    mainModule?: string;
    migrations?:
      | {
          deletedClasses?: string[];
          newClasses?: string[];
          newSqliteClasses?: string[];
          newTag?: string;
          oldTag?: string;
          renamedClasses?: { from?: string; to?: string }[];
          transferredClasses?: {
            from?: string;
            fromScript?: string;
            to?: string;
          }[];
        }
      | {
          newTag?: string;
          oldTag?: string;
          steps?: {
            deletedClasses?: string[];
            newClasses?: string[];
            newSqliteClasses?: string[];
            renamedClasses?: { from?: string; to?: string }[];
            transferredClasses?: {
              from?: string;
              fromScript?: string;
              to?: string;
            }[];
          }[];
        };
    observability?: {
      enabled: boolean;
      headSamplingRate?: number | null;
      logs?: {
        enabled: boolean;
        invocationLogs: boolean;
        destinations?: string[];
        headSamplingRate?: number | null;
        persist?: boolean;
      } | null;
      traces?: {
        destinations?: string[];
        enabled?: boolean;
        headSamplingRate?: number | null;
        persist?: boolean;
        propagationPolicy?: "authenticated" | "accept" | (string & {});
      } | null;
    };
    placement?:
      | { mode: "smart" }
      | { region: string }
      | { hostname: string }
      | { host: string }
      | { mode: "targeted"; region: string }
      | { hostname: string; mode: "targeted" }
      | { host: string; mode: "targeted" }
      | {
          mode: "targeted";
          target: (
            | { region: string }
            | { hostname: string }
            | { host: string }
          )[];
        };
    tags?: string[];
    tailConsumers?:
      | { service: string; environment?: string; namespace?: string }[]
      | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {});
  };
  /** Body param: An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/ */
  files?: (File | Blob)[];
}

export const PutDispatchNamespaceScriptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      bindingsInherit: Schema.optional(Schema.Literal("strict")).pipe(
        T.HttpQuery("bindings_inherit"),
      ),
      metadata: Schema.Struct({
        assets: Schema.optional(
          Schema.Struct({
            config: Schema.optional(
              Schema.Struct({
                headers: Schema.optional(Schema.String),
                redirects: Schema.optional(Schema.String),
                htmlHandling: Schema.optional(
                  Schema.Union([
                    Schema.Literals([
                      "auto-trailing-slash",
                      "force-trailing-slash",
                      "drop-trailing-slash",
                      "none",
                    ]),
                    Schema.String,
                  ]),
                ),
                notFoundHandling: Schema.optional(
                  Schema.Union([
                    Schema.Literals([
                      "none",
                      "404-page",
                      "single-page-application",
                    ]),
                    Schema.String,
                  ]),
                ),
                runWorkerFirst: Schema.optional(
                  Schema.Union([Schema.Array(Schema.String), Schema.Boolean]),
                ),
                serveDirectly: Schema.optional(Schema.Boolean),
              }).pipe(
                Schema.encodeKeys({
                  headers: "_headers",
                  redirects: "_redirects",
                  htmlHandling: "html_handling",
                  notFoundHandling: "not_found_handling",
                  runWorkerFirst: "run_worker_first",
                  serveDirectly: "serve_directly",
                }),
              ),
            ),
            jwt: Schema.optional(Schema.String),
          }),
        ),
        bindings: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                algorithm: Schema.Unknown,
                format: Schema.Union([
                  Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
                  Schema.String,
                ]),
                name: Schema.String,
                type: Schema.Literal("secret_key"),
                usages: Schema.Array(
                  Schema.Union([
                    Schema.Literals([
                      "encrypt",
                      "decrypt",
                      "sign",
                      "verify",
                      "deriveKey",
                      "deriveBits",
                      "wrapKey",
                      "unwrapKey",
                    ]),
                    Schema.String,
                  ]),
                ),
                keyBase64: Schema.optional(Schema.String),
                keyJwk: Schema.optional(Schema.Unknown),
              }).pipe(
                Schema.encodeKeys({
                  algorithm: "algorithm",
                  format: "format",
                  name: "name",
                  type: "type",
                  usages: "usages",
                  keyBase64: "key_base64",
                  keyJwk: "key_jwk",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                namespaceId: Schema.String,
                simple: Schema.Struct({
                  limit: Schema.Number,
                  period: Schema.Number,
                  mitigationTimeout: Schema.optional(Schema.Number),
                }).pipe(
                  Schema.encodeKeys({
                    limit: "limit",
                    period: "period",
                    mitigationTimeout: "mitigation_timeout",
                  }),
                ),
                type: Schema.Literal("ratelimit"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  namespaceId: "namespace_id",
                  simple: "simple",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                secretName: Schema.String,
                storeId: Schema.String,
                type: Schema.Literal("secrets_store_secret"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  secretName: "secret_name",
                  storeId: "store_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                instanceName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("ai_search"),
                namespace: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  instanceName: "instance_name",
                  name: "name",
                  type: "type",
                  namespace: "namespace",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                namespace: Schema.String,
                type: Schema.Literal("ai_search_namespace"),
              }),
              Schema.Struct({
                dataset: Schema.String,
                name: Schema.String,
                type: Schema.Literal("analytics_engine"),
              }),
              Schema.Struct({
                databaseId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("d1"),
                id: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  databaseId: "database_id",
                  name: "name",
                  type: "type",
                  id: "id",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("data_blob"),
              }),
              Schema.Struct({
                name: Schema.String,
                namespace: Schema.String,
                type: Schema.Literal("dispatch_namespace"),
                outbound: Schema.optional(
                  Schema.Struct({
                    params: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                    ),
                    worker: Schema.optional(
                      Schema.Struct({
                        entrypoint: Schema.optional(Schema.String),
                        environment: Schema.optional(Schema.String),
                        service: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              }),
              Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                type: Schema.Literal("hyperdrive"),
              }),
              Schema.Struct({
                json: Schema.Unknown,
                name: Schema.String,
                type: Schema.Literal("json"),
              }),
              Schema.Struct({
                name: Schema.String,
                namespaceId: Schema.String,
                type: Schema.Literal("kv_namespace"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  namespaceId: "namespace_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                certificateId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("mtls_certificate"),
              }).pipe(
                Schema.encodeKeys({
                  certificateId: "certificate_id",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                text: Schema.String,
                type: Schema.Literal("plain_text"),
              }),
              Schema.Struct({
                name: Schema.String,
                pipeline: Schema.String,
                type: Schema.Literal("pipelines"),
              }),
              Schema.Struct({
                name: Schema.String,
                queueName: Schema.String,
                type: Schema.Literal("queue"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  queueName: "queue_name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                bucketName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("r2_bucket"),
                jurisdiction: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["eu", "fedramp", "fedramp-high"]),
                    Schema.String,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  bucketName: "bucket_name",
                  name: "name",
                  type: "type",
                  jurisdiction: "jurisdiction",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                text: Schema.String,
                type: Schema.Literal("secret_text"),
              }),
              Schema.Struct({
                name: Schema.String,
                service: Schema.String,
                type: Schema.Literal("service"),
                entrypoint: Schema.optional(Schema.String),
                environment: Schema.optional(Schema.String),
              }),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("text_blob"),
              }),
              Schema.Struct({
                indexName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("vectorize"),
              }).pipe(
                Schema.encodeKeys({
                  indexName: "index_name",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                appId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("flagship"),
              }).pipe(
                Schema.encodeKeys({
                  appId: "app_id",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("workflow"),
                workflowName: Schema.String,
                className: Schema.optional(Schema.String),
                scriptName: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  workflowName: "workflow_name",
                  className: "class_name",
                  scriptName: "script_name",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("wasm_module"),
              }),
              Schema.Struct({
                name: Schema.String,
                serviceId: Schema.String,
                type: Schema.Literal("vpc_service"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  serviceId: "service_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("ai"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("assets"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("browser"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("durable_object_namespace"),
                className: Schema.optional(Schema.String),
                dispatchNamespace: Schema.optional(Schema.String),
                environment: Schema.optional(Schema.String),
                namespaceId: Schema.optional(Schema.String),
                scriptName: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  className: "class_name",
                  dispatchNamespace: "dispatch_namespace",
                  environment: "environment",
                  namespaceId: "namespace_id",
                  scriptName: "script_name",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("inherit"),
                oldName: Schema.optional(Schema.String),
                versionId: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  oldName: "old_name",
                  versionId: "version_id",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("images"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("media"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("send_email"),
                allowedDestinationAddresses: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                allowedSenderAddresses: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                destinationAddress: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  allowedDestinationAddresses: "allowed_destination_addresses",
                  allowedSenderAddresses: "allowed_sender_addresses",
                  destinationAddress: "destination_address",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("version_metadata"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("vpc_network"),
                networkId: Schema.optional(Schema.String),
                tunnelId: Schema.optional(Schema.String),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  networkId: "network_id",
                  tunnelId: "tunnel_id",
                }),
              ),
            ]),
          ),
        ),
        bodyPart: Schema.optional(Schema.String),
        compatibilityDate: Schema.optional(Schema.String),
        compatibilityFlags: Schema.optional(Schema.Array(Schema.String)),
        keepAssets: Schema.optional(Schema.Boolean),
        keepBindings: Schema.optional(Schema.Array(Schema.String)),
        limits: Schema.optional(
          Schema.Struct({
            cpuMs: Schema.optional(Schema.Number),
            subrequests: Schema.optional(Schema.Number),
          }).pipe(
            Schema.encodeKeys({ cpuMs: "cpu_ms", subrequests: "subrequests" }),
          ),
        ),
        logpush: Schema.optional(Schema.Boolean),
        mainModule: Schema.optional(Schema.String),
        migrations: Schema.optional(
          Schema.Union([
            Schema.Struct({
              deletedClasses: Schema.optional(Schema.Array(Schema.String)),
              newClasses: Schema.optional(Schema.Array(Schema.String)),
              newSqliteClasses: Schema.optional(Schema.Array(Schema.String)),
              newTag: Schema.optional(Schema.String),
              oldTag: Schema.optional(Schema.String),
              renamedClasses: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    from: Schema.optional(Schema.String),
                    to: Schema.optional(Schema.String),
                  }),
                ),
              ),
              transferredClasses: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    from: Schema.optional(Schema.String),
                    fromScript: Schema.optional(Schema.String),
                    to: Schema.optional(Schema.String),
                  }).pipe(
                    Schema.encodeKeys({
                      from: "from",
                      fromScript: "from_script",
                      to: "to",
                    }),
                  ),
                ),
              ),
            }).pipe(
              Schema.encodeKeys({
                deletedClasses: "deleted_classes",
                newClasses: "new_classes",
                newSqliteClasses: "new_sqlite_classes",
                newTag: "new_tag",
                oldTag: "old_tag",
                renamedClasses: "renamed_classes",
                transferredClasses: "transferred_classes",
              }),
            ),
            Schema.Struct({
              newTag: Schema.optional(Schema.String),
              oldTag: Schema.optional(Schema.String),
              steps: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    deletedClasses: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    newClasses: Schema.optional(Schema.Array(Schema.String)),
                    newSqliteClasses: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    renamedClasses: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          from: Schema.optional(Schema.String),
                          to: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    transferredClasses: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          from: Schema.optional(Schema.String),
                          fromScript: Schema.optional(Schema.String),
                          to: Schema.optional(Schema.String),
                        }).pipe(
                          Schema.encodeKeys({
                            from: "from",
                            fromScript: "from_script",
                            to: "to",
                          }),
                        ),
                      ),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      deletedClasses: "deleted_classes",
                      newClasses: "new_classes",
                      newSqliteClasses: "new_sqlite_classes",
                      renamedClasses: "renamed_classes",
                      transferredClasses: "transferred_classes",
                    }),
                  ),
                ),
              ),
            }).pipe(
              Schema.encodeKeys({
                newTag: "new_tag",
                oldTag: "old_tag",
                steps: "steps",
              }),
            ),
          ]),
        ),
        observability: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            headSamplingRate: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                  invocationLogs: Schema.Boolean,
                  destinations: Schema.optional(Schema.Array(Schema.String)),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(Schema.Boolean),
                }).pipe(
                  Schema.encodeKeys({
                    enabled: "enabled",
                    invocationLogs: "invocation_logs",
                    destinations: "destinations",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            traces: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  destinations: Schema.optional(Schema.Array(Schema.String)),
                  enabled: Schema.optional(Schema.Boolean),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(Schema.Boolean),
                  propagationPolicy: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["authenticated", "accept"]),
                      Schema.String,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    destinations: "destinations",
                    enabled: "enabled",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                    propagationPolicy: "propagation_policy",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              headSamplingRate: "head_sampling_rate",
              logs: "logs",
              traces: "traces",
            }),
          ),
        ),
        placement: Schema.optional(
          Schema.Union([
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              region: Schema.String,
            }),
            Schema.Struct({
              hostname: Schema.String,
              mode: Schema.Literal("targeted"),
            }),
            Schema.Struct({
              host: Schema.String,
              mode: Schema.Literal("targeted"),
            }),
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              target: Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    region: Schema.String,
                  }),
                  Schema.Struct({
                    hostname: Schema.String,
                  }),
                  Schema.Struct({
                    host: Schema.String,
                  }),
                ]),
              ),
            }),
            Schema.Struct({
              mode: Schema.Literal("smart"),
            }),
            Schema.Struct({
              region: Schema.String,
            }),
            Schema.Struct({
              hostname: Schema.String,
            }),
            Schema.Struct({
              host: Schema.String,
            }),
          ]),
        ),
        tags: Schema.optional(Schema.Array(Schema.String)),
        tailConsumers: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                service: Schema.String,
                environment: Schema.optional(Schema.String),
                namespace: Schema.optional(Schema.String),
              }),
            ),
            Schema.Null,
          ]),
        ),
        usageModel: Schema.optional(
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          assets: "assets",
          bindings: "bindings",
          bodyPart: "body_part",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          keepAssets: "keep_assets",
          keepBindings: "keep_bindings",
          limits: "limits",
          logpush: "logpush",
          mainModule: "main_module",
          migrations: "migrations",
          observability: "observability",
          placement: "placement",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      ),
      files: Schema.optional(
        Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptRequest>;

export interface PutDispatchNamespaceScriptResponse {
  startupTimeMs: number;
  /** The name used to identify the script. */
  id?: string | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** The entry point for the script. */
  entryPoint?: string | null;
  /** Hashed script content, can be used in a If-None-Match header when updating. */
  etag?: string | null;
  /** The names of handlers exported as part of the default export. */
  handlers?: string[] | null;
  /** Whether a Worker contains assets. */
  hasAssets?: boolean | null;
  /** Whether a Worker contains modules. */
  hasModules?: boolean | null;
  /** The client most recently used to deploy this Worker. */
  lastDeployedFrom?: string | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** The tag of the Durable Object migration that was most recently applied for this Worker. */
  migrationTag?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** Named exports, such as Durable Object class implementations and named entrypoints. */
  namedHandlers?: { handlers?: string[] | null; name?: string | null }[] | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | {
        mode: "smart";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | null;
  /** @deprecated */
  placementMode?: "smart" | "targeted" | (string & {}) | null;
  /** @deprecated */
  placementStatus?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  /** The immutable ID of the script. */
  tag?: string | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const PutDispatchNamespaceScriptResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      startupTimeMs: Schema.Number,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      entryPoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      handlers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      hasAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      hasModules: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastDeployedFrom: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namedHandlers: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              handlers: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            }),
          ),
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.Boolean,
            headSamplingRate: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                  invocationLogs: Schema.Boolean,
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    enabled: "enabled",
                    invocationLogs: "invocation_logs",
                    destinations: "destinations",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            traces: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  enabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  propagationPolicy: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["authenticated", "accept"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    destinations: "destinations",
                    enabled: "enabled",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                    propagationPolicy: "propagation_policy",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              headSamplingRate: "head_sampling_rate",
              logs: "logs",
              traces: "traces",
            }),
          ),
          Schema.Null,
        ]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              region: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                mode: "mode",
                region: "region",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              hostname: Schema.String,
              mode: Schema.Literal("targeted"),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                hostname: "hostname",
                mode: "mode",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              host: Schema.String,
              mode: Schema.Literal("targeted"),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                host: "host",
                mode: "mode",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              target: Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    region: Schema.String,
                  }),
                  Schema.Struct({
                    hostname: Schema.String,
                  }),
                  Schema.Struct({
                    host: Schema.String,
                  }),
                ]),
              ),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                mode: "mode",
                target: "target",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              mode: Schema.Literal("smart"),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                mode: "mode",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              region: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                region: "region",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              hostname: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                hostname: "hostname",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              host: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                host: "host",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
          ]),
          Schema.Null,
        ]),
      ),
      placementMode: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["smart", "targeted"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      placementStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              service: Schema.String,
              environment: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              namespace: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          Schema.Null,
        ]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          startupTimeMs: "startup_time_ms",
          id: "id",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          createdOn: "created_on",
          entryPoint: "entry_point",
          etag: "etag",
          handlers: "handlers",
          hasAssets: "has_assets",
          hasModules: "has_modules",
          lastDeployedFrom: "last_deployed_from",
          logpush: "logpush",
          migrationTag: "migration_tag",
          modifiedOn: "modified_on",
          namedHandlers: "named_handlers",
          observability: "observability",
          placement: "placement",
          placementMode: "placement_mode",
          placementStatus: "placement_status",
          tag: "tag",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptResponse>;

export type PutDispatchNamespaceScriptError =
  | DefaultErrors
  | DispatchNamespaceNotFound
  | Forbidden;

export const putDispatchNamespaceScript: API.OperationMethod<
  PutDispatchNamespaceScriptRequest,
  PutDispatchNamespaceScriptResponse,
  PutDispatchNamespaceScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDispatchNamespaceScriptRequest,
  output: PutDispatchNamespaceScriptResponse,
  errors: [DispatchNamespaceNotFound, Forbidden],
}));

export interface DeleteDispatchNamespaceScriptRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the */
  force?: boolean;
}

export const DeleteDispatchNamespaceScriptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceScriptRequest>;

export type DeleteDispatchNamespaceScriptResponse = unknown;

export const DeleteDispatchNamespaceScriptResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceScriptResponse>;

export type DeleteDispatchNamespaceScriptError =
  | DefaultErrors
  | DispatchNamespaceScriptNotFound
  | DispatchNamespaceNotFound
  | Forbidden;

export const deleteDispatchNamespaceScript: API.OperationMethod<
  DeleteDispatchNamespaceScriptRequest,
  DeleteDispatchNamespaceScriptResponse,
  DeleteDispatchNamespaceScriptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceScriptRequest,
  output: DeleteDispatchNamespaceScriptResponse,
  errors: [
    DispatchNamespaceScriptNotFound,
    DispatchNamespaceNotFound,
    Forbidden,
  ],
}));

// =============================================================================
// DispatchNamespaceScriptAssetUpload
// =============================================================================

export interface CreateDispatchNamespaceScriptAssetUploadRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A manifest ([path]: {hash, size}) map of files to upload. As an example, `/blog/hello-world.html` would be a valid path key. */
  manifest: Record<string, unknown>;
}

export const CreateDispatchNamespaceScriptAssetUploadRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      manifest: Schema.Record(Schema.String, Schema.Unknown),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/assets-upload-session",
      }),
    ),
  ) as unknown as Schema.Schema<CreateDispatchNamespaceScriptAssetUploadRequest>;

export interface CreateDispatchNamespaceScriptAssetUploadResponse {
  /** The requests to make to upload assets. */
  buckets?: string[][] | null;
  /** A JWT to use as authentication for uploading assets. */
  jwt?: string | null;
}

export const CreateDispatchNamespaceScriptAssetUploadResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      buckets: Schema.optional(
        Schema.Union([Schema.Array(Schema.Array(Schema.String)), Schema.Null]),
      ),
      jwt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateDispatchNamespaceScriptAssetUploadResponse>;

export type CreateDispatchNamespaceScriptAssetUploadError = DefaultErrors;

export const createDispatchNamespaceScriptAssetUpload: API.OperationMethod<
  CreateDispatchNamespaceScriptAssetUploadRequest,
  CreateDispatchNamespaceScriptAssetUploadResponse,
  CreateDispatchNamespaceScriptAssetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDispatchNamespaceScriptAssetUploadRequest,
  output: CreateDispatchNamespaceScriptAssetUploadResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptBinding
// =============================================================================

export interface GetDispatchNamespaceScriptBindingRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptBindingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/bindings",
      }),
    ),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptBindingRequest>;

export interface GetDispatchNamespaceScriptBindingResponse {
  result: (
    | { name: string; type: "ai" }
    | {
        instanceName: string;
        name: string;
        type: "ai_search";
        namespace?: string | null;
      }
    | { name: string; namespace: string; type: "ai_search_namespace" }
    | { dataset: string; name: string; type: "analytics_engine" }
    | { name: string; type: "assets" }
    | { name: string; type: "browser" }
    | { databaseId: string; name: string; type: "d1"; id?: string | null }
    | { name: string; part: string; type: "data_blob" }
    | {
        name: string;
        namespace: string;
        type: "dispatch_namespace";
        outbound?: {
          params?: { name: string }[] | null;
          worker?: {
            entrypoint?: string | null;
            environment?: string | null;
            service?: string | null;
          } | null;
        } | null;
      }
    | {
        name: string;
        type: "durable_object_namespace";
        className?: string | null;
        dispatchNamespace?: string | null;
        environment?: string | null;
        namespaceId?: string | null;
        scriptName?: string | null;
      }
    | { id: string; name: string; type: "hyperdrive" }
    | {
        name: string;
        type: "inherit";
        oldName?: string | null;
        versionId?: string | null;
      }
    | { name: string; type: "images" }
    | { json: unknown; name: string; type: "json" }
    | { name: string; namespaceId: string; type: "kv_namespace" }
    | { name: string; type: "media" }
    | { certificateId: string; name: string; type: "mtls_certificate" }
    | { name: string; text: string; type: "plain_text" }
    | { name: string; pipeline: string; type: "pipelines" }
    | { name: string; queueName: string; type: "queue" }
    | {
        name: string;
        namespaceId: string;
        simple: {
          limit: number;
          period: number;
          mitigationTimeout?: number | null;
        };
        type: "ratelimit";
      }
    | {
        bucketName: string;
        name: string;
        type: "r2_bucket";
        jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {}) | null;
      }
    | { name: string; type: "secret_text" }
    | {
        name: string;
        type: "send_email";
        allowedDestinationAddresses?: string[] | null;
        allowedSenderAddresses?: string[] | null;
        destinationAddress?: string | null;
      }
    | {
        name: string;
        service: string;
        type: "service";
        entrypoint?: string | null;
        environment?: string | null;
      }
    | { name: string; part: string; type: "text_blob" }
    | { indexName: string; name: string; type: "vectorize" }
    | { name: string; type: "version_metadata" }
    | {
        name: string;
        secretName: string;
        storeId: string;
        type: "secrets_store_secret";
      }
    | { appId: string; name: string; type: "flagship" }
    | {
        algorithm: unknown;
        format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
        name: string;
        type: "secret_key";
        usages: (
          | "encrypt"
          | "decrypt"
          | "sign"
          | "verify"
          | "deriveKey"
          | "deriveBits"
          | "wrapKey"
          | "unwrapKey"
          | (string & {})
        )[];
      }
    | {
        name: string;
        type: "workflow";
        workflowName: string;
        className?: string | null;
        scriptName?: string | null;
      }
    | { name: string; part: string; type: "wasm_module" }
    | { name: string; serviceId: string; type: "vpc_service" }
    | {
        name: string;
        type: "vpc_network";
        networkId?: string | null;
        tunnelId?: string | null;
      }
  )[];
}

export const GetDispatchNamespaceScriptBindingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          Schema.Struct({
            algorithm: Schema.Unknown,
            format: Schema.Union([
              Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
              Schema.String,
            ]),
            name: Schema.String,
            type: Schema.Literal("secret_key"),
            usages: Schema.Array(
              Schema.Union([
                Schema.Literals([
                  "encrypt",
                  "decrypt",
                  "sign",
                  "verify",
                  "deriveKey",
                  "deriveBits",
                  "wrapKey",
                  "unwrapKey",
                ]),
                Schema.String,
              ]),
            ),
          }),
          Schema.Struct({
            name: Schema.String,
            namespaceId: Schema.String,
            simple: Schema.Struct({
              limit: Schema.Number,
              period: Schema.Number,
              mitigationTimeout: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                limit: "limit",
                period: "period",
                mitigationTimeout: "mitigation_timeout",
              }),
            ),
            type: Schema.Literal("ratelimit"),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              namespaceId: "namespace_id",
              simple: "simple",
              type: "type",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            secretName: Schema.String,
            storeId: Schema.String,
            type: Schema.Literal("secrets_store_secret"),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              secretName: "secret_name",
              storeId: "store_id",
              type: "type",
            }),
          ),
          Schema.Struct({
            instanceName: Schema.String,
            name: Schema.String,
            type: Schema.Literal("ai_search"),
            namespace: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              instanceName: "instance_name",
              name: "name",
              type: "type",
              namespace: "namespace",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            namespace: Schema.String,
            type: Schema.Literal("ai_search_namespace"),
          }),
          Schema.Struct({
            dataset: Schema.String,
            name: Schema.String,
            type: Schema.Literal("analytics_engine"),
          }),
          Schema.Struct({
            databaseId: Schema.String,
            name: Schema.String,
            type: Schema.Literal("d1"),
            id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              databaseId: "database_id",
              name: "name",
              type: "type",
              id: "id",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            part: Schema.String,
            type: Schema.Literal("data_blob"),
          }),
          Schema.Struct({
            name: Schema.String,
            namespace: Schema.String,
            type: Schema.Literal("dispatch_namespace"),
            outbound: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  params: Schema.optional(
                    Schema.Union([
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                      Schema.Null,
                    ]),
                  ),
                  worker: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        entrypoint: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                        environment: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                        service: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                      }),
                      Schema.Null,
                    ]),
                  ),
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            type: Schema.Literal("hyperdrive"),
          }),
          Schema.Struct({
            json: Schema.Unknown,
            name: Schema.String,
            type: Schema.Literal("json"),
          }),
          Schema.Struct({
            name: Schema.String,
            namespaceId: Schema.String,
            type: Schema.Literal("kv_namespace"),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              namespaceId: "namespace_id",
              type: "type",
            }),
          ),
          Schema.Struct({
            certificateId: Schema.String,
            name: Schema.String,
            type: Schema.Literal("mtls_certificate"),
          }).pipe(
            Schema.encodeKeys({
              certificateId: "certificate_id",
              name: "name",
              type: "type",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            text: Schema.String,
            type: Schema.Literal("plain_text"),
          }),
          Schema.Struct({
            name: Schema.String,
            pipeline: Schema.String,
            type: Schema.Literal("pipelines"),
          }),
          Schema.Struct({
            name: Schema.String,
            queueName: Schema.String,
            type: Schema.Literal("queue"),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              queueName: "queue_name",
              type: "type",
            }),
          ),
          Schema.Struct({
            bucketName: Schema.String,
            name: Schema.String,
            type: Schema.Literal("r2_bucket"),
            jurisdiction: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["eu", "fedramp", "fedramp-high"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              bucketName: "bucket_name",
              name: "name",
              type: "type",
              jurisdiction: "jurisdiction",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            service: Schema.String,
            type: Schema.Literal("service"),
            entrypoint: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            environment: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }),
          Schema.Struct({
            name: Schema.String,
            part: Schema.String,
            type: Schema.Literal("text_blob"),
          }),
          Schema.Struct({
            indexName: Schema.String,
            name: Schema.String,
            type: Schema.Literal("vectorize"),
          }).pipe(
            Schema.encodeKeys({
              indexName: "index_name",
              name: "name",
              type: "type",
            }),
          ),
          Schema.Struct({
            appId: Schema.String,
            name: Schema.String,
            type: Schema.Literal("flagship"),
          }).pipe(
            Schema.encodeKeys({ appId: "app_id", name: "name", type: "type" }),
          ),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("workflow"),
            workflowName: Schema.String,
            className: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            scriptName: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              type: "type",
              workflowName: "workflow_name",
              className: "class_name",
              scriptName: "script_name",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            part: Schema.String,
            type: Schema.Literal("wasm_module"),
          }),
          Schema.Struct({
            name: Schema.String,
            serviceId: Schema.String,
            type: Schema.Literal("vpc_service"),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              serviceId: "service_id",
              type: "type",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("ai"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("assets"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("browser"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("durable_object_namespace"),
            className: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            dispatchNamespace: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            environment: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            namespaceId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            scriptName: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              type: "type",
              className: "class_name",
              dispatchNamespace: "dispatch_namespace",
              environment: "environment",
              namespaceId: "namespace_id",
              scriptName: "script_name",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("inherit"),
            oldName: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            versionId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              type: "type",
              oldName: "old_name",
              versionId: "version_id",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("images"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("media"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("secret_text"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("send_email"),
            allowedDestinationAddresses: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            allowedSenderAddresses: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            destinationAddress: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              type: "type",
              allowedDestinationAddresses: "allowed_destination_addresses",
              allowedSenderAddresses: "allowed_sender_addresses",
              destinationAddress: "destination_address",
            }),
          ),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("version_metadata"),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("vpc_network"),
            networkId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            tunnelId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              name: "name",
              type: "type",
              networkId: "network_id",
              tunnelId: "tunnel_id",
            }),
          ),
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptBindingResponse>;

export type GetDispatchNamespaceScriptBindingError = DefaultErrors;

export const getDispatchNamespaceScriptBinding: API.PaginatedOperationMethod<
  GetDispatchNamespaceScriptBindingRequest,
  GetDispatchNamespaceScriptBindingResponse,
  GetDispatchNamespaceScriptBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetDispatchNamespaceScriptBindingRequest,
  output: GetDispatchNamespaceScriptBindingResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// DispatchNamespaceScriptContent
// =============================================================================

export interface GetDispatchNamespaceScriptContentRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/content",
      }),
    ),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptContentRequest>;

export type GetDispatchNamespaceScriptContentResponse = unknown;

export const GetDispatchNamespaceScriptContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptContentResponse>;

export type GetDispatchNamespaceScriptContentError = DefaultErrors;

export const getDispatchNamespaceScriptContent: API.OperationMethod<
  GetDispatchNamespaceScriptContentRequest,
  GetDispatchNamespaceScriptContentResponse,
  GetDispatchNamespaceScriptContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptContentRequest,
  output: GetDispatchNamespaceScriptContentResponse,
  errors: [],
}));

export interface PutDispatchNamespaceScriptContentRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Header param: The multipart name of a script upload part containing script content in service worker format. Alternative to including in a metadata part. */
  cfworkerbodypart?: string;
  /** Header param: The multipart name of a script upload part containing script content in es module format. Alternative to including in a metadata part. */
  cfworkermainmodulepart?: string;
  /** Body param: JSON-encoded metadata about the uploaded parts and Worker configuration. */
  metadata: { bodyPart?: string; mainModule?: string };
  /** Body param: An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/ */
  files?: (File | Blob)[];
}

export const PutDispatchNamespaceScriptContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cfworkerbodypart: Schema.optional(Schema.String).pipe(
        T.HttpHeader("CF-WORKER-BODY-PART"),
      ),
      cfworkermainmodulepart: Schema.optional(Schema.String).pipe(
        T.HttpHeader("CF-WORKER-MAIN-MODULE-PART"),
      ),
      metadata: Schema.Struct({
        bodyPart: Schema.optional(Schema.String),
        mainModule: Schema.optional(Schema.String),
      }).pipe(
        Schema.encodeKeys({ bodyPart: "body_part", mainModule: "main_module" }),
      ),
      files: Schema.optional(
        Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/content",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptContentRequest>;

export interface PutDispatchNamespaceScriptContentResponse {
  /** The name used to identify the script. */
  id?: string | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** When the script was created. */
  createdOn?: string | null;
  /** Hashed script content, can be used in a If-None-Match header when updating. */
  etag?: string | null;
  /** The names of handlers exported as part of the default export. */
  handlers?: string[] | null;
  /** Whether a Worker contains assets. */
  hasAssets?: boolean | null;
  /** Whether a Worker contains modules. */
  hasModules?: boolean | null;
  /** The client most recently used to deploy this Worker. */
  lastDeployedFrom?: string | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** The tag of the Durable Object migration that was most recently applied for this Worker. */
  migrationTag?: string | null;
  /** When the script was last modified. */
  modifiedOn?: string | null;
  /** Named exports, such as Durable Object class implementations and named entrypoints. */
  namedHandlers?: { handlers?: string[] | null; name?: string | null }[] | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | {
        mode: "smart";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        region: string;
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        hostname: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        host: string;
        mode: "targeted";
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
        lastAnalyzedAt?: string | null;
        status?:
          | "SUCCESS"
          | "UNSUPPORTED_APPLICATION"
          | "INSUFFICIENT_INVOCATIONS"
          | (string & {})
          | null;
      }
    | null;
  /** @deprecated Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placementMode?: "smart" | "targeted" | (string & {}) | null;
  /** @deprecated Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). */
  placementStatus?:
    | "SUCCESS"
    | "UNSUPPORTED_APPLICATION"
    | "INSUFFICIENT_INVOCATIONS"
    | (string & {})
    | null;
  /** The immutable ID of the script. */
  tag?: string | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const PutDispatchNamespaceScriptContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      handlers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      hasAssets: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      hasModules: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastDeployedFrom: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      migrationTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namedHandlers: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              handlers: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            }),
          ),
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.Boolean,
            headSamplingRate: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                  invocationLogs: Schema.Boolean,
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    enabled: "enabled",
                    invocationLogs: "invocation_logs",
                    destinations: "destinations",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            traces: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  enabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  propagationPolicy: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["authenticated", "accept"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    destinations: "destinations",
                    enabled: "enabled",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                    propagationPolicy: "propagation_policy",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              headSamplingRate: "head_sampling_rate",
              logs: "logs",
              traces: "traces",
            }),
          ),
          Schema.Null,
        ]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              region: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                mode: "mode",
                region: "region",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              hostname: Schema.String,
              mode: Schema.Literal("targeted"),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                hostname: "hostname",
                mode: "mode",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              host: Schema.String,
              mode: Schema.Literal("targeted"),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                host: "host",
                mode: "mode",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              target: Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    region: Schema.String,
                  }),
                  Schema.Struct({
                    hostname: Schema.String,
                  }),
                  Schema.Struct({
                    host: Schema.String,
                  }),
                ]),
              ),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                mode: "mode",
                target: "target",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              mode: Schema.Literal("smart"),
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                mode: "mode",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              region: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                region: "region",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              hostname: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                hostname: "hostname",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
            Schema.Struct({
              host: Schema.String,
              lastAnalyzedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              status: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "SUCCESS",
                      "UNSUPPORTED_APPLICATION",
                      "INSUFFICIENT_INVOCATIONS",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                host: "host",
                lastAnalyzedAt: "last_analyzed_at",
                status: "status",
              }),
            ),
          ]),
          Schema.Null,
        ]),
      ),
      placementMode: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["smart", "targeted"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      placementStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "SUCCESS",
              "UNSUPPORTED_APPLICATION",
              "INSUFFICIENT_INVOCATIONS",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              service: Schema.String,
              environment: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              namespace: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          Schema.Null,
        ]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          createdOn: "created_on",
          etag: "etag",
          handlers: "handlers",
          hasAssets: "has_assets",
          hasModules: "has_modules",
          lastDeployedFrom: "last_deployed_from",
          logpush: "logpush",
          migrationTag: "migration_tag",
          modifiedOn: "modified_on",
          namedHandlers: "named_handlers",
          observability: "observability",
          placement: "placement",
          placementMode: "placement_mode",
          placementStatus: "placement_status",
          tag: "tag",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptContentResponse>;

export type PutDispatchNamespaceScriptContentError = DefaultErrors;

export const putDispatchNamespaceScriptContent: API.OperationMethod<
  PutDispatchNamespaceScriptContentRequest,
  PutDispatchNamespaceScriptContentResponse,
  PutDispatchNamespaceScriptContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDispatchNamespaceScriptContentRequest,
  output: PutDispatchNamespaceScriptContentResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptSecret
// =============================================================================

export interface GetDispatchNamespaceScriptSecretRequest {
  dispatchNamespace: string;
  scriptName: string;
  secretName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Flag that indicates whether the secret name is URL encoded. */
  urlEncoded?: boolean;
}

export const GetDispatchNamespaceScriptSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      secretName: Schema.String.pipe(T.HttpPath("secretName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      urlEncoded: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("url_encoded"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets/{secretName}",
      }),
    ),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptSecretRequest>;

export type GetDispatchNamespaceScriptSecretResponse =
  | { name: string; type: "secret_text" }
  | {
      algorithm: unknown;
      format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
      name: string;
      type: "secret_key";
      usages: (
        | "encrypt"
        | "decrypt"
        | "sign"
        | "verify"
        | "deriveKey"
        | "deriveBits"
        | "wrapKey"
        | "unwrapKey"
        | (string & {})
      )[];
    };

export const GetDispatchNamespaceScriptSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        algorithm: Schema.Unknown,
        format: Schema.Union([
          Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
          Schema.String,
        ]),
        name: Schema.String,
        type: Schema.Literal("secret_key"),
        usages: Schema.Array(
          Schema.Union([
            Schema.Literals([
              "encrypt",
              "decrypt",
              "sign",
              "verify",
              "deriveKey",
              "deriveBits",
              "wrapKey",
              "unwrapKey",
            ]),
            Schema.String,
          ]),
        ),
      }),
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literal("secret_text"),
      }),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptSecretResponse>;

export type GetDispatchNamespaceScriptSecretError = DefaultErrors;

export const getDispatchNamespaceScriptSecret: API.OperationMethod<
  GetDispatchNamespaceScriptSecretRequest,
  GetDispatchNamespaceScriptSecretResponse,
  GetDispatchNamespaceScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptSecretRequest,
  output: GetDispatchNamespaceScriptSecretResponse,
  errors: [],
}));

export interface ListDispatchNamespaceScriptSecretsRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const ListDispatchNamespaceScriptSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets",
      }),
    ),
  ) as unknown as Schema.Schema<ListDispatchNamespaceScriptSecretsRequest>;

export interface ListDispatchNamespaceScriptSecretsResponse {
  result: (
    | { name: string; type: "secret_text" }
    | {
        algorithm: unknown;
        format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
        name: string;
        type: "secret_key";
        usages: (
          | "encrypt"
          | "decrypt"
          | "sign"
          | "verify"
          | "deriveKey"
          | "deriveBits"
          | "wrapKey"
          | "unwrapKey"
          | (string & {})
        )[];
      }
  )[];
}

export const ListDispatchNamespaceScriptSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          Schema.Struct({
            algorithm: Schema.Unknown,
            format: Schema.Union([
              Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
              Schema.String,
            ]),
            name: Schema.String,
            type: Schema.Literal("secret_key"),
            usages: Schema.Array(
              Schema.Union([
                Schema.Literals([
                  "encrypt",
                  "decrypt",
                  "sign",
                  "verify",
                  "deriveKey",
                  "deriveBits",
                  "wrapKey",
                  "unwrapKey",
                ]),
                Schema.String,
              ]),
            ),
          }),
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("secret_text"),
          }),
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<ListDispatchNamespaceScriptSecretsResponse>;

export type ListDispatchNamespaceScriptSecretsError = DefaultErrors;

export const listDispatchNamespaceScriptSecrets: API.PaginatedOperationMethod<
  ListDispatchNamespaceScriptSecretsRequest,
  ListDispatchNamespaceScriptSecretsResponse,
  ListDispatchNamespaceScriptSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDispatchNamespaceScriptSecretsRequest,
  output: ListDispatchNamespaceScriptSecretsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutDispatchNamespaceScriptSecretRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: A JavaScript variable name for the binding. */
  name: string;
  /** Body param: The secret value to use. */
  text?: string;
  /** Body param: The kind of resource that the binding provides. */
  type: "secret_text" | "secret_key" | (string & {});
  /** Body param: Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). */
  algorithm?: unknown;
  /** Body param: Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). */
  format?: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
  /** Body param: Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). */
  usages?: (
    | "encrypt"
    | "decrypt"
    | "sign"
    | "verify"
    | "deriveKey"
    | "deriveBits"
    | "wrapKey"
    | "unwrapKey"
    | (string & {})
  )[];
  /** Body param: Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". */
  keyBase64?: string;
  /** Body param: Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". */
  keyJwk?: unknown;
}

export const PutDispatchNamespaceScriptSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      text: Schema.optional(Schema.String),
      type: Schema.Union([
        Schema.Literals(["secret_text", "secret_key"]),
        Schema.String,
      ]),
      algorithm: Schema.optional(Schema.Unknown),
      format: Schema.optional(
        Schema.Union([
          Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
          Schema.String,
        ]),
      ),
      usages: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "encrypt",
              "decrypt",
              "sign",
              "verify",
              "deriveKey",
              "deriveBits",
              "wrapKey",
              "unwrapKey",
            ]),
            Schema.String,
          ]),
        ),
      ),
      keyBase64: Schema.optional(Schema.String),
      keyJwk: Schema.optional(Schema.Unknown),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        text: "text",
        type: "type",
        algorithm: "algorithm",
        format: "format",
        usages: "usages",
        keyBase64: "key_base64",
        keyJwk: "key_jwk",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets",
      }),
    ),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptSecretRequest>;

export type PutDispatchNamespaceScriptSecretResponse =
  | { name: string; type: "secret_text" }
  | {
      algorithm: unknown;
      format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
      name: string;
      type: "secret_key";
      usages: (
        | "encrypt"
        | "decrypt"
        | "sign"
        | "verify"
        | "deriveKey"
        | "deriveBits"
        | "wrapKey"
        | "unwrapKey"
        | (string & {})
      )[];
    };

export const PutDispatchNamespaceScriptSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        algorithm: Schema.Unknown,
        format: Schema.Union([
          Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
          Schema.String,
        ]),
        name: Schema.String,
        type: Schema.Literal("secret_key"),
        usages: Schema.Array(
          Schema.Union([
            Schema.Literals([
              "encrypt",
              "decrypt",
              "sign",
              "verify",
              "deriveKey",
              "deriveBits",
              "wrapKey",
              "unwrapKey",
            ]),
            Schema.String,
          ]),
        ),
      }),
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literal("secret_text"),
      }),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptSecretResponse>;

export type PutDispatchNamespaceScriptSecretError = DefaultErrors;

export const putDispatchNamespaceScriptSecret: API.OperationMethod<
  PutDispatchNamespaceScriptSecretRequest,
  PutDispatchNamespaceScriptSecretResponse,
  PutDispatchNamespaceScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutDispatchNamespaceScriptSecretRequest,
  output: PutDispatchNamespaceScriptSecretResponse,
  errors: [],
}));

export interface DeleteDispatchNamespaceScriptSecretRequest {
  dispatchNamespace: string;
  scriptName: string;
  secretName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Flag that indicates whether the secret name is URL encoded. */
  urlEncoded?: boolean;
}

export const DeleteDispatchNamespaceScriptSecretRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      secretName: Schema.String.pipe(T.HttpPath("secretName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      urlEncoded: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("url_encoded"),
      ),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets/{secretName}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceScriptSecretRequest>;

export type DeleteDispatchNamespaceScriptSecretResponse = unknown;

export const DeleteDispatchNamespaceScriptSecretResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceScriptSecretResponse>;

export type DeleteDispatchNamespaceScriptSecretError = DefaultErrors;

export const deleteDispatchNamespaceScriptSecret: API.OperationMethod<
  DeleteDispatchNamespaceScriptSecretRequest,
  DeleteDispatchNamespaceScriptSecretResponse,
  DeleteDispatchNamespaceScriptSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceScriptSecretRequest,
  output: DeleteDispatchNamespaceScriptSecretResponse,
  errors: [],
}));

export interface BulkUpdateDispatchNamespaceScriptSecretsRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Map of secret names to secret values:  - Set to a secret object to create or update. - Set to `null` to delete. - Omit to leave unchanged. */
  secrets?: Record<string, unknown>;
  /** Body param: Optional version tags to apply to the new script version. */
  versionTags?: Record<string, unknown>;
}

export const BulkUpdateDispatchNamespaceScriptSecretsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      secrets: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      versionTags: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    }).pipe(
      Schema.encodeKeys({ secrets: "secrets", versionTags: "version_tags" }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/secrets-bulk",
      }),
    ),
  ) as unknown as Schema.Schema<BulkUpdateDispatchNamespaceScriptSecretsRequest>;

export type BulkUpdateDispatchNamespaceScriptSecretsResponse = Record<
  string,
  unknown
>;

export const BulkUpdateDispatchNamespaceScriptSecretsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<BulkUpdateDispatchNamespaceScriptSecretsResponse>;

export type BulkUpdateDispatchNamespaceScriptSecretsError = DefaultErrors;

export const bulkUpdateDispatchNamespaceScriptSecrets: API.OperationMethod<
  BulkUpdateDispatchNamespaceScriptSecretsRequest,
  BulkUpdateDispatchNamespaceScriptSecretsResponse,
  BulkUpdateDispatchNamespaceScriptSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkUpdateDispatchNamespaceScriptSecretsRequest,
  output: BulkUpdateDispatchNamespaceScriptSecretsResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptSetting
// =============================================================================

export interface GetDispatchNamespaceScriptSettingRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const GetDispatchNamespaceScriptSettingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/settings",
      }),
    ),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptSettingRequest>;

export interface GetDispatchNamespaceScriptSettingResponse {
  /** List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
  bindings?:
    | (
        | { name: string; type: "ai" }
        | {
            instanceName: string;
            name: string;
            type: "ai_search";
            namespace?: string | null;
          }
        | { name: string; namespace: string; type: "ai_search_namespace" }
        | { dataset: string; name: string; type: "analytics_engine" }
        | { name: string; type: "assets" }
        | { name: string; type: "browser" }
        | { databaseId: string; name: string; type: "d1"; id?: string | null }
        | { name: string; part: string; type: "data_blob" }
        | {
            name: string;
            namespace: string;
            type: "dispatch_namespace";
            outbound?: {
              params?: { name: string }[] | null;
              worker?: {
                entrypoint?: string | null;
                environment?: string | null;
                service?: string | null;
              } | null;
            } | null;
          }
        | {
            name: string;
            type: "durable_object_namespace";
            className?: string | null;
            dispatchNamespace?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
            scriptName?: string | null;
          }
        | { id: string; name: string; type: "hyperdrive" }
        | {
            name: string;
            type: "inherit";
            oldName?: string | null;
            versionId?: string | null;
          }
        | { name: string; type: "images" }
        | { json: unknown; name: string; type: "json" }
        | { name: string; namespaceId: string; type: "kv_namespace" }
        | { name: string; type: "media" }
        | { certificateId: string; name: string; type: "mtls_certificate" }
        | { name: string; text: string; type: "plain_text" }
        | { name: string; pipeline: string; type: "pipelines" }
        | { name: string; queueName: string; type: "queue" }
        | {
            name: string;
            namespaceId: string;
            simple: {
              limit: number;
              period: number;
              mitigationTimeout?: number | null;
            };
            type: "ratelimit";
          }
        | {
            bucketName: string;
            name: string;
            type: "r2_bucket";
            jurisdiction?:
              | "eu"
              | "fedramp"
              | "fedramp-high"
              | (string & {})
              | null;
          }
        | { name: string; type: "secret_text" }
        | {
            name: string;
            type: "send_email";
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
            destinationAddress?: string | null;
          }
        | {
            name: string;
            service: string;
            type: "service";
            entrypoint?: string | null;
            environment?: string | null;
          }
        | { name: string; part: string; type: "text_blob" }
        | { indexName: string; name: string; type: "vectorize" }
        | { name: string; type: "version_metadata" }
        | {
            name: string;
            secretName: string;
            storeId: string;
            type: "secrets_store_secret";
          }
        | { appId: string; name: string; type: "flagship" }
        | {
            algorithm: unknown;
            format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
            name: string;
            type: "secret_key";
            usages: (
              | "encrypt"
              | "decrypt"
              | "sign"
              | "verify"
              | "deriveKey"
              | "deriveBits"
              | "wrapKey"
              | "unwrapKey"
              | (string & {})
            )[];
          }
        | {
            name: string;
            type: "workflow";
            workflowName: string;
            className?: string | null;
            scriptName?: string | null;
          }
        | { name: string; part: string; type: "wasm_module" }
        | { name: string; serviceId: string; type: "vpc_service" }
        | {
            name: string;
            type: "vpc_network";
            networkId?: string | null;
            tunnelId?: string | null;
          }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** Limits to apply for this Worker. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | { mode: "smart" }
    | { region: string }
    | { hostname: string }
    | { host: string }
    | { mode: "targeted"; region: string }
    | { hostname: string; mode: "targeted" }
    | { host: string; mode: "targeted" }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
      }
    | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const GetDispatchNamespaceScriptSettingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bindings: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                algorithm: Schema.Unknown,
                format: Schema.Union([
                  Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
                  Schema.String,
                ]),
                name: Schema.String,
                type: Schema.Literal("secret_key"),
                usages: Schema.Array(
                  Schema.Union([
                    Schema.Literals([
                      "encrypt",
                      "decrypt",
                      "sign",
                      "verify",
                      "deriveKey",
                      "deriveBits",
                      "wrapKey",
                      "unwrapKey",
                    ]),
                    Schema.String,
                  ]),
                ),
              }),
              Schema.Struct({
                name: Schema.String,
                namespaceId: Schema.String,
                simple: Schema.Struct({
                  limit: Schema.Number,
                  period: Schema.Number,
                  mitigationTimeout: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    limit: "limit",
                    period: "period",
                    mitigationTimeout: "mitigation_timeout",
                  }),
                ),
                type: Schema.Literal("ratelimit"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  namespaceId: "namespace_id",
                  simple: "simple",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                secretName: Schema.String,
                storeId: Schema.String,
                type: Schema.Literal("secrets_store_secret"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  secretName: "secret_name",
                  storeId: "store_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                instanceName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("ai_search"),
                namespace: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  instanceName: "instance_name",
                  name: "name",
                  type: "type",
                  namespace: "namespace",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                namespace: Schema.String,
                type: Schema.Literal("ai_search_namespace"),
              }),
              Schema.Struct({
                dataset: Schema.String,
                name: Schema.String,
                type: Schema.Literal("analytics_engine"),
              }),
              Schema.Struct({
                databaseId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("d1"),
                id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              }).pipe(
                Schema.encodeKeys({
                  databaseId: "database_id",
                  name: "name",
                  type: "type",
                  id: "id",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("data_blob"),
              }),
              Schema.Struct({
                name: Schema.String,
                namespace: Schema.String,
                type: Schema.Literal("dispatch_namespace"),
                outbound: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      params: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      worker: Schema.optional(
                        Schema.Union([
                          Schema.Struct({
                            entrypoint: Schema.optional(
                              Schema.Union([Schema.String, Schema.Null]),
                            ),
                            environment: Schema.optional(
                              Schema.Union([Schema.String, Schema.Null]),
                            ),
                            service: Schema.optional(
                              Schema.Union([Schema.String, Schema.Null]),
                            ),
                          }),
                          Schema.Null,
                        ]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
              }),
              Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                type: Schema.Literal("hyperdrive"),
              }),
              Schema.Struct({
                json: Schema.Unknown,
                name: Schema.String,
                type: Schema.Literal("json"),
              }),
              Schema.Struct({
                name: Schema.String,
                namespaceId: Schema.String,
                type: Schema.Literal("kv_namespace"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  namespaceId: "namespace_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                certificateId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("mtls_certificate"),
              }).pipe(
                Schema.encodeKeys({
                  certificateId: "certificate_id",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                text: Schema.String,
                type: Schema.Literal("plain_text"),
              }),
              Schema.Struct({
                name: Schema.String,
                pipeline: Schema.String,
                type: Schema.Literal("pipelines"),
              }),
              Schema.Struct({
                name: Schema.String,
                queueName: Schema.String,
                type: Schema.Literal("queue"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  queueName: "queue_name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                bucketName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("r2_bucket"),
                jurisdiction: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["eu", "fedramp", "fedramp-high"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  bucketName: "bucket_name",
                  name: "name",
                  type: "type",
                  jurisdiction: "jurisdiction",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                service: Schema.String,
                type: Schema.Literal("service"),
                entrypoint: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                environment: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("text_blob"),
              }),
              Schema.Struct({
                indexName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("vectorize"),
              }).pipe(
                Schema.encodeKeys({
                  indexName: "index_name",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                appId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("flagship"),
              }).pipe(
                Schema.encodeKeys({
                  appId: "app_id",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("workflow"),
                workflowName: Schema.String,
                className: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                scriptName: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  workflowName: "workflow_name",
                  className: "class_name",
                  scriptName: "script_name",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("wasm_module"),
              }),
              Schema.Struct({
                name: Schema.String,
                serviceId: Schema.String,
                type: Schema.Literal("vpc_service"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  serviceId: "service_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("ai"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("assets"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("browser"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("durable_object_namespace"),
                className: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                dispatchNamespace: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                environment: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                namespaceId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                scriptName: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  className: "class_name",
                  dispatchNamespace: "dispatch_namespace",
                  environment: "environment",
                  namespaceId: "namespace_id",
                  scriptName: "script_name",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("inherit"),
                oldName: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                versionId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  oldName: "old_name",
                  versionId: "version_id",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("images"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("media"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("secret_text"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("send_email"),
                allowedDestinationAddresses: Schema.optional(
                  Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                ),
                allowedSenderAddresses: Schema.optional(
                  Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                ),
                destinationAddress: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  allowedDestinationAddresses: "allowed_destination_addresses",
                  allowedSenderAddresses: "allowed_sender_addresses",
                  destinationAddress: "destination_address",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("version_metadata"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("vpc_network"),
                networkId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                tunnelId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  networkId: "network_id",
                  tunnelId: "tunnel_id",
                }),
              ),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      limits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cpuMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            subrequests: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({ cpuMs: "cpu_ms", subrequests: "subrequests" }),
          ),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.Boolean,
            headSamplingRate: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                  invocationLogs: Schema.Boolean,
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    enabled: "enabled",
                    invocationLogs: "invocation_logs",
                    destinations: "destinations",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            traces: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  enabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  propagationPolicy: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["authenticated", "accept"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    destinations: "destinations",
                    enabled: "enabled",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                    propagationPolicy: "propagation_policy",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              headSamplingRate: "head_sampling_rate",
              logs: "logs",
              traces: "traces",
            }),
          ),
          Schema.Null,
        ]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              region: Schema.String,
            }),
            Schema.Struct({
              hostname: Schema.String,
              mode: Schema.Literal("targeted"),
            }),
            Schema.Struct({
              host: Schema.String,
              mode: Schema.Literal("targeted"),
            }),
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              target: Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    region: Schema.String,
                  }),
                  Schema.Struct({
                    hostname: Schema.String,
                  }),
                  Schema.Struct({
                    host: Schema.String,
                  }),
                ]),
              ),
            }),
            Schema.Struct({
              mode: Schema.Literal("smart"),
            }),
            Schema.Struct({
              region: Schema.String,
            }),
            Schema.Struct({
              hostname: Schema.String,
            }),
            Schema.Struct({
              host: Schema.String,
            }),
          ]),
          Schema.Null,
        ]),
      ),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              service: Schema.String,
              environment: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              namespace: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          Schema.Null,
        ]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          bindings: "bindings",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          limits: "limits",
          logpush: "logpush",
          observability: "observability",
          placement: "placement",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDispatchNamespaceScriptSettingResponse>;

export type GetDispatchNamespaceScriptSettingError = DefaultErrors;

export const getDispatchNamespaceScriptSetting: API.OperationMethod<
  GetDispatchNamespaceScriptSettingRequest,
  GetDispatchNamespaceScriptSettingResponse,
  GetDispatchNamespaceScriptSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDispatchNamespaceScriptSettingRequest,
  output: GetDispatchNamespaceScriptSettingResponse,
  errors: [],
}));

export interface PatchDispatchNamespaceScriptSettingRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Script and version settings for Workers for Platforms namespace scripts. Same as script-and-version-settings-item but without annotations, which are not supported for namespace scripts. */
  settings?: {
    bindings?: (
      | { name: string; type: "ai" }
      | {
          instanceName: string;
          name: string;
          type: "ai_search";
          namespace?: string;
        }
      | { name: string; namespace: string; type: "ai_search_namespace" }
      | { dataset: string; name: string; type: "analytics_engine" }
      | { name: string; type: "assets" }
      | { name: string; type: "browser" }
      | { databaseId: string; name: string; type: "d1"; id?: string }
      | { name: string; part: string; type: "data_blob" }
      | {
          name: string;
          namespace: string;
          type: "dispatch_namespace";
          outbound?: {
            params?: { name: string }[];
            worker?: {
              entrypoint?: string;
              environment?: string;
              service?: string;
            };
          };
        }
      | {
          name: string;
          type: "durable_object_namespace";
          className?: string;
          dispatchNamespace?: string;
          environment?: string;
          namespaceId?: string;
          scriptName?: string;
        }
      | { id: string; name: string; type: "hyperdrive" }
      | { name: string; type: "inherit"; oldName?: string; versionId?: string }
      | { name: string; type: "images" }
      | { json: unknown; name: string; type: "json" }
      | { name: string; namespaceId: string; type: "kv_namespace" }
      | { name: string; type: "media" }
      | { certificateId: string; name: string; type: "mtls_certificate" }
      | { name: string; text: string; type: "plain_text" }
      | { name: string; pipeline: string; type: "pipelines" }
      | { name: string; queueName: string; type: "queue" }
      | {
          name: string;
          namespaceId: string;
          simple: { limit: number; period: number; mitigationTimeout?: number };
          type: "ratelimit";
        }
      | {
          bucketName: string;
          name: string;
          type: "r2_bucket";
          jurisdiction?: "eu" | "fedramp" | "fedramp-high" | (string & {});
        }
      | { name: string; text: string; type: "secret_text" }
      | {
          name: string;
          type: "send_email";
          allowedDestinationAddresses?: string[];
          allowedSenderAddresses?: string[];
          destinationAddress?: string;
        }
      | {
          name: string;
          service: string;
          type: "service";
          entrypoint?: string;
          environment?: string;
        }
      | { name: string; part: string; type: "text_blob" }
      | { indexName: string; name: string; type: "vectorize" }
      | { name: string; type: "version_metadata" }
      | {
          name: string;
          secretName: string;
          storeId: string;
          type: "secrets_store_secret";
        }
      | { appId: string; name: string; type: "flagship" }
      | {
          algorithm: unknown;
          format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
          name: string;
          type: "secret_key";
          usages: (
            | "encrypt"
            | "decrypt"
            | "sign"
            | "verify"
            | "deriveKey"
            | "deriveBits"
            | "wrapKey"
            | "unwrapKey"
            | (string & {})
          )[];
          keyBase64?: string;
          keyJwk?: unknown;
        }
      | {
          name: string;
          type: "workflow";
          workflowName: string;
          className?: string;
          scriptName?: string;
        }
      | { name: string; part: string; type: "wasm_module" }
      | { name: string; serviceId: string; type: "vpc_service" }
      | {
          name: string;
          type: "vpc_network";
          networkId?: string;
          tunnelId?: string;
        }
    )[];
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    limits?: { cpuMs?: number; subrequests?: number };
    logpush?: boolean;
    migrations?:
      | {
          deletedClasses?: string[];
          newClasses?: string[];
          newSqliteClasses?: string[];
          newTag?: string;
          oldTag?: string;
          renamedClasses?: { from?: string; to?: string }[];
          transferredClasses?: {
            from?: string;
            fromScript?: string;
            to?: string;
          }[];
        }
      | {
          newTag?: string;
          oldTag?: string;
          steps?: {
            deletedClasses?: string[];
            newClasses?: string[];
            newSqliteClasses?: string[];
            renamedClasses?: { from?: string; to?: string }[];
            transferredClasses?: {
              from?: string;
              fromScript?: string;
              to?: string;
            }[];
          }[];
        };
    observability?: {
      enabled: boolean;
      headSamplingRate?: number | null;
      logs?: {
        enabled: boolean;
        invocationLogs: boolean;
        destinations?: string[];
        headSamplingRate?: number | null;
        persist?: boolean;
      } | null;
      traces?: {
        destinations?: string[];
        enabled?: boolean;
        headSamplingRate?: number | null;
        persist?: boolean;
        propagationPolicy?: "authenticated" | "accept" | (string & {});
      } | null;
    };
    placement?:
      | { mode: "smart" }
      | { region: string }
      | { hostname: string }
      | { host: string }
      | { mode: "targeted"; region: string }
      | { hostname: string; mode: "targeted" }
      | { host: string; mode: "targeted" }
      | {
          mode: "targeted";
          target: (
            | { region: string }
            | { hostname: string }
            | { host: string }
          )[];
        };
    tags?: string[] | null;
    tailConsumers?:
      | { service: string; environment?: string; namespace?: string }[]
      | null;
    usageModel?: "standard" | "bundled" | "unbound" | (string & {});
  };
}

export const PatchDispatchNamespaceScriptSettingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      settings: Schema.optional(
        Schema.Struct({
          bindings: Schema.optional(
            Schema.Array(
              Schema.Union([
                Schema.Struct({
                  algorithm: Schema.Unknown,
                  format: Schema.Union([
                    Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
                    Schema.String,
                  ]),
                  name: Schema.String,
                  type: Schema.Literal("secret_key"),
                  usages: Schema.Array(
                    Schema.Union([
                      Schema.Literals([
                        "encrypt",
                        "decrypt",
                        "sign",
                        "verify",
                        "deriveKey",
                        "deriveBits",
                        "wrapKey",
                        "unwrapKey",
                      ]),
                      Schema.String,
                    ]),
                  ),
                  keyBase64: Schema.optional(Schema.String),
                  keyJwk: Schema.optional(Schema.Unknown),
                }).pipe(
                  Schema.encodeKeys({
                    algorithm: "algorithm",
                    format: "format",
                    name: "name",
                    type: "type",
                    usages: "usages",
                    keyBase64: "key_base64",
                    keyJwk: "key_jwk",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  namespaceId: Schema.String,
                  simple: Schema.Struct({
                    limit: Schema.Number,
                    period: Schema.Number,
                    mitigationTimeout: Schema.optional(Schema.Number),
                  }).pipe(
                    Schema.encodeKeys({
                      limit: "limit",
                      period: "period",
                      mitigationTimeout: "mitigation_timeout",
                    }),
                  ),
                  type: Schema.Literal("ratelimit"),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    namespaceId: "namespace_id",
                    simple: "simple",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  secretName: Schema.String,
                  storeId: Schema.String,
                  type: Schema.Literal("secrets_store_secret"),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    secretName: "secret_name",
                    storeId: "store_id",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  instanceName: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("ai_search"),
                  namespace: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    instanceName: "instance_name",
                    name: "name",
                    type: "type",
                    namespace: "namespace",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  namespace: Schema.String,
                  type: Schema.Literal("ai_search_namespace"),
                }),
                Schema.Struct({
                  dataset: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("analytics_engine"),
                }),
                Schema.Struct({
                  databaseId: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("d1"),
                  id: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    databaseId: "database_id",
                    name: "name",
                    type: "type",
                    id: "id",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  part: Schema.String,
                  type: Schema.Literal("data_blob"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  namespace: Schema.String,
                  type: Schema.Literal("dispatch_namespace"),
                  outbound: Schema.optional(
                    Schema.Struct({
                      params: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.String,
                          }),
                        ),
                      ),
                      worker: Schema.optional(
                        Schema.Struct({
                          entrypoint: Schema.optional(Schema.String),
                          environment: Schema.optional(Schema.String),
                          service: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                }),
                Schema.Struct({
                  id: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("hyperdrive"),
                }),
                Schema.Struct({
                  json: Schema.Unknown,
                  name: Schema.String,
                  type: Schema.Literal("json"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  namespaceId: Schema.String,
                  type: Schema.Literal("kv_namespace"),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    namespaceId: "namespace_id",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  certificateId: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("mtls_certificate"),
                }).pipe(
                  Schema.encodeKeys({
                    certificateId: "certificate_id",
                    name: "name",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  text: Schema.String,
                  type: Schema.Literal("plain_text"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  pipeline: Schema.String,
                  type: Schema.Literal("pipelines"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  queueName: Schema.String,
                  type: Schema.Literal("queue"),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    queueName: "queue_name",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  bucketName: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("r2_bucket"),
                  jurisdiction: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["eu", "fedramp", "fedramp-high"]),
                      Schema.String,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    bucketName: "bucket_name",
                    name: "name",
                    type: "type",
                    jurisdiction: "jurisdiction",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  text: Schema.String,
                  type: Schema.Literal("secret_text"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  service: Schema.String,
                  type: Schema.Literal("service"),
                  entrypoint: Schema.optional(Schema.String),
                  environment: Schema.optional(Schema.String),
                }),
                Schema.Struct({
                  name: Schema.String,
                  part: Schema.String,
                  type: Schema.Literal("text_blob"),
                }),
                Schema.Struct({
                  indexName: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("vectorize"),
                }).pipe(
                  Schema.encodeKeys({
                    indexName: "index_name",
                    name: "name",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  appId: Schema.String,
                  name: Schema.String,
                  type: Schema.Literal("flagship"),
                }).pipe(
                  Schema.encodeKeys({
                    appId: "app_id",
                    name: "name",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("workflow"),
                  workflowName: Schema.String,
                  className: Schema.optional(Schema.String),
                  scriptName: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    type: "type",
                    workflowName: "workflow_name",
                    className: "class_name",
                    scriptName: "script_name",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  part: Schema.String,
                  type: Schema.Literal("wasm_module"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  serviceId: Schema.String,
                  type: Schema.Literal("vpc_service"),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    serviceId: "service_id",
                    type: "type",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("ai"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("assets"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("browser"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("durable_object_namespace"),
                  className: Schema.optional(Schema.String),
                  dispatchNamespace: Schema.optional(Schema.String),
                  environment: Schema.optional(Schema.String),
                  namespaceId: Schema.optional(Schema.String),
                  scriptName: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    type: "type",
                    className: "class_name",
                    dispatchNamespace: "dispatch_namespace",
                    environment: "environment",
                    namespaceId: "namespace_id",
                    scriptName: "script_name",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("inherit"),
                  oldName: Schema.optional(Schema.String),
                  versionId: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    type: "type",
                    oldName: "old_name",
                    versionId: "version_id",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("images"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("media"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("send_email"),
                  allowedDestinationAddresses: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  allowedSenderAddresses: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  destinationAddress: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    type: "type",
                    allowedDestinationAddresses:
                      "allowed_destination_addresses",
                    allowedSenderAddresses: "allowed_sender_addresses",
                    destinationAddress: "destination_address",
                  }),
                ),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("version_metadata"),
                }),
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literal("vpc_network"),
                  networkId: Schema.optional(Schema.String),
                  tunnelId: Schema.optional(Schema.String),
                }).pipe(
                  Schema.encodeKeys({
                    name: "name",
                    type: "type",
                    networkId: "network_id",
                    tunnelId: "tunnel_id",
                  }),
                ),
              ]),
            ),
          ),
          compatibilityDate: Schema.optional(Schema.String),
          compatibilityFlags: Schema.optional(Schema.Array(Schema.String)),
          limits: Schema.optional(
            Schema.Struct({
              cpuMs: Schema.optional(Schema.Number),
              subrequests: Schema.optional(Schema.Number),
            }).pipe(
              Schema.encodeKeys({
                cpuMs: "cpu_ms",
                subrequests: "subrequests",
              }),
            ),
          ),
          logpush: Schema.optional(Schema.Boolean),
          migrations: Schema.optional(
            Schema.Union([
              Schema.Struct({
                deletedClasses: Schema.optional(Schema.Array(Schema.String)),
                newClasses: Schema.optional(Schema.Array(Schema.String)),
                newSqliteClasses: Schema.optional(Schema.Array(Schema.String)),
                newTag: Schema.optional(Schema.String),
                oldTag: Schema.optional(Schema.String),
                renamedClasses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      from: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                transferredClasses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      from: Schema.optional(Schema.String),
                      fromScript: Schema.optional(Schema.String),
                      to: Schema.optional(Schema.String),
                    }).pipe(
                      Schema.encodeKeys({
                        from: "from",
                        fromScript: "from_script",
                        to: "to",
                      }),
                    ),
                  ),
                ),
              }).pipe(
                Schema.encodeKeys({
                  deletedClasses: "deleted_classes",
                  newClasses: "new_classes",
                  newSqliteClasses: "new_sqlite_classes",
                  newTag: "new_tag",
                  oldTag: "old_tag",
                  renamedClasses: "renamed_classes",
                  transferredClasses: "transferred_classes",
                }),
              ),
              Schema.Struct({
                newTag: Schema.optional(Schema.String),
                oldTag: Schema.optional(Schema.String),
                steps: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      deletedClasses: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      newClasses: Schema.optional(Schema.Array(Schema.String)),
                      newSqliteClasses: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      renamedClasses: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            from: Schema.optional(Schema.String),
                            to: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      transferredClasses: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            from: Schema.optional(Schema.String),
                            fromScript: Schema.optional(Schema.String),
                            to: Schema.optional(Schema.String),
                          }).pipe(
                            Schema.encodeKeys({
                              from: "from",
                              fromScript: "from_script",
                              to: "to",
                            }),
                          ),
                        ),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        deletedClasses: "deleted_classes",
                        newClasses: "new_classes",
                        newSqliteClasses: "new_sqlite_classes",
                        renamedClasses: "renamed_classes",
                        transferredClasses: "transferred_classes",
                      }),
                    ),
                  ),
                ),
              }).pipe(
                Schema.encodeKeys({
                  newTag: "new_tag",
                  oldTag: "old_tag",
                  steps: "steps",
                }),
              ),
            ]),
          ),
          observability: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
              headSamplingRate: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              logs: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    enabled: Schema.Boolean,
                    invocationLogs: Schema.Boolean,
                    destinations: Schema.optional(Schema.Array(Schema.String)),
                    headSamplingRate: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    persist: Schema.optional(Schema.Boolean),
                  }).pipe(
                    Schema.encodeKeys({
                      enabled: "enabled",
                      invocationLogs: "invocation_logs",
                      destinations: "destinations",
                      headSamplingRate: "head_sampling_rate",
                      persist: "persist",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
              traces: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    destinations: Schema.optional(Schema.Array(Schema.String)),
                    enabled: Schema.optional(Schema.Boolean),
                    headSamplingRate: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    persist: Schema.optional(Schema.Boolean),
                    propagationPolicy: Schema.optional(
                      Schema.Union([
                        Schema.Literals(["authenticated", "accept"]),
                        Schema.String,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      destinations: "destinations",
                      enabled: "enabled",
                      headSamplingRate: "head_sampling_rate",
                      persist: "persist",
                      propagationPolicy: "propagation_policy",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                enabled: "enabled",
                headSamplingRate: "head_sampling_rate",
                logs: "logs",
                traces: "traces",
              }),
            ),
          ),
          placement: Schema.optional(
            Schema.Union([
              Schema.Struct({
                mode: Schema.Literal("targeted"),
                region: Schema.String,
              }),
              Schema.Struct({
                hostname: Schema.String,
                mode: Schema.Literal("targeted"),
              }),
              Schema.Struct({
                host: Schema.String,
                mode: Schema.Literal("targeted"),
              }),
              Schema.Struct({
                mode: Schema.Literal("targeted"),
                target: Schema.Array(
                  Schema.Union([
                    Schema.Struct({
                      region: Schema.String,
                    }),
                    Schema.Struct({
                      hostname: Schema.String,
                    }),
                    Schema.Struct({
                      host: Schema.String,
                    }),
                  ]),
                ),
              }),
              Schema.Struct({
                mode: Schema.Literal("smart"),
              }),
              Schema.Struct({
                region: Schema.String,
              }),
              Schema.Struct({
                hostname: Schema.String,
              }),
              Schema.Struct({
                host: Schema.String,
              }),
            ]),
          ),
          tags: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          tailConsumers: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  service: Schema.String,
                  environment: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                }),
              ),
              Schema.Null,
            ]),
          ),
          usageModel: Schema.optional(
            Schema.Union([
              Schema.Literals(["standard", "bundled", "unbound"]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            bindings: "bindings",
            compatibilityDate: "compatibility_date",
            compatibilityFlags: "compatibility_flags",
            limits: "limits",
            logpush: "logpush",
            migrations: "migrations",
            observability: "observability",
            placement: "placement",
            tags: "tags",
            tailConsumers: "tail_consumers",
            usageModel: "usage_model",
          }),
        ),
      ),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/settings",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Schema<PatchDispatchNamespaceScriptSettingRequest>;

export interface PatchDispatchNamespaceScriptSettingResponse {
  /** List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. */
  bindings?:
    | (
        | { name: string; type: "ai" }
        | {
            instanceName: string;
            name: string;
            type: "ai_search";
            namespace?: string | null;
          }
        | { name: string; namespace: string; type: "ai_search_namespace" }
        | { dataset: string; name: string; type: "analytics_engine" }
        | { name: string; type: "assets" }
        | { name: string; type: "browser" }
        | { databaseId: string; name: string; type: "d1"; id?: string | null }
        | { name: string; part: string; type: "data_blob" }
        | {
            name: string;
            namespace: string;
            type: "dispatch_namespace";
            outbound?: {
              params?: { name: string }[] | null;
              worker?: {
                entrypoint?: string | null;
                environment?: string | null;
                service?: string | null;
              } | null;
            } | null;
          }
        | {
            name: string;
            type: "durable_object_namespace";
            className?: string | null;
            dispatchNamespace?: string | null;
            environment?: string | null;
            namespaceId?: string | null;
            scriptName?: string | null;
          }
        | { id: string; name: string; type: "hyperdrive" }
        | {
            name: string;
            type: "inherit";
            oldName?: string | null;
            versionId?: string | null;
          }
        | { name: string; type: "images" }
        | { json: unknown; name: string; type: "json" }
        | { name: string; namespaceId: string; type: "kv_namespace" }
        | { name: string; type: "media" }
        | { certificateId: string; name: string; type: "mtls_certificate" }
        | { name: string; text: string; type: "plain_text" }
        | { name: string; pipeline: string; type: "pipelines" }
        | { name: string; queueName: string; type: "queue" }
        | {
            name: string;
            namespaceId: string;
            simple: {
              limit: number;
              period: number;
              mitigationTimeout?: number | null;
            };
            type: "ratelimit";
          }
        | {
            bucketName: string;
            name: string;
            type: "r2_bucket";
            jurisdiction?:
              | "eu"
              | "fedramp"
              | "fedramp-high"
              | (string & {})
              | null;
          }
        | { name: string; type: "secret_text" }
        | {
            name: string;
            type: "send_email";
            allowedDestinationAddresses?: string[] | null;
            allowedSenderAddresses?: string[] | null;
            destinationAddress?: string | null;
          }
        | {
            name: string;
            service: string;
            type: "service";
            entrypoint?: string | null;
            environment?: string | null;
          }
        | { name: string; part: string; type: "text_blob" }
        | { indexName: string; name: string; type: "vectorize" }
        | { name: string; type: "version_metadata" }
        | {
            name: string;
            secretName: string;
            storeId: string;
            type: "secrets_store_secret";
          }
        | { appId: string; name: string; type: "flagship" }
        | {
            algorithm: unknown;
            format: "raw" | "pkcs8" | "spki" | "jwk" | (string & {});
            name: string;
            type: "secret_key";
            usages: (
              | "encrypt"
              | "decrypt"
              | "sign"
              | "verify"
              | "deriveKey"
              | "deriveBits"
              | "wrapKey"
              | "unwrapKey"
              | (string & {})
            )[];
          }
        | {
            name: string;
            type: "workflow";
            workflowName: string;
            className?: string | null;
            scriptName?: string | null;
          }
        | { name: string; part: string; type: "wasm_module" }
        | { name: string; serviceId: string; type: "vpc_service" }
        | {
            name: string;
            type: "vpc_network";
            networkId?: string | null;
            tunnelId?: string | null;
          }
      )[]
    | null;
  /** Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker. */
  compatibilityDate?: string | null;
  /** Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`. */
  compatibilityFlags?: string[] | null;
  /** Limits to apply for this Worker. */
  limits?: { cpuMs?: number | null; subrequests?: number | null } | null;
  /** Whether Logpush is turned on for the Worker. */
  logpush?: boolean | null;
  /** Observability settings for the Worker. */
  observability?: {
    enabled: boolean;
    headSamplingRate?: number | null;
    logs?: {
      enabled: boolean;
      invocationLogs: boolean;
      destinations?: string[] | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
    } | null;
    traces?: {
      destinations?: string[] | null;
      enabled?: boolean | null;
      headSamplingRate?: number | null;
      persist?: boolean | null;
      propagationPolicy?: "authenticated" | "accept" | (string & {}) | null;
    } | null;
  } | null;
  /** Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. */
  placement?:
    | { mode: "smart" }
    | { region: string }
    | { hostname: string }
    | { host: string }
    | { mode: "targeted"; region: string }
    | { hostname: string; mode: "targeted" }
    | { host: string; mode: "targeted" }
    | {
        mode: "targeted";
        target: (
          | { region: string }
          | { hostname: string }
          | { host: string }
        )[];
      }
    | null;
  /** Tags associated with the Worker. */
  tags?: string[] | null;
  /** List of Workers that will consume logs from the attached Worker. */
  tailConsumers?:
    | {
        service: string;
        environment?: string | null;
        namespace?: string | null;
      }[]
    | null;
  /** Usage model for the Worker invocations. */
  usageModel?: "standard" | "bundled" | "unbound" | (string & {}) | null;
}

export const PatchDispatchNamespaceScriptSettingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bindings: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                algorithm: Schema.Unknown,
                format: Schema.Union([
                  Schema.Literals(["raw", "pkcs8", "spki", "jwk"]),
                  Schema.String,
                ]),
                name: Schema.String,
                type: Schema.Literal("secret_key"),
                usages: Schema.Array(
                  Schema.Union([
                    Schema.Literals([
                      "encrypt",
                      "decrypt",
                      "sign",
                      "verify",
                      "deriveKey",
                      "deriveBits",
                      "wrapKey",
                      "unwrapKey",
                    ]),
                    Schema.String,
                  ]),
                ),
              }),
              Schema.Struct({
                name: Schema.String,
                namespaceId: Schema.String,
                simple: Schema.Struct({
                  limit: Schema.Number,
                  period: Schema.Number,
                  mitigationTimeout: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    limit: "limit",
                    period: "period",
                    mitigationTimeout: "mitigation_timeout",
                  }),
                ),
                type: Schema.Literal("ratelimit"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  namespaceId: "namespace_id",
                  simple: "simple",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                secretName: Schema.String,
                storeId: Schema.String,
                type: Schema.Literal("secrets_store_secret"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  secretName: "secret_name",
                  storeId: "store_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                instanceName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("ai_search"),
                namespace: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  instanceName: "instance_name",
                  name: "name",
                  type: "type",
                  namespace: "namespace",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                namespace: Schema.String,
                type: Schema.Literal("ai_search_namespace"),
              }),
              Schema.Struct({
                dataset: Schema.String,
                name: Schema.String,
                type: Schema.Literal("analytics_engine"),
              }),
              Schema.Struct({
                databaseId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("d1"),
                id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              }).pipe(
                Schema.encodeKeys({
                  databaseId: "database_id",
                  name: "name",
                  type: "type",
                  id: "id",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("data_blob"),
              }),
              Schema.Struct({
                name: Schema.String,
                namespace: Schema.String,
                type: Schema.Literal("dispatch_namespace"),
                outbound: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      params: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      worker: Schema.optional(
                        Schema.Union([
                          Schema.Struct({
                            entrypoint: Schema.optional(
                              Schema.Union([Schema.String, Schema.Null]),
                            ),
                            environment: Schema.optional(
                              Schema.Union([Schema.String, Schema.Null]),
                            ),
                            service: Schema.optional(
                              Schema.Union([Schema.String, Schema.Null]),
                            ),
                          }),
                          Schema.Null,
                        ]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
              }),
              Schema.Struct({
                id: Schema.String,
                name: Schema.String,
                type: Schema.Literal("hyperdrive"),
              }),
              Schema.Struct({
                json: Schema.Unknown,
                name: Schema.String,
                type: Schema.Literal("json"),
              }),
              Schema.Struct({
                name: Schema.String,
                namespaceId: Schema.String,
                type: Schema.Literal("kv_namespace"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  namespaceId: "namespace_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                certificateId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("mtls_certificate"),
              }).pipe(
                Schema.encodeKeys({
                  certificateId: "certificate_id",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                text: Schema.String,
                type: Schema.Literal("plain_text"),
              }),
              Schema.Struct({
                name: Schema.String,
                pipeline: Schema.String,
                type: Schema.Literal("pipelines"),
              }),
              Schema.Struct({
                name: Schema.String,
                queueName: Schema.String,
                type: Schema.Literal("queue"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  queueName: "queue_name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                bucketName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("r2_bucket"),
                jurisdiction: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["eu", "fedramp", "fedramp-high"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  bucketName: "bucket_name",
                  name: "name",
                  type: "type",
                  jurisdiction: "jurisdiction",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                service: Schema.String,
                type: Schema.Literal("service"),
                entrypoint: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                environment: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("text_blob"),
              }),
              Schema.Struct({
                indexName: Schema.String,
                name: Schema.String,
                type: Schema.Literal("vectorize"),
              }).pipe(
                Schema.encodeKeys({
                  indexName: "index_name",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                appId: Schema.String,
                name: Schema.String,
                type: Schema.Literal("flagship"),
              }).pipe(
                Schema.encodeKeys({
                  appId: "app_id",
                  name: "name",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("workflow"),
                workflowName: Schema.String,
                className: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                scriptName: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  workflowName: "workflow_name",
                  className: "class_name",
                  scriptName: "script_name",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                part: Schema.String,
                type: Schema.Literal("wasm_module"),
              }),
              Schema.Struct({
                name: Schema.String,
                serviceId: Schema.String,
                type: Schema.Literal("vpc_service"),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  serviceId: "service_id",
                  type: "type",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("ai"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("assets"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("browser"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("durable_object_namespace"),
                className: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                dispatchNamespace: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                environment: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                namespaceId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                scriptName: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  className: "class_name",
                  dispatchNamespace: "dispatch_namespace",
                  environment: "environment",
                  namespaceId: "namespace_id",
                  scriptName: "script_name",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("inherit"),
                oldName: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                versionId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  oldName: "old_name",
                  versionId: "version_id",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("images"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("media"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("secret_text"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("send_email"),
                allowedDestinationAddresses: Schema.optional(
                  Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                ),
                allowedSenderAddresses: Schema.optional(
                  Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                ),
                destinationAddress: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  allowedDestinationAddresses: "allowed_destination_addresses",
                  allowedSenderAddresses: "allowed_sender_addresses",
                  destinationAddress: "destination_address",
                }),
              ),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("version_metadata"),
              }),
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("vpc_network"),
                networkId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                tunnelId: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  name: "name",
                  type: "type",
                  networkId: "network_id",
                  tunnelId: "tunnel_id",
                }),
              ),
            ]),
          ),
          Schema.Null,
        ]),
      ),
      compatibilityDate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      compatibilityFlags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      limits: Schema.optional(
        Schema.Union([
          Schema.Struct({
            cpuMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            subrequests: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({ cpuMs: "cpu_ms", subrequests: "subrequests" }),
          ),
          Schema.Null,
        ]),
      ),
      logpush: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            enabled: Schema.Boolean,
            headSamplingRate: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                  invocationLogs: Schema.Boolean,
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    enabled: "enabled",
                    invocationLogs: "invocation_logs",
                    destinations: "destinations",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            traces: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  destinations: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                  enabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  headSamplingRate: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  persist: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                  propagationPolicy: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["authenticated", "accept"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    destinations: "destinations",
                    enabled: "enabled",
                    headSamplingRate: "head_sampling_rate",
                    persist: "persist",
                    propagationPolicy: "propagation_policy",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              headSamplingRate: "head_sampling_rate",
              logs: "logs",
              traces: "traces",
            }),
          ),
          Schema.Null,
        ]),
      ),
      placement: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              region: Schema.String,
            }),
            Schema.Struct({
              hostname: Schema.String,
              mode: Schema.Literal("targeted"),
            }),
            Schema.Struct({
              host: Schema.String,
              mode: Schema.Literal("targeted"),
            }),
            Schema.Struct({
              mode: Schema.Literal("targeted"),
              target: Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    region: Schema.String,
                  }),
                  Schema.Struct({
                    hostname: Schema.String,
                  }),
                  Schema.Struct({
                    host: Schema.String,
                  }),
                ]),
              ),
            }),
            Schema.Struct({
              mode: Schema.Literal("smart"),
            }),
            Schema.Struct({
              region: Schema.String,
            }),
            Schema.Struct({
              hostname: Schema.String,
            }),
            Schema.Struct({
              host: Schema.String,
            }),
          ]),
          Schema.Null,
        ]),
      ),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      tailConsumers: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              service: Schema.String,
              environment: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              namespace: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          Schema.Null,
        ]),
      ),
      usageModel: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["standard", "bundled", "unbound"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          bindings: "bindings",
          compatibilityDate: "compatibility_date",
          compatibilityFlags: "compatibility_flags",
          limits: "limits",
          logpush: "logpush",
          observability: "observability",
          placement: "placement",
          tags: "tags",
          tailConsumers: "tail_consumers",
          usageModel: "usage_model",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchDispatchNamespaceScriptSettingResponse>;

export type PatchDispatchNamespaceScriptSettingError = DefaultErrors;

export const patchDispatchNamespaceScriptSetting: API.OperationMethod<
  PatchDispatchNamespaceScriptSettingRequest,
  PatchDispatchNamespaceScriptSettingResponse,
  PatchDispatchNamespaceScriptSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDispatchNamespaceScriptSettingRequest,
  output: PatchDispatchNamespaceScriptSettingResponse,
  errors: [],
}));

// =============================================================================
// DispatchNamespaceScriptTag
// =============================================================================

export interface ListDispatchNamespaceScriptTagsRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Identifier. */
  accountId: string;
}

export const ListDispatchNamespaceScriptTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/tags",
      }),
    ),
  ) as unknown as Schema.Schema<ListDispatchNamespaceScriptTagsRequest>;

export interface ListDispatchNamespaceScriptTagsResponse {
  result: string[];
}

export const ListDispatchNamespaceScriptTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Schema<ListDispatchNamespaceScriptTagsResponse>;

export type ListDispatchNamespaceScriptTagsError = DefaultErrors;

export const listDispatchNamespaceScriptTags: API.PaginatedOperationMethod<
  ListDispatchNamespaceScriptTagsRequest,
  ListDispatchNamespaceScriptTagsResponse,
  ListDispatchNamespaceScriptTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDispatchNamespaceScriptTagsRequest,
  output: ListDispatchNamespaceScriptTagsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutDispatchNamespaceScriptTagRequest {
  dispatchNamespace: string;
  scriptName: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Tags associated with the Worker. */
  body: string[] | null;
}

export const PutDispatchNamespaceScriptTagRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Union([Schema.Array(Schema.String), Schema.Null]).pipe(
        T.HttpBody(),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/tags",
      }),
    ),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptTagRequest>;

export interface PutDispatchNamespaceScriptTagResponse {
  result: string[];
}

export const PutDispatchNamespaceScriptTagResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Schema<PutDispatchNamespaceScriptTagResponse>;

export type PutDispatchNamespaceScriptTagError = DefaultErrors;

export const putDispatchNamespaceScriptTag: API.PaginatedOperationMethod<
  PutDispatchNamespaceScriptTagRequest,
  PutDispatchNamespaceScriptTagResponse,
  PutDispatchNamespaceScriptTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: PutDispatchNamespaceScriptTagRequest,
  output: PutDispatchNamespaceScriptTagResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface DeleteDispatchNamespaceScriptTagRequest {
  dispatchNamespace: string;
  scriptName: string;
  tag: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteDispatchNamespaceScriptTagRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dispatchNamespace: Schema.String.pipe(T.HttpPath("dispatchNamespace")),
      scriptName: Schema.String.pipe(T.HttpPath("scriptName")),
      tag: Schema.String.pipe(T.HttpPath("tag")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/workers/dispatch/namespaces/{dispatchNamespace}/scripts/{scriptName}/tags/{tag}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceScriptTagRequest>;

export type DeleteDispatchNamespaceScriptTagResponse = unknown;

export const DeleteDispatchNamespaceScriptTagResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteDispatchNamespaceScriptTagResponse>;

export type DeleteDispatchNamespaceScriptTagError = DefaultErrors;

export const deleteDispatchNamespaceScriptTag: API.OperationMethod<
  DeleteDispatchNamespaceScriptTagRequest,
  DeleteDispatchNamespaceScriptTagResponse,
  DeleteDispatchNamespaceScriptTagError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDispatchNamespaceScriptTagRequest,
  output: DeleteDispatchNamespaceScriptTagResponse,
  errors: [],
}));
