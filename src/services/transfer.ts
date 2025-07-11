import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface TransferService {
  createAccess(
    input: CreateAccessRequest,
  ): Effect.Effect<
    CreateAccessResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteAccess(
    input: DeleteAccessRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteHostKey(
    input: DeleteHostKeyRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteSshPublicKey(
    input: DeleteSshPublicKeyRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAccess(
    input: DescribeAccessRequest,
  ): Effect.Effect<
    DescribeAccessResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeExecution(
    input: DescribeExecutionRequest,
  ): Effect.Effect<
    DescribeExecutionResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeHostKey(
    input: DescribeHostKeyRequest,
  ): Effect.Effect<
    DescribeHostKeyResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeSecurityPolicy(
    input: DescribeSecurityPolicyRequest,
  ): Effect.Effect<
    DescribeSecurityPolicyResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  importHostKey(
    input: ImportHostKeyRequest,
  ): Effect.Effect<
    ImportHostKeyResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  importSshPublicKey(
    input: ImportSshPublicKeyRequest,
  ): Effect.Effect<
    ImportSshPublicKeyResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listAccesses(
    input: ListAccessesRequest,
  ): Effect.Effect<
    ListAccessesResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listExecutions(
    input: ListExecutionsRequest,
  ): Effect.Effect<
    ListExecutionsResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listFileTransferResults(
    input: ListFileTransferResultsRequest,
  ): Effect.Effect<
    ListFileTransferResultsResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listHostKeys(
    input: ListHostKeysRequest,
  ): Effect.Effect<
    ListHostKeysResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listSecurityPolicies(
    input: ListSecurityPoliciesRequest,
  ): Effect.Effect<
    ListSecurityPoliciesResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  sendWorkflowStepState(
    input: SendWorkflowStepStateRequest,
  ): Effect.Effect<
    SendWorkflowStepStateResponse,
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  startDirectoryListing(
    input: StartDirectoryListingRequest,
  ): Effect.Effect<
    StartDirectoryListingResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  startFileTransfer(
    input: StartFileTransferRequest,
  ): Effect.Effect<
    StartFileTransferResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  startRemoteDelete(
    input: StartRemoteDeleteRequest,
  ): Effect.Effect<
    StartRemoteDeleteResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  startRemoteMove(
    input: StartRemoteMoveRequest,
  ): Effect.Effect<
    StartRemoteMoveResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  startServer(
    input: StartServerRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  stopServer(
    input: StopServerRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  testConnection(
    input: TestConnectionRequest,
  ): Effect.Effect<
    TestConnectionResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  testIdentityProvider(
    input: TestIdentityProviderRequest,
  ): Effect.Effect<
    TestIdentityProviderResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateAccess(
    input: UpdateAccessRequest,
  ): Effect.Effect<
    UpdateAccessResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateHostKey(
    input: UpdateHostKeyRequest,
  ): Effect.Effect<
    UpdateHostKeyResponse,
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Transfer = TransferService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AddressAllocationId = string;

export type AddressAllocationIds = Array<string>;
export type AgreementId = string;

export type AgreementStatusType = "ACTIVE" | "INACTIVE";
export type Arn = string;

export interface As2ConnectorConfig {
  LocalProfileId?: string;
  PartnerProfileId?: string;
  MessageSubject?: string;
  Compression?: CompressionEnum;
  EncryptionAlgorithm?: EncryptionAlg;
  SigningAlgorithm?: SigningAlg;
  MdnSigningAlgorithm?: MdnSigningAlg;
  MdnResponse?: MdnResponse;
  BasicAuthSecretId?: string;
  PreserveContentType?: PreserveContentType;
}
export type As2ConnectorSecretId = string;

export type As2Id = string;

export type As2Transport = "HTTP";
export type As2Transports = Array<As2Transport>;
export type CallbackToken = string;

export type CertDate = Date | string;

export type Certificate = string;

export type CertificateBodyType = string;

export type CertificateChainType = string;

export type CertificateId = string;

export type CertificateIds = Array<string>;
export type CertificateStatusType = "ACTIVE" | "PENDING_ROTATION" | "INACTIVE";
export type CertificateType = "CERTIFICATE" | "CERTIFICATE_WITH_PRIVATE_KEY";
export type CertificateUsageType = "SIGNING" | "ENCRYPTION" | "TLS";
export type CertSerial = string;

export type CfnSshPublicKeys = Array<string>;
export interface CfnUserProperties {
  SshPublicKeys?: Array<string>;
}
export type CompressionEnum = "ZLIB" | "DISABLED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface ConnectorFileTransferResult {
  FilePath: string;
  StatusCode: TransferTableStatus;
  FailureCode?: string;
  FailureMessage?: string;
}
export type ConnectorFileTransferResults = Array<ConnectorFileTransferResult>;
export type ConnectorId = string;

export type ConnectorSecurityPolicyName = string;

export interface CopyStepDetails {
  Name?: string;
  DestinationFileLocation?: InputFileLocation;
  OverwriteExisting?: OverwriteExisting;
  SourceFileLocation?: string;
}
export interface CreateAccessRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role: string;
  ServerId: string;
  ExternalId: string;
}
export interface CreateAccessResponse {
  ServerId: string;
  ExternalId: string;
}
export interface CreateAgreementRequest {
  Description?: string;
  ServerId: string;
  LocalProfileId: string;
  PartnerProfileId: string;
  BaseDirectory?: string;
  AccessRole: string;
  Status?: AgreementStatusType;
  Tags?: Array<Tag>;
  PreserveFilename?: PreserveFilenameType;
  EnforceMessageSigning?: EnforceMessageSigningType;
  CustomDirectories?: CustomDirectoriesType;
}
export interface CreateAgreementResponse {
  AgreementId: string;
}
export interface CreateConnectorRequest {
  Url: string;
  As2Config?: As2ConnectorConfig;
  AccessRole: string;
  LoggingRole?: string;
  Tags?: Array<Tag>;
  SftpConfig?: SftpConnectorConfig;
  SecurityPolicyName?: string;
}
export interface CreateConnectorResponse {
  ConnectorId: string;
}
export interface CreateProfileRequest {
  As2Id: string;
  ProfileType: ProfileType;
  CertificateIds?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateProfileResponse {
  ProfileId: string;
}
export interface CreateServerRequest {
  Certificate?: string;
  Domain?: Domain;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  HostKey?: string;
  IdentityProviderDetails?: IdentityProviderDetails;
  IdentityProviderType?: IdentityProviderType;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  Protocols?: Array<Protocol>;
  ProtocolDetails?: ProtocolDetails;
  SecurityPolicyName?: string;
  Tags?: Array<Tag>;
  WorkflowDetails?: WorkflowDetails;
  StructuredLogDestinations?: Array<string>;
  S3StorageOptions?: S3StorageOptions;
  IpAddressType?: IpAddressType;
}
export interface CreateServerResponse {
  ServerId: string;
}
export interface CreateUserRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role: string;
  ServerId: string;
  SshPublicKeyBody?: string;
  Tags?: Array<Tag>;
  UserName: string;
}
export interface CreateUserResponse {
  ServerId: string;
  UserName: string;
}
export interface CreateWebAppRequest {
  IdentityProviderDetails: WebAppIdentityProviderDetails;
  AccessEndpoint?: string;
  WebAppUnits?: WebAppUnits;
  Tags?: Array<Tag>;
  WebAppEndpointPolicy?: WebAppEndpointPolicy;
}
export interface CreateWebAppResponse {
  WebAppId: string;
}
export interface CreateWorkflowRequest {
  Description?: string;
  Steps: Array<WorkflowStep>;
  OnExceptionSteps?: Array<WorkflowStep>;
  Tags?: Array<Tag>;
}
export interface CreateWorkflowResponse {
  WorkflowId: string;
}
export interface CustomDirectoriesType {
  FailedFilesDirectory: string;
  MdnFilesDirectory: string;
  PayloadFilesDirectory: string;
  StatusFilesDirectory: string;
  TemporaryFilesDirectory: string;
}
export interface CustomStepDetails {
  Name?: string;
  Target?: string;
  TimeoutSeconds?: number;
  SourceFileLocation?: string;
}
export type CustomStepStatus = "SUCCESS" | "FAILURE";
export type CustomStepTarget = string;

export type CustomStepTimeoutSeconds = number;

export type DateImported = Date | string;

export interface DecryptStepDetails {
  Name?: string;
  Type: EncryptionType;
  SourceFileLocation?: string;
  OverwriteExisting?: OverwriteExisting;
  DestinationFileLocation: InputFileLocation;
}
export interface DeleteAccessRequest {
  ServerId: string;
  ExternalId: string;
}
export interface DeleteAgreementRequest {
  AgreementId: string;
  ServerId: string;
}
export interface DeleteCertificateRequest {
  CertificateId: string;
}
export interface DeleteConnectorRequest {
  ConnectorId: string;
}
export interface DeleteHostKeyRequest {
  ServerId: string;
  HostKeyId: string;
}
export type DeleteId = string;

export interface DeleteProfileRequest {
  ProfileId: string;
}
export interface DeleteServerRequest {
  ServerId: string;
}
export interface DeleteSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}
export interface DeleteStepDetails {
  Name?: string;
  SourceFileLocation?: string;
}
export interface DeleteUserRequest {
  ServerId: string;
  UserName: string;
}
export interface DeleteWebAppCustomizationRequest {
  WebAppId: string;
}
export interface DeleteWebAppRequest {
  WebAppId: string;
}
export interface DeleteWorkflowRequest {
  WorkflowId: string;
}
export interface DescribeAccessRequest {
  ServerId: string;
  ExternalId: string;
}
export interface DescribeAccessResponse {
  ServerId: string;
  Access: DescribedAccess;
}
export interface DescribeAgreementRequest {
  AgreementId: string;
  ServerId: string;
}
export interface DescribeAgreementResponse {
  Agreement: DescribedAgreement;
}
export interface DescribeCertificateRequest {
  CertificateId: string;
}
export interface DescribeCertificateResponse {
  Certificate: DescribedCertificate;
}
export interface DescribeConnectorRequest {
  ConnectorId: string;
}
export interface DescribeConnectorResponse {
  Connector: DescribedConnector;
}
export interface DescribedAccess {
  HomeDirectory?: string;
  HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
  HomeDirectoryType?: HomeDirectoryType;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  ExternalId?: string;
}
export interface DescribedAgreement {
  Arn: string;
  AgreementId?: string;
  Description?: string;
  Status?: AgreementStatusType;
  ServerId?: string;
  LocalProfileId?: string;
  PartnerProfileId?: string;
  BaseDirectory?: string;
  AccessRole?: string;
  Tags?: Array<Tag>;
  PreserveFilename?: PreserveFilenameType;
  EnforceMessageSigning?: EnforceMessageSigningType;
  CustomDirectories?: CustomDirectoriesType;
}
export interface DescribedCertificate {
  Arn: string;
  CertificateId?: string;
  Usage?: CertificateUsageType;
  Status?: CertificateStatusType;
  Certificate?: string;
  CertificateChain?: string;
  ActiveDate?: Date | string;
  InactiveDate?: Date | string;
  Serial?: string;
  NotBeforeDate?: Date | string;
  NotAfterDate?: Date | string;
  Type?: CertificateType;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface DescribedConnector {
  Arn: string;
  ConnectorId?: string;
  Url?: string;
  As2Config?: As2ConnectorConfig;
  AccessRole?: string;
  LoggingRole?: string;
  Tags?: Array<Tag>;
  SftpConfig?: SftpConnectorConfig;
  ServiceManagedEgressIpAddresses?: Array<string>;
  SecurityPolicyName?: string;
}
export interface DescribedExecution {
  ExecutionId?: string;
  InitialFileLocation?: FileLocation;
  ServiceMetadata?: ServiceMetadata;
  ExecutionRole?: string;
  LoggingConfiguration?: LoggingConfiguration;
  PosixProfile?: PosixProfile;
  Status?: ExecutionStatus;
  Results?: ExecutionResults;
}
export interface DescribedHostKey {
  Arn: string;
  HostKeyId?: string;
  HostKeyFingerprint?: string;
  Description?: string;
  Type?: string;
  DateImported?: Date | string;
  Tags?: Array<Tag>;
}
export interface DescribedIdentityCenterConfig {
  ApplicationArn?: string;
  InstanceArn?: string;
  Role?: string;
}
export interface DescribedProfile {
  Arn: string;
  ProfileId?: string;
  ProfileType?: ProfileType;
  As2Id?: string;
  CertificateIds?: Array<string>;
  Tags?: Array<Tag>;
}
export interface DescribedSecurityPolicy {
  Fips?: boolean;
  SecurityPolicyName: string;
  SshCiphers?: Array<string>;
  SshKexs?: Array<string>;
  SshMacs?: Array<string>;
  TlsCiphers?: Array<string>;
  SshHostKeyAlgorithms?: Array<string>;
  Type?: SecurityPolicyResourceType;
  Protocols?: Array<SecurityPolicyProtocol>;
}
export interface DescribedServer {
  Arn: string;
  Certificate?: string;
  ProtocolDetails?: ProtocolDetails;
  Domain?: Domain;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  HostKeyFingerprint?: string;
  IdentityProviderDetails?: IdentityProviderDetails;
  IdentityProviderType?: IdentityProviderType;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  Protocols?: Array<Protocol>;
  SecurityPolicyName?: string;
  ServerId?: string;
  State?: State;
  Tags?: Array<Tag>;
  UserCount?: number;
  WorkflowDetails?: WorkflowDetails;
  StructuredLogDestinations?: Array<string>;
  S3StorageOptions?: S3StorageOptions;
  As2ServiceManagedEgressIpAddresses?: Array<string>;
  IpAddressType?: IpAddressType;
}
export interface DescribedUser {
  Arn: string;
  HomeDirectory?: string;
  HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
  HomeDirectoryType?: HomeDirectoryType;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  SshPublicKeys?: Array<SshPublicKey>;
  Tags?: Array<Tag>;
  UserName?: string;
}
export interface DescribedWebApp {
  Arn: string;
  WebAppId: string;
  DescribedIdentityProviderDetails?: DescribedWebAppIdentityProviderDetails;
  AccessEndpoint?: string;
  WebAppEndpoint?: string;
  WebAppUnits?: WebAppUnits;
  Tags?: Array<Tag>;
  WebAppEndpointPolicy?: WebAppEndpointPolicy;
}
export interface DescribedWebAppCustomization {
  Arn: string;
  WebAppId: string;
  Title?: string;
  LogoFile?: Uint8Array | string;
  FaviconFile?: Uint8Array | string;
}
interface _DescribedWebAppIdentityProviderDetails {
  IdentityCenterConfig?: DescribedIdentityCenterConfig;
}

export type DescribedWebAppIdentityProviderDetails =
  _DescribedWebAppIdentityProviderDetails & {
    IdentityCenterConfig: DescribedIdentityCenterConfig;
  };
export interface DescribedWorkflow {
  Arn: string;
  Description?: string;
  Steps?: Array<WorkflowStep>;
  OnExceptionSteps?: Array<WorkflowStep>;
  WorkflowId?: string;
  Tags?: Array<Tag>;
}
export interface DescribeExecutionRequest {
  ExecutionId: string;
  WorkflowId: string;
}
export interface DescribeExecutionResponse {
  WorkflowId: string;
  Execution: DescribedExecution;
}
export interface DescribeHostKeyRequest {
  ServerId: string;
  HostKeyId: string;
}
export interface DescribeHostKeyResponse {
  HostKey: DescribedHostKey;
}
export interface DescribeProfileRequest {
  ProfileId: string;
}
export interface DescribeProfileResponse {
  Profile: DescribedProfile;
}
export interface DescribeSecurityPolicyRequest {
  SecurityPolicyName: string;
}
export interface DescribeSecurityPolicyResponse {
  SecurityPolicy: DescribedSecurityPolicy;
}
export interface DescribeServerRequest {
  ServerId: string;
}
export interface DescribeServerResponse {
  Server: DescribedServer;
}
export interface DescribeUserRequest {
  ServerId: string;
  UserName: string;
}
export interface DescribeUserResponse {
  ServerId: string;
  User: DescribedUser;
}
export interface DescribeWebAppCustomizationRequest {
  WebAppId: string;
}
export interface DescribeWebAppCustomizationResponse {
  WebAppCustomization: DescribedWebAppCustomization;
}
export interface DescribeWebAppRequest {
  WebAppId: string;
}
export interface DescribeWebAppResponse {
  WebApp: DescribedWebApp;
}
export interface DescribeWorkflowRequest {
  WorkflowId: string;
}
export interface DescribeWorkflowResponse {
  Workflow: DescribedWorkflow;
}
export type Description = string;

export type DirectoryId = string;

export type DirectoryListingOptimization = "ENABLED" | "DISABLED";
export type Domain = "S3" | "EFS";
export interface EfsFileLocation {
  FileSystemId?: string;
  Path?: string;
}
export type EfsFileSystemId = string;

export type EfsPath = string;

export type EncryptionAlg =
  | "AES128_CBC"
  | "AES192_CBC"
  | "AES256_CBC"
  | "DES_EDE3_CBC"
  | "NONE";
export type EncryptionType = "PGP";
export interface EndpointDetails {
  AddressAllocationIds?: Array<string>;
  SubnetIds?: Array<string>;
  VpcEndpointId?: string;
  VpcId?: string;
  SecurityGroupIds?: Array<string>;
}
export type EndpointType = "PUBLIC" | "VPC" | "VPC_ENDPOINT";
export type EnforceMessageSigningType = "ENABLED" | "DISABLED";
export interface ExecutionError {
  Type: ExecutionErrorType;
  Message: string;
}
export type ExecutionErrorMessage = string;

export type ExecutionErrorType =
  | "PERMISSION_DENIED"
  | "CUSTOM_STEP_FAILED"
  | "THROTTLED"
  | "ALREADY_EXISTS"
  | "NOT_FOUND"
  | "BAD_REQUEST"
  | "TIMEOUT"
  | "INTERNAL_SERVER_ERROR";
export type ExecutionId = string;

export interface ExecutionResults {
  Steps?: Array<ExecutionStepResult>;
  OnExceptionSteps?: Array<ExecutionStepResult>;
}
export type ExecutionStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "EXCEPTION"
  | "HANDLING_EXCEPTION";
export interface ExecutionStepResult {
  StepType?: WorkflowStepType;
  Outputs?: string;
  Error?: ExecutionError;
}
export type ExecutionStepResults = Array<ExecutionStepResult>;
export type ExternalId = string;

export type FailureCode = string;

export interface FileLocation {
  S3FileLocation?: S3FileLocation;
  EfsFileLocation?: EfsFileLocation;
}
export type FilePath = string;

export type FilePaths = Array<string>;
export type Fips = boolean;

export type TransferFunction = string;

export type HomeDirectory = string;

export interface HomeDirectoryMapEntry {
  Entry: string;
  Target: string;
  Type?: MapType;
}
export type HomeDirectoryMappings = Array<HomeDirectoryMapEntry>;
export type HomeDirectoryType = "PATH" | "LOGICAL";
export type HostKey = string;

export type HostKeyDescription = string;

export type HostKeyFingerprint = string;

export type HostKeyId = string;

export type HostKeyType = string;

export type IdentityCenterApplicationArn = string;

export interface IdentityCenterConfig {
  InstanceArn?: string;
  Role?: string;
}
export type IdentityCenterInstanceArn = string;

export interface IdentityProviderDetails {
  Url?: string;
  InvocationRole?: string;
  DirectoryId?: string;
  Function?: string;
  SftpAuthenticationMethods?: SftpAuthenticationMethods;
}
export type IdentityProviderType =
  | "SERVICE_MANAGED"
  | "API_GATEWAY"
  | "AWS_DIRECTORY_SERVICE"
  | "AWS_LAMBDA";
export interface ImportCertificateRequest {
  Usage: CertificateUsageType;
  Certificate: string;
  CertificateChain?: string;
  PrivateKey?: string;
  ActiveDate?: Date | string;
  InactiveDate?: Date | string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface ImportCertificateResponse {
  CertificateId: string;
}
export interface ImportHostKeyRequest {
  ServerId: string;
  HostKeyBody: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface ImportHostKeyResponse {
  ServerId: string;
  HostKeyId: string;
}
export interface ImportSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyBody: string;
  UserName: string;
}
export interface ImportSshPublicKeyResponse {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}
export interface InputFileLocation {
  S3FileLocation?: S3InputFileLocation;
  EfsFileLocation?: EfsFileLocation;
}
export declare class InternalServiceError extends EffectData.TaggedError(
  "InternalServiceError",
)<{
  readonly Message: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message: string;
}> {}
export type IpAddressType = "IPV4" | "DUALSTACK";
export interface ListAccessesRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
export interface ListAccessesResponse {
  NextToken?: string;
  ServerId: string;
  Accesses: Array<ListedAccess>;
}
export interface ListAgreementsRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
export interface ListAgreementsResponse {
  NextToken?: string;
  Agreements: Array<ListedAgreement>;
}
export interface ListCertificatesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCertificatesResponse {
  NextToken?: string;
  Certificates: Array<ListedCertificate>;
}
export interface ListConnectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectorsResponse {
  NextToken?: string;
  Connectors: Array<ListedConnector>;
}
export interface ListedAccess {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  Role?: string;
  ExternalId?: string;
}
export type ListedAccesses = Array<ListedAccess>;
export interface ListedAgreement {
  Arn?: string;
  AgreementId?: string;
  Description?: string;
  Status?: AgreementStatusType;
  ServerId?: string;
  LocalProfileId?: string;
  PartnerProfileId?: string;
}
export type ListedAgreements = Array<ListedAgreement>;
export interface ListedCertificate {
  Arn?: string;
  CertificateId?: string;
  Usage?: CertificateUsageType;
  Status?: CertificateStatusType;
  ActiveDate?: Date | string;
  InactiveDate?: Date | string;
  Type?: CertificateType;
  Description?: string;
}
export type ListedCertificates = Array<ListedCertificate>;
export interface ListedConnector {
  Arn?: string;
  ConnectorId?: string;
  Url?: string;
}
export type ListedConnectors = Array<ListedConnector>;
export interface ListedExecution {
  ExecutionId?: string;
  InitialFileLocation?: FileLocation;
  ServiceMetadata?: ServiceMetadata;
  Status?: ExecutionStatus;
}
export type ListedExecutions = Array<ListedExecution>;
export interface ListedHostKey {
  Arn: string;
  HostKeyId?: string;
  Fingerprint?: string;
  Description?: string;
  Type?: string;
  DateImported?: Date | string;
}
export type ListedHostKeys = Array<ListedHostKey>;
export interface ListedProfile {
  Arn?: string;
  ProfileId?: string;
  As2Id?: string;
  ProfileType?: ProfileType;
}
export type ListedProfiles = Array<ListedProfile>;
export interface ListedServer {
  Arn: string;
  Domain?: Domain;
  IdentityProviderType?: IdentityProviderType;
  EndpointType?: EndpointType;
  LoggingRole?: string;
  ServerId?: string;
  State?: State;
  UserCount?: number;
}
export type ListedServers = Array<ListedServer>;
export interface ListedUser {
  Arn: string;
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  Role?: string;
  SshPublicKeyCount?: number;
  UserName?: string;
}
export type ListedUsers = Array<ListedUser>;
export interface ListedWebApp {
  Arn: string;
  WebAppId: string;
  AccessEndpoint?: string;
  WebAppEndpoint?: string;
}
export type ListedWebApps = Array<ListedWebApp>;
export interface ListedWorkflow {
  WorkflowId?: string;
  Description?: string;
  Arn?: string;
}
export type ListedWorkflows = Array<ListedWorkflow>;
export interface ListExecutionsRequest {
  MaxResults?: number;
  NextToken?: string;
  WorkflowId: string;
}
export interface ListExecutionsResponse {
  NextToken?: string;
  WorkflowId: string;
  Executions: Array<ListedExecution>;
}
export interface ListFileTransferResultsRequest {
  ConnectorId: string;
  TransferId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFileTransferResultsResponse {
  FileTransferResults: Array<ConnectorFileTransferResult>;
  NextToken?: string;
}
export interface ListHostKeysRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
export interface ListHostKeysResponse {
  NextToken?: string;
  ServerId: string;
  HostKeys: Array<ListedHostKey>;
}
export type ListingId = string;

export interface ListProfilesRequest {
  MaxResults?: number;
  NextToken?: string;
  ProfileType?: ProfileType;
}
export interface ListProfilesResponse {
  NextToken?: string;
  Profiles: Array<ListedProfile>;
}
export interface ListSecurityPoliciesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSecurityPoliciesResponse {
  NextToken?: string;
  SecurityPolicyNames: Array<string>;
}
export interface ListServersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServersResponse {
  NextToken?: string;
  Servers: Array<ListedServer>;
}
export interface ListTagsForResourceRequest {
  Arn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTagsForResourceResponse {
  Arn?: string;
  NextToken?: string;
  Tags?: Array<Tag>;
}
export interface ListUsersRequest {
  MaxResults?: number;
  NextToken?: string;
  ServerId: string;
}
export interface ListUsersResponse {
  NextToken?: string;
  ServerId: string;
  Users: Array<ListedUser>;
}
export interface ListWebAppsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListWebAppsResponse {
  NextToken?: string;
  WebApps: Array<ListedWebApp>;
}
export interface ListWorkflowsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListWorkflowsResponse {
  NextToken?: string;
  Workflows: Array<ListedWorkflow>;
}
export interface LoggingConfiguration {
  LoggingRole?: string;
  LogGroupName?: string;
}
export type LogGroupName = string;

export type MapEntry = string;

export type MapTarget = string;

export type MapType = "FILE" | "DIRECTORY";
export type MaxConcurrentConnections = number;

export type MaxItems = number;

export type MaxResults = number;

export type MdnResponse = "SYNC" | "NONE";
export type MdnSigningAlg =
  | "SHA256"
  | "SHA384"
  | "SHA512"
  | "SHA1"
  | "NONE"
  | "DEFAULT";
export type Message = string;

export type MessageSubject = string;

export type MoveId = string;

export type NextToken = string;

export type NullableRole = string;

export type OnPartialUploadWorkflowDetails = Array<WorkflowDetail>;
export type OnUploadWorkflowDetails = Array<WorkflowDetail>;
export type OutputFileName = string;

export type OverwriteExisting = "TRUE" | "FALSE";
export type PassiveIp = string;

export type Policy = string;

export type PosixId = number;

export interface PosixProfile {
  Uid: number;
  Gid: number;
  SecondaryGids?: Array<number>;
}
export type PostAuthenticationLoginBanner = string;

export type PreAuthenticationLoginBanner = string;

export type PreserveContentType = "ENABLED" | "DISABLED";
export type PreserveFilenameType = "ENABLED" | "DISABLED";
export type PrivateKeyType = string;

export type ProfileId = string;

export type ProfileType = "LOCAL" | "PARTNER";
export type Protocol = "SFTP" | "FTP" | "FTPS" | "AS2";
export interface ProtocolDetails {
  PassiveIp?: string;
  TlsSessionResumptionMode?: TlsSessionResumptionMode;
  SetStatOption?: SetStatOption;
  As2Transports?: Array<As2Transport>;
}
export type Protocols = Array<Protocol>;
export type Resource = string;

export declare class ResourceExistsException extends EffectData.TaggedError(
  "ResourceExistsException",
)<{
  readonly Message: string;
  readonly Resource: string;
  readonly ResourceType: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly Resource: string;
  readonly ResourceType: string;
}> {}
export type ResourceType = string;

export type Response = string;

export type RetryAfterSeconds = string;

export type Role = string;

export type S3Bucket = string;

export type S3Etag = string;

export interface S3FileLocation {
  Bucket?: string;
  Key?: string;
  VersionId?: string;
  Etag?: string;
}
export interface S3InputFileLocation {
  Bucket?: string;
  Key?: string;
}
export type S3Key = string;

export interface S3StorageOptions {
  DirectoryListingOptimization?: DirectoryListingOptimization;
}
export interface S3Tag {
  Key: string;
  Value: string;
}
export type S3TagKey = string;

export type S3Tags = Array<S3Tag>;
export type S3TagValue = string;

export type S3VersionId = string;

export type SecondaryGids = Array<number>;
export type SecretId = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SecurityPolicyName = string;

export type SecurityPolicyNames = Array<string>;
export type SecurityPolicyOption = string;

export type SecurityPolicyOptions = Array<string>;
export type SecurityPolicyProtocol = "SFTP" | "FTPS";
export type SecurityPolicyProtocols = Array<SecurityPolicyProtocol>;
export type SecurityPolicyResourceType = "SERVER" | "CONNECTOR";
export interface SendWorkflowStepStateRequest {
  WorkflowId: string;
  ExecutionId: string;
  Token: string;
  Status: CustomStepStatus;
}
export interface SendWorkflowStepStateResponse {}
export type ServerId = string;

export type ServiceErrorMessage = string;

export type ServiceManagedEgressIpAddress = string;

export type ServiceManagedEgressIpAddresses = Array<string>;
export interface ServiceMetadata {
  UserDetails: UserDetails;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SessionId = string;

export type SetStatOption = "DEFAULT" | "ENABLE_NO_OP";
export type SftpAuthenticationMethods =
  | "PASSWORD"
  | "PUBLIC_KEY"
  | "PUBLIC_KEY_OR_PASSWORD"
  | "PUBLIC_KEY_AND_PASSWORD";
export interface SftpConnectorConfig {
  UserSecretId?: string;
  TrustedHostKeys?: Array<string>;
  MaxConcurrentConnections?: number;
}
export interface SftpConnectorConnectionDetails {
  HostKey?: string;
}
export type SftpConnectorHostKey = string;

export type SftpConnectorTrustedHostKey = string;

export type SftpConnectorTrustedHostKeyList = Array<string>;
export type SigningAlg = "SHA256" | "SHA384" | "SHA512" | "SHA1" | "NONE";
export type SourceFileLocation = string;

export type SourceIp = string;

export interface SshPublicKey {
  DateImported: Date | string;
  SshPublicKeyBody: string;
  SshPublicKeyId: string;
}
export type SshPublicKeyBody = string;

export type SshPublicKeyCount = number;

export type SshPublicKeyId = string;

export type SshPublicKeys = Array<SshPublicKey>;
export interface StartDirectoryListingRequest {
  ConnectorId: string;
  RemoteDirectoryPath: string;
  MaxItems?: number;
  OutputDirectoryPath: string;
}
export interface StartDirectoryListingResponse {
  ListingId: string;
  OutputFileName: string;
}
export interface StartFileTransferRequest {
  ConnectorId: string;
  SendFilePaths?: Array<string>;
  RetrieveFilePaths?: Array<string>;
  LocalDirectoryPath?: string;
  RemoteDirectoryPath?: string;
}
export interface StartFileTransferResponse {
  TransferId: string;
}
export interface StartRemoteDeleteRequest {
  ConnectorId: string;
  DeletePath: string;
}
export interface StartRemoteDeleteResponse {
  DeleteId: string;
}
export interface StartRemoteMoveRequest {
  ConnectorId: string;
  SourcePath: string;
  TargetPath: string;
}
export interface StartRemoteMoveResponse {
  MoveId: string;
}
export interface StartServerRequest {
  ServerId: string;
}
export type State =
  | "OFFLINE"
  | "ONLINE"
  | "STARTING"
  | "STOPPING"
  | "START_FAILED"
  | "STOP_FAILED";
export type Status = string;

export type StatusCode = number;

export type StepResultOutputsJson = string;

export interface StopServerRequest {
  ServerId: string;
}
export type StructuredLogDestinations = Array<string>;
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  Arn: string;
  Tags: Array<Tag>;
}
export type Tags = Array<Tag>;
export interface TagStepDetails {
  Name?: string;
  Tags?: Array<S3Tag>;
  SourceFileLocation?: string;
}
export type TagValue = string;

export interface TestConnectionRequest {
  ConnectorId: string;
}
export interface TestConnectionResponse {
  ConnectorId?: string;
  Status?: string;
  StatusMessage?: string;
  SftpConnectionDetails?: SftpConnectorConnectionDetails;
}
export interface TestIdentityProviderRequest {
  ServerId: string;
  ServerProtocol?: Protocol;
  SourceIp?: string;
  UserName: string;
  UserPassword?: string;
}
export interface TestIdentityProviderResponse {
  Response?: string;
  StatusCode: number;
  Message?: string;
  Url: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly RetryAfterSeconds?: string;
}> {}
export type TlsSessionResumptionMode = "DISABLED" | "ENABLED" | "ENFORCED";
export type TransferId = string;

export type TransferTableStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED";
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: Array<string>;
}
export interface UpdateAccessRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  ServerId: string;
  ExternalId: string;
}
export interface UpdateAccessResponse {
  ServerId: string;
  ExternalId: string;
}
export interface UpdateAgreementRequest {
  AgreementId: string;
  ServerId: string;
  Description?: string;
  Status?: AgreementStatusType;
  LocalProfileId?: string;
  PartnerProfileId?: string;
  BaseDirectory?: string;
  AccessRole?: string;
  PreserveFilename?: PreserveFilenameType;
  EnforceMessageSigning?: EnforceMessageSigningType;
  CustomDirectories?: CustomDirectoriesType;
}
export interface UpdateAgreementResponse {
  AgreementId: string;
}
export interface UpdateCertificateRequest {
  CertificateId: string;
  ActiveDate?: Date | string;
  InactiveDate?: Date | string;
  Description?: string;
}
export interface UpdateCertificateResponse {
  CertificateId: string;
}
export interface UpdateConnectorRequest {
  ConnectorId: string;
  Url?: string;
  As2Config?: As2ConnectorConfig;
  AccessRole?: string;
  LoggingRole?: string;
  SftpConfig?: SftpConnectorConfig;
  SecurityPolicyName?: string;
}
export interface UpdateConnectorResponse {
  ConnectorId: string;
}
export interface UpdateHostKeyRequest {
  ServerId: string;
  HostKeyId: string;
  Description: string;
}
export interface UpdateHostKeyResponse {
  ServerId: string;
  HostKeyId: string;
}
export interface UpdateProfileRequest {
  ProfileId: string;
  CertificateIds?: Array<string>;
}
export interface UpdateProfileResponse {
  ProfileId: string;
}
export interface UpdateServerRequest {
  Certificate?: string;
  ProtocolDetails?: ProtocolDetails;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  HostKey?: string;
  IdentityProviderDetails?: IdentityProviderDetails;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  Protocols?: Array<Protocol>;
  SecurityPolicyName?: string;
  ServerId: string;
  WorkflowDetails?: WorkflowDetails;
  StructuredLogDestinations?: Array<string>;
  S3StorageOptions?: S3StorageOptions;
  IpAddressType?: IpAddressType;
}
export interface UpdateServerResponse {
  ServerId: string;
}
export interface UpdateUserRequest {
  HomeDirectory?: string;
  HomeDirectoryType?: HomeDirectoryType;
  HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
  Policy?: string;
  PosixProfile?: PosixProfile;
  Role?: string;
  ServerId: string;
  UserName: string;
}
export interface UpdateUserResponse {
  ServerId: string;
  UserName: string;
}
export interface UpdateWebAppCustomizationRequest {
  WebAppId: string;
  Title?: string;
  LogoFile?: Uint8Array | string;
  FaviconFile?: Uint8Array | string;
}
export interface UpdateWebAppCustomizationResponse {
  WebAppId: string;
}
export interface UpdateWebAppIdentityCenterConfig {
  Role?: string;
}
interface _UpdateWebAppIdentityProviderDetails {
  IdentityCenterConfig?: UpdateWebAppIdentityCenterConfig;
}

export type UpdateWebAppIdentityProviderDetails =
  _UpdateWebAppIdentityProviderDetails & {
    IdentityCenterConfig: UpdateWebAppIdentityCenterConfig;
  };
export interface UpdateWebAppRequest {
  WebAppId: string;
  IdentityProviderDetails?: UpdateWebAppIdentityProviderDetails;
  AccessEndpoint?: string;
  WebAppUnits?: WebAppUnits;
}
export interface UpdateWebAppResponse {
  WebAppId: string;
}
export type Url = string;

export type UserCount = number;

export interface UserDetails {
  UserName: string;
  ServerId: string;
  SessionId?: string;
}
export type UserName = string;

export type UserPassword = string;

export type VpcEndpointId = string;

export type VpcId = string;

export type WebAppAccessEndpoint = string;

export type WebAppEndpoint = string;

export type WebAppEndpointPolicy = "FIPS" | "STANDARD";
export type WebAppFaviconFile = Uint8Array | string;

export type WebAppId = string;

interface _WebAppIdentityProviderDetails {
  IdentityCenterConfig?: IdentityCenterConfig;
}

export type WebAppIdentityProviderDetails = _WebAppIdentityProviderDetails & {
  IdentityCenterConfig: IdentityCenterConfig;
};
export type WebAppLogoFile = Uint8Array | string;

export type WebAppTitle = string;

export type WebAppUnitCount = number;

interface _WebAppUnits {
  Provisioned?: number;
}

export type WebAppUnits = _WebAppUnits & { Provisioned: number };
export type WorkflowDescription = string;

export interface WorkflowDetail {
  WorkflowId: string;
  ExecutionRole: string;
}
export interface WorkflowDetails {
  OnUpload?: Array<WorkflowDetail>;
  OnPartialUpload?: Array<WorkflowDetail>;
}
export type WorkflowId = string;

export interface WorkflowStep {
  Type?: WorkflowStepType;
  CopyStepDetails?: CopyStepDetails;
  CustomStepDetails?: CustomStepDetails;
  DeleteStepDetails?: DeleteStepDetails;
  TagStepDetails?: TagStepDetails;
  DecryptStepDetails?: DecryptStepDetails;
}
export type WorkflowStepName = string;

export type WorkflowSteps = Array<WorkflowStep>;
export type WorkflowStepType = "COPY" | "CUSTOM" | "TAG" | "DELETE" | "DECRYPT";
export declare namespace CreateAccess {
  export type Input = CreateAccessRequest;
  export type Output = CreateAccessResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteAccess {
  export type Input = DeleteAccessRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteHostKey {
  export type Input = DeleteHostKeyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSshPublicKey {
  export type Input = DeleteSshPublicKeyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAccess {
  export type Input = DescribeAccessRequest;
  export type Output = DescribeAccessResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeExecution {
  export type Input = DescribeExecutionRequest;
  export type Output = DescribeExecutionResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeHostKey {
  export type Input = DescribeHostKeyRequest;
  export type Output = DescribeHostKeyResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeSecurityPolicy {
  export type Input = DescribeSecurityPolicyRequest;
  export type Output = DescribeSecurityPolicyResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ImportHostKey {
  export type Input = ImportHostKeyRequest;
  export type Output = ImportHostKeyResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ImportSshPublicKey {
  export type Input = ImportSshPublicKeyRequest;
  export type Output = ImportSshPublicKeyResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAccesses {
  export type Input = ListAccessesRequest;
  export type Output = ListAccessesResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListExecutions {
  export type Input = ListExecutionsRequest;
  export type Output = ListExecutionsResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListFileTransferResults {
  export type Input = ListFileTransferResultsRequest;
  export type Output = ListFileTransferResultsResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListHostKeys {
  export type Input = ListHostKeysRequest;
  export type Output = ListHostKeysResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListSecurityPolicies {
  export type Input = ListSecurityPoliciesRequest;
  export type Output = ListSecurityPoliciesResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceError
    | InvalidNextTokenException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SendWorkflowStepState {
  export type Input = SendWorkflowStepStateRequest;
  export type Output = SendWorkflowStepStateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartDirectoryListing {
  export type Input = StartDirectoryListingRequest;
  export type Output = StartDirectoryListingResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartFileTransfer {
  export type Input = StartFileTransferRequest;
  export type Output = StartFileTransferResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartRemoteDelete {
  export type Input = StartRemoteDeleteRequest;
  export type Output = StartRemoteDeleteResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartRemoteMove {
  export type Input = StartRemoteMoveRequest;
  export type Output = StartRemoteMoveResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartServer {
  export type Input = StartServerRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StopServer {
  export type Input = StopServerRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TestConnection {
  export type Input = TestConnectionRequest;
  export type Output = TestConnectionResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TestIdentityProvider {
  export type Input = TestIdentityProviderRequest;
  export type Output = TestIdentityProviderResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateAccess {
  export type Input = UpdateAccessRequest;
  export type Output = UpdateAccessResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateHostKey {
  export type Input = UpdateHostKeyRequest;
  export type Output = UpdateHostKeyResponse;
  export type Error =
    | InternalServiceError
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}
