import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface OutpostsOlafService {
  cancelCapacityTask(
    input: CancelCapacityTaskInput,
  ): Effect.Effect<
    CancelCapacityTaskOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  cancelOrder(
    input: CancelOrderInput,
  ): Effect.Effect<
    CancelOrderOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createOrder(
    input: CreateOrderInput,
  ): Effect.Effect<
    CreateOrderOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createOutpost(
    input: CreateOutpostInput,
  ): Effect.Effect<
    CreateOutpostOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createSite(
    input: CreateSiteInput,
  ): Effect.Effect<
    CreateSiteOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteOutpost(
    input: DeleteOutpostInput,
  ): Effect.Effect<
    DeleteOutpostOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteSite(
    input: DeleteSiteInput,
  ): Effect.Effect<
    DeleteSiteOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCapacityTask(
    input: GetCapacityTaskInput,
  ): Effect.Effect<
    GetCapacityTaskOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getCatalogItem(
    input: GetCatalogItemInput,
  ): Effect.Effect<
    GetCatalogItemOutput,
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getConnection(
    input: GetConnectionRequest,
  ): Effect.Effect<
    GetConnectionResponse,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getOrder(
    input: GetOrderInput,
  ): Effect.Effect<
    GetOrderOutput,
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getOutpost(
    input: GetOutpostInput,
  ): Effect.Effect<
    GetOutpostOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getOutpostInstanceTypes(
    input: GetOutpostInstanceTypesInput,
  ): Effect.Effect<
    GetOutpostInstanceTypesOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getOutpostSupportedInstanceTypes(
    input: GetOutpostSupportedInstanceTypesInput,
  ): Effect.Effect<
    GetOutpostSupportedInstanceTypesOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getSite(
    input: GetSiteInput,
  ): Effect.Effect<
    GetSiteOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getSiteAddress(
    input: GetSiteAddressInput,
  ): Effect.Effect<
    GetSiteAddressOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listAssetInstances(
    input: ListAssetInstancesInput,
  ): Effect.Effect<
    ListAssetInstancesOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listAssets(
    input: ListAssetsInput,
  ): Effect.Effect<
    ListAssetsOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listBlockingInstancesForCapacityTask(
    input: ListBlockingInstancesForCapacityTaskInput,
  ): Effect.Effect<
    ListBlockingInstancesForCapacityTaskOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listCapacityTasks(
    input: ListCapacityTasksInput,
  ): Effect.Effect<
    ListCapacityTasksOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listCatalogItems(
    input: ListCatalogItemsInput,
  ): Effect.Effect<
    ListCatalogItemsOutput,
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listOrders(
    input: ListOrdersInput,
  ): Effect.Effect<
    ListOrdersOutput,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listOutposts(
    input: ListOutpostsInput,
  ): Effect.Effect<
    ListOutpostsOutput,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listSites(
    input: ListSitesInput,
  ): Effect.Effect<
    ListSitesOutput,
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startCapacityTask(
    input: StartCapacityTaskInput,
  ): Effect.Effect<
    StartCapacityTaskOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startConnection(
    input: StartConnectionRequest,
  ): Effect.Effect<
    StartConnectionResponse,
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateOutpost(
    input: UpdateOutpostInput,
  ): Effect.Effect<
    UpdateOutpostOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateSite(
    input: UpdateSiteInput,
  ): Effect.Effect<
    UpdateSiteOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateSiteAddress(
    input: UpdateSiteAddressInput,
  ): Effect.Effect<
    UpdateSiteAddressOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateSiteRackPhysicalProperties(
    input: UpdateSiteRackPhysicalPropertiesInput,
  ): Effect.Effect<
    UpdateSiteRackPhysicalPropertiesOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type Outposts = OutpostsOlafService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export type AccountIdList = Array<string>;
export interface Address {
  ContactName: string;
  ContactPhoneNumber: string;
  AddressLine1: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City: string;
  StateOrRegion: string;
  DistrictOrCounty?: string;
  PostalCode: string;
  CountryCode: string;
  Municipality?: string;
}
export type AddressLine1 = string;

export type AddressLine2 = string;

export type AddressLine3 = string;

export type AddressType = "SHIPPING_ADDRESS" | "OPERATING_ADDRESS";
export type Arn = string;

export type AssetId = string;

export type AssetIdInput = string;

export type AssetIdList = Array<string>;
export interface AssetInfo {
  AssetId?: string;
  RackId?: string;
  AssetType?: AssetType;
  ComputeAttributes?: ComputeAttributes;
  AssetLocation?: AssetLocation;
}
export interface AssetInstance {
  InstanceId?: string;
  InstanceType?: string;
  AssetId?: string;
  AccountId?: string;
  AwsServiceName?: AWSServiceName;
}
export type AssetInstanceCapacityList = Array<AssetInstanceTypeCapacity>;
export type AssetInstanceList = Array<AssetInstance>;
export interface AssetInstanceTypeCapacity {
  InstanceType: string;
  Count: number;
}
export type AssetListDefinition = Array<AssetInfo>;
export interface AssetLocation {
  RackElevation?: number;
}
export type AssetState = "ACTIVE" | "RETIRING" | "ISOLATED";
export type AssetType = "COMPUTE";
export type AvailabilityZone = string;

export type AvailabilityZoneId = string;

export type AvailabilityZoneIdList = Array<string>;
export type AvailabilityZoneList = Array<string>;
export type AWSServiceName =
  | "AWS"
  | "EC2"
  | "ELASTICACHE"
  | "ELB"
  | "RDS"
  | "ROUTE53";
export type AWSServiceNameList = Array<AWSServiceName>;
export interface BlockingInstance {
  InstanceId?: string;
  AccountId?: string;
  AwsServiceName?: AWSServiceName;
}
export type BlockingInstancesList = Array<BlockingInstance>;
export interface CancelCapacityTaskInput {
  CapacityTaskId: string;
  OutpostIdentifier: string;
}
export interface CancelCapacityTaskOutput {}
export interface CancelOrderInput {
  OrderId: string;
}
export interface CancelOrderOutput {}
export interface CapacityTaskFailure {
  Reason: string;
  Type?: CapacityTaskFailureType;
}
export type CapacityTaskFailureType =
  | "UNSUPPORTED_CAPACITY_CONFIGURATION"
  | "UNEXPECTED_ASSET_STATE"
  | "BLOCKING_INSTANCES_NOT_EVACUATED"
  | "INTERNAL_SERVER_ERROR"
  | "RESOURCE_NOT_FOUND";
export type CapacityTaskId = string;

export type CapacityTaskList = Array<CapacityTaskSummary>;
export type CapacityTaskStatus =
  | "REQUESTED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED"
  | "WAITING_FOR_EVACUATION"
  | "CANCELLATION_IN_PROGRESS"
  | "CANCELLED";
export type CapacityTaskStatusList = Array<CapacityTaskStatus>;
export type CapacityTaskStatusReason = string;

export interface CapacityTaskSummary {
  CapacityTaskId?: string;
  OutpostId?: string;
  OrderId?: string;
  AssetId?: string;
  CapacityTaskStatus?: CapacityTaskStatus;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  LastModifiedDate?: Date | string;
}
export interface CatalogItem {
  CatalogItemId?: string;
  ItemStatus?: CatalogItemStatus;
  EC2Capacities?: Array<EC2Capacity>;
  PowerKva?: number;
  WeightLbs?: number;
  SupportedUplinkGbps?: Array<number>;
  SupportedStorage?: Array<SupportedStorageEnum>;
}
export type CatalogItemClass = "RACK" | "SERVER";
export type CatalogItemClassList = Array<CatalogItemClass>;
export type CatalogItemListDefinition = Array<CatalogItem>;
export type CatalogItemPowerKva = number;

export type CatalogItemStatus = "AVAILABLE" | "DISCONTINUED";
export type CatalogItemWeightLbs = number;

export type CIDR = string;

export type CIDRList = Array<string>;
export type City = string;

export type CityList = Array<string>;
export type ComputeAssetState = "ACTIVE" | "ISOLATED" | "RETIRING";
export interface ComputeAttributes {
  HostId?: string;
  State?: ComputeAssetState;
  InstanceFamilies?: Array<string>;
  InstanceTypeCapacities?: Array<AssetInstanceTypeCapacity>;
  MaxVcpus?: number;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly ResourceId?: string;
  readonly ResourceType?: ResourceType;
}> {}
export interface ConnectionDetails {
  ClientPublicKey?: string;
  ServerPublicKey?: string;
  ServerEndpoint?: string;
  ClientTunnelAddress?: string;
  ServerTunnelAddress?: string;
  AllowedIps?: Array<string>;
}
export type ConnectionId = string;

export type ContactName = string;

export type ContactPhoneNumber = string;

export type CountryCode = string;

export type CountryCodeList = Array<string>;
export interface CreateOrderInput {
  OutpostIdentifier: string;
  LineItems: Array<LineItemRequest>;
  PaymentOption: PaymentOption;
  PaymentTerm?: PaymentTerm;
}
export interface CreateOrderOutput {
  Order?: Order;
}
export interface CreateOutpostInput {
  Name: string;
  Description?: string;
  SiteId: string;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  Tags?: Record<string, string>;
  SupportedHardwareType?: SupportedHardwareType;
}
export interface CreateOutpostOutput {
  Outpost?: Outpost;
}
export interface CreateSiteInput {
  Name: string;
  Description?: string;
  Notes?: string;
  Tags?: Record<string, string>;
  OperatingAddress?: Address;
  ShippingAddress?: Address;
  RackPhysicalProperties?: RackPhysicalProperties;
}
export interface CreateSiteOutput {
  Site?: Site;
}
export interface DeleteOutpostInput {
  OutpostId: string;
}
export interface DeleteOutpostOutput {}
export interface DeleteSiteInput {
  SiteId: string;
}
export interface DeleteSiteOutput {}
export type DeviceSerialNumber = string;

export type DistrictOrCounty = string;

export type DryRun = boolean;

export interface EC2Capacity {
  Family?: string;
  MaxSize?: string;
  Quantity?: string;
}
export type EC2CapacityListDefinition = Array<EC2Capacity>;
export type EC2FamilyList = Array<string>;
export type ErrorMessage = string;

export type Family = string;

export type FiberOpticCableType = "SINGLE_MODE" | "MULTI_MODE";
export interface GetCapacityTaskInput {
  CapacityTaskId: string;
  OutpostIdentifier: string;
}
export interface GetCapacityTaskOutput {
  CapacityTaskId?: string;
  OutpostId?: string;
  OrderId?: string;
  AssetId?: string;
  RequestedInstancePools?: Array<InstanceTypeCapacity>;
  InstancesToExclude?: InstancesToExclude;
  DryRun?: boolean;
  CapacityTaskStatus?: CapacityTaskStatus;
  Failed?: CapacityTaskFailure;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  LastModifiedDate?: Date | string;
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances;
}
export interface GetCatalogItemInput {
  CatalogItemId: string;
}
export interface GetCatalogItemOutput {
  CatalogItem?: CatalogItem;
}
export interface GetConnectionRequest {
  ConnectionId: string;
}
export interface GetConnectionResponse {
  ConnectionId?: string;
  ConnectionDetails?: ConnectionDetails;
}
export interface GetOrderInput {
  OrderId: string;
}
export interface GetOrderOutput {
  Order?: Order;
}
export interface GetOutpostInput {
  OutpostId: string;
}
export interface GetOutpostInstanceTypesInput {
  OutpostId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetOutpostInstanceTypesOutput {
  InstanceTypes?: Array<InstanceTypeItem>;
  NextToken?: string;
  OutpostId?: string;
  OutpostArn?: string;
}
export interface GetOutpostOutput {
  Outpost?: Outpost;
}
export interface GetOutpostSupportedInstanceTypesInput {
  OutpostIdentifier: string;
  OrderId?: string;
  AssetId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetOutpostSupportedInstanceTypesOutput {
  InstanceTypes?: Array<InstanceTypeItem>;
  NextToken?: string;
}
export interface GetSiteAddressInput {
  SiteId: string;
  AddressType: AddressType;
}
export interface GetSiteAddressOutput {
  SiteId?: string;
  AddressType?: AddressType;
  Address?: Address;
}
export interface GetSiteInput {
  SiteId: string;
}
export interface GetSiteOutput {
  Site?: Site;
}
export type HostId = string;

export type HostIdList = Array<string>;
export type InstanceFamilies = Array<string>;
export type InstanceFamilyName = string;

export type InstanceId = string;

export type InstanceIdList = Array<string>;
export interface InstancesToExclude {
  Instances?: Array<string>;
  AccountIds?: Array<string>;
  Services?: Array<AWSServiceName>;
}
export type InstanceType = string;

export interface InstanceTypeCapacity {
  InstanceType: string;
  Count: number;
}
export type InstanceTypeCount = number;

export interface InstanceTypeItem {
  InstanceType?: string;
  VCPUs?: number;
}
export type InstanceTypeListDefinition = Array<InstanceTypeItem>;
export type InstanceTypeName = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type ISO8601Timestamp = Date | string;

export type LifeCycleStatus = string;

export type LifeCycleStatusList = Array<string>;
export interface LineItem {
  CatalogItemId?: string;
  LineItemId?: string;
  Quantity?: number;
  Status?: LineItemStatus;
  ShipmentInformation?: ShipmentInformation;
  AssetInformationList?: Array<LineItemAssetInformation>;
  PreviousLineItemId?: string;
  PreviousOrderId?: string;
}
export interface LineItemAssetInformation {
  AssetId?: string;
  MacAddressList?: Array<string>;
}
export type LineItemAssetInformationList = Array<LineItemAssetInformation>;
export type LineItemId = string;

export type LineItemListDefinition = Array<LineItem>;
export type LineItemQuantity = number;

export interface LineItemRequest {
  CatalogItemId?: string;
  Quantity?: number;
}
export type LineItemRequestListDefinition = Array<LineItemRequest>;
export type LineItemStatus =
  | "PREPARING"
  | "BUILDING"
  | "SHIPPED"
  | "DELIVERED"
  | "INSTALLING"
  | "INSTALLED"
  | "ERROR"
  | "CANCELLED"
  | "REPLACED";
export type LineItemStatusCounts = Record<LineItemStatus, number>;
export interface ListAssetInstancesInput {
  OutpostIdentifier: string;
  AssetIdFilter?: Array<string>;
  InstanceTypeFilter?: Array<string>;
  AccountIdFilter?: Array<string>;
  AwsServiceFilter?: Array<AWSServiceName>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAssetInstancesOutput {
  AssetInstances?: Array<AssetInstance>;
  NextToken?: string;
}
export interface ListAssetsInput {
  OutpostIdentifier: string;
  HostIdFilter?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
  StatusFilter?: Array<AssetState>;
}
export interface ListAssetsOutput {
  Assets?: Array<AssetInfo>;
  NextToken?: string;
}
export interface ListBlockingInstancesForCapacityTaskInput {
  OutpostIdentifier: string;
  CapacityTaskId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListBlockingInstancesForCapacityTaskOutput {
  BlockingInstances?: Array<BlockingInstance>;
  NextToken?: string;
}
export interface ListCapacityTasksInput {
  OutpostIdentifierFilter?: string;
  MaxResults?: number;
  NextToken?: string;
  CapacityTaskStatusFilter?: Array<CapacityTaskStatus>;
}
export interface ListCapacityTasksOutput {
  CapacityTasks?: Array<CapacityTaskSummary>;
  NextToken?: string;
}
export interface ListCatalogItemsInput {
  NextToken?: string;
  MaxResults?: number;
  ItemClassFilter?: Array<CatalogItemClass>;
  SupportedStorageFilter?: Array<SupportedStorageEnum>;
  EC2FamilyFilter?: Array<string>;
}
export interface ListCatalogItemsOutput {
  CatalogItems?: Array<CatalogItem>;
  NextToken?: string;
}
export interface ListOrdersInput {
  OutpostIdentifierFilter?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOrdersOutput {
  Orders?: Array<OrderSummary>;
  NextToken?: string;
}
export interface ListOutpostsInput {
  NextToken?: string;
  MaxResults?: number;
  LifeCycleStatusFilter?: Array<string>;
  AvailabilityZoneFilter?: Array<string>;
  AvailabilityZoneIdFilter?: Array<string>;
}
export interface ListOutpostsOutput {
  Outposts?: Array<Outpost>;
  NextToken?: string;
}
export interface ListSitesInput {
  NextToken?: string;
  MaxResults?: number;
  OperatingAddressCountryCodeFilter?: Array<string>;
  OperatingAddressStateOrRegionFilter?: Array<string>;
  OperatingAddressCityFilter?: Array<string>;
}
export interface ListSitesOutput {
  Sites?: Array<Site>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MacAddress = string;

export type MacAddressList = Array<string>;
export type MaximumSupportedWeightLbs =
  | "NO_LIMIT"
  | "MAX_1400_LBS"
  | "MAX_1600_LBS"
  | "MAX_1800_LBS"
  | "MAX_2000_LBS";
export type MaxResults1000 = number;

export type MaxSize = string;

export type Municipality = string;

export type NetworkInterfaceDeviceIndex = number;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type OpticalStandard =
  | "OPTIC_10GBASE_SR"
  | "OPTIC_10GBASE_IR"
  | "OPTIC_10GBASE_LR"
  | "OPTIC_40GBASE_SR"
  | "OPTIC_40GBASE_ESR"
  | "OPTIC_40GBASE_IR4_LR4L"
  | "OPTIC_40GBASE_LR4"
  | "OPTIC_100GBASE_SR4"
  | "OPTIC_100GBASE_CWDM4"
  | "OPTIC_100GBASE_LR4"
  | "OPTIC_100G_PSM4_MSA"
  | "OPTIC_1000BASE_LX"
  | "OPTIC_1000BASE_SX";
export interface Order {
  OutpostId?: string;
  OrderId?: string;
  Status?: OrderStatus;
  LineItems?: Array<LineItem>;
  PaymentOption?: PaymentOption;
  OrderSubmissionDate?: Date | string;
  OrderFulfilledDate?: Date | string;
  PaymentTerm?: PaymentTerm;
  OrderType?: OrderType;
}
export type OrderId = string;

export type OrderStatus =
  | "RECEIVED"
  | "PENDING"
  | "PROCESSING"
  | "INSTALLING"
  | "FULFILLED"
  | "CANCELLED"
  | "PREPARING"
  | "IN_PROGRESS"
  | "DELIVERED"
  | "COMPLETED"
  | "ERROR";
export interface OrderSummary {
  OutpostId?: string;
  OrderId?: string;
  OrderType?: OrderType;
  Status?: OrderStatus;
  LineItemCountsByStatus?: Record<LineItemStatus, number>;
  OrderSubmissionDate?: Date | string;
  OrderFulfilledDate?: Date | string;
}
export type OrderSummaryListDefinition = Array<OrderSummary>;
export type OrderType = "OUTPOST" | "REPLACEMENT";
export interface Outpost {
  OutpostId?: string;
  OwnerId?: string;
  OutpostArn?: string;
  SiteId?: string;
  Name?: string;
  Description?: string;
  LifeCycleStatus?: string;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  Tags?: Record<string, string>;
  SiteArn?: string;
  SupportedHardwareType?: SupportedHardwareType;
}
export type OutpostArn = string;

export type OutpostDescription = string;

export type OutpostId = string;

export type OutpostIdentifier = string;

export type OutpostIdOnly = string;

export type OutpostInstanceType = string;

export type OutpostInstanceTypeList = Array<string>;
export type outpostListDefinition = Array<Outpost>;
export type OutpostName = string;

export type OwnerId = string;

export type PaymentOption = "ALL_UPFRONT" | "NO_UPFRONT" | "PARTIAL_UPFRONT";
export type PaymentTerm = "THREE_YEARS" | "ONE_YEAR" | "FIVE_YEARS";
export type PostalCode = string;

export type PowerConnector =
  | "L6_30P"
  | "IEC309"
  | "AH530P7W"
  | "AH532P6W"
  | "CS8365C";
export type PowerDrawKva =
  | "POWER_5_KVA"
  | "POWER_10_KVA"
  | "POWER_15_KVA"
  | "POWER_30_KVA";
export type PowerFeedDrop = "ABOVE_RACK" | "BELOW_RACK";
export type PowerPhase = "SINGLE_PHASE" | "THREE_PHASE";
export type Quantity = string;

export type RackElevation = number;

export type RackId = string;

export interface RackPhysicalProperties {
  PowerDrawKva?: PowerDrawKva;
  PowerPhase?: PowerPhase;
  PowerConnector?: PowerConnector;
  PowerFeedDrop?: PowerFeedDrop;
  UplinkGbps?: UplinkGbps;
  UplinkCount?: UplinkCount;
  FiberOpticCableType?: FiberOpticCableType;
  OpticalStandard?: OpticalStandard;
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs;
}
export type RequestedInstancePools = Array<InstanceTypeCapacity>;
export type ResourceType = "OUTPOST" | "ORDER";
export type ServerEndpoint = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type ShipmentCarrier = "DHL" | "DBS" | "FEDEX" | "UPS" | "EXPEDITORS";
export interface ShipmentInformation {
  ShipmentTrackingNumber?: string;
  ShipmentCarrier?: ShipmentCarrier;
}
export interface Site {
  SiteId?: string;
  AccountId?: string;
  Name?: string;
  Description?: string;
  Tags?: Record<string, string>;
  SiteArn?: string;
  Notes?: string;
  OperatingAddressCountryCode?: string;
  OperatingAddressStateOrRegion?: string;
  OperatingAddressCity?: string;
  RackPhysicalProperties?: RackPhysicalProperties;
}
export type SiteArn = string;

export type SiteDescription = string;

export type SiteId = string;

export type siteListDefinition = Array<Site>;
export type SiteName = string;

export type SiteNotes = string;

export type SkuCode = string;

export interface StartCapacityTaskInput {
  OutpostIdentifier: string;
  OrderId?: string;
  AssetId?: string;
  InstancePools: Array<InstanceTypeCapacity>;
  InstancesToExclude?: InstancesToExclude;
  DryRun?: boolean;
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances;
}
export interface StartCapacityTaskOutput {
  CapacityTaskId?: string;
  OutpostId?: string;
  OrderId?: string;
  AssetId?: string;
  RequestedInstancePools?: Array<InstanceTypeCapacity>;
  InstancesToExclude?: InstancesToExclude;
  DryRun?: boolean;
  CapacityTaskStatus?: CapacityTaskStatus;
  Failed?: CapacityTaskFailure;
  CreationDate?: Date | string;
  CompletionDate?: Date | string;
  LastModifiedDate?: Date | string;
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances;
}
export interface StartConnectionRequest {
  DeviceSerialNumber?: string;
  AssetId: string;
  ClientPublicKey: string;
  NetworkInterfaceDeviceIndex: number;
}
export interface StartConnectionResponse {
  ConnectionId?: string;
  UnderlayIpAddress?: string;
}
export type StateOrRegion = string;

export type StateOrRegionList = Array<string>;
export type StatusList = Array<AssetState>;
export type OutpostsString = string;

export type SupportedHardwareType = "RACK" | "SERVER";
export type SupportedStorageEnum = "EBS" | "S3";
export type SupportedStorageList = Array<SupportedStorageEnum>;
export type SupportedUplinkGbps = number;

export type SupportedUplinkGbpsListDefinition = Array<number>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TaskActionOnBlockingInstances = "WAIT_FOR_EVACUATION" | "FAIL_TASK";
export type Token = string;

export type TrackingId = string;

export type UnderlayIpAddress = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateOutpostInput {
  OutpostId: string;
  Name?: string;
  Description?: string;
  SupportedHardwareType?: SupportedHardwareType;
}
export interface UpdateOutpostOutput {
  Outpost?: Outpost;
}
export interface UpdateSiteAddressInput {
  SiteId: string;
  AddressType: AddressType;
  Address: Address;
}
export interface UpdateSiteAddressOutput {
  AddressType?: AddressType;
  Address?: Address;
}
export interface UpdateSiteInput {
  SiteId: string;
  Name?: string;
  Description?: string;
  Notes?: string;
}
export interface UpdateSiteOutput {
  Site?: Site;
}
export interface UpdateSiteRackPhysicalPropertiesInput {
  SiteId: string;
  PowerDrawKva?: PowerDrawKva;
  PowerPhase?: PowerPhase;
  PowerConnector?: PowerConnector;
  PowerFeedDrop?: PowerFeedDrop;
  UplinkGbps?: UplinkGbps;
  UplinkCount?: UplinkCount;
  FiberOpticCableType?: FiberOpticCableType;
  OpticalStandard?: OpticalStandard;
  MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs;
}
export interface UpdateSiteRackPhysicalPropertiesOutput {
  Site?: Site;
}
export type UplinkCount =
  | "UPLINK_COUNT_1"
  | "UPLINK_COUNT_2"
  | "UPLINK_COUNT_3"
  | "UPLINK_COUNT_4"
  | "UPLINK_COUNT_5"
  | "UPLINK_COUNT_6"
  | "UPLINK_COUNT_7"
  | "UPLINK_COUNT_8"
  | "UPLINK_COUNT_12"
  | "UPLINK_COUNT_16";
export type UplinkGbps =
  | "UPLINK_1G"
  | "UPLINK_10G"
  | "UPLINK_40G"
  | "UPLINK_100G";
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type VCPUCount = number;

export type WireGuardPublicKey = string;

export declare namespace CancelCapacityTask {
  export type Input = CancelCapacityTaskInput;
  export type Output = CancelCapacityTaskOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelOrder {
  export type Input = CancelOrderInput;
  export type Output = CancelOrderOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOrder {
  export type Input = CreateOrderInput;
  export type Output = CreateOrderOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOutpost {
  export type Input = CreateOutpostInput;
  export type Output = CreateOutpostOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSite {
  export type Input = CreateSiteInput;
  export type Output = CreateSiteOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOutpost {
  export type Input = DeleteOutpostInput;
  export type Output = DeleteOutpostOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSite {
  export type Input = DeleteSiteInput;
  export type Output = DeleteSiteOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCapacityTask {
  export type Input = GetCapacityTaskInput;
  export type Output = GetCapacityTaskOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCatalogItem {
  export type Input = GetCatalogItemInput;
  export type Output = GetCatalogItemOutput;
  export type Error =
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnection {
  export type Input = GetConnectionRequest;
  export type Output = GetConnectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOrder {
  export type Input = GetOrderInput;
  export type Output = GetOrderOutput;
  export type Error =
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOutpost {
  export type Input = GetOutpostInput;
  export type Output = GetOutpostOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOutpostInstanceTypes {
  export type Input = GetOutpostInstanceTypesInput;
  export type Output = GetOutpostInstanceTypesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOutpostSupportedInstanceTypes {
  export type Input = GetOutpostSupportedInstanceTypesInput;
  export type Output = GetOutpostSupportedInstanceTypesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSite {
  export type Input = GetSiteInput;
  export type Output = GetSiteOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSiteAddress {
  export type Input = GetSiteAddressInput;
  export type Output = GetSiteAddressOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssetInstances {
  export type Input = ListAssetInstancesInput;
  export type Output = ListAssetInstancesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssets {
  export type Input = ListAssetsInput;
  export type Output = ListAssetsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBlockingInstancesForCapacityTask {
  export type Input = ListBlockingInstancesForCapacityTaskInput;
  export type Output = ListBlockingInstancesForCapacityTaskOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCapacityTasks {
  export type Input = ListCapacityTasksInput;
  export type Output = ListCapacityTasksOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCatalogItems {
  export type Input = ListCatalogItemsInput;
  export type Output = ListCatalogItemsOutput;
  export type Error =
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOrders {
  export type Input = ListOrdersInput;
  export type Output = ListOrdersOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOutposts {
  export type Input = ListOutpostsInput;
  export type Output = ListOutpostsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSites {
  export type Input = ListSitesInput;
  export type Output = ListSitesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartCapacityTask {
  export type Input = StartCapacityTaskInput;
  export type Output = StartCapacityTaskOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartConnection {
  export type Input = StartConnectionRequest;
  export type Output = StartConnectionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOutpost {
  export type Input = UpdateOutpostInput;
  export type Output = UpdateOutpostOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSite {
  export type Input = UpdateSiteInput;
  export type Output = UpdateSiteOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSiteAddress {
  export type Input = UpdateSiteAddressInput;
  export type Output = UpdateSiteAddressOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSiteRackPhysicalProperties {
  export type Input = UpdateSiteRackPhysicalPropertiesInput;
  export type Output = UpdateSiteRackPhysicalPropertiesOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | NotFoundException
    | ValidationException
    | CommonAwsError;
}
