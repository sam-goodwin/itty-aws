/**
 * Cloudflare CONTAINERS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service containers
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

export class ContainerApplicationNotFound extends Schema.TaggedErrorClass<ContainerApplicationNotFound>()(
  "ContainerApplicationNotFound",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(ContainerApplicationNotFound, [
  { code: 1609, message: { includes: "Container application not found" } },
  { code: 1609, message: { includes: "APPLICATION_NOT_FOUND" } },
]);

export class DurableObjectAlreadyHasApplication extends Schema.TaggedErrorClass<DurableObjectAlreadyHasApplication>()(
  "DurableObjectAlreadyHasApplication",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(DurableObjectAlreadyHasApplication, [
  {
    code: 1608,
    message: { includes: "DURABLE_OBJECT_ALREADY_HAS_APPLICATION" },
  },
]);

export class InvalidRoute extends Schema.TaggedErrorClass<InvalidRoute>()(
  "InvalidRoute",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(InvalidRoute, [
  { code: 7003, message: { includes: "Could not route" } },
]);

// =============================================================================
// ContainerApplication
// =============================================================================

export interface GetContainerApplicationRequest {
  accountId: string;
  applicationId: string;
}

export const GetContainerApplicationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    applicationId: Schema.String.pipe(T.HttpPath("application_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/containers/applications/{application_id}",
    }),
  ) as unknown as Schema.Schema<GetContainerApplicationRequest>;

export interface GetContainerApplicationResponse {
  id: string;
  accountId: string;
  name: string;
  schedulingPolicy: "moon" | "gpu" | "regional" | "fill_metals" | "default";
  instances: number;
  maxInstances: number;
  constraints?: { tier?: number | null } | null;
  affinities?: { colocation?: "datacenter" | null } | null;
  configuration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4"
      | null;
    observability?: { logs?: { enabled: boolean } | null } | null;
    sshPublicKeyIds?: string[] | null;
    secrets?: { name: string; type: "env"; secret: string }[] | null;
    vcpu?: number | null;
    memory?: string | null;
    disk?: { size: string } | null;
    environmentVariables?: { name: string; value: string }[] | null;
    labels?: { name: string; value: string }[] | null;
    network?: {
      assignIpv4?: "none" | "predefined" | "account" | null;
      assignIpv6?: "none" | "predefined" | "account" | null;
      mode?: "public" | "private" | null;
    } | null;
    command?: string[] | null;
    entrypoint?: string[] | null;
    dns?: { servers?: string[] | null; searches?: string[] | null } | null;
    ports?: { name: string; port?: number | null }[] | null;
    checks?:
      | {
          name?: string | null;
          type: "http" | "tcp";
          tls?: boolean | null;
          port: string;
          http?: {
            method?:
              | "GET"
              | "POST"
              | "PUT"
              | "PATCH"
              | "DELETE"
              | "OPTIONS"
              | "HEAD"
              | null;
            body?: string | null;
            path?: string | null;
            headers?: unknown | null;
          } | null;
          interval: string;
          timeout: string;
          retries?: number | null;
          kind: "health" | "ready";
        }[]
      | null;
  };
  durableObjects?: { namespaceId: string } | null;
  createdAt: string;
  version: number;
  durableObjectNamespaceId?: string | null;
  health: { instances: unknown };
}

export const GetContainerApplicationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    accountId: Schema.String,
    name: Schema.String,
    schedulingPolicy: Schema.Literals([
      "moon",
      "gpu",
      "regional",
      "fill_metals",
      "default",
    ]),
    instances: Schema.Number,
    maxInstances: Schema.Number,
    constraints: Schema.optional(
      Schema.Union([
        Schema.Struct({
          tier: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Null,
      ]),
    ),
    affinities: Schema.optional(
      Schema.Union([
        Schema.Struct({
          colocation: Schema.optional(
            Schema.Union([Schema.Literal("datacenter"), Schema.Null]),
          ),
        }),
        Schema.Null,
      ]),
    ),
    configuration: Schema.Struct({
      image: Schema.String,
      instanceType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "lite",
            "dev",
            "basic",
            "standard",
            "standard-1",
            "standard-2",
            "standard-3",
            "standard-4",
          ]),
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      sshPublicKeyIds: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      secrets: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literal("env"),
              secret: SensitiveString,
            }),
          ),
          Schema.Null,
        ]),
      ),
      vcpu: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      memory: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disk: Schema.optional(
        Schema.Union([
          Schema.Struct({
            size: Schema.String,
          }),
          Schema.Null,
        ]),
      ),
      environmentVariables: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      network: Schema.optional(
        Schema.Union([
          Schema.Struct({
            assignIpv4: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            assignIpv6: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            mode: Schema.optional(
              Schema.Union([
                Schema.Literals(["public", "private"]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              assignIpv4: "assign_ipv4",
              assignIpv6: "assign_ipv6",
              mode: "mode",
            }),
          ),
          Schema.Null,
        ]),
      ),
      command: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      entrypoint: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      dns: Schema.optional(
        Schema.Union([
          Schema.Struct({
            servers: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            searches: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      ports: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            }),
          ),
          Schema.Null,
        ]),
      ),
      checks: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              type: Schema.Literals(["http", "tcp"]),
              tls: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
              port: Schema.String,
              http: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    method: Schema.optional(
                      Schema.Union([
                        Schema.Literals([
                          "GET",
                          "POST",
                          "PUT",
                          "PATCH",
                          "DELETE",
                          "OPTIONS",
                          "HEAD",
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    body: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    path: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    headers: Schema.optional(
                      Schema.Union([Schema.Unknown, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              interval: Schema.String,
              timeout: Schema.String,
              retries: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              kind: Schema.Literals(["health", "ready"]),
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        image: "image",
        instanceType: "instance_type",
        observability: "observability",
        sshPublicKeyIds: "ssh_public_key_ids",
        secrets: "secrets",
        vcpu: "vcpu",
        memory: "memory",
        disk: "disk",
        environmentVariables: "environment_variables",
        labels: "labels",
        network: "network",
        command: "command",
        entrypoint: "entrypoint",
        dns: "dns",
        ports: "ports",
        checks: "checks",
      }),
    ),
    durableObjects: Schema.optional(
      Schema.Union([
        Schema.Struct({
          namespaceId: Schema.String,
        }).pipe(Schema.encodeKeys({ namespaceId: "namespace_id" })),
        Schema.Null,
      ]),
    ),
    createdAt: Schema.String,
    version: Schema.Number,
    durableObjectNamespaceId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    health: Schema.Struct({
      instances: Schema.Unknown,
    }),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        accountId: "account_id",
        name: "name",
        schedulingPolicy: "scheduling_policy",
        instances: "instances",
        maxInstances: "max_instances",
        constraints: "constraints",
        affinities: "affinities",
        configuration: "configuration",
        durableObjects: "durable_objects",
        createdAt: "created_at",
        version: "version",
        durableObjectNamespaceId: "durable_object_namespace_id",
        health: "health",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetContainerApplicationResponse>;

export type GetContainerApplicationError =
  | DefaultErrors
  | InvalidRoute
  | ContainerApplicationNotFound;

export const getContainerApplication: API.OperationMethod<
  GetContainerApplicationRequest,
  GetContainerApplicationResponse,
  GetContainerApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContainerApplicationRequest,
  output: GetContainerApplicationResponse,
  errors: [InvalidRoute, ContainerApplicationNotFound],
}));

export interface ListContainerApplicationsRequest {
  accountId: string;
}

export const ListContainerApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/containers/applications",
    }),
  ) as unknown as Schema.Schema<ListContainerApplicationsRequest>;

export type ListContainerApplicationsResponse = {
  id: string;
  accountId: string;
  name: string;
  schedulingPolicy: "moon" | "gpu" | "regional" | "fill_metals" | "default";
  instances: number;
  maxInstances: number;
  constraints?: { tier?: number | null } | null;
  affinities?: { colocation?: "datacenter" | null } | null;
  configuration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4"
      | null;
    observability?: { logs?: { enabled: boolean } | null } | null;
    sshPublicKeyIds?: string[] | null;
    secrets?: { name: string; type: "env"; secret: string }[] | null;
    vcpu?: number | null;
    memory?: string | null;
    disk?: { size: string } | null;
    environmentVariables?: { name: string; value: string }[] | null;
    labels?: { name: string; value: string }[] | null;
    network?: {
      assignIpv4?: "none" | "predefined" | "account" | null;
      assignIpv6?: "none" | "predefined" | "account" | null;
      mode?: "public" | "private" | null;
    } | null;
    command?: string[] | null;
    entrypoint?: string[] | null;
    dns?: { servers?: string[] | null; searches?: string[] | null } | null;
    ports?: { name: string; port?: number | null }[] | null;
    checks?:
      | {
          name?: string | null;
          type: "http" | "tcp";
          tls?: boolean | null;
          port: string;
          http?: {
            method?:
              | "GET"
              | "POST"
              | "PUT"
              | "PATCH"
              | "DELETE"
              | "OPTIONS"
              | "HEAD"
              | null;
            body?: string | null;
            path?: string | null;
            headers?: unknown | null;
          } | null;
          interval: string;
          timeout: string;
          retries?: number | null;
          kind: "health" | "ready";
        }[]
      | null;
  };
  durableObjects?: { namespaceId: string } | null;
  createdAt: string;
  version: number;
  durableObjectNamespaceId?: string | null;
  health: { instances: unknown };
}[];

export const ListContainerApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      name: Schema.String,
      schedulingPolicy: Schema.Literals([
        "moon",
        "gpu",
        "regional",
        "fill_metals",
        "default",
      ]),
      instances: Schema.Number,
      maxInstances: Schema.Number,
      constraints: Schema.optional(
        Schema.Union([
          Schema.Struct({
            tier: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          }),
          Schema.Null,
        ]),
      ),
      affinities: Schema.optional(
        Schema.Union([
          Schema.Struct({
            colocation: Schema.optional(
              Schema.Union([Schema.Literal("datacenter"), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      configuration: Schema.Struct({
        image: Schema.String,
        instanceType: Schema.optional(
          Schema.Union([
            Schema.Literals([
              "lite",
              "dev",
              "basic",
              "standard",
              "standard-1",
              "standard-2",
              "standard-3",
              "standard-4",
            ]),
            Schema.Null,
          ]),
        ),
        observability: Schema.optional(
          Schema.Union([
            Schema.Struct({
              logs: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    enabled: Schema.Boolean,
                  }),
                  Schema.Null,
                ]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        sshPublicKeyIds: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        secrets: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                type: Schema.Literal("env"),
                secret: SensitiveString,
              }),
            ),
            Schema.Null,
          ]),
        ),
        vcpu: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        memory: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        disk: Schema.optional(
          Schema.Union([
            Schema.Struct({
              size: Schema.String,
            }),
            Schema.Null,
          ]),
        ),
        environmentVariables: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.String,
              }),
            ),
            Schema.Null,
          ]),
        ),
        labels: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.String,
              }),
            ),
            Schema.Null,
          ]),
        ),
        network: Schema.optional(
          Schema.Union([
            Schema.Struct({
              assignIpv4: Schema.optional(
                Schema.Union([
                  Schema.Literals(["none", "predefined", "account"]),
                  Schema.Null,
                ]),
              ),
              assignIpv6: Schema.optional(
                Schema.Union([
                  Schema.Literals(["none", "predefined", "account"]),
                  Schema.Null,
                ]),
              ),
              mode: Schema.optional(
                Schema.Union([
                  Schema.Literals(["public", "private"]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                assignIpv4: "assign_ipv4",
                assignIpv6: "assign_ipv6",
                mode: "mode",
              }),
            ),
            Schema.Null,
          ]),
        ),
        command: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        entrypoint: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        dns: Schema.optional(
          Schema.Union([
            Schema.Struct({
              servers: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              searches: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        ports: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                port: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
              }),
            ),
            Schema.Null,
          ]),
        ),
        checks: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                type: Schema.Literals(["http", "tcp"]),
                tls: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
                port: Schema.String,
                http: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      method: Schema.optional(
                        Schema.Union([
                          Schema.Literals([
                            "GET",
                            "POST",
                            "PUT",
                            "PATCH",
                            "DELETE",
                            "OPTIONS",
                            "HEAD",
                          ]),
                          Schema.Null,
                        ]),
                      ),
                      body: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      path: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      headers: Schema.optional(
                        Schema.Union([Schema.Unknown, Schema.Null]),
                      ),
                    }),
                    Schema.Null,
                  ]),
                ),
                interval: Schema.String,
                timeout: Schema.String,
                retries: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                kind: Schema.Literals(["health", "ready"]),
              }),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          image: "image",
          instanceType: "instance_type",
          observability: "observability",
          sshPublicKeyIds: "ssh_public_key_ids",
          secrets: "secrets",
          vcpu: "vcpu",
          memory: "memory",
          disk: "disk",
          environmentVariables: "environment_variables",
          labels: "labels",
          network: "network",
          command: "command",
          entrypoint: "entrypoint",
          dns: "dns",
          ports: "ports",
          checks: "checks",
        }),
      ),
      durableObjects: Schema.optional(
        Schema.Union([
          Schema.Struct({
            namespaceId: Schema.String,
          }).pipe(Schema.encodeKeys({ namespaceId: "namespace_id" })),
          Schema.Null,
        ]),
      ),
      createdAt: Schema.String,
      version: Schema.Number,
      durableObjectNamespaceId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      health: Schema.Struct({
        instances: Schema.Unknown,
      }),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        accountId: "account_id",
        name: "name",
        schedulingPolicy: "scheduling_policy",
        instances: "instances",
        maxInstances: "max_instances",
        constraints: "constraints",
        affinities: "affinities",
        configuration: "configuration",
        durableObjects: "durable_objects",
        createdAt: "created_at",
        version: "version",
        durableObjectNamespaceId: "durable_object_namespace_id",
        health: "health",
      }),
    ),
  ).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ListContainerApplicationsResponse>;

export type ListContainerApplicationsError = DefaultErrors | InvalidRoute;

export const listContainerApplications: API.OperationMethod<
  ListContainerApplicationsRequest,
  ListContainerApplicationsResponse,
  ListContainerApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListContainerApplicationsRequest,
  output: ListContainerApplicationsResponse,
  errors: [InvalidRoute],
}));

export interface CreateContainerApplicationRequest {
  accountId: string;
  name: string;
  maxInstances: number;
  configuration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4";
    observability?: { logs?: { enabled: boolean } };
    sshPublicKeyIds?: string[];
    secrets?: { name: string; type: "env"; secret: string }[];
    vcpu?: number;
    memory?: string;
    disk?: { size: string };
    environmentVariables?: { name: string; value: string }[];
    labels?: { name: string; value: string }[];
    network?: {
      assignIpv4?: "none" | "predefined" | "account";
      assignIpv6?: "none" | "predefined" | "account";
      mode?: "public" | "private";
    };
    command?: string[];
    entrypoint?: string[];
    dns?: { servers?: string[]; searches?: string[] };
    ports?: { name: string; port?: number }[];
    checks?: {
      name?: string;
      type: "http" | "tcp";
      tls?: boolean;
      port: string;
      http?: {
        method?:
          | "GET"
          | "POST"
          | "PUT"
          | "PATCH"
          | "DELETE"
          | "OPTIONS"
          | "HEAD";
        body?: string;
        path?: string;
        headers?: unknown;
      };
      interval: string;
      timeout: string;
      retries?: number;
      kind: "health" | "ready";
    }[];
  };
  durableObjects?: { namespaceId: string };
  instances?: number;
  schedulingPolicy?: "moon" | "gpu" | "regional" | "fill_metals" | "default";
  constraints?: { tier?: number };
  affinities?: { colocation?: "datacenter" };
}

export const CreateContainerApplicationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
    maxInstances: Schema.Number,
    configuration: Schema.Struct({
      image: Schema.String,
      instanceType: Schema.optional(
        Schema.Literals([
          "lite",
          "dev",
          "basic",
          "standard",
          "standard-1",
          "standard-2",
          "standard-3",
          "standard-4",
        ]),
      ),
      observability: Schema.optional(
        Schema.Struct({
          logs: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
            }),
          ),
        }),
      ),
      sshPublicKeyIds: Schema.optional(Schema.Array(Schema.String)),
      secrets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("env"),
            secret: SensitiveString,
          }),
        ),
      ),
      vcpu: Schema.optional(Schema.Number),
      memory: Schema.optional(Schema.String),
      disk: Schema.optional(
        Schema.Struct({
          size: Schema.String,
        }),
      ),
      environmentVariables: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      labels: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      network: Schema.optional(
        Schema.Struct({
          assignIpv4: Schema.optional(
            Schema.Literals(["none", "predefined", "account"]),
          ),
          assignIpv6: Schema.optional(
            Schema.Literals(["none", "predefined", "account"]),
          ),
          mode: Schema.optional(Schema.Literals(["public", "private"])),
        }).pipe(
          Schema.encodeKeys({
            assignIpv4: "assign_ipv4",
            assignIpv6: "assign_ipv6",
            mode: "mode",
          }),
        ),
      ),
      command: Schema.optional(Schema.Array(Schema.String)),
      entrypoint: Schema.optional(Schema.Array(Schema.String)),
      dns: Schema.optional(
        Schema.Struct({
          servers: Schema.optional(Schema.Array(Schema.String)),
          searches: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      ports: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            port: Schema.optional(Schema.Number),
          }),
        ),
      ),
      checks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.Literals(["http", "tcp"]),
            tls: Schema.optional(Schema.Boolean),
            port: Schema.String,
            http: Schema.optional(
              Schema.Struct({
                method: Schema.optional(
                  Schema.Literals([
                    "GET",
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE",
                    "OPTIONS",
                    "HEAD",
                  ]),
                ),
                body: Schema.optional(Schema.String),
                path: Schema.optional(Schema.String),
                headers: Schema.optional(Schema.Unknown),
              }),
            ),
            interval: Schema.String,
            timeout: Schema.String,
            retries: Schema.optional(Schema.Number),
            kind: Schema.Literals(["health", "ready"]),
          }),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        image: "image",
        instanceType: "instance_type",
        observability: "observability",
        sshPublicKeyIds: "ssh_public_key_ids",
        secrets: "secrets",
        vcpu: "vcpu",
        memory: "memory",
        disk: "disk",
        environmentVariables: "environment_variables",
        labels: "labels",
        network: "network",
        command: "command",
        entrypoint: "entrypoint",
        dns: "dns",
        ports: "ports",
        checks: "checks",
      }),
    ),
    durableObjects: Schema.optional(
      Schema.Struct({
        namespaceId: Schema.String,
      }).pipe(Schema.encodeKeys({ namespaceId: "namespace_id" })),
    ),
    instances: Schema.optional(Schema.Number),
    schedulingPolicy: Schema.optional(
      Schema.Literals(["moon", "gpu", "regional", "fill_metals", "default"]),
    ),
    constraints: Schema.optional(
      Schema.Struct({
        tier: Schema.optional(Schema.Number),
      }),
    ),
    affinities: Schema.optional(
      Schema.Struct({
        colocation: Schema.optional(Schema.Literal("datacenter")),
      }),
    ),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      maxInstances: "max_instances",
      configuration: "configuration",
      durableObjects: "durable_objects",
      instances: "instances",
      schedulingPolicy: "scheduling_policy",
      constraints: "constraints",
      affinities: "affinities",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/containers/applications",
    }),
  ) as unknown as Schema.Schema<CreateContainerApplicationRequest>;

export interface CreateContainerApplicationResponse {
  id: string;
  accountId: string;
  name: string;
  schedulingPolicy: "moon" | "gpu" | "regional" | "fill_metals" | "default";
  instances: number;
  maxInstances: number;
  constraints?: { tier?: number | null } | null;
  affinities?: { colocation?: "datacenter" | null } | null;
  configuration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4"
      | null;
    observability?: { logs?: { enabled: boolean } | null } | null;
    sshPublicKeyIds?: string[] | null;
    secrets?: { name: string; type: "env"; secret: string }[] | null;
    vcpu?: number | null;
    memory?: string | null;
    disk?: { size: string } | null;
    environmentVariables?: { name: string; value: string }[] | null;
    labels?: { name: string; value: string }[] | null;
    network?: {
      assignIpv4?: "none" | "predefined" | "account" | null;
      assignIpv6?: "none" | "predefined" | "account" | null;
      mode?: "public" | "private" | null;
    } | null;
    command?: string[] | null;
    entrypoint?: string[] | null;
    dns?: { servers?: string[] | null; searches?: string[] | null } | null;
    ports?: { name: string; port?: number | null }[] | null;
    checks?:
      | {
          name?: string | null;
          type: "http" | "tcp";
          tls?: boolean | null;
          port: string;
          http?: {
            method?:
              | "GET"
              | "POST"
              | "PUT"
              | "PATCH"
              | "DELETE"
              | "OPTIONS"
              | "HEAD"
              | null;
            body?: string | null;
            path?: string | null;
            headers?: unknown | null;
          } | null;
          interval: string;
          timeout: string;
          retries?: number | null;
          kind: "health" | "ready";
        }[]
      | null;
  };
  durableObjects?: { namespaceId: string } | null;
  createdAt: string;
  version: number;
  durableObjectNamespaceId?: string | null;
  health: { instances: unknown };
}

export const CreateContainerApplicationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    accountId: Schema.String,
    name: Schema.String,
    schedulingPolicy: Schema.Literals([
      "moon",
      "gpu",
      "regional",
      "fill_metals",
      "default",
    ]),
    instances: Schema.Number,
    maxInstances: Schema.Number,
    constraints: Schema.optional(
      Schema.Union([
        Schema.Struct({
          tier: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Null,
      ]),
    ),
    affinities: Schema.optional(
      Schema.Union([
        Schema.Struct({
          colocation: Schema.optional(
            Schema.Union([Schema.Literal("datacenter"), Schema.Null]),
          ),
        }),
        Schema.Null,
      ]),
    ),
    configuration: Schema.Struct({
      image: Schema.String,
      instanceType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "lite",
            "dev",
            "basic",
            "standard",
            "standard-1",
            "standard-2",
            "standard-3",
            "standard-4",
          ]),
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      sshPublicKeyIds: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      secrets: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literal("env"),
              secret: SensitiveString,
            }),
          ),
          Schema.Null,
        ]),
      ),
      vcpu: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      memory: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disk: Schema.optional(
        Schema.Union([
          Schema.Struct({
            size: Schema.String,
          }),
          Schema.Null,
        ]),
      ),
      environmentVariables: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      network: Schema.optional(
        Schema.Union([
          Schema.Struct({
            assignIpv4: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            assignIpv6: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            mode: Schema.optional(
              Schema.Union([
                Schema.Literals(["public", "private"]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              assignIpv4: "assign_ipv4",
              assignIpv6: "assign_ipv6",
              mode: "mode",
            }),
          ),
          Schema.Null,
        ]),
      ),
      command: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      entrypoint: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      dns: Schema.optional(
        Schema.Union([
          Schema.Struct({
            servers: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            searches: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      ports: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            }),
          ),
          Schema.Null,
        ]),
      ),
      checks: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              type: Schema.Literals(["http", "tcp"]),
              tls: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
              port: Schema.String,
              http: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    method: Schema.optional(
                      Schema.Union([
                        Schema.Literals([
                          "GET",
                          "POST",
                          "PUT",
                          "PATCH",
                          "DELETE",
                          "OPTIONS",
                          "HEAD",
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    body: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    path: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    headers: Schema.optional(
                      Schema.Union([Schema.Unknown, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              interval: Schema.String,
              timeout: Schema.String,
              retries: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              kind: Schema.Literals(["health", "ready"]),
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        image: "image",
        instanceType: "instance_type",
        observability: "observability",
        sshPublicKeyIds: "ssh_public_key_ids",
        secrets: "secrets",
        vcpu: "vcpu",
        memory: "memory",
        disk: "disk",
        environmentVariables: "environment_variables",
        labels: "labels",
        network: "network",
        command: "command",
        entrypoint: "entrypoint",
        dns: "dns",
        ports: "ports",
        checks: "checks",
      }),
    ),
    durableObjects: Schema.optional(
      Schema.Union([
        Schema.Struct({
          namespaceId: Schema.String,
        }).pipe(Schema.encodeKeys({ namespaceId: "namespace_id" })),
        Schema.Null,
      ]),
    ),
    createdAt: Schema.String,
    version: Schema.Number,
    durableObjectNamespaceId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    health: Schema.Struct({
      instances: Schema.Unknown,
    }),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        accountId: "account_id",
        name: "name",
        schedulingPolicy: "scheduling_policy",
        instances: "instances",
        maxInstances: "max_instances",
        constraints: "constraints",
        affinities: "affinities",
        configuration: "configuration",
        durableObjects: "durable_objects",
        createdAt: "created_at",
        version: "version",
        durableObjectNamespaceId: "durable_object_namespace_id",
        health: "health",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateContainerApplicationResponse>;

export type CreateContainerApplicationError =
  | DefaultErrors
  | InvalidRoute
  | DurableObjectAlreadyHasApplication;

export const createContainerApplication: API.OperationMethod<
  CreateContainerApplicationRequest,
  CreateContainerApplicationResponse,
  CreateContainerApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateContainerApplicationRequest,
  output: CreateContainerApplicationResponse,
  errors: [InvalidRoute, DurableObjectAlreadyHasApplication],
}));

export interface UpdateContainerApplicationRequest {
  accountId: string;
  applicationId: string;
  instances?: number;
  maxInstances?: number;
  affinities?: { colocation?: "datacenter" };
  schedulingPolicy?: "moon" | "gpu" | "regional" | "fill_metals" | "default";
  constraints?: {
    tier?: number;
    region?:
      | "AFR"
      | "APAC"
      | "EEUR"
      | "ENAM"
      | "WNAM"
      | "ME"
      | "OC"
      | "SAM"
      | "WEUR";
    regions?: (
      | "AFR"
      | "APAC"
      | "EEUR"
      | "ENAM"
      | "WNAM"
      | "ME"
      | "OC"
      | "SAM"
      | "WEUR"
    )[];
    cities?: (
      | "AFR"
      | "APAC"
      | "EEUR"
      | "ENAM"
      | "WNAM"
      | "ME"
      | "OC"
      | "SAM"
      | "WEUR"
    )[];
  };
  configuration?: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4";
    observability?: { logs?: { enabled: boolean } };
    sshPublicKeyIds?: string[];
    secrets?: { name: string; type: "env"; secret: string }[];
    vcpu?: number;
    memory?: string;
    disk?: { size: string };
    environmentVariables?: { name: string; value: string }[];
    labels?: { name: string; value: string }[];
    network?: {
      assignIpv4?: "none" | "predefined" | "account";
      assignIpv6?: "none" | "predefined" | "account";
      mode?: "public" | "private";
    };
    command?: string[];
    entrypoint?: string[];
    dns?: { servers?: string[]; searches?: string[] };
    ports?: { name: string; port?: number }[];
    checks?: {
      name?: string;
      type: "http" | "tcp";
      tls?: boolean;
      port: string;
      http?: {
        method?:
          | "GET"
          | "POST"
          | "PUT"
          | "PATCH"
          | "DELETE"
          | "OPTIONS"
          | "HEAD";
        body?: string;
        path?: string;
        headers?: unknown;
      };
      interval: string;
      timeout: string;
      retries?: number;
      kind: "health" | "ready";
    }[];
  };
}

export const UpdateContainerApplicationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    applicationId: Schema.String.pipe(T.HttpPath("application_id")),
    instances: Schema.optional(Schema.Number),
    maxInstances: Schema.optional(Schema.Number),
    affinities: Schema.optional(
      Schema.Struct({
        colocation: Schema.optional(Schema.Literal("datacenter")),
      }),
    ),
    schedulingPolicy: Schema.optional(
      Schema.Literals(["moon", "gpu", "regional", "fill_metals", "default"]),
    ),
    constraints: Schema.optional(
      Schema.Struct({
        tier: Schema.optional(Schema.Number),
        region: Schema.optional(
          Schema.Literals([
            "AFR",
            "APAC",
            "EEUR",
            "ENAM",
            "WNAM",
            "ME",
            "OC",
            "SAM",
            "WEUR",
          ]),
        ),
        regions: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "AFR",
              "APAC",
              "EEUR",
              "ENAM",
              "WNAM",
              "ME",
              "OC",
              "SAM",
              "WEUR",
            ]),
          ),
        ),
        cities: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "AFR",
              "APAC",
              "EEUR",
              "ENAM",
              "WNAM",
              "ME",
              "OC",
              "SAM",
              "WEUR",
            ]),
          ),
        ),
      }),
    ),
    configuration: Schema.optional(
      Schema.Struct({
        image: Schema.String,
        instanceType: Schema.optional(
          Schema.Literals([
            "lite",
            "dev",
            "basic",
            "standard",
            "standard-1",
            "standard-2",
            "standard-3",
            "standard-4",
          ]),
        ),
        observability: Schema.optional(
          Schema.Struct({
            logs: Schema.optional(
              Schema.Struct({
                enabled: Schema.Boolean,
              }),
            ),
          }),
        ),
        sshPublicKeyIds: Schema.optional(Schema.Array(Schema.String)),
        secrets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literal("env"),
              secret: SensitiveString,
            }),
          ),
        ),
        vcpu: Schema.optional(Schema.Number),
        memory: Schema.optional(Schema.String),
        disk: Schema.optional(
          Schema.Struct({
            size: Schema.String,
          }),
        ),
        environmentVariables: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
        labels: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
        network: Schema.optional(
          Schema.Struct({
            assignIpv4: Schema.optional(
              Schema.Literals(["none", "predefined", "account"]),
            ),
            assignIpv6: Schema.optional(
              Schema.Literals(["none", "predefined", "account"]),
            ),
            mode: Schema.optional(Schema.Literals(["public", "private"])),
          }).pipe(
            Schema.encodeKeys({
              assignIpv4: "assign_ipv4",
              assignIpv6: "assign_ipv6",
              mode: "mode",
            }),
          ),
        ),
        command: Schema.optional(Schema.Array(Schema.String)),
        entrypoint: Schema.optional(Schema.Array(Schema.String)),
        dns: Schema.optional(
          Schema.Struct({
            servers: Schema.optional(Schema.Array(Schema.String)),
            searches: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        ports: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              port: Schema.optional(Schema.Number),
            }),
          ),
        ),
        checks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              type: Schema.Literals(["http", "tcp"]),
              tls: Schema.optional(Schema.Boolean),
              port: Schema.String,
              http: Schema.optional(
                Schema.Struct({
                  method: Schema.optional(
                    Schema.Literals([
                      "GET",
                      "POST",
                      "PUT",
                      "PATCH",
                      "DELETE",
                      "OPTIONS",
                      "HEAD",
                    ]),
                  ),
                  body: Schema.optional(Schema.String),
                  path: Schema.optional(Schema.String),
                  headers: Schema.optional(Schema.Unknown),
                }),
              ),
              interval: Schema.String,
              timeout: Schema.String,
              retries: Schema.optional(Schema.Number),
              kind: Schema.Literals(["health", "ready"]),
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          image: "image",
          instanceType: "instance_type",
          observability: "observability",
          sshPublicKeyIds: "ssh_public_key_ids",
          secrets: "secrets",
          vcpu: "vcpu",
          memory: "memory",
          disk: "disk",
          environmentVariables: "environment_variables",
          labels: "labels",
          network: "network",
          command: "command",
          entrypoint: "entrypoint",
          dns: "dns",
          ports: "ports",
          checks: "checks",
        }),
      ),
    ),
  }).pipe(
    Schema.encodeKeys({
      instances: "instances",
      maxInstances: "max_instances",
      affinities: "affinities",
      schedulingPolicy: "scheduling_policy",
      constraints: "constraints",
      configuration: "configuration",
    }),
    T.Http({
      method: "PATCH",
      path: "/accounts/{account_id}/containers/applications/{application_id}",
    }),
  ) as unknown as Schema.Schema<UpdateContainerApplicationRequest>;

export interface UpdateContainerApplicationResponse {
  id: string;
  accountId: string;
  name: string;
  schedulingPolicy: "moon" | "gpu" | "regional" | "fill_metals" | "default";
  instances: number;
  maxInstances: number;
  constraints?: { tier?: number | null } | null;
  affinities?: { colocation?: "datacenter" | null } | null;
  configuration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4"
      | null;
    observability?: { logs?: { enabled: boolean } | null } | null;
    sshPublicKeyIds?: string[] | null;
    secrets?: { name: string; type: "env"; secret: string }[] | null;
    vcpu?: number | null;
    memory?: string | null;
    disk?: { size: string } | null;
    environmentVariables?: { name: string; value: string }[] | null;
    labels?: { name: string; value: string }[] | null;
    network?: {
      assignIpv4?: "none" | "predefined" | "account" | null;
      assignIpv6?: "none" | "predefined" | "account" | null;
      mode?: "public" | "private" | null;
    } | null;
    command?: string[] | null;
    entrypoint?: string[] | null;
    dns?: { servers?: string[] | null; searches?: string[] | null } | null;
    ports?: { name: string; port?: number | null }[] | null;
    checks?:
      | {
          name?: string | null;
          type: "http" | "tcp";
          tls?: boolean | null;
          port: string;
          http?: {
            method?:
              | "GET"
              | "POST"
              | "PUT"
              | "PATCH"
              | "DELETE"
              | "OPTIONS"
              | "HEAD"
              | null;
            body?: string | null;
            path?: string | null;
            headers?: unknown | null;
          } | null;
          interval: string;
          timeout: string;
          retries?: number | null;
          kind: "health" | "ready";
        }[]
      | null;
  };
  durableObjects?: { namespaceId: string } | null;
  createdAt: string;
  version: number;
  durableObjectNamespaceId?: string | null;
  health: { instances: unknown };
}

export const UpdateContainerApplicationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    accountId: Schema.String,
    name: Schema.String,
    schedulingPolicy: Schema.Literals([
      "moon",
      "gpu",
      "regional",
      "fill_metals",
      "default",
    ]),
    instances: Schema.Number,
    maxInstances: Schema.Number,
    constraints: Schema.optional(
      Schema.Union([
        Schema.Struct({
          tier: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }),
        Schema.Null,
      ]),
    ),
    affinities: Schema.optional(
      Schema.Union([
        Schema.Struct({
          colocation: Schema.optional(
            Schema.Union([Schema.Literal("datacenter"), Schema.Null]),
          ),
        }),
        Schema.Null,
      ]),
    ),
    configuration: Schema.Struct({
      image: Schema.String,
      instanceType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "lite",
            "dev",
            "basic",
            "standard",
            "standard-1",
            "standard-2",
            "standard-3",
            "standard-4",
          ]),
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      sshPublicKeyIds: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      secrets: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literal("env"),
              secret: SensitiveString,
            }),
          ),
          Schema.Null,
        ]),
      ),
      vcpu: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      memory: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disk: Schema.optional(
        Schema.Union([
          Schema.Struct({
            size: Schema.String,
          }),
          Schema.Null,
        ]),
      ),
      environmentVariables: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      network: Schema.optional(
        Schema.Union([
          Schema.Struct({
            assignIpv4: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            assignIpv6: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            mode: Schema.optional(
              Schema.Union([
                Schema.Literals(["public", "private"]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              assignIpv4: "assign_ipv4",
              assignIpv6: "assign_ipv6",
              mode: "mode",
            }),
          ),
          Schema.Null,
        ]),
      ),
      command: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      entrypoint: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      dns: Schema.optional(
        Schema.Union([
          Schema.Struct({
            servers: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            searches: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      ports: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            }),
          ),
          Schema.Null,
        ]),
      ),
      checks: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              type: Schema.Literals(["http", "tcp"]),
              tls: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
              port: Schema.String,
              http: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    method: Schema.optional(
                      Schema.Union([
                        Schema.Literals([
                          "GET",
                          "POST",
                          "PUT",
                          "PATCH",
                          "DELETE",
                          "OPTIONS",
                          "HEAD",
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    body: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    path: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    headers: Schema.optional(
                      Schema.Union([Schema.Unknown, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              interval: Schema.String,
              timeout: Schema.String,
              retries: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              kind: Schema.Literals(["health", "ready"]),
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        image: "image",
        instanceType: "instance_type",
        observability: "observability",
        sshPublicKeyIds: "ssh_public_key_ids",
        secrets: "secrets",
        vcpu: "vcpu",
        memory: "memory",
        disk: "disk",
        environmentVariables: "environment_variables",
        labels: "labels",
        network: "network",
        command: "command",
        entrypoint: "entrypoint",
        dns: "dns",
        ports: "ports",
        checks: "checks",
      }),
    ),
    durableObjects: Schema.optional(
      Schema.Union([
        Schema.Struct({
          namespaceId: Schema.String,
        }).pipe(Schema.encodeKeys({ namespaceId: "namespace_id" })),
        Schema.Null,
      ]),
    ),
    createdAt: Schema.String,
    version: Schema.Number,
    durableObjectNamespaceId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    health: Schema.Struct({
      instances: Schema.Unknown,
    }),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        accountId: "account_id",
        name: "name",
        schedulingPolicy: "scheduling_policy",
        instances: "instances",
        maxInstances: "max_instances",
        constraints: "constraints",
        affinities: "affinities",
        configuration: "configuration",
        durableObjects: "durable_objects",
        createdAt: "created_at",
        version: "version",
        durableObjectNamespaceId: "durable_object_namespace_id",
        health: "health",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<UpdateContainerApplicationResponse>;

export type UpdateContainerApplicationError =
  | DefaultErrors
  | InvalidRoute
  | ContainerApplicationNotFound;

export const updateContainerApplication: API.OperationMethod<
  UpdateContainerApplicationRequest,
  UpdateContainerApplicationResponse,
  UpdateContainerApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContainerApplicationRequest,
  output: UpdateContainerApplicationResponse,
  errors: [InvalidRoute, ContainerApplicationNotFound],
}));

export interface DeleteContainerApplicationRequest {
  accountId: string;
  applicationId: string;
}

export const DeleteContainerApplicationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    applicationId: Schema.String.pipe(T.HttpPath("application_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/containers/applications/{application_id}",
    }),
  ) as unknown as Schema.Schema<DeleteContainerApplicationRequest>;

export type DeleteContainerApplicationResponse = unknown;

export const DeleteContainerApplicationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteContainerApplicationResponse>;

export type DeleteContainerApplicationError =
  | DefaultErrors
  | InvalidRoute
  | ContainerApplicationNotFound;

export const deleteContainerApplication: API.OperationMethod<
  DeleteContainerApplicationRequest,
  DeleteContainerApplicationResponse,
  DeleteContainerApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContainerApplicationRequest,
  output: DeleteContainerApplicationResponse,
  errors: [InvalidRoute, ContainerApplicationNotFound],
}));

// =============================================================================
// ContainerApplicationRollout
// =============================================================================

export interface CreateContainerApplicationRolloutRequest {
  accountId: string;
  applicationId: string;
  description: string;
  strategy: "rolling";
  kind?: "full_auto";
  stepPercentage: number;
  targetConfiguration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4";
    observability?: { logs?: { enabled: boolean } };
    sshPublicKeyIds?: string[];
    secrets?: { name: string; type: "env"; secret: string }[];
    vcpu?: number;
    memory?: string;
    disk?: { size: string };
    environmentVariables?: { name: string; value: string }[];
    labels?: { name: string; value: string }[];
    network?: {
      assignIpv4?: "none" | "predefined" | "account";
      assignIpv6?: "none" | "predefined" | "account";
      mode?: "public" | "private";
    };
    command?: string[];
    entrypoint?: string[];
    dns?: { servers?: string[]; searches?: string[] };
    ports?: { name: string; port?: number }[];
    checks?: {
      name?: string;
      type: "http" | "tcp";
      tls?: boolean;
      port: string;
      http?: {
        method?:
          | "GET"
          | "POST"
          | "PUT"
          | "PATCH"
          | "DELETE"
          | "OPTIONS"
          | "HEAD";
        body?: string;
        path?: string;
        headers?: unknown;
      };
      interval: string;
      timeout: string;
      retries?: number;
      kind: "health" | "ready";
    }[];
  };
}

export const CreateContainerApplicationRolloutRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    applicationId: Schema.String.pipe(T.HttpPath("application_id")),
    description: Schema.String,
    strategy: Schema.Literal("rolling"),
    kind: Schema.optional(Schema.Literal("full_auto")),
    stepPercentage: Schema.Number,
    targetConfiguration: Schema.Struct({
      image: Schema.String,
      instanceType: Schema.optional(
        Schema.Literals([
          "lite",
          "dev",
          "basic",
          "standard",
          "standard-1",
          "standard-2",
          "standard-3",
          "standard-4",
        ]),
      ),
      observability: Schema.optional(
        Schema.Struct({
          logs: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
            }),
          ),
        }),
      ),
      sshPublicKeyIds: Schema.optional(Schema.Array(Schema.String)),
      secrets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            type: Schema.Literal("env"),
            secret: SensitiveString,
          }),
        ),
      ),
      vcpu: Schema.optional(Schema.Number),
      memory: Schema.optional(Schema.String),
      disk: Schema.optional(
        Schema.Struct({
          size: Schema.String,
        }),
      ),
      environmentVariables: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      labels: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      network: Schema.optional(
        Schema.Struct({
          assignIpv4: Schema.optional(
            Schema.Literals(["none", "predefined", "account"]),
          ),
          assignIpv6: Schema.optional(
            Schema.Literals(["none", "predefined", "account"]),
          ),
          mode: Schema.optional(Schema.Literals(["public", "private"])),
        }).pipe(
          Schema.encodeKeys({
            assignIpv4: "assign_ipv4",
            assignIpv6: "assign_ipv6",
            mode: "mode",
          }),
        ),
      ),
      command: Schema.optional(Schema.Array(Schema.String)),
      entrypoint: Schema.optional(Schema.Array(Schema.String)),
      dns: Schema.optional(
        Schema.Struct({
          servers: Schema.optional(Schema.Array(Schema.String)),
          searches: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      ports: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            port: Schema.optional(Schema.Number),
          }),
        ),
      ),
      checks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.Literals(["http", "tcp"]),
            tls: Schema.optional(Schema.Boolean),
            port: Schema.String,
            http: Schema.optional(
              Schema.Struct({
                method: Schema.optional(
                  Schema.Literals([
                    "GET",
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE",
                    "OPTIONS",
                    "HEAD",
                  ]),
                ),
                body: Schema.optional(Schema.String),
                path: Schema.optional(Schema.String),
                headers: Schema.optional(Schema.Unknown),
              }),
            ),
            interval: Schema.String,
            timeout: Schema.String,
            retries: Schema.optional(Schema.Number),
            kind: Schema.Literals(["health", "ready"]),
          }),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        image: "image",
        instanceType: "instance_type",
        observability: "observability",
        sshPublicKeyIds: "ssh_public_key_ids",
        secrets: "secrets",
        vcpu: "vcpu",
        memory: "memory",
        disk: "disk",
        environmentVariables: "environment_variables",
        labels: "labels",
        network: "network",
        command: "command",
        entrypoint: "entrypoint",
        dns: "dns",
        ports: "ports",
        checks: "checks",
      }),
    ),
  }).pipe(
    Schema.encodeKeys({
      description: "description",
      strategy: "strategy",
      kind: "kind",
      stepPercentage: "step_percentage",
      targetConfiguration: "target_configuration",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/containers/applications/{application_id}/rollouts",
    }),
  ) as unknown as Schema.Schema<CreateContainerApplicationRolloutRequest>;

export interface CreateContainerApplicationRolloutResponse {
  id: string;
  createdAt: string;
  lastUpdatedAt: string;
  description: string;
  status: "progressing" | "completed" | "failed";
  health: {
    instances: {
      healthy: number;
      failed: number;
      starting: number;
      scheduling: number;
    };
  };
  kind: "full_auto";
  strategy: "rolling";
  currentConfiguration: {
    image: string;
    observability?: { logs?: { enabled: boolean } | null } | null;
  };
  targetConfiguration: {
    image: string;
    instanceType?:
      | "lite"
      | "dev"
      | "basic"
      | "standard"
      | "standard-1"
      | "standard-2"
      | "standard-3"
      | "standard-4"
      | null;
    observability?: { logs?: { enabled: boolean } | null } | null;
    sshPublicKeyIds?: string[] | null;
    secrets?: { name: string; type: "env"; secret: string }[] | null;
    vcpu?: number | null;
    memory?: string | null;
    disk?: { size: string } | null;
    environmentVariables?: { name: string; value: string }[] | null;
    labels?: { name: string; value: string }[] | null;
    network?: {
      assignIpv4?: "none" | "predefined" | "account" | null;
      assignIpv6?: "none" | "predefined" | "account" | null;
      mode?: "public" | "private" | null;
    } | null;
    command?: string[] | null;
    entrypoint?: string[] | null;
    dns?: { servers?: string[] | null; searches?: string[] | null } | null;
    ports?: { name: string; port?: number | null }[] | null;
    checks?:
      | {
          name?: string | null;
          type: "http" | "tcp";
          tls?: boolean | null;
          port: string;
          http?: {
            method?:
              | "GET"
              | "POST"
              | "PUT"
              | "PATCH"
              | "DELETE"
              | "OPTIONS"
              | "HEAD"
              | null;
            body?: string | null;
            path?: string | null;
            headers?: unknown | null;
          } | null;
          interval: string;
          timeout: string;
          retries?: number | null;
          kind: "health" | "ready";
        }[]
      | null;
  };
  currentVersion: number;
  targetVersion: number;
  steps: {
    id: number;
    status: "progressing" | "pending" | "completed" | "failed";
    stepSize: { percentage: number };
    description: string;
    startedAt?: string | null;
  }[];
  progress: {
    totalSteps: number;
    currentStep: number;
    updatedInstances: number;
    totalInstances: number;
  };
}

export const CreateContainerApplicationRolloutResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    lastUpdatedAt: Schema.String,
    description: Schema.String,
    status: Schema.Literals(["progressing", "completed", "failed"]),
    health: Schema.Struct({
      instances: Schema.Struct({
        healthy: Schema.Number,
        failed: Schema.Number,
        starting: Schema.Number,
        scheduling: Schema.Number,
      }),
    }),
    kind: Schema.Literal("full_auto"),
    strategy: Schema.Literal("rolling"),
    currentConfiguration: Schema.Struct({
      image: Schema.String,
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
    }),
    targetConfiguration: Schema.Struct({
      image: Schema.String,
      instanceType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "lite",
            "dev",
            "basic",
            "standard",
            "standard-1",
            "standard-2",
            "standard-3",
            "standard-4",
          ]),
          Schema.Null,
        ]),
      ),
      observability: Schema.optional(
        Schema.Union([
          Schema.Struct({
            logs: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  enabled: Schema.Boolean,
                }),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      sshPublicKeyIds: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      secrets: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literal("env"),
              secret: SensitiveString,
            }),
          ),
          Schema.Null,
        ]),
      ),
      vcpu: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      memory: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      disk: Schema.optional(
        Schema.Union([
          Schema.Struct({
            size: Schema.String,
          }),
          Schema.Null,
        ]),
      ),
      environmentVariables: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      labels: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
          Schema.Null,
        ]),
      ),
      network: Schema.optional(
        Schema.Union([
          Schema.Struct({
            assignIpv4: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            assignIpv6: Schema.optional(
              Schema.Union([
                Schema.Literals(["none", "predefined", "account"]),
                Schema.Null,
              ]),
            ),
            mode: Schema.optional(
              Schema.Union([
                Schema.Literals(["public", "private"]),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              assignIpv4: "assign_ipv4",
              assignIpv6: "assign_ipv6",
              mode: "mode",
            }),
          ),
          Schema.Null,
        ]),
      ),
      command: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      entrypoint: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      dns: Schema.optional(
        Schema.Union([
          Schema.Struct({
            servers: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            searches: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      ports: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            }),
          ),
          Schema.Null,
        ]),
      ),
      checks: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              type: Schema.Literals(["http", "tcp"]),
              tls: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
              port: Schema.String,
              http: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    method: Schema.optional(
                      Schema.Union([
                        Schema.Literals([
                          "GET",
                          "POST",
                          "PUT",
                          "PATCH",
                          "DELETE",
                          "OPTIONS",
                          "HEAD",
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    body: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    path: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    headers: Schema.optional(
                      Schema.Union([Schema.Unknown, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              interval: Schema.String,
              timeout: Schema.String,
              retries: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              kind: Schema.Literals(["health", "ready"]),
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        image: "image",
        instanceType: "instance_type",
        observability: "observability",
        sshPublicKeyIds: "ssh_public_key_ids",
        secrets: "secrets",
        vcpu: "vcpu",
        memory: "memory",
        disk: "disk",
        environmentVariables: "environment_variables",
        labels: "labels",
        network: "network",
        command: "command",
        entrypoint: "entrypoint",
        dns: "dns",
        ports: "ports",
        checks: "checks",
      }),
    ),
    currentVersion: Schema.Number,
    targetVersion: Schema.Number,
    steps: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        status: Schema.Literals([
          "progressing",
          "pending",
          "completed",
          "failed",
        ]),
        stepSize: Schema.Struct({
          percentage: Schema.Number,
        }),
        description: Schema.String,
        startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          status: "status",
          stepSize: "step_size",
          description: "description",
          startedAt: "started_at",
        }),
      ),
    ),
    progress: Schema.Struct({
      totalSteps: Schema.Number,
      currentStep: Schema.Number,
      updatedInstances: Schema.Number,
      totalInstances: Schema.Number,
    }).pipe(
      Schema.encodeKeys({
        totalSteps: "total_steps",
        currentStep: "current_step",
        updatedInstances: "updated_instances",
        totalInstances: "total_instances",
      }),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        lastUpdatedAt: "last_updated_at",
        description: "description",
        status: "status",
        health: "health",
        kind: "kind",
        strategy: "strategy",
        currentConfiguration: "current_configuration",
        targetConfiguration: "target_configuration",
        currentVersion: "current_version",
        targetVersion: "target_version",
        steps: "steps",
        progress: "progress",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateContainerApplicationRolloutResponse>;

export type CreateContainerApplicationRolloutError =
  | DefaultErrors
  | InvalidRoute
  | ContainerApplicationNotFound;

export const createContainerApplicationRollout: API.OperationMethod<
  CreateContainerApplicationRolloutRequest,
  CreateContainerApplicationRolloutResponse,
  CreateContainerApplicationRolloutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateContainerApplicationRolloutRequest,
  output: CreateContainerApplicationRolloutResponse,
  errors: [InvalidRoute, ContainerApplicationNotFound],
}));

// =============================================================================
// ContainerIdentity
// =============================================================================

export interface GetContainerIdentityRequest {
  accountId: string;
}

export const GetContainerIdentityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/containers/me" }),
  ) as unknown as Schema.Schema<GetContainerIdentityRequest>;

export interface GetContainerIdentityResponse {
  accountId?: string | null;
  externalAccountId: string;
  legacyIdentity: string;
  capabilities?: string[] | null;
  limits: {
    accountId: string;
    vcpuPerDeployment: number;
    memoryMibPerDeployment: number;
    memoryPerDeployment: string;
    diskPerDeployment: string;
    diskMbPerDeployment: number;
    totalVcpu: number;
    totalMemoryMib: number;
    nodeGroup: string;
    ipv4s: number;
    networkModes: string[];
    totalDiskMb: number;
    totalMemory: string;
  };
  locations: unknown[];
  defaults: {
    vcpus: number;
    memoryMib: number;
    memory: string;
    diskMb: number;
  };
}

export const GetContainerIdentityResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    externalAccountId: Schema.String,
    legacyIdentity: Schema.String,
    capabilities: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    limits: Schema.Struct({
      accountId: Schema.String,
      vcpuPerDeployment: Schema.Number,
      memoryMibPerDeployment: Schema.Number,
      memoryPerDeployment: Schema.String,
      diskPerDeployment: Schema.String,
      diskMbPerDeployment: Schema.Number,
      totalVcpu: Schema.Number,
      totalMemoryMib: Schema.Number,
      nodeGroup: Schema.String,
      ipv4s: Schema.Number,
      networkModes: Schema.Array(Schema.String),
      totalDiskMb: Schema.Number,
      totalMemory: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        accountId: "account_id",
        vcpuPerDeployment: "vcpu_per_deployment",
        memoryMibPerDeployment: "memory_mib_per_deployment",
        memoryPerDeployment: "memory_per_deployment",
        diskPerDeployment: "disk_per_deployment",
        diskMbPerDeployment: "disk_mb_per_deployment",
        totalVcpu: "total_vcpu",
        totalMemoryMib: "total_memory_mib",
        nodeGroup: "node_group",
        ipv4s: "ipv4s",
        networkModes: "network_modes",
        totalDiskMb: "total_disk_mb",
        totalMemory: "total_memory",
      }),
    ),
    locations: Schema.Array(Schema.Unknown),
    defaults: Schema.Struct({
      vcpus: Schema.Number,
      memoryMib: Schema.Number,
      memory: Schema.String,
      diskMb: Schema.Number,
    }).pipe(
      Schema.encodeKeys({
        vcpus: "vcpus",
        memoryMib: "memory_mib",
        memory: "memory",
        diskMb: "disk_mb",
      }),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        accountId: "account_id",
        externalAccountId: "external_account_id",
        legacyIdentity: "legacy_identity",
        capabilities: "capabilities",
        limits: "limits",
        locations: "locations",
        defaults: "defaults",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetContainerIdentityResponse>;

export type GetContainerIdentityError = DefaultErrors | InvalidRoute;

export const getContainerIdentity: API.OperationMethod<
  GetContainerIdentityRequest,
  GetContainerIdentityResponse,
  GetContainerIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContainerIdentityRequest,
  output: GetContainerIdentityResponse,
  errors: [InvalidRoute],
}));

// =============================================================================
// ContainerRegistryCredential
// =============================================================================

export interface CreateContainerRegistryCredentialsRequest {
  accountId: string;
  registryId: string;
  permissions: ("pull" | "push")[];
  expirationMinutes: number;
}

export const CreateContainerRegistryCredentialsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    registryId: Schema.String.pipe(T.HttpPath("registry_id")),
    permissions: Schema.Array(Schema.Literals(["pull", "push"])),
    expirationMinutes: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      permissions: "permissions",
      expirationMinutes: "expiration_minutes",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/containers/registries/{registry_id}/credentials",
    }),
  ) as unknown as Schema.Schema<CreateContainerRegistryCredentialsRequest>;

export interface CreateContainerRegistryCredentialsResponse {
  user?: string | null;
  username?: string | null;
  password: string;
}

export const CreateContainerRegistryCredentialsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    password: Schema.String,
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateContainerRegistryCredentialsResponse>;

export type CreateContainerRegistryCredentialsError =
  | DefaultErrors
  | InvalidRoute;

export const createContainerRegistryCredentials: API.OperationMethod<
  CreateContainerRegistryCredentialsRequest,
  CreateContainerRegistryCredentialsResponse,
  CreateContainerRegistryCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateContainerRegistryCredentialsRequest,
  output: CreateContainerRegistryCredentialsResponse,
  errors: [InvalidRoute],
}));
