import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface IoTAutobahnControlPlane {
  batchCreateVehicle(
    input: BatchCreateVehicleRequest,
  ): Effect.Effect<
    BatchCreateVehicleResponse,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateVehicle(
    input: BatchUpdateVehicleRequest,
  ): Effect.Effect<
    BatchUpdateVehicleResponse,
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEncryptionConfiguration(
    input: GetEncryptionConfigurationRequest,
  ): Effect.Effect<
    GetEncryptionConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLoggingOptions(
    input: GetLoggingOptionsRequest,
  ): Effect.Effect<
    GetLoggingOptionsResponse,
    AccessDeniedException | ThrottlingException | CommonAwsError
  >;
  getRegisterAccountStatus(
    input: GetRegisterAccountStatusRequest,
  ): Effect.Effect<
    GetRegisterAccountStatusResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getVehicleStatus(
    input: GetVehicleStatusRequest,
  ): Effect.Effect<
    GetVehicleStatusResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putEncryptionConfiguration(
    input: PutEncryptionConfigurationRequest,
  ): Effect.Effect<
    PutEncryptionConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putLoggingOptions(
    input: PutLoggingOptionsRequest,
  ): Effect.Effect<
    PutLoggingOptionsResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  registerAccount(
    input: RegisterAccountRequest,
  ): Effect.Effect<
    RegisterAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Iotfleetwise = IoTAutobahnControlPlane;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type actionEventExpression = string;

export interface Actuator {
  fullyQualifiedName: string;
  dataType: NodeDataType;
  description?: string;
  unit?: string;
  allowedValues?: Array<string>;
  min?: number;
  max?: number;
  assignedValue?: string;
  deprecationMessage?: string;
  comment?: string;
  structFullyQualifiedName?: string;
}
export type AmazonResourceName = string;

export type arn = string;

export interface AssociateVehicleFleetRequest {
  vehicleName: string;
  fleetId: string;
}
export interface AssociateVehicleFleetResponse {}
export interface Attribute {
  fullyQualifiedName: string;
  dataType: NodeDataType;
  description?: string;
  unit?: string;
  allowedValues?: Array<string>;
  min?: number;
  max?: number;
  assignedValue?: string;
  defaultValue?: string;
  deprecationMessage?: string;
  comment?: string;
}
export type attributeName = string;

export type attributeNamesList = Array<string>;
export type attributesMap = Record<string, string>;
export type attributeValue = string;

export type attributeValuesList = Array<string>;
export interface BatchCreateVehicleRequest {
  vehicles: Array<CreateVehicleRequestItem>;
}
export interface BatchCreateVehicleResponse {
  vehicles?: Array<CreateVehicleResponseItem>;
  errors?: Array<CreateVehicleError>;
}
export interface BatchUpdateVehicleRequest {
  vehicles: Array<UpdateVehicleRequestItem>;
}
export interface BatchUpdateVehicleResponse {
  vehicles?: Array<UpdateVehicleResponseItem>;
  errors?: Array<UpdateVehicleError>;
}
export interface Branch {
  fullyQualifiedName: string;
  description?: string;
  deprecationMessage?: string;
  comment?: string;
}
export type campaignArn = string;

export type campaignName = string;

export type CampaignStatus =
  | "CREATING"
  | "WAITING_FOR_APPROVAL"
  | "RUNNING"
  | "SUSPENDED";
export type campaignSummaries = Array<CampaignSummary>;
export interface CampaignSummary {
  arn?: string;
  name?: string;
  description?: string;
  signalCatalogArn?: string;
  targetArn?: string;
  status?: CampaignStatus;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export interface CanDbcDefinition {
  networkInterface: string;
  canDbcFiles: Array<Uint8Array | string>;
  signalsMap?: Record<string, string>;
}
export interface CanInterface {
  name: string;
  protocolName?: string;
  protocolVersion?: string;
}
export type CanInterfaceName = string;

export interface CanSignal {
  messageId: number;
  isBigEndian: boolean;
  isSigned: boolean;
  startBit: number;
  offset: number;
  factor: number;
  length: number;
  name?: string;
  signalValueType?: SignalValueType;
}
export type CanSignalName = string;

export interface CloudWatchLogDeliveryOptions {
  logType: LogType;
  logGroupName?: string;
}
export type CloudWatchLogGroupName = string;

export type collectionPeriodMs = number;

export type CollectionScheme =
  | { timeBasedCollectionScheme: TimeBasedCollectionScheme }
  | { conditionBasedCollectionScheme: ConditionBasedCollectionScheme };
export type Compression = "OFF" | "SNAPPY";
export interface ConditionBasedCollectionScheme {
  expression: string;
  minimumTriggerIntervalMs?: number;
  triggerMode?: TriggerMode;
  conditionLanguageVersion?: number;
}
export interface ConditionBasedSignalFetchConfig {
  conditionExpression: string;
  triggerMode: TriggerMode;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resource: string;
  readonly resourceType: string;
}> {}
export interface CreateCampaignRequest {
  name: string;
  description?: string;
  signalCatalogArn: string;
  targetArn: string;
  startTime?: Date | string;
  expiryTime?: Date | string;
  postTriggerCollectionDuration?: number;
  diagnosticsMode?: DiagnosticsMode;
  spoolingMode?: SpoolingMode;
  compression?: Compression;
  priority?: number;
  signalsToCollect?: Array<SignalInformation>;
  collectionScheme: CollectionScheme;
  dataExtraDimensions?: Array<string>;
  tags?: Array<Tag>;
  dataDestinationConfigs?: Array<DataDestinationConfig>;
  dataPartitions?: Array<DataPartition>;
  signalsToFetch?: Array<SignalFetchInformation>;
}
export interface CreateCampaignResponse {
  name?: string;
  arn?: string;
}
export interface CreateDecoderManifestRequest {
  name: string;
  description?: string;
  modelManifestArn: string;
  signalDecoders?: Array<SignalDecoder>;
  networkInterfaces?: Array<NetworkInterface>;
  defaultForUnmappedSignals?: DefaultForUnmappedSignalsType;
  tags?: Array<Tag>;
}
export interface CreateDecoderManifestResponse {
  name: string;
  arn: string;
}
export interface CreateFleetRequest {
  fleetId: string;
  description?: string;
  signalCatalogArn: string;
  tags?: Array<Tag>;
}
export interface CreateFleetResponse {
  id: string;
  arn: string;
}
export interface CreateModelManifestRequest {
  name: string;
  description?: string;
  nodes: Array<string>;
  signalCatalogArn: string;
  tags?: Array<Tag>;
}
export interface CreateModelManifestResponse {
  name: string;
  arn: string;
}
export interface CreateSignalCatalogRequest {
  name: string;
  description?: string;
  nodes?: Array<Node>;
  tags?: Array<Tag>;
}
export interface CreateSignalCatalogResponse {
  name: string;
  arn: string;
}
export interface CreateStateTemplateRequest {
  name: string;
  description?: string;
  signalCatalogArn: string;
  stateTemplateProperties: Array<string>;
  dataExtraDimensions?: Array<string>;
  metadataExtraDimensions?: Array<string>;
  tags?: Array<Tag>;
}
export interface CreateStateTemplateResponse {
  name?: string;
  arn?: string;
  id?: string;
}
export interface CreateVehicleError {
  vehicleName?: string;
  code?: string;
  message?: string;
}
export type createVehicleErrors = Array<CreateVehicleError>;
export interface CreateVehicleRequest {
  vehicleName: string;
  modelManifestArn: string;
  decoderManifestArn: string;
  attributes?: Record<string, string>;
  associationBehavior?: VehicleAssociationBehavior;
  tags?: Array<Tag>;
  stateTemplates?: Array<StateTemplateAssociation>;
}
export interface CreateVehicleRequestItem {
  vehicleName: string;
  modelManifestArn: string;
  decoderManifestArn: string;
  attributes?: Record<string, string>;
  associationBehavior?: VehicleAssociationBehavior;
  tags?: Array<Tag>;
  stateTemplates?: Array<StateTemplateAssociation>;
}
export type createVehicleRequestItems = Array<CreateVehicleRequestItem>;
export interface CreateVehicleResponse {
  vehicleName?: string;
  arn?: string;
  thingArn?: string;
}
export interface CreateVehicleResponseItem {
  vehicleName?: string;
  arn?: string;
  thingArn?: string;
}
export type createVehicleResponses = Array<CreateVehicleResponseItem>;
export type CustomDecodingId = string;

export interface CustomDecodingInterface {
  name: string;
}
export interface CustomDecodingSignal {
  id: string;
}
export type CustomDecodingSignalInterfaceName = string;

export type customerAccountId = string;

export interface CustomProperty {
  fullyQualifiedName: string;
  dataType: NodeDataType;
  dataEncoding?: NodeDataEncoding;
  description?: string;
  deprecationMessage?: string;
  comment?: string;
  structFullyQualifiedName?: string;
}
export interface CustomStruct {
  fullyQualifiedName: string;
  description?: string;
  deprecationMessage?: string;
  comment?: string;
}
export type DataDestinationConfig =
  | { s3Config: S3Config }
  | { timestreamConfig: TimestreamConfig }
  | { mqttTopicConfig: MqttTopicConfig };
export type DataDestinationConfigs = Array<DataDestinationConfig>;
export type DataExtraDimensionNodePathList = Array<string>;
export type DataFormat = "JSON" | "PARQUET";
export interface DataPartition {
  id: string;
  storageOptions: DataPartitionStorageOptions;
  uploadOptions?: DataPartitionUploadOptions;
}
export type DataPartitionId = string;

export type DataPartitions = Array<DataPartition>;
export interface DataPartitionStorageOptions {
  maximumSize: StorageMaximumSize;
  storageLocation: string;
  minimumTimeToLive: StorageMinimumTimeToLive;
}
export interface DataPartitionUploadOptions {
  expression: string;
  conditionLanguageVersion?: number;
}
export type decoderManifestSummaries = Array<DecoderManifestSummary>;
export interface DecoderManifestSummary {
  name?: string;
  arn?: string;
  modelManifestArn?: string;
  description?: string;
  status?: ManifestStatus;
  creationTime: Date | string;
  lastModificationTime: Date | string;
  message?: string;
}
export declare class DecoderManifestValidationException extends EffectData.TaggedError(
  "DecoderManifestValidationException",
)<{
  readonly invalidSignals?: Array<InvalidSignalDecoder>;
  readonly invalidNetworkInterfaces?: Array<InvalidNetworkInterface>;
  readonly message?: string;
}> {}
export type DefaultForUnmappedSignalsType = "CUSTOM_DECODING";
export interface DeleteCampaignRequest {
  name: string;
}
export interface DeleteCampaignResponse {
  name?: string;
  arn?: string;
}
export interface DeleteDecoderManifestRequest {
  name: string;
}
export interface DeleteDecoderManifestResponse {
  name: string;
  arn: string;
}
export interface DeleteFleetRequest {
  fleetId: string;
}
export interface DeleteFleetResponse {
  id?: string;
  arn?: string;
}
export interface DeleteModelManifestRequest {
  name: string;
}
export interface DeleteModelManifestResponse {
  name: string;
  arn: string;
}
export interface DeleteSignalCatalogRequest {
  name: string;
}
export interface DeleteSignalCatalogResponse {
  name: string;
  arn: string;
}
export interface DeleteStateTemplateRequest {
  identifier: string;
}
export interface DeleteStateTemplateResponse {
  name?: string;
  arn?: string;
  id?: string;
}
export interface DeleteVehicleRequest {
  vehicleName: string;
}
export interface DeleteVehicleResponse {
  vehicleName: string;
  arn: string;
}
export type description = string;

export type DiagnosticsMode = "OFF" | "SEND_ACTIVE_DTCS";
export interface DisassociateVehicleFleetRequest {
  vehicleName: string;
  fleetId: string;
}
export interface DisassociateVehicleFleetResponse {}
export type double = number;

export type EncryptionStatus = "PENDING" | "SUCCESS" | "FAILURE";
export type EncryptionType =
  | "KMS_BASED_ENCRYPTION"
  | "FLEETWISE_DEFAULT_ENCRYPTION";
export type errorMessage = string;

export type eventExpression = string;

export type EventExpressionList = Array<string>;
export type fetchConfigEventExpression = string;

export type fleetId = string;

export type fleets = Array<string>;
export type fleetSummaries = Array<FleetSummary>;
export interface FleetSummary {
  id: string;
  arn: string;
  description?: string;
  signalCatalogArn: string;
  creationTime: Date | string;
  lastModificationTime?: Date | string;
}
export type FormattedVss = { vssJson: string };
export type Fqns = Array<string>;
export type FullyQualifiedName = string;

export interface GetCampaignRequest {
  name: string;
}
export interface GetCampaignResponse {
  name?: string;
  arn?: string;
  description?: string;
  signalCatalogArn?: string;
  targetArn?: string;
  status?: CampaignStatus;
  startTime?: Date | string;
  expiryTime?: Date | string;
  postTriggerCollectionDuration?: number;
  diagnosticsMode?: DiagnosticsMode;
  spoolingMode?: SpoolingMode;
  compression?: Compression;
  priority?: number;
  signalsToCollect?: Array<SignalInformation>;
  collectionScheme?: CollectionScheme;
  dataExtraDimensions?: Array<string>;
  creationTime?: Date | string;
  lastModificationTime?: Date | string;
  dataDestinationConfigs?: Array<DataDestinationConfig>;
  dataPartitions?: Array<DataPartition>;
  signalsToFetch?: Array<SignalFetchInformation>;
}
export interface GetDecoderManifestRequest {
  name: string;
}
export interface GetDecoderManifestResponse {
  name: string;
  arn: string;
  description?: string;
  modelManifestArn?: string;
  status?: ManifestStatus;
  creationTime: Date | string;
  lastModificationTime: Date | string;
  message?: string;
}
export interface GetEncryptionConfigurationRequest {}
export interface GetEncryptionConfigurationResponse {
  kmsKeyId?: string;
  encryptionStatus: EncryptionStatus;
  encryptionType: EncryptionType;
  errorMessage?: string;
  creationTime?: Date | string;
  lastModificationTime?: Date | string;
}
export interface GetFleetRequest {
  fleetId: string;
}
export interface GetFleetResponse {
  id: string;
  arn: string;
  description?: string;
  signalCatalogArn: string;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export interface GetLoggingOptionsRequest {}
export interface GetLoggingOptionsResponse {
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions;
}
export interface GetModelManifestRequest {
  name: string;
}
export interface GetModelManifestResponse {
  name: string;
  arn: string;
  description?: string;
  signalCatalogArn?: string;
  status?: ManifestStatus;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export interface GetRegisterAccountStatusRequest {}
export interface GetRegisterAccountStatusResponse {
  customerAccountId: string;
  accountStatus: RegistrationStatus;
  timestreamRegistrationResponse?: TimestreamRegistrationResponse;
  iamRegistrationResponse: IamRegistrationResponse;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export interface GetSignalCatalogRequest {
  name: string;
}
export interface GetSignalCatalogResponse {
  name: string;
  arn: string;
  description?: string;
  nodeCounts?: NodeCounts;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export interface GetStateTemplateRequest {
  identifier: string;
}
export interface GetStateTemplateResponse {
  name?: string;
  arn?: string;
  description?: string;
  signalCatalogArn?: string;
  stateTemplateProperties?: Array<string>;
  dataExtraDimensions?: Array<string>;
  metadataExtraDimensions?: Array<string>;
  creationTime?: Date | string;
  lastModificationTime?: Date | string;
  id?: string;
}
export interface GetVehicleRequest {
  vehicleName: string;
}
export interface GetVehicleResponse {
  vehicleName?: string;
  arn?: string;
  modelManifestArn?: string;
  decoderManifestArn?: string;
  attributes?: Record<string, string>;
  stateTemplates?: Array<StateTemplateAssociation>;
  creationTime?: Date | string;
  lastModificationTime?: Date | string;
}
export interface GetVehicleStatusRequest {
  nextToken?: string;
  maxResults?: number;
  vehicleName: string;
}
export interface GetVehicleStatusResponse {
  campaigns?: Array<VehicleStatus>;
  nextToken?: string;
}
export interface IamRegistrationResponse {
  roleArn: string;
  registrationStatus: RegistrationStatus;
  errorMessage?: string;
}
export interface IamResources {
  roleArn: string;
}
export type IAMRoleArn = string;

export interface ImportDecoderManifestRequest {
  name: string;
  networkFileDefinitions: Array<NetworkFileDefinition>;
}
export interface ImportDecoderManifestResponse {
  name: string;
  arn: string;
}
export interface ImportSignalCatalogRequest {
  name: string;
  description?: string;
  vss?: FormattedVss;
  tags?: Array<Tag>;
}
export interface ImportSignalCatalogResponse {
  name: string;
  arn: string;
}
export type InterfaceId = string;

export type InterfaceIds = Array<string>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface InvalidNetworkInterface {
  interfaceId?: string;
  reason?: NetworkInterfaceFailureReason;
}
export type InvalidNetworkInterfaces = Array<InvalidNetworkInterface>;
export declare class InvalidNodeException extends EffectData.TaggedError(
  "InvalidNodeException",
)<{
  readonly invalidNodes?: Array<Node>;
  readonly reason?: string;
  readonly message?: string;
}> {}
export interface InvalidSignal {
  name?: string;
  reason?: string;
}
export interface InvalidSignalDecoder {
  name?: string;
  reason?: SignalDecoderFailureReason;
  hint?: string;
}
export type InvalidSignalDecoders = Array<InvalidSignalDecoder>;
export type InvalidSignals = Array<InvalidSignal>;
export declare class InvalidSignalsException extends EffectData.TaggedError(
  "InvalidSignalsException",
)<{
  readonly message?: string;
  readonly invalidSignals?: Array<InvalidSignal>;
}> {}
export type languageVersion = number;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ListCampaignsRequest {
  nextToken?: string;
  maxResults?: number;
  status?: string;
  listResponseScope?: ListResponseScope;
}
export interface ListCampaignsResponse {
  campaignSummaries?: Array<CampaignSummary>;
  nextToken?: string;
}
export interface ListDecoderManifestNetworkInterfacesRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDecoderManifestNetworkInterfacesResponse {
  networkInterfaces?: Array<NetworkInterface>;
  nextToken?: string;
}
export interface ListDecoderManifestSignalsRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDecoderManifestSignalsResponse {
  signalDecoders?: Array<SignalDecoder>;
  nextToken?: string;
}
export interface ListDecoderManifestsRequest {
  modelManifestArn?: string;
  nextToken?: string;
  maxResults?: number;
  listResponseScope?: ListResponseScope;
}
export interface ListDecoderManifestsResponse {
  summaries?: Array<DecoderManifestSummary>;
  nextToken?: string;
}
export interface ListFleetsForVehicleRequest {
  vehicleName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListFleetsForVehicleResponse {
  fleets?: Array<string>;
  nextToken?: string;
}
export interface ListFleetsRequest {
  nextToken?: string;
  maxResults?: number;
  listResponseScope?: ListResponseScope;
}
export interface ListFleetsResponse {
  fleetSummaries?: Array<FleetSummary>;
  nextToken?: string;
}
export interface ListModelManifestNodesRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListModelManifestNodesResponse {
  nodes?: Array<Node>;
  nextToken?: string;
}
export interface ListModelManifestsRequest {
  signalCatalogArn?: string;
  nextToken?: string;
  maxResults?: number;
  listResponseScope?: ListResponseScope;
}
export interface ListModelManifestsResponse {
  summaries?: Array<ModelManifestSummary>;
  nextToken?: string;
}
export type listOfStrings = Array<string>;
export type ListResponseScope = "METADATA_ONLY";
export interface ListSignalCatalogNodesRequest {
  name: string;
  nextToken?: string;
  maxResults?: number;
  signalNodeType?: SignalNodeType;
}
export interface ListSignalCatalogNodesResponse {
  nodes?: Array<Node>;
  nextToken?: string;
}
export interface ListSignalCatalogsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSignalCatalogsResponse {
  summaries?: Array<SignalCatalogSummary>;
  nextToken?: string;
}
export interface ListStateTemplatesRequest {
  nextToken?: string;
  maxResults?: number;
  listResponseScope?: ListResponseScope;
}
export interface ListStateTemplatesResponse {
  summaries?: Array<StateTemplateSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListVehiclesInFleetRequest {
  fleetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListVehiclesInFleetResponse {
  vehicles?: Array<string>;
  nextToken?: string;
}
export type listVehiclesMaxResults = number;

export interface ListVehiclesRequest {
  modelManifestArn?: string;
  attributeNames?: Array<string>;
  attributeValues?: Array<string>;
  nextToken?: string;
  maxResults?: number;
  listResponseScope?: ListResponseScope;
}
export interface ListVehiclesResponse {
  vehicleSummaries?: Array<VehicleSummary>;
  nextToken?: string;
}
export type LogType = "OFF" | "ERROR";
export type ManifestStatus = "ACTIVE" | "DRAFT" | "INVALID" | "VALIDATING";
export type maxResults = number;

export type maxSampleCount = number;

export type maxStringSize = number;

export type message = string;

export interface MessageSignal {
  topicName: string;
  structuredMessage: StructuredMessage;
}
export type modelManifestSummaries = Array<ModelManifestSummary>;
export interface ModelManifestSummary {
  name?: string;
  arn?: string;
  signalCatalogArn?: string;
  description?: string;
  status?: ManifestStatus;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export type ModelSignalsMap = Record<string, string>;
export type MqttTopicArn = string;

export interface MqttTopicConfig {
  mqttTopicArn: string;
  executionRoleArn: string;
}
export type NetworkFileBlob = Uint8Array | string;

export type NetworkFileDefinition = { canDbc: CanDbcDefinition };
export type NetworkFileDefinitions = Array<NetworkFileDefinition>;
export type NetworkFilesList = Array<Uint8Array | string>;
export interface NetworkInterface {
  interfaceId: string;
  type: NetworkInterfaceType;
  canInterface?: CanInterface;
  obdInterface?: ObdInterface;
  vehicleMiddleware?: VehicleMiddleware;
  customDecodingInterface?: CustomDecodingInterface;
}
export type NetworkInterfaceFailureReason =
  | "DUPLICATE_INTERFACE"
  | "CONFLICTING_NETWORK_INTERFACE"
  | "NETWORK_INTERFACE_TO_ADD_ALREADY_EXISTS"
  | "CAN_NETWORK_INTERFACE_INFO_IS_NULL"
  | "OBD_NETWORK_INTERFACE_INFO_IS_NULL"
  | "NETWORK_INTERFACE_TO_REMOVE_ASSOCIATED_WITH_SIGNALS"
  | "VEHICLE_MIDDLEWARE_NETWORK_INTERFACE_INFO_IS_NULL"
  | "CUSTOM_DECODING_SIGNAL_NETWORK_INTERFACE_INFO_IS_NULL";
export type NetworkInterfaces = Array<NetworkInterface>;
export type NetworkInterfaceType =
  | "CAN_INTERFACE"
  | "OBD_INTERFACE"
  | "VEHICLE_MIDDLEWARE"
  | "CUSTOM_DECODING_INTERFACE";
export type nextToken = string;

export type Node =
  | { branch: Branch }
  | { sensor: Sensor }
  | { actuator: Actuator }
  | { attribute: Attribute }
  | { struct: CustomStruct }
  | { property: CustomProperty };
export interface NodeCounts {
  totalNodes?: number;
  totalBranches?: number;
  totalSensors?: number;
  totalAttributes?: number;
  totalActuators?: number;
  totalStructs?: number;
  totalProperties?: number;
}
export type NodeDataEncoding = "BINARY" | "TYPED";
export type NodeDataType =
  | "INT8"
  | "UINT8"
  | "INT16"
  | "UINT16"
  | "INT32"
  | "UINT32"
  | "INT64"
  | "UINT64"
  | "BOOLEAN"
  | "FLOAT"
  | "DOUBLE"
  | "STRING"
  | "UNIX_TIMESTAMP"
  | "INT8_ARRAY"
  | "UINT8_ARRAY"
  | "INT16_ARRAY"
  | "UINT16_ARRAY"
  | "INT32_ARRAY"
  | "UINT32_ARRAY"
  | "INT64_ARRAY"
  | "UINT64_ARRAY"
  | "BOOLEAN_ARRAY"
  | "FLOAT_ARRAY"
  | "DOUBLE_ARRAY"
  | "STRING_ARRAY"
  | "UNIX_TIMESTAMP_ARRAY"
  | "UNKNOWN"
  | "STRUCT"
  | "STRUCT_ARRAY";
export type NodePath = string;

export type NodePaths = Array<string>;
export type Nodes = Array<Node>;
export type nonNegativeInteger = number;

export type Iotfleetwisenumber = number;

export type ObdBitmaskLength = number;

export type ObdByteLength = number;

export interface ObdInterface {
  name: string;
  requestMessageId: number;
  obdStandard?: string;
  pidRequestIntervalSeconds?: number;
  dtcRequestIntervalSeconds?: number;
  useExtendedIds?: boolean;
  hasTransmissionEcu?: boolean;
}
export type ObdInterfaceName = string;

export interface ObdSignal {
  pidResponseLength: number;
  serviceMode: number;
  pid: number;
  scaling: number;
  offset: number;
  startByte: number;
  byteLength: number;
  bitRightShift?: number;
  bitMaskLength?: number;
  isSigned?: boolean;
  signalValueType?: SignalValueType;
}
export type ObdStandard = string;

export interface OnChangeStateTemplateUpdateStrategy {}
export interface PeriodicStateTemplateUpdateStrategy {
  stateTemplateUpdateRate: TimePeriod;
}
export type positiveInteger = number;

export type positiveLong = number;

export type Prefix = string;

export type PrimitiveMessageDefinition = {
  ros2PrimitiveMessageDefinition: ROS2PrimitiveMessageDefinition;
};
export type priority = number;

export type ProtocolName = string;

export type ProtocolVersion = string;

export interface PutEncryptionConfigurationRequest {
  kmsKeyId?: string;
  encryptionType: EncryptionType;
}
export interface PutEncryptionConfigurationResponse {
  kmsKeyId?: string;
  encryptionStatus: EncryptionStatus;
  encryptionType: EncryptionType;
}
export interface PutLoggingOptionsRequest {
  cloudWatchLogDelivery: CloudWatchLogDeliveryOptions;
}
export interface PutLoggingOptionsResponse {}
export interface RegisterAccountRequest {
  timestreamResources?: TimestreamResources;
  iamResources?: IamResources;
}
export interface RegisterAccountResponse {
  registerAccountStatus: RegistrationStatus;
  timestreamResources?: TimestreamResources;
  iamResources: IamResources;
  creationTime: Date | string;
  lastModificationTime: Date | string;
}
export type RegistrationStatus =
  | "REGISTRATION_PENDING"
  | "REGISTRATION_SUCCESS"
  | "REGISTRATION_FAILURE";
export type ResourceIdentifier = string;

export type resourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceUniqueId = string;

export type RetryAfterSeconds = number;

export interface ROS2PrimitiveMessageDefinition {
  primitiveType: ROS2PrimitiveType;
  offset?: number;
  scaling?: number;
  upperBound?: number;
}
export type ROS2PrimitiveType =
  | "BOOL"
  | "BYTE"
  | "CHAR"
  | "FLOAT32"
  | "FLOAT64"
  | "INT8"
  | "UINT8"
  | "INT16"
  | "UINT16"
  | "INT32"
  | "UINT32"
  | "INT64"
  | "UINT64"
  | "STRING"
  | "WSTRING";
export type S3BucketArn = string;

export interface S3Config {
  bucketArn: string;
  dataFormat?: DataFormat;
  storageCompressionFormat?: StorageCompressionFormat;
  prefix?: string;
}
export interface Sensor {
  fullyQualifiedName: string;
  dataType: NodeDataType;
  description?: string;
  unit?: string;
  allowedValues?: Array<string>;
  min?: number;
  max?: number;
  deprecationMessage?: string;
  comment?: string;
  structFullyQualifiedName?: string;
}
export type signalCatalogSummaries = Array<SignalCatalogSummary>;
export interface SignalCatalogSummary {
  name?: string;
  arn?: string;
  creationTime?: Date | string;
  lastModificationTime?: Date | string;
}
export interface SignalDecoder {
  fullyQualifiedName: string;
  type: SignalDecoderType;
  interfaceId: string;
  canSignal?: CanSignal;
  obdSignal?: ObdSignal;
  messageSignal?: MessageSignal;
  customDecodingSignal?: CustomDecodingSignal;
}
export type SignalDecoderFailureReason =
  | "DUPLICATE_SIGNAL"
  | "CONFLICTING_SIGNAL"
  | "SIGNAL_TO_ADD_ALREADY_EXISTS"
  | "SIGNAL_NOT_ASSOCIATED_WITH_NETWORK_INTERFACE"
  | "NETWORK_INTERFACE_TYPE_INCOMPATIBLE_WITH_SIGNAL_DECODER_TYPE"
  | "SIGNAL_NOT_IN_MODEL"
  | "CAN_SIGNAL_INFO_IS_NULL"
  | "OBD_SIGNAL_INFO_IS_NULL"
  | "NO_DECODER_INFO_FOR_SIGNAL_IN_MODEL"
  | "MESSAGE_SIGNAL_INFO_IS_NULL"
  | "SIGNAL_DECODER_TYPE_INCOMPATIBLE_WITH_MESSAGE_SIGNAL_TYPE"
  | "STRUCT_SIZE_MISMATCH"
  | "NO_SIGNAL_IN_CATALOG_FOR_DECODER_SIGNAL"
  | "SIGNAL_DECODER_INCOMPATIBLE_WITH_SIGNAL_CATALOG"
  | "EMPTY_MESSAGE_SIGNAL"
  | "CUSTOM_DECODING_SIGNAL_INFO_IS_NULL";
export type SignalDecoders = Array<SignalDecoder>;
export type SignalDecoderType =
  | "CAN_SIGNAL"
  | "OBD_SIGNAL"
  | "MESSAGE_SIGNAL"
  | "CUSTOM_DECODING_SIGNAL";
export type SignalFetchConfig =
  | { timeBased: TimeBasedSignalFetchConfig }
  | { conditionBased: ConditionBasedSignalFetchConfig };
export interface SignalFetchInformation {
  fullyQualifiedName: string;
  signalFetchConfig: SignalFetchConfig;
  conditionLanguageVersion?: number;
  actions: Array<string>;
}
export type SignalFetchInformationList = Array<SignalFetchInformation>;
export interface SignalInformation {
  name: string;
  maxSampleCount?: number;
  minimumSamplingIntervalMs?: number;
  dataPartitionId?: string;
}
export type SignalInformationList = Array<SignalInformation>;
export type SignalNodeType =
  | "SENSOR"
  | "ACTUATOR"
  | "ATTRIBUTE"
  | "BRANCH"
  | "CUSTOM_STRUCT"
  | "CUSTOM_PROPERTY";
export type SignalValueType = "INTEGER" | "FLOATING_POINT";
export type SpoolingMode = "OFF" | "TO_DISK";
export interface StateTemplateAssociation {
  identifier: string;
  stateTemplateUpdateStrategy: StateTemplateUpdateStrategy;
}
export type StateTemplateAssociationIdentifiers = Array<string>;
export type StateTemplateAssociations = Array<StateTemplateAssociation>;
export type StateTemplateDataExtraDimensionNodePathList = Array<string>;
export type StateTemplateMetadataExtraDimensionNodePathList = Array<string>;
export type StateTemplateProperties = Array<string>;
export type StateTemplateSummaries = Array<StateTemplateSummary>;
export interface StateTemplateSummary {
  name?: string;
  arn?: string;
  signalCatalogArn?: string;
  description?: string;
  creationTime?: Date | string;
  lastModificationTime?: Date | string;
  id?: string;
}
export type StateTemplateUpdateStrategy =
  | { periodic: PeriodicStateTemplateUpdateStrategy }
  | { onChange: OnChangeStateTemplateUpdateStrategy };
export type statusStr = string;

export type StorageCompressionFormat = "NONE" | "GZIP";
export type StorageLocation = string;

export interface StorageMaximumSize {
  unit: StorageMaximumSizeUnit;
  value: number;
}
export type StorageMaximumSizeUnit = "MB" | "GB" | "TB";
export type StorageMaximumSizeValue = number;

export interface StorageMinimumTimeToLive {
  unit: StorageMinimumTimeToLiveUnit;
  value: number;
}
export type StorageMinimumTimeToLiveUnit = "HOURS" | "DAYS" | "WEEKS";
export type StorageMinimumTimeToLiveValue = number;

export type Iotfleetwisestring = string;

export type StructuredMessage =
  | { primitiveMessageDefinition: PrimitiveMessageDefinition }
  | { structuredMessageListDefinition: StructuredMessageListDefinition }
  | {
      structuredMessageDefinition: Array<StructuredMessageFieldNameAndDataTypePair>;
    };
export type StructuredMessageDefinition =
  Array<StructuredMessageFieldNameAndDataTypePair>;
export interface StructuredMessageFieldNameAndDataTypePair {
  fieldName: string;
  dataType: StructuredMessage;
}
export interface StructuredMessageListDefinition {
  name: string;
  memberType: StructuredMessage;
  listType: StructuredMessageListType;
  capacity?: number;
}
export type StructuredMessageListType =
  | "FIXED_CAPACITY"
  | "DYNAMIC_UNBOUNDED_CAPACITY"
  | "DYNAMIC_BOUNDED_CAPACITY";
export type StructureMessageName = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly quotaCode?: string;
  readonly serviceCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface TimeBasedCollectionScheme {
  periodMs: number;
}
export interface TimeBasedSignalFetchConfig {
  executionFrequencyMs: number;
}
export interface TimePeriod {
  unit: TimeUnit;
  value: number;
}
export type timestamp = Date | string;

export interface TimestreamConfig {
  timestreamTableArn: string;
  executionRoleArn: string;
}
export type TimestreamDatabaseName = string;

export interface TimestreamRegistrationResponse {
  timestreamDatabaseName: string;
  timestreamTableName: string;
  timestreamDatabaseArn?: string;
  timestreamTableArn?: string;
  registrationStatus: RegistrationStatus;
  errorMessage?: string;
}
export interface TimestreamResources {
  timestreamDatabaseName: string;
  timestreamTableName: string;
}
export type TimestreamTableArn = string;

export type TimestreamTableName = string;

export type TimeUnit = "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR";
export type TopicName = string;

export type TriggerMode = "ALWAYS" | "RISING_EDGE";
export type uint32 = number;

export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateCampaignAction = "APPROVE" | "SUSPEND" | "RESUME" | "UPDATE";
export interface UpdateCampaignRequest {
  name: string;
  description?: string;
  dataExtraDimensions?: Array<string>;
  action: UpdateCampaignAction;
}
export interface UpdateCampaignResponse {
  arn?: string;
  name?: string;
  status?: CampaignStatus;
}
export interface UpdateDecoderManifestRequest {
  name: string;
  description?: string;
  signalDecodersToAdd?: Array<SignalDecoder>;
  signalDecodersToUpdate?: Array<SignalDecoder>;
  signalDecodersToRemove?: Array<string>;
  networkInterfacesToAdd?: Array<NetworkInterface>;
  networkInterfacesToUpdate?: Array<NetworkInterface>;
  networkInterfacesToRemove?: Array<string>;
  status?: ManifestStatus;
  defaultForUnmappedSignals?: DefaultForUnmappedSignalsType;
}
export interface UpdateDecoderManifestResponse {
  name: string;
  arn: string;
}
export interface UpdateFleetRequest {
  fleetId: string;
  description?: string;
}
export interface UpdateFleetResponse {
  id?: string;
  arn?: string;
}
export type UpdateMode = "OVERWRITE" | "MERGE";
export interface UpdateModelManifestRequest {
  name: string;
  description?: string;
  nodesToAdd?: Array<string>;
  nodesToRemove?: Array<string>;
  status?: ManifestStatus;
}
export interface UpdateModelManifestResponse {
  name: string;
  arn: string;
}
export interface UpdateSignalCatalogRequest {
  name: string;
  description?: string;
  nodesToAdd?: Array<Node>;
  nodesToUpdate?: Array<Node>;
  nodesToRemove?: Array<string>;
}
export interface UpdateSignalCatalogResponse {
  name: string;
  arn: string;
}
export interface UpdateStateTemplateRequest {
  identifier: string;
  description?: string;
  stateTemplatePropertiesToAdd?: Array<string>;
  stateTemplatePropertiesToRemove?: Array<string>;
  dataExtraDimensions?: Array<string>;
  metadataExtraDimensions?: Array<string>;
}
export interface UpdateStateTemplateResponse {
  name?: string;
  arn?: string;
  id?: string;
}
export interface UpdateVehicleError {
  vehicleName?: string;
  code?: number;
  message?: string;
}
export type updateVehicleErrors = Array<UpdateVehicleError>;
export interface UpdateVehicleRequest {
  vehicleName: string;
  modelManifestArn?: string;
  decoderManifestArn?: string;
  attributes?: Record<string, string>;
  attributeUpdateMode?: UpdateMode;
  stateTemplatesToAdd?: Array<StateTemplateAssociation>;
  stateTemplatesToRemove?: Array<string>;
  stateTemplatesToUpdate?: Array<StateTemplateAssociation>;
}
export interface UpdateVehicleRequestItem {
  vehicleName: string;
  modelManifestArn?: string;
  decoderManifestArn?: string;
  attributes?: Record<string, string>;
  attributeUpdateMode?: UpdateMode;
  stateTemplatesToAdd?: Array<StateTemplateAssociation>;
  stateTemplatesToRemove?: Array<string>;
  stateTemplatesToUpdate?: Array<StateTemplateAssociation>;
}
export type updateVehicleRequestItems = Array<UpdateVehicleRequestItem>;
export interface UpdateVehicleResponse {
  vehicleName?: string;
  arn?: string;
}
export interface UpdateVehicleResponseItem {
  vehicleName?: string;
  arn?: string;
}
export type updateVehicleResponseItems = Array<UpdateVehicleResponseItem>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER";
export type VehicleAssociationBehavior =
  | "CREATE_IOT_THING"
  | "VALIDATE_IOT_THING_EXISTS";
export interface VehicleMiddleware {
  name: string;
  protocolName: VehicleMiddlewareProtocol;
}
export type VehicleMiddlewareName = string;

export type VehicleMiddlewareProtocol = "ROS_2";
export type vehicleName = string;

export type vehicles = Array<string>;
export type VehicleState =
  | "CREATED"
  | "READY"
  | "HEALTHY"
  | "SUSPENDED"
  | "DELETING"
  | "READY_FOR_CHECKIN";
export interface VehicleStatus {
  campaignName?: string;
  vehicleName?: string;
  status?: VehicleState;
}
export type VehicleStatusList = Array<VehicleStatus>;
export type vehicleSummaries = Array<VehicleSummary>;
export interface VehicleSummary {
  vehicleName: string;
  arn: string;
  modelManifestArn: string;
  decoderManifestArn: string;
  creationTime: Date | string;
  lastModificationTime: Date | string;
  attributes?: Record<string, string>;
}
export type wildcardSignalName = string;

export declare namespace BatchCreateVehicle {
  export type Input = BatchCreateVehicleRequest;
  export type Output = BatchCreateVehicleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateVehicle {
  export type Input = BatchUpdateVehicleRequest;
  export type Output = BatchUpdateVehicleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEncryptionConfiguration {
  export type Input = GetEncryptionConfigurationRequest;
  export type Output = GetEncryptionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLoggingOptions {
  export type Input = GetLoggingOptionsRequest;
  export type Output = GetLoggingOptionsResponse;
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetRegisterAccountStatus {
  export type Input = GetRegisterAccountStatusRequest;
  export type Output = GetRegisterAccountStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetVehicleStatus {
  export type Input = GetVehicleStatusRequest;
  export type Output = GetVehicleStatusResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutEncryptionConfiguration {
  export type Input = PutEncryptionConfigurationRequest;
  export type Output = PutEncryptionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutLoggingOptions {
  export type Input = PutLoggingOptionsRequest;
  export type Output = PutLoggingOptionsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterAccount {
  export type Input = RegisterAccountRequest;
  export type Output = RegisterAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
