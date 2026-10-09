import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "App Mesh", serviceShapeName: "AppMesh" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "appmesh" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-01-25");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
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
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://appmesh-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://appmesh-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://appmesh.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://appmesh.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(503), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ResourceName = string;
export type GatewayRoutePriority = number;
export type HttpPathExact = string;
export type HttpPathRegex = string;
export interface HttpPathMatch {
  exact?: string;
  regex?: string;
}
const HttpPathMatch = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<HttpPathMatch>;
export type QueryParameterName = string;
export interface QueryParameterMatch {
  exact?: string;
}
const QueryParameterMatch = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<QueryParameterMatch>;
export interface HttpQueryParameter {
  name: string;
  match?: QueryParameterMatch;
}
const HttpQueryParameter = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<HttpQueryParameter>;
export type HttpQueryParameters = HttpQueryParameter[];
const HttpQueryParameters = /*@__PURE__*/ __L.at(__c0, 3);
export type HttpMethod = string;
export type ExactHostName = string;
export type SuffixHostname = string;
export interface GatewayRouteHostnameMatch {
  exact?: string;
  suffix?: string;
}
const GatewayRouteHostnameMatch = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<GatewayRouteHostnameMatch>;
export type HeaderName = string;
export type HeaderMatch = string;
export interface MatchRange {
  start: number;
  end: number;
}
const MatchRange = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<MatchRange>;
export type HeaderMatchMethod =
  | { exact: string; regex?: never; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex: string; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range: MatchRange; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix: string; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix?: never; suffix: string };
const HeaderMatchMethod = /*@__PURE__*/ __L.at(__c0, 6);
export interface HttpGatewayRouteHeader {
  name: string;
  invert?: boolean;
  match?: HeaderMatchMethod;
}
const HttpGatewayRouteHeader = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<HttpGatewayRouteHeader>;
export type HttpGatewayRouteHeaders = HttpGatewayRouteHeader[];
const HttpGatewayRouteHeaders = /*@__PURE__*/ __L.at(__c1, 0);
export type ListenerPort = number;
export interface HttpGatewayRouteMatch {
  prefix?: string;
  path?: HttpPathMatch;
  queryParameters?: HttpQueryParameter[];
  method?: string;
  hostname?: GatewayRouteHostnameMatch;
  headers?: HttpGatewayRouteHeader[];
  port?: number;
}
const HttpGatewayRouteMatch = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<HttpGatewayRouteMatch>;
export interface GatewayRouteVirtualService {
  virtualServiceName: string;
}
const GatewayRouteVirtualService = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<GatewayRouteVirtualService>;
export interface GatewayRouteTarget {
  virtualService: GatewayRouteVirtualService;
  port?: number;
}
const GatewayRouteTarget = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<GatewayRouteTarget>;
export type DefaultGatewayRouteRewrite = string;
export type HttpGatewayRoutePrefix = string;
export interface HttpGatewayRoutePrefixRewrite {
  defaultPrefix?: string;
  value?: string;
}
const HttpGatewayRoutePrefixRewrite = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<HttpGatewayRoutePrefixRewrite>;
export interface HttpGatewayRoutePathRewrite {
  exact?: string;
}
const HttpGatewayRoutePathRewrite = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<HttpGatewayRoutePathRewrite>;
export interface GatewayRouteHostnameRewrite {
  defaultTargetHostname?: string;
}
const GatewayRouteHostnameRewrite = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<GatewayRouteHostnameRewrite>;
export interface HttpGatewayRouteRewrite {
  prefix?: HttpGatewayRoutePrefixRewrite;
  path?: HttpGatewayRoutePathRewrite;
  hostname?: GatewayRouteHostnameRewrite;
}
const HttpGatewayRouteRewrite = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<HttpGatewayRouteRewrite>;
export interface HttpGatewayRouteAction {
  target: GatewayRouteTarget;
  rewrite?: HttpGatewayRouteRewrite;
}
const HttpGatewayRouteAction = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<HttpGatewayRouteAction>;
export interface HttpGatewayRoute {
  match: HttpGatewayRouteMatch;
  action: HttpGatewayRouteAction;
}
const HttpGatewayRoute = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<HttpGatewayRoute>;
export type ServiceName = string;
export type GrpcMetadataMatchMethod =
  | { exact: string; regex?: never; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex: string; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range: MatchRange; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix: string; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix?: never; suffix: string };
const GrpcMetadataMatchMethod = HeaderMatchMethod as any as S.Schema<GrpcMetadataMatchMethod>;
export interface GrpcGatewayRouteMetadata {
  name: string;
  invert?: boolean;
  match?: GrpcMetadataMatchMethod;
}
const GrpcGatewayRouteMetadata = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<GrpcGatewayRouteMetadata>;
export type GrpcGatewayRouteMetadataList = GrpcGatewayRouteMetadata[];
const GrpcGatewayRouteMetadataList = /*@__PURE__*/ __L.at(__c2, 3);
export interface GrpcGatewayRouteMatch {
  serviceName?: string;
  hostname?: GatewayRouteHostnameMatch;
  metadata?: GrpcGatewayRouteMetadata[];
  port?: number;
}
const GrpcGatewayRouteMatch = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<GrpcGatewayRouteMatch>;
export interface GrpcGatewayRouteRewrite {
  hostname?: GatewayRouteHostnameRewrite;
}
const GrpcGatewayRouteRewrite = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<GrpcGatewayRouteRewrite>;
export interface GrpcGatewayRouteAction {
  target: GatewayRouteTarget;
  rewrite?: GrpcGatewayRouteRewrite;
}
const GrpcGatewayRouteAction = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<GrpcGatewayRouteAction>;
export interface GrpcGatewayRoute {
  match: GrpcGatewayRouteMatch;
  action: GrpcGatewayRouteAction;
}
const GrpcGatewayRoute = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<GrpcGatewayRoute>;
export interface GatewayRouteSpec {
  priority?: number;
  httpRoute?: HttpGatewayRoute;
  http2Route?: HttpGatewayRoute;
  grpcRoute?: GrpcGatewayRoute;
}
const GatewayRouteSpec = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<GatewayRouteSpec>;
export type TagKey = string;
export type TagValue = string;
export interface TagRef {
  key: string;
  value: string;
}
const TagRef = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<TagRef>;
export type TagList = TagRef[];
const TagList = /*@__PURE__*/ __L.at(__c3, 2);
export type AccountId = string;
export interface CreateGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
const CreateGatewayRouteInput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateGatewayRouteInput>;
export type Arn = string;
export interface ResourceMetadata {
  arn: string;
  version: number;
  uid: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  meshOwner: string;
  resourceOwner: string;
}
const ResourceMetadata = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ResourceMetadata>;
export type GatewayRouteStatusCode = string;
export interface GatewayRouteStatus {
  status: string;
}
const GatewayRouteStatus = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<GatewayRouteStatus>;
export interface GatewayRouteData {
  meshName: string;
  gatewayRouteName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  metadata: ResourceMetadata;
  status: GatewayRouteStatus;
}
const GatewayRouteData = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<GatewayRouteData>;
export interface CreateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
const CreateGatewayRouteOutput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateGatewayRouteOutput>;
export type EgressFilterType = string;
export interface EgressFilter {
  type: string;
}
const EgressFilter = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<EgressFilter>;
export type IpPreference = string;
export interface MeshServiceDiscovery {
  ipPreference?: string;
}
const MeshServiceDiscovery = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<MeshServiceDiscovery>;
export interface MeshSpec {
  egressFilter?: EgressFilter;
  serviceDiscovery?: MeshServiceDiscovery;
}
const MeshSpec = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<MeshSpec>;
export interface CreateMeshInput {
  meshName: string;
  spec?: MeshSpec;
  tags?: TagRef[];
  clientToken?: string;
}
const CreateMeshInput = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<CreateMeshInput>;
export type MeshStatusCode = string;
export interface MeshStatus {
  status?: string;
}
const MeshStatus = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<MeshStatus>;
export interface MeshData {
  meshName: string;
  spec: MeshSpec;
  metadata: ResourceMetadata;
  status: MeshStatus;
}
const MeshData = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<MeshData>;
export interface CreateMeshOutput {
  mesh: MeshData;
}
const CreateMeshOutput = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<CreateMeshOutput>;
export type RoutePriority = number;
export type HttpScheme = string;
export interface HttpRouteHeader {
  name: string;
  invert?: boolean;
  match?: HeaderMatchMethod;
}
export type HttpRouteHeaders = HttpRouteHeader[];
const HttpRouteHeaders = HttpGatewayRouteHeaders as any as S.Schema<HttpRouteHeaders>;
export interface HttpRouteMatch {
  prefix?: string;
  path?: HttpPathMatch;
  queryParameters?: HttpQueryParameter[];
  method?: string;
  scheme?: string;
  headers?: HttpRouteHeader[];
  port?: number;
}
const HttpRouteMatch = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<HttpRouteMatch>;
export type PercentInt = number;
export interface WeightedTarget {
  virtualNode: string;
  weight: number;
  port?: number;
}
const WeightedTarget = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<WeightedTarget>;
export type WeightedTargets = WeightedTarget[];
const WeightedTargets = /*@__PURE__*/ __L.at(__c5, 1);
export interface HttpRouteAction {
  weightedTargets: WeightedTarget[];
}
const HttpRouteAction = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<HttpRouteAction>;
export type DurationValue = number;
export type DurationUnit = string;
export interface Duration {
  value?: number;
  unit?: string;
}
const Duration = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Duration>;
export type MaxRetries = number;
export type HttpRetryPolicyEvent = string;
export type HttpRetryPolicyEvents = string[];
const HttpRetryPolicyEvents = /*@__PURE__*/ __L.at(__c5, 4);
export type TcpRetryPolicyEvent = string;
export type TcpRetryPolicyEvents = string[];
const TcpRetryPolicyEvents = HttpRetryPolicyEvents as any as S.Schema<TcpRetryPolicyEvents>;
export interface HttpRetryPolicy {
  perRetryTimeout: Duration;
  maxRetries: number;
  httpRetryEvents?: string[];
  tcpRetryEvents?: string[];
}
const HttpRetryPolicy = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<HttpRetryPolicy>;
export interface HttpTimeout {
  perRequest?: Duration;
  idle?: Duration;
}
const HttpTimeout = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<HttpTimeout>;
export interface HttpRoute {
  match: HttpRouteMatch;
  action: HttpRouteAction;
  retryPolicy?: HttpRetryPolicy;
  timeout?: HttpTimeout;
}
const HttpRoute = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<HttpRoute>;
export interface TcpRouteAction {
  weightedTargets: WeightedTarget[];
}
const TcpRouteAction = HttpRouteAction as any as S.Schema<TcpRouteAction>;
export interface TcpTimeout {
  idle?: Duration;
}
const TcpTimeout = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<TcpTimeout>;
export interface TcpRouteMatch {
  port?: number;
}
const TcpRouteMatch = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<TcpRouteMatch>;
export interface TcpRoute {
  action: TcpRouteAction;
  timeout?: TcpTimeout;
  match?: TcpRouteMatch;
}
const TcpRoute = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<TcpRoute>;
export interface GrpcRouteAction {
  weightedTargets: WeightedTarget[];
}
const GrpcRouteAction = HttpRouteAction as any as S.Schema<GrpcRouteAction>;
export type MethodName = string;
export type GrpcRouteMetadataMatchMethod =
  | { exact: string; regex?: never; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex: string; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range: MatchRange; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix: string; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix?: never; suffix: string };
export interface GrpcRouteMetadata {
  name: string;
  invert?: boolean;
  match?: GrpcRouteMetadataMatchMethod;
}
export type GrpcRouteMetadataList = GrpcRouteMetadata[];
const GrpcRouteMetadataList =
  GrpcGatewayRouteMetadataList as any as S.Schema<GrpcRouteMetadataList>;
export interface GrpcRouteMatch {
  serviceName?: string;
  methodName?: string;
  metadata?: GrpcRouteMetadata[];
  port?: number;
}
const GrpcRouteMatch = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<GrpcRouteMatch>;
export type GrpcRetryPolicyEvent = string;
export type GrpcRetryPolicyEvents = string[];
const GrpcRetryPolicyEvents = HttpRetryPolicyEvents as any as S.Schema<GrpcRetryPolicyEvents>;
export interface GrpcRetryPolicy {
  perRetryTimeout: Duration;
  maxRetries: number;
  httpRetryEvents?: string[];
  tcpRetryEvents?: string[];
  grpcRetryEvents?: string[];
}
const GrpcRetryPolicy = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<GrpcRetryPolicy>;
export interface GrpcTimeout {
  perRequest?: Duration;
  idle?: Duration;
}
const GrpcTimeout = HttpTimeout as any as S.Schema<GrpcTimeout>;
export interface GrpcRoute {
  action: GrpcRouteAction;
  match: GrpcRouteMatch;
  retryPolicy?: GrpcRetryPolicy;
  timeout?: GrpcTimeout;
}
const GrpcRoute = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<GrpcRoute>;
export interface RouteSpec {
  priority?: number;
  httpRoute?: HttpRoute;
  tcpRoute?: TcpRoute;
  http2Route?: HttpRoute;
  grpcRoute?: GrpcRoute;
}
const RouteSpec = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<RouteSpec>;
export interface CreateRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  spec: RouteSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
const CreateRouteInput = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<CreateRouteInput>;
export type RouteStatusCode = string;
export interface RouteStatus {
  status: string;
}
const RouteStatus = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<RouteStatus>;
export interface RouteData {
  meshName: string;
  virtualRouterName: string;
  routeName: string;
  spec: RouteSpec;
  metadata: ResourceMetadata;
  status: RouteStatus;
}
const RouteData = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<RouteData>;
export interface CreateRouteOutput {
  route: RouteData;
}
const CreateRouteOutput = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<CreateRouteOutput>;
export type PortNumber = number;
export type PortSet = number[];
const PortSet = /*@__PURE__*/ __L.at(__c7, 3);
export type FilePath = string;
export interface VirtualGatewayListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}
const VirtualGatewayListenerTlsFileCertificate = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<VirtualGatewayListenerTlsFileCertificate>;
export type VirtualGatewaySdsSecretName = string;
export interface VirtualGatewayListenerTlsSdsCertificate {
  secretName: string;
}
const VirtualGatewayListenerTlsSdsCertificate = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<VirtualGatewayListenerTlsSdsCertificate>;
export type VirtualGatewayClientTlsCertificate =
  | { file: VirtualGatewayListenerTlsFileCertificate; sds?: never }
  | { file?: never; sds: VirtualGatewayListenerTlsSdsCertificate };
const VirtualGatewayClientTlsCertificate = /*@__PURE__*/ __L.at(__c7, 6);
export type VirtualGatewayCertificateAuthorityArns = string[];
const VirtualGatewayCertificateAuthorityArns =
  HttpRetryPolicyEvents as any as S.Schema<VirtualGatewayCertificateAuthorityArns>;
export interface VirtualGatewayTlsValidationContextAcmTrust {
  certificateAuthorityArns: string[];
}
const VirtualGatewayTlsValidationContextAcmTrust = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<VirtualGatewayTlsValidationContextAcmTrust>;
export interface VirtualGatewayTlsValidationContextFileTrust {
  certificateChain: string;
}
const VirtualGatewayTlsValidationContextFileTrust = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<VirtualGatewayTlsValidationContextFileTrust>;
export interface VirtualGatewayTlsValidationContextSdsTrust {
  secretName: string;
}
const VirtualGatewayTlsValidationContextSdsTrust =
  VirtualGatewayListenerTlsSdsCertificate as any as S.Schema<VirtualGatewayTlsValidationContextSdsTrust>;
export type VirtualGatewayTlsValidationContextTrust =
  | { acm: VirtualGatewayTlsValidationContextAcmTrust; file?: never; sds?: never }
  | { acm?: never; file: VirtualGatewayTlsValidationContextFileTrust; sds?: never }
  | { acm?: never; file?: never; sds: VirtualGatewayTlsValidationContextSdsTrust };
const VirtualGatewayTlsValidationContextTrust = /*@__PURE__*/ __L.at(__c8, 1);
export type SubjectAlternativeName = string;
export type SubjectAlternativeNameList = string[];
const SubjectAlternativeNameList =
  HttpRetryPolicyEvents as any as S.Schema<SubjectAlternativeNameList>;
export interface SubjectAlternativeNameMatchers {
  exact: string[];
}
const SubjectAlternativeNameMatchers = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<SubjectAlternativeNameMatchers>;
export interface SubjectAlternativeNames {
  match: SubjectAlternativeNameMatchers;
}
const SubjectAlternativeNames = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<SubjectAlternativeNames>;
export interface VirtualGatewayTlsValidationContext {
  trust: VirtualGatewayTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
const VirtualGatewayTlsValidationContext = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<VirtualGatewayTlsValidationContext>;
export interface VirtualGatewayClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate?: VirtualGatewayClientTlsCertificate;
  validation: VirtualGatewayTlsValidationContext;
}
const VirtualGatewayClientPolicyTls = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<VirtualGatewayClientPolicyTls>;
export interface VirtualGatewayClientPolicy {
  tls?: VirtualGatewayClientPolicyTls;
}
const VirtualGatewayClientPolicy = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<VirtualGatewayClientPolicy>;
export interface VirtualGatewayBackendDefaults {
  clientPolicy?: VirtualGatewayClientPolicy;
}
const VirtualGatewayBackendDefaults = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<VirtualGatewayBackendDefaults>;
export type VirtualGatewayHealthCheckTimeoutMillis = number;
export type VirtualGatewayHealthCheckIntervalMillis = number;
export type VirtualGatewayPortProtocol = string;
export type VirtualGatewayHealthCheckThreshold = number;
export interface VirtualGatewayHealthCheckPolicy {
  timeoutMillis: number;
  intervalMillis: number;
  protocol: string;
  port?: number;
  path?: string;
  healthyThreshold: number;
  unhealthyThreshold: number;
}
const VirtualGatewayHealthCheckPolicy = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<VirtualGatewayHealthCheckPolicy>;
export interface VirtualGatewayPortMapping {
  port: number;
  protocol: string;
}
const VirtualGatewayPortMapping = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<VirtualGatewayPortMapping>;
export type VirtualGatewayListenerTlsMode = string;
export type VirtualGatewayListenerTlsValidationContextTrust =
  | { file: VirtualGatewayTlsValidationContextFileTrust; sds?: never }
  | { file?: never; sds: VirtualGatewayTlsValidationContextSdsTrust };
const VirtualGatewayListenerTlsValidationContextTrust = /*@__PURE__*/ __L.at(__c9, 2);
export interface VirtualGatewayListenerTlsValidationContext {
  trust: VirtualGatewayListenerTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
const VirtualGatewayListenerTlsValidationContext = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<VirtualGatewayListenerTlsValidationContext>;
export interface VirtualGatewayListenerTlsAcmCertificate {
  certificateArn: string;
}
const VirtualGatewayListenerTlsAcmCertificate = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<VirtualGatewayListenerTlsAcmCertificate>;
export type VirtualGatewayListenerTlsCertificate =
  | { acm: VirtualGatewayListenerTlsAcmCertificate; file?: never; sds?: never }
  | { acm?: never; file: VirtualGatewayListenerTlsFileCertificate; sds?: never }
  | { acm?: never; file?: never; sds: VirtualGatewayListenerTlsSdsCertificate };
const VirtualGatewayListenerTlsCertificate = /*@__PURE__*/ __L.at(__c9, 5);
export interface VirtualGatewayListenerTls {
  mode: string;
  validation?: VirtualGatewayListenerTlsValidationContext;
  certificate: VirtualGatewayListenerTlsCertificate;
}
const VirtualGatewayListenerTls = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<VirtualGatewayListenerTls>;
export type MaxConnections = number;
export type MaxPendingRequests = number;
export interface VirtualGatewayHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number;
}
const VirtualGatewayHttpConnectionPool = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<VirtualGatewayHttpConnectionPool>;
export type MaxRequests = number;
export interface VirtualGatewayHttp2ConnectionPool {
  maxRequests: number;
}
const VirtualGatewayHttp2ConnectionPool = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<VirtualGatewayHttp2ConnectionPool>;
export interface VirtualGatewayGrpcConnectionPool {
  maxRequests: number;
}
const VirtualGatewayGrpcConnectionPool =
  VirtualGatewayHttp2ConnectionPool as any as S.Schema<VirtualGatewayGrpcConnectionPool>;
export type VirtualGatewayConnectionPool =
  | { http: VirtualGatewayHttpConnectionPool; http2?: never; grpc?: never }
  | { http?: never; http2: VirtualGatewayHttp2ConnectionPool; grpc?: never }
  | { http?: never; http2?: never; grpc: VirtualGatewayGrpcConnectionPool };
const VirtualGatewayConnectionPool = /*@__PURE__*/ __L.at(__c10, 1);
export interface VirtualGatewayListener {
  healthCheck?: VirtualGatewayHealthCheckPolicy;
  portMapping: VirtualGatewayPortMapping;
  tls?: VirtualGatewayListenerTls;
  connectionPool?: VirtualGatewayConnectionPool;
}
const VirtualGatewayListener = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<VirtualGatewayListener>;
export type VirtualGatewayListeners = VirtualGatewayListener[];
const VirtualGatewayListeners = /*@__PURE__*/ __L.at(__c10, 3);
export type TextFormat = string;
export type JsonKey = string;
export type JsonValue = string;
export interface JsonFormatRef {
  key: string;
  value: string;
}
export type JsonFormat = JsonFormatRef[];
const JsonFormat = TagList as any as S.Schema<JsonFormat>;
export type LoggingFormat =
  | { text: string; json?: never }
  | { text?: never; json: JsonFormatRef[] };
const LoggingFormat = /*@__PURE__*/ __L.at(__c10, 4);
export interface VirtualGatewayFileAccessLog {
  path: string;
  format?: LoggingFormat;
}
const VirtualGatewayFileAccessLog = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<VirtualGatewayFileAccessLog>;
export type VirtualGatewayAccessLog = { file: VirtualGatewayFileAccessLog };
const VirtualGatewayAccessLog = /*@__PURE__*/ __L.at(__c10, 6);
export interface VirtualGatewayLogging {
  accessLog?: VirtualGatewayAccessLog;
}
const VirtualGatewayLogging = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<VirtualGatewayLogging>;
export interface VirtualGatewaySpec {
  backendDefaults?: VirtualGatewayBackendDefaults;
  listeners: VirtualGatewayListener[];
  logging?: VirtualGatewayLogging;
}
const VirtualGatewaySpec = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<VirtualGatewaySpec>;
export interface CreateVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  spec: VirtualGatewaySpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
const CreateVirtualGatewayInput = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<CreateVirtualGatewayInput>;
export type VirtualGatewayStatusCode = string;
export interface VirtualGatewayStatus {
  status: string;
}
const VirtualGatewayStatus = GatewayRouteStatus as any as S.Schema<VirtualGatewayStatus>;
export interface VirtualGatewayData {
  meshName: string;
  virtualGatewayName: string;
  spec: VirtualGatewaySpec;
  metadata: ResourceMetadata;
  status: VirtualGatewayStatus;
}
const VirtualGatewayData = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<VirtualGatewayData>;
export interface CreateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
const CreateVirtualGatewayOutput = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<CreateVirtualGatewayOutput>;
export type Hostname = string;
export type DnsResponseType = string;
export interface DnsServiceDiscovery {
  hostname: string;
  responseType?: string;
  ipPreference?: string;
}
const DnsServiceDiscovery = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<DnsServiceDiscovery>;
export type AwsCloudMapName = string;
export type AwsCloudMapInstanceAttributeKey = string;
export type AwsCloudMapInstanceAttributeValue = string;
export interface AwsCloudMapInstanceAttribute {
  key: string;
  value: string;
}
const AwsCloudMapInstanceAttribute = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<AwsCloudMapInstanceAttribute>;
export type AwsCloudMapInstanceAttributes = AwsCloudMapInstanceAttribute[];
const AwsCloudMapInstanceAttributes = /*@__PURE__*/ __L.at(__c11, 6);
export interface AwsCloudMapServiceDiscovery {
  namespaceName: string;
  serviceName: string;
  attributes?: AwsCloudMapInstanceAttribute[];
  ipPreference?: string;
}
const AwsCloudMapServiceDiscovery = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<AwsCloudMapServiceDiscovery>;
export type ServiceDiscovery =
  | { dns: DnsServiceDiscovery; awsCloudMap?: never }
  | { dns?: never; awsCloudMap: AwsCloudMapServiceDiscovery };
const ServiceDiscovery = /*@__PURE__*/ __L.at(__c12, 0);
export type PortProtocol = string;
export interface PortMapping {
  port: number;
  protocol: string;
}
const PortMapping = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<PortMapping>;
export type ListenerTlsMode = string;
export interface ListenerTlsAcmCertificate {
  certificateArn: string;
}
export interface ListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}
export type SdsSecretName = string;
export interface ListenerTlsSdsCertificate {
  secretName: string;
}
export type ListenerTlsCertificate =
  | { acm: ListenerTlsAcmCertificate; file?: never; sds?: never }
  | { acm?: never; file: ListenerTlsFileCertificate; sds?: never }
  | { acm?: never; file?: never; sds: ListenerTlsSdsCertificate };
const ListenerTlsCertificate =
  VirtualGatewayListenerTlsCertificate as any as S.Schema<ListenerTlsCertificate>;
export interface TlsValidationContextFileTrust {
  certificateChain: string;
}
export interface TlsValidationContextSdsTrust {
  secretName: string;
}
export type ListenerTlsValidationContextTrust =
  | { file: TlsValidationContextFileTrust; sds?: never }
  | { file?: never; sds: TlsValidationContextSdsTrust };
export interface ListenerTlsValidationContext {
  trust: ListenerTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
const ListenerTlsValidationContext =
  VirtualGatewayListenerTlsValidationContext as any as S.Schema<ListenerTlsValidationContext>;
export interface ListenerTls {
  mode: string;
  certificate: ListenerTlsCertificate;
  validation?: ListenerTlsValidationContext;
}
const ListenerTls = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<ListenerTls>;
export type HealthCheckTimeoutMillis = number;
export type HealthCheckIntervalMillis = number;
export type HealthCheckThreshold = number;
export interface HealthCheckPolicy {
  timeoutMillis: number;
  intervalMillis: number;
  protocol: string;
  port?: number;
  path?: string;
  healthyThreshold: number;
  unhealthyThreshold: number;
}
const HealthCheckPolicy = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<HealthCheckPolicy>;
export type ListenerTimeout =
  | { tcp: TcpTimeout; http?: never; http2?: never; grpc?: never }
  | { tcp?: never; http: HttpTimeout; http2?: never; grpc?: never }
  | { tcp?: never; http?: never; http2: HttpTimeout; grpc?: never }
  | { tcp?: never; http?: never; http2?: never; grpc: GrpcTimeout };
const ListenerTimeout = /*@__PURE__*/ __L.at(__c12, 4);
export type OutlierDetectionMaxServerErrors = number;
export type OutlierDetectionMaxEjectionPercent = number;
export interface OutlierDetection {
  maxServerErrors: number;
  interval: Duration;
  baseEjectionDuration: Duration;
  maxEjectionPercent: number;
}
const OutlierDetection = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<OutlierDetection>;
export interface VirtualNodeTcpConnectionPool {
  maxConnections: number;
}
const VirtualNodeTcpConnectionPool = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<VirtualNodeTcpConnectionPool>;
export interface VirtualNodeHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number;
}
const VirtualNodeHttpConnectionPool =
  VirtualGatewayHttpConnectionPool as any as S.Schema<VirtualNodeHttpConnectionPool>;
export interface VirtualNodeHttp2ConnectionPool {
  maxRequests: number;
}
const VirtualNodeHttp2ConnectionPool =
  VirtualGatewayHttp2ConnectionPool as any as S.Schema<VirtualNodeHttp2ConnectionPool>;
export interface VirtualNodeGrpcConnectionPool {
  maxRequests: number;
}
const VirtualNodeGrpcConnectionPool =
  VirtualGatewayHttp2ConnectionPool as any as S.Schema<VirtualNodeGrpcConnectionPool>;
export type VirtualNodeConnectionPool =
  | { tcp: VirtualNodeTcpConnectionPool; http?: never; http2?: never; grpc?: never }
  | { tcp?: never; http: VirtualNodeHttpConnectionPool; http2?: never; grpc?: never }
  | { tcp?: never; http?: never; http2: VirtualNodeHttp2ConnectionPool; grpc?: never }
  | { tcp?: never; http?: never; http2?: never; grpc: VirtualNodeGrpcConnectionPool };
const VirtualNodeConnectionPool = /*@__PURE__*/ __L.at(__c12, 7);
export interface Listener {
  portMapping: PortMapping;
  tls?: ListenerTls;
  healthCheck?: HealthCheckPolicy;
  timeout?: ListenerTimeout;
  outlierDetection?: OutlierDetection;
  connectionPool?: VirtualNodeConnectionPool;
}
const Listener = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<Listener>;
export type Listeners = Listener[];
const Listeners = /*@__PURE__*/ __L.at(__c13, 1);
export type ClientTlsCertificate =
  | { file: ListenerTlsFileCertificate; sds?: never }
  | { file?: never; sds: ListenerTlsSdsCertificate };
const ClientTlsCertificate =
  VirtualGatewayClientTlsCertificate as any as S.Schema<ClientTlsCertificate>;
export type CertificateAuthorityArns = string[];
export interface TlsValidationContextAcmTrust {
  certificateAuthorityArns: string[];
}
export type TlsValidationContextTrust =
  | { acm: TlsValidationContextAcmTrust; file?: never; sds?: never }
  | { acm?: never; file: TlsValidationContextFileTrust; sds?: never }
  | { acm?: never; file?: never; sds: TlsValidationContextSdsTrust };
const TlsValidationContextTrust =
  VirtualGatewayTlsValidationContextTrust as any as S.Schema<TlsValidationContextTrust>;
export interface TlsValidationContext {
  trust: TlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
const TlsValidationContext = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<TlsValidationContext>;
export interface ClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate?: ClientTlsCertificate;
  validation: TlsValidationContext;
}
const ClientPolicyTls = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<ClientPolicyTls>;
export interface ClientPolicy {
  tls?: ClientPolicyTls;
}
const ClientPolicy = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<ClientPolicy>;
export interface VirtualServiceBackend {
  virtualServiceName: string;
  clientPolicy?: ClientPolicy;
}
const VirtualServiceBackend = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<VirtualServiceBackend>;
export type Backend = { virtualService: VirtualServiceBackend };
const Backend = /*@__PURE__*/ __L.at(__c13, 6);
export type Backends = Backend[];
const Backends = /*@__PURE__*/ __L.at(__c13, 7);
export interface BackendDefaults {
  clientPolicy?: ClientPolicy;
}
const BackendDefaults = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<BackendDefaults>;
export interface FileAccessLog {
  path: string;
  format?: LoggingFormat;
}
const FileAccessLog = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<FileAccessLog>;
export type AccessLog = { file: FileAccessLog };
const AccessLog = /*@__PURE__*/ __L.at(__c14, 2);
export interface Logging {
  accessLog?: AccessLog;
}
const Logging = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<Logging>;
export interface VirtualNodeSpec {
  serviceDiscovery?: ServiceDiscovery;
  listeners?: Listener[];
  backends?: Backend[];
  backendDefaults?: BackendDefaults;
  logging?: Logging;
}
const VirtualNodeSpec = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<VirtualNodeSpec>;
export interface CreateVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  spec: VirtualNodeSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
const CreateVirtualNodeInput = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<CreateVirtualNodeInput>;
export type VirtualNodeStatusCode = string;
export interface VirtualNodeStatus {
  status: string;
}
const VirtualNodeStatus = GatewayRouteStatus as any as S.Schema<VirtualNodeStatus>;
export interface VirtualNodeData {
  meshName: string;
  virtualNodeName: string;
  spec: VirtualNodeSpec;
  metadata: ResourceMetadata;
  status: VirtualNodeStatus;
}
const VirtualNodeData = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<VirtualNodeData>;
export interface CreateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
const CreateVirtualNodeOutput = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<CreateVirtualNodeOutput>;
export interface VirtualRouterListener {
  portMapping: PortMapping;
}
const VirtualRouterListener = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<VirtualRouterListener>;
export type VirtualRouterListeners = VirtualRouterListener[];
const VirtualRouterListeners = /*@__PURE__*/ __L.at(__c15, 1);
export interface VirtualRouterSpec {
  listeners?: VirtualRouterListener[];
}
const VirtualRouterSpec = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<VirtualRouterSpec>;
export interface CreateVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  spec: VirtualRouterSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
const CreateVirtualRouterInput = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<CreateVirtualRouterInput>;
export type VirtualRouterStatusCode = string;
export interface VirtualRouterStatus {
  status: string;
}
const VirtualRouterStatus = GatewayRouteStatus as any as S.Schema<VirtualRouterStatus>;
export interface VirtualRouterData {
  meshName: string;
  virtualRouterName: string;
  spec: VirtualRouterSpec;
  metadata: ResourceMetadata;
  status: VirtualRouterStatus;
}
const VirtualRouterData = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<VirtualRouterData>;
export interface CreateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
const CreateVirtualRouterOutput = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<CreateVirtualRouterOutput>;
export interface VirtualNodeServiceProvider {
  virtualNodeName: string;
}
const VirtualNodeServiceProvider = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<VirtualNodeServiceProvider>;
export interface VirtualRouterServiceProvider {
  virtualRouterName: string;
}
const VirtualRouterServiceProvider = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<VirtualRouterServiceProvider>;
export type VirtualServiceProvider =
  | { virtualNode: VirtualNodeServiceProvider; virtualRouter?: never }
  | { virtualNode?: never; virtualRouter: VirtualRouterServiceProvider };
const VirtualServiceProvider = /*@__PURE__*/ __L.at(__c16, 0);
export interface VirtualServiceSpec {
  provider?: VirtualServiceProvider;
}
const VirtualServiceSpec = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<VirtualServiceSpec>;
export interface CreateVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  spec: VirtualServiceSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
const CreateVirtualServiceInput = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<CreateVirtualServiceInput>;
export type VirtualServiceStatusCode = string;
export interface VirtualServiceStatus {
  status: string;
}
const VirtualServiceStatus = GatewayRouteStatus as any as S.Schema<VirtualServiceStatus>;
export interface VirtualServiceData {
  meshName: string;
  virtualServiceName: string;
  spec: VirtualServiceSpec;
  metadata: ResourceMetadata;
  status: VirtualServiceStatus;
}
const VirtualServiceData = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<VirtualServiceData>;
export interface CreateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
const CreateVirtualServiceOutput = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<CreateVirtualServiceOutput>;
export interface DeleteGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  meshOwner?: string;
}
const DeleteGatewayRouteInput = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<DeleteGatewayRouteInput>;
export interface DeleteGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
const DeleteGatewayRouteOutput =
  CreateGatewayRouteOutput as any as S.Schema<DeleteGatewayRouteOutput>;
export interface DeleteMeshInput {
  meshName: string;
}
const DeleteMeshInput = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<DeleteMeshInput>;
export interface DeleteMeshOutput {
  mesh: MeshData;
}
const DeleteMeshOutput = CreateMeshOutput as any as S.Schema<DeleteMeshOutput>;
export interface DeleteRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  meshOwner?: string;
}
const DeleteRouteInput = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<DeleteRouteInput>;
export interface DeleteRouteOutput {
  route: RouteData;
}
const DeleteRouteOutput = CreateRouteOutput as any as S.Schema<DeleteRouteOutput>;
export interface DeleteVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  meshOwner?: string;
}
const DeleteVirtualGatewayInput = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<DeleteVirtualGatewayInput>;
export interface DeleteVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
const DeleteVirtualGatewayOutput =
  CreateVirtualGatewayOutput as any as S.Schema<DeleteVirtualGatewayOutput>;
export interface DeleteVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  meshOwner?: string;
}
const DeleteVirtualNodeInput = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<DeleteVirtualNodeInput>;
export interface DeleteVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
const DeleteVirtualNodeOutput = CreateVirtualNodeOutput as any as S.Schema<DeleteVirtualNodeOutput>;
export interface DeleteVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  meshOwner?: string;
}
const DeleteVirtualRouterInput = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<DeleteVirtualRouterInput>;
export interface DeleteVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
const DeleteVirtualRouterOutput =
  CreateVirtualRouterOutput as any as S.Schema<DeleteVirtualRouterOutput>;
export interface DeleteVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  meshOwner?: string;
}
const DeleteVirtualServiceInput = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<DeleteVirtualServiceInput>;
export interface DeleteVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
const DeleteVirtualServiceOutput =
  CreateVirtualServiceOutput as any as S.Schema<DeleteVirtualServiceOutput>;
export interface DescribeGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  meshOwner?: string;
}
const DescribeGatewayRouteInput = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DescribeGatewayRouteInput>;
export interface DescribeGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
const DescribeGatewayRouteOutput = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<DescribeGatewayRouteOutput>;
export interface DescribeMeshInput {
  meshName: string;
  meshOwner?: string;
}
const DescribeMeshInput = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<DescribeMeshInput>;
export interface DescribeMeshOutput {
  mesh: MeshData;
}
const DescribeMeshOutput = CreateMeshOutput as any as S.Schema<DescribeMeshOutput>;
export interface DescribeRouteInput {
  routeName: string;
  meshName: string;
  meshOwner?: string;
  virtualRouterName: string;
}
const DescribeRouteInput = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<DescribeRouteInput>;
export interface DescribeRouteOutput {
  route: RouteData;
}
const DescribeRouteOutput = CreateRouteOutput as any as S.Schema<DescribeRouteOutput>;
export interface DescribeVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  meshOwner?: string;
}
const DescribeVirtualGatewayInput = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<DescribeVirtualGatewayInput>;
export interface DescribeVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
const DescribeVirtualGatewayOutput =
  CreateVirtualGatewayOutput as any as S.Schema<DescribeVirtualGatewayOutput>;
export interface DescribeVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  meshOwner?: string;
}
const DescribeVirtualNodeInput = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<DescribeVirtualNodeInput>;
export interface DescribeVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
const DescribeVirtualNodeOutput = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<DescribeVirtualNodeOutput>;
export interface DescribeVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  meshOwner?: string;
}
const DescribeVirtualRouterInput = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<DescribeVirtualRouterInput>;
export interface DescribeVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
const DescribeVirtualRouterOutput =
  CreateVirtualRouterOutput as any as S.Schema<DescribeVirtualRouterOutput>;
export interface DescribeVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  meshOwner?: string;
}
const DescribeVirtualServiceInput = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<DescribeVirtualServiceInput>;
export interface DescribeVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
const DescribeVirtualServiceOutput =
  CreateVirtualServiceOutput as any as S.Schema<DescribeVirtualServiceOutput>;
export type ListGatewayRoutesLimit = number;
export interface ListGatewayRoutesInput {
  meshName: string;
  virtualGatewayName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
const ListGatewayRoutesInput = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ListGatewayRoutesInput>;
export interface GatewayRouteRef {
  meshName: string;
  gatewayRouteName: string;
  virtualGatewayName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const GatewayRouteRef = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<GatewayRouteRef>;
export type GatewayRouteList = GatewayRouteRef[];
const GatewayRouteList = /*@__PURE__*/ __L.at(__c18, 7);
export interface ListGatewayRoutesOutput {
  gatewayRoutes: GatewayRouteRef[];
  nextToken?: string;
}
const ListGatewayRoutesOutput = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ListGatewayRoutesOutput>;
export type ListMeshesLimit = number;
export interface ListMeshesInput {
  nextToken?: string;
  limit?: number;
}
const ListMeshesInput = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<ListMeshesInput>;
export interface MeshRef {
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const MeshRef = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<MeshRef>;
export type MeshList = MeshRef[];
const MeshList = /*@__PURE__*/ __L.at(__c19, 3);
export interface ListMeshesOutput {
  meshes: MeshRef[];
  nextToken?: string;
}
const ListMeshesOutput = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<ListMeshesOutput>;
export type ListRoutesLimit = number;
export interface ListRoutesInput {
  meshName: string;
  virtualRouterName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
const ListRoutesInput = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<ListRoutesInput>;
export interface RouteRef {
  meshName: string;
  virtualRouterName: string;
  routeName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const RouteRef = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<RouteRef>;
export type RouteList = RouteRef[];
const RouteList = /*@__PURE__*/ __L.at(__c19, 7);
export interface ListRoutesOutput {
  routes: RouteRef[];
  nextToken?: string;
}
const ListRoutesOutput = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<ListRoutesOutput>;
export type TagsLimit = number;
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
  limit?: number;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags: TagRef[];
  nextToken?: string;
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<ListTagsForResourceOutput>;
export type ListVirtualGatewaysLimit = number;
export interface ListVirtualGatewaysInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
const ListVirtualGatewaysInput = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ListVirtualGatewaysInput>;
export interface VirtualGatewayRef {
  meshName: string;
  virtualGatewayName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const VirtualGatewayRef = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<VirtualGatewayRef>;
export type VirtualGatewayList = VirtualGatewayRef[];
const VirtualGatewayList = /*@__PURE__*/ __L.at(__c20, 5);
export interface ListVirtualGatewaysOutput {
  virtualGateways: VirtualGatewayRef[];
  nextToken?: string;
}
const ListVirtualGatewaysOutput = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<ListVirtualGatewaysOutput>;
export type ListVirtualNodesLimit = number;
export interface ListVirtualNodesInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
const ListVirtualNodesInput = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<ListVirtualNodesInput>;
export interface VirtualNodeRef {
  meshName: string;
  virtualNodeName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const VirtualNodeRef = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<VirtualNodeRef>;
export type VirtualNodeList = VirtualNodeRef[];
const VirtualNodeList = /*@__PURE__*/ __L.at(__c21, 1);
export interface ListVirtualNodesOutput {
  virtualNodes: VirtualNodeRef[];
  nextToken?: string;
}
const ListVirtualNodesOutput = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<ListVirtualNodesOutput>;
export type ListVirtualRoutersLimit = number;
export interface ListVirtualRoutersInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
const ListVirtualRoutersInput = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<ListVirtualRoutersInput>;
export interface VirtualRouterRef {
  meshName: string;
  virtualRouterName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const VirtualRouterRef = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<VirtualRouterRef>;
export type VirtualRouterList = VirtualRouterRef[];
const VirtualRouterList = /*@__PURE__*/ __L.at(__c21, 5);
export interface ListVirtualRoutersOutput {
  virtualRouters: VirtualRouterRef[];
  nextToken?: string;
}
const ListVirtualRoutersOutput = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<ListVirtualRoutersOutput>;
export type ListVirtualServicesLimit = number;
export interface ListVirtualServicesInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
const ListVirtualServicesInput = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ListVirtualServicesInput>;
export interface VirtualServiceRef {
  meshName: string;
  virtualServiceName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
const VirtualServiceRef = /*@__PURE__*/ __L.at(__c22, 0) as any as S.Schema<VirtualServiceRef>;
export type VirtualServiceList = VirtualServiceRef[];
const VirtualServiceList = /*@__PURE__*/ __L.at(__c22, 1);
export interface ListVirtualServicesOutput {
  virtualServices: VirtualServiceRef[];
  nextToken?: string;
}
const ListVirtualServicesOutput = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<ListVirtualServicesOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: TagRef[];
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = HttpRetryPolicyEvents as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = TagResourceOutput as any as S.Schema<UntagResourceOutput>;
export interface UpdateGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  clientToken?: string;
  meshOwner?: string;
}
const UpdateGatewayRouteInput = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<UpdateGatewayRouteInput>;
export interface UpdateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
const UpdateGatewayRouteOutput =
  CreateGatewayRouteOutput as any as S.Schema<UpdateGatewayRouteOutput>;
export interface UpdateMeshInput {
  meshName: string;
  spec?: MeshSpec;
  clientToken?: string;
}
const UpdateMeshInput = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<UpdateMeshInput>;
export interface UpdateMeshOutput {
  mesh: MeshData;
}
const UpdateMeshOutput = CreateMeshOutput as any as S.Schema<UpdateMeshOutput>;
export interface UpdateRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  spec: RouteSpec;
  clientToken?: string;
  meshOwner?: string;
}
const UpdateRouteInput = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<UpdateRouteInput>;
export interface UpdateRouteOutput {
  route: RouteData;
}
const UpdateRouteOutput = CreateRouteOutput as any as S.Schema<UpdateRouteOutput>;
export interface UpdateVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  spec: VirtualGatewaySpec;
  clientToken?: string;
  meshOwner?: string;
}
const UpdateVirtualGatewayInput = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<UpdateVirtualGatewayInput>;
export interface UpdateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
const UpdateVirtualGatewayOutput =
  CreateVirtualGatewayOutput as any as S.Schema<UpdateVirtualGatewayOutput>;
export interface UpdateVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  spec: VirtualNodeSpec;
  clientToken?: string;
  meshOwner?: string;
}
const UpdateVirtualNodeInput = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<UpdateVirtualNodeInput>;
export interface UpdateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
const UpdateVirtualNodeOutput = CreateVirtualNodeOutput as any as S.Schema<UpdateVirtualNodeOutput>;
export interface UpdateVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  spec: VirtualRouterSpec;
  clientToken?: string;
  meshOwner?: string;
}
const UpdateVirtualRouterInput = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<UpdateVirtualRouterInput>;
export interface UpdateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
const UpdateVirtualRouterOutput =
  CreateVirtualRouterOutput as any as S.Schema<UpdateVirtualRouterOutput>;
export interface UpdateVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  spec: VirtualServiceSpec;
  clientToken?: string;
  meshOwner?: string;
}
const UpdateVirtualServiceInput = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<UpdateVirtualServiceInput>;
export interface UpdateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
const UpdateVirtualServiceOutput =
  CreateVirtualServiceOutput as any as S.Schema<UpdateVirtualServiceOutput>;
export type CreateGatewayRouteError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a gateway route.
 *
 * A gateway route is attached to a virtual gateway and routes traffic to an existing
 * virtual service. If a route matches a request, it can distribute traffic to a target
 * virtual service.
 *
 * For more information about gateway routes, see Gateway routes.
 */
export const createGatewayRoute: API.OperationMethod<
  CreateGatewayRouteInput,
  CreateGatewayRouteOutput,
  CreateGatewayRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGatewayRouteInput,
  output: CreateGatewayRouteOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGatewayRoute",
}));

export type CreateMeshError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a service mesh.
 *
 * A service mesh is a logical boundary for network traffic between services that are
 * represented by resources within the mesh. After you create your service mesh, you can
 * create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
 * between the applications in your mesh.
 *
 * For more information about service meshes, see Service meshes.
 */
export const createMesh: API.OperationMethod<
  CreateMeshInput,
  CreateMeshOutput,
  CreateMeshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMeshInput,
  output: CreateMeshOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMesh",
}));

export type CreateRouteError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a route that is associated with a virtual router.
 *
 * You can route several different protocols and define a retry policy for a route.
 * Traffic can be routed to one or more virtual nodes.
 *
 * For more information about routes, see Routes.
 */
export const createRoute: API.OperationMethod<
  CreateRouteInput,
  CreateRouteOutput,
  CreateRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRouteInput,
  output: CreateRouteOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRoute",
}));

export type CreateVirtualGatewayError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a virtual gateway.
 *
 * A virtual gateway allows resources outside your mesh to communicate to resources that
 * are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a
 * virtual node, which represents an Envoy running with an application, a virtual gateway
 * represents Envoy deployed by itself.
 *
 * For more information about virtual gateways, see Virtual gateways.
 */
export const createVirtualGateway: API.OperationMethod<
  CreateVirtualGatewayInput,
  CreateVirtualGatewayOutput,
  CreateVirtualGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateVirtualGatewayInput,
  output: CreateVirtualGatewayOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVirtualGateway",
}));

export type CreateVirtualNodeError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a virtual node within a service mesh.
 *
 * A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can
 * specify the service discovery information for your task group, and whether the proxy
 * running in a task group will communicate with other proxies using Transport Layer Security
 * (TLS).
 *
 * You define a `listener` for any inbound traffic that your virtual node
 * expects. Any virtual service that your virtual node expects to communicate to is specified
 * as a `backend`.
 *
 * The response metadata for your new virtual node contains the `arn` that is
 * associated with the virtual node. Set this value to the full ARN; for example,
 * `arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp`)
 * as the `APPMESH_RESOURCE_ARN` environment variable for your task group's Envoy
 * proxy container in your task definition or pod spec. This is then mapped to the
 * `node.id` and `node.cluster` Envoy parameters.
 *
 * By default, App Mesh uses the name of the resource you specified in
 * `APPMESH_RESOURCE_ARN` when Envoy is referring to itself in metrics and
 * traces. You can override this behavior by setting the
 * `APPMESH_RESOURCE_CLUSTER` environment variable with your own name.
 *
 * For more information about virtual nodes, see Virtual nodes. You must be using `1.15.0` or later of the Envoy image when
 * setting these variables. For more information aboutApp Mesh Envoy variables, see
 * Envoy
 * image in the App Mesh User Guide.
 */
export const createVirtualNode: API.OperationMethod<
  CreateVirtualNodeInput,
  CreateVirtualNodeOutput,
  CreateVirtualNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateVirtualNodeInput,
  output: CreateVirtualNodeOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVirtualNode",
}));

export type CreateVirtualRouterError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a virtual router within a service mesh.
 *
 * Specify a `listener` for any inbound traffic that your virtual router
 * receives. Create a virtual router for each protocol and port that you need to route.
 * Virtual routers handle traffic for one or more virtual services within your mesh. After you
 * create your virtual router, create and associate routes for your virtual router that direct
 * incoming requests to different virtual nodes.
 *
 * For more information about virtual routers, see Virtual routers.
 */
export const createVirtualRouter: API.OperationMethod<
  CreateVirtualRouterInput,
  CreateVirtualRouterOutput,
  CreateVirtualRouterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateVirtualRouterInput,
  output: CreateVirtualRouterOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVirtualRouter",
}));

export type CreateVirtualServiceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a virtual service within a service mesh.
 *
 * A virtual service is an abstraction of a real service that is provided by a virtual node
 * directly or indirectly by means of a virtual router. Dependent services call your virtual
 * service by its `virtualServiceName`, and those requests are routed to the
 * virtual node or virtual router that is specified as the provider for the virtual
 * service.
 *
 * For more information about virtual services, see Virtual services.
 */
export const createVirtualService: API.OperationMethod<
  CreateVirtualServiceInput,
  CreateVirtualServiceOutput,
  CreateVirtualServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateVirtualServiceInput,
  output: CreateVirtualServiceOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVirtualService",
}));

export type DeleteGatewayRouteError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing gateway route.
 */
export const deleteGatewayRoute: API.OperationMethod<
  DeleteGatewayRouteInput,
  DeleteGatewayRouteOutput,
  DeleteGatewayRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGatewayRouteInput,
  output: DeleteGatewayRouteOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGatewayRoute",
}));

export type DeleteMeshError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing service mesh.
 *
 * You must delete all resources (virtual services, routes, virtual routers, and virtual
 * nodes) in the service mesh before you can delete the mesh itself.
 */
export const deleteMesh: API.OperationMethod<
  DeleteMeshInput,
  DeleteMeshOutput,
  DeleteMeshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMeshInput,
  output: DeleteMeshOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMesh",
}));

export type DeleteRouteError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing route.
 */
export const deleteRoute: API.OperationMethod<
  DeleteRouteInput,
  DeleteRouteOutput,
  DeleteRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRouteInput,
  output: DeleteRouteOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRoute",
}));

export type DeleteVirtualGatewayError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway
 * routes are associated to it.
 */
export const deleteVirtualGateway: API.OperationMethod<
  DeleteVirtualGatewayInput,
  DeleteVirtualGatewayOutput,
  DeleteVirtualGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVirtualGatewayInput,
  output: DeleteVirtualGatewayOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVirtualGateway",
}));

export type DeleteVirtualNodeError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing virtual node.
 *
 * You must delete any virtual services that list a virtual node as a service provider
 * before you can delete the virtual node itself.
 */
export const deleteVirtualNode: API.OperationMethod<
  DeleteVirtualNodeInput,
  DeleteVirtualNodeOutput,
  DeleteVirtualNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVirtualNodeInput,
  output: DeleteVirtualNodeOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVirtualNode",
}));

export type DeleteVirtualRouterError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing virtual router.
 *
 * You must delete any routes associated with the virtual router before you can delete the
 * router itself.
 */
export const deleteVirtualRouter: API.OperationMethod<
  DeleteVirtualRouterInput,
  DeleteVirtualRouterOutput,
  DeleteVirtualRouterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVirtualRouterInput,
  output: DeleteVirtualRouterOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVirtualRouter",
}));

export type DeleteVirtualServiceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ResourceInUseException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an existing virtual service.
 */
export const deleteVirtualService: API.OperationMethod<
  DeleteVirtualServiceInput,
  DeleteVirtualServiceOutput,
  DeleteVirtualServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVirtualServiceInput,
  output: DeleteVirtualServiceOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ResourceInUseException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVirtualService",
}));

export type DescribeGatewayRouteError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing gateway route.
 */
export const describeGatewayRoute: API.OperationMethod<
  DescribeGatewayRouteInput,
  DescribeGatewayRouteOutput,
  DescribeGatewayRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeGatewayRouteInput,
  output: DescribeGatewayRouteOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGatewayRoute",
}));

export type DescribeMeshError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing service mesh.
 */
export const describeMesh: API.OperationMethod<
  DescribeMeshInput,
  DescribeMeshOutput,
  DescribeMeshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMeshInput,
  output: DescribeMeshOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMesh",
}));

export type DescribeRouteError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing route.
 */
export const describeRoute: API.OperationMethod<
  DescribeRouteInput,
  DescribeRouteOutput,
  DescribeRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRouteInput,
  output: DescribeRouteOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRoute",
}));

export type DescribeVirtualGatewayError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing virtual gateway.
 */
export const describeVirtualGateway: API.OperationMethod<
  DescribeVirtualGatewayInput,
  DescribeVirtualGatewayOutput,
  DescribeVirtualGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeVirtualGatewayInput,
  output: DescribeVirtualGatewayOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVirtualGateway",
}));

export type DescribeVirtualNodeError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing virtual node.
 */
export const describeVirtualNode: API.OperationMethod<
  DescribeVirtualNodeInput,
  DescribeVirtualNodeOutput,
  DescribeVirtualNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeVirtualNodeInput,
  output: DescribeVirtualNodeOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVirtualNode",
}));

export type DescribeVirtualRouterError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing virtual router.
 */
export const describeVirtualRouter: API.OperationMethod<
  DescribeVirtualRouterInput,
  DescribeVirtualRouterOutput,
  DescribeVirtualRouterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeVirtualRouterInput,
  output: DescribeVirtualRouterOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVirtualRouter",
}));

export type DescribeVirtualServiceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes an existing virtual service.
 */
export const describeVirtualService: API.OperationMethod<
  DescribeVirtualServiceInput,
  DescribeVirtualServiceOutput,
  DescribeVirtualServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeVirtualServiceInput,
  output: DescribeVirtualServiceOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVirtualService",
}));

export type ListGatewayRoutesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing gateway routes that are associated to a virtual
 * gateway.
 */
export const listGatewayRoutes: API.PaginatedOperationMethod<
  ListGatewayRoutesInput,
  ListGatewayRoutesOutput,
  ListGatewayRoutesError,
  Credentials | HttpClient.HttpClient,
  GatewayRouteRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGatewayRoutesInput,
  output: ListGatewayRoutesOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGatewayRoutes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "gatewayRoutes",
    pageSize: "limit",
  } as const,
})) as any;

export type ListMeshesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing service meshes.
 */
export const listMeshes: API.PaginatedOperationMethod<
  ListMeshesInput,
  ListMeshesOutput,
  ListMeshesError,
  Credentials | HttpClient.HttpClient,
  MeshRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMeshesInput,
  output: ListMeshesOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMeshes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "meshes",
    pageSize: "limit",
  } as const,
})) as any;

export type ListRoutesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing routes in a service mesh.
 */
export const listRoutes: API.PaginatedOperationMethod<
  ListRoutesInput,
  ListRoutesOutput,
  ListRoutesError,
  Credentials | HttpClient.HttpClient,
  RouteRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRoutesInput,
  output: ListRoutesOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRoutes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "routes",
    pageSize: "limit",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * List the tags for an App Mesh resource.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  TagRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tags",
    pageSize: "limit",
  } as const,
})) as any;

export type ListVirtualGatewaysError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing virtual gateways in a service mesh.
 */
export const listVirtualGateways: API.PaginatedOperationMethod<
  ListVirtualGatewaysInput,
  ListVirtualGatewaysOutput,
  ListVirtualGatewaysError,
  Credentials | HttpClient.HttpClient,
  VirtualGatewayRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVirtualGatewaysInput,
  output: ListVirtualGatewaysOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualGateways",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "virtualGateways",
    pageSize: "limit",
  } as const,
})) as any;

export type ListVirtualNodesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing virtual nodes.
 */
export const listVirtualNodes: API.PaginatedOperationMethod<
  ListVirtualNodesInput,
  ListVirtualNodesOutput,
  ListVirtualNodesError,
  Credentials | HttpClient.HttpClient,
  VirtualNodeRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVirtualNodesInput,
  output: ListVirtualNodesOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualNodes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "virtualNodes",
    pageSize: "limit",
  } as const,
})) as any;

export type ListVirtualRoutersError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing virtual routers in a service mesh.
 */
export const listVirtualRouters: API.PaginatedOperationMethod<
  ListVirtualRoutersInput,
  ListVirtualRoutersOutput,
  ListVirtualRoutersError,
  Credentials | HttpClient.HttpClient,
  VirtualRouterRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVirtualRoutersInput,
  output: ListVirtualRoutersOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualRouters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "virtualRouters",
    pageSize: "limit",
  } as const,
})) as any;

export type ListVirtualServicesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of existing virtual services in a service mesh.
 */
export const listVirtualServices: API.PaginatedOperationMethod<
  ListVirtualServicesInput,
  ListVirtualServicesOutput,
  ListVirtualServicesError,
  Credentials | HttpClient.HttpClient,
  VirtualServiceRef
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVirtualServicesInput,
  output: ListVirtualServicesOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualServices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "virtualServices",
    pageSize: "limit",
  } as const,
})) as any;

export type TagResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | TooManyTagsException
  | CommonErrors;
/**
 * Associates the specified tags to a resource with the specified `resourceArn`.
 * If existing tags on a resource aren't specified in the request parameters, they aren't
 * changed. When a resource is deleted, the tags associated with that resource are also
 * deleted.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes specified tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateGatewayRouteError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing gateway route that is associated to a specified virtual gateway in a
 * service mesh.
 */
export const updateGatewayRoute: API.OperationMethod<
  UpdateGatewayRouteInput,
  UpdateGatewayRouteOutput,
  UpdateGatewayRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGatewayRouteInput,
  output: UpdateGatewayRouteOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayRoute",
}));

export type UpdateMeshError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing service mesh.
 */
export const updateMesh: API.OperationMethod<
  UpdateMeshInput,
  UpdateMeshOutput,
  UpdateMeshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMeshInput,
  output: UpdateMeshOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMesh",
}));

export type UpdateRouteError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing route for a specified service mesh and virtual router.
 */
export const updateRoute: API.OperationMethod<
  UpdateRouteInput,
  UpdateRouteOutput,
  UpdateRouteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRouteInput,
  output: UpdateRouteOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRoute",
}));

export type UpdateVirtualGatewayError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing virtual gateway in a specified service mesh.
 */
export const updateVirtualGateway: API.OperationMethod<
  UpdateVirtualGatewayInput,
  UpdateVirtualGatewayOutput,
  UpdateVirtualGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualGatewayInput,
  output: UpdateVirtualGatewayOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVirtualGateway",
}));

export type UpdateVirtualNodeError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing virtual node in a specified service mesh.
 */
export const updateVirtualNode: API.OperationMethod<
  UpdateVirtualNodeInput,
  UpdateVirtualNodeOutput,
  UpdateVirtualNodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualNodeInput,
  output: UpdateVirtualNodeOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVirtualNode",
}));

export type UpdateVirtualRouterError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing virtual router in a specified service mesh.
 */
export const updateVirtualRouter: API.OperationMethod<
  UpdateVirtualRouterInput,
  UpdateVirtualRouterOutput,
  UpdateVirtualRouterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualRouterInput,
  output: UpdateVirtualRouterOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVirtualRouter",
}));

export type UpdateVirtualServiceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing virtual service in a specified service mesh.
 */
export const updateVirtualService: API.OperationMethod<
  UpdateVirtualServiceInput,
  UpdateVirtualServiceOutput,
  UpdateVirtualServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualServiceInput,
  output: UpdateVirtualServiceOutput,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVirtualService",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ exact: S.optional(S.String), regex: S.optional(S.String) }),
      ).annotate({ identifier: "HttpPathMatch" });
    case 1:
      return S.suspend(() => S.Struct({ exact: S.optional(S.String) })).annotate({
        identifier: "QueryParameterMatch",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, match: S.optional(QueryParameterMatch) }),
      ).annotate({ identifier: "HttpQueryParameter" });
    case 3:
      return S.Array(HttpQueryParameter);
    case 4:
      return S.suspend(() =>
        S.Struct({ exact: S.optional(S.String), suffix: S.optional(S.String) }),
      ).annotate({
        identifier: "GatewayRouteHostnameMatch",
      });
    case 5:
      return S.suspend(() => S.Struct({ start: S.Number, end: S.Number })).annotate({
        identifier: "MatchRange",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ exact: S.String }),
        /*@__PURE__*/ S.Struct({ regex: S.String }),
        /*@__PURE__*/ S.Struct({ range: MatchRange }),
        /*@__PURE__*/ S.Struct({ prefix: S.String }),
        /*@__PURE__*/ S.Struct({ suffix: S.String }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          invert: S.optional(S.Boolean),
          match: S.optional(HeaderMatchMethod),
        }),
      ).annotate({ identifier: "HttpGatewayRouteHeader" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(HttpGatewayRouteHeader);
    case 1:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(S.String),
          path: S.optional(HttpPathMatch),
          queryParameters: S.optional(HttpQueryParameters),
          method: S.optional(S.String),
          hostname: S.optional(GatewayRouteHostnameMatch),
          headers: S.optional(HttpGatewayRouteHeaders),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HttpGatewayRouteMatch" });
    case 2:
      return S.suspend(() => S.Struct({ virtualServiceName: S.String })).annotate({
        identifier: "GatewayRouteVirtualService",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ virtualService: GatewayRouteVirtualService, port: S.optional(S.Number) }),
      ).annotate({ identifier: "GatewayRouteTarget" });
    case 4:
      return S.suspend(() =>
        S.Struct({ defaultPrefix: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "HttpGatewayRoutePrefixRewrite",
      });
    case 5:
      return S.suspend(() => S.Struct({ exact: S.optional(S.String) })).annotate({
        identifier: "HttpGatewayRoutePathRewrite",
      });
    case 6:
      return S.suspend(() => S.Struct({ defaultTargetHostname: S.optional(S.String) })).annotate({
        identifier: "GatewayRouteHostnameRewrite",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(HttpGatewayRoutePrefixRewrite),
          path: S.optional(HttpGatewayRoutePathRewrite),
          hostname: S.optional(GatewayRouteHostnameRewrite),
        }),
      ).annotate({ identifier: "HttpGatewayRouteRewrite" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ target: GatewayRouteTarget, rewrite: S.optional(HttpGatewayRouteRewrite) }),
      ).annotate({ identifier: "HttpGatewayRouteAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({ match: HttpGatewayRouteMatch, action: HttpGatewayRouteAction }),
      ).annotate({ identifier: "HttpGatewayRoute" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          invert: S.optional(S.Boolean),
          match: S.optional(GrpcMetadataMatchMethod),
        }),
      ).annotate({ identifier: "GrpcGatewayRouteMetadata" });
    case 3:
      return S.Array(GrpcGatewayRouteMetadata);
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceName: S.optional(S.String),
          hostname: S.optional(GatewayRouteHostnameMatch),
          metadata: S.optional(GrpcGatewayRouteMetadataList),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GrpcGatewayRouteMatch" });
    case 5:
      return S.suspend(() =>
        S.Struct({ hostname: S.optional(GatewayRouteHostnameRewrite) }),
      ).annotate({ identifier: "GrpcGatewayRouteRewrite" });
    case 6:
      return S.suspend(() =>
        S.Struct({ target: GatewayRouteTarget, rewrite: S.optional(GrpcGatewayRouteRewrite) }),
      ).annotate({ identifier: "GrpcGatewayRouteAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({ match: GrpcGatewayRouteMatch, action: GrpcGatewayRouteAction }),
      ).annotate({ identifier: "GrpcGatewayRoute" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          priority: S.optional(S.Number),
          httpRoute: S.optional(HttpGatewayRoute),
          http2Route: S.optional(HttpGatewayRoute),
          grpcRoute: S.optional(GrpcGatewayRoute),
        }),
      ).annotate({ identifier: "GatewayRouteSpec" });
    case 1:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "TagRef",
      });
    case 2:
      return S.Array(TagRef);
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayRouteName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          spec: GatewayRouteSpec,
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateGatewayRouteInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          version: S.Number,
          uid: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          meshOwner: S.String,
          resourceOwner: S.String,
        }),
      ).annotate({ identifier: "ResourceMetadata" });
    case 5:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "GatewayRouteStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          gatewayRouteName: S.String,
          virtualGatewayName: S.String,
          spec: GatewayRouteSpec,
          metadata: ResourceMetadata,
          status: GatewayRouteStatus,
        }),
      ).annotate({ identifier: "GatewayRouteData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayRoute: GatewayRouteData.pipe(T.HttpPayload()).annotate({
            identifier: "GatewayRouteData",
          }),
        }),
      ).annotate({ identifier: "CreateGatewayRouteOutput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "EgressFilter",
      });
    case 1:
      return S.suspend(() => S.Struct({ ipPreference: S.optional(S.String) })).annotate({
        identifier: "MeshServiceDiscovery",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          egressFilter: S.optional(EgressFilter),
          serviceDiscovery: S.optional(MeshServiceDiscovery),
        }),
      ).annotate({ identifier: "MeshSpec" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          spec: S.optional(MeshSpec),
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/v20190125/meshes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMeshInput" });
    case 4:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "MeshStatus",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          spec: MeshSpec,
          metadata: ResourceMetadata,
          status: MeshStatus,
        }),
      ).annotate({ identifier: "MeshData" });
    case 6:
      return S.suspend(() =>
        S.Struct({ mesh: MeshData.pipe(T.HttpPayload()).annotate({ identifier: "MeshData" }) }),
      ).annotate({ identifier: "CreateMeshOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(S.String),
          path: S.optional(HttpPathMatch),
          queryParameters: S.optional(HttpQueryParameters),
          method: S.optional(S.String),
          scheme: S.optional(S.String),
          headers: S.optional(HttpRouteHeaders),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HttpRouteMatch" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ virtualNode: S.String, weight: S.Number, port: S.optional(S.Number) }),
      ).annotate({ identifier: "WeightedTarget" });
    case 1:
      return S.Array(WeightedTarget);
    case 2:
      return S.suspend(() => S.Struct({ weightedTargets: WeightedTargets })).annotate({
        identifier: "HttpRouteAction",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.Number), unit: S.optional(S.String) }),
      ).annotate({ identifier: "Duration" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          perRetryTimeout: Duration,
          maxRetries: S.Number,
          httpRetryEvents: S.optional(HttpRetryPolicyEvents),
          tcpRetryEvents: S.optional(TcpRetryPolicyEvents),
        }),
      ).annotate({ identifier: "HttpRetryPolicy" });
    case 6:
      return S.suspend(() =>
        S.Struct({ perRequest: S.optional(Duration), idle: S.optional(Duration) }),
      ).annotate({ identifier: "HttpTimeout" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          match: HttpRouteMatch,
          action: HttpRouteAction,
          retryPolicy: S.optional(HttpRetryPolicy),
          timeout: S.optional(HttpTimeout),
        }),
      ).annotate({ identifier: "HttpRoute" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ idle: S.optional(Duration) })).annotate({
        identifier: "TcpTimeout",
      });
    case 1:
      return S.suspend(() => S.Struct({ port: S.optional(S.Number) })).annotate({
        identifier: "TcpRouteMatch",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          action: TcpRouteAction,
          timeout: S.optional(TcpTimeout),
          match: S.optional(TcpRouteMatch),
        }),
      ).annotate({ identifier: "TcpRoute" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceName: S.optional(S.String),
          methodName: S.optional(S.String),
          metadata: S.optional(GrpcRouteMetadataList),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GrpcRouteMatch" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          perRetryTimeout: Duration,
          maxRetries: S.Number,
          httpRetryEvents: S.optional(HttpRetryPolicyEvents),
          tcpRetryEvents: S.optional(TcpRetryPolicyEvents),
          grpcRetryEvents: S.optional(GrpcRetryPolicyEvents),
        }),
      ).annotate({ identifier: "GrpcRetryPolicy" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          action: GrpcRouteAction,
          match: GrpcRouteMatch,
          retryPolicy: S.optional(GrpcRetryPolicy),
          timeout: S.optional(GrpcTimeout),
        }),
      ).annotate({ identifier: "GrpcRoute" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          priority: S.optional(S.Number),
          httpRoute: S.optional(HttpRoute),
          tcpRoute: S.optional(TcpRoute),
          http2Route: S.optional(HttpRoute),
          grpcRoute: S.optional(GrpcRoute),
        }),
      ).annotate({ identifier: "RouteSpec" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          routeName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          spec: RouteSpec,
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRouteInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "RouteStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualRouterName: S.String,
          routeName: S.String,
          spec: RouteSpec,
          metadata: ResourceMetadata,
          status: RouteStatus,
        }),
      ).annotate({ identifier: "RouteData" });
    case 2:
      return S.suspend(() =>
        S.Struct({ route: RouteData.pipe(T.HttpPayload()).annotate({ identifier: "RouteData" }) }),
      ).annotate({ identifier: "CreateRouteOutput" });
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.suspend(() =>
        S.Struct({ certificateChain: S.String, privateKey: S.String }),
      ).annotate({
        identifier: "VirtualGatewayListenerTlsFileCertificate",
      });
    case 5:
      return S.suspend(() => S.Struct({ secretName: S.String })).annotate({
        identifier: "VirtualGatewayListenerTlsSdsCertificate",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ file: VirtualGatewayListenerTlsFileCertificate }),
        /*@__PURE__*/ S.Struct({ sds: VirtualGatewayListenerTlsSdsCertificate }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ certificateAuthorityArns: VirtualGatewayCertificateAuthorityArns }),
      ).annotate({
        identifier: "VirtualGatewayTlsValidationContextAcmTrust",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ certificateChain: S.String })).annotate({
        identifier: "VirtualGatewayTlsValidationContextFileTrust",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ acm: VirtualGatewayTlsValidationContextAcmTrust }),
        /*@__PURE__*/ S.Struct({ file: VirtualGatewayTlsValidationContextFileTrust }),
        /*@__PURE__*/ S.Struct({ sds: VirtualGatewayTlsValidationContextSdsTrust }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ exact: SubjectAlternativeNameList })).annotate({
        identifier: "SubjectAlternativeNameMatchers",
      });
    case 3:
      return S.suspend(() => S.Struct({ match: SubjectAlternativeNameMatchers })).annotate({
        identifier: "SubjectAlternativeNames",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          trust: VirtualGatewayTlsValidationContextTrust,
          subjectAlternativeNames: S.optional(SubjectAlternativeNames),
        }),
      ).annotate({
        identifier: "VirtualGatewayTlsValidationContext",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          enforce: S.optional(S.Boolean),
          ports: S.optional(PortSet),
          certificate: S.optional(VirtualGatewayClientTlsCertificate),
          validation: VirtualGatewayTlsValidationContext,
        }),
      ).annotate({
        identifier: "VirtualGatewayClientPolicyTls",
      });
    case 6:
      return S.suspend(() => S.Struct({ tls: S.optional(VirtualGatewayClientPolicyTls) })).annotate(
        {
          identifier: "VirtualGatewayClientPolicy",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ clientPolicy: S.optional(VirtualGatewayClientPolicy) }),
      ).annotate({
        identifier: "VirtualGatewayBackendDefaults",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          timeoutMillis: S.Number,
          intervalMillis: S.Number,
          protocol: S.String,
          port: S.optional(S.Number),
          path: S.optional(S.String),
          healthyThreshold: S.Number,
          unhealthyThreshold: S.Number,
        }),
      ).annotate({
        identifier: "VirtualGatewayHealthCheckPolicy",
      });
    case 1:
      return S.suspend(() => S.Struct({ port: S.Number, protocol: S.String })).annotate({
        identifier: "VirtualGatewayPortMapping",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ file: VirtualGatewayTlsValidationContextFileTrust }),
        /*@__PURE__*/ S.Struct({ sds: VirtualGatewayTlsValidationContextSdsTrust }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          trust: VirtualGatewayListenerTlsValidationContextTrust,
          subjectAlternativeNames: S.optional(SubjectAlternativeNames),
        }),
      ).annotate({
        identifier: "VirtualGatewayListenerTlsValidationContext",
      });
    case 4:
      return S.suspend(() => S.Struct({ certificateArn: S.String })).annotate({
        identifier: "VirtualGatewayListenerTlsAcmCertificate",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ acm: VirtualGatewayListenerTlsAcmCertificate }),
        /*@__PURE__*/ S.Struct({ file: VirtualGatewayListenerTlsFileCertificate }),
        /*@__PURE__*/ S.Struct({ sds: VirtualGatewayListenerTlsSdsCertificate }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          mode: S.String,
          validation: S.optional(VirtualGatewayListenerTlsValidationContext),
          certificate: VirtualGatewayListenerTlsCertificate,
        }),
      ).annotate({
        identifier: "VirtualGatewayListenerTls",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ maxConnections: S.Number, maxPendingRequests: S.optional(S.Number) }),
      ).annotate({
        identifier: "VirtualGatewayHttpConnectionPool",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ maxRequests: S.Number })).annotate({
        identifier: "VirtualGatewayHttp2ConnectionPool",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ http: VirtualGatewayHttpConnectionPool }),
        /*@__PURE__*/ S.Struct({ http2: VirtualGatewayHttp2ConnectionPool }),
        /*@__PURE__*/ S.Struct({ grpc: VirtualGatewayGrpcConnectionPool }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          healthCheck: S.optional(VirtualGatewayHealthCheckPolicy),
          portMapping: VirtualGatewayPortMapping,
          tls: S.optional(VirtualGatewayListenerTls),
          connectionPool: S.optional(VirtualGatewayConnectionPool),
        }),
      ).annotate({ identifier: "VirtualGatewayListener" });
    case 3:
      return S.Array(VirtualGatewayListener);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ json: JsonFormat }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ path: S.String, format: S.optional(LoggingFormat) }),
      ).annotate({
        identifier: "VirtualGatewayFileAccessLog",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ file: VirtualGatewayFileAccessLog })]);
    case 7:
      return S.suspend(() => S.Struct({ accessLog: S.optional(VirtualGatewayAccessLog) })).annotate(
        { identifier: "VirtualGatewayLogging" },
      );
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          backendDefaults: S.optional(VirtualGatewayBackendDefaults),
          listeners: VirtualGatewayListeners,
          logging: S.optional(VirtualGatewayLogging),
        }),
      ).annotate({ identifier: "VirtualGatewaySpec" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          virtualGatewayName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualGatewaySpec,
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v20190125/meshes/{meshName}/virtualGateways" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateVirtualGatewayInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualGatewayName: S.String,
          spec: VirtualGatewaySpec,
          metadata: ResourceMetadata,
          status: VirtualGatewayStatus,
        }),
      ).annotate({ identifier: "VirtualGatewayData" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualGateway: VirtualGatewayData.pipe(T.HttpPayload()).annotate({
            identifier: "VirtualGatewayData",
          }),
        }),
      ).annotate({
        identifier: "CreateVirtualGatewayOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          hostname: S.String,
          responseType: S.optional(S.String),
          ipPreference: S.optional(S.String),
        }),
      ).annotate({ identifier: "DnsServiceDiscovery" });
    case 5:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "AwsCloudMapInstanceAttribute",
      });
    case 6:
      return S.Array(AwsCloudMapInstanceAttribute);
    case 7:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          serviceName: S.String,
          attributes: S.optional(AwsCloudMapInstanceAttributes),
          ipPreference: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudMapServiceDiscovery",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ dns: DnsServiceDiscovery }),
        /*@__PURE__*/ S.Struct({ awsCloudMap: AwsCloudMapServiceDiscovery }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ port: S.Number, protocol: S.String })).annotate({
        identifier: "PortMapping",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          mode: S.String,
          certificate: ListenerTlsCertificate,
          validation: S.optional(ListenerTlsValidationContext),
        }),
      ).annotate({ identifier: "ListenerTls" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          timeoutMillis: S.Number,
          intervalMillis: S.Number,
          protocol: S.String,
          port: S.optional(S.Number),
          path: S.optional(S.String),
          healthyThreshold: S.Number,
          unhealthyThreshold: S.Number,
        }),
      ).annotate({ identifier: "HealthCheckPolicy" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tcp: TcpTimeout }),
        /*@__PURE__*/ S.Struct({ http: HttpTimeout }),
        /*@__PURE__*/ S.Struct({ http2: HttpTimeout }),
        /*@__PURE__*/ S.Struct({ grpc: GrpcTimeout }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxServerErrors: S.Number,
          interval: Duration,
          baseEjectionDuration: Duration,
          maxEjectionPercent: S.Number,
        }),
      ).annotate({ identifier: "OutlierDetection" });
    case 6:
      return S.suspend(() => S.Struct({ maxConnections: S.Number })).annotate({
        identifier: "VirtualNodeTcpConnectionPool",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tcp: VirtualNodeTcpConnectionPool }),
        /*@__PURE__*/ S.Struct({ http: VirtualNodeHttpConnectionPool }),
        /*@__PURE__*/ S.Struct({ http2: VirtualNodeHttp2ConnectionPool }),
        /*@__PURE__*/ S.Struct({ grpc: VirtualNodeGrpcConnectionPool }),
      ]);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portMapping: PortMapping,
          tls: S.optional(ListenerTls),
          healthCheck: S.optional(HealthCheckPolicy),
          timeout: S.optional(ListenerTimeout),
          outlierDetection: S.optional(OutlierDetection),
          connectionPool: S.optional(VirtualNodeConnectionPool),
        }),
      ).annotate({ identifier: "Listener" });
    case 1:
      return S.Array(Listener);
    case 2:
      return S.suspend(() =>
        S.Struct({
          trust: TlsValidationContextTrust,
          subjectAlternativeNames: S.optional(SubjectAlternativeNames),
        }),
      ).annotate({ identifier: "TlsValidationContext" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enforce: S.optional(S.Boolean),
          ports: S.optional(PortSet),
          certificate: S.optional(ClientTlsCertificate),
          validation: TlsValidationContext,
        }),
      ).annotate({ identifier: "ClientPolicyTls" });
    case 4:
      return S.suspend(() => S.Struct({ tls: S.optional(ClientPolicyTls) })).annotate({
        identifier: "ClientPolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ virtualServiceName: S.String, clientPolicy: S.optional(ClientPolicy) }),
      ).annotate({ identifier: "VirtualServiceBackend" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ virtualService: VirtualServiceBackend })]);
    case 7:
      return S.Array(Backend);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ clientPolicy: S.optional(ClientPolicy) })).annotate({
        identifier: "BackendDefaults",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ path: S.String, format: S.optional(LoggingFormat) }),
      ).annotate({ identifier: "FileAccessLog" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ file: FileAccessLog })]);
    case 3:
      return S.suspend(() => S.Struct({ accessLog: S.optional(AccessLog) })).annotate({
        identifier: "Logging",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceDiscovery: S.optional(ServiceDiscovery),
          listeners: S.optional(Listeners),
          backends: S.optional(Backends),
          backendDefaults: S.optional(BackendDefaults),
          logging: S.optional(Logging),
        }),
      ).annotate({ identifier: "VirtualNodeSpec" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          virtualNodeName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualNodeSpec,
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v20190125/meshes/{meshName}/virtualNodes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateVirtualNodeInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualNodeName: S.String,
          spec: VirtualNodeSpec,
          metadata: ResourceMetadata,
          status: VirtualNodeStatus,
        }),
      ).annotate({ identifier: "VirtualNodeData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          virtualNode: VirtualNodeData.pipe(T.HttpPayload()).annotate({
            identifier: "VirtualNodeData",
          }),
        }),
      ).annotate({ identifier: "CreateVirtualNodeOutput" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ portMapping: PortMapping })).annotate({
        identifier: "VirtualRouterListener",
      });
    case 1:
      return S.Array(VirtualRouterListener);
    case 2:
      return S.suspend(() => S.Struct({ listeners: S.optional(VirtualRouterListeners) })).annotate({
        identifier: "VirtualRouterSpec",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualRouterName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualRouterSpec,
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v20190125/meshes/{meshName}/virtualRouters" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateVirtualRouterInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualRouterName: S.String,
          spec: VirtualRouterSpec,
          metadata: ResourceMetadata,
          status: VirtualRouterStatus,
        }),
      ).annotate({ identifier: "VirtualRouterData" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          virtualRouter: VirtualRouterData.pipe(T.HttpPayload()).annotate({
            identifier: "VirtualRouterData",
          }),
        }),
      ).annotate({
        identifier: "CreateVirtualRouterOutput",
      });
    case 6:
      return S.suspend(() => S.Struct({ virtualNodeName: S.String })).annotate({
        identifier: "VirtualNodeServiceProvider",
      });
    case 7:
      return S.suspend(() => S.Struct({ virtualRouterName: S.String })).annotate({
        identifier: "VirtualRouterServiceProvider",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ virtualNode: VirtualNodeServiceProvider }),
        /*@__PURE__*/ S.Struct({ virtualRouter: VirtualRouterServiceProvider }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ provider: S.optional(VirtualServiceProvider) })).annotate({
        identifier: "VirtualServiceSpec",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualServiceName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualServiceSpec,
          tags: S.optional(TagList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v20190125/meshes/{meshName}/virtualServices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateVirtualServiceInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualServiceName: S.String,
          spec: VirtualServiceSpec,
          metadata: ResourceMetadata,
          status: VirtualServiceStatus,
        }),
      ).annotate({ identifier: "VirtualServiceData" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          virtualService: VirtualServiceData.pipe(T.HttpPayload()).annotate({
            identifier: "VirtualServiceData",
          }),
        }),
      ).annotate({
        identifier: "CreateVirtualServiceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayRouteName: S.String.pipe(T.HttpLabel("gatewayRouteName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGatewayRouteInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ meshName: S.String.pipe(T.HttpLabel("meshName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v20190125/meshes/{meshName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMeshInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          routeName: S.String.pipe(T.HttpLabel("routeName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRouteInput" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVirtualGatewayInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          virtualNodeName: S.String.pipe(T.HttpLabel("virtualNodeName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteVirtualNodeInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteVirtualRouterInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualServiceName: S.String.pipe(T.HttpLabel("virtualServiceName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVirtualServiceInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          gatewayRouteName: S.String.pipe(T.HttpLabel("gatewayRouteName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeGatewayRouteInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          gatewayRoute: GatewayRouteData.pipe(T.HttpPayload()).annotate({
            identifier: "GatewayRouteData",
          }),
        }),
      ).annotate({
        identifier: "DescribeGatewayRouteOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v20190125/meshes/{meshName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeMeshInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          routeName: S.String.pipe(T.HttpLabel("routeName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeRouteInput" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeVirtualGatewayInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          virtualNodeName: S.String.pipe(T.HttpLabel("virtualNodeName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeVirtualNodeInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualNode: VirtualNodeData.pipe(T.HttpPayload()).annotate({
            identifier: "VirtualNodeData",
          }),
        }),
      ).annotate({
        identifier: "DescribeVirtualNodeOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeVirtualRouterInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          virtualServiceName: S.String.pipe(T.HttpLabel("virtualServiceName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeVirtualServiceInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListGatewayRoutesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          gatewayRouteName: S.String,
          virtualGatewayName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GatewayRouteRef" });
    case 7:
      return S.Array(GatewayRouteRef);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ gatewayRoutes: GatewayRouteList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListGatewayRoutesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v20190125/meshes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMeshesInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "MeshRef" });
    case 3:
      return S.Array(MeshRef);
    case 4:
      return S.suspend(() =>
        S.Struct({ meshes: MeshList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMeshesOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRoutesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualRouterName: S.String,
          routeName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "RouteRef" });
    case 7:
      return S.Array(RouteRef);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ routes: RouteList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRoutesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v20190125/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 2:
      return S.suspend(() => S.Struct({ tags: TagList, nextToken: S.optional(S.String) })).annotate(
        {
          identifier: "ListTagsForResourceOutput",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v20190125/meshes/{meshName}/virtualGateways" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVirtualGatewaysInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualGatewayName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "VirtualGatewayRef" });
    case 5:
      return S.Array(VirtualGatewayRef);
    case 6:
      return S.suspend(() =>
        S.Struct({ virtualGateways: VirtualGatewayList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListVirtualGatewaysOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v20190125/meshes/{meshName}/virtualNodes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVirtualNodesInput" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualNodeName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "VirtualNodeRef" });
    case 1:
      return S.Array(VirtualNodeRef);
    case 2:
      return S.suspend(() =>
        S.Struct({ virtualNodes: VirtualNodeList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListVirtualNodesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v20190125/meshes/{meshName}/virtualRouters" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVirtualRoutersInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualRouterName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "VirtualRouterRef" });
    case 5:
      return S.Array(VirtualRouterRef);
    case 6:
      return S.suspend(() =>
        S.Struct({ virtualRouters: VirtualRouterList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListVirtualRoutersOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v20190125/meshes/{meshName}/virtualServices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVirtualServicesInput" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          virtualServiceName: S.String,
          meshOwner: S.String,
          resourceOwner: S.String,
          arn: S.String,
          version: S.Number,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "VirtualServiceRef" });
    case 1:
      return S.Array(VirtualServiceRef);
    case 2:
      return S.suspend(() =>
        S.Struct({ virtualServices: VirtualServiceList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListVirtualServicesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpQuery("resourceArn")), tags: TagList }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/v20190125/tag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          tagKeys: TagKeyList,
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/v20190125/untag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          gatewayRouteName: S.String.pipe(T.HttpLabel("gatewayRouteName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          spec: GatewayRouteSpec,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGatewayRouteInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: S.optional(MeshSpec),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v20190125/meshes/{meshName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateMeshInput" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          routeName: S.String.pipe(T.HttpLabel("routeName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          spec: RouteSpec,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRouteInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualGatewaySpec,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVirtualGatewayInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualNodeName: S.String.pipe(T.HttpLabel("virtualNodeName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualNodeSpec,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateVirtualNodeInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualRouterSpec,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateVirtualRouterInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          virtualServiceName: S.String.pipe(T.HttpLabel("virtualServiceName")),
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: VirtualServiceSpec,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          meshOwner: S.optional(S.String).pipe(T.HttpQuery("meshOwner")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVirtualServiceInput",
      });
  }
}
