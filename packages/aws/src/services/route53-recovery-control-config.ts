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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Route53 Recovery Control Config",
  serviceShapeName: "Route53RecoveryControlConfig",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "route53-recovery-control-config" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-11-02");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-west-2" }] });
  const _p1 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://route53-recovery-control-config.us-west-2.amazonaws.com", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://arc-recovery-control-config.us-west-2.api.aws", _p0(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://route53-recovery-control-config-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://route53-recovery-control-config-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://route53-recovery-control-config.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p1(PartitionResult),
              {},
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://route53-recovery-control-config.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          _p1(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type __stringMin1Max64PatternS = string;
export type __stringMin0Max256PatternS = string;
export type __mapOf__stringMin0Max256PatternS = { [key: string]: string | undefined };
const __mapOf__stringMin0Max256PatternS = /*@__PURE__*/ __L.at(__c0, 0);
export type NetworkType = "IPV4" | "DUALSTACK" | (string & {});
export interface CreateClusterRequest {
  ClientToken?: string;
  ClusterName?: string;
  Tags?: { [key: string]: string | undefined };
  NetworkType?: NetworkType;
}
export type __stringMin1Max256PatternAZaZ09 = string;
export type __stringMin1Max128PatternAZaZ09 = string;
export type __stringMin1Max32PatternS = string;
export interface ClusterEndpoint {
  Endpoint?: string;
  Region?: string;
}
export type __listOfClusterEndpoint = ClusterEndpoint[];
const __listOfClusterEndpoint = /*@__PURE__*/ __L.at(__c0, 3);
export type Status = "PENDING" | "DEPLOYED" | "PENDING_DELETION" | (string & {});
export type __stringMin12Max12PatternD12 = string;
export interface Cluster {
  ClusterArn?: string;
  ClusterEndpoints?: ClusterEndpoint[];
  Name?: string;
  Status?: Status;
  Owner?: string;
  NetworkType?: NetworkType;
}
export interface CreateClusterResponse {
  Cluster?: Cluster;
}
export interface CreateControlPanelRequest {
  ClientToken?: string;
  ClusterArn?: string;
  ControlPanelName?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface ControlPanel {
  ClusterArn?: string;
  ControlPanelArn?: string;
  DefaultControlPanel?: boolean;
  Name?: string;
  RoutingControlCount?: number;
  Status?: Status;
  Owner?: string;
}
export interface CreateControlPanelResponse {
  ControlPanel?: ControlPanel;
}
export interface CreateRoutingControlRequest {
  ClientToken?: string;
  ClusterArn?: string;
  ControlPanelArn?: string;
  RoutingControlName?: string;
}
export interface RoutingControl {
  ControlPanelArn?: string;
  Name?: string;
  RoutingControlArn?: string;
  Status?: Status;
  Owner?: string;
}
export interface CreateRoutingControlResponse {
  RoutingControl?: RoutingControl;
}
export type __listOf__stringMin1Max256PatternAZaZ09 = string[];
const __listOf__stringMin1Max256PatternAZaZ09 = /*@__PURE__*/ __L.at(__c1, 4);
export type RuleType = "ATLEAST" | "AND" | "OR" | (string & {});
export interface RuleConfig {
  Inverted?: boolean;
  Threshold?: number;
  Type?: RuleType;
}
export interface NewAssertionRule {
  AssertedControls?: string[];
  ControlPanelArn?: string;
  Name?: string;
  RuleConfig?: RuleConfig;
  WaitPeriodMs?: number;
}
export interface NewGatingRule {
  ControlPanelArn?: string;
  GatingControls?: string[];
  Name?: string;
  RuleConfig?: RuleConfig;
  TargetControls?: string[];
  WaitPeriodMs?: number;
}
export interface CreateSafetyRuleRequest {
  AssertionRule?: NewAssertionRule;
  ClientToken?: string;
  GatingRule?: NewGatingRule;
  Tags?: { [key: string]: string | undefined };
}
export interface AssertionRule {
  AssertedControls?: string[];
  ControlPanelArn?: string;
  Name?: string;
  RuleConfig?: RuleConfig;
  SafetyRuleArn?: string;
  Status?: Status;
  WaitPeriodMs?: number;
  Owner?: string;
}
export interface GatingRule {
  ControlPanelArn?: string;
  GatingControls?: string[];
  Name?: string;
  RuleConfig?: RuleConfig;
  SafetyRuleArn?: string;
  Status?: Status;
  TargetControls?: string[];
  WaitPeriodMs?: number;
  Owner?: string;
}
export interface CreateSafetyRuleResponse {
  AssertionRule?: AssertionRule & {
    AssertedControls: __listOf__stringMin1Max256PatternAZaZ09;
    ControlPanelArn: __stringMin1Max256PatternAZaZ09;
    Name: __stringMin1Max64PatternS;
    RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
    SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
    Status: Status;
    WaitPeriodMs: number;
  };
  GatingRule?: GatingRule & {
    ControlPanelArn: __stringMin1Max256PatternAZaZ09;
    GatingControls: __listOf__stringMin1Max256PatternAZaZ09;
    Name: __stringMin1Max64PatternS;
    RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
    SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
    Status: Status;
    TargetControls: __listOf__stringMin1Max256PatternAZaZ09;
    WaitPeriodMs: number;
  };
}
export interface DeleteClusterRequest {
  ClusterArn: string;
}
export interface DeleteClusterResponse {}
export interface DeleteControlPanelRequest {
  ControlPanelArn: string;
}
export interface DeleteControlPanelResponse {}
export interface DeleteRoutingControlRequest {
  RoutingControlArn: string;
}
export interface DeleteRoutingControlResponse {}
export interface DeleteSafetyRuleRequest {
  SafetyRuleArn: string;
}
export interface DeleteSafetyRuleResponse {}
export interface DescribeClusterRequest {
  ClusterArn: string;
}
export interface DescribeClusterResponse {
  Cluster?: Cluster;
}
export interface DescribeControlPanelRequest {
  ControlPanelArn: string;
}
export interface DescribeControlPanelResponse {
  ControlPanel?: ControlPanel;
}
export interface DescribeRoutingControlRequest {
  RoutingControlArn: string;
}
export interface DescribeRoutingControlResponse {
  RoutingControl?: RoutingControl;
}
export interface DescribeSafetyRuleRequest {
  SafetyRuleArn: string;
}
export interface DescribeSafetyRuleResponse {
  AssertionRule?: AssertionRule & {
    AssertedControls: __listOf__stringMin1Max256PatternAZaZ09;
    ControlPanelArn: __stringMin1Max256PatternAZaZ09;
    Name: __stringMin1Max64PatternS;
    RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
    SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
    Status: Status;
    WaitPeriodMs: number;
  };
  GatingRule?: GatingRule & {
    ControlPanelArn: __stringMin1Max256PatternAZaZ09;
    GatingControls: __listOf__stringMin1Max256PatternAZaZ09;
    Name: __stringMin1Max64PatternS;
    RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
    SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
    Status: Status;
    TargetControls: __listOf__stringMin1Max256PatternAZaZ09;
    WaitPeriodMs: number;
  };
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export type __policy = string;
export interface GetResourcePolicyResponse {
  Policy?: string;
}
export type MaxResults = number;
export interface ListAssociatedRoute53HealthChecksRequest {
  MaxResults?: number;
  NextToken?: string;
  RoutingControlArn: string;
}
export type __stringMax36PatternS = string;
export type __listOf__stringMax36PatternS = string[];
const __listOf__stringMax36PatternS =
  __listOf__stringMin1Max256PatternAZaZ09 as any as S.Schema<__listOf__stringMax36PatternS>;
export type __stringMin1Max8096PatternS = string;
export interface ListAssociatedRoute53HealthChecksResponse {
  HealthCheckIds?: string[];
  NextToken?: string;
}
export interface ListClustersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type __listOfCluster = Cluster[];
const __listOfCluster = /*@__PURE__*/ __L.at(__c4, 3);
export interface ListClustersResponse {
  Clusters?: Cluster[];
  NextToken?: string;
}
export interface ListControlPanelsRequest {
  ClusterArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type __listOfControlPanel = ControlPanel[];
const __listOfControlPanel = /*@__PURE__*/ __L.at(__c4, 6);
export interface ListControlPanelsResponse {
  ControlPanels?: ControlPanel[];
  NextToken?: string;
}
export interface ListRoutingControlsRequest {
  ControlPanelArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export type __listOfRoutingControl = RoutingControl[];
const __listOfRoutingControl = /*@__PURE__*/ __L.at(__c5, 1);
export interface ListRoutingControlsResponse {
  NextToken?: string;
  RoutingControls?: RoutingControl[];
}
export interface ListSafetyRulesRequest {
  ControlPanelArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface Rule {
  ASSERTION?: AssertionRule;
  GATING?: GatingRule;
}
export type __listOfRule = Rule[];
const __listOfRule = /*@__PURE__*/ __L.at(__c5, 5);
export interface ListSafetyRulesResponse {
  NextToken?: string;
  SafetyRules?: (Rule & {
    ASSERTION: AssertionRule & {
      AssertedControls: __listOf__stringMin1Max256PatternAZaZ09;
      ControlPanelArn: __stringMin1Max256PatternAZaZ09;
      Name: __stringMin1Max64PatternS;
      RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
      SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
      Status: Status;
      WaitPeriodMs: number;
    };
    GATING: GatingRule & {
      ControlPanelArn: __stringMin1Max256PatternAZaZ09;
      GatingControls: __listOf__stringMin1Max256PatternAZaZ09;
      Name: __stringMin1Max64PatternS;
      RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
      SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
      Status: Status;
      TargetControls: __listOf__stringMin1Max256PatternAZaZ09;
      WaitPeriodMs: number;
    };
  })[];
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type __listOf__string = string[];
const __listOf__string =
  __listOf__stringMin1Max256PatternAZaZ09 as any as S.Schema<__listOf__string>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface UpdateClusterRequest {
  ClusterArn?: string;
  NetworkType?: NetworkType;
}
export interface UpdateClusterResponse {
  Cluster?: Cluster;
}
export interface UpdateControlPanelRequest {
  ControlPanelArn?: string;
  ControlPanelName?: string;
}
export interface UpdateControlPanelResponse {
  ControlPanel?: ControlPanel;
}
export interface UpdateRoutingControlRequest {
  RoutingControlArn?: string;
  RoutingControlName?: string;
}
export interface UpdateRoutingControlResponse {
  RoutingControl?: RoutingControl;
}
export interface AssertionRuleUpdate {
  Name?: string;
  SafetyRuleArn?: string;
  WaitPeriodMs?: number;
}
export interface GatingRuleUpdate {
  Name?: string;
  SafetyRuleArn?: string;
  WaitPeriodMs?: number;
}
export interface UpdateSafetyRuleRequest {
  AssertionRuleUpdate?: AssertionRuleUpdate;
  GatingRuleUpdate?: GatingRuleUpdate;
}
export interface UpdateSafetyRuleResponse {
  AssertionRule?: AssertionRule & {
    AssertedControls: __listOf__stringMin1Max256PatternAZaZ09;
    ControlPanelArn: __stringMin1Max256PatternAZaZ09;
    Name: __stringMin1Max64PatternS;
    RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
    SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
    Status: Status;
    WaitPeriodMs: number;
  };
  GatingRule?: GatingRule & {
    ControlPanelArn: __stringMin1Max256PatternAZaZ09;
    GatingControls: __listOf__stringMin1Max256PatternAZaZ09;
    Name: __stringMin1Max64PatternS;
    RuleConfig: RuleConfig & { Inverted: boolean; Threshold: number; Type: RuleType };
    SafetyRuleArn: __stringMin1Max256PatternAZaZ09;
    Status: Status;
    TargetControls: __listOf__stringMin1Max256PatternAZaZ09;
    WaitPeriodMs: number;
  };
}
export type CreateClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
 */
export const createCluster: API.OperationMethod<
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<CreateClusterRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<CreateClusterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCluster",
}));

export type CreateControlPanelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
 */
export const createControlPanel: API.OperationMethod<
  CreateControlPanelRequest,
  CreateControlPanelResponse,
  CreateControlPanelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<CreateControlPanelRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<CreateControlPanelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateControlPanel",
}));

export type CreateRoutingControlError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new routing control.
 *
 * A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.
 *
 * To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
 */
export const createRoutingControl: API.OperationMethod<
  CreateRoutingControlRequest,
  CreateRoutingControlResponse,
  CreateRoutingControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CreateRoutingControlRequest>,
  output: __S(11, __c1, 3) as any as S.Schema<CreateRoutingControlResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRoutingControl",
}));

export type CreateSafetyRuleError = InternalServerException | ValidationException | CommonErrors;
/**
 * Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.
 *
 * There are two types of safety rules: assertion rules and gating rules.
 *
 * Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
 *
 * Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.
 *
 * For more information, see Safety rules in the Amazon Route 53 Application Recovery Controller Developer Guide.
 */
export const createSafetyRule: API.OperationMethod<
  CreateSafetyRuleRequest,
  CreateSafetyRuleResponse,
  CreateSafetyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<CreateSafetyRuleRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<CreateSafetyRuleResponse>,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSafetyRule",
}));

export type DeleteClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a cluster.
 */
export const deleteCluster: API.OperationMethod<
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<DeleteClusterRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<DeleteClusterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCluster",
}));

export type DeleteControlPanelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a control panel.
 */
export const deleteControlPanel: API.OperationMethod<
  DeleteControlPanelRequest,
  DeleteControlPanelResponse,
  DeleteControlPanelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<DeleteControlPanelRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<DeleteControlPanelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteControlPanel",
}));

export type DeleteRoutingControlError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a routing control.
 */
export const deleteRoutingControl: API.OperationMethod<
  DeleteRoutingControlRequest,
  DeleteRoutingControlResponse,
  DeleteRoutingControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<DeleteRoutingControlRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<DeleteRoutingControlResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRoutingControl",
}));

export type DeleteSafetyRuleError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a safety rule.
 * />
 */
export const deleteSafetyRule: API.OperationMethod<
  DeleteSafetyRuleRequest,
  DeleteSafetyRuleResponse,
  DeleteSafetyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<DeleteSafetyRuleRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<DeleteSafetyRuleResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSafetyRule",
}));

export type DescribeClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
 */
export const describeCluster: API.OperationMethod<
  DescribeClusterRequest,
  DescribeClusterResponse,
  DescribeClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25, __c3, 1) as any as S.Schema<DescribeClusterRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<DescribeClusterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCluster",
}));

export type DescribeControlPanelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Displays details about a control panel.
 */
export const describeControlPanel: API.OperationMethod<
  DescribeControlPanelRequest,
  DescribeControlPanelResponse,
  DescribeControlPanelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<DescribeControlPanelRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<DescribeControlPanelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeControlPanel",
}));

export type DescribeRoutingControlError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
 *
 * To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
 */
export const describeRoutingControl: API.OperationMethod<
  DescribeRoutingControlRequest,
  DescribeRoutingControlResponse,
  DescribeRoutingControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<DescribeRoutingControlRequest>,
  output: __S(11, __c1, 3) as any as S.Schema<DescribeRoutingControlResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRoutingControl",
}));

export type DescribeSafetyRuleError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a safety rule.
 */
export const describeSafetyRule: API.OperationMethod<
  DescribeSafetyRuleRequest,
  DescribeSafetyRuleResponse,
  DescribeSafetyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<DescribeSafetyRuleRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<DescribeSafetyRuleResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSafetyRule",
}));

export type GetResourcePolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Get information about the resource policy for a cluster.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type ListAssociatedRoute53HealthChecksError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
 */
export const listAssociatedRoute53HealthChecks: API.PaginatedOperationMethod<
  ListAssociatedRoute53HealthChecksRequest,
  ListAssociatedRoute53HealthChecksResponse,
  ListAssociatedRoute53HealthChecksError,
  Credentials | HttpClient.HttpClient,
  __stringMax36PatternS
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<ListAssociatedRoute53HealthChecksRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<ListAssociatedRoute53HealthChecksResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociatedRoute53HealthChecks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "HealthCheckIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListClustersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array of all the clusters in an account.
 */
export const listClusters: API.PaginatedOperationMethod<
  ListClustersRequest,
  ListClustersResponse,
  ListClustersError,
  Credentials | HttpClient.HttpClient,
  Cluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<ListClustersRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<ListClustersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListClusters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Clusters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListControlPanelsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array of control panels in an account or in a cluster.
 */
export const listControlPanels: API.PaginatedOperationMethod<
  ListControlPanelsRequest,
  ListControlPanelsResponse,
  ListControlPanelsError,
  Credentials | HttpClient.HttpClient,
  ControlPanel
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<ListControlPanelsRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<ListControlPanelsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControlPanels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ControlPanels",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRoutingControlsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
 */
export const listRoutingControls: API.PaginatedOperationMethod<
  ListRoutingControlsRequest,
  ListRoutingControlsResponse,
  ListRoutingControlsError,
  Credentials | HttpClient.HttpClient,
  RoutingControl
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<ListRoutingControlsRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<ListRoutingControlsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRoutingControls",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RoutingControls",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSafetyRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
 */
export const listSafetyRules: API.PaginatedOperationMethod<
  ListSafetyRulesRequest,
  ListSafetyRulesResponse,
  ListSafetyRulesError,
  Credentials | HttpClient.HttpClient,
  Rule
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<ListSafetyRulesRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<ListSafetyRulesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSafetyRules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SafetyRules",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds a tag to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing cluster. You can only update the network type of a cluster.
 */
export const updateCluster: API.OperationMethod<
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<UpdateClusterRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<UpdateClusterResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCluster",
}));

export type UpdateControlPanelError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
 */
export const updateControlPanel: API.OperationMethod<
  UpdateControlPanelRequest,
  UpdateControlPanelResponse,
  UpdateControlPanelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<UpdateControlPanelRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<UpdateControlPanelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateControlPanel",
}));

export type UpdateRoutingControlError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
 */
export const updateRoutingControl: API.OperationMethod<
  UpdateRoutingControlRequest,
  UpdateRoutingControlResponse,
  UpdateRoutingControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<UpdateRoutingControlRequest>,
  output: __S(11, __c1, 3) as any as S.Schema<UpdateRoutingControlResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRoutingControl",
}));

export type UpdateSafetyRuleError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.
 */
export const updateSafetyRule: API.OperationMethod<
  UpdateSafetyRuleRequest,
  UpdateSafetyRuleResponse,
  UpdateSafetyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<UpdateSafetyRuleRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<UpdateSafetyRuleResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSafetyRule",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ClusterName: S.optional(S.String),
          Tags: S.optional(__mapOf__stringMin0Max256PatternS),
          NetworkType: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/cluster" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateClusterRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Endpoint: S.optional(S.String), Region: S.optional(S.String) }),
      ).annotate({ identifier: "ClusterEndpoint" });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String),
          ClusterEndpoints: S.optional(__listOfClusterEndpoint),
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          Owner: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Cluster" });
    case 5:
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(4, __c0, 4)) })).annotate({
        identifier: "CreateClusterResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ClusterArn: S.optional(S.String),
          ControlPanelName: S.optional(S.String),
          Tags: S.optional(__mapOf__stringMin0Max256PatternS),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/controlpanel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateControlPanelRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String),
          ControlPanelArn: S.optional(S.String),
          DefaultControlPanel: S.optional(S.Boolean),
          Name: S.optional(S.String),
          RoutingControlCount: S.optional(S.Number),
          Status: S.optional(S.String),
          Owner: S.optional(S.String),
        }),
      ).annotate({ identifier: "ControlPanel" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ControlPanel: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "CreateControlPanelResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ClusterArn: S.optional(S.String),
          ControlPanelArn: S.optional(S.String),
          RoutingControlName: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/routingcontrol" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateRoutingControlRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ControlPanelArn: S.optional(S.String),
          Name: S.optional(S.String),
          RoutingControlArn: S.optional(S.String),
          Status: S.optional(S.String),
          Owner: S.optional(S.String),
        }),
      ).annotate({ identifier: "RoutingControl" });
    case 3:
      return S.suspend(() => S.Struct({ RoutingControl: S.optional(__S(10, __c1, 2)) })).annotate({
        identifier: "CreateRoutingControlResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Inverted: S.optional(S.Boolean),
          Threshold: S.optional(S.Number),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssertedControls: S.optional(__listOf__stringMin1Max256PatternAZaZ09),
          ControlPanelArn: S.optional(S.String),
          Name: S.optional(S.String),
          RuleConfig: S.optional(__S(13, __c1, 5)),
          WaitPeriodMs: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NewAssertionRule" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ControlPanelArn: S.optional(S.String),
          GatingControls: S.optional(__listOf__stringMin1Max256PatternAZaZ09),
          Name: S.optional(S.String),
          RuleConfig: S.optional(__S(13, __c1, 5)),
          TargetControls: S.optional(__listOf__stringMin1Max256PatternAZaZ09),
          WaitPeriodMs: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NewGatingRule" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AssertionRule: S.optional(__S(14, __c1, 6)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          GatingRule: S.optional(__S(15, __c1, 7)),
          Tags: S.optional(__mapOf__stringMin0Max256PatternS),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/safetyrule" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateSafetyRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AssertedControls: S.optional(__listOf__stringMin1Max256PatternAZaZ09),
          ControlPanelArn: S.optional(S.String),
          Name: S.optional(S.String),
          RuleConfig: S.optional(__S(13, __c1, 5)),
          SafetyRuleArn: S.optional(S.String),
          Status: S.optional(S.String),
          WaitPeriodMs: S.optional(S.Number),
          Owner: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssertionRule" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ControlPanelArn: S.optional(S.String),
          GatingControls: S.optional(__listOf__stringMin1Max256PatternAZaZ09),
          Name: S.optional(S.String),
          RuleConfig: S.optional(__S(13, __c1, 5)),
          SafetyRuleArn: S.optional(S.String),
          Status: S.optional(S.String),
          TargetControls: S.optional(__listOf__stringMin1Max256PatternAZaZ09),
          WaitPeriodMs: S.optional(S.Number),
          Owner: S.optional(S.String),
        }),
      ).annotate({ identifier: "GatingRule" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssertionRule: S.optional(__S(17, __c2, 1)),
          GatingRule: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({ identifier: "CreateSafetyRuleResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ClusterArn: S.String.pipe(T.HttpLabel("ClusterArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/cluster/{ClusterArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteClusterRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteClusterResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ControlPanelArn: S.String.pipe(T.HttpLabel("ControlPanelArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/controlpanel/{ControlPanelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteControlPanelRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RoutingControlArn: S.String.pipe(T.HttpLabel("RoutingControlArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/routingcontrol/{RoutingControlArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRoutingControlRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SafetyRuleArn: S.String.pipe(T.HttpLabel("SafetyRuleArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/safetyrule/{SafetyRuleArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSafetyRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterArn: S.String.pipe(T.HttpLabel("ClusterArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/cluster/{ClusterArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeClusterRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ControlPanelArn: S.String.pipe(T.HttpLabel("ControlPanelArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/controlpanel/{ControlPanelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeControlPanelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RoutingControlArn: S.String.pipe(T.HttpLabel("RoutingControlArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/routingcontrol/{RoutingControlArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeRoutingControlRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SafetyRuleArn: S.String.pipe(T.HttpLabel("SafetyRuleArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/safetyrule/{SafetyRuleArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSafetyRuleRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssertionRule: S.optional(__S(17, __c2, 1)),
          GatingRule: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "DescribeSafetyRuleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resourcePolicy/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) })).annotate({
        identifier: "GetResourcePolicyResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          RoutingControlArn: S.String.pipe(T.HttpLabel("RoutingControlArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssociatedRoute53HealthChecksRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HealthCheckIds: S.optional(__listOf__stringMax36PatternS),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAssociatedRoute53HealthChecksResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/cluster" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListClustersRequest" });
    case 3:
      return S.Array(__S(4, __c0, 4));
    case 4:
      return S.suspend(() =>
        S.Struct({ Clusters: S.optional(__listOfCluster), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListClustersResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String).pipe(T.HttpQuery("ClusterArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/controlpanels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListControlPanelsRequest" });
    case 6:
      return S.Array(__S(7, __c0, 7));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ControlPanels: S.optional(__listOfControlPanel),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListControlPanelsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ControlPanelArn: S.String.pipe(T.HttpLabel("ControlPanelArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/controlpanel/{ControlPanelArn}/routingcontrols" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRoutingControlsRequest",
      });
    case 1:
      return S.Array(__S(10, __c1, 2));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          RoutingControls: S.optional(__listOfRoutingControl),
        }),
      ).annotate({
        identifier: "ListRoutingControlsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ControlPanelArn: S.String.pipe(T.HttpLabel("ControlPanelArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/controlpanel/{ControlPanelArn}/safetyrules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSafetyRulesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ASSERTION: S.optional(__S(17, __c2, 1)), GATING: S.optional(__S(18, __c2, 2)) }),
      ).annotate({ identifier: "Rule" });
    case 5:
      return S.Array(__S(44, __c5, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), SafetyRules: S.optional(__listOfRule) }),
      ).annotate({ identifier: "ListSafetyRulesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__mapOf__stringMin0Max256PatternS) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: S.optional(__mapOf__stringMin0Max256PatternS),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(__listOf__string).pipe(T.HttpQuery("TagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClusterArn: S.optional(S.String), NetworkType: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/cluster" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateClusterRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ControlPanelArn: S.optional(S.String),
          ControlPanelName: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/controlpanel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateControlPanelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RoutingControlArn: S.optional(S.String),
          RoutingControlName: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/routingcontrol" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateRoutingControlRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SafetyRuleArn: S.optional(S.String),
          WaitPeriodMs: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AssertionRuleUpdate" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssertionRuleUpdate: S.optional(__S(54, __c6, 6)),
          GatingRuleUpdate: S.optional(__S(54, __c6, 6)),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/safetyrule" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSafetyRuleRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
