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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
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
export type QueryParameterName = string;
export interface QueryParameterMatch {
  exact?: string;
}
export interface HttpQueryParameter {
  name: string;
  match?: QueryParameterMatch;
}
export type HttpQueryParameters = HttpQueryParameter[];
export type HttpMethod = string;
export type ExactHostName = string;
export type SuffixHostname = string;
export interface GatewayRouteHostnameMatch {
  exact?: string;
  suffix?: string;
}
export type HeaderName = string;
export type HeaderMatch = string;
export interface MatchRange {
  start: number;
  end: number;
}
export type HeaderMatchMethod =
  | { exact: string; regex?: never; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex: string; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range: MatchRange; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix: string; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix?: never; suffix: string };
export interface HttpGatewayRouteHeader {
  name: string;
  invert?: boolean;
  match?: HeaderMatchMethod;
}
export type HttpGatewayRouteHeaders = HttpGatewayRouteHeader[];
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
export interface GatewayRouteVirtualService {
  virtualServiceName: string;
}
export interface GatewayRouteTarget {
  virtualService: GatewayRouteVirtualService;
  port?: number;
}
export type DefaultGatewayRouteRewrite = string;
export type HttpGatewayRoutePrefix = string;
export interface HttpGatewayRoutePrefixRewrite {
  defaultPrefix?: string;
  value?: string;
}
export interface HttpGatewayRoutePathRewrite {
  exact?: string;
}
export interface GatewayRouteHostnameRewrite {
  defaultTargetHostname?: string;
}
export interface HttpGatewayRouteRewrite {
  prefix?: HttpGatewayRoutePrefixRewrite;
  path?: HttpGatewayRoutePathRewrite;
  hostname?: GatewayRouteHostnameRewrite;
}
export interface HttpGatewayRouteAction {
  target: GatewayRouteTarget;
  rewrite?: HttpGatewayRouteRewrite;
}
export interface HttpGatewayRoute {
  match: HttpGatewayRouteMatch;
  action: HttpGatewayRouteAction;
}
export type ServiceName = string;
export type GrpcMetadataMatchMethod =
  | { exact: string; regex?: never; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex: string; range?: never; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range: MatchRange; prefix?: never; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix: string; suffix?: never }
  | { exact?: never; regex?: never; range?: never; prefix?: never; suffix: string };
export interface GrpcGatewayRouteMetadata {
  name: string;
  invert?: boolean;
  match?: GrpcMetadataMatchMethod;
}
export type GrpcGatewayRouteMetadataList = GrpcGatewayRouteMetadata[];
export interface GrpcGatewayRouteMatch {
  serviceName?: string;
  hostname?: GatewayRouteHostnameMatch;
  metadata?: GrpcGatewayRouteMetadata[];
  port?: number;
}
export interface GrpcGatewayRouteRewrite {
  hostname?: GatewayRouteHostnameRewrite;
}
export interface GrpcGatewayRouteAction {
  target: GatewayRouteTarget;
  rewrite?: GrpcGatewayRouteRewrite;
}
export interface GrpcGatewayRoute {
  match: GrpcGatewayRouteMatch;
  action: GrpcGatewayRouteAction;
}
export interface GatewayRouteSpec {
  priority?: number;
  httpRoute?: HttpGatewayRoute;
  http2Route?: HttpGatewayRoute;
  grpcRoute?: GrpcGatewayRoute;
}
export type TagKey = string;
export type TagValue = string;
export interface TagRef {
  key: string;
  value: string;
}
export type TagList = TagRef[];
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
export type GatewayRouteStatusCode = string;
export interface GatewayRouteStatus {
  status: string;
}
export interface GatewayRouteData {
  meshName: string;
  gatewayRouteName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  metadata: ResourceMetadata;
  status: GatewayRouteStatus;
}
export interface CreateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export type EgressFilterType = string;
export interface EgressFilter {
  type: string;
}
export type IpPreference = string;
export interface MeshServiceDiscovery {
  ipPreference?: string;
}
export interface MeshSpec {
  egressFilter?: EgressFilter;
  serviceDiscovery?: MeshServiceDiscovery;
}
export interface CreateMeshInput {
  meshName: string;
  spec?: MeshSpec;
  tags?: TagRef[];
  clientToken?: string;
}
export type MeshStatusCode = string;
export interface MeshStatus {
  status?: string;
}
export interface MeshData {
  meshName: string;
  spec: MeshSpec;
  metadata: ResourceMetadata;
  status: MeshStatus;
}
export interface CreateMeshOutput {
  mesh: MeshData;
}
export type RoutePriority = number;
export type HttpScheme = string;
export interface HttpRouteHeader {
  name: string;
  invert?: boolean;
  match?: HeaderMatchMethod;
}
export type HttpRouteHeaders = HttpRouteHeader[];
export interface HttpRouteMatch {
  prefix?: string;
  path?: HttpPathMatch;
  queryParameters?: HttpQueryParameter[];
  method?: string;
  scheme?: string;
  headers?: HttpRouteHeader[];
  port?: number;
}
export type PercentInt = number;
export interface WeightedTarget {
  virtualNode: string;
  weight: number;
  port?: number;
}
export type WeightedTargets = WeightedTarget[];
export interface HttpRouteAction {
  weightedTargets: WeightedTarget[];
}
export type DurationValue = number;
export type DurationUnit = string;
export interface Duration {
  value?: number;
  unit?: string;
}
export type MaxRetries = number;
export type HttpRetryPolicyEvent = string;
export type HttpRetryPolicyEvents = string[];
export type TcpRetryPolicyEvent = string;
export type TcpRetryPolicyEvents = string[];
export interface HttpRetryPolicy {
  perRetryTimeout: Duration;
  maxRetries: number;
  httpRetryEvents?: string[];
  tcpRetryEvents?: string[];
}
export interface HttpTimeout {
  perRequest?: Duration;
  idle?: Duration;
}
export interface HttpRoute {
  match: HttpRouteMatch;
  action: HttpRouteAction;
  retryPolicy?: HttpRetryPolicy;
  timeout?: HttpTimeout;
}
export interface TcpRouteAction {
  weightedTargets: WeightedTarget[];
}
export interface TcpTimeout {
  idle?: Duration;
}
export interface TcpRouteMatch {
  port?: number;
}
export interface TcpRoute {
  action: TcpRouteAction;
  timeout?: TcpTimeout;
  match?: TcpRouteMatch;
}
export interface GrpcRouteAction {
  weightedTargets: WeightedTarget[];
}
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
export interface GrpcRouteMatch {
  serviceName?: string;
  methodName?: string;
  metadata?: GrpcRouteMetadata[];
  port?: number;
}
export type GrpcRetryPolicyEvent = string;
export type GrpcRetryPolicyEvents = string[];
export interface GrpcRetryPolicy {
  perRetryTimeout: Duration;
  maxRetries: number;
  httpRetryEvents?: string[];
  tcpRetryEvents?: string[];
  grpcRetryEvents?: string[];
}
export interface GrpcTimeout {
  perRequest?: Duration;
  idle?: Duration;
}
export interface GrpcRoute {
  action: GrpcRouteAction;
  match: GrpcRouteMatch;
  retryPolicy?: GrpcRetryPolicy;
  timeout?: GrpcTimeout;
}
export interface RouteSpec {
  priority?: number;
  httpRoute?: HttpRoute;
  tcpRoute?: TcpRoute;
  http2Route?: HttpRoute;
  grpcRoute?: GrpcRoute;
}
export interface CreateRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  spec: RouteSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
export type RouteStatusCode = string;
export interface RouteStatus {
  status: string;
}
export interface RouteData {
  meshName: string;
  virtualRouterName: string;
  routeName: string;
  spec: RouteSpec;
  metadata: ResourceMetadata;
  status: RouteStatus;
}
export interface CreateRouteOutput {
  route: RouteData;
}
export type PortNumber = number;
export type PortSet = number[];
export type FilePath = string;
export interface VirtualGatewayListenerTlsFileCertificate {
  certificateChain: string;
  privateKey: string;
}
export type VirtualGatewaySdsSecretName = string;
export interface VirtualGatewayListenerTlsSdsCertificate {
  secretName: string;
}
export type VirtualGatewayClientTlsCertificate =
  | { file: VirtualGatewayListenerTlsFileCertificate; sds?: never }
  | { file?: never; sds: VirtualGatewayListenerTlsSdsCertificate };
export type VirtualGatewayCertificateAuthorityArns = string[];
export interface VirtualGatewayTlsValidationContextAcmTrust {
  certificateAuthorityArns: string[];
}
export interface VirtualGatewayTlsValidationContextFileTrust {
  certificateChain: string;
}
export interface VirtualGatewayTlsValidationContextSdsTrust {
  secretName: string;
}
export type VirtualGatewayTlsValidationContextTrust =
  | { acm: VirtualGatewayTlsValidationContextAcmTrust; file?: never; sds?: never }
  | { acm?: never; file: VirtualGatewayTlsValidationContextFileTrust; sds?: never }
  | { acm?: never; file?: never; sds: VirtualGatewayTlsValidationContextSdsTrust };
export type SubjectAlternativeName = string;
export type SubjectAlternativeNameList = string[];
export interface SubjectAlternativeNameMatchers {
  exact: string[];
}
export interface SubjectAlternativeNames {
  match: SubjectAlternativeNameMatchers;
}
export interface VirtualGatewayTlsValidationContext {
  trust: VirtualGatewayTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export interface VirtualGatewayClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate?: VirtualGatewayClientTlsCertificate;
  validation: VirtualGatewayTlsValidationContext;
}
export interface VirtualGatewayClientPolicy {
  tls?: VirtualGatewayClientPolicyTls;
}
export interface VirtualGatewayBackendDefaults {
  clientPolicy?: VirtualGatewayClientPolicy;
}
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
export interface VirtualGatewayPortMapping {
  port: number;
  protocol: string;
}
export type VirtualGatewayListenerTlsMode = string;
export type VirtualGatewayListenerTlsValidationContextTrust =
  | { file: VirtualGatewayTlsValidationContextFileTrust; sds?: never }
  | { file?: never; sds: VirtualGatewayTlsValidationContextSdsTrust };
export interface VirtualGatewayListenerTlsValidationContext {
  trust: VirtualGatewayListenerTlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export interface VirtualGatewayListenerTlsAcmCertificate {
  certificateArn: string;
}
export type VirtualGatewayListenerTlsCertificate =
  | { acm: VirtualGatewayListenerTlsAcmCertificate; file?: never; sds?: never }
  | { acm?: never; file: VirtualGatewayListenerTlsFileCertificate; sds?: never }
  | { acm?: never; file?: never; sds: VirtualGatewayListenerTlsSdsCertificate };
export interface VirtualGatewayListenerTls {
  mode: string;
  validation?: VirtualGatewayListenerTlsValidationContext;
  certificate: VirtualGatewayListenerTlsCertificate;
}
export type MaxConnections = number;
export type MaxPendingRequests = number;
export interface VirtualGatewayHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number;
}
export type MaxRequests = number;
export interface VirtualGatewayHttp2ConnectionPool {
  maxRequests: number;
}
export interface VirtualGatewayGrpcConnectionPool {
  maxRequests: number;
}
export type VirtualGatewayConnectionPool =
  | { http: VirtualGatewayHttpConnectionPool; http2?: never; grpc?: never }
  | { http?: never; http2: VirtualGatewayHttp2ConnectionPool; grpc?: never }
  | { http?: never; http2?: never; grpc: VirtualGatewayGrpcConnectionPool };
export interface VirtualGatewayListener {
  healthCheck?: VirtualGatewayHealthCheckPolicy;
  portMapping: VirtualGatewayPortMapping;
  tls?: VirtualGatewayListenerTls;
  connectionPool?: VirtualGatewayConnectionPool;
}
export type VirtualGatewayListeners = VirtualGatewayListener[];
export type TextFormat = string;
export type JsonKey = string;
export type JsonValue = string;
export interface JsonFormatRef {
  key: string;
  value: string;
}
export type JsonFormat = JsonFormatRef[];
export type LoggingFormat =
  | { text: string; json?: never }
  | { text?: never; json: JsonFormatRef[] };
export interface VirtualGatewayFileAccessLog {
  path: string;
  format?: LoggingFormat;
}
export type VirtualGatewayAccessLog = { file: VirtualGatewayFileAccessLog };
export interface VirtualGatewayLogging {
  accessLog?: VirtualGatewayAccessLog;
}
export interface VirtualGatewaySpec {
  backendDefaults?: VirtualGatewayBackendDefaults;
  listeners: VirtualGatewayListener[];
  logging?: VirtualGatewayLogging;
}
export interface CreateVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  spec: VirtualGatewaySpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
export type VirtualGatewayStatusCode = string;
export interface VirtualGatewayStatus {
  status: string;
}
export interface VirtualGatewayData {
  meshName: string;
  virtualGatewayName: string;
  spec: VirtualGatewaySpec;
  metadata: ResourceMetadata;
  status: VirtualGatewayStatus;
}
export interface CreateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export type Hostname = string;
export type DnsResponseType = string;
export interface DnsServiceDiscovery {
  hostname: string;
  responseType?: string;
  ipPreference?: string;
}
export type AwsCloudMapName = string;
export type AwsCloudMapInstanceAttributeKey = string;
export type AwsCloudMapInstanceAttributeValue = string;
export interface AwsCloudMapInstanceAttribute {
  key: string;
  value: string;
}
export type AwsCloudMapInstanceAttributes = AwsCloudMapInstanceAttribute[];
export interface AwsCloudMapServiceDiscovery {
  namespaceName: string;
  serviceName: string;
  attributes?: AwsCloudMapInstanceAttribute[];
  ipPreference?: string;
}
export type ServiceDiscovery =
  | { dns: DnsServiceDiscovery; awsCloudMap?: never }
  | { dns?: never; awsCloudMap: AwsCloudMapServiceDiscovery };
export type PortProtocol = string;
export interface PortMapping {
  port: number;
  protocol: string;
}
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
export interface ListenerTls {
  mode: string;
  certificate: ListenerTlsCertificate;
  validation?: ListenerTlsValidationContext;
}
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
export type ListenerTimeout =
  | { tcp: TcpTimeout; http?: never; http2?: never; grpc?: never }
  | { tcp?: never; http: HttpTimeout; http2?: never; grpc?: never }
  | { tcp?: never; http?: never; http2: HttpTimeout; grpc?: never }
  | { tcp?: never; http?: never; http2?: never; grpc: GrpcTimeout };
export type OutlierDetectionMaxServerErrors = number;
export type OutlierDetectionMaxEjectionPercent = number;
export interface OutlierDetection {
  maxServerErrors: number;
  interval: Duration;
  baseEjectionDuration: Duration;
  maxEjectionPercent: number;
}
export interface VirtualNodeTcpConnectionPool {
  maxConnections: number;
}
export interface VirtualNodeHttpConnectionPool {
  maxConnections: number;
  maxPendingRequests?: number;
}
export interface VirtualNodeHttp2ConnectionPool {
  maxRequests: number;
}
export interface VirtualNodeGrpcConnectionPool {
  maxRequests: number;
}
export type VirtualNodeConnectionPool =
  | { tcp: VirtualNodeTcpConnectionPool; http?: never; http2?: never; grpc?: never }
  | { tcp?: never; http: VirtualNodeHttpConnectionPool; http2?: never; grpc?: never }
  | { tcp?: never; http?: never; http2: VirtualNodeHttp2ConnectionPool; grpc?: never }
  | { tcp?: never; http?: never; http2?: never; grpc: VirtualNodeGrpcConnectionPool };
export interface Listener {
  portMapping: PortMapping;
  tls?: ListenerTls;
  healthCheck?: HealthCheckPolicy;
  timeout?: ListenerTimeout;
  outlierDetection?: OutlierDetection;
  connectionPool?: VirtualNodeConnectionPool;
}
export type Listeners = Listener[];
export type ClientTlsCertificate =
  | { file: ListenerTlsFileCertificate; sds?: never }
  | { file?: never; sds: ListenerTlsSdsCertificate };
export type CertificateAuthorityArns = string[];
export interface TlsValidationContextAcmTrust {
  certificateAuthorityArns: string[];
}
export type TlsValidationContextTrust =
  | { acm: TlsValidationContextAcmTrust; file?: never; sds?: never }
  | { acm?: never; file: TlsValidationContextFileTrust; sds?: never }
  | { acm?: never; file?: never; sds: TlsValidationContextSdsTrust };
export interface TlsValidationContext {
  trust: TlsValidationContextTrust;
  subjectAlternativeNames?: SubjectAlternativeNames;
}
export interface ClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate?: ClientTlsCertificate;
  validation: TlsValidationContext;
}
export interface ClientPolicy {
  tls?: ClientPolicyTls;
}
export interface VirtualServiceBackend {
  virtualServiceName: string;
  clientPolicy?: ClientPolicy;
}
export type Backend = { virtualService: VirtualServiceBackend };
export type Backends = Backend[];
export interface BackendDefaults {
  clientPolicy?: ClientPolicy;
}
export interface FileAccessLog {
  path: string;
  format?: LoggingFormat;
}
export type AccessLog = { file: FileAccessLog };
export interface Logging {
  accessLog?: AccessLog;
}
export interface VirtualNodeSpec {
  serviceDiscovery?: ServiceDiscovery;
  listeners?: Listener[];
  backends?: Backend[];
  backendDefaults?: BackendDefaults;
  logging?: Logging;
}
export interface CreateVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  spec: VirtualNodeSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
export type VirtualNodeStatusCode = string;
export interface VirtualNodeStatus {
  status: string;
}
export interface VirtualNodeData {
  meshName: string;
  virtualNodeName: string;
  spec: VirtualNodeSpec;
  metadata: ResourceMetadata;
  status: VirtualNodeStatus;
}
export interface CreateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface VirtualRouterListener {
  portMapping: PortMapping;
}
export type VirtualRouterListeners = VirtualRouterListener[];
export interface VirtualRouterSpec {
  listeners?: VirtualRouterListener[];
}
export interface CreateVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  spec: VirtualRouterSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
export type VirtualRouterStatusCode = string;
export interface VirtualRouterStatus {
  status: string;
}
export interface VirtualRouterData {
  meshName: string;
  virtualRouterName: string;
  spec: VirtualRouterSpec;
  metadata: ResourceMetadata;
  status: VirtualRouterStatus;
}
export interface CreateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface VirtualNodeServiceProvider {
  virtualNodeName: string;
}
export interface VirtualRouterServiceProvider {
  virtualRouterName: string;
}
export type VirtualServiceProvider =
  | { virtualNode: VirtualNodeServiceProvider; virtualRouter?: never }
  | { virtualNode?: never; virtualRouter: VirtualRouterServiceProvider };
export interface VirtualServiceSpec {
  provider?: VirtualServiceProvider;
}
export interface CreateVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  spec: VirtualServiceSpec;
  tags?: TagRef[];
  clientToken?: string;
  meshOwner?: string;
}
export type VirtualServiceStatusCode = string;
export interface VirtualServiceStatus {
  status: string;
}
export interface VirtualServiceData {
  meshName: string;
  virtualServiceName: string;
  spec: VirtualServiceSpec;
  metadata: ResourceMetadata;
  status: VirtualServiceStatus;
}
export interface CreateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
export interface DeleteGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  meshOwner?: string;
}
export interface DeleteGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface DeleteMeshInput {
  meshName: string;
}
export interface DeleteMeshOutput {
  mesh: MeshData;
}
export interface DeleteRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  meshOwner?: string;
}
export interface DeleteRouteOutput {
  route: RouteData;
}
export interface DeleteVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface DeleteVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface DeleteVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface DeleteVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DeleteVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
export interface DescribeGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  meshOwner?: string;
}
export interface DescribeGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface DescribeMeshInput {
  meshName: string;
  meshOwner?: string;
}
export interface DescribeMeshOutput {
  mesh: MeshData;
}
export interface DescribeRouteInput {
  routeName: string;
  meshName: string;
  meshOwner?: string;
  virtualRouterName: string;
}
export interface DescribeRouteOutput {
  route: RouteData;
}
export interface DescribeVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface DescribeVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface DescribeVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface DescribeVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  meshOwner?: string;
}
export interface DescribeVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
export type ListGatewayRoutesLimit = number;
export interface ListGatewayRoutesInput {
  meshName: string;
  virtualGatewayName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
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
export type GatewayRouteList = GatewayRouteRef[];
export interface ListGatewayRoutesOutput {
  gatewayRoutes: GatewayRouteRef[];
  nextToken?: string;
}
export type ListMeshesLimit = number;
export interface ListMeshesInput {
  nextToken?: string;
  limit?: number;
}
export interface MeshRef {
  meshName: string;
  meshOwner: string;
  resourceOwner: string;
  arn: string;
  version: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}
export type MeshList = MeshRef[];
export interface ListMeshesOutput {
  meshes: MeshRef[];
  nextToken?: string;
}
export type ListRoutesLimit = number;
export interface ListRoutesInput {
  meshName: string;
  virtualRouterName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
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
export type RouteList = RouteRef[];
export interface ListRoutesOutput {
  routes: RouteRef[];
  nextToken?: string;
}
export type TagsLimit = number;
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
  limit?: number;
}
export interface ListTagsForResourceOutput {
  tags: TagRef[];
  nextToken?: string;
}
export type ListVirtualGatewaysLimit = number;
export interface ListVirtualGatewaysInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
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
export type VirtualGatewayList = VirtualGatewayRef[];
export interface ListVirtualGatewaysOutput {
  virtualGateways: VirtualGatewayRef[];
  nextToken?: string;
}
export type ListVirtualNodesLimit = number;
export interface ListVirtualNodesInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
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
export type VirtualNodeList = VirtualNodeRef[];
export interface ListVirtualNodesOutput {
  virtualNodes: VirtualNodeRef[];
  nextToken?: string;
}
export type ListVirtualRoutersLimit = number;
export interface ListVirtualRoutersInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
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
export type VirtualRouterList = VirtualRouterRef[];
export interface ListVirtualRoutersOutput {
  virtualRouters: VirtualRouterRef[];
  nextToken?: string;
}
export type ListVirtualServicesLimit = number;
export interface ListVirtualServicesInput {
  meshName: string;
  nextToken?: string;
  limit?: number;
  meshOwner?: string;
}
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
export type VirtualServiceList = VirtualServiceRef[];
export interface ListVirtualServicesOutput {
  virtualServices: VirtualServiceRef[];
  nextToken?: string;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: TagRef[];
}
export interface TagResourceOutput {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateGatewayRouteInput {
  gatewayRouteName: string;
  meshName: string;
  virtualGatewayName: string;
  spec: GatewayRouteSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateGatewayRouteOutput {
  gatewayRoute: GatewayRouteData;
}
export interface UpdateMeshInput {
  meshName: string;
  spec?: MeshSpec;
  clientToken?: string;
}
export interface UpdateMeshOutput {
  mesh: MeshData;
}
export interface UpdateRouteInput {
  routeName: string;
  meshName: string;
  virtualRouterName: string;
  spec: RouteSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateRouteOutput {
  route: RouteData;
}
export interface UpdateVirtualGatewayInput {
  virtualGatewayName: string;
  meshName: string;
  spec: VirtualGatewaySpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualGatewayOutput {
  virtualGateway: VirtualGatewayData;
}
export interface UpdateVirtualNodeInput {
  virtualNodeName: string;
  meshName: string;
  spec: VirtualNodeSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualNodeOutput {
  virtualNode: VirtualNodeData;
}
export interface UpdateVirtualRouterInput {
  virtualRouterName: string;
  meshName: string;
  spec: VirtualRouterSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualRouterOutput {
  virtualRouter: VirtualRouterData;
}
export interface UpdateVirtualServiceInput {
  virtualServiceName: string;
  meshName: string;
  spec: VirtualServiceSpec;
  clientToken?: string;
  meshOwner?: string;
}
export interface UpdateVirtualServiceOutput {
  virtualService: VirtualServiceData;
}
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
  input: __S(27) as any as S.Schema<CreateGatewayRouteInput>,
  output: __S(31) as any as S.Schema<CreateGatewayRouteOutput>,
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
  input: __S(35) as any as S.Schema<CreateMeshInput>,
  output: __S(38) as any as S.Schema<CreateMeshOutput>,
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
  input: __S(55) as any as S.Schema<CreateRouteInput>,
  output: __S(58) as any as S.Schema<CreateRouteOutput>,
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
  input: __S(89) as any as S.Schema<CreateVirtualGatewayInput>,
  output: __S(91) as any as S.Schema<CreateVirtualGatewayOutput>,
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
  input: __S(117) as any as S.Schema<CreateVirtualNodeInput>,
  output: __S(119) as any as S.Schema<CreateVirtualNodeOutput>,
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
  input: __S(123) as any as S.Schema<CreateVirtualRouterInput>,
  output: __S(125) as any as S.Schema<CreateVirtualRouterOutput>,
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
  input: __S(130) as any as S.Schema<CreateVirtualServiceInput>,
  output: __S(132) as any as S.Schema<CreateVirtualServiceOutput>,
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
  input: __S(133) as any as S.Schema<DeleteGatewayRouteInput>,
  output: __S(31) as any as S.Schema<DeleteGatewayRouteOutput>,
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
  input: __S(134) as any as S.Schema<DeleteMeshInput>,
  output: __S(38) as any as S.Schema<DeleteMeshOutput>,
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
  input: __S(135) as any as S.Schema<DeleteRouteInput>,
  output: __S(58) as any as S.Schema<DeleteRouteOutput>,
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
  input: __S(136) as any as S.Schema<DeleteVirtualGatewayInput>,
  output: __S(91) as any as S.Schema<DeleteVirtualGatewayOutput>,
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
  input: __S(137) as any as S.Schema<DeleteVirtualNodeInput>,
  output: __S(119) as any as S.Schema<DeleteVirtualNodeOutput>,
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
  input: __S(138) as any as S.Schema<DeleteVirtualRouterInput>,
  output: __S(125) as any as S.Schema<DeleteVirtualRouterOutput>,
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
  input: __S(139) as any as S.Schema<DeleteVirtualServiceInput>,
  output: __S(132) as any as S.Schema<DeleteVirtualServiceOutput>,
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
  input: __S(140) as any as S.Schema<DescribeGatewayRouteInput>,
  output: __S(141) as any as S.Schema<DescribeGatewayRouteOutput>,
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
  input: __S(142) as any as S.Schema<DescribeMeshInput>,
  output: __S(38) as any as S.Schema<DescribeMeshOutput>,
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
  input: __S(143) as any as S.Schema<DescribeRouteInput>,
  output: __S(58) as any as S.Schema<DescribeRouteOutput>,
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
  input: __S(144) as any as S.Schema<DescribeVirtualGatewayInput>,
  output: __S(91) as any as S.Schema<DescribeVirtualGatewayOutput>,
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
  input: __S(145) as any as S.Schema<DescribeVirtualNodeInput>,
  output: __S(146) as any as S.Schema<DescribeVirtualNodeOutput>,
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
  input: __S(147) as any as S.Schema<DescribeVirtualRouterInput>,
  output: __S(125) as any as S.Schema<DescribeVirtualRouterOutput>,
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
  input: __S(148) as any as S.Schema<DescribeVirtualServiceInput>,
  output: __S(132) as any as S.Schema<DescribeVirtualServiceOutput>,
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
  input: __S(149) as any as S.Schema<ListGatewayRoutesInput>,
  output: __S(152) as any as S.Schema<ListGatewayRoutesOutput>,
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
  input: __S(153) as any as S.Schema<ListMeshesInput>,
  output: __S(156) as any as S.Schema<ListMeshesOutput>,
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
  input: __S(157) as any as S.Schema<ListRoutesInput>,
  output: __S(160) as any as S.Schema<ListRoutesOutput>,
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
  input: __S(161) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(162) as any as S.Schema<ListTagsForResourceOutput>,
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
  input: __S(163) as any as S.Schema<ListVirtualGatewaysInput>,
  output: __S(166) as any as S.Schema<ListVirtualGatewaysOutput>,
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
  input: __S(167) as any as S.Schema<ListVirtualNodesInput>,
  output: __S(170) as any as S.Schema<ListVirtualNodesOutput>,
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
  input: __S(171) as any as S.Schema<ListVirtualRoutersInput>,
  output: __S(174) as any as S.Schema<ListVirtualRoutersOutput>,
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
  input: __S(175) as any as S.Schema<ListVirtualServicesInput>,
  output: __S(178) as any as S.Schema<ListVirtualServicesOutput>,
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
  input: __S(179) as any as S.Schema<TagResourceInput>,
  output: __S(180) as any as S.Schema<TagResourceOutput>,
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
  input: __S(181) as any as S.Schema<UntagResourceInput>,
  output: __S(180) as any as S.Schema<UntagResourceOutput>,
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
  input: __S(182) as any as S.Schema<UpdateGatewayRouteInput>,
  output: __S(31) as any as S.Schema<UpdateGatewayRouteOutput>,
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
  input: __S(183) as any as S.Schema<UpdateMeshInput>,
  output: __S(38) as any as S.Schema<UpdateMeshOutput>,
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
  input: __S(184) as any as S.Schema<UpdateRouteInput>,
  output: __S(58) as any as S.Schema<UpdateRouteOutput>,
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
  input: __S(185) as any as S.Schema<UpdateVirtualGatewayInput>,
  output: __S(91) as any as S.Schema<UpdateVirtualGatewayOutput>,
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
  input: __S(186) as any as S.Schema<UpdateVirtualNodeInput>,
  output: __S(119) as any as S.Schema<UpdateVirtualNodeOutput>,
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
  input: __S(187) as any as S.Schema<UpdateVirtualRouterInput>,
  output: __S(125) as any as S.Schema<UpdateVirtualRouterOutput>,
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
  input: __S(188) as any as S.Schema<UpdateVirtualServiceInput>,
  output: __S(132) as any as S.Schema<UpdateVirtualServiceOutput>,
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
      return S.suspend(() => S.Struct({ name: S.String, match: S.optional(__S(1)) })).annotate({
        identifier: "HttpQueryParameter",
      });
    case 3:
      return S.Array(__S(2));
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
        /*@__PURE__*/ S.Struct({ range: __S(5) }),
        /*@__PURE__*/ S.Struct({ prefix: S.String }),
        /*@__PURE__*/ S.Struct({ suffix: S.String }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          invert: S.optional(S.Boolean),
          match: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "HttpGatewayRouteHeader" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(S.String),
          path: S.optional(__S(0)),
          queryParameters: S.optional(__S(3)),
          method: S.optional(S.String),
          hostname: S.optional(__S(4)),
          headers: S.optional(__S(8)),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HttpGatewayRouteMatch" });
    case 2:
      return S.suspend(() => S.Struct({ virtualServiceName: S.String })).annotate({
        identifier: "GatewayRouteVirtualService",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ virtualService: __S(10), port: S.optional(S.Number) }),
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
          prefix: S.optional(__S(12)),
          path: S.optional(__S(13)),
          hostname: S.optional(__S(14)),
        }),
      ).annotate({ identifier: "HttpGatewayRouteRewrite" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ target: __S(11), rewrite: S.optional(__S(15)) })).annotate({
        identifier: "HttpGatewayRouteAction",
      });
    case 1:
      return S.suspend(() => S.Struct({ match: __S(9), action: __S(16) })).annotate({
        identifier: "HttpGatewayRoute",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          invert: S.optional(S.Boolean),
          match: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "GrpcGatewayRouteMetadata" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceName: S.optional(S.String),
          hostname: S.optional(__S(4)),
          metadata: S.optional(__S(19)),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GrpcGatewayRouteMatch" });
    case 5:
      return S.suspend(() => S.Struct({ hostname: S.optional(__S(14)) })).annotate({
        identifier: "GrpcGatewayRouteRewrite",
      });
    case 6:
      return S.suspend(() => S.Struct({ target: __S(11), rewrite: S.optional(__S(21)) })).annotate({
        identifier: "GrpcGatewayRouteAction",
      });
    case 7:
      return S.suspend(() => S.Struct({ match: __S(20), action: __S(22) })).annotate({
        identifier: "GrpcGatewayRoute",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          priority: S.optional(S.Number),
          httpRoute: S.optional(__S(17)),
          http2Route: S.optional(__S(17)),
          grpcRoute: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "GatewayRouteSpec" });
    case 1:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "TagRef",
      });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          gatewayRouteName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualGatewayName: S.String.pipe(T.HttpLabel("virtualGatewayName")),
          spec: __S(24),
          tags: S.optional(__S(26)),
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
          spec: __S(24),
          metadata: __S(28),
          status: __S(29),
        }),
      ).annotate({ identifier: "GatewayRouteData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          gatewayRoute: __S(30).pipe(T.HttpPayload()).annotate({
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
          egressFilter: S.optional(__S(32)),
          serviceDiscovery: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "MeshSpec" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          meshName: S.String,
          spec: S.optional(__S(34)),
          tags: S.optional(__S(26)),
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
          spec: __S(34),
          metadata: __S(28),
          status: __S(36),
        }),
      ).annotate({ identifier: "MeshData" });
    case 6:
      return S.suspend(() =>
        S.Struct({ mesh: __S(37).pipe(T.HttpPayload()).annotate({ identifier: "MeshData" }) }),
      ).annotate({ identifier: "CreateMeshOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(S.String),
          path: S.optional(__S(0)),
          queryParameters: S.optional(__S(3)),
          method: S.optional(S.String),
          scheme: S.optional(S.String),
          headers: S.optional(__S(8)),
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
      return S.Array(__S(40));
    case 2:
      return S.suspend(() => S.Struct({ weightedTargets: __S(41) })).annotate({
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
          perRetryTimeout: __S(43),
          maxRetries: S.Number,
          httpRetryEvents: S.optional(__S(44)),
          tcpRetryEvents: S.optional(__S(44)),
        }),
      ).annotate({ identifier: "HttpRetryPolicy" });
    case 6:
      return S.suspend(() =>
        S.Struct({ perRequest: S.optional(__S(43)), idle: S.optional(__S(43)) }),
      ).annotate({ identifier: "HttpTimeout" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          match: __S(39),
          action: __S(42),
          retryPolicy: S.optional(__S(45)),
          timeout: S.optional(__S(46)),
        }),
      ).annotate({ identifier: "HttpRoute" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ idle: S.optional(__S(43)) })).annotate({
        identifier: "TcpTimeout",
      });
    case 1:
      return S.suspend(() => S.Struct({ port: S.optional(S.Number) })).annotate({
        identifier: "TcpRouteMatch",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          action: __S(42),
          timeout: S.optional(__S(48)),
          match: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "TcpRoute" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceName: S.optional(S.String),
          methodName: S.optional(S.String),
          metadata: S.optional(__S(19)),
          port: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GrpcRouteMatch" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          perRetryTimeout: __S(43),
          maxRetries: S.Number,
          httpRetryEvents: S.optional(__S(44)),
          tcpRetryEvents: S.optional(__S(44)),
          grpcRetryEvents: S.optional(__S(44)),
        }),
      ).annotate({ identifier: "GrpcRetryPolicy" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          action: __S(42),
          match: __S(51),
          retryPolicy: S.optional(__S(52)),
          timeout: S.optional(__S(46)),
        }),
      ).annotate({ identifier: "GrpcRoute" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          priority: S.optional(S.Number),
          httpRoute: S.optional(__S(47)),
          tcpRoute: S.optional(__S(50)),
          http2Route: S.optional(__S(47)),
          grpcRoute: S.optional(__S(53)),
        }),
      ).annotate({ identifier: "RouteSpec" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          routeName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          virtualRouterName: S.String.pipe(T.HttpLabel("virtualRouterName")),
          spec: __S(54),
          tags: S.optional(__S(26)),
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
          spec: __S(54),
          metadata: __S(28),
          status: __S(56),
        }),
      ).annotate({ identifier: "RouteData" });
    case 2:
      return S.suspend(() =>
        S.Struct({ route: __S(57).pipe(T.HttpPayload()).annotate({ identifier: "RouteData" }) }),
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
        /*@__PURE__*/ S.Struct({ file: __S(60) }),
        /*@__PURE__*/ S.Struct({ sds: __S(61) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ certificateAuthorityArns: __S(44) })).annotate({
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
        /*@__PURE__*/ S.Struct({ acm: __S(63) }),
        /*@__PURE__*/ S.Struct({ file: __S(64) }),
        /*@__PURE__*/ S.Struct({ sds: __S(61) }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ exact: __S(44) })).annotate({
        identifier: "SubjectAlternativeNameMatchers",
      });
    case 3:
      return S.suspend(() => S.Struct({ match: __S(66) })).annotate({
        identifier: "SubjectAlternativeNames",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          trust: __S(65),
          subjectAlternativeNames: S.optional(__S(67)),
        }),
      ).annotate({
        identifier: "VirtualGatewayTlsValidationContext",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          enforce: S.optional(S.Boolean),
          ports: S.optional(__S(59)),
          certificate: S.optional(__S(62)),
          validation: __S(68),
        }),
      ).annotate({
        identifier: "VirtualGatewayClientPolicyTls",
      });
    case 6:
      return S.suspend(() => S.Struct({ tls: S.optional(__S(69)) })).annotate({
        identifier: "VirtualGatewayClientPolicy",
      });
    case 7:
      return S.suspend(() => S.Struct({ clientPolicy: S.optional(__S(70)) })).annotate({
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
        /*@__PURE__*/ S.Struct({ file: __S(64) }),
        /*@__PURE__*/ S.Struct({ sds: __S(61) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          trust: __S(74),
          subjectAlternativeNames: S.optional(__S(67)),
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
        /*@__PURE__*/ S.Struct({ acm: __S(76) }),
        /*@__PURE__*/ S.Struct({ file: __S(60) }),
        /*@__PURE__*/ S.Struct({ sds: __S(61) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          mode: S.String,
          validation: S.optional(__S(75)),
          certificate: __S(77),
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
        /*@__PURE__*/ S.Struct({ http: __S(79) }),
        /*@__PURE__*/ S.Struct({ http2: __S(80) }),
        /*@__PURE__*/ S.Struct({ grpc: __S(80) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          healthCheck: S.optional(__S(72)),
          portMapping: __S(73),
          tls: S.optional(__S(78)),
          connectionPool: S.optional(__S(81)),
        }),
      ).annotate({ identifier: "VirtualGatewayListener" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ json: __S(26) }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ path: S.String, format: S.optional(__S(84)) })).annotate({
        identifier: "VirtualGatewayFileAccessLog",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ file: __S(85) })]);
    case 7:
      return S.suspend(() => S.Struct({ accessLog: S.optional(__S(86)) })).annotate({
        identifier: "VirtualGatewayLogging",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          backendDefaults: S.optional(__S(71)),
          listeners: __S(83),
          logging: S.optional(__S(87)),
        }),
      ).annotate({ identifier: "VirtualGatewaySpec" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          virtualGatewayName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: __S(88),
          tags: S.optional(__S(26)),
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
          spec: __S(88),
          metadata: __S(28),
          status: __S(29),
        }),
      ).annotate({ identifier: "VirtualGatewayData" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualGateway: __S(90).pipe(T.HttpPayload()).annotate({
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
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          serviceName: S.String,
          attributes: S.optional(__S(94)),
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
        /*@__PURE__*/ S.Struct({ dns: __S(92) }),
        /*@__PURE__*/ S.Struct({ awsCloudMap: __S(95) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ port: S.Number, protocol: S.String })).annotate({
        identifier: "PortMapping",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          mode: S.String,
          certificate: __S(77),
          validation: S.optional(__S(75)),
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
        /*@__PURE__*/ S.Struct({ tcp: __S(48) }),
        /*@__PURE__*/ S.Struct({ http: __S(46) }),
        /*@__PURE__*/ S.Struct({ http2: __S(46) }),
        /*@__PURE__*/ S.Struct({ grpc: __S(46) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxServerErrors: S.Number,
          interval: __S(43),
          baseEjectionDuration: __S(43),
          maxEjectionPercent: S.Number,
        }),
      ).annotate({ identifier: "OutlierDetection" });
    case 6:
      return S.suspend(() => S.Struct({ maxConnections: S.Number })).annotate({
        identifier: "VirtualNodeTcpConnectionPool",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tcp: __S(102) }),
        /*@__PURE__*/ S.Struct({ http: __S(79) }),
        /*@__PURE__*/ S.Struct({ http2: __S(80) }),
        /*@__PURE__*/ S.Struct({ grpc: __S(80) }),
      ]);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portMapping: __S(97),
          tls: S.optional(__S(98)),
          healthCheck: S.optional(__S(99)),
          timeout: S.optional(__S(100)),
          outlierDetection: S.optional(__S(101)),
          connectionPool: S.optional(__S(103)),
        }),
      ).annotate({ identifier: "Listener" });
    case 1:
      return S.Array(__S(104));
    case 2:
      return S.suspend(() =>
        S.Struct({
          trust: __S(65),
          subjectAlternativeNames: S.optional(__S(67)),
        }),
      ).annotate({ identifier: "TlsValidationContext" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enforce: S.optional(S.Boolean),
          ports: S.optional(__S(59)),
          certificate: S.optional(__S(62)),
          validation: __S(106),
        }),
      ).annotate({ identifier: "ClientPolicyTls" });
    case 4:
      return S.suspend(() => S.Struct({ tls: S.optional(__S(107)) })).annotate({
        identifier: "ClientPolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ virtualServiceName: S.String, clientPolicy: S.optional(__S(108)) }),
      ).annotate({ identifier: "VirtualServiceBackend" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ virtualService: __S(109) })]);
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ clientPolicy: S.optional(__S(108)) })).annotate({
        identifier: "BackendDefaults",
      });
    case 1:
      return S.suspend(() => S.Struct({ path: S.String, format: S.optional(__S(84)) })).annotate({
        identifier: "FileAccessLog",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ file: __S(113) })]);
    case 3:
      return S.suspend(() => S.Struct({ accessLog: S.optional(__S(114)) })).annotate({
        identifier: "Logging",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          serviceDiscovery: S.optional(__S(96)),
          listeners: S.optional(__S(105)),
          backends: S.optional(__S(111)),
          backendDefaults: S.optional(__S(112)),
          logging: S.optional(__S(115)),
        }),
      ).annotate({ identifier: "VirtualNodeSpec" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          virtualNodeName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: __S(116),
          tags: S.optional(__S(26)),
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
          spec: __S(116),
          metadata: __S(28),
          status: __S(29),
        }),
      ).annotate({ identifier: "VirtualNodeData" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          virtualNode: __S(118).pipe(T.HttpPayload()).annotate({
            identifier: "VirtualNodeData",
          }),
        }),
      ).annotate({ identifier: "CreateVirtualNodeOutput" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ portMapping: __S(97) })).annotate({
        identifier: "VirtualRouterListener",
      });
    case 1:
      return S.Array(__S(120));
    case 2:
      return S.suspend(() => S.Struct({ listeners: S.optional(__S(121)) })).annotate({
        identifier: "VirtualRouterSpec",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          virtualRouterName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: __S(122),
          tags: S.optional(__S(26)),
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
          spec: __S(122),
          metadata: __S(28),
          status: __S(29),
        }),
      ).annotate({ identifier: "VirtualRouterData" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          virtualRouter: __S(124).pipe(T.HttpPayload()).annotate({
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
        /*@__PURE__*/ S.Struct({ virtualNode: __S(126) }),
        /*@__PURE__*/ S.Struct({ virtualRouter: __S(127) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ provider: S.optional(__S(128)) })).annotate({
        identifier: "VirtualServiceSpec",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          virtualServiceName: S.String,
          meshName: S.String.pipe(T.HttpLabel("meshName")),
          spec: __S(129),
          tags: S.optional(__S(26)),
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
          spec: __S(129),
          metadata: __S(28),
          status: __S(29),
        }),
      ).annotate({ identifier: "VirtualServiceData" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          virtualService: __S(131).pipe(T.HttpPayload()).annotate({
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
          gatewayRoute: __S(30).pipe(T.HttpPayload()).annotate({
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
          virtualNode: __S(118).pipe(T.HttpPayload()).annotate({
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
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ gatewayRoutes: __S(151), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(154));
    case 4:
      return S.suspend(() =>
        S.Struct({ meshes: __S(155), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(158));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ routes: __S(159), nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: __S(26), nextToken: S.optional(S.String) })).annotate(
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
      return S.Array(__S(164));
    case 6:
      return S.suspend(() =>
        S.Struct({ virtualGateways: __S(165), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(168));
    case 2:
      return S.suspend(() =>
        S.Struct({ virtualNodes: __S(169), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(172));
    case 6:
      return S.suspend(() =>
        S.Struct({ virtualRouters: __S(173), nextToken: S.optional(S.String) }),
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
      return S.Array(__S(176));
    case 2:
      return S.suspend(() =>
        S.Struct({ virtualServices: __S(177), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListVirtualServicesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpQuery("resourceArn")), tags: __S(26) }).pipe(
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
          tagKeys: __S(44),
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
          spec: __S(24),
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
          spec: S.optional(__S(34)),
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
          spec: __S(54),
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
          spec: __S(88),
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
          spec: __S(116),
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
          spec: __S(122),
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
          spec: __S(129),
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

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
  }
}
