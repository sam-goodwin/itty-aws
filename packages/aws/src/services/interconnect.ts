import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Interconnect",
  serviceShapeName: "Interconnect",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "interconnect" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-07-26");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://interconnect-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://interconnect.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export type DirectConnectGatewayAttachPoint = string;
export type AmazonResourceName = string;
export type AttachPoint =
  | { directConnectGateway: string; arn?: never }
  | { directConnectGateway?: never; arn: string };
export type ActivationKey = string | redacted.Redacted<string>;
export type ConnectionDescription = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface AcceptConnectionProposalRequest {
  attachPoint: AttachPoint;
  activationKey: string | redacted.Redacted<string>;
  description?: string;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export type ConnectionId = string;
export type ConnectionBandwidth = string;
export type EnvironmentId = string;
export type CloudServiceProvider = string;
export type LastMileProvider = string;
export type Provider =
  | { cloudServiceProvider: string; lastMileProvider?: never }
  | { cloudServiceProvider?: never; lastMileProvider: string };
export type Location = string;
export type ProductType = string;
export type ConnectionState =
  | "available"
  | "requested"
  | "pending"
  | "down"
  | "deleting"
  | "deleted"
  | "failed"
  | "updating"
  | (string & {});
export type ConnectionSharedId = string;
export type BillingTier = number;
export type OwnerAccountId = string;
export interface Connection {
  id: string;
  arn: string;
  description: string;
  bandwidth: string;
  attachPoint: AttachPoint;
  environmentId: string;
  provider: Provider;
  location: string;
  type: string;
  state: ConnectionState;
  sharedId: string;
  billingTier?: number;
  ownerAccount: string;
  activationKey: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
}
export interface AcceptConnectionProposalResponse {
  connection?: Connection;
}
export type RemoteOwnerAccount = string;
export type RemoteAccountIdentifier = { identifier: string };
export interface CreateConnectionRequest {
  description?: string;
  bandwidth: string;
  attachPoint: AttachPoint;
  environmentId: string;
  remoteAccount?: RemoteAccountIdentifier;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export interface CreateConnectionResponse {
  connection?: Connection;
}
export interface DeleteConnectionRequest {
  identifier: string;
  clientToken?: string;
}
export interface DeleteConnectionResponse {
  connection: Connection;
}
export interface DescribeConnectionProposalRequest {
  activationKey: string | redacted.Redacted<string>;
}
export interface DescribeConnectionProposalResponse {
  bandwidth: string;
  environmentId: string;
  provider: Provider;
  location: string;
}
export interface GetConnectionRequest {
  identifier: string;
}
export interface GetConnectionResponse {
  connection?: Connection;
}
export interface GetEnvironmentRequest {
  id: string;
}
export type EnvironmentState = "available" | "limited" | "unavailable" | (string & {});
export type BandwidthList = string[];
export interface Bandwidths {
  available?: string[];
  supported?: string[];
}
export type RemoteAccountIdentifierType = "account" | "email" | (string & {});
export interface Environment {
  provider: Provider;
  location: string;
  environmentId: string;
  state: EnvironmentState;
  bandwidths: Bandwidths;
  type: string;
  activationPageUrl?: string;
  remoteIdentifierType?: RemoteAccountIdentifierType;
}
export interface GetEnvironmentResponse {
  environment: Environment;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListAttachPointsRequest {
  environmentId: string;
  maxResults?: number;
  nextToken?: string;
}
export type AttachPointType = "DirectConnectGateway" | (string & {});
export interface AttachPointDescriptor {
  type: AttachPointType;
  identifier: string;
  name: string;
}
export type AttachPointDescriptorList = AttachPointDescriptor[];
export interface ListAttachPointsResponse {
  attachPoints: AttachPointDescriptor[];
  nextToken?: string;
}
export interface ListConnectionsRequest {
  maxResults?: number;
  nextToken?: string;
  state?: ConnectionState;
  environmentId?: string;
  provider?: Provider;
  attachPoint?: AttachPoint;
}
export interface ConnectionSummary {
  id: string;
  arn: string;
  description: string;
  bandwidth: string;
  attachPoint: AttachPoint;
  environmentId: string;
  provider: Provider;
  location: string;
  type: string;
  state: ConnectionState;
  sharedId: string;
  billingTier?: number;
}
export type ConnectionSummariesList = ConnectionSummary[];
export interface ListConnectionsResponse {
  connections?: ConnectionSummary[];
  nextToken?: string;
}
export interface ListEnvironmentsRequest {
  maxResults?: number;
  nextToken?: string;
  provider?: Provider;
  location?: string;
}
export type EnvironmentList = Environment[];
export interface ListEnvironmentsResponse {
  environments: Environment[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateConnectionRequest {
  identifier: string;
  description?: string;
  bandwidth?: string;
  clientToken?: string;
}
export interface UpdateConnectionResponse {
  connection?: Connection;
}
export type AcceptConnectionProposalError = CommonErrors;
/**
 * Accepts a connection proposal which was generated at a supported partner's portal.
 *
 * The proposal contains the Environment and bandwidth that were chosen on the partner's portal and cannot be modified.
 *
 * Upon accepting the proposal a connection will be made between the AWS network as accessed via the selected Attach Point and the network previously selected network on the partner's portal.
 */
export const acceptConnectionProposal: API.OperationMethod<
  AcceptConnectionProposalRequest,
  AcceptConnectionProposalResponse,
  AcceptConnectionProposalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<AcceptConnectionProposalRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<AcceptConnectionProposalResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptConnectionProposal",
}));

export type CreateConnectionError = CommonErrors;
/**
 * Initiates the process to create a Connection across the specified Environment.
 *
 * The Environment dictates the specified partner and location to which the other end of the connection should attach. You can see a list of the available Environments by calling ListEnvironments
 *
 * The Attach Point specifies where within the AWS Network your connection will logically connect.
 *
 * After a successful call to this method, the resulting Connection will return an Activation Key which will need to be brought to the specific partner's portal to confirm the Connection on both sides. (See Environment$activationPageUrl for a direct link to the partner portal).
 */
export const createConnection: API.OperationMethod<
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7, __c0, 7) as any as S.Schema<CreateConnectionRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<CreateConnectionResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnection",
}));

export type DeleteConnectionError = CommonErrors;
/**
 * Deletes an existing Connection with the supplied identifier.
 *
 * This operation will also inform the remote partner of your intention to delete your connection. Note, the partner may still require you to delete to fully clean up resources, but the network connectivity provided by the Connection will cease to exist.
 */
export const deleteConnection: API.OperationMethod<
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<DeleteConnectionRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<DeleteConnectionResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnection",
}));

export type DescribeConnectionProposalError = CommonErrors;
/**
 * Describes the details of a connection proposal generated at a partner's portal.
 */
export const describeConnectionProposal: API.OperationMethod<
  DescribeConnectionProposalRequest,
  DescribeConnectionProposalResponse,
  DescribeConnectionProposalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<DescribeConnectionProposalRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<DescribeConnectionProposalResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectionProposal",
}));

export type GetConnectionError = CommonErrors;
/**
 * Describes the current state of a Connection resource as specified by the identifier.
 */
export const getConnection: API.OperationMethod<
  GetConnectionRequest,
  GetConnectionResponse,
  GetConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<GetConnectionRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<GetConnectionResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnection",
}));

export type GetEnvironmentError = CommonErrors;
/**
 * Describes a specific Environment
 */
export const getEnvironment: API.OperationMethod<
  GetEnvironmentRequest,
  GetEnvironmentResponse,
  GetEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<GetEnvironmentRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<GetEnvironmentResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironment",
}));

export type ListAttachPointsError = CommonErrors;
/**
 * Lists all Attach Points the caller has access to that are valid for the specified Environment.
 */
export const listAttachPoints: API.PaginatedOperationMethod<
  ListAttachPointsRequest,
  ListAttachPointsResponse,
  ListAttachPointsError,
  Credentials | HttpClient.HttpClient,
  AttachPointDescriptor
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<ListAttachPointsRequest>,
  output: __S(22, __c2, 6) as any as S.Schema<ListAttachPointsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachPoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "attachPoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectionsError = CommonErrors;
/**
 * Lists all connection objects to which the caller has access.
 *
 * Allows for optional filtering by the following properties:
 *
 * - `state`
 *
 * - `environmentId`
 *
 * - `provider`
 *
 * - `attach point`
 *
 * Only Connection objects matching all filters will be returned.
 */
export const listConnections: API.PaginatedOperationMethod<
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListConnectionsError,
  Credentials | HttpClient.HttpClient,
  ConnectionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<ListConnectionsRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<ListConnectionsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnections",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "connections",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentsError = CommonErrors;
/**
 * Lists all of the environments that can produce connections that will land in the called AWS region.
 */
export const listEnvironments: API.PaginatedOperationMethod<
  ListEnvironmentsRequest,
  ListEnvironmentsResponse,
  ListEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  Environment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<ListEnvironmentsRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<ListEnvironmentsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "environments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = CommonErrors;
/**
 * List all current tags on the specified resource. Currently this supports Connection resources.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError = CommonErrors;
/**
 * Add new tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<TagResourceRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<TagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = CommonErrors;
/**
 * Removes tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<UntagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateConnectionError = CommonErrors;
/**
 * Modifies an existing connection. Currently we support modifications to the connection's description and/or bandwidth.
 */
export const updateConnection: API.OperationMethod<
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<UpdateConnectionRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<UpdateConnectionResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnection",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ directConnectGateway: S.String }),
        /*@__PURE__*/ S.Struct({ arn: S.String }),
      ]);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          attachPoint: __S(0, __c0, 0),
          activationKey: SensitiveString,
          description: S.optional(S.String),
          tags: S.optional(__S(1, __c0, 1)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AcceptConnectionProposalRequest",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cloudServiceProvider: S.String }),
        /*@__PURE__*/ S.Struct({ lastMileProvider: S.String }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          description: S.String,
          bandwidth: S.String,
          attachPoint: __S(0, __c0, 0),
          environmentId: S.String,
          provider: __S(3, __c0, 3),
          location: S.String,
          type: S.String,
          state: S.String,
          sharedId: S.String,
          billingTier: S.optional(S.Number),
          ownerAccount: S.String,
          activationKey: SensitiveString,
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "Connection" });
    case 5:
      return S.suspend(() => S.Struct({ connection: S.optional(__S(4, __c0, 4)) })).annotate({
        identifier: "AcceptConnectionProposalResponse",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ identifier: S.String })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          bandwidth: S.String,
          attachPoint: __S(0, __c0, 0),
          environmentId: S.String,
          remoteAccount: S.optional(__S(6, __c0, 6)),
          tags: S.optional(__S(1, __c0, 1)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateConnectionRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ connection: S.optional(__S(4, __c0, 4)) })).annotate({
        identifier: "CreateConnectionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteConnectionRequest" });
    case 2:
      return S.suspend(() => S.Struct({ connection: __S(4, __c0, 4) })).annotate({
        identifier: "DeleteConnectionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ activationKey: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeConnectionProposalRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          bandwidth: S.String,
          environmentId: S.String,
          provider: __S(3, __c0, 3),
          location: S.String,
        }),
      ).annotate({
        identifier: "DescribeConnectionProposalResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetConnectionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEnvironmentRequest" });
    case 7:
      return S.Array(S.String);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          available: S.optional(__S(15, __c1, 7)),
          supported: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "Bandwidths" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          provider: __S(3, __c0, 3),
          location: S.String,
          environmentId: S.String,
          state: S.String,
          bandwidths: __S(16, __c2, 0),
          type: S.String,
          activationPageUrl: S.optional(S.String),
          remoteIdentifierType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Environment" });
    case 2:
      return S.suspend(() => S.Struct({ environment: __S(17, __c2, 1) })).annotate({
        identifier: "GetEnvironmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          environmentId: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAttachPointsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ type: S.String, identifier: S.String, name: S.String }),
      ).annotate({ identifier: "AttachPointDescriptor" });
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ attachPoints: __S(21, __c2, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAttachPointsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          state: S.optional(S.String),
          environmentId: S.optional(S.String),
          provider: S.optional(__S(3, __c0, 3)),
          attachPoint: S.optional(__S(0, __c0, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConnectionsRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          description: S.String,
          bandwidth: S.String,
          attachPoint: __S(0, __c0, 0),
          environmentId: S.String,
          provider: __S(3, __c0, 3),
          location: S.String,
          type: S.String,
          state: S.String,
          sharedId: S.String,
          billingTier: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ConnectionSummary" });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          connections: S.optional(__S(25, __c3, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListConnectionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          provider: S.optional(__S(3, __c0, 3)),
          location: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEnvironmentsRequest" });
    case 4:
      return S.Array(__S(17, __c2, 1));
    case 5:
      return S.suspend(() =>
        S.Struct({ environments: __S(28, __c3, 4), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEnvironmentsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(1, __c0, 1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String, tags: __S(1, __c0, 1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String, tagKeys: __S(15, __c1, 7) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          description: S.optional(S.String),
          bandwidth: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateConnectionRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
