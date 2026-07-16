/**
 * Cloudflare AI API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service ai
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class AccountNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AccountNotFound>()("AccountNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class ModelNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ModelNotFound>()("ModelNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }, { code: 7000 }],
) {}

export class ModelNotSupported extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ModelNotSupported>()("ModelNotSupported", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1000 }],
) {}

export class ModelSchemaNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ModelSchemaNotFound>()("ModelSchemaNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 6002 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ResponseFormat {
  jsonSchema?: unknown | null;
  type?: "json_object" | "json_schema" | (string & {}) | null;
}
const ResponseFormat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    jsonSchema: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["json_object", "json_schema"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ jsonSchema: "json_schema", type: "type" })),
) as unknown as Schema.Codec<ResponseFormat>;

interface RunAiRequestMessageContent {
  /** Text content */
  text?: string | null;
  /** Type of the content (text) */
  type?: string | null;
}
const RunAiRequestMessageContent = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    text: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<RunAiRequestMessageContent>;

interface Message {
  /** The content of the message as a string. */
  content: string | { text?: string | null; type?: string | null }[];
  /** The role of the message sender (e.g., 'user', 'assistant', 'system', 'tool'). */
  role: string;
}
const Message = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.Union([
      Schema.String,
      Schema.Array(RunAiRequestMessageContent),
    ]),
    role: Schema.String,
  }),
) as unknown as Schema.Codec<Message>;

interface ImageURL {
  /** Image URI with data (e.g. data:image/jpeg;base64,/9j/...). */
  url: string;
}
const ImageURL = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    url: Schema.String,
  }),
) as unknown as Schema.Codec<ImageURL>;

interface RunAiRequestMessageContent2 {
  /** Type of the content part (e.g. 'text', 'image_url'). */
  type: string;
  /** Image URL object (when type is 'image_url'). */
  imageUrl?: { url: string } | null;
  /** Text content (when type is 'text'). */
  text?: string | null;
}
const RunAiRequestMessageContent2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.String,
    imageUrl: Schema.optional(Schema.Union([ImageURL, Schema.Null])),
    text: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ type: "type", imageUrl: "image_url", text: "text" }),
  ),
) as unknown as Schema.Codec<RunAiRequestMessageContent2>;

interface Message2 {
  /** The content of the message as a string. */
  content:
    | string
    | {
        type: string;
        imageUrl?: { url: string } | null;
        text?: string | null;
      }[];
  /** The role of the message sender (e.g., 'user', 'assistant', 'system', 'tool'). */
  role: string;
}
const Message2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.Union([
      Schema.String,
      Schema.Array(RunAiRequestMessageContent2),
    ]),
    role: Schema.String,
  }),
) as unknown as Schema.Codec<Message2>;

interface Function {
  code: string;
  name: string;
}
const Function = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.String,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Function>;

interface Parameters {
  /** Definitions of each parameter. */
  properties: Record<string, unknown>;
  /** The type of the parameters object (usually 'object'). */
  type: string;
  /** List of required parameter names. */
  required?: string[] | null;
}
const Parameters = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    properties: Schema.Record(Schema.String, Schema.Unknown),
    type: Schema.String,
    required: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Parameters>;

interface RunAiRequestTool {
  /** A brief description of what the tool does. */
  description: string;
  /** The name of the tool. More descriptive the better. */
  name: string;
  /** Schema defining the parameters accepted by the tool. */
  parameters: {
    properties: Record<string, unknown>;
    type: string;
    required?: string[] | null;
  };
}
const RunAiRequestTool = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    description: Schema.String,
    name: Schema.String,
    parameters: Parameters,
  }),
) as unknown as Schema.Codec<RunAiRequestTool>;

interface TextClassification {
  /** The classification label assigned to the text (e.g., 'POSITIVE' or 'NEGATIVE') */
  label?: string | null;
  /** Confidence score indicating the likelihood that the text belongs to the specified label */
  score?: number | null;
}
const TextClassification = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    label: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    score: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<TextClassification>;

interface Audio {
  /** The generated audio in MP3 format, base64-encoded */
  audio?: string | null;
}
const Audio = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    audio: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Audio>;

interface TextEmbeddings {
  /** Embeddings of the requested text values */
  data?: number[][] | null;
  shape?: number[] | null;
}
const TextEmbeddings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.optional(
      Schema.Union([Schema.Array(Schema.Array(Schema.Number)), Schema.Null]),
    ),
    shape: Schema.optional(
      Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<TextEmbeddings>;

interface Word {
  /** The ending second when the word completes */
  end?: number | null;
  /** The second this word begins in the recording */
  start?: number | null;
  word?: string | null;
}
const Word = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    end: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    start: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    word: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Word>;

interface AutomaticSpeechRecognition {
  /** The transcription */
  text: string;
  vtt?: string | null;
  wordCount?: number | null;
  words?:
    | { end?: number | null; start?: number | null; word?: string | null }[]
    | null;
}
const AutomaticSpeechRecognition = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    text: Schema.String,
    vtt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    wordCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    words: Schema.optional(Schema.Union([Schema.Array(Word), Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      text: "text",
      vtt: "vtt",
      wordCount: "word_count",
      words: "words",
    }),
  ),
) as unknown as Schema.Codec<AutomaticSpeechRecognition>;

interface Box {
  /** The x-coordinate of the bottom-right corner of the bounding box */
  xmax?: number | null;
  /** The x-coordinate of the top-left corner of the bounding box */
  xmin?: number | null;
  /** The y-coordinate of the bottom-right corner of the bounding box */
  ymax?: number | null;
  /** The y-coordinate of the top-left corner of the bounding box */
  ymin?: number | null;
}
const Box = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    xmax: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    xmin: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ymax: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ymin: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Box>;

interface ObjectDetection {
  /** Coordinates defining the bounding box around the detected object */
  box?: {
    xmax?: number | null;
    xmin?: number | null;
    ymax?: number | null;
    ymin?: number | null;
  } | null;
  /** The class label or name of the detected object */
  label?: string | null;
  /** Confidence score indicating the likelihood that the detection is correct */
  score?: number | null;
}
const ObjectDetection = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    box: Schema.optional(Schema.Union([Box, Schema.Null])),
    label: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    score: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<ObjectDetection>;

interface ToolCall {
  /** The arguments passed to be passed to the tool call request */
  arguments?: unknown | null;
  /** The name of the tool to be called */
  name?: string | null;
}
const ToolCall = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    arguments: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ToolCall>;

interface Usage {
  /** Total number of tokens in output */
  completionTokens?: number | null;
  /** Total number of tokens in input */
  promptTokens?: number | null;
  /** Total number of input and output tokens */
  totalTokens?: number | null;
}
const Usage = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    completionTokens: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    promptTokens: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalTokens: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      completionTokens: "completion_tokens",
      promptTokens: "prompt_tokens",
      totalTokens: "total_tokens",
    }),
  ),
) as unknown as Schema.Codec<Usage>;

interface RunAiResponse7 {
  /** The generated text response from the model */
  response: string;
  /** An array of tool calls requests made during the response generation */
  toolCalls?: { arguments?: unknown | null; name?: string | null }[] | null;
  /** Usage statistics for the inference request */
  usage?: {
    completionTokens?: number | null;
    promptTokens?: number | null;
    totalTokens?: number | null;
  } | null;
}
const RunAiResponse7 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    response: Schema.String,
    toolCalls: Schema.optional(
      Schema.Union([Schema.Array(ToolCall), Schema.Null]),
    ),
    usage: Schema.optional(Schema.Union([Usage, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      response: "response",
      toolCalls: "tool_calls",
      usage: "usage",
    }),
  ),
) as unknown as Schema.Codec<RunAiResponse7>;

interface Translation {
  /** The translated text in the target language */
  translatedText?: string | null;
}
const Translation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    translatedText: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ translatedText: "translated_text" })),
) as unknown as Schema.Codec<Translation>;

interface Summarization {
  /** The summarized version of the input text */
  summary?: string | null;
}
const Summarization = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    summary: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Summarization>;

interface ImageToText {
  description?: string | null;
}
const ImageToText = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ImageToText>;

interface ListFinetunesResponse2 {
  id: string;
  createdAt: string;
  model: string;
  modifiedAt: string;
  name: string;
  description?: string | null;
}
const ListFinetunesResponse2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    model: Schema.String,
    modifiedAt: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      model: "model",
      modifiedAt: "modified_at",
      name: "name",
      description: "description",
    }),
  ),
) as unknown as Schema.Codec<ListFinetunesResponse2>;

interface ListFinetunePublicsResponseResult {
  id: string;
  createdAt: string;
  model: string;
  modifiedAt: string;
  name: string;
  public: boolean;
  description?: string | null;
}
const ListFinetunePublicsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      model: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      public: Schema.Boolean,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        model: "model",
        modifiedAt: "modified_at",
        name: "name",
        public: "public",
        description: "description",
      }),
    ),
  ) as unknown as Schema.Codec<ListFinetunePublicsResponseResult>;

interface ListModelsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListModelsResponseResultInfo = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      page: "page",
      perPage: "per_page",
      totalCount: "total_count",
    }),
  ),
) as unknown as Schema.Codec<ListModelsResponseResultInfo>;

interface Input {
  additionalProperties: boolean;
  description: string;
  type: string;
}
const Input = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    additionalProperties: Schema.Boolean,
    description: Schema.String,
    type: Schema.String,
  }),
) as unknown as Schema.Codec<Input>;

interface SupportedToMarkdownResponseResult {
  extension: string;
  mimeType: string;
}
const SupportedToMarkdownResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      extension: Schema.String,
      mimeType: Schema.String,
    }),
  ) as unknown as Schema.Codec<SupportedToMarkdownResponseResult>;

interface File2 {
  files: (File | Blob)[];
}
const File2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    files: Schema.Array(UploadableSchema.pipe(T.HttpFormDataFile())),
  }),
) as unknown as Schema.Codec<File2>;

interface ToMarkdownTransformResponse {
  data: string;
  format: string;
  mimeType: string;
  name: string;
  tokens: string;
}
const ToMarkdownTransformResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.String,
    format: Schema.String,
    mimeType: Schema.String,
    name: Schema.String,
    tokens: Schema.String,
  }),
) as unknown as Schema.Codec<ToMarkdownTransformResponse>;

// =============================================================================
// Ai
// =============================================================================

export interface RunAiRequest {
  modelName: string;
  /** Path param */
  accountId: string;
  /** Body param: The text that you want to classify */
  text?: string | string[];
  /** Body param: A text description of the image you want to generate */
  prompt?: string;
  /** Body param: Controls how closely the generated image should adhere to the prompt; higher values make the image more aligned with the prompt */
  guidance?: number;
  /** Body param: The height of the generated image in pixels */
  height?: number;
  /** Body param: For use with img2img tasks. An array of integers that represent the image data constrained to 8-bit unsigned integer values */
  image?: number[] | string;
  /** Body param: For use with img2img tasks. A base64-encoded string of the input image */
  imageB64?: string;
  /** Body param: An array representing An array of integers that represent mask image data for inpainting constrained to 8-bit unsigned integer values */
  mask?: number[];
  /** Body param: Text describing elements to avoid in the generated image */
  negativePrompt?: string;
  /** Body param: The number of diffusion steps; higher values can improve quality but take longer */
  numSteps?: number;
  /** Body param: Random seed for reproducibility of the image generation */
  seed?: number;
  /** Body param: A value between 0 and 1 indicating how strongly to apply the transformation during img2img tasks; lower values make the output closer to the input image */
  strength?: number;
  /** Body param: The width of the generated image in pixels */
  width?: number;
  /** Body param: The speech language (e.g., 'en' for English, 'fr' for French). Defaults to 'en' if not specified */
  lang?: string;
  /** Body param: An array of integers that represent the audio data constrained to 8-bit unsigned integer values */
  audio?: number[];
  /** Body param: The language of the recorded audio */
  sourceLang?: string;
  /** Body param: The language to translate the transcription into. Currently only English is supported. */
  targetLang?: string;
  /** Body param: Decreases the likelihood of the model repeating the same lines verbatim. */
  frequencyPenalty?: number;
  /** Body param: Name of the LoRA (Low-Rank Adaptation) model to fine-tune the base model. */
  lora?: string;
  /** Body param: The maximum number of tokens to generate in the response. */
  maxTokens?: number;
  /** Body param: Increases the likelihood of the model introducing new topics. */
  presencePenalty?: number;
  /** Body param: If true, a chat template is not applied and you must adhere to the specific model's expected formatting. */
  raw?: boolean;
  /** Body param: Penalty for repeated tokens; higher values discourage repetition. */
  repetitionPenalty?: number;
  /** Body param */
  responseFormat?: {
    jsonSchema?: unknown;
    type?: "json_object" | "json_schema" | (string & {});
  };
  /** Body param: If true, the response will be streamed back incrementally using SSE, Server Sent Events. */
  stream?: boolean;
  /** Body param: Controls the randomness of the output; higher values produce more random results. */
  temperature?: number;
  /** Body param: Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises. */
  topK?: number;
  /** Body param: Adjusts the creativity of the AI's responses by controlling how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creati */
  topP?: number;
  /** Body param: An array of message objects representing the conversation history. */
  messages?:
    | { content: string | { text?: string; type?: string }[]; role: string }[]
    | {
        content:
          | string
          | { type: string; imageUrl?: { url: string }; text?: string }[];
        role: string;
      }[];
  /** Body param */
  functions?: { code: string; name: string }[];
  /** Body param: A list of tools available for the assistant to use. */
  tools?: (
    | {
        description: string;
        name: string;
        parameters: {
          properties: Record<string, unknown>;
          type: string;
          required?: string[];
        };
      }
    | { code: string; name: string }
  )[];
  /** Body param: The text that you want the model to summarize */
  inputText?: string;
  /** Body param: The maximum length of the generated summary in tokens */
  maxLength?: number;
  /** Body param: Whether to ignore the EOS token and continue generating tokens after the EOS token is generated. */
  ignoreEos?: boolean;
}

export const RunAiRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    modelName: Schema.String.pipe(T.HttpPath("modelName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    text: Schema.optional(
      Schema.Union([Schema.String, Schema.Array(Schema.String)]),
    ),
    prompt: Schema.optional(Schema.String),
    guidance: Schema.optional(Schema.Number),
    height: Schema.optional(Schema.Number),
    image: Schema.optional(
      Schema.Union([Schema.Array(Schema.Number), Schema.String]),
    ),
    imageB64: Schema.optional(Schema.String),
    mask: Schema.optional(Schema.Array(Schema.Number)),
    negativePrompt: Schema.optional(Schema.String),
    numSteps: Schema.optional(Schema.Number),
    seed: Schema.optional(Schema.Number),
    strength: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
    lang: Schema.optional(Schema.String),
    audio: Schema.optional(Schema.Array(Schema.Number)),
    sourceLang: Schema.optional(Schema.String),
    targetLang: Schema.optional(Schema.String),
    frequencyPenalty: Schema.optional(Schema.Number),
    lora: Schema.optional(Schema.String),
    maxTokens: Schema.optional(Schema.Number),
    presencePenalty: Schema.optional(Schema.Number),
    raw: Schema.optional(Schema.Boolean),
    repetitionPenalty: Schema.optional(Schema.Number),
    responseFormat: Schema.optional(ResponseFormat),
    stream: Schema.optional(Schema.Boolean),
    temperature: Schema.optional(Schema.Number),
    topK: Schema.optional(Schema.Number),
    topP: Schema.optional(Schema.Number),
    messages: Schema.optional(
      Schema.Union([Schema.Array(Message), Schema.Array(Message2)]),
    ),
    functions: Schema.optional(Schema.Array(Function)),
    tools: Schema.optional(
      Schema.Array(Schema.Union([RunAiRequestTool, Function])),
    ),
    inputText: Schema.optional(Schema.String),
    maxLength: Schema.optional(Schema.Number),
    ignoreEos: Schema.optional(Schema.Boolean),
  }).pipe(
    Schema.encodeKeys({
      text: "text",
      prompt: "prompt",
      guidance: "guidance",
      height: "height",
      image: "image",
      imageB64: "image_b64",
      mask: "mask",
      negativePrompt: "negative_prompt",
      numSteps: "num_steps",
      seed: "seed",
      strength: "strength",
      width: "width",
      lang: "lang",
      audio: "audio",
      sourceLang: "source_lang",
      targetLang: "target_lang",
      frequencyPenalty: "frequency_penalty",
      lora: "lora",
      maxTokens: "max_tokens",
      presencePenalty: "presence_penalty",
      raw: "raw",
      repetitionPenalty: "repetition_penalty",
      responseFormat: "response_format",
      stream: "stream",
      temperature: "temperature",
      topK: "top_k",
      topP: "top_p",
      messages: "messages",
      functions: "functions",
      tools: "tools",
      inputText: "input_text",
      maxLength: "max_length",
      ignoreEos: "ignore_eos",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/ai/run/{modelName}",
    }),
  ),
) as unknown as Schema.Codec<RunAiRequest>;

export type RunAiResponse =
  | { label?: string | null; score?: number | null }[]
  | File
  | Blob
  | { audio?: string | null }
  | { data?: number[][] | null; shape?: number[] | null }
  | {
      text: string;
      vtt?: string | null;
      wordCount?: number | null;
      words?:
        | { end?: number | null; start?: number | null; word?: string | null }[]
        | null;
    }
  | {
      box?: {
        xmax?: number | null;
        xmin?: number | null;
        ymax?: number | null;
        ymin?: number | null;
      } | null;
      label?: string | null;
      score?: number | null;
    }[]
  | {
      response: string;
      toolCalls?: { arguments?: unknown | null; name?: string | null }[] | null;
      usage?: {
        completionTokens?: number | null;
        promptTokens?: number | null;
        totalTokens?: number | null;
      } | null;
    }
  | { translatedText?: string | null }
  | { summary?: string | null }
  | { description?: string | null };

export const RunAiResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    AutomaticSpeechRecognition,
    RunAiResponse7,
    Schema.Array(TextClassification),
    UploadableSchema.pipe(T.HttpFormDataFile()),
    Audio,
    TextEmbeddings,
    Schema.Array(ObjectDetection),
    Translation,
    Summarization,
    ImageToText,
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<RunAiResponse>;

export type RunAiError = DefaultErrors | ModelNotFound;

export const runAi: API.OperationMethod<
  RunAiRequest,
  RunAiResponse,
  RunAiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunAiRequest,
  output: RunAiResponse,
  errors: [ModelNotFound],
}));

// =============================================================================
// Author
// =============================================================================

export interface ListAuthorsRequest {
  accountId: string;
}

export const ListAuthorsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai/authors/search",
    }),
  ),
) as unknown as Schema.Codec<ListAuthorsRequest>;

export interface ListAuthorsResponse {
  result: unknown[];
}

export const ListAuthorsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Schema.Unknown),
  }),
) as unknown as Schema.Codec<ListAuthorsResponse>;

export type ListAuthorsError = DefaultErrors;

export const listAuthors: API.PaginatedOperationMethod<
  ListAuthorsRequest,
  ListAuthorsResponse,
  ListAuthorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuthorsRequest,
  output: ListAuthorsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Finetune
// =============================================================================

export interface ListFinetunesRequest {
  accountId: string;
}

export const ListFinetunesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/ai/finetunes" }),
  ),
) as unknown as Schema.Codec<ListFinetunesRequest>;

export type ListFinetunesResponse = {
  id: string;
  createdAt: string;
  model: string;
  modifiedAt: string;
  name: string;
  description?: string | null;
}[];

export const ListFinetunesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(ListFinetunesResponse2).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListFinetunesResponse>;

export type ListFinetunesError = DefaultErrors | AccountNotFound;

export const listFinetunes: API.OperationMethod<
  ListFinetunesRequest,
  ListFinetunesResponse,
  ListFinetunesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListFinetunesRequest,
  output: ListFinetunesResponse,
  errors: [AccountNotFound],
}));

export interface CreateFinetuneRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  model: string;
  /** Body param */
  name: string;
  /** Body param */
  description?: string;
  /** Body param */
  public?: boolean;
}

export const CreateFinetuneRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    model: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    public: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "POST", path: "/accounts/{account_id}/ai/finetunes" }),
  ),
) as unknown as Schema.Codec<CreateFinetuneRequest>;

export interface CreateFinetuneResponse {
  id: string;
  createdAt: string;
  model: string;
  modifiedAt: string;
  name: string;
  public: boolean;
  description?: string | null;
}

export const CreateFinetuneResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      model: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      public: Schema.Boolean,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          model: "model",
          modifiedAt: "modified_at",
          name: "name",
          public: "public",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateFinetuneResponse>;

export type CreateFinetuneError =
  | DefaultErrors
  | ModelNotSupported
  | AccountNotFound;

export const createFinetune: API.OperationMethod<
  CreateFinetuneRequest,
  CreateFinetuneResponse,
  CreateFinetuneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFinetuneRequest,
  output: CreateFinetuneResponse,
  errors: [ModelNotSupported, AccountNotFound],
}));

// =============================================================================
// FinetuneAsset
// =============================================================================

export interface CreateFinetuneAssetRequest {
  finetuneId: string;
  /** Path param */
  accountId: string;
  /** Body param: File to upload */
  file: File | Blob;
  /** Body param: Name of the file (adapter_config.json or adapter_model.safetensors) */
  fileName: string;
}

export const CreateFinetuneAssetRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      finetuneId: Schema.String.pipe(T.HttpPath("finetuneId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      file: UploadableSchema.pipe(T.HttpFormDataFile()),
      fileName: Schema.String,
    }).pipe(
      Schema.encodeKeys({ file: "file", fileName: "file_name" }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai/finetunes/{finetuneId}/finetune-assets",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<CreateFinetuneAssetRequest>;

export interface CreateFinetuneAssetResponse {
  success: boolean;
}

export const CreateFinetuneAssetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<CreateFinetuneAssetResponse>;

export type CreateFinetuneAssetError =
  | DefaultErrors
  | ModelNotSupported
  | AccountNotFound;

export const createFinetuneAsset: API.OperationMethod<
  CreateFinetuneAssetRequest,
  CreateFinetuneAssetResponse,
  CreateFinetuneAssetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFinetuneAssetRequest,
  output: CreateFinetuneAssetResponse,
  errors: [ModelNotSupported, AccountNotFound],
}));

// =============================================================================
// FinetunePublic
// =============================================================================

export interface ListFinetunePublicsRequest {
  /** Path param */
  accountId: string;
  /** Query param: Pagination Limit */
  limit?: number;
  /** Query param: Pagination Offset */
  offset?: number;
  /** Query param: Order By Column Name */
  orderBy?: string;
}

export const ListFinetunePublicsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
      orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai/finetunes/public",
      }),
    ),
  ) as unknown as Schema.Codec<ListFinetunePublicsRequest>;

export interface ListFinetunePublicsResponse {
  result: {
    id: string;
    createdAt: string;
    model: string;
    modifiedAt: string;
    name: string;
    public: boolean;
    description?: string | null;
  }[];
}

export const ListFinetunePublicsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListFinetunePublicsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListFinetunePublicsResponse>;

export type ListFinetunePublicsError = DefaultErrors;

export const listFinetunePublics: API.PaginatedOperationMethod<
  ListFinetunePublicsRequest,
  ListFinetunePublicsResponse,
  ListFinetunePublicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFinetunePublicsRequest,
  output: ListFinetunePublicsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Model
// =============================================================================

export interface ListModelsRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter by Author */
  author?: string;
  /** Query param: If set, return models in the requested marketplace format instead of the default response. */
  format?: "openrouter";
  /** Query param: Filter to hide experimental models */
  hideExperimental?: boolean;
  /** Query param: If true, include models whose planned_deprecation_date is in the past — but only within a three-month grace window after that date. Models whose planned_deprecation_date is more than thre */
  includeDeprecated?: boolean;
  /** Query param: Search */
  search?: string;
  /** Query param: Filter by Source Id */
  source?: number;
  /** Query param: Filter by Task Name */
  task?: string;
}

export const ListModelsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    author: Schema.optional(Schema.String).pipe(T.HttpQuery("author")),
    format: Schema.optional(Schema.Literal("openrouter")).pipe(
      T.HttpQuery("format"),
    ),
    hideExperimental: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("hide_experimental"),
    ),
    includeDeprecated: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("include_deprecated"),
    ),
    search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    source: Schema.optional(Schema.Number).pipe(T.HttpQuery("source")),
    task: Schema.optional(Schema.String).pipe(T.HttpQuery("task")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai/models/search",
    }),
  ),
) as unknown as Schema.Codec<ListModelsRequest>;

export interface ListModelsResponse {
  result: unknown[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListModelsResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Schema.Unknown),
    resultInfo: Schema.optional(
      Schema.Union([ListModelsResponseResultInfo, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListModelsResponse>;

export type ListModelsError = DefaultErrors;

export const listModels: API.PaginatedOperationMethod<
  ListModelsRequest,
  ListModelsResponse,
  ListModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListModelsRequest,
  output: ListModelsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// ModelSchema
// =============================================================================

export interface GetModelSchemaRequest {
  /** Path param */
  accountId: string;
  /** Query param: Model Name */
  model: string;
}

export const GetModelSchemaRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    model: Schema.String.pipe(T.HttpQuery("model")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai/models/schema",
    }),
  ),
) as unknown as Schema.Codec<GetModelSchemaRequest>;

export interface GetModelSchemaResponse {
  input: { additionalProperties: boolean; description: string; type: string };
  output: { additionalProperties: boolean; description: string; type: string };
}

export const GetModelSchemaResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      input: Input,
      output: Input,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetModelSchemaResponse>;

export type GetModelSchemaError =
  | DefaultErrors
  | ModelNotSupported
  | ModelSchemaNotFound
  | AccountNotFound;

export const getModelSchema: API.OperationMethod<
  GetModelSchemaRequest,
  GetModelSchemaResponse,
  GetModelSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetModelSchemaRequest,
  output: GetModelSchemaResponse,
  errors: [ModelNotSupported, ModelSchemaNotFound, AccountNotFound],
}));

// =============================================================================
// Task
// =============================================================================

export interface ListTasksRequest {
  accountId: string;
}

export const ListTasksRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/ai/tasks/search" }),
  ),
) as unknown as Schema.Codec<ListTasksRequest>;

export interface ListTasksResponse {
  result: unknown[];
}

export const ListTasksResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(Schema.Unknown),
  }),
) as unknown as Schema.Codec<ListTasksResponse>;

export type ListTasksError = DefaultErrors;

export const listTasks: API.PaginatedOperationMethod<
  ListTasksRequest,
  ListTasksResponse,
  ListTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTasksRequest,
  output: ListTasksResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// ToMarkdown
// =============================================================================

export interface SupportedToMarkdownRequest {
  accountId: string;
}

export const SupportedToMarkdownRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai/tomarkdown/supported",
      }),
    ),
  ) as unknown as Schema.Codec<SupportedToMarkdownRequest>;

export interface SupportedToMarkdownResponse {
  result: { extension: string; mimeType: string }[];
}

export const SupportedToMarkdownResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(SupportedToMarkdownResponseResult),
    }),
  ) as unknown as Schema.Codec<SupportedToMarkdownResponse>;

export type SupportedToMarkdownError = DefaultErrors;

export const supportedToMarkdown: API.PaginatedOperationMethod<
  SupportedToMarkdownRequest,
  SupportedToMarkdownResponse,
  SupportedToMarkdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SupportedToMarkdownRequest,
  output: SupportedToMarkdownResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface TransformToMarkdownRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  file: { files: (File | Blob)[] };
}

export const TransformToMarkdownRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      file: File2,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai/tomarkdown",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<TransformToMarkdownRequest>;

export type TransformToMarkdownResponse = {
  data: string;
  format: string;
  mimeType: string;
  name: string;
  tokens: string;
}[];

export const TransformToMarkdownResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Array(ToMarkdownTransformResponse).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<TransformToMarkdownResponse>;

export type TransformToMarkdownError = DefaultErrors;

export const transformToMarkdown: API.OperationMethod<
  TransformToMarkdownRequest,
  TransformToMarkdownResponse,
  TransformToMarkdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TransformToMarkdownRequest,
  output: TransformToMarkdownResponse,
  errors: [],
}));
