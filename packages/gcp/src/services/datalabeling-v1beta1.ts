// ==========================================================================
// Data Labeling API (datalabeling v1beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "datalabeling",
  version: "v1beta1",
  rootUrl: "https://datalabeling.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDatalabelingV1beta1PolylineConfig {
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
  /** Optional. Instruction message showed on contributors UI. */
  instructionMessage?: string;
}

export const GoogleCloudDatalabelingV1beta1PolylineConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1PolylineConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
    instructionMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1PolylineConfig" });

export interface GoogleRpcStatus {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Codec<GoogleRpcStatus> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata {
  /** The name of the dataset for which the analysis report is generated. Format: "projects/* /datasets/*" */
  dataset?: string;
  /** Timestamp when generate report request was created. */
  createTime?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig {
  /** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
  userEmailAddress?: string;
  /** Required. Instruction resource name. */
  instruction?: string;
  /** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
  contributorEmails?: ReadonlyArray<string>;
  /** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
  questionDuration?: string;
  /** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
  annotatedDatasetDescription?: string;
  /** Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5. */
  replicaCount?: number;
  /** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
  labelGroup?: string;
  /** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
  languageCode?: string;
  /** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
  annotatedDatasetDisplayName?: string;
}

export const GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig> =
  /*@__PURE__*/ Schema.Struct({
    userEmailAddress: Schema.optional(Schema.String),
    instruction: Schema.optional(Schema.String),
    contributorEmails: Schema.optional(Schema.Array(Schema.String)),
    questionDuration: Schema.optional(Schema.String),
    annotatedDatasetDescription: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.Number),
    labelGroup: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    annotatedDatasetDisplayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig {
  /** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
  contributorEmails?: ReadonlyArray<string>;
  /** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
  questionDuration?: string;
  /** Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5. */
  replicaCount?: number;
  /** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
  languageCode?: string;
  /** Required. Instruction resource name. */
  instruction?: string;
  /** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
  annotatedDatasetDisplayName?: string;
  /** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
  labelGroup?: string;
  /** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
  annotatedDatasetDescription?: string;
  /** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
  userEmailAddress?: string;
}

export const GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig: Schema.Codec<GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig> =
  /*@__PURE__*/ Schema.Struct({
    contributorEmails: Schema.optional(Schema.Array(Schema.String)),
    questionDuration: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.Number),
    languageCode: Schema.optional(Schema.String),
    instruction: Schema.optional(Schema.String),
    annotatedDatasetDisplayName: Schema.optional(Schema.String),
    labelGroup: Schema.optional(Schema.String),
    annotatedDatasetDescription: Schema.optional(Schema.String),
    userEmailAddress: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1OperatorMetadata {
  /** Comments from contributors. */
  comments?: ReadonlyArray<string>;
  /** Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3). */
  score?: number;
  /** The total number of contributors that answer this question. */
  totalVotes?: number;
  /** The total number of contributors that choose this label. */
  labelVotes?: number;
}

export const GoogleCloudDatalabelingV1beta1OperatorMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1OperatorMetadata> =
  /*@__PURE__*/ Schema.Struct({
    comments: Schema.optional(Schema.Array(Schema.String)),
    score: Schema.optional(Schema.Number),
    totalVotes: Schema.optional(Schema.Number),
    labelVotes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1OperatorMetadata" });

export interface GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata {
  /** Output only. The name of imported dataset. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Timestamp when import dataset request was created. */
  createTime?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1HumanAnnotationConfig {
  /** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
  languageCode?: string;
  /** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
  annotatedDatasetDisplayName?: string;
  /** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
  questionDuration?: string;
  /** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
  annotatedDatasetDescription?: string;
  /** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
  userEmailAddress?: string;
  /** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
  contributorEmails?: ReadonlyArray<string>;
  /** Required. Instruction resource name. */
  instruction?: string;
  /** Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5. */
  replicaCount?: number;
  /** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
  labelGroup?: string;
}

export const GoogleCloudDatalabelingV1beta1HumanAnnotationConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1HumanAnnotationConfig> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    annotatedDatasetDisplayName: Schema.optional(Schema.String),
    questionDuration: Schema.optional(Schema.String),
    annotatedDatasetDescription: Schema.optional(Schema.String),
    userEmailAddress: Schema.optional(Schema.String),
    contributorEmails: Schema.optional(Schema.Array(Schema.String)),
    instruction: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.Number),
    labelGroup: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1HumanAnnotationConfig",
  });

export interface GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1AnnotationSpec {
  /** Required. The display name of the AnnotationSpec. Maximum of 64 characters. */
  displayName?: string;
  /** Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values. */
  index?: number;
  /** Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long. */
  description?: string;
}

export const GoogleCloudDatalabelingV1beta1AnnotationSpec: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotationSpec> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1AnnotationSpec" });

export interface GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1NormalizedVertex {
  /** Y coordinate. */
  y?: number;
  /** X coordinate. */
  x?: number;
}

export const GoogleCloudDatalabelingV1beta1NormalizedVertex: Schema.Codec<GoogleCloudDatalabelingV1beta1NormalizedVertex> =
  /*@__PURE__*/ Schema.Struct({
    y: Schema.optional(Schema.Number),
    x: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1NormalizedVertex" });

export interface GoogleCloudDatalabelingV1beta1NormalizedPolyline {
  /** The normalized polyline vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudDatalabelingV1beta1NormalizedVertex>;
}

export const GoogleCloudDatalabelingV1beta1NormalizedPolyline: Schema.Codec<GoogleCloudDatalabelingV1beta1NormalizedPolyline> =
  /*@__PURE__*/ Schema.Struct({
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1NormalizedVertex),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1NormalizedPolyline",
  });

export interface GoogleCloudDatalabelingV1beta1Vertex {
  /** X coordinate. */
  x?: number;
  /** Y coordinate. */
  y?: number;
}

export const GoogleCloudDatalabelingV1beta1Vertex: Schema.Codec<GoogleCloudDatalabelingV1beta1Vertex> =
  /*@__PURE__*/ Schema.Struct({
    x: Schema.optional(Schema.Number),
    y: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Vertex" });

export interface GoogleCloudDatalabelingV1beta1Polyline {
  /** The polyline vertices. */
  vertices?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Vertex>;
}

export const GoogleCloudDatalabelingV1beta1Polyline: Schema.Codec<GoogleCloudDatalabelingV1beta1Polyline> =
  /*@__PURE__*/ Schema.Struct({
    vertices: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Vertex),
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Polyline" });

export interface GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation {
  /** Label of this polyline. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
  normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline;
  polyline?: GoogleCloudDatalabelingV1beta1Polyline;
}

export const GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
    normalizedPolyline: Schema.optional(
      GoogleCloudDatalabelingV1beta1NormalizedPolyline,
    ),
    polyline: Schema.optional(GoogleCloudDatalabelingV1beta1Polyline),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1TimeSegment {
  /** Start of the time segment (inclusive), represented as the duration since the example start. */
  startTimeOffset?: string;
  /** End of the time segment (exclusive), represented as the duration since the example start. */
  endTimeOffset?: string;
}

export const GoogleCloudDatalabelingV1beta1TimeSegment: Schema.Codec<GoogleCloudDatalabelingV1beta1TimeSegment> =
  /*@__PURE__*/ Schema.Struct({
    startTimeOffset: Schema.optional(Schema.String),
    endTimeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1TimeSegment" });

export interface GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly {
  /** The bounding polygon normalized vertices. */
  normalizedVertices?: ReadonlyArray<GoogleCloudDatalabelingV1beta1NormalizedVertex>;
}

export const GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly: Schema.Codec<GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly> =
  /*@__PURE__*/ Schema.Struct({
    normalizedVertices: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1NormalizedVertex),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly",
  });

export interface GoogleCloudDatalabelingV1beta1BoundingPoly {
  /** The bounding polygon vertices. */
  vertices?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Vertex>;
}

export const GoogleCloudDatalabelingV1beta1BoundingPoly: Schema.Codec<GoogleCloudDatalabelingV1beta1BoundingPoly> =
  /*@__PURE__*/ Schema.Struct({
    vertices: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Vertex),
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1BoundingPoly" });

export interface GoogleCloudDatalabelingV1beta1ObjectTrackingFrame {
  /** The time offset of this frame relative to the beginning of the video. */
  timeOffset?: string;
  normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
  boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;
}

export const GoogleCloudDatalabelingV1beta1ObjectTrackingFrame: Schema.Codec<GoogleCloudDatalabelingV1beta1ObjectTrackingFrame> =
  /*@__PURE__*/ Schema.Struct({
    timeOffset: Schema.optional(Schema.String),
    normalizedBoundingPoly: Schema.optional(
      GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly,
    ),
    boundingPoly: Schema.optional(GoogleCloudDatalabelingV1beta1BoundingPoly),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ObjectTrackingFrame",
  });

export interface GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation {
  /** The time segment of the video to which object tracking applies. */
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
  /** The list of frames where this object track appears. */
  objectTrackingFrames?: ReadonlyArray<GoogleCloudDatalabelingV1beta1ObjectTrackingFrame>;
  /** Label of the object tracked in this annotation. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    timeSegment: Schema.optional(GoogleCloudDatalabelingV1beta1TimeSegment),
    objectTrackingFrames: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1ObjectTrackingFrame),
    ),
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation {
  /** Label of image. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1TextClassificationAnnotation {
  /** Label of the text. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1TextClassificationAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1TextClassificationAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1TextClassificationAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation {
  normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
  boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;
  /** Label of object in this bounding polygon. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    normalizedBoundingPoly: Schema.optional(
      GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly,
    ),
    boundingPoly: Schema.optional(GoogleCloudDatalabelingV1beta1BoundingPoly),
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation {
  /** Label of the segment specified by time_segment. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
  /** The time segment of the video to which the annotation applies. */
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}

export const GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
    timeSegment: Schema.optional(GoogleCloudDatalabelingV1beta1TimeSegment),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1VideoEventAnnotation {
  /** The time segment of the video to which the annotation applies. */
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
  /** Label of the event in this annotation. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1VideoEventAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1VideoEventAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    timeSegment: Schema.optional(GoogleCloudDatalabelingV1beta1TimeSegment),
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1VideoEventAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation {
  /** The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec. */
  annotationColors?: Record<
    string,
    GoogleCloudDatalabelingV1beta1AnnotationSpec
  >;
  /** A byte string of a full image's color map. */
  imageBytes?: string;
  /** Image format. */
  mimeType?: string;
}

export const GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationColors: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDatalabelingV1beta1AnnotationSpec,
      ),
    ),
    imageBytes: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1SequentialSegment {
  /** End position (exclusive). */
  end?: number;
  /** Start position (inclusive). */
  start?: number;
}

export const GoogleCloudDatalabelingV1beta1SequentialSegment: Schema.Codec<GoogleCloudDatalabelingV1beta1SequentialSegment> =
  /*@__PURE__*/ Schema.Struct({
    end: Schema.optional(Schema.Number),
    start: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1SequentialSegment",
  });

export interface GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation {
  /** Label of the text entities. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
  /** Position of the entity. */
  sequentialSegment?: GoogleCloudDatalabelingV1beta1SequentialSegment;
}

export const GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation: Schema.Codec<GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
    sequentialSegment: Schema.optional(
      GoogleCloudDatalabelingV1beta1SequentialSegment,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation",
  });

export interface GoogleCloudDatalabelingV1beta1AnnotationValue {
  /** Annotation value for image polyline cases. Polyline here is different from BoundingPoly. It is formed by line segments connected to each other but not closed form(Bounding Poly). The line segments can cross each other. */
  imagePolylineAnnotation?: GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;
  /** Annotation value for video object detection and tracking case. */
  videoObjectTrackingAnnotation?: GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation;
  /** Annotation value for image classification case. */
  imageClassificationAnnotation?: GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation;
  /** Annotation value for text classification case. */
  textClassificationAnnotation?: GoogleCloudDatalabelingV1beta1TextClassificationAnnotation;
  /** Annotation value for image bounding box, oriented bounding box and polygon cases. */
  imageBoundingPolyAnnotation?: GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation;
  /** Annotation value for video classification case. */
  videoClassificationAnnotation?: GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation;
  /** Annotation value for video event case. */
  videoEventAnnotation?: GoogleCloudDatalabelingV1beta1VideoEventAnnotation;
  /** Annotation value for image segmentation. */
  imageSegmentationAnnotation?: GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation;
  /** Annotation value for text entity extraction case. */
  textEntityExtractionAnnotation?: GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation;
}

export const GoogleCloudDatalabelingV1beta1AnnotationValue: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotationValue> =
  /*@__PURE__*/ Schema.Struct({
    imagePolylineAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation,
    ),
    videoObjectTrackingAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation,
    ),
    imageClassificationAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation,
    ),
    textClassificationAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextClassificationAnnotation,
    ),
    imageBoundingPolyAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation,
    ),
    videoClassificationAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation,
    ),
    videoEventAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1VideoEventAnnotation,
    ),
    imageSegmentationAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation,
    ),
    textEntityExtractionAnnotation: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1AnnotationValue" });

export interface GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata {
  /** Output only. The name of dataset to be exported. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Timestamp when export dataset request was created. */
  createTime?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
}

export const GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    annotatedDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ImageClassificationConfig {
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
  /** Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image. */
  allowMultiLabel?: boolean;
  /** Optional. The type of how to aggregate answers. */
  answerAggregationType?:
    | "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    | "MAJORITY_VOTE"
    | "UNANIMOUS_VOTE"
    | "NO_AGGREGATION"
    | (string & {});
}

export const GoogleCloudDatalabelingV1beta1ImageClassificationConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1ImageClassificationConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
    allowMultiLabel: Schema.optional(Schema.Boolean),
    answerAggregationType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImageClassificationConfig",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata {}

export const GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig {
  /** Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. */
  userEmailAddress?: string;
  /** Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. */
  questionDuration?: string;
  /** Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5. */
  replicaCount?: number;
  /** Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`. */
  labelGroup?: string;
  /** Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. */
  annotatedDatasetDescription?: string;
  /** Required. Instruction resource name. */
  instruction?: string;
  /** Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ */
  contributorEmails?: ReadonlyArray<string>;
  /** Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . */
  annotatedDatasetDisplayName?: string;
  /** Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. */
  languageCode?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig> =
  /*@__PURE__*/ Schema.Struct({
    userEmailAddress: Schema.optional(Schema.String),
    questionDuration: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.Number),
    labelGroup: Schema.optional(Schema.String),
    annotatedDatasetDescription: Schema.optional(Schema.String),
    instruction: Schema.optional(Schema.String),
    contributorEmails: Schema.optional(Schema.Array(Schema.String)),
    annotatedDatasetDisplayName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1GcsDestination {
  /** Required. The output uri of destination file. */
  outputUri?: string;
  /** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
  mimeType?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1GcsDestination: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    outputUri: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1GcsDestination",
  });

export interface GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata {
  /** Output only. Timestamp when import dataset request was created. */
  createTime?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of imported dataset. "projects/* /datasets/*" */
  dataset?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions {
  /** Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1. */
  iouThreshold?: number;
}

export const GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions: Schema.Codec<GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions> =
  /*@__PURE__*/ Schema.Struct({
    iouThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions",
  });

export interface GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry {
  /** Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.) */
  itemCount?: number;
  /** The annotation spec of a predicted label. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry: Schema.Codec<GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry> =
  /*@__PURE__*/ Schema.Struct({
    itemCount: Schema.optional(Schema.Number),
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry",
  });

export interface GoogleCloudDatalabelingV1beta1PdfInstruction {
  /** PDF file for the instruction. Only gcs path is allowed. */
  gcsFileUri?: string;
}

export const GoogleCloudDatalabelingV1beta1PdfInstruction: Schema.Codec<GoogleCloudDatalabelingV1beta1PdfInstruction> =
  /*@__PURE__*/ Schema.Struct({
    gcsFileUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1PdfInstruction" });

export interface GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1TextMetadata {
  /** The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. */
  languageCode?: string;
}

export const GoogleCloudDatalabelingV1beta1TextMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1TextMetadata> =
  /*@__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1TextMetadata" });

export interface GoogleCloudDatalabelingV1beta1ClassificationMetadata {
  /** Whether the classification task is multi-label or not. */
  isMultiLabel?: boolean;
}

export const GoogleCloudDatalabelingV1beta1ClassificationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1ClassificationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    isMultiLabel: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ClassificationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1BigQuerySource {
  /** Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id}/ {your_dataset_name}/{your_table_name}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema). */
  inputUri?: string;
}

export const GoogleCloudDatalabelingV1beta1BigQuerySource: Schema.Codec<GoogleCloudDatalabelingV1beta1BigQuerySource> =
  /*@__PURE__*/ Schema.Struct({
    inputUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1BigQuerySource" });

export interface GoogleCloudDatalabelingV1beta1GcsSource {
  /** Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`). */
  inputUri?: string;
  /** Required. The format of the source file. Only "text/csv" is supported. */
  mimeType?: string;
}

export const GoogleCloudDatalabelingV1beta1GcsSource: Schema.Codec<GoogleCloudDatalabelingV1beta1GcsSource> =
  /*@__PURE__*/ Schema.Struct({
    inputUri: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1GcsSource" });

export interface GoogleCloudDatalabelingV1beta1InputConfig {
  /** Required. Data type must be specifed when user tries to import data. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "IMAGE"
    | "VIDEO"
    | "TEXT"
    | "GENERAL_DATA"
    | (string & {});
  /** Required for text import, as language code must be specified. */
  textMetadata?: GoogleCloudDatalabelingV1beta1TextMetadata;
  /** Optional. Metadata about annotations for the input. You must specify this field if you are using this InputConfig in an EvaluationJob for a model version that performs classification. */
  classificationMetadata?: GoogleCloudDatalabelingV1beta1ClassificationMetadata;
  /** Source located in BigQuery. You must specify this field if you are using this InputConfig in an EvaluationJob. */
  bigquerySource?: GoogleCloudDatalabelingV1beta1BigQuerySource;
  /** Source located in Cloud Storage. */
  gcsSource?: GoogleCloudDatalabelingV1beta1GcsSource;
  /** Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob. */
  annotationType?:
    | "ANNOTATION_TYPE_UNSPECIFIED"
    | "IMAGE_CLASSIFICATION_ANNOTATION"
    | "IMAGE_BOUNDING_BOX_ANNOTATION"
    | "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    | "IMAGE_BOUNDING_POLY_ANNOTATION"
    | "IMAGE_POLYLINE_ANNOTATION"
    | "IMAGE_SEGMENTATION_ANNOTATION"
    | "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    | "VIDEO_OBJECT_TRACKING_ANNOTATION"
    | "VIDEO_OBJECT_DETECTION_ANNOTATION"
    | "VIDEO_EVENT_ANNOTATION"
    | "TEXT_CLASSIFICATION_ANNOTATION"
    | "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    | "GENERAL_CLASSIFICATION_ANNOTATION"
    | (string & {});
}

export const GoogleCloudDatalabelingV1beta1InputConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1InputConfig> =
  /*@__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    textMetadata: Schema.optional(GoogleCloudDatalabelingV1beta1TextMetadata),
    classificationMetadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1ClassificationMetadata,
    ),
    bigquerySource: Schema.optional(
      GoogleCloudDatalabelingV1beta1BigQuerySource,
    ),
    gcsSource: Schema.optional(GoogleCloudDatalabelingV1beta1GcsSource),
    annotationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1InputConfig" });

export interface GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest {}

export const GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest",
  });

export interface GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig {
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
}

export const GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1GcsDestination {
  /** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
  mimeType?: string;
  /** Required. The output uri of destination file. */
  outputUri?: string;
}

export const GoogleCloudDatalabelingV1p2alpha1GcsDestination: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    outputUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1GcsDestination",
  });

export interface GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination {
  /** Required. Cloud Storage directory to export data to. */
  outputFolderUri?: string;
}

export const GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination> =
  /*@__PURE__*/ Schema.Struct({
    outputFolderUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination",
  });

export interface GoogleCloudDatalabelingV1p2alpha1OutputConfig {
  /** Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation. */
  gcsDestination?: GoogleCloudDatalabelingV1p2alpha1GcsDestination;
  /** Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs. */
  gcsFolderDestination?: GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination;
}

export const GoogleCloudDatalabelingV1p2alpha1OutputConfig: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1OutputConfig> =
  /*@__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1GcsDestination,
    ),
    gcsFolderDestination: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1p2alpha1OutputConfig" });

export interface GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1SentimentConfig {
  /** If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false. */
  enableLabelSentimentSelection?: boolean;
}

export const GoogleCloudDatalabelingV1beta1SentimentConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1SentimentConfig> =
  /*@__PURE__*/ Schema.Struct({
    enableLabelSentimentSelection: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1SentimentConfig" });

export interface GoogleCloudDatalabelingV1beta1TextClassificationConfig {
  /** Optional. Configs for sentiment selection. We deprecate sentiment analysis in data labeling side as it is incompatible with uCAIP. */
  sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig;
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
  /** Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment. */
  allowMultiLabel?: boolean;
}

export const GoogleCloudDatalabelingV1beta1TextClassificationConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1TextClassificationConfig> =
  /*@__PURE__*/ Schema.Struct({
    sentimentConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1SentimentConfig,
    ),
    annotationSpecSet: Schema.optional(Schema.String),
    allowMultiLabel: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1TextClassificationConfig",
  });

export interface GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelOperationMetadata {
  /** Details of label video event operation. */
  videoEventDetails?: GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata;
  /** Details of label video object tracking operation. */
  videoObjectTrackingDetails?: GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata;
  /** Output only. The name of dataset to be labeled. "projects/* /datasets/*" */
  dataset?: string;
  /** Details of label text entity extraction operation. */
  textEntityExtractionDetails?: GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata;
  /** Details of label image oriented bounding box operation. */
  imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata;
  /** Details of label image classification operation. */
  imageClassificationDetails?: GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata;
  /** Details of label image bounding box operation. */
  imageBoundingBoxDetails?: GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata;
  /** Details of label image segmentation operation. */
  imageSegmentationDetails?: GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata;
  /** Output only. Timestamp when labeling request was created. */
  createTime?: string;
  /** Details of label video classification operation. */
  videoClassificationDetails?: GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata;
  /** Details of label text classification operation. */
  textClassificationDetails?: GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata;
  /** Details of label image polyline operation. */
  imagePolylineDetails?: GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. Progress of label operation. Range: [0, 100]. */
  progressPercent?: number;
  /** Details of label video object detection operation. */
  videoObjectDetectionDetails?: GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata;
  /** Details of label image bounding poly operation. */
  imageBoundingPolyDetails?: GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata;
}

export const GoogleCloudDatalabelingV1beta1LabelOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    videoEventDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata,
    ),
    videoObjectTrackingDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata,
    ),
    dataset: Schema.optional(Schema.String),
    textEntityExtractionDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata,
    ),
    imageOrientedBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata,
    ),
    imageClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata,
    ),
    imageBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata,
    ),
    imageSegmentationDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata,
    ),
    createTime: Schema.optional(Schema.String),
    videoClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata,
    ),
    textClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata,
    ),
    imagePolylineDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata,
    ),
    annotatedDataset: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    progressPercent: Schema.optional(Schema.Number),
    videoObjectDetectionDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata,
    ),
    imageBoundingPolyDetails: Schema.optional(
      GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1LabelOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1LabelStats {
  /** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
  exampleCount?: Record<string, string>;
}

export const GoogleCloudDatalabelingV1beta1LabelStats: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelStats> =
  /*@__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1LabelStats" });

export interface GoogleLongrunningOperation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Codec<GoogleLongrunningOperation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Codec<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDatalabelingV1beta1SegmentationConfig {
  /** Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id} */
  annotationSpecSet?: string;
  /** Instruction message showed on labelers UI. */
  instructionMessage?: string;
}

export const GoogleCloudDatalabelingV1beta1SegmentationConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1SegmentationConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
    instructionMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1SegmentationConfig",
  });

export interface GoogleCloudDatalabelingV1beta1BoundingPolyConfig {
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
  /** Optional. Instruction message showed on contributors UI. */
  instructionMessage?: string;
}

export const GoogleCloudDatalabelingV1beta1BoundingPolyConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1BoundingPolyConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
    instructionMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1BoundingPolyConfig",
  });

export interface GoogleCloudDatalabelingV1beta1LabelImageRequest {
  /** Configuration for segmentation task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required. */
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
  /** Configuration for image classification task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required. */
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
  /** Configuration for bounding box and bounding poly task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required. */
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
  /** Configuration for polyline task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required. */
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;
  /** Required. Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  /** Required. The type of image labeling task. */
  feature?:
    | "FEATURE_UNSPECIFIED"
    | "CLASSIFICATION"
    | "BOUNDING_BOX"
    | "ORIENTED_BOUNDING_BOX"
    | "BOUNDING_POLY"
    | "POLYLINE"
    | "SEGMENTATION"
    | (string & {});
}

export const GoogleCloudDatalabelingV1beta1LabelImageRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelImageRequest> =
  /*@__PURE__*/ Schema.Struct({
    segmentationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1SegmentationConfig,
    ),
    imageClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImageClassificationConfig,
    ),
    boundingPolyConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1BoundingPolyConfig,
    ),
    polylineConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1PolylineConfig,
    ),
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
    feature: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1LabelImageRequest",
  });

export interface GoogleCloudDatalabelingV1beta1Attempt {
  /** Details of errors that occurred. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  attemptTime?: string;
}

export const GoogleCloudDatalabelingV1beta1Attempt: Schema.Codec<GoogleCloudDatalabelingV1beta1Attempt> =
  /*@__PURE__*/ Schema.Struct({
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    attemptTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Attempt" });

export interface GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig {
  /** Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email. */
  minAcceptableMeanAveragePrecision?: number;
  /** Required. An email address to send alerts to. */
  email?: string;
}

export const GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig> =
  /*@__PURE__*/ Schema.Struct({
    minAcceptableMeanAveragePrecision: Schema.optional(Schema.Number),
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig",
  });

export interface GoogleCloudDatalabelingV1beta1EvaluationConfig {
  /** Only specify this field if the related model performs image object detection (`IMAGE_BOUNDING_BOX_ANNOTATION`). Describes how to evaluate bounding boxes. */
  boundingBoxEvaluationOptions?: GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
}

export const GoogleCloudDatalabelingV1beta1EvaluationConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1EvaluationConfig> =
  /*@__PURE__*/ Schema.Struct({
    boundingBoxEvaluationOptions: Schema.optional(
      GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1EvaluationConfig" });

export interface GoogleCloudDatalabelingV1beta1EvaluationJobConfig {
  /** Optional. Details for human annotation of your data. If you set labelMissingGroundTruth to `true` for this evaluation job, then you must specify this field. If you plan to provide your own ground truth labels, then omit this field. Note that you must create an Instruction resource before you can specify this field. Provide the name of the instruction resource in the `instruction` field within this configuration. */
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  /** Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys). */
  bigqueryImportKeys?: Record<string, string>;
  /** Optional. Configuration details for evaluation job alerts. Specify this field if you want to receive email alerts if the evaluation job finds that your predictions have low mean average precision during a run. */
  evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
  /** Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery. */
  exampleSamplePercentage?: number;
  /** Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit. */
  exampleCount?: number;
  /** Specify this field if your model version performs image object detection (bounding box detection). `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. */
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
  /** Specify this field if your model version performs text classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config. */
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
  /** Rquired. Details for the sampled prediction input. Within this configuration, there are requirements for several fields: * `dataType` must be one of `IMAGE`, `TEXT`, or `GENERAL_DATA`. * `annotationType` must be one of `IMAGE_CLASSIFICATION_ANNOTATION`, `TEXT_CLASSIFICATION_ANNOTATION`, `GENERAL_CLASSIFICATION_ANNOTATION`, or `IMAGE_BOUNDING_BOX_ANNOTATION` (image object detection). * If your machine learning model performs classification, you must specify `classificationMetadata.isMultiLabel`. * You must specify `bigquerySource` (not `gcsSource`). */
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;
  /** Specify this field if your model version performs image classification or general classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config. */
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
  /** Required. Details for calculating evaluation metrics and creating Evaulations. If your model version performs image object detection, you must specify the `boundingBoxEvaluationOptions` field within this configuration. Otherwise, provide an empty object for this configuration. */
  evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig;
}

export const GoogleCloudDatalabelingV1beta1EvaluationJobConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1EvaluationJobConfig> =
  /*@__PURE__*/ Schema.Struct({
    humanAnnotationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
    bigqueryImportKeys: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    evaluationJobAlertConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig,
    ),
    exampleSamplePercentage: Schema.optional(Schema.Number),
    exampleCount: Schema.optional(Schema.Number),
    boundingPolyConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1BoundingPolyConfig,
    ),
    textClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextClassificationConfig,
    ),
    inputConfig: Schema.optional(GoogleCloudDatalabelingV1beta1InputConfig),
    imageClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImageClassificationConfig,
    ),
    evaluationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1EvaluationConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1EvaluationJobConfig",
  });

export interface GoogleCloudDatalabelingV1beta1EvaluationJob {
  /** Required. Description of the job. The description can be up to 25,000 characters long. */
  description?: string;
  /** Output only. Describes the current state of the job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SCHEDULED"
    | "RUNNING"
    | "PAUSED"
    | "STOPPED"
    | (string & {});
  /** Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}" */
  annotationSpecSet?: string;
  /** Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array. */
  attempts?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Attempt>;
  /** Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}" */
  name?: string;
  /** Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`. */
  labelMissingGroundTruth?: boolean;
  /** Required. Configuration details for the evaluation job. */
  evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
  /** Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version. */
  modelVersion?: string;
  /** Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day. */
  schedule?: string;
  /** Output only. Timestamp of when this evaluation job was created. */
  createTime?: string;
}

export const GoogleCloudDatalabelingV1beta1EvaluationJob: Schema.Codec<GoogleCloudDatalabelingV1beta1EvaluationJob> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    annotationSpecSet: Schema.optional(Schema.String),
    attempts: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Attempt),
    ),
    name: Schema.optional(Schema.String),
    labelMissingGroundTruth: Schema.optional(Schema.Boolean),
    evaluationJobConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1EvaluationJobConfig,
    ),
    modelVersion: Schema.optional(Schema.String),
    schedule: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1EvaluationJob" });

export interface GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest {
  /** Required. The evaluation job to create. */
  job?: GoogleCloudDatalabelingV1beta1EvaluationJob;
}

export const GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    job: Schema.optional(GoogleCloudDatalabelingV1beta1EvaluationJob),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1GcsFolderDestination {
  /** Required. Cloud Storage directory to export data to. */
  outputFolderUri?: string;
}

export const GoogleCloudDatalabelingV1alpha1GcsFolderDestination: Schema.Codec<GoogleCloudDatalabelingV1alpha1GcsFolderDestination> =
  /*@__PURE__*/ Schema.Struct({
    outputFolderUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1GcsFolderDestination",
  });

export interface GoogleCloudDatalabelingV1alpha1GcsDestination {
  /** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
  mimeType?: string;
  /** Required. The output uri of destination file. */
  outputUri?: string;
}

export const GoogleCloudDatalabelingV1alpha1GcsDestination: Schema.Codec<GoogleCloudDatalabelingV1alpha1GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    outputUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1alpha1GcsDestination" });

export interface GoogleCloudDatalabelingV1alpha1OutputConfig {
  /** Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs. */
  gcsFolderDestination?: GoogleCloudDatalabelingV1alpha1GcsFolderDestination;
  /** Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation. */
  gcsDestination?: GoogleCloudDatalabelingV1alpha1GcsDestination;
}

export const GoogleCloudDatalabelingV1alpha1OutputConfig: Schema.Codec<GoogleCloudDatalabelingV1alpha1OutputConfig> =
  /*@__PURE__*/ Schema.Struct({
    gcsFolderDestination: Schema.optional(
      GoogleCloudDatalabelingV1alpha1GcsFolderDestination,
    ),
    gcsDestination: Schema.optional(
      GoogleCloudDatalabelingV1alpha1GcsDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1alpha1OutputConfig" });

export interface GoogleCloudDatalabelingV1alpha1LabelStats {
  /** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
  exampleCount?: Record<string, string>;
}

export const GoogleCloudDatalabelingV1alpha1LabelStats: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelStats> =
  /*@__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1alpha1LabelStats" });

export interface GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse {
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Output only. Total number of examples requested to export */
  totalCount?: number;
  /** Ouptut only. The name of dataset. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. output_config in the ExportData request. */
  outputConfig?: GoogleCloudDatalabelingV1alpha1OutputConfig;
  /** Output only. Statistic infos of labels in the exported dataset. */
  labelStats?: GoogleCloudDatalabelingV1alpha1LabelStats;
  /** Output only. Number of examples exported successfully. */
  exportCount?: number;
}

export const GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    annotatedDataset: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
    outputConfig: Schema.optional(GoogleCloudDatalabelingV1alpha1OutputConfig),
    labelStats: Schema.optional(GoogleCloudDatalabelingV1alpha1LabelStats),
    exportCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1ImportDataRequest {
  /** Email of the user who started the import task and should be notified by email. If empty no notification will be sent. */
  userEmailAddress?: string;
  /** Required. Specify the input source of the data. */
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;
}

export const GoogleCloudDatalabelingV1beta1ImportDataRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1ImportDataRequest> =
  /*@__PURE__*/ Schema.Struct({
    userEmailAddress: Schema.optional(Schema.String),
    inputConfig: Schema.optional(GoogleCloudDatalabelingV1beta1InputConfig),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImportDataRequest",
  });

export interface GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata {
  /** When the thread is created */
  createTime?: string;
  status?:
    | "FEEDBACK_THREAD_STATUS_UNSPECIFIED"
    | "NEW"
    | "REPLIED"
    | (string & {});
  /** An image thumbnail of this thread. */
  thumbnail?: string;
  /** When the thread is last updated. */
  lastUpdateTime?: string;
}

export const GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    thumbnail: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1FeedbackThread {
  /** Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}' */
  name?: string;
  /** Metadata regarding the feedback thread. */
  feedbackThreadMetadata?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata;
}

export const GoogleCloudDatalabelingV1beta1FeedbackThread: Schema.Codec<GoogleCloudDatalabelingV1beta1FeedbackThread> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    feedbackThreadMetadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1FeedbackThread" });

export interface GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of feedback threads to return. */
  feedbackThreads?: ReadonlyArray<GoogleCloudDatalabelingV1beta1FeedbackThread>;
}

export const GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    feedbackThreads: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1FeedbackThread),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse",
  });

export interface GoogleCloudDatalabelingV1beta1VideoThumbnail {
  /** A byte string of the video frame. */
  thumbnail?: string;
  /** Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from. */
  timeOffset?: string;
}

export const GoogleCloudDatalabelingV1beta1VideoThumbnail: Schema.Codec<GoogleCloudDatalabelingV1beta1VideoThumbnail> =
  /*@__PURE__*/ Schema.Struct({
    thumbnail: Schema.optional(Schema.String),
    timeOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1VideoThumbnail" });

export interface GoogleCloudDatalabelingV1beta1VideoPayload {
  /** Video format. */
  mimeType?: string;
  /** Video uri from the user bucket. */
  videoUri?: string;
  /** Signed uri of the video file in the service bucket. */
  signedUri?: string;
  /** The list of video thumbnails. */
  videoThumbnails?: ReadonlyArray<GoogleCloudDatalabelingV1beta1VideoThumbnail>;
  /** FPS of the video. */
  frameRate?: number;
}

export const GoogleCloudDatalabelingV1beta1VideoPayload: Schema.Codec<GoogleCloudDatalabelingV1beta1VideoPayload> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    videoUri: Schema.optional(Schema.String),
    signedUri: Schema.optional(Schema.String),
    videoThumbnails: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1VideoThumbnail),
    ),
    frameRate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1VideoPayload" });

export interface GoogleCloudDatalabelingV1p1alpha1LabelStats {
  /** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
  exampleCount?: Record<string, string>;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelStats: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelStats> =
  /*@__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1p1alpha1LabelStats" });

export interface GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata {
  /** Output only. Timestamp when import dataset request was created. */
  createTime?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of imported dataset. "projects/* /datasets/*" */
  dataset?: string;
}

export const GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1AnnotationMetadata {
  /** Metadata related to human labeling. */
  operatorMetadata?: GoogleCloudDatalabelingV1beta1OperatorMetadata;
}

export const GoogleCloudDatalabelingV1beta1AnnotationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    operatorMetadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1OperatorMetadata,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1AnnotationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1Annotation {
  /** Output only. The source of the annotation. */
  annotationSource?:
    | "ANNOTATION_SOURCE_UNSPECIFIED"
    | "OPERATOR"
    | (string & {});
  /** Output only. Sentiment for this annotation. */
  annotationSentiment?:
    | "ANNOTATION_SENTIMENT_UNSPECIFIED"
    | "NEGATIVE"
    | "POSITIVE"
    | (string & {});
  /** Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id} */
  name?: string;
  /** Output only. Annotation metadata, including information like votes for labels. */
  annotationMetadata?: GoogleCloudDatalabelingV1beta1AnnotationMetadata;
  /** Output only. This is the actual annotation value, e.g classification, bounding box values are stored here. */
  annotationValue?: GoogleCloudDatalabelingV1beta1AnnotationValue;
}

export const GoogleCloudDatalabelingV1beta1Annotation: Schema.Codec<GoogleCloudDatalabelingV1beta1Annotation> =
  /*@__PURE__*/ Schema.Struct({
    annotationSource: Schema.optional(Schema.String),
    annotationSentiment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    annotationMetadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationMetadata,
    ),
    annotationValue: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationValue,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Annotation" });

export interface GoogleCloudDatalabelingV1beta1TextPayload {
  /** Text content. */
  textContent?: string;
}

export const GoogleCloudDatalabelingV1beta1TextPayload: Schema.Codec<GoogleCloudDatalabelingV1beta1TextPayload> =
  /*@__PURE__*/ Schema.Struct({
    textContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1TextPayload" });

export interface GoogleCloudDatalabelingV1beta1ImagePayload {
  /** Image uri from the user bucket. */
  imageUri?: string;
  /** Image format. */
  mimeType?: string;
  /** A byte string of a thumbnail image. */
  imageThumbnail?: string;
  /** Signed uri of the image file in the service bucket. */
  signedUri?: string;
}

export const GoogleCloudDatalabelingV1beta1ImagePayload: Schema.Codec<GoogleCloudDatalabelingV1beta1ImagePayload> =
  /*@__PURE__*/ Schema.Struct({
    imageUri: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    imageThumbnail: Schema.optional(Schema.String),
    signedUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1ImagePayload" });

export interface GoogleCloudDatalabelingV1beta1Example {
  /** The video payload, a container of the video uri. */
  videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
  /** Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations. */
  annotations?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Annotation>;
  /** The text payload, a container of the text content. */
  textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;
  /** Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id} */
  name?: string;
  /** The image payload, a container of the image bytes/uri. */
  imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;
}

export const GoogleCloudDatalabelingV1beta1Example: Schema.Codec<GoogleCloudDatalabelingV1beta1Example> =
  /*@__PURE__*/ Schema.Struct({
    videoPayload: Schema.optional(GoogleCloudDatalabelingV1beta1VideoPayload),
    annotations: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Annotation),
    ),
    textPayload: Schema.optional(GoogleCloudDatalabelingV1beta1TextPayload),
    name: Schema.optional(Schema.String),
    imagePayload: Schema.optional(GoogleCloudDatalabelingV1beta1ImagePayload),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Example" });

export interface GoogleCloudDatalabelingV1beta1ExampleComparison {
  /** The ground truth output for the input. */
  groundTruthExample?: GoogleCloudDatalabelingV1beta1Example;
  /** Predictions by the model for the input. */
  modelCreatedExamples?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Example>;
}

export const GoogleCloudDatalabelingV1beta1ExampleComparison: Schema.Codec<GoogleCloudDatalabelingV1beta1ExampleComparison> =
  /*@__PURE__*/ Schema.Struct({
    groundTruthExample: Schema.optional(GoogleCloudDatalabelingV1beta1Example),
    modelCreatedExamples: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Example),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ExampleComparison",
  });

export interface GoogleCloudDatalabelingV1beta1AnnotationSpecSet {
  /** Output only. The names of any related resources that are blocking changes to the annotation spec set. */
  blockingResources?: ReadonlyArray<string>;
  /** Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters. */
  displayName?: string;
  /** Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long. */
  description?: string;
  /** Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}" */
  name?: string;
  /** Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task. */
  annotationSpecs?: ReadonlyArray<GoogleCloudDatalabelingV1beta1AnnotationSpec>;
}

export const GoogleCloudDatalabelingV1beta1AnnotationSpecSet: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotationSpecSet> =
  /*@__PURE__*/ Schema.Struct({
    blockingResources: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    annotationSpecs: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1AnnotationSpec),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1AnnotationSpecSet",
  });

export interface GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest {
  /** Required. Annotation spec set to create. Annotation specs must be included. Only one annotation spec will be accepted for annotation specs with same display_name. */
  annotationSpecSet?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
}

export const GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpecSet,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest",
  });

export interface GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination {
  /** Required. Cloud Storage directory to export data to. */
  outputFolderUri?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination> =
  /*@__PURE__*/ Schema.Struct({
    outputFolderUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination",
  });

export interface GoogleCloudDatalabelingV1p1alpha1OutputConfig {
  /** Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation. */
  gcsDestination?: GoogleCloudDatalabelingV1p1alpha1GcsDestination;
  /** Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs. */
  gcsFolderDestination?: GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination;
}

export const GoogleCloudDatalabelingV1p1alpha1OutputConfig: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1OutputConfig> =
  /*@__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1GcsDestination,
    ),
    gcsFolderDestination: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1p1alpha1OutputConfig" });

export interface GoogleCloudDatalabelingV1beta1DataItem {
  /** Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} */
  name?: string;
  /** The video payload, a container of the video uri. */
  videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
  /** The text payload, a container of text content. */
  textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;
  /** The image payload, a container of the image bytes/uri. */
  imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;
}

export const GoogleCloudDatalabelingV1beta1DataItem: Schema.Codec<GoogleCloudDatalabelingV1beta1DataItem> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    videoPayload: Schema.optional(GoogleCloudDatalabelingV1beta1VideoPayload),
    textPayload: Schema.optional(GoogleCloudDatalabelingV1beta1TextPayload),
    imagePayload: Schema.optional(GoogleCloudDatalabelingV1beta1ImagePayload),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1DataItem" });

export interface GoogleCloudDatalabelingV1beta1EventConfig {
  /** Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s. */
  clipLength?: number;
  /** The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s. */
  overlapLength?: number;
  /** Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time. */
  annotationSpecSets?: ReadonlyArray<string>;
}

export const GoogleCloudDatalabelingV1beta1EventConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1EventConfig> =
  /*@__PURE__*/ Schema.Struct({
    clipLength: Schema.optional(Schema.Number),
    overlapLength: Schema.optional(Schema.Number),
    annotationSpecSets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1EventConfig" });

export interface GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig {
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
  /** Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set. */
  allowMultiLabel?: boolean;
}

export const GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
    allowMultiLabel: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig",
  });

export interface GoogleCloudDatalabelingV1beta1VideoClassificationConfig {
  /** Optional. Option to apply shot detection on the video. */
  applyShotDetection?: boolean;
  /** Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group. */
  annotationSpecSetConfigs?: ReadonlyArray<GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig>;
}

export const GoogleCloudDatalabelingV1beta1VideoClassificationConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1VideoClassificationConfig> =
  /*@__PURE__*/ Schema.Struct({
    applyShotDetection: Schema.optional(Schema.Boolean),
    annotationSpecSetConfigs: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1VideoClassificationConfig",
  });

export interface GoogleCloudDatalabelingV1beta1ObjectTrackingConfig {
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
  /** Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s. */
  clipLength?: number;
  /** The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s. */
  overlapLength?: number;
}

export const GoogleCloudDatalabelingV1beta1ObjectTrackingConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1ObjectTrackingConfig> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSet: Schema.optional(Schema.String),
    clipLength: Schema.optional(Schema.Number),
    overlapLength: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ObjectTrackingConfig",
  });

export interface GoogleCloudDatalabelingV1beta1ObjectDetectionConfig {
  /** Required. Number of frames per second to be extracted from the video. */
  extractionFrameRate?: number;
  /** Required. Annotation spec set resource name. */
  annotationSpecSet?: string;
}

export const GoogleCloudDatalabelingV1beta1ObjectDetectionConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1ObjectDetectionConfig> =
  /*@__PURE__*/ Schema.Struct({
    extractionFrameRate: Schema.optional(Schema.Number),
    annotationSpecSet: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ObjectDetectionConfig",
  });

export interface GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata {
  /** Configuration for image polyline task. */
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;
  /** Configuration for text classification task. */
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
  /** Configuration for video event labeling task. */
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;
  /** Configuration for text entity extraction task. */
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
  /** Configuration for image classification task. */
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
  /** HumanAnnotationConfig used when requesting the human labeling task for this AnnotatedDataset. */
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  /** Configuration for video classification task. */
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
  /** Configuration for video object tracking task. */
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
  /** Configuration for image bounding box and bounding poly task. */
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
  /** Configuration for image segmentation task. */
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
  /** Configuration for video object detection task. */
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
}

export const GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata> =
  /*@__PURE__*/ Schema.Struct({
    polylineConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1PolylineConfig,
    ),
    textClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextClassificationConfig,
    ),
    eventConfig: Schema.optional(GoogleCloudDatalabelingV1beta1EventConfig),
    textEntityExtractionConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig,
    ),
    imageClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ImageClassificationConfig,
    ),
    humanAnnotationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
    videoClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1VideoClassificationConfig,
    ),
    objectTrackingConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ObjectTrackingConfig,
    ),
    boundingPolyConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1BoundingPolyConfig,
    ),
    segmentationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1SegmentationConfig,
    ),
    objectDetectionConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ObjectDetectionConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1AnnotatedDataset {
  /** Output only. Number of examples in the annotated dataset. */
  exampleCount?: string;
  /** Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters. */
  displayName?: string;
  /** Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
  name?: string;
  /** Output only. Number of examples that have annotation in the annotated dataset. */
  completedExampleCount?: string;
  /** Output only. Additional information about AnnotatedDataset. */
  metadata?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata;
  /** Output only. Source of the annotation. */
  annotationSource?:
    | "ANNOTATION_SOURCE_UNSPECIFIED"
    | "OPERATOR"
    | (string & {});
  /** Output only. Per label statistics. */
  labelStats?: GoogleCloudDatalabelingV1beta1LabelStats;
  /** Output only. Type of the annotation. It is specified when starting labeling task. */
  annotationType?:
    | "ANNOTATION_TYPE_UNSPECIFIED"
    | "IMAGE_CLASSIFICATION_ANNOTATION"
    | "IMAGE_BOUNDING_BOX_ANNOTATION"
    | "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    | "IMAGE_BOUNDING_POLY_ANNOTATION"
    | "IMAGE_POLYLINE_ANNOTATION"
    | "IMAGE_SEGMENTATION_ANNOTATION"
    | "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    | "VIDEO_OBJECT_TRACKING_ANNOTATION"
    | "VIDEO_OBJECT_DETECTION_ANNOTATION"
    | "VIDEO_EVENT_ANNOTATION"
    | "TEXT_CLASSIFICATION_ANNOTATION"
    | "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    | "GENERAL_CLASSIFICATION_ANNOTATION"
    | (string & {});
  /** Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters. */
  description?: string;
  /** Output only. The names of any related resources that are blocking changes to the annotated dataset. */
  blockingResources?: ReadonlyArray<string>;
  /** Output only. Time the AnnotatedDataset was created. */
  createTime?: string;
}

export const GoogleCloudDatalabelingV1beta1AnnotatedDataset: Schema.Codec<GoogleCloudDatalabelingV1beta1AnnotatedDataset> =
  /*@__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    completedExampleCount: Schema.optional(Schema.String),
    metadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata,
    ),
    annotationSource: Schema.optional(Schema.String),
    labelStats: Schema.optional(GoogleCloudDatalabelingV1beta1LabelStats),
    annotationType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    blockingResources: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1AnnotatedDataset" });

export interface GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata {}

export const GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1FeedbackMessage {
  /** Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}' */
  name?: string;
  operatorFeedbackMetadata?: GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata;
  /** The image storing this feedback if the feedback is an image representing operator's comments. */
  image?: string;
  requesterFeedbackMetadata?: GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata;
  /** Create time. */
  createTime?: string;
  /** String content of the feedback. Maximum of 10000 characters. */
  body?: string;
}

export const GoogleCloudDatalabelingV1beta1FeedbackMessage: Schema.Codec<GoogleCloudDatalabelingV1beta1FeedbackMessage> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    operatorFeedbackMetadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata,
    ),
    image: Schema.optional(Schema.String),
    requesterFeedbackMetadata: Schema.optional(
      GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata,
    ),
    createTime: Schema.optional(Schema.String),
    body: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1FeedbackMessage" });

export interface GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelStats {
  /** Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations. */
  exampleCount?: Record<string, string>;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelStats: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelStats> =
  /*@__PURE__*/ Schema.Struct({
    exampleCount: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1p2alpha1LabelStats" });

export interface GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse {
  /** Output only. Statistic infos of labels in the exported dataset. */
  labelStats?: GoogleCloudDatalabelingV1p2alpha1LabelStats;
  /** Output only. Number of examples exported successfully. */
  exportCount?: number;
  /** Output only. Total number of examples requested to export */
  totalCount?: number;
  /** Ouptut only. The name of dataset. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Output only. output_config in the ExportData request. */
  outputConfig?: GoogleCloudDatalabelingV1p2alpha1OutputConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    labelStats: Schema.optional(GoogleCloudDatalabelingV1p2alpha1LabelStats),
    exportCount: Schema.optional(Schema.Number),
    totalCount: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
    annotatedDataset: Schema.optional(Schema.String),
    outputConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1OutputConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1LabelTextRequest {
  /** Configuration for text classification task. One of text_classification_config and text_entity_extraction_config is required. */
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
  /** Configuration for entity extraction task. One of text_classification_config and text_entity_extraction_config is required. */
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
  /** Required. Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  /** Required. The type of text labeling task. */
  feature?:
    | "FEATURE_UNSPECIFIED"
    | "TEXT_CLASSIFICATION"
    | "TEXT_ENTITY_EXTRACTION"
    | (string & {});
}

export const GoogleCloudDatalabelingV1beta1LabelTextRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelTextRequest> =
  /*@__PURE__*/ Schema.Struct({
    textClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextClassificationConfig,
    ),
    textEntityExtractionConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig,
    ),
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
    feature: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1LabelTextRequest" });

export interface GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata {
  /** Output only. The name of dataset to be exported. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Output only. Timestamp when export dataset request was created. */
  createTime?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    annotatedDataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry {
  /** Precision value for entries with label that has highest score. */
  precisionAt1?: number;
  /** Recall value for entries with label that has highest score. */
  recallAt1?: number;
  /** Precision value. */
  precision?: number;
  /** Precision value for entries with label that has highest 5 scores. */
  precisionAt5?: number;
  /** The harmonic mean of recall_at1 and precision_at1. */
  f1ScoreAt1?: number;
  /** Recall value for entries with label that has highest 5 scores. */
  recallAt5?: number;
  /** Harmonic mean of recall and precision. */
  f1Score?: number;
  /** Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve. */
  confidenceThreshold?: number;
  /** Recall value. */
  recall?: number;
  /** The harmonic mean of recall_at5 and precision_at5. */
  f1ScoreAt5?: number;
}

export const GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry: Schema.Codec<GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry> =
  /*@__PURE__*/ Schema.Struct({
    precisionAt1: Schema.optional(Schema.Number),
    recallAt1: Schema.optional(Schema.Number),
    precision: Schema.optional(Schema.Number),
    precisionAt5: Schema.optional(Schema.Number),
    f1ScoreAt1: Schema.optional(Schema.Number),
    recallAt5: Schema.optional(Schema.Number),
    f1Score: Schema.optional(Schema.Number),
    confidenceThreshold: Schema.optional(Schema.Number),
    recall: Schema.optional(Schema.Number),
    f1ScoreAt5: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry",
  });

export interface GoogleCloudDatalabelingV1beta1PrCurve {
  /** The annotation spec of the label for which the precision-recall curve calculated. If this field is empty, that means the precision-recall curve is an aggregate curve for all labels. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
  /** Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`. */
  confidenceMetricsEntries?: ReadonlyArray<GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry>;
  /** Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve. */
  areaUnderCurve?: number;
  /** Mean average prcision of this curve. */
  meanAveragePrecision?: number;
}

export const GoogleCloudDatalabelingV1beta1PrCurve: Schema.Codec<GoogleCloudDatalabelingV1beta1PrCurve> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
    confidenceMetricsEntries: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry),
    ),
    areaUnderCurve: Schema.optional(Schema.Number),
    meanAveragePrecision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1PrCurve" });

export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1Row {
  /** A list of the confusion matrix entries. One entry for each possible predicted label. */
  entries?: ReadonlyArray<GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry>;
  /** The annotation spec of the ground truth label for this row. */
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}

export const GoogleCloudDatalabelingV1beta1Row: Schema.Codec<GoogleCloudDatalabelingV1beta1Row> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry),
    ),
    annotationSpec: Schema.optional(
      GoogleCloudDatalabelingV1beta1AnnotationSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Row" });

export interface GoogleCloudDatalabelingV1beta1ConfusionMatrix {
  row?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Row>;
}

export const GoogleCloudDatalabelingV1beta1ConfusionMatrix: Schema.Codec<GoogleCloudDatalabelingV1beta1ConfusionMatrix> =
  /*@__PURE__*/ Schema.Struct({
    row: Schema.optional(Schema.Array(GoogleCloudDatalabelingV1beta1Row)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1ConfusionMatrix" });

export interface GoogleCloudDatalabelingV1beta1ClassificationMetrics {
  /** Confusion matrix of predicted labels vs. ground truth labels. */
  confusionMatrix?: GoogleCloudDatalabelingV1beta1ConfusionMatrix;
  /** Precision-recall curve based on ground truth labels, predicted labels, and scores for the predicted labels. */
  prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
}

export const GoogleCloudDatalabelingV1beta1ClassificationMetrics: Schema.Codec<GoogleCloudDatalabelingV1beta1ClassificationMetrics> =
  /*@__PURE__*/ Schema.Struct({
    confusionMatrix: Schema.optional(
      GoogleCloudDatalabelingV1beta1ConfusionMatrix,
    ),
    prCurve: Schema.optional(GoogleCloudDatalabelingV1beta1PrCurve),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ClassificationMetrics",
  });

export interface GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics {
  /** Precision-recall curve. */
  prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
}

export const GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics: Schema.Codec<GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics> =
  /*@__PURE__*/ Schema.Struct({
    prCurve: Schema.optional(GoogleCloudDatalabelingV1beta1PrCurve),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics",
  });

export interface GoogleCloudDatalabelingV1beta1EvaluationMetrics {
  classificationMetrics?: GoogleCloudDatalabelingV1beta1ClassificationMetrics;
  objectDetectionMetrics?: GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics;
}

export const GoogleCloudDatalabelingV1beta1EvaluationMetrics: Schema.Codec<GoogleCloudDatalabelingV1beta1EvaluationMetrics> =
  /*@__PURE__*/ Schema.Struct({
    classificationMetrics: Schema.optional(
      GoogleCloudDatalabelingV1beta1ClassificationMetrics,
    ),
    objectDetectionMetrics: Schema.optional(
      GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1EvaluationMetrics",
  });

export interface GoogleCloudDatalabelingV1beta1Evaluation {
  /** Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}' */
  name?: string;
  /** Output only. Timestamp for when this evaluation was created. */
  createTime?: string;
  /** Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation. */
  annotationType?:
    | "ANNOTATION_TYPE_UNSPECIFIED"
    | "IMAGE_CLASSIFICATION_ANNOTATION"
    | "IMAGE_BOUNDING_BOX_ANNOTATION"
    | "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    | "IMAGE_BOUNDING_POLY_ANNOTATION"
    | "IMAGE_POLYLINE_ANNOTATION"
    | "IMAGE_SEGMENTATION_ANNOTATION"
    | "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    | "VIDEO_OBJECT_TRACKING_ANNOTATION"
    | "VIDEO_OBJECT_DETECTION_ANNOTATION"
    | "VIDEO_EVENT_ANNOTATION"
    | "TEXT_CLASSIFICATION_ANNOTATION"
    | "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    | "GENERAL_CLASSIFICATION_ANNOTATION"
    | (string & {});
  /** Output only. Metrics comparing predictions to ground truth labels. */
  evaluationMetrics?: GoogleCloudDatalabelingV1beta1EvaluationMetrics;
  /** Output only. Timestamp for when the evaluation job that created this evaluation ran. */
  evaluationJobRunTime?: string;
  /** Output only. Options used in the evaluation job that created this evaluation. */
  config?: GoogleCloudDatalabelingV1beta1EvaluationConfig;
  /** Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes. */
  evaluatedItemCount?: string;
}

export const GoogleCloudDatalabelingV1beta1Evaluation: Schema.Codec<GoogleCloudDatalabelingV1beta1Evaluation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    annotationType: Schema.optional(Schema.String),
    evaluationMetrics: Schema.optional(
      GoogleCloudDatalabelingV1beta1EvaluationMetrics,
    ),
    evaluationJobRunTime: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudDatalabelingV1beta1EvaluationConfig),
    evaluatedItemCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Evaluation" });

export interface GoogleCloudDatalabelingV1beta1GcsFolderDestination {
  /** Required. Cloud Storage directory to export data to. */
  outputFolderUri?: string;
}

export const GoogleCloudDatalabelingV1beta1GcsFolderDestination: Schema.Codec<GoogleCloudDatalabelingV1beta1GcsFolderDestination> =
  /*@__PURE__*/ Schema.Struct({
    outputFolderUri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1GcsFolderDestination",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1LabelOperationMetadata {
  /** Details of label image bounding poly operation. */
  imageBoundingPolyDetails?: GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata;
  /** Details of label image polyline operation. */
  imagePolylineDetails?: GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata;
  /** Output only. Timestamp when labeling request was created. */
  createTime?: string;
  /** Details of label image bounding box operation. */
  imageBoundingBoxDetails?: GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata;
  /** Details of label video object detection operation. */
  videoObjectDetectionDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata;
  /** Details of label image segmentation operation. */
  imageSegmentationDetails?: GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata;
  /** Details of label text entity extraction operation. */
  textEntityExtractionDetails?: GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Details of label image oriented bounding box operation. */
  imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata;
  /** Details of label video object tracking operation. */
  videoObjectTrackingDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata;
  /** Details of label text classification operation. */
  textClassificationDetails?: GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata;
  /** Details of label image classification operation. */
  imageClassificationDetails?: GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata;
  /** Details of label video event operation. */
  videoEventDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata;
  /** Output only. Progress of label operation. Range: [0, 100]. */
  progressPercent?: number;
  /** Output only. The name of dataset to be labeled. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Details of label video classification operation. */
  videoClassificationDetails?: GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata;
}

export const GoogleCloudDatalabelingV1alpha1LabelOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1LabelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    imageBoundingPolyDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata,
    ),
    imagePolylineDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata,
    ),
    createTime: Schema.optional(Schema.String),
    imageBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata,
    ),
    videoObjectDetectionDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata,
    ),
    imageSegmentationDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata,
    ),
    textEntityExtractionDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata,
    ),
    annotatedDataset: Schema.optional(Schema.String),
    imageOrientedBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata,
    ),
    videoObjectTrackingDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata,
    ),
    textClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata,
    ),
    imageClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata,
    ),
    videoEventDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata,
    ),
    progressPercent: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    videoClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1LabelOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1CsvInstruction {
  /** CSV file for the instruction. Only gcs path is allowed. */
  gcsFileUri?: string;
}

export const GoogleCloudDatalabelingV1beta1CsvInstruction: Schema.Codec<GoogleCloudDatalabelingV1beta1CsvInstruction> =
  /*@__PURE__*/ Schema.Struct({
    gcsFileUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1CsvInstruction" });

export interface GoogleCloudDatalabelingV1beta1Instruction {
  /** Deprecated: this instruction format is not supported any more. Instruction from a CSV file, such as for classification task. The CSV file should have exact two columns, in the following format: * The first column is labeled data, such as an image reference, text. * The second column is comma separated labels associated with data. */
  csvInstruction?: GoogleCloudDatalabelingV1beta1CsvInstruction;
  /** Required. The display name of the instruction. Maximum of 64 characters. */
  displayName?: string;
  /** Output only. Creation time of instruction. */
  createTime?: string;
  /** Output only. The names of any related resources that are blocking changes to the instruction. */
  blockingResources?: ReadonlyArray<string>;
  /** Required. The data type of this instruction. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "IMAGE"
    | "VIDEO"
    | "TEXT"
    | "GENERAL_DATA"
    | (string & {});
  /** Optional. User-provided description of the instruction. The description can be up to 10000 characters long. */
  description?: string;
  /** Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} */
  name?: string;
  /** Instruction from a PDF document. The PDF should be in a Cloud Storage bucket. */
  pdfInstruction?: GoogleCloudDatalabelingV1beta1PdfInstruction;
  /** Output only. Last update time of instruction. */
  updateTime?: string;
}

export const GoogleCloudDatalabelingV1beta1Instruction: Schema.Codec<GoogleCloudDatalabelingV1beta1Instruction> =
  /*@__PURE__*/ Schema.Struct({
    csvInstruction: Schema.optional(
      GoogleCloudDatalabelingV1beta1CsvInstruction,
    ),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    blockingResources: Schema.optional(Schema.Array(Schema.String)),
    dataType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pdfInstruction: Schema.optional(
      GoogleCloudDatalabelingV1beta1PdfInstruction,
    ),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Instruction" });

export interface GoogleCloudDatalabelingV1beta1ListInstructionsResponse {
  /** The list of Instructions to return. */
  instructions?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Instruction>;
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
}

export const GoogleCloudDatalabelingV1beta1ListInstructionsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListInstructionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    instructions: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Instruction),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListInstructionsResponse",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ImportDataOperationResponse {
  /** Ouptut only. The name of imported dataset. */
  dataset?: string;
  /** Output only. Total number of examples requested to import */
  totalCount?: number;
  /** Output only. Number of examples imported successfully. */
  importCount?: number;
}

export const GoogleCloudDatalabelingV1beta1ImportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ImportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    importCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of feedback messages to return. */
  feedbackMessages?: ReadonlyArray<GoogleCloudDatalabelingV1beta1FeedbackMessage>;
}

export const GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    feedbackMessages: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1FeedbackMessage),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse {
  /** The list of annotation spec sets. */
  annotationSpecSets?: ReadonlyArray<GoogleCloudDatalabelingV1beta1AnnotationSpecSet>;
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
}

export const GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    annotationSpecSets: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1AnnotationSpecSet),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse",
  });

export interface GoogleCloudDatalabelingV1beta1CreateInstructionMetadata {
  /** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Timestamp when create instruction request was created. */
  createTime?: string;
  /** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
  instruction?: string;
}

export const GoogleCloudDatalabelingV1beta1CreateInstructionMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1CreateInstructionMetadata> =
  /*@__PURE__*/ Schema.Struct({
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    createTime: Schema.optional(Schema.String),
    instruction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1CreateInstructionMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest {
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search. */
  pageToken?: string;
}

export const GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest> =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest",
  });

export interface GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse {
  /** Output only. Number of examples imported successfully. */
  importCount?: number;
  /** Ouptut only. The name of imported dataset. */
  dataset?: string;
  /** Output only. Total number of examples requested to import */
  totalCount?: number;
}

export const GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    importCount: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of annotated datasets to return. */
  annotatedDatasets?: ReadonlyArray<GoogleCloudDatalabelingV1beta1AnnotatedDataset>;
}

export const GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    annotatedDatasets: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1AnnotatedDataset),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of evaluations matching the search. */
  evaluations?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Evaluation>;
}

export const GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    evaluations: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Evaluation),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse",
  });

export interface GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse {
  /** Output only. Number of examples imported successfully. */
  importCount?: number;
  /** Output only. Total number of examples requested to import */
  totalCount?: number;
  /** Ouptut only. The name of imported dataset. */
  dataset?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    importCount: Schema.optional(Schema.Number),
    totalCount: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1GcsDestination {
  /** Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported. */
  mimeType?: string;
  /** Required. The output uri of destination file. */
  outputUri?: string;
}

export const GoogleCloudDatalabelingV1beta1GcsDestination: Schema.Codec<GoogleCloudDatalabelingV1beta1GcsDestination> =
  /*@__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    outputUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1GcsDestination" });

export interface GoogleCloudDatalabelingV1beta1OutputConfig {
  /** Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation. */
  gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination;
  /** Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs. */
  gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination;
}

export const GoogleCloudDatalabelingV1beta1OutputConfig: Schema.Codec<GoogleCloudDatalabelingV1beta1OutputConfig> =
  /*@__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(
      GoogleCloudDatalabelingV1beta1GcsDestination,
    ),
    gcsFolderDestination: Schema.optional(
      GoogleCloudDatalabelingV1beta1GcsFolderDestination,
    ),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1OutputConfig" });

export interface GoogleCloudDatalabelingV1beta1ExportDataOperationResponse {
  /** Output only. output_config in the ExportData request. */
  outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Ouptut only. The name of dataset. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Statistic infos of labels in the exported dataset. */
  labelStats?: GoogleCloudDatalabelingV1beta1LabelStats;
  /** Output only. Total number of examples requested to export */
  totalCount?: number;
  /** Output only. Number of examples exported successfully. */
  exportCount?: number;
}

export const GoogleCloudDatalabelingV1beta1ExportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ExportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GoogleCloudDatalabelingV1beta1OutputConfig),
    annotatedDataset: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    labelStats: Schema.optional(GoogleCloudDatalabelingV1beta1LabelStats),
    totalCount: Schema.optional(Schema.Number),
    exportCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ExportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse {
  /** A list of example comparisons matching the search criteria. */
  exampleComparisons?: ReadonlyArray<GoogleCloudDatalabelingV1beta1ExampleComparison>;
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
}

export const GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse> =
  /*@__PURE__*/ Schema.Struct({
    exampleComparisons: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1ExampleComparison),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse",
  });

export interface GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata {
  /** Timestamp when create instruction request was created. */
  createTime?: string;
  /** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
  instruction?: string;
}

export const GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    instruction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata",
  });

export interface GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata {
  /** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
  instruction?: string;
  /** Timestamp when create instruction request was created. */
  createTime?: string;
  /** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata: Schema.Codec<GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata> =
  /*@__PURE__*/ Schema.Struct({
    instruction: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ListExamplesResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of examples to return. */
  examples?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Example>;
}

export const GoogleCloudDatalabelingV1beta1ListExamplesResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListExamplesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    examples: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Example),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListExamplesResponse",
  });

export interface GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata {
  /** Output only. Timestamp when export dataset request was created. */
  createTime?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of dataset to be exported. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
}

export const GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    dataset: Schema.optional(Schema.String),
    annotatedDataset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata {
  /** Output only. The name of imported dataset. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Timestamp when import dataset request was created. */
  createTime?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata {
  /** Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata {
  /** Details of label image bounding poly operation. */
  imageBoundingPolyDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata;
  /** Details of label image segmentation operation. */
  imageSegmentationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata;
  /** Output only. The name of dataset to be labeled. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Progress of label operation. Range: [0, 100]. */
  progressPercent?: number;
  /** Output only. Timestamp when labeling request was created. */
  createTime?: string;
  /** Details of label video classification operation. */
  videoClassificationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata;
  /** Details of label image oriented bounding box operation. */
  imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata;
  /** Details of label text entity extraction operation. */
  textEntityExtractionDetails?: GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata;
  /** Details of label image polyline operation. */
  imagePolylineDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata;
  /** Details of label video event operation. */
  videoEventDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Details of label video object detection operation. */
  videoObjectDetectionDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata;
  /** Details of label video object tracking operation. */
  videoObjectTrackingDetails?: GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata;
  /** Details of label text classification operation. */
  textClassificationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata;
  /** Details of label image classification operation. */
  imageClassificationDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata;
  /** Details of label image bounding box operation. */
  imageBoundingBoxDetails?: GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata;
}

export const GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    imageBoundingPolyDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata,
    ),
    imageSegmentationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata,
    ),
    dataset: Schema.optional(Schema.String),
    progressPercent: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    videoClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata,
    ),
    imageOrientedBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata,
    ),
    textEntityExtractionDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata,
    ),
    imagePolylineDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata,
    ),
    videoEventDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata,
    ),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    annotatedDataset: Schema.optional(Schema.String),
    videoObjectDetectionDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata,
    ),
    videoObjectTrackingDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata,
    ),
    textClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata,
    ),
    imageClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata,
    ),
    imageBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata {
  /** Basic human annotation config used in labeling request. */
  basicConfig?: GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata {
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Details of label image classification operation. */
  imageClassificationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata;
  /** Output only. The name of dataset to be labeled. "projects/* /datasets/*" */
  dataset?: string;
  /** Details of label image polyline operation. */
  imagePolylineDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata;
  /** Details of label video event operation. */
  videoEventDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata;
  /** Output only. Progress of label operation. Range: [0, 100]. */
  progressPercent?: number;
  /** Details of label image bounding box operation. */
  imageBoundingBoxDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata;
  /** Output only. Timestamp when labeling request was created. */
  createTime?: string;
  /** Details of label video object tracking operation. */
  videoObjectTrackingDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata;
  /** Details of label video object detection operation. */
  videoObjectDetectionDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata;
  /** Details of label video classification operation. */
  videoClassificationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata;
  /** Details of label image oriented bounding box operation. */
  imageOrientedBoundingBoxDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata;
  /** Details of label image segmentation operation. */
  imageSegmentationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata;
  /** Details of label image bounding poly operation. */
  imageBoundingPolyDetails?: GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata;
  /** Details of label text classification operation. */
  textClassificationDetails?: GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata;
  /** Details of label text entity extraction operation. */
  textEntityExtractionDetails?: GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    annotatedDataset: Schema.optional(Schema.String),
    imageClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata,
    ),
    dataset: Schema.optional(Schema.String),
    imagePolylineDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata,
    ),
    videoEventDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata,
    ),
    progressPercent: Schema.optional(Schema.Number),
    imageBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata,
    ),
    createTime: Schema.optional(Schema.String),
    videoObjectTrackingDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata,
    ),
    videoObjectDetectionDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata,
    ),
    videoClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata,
    ),
    imageOrientedBoundingBoxDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata,
    ),
    imageSegmentationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata,
    ),
    imageBoundingPolyDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata,
    ),
    textClassificationDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata,
    ),
    textEntityExtractionDetails: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata,
    ),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ExportDataRequest {
  /** Email of the user who started the export task and should be notified by email. If empty no notification will be sent. */
  userEmailAddress?: string;
  /** Optional. Filter is not supported at this moment. */
  filter?: string;
  /** Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
  annotatedDataset?: string;
  /** Required. Specify the output destination. */
  outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;
}

export const GoogleCloudDatalabelingV1beta1ExportDataRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1ExportDataRequest> =
  /*@__PURE__*/ Schema.Struct({
    userEmailAddress: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    annotatedDataset: Schema.optional(Schema.String),
    outputConfig: Schema.optional(GoogleCloudDatalabelingV1beta1OutputConfig),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ExportDataRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Codec<GoogleProtobufEmpty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDatalabelingV1beta1ListDataItemsResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of data items to return. */
  dataItems?: ReadonlyArray<GoogleCloudDatalabelingV1beta1DataItem>;
}

export const GoogleCloudDatalabelingV1beta1ListDataItemsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListDataItemsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dataItems: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1DataItem),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListDataItemsResponse",
  });

export interface GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse {
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
  /** The list of evaluation jobs to return. */
  evaluationJobs?: ReadonlyArray<GoogleCloudDatalabelingV1beta1EvaluationJob>;
}

export const GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    evaluationJobs: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1EvaluationJob),
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse",
  });

export interface GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata {
  /** Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Timestamp when create instruction request was created. */
  createTime?: string;
  /** The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} */
  instruction?: string;
}

export const GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata> =
  /*@__PURE__*/ Schema.Struct({
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    createTime: Schema.optional(Schema.String),
    instruction: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1Dataset {
  /** Required. The display name of the dataset. Maximum of 64 characters. */
  displayName?: string;
  /** Output only. The number of data items in the dataset. */
  dataItemCount?: string;
  /** Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset. */
  inputConfigs?: ReadonlyArray<GoogleCloudDatalabelingV1beta1InputConfig>;
  /** Output only. Time the dataset is created. */
  createTime?: string;
  /** Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long. */
  description?: string;
  /** Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated. */
  lastMigrateTime?: string;
  /** Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id} */
  name?: string;
  /** Output only. The names of any related resources that are blocking changes to the dataset. */
  blockingResources?: ReadonlyArray<string>;
}

export const GoogleCloudDatalabelingV1beta1Dataset: Schema.Codec<GoogleCloudDatalabelingV1beta1Dataset> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    dataItemCount: Schema.optional(Schema.String),
    inputConfigs: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1InputConfig),
    ),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    lastMigrateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    blockingResources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatalabelingV1beta1Dataset" });

export interface GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse {
  /** Output only. Number of examples exported successfully. */
  exportCount?: number;
  /** Output only. Statistic infos of labels in the exported dataset. */
  labelStats?: GoogleCloudDatalabelingV1p1alpha1LabelStats;
  /** Ouptut only. The name of dataset. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. output_config in the ExportData request. */
  outputConfig?: GoogleCloudDatalabelingV1p1alpha1OutputConfig;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Output only. Total number of examples requested to export */
  totalCount?: number;
}

export const GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    exportCount: Schema.optional(Schema.Number),
    labelStats: Schema.optional(GoogleCloudDatalabelingV1p1alpha1LabelStats),
    dataset: Schema.optional(Schema.String),
    outputConfig: Schema.optional(
      GoogleCloudDatalabelingV1p1alpha1OutputConfig,
    ),
    annotatedDataset: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1ListDatasetsResponse {
  /** The list of datasets to return. */
  datasets?: ReadonlyArray<GoogleCloudDatalabelingV1beta1Dataset>;
  /** A token to retrieve next page of results. */
  nextPageToken?: string;
}

export const GoogleCloudDatalabelingV1beta1ListDatasetsResponse: Schema.Codec<GoogleCloudDatalabelingV1beta1ListDatasetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    datasets: Schema.optional(
      Schema.Array(GoogleCloudDatalabelingV1beta1Dataset),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ListDatasetsResponse",
  });

export interface GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata {
  /** Output only. The name of dataset to be exported. "projects/* /datasets/*" */
  dataset?: string;
  /** Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details. */
  partialFailures?: ReadonlyArray<GoogleRpcStatus>;
  /** Output only. The name of annotated dataset in format "projects/* /datasets/* /annotatedDatasets/*". */
  annotatedDataset?: string;
  /** Output only. Timestamp when export dataset request was created. */
  createTime?: string;
}

export const GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    partialFailures: Schema.optional(Schema.Array(GoogleRpcStatus)),
    annotatedDataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata",
  });

export interface GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest {}

export const GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest",
  });

export interface GoogleCloudDatalabelingV1beta1LabelVideoRequest {
  /** Configuration for video object tracking task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required. */
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
  /** Configuration for video event task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required. */
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;
  /** Required. Basic human annotation config. */
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  /** Required. The type of video labeling task. */
  feature?:
    | "FEATURE_UNSPECIFIED"
    | "CLASSIFICATION"
    | "OBJECT_DETECTION"
    | "OBJECT_TRACKING"
    | "EVENT"
    | (string & {});
  /** Configuration for video object detection task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required. */
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
  /** Configuration for video classification task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required. */
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}

export const GoogleCloudDatalabelingV1beta1LabelVideoRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1LabelVideoRequest> =
  /*@__PURE__*/ Schema.Struct({
    objectTrackingConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ObjectTrackingConfig,
    ),
    eventConfig: Schema.optional(GoogleCloudDatalabelingV1beta1EventConfig),
    basicConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1HumanAnnotationConfig,
    ),
    feature: Schema.optional(Schema.String),
    objectDetectionConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1ObjectDetectionConfig,
    ),
    videoClassificationConfig: Schema.optional(
      GoogleCloudDatalabelingV1beta1VideoClassificationConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1LabelVideoRequest",
  });

export interface GoogleCloudDatalabelingV1beta1CreateInstructionRequest {
  /** Required. Instruction of how to perform the labeling task. */
  instruction?: GoogleCloudDatalabelingV1beta1Instruction;
}

export const GoogleCloudDatalabelingV1beta1CreateInstructionRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1CreateInstructionRequest> =
  /*@__PURE__*/ Schema.Struct({
    instruction: Schema.optional(GoogleCloudDatalabelingV1beta1Instruction),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1CreateInstructionRequest",
  });

export interface GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse {
  /** Output only. Total number of examples requested to import */
  totalCount?: number;
  /** Output only. Number of examples imported successfully. */
  importCount?: number;
  /** Ouptut only. The name of imported dataset. */
  dataset?: string;
}

export const GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse: Schema.Codec<GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse> =
  /*@__PURE__*/ Schema.Struct({
    totalCount: Schema.optional(Schema.Number),
    importCount: Schema.optional(Schema.Number),
    dataset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse",
  });

export interface GoogleCloudDatalabelingV1beta1CreateDatasetRequest {
  /** Required. The dataset to be created. */
  dataset?: GoogleCloudDatalabelingV1beta1Dataset;
}

export const GoogleCloudDatalabelingV1beta1CreateDatasetRequest: Schema.Codec<GoogleCloudDatalabelingV1beta1CreateDatasetRequest> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(GoogleCloudDatalabelingV1beta1Dataset),
  }).annotate({
    identifier: "GoogleCloudDatalabelingV1beta1CreateDatasetRequest",
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

export interface SearchProjectsEvaluationsRequest {
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}" */
  filter?: string;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search. */
  pageToken?: string;
  /** Required. Evaluation search parent (project ID). Format: "projects/ {project_id}" */
  parent: string;
}

export const SearchProjectsEvaluationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/evaluations:search" }),
    svc,
  ) as unknown as Schema.Codec<SearchProjectsEvaluationsRequest>;

export type SearchProjectsEvaluationsResponse =
  GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse;
export const SearchProjectsEvaluationsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse;

export type SearchProjectsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches evaluations within a project. */
export const searchProjectsEvaluations: API.PaginatedOperationMethod<
  SearchProjectsEvaluationsRequest,
  SearchProjectsEvaluationsResponse,
  SearchProjectsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsEvaluationsRequest,
  output: SearchProjectsEvaluationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsAnnotationSpecSetsRequest {
  /** Required. AnnotationSpecSet resource parent, format: projects/{project_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
}

export const CreateProjectsAnnotationSpecSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/annotationSpecSets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsAnnotationSpecSetsRequest>;

export type CreateProjectsAnnotationSpecSetsResponse =
  GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
export const CreateProjectsAnnotationSpecSetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1AnnotationSpecSet;

export type CreateProjectsAnnotationSpecSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an annotation spec set by providing a set of labels. */
export const createProjectsAnnotationSpecSets: API.OperationMethod<
  CreateProjectsAnnotationSpecSetsRequest,
  CreateProjectsAnnotationSpecSetsResponse,
  CreateProjectsAnnotationSpecSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsAnnotationSpecSetsRequest,
  output: CreateProjectsAnnotationSpecSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAnnotationSpecSetsRequest {
  /** Required. AnnotationSpecSet resource name, format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id} */
  name: string;
}

export const GetProjectsAnnotationSpecSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsAnnotationSpecSetsRequest>;

export type GetProjectsAnnotationSpecSetsResponse =
  GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
export const GetProjectsAnnotationSpecSetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1AnnotationSpecSet;

export type GetProjectsAnnotationSpecSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an annotation spec set by resource name. */
export const getProjectsAnnotationSpecSets: API.OperationMethod<
  GetProjectsAnnotationSpecSetsRequest,
  GetProjectsAnnotationSpecSetsResponse,
  GetProjectsAnnotationSpecSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsAnnotationSpecSetsRequest,
  output: GetProjectsAnnotationSpecSetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsAnnotationSpecSetsRequest {
  /** Required. AnnotationSpec resource name, format: `projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}`. */
  name: string;
}

export const DeleteProjectsAnnotationSpecSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsAnnotationSpecSetsRequest>;

export type DeleteProjectsAnnotationSpecSetsResponse = GoogleProtobufEmpty;
export const DeleteProjectsAnnotationSpecSetsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAnnotationSpecSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an annotation spec set by resource name. */
export const deleteProjectsAnnotationSpecSets: API.OperationMethod<
  DeleteProjectsAnnotationSpecSetsRequest,
  DeleteProjectsAnnotationSpecSetsResponse,
  DeleteProjectsAnnotationSpecSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsAnnotationSpecSetsRequest,
  output: DeleteProjectsAnnotationSpecSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAnnotationSpecSetsRequest {
  /** Optional. Filter is not supported at this moment. */
  filter?: string;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty. */
  pageToken?: string;
  /** Required. Parent of AnnotationSpecSet resource, format: projects/{project_id} */
  parent: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
}

export const ListProjectsAnnotationSpecSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/annotationSpecSets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsAnnotationSpecSetsRequest>;

export type ListProjectsAnnotationSpecSetsResponse =
  GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse;
export const ListProjectsAnnotationSpecSetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse;

export type ListProjectsAnnotationSpecSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists annotation spec sets for a project. Pagination is supported. */
export const listProjectsAnnotationSpecSets: API.PaginatedOperationMethod<
  ListProjectsAnnotationSpecSetsRequest,
  ListProjectsAnnotationSpecSetsResponse,
  ListProjectsAnnotationSpecSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAnnotationSpecSetsRequest,
  output: ListProjectsAnnotationSpecSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsEvaluationJobsRequest {
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty. */
  pageToken?: string;
  /** Required. Evaluation job resource parent. Format: "projects/{project_id}" */
  parent: string;
  /** Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}" */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
}

export const ListProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/evaluationJobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsEvaluationJobsRequest>;

export type ListProjectsEvaluationJobsResponse =
  GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse;
export const ListProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse;

export type ListProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all evaluation jobs within a project with possible filters. Pagination is supported. */
export const listProjectsEvaluationJobs: API.PaginatedOperationMethod<
  ListProjectsEvaluationJobsRequest,
  ListProjectsEvaluationJobsResponse,
  ListProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsEvaluationJobsRequest,
  output: ListProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PauseProjectsEvaluationJobsRequest {
  /** Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}" */
  name: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest;
}

export const PauseProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:pause", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PauseProjectsEvaluationJobsRequest>;

export type PauseProjectsEvaluationJobsResponse = GoogleProtobufEmpty;
export const PauseProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type PauseProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op. */
export const pauseProjectsEvaluationJobs: API.OperationMethod<
  PauseProjectsEvaluationJobsRequest,
  PauseProjectsEvaluationJobsResponse,
  PauseProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PauseProjectsEvaluationJobsRequest,
  output: PauseProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsEvaluationJobsRequest {
  /** Required. Name of the evaluation job. Format: "projects/{project_id} /evaluationJobs/{evaluation_job_id}" */
  name: string;
}

export const GetProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsEvaluationJobsRequest>;

export type GetProjectsEvaluationJobsResponse =
  GoogleCloudDatalabelingV1beta1EvaluationJob;
export const GetProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1EvaluationJob;

export type GetProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an evaluation job by resource name. */
export const getProjectsEvaluationJobs: API.OperationMethod<
  GetProjectsEvaluationJobsRequest,
  GetProjectsEvaluationJobsResponse,
  GetProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsEvaluationJobsRequest,
  output: GetProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResumeProjectsEvaluationJobsRequest {
  /** Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}" */
  name: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest;
}

export const ResumeProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ResumeProjectsEvaluationJobsRequest>;

export type ResumeProjectsEvaluationJobsResponse = GoogleProtobufEmpty;
export const ResumeProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type ResumeProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op. */
export const resumeProjectsEvaluationJobs: API.OperationMethod<
  ResumeProjectsEvaluationJobsRequest,
  ResumeProjectsEvaluationJobsResponse,
  ResumeProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResumeProjectsEvaluationJobsRequest,
  output: ResumeProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsEvaluationJobsRequest {
  /** Required. Name of the evaluation job that is going to be deleted. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}" */
  name: string;
}

export const DeleteProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsEvaluationJobsRequest>;

export type DeleteProjectsEvaluationJobsResponse = GoogleProtobufEmpty;
export const DeleteProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops and deletes an evaluation job. */
export const deleteProjectsEvaluationJobs: API.OperationMethod<
  DeleteProjectsEvaluationJobsRequest,
  DeleteProjectsEvaluationJobsResponse,
  DeleteProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsEvaluationJobsRequest,
  output: DeleteProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsEvaluationJobsRequest {
  /** Required. Evaluation job resource parent. Format: "projects/{project_id}" */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest;
}

export const CreateProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/evaluationJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsEvaluationJobsRequest>;

export type CreateProjectsEvaluationJobsResponse =
  GoogleCloudDatalabelingV1beta1EvaluationJob;
export const CreateProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1EvaluationJob;

export type CreateProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an evaluation job. */
export const createProjectsEvaluationJobs: API.OperationMethod<
  CreateProjectsEvaluationJobsRequest,
  CreateProjectsEvaluationJobsResponse,
  CreateProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsEvaluationJobsRequest,
  output: CreateProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsEvaluationJobsRequest {
  /** Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}" */
  name: string;
  /** Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1EvaluationJob;
}

export const PatchProjectsEvaluationJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1EvaluationJob).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsEvaluationJobsRequest>;

export type PatchProjectsEvaluationJobsResponse =
  GoogleCloudDatalabelingV1beta1EvaluationJob;
export const PatchProjectsEvaluationJobsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1EvaluationJob;

export type PatchProjectsEvaluationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one. */
export const patchProjectsEvaluationJobs: API.OperationMethod<
  PatchProjectsEvaluationJobsRequest,
  PatchProjectsEvaluationJobsResponse,
  PatchProjectsEvaluationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsEvaluationJobsRequest,
  output: PatchProjectsEvaluationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsInstructionsRequest {
  /** Required. Instruction resource parent, format: projects/{project_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1CreateInstructionRequest;
}

export const CreateProjectsInstructionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1CreateInstructionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/instructions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsInstructionsRequest>;

export type CreateProjectsInstructionsResponse = GoogleLongrunningOperation;
export const CreateProjectsInstructionsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsInstructionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an instruction for how data should be labeled. */
export const createProjectsInstructions: API.OperationMethod<
  CreateProjectsInstructionsRequest,
  CreateProjectsInstructionsResponse,
  CreateProjectsInstructionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsInstructionsRequest,
  output: CreateProjectsInstructionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsInstructionsRequest {
  /** Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} */
  name: string;
}

export const DeleteProjectsInstructionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsInstructionsRequest>;

export type DeleteProjectsInstructionsResponse = GoogleProtobufEmpty;
export const DeleteProjectsInstructionsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsInstructionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an instruction object by resource name. */
export const deleteProjectsInstructions: API.OperationMethod<
  DeleteProjectsInstructionsRequest,
  DeleteProjectsInstructionsResponse,
  DeleteProjectsInstructionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsInstructionsRequest,
  output: DeleteProjectsInstructionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsInstructionsRequest {
  /** Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} */
  name: string;
}

export const GetProjectsInstructionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsInstructionsRequest>;

export type GetProjectsInstructionsResponse =
  GoogleCloudDatalabelingV1beta1Instruction;
export const GetProjectsInstructionsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1Instruction;

export type GetProjectsInstructionsError = DefaultErrors | NotFound | Forbidden;

/** Gets an instruction by resource name. */
export const getProjectsInstructions: API.OperationMethod<
  GetProjectsInstructionsRequest,
  GetProjectsInstructionsResponse,
  GetProjectsInstructionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsInstructionsRequest,
  output: GetProjectsInstructionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsInstructionsRequest {
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty. */
  pageToken?: string;
  /** Required. Instruction resource parent, format: projects/{project_id} */
  parent: string;
  /** Optional. Filter is not supported at this moment. */
  filter?: string;
}

export const ListProjectsInstructionsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/instructions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsInstructionsRequest>;

export type ListProjectsInstructionsResponse =
  GoogleCloudDatalabelingV1beta1ListInstructionsResponse;
export const ListProjectsInstructionsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListInstructionsResponse;

export type ListProjectsInstructionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists instructions for a project. Pagination is supported. */
export const listProjectsInstructions: API.PaginatedOperationMethod<
  ListProjectsInstructionsRequest,
  ListProjectsInstructionsResponse,
  ListProjectsInstructionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsInstructionsRequest,
  output: ListProjectsInstructionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsOperationsRequest>;

export type DeleteProjectsOperationsResponse = GoogleProtobufEmpty;
export const DeleteProjectsOperationsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsOperations: API.OperationMethod<
  DeleteProjectsOperationsRequest,
  DeleteProjectsOperationsResponse,
  DeleteProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsOperationsRequest,
  output: DeleteProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:cancel" }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsOperationsRequest>;

export type CancelProjectsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsOperationsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsOperations: API.OperationMethod<
  CancelProjectsOperationsRequest,
  CancelProjectsOperationsResponse,
  CancelProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsOperationsRequest,
  output: CancelProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsOperationsRequest>;

export type ListProjectsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsOperations: API.PaginatedOperationMethod<
  ListProjectsOperationsRequest,
  ListProjectsOperationsResponse,
  ListProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOperationsRequest,
  output: ListProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExportDataProjectsDatasetsRequest {
  /** Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1ExportDataRequest;
}

export const ExportDataProjectsDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1ExportDataRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:exportData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExportDataProjectsDatasetsRequest>;

export type ExportDataProjectsDatasetsResponse = GoogleLongrunningOperation;
export const ExportDataProjectsDatasetsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportDataProjectsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports data and annotations from dataset. */
export const exportDataProjectsDatasets: API.OperationMethod<
  ExportDataProjectsDatasetsRequest,
  ExportDataProjectsDatasetsResponse,
  ExportDataProjectsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportDataProjectsDatasetsRequest,
  output: ExportDataProjectsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatasetsRequest {
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Required. Dataset resource parent, format: projects/{project_id} */
  parent: string;
  /** Optional. Filter on dataset is not supported at this moment. */
  filter?: string;
}

export const ListProjectsDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/datasets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsRequest>;

export type ListProjectsDatasetsResponse =
  GoogleCloudDatalabelingV1beta1ListDatasetsResponse;
export const ListProjectsDatasetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListDatasetsResponse;

export type ListProjectsDatasetsError = DefaultErrors | NotFound | Forbidden;

/** Lists datasets under a project. Pagination is supported. */
export const listProjectsDatasets: API.PaginatedOperationMethod<
  ListProjectsDatasetsRequest,
  ListProjectsDatasetsResponse,
  ListProjectsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatasetsRequest,
  output: ListProjectsDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsDatasetsRequest {
  /** Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} */
  name: string;
}

export const DeleteProjectsDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsDatasetsRequest>;

export type DeleteProjectsDatasetsResponse = GoogleProtobufEmpty;
export const DeleteProjectsDatasetsResponse = /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a dataset by resource name. */
export const deleteProjectsDatasets: API.OperationMethod<
  DeleteProjectsDatasetsRequest,
  DeleteProjectsDatasetsResponse,
  DeleteProjectsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatasetsRequest,
  output: DeleteProjectsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDatasetsRequest {
  /** Required. Dataset resource parent, format: projects/{project_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1CreateDatasetRequest;
}

export const CreateProjectsDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1CreateDatasetRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/datasets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsDatasetsRequest>;

export type CreateProjectsDatasetsResponse =
  GoogleCloudDatalabelingV1beta1Dataset;
export const CreateProjectsDatasetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1Dataset;

export type CreateProjectsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates dataset. If success return a Dataset resource. */
export const createProjectsDatasets: API.OperationMethod<
  CreateProjectsDatasetsRequest,
  CreateProjectsDatasetsResponse,
  CreateProjectsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsDatasetsRequest,
  output: CreateProjectsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatasetsRequest {
  /** Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} */
  name: string;
}

export const GetProjectsDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsRequest>;

export type GetProjectsDatasetsResponse = GoogleCloudDatalabelingV1beta1Dataset;
export const GetProjectsDatasetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1Dataset;

export type GetProjectsDatasetsError = DefaultErrors | NotFound | Forbidden;

/** Gets dataset by resource name. */
export const getProjectsDatasets: API.OperationMethod<
  GetProjectsDatasetsRequest,
  GetProjectsDatasetsResponse,
  GetProjectsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsRequest,
  output: GetProjectsDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportDataProjectsDatasetsRequest {
  /** Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1ImportDataRequest;
}

export const ImportDataProjectsDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1ImportDataRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:importData",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ImportDataProjectsDatasetsRequest>;

export type ImportDataProjectsDatasetsResponse = GoogleLongrunningOperation;
export const ImportDataProjectsDatasetsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportDataProjectsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa. */
export const importDataProjectsDatasets: API.OperationMethod<
  ImportDataProjectsDatasetsRequest,
  ImportDataProjectsDatasetsResponse,
  ImportDataProjectsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportDataProjectsDatasetsRequest,
  output: ImportDataProjectsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LabelProjectsDatasetsVideoRequest {
  /** Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1LabelVideoRequest;
}

export const LabelProjectsDatasetsVideoRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1LabelVideoRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/video:label",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LabelProjectsDatasetsVideoRequest>;

export type LabelProjectsDatasetsVideoResponse = GoogleLongrunningOperation;
export const LabelProjectsDatasetsVideoResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type LabelProjectsDatasetsVideoError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a labeling task for video. The type of video labeling task is configured by feature in the request. */
export const labelProjectsDatasetsVideo: API.OperationMethod<
  LabelProjectsDatasetsVideoRequest,
  LabelProjectsDatasetsVideoResponse,
  LabelProjectsDatasetsVideoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LabelProjectsDatasetsVideoRequest,
  output: LabelProjectsDatasetsVideoResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatasetsEvaluationsRequest {
  /** Required. Name of the evaluation. Format: "projects/{project_id}/datasets/ {dataset_id}/evaluations/{evaluation_id}' */
  name: string;
}

export const GetProjectsDatasetsEvaluationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsEvaluationsRequest>;

export type GetProjectsDatasetsEvaluationsResponse =
  GoogleCloudDatalabelingV1beta1Evaluation;
export const GetProjectsDatasetsEvaluationsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1Evaluation;

export type GetProjectsDatasetsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an evaluation by resource name (to search, use projects.evaluations.search). */
export const getProjectsDatasetsEvaluations: API.OperationMethod<
  GetProjectsDatasetsEvaluationsRequest,
  GetProjectsDatasetsEvaluationsResponse,
  GetProjectsDatasetsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsEvaluationsRequest,
  output: GetProjectsDatasetsEvaluationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchProjectsDatasetsEvaluationsExampleComparisonsRequest {
  /** Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}" */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest;
}

export const SearchProjectsDatasetsEvaluationsExampleComparisonsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/exampleComparisons:search",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SearchProjectsDatasetsEvaluationsExampleComparisonsRequest>;

export type SearchProjectsDatasetsEvaluationsExampleComparisonsResponse =
  GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse;
export const SearchProjectsDatasetsEvaluationsExampleComparisonsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse;

export type SearchProjectsDatasetsEvaluationsExampleComparisonsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID. */
export const searchProjectsDatasetsEvaluationsExampleComparisons: API.OperationMethod<
  SearchProjectsDatasetsEvaluationsExampleComparisonsRequest,
  SearchProjectsDatasetsEvaluationsExampleComparisonsResponse,
  SearchProjectsDatasetsEvaluationsExampleComparisonsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchProjectsDatasetsEvaluationsExampleComparisonsRequest,
  output: SearchProjectsDatasetsEvaluationsExampleComparisonsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LabelProjectsDatasetsImageRequest {
  /** Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1LabelImageRequest;
}

export const LabelProjectsDatasetsImageRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1LabelImageRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/image:label",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LabelProjectsDatasetsImageRequest>;

export type LabelProjectsDatasetsImageResponse = GoogleLongrunningOperation;
export const LabelProjectsDatasetsImageResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type LabelProjectsDatasetsImageError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a labeling task for image. The type of image labeling task is configured by feature in the request. */
export const labelProjectsDatasetsImage: API.OperationMethod<
  LabelProjectsDatasetsImageRequest,
  LabelProjectsDatasetsImageResponse,
  LabelProjectsDatasetsImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LabelProjectsDatasetsImageRequest,
  output: LabelProjectsDatasetsImageResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatasetsDataItemsRequest {
  /** Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} */
  name: string;
}

export const GetProjectsDatasetsDataItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsDataItemsRequest>;

export type GetProjectsDatasetsDataItemsResponse =
  GoogleCloudDatalabelingV1beta1DataItem;
export const GetProjectsDatasetsDataItemsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1DataItem;

export type GetProjectsDatasetsDataItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset. */
export const getProjectsDatasetsDataItems: API.OperationMethod<
  GetProjectsDatasetsDataItemsRequest,
  GetProjectsDatasetsDataItemsResponse,
  GetProjectsDatasetsDataItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsDataItemsRequest,
  output: GetProjectsDatasetsDataItemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsDatasetsDataItemsRequest {
  /** Optional. Filter is not supported at this moment. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty. */
  pageToken?: string;
  /** Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id} */
  parent: string;
}

export const ListProjectsDatasetsDataItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/dataItems" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsDataItemsRequest>;

export type ListProjectsDatasetsDataItemsResponse =
  GoogleCloudDatalabelingV1beta1ListDataItemsResponse;
export const ListProjectsDatasetsDataItemsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListDataItemsResponse;

export type ListProjectsDatasetsDataItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported. */
export const listProjectsDatasetsDataItems: API.PaginatedOperationMethod<
  ListProjectsDatasetsDataItemsRequest,
  ListProjectsDatasetsDataItemsResponse,
  ListProjectsDatasetsDataItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatasetsDataItemsRequest,
  output: ListProjectsDatasetsDataItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatasetsAnnotatedDatasetsRequest {
  /** Required. Name of the annotated dataset to get, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
  name: string;
}

export const GetProjectsDatasetsAnnotatedDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsAnnotatedDatasetsRequest>;

export type GetProjectsDatasetsAnnotatedDatasetsResponse =
  GoogleCloudDatalabelingV1beta1AnnotatedDataset;
export const GetProjectsDatasetsAnnotatedDatasetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1AnnotatedDataset;

export type GetProjectsDatasetsAnnotatedDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an annotated dataset by resource name. */
export const getProjectsDatasetsAnnotatedDatasets: API.OperationMethod<
  GetProjectsDatasetsAnnotatedDatasetsRequest,
  GetProjectsDatasetsAnnotatedDatasetsResponse,
  GetProjectsDatasetsAnnotatedDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsAnnotatedDatasetsRequest,
  output: GetProjectsDatasetsAnnotatedDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsDatasetsAnnotatedDatasetsRequest {
  /** Required. Name of the annotated dataset to delete, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} */
  name: string;
}

export const DeleteProjectsDatasetsAnnotatedDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsDatasetsAnnotatedDatasetsRequest>;

export type DeleteProjectsDatasetsAnnotatedDatasetsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsDatasetsAnnotatedDatasetsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDatasetsAnnotatedDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an annotated dataset by resource name. */
export const deleteProjectsDatasetsAnnotatedDatasets: API.OperationMethod<
  DeleteProjectsDatasetsAnnotatedDatasetsRequest,
  DeleteProjectsDatasetsAnnotatedDatasetsResponse,
  DeleteProjectsDatasetsAnnotatedDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatasetsAnnotatedDatasetsRequest,
  output: DeleteProjectsDatasetsAnnotatedDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatasetsAnnotatedDatasetsRequest {
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Optional. Filter is not supported at this moment. */
  filter?: string;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty. */
  pageToken?: string;
  /** Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id} */
  parent: string;
}

export const ListProjectsDatasetsAnnotatedDatasetsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/annotatedDatasets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsAnnotatedDatasetsRequest>;

export type ListProjectsDatasetsAnnotatedDatasetsResponse =
  GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse;
export const ListProjectsDatasetsAnnotatedDatasetsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse;

export type ListProjectsDatasetsAnnotatedDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists annotated datasets for a dataset. Pagination is supported. */
export const listProjectsDatasetsAnnotatedDatasets: API.PaginatedOperationMethod<
  ListProjectsDatasetsAnnotatedDatasetsRequest,
  ListProjectsDatasetsAnnotatedDatasetsResponse,
  ListProjectsDatasetsAnnotatedDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatasetsAnnotatedDatasetsRequest,
  output: ListProjectsDatasetsAnnotatedDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsDatasetsAnnotatedDatasetsExamplesRequest {
  /** Required. Example resource parent. */
  parent: string;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty. */
  pageToken?: string;
  /** Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}" */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
}

export const ListProjectsDatasetsAnnotatedDatasetsExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/examples" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsAnnotatedDatasetsExamplesRequest>;

export type ListProjectsDatasetsAnnotatedDatasetsExamplesResponse =
  GoogleCloudDatalabelingV1beta1ListExamplesResponse;
export const ListProjectsDatasetsAnnotatedDatasetsExamplesResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListExamplesResponse;

export type ListProjectsDatasetsAnnotatedDatasetsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists examples in an annotated dataset. Pagination is supported. */
export const listProjectsDatasetsAnnotatedDatasetsExamples: API.PaginatedOperationMethod<
  ListProjectsDatasetsAnnotatedDatasetsExamplesRequest,
  ListProjectsDatasetsAnnotatedDatasetsExamplesResponse,
  ListProjectsDatasetsAnnotatedDatasetsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatasetsAnnotatedDatasetsExamplesRequest,
  output: ListProjectsDatasetsAnnotatedDatasetsExamplesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatasetsAnnotatedDatasetsExamplesRequest {
  /** Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}" */
  filter?: string;
  /** Required. Name of example, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id} */
  name: string;
}

export const GetProjectsDatasetsAnnotatedDatasetsExamplesRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsAnnotatedDatasetsExamplesRequest>;

export type GetProjectsDatasetsAnnotatedDatasetsExamplesResponse =
  GoogleCloudDatalabelingV1beta1Example;
export const GetProjectsDatasetsAnnotatedDatasetsExamplesResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1Example;

export type GetProjectsDatasetsAnnotatedDatasetsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an example by resource name, including both data and annotation. */
export const getProjectsDatasetsAnnotatedDatasetsExamples: API.OperationMethod<
  GetProjectsDatasetsAnnotatedDatasetsExamplesRequest,
  GetProjectsDatasetsAnnotatedDatasetsExamplesResponse,
  GetProjectsDatasetsAnnotatedDatasetsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsAnnotatedDatasetsExamplesRequest,
  output: GetProjectsDatasetsAnnotatedDatasetsExamplesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest {
  /** Required. Name of the FeedbackThread that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'. */
  name: string;
}

export const DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest>;

export type DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a FeedbackThread. */
export const deleteProjectsDatasetsAnnotatedDatasetsFeedbackThreads: API.OperationMethod<
  DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest,
  DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse,
  DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest,
  output: DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest {
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty. */
  pageToken?: string;
  /** Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}" */
  parent: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
}

export const ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/feedbackThreads" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest>;

export type ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse =
  GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse;
export const ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse;

export type ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List FeedbackThreads with pagination. */
export const listProjectsDatasetsAnnotatedDatasetsFeedbackThreads: API.PaginatedOperationMethod<
  ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest,
  ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse,
  ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest,
  output: ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest {
  /** Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'. */
  name: string;
}

export const GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest>;

export type GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse =
  GoogleCloudDatalabelingV1beta1FeedbackThread;
export const GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1FeedbackThread;

export type GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a FeedbackThread object. */
export const getProjectsDatasetsAnnotatedDatasetsFeedbackThreads: API.OperationMethod<
  GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest,
  GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse,
  GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsRequest,
  output: GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest {
  /** Required. Name of the FeedbackMessage that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'. */
  name: string;
}

export const DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest>;

export type DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

/** Delete a FeedbackMessage. */
export const deleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessages: API.OperationMethod<
  DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  output:
    DeleteProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest {
  /** Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1FeedbackMessage;
}

export const CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1FeedbackMessage).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/feedbackMessages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest>;

export type CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

/** Create a FeedbackMessage object. */
export const createProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessages: API.OperationMethod<
  CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  output:
    CreateProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest {
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty. */
  pageToken?: string;
  /** Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}" */
  parent: string;
}

export const ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/feedbackMessages" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest>;

export type ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse;
export const ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse;

export type ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError =
  DefaultErrors | NotFound | Forbidden;

/** List FeedbackMessages with pagination. */
export const listProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessages: API.PaginatedOperationMethod<
  ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  output:
    ListProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest {
  /** Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'. */
  name: string;
}

export const GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest>;

export type GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  GoogleCloudDatalabelingV1beta1FeedbackMessage;
export const GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1FeedbackMessage;

export type GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError =
  DefaultErrors | NotFound | Forbidden;

/** Get a FeedbackMessage object. */
export const getProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessages: API.OperationMethod<
  GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesRequest,
  output:
    GetProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsDatasetsAnnotatedDatasetsDataItemsRequest {
  /** Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty. */
  pageToken?: string;
  /** Optional. Filter is not supported at this moment. */
  filter?: string;
  /** Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id} */
  parent: string;
  /** Optional. Requested page size. Server may return fewer results than requested. Default value is 100. */
  pageSize?: number;
}

export const ListProjectsDatasetsAnnotatedDatasetsDataItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/dataItems" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsDatasetsAnnotatedDatasetsDataItemsRequest>;

export type ListProjectsDatasetsAnnotatedDatasetsDataItemsResponse =
  GoogleCloudDatalabelingV1beta1ListDataItemsResponse;
export const ListProjectsDatasetsAnnotatedDatasetsDataItemsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1ListDataItemsResponse;

export type ListProjectsDatasetsAnnotatedDatasetsDataItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported. */
export const listProjectsDatasetsAnnotatedDatasetsDataItems: API.PaginatedOperationMethod<
  ListProjectsDatasetsAnnotatedDatasetsDataItemsRequest,
  ListProjectsDatasetsAnnotatedDatasetsDataItemsResponse,
  ListProjectsDatasetsAnnotatedDatasetsDataItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatasetsAnnotatedDatasetsDataItemsRequest,
  output: ListProjectsDatasetsAnnotatedDatasetsDataItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatasetsAnnotatedDatasetsDataItemsRequest {
  /** Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} */
  name: string;
}

export const GetProjectsDatasetsAnnotatedDatasetsDataItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsDatasetsAnnotatedDatasetsDataItemsRequest>;

export type GetProjectsDatasetsAnnotatedDatasetsDataItemsResponse =
  GoogleCloudDatalabelingV1beta1DataItem;
export const GetProjectsDatasetsAnnotatedDatasetsDataItemsResponse =
  /*@__PURE__*/ GoogleCloudDatalabelingV1beta1DataItem;

export type GetProjectsDatasetsAnnotatedDatasetsDataItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset. */
export const getProjectsDatasetsAnnotatedDatasetsDataItems: API.OperationMethod<
  GetProjectsDatasetsAnnotatedDatasetsDataItemsRequest,
  GetProjectsDatasetsAnnotatedDatasetsDataItemsResponse,
  GetProjectsDatasetsAnnotatedDatasetsDataItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsDatasetsAnnotatedDatasetsDataItemsRequest,
  output: GetProjectsDatasetsAnnotatedDatasetsDataItemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LabelProjectsDatasetsTextRequest {
  /** Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatalabelingV1beta1LabelTextRequest;
}

export const LabelProjectsDatasetsTextRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatalabelingV1beta1LabelTextRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/text:label",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LabelProjectsDatasetsTextRequest>;

export type LabelProjectsDatasetsTextResponse = GoogleLongrunningOperation;
export const LabelProjectsDatasetsTextResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type LabelProjectsDatasetsTextError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a labeling task for text. The type of text labeling task is configured by feature in the request. */
export const labelProjectsDatasetsText: API.OperationMethod<
  LabelProjectsDatasetsTextRequest,
  LabelProjectsDatasetsTextResponse,
  LabelProjectsDatasetsTextError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LabelProjectsDatasetsTextRequest,
  output: LabelProjectsDatasetsTextResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
