// ==========================================================================
// Cloud Vision API (vision v1p2beta1)
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
  name: "vision",
  version: "v1p2beta1",
  rootUrl: "https://vision.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Vertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const Vertex: Schema.Schema<Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Vertex" });

export interface NormalizedVertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const NormalizedVertex: Schema.Schema<NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NormalizedVertex" });

export interface BoundingPoly {
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<Vertex>;
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<NormalizedVertex>;
}

export const BoundingPoly: Schema.Schema<BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertices: Schema.optional(Schema.Array(Vertex)),
    normalizedVertices: Schema.optional(Schema.Array(NormalizedVertex)),
  }).annotate({ identifier: "BoundingPoly" });

export interface ReferenceImage {
  /** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
  uri?: string;
  /** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
  name?: string;
  /** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
  boundingPolys?: ReadonlyArray<BoundingPoly>;
}

export const ReferenceImage: Schema.Schema<ReferenceImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    boundingPolys: Schema.optional(Schema.Array(BoundingPoly)),
  }).annotate({ identifier: "ReferenceImage" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface ImportProductSetsResponse {
  /** The list of reference_images that are imported successfully. */
  referenceImages?: ReadonlyArray<ReferenceImage>;
  /** The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. */
  statuses?: ReadonlyArray<Status>;
}

export const ImportProductSetsResponse: Schema.Schema<ImportProductSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceImages: Schema.optional(Schema.Array(ReferenceImage)),
    statuses: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "ImportProductSetsResponse" });

export interface GoogleCloudVisionV1p4beta1ProductKeyValue {
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
}

export const GoogleCloudVisionV1p4beta1ProductKeyValue: Schema.Schema<GoogleCloudVisionV1p4beta1ProductKeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ProductKeyValue" });

export interface GoogleCloudVisionV1p2beta1WebDetectionWebLabel {
  /** Label for extra metadata. */
  label?: string;
  /** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p2beta1WebDetectionWebLabel: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionWebLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetectionWebLabel" });

export interface LatLng {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
}

export const LatLng: Schema.Schema<LatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LatLng" });

export interface GoogleCloudVisionV1p1beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p1beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p1beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1LocationInfo" });

export interface GoogleCloudVisionV1p3beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p3beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p3beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1GcsSource" });

export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage",
  });

export interface ObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const ObjectAnnotation: Schema.Schema<ObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    mid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ObjectAnnotation" });

export interface GoogleCloudVisionV1p4beta1Property {
  /** Value of the property. */
  value?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
  /** Name of the property. */
  name?: string;
}

export const GoogleCloudVisionV1p4beta1Property: Schema.Schema<GoogleCloudVisionV1p4beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Property" });

export interface GoogleCloudVisionV1p4beta1Vertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p4beta1Vertex: Schema.Schema<GoogleCloudVisionV1p4beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Vertex" });

export interface GoogleCloudVisionV1p4beta1NormalizedVertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p4beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p4beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1NormalizedVertex" });

export interface GoogleCloudVisionV1p4beta1BoundingPoly {
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<GoogleCloudVisionV1p4beta1Vertex>;
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudVisionV1p4beta1NormalizedVertex>;
}

export const GoogleCloudVisionV1p4beta1BoundingPoly: Schema.Schema<GoogleCloudVisionV1p4beta1BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertices: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Vertex)),
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1NormalizedVertex),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1BoundingPoly" });

export interface GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
}

export const GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation",
  });

export interface GoogleCloudVisionV1p4beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p4beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p4beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1LocationInfo" });

export interface GoogleCloudVisionV1p4beta1EntityAnnotation {
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p4beta1LocationInfo>;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p4beta1Property>;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
}

export const GoogleCloudVisionV1p4beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    description: Schema.optional(Schema.String),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1LocationInfo),
    ),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1Property),
    ),
    confidence: Schema.optional(Schema.Number),
    topicality: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    mid: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1EntityAnnotation" });

export interface Color {
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
  /** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
  alpha?: number;
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
}

export const Color: Schema.Schema<Color> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    green: Schema.optional(Schema.Number),
    red: Schema.optional(Schema.Number),
    alpha: Schema.optional(Schema.Number),
    blue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Color" });

export interface GoogleCloudVisionV1p4beta1ColorInfo {
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
  /** RGB components of the color. */
  color?: Color;
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
}

export const GoogleCloudVisionV1p4beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p4beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pixelFraction: Schema.optional(Schema.Number),
    color: Schema.optional(Color),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ColorInfo" });

export interface GoogleCloudVisionV1p4beta1DominantColorsAnnotation {
  /** RGB color values with their score and pixel fraction. */
  colors?: ReadonlyArray<GoogleCloudVisionV1p4beta1ColorInfo>;
}

export const GoogleCloudVisionV1p4beta1DominantColorsAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1DominantColorsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    colors: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1ColorInfo)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1DominantColorsAnnotation",
  });

export interface GoogleCloudVisionV1p4beta1ImageProperties {
  /** If present, dominant colors completed successfully. */
  dominantColors?: GoogleCloudVisionV1p4beta1DominantColorsAnnotation;
}

export const GoogleCloudVisionV1p4beta1ImageProperties: Schema.Schema<GoogleCloudVisionV1p4beta1ImageProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dominantColors: Schema.optional(
      GoogleCloudVisionV1p4beta1DominantColorsAnnotation,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ImageProperties" });

export interface GoogleCloudVisionV1p4beta1Product {
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductKeyValue>;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
}

export const GoogleCloudVisionV1p4beta1Product: Schema.Schema<GoogleCloudVisionV1p4beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductKeyValue),
    ),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Product" });

export interface GoogleCloudVisionV1p4beta1ProductSearchResultsResult {
  /** The Product. */
  product?: GoogleCloudVisionV1p4beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(GoogleCloudVisionV1p4beta1Product),
    score: Schema.optional(Schema.Number),
    image: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1ProductSearchResultsResult",
  });

export interface GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation",
  });

export interface GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult {
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation>;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductSearchResultsResult),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult",
  });

export interface GoogleCloudVisionV1p4beta1ProductSearchResults {
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult>;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductSearchResultsResult),
    ),
    indexTime: Schema.optional(Schema.String),
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ProductSearchResults" });

export interface GoogleCloudVisionV1p4beta1ImageAnnotationContext {
  /** The URI of the file used to produce the image. */
  uri?: string;
  /** If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. */
  pageNumber?: number;
}

export const GoogleCloudVisionV1p4beta1ImageAnnotationContext: Schema.Schema<GoogleCloudVisionV1p4beta1ImageAnnotationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pageNumber: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1ImageAnnotationContext",
  });

export interface GoogleCloudVisionV1p4beta1WebDetectionWebLabel {
  /** Label for extra metadata. */
  label?: string;
  /** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebLabel: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetectionWebLabel" });

export interface GoogleCloudVisionV1p4beta1WebDetectionWebEntity {
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Canonical description of the entity, in English. */
  description?: string;
  /** Opaque entity ID. */
  entityId?: string;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1WebDetectionWebEntity",
  });

export interface GoogleCloudVisionV1p4beta1WebDetectionWebImage {
  /** The result image URL. */
  url?: string;
  /** (Deprecated) Overall relevancy score for the image. */
  score?: number;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebImage: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetectionWebImage" });

export interface GoogleCloudVisionV1p4beta1WebDetectionWebPage {
  /** The result web page URL. */
  url?: string;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    score: Schema.optional(Schema.Number),
    pageTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p4beta1WebDetection {
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebLabel>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebPage>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p4beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebLabel),
    ),
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebPage),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetection" });

export interface GoogleCloudVisionV1p4beta1Celebrity {
  /** The Celebrity's display name. */
  displayName?: string;
  /** The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`. */
  name?: string;
  /** The Celebrity's description. */
  description?: string;
}

export const GoogleCloudVisionV1p4beta1Celebrity: Schema.Schema<GoogleCloudVisionV1p4beta1Celebrity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Celebrity" });

export interface GoogleCloudVisionV1p4beta1FaceRecognitionResult {
  /** The Celebrity that this face was matched to. */
  celebrity?: GoogleCloudVisionV1p4beta1Celebrity;
  /** Recognition confidence. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1FaceRecognitionResult: Schema.Schema<GoogleCloudVisionV1p4beta1FaceRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    celebrity: Schema.optional(GoogleCloudVisionV1p4beta1Celebrity),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1FaceRecognitionResult",
  });

export interface GoogleCloudVisionV1p4beta1Position {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
  /** Z coordinate (or depth). */
  z?: number;
}

export const GoogleCloudVisionV1p4beta1Position: Schema.Schema<GoogleCloudVisionV1p4beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
    z: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Position" });

export interface GoogleCloudVisionV1p4beta1FaceAnnotationLandmark {
  /** Face landmark type. */
  type?:
    | "UNKNOWN_LANDMARK"
    | "LEFT_EYE"
    | "RIGHT_EYE"
    | "LEFT_OF_LEFT_EYEBROW"
    | "RIGHT_OF_LEFT_EYEBROW"
    | "LEFT_OF_RIGHT_EYEBROW"
    | "RIGHT_OF_RIGHT_EYEBROW"
    | "MIDPOINT_BETWEEN_EYES"
    | "NOSE_TIP"
    | "UPPER_LIP"
    | "LOWER_LIP"
    | "MOUTH_LEFT"
    | "MOUTH_RIGHT"
    | "MOUTH_CENTER"
    | "NOSE_BOTTOM_RIGHT"
    | "NOSE_BOTTOM_LEFT"
    | "NOSE_BOTTOM_CENTER"
    | "LEFT_EYE_TOP_BOUNDARY"
    | "LEFT_EYE_RIGHT_CORNER"
    | "LEFT_EYE_BOTTOM_BOUNDARY"
    | "LEFT_EYE_LEFT_CORNER"
    | "RIGHT_EYE_TOP_BOUNDARY"
    | "RIGHT_EYE_RIGHT_CORNER"
    | "RIGHT_EYE_BOTTOM_BOUNDARY"
    | "RIGHT_EYE_LEFT_CORNER"
    | "LEFT_EYEBROW_UPPER_MIDPOINT"
    | "RIGHT_EYEBROW_UPPER_MIDPOINT"
    | "LEFT_EAR_TRAGION"
    | "RIGHT_EAR_TRAGION"
    | "LEFT_EYE_PUPIL"
    | "RIGHT_EYE_PUPIL"
    | "FOREHEAD_GLABELLA"
    | "CHIN_GNATHION"
    | "CHIN_LEFT_GONION"
    | "CHIN_RIGHT_GONION"
    | "LEFT_CHEEK_CENTER"
    | "RIGHT_CHEEK_CENTER"
    | (string & {});
  /** Face landmark position. */
  position?: GoogleCloudVisionV1p4beta1Position;
}

export const GoogleCloudVisionV1p4beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p4beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    position: Schema.optional(GoogleCloudVisionV1p4beta1Position),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1FaceAnnotationLandmark",
  });

export interface GoogleCloudVisionV1p4beta1FaceAnnotation {
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Under-exposed likelihood. */
  underExposedLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Additional recognition information. Only computed if image_context.face_recognition_params is provided, **and** a match is found to a Celebrity in the input CelebritySet. This field is sorted in order of decreasing confidence values. */
  recognitionResult?: ReadonlyArray<GoogleCloudVisionV1p4beta1FaceRecognitionResult>;
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p4beta1FaceAnnotationLandmark>;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p4beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headwearLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    recognitionResult: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1FaceRecognitionResult),
    ),
    blurredLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    angerLikelihood: Schema.optional(Schema.String),
    surpriseLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1FaceAnnotationLandmark),
    ),
    landmarkingConfidence: Schema.optional(Schema.Number),
    joyLikelihood: Schema.optional(Schema.String),
    panAngle: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    rollAngle: Schema.optional(Schema.Number),
    detectionConfidence: Schema.optional(Schema.Number),
    sorrowLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p4beta1SafeSearchAnnotation {
  /** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
  spoof?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
  racy?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
  violence?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this is a medical image. */
  medical?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p4beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
    adult: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1SafeSearchAnnotation" });

export interface GoogleCloudVisionV1p4beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1CropHint: Schema.Schema<GoogleCloudVisionV1p4beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    importanceFraction: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1CropHint" });

export interface GoogleCloudVisionV1p4beta1CropHintsAnnotation {
  /** Crop hint results. */
  cropHints?: ReadonlyArray<GoogleCloudVisionV1p4beta1CropHint>;
}

export const GoogleCloudVisionV1p4beta1CropHintsAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1CropHintsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cropHints: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1CropHint),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1CropHintsAnnotation" });

export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak {
  /** True if break prepends the element. */
  isPrefix?: boolean;
  /** Detected break type. */
  type?:
    | "UNKNOWN"
    | "SPACE"
    | "SURE_SPACE"
    | "EOL_SURE_SPACE"
    | "HYPHEN"
    | "LINE_BREAK"
    | (string & {});
}

export const GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isPrefix: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak",
  });

export interface GoogleCloudVisionV1p4beta1TextAnnotationTextProperty {
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage>;
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak;
}

export const GoogleCloudVisionV1p4beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p4beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage),
    ),
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p4beta1Symbol {
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
}

export const GoogleCloudVisionV1p4beta1Symbol: Schema.Schema<GoogleCloudVisionV1p4beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Symbol" });

export interface GoogleCloudVisionV1p4beta1Word {
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p4beta1Symbol>;
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p4beta1Word: Schema.Schema<GoogleCloudVisionV1p4beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Symbol)),
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Word" });

export interface GoogleCloudVisionV1p4beta1Paragraph {
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p4beta1Word>;
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p4beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Word)),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Paragraph" });

export interface GoogleCloudVisionV1p4beta1Block {
  /** Detected block type (text, image etc) for this block. */
  blockType?:
    | "UNKNOWN"
    | "TEXT"
    | "TABLE"
    | "PICTURE"
    | "RULER"
    | "BARCODE"
    | (string & {});
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p4beta1Paragraph>;
}

export const GoogleCloudVisionV1p4beta1Block: Schema.Schema<GoogleCloudVisionV1p4beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockType: Schema.optional(Schema.String),
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1Paragraph),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Block" });

export interface GoogleCloudVisionV1p4beta1Page {
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p4beta1Block>;
}

export const GoogleCloudVisionV1p4beta1Page: Schema.Schema<GoogleCloudVisionV1p4beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Block)),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Page" });

export interface GoogleCloudVisionV1p4beta1TextAnnotation {
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p4beta1Page>;
  /** UTF-8 text detected on the pages. */
  text?: string;
}

export const GoogleCloudVisionV1p4beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Page)),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1TextAnnotation" });

export interface GoogleCloudVisionV1p4beta1AnnotateImageResponse {
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p4beta1ImageProperties;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p4beta1ProductSearchResults;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p4beta1ImageAnnotationContext;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p4beta1WebDetection;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1FaceAnnotation>;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p4beta1SafeSearchAnnotation;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p4beta1CropHintsAnnotation;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p4beta1TextAnnotation;
}

export const GoogleCloudVisionV1p4beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1ImageProperties,
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p4beta1ProductSearchResults,
    ),
    context: Schema.optional(GoogleCloudVisionV1p4beta1ImageAnnotationContext),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p4beta1WebDetection),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1FaceAnnotation),
    ),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1SafeSearchAnnotation,
    ),
    error: Schema.optional(Status),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1CropHintsAnnotation,
    ),
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotation,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1AnnotateImageResponse",
  });

export interface GoogleCloudVisionV1p4beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p4beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p4beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1GcsSource" });

export interface GoogleCloudVisionV1p4beta1InputConfig {
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p4beta1GcsSource;
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
}

export const GoogleCloudVisionV1p4beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p4beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GoogleCloudVisionV1p4beta1GcsSource),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1InputConfig" });

export interface GoogleCloudVisionV1p4beta1AnnotateFileResponse {
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p4beta1AnnotateImageResponse>;
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p4beta1InputConfig;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
}

export const GoogleCloudVisionV1p4beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1AnnotateImageResponse),
    ),
    inputConfig: Schema.optional(GoogleCloudVisionV1p4beta1InputConfig),
    totalPages: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1AnnotateFileResponse" });

export interface GoogleCloudVisionV1p2beta1LatLongRect {
  /** Min lat/long pair. */
  minLatLng?: LatLng;
  /** Max lat/long pair. */
  maxLatLng?: LatLng;
}

export const GoogleCloudVisionV1p2beta1LatLongRect: Schema.Schema<GoogleCloudVisionV1p2beta1LatLongRect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLatLng: Schema.optional(LatLng),
    maxLatLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1LatLongRect" });

export interface GoogleCloudVisionV1p1beta1ColorInfo {
  /** RGB components of the color. */
  color?: Color;
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const GoogleCloudVisionV1p1beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p1beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    score: Schema.optional(Schema.Number),
    pixelFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1ColorInfo" });

export interface GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GcsDestination: Schema.Schema<GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsDestination" });

export interface OutputConfig {
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GcsDestination;
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
}

export const OutputConfig: Schema.Schema<OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsDestination),
    batchSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OutputConfig" });

export interface AsyncAnnotateFileResponse {
  /** The output location and metadata from AsyncAnnotateFileRequest. */
  outputConfig?: OutputConfig;
}

export const AsyncAnnotateFileResponse: Schema.Schema<AsyncAnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(OutputConfig),
  }).annotate({ identifier: "AsyncAnnotateFileResponse" });

export interface GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    mid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation",
  });

export interface Property {
  /** Value of numeric properties. */
  uint64Value?: string;
  /** Value of the property. */
  value?: string;
  /** Name of the property. */
  name?: string;
}

export const Property: Schema.Schema<Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uint64Value: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Property" });

export interface GoogleCloudVisionV1p3beta1Vertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p3beta1Vertex: Schema.Schema<GoogleCloudVisionV1p3beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Vertex" });

export interface GoogleCloudVisionV1p3beta1NormalizedVertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p3beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p3beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1NormalizedVertex" });

export interface GoogleCloudVisionV1p3beta1BoundingPoly {
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<GoogleCloudVisionV1p3beta1Vertex>;
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudVisionV1p3beta1NormalizedVertex>;
}

export const GoogleCloudVisionV1p3beta1BoundingPoly: Schema.Schema<GoogleCloudVisionV1p3beta1BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertices: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Vertex)),
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1NormalizedVertex),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1BoundingPoly" });

export interface GoogleCloudVisionV1p3beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p3beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p3beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1LocationInfo" });

export interface GoogleCloudVisionV1p3beta1Property {
  /** Value of the property. */
  value?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
  /** Name of the property. */
  name?: string;
}

export const GoogleCloudVisionV1p3beta1Property: Schema.Schema<GoogleCloudVisionV1p3beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Property" });

export interface GoogleCloudVisionV1p3beta1EntityAnnotation {
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p3beta1LocationInfo>;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p3beta1Property>;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p3beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicality: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    mid: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    description: Schema.optional(Schema.String),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1LocationInfo),
    ),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1Property),
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage",
  });

export interface GoogleCloudVisionV1p2beta1ProductKeyValue {
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
}

export const GoogleCloudVisionV1p2beta1ProductKeyValue: Schema.Schema<GoogleCloudVisionV1p2beta1ProductKeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ProductKeyValue" });

export interface GoogleCloudVisionV1p2beta1Product {
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductKeyValue>;
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
}

export const GoogleCloudVisionV1p2beta1Product: Schema.Schema<GoogleCloudVisionV1p2beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductKeyValue),
    ),
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Product" });

export interface GoogleCloudVisionV1p2beta1ProductSearchResultsResult {
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
  /** The Product. */
  product?: GoogleCloudVisionV1p2beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
    product: Schema.optional(GoogleCloudVisionV1p2beta1Product),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1ProductSearchResultsResult",
  });

export interface GoogleCloudVisionV1p3beta1Position {
  /** Y coordinate. */
  y?: number;
  /** Z coordinate (or depth). */
  z?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p3beta1Position: Schema.Schema<GoogleCloudVisionV1p3beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    z: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Position" });

export interface GoogleCloudVisionV1p3beta1FaceAnnotationLandmark {
  /** Face landmark position. */
  position?: GoogleCloudVisionV1p3beta1Position;
  /** Face landmark type. */
  type?:
    | "UNKNOWN_LANDMARK"
    | "LEFT_EYE"
    | "RIGHT_EYE"
    | "LEFT_OF_LEFT_EYEBROW"
    | "RIGHT_OF_LEFT_EYEBROW"
    | "LEFT_OF_RIGHT_EYEBROW"
    | "RIGHT_OF_RIGHT_EYEBROW"
    | "MIDPOINT_BETWEEN_EYES"
    | "NOSE_TIP"
    | "UPPER_LIP"
    | "LOWER_LIP"
    | "MOUTH_LEFT"
    | "MOUTH_RIGHT"
    | "MOUTH_CENTER"
    | "NOSE_BOTTOM_RIGHT"
    | "NOSE_BOTTOM_LEFT"
    | "NOSE_BOTTOM_CENTER"
    | "LEFT_EYE_TOP_BOUNDARY"
    | "LEFT_EYE_RIGHT_CORNER"
    | "LEFT_EYE_BOTTOM_BOUNDARY"
    | "LEFT_EYE_LEFT_CORNER"
    | "RIGHT_EYE_TOP_BOUNDARY"
    | "RIGHT_EYE_RIGHT_CORNER"
    | "RIGHT_EYE_BOTTOM_BOUNDARY"
    | "RIGHT_EYE_LEFT_CORNER"
    | "LEFT_EYEBROW_UPPER_MIDPOINT"
    | "RIGHT_EYEBROW_UPPER_MIDPOINT"
    | "LEFT_EAR_TRAGION"
    | "RIGHT_EAR_TRAGION"
    | "LEFT_EYE_PUPIL"
    | "RIGHT_EYE_PUPIL"
    | "FOREHEAD_GLABELLA"
    | "CHIN_GNATHION"
    | "CHIN_LEFT_GONION"
    | "CHIN_RIGHT_GONION"
    | "LEFT_CHEEK_CENTER"
    | "RIGHT_CHEEK_CENTER"
    | (string & {});
}

export const GoogleCloudVisionV1p3beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p3beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(GoogleCloudVisionV1p3beta1Position),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1FaceAnnotationLandmark",
  });

export interface KeyValue {
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
}

export const KeyValue: Schema.Schema<KeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyValue" });

export interface Product {
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<KeyValue>;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    productLabels: Schema.optional(Schema.Array(KeyValue)),
  }).annotate({ identifier: "Product" });

export interface Result {
  /** The Product. */
  product?: Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
}

export const Result: Schema.Schema<Result> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Product),
    score: Schema.optional(Schema.Number),
    image: Schema.optional(Schema.String),
  }).annotate({ identifier: "Result" });

export interface GroupedResult {
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: BoundingPoly;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<Result>;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<ObjectAnnotation>;
}

export const GroupedResult: Schema.Schema<GroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(BoundingPoly),
    results: Schema.optional(Schema.Array(Result)),
    objectAnnotations: Schema.optional(Schema.Array(ObjectAnnotation)),
  }).annotate({ identifier: "GroupedResult" });

export interface GoogleCloudVisionV1p3beta1ProductKeyValue {
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
}

export const GoogleCloudVisionV1p3beta1ProductKeyValue: Schema.Schema<GoogleCloudVisionV1p3beta1ProductKeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1ProductKeyValue" });

export interface GoogleCloudVisionV1p3beta1Product {
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductKeyValue>;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
}

export const GoogleCloudVisionV1p3beta1Product: Schema.Schema<GoogleCloudVisionV1p3beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ProductKeyValue),
    ),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Product" });

export interface GoogleCloudVisionV1p3beta1ProductSearchResultsResult {
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
  /** The Product. */
  product?: GoogleCloudVisionV1p3beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
    product: Schema.optional(GoogleCloudVisionV1p3beta1Product),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1ProductSearchResultsResult",
  });

export interface GoogleCloudVisionV1p2beta1WebDetectionParams {
  /** This field has no effect on results. */
  includeGeoResults?: boolean;
}

export const GoogleCloudVisionV1p2beta1WebDetectionParams: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeGeoResults: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetectionParams" });

export interface GoogleCloudVisionV1p2beta1TextDetectionParams {
  /** By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well. */
  enableTextDetectionConfidenceScore?: boolean;
  /** A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation. */
  advancedOcrOptions?: ReadonlyArray<string>;
}

export const GoogleCloudVisionV1p2beta1TextDetectionParams: Schema.Schema<GoogleCloudVisionV1p2beta1TextDetectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableTextDetectionConfidenceScore: Schema.optional(Schema.Boolean),
    advancedOcrOptions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1TextDetectionParams" });

export interface GoogleCloudVisionV1p2beta1CropHintsParams {
  /** Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored. */
  aspectRatios?: ReadonlyArray<number>;
}

export const GoogleCloudVisionV1p2beta1CropHintsParams: Schema.Schema<GoogleCloudVisionV1p2beta1CropHintsParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectRatios: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1CropHintsParams" });

export interface GoogleCloudVisionV1p2beta1Vertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p2beta1Vertex: Schema.Schema<GoogleCloudVisionV1p2beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Vertex" });

export interface GoogleCloudVisionV1p2beta1NormalizedVertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p2beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p2beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1NormalizedVertex" });

export interface GoogleCloudVisionV1p2beta1BoundingPoly {
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<GoogleCloudVisionV1p2beta1Vertex>;
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudVisionV1p2beta1NormalizedVertex>;
}

export const GoogleCloudVisionV1p2beta1BoundingPoly: Schema.Schema<GoogleCloudVisionV1p2beta1BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertices: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Vertex)),
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1NormalizedVertex),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1BoundingPoly" });

export interface GoogleCloudVisionV1p2beta1ProductSearchParams {
  /** The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. */
  productSet?: string;
  /** The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well. */
  productCategories?: ReadonlyArray<string>;
  /** The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='. */
  filter?: string;
}

export const GoogleCloudVisionV1p2beta1ProductSearchParams: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productSet: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    productCategories: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ProductSearchParams" });

export interface GoogleCloudVisionV1p2beta1ImageContext {
  /** List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages). */
  languageHints?: ReadonlyArray<string>;
  /** Parameters for web detection. */
  webDetectionParams?: GoogleCloudVisionV1p2beta1WebDetectionParams;
  /** Parameters for text detection and document text detection. */
  textDetectionParams?: GoogleCloudVisionV1p2beta1TextDetectionParams;
  /** Not used. */
  latLongRect?: GoogleCloudVisionV1p2beta1LatLongRect;
  /** Parameters for crop hints annotation request. */
  cropHintsParams?: GoogleCloudVisionV1p2beta1CropHintsParams;
  /** Parameters for product search. */
  productSearchParams?: GoogleCloudVisionV1p2beta1ProductSearchParams;
}

export const GoogleCloudVisionV1p2beta1ImageContext: Schema.Schema<GoogleCloudVisionV1p2beta1ImageContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageHints: Schema.optional(Schema.Array(Schema.String)),
    webDetectionParams: Schema.optional(
      GoogleCloudVisionV1p2beta1WebDetectionParams,
    ),
    textDetectionParams: Schema.optional(
      GoogleCloudVisionV1p2beta1TextDetectionParams,
    ),
    latLongRect: Schema.optional(GoogleCloudVisionV1p2beta1LatLongRect),
    cropHintsParams: Schema.optional(GoogleCloudVisionV1p2beta1CropHintsParams),
    productSearchParams: Schema.optional(
      GoogleCloudVisionV1p2beta1ProductSearchParams,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ImageContext" });

export interface GoogleCloudVisionV1p1beta1Vertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p1beta1Vertex: Schema.Schema<GoogleCloudVisionV1p1beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Vertex" });

export interface GoogleCloudVisionV1p1beta1NormalizedVertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p1beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p1beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1NormalizedVertex" });

export interface GoogleCloudVisionV1p1beta1BoundingPoly {
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<GoogleCloudVisionV1p1beta1Vertex>;
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudVisionV1p1beta1NormalizedVertex>;
}

export const GoogleCloudVisionV1p1beta1BoundingPoly: Schema.Schema<GoogleCloudVisionV1p1beta1BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertices: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Vertex)),
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1NormalizedVertex),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1BoundingPoly" });

export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak {
  /** Detected break type. */
  type?:
    | "UNKNOWN"
    | "SPACE"
    | "SURE_SPACE"
    | "EOL_SURE_SPACE"
    | "HYPHEN"
    | "LINE_BREAK"
    | (string & {});
  /** True if break prepends the element. */
  isPrefix?: boolean;
}

export const GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    isPrefix: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak",
  });

export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage",
  });

export interface GoogleCloudVisionV1p1beta1TextAnnotationTextProperty {
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage>;
}

export const GoogleCloudVisionV1p1beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p1beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak,
    ),
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p1beta1Symbol {
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
}

export const GoogleCloudVisionV1p1beta1Symbol: Schema.Schema<GoogleCloudVisionV1p1beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Symbol" });

export interface GoogleCloudVisionV1p1beta1Word {
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p1beta1Symbol>;
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p1beta1Word: Schema.Schema<GoogleCloudVisionV1p1beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Symbol)),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Word" });

export interface GoogleCloudVisionV1p3beta1GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GoogleCloudVisionV1p3beta1GcsDestination: Schema.Schema<GoogleCloudVisionV1p3beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1GcsDestination" });

export interface GoogleCloudVisionV1p3beta1OutputConfig {
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GoogleCloudVisionV1p3beta1GcsDestination;
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
}

export const GoogleCloudVisionV1p3beta1OutputConfig: Schema.Schema<GoogleCloudVisionV1p3beta1OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GoogleCloudVisionV1p3beta1GcsDestination),
    batchSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1OutputConfig" });

export interface AsyncBatchAnnotateFilesResponse {
  /** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<AsyncAnnotateFileResponse>;
}

export const AsyncBatchAnnotateFilesResponse: Schema.Schema<AsyncBatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(AsyncAnnotateFileResponse)),
  }).annotate({ identifier: "AsyncBatchAnnotateFilesResponse" });

export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak {
  /** True if break prepends the element. */
  isPrefix?: boolean;
  /** Detected break type. */
  type?:
    | "UNKNOWN"
    | "SPACE"
    | "SURE_SPACE"
    | "EOL_SURE_SPACE"
    | "HYPHEN"
    | "LINE_BREAK"
    | (string & {});
}

export const GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isPrefix: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak",
  });

export interface GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage>;
}

export const GoogleCloudVisionV1p2beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak,
    ),
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p2beta1Symbol {
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
}

export const GoogleCloudVisionV1p2beta1Symbol: Schema.Schema<GoogleCloudVisionV1p2beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Symbol" });

export interface GoogleCloudVisionV1p2beta1Word {
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p2beta1Symbol>;
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p2beta1Word: Schema.Schema<GoogleCloudVisionV1p2beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Symbol)),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Word" });

export interface GoogleCloudVisionV1p2beta1Paragraph {
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p2beta1Word>;
}

export const GoogleCloudVisionV1p2beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p2beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Word)),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Paragraph" });

export interface GoogleCloudVisionV1p2beta1Block {
  /** Detected block type (text, image etc) for this block. */
  blockType?:
    | "UNKNOWN"
    | "TEXT"
    | "TABLE"
    | "PICTURE"
    | "RULER"
    | "BARCODE"
    | (string & {});
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p2beta1Paragraph>;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
}

export const GoogleCloudVisionV1p2beta1Block: Schema.Schema<GoogleCloudVisionV1p2beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockType: Schema.optional(Schema.String),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1Paragraph),
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Block" });

export interface GoogleCloudVisionV1p2beta1Page {
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p2beta1Block>;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
}

export const GoogleCloudVisionV1p2beta1Page: Schema.Schema<GoogleCloudVisionV1p2beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Block)),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Page" });

export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak {
  /** True if break prepends the element. */
  isPrefix?: boolean;
  /** Detected break type. */
  type?:
    | "UNKNOWN"
    | "SPACE"
    | "SURE_SPACE"
    | "EOL_SURE_SPACE"
    | "HYPHEN"
    | "LINE_BREAK"
    | (string & {});
}

export const GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isPrefix: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak",
  });

export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage",
  });

export interface GoogleCloudVisionV1p3beta1TextAnnotationTextProperty {
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak;
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage>;
}

export const GoogleCloudVisionV1p3beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak,
    ),
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p3beta1Symbol {
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p3beta1Symbol: Schema.Schema<GoogleCloudVisionV1p3beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    text: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Symbol" });

export interface GoogleCloudVisionV1p3beta1Word {
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p3beta1Symbol>;
}

export const GoogleCloudVisionV1p3beta1Word: Schema.Schema<GoogleCloudVisionV1p3beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Symbol)),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Word" });

export interface GoogleCloudVisionV1p3beta1Paragraph {
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p3beta1Word>;
}

export const GoogleCloudVisionV1p3beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p3beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Word)),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Paragraph" });

export interface GoogleCloudVisionV1p3beta1Block {
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p3beta1Paragraph>;
  /** Detected block type (text, image etc) for this block. */
  blockType?:
    | "UNKNOWN"
    | "TEXT"
    | "TABLE"
    | "PICTURE"
    | "RULER"
    | "BARCODE"
    | (string & {});
}

export const GoogleCloudVisionV1p3beta1Block: Schema.Schema<GoogleCloudVisionV1p3beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1Paragraph),
    ),
    blockType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Block" });

export interface GoogleCloudVisionV1p3beta1Page {
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p3beta1Block>;
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
}

export const GoogleCloudVisionV1p3beta1Page: Schema.Schema<GoogleCloudVisionV1p3beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Block)),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Page" });

export interface GoogleCloudVisionV1p2beta1ImageSource {
  /** **Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. */
  gcsImageUri?: string;
  /** The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence. */
  imageUri?: string;
}

export const GoogleCloudVisionV1p2beta1ImageSource: Schema.Schema<GoogleCloudVisionV1p2beta1ImageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsImageUri: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ImageSource" });

export interface GoogleCloudVisionV1p2beta1Image {
  /** Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests. */
  content?: string;
  /** Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request. */
  source?: GoogleCloudVisionV1p2beta1ImageSource;
}

export const GoogleCloudVisionV1p2beta1Image: Schema.Schema<GoogleCloudVisionV1p2beta1Image> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    source: Schema.optional(GoogleCloudVisionV1p2beta1ImageSource),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Image" });

export interface GoogleCloudVisionV1p2beta1Position {
  /** Y coordinate. */
  y?: number;
  /** Z coordinate (or depth). */
  z?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudVisionV1p2beta1Position: Schema.Schema<GoogleCloudVisionV1p2beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    z: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Position" });

export interface Position {
  /** Y coordinate. */
  y?: number;
  /** Z coordinate (or depth). */
  z?: number;
  /** X coordinate. */
  x?: number;
}

export const Position: Schema.Schema<Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    z: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Position" });

export interface ColorInfo {
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
  /** RGB components of the color. */
  color?: Color;
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
}

export const ColorInfo: Schema.Schema<ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pixelFraction: Schema.optional(Schema.Number),
    color: Schema.optional(Color),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ColorInfo" });

export interface DominantColorsAnnotation {
  /** RGB color values with their score and pixel fraction. */
  colors?: ReadonlyArray<ColorInfo>;
}

export const DominantColorsAnnotation: Schema.Schema<DominantColorsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    colors: Schema.optional(Schema.Array(ColorInfo)),
  }).annotate({ identifier: "DominantColorsAnnotation" });

export interface ImageProperties {
  /** If present, dominant colors completed successfully. */
  dominantColors?: DominantColorsAnnotation;
}

export const ImageProperties: Schema.Schema<ImageProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dominantColors: Schema.optional(DominantColorsAnnotation),
  }).annotate({ identifier: "ImageProperties" });

export interface GoogleCloudVisionV1p3beta1OperationMetadata {
  /** The time when the batch request was received. */
  createTime?: string;
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
}

export const GoogleCloudVisionV1p3beta1OperationMetadata: Schema.Schema<GoogleCloudVisionV1p3beta1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1OperationMetadata" });

export interface LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const LocationInfo: Schema.Schema<LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "LocationInfo" });

export interface GoogleCloudVisionV1p2beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p2beta1CropHint: Schema.Schema<GoogleCloudVisionV1p2beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    importanceFraction: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1CropHint" });

export interface GoogleCloudVisionV1p2beta1CropHintsAnnotation {
  /** Crop hint results. */
  cropHints?: ReadonlyArray<GoogleCloudVisionV1p2beta1CropHint>;
}

export const GoogleCloudVisionV1p2beta1CropHintsAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1CropHintsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cropHints: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1CropHint),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1CropHintsAnnotation" });

export interface GoogleCloudVisionV1p2beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p2beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p2beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1GcsSource" });

export interface GoogleCloudVisionV1p1beta1Paragraph {
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p1beta1Word>;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p1beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p1beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Word)),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Paragraph" });

export interface GoogleCloudVisionV1p1beta1Block {
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p1beta1Paragraph>;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Detected block type (text, image etc) for this block. */
  blockType?:
    | "UNKNOWN"
    | "TEXT"
    | "TABLE"
    | "PICTURE"
    | "RULER"
    | "BARCODE"
    | (string & {});
}

export const GoogleCloudVisionV1p1beta1Block: Schema.Schema<GoogleCloudVisionV1p1beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1Paragraph),
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    blockType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Block" });

export interface GoogleCloudVisionV1p1beta1Page {
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p1beta1Block>;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
}

export const GoogleCloudVisionV1p1beta1Page: Schema.Schema<GoogleCloudVisionV1p1beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Block)),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Page" });

export interface GoogleCloudVisionV1p2beta1WebDetectionWebImage {
  /** The result image URL. */
  url?: string;
  /** (Deprecated) Overall relevancy score for the image. */
  score?: number;
}

export const GoogleCloudVisionV1p2beta1WebDetectionWebImage: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionWebImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetectionWebImage" });

export interface DetectedBreak {
  /** Detected break type. */
  type?:
    | "UNKNOWN"
    | "SPACE"
    | "SURE_SPACE"
    | "EOL_SURE_SPACE"
    | "HYPHEN"
    | "LINE_BREAK"
    | (string & {});
  /** True if break prepends the element. */
  isPrefix?: boolean;
}

export const DetectedBreak: Schema.Schema<DetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    isPrefix: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DetectedBreak" });

export interface DetectedLanguage {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
}

export const DetectedLanguage: Schema.Schema<DetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DetectedLanguage" });

export interface TextProperty {
  /** Detected start or end of a text segment. */
  detectedBreak?: DetectedBreak;
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<DetectedLanguage>;
}

export const TextProperty: Schema.Schema<TextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedBreak: Schema.optional(DetectedBreak),
    detectedLanguages: Schema.optional(Schema.Array(DetectedLanguage)),
  }).annotate({ identifier: "TextProperty" });

export interface GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation {
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation",
  });

export interface GoogleCloudVisionV1p1beta1ProductKeyValue {
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
}

export const GoogleCloudVisionV1p1beta1ProductKeyValue: Schema.Schema<GoogleCloudVisionV1p1beta1ProductKeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1ProductKeyValue" });

export interface GoogleCloudVisionV1p1beta1Product {
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductKeyValue>;
}

export const GoogleCloudVisionV1p1beta1Product: Schema.Schema<GoogleCloudVisionV1p1beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductKeyValue),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Product" });

export interface GoogleCloudVisionV1p1beta1ProductSearchResultsResult {
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
  /** The Product. */
  product?: GoogleCloudVisionV1p1beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
    product: Schema.optional(GoogleCloudVisionV1p1beta1Product),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1ProductSearchResultsResult",
  });

export interface GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult {
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation>;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductSearchResultsResult),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult",
  });

export interface GoogleCloudVisionV1p3beta1WebDetectionWebLabel {
  /** Label for extra metadata. */
  label?: string;
  /** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p3beta1WebDetectionWebLabel: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetectionWebLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1WebDetectionWebLabel" });

export interface WebLabel {
  /** Label for extra metadata. */
  label?: string;
  /** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const WebLabel: Schema.Schema<WebLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebLabel" });

export interface GoogleCloudVisionV1p4beta1GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GoogleCloudVisionV1p4beta1GcsDestination: Schema.Schema<GoogleCloudVisionV1p4beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1GcsDestination" });

export interface GoogleCloudVisionV1p4beta1OutputConfig {
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GoogleCloudVisionV1p4beta1GcsDestination;
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
}

export const GoogleCloudVisionV1p4beta1OutputConfig: Schema.Schema<GoogleCloudVisionV1p4beta1OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GoogleCloudVisionV1p4beta1GcsDestination),
    batchSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1OutputConfig" });

export interface GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse {
  /** The output location and metadata from AsyncAnnotateFileRequest. */
  outputConfig?: GoogleCloudVisionV1p4beta1OutputConfig;
}

export const GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudVisionV1p4beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse",
  });

export interface GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation",
  });

export interface GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult {
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation>;
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductSearchResultsResult),
    ),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult",
  });

export interface GoogleCloudVisionV1p2beta1ProductSearchResults {
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult>;
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult),
    ),
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductSearchResultsResult),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ProductSearchResults" });

export interface GoogleCloudVisionV1p2beta1Feature {
  /** The feature type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "FACE_DETECTION"
    | "LANDMARK_DETECTION"
    | "LOGO_DETECTION"
    | "LABEL_DETECTION"
    | "TEXT_DETECTION"
    | "DOCUMENT_TEXT_DETECTION"
    | "SAFE_SEARCH_DETECTION"
    | "IMAGE_PROPERTIES"
    | "CROP_HINTS"
    | "WEB_DETECTION"
    | "PRODUCT_SEARCH"
    | "OBJECT_LOCALIZATION"
    | (string & {});
  /** Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`. */
  maxResults?: number;
  /** Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/rc" for the latest release candidate. */
  model?: string;
}

export const GoogleCloudVisionV1p2beta1Feature: Schema.Schema<GoogleCloudVisionV1p2beta1Feature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Number),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Feature" });

export interface GoogleCloudVisionV1p2beta1InputConfig {
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
}

export const GoogleCloudVisionV1p2beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p2beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GoogleCloudVisionV1p2beta1GcsSource),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1InputConfig" });

export interface GoogleCloudVisionV1p2beta1AnnotateFileRequest {
  /** Required. Requested features. */
  features?: ReadonlyArray<GoogleCloudVisionV1p2beta1Feature>;
  /** Additional context that may accompany the image(s) in the file. */
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
  /** Required. Information about the input file. */
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
  /** Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file. */
  pages?: ReadonlyArray<number>;
}

export const GoogleCloudVisionV1p2beta1AnnotateFileRequest: Schema.Schema<GoogleCloudVisionV1p2beta1AnnotateFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Feature)),
    imageContext: Schema.optional(GoogleCloudVisionV1p2beta1ImageContext),
    inputConfig: Schema.optional(GoogleCloudVisionV1p2beta1InputConfig),
    pages: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1AnnotateFileRequest" });

export interface GoogleCloudVisionV1p1beta1GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GoogleCloudVisionV1p1beta1GcsDestination: Schema.Schema<GoogleCloudVisionV1p1beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1GcsDestination" });

export interface GoogleCloudVisionV1p1beta1OutputConfig {
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
}

export const GoogleCloudVisionV1p1beta1OutputConfig: Schema.Schema<GoogleCloudVisionV1p1beta1OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GoogleCloudVisionV1p1beta1GcsDestination),
    batchSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1OutputConfig" });

export interface GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse {
  /** The output location and metadata from AsyncAnnotateFileRequest. */
  outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
}

export const GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudVisionV1p1beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse",
  });

export interface GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse {
  /** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse>;
}

export const GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse: Schema.Schema<GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse",
  });

export interface GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
}

export const GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation",
  });

export interface ProductSearchResults {
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GroupedResult>;
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<Result>;
}

export const ProductSearchResults: Schema.Schema<ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productGroupedResults: Schema.optional(Schema.Array(GroupedResult)),
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Result)),
  }).annotate({ identifier: "ProductSearchResults" });

export interface GoogleCloudVisionV1p4beta1ReferenceImage {
  /** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
  name?: string;
  /** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
  boundingPolys?: ReadonlyArray<GoogleCloudVisionV1p4beta1BoundingPoly>;
  /** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
  uri?: string;
}

export const GoogleCloudVisionV1p4beta1ReferenceImage: Schema.Schema<GoogleCloudVisionV1p4beta1ReferenceImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    boundingPolys: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1BoundingPoly),
    ),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ReferenceImage" });

export interface GoogleCloudVisionV1p4beta1ImportProductSetsResponse {
  /** The list of reference_images that are imported successfully. */
  referenceImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1ReferenceImage>;
  /** The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. */
  statuses?: ReadonlyArray<Status>;
}

export const GoogleCloudVisionV1p4beta1ImportProductSetsResponse: Schema.Schema<GoogleCloudVisionV1p4beta1ImportProductSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ReferenceImage),
    ),
    statuses: Schema.optional(Schema.Array(Status)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1ImportProductSetsResponse",
  });

export interface GoogleCloudVisionV1p3beta1ReferenceImage {
  /** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
  uri?: string;
  /** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
  name?: string;
  /** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
  boundingPolys?: ReadonlyArray<GoogleCloudVisionV1p3beta1BoundingPoly>;
}

export const GoogleCloudVisionV1p3beta1ReferenceImage: Schema.Schema<GoogleCloudVisionV1p3beta1ReferenceImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    boundingPolys: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1BoundingPoly),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1ReferenceImage" });

export interface GoogleCloudVisionV1p2beta1AnnotateImageRequest {
  /** Requested features. */
  features?: ReadonlyArray<GoogleCloudVisionV1p2beta1Feature>;
  /** Additional context that may accompany the image. */
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
  /** The image to be processed. */
  image?: GoogleCloudVisionV1p2beta1Image;
}

export const GoogleCloudVisionV1p2beta1AnnotateImageRequest: Schema.Schema<GoogleCloudVisionV1p2beta1AnnotateImageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Feature)),
    imageContext: Schema.optional(GoogleCloudVisionV1p2beta1ImageContext),
    image: Schema.optional(GoogleCloudVisionV1p2beta1Image),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1AnnotateImageRequest" });

export interface GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest {
  /** Required. Individual image annotation requests for this batch. */
  requests?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateImageRequest>;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest: Schema.Schema<GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateImageRequest),
    ),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest",
  });

export interface GoogleCloudVisionV1p2beta1WebDetectionWebPage {
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** The result web page URL. */
  url?: string;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
}

export const GoogleCloudVisionV1p2beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    pageTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p1beta1WebDetectionWebEntity {
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Canonical description of the entity, in English. */
  description?: string;
  /** Opaque entity ID. */
  entityId?: string;
}

export const GoogleCloudVisionV1p1beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1WebDetectionWebEntity",
  });

export interface GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse {
  /** The output location and metadata from AsyncAnnotateFileRequest. */
  outputConfig?: GoogleCloudVisionV1p3beta1OutputConfig;
}

export const GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudVisionV1p3beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse",
  });

export interface Vision_Symbol {
  /** Additional information detected for the symbol. */
  property?: TextProperty;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
}

export const Vision_Symbol: Schema.Schema<Vision_Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(TextProperty),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(BoundingPoly),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "Vision_Symbol" });

export interface Word {
  /** Additional information detected for the word. */
  property?: TextProperty;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: BoundingPoly;
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<Vision_Symbol>;
}

export const Word: Schema.Schema<Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(TextProperty),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(BoundingPoly),
    symbols: Schema.optional(Schema.Array(Vision_Symbol)),
  }).annotate({ identifier: "Word" });

export interface Paragraph {
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<Word>;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the paragraph. */
  property?: TextProperty;
}

export const Paragraph: Schema.Schema<Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(BoundingPoly),
    words: Schema.optional(Schema.Array(Word)),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(TextProperty),
  }).annotate({ identifier: "Paragraph" });

export interface Block {
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: BoundingPoly;
  /** Additional information detected for the block. */
  property?: TextProperty;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<Paragraph>;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** Detected block type (text, image etc) for this block. */
  blockType?:
    | "UNKNOWN"
    | "TEXT"
    | "TABLE"
    | "PICTURE"
    | "RULER"
    | "BARCODE"
    | (string & {});
}

export const Block: Schema.Schema<Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(BoundingPoly),
    property: Schema.optional(TextProperty),
    paragraphs: Schema.optional(Schema.Array(Paragraph)),
    confidence: Schema.optional(Schema.Number),
    blockType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Block" });

export interface Page {
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: TextProperty;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<Block>;
}

export const Page: Schema.Schema<Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(TextProperty),
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(Block)),
  }).annotate({ identifier: "Page" });

export interface TextAnnotation {
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<Page>;
  /** UTF-8 text detected on the pages. */
  text?: string;
}

export const TextAnnotation: Schema.Schema<TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(Page)),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextAnnotation" });

export interface GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GcsSource: Schema.Schema<GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsSource" });

export interface InputConfig {
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GcsSource;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
}

export const InputConfig: Schema.Schema<InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GcsSource),
    content: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InputConfig" });

export interface ImageAnnotationContext {
  /** The URI of the file used to produce the image. */
  uri?: string;
  /** If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. */
  pageNumber?: number;
}

export const ImageAnnotationContext: Schema.Schema<ImageAnnotationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pageNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ImageAnnotationContext" });

export interface EntityAnnotation {
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<Property>;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<LocationInfo>;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: BoundingPoly;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
}

export const EntityAnnotation: Schema.Schema<EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    properties: Schema.optional(Schema.Array(Property)),
    description: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(LocationInfo)),
    boundingPoly: Schema.optional(BoundingPoly),
    locale: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    topicality: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EntityAnnotation" });

export interface WebImage {
  /** The result image URL. */
  url?: string;
  /** (Deprecated) Overall relevancy score for the image. */
  score?: number;
}

export const WebImage: Schema.Schema<WebImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WebImage" });

export interface WebPage {
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** The result web page URL. */
  url?: string;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<WebImage>;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<WebImage>;
}

export const WebPage: Schema.Schema<WebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageTitle: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
    fullMatchingImages: Schema.optional(Schema.Array(WebImage)),
    partialMatchingImages: Schema.optional(Schema.Array(WebImage)),
  }).annotate({ identifier: "WebPage" });

export interface WebEntity {
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Opaque entity ID. */
  entityId?: string;
  /** Canonical description of the entity, in English. */
  description?: string;
}

export const WebEntity: Schema.Schema<WebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    entityId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebEntity" });

export interface WebDetection {
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<WebLabel>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<WebPage>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<WebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<WebImage>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<WebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<WebImage>;
}

export const WebDetection: Schema.Schema<WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestGuessLabels: Schema.optional(Schema.Array(WebLabel)),
    pagesWithMatchingImages: Schema.optional(Schema.Array(WebPage)),
    webEntities: Schema.optional(Schema.Array(WebEntity)),
    visuallySimilarImages: Schema.optional(Schema.Array(WebImage)),
    fullMatchingImages: Schema.optional(Schema.Array(WebImage)),
    partialMatchingImages: Schema.optional(Schema.Array(WebImage)),
  }).annotate({ identifier: "WebDetection" });

export interface Landmark {
  /** Face landmark type. */
  type?:
    | "UNKNOWN_LANDMARK"
    | "LEFT_EYE"
    | "RIGHT_EYE"
    | "LEFT_OF_LEFT_EYEBROW"
    | "RIGHT_OF_LEFT_EYEBROW"
    | "LEFT_OF_RIGHT_EYEBROW"
    | "RIGHT_OF_RIGHT_EYEBROW"
    | "MIDPOINT_BETWEEN_EYES"
    | "NOSE_TIP"
    | "UPPER_LIP"
    | "LOWER_LIP"
    | "MOUTH_LEFT"
    | "MOUTH_RIGHT"
    | "MOUTH_CENTER"
    | "NOSE_BOTTOM_RIGHT"
    | "NOSE_BOTTOM_LEFT"
    | "NOSE_BOTTOM_CENTER"
    | "LEFT_EYE_TOP_BOUNDARY"
    | "LEFT_EYE_RIGHT_CORNER"
    | "LEFT_EYE_BOTTOM_BOUNDARY"
    | "LEFT_EYE_LEFT_CORNER"
    | "RIGHT_EYE_TOP_BOUNDARY"
    | "RIGHT_EYE_RIGHT_CORNER"
    | "RIGHT_EYE_BOTTOM_BOUNDARY"
    | "RIGHT_EYE_LEFT_CORNER"
    | "LEFT_EYEBROW_UPPER_MIDPOINT"
    | "RIGHT_EYEBROW_UPPER_MIDPOINT"
    | "LEFT_EAR_TRAGION"
    | "RIGHT_EAR_TRAGION"
    | "LEFT_EYE_PUPIL"
    | "RIGHT_EYE_PUPIL"
    | "FOREHEAD_GLABELLA"
    | "CHIN_GNATHION"
    | "CHIN_LEFT_GONION"
    | "CHIN_RIGHT_GONION"
    | "LEFT_CHEEK_CENTER"
    | "RIGHT_CHEEK_CENTER"
    | (string & {});
  /** Face landmark position. */
  position?: Position;
}

export const Landmark: Schema.Schema<Landmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    position: Schema.optional(Position),
  }).annotate({ identifier: "Landmark" });

export interface FaceAnnotation {
  /** Under-exposed likelihood. */
  underExposedLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<Landmark>;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: BoundingPoly;
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: BoundingPoly;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
}

export const FaceAnnotation: Schema.Schema<FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    underExposedLikelihood: Schema.optional(Schema.String),
    headwearLikelihood: Schema.optional(Schema.String),
    panAngle: Schema.optional(Schema.Number),
    joyLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(Schema.Array(Landmark)),
    landmarkingConfidence: Schema.optional(Schema.Number),
    surpriseLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    angerLikelihood: Schema.optional(Schema.String),
    blurredLikelihood: Schema.optional(Schema.String),
    fdBoundingPoly: Schema.optional(BoundingPoly),
    rollAngle: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(BoundingPoly),
    sorrowLikelihood: Schema.optional(Schema.String),
    detectionConfidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FaceAnnotation" });

export interface LocalizedObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: BoundingPoly;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
}

export const LocalizedObjectAnnotation: Schema.Schema<LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(BoundingPoly),
    mid: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedObjectAnnotation" });

export interface SafeSearchAnnotation {
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this is a medical image. */
  medical?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
  spoof?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
  racy?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
  violence?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const SafeSearchAnnotation: Schema.Schema<SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adult: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
  }).annotate({ identifier: "SafeSearchAnnotation" });

export interface CropHint {
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: BoundingPoly;
}

export const CropHint: Schema.Schema<CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(BoundingPoly),
  }).annotate({ identifier: "CropHint" });

export interface CropHintsAnnotation {
  /** Crop hint results. */
  cropHints?: ReadonlyArray<CropHint>;
}

export const CropHintsAnnotation: Schema.Schema<CropHintsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cropHints: Schema.optional(Schema.Array(CropHint)),
  }).annotate({ identifier: "CropHintsAnnotation" });

export interface AnnotateImageResponse {
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: ImageAnnotationContext;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, web detection has completed successfully. */
  webDetection?: WebDetection;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<FaceAnnotation>;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<LocalizedObjectAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: ImageProperties;
  /** If present, product search has completed successfully. */
  productSearchResults?: ProductSearchResults;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: TextAnnotation;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: SafeSearchAnnotation;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: CropHintsAnnotation;
}

export const AnnotateImageResponse: Schema.Schema<AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.optional(ImageAnnotationContext),
    labelAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    webDetection: Schema.optional(WebDetection),
    faceAnnotations: Schema.optional(Schema.Array(FaceAnnotation)),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(LocalizedObjectAnnotation),
    ),
    logoAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    imagePropertiesAnnotation: Schema.optional(ImageProperties),
    productSearchResults: Schema.optional(ProductSearchResults),
    fullTextAnnotation: Schema.optional(TextAnnotation),
    landmarkAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    safeSearchAnnotation: Schema.optional(SafeSearchAnnotation),
    error: Schema.optional(Status),
    textAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    cropHintsAnnotation: Schema.optional(CropHintsAnnotation),
  }).annotate({ identifier: "AnnotateImageResponse" });

export interface AnnotateFileResponse {
  /** Information about the file for which this response is generated. */
  inputConfig?: InputConfig;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<AnnotateImageResponse>;
}

export const AnnotateFileResponse: Schema.Schema<AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(InputConfig),
    totalPages: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
    responses: Schema.optional(Schema.Array(AnnotateImageResponse)),
  }).annotate({ identifier: "AnnotateFileResponse" });

export interface GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult {
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation>;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ProductSearchResultsResult),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult",
  });

export interface GoogleCloudVisionV1p2beta1GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GoogleCloudVisionV1p2beta1GcsDestination: Schema.Schema<GoogleCloudVisionV1p2beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1GcsDestination" });

export interface GoogleCloudVisionV1p2beta1OutputConfig {
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GoogleCloudVisionV1p2beta1GcsDestination;
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
}

export const GoogleCloudVisionV1p2beta1OutputConfig: Schema.Schema<GoogleCloudVisionV1p2beta1OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GoogleCloudVisionV1p2beta1GcsDestination),
    batchSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1OutputConfig" });

export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse {
  /** The output location and metadata from AsyncAnnotateFileRequest. */
  outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
}

export const GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudVisionV1p2beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse",
  });

export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse {
  /** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse>;
}

export const GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse: Schema.Schema<GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse",
  });

export interface GoogleCloudVisionV1p2beta1ImageAnnotationContext {
  /** The URI of the file used to produce the image. */
  uri?: string;
  /** If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. */
  pageNumber?: number;
}

export const GoogleCloudVisionV1p2beta1ImageAnnotationContext: Schema.Schema<GoogleCloudVisionV1p2beta1ImageAnnotationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pageNumber: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1ImageAnnotationContext",
  });

export interface GoogleCloudVisionV1p3beta1CropHint {
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
}

export const GoogleCloudVisionV1p3beta1CropHint: Schema.Schema<GoogleCloudVisionV1p3beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1CropHint" });

export interface GoogleCloudVisionV1p3beta1CropHintsAnnotation {
  /** Crop hint results. */
  cropHints?: ReadonlyArray<GoogleCloudVisionV1p3beta1CropHint>;
}

export const GoogleCloudVisionV1p3beta1CropHintsAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1CropHintsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cropHints: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1CropHint),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1CropHintsAnnotation" });

export interface GoogleCloudVisionV1p1beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p1beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p1beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1GcsSource" });

export interface GoogleCloudVisionV1p1beta1InputConfig {
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p1beta1GcsSource;
}

export const GoogleCloudVisionV1p1beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p1beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GoogleCloudVisionV1p1beta1GcsSource),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1InputConfig" });

export interface GoogleCloudVisionV1p1beta1TextAnnotation {
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p1beta1Page>;
  /** UTF-8 text detected on the pages. */
  text?: string;
}

export const GoogleCloudVisionV1p1beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Page)),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1TextAnnotation" });

export interface GoogleCloudVisionV1p1beta1Property {
  /** Value of numeric properties. */
  uint64Value?: string;
  /** Value of the property. */
  value?: string;
  /** Name of the property. */
  name?: string;
}

export const GoogleCloudVisionV1p1beta1Property: Schema.Schema<GoogleCloudVisionV1p1beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uint64Value: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Property" });

export interface GoogleCloudVisionV1p1beta1EntityAnnotation {
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p1beta1Property>;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p1beta1LocationInfo>;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
}

export const GoogleCloudVisionV1p1beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1Property),
    ),
    description: Schema.optional(Schema.String),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1LocationInfo),
    ),
    confidence: Schema.optional(Schema.Number),
    topicality: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    mid: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p1beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p1beta1CropHint: Schema.Schema<GoogleCloudVisionV1p1beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    importanceFraction: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1CropHint" });

export interface GoogleCloudVisionV1p1beta1CropHintsAnnotation {
  /** Crop hint results. */
  cropHints?: ReadonlyArray<GoogleCloudVisionV1p1beta1CropHint>;
}

export const GoogleCloudVisionV1p1beta1CropHintsAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1CropHintsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cropHints: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1CropHint),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1CropHintsAnnotation" });

export interface GoogleCloudVisionV1p1beta1SafeSearchAnnotation {
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this is a medical image. */
  medical?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
  violence?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
  spoof?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
  racy?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p1beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adult: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1SafeSearchAnnotation" });

export interface GoogleCloudVisionV1p1beta1WebDetectionWebImage {
  /** The result image URL. */
  url?: string;
  /** (Deprecated) Overall relevancy score for the image. */
  score?: number;
}

export const GoogleCloudVisionV1p1beta1WebDetectionWebImage: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetectionWebImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1WebDetectionWebImage" });

export interface GoogleCloudVisionV1p1beta1WebDetectionWebLabel {
  /** Label for extra metadata. */
  label?: string;
  /** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p1beta1WebDetectionWebLabel: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetectionWebLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1WebDetectionWebLabel" });

export interface GoogleCloudVisionV1p1beta1WebDetectionWebPage {
  /** The result web page URL. */
  url?: string;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
}

export const GoogleCloudVisionV1p1beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    score: Schema.optional(Schema.Number),
    pageTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p1beta1WebDetection {
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebLabel>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebPage>;
}

export const GoogleCloudVisionV1p1beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebLabel),
    ),
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebPage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1WebDetection" });

export interface GoogleCloudVisionV1p1beta1Position {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
  /** Z coordinate (or depth). */
  z?: number;
}

export const GoogleCloudVisionV1p1beta1Position: Schema.Schema<GoogleCloudVisionV1p1beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
    z: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Position" });

export interface GoogleCloudVisionV1p1beta1FaceAnnotationLandmark {
  /** Face landmark type. */
  type?:
    | "UNKNOWN_LANDMARK"
    | "LEFT_EYE"
    | "RIGHT_EYE"
    | "LEFT_OF_LEFT_EYEBROW"
    | "RIGHT_OF_LEFT_EYEBROW"
    | "LEFT_OF_RIGHT_EYEBROW"
    | "RIGHT_OF_RIGHT_EYEBROW"
    | "MIDPOINT_BETWEEN_EYES"
    | "NOSE_TIP"
    | "UPPER_LIP"
    | "LOWER_LIP"
    | "MOUTH_LEFT"
    | "MOUTH_RIGHT"
    | "MOUTH_CENTER"
    | "NOSE_BOTTOM_RIGHT"
    | "NOSE_BOTTOM_LEFT"
    | "NOSE_BOTTOM_CENTER"
    | "LEFT_EYE_TOP_BOUNDARY"
    | "LEFT_EYE_RIGHT_CORNER"
    | "LEFT_EYE_BOTTOM_BOUNDARY"
    | "LEFT_EYE_LEFT_CORNER"
    | "RIGHT_EYE_TOP_BOUNDARY"
    | "RIGHT_EYE_RIGHT_CORNER"
    | "RIGHT_EYE_BOTTOM_BOUNDARY"
    | "RIGHT_EYE_LEFT_CORNER"
    | "LEFT_EYEBROW_UPPER_MIDPOINT"
    | "RIGHT_EYEBROW_UPPER_MIDPOINT"
    | "LEFT_EAR_TRAGION"
    | "RIGHT_EAR_TRAGION"
    | "LEFT_EYE_PUPIL"
    | "RIGHT_EYE_PUPIL"
    | "FOREHEAD_GLABELLA"
    | "CHIN_GNATHION"
    | "CHIN_LEFT_GONION"
    | "CHIN_RIGHT_GONION"
    | "LEFT_CHEEK_CENTER"
    | "RIGHT_CHEEK_CENTER"
    | (string & {});
  /** Face landmark position. */
  position?: GoogleCloudVisionV1p1beta1Position;
}

export const GoogleCloudVisionV1p1beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p1beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    position: Schema.optional(GoogleCloudVisionV1p1beta1Position),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1FaceAnnotationLandmark",
  });

export interface GoogleCloudVisionV1p1beta1FaceAnnotation {
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p1beta1FaceAnnotationLandmark>;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Under-exposed likelihood. */
  underExposedLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p1beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sorrowLikelihood: Schema.optional(Schema.String),
    detectionConfidence: Schema.optional(Schema.Number),
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    rollAngle: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    panAngle: Schema.optional(Schema.Number),
    joyLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1FaceAnnotationLandmark),
    ),
    landmarkingConfidence: Schema.optional(Schema.Number),
    surpriseLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    angerLikelihood: Schema.optional(Schema.String),
    blurredLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    headwearLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p1beta1ImageAnnotationContext {
  /** The URI of the file used to produce the image. */
  uri?: string;
  /** If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. */
  pageNumber?: number;
}

export const GoogleCloudVisionV1p1beta1ImageAnnotationContext: Schema.Schema<GoogleCloudVisionV1p1beta1ImageAnnotationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pageNumber: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1ImageAnnotationContext",
  });

export interface GoogleCloudVisionV1p1beta1DominantColorsAnnotation {
  /** RGB color values with their score and pixel fraction. */
  colors?: ReadonlyArray<GoogleCloudVisionV1p1beta1ColorInfo>;
}

export const GoogleCloudVisionV1p1beta1DominantColorsAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1DominantColorsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    colors: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1ColorInfo)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1DominantColorsAnnotation",
  });

export interface GoogleCloudVisionV1p1beta1ImageProperties {
  /** If present, dominant colors completed successfully. */
  dominantColors?: GoogleCloudVisionV1p1beta1DominantColorsAnnotation;
}

export const GoogleCloudVisionV1p1beta1ImageProperties: Schema.Schema<GoogleCloudVisionV1p1beta1ImageProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dominantColors: Schema.optional(
      GoogleCloudVisionV1p1beta1DominantColorsAnnotation,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1ImageProperties" });

export interface GoogleCloudVisionV1p1beta1ProductSearchResults {
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult>;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult),
    ),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductSearchResultsResult),
    ),
    indexTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1ProductSearchResults" });

export interface GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
}

export const GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation",
  });

export interface GoogleCloudVisionV1p1beta1AnnotateImageResponse {
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1FaceAnnotation>;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
}

export const GoogleCloudVisionV1p1beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p1beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotation,
    ),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1CropHintsAnnotation,
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1SafeSearchAnnotation,
    ),
    error: Schema.optional(Status),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p1beta1WebDetection),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1FaceAnnotation),
    ),
    context: Schema.optional(GoogleCloudVisionV1p1beta1ImageAnnotationContext),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1ImageProperties,
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p1beta1ProductSearchResults,
    ),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1AnnotateImageResponse",
  });

export interface GoogleCloudVisionV1p1beta1AnnotateFileResponse {
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p1beta1AnnotateImageResponse>;
}

export const GoogleCloudVisionV1p1beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p1beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(GoogleCloudVisionV1p1beta1InputConfig),
    totalPages: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1AnnotateImageResponse),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1AnnotateFileResponse" });

export interface GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest {
  /** Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest. */
  requests?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateFileRequest>;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest: Schema.Schema<GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateFileRequest),
    ),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest",
  });

export interface BatchAnnotateFilesResponse {
  /** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<AnnotateFileResponse>;
}

export const BatchAnnotateFilesResponse: Schema.Schema<BatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(AnnotateFileResponse)),
  }).annotate({ identifier: "BatchAnnotateFilesResponse" });

export interface AsyncBatchAnnotateImagesResponse {
  /** The output location and metadata from AsyncBatchAnnotateImagesRequest. */
  outputConfig?: OutputConfig;
}

export const AsyncBatchAnnotateImagesResponse: Schema.Schema<AsyncBatchAnnotateImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(OutputConfig),
  }).annotate({ identifier: "AsyncBatchAnnotateImagesResponse" });

export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest {
  /** Required. Requested features. */
  features?: ReadonlyArray<GoogleCloudVisionV1p2beta1Feature>;
  /** Additional context that may accompany the image(s) in the file. */
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
  /** Required. Information about the input file. */
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
  /** Required. The desired output location and metadata (e.g. format). */
  outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
}

export const GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest: Schema.Schema<GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Feature)),
    imageContext: Schema.optional(GoogleCloudVisionV1p2beta1ImageContext),
    inputConfig: Schema.optional(GoogleCloudVisionV1p2beta1InputConfig),
    outputConfig: Schema.optional(GoogleCloudVisionV1p2beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest",
  });

export interface GoogleCloudVisionV1p3beta1ColorInfo {
  /** RGB components of the color. */
  color?: Color;
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const GoogleCloudVisionV1p3beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p3beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    score: Schema.optional(Schema.Number),
    pixelFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1ColorInfo" });

export interface GoogleCloudVisionV1p3beta1DominantColorsAnnotation {
  /** RGB color values with their score and pixel fraction. */
  colors?: ReadonlyArray<GoogleCloudVisionV1p3beta1ColorInfo>;
}

export const GoogleCloudVisionV1p3beta1DominantColorsAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1DominantColorsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    colors: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1ColorInfo)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1DominantColorsAnnotation",
  });

export interface GoogleCloudVisionV1p3beta1ImageProperties {
  /** If present, dominant colors completed successfully. */
  dominantColors?: GoogleCloudVisionV1p3beta1DominantColorsAnnotation;
}

export const GoogleCloudVisionV1p3beta1ImageProperties: Schema.Schema<GoogleCloudVisionV1p3beta1ImageProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dominantColors: Schema.optional(
      GoogleCloudVisionV1p3beta1DominantColorsAnnotation,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1ImageProperties" });

export interface GoogleCloudVisionV1p3beta1ImportProductSetsResponse {
  /** The list of reference_images that are imported successfully. */
  referenceImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1ReferenceImage>;
  /** The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. */
  statuses?: ReadonlyArray<Status>;
}

export const GoogleCloudVisionV1p3beta1ImportProductSetsResponse: Schema.Schema<GoogleCloudVisionV1p3beta1ImportProductSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ReferenceImage),
    ),
    statuses: Schema.optional(Schema.Array(Status)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1ImportProductSetsResponse",
  });

export interface GoogleCloudVisionV1p3beta1SafeSearchAnnotation {
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this is a medical image. */
  medical?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
  violence?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
  spoof?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
  racy?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p3beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adult: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1SafeSearchAnnotation" });

export interface GoogleCloudVisionV1p2beta1ColorInfo {
  /** RGB components of the color. */
  color?: Color;
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const GoogleCloudVisionV1p2beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p2beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    score: Schema.optional(Schema.Number),
    pixelFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ColorInfo" });

export interface GoogleCloudVisionV1p2beta1DominantColorsAnnotation {
  /** RGB color values with their score and pixel fraction. */
  colors?: ReadonlyArray<GoogleCloudVisionV1p2beta1ColorInfo>;
}

export const GoogleCloudVisionV1p2beta1DominantColorsAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1DominantColorsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    colors: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1ColorInfo)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1DominantColorsAnnotation",
  });

export interface GoogleCloudVisionV1p2beta1ImageProperties {
  /** If present, dominant colors completed successfully. */
  dominantColors?: GoogleCloudVisionV1p2beta1DominantColorsAnnotation;
}

export const GoogleCloudVisionV1p2beta1ImageProperties: Schema.Schema<GoogleCloudVisionV1p2beta1ImageProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dominantColors: Schema.optional(
      GoogleCloudVisionV1p2beta1DominantColorsAnnotation,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ImageProperties" });

export interface GoogleCloudVisionV1p2beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p2beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p2beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1LocationInfo" });

export interface GoogleCloudVisionV1p2beta1Property {
  /** Name of the property. */
  name?: string;
  /** Value of the property. */
  value?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
}

export const GoogleCloudVisionV1p2beta1Property: Schema.Schema<GoogleCloudVisionV1p2beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Property" });

export interface GoogleCloudVisionV1p2beta1EntityAnnotation {
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p2beta1LocationInfo>;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p2beta1Property>;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
}

export const GoogleCloudVisionV1p2beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    topicality: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1LocationInfo),
    ),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1Property),
    ),
    confidence: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
}

export const GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation",
  });

export interface GoogleCloudVisionV1p2beta1FaceAnnotationLandmark {
  /** Face landmark position. */
  position?: GoogleCloudVisionV1p2beta1Position;
  /** Face landmark type. */
  type?:
    | "UNKNOWN_LANDMARK"
    | "LEFT_EYE"
    | "RIGHT_EYE"
    | "LEFT_OF_LEFT_EYEBROW"
    | "RIGHT_OF_LEFT_EYEBROW"
    | "LEFT_OF_RIGHT_EYEBROW"
    | "RIGHT_OF_RIGHT_EYEBROW"
    | "MIDPOINT_BETWEEN_EYES"
    | "NOSE_TIP"
    | "UPPER_LIP"
    | "LOWER_LIP"
    | "MOUTH_LEFT"
    | "MOUTH_RIGHT"
    | "MOUTH_CENTER"
    | "NOSE_BOTTOM_RIGHT"
    | "NOSE_BOTTOM_LEFT"
    | "NOSE_BOTTOM_CENTER"
    | "LEFT_EYE_TOP_BOUNDARY"
    | "LEFT_EYE_RIGHT_CORNER"
    | "LEFT_EYE_BOTTOM_BOUNDARY"
    | "LEFT_EYE_LEFT_CORNER"
    | "RIGHT_EYE_TOP_BOUNDARY"
    | "RIGHT_EYE_RIGHT_CORNER"
    | "RIGHT_EYE_BOTTOM_BOUNDARY"
    | "RIGHT_EYE_LEFT_CORNER"
    | "LEFT_EYEBROW_UPPER_MIDPOINT"
    | "RIGHT_EYEBROW_UPPER_MIDPOINT"
    | "LEFT_EAR_TRAGION"
    | "RIGHT_EAR_TRAGION"
    | "LEFT_EYE_PUPIL"
    | "RIGHT_EYE_PUPIL"
    | "FOREHEAD_GLABELLA"
    | "CHIN_GNATHION"
    | "CHIN_LEFT_GONION"
    | "CHIN_RIGHT_GONION"
    | "LEFT_CHEEK_CENTER"
    | "RIGHT_CHEEK_CENTER"
    | (string & {});
}

export const GoogleCloudVisionV1p2beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p2beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(GoogleCloudVisionV1p2beta1Position),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1FaceAnnotationLandmark",
  });

export interface GoogleCloudVisionV1p2beta1FaceAnnotation {
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Under-exposed likelihood. */
  underExposedLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p2beta1FaceAnnotationLandmark>;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
}

export const GoogleCloudVisionV1p2beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    rollAngle: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    detectionConfidence: Schema.optional(Schema.Number),
    sorrowLikelihood: Schema.optional(Schema.String),
    headwearLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    surpriseLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    angerLikelihood: Schema.optional(Schema.String),
    blurredLikelihood: Schema.optional(Schema.String),
    panAngle: Schema.optional(Schema.Number),
    joyLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1FaceAnnotationLandmark),
    ),
    landmarkingConfidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p2beta1WebDetectionWebEntity {
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Canonical description of the entity, in English. */
  description?: string;
  /** Opaque entity ID. */
  entityId?: string;
}

export const GoogleCloudVisionV1p2beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1WebDetectionWebEntity",
  });

export interface GoogleCloudVisionV1p2beta1WebDetection {
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebPage>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebLabel>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p2beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebPage),
    ),
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebLabel),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetection" });

export interface GoogleCloudVisionV1p2beta1SafeSearchAnnotation {
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this is a medical image. */
  medical?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
  violence?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
  spoof?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
  racy?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p2beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adult: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1SafeSearchAnnotation" });

export interface GoogleCloudVisionV1p2beta1TextAnnotation {
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p2beta1Page>;
  /** UTF-8 text detected on the pages. */
  text?: string;
}

export const GoogleCloudVisionV1p2beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Page)),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1TextAnnotation" });

export interface GoogleCloudVisionV1p2beta1AnnotateImageResponse {
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation>;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p2beta1ProductSearchResults;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p2beta1ImageProperties;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p2beta1ImageAnnotationContext;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1FaceAnnotation>;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p2beta1WebDetection;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p2beta1CropHintsAnnotation;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p2beta1SafeSearchAnnotation;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p2beta1TextAnnotation;
}

export const GoogleCloudVisionV1p2beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p2beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation),
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p2beta1ProductSearchResults,
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1ImageProperties,
    ),
    context: Schema.optional(GoogleCloudVisionV1p2beta1ImageAnnotationContext),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1FaceAnnotation),
    ),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p2beta1WebDetection),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1CropHintsAnnotation,
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1SafeSearchAnnotation,
    ),
    error: Schema.optional(Status),
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotation,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AnnotateImageResponse",
  });

export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest {
  /** Required. The desired output location and metadata (e.g. format). */
  outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
  /** Required. Individual image annotation requests for this batch. */
  requests?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateImageRequest>;
}

export const GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest: Schema.Schema<GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudVisionV1p2beta1OutputConfig),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    requests: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateImageRequest),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest",
  });

export interface GoogleCloudVisionV1p3beta1ImageAnnotationContext {
  /** The URI of the file used to produce the image. */
  uri?: string;
  /** If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. */
  pageNumber?: number;
}

export const GoogleCloudVisionV1p3beta1ImageAnnotationContext: Schema.Schema<GoogleCloudVisionV1p3beta1ImageAnnotationContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pageNumber: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1ImageAnnotationContext",
  });

export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest {
  /** Required. Individual async file annotation requests for this batch. */
  requests?: ReadonlyArray<GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest>;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest: Schema.Schema<GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest),
    ),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest",
  });

export interface GoogleCloudVisionV1p3beta1TextAnnotation {
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p3beta1Page>;
  /** UTF-8 text detected on the pages. */
  text?: string;
}

export const GoogleCloudVisionV1p3beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Page)),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1TextAnnotation" });

export interface GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse {
  /** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p4beta1AnnotateFileResponse>;
}

export const GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse: Schema.Schema<GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1AnnotateFileResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse",
  });

export interface GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse {
  /** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse>;
}

export const GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse: Schema.Schema<GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse",
  });

export interface GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse {
  /** Individual responses to image annotation requests within the batch. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateImageResponse>;
}

export const GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse: Schema.Schema<GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateImageResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse",
  });

export interface GoogleCloudVisionV1p3beta1InputConfig {
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p3beta1GcsSource;
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
}

export const GoogleCloudVisionV1p3beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p3beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GoogleCloudVisionV1p3beta1GcsSource),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1InputConfig" });

export interface GoogleCloudVisionV1p3beta1FaceAnnotation {
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** Under-exposed likelihood. */
  underExposedLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p3beta1FaceAnnotationLandmark>;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p3beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    rollAngle: Schema.optional(Schema.Number),
    sorrowLikelihood: Schema.optional(Schema.String),
    detectionConfidence: Schema.optional(Schema.Number),
    underExposedLikelihood: Schema.optional(Schema.String),
    headwearLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1FaceAnnotationLandmark),
    ),
    landmarkingConfidence: Schema.optional(Schema.Number),
    joyLikelihood: Schema.optional(Schema.String),
    panAngle: Schema.optional(Schema.Number),
    blurredLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    angerLikelihood: Schema.optional(Schema.String),
    surpriseLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p3beta1WebDetectionWebEntity {
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Opaque entity ID. */
  entityId?: string;
  /** Canonical description of the entity, in English. */
  description?: string;
}

export const GoogleCloudVisionV1p3beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    entityId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1WebDetectionWebEntity",
  });

export interface GoogleCloudVisionV1p3beta1WebDetectionWebImage {
  /** The result image URL. */
  url?: string;
  /** (Deprecated) Overall relevancy score for the image. */
  score?: number;
}

export const GoogleCloudVisionV1p3beta1WebDetectionWebImage: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetectionWebImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1WebDetectionWebImage" });

export interface GoogleCloudVisionV1p3beta1WebDetectionWebPage {
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** The result web page URL. */
  url?: string;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
}

export const GoogleCloudVisionV1p3beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    pageTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p3beta1WebDetection {
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebPage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebLabel>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p3beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebPage),
    ),
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebLabel),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1WebDetection" });

export interface GoogleCloudVisionV1p3beta1ProductSearchResults {
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult>;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ProductSearchResultsResult),
    ),
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1ProductSearchResults" });

export interface GoogleCloudVisionV1p3beta1AnnotateImageResponse {
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p3beta1TextAnnotation;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p3beta1CropHintsAnnotation;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p3beta1SafeSearchAnnotation;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p3beta1ImageAnnotationContext;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p3beta1WebDetection;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1FaceAnnotation>;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p3beta1ImageProperties;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p3beta1ProductSearchResults;
}

export const GoogleCloudVisionV1p3beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p3beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotation,
    ),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1CropHintsAnnotation,
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1SafeSearchAnnotation,
    ),
    error: Schema.optional(Status),
    context: Schema.optional(GoogleCloudVisionV1p3beta1ImageAnnotationContext),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p3beta1WebDetection),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1FaceAnnotation),
    ),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1ImageProperties,
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p3beta1ProductSearchResults,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1AnnotateImageResponse",
  });

export interface GoogleCloudVisionV1p3beta1AnnotateFileResponse {
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p3beta1AnnotateImageResponse>;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p3beta1InputConfig;
}

export const GoogleCloudVisionV1p3beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p3beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1AnnotateImageResponse),
    ),
    totalPages: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
    inputConfig: Schema.optional(GoogleCloudVisionV1p3beta1InputConfig),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1AnnotateFileResponse" });

export interface GoogleCloudVisionV1p4beta1BatchOperationMetadata {
  /** The time when the batch request was submitted to the server. */
  submitTime?: string;
  /** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
  endTime?: string;
  /** The current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROCESSING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
}

export const GoogleCloudVisionV1p4beta1BatchOperationMetadata: Schema.Schema<GoogleCloudVisionV1p4beta1BatchOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    submitTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1BatchOperationMetadata",
  });

export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse {
  /** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse>;
}

export const GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse",
  });

export interface GoogleCloudVisionV1p1beta1OperationMetadata {
  /** The time when the batch request was received. */
  createTime?: string;
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
}

export const GoogleCloudVisionV1p1beta1OperationMetadata: Schema.Schema<GoogleCloudVisionV1p1beta1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1OperationMetadata" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface OperationMetadata {
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
  /** The time when the batch request was received. */
  createTime?: string;
  /** The time when the operation result was last updated. */
  updateTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface GoogleCloudVisionV1p3beta1BatchOperationMetadata {
  /** The time when the batch request was submitted to the server. */
  submitTime?: string;
  /** The current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROCESSING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
  endTime?: string;
}

export const GoogleCloudVisionV1p3beta1BatchOperationMetadata: Schema.Schema<GoogleCloudVisionV1p3beta1BatchOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    submitTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1BatchOperationMetadata",
  });

export interface GoogleCloudVisionV1p2beta1AnnotateFileResponse {
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateImageResponse>;
}

export const GoogleCloudVisionV1p2beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p2beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(GoogleCloudVisionV1p2beta1InputConfig),
    totalPages: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateImageResponse),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1AnnotateFileResponse" });

export interface GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse {
  /** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateFileResponse>;
}

export const GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse: Schema.Schema<GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateFileResponse),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse",
  });

export interface BatchOperationMetadata {
  /** The time when the batch request was submitted to the server. */
  submitTime?: string;
  /** The current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROCESSING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
  endTime?: string;
}

export const BatchOperationMetadata: Schema.Schema<BatchOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    submitTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchOperationMetadata" });

export interface GoogleCloudVisionV1p2beta1OperationMetadata {
  /** The time when the batch request was received. */
  createTime?: string;
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
}

export const GoogleCloudVisionV1p2beta1OperationMetadata: Schema.Schema<GoogleCloudVisionV1p2beta1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1OperationMetadata" });

export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse {
  /** The output location and metadata from AsyncBatchAnnotateImagesRequest. */
  outputConfig?: GoogleCloudVisionV1p4beta1OutputConfig;
}

export const GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudVisionV1p4beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse",
  });

export interface GoogleCloudVisionV1p4beta1OperationMetadata {
  /** The time when the batch request was received. */
  createTime?: string;
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
}

export const GoogleCloudVisionV1p4beta1OperationMetadata: Schema.Schema<GoogleCloudVisionV1p4beta1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1OperationMetadata" });

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

export interface AsyncBatchAnnotateImagesRequest {
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest;
}

export const AsyncBatchAnnotateImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/images:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateImagesRequest>;

export type AsyncBatchAnnotateImagesResponse_Op = Operation;
export const AsyncBatchAnnotateImagesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AsyncBatchAnnotateImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto. */
export const asyncBatchAnnotateImages: API.OperationMethod<
  AsyncBatchAnnotateImagesRequest,
  AsyncBatchAnnotateImagesResponse_Op,
  AsyncBatchAnnotateImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateImagesRequest,
  output: AsyncBatchAnnotateImagesResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateImagesRequest {
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest;
}

export const AnnotateImagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(
    GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest,
  ).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1p2beta1/images:annotate", hasBody: true }),
  svc,
) as unknown as Schema.Schema<AnnotateImagesRequest>;

export type AnnotateImagesResponse =
  GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse;
export const AnnotateImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse;

export type AnnotateImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run image detection and annotation for a batch of images. */
export const annotateImages: API.OperationMethod<
  AnnotateImagesRequest,
  AnnotateImagesResponse,
  AnnotateImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateImagesRequest,
  output: AnnotateImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AsyncBatchAnnotateProjectsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest;
}

export const AsyncBatchAnnotateProjectsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/files:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateProjectsFilesRequest>;

export type AsyncBatchAnnotateProjectsFilesResponse = Operation;
export const AsyncBatchAnnotateProjectsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AsyncBatchAnnotateProjectsFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results). */
export const asyncBatchAnnotateProjectsFiles: API.OperationMethod<
  AsyncBatchAnnotateProjectsFilesRequest,
  AsyncBatchAnnotateProjectsFilesResponse,
  AsyncBatchAnnotateProjectsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateProjectsFilesRequest,
  output: AsyncBatchAnnotateProjectsFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateProjectsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
}

export const AnnotateProjectsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/files:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsFilesRequest>;

export type AnnotateProjectsFilesResponse =
  GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
export const AnnotateProjectsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;

export type AnnotateProjectsFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted. */
export const annotateProjectsFiles: API.OperationMethod<
  AnnotateProjectsFilesRequest,
  AnnotateProjectsFilesResponse,
  AnnotateProjectsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateProjectsFilesRequest,
  output: AnnotateProjectsFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateProjectsLocationsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
}

export const AnnotateProjectsLocationsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/files:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsLocationsFilesRequest>;

export type AnnotateProjectsLocationsFilesResponse =
  GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
export const AnnotateProjectsLocationsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;

export type AnnotateProjectsLocationsFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted. */
export const annotateProjectsLocationsFiles: API.OperationMethod<
  AnnotateProjectsLocationsFilesRequest,
  AnnotateProjectsLocationsFilesResponse,
  AnnotateProjectsLocationsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateProjectsLocationsFilesRequest,
  output: AnnotateProjectsLocationsFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AsyncBatchAnnotateProjectsLocationsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest;
}

export const AsyncBatchAnnotateProjectsLocationsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/files:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateProjectsLocationsFilesRequest>;

export type AsyncBatchAnnotateProjectsLocationsFilesResponse = Operation;
export const AsyncBatchAnnotateProjectsLocationsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AsyncBatchAnnotateProjectsLocationsFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results). */
export const asyncBatchAnnotateProjectsLocationsFiles: API.OperationMethod<
  AsyncBatchAnnotateProjectsLocationsFilesRequest,
  AsyncBatchAnnotateProjectsLocationsFilesResponse,
  AsyncBatchAnnotateProjectsLocationsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateProjectsLocationsFilesRequest,
  output: AsyncBatchAnnotateProjectsLocationsFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AsyncBatchAnnotateProjectsLocationsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest;
}

export const AsyncBatchAnnotateProjectsLocationsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/images:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateProjectsLocationsImagesRequest>;

export type AsyncBatchAnnotateProjectsLocationsImagesResponse = Operation;
export const AsyncBatchAnnotateProjectsLocationsImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AsyncBatchAnnotateProjectsLocationsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto. */
export const asyncBatchAnnotateProjectsLocationsImages: API.OperationMethod<
  AsyncBatchAnnotateProjectsLocationsImagesRequest,
  AsyncBatchAnnotateProjectsLocationsImagesResponse,
  AsyncBatchAnnotateProjectsLocationsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateProjectsLocationsImagesRequest,
  output: AsyncBatchAnnotateProjectsLocationsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateProjectsLocationsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest;
}

export const AnnotateProjectsLocationsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/images:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsLocationsImagesRequest>;

export type AnnotateProjectsLocationsImagesResponse =
  GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse;
export const AnnotateProjectsLocationsImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse;

export type AnnotateProjectsLocationsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run image detection and annotation for a batch of images. */
export const annotateProjectsLocationsImages: API.OperationMethod<
  AnnotateProjectsLocationsImagesRequest,
  AnnotateProjectsLocationsImagesResponse,
  AnnotateProjectsLocationsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateProjectsLocationsImagesRequest,
  output: AnnotateProjectsLocationsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AsyncBatchAnnotateProjectsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest;
}

export const AsyncBatchAnnotateProjectsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/images:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateProjectsImagesRequest>;

export type AsyncBatchAnnotateProjectsImagesResponse = Operation;
export const AsyncBatchAnnotateProjectsImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AsyncBatchAnnotateProjectsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto. */
export const asyncBatchAnnotateProjectsImages: API.OperationMethod<
  AsyncBatchAnnotateProjectsImagesRequest,
  AsyncBatchAnnotateProjectsImagesResponse,
  AsyncBatchAnnotateProjectsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateProjectsImagesRequest,
  output: AsyncBatchAnnotateProjectsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateProjectsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest;
}

export const AnnotateProjectsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/{+parent}/images:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsImagesRequest>;

export type AnnotateProjectsImagesResponse =
  GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse;
export const AnnotateProjectsImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse;

export type AnnotateProjectsImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run image detection and annotation for a batch of images. */
export const annotateProjectsImages: API.OperationMethod<
  AnnotateProjectsImagesRequest,
  AnnotateProjectsImagesResponse,
  AnnotateProjectsImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateProjectsImagesRequest,
  output: AnnotateProjectsImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AsyncBatchAnnotateFilesRequest {
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest;
}

export const AsyncBatchAnnotateFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1p2beta1/files:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateFilesRequest>;

export type AsyncBatchAnnotateFilesResponse_Op = Operation;
export const AsyncBatchAnnotateFilesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AsyncBatchAnnotateFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results). */
export const asyncBatchAnnotateFiles: API.OperationMethod<
  AsyncBatchAnnotateFilesRequest,
  AsyncBatchAnnotateFilesResponse_Op,
  AsyncBatchAnnotateFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateFilesRequest,
  output: AsyncBatchAnnotateFilesResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnnotateFilesRequest {
  /** Request body */
  body?: GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
}

export const AnnotateFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(
    GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest,
  ).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1p2beta1/files:annotate", hasBody: true }),
  svc,
) as unknown as Schema.Schema<AnnotateFilesRequest>;

export type AnnotateFilesResponse =
  GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;
export const AnnotateFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse;

export type AnnotateFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted. */
export const annotateFiles: API.OperationMethod<
  AnnotateFilesRequest,
  AnnotateFilesResponse,
  AnnotateFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateFilesRequest,
  output: AnnotateFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
