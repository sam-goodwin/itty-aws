// ==========================================================================
// Google Cloud Translation API (translate v2)
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
  version: "v2",
  rootUrl: "https://translation.googleapis.com/",
  servicePath: "language/translate/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DetectLanguageRequest {
  /** The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs. */
  q?: ReadonlyArray<string>;
}

export const DetectLanguageRequest: Schema.Schema<DetectLanguageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    q: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DetectLanguageRequest" });

export interface GetSupportedLanguagesRequest {
  /** The language to use to return localized, human readable names of supported languages. */
  target?: string;
}

export const GetSupportedLanguagesRequest: Schema.Schema<GetSupportedLanguagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetSupportedLanguagesRequest" });

export interface LanguagesResource {
  /** Supported language code, generally consisting of its ISO 639-1 identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH') */
  language?: string;
  /** Human readable name of the language localized to the target language. */
  name?: string;
}

export const LanguagesResource: Schema.Schema<LanguagesResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    language: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguagesResource" });

export interface LanguagesListResponse {
  /** List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language. */
  languages?: ReadonlyArray<LanguagesResource>;
}

export const LanguagesListResponse: Schema.Schema<LanguagesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languages: Schema.optional(Schema.Array(LanguagesResource)),
  }).annotate({ identifier: "LanguagesListResponse" });

export type DetectionsResource = unknown;
export const DetectionsResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;

export interface TranslationsResource {
  /** The source language of the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language will not occur and this field will be empty. */
  detectedSourceLanguage?: string;
  /** Text translated into the target language. */
  translatedText?: string;
  /** The `model` type used for this translation. Valid values are listed in public documentation. Can be different from requested `model`. Present only if specific model type was explicitly requested. */
  model?: string;
}

export const TranslationsResource: Schema.Schema<TranslationsResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedSourceLanguage: Schema.optional(Schema.String),
    translatedText: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
  }).annotate({ identifier: "TranslationsResource" });

export interface TranslationsListResponse {
  /** Translations contains list of translation results of given text */
  translations?: ReadonlyArray<TranslationsResource>;
}

export const TranslationsListResponse: Schema.Schema<TranslationsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    translations: Schema.optional(Schema.Array(TranslationsResource)),
  }).annotate({ identifier: "TranslationsListResponse" });

export interface DetectionsListResponse {
  /** A detections contains detection results of several text */
  detections?: ReadonlyArray<DetectionsResource>;
}

export const DetectionsListResponse: Schema.Schema<DetectionsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detections: Schema.optional(Schema.Array(DetectionsResource)),
  }).annotate({ identifier: "DetectionsListResponse" });

export interface TranslateTextRequest {
  /** The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response. */
  source?: string;
  /** The `model` type requested for this translation. Valid values are listed in public documentation. */
  model?: string;
  /** The language to use for translation of the input text, set to one of the language codes listed in Language Support. */
  target?: string;
  /** The format of the source text, in either HTML (default) or plain-text. A value of "html" indicates HTML and a value of "text" indicates plain-text. */
  format?: string;
  /** The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs. */
  q?: ReadonlyArray<string>;
}

export const TranslateTextRequest: Schema.Schema<TranslateTextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    q: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TranslateTextRequest" });

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

export interface DetectDetectionsRequest {
  /** Pretty-print response. */
  pp?: boolean;
  /** OAuth bearer token. */
  bearer_token?: string;
  /** Request body */
  body?: DetectLanguageRequest;
}

export const DetectDetectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pp: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pp")),
    bearer_token: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bearer_token"),
    ),
    body: Schema.optional(DetectLanguageRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/detect", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DetectDetectionsRequest>;

export type DetectDetectionsResponse = DetectionsListResponse;
export const DetectDetectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetectionsListResponse;

export type DetectDetectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Detects the language of text within a request. */
export const detectDetections: API.OperationMethod<
  DetectDetectionsRequest,
  DetectDetectionsResponse,
  DetectDetectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetectDetectionsRequest,
  output: DetectDetectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDetectionsRequest {
  /** Pretty-print response. */
  pp?: boolean;
  /** OAuth bearer token. */
  bearer_token?: string;
  /** The input text upon which to perform language detection. Repeat this parameter to perform language detection on multiple text inputs. */
  q: string[];
}

export const ListDetectionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pp: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pp")),
  bearer_token: Schema.optional(Schema.String).pipe(
    T.HttpQuery("bearer_token"),
  ),
  q: Schema.Array(Schema.String).pipe(T.HttpQuery("q")),
}).pipe(
  T.Http({ method: "GET", path: "v2/detect" }),
  svc,
) as unknown as Schema.Schema<ListDetectionsRequest>;

export type ListDetectionsResponse = DetectionsListResponse;
export const ListDetectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetectionsListResponse;

export type ListDetectionsError = DefaultErrors | NotFound | Forbidden;

/** Detects the language of text within a request. */
export const listDetections: API.OperationMethod<
  ListDetectionsRequest,
  ListDetectionsResponse,
  ListDetectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDetectionsRequest,
  output: ListDetectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListTranslationsRequest {
  /** Pretty-print response. */
  pp?: boolean;
  /** OAuth bearer token. */
  bearer_token?: string;
  /** The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response. */
  source?: string;
  /** The `model` type requested for this translation. Valid values are listed in public documentation. */
  model?: string;
  /** The format of the source text, in either HTML (default) or plain-text. A value of "html" indicates HTML and a value of "text" indicates plain-text. */
  format?: "html" | "text" | (string & {});
  /** The language to use for translation of the input text, set to one of the language codes listed in Language Support. */
  target: string;
  /** The customization id for translate */
  cid?: string[];
  /** The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs. */
  q: string[];
}

export const ListTranslationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pp: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pp")),
    bearer_token: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bearer_token"),
    ),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    format: Schema.optional(Schema.String).pipe(T.HttpQuery("format")),
    target: Schema.String.pipe(T.HttpQuery("target")),
    cid: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("cid")),
    q: Schema.Array(Schema.String).pipe(T.HttpQuery("q")),
  }).pipe(
    T.Http({ method: "GET", path: "v2" }),
    svc,
  ) as unknown as Schema.Schema<ListTranslationsRequest>;

export type ListTranslationsResponse = TranslationsListResponse;
export const ListTranslationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslationsListResponse;

export type ListTranslationsError = DefaultErrors | NotFound | Forbidden;

/** Translates input text, returning translated text. */
export const listTranslations: API.OperationMethod<
  ListTranslationsRequest,
  ListTranslationsResponse,
  ListTranslationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTranslationsRequest,
  output: ListTranslationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TranslateTranslationsRequest {
  /** Pretty-print response. */
  pp?: boolean;
  /** OAuth bearer token. */
  bearer_token?: string;
  /** Request body */
  body?: TranslateTextRequest;
}

export const TranslateTranslationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pp: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pp")),
    bearer_token: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bearer_token"),
    ),
    body: Schema.optional(TranslateTextRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TranslateTranslationsRequest>;

export type TranslateTranslationsResponse = TranslationsListResponse;
export const TranslateTranslationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TranslationsListResponse;

export type TranslateTranslationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Translates input text, returning translated text. */
export const translateTranslations: API.OperationMethod<
  TranslateTranslationsRequest,
  TranslateTranslationsResponse,
  TranslateTranslationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TranslateTranslationsRequest,
  output: TranslateTranslationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListLanguagesRequest {
  /** Pretty-print response. */
  pp?: boolean;
  /** OAuth bearer token. */
  bearer_token?: string;
  /** The language to use to return localized, human readable names of supported languages. */
  target?: string;
  /** The model type for which supported languages should be returned. */
  model?: string;
}

export const ListLanguagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pp: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("pp")),
  bearer_token: Schema.optional(Schema.String).pipe(
    T.HttpQuery("bearer_token"),
  ),
  target: Schema.optional(Schema.String).pipe(T.HttpQuery("target")),
  model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
}).pipe(
  T.Http({ method: "GET", path: "v2/languages" }),
  svc,
) as unknown as Schema.Schema<ListLanguagesRequest>;

export type ListLanguagesResponse = LanguagesListResponse;
export const ListLanguagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LanguagesListResponse;

export type ListLanguagesError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of supported languages for translation. */
export const listLanguages: API.OperationMethod<
  ListLanguagesRequest,
  ListLanguagesResponse,
  ListLanguagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLanguagesRequest,
  output: ListLanguagesResponse,
  errors: [NotFound, Forbidden],
}));
