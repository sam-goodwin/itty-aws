import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Outposts",
  serviceShapeName: "OutpostsOlafService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "outposts" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-12-03");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://outposts-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://outposts.${Region}.amazonaws.com`);
            }
            return e(`https://outposts-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://outposts.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://outposts.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ResourceType" }),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CapacityTaskId = string;
export type OutpostIdentifier = string;
export interface CancelCapacityTaskInput {
  CapacityTaskId: string;
  OutpostIdentifier: string;
}
export interface CancelCapacityTaskOutput {}
export type OrderId = string;
export interface CancelOrderInput {
  OrderId: string;
}
export interface CancelOrderOutput {}
export type QuoteIdentifier = string;
export type QuoteOptionIdentifier = string;
export type SkuCode = string;
export type LineItemQuantity = number;
export interface LineItemRequest {
  CatalogItemId?: string;
  Quantity?: number;
}
export type LineItemRequestListDefinition = LineItemRequest[];
export type PaymentOption = "ALL_UPFRONT" | "NO_UPFRONT" | "PARTIAL_UPFRONT" | (string & {});
export type PaymentTerm = "THREE_YEARS" | "ONE_YEAR" | "FIVE_YEARS" | (string & {});
export interface CreateOrderInput {
  OutpostIdentifier: string;
  QuoteIdentifier?: string;
  QuoteOptionIdentifier?: string;
  LineItems?: LineItemRequest[];
  PaymentOption: PaymentOption;
  PaymentTerm?: PaymentTerm;
}
export type OutpostIdOnly = string;
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
  | "ERROR"
  | (string & {});
export type LineItemId = string;
export type LineItemStatus =
  | "PREPARING"
  | "BUILDING"
  | "SHIPPED"
  | "DELIVERED"
  | "INSTALLING"
  | "INSTALLED"
  | "ERROR"
  | "CANCELLED"
  | "REPLACED"
  | (string & {});
export type TrackingId = string;
export type ShipmentCarrier = "DHL" | "DBS" | "FEDEX" | "UPS" | "EXPEDITORS" | (string & {});
export interface ShipmentInformation {
  ShipmentTrackingNumber?: string;
  ShipmentCarrier?: ShipmentCarrier;
}
export type AssetId = string;
export type MacAddress = string;
export type MacAddressList = string[];
export interface LineItemAssetInformation {
  AssetId?: string;
  MacAddressList?: string[];
}
export type LineItemAssetInformationList = LineItemAssetInformation[];
export interface LineItem {
  CatalogItemId?: string;
  LineItemId?: string;
  Quantity?: number;
  Status?: LineItemStatus;
  ShipmentInformation?: ShipmentInformation;
  AssetInformationList?: LineItemAssetInformation[];
  PreviousLineItemId?: string;
  PreviousOrderId?: string;
}
export type LineItemListDefinition = LineItem[];
export type ISO8601Timestamp = Date;
export type OrderType = "OUTPOST" | "REPLACEMENT" | (string & {});
export interface Order {
  OutpostId?: string;
  QuoteIdentifier?: string;
  QuoteOptionIdentifier?: string;
  OrderId?: string;
  Status?: OrderStatus;
  LineItems?: LineItem[];
  PaymentOption?: PaymentOption;
  OrderSubmissionDate?: Date;
  OrderFulfilledDate?: Date;
  PaymentTerm?: PaymentTerm;
  OrderType?: OrderType;
}
export interface CreateOrderOutput {
  Order?: Order;
}
export type OutpostName = string;
export type OutpostDescription = string;
export type SiteId = string;
export type AvailabilityZone = string;
export type AvailabilityZoneId = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type SupportedHardwareType = "RACK" | "SERVER" | (string & {});
export interface CreateOutpostInput {
  Name: string;
  Description?: string;
  SiteId: string;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  Tags?: { [key: string]: string | undefined };
  SupportedHardwareType?: SupportedHardwareType;
}
export type OutpostId = string;
export type OwnerId = string;
export type OutpostArn = string;
export type LifeCycleStatus = string;
export type SiteArn = string;
export type OutpostGeneration = "GENERATION_2" | "GENERATION_1" | (string & {});
export type RackScalingType = "SINGLE_RACK" | "MULTI_RACK" | (string & {});
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
  Tags?: { [key: string]: string | undefined };
  SiteArn?: string;
  SupportedHardwareType?: SupportedHardwareType;
  Generation?: OutpostGeneration;
  RackScalingType?: RackScalingType;
}
export interface CreateOutpostOutput {
  Outpost?: Outpost;
}
export type VpcId = string;
export type SubnetId = string;
export type SubnetIds = string[];
export type VpcEndpointId = string;
export interface VpcInformation {
  VpcId?: string;
  SubnetIds?: string[];
  VpcEndpointId?: string;
}
export type VpcInformationList = VpcInformation[];
export interface CreatePrivateConnectivityConfigInput {
  OutpostId: string;
  VpcInformationList: VpcInformation[];
}
export type RoleArn = string;
export type PrivateConnectivityStatus = "ENABLED" | "DISABLED" | (string & {});
export interface PrivateConnectivityConfig {
  RoleArn?: string;
  PrivateConnectivityStatus?: PrivateConnectivityStatus;
  VpcInformationList?: VpcInformation[];
  ProvisioningRoleArn?: string;
}
export interface CreatePrivateConnectivityConfigOutput {
  PrivateConnectivityConfig?: PrivateConnectivityConfig;
  OutpostId?: string;
}
export type CountryCode = string;
export type QuoteCapacityType = "EC2" | "EBS" | "S3" | (string & {});
export interface QuoteCapacity {
  QuoteCapacityType?: QuoteCapacityType;
  Unit?: string;
  Quantity?: number;
}
export type QuoteCapacityList = QuoteCapacity[];
export type QuoteConstraintType =
  | "RACK_MAXIMUM"
  | "RACK_MAX_POWER_KVA"
  | "RACK_MAX_WEIGHT_LBS"
  | "RACK_SPACE_CONSTRAINED"
  | (string & {});
export type ConstraintValue = string;
export interface QuoteConstraint {
  QuoteConstraintType?: QuoteConstraintType;
  Value?: string;
}
export type QuoteConstraintList = QuoteConstraint[];
export type PaymentOptionList = PaymentOption[];
export type PaymentTermList = PaymentTerm[];
export type QuoteDescription = string | redacted.Redacted<string>;
export interface CreateQuoteInput {
  OutpostIdentifier?: string;
  CountryCode: string;
  RequestedCapacities: QuoteCapacity[];
  RequestedConstraints?: QuoteConstraint[];
  RequestedPaymentOptions?: PaymentOption[];
  RequestedPaymentTerms?: PaymentTerm[];
  Description?: string | redacted.Redacted<string>;
}
export type QuoteId = string;
export type AccountId = string;
export type QuoteStatus = "CREATED" | "ORDER_SUBMITTED" | "EXPIRED" | (string & {});
export type StatusMessage = string;
export interface CapacitySummary {
  ExistingCapacities?: QuoteCapacity[];
  FinalCapacities?: QuoteCapacity[];
  CapacityChange?: QuoteCapacity[];
}
export type QuoteSpecificationType =
  | "UPDATED_RACK"
  | "NEW_RACK"
  | "EXISTING_RACK"
  | "SERVER"
  | (string & {});
export type RackId = string;
export type QuoteRackUseType = "NETWORKING" | "COMPUTE" | (string & {});
export type RackUnitHeight = "HEIGHT_42U" | "HEIGHT_2U" | "HEIGHT_1U" | (string & {});
export type Family = string;
export type MaxSize = string;
export type Quantity = string;
export interface EC2Capacity {
  Family?: string;
  MaxSize?: string;
  Quantity?: string;
}
export type EC2CapacityListDefinition = EC2Capacity[];
export interface RackSpecificationDetails {
  RackId?: string;
  RackUse?: QuoteRackUseType;
  RackPowerDrawKva?: number;
  RackWeightLbs?: number;
  RackHeightInches?: number;
  RackWidthInches?: number;
  RackDepthInches?: number;
  RackUnitHeight?: RackUnitHeight;
  EC2Capacities?: EC2Capacity[];
}
export interface ServerSpecificationDetails {
  ServerPowerDrawKva?: number;
  ServerWeightLbs?: number;
  ServerHeightInches?: number;
  ServerWidthInches?: number;
  ServerDepthInches?: number;
  RackUnitHeight?: RackUnitHeight;
  EC2Capacities?: EC2Capacity[];
}
export interface QuoteSpecification {
  QuoteSpecificationType?: QuoteSpecificationType;
  ExistingRackSpecificationDetails?: RackSpecificationDetails;
  FinalRackSpecificationDetails?: RackSpecificationDetails;
  ServerSpecificationDetails?: ServerSpecificationDetails;
}
export type QuoteSpecificationList = QuoteSpecification[];
export type QuotePricingType = "SUBSCRIPTION" | (string & {});
export type CurrencyCode = "USD" | (string & {});
export interface SubscriptionPricingDetails {
  PaymentOption?: PaymentOption;
  PaymentTerm?: PaymentTerm;
  UpfrontPrice?: number;
  MonthlyRecurringPrice?: number;
  Currency?: CurrencyCode;
}
export interface PricingOption {
  PricingType?: QuotePricingType;
  SubscriptionPricingDetails?: SubscriptionPricingDetails;
}
export type PricingOptionList = PricingOption[];
export interface QuoteOption {
  QuoteOptionIdentifier?: string;
  Capacities?: QuoteCapacity[];
  CapacitySummary?: CapacitySummary;
  Specifications?: QuoteSpecification[];
  PricingOptions?: PricingOption[];
}
export type QuoteOptionList = QuoteOption[];
export type OrderingRequirementType =
  | "OUTPOST_ACTIVE_CHECK_ERROR"
  | "MAXIMUM_ALLOWED_ORDERS_CHECK_ERROR"
  | "VALID_ZIP_CODE_CHECK_ERROR"
  | "RACK_PHYSICAL_PROPERTIES_CHECK_ERROR"
  | "OPERATING_ADDRESS_EXISTENCE_CHECK_ERROR"
  | "SHIPPING_ADDRESS_EXISTENCE_CHECK_ERROR"
  | "COUNTRY_CODE_MISMATCH_CHECK_ERROR"
  | "OUTPOST_GENERATION_MISMATCH_ERROR"
  | "UNSUPPORTED"
  | "OUTPOST_ID_MISSING_ON_QUOTE_ERROR"
  | "ENTERPRISE_SUPPORT_ERROR"
  | "SHIPPING_ADDRESS_MISSING_CONTACT_NAME_ERROR"
  | "SHIPPING_ADDRESS_MISSING_CONTACT_NUMBER_ERROR"
  | "SHIPPING_ADDRESS_MISSING_CONTACT_INFO_ERROR"
  | "OUTPOST_STATE_CHANGED_ERROR"
  | "OUTPOST_NOT_FOUND_ERROR"
  | "OUTPOST_RENEWAL_REQUIRED_ERROR"
  | (string & {});
export type OrderingRequirementStatus = "PASS" | "FAIL" | "EXEMPT" | (string & {});
export interface OrderingRequirement {
  StatusMessage?: string;
  OrderingRequirementType?: OrderingRequirementType;
  Status?: OrderingRequirementStatus;
}
export type OrderingRequirementList = OrderingRequirement[];
export type OrderIdentifier = string;
export interface Quote {
  QuoteId?: string;
  AccountId?: string;
  QuoteStatus?: QuoteStatus;
  StatusMessage?: string;
  OutpostArn?: string;
  CountryCode?: string;
  RequestedCapacities?: QuoteCapacity[];
  RequestedConstraints?: QuoteConstraint[];
  RequestedPaymentOptions?: PaymentOption[];
  RequestedPaymentTerms?: PaymentTerm[];
  QuoteOptions?: QuoteOption[];
  OrderingRequirements?: OrderingRequirement[];
  SubmittedOrderId?: string;
  CreatedDate?: Date;
  ExpirationDate?: Date;
  Description?: string | redacted.Redacted<string>;
}
export interface CreateQuoteOutput {
  Quote?: Quote;
}
export type AutoFillIdempotencyToken = string;
export interface CreateRenewalInput {
  PaymentOption: PaymentOption;
  PaymentTerm: PaymentTerm;
  OutpostIdentifier: string;
  ClientToken?: string;
}
export interface CreateRenewalOutput {
  PaymentOption?: PaymentOption;
  PaymentTerm?: PaymentTerm;
  OutpostId?: string;
  UpfrontPrice?: number;
  MonthlyRecurringPrice?: number;
  Currency?: CurrencyCode;
}
export type SiteName = string;
export type SiteDescription = string;
export type SiteNotes = string;
export type ContactName = string;
export type ContactPhoneNumber = string;
export type AddressLine1 = string;
export type AddressLine2 = string;
export type AddressLine3 = string;
export type City = string;
export type StateOrRegion = string;
export type DistrictOrCounty = string;
export type PostalCode = string;
export type Municipality = string;
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
export type PowerDrawKva =
  | "POWER_5_KVA"
  | "POWER_10_KVA"
  | "POWER_15_KVA"
  | "POWER_30_KVA"
  | (string & {});
export type PowerPhase = "SINGLE_PHASE" | "THREE_PHASE" | (string & {});
export type PowerConnector =
  | "L6_30P"
  | "IEC309"
  | "AH530P7W"
  | "AH532P6W"
  | "CS8365C"
  | (string & {});
export type PowerFeedDrop = "ABOVE_RACK" | "BELOW_RACK" | (string & {});
export type UplinkGbps = "UPLINK_1G" | "UPLINK_10G" | "UPLINK_40G" | "UPLINK_100G" | (string & {});
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
  | "UPLINK_COUNT_16"
  | (string & {});
export type FiberOpticCableType = "SINGLE_MODE" | "MULTI_MODE" | (string & {});
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
  | "OPTIC_1000BASE_SX"
  | (string & {});
export type MaximumSupportedWeightLbs =
  | "NO_LIMIT"
  | "MAX_1400_LBS"
  | "MAX_1600_LBS"
  | "MAX_1800_LBS"
  | "MAX_2000_LBS"
  | (string & {});
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
export interface CreateSiteInput {
  Name: string;
  Description?: string;
  Notes?: string;
  Tags?: { [key: string]: string | undefined };
  OperatingAddress?: Address;
  ShippingAddress?: Address;
  RackPhysicalProperties?: RackPhysicalProperties;
}
export interface Site {
  SiteId?: string;
  AccountId?: string;
  Name?: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
  SiteArn?: string;
  Notes?: string;
  OperatingAddressCountryCode?: string;
  OperatingAddressStateOrRegion?: string;
  OperatingAddressCity?: string;
  RackPhysicalProperties?: RackPhysicalProperties;
}
export interface CreateSiteOutput {
  Site?: Site;
}
export interface DeleteOutpostInput {
  OutpostId: string;
}
export interface DeleteOutpostOutput {}
export interface DeleteQuoteInput {
  QuoteIdentifier: string;
}
export interface DeleteQuoteOutput {}
export interface DeleteSiteInput {
  SiteId: string;
}
export interface DeleteSiteOutput {}
export interface GetCapacityTaskInput {
  CapacityTaskId: string;
  OutpostIdentifier: string;
}
export type InstanceTypeName = string;
export type InstanceTypeCount = number;
export interface InstanceTypeCapacity {
  InstanceType: string;
  Count: number;
}
export type RequestedInstancePools = InstanceTypeCapacity[];
export type InstanceId = string;
export type InstanceIdList = string[];
export type AccountIdList = string[];
export type AWSServiceName =
  | "AWS"
  | "EC2"
  | "EKS"
  | "ELASTICACHE"
  | "ELB"
  | "RDS"
  | "ROUTE53"
  | (string & {});
export type AWSServiceNameList = AWSServiceName[];
export interface InstancesToExclude {
  Instances?: string[];
  AccountIds?: string[];
  Services?: AWSServiceName[];
}
export type DryRun = boolean;
export type CapacityTaskStatus =
  | "REQUESTED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED"
  | "WAITING_FOR_EVACUATION"
  | "CANCELLATION_IN_PROGRESS"
  | "CANCELLED"
  | (string & {});
export type CapacityTaskStatusReason = string;
export type CapacityTaskFailureType =
  | "UNSUPPORTED_CAPACITY_CONFIGURATION"
  | "UNEXPECTED_ASSET_STATE"
  | "BLOCKING_INSTANCES_NOT_EVACUATED"
  | "INTERNAL_SERVER_ERROR"
  | "RESOURCE_NOT_FOUND"
  | (string & {});
export interface CapacityTaskFailure {
  Reason: string;
  Type?: CapacityTaskFailureType;
}
export type TaskActionOnBlockingInstances = "WAIT_FOR_EVACUATION" | "FAIL_TASK" | (string & {});
export interface GetCapacityTaskOutput {
  CapacityTaskId?: string;
  OutpostId?: string;
  OrderId?: string;
  AssetId?: string;
  RequestedInstancePools?: InstanceTypeCapacity[];
  InstancesToExclude?: InstancesToExclude;
  DryRun?: boolean;
  CapacityTaskStatus?: CapacityTaskStatus;
  Failed?: CapacityTaskFailure;
  CreationDate?: Date;
  CompletionDate?: Date;
  LastModifiedDate?: Date;
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances;
}
export interface GetCatalogItemInput {
  CatalogItemId: string;
}
export type CatalogItemStatus = "AVAILABLE" | "DISCONTINUED" | (string & {});
export type CatalogItemPowerKva = number;
export type CatalogItemWeightLbs = number;
export type SupportedUplinkGbps = number;
export type SupportedUplinkGbpsListDefinition = number[];
export type SupportedStorageEnum = "EBS" | "S3" | (string & {});
export type SupportedStorageList = SupportedStorageEnum[];
export interface CatalogItem {
  CatalogItemId?: string;
  ItemStatus?: CatalogItemStatus;
  EC2Capacities?: EC2Capacity[];
  PowerKva?: number;
  WeightLbs?: number;
  SupportedUplinkGbps?: number[];
  SupportedStorage?: SupportedStorageEnum[];
  RackScalingType?: RackScalingType;
}
export interface GetCatalogItemOutput {
  CatalogItem?: CatalogItem;
}
export type ConnectionId = string;
export interface GetConnectionRequest {
  ConnectionId: string;
}
export type WireGuardPublicKey = string;
export type ServerEndpoint = string;
export type CIDR = string;
export type CIDRList = string[];
export interface ConnectionDetails {
  ClientPublicKey?: string;
  ServerPublicKey?: string;
  ServerEndpoint?: string;
  ClientTunnelAddress?: string;
  ServerTunnelAddress?: string;
  AllowedIps?: string[];
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
export interface GetOutpostOutput {
  Outpost?: Outpost;
}
export type Token = string;
export type MaxResults1000 = number;
export interface GetOutpostBillingInformationInput {
  NextToken?: string;
  MaxResults?: number;
  OutpostIdentifier: string;
}
export type SubscriptionType = "ORIGINAL" | "RENEWAL" | "CAPACITY_INCREASE" | (string & {});
export type SubscriptionStatus = "ACTIVE" | "PENDING" | "INACTIVE" | "CANCELLED" | (string & {});
export type OrderIdList = string[];
export interface Subscription {
  SubscriptionId?: string;
  SubscriptionType?: SubscriptionType;
  SubscriptionStatus?: SubscriptionStatus;
  OrderIds?: string[];
  BeginDate?: Date;
  EndDate?: Date;
  Currency?: CurrencyCode;
  MonthlyRecurringPrice?: number;
  UpfrontPrice?: number;
}
export type SubscriptionList = Subscription[];
export interface GetOutpostBillingInformationOutput {
  NextToken?: string;
  Subscriptions?: Subscription[];
  ContractEndDate?: string;
  PaymentTerm?: PaymentTerm;
  PaymentOption?: PaymentOption;
}
export interface GetOutpostInstanceTypesInput {
  OutpostId: string;
  NextToken?: string;
  MaxResults?: number;
}
export type InstanceType = string;
export type VCPUCount = number;
export interface InstanceTypeItem {
  InstanceType?: string;
  VCPUs?: number;
}
export type InstanceTypeListDefinition = InstanceTypeItem[];
export interface GetOutpostInstanceTypesOutput {
  InstanceTypes?: InstanceTypeItem[];
  NextToken?: string;
  OutpostId?: string;
  OutpostArn?: string;
}
export type AssetIdInput = string;
export interface GetOutpostSupportedInstanceTypesInput {
  OutpostIdentifier: string;
  OrderId?: string;
  AssetId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetOutpostSupportedInstanceTypesOutput {
  InstanceTypes?: InstanceTypeItem[];
  NextToken?: string;
}
export interface GetPrivateConnectivityConfigInput {
  OutpostId: string;
}
export interface GetPrivateConnectivityConfigOutput {
  PrivateConnectivityConfig?: PrivateConnectivityConfig;
}
export interface GetQuoteInput {
  QuoteIdentifier: string;
}
export interface GetQuoteOutput {
  Quote?: Quote;
}
export interface GetRenewalPricingInput {
  OutpostIdentifier: string;
}
export type PricingResult = "PRICED" | "UNABLE_TO_PRICE" | (string & {});
export interface GetRenewalPricingOutput {
  PricingResult?: PricingResult;
  PricingOptions?: PricingOption[];
}
export interface GetSiteInput {
  SiteId: string;
}
export interface GetSiteOutput {
  Site?: Site;
}
export type AddressType = "SHIPPING_ADDRESS" | "OPERATING_ADDRESS" | (string & {});
export interface GetSiteAddressInput {
  SiteId: string;
  AddressType: AddressType;
}
export interface GetSiteAddressOutput {
  SiteId?: string;
  AddressType?: AddressType;
  Address?: Address;
}
export type AssetIdList = string[];
export type OutpostInstanceType = string;
export type OutpostInstanceTypeList = string[];
export interface ListAssetInstancesInput {
  OutpostIdentifier: string;
  AssetIdFilter?: string[];
  InstanceTypeFilter?: string[];
  AccountIdFilter?: string[];
  AwsServiceFilter?: AWSServiceName[];
  MaxResults?: number;
  NextToken?: string;
}
export interface AssetInstance {
  InstanceId?: string;
  InstanceType?: string;
  AssetId?: string;
  AccountId?: string;
  AwsServiceName?: AWSServiceName;
}
export type AssetInstanceList = AssetInstance[];
export interface ListAssetInstancesOutput {
  AssetInstances?: AssetInstance[];
  NextToken?: string;
}
export type HostId = string;
export type HostIdList = string[];
export type AssetState = "ACTIVE" | "RETIRING" | "ISOLATED" | "INSTALLING" | (string & {});
export type StatusList = AssetState[];
export type AssetType =
  | "COMPUTE"
  | "STORAGE"
  | "POWERSHELF"
  | "SWITCH"
  | "NETWORKING"
  | (string & {});
export type AssetTypeList = AssetType[];
export interface ListAssetsInput {
  OutpostIdentifier: string;
  HostIdFilter?: string[];
  MaxResults?: number;
  NextToken?: string;
  StatusFilter?: AssetState[];
  AssetTypeFilter?: AssetType[];
}
export type ComputeAssetState = "ACTIVE" | "ISOLATED" | "RETIRING" | "INSTALLING" | (string & {});
export type InstanceFamilyName = string;
export type InstanceFamilies = string[];
export interface AssetInstanceTypeCapacity {
  InstanceType: string;
  Count: number;
}
export type AssetInstanceCapacityList = AssetInstanceTypeCapacity[];
export interface ComputeAttributes {
  HostId?: string;
  State?: ComputeAssetState;
  InstanceFamilies?: string[];
  InstanceTypeCapacities?: AssetInstanceTypeCapacity[];
  MaxVcpus?: number;
}
export type RackElevation = number;
export interface AssetLocation {
  RackElevation?: number;
}
export interface AssetInfo {
  AssetId?: string;
  RackId?: string;
  AssetType?: AssetType;
  ComputeAttributes?: ComputeAttributes;
  AssetLocation?: AssetLocation;
}
export type AssetListDefinition = AssetInfo[];
export interface ListAssetsOutput {
  Assets?: AssetInfo[];
  NextToken?: string;
}
export interface ListBlockingInstancesForCapacityTaskInput {
  OutpostIdentifier: string;
  CapacityTaskId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface BlockingInstance {
  InstanceId?: string;
  AccountId?: string;
  AwsServiceName?: AWSServiceName;
}
export type BlockingInstancesList = BlockingInstance[];
export interface ListBlockingInstancesForCapacityTaskOutput {
  BlockingInstances?: BlockingInstance[];
  NextToken?: string;
}
export type CapacityTaskStatusList = CapacityTaskStatus[];
export interface ListCapacityTasksInput {
  OutpostIdentifierFilter?: string;
  MaxResults?: number;
  NextToken?: string;
  CapacityTaskStatusFilter?: CapacityTaskStatus[];
}
export interface CapacityTaskSummary {
  CapacityTaskId?: string;
  OutpostId?: string;
  OrderId?: string;
  AssetId?: string;
  CapacityTaskStatus?: CapacityTaskStatus;
  CreationDate?: Date;
  CompletionDate?: Date;
  LastModifiedDate?: Date;
}
export type CapacityTaskList = CapacityTaskSummary[];
export interface ListCapacityTasksOutput {
  CapacityTasks?: CapacityTaskSummary[];
  NextToken?: string;
}
export type CatalogItemClass = "RACK" | "SERVER" | (string & {});
export type CatalogItemClassList = CatalogItemClass[];
export type EC2FamilyList = string[];
export interface ListCatalogItemsInput {
  NextToken?: string;
  MaxResults?: number;
  ItemClassFilter?: CatalogItemClass[];
  SupportedStorageFilter?: SupportedStorageEnum[];
  EC2FamilyFilter?: string[];
}
export type CatalogItemListDefinition = CatalogItem[];
export interface ListCatalogItemsOutput {
  CatalogItems?: CatalogItem[];
  NextToken?: string;
}
export interface ListOrderableInstanceTypesInput {
  OutpostGenerationFilter?: OutpostGeneration;
  MaxResults?: number;
  NextToken?: string;
}
export type MemoryInMib = number;
export type NetworkPerformance = string;
export type FormFactor = "RACK" | "SERVER" | (string & {});
export interface FormFactorConfig {
  FormFactor?: FormFactor;
  OutpostGeneration?: OutpostGeneration;
}
export type FormFactorConfigList = FormFactorConfig[];
export interface DetailedInstanceTypeItem {
  InstanceType?: string;
  VCPUs?: number;
  MemoryInMib?: number;
  NetworkPerformance?: string;
  FormFactorConfigs?: FormFactorConfig[];
}
export type DetailedInstanceTypeListDefinition = DetailedInstanceTypeItem[];
export interface ListOrderableInstanceTypesOutput {
  InstanceTypes?: DetailedInstanceTypeItem[];
  NextToken?: string;
}
export interface ListOrdersInput {
  OutpostIdentifierFilter?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type LineItemStatusCounts = { [key in LineItemStatus]?: number };
export interface OrderSummary {
  OutpostId?: string;
  OrderId?: string;
  OrderType?: OrderType;
  Status?: OrderStatus;
  LineItemCountsByStatus?: { [key: string]: number | undefined };
  OrderSubmissionDate?: Date;
  OrderFulfilledDate?: Date;
}
export type OrderSummaryListDefinition = OrderSummary[];
export interface ListOrdersOutput {
  Orders?: OrderSummary[];
  NextToken?: string;
}
export type LifeCycleStatusList = string[];
export type AvailabilityZoneList = string[];
export type AvailabilityZoneIdList = string[];
export interface ListOutpostsInput {
  NextToken?: string;
  MaxResults?: number;
  LifeCycleStatusFilter?: string[];
  AvailabilityZoneFilter?: string[];
  AvailabilityZoneIdFilter?: string[];
}
export type OutpostListDefinition = Outpost[];
export interface ListOutpostsOutput {
  Outposts?: Outpost[];
  NextToken?: string;
}
export interface ListQuotesInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface QuoteSummary {
  QuoteId?: string;
  AccountId?: string;
  QuoteStatus?: QuoteStatus;
  StatusMessage?: string;
  OutpostArn?: string;
  CountryCode?: string;
  RequestedCapacities?: QuoteCapacity[];
  RequestedConstraints?: QuoteConstraint[];
  RequestedPaymentOptions?: PaymentOption[];
  RequestedPaymentTerms?: PaymentTerm[];
  QuoteOptions?: QuoteOption[];
  SubmittedOrderId?: string;
  CreatedDate?: Date;
  ExpirationDate?: Date;
  Description?: string | redacted.Redacted<string>;
}
export type QuoteSummaryListDefinition = QuoteSummary[];
export interface ListQuotesOutput {
  Quotes?: QuoteSummary[];
  NextToken?: string;
}
export type CountryCodeList = string[];
export type StateOrRegionList = string[];
export type CityList = string[];
export interface ListSitesInput {
  NextToken?: string;
  MaxResults?: number;
  OperatingAddressCountryCodeFilter?: string[];
  OperatingAddressStateOrRegionFilter?: string[];
  OperatingAddressCityFilter?: string[];
}
export type SiteListDefinition = Site[];
export interface ListSitesOutput {
  Sites?: Site[];
  NextToken?: string;
}
export type Arn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface StartCapacityTaskInput {
  OutpostIdentifier: string;
  OrderId?: string;
  AssetId?: string;
  InstancePools: InstanceTypeCapacity[];
  InstancesToExclude?: InstancesToExclude;
  DryRun?: boolean;
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances;
}
export interface StartCapacityTaskOutput {
  CapacityTaskId?: string;
  OutpostId?: string;
  OrderId?: string;
  AssetId?: string;
  RequestedInstancePools?: InstanceTypeCapacity[];
  InstancesToExclude?: InstancesToExclude;
  DryRun?: boolean;
  CapacityTaskStatus?: CapacityTaskStatus;
  Failed?: CapacityTaskFailure;
  CreationDate?: Date;
  CompletionDate?: Date;
  LastModifiedDate?: Date;
  TaskActionOnBlockingInstances?: TaskActionOnBlockingInstances;
}
export type DeviceSerialNumber = string;
export type NetworkInterfaceDeviceIndex = number;
export interface StartConnectionRequest {
  DeviceSerialNumber?: string;
  AssetId: string;
  ClientPublicKey: string;
  NetworkInterfaceDeviceIndex: number;
}
export type UnderlayIpAddress = string;
export interface StartConnectionResponse {
  ConnectionId?: string;
  UnderlayIpAddress?: string;
}
export type ValidateOnly = boolean;
export interface StartOutpostDecommissionInput {
  OutpostIdentifier: string;
  ValidateOnly?: boolean;
}
export type DecommissionRequestStatus = "SKIPPED" | "BLOCKED" | "REQUESTED" | (string & {});
export type BlockingResourceType =
  | "EC2_INSTANCE"
  | "OUTPOST_RAM_SHARE"
  | "LGW_ROUTING_DOMAIN"
  | "LGW_ROUTE_TABLE"
  | "LGW_VIRTUAL_INTERFACE_GROUP"
  | "OUTPOST_ORDER_CANCELLABLE"
  | "OUTPOST_ORDER_INTERVENTION_REQUIRED"
  | (string & {});
export type BlockingResourceTypeList = BlockingResourceType[];
export interface StartOutpostDecommissionOutput {
  Status?: DecommissionRequestStatus;
  BlockingResourceTypes?: BlockingResourceType[];
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
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
export type OutpostIdentifierOrEmpty = string;
export interface UpdateQuoteInput {
  QuoteIdentifier: string;
  OutpostIdentifier?: string;
  CountryCode?: string;
  RequestedCapacities?: QuoteCapacity[];
  RequestedConstraints?: QuoteConstraint[];
  RequestedPaymentOptions?: PaymentOption[];
  RequestedPaymentTerms?: PaymentTerm[];
  Description?: string | redacted.Redacted<string>;
}
export interface UpdateQuoteOutput {
  Quote?: Quote;
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
export interface UpdateSiteAddressInput {
  SiteId: string;
  AddressType: AddressType;
  Address: Address;
}
export interface UpdateSiteAddressOutput {
  AddressType?: AddressType;
  Address?: Address;
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
export type ErrorMessage = string;
export type ResourceType = "OUTPOST" | "ORDER" | (string & {});
export type CancelCapacityTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the capacity task.
 */
export const cancelCapacityTask: API.OperationMethod<
  CancelCapacityTaskInput,
  CancelCapacityTaskOutput,
  CancelCapacityTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<CancelCapacityTaskInput>,
  output: __S(1) as any as S.Schema<CancelCapacityTaskOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelCapacityTask",
}));

export type CancelOrderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the specified order for an Outpost.
 */
export const cancelOrder: API.OperationMethod<
  CancelOrderInput,
  CancelOrderOutput,
  CancelOrderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CancelOrderInput>,
  output: __S(1) as any as S.Schema<CancelOrderOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelOrder",
}));

export type CreateOrderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an order for an Outpost.
 */
export const createOrder: API.OperationMethod<
  CreateOrderInput,
  CreateOrderOutput,
  CreateOrderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<CreateOrderInput>,
  output: __S(13) as any as S.Schema<CreateOrderOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOrder",
}));

export type CreateOutpostError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Outpost.
 *
 * You can specify either an Availability one or an AZ ID.
 */
export const createOutpost: API.OperationMethod<
  CreateOutpostInput,
  CreateOutpostOutput,
  CreateOutpostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<CreateOutpostInput>,
  output: __S(17) as any as S.Schema<CreateOutpostOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOutpost",
}));

export type CreatePrivateConnectivityConfigError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates the private connectivity configuration for the specified Outpost. Private
 * connectivity establishes a service link VPN connection between the Outpost and its home
 * Amazon Web Services Region using a VPC and subnet that you specify, which allows the service link traffic
 * to flow through your VPC and minimizes public internet exposure.
 */
export const createPrivateConnectivityConfig: API.OperationMethod<
  CreatePrivateConnectivityConfigInput,
  CreatePrivateConnectivityConfigOutput,
  CreatePrivateConnectivityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreatePrivateConnectivityConfigInput>,
  output: __S(22) as any as S.Schema<CreatePrivateConnectivityConfigOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePrivateConnectivityConfig",
}));

export type CreateQuoteError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a quote for an Outpost. A quote provides pricing and configuration options based
 * on the requested capacity. You can optionally associate the quote with an existing Outpost or
 * create a standalone quote by specifying only the country code and requested capacities.
 */
export const createQuote: API.OperationMethod<
  CreateQuoteInput,
  CreateQuoteOutput,
  CreateQuoteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<CreateQuoteInput>,
  output: __S(44) as any as S.Schema<CreateQuoteOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQuote",
}));

export type CreateRenewalError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a renewal contract for the specified Outpost.
 */
export const createRenewal: API.OperationMethod<
  CreateRenewalInput,
  CreateRenewalOutput,
  CreateRenewalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<CreateRenewalInput>,
  output: __S(46) as any as S.Schema<CreateRenewalOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRenewal",
}));

export type CreateSiteError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a site for an Outpost.
 */
export const createSite: API.OperationMethod<
  CreateSiteInput,
  CreateSiteOutput,
  CreateSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<CreateSiteInput>,
  output: __S(51) as any as S.Schema<CreateSiteOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSite",
}));

export type DeleteOutpostError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Outpost.
 */
export const deleteOutpost: API.OperationMethod<
  DeleteOutpostInput,
  DeleteOutpostOutput,
  DeleteOutpostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<DeleteOutpostInput>,
  output: __S(1) as any as S.Schema<DeleteOutpostOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOutpost",
}));

export type DeleteQuoteError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified quote.
 */
export const deleteQuote: API.OperationMethod<
  DeleteQuoteInput,
  DeleteQuoteOutput,
  DeleteQuoteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DeleteQuoteInput>,
  output: __S(1) as any as S.Schema<DeleteQuoteOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQuote",
}));

export type DeleteSiteError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified site.
 */
export const deleteSite: API.OperationMethod<
  DeleteSiteInput,
  DeleteSiteOutput,
  DeleteSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<DeleteSiteInput>,
  output: __S(1) as any as S.Schema<DeleteSiteOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSite",
}));

export type GetCapacityTaskError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets details of the specified capacity task.
 */
export const getCapacityTask: API.OperationMethod<
  GetCapacityTaskInput,
  GetCapacityTaskOutput,
  GetCapacityTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<GetCapacityTaskInput>,
  output: __S(60) as any as S.Schema<GetCapacityTaskOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCapacityTask",
}));

export type GetCatalogItemError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified catalog item.
 */
export const getCatalogItem: API.OperationMethod<
  GetCatalogItemInput,
  GetCatalogItemOutput,
  GetCatalogItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<GetCatalogItemInput>,
  output: __S(64) as any as S.Schema<GetCatalogItemOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCatalogItem",
}));

export type GetConnectionError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services uses this action to install Outpost servers.
 *
 * Gets information about the specified connection.
 *
 * Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For
 * more information, see
 * Amazon Web Services managed policies for Amazon Web Services Outposts and
 * Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail in the *Amazon Web Services Outposts User Guide*.
 */
export const getConnection: API.OperationMethod<
  GetConnectionRequest,
  GetConnectionResponse,
  GetConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<GetConnectionRequest>,
  output: __S(67) as any as S.Schema<GetConnectionResponse>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnection",
}));

export type GetOrderError =
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified order.
 */
export const getOrder: API.OperationMethod<
  GetOrderInput,
  GetOrderOutput,
  GetOrderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<GetOrderInput>,
  output: __S(13) as any as S.Schema<GetOrderOutput>,
  errors: [InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOrder",
}));

export type GetOutpostError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified Outpost.
 */
export const getOutpost: API.OperationMethod<
  GetOutpostInput,
  GetOutpostOutput,
  GetOutpostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<GetOutpostInput>,
  output: __S(17) as any as S.Schema<GetOutpostOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutpost",
}));

export type GetOutpostBillingInformationError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | CommonErrors;
/**
 * Gets current and historical billing information about the specified Outpost.
 */
export const getOutpostBillingInformation: API.PaginatedOperationMethod<
  GetOutpostBillingInformationInput,
  GetOutpostBillingInformationOutput,
  GetOutpostBillingInformationError,
  Credentials | HttpClient.HttpClient,
  Subscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(70) as any as S.Schema<GetOutpostBillingInformationInput>,
  output: __S(73) as any as S.Schema<GetOutpostBillingInformationOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutpostBillingInformation",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Subscriptions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetOutpostInstanceTypesError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the instance types for the specified Outpost.
 */
export const getOutpostInstanceTypes: API.PaginatedOperationMethod<
  GetOutpostInstanceTypesInput,
  GetOutpostInstanceTypesOutput,
  GetOutpostInstanceTypesError,
  Credentials | HttpClient.HttpClient,
  InstanceTypeItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(74) as any as S.Schema<GetOutpostInstanceTypesInput>,
  output: __S(77) as any as S.Schema<GetOutpostInstanceTypesOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutpostInstanceTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "InstanceTypes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetOutpostSupportedInstanceTypesError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the instance types that an Outpost can support in `InstanceTypeCapacity`.
 * This will generally include instance types that are not currently configured and therefore
 * cannot be launched with the current Outpost capacity configuration.
 */
export const getOutpostSupportedInstanceTypes: API.PaginatedOperationMethod<
  GetOutpostSupportedInstanceTypesInput,
  GetOutpostSupportedInstanceTypesOutput,
  GetOutpostSupportedInstanceTypesError,
  Credentials | HttpClient.HttpClient,
  InstanceTypeItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(78) as any as S.Schema<GetOutpostSupportedInstanceTypesInput>,
  output: __S(79) as any as S.Schema<GetOutpostSupportedInstanceTypesOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutpostSupportedInstanceTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "InstanceTypes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetPrivateConnectivityConfigError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the private connectivity configuration for the specified Outpost.
 */
export const getPrivateConnectivityConfig: API.OperationMethod<
  GetPrivateConnectivityConfigInput,
  GetPrivateConnectivityConfigOutput,
  GetPrivateConnectivityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<GetPrivateConnectivityConfigInput>,
  output: __S(81) as any as S.Schema<GetPrivateConnectivityConfigOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPrivateConnectivityConfig",
}));

export type GetQuoteError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified quote.
 */
export const getQuote: API.OperationMethod<
  GetQuoteInput,
  GetQuoteOutput,
  GetQuoteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<GetQuoteInput>,
  output: __S(44) as any as S.Schema<GetQuoteOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQuote",
}));

export type GetRenewalPricingError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets all available renewal pricing options for the specified Outpost.
 */
export const getRenewalPricing: API.OperationMethod<
  GetRenewalPricingInput,
  GetRenewalPricingOutput,
  GetRenewalPricingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<GetRenewalPricingInput>,
  output: __S(84) as any as S.Schema<GetRenewalPricingOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRenewalPricing",
}));

export type GetSiteError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified Outpost site.
 */
export const getSite: API.OperationMethod<
  GetSiteInput,
  GetSiteOutput,
  GetSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<GetSiteInput>,
  output: __S(51) as any as S.Schema<GetSiteOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSite",
}));

export type GetSiteAddressError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the site address of the specified site.
 */
export const getSiteAddress: API.OperationMethod<
  GetSiteAddressInput,
  GetSiteAddressOutput,
  GetSiteAddressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86) as any as S.Schema<GetSiteAddressInput>,
  output: __S(87) as any as S.Schema<GetSiteAddressOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSiteAddress",
}));

export type ListAssetInstancesError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * A list of Amazon EC2 instances, belonging to all accounts, running on the specified Outpost.
 * Does not include Amazon EBS or Amazon S3 instances.
 */
export const listAssetInstances: API.PaginatedOperationMethod<
  ListAssetInstancesInput,
  ListAssetInstancesOutput,
  ListAssetInstancesError,
  Credentials | HttpClient.HttpClient,
  AssetInstance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(88) as any as S.Schema<ListAssetInstancesInput>,
  output: __S(91) as any as S.Schema<ListAssetInstancesOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AssetInstances",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAssetsError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the hardware assets for the specified Outpost.
 *
 * Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 * all of the specified filters. For a filter where you can specify multiple values, the results include
 * items that match any of the values that you specify for the filter.
 */
export const listAssets: API.PaginatedOperationMethod<
  ListAssetsInput,
  ListAssetsOutput,
  ListAssetsError,
  Credentials | HttpClient.HttpClient,
  AssetInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(92) as any as S.Schema<ListAssetsInput>,
  output: __S(99) as any as S.Schema<ListAssetsOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Assets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListBlockingInstancesForCapacityTaskError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * A list of Amazon EC2 instances running on the Outpost and belonging to the account that
 * initiated the capacity task. Use this list to specify the instances you cannot stop to free up
 * capacity to run the capacity task.
 */
export const listBlockingInstancesForCapacityTask: API.PaginatedOperationMethod<
  ListBlockingInstancesForCapacityTaskInput,
  ListBlockingInstancesForCapacityTaskOutput,
  ListBlockingInstancesForCapacityTaskError,
  Credentials | HttpClient.HttpClient,
  BlockingInstance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(100) as any as S.Schema<ListBlockingInstancesForCapacityTaskInput>,
  output: __S(103) as any as S.Schema<ListBlockingInstancesForCapacityTaskOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBlockingInstancesForCapacityTask",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "BlockingInstances",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCapacityTasksError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the capacity tasks for your Amazon Web Services account.
 *
 * Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 * all of the specified filters. For a filter where you can specify multiple values, the results include
 * items that match any of the values that you specify for the filter.
 */
export const listCapacityTasks: API.PaginatedOperationMethod<
  ListCapacityTasksInput,
  ListCapacityTasksOutput,
  ListCapacityTasksError,
  Credentials | HttpClient.HttpClient,
  CapacityTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(104) as any as S.Schema<ListCapacityTasksInput>,
  output: __S(107) as any as S.Schema<ListCapacityTasksOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCapacityTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CapacityTasks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCatalogItemsError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the items in the catalog.
 *
 * Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 * all of the specified filters. For a filter where you can specify multiple values, the results include
 * items that match any of the values that you specify for the filter.
 */
export const listCatalogItems: API.PaginatedOperationMethod<
  ListCatalogItemsInput,
  ListCatalogItemsOutput,
  ListCatalogItemsError,
  Credentials | HttpClient.HttpClient,
  CatalogItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(108) as any as S.Schema<ListCatalogItemsInput>,
  output: __S(110) as any as S.Schema<ListCatalogItemsOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCatalogItems",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CatalogItems",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOrderableInstanceTypesError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the instance types that can be ordered for an Outpost. You can filter the results
 * by Outpost generation.
 */
export const listOrderableInstanceTypes: API.PaginatedOperationMethod<
  ListOrderableInstanceTypesInput,
  ListOrderableInstanceTypesOutput,
  ListOrderableInstanceTypesError,
  Credentials | HttpClient.HttpClient,
  DetailedInstanceTypeItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(111) as any as S.Schema<ListOrderableInstanceTypesInput>,
  output: __S(116) as any as S.Schema<ListOrderableInstanceTypesOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrderableInstanceTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "InstanceTypes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOrdersError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Outpost orders for your Amazon Web Services account.
 */
export const listOrders: API.PaginatedOperationMethod<
  ListOrdersInput,
  ListOrdersOutput,
  ListOrdersError,
  Credentials | HttpClient.HttpClient,
  OrderSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(117) as any as S.Schema<ListOrdersInput>,
  output: __S(121) as any as S.Schema<ListOrdersOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Orders",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOutpostsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Outposts for your Amazon Web Services account.
 *
 * Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 * all of the specified filters. For a filter where you can specify multiple values, the results include
 * items that match any of the values that you specify for the filter.
 */
export const listOutposts: API.PaginatedOperationMethod<
  ListOutpostsInput,
  ListOutpostsOutput,
  ListOutpostsError,
  Credentials | HttpClient.HttpClient,
  Outpost
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(122) as any as S.Schema<ListOutpostsInput>,
  output: __S(124) as any as S.Schema<ListOutpostsOutput>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOutposts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Outposts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListQuotesError = AccessDeniedException | InternalServerException | CommonErrors;
/**
 * Lists the quotes for your Amazon Web Services account.
 */
export const listQuotes: API.PaginatedOperationMethod<
  ListQuotesInput,
  ListQuotesOutput,
  ListQuotesError,
  Credentials | HttpClient.HttpClient,
  QuoteSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(125) as any as S.Schema<ListQuotesInput>,
  output: __S(128) as any as S.Schema<ListQuotesOutput>,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQuotes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Quotes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSitesError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific
 * results.
 *
 * Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 * all of the specified filters. For a filter where you can specify multiple values, the results include
 * items that match any of the values that you specify for the filter.
 */
export const listSites: API.PaginatedOperationMethod<
  ListSitesInput,
  ListSitesOutput,
  ListSitesError,
  Credentials | HttpClient.HttpClient,
  Site
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(129) as any as S.Schema<ListSitesInput>,
  output: __S(131) as any as S.Schema<ListSitesOutput>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSites",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Sites",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(133) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartCapacityTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Starts the specified capacity task. You can have one active capacity task for each order
 * and each Outpost.
 */
export const startCapacityTask: API.OperationMethod<
  StartCapacityTaskInput,
  StartCapacityTaskOutput,
  StartCapacityTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134) as any as S.Schema<StartCapacityTaskInput>,
  output: __S(60) as any as S.Schema<StartCapacityTaskOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCapacityTask",
}));

export type StartConnectionError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services uses this action to install Outpost servers.
 *
 * Starts the connection required for Outpost server installation.
 *
 * Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For
 * more information, see
 * Amazon Web Services managed policies for Amazon Web Services Outposts and
 * Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail in the *Amazon Web Services Outposts User Guide*.
 */
export const startConnection: API.OperationMethod<
  StartConnectionRequest,
  StartConnectionResponse,
  StartConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135) as any as S.Schema<StartConnectionRequest>,
  output: __S(136) as any as S.Schema<StartConnectionResponse>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartConnection",
}));

export type StartOutpostDecommissionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Starts the decommission process to return the Outposts racks or servers.
 */
export const startOutpostDecommission: API.OperationMethod<
  StartOutpostDecommissionInput,
  StartOutpostDecommissionOutput,
  StartOutpostDecommissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137) as any as S.Schema<StartOutpostDecommissionInput>,
  output: __S(138) as any as S.Schema<StartOutpostDecommissionOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartOutpostDecommission",
}));

export type TagResourceError =
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<TagResourceRequest>,
  output: __S(1) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140) as any as S.Schema<UntagResourceRequest>,
  output: __S(1) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateOutpostError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an Outpost.
 */
export const updateOutpost: API.OperationMethod<
  UpdateOutpostInput,
  UpdateOutpostOutput,
  UpdateOutpostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141) as any as S.Schema<UpdateOutpostInput>,
  output: __S(17) as any as S.Schema<UpdateOutpostOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOutpost",
}));

export type UpdateQuoteError =
  | AccessDeniedException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified quote. You can modify the requested capacities, constraints,
 * payment options, payment terms, or Outpost association.
 */
export const updateQuote: API.OperationMethod<
  UpdateQuoteInput,
  UpdateQuoteOutput,
  UpdateQuoteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142) as any as S.Schema<UpdateQuoteInput>,
  output: __S(44) as any as S.Schema<UpdateQuoteOutput>,
  errors: [AccessDeniedException, InternalServerException, NotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQuote",
}));

export type UpdateSiteError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified site.
 */
export const updateSite: API.OperationMethod<
  UpdateSiteInput,
  UpdateSiteOutput,
  UpdateSiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143) as any as S.Schema<UpdateSiteInput>,
  output: __S(51) as any as S.Schema<UpdateSiteOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSite",
}));

export type UpdateSiteAddressError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the address of the specified site.
 *
 * You can't update a site address if there is an order in progress. You must wait for the
 * order to complete or cancel the order.
 *
 * You can update the operating address before you place an order at the site, or after all
 * Outposts that belong to the site have been deactivated.
 */
export const updateSiteAddress: API.OperationMethod<
  UpdateSiteAddressInput,
  UpdateSiteAddressOutput,
  UpdateSiteAddressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144) as any as S.Schema<UpdateSiteAddressInput>,
  output: __S(145) as any as S.Schema<UpdateSiteAddressOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSiteAddress",
}));

export type UpdateSiteRackPhysicalPropertiesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | NotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Update the physical and logistical details for a rack at a site. For more information
 * about hardware requirements for racks, see Network
 * readiness checklist in the Amazon Web Services Outposts User Guide.
 *
 * To update a rack at a site with an order of `IN_PROGRESS`, you must wait for
 * the order to complete or cancel the order.
 */
export const updateSiteRackPhysicalProperties: API.OperationMethod<
  UpdateSiteRackPhysicalPropertiesInput,
  UpdateSiteRackPhysicalPropertiesOutput,
  UpdateSiteRackPhysicalPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146) as any as S.Schema<UpdateSiteRackPhysicalPropertiesInput>,
  output: __S(147) as any as S.Schema<UpdateSiteRackPhysicalPropertiesOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    NotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSiteRackPhysicalProperties",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CapacityTaskId: S.String.pipe(T.HttpLabel("CapacityTaskId")),
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelCapacityTaskInput" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelCapacityTaskOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ OrderId: S.String.pipe(T.HttpLabel("OrderId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/orders/{OrderId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelOrderInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CatalogItemId: S.optional(S.String), Quantity: S.optional(S.Number) }),
      ).annotate({ identifier: "LineItemRequest" });
    case 4:
      return S.Array(__S(3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String,
          QuoteIdentifier: S.optional(S.String),
          QuoteOptionIdentifier: S.optional(S.String),
          LineItems: S.optional(__S(4)),
          PaymentOption: S.String,
          PaymentTerm: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/orders" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateOrderInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ShipmentTrackingNumber: S.optional(S.String),
          ShipmentCarrier: S.optional(S.String),
        }),
      ).annotate({ identifier: "ShipmentInformation" });
    case 7:
      return S.Array(S.String);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AssetId: S.optional(S.String), MacAddressList: S.optional(__S(7)) }),
      ).annotate({ identifier: "LineItemAssetInformation" });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          CatalogItemId: S.optional(S.String),
          LineItemId: S.optional(S.String),
          Quantity: S.optional(S.Number),
          Status: S.optional(S.String),
          ShipmentInformation: S.optional(__S(6)),
          AssetInformationList: S.optional(__S(9)),
          PreviousLineItemId: S.optional(S.String),
          PreviousOrderId: S.optional(S.String),
        }),
      ).annotate({ identifier: "LineItem" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          OutpostId: S.optional(S.String),
          QuoteIdentifier: S.optional(S.String),
          QuoteOptionIdentifier: S.optional(S.String),
          OrderId: S.optional(S.String),
          Status: S.optional(S.String),
          LineItems: S.optional(__S(11)),
          PaymentOption: S.optional(S.String),
          OrderSubmissionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OrderFulfilledDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PaymentTerm: S.optional(S.String),
          OrderType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Order" });
    case 5:
      return S.suspend(() => S.Struct({ Order: S.optional(__S(12)) })).annotate({
        identifier: "CreateOrderOutput",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          SiteId: S.String,
          AvailabilityZone: S.optional(S.String),
          AvailabilityZoneId: S.optional(S.String),
          Tags: S.optional(__S(14)),
          SupportedHardwareType: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/outposts" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateOutpostInput" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OutpostId: S.optional(S.String),
          OwnerId: S.optional(S.String),
          OutpostArn: S.optional(S.String),
          SiteId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LifeCycleStatus: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          AvailabilityZoneId: S.optional(S.String),
          Tags: S.optional(__S(14)),
          SiteArn: S.optional(S.String),
          SupportedHardwareType: S.optional(S.String),
          Generation: S.optional(S.String),
          RackScalingType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Outpost" });
    case 1:
      return S.suspend(() => S.Struct({ Outpost: S.optional(__S(16)) })).annotate({
        identifier: "CreateOutpostOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.optional(S.String),
          SubnetIds: S.optional(__S(7)),
          VpcEndpointId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcInformation" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          OutpostId: S.String.pipe(T.HttpLabel("OutpostId")),
          VpcInformationList: __S(19),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/outposts/{OutpostId}/privateConnectivity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePrivateConnectivityConfigInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.optional(S.String),
          PrivateConnectivityStatus: S.optional(S.String),
          VpcInformationList: S.optional(__S(19)),
          ProvisioningRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrivateConnectivityConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PrivateConnectivityConfig: S.optional(__S(21)),
          OutpostId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreatePrivateConnectivityConfigOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          QuoteCapacityType: S.optional(S.String),
          Unit: S.optional(S.String),
          Quantity: S.optional(S.Number),
        }),
      ).annotate({ identifier: "QuoteCapacity" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() =>
        S.Struct({
          QuoteConstraintType: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "QuoteConstraint" });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.optional(S.String),
          CountryCode: S.String,
          RequestedCapacities: __S(24),
          RequestedConstraints: S.optional(__S(26)),
          RequestedPaymentOptions: S.optional(__S(27)),
          RequestedPaymentTerms: S.optional(__S(27)),
          Description: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/quotes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateQuoteInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExistingCapacities: S.optional(__S(24)),
          FinalCapacities: S.optional(__S(24)),
          CapacityChange: S.optional(__S(24)),
        }),
      ).annotate({ identifier: "CapacitySummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Family: S.optional(S.String),
          MaxSize: S.optional(S.String),
          Quantity: S.optional(S.String),
        }),
      ).annotate({ identifier: "EC2Capacity" });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RackId: S.optional(S.String),
          RackUse: S.optional(S.String),
          RackPowerDrawKva: S.optional(S.Number),
          RackWeightLbs: S.optional(S.Number),
          RackHeightInches: S.optional(S.Number),
          RackWidthInches: S.optional(S.Number),
          RackDepthInches: S.optional(S.Number),
          RackUnitHeight: S.optional(S.String),
          EC2Capacities: S.optional(__S(31)),
        }),
      ).annotate({ identifier: "RackSpecificationDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServerPowerDrawKva: S.optional(S.Number),
          ServerWeightLbs: S.optional(S.Number),
          ServerHeightInches: S.optional(S.Number),
          ServerWidthInches: S.optional(S.Number),
          ServerDepthInches: S.optional(S.Number),
          RackUnitHeight: S.optional(S.String),
          EC2Capacities: S.optional(__S(31)),
        }),
      ).annotate({
        identifier: "ServerSpecificationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          QuoteSpecificationType: S.optional(S.String),
          ExistingRackSpecificationDetails: S.optional(__S(32)),
          FinalRackSpecificationDetails: S.optional(__S(32)),
          ServerSpecificationDetails: S.optional(__S(33)),
        }),
      ).annotate({ identifier: "QuoteSpecification" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          PaymentOption: S.optional(S.String),
          PaymentTerm: S.optional(S.String),
          UpfrontPrice: S.optional(S.Number),
          MonthlyRecurringPrice: S.optional(S.Number),
          Currency: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SubscriptionPricingDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PricingType: S.optional(S.String),
          SubscriptionPricingDetails: S.optional(__S(36)),
        }),
      ).annotate({ identifier: "PricingOption" });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          QuoteOptionIdentifier: S.optional(S.String),
          Capacities: S.optional(__S(24)),
          CapacitySummary: S.optional(__S(29)),
          Specifications: S.optional(__S(35)),
          PricingOptions: S.optional(__S(38)),
        }),
      ).annotate({ identifier: "QuoteOption" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StatusMessage: S.optional(S.String),
          OrderingRequirementType: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "OrderingRequirement" });
    case 2:
      return S.Array(__S(41));
    case 3:
      return S.suspend(() =>
        S.Struct({
          QuoteId: S.optional(S.String),
          AccountId: S.optional(S.String),
          QuoteStatus: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          OutpostArn: S.optional(S.String),
          CountryCode: S.optional(S.String),
          RequestedCapacities: S.optional(__S(24)),
          RequestedConstraints: S.optional(__S(26)),
          RequestedPaymentOptions: S.optional(__S(27)),
          RequestedPaymentTerms: S.optional(__S(27)),
          QuoteOptions: S.optional(__S(40)),
          OrderingRequirements: S.optional(__S(42)),
          SubmittedOrderId: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Quote" });
    case 4:
      return S.suspend(() => S.Struct({ Quote: S.optional(__S(43)) })).annotate({
        identifier: "CreateQuoteOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PaymentOption: S.String,
          PaymentTerm: S.String,
          OutpostIdentifier: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/renewals" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRenewalInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PaymentOption: S.optional(S.String),
          PaymentTerm: S.optional(S.String),
          OutpostId: S.optional(S.String),
          UpfrontPrice: S.optional(S.Number),
          MonthlyRecurringPrice: S.optional(S.Number),
          Currency: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateRenewalOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContactName: S.String,
          ContactPhoneNumber: S.String,
          AddressLine1: S.String,
          AddressLine2: S.optional(S.String),
          AddressLine3: S.optional(S.String),
          City: S.String,
          StateOrRegion: S.String,
          DistrictOrCounty: S.optional(S.String),
          PostalCode: S.String,
          CountryCode: S.String,
          Municipality: S.optional(S.String),
        }),
      ).annotate({ identifier: "Address" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PowerDrawKva: S.optional(S.String),
          PowerPhase: S.optional(S.String),
          PowerConnector: S.optional(S.String),
          PowerFeedDrop: S.optional(S.String),
          UplinkGbps: S.optional(S.String),
          UplinkCount: S.optional(S.String),
          FiberOpticCableType: S.optional(S.String),
          OpticalStandard: S.optional(S.String),
          MaximumSupportedWeightLbs: S.optional(S.String),
        }),
      ).annotate({ identifier: "RackPhysicalProperties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          Notes: S.optional(S.String),
          Tags: S.optional(__S(14)),
          OperatingAddress: S.optional(__S(47)),
          ShippingAddress: S.optional(__S(47)),
          RackPhysicalProperties: S.optional(__S(48)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/sites" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSiteInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SiteId: S.optional(S.String),
          AccountId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(__S(14)),
          SiteArn: S.optional(S.String),
          Notes: S.optional(S.String),
          OperatingAddressCountryCode: S.optional(S.String),
          OperatingAddressStateOrRegion: S.optional(S.String),
          OperatingAddressCity: S.optional(S.String),
          RackPhysicalProperties: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "Site" });
    case 3:
      return S.suspend(() => S.Struct({ Site: S.optional(__S(50)) })).annotate({
        identifier: "CreateSiteOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ OutpostId: S.String.pipe(T.HttpLabel("OutpostId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/outposts/{OutpostId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteOutpostInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ QuoteIdentifier: S.String.pipe(T.HttpLabel("QuoteIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/quotes/{QuoteIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteQuoteInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ SiteId: S.String.pipe(T.HttpLabel("SiteId")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/sites/{SiteId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSiteInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CapacityTaskId: S.String.pipe(T.HttpLabel("CapacityTaskId")),
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCapacityTaskInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ InstanceType: S.String, Count: S.Number })).annotate({
        identifier: "InstanceTypeCapacity",
      });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Instances: S.optional(__S(7)),
          AccountIds: S.optional(__S(7)),
          Services: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "InstancesToExclude" });
    case 3:
      return S.suspend(() => S.Struct({ Reason: S.String, Type: S.optional(S.String) })).annotate({
        identifier: "CapacityTaskFailure",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CapacityTaskId: S.optional(S.String),
          OutpostId: S.optional(S.String),
          OrderId: S.optional(S.String),
          AssetId: S.optional(S.String),
          RequestedInstancePools: S.optional(__S(57)),
          InstancesToExclude: S.optional(__S(58)),
          DryRun: S.optional(S.Boolean),
          CapacityTaskStatus: S.optional(S.String),
          Failed: S.optional(__S(59)),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TaskActionOnBlockingInstances: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetCapacityTaskOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ CatalogItemId: S.String.pipe(T.HttpLabel("CatalogItemId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/catalog/item/{CatalogItemId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCatalogItemInput" });
    case 6:
      return S.Array(S.Number);
    case 7:
      return S.suspend(() =>
        S.Struct({
          CatalogItemId: S.optional(S.String),
          ItemStatus: S.optional(S.String),
          EC2Capacities: S.optional(__S(31)),
          PowerKva: S.optional(S.Number),
          WeightLbs: S.optional(S.Number),
          SupportedUplinkGbps: S.optional(__S(62)),
          SupportedStorage: S.optional(__S(27)),
          RackScalingType: S.optional(S.String),
        }),
      ).annotate({ identifier: "CatalogItem" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CatalogItem: S.optional(__S(63)) })).annotate({
        identifier: "GetCatalogItemOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connections/{ConnectionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClientPublicKey: S.optional(S.String),
          ServerPublicKey: S.optional(S.String),
          ServerEndpoint: S.optional(S.String),
          ClientTunnelAddress: S.optional(S.String),
          ServerTunnelAddress: S.optional(S.String),
          AllowedIps: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "ConnectionDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConnectionId: S.optional(S.String),
          ConnectionDetails: S.optional(__S(66)),
        }),
      ).annotate({ identifier: "GetConnectionResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ OrderId: S.String.pipe(T.HttpLabel("OrderId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/orders/{OrderId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetOrderInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ OutpostId: S.String.pipe(T.HttpLabel("OutpostId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outposts/{OutpostId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOutpostInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outpost/{OutpostIdentifier}/billing-information" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOutpostBillingInformationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SubscriptionId: S.optional(S.String),
          SubscriptionType: S.optional(S.String),
          SubscriptionStatus: S.optional(S.String),
          OrderIds: S.optional(__S(7)),
          BeginDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Currency: S.optional(S.String),
          MonthlyRecurringPrice: S.optional(S.Number),
          UpfrontPrice: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Subscription" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71));
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Subscriptions: S.optional(__S(72)),
          ContractEndDate: S.optional(S.String),
          PaymentTerm: S.optional(S.String),
          PaymentOption: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetOutpostBillingInformationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OutpostId: S.String.pipe(T.HttpLabel("OutpostId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outposts/{OutpostId}/instanceTypes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOutpostInstanceTypesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ InstanceType: S.optional(S.String), VCPUs: S.optional(S.Number) }),
      ).annotate({ identifier: "InstanceTypeItem" });
    case 4:
      return S.Array(__S(75));
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceTypes: S.optional(__S(76)),
          NextToken: S.optional(S.String),
          OutpostId: S.optional(S.String),
          OutpostArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetOutpostInstanceTypesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
          OrderId: S.optional(S.String).pipe(T.HttpQuery("OrderId")),
          AssetId: S.optional(S.String).pipe(T.HttpQuery("AssetId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outposts/{OutpostIdentifier}/supportedInstanceTypes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOutpostSupportedInstanceTypesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceTypes: S.optional(__S(76)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetOutpostSupportedInstanceTypesOutput",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ OutpostId: S.String.pipe(T.HttpLabel("OutpostId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outposts/{OutpostId}/privateConnectivity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPrivateConnectivityConfigInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ PrivateConnectivityConfig: S.optional(__S(21)) })).annotate(
        {
          identifier: "GetPrivateConnectivityConfigOutput",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ QuoteIdentifier: S.String.pipe(T.HttpLabel("QuoteIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/quotes/{QuoteIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetQuoteInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outpost/{OutpostIdentifier}/renewal-pricing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRenewalPricingInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PricingResult: S.optional(S.String),
          PricingOptions: S.optional(__S(38)),
        }),
      ).annotate({ identifier: "GetRenewalPricingOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ SiteId: S.String.pipe(T.HttpLabel("SiteId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/sites/{SiteId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSiteInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SiteId: S.String.pipe(T.HttpLabel("SiteId")),
          AddressType: S.String.pipe(T.HttpQuery("AddressType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sites/{SiteId}/address" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSiteAddressInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SiteId: S.optional(S.String),
          AddressType: S.optional(S.String),
          Address: S.optional(__S(47)),
        }),
      ).annotate({ identifier: "GetSiteAddressOutput" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
          AssetIdFilter: S.optional(__S(7)).pipe(T.HttpQuery("AssetIdFilter")),
          InstanceTypeFilter: S.optional(__S(7)).pipe(T.HttpQuery("InstanceTypeFilter")),
          AccountIdFilter: S.optional(__S(7)).pipe(T.HttpQuery("AccountIdFilter")),
          AwsServiceFilter: S.optional(__S(27)).pipe(T.HttpQuery("AwsServiceFilter")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outposts/{OutpostIdentifier}/assetInstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetInstancesInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          InstanceType: S.optional(S.String),
          AssetId: S.optional(S.String),
          AccountId: S.optional(S.String),
          AwsServiceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetInstance" });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssetInstances: S.optional(__S(90)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAssetInstancesOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
          HostIdFilter: S.optional(__S(7)).pipe(T.HttpQuery("HostIdFilter")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          StatusFilter: S.optional(__S(27)).pipe(T.HttpQuery("StatusFilter")),
          AssetTypeFilter: S.optional(__S(27)).pipe(T.HttpQuery("AssetTypeFilter")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/outposts/{OutpostIdentifier}/assets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAssetsInput" });
    case 5:
      return S.suspend(() => S.Struct({ InstanceType: S.String, Count: S.Number })).annotate({
        identifier: "AssetInstanceTypeCapacity",
      });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({
          HostId: S.optional(S.String),
          State: S.optional(S.String),
          InstanceFamilies: S.optional(__S(7)),
          InstanceTypeCapacities: S.optional(__S(94)),
          MaxVcpus: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ComputeAttributes" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RackElevation: S.optional(S.Number) })).annotate({
        identifier: "AssetLocation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AssetId: S.optional(S.String),
          RackId: S.optional(S.String),
          AssetType: S.optional(S.String),
          ComputeAttributes: S.optional(__S(95)),
          AssetLocation: S.optional(__S(96)),
        }),
      ).annotate({ identifier: "AssetInfo" });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.suspend(() =>
        S.Struct({ Assets: S.optional(__S(98)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAssetsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
          CapacityTaskId: S.String.pipe(T.HttpLabel("CapacityTaskId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}/blockingInstances",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBlockingInstancesForCapacityTaskInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          AccountId: S.optional(S.String),
          AwsServiceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "BlockingInstance" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          BlockingInstances: S.optional(__S(102)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBlockingInstancesForCapacityTaskOutput",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifierFilter: S.optional(S.String).pipe(
            T.HttpQuery("OutpostIdentifierFilter"),
          ),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          CapacityTaskStatusFilter: S.optional(__S(27)).pipe(
            T.HttpQuery("CapacityTaskStatusFilter"),
          ),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/capacity/tasks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCapacityTasksInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CapacityTaskId: S.optional(S.String),
          OutpostId: S.optional(S.String),
          OrderId: S.optional(S.String),
          AssetId: S.optional(S.String),
          CapacityTaskStatus: S.optional(S.String),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CapacityTaskSummary" });
    case 2:
      return S.Array(__S(105));
    case 3:
      return S.suspend(() =>
        S.Struct({ CapacityTasks: S.optional(__S(106)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCapacityTasksOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ItemClassFilter: S.optional(__S(27)).pipe(T.HttpQuery("ItemClassFilter")),
          SupportedStorageFilter: S.optional(__S(27)).pipe(T.HttpQuery("SupportedStorageFilter")),
          EC2FamilyFilter: S.optional(__S(7)).pipe(T.HttpQuery("EC2FamilyFilter")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/catalog/items" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCatalogItemsInput" });
    case 5:
      return S.Array(__S(63));
    case 6:
      return S.suspend(() =>
        S.Struct({
          CatalogItems: S.optional(__S(109)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListCatalogItemsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OutpostGenerationFilter: S.optional(S.String).pipe(
            T.HttpQuery("OutpostGenerationFilter"),
          ),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/instanceTypes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListOrderableInstanceTypesInput",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FormFactor: S.optional(S.String),
          OutpostGeneration: S.optional(S.String),
        }),
      ).annotate({ identifier: "FormFactorConfig" });
    case 1:
      return S.Array(__S(112));
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceType: S.optional(S.String),
          VCPUs: S.optional(S.Number),
          MemoryInMib: S.optional(S.Number),
          NetworkPerformance: S.optional(S.String),
          FormFactorConfigs: S.optional(__S(113)),
        }),
      ).annotate({ identifier: "DetailedInstanceTypeItem" });
    case 3:
      return S.Array(__S(114));
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstanceTypes: S.optional(__S(115)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOrderableInstanceTypesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifierFilter: S.optional(S.String).pipe(
            T.HttpQuery("OutpostIdentifierFilter"),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/list-orders" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListOrdersInput" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          OutpostId: S.optional(S.String),
          OrderId: S.optional(S.String),
          OrderType: S.optional(S.String),
          Status: S.optional(S.String),
          LineItemCountsByStatus: S.optional(__S(118)),
          OrderSubmissionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OrderFulfilledDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "OrderSummary" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Orders: S.optional(__S(120)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListOrdersOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          LifeCycleStatusFilter: S.optional(__S(7)).pipe(T.HttpQuery("LifeCycleStatusFilter")),
          AvailabilityZoneFilter: S.optional(__S(7)).pipe(T.HttpQuery("AvailabilityZoneFilter")),
          AvailabilityZoneIdFilter: S.optional(__S(7)).pipe(
            T.HttpQuery("AvailabilityZoneIdFilter"),
          ),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/outposts" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListOutpostsInput" });
    case 3:
      return S.Array(__S(16));
    case 4:
      return S.suspend(() =>
        S.Struct({ Outposts: S.optional(__S(123)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListOutpostsOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/quotes" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListQuotesInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          QuoteId: S.optional(S.String),
          AccountId: S.optional(S.String),
          QuoteStatus: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          OutpostArn: S.optional(S.String),
          CountryCode: S.optional(S.String),
          RequestedCapacities: S.optional(__S(24)),
          RequestedConstraints: S.optional(__S(26)),
          RequestedPaymentOptions: S.optional(__S(27)),
          RequestedPaymentTerms: S.optional(__S(27)),
          QuoteOptions: S.optional(__S(40)),
          SubmittedOrderId: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "QuoteSummary" });
    case 7:
      return S.Array(__S(126));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Quotes: S.optional(__S(127)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListQuotesOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          OperatingAddressCountryCodeFilter: S.optional(__S(7)).pipe(
            T.HttpQuery("OperatingAddressCountryCodeFilter"),
          ),
          OperatingAddressStateOrRegionFilter: S.optional(__S(7)).pipe(
            T.HttpQuery("OperatingAddressStateOrRegionFilter"),
          ),
          OperatingAddressCityFilter: S.optional(__S(7)).pipe(
            T.HttpQuery("OperatingAddressCityFilter"),
          ),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/sites" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSitesInput" });
    case 2:
      return S.Array(__S(50));
    case 3:
      return S.suspend(() =>
        S.Struct({ Sites: S.optional(__S(130)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSitesOutput" });
    case 4:
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
    case 5:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(14)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
          OrderId: S.optional(S.String),
          AssetId: S.optional(S.String),
          InstancePools: __S(57),
          InstancesToExclude: S.optional(__S(58)),
          DryRun: S.optional(S.Boolean),
          TaskActionOnBlockingInstances: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/outposts/{OutpostIdentifier}/capacity" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartCapacityTaskInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeviceSerialNumber: S.optional(S.String),
          AssetId: S.String,
          ClientPublicKey: S.String,
          NetworkInterfaceDeviceIndex: S.Number,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connections" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartConnectionRequest" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConnectionId: S.optional(S.String), UnderlayIpAddress: S.optional(S.String) }),
      ).annotate({ identifier: "StartConnectionResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OutpostIdentifier: S.String.pipe(T.HttpLabel("OutpostIdentifier")),
          ValidateOnly: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/outposts/{OutpostIdentifier}/decommission" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartOutpostDecommissionInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          BlockingResourceTypes: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "StartOutpostDecommissionOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: __S(14) }).pipe(
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
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: __S(7).pipe(T.HttpQuery("tagKeys")),
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutpostId: S.String.pipe(T.HttpLabel("OutpostId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          SupportedHardwareType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/outposts/{OutpostId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateOutpostInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          QuoteIdentifier: S.String.pipe(T.HttpLabel("QuoteIdentifier")),
          OutpostIdentifier: S.optional(S.String),
          CountryCode: S.optional(S.String),
          RequestedCapacities: S.optional(__S(24)),
          RequestedConstraints: S.optional(__S(26)),
          RequestedPaymentOptions: S.optional(__S(27)),
          RequestedPaymentTerms: S.optional(__S(27)),
          Description: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/quotes/{QuoteIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateQuoteInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SiteId: S.String.pipe(T.HttpLabel("SiteId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Notes: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/sites/{SiteId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateSiteInput" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SiteId: S.String.pipe(T.HttpLabel("SiteId")),
          AddressType: S.String,
          Address: __S(47),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sites/{SiteId}/address" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSiteAddressInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AddressType: S.optional(S.String), Address: S.optional(__S(47)) }),
      ).annotate({ identifier: "UpdateSiteAddressOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SiteId: S.String.pipe(T.HttpLabel("SiteId")),
          PowerDrawKva: S.optional(S.String),
          PowerPhase: S.optional(S.String),
          PowerConnector: S.optional(S.String),
          PowerFeedDrop: S.optional(S.String),
          UplinkGbps: S.optional(S.String),
          UplinkCount: S.optional(S.String),
          FiberOpticCableType: S.optional(S.String),
          OpticalStandard: S.optional(S.String),
          MaximumSupportedWeightLbs: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/sites/{SiteId}/rackPhysicalProperties" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSiteRackPhysicalPropertiesInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ Site: S.optional(__S(50)) })).annotate({
        identifier: "UpdateSiteRackPhysicalPropertiesOutput",
      });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
  }
}
