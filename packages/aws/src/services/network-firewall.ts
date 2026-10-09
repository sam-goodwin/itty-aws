import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Network Firewall",
  serviceShapeName: "NetworkFirewall_20201112",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "network-firewall" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-11-12");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://network-firewall-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://network-firewall-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://network-firewall.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://network-firewall.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InsufficientCapacityException
  extends /*@__PURE__*/ S.TaggedError<InsufficientCapacityException>()(
    "InsufficientCapacityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InternalServerError
  extends /*@__PURE__*/ S.TaggedError<InternalServerError>()("InternalServerError", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationException>()("InvalidOperationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()("InvalidRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidResourcePolicyException
  extends /*@__PURE__*/ S.TaggedError<InvalidResourcePolicyException>()(
    "InvalidResourcePolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidTokenException>()("InvalidTokenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LogDestinationPermissionException
  extends /*@__PURE__*/ S.TaggedError<LogDestinationPermissionException>()(
    "LogDestinationPermissionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ResourceOwnerCheckException
  extends /*@__PURE__*/ S.TaggedError<ResourceOwnerCheckException>()(
    "ResourceOwnerCheckException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export type TransitGatewayAttachmentId = string;
export interface AcceptNetworkFirewallTransitGatewayAttachmentRequest {
  TransitGatewayAttachmentId: string;
}
export type TransitGatewayAttachmentStatus =
  | "CREATING"
  | "DELETING"
  | "DELETED"
  | "FAILED"
  | "ERROR"
  | "READY"
  | "PENDING_ACCEPTANCE"
  | "REJECTING"
  | "REJECTED"
  | (string & {});
export interface AcceptNetworkFirewallTransitGatewayAttachmentResponse {
  TransitGatewayAttachmentId: string;
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus;
}
export type UpdateToken = string;
export type ResourceArn = string;
export type ResourceName = string;
export type AvailabilityZoneMappingString = string;
export interface AvailabilityZoneMapping {
  AvailabilityZone: string;
}
export type AvailabilityZoneMappings = AvailabilityZoneMapping[];
export interface AssociateAvailabilityZonesRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings: AvailabilityZoneMapping[];
}
export interface AssociateAvailabilityZonesResponse {
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings?: AvailabilityZoneMapping[];
  UpdateToken?: string;
}
export interface AssociateFirewallPolicyRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyArn: string;
}
export interface AssociateFirewallPolicyResponse {
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyArn?: string;
  UpdateToken?: string;
}
export type CollectionMember_String = string;
export type IPAddressType = "DUALSTACK" | "IPV4" | "IPV6" | (string & {});
export interface SubnetMapping {
  SubnetId: string;
  IPAddressType?: IPAddressType;
}
export type SubnetMappings = SubnetMapping[];
export interface AssociateSubnetsRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetMappings: SubnetMapping[];
}
export interface AssociateSubnetsResponse {
  FirewallArn?: string;
  FirewallName?: string;
  SubnetMappings?: SubnetMapping[];
  UpdateToken?: string;
}
export type InsertPosition = number;
export interface ProxyRuleGroupAttachment {
  ProxyRuleGroupName?: string;
  InsertPosition?: number;
}
export type ProxyRuleGroupAttachmentList = ProxyRuleGroupAttachment[];
export interface AttachRuleGroupsToProxyConfigurationRequest {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  RuleGroups: ProxyRuleGroupAttachment[];
  UpdateToken: string;
}
export type Description = string;
export type CreateTime = Date;
export type DeleteTime = Date;
export type ProxyConfigRuleGroupType = string;
export type ProxyConfigRuleGroupPriority = number;
export interface ProxyConfigRuleGroup {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
  Type?: string;
  Priority?: number;
}
export type ProxyConfigRuleGroupSet = ProxyConfigRuleGroup[];
export type ProxyRulePhaseAction = "ALLOW" | "DENY" | "ALERT" | (string & {});
export interface ProxyConfigDefaultRulePhaseActionsRequest {
  PreDNS?: ProxyRulePhaseAction;
  PreREQUEST?: ProxyRulePhaseAction;
  PostRESPONSE?: ProxyRulePhaseAction;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface ProxyConfiguration {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  Description?: string;
  CreateTime?: Date;
  DeleteTime?: Date;
  RuleGroups?: ProxyConfigRuleGroup[];
  DefaultRulePhaseActions?: ProxyConfigDefaultRulePhaseActionsRequest;
  Tags?: Tag[];
}
export interface AttachRuleGroupsToProxyConfigurationResponse {
  ProxyConfiguration?: ProxyConfiguration;
  UpdateToken?: string;
}
export type ContainerMonitoringType = "ECS" | "EKS" | (string & {});
export type ContainerAttributeKey = string;
export type ContainerAttributeValue = string;
export interface ContainerAttribute {
  Key: string;
  Value: string;
}
export type ContainerAttributes = ContainerAttribute[];
export interface ContainerMonitoringConfiguration {
  ClusterArn: string;
  AttributeFilters?: ContainerAttribute[];
}
export type ContainerMonitoringConfigurations = ContainerMonitoringConfiguration[];
export interface CreateContainerAssociationRequest {
  ContainerAssociationName: string;
  Description?: string;
  Type: ContainerMonitoringType;
  ContainerMonitoringConfigurations: ContainerMonitoringConfiguration[];
  Tags?: Tag[];
}
export type ContainerAssociationStatus =
  | "ACTIVE"
  | "CREATING"
  | "DELETING"
  | "UPDATING"
  | (string & {});
export interface CreateContainerAssociationResponse {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
  Description?: string;
  Type?: ContainerMonitoringType;
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[];
  Status?: ContainerAssociationStatus;
  Tags?: Tag[];
  UpdateToken?: string;
}
export type VpcId = string;
export type KeyId = string;
export type EncryptionType = "CUSTOMER_KMS" | "AWS_OWNED_KMS_KEY" | (string & {});
export interface EncryptionConfiguration {
  KeyId?: string;
  Type: EncryptionType;
}
export type EnabledAnalysisType = "TLS_SNI" | "HTTP_HOST" | (string & {});
export type EnabledAnalysisTypes = EnabledAnalysisType[];
export type TransitGatewayId = string;
export type NatGatewayId = string;
export interface NatGatewayMapping {
  NatGatewayId: string;
}
export type NatGatewayMappingsList = NatGatewayMapping[];
export type NatGatewayPort = number;
export type ListenerPropertyType = "HTTP" | "HTTPS" | (string & {});
export interface ListenerProperty {
  Port?: number;
  Type?: ListenerPropertyType;
}
export type ListenerProperties = ListenerProperty[];
export interface ProxySettings {
  ListenerProperties: ListenerProperty[];
}
export interface VpcEndpoint {
  VpcId: string;
  SubnetMappings: SubnetMapping[];
}
export interface CreateFirewallRequest {
  FirewallName: string;
  FirewallPolicyArn: string;
  VpcId?: string;
  SubnetMappings?: SubnetMapping[];
  DeleteProtection?: boolean;
  SubnetChangeProtection?: boolean;
  FirewallPolicyChangeProtection?: boolean;
  Description?: string;
  Tags?: Tag[];
  EncryptionConfiguration?: EncryptionConfiguration;
  EnabledAnalysisTypes?: EnabledAnalysisType[];
  TransitGatewayId?: string;
  AvailabilityZoneMappings?: AvailabilityZoneMapping[];
  AvailabilityZoneChangeProtection?: boolean;
  NatGatewayMappings?: NatGatewayMapping[];
  ProxySettings?: ProxySettings;
  NoSourcePreservation?: boolean;
  VpcEndpoint?: VpcEndpoint;
}
export type ResourceId = string;
export type NumberOfAssociations = number;
export type AWSAccountId = string;
export interface Firewall {
  FirewallName?: string;
  FirewallArn?: string;
  FirewallPolicyArn: string;
  VpcId: string;
  SubnetMappings: SubnetMapping[];
  DeleteProtection?: boolean;
  SubnetChangeProtection?: boolean;
  FirewallPolicyChangeProtection?: boolean;
  Description?: string;
  FirewallId: string;
  Tags?: Tag[];
  EncryptionConfiguration?: EncryptionConfiguration;
  NumberOfAssociations?: number;
  EnabledAnalysisTypes?: EnabledAnalysisType[];
  TransitGatewayId?: string;
  TransitGatewayOwnerAccountId?: string;
  AvailabilityZoneMappings?: AvailabilityZoneMapping[];
  AvailabilityZoneChangeProtection?: boolean;
  NatGatewayMappings?: NatGatewayMapping[];
  ProxySettings?: ProxySettings;
  NoSourcePreservation?: boolean;
  VpcEndpoint?: VpcEndpoint;
}
export type FirewallStatusValue = "PROVISIONING" | "DELETING" | "READY" | "FAILED" | (string & {});
export type ConfigurationSyncState = "PENDING" | "IN_SYNC" | "CAPACITY_CONSTRAINED" | (string & {});
export type AvailabilityZone = string;
export type AzSubnet = string;
export type EndpointId = string;
export type AttachmentStatus =
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "ERROR"
  | "SCALING"
  | "READY"
  | (string & {});
export type StatusMessage = string;
export type DnsName = string;
export interface Attachment {
  SubnetId?: string;
  EndpointId?: string;
  Status?: AttachmentStatus;
  StatusMessage?: string;
  DnsName?: string;
}
export type PerObjectSyncStatus =
  | "PENDING"
  | "IN_SYNC"
  | "CAPACITY_CONSTRAINED"
  | "NOT_SUBSCRIBED"
  | "DEPRECATED"
  | (string & {});
export interface PerObjectStatus {
  SyncStatus?: PerObjectSyncStatus;
  UpdateToken?: string;
}
export type SyncStateConfig = { [key: string]: PerObjectStatus | undefined };
export type NatGatewayAttachmentStatus =
  | "CREATING"
  | "READY"
  | "UPDATING"
  | "FAILED"
  | "DELETING"
  | (string & {});
export type StatusReason = string;
export interface NatGatewayAttachment {
  NatGatewayId: string;
  Status: NatGatewayAttachmentStatus;
  StatusMessage?: string;
  DnsName?: string;
}
export type NatGatewayAttachmentsList = NatGatewayAttachment[];
export interface SyncState {
  Attachment?: Attachment;
  Config?: { [key: string]: PerObjectStatus | undefined };
  NatGatewayAttachments?: NatGatewayAttachment[];
}
export type SyncStates = { [key: string]: SyncState | undefined };
export type CIDRCount = number;
export type IPSetArn = string;
export interface IPSetMetadata {
  ResolvedCIDRCount?: number;
}
export type IPSetMetadataMap = { [key: string]: IPSetMetadata | undefined };
export interface CIDRSummary {
  AvailableCIDRCount?: number;
  UtilizedCIDRCount?: number;
  IPSetReferences?: { [key: string]: IPSetMetadata | undefined };
}
export interface CapacityUsageSummary {
  CIDRs?: CIDRSummary;
}
export type AttachmentId = string;
export type TransitGatewayAttachmentSyncStateMessage = string;
export interface TransitGatewayAttachmentSyncState {
  AttachmentId?: string;
  TransitGatewayAttachmentStatus?: TransitGatewayAttachmentStatus;
  StatusMessage?: string;
}
export interface FirewallStatus {
  Status: FirewallStatusValue;
  ConfigurationSyncStateSummary: ConfigurationSyncState;
  SyncStates?: { [key: string]: SyncState | undefined };
  CapacityUsageSummary?: CapacityUsageSummary;
  TransitGatewayAttachmentSyncState?: TransitGatewayAttachmentSyncState;
}
export interface CreateFirewallResponse {
  Firewall?: Firewall;
  FirewallStatus?: FirewallStatus;
}
export type Priority = number;
export interface StatelessRuleGroupReference {
  ResourceArn: string;
  Priority: number;
}
export type StatelessRuleGroupReferences = StatelessRuleGroupReference[];
export type StatelessActions = string[];
export type ActionName = string;
export type DimensionValue = string;
export interface Dimension {
  Value: string;
}
export type Dimensions = Dimension[];
export interface PublishMetricAction {
  Dimensions: Dimension[];
}
export interface ActionDefinition {
  PublishMetricAction?: PublishMetricAction;
}
export interface CustomAction {
  ActionName: string;
  ActionDefinition: ActionDefinition;
}
export type CustomActions = CustomAction[];
export type OverrideAction = "DROP_TO_ALERT" | (string & {});
export interface StatefulRuleGroupOverride {
  Action?: OverrideAction;
}
export type DeepThreatInspection = boolean;
export interface StatefulRuleGroupReference {
  ResourceArn: string;
  Priority?: number;
  Override?: StatefulRuleGroupOverride;
  DeepThreatInspection?: boolean;
}
export type StatefulRuleGroupReferences = StatefulRuleGroupReference[];
export type StatefulActions = string[];
export type RuleOrder = "DEFAULT_ACTION_ORDER" | "STRICT_ORDER" | (string & {});
export type StreamExceptionPolicy = "DROP" | "CONTINUE" | "REJECT" | (string & {});
export type TcpIdleTimeoutRangeBound = number;
export interface FlowTimeouts {
  TcpIdleTimeoutSeconds?: number;
}
export interface StatefulEngineOptions {
  RuleOrder?: RuleOrder;
  StreamExceptionPolicy?: StreamExceptionPolicy;
  FlowTimeouts?: FlowTimeouts;
}
export type RuleVariableName = string;
export type VariableDefinition = string;
export type VariableDefinitionList = string[];
export interface IPSet {
  Definition: string[];
}
export type IPSets = { [key: string]: IPSet | undefined };
export interface PolicyVariables {
  RuleVariables?: { [key: string]: IPSet | undefined };
}
export type EnableTLSSessionHolding = boolean;
export interface FirewallPolicy {
  StatelessRuleGroupReferences?: StatelessRuleGroupReference[];
  StatelessDefaultActions: string[];
  StatelessFragmentDefaultActions: string[];
  StatelessCustomActions?: CustomAction[];
  StatefulRuleGroupReferences?: StatefulRuleGroupReference[];
  StatefulDefaultActions?: string[];
  StatefulEngineOptions?: StatefulEngineOptions;
  TLSInspectionConfigurationArn?: string;
  PolicyVariables?: PolicyVariables;
  EnableTLSSessionHolding?: boolean;
}
export interface CreateFirewallPolicyRequest {
  FirewallPolicyName: string;
  FirewallPolicy: FirewallPolicy;
  Description?: string;
  Tags?: Tag[];
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export type ResourceStatus = "ACTIVE" | "DELETING" | "ERROR" | (string & {});
export type RuleCapacity = number;
export type LastUpdateTime = Date;
export interface FirewallPolicyResponse {
  FirewallPolicyName: string;
  FirewallPolicyArn: string;
  FirewallPolicyId: string;
  Description?: string;
  FirewallPolicyStatus?: ResourceStatus;
  Tags?: Tag[];
  ConsumedStatelessRuleCapacity?: number;
  ConsumedStatefulRuleCapacity?: number;
  ConsumedStatefulDomainCapacity?: number;
  NumberOfAssociations?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
  LastModifiedTime?: Date;
}
export interface CreateFirewallPolicyResponse {
  UpdateToken: string;
  FirewallPolicyResponse: FirewallPolicyResponse;
}
export interface ListenerPropertyRequest {
  Port: number;
  Type: ListenerPropertyType;
}
export type ListenerPropertiesRequest = ListenerPropertyRequest[];
export type TlsInterceptMode = "ENABLED" | "DISABLED" | (string & {});
export interface TlsInterceptPropertiesRequest {
  PcaArn?: string;
  TlsInterceptMode?: TlsInterceptMode;
}
export interface CreateProxyRequest {
  ProxyName: string;
  NatGatewayId: string;
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  ListenerProperties?: ListenerPropertyRequest[];
  TlsInterceptProperties: TlsInterceptPropertiesRequest;
  Tags?: Tag[];
}
export type UpdateTime = Date;
export type FailureCode = string;
export type FailureMessage = string;
export type ProxyState =
  | "ATTACHING"
  | "ATTACHED"
  | "DETACHING"
  | "DETACHED"
  | "ATTACH_FAILED"
  | "DETACH_FAILED"
  | (string & {});
export type ProxyModifyState = "MODIFYING" | "COMPLETED" | "FAILED" | (string & {});
export interface TlsInterceptProperties {
  PcaArn?: string;
  TlsInterceptMode?: TlsInterceptMode;
}
export interface Proxy {
  CreateTime?: Date;
  DeleteTime?: Date;
  UpdateTime?: Date;
  FailureCode?: string;
  FailureMessage?: string;
  ProxyState?: ProxyState;
  ProxyModifyState?: ProxyModifyState;
  NatGatewayId?: string;
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  ProxyName?: string;
  ProxyArn?: string;
  ListenerProperties?: ListenerProperty[];
  TlsInterceptProperties?: TlsInterceptProperties;
  Tags?: Tag[];
}
export interface CreateProxyResponse {
  Proxy?: Proxy;
  UpdateToken?: string;
}
export type ResourceNameList = string[];
export type ResourceArnList = string[];
export interface CreateProxyConfigurationRequest {
  ProxyConfigurationName: string;
  Description?: string;
  RuleGroupNames?: string[];
  RuleGroupArns?: string[];
  DefaultRulePhaseActions: ProxyConfigDefaultRulePhaseActionsRequest;
  Tags?: Tag[];
}
export interface CreateProxyConfigurationResponse {
  ProxyConfiguration?: ProxyConfiguration;
  UpdateToken?: string;
}
export type ConditionOperator = string;
export type ConditionKey = string;
export type ProxyConditionValue = string;
export type ProxyConditionValueList = string[];
export interface ProxyRuleCondition {
  ConditionOperator?: string;
  ConditionKey?: string;
  ConditionValues?: string[];
}
export type ProxyRuleConditionList = ProxyRuleCondition[];
export interface ProxyRule {
  ProxyRuleName?: string;
  Description?: string;
  Action?: ProxyRulePhaseAction;
  Conditions?: ProxyRuleCondition[];
}
export type ProxyRuleList = ProxyRule[];
export interface ProxyRulesByRequestPhase {
  PreDNS?: ProxyRule[];
  PreREQUEST?: ProxyRule[];
  PostRESPONSE?: ProxyRule[];
}
export interface CreateProxyRuleGroupRequest {
  ProxyRuleGroupName: string;
  Description?: string;
  Rules?: ProxyRulesByRequestPhase;
  Tags?: Tag[];
}
export interface ProxyRuleGroup {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
  CreateTime?: Date;
  DeleteTime?: Date;
  Rules?: ProxyRulesByRequestPhase;
  Description?: string;
  Tags?: Tag[];
}
export interface CreateProxyRuleGroupResponse {
  ProxyRuleGroup?: ProxyRuleGroup;
  UpdateToken?: string;
}
export interface CreateProxyRule {
  ProxyRuleName?: string;
  Description?: string;
  Action?: ProxyRulePhaseAction;
  Conditions?: ProxyRuleCondition[];
  InsertPosition?: number;
}
export type CreateProxyRuleList = CreateProxyRule[];
export interface CreateProxyRulesByRequestPhase {
  PreDNS?: CreateProxyRule[];
  PreREQUEST?: CreateProxyRule[];
  PostRESPONSE?: CreateProxyRule[];
}
export interface CreateProxyRulesRequest {
  ProxyRuleGroupArn?: string;
  ProxyRuleGroupName?: string;
  Rules: CreateProxyRulesByRequestPhase;
}
export interface CreateProxyRulesResponse {
  ProxyRuleGroup?: ProxyRuleGroup;
  UpdateToken?: string;
}
export interface PortSet {
  Definition?: string[];
}
export type PortSets = { [key: string]: PortSet | undefined };
export interface RuleVariables {
  IPSets?: { [key: string]: IPSet | undefined };
  PortSets?: { [key: string]: PortSet | undefined };
}
export type IPSetReferenceName = string;
export interface IPSetReference {
  ReferenceArn?: string;
}
export type IPSetReferenceMap = { [key: string]: IPSetReference | undefined };
export interface ReferenceSets {
  IPSetReferences?: { [key: string]: IPSetReference | undefined };
}
export type RulesString = string;
export type RuleTargets = string[];
export type TargetType = "TLS_SNI" | "HTTP_HOST" | (string & {});
export type TargetTypes = TargetType[];
export type GeneratedRulesType =
  | "ALLOWLIST"
  | "DENYLIST"
  | "REJECTLIST"
  | "ALERTLIST"
  | (string & {});
export interface RulesSourceList {
  Targets: string[];
  TargetTypes: TargetType[];
  GeneratedRulesType: GeneratedRulesType;
}
export type StatefulAction = "PASS" | "DROP" | "ALERT" | "REJECT" | (string & {});
export type StatefulRuleProtocol =
  | "IP"
  | "TCP"
  | "UDP"
  | "ICMP"
  | "HTTP"
  | "FTP"
  | "TLS"
  | "SMB"
  | "DNS"
  | "DCERPC"
  | "SSH"
  | "SMTP"
  | "IMAP"
  | "MSN"
  | "KRB5"
  | "IKEV2"
  | "TFTP"
  | "NTP"
  | "DHCP"
  | "HTTP2"
  | "QUIC"
  | (string & {});
export type Source = string;
export type Port = string;
export type StatefulRuleDirection = "FORWARD" | "ANY" | (string & {});
export type Destination = string;
export interface Header {
  Protocol: StatefulRuleProtocol;
  Source: string;
  SourcePort: string;
  Direction: StatefulRuleDirection;
  Destination: string;
  DestinationPort: string;
}
export type Keyword = string;
export type Setting = string;
export type Settings = string[];
export interface RuleOption {
  Keyword: string;
  Settings?: string[];
}
export type RuleOptions = RuleOption[];
export interface StatefulRule {
  Action: StatefulAction;
  Header: Header;
  RuleOptions: RuleOption[];
}
export type StatefulRules = StatefulRule[];
export type AddressDefinition = string;
export interface Address {
  AddressDefinition: string;
}
export type Addresses = Address[];
export type PortRangeBound = number;
export interface PortRange {
  FromPort: number;
  ToPort: number;
}
export type PortRanges = PortRange[];
export type ProtocolNumber = number;
export type ProtocolNumbers = number[];
export type TCPFlag = "FIN" | "SYN" | "RST" | "PSH" | "ACK" | "URG" | "ECE" | "CWR" | (string & {});
export type Flags = TCPFlag[];
export interface TCPFlagField {
  Flags: TCPFlag[];
  Masks?: TCPFlag[];
}
export type TCPFlags = TCPFlagField[];
export interface MatchAttributes {
  Sources?: Address[];
  Destinations?: Address[];
  SourcePorts?: PortRange[];
  DestinationPorts?: PortRange[];
  Protocols?: number[];
  TCPFlags?: TCPFlagField[];
}
export interface RuleDefinition {
  MatchAttributes: MatchAttributes;
  Actions: string[];
}
export interface StatelessRule {
  RuleDefinition: RuleDefinition;
  Priority: number;
}
export type StatelessRules = StatelessRule[];
export interface StatelessRulesAndCustomActions {
  StatelessRules: StatelessRule[];
  CustomActions?: CustomAction[];
}
export interface RulesSource {
  RulesString?: string;
  RulesSourceList?: RulesSourceList;
  StatefulRules?: StatefulRule[];
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
}
export interface StatefulRuleOptions {
  RuleOrder?: RuleOrder;
}
export interface RuleGroup {
  RuleVariables?: RuleVariables;
  ReferenceSets?: ReferenceSets;
  RulesSource: RulesSource;
  StatefulRuleOptions?: StatefulRuleOptions;
}
export type RuleGroupType = "STATELESS" | "STATEFUL" | "STATEFUL_DOMAIN" | (string & {});
export interface SourceMetadata {
  SourceArn?: string;
  SourceUpdateToken?: string;
}
export type SummaryRuleOption = "SID" | "MSG" | "METADATA" | (string & {});
export type SummaryRuleOptions = SummaryRuleOption[];
export interface SummaryConfiguration {
  RuleOptions?: SummaryRuleOption[];
}
export interface CreateRuleGroupRequest {
  RuleGroupName: string;
  RuleGroup?: RuleGroup;
  Rules?: string;
  Type: RuleGroupType;
  Description?: string;
  Capacity: number;
  Tags?: Tag[];
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
  SourceMetadata?: SourceMetadata;
  AnalyzeRuleGroup?: boolean;
  SummaryConfiguration?: SummaryConfiguration;
}
export type RuleIdList = string[];
export type IdentifiedType =
  | "STATELESS_RULE_FORWARDING_ASYMMETRICALLY"
  | "STATELESS_RULE_CONTAINS_TCP_FLAGS"
  | (string & {});
export interface AnalysisResult {
  IdentifiedRuleIds?: string[];
  IdentifiedType?: IdentifiedType;
  AnalysisDetail?: string;
}
export type AnalysisResultList = AnalysisResult[];
export interface RuleGroupResponse {
  RuleGroupArn: string;
  RuleGroupName: string;
  RuleGroupId: string;
  Description?: string;
  Type?: RuleGroupType;
  Capacity?: number;
  RuleGroupStatus?: ResourceStatus;
  Tags?: Tag[];
  ConsumedCapacity?: number;
  NumberOfAssociations?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
  SourceMetadata?: SourceMetadata;
  SnsTopic?: string;
  LastModifiedTime?: Date;
  AnalysisResults?: AnalysisResult[];
  SummaryConfiguration?: SummaryConfiguration;
}
export interface CreateRuleGroupResponse {
  UpdateToken: string;
  RuleGroupResponse: RuleGroupResponse;
}
export interface ServerCertificate {
  ResourceArn?: string;
}
export type ServerCertificates = ServerCertificate[];
export interface ServerCertificateScope {
  Sources?: Address[];
  Destinations?: Address[];
  SourcePorts?: PortRange[];
  DestinationPorts?: PortRange[];
  Protocols?: number[];
}
export type ServerCertificateScopes = ServerCertificateScope[];
export type RevocationCheckAction = "PASS" | "DROP" | "REJECT" | (string & {});
export interface CheckCertificateRevocationStatusActions {
  RevokedStatusAction?: RevocationCheckAction;
  UnknownStatusAction?: RevocationCheckAction;
}
export interface ServerCertificateConfiguration {
  ServerCertificates?: ServerCertificate[];
  Scopes?: ServerCertificateScope[];
  CertificateAuthorityArn?: string;
  CheckCertificateRevocationStatus?: CheckCertificateRevocationStatusActions;
}
export type ServerCertificateConfigurations = ServerCertificateConfiguration[];
export interface TLSInspectionConfiguration {
  ServerCertificateConfigurations?: ServerCertificateConfiguration[];
}
export interface CreateTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationName: string;
  TLSInspectionConfiguration: TLSInspectionConfiguration;
  Description?: string;
  Tags?: Tag[];
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface TlsCertificateData {
  CertificateArn?: string;
  CertificateSerial?: string;
  Status?: string;
  StatusMessage?: string;
}
export type Certificates = TlsCertificateData[];
export interface TLSInspectionConfigurationResponse {
  TLSInspectionConfigurationArn: string;
  TLSInspectionConfigurationName: string;
  TLSInspectionConfigurationId: string;
  TLSInspectionConfigurationStatus?: ResourceStatus;
  Description?: string;
  Tags?: Tag[];
  LastModifiedTime?: Date;
  NumberOfAssociations?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
  Certificates?: TlsCertificateData[];
  CertificateAuthority?: TlsCertificateData;
}
export interface CreateTLSInspectionConfigurationResponse {
  UpdateToken: string;
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export interface CreateVpcEndpointAssociationRequest {
  FirewallArn: string;
  VpcId: string;
  SubnetMapping: SubnetMapping;
  Description?: string;
  Tags?: Tag[];
}
export interface VpcEndpointAssociation {
  VpcEndpointAssociationId?: string;
  VpcEndpointAssociationArn: string;
  FirewallArn: string;
  VpcId: string;
  SubnetMapping: SubnetMapping;
  Description?: string;
  Tags?: Tag[];
}
export interface AZSyncState {
  Attachment?: Attachment;
}
export type AssociationSyncState = { [key: string]: AZSyncState | undefined };
export interface VpcEndpointAssociationStatus {
  Status: FirewallStatusValue;
  AssociationSyncState?: { [key: string]: AZSyncState | undefined };
}
export interface CreateVpcEndpointAssociationResponse {
  VpcEndpointAssociation?: VpcEndpointAssociation;
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus;
}
export interface DeleteContainerAssociationRequest {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
}
export interface DeleteContainerAssociationResponse {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
  Status?: ContainerAssociationStatus;
}
export interface DeleteFirewallRequest {
  FirewallName?: string;
  FirewallArn?: string;
}
export interface DeleteFirewallResponse {
  Firewall?: Firewall;
  FirewallStatus?: FirewallStatus;
}
export interface DeleteFirewallPolicyRequest {
  FirewallPolicyName?: string;
  FirewallPolicyArn?: string;
}
export interface DeleteFirewallPolicyResponse {
  FirewallPolicyResponse: FirewallPolicyResponse;
}
export interface DeleteNetworkFirewallTransitGatewayAttachmentRequest {
  TransitGatewayAttachmentId: string;
}
export interface DeleteNetworkFirewallTransitGatewayAttachmentResponse {
  TransitGatewayAttachmentId: string;
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus;
}
export interface DeleteProxyRequest {
  NatGatewayId: string;
  ProxyName?: string;
  ProxyArn?: string;
}
export interface DeleteProxyResponse {
  NatGatewayId?: string;
  ProxyName?: string;
  ProxyArn?: string;
}
export interface DeleteProxyConfigurationRequest {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
}
export interface DeleteProxyConfigurationResponse {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
}
export interface DeleteProxyRuleGroupRequest {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
}
export interface DeleteProxyRuleGroupResponse {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
}
export interface DeleteProxyRulesRequest {
  ProxyRuleGroupArn?: string;
  ProxyRuleGroupName?: string;
  Rules: string[];
}
export interface DeleteProxyRulesResponse {
  ProxyRuleGroup?: ProxyRuleGroup;
}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteRuleGroupRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
}
export interface DeleteRuleGroupResponse {
  RuleGroupResponse: RuleGroupResponse;
}
export interface DeleteTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationArn?: string;
  TLSInspectionConfigurationName?: string;
}
export interface DeleteTLSInspectionConfigurationResponse {
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export interface DeleteVpcEndpointAssociationRequest {
  VpcEndpointAssociationArn: string;
}
export interface DeleteVpcEndpointAssociationResponse {
  VpcEndpointAssociation?: VpcEndpointAssociation;
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus;
}
export interface DescribeContainerAssociationRequest {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
}
export type ContainerAssociationLastUpdatedTime = Date;
export interface DescribeContainerAssociationResponse {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
  Description?: string;
  Type?: ContainerMonitoringType;
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[];
  Status?: ContainerAssociationStatus;
  ResolvedCidrCount?: number;
  LastUpdatedTime?: Date;
  Tags?: Tag[];
  UpdateToken?: string;
}
export interface DescribeFirewallRequest {
  FirewallName?: string;
  FirewallArn?: string;
}
export interface DescribeFirewallResponse {
  UpdateToken?: string;
  Firewall?: Firewall;
  FirewallStatus?: FirewallStatus;
}
export interface DescribeFirewallMetadataRequest {
  FirewallArn?: string;
}
export interface AvailabilityZoneMetadata {
  IPAddressType?: IPAddressType;
}
export type SupportedAvailabilityZones = { [key: string]: AvailabilityZoneMetadata | undefined };
export interface DescribeFirewallMetadataResponse {
  FirewallArn?: string;
  FirewallPolicyArn?: string;
  Description?: string;
  Status?: FirewallStatusValue;
  SupportedAvailabilityZones?: { [key: string]: AvailabilityZoneMetadata | undefined };
  TransitGatewayAttachmentId?: string;
}
export interface DescribeFirewallPolicyRequest {
  FirewallPolicyName?: string;
  FirewallPolicyArn?: string;
}
export interface DescribeFirewallPolicyResponse {
  UpdateToken: string;
  FirewallPolicyResponse: FirewallPolicyResponse;
  FirewallPolicy?: FirewallPolicy;
}
export type VpcEndpointId = string;
export type FlowOperationId = string;
export interface DescribeFlowOperationRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationId: string;
}
export type FlowOperationType = "FLOW_FLUSH" | "FLOW_CAPTURE" | (string & {});
export type FlowOperationStatus =
  | "COMPLETED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED_WITH_ERRORS"
  | (string & {});
export type FlowRequestTimestamp = Date;
export type Age = number;
export type ProtocolString = string;
export type ProtocolStrings = string[];
export interface FlowFilter {
  SourceAddress?: Address;
  DestinationAddress?: Address;
  SourcePort?: string;
  DestinationPort?: string;
  Protocols?: string[];
}
export type FlowFilters = FlowFilter[];
export interface FlowOperation {
  MinimumFlowAgeInSeconds?: number;
  FlowFilters?: FlowFilter[];
}
export interface DescribeFlowOperationResponse {
  FirewallArn?: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationId?: string;
  FlowOperationType?: FlowOperationType;
  FlowOperationStatus?: FlowOperationStatus;
  StatusMessage?: string;
  FlowRequestTimestamp?: Date;
  FlowOperation?: FlowOperation;
}
export interface DescribeLoggingConfigurationRequest {
  FirewallArn?: string;
  FirewallName?: string;
}
export type LogType = "ALERT" | "FLOW" | "TLS" | (string & {});
export type LogDestinationType = "S3" | "CloudWatchLogs" | "KinesisDataFirehose" | (string & {});
export type HashMapKey = string;
export type HashMapValue = string;
export type LogDestinationMap = { [key: string]: string | undefined };
export interface LogDestinationConfig {
  LogType: LogType;
  LogDestinationType: LogDestinationType;
  LogDestination: { [key: string]: string | undefined };
}
export type LogDestinationConfigs = LogDestinationConfig[];
export interface LoggingConfiguration {
  LogDestinationConfigs: LogDestinationConfig[];
}
export type EnableMonitoringDashboard = boolean;
export interface DescribeLoggingConfigurationResponse {
  FirewallArn?: string;
  LoggingConfiguration?: LoggingConfiguration;
  EnableMonitoringDashboard?: boolean;
}
export interface DescribeProxyRequest {
  ProxyName?: string;
  ProxyArn?: string;
}
export type VpcEndpointServiceName = string;
export type PrivateDNSName = string;
export interface DescribeProxyResource {
  ProxyName?: string;
  ProxyArn?: string;
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  NatGatewayId?: string;
  ProxyState?: ProxyState;
  ProxyModifyState?: ProxyModifyState;
  ListenerProperties?: ListenerProperty[];
  TlsInterceptProperties?: TlsInterceptProperties;
  VpcEndpointServiceName?: string;
  PrivateDNSName?: string;
  CreateTime?: Date;
  DeleteTime?: Date;
  UpdateTime?: Date;
  FailureCode?: string;
  FailureMessage?: string;
  Tags?: Tag[];
}
export interface DescribeProxyResponse {
  Proxy?: DescribeProxyResource;
  UpdateToken?: string;
}
export interface DescribeProxyConfigurationRequest {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
}
export interface DescribeProxyConfigurationResponse {
  ProxyConfiguration?: ProxyConfiguration;
  UpdateToken?: string;
}
export interface DescribeProxyRuleRequest {
  ProxyRuleName: string;
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
}
export interface DescribeProxyRuleResponse {
  ProxyRule?: ProxyRule;
  UpdateToken?: string;
}
export interface DescribeProxyRuleGroupRequest {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
}
export interface DescribeProxyRuleGroupResponse {
  ProxyRuleGroup?: ProxyRuleGroup;
  UpdateToken?: string;
}
export interface DescribeResourcePolicyRequest {
  ResourceArn: string;
}
export type PolicyString = string;
export interface DescribeResourcePolicyResponse {
  Policy?: string;
}
export interface DescribeRuleGroupRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
  AnalyzeRuleGroup?: boolean;
}
export interface DescribeRuleGroupResponse {
  UpdateToken: string;
  RuleGroup?: RuleGroup;
  RuleGroupResponse: RuleGroupResponse;
}
export interface DescribeRuleGroupMetadataRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
}
export type VendorName = string;
export type ProductId = string;
export type ListingName = string;
export interface DescribeRuleGroupMetadataResponse {
  RuleGroupArn: string;
  RuleGroupName: string;
  Description?: string;
  Type?: RuleGroupType;
  Capacity?: number;
  StatefulRuleOptions?: StatefulRuleOptions;
  LastModifiedTime?: Date;
  VendorName?: string;
  ProductId?: string;
  ListingName?: string;
}
export interface DescribeRuleGroupSummaryRequest {
  RuleGroupName?: string;
  RuleGroupArn?: string;
  Type?: RuleGroupType;
}
export interface RuleSummary {
  SID?: string;
  Msg?: string;
  Metadata?: string;
}
export type RuleSummaries = RuleSummary[];
export interface Summary {
  RuleSummaries?: RuleSummary[];
}
export interface DescribeRuleGroupSummaryResponse {
  RuleGroupName: string;
  Description?: string;
  Summary?: Summary;
}
export interface DescribeTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationArn?: string;
  TLSInspectionConfigurationName?: string;
}
export interface DescribeTLSInspectionConfigurationResponse {
  UpdateToken: string;
  TLSInspectionConfiguration?: TLSInspectionConfiguration;
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export interface DescribeVpcEndpointAssociationRequest {
  VpcEndpointAssociationArn: string;
}
export interface DescribeVpcEndpointAssociationResponse {
  VpcEndpointAssociation?: VpcEndpointAssociation;
  VpcEndpointAssociationStatus?: VpcEndpointAssociationStatus;
}
export interface DetachRuleGroupsFromProxyConfigurationRequest {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  RuleGroupNames?: string[];
  RuleGroupArns?: string[];
  UpdateToken: string;
}
export interface DetachRuleGroupsFromProxyConfigurationResponse {
  ProxyConfiguration?: ProxyConfiguration;
  UpdateToken?: string;
}
export interface DisassociateAvailabilityZonesRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings: AvailabilityZoneMapping[];
}
export interface DisassociateAvailabilityZonesResponse {
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneMappings?: AvailabilityZoneMapping[];
  UpdateToken?: string;
}
export type AzSubnets = string[];
export interface DisassociateSubnetsRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetIds: string[];
}
export interface DisassociateSubnetsResponse {
  FirewallArn?: string;
  FirewallName?: string;
  SubnetMappings?: SubnetMapping[];
  UpdateToken?: string;
}
export type AnalysisReportId = string;
export type AnalysisReportNextToken = string;
export type PaginationMaxResults = number;
export interface GetAnalysisReportResultsRequest {
  FirewallName?: string;
  AnalysisReportId: string;
  FirewallArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type Status = string;
export type StartTime = Date;
export type EndTime = Date;
export type ReportTime = Date;
export type FirstAccessed = Date;
export type LastAccessed = Date;
export type Domain = string;
export type Count = number;
export interface Hits {
  Count?: number;
}
export interface UniqueSources {
  Count?: number;
}
export interface AnalysisTypeReportResult {
  Protocol?: string;
  FirstAccessed?: Date;
  LastAccessed?: Date;
  Domain?: string;
  Hits?: Hits;
  UniqueSources?: UniqueSources;
}
export type AnalysisReportResults = AnalysisTypeReportResult[];
export interface GetAnalysisReportResultsResponse {
  Status?: string;
  StartTime?: Date;
  EndTime?: Date;
  ReportTime?: Date;
  AnalysisType?: EnabledAnalysisType;
  NextToken?: string;
  AnalysisReportResults?: AnalysisTypeReportResult[];
}
export type PaginationToken = string;
export interface ListAnalysisReportsRequest {
  FirewallName?: string;
  FirewallArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface AnalysisReport {
  AnalysisReportId?: string;
  AnalysisType?: EnabledAnalysisType;
  ReportTime?: Date;
  Status?: string;
}
export type AnalysisReports = AnalysisReport[];
export interface ListAnalysisReportsResponse {
  AnalysisReports?: AnalysisReport[];
  NextToken?: string;
}
export interface ListContainerAssociationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ContainerAssociationSummary {
  Arn?: string;
  Name?: string;
}
export type ContainerAssociations = ContainerAssociationSummary[];
export interface ListContainerAssociationsResponse {
  ContainerAssociations?: ContainerAssociationSummary[];
  NextToken?: string;
}
export interface ListFirewallPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface FirewallPolicyMetadata {
  Name?: string;
  Arn?: string;
}
export type FirewallPolicies = FirewallPolicyMetadata[];
export interface ListFirewallPoliciesResponse {
  NextToken?: string;
  FirewallPolicies?: FirewallPolicyMetadata[];
}
export type VpcIds = string[];
export interface ListFirewallsRequest {
  NextToken?: string;
  VpcIds?: string[];
  MaxResults?: number;
}
export interface FirewallMetadata {
  FirewallName?: string;
  FirewallArn?: string;
  TransitGatewayAttachmentId?: string;
}
export type Firewalls = FirewallMetadata[];
export interface ListFirewallsResponse {
  NextToken?: string;
  Firewalls?: FirewallMetadata[];
}
export interface ListFlowOperationResultsRequest {
  FirewallArn: string;
  FlowOperationId: string;
  NextToken?: string;
  MaxResults?: number;
  AvailabilityZone?: string;
  VpcEndpointId?: string;
  VpcEndpointAssociationArn?: string;
}
export type PacketCount = number;
export type ByteCount = number;
export interface Flow {
  SourceAddress?: Address;
  DestinationAddress?: Address;
  SourcePort?: string;
  DestinationPort?: string;
  Protocol?: string;
  Age?: number;
  PacketCount?: number;
  ByteCount?: number;
}
export type Flows = Flow[];
export interface ListFlowOperationResultsResponse {
  FirewallArn?: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationId?: string;
  FlowOperationStatus?: FlowOperationStatus;
  StatusMessage?: string;
  FlowRequestTimestamp?: Date;
  Flows?: Flow[];
  NextToken?: string;
}
export interface ListFlowOperationsRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  FlowOperationType?: FlowOperationType;
  NextToken?: string;
  MaxResults?: number;
}
export interface FlowOperationMetadata {
  FlowOperationId?: string;
  FlowOperationType?: FlowOperationType;
  FlowRequestTimestamp?: Date;
  FlowOperationStatus?: FlowOperationStatus;
}
export type FlowOperations = FlowOperationMetadata[];
export interface ListFlowOperationsResponse {
  FlowOperations?: FlowOperationMetadata[];
  NextToken?: string;
}
export interface ListProxiesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ProxyMetadata {
  Name?: string;
  Arn?: string;
}
export type Proxies = ProxyMetadata[];
export interface ListProxiesResponse {
  Proxies?: ProxyMetadata[];
  NextToken?: string;
}
export interface ListProxyConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ProxyConfigurationMetadata {
  Name?: string;
  Arn?: string;
}
export type ProxyConfigurations = ProxyConfigurationMetadata[];
export interface ListProxyConfigurationsResponse {
  ProxyConfigurations?: ProxyConfigurationMetadata[];
  NextToken?: string;
}
export interface ListProxyRuleGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ProxyRuleGroupMetadata {
  Name?: string;
  Arn?: string;
}
export type ProxyRuleGroups = ProxyRuleGroupMetadata[];
export interface ListProxyRuleGroupsResponse {
  ProxyRuleGroups?: ProxyRuleGroupMetadata[];
  NextToken?: string;
}
export type ResourceManagedStatus = "MANAGED" | "ACCOUNT" | (string & {});
export type ResourceManagedType =
  | "AWS_MANAGED_THREAT_SIGNATURES"
  | "AWS_MANAGED_DOMAIN_LISTS"
  | "ACTIVE_THREAT_DEFENSE"
  | "PARTNER_MANAGED"
  | (string & {});
export type SubscriptionStatus = "NOT_SUBSCRIBED" | "SUBSCRIBED" | (string & {});
export interface ListRuleGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
  Scope?: ResourceManagedStatus;
  ManagedType?: ResourceManagedType;
  SubscriptionStatus?: SubscriptionStatus;
  Type?: RuleGroupType;
}
export interface RuleGroupMetadata {
  Name?: string;
  Arn?: string;
  VendorName?: string;
}
export type RuleGroups = RuleGroupMetadata[];
export interface ListRuleGroupsResponse {
  NextToken?: string;
  RuleGroups?: RuleGroupMetadata[];
}
export type TagsPaginationMaxResults = number;
export interface ListTagsForResourceRequest {
  NextToken?: string;
  MaxResults?: number;
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  NextToken?: string;
  Tags?: Tag[];
}
export interface ListTLSInspectionConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface TLSInspectionConfigurationMetadata {
  Name?: string;
  Arn?: string;
}
export type TLSInspectionConfigurations = TLSInspectionConfigurationMetadata[];
export interface ListTLSInspectionConfigurationsResponse {
  NextToken?: string;
  TLSInspectionConfigurations?: TLSInspectionConfigurationMetadata[];
}
export interface ListVpcEndpointAssociationsRequest {
  NextToken?: string;
  MaxResults?: number;
  FirewallArn?: string;
}
export interface VpcEndpointAssociationMetadata {
  VpcEndpointAssociationArn?: string;
}
export type VpcEndpointAssociations = VpcEndpointAssociationMetadata[];
export interface ListVpcEndpointAssociationsResponse {
  NextToken?: string;
  VpcEndpointAssociations?: VpcEndpointAssociationMetadata[];
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {}
export interface RejectNetworkFirewallTransitGatewayAttachmentRequest {
  TransitGatewayAttachmentId: string;
}
export interface RejectNetworkFirewallTransitGatewayAttachmentResponse {
  TransitGatewayAttachmentId: string;
  TransitGatewayAttachmentStatus: TransitGatewayAttachmentStatus;
}
export interface StartAnalysisReportRequest {
  FirewallName?: string;
  FirewallArn?: string;
  AnalysisType: EnabledAnalysisType;
}
export interface StartAnalysisReportResponse {
  AnalysisReportId: string;
}
export interface StartFlowCaptureRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  MinimumFlowAgeInSeconds?: number;
  FlowFilters: FlowFilter[];
}
export interface StartFlowCaptureResponse {
  FirewallArn?: string;
  FlowOperationId?: string;
  FlowOperationStatus?: FlowOperationStatus;
}
export interface StartFlowFlushRequest {
  FirewallArn: string;
  AvailabilityZone?: string;
  VpcEndpointAssociationArn?: string;
  VpcEndpointId?: string;
  MinimumFlowAgeInSeconds?: number;
  FlowFilters: FlowFilter[];
}
export interface StartFlowFlushResponse {
  FirewallArn?: string;
  FlowOperationId?: string;
  FlowOperationStatus?: FlowOperationStatus;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAvailabilityZoneChangeProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneChangeProtection: boolean;
}
export interface UpdateAvailabilityZoneChangeProtectionResponse {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  AvailabilityZoneChangeProtection?: boolean;
}
export interface UpdateContainerAssociationRequest {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
  Description?: string;
  Type: ContainerMonitoringType;
  ContainerMonitoringConfigurations: ContainerMonitoringConfiguration[];
  Tags?: Tag[];
  UpdateToken: string;
}
export interface UpdateContainerAssociationResponse {
  ContainerAssociationName?: string;
  ContainerAssociationArn?: string;
  Description?: string;
  Type?: ContainerMonitoringType;
  ContainerMonitoringConfigurations?: ContainerMonitoringConfiguration[];
  Status?: ContainerAssociationStatus;
  Tags?: Tag[];
  UpdateToken?: string;
}
export interface UpdateFirewallAnalysisSettingsRequest {
  EnabledAnalysisTypes?: EnabledAnalysisType[];
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
}
export interface UpdateFirewallAnalysisSettingsResponse {
  EnabledAnalysisTypes?: EnabledAnalysisType[];
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
}
export interface UpdateFirewallDeleteProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  DeleteProtection: boolean;
}
export interface UpdateFirewallDeleteProtectionResponse {
  FirewallArn?: string;
  FirewallName?: string;
  DeleteProtection?: boolean;
  UpdateToken?: string;
}
export interface UpdateFirewallDescriptionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  Description?: string;
}
export interface UpdateFirewallDescriptionResponse {
  FirewallArn?: string;
  FirewallName?: string;
  Description?: string;
  UpdateToken?: string;
}
export interface UpdateFirewallEncryptionConfigurationRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateFirewallEncryptionConfigurationResponse {
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateFirewallPolicyRequest {
  UpdateToken: string;
  FirewallPolicyArn?: string;
  FirewallPolicyName?: string;
  FirewallPolicy: FirewallPolicy;
  Description?: string;
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateFirewallPolicyResponse {
  UpdateToken: string;
  FirewallPolicyResponse: FirewallPolicyResponse;
}
export interface UpdateFirewallPolicyChangeProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyChangeProtection: boolean;
}
export interface UpdateFirewallPolicyChangeProtectionResponse {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  FirewallPolicyChangeProtection?: boolean;
}
export interface UpdateLoggingConfigurationRequest {
  FirewallArn?: string;
  FirewallName?: string;
  LoggingConfiguration?: LoggingConfiguration;
  EnableMonitoringDashboard?: boolean;
}
export interface UpdateLoggingConfigurationResponse {
  FirewallArn?: string;
  FirewallName?: string;
  LoggingConfiguration?: LoggingConfiguration;
  EnableMonitoringDashboard?: boolean;
}
export interface UpdateProxyRequest {
  NatGatewayId: string;
  ProxyName?: string;
  ProxyArn?: string;
  ListenerPropertiesToAdd?: ListenerPropertyRequest[];
  ListenerPropertiesToRemove?: ListenerPropertyRequest[];
  TlsInterceptProperties?: TlsInterceptPropertiesRequest;
  UpdateToken: string;
}
export interface UpdateProxyResponse {
  Proxy?: Proxy;
  UpdateToken?: string;
}
export interface UpdateProxyConfigurationRequest {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  DefaultRulePhaseActions: ProxyConfigDefaultRulePhaseActionsRequest;
  UpdateToken: string;
}
export interface UpdateProxyConfigurationResponse {
  ProxyConfiguration?: ProxyConfiguration;
  UpdateToken?: string;
}
export interface UpdateProxyRuleRequest {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
  ProxyRuleName: string;
  Description?: string;
  Action?: ProxyRulePhaseAction;
  AddConditions?: ProxyRuleCondition[];
  RemoveConditions?: ProxyRuleCondition[];
  UpdateToken: string;
}
export interface UpdateProxyRuleResponse {
  ProxyRule?: ProxyRule;
  RemovedConditions?: ProxyRuleCondition[];
  UpdateToken?: string;
}
export interface ProxyRuleGroupPriority {
  ProxyRuleGroupName?: string;
  NewPosition?: number;
}
export type ProxyRuleGroupPriorityList = ProxyRuleGroupPriority[];
export interface UpdateProxyRuleGroupPrioritiesRequest {
  ProxyConfigurationName?: string;
  ProxyConfigurationArn?: string;
  RuleGroups: ProxyRuleGroupPriority[];
  UpdateToken: string;
}
export type ProxyRuleGroupPriorityResultPriority = number;
export interface ProxyRuleGroupPriorityResult {
  ProxyRuleGroupName?: string;
  Priority?: number;
}
export type ProxyRuleGroupPriorityResultList = ProxyRuleGroupPriorityResult[];
export interface UpdateProxyRuleGroupPrioritiesResponse {
  ProxyRuleGroups?: ProxyRuleGroupPriorityResult[];
  UpdateToken?: string;
}
export type RuleGroupRequestPhase = "PRE_DNS" | "PRE_REQ" | "POST_RES" | (string & {});
export interface ProxyRulePriority {
  ProxyRuleName?: string;
  NewPosition?: number;
}
export type ProxyRulePriorityList = ProxyRulePriority[];
export interface UpdateProxyRulePrioritiesRequest {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
  RuleGroupRequestPhase: RuleGroupRequestPhase;
  Rules: ProxyRulePriority[];
  UpdateToken: string;
}
export interface UpdateProxyRulePrioritiesResponse {
  ProxyRuleGroupName?: string;
  ProxyRuleGroupArn?: string;
  RuleGroupRequestPhase?: RuleGroupRequestPhase;
  Rules?: ProxyRulePriority[];
  UpdateToken?: string;
}
export interface UpdateProxySettingsRequest {
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
  ProxySettings?: ProxySettings;
}
export interface UpdateProxySettingsResponse {
  FirewallArn?: string;
  FirewallName?: string;
  UpdateToken?: string;
  ProxySettings?: ProxySettings;
}
export interface UpdateRuleGroupRequest {
  UpdateToken: string;
  RuleGroupArn?: string;
  RuleGroupName?: string;
  RuleGroup?: RuleGroup;
  Rules?: string;
  Type?: RuleGroupType;
  Description?: string;
  DryRun?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
  SourceMetadata?: SourceMetadata;
  AnalyzeRuleGroup?: boolean;
  SummaryConfiguration?: SummaryConfiguration;
}
export interface UpdateRuleGroupResponse {
  UpdateToken: string;
  RuleGroupResponse: RuleGroupResponse;
}
export interface UpdateSubnetChangeProtectionRequest {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetChangeProtection: boolean;
}
export interface UpdateSubnetChangeProtectionResponse {
  UpdateToken?: string;
  FirewallArn?: string;
  FirewallName?: string;
  SubnetChangeProtection?: boolean;
}
export interface UpdateTLSInspectionConfigurationRequest {
  TLSInspectionConfigurationArn?: string;
  TLSInspectionConfigurationName?: string;
  TLSInspectionConfiguration: TLSInspectionConfiguration;
  Description?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
  UpdateToken: string;
}
export interface UpdateTLSInspectionConfigurationResponse {
  UpdateToken: string;
  TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
}
export type ErrorMessage = string;
export type AcceptNetworkFirewallTransitGatewayAttachmentError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Accepts a transit gateway attachment request for Network Firewall. When you accept the attachment request, Network Firewall creates the necessary routing components to enable traffic flow between the transit gateway and firewall endpoints.
 *
 * You must accept a transit gateway attachment to complete the creation of a transit gateway-attached firewall, unless auto-accept is enabled on the transit gateway. After acceptance, use DescribeFirewall to verify the firewall status.
 *
 * To reject an attachment instead of accepting it, use RejectNetworkFirewallTransitGatewayAttachment.
 *
 * It can take several minutes for the attachment acceptance to complete and the firewall to become available.
 */
export const acceptNetworkFirewallTransitGatewayAttachment: API.OperationMethod<
  AcceptNetworkFirewallTransitGatewayAttachmentRequest,
  AcceptNetworkFirewallTransitGatewayAttachmentResponse,
  AcceptNetworkFirewallTransitGatewayAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AcceptNetworkFirewallTransitGatewayAttachmentRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<AcceptNetworkFirewallTransitGatewayAttachmentResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptNetworkFirewallTransitGatewayAttachment",
}));

export type AssociateAvailabilityZonesError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates the specified Availability Zones with a transit gateway-attached firewall. For each Availability Zone, Network Firewall creates a firewall endpoint to process traffic. You can specify one or more Availability Zones where you want to deploy the firewall.
 *
 * After adding Availability Zones, you must update your transit gateway route tables to direct traffic through the new firewall endpoints. Use DescribeFirewall to monitor the status of the new endpoints.
 */
export const associateAvailabilityZones: API.OperationMethod<
  AssociateAvailabilityZonesRequest,
  AssociateAvailabilityZonesResponse,
  AssociateAvailabilityZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AssociateAvailabilityZonesRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<AssociateAvailabilityZonesResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAvailabilityZones",
}));

export type AssociateFirewallPolicyError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a FirewallPolicy to a Firewall.
 *
 * A firewall policy defines how to monitor and manage your VPC network traffic, using a
 * collection of inspection rule groups and other settings. Each firewall requires one
 * firewall policy association, and you can use the same firewall policy for multiple
 * firewalls.
 */
export const associateFirewallPolicy: API.OperationMethod<
  AssociateFirewallPolicyRequest,
  AssociateFirewallPolicyResponse,
  AssociateFirewallPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<AssociateFirewallPolicyRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<AssociateFirewallPolicyResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateFirewallPolicy",
}));

export type AssociateSubnetsError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
 * subnet for each of the Availability Zones that the VPC spans.
 *
 * This request creates an Network Firewall firewall endpoint in each of the subnets. To
 * enable the firewall's protections, you must also modify the VPC's route tables for each
 * subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
 * zone through the firewall endpoint.
 */
export const associateSubnets: API.OperationMethod<
  AssociateSubnetsRequest,
  AssociateSubnetsResponse,
  AssociateSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<AssociateSubnetsRequest>,
  output: __S(11, __c1, 3) as any as S.Schema<AssociateSubnetsResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSubnets",
}));

export type AttachRuleGroupsToProxyConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Attaches ProxyRuleGroup resources to a ProxyConfiguration
 *
 * A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.
 */
export const attachRuleGroupsToProxyConfiguration: API.OperationMethod<
  AttachRuleGroupsToProxyConfigurationRequest,
  AttachRuleGroupsToProxyConfigurationResponse,
  AttachRuleGroupsToProxyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<AttachRuleGroupsToProxyConfigurationRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<AttachRuleGroupsToProxyConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachRuleGroupsToProxyConfiguration",
}));

export type CreateContainerAssociationError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a Network Firewall container association. The association monitors container lifecycle events in your
 * Amazon ECS or Amazon EKS clusters and resolves running container addresses for use in firewall rules.
 */
export const createContainerAssociation: API.OperationMethod<
  CreateContainerAssociationRequest,
  CreateContainerAssociationResponse,
  CreateContainerAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<CreateContainerAssociationRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<CreateContainerAssociationResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContainerAssociation",
}));

export type CreateFirewallError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an Network Firewall Firewall and accompanying FirewallStatus for a VPC.
 *
 * The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource.
 *
 * After you create a firewall, you can provide additional settings, like the logging configuration.
 *
 * To update the settings for a firewall, you use the operations that apply to the settings
 * themselves, for example UpdateLoggingConfiguration, AssociateSubnets, and UpdateFirewallDeleteProtection.
 *
 * To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about firewalls, use ListFirewalls and DescribeFirewall.
 *
 * To generate a report on the last 30 days of traffic monitored by a firewall, use StartAnalysisReport.
 */
export const createFirewall: API.OperationMethod<
  CreateFirewallRequest,
  CreateFirewallResponse,
  CreateFirewallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<CreateFirewallRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<CreateFirewallResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFirewall",
}));

export type CreateFirewallPolicyError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates the firewall policy for the firewall according to the specifications.
 *
 * An Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 * stateless and stateful rule groups and other settings. You can use one firewall policy for
 * multiple firewalls.
 */
export const createFirewallPolicy: API.OperationMethod<
  CreateFirewallPolicyRequest,
  CreateFirewallPolicyResponse,
  CreateFirewallPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<CreateFirewallPolicyRequest>,
  output: __S(70, __c8, 6) as any as S.Schema<CreateFirewallPolicyResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFirewallPolicy",
}));

export type CreateProxyError =
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Creates an Network Firewall Proxy
 *
 * Attaches a Proxy configuration to a NAT Gateway.
 *
 * To manage a proxy's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about proxies, use ListProxies and DescribeProxy.
 */
export const createProxy: API.OperationMethod<
  CreateProxyRequest,
  CreateProxyResponse,
  CreateProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<CreateProxyRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<CreateProxyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProxy",
}));

export type CreateProxyConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an Network Firewall ProxyConfiguration
 *
 * A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.
 *
 * To manage a proxy configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about proxies, use ListProxyConfigurations and DescribeProxyConfiguration.
 */
export const createProxyConfiguration: API.OperationMethod<
  CreateProxyConfigurationRequest,
  CreateProxyConfigurationResponse,
  CreateProxyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<CreateProxyConfigurationRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<CreateProxyConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProxyConfiguration",
}));

export type CreateProxyRuleGroupError =
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an Network Firewall ProxyRuleGroup
 *
 * Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations.
 *
 * To manage a proxy rule group's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about proxy rule groups, use ListProxyRuleGroups and DescribeProxyRuleGroup.
 *
 * To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.
 */
export const createProxyRuleGroup: API.OperationMethod<
  CreateProxyRuleGroupRequest,
  CreateProxyRuleGroupResponse,
  CreateProxyRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<CreateProxyRuleGroupRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<CreateProxyRuleGroupResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProxyRuleGroup",
}));

export type CreateProxyRulesError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates Network Firewall ProxyRule resources.
 *
 * Attaches new proxy rule(s) to an existing proxy rule group.
 *
 * To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.
 */
export const createProxyRules: API.OperationMethod<
  CreateProxyRulesRequest,
  CreateProxyRulesResponse,
  CreateProxyRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<CreateProxyRulesRequest>,
  output: __S(91, __c11, 3) as any as S.Schema<CreateProxyRulesResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProxyRules",
}));

export type CreateRuleGroupError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates the specified stateless or stateful rule group, which includes the rules for
 * network traffic inspection, a capacity setting, and tags.
 *
 * You provide your rule group specification in your request using either
 * `RuleGroup` or `Rules`.
 */
export const createRuleGroup: API.OperationMethod<
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CreateRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<CreateRuleGroupRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<CreateRuleGroupResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRuleGroup",
}));

export type CreateTLSInspectionConfigurationError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an Network Firewall TLS inspection configuration. Network Firewall uses TLS inspection configurations to decrypt your firewall's inbound and outbound SSL/TLS traffic. After decryption, Network Firewall inspects the traffic according to your firewall policy's stateful rules, and then re-encrypts it before sending it to its destination. You can enable inspection of your firewall's inbound traffic, outbound traffic, or both. To use TLS inspection with your firewall, you must first import or provision certificates using ACM, create a TLS inspection configuration, add that configuration to a new firewall policy, and then associate that policy with your firewall.
 *
 * To update the settings for a TLS inspection configuration, use UpdateTLSInspectionConfiguration.
 *
 * To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about TLS inspection configurations, use ListTLSInspectionConfigurations and DescribeTLSInspectionConfiguration.
 *
 * For more information about TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS
 * inspection configurations in the *Network Firewall Developer Guide*.
 */
export const createTLSInspectionConfiguration: API.OperationMethod<
  CreateTLSInspectionConfigurationRequest,
  CreateTLSInspectionConfigurationResponse,
  CreateTLSInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<CreateTLSInspectionConfigurationRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<CreateTLSInspectionConfigurationResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTLSInspectionConfiguration",
}));

export type CreateVpcEndpointAssociationError =
  | InsufficientCapacityException
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a firewall endpoint for an Network Firewall firewall. This type of firewall endpoint is independent of the firewall endpoints that you specify in the `Firewall` itself, and you define it in addition to those endpoints after the firewall has been created. You can define a VPC endpoint association using a different VPC than the one you used in the firewall specifications.
 */
export const createVpcEndpointAssociation: API.OperationMethod<
  CreateVpcEndpointAssociationRequest,
  CreateVpcEndpointAssociationResponse,
  CreateVpcEndpointAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139, __c17, 3) as any as S.Schema<CreateVpcEndpointAssociationRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<CreateVpcEndpointAssociationResponse>,
  errors: [
    InsufficientCapacityException,
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVpcEndpointAssociation",
}));

export type DeleteContainerAssociationError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a container association. The resource transitions to a `DELETING` state. Deletion is
 * asynchronous - Network Firewall returns immediately while cleanup proceeds in the background. You can't delete a
 * container association while a rule group references it.
 */
export const deleteContainerAssociation: API.OperationMethod<
  DeleteContainerAssociationRequest,
  DeleteContainerAssociationResponse,
  DeleteContainerAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<DeleteContainerAssociationRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<DeleteContainerAssociationResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContainerAssociation",
}));

export type DeleteFirewallError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes the specified Firewall and its FirewallStatus.
 * This operation requires the firewall's `DeleteProtection` flag to be
 * `FALSE`. You can't revert this operation.
 *
 * You can check whether a firewall is
 * in use by reviewing the route tables for the Availability Zones where you have
 * firewall subnet mappings. Retrieve the subnet mappings by calling DescribeFirewall.
 * You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 * zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
 * you can remove the firewall safely.
 *
 * To delete a firewall, remove the delete protection if you need to using UpdateFirewallDeleteProtection,
 * then delete the firewall by calling DeleteFirewall.
 */
export const deleteFirewall: API.OperationMethod<
  DeleteFirewallRequest,
  DeleteFirewallResponse,
  DeleteFirewallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<DeleteFirewallRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<DeleteFirewallResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFirewall",
}));

export type DeleteFirewallPolicyError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes the specified FirewallPolicy.
 */
export const deleteFirewallPolicy: API.OperationMethod<
  DeleteFirewallPolicyRequest,
  DeleteFirewallPolicyResponse,
  DeleteFirewallPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148, __c18, 4) as any as S.Schema<DeleteFirewallPolicyRequest>,
  output: __S(149, __c18, 5) as any as S.Schema<DeleteFirewallPolicyResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFirewallPolicy",
}));

export type DeleteNetworkFirewallTransitGatewayAttachmentError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a transit gateway attachment from a Network Firewall. Either the firewall owner or the transit gateway owner can delete the attachment.
 *
 * After you delete a transit gateway attachment, traffic will no longer flow through the firewall endpoints.
 *
 * After you initiate the delete operation, use DescribeFirewall to monitor the deletion status.
 */
export const deleteNetworkFirewallTransitGatewayAttachment: API.OperationMethod<
  DeleteNetworkFirewallTransitGatewayAttachmentRequest,
  DeleteNetworkFirewallTransitGatewayAttachmentResponse,
  DeleteNetworkFirewallTransitGatewayAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(
    150,
    __c18,
    6,
  ) as any as S.Schema<DeleteNetworkFirewallTransitGatewayAttachmentRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteNetworkFirewallTransitGatewayAttachmentResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNetworkFirewallTransitGatewayAttachment",
}));

export type DeleteProxyError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes the specified Proxy.
 *
 * Detaches a Proxy configuration from a NAT Gateway.
 */
export const deleteProxy: API.OperationMethod<
  DeleteProxyRequest,
  DeleteProxyResponse,
  DeleteProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(151, __c18, 7) as any as S.Schema<DeleteProxyRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<DeleteProxyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProxy",
}));

export type DeleteProxyConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified ProxyConfiguration.
 */
export const deleteProxyConfiguration: API.OperationMethod<
  DeleteProxyConfigurationRequest,
  DeleteProxyConfigurationResponse,
  DeleteProxyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<DeleteProxyConfigurationRequest>,
  output: __S(154, __c19, 2) as any as S.Schema<DeleteProxyConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProxyConfiguration",
}));

export type DeleteProxyRuleGroupError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified ProxyRuleGroup.
 */
export const deleteProxyRuleGroup: API.OperationMethod<
  DeleteProxyRuleGroupRequest,
  DeleteProxyRuleGroupResponse,
  DeleteProxyRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155, __c19, 3) as any as S.Schema<DeleteProxyRuleGroupRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<DeleteProxyRuleGroupResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProxyRuleGroup",
}));

export type DeleteProxyRulesError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified ProxyRule(s). currently attached to a ProxyRuleGroup
 */
export const deleteProxyRules: API.OperationMethod<
  DeleteProxyRulesRequest,
  DeleteProxyRulesResponse,
  DeleteProxyRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157, __c19, 5) as any as S.Schema<DeleteProxyRulesRequest>,
  output: __S(158, __c19, 6) as any as S.Schema<DeleteProxyRulesResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProxyRules",
}));

export type DeleteResourcePolicyError =
  | InternalServerError
  | InvalidRequestException
  | InvalidResourcePolicyException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a resource policy that you created in a PutResourcePolicy request.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidResourcePolicyException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteRuleGroupError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Deletes the specified RuleGroup.
 */
export const deleteRuleGroup: API.OperationMethod<
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<DeleteRuleGroupRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<DeleteRuleGroupResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRuleGroup",
}));

export type DeleteTLSInspectionConfigurationError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified TLSInspectionConfiguration.
 */
export const deleteTLSInspectionConfiguration: API.OperationMethod<
  DeleteTLSInspectionConfigurationRequest,
  DeleteTLSInspectionConfigurationResponse,
  DeleteTLSInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<DeleteTLSInspectionConfigurationRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<DeleteTLSInspectionConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTLSInspectionConfiguration",
}));

export type DeleteVpcEndpointAssociationError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified VpcEndpointAssociation.
 *
 * You can check whether an endpoint association is
 * in use by reviewing the route tables for the Availability Zones where you have the endpoint subnet mapping.
 * You can retrieve the subnet mapping by calling DescribeVpcEndpointAssociation.
 * You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 * Availability Zone to remove the firewall endpoint for the association. When the route tables no longer use the firewall endpoint,
 * you can remove the endpoint association safely.
 */
export const deleteVpcEndpointAssociation: API.OperationMethod<
  DeleteVpcEndpointAssociationRequest,
  DeleteVpcEndpointAssociationResponse,
  DeleteVpcEndpointAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<DeleteVpcEndpointAssociationRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<DeleteVpcEndpointAssociationResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVpcEndpointAssociation",
}));

export type DescribeContainerAssociationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the configuration and status of a container association.
 */
export const describeContainerAssociation: API.OperationMethod<
  DescribeContainerAssociationRequest,
  DescribeContainerAssociationResponse,
  DescribeContainerAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<DescribeContainerAssociationRequest>,
  output: __S(167, __c20, 7) as any as S.Schema<DescribeContainerAssociationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeContainerAssociation",
}));

export type DescribeFirewallError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified firewall.
 */
export const describeFirewall: API.OperationMethod<
  DescribeFirewallRequest,
  DescribeFirewallResponse,
  DescribeFirewallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168, __c21, 0) as any as S.Schema<DescribeFirewallRequest>,
  output: __S(169, __c21, 1) as any as S.Schema<DescribeFirewallResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFirewall",
}));

export type DescribeFirewallMetadataError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the high-level information about a firewall, including the Availability Zones where the Firewall is
 * currently in use.
 */
export const describeFirewallMetadata: API.OperationMethod<
  DescribeFirewallMetadataRequest,
  DescribeFirewallMetadataResponse,
  DescribeFirewallMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<DescribeFirewallMetadataRequest>,
  output: __S(173, __c21, 5) as any as S.Schema<DescribeFirewallMetadataResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFirewallMetadata",
}));

export type DescribeFirewallPolicyError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified firewall policy.
 */
export const describeFirewallPolicy: API.OperationMethod<
  DescribeFirewallPolicyRequest,
  DescribeFirewallPolicyResponse,
  DescribeFirewallPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174, __c21, 6) as any as S.Schema<DescribeFirewallPolicyRequest>,
  output: __S(175, __c21, 7) as any as S.Schema<DescribeFirewallPolicyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFirewallPolicy",
}));

export type DescribeFlowOperationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns key information about a specific flow operation.
 */
export const describeFlowOperation: API.OperationMethod<
  DescribeFlowOperationRequest,
  DescribeFlowOperationResponse,
  DescribeFlowOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<DescribeFlowOperationRequest>,
  output: __S(180, __c22, 4) as any as S.Schema<DescribeFlowOperationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlowOperation",
}));

export type DescribeLoggingConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the logging configuration for the specified firewall.
 */
export const describeLoggingConfiguration: API.OperationMethod<
  DescribeLoggingConfigurationRequest,
  DescribeLoggingConfigurationResponse,
  DescribeLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181, __c22, 5) as any as S.Schema<DescribeLoggingConfigurationRequest>,
  output: __S(186, __c23, 2) as any as S.Schema<DescribeLoggingConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoggingConfiguration",
}));

export type DescribeProxyError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified proxy.
 */
export const describeProxy: API.OperationMethod<
  DescribeProxyRequest,
  DescribeProxyResponse,
  DescribeProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<DescribeProxyRequest>,
  output: __S(189, __c23, 5) as any as S.Schema<DescribeProxyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProxy",
}));

export type DescribeProxyConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified proxy configuration.
 */
export const describeProxyConfiguration: API.OperationMethod<
  DescribeProxyConfigurationRequest,
  DescribeProxyConfigurationResponse,
  DescribeProxyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190, __c23, 6) as any as S.Schema<DescribeProxyConfigurationRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<DescribeProxyConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProxyConfiguration",
}));

export type DescribeProxyRuleError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified proxy configuration for the specified proxy rule group.
 */
export const describeProxyRule: API.OperationMethod<
  DescribeProxyRuleRequest,
  DescribeProxyRuleResponse,
  DescribeProxyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<DescribeProxyRuleRequest>,
  output: __S(192, __c24, 0) as any as S.Schema<DescribeProxyRuleResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProxyRule",
}));

export type DescribeProxyRuleGroupError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified proxy rule group.
 */
export const describeProxyRuleGroup: API.OperationMethod<
  DescribeProxyRuleGroupRequest,
  DescribeProxyRuleGroupResponse,
  DescribeProxyRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<DescribeProxyRuleGroupRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<DescribeProxyRuleGroupResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProxyRuleGroup",
}));

export type DescribeResourcePolicyError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a resource policy that you created in a PutResourcePolicy request.
 */
export const describeResourcePolicy: API.OperationMethod<
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<DescribeResourcePolicyRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<DescribeResourcePolicyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourcePolicy",
}));

export type DescribeRuleGroupError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified rule group.
 */
export const describeRuleGroup: API.OperationMethod<
  DescribeRuleGroupRequest,
  DescribeRuleGroupResponse,
  DescribeRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<DescribeRuleGroupRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<DescribeRuleGroupResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRuleGroup",
}));

export type DescribeRuleGroupMetadataError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * High-level information about a rule group, returned by operations like create and describe.
 * You can use the information provided in the metadata to retrieve and manage a rule group.
 * You can retrieve all objects for a rule group by calling DescribeRuleGroup.
 */
export const describeRuleGroupMetadata: API.OperationMethod<
  DescribeRuleGroupMetadataRequest,
  DescribeRuleGroupMetadataResponse,
  DescribeRuleGroupMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<DescribeRuleGroupMetadataRequest>,
  output: __S(199, __c24, 7) as any as S.Schema<DescribeRuleGroupMetadataResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRuleGroupMetadata",
}));

export type DescribeRuleGroupSummaryError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns detailed information for a stateful rule group.
 *
 * For active threat defense Amazon Web Services managed rule groups, this operation provides insight into the protections enabled by the rule group, based on Suricata rule metadata fields. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups.
 *
 * To modify how threat information appears in summaries, use the `SummaryConfiguration` parameter in UpdateRuleGroup.
 */
export const describeRuleGroupSummary: API.OperationMethod<
  DescribeRuleGroupSummaryRequest,
  DescribeRuleGroupSummaryResponse,
  DescribeRuleGroupSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200, __c25, 0) as any as S.Schema<DescribeRuleGroupSummaryRequest>,
  output: __S(204, __c25, 4) as any as S.Schema<DescribeRuleGroupSummaryResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRuleGroupSummary",
}));

export type DescribeTLSInspectionConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data objects for the specified TLS inspection configuration.
 */
export const describeTLSInspectionConfiguration: API.OperationMethod<
  DescribeTLSInspectionConfigurationRequest,
  DescribeTLSInspectionConfigurationResponse,
  DescribeTLSInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205, __c25, 5) as any as S.Schema<DescribeTLSInspectionConfigurationRequest>,
  output: __S(206, __c25, 6) as any as S.Schema<DescribeTLSInspectionConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTLSInspectionConfiguration",
}));

export type DescribeVpcEndpointAssociationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the data object for the specified VPC endpoint association.
 */
export const describeVpcEndpointAssociation: API.OperationMethod<
  DescribeVpcEndpointAssociationRequest,
  DescribeVpcEndpointAssociationResponse,
  DescribeVpcEndpointAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207, __c25, 7) as any as S.Schema<DescribeVpcEndpointAssociationRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<DescribeVpcEndpointAssociationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVpcEndpointAssociation",
}));

export type DetachRuleGroupsFromProxyConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Detaches ProxyRuleGroup resources from a ProxyConfiguration
 *
 * A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.
 */
export const detachRuleGroupsFromProxyConfiguration: API.OperationMethod<
  DetachRuleGroupsFromProxyConfigurationRequest,
  DetachRuleGroupsFromProxyConfigurationResponse,
  DetachRuleGroupsFromProxyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<DetachRuleGroupsFromProxyConfigurationRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<DetachRuleGroupsFromProxyConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachRuleGroupsFromProxyConfiguration",
}));

export type DisassociateAvailabilityZonesError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes the specified Availability Zone associations from a transit gateway-attached firewall. This removes the firewall endpoints from these Availability Zones and stops traffic filtering in those zones. Before removing an Availability Zone, ensure you've updated your transit gateway route tables to redirect traffic appropriately.
 *
 * If `AvailabilityZoneChangeProtection` is enabled, you must first disable it using UpdateAvailabilityZoneChangeProtection.
 *
 * To verify the status of your Availability Zone changes, use DescribeFirewall.
 */
export const disassociateAvailabilityZones: API.OperationMethod<
  DisassociateAvailabilityZonesRequest,
  DisassociateAvailabilityZonesResponse,
  DisassociateAvailabilityZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209, __c26, 1) as any as S.Schema<DisassociateAvailabilityZonesRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<DisassociateAvailabilityZonesResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAvailabilityZones",
}));

export type DisassociateSubnetsError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes the specified subnet associations from the firewall. This removes the
 * firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 * were providing.
 */
export const disassociateSubnets: API.OperationMethod<
  DisassociateSubnetsRequest,
  DisassociateSubnetsResponse,
  DisassociateSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210, __c26, 2) as any as S.Schema<DisassociateSubnetsRequest>,
  output: __S(211, __c26, 3) as any as S.Schema<DisassociateSubnetsResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSubnets",
}));

export type GetAnalysisReportResultsError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The results of a `COMPLETED` analysis report generated with StartAnalysisReport.
 *
 * For more information, see AnalysisTypeReportResult.
 */
export const getAnalysisReportResults: API.PaginatedOperationMethod<
  GetAnalysisReportResultsRequest,
  GetAnalysisReportResultsResponse,
  GetAnalysisReportResultsError,
  Credentials | HttpClient.HttpClient,
  AnalysisTypeReportResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(212, __c26, 4) as any as S.Schema<GetAnalysisReportResultsRequest>,
  output: __S(216, __c27, 0) as any as S.Schema<GetAnalysisReportResultsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnalysisReportResults",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AnalysisReportResults",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAnalysisReportsError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of all traffic analysis reports generated within the last 30 days.
 */
export const listAnalysisReports: API.PaginatedOperationMethod<
  ListAnalysisReportsRequest,
  ListAnalysisReportsResponse,
  ListAnalysisReportsError,
  Credentials | HttpClient.HttpClient,
  AnalysisReport
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(217, __c27, 1) as any as S.Schema<ListAnalysisReportsRequest>,
  output: __S(220, __c27, 4) as any as S.Schema<ListAnalysisReportsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnalysisReports",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AnalysisReports",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListContainerAssociationsError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the container associations in your account and Region. Use the `NextToken`
 * parameter in subsequent requests to retrieve additional results.
 */
export const listContainerAssociations: API.PaginatedOperationMethod<
  ListContainerAssociationsRequest,
  ListContainerAssociationsResponse,
  ListContainerAssociationsError,
  Credentials | HttpClient.HttpClient,
  ContainerAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<ListContainerAssociationsRequest>,
  output: __S(224, __c28, 0) as any as S.Schema<ListContainerAssociationsResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContainerAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ContainerAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFirewallPoliciesError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the firewall policies that you have defined. Depending on
 * your setting for max results and the number of firewall policies, a single call might not
 * return the full list.
 */
export const listFirewallPolicies: API.PaginatedOperationMethod<
  ListFirewallPoliciesRequest,
  ListFirewallPoliciesResponse,
  ListFirewallPoliciesError,
  Credentials | HttpClient.HttpClient,
  FirewallPolicyMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(225, __c28, 1) as any as S.Schema<ListFirewallPoliciesRequest>,
  output: __S(228, __c28, 4) as any as S.Schema<ListFirewallPoliciesResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFirewallPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FirewallPolicies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFirewallsError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the firewalls that you have defined. If you provide VPC
 * identifiers in your request, this returns only the firewalls for those VPCs.
 *
 * Depending on your setting for max results and the number of firewalls, a single call
 * might not return the full list.
 */
export const listFirewalls: API.PaginatedOperationMethod<
  ListFirewallsRequest,
  ListFirewallsResponse,
  ListFirewallsError,
  Credentials | HttpClient.HttpClient,
  FirewallMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(229, __c28, 5) as any as S.Schema<ListFirewallsRequest>,
  output: __S(232, __c29, 0) as any as S.Schema<ListFirewallsResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFirewalls",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Firewalls",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFlowOperationResultsError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the results of a specific flow operation.
 *
 * Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.
 *
 * A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.
 */
export const listFlowOperationResults: API.PaginatedOperationMethod<
  ListFlowOperationResultsRequest,
  ListFlowOperationResultsResponse,
  ListFlowOperationResultsError,
  Credentials | HttpClient.HttpClient,
  Flow
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(233, __c29, 1) as any as S.Schema<ListFlowOperationResultsRequest>,
  output: __S(236, __c29, 4) as any as S.Schema<ListFlowOperationResultsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowOperationResults",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Flows",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFlowOperationsError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of all flow operations ran in a specific firewall.
 * You can optionally narrow the request scope by specifying the operation type or Availability Zone associated with a firewall's flow operations.
 *
 * Flow operations let you manage the flows tracked in the flow table, also known as the firewall table.
 *
 * A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.
 */
export const listFlowOperations: API.PaginatedOperationMethod<
  ListFlowOperationsRequest,
  ListFlowOperationsResponse,
  ListFlowOperationsError,
  Credentials | HttpClient.HttpClient,
  FlowOperationMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(237, __c29, 5) as any as S.Schema<ListFlowOperationsRequest>,
  output: __S(240, __c30, 0) as any as S.Schema<ListFlowOperationsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowOperations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FlowOperations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProxiesError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the proxies that you have defined. Depending on
 * your setting for max results and the number of proxies, a single call might not
 * return the full list.
 */
export const listProxies: API.PaginatedOperationMethod<
  ListProxiesRequest,
  ListProxiesResponse,
  ListProxiesError,
  Credentials | HttpClient.HttpClient,
  ProxyMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<ListProxiesRequest>,
  output: __S(242, __c30, 2) as any as S.Schema<ListProxiesResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProxies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Proxies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProxyConfigurationsError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the proxy configuration that you have defined. Depending on
 * your setting for max results and the number of proxy configurations, a single call might not
 * return the full list.
 */
export const listProxyConfigurations: API.PaginatedOperationMethod<
  ListProxyConfigurationsRequest,
  ListProxyConfigurationsResponse,
  ListProxyConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ProxyConfigurationMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(243, __c30, 3) as any as S.Schema<ListProxyConfigurationsRequest>,
  output: __S(246, __c30, 6) as any as S.Schema<ListProxyConfigurationsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProxyConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProxyConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProxyRuleGroupsError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the proxy rule groups that you have defined. Depending on
 * your setting for max results and the number of proxy rule groups, a single call might not
 * return the full list.
 */
export const listProxyRuleGroups: API.PaginatedOperationMethod<
  ListProxyRuleGroupsRequest,
  ListProxyRuleGroupsResponse,
  ListProxyRuleGroupsError,
  Credentials | HttpClient.HttpClient,
  ProxyRuleGroupMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(247, __c30, 7) as any as S.Schema<ListProxyRuleGroupsRequest>,
  output: __S(248, __c31, 0) as any as S.Schema<ListProxyRuleGroupsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProxyRuleGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProxyRuleGroups",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRuleGroupsError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the rule groups that you have defined. Depending on your
 * setting for max results and the number of rule groups, a single call might not return the
 * full list.
 */
export const listRuleGroups: API.PaginatedOperationMethod<
  ListRuleGroupsRequest,
  ListRuleGroupsResponse,
  ListRuleGroupsError,
  Credentials | HttpClient.HttpClient,
  RuleGroupMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(249, __c31, 1) as any as S.Schema<ListRuleGroupsRequest>,
  output: __S(252, __c31, 4) as any as S.Schema<ListRuleGroupsResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RuleGroups",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the tags associated with the specified resource. Tags are key:value pairs that
 * you can use to categorize and manage your resources, for purposes like billing. For
 * example, you might set the tag key to "customer" and the value to the customer name or ID.
 * You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
 * resource.
 *
 * You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall
 * policies, and rule groups.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(253, __c31, 5) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(254, __c31, 6) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Tags",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTLSInspectionConfigurationsError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.
 */
export const listTLSInspectionConfigurations: API.PaginatedOperationMethod<
  ListTLSInspectionConfigurationsRequest,
  ListTLSInspectionConfigurationsResponse,
  ListTLSInspectionConfigurationsError,
  Credentials | HttpClient.HttpClient,
  TLSInspectionConfigurationMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(255, __c31, 7) as any as S.Schema<ListTLSInspectionConfigurationsRequest>,
  output: __S(257, __c32, 1) as any as S.Schema<ListTLSInspectionConfigurationsResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTLSInspectionConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TLSInspectionConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListVpcEndpointAssociationsError =
  | InternalServerError
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the metadata for the VPC endpoint associations that you have defined. If you specify a fireawll,
 * this returns only the endpoint associations for that firewall.
 *
 * Depending on your setting for max results and the number of associations, a single call
 * might not return the full list.
 */
export const listVpcEndpointAssociations: API.PaginatedOperationMethod<
  ListVpcEndpointAssociationsRequest,
  ListVpcEndpointAssociationsResponse,
  ListVpcEndpointAssociationsError,
  Credentials | HttpClient.HttpClient,
  VpcEndpointAssociationMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(258, __c32, 2) as any as S.Schema<ListVpcEndpointAssociationsRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<ListVpcEndpointAssociationsResponse>,
  errors: [InternalServerError, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVpcEndpointAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "VpcEndpointAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutResourcePolicyError =
  | InternalServerError
  | InvalidRequestException
  | InvalidResourcePolicyException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates or updates an IAM policy for your rule group, firewall policy, or firewall. Use this to share these resources between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall.
 *
 * For information about using sharing with Network Firewall resources, see
 * Sharing Network Firewall resources in the *Network Firewall Developer Guide*.
 *
 * Use this operation to create or update a resource policy for your Network Firewall rule group, firewall policy, or firewall. In the resource policy, you specify the accounts that you want to share the Network Firewall resource with and the operations that you want the accounts to be able to perform.
 *
 * When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared resource.
 *
 * - GetResourceShareInvitations - Returns the Amazon Resource Names (ARNs) of the resource share invitations.
 *
 * - AcceptResourceShareInvitation - Accepts the share invitation for a specified resource share.
 *
 * For additional information about resource sharing using RAM, see Resource Access Manager User Guide.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(262, __c32, 6) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidResourcePolicyException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RejectNetworkFirewallTransitGatewayAttachmentError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Rejects a transit gateway attachment request for Network Firewall. When you reject the attachment request, Network Firewall cancels the creation of routing components between the transit gateway and firewall endpoints.
 *
 * Only the transit gateway owner can reject the attachment. After rejection, no traffic will flow through the firewall endpoints for this attachment.
 *
 * Use DescribeFirewall to monitor the rejection status. To accept the attachment instead of rejecting it, use AcceptNetworkFirewallTransitGatewayAttachment.
 *
 * Once rejected, you cannot reverse this action. To establish connectivity, you must create a new transit gateway-attached firewall.
 */
export const rejectNetworkFirewallTransitGatewayAttachment: API.OperationMethod<
  RejectNetworkFirewallTransitGatewayAttachmentRequest,
  RejectNetworkFirewallTransitGatewayAttachmentResponse,
  RejectNetworkFirewallTransitGatewayAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(
    263,
    __c32,
    7,
  ) as any as S.Schema<RejectNetworkFirewallTransitGatewayAttachmentRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<RejectNetworkFirewallTransitGatewayAttachmentResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectNetworkFirewallTransitGatewayAttachment",
}));

export type StartAnalysisReportError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Generates a traffic analysis report for the timeframe and traffic type you specify.
 *
 * For information on the contents of a traffic analysis report, see AnalysisReport.
 */
export const startAnalysisReport: API.OperationMethod<
  StartAnalysisReportRequest,
  StartAnalysisReportResponse,
  StartAnalysisReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264, __c33, 0) as any as S.Schema<StartAnalysisReportRequest>,
  output: __S(265, __c33, 1) as any as S.Schema<StartAnalysisReportResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAnalysisReport",
}));

export type StartFlowCaptureError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Begins capturing the flows in a firewall, according to the filters you define.
 * Captures are similar, but not identical to snapshots. Capture operations provide visibility into flows that are not closed and are tracked by a firewall's flow table.
 * Unlike snapshots, captures are a time-boxed view.
 *
 * A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules.
 * For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.
 *
 * To avoid encountering operation limits, you should avoid starting captures with broad filters, like wide IP ranges.
 * Instead, we recommend you define more specific criteria with `FlowFilters`, like narrow IP ranges, ports, or protocols.
 */
export const startFlowCapture: API.OperationMethod<
  StartFlowCaptureRequest,
  StartFlowCaptureResponse,
  StartFlowCaptureError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<StartFlowCaptureRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<StartFlowCaptureResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFlowCapture",
}));

export type StartFlowFlushError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Begins the flushing of traffic from the firewall, according to the filters you define.
 * When the operation starts, impacted flows are temporarily marked as timed out before the Suricata engine prunes,
 * or flushes, the flows from the firewall table.
 *
 * While the flush completes, impacted flows are processed as midstream traffic. This may result in a
 * temporary increase in midstream traffic metrics. We recommend that you double check your stream exception policy
 * before you perform a flush operation.
 */
export const startFlowFlush: API.OperationMethod<
  StartFlowFlushRequest,
  StartFlowFlushResponse,
  StartFlowFlushError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(268, __c33, 4) as any as S.Schema<StartFlowFlushRequest>,
  output: __S(267, __c33, 3) as any as S.Schema<StartFlowFlushResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFlowFlush",
}));

export type TagResourceError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds the specified tags to the specified resource. Tags are key:value pairs that you can
 * use to categorize and manage your resources, for purposes like billing. For example, you
 * might set the tag key to "customer" and the value to the customer name or ID. You can
 * specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
 *
 * You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall
 * policies, and rule groups.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(269, __c33, 5) as any as S.Schema<TagResourceRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes the tags with the specified keys from the specified resource. Tags are key:value
 * pairs that you can use to categorize and manage your resources, for purposes like billing.
 * For example, you might set the tag key to "customer" and the value to the customer name or
 * ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
 * resource.
 *
 * You can manage tags for the Amazon Web Services resources that you manage through Network Firewall:
 * firewalls, firewall policies, and rule groups.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<UntagResourceRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAvailabilityZoneChangeProtectionError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ResourceOwnerCheckException
  | ThrottlingException
  | CommonErrors;
/**
 * Modifies the `AvailabilityZoneChangeProtection` setting for a transit gateway-attached firewall. When enabled, this setting prevents accidental changes to the firewall's Availability Zone configuration. This helps protect against disrupting traffic flow in production environments.
 *
 * When enabled, you must disable this protection before using AssociateAvailabilityZones or DisassociateAvailabilityZones to modify the firewall's Availability Zone configuration.
 */
export const updateAvailabilityZoneChangeProtection: API.OperationMethod<
  UpdateAvailabilityZoneChangeProtectionRequest,
  UpdateAvailabilityZoneChangeProtectionResponse,
  UpdateAvailabilityZoneChangeProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<UpdateAvailabilityZoneChangeProtectionRequest>,
  output: __S(272, __c34, 0) as any as S.Schema<UpdateAvailabilityZoneChangeProtectionResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ResourceOwnerCheckException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAvailabilityZoneChangeProtection",
}));

export type UpdateContainerAssociationError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the monitoring configurations and description of a container association. You can't change the container
 * type after creation. Provide an update token to enable optimistic concurrency control.
 */
export const updateContainerAssociation: API.OperationMethod<
  UpdateContainerAssociationRequest,
  UpdateContainerAssociationResponse,
  UpdateContainerAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(273, __c34, 1) as any as S.Schema<UpdateContainerAssociationRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<UpdateContainerAssociationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContainerAssociation",
}));

export type UpdateFirewallAnalysisSettingsError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Enables specific types of firewall analysis on a specific firewall you define.
 */
export const updateFirewallAnalysisSettings: API.OperationMethod<
  UpdateFirewallAnalysisSettingsRequest,
  UpdateFirewallAnalysisSettingsResponse,
  UpdateFirewallAnalysisSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<UpdateFirewallAnalysisSettingsRequest>,
  output: __S(275, __c34, 3) as any as S.Schema<UpdateFirewallAnalysisSettingsResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFirewallAnalysisSettings",
}));

export type UpdateFirewallDeleteProtectionError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ResourceOwnerCheckException
  | ThrottlingException
  | CommonErrors;
/**
 * Modifies the flag, `DeleteProtection`, which indicates whether it is possible
 * to delete the firewall. If the flag is set to `TRUE`, the firewall is protected
 * against deletion. This setting helps protect against accidentally deleting a firewall
 * that's in use.
 */
export const updateFirewallDeleteProtection: API.OperationMethod<
  UpdateFirewallDeleteProtectionRequest,
  UpdateFirewallDeleteProtectionResponse,
  UpdateFirewallDeleteProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276, __c34, 4) as any as S.Schema<UpdateFirewallDeleteProtectionRequest>,
  output: __S(277, __c34, 5) as any as S.Schema<UpdateFirewallDeleteProtectionResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ResourceOwnerCheckException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFirewallDeleteProtection",
}));

export type UpdateFirewallDescriptionError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Modifies the description for the specified firewall. Use the description to help you
 * identify the firewall when you're working with it.
 */
export const updateFirewallDescription: API.OperationMethod<
  UpdateFirewallDescriptionRequest,
  UpdateFirewallDescriptionResponse,
  UpdateFirewallDescriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<UpdateFirewallDescriptionRequest>,
  output: __S(279, __c34, 7) as any as S.Schema<UpdateFirewallDescriptionResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFirewallDescription",
}));

export type UpdateFirewallEncryptionConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ResourceOwnerCheckException
  | ThrottlingException
  | CommonErrors;
/**
 * A complex type that contains settings for encryption of your firewall resources.
 */
export const updateFirewallEncryptionConfiguration: API.OperationMethod<
  UpdateFirewallEncryptionConfigurationRequest,
  UpdateFirewallEncryptionConfigurationResponse,
  UpdateFirewallEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<UpdateFirewallEncryptionConfigurationRequest>,
  output: __S(281, __c35, 1) as any as S.Schema<UpdateFirewallEncryptionConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ResourceOwnerCheckException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFirewallEncryptionConfiguration",
}));

export type UpdateFirewallPolicyError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the properties of the specified firewall policy.
 */
export const updateFirewallPolicy: API.OperationMethod<
  UpdateFirewallPolicyRequest,
  UpdateFirewallPolicyResponse,
  UpdateFirewallPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282, __c35, 2) as any as S.Schema<UpdateFirewallPolicyRequest>,
  output: __S(70, __c8, 6) as any as S.Schema<UpdateFirewallPolicyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFirewallPolicy",
}));

export type UpdateFirewallPolicyChangeProtectionError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ResourceOwnerCheckException
  | ThrottlingException
  | CommonErrors;
/**
 * Modifies the flag, `ChangeProtection`, which indicates whether it
 * is possible to change the firewall. If the flag is set to `TRUE`, the firewall is protected
 * from changes. This setting helps protect against accidentally changing a firewall that's in use.
 */
export const updateFirewallPolicyChangeProtection: API.OperationMethod<
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyChangeProtectionResponse,
  UpdateFirewallPolicyChangeProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<UpdateFirewallPolicyChangeProtectionRequest>,
  output: __S(284, __c35, 4) as any as S.Schema<UpdateFirewallPolicyChangeProtectionResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ResourceOwnerCheckException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFirewallPolicyChangeProtection",
}));

export type UpdateLoggingConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | LogDestinationPermissionException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Sets the logging configuration for the specified firewall.
 *
 * To change the logging configuration, retrieve the LoggingConfiguration by calling DescribeLoggingConfiguration, then change it and provide
 * the modified object to this update call. You must change the logging configuration one
 * LogDestinationConfig at a time inside the retrieved LoggingConfiguration object.
 *
 * You can perform only one of the following actions in any call to
 * `UpdateLoggingConfiguration`:
 *
 * - Create a new log destination object by adding a single
 * `LogDestinationConfig` array element to
 * `LogDestinationConfigs`.
 *
 * - Delete a log destination object by removing a single
 * `LogDestinationConfig` array element from
 * `LogDestinationConfigs`.
 *
 * - Change the `LogDestination` setting in a single
 * `LogDestinationConfig` array element.
 *
 * You can't change the `LogDestinationType` or `LogType` in a
 * `LogDestinationConfig`. To change these settings, delete the existing
 * `LogDestinationConfig` object and create a new one, using two separate calls
 * to this update operation.
 */
export const updateLoggingConfiguration: API.OperationMethod<
  UpdateLoggingConfigurationRequest,
  UpdateLoggingConfigurationResponse,
  UpdateLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285, __c35, 5) as any as S.Schema<UpdateLoggingConfigurationRequest>,
  output: __S(286, __c35, 6) as any as S.Schema<UpdateLoggingConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    LogDestinationPermissionException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLoggingConfiguration",
}));

export type UpdateProxyError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Updates the properties of the specified proxy.
 */
export const updateProxy: API.OperationMethod<
  UpdateProxyRequest,
  UpdateProxyResponse,
  UpdateProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287, __c35, 7) as any as S.Schema<UpdateProxyRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<UpdateProxyResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxy",
}));

export type UpdateProxyConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the properties of the specified proxy configuration.
 */
export const updateProxyConfiguration: API.OperationMethod<
  UpdateProxyConfigurationRequest,
  UpdateProxyConfigurationResponse,
  UpdateProxyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288, __c36, 0) as any as S.Schema<UpdateProxyConfigurationRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<UpdateProxyConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxyConfiguration",
}));

export type UpdateProxyRuleError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the properties of the specified proxy rule.
 */
export const updateProxyRule: API.OperationMethod<
  UpdateProxyRuleRequest,
  UpdateProxyRuleResponse,
  UpdateProxyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(289, __c36, 1) as any as S.Schema<UpdateProxyRuleRequest>,
  output: __S(290, __c36, 2) as any as S.Schema<UpdateProxyRuleResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxyRule",
}));

export type UpdateProxyRuleGroupPrioritiesError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates proxy rule group priorities within a proxy configuration.
 */
export const updateProxyRuleGroupPriorities: API.OperationMethod<
  UpdateProxyRuleGroupPrioritiesRequest,
  UpdateProxyRuleGroupPrioritiesResponse,
  UpdateProxyRuleGroupPrioritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(293, __c36, 5) as any as S.Schema<UpdateProxyRuleGroupPrioritiesRequest>,
  output: __S(296, __c37, 0) as any as S.Schema<UpdateProxyRuleGroupPrioritiesResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxyRuleGroupPriorities",
}));

export type UpdateProxyRulePrioritiesError =
  | InternalServerError
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates proxy rule priorities within a proxy rule group.
 */
export const updateProxyRulePriorities: API.OperationMethod<
  UpdateProxyRulePrioritiesRequest,
  UpdateProxyRulePrioritiesResponse,
  UpdateProxyRulePrioritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(299, __c37, 3) as any as S.Schema<UpdateProxyRulePrioritiesRequest>,
  output: __S(300, __c37, 4) as any as S.Schema<UpdateProxyRulePrioritiesResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxyRulePriorities",
}));

export type UpdateProxySettingsError =
  | InternalServerError
  | InvalidOperationException
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ResourceOwnerCheckException
  | ThrottlingException
  | CommonErrors;
/**
 * Modifies the proxy listener configuration of a proxy mode firewall. Proxy mode firewalls are created with `NoSourcePreservation` set to `TRUE`. Use this operation to change the ports and protocols on which the firewall's proxy listens for traffic.
 */
export const updateProxySettings: API.OperationMethod<
  UpdateProxySettingsRequest,
  UpdateProxySettingsResponse,
  UpdateProxySettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(301, __c37, 5) as any as S.Schema<UpdateProxySettingsRequest>,
  output: __S(302, __c37, 6) as any as S.Schema<UpdateProxySettingsResponse>,
  errors: [
    InternalServerError,
    InvalidOperationException,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ResourceOwnerCheckException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxySettings",
}));

export type UpdateRuleGroupError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the rule settings for the specified rule group. You use a rule group by
 * reference in one or more firewall policies. When you modify a rule group, you modify all
 * firewall policies that use the rule group.
 *
 * To update a rule group, first call DescribeRuleGroup to retrieve the
 * current RuleGroup object, update the object as needed, and then provide
 * the updated object to this call.
 */
export const updateRuleGroup: API.OperationMethod<
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateRuleGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(303, __c37, 7) as any as S.Schema<UpdateRuleGroupRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<UpdateRuleGroupResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRuleGroup",
}));

export type UpdateSubnetChangeProtectionError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ResourceOwnerCheckException
  | ThrottlingException
  | CommonErrors;
/**
 *
 */
export const updateSubnetChangeProtection: API.OperationMethod<
  UpdateSubnetChangeProtectionRequest,
  UpdateSubnetChangeProtectionResponse,
  UpdateSubnetChangeProtectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(304, __c38, 0) as any as S.Schema<UpdateSubnetChangeProtectionRequest>,
  output: __S(305, __c38, 1) as any as S.Schema<UpdateSubnetChangeProtectionResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ResourceOwnerCheckException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSubnetChangeProtection",
}));

export type UpdateTLSInspectionConfigurationError =
  | InternalServerError
  | InvalidRequestException
  | InvalidTokenException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by
 * referencing it in one or more firewall policies. When you modify a TLS inspection configuration, you modify all
 * firewall policies that use the TLS inspection configuration.
 *
 * To update a TLS inspection configuration, first call DescribeTLSInspectionConfiguration to retrieve the
 * current TLSInspectionConfiguration object, update the object as needed, and then provide
 * the updated object to this call.
 */
export const updateTLSInspectionConfiguration: API.OperationMethod<
  UpdateTLSInspectionConfigurationRequest,
  UpdateTLSInspectionConfigurationResponse,
  UpdateTLSInspectionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306, __c38, 2) as any as S.Schema<UpdateTLSInspectionConfigurationRequest>,
  output: __S(138, __c17, 2) as any as S.Schema<UpdateTLSInspectionConfigurationResponse>,
  errors: [
    InternalServerError,
    InvalidRequestException,
    InvalidTokenException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTLSInspectionConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TransitGatewayAttachmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcceptNetworkFirewallTransitGatewayAttachmentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TransitGatewayAttachmentId: S.String,
          TransitGatewayAttachmentStatus: S.String,
        }),
      ).annotate({
        identifier: "AcceptNetworkFirewallTransitGatewayAttachmentResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ AvailabilityZone: S.String })).annotate({
        identifier: "AvailabilityZoneMapping",
      });
    case 3:
      return S.Array(__S(2, __c0, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          AvailabilityZoneMappings: __S(3, __c0, 3),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateAvailabilityZonesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          AvailabilityZoneMappings: S.optional(__S(3, __c0, 3)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssociateAvailabilityZonesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          FirewallPolicyArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateFirewallPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          FirewallPolicyArn: S.optional(S.String),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssociateFirewallPolicyResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SubnetId: S.String, IPAddressType: S.optional(S.String) }),
      ).annotate({ identifier: "SubnetMapping" });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          SubnetMappings: __S(9, __c1, 1),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AssociateSubnetsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          SubnetMappings: S.optional(__S(9, __c1, 1)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociateSubnetsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          InsertPosition: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProxyRuleGroupAttachment" });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          RuleGroups: __S(13, __c1, 5),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AttachRuleGroupsToProxyConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
          Type: S.optional(S.String),
          Priority: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ProxyConfigRuleGroup" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PreDNS: S.optional(S.String),
          PreREQUEST: S.optional(S.String),
          PostRESPONSE: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProxyConfigDefaultRulePhaseActionsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(18, __c2, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          Description: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeleteTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RuleGroups: S.optional(__S(16, __c2, 0)),
          DefaultRulePhaseActions: S.optional(__S(17, __c2, 1)),
          Tags: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "ProxyConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProxyConfiguration: S.optional(__S(20, __c2, 4)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AttachRuleGroupsToProxyConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ClusterArn: S.String, AttributeFilters: S.optional(__S(19, __c2, 3)) }),
      ).annotate({
        identifier: "ContainerMonitoringConfiguration",
      });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.String,
          Description: S.optional(S.String),
          Type: S.String,
          ContainerMonitoringConfigurations: __S(23, __c2, 7),
          Tags: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateContainerAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.optional(S.String),
          ContainerAssociationArn: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          ContainerMonitoringConfigurations: S.optional(__S(23, __c2, 7)),
          Status: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateContainerAssociationResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ KeyId: S.optional(S.String), Type: S.String })).annotate({
        identifier: "EncryptionConfiguration",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() => S.Struct({ NatGatewayId: S.String })).annotate({
        identifier: "NatGatewayMapping",
      });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ Port: S.optional(S.Number), Type: S.optional(S.String) }),
      ).annotate({ identifier: "ListenerProperty" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ListenerProperties: __S(31, __c3, 7) })).annotate({
        identifier: "ProxySettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ VpcId: S.String, SubnetMappings: __S(9, __c1, 1) }),
      ).annotate({ identifier: "VpcEndpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FirewallName: S.String,
          FirewallPolicyArn: S.String,
          VpcId: S.optional(S.String),
          SubnetMappings: S.optional(__S(9, __c1, 1)),
          DeleteProtection: S.optional(S.Boolean),
          SubnetChangeProtection: S.optional(S.Boolean),
          FirewallPolicyChangeProtection: S.optional(S.Boolean),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          EnabledAnalysisTypes: S.optional(__S(27, __c3, 3)),
          TransitGatewayId: S.optional(S.String),
          AvailabilityZoneMappings: S.optional(__S(3, __c0, 3)),
          AvailabilityZoneChangeProtection: S.optional(S.Boolean),
          NatGatewayMappings: S.optional(__S(29, __c3, 5)),
          ProxySettings: S.optional(__S(32, __c4, 0)),
          NoSourcePreservation: S.optional(S.Boolean),
          VpcEndpoint: S.optional(__S(33, __c4, 1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateFirewallRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FirewallName: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallPolicyArn: S.String,
          VpcId: S.String,
          SubnetMappings: __S(9, __c1, 1),
          DeleteProtection: S.optional(S.Boolean),
          SubnetChangeProtection: S.optional(S.Boolean),
          FirewallPolicyChangeProtection: S.optional(S.Boolean),
          Description: S.optional(S.String),
          FirewallId: S.String,
          Tags: S.optional(__S(19, __c2, 3)),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          NumberOfAssociations: S.optional(S.Number),
          EnabledAnalysisTypes: S.optional(__S(27, __c3, 3)),
          TransitGatewayId: S.optional(S.String),
          TransitGatewayOwnerAccountId: S.optional(S.String),
          AvailabilityZoneMappings: S.optional(__S(3, __c0, 3)),
          AvailabilityZoneChangeProtection: S.optional(S.Boolean),
          NatGatewayMappings: S.optional(__S(29, __c3, 5)),
          ProxySettings: S.optional(__S(32, __c4, 0)),
          NoSourcePreservation: S.optional(S.Boolean),
          VpcEndpoint: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "Firewall" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SubnetId: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          DnsName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Attachment" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SyncStatus: S.optional(S.String),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "PerObjectStatus" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(37, __c4, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          NatGatewayId: S.String,
          Status: S.String,
          StatusMessage: S.optional(S.String),
          DnsName: S.optional(S.String),
        }),
      ).annotate({ identifier: "NatGatewayAttachment" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Attachment: S.optional(__S(36, __c4, 4)),
          Config: S.optional(__S(38, __c4, 6)),
          NatGatewayAttachments: S.optional(__S(40, __c5, 0)),
        }),
      ).annotate({ identifier: "SyncState" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(41, __c5, 1).pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ ResolvedCIDRCount: S.optional(S.Number) })).annotate({
        identifier: "IPSetMetadata",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(43, __c5, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailableCIDRCount: S.optional(S.Number),
          UtilizedCIDRCount: S.optional(S.Number),
          IPSetReferences: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({ identifier: "CIDRSummary" });
    case 6:
      return S.suspend(() => S.Struct({ CIDRs: S.optional(__S(45, __c5, 5)) })).annotate({
        identifier: "CapacityUsageSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttachmentId: S.optional(S.String),
          TransitGatewayAttachmentStatus: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TransitGatewayAttachmentSyncState",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.String,
          ConfigurationSyncStateSummary: S.String,
          SyncStates: S.optional(__S(42, __c5, 2)),
          CapacityUsageSummary: S.optional(__S(46, __c5, 6)),
          TransitGatewayAttachmentSyncState: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "FirewallStatus" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Firewall: S.optional(__S(35, __c4, 3)),
          FirewallStatus: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "CreateFirewallResponse" });
    case 2:
      return S.suspend(() => S.Struct({ ResourceArn: S.String, Priority: S.Number })).annotate({
        identifier: "StatelessRuleGroupReference",
      });
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() => S.Struct({ Value: S.String })).annotate({
        identifier: "Dimension",
      });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() => S.Struct({ Dimensions: __S(54, __c6, 6) })).annotate({
        identifier: "PublishMetricAction",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PublishMetricAction: S.optional(__S(55, __c6, 7)) }),
      ).annotate({ identifier: "ActionDefinition" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ActionName: S.String, ActionDefinition: __S(56, __c7, 0) }),
      ).annotate({ identifier: "CustomAction" });
    case 2:
      return S.Array(__S(57, __c7, 1));
    case 3:
      return S.suspend(() => S.Struct({ Action: S.optional(S.String) })).annotate({
        identifier: "StatefulRuleGroupOverride",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          Priority: S.optional(S.Number),
          Override: S.optional(__S(59, __c7, 3)),
          DeepThreatInspection: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "StatefulRuleGroupReference",
      });
    case 5:
      return S.Array(__S(60, __c7, 4));
    case 6:
      return S.suspend(() => S.Struct({ TcpIdleTimeoutSeconds: S.optional(S.Number) })).annotate({
        identifier: "FlowTimeouts",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleOrder: S.optional(S.String),
          StreamExceptionPolicy: S.optional(S.String),
          FlowTimeouts: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({ identifier: "StatefulEngineOptions" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Definition: __S(52, __c6, 4) })).annotate({
        identifier: "IPSet",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(64, __c8, 0).pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ RuleVariables: S.optional(__S(65, __c8, 1)) })).annotate({
        identifier: "PolicyVariables",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StatelessRuleGroupReferences: S.optional(__S(51, __c6, 3)),
          StatelessDefaultActions: __S(52, __c6, 4),
          StatelessFragmentDefaultActions: __S(52, __c6, 4),
          StatelessCustomActions: S.optional(__S(58, __c7, 2)),
          StatefulRuleGroupReferences: S.optional(__S(61, __c7, 5)),
          StatefulDefaultActions: S.optional(__S(52, __c6, 4)),
          StatefulEngineOptions: S.optional(__S(63, __c7, 7)),
          TLSInspectionConfigurationArn: S.optional(S.String),
          PolicyVariables: S.optional(__S(66, __c8, 2)),
          EnableTLSSessionHolding: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FirewallPolicy" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicyName: S.String,
          FirewallPolicy: __S(67, __c8, 3),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          DryRun: S.optional(S.Boolean),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateFirewallPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicyName: S.String,
          FirewallPolicyArn: S.String,
          FirewallPolicyId: S.String,
          Description: S.optional(S.String),
          FirewallPolicyStatus: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          ConsumedStatelessRuleCapacity: S.optional(S.Number),
          ConsumedStatefulRuleCapacity: S.optional(S.Number),
          ConsumedStatefulDomainCapacity: S.optional(S.Number),
          NumberOfAssociations: S.optional(S.Number),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "FirewallPolicyResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ UpdateToken: S.String, FirewallPolicyResponse: __S(69, __c8, 5) }),
      ).annotate({
        identifier: "CreateFirewallPolicyResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ Port: S.Number, Type: S.String })).annotate({
        identifier: "ListenerPropertyRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ PcaArn: S.optional(S.String), TlsInterceptMode: S.optional(S.String) }),
      ).annotate({
        identifier: "TlsInterceptPropertiesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProxyName: S.String,
          NatGatewayId: S.String,
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          ListenerProperties: S.optional(__S(72, __c9, 0)),
          TlsInterceptProperties: __S(73, __c9, 1),
          Tags: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProxyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ PcaArn: S.optional(S.String), TlsInterceptMode: S.optional(S.String) }),
      ).annotate({ identifier: "TlsInterceptProperties" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeleteTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureCode: S.optional(S.String),
          FailureMessage: S.optional(S.String),
          ProxyState: S.optional(S.String),
          ProxyModifyState: S.optional(S.String),
          NatGatewayId: S.optional(S.String),
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          ProxyName: S.optional(S.String),
          ProxyArn: S.optional(S.String),
          ListenerProperties: S.optional(__S(31, __c3, 7)),
          TlsInterceptProperties: S.optional(__S(75, __c9, 3)),
          Tags: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "Proxy" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Proxy: S.optional(__S(76, __c9, 4)), UpdateToken: S.optional(S.String) }),
      ).annotate({ identifier: "CreateProxyResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.String,
          Description: S.optional(S.String),
          RuleGroupNames: S.optional(__S(52, __c6, 4)),
          RuleGroupArns: S.optional(__S(52, __c6, 4)),
          DefaultRulePhaseActions: __S(17, __c2, 1),
          Tags: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateProxyConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConditionOperator: S.optional(S.String),
          ConditionKey: S.optional(S.String),
          ConditionValues: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "ProxyRuleCondition" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79, __c9, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleName: S.optional(S.String),
          Description: S.optional(S.String),
          Action: S.optional(S.String),
          Conditions: S.optional(__S(80, __c10, 0)),
        }),
      ).annotate({ identifier: "ProxyRule" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          PreDNS: S.optional(__S(82, __c10, 2)),
          PreREQUEST: S.optional(__S(82, __c10, 2)),
          PostRESPONSE: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({ identifier: "ProxyRulesByRequestPhase" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.String,
          Description: S.optional(S.String),
          Rules: S.optional(__S(83, __c10, 3)),
          Tags: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateProxyRuleGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeleteTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Rules: S.optional(__S(83, __c10, 3)),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "ProxyRuleGroup" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroup: S.optional(__S(85, __c10, 5)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateProxyRuleGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleName: S.optional(S.String),
          Description: S.optional(S.String),
          Action: S.optional(S.String),
          Conditions: S.optional(__S(80, __c10, 0)),
          InsertPosition: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CreateProxyRule" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PreDNS: S.optional(__S(88, __c11, 0)),
          PreREQUEST: S.optional(__S(88, __c11, 0)),
          PostRESPONSE: S.optional(__S(88, __c11, 0)),
        }),
      ).annotate({
        identifier: "CreateProxyRulesByRequestPhase",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupArn: S.optional(S.String),
          ProxyRuleGroupName: S.optional(S.String),
          Rules: __S(89, __c11, 1),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProxyRulesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroup: S.optional(__S(85, __c10, 5)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateProxyRulesResponse" });
    case 4:
      return S.suspend(() => S.Struct({ Definition: S.optional(__S(52, __c6, 4)) })).annotate({
        identifier: "PortSet",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(92, __c11, 4).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({ IPSets: S.optional(__S(65, __c8, 1)), PortSets: S.optional(__S(93, __c11, 5)) }),
      ).annotate({ identifier: "RuleVariables" });
    case 7:
      return S.suspend(() => S.Struct({ ReferenceArn: S.optional(S.String) })).annotate({
        identifier: "IPSetReference",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(95, __c11, 7).pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ IPSetReferences: S.optional(__S(96, __c12, 0)) })).annotate(
        { identifier: "ReferenceSets" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Targets: __S(52, __c6, 4),
          TargetTypes: __S(27, __c3, 3),
          GeneratedRulesType: S.String,
        }),
      ).annotate({ identifier: "RulesSourceList" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Protocol: S.String,
          Source: S.String,
          SourcePort: S.String,
          Direction: S.String,
          Destination: S.String,
          DestinationPort: S.String,
        }),
      ).annotate({ identifier: "Header" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Keyword: S.String, Settings: S.optional(__S(52, __c6, 4)) }),
      ).annotate({ identifier: "RuleOption" });
    case 5:
      return S.Array(__S(100, __c12, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ Action: S.String, Header: __S(99, __c12, 3), RuleOptions: __S(101, __c12, 5) }),
      ).annotate({ identifier: "StatefulRule" });
    case 7:
      return S.Array(__S(102, __c12, 6));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AddressDefinition: S.String })).annotate({
        identifier: "Address",
      });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.suspend(() => S.Struct({ FromPort: S.Number, ToPort: S.Number })).annotate({
        identifier: "PortRange",
      });
    case 3:
      return S.Array(__S(106, __c13, 2));
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({ Flags: __S(27, __c3, 3), Masks: S.optional(__S(27, __c3, 3)) }),
      ).annotate({
        identifier: "TCPFlagField",
      });
    case 6:
      return S.Array(__S(109, __c13, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Sources: S.optional(__S(105, __c13, 1)),
          Destinations: S.optional(__S(105, __c13, 1)),
          SourcePorts: S.optional(__S(107, __c13, 3)),
          DestinationPorts: S.optional(__S(107, __c13, 3)),
          Protocols: S.optional(__S(108, __c13, 4)),
          TCPFlags: S.optional(__S(110, __c13, 6)),
        }),
      ).annotate({ identifier: "MatchAttributes" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MatchAttributes: __S(111, __c13, 7), Actions: __S(52, __c6, 4) }),
      ).annotate({ identifier: "RuleDefinition" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleDefinition: __S(112, __c14, 0), Priority: S.Number }),
      ).annotate({ identifier: "StatelessRule" });
    case 2:
      return S.Array(__S(113, __c14, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          StatelessRules: __S(114, __c14, 2),
          CustomActions: S.optional(__S(58, __c7, 2)),
        }),
      ).annotate({
        identifier: "StatelessRulesAndCustomActions",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RulesString: S.optional(S.String),
          RulesSourceList: S.optional(__S(98, __c12, 2)),
          StatefulRules: S.optional(__S(103, __c12, 7)),
          StatelessRulesAndCustomActions: S.optional(__S(115, __c14, 3)),
        }),
      ).annotate({ identifier: "RulesSource" });
    case 5:
      return S.suspend(() => S.Struct({ RuleOrder: S.optional(S.String) })).annotate({
        identifier: "StatefulRuleOptions",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleVariables: S.optional(__S(94, __c11, 6)),
          ReferenceSets: S.optional(__S(97, __c12, 1)),
          RulesSource: __S(116, __c14, 4),
          StatefulRuleOptions: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "RuleGroup" });
    case 7:
      return S.suspend(() =>
        S.Struct({ SourceArn: S.optional(S.String), SourceUpdateToken: S.optional(S.String) }),
      ).annotate({ identifier: "SourceMetadata" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RuleOptions: S.optional(__S(27, __c3, 3)) })).annotate({
        identifier: "SummaryConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.String,
          RuleGroup: S.optional(__S(118, __c14, 6)),
          Rules: S.optional(S.String),
          Type: S.String,
          Description: S.optional(S.String),
          Capacity: S.Number,
          Tags: S.optional(__S(19, __c2, 3)),
          DryRun: S.optional(S.Boolean),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          SourceMetadata: S.optional(__S(119, __c14, 7)),
          AnalyzeRuleGroup: S.optional(S.Boolean),
          SummaryConfiguration: S.optional(__S(120, __c15, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleGroupRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IdentifiedRuleIds: S.optional(__S(52, __c6, 4)),
          IdentifiedType: S.optional(S.String),
          AnalysisDetail: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalysisResult" });
    case 3:
      return S.Array(__S(122, __c15, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleGroupArn: S.String,
          RuleGroupName: S.String,
          RuleGroupId: S.String,
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          Capacity: S.optional(S.Number),
          RuleGroupStatus: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          ConsumedCapacity: S.optional(S.Number),
          NumberOfAssociations: S.optional(S.Number),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          SourceMetadata: S.optional(__S(119, __c14, 7)),
          SnsTopic: S.optional(S.String),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AnalysisResults: S.optional(__S(123, __c15, 3)),
          SummaryConfiguration: S.optional(__S(120, __c15, 0)),
        }),
      ).annotate({ identifier: "RuleGroupResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ UpdateToken: S.String, RuleGroupResponse: __S(124, __c15, 4) }),
      ).annotate({ identifier: "CreateRuleGroupResponse" });
    case 6:
      return S.suspend(() => S.Struct({ ResourceArn: S.optional(S.String) })).annotate({
        identifier: "ServerCertificate",
      });
    case 7:
      return S.Array(__S(126, __c15, 6));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Sources: S.optional(__S(105, __c13, 1)),
          Destinations: S.optional(__S(105, __c13, 1)),
          SourcePorts: S.optional(__S(107, __c13, 3)),
          DestinationPorts: S.optional(__S(107, __c13, 3)),
          Protocols: S.optional(__S(108, __c13, 4)),
        }),
      ).annotate({ identifier: "ServerCertificateScope" });
    case 1:
      return S.Array(__S(128, __c16, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          RevokedStatusAction: S.optional(S.String),
          UnknownStatusAction: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CheckCertificateRevocationStatusActions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServerCertificates: S.optional(__S(127, __c15, 7)),
          Scopes: S.optional(__S(129, __c16, 1)),
          CertificateAuthorityArn: S.optional(S.String),
          CheckCertificateRevocationStatus: S.optional(__S(130, __c16, 2)),
        }),
      ).annotate({
        identifier: "ServerCertificateConfiguration",
      });
    case 4:
      return S.Array(__S(131, __c16, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ ServerCertificateConfigurations: S.optional(__S(132, __c16, 4)) }),
      ).annotate({
        identifier: "TLSInspectionConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TLSInspectionConfigurationName: S.String,
          TLSInspectionConfiguration: __S(133, __c16, 5),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateTLSInspectionConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CertificateArn: S.optional(S.String),
          CertificateSerial: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "TlsCertificateData" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          TLSInspectionConfigurationArn: S.String,
          TLSInspectionConfigurationName: S.String,
          TLSInspectionConfigurationId: S.String,
          TLSInspectionConfigurationStatus: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NumberOfAssociations: S.optional(S.Number),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          Certificates: S.optional(__S(136, __c17, 0)),
          CertificateAuthority: S.optional(__S(135, __c16, 7)),
        }),
      ).annotate({
        identifier: "TLSInspectionConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.String,
          TLSInspectionConfigurationResponse: __S(137, __c17, 1),
        }),
      ).annotate({
        identifier: "CreateTLSInspectionConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.String,
          VpcId: S.String,
          SubnetMapping: __S(8, __c1, 0),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateVpcEndpointAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointAssociationId: S.optional(S.String),
          VpcEndpointAssociationArn: S.String,
          FirewallArn: S.String,
          VpcId: S.String,
          SubnetMapping: __S(8, __c1, 0),
          Description: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "VpcEndpointAssociation" });
    case 5:
      return S.suspend(() => S.Struct({ Attachment: S.optional(__S(36, __c4, 4)) })).annotate({
        identifier: "AZSyncState",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(141, __c17, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.String,
          AssociationSyncState: S.optional(__S(142, __c17, 6)),
        }),
      ).annotate({
        identifier: "VpcEndpointAssociationStatus",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointAssociation: S.optional(__S(140, __c17, 4)),
          VpcEndpointAssociationStatus: S.optional(__S(143, __c17, 7)),
        }),
      ).annotate({
        identifier: "CreateVpcEndpointAssociationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.optional(S.String),
          ContainerAssociationArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteContainerAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.optional(S.String),
          ContainerAssociationArn: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteContainerAssociationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FirewallName: S.optional(S.String), FirewallArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFirewallRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicyName: S.optional(S.String),
          FirewallPolicyArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteFirewallPolicyRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ FirewallPolicyResponse: __S(69, __c8, 5) })).annotate({
        identifier: "DeleteFirewallPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ TransitGatewayAttachmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteNetworkFirewallTransitGatewayAttachmentRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NatGatewayId: S.String,
          ProxyName: S.optional(S.String),
          ProxyArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteProxyRequest" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NatGatewayId: S.optional(S.String),
          ProxyName: S.optional(S.String),
          ProxyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteProxyResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteProxyConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteProxyConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteProxyRuleGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteProxyRuleGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupArn: S.optional(S.String),
          ProxyRuleGroupName: S.optional(S.String),
          Rules: __S(52, __c6, 4),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteProxyRulesRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ProxyRuleGroup: S.optional(__S(85, __c10, 5)) })).annotate({
        identifier: "DeleteProxyRulesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteResourcePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          RuleGroupArn: S.optional(S.String),
          Type: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteRuleGroupRequest" });
    case 2:
      return S.suspend(() => S.Struct({ RuleGroupResponse: __S(124, __c15, 4) })).annotate({
        identifier: "DeleteRuleGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TLSInspectionConfigurationArn: S.optional(S.String),
          TLSInspectionConfigurationName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteTLSInspectionConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TLSInspectionConfigurationResponse: __S(137, __c17, 1) }),
      ).annotate({
        identifier: "DeleteTLSInspectionConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VpcEndpointAssociationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteVpcEndpointAssociationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.optional(S.String),
          ContainerAssociationArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeContainerAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.optional(S.String),
          ContainerAssociationArn: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          ContainerMonitoringConfigurations: S.optional(__S(23, __c2, 7)),
          Status: S.optional(S.String),
          ResolvedCidrCount: S.optional(S.Number),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(__S(19, __c2, 3)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeContainerAssociationResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FirewallName: S.optional(S.String), FirewallArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeFirewallRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          Firewall: S.optional(__S(35, __c4, 3)),
          FirewallStatus: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "DescribeFirewallResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ FirewallArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeFirewallMetadataRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ IPAddressType: S.optional(S.String) })).annotate({
        identifier: "AvailabilityZoneMetadata",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(171, __c21, 3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallPolicyArn: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          SupportedAvailabilityZones: S.optional(__S(172, __c21, 4)),
          TransitGatewayAttachmentId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeFirewallMetadataResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicyName: S.optional(S.String),
          FirewallPolicyArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFirewallPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.String,
          FirewallPolicyResponse: __S(69, __c8, 5),
          FirewallPolicy: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({
        identifier: "DescribeFirewallPolicyResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.String,
          AvailabilityZone: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          FlowOperationId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeFlowOperationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SourceAddress: S.optional(__S(104, __c13, 0)),
          DestinationAddress: S.optional(__S(104, __c13, 0)),
          SourcePort: S.optional(S.String),
          DestinationPort: S.optional(S.String),
          Protocols: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "FlowFilter" });
    case 2:
      return S.Array(__S(177, __c22, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          MinimumFlowAgeInSeconds: S.optional(S.Number),
          FlowFilters: S.optional(__S(178, __c22, 2)),
        }),
      ).annotate({ identifier: "FlowOperation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          FlowOperationId: S.optional(S.String),
          FlowOperationType: S.optional(S.String),
          FlowOperationStatus: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          FlowRequestTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FlowOperation: S.optional(__S(179, __c22, 3)),
        }),
      ).annotate({
        identifier: "DescribeFlowOperationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ FirewallArn: S.optional(S.String), FirewallName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoggingConfigurationRequest",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          LogType: S.String,
          LogDestinationType: S.String,
          LogDestination: __S(182, __c22, 6),
        }),
      ).annotate({ identifier: "LogDestinationConfig" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(183, __c22, 7));
    case 1:
      return S.suspend(() => S.Struct({ LogDestinationConfigs: __S(184, __c23, 0) })).annotate({
        identifier: "LoggingConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          LoggingConfiguration: S.optional(__S(185, __c23, 1)),
          EnableMonitoringDashboard: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DescribeLoggingConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ProxyName: S.optional(S.String), ProxyArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeProxyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProxyName: S.optional(S.String),
          ProxyArn: S.optional(S.String),
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          NatGatewayId: S.optional(S.String),
          ProxyState: S.optional(S.String),
          ProxyModifyState: S.optional(S.String),
          ListenerProperties: S.optional(__S(31, __c3, 7)),
          TlsInterceptProperties: S.optional(__S(75, __c9, 3)),
          VpcEndpointServiceName: S.optional(S.String),
          PrivateDNSName: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeleteTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureCode: S.optional(S.String),
          FailureMessage: S.optional(S.String),
          Tags: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({ identifier: "DescribeProxyResource" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Proxy: S.optional(__S(188, __c23, 4)), UpdateToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeProxyResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeProxyConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleName: S.String,
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeProxyRuleRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProxyRule: S.optional(__S(81, __c10, 1)), UpdateToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeProxyRuleResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeProxyRuleGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) })).annotate({
        identifier: "DescribeResourcePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          RuleGroupArn: S.optional(S.String),
          Type: S.optional(S.String),
          AnalyzeRuleGroup: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeRuleGroupRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.String,
          RuleGroup: S.optional(__S(118, __c14, 6)),
          RuleGroupResponse: __S(124, __c15, 4),
        }),
      ).annotate({
        identifier: "DescribeRuleGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          RuleGroupArn: S.optional(S.String),
          Type: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRuleGroupMetadataRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleGroupArn: S.String,
          RuleGroupName: S.String,
          Description: S.optional(S.String),
          Type: S.optional(S.String),
          Capacity: S.optional(S.Number),
          StatefulRuleOptions: S.optional(__S(117, __c14, 5)),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VendorName: S.optional(S.String),
          ProductId: S.optional(S.String),
          ListingName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRuleGroupMetadataResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.optional(S.String),
          RuleGroupArn: S.optional(S.String),
          Type: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRuleGroupSummaryRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SID: S.optional(S.String),
          Msg: S.optional(S.String),
          Metadata: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleSummary" });
    case 2:
      return S.Array(__S(201, __c25, 1));
    case 3:
      return S.suspend(() => S.Struct({ RuleSummaries: S.optional(__S(202, __c25, 2)) })).annotate({
        identifier: "Summary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RuleGroupName: S.String,
          Description: S.optional(S.String),
          Summary: S.optional(__S(203, __c25, 3)),
        }),
      ).annotate({
        identifier: "DescribeRuleGroupSummaryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TLSInspectionConfigurationArn: S.optional(S.String),
          TLSInspectionConfigurationName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTLSInspectionConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.String,
          TLSInspectionConfiguration: S.optional(__S(133, __c16, 5)),
          TLSInspectionConfigurationResponse: __S(137, __c17, 1),
        }),
      ).annotate({
        identifier: "DescribeTLSInspectionConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VpcEndpointAssociationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeVpcEndpointAssociationRequest",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          RuleGroupNames: S.optional(__S(52, __c6, 4)),
          RuleGroupArns: S.optional(__S(52, __c6, 4)),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DetachRuleGroupsFromProxyConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          AvailabilityZoneMappings: __S(3, __c0, 3),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateAvailabilityZonesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          SubnetIds: __S(52, __c6, 4),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateSubnetsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          SubnetMappings: S.optional(__S(9, __c1, 1)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DisassociateSubnetsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FirewallName: S.optional(S.String),
          AnalysisReportId: S.String,
          FirewallArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetAnalysisReportResultsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Count: S.optional(S.Number) })).annotate({
        identifier: "Hits",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Protocol: S.optional(S.String),
          FirstAccessed: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastAccessed: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Domain: S.optional(S.String),
          Hits: S.optional(__S(213, __c26, 5)),
          UniqueSources: S.optional(__S(213, __c26, 5)),
        }),
      ).annotate({ identifier: "AnalysisTypeReportResult" });
    case 7:
      return S.Array(__S(214, __c26, 6));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReportTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AnalysisType: S.optional(S.String),
          NextToken: S.optional(S.String),
          AnalysisReportResults: S.optional(__S(215, __c26, 7)),
        }),
      ).annotate({
        identifier: "GetAnalysisReportResultsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FirewallName: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAnalysisReportsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AnalysisReportId: S.optional(S.String),
          AnalysisType: S.optional(S.String),
          ReportTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalysisReport" });
    case 3:
      return S.Array(__S(218, __c27, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AnalysisReports: S.optional(__S(219, __c27, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnalysisReportsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListContainerAssociationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({
        identifier: "ContainerAssociationSummary",
      });
    case 7:
      return S.Array(__S(222, __c27, 6));
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociations: S.optional(__S(223, __c27, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListContainerAssociationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListFirewallPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Arn: S.optional(S.String) }),
      ).annotate({ identifier: "FirewallPolicyMetadata" });
    case 3:
      return S.Array(__S(226, __c28, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          FirewallPolicies: S.optional(__S(227, __c28, 3)),
        }),
      ).annotate({
        identifier: "ListFirewallPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          VpcIds: S.optional(__S(52, __c6, 4)),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFirewallsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FirewallName: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          TransitGatewayAttachmentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FirewallMetadata" });
    case 7:
      return S.Array(__S(230, __c28, 6));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Firewalls: S.optional(__S(231, __c28, 7)) }),
      ).annotate({ identifier: "ListFirewallsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.String,
          FlowOperationId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFlowOperationResultsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SourceAddress: S.optional(__S(104, __c13, 0)),
          DestinationAddress: S.optional(__S(104, __c13, 0)),
          SourcePort: S.optional(S.String),
          DestinationPort: S.optional(S.String),
          Protocol: S.optional(S.String),
          Age: S.optional(S.Number),
          PacketCount: S.optional(S.Number),
          ByteCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Flow" });
    case 3:
      return S.Array(__S(234, __c29, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          FlowOperationId: S.optional(S.String),
          FlowOperationStatus: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          FlowRequestTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Flows: S.optional(__S(235, __c29, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFlowOperationResultsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.String,
          AvailabilityZone: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          FlowOperationType: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFlowOperationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FlowOperationId: S.optional(S.String),
          FlowOperationType: S.optional(S.String),
          FlowRequestTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FlowOperationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowOperationMetadata" });
    case 7:
      return S.Array(__S(238, __c29, 6));
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FlowOperations: S.optional(__S(239, __c29, 7)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFlowOperationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListProxiesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Proxies: S.optional(__S(227, __c28, 3)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListProxiesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListProxyConfigurationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Arn: S.optional(S.String) }),
      ).annotate({
        identifier: "ProxyConfigurationMetadata",
      });
    case 5:
      return S.Array(__S(244, __c30, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurations: S.optional(__S(245, __c30, 5)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProxyConfigurationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListProxyRuleGroupsRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroups: S.optional(__S(227, __c28, 3)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProxyRuleGroupsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Scope: S.optional(S.String),
          ManagedType: S.optional(S.String),
          SubscriptionStatus: S.optional(S.String),
          Type: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRuleGroupsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          VendorName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RuleGroupMetadata" });
    case 3:
      return S.Array(__S(250, __c31, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), RuleGroups: S.optional(__S(251, __c31, 3)) }),
      ).annotate({ identifier: "ListRuleGroupsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ResourceArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Tags: S.optional(__S(19, __c2, 3)) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTLSInspectionConfigurationsRequest",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(244, __c30, 4));
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          TLSInspectionConfigurations: S.optional(__S(256, __c32, 0)),
        }),
      ).annotate({
        identifier: "ListTLSInspectionConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          FirewallArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListVpcEndpointAssociationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ VpcEndpointAssociationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "VpcEndpointAssociationMetadata",
      });
    case 4:
      return S.Array(__S(259, __c32, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          VpcEndpointAssociations: S.optional(__S(260, __c32, 4)),
        }),
      ).annotate({
        identifier: "ListVpcEndpointAssociationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Policy: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ TransitGatewayAttachmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RejectNetworkFirewallTransitGatewayAttachmentRequest",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FirewallName: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          AnalysisType: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartAnalysisReportRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ AnalysisReportId: S.String })).annotate({
        identifier: "StartAnalysisReportResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.String,
          AvailabilityZone: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          MinimumFlowAgeInSeconds: S.optional(S.Number),
          FlowFilters: __S(178, __c22, 2),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartFlowCaptureRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FlowOperationId: S.optional(S.String),
          FlowOperationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartFlowCaptureResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.String,
          AvailabilityZone: S.optional(S.String),
          VpcEndpointAssociationArn: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
          MinimumFlowAgeInSeconds: S.optional(S.Number),
          FlowFilters: __S(178, __c22, 2),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartFlowFlushRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(19, __c2, 3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(52, __c6, 4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          AvailabilityZoneChangeProtection: S.Boolean,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAvailabilityZoneChangeProtectionRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          AvailabilityZoneChangeProtection: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "UpdateAvailabilityZoneChangeProtectionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContainerAssociationName: S.optional(S.String),
          ContainerAssociationArn: S.optional(S.String),
          Description: S.optional(S.String),
          Type: S.String,
          ContainerMonitoringConfigurations: __S(23, __c2, 7),
          Tags: S.optional(__S(19, __c2, 3)),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateContainerAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnabledAnalysisTypes: S.optional(__S(27, __c3, 3)),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          UpdateToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFirewallAnalysisSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EnabledAnalysisTypes: S.optional(__S(27, __c3, 3)),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateFirewallAnalysisSettingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          DeleteProtection: S.Boolean,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFirewallDeleteProtectionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          DeleteProtection: S.optional(S.Boolean),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateFirewallDeleteProtectionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFirewallDescriptionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          Description: S.optional(S.String),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateFirewallDescriptionResponse",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFirewallEncryptionConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          UpdateToken: S.optional(S.String),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({
        identifier: "UpdateFirewallEncryptionConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.String,
          FirewallPolicyArn: S.optional(S.String),
          FirewallPolicyName: S.optional(S.String),
          FirewallPolicy: __S(67, __c8, 3),
          Description: S.optional(S.String),
          DryRun: S.optional(S.Boolean),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFirewallPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          FirewallPolicyChangeProtection: S.Boolean,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFirewallPolicyChangeProtectionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          FirewallPolicyChangeProtection: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "UpdateFirewallPolicyChangeProtectionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          LoggingConfiguration: S.optional(__S(185, __c23, 1)),
          EnableMonitoringDashboard: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLoggingConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          LoggingConfiguration: S.optional(__S(185, __c23, 1)),
          EnableMonitoringDashboard: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "UpdateLoggingConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NatGatewayId: S.String,
          ProxyName: S.optional(S.String),
          ProxyArn: S.optional(S.String),
          ListenerPropertiesToAdd: S.optional(__S(72, __c9, 0)),
          ListenerPropertiesToRemove: S.optional(__S(72, __c9, 0)),
          TlsInterceptProperties: S.optional(__S(73, __c9, 1)),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateProxyRequest" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          DefaultRulePhaseActions: __S(17, __c2, 1),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProxyConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
          ProxyRuleName: S.String,
          Description: S.optional(S.String),
          Action: S.optional(S.String),
          AddConditions: S.optional(__S(80, __c10, 0)),
          RemoveConditions: S.optional(__S(80, __c10, 0)),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateProxyRuleRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProxyRule: S.optional(__S(81, __c10, 1)),
          RemovedConditions: S.optional(__S(80, __c10, 0)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateProxyRuleResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ProxyRuleGroupName: S.optional(S.String), NewPosition: S.optional(S.Number) }),
      ).annotate({ identifier: "ProxyRuleGroupPriority" });
    case 4:
      return S.Array(__S(291, __c36, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProxyConfigurationName: S.optional(S.String),
          ProxyConfigurationArn: S.optional(S.String),
          RuleGroups: __S(292, __c36, 4),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProxyRuleGroupPrioritiesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ProxyRuleGroupName: S.optional(S.String), Priority: S.optional(S.Number) }),
      ).annotate({
        identifier: "ProxyRuleGroupPriorityResult",
      });
    case 7:
      return S.Array(__S(294, __c36, 6));
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroups: S.optional(__S(295, __c36, 7)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateProxyRuleGroupPrioritiesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ProxyRuleName: S.optional(S.String), NewPosition: S.optional(S.Number) }),
      ).annotate({ identifier: "ProxyRulePriority" });
    case 2:
      return S.Array(__S(297, __c37, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
          RuleGroupRequestPhase: S.String,
          Rules: __S(298, __c37, 2),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProxyRulePrioritiesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProxyRuleGroupName: S.optional(S.String),
          ProxyRuleGroupArn: S.optional(S.String),
          RuleGroupRequestPhase: S.optional(S.String),
          Rules: S.optional(__S(298, __c37, 2)),
          UpdateToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateProxyRulePrioritiesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          UpdateToken: S.optional(S.String),
          ProxySettings: S.optional(__S(32, __c4, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProxySettingsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          UpdateToken: S.optional(S.String),
          ProxySettings: S.optional(__S(32, __c4, 0)),
        }),
      ).annotate({
        identifier: "UpdateProxySettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.String,
          RuleGroupArn: S.optional(S.String),
          RuleGroupName: S.optional(S.String),
          RuleGroup: S.optional(__S(118, __c14, 6)),
          Rules: S.optional(S.String),
          Type: S.optional(S.String),
          Description: S.optional(S.String),
          DryRun: S.optional(S.Boolean),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          SourceMetadata: S.optional(__S(119, __c14, 7)),
          AnalyzeRuleGroup: S.optional(S.Boolean),
          SummaryConfiguration: S.optional(__S(120, __c15, 0)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRuleGroupRequest" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          SubnetChangeProtection: S.Boolean,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSubnetChangeProtectionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UpdateToken: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallName: S.optional(S.String),
          SubnetChangeProtection: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "UpdateSubnetChangeProtectionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TLSInspectionConfigurationArn: S.optional(S.String),
          TLSInspectionConfigurationName: S.optional(S.String),
          TLSInspectionConfiguration: __S(133, __c16, 5),
          Description: S.optional(S.String),
          EncryptionConfiguration: S.optional(__S(26, __c3, 2)),
          UpdateToken: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTLSInspectionConfigurationRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
