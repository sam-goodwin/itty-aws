// ==========================================================================
// Cloud Translation API (translate v3beta1)
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
  name: "translate",
  version: "v3beta1",
  rootUrl: "https://translation.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface TranslateTextGlossaryConfig {
  /** Required. Specifies the glossary used for this translation. Use this format: projects/* /locations/* /glossaries/* */
  glossary?: string;
  /** Optional. Indicates match is case-insensitive. Default value is false if missing. */
  ignoreCase?: boolean;
  /** Optional. If set to true, the glossary will be used for contextual translation. */
  contextualTranslationEnabled?: boolean;
}

export const TranslateTextGlossaryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glossary: Schema.optional(Schema.String),
    ignoreCase: Schema.optional(Schema.Boolean),
    contextualTranslationEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TranslateTextGlossaryConfig" });

export interface TranslateTextRequest {
  /** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used */
  model?: string;
  /** Required. The BCP-47 language code to use for translation of the input text, set to one of the language codes listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCode?: string;
  /** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
  mimeType?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information. */
  labels?: Record<string, string>;
  /** Required. The content of the input in string format. We recommend the total content be less than 30k codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text. */
  contents?: ReadonlyArray<string>;
  /** Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** Optional. The BCP-47 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. */
  sourceLanguageCode?: string;
}

export const TranslateTextRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  model: Schema.optional(Schema.String),
  targetLanguageCode: Schema.optional(Schema.String),
  mimeType: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  contents: Schema.optional(Schema.Array(Schema.String)),
  glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
  sourceLanguageCode: Schema.optional(Schema.String),
}).annotate({ identifier: "TranslateTextRequest" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
}).annotate({ identifier: "Status" });

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

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  error: Schema.optional(Status),
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  done: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface RefinementEntry {
  /** Required. The original translation of the source text. */
  originalTranslation?: string;
  /** Required. The source text to be refined. */
  sourceText?: string;
}

export const RefinementEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  originalTranslation: Schema.optional(Schema.String),
  sourceText: Schema.optional(Schema.String),
}).annotate({ identifier: "RefinementEntry" });

export interface RefineTextRequest {
  /** Required. The source texts and original translations in the source and target languages. */
  refinementEntries?: ReadonlyArray<RefinementEntry>;
  /** Required. The BCP-47 language code for translation output, for example, "zh-CN". */
  targetLanguageCode?: string;
  /** Required. The BCP-47 language code of the source text in the request, for example, "en-US". */
  sourceLanguageCode?: string;
}

export const RefineTextRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  refinementEntries: Schema.optional(Schema.Array(RefinementEntry)),
  targetLanguageCode: Schema.optional(Schema.String),
  sourceLanguageCode: Schema.optional(Schema.String),
}).annotate({ identifier: "RefineTextRequest" });

export interface GcsDestination {
  /** Required. There must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://", otherwise an INVALID_ARGUMENT (400) error is returned. */
  outputUriPrefix?: string;
}

export const GcsDestination = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  outputUriPrefix: Schema.optional(Schema.String),
}).annotate({ identifier: "GcsDestination" });

export interface BatchDocumentOutputConfig {
  /** Google Cloud Storage destination for output content. For every single input document (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateDocumentRequest). While the input documents are being processed, we write/update an index file `index.csv` under `gcs_destination.output_uri_prefix` (for example, gs://translation_output/index.csv) The index file is generated/updated as new files are being translated. The format is: input_document,target_language_code,translation_output,error_output, glossary_translation_output,glossary_error_output `input_document` is one file we matched using gcs_source.input_uri. `target_language_code` is provided in the request. `translation_output` contains the translations. (details provided below) `error_output` contains the error message during processing of the file. Both translations_file and errors_file could be empty strings if we have no content to output. `glossary_translation_output` and `glossary_error_output` are the translated output/error when we apply glossaries. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The naming format of translation output files follows (for target language code [trg]): `translation_output`: `gs://translation_output/a_b_c_[trg]_translation.[extension]` `glossary_translation_output`: `gs://translation_test/a_b_c_[trg]_glossary_translation.[extension]`. The output document will maintain the same file format as the input document. The naming format of error output files follows (for target language code [trg]): `error_output`: `gs://translation_test/a_b_c_[trg]_errors.txt` `glossary_error_output`: `gs://translation_test/a_b_c_[trg]_glossary_translation.txt` The error output is a txt file containing error details. */
  gcsDestination?: GcsDestination;
}

export const BatchDocumentOutputConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsDestination),
  }).annotate({ identifier: "BatchDocumentOutputConfig" });

export interface GcsSource {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
}

export const GcsSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inputUri: Schema.optional(Schema.String),
}).annotate({ identifier: "GcsSource" });

export interface DocumentInputConfig {
  /** Document's content represented as a stream of bytes. */
  content?: string;
  /** Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf */
  gcsSource?: GcsSource;
  /** Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  mimeType?: string;
}

export const DocumentInputConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  content: Schema.optional(Schema.String),
  gcsSource: Schema.optional(GcsSource),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "DocumentInputConfig" });

export interface DocumentOutputConfig {
  /** Optional. Google Cloud Storage destination for the translation output, e.g., `gs://my_bucket/my_directory/`. The destination directory provided does not have to be empty, but the bucket must exist. If a file with the same name as the output file already exists in the destination an error will be returned. For a DocumentInputConfig.contents provided document, the output file will have the name "output_[trg]_translations.[ext]", where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. For a DocumentInputConfig.gcs_uri provided document, the output file will have a name according to its URI. For example: an input file with URI: `gs://a/b/c.[extension]` stored in a gcs_destination bucket with name "my_bucket" will have an output URI: `gs://my_bucket/a_b_c_[trg]_translations.[ext]`, where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If the document was directly provided through the request, then the output document will have the format: `gs://my_bucket/translated_document_[trg]_translations.[ext]`, where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If a glossary was provided, then the output URI for the glossary translation will be equal to the default output URI but have `glossary_translations` instead of `translations`. For the previous example, its glossary URI would be: `gs://my_bucket/a_b_c_[trg]_glossary_translations.[ext]`. Thus the max number of output files will be 2 (Translated document, Glossary translated document). Callers should expect no partial outputs. If there is any error during document translation, no output will be stored in the Cloud Storage bucket. */
  gcsDestination?: GcsDestination;
  /** Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  mimeType?: string;
}

export const DocumentOutputConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsDestination: Schema.optional(GcsDestination),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "DocumentOutputConfig" });

export interface TranslateDocumentRequest {
  /** Required. The BCP-47 language code to use for translation of the input document, set to one of the language codes listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCode?: string;
  /** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation. */
  model?: string;
  /** Optional. If true, enable auto rotation correction in DVS. */
  enableRotationCorrection?: boolean;
  /** Optional. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model. */
  sourceLanguageCode?: string;
  /** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
  customizedAttribution?: string;
  /** Required. Input configurations. */
  documentInputConfig?: DocumentInputConfig;
  /** Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the desired output format. If not provided the translated file will only be returned through a byte-stream and its output mime type will be the same as the input file's mime type. */
  documentOutputConfig?: DocumentOutputConfig;
  /** Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated. */
  isTranslateNativePdfOnly?: boolean;
  /** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
  enableShadowRemovalNativePdf?: boolean;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
  labels?: Record<string, string>;
}

export const TranslateDocumentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetLanguageCode: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    enableRotationCorrection: Schema.optional(Schema.Boolean),
    sourceLanguageCode: Schema.optional(Schema.String),
    customizedAttribution: Schema.optional(Schema.String),
    documentInputConfig: Schema.optional(DocumentInputConfig),
    documentOutputConfig: Schema.optional(DocumentOutputConfig),
    glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
    isTranslateNativePdfOnly: Schema.optional(Schema.Boolean),
    enableShadowRemovalNativePdf: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "TranslateDocumentRequest" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  locationId: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  displayName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Location" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface GlossaryInputConfig {
  /** Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV (`.tsv`/`.csv`): 2 column file, tab- or comma-separated. The first column is source text. The second column is target text. The file must not contain headers. That is, the first row is data, not column names. - TMX (`.tmx`): TMX file with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (`.csv`): Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more information - [glossaries](https://cloud.google.com/translate/docs/advanced/glossary). */
  gcsSource?: GcsSource;
}

export const GlossaryInputConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsSource: Schema.optional(GcsSource),
}).annotate({ identifier: "GlossaryInputConfig" });

export interface LanguageCodesSet {
  /** The BCP-47 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code. */
  languageCodes?: ReadonlyArray<string>;
}

export const LanguageCodesSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languageCodes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "LanguageCodesSet" });

export interface LanguageCodePair {
  /** Required. The BCP-47 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code. */
  targetLanguageCode?: string;
  /** Required. The BCP-47 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code. */
  sourceLanguageCode?: string;
}

export const LanguageCodePair = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetLanguageCode: Schema.optional(Schema.String),
  sourceLanguageCode: Schema.optional(Schema.String),
}).annotate({ identifier: "LanguageCodePair" });

export interface Glossary {
  /** Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints. */
  inputConfig?: GlossaryInputConfig;
  /** Output only. When CreateGlossary was called. */
  submitTime?: string;
  /** Output only. When the glossary creation was finished. */
  endTime?: string;
  /** Used with equivalent term set glossaries. */
  languageCodesSet?: LanguageCodesSet;
  /** Used with unidirectional glossaries. */
  languagePair?: LanguageCodePair;
  /** Output only. The number of entries defined in the glossary. */
  entryCount?: number;
  /** Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`. */
  name?: string;
}

export const Glossary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inputConfig: Schema.optional(GlossaryInputConfig),
  submitTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  languageCodesSet: Schema.optional(LanguageCodesSet),
  languagePair: Schema.optional(LanguageCodePair),
  entryCount: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Glossary" });

export interface ListGlossariesResponse {
  /** The list of glossaries for a project. */
  glossaries?: ReadonlyArray<Glossary>;
  /** A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListGlossariesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    glossaries: Schema.optional(Schema.Array(Glossary)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListGlossariesResponse" });

export interface SupportedLanguage {
  /** Can be used as source language. */
  supportSource?: boolean;
  /** Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, BCP-47 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN') */
  languageCode?: string;
  /** Human readable name of the language localized in the display language specified in the request. */
  displayName?: string;
  /** Can be used as target language. */
  supportTarget?: boolean;
}

export const SupportedLanguage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportSource: Schema.optional(Schema.Boolean),
  languageCode: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  supportTarget: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SupportedLanguage" });

export interface SupportedLanguages {
  /** A list of supported language responses. This list contains an entry for each language the Translation API supports. */
  languages?: ReadonlyArray<SupportedLanguage>;
}

export const SupportedLanguages = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languages: Schema.optional(Schema.Array(SupportedLanguage)),
}).annotate({ identifier: "SupportedLanguages" });

export interface DetectLanguageRequest {
  /** Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used. */
  model?: string;
  /** The content of the input stored as a string. */
  content?: string;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information. */
  labels?: Record<string, string>;
  /** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
  mimeType?: string;
}

export const DetectLanguageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  model: Schema.optional(Schema.String),
  content: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  mimeType: Schema.optional(Schema.String),
}).annotate({ identifier: "DetectLanguageRequest" });

export interface InputConfig {
  /** Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty. */
  mimeType?: string;
  /** Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\t' your_input_file.tsv The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text. */
  gcsSource?: GcsSource;
}

export const InputConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mimeType: Schema.optional(Schema.String),
  gcsSource: Schema.optional(GcsSource),
}).annotate({ identifier: "InputConfig" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface Translation {
  /** The BCP-47 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
  detectedLanguageCode?: string;
  /** The `glossary_config` used for this translation. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** Text translated into the target language. If an error occurs during translation, this field might be excluded from the response. */
  translatedText?: string;
  /** Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
  model?: string;
}

export const Translation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  detectedLanguageCode: Schema.optional(Schema.String),
  glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
  translatedText: Schema.optional(Schema.String),
  model: Schema.optional(Schema.String),
}).annotate({ identifier: "Translation" });

export interface TranslateTextResponse {
  /** Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`. */
  glossaryTranslations?: ReadonlyArray<Translation>;
  /** Text translation responses with no glossary applied. This field has the same length as `contents`. */
  translations?: ReadonlyArray<Translation>;
}

export const TranslateTextResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  glossaryTranslations: Schema.optional(Schema.Array(Translation)),
  translations: Schema.optional(Schema.Array(Translation)),
}).annotate({ identifier: "TranslateTextResponse" });

export interface DetectedLanguage {
  /** The BCP-47 language code of source content in the request, detected automatically. */
  languageCode?: string;
  /** The confidence of the detection result for this language. */
  confidence?: number;
}

export const DetectedLanguage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languageCode: Schema.optional(Schema.String),
  confidence: Schema.optional(Schema.Number),
}).annotate({ identifier: "DetectedLanguage" });

export interface DetectLanguageResponse {
  /** A list of detected languages sorted by detection confidence in descending order. The most probable language first. */
  languages?: ReadonlyArray<DetectedLanguage>;
}

export const DetectLanguageResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    languages: Schema.optional(Schema.Array(DetectedLanguage)),
  },
).annotate({ identifier: "DetectLanguageResponse" });

export interface BatchDocumentInputConfig {
  /** Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.docx`) or a wildcard (for example, `gs://translation-test/*`). File mime type is determined based on extension. Supported mime type includes: - `pdf`, application/pdf - `docx`, application/vnd.openxmlformats-officedocument.wordprocessingml.document - `pptx`, application/vnd.openxmlformats-officedocument.presentationml.presentation - `xlsx`, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for `.docx`, `.pptx` and `.xlsx` is 100MB. The max file size to support for `.pdf` is 1GB and the max page limit is 1000 pages. The max file size to support for all input documents is 1GB. */
  gcsSource?: GcsSource;
}

export const BatchDocumentInputConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GcsSource),
  }).annotate({ identifier: "BatchDocumentInputConfig" });

export interface OutputConfig {
  /** Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\n' instead of '\r\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output_uri_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input_file,target_language_code,translations_file,errors_file, glossary_translations_file,glossary_errors_file input_file is one file we matched using gcs_source.input_uri. target_language_code is provided in the request. translations_file contains the translations. (details provided below) errors_file contains the errors during processing of the file. (details below). Both translations_file and errors_file could be empty strings if we have no content to output. glossary_translations_file and glossary_errors_file are always empty strings if the input_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The format of translations_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary_translations_file has format of `gs://translation_test/a_b_c_'trg'_glossary_translations.[extension]` The format of errors file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_errors.[extension]` If the input file extension is tsv, errors_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary_error_file will be generated that contains error details. glossary_error_file has format of `gs://translation_test/a_b_c_'trg'_glossary_errors.[extension]` */
  gcsDestination?: GcsDestination;
}

export const OutputConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsDestination: Schema.optional(GcsDestination),
}).annotate({ identifier: "OutputConfig" });

export interface RefineTextResponse {
  /** The refined translations obtained from the original translations. */
  refinedTranslations?: ReadonlyArray<string>;
}

export const RefineTextResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  refinedTranslations: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RefineTextResponse" });

export interface WaitOperationRequest {
  /** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
  timeout?: string;
}

export const WaitOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  timeout: Schema.optional(Schema.String),
}).annotate({ identifier: "WaitOperationRequest" });

export interface DocumentTranslation {
  /** The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats. */
  byteStreamOutputs?: ReadonlyArray<string>;
  /** The translated document's mime type. */
  mimeType?: string;
  /** The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
  detectedLanguageCode?: string;
}

export const DocumentTranslation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  byteStreamOutputs: Schema.optional(Schema.Array(Schema.String)),
  mimeType: Schema.optional(Schema.String),
  detectedLanguageCode: Schema.optional(Schema.String),
}).annotate({ identifier: "DocumentTranslation" });

export interface BatchTranslateTextRequest {
  /** Required. Specify up to 10 language codes here. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCodes?: ReadonlyArray<string>;
  /** Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
  models?: Record<string, string>;
  /** Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs. */
  outputConfig?: OutputConfig;
  /** Optional. Glossaries to be applied for translation. It's keyed by target language code. */
  glossaries?: Record<string, TranslateTextGlossaryConfig>;
  /** Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding. */
  inputConfigs?: ReadonlyArray<InputConfig>;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/labels for more information. */
  labels?: Record<string, string>;
  /** Required. Source language code. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  sourceLanguageCode?: string;
}

export const BatchTranslateTextRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    outputConfig: Schema.optional(OutputConfig),
    glossaries: Schema.optional(
      Schema.Record(Schema.String, TranslateTextGlossaryConfig),
    ),
    inputConfigs: Schema.optional(Schema.Array(InputConfig)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sourceLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchTranslateTextRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface BatchTranslateDocumentRequest {
  /** Optional. File format conversion map to be applied to all input files. Map's key is the original mime_type. Map's value is the target mime_type of translated documents. Supported file format conversion includes: - `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document` If nothing specified, output files will be in the same format as the original file. */
  formatConversions?: Record<string, string>;
  /** Optional. If true, enable auto rotation correction in DVS. */
  enableRotationCorrection?: boolean;
  /** Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  sourceLanguageCode?: string;
  /** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
  customizedAttribution?: string;
  /** Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCodes?: ReadonlyArray<string>;
  /** Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
  models?: Record<string, string>;
  /** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
  enableShadowRemovalNativePdf?: boolean;
  /** Optional. If true, only native pdf pages will be translated. */
  pdfNativeOnly?: boolean;
  /** Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs. */
  outputConfig?: BatchDocumentOutputConfig;
  /** Optional. Glossaries to be applied. It's keyed by target language code. */
  glossaries?: Record<string, TranslateTextGlossaryConfig>;
  /** Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding. */
  inputConfigs?: ReadonlyArray<BatchDocumentInputConfig>;
}

export const BatchTranslateDocumentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formatConversions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    enableRotationCorrection: Schema.optional(Schema.Boolean),
    sourceLanguageCode: Schema.optional(Schema.String),
    customizedAttribution: Schema.optional(Schema.String),
    targetLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    enableShadowRemovalNativePdf: Schema.optional(Schema.Boolean),
    pdfNativeOnly: Schema.optional(Schema.Boolean),
    outputConfig: Schema.optional(BatchDocumentOutputConfig),
    glossaries: Schema.optional(
      Schema.Record(Schema.String, TranslateTextGlossaryConfig),
    ),
    inputConfigs: Schema.optional(Schema.Array(BatchDocumentInputConfig)),
  }).annotate({ identifier: "BatchTranslateDocumentRequest" });

export interface TranslateDocumentResponse {
  /** Translated document. */
  documentTranslation?: DocumentTranslation;
  /** The `glossary_config` used for this translation. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** The document's translation output if a glossary is provided in the request. This can be the same as [TranslateDocumentResponse.document_translation] if no glossary terms apply. */
  glossaryDocumentTranslation?: DocumentTranslation;
  /** Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
  model?: string;
}

export const TranslateDocumentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentTranslation: Schema.optional(DocumentTranslation),
    glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
    glossaryDocumentTranslation: Schema.optional(DocumentTranslation),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "TranslateDocumentResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface TranslateTextProjectsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: TranslateTextRequest;
}

export const TranslateTextProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(TranslateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:translateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TranslateTextProjectsRequest>;

export type TranslateTextProjectsResponse = TranslateTextResponse;
export const TranslateTextProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslateTextResponse;

export type TranslateTextProjectsError = DefaultErrors;

/** Translates input text and returns translated text. */
export const translateTextProjects: API.OperationMethod<
  TranslateTextProjectsRequest,
  TranslateTextProjectsResponse,
  TranslateTextProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateTextProjectsRequest,
  output: TranslateTextProjectsResponse,
  errors: [],
}));

export interface DetectLanguageProjectsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: DetectLanguageRequest;
}

export const DetectLanguageProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DetectLanguageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:detectLanguage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectLanguageProjectsRequest>;

export type DetectLanguageProjectsResponse = DetectLanguageResponse;
export const DetectLanguageProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetectLanguageResponse;

export type DetectLanguageProjectsError = DefaultErrors;

/** Detects the language of text within a request. */
export const detectLanguageProjects: API.OperationMethod<
  DetectLanguageProjectsRequest,
  DetectLanguageProjectsResponse,
  DetectLanguageProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectLanguageProjectsRequest,
  output: DetectLanguageProjectsResponse,
  errors: [],
}));

export interface GetSupportedLanguagesProjectsRequest {
  /** Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. */
  model?: string;
  /** Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. */
  displayLanguageCode?: string;
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
}

export const GetSupportedLanguagesProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    displayLanguageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("displayLanguageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{parent}/supportedLanguages" }),
    svc,
  ) as unknown as Schema.Schema<GetSupportedLanguagesProjectsRequest>;

export type GetSupportedLanguagesProjectsResponse = SupportedLanguages;
export const GetSupportedLanguagesProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SupportedLanguages;

export type GetSupportedLanguagesProjectsError = DefaultErrors;

/** Returns a list of supported languages for translation. */
export const getSupportedLanguagesProjects: API.OperationMethod<
  GetSupportedLanguagesProjectsRequest,
  GetSupportedLanguagesProjectsResponse,
  GetSupportedLanguagesProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSupportedLanguagesProjectsRequest,
  output: GetSupportedLanguagesProjectsResponse,
  errors: [],
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface BatchTranslateTextProjectsLocationsRequest {
  /** Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: BatchTranslateTextRequest;
}

export const BatchTranslateTextProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchTranslateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:batchTranslateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchTranslateTextProjectsLocationsRequest>;

export type BatchTranslateTextProjectsLocationsResponse = Operation;
export const BatchTranslateTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchTranslateTextProjectsLocationsError = DefaultErrors;

/** Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call. */
export const batchTranslateTextProjectsLocations: API.OperationMethod<
  BatchTranslateTextProjectsLocationsRequest,
  BatchTranslateTextProjectsLocationsResponse,
  BatchTranslateTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchTranslateTextProjectsLocationsRequest,
  output: BatchTranslateTextProjectsLocationsResponse,
  errors: [],
}));

export interface TranslateDocumentProjectsLocationsRequest {
  /** Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: TranslateDocumentRequest;
}

export const TranslateDocumentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(TranslateDocumentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:translateDocument",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TranslateDocumentProjectsLocationsRequest>;

export type TranslateDocumentProjectsLocationsResponse =
  TranslateDocumentResponse;
export const TranslateDocumentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslateDocumentResponse;

export type TranslateDocumentProjectsLocationsError = DefaultErrors;

/** Translates documents in synchronous mode. */
export const translateDocumentProjectsLocations: API.OperationMethod<
  TranslateDocumentProjectsLocationsRequest,
  TranslateDocumentProjectsLocationsResponse,
  TranslateDocumentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateDocumentProjectsLocationsRequest,
  output: TranslateDocumentProjectsLocationsResponse,
  errors: [],
}));

export interface DetectLanguageProjectsLocationsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: DetectLanguageRequest;
}

export const DetectLanguageProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DetectLanguageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:detectLanguage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectLanguageProjectsLocationsRequest>;

export type DetectLanguageProjectsLocationsResponse = DetectLanguageResponse;
export const DetectLanguageProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetectLanguageResponse;

export type DetectLanguageProjectsLocationsError = DefaultErrors;

/** Detects the language of text within a request. */
export const detectLanguageProjectsLocations: API.OperationMethod<
  DetectLanguageProjectsLocationsRequest,
  DetectLanguageProjectsLocationsResponse,
  DetectLanguageProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectLanguageProjectsLocationsRequest,
  output: DetectLanguageProjectsLocationsResponse,
  errors: [],
}));

export interface GetSupportedLanguagesProjectsLocationsRequest {
  /** Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. */
  displayLanguageCode?: string;
  /** Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. */
  model?: string;
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
}

export const GetSupportedLanguagesProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayLanguageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("displayLanguageCode"),
    ),
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{parent}/supportedLanguages" }),
    svc,
  ) as unknown as Schema.Schema<GetSupportedLanguagesProjectsLocationsRequest>;

export type GetSupportedLanguagesProjectsLocationsResponse = SupportedLanguages;
export const GetSupportedLanguagesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SupportedLanguages;

export type GetSupportedLanguagesProjectsLocationsError = DefaultErrors;

/** Returns a list of supported languages for translation. */
export const getSupportedLanguagesProjectsLocations: API.OperationMethod<
  GetSupportedLanguagesProjectsLocationsRequest,
  GetSupportedLanguagesProjectsLocationsResponse,
  GetSupportedLanguagesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSupportedLanguagesProjectsLocationsRequest,
  output: GetSupportedLanguagesProjectsLocationsResponse,
  errors: [],
}));

export interface BatchTranslateDocumentProjectsLocationsRequest {
  /** Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: BatchTranslateDocumentRequest;
}

export const BatchTranslateDocumentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchTranslateDocumentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:batchTranslateDocument",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchTranslateDocumentProjectsLocationsRequest>;

export type BatchTranslateDocumentProjectsLocationsResponse = Operation;
export const BatchTranslateDocumentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchTranslateDocumentProjectsLocationsError = DefaultErrors;

/** Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call. */
export const batchTranslateDocumentProjectsLocations: API.OperationMethod<
  BatchTranslateDocumentProjectsLocationsRequest,
  BatchTranslateDocumentProjectsLocationsResponse,
  BatchTranslateDocumentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchTranslateDocumentProjectsLocationsRequest,
  output: BatchTranslateDocumentProjectsLocationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method can be called in two ways: * **List all public locations:** Use the path `GET /v1/locations`. * **List project-visible locations:** Use the path `GET /v1/projects/{project_id}/locations`. This may include public locations as well as private or other locations specifically visible to the project. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RefineTextProjectsLocationsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. */
  parent: string;
  /** Request body */
  body?: RefineTextRequest;
}

export const RefineTextProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RefineTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:refineText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RefineTextProjectsLocationsRequest>;

export type RefineTextProjectsLocationsResponse = RefineTextResponse;
export const RefineTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RefineTextResponse;

export type RefineTextProjectsLocationsError = DefaultErrors;

/** Refines the input translated text to improve the quality. */
export const refineTextProjectsLocations: API.OperationMethod<
  RefineTextProjectsLocationsRequest,
  RefineTextProjectsLocationsResponse,
  RefineTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RefineTextProjectsLocationsRequest,
  output: RefineTextProjectsLocationsResponse,
  errors: [],
}));

export interface TranslateTextProjectsLocationsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
  /** Request body */
  body?: TranslateTextRequest;
}

export const TranslateTextProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(TranslateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}:translateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TranslateTextProjectsLocationsRequest>;

export type TranslateTextProjectsLocationsResponse = TranslateTextResponse;
export const TranslateTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslateTextResponse;

export type TranslateTextProjectsLocationsError = DefaultErrors;

/** Translates input text and returns translated text. */
export const translateTextProjectsLocations: API.OperationMethod<
  TranslateTextProjectsLocationsRequest,
  TranslateTextProjectsLocationsResponse,
  TranslateTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateTextProjectsLocationsRequest,
  output: TranslateTextProjectsLocationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface WaitProjectsLocationsOperationsRequest {
  /** The name of the operation resource to wait on. */
  name: string;
  /** Request body */
  body?: WaitOperationRequest;
}

export const WaitProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WaitOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3beta1/{name}:wait", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WaitProjectsLocationsOperationsRequest>;

export type WaitProjectsLocationsOperationsResponse = Operation;
export const WaitProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type WaitProjectsLocationsOperationsError = DefaultErrors;

/** Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done. */
export const waitProjectsLocationsOperations: API.OperationMethod<
  WaitProjectsLocationsOperationsRequest,
  WaitProjectsLocationsOperationsResponse,
  WaitProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WaitProjectsLocationsOperationsRequest,
  output: WaitProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsGlossariesRequest {
  /** Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing. */
  pageToken?: string;
  /** Required. The name of the project from which to list all of the glossaries. */
  parent: string;
  /** Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed. */
  filter?: string;
}

export const ListProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{parent}/glossaries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlossariesRequest>;

export type ListProjectsLocationsGlossariesResponse = ListGlossariesResponse;
export const ListProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGlossariesResponse;

export type ListProjectsLocationsGlossariesError = DefaultErrors;

/** Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist. */
export const listProjectsLocationsGlossaries: API.PaginatedOperationMethod<
  ListProjectsLocationsGlossariesRequest,
  ListProjectsLocationsGlossariesResponse,
  ListProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlossariesRequest,
  output: ListProjectsLocationsGlossariesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGlossariesRequest {
  /** Required. The name of the glossary to retrieve. */
  name: string;
}

export const GetProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3beta1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlossariesRequest>;

export type GetProjectsLocationsGlossariesResponse = Glossary;
export const GetProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Glossary;

export type GetProjectsLocationsGlossariesError = DefaultErrors;

/** Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist. */
export const getProjectsLocationsGlossaries: API.OperationMethod<
  GetProjectsLocationsGlossariesRequest,
  GetProjectsLocationsGlossariesResponse,
  GetProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlossariesRequest,
  output: GetProjectsLocationsGlossariesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsGlossariesRequest {
  /** Required. The name of the glossary to delete. */
  name: string;
}

export const DeleteProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3beta1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlossariesRequest>;

export type DeleteProjectsLocationsGlossariesResponse = Operation;
export const DeleteProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGlossariesError = DefaultErrors;

/** Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist. */
export const deleteProjectsLocationsGlossaries: API.OperationMethod<
  DeleteProjectsLocationsGlossariesRequest,
  DeleteProjectsLocationsGlossariesResponse,
  DeleteProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlossariesRequest,
  output: DeleteProjectsLocationsGlossariesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsGlossariesRequest {
  /** Required. The project name. */
  parent: string;
  /** Request body */
  body?: Glossary;
}

export const CreateProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Glossary).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3beta1/{parent}/glossaries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlossariesRequest>;

export type CreateProjectsLocationsGlossariesResponse = Operation;
export const CreateProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGlossariesError = DefaultErrors;

/** Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist. */
export const createProjectsLocationsGlossaries: API.OperationMethod<
  CreateProjectsLocationsGlossariesRequest,
  CreateProjectsLocationsGlossariesResponse,
  CreateProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlossariesRequest,
  output: CreateProjectsLocationsGlossariesResponse,
  errors: [],
}));
