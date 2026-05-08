// ==========================================================================
// Cloud Translation API (translate v3)
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
  version: "v3",
  rootUrl: "https://translation.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface WaitOperationRequest {
  /** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
  timeout?: string;
}

export const WaitOperationRequest: Schema.Schema<WaitOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const DocumentTranslation: Schema.Schema<DocumentTranslation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    byteStreamOutputs: Schema.optional(Schema.Array(Schema.String)),
    mimeType: Schema.optional(Schema.String),
    detectedLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentTranslation" });

export interface Romanization {
  /** Romanized text. If an error occurs during romanization, this field might be excluded from the response. */
  romanizedText?: string;
  /** The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
  detectedLanguageCode?: string;
}

export const Romanization: Schema.Schema<Romanization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    romanizedText: Schema.optional(Schema.String),
    detectedLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Romanization" });

export interface GcsDestination {
  /** Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned. */
  outputUriPrefix?: string;
}

export const GcsDestination: Schema.Schema<GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputUriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsDestination" });

export interface OutputConfig {
  /** Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateTextRequest). Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are '\n' instead of '\r\n'. We don't provide any way to change record delimiters. While the input files are being processed, we write/update an index file 'index.csv' under 'output_uri_prefix' (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is: input_file,target_language_code,translations_file,errors_file, glossary_translations_file,glossary_errors_file input_file is one file we matched using gcs_source.input_uri. target_language_code is provided in the request. translations_file contains the translations. (details provided below) errors_file contains the errors during processing of the file. (details below). Both translations_file and errors_file could be empty strings if we have no content to output. glossary_translations_file and glossary_errors_file are always empty strings if the input_file is tsv. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The format of translations_file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_translations.[extension]` If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied. If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary_translations_file has format of `gs://translation_test/a_b_c_'trg'_glossary_translations.[extension]` The format of errors file (for target language code 'trg') is: `gs://translation_test/a_b_c_'trg'_errors.[extension]` If the input file extension is tsv, errors_file contains the following: Column 1: ID of the request provided in the input, if it's not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary. If the input file extension is txt or html, glossary_error_file will be generated that contains error details. glossary_error_file has format of `gs://translation_test/a_b_c_'trg'_glossary_errors.[extension]` */
  gcsDestination?: GcsDestination;
}

export const OutputConfig: Schema.Schema<OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsDestination),
  }).annotate({ identifier: "OutputConfig" });

export interface LanguageCodesSet {
  /** Optional. The ISO-639 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code. */
  languageCodes?: ReadonlyArray<string>;
}

export const LanguageCodesSet: Schema.Schema<LanguageCodesSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCodes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LanguageCodesSet" });

export interface LanguageCodePair {
  /** Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code. */
  sourceLanguageCode?: string;
  /** Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code. */
  targetLanguageCode?: string;
}

export const LanguageCodePair: Schema.Schema<LanguageCodePair> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceLanguageCode: Schema.optional(Schema.String),
    targetLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguageCodePair" });

export interface GcsSource {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
}

export const GcsSource: Schema.Schema<GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsSource" });

export interface GlossaryInputConfig {
  /** Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV (`.tsv`/`.csv`): Two column file, tab- or comma-separated. The first column is source text. The second column is target text. No headers in this file. The first row contains data and not column names. - TMX (`.tmx`): TMX file with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (`.csv`): Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more information - [glossaries](https://cloud.google.com/translate/docs/advanced/glossary). */
  gcsSource?: GcsSource;
}

export const GlossaryInputConfig: Schema.Schema<GlossaryInputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GcsSource),
  }).annotate({ identifier: "GlossaryInputConfig" });

export interface Glossary {
  /** Output only. When CreateGlossary was called. */
  submitTime?: string;
  /** Used with equivalent term set glossaries. */
  languageCodesSet?: LanguageCodesSet;
  /** Identifier. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`. */
  name?: string;
  /** Used with unidirectional glossaries. */
  languagePair?: LanguageCodePair;
  /** Output only. The number of entries defined in the glossary. */
  entryCount?: number;
  /** Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints. */
  inputConfig?: GlossaryInputConfig;
  /** Output only. When the glossary creation was finished. */
  endTime?: string;
  /** Optional. The display name of the glossary. */
  displayName?: string;
}

export const Glossary: Schema.Schema<Glossary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    submitTime: Schema.optional(Schema.String),
    languageCodesSet: Schema.optional(LanguageCodesSet),
    name: Schema.optional(Schema.String),
    languagePair: Schema.optional(LanguageCodePair),
    entryCount: Schema.optional(Schema.Number),
    inputConfig: Schema.optional(GlossaryInputConfig),
    endTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Glossary" });

export interface ListGlossariesResponse {
  /** The list of glossaries for a project. */
  glossaries?: ReadonlyArray<Glossary>;
  /** A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListGlossariesResponse: Schema.Schema<ListGlossariesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glossaries: Schema.optional(Schema.Array(Glossary)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGlossariesResponse" });

export interface SupportedLanguage {
  /** Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN'). */
  languageCode?: string;
  /** Human-readable name of the language localized in the display language specified in the request. */
  displayName?: string;
  /** Can be used as a source language. */
  supportSource?: boolean;
  /** Can be used as a target language. */
  supportTarget?: boolean;
}

export const SupportedLanguage: Schema.Schema<SupportedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    supportSource: Schema.optional(Schema.Boolean),
    supportTarget: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SupportedLanguage" });

export interface SupportedLanguages {
  /** A list of supported language responses. This list contains an entry for each language the Translation API supports. */
  languages?: ReadonlyArray<SupportedLanguage>;
}

export const SupportedLanguages: Schema.Schema<SupportedLanguages> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languages: Schema.optional(Schema.Array(SupportedLanguage)),
  }).annotate({ identifier: "SupportedLanguages" });

export interface TransliterationConfig {
  /** If true, source text in romanized form can be translated to the target language. */
  enableTransliteration?: boolean;
}

export const TransliterationConfig: Schema.Schema<TransliterationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableTransliteration: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TransliterationConfig" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface TranslateTextGlossaryConfig {
  /** Required. The `glossary` to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}` */
  glossary?: string;
  /** Optional. If set to true, the glossary will be used for contextual translation. */
  contextualTranslationEnabled?: boolean;
  /** Optional. Indicates match is case insensitive. The default value is `false` if missing. */
  ignoreCase?: boolean;
}

export const TranslateTextGlossaryConfig: Schema.Schema<TranslateTextGlossaryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glossary: Schema.optional(Schema.String),
    contextualTranslationEnabled: Schema.optional(Schema.Boolean),
    ignoreCase: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TranslateTextGlossaryConfig" });

export interface ReferenceSentencePair {
  /** Source sentence in the sentence pair. */
  sourceSentence?: string;
  /** Target sentence in the sentence pair. */
  targetSentence?: string;
}

export const ReferenceSentencePair: Schema.Schema<ReferenceSentencePair> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceSentence: Schema.optional(Schema.String),
    targetSentence: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReferenceSentencePair" });

export interface ReferenceSentencePairList {
  /** Reference sentence pairs. */
  referenceSentencePairs?: ReadonlyArray<ReferenceSentencePair>;
}

export const ReferenceSentencePairList: Schema.Schema<ReferenceSentencePairList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceSentencePairs: Schema.optional(
      Schema.Array(ReferenceSentencePair),
    ),
  }).annotate({ identifier: "ReferenceSentencePairList" });

export interface ReferenceSentenceConfig {
  /** Target language code. */
  targetLanguageCode?: string;
  /** Reference sentences pair lists. Each list will be used as the references to translate the sentence under "content" field at the corresponding index. Length of the list is required to be equal to the length of "content" field. */
  referenceSentencePairLists?: ReadonlyArray<ReferenceSentencePairList>;
  /** Source language code. */
  sourceLanguageCode?: string;
}

export const ReferenceSentenceConfig: Schema.Schema<ReferenceSentenceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetLanguageCode: Schema.optional(Schema.String),
    referenceSentencePairLists: Schema.optional(
      Schema.Array(ReferenceSentencePairList),
    ),
    sourceLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReferenceSentenceConfig" });

export interface AdaptiveMtFile {
  /** Identifier. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` */
  name?: string;
  /** The number of entries that the file contains. */
  entryCount?: number;
  /** Output only. Timestamp when this file was created. */
  createTime?: string;
  /** Output only. Timestamp when this file was last updated. */
  updateTime?: string;
  /** The file's display name. */
  displayName?: string;
}

export const AdaptiveMtFile: Schema.Schema<AdaptiveMtFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entryCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdaptiveMtFile" });

export interface AdaptiveMtSentence {
  /** Required. The source sentence. */
  sourceSentence?: string;
  /** Identifier. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}/adaptiveMtSentences/{sentence}` */
  name?: string;
  /** Required. The target sentence. */
  targetSentence?: string;
  /** Output only. Timestamp when this sentence was created. */
  createTime?: string;
  /** Output only. Timestamp when this sentence was last updated. */
  updateTime?: string;
}

export const AdaptiveMtSentence: Schema.Schema<AdaptiveMtSentence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceSentence: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    targetSentence: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdaptiveMtSentence" });

export interface ListAdaptiveMtSentencesResponse {
  /** Output only. The list of AdaptiveMtSentences. */
  adaptiveMtSentences?: ReadonlyArray<AdaptiveMtSentence>;
  /** Optional. */
  nextPageToken?: string;
}

export const ListAdaptiveMtSentencesResponse: Schema.Schema<ListAdaptiveMtSentencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adaptiveMtSentences: Schema.optional(Schema.Array(AdaptiveMtSentence)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAdaptiveMtSentencesResponse" });

export interface RefinementEntry {
  /** Required. The source text to be refined. */
  sourceText?: string;
  /** Required. The original translation of the source text. */
  originalTranslation?: string;
}

export const RefinementEntry: Schema.Schema<RefinementEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceText: Schema.optional(Schema.String),
    originalTranslation: Schema.optional(Schema.String),
  }).annotate({ identifier: "RefinementEntry" });

export interface ListAdaptiveMtFilesResponse {
  /** Output only. The Adaptive MT files. */
  adaptiveMtFiles?: ReadonlyArray<AdaptiveMtFile>;
  /** Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to `ListAdaptiveMtFiles` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListAdaptiveMtFilesResponse: Schema.Schema<ListAdaptiveMtFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adaptiveMtFiles: Schema.optional(Schema.Array(AdaptiveMtFile)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAdaptiveMtFilesResponse" });

export interface GlossaryConfig {
  /** Required. The `glossary` to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}` */
  glossary?: string;
  /** Optional. If set to true, the glossary will be used for contextual translation. */
  contextualTranslationEnabled?: boolean;
  /** Optional. Indicates match is case insensitive. The default value is `false` if missing. */
  ignoreCase?: boolean;
}

export const GlossaryConfig: Schema.Schema<GlossaryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glossary: Schema.optional(Schema.String),
    contextualTranslationEnabled: Schema.optional(Schema.Boolean),
    ignoreCase: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GlossaryConfig" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface Dataset {
  /** The BCP-47 language code of the target language. */
  targetLanguageCode?: string;
  /** Output only. Number of training examples (sentence pairs). */
  trainExampleCount?: number;
  /** The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}` */
  name?: string;
  /** Output only. The number of examples in the dataset. */
  exampleCount?: number;
  /** Output only. Timestamp when this dataset was created. */
  createTime?: string;
  /** Output only. Timestamp when this dataset was last updated. */
  updateTime?: string;
  /** The BCP-47 language code of the source language. */
  sourceLanguageCode?: string;
  /** Output only. Number of test examples (sentence pairs). */
  testExampleCount?: number;
  /** The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
  displayName?: string;
  /** Output only. Number of validation examples (sentence pairs). */
  validateExampleCount?: number;
}

export const Dataset: Schema.Schema<Dataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetLanguageCode: Schema.optional(Schema.String),
    trainExampleCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    exampleCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    sourceLanguageCode: Schema.optional(Schema.String),
    testExampleCount: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    validateExampleCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Dataset" });

export interface GlossaryTerm {
  /** The language for this glossary term. */
  languageCode?: string;
  /** The text for the glossary term. */
  text?: string;
}

export const GlossaryTerm: Schema.Schema<GlossaryTerm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GlossaryTerm" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RomanizeTextRequest {
  /** Required. The content of the input in string format. */
  contents?: ReadonlyArray<string>;
  /** Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages#roman). If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language for each content in the response. */
  sourceLanguageCode?: string;
}

export const RomanizeTextRequest: Schema.Schema<RomanizeTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.Array(Schema.String)),
    sourceLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RomanizeTextRequest" });

export interface RomanizeTextResponse {
  /** Text romanization responses. This field has the same length as `contents`. */
  romanizations?: ReadonlyArray<Romanization>;
}

export const RomanizeTextResponse: Schema.Schema<RomanizeTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    romanizations: Schema.optional(Schema.Array(Romanization)),
  }).annotate({ identifier: "RomanizeTextResponse" });

export interface GlossaryTermsSet {
  /** Each term in the set represents a term that can be replaced by the other terms. */
  terms?: ReadonlyArray<GlossaryTerm>;
}

export const GlossaryTermsSet: Schema.Schema<GlossaryTermsSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    terms: Schema.optional(Schema.Array(GlossaryTerm)),
  }).annotate({ identifier: "GlossaryTermsSet" });

export interface GlossaryTermsPair {
  /** The source term is the term that will get match in the text, */
  sourceTerm?: GlossaryTerm;
  /** The term that will replace the match source term. */
  targetTerm?: GlossaryTerm;
}

export const GlossaryTermsPair: Schema.Schema<GlossaryTermsPair> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceTerm: Schema.optional(GlossaryTerm),
    targetTerm: Schema.optional(GlossaryTerm),
  }).annotate({ identifier: "GlossaryTermsPair" });

export interface GlossaryEntry {
  /** Used for an equivalent term sets glossary. */
  termsSet?: GlossaryTermsSet;
  /** Used for an unidirectional glossary. */
  termsPair?: GlossaryTermsPair;
  /** Describes the glossary entry. */
  description?: string;
  /** Identifier. The resource name of the entry. Format: `projects/* /locations/* /glossaries/* /glossaryEntries/*` */
  name?: string;
}

export const GlossaryEntry: Schema.Schema<GlossaryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    termsSet: Schema.optional(GlossaryTermsSet),
    termsPair: Schema.optional(GlossaryTermsPair),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GlossaryEntry" });

export interface ListGlossaryEntriesResponse {
  /** Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls. */
  nextPageToken?: string;
  /** Optional. The Glossary Entries */
  glossaryEntries?: ReadonlyArray<GlossaryEntry>;
}

export const ListGlossaryEntriesResponse: Schema.Schema<ListGlossaryEntriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    glossaryEntries: Schema.optional(Schema.Array(GlossaryEntry)),
  }).annotate({ identifier: "ListGlossaryEntriesResponse" });

export interface Translation {
  /** Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
  model?: string;
  /** The `glossary_config` used for this translation. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
  detectedLanguageCode?: string;
  /** Text translated into the target language. If an error occurs during translation, this field might be excluded from the response. */
  translatedText?: string;
}

export const Translation: Schema.Schema<Translation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
    detectedLanguageCode: Schema.optional(Schema.String),
    translatedText: Schema.optional(Schema.String),
  }).annotate({ identifier: "Translation" });

export interface TranslateTextResponse {
  /** Text translation responses with no glossary applied. This field has the same length as `contents`. */
  translations?: ReadonlyArray<Translation>;
  /** Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`. */
  glossaryTranslations?: ReadonlyArray<Translation>;
}

export const TranslateTextResponse: Schema.Schema<TranslateTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    translations: Schema.optional(Schema.Array(Translation)),
    glossaryTranslations: Schema.optional(Schema.Array(Translation)),
  }).annotate({ identifier: "TranslateTextResponse" });

export interface FileInputSource {
  /** Required. The file's byte contents. */
  content?: string;
  /** Required. The file's mime type. */
  mimeType?: string;
  /** Required. The file's display name. */
  displayName?: string;
}

export const FileInputSource: Schema.Schema<FileInputSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileInputSource" });

export interface DocumentInputConfig {
  /** Document's content represented as a stream of bytes. */
  content?: string;
  /** Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf */
  gcsSource?: GcsSource;
  /** Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  mimeType?: string;
}

export const DocumentInputConfig: Schema.Schema<DocumentInputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GcsSource),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentInputConfig" });

export interface ListDatasetsResponse {
  /** The datasets read. */
  datasets?: ReadonlyArray<Dataset>;
  /** A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to obtain the corresponding page. */
  nextPageToken?: string;
}

export const ListDatasetsResponse: Schema.Schema<ListDatasetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(Dataset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDatasetsResponse" });

export interface DetectedLanguage {
  /** The ISO-639 language code of the source content in the request, detected automatically. */
  languageCode?: string;
  /** The confidence of the detection result for this language. */
  confidence?: number;
}

export const DetectedLanguage: Schema.Schema<DetectedLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DetectedLanguage" });

export interface BatchDocumentOutputConfig {
  /** Google Cloud Storage destination for output content. For every single input document (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateDocumentRequest). While the input documents are being processed, we write/update an index file `index.csv` under `gcs_destination.output_uri_prefix` (for example, gs://translation_output/index.csv) The index file is generated/updated as new files are being translated. The format is: input_document,target_language_code,translation_output,error_output, glossary_translation_output,glossary_error_output `input_document` is one file we matched using gcs_source.input_uri. `target_language_code` is provided in the request. `translation_output` contains the translations. (details provided below) `error_output` contains the error message during processing of the file. Both translations_file and errors_file could be empty strings if we have no content to output. `glossary_translation_output` and `glossary_error_output` are the translated output/error when we apply glossaries. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The naming format of translation output files follows (for target language code [trg]): `translation_output`: `gs://translation_output/a_b_c_[trg]_translation.[extension]` `glossary_translation_output`: `gs://translation_test/a_b_c_[trg]_glossary_translation.[extension]`. The output document will maintain the same file format as the input document. The naming format of error output files follows (for target language code [trg]): `error_output`: `gs://translation_test/a_b_c_[trg]_errors.txt` `glossary_error_output`: `gs://translation_test/a_b_c_[trg]_glossary_translation.txt`. The error output is a txt file containing error details. */
  gcsDestination?: GcsDestination;
}

export const BatchDocumentOutputConfig: Schema.Schema<BatchDocumentOutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsDestination),
  }).annotate({ identifier: "BatchDocumentOutputConfig" });

export interface DetectLanguageRequest {
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
  labels?: Record<string, string>;
  /** The content of the input stored as a string. */
  content?: string;
  /** Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used. */
  model?: string;
  /** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
  mimeType?: string;
  /** Optional. The document configuration of the input. */
  documentInputConfig?: DocumentInputConfig;
}

export const DetectLanguageRequest: Schema.Schema<DetectLanguageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    content: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    documentInputConfig: Schema.optional(DocumentInputConfig),
  }).annotate({ identifier: "DetectLanguageRequest" });

export interface DetectLanguageResponse {
  /** The most probable language detected by the Translation API. For each request, the Translation API will always return only one result. */
  languages?: ReadonlyArray<DetectedLanguage>;
}

export const DetectLanguageResponse: Schema.Schema<DetectLanguageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languages: Schema.optional(Schema.Array(DetectedLanguage)),
  }).annotate({ identifier: "DetectLanguageResponse" });

export interface GcsInputSource {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
}

export const GcsInputSource: Schema.Schema<GcsInputSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsInputSource" });

export interface InputFile {
  /** Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split. */
  usage?: string;
  /** Google Cloud Storage file source. */
  gcsSource?: GcsInputSource;
}

export const InputFile: Schema.Schema<InputFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usage: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GcsInputSource),
  }).annotate({ identifier: "InputFile" });

export interface DatasetInputConfig {
  /** Files containing the sentence pairs to be imported to the dataset. */
  inputFiles?: ReadonlyArray<InputFile>;
}

export const DatasetInputConfig: Schema.Schema<DatasetInputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputFiles: Schema.optional(Schema.Array(InputFile)),
  }).annotate({ identifier: "DatasetInputConfig" });

export interface ImportDataRequest {
  /** Required. The config for the input content. */
  inputConfig?: DatasetInputConfig;
}

export const ImportDataRequest: Schema.Schema<ImportDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(DatasetInputConfig),
  }).annotate({ identifier: "ImportDataRequest" });

export interface AdaptiveMtDataset {
  /** Identifier. The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}` */
  name?: string;
  /** The BCP-47 language code of the source language. */
  sourceLanguageCode?: string;
  /** The number of examples in the dataset. */
  exampleCount?: number;
  /** Output only. Timestamp when this dataset was created. */
  createTime?: string;
  /** Output only. Timestamp when this dataset was last updated. */
  updateTime?: string;
  /** The BCP-47 language code of the target language. */
  targetLanguageCode?: string;
  /** The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
  displayName?: string;
}

export const AdaptiveMtDataset: Schema.Schema<AdaptiveMtDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    sourceLanguageCode: Schema.optional(Schema.String),
    exampleCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    targetLanguageCode: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdaptiveMtDataset" });

export interface ListAdaptiveMtDatasetsResponse {
  /** Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to `ListAdaptiveMtDatasets` method to retrieve the next page of results. */
  nextPageToken?: string;
  /** Output only. A list of Adaptive MT datasets. */
  adaptiveMtDatasets?: ReadonlyArray<AdaptiveMtDataset>;
}

export const ListAdaptiveMtDatasetsResponse: Schema.Schema<ListAdaptiveMtDatasetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    adaptiveMtDatasets: Schema.optional(Schema.Array(AdaptiveMtDataset)),
  }).annotate({ identifier: "ListAdaptiveMtDatasetsResponse" });

export interface BatchDocumentInputConfig {
  /** Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.docx`) or a wildcard (for example, `gs://translation-test/*`). File mime type is determined based on extension. Supported mime type includes: - `pdf`, application/pdf - `docx`, application/vnd.openxmlformats-officedocument.wordprocessingml.document - `pptx`, application/vnd.openxmlformats-officedocument.presentationml.presentation - `xlsx`, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for `.docx`, `.pptx` and `.xlsx` is 100MB. The max file size to support for `.pdf` is 1GB and the max page limit is 1000 pages. The max file size to support for all input documents is 1GB. */
  gcsSource?: GcsSource;
}

export const BatchDocumentInputConfig: Schema.Schema<BatchDocumentInputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GcsSource),
  }).annotate({ identifier: "BatchDocumentInputConfig" });

export interface ImportAdaptiveMtFileRequest {
  /** Inline file source. */
  fileInputSource?: FileInputSource;
  /** Google Cloud Storage file source. */
  gcsInputSource?: GcsInputSource;
}

export const ImportAdaptiveMtFileRequest: Schema.Schema<ImportAdaptiveMtFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileInputSource: Schema.optional(FileInputSource),
    gcsInputSource: Schema.optional(GcsInputSource),
  }).annotate({ identifier: "ImportAdaptiveMtFileRequest" });

export interface GcsOutputDestination {
  /** Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`. The requesting user must have write permission to the bucket. The directory will be created if it doesn't exist. */
  outputUriPrefix?: string;
}

export const GcsOutputDestination: Schema.Schema<GcsOutputDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputUriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsOutputDestination" });

export interface DocumentOutputConfig {
  /** Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  mimeType?: string;
  /** Optional. Google Cloud Storage destination for the translation output, e.g., `gs://my_bucket/my_directory/`. The destination directory provided does not have to be empty, but the bucket must exist. If a file with the same name as the output file already exists in the destination an error will be returned. For a DocumentInputConfig.contents provided document, the output file will have the name "output_[trg]_translations.[ext]", where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. For a DocumentInputConfig.gcs_uri provided document, the output file will have a name according to its URI. For example: an input file with URI: `gs://a/b/c.[extension]` stored in a gcs_destination bucket with name "my_bucket" will have an output URI: `gs://my_bucket/a_b_c_[trg]_translations.[ext]`, where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If the document was directly provided through the request, then the output document will have the format: `gs://my_bucket/translated_document_[trg]_translations.[ext]`, where - [trg] corresponds to the translated file's language code, - [ext] corresponds to the translated file's extension according to its mime type. If a glossary was provided, then the output URI for the glossary translation will be equal to the default output URI but have `glossary_translations` instead of `translations`. For the previous example, its glossary URI would be: `gs://my_bucket/a_b_c_[trg]_glossary_translations.[ext]`. Thus the max number of output files will be 2 (Translated document, Glossary translated document). Callers should expect no partial outputs. If there is any error during document translation, no output will be stored in the Cloud Storage bucket. */
  gcsDestination?: GcsDestination;
}

export const DocumentOutputConfig: Schema.Schema<DocumentOutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    gcsDestination: Schema.optional(GcsDestination),
  }).annotate({ identifier: "DocumentOutputConfig" });

export interface TranslateDocumentRequest {
  /** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
  customizedAttribution?: string;
  /** Required. The ISO-639 language code to use for translation of the input document, set to one of the language codes listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCode?: string;
  /** Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated. */
  isTranslateNativePdfOnly?: boolean;
  /** Optional. If true, enable auto rotation correction in DVS. */
  enableRotationCorrection?: boolean;
  /** Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the desired output format. If not provided the translated file will only be returned through a byte-stream and its output mime type will be the same as the input file's mime type. */
  documentOutputConfig?: DocumentOutputConfig;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
  labels?: Record<string, string>;
  /** Required. Input configurations. */
  documentInputConfig?: DocumentInputConfig;
  /** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
  enableShadowRemovalNativePdf?: boolean;
  /** Optional. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model. */
  sourceLanguageCode?: string;
  /** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation. */
  model?: string;
}

export const TranslateDocumentRequest: Schema.Schema<TranslateDocumentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customizedAttribution: Schema.optional(Schema.String),
    targetLanguageCode: Schema.optional(Schema.String),
    isTranslateNativePdfOnly: Schema.optional(Schema.Boolean),
    enableRotationCorrection: Schema.optional(Schema.Boolean),
    glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
    documentOutputConfig: Schema.optional(DocumentOutputConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    documentInputConfig: Schema.optional(DocumentInputConfig),
    enableShadowRemovalNativePdf: Schema.optional(Schema.Boolean),
    sourceLanguageCode: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "TranslateDocumentRequest" });

export interface Model {
  /** Output only. Number of examples (sentence pairs) used to test the model. */
  testExampleCount?: number;
  /** The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
  displayName?: string;
  /** Output only. Number of examples (sentence pairs) used to validate the model. */
  validateExampleCount?: number;
  /** Output only. The BCP-47 language code of the source language. */
  sourceLanguageCode?: string;
  /** Required. The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}` */
  dataset?: string;
  /** Output only. The BCP-47 language code of the target language. */
  targetLanguageCode?: string;
  /** Output only. Number of examples (sentence pairs) used to train the model. */
  trainExampleCount?: number;
  /** The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}` */
  name?: string;
  /** Output only. Timestamp when the model resource was created, which is also when the training started. */
  createTime?: string;
  /** Output only. Timestamp when this model was last updated. */
  updateTime?: string;
}

export const Model: Schema.Schema<Model> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    testExampleCount: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    validateExampleCount: Schema.optional(Schema.Number),
    sourceLanguageCode: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    targetLanguageCode: Schema.optional(Schema.String),
    trainExampleCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Model" });

export interface ImportAdaptiveMtFileResponse {
  /** Output only. The Adaptive MT file that was imported. */
  adaptiveMtFile?: AdaptiveMtFile;
}

export const ImportAdaptiveMtFileResponse: Schema.Schema<ImportAdaptiveMtFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adaptiveMtFile: Schema.optional(AdaptiveMtFile),
  }).annotate({ identifier: "ImportAdaptiveMtFileResponse" });

export interface AdaptiveMtTranslateRequest {
  /** Required. The resource name for the dataset to use for adaptive MT translation. `projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}` */
  dataset?: string;
  /** Required. The content of the input in string format. */
  content?: ReadonlyArray<string>;
  /** Configuration for caller provided reference sentences. */
  referenceSentenceConfig?: ReferenceSentenceConfig;
  /** Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned. */
  glossaryConfig?: GlossaryConfig;
}

export const AdaptiveMtTranslateRequest: Schema.Schema<AdaptiveMtTranslateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    content: Schema.optional(Schema.Array(Schema.String)),
    referenceSentenceConfig: Schema.optional(ReferenceSentenceConfig),
    glossaryConfig: Schema.optional(GlossaryConfig),
  }).annotate({ identifier: "AdaptiveMtTranslateRequest" });

export interface RefineTextRequest {
  /** Required. The BCP-47 language code of the source text in the request, for example, "en-US". */
  sourceLanguageCode?: string;
  /** Required. The source texts and original translations in the source and target languages. */
  refinementEntries?: ReadonlyArray<RefinementEntry>;
  /** Required. The BCP-47 language code for translation output, for example, "zh-CN". */
  targetLanguageCode?: string;
}

export const RefineTextRequest: Schema.Schema<RefineTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceLanguageCode: Schema.optional(Schema.String),
    refinementEntries: Schema.optional(Schema.Array(RefinementEntry)),
    targetLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RefineTextRequest" });

export interface TranslateDocumentResponse {
  /** Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
  model?: string;
  /** The `glossary_config` used for this translation. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** Translated document. */
  documentTranslation?: DocumentTranslation;
  /** The document's translation output if a glossary is provided in the request. This can be the same as [TranslateDocumentResponse.document_translation] if no glossary terms apply. */
  glossaryDocumentTranslation?: DocumentTranslation;
}

export const TranslateDocumentResponse: Schema.Schema<TranslateDocumentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String),
    glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
    documentTranslation: Schema.optional(DocumentTranslation),
    glossaryDocumentTranslation: Schema.optional(DocumentTranslation),
  }).annotate({ identifier: "TranslateDocumentResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface InputConfig {
  /** Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty. */
  mimeType?: string;
  /** Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/*`). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\t' your_input_file.tsv The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text. */
  gcsSource?: GcsSource;
}

export const InputConfig: Schema.Schema<InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    gcsSource: Schema.optional(GcsSource),
  }).annotate({ identifier: "InputConfig" });

export interface AdaptiveMtTranslation {
  /** Output only. The translated text. */
  translatedText?: string;
}

export const AdaptiveMtTranslation: Schema.Schema<AdaptiveMtTranslation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    translatedText: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdaptiveMtTranslation" });

export interface AdaptiveMtTranslateResponse {
  /** Text translation response if a glossary is provided in the request. This could be the same as 'translation' above if no terms apply. */
  glossaryTranslations?: ReadonlyArray<AdaptiveMtTranslation>;
  /** Output only. The translation's language code. */
  languageCode?: string;
  /** Output only. The translation. */
  translations?: ReadonlyArray<AdaptiveMtTranslation>;
}

export const AdaptiveMtTranslateResponse: Schema.Schema<AdaptiveMtTranslateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glossaryTranslations: Schema.optional(Schema.Array(AdaptiveMtTranslation)),
    languageCode: Schema.optional(Schema.String),
    translations: Schema.optional(Schema.Array(AdaptiveMtTranslation)),
  }).annotate({ identifier: "AdaptiveMtTranslateResponse" });

export interface Example {
  /** Sentence in target language. */
  targetText?: string;
  /** Output only. The resource name of the example, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}` */
  name?: string;
  /** Sentence in source language. */
  sourceText?: string;
  /** Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST. */
  usage?: string;
}

export const Example: Schema.Schema<Example> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetText: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sourceText: Schema.optional(Schema.String),
    usage: Schema.optional(Schema.String),
  }).annotate({ identifier: "Example" });

export interface BatchTranslateDocumentRequest {
  /** Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
  models?: Record<string, string>;
  /** Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCodes?: ReadonlyArray<string>;
  /** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
  enableShadowRemovalNativePdf?: boolean;
  /** Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  sourceLanguageCode?: string;
  /** Optional. If true, only native pdf pages will be translated. */
  pdfNativeOnly?: boolean;
  /** Optional. Glossaries to be applied. It's keyed by target language code. */
  glossaries?: Record<string, TranslateTextGlossaryConfig>;
  /** Optional. If true, enable auto rotation correction in DVS. */
  enableRotationCorrection?: boolean;
  /** Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs. */
  outputConfig?: BatchDocumentOutputConfig;
  /** Optional. The file format conversion map that is applied to all input files. The map key is the original mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes: - `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document` If nothing specified, output files will be in the same format as the original file. */
  formatConversions?: Record<string, string>;
  /** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
  customizedAttribution?: string;
  /** Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding. */
  inputConfigs?: ReadonlyArray<BatchDocumentInputConfig>;
}

export const BatchTranslateDocumentRequest: Schema.Schema<BatchTranslateDocumentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    targetLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    enableShadowRemovalNativePdf: Schema.optional(Schema.Boolean),
    sourceLanguageCode: Schema.optional(Schema.String),
    pdfNativeOnly: Schema.optional(Schema.Boolean),
    glossaries: Schema.optional(
      Schema.Record(Schema.String, TranslateTextGlossaryConfig),
    ),
    enableRotationCorrection: Schema.optional(Schema.Boolean),
    outputConfig: Schema.optional(BatchDocumentOutputConfig),
    formatConversions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    customizedAttribution: Schema.optional(Schema.String),
    inputConfigs: Schema.optional(Schema.Array(BatchDocumentInputConfig)),
  }).annotate({ identifier: "BatchTranslateDocumentRequest" });

export interface BatchTranslateTextRequest {
  /** Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding. */
  inputConfigs?: ReadonlyArray<InputConfig>;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
  labels?: Record<string, string>;
  /** Optional. Glossaries to be applied for translation. It's keyed by target language code. */
  glossaries?: Record<string, TranslateTextGlossaryConfig>;
  /** Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs. */
  outputConfig?: OutputConfig;
  /** Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
  models?: Record<string, string>;
  /** Required. Specify up to 10 language codes here. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCodes?: ReadonlyArray<string>;
  /** Required. Source language code. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  sourceLanguageCode?: string;
}

export const BatchTranslateTextRequest: Schema.Schema<BatchTranslateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfigs: Schema.optional(Schema.Array(InputConfig)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    glossaries: Schema.optional(
      Schema.Record(Schema.String, TranslateTextGlossaryConfig),
    ),
    outputConfig: Schema.optional(OutputConfig),
    models: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    targetLanguageCodes: Schema.optional(Schema.Array(Schema.String)),
    sourceLanguageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchTranslateTextRequest" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface DatasetOutputConfig {
  /** Google Cloud Storage destination to write the output. */
  gcsDestination?: GcsOutputDestination;
}

export const DatasetOutputConfig: Schema.Schema<DatasetOutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsOutputDestination),
  }).annotate({ identifier: "DatasetOutputConfig" });

export interface ExportDataRequest {
  /** Required. The config for the output content. */
  outputConfig?: DatasetOutputConfig;
}

export const ExportDataRequest: Schema.Schema<ExportDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(DatasetOutputConfig),
  }).annotate({ identifier: "ExportDataRequest" });

export interface TranslateTextRequest {
  /** Optional. Transliteration to be applied. */
  transliterationConfig?: TransliterationConfig;
  /** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
  mimeType?: string;
  /** Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. */
  sourceLanguageCode?: string;
  /** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, - Translation LLM models: `projects/{project-number-or-id}/locations/{location-id}/models/general/translation-llm`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used */
  model?: string;
  /** Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
  targetLanguageCode?: string;
  /** Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text. */
  contents?: ReadonlyArray<string>;
  /** Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned. */
  glossaryConfig?: TranslateTextGlossaryConfig;
  /** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
  labels?: Record<string, string>;
}

export const TranslateTextRequest: Schema.Schema<TranslateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transliterationConfig: Schema.optional(TransliterationConfig),
    mimeType: Schema.optional(Schema.String),
    sourceLanguageCode: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    targetLanguageCode: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.Array(Schema.String)),
    glossaryConfig: Schema.optional(TranslateTextGlossaryConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "TranslateTextRequest" });

export interface ListExamplesResponse {
  /** The sentence pairs. */
  examples?: ReadonlyArray<Example>;
  /** A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page. */
  nextPageToken?: string;
}

export const ListExamplesResponse: Schema.Schema<ListExamplesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    examples: Schema.optional(Schema.Array(Example)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExamplesResponse" });

export interface ListModelsResponse {
  /** The models read. */
  models?: ReadonlyArray<Model>;
  /** A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to obtain the corresponding page. */
  nextPageToken?: string;
}

export const ListModelsResponse: Schema.Schema<ListModelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    models: Schema.optional(Schema.Array(Model)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListModelsResponse" });

export interface RefineTextResponse {
  /** The refined translations obtained from the original translations. */
  refinedTranslations?: ReadonlyArray<string>;
}

export const RefineTextResponse: Schema.Schema<RefineTextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refinedTranslations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RefineTextResponse" });

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
      path: "v3/{+parent}:translateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TranslateTextProjectsRequest>;

export type TranslateTextProjectsResponse = TranslateTextResponse;
export const TranslateTextProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslateTextResponse;

export type TranslateTextProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translates input text and returns translated text. */
export const translateTextProjects: API.OperationMethod<
  TranslateTextProjectsRequest,
  TranslateTextProjectsResponse,
  TranslateTextProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateTextProjectsRequest,
  output: TranslateTextProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RomanizeTextProjectsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. */
  parent: string;
  /** Request body */
  body?: RomanizeTextRequest;
}

export const RomanizeTextProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RomanizeTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}:romanizeText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RomanizeTextProjectsRequest>;

export type RomanizeTextProjectsResponse = RomanizeTextResponse;
export const RomanizeTextProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RomanizeTextResponse;

export type RomanizeTextProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Romanize input text written in non-Latin scripts to Latin text. */
export const romanizeTextProjects: API.OperationMethod<
  RomanizeTextProjectsRequest,
  RomanizeTextProjectsResponse,
  RomanizeTextProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RomanizeTextProjectsRequest,
  output: RomanizeTextProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "v3/{+parent}:detectLanguage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectLanguageProjectsRequest>;

export type DetectLanguageProjectsResponse = DetectLanguageResponse;
export const DetectLanguageProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetectLanguageResponse;

export type DetectLanguageProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Detects the language of text within a request. */
export const detectLanguageProjects: API.OperationMethod<
  DetectLanguageProjectsRequest,
  DetectLanguageProjectsResponse,
  DetectLanguageProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectLanguageProjectsRequest,
  output: DetectLanguageProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSupportedLanguagesProjectsRequest {
  /** Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. */
  displayLanguageCode?: string;
  /** Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. */
  model?: string;
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. */
  parent: string;
}

export const GetSupportedLanguagesProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayLanguageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("displayLanguageCode"),
    ),
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/supportedLanguages" }),
    svc,
  ) as unknown as Schema.Schema<GetSupportedLanguagesProjectsRequest>;

export type GetSupportedLanguagesProjectsResponse = SupportedLanguages;
export const GetSupportedLanguagesProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SupportedLanguages;

export type GetSupportedLanguagesProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of supported languages for translation. */
export const getSupportedLanguagesProjects: API.OperationMethod<
  GetSupportedLanguagesProjectsRequest,
  GetSupportedLanguagesProjectsResponse,
  GetSupportedLanguagesProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSupportedLanguagesProjectsRequest,
  output: GetSupportedLanguagesProjectsResponse,
  errors: [NotFound, Forbidden],
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
      path: "v3/{+parent}:batchTranslateDocument",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchTranslateDocumentProjectsLocationsRequest>;

export type BatchTranslateDocumentProjectsLocationsResponse = Operation;
export const BatchTranslateDocumentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchTranslateDocumentProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call. */
export const batchTranslateDocumentProjectsLocations: API.OperationMethod<
  BatchTranslateDocumentProjectsLocationsRequest,
  BatchTranslateDocumentProjectsLocationsResponse,
  BatchTranslateDocumentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchTranslateDocumentProjectsLocationsRequest,
  output: BatchTranslateDocumentProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "v3/{+parent}:batchTranslateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchTranslateTextProjectsLocationsRequest>;

export type BatchTranslateTextProjectsLocationsResponse = Operation;
export const BatchTranslateTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchTranslateTextProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call. */
export const batchTranslateTextProjectsLocations: API.OperationMethod<
  BatchTranslateTextProjectsLocationsRequest,
  BatchTranslateTextProjectsLocationsResponse,
  BatchTranslateTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchTranslateTextProjectsLocationsRequest,
  output: BatchTranslateTextProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "v3/{+parent}:detectLanguage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetectLanguageProjectsLocationsRequest>;

export type DetectLanguageProjectsLocationsResponse = DetectLanguageResponse;
export const DetectLanguageProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetectLanguageResponse;

export type DetectLanguageProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Detects the language of text within a request. */
export const detectLanguageProjectsLocations: API.OperationMethod<
  DetectLanguageProjectsLocationsRequest,
  DetectLanguageProjectsLocationsResponse,
  DetectLanguageProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectLanguageProjectsLocationsRequest,
  output: DetectLanguageProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "POST", path: "v3/{+parent}:refineText", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RefineTextProjectsLocationsRequest>;

export type RefineTextProjectsLocationsResponse = RefineTextResponse;
export const RefineTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RefineTextResponse;

export type RefineTextProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Refines the input translated text to improve the quality. */
export const refineTextProjectsLocations: API.OperationMethod<
  RefineTextProjectsLocationsRequest,
  RefineTextProjectsLocationsResponse,
  RefineTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RefineTextProjectsLocationsRequest,
  output: RefineTextProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RomanizeTextProjectsLocationsRequest {
  /** Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. */
  parent: string;
  /** Request body */
  body?: RomanizeTextRequest;
}

export const RomanizeTextProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RomanizeTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}:romanizeText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RomanizeTextProjectsLocationsRequest>;

export type RomanizeTextProjectsLocationsResponse = RomanizeTextResponse;
export const RomanizeTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RomanizeTextResponse;

export type RomanizeTextProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Romanize input text written in non-Latin scripts to Latin text. */
export const romanizeTextProjectsLocations: API.OperationMethod<
  RomanizeTextProjectsLocationsRequest,
  RomanizeTextProjectsLocationsResponse,
  RomanizeTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RomanizeTextProjectsLocationsRequest,
  output: RomanizeTextProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TranslateDocumentProjectsLocationsRequest {
  /** Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. */
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
      path: "v3/{+parent}:translateDocument",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TranslateDocumentProjectsLocationsRequest>;

export type TranslateDocumentProjectsLocationsResponse =
  TranslateDocumentResponse;
export const TranslateDocumentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslateDocumentResponse;

export type TranslateDocumentProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translates documents in synchronous mode. */
export const translateDocumentProjectsLocations: API.OperationMethod<
  TranslateDocumentProjectsLocationsRequest,
  TranslateDocumentProjectsLocationsResponse,
  TranslateDocumentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateDocumentProjectsLocationsRequest,
  output: TranslateDocumentProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AdaptiveMtTranslateProjectsLocationsRequest {
  /** Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. */
  parent: string;
  /** Request body */
  body?: AdaptiveMtTranslateRequest;
}

export const AdaptiveMtTranslateProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AdaptiveMtTranslateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}:adaptiveMtTranslate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AdaptiveMtTranslateProjectsLocationsRequest>;

export type AdaptiveMtTranslateProjectsLocationsResponse =
  AdaptiveMtTranslateResponse;
export const AdaptiveMtTranslateProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdaptiveMtTranslateResponse;

export type AdaptiveMtTranslateProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translate text using Adaptive MT. */
export const adaptiveMtTranslateProjectsLocations: API.OperationMethod<
  AdaptiveMtTranslateProjectsLocationsRequest,
  AdaptiveMtTranslateProjectsLocationsResponse,
  AdaptiveMtTranslateProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AdaptiveMtTranslateProjectsLocationsRequest,
  output: AdaptiveMtTranslateProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method can be called in two ways: * **List all public locations:** Use the path `GET /v1/locations`. * **List project-visible locations:** Use the path `GET /v1/projects/{project_id}/locations`. This may include public locations as well as private or other locations specifically visible to the project. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "v3/{+parent}:translateText",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TranslateTextProjectsLocationsRequest>;

export type TranslateTextProjectsLocationsResponse = TranslateTextResponse;
export const TranslateTextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslateTextResponse;

export type TranslateTextProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translates input text and returns translated text. */
export const translateTextProjectsLocations: API.OperationMethod<
  TranslateTextProjectsLocationsRequest,
  TranslateTextProjectsLocationsResponse,
  TranslateTextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateTextProjectsLocationsRequest,
  output: TranslateTextProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "GET", path: "v3/{+parent}/supportedLanguages" }),
    svc,
  ) as unknown as Schema.Schema<GetSupportedLanguagesProjectsLocationsRequest>;

export type GetSupportedLanguagesProjectsLocationsResponse = SupportedLanguages;
export const GetSupportedLanguagesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SupportedLanguages;

export type GetSupportedLanguagesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of supported languages for translation. */
export const getSupportedLanguagesProjectsLocations: API.OperationMethod<
  GetSupportedLanguagesProjectsLocationsRequest,
  GetSupportedLanguagesProjectsLocationsResponse,
  GetSupportedLanguagesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSupportedLanguagesProjectsLocationsRequest,
  output: GetSupportedLanguagesProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlossariesRequest {
  /** Required. The name of the project from which to list all of the glossaries. */
  parent: string;
  /** Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed. */
  filter?: string;
  /** Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing. */
  pageToken?: string;
}

export const ListProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/glossaries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlossariesRequest>;

export type ListProjectsLocationsGlossariesResponse = ListGlossariesResponse;
export const ListProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGlossariesResponse;

export type ListProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist. */
export const listProjectsLocationsGlossaries: API.PaginatedOperationMethod<
  ListProjectsLocationsGlossariesRequest,
  ListProjectsLocationsGlossariesResponse,
  ListProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlossariesRequest,
  output: ListProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGlossariesRequest {
  /** Required. The name of the glossary to delete. */
  name: string;
}

export const DeleteProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlossariesRequest>;

export type DeleteProjectsLocationsGlossariesResponse = Operation;
export const DeleteProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist. */
export const deleteProjectsLocationsGlossaries: API.OperationMethod<
  DeleteProjectsLocationsGlossariesRequest,
  DeleteProjectsLocationsGlossariesResponse,
  DeleteProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlossariesRequest,
  output: DeleteProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlossariesRequest {
  /** Identifier. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`. */
  name: string;
  /** The list of fields to be updated. Currently, only `display_name` and `input_config` are supported. */
  updateMask?: string;
  /** Request body */
  body?: Glossary;
}

export const PatchProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Glossary).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlossariesRequest>;

export type PatchProjectsLocationsGlossariesResponse = Operation;
export const PatchProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated. */
export const patchProjectsLocationsGlossaries: API.OperationMethod<
  PatchProjectsLocationsGlossariesRequest,
  PatchProjectsLocationsGlossariesResponse,
  PatchProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlossariesRequest,
  output: PatchProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlossariesRequest {
  /** Required. The name of the glossary to retrieve. */
  name: string;
}

export const GetProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlossariesRequest>;

export type GetProjectsLocationsGlossariesResponse = Glossary;
export const GetProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Glossary;

export type GetProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist. */
export const getProjectsLocationsGlossaries: API.OperationMethod<
  GetProjectsLocationsGlossariesRequest,
  GetProjectsLocationsGlossariesResponse,
  GetProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlossariesRequest,
  output: GetProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden],
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
    T.Http({ method: "POST", path: "v3/{+parent}/glossaries", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlossariesRequest>;

export type CreateProjectsLocationsGlossariesResponse = Operation;
export const CreateProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist. */
export const createProjectsLocationsGlossaries: API.OperationMethod<
  CreateProjectsLocationsGlossariesRequest,
  CreateProjectsLocationsGlossariesResponse,
  CreateProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlossariesRequest,
  output: CreateProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlossariesGlossaryEntriesRequest {
  /** Required. The resource name of the glossary entry to get */
  name: string;
}

export const GetProjectsLocationsGlossariesGlossaryEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlossariesGlossaryEntriesRequest>;

export type GetProjectsLocationsGlossariesGlossaryEntriesResponse =
  GlossaryEntry;
export const GetProjectsLocationsGlossariesGlossaryEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GlossaryEntry;

export type GetProjectsLocationsGlossariesGlossaryEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single glossary entry by the given id. */
export const getProjectsLocationsGlossariesGlossaryEntries: API.OperationMethod<
  GetProjectsLocationsGlossariesGlossaryEntriesRequest,
  GetProjectsLocationsGlossariesGlossaryEntriesResponse,
  GetProjectsLocationsGlossariesGlossaryEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlossariesGlossaryEntriesRequest,
  output: GetProjectsLocationsGlossariesGlossaryEntriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGlossariesGlossaryEntriesRequest {
  /** Required. The resource name of the glossary to create the entry under. */
  parent: string;
  /** Request body */
  body?: GlossaryEntry;
}

export const CreateProjectsLocationsGlossariesGlossaryEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GlossaryEntry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/glossaryEntries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlossariesGlossaryEntriesRequest>;

export type CreateProjectsLocationsGlossariesGlossaryEntriesResponse =
  GlossaryEntry;
export const CreateProjectsLocationsGlossariesGlossaryEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GlossaryEntry;

export type CreateProjectsLocationsGlossariesGlossaryEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a glossary entry. */
export const createProjectsLocationsGlossariesGlossaryEntries: API.OperationMethod<
  CreateProjectsLocationsGlossariesGlossaryEntriesRequest,
  CreateProjectsLocationsGlossariesGlossaryEntriesResponse,
  CreateProjectsLocationsGlossariesGlossaryEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlossariesGlossaryEntriesRequest,
  output: CreateProjectsLocationsGlossariesGlossaryEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlossariesGlossaryEntriesRequest {
  /** Identifier. The resource name of the entry. Format: `projects/* /locations/* /glossaries/* /glossaryEntries/*` */
  name: string;
  /** Request body */
  body?: GlossaryEntry;
}

export const PatchProjectsLocationsGlossariesGlossaryEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GlossaryEntry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v3/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlossariesGlossaryEntriesRequest>;

export type PatchProjectsLocationsGlossariesGlossaryEntriesResponse =
  GlossaryEntry;
export const PatchProjectsLocationsGlossariesGlossaryEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GlossaryEntry;

export type PatchProjectsLocationsGlossariesGlossaryEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a glossary entry. */
export const patchProjectsLocationsGlossariesGlossaryEntries: API.OperationMethod<
  PatchProjectsLocationsGlossariesGlossaryEntriesRequest,
  PatchProjectsLocationsGlossariesGlossaryEntriesResponse,
  PatchProjectsLocationsGlossariesGlossaryEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlossariesGlossaryEntriesRequest,
  output: PatchProjectsLocationsGlossariesGlossaryEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGlossariesGlossaryEntriesRequest {
  /** Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing. */
  pageToken?: string;
  /** Required. The parent glossary resource name for listing the glossary's entries. */
  parent: string;
  /** Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsGlossariesGlossaryEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/glossaryEntries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlossariesGlossaryEntriesRequest>;

export type ListProjectsLocationsGlossariesGlossaryEntriesResponse =
  ListGlossaryEntriesResponse;
export const ListProjectsLocationsGlossariesGlossaryEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGlossaryEntriesResponse;

export type ListProjectsLocationsGlossariesGlossaryEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the entries for the glossary. */
export const listProjectsLocationsGlossariesGlossaryEntries: API.PaginatedOperationMethod<
  ListProjectsLocationsGlossariesGlossaryEntriesRequest,
  ListProjectsLocationsGlossariesGlossaryEntriesResponse,
  ListProjectsLocationsGlossariesGlossaryEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlossariesGlossaryEntriesRequest,
  output: ListProjectsLocationsGlossariesGlossaryEntriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGlossariesGlossaryEntriesRequest {
  /** Required. The resource name of the glossary entry to delete */
  name: string;
}

export const DeleteProjectsLocationsGlossariesGlossaryEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlossariesGlossaryEntriesRequest>;

export type DeleteProjectsLocationsGlossariesGlossaryEntriesResponse = Empty;
export const DeleteProjectsLocationsGlossariesGlossaryEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsGlossariesGlossaryEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single entry from the glossary */
export const deleteProjectsLocationsGlossariesGlossaryEntries: API.OperationMethod<
  DeleteProjectsLocationsGlossariesGlossaryEntriesRequest,
  DeleteProjectsLocationsGlossariesGlossaryEntriesResponse,
  DeleteProjectsLocationsGlossariesGlossaryEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlossariesGlossaryEntriesRequest,
  output: DeleteProjectsLocationsGlossariesGlossaryEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
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
    T.Http({ method: "POST", path: "v3/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "POST", path: "v3/{+name}:wait", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WaitProjectsLocationsOperationsRequest>;

export type WaitProjectsLocationsOperationsResponse = Operation;
export const WaitProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type WaitProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done. */
export const waitProjectsLocationsOperations: API.OperationMethod<
  WaitProjectsLocationsOperationsRequest,
  WaitProjectsLocationsOperationsResponse,
  WaitProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WaitProjectsLocationsOperationsRequest,
  output: WaitProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAdaptiveMtDatasetsRequest {
  /** Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}` */
  name: string;
}

export const GetProjectsLocationsAdaptiveMtDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAdaptiveMtDatasetsRequest>;

export type GetProjectsLocationsAdaptiveMtDatasetsResponse = AdaptiveMtDataset;
export const GetProjectsLocationsAdaptiveMtDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdaptiveMtDataset;

export type GetProjectsLocationsAdaptiveMtDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the Adaptive MT dataset. */
export const getProjectsLocationsAdaptiveMtDatasets: API.OperationMethod<
  GetProjectsLocationsAdaptiveMtDatasetsRequest,
  GetProjectsLocationsAdaptiveMtDatasetsResponse,
  GetProjectsLocationsAdaptiveMtDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAdaptiveMtDatasetsRequest,
  output: GetProjectsLocationsAdaptiveMtDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAdaptiveMtDatasetsRequest {
  /** Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}` */
  parent: string;
  /** Request body */
  body?: AdaptiveMtDataset;
}

export const CreateProjectsLocationsAdaptiveMtDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AdaptiveMtDataset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}/adaptiveMtDatasets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAdaptiveMtDatasetsRequest>;

export type CreateProjectsLocationsAdaptiveMtDatasetsResponse =
  AdaptiveMtDataset;
export const CreateProjectsLocationsAdaptiveMtDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdaptiveMtDataset;

export type CreateProjectsLocationsAdaptiveMtDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an Adaptive MT dataset. */
export const createProjectsLocationsAdaptiveMtDatasets: API.OperationMethod<
  CreateProjectsLocationsAdaptiveMtDatasetsRequest,
  CreateProjectsLocationsAdaptiveMtDatasetsResponse,
  CreateProjectsLocationsAdaptiveMtDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAdaptiveMtDatasetsRequest,
  output: CreateProjectsLocationsAdaptiveMtDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsRequest {
  /** Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}` */
  parent: string;
  /** Request body */
  body?: ImportAdaptiveMtFileRequest;
}

export const ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportAdaptiveMtFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/{+parent}:importAdaptiveMtFile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsRequest>;

export type ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsResponse =
  ImportAdaptiveMtFileResponse;
export const ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImportAdaptiveMtFileResponse;

export type ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset. */
export const importAdaptiveMtFileProjectsLocationsAdaptiveMtDatasets: API.OperationMethod<
  ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsRequest,
  ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsResponse,
  ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsRequest,
  output: ImportAdaptiveMtFileProjectsLocationsAdaptiveMtDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAdaptiveMtDatasetsRequest {
  /** Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}` */
  name: string;
}

export const DeleteProjectsLocationsAdaptiveMtDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAdaptiveMtDatasetsRequest>;

export type DeleteProjectsLocationsAdaptiveMtDatasetsResponse = Empty;
export const DeleteProjectsLocationsAdaptiveMtDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAdaptiveMtDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an Adaptive MT dataset, including all its entries and associated metadata. */
export const deleteProjectsLocationsAdaptiveMtDatasets: API.OperationMethod<
  DeleteProjectsLocationsAdaptiveMtDatasetsRequest,
  DeleteProjectsLocationsAdaptiveMtDatasetsResponse,
  DeleteProjectsLocationsAdaptiveMtDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAdaptiveMtDatasetsRequest,
  output: DeleteProjectsLocationsAdaptiveMtDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAdaptiveMtDatasetsRequest {
  /** Required. The resource name of the project from which to list the Adaptive MT datasets. `projects/{project-number-or-id}/locations/{location-id}` */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Filter is not supported yet. */
  filter?: string;
  /** Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing. */
  pageToken?: string;
}

export const ListProjectsLocationsAdaptiveMtDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/adaptiveMtDatasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAdaptiveMtDatasetsRequest>;

export type ListProjectsLocationsAdaptiveMtDatasetsResponse =
  ListAdaptiveMtDatasetsResponse;
export const ListProjectsLocationsAdaptiveMtDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAdaptiveMtDatasetsResponse;

export type ListProjectsLocationsAdaptiveMtDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Adaptive MT datasets for which the caller has read permission. */
export const listProjectsLocationsAdaptiveMtDatasets: API.PaginatedOperationMethod<
  ListProjectsLocationsAdaptiveMtDatasetsRequest,
  ListProjectsLocationsAdaptiveMtDatasetsResponse,
  ListProjectsLocationsAdaptiveMtDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAdaptiveMtDatasetsRequest,
  output: ListProjectsLocationsAdaptiveMtDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest {
  /** Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` */
  name: string;
}

export const GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest>;

export type GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse =
  AdaptiveMtFile;
export const GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdaptiveMtFile;

export type GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets and AdaptiveMtFile */
export const getProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFiles: API.OperationMethod<
  GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest,
  GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse,
  GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest,
  output: GetProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest {
  /** Required. The resource name of the file to delete, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` */
  name: string;
}

export const DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest>;

export type DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse =
  Empty;
export const DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an AdaptiveMtFile along with its sentences. */
export const deleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFiles: API.OperationMethod<
  DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest,
  DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse,
  DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest,
  output: DeleteProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest {
  /** Required. The resource name of the dataset from which to list the Adaptive MT files. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}` */
  parent: string;
  /** Optional. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing. */
  pageToken?: string;
}

export const ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/adaptiveMtFiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest>;

export type ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse =
  ListAdaptiveMtFilesResponse;
export const ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAdaptiveMtFilesResponse;

export type ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset. */
export const listProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFiles: API.PaginatedOperationMethod<
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest,
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse,
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesRequest,
  output: ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesRequest {
  pageSize?: number;
  /** Required. The resource name of the Adaptive MT file from which to list the sentences. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}` */
  parent: string;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing. */
  pageToken?: string;
}

export const ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/adaptiveMtSentences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesRequest>;

export type ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesResponse =
  ListAdaptiveMtSentencesResponse;
export const ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAdaptiveMtSentencesResponse;

export type ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all AdaptiveMtSentences under a given file/dataset. */
export const listProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentences: API.PaginatedOperationMethod<
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesRequest,
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesResponse,
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesRequest,
  output:
    ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesRequest {
  pageSize?: number;
  /** Required. The resource name of the Adaptive MT file from which to list the sentences. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}` */
  parent: string;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing. */
  pageToken?: string;
}

export const ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/adaptiveMtSentences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesRequest>;

export type ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesResponse =
  ListAdaptiveMtSentencesResponse;
export const ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAdaptiveMtSentencesResponse;

export type ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all AdaptiveMtSentences under a given file/dataset. */
export const listProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentences: API.PaginatedOperationMethod<
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesRequest,
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesResponse,
  ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesRequest,
  output: ListProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ImportDataProjectsLocationsDatasetsRequest {
  /** Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}` */
  dataset: string;
  /** Request body */
  body?: ImportDataRequest;
}

export const ImportDataProjectsLocationsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String.pipe(T.HttpPath("dataset")),
    body: Schema.optional(ImportDataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+dataset}:importData", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ImportDataProjectsLocationsDatasetsRequest>;

export type ImportDataProjectsLocationsDatasetsResponse = Operation;
export const ImportDataProjectsLocationsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportDataProjectsLocationsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Import sentence pairs into translation Dataset. */
export const importDataProjectsLocationsDatasets: API.OperationMethod<
  ImportDataProjectsLocationsDatasetsRequest,
  ImportDataProjectsLocationsDatasetsResponse,
  ImportDataProjectsLocationsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportDataProjectsLocationsDatasetsRequest,
  output: ImportDataProjectsLocationsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDatasetsRequest {
  /** Optional. Requested page size. The server can return fewer results than requested. */
  pageSize?: number;
  /** Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}` */
  parent: string;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call. */
  pageToken?: string;
}

export const ListProjectsLocationsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/datasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDatasetsRequest>;

export type ListProjectsLocationsDatasetsResponse = ListDatasetsResponse;
export const ListProjectsLocationsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDatasetsResponse;

export type ListProjectsLocationsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists datasets. */
export const listProjectsLocationsDatasets: API.PaginatedOperationMethod<
  ListProjectsLocationsDatasetsRequest,
  ListProjectsLocationsDatasetsResponse,
  ListProjectsLocationsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDatasetsRequest,
  output: ListProjectsLocationsDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsDatasetsRequest {
  /** Required. The name of the dataset to delete. */
  name: string;
}

export const DeleteProjectsLocationsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDatasetsRequest>;

export type DeleteProjectsLocationsDatasetsResponse = Operation;
export const DeleteProjectsLocationsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a dataset and all of its contents. */
export const deleteProjectsLocationsDatasets: API.OperationMethod<
  DeleteProjectsLocationsDatasetsRequest,
  DeleteProjectsLocationsDatasetsResponse,
  DeleteProjectsLocationsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDatasetsRequest,
  output: DeleteProjectsLocationsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDatasetsRequest {
  /** Required. The resource name of the dataset to retrieve. */
  name: string;
}

export const GetProjectsLocationsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDatasetsRequest>;

export type GetProjectsLocationsDatasetsResponse = Dataset;
export const GetProjectsLocationsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Dataset;

export type GetProjectsLocationsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Dataset. */
export const getProjectsLocationsDatasets: API.OperationMethod<
  GetProjectsLocationsDatasetsRequest,
  GetProjectsLocationsDatasetsResponse,
  GetProjectsLocationsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDatasetsRequest,
  output: GetProjectsLocationsDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDatasetsRequest {
  /** Required. The project name. */
  parent: string;
  /** Request body */
  body?: Dataset;
}

export const CreateProjectsLocationsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Dataset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/datasets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDatasetsRequest>;

export type CreateProjectsLocationsDatasetsResponse = Operation;
export const CreateProjectsLocationsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Dataset. */
export const createProjectsLocationsDatasets: API.OperationMethod<
  CreateProjectsLocationsDatasetsRequest,
  CreateProjectsLocationsDatasetsResponse,
  CreateProjectsLocationsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDatasetsRequest,
  output: CreateProjectsLocationsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportDataProjectsLocationsDatasetsRequest {
  /** Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}` */
  dataset: string;
  /** Request body */
  body?: ExportDataRequest;
}

export const ExportDataProjectsLocationsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String.pipe(T.HttpPath("dataset")),
    body: Schema.optional(ExportDataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+dataset}:exportData", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportDataProjectsLocationsDatasetsRequest>;

export type ExportDataProjectsLocationsDatasetsResponse = Operation;
export const ExportDataProjectsLocationsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportDataProjectsLocationsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports dataset's data to the provided output location. */
export const exportDataProjectsLocationsDatasets: API.OperationMethod<
  ExportDataProjectsLocationsDatasetsRequest,
  ExportDataProjectsLocationsDatasetsResponse,
  ExportDataProjectsLocationsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportDataProjectsLocationsDatasetsRequest,
  output: ExportDataProjectsLocationsDatasetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDatasetsExamplesRequest {
  /** Required. Name of the parent dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}` */
  parent: string;
  /** Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN` */
  filter?: string;
  /** Optional. Requested page size. The server can return fewer results than requested. */
  pageSize?: number;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call. */
  pageToken?: string;
}

export const ListProjectsLocationsDatasetsExamplesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/examples" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDatasetsExamplesRequest>;

export type ListProjectsLocationsDatasetsExamplesResponse =
  ListExamplesResponse;
export const ListProjectsLocationsDatasetsExamplesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExamplesResponse;

export type ListProjectsLocationsDatasetsExamplesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists sentence pairs in the dataset. */
export const listProjectsLocationsDatasetsExamples: API.PaginatedOperationMethod<
  ListProjectsLocationsDatasetsExamplesRequest,
  ListProjectsLocationsDatasetsExamplesResponse,
  ListProjectsLocationsDatasetsExamplesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDatasetsExamplesRequest,
  output: ListProjectsLocationsDatasetsExamplesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsModelsRequest {
  /** Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}` */
  parent: string;
  /** Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}` */
  filter?: string;
  /** Optional. Requested page size. The server can return fewer results than requested. */
  pageSize?: number;
  /** Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call. */
  pageToken?: string;
}

export const ListProjectsLocationsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+parent}/models" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsModelsRequest>;

export type ListProjectsLocationsModelsResponse = ListModelsResponse;
export const ListProjectsLocationsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListModelsResponse;

export type ListProjectsLocationsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists models. */
export const listProjectsLocationsModels: API.PaginatedOperationMethod<
  ListProjectsLocationsModelsRequest,
  ListProjectsLocationsModelsResponse,
  ListProjectsLocationsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsModelsRequest,
  output: ListProjectsLocationsModelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsModelsRequest {
  /** Required. The name of the model to delete. */
  name: string;
}

export const DeleteProjectsLocationsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsModelsRequest>;

export type DeleteProjectsLocationsModelsResponse = Operation;
export const DeleteProjectsLocationsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a model. */
export const deleteProjectsLocationsModels: API.OperationMethod<
  DeleteProjectsLocationsModelsRequest,
  DeleteProjectsLocationsModelsResponse,
  DeleteProjectsLocationsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsModelsRequest,
  output: DeleteProjectsLocationsModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsModelsRequest {
  /** Required. The resource name of the model to retrieve. */
  name: string;
}

export const GetProjectsLocationsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsModelsRequest>;

export type GetProjectsLocationsModelsResponse = Model;
export const GetProjectsLocationsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Model;

export type GetProjectsLocationsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a model. */
export const getProjectsLocationsModels: API.OperationMethod<
  GetProjectsLocationsModelsRequest,
  GetProjectsLocationsModelsResponse,
  GetProjectsLocationsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsModelsRequest,
  output: GetProjectsLocationsModelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsModelsRequest {
  /** Required. The project name, in form of `projects/{project}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: Model;
}

export const CreateProjectsLocationsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Model).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v3/{+parent}/models", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsModelsRequest>;

export type CreateProjectsLocationsModelsResponse = Operation;
export const CreateProjectsLocationsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Model. */
export const createProjectsLocationsModels: API.OperationMethod<
  CreateProjectsLocationsModelsRequest,
  CreateProjectsLocationsModelsResponse,
  CreateProjectsLocationsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsModelsRequest,
  output: CreateProjectsLocationsModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
