import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSIESnowballJobManagementService {
  cancelCluster(
    input: CancelClusterRequest,
  ): Effect.Effect<
    CancelClusterResult,
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError
  >;
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    CancelJobResult,
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError
  >;
  createAddress(
    input: CreateAddressRequest,
  ): Effect.Effect<
    CreateAddressResult,
    InvalidAddressException | UnsupportedAddressException | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResult,
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResult,
    | ClusterLimitExceededException
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError
  >;
  createLongTermPricing(
    input: CreateLongTermPricingRequest,
  ): Effect.Effect<
    CreateLongTermPricingResult,
    InvalidResourceException | CommonAwsError
  >;
  createReturnShippingLabel(
    input: CreateReturnShippingLabelRequest,
  ): Effect.Effect<
    CreateReturnShippingLabelResult,
    | ConflictException
    | InvalidInputCombinationException
    | InvalidJobStateException
    | InvalidResourceException
    | ReturnShippingLabelAlreadyExistsException
    | CommonAwsError
  >;
  describeAddress(
    input: DescribeAddressRequest,
  ): Effect.Effect<
    DescribeAddressResult,
    InvalidResourceException | CommonAwsError
  >;
  describeAddresses(
    input: DescribeAddressesRequest,
  ): Effect.Effect<
    DescribeAddressesResult,
    InvalidNextTokenException | InvalidResourceException | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterRequest,
  ): Effect.Effect<
    DescribeClusterResult,
    InvalidResourceException | CommonAwsError
  >;
  describeJob(
    input: DescribeJobRequest,
  ): Effect.Effect<
    DescribeJobResult,
    InvalidResourceException | CommonAwsError
  >;
  describeReturnShippingLabel(
    input: DescribeReturnShippingLabelRequest,
  ): Effect.Effect<
    DescribeReturnShippingLabelResult,
    | ConflictException
    | InvalidJobStateException
    | InvalidResourceException
    | CommonAwsError
  >;
  getJobManifest(
    input: GetJobManifestRequest,
  ): Effect.Effect<
    GetJobManifestResult,
    InvalidJobStateException | InvalidResourceException | CommonAwsError
  >;
  getJobUnlockCode(
    input: GetJobUnlockCodeRequest,
  ): Effect.Effect<
    GetJobUnlockCodeResult,
    InvalidJobStateException | InvalidResourceException | CommonAwsError
  >;
  getSnowballUsage(
    input: GetSnowballUsageRequest,
  ): Effect.Effect<GetSnowballUsageResult, CommonAwsError>;
  getSoftwareUpdates(
    input: GetSoftwareUpdatesRequest,
  ): Effect.Effect<
    GetSoftwareUpdatesResult,
    InvalidJobStateException | InvalidResourceException | CommonAwsError
  >;
  listClusterJobs(
    input: ListClusterJobsRequest,
  ): Effect.Effect<
    ListClusterJobsResult,
    InvalidNextTokenException | InvalidResourceException | CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResult,
    InvalidNextTokenException | CommonAwsError
  >;
  listCompatibleImages(
    input: ListCompatibleImagesRequest,
  ): Effect.Effect<
    ListCompatibleImagesResult,
    Ec2RequestFailedException | InvalidNextTokenException | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<ListJobsResult, InvalidNextTokenException | CommonAwsError>;
  listLongTermPricing(
    input: ListLongTermPricingRequest,
  ): Effect.Effect<
    ListLongTermPricingResult,
    InvalidNextTokenException | InvalidResourceException | CommonAwsError
  >;
  listPickupLocations(
    input: ListPickupLocationsRequest,
  ): Effect.Effect<
    ListPickupLocationsResult,
    InvalidResourceException | CommonAwsError
  >;
  listServiceVersions(
    input: ListServiceVersionsRequest,
  ): Effect.Effect<
    ListServiceVersionsResult,
    InvalidNextTokenException | InvalidResourceException | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResult,
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError
  >;
  updateJob(
    input: UpdateJobRequest,
  ): Effect.Effect<
    UpdateJobResult,
    | ClusterLimitExceededException
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError
  >;
  updateJobShipmentState(
    input: UpdateJobShipmentStateRequest,
  ): Effect.Effect<
    UpdateJobShipmentStateResult,
    InvalidJobStateException | InvalidResourceException | CommonAwsError
  >;
  updateLongTermPricing(
    input: UpdateLongTermPricingRequest,
  ): Effect.Effect<
    UpdateLongTermPricingResult,
    InvalidResourceException | CommonAwsError
  >;
}

export type Snowball = AWSIESnowballJobManagementService;

export interface Address {
  AddressId?: string;
  Name?: string;
  Company?: string;
  Street1?: string;
  Street2?: string;
  Street3?: string;
  City?: string;
  StateOrProvince?: string;
  PrefectureOrDistrict?: string;
  Landmark?: string;
  Country?: string;
  PostalCode?: string;
  PhoneNumber?: string;
  IsRestricted?: boolean;
  Type?: AddressType;
}
export type AddressId = string;

export type AddressList = Array<Address>;
export type AddressType = "CUST_PICKUP" | "AWS_SHIP";
export type AmiId = string;

export type SnowballBoolean = boolean;

export interface CancelClusterRequest {
  ClusterId: string;
}
export interface CancelClusterResult {}
export interface CancelJobRequest {
  JobId: string;
}
export interface CancelJobResult {}
export type ClusterId = string;

export declare class ClusterLimitExceededException extends EffectData.TaggedError(
  "ClusterLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ClusterListEntry {
  ClusterId?: string;
  ClusterState?: ClusterState;
  CreationDate?: Date | string;
  Description?: string;
}
export type ClusterListEntryList = Array<ClusterListEntry>;
export interface ClusterMetadata {
  ClusterId?: string;
  Description?: string;
  KmsKeyARN?: string;
  RoleARN?: string;
  ClusterState?: ClusterState;
  JobType?: JobType;
  SnowballType?: SnowballType;
  CreationDate?: Date | string;
  Resources?: JobResource;
  AddressId?: string;
  ShippingOption?: ShippingOption;
  Notification?: Notification;
  ForwardingAddressId?: string;
  TaxDocuments?: TaxDocuments;
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
}
export type ClusterState =
  | "AWAITING_QUORUM"
  | "PENDING"
  | "IN_USE"
  | "COMPLETE"
  | "CANCELLED";
export interface CompatibleImage {
  AmiId?: string;
  Name?: string;
}
export type CompatibleImageList = Array<CompatibleImage>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly ConflictResource?: string;
  readonly Message?: string;
}> {}
export interface CreateAddressRequest {
  Address: Address;
}
export interface CreateAddressResult {
  AddressId?: string;
}
export interface CreateClusterRequest {
  JobType: JobType;
  Resources?: JobResource;
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
  Description?: string;
  AddressId: string;
  KmsKeyARN?: string;
  RoleARN?: string;
  SnowballType: SnowballType;
  ShippingOption: ShippingOption;
  Notification?: Notification;
  ForwardingAddressId?: string;
  TaxDocuments?: TaxDocuments;
  RemoteManagement?: RemoteManagement;
  InitialClusterSize?: number;
  ForceCreateJobs?: boolean;
  LongTermPricingIds?: Array<string>;
  SnowballCapacityPreference?: SnowballCapacity;
}
export interface CreateClusterResult {
  ClusterId?: string;
  JobListEntries?: Array<JobListEntry>;
}
export interface CreateJobRequest {
  JobType?: JobType;
  Resources?: JobResource;
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
  Description?: string;
  AddressId?: string;
  KmsKeyARN?: string;
  RoleARN?: string;
  SnowballCapacityPreference?: SnowballCapacity;
  ShippingOption?: ShippingOption;
  Notification?: Notification;
  ClusterId?: string;
  SnowballType?: SnowballType;
  ForwardingAddressId?: string;
  TaxDocuments?: TaxDocuments;
  DeviceConfiguration?: DeviceConfiguration;
  RemoteManagement?: RemoteManagement;
  LongTermPricingId?: string;
  ImpactLevel?: ImpactLevel;
  PickupDetails?: PickupDetails;
}
export interface CreateJobResult {
  JobId?: string;
}
export interface CreateLongTermPricingRequest {
  LongTermPricingType: LongTermPricingType;
  IsLongTermPricingAutoRenew?: boolean;
  SnowballType: SnowballType;
}
export interface CreateLongTermPricingResult {
  LongTermPricingId?: string;
}
export interface CreateReturnShippingLabelRequest {
  JobId: string;
  ShippingOption?: ShippingOption;
}
export interface CreateReturnShippingLabelResult {
  Status?: ShippingLabelStatus;
}
export interface DataTransfer {
  BytesTransferred?: number;
  ObjectsTransferred?: number;
  TotalBytes?: number;
  TotalObjects?: number;
}
export interface DependentService {
  ServiceName?: ServiceName;
  ServiceVersion?: ServiceVersion;
}
export type DependentServiceList = Array<DependentService>;
export interface DescribeAddressesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAddressesResult {
  Addresses?: Array<Address>;
  NextToken?: string;
}
export interface DescribeAddressRequest {
  AddressId: string;
}
export interface DescribeAddressResult {
  Address?: Address;
}
export interface DescribeClusterRequest {
  ClusterId: string;
}
export interface DescribeClusterResult {
  ClusterMetadata?: ClusterMetadata;
}
export interface DescribeJobRequest {
  JobId: string;
}
export interface DescribeJobResult {
  JobMetadata?: JobMetadata;
  SubJobMetadata?: Array<JobMetadata>;
}
export interface DescribeReturnShippingLabelRequest {
  JobId: string;
}
export interface DescribeReturnShippingLabelResult {
  Status?: ShippingLabelStatus;
  ExpirationDate?: Date | string;
  ReturnShippingLabelURI?: string;
}
export interface DeviceConfiguration {
  SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration;
}
export type DevicePickupId = string;

export type DeviceServiceName =
  | "NFS_ON_DEVICE_SERVICE"
  | "S3_ON_DEVICE_SERVICE";
export interface Ec2AmiResource {
  AmiId: string;
  SnowballAmiId?: string;
}
export type Ec2AmiResourceList = Array<Ec2AmiResource>;
export declare class Ec2RequestFailedException extends EffectData.TaggedError(
  "Ec2RequestFailedException",
)<{
  readonly Message?: string;
}> {}
export interface EKSOnDeviceServiceConfiguration {
  KubernetesVersion?: string;
  EKSAnywhereVersion?: string;
}
export type Email = string;

export interface EventTriggerDefinition {
  EventResourceARN?: string;
}
export type EventTriggerDefinitionList = Array<EventTriggerDefinition>;
export interface GetJobManifestRequest {
  JobId: string;
}
export interface GetJobManifestResult {
  ManifestURI?: string;
}
export interface GetJobUnlockCodeRequest {
  JobId: string;
}
export interface GetJobUnlockCodeResult {
  UnlockCode?: string;
}
export interface GetSnowballUsageRequest {}
export interface GetSnowballUsageResult {
  SnowballLimit?: number;
  SnowballsInUse?: number;
}
export interface GetSoftwareUpdatesRequest {
  JobId: string;
}
export interface GetSoftwareUpdatesResult {
  UpdatesURI?: string;
}
export type GSTIN = string;

export type ImpactLevel = "IL2" | "IL4" | "IL5" | "IL6" | "IL99";
export interface INDTaxDocuments {
  GSTIN?: string;
}
export type InitialClusterSize = number;

export type Integer = number;

export declare class InvalidAddressException extends EffectData.TaggedError(
  "InvalidAddressException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInputCombinationException extends EffectData.TaggedError(
  "InvalidInputCombinationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidJobStateException extends EffectData.TaggedError(
  "InvalidJobStateException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidResourceException extends EffectData.TaggedError(
  "InvalidResourceException",
)<{
  readonly Message?: string;
  readonly ResourceType?: string;
}> {}
export type JavaBoolean = boolean;

export type JobId = string;

export interface JobListEntry {
  JobId?: string;
  JobState?: JobState;
  IsMaster?: boolean;
  JobType?: JobType;
  SnowballType?: SnowballType;
  CreationDate?: Date | string;
  Description?: string;
}
export type JobListEntryList = Array<JobListEntry>;
export interface JobLogs {
  JobCompletionReportURI?: string;
  JobSuccessLogURI?: string;
  JobFailureLogURI?: string;
}
export interface JobMetadata {
  JobId?: string;
  JobState?: JobState;
  JobType?: JobType;
  SnowballType?: SnowballType;
  CreationDate?: Date | string;
  Resources?: JobResource;
  Description?: string;
  KmsKeyARN?: string;
  RoleARN?: string;
  AddressId?: string;
  ShippingDetails?: ShippingDetails;
  SnowballCapacityPreference?: SnowballCapacity;
  Notification?: Notification;
  DataTransferProgress?: DataTransfer;
  JobLogInfo?: JobLogs;
  ClusterId?: string;
  ForwardingAddressId?: string;
  TaxDocuments?: TaxDocuments;
  DeviceConfiguration?: DeviceConfiguration;
  RemoteManagement?: RemoteManagement;
  LongTermPricingId?: string;
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
  ImpactLevel?: ImpactLevel;
  PickupDetails?: PickupDetails;
  SnowballId?: string;
}
export type JobMetadataList = Array<JobMetadata>;
export interface JobResource {
  S3Resources?: Array<S3Resource>;
  LambdaResources?: Array<LambdaResource>;
  Ec2AmiResources?: Array<Ec2AmiResource>;
}
export type JobState =
  | "NEW"
  | "PREPARING_APPLIANCE"
  | "PREPARING_SHIPMENT"
  | "IN_TRANSIT_TO_CUSTOMER"
  | "WITH_CUSTOMER"
  | "IN_TRANSIT_TO_AWS"
  | "WITH_AWS_SORTING_FACILITY"
  | "WITH_AWS"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "CANCELLED"
  | "LISTING"
  | "PENDING";
export type JobStateList = Array<JobState>;
export type JobType = "IMPORT" | "EXPORT" | "LOCAL_USE";
export interface KeyRange {
  BeginMarker?: string;
  EndMarker?: string;
}
export type KmsKeyARN = string;

export declare class KMSRequestFailedException extends EffectData.TaggedError(
  "KMSRequestFailedException",
)<{
  readonly Message?: string;
}> {}
export interface LambdaResource {
  LambdaArn?: string;
  EventTriggers?: Array<EventTriggerDefinition>;
}
export type LambdaResourceList = Array<LambdaResource>;
export interface ListClusterJobsRequest {
  ClusterId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClusterJobsResult {
  JobListEntries?: Array<JobListEntry>;
  NextToken?: string;
}
export interface ListClustersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClustersResult {
  ClusterListEntries?: Array<ClusterListEntry>;
  NextToken?: string;
}
export interface ListCompatibleImagesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCompatibleImagesResult {
  CompatibleImages?: Array<CompatibleImage>;
  NextToken?: string;
}
export interface ListJobsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListJobsResult {
  JobListEntries?: Array<JobListEntry>;
  NextToken?: string;
}
export type ListLimit = number;

export interface ListLongTermPricingRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLongTermPricingResult {
  LongTermPricingEntries?: Array<LongTermPricingListEntry>;
  NextToken?: string;
}
export interface ListPickupLocationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPickupLocationsResult {
  Addresses?: Array<Address>;
  NextToken?: string;
}
export interface ListServiceVersionsRequest {
  ServiceName: ServiceName;
  DependentServices?: Array<DependentService>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServiceVersionsResult {
  ServiceVersions: Array<ServiceVersion>;
  ServiceName: ServiceName;
  DependentServices?: Array<DependentService>;
  NextToken?: string;
}
export type Long = number;

export type LongTermPricingAssociatedJobIdList = Array<string>;
export type LongTermPricingEntryList = Array<LongTermPricingListEntry>;
export type LongTermPricingId = string;

export type LongTermPricingIdList = Array<string>;
export interface LongTermPricingListEntry {
  LongTermPricingId?: string;
  LongTermPricingEndDate?: Date | string;
  LongTermPricingStartDate?: Date | string;
  LongTermPricingType?: LongTermPricingType;
  CurrentActiveJob?: string;
  ReplacementJob?: string;
  IsLongTermPricingAutoRenew?: boolean;
  LongTermPricingStatus?: string;
  SnowballType?: SnowballType;
  JobIds?: Array<string>;
}
export type LongTermPricingType = "ONE_YEAR" | "THREE_YEAR" | "ONE_MONTH";
export interface NFSOnDeviceServiceConfiguration {
  StorageLimit?: number;
  StorageUnit?: StorageUnit;
}
export type NodeFaultTolerance = number;

export interface Notification {
  SnsTopicARN?: string;
  JobStatesToNotify?: Array<JobState>;
  NotifyAll?: boolean;
  DevicePickupSnsTopicARN?: string;
}
export interface OnDeviceServiceConfiguration {
  NFSOnDeviceService?: NFSOnDeviceServiceConfiguration;
  TGWOnDeviceService?: TGWOnDeviceServiceConfiguration;
  EKSOnDeviceService?: EKSOnDeviceServiceConfiguration;
  S3OnDeviceService?: S3OnDeviceServiceConfiguration;
}
export type PhoneNumber = string;

export interface PickupDetails {
  Name?: string;
  PhoneNumber?: string;
  Email?: string;
  IdentificationNumber?: string;
  IdentificationExpirationDate?: Date | string;
  IdentificationIssuingOrg?: string;
  DevicePickupId?: string;
}
export type RemoteManagement =
  | "INSTALLED_ONLY"
  | "INSTALLED_AUTOSTART"
  | "NOT_INSTALLED";
export type ResourceARN = string;

export declare class ReturnShippingLabelAlreadyExistsException extends EffectData.TaggedError(
  "ReturnShippingLabelAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type RoleARN = string;

export interface S3OnDeviceServiceConfiguration {
  StorageLimit?: number;
  StorageUnit?: StorageUnit;
  ServiceSize?: number;
  FaultTolerance?: number;
}
export interface S3Resource {
  BucketArn?: string;
  KeyRange?: KeyRange;
  TargetOnDeviceServices?: Array<TargetOnDeviceService>;
}
export type S3ResourceList = Array<S3Resource>;
export type S3StorageLimit = number;

export type ServiceName = "KUBERNETES" | "EKS_ANYWHERE";
export type ServiceSize = number;

export interface ServiceVersion {
  Version?: string;
}
export type ServiceVersionList = Array<ServiceVersion>;
export interface Shipment {
  Status?: string;
  TrackingNumber?: string;
}
export type ShipmentState = "RECEIVED" | "RETURNED";
export interface ShippingDetails {
  ShippingOption?: ShippingOption;
  InboundShipment?: Shipment;
  OutboundShipment?: Shipment;
}
export type ShippingLabelStatus =
  | "IN_PROGRESS"
  | "TIMED_OUT"
  | "SUCCEEDED"
  | "FAILED";
export type ShippingOption = "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD";
export type SnowballCapacity =
  | "T50"
  | "T80"
  | "T100"
  | "T42"
  | "T98"
  | "T8"
  | "T14"
  | "T32"
  | "NO_PREFERENCE"
  | "T240"
  | "T13";
export type SnowballType =
  | "STANDARD"
  | "EDGE"
  | "EDGE_C"
  | "EDGE_CG"
  | "EDGE_S"
  | "SNC1_HDD"
  | "SNC1_SSD"
  | "V3_5C"
  | "V3_5S"
  | "RACK_5U_C";
export interface SnowconeDeviceConfiguration {
  WirelessConnection?: WirelessConnection;
}
export type SnsTopicARN = string;

export type StorageLimit = number;

export type StorageUnit = "TB";
export type SnowballString = string;

export interface TargetOnDeviceService {
  ServiceName?: DeviceServiceName;
  TransferOption?: TransferOption;
}
export type TargetOnDeviceServiceList = Array<TargetOnDeviceService>;
export interface TaxDocuments {
  IND?: INDTaxDocuments;
}
export interface TGWOnDeviceServiceConfiguration {
  StorageLimit?: number;
  StorageUnit?: StorageUnit;
}
export type Timestamp = Date | string;

export type TransferOption = "IMPORT" | "EXPORT" | "LOCAL_USE";
export declare class UnsupportedAddressException extends EffectData.TaggedError(
  "UnsupportedAddressException",
)<{
  readonly Message?: string;
}> {}
export interface UpdateClusterRequest {
  ClusterId: string;
  RoleARN?: string;
  Description?: string;
  Resources?: JobResource;
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
  AddressId?: string;
  ShippingOption?: ShippingOption;
  Notification?: Notification;
  ForwardingAddressId?: string;
}
export interface UpdateClusterResult {}
export interface UpdateJobRequest {
  JobId: string;
  RoleARN?: string;
  Notification?: Notification;
  Resources?: JobResource;
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
  AddressId?: string;
  ShippingOption?: ShippingOption;
  Description?: string;
  SnowballCapacityPreference?: SnowballCapacity;
  ForwardingAddressId?: string;
  PickupDetails?: PickupDetails;
}
export interface UpdateJobResult {}
export interface UpdateJobShipmentStateRequest {
  JobId: string;
  ShipmentState: ShipmentState;
}
export interface UpdateJobShipmentStateResult {}
export interface UpdateLongTermPricingRequest {
  LongTermPricingId: string;
  ReplacementJob?: string;
  IsLongTermPricingAutoRenew?: boolean;
}
export interface UpdateLongTermPricingResult {}
export interface WirelessConnection {
  IsWifiEnabled?: boolean;
}
export declare namespace CancelCluster {
  export type Input = CancelClusterRequest;
  export type Output = CancelClusterResult;
  export type Error =
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError;
}

export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = CancelJobResult;
  export type Error =
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError;
}

export declare namespace CreateAddress {
  export type Input = CreateAddressRequest;
  export type Output = CreateAddressResult;
  export type Error =
    | InvalidAddressException
    | UnsupportedAddressException
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResult;
  export type Error =
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResult;
  export type Error =
    | ClusterLimitExceededException
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError;
}

export declare namespace CreateLongTermPricing {
  export type Input = CreateLongTermPricingRequest;
  export type Output = CreateLongTermPricingResult;
  export type Error = InvalidResourceException | CommonAwsError;
}

export declare namespace CreateReturnShippingLabel {
  export type Input = CreateReturnShippingLabelRequest;
  export type Output = CreateReturnShippingLabelResult;
  export type Error =
    | ConflictException
    | InvalidInputCombinationException
    | InvalidJobStateException
    | InvalidResourceException
    | ReturnShippingLabelAlreadyExistsException
    | CommonAwsError;
}

export declare namespace DescribeAddress {
  export type Input = DescribeAddressRequest;
  export type Output = DescribeAddressResult;
  export type Error = InvalidResourceException | CommonAwsError;
}

export declare namespace DescribeAddresses {
  export type Input = DescribeAddressesRequest;
  export type Output = DescribeAddressesResult;
  export type Error =
    | InvalidNextTokenException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterRequest;
  export type Output = DescribeClusterResult;
  export type Error = InvalidResourceException | CommonAwsError;
}

export declare namespace DescribeJob {
  export type Input = DescribeJobRequest;
  export type Output = DescribeJobResult;
  export type Error = InvalidResourceException | CommonAwsError;
}

export declare namespace DescribeReturnShippingLabel {
  export type Input = DescribeReturnShippingLabelRequest;
  export type Output = DescribeReturnShippingLabelResult;
  export type Error =
    | ConflictException
    | InvalidJobStateException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace GetJobManifest {
  export type Input = GetJobManifestRequest;
  export type Output = GetJobManifestResult;
  export type Error =
    | InvalidJobStateException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace GetJobUnlockCode {
  export type Input = GetJobUnlockCodeRequest;
  export type Output = GetJobUnlockCodeResult;
  export type Error =
    | InvalidJobStateException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace GetSnowballUsage {
  export type Input = GetSnowballUsageRequest;
  export type Output = GetSnowballUsageResult;
  export type Error = CommonAwsError;
}

export declare namespace GetSoftwareUpdates {
  export type Input = GetSoftwareUpdatesRequest;
  export type Output = GetSoftwareUpdatesResult;
  export type Error =
    | InvalidJobStateException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace ListClusterJobs {
  export type Input = ListClusterJobsRequest;
  export type Output = ListClusterJobsResult;
  export type Error =
    | InvalidNextTokenException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResult;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListCompatibleImages {
  export type Input = ListCompatibleImagesRequest;
  export type Output = ListCompatibleImagesResult;
  export type Error =
    | Ec2RequestFailedException
    | InvalidNextTokenException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResult;
  export type Error = InvalidNextTokenException | CommonAwsError;
}

export declare namespace ListLongTermPricing {
  export type Input = ListLongTermPricingRequest;
  export type Output = ListLongTermPricingResult;
  export type Error =
    | InvalidNextTokenException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace ListPickupLocations {
  export type Input = ListPickupLocationsRequest;
  export type Output = ListPickupLocationsResult;
  export type Error = InvalidResourceException | CommonAwsError;
}

export declare namespace ListServiceVersions {
  export type Input = ListServiceVersionsRequest;
  export type Output = ListServiceVersionsResult;
  export type Error =
    | InvalidNextTokenException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResult;
  export type Error =
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError;
}

export declare namespace UpdateJob {
  export type Input = UpdateJobRequest;
  export type Output = UpdateJobResult;
  export type Error =
    | ClusterLimitExceededException
    | Ec2RequestFailedException
    | InvalidInputCombinationException
    | InvalidJobStateException
    | InvalidResourceException
    | KMSRequestFailedException
    | CommonAwsError;
}

export declare namespace UpdateJobShipmentState {
  export type Input = UpdateJobShipmentStateRequest;
  export type Output = UpdateJobShipmentStateResult;
  export type Error =
    | InvalidJobStateException
    | InvalidResourceException
    | CommonAwsError;
}

export declare namespace UpdateLongTermPricing {
  export type Input = UpdateLongTermPricingRequest;
  export type Output = UpdateLongTermPricingResult;
  export type Error = InvalidResourceException | CommonAwsError;
}
