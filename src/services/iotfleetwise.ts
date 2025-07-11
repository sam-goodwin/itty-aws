import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface IoTAutobahnControlPlane {
  associateVehicleFleet(
    input: AssociateVehicleFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchCreateVehicle(
    input: BatchCreateVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | LimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchUpdateVehicle(
    input: BatchUpdateVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | LimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCampaign(
    input: CreateCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDecoderManifest(
    input: CreateDecoderManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | DecoderManifestValidationException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFleet(
    input: CreateFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createModelManifest(
    input: CreateModelManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InvalidSignalsException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createSignalCatalog(
    input: CreateSignalCatalogRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InvalidNodeException | InvalidSignalsException | LimitExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createStateTemplate(
    input: CreateStateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidSignalsException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createVehicle(
    input: CreateVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCampaign(
    input: DeleteCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDecoderManifest(
    input: DeleteDecoderManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFleet(
    input: DeleteFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteModelManifest(
    input: DeleteModelManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteSignalCatalog(
    input: DeleteSignalCatalogRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteStateTemplate(
    input: DeleteStateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteVehicle(
    input: DeleteVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateVehicleFleet(
    input: DisassociateVehicleFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCampaign(
    input: GetCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDecoderManifest(
    input: GetDecoderManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEncryptionConfiguration(
    input: GetEncryptionConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getFleet(
    input: GetFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getLoggingOptions(
    input: GetLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ThrottlingException | CommonAwsError
  >;
  getModelManifest(
    input: GetModelManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRegisterAccountStatus(
    input: GetRegisterAccountStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getSignalCatalog(
    input: GetSignalCatalogRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getStateTemplate(
    input: GetStateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getVehicle(
    input: GetVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getVehicleStatus(
    input: GetVehicleStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  importDecoderManifest(
    input: ImportDecoderManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | DecoderManifestValidationException | InvalidSignalsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  importSignalCatalog(
    input: ImportSignalCatalogRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidSignalsException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCampaigns(
    input: ListCampaignsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDecoderManifestNetworkInterfaces(
    input: ListDecoderManifestNetworkInterfacesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDecoderManifestSignals(
    input: ListDecoderManifestSignalsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDecoderManifests(
    input: ListDecoderManifestsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFleets(
    input: ListFleetsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFleetsForVehicle(
    input: ListFleetsForVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listModelManifestNodes(
    input: ListModelManifestNodesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listModelManifests(
    input: ListModelManifestsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSignalCatalogNodes(
    input: ListSignalCatalogNodesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSignalCatalogs(
    input: ListSignalCatalogsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listStateTemplates(
    input: ListStateTemplatesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listVehicles(
    input: ListVehiclesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listVehiclesInFleet(
    input: ListVehiclesInFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putEncryptionConfiguration(
    input: PutEncryptionConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putLoggingOptions(
    input: PutLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  registerAccount(
    input: RegisterAccountRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCampaign(
    input: UpdateCampaignRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDecoderManifest(
    input: UpdateDecoderManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | DecoderManifestValidationException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFleet(
    input: UpdateFleetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateModelManifest(
    input: UpdateModelManifestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidSignalsException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateSignalCatalog(
    input: UpdateSignalCatalogRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | InvalidNodeException | InvalidSignalsException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateStateTemplate(
    input: UpdateStateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | InvalidSignalsException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateVehicle(
    input: UpdateVehicleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | LimitExceededException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Iotfleetwise = IoTAutobahnControlPlane;

export interface AccessDeniedException {
}
export type actionEventExpression = string;

export interface Actuator {
}
export type AmazonResourceName = string;

export type arn = string;

export interface AssociateVehicleFleetRequest {
}
export interface AssociateVehicleFleetResponse {
}
export interface Attribute {
}
export type attributeName = string;

export type attributeNamesList = Array<unknown>;
export type attributesMap = Record<string, unknown>;
export type attributeValue = string;

export type attributeValuesList = Array<unknown>;
export interface BatchCreateVehicleRequest {
}
export interface BatchCreateVehicleResponse {
}
export interface BatchUpdateVehicleRequest {
}
export interface BatchUpdateVehicleResponse {
}
export interface Branch {
}
export type campaignArn = string;

export type campaignName = string;

export type CampaignStatus = never;
export type campaignSummaries = Array<unknown>;
export interface CampaignSummary {
}
export interface CanDbcDefinition {
}
export interface CanInterface {
}
export type CanInterfaceName = string;

export interface CanSignal {
}
export type CanSignalName = string;

export interface CloudWatchLogDeliveryOptions {
}
export type CloudWatchLogGroupName = string;

export type collectionPeriodMs = number;

export type CollectionScheme = never;
export type Compression = never;
export interface ConditionBasedCollectionScheme {
}
export interface ConditionBasedSignalFetchConfig {
}
export interface ConflictException {
}
export interface CreateCampaignRequest {
}
export interface CreateCampaignResponse {
}
export interface CreateDecoderManifestRequest {
}
export interface CreateDecoderManifestResponse {
}
export interface CreateFleetRequest {
}
export interface CreateFleetResponse {
}
export interface CreateModelManifestRequest {
}
export interface CreateModelManifestResponse {
}
export interface CreateSignalCatalogRequest {
}
export interface CreateSignalCatalogResponse {
}
export interface CreateStateTemplateRequest {
}
export interface CreateStateTemplateResponse {
}
export interface CreateVehicleError {
}
export type createVehicleErrors = Array<unknown>;
export interface CreateVehicleRequest {
}
export interface CreateVehicleRequestItem {
}
export type createVehicleRequestItems = Array<unknown>;
export interface CreateVehicleResponse {
}
export interface CreateVehicleResponseItem {
}
export type createVehicleResponses = Array<unknown>;
export type CustomDecodingId = string;

export interface CustomDecodingInterface {
}
export interface CustomDecodingSignal {
}
export type CustomDecodingSignalInterfaceName = string;

export type customerAccountId = string;

export interface CustomProperty {
}
export interface CustomStruct {
}
export type DataDestinationConfig = never;
export type DataDestinationConfigs = Array<unknown>;
export type DataExtraDimensionNodePathList = Array<unknown>;
export type DataFormat = never;
export interface DataPartition {
}
export type DataPartitionId = string;

export type DataPartitions = Array<unknown>;
export interface DataPartitionStorageOptions {
}
export interface DataPartitionUploadOptions {
}
export type decoderManifestSummaries = Array<unknown>;
export interface DecoderManifestSummary {
}
export interface DecoderManifestValidationException {
}
export type DefaultForUnmappedSignalsType = never;
export interface DeleteCampaignRequest {
}
export interface DeleteCampaignResponse {
}
export interface DeleteDecoderManifestRequest {
}
export interface DeleteDecoderManifestResponse {
}
export interface DeleteFleetRequest {
}
export interface DeleteFleetResponse {
}
export interface DeleteModelManifestRequest {
}
export interface DeleteModelManifestResponse {
}
export interface DeleteSignalCatalogRequest {
}
export interface DeleteSignalCatalogResponse {
}
export interface DeleteStateTemplateRequest {
}
export interface DeleteStateTemplateResponse {
}
export interface DeleteVehicleRequest {
}
export interface DeleteVehicleResponse {
}
export type description = string;

export type DiagnosticsMode = never;
export interface DisassociateVehicleFleetRequest {
}
export interface DisassociateVehicleFleetResponse {
}
export type double = number;

export type EncryptionStatus = never;
export type EncryptionType = never;
export type errorMessage = string;

export type eventExpression = string;

export type EventExpressionList = Array<unknown>;
export type fetchConfigEventExpression = string;

export type fleetId = string;

export type fleets = Array<unknown>;
export type fleetSummaries = Array<unknown>;
export interface FleetSummary {
}
export type FormattedVss = never;
export type Fqns = Array<unknown>;
export type FullyQualifiedName = string;

export interface GetCampaignRequest {
}
export interface GetCampaignResponse {
}
export interface GetDecoderManifestRequest {
}
export interface GetDecoderManifestResponse {
}
export interface GetEncryptionConfigurationRequest {
}
export interface GetEncryptionConfigurationResponse {
}
export interface GetFleetRequest {
}
export interface GetFleetResponse {
}
export interface GetLoggingOptionsRequest {
}
export interface GetLoggingOptionsResponse {
}
export interface GetModelManifestRequest {
}
export interface GetModelManifestResponse {
}
export interface GetRegisterAccountStatusRequest {
}
export interface GetRegisterAccountStatusResponse {
}
export interface GetSignalCatalogRequest {
}
export interface GetSignalCatalogResponse {
}
export interface GetStateTemplateRequest {
}
export interface GetStateTemplateResponse {
}
export interface GetVehicleRequest {
}
export interface GetVehicleResponse {
}
export interface GetVehicleStatusRequest {
}
export interface GetVehicleStatusResponse {
}
export interface IamRegistrationResponse {
}
export interface IamResources {
}
export type IAMRoleArn = string;

export interface ImportDecoderManifestRequest {
}
export interface ImportDecoderManifestResponse {
}
export interface ImportSignalCatalogRequest {
}
export interface ImportSignalCatalogResponse {
}
export type InterfaceId = string;

export type InterfaceIds = Array<unknown>;
export interface InternalServerException {
}
export interface InvalidNetworkInterface {
}
export type InvalidNetworkInterfaces = Array<unknown>;
export interface InvalidNodeException {
}
export interface InvalidSignal {
}
export interface InvalidSignalDecoder {
}
export type InvalidSignalDecoders = Array<unknown>;
export type InvalidSignals = Array<unknown>;
export interface InvalidSignalsException {
}
export type languageVersion = number;

export interface LimitExceededException {
}
export interface ListCampaignsRequest {
}
export interface ListCampaignsResponse {
}
export interface ListDecoderManifestNetworkInterfacesRequest {
}
export interface ListDecoderManifestNetworkInterfacesResponse {
}
export interface ListDecoderManifestSignalsRequest {
}
export interface ListDecoderManifestSignalsResponse {
}
export interface ListDecoderManifestsRequest {
}
export interface ListDecoderManifestsResponse {
}
export interface ListFleetsForVehicleRequest {
}
export interface ListFleetsForVehicleResponse {
}
export interface ListFleetsRequest {
}
export interface ListFleetsResponse {
}
export interface ListModelManifestNodesRequest {
}
export interface ListModelManifestNodesResponse {
}
export interface ListModelManifestsRequest {
}
export interface ListModelManifestsResponse {
}
export type listOfStrings = Array<unknown>;
export type ListResponseScope = never;
export interface ListSignalCatalogNodesRequest {
}
export interface ListSignalCatalogNodesResponse {
}
export interface ListSignalCatalogsRequest {
}
export interface ListSignalCatalogsResponse {
}
export interface ListStateTemplatesRequest {
}
export interface ListStateTemplatesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListVehiclesInFleetRequest {
}
export interface ListVehiclesInFleetResponse {
}
export type listVehiclesMaxResults = number;

export interface ListVehiclesRequest {
}
export interface ListVehiclesResponse {
}
export type LogType = never;
export type ManifestStatus = never;
export type maxResults = number;

export type maxSampleCount = number;

export type maxStringSize = number;

export type message = string;

export interface MessageSignal {
}
export type modelManifestSummaries = Array<unknown>;
export interface ModelManifestSummary {
}
export type ModelSignalsMap = Record<string, unknown>;
export type MqttTopicArn = string;

export interface MqttTopicConfig {
}
export type NetworkFileBlob = Uint8Array | string;

export type NetworkFileDefinition = never;
export type NetworkFileDefinitions = Array<unknown>;
export type NetworkFilesList = Array<unknown>;
export interface NetworkInterface {
}
export type NetworkInterfaceFailureReason = never;
export type NetworkInterfaces = Array<unknown>;
export type NetworkInterfaceType = never;
export type nextToken = string;

export type Node = never;
export interface NodeCounts {
}
export type NodeDataEncoding = never;
export type NodeDataType = never;
export type NodePath = string;

export type NodePaths = Array<unknown>;
export type Nodes = Array<unknown>;
export type nonNegativeInteger = number;

export type number = number;

export type ObdBitmaskLength = number;

export type ObdByteLength = number;

export interface ObdInterface {
}
export type ObdInterfaceName = string;

export interface ObdSignal {
}
export type ObdStandard = string;

export interface OnChangeStateTemplateUpdateStrategy {
}
export interface PeriodicStateTemplateUpdateStrategy {
}
export type positiveInteger = number;

export type positiveLong = number;

export type Prefix = string;

export type PrimitiveMessageDefinition = never;
export type priority = number;

export type ProtocolName = string;

export type ProtocolVersion = string;

export interface PutEncryptionConfigurationRequest {
}
export interface PutEncryptionConfigurationResponse {
}
export interface PutLoggingOptionsRequest {
}
export interface PutLoggingOptionsResponse {
}
export interface RegisterAccountRequest {
}
export interface RegisterAccountResponse {
}
export type RegistrationStatus = never;
export type ResourceIdentifier = string;

export type resourceName = string;

export interface ResourceNotFoundException {
}
export type ResourceUniqueId = string;

export type RetryAfterSeconds = number;

export interface ROS2PrimitiveMessageDefinition {
}
export type ROS2PrimitiveType = never;
export type S3BucketArn = string;

export interface S3Config {
}
export interface Sensor {
}
export type signalCatalogSummaries = Array<unknown>;
export interface SignalCatalogSummary {
}
export interface SignalDecoder {
}
export type SignalDecoderFailureReason = never;
export type SignalDecoders = Array<unknown>;
export type SignalDecoderType = never;
export type SignalFetchConfig = never;
export interface SignalFetchInformation {
}
export type SignalFetchInformationList = Array<unknown>;
export interface SignalInformation {
}
export type SignalInformationList = Array<unknown>;
export type SignalNodeType = never;
export type SignalValueType = never;
export type SpoolingMode = never;
export interface StateTemplateAssociation {
}
export type StateTemplateAssociationIdentifiers = Array<unknown>;
export type StateTemplateAssociations = Array<unknown>;
export type StateTemplateDataExtraDimensionNodePathList = Array<unknown>;
export type StateTemplateMetadataExtraDimensionNodePathList = Array<unknown>;
export type StateTemplateProperties = Array<unknown>;
export type StateTemplateSummaries = Array<unknown>;
export interface StateTemplateSummary {
}
export type StateTemplateUpdateStrategy = never;
export type statusStr = string;

export type StorageCompressionFormat = never;
export type StorageLocation = string;

export interface StorageMaximumSize {
}
export type StorageMaximumSizeUnit = never;
export type StorageMaximumSizeValue = number;

export interface StorageMinimumTimeToLive {
}
export type StorageMinimumTimeToLiveUnit = never;
export type StorageMinimumTimeToLiveValue = number;

export type string = string;

export type StructuredMessage = never;
export type StructuredMessageDefinition = Array<unknown>;
export interface StructuredMessageFieldNameAndDataTypePair {
}
export interface StructuredMessageListDefinition {
}
export type StructuredMessageListType = never;
export type StructureMessageName = string;

export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface ThrottlingException {
}
export interface TimeBasedCollectionScheme {
}
export interface TimeBasedSignalFetchConfig {
}
export interface TimePeriod {
}
export type timestamp = Date | string;

export interface TimestreamConfig {
}
export type TimestreamDatabaseName = string;

export interface TimestreamRegistrationResponse {
}
export interface TimestreamResources {
}
export type TimestreamTableArn = string;

export type TimestreamTableName = string;

export type TimeUnit = never;
export type TopicName = string;

export type TriggerMode = never;
export type uint32 = number;

export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export type UpdateCampaignAction = never;
export interface UpdateCampaignRequest {
}
export interface UpdateCampaignResponse {
}
export interface UpdateDecoderManifestRequest {
}
export interface UpdateDecoderManifestResponse {
}
export interface UpdateFleetRequest {
}
export interface UpdateFleetResponse {
}
export type UpdateMode = never;
export interface UpdateModelManifestRequest {
}
export interface UpdateModelManifestResponse {
}
export interface UpdateSignalCatalogRequest {
}
export interface UpdateSignalCatalogResponse {
}
export interface UpdateStateTemplateRequest {
}
export interface UpdateStateTemplateResponse {
}
export interface UpdateVehicleError {
}
export type updateVehicleErrors = Array<unknown>;
export interface UpdateVehicleRequest {
}
export interface UpdateVehicleRequestItem {
}
export type updateVehicleRequestItems = Array<unknown>;
export interface UpdateVehicleResponse {
}
export interface UpdateVehicleResponseItem {
}
export type updateVehicleResponseItems = Array<unknown>;
export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = never;
export type VehicleAssociationBehavior = never;
export interface VehicleMiddleware {
}
export type VehicleMiddlewareName = string;

export type VehicleMiddlewareProtocol = never;
export type vehicleName = string;

export type vehicles = Array<unknown>;
export type VehicleState = never;
export interface VehicleStatus {
}
export type VehicleStatusList = Array<unknown>;
export type vehicleSummaries = Array<unknown>;
export interface VehicleSummary {
}
export type wildcardSignalName = string;

export declare namespace AssociateVehicleFleet {
  export type Input = AssociateVehicleFleetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchCreateVehicle {
  export type Input = BatchCreateVehicleRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCampaign {
  export type Input = CreateCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDecoderManifest {
  export type Input = CreateDecoderManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecoderManifestValidationException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateModelManifest {
  export type Input = CreateModelManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidSignalsException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSignalCatalog {
  export type Input = CreateSignalCatalogRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InvalidNodeException
    | InvalidSignalsException
    | LimitExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateStateTemplate {
  export type Input = CreateStateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidSignalsException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateVehicle {
  export type Input = CreateVehicleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCampaign {
  export type Input = DeleteCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDecoderManifest {
  export type Input = DeleteDecoderManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFleet {
  export type Input = DeleteFleetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteModelManifest {
  export type Input = DeleteModelManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSignalCatalog {
  export type Input = DeleteSignalCatalogRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteStateTemplate {
  export type Input = DeleteStateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVehicle {
  export type Input = DeleteVehicleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateVehicleFleet {
  export type Input = DisassociateVehicleFleetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCampaign {
  export type Input = GetCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDecoderManifest {
  export type Input = GetDecoderManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEncryptionConfiguration {
  export type Input = GetEncryptionConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetFleet {
  export type Input = GetFleetRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetModelManifest {
  export type Input = GetModelManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRegisterAccountStatus {
  export type Input = GetRegisterAccountStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSignalCatalog {
  export type Input = GetSignalCatalogRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetStateTemplate {
  export type Input = GetStateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetVehicle {
  export type Input = GetVehicleRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportDecoderManifest {
  export type Input = ImportDecoderManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecoderManifestValidationException
    | InvalidSignalsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportSignalCatalog {
  export type Input = ImportSignalCatalogRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidSignalsException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCampaigns {
  export type Input = ListCampaignsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDecoderManifestNetworkInterfaces {
  export type Input = ListDecoderManifestNetworkInterfacesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDecoderManifestSignals {
  export type Input = ListDecoderManifestSignalsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDecoderManifests {
  export type Input = ListDecoderManifestsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFleets {
  export type Input = ListFleetsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFleetsForVehicle {
  export type Input = ListFleetsForVehicleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelManifestNodes {
  export type Input = ListModelManifestNodesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListModelManifests {
  export type Input = ListModelManifestsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSignalCatalogNodes {
  export type Input = ListSignalCatalogNodesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSignalCatalogs {
  export type Input = ListSignalCatalogsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListStateTemplates {
  export type Input = ListStateTemplatesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListVehicles {
  export type Input = ListVehiclesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListVehiclesInFleet {
  export type Input = ListVehiclesInFleetRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCampaign {
  export type Input = UpdateCampaignRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDecoderManifest {
  export type Input = UpdateDecoderManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecoderManifestValidationException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFleet {
  export type Input = UpdateFleetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateModelManifest {
  export type Input = UpdateModelManifestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidSignalsException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSignalCatalog {
  export type Input = UpdateSignalCatalogRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidNodeException
    | InvalidSignalsException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateStateTemplate {
  export type Input = UpdateStateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidSignalsException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateVehicle {
  export type Input = UpdateVehicleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

