import * as API from "@distilled.cloud/core/api";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
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
const GetListingInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ locale: S.optional(S.String), listingId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/2026-02-05/getListing" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetListingInput" }) as any as S.Schema<GetListingInput>;
export type ProductId = string;
export type NonEmptyString = string;
export type SellerProfileId = string;
export interface SellerInformation {
  sellerProfileId: string;
  displayName: string;
}
const SellerInformation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ sellerProfileId: S.String, displayName: S.String }),
).annotate({ identifier: "SellerInformation" }) as any as S.Schema<SellerInformation>;
export interface ProductInformation {
  productId: string;
  productName: string;
  manufacturer: SellerInformation;
}
const ProductInformation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ productId: S.String, productName: S.String, manufacturer: SellerInformation }),
).annotate({ identifier: "ProductInformation" }) as any as S.Schema<ProductInformation>;
export type OfferId = string;
export type NullableString = string;
export interface OfferInformation {
  offerId: string;
  offerName?: string;
  sellerOfRecord: SellerInformation;
}
const OfferInformation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    offerId: S.String,
    offerName: S.optional(S.String),
    sellerOfRecord: SellerInformation,
  }),
).annotate({ identifier: "OfferInformation" }) as any as S.Schema<OfferInformation>;
export interface ListingAssociatedEntity {
  product?: ProductInformation;
  offer?: OfferInformation;
}
const ListingAssociatedEntity = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ product: S.optional(ProductInformation), offer: S.optional(OfferInformation) }),
).annotate({ identifier: "ListingAssociatedEntity" }) as any as S.Schema<ListingAssociatedEntity>;
export type ListingAssociatedEntityList = ListingAssociatedEntity[];
const ListingAssociatedEntityList = /*@__PURE__*/ S.Array(ListingAssociatedEntity);
export type ListingBadgeType =
  | "AWS_FREE_TIER"
  | "FREE_TRIAL"
  | "DEPLOYED_ON_AWS"
  | "QUICK_LAUNCH"
  | "MULTI_PRODUCT"
  | (string & {});
const ListingBadgeType = S.String;

export interface ListingBadge {
  displayName: string;
  badgeType: ListingBadgeType;
}
const ListingBadge = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ displayName: S.String, badgeType: ListingBadgeType }),
).annotate({ identifier: "ListingBadge" }) as any as S.Schema<ListingBadge>;
export type ListingBadgeList = ListingBadge[];
const ListingBadgeList = /*@__PURE__*/ S.Array(ListingBadge);
export type Catalog = string;
export interface Category {
  categoryId: string;
  displayName: string;
}
const Category = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ categoryId: S.String, displayName: S.String }),
).annotate({ identifier: "Category" }) as any as S.Schema<Category>;
export type CategoryList = Category[];
const CategoryList = /*@__PURE__*/ S.Array(Category);
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
const FulfillmentOptionType = S.String;

export interface FulfillmentOptionSummary {
  fulfillmentOptionType: FulfillmentOptionType;
  displayName: string;
}
const FulfillmentOptionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ fulfillmentOptionType: FulfillmentOptionType, displayName: S.String }),
).annotate({ identifier: "FulfillmentOptionSummary" }) as any as S.Schema<FulfillmentOptionSummary>;
export type FulfillmentOptionSummaryList = FulfillmentOptionSummary[];
const FulfillmentOptionSummaryList = /*@__PURE__*/ S.Array(FulfillmentOptionSummary);
export type HighlightList = string[];
const HighlightList = /*@__PURE__*/ S.Array(S.String);
export type URL = string;
export type PricingModelType = "USAGE" | "CONTRACT" | "BYOL" | "FREE" | (string & {});
const PricingModelType = S.String;

export interface PricingModel {
  pricingModelType: PricingModelType;
  displayName: string;
}
const PricingModel = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ pricingModelType: PricingModelType, displayName: S.String }),
).annotate({ identifier: "PricingModel" }) as any as S.Schema<PricingModel>;
export type PricingModelList = PricingModel[];
const PricingModelList = /*@__PURE__*/ S.Array(PricingModel);
export type PricingUnitType =
  | "USERS"
  | "HOSTS"
  | "BANDWIDTH"
  | "DATA"
  | "TIERS"
  | "REQUESTS"
  | "UNITS"
  | (string & {});
const PricingUnitType = S.String;

export interface PricingUnit {
  pricingUnitType: PricingUnitType;
  displayName: string;
}
const PricingUnit = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ pricingUnitType: PricingUnitType, displayName: S.String }),
).annotate({ identifier: "PricingUnit" }) as any as S.Schema<PricingUnit>;
export type PricingUnitList = PricingUnit[];
const PricingUnitList = /*@__PURE__*/ S.Array(PricingUnit);
export interface PromotionalEmbeddedImage {
  title: string;
  url: string;
  description?: string;
}
const PromotionalEmbeddedImage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ title: S.String, url: S.String, description: S.optional(S.String) }),
).annotate({ identifier: "PromotionalEmbeddedImage" }) as any as S.Schema<PromotionalEmbeddedImage>;
export interface PromotionalEmbeddedVideo {
  title: string;
  url: string;
  preview: string;
  thumbnail: string;
  description?: string;
}
const PromotionalEmbeddedVideo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    title: S.String,
    url: S.String,
    preview: S.String,
    thumbnail: S.String,
    description: S.optional(S.String),
  }),
).annotate({ identifier: "PromotionalEmbeddedVideo" }) as any as S.Schema<PromotionalEmbeddedVideo>;
export type PromotionalMedia =
  | { embeddedImage: PromotionalEmbeddedImage; embeddedVideo?: never }
  | { embeddedImage?: never; embeddedVideo: PromotionalEmbeddedVideo };
const PromotionalMedia = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ embeddedImage: PromotionalEmbeddedImage }),
  /*@__PURE__*/ S.Struct({ embeddedVideo: PromotionalEmbeddedVideo }),
]);
export type PromotionalMediaList = PromotionalMedia[];
const PromotionalMediaList = /*@__PURE__*/ S.Array(PromotionalMedia);
export type ResourceType = "MANUFACTURER_SUPPORT" | "MANUFACTURER_INSTRUCTIONS" | (string & {});
const ResourceType = S.String;

export type ResourceContentType = "EMAIL" | "PHONE_NUMBER" | "LINK" | "OTHER" | (string & {});
const ResourceContentType = S.String;

export interface Resource {
  resourceType: ResourceType;
  contentType: ResourceContentType;
  value: string;
  displayName?: string;
}
const Resource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: ResourceType,
    contentType: ResourceContentType,
    value: S.String,
    displayName: S.optional(S.String),
  }),
).annotate({ identifier: "Resource" }) as any as S.Schema<Resource>;
export type ResourceList = Resource[];
const ResourceList = /*@__PURE__*/ S.Array(Resource);
export type ReviewSourceId = "AWS_MARKETPLACE" | (string & {});
const ReviewSourceId = S.String;

export type NonNegativeCount = number;
export interface ReviewSourceSummary {
  sourceName: string;
  sourceId: ReviewSourceId;
  sourceUrl?: string;
  averageRating: string;
  totalReviews: number;
}
const ReviewSourceSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    sourceName: S.String,
    sourceId: ReviewSourceId,
    sourceUrl: S.optional(S.String),
    averageRating: S.String,
    totalReviews: S.Number,
  }),
).annotate({ identifier: "ReviewSourceSummary" }) as any as S.Schema<ReviewSourceSummary>;
export type ReviewSourceSummaryList = ReviewSourceSummary[];
const ReviewSourceSummaryList = /*@__PURE__*/ S.Array(ReviewSourceSummary);
export interface ReviewSummary {
  reviewSourceSummaries: ReviewSourceSummary[];
}
const ReviewSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ reviewSourceSummaries: ReviewSourceSummaryList }),
).annotate({ identifier: "ReviewSummary" }) as any as S.Schema<ReviewSummary>;
export type SellerEngagementType = "REQUEST_FOR_PRIVATE_OFFER" | "REQUEST_FOR_DEMO" | (string & {});
const SellerEngagementType = S.String;

export type SellerEngagementContentType = "LINK" | (string & {});
const SellerEngagementContentType = S.String;

export interface SellerEngagement {
  engagementType: SellerEngagementType;
  contentType: SellerEngagementContentType;
  value: string;
}
const SellerEngagement = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    engagementType: SellerEngagementType,
    contentType: SellerEngagementContentType,
    value: S.String,
  }),
).annotate({ identifier: "SellerEngagement" }) as any as S.Schema<SellerEngagement>;
export type SellerEngagementList = SellerEngagement[];
const SellerEngagementList = /*@__PURE__*/ S.Array(SellerEngagement);
export interface UseCase {
  description: string;
  displayName: string;
  value: string;
}
const UseCase = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ description: S.String, displayName: S.String, value: S.String }),
).annotate({ identifier: "UseCase" }) as any as S.Schema<UseCase>;
export interface UseCaseEntry {
  useCase: UseCase;
}
const UseCaseEntry = /*@__PURE__*/ S.suspend(() => S.Struct({ useCase: UseCase })).annotate({
  identifier: "UseCaseEntry",
}) as any as S.Schema<UseCaseEntry>;
export type UseCaseList = UseCaseEntry[];
const UseCaseList = /*@__PURE__*/ S.Array(UseCaseEntry);
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
const GetListingOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    associatedEntities: ListingAssociatedEntityList,
    badges: ListingBadgeList,
    catalog: S.String,
    categories: CategoryList,
    fulfillmentOptionSummaries: FulfillmentOptionSummaryList,
    highlights: HighlightList,
    integrationGuide: S.optional(S.String),
    listingId: S.String,
    listingName: S.String,
    logoThumbnailUrl: S.String,
    longDescription: S.String,
    pricingModels: PricingModelList,
    pricingUnits: PricingUnitList,
    promotionalMedia: PromotionalMediaList,
    publisher: SellerInformation,
    resources: ResourceList,
    reviewSummary: S.optional(ReviewSummary),
    sellerEngagements: SellerEngagementList,
    shortDescription: S.String,
    useCases: UseCaseList,
  }),
).annotate({ identifier: "GetListingOutput" }) as any as S.Schema<GetListingOutput>;
export interface GetOfferInput {
  locale?: string;
  offerId: string;
}
const GetOfferInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ locale: S.optional(S.String), offerId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/2026-02-05/getOffer" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetOfferInput" }) as any as S.Schema<GetOfferInput>;
export type OfferSetId = string;
export interface OfferSetInformation {
  offerSetId: string;
  sellerOfRecord: SellerInformation;
}
const OfferSetInformation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ offerSetId: S.String, sellerOfRecord: SellerInformation }),
).annotate({ identifier: "OfferSetInformation" }) as any as S.Schema<OfferSetInformation>;
export interface OfferAssociatedEntity {
  product: ProductInformation;
  offerSet?: OfferSetInformation;
}
const OfferAssociatedEntity = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ product: ProductInformation, offerSet: S.optional(OfferSetInformation) }),
).annotate({ identifier: "OfferAssociatedEntity" }) as any as S.Schema<OfferAssociatedEntity>;
export type OfferAssociatedEntityList = OfferAssociatedEntity[];
const OfferAssociatedEntityList = /*@__PURE__*/ S.Array(OfferAssociatedEntity);
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
const PurchaseOptionBadgeList = ListingBadgeList as any as S.Schema<PurchaseOptionBadgeList>;
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
const GetOfferOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    offerId: S.String,
    catalog: S.String,
    offerName: S.optional(S.String),
    expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    sellerOfRecord: SellerInformation,
    associatedEntities: OfferAssociatedEntityList,
    agreementProposalId: S.String,
    replacementAgreementId: S.optional(S.String),
    pricingModel: PricingModel,
    badges: PurchaseOptionBadgeList,
  }),
).annotate({ identifier: "GetOfferOutput" }) as any as S.Schema<GetOfferOutput>;
export interface GetOfferSetInput {
  locale?: string;
  offerSetId: string;
}
const GetOfferSetInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ locale: S.optional(S.String), offerSetId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/2026-02-05/getOfferSet" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetOfferSetInput" }) as any as S.Schema<GetOfferSetInput>;
export interface OfferSetAssociatedEntity {
  product: ProductInformation;
  offer: OfferInformation;
}
const OfferSetAssociatedEntity = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ product: ProductInformation, offer: OfferInformation }),
).annotate({ identifier: "OfferSetAssociatedEntity" }) as any as S.Schema<OfferSetAssociatedEntity>;
export type OfferSetAssociatedEntityList = OfferSetAssociatedEntity[];
const OfferSetAssociatedEntityList = /*@__PURE__*/ S.Array(OfferSetAssociatedEntity);
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
const GetOfferSetOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    offerSetId: S.String,
    catalog: S.String,
    offerSetName: S.optional(S.String),
    availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    buyerNotes: S.optional(S.String),
    sellerOfRecord: SellerInformation,
    badges: PurchaseOptionBadgeList,
    associatedEntities: OfferSetAssociatedEntityList,
  }),
).annotate({ identifier: "GetOfferSetOutput" }) as any as S.Schema<GetOfferSetOutput>;
export type NextToken = string;
export interface GetOfferTermsInput {
  locale?: string;
  offerId: string;
  maxResults?: number;
  nextToken?: string;
}
const GetOfferTermsInput = /*@__PURE__*/ S.suspend(() =>
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
).annotate({ identifier: "GetOfferTermsInput" }) as any as S.Schema<GetOfferTermsInput>;
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
const TermType = S.String;

export interface ByolPricingTerm {
  id: string;
  type: TermType;
}
const ByolPricingTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, type: TermType }),
).annotate({ identifier: "ByolPricingTerm" }) as any as S.Schema<ByolPricingTerm>;
export type CurrencyCode = string;
export type SelectorType = "Duration" | (string & {});
const SelectorType = S.String;

export type BoundedString = string;
export interface Selector {
  type: SelectorType;
  value: string;
}
const Selector = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: SelectorType, value: S.String }),
).annotate({ identifier: "Selector" }) as any as S.Schema<Selector>;
export type RateCardConstraintType = "Allowed" | "Disallowed" | (string & {});
const RateCardConstraintType = S.String;

export interface Constraints {
  multipleDimensionSelection: RateCardConstraintType;
  quantityConfiguration: RateCardConstraintType;
}
const Constraints = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    multipleDimensionSelection: RateCardConstraintType,
    quantityConfiguration: RateCardConstraintType,
  }),
).annotate({ identifier: "Constraints" }) as any as S.Schema<Constraints>;
export type DimensionLabelType = "Region" | "SagemakerOption" | (string & {});
const DimensionLabelType = S.String;

export interface DimensionLabel {
  labelType: DimensionLabelType;
  labelValue: string;
  displayName?: string;
}
const DimensionLabel = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    labelType: DimensionLabelType,
    labelValue: S.String,
    displayName: S.optional(S.String),
  }),
).annotate({ identifier: "DimensionLabel" }) as any as S.Schema<DimensionLabel>;
export type DimensionLabelList = DimensionLabel[];
const DimensionLabelList = /*@__PURE__*/ S.Array(DimensionLabel);
export interface RateCardItem {
  dimensionKey: string;
  displayName: string;
  description?: string;
  dimensionLabels?: DimensionLabel[];
  unit: string;
  price: string;
}
const RateCardItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    dimensionKey: S.String,
    displayName: S.String,
    description: S.optional(S.String),
    dimensionLabels: S.optional(DimensionLabelList),
    unit: S.String,
    price: S.String,
  }),
).annotate({ identifier: "RateCardItem" }) as any as S.Schema<RateCardItem>;
export type RateCardList = RateCardItem[];
const RateCardList = /*@__PURE__*/ S.Array(RateCardItem);
export interface ConfigurableUpfrontRateCardItem {
  selector: Selector;
  constraints: Constraints;
  rateCard: RateCardItem[];
}
const ConfigurableUpfrontRateCardItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ selector: Selector, constraints: Constraints, rateCard: RateCardList }),
).annotate({
  identifier: "ConfigurableUpfrontRateCardItem",
}) as any as S.Schema<ConfigurableUpfrontRateCardItem>;
export type ConfigurableUpfrontRateCardList = ConfigurableUpfrontRateCardItem[];
const ConfigurableUpfrontRateCardList = /*@__PURE__*/ S.Array(ConfigurableUpfrontRateCardItem);
export interface ConfigurableUpfrontPricingTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  rateCards?: ConfigurableUpfrontRateCardItem[];
}
const ConfigurableUpfrontPricingTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    currencyCode: S.String,
    rateCards: S.optional(ConfigurableUpfrontRateCardList),
  }),
).annotate({
  identifier: "ConfigurableUpfrontPricingTerm",
}) as any as S.Schema<ConfigurableUpfrontPricingTerm>;
export interface GrantItem {
  dimensionKey: string;
  displayName: string;
  description?: string;
  dimensionLabels?: DimensionLabel[];
  unit: string;
  maxQuantity?: number;
}
const GrantItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    dimensionKey: S.String,
    displayName: S.String,
    description: S.optional(S.String),
    dimensionLabels: S.optional(DimensionLabelList),
    unit: S.String,
    maxQuantity: S.optional(S.Number),
  }),
).annotate({ identifier: "GrantItem" }) as any as S.Schema<GrantItem>;
export type GrantList = GrantItem[];
const GrantList = /*@__PURE__*/ S.Array(GrantItem);
export interface FixedUpfrontPricingTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  duration?: string;
  price: string;
  grants: GrantItem[];
}
const FixedUpfrontPricingTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    currencyCode: S.String,
    duration: S.optional(S.String),
    price: S.String,
    grants: GrantList,
  }),
).annotate({ identifier: "FixedUpfrontPricingTerm" }) as any as S.Schema<FixedUpfrontPricingTerm>;
export interface FreeTrialPricingTerm {
  id: string;
  type: TermType;
  duration?: string;
  grants: GrantItem[];
}
const FreeTrialPricingTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, type: TermType, duration: S.optional(S.String), grants: GrantList }),
).annotate({ identifier: "FreeTrialPricingTerm" }) as any as S.Schema<FreeTrialPricingTerm>;
export type LegalDocumentType =
  | "CustomEula"
  | "CustomDsa"
  | "EnterpriseEula"
  | "StandardEula"
  | "StandardDsa"
  | (string & {});
const LegalDocumentType = S.String;

export interface DocumentItem {
  type: LegalDocumentType;
  url: string;
  version?: string;
}
const DocumentItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: LegalDocumentType, url: S.String, version: S.optional(S.String) }),
).annotate({ identifier: "DocumentItem" }) as any as S.Schema<DocumentItem>;
export type DocumentList = DocumentItem[];
const DocumentList = /*@__PURE__*/ S.Array(DocumentItem);
export interface LegalTerm {
  id: string;
  type: TermType;
  documents: DocumentItem[];
}
const LegalTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, type: TermType, documents: DocumentList }),
).annotate({ identifier: "LegalTerm" }) as any as S.Schema<LegalTerm>;
export interface ScheduleItem {
  chargeDate: Date;
  chargeAmount: string;
}
const ScheduleItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ chargeDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")), chargeAmount: S.String }),
).annotate({ identifier: "ScheduleItem" }) as any as S.Schema<ScheduleItem>;
export type ScheduleList = ScheduleItem[];
const ScheduleList = /*@__PURE__*/ S.Array(ScheduleItem);
export interface PaymentScheduleTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  schedule: ScheduleItem[];
}
const PaymentScheduleTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, type: TermType, currencyCode: S.String, schedule: ScheduleList }),
).annotate({ identifier: "PaymentScheduleTerm" }) as any as S.Schema<PaymentScheduleTerm>;
export type BillingPeriodType = "Monthly" | (string & {});
const BillingPeriodType = S.String;

export interface RecurringPaymentTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  billingPeriod: BillingPeriodType;
  price: string;
}
const RecurringPaymentTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    currencyCode: S.String,
    billingPeriod: BillingPeriodType,
    price: S.String,
  }),
).annotate({ identifier: "RecurringPaymentTerm" }) as any as S.Schema<RecurringPaymentTerm>;
export interface FixedPercentage {
  percentageValue: string;
}
const FixedPercentage = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ percentageValue: S.String }),
).annotate({ identifier: "FixedPercentage" }) as any as S.Schema<FixedPercentage>;
export interface PercentageRange {
  minimumValue: string;
  maximumValue: string;
  defaultValue: string;
}
const PercentageRange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ minimumValue: S.String, maximumValue: S.String, defaultValue: S.String }),
).annotate({ identifier: "PercentageRange" }) as any as S.Schema<PercentageRange>;
export type PriceIncrease =
  | { fixedPercentage: FixedPercentage; percentageRange?: never }
  | { fixedPercentage?: never; percentageRange: PercentageRange };
const PriceIncrease = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ fixedPercentage: FixedPercentage }),
  /*@__PURE__*/ S.Struct({ percentageRange: PercentageRange }),
]);
export interface PaymentScheduleEntry {
  chargeDateOffset: string;
  chargePercentage: string;
  dayOfMonth?: number;
}
const PaymentScheduleEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    chargeDateOffset: S.String,
    chargePercentage: S.String,
    dayOfMonth: S.optional(S.Number),
  }),
).annotate({ identifier: "PaymentScheduleEntry" }) as any as S.Schema<PaymentScheduleEntry>;
export type PaymentScheduleEntryList = PaymentScheduleEntry[];
const PaymentScheduleEntryList = /*@__PURE__*/ S.Array(PaymentScheduleEntry);
export interface PaymentScheduleTermTemplate {
  schedule: PaymentScheduleEntry[];
}
const PaymentScheduleTermTemplate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ schedule: PaymentScheduleEntryList }),
).annotate({
  identifier: "PaymentScheduleTermTemplate",
}) as any as S.Schema<PaymentScheduleTermTemplate>;
export type TermTemplate = { paymentScheduleTermTemplate: PaymentScheduleTermTemplate };
const TermTemplate = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ paymentScheduleTermTemplate: PaymentScheduleTermTemplate }),
]);
export type TermTemplateList = TermTemplate[];
const TermTemplateList = /*@__PURE__*/ S.Array(TermTemplate);
export interface RenewalTerm {
  id: string;
  type: TermType;
  maxRenewals?: number;
  lockoutPeriod?: string;
  adjustmentDeadline?: string;
  priceIncrease?: PriceIncrease;
  termTemplates?: TermTemplate[];
}
const RenewalTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    maxRenewals: S.optional(S.Number),
    lockoutPeriod: S.optional(S.String),
    adjustmentDeadline: S.optional(S.String),
    priceIncrease: S.optional(PriceIncrease),
    termTemplates: S.optional(TermTemplateList),
  }),
).annotate({ identifier: "RenewalTerm" }) as any as S.Schema<RenewalTerm>;
export interface SupportTerm {
  id: string;
  type: TermType;
  refundPolicy: string;
}
const SupportTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, type: TermType, refundPolicy: S.String }),
).annotate({ identifier: "SupportTerm" }) as any as S.Schema<SupportTerm>;
export interface UsageBasedRateCardItem {
  rateCard: RateCardItem[];
}
const UsageBasedRateCardItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ rateCard: RateCardList }),
).annotate({ identifier: "UsageBasedRateCardItem" }) as any as S.Schema<UsageBasedRateCardItem>;
export type UsageBasedRateCardList = UsageBasedRateCardItem[];
const UsageBasedRateCardList = /*@__PURE__*/ S.Array(UsageBasedRateCardItem);
export interface UsageBasedPricingTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  rateCards: UsageBasedRateCardItem[];
}
const UsageBasedPricingTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    currencyCode: S.String,
    rateCards: UsageBasedRateCardList,
  }),
).annotate({ identifier: "UsageBasedPricingTerm" }) as any as S.Schema<UsageBasedPricingTerm>;
export interface ValidityTerm {
  id: string;
  type: TermType;
  agreementDuration?: string;
  agreementEndDate?: Date;
  agreementStartDate?: Date;
}
const ValidityTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    agreementDuration: S.optional(S.String),
    agreementEndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    agreementStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "ValidityTerm" }) as any as S.Schema<ValidityTerm>;
export interface VariablePaymentTerm {
  id: string;
  type: TermType;
  currencyCode: string;
  maxTotalChargeAmount: string;
}
const VariablePaymentTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    type: TermType,
    currencyCode: S.String,
    maxTotalChargeAmount: S.String,
  }),
).annotate({ identifier: "VariablePaymentTerm" }) as any as S.Schema<VariablePaymentTerm>;
export interface NetPaymentTerm {
  id: string;
  type: TermType;
  paymentDuePeriod: string;
}
const NetPaymentTerm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, type: TermType, paymentDuePeriod: S.String }),
).annotate({ identifier: "NetPaymentTerm" }) as any as S.Schema<NetPaymentTerm>;
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
const OfferTerm = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ byolPricingTerm: ByolPricingTerm }),
  /*@__PURE__*/ S.Struct({ configurableUpfrontPricingTerm: ConfigurableUpfrontPricingTerm }),
  /*@__PURE__*/ S.Struct({ fixedUpfrontPricingTerm: FixedUpfrontPricingTerm }),
  /*@__PURE__*/ S.Struct({ freeTrialPricingTerm: FreeTrialPricingTerm }),
  /*@__PURE__*/ S.Struct({ legalTerm: LegalTerm }),
  /*@__PURE__*/ S.Struct({ paymentScheduleTerm: PaymentScheduleTerm }),
  /*@__PURE__*/ S.Struct({ recurringPaymentTerm: RecurringPaymentTerm }),
  /*@__PURE__*/ S.Struct({ renewalTerm: RenewalTerm }),
  /*@__PURE__*/ S.Struct({ supportTerm: SupportTerm }),
  /*@__PURE__*/ S.Struct({ usageBasedPricingTerm: UsageBasedPricingTerm }),
  /*@__PURE__*/ S.Struct({ validityTerm: ValidityTerm }),
  /*@__PURE__*/ S.Struct({ variablePaymentTerm: VariablePaymentTerm }),
  /*@__PURE__*/ S.Struct({ netPaymentTerm: NetPaymentTerm }),
]);
export type OfferTermsList = OfferTerm[];
const OfferTermsList = /*@__PURE__*/ S.Array(OfferTerm);
export interface GetOfferTermsOutput {
  locale?: string;
  offerTerms: OfferTerm[];
  nextToken?: string;
}
const GetOfferTermsOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    offerTerms: OfferTermsList,
    nextToken: S.optional(S.String),
  }),
).annotate({ identifier: "GetOfferTermsOutput" }) as any as S.Schema<GetOfferTermsOutput>;
export interface GetProductInput {
  locale?: string;
  productId: string;
}
const GetProductInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ locale: S.optional(S.String), productId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/2026-02-05/getProduct" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetProductInput" }) as any as S.Schema<GetProductInput>;
export type DeployedOnAwsStatus = "DEPLOYED" | "NOT_DEPLOYED" | "NOT_APPLICABLE" | (string & {});
const DeployedOnAwsStatus = S.String;

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
const GetProductOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    productId: S.String,
    catalog: S.String,
    productName: S.String,
    manufacturer: SellerInformation,
    deployedOnAws: DeployedOnAwsStatus,
    shortDescription: S.String,
    longDescription: S.String,
    logoThumbnailUrl: S.String,
    fulfillmentOptionSummaries: FulfillmentOptionSummaryList,
    categories: CategoryList,
    highlights: HighlightList,
    promotionalMedia: PromotionalMediaList,
    resources: ResourceList,
    sellerEngagements: SellerEngagementList,
    listingId: S.String,
  }),
).annotate({ identifier: "GetProductOutput" }) as any as S.Schema<GetProductOutput>;
export interface ListFulfillmentOptionsInput {
  locale?: string;
  productId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListFulfillmentOptionsInput = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<ListFulfillmentOptionsInput>;
export interface AmazonMachineImageOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
  operatingSystemVersion?: string;
}
const AmazonMachineImageOperatingSystem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    operatingSystemFamilyName: S.String,
    operatingSystemName: S.String,
    operatingSystemVersion: S.optional(S.String),
  }),
).annotate({
  identifier: "AmazonMachineImageOperatingSystem",
}) as any as S.Schema<AmazonMachineImageOperatingSystem>;
export type AmazonMachineImageOperatingSystemList = AmazonMachineImageOperatingSystem[];
const AmazonMachineImageOperatingSystemList = /*@__PURE__*/ S.Array(
  AmazonMachineImageOperatingSystem,
);
export type AmazonMachineImageCidrIpAddressList = string[];
const AmazonMachineImageCidrIpAddressList =
  HighlightList as any as S.Schema<AmazonMachineImageCidrIpAddressList>;
export interface AmazonMachineImageSecurityGroup {
  protocol: string;
  fromPort: number;
  toPort: number;
  cidrIpAddresses: string[];
}
const AmazonMachineImageSecurityGroup = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    protocol: S.String,
    fromPort: S.Number,
    toPort: S.Number,
    cidrIpAddresses: AmazonMachineImageCidrIpAddressList,
  }),
).annotate({
  identifier: "AmazonMachineImageSecurityGroup",
}) as any as S.Schema<AmazonMachineImageSecurityGroup>;
export type AmazonMachineImageSecurityGroupList = AmazonMachineImageSecurityGroup[];
const AmazonMachineImageSecurityGroupList = /*@__PURE__*/ S.Array(AmazonMachineImageSecurityGroup);
export interface AmazonMachineImageRecommendation {
  instanceType: string;
  securityGroups?: AmazonMachineImageSecurityGroup[];
}
const AmazonMachineImageRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    instanceType: S.String,
    securityGroups: S.optional(AmazonMachineImageSecurityGroupList),
  }),
).annotate({
  identifier: "AmazonMachineImageRecommendation",
}) as any as S.Schema<AmazonMachineImageRecommendation>;
export type AmazonMachineImageEbsVolumeTypeList = string[];
const AmazonMachineImageEbsVolumeTypeList =
  HighlightList as any as S.Schema<AmazonMachineImageEbsVolumeTypeList>;
export interface AmazonMachineImageEbsVolume {
  volumeTypes: string[];
  iops?: number;
}
const AmazonMachineImageEbsVolume = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ volumeTypes: AmazonMachineImageEbsVolumeTypeList, iops: S.optional(S.Number) }),
).annotate({
  identifier: "AmazonMachineImageEbsVolume",
}) as any as S.Schema<AmazonMachineImageEbsVolume>;
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
const AmazonMachineImageFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionName: S.String,
    fulfillmentOptionVersion: S.optional(S.String),
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    operatingSystems: AmazonMachineImageOperatingSystemList,
    recommendation: S.optional(AmazonMachineImageRecommendation),
    releaseNotes: S.optional(S.String),
    usageInstructions: S.optional(S.String),
    availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    accessUrlTemplate: S.optional(S.String),
    architecture: S.String,
    amiAlias: S.optional(S.String),
    ebsVolume: S.optional(AmazonMachineImageEbsVolume),
    shortDescription: S.optional(S.String),
  }),
).annotate({
  identifier: "AmazonMachineImageFulfillmentOption",
}) as any as S.Schema<AmazonMachineImageFulfillmentOption>;
export interface AwsSupportedService {
  supportedServiceType: string;
  displayName: string;
  description: string;
}
const AwsSupportedService = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ supportedServiceType: S.String, displayName: S.String, description: S.String }),
).annotate({ identifier: "AwsSupportedService" }) as any as S.Schema<AwsSupportedService>;
export type AwsSupportedServiceList = AwsSupportedService[];
const AwsSupportedServiceList = /*@__PURE__*/ S.Array(AwsSupportedService);
export interface ApiFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  usageInstructions?: string;
  awsSupportedServices: AwsSupportedService[];
}
const ApiFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    usageInstructions: S.optional(S.String),
    awsSupportedServices: AwsSupportedServiceList,
  }),
).annotate({ identifier: "ApiFulfillmentOption" }) as any as S.Schema<ApiFulfillmentOption>;
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
const CloudFormationFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionName: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
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
}) as any as S.Schema<CloudFormationFulfillmentOption>;
export interface ContainerOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
}
const ContainerOperatingSystem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ operatingSystemFamilyName: S.String, operatingSystemName: S.String }),
).annotate({ identifier: "ContainerOperatingSystem" }) as any as S.Schema<ContainerOperatingSystem>;
export type ContainerOperatingSystemList = ContainerOperatingSystem[];
const ContainerOperatingSystemList = /*@__PURE__*/ S.Array(ContainerOperatingSystem);
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
const ContainerFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionName: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    fulfillmentOptionVersion: S.optional(S.String),
    operatingSystems: S.optional(ContainerOperatingSystemList),
    awsSupportedServices: S.optional(AwsSupportedServiceList),
    releaseNotes: S.optional(S.String),
    usageInstructions: S.optional(S.String),
  }),
).annotate({
  identifier: "ContainerFulfillmentOption",
}) as any as S.Schema<ContainerFulfillmentOption>;
export interface HelmOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
}
export type HelmOperatingSystemList = HelmOperatingSystem[];
const HelmOperatingSystemList =
  ContainerOperatingSystemList as any as S.Schema<HelmOperatingSystemList>;
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
const HelmFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionName: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    fulfillmentOptionVersion: S.optional(S.String),
    operatingSystems: S.optional(HelmOperatingSystemList),
    releaseNotes: S.optional(S.String),
    awsSupportedServices: S.optional(AwsSupportedServiceList),
    usageInstructions: S.optional(S.String),
  }),
).annotate({ identifier: "HelmFulfillmentOption" }) as any as S.Schema<HelmFulfillmentOption>;
export interface EksAddOnOperatingSystem {
  operatingSystemFamilyName: string;
  operatingSystemName: string;
}
export type EksAddOnOperatingSystemList = EksAddOnOperatingSystem[];
const EksAddOnOperatingSystemList =
  ContainerOperatingSystemList as any as S.Schema<EksAddOnOperatingSystemList>;
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
const EksAddOnFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionName: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    fulfillmentOptionVersion: S.optional(S.String),
    operatingSystems: S.optional(EksAddOnOperatingSystemList),
    releaseNotes: S.optional(S.String),
    usageInstructions: S.optional(S.String),
    awsSupportedServices: S.optional(AwsSupportedServiceList),
  }),
).annotate({
  identifier: "EksAddOnFulfillmentOption",
}) as any as S.Schema<EksAddOnFulfillmentOption>;
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
const Ec2ImageBuilderComponentFulfillmentOption =
  ContainerFulfillmentOption as any as S.Schema<Ec2ImageBuilderComponentFulfillmentOption>;
export interface DataArtifact {
  description?: string;
  resourceArn?: string;
  resourceType: string;
  dataClassification: string;
}
const DataArtifact = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    description: S.optional(S.String),
    resourceArn: S.optional(S.String),
    resourceType: S.String,
    dataClassification: S.String,
  }),
).annotate({ identifier: "DataArtifact" }) as any as S.Schema<DataArtifact>;
export type DataArtifactList = DataArtifact[];
const DataArtifactList = /*@__PURE__*/ S.Array(DataArtifact);
export interface DataExchangeFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  dataArtifacts?: DataArtifact[];
}
const DataExchangeFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    dataArtifacts: S.optional(DataArtifactList),
  }),
).annotate({
  identifier: "DataExchangeFulfillmentOption",
}) as any as S.Schema<DataExchangeFulfillmentOption>;
export interface ProfessionalServicesFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
}
const ProfessionalServicesFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
  }),
).annotate({
  identifier: "ProfessionalServicesFulfillmentOption",
}) as any as S.Schema<ProfessionalServicesFulfillmentOption>;
export type SaasQuickLaunchStatus = "ENABLED" | "DISABLED" | (string & {});
const SaasQuickLaunchStatus = S.String;

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
const SaasFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    fulfillmentUrl: S.optional(S.String),
    usageInstructions: S.optional(S.String),
    availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    launchUrl: S.optional(S.String),
    quickLaunch: SaasQuickLaunchStatus,
  }),
).annotate({ identifier: "SaasFulfillmentOption" }) as any as S.Schema<SaasFulfillmentOption>;
export interface SageMakerAlgorithmRecommendation {
  recommendedBatchTransformInstanceType: string;
  recommendedRealtimeInferenceInstanceType?: string;
  recommendedTrainingInstanceType: string;
}
const SageMakerAlgorithmRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendedBatchTransformInstanceType: S.String,
    recommendedRealtimeInferenceInstanceType: S.optional(S.String),
    recommendedTrainingInstanceType: S.String,
  }),
).annotate({
  identifier: "SageMakerAlgorithmRecommendation",
}) as any as S.Schema<SageMakerAlgorithmRecommendation>;
export interface SageMakerAlgorithmFulfillmentOption {
  fulfillmentOptionId: string;
  fulfillmentOptionType: FulfillmentOptionType;
  fulfillmentOptionDisplayName: string;
  fulfillmentOptionVersion?: string;
  releaseNotes?: string;
  usageInstructions?: string;
  recommendation?: SageMakerAlgorithmRecommendation;
}
const SageMakerAlgorithmFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    fulfillmentOptionVersion: S.optional(S.String),
    releaseNotes: S.optional(S.String),
    usageInstructions: S.optional(S.String),
    recommendation: S.optional(SageMakerAlgorithmRecommendation),
  }),
).annotate({
  identifier: "SageMakerAlgorithmFulfillmentOption",
}) as any as S.Schema<SageMakerAlgorithmFulfillmentOption>;
export interface SageMakerModelRecommendation {
  recommendedBatchTransformInstanceType: string;
  recommendedRealtimeInferenceInstanceType?: string;
}
const SageMakerModelRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendedBatchTransformInstanceType: S.String,
    recommendedRealtimeInferenceInstanceType: S.optional(S.String),
  }),
).annotate({
  identifier: "SageMakerModelRecommendation",
}) as any as S.Schema<SageMakerModelRecommendation>;
export type SageMakerModelContentTypeList = string[];
const SageMakerModelContentTypeList =
  HighlightList as any as S.Schema<SageMakerModelContentTypeList>;
export type SageMakerModelResponseMimeTypeList = string[];
const SageMakerModelResponseMimeTypeList =
  HighlightList as any as S.Schema<SageMakerModelResponseMimeTypeList>;
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
const SageMakerModelFulfillmentOption = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    fulfillmentOptionId: S.String,
    fulfillmentOptionType: FulfillmentOptionType,
    fulfillmentOptionDisplayName: S.String,
    fulfillmentOptionVersion: S.optional(S.String),
    releaseNotes: S.optional(S.String),
    usageInstructions: S.optional(S.String),
    recommendation: S.optional(SageMakerModelRecommendation),
    supportedContentTypes: S.optional(SageMakerModelContentTypeList),
    supportedResponseMimeTypes: S.optional(SageMakerModelResponseMimeTypeList),
  }),
).annotate({
  identifier: "SageMakerModelFulfillmentOption",
}) as any as S.Schema<SageMakerModelFulfillmentOption>;
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
const FulfillmentOption = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({
    amazonMachineImageFulfillmentOption: AmazonMachineImageFulfillmentOption,
  }),
  /*@__PURE__*/ S.Struct({ apiFulfillmentOption: ApiFulfillmentOption }),
  /*@__PURE__*/ S.Struct({ cloudFormationFulfillmentOption: CloudFormationFulfillmentOption }),
  /*@__PURE__*/ S.Struct({ containerFulfillmentOption: ContainerFulfillmentOption }),
  /*@__PURE__*/ S.Struct({ helmFulfillmentOption: HelmFulfillmentOption }),
  /*@__PURE__*/ S.Struct({ eksAddOnFulfillmentOption: EksAddOnFulfillmentOption }),
  /*@__PURE__*/ S.Struct({
    ec2ImageBuilderComponentFulfillmentOption: Ec2ImageBuilderComponentFulfillmentOption,
  }),
  /*@__PURE__*/ S.Struct({ dataExchangeFulfillmentOption: DataExchangeFulfillmentOption }),
  /*@__PURE__*/ S.Struct({
    professionalServicesFulfillmentOption: ProfessionalServicesFulfillmentOption,
  }),
  /*@__PURE__*/ S.Struct({ saasFulfillmentOption: SaasFulfillmentOption }),
  /*@__PURE__*/ S.Struct({
    sageMakerAlgorithmFulfillmentOption: SageMakerAlgorithmFulfillmentOption,
  }),
  /*@__PURE__*/ S.Struct({ sageMakerModelFulfillmentOption: SageMakerModelFulfillmentOption }),
]);
export type FulfillmentOptionsList = FulfillmentOption[];
const FulfillmentOptionsList = /*@__PURE__*/ S.Array(FulfillmentOption);
export interface ListFulfillmentOptionsOutput {
  locale?: string;
  fulfillmentOptions: FulfillmentOption[];
  nextToken?: string;
}
const ListFulfillmentOptionsOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    fulfillmentOptions: FulfillmentOptionsList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListFulfillmentOptionsOutput",
}) as any as S.Schema<ListFulfillmentOptionsOutput>;
export type PurchaseOptionFilterType =
  | "PRODUCT_ID"
  | "SELLER_OF_RECORD_PROFILE_ID"
  | "PURCHASE_OPTION_TYPE"
  | "VISIBILITY_SCOPE"
  | "AVAILABILITY_STATUS"
  | (string & {});
const PurchaseOptionFilterType = S.String;

export type PurchaseOptionFilterValue = string;
export type PurchaseOptionFilterValueList = string[];
const PurchaseOptionFilterValueList =
  HighlightList as any as S.Schema<PurchaseOptionFilterValueList>;
export interface PurchaseOptionFilter {
  filterType: PurchaseOptionFilterType;
  filterValues: string[];
}
const PurchaseOptionFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filterType: PurchaseOptionFilterType, filterValues: PurchaseOptionFilterValueList }),
).annotate({ identifier: "PurchaseOptionFilter" }) as any as S.Schema<PurchaseOptionFilter>;
export type PurchaseOptionFilterList = PurchaseOptionFilter[];
const PurchaseOptionFilterList = /*@__PURE__*/ S.Array(PurchaseOptionFilter);
export type MaxResults = number;
export interface ListPurchaseOptionsInput {
  locale?: string;
  filters?: PurchaseOptionFilter[];
  maxResults?: number;
  nextToken?: string;
}
const ListPurchaseOptionsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    filters: S.optional(PurchaseOptionFilterList),
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
).annotate({ identifier: "ListPurchaseOptionsInput" }) as any as S.Schema<ListPurchaseOptionsInput>;
export type PurchaseOptionType = "OFFER" | "OFFERSET" | (string & {});
const PurchaseOptionType = S.String;

export interface PurchaseOptionAssociatedEntity {
  product: ProductInformation;
  offer: OfferInformation;
  offerSet?: OfferSetInformation;
}
const PurchaseOptionAssociatedEntity = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    product: ProductInformation,
    offer: OfferInformation,
    offerSet: S.optional(OfferSetInformation),
  }),
).annotate({
  identifier: "PurchaseOptionAssociatedEntity",
}) as any as S.Schema<PurchaseOptionAssociatedEntity>;
export type PurchaseOptionAssociatedEntityList = PurchaseOptionAssociatedEntity[];
const PurchaseOptionAssociatedEntityList = /*@__PURE__*/ S.Array(PurchaseOptionAssociatedEntity);
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
const PurchaseOptionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    purchaseOptionId: S.String,
    catalog: S.String,
    purchaseOptionType: PurchaseOptionType,
    purchaseOptionName: S.optional(S.String),
    availableFromTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    sellerOfRecord: SellerInformation,
    badges: S.optional(PurchaseOptionBadgeList),
    associatedEntities: PurchaseOptionAssociatedEntityList,
  }),
).annotate({ identifier: "PurchaseOptionSummary" }) as any as S.Schema<PurchaseOptionSummary>;
export type PurchaseOptionSummaryList = PurchaseOptionSummary[];
const PurchaseOptionSummaryList = /*@__PURE__*/ S.Array(PurchaseOptionSummary);
export interface ListPurchaseOptionsOutput {
  purchaseOptions?: PurchaseOptionSummary[];
  nextToken?: string;
}
const ListPurchaseOptionsOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    purchaseOptions: S.optional(PurchaseOptionSummaryList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListPurchaseOptionsOutput",
}) as any as S.Schema<ListPurchaseOptionsOutput>;
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
const SearchFilterType = S.String;

export type SearchFilterValue = string;
export type SearchFilterValueList = string[];
const SearchFilterValueList = HighlightList as any as S.Schema<SearchFilterValueList>;
export interface SearchFilter {
  filterType: SearchFilterType;
  filterValues: string[];
}
const SearchFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ filterType: SearchFilterType, filterValues: SearchFilterValueList }),
).annotate({ identifier: "SearchFilter" }) as any as S.Schema<SearchFilter>;
export type SearchFilterList = SearchFilter[];
const SearchFilterList = /*@__PURE__*/ S.Array(SearchFilter);
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
const SearchFacetType = S.String;

export type FacetTypeList = SearchFacetType[];
const FacetTypeList = /*@__PURE__*/ S.Array(SearchFacetType);
export interface SearchFacetsInput {
  locale?: string;
  searchText?: string;
  filters?: SearchFilter[];
  facetTypes?: SearchFacetType[];
  nextToken?: string;
}
const SearchFacetsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    searchText: S.optional(S.String),
    filters: S.optional(SearchFilterList),
    facetTypes: S.optional(FacetTypeList),
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
).annotate({ identifier: "SearchFacetsInput" }) as any as S.Schema<SearchFacetsInput>;
export interface ListingFacet {
  value: string;
  displayName: string;
  parent?: string;
  count: number;
}
const ListingFacet = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    value: S.String,
    displayName: S.String,
    parent: S.optional(S.String),
    count: S.Number,
  }),
).annotate({ identifier: "ListingFacet" }) as any as S.Schema<ListingFacet>;
export type ListingFacetList = ListingFacet[];
const ListingFacetList = /*@__PURE__*/ S.Array(ListingFacet);
export type TypeToFacetMap = { [key in SearchFacetType]?: ListingFacet[] };
const TypeToFacetMap = /*@__PURE__*/ S.Record(
  SearchFacetType,
  /*@__PURE__*/ ListingFacetList.pipe(S.optional),
);
export interface SearchFacetsOutput {
  totalResults: number;
  listingFacets: { [key: string]: ListingFacet[] | undefined };
  nextToken?: string;
}
const SearchFacetsOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    totalResults: S.Number,
    listingFacets: TypeToFacetMap,
    nextToken: S.optional(S.String),
  }),
).annotate({ identifier: "SearchFacetsOutput" }) as any as S.Schema<SearchFacetsOutput>;
export type SearchListingsSortBy = "RELEVANCE" | "AVERAGE_CUSTOMER_RATING" | (string & {});
const SearchListingsSortBy = S.String;

export type SearchListingsSortOrder = "DESCENDING" | "ASCENDING" | (string & {});
const SearchListingsSortOrder = S.String;

export interface SearchListingsInput {
  locale?: string;
  searchText?: string;
  filters?: SearchFilter[];
  maxResults?: number;
  sortBy?: SearchListingsSortBy;
  sortOrder?: SearchListingsSortOrder;
  nextToken?: string;
}
const SearchListingsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    locale: S.optional(S.String),
    searchText: S.optional(S.String),
    filters: S.optional(SearchFilterList),
    maxResults: S.optional(S.Number),
    sortBy: S.optional(SearchListingsSortBy),
    sortOrder: S.optional(SearchListingsSortOrder),
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
).annotate({ identifier: "SearchListingsInput" }) as any as S.Schema<SearchListingsInput>;
export interface ListingSummaryAssociatedEntity {
  product?: ProductInformation;
}
const ListingSummaryAssociatedEntity = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ product: S.optional(ProductInformation) }),
).annotate({
  identifier: "ListingSummaryAssociatedEntity",
}) as any as S.Schema<ListingSummaryAssociatedEntity>;
export type ListingSummaryAssociatedEntityList = ListingSummaryAssociatedEntity[];
const ListingSummaryAssociatedEntityList = /*@__PURE__*/ S.Array(ListingSummaryAssociatedEntity);
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
const ListingSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    listingId: S.String,
    listingName: S.String,
    publisher: SellerInformation,
    fulfillmentOptionSummaries: FulfillmentOptionSummaryList,
    catalog: S.String,
    shortDescription: S.String,
    logoThumbnailUrl: S.String,
    categories: CategoryList,
    badges: ListingBadgeList,
    reviewSummary: ReviewSummary,
    pricingModels: PricingModelList,
    pricingUnits: PricingUnitList,
    associatedEntities: ListingSummaryAssociatedEntityList,
  }),
).annotate({ identifier: "ListingSummary" }) as any as S.Schema<ListingSummary>;
export type ListingSummaryList = ListingSummary[];
const ListingSummaryList = /*@__PURE__*/ S.Array(ListingSummary);
export interface SearchListingsOutput {
  totalResults: number;
  listingSummaries: ListingSummary[];
  nextToken?: string;
}
const SearchListingsOutput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    totalResults: S.Number,
    listingSummaries: ListingSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({ identifier: "SearchListingsOutput" }) as any as S.Schema<SearchListingsOutput>;
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
  input: GetListingInput,
  output: GetListingOutput,
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
  input: GetOfferInput,
  output: GetOfferOutput,
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
  input: GetOfferSetInput,
  output: GetOfferSetOutput,
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
  input: GetOfferTermsInput,
  output: GetOfferTermsOutput,
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
  input: GetProductInput,
  output: GetProductOutput,
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
  input: ListFulfillmentOptionsInput,
  output: ListFulfillmentOptionsOutput,
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
  input: ListPurchaseOptionsInput,
  output: ListPurchaseOptionsOutput,
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
  input: SearchFacetsInput,
  output: SearchFacetsOutput,
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
  input: SearchListingsInput,
  output: SearchListingsOutput,
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
