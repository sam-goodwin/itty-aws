// ==========================================================================
// Cloud Natural Language API (language v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits";
import type { Credentials } from "../credentials";
import type { DefaultErrors } from "../errors";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "language",
  version: "v1",
  rootUrl: "https://language.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: Array<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.optional(Schema.String),
      code: Schema.optional(Schema.Number),
      details: Schema.optional(
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      ),
    }),
  ).annotate({ identifier: "Status" }) as any as Schema.Schema<Status>;

export interface XPSSpeechEvaluationMetricsSubModelEvaluationMetric {
  /** Word error rate (standard error metric used for speech recognition). */
  wer?: number;
  /** Number of words over which the word error rate was computed. */
  numWords?: number;
  /** Number of utterances used in the wer computation. */
  numUtterances?: number;
  numDeletions?: number;
  /** Type of the biasing model. */
  biasingModelType?:
    | "BIASING_MODEL_TYPE_UNSPECIFIED"
    | "COMMAND_AND_SEARCH"
    | "PHONE_CALL"
    | "VIDEO"
    | "DEFAULT"
    | (string & {});
  /** Below fields are used for debugging purposes */
  sentenceAccuracy?: number;
  numInsertions?: number;
  numSubstitutions?: number;
  /** If true then it means we have an enhanced version of the biasing models. */
  isEnhancedModel?: boolean;
}

export const XPSSpeechEvaluationMetricsSubModelEvaluationMetric: Schema.Schema<XPSSpeechEvaluationMetricsSubModelEvaluationMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      wer: Schema.optional(Schema.Number),
      numWords: Schema.optional(Schema.Number),
      numUtterances: Schema.optional(Schema.Number),
      numDeletions: Schema.optional(Schema.Number),
      biasingModelType: Schema.optional(Schema.String),
      sentenceAccuracy: Schema.optional(Schema.Number),
      numInsertions: Schema.optional(Schema.Number),
      numSubstitutions: Schema.optional(Schema.Number),
      isEnhancedModel: Schema.optional(Schema.Boolean),
    }),
  ).annotate({
    identifier: "XPSSpeechEvaluationMetricsSubModelEvaluationMetric",
  }) as any as Schema.Schema<XPSSpeechEvaluationMetricsSubModelEvaluationMetric>;

export interface XPSSpeechEvaluationMetrics {
  /** Evaluation metrics for all submodels contained in this model. */
  subModelEvaluationMetrics?: Array<XPSSpeechEvaluationMetricsSubModelEvaluationMetric>;
}

export const XPSSpeechEvaluationMetrics: Schema.Schema<XPSSpeechEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subModelEvaluationMetrics: Schema.optional(
        Schema.Array(XPSSpeechEvaluationMetricsSubModelEvaluationMetric),
      ),
    }),
  ).annotate({
    identifier: "XPSSpeechEvaluationMetrics",
  }) as any as Schema.Schema<XPSSpeechEvaluationMetrics>;

export interface Sentiment {
  /** A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative). */
  magnitude?: number;
  /** Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). */
  score?: number;
}

export const Sentiment: Schema.Schema<Sentiment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      magnitude: Schema.optional(Schema.Number),
      score: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Sentiment" }) as any as Schema.Schema<Sentiment>;

export interface TextSpan {
  /** The content of the text span, which is a substring of the document. */
  content?: string;
  /** The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request. */
  beginOffset?: number;
}

export const TextSpan: Schema.Schema<TextSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      content: Schema.optional(Schema.String),
      beginOffset: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "TextSpan" }) as any as Schema.Schema<TextSpan>;

export interface EntityMention {
  /** For calls to AnalyzeEntitySentiment or if AnnotateTextRequest.Features.extract_entity_sentiment is set to true, this field will contain the sentiment expressed for this mention of the entity in the provided document. */
  sentiment?: Sentiment;
  /** The type of the entity mention. */
  type?: "TYPE_UNKNOWN" | "PROPER" | "COMMON" | (string & {});
  /** The mention text. */
  text?: TextSpan;
}

export const EntityMention: Schema.Schema<EntityMention> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sentiment: Schema.optional(Sentiment),
      type: Schema.optional(Schema.String),
      text: Schema.optional(TextSpan),
    }),
  ).annotate({
    identifier: "EntityMention",
  }) as any as Schema.Schema<EntityMention>;

export interface Entity {
  /** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
  metadata?: Record<string, string>;
  /** The entity type. */
  type?:
    | "UNKNOWN"
    | "PERSON"
    | "LOCATION"
    | "ORGANIZATION"
    | "EVENT"
    | "WORK_OF_ART"
    | "CONSUMER_GOOD"
    | "OTHER"
    | "PHONE_NUMBER"
    | "ADDRESS"
    | "DATE"
    | "NUMBER"
    | "PRICE"
    | (string & {});
  /** The representative name for the entity. */
  name?: string;
  /** For calls to AnalyzeEntitySentiment or if AnnotateTextRequest.Features.extract_entity_sentiment is set to true, this field will contain the aggregate sentiment expressed for this entity in the provided document. */
  sentiment?: Sentiment;
  /** The mentions of this entity in the input document. The API currently supports proper noun mentions. */
  mentions?: Array<EntityMention>;
  /** The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. */
  salience?: number;
}

export const Entity: Schema.Schema<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      sentiment: Schema.optional(Sentiment),
      mentions: Schema.optional(Schema.Array(EntityMention)),
      salience: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Entity" }) as any as Schema.Schema<Entity>;

export interface AnalyzeEntitySentimentResponse {
  /** The recognized entities in the input document with associated sentiments. */
  entities?: Array<Entity>;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
  language?: string;
}

export const AnalyzeEntitySentimentResponse: Schema.Schema<AnalyzeEntitySentimentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entities: Schema.optional(Schema.Array(Entity)),
      language: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnalyzeEntitySentimentResponse",
  }) as any as Schema.Schema<AnalyzeEntitySentimentResponse>;

export interface XPSDataType {
  /** The highly compatible data types to this data type. */
  compatibleDataTypes?: Array<XPSDataType>;
  /** If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must be written in `strftime` syntax. If time_format is not set, then the default format as described on the field is used. */
  timeFormat?: string;
  /** If true, this DataType can also be `null`. */
  nullable?: boolean;
  /** Required. The TypeCode for this type. */
  typeCode?:
    | "TYPE_CODE_UNSPECIFIED"
    | "FLOAT64"
    | "TIMESTAMP"
    | "STRING"
    | "ARRAY"
    | "STRUCT"
    | "CATEGORY"
    | (string & {});
  /** If type_code == ARRAY, then `list_element_type` is the type of the elements. */
  listElementType?: XPSDataType;
  /** If type_code == STRUCT, then `struct_type` provides type information for the struct's fields. */
  structType?: XPSStructType;
}

export const XPSDataType: Schema.Schema<XPSDataType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      compatibleDataTypes: Schema.optional(Schema.Array(XPSDataType)),
      timeFormat: Schema.optional(Schema.String),
      nullable: Schema.optional(Schema.Boolean),
      typeCode: Schema.optional(Schema.String),
      listElementType: Schema.optional(XPSDataType),
      structType: Schema.optional(XPSStructType),
    }),
  ).annotate({
    identifier: "XPSDataType",
  }) as any as Schema.Schema<XPSDataType>;

export interface XPSStructType {
  /** Unordered map of struct field names to their data types. */
  fields?: Record<string, XPSDataType>;
}

export const XPSStructType: Schema.Schema<XPSStructType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fields: Schema.optional(Schema.Record(Schema.String, XPSDataType)),
    }),
  ).annotate({
    identifier: "XPSStructType",
  }) as any as Schema.Schema<XPSStructType>;

export interface XPSTablesModelColumnInfo {
  /** The ID of the column. */
  columnId?: number;
  /** When given as part of a Model: Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict or Batch Predict: Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method. */
  featureImportance?: number;
}

export const XPSTablesModelColumnInfo: Schema.Schema<XPSTablesModelColumnInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      columnId: Schema.optional(Schema.Number),
      featureImportance: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTablesModelColumnInfo",
  }) as any as Schema.Schema<XPSTablesModelColumnInfo>;

export interface XPSRow {
  /** The ids of the columns. Note: The below `values` field must match order of this field, if this field is set. */
  columnIds?: Array<number>;
  /** The values of the row cells, given in the same order as the column_ids. If column_ids is not set, then in the same order as the input_feature_column_ids in TablesModelMetadata. */
  values?: Array<unknown>;
}

export const XPSRow: Schema.Schema<XPSRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      columnIds: Schema.optional(Schema.Array(Schema.Number)),
      values: Schema.optional(Schema.Array(Schema.Unknown)),
    }),
  ).annotate({ identifier: "XPSRow" }) as any as Schema.Schema<XPSRow>;

export interface XPSTablesModelStructureModelParametersParameter {
  /** Float type parameter value. */
  floatValue?: number;
  /** String type parameter value. */
  stringValue?: string;
  /** Parameter name. */
  name?: string;
  /** Integer type parameter value. */
  intValue?: string;
}

export const XPSTablesModelStructureModelParametersParameter: Schema.Schema<XPSTablesModelStructureModelParametersParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      floatValue: Schema.optional(Schema.Number),
      stringValue: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      intValue: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSTablesModelStructureModelParametersParameter",
  }) as any as Schema.Schema<XPSTablesModelStructureModelParametersParameter>;

export interface XPSTablesModelStructureModelParameters {
  hyperparameters?: Array<XPSTablesModelStructureModelParametersParameter>;
}

export const XPSTablesModelStructureModelParameters: Schema.Schema<XPSTablesModelStructureModelParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      hyperparameters: Schema.optional(
        Schema.Array(XPSTablesModelStructureModelParametersParameter),
      ),
    }),
  ).annotate({
    identifier: "XPSTablesModelStructureModelParameters",
  }) as any as Schema.Schema<XPSTablesModelStructureModelParameters>;

export interface XPSTablesModelStructure {
  /** A list of models. */
  modelParameters?: Array<XPSTablesModelStructureModelParameters>;
}

export const XPSTablesModelStructure: Schema.Schema<XPSTablesModelStructure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modelParameters: Schema.optional(
        Schema.Array(XPSTablesModelStructureModelParameters),
      ),
    }),
  ).annotate({
    identifier: "XPSTablesModelStructure",
  }) as any as Schema.Schema<XPSTablesModelStructure>;

export interface XPSTablesTrainResponse {
  /** Output only. Auxiliary information for each of the input_feature_column_specs, with respect to this particular model. */
  tablesModelColumnInfo?: Array<XPSTablesModelColumnInfo>;
  /** Sample rows from the dataset this model was trained. */
  predictionSampleRows?: Array<XPSRow>;
  /** The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. */
  trainCostMilliNodeHours?: string;
  modelStructure?: XPSTablesModelStructure;
}

export const XPSTablesTrainResponse: Schema.Schema<XPSTablesTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tablesModelColumnInfo: Schema.optional(
        Schema.Array(XPSTablesModelColumnInfo),
      ),
      predictionSampleRows: Schema.optional(Schema.Array(XPSRow)),
      trainCostMilliNodeHours: Schema.optional(Schema.String),
      modelStructure: Schema.optional(XPSTablesModelStructure),
    }),
  ).annotate({
    identifier: "XPSTablesTrainResponse",
  }) as any as Schema.Schema<XPSTablesTrainResponse>;

export interface XPSTextToSpeechTrainResponse {}

export const XPSTextToSpeechTrainResponse: Schema.Schema<XPSTextToSpeechTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "XPSTextToSpeechTrainResponse",
  }) as any as Schema.Schema<XPSTextToSpeechTrainResponse>;

export interface XPSVisualization {
  /** Whether to only highlight pixels with positive contributions, negative or both. Defaults to POSITIVE. */
  polarity?:
    | "POLARITY_UNSPECIFIED"
    | "POSITIVE"
    | "NEGATIVE"
    | "BOTH"
    | (string & {});
  /** Excludes attributions above the specified percentile from the highlighted areas. Using the clip_percent_upperbound and clip_percent_lowerbound together can be useful for filtering out noise and making it easier to see areas of strong attribution. Defaults to 99.9. */
  clipPercentUpperbound?: number;
  /** Excludes attributions below the specified percentile, from the highlighted areas. Defaults to 62. */
  clipPercentLowerbound?: number;
  /** Type of the image visualization. Only applicable to Integrated Gradients attribution. OUTLINES shows regions of attribution, while PIXELS shows per-pixel attribution. Defaults to OUTLINES. */
  type?: "TYPE_UNSPECIFIED" | "PIXELS" | "OUTLINES" | (string & {});
  /** The color scheme used for the highlighted areas. Defaults to PINK_GREEN for Integrated Gradients attribution, which shows positive attributions in green and negative in pink. Defaults to VIRIDIS for XRAI attribution, which highlights the most influential regions in yellow and the least influential in blue. */
  colorMap?:
    | "COLOR_MAP_UNSPECIFIED"
    | "PINK_GREEN"
    | "VIRIDIS"
    | "RED"
    | "GREEN"
    | "RED_GREEN"
    | "PINK_WHITE_GREEN"
    | (string & {});
  /** How the original image is displayed in the visualization. Adjusting the overlay can help increase visual clarity if the original image makes it difficult to view the visualization. Defaults to NONE. */
  overlayType?:
    | "OVERLAY_TYPE_UNSPECIFIED"
    | "NONE"
    | "ORIGINAL"
    | "GRAYSCALE"
    | "MASK_BLACK"
    | (string & {});
}

export const XPSVisualization: Schema.Schema<XPSVisualization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      polarity: Schema.optional(Schema.String),
      clipPercentUpperbound: Schema.optional(Schema.Number),
      clipPercentLowerbound: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.String),
      colorMap: Schema.optional(Schema.String),
      overlayType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSVisualization",
  }) as any as Schema.Schema<XPSVisualization>;

export interface XPSResponseExplanationMetadataInputMetadata {
  /** Visualization configurations for image explanation. */
  visualizationConfig?: XPSVisualization;
  /** Name of the input tensor for this model. Only needed in train response. */
  inputTensorName?: string;
  /** Modality of the feature. Valid values are: numeric, image. Defaults to numeric. */
  modality?:
    | "MODALITY_UNSPECIFIED"
    | "NUMERIC"
    | "IMAGE"
    | "CATEGORICAL"
    | (string & {});
}

export const XPSResponseExplanationMetadataInputMetadata: Schema.Schema<XPSResponseExplanationMetadataInputMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      visualizationConfig: Schema.optional(XPSVisualization),
      inputTensorName: Schema.optional(Schema.String),
      modality: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSResponseExplanationMetadataInputMetadata",
  }) as any as Schema.Schema<XPSResponseExplanationMetadataInputMetadata>;

export interface XPSResponseExplanationMetadataOutputMetadata {
  /** Name of the output tensor. Only needed in train response. */
  outputTensorName?: string;
}

export const XPSResponseExplanationMetadataOutputMetadata: Schema.Schema<XPSResponseExplanationMetadataOutputMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      outputTensorName: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSResponseExplanationMetadataOutputMetadata",
  }) as any as Schema.Schema<XPSResponseExplanationMetadataOutputMetadata>;

export interface XPSResponseExplanationMetadata {
  /** Metadata of the input. */
  inputs?: Record<string, XPSResponseExplanationMetadataInputMetadata>;
  /** Metadata of the output. */
  outputs?: Record<string, XPSResponseExplanationMetadataOutputMetadata>;
}

export const XPSResponseExplanationMetadata: Schema.Schema<XPSResponseExplanationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      inputs: Schema.optional(
        Schema.Record(
          Schema.String,
          XPSResponseExplanationMetadataInputMetadata,
        ),
      ),
      outputs: Schema.optional(
        Schema.Record(
          Schema.String,
          XPSResponseExplanationMetadataOutputMetadata,
        ),
      ),
    }),
  ).annotate({
    identifier: "XPSResponseExplanationMetadata",
  }) as any as Schema.Schema<XPSResponseExplanationMetadata>;

export interface XPSIntegratedGradientsAttribution {
  /** The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is within the desired error range. Valid range of its value is [1, 100], inclusively. */
  stepCount?: number;
}

export const XPSIntegratedGradientsAttribution: Schema.Schema<XPSIntegratedGradientsAttribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      stepCount: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSIntegratedGradientsAttribution",
  }) as any as Schema.Schema<XPSIntegratedGradientsAttribution>;

export interface XPSXraiAttribution {
  /** The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. Valid range of its value is [1, 100], inclusively. */
  stepCount?: number;
}

export const XPSXraiAttribution: Schema.Schema<XPSXraiAttribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      stepCount: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSXraiAttribution",
  }) as any as Schema.Schema<XPSXraiAttribution>;

export interface XPSResponseExplanationParameters {
  /** An attribution method that computes Aumann-Shapley values taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365 */
  integratedGradientsAttribution?: XPSIntegratedGradientsAttribution;
  /** An attribution method that redistributes Integrated Gradients attribution to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 XRAI currently performs better on natural images, like a picture of a house or an animal. If the images are taken in artificial environments, like a lab or manufacturing line, or from diagnostic equipment, like x-rays or quality-control cameras, use Integrated Gradients instead. */
  xraiAttribution?: XPSXraiAttribution;
}

export const XPSResponseExplanationParameters: Schema.Schema<XPSResponseExplanationParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      integratedGradientsAttribution: Schema.optional(
        XPSIntegratedGradientsAttribution,
      ),
      xraiAttribution: Schema.optional(XPSXraiAttribution),
    }),
  ).annotate({
    identifier: "XPSResponseExplanationParameters",
  }) as any as Schema.Schema<XPSResponseExplanationParameters>;

export interface XPSResponseExplanationSpec {
  /** Explanation type. For AutoML Image Classification models, possible values are: * `image-integrated-gradients` * `image-xrai` */
  explanationType?: string;
  /** Metadata describing the Model's input and output for explanation. */
  metadata?: XPSResponseExplanationMetadata;
  /** Parameters that configure explaining of the Model's predictions. */
  parameters?: XPSResponseExplanationParameters;
}

export const XPSResponseExplanationSpec: Schema.Schema<XPSResponseExplanationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      explanationType: Schema.optional(Schema.String),
      metadata: Schema.optional(XPSResponseExplanationMetadata),
      parameters: Schema.optional(XPSResponseExplanationParameters),
    }),
  ).annotate({
    identifier: "XPSResponseExplanationSpec",
  }) as any as Schema.Schema<XPSResponseExplanationSpec>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      green: Schema.optional(Schema.Number),
      red: Schema.optional(Schema.Number),
      alpha: Schema.optional(Schema.Number),
      blue: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Color" }) as any as Schema.Schema<Color>;

export interface XPSColorMapIntColor {
  /** The value should be in range of [0, 255]. */
  blue?: number;
  /** The value should be in range of [0, 255]. */
  red?: number;
  /** The value should be in range of [0, 255]. */
  green?: number;
}

export const XPSColorMapIntColor: Schema.Schema<XPSColorMapIntColor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      blue: Schema.optional(Schema.Number),
      red: Schema.optional(Schema.Number),
      green: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSColorMapIntColor",
  }) as any as Schema.Schema<XPSColorMapIntColor>;

export interface XPSColorMap {
  /** This type is deprecated in favor of the IntColor below. This is because google.type.Color represent color has a float which semantically does not reflect discrete classes/categories concept. Moreover, to handle it well we need to have some tolerance when converting to a discretized color. As such, the recommendation is to have API surface still use google.type.Color while internally IntColor is used. */
  color?: Color;
  /** Should be used during training. */
  annotationSpecIdToken?: string;
  intColor?: XPSColorMapIntColor;
  /** Should be used during preprocessing. */
  displayName?: string;
}

export const XPSColorMap: Schema.Schema<XPSColorMap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      color: Schema.optional(Color),
      annotationSpecIdToken: Schema.optional(Schema.String),
      intColor: Schema.optional(XPSColorMapIntColor),
      displayName: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSColorMap",
  }) as any as Schema.Schema<XPSColorMap>;

export interface XPSTimestampStatsGranularStats {
  /** A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May). */
  buckets?: Record<string, string>;
}

export const XPSTimestampStatsGranularStats: Schema.Schema<XPSTimestampStatsGranularStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      buckets: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ).annotate({
    identifier: "XPSTimestampStatsGranularStats",
  }) as any as Schema.Schema<XPSTimestampStatsGranularStats>;

export interface XPSCommonStats {
  distinctValueCount?: string;
  nullValueCount?: string;
  validValueCount?: string;
}

export const XPSCommonStats: Schema.Schema<XPSCommonStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      distinctValueCount: Schema.optional(Schema.String),
      nullValueCount: Schema.optional(Schema.String),
      validValueCount: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSCommonStats",
  }) as any as Schema.Schema<XPSCommonStats>;

export interface XPSTimestampStats {
  /** The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated). */
  granularStats?: Record<string, XPSTimestampStatsGranularStats>;
  commonStats?: XPSCommonStats;
  medianTimestampNanos?: string;
}

export const XPSTimestampStats: Schema.Schema<XPSTimestampStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      granularStats: Schema.optional(
        Schema.Record(Schema.String, XPSTimestampStatsGranularStats),
      ),
      commonStats: Schema.optional(XPSCommonStats),
      medianTimestampNanos: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSTimestampStats",
  }) as any as Schema.Schema<XPSTimestampStats>;

export interface AnalyzeEntitiesResponse {
  /** The recognized entities in the input document. */
  entities?: Array<Entity>;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
  language?: string;
}

export const AnalyzeEntitiesResponse: Schema.Schema<AnalyzeEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entities: Schema.optional(Schema.Array(Entity)),
      language: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnalyzeEntitiesResponse",
  }) as any as Schema.Schema<AnalyzeEntitiesResponse>;

export interface XPSTrainingObjectivePoint {
  /** The objective value when this point was recorded. */
  value?: number;
  /** The time at which this point was recorded. */
  createTime?: string;
}

export const XPSTrainingObjectivePoint: Schema.Schema<XPSTrainingObjectivePoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      value: Schema.optional(Schema.Number),
      createTime: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSTrainingObjectivePoint",
  }) as any as Schema.Schema<XPSTrainingObjectivePoint>;

export interface XPSTuningTrial {
  /** Model parameters for the trial. */
  modelStructure?: XPSTablesModelStructure;
  /** The optimization objective evaluation of the eval split data. */
  trainingObjectivePoint?: XPSTrainingObjectivePoint;
}

export const XPSTuningTrial: Schema.Schema<XPSTuningTrial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modelStructure: Schema.optional(XPSTablesModelStructure),
      trainingObjectivePoint: Schema.optional(XPSTrainingObjectivePoint),
    }),
  ).annotate({
    identifier: "XPSTuningTrial",
  }) as any as Schema.Schema<XPSTuningTrial>;

export interface XPSTablesTrainingOperationMetadata {
  /** This field records the training objective value with respect to time, giving insight into how the model architecture search is performing as training time elapses. */
  trainingObjectivePoints?: Array<XPSTrainingObjectivePoint>;
  /** The optimization objective for model. */
  optimizationObjective?: string;
  /** Timestamp when training process starts. */
  trainingStartTime?: string;
  /** Current stage of creating model. */
  createModelStage?:
    | "CREATE_MODEL_STAGE_UNSPECIFIED"
    | "DATA_PREPROCESSING"
    | "TRAINING"
    | "EVALUATING"
    | "MODEL_POST_PROCESSING"
    | (string & {});
  /** Creating model budget. */
  trainBudgetMilliNodeHours?: string;
  /** This field is for training. When the operation is terminated successfully, AutoML Backend post this field to operation metadata in spanner. If the metadata has no trials returned, the training operation is supposed to be a failure. */
  topTrials?: Array<XPSTuningTrial>;
}

export const XPSTablesTrainingOperationMetadata: Schema.Schema<XPSTablesTrainingOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trainingObjectivePoints: Schema.optional(
        Schema.Array(XPSTrainingObjectivePoint),
      ),
      optimizationObjective: Schema.optional(Schema.String),
      trainingStartTime: Schema.optional(Schema.String),
      createModelStage: Schema.optional(Schema.String),
      trainBudgetMilliNodeHours: Schema.optional(Schema.String),
      topTrials: Schema.optional(Schema.Array(XPSTuningTrial)),
    }),
  ).annotate({
    identifier: "XPSTablesTrainingOperationMetadata",
  }) as any as Schema.Schema<XPSTablesTrainingOperationMetadata>;

export interface XPSVideoTrainingOperationMetadata {
  /** This is an estimation of the node hours necessary for training a model, expressed in milli node hours (i.e. 1,000 value in this field means 1 node hour). A node hour represents the time a virtual machine spends running your training job. The cost of one node running for one hour is a node hour. */
  trainCostMilliNodeHour?: string;
}

export const XPSVideoTrainingOperationMetadata: Schema.Schema<XPSVideoTrainingOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trainCostMilliNodeHour: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSVideoTrainingOperationMetadata",
  }) as any as Schema.Schema<XPSVideoTrainingOperationMetadata>;

export interface XPSMetricEntryLabel {
  /** The name of the label. */
  labelName?: string;
  /** The value of the label. */
  labelValue?: string;
}

export const XPSMetricEntryLabel: Schema.Schema<XPSMetricEntryLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      labelName: Schema.optional(Schema.String),
      labelValue: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSMetricEntryLabel",
  }) as any as Schema.Schema<XPSMetricEntryLabel>;

export interface XPSMetricEntry {
  /** A signed 64-bit integer value. */
  int64Value?: string;
  /** For billing metrics that are using legacy sku's, set the legacy billing metric id here. This will be sent to Chemist as the "cloudbilling.googleapis.com/argentum_metric_id" label. Otherwise leave empty. */
  argentumMetricId?: string;
  /** Billing system labels for this (metric, value) pair. */
  systemLabels?: Array<XPSMetricEntryLabel>;
  /** A double value. */
  doubleValue?: number;
  /** The metric name defined in the service configuration. */
  metricName?: string;
}

export const XPSMetricEntry: Schema.Schema<XPSMetricEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      int64Value: Schema.optional(Schema.String),
      argentumMetricId: Schema.optional(Schema.String),
      systemLabels: Schema.optional(Schema.Array(XPSMetricEntryLabel)),
      doubleValue: Schema.optional(Schema.Number),
      metricName: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSMetricEntry",
  }) as any as Schema.Schema<XPSMetricEntry>;

export interface XPSReportingMetrics {
  /** One entry per metric name. The values must be aggregated per metric name. */
  metricEntries?: Array<XPSMetricEntry>;
  /** The effective time training used. If set, this is used for quota management and billing. Deprecated. AutoML BE doesn't use this. Don't set. */
  effectiveTrainingDuration?: string;
}

export const XPSReportingMetrics: Schema.Schema<XPSReportingMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      metricEntries: Schema.optional(Schema.Array(XPSMetricEntry)),
      effectiveTrainingDuration: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSReportingMetrics",
  }) as any as Schema.Schema<XPSReportingMetrics>;

export interface XPSVideoBatchPredictOperationMetadata {
  /** All the partial batch prediction results that are completed at the moment. Output examples are sorted by completion time. The order will not be changed. Each output example should be the path of a single RecordIO file of AnnotatedExamples. */
  outputExamples?: Array<string>;
}

export const XPSVideoBatchPredictOperationMetadata: Schema.Schema<XPSVideoBatchPredictOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      outputExamples: Schema.optional(Schema.Array(Schema.String)),
    }),
  ).annotate({
    identifier: "XPSVideoBatchPredictOperationMetadata",
  }) as any as Schema.Schema<XPSVideoBatchPredictOperationMetadata>;

export interface RamMetric {
  /** Required. Machine spec, e.g. N1_STANDARD_4. */
  machineSpec?:
    | "UNKNOWN_MACHINE_SPEC"
    | "N1_STANDARD_2"
    | "N1_STANDARD_4"
    | "N1_STANDARD_8"
    | "N1_STANDARD_16"
    | "N1_STANDARD_32"
    | "N1_STANDARD_64"
    | "N1_STANDARD_96"
    | "N1_HIGHMEM_2"
    | "N1_HIGHMEM_4"
    | "N1_HIGHMEM_8"
    | "N1_HIGHMEM_16"
    | "N1_HIGHMEM_32"
    | "N1_HIGHMEM_64"
    | "N1_HIGHMEM_96"
    | "N1_HIGHCPU_2"
    | "N1_HIGHCPU_4"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_16"
    | "N1_HIGHCPU_32"
    | "N1_HIGHCPU_64"
    | "N1_HIGHCPU_96"
    | "A2_HIGHGPU_1G"
    | "A2_HIGHGPU_2G"
    | "A2_HIGHGPU_4G"
    | "A2_HIGHGPU_8G"
    | "A2_MEGAGPU_16G"
    | "A2_ULTRAGPU_1G"
    | "A2_ULTRAGPU_2G"
    | "A2_ULTRAGPU_4G"
    | "A2_ULTRAGPU_8G"
    | "A3_HIGHGPU_1G"
    | "A3_HIGHGPU_2G"
    | "A3_HIGHGPU_4G"
    | "A3_HIGHGPU_8G"
    | "A3_MEGAGPU_8G"
    | "A3_ULTRAGPU_8G"
    | "A3_EDGEGPU_8G"
    | "A4_HIGHGPU_8G"
    | "A4X_HIGHGPU_4G"
    | "E2_STANDARD_2"
    | "E2_STANDARD_4"
    | "E2_STANDARD_8"
    | "E2_STANDARD_16"
    | "E2_STANDARD_32"
    | "E2_HIGHMEM_2"
    | "E2_HIGHMEM_4"
    | "E2_HIGHMEM_8"
    | "E2_HIGHMEM_16"
    | "E2_HIGHCPU_2"
    | "E2_HIGHCPU_4"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_16"
    | "E2_HIGHCPU_32"
    | "N2_STANDARD_2"
    | "N2_STANDARD_4"
    | "N2_STANDARD_8"
    | "N2_STANDARD_16"
    | "N2_STANDARD_32"
    | "N2_STANDARD_48"
    | "N2_STANDARD_64"
    | "N2_STANDARD_80"
    | "N2_STANDARD_96"
    | "N2_STANDARD_128"
    | "N2_HIGHMEM_2"
    | "N2_HIGHMEM_4"
    | "N2_HIGHMEM_8"
    | "N2_HIGHMEM_16"
    | "N2_HIGHMEM_32"
    | "N2_HIGHMEM_48"
    | "N2_HIGHMEM_64"
    | "N2_HIGHMEM_80"
    | "N2_HIGHMEM_96"
    | "N2_HIGHMEM_128"
    | "N2_HIGHCPU_2"
    | "N2_HIGHCPU_4"
    | "N2_HIGHCPU_8"
    | "N2_HIGHCPU_16"
    | "N2_HIGHCPU_32"
    | "N2_HIGHCPU_48"
    | "N2_HIGHCPU_64"
    | "N2_HIGHCPU_80"
    | "N2_HIGHCPU_96"
    | "N2D_STANDARD_2"
    | "N2D_STANDARD_4"
    | "N2D_STANDARD_8"
    | "N2D_STANDARD_16"
    | "N2D_STANDARD_32"
    | "N2D_STANDARD_48"
    | "N2D_STANDARD_64"
    | "N2D_STANDARD_80"
    | "N2D_STANDARD_96"
    | "N2D_STANDARD_128"
    | "N2D_STANDARD_224"
    | "N2D_HIGHMEM_2"
    | "N2D_HIGHMEM_4"
    | "N2D_HIGHMEM_8"
    | "N2D_HIGHMEM_16"
    | "N2D_HIGHMEM_32"
    | "N2D_HIGHMEM_48"
    | "N2D_HIGHMEM_64"
    | "N2D_HIGHMEM_80"
    | "N2D_HIGHMEM_96"
    | "N2D_HIGHCPU_2"
    | "N2D_HIGHCPU_4"
    | "N2D_HIGHCPU_8"
    | "N2D_HIGHCPU_16"
    | "N2D_HIGHCPU_32"
    | "N2D_HIGHCPU_48"
    | "N2D_HIGHCPU_64"
    | "N2D_HIGHCPU_80"
    | "N2D_HIGHCPU_96"
    | "N2D_HIGHCPU_128"
    | "N2D_HIGHCPU_224"
    | "C2_STANDARD_4"
    | "C2_STANDARD_8"
    | "C2_STANDARD_16"
    | "C2_STANDARD_30"
    | "C2_STANDARD_60"
    | "C2D_STANDARD_2"
    | "C2D_STANDARD_4"
    | "C2D_STANDARD_8"
    | "C2D_STANDARD_16"
    | "C2D_STANDARD_32"
    | "C2D_STANDARD_56"
    | "C2D_STANDARD_112"
    | "C2D_HIGHCPU_2"
    | "C2D_HIGHCPU_4"
    | "C2D_HIGHCPU_8"
    | "C2D_HIGHCPU_16"
    | "C2D_HIGHCPU_32"
    | "C2D_HIGHCPU_56"
    | "C2D_HIGHCPU_112"
    | "C2D_HIGHMEM_2"
    | "C2D_HIGHMEM_4"
    | "C2D_HIGHMEM_8"
    | "C2D_HIGHMEM_16"
    | "C2D_HIGHMEM_32"
    | "C2D_HIGHMEM_56"
    | "C2D_HIGHMEM_112"
    | "G2_STANDARD_4"
    | "G2_STANDARD_8"
    | "G2_STANDARD_12"
    | "G2_STANDARD_16"
    | "G2_STANDARD_24"
    | "G2_STANDARD_32"
    | "G2_STANDARD_48"
    | "G2_STANDARD_96"
    | "G4_STANDARD_48"
    | "C3_STANDARD_4"
    | "C3_STANDARD_8"
    | "C3_STANDARD_22"
    | "C3_STANDARD_44"
    | "C3_STANDARD_88"
    | "C3_STANDARD_176"
    | "C3_HIGHCPU_4"
    | "C3_HIGHCPU_8"
    | "C3_HIGHCPU_22"
    | "C3_HIGHCPU_44"
    | "C3_HIGHCPU_88"
    | "C3_HIGHCPU_176"
    | "C3_HIGHMEM_4"
    | "C3_HIGHMEM_8"
    | "C3_HIGHMEM_22"
    | "C3_HIGHMEM_44"
    | "C3_HIGHMEM_88"
    | "C3_HIGHMEM_176"
    | "C4_STANDARD_8"
    | "C4_STANDARD_16"
    | "C4_STANDARD_24"
    | "C4_STANDARD_32"
    | "C4_STANDARD_48"
    | "C4_STANDARD_96"
    | "C4_STANDARD_144"
    | "C4_STANDARD_192"
    | "C4_STANDARD_288"
    | "C4_HIGHCPU_8"
    | "C4_HIGHCPU_16"
    | "C4_HIGHCPU_24"
    | "C4_HIGHCPU_32"
    | "C4_HIGHCPU_48"
    | "C4_HIGHCPU_96"
    | "C4_HIGHCPU_144"
    | "C4_HIGHCPU_192"
    | "C4_HIGHCPU_288"
    | "C4_HIGHMEM_8"
    | "C4_HIGHMEM_16"
    | "C4_HIGHMEM_24"
    | "C4_HIGHMEM_32"
    | "C4_HIGHMEM_48"
    | "C4_HIGHMEM_96"
    | "C4_HIGHMEM_144"
    | "C4_HIGHMEM_192"
    | "C4_HIGHMEM_288"
    | "C4A_STANDARD_8"
    | "C4A_STANDARD_16"
    | "C4A_STANDARD_32"
    | "C4A_STANDARD_48"
    | "C4A_STANDARD_64"
    | "C4A_STANDARD_72"
    | "C4A_HIGHCPU_8"
    | "C4A_HIGHCPU_16"
    | "C4A_HIGHCPU_32"
    | "C4A_HIGHCPU_48"
    | "C4A_HIGHCPU_64"
    | "C4A_HIGHCPU_72"
    | "C4A_HIGHMEM_8"
    | "C4A_HIGHMEM_16"
    | "C4A_HIGHMEM_32"
    | "C4A_HIGHMEM_48"
    | "C4A_HIGHMEM_64"
    | "C4A_HIGHMEM_72"
    | "C4D_STANDARD_8"
    | "C4D_STANDARD_16"
    | "C4D_STANDARD_32"
    | "C4D_STANDARD_48"
    | "C4D_STANDARD_64"
    | "C4D_STANDARD_96"
    | "C4D_STANDARD_192"
    | "C4D_STANDARD_384"
    | "C4D_HIGHCPU_8"
    | "C4D_HIGHCPU_16"
    | "C4D_HIGHCPU_32"
    | "C4D_HIGHCPU_48"
    | "C4D_HIGHCPU_64"
    | "C4D_HIGHCPU_96"
    | "C4D_HIGHCPU_192"
    | "C4D_HIGHCPU_384"
    | "C4D_HIGHMEM_8"
    | "C4D_HIGHMEM_16"
    | "C4D_HIGHMEM_32"
    | "C4D_HIGHMEM_48"
    | "C4D_HIGHMEM_64"
    | "C4D_HIGHMEM_96"
    | "C4D_HIGHMEM_192"
    | "C4D_HIGHMEM_384"
    | "N4_STANDARD_2"
    | "N4_STANDARD_4"
    | "N4_STANDARD_8"
    | "N4_STANDARD_16"
    | "N4_STANDARD_32"
    | "N4_STANDARD_48"
    | "N4_STANDARD_64"
    | "N4_STANDARD_80"
    | "N4_HIGHCPU_2"
    | "N4_HIGHCPU_4"
    | "N4_HIGHCPU_8"
    | "N4_HIGHCPU_16"
    | "N4_HIGHCPU_32"
    | "N4_HIGHCPU_48"
    | "N4_HIGHCPU_64"
    | "N4_HIGHCPU_80"
    | "N4_HIGHMEM_2"
    | "N4_HIGHMEM_4"
    | "N4_HIGHMEM_8"
    | "N4_HIGHMEM_16"
    | "N4_HIGHMEM_32"
    | "N4_HIGHMEM_48"
    | "N4_HIGHMEM_64"
    | "N4_HIGHMEM_80"
    | "N4A_STANDARD_8"
    | "N4A_STANDARD_16"
    | "N4A_STANDARD_32"
    | "N4A_STANDARD_48"
    | "N4A_STANDARD_64"
    | "N4A_HIGHCPU_8"
    | "N4A_HIGHCPU_16"
    | "N4A_HIGHCPU_32"
    | "N4A_HIGHCPU_48"
    | "N4A_HIGHCPU_64"
    | "N4A_HIGHMEM_8"
    | "N4A_HIGHMEM_16"
    | "N4A_HIGHMEM_32"
    | "N4A_HIGHMEM_48"
    | "N4A_HIGHMEM_64"
    | "C3D_STANDARD_8"
    | "C3D_STANDARD_16"
    | "C3D_STANDARD_30"
    | "C3D_STANDARD_60"
    | "C3D_STANDARD_90"
    | "C3D_STANDARD_180"
    | "C3D_STANDARD_360"
    | "C3D_HIGHCPU_8"
    | "C3D_HIGHCPU_16"
    | "C3D_HIGHCPU_30"
    | "C3D_HIGHCPU_60"
    | "C3D_HIGHCPU_90"
    | "C3D_HIGHCPU_180"
    | "C3D_HIGHCPU_360"
    | "C3D_HIGHMEM_8"
    | "C3D_HIGHMEM_16"
    | "C3D_HIGHMEM_30"
    | "C3D_HIGHMEM_60"
    | "C3D_HIGHMEM_90"
    | "C3D_HIGHMEM_180"
    | "C3D_HIGHMEM_360"
    | (string & {});
  /** Required. VM memory in Gigabyte second, e.g. 3600. Using int64 type to match billing metrics definition. */
  gibSec?: string;
  /** Required. VM memory in gb. */
  memories?: number;
  /** Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll}\p{N}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk" */
  trackingLabels?: Record<string, string>;
  /** Required. Type of ram. */
  ramType?:
    | "UNKNOWN_RAM_TYPE"
    | "A2"
    | "A3"
    | "A4"
    | "A4X"
    | "C2"
    | "C2D"
    | "CUSTOM"
    | "E2"
    | "G2"
    | "G4"
    | "C4"
    | "C4A"
    | "C4D"
    | "N4"
    | "N4A"
    | "C3D"
    | "C3"
    | "M2"
    | "M1"
    | "N1"
    | "N2_CUSTOM"
    | "N2"
    | "N2D"
    | (string & {});
}

export const RamMetric: Schema.Schema<RamMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      machineSpec: Schema.optional(Schema.String),
      gibSec: Schema.optional(Schema.String),
      memories: Schema.optional(Schema.Number),
      trackingLabels: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      ramType: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "RamMetric" }) as any as Schema.Schema<RamMetric>;

export interface GpuMetric {
  /** Required. Seconds of GPU usage, e.g. 3600. */
  gpuSec?: string;
  /** Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll}\p{N}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk" */
  trackingLabels?: Record<string, string>;
  /** Required. Type of GPU, e.g. NVIDIA_TESLA_V100. */
  gpuType?:
    | "UNKNOWN_GPU_TYPE"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_A100_80GB"
    | "NVIDIA_B200"
    | "NVIDIA_GB200"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_L4"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_H100_80GB"
    | "NVIDIA_H100_MEGA_80GB"
    | "NVIDIA_H200_141GB"
    | "NVIDIA_RTX_PRO_6000"
    | (string & {});
  /** Required. Machine spec, e.g. N1_STANDARD_4. */
  machineSpec?:
    | "UNKNOWN_MACHINE_SPEC"
    | "N1_STANDARD_2"
    | "N1_STANDARD_4"
    | "N1_STANDARD_8"
    | "N1_STANDARD_16"
    | "N1_STANDARD_32"
    | "N1_STANDARD_64"
    | "N1_STANDARD_96"
    | "N1_HIGHMEM_2"
    | "N1_HIGHMEM_4"
    | "N1_HIGHMEM_8"
    | "N1_HIGHMEM_16"
    | "N1_HIGHMEM_32"
    | "N1_HIGHMEM_64"
    | "N1_HIGHMEM_96"
    | "N1_HIGHCPU_2"
    | "N1_HIGHCPU_4"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_16"
    | "N1_HIGHCPU_32"
    | "N1_HIGHCPU_64"
    | "N1_HIGHCPU_96"
    | "A2_HIGHGPU_1G"
    | "A2_HIGHGPU_2G"
    | "A2_HIGHGPU_4G"
    | "A2_HIGHGPU_8G"
    | "A2_MEGAGPU_16G"
    | "A2_ULTRAGPU_1G"
    | "A2_ULTRAGPU_2G"
    | "A2_ULTRAGPU_4G"
    | "A2_ULTRAGPU_8G"
    | "A3_HIGHGPU_1G"
    | "A3_HIGHGPU_2G"
    | "A3_HIGHGPU_4G"
    | "A3_HIGHGPU_8G"
    | "A3_MEGAGPU_8G"
    | "A3_ULTRAGPU_8G"
    | "A3_EDGEGPU_8G"
    | "A4_HIGHGPU_8G"
    | "A4X_HIGHGPU_4G"
    | "E2_STANDARD_2"
    | "E2_STANDARD_4"
    | "E2_STANDARD_8"
    | "E2_STANDARD_16"
    | "E2_STANDARD_32"
    | "E2_HIGHMEM_2"
    | "E2_HIGHMEM_4"
    | "E2_HIGHMEM_8"
    | "E2_HIGHMEM_16"
    | "E2_HIGHCPU_2"
    | "E2_HIGHCPU_4"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_16"
    | "E2_HIGHCPU_32"
    | "N2_STANDARD_2"
    | "N2_STANDARD_4"
    | "N2_STANDARD_8"
    | "N2_STANDARD_16"
    | "N2_STANDARD_32"
    | "N2_STANDARD_48"
    | "N2_STANDARD_64"
    | "N2_STANDARD_80"
    | "N2_STANDARD_96"
    | "N2_STANDARD_128"
    | "N2_HIGHMEM_2"
    | "N2_HIGHMEM_4"
    | "N2_HIGHMEM_8"
    | "N2_HIGHMEM_16"
    | "N2_HIGHMEM_32"
    | "N2_HIGHMEM_48"
    | "N2_HIGHMEM_64"
    | "N2_HIGHMEM_80"
    | "N2_HIGHMEM_96"
    | "N2_HIGHMEM_128"
    | "N2_HIGHCPU_2"
    | "N2_HIGHCPU_4"
    | "N2_HIGHCPU_8"
    | "N2_HIGHCPU_16"
    | "N2_HIGHCPU_32"
    | "N2_HIGHCPU_48"
    | "N2_HIGHCPU_64"
    | "N2_HIGHCPU_80"
    | "N2_HIGHCPU_96"
    | "N2D_STANDARD_2"
    | "N2D_STANDARD_4"
    | "N2D_STANDARD_8"
    | "N2D_STANDARD_16"
    | "N2D_STANDARD_32"
    | "N2D_STANDARD_48"
    | "N2D_STANDARD_64"
    | "N2D_STANDARD_80"
    | "N2D_STANDARD_96"
    | "N2D_STANDARD_128"
    | "N2D_STANDARD_224"
    | "N2D_HIGHMEM_2"
    | "N2D_HIGHMEM_4"
    | "N2D_HIGHMEM_8"
    | "N2D_HIGHMEM_16"
    | "N2D_HIGHMEM_32"
    | "N2D_HIGHMEM_48"
    | "N2D_HIGHMEM_64"
    | "N2D_HIGHMEM_80"
    | "N2D_HIGHMEM_96"
    | "N2D_HIGHCPU_2"
    | "N2D_HIGHCPU_4"
    | "N2D_HIGHCPU_8"
    | "N2D_HIGHCPU_16"
    | "N2D_HIGHCPU_32"
    | "N2D_HIGHCPU_48"
    | "N2D_HIGHCPU_64"
    | "N2D_HIGHCPU_80"
    | "N2D_HIGHCPU_96"
    | "N2D_HIGHCPU_128"
    | "N2D_HIGHCPU_224"
    | "C2_STANDARD_4"
    | "C2_STANDARD_8"
    | "C2_STANDARD_16"
    | "C2_STANDARD_30"
    | "C2_STANDARD_60"
    | "C2D_STANDARD_2"
    | "C2D_STANDARD_4"
    | "C2D_STANDARD_8"
    | "C2D_STANDARD_16"
    | "C2D_STANDARD_32"
    | "C2D_STANDARD_56"
    | "C2D_STANDARD_112"
    | "C2D_HIGHCPU_2"
    | "C2D_HIGHCPU_4"
    | "C2D_HIGHCPU_8"
    | "C2D_HIGHCPU_16"
    | "C2D_HIGHCPU_32"
    | "C2D_HIGHCPU_56"
    | "C2D_HIGHCPU_112"
    | "C2D_HIGHMEM_2"
    | "C2D_HIGHMEM_4"
    | "C2D_HIGHMEM_8"
    | "C2D_HIGHMEM_16"
    | "C2D_HIGHMEM_32"
    | "C2D_HIGHMEM_56"
    | "C2D_HIGHMEM_112"
    | "G2_STANDARD_4"
    | "G2_STANDARD_8"
    | "G2_STANDARD_12"
    | "G2_STANDARD_16"
    | "G2_STANDARD_24"
    | "G2_STANDARD_32"
    | "G2_STANDARD_48"
    | "G2_STANDARD_96"
    | "G4_STANDARD_48"
    | "C3_STANDARD_4"
    | "C3_STANDARD_8"
    | "C3_STANDARD_22"
    | "C3_STANDARD_44"
    | "C3_STANDARD_88"
    | "C3_STANDARD_176"
    | "C3_HIGHCPU_4"
    | "C3_HIGHCPU_8"
    | "C3_HIGHCPU_22"
    | "C3_HIGHCPU_44"
    | "C3_HIGHCPU_88"
    | "C3_HIGHCPU_176"
    | "C3_HIGHMEM_4"
    | "C3_HIGHMEM_8"
    | "C3_HIGHMEM_22"
    | "C3_HIGHMEM_44"
    | "C3_HIGHMEM_88"
    | "C3_HIGHMEM_176"
    | "C4_STANDARD_8"
    | "C4_STANDARD_16"
    | "C4_STANDARD_24"
    | "C4_STANDARD_32"
    | "C4_STANDARD_48"
    | "C4_STANDARD_96"
    | "C4_STANDARD_144"
    | "C4_STANDARD_192"
    | "C4_STANDARD_288"
    | "C4_HIGHCPU_8"
    | "C4_HIGHCPU_16"
    | "C4_HIGHCPU_24"
    | "C4_HIGHCPU_32"
    | "C4_HIGHCPU_48"
    | "C4_HIGHCPU_96"
    | "C4_HIGHCPU_144"
    | "C4_HIGHCPU_192"
    | "C4_HIGHCPU_288"
    | "C4_HIGHMEM_8"
    | "C4_HIGHMEM_16"
    | "C4_HIGHMEM_24"
    | "C4_HIGHMEM_32"
    | "C4_HIGHMEM_48"
    | "C4_HIGHMEM_96"
    | "C4_HIGHMEM_144"
    | "C4_HIGHMEM_192"
    | "C4_HIGHMEM_288"
    | "C4A_STANDARD_8"
    | "C4A_STANDARD_16"
    | "C4A_STANDARD_32"
    | "C4A_STANDARD_48"
    | "C4A_STANDARD_64"
    | "C4A_STANDARD_72"
    | "C4A_HIGHCPU_8"
    | "C4A_HIGHCPU_16"
    | "C4A_HIGHCPU_32"
    | "C4A_HIGHCPU_48"
    | "C4A_HIGHCPU_64"
    | "C4A_HIGHCPU_72"
    | "C4A_HIGHMEM_8"
    | "C4A_HIGHMEM_16"
    | "C4A_HIGHMEM_32"
    | "C4A_HIGHMEM_48"
    | "C4A_HIGHMEM_64"
    | "C4A_HIGHMEM_72"
    | "C4D_STANDARD_8"
    | "C4D_STANDARD_16"
    | "C4D_STANDARD_32"
    | "C4D_STANDARD_48"
    | "C4D_STANDARD_64"
    | "C4D_STANDARD_96"
    | "C4D_STANDARD_192"
    | "C4D_STANDARD_384"
    | "C4D_HIGHCPU_8"
    | "C4D_HIGHCPU_16"
    | "C4D_HIGHCPU_32"
    | "C4D_HIGHCPU_48"
    | "C4D_HIGHCPU_64"
    | "C4D_HIGHCPU_96"
    | "C4D_HIGHCPU_192"
    | "C4D_HIGHCPU_384"
    | "C4D_HIGHMEM_8"
    | "C4D_HIGHMEM_16"
    | "C4D_HIGHMEM_32"
    | "C4D_HIGHMEM_48"
    | "C4D_HIGHMEM_64"
    | "C4D_HIGHMEM_96"
    | "C4D_HIGHMEM_192"
    | "C4D_HIGHMEM_384"
    | "N4_STANDARD_2"
    | "N4_STANDARD_4"
    | "N4_STANDARD_8"
    | "N4_STANDARD_16"
    | "N4_STANDARD_32"
    | "N4_STANDARD_48"
    | "N4_STANDARD_64"
    | "N4_STANDARD_80"
    | "N4_HIGHCPU_2"
    | "N4_HIGHCPU_4"
    | "N4_HIGHCPU_8"
    | "N4_HIGHCPU_16"
    | "N4_HIGHCPU_32"
    | "N4_HIGHCPU_48"
    | "N4_HIGHCPU_64"
    | "N4_HIGHCPU_80"
    | "N4_HIGHMEM_2"
    | "N4_HIGHMEM_4"
    | "N4_HIGHMEM_8"
    | "N4_HIGHMEM_16"
    | "N4_HIGHMEM_32"
    | "N4_HIGHMEM_48"
    | "N4_HIGHMEM_64"
    | "N4_HIGHMEM_80"
    | "N4A_STANDARD_8"
    | "N4A_STANDARD_16"
    | "N4A_STANDARD_32"
    | "N4A_STANDARD_48"
    | "N4A_STANDARD_64"
    | "N4A_HIGHCPU_8"
    | "N4A_HIGHCPU_16"
    | "N4A_HIGHCPU_32"
    | "N4A_HIGHCPU_48"
    | "N4A_HIGHCPU_64"
    | "N4A_HIGHMEM_8"
    | "N4A_HIGHMEM_16"
    | "N4A_HIGHMEM_32"
    | "N4A_HIGHMEM_48"
    | "N4A_HIGHMEM_64"
    | "C3D_STANDARD_8"
    | "C3D_STANDARD_16"
    | "C3D_STANDARD_30"
    | "C3D_STANDARD_60"
    | "C3D_STANDARD_90"
    | "C3D_STANDARD_180"
    | "C3D_STANDARD_360"
    | "C3D_HIGHCPU_8"
    | "C3D_HIGHCPU_16"
    | "C3D_HIGHCPU_30"
    | "C3D_HIGHCPU_60"
    | "C3D_HIGHCPU_90"
    | "C3D_HIGHCPU_180"
    | "C3D_HIGHCPU_360"
    | "C3D_HIGHMEM_8"
    | "C3D_HIGHMEM_16"
    | "C3D_HIGHMEM_30"
    | "C3D_HIGHMEM_60"
    | "C3D_HIGHMEM_90"
    | "C3D_HIGHMEM_180"
    | "C3D_HIGHMEM_360"
    | (string & {});
}

export const GpuMetric: Schema.Schema<GpuMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gpuSec: Schema.optional(Schema.String),
      trackingLabels: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      gpuType: Schema.optional(Schema.String),
      machineSpec: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "GpuMetric" }) as any as Schema.Schema<GpuMetric>;

export interface CpuMetric {
  /** Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll}\p{N}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk" */
  trackingLabels?: Record<string, string>;
  /** Required. Type of cpu, e.g. N2. */
  cpuType?:
    | "UNKNOWN_CPU_TYPE"
    | "A2"
    | "A3"
    | "A4"
    | "A4X"
    | "C2"
    | "C2D"
    | "CUSTOM"
    | "E2"
    | "G2"
    | "G4"
    | "C3"
    | "C4"
    | "C4A"
    | "C4D"
    | "N4"
    | "N4A"
    | "C3D"
    | "M2"
    | "M1"
    | "N1"
    | "N2_CUSTOM"
    | "N2"
    | "N2D"
    | (string & {});
  /** Required. Total seconds of core usage, e.g. 4. */
  coreSec?: string;
  /** Required. Number of CPU cores. */
  coreNumber?: string;
  /** Required. Machine spec, e.g. N1_STANDARD_4. */
  machineSpec?:
    | "UNKNOWN_MACHINE_SPEC"
    | "N1_STANDARD_2"
    | "N1_STANDARD_4"
    | "N1_STANDARD_8"
    | "N1_STANDARD_16"
    | "N1_STANDARD_32"
    | "N1_STANDARD_64"
    | "N1_STANDARD_96"
    | "N1_HIGHMEM_2"
    | "N1_HIGHMEM_4"
    | "N1_HIGHMEM_8"
    | "N1_HIGHMEM_16"
    | "N1_HIGHMEM_32"
    | "N1_HIGHMEM_64"
    | "N1_HIGHMEM_96"
    | "N1_HIGHCPU_2"
    | "N1_HIGHCPU_4"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_16"
    | "N1_HIGHCPU_32"
    | "N1_HIGHCPU_64"
    | "N1_HIGHCPU_96"
    | "A2_HIGHGPU_1G"
    | "A2_HIGHGPU_2G"
    | "A2_HIGHGPU_4G"
    | "A2_HIGHGPU_8G"
    | "A2_MEGAGPU_16G"
    | "A2_ULTRAGPU_1G"
    | "A2_ULTRAGPU_2G"
    | "A2_ULTRAGPU_4G"
    | "A2_ULTRAGPU_8G"
    | "A3_HIGHGPU_1G"
    | "A3_HIGHGPU_2G"
    | "A3_HIGHGPU_4G"
    | "A3_HIGHGPU_8G"
    | "A3_MEGAGPU_8G"
    | "A3_ULTRAGPU_8G"
    | "A3_EDGEGPU_8G"
    | "A4_HIGHGPU_8G"
    | "A4X_HIGHGPU_4G"
    | "E2_STANDARD_2"
    | "E2_STANDARD_4"
    | "E2_STANDARD_8"
    | "E2_STANDARD_16"
    | "E2_STANDARD_32"
    | "E2_HIGHMEM_2"
    | "E2_HIGHMEM_4"
    | "E2_HIGHMEM_8"
    | "E2_HIGHMEM_16"
    | "E2_HIGHCPU_2"
    | "E2_HIGHCPU_4"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_16"
    | "E2_HIGHCPU_32"
    | "N2_STANDARD_2"
    | "N2_STANDARD_4"
    | "N2_STANDARD_8"
    | "N2_STANDARD_16"
    | "N2_STANDARD_32"
    | "N2_STANDARD_48"
    | "N2_STANDARD_64"
    | "N2_STANDARD_80"
    | "N2_STANDARD_96"
    | "N2_STANDARD_128"
    | "N2_HIGHMEM_2"
    | "N2_HIGHMEM_4"
    | "N2_HIGHMEM_8"
    | "N2_HIGHMEM_16"
    | "N2_HIGHMEM_32"
    | "N2_HIGHMEM_48"
    | "N2_HIGHMEM_64"
    | "N2_HIGHMEM_80"
    | "N2_HIGHMEM_96"
    | "N2_HIGHMEM_128"
    | "N2_HIGHCPU_2"
    | "N2_HIGHCPU_4"
    | "N2_HIGHCPU_8"
    | "N2_HIGHCPU_16"
    | "N2_HIGHCPU_32"
    | "N2_HIGHCPU_48"
    | "N2_HIGHCPU_64"
    | "N2_HIGHCPU_80"
    | "N2_HIGHCPU_96"
    | "N2D_STANDARD_2"
    | "N2D_STANDARD_4"
    | "N2D_STANDARD_8"
    | "N2D_STANDARD_16"
    | "N2D_STANDARD_32"
    | "N2D_STANDARD_48"
    | "N2D_STANDARD_64"
    | "N2D_STANDARD_80"
    | "N2D_STANDARD_96"
    | "N2D_STANDARD_128"
    | "N2D_STANDARD_224"
    | "N2D_HIGHMEM_2"
    | "N2D_HIGHMEM_4"
    | "N2D_HIGHMEM_8"
    | "N2D_HIGHMEM_16"
    | "N2D_HIGHMEM_32"
    | "N2D_HIGHMEM_48"
    | "N2D_HIGHMEM_64"
    | "N2D_HIGHMEM_80"
    | "N2D_HIGHMEM_96"
    | "N2D_HIGHCPU_2"
    | "N2D_HIGHCPU_4"
    | "N2D_HIGHCPU_8"
    | "N2D_HIGHCPU_16"
    | "N2D_HIGHCPU_32"
    | "N2D_HIGHCPU_48"
    | "N2D_HIGHCPU_64"
    | "N2D_HIGHCPU_80"
    | "N2D_HIGHCPU_96"
    | "N2D_HIGHCPU_128"
    | "N2D_HIGHCPU_224"
    | "C2_STANDARD_4"
    | "C2_STANDARD_8"
    | "C2_STANDARD_16"
    | "C2_STANDARD_30"
    | "C2_STANDARD_60"
    | "C2D_STANDARD_2"
    | "C2D_STANDARD_4"
    | "C2D_STANDARD_8"
    | "C2D_STANDARD_16"
    | "C2D_STANDARD_32"
    | "C2D_STANDARD_56"
    | "C2D_STANDARD_112"
    | "C2D_HIGHCPU_2"
    | "C2D_HIGHCPU_4"
    | "C2D_HIGHCPU_8"
    | "C2D_HIGHCPU_16"
    | "C2D_HIGHCPU_32"
    | "C2D_HIGHCPU_56"
    | "C2D_HIGHCPU_112"
    | "C2D_HIGHMEM_2"
    | "C2D_HIGHMEM_4"
    | "C2D_HIGHMEM_8"
    | "C2D_HIGHMEM_16"
    | "C2D_HIGHMEM_32"
    | "C2D_HIGHMEM_56"
    | "C2D_HIGHMEM_112"
    | "G2_STANDARD_4"
    | "G2_STANDARD_8"
    | "G2_STANDARD_12"
    | "G2_STANDARD_16"
    | "G2_STANDARD_24"
    | "G2_STANDARD_32"
    | "G2_STANDARD_48"
    | "G2_STANDARD_96"
    | "G4_STANDARD_48"
    | "C3_STANDARD_4"
    | "C3_STANDARD_8"
    | "C3_STANDARD_22"
    | "C3_STANDARD_44"
    | "C3_STANDARD_88"
    | "C3_STANDARD_176"
    | "C3_HIGHCPU_4"
    | "C3_HIGHCPU_8"
    | "C3_HIGHCPU_22"
    | "C3_HIGHCPU_44"
    | "C3_HIGHCPU_88"
    | "C3_HIGHCPU_176"
    | "C3_HIGHMEM_4"
    | "C3_HIGHMEM_8"
    | "C3_HIGHMEM_22"
    | "C3_HIGHMEM_44"
    | "C3_HIGHMEM_88"
    | "C3_HIGHMEM_176"
    | "C4_STANDARD_8"
    | "C4_STANDARD_16"
    | "C4_STANDARD_24"
    | "C4_STANDARD_32"
    | "C4_STANDARD_48"
    | "C4_STANDARD_96"
    | "C4_STANDARD_144"
    | "C4_STANDARD_192"
    | "C4_STANDARD_288"
    | "C4_HIGHCPU_8"
    | "C4_HIGHCPU_16"
    | "C4_HIGHCPU_24"
    | "C4_HIGHCPU_32"
    | "C4_HIGHCPU_48"
    | "C4_HIGHCPU_96"
    | "C4_HIGHCPU_144"
    | "C4_HIGHCPU_192"
    | "C4_HIGHCPU_288"
    | "C4_HIGHMEM_8"
    | "C4_HIGHMEM_16"
    | "C4_HIGHMEM_24"
    | "C4_HIGHMEM_32"
    | "C4_HIGHMEM_48"
    | "C4_HIGHMEM_96"
    | "C4_HIGHMEM_144"
    | "C4_HIGHMEM_192"
    | "C4_HIGHMEM_288"
    | "C4A_STANDARD_8"
    | "C4A_STANDARD_16"
    | "C4A_STANDARD_32"
    | "C4A_STANDARD_48"
    | "C4A_STANDARD_64"
    | "C4A_STANDARD_72"
    | "C4A_HIGHCPU_8"
    | "C4A_HIGHCPU_16"
    | "C4A_HIGHCPU_32"
    | "C4A_HIGHCPU_48"
    | "C4A_HIGHCPU_64"
    | "C4A_HIGHCPU_72"
    | "C4A_HIGHMEM_8"
    | "C4A_HIGHMEM_16"
    | "C4A_HIGHMEM_32"
    | "C4A_HIGHMEM_48"
    | "C4A_HIGHMEM_64"
    | "C4A_HIGHMEM_72"
    | "C4D_STANDARD_8"
    | "C4D_STANDARD_16"
    | "C4D_STANDARD_32"
    | "C4D_STANDARD_48"
    | "C4D_STANDARD_64"
    | "C4D_STANDARD_96"
    | "C4D_STANDARD_192"
    | "C4D_STANDARD_384"
    | "C4D_HIGHCPU_8"
    | "C4D_HIGHCPU_16"
    | "C4D_HIGHCPU_32"
    | "C4D_HIGHCPU_48"
    | "C4D_HIGHCPU_64"
    | "C4D_HIGHCPU_96"
    | "C4D_HIGHCPU_192"
    | "C4D_HIGHCPU_384"
    | "C4D_HIGHMEM_8"
    | "C4D_HIGHMEM_16"
    | "C4D_HIGHMEM_32"
    | "C4D_HIGHMEM_48"
    | "C4D_HIGHMEM_64"
    | "C4D_HIGHMEM_96"
    | "C4D_HIGHMEM_192"
    | "C4D_HIGHMEM_384"
    | "N4_STANDARD_2"
    | "N4_STANDARD_4"
    | "N4_STANDARD_8"
    | "N4_STANDARD_16"
    | "N4_STANDARD_32"
    | "N4_STANDARD_48"
    | "N4_STANDARD_64"
    | "N4_STANDARD_80"
    | "N4_HIGHCPU_2"
    | "N4_HIGHCPU_4"
    | "N4_HIGHCPU_8"
    | "N4_HIGHCPU_16"
    | "N4_HIGHCPU_32"
    | "N4_HIGHCPU_48"
    | "N4_HIGHCPU_64"
    | "N4_HIGHCPU_80"
    | "N4_HIGHMEM_2"
    | "N4_HIGHMEM_4"
    | "N4_HIGHMEM_8"
    | "N4_HIGHMEM_16"
    | "N4_HIGHMEM_32"
    | "N4_HIGHMEM_48"
    | "N4_HIGHMEM_64"
    | "N4_HIGHMEM_80"
    | "N4A_STANDARD_8"
    | "N4A_STANDARD_16"
    | "N4A_STANDARD_32"
    | "N4A_STANDARD_48"
    | "N4A_STANDARD_64"
    | "N4A_HIGHCPU_8"
    | "N4A_HIGHCPU_16"
    | "N4A_HIGHCPU_32"
    | "N4A_HIGHCPU_48"
    | "N4A_HIGHCPU_64"
    | "N4A_HIGHMEM_8"
    | "N4A_HIGHMEM_16"
    | "N4A_HIGHMEM_32"
    | "N4A_HIGHMEM_48"
    | "N4A_HIGHMEM_64"
    | "C3D_STANDARD_8"
    | "C3D_STANDARD_16"
    | "C3D_STANDARD_30"
    | "C3D_STANDARD_60"
    | "C3D_STANDARD_90"
    | "C3D_STANDARD_180"
    | "C3D_STANDARD_360"
    | "C3D_HIGHCPU_8"
    | "C3D_HIGHCPU_16"
    | "C3D_HIGHCPU_30"
    | "C3D_HIGHCPU_60"
    | "C3D_HIGHCPU_90"
    | "C3D_HIGHCPU_180"
    | "C3D_HIGHCPU_360"
    | "C3D_HIGHMEM_8"
    | "C3D_HIGHMEM_16"
    | "C3D_HIGHMEM_30"
    | "C3D_HIGHMEM_60"
    | "C3D_HIGHMEM_90"
    | "C3D_HIGHMEM_180"
    | "C3D_HIGHMEM_360"
    | (string & {});
}

export const CpuMetric: Schema.Schema<CpuMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trackingLabels: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      cpuType: Schema.optional(Schema.String),
      coreSec: Schema.optional(Schema.String),
      coreNumber: Schema.optional(Schema.String),
      machineSpec: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "CpuMetric" }) as any as Schema.Schema<CpuMetric>;

export interface TpuMetric {
  /** Required. Type of TPU, e.g. TPU_V2, TPU_V3_POD. */
  tpuType?:
    | "UNKNOWN_TPU_TYPE"
    | "TPU_V2_POD"
    | "TPU_V2"
    | "TPU_V3_POD"
    | "TPU_V3"
    | "TPU_V5_LITEPOD"
    | (string & {});
  /** Required. Seconds of TPU usage, e.g. 3600. */
  tpuSec?: string;
}

export const TpuMetric: Schema.Schema<TpuMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tpuType: Schema.optional(Schema.String),
      tpuSec: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "TpuMetric" }) as any as Schema.Schema<TpuMetric>;

export interface DiskMetric {
  /** Required. Seconds of physical disk usage, e.g. 3600. */
  gibSec?: string;
  /** Required. Type of Disk, e.g. REGIONAL_SSD. */
  diskType?:
    | "UNKNOWN_DISK_TYPE"
    | "REGIONAL_SSD"
    | "REGIONAL_STORAGE"
    | "PD_SSD"
    | "PD_STANDARD"
    | "STORAGE_SNAPSHOT"
    | (string & {});
}

export const DiskMetric: Schema.Schema<DiskMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gibSec: Schema.optional(Schema.String),
      diskType: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "DiskMetric" }) as any as Schema.Schema<DiskMetric>;

export interface InfraUsage {
  /** Aggregated ram metrics since requested start_time. */
  ramMetrics?: Array<RamMetric>;
  /** Aggregated gpu metrics since requested start_time. */
  gpuMetrics?: Array<GpuMetric>;
  /** Aggregated core metrics since requested start_time. */
  cpuMetrics?: Array<CpuMetric>;
  /** Aggregated tpu metrics since requested start_time. */
  tpuMetrics?: Array<TpuMetric>;
  /** Aggregated persistent disk metrics since requested start_time. */
  diskMetrics?: Array<DiskMetric>;
}

export const InfraUsage: Schema.Schema<InfraUsage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ramMetrics: Schema.optional(Schema.Array(RamMetric)),
      gpuMetrics: Schema.optional(Schema.Array(GpuMetric)),
      cpuMetrics: Schema.optional(Schema.Array(CpuMetric)),
      tpuMetrics: Schema.optional(Schema.Array(TpuMetric)),
      diskMetrics: Schema.optional(Schema.Array(DiskMetric)),
    }),
  ).annotate({ identifier: "InfraUsage" }) as any as Schema.Schema<InfraUsage>;

export interface XPSVisionTrainingOperationMetadata {
  /** Aggregated infra usage within certain time period, for billing report purpose if XAI is enable in training request. */
  explanationUsage?: InfraUsage;
}

export const XPSVisionTrainingOperationMetadata: Schema.Schema<XPSVisionTrainingOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      explanationUsage: Schema.optional(InfraUsage),
    }),
  ).annotate({
    identifier: "XPSVisionTrainingOperationMetadata",
  }) as any as Schema.Schema<XPSVisionTrainingOperationMetadata>;

export interface XPSXpsOperationMetadata {
  tablesTrainingOperationMetadata?: XPSTablesTrainingOperationMetadata;
  videoTrainingOperationMetadata?: XPSVideoTrainingOperationMetadata;
  /** Metrics for the operation. By the time the operation is terminated (whether succeeded or failed) as returned from XPS, AutoML BE assumes the metrics are finalized. AutoML BE transparently posts the metrics to Chemist if it's not empty, regardless of the response content or error type. If user is supposed to be charged in case of cancellation/error, this field should be set. In the case where the type of LRO doesn't require any billing, this field should be left unset. */
  reportingMetrics?: XPSReportingMetrics;
  videoBatchPredictOperationMetadata?: XPSVideoBatchPredictOperationMetadata;
  /** Optional. XPS server can opt to provide example count of the long running operation (e.g. training, data importing, batch prediction). */
  exampleCount?: string;
  visionTrainingOperationMetadata?: XPSVisionTrainingOperationMetadata;
}

export const XPSXpsOperationMetadata: Schema.Schema<XPSXpsOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tablesTrainingOperationMetadata: Schema.optional(
        XPSTablesTrainingOperationMetadata,
      ),
      videoTrainingOperationMetadata: Schema.optional(
        XPSVideoTrainingOperationMetadata,
      ),
      reportingMetrics: Schema.optional(XPSReportingMetrics),
      videoBatchPredictOperationMetadata: Schema.optional(
        XPSVideoBatchPredictOperationMetadata,
      ),
      exampleCount: Schema.optional(Schema.String),
      visionTrainingOperationMetadata: Schema.optional(
        XPSVisionTrainingOperationMetadata,
      ),
    }),
  ).annotate({
    identifier: "XPSXpsOperationMetadata",
  }) as any as Schema.Schema<XPSXpsOperationMetadata>;

export interface XPSBoundingBoxMetricsEntryConfidenceMetricsEntry {
  /** The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** Precision for the given confidence threshold. */
  precision?: number;
  /** The harmonic mean of recall and precision. */
  f1Score?: number;
  /** Recall for the given confidence threshold. */
  recall?: number;
}

export const XPSBoundingBoxMetricsEntryConfidenceMetricsEntry: Schema.Schema<XPSBoundingBoxMetricsEntryConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      confidenceThreshold: Schema.optional(Schema.Number),
      precision: Schema.optional(Schema.Number),
      f1Score: Schema.optional(Schema.Number),
      recall: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSBoundingBoxMetricsEntryConfidenceMetricsEntry",
  }) as any as Schema.Schema<XPSBoundingBoxMetricsEntryConfidenceMetricsEntry>;

export interface XPSBoundingBoxMetricsEntry {
  /** The intersection-over-union threshold value used to compute this metrics entry. */
  iouThreshold?: number;
  /** Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  confidenceMetricsEntries?: Array<XPSBoundingBoxMetricsEntryConfidenceMetricsEntry>;
  /** The mean average precision. */
  meanAveragePrecision?: number;
}

export const XPSBoundingBoxMetricsEntry: Schema.Schema<XPSBoundingBoxMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      iouThreshold: Schema.optional(Schema.Number),
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(XPSBoundingBoxMetricsEntryConfidenceMetricsEntry),
      ),
      meanAveragePrecision: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSBoundingBoxMetricsEntry",
  }) as any as Schema.Schema<XPSBoundingBoxMetricsEntry>;

export interface XPSTrackMetricsEntryConfidenceMetricsEntry {
  /** Output only. The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** Output only. Tracking recall. */
  trackingRecall?: number;
  /** Output only. Bounding box intersection-over-union precision. Measures how well the bounding boxes overlap between each other (e.g. complete overlap or just barely above iou_threshold). */
  boundingBoxIou?: number;
  /** Output only. Mismatch rate, which measures the tracking consistency, i.e. correctness of instance ID continuity. */
  mismatchRate?: number;
  /** Output only. Tracking precision. */
  trackingPrecision?: number;
}

export const XPSTrackMetricsEntryConfidenceMetricsEntry: Schema.Schema<XPSTrackMetricsEntryConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      confidenceThreshold: Schema.optional(Schema.Number),
      trackingRecall: Schema.optional(Schema.Number),
      boundingBoxIou: Schema.optional(Schema.Number),
      mismatchRate: Schema.optional(Schema.Number),
      trackingPrecision: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTrackMetricsEntryConfidenceMetricsEntry",
  }) as any as Schema.Schema<XPSTrackMetricsEntryConfidenceMetricsEntry>;

export interface XPSTrackMetricsEntry {
  /** Output only. The mean average precision over all confidence thresholds. */
  meanTrackingAveragePrecision?: number;
  /** Output only. The mean bounding box iou over all confidence thresholds. */
  meanBoundingBoxIou?: number;
  /** Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. */
  confidenceMetricsEntries?: Array<XPSTrackMetricsEntryConfidenceMetricsEntry>;
  /** Output only. The mean mismatch rate over all confidence thresholds. */
  meanMismatchRate?: number;
  /** Output only. The intersection-over-union threshold value between bounding boxes across frames used to compute this metric entry. */
  iouThreshold?: number;
}

export const XPSTrackMetricsEntry: Schema.Schema<XPSTrackMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      meanTrackingAveragePrecision: Schema.optional(Schema.Number),
      meanBoundingBoxIou: Schema.optional(Schema.Number),
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(XPSTrackMetricsEntryConfidenceMetricsEntry),
      ),
      meanMismatchRate: Schema.optional(Schema.Number),
      iouThreshold: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTrackMetricsEntry",
  }) as any as Schema.Schema<XPSTrackMetricsEntry>;

export interface XPSVideoObjectTrackingEvaluationMetrics {
  /** Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  boundingBoxMetricsEntries?: Array<XPSBoundingBoxMetricsEntry>;
  /** Output only. The single metric for tracks accuracy evaluation: the mean_average_precision averaged over all track_metrics_entries. */
  trackMeanAveragePrecision?: number;
  /** Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
  boundingBoxMeanAveragePrecision?: number;
  /** Output only. The single metric for tracking consistency evaluation: the mean_mismatch_rate averaged over all track_metrics_entries. */
  trackMeanMismatchRate?: number;
  /** The number of video frames used for model evaluation. */
  evaluatedFrameCount?: number;
  /** The number of bounding boxes used for model evaluation. */
  evaluatedBoundingboxCount?: number;
  /** Output only. The single metric for tracks bounding box iou evaluation: the mean_bounding_box_iou averaged over all track_metrics_entries. */
  trackMeanBoundingBoxIou?: number;
  /** The number of tracks used for model evaluation. */
  evaluatedTrackCount?: number;
  /** Output only. The tracks match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  trackMetricsEntries?: Array<XPSTrackMetricsEntry>;
}

export const XPSVideoObjectTrackingEvaluationMetrics: Schema.Schema<XPSVideoObjectTrackingEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      boundingBoxMetricsEntries: Schema.optional(
        Schema.Array(XPSBoundingBoxMetricsEntry),
      ),
      trackMeanAveragePrecision: Schema.optional(Schema.Number),
      boundingBoxMeanAveragePrecision: Schema.optional(Schema.Number),
      trackMeanMismatchRate: Schema.optional(Schema.Number),
      evaluatedFrameCount: Schema.optional(Schema.Number),
      evaluatedBoundingboxCount: Schema.optional(Schema.Number),
      trackMeanBoundingBoxIou: Schema.optional(Schema.Number),
      evaluatedTrackCount: Schema.optional(Schema.Number),
      trackMetricsEntries: Schema.optional(Schema.Array(XPSTrackMetricsEntry)),
    }),
  ).annotate({
    identifier: "XPSVideoObjectTrackingEvaluationMetrics",
  }) as any as Schema.Schema<XPSVideoObjectTrackingEvaluationMetrics>;

export interface XPSImageModelServingSpecModelThroughputEstimation {
  computeEngineAcceleratorType?:
    | "UNSPECIFIED"
    | "NVIDIA_TESLA_K80"
    | "NVIDIA_TESLA_P100"
    | "NVIDIA_TESLA_V100"
    | "NVIDIA_TESLA_P4"
    | "NVIDIA_TESLA_T4"
    | "NVIDIA_TESLA_A100"
    | "NVIDIA_A100_80GB"
    | "NVIDIA_L4"
    | "NVIDIA_H100_80GB"
    | "NVIDIA_H100_MEGA_80GB"
    | "NVIDIA_H200_141GB"
    | "NVIDIA_B200"
    | "NVIDIA_GB200"
    | "TPU_V2"
    | "TPU_V3"
    | "TPU_V4_POD"
    | "TPU_V5_LITEPOD"
    | (string & {});
  /** The approximate qps a deployed node can serve. */
  nodeQps?: number;
  /** Estimated latency. */
  latencyInMilliseconds?: number;
  servomaticPartitionType?:
    | "PARTITION_TYPE_UNSPECIFIED"
    | "PARTITION_ZERO"
    | "PARTITION_REDUCED_HOMING"
    | "PARTITION_JELLYFISH"
    | "PARTITION_CPU"
    | "PARTITION_CUSTOM_STORAGE_CPU"
    | (string & {});
}

export const XPSImageModelServingSpecModelThroughputEstimation: Schema.Schema<XPSImageModelServingSpecModelThroughputEstimation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      computeEngineAcceleratorType: Schema.optional(Schema.String),
      nodeQps: Schema.optional(Schema.Number),
      latencyInMilliseconds: Schema.optional(Schema.Number),
      servomaticPartitionType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSImageModelServingSpecModelThroughputEstimation",
  }) as any as Schema.Schema<XPSImageModelServingSpecModelThroughputEstimation>;

export interface XPSFloat64StatsHistogramBucket {
  /** The number of data values that are in the bucket, i.e. are between min and max values. */
  count?: string;
  /** The minimum value of the bucket, inclusive. */
  min?: number;
  /** The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive. */
  max?: number;
}

export const XPSFloat64StatsHistogramBucket: Schema.Schema<XPSFloat64StatsHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.String),
      min: Schema.optional(Schema.Number),
      max: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSFloat64StatsHistogramBucket",
  }) as any as Schema.Schema<XPSFloat64StatsHistogramBucket>;

export interface XPSFloat64Stats {
  /** Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values. */
  quantiles?: Array<number>;
  /** The mean of the series. */
  mean?: number;
  /** Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`. */
  histogramBuckets?: Array<XPSFloat64StatsHistogramBucket>;
  /** The standard deviation of the series. */
  standardDeviation?: number;
  commonStats?: XPSCommonStats;
}

export const XPSFloat64Stats: Schema.Schema<XPSFloat64Stats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      quantiles: Schema.optional(Schema.Array(Schema.Number)),
      mean: Schema.optional(Schema.Number),
      histogramBuckets: Schema.optional(
        Schema.Array(XPSFloat64StatsHistogramBucket),
      ),
      standardDeviation: Schema.optional(Schema.Number),
      commonStats: Schema.optional(XPSCommonStats),
    }),
  ).annotate({
    identifier: "XPSFloat64Stats",
  }) as any as Schema.Schema<XPSFloat64Stats>;

export interface XPSStructStats {
  /** Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs. */
  fieldStats?: Record<string, XPSDataStats>;
  commonStats?: XPSCommonStats;
}

export const XPSStructStats: Schema.Schema<XPSStructStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fieldStats: Schema.optional(Schema.Record(Schema.String, XPSDataStats)),
      commonStats: Schema.optional(XPSCommonStats),
    }),
  ).annotate({
    identifier: "XPSStructStats",
  }) as any as Schema.Schema<XPSStructStats>;

export interface XPSArrayStats {
  /** Stats of all the values of all arrays, as if they were a single long series of data. The type depends on the element type of the array. */
  memberStats?: XPSDataStats;
  commonStats?: XPSCommonStats;
}

export const XPSArrayStats: Schema.Schema<XPSArrayStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      memberStats: Schema.optional(XPSDataStats),
      commonStats: Schema.optional(XPSCommonStats),
    }),
  ).annotate({
    identifier: "XPSArrayStats",
  }) as any as Schema.Schema<XPSArrayStats>;

export interface XPSStringStatsUnigramStats {
  /** The unigram. */
  value?: string;
  /** The number of occurrences of this unigram in the series. */
  count?: string;
}

export const XPSStringStatsUnigramStats: Schema.Schema<XPSStringStatsUnigramStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      value: Schema.optional(Schema.String),
      count: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSStringStatsUnigramStats",
  }) as any as Schema.Schema<XPSStringStatsUnigramStats>;

export interface XPSStringStats {
  commonStats?: XPSCommonStats;
  /** The statistics of the top 20 unigrams, ordered by StringStats.UnigramStats.count. */
  topUnigramStats?: Array<XPSStringStatsUnigramStats>;
}

export const XPSStringStats: Schema.Schema<XPSStringStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      commonStats: Schema.optional(XPSCommonStats),
      topUnigramStats: Schema.optional(
        Schema.Array(XPSStringStatsUnigramStats),
      ),
    }),
  ).annotate({
    identifier: "XPSStringStats",
  }) as any as Schema.Schema<XPSStringStats>;

export interface XPSCategoryStatsSingleCategoryStats {
  /** The number of occurrences of this value in the series. */
  count?: string;
  /** The CATEGORY value. */
  value?: string;
}

export const XPSCategoryStatsSingleCategoryStats: Schema.Schema<XPSCategoryStatsSingleCategoryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.String),
      value: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSCategoryStatsSingleCategoryStats",
  }) as any as Schema.Schema<XPSCategoryStatsSingleCategoryStats>;

export interface XPSCategoryStats {
  /** The statistics of the top 20 CATEGORY values, ordered by CategoryStats.SingleCategoryStats.count. */
  topCategoryStats?: Array<XPSCategoryStatsSingleCategoryStats>;
  commonStats?: XPSCommonStats;
}

export const XPSCategoryStats: Schema.Schema<XPSCategoryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      topCategoryStats: Schema.optional(
        Schema.Array(XPSCategoryStatsSingleCategoryStats),
      ),
      commonStats: Schema.optional(XPSCommonStats),
    }),
  ).annotate({
    identifier: "XPSCategoryStats",
  }) as any as Schema.Schema<XPSCategoryStats>;

export interface XPSDataStats {
  /** The statistics for TIMESTAMP DataType. */
  timestampStats?: XPSTimestampStats;
  /** The number of values that are null. */
  nullValueCount?: string;
  /** The statistics for FLOAT64 DataType. */
  float64Stats?: XPSFloat64Stats;
  /** The statistics for STRUCT DataType. */
  structStats?: XPSStructStats;
  /** The statistics for ARRAY DataType. */
  arrayStats?: XPSArrayStats;
  /** The number of distinct values. */
  distinctValueCount?: string;
  /** The statistics for STRING DataType. */
  stringStats?: XPSStringStats;
  /** The number of values that are valid. */
  validValueCount?: string;
  /** The statistics for CATEGORY DataType. */
  categoryStats?: XPSCategoryStats;
}

export const XPSDataStats: Schema.Schema<XPSDataStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      timestampStats: Schema.optional(XPSTimestampStats),
      nullValueCount: Schema.optional(Schema.String),
      float64Stats: Schema.optional(XPSFloat64Stats),
      structStats: Schema.optional(XPSStructStats),
      arrayStats: Schema.optional(XPSArrayStats),
      distinctValueCount: Schema.optional(Schema.String),
      stringStats: Schema.optional(XPSStringStats),
      validValueCount: Schema.optional(Schema.String),
      categoryStats: Schema.optional(XPSCategoryStats),
    }),
  ).annotate({
    identifier: "XPSDataStats",
  }) as any as Schema.Schema<XPSDataStats>;

export interface XPSColumnSpecForecastingMetadata {
  /** The type of the column for FORECASTING model training purposes. */
  columnType?:
    | "COLUMN_TYPE_UNSPECIFIED"
    | "KEY"
    | "KEY_METADATA"
    | "TIME_SERIES_AVAILABLE_PAST_ONLY"
    | "TIME_SERIES_AVAILABLE_PAST_AND_FUTURE"
    | (string & {});
}

export const XPSColumnSpecForecastingMetadata: Schema.Schema<XPSColumnSpecForecastingMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      columnType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSColumnSpecForecastingMetadata",
  }) as any as Schema.Schema<XPSColumnSpecForecastingMetadata>;

export interface XPSCorrelationStats {
  /** The correlation value using the Cramer's V measure. */
  cramersV?: number;
}

export const XPSCorrelationStats: Schema.Schema<XPSCorrelationStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      cramersV: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSCorrelationStats",
  }) as any as Schema.Schema<XPSCorrelationStats>;

export interface XPSColumnSpecCorrelatedColumn {
  columnId?: number;
  correlationStats?: XPSCorrelationStats;
}

export const XPSColumnSpecCorrelatedColumn: Schema.Schema<XPSColumnSpecCorrelatedColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      columnId: Schema.optional(Schema.Number),
      correlationStats: Schema.optional(XPSCorrelationStats),
    }),
  ).annotate({
    identifier: "XPSColumnSpecCorrelatedColumn",
  }) as any as Schema.Schema<XPSColumnSpecCorrelatedColumn>;

export interface XPSColumnSpec {
  /** The unique id of the column. When Preprocess, the Tables BE will popuate the order id of the column, which reflects the order of the column inside the table, i.e. 0 means the first column in the table, N-1 means the last column. AutoML BE will persist this order id in Spanner and set the order id here when calling RefreshTablesStats and Train. Note: it's different than the column_spec_id that is generated in AutoML BE. */
  columnId?: number;
  /** The display name of the column. It's outputed in Preprocess and a required input for RefreshTablesStats and Train. */
  displayName?: string;
  /** The data stats of the column. It's outputed in RefreshTablesStats and a required input for Train. */
  dataStats?: XPSDataStats;
  forecastingMetadata?: XPSColumnSpecForecastingMetadata;
  /** It's outputed in RefreshTablesStats, and a required input in Train. */
  topCorrelatedColumns?: Array<XPSColumnSpecCorrelatedColumn>;
  /** The data type of the column. It's outputed in Preprocess rpc and a required input for RefreshTablesStats and Train. */
  dataType?: XPSDataType;
}

export const XPSColumnSpec: Schema.Schema<XPSColumnSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      columnId: Schema.optional(Schema.Number),
      displayName: Schema.optional(Schema.String),
      dataStats: Schema.optional(XPSDataStats),
      forecastingMetadata: Schema.optional(XPSColumnSpecForecastingMetadata),
      topCorrelatedColumns: Schema.optional(
        Schema.Array(XPSColumnSpecCorrelatedColumn),
      ),
      dataType: Schema.optional(XPSDataType),
    }),
  ).annotate({
    identifier: "XPSColumnSpec",
  }) as any as Schema.Schema<XPSColumnSpec>;

export interface XPSTableSpec {
  /** The number of rows in the table. */
  rowCount?: string;
  /** Mapping from column id to column spec. */
  columnSpecs?: Record<string, XPSColumnSpec>;
  /** The total size of imported data of the table. */
  importedDataSizeInBytes?: string;
  /** The id of the time column. */
  timeColumnId?: number;
  /** The number of valid rows. */
  validRowCount?: string;
}

export const XPSTableSpec: Schema.Schema<XPSTableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      rowCount: Schema.optional(Schema.String),
      columnSpecs: Schema.optional(Schema.Record(Schema.String, XPSColumnSpec)),
      importedDataSizeInBytes: Schema.optional(Schema.String),
      timeColumnId: Schema.optional(Schema.Number),
      validRowCount: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSTableSpec",
  }) as any as Schema.Schema<XPSTableSpec>;

export interface XPSTablesDatasetMetadata {
  /** Primary table. */
  primaryTableSpec?: XPSTableSpec;
  /** Id the column to split the table. */
  mlUseColumnId?: number;
  /** Id of the primary table column that should be used as the weight column. */
  weightColumnId?: number;
  /** (the column id : its CorrelationStats with target column). */
  targetColumnCorrelations?: Record<string, XPSCorrelationStats>;
  /** Id of the primary table column that should be used as the training label. */
  targetColumnId?: number;
}

export const XPSTablesDatasetMetadata: Schema.Schema<XPSTablesDatasetMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      primaryTableSpec: Schema.optional(XPSTableSpec),
      mlUseColumnId: Schema.optional(Schema.Number),
      weightColumnId: Schema.optional(Schema.Number),
      targetColumnCorrelations: Schema.optional(
        Schema.Record(Schema.String, XPSCorrelationStats),
      ),
      targetColumnId: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTablesDatasetMetadata",
  }) as any as Schema.Schema<XPSTablesDatasetMetadata>;

export interface XPSSpeechModelSpecSubModelSpec {
  /** In S3, Recognition ClientContextId.client_id */
  clientId?: string;
  /** In S3, Recognition ClientContextId.context_id */
  contextId?: string;
  /** Type of the biasing model. */
  biasingModelType?:
    | "BIASING_MODEL_TYPE_UNSPECIFIED"
    | "COMMAND_AND_SEARCH"
    | "PHONE_CALL"
    | "VIDEO"
    | "DEFAULT"
    | (string & {});
  /** If true then it means we have an enhanced version of the biasing models. */
  isEnhancedModel?: boolean;
}

export const XPSSpeechModelSpecSubModelSpec: Schema.Schema<XPSSpeechModelSpecSubModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      clientId: Schema.optional(Schema.String),
      contextId: Schema.optional(Schema.String),
      biasingModelType: Schema.optional(Schema.String),
      isEnhancedModel: Schema.optional(Schema.Boolean),
    }),
  ).annotate({
    identifier: "XPSSpeechModelSpecSubModelSpec",
  }) as any as Schema.Schema<XPSSpeechModelSpecSubModelSpec>;

export interface XPSDockerFormat {
  /** Optional. Additional gpu information describing the requirements for the to be exported model files. */
  gpuArchitecture?:
    | "GPU_ARCHITECTURE_UNSPECIFIED"
    | "GPU_ARCHITECTURE_NVIDIA"
    | (string & {});
  /** Optional. Additional cpu information describing the requirements for the to be exported model files. */
  cpuArchitecture?:
    | "CPU_ARCHITECTURE_UNSPECIFIED"
    | "CPU_ARCHITECTURE_X86_64"
    | (string & {});
}

export const XPSDockerFormat: Schema.Schema<XPSDockerFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gpuArchitecture: Schema.optional(Schema.String),
      cpuArchitecture: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSDockerFormat",
  }) as any as Schema.Schema<XPSDockerFormat>;

export interface XPSRegressionMetricsEntry {
  /** The observed value for a row in the dataset. */
  predictedValue?: number;
  /** The actual target value for a row in the dataset. */
  trueValue?: number;
}

export const XPSRegressionMetricsEntry: Schema.Schema<XPSRegressionMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      predictedValue: Schema.optional(Schema.Number),
      trueValue: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSRegressionMetricsEntry",
  }) as any as Schema.Schema<XPSRegressionMetricsEntry>;

export interface XPSRegressionEvaluationMetrics {
  /** Mean absolute percentage error. Only set if all ground truth values are positive. */
  meanAbsolutePercentageError?: number;
  /** R squared. */
  rSquared?: number;
  /** Root Mean Squared Error (RMSE). */
  rootMeanSquaredError?: number;
  /** Mean Absolute Error (MAE). */
  meanAbsoluteError?: number;
  /** Root mean squared log error. */
  rootMeanSquaredLogError?: number;
  /** A list of actual versus predicted points for the model being evaluated. */
  regressionMetricsEntries?: Array<XPSRegressionMetricsEntry>;
}

export const XPSRegressionEvaluationMetrics: Schema.Schema<XPSRegressionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      meanAbsolutePercentageError: Schema.optional(Schema.Number),
      rSquared: Schema.optional(Schema.Number),
      rootMeanSquaredError: Schema.optional(Schema.Number),
      meanAbsoluteError: Schema.optional(Schema.Number),
      rootMeanSquaredLogError: Schema.optional(Schema.Number),
      regressionMetricsEntries: Schema.optional(
        Schema.Array(XPSRegressionMetricsEntry),
      ),
    }),
  ).annotate({
    identifier: "XPSRegressionEvaluationMetrics",
  }) as any as Schema.Schema<XPSRegressionEvaluationMetrics>;

export interface XPSVideoActionMetricsEntryConfidenceMetricsEntry {
  /** Output only. Recall for the given confidence threshold. */
  recall?: number;
  /** Output only. Precision for the given confidence threshold. */
  precision?: number;
  /** Output only. The harmonic mean of recall and precision. */
  f1Score?: number;
  /** Output only. The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
}

export const XPSVideoActionMetricsEntryConfidenceMetricsEntry: Schema.Schema<XPSVideoActionMetricsEntryConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      recall: Schema.optional(Schema.Number),
      precision: Schema.optional(Schema.Number),
      f1Score: Schema.optional(Schema.Number),
      confidenceThreshold: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSVideoActionMetricsEntryConfidenceMetricsEntry",
  }) as any as Schema.Schema<XPSVideoActionMetricsEntryConfidenceMetricsEntry>;

export interface XPSVideoActionMetricsEntry {
  /** This VideoActionMetricsEntry is calculated based on this prediction window length. If the predicted action's timestamp is inside the time window whose center is the ground truth action's timestamp with this specific length, the prediction result is treated as a true positive. */
  precisionWindowLength?: string;
  /** The mean average precision. */
  meanAveragePrecision?: number;
  /** Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. */
  confidenceMetricsEntries?: Array<XPSVideoActionMetricsEntryConfidenceMetricsEntry>;
}

export const XPSVideoActionMetricsEntry: Schema.Schema<XPSVideoActionMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      precisionWindowLength: Schema.optional(Schema.String),
      meanAveragePrecision: Schema.optional(Schema.Number),
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(XPSVideoActionMetricsEntryConfidenceMetricsEntry),
      ),
    }),
  ).annotate({
    identifier: "XPSVideoActionMetricsEntry",
  }) as any as Schema.Schema<XPSVideoActionMetricsEntry>;

export interface XPSVideoActionRecognitionEvaluationMetrics {
  /** Output only. The number of ground truth actions used to create this evaluation. */
  evaluatedActionCount?: number;
  /** Output only. The metric entries for precision window lengths: 1s,2s,3s,4s, 5s. */
  videoActionMetricsEntries?: Array<XPSVideoActionMetricsEntry>;
}

export const XPSVideoActionRecognitionEvaluationMetrics: Schema.Schema<XPSVideoActionRecognitionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      evaluatedActionCount: Schema.optional(Schema.Number),
      videoActionMetricsEntries: Schema.optional(
        Schema.Array(XPSVideoActionMetricsEntry),
      ),
    }),
  ).annotate({
    identifier: "XPSVideoActionRecognitionEvaluationMetrics",
  }) as any as Schema.Schema<XPSVideoActionRecognitionEvaluationMetrics>;

export interface XPSVisionErrorAnalysisConfig {
  /** The query type used in retrieval. The enum values are frozen in the foreseeable future. */
  queryType?:
    | "QUERY_TYPE_UNSPECIFIED"
    | "QUERY_TYPE_ALL_SIMILAR"
    | "QUERY_TYPE_SAME_CLASS_SIMILAR"
    | "QUERY_TYPE_SAME_CLASS_DISSIMILAR"
    | (string & {});
  /** The number of query examples in error analysis. */
  exampleCount?: number;
}

export const XPSVisionErrorAnalysisConfig: Schema.Schema<XPSVisionErrorAnalysisConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      queryType: Schema.optional(Schema.String),
      exampleCount: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSVisionErrorAnalysisConfig",
  }) as any as Schema.Schema<XPSVisionErrorAnalysisConfig>;

export interface XPSModelArtifactItem {
  /** The Google Cloud Storage URI that stores the model binary files. */
  gcsUri?: string;
  /** The model artifact format. */
  artifactFormat?:
    | "ARTIFACT_FORMAT_UNSPECIFIED"
    | "TF_CHECKPOINT"
    | "TF_SAVED_MODEL"
    | "TF_LITE"
    | "EDGE_TPU_TF_LITE"
    | "TF_JS"
    | "CORE_ML"
    | (string & {});
}

export const XPSModelArtifactItem: Schema.Schema<XPSModelArtifactItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      gcsUri: Schema.optional(Schema.String),
      artifactFormat: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSModelArtifactItem",
  }) as any as Schema.Schema<XPSModelArtifactItem>;

export interface XPSVideoModelArtifactSpec {
  /** The model binary files in different formats for model export. */
  exportArtifact?: Array<XPSModelArtifactItem>;
  /** The default model binary file used for serving (e.g. batch predict) via public Cloud AI Platform API. */
  servingArtifact?: XPSModelArtifactItem;
}

export const XPSVideoModelArtifactSpec: Schema.Schema<XPSVideoModelArtifactSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exportArtifact: Schema.optional(Schema.Array(XPSModelArtifactItem)),
      servingArtifact: Schema.optional(XPSModelArtifactItem),
    }),
  ).annotate({
    identifier: "XPSVideoModelArtifactSpec",
  }) as any as Schema.Schema<XPSVideoModelArtifactSpec>;

export interface XPSVideoClassificationTrainResponse {
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSVideoModelArtifactSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
}

export const XPSVideoClassificationTrainResponse: Schema.Schema<XPSVideoClassificationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modelArtifactSpec: Schema.optional(XPSVideoModelArtifactSpec),
      trainCostNodeSeconds: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSVideoClassificationTrainResponse",
  }) as any as Schema.Schema<XPSVideoClassificationTrainResponse>;

export interface XPSTranslationTrainResponse {
  /** Type of the model. */
  modelType?: "MODEL_TYPE_UNSPECIFIED" | "LEGACY" | "CURRENT" | (string & {});
}

export const XPSTranslationTrainResponse: Schema.Schema<XPSTranslationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modelType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSTranslationTrainResponse",
  }) as any as Schema.Schema<XPSTranslationTrainResponse>;

export interface XPSFileSpec {
  /** Single file path, or file pattern of format "/path/to/file@shard_count". E.g. /cns/cell-d/somewhere/file@2 is expanded to two files: /cns/cell-d/somewhere/file-00000-of-00002 and /cns/cell-d/somewhere/file-00001-of-00002. */
  fileSpec?: string;
  /** Deprecated. Use file_spec. */
  directoryPath?: string;
  fileFormat?:
    | "FILE_FORMAT_UNKNOWN"
    | "FILE_FORMAT_SSTABLE"
    | "FILE_FORMAT_TRANSLATION_RKV"
    | "FILE_FORMAT_RECORDIO"
    | "FILE_FORMAT_RAW_CSV"
    | "FILE_FORMAT_RAW_CAPACITOR"
    | (string & {});
  /** Deprecated. Use file_spec. */
  singleFilePath?: string;
}

export const XPSFileSpec: Schema.Schema<XPSFileSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fileSpec: Schema.optional(Schema.String),
      directoryPath: Schema.optional(Schema.String),
      fileFormat: Schema.optional(Schema.String),
      singleFilePath: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSFileSpec",
  }) as any as Schema.Schema<XPSFileSpec>;

export interface XPSExampleSet {
  /** File spec of the examples or input sources. */
  fileSpec?: XPSFileSpec;
  /** Number of input sources. */
  numInputSources?: string;
  /** Number of examples. */
  numExamples?: string;
  /** Fingerprint of the example set. */
  fingerprint?: string;
}

export const XPSExampleSet: Schema.Schema<XPSExampleSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fileSpec: Schema.optional(XPSFileSpec),
      numInputSources: Schema.optional(Schema.String),
      numExamples: Schema.optional(Schema.String),
      fingerprint: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSExampleSet",
  }) as any as Schema.Schema<XPSExampleSet>;

export interface XPSDataErrors {
  /** Type of the error. */
  errorType?:
    | "ERROR_TYPE_UNSPECIFIED"
    | "UNSUPPORTED_AUDIO_FORMAT"
    | "FILE_EXTENSION_MISMATCH_WITH_AUDIO_FORMAT"
    | "FILE_TOO_LARGE"
    | "MISSING_TRANSCRIPTION"
    | (string & {});
  /** Number of records having errors associated with the enum. */
  count?: number;
}

export const XPSDataErrors: Schema.Schema<XPSDataErrors> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errorType: Schema.optional(Schema.String),
      count: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSDataErrors",
  }) as any as Schema.Schema<XPSDataErrors>;

export interface XPSSpeechPreprocessStats {
  /** The number of words in the test data set. */
  testWordsCount?: number;
  /** The number of rows marked HUMAN_LABELLED */
  numHumanLabeledExamples?: number;
  /** The number of sentences in the test data set. */
  testSentencesCount?: number;
  /** The number of sentences in the training data set. */
  trainSentencesCount?: number;
  /** The number of rows marked as MACHINE_TRANSCRIBED */
  numMachineTranscribedExamples?: number;
  /** The number of examples labelled as TEST by Speech xps server. */
  testExamplesCount?: number;
  /** The number of words in the training data set. */
  trainWordsCount?: number;
  /** Different types of data errors and the counts associated with them. */
  dataErrors?: Array<XPSDataErrors>;
  /** The number of samples found in the previously recorded logs data. */
  numLogsExamples?: number;
  /** The number of examples labeled as TRAIN by Speech xps server. */
  trainExamplesCount?: number;
}

export const XPSSpeechPreprocessStats: Schema.Schema<XPSSpeechPreprocessStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      testWordsCount: Schema.optional(Schema.Number),
      numHumanLabeledExamples: Schema.optional(Schema.Number),
      testSentencesCount: Schema.optional(Schema.Number),
      trainSentencesCount: Schema.optional(Schema.Number),
      numMachineTranscribedExamples: Schema.optional(Schema.Number),
      testExamplesCount: Schema.optional(Schema.Number),
      trainWordsCount: Schema.optional(Schema.Number),
      dataErrors: Schema.optional(Schema.Array(XPSDataErrors)),
      numLogsExamples: Schema.optional(Schema.Number),
      trainExamplesCount: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSSpeechPreprocessStats",
  }) as any as Schema.Schema<XPSSpeechPreprocessStats>;

export interface XPSSpeechPreprocessResponse {
  /** The metrics for prebuilt speech models. They are included here because there is no prebuilt speech models stored in the AutoML. */
  prebuiltModelEvaluationMetrics?: XPSSpeechEvaluationMetrics;
  /** Stats associated with the data. */
  speechPreprocessStats?: XPSSpeechPreprocessStats;
  /** Location of shards of sstables (training data) of DataUtterance protos. */
  cnsTrainDataPath?: string;
  /** Location od shards of sstables (test data) of DataUtterance protos. */
  cnsTestDataPath?: string;
}

export const XPSSpeechPreprocessResponse: Schema.Schema<XPSSpeechPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      prebuiltModelEvaluationMetrics: Schema.optional(
        XPSSpeechEvaluationMetrics,
      ),
      speechPreprocessStats: Schema.optional(XPSSpeechPreprocessStats),
      cnsTrainDataPath: Schema.optional(Schema.String),
      cnsTestDataPath: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSSpeechPreprocessResponse",
  }) as any as Schema.Schema<XPSSpeechPreprocessResponse>;

export interface XPSTablesPreprocessResponse {
  /** The table/column id, column_name and the DataTypes of the columns will be populated. */
  tablesDatasetMetadata?: XPSTablesDatasetMetadata;
}

export const XPSTablesPreprocessResponse: Schema.Schema<XPSTablesPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tablesDatasetMetadata: Schema.optional(XPSTablesDatasetMetadata),
    }),
  ).annotate({
    identifier: "XPSTablesPreprocessResponse",
  }) as any as Schema.Schema<XPSTablesPreprocessResponse>;

export interface XPSTranslationPreprocessResponse {
  /** Total example count parsed. */
  parsedExampleCount?: string;
  /** Total valid example count. */
  validExampleCount?: string;
}

export const XPSTranslationPreprocessResponse: Schema.Schema<XPSTranslationPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      parsedExampleCount: Schema.optional(Schema.String),
      validExampleCount: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSTranslationPreprocessResponse",
  }) as any as Schema.Schema<XPSTranslationPreprocessResponse>;

export interface XPSPreprocessResponse {
  /** Preprocessed examples, that are to be imported into AutoML storage. This should point to RecordIO file(s) of PreprocessedExample messages. The PreprocessedExample.mvp_training_data-s returned here are later verbatim passed to Train() call in TrainExample.mvp_training_data. */
  outputExampleSet?: XPSExampleSet;
  speechPreprocessResp?: XPSSpeechPreprocessResponse;
  tablesPreprocessResponse?: XPSTablesPreprocessResponse;
  translationPreprocessResp?: XPSTranslationPreprocessResponse;
}

export const XPSPreprocessResponse: Schema.Schema<XPSPreprocessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      outputExampleSet: Schema.optional(XPSExampleSet),
      speechPreprocessResp: Schema.optional(XPSSpeechPreprocessResponse),
      tablesPreprocessResponse: Schema.optional(XPSTablesPreprocessResponse),
      translationPreprocessResp: Schema.optional(
        XPSTranslationPreprocessResponse,
      ),
    }),
  ).annotate({
    identifier: "XPSPreprocessResponse",
  }) as any as Schema.Schema<XPSPreprocessResponse>;

export interface Document {
  /** The content of the input in string format. Cloud audit logging exempt since it is based on user data. */
  content?: string;
  /** Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error. */
  type?: "TYPE_UNSPECIFIED" | "PLAIN_TEXT" | "HTML" | (string & {});
  /** The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported. */
  gcsContentUri?: string;
  /** The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned. */
  language?: string;
}

export const Document: Schema.Schema<Document> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      content: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      gcsContentUri: Schema.optional(Schema.String),
      language: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Document" }) as any as Schema.Schema<Document>;

export interface AnalyzeEntitiesRequest {
  /** Required. Input document. */
  document?: Document;
  /** The encoding type used by the API to calculate offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnalyzeEntitiesRequest: Schema.Schema<AnalyzeEntitiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
      encodingType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnalyzeEntitiesRequest",
  }) as any as Schema.Schema<AnalyzeEntitiesRequest>;

export interface XPSTfSavedModelFormat {}

export const XPSTfSavedModelFormat: Schema.Schema<XPSTfSavedModelFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "XPSTfSavedModelFormat",
  }) as any as Schema.Schema<XPSTfSavedModelFormat>;

export interface XPSSpeechModelSpec {
  /** Required for speech xps backend. Speech xps has to use dataset_id and model_id as the primary key in db so that speech API can query the db directly. */
  datasetId?: string;
  /** Model specs for all submodels contained in this model. */
  subModelSpecs?: Array<XPSSpeechModelSpecSubModelSpec>;
  language?: string;
}

export const XPSSpeechModelSpec: Schema.Schema<XPSSpeechModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      datasetId: Schema.optional(Schema.String),
      subModelSpecs: Schema.optional(
        Schema.Array(XPSSpeechModelSpecSubModelSpec),
      ),
      language: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSSpeechModelSpec",
  }) as any as Schema.Schema<XPSSpeechModelSpec>;

export interface XPSTextComponentModel {
  /** The servomatic model version number. Populated by uCAIP BE as part of online PredictRequest. */
  versionNumber?: string;
  /** The type of trained NL submodel */
  submodelType?:
    | "TEXT_MODEL_TYPE_UNSPECIFIED"
    | "TEXT_MODEL_TYPE_DEFAULT"
    | "TEXT_MODEL_TYPE_META_ARCHITECT"
    | "TEXT_MODEL_TYPE_ATC"
    | "TEXT_MODEL_TYPE_CLARA2"
    | "TEXT_MODEL_TYPE_CHATBASE"
    | "TEXT_MODEL_TYPE_SAFT_SPAN_LABELING"
    | "TEXT_MODEL_TYPE_TEXT_EXTRACTION"
    | "TEXT_MODEL_TYPE_RELATIONSHIP_EXTRACTION"
    | "TEXT_MODEL_TYPE_COMPOSITE"
    | "TEXT_MODEL_TYPE_ALL_MODELS"
    | "TEXT_MODEL_TYPE_BERT"
    | "TEXT_MODEL_TYPE_ENC_PALM"
    | (string & {});
  /** The Cloud Storage resource path to hold online prediction model. */
  onlinePredictionModelGcsUri?: string;
  /** The name of servo model. Populated by uCAIP BE as part of online PredictRequest. */
  servoModelName?: string;
  /** The name of the trained NL submodel. */
  submodelName?: string;
  /** ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list */
  tfRuntimeVersion?: string;
  /** The partition where the model is deployed. Populated by uCAIP BE as part of online PredictRequest. */
  partition?:
    | "PARTITION_TYPE_UNSPECIFIED"
    | "PARTITION_ZERO"
    | "PARTITION_REDUCED_HOMING"
    | "PARTITION_JELLYFISH"
    | "PARTITION_CPU"
    | "PARTITION_CUSTOM_STORAGE_CPU"
    | (string & {});
  /** The Cloud Storage resource path to hold batch prediction model. */
  batchPredictionModelGcsUri?: string;
  /** The default model binary file used for serving (e.g. online predict, batch predict) via public Cloud Ai Platform API. */
  servingArtifact?: XPSModelArtifactItem;
}

export const XPSTextComponentModel: Schema.Schema<XPSTextComponentModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      versionNumber: Schema.optional(Schema.String),
      submodelType: Schema.optional(Schema.String),
      onlinePredictionModelGcsUri: Schema.optional(Schema.String),
      servoModelName: Schema.optional(Schema.String),
      submodelName: Schema.optional(Schema.String),
      tfRuntimeVersion: Schema.optional(Schema.String),
      partition: Schema.optional(Schema.String),
      batchPredictionModelGcsUri: Schema.optional(Schema.String),
      servingArtifact: Schema.optional(XPSModelArtifactItem),
    }),
  ).annotate({
    identifier: "XPSTextComponentModel",
  }) as any as Schema.Schema<XPSTextComponentModel>;

export interface XPSTextTrainResponse {
  /** Component submodels. */
  componentModel?: Array<XPSTextComponentModel>;
}

export const XPSTextTrainResponse: Schema.Schema<XPSTextTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      componentModel: Schema.optional(Schema.Array(XPSTextComponentModel)),
    }),
  ).annotate({
    identifier: "XPSTextTrainResponse",
  }) as any as Schema.Schema<XPSTextTrainResponse>;

export interface Sentence {
  /** The sentence text. */
  text?: TextSpan;
  /** For calls to AnalyzeSentiment or if AnnotateTextRequest.Features.extract_document_sentiment is set to true, this field will contain the sentiment for the sentence. */
  sentiment?: Sentiment;
}

export const Sentence: Schema.Schema<Sentence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      text: Schema.optional(TextSpan),
      sentiment: Schema.optional(Sentiment),
    }),
  ).annotate({ identifier: "Sentence" }) as any as Schema.Schema<Sentence>;

export interface XPSConfusionMatrixRow {
  /** Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the annotation_spec_id_token field. */
  exampleCount?: Array<number>;
  /** Same as above except intended to represent other counts (for e.g. for segmentation this is pixel count). NOTE(params): Only example_count or count is set (oneoff does not support repeated fields unless they are embedded inside another message). */
  count?: Array<string>;
}

export const XPSConfusionMatrixRow: Schema.Schema<XPSConfusionMatrixRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exampleCount: Schema.optional(Schema.Array(Schema.Number)),
      count: Schema.optional(Schema.Array(Schema.String)),
    }),
  ).annotate({
    identifier: "XPSConfusionMatrixRow",
  }) as any as Schema.Schema<XPSConfusionMatrixRow>;

export interface XPSTablesRegressionMetrics {
  /** Mean absolute error. */
  meanAbsoluteError?: number;
  /** Root mean squared log error. */
  rootMeanSquaredLogError?: number;
  /** A list of actual versus predicted points for the model being evaluated. */
  regressionMetricsEntries?: Array<XPSRegressionMetricsEntry>;
  /** Mean absolute percentage error, only set if all of the target column's values are positive. */
  meanAbsolutePercentageError?: number;
  /** R squared. */
  rSquared?: number;
  /** Root mean squared error. */
  rootMeanSquaredError?: number;
}

export const XPSTablesRegressionMetrics: Schema.Schema<XPSTablesRegressionMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      meanAbsoluteError: Schema.optional(Schema.Number),
      rootMeanSquaredLogError: Schema.optional(Schema.Number),
      regressionMetricsEntries: Schema.optional(
        Schema.Array(XPSRegressionMetricsEntry),
      ),
      meanAbsolutePercentageError: Schema.optional(Schema.Number),
      rSquared: Schema.optional(Schema.Number),
      rootMeanSquaredError: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTablesRegressionMetrics",
  }) as any as Schema.Schema<XPSTablesRegressionMetrics>;

export interface AnalyzeSentimentRequest {
  /** Required. Input document. */
  document?: Document;
  /** The encoding type used by the API to calculate sentence offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnalyzeSentimentRequest: Schema.Schema<AnalyzeSentimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
      encodingType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnalyzeSentimentRequest",
  }) as any as Schema.Schema<AnalyzeSentimentRequest>;

export interface XPSVideoActionRecognitionTrainResponse {
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSVideoModelArtifactSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
}

export const XPSVideoActionRecognitionTrainResponse: Schema.Schema<XPSVideoActionRecognitionTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modelArtifactSpec: Schema.optional(XPSVideoModelArtifactSpec),
      trainCostNodeSeconds: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSVideoActionRecognitionTrainResponse",
  }) as any as Schema.Schema<XPSVideoActionRecognitionTrainResponse>;

export interface XPSConfidenceMetricsEntry {
  /** Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold. */
  positionThreshold?: number;
  /** The number of model created labels that match a ground truth label. */
  truePositiveCount?: string;
  /** The recall (true positive rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
  recallAt1?: number;
  /** The harmonic mean of recall_at1 and precision_at1. */
  f1ScoreAt1?: number;
  /** False Positive Rate for the given confidence threshold. */
  falsePositiveRate?: number;
  /** The number of labels that were not created by the model, but if they would, they would not match a ground truth label. */
  trueNegativeCount?: string;
  /** Metrics are computed with an assumption that the model never return predictions with score lower than this value. */
  confidenceThreshold?: number;
  /** The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
  precisionAt1?: number;
  /** Recall (true positive rate) for the given confidence threshold. */
  recall?: number;
  /** The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
  falsePositiveRateAt1?: number;
  /** The number of ground truth labels that are not matched by a model created label. */
  falseNegativeCount?: string;
  /** The harmonic mean of recall and precision. */
  f1Score?: number;
  /** The number of model created labels that do not match a ground truth label. */
  falsePositiveCount?: string;
  /** Precision for the given confidence threshold. */
  precision?: number;
}

export const XPSConfidenceMetricsEntry: Schema.Schema<XPSConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      positionThreshold: Schema.optional(Schema.Number),
      truePositiveCount: Schema.optional(Schema.String),
      recallAt1: Schema.optional(Schema.Number),
      f1ScoreAt1: Schema.optional(Schema.Number),
      falsePositiveRate: Schema.optional(Schema.Number),
      trueNegativeCount: Schema.optional(Schema.String),
      confidenceThreshold: Schema.optional(Schema.Number),
      precisionAt1: Schema.optional(Schema.Number),
      recall: Schema.optional(Schema.Number),
      falsePositiveRateAt1: Schema.optional(Schema.Number),
      falseNegativeCount: Schema.optional(Schema.String),
      f1Score: Schema.optional(Schema.Number),
      falsePositiveCount: Schema.optional(Schema.String),
      precision: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSConfidenceMetricsEntry",
  }) as any as Schema.Schema<XPSConfidenceMetricsEntry>;

export interface XPSConfusionMatrix {
  /** For the following three repeated fields, only one is intended to be set. annotation_spec_id_token is preferable to be set. ID tokens of the annotation specs used in the confusion matrix. */
  annotationSpecIdToken?: Array<string>;
  /** Category (mainly for segmentation). Set only for image segmentation models. Note: uCAIP Image Segmentation should use annotation_spec_id_token. */
  category?: Array<number>;
  /** Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id_token`. `row[i].value[j]` is the number of examples that have ground truth of the `annotation_spec_id_token[i]` and are predicted as `annotation_spec_id_token[j]` by the model being evaluated. */
  row?: Array<XPSConfusionMatrixRow>;
  /** Sentiment labels used in the confusion matrix. Set only for text sentiment models. For AutoML Text Revamp, use `annotation_spec_id_token` instead and leave this field empty. */
  sentimentLabel?: Array<number>;
}

export const XPSConfusionMatrix: Schema.Schema<XPSConfusionMatrix> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      annotationSpecIdToken: Schema.optional(Schema.Array(Schema.String)),
      category: Schema.optional(Schema.Array(Schema.Number)),
      row: Schema.optional(Schema.Array(XPSConfusionMatrixRow)),
      sentimentLabel: Schema.optional(Schema.Array(Schema.Number)),
    }),
  ).annotate({
    identifier: "XPSConfusionMatrix",
  }) as any as Schema.Schema<XPSConfusionMatrix>;

export interface XPSClassificationEvaluationMetrics {
  /** The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. */
  auRoc?: number;
  /** The Area under precision recall curve metric based on priors. */
  baseAuPrc?: number;
  /** The Log Loss metric. */
  logLoss?: number;
  /** The Area under precision recall curve metric. */
  auPrc?: number;
  /** The number of examples used for model evaluation. */
  evaluatedExamplesCount?: number;
  /** Metrics that have confidence thresholds. Precision-recall curve can be derived from it. */
  confidenceMetricsEntries?: Array<XPSConfidenceMetricsEntry>;
  /** Confusion matrix of the evaluation. Only set for MULTICLASS classification problems where number of annotation specs is no more than 10. Only set for model level evaluation, not for evaluation per label. */
  confusionMatrix?: XPSConfusionMatrix;
}

export const XPSClassificationEvaluationMetrics: Schema.Schema<XPSClassificationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      auRoc: Schema.optional(Schema.Number),
      baseAuPrc: Schema.optional(Schema.Number),
      logLoss: Schema.optional(Schema.Number),
      auPrc: Schema.optional(Schema.Number),
      evaluatedExamplesCount: Schema.optional(Schema.Number),
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(XPSConfidenceMetricsEntry),
      ),
      confusionMatrix: Schema.optional(XPSConfusionMatrix),
    }),
  ).annotate({
    identifier: "XPSClassificationEvaluationMetrics",
  }) as any as Schema.Schema<XPSClassificationEvaluationMetrics>;

export interface XPSImageObjectDetectionEvaluationMetrics {
  /** The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had. */
  evaluatedBoundingBoxCount?: number;
  /** The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. */
  boundingBoxMetricsEntries?: Array<XPSBoundingBoxMetricsEntry>;
  /** The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
  boundingBoxMeanAveragePrecision?: number;
}

export const XPSImageObjectDetectionEvaluationMetrics: Schema.Schema<XPSImageObjectDetectionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      evaluatedBoundingBoxCount: Schema.optional(Schema.Number),
      boundingBoxMetricsEntries: Schema.optional(
        Schema.Array(XPSBoundingBoxMetricsEntry),
      ),
      boundingBoxMeanAveragePrecision: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSImageObjectDetectionEvaluationMetrics",
  }) as any as Schema.Schema<XPSImageObjectDetectionEvaluationMetrics>;

export interface XPSTextSentimentEvaluationMetrics {
  /** Output only. Recall. */
  recall?: number;
  /** Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  linearKappa?: number;
  /** Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  quadraticKappa?: number;
  /** Output only. Precision. */
  precision?: number;
  /** Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  meanSquaredError?: number;
  /** Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  meanAbsoluteError?: number;
  /** Output only. The harmonic mean of recall and precision. */
  f1Score?: number;
  /** Output only. Confusion matrix of the evaluation. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
  confusionMatrix?: XPSConfusionMatrix;
}

export const XPSTextSentimentEvaluationMetrics: Schema.Schema<XPSTextSentimentEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      recall: Schema.optional(Schema.Number),
      linearKappa: Schema.optional(Schema.Number),
      quadraticKappa: Schema.optional(Schema.Number),
      precision: Schema.optional(Schema.Number),
      meanSquaredError: Schema.optional(Schema.Number),
      meanAbsoluteError: Schema.optional(Schema.Number),
      f1Score: Schema.optional(Schema.Number),
      confusionMatrix: Schema.optional(XPSConfusionMatrix),
    }),
  ).annotate({
    identifier: "XPSTextSentimentEvaluationMetrics",
  }) as any as Schema.Schema<XPSTextSentimentEvaluationMetrics>;

export interface XPSTranslationEvaluationMetrics {
  /** BLEU score for base model. */
  baseBleuScore?: number;
  /** BLEU score. */
  bleuScore?: number;
}

export const XPSTranslationEvaluationMetrics: Schema.Schema<XPSTranslationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      baseBleuScore: Schema.optional(Schema.Number),
      bleuScore: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTranslationEvaluationMetrics",
  }) as any as Schema.Schema<XPSTranslationEvaluationMetrics>;

export interface XPSTablesConfidenceMetricsEntry {
  /** Recall = #true positives / (#true positives + #false negatives). */
  recall?: number;
  /** True positive count. */
  truePositiveCount?: string;
  /** False positive count. */
  falsePositiveCount?: string;
  /** Precision = #true positives / (#true positives + #false positives). */
  precision?: number;
  /** FPR = #false positives / (#false positives + #true negatives) */
  falsePositiveRate?: number;
  /** TPR = #true positives / (#true positives + #false negatvies) */
  truePositiveRate?: number;
  /** True negative count. */
  trueNegativeCount?: string;
  /** False negative count. */
  falseNegativeCount?: string;
  /** The harmonic mean of recall and precision. (2 * precision * recall) / (precision + recall) */
  f1Score?: number;
  /** The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
}

export const XPSTablesConfidenceMetricsEntry: Schema.Schema<XPSTablesConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      recall: Schema.optional(Schema.Number),
      truePositiveCount: Schema.optional(Schema.String),
      falsePositiveCount: Schema.optional(Schema.String),
      precision: Schema.optional(Schema.Number),
      falsePositiveRate: Schema.optional(Schema.Number),
      truePositiveRate: Schema.optional(Schema.Number),
      trueNegativeCount: Schema.optional(Schema.String),
      falseNegativeCount: Schema.optional(Schema.String),
      f1Score: Schema.optional(Schema.Number),
      confidenceThreshold: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTablesConfidenceMetricsEntry",
  }) as any as Schema.Schema<XPSTablesConfidenceMetricsEntry>;

export interface XPSTablesClassificationMetricsCurveMetrics {
  /** The Log loss metric. */
  logLoss?: number;
  /** The CATEGORY row value (for ARRAY unnested) the curve metrics are for. */
  value?: string;
  /** Metrics that have confidence thresholds. Precision-recall curve and ROC curve can be derived from them. */
  confidenceMetricsEntries?: Array<XPSTablesConfidenceMetricsEntry>;
  /** The area under receiver operating characteristic curve. */
  aucRoc?: number;
  /** The position threshold value used to compute the metrics. */
  positionThreshold?: number;
  /** The area under the precision-recall curve. */
  aucPr?: number;
}

export const XPSTablesClassificationMetricsCurveMetrics: Schema.Schema<XPSTablesClassificationMetricsCurveMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      logLoss: Schema.optional(Schema.Number),
      value: Schema.optional(Schema.String),
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(XPSTablesConfidenceMetricsEntry),
      ),
      aucRoc: Schema.optional(Schema.Number),
      positionThreshold: Schema.optional(Schema.Number),
      aucPr: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSTablesClassificationMetricsCurveMetrics",
  }) as any as Schema.Schema<XPSTablesClassificationMetricsCurveMetrics>;

export interface XPSTablesClassificationMetrics {
  /** Metrics building a curve. */
  curveMetrics?: Array<XPSTablesClassificationMetricsCurveMetrics>;
}

export const XPSTablesClassificationMetrics: Schema.Schema<XPSTablesClassificationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      curveMetrics: Schema.optional(
        Schema.Array(XPSTablesClassificationMetricsCurveMetrics),
      ),
    }),
  ).annotate({
    identifier: "XPSTablesClassificationMetrics",
  }) as any as Schema.Schema<XPSTablesClassificationMetrics>;

export interface XPSTablesEvaluationMetrics {
  /** Classification metrics. */
  classificationMetrics?: XPSTablesClassificationMetrics;
  /** Regression metrics. */
  regressionMetrics?: XPSTablesRegressionMetrics;
}

export const XPSTablesEvaluationMetrics: Schema.Schema<XPSTablesEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      classificationMetrics: Schema.optional(XPSTablesClassificationMetrics),
      regressionMetrics: Schema.optional(XPSTablesRegressionMetrics),
    }),
  ).annotate({
    identifier: "XPSTablesEvaluationMetrics",
  }) as any as Schema.Schema<XPSTablesEvaluationMetrics>;

export interface XPSTextExtractionEvaluationMetrics {
  /** Confusion matrix of the model, at the default confidence threshold (0.0). Only set for whole-model evaluation, not for evaluation per label. */
  confusionMatrix?: XPSConfusionMatrix;
  /** Values are at the highest F1 score on the precision-recall curve. Only confidence_threshold, recall, precision, and f1_score will be set. */
  bestF1ConfidenceMetrics?: XPSConfidenceMetricsEntry;
  /** If the enclosing EvaluationMetrics.label is empty, confidence_metrics_entries is an evaluation of the entire model across all labels. If the enclosing EvaluationMetrics.label is set, confidence_metrics_entries applies to that label. */
  confidenceMetricsEntries?: Array<XPSConfidenceMetricsEntry>;
  /** Only recall, precision, and f1_score will be set. */
  perLabelConfidenceMetrics?: Record<string, XPSConfidenceMetricsEntry>;
}

export const XPSTextExtractionEvaluationMetrics: Schema.Schema<XPSTextExtractionEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      confusionMatrix: Schema.optional(XPSConfusionMatrix),
      bestF1ConfidenceMetrics: Schema.optional(XPSConfidenceMetricsEntry),
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(XPSConfidenceMetricsEntry),
      ),
      perLabelConfidenceMetrics: Schema.optional(
        Schema.Record(Schema.String, XPSConfidenceMetricsEntry),
      ),
    }),
  ).annotate({
    identifier: "XPSTextExtractionEvaluationMetrics",
  }) as any as Schema.Schema<XPSTextExtractionEvaluationMetrics>;

export interface XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry {
  /** The confidence threshold value used to compute the metrics. */
  confidenceThreshold?: number;
  /** Confusion matrix of the per confidence_threshold evaluation. Pixel counts are set here. Only set for model level evaluation, not for evaluation per label. */
  confusionMatrix?: XPSConfusionMatrix;
  /** Precision for the given confidence threshold. */
  precision?: number;
  /** DSC or the F1 score: The harmonic mean of recall and precision. */
  diceScoreCoefficient?: number;
  /** Recall for the given confidence threshold. */
  recall?: number;
  /** IOU score. */
  iouScore?: number;
}

export const XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry: Schema.Schema<XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      confidenceThreshold: Schema.optional(Schema.Number),
      confusionMatrix: Schema.optional(XPSConfusionMatrix),
      precision: Schema.optional(Schema.Number),
      diceScoreCoefficient: Schema.optional(Schema.Number),
      recall: Schema.optional(Schema.Number),
      iouScore: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry",
  }) as any as Schema.Schema<XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry>;

export interface XPSImageSegmentationEvaluationMetrics {
  /** Metrics that have confidence thresholds. Precision-recall curve can be derived from it. */
  confidenceMetricsEntries?: Array<XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry>;
}

export const XPSImageSegmentationEvaluationMetrics: Schema.Schema<XPSImageSegmentationEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      confidenceMetricsEntries: Schema.optional(
        Schema.Array(
          XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry,
        ),
      ),
    }),
  ).annotate({
    identifier: "XPSImageSegmentationEvaluationMetrics",
  }) as any as Schema.Schema<XPSImageSegmentationEvaluationMetrics>;

export interface XPSEvaluationMetrics {
  videoClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  /** The label for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The label maps to AnnotationSpec.display_name in Public API protos. Only used by MVP implementation and text sentiment FULL implementation. */
  label?: string;
  /** The annotation_spec for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The value comes from the input annotations in AnnotatedExample. For MVP product or for text sentiment models where annotation_spec_id_token is not available, set label instead. */
  annotationSpecIdToken?: string;
  videoActionRecognitionEvalMetrics?: XPSVideoActionRecognitionEvaluationMetrics;
  imageObjectDetectionEvalMetrics?: XPSImageObjectDetectionEvaluationMetrics;
  tablesClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  textSentimentEvalMetrics?: XPSTextSentimentEvaluationMetrics;
  regressionEvalMetrics?: XPSRegressionEvaluationMetrics;
  translationEvalMetrics?: XPSTranslationEvaluationMetrics;
  tablesEvalMetrics?: XPSTablesEvaluationMetrics;
  textClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  videoObjectTrackingEvalMetrics?: XPSVideoObjectTrackingEvaluationMetrics;
  /** The number of examples used to create this evaluation metrics instance. */
  evaluatedExampleCount?: number;
  textExtractionEvalMetrics?: XPSTextExtractionEvaluationMetrics;
  imageSegmentationEvalMetrics?: XPSImageSegmentationEvaluationMetrics;
  imageClassificationEvalMetrics?: XPSClassificationEvaluationMetrics;
  /** The integer category label for which this evaluation metric instance had been created. Valid categories are 0 or higher. Overall model evaluation should set this to negative values (rather than implicit zero). Only used for Image Segmentation (prefer to set annotation_spec_id_token instead). Note: uCAIP Image Segmentation should use annotation_spec_id_token. */
  category?: number;
}

export const XPSEvaluationMetrics: Schema.Schema<XPSEvaluationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      videoClassificationEvalMetrics: Schema.optional(
        XPSClassificationEvaluationMetrics,
      ),
      label: Schema.optional(Schema.String),
      annotationSpecIdToken: Schema.optional(Schema.String),
      videoActionRecognitionEvalMetrics: Schema.optional(
        XPSVideoActionRecognitionEvaluationMetrics,
      ),
      imageObjectDetectionEvalMetrics: Schema.optional(
        XPSImageObjectDetectionEvaluationMetrics,
      ),
      tablesClassificationEvalMetrics: Schema.optional(
        XPSClassificationEvaluationMetrics,
      ),
      textSentimentEvalMetrics: Schema.optional(
        XPSTextSentimentEvaluationMetrics,
      ),
      regressionEvalMetrics: Schema.optional(XPSRegressionEvaluationMetrics),
      translationEvalMetrics: Schema.optional(XPSTranslationEvaluationMetrics),
      tablesEvalMetrics: Schema.optional(XPSTablesEvaluationMetrics),
      textClassificationEvalMetrics: Schema.optional(
        XPSClassificationEvaluationMetrics,
      ),
      videoObjectTrackingEvalMetrics: Schema.optional(
        XPSVideoObjectTrackingEvaluationMetrics,
      ),
      evaluatedExampleCount: Schema.optional(Schema.Number),
      textExtractionEvalMetrics: Schema.optional(
        XPSTextExtractionEvaluationMetrics,
      ),
      imageSegmentationEvalMetrics: Schema.optional(
        XPSImageSegmentationEvaluationMetrics,
      ),
      imageClassificationEvalMetrics: Schema.optional(
        XPSClassificationEvaluationMetrics,
      ),
      category: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "XPSEvaluationMetrics",
  }) as any as Schema.Schema<XPSEvaluationMetrics>;

export interface XPSEvaluationMetricsSet {
  /** Inline EvaluationMetrics - should be relatively small. For passing large quantities of exhaustive metrics, use file_spec. */
  evaluationMetrics?: Array<XPSEvaluationMetrics>;
  /** File spec containing evaluation metrics of a model, must point to RecordIO file(s) of intelligence.cloud.automl.xps.EvaluationMetrics messages. */
  fileSpec?: XPSFileSpec;
  /** Number of the evaluation metrics (usually one per label plus overall). */
  numEvaluationMetrics?: string;
}

export const XPSEvaluationMetricsSet: Schema.Schema<XPSEvaluationMetricsSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      evaluationMetrics: Schema.optional(Schema.Array(XPSEvaluationMetrics)),
      fileSpec: Schema.optional(XPSFileSpec),
      numEvaluationMetrics: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSEvaluationMetricsSet",
  }) as any as Schema.Schema<XPSEvaluationMetricsSet>;

export interface XPSTfLiteFormat {}

export const XPSTfLiteFormat: Schema.Schema<XPSTfLiteFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "XPSTfLiteFormat",
  }) as any as Schema.Schema<XPSTfLiteFormat>;

export interface XPSEdgeTpuTfLiteFormat {}

export const XPSEdgeTpuTfLiteFormat: Schema.Schema<XPSEdgeTpuTfLiteFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "XPSEdgeTpuTfLiteFormat",
  }) as any as Schema.Schema<XPSEdgeTpuTfLiteFormat>;

export interface PartOfSpeech {
  /** The grammatical reciprocity. */
  reciprocity?:
    | "RECIPROCITY_UNKNOWN"
    | "RECIPROCAL"
    | "NON_RECIPROCAL"
    | (string & {});
  /** The grammatical aspect. */
  aspect?:
    | "ASPECT_UNKNOWN"
    | "PERFECTIVE"
    | "IMPERFECTIVE"
    | "PROGRESSIVE"
    | (string & {});
  /** The grammatical tense. */
  tense?:
    | "TENSE_UNKNOWN"
    | "CONDITIONAL_TENSE"
    | "FUTURE"
    | "PAST"
    | "PRESENT"
    | "IMPERFECT"
    | "PLUPERFECT"
    | (string & {});
  /** The grammatical person. */
  person?:
    | "PERSON_UNKNOWN"
    | "FIRST"
    | "SECOND"
    | "THIRD"
    | "REFLEXIVE_PERSON"
    | (string & {});
  /** The grammatical voice. */
  voice?: "VOICE_UNKNOWN" | "ACTIVE" | "CAUSATIVE" | "PASSIVE" | (string & {});
  /** The grammatical gender. */
  gender?:
    | "GENDER_UNKNOWN"
    | "FEMININE"
    | "MASCULINE"
    | "NEUTER"
    | (string & {});
  /** The grammatical number. */
  number?: "NUMBER_UNKNOWN" | "SINGULAR" | "PLURAL" | "DUAL" | (string & {});
  /** The grammatical form. */
  form?:
    | "FORM_UNKNOWN"
    | "ADNOMIAL"
    | "AUXILIARY"
    | "COMPLEMENTIZER"
    | "FINAL_ENDING"
    | "GERUND"
    | "REALIS"
    | "IRREALIS"
    | "SHORT"
    | "LONG"
    | "ORDER"
    | "SPECIFIC"
    | (string & {});
  /** The grammatical properness. */
  proper?: "PROPER_UNKNOWN" | "PROPER" | "NOT_PROPER" | (string & {});
  /** The grammatical mood. */
  mood?:
    | "MOOD_UNKNOWN"
    | "CONDITIONAL_MOOD"
    | "IMPERATIVE"
    | "INDICATIVE"
    | "INTERROGATIVE"
    | "JUSSIVE"
    | "SUBJUNCTIVE"
    | (string & {});
  /** The grammatical case. */
  case?:
    | "CASE_UNKNOWN"
    | "ACCUSATIVE"
    | "ADVERBIAL"
    | "COMPLEMENTIVE"
    | "DATIVE"
    | "GENITIVE"
    | "INSTRUMENTAL"
    | "LOCATIVE"
    | "NOMINATIVE"
    | "OBLIQUE"
    | "PARTITIVE"
    | "PREPOSITIONAL"
    | "REFLEXIVE_CASE"
    | "RELATIVE_CASE"
    | "VOCATIVE"
    | (string & {});
  /** The part of speech tag. */
  tag?:
    | "UNKNOWN"
    | "ADJ"
    | "ADP"
    | "ADV"
    | "CONJ"
    | "DET"
    | "NOUN"
    | "NUM"
    | "PRON"
    | "PRT"
    | "PUNCT"
    | "VERB"
    | "X"
    | "AFFIX"
    | (string & {});
}

export const PartOfSpeech: Schema.Schema<PartOfSpeech> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      reciprocity: Schema.optional(Schema.String),
      aspect: Schema.optional(Schema.String),
      tense: Schema.optional(Schema.String),
      person: Schema.optional(Schema.String),
      voice: Schema.optional(Schema.String),
      gender: Schema.optional(Schema.String),
      number: Schema.optional(Schema.String),
      form: Schema.optional(Schema.String),
      proper: Schema.optional(Schema.String),
      mood: Schema.optional(Schema.String),
      case: Schema.optional(Schema.String),
      tag: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "PartOfSpeech",
  }) as any as Schema.Schema<PartOfSpeech>;

export interface XPSBatchPredictResponse {
  /** Examples for batch prediction result. Under full API implementation, results are stored in shared RecordIO of AnnotatedExample protobufs, the annotations field of which is populated by XPS backend. */
  exampleSet?: XPSExampleSet;
}

export const XPSBatchPredictResponse: Schema.Schema<XPSBatchPredictResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exampleSet: Schema.optional(XPSExampleSet),
    }),
  ).annotate({
    identifier: "XPSBatchPredictResponse",
  }) as any as Schema.Schema<XPSBatchPredictResponse>;

export interface XPSTfJsFormat {}

export const XPSTfJsFormat: Schema.Schema<XPSTfJsFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "XPSTfJsFormat",
  }) as any as Schema.Schema<XPSTfJsFormat>;

export interface XPSCoreMlFormat {}

export const XPSCoreMlFormat: Schema.Schema<XPSCoreMlFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "XPSCoreMlFormat",
  }) as any as Schema.Schema<XPSCoreMlFormat>;

export interface XPSExportModelOutputConfig {
  tfLiteFormat?: XPSTfLiteFormat;
  /** The Google Contained Registry path the exported files to be pushed to. This location is set if the exported format is DOCKDER. */
  outputGcrUri?: string;
  /** For any model and format: If true, will additionally export FirebaseExportedModelInfo in a firebase.txt file. */
  exportFirebaseAuxiliaryInfo?: boolean;
  /** The Google Cloud Storage directory where XPS will output the exported models and related files. Format: gs://bucket/directory */
  outputGcsUri?: string;
  tfJsFormat?: XPSTfJsFormat;
  dockerFormat?: XPSDockerFormat;
  coreMlFormat?: XPSCoreMlFormat;
  tfSavedModelFormat?: XPSTfSavedModelFormat;
  edgeTpuTfLiteFormat?: XPSEdgeTpuTfLiteFormat;
}

export const XPSExportModelOutputConfig: Schema.Schema<XPSExportModelOutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tfLiteFormat: Schema.optional(XPSTfLiteFormat),
      outputGcrUri: Schema.optional(Schema.String),
      exportFirebaseAuxiliaryInfo: Schema.optional(Schema.Boolean),
      outputGcsUri: Schema.optional(Schema.String),
      tfJsFormat: Schema.optional(XPSTfJsFormat),
      dockerFormat: Schema.optional(XPSDockerFormat),
      coreMlFormat: Schema.optional(XPSCoreMlFormat),
      tfSavedModelFormat: Schema.optional(XPSTfSavedModelFormat),
      edgeTpuTfLiteFormat: Schema.optional(XPSEdgeTpuTfLiteFormat),
    }),
  ).annotate({
    identifier: "XPSExportModelOutputConfig",
  }) as any as Schema.Schema<XPSExportModelOutputConfig>;

export interface XPSVideoExportModelSpec {
  /** Contains the model format and internal location of the model files to be exported/downloaded. Use the Google Cloud Storage bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files. */
  exportModelOutputConfig?: Array<XPSExportModelOutputConfig>;
}

export const XPSVideoExportModelSpec: Schema.Schema<XPSVideoExportModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exportModelOutputConfig: Schema.optional(
        Schema.Array(XPSExportModelOutputConfig),
      ),
    }),
  ).annotate({
    identifier: "XPSVideoExportModelSpec",
  }) as any as Schema.Schema<XPSVideoExportModelSpec>;

export interface XPSVideoObjectTrackingTrainResponse {
  /** Populated for AutoML request only. */
  exportModelSpec?: XPSVideoExportModelSpec;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSVideoModelArtifactSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
}

export const XPSVideoObjectTrackingTrainResponse: Schema.Schema<XPSVideoObjectTrackingTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exportModelSpec: Schema.optional(XPSVideoExportModelSpec),
      modelArtifactSpec: Schema.optional(XPSVideoModelArtifactSpec),
      trainCostNodeSeconds: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSVideoObjectTrackingTrainResponse",
  }) as any as Schema.Schema<XPSVideoObjectTrackingTrainResponse>;

export interface AnalyzeSyntaxRequest {
  /** Required. Input document. */
  document?: Document;
  /** The encoding type used by the API to calculate offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnalyzeSyntaxRequest: Schema.Schema<AnalyzeSyntaxRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
      encodingType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnalyzeSyntaxRequest",
  }) as any as Schema.Schema<AnalyzeSyntaxRequest>;

export interface DependencyEdge {
  /** Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index. */
  headTokenIndex?: number;
  /** The parse label for the token. */
  label?:
    | "UNKNOWN"
    | "ABBREV"
    | "ACOMP"
    | "ADVCL"
    | "ADVMOD"
    | "AMOD"
    | "APPOS"
    | "ATTR"
    | "AUX"
    | "AUXPASS"
    | "CC"
    | "CCOMP"
    | "CONJ"
    | "CSUBJ"
    | "CSUBJPASS"
    | "DEP"
    | "DET"
    | "DISCOURSE"
    | "DOBJ"
    | "EXPL"
    | "GOESWITH"
    | "IOBJ"
    | "MARK"
    | "MWE"
    | "MWV"
    | "NEG"
    | "NN"
    | "NPADVMOD"
    | "NSUBJ"
    | "NSUBJPASS"
    | "NUM"
    | "NUMBER"
    | "P"
    | "PARATAXIS"
    | "PARTMOD"
    | "PCOMP"
    | "POBJ"
    | "POSS"
    | "POSTNEG"
    | "PRECOMP"
    | "PRECONJ"
    | "PREDET"
    | "PREF"
    | "PREP"
    | "PRONL"
    | "PRT"
    | "PS"
    | "QUANTMOD"
    | "RCMOD"
    | "RCMODREL"
    | "RDROP"
    | "REF"
    | "REMNANT"
    | "REPARANDUM"
    | "ROOT"
    | "SNUM"
    | "SUFF"
    | "TMOD"
    | "TOPIC"
    | "VMOD"
    | "VOCATIVE"
    | "XCOMP"
    | "SUFFIX"
    | "TITLE"
    | "ADVPHMOD"
    | "AUXCAUS"
    | "AUXVV"
    | "DTMOD"
    | "FOREIGN"
    | "KW"
    | "LIST"
    | "NOMC"
    | "NOMCSUBJ"
    | "NOMCSUBJPASS"
    | "NUMC"
    | "COP"
    | "DISLOCATED"
    | "ASP"
    | "GMOD"
    | "GOBJ"
    | "INFMOD"
    | "MES"
    | "NCOMP"
    | (string & {});
}

export const DependencyEdge: Schema.Schema<DependencyEdge> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      headTokenIndex: Schema.optional(Schema.Number),
      label: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "DependencyEdge",
  }) as any as Schema.Schema<DependencyEdge>;

export interface Token {
  /** Dependency tree parse for this token. */
  dependencyEdge?: DependencyEdge;
  /** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
  lemma?: string;
  /** The token text. */
  text?: TextSpan;
  /** Parts of speech tag for this token. */
  partOfSpeech?: PartOfSpeech;
}

export const Token: Schema.Schema<Token> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dependencyEdge: Schema.optional(DependencyEdge),
      lemma: Schema.optional(Schema.String),
      text: Schema.optional(TextSpan),
      partOfSpeech: Schema.optional(PartOfSpeech),
    }),
  ).annotate({ identifier: "Token" }) as any as Schema.Schema<Token>;

export interface AnalyzeSyntaxResponse {
  /** Sentences in the input document. */
  sentences?: Array<Sentence>;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
  language?: string;
  /** Tokens, along with their syntactic information, in the input document. */
  tokens?: Array<Token>;
}

export const AnalyzeSyntaxResponse: Schema.Schema<AnalyzeSyntaxResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sentences: Schema.optional(Schema.Array(Sentence)),
      language: Schema.optional(Schema.String),
      tokens: Schema.optional(Schema.Array(Token)),
    }),
  ).annotate({
    identifier: "AnalyzeSyntaxResponse",
  }) as any as Schema.Schema<AnalyzeSyntaxResponse>;

export interface XPSImageExportModelSpec {
  /** Contains the model format and internal location of the model files to be exported/downloaded. Use the Google Cloud Storage bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files. */
  exportModelOutputConfig?: Array<XPSExportModelOutputConfig>;
}

export const XPSImageExportModelSpec: Schema.Schema<XPSImageExportModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      exportModelOutputConfig: Schema.optional(
        Schema.Array(XPSExportModelOutputConfig),
      ),
    }),
  ).annotate({
    identifier: "XPSImageExportModelSpec",
  }) as any as Schema.Schema<XPSImageExportModelSpec>;

export interface XPSImageModelServingSpec {
  /** An estimated value of how much traffic a node can serve. Populated for AutoMl request only. */
  nodeQps?: number;
  /** Populate under uCAIP request scope. */
  modelThroughputEstimation?: Array<XPSImageModelServingSpecModelThroughputEstimation>;
  /** ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list */
  tfRuntimeVersion?: string;
}

export const XPSImageModelServingSpec: Schema.Schema<XPSImageModelServingSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      nodeQps: Schema.optional(Schema.Number),
      modelThroughputEstimation: Schema.optional(
        Schema.Array(XPSImageModelServingSpecModelThroughputEstimation),
      ),
      tfRuntimeVersion: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "XPSImageModelServingSpec",
  }) as any as Schema.Schema<XPSImageModelServingSpec>;

export interface XPSImageModelArtifactSpec {
  /** The default model binary file used for serving (e.g. online predict, batch predict) via public Cloud AI Platform API. */
  servingArtifact?: XPSModelArtifactItem;
  /** Google Cloud Storage URI prefix of Tensorflow JavaScript binary files 'groupX-shardXofX.bin'. Deprecated. */
  tfJsBinaryGcsPrefix?: string;
  /** Google Cloud Storage URI of Tensorflow Lite metadata 'tflite_metadata.json'. */
  tfLiteMetadataGcsUri?: string;
  /** The Tensorflow checkpoint files. e.g. Used for resumable training. */
  checkpointArtifact?: XPSModelArtifactItem;
  /** Google Cloud Storage URI of decoded labels file for model export 'dict.txt'. */
  labelGcsUri?: string;
  /** The model binary files in different formats for model export. */
  exportArtifact?: Array<XPSModelArtifactItem>;
}

export const XPSImageModelArtifactSpec: Schema.Schema<XPSImageModelArtifactSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      servingArtifact: Schema.optional(XPSModelArtifactItem),
      tfJsBinaryGcsPrefix: Schema.optional(Schema.String),
      tfLiteMetadataGcsUri: Schema.optional(Schema.String),
      checkpointArtifact: Schema.optional(XPSModelArtifactItem),
      labelGcsUri: Schema.optional(Schema.String),
      exportArtifact: Schema.optional(Schema.Array(XPSModelArtifactItem)),
    }),
  ).annotate({
    identifier: "XPSImageModelArtifactSpec",
  }) as any as Schema.Schema<XPSImageModelArtifactSpec>;

export interface XPSImageObjectDetectionModelSpec {
  /** Total number of classes. */
  classCount?: string;
  exportModelSpec?: XPSImageExportModelSpec;
  /** Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED'. */
  stopReason?:
    | "TRAIN_STOP_REASON_UNSPECIFIED"
    | "TRAIN_STOP_REASON_BUDGET_REACHED"
    | "TRAIN_STOP_REASON_MODEL_CONVERGED"
    | "TRAIN_STOP_REASON_MODEL_EARLY_STOPPED"
    | (string & {});
  modelServingSpec?: XPSImageModelServingSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** Max number of bounding box. */
  maxBoundingBoxCount?: string;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSImageModelArtifactSpec;
}

export const XPSImageObjectDetectionModelSpec: Schema.Schema<XPSImageObjectDetectionModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      classCount: Schema.optional(Schema.String),
      exportModelSpec: Schema.optional(XPSImageExportModelSpec),
      stopReason: Schema.optional(Schema.String),
      modelServingSpec: Schema.optional(XPSImageModelServingSpec),
      trainCostNodeSeconds: Schema.optional(Schema.String),
      maxBoundingBoxCount: Schema.optional(Schema.String),
      modelArtifactSpec: Schema.optional(XPSImageModelArtifactSpec),
    }),
  ).annotate({
    identifier: "XPSImageObjectDetectionModelSpec",
  }) as any as Schema.Schema<XPSImageObjectDetectionModelSpec>;

export interface ClassificationModelOptionsV1Model {}

export const ClassificationModelOptionsV1Model: Schema.Schema<ClassificationModelOptionsV1Model> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({})).annotate({
    identifier: "ClassificationModelOptionsV1Model",
  }) as any as Schema.Schema<ClassificationModelOptionsV1Model>;

export interface ClassificationModelOptionsV2Model {
  /** The content categories used for classification. */
  contentCategoriesVersion?:
    | "CONTENT_CATEGORIES_VERSION_UNSPECIFIED"
    | "V1"
    | "V2"
    | (string & {});
}

export const ClassificationModelOptionsV2Model: Schema.Schema<ClassificationModelOptionsV2Model> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      contentCategoriesVersion: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "ClassificationModelOptionsV2Model",
  }) as any as Schema.Schema<ClassificationModelOptionsV2Model>;

export interface ClassificationModelOptions {
  /** Setting this field will use the V1 model and V1 content categories version. The V1 model is a legacy model; support for this will be discontinued in the future. */
  v1Model?: ClassificationModelOptionsV1Model;
  /** Setting this field will use the V2 model with the appropriate content categories version. The V2 model is a better performing model. */
  v2Model?: ClassificationModelOptionsV2Model;
}

export const ClassificationModelOptions: Schema.Schema<ClassificationModelOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      v1Model: Schema.optional(ClassificationModelOptionsV1Model),
      v2Model: Schema.optional(ClassificationModelOptionsV2Model),
    }),
  ).annotate({
    identifier: "ClassificationModelOptions",
  }) as any as Schema.Schema<ClassificationModelOptions>;

export interface AnnotateTextRequestFeatures {
  /** Extract syntax information. */
  extractSyntax?: boolean;
  /** Extract entities and their associated sentiment. */
  extractEntitySentiment?: boolean;
  /** Moderate the document for harmful and sensitive categories. */
  moderateText?: boolean;
  /** Optional. The model options to use for classification. Defaults to v1 options if not specified. Only used if `classify_text` is set to true. */
  classificationModelOptions?: ClassificationModelOptions;
  /** Classify the full document into categories. */
  classifyText?: boolean;
  /** Extract document-level sentiment. */
  extractDocumentSentiment?: boolean;
  /** Extract entities. */
  extractEntities?: boolean;
}

export const AnnotateTextRequestFeatures: Schema.Schema<AnnotateTextRequestFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      extractSyntax: Schema.optional(Schema.Boolean),
      extractEntitySentiment: Schema.optional(Schema.Boolean),
      moderateText: Schema.optional(Schema.Boolean),
      classificationModelOptions: Schema.optional(ClassificationModelOptions),
      classifyText: Schema.optional(Schema.Boolean),
      extractDocumentSentiment: Schema.optional(Schema.Boolean),
      extractEntities: Schema.optional(Schema.Boolean),
    }),
  ).annotate({
    identifier: "AnnotateTextRequestFeatures",
  }) as any as Schema.Schema<AnnotateTextRequestFeatures>;

export interface AnnotateTextRequest {
  /** Required. Input document. */
  document?: Document;
  /** Required. The enabled features. */
  features?: AnnotateTextRequestFeatures;
  /** The encoding type used by the API to calculate offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnnotateTextRequest: Schema.Schema<AnnotateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
      features: Schema.optional(AnnotateTextRequestFeatures),
      encodingType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnnotateTextRequest",
  }) as any as Schema.Schema<AnnotateTextRequest>;

export interface ClassificationCategory {
  /** The name of the category representing the document. */
  name?: string;
  /** The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text. */
  confidence?: number;
}

export const ClassificationCategory: Schema.Schema<ClassificationCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      confidence: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "ClassificationCategory",
  }) as any as Schema.Schema<ClassificationCategory>;

export interface ClassifyTextResponse {
  /** Categories representing the input document. */
  categories?: Array<ClassificationCategory>;
}

export const ClassifyTextResponse: Schema.Schema<ClassifyTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      categories: Schema.optional(Schema.Array(ClassificationCategory)),
    }),
  ).annotate({
    identifier: "ClassifyTextResponse",
  }) as any as Schema.Schema<ClassifyTextResponse>;

export interface ModerateTextRequest {
  /** Required. Input document. */
  document?: Document;
}

export const ModerateTextRequest: Schema.Schema<ModerateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
    }),
  ).annotate({
    identifier: "ModerateTextRequest",
  }) as any as Schema.Schema<ModerateTextRequest>;

export interface ModerateTextResponse {
  /** Harmful and sensitive categories representing the input document. */
  moderationCategories?: Array<ClassificationCategory>;
}

export const ModerateTextResponse: Schema.Schema<ModerateTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      moderationCategories: Schema.optional(
        Schema.Array(ClassificationCategory),
      ),
    }),
  ).annotate({
    identifier: "ModerateTextResponse",
  }) as any as Schema.Schema<ModerateTextResponse>;

export interface AnalyzeSentimentResponse {
  /** The overall sentiment of the input document. */
  documentSentiment?: Sentiment;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
  language?: string;
  /** The sentiment for all the sentences in the document. */
  sentences?: Array<Sentence>;
}

export const AnalyzeSentimentResponse: Schema.Schema<AnalyzeSentimentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      documentSentiment: Schema.optional(Sentiment),
      language: Schema.optional(Schema.String),
      sentences: Schema.optional(Schema.Array(Sentence)),
    }),
  ).annotate({
    identifier: "AnalyzeSentimentResponse",
  }) as any as Schema.Schema<AnalyzeSentimentResponse>;

export interface XPSImageClassificationTrainResponse {
  /** The actual cost to create this model. - For edge type model, the cost is expressed in node hour. - For cloud type model,the cost is expressed in compute hour. - Populated for models created before GA. To be deprecated after GA. */
  trainCostInNodeTime?: string;
  /** Total number of classes. */
  classCount?: string;
  /** The actual training cost, expressed in node seconds. Populated for models trained in node time. */
  trainCostNodeSeconds?: string;
  modelServingSpec?: XPSImageModelServingSpec;
  /** Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED', 'MODEL_EARLY_STOPPED'. */
  stopReason?:
    | "TRAIN_STOP_REASON_UNSPECIFIED"
    | "TRAIN_STOP_REASON_BUDGET_REACHED"
    | "TRAIN_STOP_REASON_MODEL_CONVERGED"
    | "TRAIN_STOP_REASON_MODEL_EARLY_STOPPED"
    | (string & {});
  /** Information of downloadable models that are pre-generated as part of training flow and will be persisted in AutoMl backend. Populated for AutoMl requests. */
  exportModelSpec?: XPSImageExportModelSpec;
  /** ## The fields below are only populated under uCAIP request scope. */
  modelArtifactSpec?: XPSImageModelArtifactSpec;
}

export const XPSImageClassificationTrainResponse: Schema.Schema<XPSImageClassificationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trainCostInNodeTime: Schema.optional(Schema.String),
      classCount: Schema.optional(Schema.String),
      trainCostNodeSeconds: Schema.optional(Schema.String),
      modelServingSpec: Schema.optional(XPSImageModelServingSpec),
      stopReason: Schema.optional(Schema.String),
      exportModelSpec: Schema.optional(XPSImageExportModelSpec),
      modelArtifactSpec: Schema.optional(XPSImageModelArtifactSpec),
    }),
  ).annotate({
    identifier: "XPSImageClassificationTrainResponse",
  }) as any as Schema.Schema<XPSImageClassificationTrainResponse>;

export interface XPSImageSegmentationTrainResponse {
  modelServingSpec?: XPSImageModelServingSpec;
  /** The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. */
  trainCostNodeSeconds?: string;
  /** Color map of the model. */
  colorMaps?: Array<XPSColorMap>;
  /** NOTE: These fields are not used/needed in EAP but will be set later. */
  exportModelSpec?: XPSImageExportModelSpec;
  /** Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED'. */
  stopReason?:
    | "TRAIN_STOP_REASON_UNSPECIFIED"
    | "TRAIN_STOP_REASON_BUDGET_REACHED"
    | "TRAIN_STOP_REASON_MODEL_CONVERGED"
    | "TRAIN_STOP_REASON_MODEL_EARLY_STOPPED"
    | (string & {});
  /** ## The fields below are only populated under uCAIP request scope. Model artifact spec stores and model gcs pathes and related metadata */
  modelArtifactSpec?: XPSImageModelArtifactSpec;
}

export const XPSImageSegmentationTrainResponse: Schema.Schema<XPSImageSegmentationTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      modelServingSpec: Schema.optional(XPSImageModelServingSpec),
      trainCostNodeSeconds: Schema.optional(Schema.String),
      colorMaps: Schema.optional(Schema.Array(XPSColorMap)),
      exportModelSpec: Schema.optional(XPSImageExportModelSpec),
      stopReason: Schema.optional(Schema.String),
      modelArtifactSpec: Schema.optional(XPSImageModelArtifactSpec),
    }),
  ).annotate({
    identifier: "XPSImageSegmentationTrainResponse",
  }) as any as Schema.Schema<XPSImageSegmentationTrainResponse>;

export interface XPSTrainResponse {
  videoObjectTrackingTrainResp?: XPSVideoObjectTrackingTrainResponse;
  /** Estimated model size in bytes once deployed. */
  deployedModelSizeBytes?: string;
  /** Optional vision model error analysis configuration. The field is set when model error analysis is enabled in the training request. The results of error analysis will be binded together with evaluation results (in the format of AnnotatedExample). */
  errorAnalysisConfigs?: Array<XPSVisionErrorAnalysisConfig>;
  imageClassificationTrainResp?: XPSImageClassificationTrainResponse;
  tablesTrainResp?: XPSTablesTrainResponse;
  imageSegmentationTrainResp?: XPSImageSegmentationTrainResponse;
  /** Examples used to evaluate the model (usually the test set), with the predicted annotations. The file_spec should point to recordio file(s) of AnnotatedExample. For each returned example, the example_id_token and annotations predicted by the model must be set. The example payload can and is recommended to be omitted. */
  evaluatedExampleSet?: XPSExampleSet;
  /** Token that represents the trained model. This is considered immutable and is persisted in AutoML. xPS can put their own proto in the byte string, to e.g. point to the model checkpoints. The token is passed to other xPS APIs to refer to the model. */
  modelToken?: string;
  textToSpeechTrainResp?: XPSTextToSpeechTrainResponse;
  videoActionRecognitionTrainResp?: XPSVideoActionRecognitionTrainResponse;
  videoClassificationTrainResp?: XPSVideoClassificationTrainResponse;
  translationTrainResp?: XPSTranslationTrainResponse;
  imageObjectDetectionTrainResp?: XPSImageObjectDetectionModelSpec;
  /** VisionExplanationConfig for XAI on test set. Optional for when XAI is enable in training request. */
  explanationConfigs?: Array<XPSResponseExplanationSpec>;
  /** Will only be needed for uCAIP from Beta. */
  textTrainResp?: XPSTextTrainResponse;
  speechTrainResp?: XPSSpeechModelSpec;
  /** The trained model evaluation metrics. This can be optionally returned. */
  evaluationMetricsSet?: XPSEvaluationMetricsSet;
}

export const XPSTrainResponse: Schema.Schema<XPSTrainResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      videoObjectTrackingTrainResp: Schema.optional(
        XPSVideoObjectTrackingTrainResponse,
      ),
      deployedModelSizeBytes: Schema.optional(Schema.String),
      errorAnalysisConfigs: Schema.optional(
        Schema.Array(XPSVisionErrorAnalysisConfig),
      ),
      imageClassificationTrainResp: Schema.optional(
        XPSImageClassificationTrainResponse,
      ),
      tablesTrainResp: Schema.optional(XPSTablesTrainResponse),
      imageSegmentationTrainResp: Schema.optional(
        XPSImageSegmentationTrainResponse,
      ),
      evaluatedExampleSet: Schema.optional(XPSExampleSet),
      modelToken: Schema.optional(Schema.String),
      textToSpeechTrainResp: Schema.optional(XPSTextToSpeechTrainResponse),
      videoActionRecognitionTrainResp: Schema.optional(
        XPSVideoActionRecognitionTrainResponse,
      ),
      videoClassificationTrainResp: Schema.optional(
        XPSVideoClassificationTrainResponse,
      ),
      translationTrainResp: Schema.optional(XPSTranslationTrainResponse),
      imageObjectDetectionTrainResp: Schema.optional(
        XPSImageObjectDetectionModelSpec,
      ),
      explanationConfigs: Schema.optional(
        Schema.Array(XPSResponseExplanationSpec),
      ),
      textTrainResp: Schema.optional(XPSTextTrainResponse),
      speechTrainResp: Schema.optional(XPSSpeechModelSpec),
      evaluationMetricsSet: Schema.optional(XPSEvaluationMetricsSet),
    }),
  ).annotate({
    identifier: "XPSTrainResponse",
  }) as any as Schema.Schema<XPSTrainResponse>;

export interface AnnotateTextResponse {
  /** Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax. */
  tokens?: Array<Token>;
  /** Categories identified in the input document. */
  categories?: Array<ClassificationCategory>;
  /** Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities. */
  entities?: Array<Entity>;
  /** The overall sentiment for the document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment. */
  documentSentiment?: Sentiment;
  /** Harmful and sensitive categories identified in the input document. */
  moderationCategories?: Array<ClassificationCategory>;
  /** Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax. */
  sentences?: Array<Sentence>;
  /** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
  language?: string;
}

export const AnnotateTextResponse: Schema.Schema<AnnotateTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tokens: Schema.optional(Schema.Array(Token)),
      categories: Schema.optional(Schema.Array(ClassificationCategory)),
      entities: Schema.optional(Schema.Array(Entity)),
      documentSentiment: Schema.optional(Sentiment),
      moderationCategories: Schema.optional(
        Schema.Array(ClassificationCategory),
      ),
      sentences: Schema.optional(Schema.Array(Sentence)),
      language: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnnotateTextResponse",
  }) as any as Schema.Schema<AnnotateTextResponse>;

export interface AnalyzeEntitySentimentRequest {
  /** Required. Input document. */
  document?: Document;
  /** The encoding type used by the API to calculate offsets. */
  encodingType?: "NONE" | "UTF8" | "UTF16" | "UTF32" | (string & {});
}

export const AnalyzeEntitySentimentRequest: Schema.Schema<AnalyzeEntitySentimentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
      encodingType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "AnalyzeEntitySentimentRequest",
  }) as any as Schema.Schema<AnalyzeEntitySentimentRequest>;

export interface ClassifyTextRequest {
  /** Required. Input document. */
  document?: Document;
  /** Optional. Model options to use for classification. Defaults to v1 options if not specified. */
  classificationModelOptions?: ClassificationModelOptions;
}

export const ClassifyTextRequest: Schema.Schema<ClassifyTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      document: Schema.optional(Document),
      classificationModelOptions: Schema.optional(ClassificationModelOptions),
    }),
  ).annotate({
    identifier: "ClassifyTextRequest",
  }) as any as Schema.Schema<ClassifyTextRequest>;

// ==========================================================================
// Operations
// ==========================================================================

export interface AnalyzeEntitySentimentDocumentsRequest {
  /** Request body */
  body?: AnalyzeEntitySentimentRequest;
}

export const AnalyzeEntitySentimentDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnalyzeEntitySentimentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:analyzeEntitySentiment",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeEntitySentimentDocumentsRequest>;

export type AnalyzeEntitySentimentDocumentsResponse =
  AnalyzeEntitySentimentResponse;
export const AnalyzeEntitySentimentDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnalyzeEntitySentimentResponse;

export type AnalyzeEntitySentimentDocumentsError = DefaultErrors;

/** Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions. */
export const analyzeEntitySentimentDocuments: API.OperationMethod<
  AnalyzeEntitySentimentDocumentsRequest,
  AnalyzeEntitySentimentDocumentsResponse,
  AnalyzeEntitySentimentDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeEntitySentimentDocumentsRequest,
  output: AnalyzeEntitySentimentDocumentsResponse,
  errors: [],
}));

export interface AnalyzeSyntaxDocumentsRequest {
  /** Request body */
  body?: AnalyzeSyntaxRequest;
}

export const AnalyzeSyntaxDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnalyzeSyntaxRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:analyzeSyntax",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeSyntaxDocumentsRequest>;

export type AnalyzeSyntaxDocumentsResponse = AnalyzeSyntaxResponse;
export const AnalyzeSyntaxDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnalyzeSyntaxResponse;

export type AnalyzeSyntaxDocumentsError = DefaultErrors;

/** Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties. */
export const analyzeSyntaxDocuments: API.OperationMethod<
  AnalyzeSyntaxDocumentsRequest,
  AnalyzeSyntaxDocumentsResponse,
  AnalyzeSyntaxDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeSyntaxDocumentsRequest,
  output: AnalyzeSyntaxDocumentsResponse,
  errors: [],
}));

export interface AnalyzeSentimentDocumentsRequest {
  /** Request body */
  body?: AnalyzeSentimentRequest;
}

export const AnalyzeSentimentDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnalyzeSentimentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:analyzeSentiment",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeSentimentDocumentsRequest>;

export type AnalyzeSentimentDocumentsResponse = AnalyzeSentimentResponse;
export const AnalyzeSentimentDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnalyzeSentimentResponse;

export type AnalyzeSentimentDocumentsError = DefaultErrors;

/** Analyzes the sentiment of the provided text. */
export const analyzeSentimentDocuments: API.OperationMethod<
  AnalyzeSentimentDocumentsRequest,
  AnalyzeSentimentDocumentsResponse,
  AnalyzeSentimentDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeSentimentDocumentsRequest,
  output: AnalyzeSentimentDocumentsResponse,
  errors: [],
}));

export interface ClassifyTextDocumentsRequest {
  /** Request body */
  body?: ClassifyTextRequest;
}

export const ClassifyTextDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ClassifyTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:classifyText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClassifyTextDocumentsRequest>;

export type ClassifyTextDocumentsResponse = ClassifyTextResponse;
export const ClassifyTextDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClassifyTextResponse;

export type ClassifyTextDocumentsError = DefaultErrors;

/** Classifies a document into categories. */
export const classifyTextDocuments: API.OperationMethod<
  ClassifyTextDocumentsRequest,
  ClassifyTextDocumentsResponse,
  ClassifyTextDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClassifyTextDocumentsRequest,
  output: ClassifyTextDocumentsResponse,
  errors: [],
}));

export interface AnalyzeEntitiesDocumentsRequest {
  /** Request body */
  body?: AnalyzeEntitiesRequest;
}

export const AnalyzeEntitiesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnalyzeEntitiesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:analyzeEntities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeEntitiesDocumentsRequest>;

export type AnalyzeEntitiesDocumentsResponse = AnalyzeEntitiesResponse;
export const AnalyzeEntitiesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnalyzeEntitiesResponse;

export type AnalyzeEntitiesDocumentsError = DefaultErrors;

/** Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties. */
export const analyzeEntitiesDocuments: API.OperationMethod<
  AnalyzeEntitiesDocumentsRequest,
  AnalyzeEntitiesDocumentsResponse,
  AnalyzeEntitiesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnalyzeEntitiesDocumentsRequest,
  output: AnalyzeEntitiesDocumentsResponse,
  errors: [],
}));

export interface ModerateTextDocumentsRequest {
  /** Request body */
  body?: ModerateTextRequest;
}

export const ModerateTextDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ModerateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:moderateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModerateTextDocumentsRequest>;

export type ModerateTextDocumentsResponse = ModerateTextResponse;
export const ModerateTextDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModerateTextResponse;

export type ModerateTextDocumentsError = DefaultErrors;

/** Moderates a document for harmful and sensitive categories. */
export const moderateTextDocuments: API.OperationMethod<
  ModerateTextDocumentsRequest,
  ModerateTextDocumentsResponse,
  ModerateTextDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModerateTextDocumentsRequest,
  output: ModerateTextDocumentsResponse,
  errors: [],
}));

export interface AnnotateTextDocumentsRequest {
  /** Request body */
  body?: AnnotateTextRequest;
}

export const AnnotateTextDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(AnnotateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/documents:annotateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AnnotateTextDocumentsRequest>;

export type AnnotateTextDocumentsResponse = AnnotateTextResponse;
export const AnnotateTextDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnnotateTextResponse;

export type AnnotateTextDocumentsError = DefaultErrors;

/** A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call. */
export const annotateTextDocuments: API.OperationMethod<
  AnnotateTextDocumentsRequest,
  AnnotateTextDocumentsResponse,
  AnnotateTextDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AnnotateTextDocumentsRequest,
  output: AnnotateTextDocumentsResponse,
  errors: [],
}));
