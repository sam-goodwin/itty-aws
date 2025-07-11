import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class AppRunner extends AWSServiceClient {
  associateCustomDomain(
    input: AssociateCustomDomainRequest,
  ): Effect.Effect<
    AssociateCustomDomainResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | CommonAwsError
  >;
  createAutoScalingConfiguration(
    input: CreateAutoScalingConfigurationRequest,
  ): Effect.Effect<
    CreateAutoScalingConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createConnection(
    input: CreateConnectionRequest,
  ): Effect.Effect<
    CreateConnectionResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createObservabilityConfiguration(
    input: CreateObservabilityConfigurationRequest,
  ): Effect.Effect<
    CreateObservabilityConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createService(
    input: CreateServiceRequest,
  ): Effect.Effect<
    CreateServiceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createVpcConnector(
    input: CreateVpcConnectorRequest,
  ): Effect.Effect<
    CreateVpcConnectorResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  createVpcIngressConnection(
    input: CreateVpcIngressConnectionRequest,
  ): Effect.Effect<
    CreateVpcIngressConnectionResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ServiceQuotaExceededException
    | CommonAwsError
  >;
  deleteAutoScalingConfiguration(
    input: DeleteAutoScalingConfigurationRequest,
  ): Effect.Effect<
    DeleteAutoScalingConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteConnection(
    input: DeleteConnectionRequest,
  ): Effect.Effect<
    DeleteConnectionResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteObservabilityConfiguration(
    input: DeleteObservabilityConfigurationRequest,
  ): Effect.Effect<
    DeleteObservabilityConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteService(
    input: DeleteServiceRequest,
  ): Effect.Effect<
    DeleteServiceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteVpcConnector(
    input: DeleteVpcConnectorRequest,
  ): Effect.Effect<
    DeleteVpcConnectorResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteVpcIngressConnection(
    input: DeleteVpcIngressConnectionRequest,
  ): Effect.Effect<
    DeleteVpcIngressConnectionResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeAutoScalingConfiguration(
    input: DescribeAutoScalingConfigurationRequest,
  ): Effect.Effect<
    DescribeAutoScalingConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeCustomDomains(
    input: DescribeCustomDomainsRequest,
  ): Effect.Effect<
    DescribeCustomDomainsResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeObservabilityConfiguration(
    input: DescribeObservabilityConfigurationRequest,
  ): Effect.Effect<
    DescribeObservabilityConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeService(
    input: DescribeServiceRequest,
  ): Effect.Effect<
    DescribeServiceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeVpcConnector(
    input: DescribeVpcConnectorRequest,
  ): Effect.Effect<
    DescribeVpcConnectorResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeVpcIngressConnection(
    input: DescribeVpcIngressConnectionRequest,
  ): Effect.Effect<
    DescribeVpcIngressConnectionResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateCustomDomain(
    input: DisassociateCustomDomainRequest,
  ): Effect.Effect<
    DisassociateCustomDomainResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listAutoScalingConfigurations(
    input: ListAutoScalingConfigurationsRequest,
  ): Effect.Effect<
    ListAutoScalingConfigurationsResponse,
    InternalServiceErrorException | InvalidRequestException | CommonAwsError
  >;
  listConnections(
    input: ListConnectionsRequest,
  ): Effect.Effect<
    ListConnectionsResponse,
    InternalServiceErrorException | InvalidRequestException | CommonAwsError
  >;
  listObservabilityConfigurations(
    input: ListObservabilityConfigurationsRequest,
  ): Effect.Effect<
    ListObservabilityConfigurationsResponse,
    InternalServiceErrorException | InvalidRequestException | CommonAwsError
  >;
  listOperations(
    input: ListOperationsRequest,
  ): Effect.Effect<
    ListOperationsResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listServices(
    input: ListServicesRequest,
  ): Effect.Effect<
    ListServicesResponse,
    InternalServiceErrorException | InvalidRequestException | CommonAwsError
  >;
  listServicesForAutoScalingConfiguration(
    input: ListServicesForAutoScalingConfigurationRequest,
  ): Effect.Effect<
    ListServicesForAutoScalingConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listVpcConnectors(
    input: ListVpcConnectorsRequest,
  ): Effect.Effect<
    ListVpcConnectorsResponse,
    InternalServiceErrorException | InvalidRequestException | CommonAwsError
  >;
  listVpcIngressConnections(
    input: ListVpcIngressConnectionsRequest,
  ): Effect.Effect<
    ListVpcIngressConnectionsResponse,
    InternalServiceErrorException | InvalidRequestException | CommonAwsError
  >;
  pauseService(
    input: PauseServiceRequest,
  ): Effect.Effect<
    PauseServiceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  resumeService(
    input: ResumeServiceRequest,
  ): Effect.Effect<
    ResumeServiceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startDeployment(
    input: StartDeploymentRequest,
  ): Effect.Effect<
    StartDeploymentResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDefaultAutoScalingConfiguration(
    input: UpdateDefaultAutoScalingConfigurationRequest,
  ): Effect.Effect<
    UpdateDefaultAutoScalingConfigurationResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateService(
    input: UpdateServiceRequest,
  ): Effect.Effect<
    UpdateServiceResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateVpcIngressConnection(
    input: UpdateVpcIngressConnectionRequest,
  ): Effect.Effect<
    UpdateVpcIngressConnectionResponse,
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export declare class Apprunner extends AppRunner {}

export type AppRunnerResourceArn = string;

export type ASConfigMaxConcurrency = number;

export type ASConfigMaxSize = number;

export type ASConfigMinSize = number;

export interface AssociateCustomDomainRequest {
  ServiceArn: string;
  DomainName: string;
  EnableWWWSubdomain?: boolean;
}
export interface AssociateCustomDomainResponse {
  DNSTarget: string;
  ServiceArn: string;
  CustomDomain: CustomDomain;
  VpcDNSTargets: Array<VpcDNSTarget>;
}
export interface AuthenticationConfiguration {
  ConnectionArn?: string;
  AccessRoleArn?: string;
}
export interface AutoScalingConfiguration {
  AutoScalingConfigurationArn?: string;
  AutoScalingConfigurationName?: string;
  AutoScalingConfigurationRevision?: number;
  Latest?: boolean;
  Status?: AutoScalingConfigurationStatus;
  MaxConcurrency?: number;
  MinSize?: number;
  MaxSize?: number;
  CreatedAt?: Date | string;
  DeletedAt?: Date | string;
  HasAssociatedService?: boolean;
  IsDefault?: boolean;
}
export type AutoScalingConfigurationName = string;

export type AutoScalingConfigurationRevision = number;

export type AutoScalingConfigurationStatus = "ACTIVE" | "INACTIVE";
export interface AutoScalingConfigurationSummary {
  AutoScalingConfigurationArn?: string;
  AutoScalingConfigurationName?: string;
  AutoScalingConfigurationRevision?: number;
  Status?: AutoScalingConfigurationStatus;
  CreatedAt?: Date | string;
  HasAssociatedService?: boolean;
  IsDefault?: boolean;
}
export type AutoScalingConfigurationSummaryList =
  Array<AutoScalingConfigurationSummary>;
export type ApprunnerBoolean = boolean;

export type BuildCommand = string;

export interface CertificateValidationRecord {
  Name?: string;
  Type?: string;
  Value?: string;
  Status?: CertificateValidationRecordStatus;
}
export type CertificateValidationRecordList =
  Array<CertificateValidationRecord>;
export type CertificateValidationRecordStatus =
  | "PENDING_VALIDATION"
  | "SUCCESS"
  | "FAILED";
export interface CodeConfiguration {
  ConfigurationSource: ConfigurationSource;
  CodeConfigurationValues?: CodeConfigurationValues;
}
export interface CodeConfigurationValues {
  Runtime: Runtime;
  BuildCommand?: string;
  StartCommand?: string;
  Port?: string;
  RuntimeEnvironmentVariables?: Record<string, string>;
  RuntimeEnvironmentSecrets?: Record<string, string>;
}
export interface CodeRepository {
  RepositoryUrl: string;
  SourceCodeVersion: SourceCodeVersion;
  CodeConfiguration?: CodeConfiguration;
  SourceDirectory?: string;
}
export type ConfigurationSource = "REPOSITORY" | "API";
export interface Connection {
  ConnectionName?: string;
  ConnectionArn?: string;
  ProviderType?: ProviderType;
  Status?: ConnectionStatus;
  CreatedAt?: Date | string;
}
export type ConnectionName = string;

export type ConnectionStatus =
  | "PENDING_HANDSHAKE"
  | "AVAILABLE"
  | "ERROR"
  | "DELETED";
export interface ConnectionSummary {
  ConnectionName?: string;
  ConnectionArn?: string;
  ProviderType?: ProviderType;
  Status?: ConnectionStatus;
  CreatedAt?: Date | string;
}
export type ConnectionSummaryList = Array<ConnectionSummary>;
export type Cpu = string;

export interface CreateAutoScalingConfigurationRequest {
  AutoScalingConfigurationName: string;
  MaxConcurrency?: number;
  MinSize?: number;
  MaxSize?: number;
  Tags?: Array<Tag>;
}
export interface CreateAutoScalingConfigurationResponse {
  AutoScalingConfiguration: AutoScalingConfiguration;
}
export interface CreateConnectionRequest {
  ConnectionName: string;
  ProviderType: ProviderType;
  Tags?: Array<Tag>;
}
export interface CreateConnectionResponse {
  Connection: Connection;
}
export interface CreateObservabilityConfigurationRequest {
  ObservabilityConfigurationName: string;
  TraceConfiguration?: TraceConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateObservabilityConfigurationResponse {
  ObservabilityConfiguration: ObservabilityConfiguration;
}
export interface CreateServiceRequest {
  ServiceName: string;
  SourceConfiguration: SourceConfiguration;
  InstanceConfiguration?: InstanceConfiguration;
  Tags?: Array<Tag>;
  EncryptionConfiguration?: EncryptionConfiguration;
  HealthCheckConfiguration?: HealthCheckConfiguration;
  AutoScalingConfigurationArn?: string;
  NetworkConfiguration?: NetworkConfiguration;
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}
export interface CreateServiceResponse {
  Service: Service;
  OperationId: string;
}
export interface CreateVpcConnectorRequest {
  VpcConnectorName: string;
  Subnets: Array<string>;
  SecurityGroups?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateVpcConnectorResponse {
  VpcConnector: VpcConnector;
}
export interface CreateVpcIngressConnectionRequest {
  ServiceArn: string;
  VpcIngressConnectionName: string;
  IngressVpcConfiguration: IngressVpcConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateVpcIngressConnectionResponse {
  VpcIngressConnection: VpcIngressConnection;
}
export interface CustomDomain {
  DomainName: string;
  EnableWWWSubdomain: boolean;
  CertificateValidationRecords?: Array<CertificateValidationRecord>;
  Status: CustomDomainAssociationStatus;
}
export type CustomDomainAssociationStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING"
  | "DELETE_FAILED"
  | "PENDING_CERTIFICATE_DNS_VALIDATION"
  | "BINDING_CERTIFICATE";
export type CustomDomainList = Array<CustomDomain>;
export type CustomerAccountId = string;

export interface DeleteAutoScalingConfigurationRequest {
  AutoScalingConfigurationArn: string;
  DeleteAllRevisions?: boolean;
}
export interface DeleteAutoScalingConfigurationResponse {
  AutoScalingConfiguration: AutoScalingConfiguration;
}
export interface DeleteConnectionRequest {
  ConnectionArn: string;
}
export interface DeleteConnectionResponse {
  Connection?: Connection;
}
export interface DeleteObservabilityConfigurationRequest {
  ObservabilityConfigurationArn: string;
}
export interface DeleteObservabilityConfigurationResponse {
  ObservabilityConfiguration: ObservabilityConfiguration;
}
export interface DeleteServiceRequest {
  ServiceArn: string;
}
export interface DeleteServiceResponse {
  Service: Service;
  OperationId: string;
}
export interface DeleteVpcConnectorRequest {
  VpcConnectorArn: string;
}
export interface DeleteVpcConnectorResponse {
  VpcConnector: VpcConnector;
}
export interface DeleteVpcIngressConnectionRequest {
  VpcIngressConnectionArn: string;
}
export interface DeleteVpcIngressConnectionResponse {
  VpcIngressConnection: VpcIngressConnection;
}
export interface DescribeAutoScalingConfigurationRequest {
  AutoScalingConfigurationArn: string;
}
export interface DescribeAutoScalingConfigurationResponse {
  AutoScalingConfiguration: AutoScalingConfiguration;
}
export type DescribeCustomDomainsMaxResults = number;

export interface DescribeCustomDomainsRequest {
  ServiceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeCustomDomainsResponse {
  DNSTarget: string;
  ServiceArn: string;
  CustomDomains: Array<CustomDomain>;
  VpcDNSTargets: Array<VpcDNSTarget>;
  NextToken?: string;
}
export interface DescribeObservabilityConfigurationRequest {
  ObservabilityConfigurationArn: string;
}
export interface DescribeObservabilityConfigurationResponse {
  ObservabilityConfiguration: ObservabilityConfiguration;
}
export interface DescribeServiceRequest {
  ServiceArn: string;
}
export interface DescribeServiceResponse {
  Service: Service;
}
export interface DescribeVpcConnectorRequest {
  VpcConnectorArn: string;
}
export interface DescribeVpcConnectorResponse {
  VpcConnector: VpcConnector;
}
export interface DescribeVpcIngressConnectionRequest {
  VpcIngressConnectionArn: string;
}
export interface DescribeVpcIngressConnectionResponse {
  VpcIngressConnection: VpcIngressConnection;
}
export interface DisassociateCustomDomainRequest {
  ServiceArn: string;
  DomainName: string;
}
export interface DisassociateCustomDomainResponse {
  DNSTarget: string;
  ServiceArn: string;
  CustomDomain: CustomDomain;
  VpcDNSTargets: Array<VpcDNSTarget>;
}
export type DomainName = string;

export interface EgressConfiguration {
  EgressType?: EgressType;
  VpcConnectorArn?: string;
}
export type EgressType = "DEFAULT" | "VPC";
export interface EncryptionConfiguration {
  KmsKey: string;
}
export type ErrorMessage = string;

export type HasAssociatedService = boolean;

export interface HealthCheckConfiguration {
  Protocol?: HealthCheckProtocol;
  Path?: string;
  Interval?: number;
  Timeout?: number;
  HealthyThreshold?: number;
  UnhealthyThreshold?: number;
}
export type HealthCheckHealthyThreshold = number;

export type HealthCheckInterval = number;

export type HealthCheckPath = string;

export type HealthCheckProtocol = "TCP" | "HTTP";
export type HealthCheckTimeout = number;

export type HealthCheckUnhealthyThreshold = number;

export interface ImageConfiguration {
  RuntimeEnvironmentVariables?: Record<string, string>;
  StartCommand?: string;
  Port?: string;
  RuntimeEnvironmentSecrets?: Record<string, string>;
}
export type ImageIdentifier = string;

export interface ImageRepository {
  ImageIdentifier: string;
  ImageConfiguration?: ImageConfiguration;
  ImageRepositoryType: ImageRepositoryType;
}
export type ImageRepositoryType = "ECR" | "ECR_PUBLIC";
export interface IngressConfiguration {
  IsPubliclyAccessible?: boolean;
}
export interface IngressVpcConfiguration {
  VpcId?: string;
  VpcEndpointId?: string;
}
export interface InstanceConfiguration {
  Cpu?: string;
  Memory?: string;
  InstanceRoleArn?: string;
}
export type Integer = number;

export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidStateException extends EffectData.TaggedError(
  "InvalidStateException",
)<{
  readonly Message?: string;
}> {}
export type IpAddressType = "IPV4" | "DUAL_STACK";
export type IsDefault = boolean;

export type KmsKeyArn = string;

export type Latest = boolean;

export interface ListAutoScalingConfigurationsRequest {
  AutoScalingConfigurationName?: string;
  LatestOnly?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAutoScalingConfigurationsResponse {
  AutoScalingConfigurationSummaryList: Array<AutoScalingConfigurationSummary>;
  NextToken?: string;
}
export interface ListConnectionsRequest {
  ConnectionName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectionsResponse {
  ConnectionSummaryList: Array<ConnectionSummary>;
  NextToken?: string;
}
export interface ListObservabilityConfigurationsRequest {
  ObservabilityConfigurationName?: string;
  LatestOnly?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListObservabilityConfigurationsResponse {
  ObservabilityConfigurationSummaryList: Array<ObservabilityConfigurationSummary>;
  NextToken?: string;
}
export type ListOperationsMaxResults = number;

export interface ListOperationsRequest {
  ServiceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOperationsResponse {
  OperationSummaryList?: Array<OperationSummary>;
  NextToken?: string;
}
export interface ListServicesForAutoScalingConfigurationRequest {
  AutoScalingConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServicesForAutoScalingConfigurationResponse {
  ServiceArnList: Array<string>;
  NextToken?: string;
}
export interface ListServicesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListServicesResponse {
  ServiceSummaryList: Array<ServiceSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListVpcConnectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVpcConnectorsResponse {
  VpcConnectors: Array<VpcConnector>;
  NextToken?: string;
}
export interface ListVpcIngressConnectionsFilter {
  ServiceArn?: string;
  VpcEndpointId?: string;
}
export interface ListVpcIngressConnectionsRequest {
  Filter?: ListVpcIngressConnectionsFilter;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVpcIngressConnectionsResponse {
  VpcIngressConnectionSummaryList: Array<VpcIngressConnectionSummary>;
  NextToken?: string;
}
export type MaxConcurrency = number;

export type MaxResults = number;

export type MaxSize = number;

export type Memory = string;

export type MinSize = number;

export interface NetworkConfiguration {
  EgressConfiguration?: EgressConfiguration;
  IngressConfiguration?: IngressConfiguration;
  IpAddressType?: IpAddressType;
}
export type NextToken = string;

export type NullableBoolean = boolean;

export interface ObservabilityConfiguration {
  ObservabilityConfigurationArn?: string;
  ObservabilityConfigurationName?: string;
  TraceConfiguration?: TraceConfiguration;
  ObservabilityConfigurationRevision?: number;
  Latest?: boolean;
  Status?: ObservabilityConfigurationStatus;
  CreatedAt?: Date | string;
  DeletedAt?: Date | string;
}
export type ObservabilityConfigurationName = string;

export type ObservabilityConfigurationStatus = "ACTIVE" | "INACTIVE";
export interface ObservabilityConfigurationSummary {
  ObservabilityConfigurationArn?: string;
  ObservabilityConfigurationName?: string;
  ObservabilityConfigurationRevision?: number;
}
export type ObservabilityConfigurationSummaryList =
  Array<ObservabilityConfigurationSummary>;
export type OperationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "SUCCEEDED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_FAILED"
  | "ROLLBACK_SUCCEEDED";
export interface OperationSummary {
  Id?: string;
  Type?: OperationType;
  Status?: OperationStatus;
  TargetArn?: string;
  StartedAt?: Date | string;
  EndedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type OperationSummaryList = Array<OperationSummary>;
export type OperationType =
  | "START_DEPLOYMENT"
  | "CREATE_SERVICE"
  | "PAUSE_SERVICE"
  | "RESUME_SERVICE"
  | "DELETE_SERVICE"
  | "UPDATE_SERVICE";
export interface PauseServiceRequest {
  ServiceArn: string;
}
export interface PauseServiceResponse {
  Service: Service;
  OperationId?: string;
}
export type ProviderType = "GITHUB" | "BITBUCKET";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResumeServiceRequest {
  ServiceArn: string;
}
export interface ResumeServiceResponse {
  Service: Service;
  OperationId?: string;
}
export type RoleArn = string;

export type Runtime =
  | "PYTHON_3"
  | "NODEJS_12"
  | "NODEJS_14"
  | "CORRETTO_8"
  | "CORRETTO_11"
  | "NODEJS_16"
  | "GO_1"
  | "DOTNET_6"
  | "PHP_81"
  | "RUBY_31"
  | "PYTHON_311"
  | "NODEJS_18"
  | "NODEJS_22";
export type RuntimeEnvironmentSecrets = Record<string, string>;
export type RuntimeEnvironmentSecretsName = string;

export type RuntimeEnvironmentSecretsValue = string;

export type RuntimeEnvironmentVariables = Record<string, string>;
export type RuntimeEnvironmentVariablesKey = string;

export type RuntimeEnvironmentVariablesValue = string;

export interface Service {
  ServiceName: string;
  ServiceId: string;
  ServiceArn: string;
  ServiceUrl?: string;
  CreatedAt: Date | string;
  UpdatedAt: Date | string;
  DeletedAt?: Date | string;
  Status: ServiceStatus;
  SourceConfiguration: SourceConfiguration;
  InstanceConfiguration: InstanceConfiguration;
  EncryptionConfiguration?: EncryptionConfiguration;
  HealthCheckConfiguration?: HealthCheckConfiguration;
  AutoScalingConfigurationSummary: AutoScalingConfigurationSummary;
  NetworkConfiguration: NetworkConfiguration;
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}
export type ServiceArnList = Array<string>;
export type ServiceId = string;

export type ServiceMaxResults = number;

export type ServiceName = string;

export interface ServiceObservabilityConfiguration {
  ObservabilityEnabled: boolean;
  ObservabilityConfigurationArn?: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type ServiceStatus =
  | "CREATE_FAILED"
  | "RUNNING"
  | "DELETED"
  | "DELETE_FAILED"
  | "PAUSED"
  | "OPERATION_IN_PROGRESS";
export interface ServiceSummary {
  ServiceName?: string;
  ServiceId?: string;
  ServiceArn?: string;
  ServiceUrl?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Status?: ServiceStatus;
}
export type ServiceSummaryList = Array<ServiceSummary>;
export interface SourceCodeVersion {
  Type: SourceCodeVersionType;
  Value: string;
}
export type SourceCodeVersionType = "BRANCH";
export interface SourceConfiguration {
  CodeRepository?: CodeRepository;
  ImageRepository?: ImageRepository;
  AutoDeploymentsEnabled?: boolean;
  AuthenticationConfiguration?: AuthenticationConfiguration;
}
export type SourceDirectory = string;

export type StartCommand = string;

export interface StartDeploymentRequest {
  ServiceArn: string;
}
export interface StartDeploymentResponse {
  OperationId: string;
}
export type ApprunnerString = string;

export type StringList = Array<string>;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Timestamp = Date | string;

export interface TraceConfiguration {
  Vendor: TracingVendor;
}
export type TracingVendor = "AWSXRAY";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDefaultAutoScalingConfigurationRequest {
  AutoScalingConfigurationArn: string;
}
export interface UpdateDefaultAutoScalingConfigurationResponse {
  AutoScalingConfiguration: AutoScalingConfiguration;
}
export interface UpdateServiceRequest {
  ServiceArn: string;
  SourceConfiguration?: SourceConfiguration;
  InstanceConfiguration?: InstanceConfiguration;
  AutoScalingConfigurationArn?: string;
  HealthCheckConfiguration?: HealthCheckConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}
export interface UpdateServiceResponse {
  Service: Service;
  OperationId: string;
}
export interface UpdateVpcIngressConnectionRequest {
  VpcIngressConnectionArn: string;
  IngressVpcConfiguration: IngressVpcConfiguration;
}
export interface UpdateVpcIngressConnectionResponse {
  VpcIngressConnection: VpcIngressConnection;
}
export type UUID = string;

export interface VpcConnector {
  VpcConnectorName?: string;
  VpcConnectorArn?: string;
  VpcConnectorRevision?: number;
  Subnets?: Array<string>;
  SecurityGroups?: Array<string>;
  Status?: VpcConnectorStatus;
  CreatedAt?: Date | string;
  DeletedAt?: Date | string;
}
export type VpcConnectorName = string;

export type VpcConnectors = Array<VpcConnector>;
export type VpcConnectorStatus = "ACTIVE" | "INACTIVE";
export interface VpcDNSTarget {
  VpcIngressConnectionArn?: string;
  VpcId?: string;
  DomainName?: string;
}
export type VpcDNSTargetList = Array<VpcDNSTarget>;
export interface VpcIngressConnection {
  VpcIngressConnectionArn?: string;
  VpcIngressConnectionName?: string;
  ServiceArn?: string;
  Status?: VpcIngressConnectionStatus;
  AccountId?: string;
  DomainName?: string;
  IngressVpcConfiguration?: IngressVpcConfiguration;
  CreatedAt?: Date | string;
  DeletedAt?: Date | string;
}
export type VpcIngressConnectionName = string;

export type VpcIngressConnectionStatus =
  | "AVAILABLE"
  | "PENDING_CREATION"
  | "PENDING_UPDATE"
  | "PENDING_DELETION"
  | "FAILED_CREATION"
  | "FAILED_UPDATE"
  | "FAILED_DELETION"
  | "DELETED";
export interface VpcIngressConnectionSummary {
  VpcIngressConnectionArn?: string;
  ServiceArn?: string;
}
export type VpcIngressConnectionSummaryList =
  Array<VpcIngressConnectionSummary>;
export declare namespace AssociateCustomDomain {
  export type Input = AssociateCustomDomainRequest;
  export type Output = AssociateCustomDomainResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | CommonAwsError;
}

export declare namespace CreateAutoScalingConfiguration {
  export type Input = CreateAutoScalingConfigurationRequest;
  export type Output = CreateAutoScalingConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateConnection {
  export type Input = CreateConnectionRequest;
  export type Output = CreateConnectionResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateObservabilityConfiguration {
  export type Input = CreateObservabilityConfigurationRequest;
  export type Output = CreateObservabilityConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateService {
  export type Input = CreateServiceRequest;
  export type Output = CreateServiceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateVpcConnector {
  export type Input = CreateVpcConnectorRequest;
  export type Output = CreateVpcConnectorResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace CreateVpcIngressConnection {
  export type Input = CreateVpcIngressConnectionRequest;
  export type Output = CreateVpcIngressConnectionResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace DeleteAutoScalingConfiguration {
  export type Input = DeleteAutoScalingConfigurationRequest;
  export type Output = DeleteAutoScalingConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConnection {
  export type Input = DeleteConnectionRequest;
  export type Output = DeleteConnectionResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteObservabilityConfiguration {
  export type Input = DeleteObservabilityConfigurationRequest;
  export type Output = DeleteObservabilityConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteService {
  export type Input = DeleteServiceRequest;
  export type Output = DeleteServiceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteVpcConnector {
  export type Input = DeleteVpcConnectorRequest;
  export type Output = DeleteVpcConnectorResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteVpcIngressConnection {
  export type Input = DeleteVpcIngressConnectionRequest;
  export type Output = DeleteVpcIngressConnectionResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAutoScalingConfiguration {
  export type Input = DescribeAutoScalingConfigurationRequest;
  export type Output = DescribeAutoScalingConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCustomDomains {
  export type Input = DescribeCustomDomainsRequest;
  export type Output = DescribeCustomDomainsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeObservabilityConfiguration {
  export type Input = DescribeObservabilityConfigurationRequest;
  export type Output = DescribeObservabilityConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeService {
  export type Input = DescribeServiceRequest;
  export type Output = DescribeServiceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeVpcConnector {
  export type Input = DescribeVpcConnectorRequest;
  export type Output = DescribeVpcConnectorResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeVpcIngressConnection {
  export type Input = DescribeVpcIngressConnectionRequest;
  export type Output = DescribeVpcIngressConnectionResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateCustomDomain {
  export type Input = DisassociateCustomDomainRequest;
  export type Output = DisassociateCustomDomainResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAutoScalingConfigurations {
  export type Input = ListAutoScalingConfigurationsRequest;
  export type Output = ListAutoScalingConfigurationsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListConnections {
  export type Input = ListConnectionsRequest;
  export type Output = ListConnectionsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListObservabilityConfigurations {
  export type Input = ListObservabilityConfigurationsRequest;
  export type Output = ListObservabilityConfigurationsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListOperations {
  export type Input = ListOperationsRequest;
  export type Output = ListOperationsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListServices {
  export type Input = ListServicesRequest;
  export type Output = ListServicesResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListServicesForAutoScalingConfiguration {
  export type Input = ListServicesForAutoScalingConfigurationRequest;
  export type Output = ListServicesForAutoScalingConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListVpcConnectors {
  export type Input = ListVpcConnectorsRequest;
  export type Output = ListVpcConnectorsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListVpcIngressConnections {
  export type Input = ListVpcIngressConnectionsRequest;
  export type Output = ListVpcIngressConnectionsResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace PauseService {
  export type Input = PauseServiceRequest;
  export type Output = PauseServiceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ResumeService {
  export type Input = ResumeServiceRequest;
  export type Output = ResumeServiceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartDeployment {
  export type Input = StartDeploymentRequest;
  export type Output = StartDeploymentResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDefaultAutoScalingConfiguration {
  export type Input = UpdateDefaultAutoScalingConfigurationRequest;
  export type Output = UpdateDefaultAutoScalingConfigurationResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateService {
  export type Input = UpdateServiceRequest;
  export type Output = UpdateServiceResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateVpcIngressConnection {
  export type Input = UpdateVpcIngressConnectionRequest;
  export type Output = UpdateVpcIngressConnectionResponse;
  export type Error =
    | InternalServiceErrorException
    | InvalidRequestException
    | InvalidStateException
    | ResourceNotFoundException
    | CommonAwsError;
}
