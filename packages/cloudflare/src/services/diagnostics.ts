/**
 * Cloudflare DIAGNOSTICS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service diagnostics
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class EndpointHealthcheckNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EndpointHealthcheckNotFound>()(
    "EndpointHealthcheckNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1022 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InvalidHealthcheckEndpoint extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidHealthcheckEndpoint>()(
    "InvalidHealthcheckEndpoint",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1002 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListEndpointHealthchecksResponse2 {
  /** type of check to perform */
  checkType: "icmp";
  /** the IP address of the host to perform checks against */
  endpoint: string;
  /** UUID. */
  id?: string | null;
  /** Optional name associated with this check */
  name?: string | null;
}
const ListEndpointHealthchecksResponse2 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkType: Schema.Literal("icmp"),
      endpoint: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        checkType: "check_type",
        endpoint: "endpoint",
        id: "id",
        name: "name",
      }),
    ),
  ) as unknown as Schema.Codec<ListEndpointHealthchecksResponse2>;

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface Error2 {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const Error2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
    documentationUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    source: Schema.optional(Schema.Union([Source, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      code: "code",
      message: "message",
      documentationUrl: "documentation_url",
      source: "source",
    }),
  ),
) as unknown as Schema.Codec<Error2>;

interface Options {
  /** Max TTL. */
  maxTtl?: number | null;
  /** Type of packet sent. */
  packetType?:
    | "icmp"
    | "tcp"
    | "udp"
    | "gre"
    | "gre+icmp"
    | (string & {})
    | null;
  /** Number of packets sent at each TTL. */
  packetsPerTtl?: number | null;
  /** For UDP and TCP, specifies the destination port. For ICMP, specifies the initial ICMP sequence value. Default value 0 will choose the best value to use for each protocol. */
  port?: number | null;
  /** Set the time (in seconds) to wait for a response to a probe. */
  waitTime?: number | null;
}
const Options = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    packetType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["icmp", "tcp", "udp", "gre", "gre+icmp"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    packetsPerTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    waitTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      maxTtl: "max_ttl",
      packetType: "packet_type",
      packetsPerTtl: "packets_per_ttl",
      port: "port",
      waitTime: "wait_time",
    }),
  ),
) as unknown as Schema.Codec<Options>;

interface Colo {
  /** Source colo city. */
  city?: string | null;
  /** Source colo name. */
  name?: string | null;
}
const Colo = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    city: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Colo>;

interface Node {
  /** AS number associated with the node object. */
  asn?: string | null;
  /** IP address of the node. */
  ip?: string | null;
  /** Field appears if there is an additional annotation printed when the probe returns. Field also appears when running a GRE+ICMP traceroute to denote which traceroute a node comes from. */
  labels?: string[] | null;
  /** Maximum RTT in ms. */
  maxRttMs?: number | null;
  /** Mean RTT in ms. */
  meanRttMs?: number | null;
  /** Minimum RTT in ms. */
  minRttMs?: number | null;
  /** Host name of the address, this may be the same as the IP address. */
  name?: string | null;
  /** Number of packets with a response from this node. */
  packetCount?: number | null;
  /** Standard deviation of the RTTs in ms. */
  stdDevRttMs?: number | null;
}
const Node = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    labels: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    maxRttMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    meanRttMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    minRttMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    packetCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    stdDevRttMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      asn: "asn",
      ip: "ip",
      labels: "labels",
      maxRttMs: "max_rtt_ms",
      meanRttMs: "mean_rtt_ms",
      minRttMs: "min_rtt_ms",
      name: "name",
      packetCount: "packet_count",
      stdDevRttMs: "std_dev_rtt_ms",
    }),
  ),
) as unknown as Schema.Codec<Node>;

interface Hop {
  /** An array of node objects. */
  nodes?:
    | {
        asn?: string | null;
        ip?: string | null;
        labels?: string[] | null;
        maxRttMs?: number | null;
        meanRttMs?: number | null;
        minRttMs?: number | null;
        name?: string | null;
        packetCount?: number | null;
        stdDevRttMs?: number | null;
      }[]
    | null;
  /** Number of packets where no response was received. */
  packetsLost?: number | null;
  /** Number of packets sent with specified TTL. */
  packetsSent?: number | null;
  /** The time to live (TTL). */
  packetsTtl?: number | null;
}
const Hop = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    nodes: Schema.optional(Schema.Union([Schema.Array(Node), Schema.Null])),
    packetsLost: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    packetsSent: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    packetsTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      nodes: "nodes",
      packetsLost: "packets_lost",
      packetsSent: "packets_sent",
      packetsTtl: "packets_ttl",
    }),
  ),
) as unknown as Schema.Codec<Hop>;

interface Colo2 {
  colo?: { city?: string | null; name?: string | null } | null;
  /** Errors resulting from collecting traceroute from colo to target. */
  error?:
    | ""
    | "Could not gather traceroute data: Code 1"
    | "Could not gather traceroute data: Code 2"
    | "Could not gather traceroute data: Code 3"
    | "Could not gather traceroute data: Code 4"
    | (string & {})
    | null;
  hops?:
    | {
        nodes?:
          | {
              asn?: string | null;
              ip?: string | null;
              labels?: string[] | null;
              maxRttMs?: number | null;
              meanRttMs?: number | null;
              minRttMs?: number | null;
              name?: string | null;
              packetCount?: number | null;
              stdDevRttMs?: number | null;
            }[]
          | null;
        packetsLost?: number | null;
        packetsSent?: number | null;
        packetsTtl?: number | null;
      }[]
    | null;
  /** Aggregated statistics from all hops about the target. */
  targetSummary?: unknown | null;
  /** Total time of traceroute in ms. */
  tracerouteTimeMs?: number | null;
}
const Colo2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    colo: Schema.optional(Schema.Union([Colo, Schema.Null])),
    error: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "",
            "Could not gather traceroute data: Code 1",
            "Could not gather traceroute data: Code 2",
            "Could not gather traceroute data: Code 3",
            "Could not gather traceroute data: Code 4",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    hops: Schema.optional(Schema.Union([Schema.Array(Hop), Schema.Null])),
    targetSummary: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    tracerouteTimeMs: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      colo: "colo",
      error: "error",
      hops: "hops",
      targetSummary: "target_summary",
      tracerouteTimeMs: "traceroute_time_ms",
    }),
  ),
) as unknown as Schema.Codec<Colo2>;

interface CreateTracerouteResponseResult {
  colos?:
    | {
        colo?: { city?: string | null; name?: string | null } | null;
        error?:
          | ""
          | "Could not gather traceroute data: Code 1"
          | "Could not gather traceroute data: Code 2"
          | "Could not gather traceroute data: Code 3"
          | "Could not gather traceroute data: Code 4"
          | (string & {})
          | null;
        hops?:
          | {
              nodes?:
                | {
                    asn?: string | null;
                    ip?: string | null;
                    labels?: string[] | null;
                    maxRttMs?: number | null;
                    meanRttMs?: number | null;
                    minRttMs?: number | null;
                    name?: string | null;
                    packetCount?: number | null;
                    stdDevRttMs?: number | null;
                  }[]
                | null;
              packetsLost?: number | null;
              packetsSent?: number | null;
              packetsTtl?: number | null;
            }[]
          | null;
        targetSummary?: unknown | null;
        tracerouteTimeMs?: number | null;
      }[]
    | null;
  /** The target hostname, IPv6, or IPv6 address. */
  target?: string | null;
}
const CreateTracerouteResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      colos: Schema.optional(Schema.Union([Schema.Array(Colo2), Schema.Null])),
      target: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateTracerouteResponseResult>;

// =============================================================================
// EndpointHealthcheck
// =============================================================================

export interface GetEndpointHealthcheckRequest {
  id: string;
  /** Identifier */
  accountId: string;
}

export const GetEndpointHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/diagnostics/endpoint-healthchecks/{id}",
      }),
    ),
  ) as unknown as Schema.Codec<GetEndpointHealthcheckRequest>;

export interface GetEndpointHealthcheckResponse {
  /** type of check to perform */
  checkType: "icmp";
  /** the IP address of the host to perform checks against */
  endpoint: string;
  /** UUID. */
  id?: string | null;
  /** Optional name associated with this check */
  name?: string | null;
}

export const GetEndpointHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkType: Schema.Literal("icmp"),
      endpoint: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          checkType: "check_type",
          endpoint: "endpoint",
          id: "id",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetEndpointHealthcheckResponse>;

export type GetEndpointHealthcheckError =
  | DefaultErrors
  | EndpointHealthcheckNotFound
  | Forbidden;

export const getEndpointHealthcheck: API.OperationMethod<
  GetEndpointHealthcheckRequest,
  GetEndpointHealthcheckResponse,
  GetEndpointHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEndpointHealthcheckRequest,
  output: GetEndpointHealthcheckResponse,
  errors: [EndpointHealthcheckNotFound, Forbidden],
}));

export interface ListEndpointHealthchecksRequest {
  /** Identifier */
  accountId: string;
}

export const ListEndpointHealthchecksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/diagnostics/endpoint-healthchecks",
      }),
    ),
  ) as unknown as Schema.Codec<ListEndpointHealthchecksRequest>;

export type ListEndpointHealthchecksResponse = {
  checkType: "icmp";
  endpoint: string;
  id?: string | null;
  name?: string | null;
}[];

export const ListEndpointHealthchecksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(ListEndpointHealthchecksResponse2).pipe(
      T.ResponsePath("result"),
    ),
  ) as unknown as Schema.Codec<ListEndpointHealthchecksResponse>;

export type ListEndpointHealthchecksError = DefaultErrors | Forbidden;

export const listEndpointHealthchecks: API.OperationMethod<
  ListEndpointHealthchecksRequest,
  ListEndpointHealthchecksResponse,
  ListEndpointHealthchecksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEndpointHealthchecksRequest,
  output: ListEndpointHealthchecksResponse,
  errors: [Forbidden],
}));

export interface CreateEndpointHealthcheckRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: type of check to perform */
  checkType: "icmp";
  /** Body param: the IP address of the host to perform checks against */
  endpoint: string;
  /** Body param: Optional name associated with this check */
  name?: string;
}

export const CreateEndpointHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      checkType: Schema.Literal("icmp"),
      endpoint: Schema.String,
      name: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        checkType: "check_type",
        endpoint: "endpoint",
        name: "name",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/diagnostics/endpoint-healthchecks",
      }),
    ),
  ) as unknown as Schema.Codec<CreateEndpointHealthcheckRequest>;

export interface CreateEndpointHealthcheckResponse {
  /** type of check to perform */
  checkType: "icmp";
  /** the IP address of the host to perform checks against */
  endpoint: string;
  /** UUID. */
  id?: string | null;
  /** Optional name associated with this check */
  name?: string | null;
}

export const CreateEndpointHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkType: Schema.Literal("icmp"),
      endpoint: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          checkType: "check_type",
          endpoint: "endpoint",
          id: "id",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateEndpointHealthcheckResponse>;

export type CreateEndpointHealthcheckError =
  | DefaultErrors
  | InvalidHealthcheckEndpoint
  | Forbidden;

export const createEndpointHealthcheck: API.OperationMethod<
  CreateEndpointHealthcheckRequest,
  CreateEndpointHealthcheckResponse,
  CreateEndpointHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEndpointHealthcheckRequest,
  output: CreateEndpointHealthcheckResponse,
  errors: [InvalidHealthcheckEndpoint, Forbidden],
}));

export interface UpdateEndpointHealthcheckRequest {
  id: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: type of check to perform */
  checkType: "icmp";
  /** Body param: the IP address of the host to perform checks against */
  endpoint: string;
  /** Body param: Optional name associated with this check */
  name?: string;
}

export const UpdateEndpointHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      checkType: Schema.Literal("icmp"),
      endpoint: Schema.String,
      name: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        checkType: "check_type",
        endpoint: "endpoint",
        name: "name",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/diagnostics/endpoint-healthchecks/{id}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateEndpointHealthcheckRequest>;

export interface UpdateEndpointHealthcheckResponse {
  /** type of check to perform */
  checkType: "icmp";
  /** the IP address of the host to perform checks against */
  endpoint: string;
  /** UUID. */
  id?: string | null;
  /** Optional name associated with this check */
  name?: string | null;
}

export const UpdateEndpointHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      checkType: Schema.Literal("icmp"),
      endpoint: Schema.String,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          checkType: "check_type",
          endpoint: "endpoint",
          id: "id",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateEndpointHealthcheckResponse>;

export type UpdateEndpointHealthcheckError =
  | DefaultErrors
  | EndpointHealthcheckNotFound
  | InvalidHealthcheckEndpoint
  | Forbidden;

export const updateEndpointHealthcheck: API.OperationMethod<
  UpdateEndpointHealthcheckRequest,
  UpdateEndpointHealthcheckResponse,
  UpdateEndpointHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEndpointHealthcheckRequest,
  output: UpdateEndpointHealthcheckResponse,
  errors: [EndpointHealthcheckNotFound, InvalidHealthcheckEndpoint, Forbidden],
}));

export interface DeleteEndpointHealthcheckRequest {
  id: string;
  /** Identifier */
  accountId: string;
}

export const DeleteEndpointHealthcheckRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/diagnostics/endpoint-healthchecks/{id}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteEndpointHealthcheckRequest>;

export interface DeleteEndpointHealthcheckResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteEndpointHealthcheckResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DeleteEndpointHealthcheckResponse>;

export type DeleteEndpointHealthcheckError =
  | DefaultErrors
  | EndpointHealthcheckNotFound
  | Forbidden;

export const deleteEndpointHealthcheck: API.OperationMethod<
  DeleteEndpointHealthcheckRequest,
  DeleteEndpointHealthcheckResponse,
  DeleteEndpointHealthcheckError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEndpointHealthcheckRequest,
  output: DeleteEndpointHealthcheckResponse,
  errors: [EndpointHealthcheckNotFound, Forbidden],
}));

// =============================================================================
// Traceroute
// =============================================================================

export interface CreateTracerouteRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param */
  targets: string[];
  /** Body param: If no source colo names specified, all colos will be used. China colos are unavailable for traceroutes. */
  colos?: string[];
  /** Body param */
  options?: {
    maxTtl?: number;
    packetType?: "icmp" | "tcp" | "udp" | "gre" | "gre+icmp" | (string & {});
    packetsPerTtl?: number;
    port?: number;
    waitTime?: number;
  };
}

export const CreateTracerouteRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      targets: Schema.Array(Schema.String),
      colos: Schema.optional(Schema.Array(Schema.String)),
      options: Schema.optional(Options),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/diagnostics/traceroute",
      }),
    ),
  ) as unknown as Schema.Codec<CreateTracerouteRequest>;

export interface CreateTracerouteResponse {
  result: {
    colos?:
      | {
          colo?: { city?: string | null; name?: string | null } | null;
          error?:
            | ""
            | "Could not gather traceroute data: Code 1"
            | "Could not gather traceroute data: Code 2"
            | "Could not gather traceroute data: Code 3"
            | "Could not gather traceroute data: Code 4"
            | (string & {})
            | null;
          hops?:
            | {
                nodes?:
                  | {
                      asn?: string | null;
                      ip?: string | null;
                      labels?: string[] | null;
                      maxRttMs?: number | null;
                      meanRttMs?: number | null;
                      minRttMs?: number | null;
                      name?: string | null;
                      packetCount?: number | null;
                      stdDevRttMs?: number | null;
                    }[]
                  | null;
                packetsLost?: number | null;
                packetsSent?: number | null;
                packetsTtl?: number | null;
              }[]
            | null;
          targetSummary?: unknown | null;
          tracerouteTimeMs?: number | null;
        }[]
      | null;
    target?: string | null;
  }[];
}

export const CreateTracerouteResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(CreateTracerouteResponseResult),
    }),
  ) as unknown as Schema.Codec<CreateTracerouteResponse>;

export type CreateTracerouteError = DefaultErrors;

export const createTraceroute: API.PaginatedOperationMethod<
  CreateTracerouteRequest,
  CreateTracerouteResponse,
  CreateTracerouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: CreateTracerouteRequest,
  output: CreateTracerouteResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));
