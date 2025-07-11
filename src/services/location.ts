import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface LocationService {
  associateTrackerConsumer(
    input: AssociateTrackerConsumerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchDeleteDevicePositionHistory(
    input: BatchDeleteDevicePositionHistoryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchDeleteGeofence(
    input: BatchDeleteGeofenceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchEvaluateGeofences(
    input: BatchEvaluateGeofencesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetDevicePosition(
    input: BatchGetDevicePositionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchPutGeofence(
    input: BatchPutGeofenceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchUpdateDevicePosition(
    input: BatchUpdateDevicePositionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  calculateRoute(
    input: CalculateRouteRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  calculateRouteMatrix(
    input: CalculateRouteMatrixRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createGeofenceCollection(
    input: CreateGeofenceCollectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKey(
    input: CreateKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createMap(
    input: CreateMapRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPlaceIndex(
    input: CreatePlaceIndexRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createRouteCalculator(
    input: CreateRouteCalculatorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTracker(
    input: CreateTrackerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteGeofenceCollection(
    input: DeleteGeofenceCollectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKey(
    input: DeleteKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteMap(
    input: DeleteMapRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePlaceIndex(
    input: DeletePlaceIndexRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteRouteCalculator(
    input: DeleteRouteCalculatorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteTracker(
    input: DeleteTrackerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeGeofenceCollection(
    input: DescribeGeofenceCollectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeKey(
    input: DescribeKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeMap(
    input: DescribeMapRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describePlaceIndex(
    input: DescribePlaceIndexRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeRouteCalculator(
    input: DescribeRouteCalculatorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeTracker(
    input: DescribeTrackerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateTrackerConsumer(
    input: DisassociateTrackerConsumerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  forecastGeofenceEvents(
    input: ForecastGeofenceEventsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDevicePosition(
    input: GetDevicePositionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDevicePositionHistory(
    input: GetDevicePositionHistoryRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getGeofence(
    input: GetGeofenceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMapGlyphs(
    input: GetMapGlyphsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMapSprites(
    input: GetMapSpritesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMapStyleDescriptor(
    input: GetMapStyleDescriptorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMapTile(
    input: GetMapTileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPlace(
    input: GetPlaceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDevicePositions(
    input: ListDevicePositionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listGeofenceCollections(
    input: ListGeofenceCollectionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listGeofences(
    input: ListGeofencesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKeys(
    input: ListKeysRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMaps(
    input: ListMapsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPlaceIndexes(
    input: ListPlaceIndexesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRouteCalculators(
    input: ListRouteCalculatorsRequest,
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
  listTrackerConsumers(
    input: ListTrackerConsumersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTrackers(
    input: ListTrackersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putGeofence(
    input: PutGeofenceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  searchPlaceIndexForPosition(
    input: SearchPlaceIndexForPositionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  searchPlaceIndexForSuggestions(
    input: SearchPlaceIndexForSuggestionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  searchPlaceIndexForText(
    input: SearchPlaceIndexForTextRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
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
  updateGeofenceCollection(
    input: UpdateGeofenceCollectionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateKey(
    input: UpdateKeyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateMap(
    input: UpdateMapRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePlaceIndex(
    input: UpdatePlaceIndexRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRouteCalculator(
    input: UpdateRouteCalculatorRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateTracker(
    input: UpdateTrackerRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  verifyDevicePosition(
    input: VerifyDevicePositionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Location = LocationService;

export interface AccessDeniedException {
}
export type ApiKey = string;

export type ApiKeyAction = string;

export type ApiKeyActionList = Array<unknown>;
export interface ApiKeyFilter {
}
export interface ApiKeyRestrictions {
}
export type Arn = string;

export type ArnList = Array<unknown>;
export interface AssociateTrackerConsumerRequest {
}
export interface AssociateTrackerConsumerResponse {
}
export type Base64EncodedGeobuf = Uint8Array | string;

export interface BatchDeleteDevicePositionHistoryError {
}
export type BatchDeleteDevicePositionHistoryErrorList = Array<unknown>;
export interface BatchDeleteDevicePositionHistoryRequest {
}
export interface BatchDeleteDevicePositionHistoryResponse {
}
export interface BatchDeleteGeofenceError {
}
export type BatchDeleteGeofenceErrorList = Array<unknown>;
export interface BatchDeleteGeofenceRequest {
}
export interface BatchDeleteGeofenceResponse {
}
export interface BatchEvaluateGeofencesError {
}
export type BatchEvaluateGeofencesErrorList = Array<unknown>;
export interface BatchEvaluateGeofencesRequest {
}
export interface BatchEvaluateGeofencesResponse {
}
export interface BatchGetDevicePositionError {
}
export type BatchGetDevicePositionErrorList = Array<unknown>;
export interface BatchGetDevicePositionRequest {
}
export interface BatchGetDevicePositionResponse {
}
export interface BatchItemError {
}
export type BatchItemErrorCode = string;

export interface BatchPutGeofenceError {
}
export type BatchPutGeofenceErrorList = Array<unknown>;
export interface BatchPutGeofenceRequest {
}
export interface BatchPutGeofenceRequestEntry {
}
export type BatchPutGeofenceRequestEntryList = Array<unknown>;
export interface BatchPutGeofenceResponse {
}
export interface BatchPutGeofenceSuccess {
}
export type BatchPutGeofenceSuccessList = Array<unknown>;
export interface BatchUpdateDevicePositionError {
}
export type BatchUpdateDevicePositionErrorList = Array<unknown>;
export interface BatchUpdateDevicePositionRequest {
}
export interface BatchUpdateDevicePositionResponse {
}
export type BoundingBox = Array<unknown>;
export interface CalculateRouteCarModeOptions {
}
export interface CalculateRouteMatrixRequest {
}
export interface CalculateRouteMatrixResponse {
}
export interface CalculateRouteMatrixSummary {
}
export interface CalculateRouteRequest {
}
export interface CalculateRouteResponse {
}
export interface CalculateRouteSummary {
}
export interface CalculateRouteTruckModeOptions {
}
export interface CellSignals {
}
export interface Circle {
}
export interface ConflictException {
}
export type CountryCode3 = string;

export type CountryCode3OrEmpty = string;

export type CountryCodeList = Array<unknown>;
export interface CreateGeofenceCollectionRequest {
}
export interface CreateGeofenceCollectionResponse {
}
export interface CreateKeyRequest {
}
export interface CreateKeyResponse {
}
export interface CreateMapRequest {
}
export interface CreateMapResponse {
}
export interface CreatePlaceIndexRequest {
}
export interface CreatePlaceIndexResponse {
}
export interface CreateRouteCalculatorRequest {
}
export interface CreateRouteCalculatorResponse {
}
export interface CreateTrackerRequest {
}
export interface CreateTrackerResponse {
}
export type CustomLayer = string;

export type CustomLayerList = Array<unknown>;
export interface DataSourceConfiguration {
}
export interface DeleteGeofenceCollectionRequest {
}
export interface DeleteGeofenceCollectionResponse {
}
export interface DeleteKeyRequest {
}
export interface DeleteKeyResponse {
}
export interface DeleteMapRequest {
}
export interface DeleteMapResponse {
}
export interface DeletePlaceIndexRequest {
}
export interface DeletePlaceIndexResponse {
}
export interface DeleteRouteCalculatorRequest {
}
export interface DeleteRouteCalculatorResponse {
}
export interface DeleteTrackerRequest {
}
export interface DeleteTrackerResponse {
}
export interface DescribeGeofenceCollectionRequest {
}
export interface DescribeGeofenceCollectionResponse {
}
export interface DescribeKeyRequest {
}
export interface DescribeKeyResponse {
}
export interface DescribeMapRequest {
}
export interface DescribeMapResponse {
}
export interface DescribePlaceIndexRequest {
}
export interface DescribePlaceIndexResponse {
}
export interface DescribeRouteCalculatorRequest {
}
export interface DescribeRouteCalculatorResponse {
}
export interface DescribeTrackerRequest {
}
export interface DescribeTrackerResponse {
}
export type DeviceIdsList = Array<unknown>;
export interface DevicePosition {
}
export type DevicePositionList = Array<unknown>;
export interface DevicePositionUpdate {
}
export type DevicePositionUpdateList = Array<unknown>;
export interface DeviceState {
}
export type DimensionUnit = string;

export interface DisassociateTrackerConsumerRequest {
}
export interface DisassociateTrackerConsumerResponse {
}
export type DistanceUnit = string;

export type Earfcn = number;

export type EutranCellId = number;

export type FilterPlaceCategoryList = Array<unknown>;
export interface ForecastedEvent {
}
export type ForecastedEventsList = Array<unknown>;
export type ForecastedGeofenceEventType = string;

export interface ForecastGeofenceEventsDeviceState {
}
export interface ForecastGeofenceEventsRequest {
}
export interface ForecastGeofenceEventsResponse {
}
export type GeoArn = string;

export type GeoArnList = Array<unknown>;
export type GeoArnV2 = string;

export interface GeofenceGeometry {
}
export interface GetDevicePositionHistoryRequest {
}
export interface GetDevicePositionHistoryResponse {
}
export interface GetDevicePositionRequest {
}
export interface GetDevicePositionResponse {
}
export interface GetGeofenceRequest {
}
export interface GetGeofenceResponse {
}
export interface GetMapGlyphsRequest {
}
export interface GetMapGlyphsResponse {
}
export interface GetMapSpritesRequest {
}
export interface GetMapSpritesResponse {
}
export interface GetMapStyleDescriptorRequest {
}
export interface GetMapStyleDescriptorResponse {
}
export interface GetMapTileRequest {
}
export interface GetMapTileResponse {
}
export interface GetPlaceRequest {
}
export interface GetPlaceResponse {
}
export type Id = string;

export type IdList = Array<unknown>;
export interface InferredState {
}
export type IntendedUse = string;

export interface InternalServerException {
}
export type KmsKeyId = string;

export type LanguageTag = string;

export type LargeToken = string;

export interface Leg {
}
export interface LegGeometry {
}
export type LegList = Array<unknown>;
export type LinearRing = Array<unknown>;
export type LinearRings = Array<unknown>;
export type LineString = Array<unknown>;
export interface ListDevicePositionsRequest {
}
export interface ListDevicePositionsResponse {
}
export interface ListDevicePositionsResponseEntry {
}
export type ListDevicePositionsResponseEntryList = Array<unknown>;
export interface ListGeofenceCollectionsRequest {
}
export interface ListGeofenceCollectionsResponse {
}
export interface ListGeofenceCollectionsResponseEntry {
}
export type ListGeofenceCollectionsResponseEntryList = Array<unknown>;
export interface ListGeofenceResponseEntry {
}
export type ListGeofenceResponseEntryList = Array<unknown>;
export interface ListGeofencesRequest {
}
export interface ListGeofencesResponse {
}
export interface ListKeysRequest {
}
export interface ListKeysResponse {
}
export interface ListKeysResponseEntry {
}
export type ListKeysResponseEntryList = Array<unknown>;
export interface ListMapsRequest {
}
export interface ListMapsResponse {
}
export interface ListMapsResponseEntry {
}
export type ListMapsResponseEntryList = Array<unknown>;
export interface ListPlaceIndexesRequest {
}
export interface ListPlaceIndexesResponse {
}
export interface ListPlaceIndexesResponseEntry {
}
export type ListPlaceIndexesResponseEntryList = Array<unknown>;
export interface ListRouteCalculatorsRequest {
}
export interface ListRouteCalculatorsResponse {
}
export interface ListRouteCalculatorsResponseEntry {
}
export type ListRouteCalculatorsResponseEntryList = Array<unknown>;
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListTrackerConsumersRequest {
}
export interface ListTrackerConsumersResponse {
}
export interface ListTrackersRequest {
}
export interface ListTrackersResponse {
}
export interface ListTrackersResponseEntry {
}
export type ListTrackersResponseEntryList = Array<unknown>;
export interface LteCellDetails {
}
export type LteCellDetailsList = Array<unknown>;
export interface LteLocalId {
}
export interface LteNetworkMeasurements {
}
export type LteNetworkMeasurementsList = Array<unknown>;
export interface MapConfiguration {
}
export interface MapConfigurationUpdate {
}
export type MapStyle = string;

export type NearestDistance = number;

export type OptimizationMode = string;

export type Pci = number;

export interface Place {
}
export type PlaceCategory = string;

export type PlaceCategoryList = Array<unknown>;
export interface PlaceGeometry {
}
export type PlaceId = string;

export type PlaceIndexSearchResultLimit = number;

export type PlaceSupplementalCategory = string;

export type PlaceSupplementalCategoryList = Array<unknown>;
export type Position = Array<unknown>;
export interface PositionalAccuracy {
}
export type PositionFiltering = string;

export type PositionList = Array<unknown>;
export type PositionPropertyMap = Record<string, unknown>;
export type PricingPlan = string;

export type PropertyMap = Record<string, unknown>;
export interface PutGeofenceRequest {
}
export interface PutGeofenceResponse {
}
export type RefererPattern = string;

export type RefererPatternList = Array<unknown>;
export type ResourceDescription = string;

export type ResourceName = string;

export interface ResourceNotFoundException {
}
export type RouteMatrix = Array<unknown>;
export interface RouteMatrixEntry {
}
export interface RouteMatrixEntryError {
}
export type RouteMatrixErrorCode = string;

export type RouteMatrixRow = Array<unknown>;
export type Rsrp = number;

export type Rsrq = number;

export interface SearchForPositionResult {
}
export type SearchForPositionResultList = Array<unknown>;
export interface SearchForSuggestionsResult {
}
export type SearchForSuggestionsResultList = Array<unknown>;
export interface SearchForTextResult {
}
export type SearchForTextResultList = Array<unknown>;
export interface SearchPlaceIndexForPositionRequest {
}
export interface SearchPlaceIndexForPositionResponse {
}
export interface SearchPlaceIndexForPositionSummary {
}
export interface SearchPlaceIndexForSuggestionsRequest {
}
export interface SearchPlaceIndexForSuggestionsResponse {
}
export interface SearchPlaceIndexForSuggestionsSummary {
}
export interface SearchPlaceIndexForTextRequest {
}
export interface SearchPlaceIndexForTextResponse {
}
export interface SearchPlaceIndexForTextSummary {
}
export type SensitiveString = string;

export interface ServiceQuotaExceededException {
}
export type SpeedUnit = string;

export type Status = string;

export interface Step {
}
export type StepList = Array<unknown>;
export type TagKey = string;

export type TagKeys = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface ThrottlingException {
}
export type Timestamp = Date | string;

export interface TimeZone {
}
export type Token = string;

export interface TrackingFilterGeometry {
}
export type TravelMode = string;

export interface TruckDimensions {
}
export interface TruckWeight {
}
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateGeofenceCollectionRequest {
}
export interface UpdateGeofenceCollectionResponse {
}
export interface UpdateKeyRequest {
}
export interface UpdateKeyResponse {
}
export interface UpdateMapRequest {
}
export interface UpdateMapResponse {
}
export interface UpdatePlaceIndexRequest {
}
export interface UpdatePlaceIndexResponse {
}
export interface UpdateRouteCalculatorRequest {
}
export interface UpdateRouteCalculatorResponse {
}
export interface UpdateTrackerRequest {
}
export interface UpdateTrackerResponse {
}
export type Uuid = string;

export interface ValidationException {
}
export interface ValidationExceptionField {
}
export type ValidationExceptionFieldList = Array<unknown>;
export type ValidationExceptionReason = string;

export type VehicleWeightUnit = string;

export interface VerifyDevicePositionRequest {
}
export interface VerifyDevicePositionResponse {
}
export type WaypointPositionList = Array<unknown>;
export interface WiFiAccessPoint {
}
export type WiFiAccessPointList = Array<unknown>;
export declare namespace AssociateTrackerConsumer {
  export type Input = AssociateTrackerConsumerRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGeofenceCollections {
  export type Input = ListGeofenceCollectionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGeofences {
  export type Input = ListGeofencesRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMaps {
  export type Input = ListMapsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPlaceIndexes {
  export type Input = ListPlaceIndexesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRouteCalculators {
  export type Input = ListRouteCalculatorsRequest;
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

export declare namespace ListTrackerConsumers {
  export type Input = ListTrackerConsumersRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutGeofence {
  export type Input = PutGeofenceRequest;
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

export declare namespace SearchPlaceIndexForPosition {
  export type Input = SearchPlaceIndexForPositionRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace UpdateGeofenceCollection {
  export type Input = UpdateGeofenceCollectionRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

