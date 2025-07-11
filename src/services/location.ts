import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface LocationService {
  associateTrackerConsumer(
    input: AssociateTrackerConsumerRequest,
  ): Effect.Effect<
    AssociateTrackerConsumerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteDevicePositionHistory(
    input: BatchDeleteDevicePositionHistoryRequest,
  ): Effect.Effect<
    BatchDeleteDevicePositionHistoryResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchDeleteGeofence(
    input: BatchDeleteGeofenceRequest,
  ): Effect.Effect<
    BatchDeleteGeofenceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchEvaluateGeofences(
    input: BatchEvaluateGeofencesRequest,
  ): Effect.Effect<
    BatchEvaluateGeofencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchGetDevicePosition(
    input: BatchGetDevicePositionRequest,
  ): Effect.Effect<
    BatchGetDevicePositionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchPutGeofence(
    input: BatchPutGeofenceRequest,
  ): Effect.Effect<
    BatchPutGeofenceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  batchUpdateDevicePosition(
    input: BatchUpdateDevicePositionRequest,
  ): Effect.Effect<
    BatchUpdateDevicePositionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  calculateRoute(
    input: CalculateRouteRequest,
  ): Effect.Effect<
    CalculateRouteResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  calculateRouteMatrix(
    input: CalculateRouteMatrixRequest,
  ): Effect.Effect<
    CalculateRouteMatrixResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGeofenceCollection(
    input: CreateGeofenceCollectionRequest,
  ): Effect.Effect<
    CreateGeofenceCollectionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createKey(
    input: CreateKeyRequest,
  ): Effect.Effect<
    CreateKeyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMap(
    input: CreateMapRequest,
  ): Effect.Effect<
    CreateMapResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPlaceIndex(
    input: CreatePlaceIndexRequest,
  ): Effect.Effect<
    CreatePlaceIndexResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRouteCalculator(
    input: CreateRouteCalculatorRequest,
  ): Effect.Effect<
    CreateRouteCalculatorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTracker(
    input: CreateTrackerRequest,
  ): Effect.Effect<
    CreateTrackerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGeofenceCollection(
    input: DeleteGeofenceCollectionRequest,
  ): Effect.Effect<
    DeleteGeofenceCollectionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteKey(
    input: DeleteKeyRequest,
  ): Effect.Effect<
    DeleteKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMap(
    input: DeleteMapRequest,
  ): Effect.Effect<
    DeleteMapResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePlaceIndex(
    input: DeletePlaceIndexRequest,
  ): Effect.Effect<
    DeletePlaceIndexResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRouteCalculator(
    input: DeleteRouteCalculatorRequest,
  ): Effect.Effect<
    DeleteRouteCalculatorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTracker(
    input: DeleteTrackerRequest,
  ): Effect.Effect<
    DeleteTrackerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeGeofenceCollection(
    input: DescribeGeofenceCollectionRequest,
  ): Effect.Effect<
    DescribeGeofenceCollectionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeKey(
    input: DescribeKeyRequest,
  ): Effect.Effect<
    DescribeKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeMap(
    input: DescribeMapRequest,
  ): Effect.Effect<
    DescribeMapResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePlaceIndex(
    input: DescribePlaceIndexRequest,
  ): Effect.Effect<
    DescribePlaceIndexResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRouteCalculator(
    input: DescribeRouteCalculatorRequest,
  ): Effect.Effect<
    DescribeRouteCalculatorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeTracker(
    input: DescribeTrackerRequest,
  ): Effect.Effect<
    DescribeTrackerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateTrackerConsumer(
    input: DisassociateTrackerConsumerRequest,
  ): Effect.Effect<
    DisassociateTrackerConsumerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  forecastGeofenceEvents(
    input: ForecastGeofenceEventsRequest,
  ): Effect.Effect<
    ForecastGeofenceEventsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDevicePosition(
    input: GetDevicePositionRequest,
  ): Effect.Effect<
    GetDevicePositionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDevicePositionHistory(
    input: GetDevicePositionHistoryRequest,
  ): Effect.Effect<
    GetDevicePositionHistoryResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGeofence(
    input: GetGeofenceRequest,
  ): Effect.Effect<
    GetGeofenceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMapGlyphs(
    input: GetMapGlyphsRequest,
  ): Effect.Effect<
    GetMapGlyphsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMapSprites(
    input: GetMapSpritesRequest,
  ): Effect.Effect<
    GetMapSpritesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMapStyleDescriptor(
    input: GetMapStyleDescriptorRequest,
  ): Effect.Effect<
    GetMapStyleDescriptorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMapTile(
    input: GetMapTileRequest,
  ): Effect.Effect<
    GetMapTileResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPlace(
    input: GetPlaceRequest,
  ): Effect.Effect<
    GetPlaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDevicePositions(
    input: ListDevicePositionsRequest,
  ): Effect.Effect<
    ListDevicePositionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGeofenceCollections(
    input: ListGeofenceCollectionsRequest,
  ): Effect.Effect<
    ListGeofenceCollectionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGeofences(
    input: ListGeofencesRequest,
  ): Effect.Effect<
    ListGeofencesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listKeys(
    input: ListKeysRequest,
  ): Effect.Effect<
    ListKeysResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMaps(
    input: ListMapsRequest,
  ): Effect.Effect<
    ListMapsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPlaceIndexes(
    input: ListPlaceIndexesRequest,
  ): Effect.Effect<
    ListPlaceIndexesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRouteCalculators(
    input: ListRouteCalculatorsRequest,
  ): Effect.Effect<
    ListRouteCalculatorsResponse,
    | AccessDeniedException
    | InternalServerException
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
  listTrackerConsumers(
    input: ListTrackerConsumersRequest,
  ): Effect.Effect<
    ListTrackerConsumersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTrackers(
    input: ListTrackersRequest,
  ): Effect.Effect<
    ListTrackersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putGeofence(
    input: PutGeofenceRequest,
  ): Effect.Effect<
    PutGeofenceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchPlaceIndexForPosition(
    input: SearchPlaceIndexForPositionRequest,
  ): Effect.Effect<
    SearchPlaceIndexForPositionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchPlaceIndexForSuggestions(
    input: SearchPlaceIndexForSuggestionsRequest,
  ): Effect.Effect<
    SearchPlaceIndexForSuggestionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchPlaceIndexForText(
    input: SearchPlaceIndexForTextRequest,
  ): Effect.Effect<
    SearchPlaceIndexForTextResponse,
    | AccessDeniedException
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
  updateGeofenceCollection(
    input: UpdateGeofenceCollectionRequest,
  ): Effect.Effect<
    UpdateGeofenceCollectionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateKey(
    input: UpdateKeyRequest,
  ): Effect.Effect<
    UpdateKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMap(
    input: UpdateMapRequest,
  ): Effect.Effect<
    UpdateMapResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePlaceIndex(
    input: UpdatePlaceIndexRequest,
  ): Effect.Effect<
    UpdatePlaceIndexResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRouteCalculator(
    input: UpdateRouteCalculatorRequest,
  ): Effect.Effect<
    UpdateRouteCalculatorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTracker(
    input: UpdateTrackerRequest,
  ): Effect.Effect<
    UpdateTrackerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  verifyDevicePosition(
    input: VerifyDevicePositionRequest,
  ): Effect.Effect<
    VerifyDevicePositionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export type Location = LocationService;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type ApiKey = string;

export type ApiKeyAction = string;

export type ApiKeyActionList = Array<string>;
export interface ApiKeyFilter {
  KeyStatus?: string;
}
export interface ApiKeyRestrictions {
  AllowActions: Array<string>;
  AllowResources: Array<string>;
  AllowReferers?: Array<string>;
}
export type Arn = string;

export type ArnList = Array<string>;
export interface AssociateTrackerConsumerRequest {
  TrackerName: string;
  ConsumerArn: string;
}
export interface AssociateTrackerConsumerResponse {}
export type Base64EncodedGeobuf = Uint8Array | string;

export interface BatchDeleteDevicePositionHistoryError {
  DeviceId: string;
  Error: BatchItemError;
}
export type BatchDeleteDevicePositionHistoryErrorList =
  Array<BatchDeleteDevicePositionHistoryError>;
export interface BatchDeleteDevicePositionHistoryRequest {
  TrackerName: string;
  DeviceIds: Array<string>;
}
export interface BatchDeleteDevicePositionHistoryResponse {
  Errors: Array<BatchDeleteDevicePositionHistoryError>;
}
export interface BatchDeleteGeofenceError {
  GeofenceId: string;
  Error: BatchItemError;
}
export type BatchDeleteGeofenceErrorList = Array<BatchDeleteGeofenceError>;
export interface BatchDeleteGeofenceRequest {
  CollectionName: string;
  GeofenceIds: Array<string>;
}
export interface BatchDeleteGeofenceResponse {
  Errors: Array<BatchDeleteGeofenceError>;
}
export interface BatchEvaluateGeofencesError {
  DeviceId: string;
  SampleTime: Date | string;
  Error: BatchItemError;
}
export type BatchEvaluateGeofencesErrorList =
  Array<BatchEvaluateGeofencesError>;
export interface BatchEvaluateGeofencesRequest {
  CollectionName: string;
  DevicePositionUpdates: Array<DevicePositionUpdate>;
}
export interface BatchEvaluateGeofencesResponse {
  Errors: Array<BatchEvaluateGeofencesError>;
}
export interface BatchGetDevicePositionError {
  DeviceId: string;
  Error: BatchItemError;
}
export type BatchGetDevicePositionErrorList =
  Array<BatchGetDevicePositionError>;
export interface BatchGetDevicePositionRequest {
  TrackerName: string;
  DeviceIds: Array<string>;
}
export interface BatchGetDevicePositionResponse {
  Errors: Array<BatchGetDevicePositionError>;
  DevicePositions: Array<DevicePosition>;
}
export interface BatchItemError {
  Code?: string;
  Message?: string;
}
export type BatchItemErrorCode = string;

export interface BatchPutGeofenceError {
  GeofenceId: string;
  Error: BatchItemError;
}
export type BatchPutGeofenceErrorList = Array<BatchPutGeofenceError>;
export interface BatchPutGeofenceRequest {
  CollectionName: string;
  Entries: Array<BatchPutGeofenceRequestEntry>;
}
export interface BatchPutGeofenceRequestEntry {
  GeofenceId: string;
  Geometry: GeofenceGeometry;
  GeofenceProperties?: Record<string, string>;
}
export type BatchPutGeofenceRequestEntryList =
  Array<BatchPutGeofenceRequestEntry>;
export interface BatchPutGeofenceResponse {
  Successes: Array<BatchPutGeofenceSuccess>;
  Errors: Array<BatchPutGeofenceError>;
}
export interface BatchPutGeofenceSuccess {
  GeofenceId: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type BatchPutGeofenceSuccessList = Array<BatchPutGeofenceSuccess>;
export interface BatchUpdateDevicePositionError {
  DeviceId: string;
  SampleTime: Date | string;
  Error: BatchItemError;
}
export type BatchUpdateDevicePositionErrorList =
  Array<BatchUpdateDevicePositionError>;
export interface BatchUpdateDevicePositionRequest {
  TrackerName: string;
  Updates: Array<DevicePositionUpdate>;
}
export interface BatchUpdateDevicePositionResponse {
  Errors: Array<BatchUpdateDevicePositionError>;
}
export type BoundingBox = Array<number>;
export interface CalculateRouteCarModeOptions {
  AvoidFerries?: boolean;
  AvoidTolls?: boolean;
}
export interface CalculateRouteMatrixRequest {
  CalculatorName: string;
  DeparturePositions: Array<Array<number>>;
  DestinationPositions: Array<Array<number>>;
  TravelMode?: string;
  DepartureTime?: Date | string;
  DepartNow?: boolean;
  DistanceUnit?: string;
  CarModeOptions?: CalculateRouteCarModeOptions;
  TruckModeOptions?: CalculateRouteTruckModeOptions;
  Key?: string;
}
export interface CalculateRouteMatrixResponse {
  RouteMatrix: Array<Array<RouteMatrixEntry>>;
  SnappedDeparturePositions?: Array<Array<number>>;
  SnappedDestinationPositions?: Array<Array<number>>;
  Summary: CalculateRouteMatrixSummary;
}
export interface CalculateRouteMatrixSummary {
  DataSource: string;
  RouteCount: number;
  ErrorCount: number;
  DistanceUnit: string;
}
export interface CalculateRouteRequest {
  CalculatorName: string;
  DeparturePosition: Array<number>;
  DestinationPosition: Array<number>;
  WaypointPositions?: Array<Array<number>>;
  TravelMode?: string;
  DepartureTime?: Date | string;
  DepartNow?: boolean;
  DistanceUnit?: string;
  IncludeLegGeometry?: boolean;
  CarModeOptions?: CalculateRouteCarModeOptions;
  TruckModeOptions?: CalculateRouteTruckModeOptions;
  ArrivalTime?: Date | string;
  OptimizeFor?: string;
  Key?: string;
}
export interface CalculateRouteResponse {
  Legs: Array<Leg>;
  Summary: CalculateRouteSummary;
}
export interface CalculateRouteSummary {
  RouteBBox: Array<number>;
  DataSource: string;
  Distance: number;
  DurationSeconds: number;
  DistanceUnit: string;
}
export interface CalculateRouteTruckModeOptions {
  AvoidFerries?: boolean;
  AvoidTolls?: boolean;
  Dimensions?: TruckDimensions;
  Weight?: TruckWeight;
}
export interface CellSignals {
  LteCellDetails: Array<LteCellDetails>;
}
export interface Circle {
  Center: Array<number>;
  Radius: number;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export type CountryCode3 = string;

export type CountryCode3OrEmpty = string;

export type CountryCodeList = Array<string>;
export interface CreateGeofenceCollectionRequest {
  CollectionName: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  Description?: string;
  Tags?: Record<string, string>;
  KmsKeyId?: string;
}
export interface CreateGeofenceCollectionResponse {
  CollectionName: string;
  CollectionArn: string;
  CreateTime: Date | string;
}
export interface CreateKeyRequest {
  KeyName: string;
  Restrictions: ApiKeyRestrictions;
  Description?: string;
  ExpireTime?: Date | string;
  NoExpiry?: boolean;
  Tags?: Record<string, string>;
}
export interface CreateKeyResponse {
  Key: string;
  KeyArn: string;
  KeyName: string;
  CreateTime: Date | string;
}
export interface CreateMapRequest {
  MapName: string;
  Configuration: MapConfiguration;
  PricingPlan?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateMapResponse {
  MapName: string;
  MapArn: string;
  CreateTime: Date | string;
}
export interface CreatePlaceIndexRequest {
  IndexName: string;
  DataSource: string;
  PricingPlan?: string;
  Description?: string;
  DataSourceConfiguration?: DataSourceConfiguration;
  Tags?: Record<string, string>;
}
export interface CreatePlaceIndexResponse {
  IndexName: string;
  IndexArn: string;
  CreateTime: Date | string;
}
export interface CreateRouteCalculatorRequest {
  CalculatorName: string;
  DataSource: string;
  PricingPlan?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateRouteCalculatorResponse {
  CalculatorName: string;
  CalculatorArn: string;
  CreateTime: Date | string;
}
export interface CreateTrackerRequest {
  TrackerName: string;
  PricingPlan?: string;
  KmsKeyId?: string;
  PricingPlanDataSource?: string;
  Description?: string;
  Tags?: Record<string, string>;
  PositionFiltering?: string;
  EventBridgeEnabled?: boolean;
  KmsKeyEnableGeospatialQueries?: boolean;
}
export interface CreateTrackerResponse {
  TrackerName: string;
  TrackerArn: string;
  CreateTime: Date | string;
}
export type CustomLayer = string;

export type CustomLayerList = Array<string>;
export interface DataSourceConfiguration {
  IntendedUse?: string;
}
export interface DeleteGeofenceCollectionRequest {
  CollectionName: string;
}
export interface DeleteGeofenceCollectionResponse {}
export interface DeleteKeyRequest {
  KeyName: string;
  ForceDelete?: boolean;
}
export interface DeleteKeyResponse {}
export interface DeleteMapRequest {
  MapName: string;
}
export interface DeleteMapResponse {}
export interface DeletePlaceIndexRequest {
  IndexName: string;
}
export interface DeletePlaceIndexResponse {}
export interface DeleteRouteCalculatorRequest {
  CalculatorName: string;
}
export interface DeleteRouteCalculatorResponse {}
export interface DeleteTrackerRequest {
  TrackerName: string;
}
export interface DeleteTrackerResponse {}
export interface DescribeGeofenceCollectionRequest {
  CollectionName: string;
}
export interface DescribeGeofenceCollectionResponse {
  CollectionName: string;
  CollectionArn: string;
  Description: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  KmsKeyId?: string;
  Tags?: Record<string, string>;
  CreateTime: Date | string;
  UpdateTime: Date | string;
  GeofenceCount?: number;
}
export interface DescribeKeyRequest {
  KeyName: string;
}
export interface DescribeKeyResponse {
  Key: string;
  KeyArn: string;
  KeyName: string;
  Restrictions: ApiKeyRestrictions;
  CreateTime: Date | string;
  ExpireTime: Date | string;
  UpdateTime: Date | string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface DescribeMapRequest {
  MapName: string;
}
export interface DescribeMapResponse {
  MapName: string;
  MapArn: string;
  PricingPlan?: string;
  DataSource: string;
  Configuration: MapConfiguration;
  Description: string;
  Tags?: Record<string, string>;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export interface DescribePlaceIndexRequest {
  IndexName: string;
}
export interface DescribePlaceIndexResponse {
  IndexName: string;
  IndexArn: string;
  PricingPlan?: string;
  Description: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
  DataSource: string;
  DataSourceConfiguration: DataSourceConfiguration;
  Tags?: Record<string, string>;
}
export interface DescribeRouteCalculatorRequest {
  CalculatorName: string;
}
export interface DescribeRouteCalculatorResponse {
  CalculatorName: string;
  CalculatorArn: string;
  PricingPlan?: string;
  Description: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
  DataSource: string;
  Tags?: Record<string, string>;
}
export interface DescribeTrackerRequest {
  TrackerName: string;
}
export interface DescribeTrackerResponse {
  TrackerName: string;
  TrackerArn: string;
  Description: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  Tags?: Record<string, string>;
  CreateTime: Date | string;
  UpdateTime: Date | string;
  KmsKeyId?: string;
  PositionFiltering?: string;
  EventBridgeEnabled?: boolean;
  KmsKeyEnableGeospatialQueries?: boolean;
}
export type DeviceIdsList = Array<string>;
export interface DevicePosition {
  DeviceId?: string;
  SampleTime: Date | string;
  ReceivedTime: Date | string;
  Position: Array<number>;
  Accuracy?: PositionalAccuracy;
  PositionProperties?: Record<string, string>;
}
export type DevicePositionList = Array<DevicePosition>;
export interface DevicePositionUpdate {
  DeviceId: string;
  SampleTime: Date | string;
  Position: Array<number>;
  Accuracy?: PositionalAccuracy;
  PositionProperties?: Record<string, string>;
}
export type DevicePositionUpdateList = Array<DevicePositionUpdate>;
export interface DeviceState {
  DeviceId: string;
  SampleTime: Date | string;
  Position: Array<number>;
  Accuracy?: PositionalAccuracy;
  Ipv4Address?: string;
  WiFiAccessPoints?: Array<WiFiAccessPoint>;
  CellSignals?: CellSignals;
}
export type DimensionUnit = string;

export interface DisassociateTrackerConsumerRequest {
  TrackerName: string;
  ConsumerArn: string;
}
export interface DisassociateTrackerConsumerResponse {}
export type DistanceUnit = string;

export type Earfcn = number;

export type EutranCellId = number;

export type FilterPlaceCategoryList = Array<string>;
export interface ForecastedEvent {
  EventId: string;
  GeofenceId: string;
  IsDeviceInGeofence: boolean;
  NearestDistance: number;
  EventType: string;
  ForecastedBreachTime?: Date | string;
  GeofenceProperties?: Record<string, string>;
}
export type ForecastedEventsList = Array<ForecastedEvent>;
export type ForecastedGeofenceEventType = string;

export interface ForecastGeofenceEventsDeviceState {
  Position: Array<number>;
  Speed?: number;
}
export interface ForecastGeofenceEventsRequest {
  CollectionName: string;
  DeviceState: ForecastGeofenceEventsDeviceState;
  TimeHorizonMinutes?: number;
  DistanceUnit?: string;
  SpeedUnit?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ForecastGeofenceEventsResponse {
  ForecastedEvents: Array<ForecastedEvent>;
  NextToken?: string;
  DistanceUnit: string;
  SpeedUnit: string;
}
export type GeoArn = string;

export type GeoArnList = Array<string>;
export type GeoArnV2 = string;

export interface GeofenceGeometry {
  Polygon?: Array<Array<Array<number>>>;
  Circle?: Circle;
  Geobuf?: Uint8Array | string;
}
export interface GetDevicePositionHistoryRequest {
  TrackerName: string;
  DeviceId: string;
  NextToken?: string;
  StartTimeInclusive?: Date | string;
  EndTimeExclusive?: Date | string;
  MaxResults?: number;
}
export interface GetDevicePositionHistoryResponse {
  DevicePositions: Array<DevicePosition>;
  NextToken?: string;
}
export interface GetDevicePositionRequest {
  TrackerName: string;
  DeviceId: string;
}
export interface GetDevicePositionResponse {
  DeviceId?: string;
  SampleTime: Date | string;
  ReceivedTime: Date | string;
  Position: Array<number>;
  Accuracy?: PositionalAccuracy;
  PositionProperties?: Record<string, string>;
}
export interface GetGeofenceRequest {
  CollectionName: string;
  GeofenceId: string;
}
export interface GetGeofenceResponse {
  GeofenceId: string;
  Geometry: GeofenceGeometry;
  Status: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
  GeofenceProperties?: Record<string, string>;
}
export interface GetMapGlyphsRequest {
  MapName: string;
  FontStack: string;
  FontUnicodeRange: string;
  Key?: string;
}
export interface GetMapGlyphsResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
}
export interface GetMapSpritesRequest {
  MapName: string;
  FileName: string;
  Key?: string;
}
export interface GetMapSpritesResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
}
export interface GetMapStyleDescriptorRequest {
  MapName: string;
  Key?: string;
}
export interface GetMapStyleDescriptorResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
}
export interface GetMapTileRequest {
  MapName: string;
  Z: string;
  X: string;
  Y: string;
  Key?: string;
}
export interface GetMapTileResponse {
  Blob?: Uint8Array | string;
  ContentType?: string;
  CacheControl?: string;
}
export interface GetPlaceRequest {
  IndexName: string;
  PlaceId: string;
  Language?: string;
  Key?: string;
}
export interface GetPlaceResponse {
  Place: Place;
}
export type Id = string;

export type IdList = Array<string>;
export interface InferredState {
  Position?: Array<number>;
  Accuracy?: PositionalAccuracy;
  DeviationDistance?: number;
  ProxyDetected: boolean;
}
export type IntendedUse = string;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export type KmsKeyId = string;

export type LanguageTag = string;

export type LargeToken = string;

export interface Leg {
  StartPosition: Array<number>;
  EndPosition: Array<number>;
  Distance: number;
  DurationSeconds: number;
  Geometry?: LegGeometry;
  Steps: Array<Step>;
}
export interface LegGeometry {
  LineString?: Array<Array<number>>;
}
export type LegList = Array<Leg>;
export type LinearRing = Array<Array<number>>;
export type LinearRings = Array<Array<Array<number>>>;
export type LineString = Array<Array<number>>;
export interface ListDevicePositionsRequest {
  TrackerName: string;
  MaxResults?: number;
  NextToken?: string;
  FilterGeometry?: TrackingFilterGeometry;
}
export interface ListDevicePositionsResponse {
  Entries: Array<ListDevicePositionsResponseEntry>;
  NextToken?: string;
}
export interface ListDevicePositionsResponseEntry {
  DeviceId: string;
  SampleTime: Date | string;
  Position: Array<number>;
  Accuracy?: PositionalAccuracy;
  PositionProperties?: Record<string, string>;
}
export type ListDevicePositionsResponseEntryList =
  Array<ListDevicePositionsResponseEntry>;
export interface ListGeofenceCollectionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGeofenceCollectionsResponse {
  Entries: Array<ListGeofenceCollectionsResponseEntry>;
  NextToken?: string;
}
export interface ListGeofenceCollectionsResponseEntry {
  CollectionName: string;
  Description: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type ListGeofenceCollectionsResponseEntryList =
  Array<ListGeofenceCollectionsResponseEntry>;
export interface ListGeofenceResponseEntry {
  GeofenceId: string;
  Geometry: GeofenceGeometry;
  Status: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
  GeofenceProperties?: Record<string, string>;
}
export type ListGeofenceResponseEntryList = Array<ListGeofenceResponseEntry>;
export interface ListGeofencesRequest {
  CollectionName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListGeofencesResponse {
  Entries: Array<ListGeofenceResponseEntry>;
  NextToken?: string;
}
export interface ListKeysRequest {
  MaxResults?: number;
  NextToken?: string;
  Filter?: ApiKeyFilter;
}
export interface ListKeysResponse {
  Entries: Array<ListKeysResponseEntry>;
  NextToken?: string;
}
export interface ListKeysResponseEntry {
  KeyName: string;
  ExpireTime: Date | string;
  Description?: string;
  Restrictions: ApiKeyRestrictions;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type ListKeysResponseEntryList = Array<ListKeysResponseEntry>;
export interface ListMapsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMapsResponse {
  Entries: Array<ListMapsResponseEntry>;
  NextToken?: string;
}
export interface ListMapsResponseEntry {
  MapName: string;
  Description: string;
  DataSource: string;
  PricingPlan?: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type ListMapsResponseEntryList = Array<ListMapsResponseEntry>;
export interface ListPlaceIndexesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPlaceIndexesResponse {
  Entries: Array<ListPlaceIndexesResponseEntry>;
  NextToken?: string;
}
export interface ListPlaceIndexesResponseEntry {
  IndexName: string;
  Description: string;
  DataSource: string;
  PricingPlan?: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type ListPlaceIndexesResponseEntryList =
  Array<ListPlaceIndexesResponseEntry>;
export interface ListRouteCalculatorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRouteCalculatorsResponse {
  Entries: Array<ListRouteCalculatorsResponseEntry>;
  NextToken?: string;
}
export interface ListRouteCalculatorsResponseEntry {
  CalculatorName: string;
  Description: string;
  DataSource: string;
  PricingPlan?: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type ListRouteCalculatorsResponseEntryList =
  Array<ListRouteCalculatorsResponseEntry>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListTrackerConsumersRequest {
  TrackerName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTrackerConsumersResponse {
  ConsumerArns: Array<string>;
  NextToken?: string;
}
export interface ListTrackersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTrackersResponse {
  Entries: Array<ListTrackersResponseEntry>;
  NextToken?: string;
}
export interface ListTrackersResponseEntry {
  TrackerName: string;
  Description: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type ListTrackersResponseEntryList = Array<ListTrackersResponseEntry>;
export interface LteCellDetails {
  CellId: number;
  Mcc: number;
  Mnc: number;
  LocalId?: LteLocalId;
  NetworkMeasurements?: Array<LteNetworkMeasurements>;
  TimingAdvance?: number;
  NrCapable?: boolean;
  Rsrp?: number;
  Rsrq?: number;
  Tac?: number;
}
export type LteCellDetailsList = Array<LteCellDetails>;
export interface LteLocalId {
  Earfcn: number;
  Pci: number;
}
export interface LteNetworkMeasurements {
  Earfcn: number;
  CellId: number;
  Pci: number;
  Rsrp?: number;
  Rsrq?: number;
}
export type LteNetworkMeasurementsList = Array<LteNetworkMeasurements>;
export interface MapConfiguration {
  Style: string;
  PoliticalView?: string;
  CustomLayers?: Array<string>;
}
export interface MapConfigurationUpdate {
  PoliticalView?: string;
  CustomLayers?: Array<string>;
}
export type MapStyle = string;

export type NearestDistance = number;

export type OptimizationMode = string;

export type Pci = number;

export interface Place {
  Label?: string;
  Geometry: PlaceGeometry;
  AddressNumber?: string;
  Street?: string;
  Neighborhood?: string;
  Municipality?: string;
  SubRegion?: string;
  Region?: string;
  Country?: string;
  PostalCode?: string;
  Interpolated?: boolean;
  TimeZone?: TimeZone;
  UnitType?: string;
  UnitNumber?: string;
  Categories?: Array<string>;
  SupplementalCategories?: Array<string>;
  SubMunicipality?: string;
}
export type PlaceCategory = string;

export type PlaceCategoryList = Array<string>;
export interface PlaceGeometry {
  Point?: Array<number>;
}
export type PlaceId = string;

export type PlaceIndexSearchResultLimit = number;

export type PlaceSupplementalCategory = string;

export type PlaceSupplementalCategoryList = Array<string>;
export type Position = Array<number>;
export interface PositionalAccuracy {
  Horizontal: number;
}
export type PositionFiltering = string;

export type PositionList = Array<Array<number>>;
export type PositionPropertyMap = Record<string, string>;
export type PricingPlan = string;

export type PropertyMap = Record<string, string>;
export interface PutGeofenceRequest {
  CollectionName: string;
  GeofenceId: string;
  Geometry: GeofenceGeometry;
  GeofenceProperties?: Record<string, string>;
}
export interface PutGeofenceResponse {
  GeofenceId: string;
  CreateTime: Date | string;
  UpdateTime: Date | string;
}
export type RefererPattern = string;

export type RefererPatternList = Array<string>;
export type ResourceDescription = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
}> {}
export type RouteMatrix = Array<Array<RouteMatrixEntry>>;
export interface RouteMatrixEntry {
  Distance?: number;
  DurationSeconds?: number;
  Error?: RouteMatrixEntryError;
}
export interface RouteMatrixEntryError {
  Code: string;
  Message?: string;
}
export type RouteMatrixErrorCode = string;

export type RouteMatrixRow = Array<RouteMatrixEntry>;
export type Rsrp = number;

export type Rsrq = number;

export interface SearchForPositionResult {
  Place: Place;
  Distance: number;
  PlaceId?: string;
}
export type SearchForPositionResultList = Array<SearchForPositionResult>;
export interface SearchForSuggestionsResult {
  Text: string;
  PlaceId?: string;
  Categories?: Array<string>;
  SupplementalCategories?: Array<string>;
}
export type SearchForSuggestionsResultList = Array<SearchForSuggestionsResult>;
export interface SearchForTextResult {
  Place: Place;
  Distance?: number;
  Relevance?: number;
  PlaceId?: string;
}
export type SearchForTextResultList = Array<SearchForTextResult>;
export interface SearchPlaceIndexForPositionRequest {
  IndexName: string;
  Position: Array<number>;
  MaxResults?: number;
  Language?: string;
  Key?: string;
}
export interface SearchPlaceIndexForPositionResponse {
  Summary: SearchPlaceIndexForPositionSummary;
  Results: Array<SearchForPositionResult>;
}
export interface SearchPlaceIndexForPositionSummary {
  Position: Array<number>;
  MaxResults?: number;
  DataSource: string;
  Language?: string;
}
export interface SearchPlaceIndexForSuggestionsRequest {
  IndexName: string;
  Text: string;
  BiasPosition?: Array<number>;
  FilterBBox?: Array<number>;
  FilterCountries?: Array<string>;
  MaxResults?: number;
  Language?: string;
  FilterCategories?: Array<string>;
  Key?: string;
}
export interface SearchPlaceIndexForSuggestionsResponse {
  Summary: SearchPlaceIndexForSuggestionsSummary;
  Results: Array<SearchForSuggestionsResult>;
}
export interface SearchPlaceIndexForSuggestionsSummary {
  Text: string;
  BiasPosition?: Array<number>;
  FilterBBox?: Array<number>;
  FilterCountries?: Array<string>;
  MaxResults?: number;
  DataSource: string;
  Language?: string;
  FilterCategories?: Array<string>;
}
export interface SearchPlaceIndexForTextRequest {
  IndexName: string;
  Text: string;
  BiasPosition?: Array<number>;
  FilterBBox?: Array<number>;
  FilterCountries?: Array<string>;
  MaxResults?: number;
  Language?: string;
  FilterCategories?: Array<string>;
  Key?: string;
}
export interface SearchPlaceIndexForTextResponse {
  Summary: SearchPlaceIndexForTextSummary;
  Results: Array<SearchForTextResult>;
}
export interface SearchPlaceIndexForTextSummary {
  Text: string;
  BiasPosition?: Array<number>;
  FilterBBox?: Array<number>;
  FilterCountries?: Array<string>;
  MaxResults?: number;
  ResultBBox?: Array<number>;
  DataSource: string;
  Language?: string;
  FilterCategories?: Array<string>;
}
export type SensitiveString = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type SpeedUnit = string;

export type Status = string;

export interface Step {
  StartPosition: Array<number>;
  EndPosition: Array<number>;
  Distance: number;
  DurationSeconds: number;
  GeometryOffset?: number;
}
export type StepList = Array<Step>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export type Timestamp = Date | string;

export interface TimeZone {
  Name: string;
  Offset?: number;
}
export type Token = string;

export interface TrackingFilterGeometry {
  Polygon?: Array<Array<Array<number>>>;
}
export type TravelMode = string;

export interface TruckDimensions {
  Length?: number;
  Height?: number;
  Width?: number;
  Unit?: string;
}
export interface TruckWeight {
  Total?: number;
  Unit?: string;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateGeofenceCollectionRequest {
  CollectionName: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  Description?: string;
}
export interface UpdateGeofenceCollectionResponse {
  CollectionName: string;
  CollectionArn: string;
  UpdateTime: Date | string;
}
export interface UpdateKeyRequest {
  KeyName: string;
  Description?: string;
  ExpireTime?: Date | string;
  NoExpiry?: boolean;
  ForceUpdate?: boolean;
  Restrictions?: ApiKeyRestrictions;
}
export interface UpdateKeyResponse {
  KeyArn: string;
  KeyName: string;
  UpdateTime: Date | string;
}
export interface UpdateMapRequest {
  MapName: string;
  PricingPlan?: string;
  Description?: string;
  ConfigurationUpdate?: MapConfigurationUpdate;
}
export interface UpdateMapResponse {
  MapName: string;
  MapArn: string;
  UpdateTime: Date | string;
}
export interface UpdatePlaceIndexRequest {
  IndexName: string;
  PricingPlan?: string;
  Description?: string;
  DataSourceConfiguration?: DataSourceConfiguration;
}
export interface UpdatePlaceIndexResponse {
  IndexName: string;
  IndexArn: string;
  UpdateTime: Date | string;
}
export interface UpdateRouteCalculatorRequest {
  CalculatorName: string;
  PricingPlan?: string;
  Description?: string;
}
export interface UpdateRouteCalculatorResponse {
  CalculatorName: string;
  CalculatorArn: string;
  UpdateTime: Date | string;
}
export interface UpdateTrackerRequest {
  TrackerName: string;
  PricingPlan?: string;
  PricingPlanDataSource?: string;
  Description?: string;
  PositionFiltering?: string;
  EventBridgeEnabled?: boolean;
  KmsKeyEnableGeospatialQueries?: boolean;
}
export interface UpdateTrackerResponse {
  TrackerName: string;
  TrackerArn: string;
  UpdateTime: Date | string;
}
export type Uuid = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason: string;
  readonly FieldList: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type VehicleWeightUnit = string;

export interface VerifyDevicePositionRequest {
  TrackerName: string;
  DeviceState: DeviceState;
  DistanceUnit?: string;
}
export interface VerifyDevicePositionResponse {
  InferredState: InferredState;
  DeviceId: string;
  SampleTime: Date | string;
  ReceivedTime: Date | string;
  DistanceUnit: string;
}
export type WaypointPositionList = Array<Array<number>>;
export interface WiFiAccessPoint {
  MacAddress: string;
  Rss: number;
}
export type WiFiAccessPointList = Array<WiFiAccessPoint>;
export declare namespace AssociateTrackerConsumer {
  export type Input = AssociateTrackerConsumerRequest;
  export type Output = AssociateTrackerConsumerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteDevicePositionHistory {
  export type Input = BatchDeleteDevicePositionHistoryRequest;
  export type Output = BatchDeleteDevicePositionHistoryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchDeleteGeofence {
  export type Input = BatchDeleteGeofenceRequest;
  export type Output = BatchDeleteGeofenceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchEvaluateGeofences {
  export type Input = BatchEvaluateGeofencesRequest;
  export type Output = BatchEvaluateGeofencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetDevicePosition {
  export type Input = BatchGetDevicePositionRequest;
  export type Output = BatchGetDevicePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchPutGeofence {
  export type Input = BatchPutGeofenceRequest;
  export type Output = BatchPutGeofenceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchUpdateDevicePosition {
  export type Input = BatchUpdateDevicePositionRequest;
  export type Output = BatchUpdateDevicePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CalculateRoute {
  export type Input = CalculateRouteRequest;
  export type Output = CalculateRouteResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CalculateRouteMatrix {
  export type Input = CalculateRouteMatrixRequest;
  export type Output = CalculateRouteMatrixResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGeofenceCollection {
  export type Input = CreateGeofenceCollectionRequest;
  export type Output = CreateGeofenceCollectionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKey {
  export type Input = CreateKeyRequest;
  export type Output = CreateKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMap {
  export type Input = CreateMapRequest;
  export type Output = CreateMapResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePlaceIndex {
  export type Input = CreatePlaceIndexRequest;
  export type Output = CreatePlaceIndexResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRouteCalculator {
  export type Input = CreateRouteCalculatorRequest;
  export type Output = CreateRouteCalculatorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTracker {
  export type Input = CreateTrackerRequest;
  export type Output = CreateTrackerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGeofenceCollection {
  export type Input = DeleteGeofenceCollectionRequest;
  export type Output = DeleteGeofenceCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKey {
  export type Input = DeleteKeyRequest;
  export type Output = DeleteKeyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMap {
  export type Input = DeleteMapRequest;
  export type Output = DeleteMapResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePlaceIndex {
  export type Input = DeletePlaceIndexRequest;
  export type Output = DeletePlaceIndexResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRouteCalculator {
  export type Input = DeleteRouteCalculatorRequest;
  export type Output = DeleteRouteCalculatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTracker {
  export type Input = DeleteTrackerRequest;
  export type Output = DeleteTrackerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeGeofenceCollection {
  export type Input = DescribeGeofenceCollectionRequest;
  export type Output = DescribeGeofenceCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeKey {
  export type Input = DescribeKeyRequest;
  export type Output = DescribeKeyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeMap {
  export type Input = DescribeMapRequest;
  export type Output = DescribeMapResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePlaceIndex {
  export type Input = DescribePlaceIndexRequest;
  export type Output = DescribePlaceIndexResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRouteCalculator {
  export type Input = DescribeRouteCalculatorRequest;
  export type Output = DescribeRouteCalculatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeTracker {
  export type Input = DescribeTrackerRequest;
  export type Output = DescribeTrackerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateTrackerConsumer {
  export type Input = DisassociateTrackerConsumerRequest;
  export type Output = DisassociateTrackerConsumerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ForecastGeofenceEvents {
  export type Input = ForecastGeofenceEventsRequest;
  export type Output = ForecastGeofenceEventsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDevicePosition {
  export type Input = GetDevicePositionRequest;
  export type Output = GetDevicePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDevicePositionHistory {
  export type Input = GetDevicePositionHistoryRequest;
  export type Output = GetDevicePositionHistoryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGeofence {
  export type Input = GetGeofenceRequest;
  export type Output = GetGeofenceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMapGlyphs {
  export type Input = GetMapGlyphsRequest;
  export type Output = GetMapGlyphsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMapSprites {
  export type Input = GetMapSpritesRequest;
  export type Output = GetMapSpritesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMapStyleDescriptor {
  export type Input = GetMapStyleDescriptorRequest;
  export type Output = GetMapStyleDescriptorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMapTile {
  export type Input = GetMapTileRequest;
  export type Output = GetMapTileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPlace {
  export type Input = GetPlaceRequest;
  export type Output = GetPlaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDevicePositions {
  export type Input = ListDevicePositionsRequest;
  export type Output = ListDevicePositionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGeofenceCollections {
  export type Input = ListGeofenceCollectionsRequest;
  export type Output = ListGeofenceCollectionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGeofences {
  export type Input = ListGeofencesRequest;
  export type Output = ListGeofencesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKeys {
  export type Input = ListKeysRequest;
  export type Output = ListKeysResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMaps {
  export type Input = ListMapsRequest;
  export type Output = ListMapsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPlaceIndexes {
  export type Input = ListPlaceIndexesRequest;
  export type Output = ListPlaceIndexesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRouteCalculators {
  export type Input = ListRouteCalculatorsRequest;
  export type Output = ListRouteCalculatorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
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

export declare namespace ListTrackerConsumers {
  export type Input = ListTrackerConsumersRequest;
  export type Output = ListTrackerConsumersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrackers {
  export type Input = ListTrackersRequest;
  export type Output = ListTrackersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutGeofence {
  export type Input = PutGeofenceRequest;
  export type Output = PutGeofenceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchPlaceIndexForPosition {
  export type Input = SearchPlaceIndexForPositionRequest;
  export type Output = SearchPlaceIndexForPositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchPlaceIndexForSuggestions {
  export type Input = SearchPlaceIndexForSuggestionsRequest;
  export type Output = SearchPlaceIndexForSuggestionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchPlaceIndexForText {
  export type Input = SearchPlaceIndexForTextRequest;
  export type Output = SearchPlaceIndexForTextResponse;
  export type Error =
    | AccessDeniedException
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

export declare namespace UpdateGeofenceCollection {
  export type Input = UpdateGeofenceCollectionRequest;
  export type Output = UpdateGeofenceCollectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateKey {
  export type Input = UpdateKeyRequest;
  export type Output = UpdateKeyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMap {
  export type Input = UpdateMapRequest;
  export type Output = UpdateMapResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePlaceIndex {
  export type Input = UpdatePlaceIndexRequest;
  export type Output = UpdatePlaceIndexResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRouteCalculator {
  export type Input = UpdateRouteCalculatorRequest;
  export type Output = UpdateRouteCalculatorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTracker {
  export type Input = UpdateTrackerRequest;
  export type Output = UpdateTrackerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace VerifyDevicePosition {
  export type Input = VerifyDevicePositionRequest;
  export type Output = VerifyDevicePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
