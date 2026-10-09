import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Marketplace Discovery",
  serviceShapeName: "AWSMarketplaceDiscovery",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "aws-marketplace" });
const ver = /*@__PURE__*/ T.ServiceVersion("2026-02-05");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://discovery-marketplace-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://discovery-marketplace.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export type Locale = string;
export type ListingId = string;
export interface GetListingInput {
  locale?: string;
  listingId: string;
}
export type ProductId = string;
export type NonEmptyString = string;
export type SellerProfileId = string;
export interface SellerInformation {
  sellerProfileId: string;
  displayName: string;
}
export interface ProductInformation {
  productId: string;
  productName: string;
  manufacturer: SellerInformation;
}
export type OfferId = string;
export type NullableString = string;
export interface OfferInformation {
  offerId: string;
  offerName?: string;
  sellerOfRecord: SellerInformation;
}
export interface ListingAssociatedEntity {
  product?: ProductInformation;
  offer?: OfferInformation;
}
export type ListingAssociatedEntityList = ListingAssociatedEntity[];
export type ListingBadgeType =
  | "AWS_FREE_TIER"
  | "FREE_TRIAL"
  | "DEPLOYED_ON_AWS"
  | "QUICK_LAUNCH"
  | "MULTI_PRODUCT"
  | (string & {});
export interface ListingBadge {
  displayName: string;
  badgeType: ListingBadgeType;
}
export type ListingBadgeList = ListingBadge[];
export type Catalog = string;
export interface Category {
  categoryId: string;
  displayName: string;
}
export type CategoryList = Category[];
export type FulfillmentOptionType =
  | "AMAZON_MACHINE_IMAGE"
  | "API"
  | "CLOUDFORMATION_TEMPLATE"
  | "CONTAINER"
  | "HELM"
  | "EKS_ADD_ON"
  | "EC2_IMAGE_BUILDER_COMPONENT"
  | "DATA_EXCHANGE"
  | "PROFESSIONAL_SERVICES"
  | "SAAS"
  | "SAGEMAKER_ALGORITHM"
  | "SAGEMAKER_MODEL"
  | (string & {});
export interface FulfillmentOptionSummary {
  fulfillmentOptionType: FulfillmentOptionType;
  displayName: string;
}
export type FulfillmentOptionSummaryList = FulfillmentOptionSummary[];
export type HighlightList = string[];
export type URL = string;
export type PricingModelType = "USAGE" | "CONTRACT" | "BYOL" | "FREE" | (string & {});
export interface PricingModel {
  pricingModelType: PricingModelType;
  displayName: string;
}
export type PricingModelList = PricingModel[];
export type PricingUnitType =
  | "USERS"
  | "HOSTS"
  | "BANDWIDTH"
  | "DATA"
  | "TIERS"
  | "REQUESTS"
  | "UNITS"
  | (string & {});
export interface PricingUnit {
  pricingUnitType: PricingUnitType;
  displayName: string;
}
export type PricingUnitList = PricingUnit[];
export interface PromotionalEmbeddedImage {
  title: string;
  url: string;
  description?: string;
}
export interface PromotionalEmbeddedVideo {
  title: string;
  url: string;
  preview: string;
  thumbnail: string;
  description?: string;
}
export type PromotionalMedia =
  | { embeddedImage: PromotionalEmbeddedImage; embeddedVideo?: never }
  | { embeddedImage?: never; embeddedVideo: PromotionalEmbeddedVideo };
export type PromotionalMediaList = PromotionalMedia[];
export type ResourceType = "MANUFACTURER_SUPPORT" | "MANUFACTURER_INSTRUCTIONS" | (string & {});
export type ResourceContentType = "EMAIL" | "PHONE_NUMBER" | "LINK" | "OTHER" | (string & {});
export interface Resource {
  resourceType: ResourceType;
  contentType: ResourceContentType;
  value: string;
  displayName?: string;
}
export type ResourceList = Resource[];
export type ReviewSourceId = "AWS_MARKETPLACE" | (string & {});
export type NonNegativeCount = number;
export interface ReviewSourceSummary {
  sourceName: string;
  sourceId: ReviewSourceId;
  sourceUrl?: string;
  averageRating: string;
  totalReviews: number;
}
export type ReviewSourceSummaryList = ReviewSourceSummary[];
export interface ReviewSummary {
  reviewSourceSummaries: ReviewSourceSummary[];
}
export type SellerEngagementType = "REQUEST_FOR_PRIVATE_OFFER" | "REQUEST_FOR_DEMO" | (string & {});
export type SellerEngagementContentType = "LINK" | (string & {});
export interface SellerEngagement {
  engagementType: SellerEngagementType;
  contentType: SellerEngagementContentType;
  value: string;
}
export type SellerEngagementList = SellerEngagement[];
export interface UseCase {
  description: string;
  displayName: string;
  value: string;
}
export interface UseCaseEntry {
  useCase: UseCase;
}
export type UseCaseList = UseCaseEntry[];
export interface GetListingOutput {
  locale?: string;
  associatedEntities: ListingAssociatedEntity[];
  badges: ListingBadge[];
  catalog: string;
  categories: Category[];
  fulfillmentOptionSummaries: FulfillmentOptionSummary[];
  highlights: string[];
  integrationGuide?: string;
  listingId: string;
  listingName: string;
  logoThumbnailUrl: string;
  longDescription: string;
  pricingModels: PricingModel[];
  pricingUnits: PricingUnit[];
  promotionalMedia: PromotionalMedia[];
  publisher: SellerInformation;
  resources: Resource[];
  reviewSummary?: ReviewSummary;
  sellerEngagements: SellerEngagement[];
  shortDescription: string;
  useCases: UseCaseEntry[];
}
export interface GetOfferInput {
  locale?: string;
  offerId: string;
}
export type OfferSetId = string;
export interface OfferSetInformation {
  offerSetId: string;
  sellerOfRecord: SellerInformation;
}
export interface OfferAssociatedEntity {
  product: ProductInformation;
  offerSet?: OfferSetInformation;
}
export type OfferAssociatedEntityList = OfferAssociatedEntity[];
export type AgreementResourceId = string;
export type PurchaseOptionBadgeType =
  | "PRIVATE_PRICING"
  | "FUTURE_DATED"
  | "REPLACEMENT_OFFER"
  | "AUTO_RENEW"
  | (string & {});
export interface PurchaseOptionBadge {
  displayName: string;
  badgeType: PurchaseOptionBadgeType;
}
export type PurchaseOptionBadgeList = PurchaseOptionBadge[];
export interface GetOfferOutput {
  locale?: string;
  offerId: string;
  catalog: string;
  offerName?: string;
  expirationTime?: Date;
  availableFromTime?: Date;
  sellerOfRecord: SellerInformation;
  associatedEntities: OfferAssociatedEntity[];
  agreementProposalId: string;
  replacementAgreementId?: string;
  pricingModel: PricingModel;
  badges: PurchaseOptionBadge[];
}
export interface GetOfferSetInput {
  locale?: string;
  offerSetId: string;
}
export interface OfferSetAssociatedEntity {
  product: ProductInformation;
  offer: OfferInformation;
}
export type OfferSetAssociatedEntityList = OfferSetAssociatedEntity[];
export interface GetOfferSetOutput {
  locale?: string;
  offerSetId: string;
  catalog: string;
  offerSetName?: string;
  availableFromTime?: Date;
  expirationTime?: Date;
  buyerNotes?: string;
  sellerOfRecord: SellerInformation;
  badges: PurchaseOptionBadge[];
  associatedEntities: OfferSetAssociatedEntity[];
}
export type NextToken = string;
export interface GetOfferTermsInput {
  locale?: string;
  offerId: string;
  maxResults?: number;
  nextToken?: string;
}
export type TermId = string;
export type TermType =
  | "ByolPricingTerm"
  | "ConfigurableUpfrontPricingTerm"
  | "FixedUpfrontPricingTerm"
  | "UsageBasedPricingTerm"
  | "FreeTrialPricingTerm"
  | "LegalTerm"
  | "PaymentScheduleTerm"
  | "RecurringPaymentTerm"
  | "RenewalTerm"
  | "SupportTerm"
  | "ValidityTerm"
  | "VariablePaymentTerm"
  | "NetPaymentTerm"
  | (string & {});
export interface ByolPricingTerm {
  id: string;
  type: TermType;
}
export type CurrencyCode = string;
export type SelectorType = "Duration" | (string & {});
export type BoundedString = string;
export interface Selector {
  type: SelectorType;
  value: string;
}
export type RateCardConstraintType = "Allowed" | "Disallowed" | (string & {});
export interface Constraints {
  multipleDimensionSelection: RateCardConstraintType;
  quantityConfiguration: RateCardConstraintType;
}
export type DimensionLabelType = "Region" | "SagemakerOption" | (string & {});
export interface DimensionLabel {
  labelType: DimensionLabelType;
  labelValue: string;
  displayName?: string;
}
export type DimensionLabelList = DimensionLabel[];
export interface RateCardItem {
  dimensionKey: string;
  displayName: string;
  description?: string;
  dimensionLabels?: DimensionLabel[];
  unit: string;
  price: string;
}
export type RateCardList = RateCardItem[];
export interface ConfigurableUpfrontRateCardItem {
  selector: Selector;
  constraints: Constraints;
  rateCard: RateCardItem[];
}
export type ConfigurableUpfrontRateCardList = ConfigurableUpfrontRateCardItem[];
export interface ConfigurableUpfrontPricingTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  rateCards?: ConfigurableUpfrontRateCardItem[];
}
export interface GrantItem {
  dimensionKey: string;
  displayName: string;
  description?: string;
  dimensionLabels?: DimensionLabel[];
  unit: string;
  maxQuantity?: number;
}
export type GrantList = GrantItem[];
export interface FixedUpfrontPricingTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  duration?: string;
  price: string;
  grants: GrantItem[];
}
export interface FreeTrialPricingTerm {
  id: string;
  type: TermType;
  duration?: string;
  grants: GrantItem[];
}
export type LegalDocumentType =
  | "CustomEula"
  | "CustomDsa"
  | "EnterpriseEula"
  | "StandardEula"
  | "StandardDsa"
  | (string & {});
export interface DocumentItem {
  type: LegalDocumentType;
  url: string;
  version?: string;
}
export type DocumentList = DocumentItem[];
export interface LegalTerm {
  id: string;
  type: TermType;
  documents: DocumentItem[];
}
export interface ScheduleItem {
  chargeDate: Date;
  chargeAmount: string;
}
export type ScheduleList = ScheduleItem[];
export interface PaymentScheduleTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  schedule: ScheduleItem[];
}
export type BillingPeriodType = "Monthly" | (string & {});
export interface RecurringPaymentTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  billingPeriod: BillingPeriodType;
  price: string;
}
export interface FixedPercentage {
  percentageValue: string;
}
export interface PercentageRange {
  minimumValue: string;
  maximumValue: string;
  defaultValue: string;
}
export type PriceIncrease =
  | { fixedPercentage: FixedPercentage; percentageRange?: never }
  | { fixedPercentage?: never; percentageRange: PercentageRange };
export interface PaymentScheduleEntry {
  chargeDateOffset: string;
  chargePercentage: string;
  dayOfMonth?: number;
}
export type PaymentScheduleEntryList = PaymentScheduleEntry[];
export interface PaymentScheduleTermTemplate {
  schedule: PaymentScheduleEntry[];
}
export type TermTemplate = { paymentScheduleTermTemplate: PaymentScheduleTermTemplate };
export type TermTemplateList = TermTemplate[];
export interface RenewalTerm {
  id: string;
  type: TermType;
  maxRenewals?: number;
  lockoutPeriod?: string;
  adjustmentDeadline?: string;
  priceIncrease?: PriceIncrease;
  termTemplates?: TermTemplate[];
}
export interface SupportTerm {
  id: string;
  type: TermType;
  refundPolicy: string;
}
export interface UsageBasedRateCardItem {
  rateCard: RateCardItem[];
}
export type UsageBasedRateCardList = UsageBasedRateCardItem[];
export interface UsageBasedPricingTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  rateCards: UsageBasedRateCardItem[];
}
export interface ValidityTerm {
  id: string;
  type: TermType;
  agreementDuration?: string;
  agreementEndDate?: Date;
  agreementStartDate?: Date;
}
export interface VariablePaymentTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  maxTotalChargeAmount: string;
}
export interface NetPaymentTerm {
  id: string;
  type: TermType;
  paymentDuePeriod: string;
}
export type OfferTerm =
  | {
      byolPricingTerm: ByolPricingTerm;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm: ConfigurableUpfrontPricingTerm;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm: FixedUpfrontPricingTerm;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm: FreeTrialPricingTerm;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm: LegalTerm;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm: PaymentScheduleTerm;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm: RecurringPaymentTerm;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm: RenewalTerm;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm: SupportTerm;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm: UsageBasedPricingTerm;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm: ValidityTerm;
      variablePaymentTerm?: never;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm: VariablePaymentTerm;
      netPaymentTerm?: never;
    }
  | {
      byolPricingTerm?: never;
      configurableUpfrontPricingTerm?: never;
      fixedUpfrontPricingTerm?: never;
      freeTrialPricingTerm?: never;
      legalTerm?: never;
      paymentScheduleTerm?: never;
      recurringPaymentTerm?: never;
      renewalTerm?: never;
      supportTerm?: never;
      usageBasedPricingTerm?: never;
      validityTerm?: never;
      variablePaymentTerm?: never;
      netPaymentTerm: NetPaymentTerm;
    };
export type OfferTermsList = OfferTerm[];
export interface GetOfferTermsOutput {
  locale?: string;
  offerTerms: OfferTerm[];
  nextToken?: string;
}
export interface GetProductInput {
  locale?: string;
  productId: string;
}
export type DeployedOnAwsStatus = "DEPLOYED" | "NOT_DEPLOYED" | "NOT_APPLICABLE" | (string & {});
export interface GetProductOutput {
  locale?: string;
  productId: string;
  catalog: string;
  productName: string;
  manufacturer: SellerInformation;
  deployedOnAws: DeployedOnAwsStatus;
  shortDescription: string;
  longDescription: string;
  logoThumbnailUrl: string;
  fulfillmentOptionSummaries: FulfillmentOptionSummary[];
  categories: Category[];
  highlights: string[];
  promotionalMedia: PromotionalMedia[];
  resources: Resource[];
  sellerEngagements: SellerEngagement[];
  listingId: string;
}
export interface ListFulfillmentOptionsInput {
  locale?: string;
  productId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface AmazonMachineImageOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
  operatingSystemVersion?: string;
}
export type AmazonMachineImageOperatingSystemList = AmazonMachineImageOperatingSystem[];
export type AmazonMachineImageCidrIpAddressList = string[];
export interface AmazonMachineImageSecurityGroup {
  protocol: string;
  fromPort: number;
  toPort: number;
  cidrIpAddresses: string[];
}
export type AmazonMachineImageSecurityGroupList = AmazonMachineImageSecurityGroup[];
export interface AmazonMachineImageRecommendation {
  instanceType: string;
  securityGroups?: AmazonMachineImageSecurityGroup[];
}
export type AmazonMachineImageEbsVolumeTypeList = string[];
export interface AmazonMachineImageEbsVolume {
  volumeTypes: string[];
  iops?: number;
}
export interface AmazonMachineImageFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionName: string;
  fulfillmentOptionVersion?: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  operatingSystems: AmazonMachineImageOperatingSystem[];
  recommendation?: AmazonMachineImageRecommendation;
  releaseNotes?: string;
  usageInstructions?: string;
  availableFromTime?: Date;
  accessUrlTemplate?: string;
  architecture: string;
  amiAlias?: string;
  ebsVolume?: AmazonMachineImageEbsVolume;
  shortDescription?: string;
}
export interface AwsSupportedService {
  supportedServiceType: string;
  displayName: string;
  description: string;
}
export type AwsSupportedServiceList = AwsSupportedService[];
export interface ApiFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  usageInstructions?: string;
  awsSupportedServices: AwsSupportedService[];
}
export interface CloudFormationFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionName: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  releaseNotes?: string;
  usageInstructions?: string;
  availableFromTime?: Date;
  shortDescription?: string;
  longDescription?: string;
}
export interface ContainerOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
}
export type ContainerOperatingSystemList = ContainerOperatingSystem[];
export interface ContainerFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionName: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  operatingSystems?: ContainerOperatingSystem[];
  awsSupportedServices?: AwsSupportedService[];
  releaseNotes?: string;
  usageInstructions?: string;
}
export interface HelmOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
}
export type HelmOperatingSystemList = HelmOperatingSystem[];
export interface HelmFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionName: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  operatingSystems?: HelmOperatingSystem[];
  releaseNotes?: string;
  awsSupportedServices?: AwsSupportedService[];
  usageInstructions?: string;
}
export interface EksAddOnOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
}
export type EksAddOnOperatingSystemList = EksAddOnOperatingSystem[];
export interface EksAddOnFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionName: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  operatingSystems?: EksAddOnOperatingSystem[];
  releaseNotes?: string;
  usageInstructions?: string;
  awsSupportedServices?: AwsSupportedService[];
}
export interface Ec2ImageBuilderComponentFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionName: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  operatingSystems?: ContainerOperatingSystem[];
  awsSupportedServices?: AwsSupportedService[];
  releaseNotes?: string;
  usageInstructions?: string;
}
export interface DataArtifact {
  description?: string;
  resourceArn?: string;
  resourceType: string;
  dataClassification: string;
}
export type DataArtifactList = DataArtifact[];
export interface DataExchangeFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  dataArtifacts?: DataArtifact[];
}
export interface ProfessionalServicesFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
}
export type SaasQuickLaunchStatus = "ENABLED" | "DISABLED" | (string & {});
export interface SaasFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentUrl?: string;
  usageInstructions?: string;
  availableFromTime?: Date;
  launchUrl?: string;
  quickLaunch: SaasQuickLaunchStatus;
}
export interface SageMakerAlgorithmRecommendation {
  recommendedBatchTransformInstanceType: string;
  recommendedRealtimeInferenceInstanceType?: string;
  recommendedTrainingInstanceType: string;
}
export interface SageMakerAlgorithmFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  releaseNotes?: string;
  usageInstructions?: string;
  recommendation?: SageMakerAlgorithmRecommendation;
}
export interface SageMakerModelRecommendation {
  recommendedBatchTransformInstanceType: string;
  recommendedRealtimeInferenceInstanceType?: string;
}
export type SageMakerModelContentTypeList = string[];
export type SageMakerModelResponseMimeTypeList = string[];
export interface SageMakerModelFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  releaseNotes?: string;
  usageInstructions?: string;
  recommendation?: SageMakerModelRecommendation;
  supportedContentTypes?: string[];
  supportedResponseMimeTypes?: string[];
}
export type FulfillmentOption =
  | {
      amazonMachineImageFulfillmentOption: AmazonMachineImageFulfillmentOption;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption: ApiFulfillmentOption;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption: CloudFormationFulfillmentOption;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption: ContainerFulfillmentOption;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption: HelmFulfillmentOption;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption: EksAddOnFulfillmentOption;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption: Ec2ImageBuilderComponentFulfillmentOption;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption: DataExchangeFulfillmentOption;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption: ProfessionalServicesFulfillmentOption;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption: SaasFulfillmentOption;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption: SageMakerAlgorithmFulfillmentOption;
      sageMakerModelFulfillmentOption?: never;
    }
  | {
      amazonMachineImageFulfillmentOption?: never;
      apiFulfillmentOption?: never;
      cloudFormationFulfillmentOption?: never;
      containerFulfillmentOption?: never;
      helmFulfillmentOption?: never;
      eksAddOnFulfillmentOption?: never;
      ec2ImageBuilderComponentFulfillmentOption?: never;
      dataExchangeFulfillmentOption?: never;
      professionalServicesFulfillmentOption?: never;
      saasFulfillmentOption?: never;
      sageMakerAlgorithmFulfillmentOption?: never;
      sageMakerModelFulfillmentOption: SageMakerModelFulfillmentOption;
    };
export type FulfillmentOptionsList = FulfillmentOption[];
export interface ListFulfillmentOptionsOutput {
  locale?: string;
  fulfillmentOptions: FulfillmentOption[];
  nextToken?: string;
}
export type PurchaseOptionFilterType =
  | "PRODUCT_ID"
  | "SELLER_OF_RECORD_PROFILE_ID"
  | "PURCHASE_OPTION_TYPE"
  | "VISIBILITY_SCOPE"
  | "AVAILABILITY_STATUS"
  | (string & {});
export type PurchaseOptionFilterValue = string;
export type PurchaseOptionFilterValueList = string[];
export interface PurchaseOptionFilter {
  filterType: PurchaseOptionFilterType;
  filterValues: string[];
}
export type PurchaseOptionFilterList = PurchaseOptionFilter[];
export type MaxResults = number;
export interface ListPurchaseOptionsInput {
  locale?: string;
  filters?: PurchaseOptionFilter[];
  maxResults?: number;
  nextToken?: string;
}
export type PurchaseOptionType = "OFFER" | "OFFERSET" | (string & {});
export interface PurchaseOptionAssociatedEntity {
  product: ProductInformation;
  offer: OfferInformation;
  offerSet?: OfferSetInformation;
}
export type PurchaseOptionAssociatedEntityList = PurchaseOptionAssociatedEntity[];
export interface PurchaseOptionSummary {
  purchaseOptionId: string;
  catalog: string;
  purchaseOptionType: PurchaseOptionType;
  purchaseOptionName?: string;
  availableFromTime?: Date;
  expirationTime?: Date;
  sellerOfRecord: SellerInformation;
  badges?: PurchaseOptionBadge[];
  associatedEntities: PurchaseOptionAssociatedEntity[];
}
export type PurchaseOptionSummaryList = PurchaseOptionSummary[];
export interface ListPurchaseOptionsOutput {
  purchaseOptions?: PurchaseOptionSummary[];
  nextToken?: string;
}
export type SearchText = string;
export type SearchFilterType =
  | "MIN_AVERAGE_CUSTOMER_RATING"
  | "MAX_AVERAGE_CUSTOMER_RATING"
  | "CATEGORY"
  | "PUBLISHER"
  | "FULFILLMENT_OPTION_TYPE"
  | "PRICING_MODEL"
  | "PRICING_UNIT"
  | "DEPLOYED_ON_AWS"
  | "NUMBER_OF_PRODUCTS"
  | (string & {});
export type SearchFilterValue = string;
export type SearchFilterValueList = string[];
export interface SearchFilter {
  filterType: SearchFilterType;
  filterValues: string[];
}
export type SearchFilterList = SearchFilter[];
export type SearchFacetType =
  | "AVERAGE_CUSTOMER_RATING"
  | "CATEGORY"
  | "PUBLISHER"
  | "FULFILLMENT_OPTION_TYPE"
  | "PRICING_MODEL"
  | "PRICING_UNIT"
  | "DEPLOYED_ON_AWS"
  | "NUMBER_OF_PRODUCTS"
  | (string & {});
export type FacetTypeList = SearchFacetType[];
export interface SearchFacetsInput {
  locale?: string;
  searchText?: string;
  filters?: SearchFilter[];
  facetTypes?: SearchFacetType[];
  nextToken?: string;
}
export interface ListingFacet {
  value: string;
  displayName: string;
  parent?: string;
  count: number;
}
export type ListingFacetList = ListingFacet[];
export type TypeToFacetMap = { [key in SearchFacetType]?: ListingFacet[] };
export interface SearchFacetsOutput {
  totalResults: number;
  listingFacets: { [key: string]: ListingFacet[] | undefined };
  nextToken?: string;
}
export type SearchListingsSortBy = "RELEVANCE" | "AVERAGE_CUSTOMER_RATING" | (string & {});
export type SearchListingsSortOrder = "DESCENDING" | "ASCENDING" | (string & {});
export interface SearchListingsInput {
  locale?: string;
  searchText?: string;
  filters?: SearchFilter[];
  maxResults?: number;
  sortBy?: SearchListingsSortBy;
  sortOrder?: SearchListingsSortOrder;
  nextToken?: string;
}
export interface ListingSummaryAssociatedEntity {
  product?: ProductInformation;
}
export type ListingSummaryAssociatedEntityList = ListingSummaryAssociatedEntity[];
export interface ListingSummary {
  listingId: string;
  listingName: string;
  publisher: SellerInformation;
  fulfillmentOptionSummaries: FulfillmentOptionSummary[];
  catalog: string;
  shortDescription: string;
  logoThumbnailUrl: string;
  categories: Category[];
  badges: ListingBadge[];
  reviewSummary: ReviewSummary;
  pricingModels: PricingModel[];
  pricingUnits: PricingUnit[];
  associatedEntities: ListingSummaryAssociatedEntity[];
}
export type ListingSummaryList = ListingSummary[];
export interface SearchListingsOutput {
  totalResults: number;
  listingSummaries: ListingSummary[];
  nextToken?: string;
}
export type ExceptionMessage = string;
export type GetListingError = ResourceNotFoundException | CommonErrors;
/**
 * Provides details about a listing, such as descriptions, badges, categories, pricing model summaries, reviews, and associated products and offers.
 */
export const getListing: API.OperationMethod<
  GetListingInput,
  GetListingOutput,
  GetListingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<GetListingInput>,
  output: __S(31) as any as S.Schema<GetListingOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetListing",
}));

export type GetOfferError = ResourceNotFoundException | CommonErrors;
/**
 * Provides details about an offer, such as the pricing model, seller of record, availability dates, badges, and associated products.
 */
export const getOffer: API.OperationMethod<
  GetOfferInput,
  GetOfferOutput,
  GetOfferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<GetOfferInput>,
  output: __S(36) as any as S.Schema<GetOfferOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOffer",
}));

export type GetOfferSetError = ResourceNotFoundException | CommonErrors;
/**
 * Provides details about an offer set, which is a bundle of offers across multiple products. Includes the seller, availability dates, buyer notes, and associated product-offer pairs.
 */
export const getOfferSet: API.OperationMethod<
  GetOfferSetInput,
  GetOfferSetOutput,
  GetOfferSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<GetOfferSetInput>,
  output: __S(40) as any as S.Schema<GetOfferSetOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOfferSet",
}));

export type GetOfferTermsError = ResourceNotFoundException | CommonErrors;
/**
 * Returns the terms attached to an offer, such as pricing terms (usage-based, contract, BYOL, free trial), legal terms, payment schedules, validity terms, support terms, and renewal terms.
 */
export const getOfferTerms: API.PaginatedOperationMethod<
  GetOfferTermsInput,
  GetOfferTermsOutput,
  GetOfferTermsError,
  Credentials | HttpClient.HttpClient,
  OfferTerm
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(41) as any as S.Schema<GetOfferTermsInput>,
  output: __S(81) as any as S.Schema<GetOfferTermsOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOfferTerms",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "offerTerms",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetProductError = ResourceNotFoundException | CommonErrors;
/**
 * Provides details about a product, such as descriptions, highlights, categories, fulfillment option summaries, promotional media, and seller engagement options.
 */
export const getProduct: API.OperationMethod<
  GetProductInput,
  GetProductOutput,
  GetProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<GetProductInput>,
  output: __S(83) as any as S.Schema<GetProductOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProduct",
}));

export type ListFulfillmentOptionsError = ResourceNotFoundException | CommonErrors;
/**
 * Returns the fulfillment options available for a product, including deployment details such as version information, operating systems, usage instructions, and release notes.
 */
export const listFulfillmentOptions: API.PaginatedOperationMethod<
  ListFulfillmentOptionsInput,
  ListFulfillmentOptionsOutput,
  ListFulfillmentOptionsError,
  Credentials | HttpClient.HttpClient,
  FulfillmentOption
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(84) as any as S.Schema<ListFulfillmentOptionsInput>,
  output: __S(112) as any as S.Schema<ListFulfillmentOptionsOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFulfillmentOptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "fulfillmentOptions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPurchaseOptionsError = CommonErrors;
/**
 * Returns the purchase options (offers and offer sets) available to the buyer. You can filter results by product, seller, purchase option type, visibility scope, and availability status.
 *
 * You must include at least one of the following filters in the request: a `PRODUCT_ID` filter to specify the product for which to retrieve purchase options, or a `VISIBILITY_SCOPE` filter to retrieve purchase options by visibility.
 */
export const listPurchaseOptions: API.PaginatedOperationMethod<
  ListPurchaseOptionsInput,
  ListPurchaseOptionsOutput,
  ListPurchaseOptionsError,
  Credentials | HttpClient.HttpClient,
  PurchaseOptionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(115) as any as S.Schema<ListPurchaseOptionsInput>,
  output: __S(120) as any as S.Schema<ListPurchaseOptionsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPurchaseOptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "purchaseOptions",
  } as const,
})) as any;

export type SearchFacetsError = CommonErrors;
/**
 * Returns available facet values for filtering listings, such as categories, pricing models, fulfillment option types, publishers, and customer ratings. Each facet value includes a count of matching listings.
 */
export const searchFacets: API.PaginatedOperationMethod<
  SearchFacetsInput,
  SearchFacetsOutput,
  SearchFacetsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(124) as any as S.Schema<SearchFacetsInput>,
  output: __S(128) as any as S.Schema<SearchFacetsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchFacets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "listingFacets",
  } as const,
})) as any;

export type SearchListingsError = CommonErrors;
/**
 * Returns a list of product listings based on search criteria and filters. You can search by keyword, filter by category, pricing model, fulfillment type, and other attributes, and sort results by relevance or customer rating.
 */
export const searchListings: API.PaginatedOperationMethod<
  SearchListingsInput,
  SearchListingsOutput,
  SearchListingsError,
  Credentials | HttpClient.HttpClient,
  ListingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(129) as any as S.Schema<SearchListingsInput>,
  output: __S(134) as any as S.Schema<SearchListingsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchListings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "listingSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ locale: S.optional(S.String), listingId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/getListing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetListingInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ sellerProfileId: S.String, displayName: S.String }),
      ).annotate({ identifier: "SellerInformation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ productId: S.String, productName: S.String, manufacturer: __S(1) }),
      ).annotate({ identifier: "ProductInformation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          offerId: S.String,
          offerName: S.optional(S.String),
          sellerOfRecord: __S(1),
        }),
      ).annotate({ identifier: "OfferInformation" });
    case 4:
      return S.suspend(() =>
        S.Struct({ product: S.optional(__S(2)), offer: S.optional(__S(3)) }),
      ).annotate({ identifier: "ListingAssociatedEntity" });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() => S.Struct({ displayName: S.String, badgeType: S.String })).annotate({
        identifier: "ListingBadge",
      });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ categoryId: S.String, displayName: S.String })).annotate({
        identifier: "Category",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({ fulfillmentOptionType: S.String, displayName: S.String }),
      ).annotate({ identifier: "FulfillmentOptionSummary" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ pricingModelType: S.String, displayName: S.String }),
      ).annotate({ identifier: "PricingModel" });
    case 6:
      return S.Array(__S(13));
    case 7:
      return S.suspend(() =>
        S.Struct({ pricingUnitType: S.String, displayName: S.String }),
      ).annotate({ identifier: "PricingUnit" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15));
    case 1:
      return S.suspend(() =>
        S.Struct({ title: S.String, url: S.String, description: S.optional(S.String) }),
      ).annotate({ identifier: "PromotionalEmbeddedImage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          url: S.String,
          preview: S.String,
          thumbnail: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "PromotionalEmbeddedVideo" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ embeddedImage: __S(17) }),
        /*@__PURE__*/ S.Struct({ embeddedVideo: __S(18) }),
      ]);
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.String,
          contentType: S.String,
          value: S.String,
          displayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          sourceName: S.String,
          sourceId: S.String,
          sourceUrl: S.optional(S.String),
          averageRating: S.String,
          totalReviews: S.Number,
        }),
      ).annotate({ identifier: "ReviewSourceSummary" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() => S.Struct({ reviewSourceSummaries: __S(24) })).annotate({
        identifier: "ReviewSummary",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          engagementType: S.String,
          contentType: S.String,
          value: S.String,
        }),
      ).annotate({ identifier: "SellerEngagement" });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({ description: S.String, displayName: S.String, value: S.String }),
      ).annotate({ identifier: "UseCase" });
    case 5:
      return S.suspend(() => S.Struct({ useCase: __S(28) })).annotate({
        identifier: "UseCaseEntry",
      });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          associatedEntities: __S(5),
          badges: __S(7),
          catalog: S.String,
          categories: __S(9),
          fulfillmentOptionSummaries: __S(11),
          highlights: __S(12),
          integrationGuide: S.optional(S.String),
          listingId: S.String,
          listingName: S.String,
          logoThumbnailUrl: S.String,
          longDescription: S.String,
          pricingModels: __S(14),
          pricingUnits: __S(16),
          promotionalMedia: __S(20),
          publisher: __S(1),
          resources: __S(22),
          reviewSummary: S.optional(__S(25)),
          sellerEngagements: __S(27),
          shortDescription: S.String,
          useCases: __S(30),
        }),
      ).annotate({ identifier: "GetListingOutput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ locale: S.optional(S.String), offerId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/getOffer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOfferInput" });
    case 1:
      return S.suspend(() => S.Struct({ offerSetId: S.String, sellerOfRecord: __S(1) })).annotate({
        identifier: "OfferSetInformation",
      });
    case 2:
      return S.suspend(() => S.Struct({ product: __S(2), offerSet: S.optional(__S(33)) })).annotate(
        { identifier: "OfferAssociatedEntity" },
      );
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          offerId: S.String,
          catalog: S.String,
          offerName: S.optional(S.String),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sellerOfRecord: __S(1),
          associatedEntities: __S(35),
          agreementProposalId: S.String,
          replacementAgreementId: S.optional(S.String),
          pricingModel: __S(13),
          badges: __S(7),
        }),
      ).annotate({ identifier: "GetOfferOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ locale: S.optional(S.String), offerSetId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/getOfferSet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOfferSetInput" });
    case 6:
      return S.suspend(() => S.Struct({ product: __S(2), offer: __S(3) })).annotate({
        identifier: "OfferSetAssociatedEntity",
      });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          offerSetId: S.String,
          catalog: S.String,
          offerSetName: S.optional(S.String),
          availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          buyerNotes: S.optional(S.String),
          sellerOfRecord: __S(1),
          badges: __S(7),
          associatedEntities: __S(39),
        }),
      ).annotate({ identifier: "GetOfferSetOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          offerId: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/getOfferTerms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOfferTermsInput" });
    case 2:
      return S.suspend(() => S.Struct({ id: S.String, type: S.String })).annotate({
        identifier: "ByolPricingTerm",
      });
    case 3:
      return S.suspend(() => S.Struct({ type: S.String, value: S.String })).annotate({
        identifier: "Selector",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          multipleDimensionSelection: S.String,
          quantityConfiguration: S.String,
        }),
      ).annotate({ identifier: "Constraints" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          labelType: S.String,
          labelValue: S.String,
          displayName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DimensionLabel" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          dimensionKey: S.String,
          displayName: S.String,
          description: S.optional(S.String),
          dimensionLabels: S.optional(__S(46)),
          unit: S.String,
          price: S.String,
        }),
      ).annotate({ identifier: "RateCardItem" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() =>
        S.Struct({ selector: __S(43), constraints: __S(44), rateCard: __S(48) }),
      ).annotate({
        identifier: "ConfigurableUpfrontRateCardItem",
      });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          currencyCode: S.String,
          rateCards: S.optional(__S(50)),
        }),
      ).annotate({
        identifier: "ConfigurableUpfrontPricingTerm",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dimensionKey: S.String,
          displayName: S.String,
          description: S.optional(S.String),
          dimensionLabels: S.optional(__S(46)),
          unit: S.String,
          maxQuantity: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GrantItem" });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          currencyCode: S.String,
          duration: S.optional(S.String),
          price: S.String,
          grants: __S(53),
        }),
      ).annotate({ identifier: "FixedUpfrontPricingTerm" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          duration: S.optional(S.String),
          grants: __S(53),
        }),
      ).annotate({ identifier: "FreeTrialPricingTerm" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ type: S.String, url: S.String, version: S.optional(S.String) }),
      ).annotate({ identifier: "DocumentItem" });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String, type: S.String, documents: __S(57) }),
      ).annotate({ identifier: "LegalTerm" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          chargeDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          chargeAmount: S.String,
        }),
      ).annotate({ identifier: "ScheduleItem" });
    case 4:
      return S.Array(__S(59));
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String, type: S.String, currencyCode: S.String, schedule: __S(60) }),
      ).annotate({ identifier: "PaymentScheduleTerm" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          currencyCode: S.String,
          billingPeriod: S.String,
          price: S.String,
        }),
      ).annotate({ identifier: "RecurringPaymentTerm" });
    case 7:
      return S.suspend(() => S.Struct({ percentageValue: S.String })).annotate({
        identifier: "FixedPercentage",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ minimumValue: S.String, maximumValue: S.String, defaultValue: S.String }),
      ).annotate({ identifier: "PercentageRange" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ fixedPercentage: __S(63) }),
        /*@__PURE__*/ S.Struct({ percentageRange: __S(64) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          chargeDateOffset: S.String,
          chargePercentage: S.String,
          dayOfMonth: S.optional(S.Number),
        }),
      ).annotate({ identifier: "PaymentScheduleEntry" });
    case 3:
      return S.Array(__S(66));
    case 4:
      return S.suspend(() => S.Struct({ schedule: __S(67) })).annotate({
        identifier: "PaymentScheduleTermTemplate",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ paymentScheduleTermTemplate: __S(68) })]);
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          maxRenewals: S.optional(S.Number),
          lockoutPeriod: S.optional(S.String),
          adjustmentDeadline: S.optional(S.String),
          priceIncrease: S.optional(__S(65)),
          termTemplates: S.optional(__S(70)),
        }),
      ).annotate({ identifier: "RenewalTerm" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String, type: S.String, refundPolicy: S.String }),
      ).annotate({ identifier: "SupportTerm" });
    case 1:
      return S.suspend(() => S.Struct({ rateCard: __S(48) })).annotate({
        identifier: "UsageBasedRateCardItem",
      });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          currencyCode: S.String,
          rateCards: __S(74),
        }),
      ).annotate({ identifier: "UsageBasedPricingTerm" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          agreementDuration: S.optional(S.String),
          agreementEndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          agreementStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ValidityTerm" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          type: S.String,
          currencyCode: S.String,
          maxTotalChargeAmount: S.String,
        }),
      ).annotate({ identifier: "VariablePaymentTerm" });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String, type: S.String, paymentDuePeriod: S.String }),
      ).annotate({ identifier: "NetPaymentTerm" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ byolPricingTerm: __S(42) }),
        /*@__PURE__*/ S.Struct({ configurableUpfrontPricingTerm: __S(51) }),
        /*@__PURE__*/ S.Struct({ fixedUpfrontPricingTerm: __S(54) }),
        /*@__PURE__*/ S.Struct({ freeTrialPricingTerm: __S(55) }),
        /*@__PURE__*/ S.Struct({ legalTerm: __S(58) }),
        /*@__PURE__*/ S.Struct({ paymentScheduleTerm: __S(61) }),
        /*@__PURE__*/ S.Struct({ recurringPaymentTerm: __S(62) }),
        /*@__PURE__*/ S.Struct({ renewalTerm: __S(71) }),
        /*@__PURE__*/ S.Struct({ supportTerm: __S(72) }),
        /*@__PURE__*/ S.Struct({ usageBasedPricingTerm: __S(75) }),
        /*@__PURE__*/ S.Struct({ validityTerm: __S(76) }),
        /*@__PURE__*/ S.Struct({ variablePaymentTerm: __S(77) }),
        /*@__PURE__*/ S.Struct({ netPaymentTerm: __S(78) }),
      ]);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79));
    case 1:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          offerTerms: __S(80),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetOfferTermsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ locale: S.optional(S.String), productId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/getProduct" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProductInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          productId: S.String,
          catalog: S.String,
          productName: S.String,
          manufacturer: __S(1),
          deployedOnAws: S.String,
          shortDescription: S.String,
          longDescription: S.String,
          logoThumbnailUrl: S.String,
          fulfillmentOptionSummaries: __S(11),
          categories: __S(9),
          highlights: __S(12),
          promotionalMedia: __S(20),
          resources: __S(22),
          sellerEngagements: __S(27),
          listingId: S.String,
        }),
      ).annotate({ identifier: "GetProductOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          productId: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/listFulfillmentOptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFulfillmentOptionsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          operatingSystemFamilyName: S.String,
          operatingSystemName: S.String,
          operatingSystemVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AmazonMachineImageOperatingSystem",
      });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() =>
        S.Struct({
          protocol: S.String,
          fromPort: S.Number,
          toPort: S.Number,
          cidrIpAddresses: __S(12),
        }),
      ).annotate({
        identifier: "AmazonMachineImageSecurityGroup",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceType: S.String,
          securityGroups: S.optional(__S(88)),
        }),
      ).annotate({
        identifier: "AmazonMachineImageRecommendation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ volumeTypes: __S(12), iops: S.optional(S.Number) }),
      ).annotate({
        identifier: "AmazonMachineImageEbsVolume",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          operatingSystems: __S(86),
          recommendation: S.optional(__S(89)),
          releaseNotes: S.optional(S.String),
          usageInstructions: S.optional(S.String),
          availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          accessUrlTemplate: S.optional(S.String),
          architecture: S.String,
          amiAlias: S.optional(S.String),
          ebsVolume: S.optional(__S(90)),
          shortDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AmazonMachineImageFulfillmentOption",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ supportedServiceType: S.String, displayName: S.String, description: S.String }),
      ).annotate({ identifier: "AwsSupportedService" });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          usageInstructions: S.optional(S.String),
          awsSupportedServices: __S(93),
        }),
      ).annotate({ identifier: "ApiFulfillmentOption" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionName: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          releaseNotes: S.optional(S.String),
          usageInstructions: S.optional(S.String),
          availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          shortDescription: S.optional(S.String),
          longDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudFormationFulfillmentOption",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ operatingSystemFamilyName: S.String, operatingSystemName: S.String }),
      ).annotate({ identifier: "ContainerOperatingSystem" });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionName: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          operatingSystems: S.optional(__S(97)),
          awsSupportedServices: S.optional(__S(93)),
          releaseNotes: S.optional(S.String),
          usageInstructions: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ContainerFulfillmentOption",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionName: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          operatingSystems: S.optional(__S(97)),
          releaseNotes: S.optional(S.String),
          awsSupportedServices: S.optional(__S(93)),
          usageInstructions: S.optional(S.String),
        }),
      ).annotate({ identifier: "HelmFulfillmentOption" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionName: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          operatingSystems: S.optional(__S(97)),
          releaseNotes: S.optional(S.String),
          usageInstructions: S.optional(S.String),
          awsSupportedServices: S.optional(__S(93)),
        }),
      ).annotate({
        identifier: "EksAddOnFulfillmentOption",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          resourceArn: S.optional(S.String),
          resourceType: S.String,
          dataClassification: S.String,
        }),
      ).annotate({ identifier: "DataArtifact" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          dataArtifacts: S.optional(__S(102)),
        }),
      ).annotate({
        identifier: "DataExchangeFulfillmentOption",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
        }),
      ).annotate({
        identifier: "ProfessionalServicesFulfillmentOption",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentUrl: S.optional(S.String),
          usageInstructions: S.optional(S.String),
          availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          launchUrl: S.optional(S.String),
          quickLaunch: S.String,
        }),
      ).annotate({ identifier: "SaasFulfillmentOption" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          recommendedBatchTransformInstanceType: S.String,
          recommendedRealtimeInferenceInstanceType: S.optional(S.String),
          recommendedTrainingInstanceType: S.String,
        }),
      ).annotate({
        identifier: "SageMakerAlgorithmRecommendation",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          releaseNotes: S.optional(S.String),
          usageInstructions: S.optional(S.String),
          recommendation: S.optional(__S(106)),
        }),
      ).annotate({
        identifier: "SageMakerAlgorithmFulfillmentOption",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          recommendedBatchTransformInstanceType: S.String,
          recommendedRealtimeInferenceInstanceType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SageMakerModelRecommendation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          fulfillmentOptionId: S.String,
          fulfillmentOptionType: S.String,
          fulfillmentOptionDisplayName: S.String,
          fulfillmentOptionVersion: S.optional(S.String),
          releaseNotes: S.optional(S.String),
          usageInstructions: S.optional(S.String),
          recommendation: S.optional(__S(108)),
          supportedContentTypes: S.optional(__S(12)),
          supportedResponseMimeTypes: S.optional(__S(12)),
        }),
      ).annotate({
        identifier: "SageMakerModelFulfillmentOption",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          amazonMachineImageFulfillmentOption: __S(91),
        }),
        /*@__PURE__*/ S.Struct({ apiFulfillmentOption: __S(94) }),
        /*@__PURE__*/ S.Struct({
          cloudFormationFulfillmentOption: __S(95),
        }),
        /*@__PURE__*/ S.Struct({ containerFulfillmentOption: __S(98) }),
        /*@__PURE__*/ S.Struct({ helmFulfillmentOption: __S(99) }),
        /*@__PURE__*/ S.Struct({ eksAddOnFulfillmentOption: __S(100) }),
        /*@__PURE__*/ S.Struct({
          ec2ImageBuilderComponentFulfillmentOption: __S(98),
        }),
        /*@__PURE__*/ S.Struct({ dataExchangeFulfillmentOption: __S(103) }),
        /*@__PURE__*/ S.Struct({
          professionalServicesFulfillmentOption: __S(104),
        }),
        /*@__PURE__*/ S.Struct({ saasFulfillmentOption: __S(105) }),
        /*@__PURE__*/ S.Struct({
          sageMakerAlgorithmFulfillmentOption: __S(107),
        }),
        /*@__PURE__*/ S.Struct({
          sageMakerModelFulfillmentOption: __S(109),
        }),
      ]);
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          fulfillmentOptions: __S(111),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFulfillmentOptionsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          filterType: S.String,
          filterValues: __S(12),
        }),
      ).annotate({ identifier: "PurchaseOptionFilter" });
    case 2:
      return S.Array(__S(113));
    case 3:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          filters: S.optional(__S(114)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/listPurchaseOptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPurchaseOptionsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          product: __S(2),
          offer: __S(3),
          offerSet: S.optional(__S(33)),
        }),
      ).annotate({
        identifier: "PurchaseOptionAssociatedEntity",
      });
    case 5:
      return S.Array(__S(116));
    case 6:
      return S.suspend(() =>
        S.Struct({
          purchaseOptionId: S.String,
          catalog: S.String,
          purchaseOptionType: S.String,
          purchaseOptionName: S.optional(S.String),
          availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sellerOfRecord: __S(1),
          badges: S.optional(__S(7)),
          associatedEntities: __S(117),
        }),
      ).annotate({ identifier: "PurchaseOptionSummary" });
    case 7:
      return S.Array(__S(118));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          purchaseOptions: S.optional(__S(119)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPurchaseOptionsOutput",
      });
    case 1:
      return S.suspend(() => S.Struct({ filterType: S.String, filterValues: __S(12) })).annotate({
        identifier: "SearchFilter",
      });
    case 2:
      return S.Array(__S(121));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          searchText: S.optional(S.String),
          filters: S.optional(__S(122)),
          facetTypes: S.optional(__S(123)),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/searchFacets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchFacetsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          value: S.String,
          displayName: S.String,
          parent: S.optional(S.String),
          count: S.Number,
        }),
      ).annotate({ identifier: "ListingFacet" });
    case 6:
      return S.Array(__S(125));
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(126).pipe(S.optional));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          totalResults: S.Number,
          listingFacets: __S(127),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "SearchFacetsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          searchText: S.optional(S.String),
          filters: S.optional(__S(122)),
          maxResults: S.optional(S.Number),
          sortBy: S.optional(S.String),
          sortOrder: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2026-02-05/searchListings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchListingsInput" });
    case 2:
      return S.suspend(() => S.Struct({ product: S.optional(__S(2)) })).annotate({
        identifier: "ListingSummaryAssociatedEntity",
      });
    case 3:
      return S.Array(__S(130));
    case 4:
      return S.suspend(() =>
        S.Struct({
          listingId: S.String,
          listingName: S.String,
          publisher: __S(1),
          fulfillmentOptionSummaries: __S(11),
          catalog: S.String,
          shortDescription: S.String,
          logoThumbnailUrl: S.String,
          categories: __S(9),
          badges: __S(7),
          reviewSummary: __S(25),
          pricingModels: __S(14),
          pricingUnits: __S(16),
          associatedEntities: __S(131),
        }),
      ).annotate({ identifier: "ListingSummary" });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() =>
        S.Struct({
          totalResults: S.Number,
          listingSummaries: __S(133),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "SearchListingsOutput" });
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
  }
}
