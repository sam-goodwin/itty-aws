/**
 * Cloudflare CONNECTIVITY API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service connectivity
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

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class VpcServiceNameAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VpcServiceNameAlreadyExists>()(
    "VpcServiceNameAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 5101, message: { includes: "already exists" } }],
) {}

export class VpcServiceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VpcServiceNotFound>()("VpcServiceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 5104 }],
) {}

export class VpcTunnelNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<VpcTunnelNotFound>()("VpcTunnelNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 5101, message: { includes: "Tunnel ID Not Found" } }],
) {}

// =============================================================================
// DirectoryService
// =============================================================================

export interface GetDirectoryServiceRequest {
  serviceId: string;
  accountId: string;
}

export const GetDirectoryServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      serviceId: Schema.String.pipe(T.HttpPath("serviceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/connectivity/directory/services/{serviceId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetDirectoryServiceRequest>;

export type GetDirectoryServiceResponse =
  | {
      host:
        | { ipv4: string; network: { tunnelId: string } }
        | { ipv6: string; network: { tunnelId: string } }
        | { ipv4: string; ipv6: string; network: { tunnelId: string } }
        | {
            hostname: string;
            resolverNetwork: {
              tunnelId: string;
              resolverIps?: string[] | null;
            };
          };
      name: string;
      type: "tcp" | "http" | (string & {});
      createdAt?: string | null;
      httpPort?: number | null;
      httpsPort?: number | null;
      serviceId?: string | null;
      tlsSettings?: { certVerificationMode: string } | null;
      updatedAt?: string | null;
      tcpPort?: number | null;
      appProtocol?: "postgresql" | "mysql" | null;
    }
  | {
      host:
        | { ipv4: string; network: { tunnelId: string } }
        | { ipv6: string; network: { tunnelId: string } }
        | { ipv4: string; ipv6: string; network: { tunnelId: string } }
        | {
            hostname: string;
            resolverNetwork: {
              tunnelId: string;
              resolverIps?: string[] | null;
            };
          };
      name: string;
      type: "tcp" | "http" | (string & {});
      appProtocol?: "postgresql" | "mysql" | null;
      createdAt?: string | null;
      serviceId?: string | null;
      tcpPort?: number | null;
      tlsSettings?: { certVerificationMode: string } | null;
      updatedAt?: string | null;
      httpPort?: number | null;
      httpsPort?: number | null;
    };

export const GetDirectoryServiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        host: Schema.Union([
          Schema.Struct({
            ipv4: Schema.String,
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv4: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            hostname: Schema.String,
            resolverNetwork: Schema.Struct({
              tunnelId: Schema.String,
              resolverIps: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                tunnelId: "tunnel_id",
                resolverIps: "resolver_ips",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              hostname: "hostname",
              resolverNetwork: "resolver_network",
            }),
          ),
        ]),
        name: Schema.String,
        type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        serviceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tlsSettings: Schema.optional(
          Schema.Union([
            Schema.Struct({
              certVerificationMode: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                certVerificationMode: "cert_verification_mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        appProtocol: Schema.optional(
          Schema.Union([
            Schema.Literal("postgresql"),
            Schema.Literal("mysql"),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          host: "host",
          name: "name",
          type: "type",
          createdAt: "created_at",
          httpPort: "http_port",
          httpsPort: "https_port",
          serviceId: "service_id",
          tlsSettings: "tls_settings",
          updatedAt: "updated_at",
          tcpPort: "tcp_port",
          appProtocol: "app_protocol",
        }),
      ),
      Schema.Struct({
        host: Schema.Union([
          Schema.Struct({
            ipv4: Schema.String,
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv4: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            hostname: Schema.String,
            resolverNetwork: Schema.Struct({
              tunnelId: Schema.String,
              resolverIps: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                tunnelId: "tunnel_id",
                resolverIps: "resolver_ips",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              hostname: "hostname",
              resolverNetwork: "resolver_network",
            }),
          ),
        ]),
        name: Schema.String,
        type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
        appProtocol: Schema.optional(
          Schema.Union([
            Schema.Literal("postgresql"),
            Schema.Literal("mysql"),
            Schema.Null,
          ]),
        ),
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        serviceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        tlsSettings: Schema.optional(
          Schema.Union([
            Schema.Struct({
              certVerificationMode: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                certVerificationMode: "cert_verification_mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          host: "host",
          name: "name",
          type: "type",
          appProtocol: "app_protocol",
          createdAt: "created_at",
          serviceId: "service_id",
          tcpPort: "tcp_port",
          tlsSettings: "tls_settings",
          updatedAt: "updated_at",
          httpPort: "http_port",
          httpsPort: "https_port",
        }),
      ),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDirectoryServiceResponse>;

export type GetDirectoryServiceError =
  | DefaultErrors
  | VpcServiceNotFound
  | Forbidden;

export const getDirectoryService: API.OperationMethod<
  GetDirectoryServiceRequest,
  GetDirectoryServiceResponse,
  GetDirectoryServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDirectoryServiceRequest,
  output: GetDirectoryServiceResponse,
  errors: [VpcServiceNotFound, Forbidden],
}));

export interface ListDirectoryServicesRequest {
  /** Path param: Account identifier */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  type?: "tcp" | "http" | null;
}

export const ListDirectoryServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("tcp"),
          Schema.Literal("http"),
          Schema.Null,
        ]),
      ).pipe(T.HttpQuery("type")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/connectivity/directory/services",
      }),
    ),
  ) as unknown as Schema.Schema<ListDirectoryServicesRequest>;

export interface ListDirectoryServicesResponse {
  result: (
    | {
        host:
          | { ipv4: string; network: { tunnelId: string } }
          | { ipv6: string; network: { tunnelId: string } }
          | { ipv4: string; ipv6: string; network: { tunnelId: string } }
          | {
              hostname: string;
              resolverNetwork: {
                tunnelId: string;
                resolverIps?: string[] | null;
              };
            };
        name: string;
        type: "tcp" | "http" | (string & {});
        createdAt?: string | null;
        httpPort?: number | null;
        httpsPort?: number | null;
        serviceId?: string | null;
        tlsSettings?: { certVerificationMode: string } | null;
        updatedAt?: string | null;
        tcpPort?: number | null;
        appProtocol?: "postgresql" | "mysql" | null;
      }
    | {
        host:
          | { ipv4: string; network: { tunnelId: string } }
          | { ipv6: string; network: { tunnelId: string } }
          | { ipv4: string; ipv6: string; network: { tunnelId: string } }
          | {
              hostname: string;
              resolverNetwork: {
                tunnelId: string;
                resolverIps?: string[] | null;
              };
            };
        name: string;
        type: "tcp" | "http" | (string & {});
        appProtocol?: "postgresql" | "mysql" | null;
        createdAt?: string | null;
        serviceId?: string | null;
        tcpPort?: number | null;
        tlsSettings?: { certVerificationMode: string } | null;
        updatedAt?: string | null;
        httpPort?: number | null;
        httpsPort?: number | null;
      }
  )[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListDirectoryServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          Schema.Struct({
            host: Schema.Union([
              Schema.Struct({
                ipv4: Schema.String,
                ipv6: Schema.String,
                network: Schema.Struct({
                  tunnelId: Schema.String,
                }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
              }),
              Schema.Struct({
                ipv4: Schema.String,
                network: Schema.Struct({
                  tunnelId: Schema.String,
                }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
              }),
              Schema.Struct({
                ipv6: Schema.String,
                network: Schema.Struct({
                  tunnelId: Schema.String,
                }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
              }),
              Schema.Struct({
                hostname: Schema.String,
                resolverNetwork: Schema.Struct({
                  tunnelId: Schema.String,
                  resolverIps: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    tunnelId: "tunnel_id",
                    resolverIps: "resolver_ips",
                  }),
                ),
              }).pipe(
                Schema.encodeKeys({
                  hostname: "hostname",
                  resolverNetwork: "resolver_network",
                }),
              ),
            ]),
            name: Schema.String,
            type: Schema.Union([
              Schema.Literals(["tcp", "http"]),
              Schema.String,
            ]),
            createdAt: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            httpPort: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            httpsPort: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            serviceId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            tlsSettings: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  certVerificationMode: Schema.String,
                }).pipe(
                  Schema.encodeKeys({
                    certVerificationMode: "cert_verification_mode",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            updatedAt: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            tcpPort: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            appProtocol: Schema.optional(
              Schema.Union([
                Schema.Literal("postgresql"),
                Schema.Literal("mysql"),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              host: "host",
              name: "name",
              type: "type",
              createdAt: "created_at",
              httpPort: "http_port",
              httpsPort: "https_port",
              serviceId: "service_id",
              tlsSettings: "tls_settings",
              updatedAt: "updated_at",
              tcpPort: "tcp_port",
              appProtocol: "app_protocol",
            }),
          ),
          Schema.Struct({
            host: Schema.Union([
              Schema.Struct({
                ipv4: Schema.String,
                ipv6: Schema.String,
                network: Schema.Struct({
                  tunnelId: Schema.String,
                }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
              }),
              Schema.Struct({
                ipv4: Schema.String,
                network: Schema.Struct({
                  tunnelId: Schema.String,
                }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
              }),
              Schema.Struct({
                ipv6: Schema.String,
                network: Schema.Struct({
                  tunnelId: Schema.String,
                }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
              }),
              Schema.Struct({
                hostname: Schema.String,
                resolverNetwork: Schema.Struct({
                  tunnelId: Schema.String,
                  resolverIps: Schema.optional(
                    Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    tunnelId: "tunnel_id",
                    resolverIps: "resolver_ips",
                  }),
                ),
              }).pipe(
                Schema.encodeKeys({
                  hostname: "hostname",
                  resolverNetwork: "resolver_network",
                }),
              ),
            ]),
            name: Schema.String,
            type: Schema.Union([
              Schema.Literals(["tcp", "http"]),
              Schema.String,
            ]),
            appProtocol: Schema.optional(
              Schema.Union([
                Schema.Literal("postgresql"),
                Schema.Literal("mysql"),
                Schema.Null,
              ]),
            ),
            createdAt: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            serviceId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            tcpPort: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            tlsSettings: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  certVerificationMode: Schema.String,
                }).pipe(
                  Schema.encodeKeys({
                    certVerificationMode: "cert_verification_mode",
                  }),
                ),
                Schema.Null,
              ]),
            ),
            updatedAt: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            httpPort: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            httpsPort: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              host: "host",
              name: "name",
              type: "type",
              appProtocol: "app_protocol",
              createdAt: "created_at",
              serviceId: "service_id",
              tcpPort: "tcp_port",
              tlsSettings: "tls_settings",
              updatedAt: "updated_at",
              httpPort: "http_port",
              httpsPort: "https_port",
            }),
          ),
        ]),
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
  ) as unknown as Schema.Schema<ListDirectoryServicesResponse>;

export type ListDirectoryServicesError = DefaultErrors | Forbidden;

export const listDirectoryServices: API.PaginatedOperationMethod<
  ListDirectoryServicesRequest,
  ListDirectoryServicesResponse,
  ListDirectoryServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDirectoryServicesRequest,
  output: ListDirectoryServicesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateDirectoryServiceRequest {
  /** Path param: Account identifier */
  accountId: string;
  /** Body param */
  host: {
    ipv4?: string;
    network?: { tunnelId: string };
    ipv6?: string;
    hostname?: string;
    resolverNetwork?: { tunnelId: string; resolverIps?: string[] | null };
  };
  /** Body param */
  name: string;
  /** Body param */
  type: "tcp" | "http" | (string & {});
  /** Body param */
  httpPort?: number | null;
  /** Body param */
  httpsPort?: number | null;
  /** Body param: TLS settings for a connectivity service.  If omitted, the default mode (`verify_full`) is used. */
  tlsSettings?: { certVerificationMode: string } | null;
  /** Body param */
  appProtocol?: "postgresql" | "mysql" | null;
  /** Body param */
  tcpPort?: number | null;
}

export const CreateDirectoryServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      host: Schema.Struct({
        ipv4: Schema.optional(Schema.String),
        network: Schema.optional(
          Schema.Struct({
            tunnelId: Schema.String,
          }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
        ),
        ipv6: Schema.optional(Schema.String),
        hostname: Schema.optional(Schema.String),
        resolverNetwork: Schema.optional(
          Schema.Struct({
            tunnelId: Schema.String,
            resolverIps: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              tunnelId: "tunnel_id",
              resolverIps: "resolver_ips",
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          ipv4: "ipv4",
          network: "network",
          ipv6: "ipv6",
          hostname: "hostname",
          resolverNetwork: "resolver_network",
        }),
      ),
      name: Schema.String,
      type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
      httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tlsSettings: Schema.optional(
        Schema.Union([
          Schema.Struct({
            certVerificationMode: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              certVerificationMode: "cert_verification_mode",
            }),
          ),
          Schema.Null,
        ]),
      ),
      appProtocol: Schema.optional(
        Schema.Union([
          Schema.Literal("postgresql"),
          Schema.Literal("mysql"),
          Schema.Null,
        ]),
      ),
      tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        host: "host",
        name: "name",
        type: "type",
        httpPort: "http_port",
        httpsPort: "https_port",
        tlsSettings: "tls_settings",
        appProtocol: "app_protocol",
        tcpPort: "tcp_port",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/connectivity/directory/services",
      }),
    ),
  ) as unknown as Schema.Schema<CreateDirectoryServiceRequest>;

export type CreateDirectoryServiceResponse =
  | {
      host:
        | { ipv4: string; network: { tunnelId: string } }
        | { ipv6: string; network: { tunnelId: string } }
        | { ipv4: string; ipv6: string; network: { tunnelId: string } }
        | {
            hostname: string;
            resolverNetwork: {
              tunnelId: string;
              resolverIps?: string[] | null;
            };
          };
      name: string;
      type: "tcp" | "http" | (string & {});
      createdAt?: string | null;
      httpPort?: number | null;
      httpsPort?: number | null;
      serviceId?: string | null;
      tlsSettings?: { certVerificationMode: string } | null;
      updatedAt?: string | null;
      tcpPort?: number | null;
      appProtocol?: "postgresql" | "mysql" | null;
    }
  | {
      host:
        | { ipv4: string; network: { tunnelId: string } }
        | { ipv6: string; network: { tunnelId: string } }
        | { ipv4: string; ipv6: string; network: { tunnelId: string } }
        | {
            hostname: string;
            resolverNetwork: {
              tunnelId: string;
              resolverIps?: string[] | null;
            };
          };
      name: string;
      type: "tcp" | "http" | (string & {});
      appProtocol?: "postgresql" | "mysql" | null;
      createdAt?: string | null;
      serviceId?: string | null;
      tcpPort?: number | null;
      tlsSettings?: { certVerificationMode: string } | null;
      updatedAt?: string | null;
      httpPort?: number | null;
      httpsPort?: number | null;
    };

export const CreateDirectoryServiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        host: Schema.Union([
          Schema.Struct({
            ipv4: Schema.String,
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv4: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            hostname: Schema.String,
            resolverNetwork: Schema.Struct({
              tunnelId: Schema.String,
              resolverIps: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                tunnelId: "tunnel_id",
                resolverIps: "resolver_ips",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              hostname: "hostname",
              resolverNetwork: "resolver_network",
            }),
          ),
        ]),
        name: Schema.String,
        type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        serviceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tlsSettings: Schema.optional(
          Schema.Union([
            Schema.Struct({
              certVerificationMode: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                certVerificationMode: "cert_verification_mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        appProtocol: Schema.optional(
          Schema.Union([
            Schema.Literal("postgresql"),
            Schema.Literal("mysql"),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          host: "host",
          name: "name",
          type: "type",
          createdAt: "created_at",
          httpPort: "http_port",
          httpsPort: "https_port",
          serviceId: "service_id",
          tlsSettings: "tls_settings",
          updatedAt: "updated_at",
          tcpPort: "tcp_port",
          appProtocol: "app_protocol",
        }),
      ),
      Schema.Struct({
        host: Schema.Union([
          Schema.Struct({
            ipv4: Schema.String,
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv4: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            hostname: Schema.String,
            resolverNetwork: Schema.Struct({
              tunnelId: Schema.String,
              resolverIps: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                tunnelId: "tunnel_id",
                resolverIps: "resolver_ips",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              hostname: "hostname",
              resolverNetwork: "resolver_network",
            }),
          ),
        ]),
        name: Schema.String,
        type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
        appProtocol: Schema.optional(
          Schema.Union([
            Schema.Literal("postgresql"),
            Schema.Literal("mysql"),
            Schema.Null,
          ]),
        ),
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        serviceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        tlsSettings: Schema.optional(
          Schema.Union([
            Schema.Struct({
              certVerificationMode: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                certVerificationMode: "cert_verification_mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          host: "host",
          name: "name",
          type: "type",
          appProtocol: "app_protocol",
          createdAt: "created_at",
          serviceId: "service_id",
          tcpPort: "tcp_port",
          tlsSettings: "tls_settings",
          updatedAt: "updated_at",
          httpPort: "http_port",
          httpsPort: "https_port",
        }),
      ),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateDirectoryServiceResponse>;

export type CreateDirectoryServiceError =
  | DefaultErrors
  | VpcServiceNameAlreadyExists
  | VpcTunnelNotFound
  | Forbidden;

export const createDirectoryService: API.OperationMethod<
  CreateDirectoryServiceRequest,
  CreateDirectoryServiceResponse,
  CreateDirectoryServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDirectoryServiceRequest,
  output: CreateDirectoryServiceResponse,
  errors: [VpcServiceNameAlreadyExists, VpcTunnelNotFound, Forbidden],
}));

export interface UpdateDirectoryServiceRequest {
  serviceId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  host: {
    ipv4?: string;
    network?: { tunnelId: string };
    ipv6?: string;
    hostname?: string;
    resolverNetwork?: { tunnelId: string; resolverIps?: string[] | null };
  };
  /** Body param */
  name: string;
  /** Body param */
  type: "tcp" | "http" | (string & {});
  /** Body param */
  httpPort?: number | null;
  /** Body param */
  httpsPort?: number | null;
  /** Body param: TLS settings for a connectivity service.  If omitted, the default mode (`verify_full`) is used. */
  tlsSettings?: { certVerificationMode: string } | null;
  /** Body param */
  appProtocol?: "postgresql" | "mysql" | null;
  /** Body param */
  tcpPort?: number | null;
}

export const UpdateDirectoryServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      serviceId: Schema.String.pipe(T.HttpPath("serviceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      host: Schema.Struct({
        ipv4: Schema.optional(Schema.String),
        network: Schema.optional(
          Schema.Struct({
            tunnelId: Schema.String,
          }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
        ),
        ipv6: Schema.optional(Schema.String),
        hostname: Schema.optional(Schema.String),
        resolverNetwork: Schema.optional(
          Schema.Struct({
            tunnelId: Schema.String,
            resolverIps: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              tunnelId: "tunnel_id",
              resolverIps: "resolver_ips",
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          ipv4: "ipv4",
          network: "network",
          ipv6: "ipv6",
          hostname: "hostname",
          resolverNetwork: "resolver_network",
        }),
      ),
      name: Schema.String,
      type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
      httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tlsSettings: Schema.optional(
        Schema.Union([
          Schema.Struct({
            certVerificationMode: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              certVerificationMode: "cert_verification_mode",
            }),
          ),
          Schema.Null,
        ]),
      ),
      appProtocol: Schema.optional(
        Schema.Union([
          Schema.Literal("postgresql"),
          Schema.Literal("mysql"),
          Schema.Null,
        ]),
      ),
      tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        host: "host",
        name: "name",
        type: "type",
        httpPort: "http_port",
        httpsPort: "https_port",
        tlsSettings: "tls_settings",
        appProtocol: "app_protocol",
        tcpPort: "tcp_port",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/connectivity/directory/services/{serviceId}",
      }),
    ),
  ) as unknown as Schema.Schema<UpdateDirectoryServiceRequest>;

export type UpdateDirectoryServiceResponse =
  | {
      host:
        | { ipv4: string; network: { tunnelId: string } }
        | { ipv6: string; network: { tunnelId: string } }
        | { ipv4: string; ipv6: string; network: { tunnelId: string } }
        | {
            hostname: string;
            resolverNetwork: {
              tunnelId: string;
              resolverIps?: string[] | null;
            };
          };
      name: string;
      type: "tcp" | "http" | (string & {});
      createdAt?: string | null;
      httpPort?: number | null;
      httpsPort?: number | null;
      serviceId?: string | null;
      tlsSettings?: { certVerificationMode: string } | null;
      updatedAt?: string | null;
      tcpPort?: number | null;
      appProtocol?: "postgresql" | "mysql" | null;
    }
  | {
      host:
        | { ipv4: string; network: { tunnelId: string } }
        | { ipv6: string; network: { tunnelId: string } }
        | { ipv4: string; ipv6: string; network: { tunnelId: string } }
        | {
            hostname: string;
            resolverNetwork: {
              tunnelId: string;
              resolverIps?: string[] | null;
            };
          };
      name: string;
      type: "tcp" | "http" | (string & {});
      appProtocol?: "postgresql" | "mysql" | null;
      createdAt?: string | null;
      serviceId?: string | null;
      tcpPort?: number | null;
      tlsSettings?: { certVerificationMode: string } | null;
      updatedAt?: string | null;
      httpPort?: number | null;
      httpsPort?: number | null;
    };

export const UpdateDirectoryServiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Union([
      Schema.Struct({
        host: Schema.Union([
          Schema.Struct({
            ipv4: Schema.String,
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv4: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            hostname: Schema.String,
            resolverNetwork: Schema.Struct({
              tunnelId: Schema.String,
              resolverIps: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                tunnelId: "tunnel_id",
                resolverIps: "resolver_ips",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              hostname: "hostname",
              resolverNetwork: "resolver_network",
            }),
          ),
        ]),
        name: Schema.String,
        type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        serviceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tlsSettings: Schema.optional(
          Schema.Union([
            Schema.Struct({
              certVerificationMode: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                certVerificationMode: "cert_verification_mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        appProtocol: Schema.optional(
          Schema.Union([
            Schema.Literal("postgresql"),
            Schema.Literal("mysql"),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          host: "host",
          name: "name",
          type: "type",
          createdAt: "created_at",
          httpPort: "http_port",
          httpsPort: "https_port",
          serviceId: "service_id",
          tlsSettings: "tls_settings",
          updatedAt: "updated_at",
          tcpPort: "tcp_port",
          appProtocol: "app_protocol",
        }),
      ),
      Schema.Struct({
        host: Schema.Union([
          Schema.Struct({
            ipv4: Schema.String,
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv4: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            ipv6: Schema.String,
            network: Schema.Struct({
              tunnelId: Schema.String,
            }).pipe(Schema.encodeKeys({ tunnelId: "tunnel_id" })),
          }),
          Schema.Struct({
            hostname: Schema.String,
            resolverNetwork: Schema.Struct({
              tunnelId: Schema.String,
              resolverIps: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                tunnelId: "tunnel_id",
                resolverIps: "resolver_ips",
              }),
            ),
          }).pipe(
            Schema.encodeKeys({
              hostname: "hostname",
              resolverNetwork: "resolver_network",
            }),
          ),
        ]),
        name: Schema.String,
        type: Schema.Union([Schema.Literals(["tcp", "http"]), Schema.String]),
        appProtocol: Schema.optional(
          Schema.Union([
            Schema.Literal("postgresql"),
            Schema.Literal("mysql"),
            Schema.Null,
          ]),
        ),
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        serviceId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        tcpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        tlsSettings: Schema.optional(
          Schema.Union([
            Schema.Struct({
              certVerificationMode: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                certVerificationMode: "cert_verification_mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        httpPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        httpsPort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          host: "host",
          name: "name",
          type: "type",
          appProtocol: "app_protocol",
          createdAt: "created_at",
          serviceId: "service_id",
          tcpPort: "tcp_port",
          tlsSettings: "tls_settings",
          updatedAt: "updated_at",
          httpPort: "http_port",
          httpsPort: "https_port",
        }),
      ),
    ]).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UpdateDirectoryServiceResponse>;

export type UpdateDirectoryServiceError =
  | DefaultErrors
  | VpcServiceNotFound
  | VpcServiceNameAlreadyExists
  | VpcTunnelNotFound
  | Forbidden;

export const updateDirectoryService: API.OperationMethod<
  UpdateDirectoryServiceRequest,
  UpdateDirectoryServiceResponse,
  UpdateDirectoryServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDirectoryServiceRequest,
  output: UpdateDirectoryServiceResponse,
  errors: [
    VpcServiceNotFound,
    VpcServiceNameAlreadyExists,
    VpcTunnelNotFound,
    Forbidden,
  ],
}));

export interface DeleteDirectoryServiceRequest {
  serviceId: string;
  accountId: string;
}

export const DeleteDirectoryServiceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      serviceId: Schema.String.pipe(T.HttpPath("serviceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/connectivity/directory/services/{serviceId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteDirectoryServiceRequest>;

export type DeleteDirectoryServiceResponse = unknown;

export const DeleteDirectoryServiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Schema<DeleteDirectoryServiceResponse>;

export type DeleteDirectoryServiceError =
  | DefaultErrors
  | VpcServiceNotFound
  | Forbidden;

export const deleteDirectoryService: API.OperationMethod<
  DeleteDirectoryServiceRequest,
  DeleteDirectoryServiceResponse,
  DeleteDirectoryServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDirectoryServiceRequest,
  output: DeleteDirectoryServiceResponse,
  errors: [VpcServiceNotFound, Forbidden],
}));
