// ==========================================================================
// Manufacturer Center API (manufacturers v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "manufacturers",
  version: "v1",
  rootUrl: "https://manufacturers.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface FloatUnit {
  /** amount. */
  amount?: number;
  /** unit. */
  unit?: string;
}

export const FloatUnit: Schema.Schema<FloatUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloatUnit" });

export interface Capacity {
  /** The numeric value of the capacity. */
  value?: string;
  /** The unit of the capacity, i.e., MB, GB, or TB. */
  unit?: string;
}

export const Capacity: Schema.Schema<Capacity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "Capacity" });

export interface Image {
  /** The status of the image. @OutputOnly */
  status?:
    | "STATUS_UNSPECIFIED"
    | "PENDING_PROCESSING"
    | "PENDING_CRAWL"
    | "OK"
    | "ROBOTED"
    | "XROBOTED"
    | "CRAWL_ERROR"
    | "PROCESSING_ERROR"
    | "DECODING_ERROR"
    | "TOO_BIG"
    | "CRAWL_SKIPPED"
    | "HOSTLOADED"
    | "HTTP_404"
    | (string & {});
  /** The type of the image, i.e., crawled or uploaded. @OutputOnly */
  type?: "TYPE_UNSPECIFIED" | "CRAWLED" | "UPLOADED" | (string & {});
  /** The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully. */
  imageUrl?: string;
}

export const Image: Schema.Schema<Image> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    imageUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "Image" });

export interface Price {
  /** The currency in which the price is denoted. */
  currency?: string;
  /** The numeric value of the price. */
  amount?: string;
}

export const Price: Schema.Schema<Price> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    amount: Schema.optional(Schema.String),
  }).annotate({ identifier: "Price" });

export interface GoogleShoppingManufacturersV1ProductCertification {
  /** Required. Name of the certification body. */
  authority?: string;
  /** Optional. A URL link to the certification. */
  link?: string;
  /** Required. Name of the certification. */
  name?: string;
  /** Optional. The expiration date (UTC). */
  validUntil?: string;
  /** Optional. A unique code to identify the certification. */
  code?: string;
  /** Optional. A URL link to the certification logo. */
  logo?: string;
  /** Optional. A custom value of the certification. */
  value?: string;
}

export const GoogleShoppingManufacturersV1ProductCertification: Schema.Schema<GoogleShoppingManufacturersV1ProductCertification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authority: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    validUntil: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    logo: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleShoppingManufacturersV1ProductCertification",
  });

export interface Grocery {
  /** Storage instructions. */
  storageInstructions?: string;
  /** Active ingredients. */
  activeIngredients?: string;
  /** Indications. */
  indications?: string;
  /** Alcohol by volume. */
  alcoholByVolume?: number;
  /** Ingredients. */
  ingredients?: string;
  /** Derived nutrition claim. */
  derivedNutritionClaim?: ReadonlyArray<string>;
  /** Allergens. */
  allergens?: string;
  /** Nutrition claim. */
  nutritionClaim?: ReadonlyArray<string>;
  /** Directions. */
  directions?: string;
}

export const Grocery: Schema.Schema<Grocery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageInstructions: Schema.optional(Schema.String),
    activeIngredients: Schema.optional(Schema.String),
    indications: Schema.optional(Schema.String),
    alcoholByVolume: Schema.optional(Schema.Number),
    ingredients: Schema.optional(Schema.String),
    derivedNutritionClaim: Schema.optional(Schema.Array(Schema.String)),
    allergens: Schema.optional(Schema.String),
    nutritionClaim: Schema.optional(Schema.Array(Schema.String)),
    directions: Schema.optional(Schema.String),
  }).annotate({ identifier: "Grocery" });

export interface VoluntaryNutritionFact {
  /** Name. */
  name?: string;
  /** Value. */
  value?: FloatUnit;
  /** Daily percentage. */
  dailyPercentage?: number;
}

export const VoluntaryNutritionFact: Schema.Schema<VoluntaryNutritionFact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(FloatUnit),
    dailyPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VoluntaryNutritionFact" });

export interface Nutrition {
  /** Total fat. */
  totalFat?: FloatUnit;
  /** Saturated fat daily percentage. */
  saturatedFatDailyPercentage?: number;
  /** Sodium daily percentage. */
  sodiumDailyPercentage?: number;
  /** Sodium. */
  sodium?: FloatUnit;
  /** Vitamin D. */
  vitaminD?: FloatUnit;
  /** Polyunsaturated fat. */
  polyunsaturatedFat?: FloatUnit;
  /** Added sugars. */
  addedSugars?: FloatUnit;
  /** Iron. */
  iron?: FloatUnit;
  /** Mandatory Nutrition Facts. Energy. */
  energy?: FloatUnit;
  /** Total sugars daily percentage. */
  totalSugarsDailyPercentage?: number;
  /** Total carbohydrate. */
  totalCarbohydrate?: FloatUnit;
  /** Protein daily percentage. */
  proteinDailyPercentage?: number;
  /** Serving size measure. */
  servingSizeMeasure?: FloatUnit;
  /** Cholesterol daily percentage. */
  cholesterolDailyPercentage?: number;
  /** Folate daily percentage. */
  folateDailyPercentage?: number;
  /** Dietary fiber daily percentage. */
  dietaryFiberDailyPercentage?: number;
  /** Folate mcg DFE. */
  folateMcgDfe?: number;
  /** Voluntary nutrition fact. */
  voluntaryNutritionFact?: ReadonlyArray<VoluntaryNutritionFact>;
  /** Food Serving Size. Serving size description. */
  servingSizeDescription?: string;
  /** Servings per container. */
  servingsPerContainer?: string;
  /** Dietary fiber. */
  dietaryFiber?: FloatUnit;
  /** Total fat daily percentage. */
  totalFatDailyPercentage?: number;
  /** Calcium daily percentage. */
  calciumDailyPercentage?: number;
  /** Total sugars. */
  totalSugars?: FloatUnit;
  /** Monounsaturated fat. */
  monounsaturatedFat?: FloatUnit;
  /** Iron daily percentage. */
  ironDailyPercentage?: number;
  /** Added sugars daily percentage. */
  addedSugarsDailyPercentage?: number;
  /** Energy from fat. */
  energyFromFat?: FloatUnit;
  /** Trans fat. */
  transFat?: FloatUnit;
  /** Cholesterol. */
  cholesterol?: FloatUnit;
  /** Polyols. */
  polyols?: FloatUnit;
  /** Saturated fat. */
  saturatedFat?: FloatUnit;
  /** Vitamin D daily percentage. */
  vitaminDDailyPercentage?: number;
  /** Starch. */
  starch?: FloatUnit;
  /** Protein. */
  protein?: FloatUnit;
  /** Prepared size description. */
  preparedSizeDescription?: string;
  /** Potassium daily percentage. */
  potassiumDailyPercentage?: number;
  /** Total carbohydrate daily percentage. */
  totalCarbohydrateDailyPercentage?: number;
  /** Folate folic acid. */
  folateFolicAcid?: FloatUnit;
  /** Trans fat daily percentage. */
  transFatDailyPercentage?: number;
  /** Nutrition fact measure. */
  nutritionFactMeasure?: string;
  /** Calcium. */
  calcium?: FloatUnit;
  /** Potassium. */
  potassium?: FloatUnit;
}

export const Nutrition: Schema.Schema<Nutrition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalFat: Schema.optional(FloatUnit),
    saturatedFatDailyPercentage: Schema.optional(Schema.Number),
    sodiumDailyPercentage: Schema.optional(Schema.Number),
    sodium: Schema.optional(FloatUnit),
    vitaminD: Schema.optional(FloatUnit),
    polyunsaturatedFat: Schema.optional(FloatUnit),
    addedSugars: Schema.optional(FloatUnit),
    iron: Schema.optional(FloatUnit),
    energy: Schema.optional(FloatUnit),
    totalSugarsDailyPercentage: Schema.optional(Schema.Number),
    totalCarbohydrate: Schema.optional(FloatUnit),
    proteinDailyPercentage: Schema.optional(Schema.Number),
    servingSizeMeasure: Schema.optional(FloatUnit),
    cholesterolDailyPercentage: Schema.optional(Schema.Number),
    folateDailyPercentage: Schema.optional(Schema.Number),
    dietaryFiberDailyPercentage: Schema.optional(Schema.Number),
    folateMcgDfe: Schema.optional(Schema.Number),
    voluntaryNutritionFact: Schema.optional(
      Schema.Array(VoluntaryNutritionFact),
    ),
    servingSizeDescription: Schema.optional(Schema.String),
    servingsPerContainer: Schema.optional(Schema.String),
    dietaryFiber: Schema.optional(FloatUnit),
    totalFatDailyPercentage: Schema.optional(Schema.Number),
    calciumDailyPercentage: Schema.optional(Schema.Number),
    totalSugars: Schema.optional(FloatUnit),
    monounsaturatedFat: Schema.optional(FloatUnit),
    ironDailyPercentage: Schema.optional(Schema.Number),
    addedSugarsDailyPercentage: Schema.optional(Schema.Number),
    energyFromFat: Schema.optional(FloatUnit),
    transFat: Schema.optional(FloatUnit),
    cholesterol: Schema.optional(FloatUnit),
    polyols: Schema.optional(FloatUnit),
    saturatedFat: Schema.optional(FloatUnit),
    vitaminDDailyPercentage: Schema.optional(Schema.Number),
    starch: Schema.optional(FloatUnit),
    protein: Schema.optional(FloatUnit),
    preparedSizeDescription: Schema.optional(Schema.String),
    potassiumDailyPercentage: Schema.optional(Schema.Number),
    totalCarbohydrateDailyPercentage: Schema.optional(Schema.Number),
    folateFolicAcid: Schema.optional(FloatUnit),
    transFatDailyPercentage: Schema.optional(Schema.Number),
    nutritionFactMeasure: Schema.optional(Schema.String),
    calcium: Schema.optional(FloatUnit),
    potassium: Schema.optional(FloatUnit),
  }).annotate({ identifier: "Nutrition" });

export interface FeatureDescription {
  /** A short description of the feature. */
  headline?: string;
  /** A detailed description of the feature. */
  text?: string;
  /** An optional image describing the feature. */
  image?: Image;
}

export const FeatureDescription: Schema.Schema<FeatureDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headline: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    image: Schema.optional(Image),
  }).annotate({ identifier: "FeatureDescription" });

export interface ProductDetail {
  /** A short section name that can be reused between multiple product details. */
  sectionName?: string;
  /** The name of the attribute. */
  attributeName?: string;
  /** The value of the attribute. */
  attributeValue?: string;
}

export const ProductDetail: Schema.Schema<ProductDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionName: Schema.optional(Schema.String),
    attributeName: Schema.optional(Schema.String),
    attributeValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductDetail" });

export interface Count {
  /** The numeric value of the number of products in a package. */
  value?: string;
  /** The unit in which these products are counted. */
  unit?: string;
}

export const Count: Schema.Schema<Count> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).annotate({ identifier: "Count" });

export interface Attributes {
  /** The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin. */
  gtin?: ReadonlyArray<string>;
  /** The capacity of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity. */
  capacity?: Capacity;
  /** A list of included destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550 */
  includedDestination?: ReadonlyArray<string>;
  /** The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme. */
  theme?: string;
  /** The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video. */
  videoLink?: ReadonlyArray<string>;
  /** The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage. */
  productPageUrl?: string;
  /** The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release. */
  releaseDate?: string;
  /** Virtual Model (3d) asset link. */
  virtualModelLink?: string;
  /** The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline. */
  productLine?: string;
  /** The image of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#image. */
  imageLink?: Image;
  /** The suggested retail price (MSRP) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#price. */
  suggestedRetailPrice?: Price;
  /** Optional. List of certifications claimed by this product. */
  certification?: ReadonlyArray<GoogleShoppingManufacturersV1ProductCertification>;
  /** Grocery Attributes. See more at https://support.google.com/manufacturers/answer/12098458#grocery. */
  grocery?: Grocery;
  /** The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid. */
  itemGroupId?: string;
  /** The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size. */
  size?: string;
  /** The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn. */
  mpn?: string;
  /** The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype. */
  sizeType?: ReadonlyArray<string>;
  /** The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color. */
  color?: string;
  /** The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern. */
  pattern?: string;
  /** The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname. */
  productName?: string;
  /** The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage. */
  additionalImageLink?: ReadonlyArray<Image>;
  /** Nutrition Attributes. See more at https://support.google.com/manufacturers/answer/12098458#food-servings. */
  nutrition?: Nutrition;
  /** The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format. */
  format?: string;
  /** The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description. */
  description?: string;
  /** The product highlights. For more information, see https://support.google.com/manufacturers/answer/10066942 */
  productHighlight?: ReadonlyArray<string>;
  /** The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc. */
  featureDescription?: ReadonlyArray<FeatureDescription>;
  /** The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup. */
  ageGroup?: string;
  /** A list of excluded destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550 */
  excludedDestination?: ReadonlyArray<string>;
  /** The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype. */
  productType?: ReadonlyArray<string>;
  /** The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure. */
  disclosureDate?: string;
  /** The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand. */
  brand?: string;
  /** The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem. */
  sizeSystem?: string;
  /** The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail. */
  productDetail?: ReadonlyArray<ProductDetail>;
  /** Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865 */
  richProductContent?: ReadonlyArray<string>;
  /** The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title. */
  title?: string;
  /** The target client id. Should only be used in the accounts of the data partners. For more information, see https://support.google.com/manufacturers/answer/10857344 */
  targetClientId?: string;
  /** The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent. */
  scent?: string;
  /** The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor. */
  flavor?: string;
  /** The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material. */
  material?: string;
  /** The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender. */
  gender?: string;
  /** Optional. List of countries to show this product in. Countries provided in this attribute will override any of the countries configured at feed level. The values should be: the [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the countries in which this item will be shown. */
  intendedCountry?: ReadonlyArray<string>;
  /** The count of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#count. */
  count?: Count;
}

export const Attributes: Schema.Schema<Attributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gtin: Schema.optional(Schema.Array(Schema.String)),
    capacity: Schema.optional(Capacity),
    includedDestination: Schema.optional(Schema.Array(Schema.String)),
    theme: Schema.optional(Schema.String),
    videoLink: Schema.optional(Schema.Array(Schema.String)),
    productPageUrl: Schema.optional(Schema.String),
    releaseDate: Schema.optional(Schema.String),
    virtualModelLink: Schema.optional(Schema.String),
    productLine: Schema.optional(Schema.String),
    imageLink: Schema.optional(Image),
    suggestedRetailPrice: Schema.optional(Price),
    certification: Schema.optional(
      Schema.Array(GoogleShoppingManufacturersV1ProductCertification),
    ),
    grocery: Schema.optional(Grocery),
    itemGroupId: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    mpn: Schema.optional(Schema.String),
    sizeType: Schema.optional(Schema.Array(Schema.String)),
    color: Schema.optional(Schema.String),
    pattern: Schema.optional(Schema.String),
    productName: Schema.optional(Schema.String),
    additionalImageLink: Schema.optional(Schema.Array(Image)),
    nutrition: Schema.optional(Nutrition),
    format: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    productHighlight: Schema.optional(Schema.Array(Schema.String)),
    featureDescription: Schema.optional(Schema.Array(FeatureDescription)),
    ageGroup: Schema.optional(Schema.String),
    excludedDestination: Schema.optional(Schema.Array(Schema.String)),
    productType: Schema.optional(Schema.Array(Schema.String)),
    disclosureDate: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    sizeSystem: Schema.optional(Schema.String),
    productDetail: Schema.optional(Schema.Array(ProductDetail)),
    richProductContent: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    targetClientId: Schema.optional(Schema.String),
    scent: Schema.optional(Schema.String),
    flavor: Schema.optional(Schema.String),
    material: Schema.optional(Schema.String),
    gender: Schema.optional(Schema.String),
    intendedCountry: Schema.optional(Schema.Array(Schema.String)),
    count: Schema.optional(Count),
  }).annotate({ identifier: "Attributes" });

export interface Issue {
  /** Short title describing the nature of the issue. */
  title?: string;
  /** What needs to happen to resolve the issue. */
  resolution?:
    | "RESOLUTION_UNSPECIFIED"
    | "USER_ACTION"
    | "PENDING_PROCESSING"
    | (string & {});
  /** The severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
  /** The timestamp when this issue appeared. */
  timestamp?: string;
  /** Output only. List of country codes (ISO 3166-1 alpha-2) where issue applies to the manufacturer product. */
  applicableCountries?: ReadonlyArray<string>;
  /** Longer description of the issue focused on how to resolve it. */
  description?: string;
  /** If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116. */
  attribute?: string;
  /** The destination this issue applies to. */
  destination?: string;
  /** The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc. */
  type?: string;
}

export const Issue: Schema.Schema<Issue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    resolution: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    applicableCountries: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    attribute: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Issue" });

export interface DestinationStatus {
  /** The name of the destination. */
  destination?: string;
  /** Output only. List of country codes (ISO 3166-1 alpha-2) where the offer is approved. */
  approvedCountries?: ReadonlyArray<string>;
  /** Output only. List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved. */
  disapprovedCountries?: ReadonlyArray<string>;
  /** Output only. List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval. */
  pendingCountries?: ReadonlyArray<string>;
  /** The status of the destination. */
  status?: "UNKNOWN" | "ACTIVE" | "PENDING" | "DISAPPROVED" | (string & {});
}

export const DestinationStatus: Schema.Schema<DestinationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    approvedCountries: Schema.optional(Schema.Array(Schema.String)),
    disapprovedCountries: Schema.optional(Schema.Array(Schema.String)),
    pendingCountries: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "DestinationStatus" });

export interface Product {
  /** Optional. The feed label for the product. */
  feedLabel?: string;
  /** Attributes of the product uploaded to the Manufacturer Center. Manually edited attributes are taken into account. */
  attributes?: Attributes;
  /** The target country of the product as a CLDR territory code (for example, US). */
  targetCountry?: string;
  /** The content language of the product as a two-letter ISO 639-1 language code (for example, en). */
  contentLanguage?: string;
  /** The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. */
  productId?: string;
  /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
  parent?: string;
  /** A server-generated list of issues associated with the product. */
  issues?: ReadonlyArray<Issue>;
  /** Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. */
  name?: string;
  /** The status of the destinations. */
  destinationStatuses?: ReadonlyArray<DestinationStatus>;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feedLabel: Schema.optional(Schema.String),
    attributes: Schema.optional(Attributes),
    targetCountry: Schema.optional(Schema.String),
    contentLanguage: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(Issue)),
    name: Schema.optional(Schema.String),
    destinationStatuses: Schema.optional(Schema.Array(DestinationStatus)),
  }).annotate({ identifier: "Product" });

export interface Certification {
  /** Required. Name of the certification. */
  name?: string;
  /** Optional. The expiration date (UTC). */
  validUntil?: string;
  /** Required. Name of the certification body. */
  authority?: string;
  /** Optional. A URL link to the certification. */
  link?: string;
  /** Optional. A custom value of the certification. */
  value?: string;
  /** Optional. A unique code to identify the certification. */
  code?: string;
  /** Optional. A URL link to the certification logo. */
  logo?: string;
}

export const Certification: Schema.Schema<Certification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    validUntil: Schema.optional(Schema.String),
    authority: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    logo: Schema.optional(Schema.String),
  }).annotate({ identifier: "Certification" });

export interface ProductCertification {
  /** Required. This is to clearly identify the product you are certifying. */
  title?: string;
  /** Optional. A 2-letter country code (ISO 3166-1 Alpha 2). */
  countryCode?: ReadonlyArray<string>;
  /** Output only. A server-generated list of issues associated with the product. */
  issues?: ReadonlyArray<Issue>;
  /** Optional. Another name for GTIN. */
  productCode?: ReadonlyArray<string>;
  /** Required. A list of certifications to link to the described product. */
  certification?: ReadonlyArray<Certification>;
  /** Optional. These are your own product categorization system in your product data. */
  productType?: ReadonlyArray<string>;
  /** Required. This is the product's brand name. The brand is used to help identify your product. */
  brand?: string;
  /** Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer */
  mpn?: ReadonlyArray<string>;
  /** Output only. The statuses of the destinations. */
  destinationStatuses?: ReadonlyArray<DestinationStatus>;
  /** Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637. */
  name?: string;
}

export const ProductCertification: Schema.Schema<ProductCertification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.Array(Schema.String)),
    issues: Schema.optional(Schema.Array(Issue)),
    productCode: Schema.optional(Schema.Array(Schema.String)),
    certification: Schema.optional(Schema.Array(Certification)),
    productType: Schema.optional(Schema.Array(Schema.String)),
    brand: Schema.optional(Schema.String),
    mpn: Schema.optional(Schema.Array(Schema.String)),
    destinationStatuses: Schema.optional(Schema.Array(DestinationStatus)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductCertification" });

export interface ListProductCertificationsResponse {
  /** The product certifications from the specified certification body. */
  productCertifications?: ReadonlyArray<ProductCertification>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListProductCertificationsResponse: Schema.Schema<ListProductCertificationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productCertifications: Schema.optional(Schema.Array(ProductCertification)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListProductCertificationsResponse" });

export interface ListProductsResponse {
  /** List of the products. */
  products?: ReadonlyArray<Product>;
  /** The token for the retrieval of the next page of product statuses. */
  nextPageToken?: string;
}

export const ListProductsResponse: Schema.Schema<ListProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    products: Schema.optional(Schema.Array(Product)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListProductsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListAccountsProductsRequest {
  /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
  parent: string;
  /** Maximum number of product statuses to return in the response, used for paging. */
  pageSize?: number;
  /** The token returned by the previous request. */
  pageToken?: string;
  /** The information to be included in the response. Only sections listed here will be returned. */
  include?:
    | "UNKNOWN"
    | "ATTRIBUTES"
    | "ISSUES"
    | "DESTINATION_STATUSES"
    | (string & {})[];
}

export const ListAccountsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    include: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("include"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/products" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsProductsRequest>;

export type ListAccountsProductsResponse = ListProductsResponse;
export const ListAccountsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductsResponse;

export type ListAccountsProductsError = DefaultErrors | NotFound | Forbidden;

/** Lists all the products in a Manufacturer Center account. */
export const listAccountsProducts: API.PaginatedOperationMethod<
  ListAccountsProductsRequest,
  ListAccountsProductsResponse,
  ListAccountsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsProductsRequest,
  output: ListAccountsProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteAccountsProductsRequest {
  /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
  parent: string;
  /** Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. */
  name: string;
}

export const DeleteAccountsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+parent}/products/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsProductsRequest>;

export type DeleteAccountsProductsResponse = Empty;
export const DeleteAccountsProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccountsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the product from a Manufacturer Center account. */
export const deleteAccountsProducts: API.OperationMethod<
  DeleteAccountsProductsRequest,
  DeleteAccountsProductsResponse,
  DeleteAccountsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsProductsRequest,
  output: DeleteAccountsProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsProductsRequest {
  /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
  parent: string;
  /** The information to be included in the response. Only sections listed here will be returned. */
  include?:
    | "UNKNOWN"
    | "ATTRIBUTES"
    | "ISSUES"
    | "DESTINATION_STATUSES"
    | (string & {})[];
  /** Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. */
  name: string;
}

export const GetAccountsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    include: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("include"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/products/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsProductsRequest>;

export type GetAccountsProductsResponse = Product;
export const GetAccountsProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Product;

export type GetAccountsProductsError = DefaultErrors | NotFound | Forbidden;

/** Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear. */
export const getAccountsProducts: API.OperationMethod<
  GetAccountsProductsRequest,
  GetAccountsProductsResponse,
  GetAccountsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsProductsRequest,
  output: GetAccountsProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsProductsRequest {
  /** Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. */
  parent: string;
  /** Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. */
  name: string;
  /** Request body */
  body?: Attributes;
}

export const UpdateAccountsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Attributes).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1/{+parent}/products/{+name}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsProductsRequest>;

export type UpdateAccountsProductsResponse = Empty;
export const UpdateAccountsProductsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type UpdateAccountsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product. */
export const updateAccountsProducts: API.OperationMethod<
  UpdateAccountsProductsRequest,
  UpdateAccountsProductsResponse,
  UpdateAccountsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsProductsRequest,
  output: UpdateAccountsProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAccountsLanguagesProductCertificationsRequest {
  /** Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637. */
  name: string;
  /** Optional. The list of fields to update according to aip.dev/134. However, only full update is supported as of right now. Therefore, it can be either ignored or set to "*". Setting any other values will returns UNIMPLEMENTED error. */
  updateMask?: string;
  /** Request body */
  body?: ProductCertification;
}

export const PatchAccountsLanguagesProductCertificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ProductCertification).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountsLanguagesProductCertificationsRequest>;

export type PatchAccountsLanguagesProductCertificationsResponse =
  ProductCertification;
export const PatchAccountsLanguagesProductCertificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductCertification;

export type PatchAccountsLanguagesProductCertificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies. */
export const patchAccountsLanguagesProductCertifications: API.OperationMethod<
  PatchAccountsLanguagesProductCertificationsRequest,
  PatchAccountsLanguagesProductCertificationsResponse,
  PatchAccountsLanguagesProductCertificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsLanguagesProductCertificationsRequest,
  output: PatchAccountsLanguagesProductCertificationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsLanguagesProductCertificationsRequest {
  /** Required. The parent, which owns this collection of product certifications. Format: accounts/{account}/languages/{language_code} */
  parent: string;
  /** Optional. The maximum number of product certifications to return. The service may return fewer than this value. If unspecified, at most 50 product certifications will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListProductCertifications` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductCertifications` must match the call that provided the page token. Required if requesting the second or higher page. */
  pageToken?: string;
}

export const ListAccountsLanguagesProductCertificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/productCertifications" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsLanguagesProductCertificationsRequest>;

export type ListAccountsLanguagesProductCertificationsResponse =
  ListProductCertificationsResponse;
export const ListAccountsLanguagesProductCertificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductCertificationsResponse;

export type ListAccountsLanguagesProductCertificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists product certifications from a specified certification body. This method can only be called by certification bodies. */
export const listAccountsLanguagesProductCertifications: API.PaginatedOperationMethod<
  ListAccountsLanguagesProductCertificationsRequest,
  ListAccountsLanguagesProductCertificationsResponse,
  ListAccountsLanguagesProductCertificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsLanguagesProductCertificationsRequest,
  output: ListAccountsLanguagesProductCertificationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteAccountsLanguagesProductCertificationsRequest {
  /** Required. The name of the product certification to delete. Format: accounts/{account}/languages/{language_code}/productCertifications/{id} */
  name: string;
}

export const DeleteAccountsLanguagesProductCertificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsLanguagesProductCertificationsRequest>;

export type DeleteAccountsLanguagesProductCertificationsResponse = Empty;
export const DeleteAccountsLanguagesProductCertificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteAccountsLanguagesProductCertificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a product certification by its name. This method can only be called by certification bodies. */
export const deleteAccountsLanguagesProductCertifications: API.OperationMethod<
  DeleteAccountsLanguagesProductCertificationsRequest,
  DeleteAccountsLanguagesProductCertificationsResponse,
  DeleteAccountsLanguagesProductCertificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsLanguagesProductCertificationsRequest,
  output: DeleteAccountsLanguagesProductCertificationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsLanguagesProductCertificationsRequest {
  /** Required. The name of the product certification to get. Format: accounts/{account}/languages/{language_code}/productCertifications/{id} */
  name: string;
}

export const GetAccountsLanguagesProductCertificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsLanguagesProductCertificationsRequest>;

export type GetAccountsLanguagesProductCertificationsResponse =
  ProductCertification;
export const GetAccountsLanguagesProductCertificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductCertification;

export type GetAccountsLanguagesProductCertificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a product certification by its name. This method can only be called by certification bodies. */
export const getAccountsLanguagesProductCertifications: API.OperationMethod<
  GetAccountsLanguagesProductCertificationsRequest,
  GetAccountsLanguagesProductCertificationsResponse,
  GetAccountsLanguagesProductCertificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsLanguagesProductCertificationsRequest,
  output: GetAccountsLanguagesProductCertificationsResponse,
  errors: [NotFound, Forbidden],
}));
