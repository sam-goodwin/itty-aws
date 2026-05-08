// ==========================================================================
// Cloud Vision API (vision v1)
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
  version: "v1",
  rootUrl: "https://vision.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudVisionV1p3beta1NormalizedVertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p3beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p3beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1NormalizedVertex" });

export interface GoogleCloudVisionV1p1beta1Property {
  /** Value of the property. */
  value?: string;
  /** Name of the property. */
  name?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
}

export const GoogleCloudVisionV1p1beta1Property: Schema.Schema<GoogleCloudVisionV1p1beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Property" });

export interface GoogleCloudVisionV1p1beta1Vertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p1beta1Vertex: Schema.Schema<GoogleCloudVisionV1p1beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Vertex" });

export interface GoogleCloudVisionV1p1beta1NormalizedVertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p1beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p1beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p1beta1EntityAnnotation {
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p1beta1Property>;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p1beta1LocationInfo>;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
}

export const GoogleCloudVisionV1p1beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1Property),
    ),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1LocationInfo),
    ),
    topicality: Schema.optional(Schema.Number),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
    locale: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p2beta1Property {
  /** Value of the property. */
  value?: string;
  /** Name of the property. */
  name?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
}

export const GoogleCloudVisionV1p2beta1Property: Schema.Schema<GoogleCloudVisionV1p2beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Property" });

export interface GoogleCloudVisionV1p3beta1Vertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p3beta1Vertex: Schema.Schema<GoogleCloudVisionV1p3beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Vertex" });

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

export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage {
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage",
  });

export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak {
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

export const GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    isPrefix: Schema.optional(Schema.Boolean),
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

export interface GoogleCloudVisionV1p4beta1NormalizedVertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p4beta1NormalizedVertex: Schema.Schema<GoogleCloudVisionV1p4beta1NormalizedVertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1NormalizedVertex" });

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

export interface GoogleCloudVisionV1p4beta1BoundingPoly {
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudVisionV1p4beta1NormalizedVertex>;
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<GoogleCloudVisionV1p4beta1Vertex>;
}

export const GoogleCloudVisionV1p4beta1BoundingPoly: Schema.Schema<GoogleCloudVisionV1p4beta1BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1NormalizedVertex),
    ),
    vertices: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Vertex)),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1BoundingPoly" });

export interface GoogleCloudVisionV1p4beta1Symbol {
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1Symbol: Schema.Schema<GoogleCloudVisionV1p4beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    text: Schema.optional(Schema.String),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Symbol" });

export interface GoogleCloudVisionV1p4beta1Word {
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p4beta1Symbol>;
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1Word: Schema.Schema<GoogleCloudVisionV1p4beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Symbol)),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Word" });

export interface GoogleCloudVisionV1p4beta1Paragraph {
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p4beta1Word>;
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
}

export const GoogleCloudVisionV1p4beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p4beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Word)),
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Paragraph" });

export interface GoogleCloudVisionV1p4beta1Block {
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p4beta1Paragraph>;
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;
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
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p4beta1Block: Schema.Schema<GoogleCloudVisionV1p4beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1Paragraph),
    ),
    boundingBox: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    blockType: Schema.optional(Schema.String),
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Block" });

export interface GoogleCloudVisionV1p4beta1Page {
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p4beta1Block>;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
}

export const GoogleCloudVisionV1p4beta1Page: Schema.Schema<GoogleCloudVisionV1p4beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p4beta1Block)),
    width: Schema.optional(Schema.Number),
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

export interface Feature {
  /** Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`. */
  maxResults?: number;
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
  /** Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/rc" for the latest release candidate. */
  model?: string;
}

export const Feature: Schema.Schema<Feature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "Feature" });

export interface DetectedLanguage {
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const DetectedLanguage: Schema.Schema<DetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DetectedLanguage" });

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

export interface TextProperty {
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<DetectedLanguage>;
  /** Detected start or end of a text segment. */
  detectedBreak?: DetectedBreak;
}

export const TextProperty: Schema.Schema<TextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedLanguages: Schema.optional(Schema.Array(DetectedLanguage)),
    detectedBreak: Schema.optional(DetectedBreak),
  }).annotate({ identifier: "TextProperty" });

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

export interface BoundingPoly {
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<NormalizedVertex>;
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<Vertex>;
}

export const BoundingPoly: Schema.Schema<BoundingPoly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    normalizedVertices: Schema.optional(Schema.Array(NormalizedVertex)),
    vertices: Schema.optional(Schema.Array(Vertex)),
  }).annotate({ identifier: "BoundingPoly" });

export interface Vision_Symbol {
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
  /** Additional information detected for the symbol. */
  property?: TextProperty;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
}

export const Vision_Symbol: Schema.Schema<Vision_Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(BoundingPoly),
    text: Schema.optional(Schema.String),
    property: Schema.optional(TextProperty),
    confidence: Schema.optional(Schema.Number),
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
  /** Additional information detected for the paragraph. */
  property?: TextProperty;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<Word>;
}

export const Paragraph: Schema.Schema<Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(TextProperty),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(BoundingPoly),
    words: Schema.optional(Schema.Array(Word)),
  }).annotate({ identifier: "Paragraph" });

export interface Block {
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the block. */
  property?: TextProperty;
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
  boundingBox?: BoundingPoly;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<Paragraph>;
}

export const Block: Schema.Schema<Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(TextProperty),
    blockType: Schema.optional(Schema.String),
    boundingBox: Schema.optional(BoundingPoly),
    paragraphs: Schema.optional(Schema.Array(Paragraph)),
  }).annotate({ identifier: "Block" });

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

export interface WebEntity {
  /** Canonical description of the entity, in English. */
  description?: string;
  /** Opaque entity ID. */
  entityId?: string;
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
}

export const WebEntity: Schema.Schema<WebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WebEntity" });

export interface LocalizedObjectAnnotation {
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: BoundingPoly;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
}

export const LocalizedObjectAnnotation: Schema.Schema<LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(BoundingPoly),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LocalizedObjectAnnotation" });

export interface Color {
  /** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
  alpha?: number;
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
}

export const Color: Schema.Schema<Color> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alpha: Schema.optional(Schema.Number),
    red: Schema.optional(Schema.Number),
    green: Schema.optional(Schema.Number),
    blue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Color" });

export interface ColorInfo {
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** RGB components of the color. */
  color?: Color;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const ColorInfo: Schema.Schema<ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    color: Schema.optional(Color),
    pixelFraction: Schema.optional(Schema.Number),
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

export interface LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const LocationInfo: Schema.Schema<LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "LocationInfo" });

export interface Property {
  /** Name of the property. */
  name?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
  /** Value of the property. */
  value?: string;
}

export const Property: Schema.Schema<Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Property" });

export interface EntityAnnotation {
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: BoundingPoly;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<LocationInfo>;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<Property>;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
}

export const EntityAnnotation: Schema.Schema<EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicality: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(BoundingPoly),
    locations: Schema.optional(Schema.Array(LocationInfo)),
    description: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Array(Property)),
    locale: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EntityAnnotation" });

export interface Page {
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: TextProperty;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<Block>;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
}

export const Page: Schema.Schema<Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(TextProperty),
    width: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(Block)),
    height: Schema.optional(Schema.Number),
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

export interface CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: BoundingPoly;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
}

export const CropHint: Schema.Schema<CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CropHint" });

export interface CropHintsAnnotation {
  /** Crop hint results. */
  cropHints?: ReadonlyArray<CropHint>;
}

export const CropHintsAnnotation: Schema.Schema<CropHintsAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cropHints: Schema.optional(Schema.Array(CropHint)),
  }).annotate({ identifier: "CropHintsAnnotation" });

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
  /** The result web page URL. */
  url?: string;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<WebImage>;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<WebImage>;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
}

export const WebPage: Schema.Schema<WebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    partialMatchingImages: Schema.optional(Schema.Array(WebImage)),
    fullMatchingImages: Schema.optional(Schema.Array(WebImage)),
    score: Schema.optional(Schema.Number),
    pageTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebPage" });

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

export interface WebDetection {
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<WebImage>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<WebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<WebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<WebImage>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<WebPage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<WebLabel>;
}

export const WebDetection: Schema.Schema<WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullMatchingImages: Schema.optional(Schema.Array(WebImage)),
    webEntities: Schema.optional(Schema.Array(WebEntity)),
    visuallySimilarImages: Schema.optional(Schema.Array(WebImage)),
    partialMatchingImages: Schema.optional(Schema.Array(WebImage)),
    pagesWithMatchingImages: Schema.optional(Schema.Array(WebPage)),
    bestGuessLabels: Schema.optional(Schema.Array(WebLabel)),
  }).annotate({ identifier: "WebDetection" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

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
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<KeyValue>;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    productLabels: Schema.optional(Schema.Array(KeyValue)),
    description: Schema.optional(Schema.String),
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

export interface ObjectAnnotation {
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
}

export const ObjectAnnotation: Schema.Schema<ObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ObjectAnnotation" });

export interface GroupedResult {
  /** List of results, one for each product match. */
  results?: ReadonlyArray<Result>;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<ObjectAnnotation>;
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: BoundingPoly;
}

export const GroupedResult: Schema.Schema<GroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(Result)),
    objectAnnotations: Schema.optional(Schema.Array(ObjectAnnotation)),
    boundingPoly: Schema.optional(BoundingPoly),
  }).annotate({ identifier: "GroupedResult" });

export interface ProductSearchResults {
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<Result>;
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GroupedResult>;
}

export const ProductSearchResults: Schema.Schema<ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Result)),
    productGroupedResults: Schema.optional(Schema.Array(GroupedResult)),
  }).annotate({ identifier: "ProductSearchResults" });

export interface Position {
  /** Z coordinate (or depth). */
  z?: number;
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const Position: Schema.Schema<Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    z: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Position" });

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
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<Landmark>;
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Anger likelihood. */
  angerLikelihood?:
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
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: BoundingPoly;
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: BoundingPoly;
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
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
}

export const FaceAnnotation: Schema.Schema<FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    landmarks: Schema.optional(Schema.Array(Landmark)),
    panAngle: Schema.optional(Schema.Number),
    angerLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    sorrowLikelihood: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(BoundingPoly),
    surpriseLikelihood: Schema.optional(Schema.String),
    fdBoundingPoly: Schema.optional(BoundingPoly),
    landmarkingConfidence: Schema.optional(Schema.Number),
    joyLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    headwearLikelihood: Schema.optional(Schema.String),
    detectionConfidence: Schema.optional(Schema.Number),
    blurredLikelihood: Schema.optional(Schema.String),
    rollAngle: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FaceAnnotation" });

export interface SafeSearchAnnotation {
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
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
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
    medical: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    adult: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
  }).annotate({ identifier: "SafeSearchAnnotation" });

export interface AnnotateImageResponse {
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<LocalizedObjectAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: ImageProperties;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: TextAnnotation;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: CropHintsAnnotation;
  /** If present, web detection has completed successfully. */
  webDetection?: WebDetection;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: ImageAnnotationContext;
  /** If present, product search has completed successfully. */
  productSearchResults?: ProductSearchResults;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<FaceAnnotation>;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<EntityAnnotation>;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: SafeSearchAnnotation;
}

export const AnnotateImageResponse: Schema.Schema<AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(LocalizedObjectAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(ImageProperties),
    labelAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    logoAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    fullTextAnnotation: Schema.optional(TextAnnotation),
    cropHintsAnnotation: Schema.optional(CropHintsAnnotation),
    webDetection: Schema.optional(WebDetection),
    textAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    error: Schema.optional(Status),
    context: Schema.optional(ImageAnnotationContext),
    productSearchResults: Schema.optional(ProductSearchResults),
    faceAnnotations: Schema.optional(Schema.Array(FaceAnnotation)),
    landmarkAnnotations: Schema.optional(Schema.Array(EntityAnnotation)),
    safeSearchAnnotation: Schema.optional(SafeSearchAnnotation),
  }).annotate({ identifier: "AnnotateImageResponse" });

export interface GoogleCloudVisionV1p4beta1ProductKeyValue {
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
}

export const GoogleCloudVisionV1p4beta1ProductKeyValue: Schema.Schema<GoogleCloudVisionV1p4beta1ProductKeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ProductKeyValue" });

export interface GoogleCloudVisionV1p4beta1Product {
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductKeyValue>;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
}

export const GoogleCloudVisionV1p4beta1Product: Schema.Schema<GoogleCloudVisionV1p4beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductKeyValue),
    ),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
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

export interface GoogleCloudVisionV1p3beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p3beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p3beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1GcsSource" });

export interface GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GcsDestination: Schema.Schema<GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsDestination" });

export interface GoogleCloudVisionV1p3beta1Property {
  /** Name of the property. */
  name?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
  /** Value of the property. */
  value?: string;
}

export const GoogleCloudVisionV1p3beta1Property: Schema.Schema<GoogleCloudVisionV1p3beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Property" });

export interface ImageSource {
  /** The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence. */
  imageUri?: string;
  /** **Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. */
  gcsImageUri?: string;
}

export const ImageSource: Schema.Schema<ImageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    gcsImageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageSource" });

export interface Image {
  /** Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests. */
  content?: string;
  /** Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request. */
  source?: ImageSource;
}

export const Image: Schema.Schema<Image> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    source: Schema.optional(ImageSource),
  }).annotate({ identifier: "Image" });

export interface TextDetectionParams {
  /** By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well. */
  enableTextDetectionConfidenceScore?: boolean;
  /** A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation. */
  advancedOcrOptions?: ReadonlyArray<string>;
}

export const TextDetectionParams: Schema.Schema<TextDetectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableTextDetectionConfidenceScore: Schema.optional(Schema.Boolean),
    advancedOcrOptions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TextDetectionParams" });

export interface ProductSearchParams {
  /** The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied. */
  boundingPoly?: BoundingPoly;
  /** The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well. */
  productCategories?: ReadonlyArray<string>;
  /** The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='. */
  filter?: string;
  /** The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. */
  productSet?: string;
}

export const ProductSearchParams: Schema.Schema<ProductSearchParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(BoundingPoly),
    productCategories: Schema.optional(Schema.Array(Schema.String)),
    filter: Schema.optional(Schema.String),
    productSet: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductSearchParams" });

export interface CropHintsParams {
  /** Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored. */
  aspectRatios?: ReadonlyArray<number>;
}

export const CropHintsParams: Schema.Schema<CropHintsParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectRatios: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "CropHintsParams" });

export interface WebDetectionParams {
  /** This field has no effect on results. */
  includeGeoResults?: boolean;
}

export const WebDetectionParams: Schema.Schema<WebDetectionParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeGeoResults: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WebDetectionParams" });

export interface LatLongRect {
  /** Min lat/long pair. */
  minLatLng?: LatLng;
  /** Max lat/long pair. */
  maxLatLng?: LatLng;
}

export const LatLongRect: Schema.Schema<LatLongRect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLatLng: Schema.optional(LatLng),
    maxLatLng: Schema.optional(LatLng),
  }).annotate({ identifier: "LatLongRect" });

export interface ImageContext {
  /** Parameters for text detection and document text detection. */
  textDetectionParams?: TextDetectionParams;
  /** Parameters for product search. */
  productSearchParams?: ProductSearchParams;
  /** List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages). */
  languageHints?: ReadonlyArray<string>;
  /** Parameters for crop hints annotation request. */
  cropHintsParams?: CropHintsParams;
  /** Parameters for web detection. */
  webDetectionParams?: WebDetectionParams;
  /** Not used. */
  latLongRect?: LatLongRect;
}

export const ImageContext: Schema.Schema<ImageContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textDetectionParams: Schema.optional(TextDetectionParams),
    productSearchParams: Schema.optional(ProductSearchParams),
    languageHints: Schema.optional(Schema.Array(Schema.String)),
    cropHintsParams: Schema.optional(CropHintsParams),
    webDetectionParams: Schema.optional(WebDetectionParams),
    latLongRect: Schema.optional(LatLongRect),
  }).annotate({ identifier: "ImageContext" });

export interface AnnotateImageRequest {
  /** The image to be processed. */
  image?: Image;
  /** Requested features. */
  features?: ReadonlyArray<Feature>;
  /** Additional context that may accompany the image. */
  imageContext?: ImageContext;
}

export const AnnotateImageRequest: Schema.Schema<AnnotateImageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Image),
    features: Schema.optional(Schema.Array(Feature)),
    imageContext: Schema.optional(ImageContext),
  }).annotate({ identifier: "AnnotateImageRequest" });

export interface BatchAnnotateImagesRequest {
  /** Required. Individual image annotation requests for this batch. */
  requests?: ReadonlyArray<AnnotateImageRequest>;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const BatchAnnotateImagesRequest: Schema.Schema<BatchAnnotateImagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(AnnotateImageRequest)),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "BatchAnnotateImagesRequest" });

export interface GoogleCloudVisionV1p2beta1ProductKeyValue {
  /** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  value?: string;
  /** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
  key?: string;
}

export const GoogleCloudVisionV1p2beta1ProductKeyValue: Schema.Schema<GoogleCloudVisionV1p2beta1ProductKeyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ProductKeyValue" });

export interface GoogleCloudVisionV1p2beta1Product {
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductKeyValue>;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
}

export const GoogleCloudVisionV1p2beta1Product: Schema.Schema<GoogleCloudVisionV1p2beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductKeyValue),
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Product" });

export interface GoogleCloudVisionV1p3beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p3beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p3beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1LocationInfo" });

export interface GoogleCloudVisionV1p3beta1EntityAnnotation {
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p3beta1Property>;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p3beta1LocationInfo>;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
}

export const GoogleCloudVisionV1p3beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1Property),
    ),
    topicality: Schema.optional(Schema.Number),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1LocationInfo),
    ),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
    locale: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage {
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage",
  });

export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak {
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

export const GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    isPrefix: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak",
  });

export interface GoogleCloudVisionV1p3beta1TextAnnotationTextProperty {
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage>;
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak;
}

export const GoogleCloudVisionV1p3beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage),
    ),
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p3beta1Symbol {
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
}

export const GoogleCloudVisionV1p3beta1Symbol: Schema.Schema<GoogleCloudVisionV1p3beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Symbol" });

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
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** The result web page URL. */
  url?: string;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p3beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageTitle: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    url: Schema.optional(Schema.String),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation",
  });

export interface GoogleCloudVisionV1p3beta1ColorInfo {
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** RGB components of the color. */
  color?: Color;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const GoogleCloudVisionV1p3beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p3beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    color: Schema.optional(Color),
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

export interface GoogleCloudVisionV1p3beta1WebDetectionWebEntity {
  /** Opaque entity ID. */
  entityId?: string;
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Canonical description of the entity, in English. */
  description?: string;
}

export const GoogleCloudVisionV1p3beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1WebDetectionWebEntity",
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

export interface GoogleCloudVisionV1p3beta1WebDetection {
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebPage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p3beta1WebDetectionWebLabel>;
}

export const GoogleCloudVisionV1p3beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p3beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebImage),
    ),
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebPage),
    ),
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1WebDetectionWebLabel),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1WebDetection" });

export interface GoogleCloudVisionV1p3beta1Word {
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p3beta1Symbol>;
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p3beta1Word: Schema.Schema<GoogleCloudVisionV1p3beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Symbol)),
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Word" });

export interface GoogleCloudVisionV1p3beta1Paragraph {
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p3beta1Word>;
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p3beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p3beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Word)),
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Paragraph" });

export interface GoogleCloudVisionV1p3beta1Block {
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
  boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p3beta1Paragraph>;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p3beta1Block: Schema.Schema<GoogleCloudVisionV1p3beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockType: Schema.optional(Schema.String),
    boundingBox: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1Paragraph),
    ),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Block" });

export interface GoogleCloudVisionV1p3beta1Page {
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p3beta1Block>;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
}

export const GoogleCloudVisionV1p3beta1Page: Schema.Schema<GoogleCloudVisionV1p3beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    height: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Block)),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Page" });

export interface GoogleCloudVisionV1p3beta1TextAnnotation {
  /** UTF-8 text detected on the pages. */
  text?: string;
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p3beta1Page>;
}

export const GoogleCloudVisionV1p3beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p3beta1Page)),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1TextAnnotation" });

export interface GoogleCloudVisionV1p3beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
}

export const GoogleCloudVisionV1p3beta1CropHint: Schema.Schema<GoogleCloudVisionV1p3beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p3beta1Position {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
  /** Z coordinate (or depth). */
  z?: number;
}

export const GoogleCloudVisionV1p3beta1Position: Schema.Schema<GoogleCloudVisionV1p3beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
    z: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Position" });

export interface GoogleCloudVisionV1p3beta1FaceAnnotationLandmark {
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
  position?: GoogleCloudVisionV1p3beta1Position;
}

export const GoogleCloudVisionV1p3beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p3beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    position: Schema.optional(GoogleCloudVisionV1p3beta1Position),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1FaceAnnotationLandmark",
  });

export interface GoogleCloudVisionV1p3beta1FaceAnnotation {
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** Blurred likelihood. */
  blurredLikelihood?:
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
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p3beta1FaceAnnotationLandmark>;
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
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

export const GoogleCloudVisionV1p3beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tiltAngle: Schema.optional(Schema.Number),
    headwearLikelihood: Schema.optional(Schema.String),
    joyLikelihood: Schema.optional(Schema.String),
    rollAngle: Schema.optional(Schema.Number),
    blurredLikelihood: Schema.optional(Schema.String),
    detectionConfidence: Schema.optional(Schema.Number),
    underExposedLikelihood: Schema.optional(Schema.String),
    angerLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1FaceAnnotationLandmark),
    ),
    panAngle: Schema.optional(Schema.Number),
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    landmarkingConfidence: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
    surpriseLikelihood: Schema.optional(Schema.String),
    sorrowLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p3beta1SafeSearchAnnotation {
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
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
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

export const GoogleCloudVisionV1p3beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    medical: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    adult: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1SafeSearchAnnotation" });

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
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductKeyValue>;
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
}

export const GoogleCloudVisionV1p3beta1Product: Schema.Schema<GoogleCloudVisionV1p3beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ProductKeyValue),
    ),
    productCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1Product" });

export interface GoogleCloudVisionV1p3beta1ProductSearchResultsResult {
  /** The Product. */
  product?: GoogleCloudVisionV1p3beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(GoogleCloudVisionV1p3beta1Product),
    score: Schema.optional(Schema.Number),
    image: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1ProductSearchResultsResult",
  });

export interface GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation",
  });

export interface GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult {
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation>;
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;
}

export const GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1ProductSearchResultsResult),
    ),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p3beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult",
  });

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
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p3beta1ImageProperties;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p3beta1WebDetection;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p3beta1TextAnnotation;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p3beta1CropHintsAnnotation;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p3beta1ImageAnnotationContext;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1FaceAnnotation>;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p3beta1EntityAnnotation>;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p3beta1SafeSearchAnnotation;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p3beta1ProductSearchResults;
}

export const GoogleCloudVisionV1p3beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p3beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1ImageProperties,
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p3beta1WebDetection),
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1TextAnnotation,
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1CropHintsAnnotation,
    ),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    error: Schema.optional(Status),
    context: Schema.optional(GoogleCloudVisionV1p3beta1ImageAnnotationContext),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1FaceAnnotation),
    ),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1EntityAnnotation),
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p3beta1SafeSearchAnnotation,
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p3beta1ProductSearchResults,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1AnnotateImageResponse",
  });

export interface GoogleCloudVisionV1p3beta1InputConfig {
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p3beta1GcsSource;
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
}

export const GoogleCloudVisionV1p3beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p3beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudVisionV1p3beta1GcsSource),
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1InputConfig" });

export interface GoogleCloudVisionV1p3beta1AnnotateFileResponse {
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p3beta1AnnotateImageResponse>;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p3beta1InputConfig;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
}

export const GoogleCloudVisionV1p3beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p3beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1AnnotateImageResponse),
    ),
    totalPages: Schema.optional(Schema.Number),
    inputConfig: Schema.optional(GoogleCloudVisionV1p3beta1InputConfig),
    error: Schema.optional(Status),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1AnnotateFileResponse" });

export interface GoogleCloudVisionV1p2beta1WebDetectionWebEntity {
  /** Opaque entity ID. */
  entityId?: string;
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
  /** Canonical description of the entity, in English. */
  description?: string;
}

export const GoogleCloudVisionV1p2beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1WebDetectionWebEntity",
  });

export interface GoogleCloudVisionV1p2beta1SafeSearchAnnotation {
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
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
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

export const GoogleCloudVisionV1p2beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    medical: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    adult: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1SafeSearchAnnotation" });

export interface GoogleCloudVisionV1p2beta1Vertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p2beta1Vertex: Schema.Schema<GoogleCloudVisionV1p2beta1Vertex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p2beta1Position {
  /** Z coordinate (or depth). */
  z?: number;
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p2beta1Position: Schema.Schema<GoogleCloudVisionV1p2beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    z: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Position" });

export interface GoogleCloudVisionV1p2beta1FaceAnnotationLandmark {
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
  position?: GoogleCloudVisionV1p2beta1Position;
}

export const GoogleCloudVisionV1p2beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p2beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    position: Schema.optional(GoogleCloudVisionV1p2beta1Position),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1FaceAnnotationLandmark",
  });

export interface GoogleCloudVisionV1p2beta1FaceAnnotation {
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
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
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
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
  /** Anger likelihood. */
  angerLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p2beta1FaceAnnotationLandmark>;
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** Blurred likelihood. */
  blurredLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Joy likelihood. */
  joyLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GoogleCloudVisionV1p2beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    landmarkingConfidence: Schema.optional(Schema.Number),
    surpriseLikelihood: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    sorrowLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    angerLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1FaceAnnotationLandmark),
    ),
    panAngle: Schema.optional(Schema.Number),
    rollAngle: Schema.optional(Schema.Number),
    blurredLikelihood: Schema.optional(Schema.String),
    detectionConfidence: Schema.optional(Schema.Number),
    tiltAngle: Schema.optional(Schema.Number),
    headwearLikelihood: Schema.optional(Schema.String),
    joyLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p2beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p2beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p2beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1LocationInfo" });

export interface GoogleCloudVisionV1p2beta1EntityAnnotation {
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p2beta1LocationInfo>;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p2beta1Property>;
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p2beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicality: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1LocationInfo),
    ),
    description: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1Property),
    ),
    locale: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p2beta1ProductSearchResultsResult {
  /** The Product. */
  product?: GoogleCloudVisionV1p2beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(GoogleCloudVisionV1p2beta1Product),
    score: Schema.optional(Schema.Number),
    image: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1ProductSearchResultsResult",
  });

export interface GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
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
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult>;
}

export const GoogleCloudVisionV1p2beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p2beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductSearchResultsResult),
    ),
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1ProductSearchResults" });

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

export interface GoogleCloudVisionV1p2beta1WebDetectionWebPage {
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** The result web page URL. */
  url?: string;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p2beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageTitle: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    url: Schema.optional(Schema.String),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p2beta1WebDetection {
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebLabel>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebPage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p2beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p2beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebLabel),
    ),
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebPage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1WebDetection" });

export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage {
  /** Confidence of detected language. Range [0, 1]. */
  confidence?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage",
  });

export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak {
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

export const GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    isPrefix: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak",
  });

export interface GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage>;
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;
}

export const GoogleCloudVisionV1p2beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage),
    ),
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p2beta1Symbol {
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p2beta1Symbol: Schema.Schema<GoogleCloudVisionV1p2beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    text: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Symbol" });

export interface GoogleCloudVisionV1p2beta1Word {
  /** Confidence of the OCR results for the word. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected for the word. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** List of symbols in the word. The order of the symbols follows the natural reading order. */
  symbols?: ReadonlyArray<GoogleCloudVisionV1p2beta1Symbol>;
  /** The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
}

export const GoogleCloudVisionV1p2beta1Word: Schema.Schema<GoogleCloudVisionV1p2beta1Word> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    symbols: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Symbol)),
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Word" });

export interface GoogleCloudVisionV1p2beta1Paragraph {
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p2beta1Word>;
}

export const GoogleCloudVisionV1p2beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p2beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Word)),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Paragraph" });

export interface GoogleCloudVisionV1p2beta1Block {
  /** The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** Detected block type (text, image etc) for this block. */
  blockType?:
    | "UNKNOWN"
    | "TEXT"
    | "TABLE"
    | "PICTURE"
    | "RULER"
    | "BARCODE"
    | (string & {});
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p2beta1Paragraph>;
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p2beta1Block: Schema.Schema<GoogleCloudVisionV1p2beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    blockType: Schema.optional(Schema.String),
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1Paragraph),
    ),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Block" });

export interface GoogleCloudVisionV1p2beta1Page {
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p2beta1Block>;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
}

export const GoogleCloudVisionV1p2beta1Page: Schema.Schema<GoogleCloudVisionV1p2beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotationTextProperty,
    ),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Block)),
    height: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1Page" });

export interface GoogleCloudVisionV1p2beta1TextAnnotation {
  /** UTF-8 text detected on the pages. */
  text?: string;
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p2beta1Page>;
}

export const GoogleCloudVisionV1p2beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p2beta1Page)),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1TextAnnotation" });

export interface GoogleCloudVisionV1p2beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
}

export const GoogleCloudVisionV1p2beta1CropHint: Schema.Schema<GoogleCloudVisionV1p2beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p2beta1ColorInfo {
  /** RGB components of the color. */
  color?: Color;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
}

export const GoogleCloudVisionV1p2beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p2beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    color: Schema.optional(Color),
    pixelFraction: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
}

export const GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p2beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation",
  });

export interface GoogleCloudVisionV1p2beta1AnnotateImageResponse {
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p2beta1SafeSearchAnnotation;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1FaceAnnotation>;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p2beta1ProductSearchResults;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p2beta1ImageAnnotationContext;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p2beta1WebDetection;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p2beta1TextAnnotation;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p2beta1CropHintsAnnotation;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1EntityAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p2beta1ImageProperties;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation>;
}

export const GoogleCloudVisionV1p2beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p2beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1SafeSearchAnnotation,
    ),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1FaceAnnotation),
    ),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p2beta1ProductSearchResults,
    ),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    error: Schema.optional(Status),
    context: Schema.optional(GoogleCloudVisionV1p2beta1ImageAnnotationContext),
    webDetection: Schema.optional(GoogleCloudVisionV1p2beta1WebDetection),
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1TextAnnotation,
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1CropHintsAnnotation,
    ),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1EntityAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p2beta1ImageProperties,
    ),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p2beta1AnnotateImageResponse",
  });

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

export interface ImportProductSetsGcsSource {
  /** The Google Cloud Storage URI of the input csv file. The URI must start with `gs://`. The format of the input csv file should be one image per line. In each line, there are 8 columns. 1. image-uri 2. image-id 3. product-set-id 4. product-id 5. product-category 6. product-display-name 7. labels 8. bounding-poly The `image-uri`, `product-set-id`, `product-id`, and `product-category` columns are required. All other columns are optional. If the `ProductSet` or `Product` specified by the `product-set-id` and `product-id` values does not exist, then the system will create a new `ProductSet` or `Product` for the image. In this case, the `product-display-name` column refers to display_name, the `product-category` column refers to product_category, and the `labels` column refers to product_labels. The `image-id` column is optional but must be unique if provided. If it is empty, the system will automatically assign a unique id to the image. The `product-display-name` column is optional. If it is empty, the system sets the display_name field for the product to a space (" "). You can update the `display_name` later by using the API. If a `Product` with the specified `product-id` already exists, then the system ignores the `product-display-name`, `product-category`, and `labels` columns. The `labels` column (optional) is a line containing a list of comma-separated key-value pairs, in the following format: "key_1=value_1,key_2=value_2,...,key_n=value_n" The `bounding-poly` column (optional) identifies one region of interest from the image in the same manner as `CreateReferenceImage`. If you do not specify the `bounding-poly` column, then the system will try to detect regions of interest automatically. At most one `bounding-poly` column is allowed per line. If the image contains multiple regions of interest, add a line to the CSV file that includes the same product information, and the `bounding-poly` values for each region of interest. The `bounding-poly` column must contain an even number of comma-separated numbers, in the format "p1_x,p1_y,p2_x,p2_y,...,pn_x,pn_y". Use non-negative integers for absolute bounding polygons, and float values in [0, 1] for normalized bounding polygons. The system will resize the image if the image resolution is too large to process (larger than 20MP). */
  csvFileUri?: string;
}

export const ImportProductSetsGcsSource: Schema.Schema<ImportProductSetsGcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    csvFileUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportProductSetsGcsSource" });

export interface ImportProductSetsInputConfig {
  /** The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line. */
  gcsSource?: ImportProductSetsGcsSource;
}

export const ImportProductSetsInputConfig: Schema.Schema<ImportProductSetsInputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(ImportProductSetsGcsSource),
  }).annotate({ identifier: "ImportProductSetsInputConfig" });

export interface ImportProductSetsRequest {
  /** Required. The input content for the list of requests. */
  inputConfig?: ImportProductSetsInputConfig;
}

export const ImportProductSetsRequest: Schema.Schema<ImportProductSetsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(ImportProductSetsInputConfig),
  }).annotate({ identifier: "ImportProductSetsRequest" });

export interface ListProductsResponse {
  /** List of products. */
  products?: ReadonlyArray<Product>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListProductsResponse: Schema.Schema<ListProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    products: Schema.optional(Schema.Array(Product)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListProductsResponse" });

export interface GoogleCloudVisionV1p1beta1Product {
  /** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
  productCategory?: string;
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name?: string;
  /** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
  description?: string;
  /** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
  productLabels?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductKeyValue>;
}

export const GoogleCloudVisionV1p1beta1Product: Schema.Schema<GoogleCloudVisionV1p1beta1Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    productLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductKeyValue),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Product" });

export interface GoogleCloudVisionV1p1beta1ProductSearchResultsResult {
  /** The Product. */
  product?: GoogleCloudVisionV1p1beta1Product;
  /** A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). */
  score?: number;
  /** The resource name of the image from the product that is the closest match to the query. */
  image?: string;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResultsResult: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResultsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(GoogleCloudVisionV1p1beta1Product),
    score: Schema.optional(Schema.Number),
    image: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1ProductSearchResultsResult",
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
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GoogleCloudVisionV1p2beta1GcsDestination;
}

export const GoogleCloudVisionV1p2beta1OutputConfig: Schema.Schema<GoogleCloudVisionV1p2beta1OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchSize: Schema.optional(Schema.Number),
    gcsDestination: Schema.optional(GoogleCloudVisionV1p2beta1GcsDestination),
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
  /** A list of detected languages together with confidence. */
  detectedLanguages?: ReadonlyArray<GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage>;
  /** Detected start or end of a text segment. */
  detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;
}

export const GoogleCloudVisionV1p1beta1TextAnnotationTextProperty: Schema.Schema<GoogleCloudVisionV1p1beta1TextAnnotationTextProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedLanguages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage),
    ),
    detectedBreak: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1TextAnnotationTextProperty",
  });

export interface GoogleCloudVisionV1p3beta1OperationMetadata {
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** The time when the batch request was received. */
  createTime?: string;
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
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1OperationMetadata" });

export interface GoogleCloudVisionV1p1beta1SafeSearchAnnotation {
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
  /** Likelihood that this is a medical image. */
  medical?:
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

export const GoogleCloudVisionV1p1beta1SafeSearchAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1SafeSearchAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
    adult: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1SafeSearchAnnotation" });

export interface GoogleCloudVisionV1p4beta1ColorInfo {
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** RGB components of the color. */
  color?: Color;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const GoogleCloudVisionV1p4beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p4beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    color: Schema.optional(Color),
    pixelFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ColorInfo" });

export interface ReferenceImage {
  /** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
  name?: string;
  /** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
  uri?: string;
  /** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
  boundingPolys?: ReadonlyArray<BoundingPoly>;
}

export const ReferenceImage: Schema.Schema<ReferenceImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    boundingPolys: Schema.optional(Schema.Array(BoundingPoly)),
  }).annotate({ identifier: "ReferenceImage" });

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

export interface GoogleCloudVisionV1p4beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
}

export const GoogleCloudVisionV1p4beta1CropHint: Schema.Schema<GoogleCloudVisionV1p4beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p4beta1WebDetectionWebEntity {
  /** Canonical description of the entity, in English. */
  description?: string;
  /** Opaque entity ID. */
  entityId?: string;
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
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
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
  /** The result web page URL. */
  url?: string;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageTitle: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    score: Schema.optional(Schema.Number),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetectionWebPage" });

export interface GoogleCloudVisionV1p4beta1WebDetectionWebLabel {
  /** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Label for extra metadata. */
  label?: string;
}

export const GoogleCloudVisionV1p4beta1WebDetectionWebLabel: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetectionWebLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetectionWebLabel" });

export interface GoogleCloudVisionV1p4beta1WebDetection {
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebPage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p4beta1WebDetectionWebLabel>;
}

export const GoogleCloudVisionV1p4beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p4beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebImage),
    ),
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebPage),
    ),
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1WebDetectionWebLabel),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1WebDetection" });

export interface GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation {
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
}

export const GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    name: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation",
  });

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

export interface GoogleCloudVisionV1p4beta1LocationInfo {
  /** lat/long location coordinates. */
  latLng?: LatLng;
}

export const GoogleCloudVisionV1p4beta1LocationInfo: Schema.Schema<GoogleCloudVisionV1p4beta1LocationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latLng: Schema.optional(LatLng),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1LocationInfo" });

export interface GoogleCloudVisionV1p4beta1Property {
  /** Value of the property. */
  value?: string;
  /** Name of the property. */
  name?: string;
  /** Value of numeric properties. */
  uint64Value?: string;
}

export const GoogleCloudVisionV1p4beta1Property: Schema.Schema<GoogleCloudVisionV1p4beta1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uint64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Property" });

export interface GoogleCloudVisionV1p4beta1EntityAnnotation {
  /** The language code for the locale in which the entity textual `description` is expressed. */
  locale?: string;
  /** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
  mid?: string;
  /** Overall score of the result. Range [0, 1]. */
  score?: number;
  /** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. */
  confidence?: number;
  /** Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
  locations?: ReadonlyArray<GoogleCloudVisionV1p4beta1LocationInfo>;
  /** The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. */
  topicality?: number;
  /** Entity textual description, expressed in its `locale` language. */
  description?: string;
  /** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
  properties?: ReadonlyArray<GoogleCloudVisionV1p4beta1Property>;
}

export const GoogleCloudVisionV1p4beta1EntityAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1EntityAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    locations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1LocationInfo),
    ),
    topicality: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1Property),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1EntityAnnotation" });

export interface GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation {
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation",
  });

export interface GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult {
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation>;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductSearchResultsResult),
    ),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult",
  });

export interface GoogleCloudVisionV1p4beta1ProductSearchResults {
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult>;
}

export const GoogleCloudVisionV1p4beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p4beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductSearchResultsResult),
    ),
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1ProductSearchResults" });

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

export interface GoogleCloudVisionV1p4beta1Celebrity {
  /** The Celebrity's description. */
  description?: string;
  /** The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`. */
  name?: string;
  /** The Celebrity's display name. */
  displayName?: string;
}

export const GoogleCloudVisionV1p4beta1Celebrity: Schema.Schema<GoogleCloudVisionV1p4beta1Celebrity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1Celebrity" });

export interface GoogleCloudVisionV1p4beta1FaceRecognitionResult {
  /** Recognition confidence. Range [0, 1]. */
  confidence?: number;
  /** The Celebrity that this face was matched to. */
  celebrity?: GoogleCloudVisionV1p4beta1Celebrity;
}

export const GoogleCloudVisionV1p4beta1FaceRecognitionResult: Schema.Schema<GoogleCloudVisionV1p4beta1FaceRecognitionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
    celebrity: Schema.optional(GoogleCloudVisionV1p4beta1Celebrity),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1FaceRecognitionResult",
  });

export interface GoogleCloudVisionV1p4beta1FaceAnnotation {
  /** Anger likelihood. */
  angerLikelihood?:
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
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p4beta1FaceAnnotationLandmark>;
  /** Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. */
  panAngle?: number;
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Joy likelihood. */
  joyLikelihood?:
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
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
}

export const GoogleCloudVisionV1p4beta1FaceAnnotation: Schema.Schema<GoogleCloudVisionV1p4beta1FaceAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    angerLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1FaceAnnotationLandmark),
    ),
    panAngle: Schema.optional(Schema.Number),
    surpriseLikelihood: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p4beta1BoundingPoly),
    landmarkingConfidence: Schema.optional(Schema.Number),
    sorrowLikelihood: Schema.optional(Schema.String),
    tiltAngle: Schema.optional(Schema.Number),
    headwearLikelihood: Schema.optional(Schema.String),
    joyLikelihood: Schema.optional(Schema.String),
    recognitionResult: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1FaceRecognitionResult),
    ),
    blurredLikelihood: Schema.optional(Schema.String),
    rollAngle: Schema.optional(Schema.Number),
    detectionConfidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p4beta1SafeSearchAnnotation {
  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
  adult?:
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
    adult: Schema.optional(Schema.String),
    violence: Schema.optional(Schema.String),
    spoof: Schema.optional(Schema.String),
    racy: Schema.optional(Schema.String),
    medical: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1SafeSearchAnnotation" });

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

export interface GoogleCloudVisionV1p4beta1AnnotateImageResponse {
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p4beta1TextAnnotation;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p4beta1CropHintsAnnotation;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p4beta1WebDetection;
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p4beta1ImageProperties;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p4beta1ProductSearchResults;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1FaceAnnotation>;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p4beta1SafeSearchAnnotation;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p4beta1EntityAnnotation>;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p4beta1ImageAnnotationContext;
}

export const GoogleCloudVisionV1p4beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1TextAnnotation,
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1CropHintsAnnotation,
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p4beta1WebDetection),
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1ImageProperties,
    ),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p4beta1ProductSearchResults,
    ),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1FaceAnnotation),
    ),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p4beta1SafeSearchAnnotation,
    ),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1EntityAnnotation),
    ),
    error: Schema.optional(Status),
    context: Schema.optional(GoogleCloudVisionV1p4beta1ImageAnnotationContext),
  }).annotate({
    identifier: "GoogleCloudVisionV1p4beta1AnnotateImageResponse",
  });

export interface BatchOperationMetadata {
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

export const BatchOperationMetadata: Schema.Schema<BatchOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    submitTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchOperationMetadata" });

export interface GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation {
  /** Object name, expressed in its `language_code` language. */
  name?: string;
  /** Image region to which this object belongs. This must be populated. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
}

export const GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    languageCode: Schema.optional(Schema.String),
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation",
  });

export interface GoogleCloudVisionV1p1beta1ColorInfo {
  /** Image-specific score for this color. Value in range [0, 1]. */
  score?: number;
  /** RGB components of the color. */
  color?: Color;
  /** The fraction of pixels the color occupies in the image. Value in range [0, 1]. */
  pixelFraction?: number;
}

export const GoogleCloudVisionV1p1beta1ColorInfo: Schema.Schema<GoogleCloudVisionV1p1beta1ColorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    color: Schema.optional(Color),
    pixelFraction: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1ColorInfo" });

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

export interface GoogleCloudVisionV1p1beta1Symbol {
  /** The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** The actual UTF-8 representation of the symbol. */
  text?: string;
  /** Additional information detected for the symbol. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the symbol. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p1beta1Symbol: Schema.Schema<GoogleCloudVisionV1p1beta1Symbol> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    text: Schema.optional(Schema.String),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p1beta1Paragraph {
  /** The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). */
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** List of all words in this paragraph. */
  words?: ReadonlyArray<GoogleCloudVisionV1p1beta1Word>;
  /** Additional information detected for the paragraph. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results for the paragraph. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p1beta1Paragraph: Schema.Schema<GoogleCloudVisionV1p1beta1Paragraph> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    words: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Word)),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Paragraph" });

export interface GoogleCloudVisionV1p1beta1Block {
  /** List of paragraphs in this block (if this blocks is of type text). */
  paragraphs?: ReadonlyArray<GoogleCloudVisionV1p1beta1Paragraph>;
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
  /** Additional information detected for the block. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  /** Confidence of the OCR results on the block. Range [0, 1]. */
  confidence?: number;
}

export const GoogleCloudVisionV1p1beta1Block: Schema.Schema<GoogleCloudVisionV1p1beta1Block> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paragraphs: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1Paragraph),
    ),
    boundingBox: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    blockType: Schema.optional(Schema.String),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Block" });

export interface GoogleCloudVisionV1p1beta1Page {
  /** Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  width?: number;
  /** List of blocks of text, images etc on this page. */
  blocks?: ReadonlyArray<GoogleCloudVisionV1p1beta1Block>;
  /** Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels. */
  height?: number;
  /** Confidence of the OCR results on the page. Range [0, 1]. */
  confidence?: number;
  /** Additional information detected on the page. */
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
}

export const GoogleCloudVisionV1p1beta1Page: Schema.Schema<GoogleCloudVisionV1p1beta1Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Schema.Number),
    blocks: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Block)),
    height: Schema.optional(Schema.Number),
    confidence: Schema.optional(Schema.Number),
    property: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotationTextProperty,
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Page" });

export interface GoogleCloudVisionV1p1beta1TextAnnotation {
  /** UTF-8 text detected on the pages. */
  text?: string;
  /** List of pages detected by OCR. */
  pages?: ReadonlyArray<GoogleCloudVisionV1p1beta1Page>;
}

export const GoogleCloudVisionV1p1beta1TextAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1TextAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    pages: Schema.optional(Schema.Array(GoogleCloudVisionV1p1beta1Page)),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1TextAnnotation" });

export interface GoogleCloudVisionV1p1beta1CropHint {
  /** The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Confidence of this being a salient region. Range [0, 1]. */
  confidence?: number;
  /** Fraction of importance of this salient region with respect to the original image. */
  importanceFraction?: number;
}

export const GoogleCloudVisionV1p1beta1CropHint: Schema.Schema<GoogleCloudVisionV1p1beta1CropHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    confidence: Schema.optional(Schema.Number),
    importanceFraction: Schema.optional(Schema.Number),
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

export interface GoogleCloudVisionV1p1beta1WebDetectionWebPage {
  /** Title for the web page, may contain HTML markups. */
  pageTitle?: string;
  /** (Deprecated) Overall relevancy score for the web page. */
  score?: number;
  /** Fully matching images on the page. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** The result web page URL. */
  url?: string;
  /** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p1beta1WebDetectionWebPage: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetectionWebPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageTitle: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    url: Schema.optional(Schema.String),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1WebDetectionWebPage" });

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

export interface GoogleCloudVisionV1p1beta1WebDetectionWebEntity {
  /** Canonical description of the entity, in English. */
  description?: string;
  /** Opaque entity ID. */
  entityId?: string;
  /** Overall relevancy score for the entity. Not normalized and not comparable across different image queries. */
  score?: number;
}

export const GoogleCloudVisionV1p1beta1WebDetectionWebEntity: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetectionWebEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    entityId: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1WebDetectionWebEntity",
  });

export interface GoogleCloudVisionV1p1beta1WebDetection {
  /** Web pages containing the matching images from the Internet. */
  pagesWithMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebPage>;
  /** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
  bestGuessLabels?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebLabel>;
  /** Fully matching images from the Internet. Can include resized copies of the query image. */
  fullMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** Deduced entities from similar images on the Internet. */
  webEntities?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebEntity>;
  /** The visually similar image results. */
  visuallySimilarImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
  /** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
  partialMatchingImages?: ReadonlyArray<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;
}

export const GoogleCloudVisionV1p1beta1WebDetection: Schema.Schema<GoogleCloudVisionV1p1beta1WebDetection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pagesWithMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebPage),
    ),
    bestGuessLabels: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebLabel),
    ),
    fullMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    webEntities: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebEntity),
    ),
    visuallySimilarImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
    partialMatchingImages: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1WebDetectionWebImage),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1WebDetection" });

export interface GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation {
  /** Object ID that should align with EntityAnnotation mid. */
  mid?: string;
  /** Score of the result. Range [0, 1]. */
  score?: number;
  /** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
  languageCode?: string;
  /** Object name, expressed in its `language_code` language. */
  name?: string;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mid: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation",
  });

export interface GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult {
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
  /** List of generic predictions for the object in the bounding box. */
  objectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation>;
  /** The bounding polygon around the product detected in the query image. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductSearchResultsResult),
    ),
    objectAnnotations: Schema.optional(
      Schema.Array(
        GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation,
      ),
    ),
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult",
  });

export interface GoogleCloudVisionV1p1beta1ProductSearchResults {
  /** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
  indexTime?: string;
  /** List of results, one for each product match. */
  results?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
  /** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
  productGroupedResults?: ReadonlyArray<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult>;
}

export const GoogleCloudVisionV1p1beta1ProductSearchResults: Schema.Schema<GoogleCloudVisionV1p1beta1ProductSearchResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexTime: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductSearchResultsResult),
    ),
    productGroupedResults: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult),
    ),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1ProductSearchResults" });

export interface GoogleCloudVisionV1p1beta1Position {
  /** Z coordinate (or depth). */
  z?: number;
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudVisionV1p1beta1Position: Schema.Schema<GoogleCloudVisionV1p1beta1Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    z: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1Position" });

export interface GoogleCloudVisionV1p1beta1FaceAnnotationLandmark {
  /** Face landmark position. */
  position?: GoogleCloudVisionV1p1beta1Position;
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

export const GoogleCloudVisionV1p1beta1FaceAnnotationLandmark: Schema.Schema<GoogleCloudVisionV1p1beta1FaceAnnotationLandmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(GoogleCloudVisionV1p1beta1Position),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1FaceAnnotationLandmark",
  });

export interface GoogleCloudVisionV1p1beta1FaceAnnotation {
  /** The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated. */
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Surprise likelihood. */
  surpriseLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix. */
  fdBoundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
  /** Face landmarking confidence. Range [0, 1]. */
  landmarkingConfidence?: number;
  /** Sorrow likelihood. */
  sorrowLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Anger likelihood. */
  angerLikelihood?:
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
  /** Detected face landmarks. */
  landmarks?: ReadonlyArray<GoogleCloudVisionV1p1beta1FaceAnnotationLandmark>;
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
  /** Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. */
  rollAngle?: number;
  /** Detection confidence. Range [0, 1]. */
  detectionConfidence?: number;
  /** Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180]. */
  tiltAngle?: number;
  /** Headwear likelihood. */
  headwearLikelihood?:
    | "UNKNOWN"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Joy likelihood. */
  joyLikelihood?:
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
    boundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    surpriseLikelihood: Schema.optional(Schema.String),
    fdBoundingPoly: Schema.optional(GoogleCloudVisionV1p1beta1BoundingPoly),
    landmarkingConfidence: Schema.optional(Schema.Number),
    sorrowLikelihood: Schema.optional(Schema.String),
    angerLikelihood: Schema.optional(Schema.String),
    underExposedLikelihood: Schema.optional(Schema.String),
    landmarks: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1FaceAnnotationLandmark),
    ),
    panAngle: Schema.optional(Schema.Number),
    blurredLikelihood: Schema.optional(Schema.String),
    rollAngle: Schema.optional(Schema.Number),
    detectionConfidence: Schema.optional(Schema.Number),
    tiltAngle: Schema.optional(Schema.Number),
    headwearLikelihood: Schema.optional(Schema.String),
    joyLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1FaceAnnotation" });

export interface GoogleCloudVisionV1p1beta1AnnotateImageResponse {
  /** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
  localizedObjectAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation>;
  /** If present, image properties were extracted successfully. */
  imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;
  /** If present, label detection has completed successfully. */
  labelAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If present, logo detection has completed successfully. */
  logoAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text. */
  fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;
  /** If present, crop hints have completed successfully. */
  cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;
  /** If present, web detection has completed successfully. */
  webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
  /** If present, text (OCR) detection has completed successfully. */
  textAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set. */
  error?: Status;
  /** If present, contextual information is needed to understand where this image comes from. */
  context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;
  /** If present, product search has completed successfully. */
  productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;
  /** If present, face detection has completed successfully. */
  faceAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1FaceAnnotation>;
  /** If present, landmark detection has completed successfully. */
  landmarkAnnotations?: ReadonlyArray<GoogleCloudVisionV1p1beta1EntityAnnotation>;
  /** If present, safe-search annotation has completed successfully. */
  safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
}

export const GoogleCloudVisionV1p1beta1AnnotateImageResponse: Schema.Schema<GoogleCloudVisionV1p1beta1AnnotateImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizedObjectAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation),
    ),
    imagePropertiesAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1ImageProperties,
    ),
    labelAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    logoAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    fullTextAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1TextAnnotation,
    ),
    cropHintsAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1CropHintsAnnotation,
    ),
    webDetection: Schema.optional(GoogleCloudVisionV1p1beta1WebDetection),
    textAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    error: Schema.optional(Status),
    context: Schema.optional(GoogleCloudVisionV1p1beta1ImageAnnotationContext),
    productSearchResults: Schema.optional(
      GoogleCloudVisionV1p1beta1ProductSearchResults,
    ),
    faceAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1FaceAnnotation),
    ),
    landmarkAnnotations: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1EntityAnnotation),
    ),
    safeSearchAnnotation: Schema.optional(
      GoogleCloudVisionV1p1beta1SafeSearchAnnotation,
    ),
  }).annotate({
    identifier: "GoogleCloudVisionV1p1beta1AnnotateImageResponse",
  });

export interface GoogleCloudVisionV1p1beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p1beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p1beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1GcsSource" });

export interface GoogleCloudVisionV1p1beta1InputConfig {
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p1beta1GcsSource;
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
}

export const GoogleCloudVisionV1p1beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p1beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudVisionV1p1beta1GcsSource),
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1InputConfig" });

export interface GoogleCloudVisionV1p1beta1AnnotateFileResponse {
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p1beta1AnnotateImageResponse>;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
}

export const GoogleCloudVisionV1p1beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p1beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalPages: Schema.optional(Schema.Number),
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p1beta1AnnotateImageResponse),
    ),
    error: Schema.optional(Status),
    inputConfig: Schema.optional(GoogleCloudVisionV1p1beta1InputConfig),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1AnnotateFileResponse" });

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

export interface AsyncBatchAnnotateFilesResponse {
  /** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<AsyncAnnotateFileResponse>;
}

export const AsyncBatchAnnotateFilesResponse: Schema.Schema<AsyncBatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(AsyncAnnotateFileResponse)),
  }).annotate({ identifier: "AsyncBatchAnnotateFilesResponse" });

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

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ProductSetPurgeConfig {
  /** The ProductSet that contains the Products to delete. If a Product is a member of product_set_id in addition to other ProductSets, the Product will still be deleted. */
  productSetId?: string;
}

export const ProductSetPurgeConfig: Schema.Schema<ProductSetPurgeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productSetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductSetPurgeConfig" });

export interface PurgeProductsRequest {
  /** Specify which ProductSet contains the Products to be deleted. */
  productSetPurgeConfig?: ProductSetPurgeConfig;
  /** If delete_orphan_products is true, all Products that are not in any ProductSet will be deleted. */
  deleteOrphanProducts?: boolean;
  /** The default value is false. Override this value to true to actually perform the purge. */
  force?: boolean;
}

export const PurgeProductsRequest: Schema.Schema<PurgeProductsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productSetPurgeConfig: Schema.optional(ProductSetPurgeConfig),
    deleteOrphanProducts: Schema.optional(Schema.Boolean),
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PurgeProductsRequest" });

export interface GoogleCloudVisionV1p1beta1GcsDestination {
  /** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
  uri?: string;
}

export const GoogleCloudVisionV1p1beta1GcsDestination: Schema.Schema<GoogleCloudVisionV1p1beta1GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1GcsDestination" });

export interface OperationMetadata {
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** The time when the batch request was received. */
  createTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
}

export const InputConfig: Schema.Schema<InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GcsSource),
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "InputConfig" });

export interface AnnotateFileResponse {
  /** Information about the file for which this response is generated. */
  inputConfig?: InputConfig;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<AnnotateImageResponse>;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
}

export const AnnotateFileResponse: Schema.Schema<AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(InputConfig),
    error: Schema.optional(Status),
    responses: Schema.optional(Schema.Array(AnnotateImageResponse)),
    totalPages: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AnnotateFileResponse" });

export interface RemoveProductFromProductSetRequest {
  /** Required. The resource name for the Product to be removed from this ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID` */
  product?: string;
}

export const RemoveProductFromProductSetRequest: Schema.Schema<RemoveProductFromProductSetRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveProductFromProductSetRequest" });

export interface BatchAnnotateImagesResponse {
  /** Individual responses to image annotation requests within the batch. */
  responses?: ReadonlyArray<AnnotateImageResponse>;
}

export const BatchAnnotateImagesResponse: Schema.Schema<BatchAnnotateImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(AnnotateImageResponse)),
  }).annotate({ identifier: "BatchAnnotateImagesResponse" });

export interface AsyncBatchAnnotateImagesResponse {
  /** The output location and metadata from AsyncBatchAnnotateImagesRequest. */
  outputConfig?: OutputConfig;
}

export const AsyncBatchAnnotateImagesResponse: Schema.Schema<AsyncBatchAnnotateImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(OutputConfig),
  }).annotate({ identifier: "AsyncBatchAnnotateImagesResponse" });

export interface GoogleCloudVisionV1p2beta1OperationMetadata {
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** The time when the batch request was received. */
  createTime?: string;
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
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1OperationMetadata" });

export interface AnnotateFileRequest {
  /** Additional context that may accompany the image(s) in the file. */
  imageContext?: ImageContext;
  /** Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file. */
  pages?: ReadonlyArray<number>;
  /** Required. Information about the input file. */
  inputConfig?: InputConfig;
  /** Required. Requested features. */
  features?: ReadonlyArray<Feature>;
}

export const AnnotateFileRequest: Schema.Schema<AnnotateFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageContext: Schema.optional(ImageContext),
    pages: Schema.optional(Schema.Array(Schema.Number)),
    inputConfig: Schema.optional(InputConfig),
    features: Schema.optional(Schema.Array(Feature)),
  }).annotate({ identifier: "AnnotateFileRequest" });

export interface BatchAnnotateFilesRequest {
  /** Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest. */
  requests?: ReadonlyArray<AnnotateFileRequest>;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const BatchAnnotateFilesRequest: Schema.Schema<BatchAnnotateFilesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(AnnotateFileRequest)),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "BatchAnnotateFilesRequest" });

export interface GoogleCloudVisionV1p2beta1GcsSource {
  /** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
  uri?: string;
}

export const GoogleCloudVisionV1p2beta1GcsSource: Schema.Schema<GoogleCloudVisionV1p2beta1GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1GcsSource" });

export interface GoogleCloudVisionV1p2beta1InputConfig {
  /** The Google Cloud Storage location to read the input from. */
  gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;
  /** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
  mimeType?: string;
  /** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
  content?: string;
}

export const GoogleCloudVisionV1p2beta1InputConfig: Schema.Schema<GoogleCloudVisionV1p2beta1InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GoogleCloudVisionV1p2beta1GcsSource),
    mimeType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1InputConfig" });

export interface GoogleCloudVisionV1p2beta1AnnotateFileResponse {
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p2beta1AnnotateImageResponse>;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
}

export const GoogleCloudVisionV1p2beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p2beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(GoogleCloudVisionV1p2beta1InputConfig),
    error: Schema.optional(Status),
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p2beta1AnnotateImageResponse),
    ),
    totalPages: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p2beta1AnnotateFileResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

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

export interface GoogleCloudVisionV1p1beta1OperationMetadata {
  /** Current state of the batch operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "DONE"
    | "CANCELLED"
    | (string & {});
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** The time when the batch request was received. */
  createTime?: string;
}

export const GoogleCloudVisionV1p1beta1OperationMetadata: Schema.Schema<GoogleCloudVisionV1p1beta1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p1beta1OperationMetadata" });

export interface ListReferenceImagesResponse {
  /** The list of reference images. */
  referenceImages?: ReadonlyArray<ReferenceImage>;
  /** The maximum number of items to return. Default 10, maximum 100. */
  pageSize?: number;
  /** The next_page_token returned from a previous List request, if any. */
  nextPageToken?: string;
}

export const ListReferenceImagesResponse: Schema.Schema<ListReferenceImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceImages: Schema.optional(Schema.Array(ReferenceImage)),
    pageSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReferenceImagesResponse" });

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
  /** Information about the file for which this response is generated. */
  inputConfig?: GoogleCloudVisionV1p4beta1InputConfig;
  /** If set, represents the error message for the failed request. The `responses` field will not be set in this case. */
  error?: Status;
  /** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
  responses?: ReadonlyArray<GoogleCloudVisionV1p4beta1AnnotateImageResponse>;
  /** This field gives the total number of pages in the file. */
  totalPages?: number;
}

export const GoogleCloudVisionV1p4beta1AnnotateFileResponse: Schema.Schema<GoogleCloudVisionV1p4beta1AnnotateFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(GoogleCloudVisionV1p4beta1InputConfig),
    error: Schema.optional(Status),
    responses: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p4beta1AnnotateImageResponse),
    ),
    totalPages: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1AnnotateFileResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudVisionV1p1beta1OutputConfig {
  /** The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. */
  batchSize?: number;
  /** The Google Cloud Storage location to write the output(s) to. */
  gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
}

export const GoogleCloudVisionV1p1beta1OutputConfig: Schema.Schema<GoogleCloudVisionV1p1beta1OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchSize: Schema.optional(Schema.Number),
    gcsDestination: Schema.optional(GoogleCloudVisionV1p1beta1GcsDestination),
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

export interface ProductSet {
  /** The resource name of the ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. This field is ignored when creating a ProductSet. */
  name?: string;
  /** The user-provided name for this ProductSet. Must not be empty. Must be at most 4096 characters long. */
  displayName?: string;
  /** Output only. The time at which this ProductSet was last indexed. Query results will reflect all updates before this time. If this ProductSet has never been indexed, this timestamp is the default value "1970-01-01T00:00:00Z". This field is ignored when creating a ProductSet. */
  indexTime?: string;
  /** Output only. If there was an error with indexing the product set, the field is populated. This field is ignored when creating a ProductSet. */
  indexError?: Status;
}

export const ProductSet: Schema.Schema<ProductSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    indexTime: Schema.optional(Schema.String),
    indexError: Schema.optional(Status),
  }).annotate({ identifier: "ProductSet" });

export interface ListProductSetsResponse {
  /** List of ProductSets. */
  productSets?: ReadonlyArray<ProductSet>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListProductSetsResponse: Schema.Schema<ListProductSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productSets: Schema.optional(Schema.Array(ProductSet)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListProductSetsResponse" });

export interface AsyncAnnotateFileRequest {
  /** Additional context that may accompany the image(s) in the file. */
  imageContext?: ImageContext;
  /** Required. Information about the input file. */
  inputConfig?: InputConfig;
  /** Required. Requested features. */
  features?: ReadonlyArray<Feature>;
  /** Required. The desired output location and metadata (e.g. format). */
  outputConfig?: OutputConfig;
}

export const AsyncAnnotateFileRequest: Schema.Schema<AsyncAnnotateFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageContext: Schema.optional(ImageContext),
    inputConfig: Schema.optional(InputConfig),
    features: Schema.optional(Schema.Array(Feature)),
    outputConfig: Schema.optional(OutputConfig),
  }).annotate({ identifier: "AsyncAnnotateFileRequest" });

export interface GoogleCloudVisionV1p4beta1OperationMetadata {
  /** The time when the operation result was last updated. */
  updateTime?: string;
  /** The time when the batch request was received. */
  createTime?: string;
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
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p4beta1OperationMetadata" });

export interface BatchAnnotateFilesResponse {
  /** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
  responses?: ReadonlyArray<AnnotateFileResponse>;
}

export const BatchAnnotateFilesResponse: Schema.Schema<BatchAnnotateFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    responses: Schema.optional(Schema.Array(AnnotateFileResponse)),
  }).annotate({ identifier: "BatchAnnotateFilesResponse" });

export interface AsyncBatchAnnotateImagesRequest {
  /** Required. Individual image annotation requests for this batch. */
  requests?: ReadonlyArray<AnnotateImageRequest>;
  /** Required. The desired output location and metadata (e.g. format). */
  outputConfig?: OutputConfig;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const AsyncBatchAnnotateImagesRequest: Schema.Schema<AsyncBatchAnnotateImagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(AnnotateImageRequest)),
    outputConfig: Schema.optional(OutputConfig),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AsyncBatchAnnotateImagesRequest" });

export interface AsyncBatchAnnotateFilesRequest {
  /** Required. Individual async file annotation requests for this batch. */
  requests?: ReadonlyArray<AsyncAnnotateFileRequest>;
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
  labels?: Record<string, string>;
}

export const AsyncBatchAnnotateFilesRequest: Schema.Schema<AsyncBatchAnnotateFilesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(AsyncAnnotateFileRequest)),
    parent: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AsyncBatchAnnotateFilesRequest" });

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

export interface AddProductToProductSetRequest {
  /** Required. The resource name for the Product to be added to this ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID` */
  product?: string;
}

export const AddProductToProductSetRequest: Schema.Schema<AddProductToProductSetRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddProductToProductSetRequest" });

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

export interface GoogleCloudVisionV1p3beta1ReferenceImage {
  /** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
  name?: string;
  /** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
  boundingPolys?: ReadonlyArray<GoogleCloudVisionV1p3beta1BoundingPoly>;
  /** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
  uri?: string;
}

export const GoogleCloudVisionV1p3beta1ReferenceImage: Schema.Schema<GoogleCloudVisionV1p3beta1ReferenceImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    boundingPolys: Schema.optional(
      Schema.Array(GoogleCloudVisionV1p3beta1BoundingPoly),
    ),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudVisionV1p3beta1ReferenceImage" });

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

export interface GoogleCloudVisionV1p3beta1BatchOperationMetadata {
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
  /** The time when the batch request was submitted to the server. */
  submitTime?: string;
}

export const GoogleCloudVisionV1p3beta1BatchOperationMetadata: Schema.Schema<GoogleCloudVisionV1p3beta1BatchOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    submitTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudVisionV1p3beta1BatchOperationMetadata",
  });

export interface ListProductsInProductSetResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The list of Products. */
  products?: ReadonlyArray<Product>;
}

export const ListProductsInProductSetResponse: Schema.Schema<ListProductsInProductSetResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    products: Schema.optional(Schema.Array(Product)),
  }).annotate({ identifier: "ListProductsInProductSetResponse" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

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

export interface AnnotateFilesRequest {
  /** Request body */
  body?: BatchAnnotateFilesRequest;
}

export const AnnotateFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(BatchAnnotateFilesRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/files:annotate", hasBody: true }),
  svc,
) as unknown as Schema.Schema<AnnotateFilesRequest>;

export type AnnotateFilesResponse = BatchAnnotateFilesResponse;
export const AnnotateFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchAnnotateFilesResponse;

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

export interface AsyncBatchAnnotateFilesRequest_Op {
  /** Request body */
  body?: AsyncBatchAnnotateFilesRequest;
}

export const AsyncBatchAnnotateFilesRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AsyncBatchAnnotateFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/files:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateFilesRequest_Op>;

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
  AsyncBatchAnnotateFilesRequest_Op,
  AsyncBatchAnnotateFilesResponse_Op,
  AsyncBatchAnnotateFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateFilesRequest_Op,
  output: AsyncBatchAnnotateFilesResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
}

export const ListOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("returnPartialSuccess"),
  ),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<ListOperationsRequest>;

export type ListOperationsResponse_Op = ListOperationsResponse;
export const ListOperationsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse_Op,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOperationsRequest>;

export type CancelOperationsResponse = Empty;
export const CancelOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOperations: API.OperationMethod<
  CancelOperationsRequest,
  CancelOperationsResponse,
  CancelOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOperationsRequest,
  output: CancelOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOperationsRequest>;

export type DeleteOperationsResponse = Empty;
export const DeleteOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOperations: API.OperationMethod<
  DeleteOperationsRequest,
  DeleteOperationsResponse,
  DeleteOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOperationsRequest,
  output: DeleteOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetLocationsOperationsRequest>;

export type GetLocationsOperationsResponse = Operation;
export const GetLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetLocationsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getLocationsOperations: API.OperationMethod<
  GetLocationsOperationsRequest,
  GetLocationsOperationsResponse,
  GetLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLocationsOperationsRequest,
  output: GetLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AnnotateProjectsLocationsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: BatchAnnotateImagesRequest;
}

export const AnnotateProjectsLocationsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchAnnotateImagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/images:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsLocationsImagesRequest>;

export type AnnotateProjectsLocationsImagesResponse =
  BatchAnnotateImagesResponse;
export const AnnotateProjectsLocationsImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchAnnotateImagesResponse;

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

export interface AsyncBatchAnnotateProjectsLocationsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: AsyncBatchAnnotateImagesRequest;
}

export const AsyncBatchAnnotateProjectsLocationsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AsyncBatchAnnotateImagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/images:asyncBatchAnnotate",
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

export interface CreateProjectsLocationsProductSetsRequest {
  /** Required. The project in which the ProductSet should be created. Format is `projects/PROJECT_ID/locations/LOC_ID`. */
  parent: string;
  /** A user-supplied resource id for this ProductSet. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`. */
  productSetId?: string;
  /** Request body */
  body?: ProductSet;
}

export const CreateProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    productSetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("productSetId"),
    ),
    body: Schema.optional(ProductSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/productSets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsProductSetsRequest>;

export type CreateProjectsLocationsProductSetsResponse = ProductSet;
export const CreateProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductSet;

export type CreateProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters. */
export const createProjectsLocationsProductSets: API.OperationMethod<
  CreateProjectsLocationsProductSetsRequest,
  CreateProjectsLocationsProductSetsResponse,
  CreateProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsProductSetsRequest,
  output: CreateProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsProductSetsRequest {
  /** The maximum number of items to return. Default 10, maximum 100. */
  pageSize?: number;
  /** Required. The project from which ProductSets should be listed. Format is `projects/PROJECT_ID/locations/LOC_ID`. */
  parent: string;
  /** The next_page_token returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/productSets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProductSetsRequest>;

export type ListProjectsLocationsProductSetsResponse = ListProductSetsResponse;
export const ListProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductSetsResponse;

export type ListProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1. */
export const listProjectsLocationsProductSets: API.PaginatedOperationMethod<
  ListProjectsLocationsProductSetsRequest,
  ListProjectsLocationsProductSetsResponse,
  ListProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProductSetsRequest,
  output: ListProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsProductSetsRequest {
  /** The FieldMask that specifies which fields to update. If update_mask isn't specified, all mutable fields are to be updated. Valid mask path is `display_name`. */
  updateMask?: string;
  /** The resource name of the ProductSet. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. This field is ignored when creating a ProductSet. */
  name: string;
  /** Request body */
  body?: ProductSet;
}

export const PatchProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProductSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsProductSetsRequest>;

export type PatchProjectsLocationsProductSetsResponse = ProductSet;
export const PatchProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductSet;

export type PatchProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters. */
export const patchProjectsLocationsProductSets: API.OperationMethod<
  PatchProjectsLocationsProductSetsRequest,
  PatchProjectsLocationsProductSetsResponse,
  PatchProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsProductSetsRequest,
  output: PatchProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsProductSetsRequest {
  /** Required. Resource name of the ProductSet to delete. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID` */
  name: string;
}

export const DeleteProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsProductSetsRequest>;

export type DeleteProjectsLocationsProductSetsResponse = Empty;
export const DeleteProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage. */
export const deleteProjectsLocationsProductSets: API.OperationMethod<
  DeleteProjectsLocationsProductSetsRequest,
  DeleteProjectsLocationsProductSetsResponse,
  DeleteProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsProductSetsRequest,
  output: DeleteProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsProductSetsRequest {
  /** Required. Resource name of the ProductSet to get. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID` */
  name: string;
}

export const GetProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProductSetsRequest>;

export type GetProjectsLocationsProductSetsResponse = ProductSet;
export const GetProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProductSet;

export type GetProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information associated with a ProductSet. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. */
export const getProjectsLocationsProductSets: API.OperationMethod<
  GetProjectsLocationsProductSetsRequest,
  GetProjectsLocationsProductSetsResponse,
  GetProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProductSetsRequest,
  output: GetProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddProductProjectsLocationsProductSetsRequest {
  /** Required. The resource name for the ProductSet to modify. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID` */
  name: string;
  /** Request body */
  body?: AddProductToProductSetRequest;
}

export const AddProductProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AddProductToProductSetRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:addProduct", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AddProductProjectsLocationsProductSetsRequest>;

export type AddProductProjectsLocationsProductSetsResponse = Empty;
export const AddProductProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type AddProductProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist. */
export const addProductProjectsLocationsProductSets: API.OperationMethod<
  AddProductProjectsLocationsProductSetsRequest,
  AddProductProjectsLocationsProductSetsResponse,
  AddProductProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddProductProjectsLocationsProductSetsRequest,
  output: AddProductProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveProductProjectsLocationsProductSetsRequest {
  /** Required. The resource name for the ProductSet to modify. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID` */
  name: string;
  /** Request body */
  body?: RemoveProductFromProductSetRequest;
}

export const RemoveProductProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RemoveProductFromProductSetRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:removeProduct", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RemoveProductProjectsLocationsProductSetsRequest>;

export type RemoveProductProjectsLocationsProductSetsResponse = Empty;
export const RemoveProductProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RemoveProductProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a Product from the specified ProductSet. */
export const removeProductProjectsLocationsProductSets: API.OperationMethod<
  RemoveProductProjectsLocationsProductSetsRequest,
  RemoveProductProjectsLocationsProductSetsResponse,
  RemoveProductProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveProductProjectsLocationsProductSetsRequest,
  output: RemoveProductProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsProductSetsRequest {
  /** Required. The project in which the ProductSets should be imported. Format is `projects/PROJECT_ID/locations/LOC_ID`. */
  parent: string;
  /** Request body */
  body?: ImportProductSetsRequest;
}

export const ImportProjectsLocationsProductSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportProductSetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/productSets:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsProductSetsRequest>;

export type ImportProjectsLocationsProductSetsResponse = Operation;
export const ImportProjectsLocationsProductSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsProductSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri. */
export const importProjectsLocationsProductSets: API.OperationMethod<
  ImportProjectsLocationsProductSetsRequest,
  ImportProjectsLocationsProductSetsResponse,
  ImportProjectsLocationsProductSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsProductSetsRequest,
  output: ImportProjectsLocationsProductSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsProductSetsProductsRequest {
  /** The maximum number of items to return. Default 10, maximum 100. */
  pageSize?: number;
  /** The next_page_token returned from a previous List request, if any. */
  pageToken?: string;
  /** Required. The ProductSet resource for which to retrieve Products. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID` */
  name: string;
}

export const ListProjectsLocationsProductSetsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/products" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProductSetsProductsRequest>;

export type ListProjectsLocationsProductSetsProductsResponse =
  ListProductsInProductSetResponse;
export const ListProjectsLocationsProductSetsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductsInProductSetResponse;

export type ListProjectsLocationsProductSetsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1. */
export const listProjectsLocationsProductSetsProducts: API.PaginatedOperationMethod<
  ListProjectsLocationsProductSetsProductsRequest,
  ListProjectsLocationsProductSetsProductsResponse,
  ListProjectsLocationsProductSetsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProductSetsProductsRequest,
  output: ListProjectsLocationsProductSetsProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsProductsRequest {
  /** Required. The project in which the Product should be created. Format is `projects/PROJECT_ID/locations/LOC_ID`. */
  parent: string;
  /** A user-supplied resource id for this Product. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`. */
  productId?: string;
  /** Request body */
  body?: Product;
}

export const CreateProjectsLocationsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    productId: Schema.optional(Schema.String).pipe(T.HttpQuery("productId")),
    body: Schema.optional(Product).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/products", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsProductsRequest>;

export type CreateProjectsLocationsProductsResponse = Product;
export const CreateProjectsLocationsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Product;

export type CreateProjectsLocationsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and returns a new product resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is missing or invalid. */
export const createProjectsLocationsProducts: API.OperationMethod<
  CreateProjectsLocationsProductsRequest,
  CreateProjectsLocationsProductsResponse,
  CreateProjectsLocationsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsProductsRequest,
  output: CreateProjectsLocationsProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsProductsRequest {
  /** Required. The project OR ProductSet from which Products should be listed. Format: `projects/PROJECT_ID/locations/LOC_ID` */
  parent: string;
  /** The next_page_token returned from a previous List request, if any. */
  pageToken?: string;
  /** The maximum number of items to return. Default 10, maximum 100. */
  pageSize?: number;
}

export const ListProjectsLocationsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/products" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProductsRequest>;

export type ListProjectsLocationsProductsResponse = ListProductsResponse;
export const ListProjectsLocationsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProductsResponse;

export type ListProjectsLocationsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists products in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1. */
export const listProjectsLocationsProducts: API.PaginatedOperationMethod<
  ListProjectsLocationsProductsRequest,
  ListProjectsLocationsProductsResponse,
  ListProjectsLocationsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProductsRequest,
  output: ListProjectsLocationsProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsProductsRequest {
  /** Required. Resource name of the Product to get. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID` */
  name: string;
}

export const GetProjectsLocationsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProductsRequest>;

export type GetProjectsLocationsProductsResponse = Product;
export const GetProjectsLocationsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Product;

export type GetProjectsLocationsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information associated with a Product. Possible errors: * Returns NOT_FOUND if the Product does not exist. */
export const getProjectsLocationsProducts: API.OperationMethod<
  GetProjectsLocationsProductsRequest,
  GetProjectsLocationsProductsResponse,
  GetProjectsLocationsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProductsRequest,
  output: GetProjectsLocationsProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsProductsRequest {
  /** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
  name: string;
  /** The FieldMask that specifies which fields to update. If update_mask isn't specified, all mutable fields are to be updated. Valid mask paths include `product_labels`, `display_name`, and `description`. */
  updateMask?: string;
  /** Request body */
  body?: Product;
}

export const PatchProjectsLocationsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Product).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsProductsRequest>;

export type PatchProjectsLocationsProductsResponse = Product;
export const PatchProjectsLocationsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Product;

export type PatchProjectsLocationsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Makes changes to a Product resource. Only the `display_name`, `description`, and `labels` fields can be updated right now. If labels are updated, the change will not be reflected in queries until the next index time. Possible errors: * Returns NOT_FOUND if the Product does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but is missing from the request or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is present in update_mask but is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is present in update_mask. */
export const patchProjectsLocationsProducts: API.OperationMethod<
  PatchProjectsLocationsProductsRequest,
  PatchProjectsLocationsProductsResponse,
  PatchProjectsLocationsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsProductsRequest,
  output: PatchProjectsLocationsProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsProductsRequest {
  /** Required. Resource name of product to delete. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID` */
  name: string;
}

export const DeleteProjectsLocationsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsProductsRequest>;

export type DeleteProjectsLocationsProductsResponse = Empty;
export const DeleteProjectsLocationsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a product and its reference images. Metadata of the product and all its images will be deleted right away, but search queries against ProductSets containing the product may still work until all related caches are refreshed. */
export const deleteProjectsLocationsProducts: API.OperationMethod<
  DeleteProjectsLocationsProductsRequest,
  DeleteProjectsLocationsProductsResponse,
  DeleteProjectsLocationsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsProductsRequest,
  output: DeleteProjectsLocationsProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PurgeProjectsLocationsProductsRequest {
  /** Required. The project and location in which the Products should be deleted. Format is `projects/PROJECT_ID/locations/LOC_ID`. */
  parent: string;
  /** Request body */
  body?: PurgeProductsRequest;
}

export const PurgeProjectsLocationsProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PurgeProductsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/products:purge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PurgeProjectsLocationsProductsRequest>;

export type PurgeProjectsLocationsProductsResponse = Operation;
export const PurgeProjectsLocationsProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PurgeProjectsLocationsProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet. If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted. It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted. It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion. If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) */
export const purgeProjectsLocationsProducts: API.OperationMethod<
  PurgeProjectsLocationsProductsRequest,
  PurgeProjectsLocationsProductsResponse,
  PurgeProjectsLocationsProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PurgeProjectsLocationsProductsRequest,
  output: PurgeProjectsLocationsProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsProductsReferenceImagesRequest {
  /** Required. The resource name of the reference image to delete. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID` */
  name: string;
}

export const DeleteProjectsLocationsProductsReferenceImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsProductsReferenceImagesRequest>;

export type DeleteProjectsLocationsProductsReferenceImagesResponse = Empty;
export const DeleteProjectsLocationsProductsReferenceImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsProductsReferenceImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Permanently deletes a reference image. The image metadata will be deleted right away, but search queries against ProductSets containing the image may still work until all related caches are refreshed. The actual image files are not deleted from Google Cloud Storage. */
export const deleteProjectsLocationsProductsReferenceImages: API.OperationMethod<
  DeleteProjectsLocationsProductsReferenceImagesRequest,
  DeleteProjectsLocationsProductsReferenceImagesResponse,
  DeleteProjectsLocationsProductsReferenceImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsProductsReferenceImagesRequest,
  output: DeleteProjectsLocationsProductsReferenceImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsProductsReferenceImagesRequest {
  /** Required. Resource name of the product in which to create the reference image. Format is `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. */
  parent: string;
  /** A user-supplied resource id for the ReferenceImage to be added. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`. */
  referenceImageId?: string;
  /** Request body */
  body?: ReferenceImage;
}

export const CreateProjectsLocationsProductsReferenceImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    referenceImageId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("referenceImageId"),
    ),
    body: Schema.optional(ReferenceImage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/referenceImages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsProductsReferenceImagesRequest>;

export type CreateProjectsLocationsProductsReferenceImagesResponse =
  ReferenceImage;
export const CreateProjectsLocationsProductsReferenceImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReferenceImage;

export type CreateProjectsLocationsProductsReferenceImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons. */
export const createProjectsLocationsProductsReferenceImages: API.OperationMethod<
  CreateProjectsLocationsProductsReferenceImagesRequest,
  CreateProjectsLocationsProductsReferenceImagesResponse,
  CreateProjectsLocationsProductsReferenceImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsProductsReferenceImagesRequest,
  output: CreateProjectsLocationsProductsReferenceImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsProductsReferenceImagesRequest {
  /** Required. Resource name of the product containing the reference images. Format is `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. */
  parent: string;
  /** A token identifying a page of results to be returned. This is the value of `nextPageToken` returned in a previous reference image list request. Defaults to the first page if not specified. */
  pageToken?: string;
  /** The maximum number of items to return. Default 10, maximum 100. */
  pageSize?: number;
}

export const ListProjectsLocationsProductsReferenceImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/referenceImages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProductsReferenceImagesRequest>;

export type ListProjectsLocationsProductsReferenceImagesResponse =
  ListReferenceImagesResponse;
export const ListProjectsLocationsProductsReferenceImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReferenceImagesResponse;

export type ListProjectsLocationsProductsReferenceImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1. */
export const listProjectsLocationsProductsReferenceImages: API.PaginatedOperationMethod<
  ListProjectsLocationsProductsReferenceImagesRequest,
  ListProjectsLocationsProductsReferenceImagesResponse,
  ListProjectsLocationsProductsReferenceImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProductsReferenceImagesRequest,
  output: ListProjectsLocationsProductsReferenceImagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsProductsReferenceImagesRequest {
  /** Required. The resource name of the ReferenceImage to get. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. */
  name: string;
}

export const GetProjectsLocationsProductsReferenceImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProductsReferenceImagesRequest>;

export type GetProjectsLocationsProductsReferenceImagesResponse =
  ReferenceImage;
export const GetProjectsLocationsProductsReferenceImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReferenceImage;

export type GetProjectsLocationsProductsReferenceImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information associated with a ReferenceImage. Possible errors: * Returns NOT_FOUND if the specified image does not exist. */
export const getProjectsLocationsProductsReferenceImages: API.OperationMethod<
  GetProjectsLocationsProductsReferenceImagesRequest,
  GetProjectsLocationsProductsReferenceImagesResponse,
  GetProjectsLocationsProductsReferenceImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProductsReferenceImagesRequest,
  output: GetProjectsLocationsProductsReferenceImagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AsyncBatchAnnotateProjectsLocationsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: AsyncBatchAnnotateFilesRequest;
}

export const AsyncBatchAnnotateProjectsLocationsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AsyncBatchAnnotateFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/files:asyncBatchAnnotate",
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

export interface AnnotateProjectsLocationsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: BatchAnnotateFilesRequest;
}

export const AnnotateProjectsLocationsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchAnnotateFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/files:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsLocationsFilesRequest>;

export type AnnotateProjectsLocationsFilesResponse = BatchAnnotateFilesResponse;
export const AnnotateProjectsLocationsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchAnnotateFilesResponse;

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

export interface AnnotateProjectsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: BatchAnnotateImagesRequest;
}

export const AnnotateProjectsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchAnnotateImagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/images:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsImagesRequest>;

export type AnnotateProjectsImagesResponse = BatchAnnotateImagesResponse;
export const AnnotateProjectsImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchAnnotateImagesResponse;

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

export interface AsyncBatchAnnotateProjectsImagesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: AsyncBatchAnnotateImagesRequest;
}

export const AsyncBatchAnnotateProjectsImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AsyncBatchAnnotateImagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/images:asyncBatchAnnotate",
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

export interface AsyncBatchAnnotateProjectsFilesRequest {
  /** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
  parent: string;
  /** Request body */
  body?: AsyncBatchAnnotateFilesRequest;
}

export const AsyncBatchAnnotateProjectsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AsyncBatchAnnotateFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/files:asyncBatchAnnotate",
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
  body?: BatchAnnotateFilesRequest;
}

export const AnnotateProjectsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchAnnotateFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/files:annotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateProjectsFilesRequest>;

export type AnnotateProjectsFilesResponse = BatchAnnotateFilesResponse;
export const AnnotateProjectsFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchAnnotateFilesResponse;

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

export interface GetProjectsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = Operation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AnnotateImagesRequest {
  /** Request body */
  body?: BatchAnnotateImagesRequest;
}

export const AnnotateImagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(BatchAnnotateImagesRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/images:annotate", hasBody: true }),
  svc,
) as unknown as Schema.Schema<AnnotateImagesRequest>;

export type AnnotateImagesResponse = BatchAnnotateImagesResponse;
export const AnnotateImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchAnnotateImagesResponse;

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

export interface AsyncBatchAnnotateImagesRequest_Op {
  /** Request body */
  body?: AsyncBatchAnnotateImagesRequest;
}

export const AsyncBatchAnnotateImagesRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AsyncBatchAnnotateImagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/images:asyncBatchAnnotate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AsyncBatchAnnotateImagesRequest_Op>;

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
  AsyncBatchAnnotateImagesRequest_Op,
  AsyncBatchAnnotateImagesResponse_Op,
  AsyncBatchAnnotateImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AsyncBatchAnnotateImagesRequest_Op,
  output: AsyncBatchAnnotateImagesResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
