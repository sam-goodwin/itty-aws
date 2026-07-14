/**
 * Cloudflare BROWSER-RENDERING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service browser-rendering
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface AddScriptTag {
  id?: string | null;
  content?: string | null;
  type?: string | null;
  url?: string | null;
}
const AddScriptTag = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AddScriptTag>;

interface AddStyleTag {
  content?: string | null;
  url?: string | null;
}
const AddStyleTag = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AddStyleTag>;

interface Authenticate {
  password: string;
  username: string;
}
const Authenticate = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    password: SensitiveString,
    username: Schema.String,
  }),
) as unknown as Schema.Codec<Authenticate>;

interface Cookie {
  /** Cookie name. */
  name: string;
  value: string;
  domain?: string | null;
  expires?: number | null;
  httpOnly?: boolean | null;
  partitionKey?: string | null;
  path?: string | null;
  priority?: "Low" | "Medium" | "High" | (string & {}) | null;
  sameParty?: boolean | null;
  sameSite?: "Strict" | "Lax" | "None" | (string & {}) | null;
  secure?: boolean | null;
  sourcePort?: number | null;
  sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {}) | null;
  url?: string | null;
}
const Cookie = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    value: Schema.String,
    domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expires: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    httpOnly: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    partitionKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    priority: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Low", "Medium", "High"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    sameParty: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sameSite: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Strict", "Lax", "None"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    secure: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sourcePort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    sourceScheme: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Unset", "NonSecure", "Secure"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Cookie>;

interface GotoOptions {
  referer?: string | null;
  referrerPolicy?: string | null;
  timeout?: number | null;
  waitUntil?:
    | "load"
    | "domcontentloaded"
    | "networkidle0"
    | "networkidle2"
    | (
        | "load"
        | "domcontentloaded"
        | "networkidle0"
        | "networkidle2"
        | (string & {})
      )[]
    | null;
}
const GotoOptions = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    referer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    referrerPolicy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    waitUntil: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literal("load"),
          Schema.Literal("domcontentloaded"),
          Schema.Literal("networkidle0"),
          Schema.Literal("networkidle2"),
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "load",
                "domcontentloaded",
                "networkidle0",
                "networkidle2",
              ]),
              Schema.String,
            ]),
          ),
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<GotoOptions>;

interface Viewport {
  height: number;
  width: number;
  deviceScaleFactor?: number | null;
  hasTouch?: boolean | null;
  isLandscape?: boolean | null;
  isMobile?: boolean | null;
}
const Viewport = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    height: Schema.Number,
    width: Schema.Number,
    deviceScaleFactor: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    hasTouch: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    isLandscape: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    isMobile: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Viewport>;

interface WaitForSelector {
  selector: string;
  hidden?: true | null;
  timeout?: number | null;
  visible?: true | null;
}
const WaitForSelector = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    selector: Schema.String,
    hidden: Schema.optional(Schema.Union([Schema.Literal(true), Schema.Null])),
    timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    visible: Schema.optional(Schema.Union([Schema.Literal(true), Schema.Null])),
  }),
) as unknown as Schema.Codec<WaitForSelector>;

interface Metadata {
  /** HTTP status code of the crawled page. */
  status: number;
  /** Final URL of the crawled page. */
  url: string;
  /** Title of the crawled page. */
  title?: string | null;
}
const Metadata = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    status: Schema.Number,
    url: Schema.String,
    title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Metadata>;

interface Record2 {
  metadata: { status: number; url: string; title?: string | null };
  /** Current status of the crawled URL. */
  status:
    | "queued"
    | "errored"
    | "completed"
    | "disallowed"
    | "skipped"
    | "cancelled"
    | (string & {});
  /** Crawled URL. */
  url: string;
  /** HTML content of the crawled URL. */
  html?: string | null;
  /** JSON of the content of the crawled URL. */
  json?: Record<string, unknown> | null;
  /** Markdown of the content of the crawled URL. */
  markdown?: string | null;
}
const Record2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    metadata: Metadata,
    status: Schema.Union([
      Schema.Literals([
        "queued",
        "errored",
        "completed",
        "disallowed",
        "skipped",
        "cancelled",
      ]),
      Schema.String,
    ]),
    url: Schema.String,
    html: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    json: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    markdown: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Record2>;

interface CustomAI {
  /** AI model to use for the request. Must be formed as `<provider>/<model_name>`, e.g. `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`. */
  model: string;
  /** Authorization token for the AI model: `Bearer <token>`. Not needed for workers-ai models. */
  authorization?: string | null;
}
const CustomAI = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    model: Schema.String,
    authorization: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<CustomAI>;

interface ResponseFormat {
  type: string;
  /** Schema for the response format. More information here: https://developers.cloudflare.com/workers-ai/json-mode/ */
  jsonSchema?: Record<string, unknown> | null;
}
const ResponseFormat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.String,
    jsonSchema: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ type: "type", jsonSchema: "json_schema" })),
) as unknown as Schema.Codec<ResponseFormat>;

interface JsonOptions {
  /** Optional list of custom AI models to use for the request. The models will be tried in the order provided, and in case a model returns an error, the next one will be used as fallback. */
  customAi?: { model: string; authorization?: string | null }[] | null;
  prompt?: string | null;
  responseFormat?: {
    type: string;
    jsonSchema?: Record<string, unknown> | null;
  } | null;
}
const JsonOptions = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    customAi: Schema.optional(
      Schema.Union([Schema.Array(CustomAI), Schema.Null]),
    ),
    prompt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    responseFormat: Schema.optional(
      Schema.Union([ResponseFormat, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      customAi: "custom_ai",
      prompt: "prompt",
      responseFormat: "response_format",
    }),
  ),
) as unknown as Schema.Codec<JsonOptions>;

interface Options {
  /** Exclude links matching the provided wildcard patterns in the crawl job. Example: 'https://example.com/privacy/  '. */
  excludePatterns?: string[] | null;
  /** Include external links in the crawl job. If set to true, includeSubdomains is ignored. */
  includeExternalLinks?: boolean | null;
  /** Include only links matching the provided wildcard patterns in the crawl job. Include patterns are evaluated before exclude patterns. URLs that match any of the specified include patterns will be inclu */
  includePatterns?: string[] | null;
  /** Include links to subdomains in the crawl job. This option is ignored if includeExternalLinks is true. */
  includeSubdomains?: boolean | null;
}
const Options = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    excludePatterns: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    includeExternalLinks: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    includePatterns: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    includeSubdomains: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Options>;

interface Domain {
  /** Domain name. */
  domain: string;
  /** Available commands. */
  commands?: Record<string, unknown>[] | null;
  /** Domain dependencies. */
  dependencies?: string[] | null;
  /** Available events. */
  events?: Record<string, unknown>[] | null;
  /** Whether this domain is experimental. */
  experimental?: boolean | null;
  /** Type definitions. */
  types?: Record<string, unknown>[] | null;
}
const Domain = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domain: Schema.String,
    commands: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
    dependencies: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    events: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
    experimental: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    types: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Domain>;

interface Version {
  /** Major version. */
  major: string;
  /** Minor version. */
  minor: string;
}
const Version = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    major: Schema.String,
    minor: Schema.String,
  }),
) as unknown as Schema.Codec<Version>;

interface TargetListResponseItem {
  /** Target ID. */
  id: string;
  /** Target type (page, background_page, worker, etc.). */
  type: string;
  /** URL of the target. */
  url: string;
  /** Target description. */
  description?: string | null;
  /** DevTools frontend URL. */
  devtoolsFrontendUrl?: string | null;
  /** Title of the target. */
  title?: string | null;
  /** WebSocket URL for debugging this target. */
  webSocketDebuggerUrl?: string | null;
}
const TargetListResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    url: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    devtoolsFrontendUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    webSocketDebuggerUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<TargetListResponseItem>;

interface SessionListResponseItem {
  /** Session ID. */
  sessionId: string;
  /** Reason for session closure. */
  closeReason?: string | null;
  /** Human-readable close reason. */
  closeReasonText?: string | null;
  /** Connection end time. */
  connectionEndTime?: number | null;
  /** Connection ID. */
  connectionId?: string | null;
  /** Connection start time. */
  connectionStartTime?: number | null;
  /** DevTools frontend URL. */
  devtoolsFrontendUrl?: string | null;
  /** Session end time. */
  endTime?: number | null;
  /** Last updated timestamp. */
  lastUpdated?: number | null;
  /** Session start time. */
  startTime?: number | null;
  /** WebSocket URL for debugging this target. */
  webSocketDebuggerUrl?: string | null;
}
const SessionListResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sessionId: Schema.String,
    closeReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    closeReasonText: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    connectionEndTime: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    connectionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    connectionStartTime: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    devtoolsFrontendUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    endTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    lastUpdated: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    startTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    webSocketDebuggerUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<SessionListResponseItem>;

interface Margin {
  bottom?: string | number | null;
  left?: string | number | null;
  right?: string | number | null;
  top?: string | number | null;
}
const Margin = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bottom: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
    left: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
    right: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
    top: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Margin>;

interface Pdfoptions {
  /** Whether to show the header and footer. */
  displayHeaderFooter?: boolean | null;
  /** HTML template for the print footer. */
  footerTemplate?: string | null;
  /** Paper format. Takes priority over width and height if set. */
  format?:
    | "letter"
    | "legal"
    | "tabloid"
    | "ledger"
    | "a0"
    | "a1"
    | "a2"
    | "a3"
    | "a4"
    | "a5"
    | "a6"
    | (string & {})
    | null;
  /** HTML template for the print header. */
  headerTemplate?: string | null;
  /** Sets the height of paper. Can be a number or string with unit. */
  height?: string | number | null;
  /** Whether to print in landscape orientation. */
  landscape?: boolean | null;
  /** Set the PDF margins. Useful when setting header and footer. */
  margin?: {
    bottom?: string | number | null;
    left?: string | number | null;
    right?: string | number | null;
    top?: string | number | null;
  } | null;
  /** Hides default white background and allows generating pdfs with transparency. */
  omitBackground?: boolean | null;
  /** Generate document outline. */
  outline?: boolean | null;
  /** Paper ranges to print, e.g. '1-5, 8, 11-13'. */
  pageRanges?: string | null;
  /** Give CSS @page size priority over other size declarations. */
  preferCSSPageSize?: boolean | null;
  /** Set to true to print background graphics. */
  printBackground?: boolean | null;
  /** Scales the rendering of the web page. Amount must be between 0.1 and 2. */
  scale?: number | null;
  /** Generate tagged (accessible) PDF. */
  tagged?: boolean | null;
  /** Timeout in milliseconds. */
  timeout?: number | null;
  /** Sets the width of paper. Can be a number or string with unit. */
  width?: string | number | null;
}
const Pdfoptions = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    displayHeaderFooter: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    footerTemplate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    format: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "letter",
            "legal",
            "tabloid",
            "ledger",
            "a0",
            "a1",
            "a2",
            "a3",
            "a4",
            "a5",
            "a6",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    headerTemplate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    height: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
    landscape: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    margin: Schema.optional(Schema.Union([Margin, Schema.Null])),
    omitBackground: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    outline: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    pageRanges: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    preferCSSPageSize: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    printBackground: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    scale: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    tagged: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    width: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Pdfoptions>;

interface Element {
  selector: string;
}
const Element = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    selector: Schema.String,
  }),
) as unknown as Schema.Codec<Element>;

interface Attribute {
  /** Attribute name. */
  name: string;
  /** Attribute value. */
  value: string;
}
const Attribute = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  }),
) as unknown as Schema.Codec<Attribute>;

interface Results {
  attributes: { name: string; value: string }[];
  /** Element height. */
  height: number;
  /** HTML content. */
  html: string;
  /** Element left. */
  left: number;
  /** Text content. */
  text: string;
  /** Element top. */
  top: number;
  /** Element width. */
  width: number;
}
const Results = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    attributes: Schema.Array(Attribute),
    height: Schema.Number,
    html: Schema.String,
    left: Schema.Number,
    text: Schema.String,
    top: Schema.Number,
    width: Schema.Number,
  }),
) as unknown as Schema.Codec<Results>;

interface ScrapeCreateResponseItem {
  results: {
    attributes: { name: string; value: string }[];
    height: number;
    html: string;
    left: number;
    text: string;
    top: number;
    width: number;
  };
  /** Selector. */
  selector: string;
}
const ScrapeCreateResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    results: Results,
    selector: Schema.String,
  }),
) as unknown as Schema.Codec<ScrapeCreateResponseItem>;

interface Clip {
  height: number;
  width: number;
  x: number;
  y: number;
  scale?: number | null;
}
const Clip = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    height: Schema.Number,
    width: Schema.Number,
    x: Schema.Number,
    y: Schema.Number,
    scale: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Clip>;

interface ScreenshotOptions {
  captureBeyondViewport?: boolean | null;
  clip?: {
    height: number;
    width: number;
    x: number;
    y: number;
    scale?: number | null;
  } | null;
  encoding?: "binary" | "base64" | (string & {}) | null;
  fromSurface?: boolean | null;
  fullPage?: boolean | null;
  omitBackground?: boolean | null;
  optimizeForSpeed?: boolean | null;
  quality?: number | null;
  type?: "png" | "jpeg" | "webp" | (string & {}) | null;
}
const ScreenshotOptions = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    captureBeyondViewport: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    clip: Schema.optional(Schema.Union([Clip, Schema.Null])),
    encoding: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["binary", "base64"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    fromSurface: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    fullPage: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    omitBackground: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    optimizeForSpeed: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    quality: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["png", "jpeg", "webp"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<ScreenshotOptions>;

interface Error2 {
  /** Error code. */
  code: number;
  /** Error message. */
  message: string;
}
const Error2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
  }),
) as unknown as Schema.Codec<Error2>;

interface ScreenshotOptions2 {
  captureBeyondViewport?: boolean | null;
  clip?: {
    height: number;
    width: number;
    x: number;
    y: number;
    scale?: number | null;
  } | null;
  fromSurface?: boolean | null;
  fullPage?: boolean | null;
  omitBackground?: boolean | null;
  optimizeForSpeed?: boolean | null;
  quality?: number | null;
  type?: "png" | "jpeg" | "webp" | (string & {}) | null;
}
const ScreenshotOptions2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    captureBeyondViewport: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    clip: Schema.optional(Schema.Union([Clip, Schema.Null])),
    fromSurface: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    fullPage: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    omitBackground: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    optimizeForSpeed: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    quality: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["png", "jpeg", "webp"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<ScreenshotOptions2>;

interface AccessibilityTree {
  role: string;
  autocomplete?: string | null;
  checked?: boolean | "mixed" | null;
  children?: unknown[] | null;
  description?: string | null;
  disabled?: boolean | null;
  expanded?: boolean | null;
  focused?: boolean | null;
  haspopup?: string | null;
  invalid?: string | null;
  keyshortcuts?: string | null;
  level?: number | null;
  modal?: boolean | null;
  multiline?: boolean | null;
  multiselectable?: boolean | null;
  name?: string | null;
  orientation?: string | null;
  pressed?: boolean | "mixed" | null;
  readonly?: boolean | null;
  required?: boolean | null;
  roledescription?: string | null;
  selected?: boolean | null;
  value?: string | number | null;
  valuemax?: number | null;
  valuemin?: number | null;
  valuetext?: string | null;
}
const AccessibilityTree = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    role: Schema.String,
    autocomplete: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    checked: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Boolean, Schema.Literal("mixed")]),
        Schema.Null,
      ]),
    ),
    children: Schema.optional(
      Schema.Union([Schema.Array(Schema.Unknown), Schema.Null]),
    ),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    expanded: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    focused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    haspopup: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invalid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keyshortcuts: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    level: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    modal: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    multiline: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    multiselectable: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    orientation: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    pressed: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Boolean, Schema.Literal("mixed")]),
        Schema.Null,
      ]),
    ),
    readonly: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    roledescription: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    selected: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    value: Schema.optional(
      Schema.Union([Schema.Union([Schema.String, Schema.Number]), Schema.Null]),
    ),
    valuemax: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    valuemin: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    valuetext: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<AccessibilityTree>;

// =============================================================================
// Content
// =============================================================================

export interface CreateContentRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
}

export const CreateContentRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    url: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    emulateMediaType: Schema.optional(Schema.String),
    gotoOptions: Schema.optional(GotoOptions),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    html: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/content",
    }),
  ),
) as unknown as Schema.Codec<CreateContentRequest>;

export type CreateContentResponse = string;

export const CreateContentResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.String.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateContentResponse>;

export type CreateContentError = DefaultErrors;

export const createContent: API.OperationMethod<
  CreateContentRequest,
  CreateContentResponse,
  CreateContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateContentRequest,
  output: CreateContentResponse,
  errors: [],
}));

// =============================================================================
// Crawl
// =============================================================================

export interface GetCrawlRequest {
  jobId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Query param: Cursor for pagination. */
  cursor?: number;
  /** Query param: Limit for pagination. */
  limit?: number;
  /** Query param: Filter by URL status. */
  status?:
    | "queued"
    | "errored"
    | "completed"
    | "disallowed"
    | "skipped"
    | "cancelled"
    | (string & {});
}

export const GetCrawlRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    cursor: Schema.optional(Schema.Number).pipe(T.HttpQuery("cursor")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "queued",
          "errored",
          "completed",
          "disallowed",
          "skipped",
          "cancelled",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("status")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/crawl/{jobId}",
    }),
  ),
) as unknown as Schema.Codec<GetCrawlRequest>;

export interface GetCrawlResponse {
  /** Crawl job ID. */
  id: string;
  /** Total seconds spent in browser so far. */
  browserSecondsUsed: number;
  /** Total number of URLs that have been crawled so far. */
  finished: number;
  /** List of crawl job records. */
  records: {
    metadata: { status: number; url: string; title?: string | null };
    status:
      | "queued"
      | "errored"
      | "completed"
      | "disallowed"
      | "skipped"
      | "cancelled"
      | (string & {});
    url: string;
    html?: string | null;
    json?: Record<string, unknown> | null;
    markdown?: string | null;
  }[];
  /** Total number of URLs that were skipped due to include/exclude/subdomain filters. Skipped URLs are included in records but are not counted toward total/finished. */
  skipped: number;
  /** Current crawl job status. */
  status: string;
  /** Total current number of URLs in the crawl job. */
  total: number;
  /** Cursor for pagination. */
  cursor?: string | null;
}

export const GetCrawlResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    browserSecondsUsed: Schema.Number,
    finished: Schema.Number,
    records: Schema.Array(Record2),
    skipped: Schema.Number,
    status: Schema.String,
    total: Schema.Number,
    cursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetCrawlResponse>;

export type GetCrawlError = DefaultErrors;

export const getCrawl: API.OperationMethod<
  GetCrawlRequest,
  GetCrawlResponse,
  GetCrawlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCrawlRequest,
  output: GetCrawlResponse,
  errors: [],
}));

export interface CreateCrawlRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param: List of crawl purposes to respect Content-Signal directives in robots.txt. Allowed values: 'search', 'ai-input', 'ai-train'. Learn more: https://contentsignals.org/. Default: ['search', 'a */
  crawlPurposes?: ("search" | "ai-input" | "ai-train" | (string & {}))[];
  /** Body param: Maximum number of levels deep the crawler will traverse from the starting URL. */
  depth?: number;
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Formats to return. Default is `html`. */
  formats?: ("html" | "markdown" | "json" | (string & {}))[];
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Options for JSON extraction. */
  jsonOptions?: {
    customAi?: { model: string; authorization?: string }[];
    prompt?: string;
    responseFormat?: {
      type: string;
      jsonSchema?: Record<string, unknown> | null;
    };
  };
  /** Body param: Maximum number of URLs to crawl. */
  limit?: number;
  /** Body param: Maximum age of a resource that can be returned from cache in seconds. Default is 1 day. */
  maxAge?: number;
  /** Body param: Unix timestamp (seconds since epoch) indicating to only crawl pages that were modified since this time. For sitemap URLs with a lastmod field, this is compared directly. For other URLs, th */
  modifiedSince?: number;
  /** Body param: Additional options for the crawler. */
  options?: {
    excludePatterns?: string[];
    includeExternalLinks?: boolean;
    includePatterns?: string[];
    includeSubdomains?: boolean;
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Whether to render the page or fetch static content. True by default. */
  render?: boolean;
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param: Source of links to crawl. 'sitemaps' - only crawl URLs from sitemaps, 'links' - only crawl URLs scraped from pages, 'all' - crawl both sitemap and scraped links (default). */
  source?: "sitemaps" | "links" | "all" | (string & {});
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateCrawlRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    url: Schema.String,
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    crawlPurposes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["search", "ai-input", "ai-train"]),
          Schema.String,
        ]),
      ),
    ),
    depth: Schema.optional(Schema.Number),
    emulateMediaType: Schema.optional(Schema.String),
    formats: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["html", "markdown", "json"]),
          Schema.String,
        ]),
      ),
    ),
    gotoOptions: Schema.optional(GotoOptions),
    jsonOptions: Schema.optional(JsonOptions),
    limit: Schema.optional(Schema.Number),
    maxAge: Schema.optional(Schema.Number),
    modifiedSince: Schema.optional(Schema.Number),
    options: Schema.optional(Options),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    render: Schema.optional(Schema.Boolean),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    source: Schema.optional(
      Schema.Union([
        Schema.Literals(["sitemaps", "links", "all"]),
        Schema.String,
      ]),
    ),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/crawl",
    }),
  ),
) as unknown as Schema.Codec<CreateCrawlRequest>;

export type CreateCrawlResponse = string;

export const CreateCrawlResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.String.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateCrawlResponse>;

export type CreateCrawlError = DefaultErrors;

export const createCrawl: API.OperationMethod<
  CreateCrawlRequest,
  CreateCrawlResponse,
  CreateCrawlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCrawlRequest,
  output: CreateCrawlResponse,
  errors: [],
}));

export interface DeleteCrawlRequest {
  jobId: string;
  /** Account ID. */
  accountId: string;
}

export const DeleteCrawlRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/browser-rendering/crawl/{jobId}",
    }),
  ),
) as unknown as Schema.Codec<DeleteCrawlRequest>;

export interface DeleteCrawlResponse {
  /** The ID of the cancelled job. */
  jobId: string;
  /** Cancellation confirmation message. */
  message: string;
}

export const DeleteCrawlResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    jobId: Schema.String,
    message: Schema.String,
  })
    .pipe(Schema.encodeKeys({ jobId: "job_id", message: "message" }))
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteCrawlResponse>;

export type DeleteCrawlError = DefaultErrors;

export const deleteCrawl: API.OperationMethod<
  DeleteCrawlRequest,
  DeleteCrawlResponse,
  DeleteCrawlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCrawlRequest,
  output: DeleteCrawlResponse,
  errors: [],
}));

// =============================================================================
// DevtoolBrowser
// =============================================================================

export interface CreateDevtoolBrowserRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Keep-alive time in milliseconds. */
  keepAlive?: number;
  /** Query param: Use experimental browser. */
  lab?: boolean;
  /** Query param */
  recording?: boolean;
  /** Query param: Include browser targets in response. */
  targets?: boolean;
}

export const CreateDevtoolBrowserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      keepAlive: Schema.optional(Schema.Number).pipe(T.HttpQuery("keep_alive")),
      lab: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("lab")),
      recording: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("recording")),
      targets: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("targets")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser",
      }),
    ),
  ) as unknown as Schema.Codec<CreateDevtoolBrowserRequest>;

export interface CreateDevtoolBrowserResponse {
  /** Browser session ID. */
  sessionId: string;
  /** WebSocket URL for the session. */
  webSocketDebuggerUrl?: string | null;
}

export const CreateDevtoolBrowserResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String,
      webSocketDebuggerUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<CreateDevtoolBrowserResponse>;

export type CreateDevtoolBrowserError = DefaultErrors;

export const createDevtoolBrowser: API.OperationMethod<
  CreateDevtoolBrowserRequest,
  CreateDevtoolBrowserResponse,
  CreateDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDevtoolBrowserRequest,
  output: CreateDevtoolBrowserResponse,
  errors: [],
}));

export interface DeleteDevtoolBrowserRequest {
  sessionId: string;
  /** Account ID. */
  accountId: string;
}

export const DeleteDevtoolBrowserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteDevtoolBrowserRequest>;

export interface DeleteDevtoolBrowserResponse {
  status: "closing" | "closed" | (string & {});
}

export const DeleteDevtoolBrowserResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      status: Schema.Union([
        Schema.Literals(["closing", "closed"]),
        Schema.String,
      ]),
    }),
  ) as unknown as Schema.Codec<DeleteDevtoolBrowserResponse>;

export type DeleteDevtoolBrowserError = DefaultErrors;

export const deleteDevtoolBrowser: API.OperationMethod<
  DeleteDevtoolBrowserRequest,
  DeleteDevtoolBrowserResponse,
  DeleteDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDevtoolBrowserRequest,
  output: DeleteDevtoolBrowserResponse,
  errors: [],
}));

export interface ConnectDevtoolBrowserRequest {
  sessionId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Keep-alive time in ms (only valid when acquiring new session). */
  keepAlive?: number;
  /** Query param: Use experimental browser. */
  lab?: boolean;
  /** Query param */
  recording?: boolean;
}

export const ConnectDevtoolBrowserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      keepAlive: Schema.optional(Schema.Number).pipe(T.HttpQuery("keep_alive")),
      lab: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("lab")),
      recording: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("recording")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}",
      }),
    ),
  ) as unknown as Schema.Codec<ConnectDevtoolBrowserRequest>;

export type ConnectDevtoolBrowserResponse = unknown;

export const ConnectDevtoolBrowserResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<ConnectDevtoolBrowserResponse>;

export type ConnectDevtoolBrowserError = DefaultErrors;

export const connectDevtoolBrowser: API.OperationMethod<
  ConnectDevtoolBrowserRequest,
  ConnectDevtoolBrowserResponse,
  ConnectDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConnectDevtoolBrowserRequest,
  output: ConnectDevtoolBrowserResponse,
  errors: [],
}));

export interface LaunchDevtoolBrowserRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Keep-alive time in ms (only valid when acquiring new session). */
  keepAlive?: number;
  /** Query param: Use experimental browser. */
  lab?: boolean;
  /** Query param */
  recording?: boolean;
}

export const LaunchDevtoolBrowserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      keepAlive: Schema.optional(Schema.Number).pipe(T.HttpQuery("keep_alive")),
      lab: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("lab")),
      recording: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("recording")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser",
      }),
    ),
  ) as unknown as Schema.Codec<LaunchDevtoolBrowserRequest>;

export type LaunchDevtoolBrowserResponse = unknown;

export const LaunchDevtoolBrowserResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<LaunchDevtoolBrowserResponse>;

export type LaunchDevtoolBrowserError = DefaultErrors;

export const launchDevtoolBrowser: API.OperationMethod<
  LaunchDevtoolBrowserRequest,
  LaunchDevtoolBrowserResponse,
  LaunchDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LaunchDevtoolBrowserRequest,
  output: LaunchDevtoolBrowserResponse,
  errors: [],
}));

export interface ProtocolDevtoolBrowserRequest {
  sessionId: string;
  /** Account ID. */
  accountId: string;
}

export const ProtocolDevtoolBrowserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/protocol",
      }),
    ),
  ) as unknown as Schema.Codec<ProtocolDevtoolBrowserRequest>;

export interface ProtocolDevtoolBrowserResponse {
  /** List of protocol domains. */
  domains: {
    domain: string;
    commands?: Record<string, unknown>[] | null;
    dependencies?: string[] | null;
    events?: Record<string, unknown>[] | null;
    experimental?: boolean | null;
    types?: Record<string, unknown>[] | null;
  }[];
  /** Protocol version. */
  version?: { major: string; minor: string } | null;
}

export const ProtocolDevtoolBrowserResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domains: Schema.Array(Domain),
      version: Schema.optional(Schema.Union([Version, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ProtocolDevtoolBrowserResponse>;

export type ProtocolDevtoolBrowserError = DefaultErrors;

export const protocolDevtoolBrowser: API.OperationMethod<
  ProtocolDevtoolBrowserRequest,
  ProtocolDevtoolBrowserResponse,
  ProtocolDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProtocolDevtoolBrowserRequest,
  output: ProtocolDevtoolBrowserResponse,
  errors: [],
}));

export interface VersionDevtoolBrowserRequest {
  sessionId: string;
  /** Account ID. */
  accountId: string;
}

export const VersionDevtoolBrowserRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/version",
      }),
    ),
  ) as unknown as Schema.Codec<VersionDevtoolBrowserRequest>;

export interface VersionDevtoolBrowserResponse {
  /** Browser name and version. */
  browser: string;
  /** Chrome DevTools Protocol version. */
  protocolVersion: string;
  /** User agent string. */
  userAgent: string;
  /** V8 JavaScript engine version. */
  v8Version: string;
  /** WebKit version. */
  webKitVersion: string;
  /** WebSocket URL for debugging the browser. */
  webSocketDebuggerUrl: string;
}

export const VersionDevtoolBrowserResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      browser: Schema.String,
      protocolVersion: Schema.String,
      userAgent: Schema.String,
      v8Version: Schema.String,
      webKitVersion: Schema.String,
      webSocketDebuggerUrl: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        browser: "Browser",
        protocolVersion: "Protocol-Version",
        userAgent: "User-Agent",
        v8Version: "V8-Version",
        webKitVersion: "WebKit-Version",
        webSocketDebuggerUrl: "webSocketDebuggerUrl",
      }),
    ),
  ) as unknown as Schema.Codec<VersionDevtoolBrowserResponse>;

export type VersionDevtoolBrowserError = DefaultErrors;

export const versionDevtoolBrowser: API.OperationMethod<
  VersionDevtoolBrowserRequest,
  VersionDevtoolBrowserResponse,
  VersionDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VersionDevtoolBrowserRequest,
  output: VersionDevtoolBrowserResponse,
  errors: [],
}));

// =============================================================================
// DevtoolBrowserPage
// =============================================================================

export interface GetDevtoolBrowserPageRequest {
  sessionId: string;
  targetId: string;
  /** Account ID. */
  accountId: string;
}

export const GetDevtoolBrowserPageRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      targetId: Schema.String.pipe(T.HttpPath("targetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/page/{targetId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDevtoolBrowserPageRequest>;

export type GetDevtoolBrowserPageResponse = unknown;

export const GetDevtoolBrowserPageResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<GetDevtoolBrowserPageResponse>;

export type GetDevtoolBrowserPageError = DefaultErrors;

export const getDevtoolBrowserPage: API.OperationMethod<
  GetDevtoolBrowserPageRequest,
  GetDevtoolBrowserPageResponse,
  GetDevtoolBrowserPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDevtoolBrowserPageRequest,
  output: GetDevtoolBrowserPageResponse,
  errors: [],
}));

// =============================================================================
// DevtoolBrowserTarget
// =============================================================================

export interface GetDevtoolBrowserTargetRequest {
  sessionId: string;
  targetId: string;
  /** Account ID. */
  accountId: string;
}

export const GetDevtoolBrowserTargetRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      targetId: Schema.String.pipe(T.HttpPath("targetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/list/{targetId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDevtoolBrowserTargetRequest>;

export interface GetDevtoolBrowserTargetResponse {
  /** Target ID. */
  id: string;
  /** Target type (page, background_page, worker, etc.). */
  type: string;
  /** URL of the target. */
  url: string;
  /** Target description. */
  description?: string | null;
  /** DevTools frontend URL. */
  devtoolsFrontendUrl?: string | null;
  /** Title of the target. */
  title?: string | null;
  /** WebSocket URL for debugging this target. */
  webSocketDebuggerUrl?: string | null;
}

export const GetDevtoolBrowserTargetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      devtoolsFrontendUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      webSocketDebuggerUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<GetDevtoolBrowserTargetResponse>;

export type GetDevtoolBrowserTargetError = DefaultErrors;

export const getDevtoolBrowserTarget: API.OperationMethod<
  GetDevtoolBrowserTargetRequest,
  GetDevtoolBrowserTargetResponse,
  GetDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDevtoolBrowserTargetRequest,
  output: GetDevtoolBrowserTargetResponse,
  errors: [],
}));

export interface ListDevtoolBrowserTargetsRequest {
  sessionId: string;
  /** Account ID. */
  accountId: string;
}

export const ListDevtoolBrowserTargetsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/list",
      }),
    ),
  ) as unknown as Schema.Codec<ListDevtoolBrowserTargetsRequest>;

export type ListDevtoolBrowserTargetsResponse = {
  id: string;
  type: string;
  url: string;
  description?: string | null;
  devtoolsFrontendUrl?: string | null;
  title?: string | null;
  webSocketDebuggerUrl?: string | null;
}[];

export const ListDevtoolBrowserTargetsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Array(TargetListResponseItem),
  ) as unknown as Schema.Codec<ListDevtoolBrowserTargetsResponse>;

export type ListDevtoolBrowserTargetsError = DefaultErrors;

export const listDevtoolBrowserTargets: API.OperationMethod<
  ListDevtoolBrowserTargetsRequest,
  ListDevtoolBrowserTargetsResponse,
  ListDevtoolBrowserTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDevtoolBrowserTargetsRequest,
  output: ListDevtoolBrowserTargetsResponse,
  errors: [],
}));

export interface CreateDevtoolBrowserTargetRequest {
  sessionId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Query param */
  url?: string;
}

export const CreateDevtoolBrowserTargetRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      url: Schema.optional(Schema.String).pipe(T.HttpQuery("url")),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/new",
      }),
    ),
  ) as unknown as Schema.Codec<CreateDevtoolBrowserTargetRequest>;

export interface CreateDevtoolBrowserTargetResponse {
  /** Target ID. */
  id: string;
  /** Target type (page, background_page, worker, etc.). */
  type: string;
  /** URL of the target. */
  url: string;
  /** Target description. */
  description?: string | null;
  /** DevTools frontend URL. */
  devtoolsFrontendUrl?: string | null;
  /** Title of the target. */
  title?: string | null;
  /** WebSocket URL for debugging this target. */
  webSocketDebuggerUrl?: string | null;
}

export const CreateDevtoolBrowserTargetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      devtoolsFrontendUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      webSocketDebuggerUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<CreateDevtoolBrowserTargetResponse>;

export type CreateDevtoolBrowserTargetError = DefaultErrors;

export const createDevtoolBrowserTarget: API.OperationMethod<
  CreateDevtoolBrowserTargetRequest,
  CreateDevtoolBrowserTargetResponse,
  CreateDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDevtoolBrowserTargetRequest,
  output: CreateDevtoolBrowserTargetResponse,
  errors: [],
}));

export interface ActivateDevtoolBrowserTargetRequest {
  sessionId: string;
  targetId: string;
  /** Account ID. */
  accountId: string;
}

export const ActivateDevtoolBrowserTargetRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      targetId: Schema.String.pipe(T.HttpPath("targetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/activate/{targetId}",
      }),
    ),
  ) as unknown as Schema.Codec<ActivateDevtoolBrowserTargetRequest>;

export interface ActivateDevtoolBrowserTargetResponse {
  /** Target activated. */
  message: string;
}

export const ActivateDevtoolBrowserTargetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.String,
    }),
  ) as unknown as Schema.Codec<ActivateDevtoolBrowserTargetResponse>;

export type ActivateDevtoolBrowserTargetError = DefaultErrors;

export const activateDevtoolBrowserTarget: API.OperationMethod<
  ActivateDevtoolBrowserTargetRequest,
  ActivateDevtoolBrowserTargetResponse,
  ActivateDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateDevtoolBrowserTargetRequest,
  output: ActivateDevtoolBrowserTargetResponse,
  errors: [],
}));

export interface CloseDevtoolBrowserTargetRequest {
  sessionId: string;
  targetId: string;
  /** Account ID. */
  accountId: string;
}

export const CloseDevtoolBrowserTargetRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      targetId: Schema.String.pipe(T.HttpPath("targetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/close/{targetId}",
      }),
    ),
  ) as unknown as Schema.Codec<CloseDevtoolBrowserTargetRequest>;

export interface CloseDevtoolBrowserTargetResponse {
  /** Target is closing. */
  message: string;
}

export const CloseDevtoolBrowserTargetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.String,
    }),
  ) as unknown as Schema.Codec<CloseDevtoolBrowserTargetResponse>;

export type CloseDevtoolBrowserTargetError = DefaultErrors;

export const closeDevtoolBrowserTarget: API.OperationMethod<
  CloseDevtoolBrowserTargetRequest,
  CloseDevtoolBrowserTargetResponse,
  CloseDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CloseDevtoolBrowserTargetRequest,
  output: CloseDevtoolBrowserTargetResponse,
  errors: [],
}));

// =============================================================================
// DevtoolSession
// =============================================================================

export interface GetDevtoolSessionRequest {
  sessionId: string;
  /** Account ID. */
  accountId: string;
}

export const GetDevtoolSessionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/session/{sessionId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetDevtoolSessionRequest>;

export interface GetDevtoolSessionResponse {
  /** Session ID. */
  sessionId: string;
  /** Reason for session closure. */
  closeReason?: string | null;
  /** Human-readable close reason. */
  closeReasonText?: string | null;
  /** Connection end time. */
  connectionEndTime?: number | null;
  /** Connection ID. */
  connectionId?: string | null;
  /** Connection start time. */
  connectionStartTime?: number | null;
  /** DevTools frontend URL. */
  devtoolsFrontendUrl?: string | null;
  /** Session end time. */
  endTime?: number | null;
  /** Last updated timestamp. */
  lastUpdated?: number | null;
  /** Session start time. */
  startTime?: number | null;
  /** WebSocket URL for debugging this target. */
  webSocketDebuggerUrl?: string | null;
}

export const GetDevtoolSessionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sessionId: Schema.String,
      closeReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      closeReasonText: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      connectionEndTime: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      connectionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      connectionStartTime: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      devtoolsFrontendUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      endTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      lastUpdated: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      startTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      webSocketDebuggerUrl: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<GetDevtoolSessionResponse>;

export type GetDevtoolSessionError = DefaultErrors;

export const getDevtoolSession: API.OperationMethod<
  GetDevtoolSessionRequest,
  GetDevtoolSessionResponse,
  GetDevtoolSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDevtoolSessionRequest,
  output: GetDevtoolSessionResponse,
  errors: [],
}));

export interface ListDevtoolSessionsRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param */
  limit?: number;
  /** Query param */
  offset?: number;
}

export const ListDevtoolSessionsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/browser-rendering/devtools/session",
      }),
    ),
  ) as unknown as Schema.Codec<ListDevtoolSessionsRequest>;

export type ListDevtoolSessionsResponse = {
  sessionId: string;
  closeReason?: string | null;
  closeReasonText?: string | null;
  connectionEndTime?: number | null;
  connectionId?: string | null;
  connectionStartTime?: number | null;
  devtoolsFrontendUrl?: string | null;
  endTime?: number | null;
  lastUpdated?: number | null;
  startTime?: number | null;
  webSocketDebuggerUrl?: string | null;
}[];

export const ListDevtoolSessionsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Array(SessionListResponseItem),
  ) as unknown as Schema.Codec<ListDevtoolSessionsResponse>;

export type ListDevtoolSessionsError = DefaultErrors;

export const listDevtoolSessions: API.OperationMethod<
  ListDevtoolSessionsRequest,
  ListDevtoolSessionsResponse,
  ListDevtoolSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDevtoolSessionsRequest,
  output: ListDevtoolSessionsResponse,
  errors: [],
}));

// =============================================================================
// Json
// =============================================================================

export interface CreateJsonRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param: Optional list of custom AI models to use for the request. The models will be tried in the order provided, and in case a model returns an error, the next one will be used as fallback. */
  customAi?: { model: string; authorization?: string }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param */
  prompt?: string;
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  responseFormat?: {
    type: string;
    jsonSchema?: Record<string, unknown> | null;
  };
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
}

export const CreateJsonRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    html: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    customAi: Schema.optional(Schema.Array(CustomAI)),
    emulateMediaType: Schema.optional(Schema.String),
    gotoOptions: Schema.optional(GotoOptions),
    prompt: Schema.optional(Schema.String),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    responseFormat: Schema.optional(ResponseFormat),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
  }).pipe(
    Schema.encodeKeys({
      html: "html",
      actionTimeout: "actionTimeout",
      addScriptTag: "addScriptTag",
      addStyleTag: "addStyleTag",
      allowRequestPattern: "allowRequestPattern",
      allowResourceTypes: "allowResourceTypes",
      authenticate: "authenticate",
      bestAttempt: "bestAttempt",
      cookies: "cookies",
      customAi: "custom_ai",
      emulateMediaType: "emulateMediaType",
      gotoOptions: "gotoOptions",
      prompt: "prompt",
      rejectRequestPattern: "rejectRequestPattern",
      rejectResourceTypes: "rejectResourceTypes",
      responseFormat: "response_format",
      setExtraHTTPHeaders: "setExtraHTTPHeaders",
      setJavaScriptEnabled: "setJavaScriptEnabled",
      userAgent: "userAgent",
      viewport: "viewport",
      waitForSelector: "waitForSelector",
      waitForTimeout: "waitForTimeout",
      url: "url",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/json",
    }),
  ),
) as unknown as Schema.Codec<CreateJsonRequest>;

export type CreateJsonResponse = Record<string, unknown>;

export const CreateJsonResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateJsonResponse>;

export type CreateJsonError = DefaultErrors;

export const createJson: API.OperationMethod<
  CreateJsonRequest,
  CreateJsonResponse,
  CreateJsonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateJsonRequest,
  output: CreateJsonResponse,
  errors: [],
}));

// =============================================================================
// Link
// =============================================================================

export interface CreateLinkRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param */
  excludeExternalLinks?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param */
  visibleLinksOnly?: boolean;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
}

export const CreateLinkRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    html: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    emulateMediaType: Schema.optional(Schema.String),
    excludeExternalLinks: Schema.optional(Schema.Boolean),
    gotoOptions: Schema.optional(GotoOptions),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    visibleLinksOnly: Schema.optional(Schema.Boolean),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/links",
    }),
  ),
) as unknown as Schema.Codec<CreateLinkRequest>;

export type CreateLinkResponse = string[];

export const CreateLinkResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(Schema.String).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateLinkResponse>;

export type CreateLinkError = DefaultErrors;

export const createLink: API.OperationMethod<
  CreateLinkRequest,
  CreateLinkResponse,
  CreateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLinkRequest,
  output: CreateLinkResponse,
  errors: [],
}));

// =============================================================================
// Markdown
// =============================================================================

export interface CreateMarkdownRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
}

export const CreateMarkdownRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    url: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    emulateMediaType: Schema.optional(Schema.String),
    gotoOptions: Schema.optional(GotoOptions),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    html: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/markdown",
    }),
  ),
) as unknown as Schema.Codec<CreateMarkdownRequest>;

export type CreateMarkdownResponse = string;

export const CreateMarkdownResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateMarkdownResponse>;

export type CreateMarkdownError = DefaultErrors;

export const createMarkdown: API.OperationMethod<
  CreateMarkdownRequest,
  CreateMarkdownResponse,
  CreateMarkdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMarkdownRequest,
  output: CreateMarkdownResponse,
  errors: [],
}));

// =============================================================================
// Pdf
// =============================================================================

export interface CreatePdfRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.pdfoptions). */
  pdfOptions?: {
    displayHeaderFooter?: boolean;
    footerTemplate?: string;
    format?:
      | "letter"
      | "legal"
      | "tabloid"
      | "ledger"
      | "a0"
      | "a1"
      | "a2"
      | "a3"
      | "a4"
      | "a5"
      | "a6"
      | (string & {});
    headerTemplate?: string;
    height?: string | number;
    landscape?: boolean;
    margin?: {
      bottom?: string | number;
      left?: string | number;
      right?: string | number;
      top?: string | number;
    };
    omitBackground?: boolean;
    outline?: boolean;
    pageRanges?: string;
    preferCSSPageSize?: boolean;
    printBackground?: boolean;
    scale?: number;
    tagged?: boolean;
    timeout?: number;
    width?: string | number;
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
}

export const CreatePdfRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    html: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    emulateMediaType: Schema.optional(Schema.String),
    gotoOptions: Schema.optional(GotoOptions),
    pdfOptions: Schema.optional(Pdfoptions),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/pdf",
    }),
  ),
) as unknown as Schema.Codec<CreatePdfRequest>;

export type CreatePdfResponse = unknown;

export const CreatePdfResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<CreatePdfResponse>;

export type CreatePdfError = DefaultErrors;

export const createPdf: API.OperationMethod<
  CreatePdfRequest,
  CreatePdfResponse,
  CreatePdfError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePdfRequest,
  output: CreatePdfResponse,
  errors: [],
}));

// =============================================================================
// Scrape
// =============================================================================

export interface CreateScrapeRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param */
  elements: { selector: string }[];
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
}

export const CreateScrapeRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    elements: Schema.Array(Element),
    html: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    emulateMediaType: Schema.optional(Schema.String),
    gotoOptions: Schema.optional(GotoOptions),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/scrape",
    }),
  ),
) as unknown as Schema.Codec<CreateScrapeRequest>;

export type CreateScrapeResponse = {
  results: {
    attributes: { name: string; value: string }[];
    height: number;
    html: string;
    left: number;
    text: string;
    top: number;
    width: number;
  };
  selector: string;
}[];

export const CreateScrapeResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Array(ScrapeCreateResponseItem).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateScrapeResponse>;

export type CreateScrapeError = DefaultErrors;

export const createScrape: API.OperationMethod<
  CreateScrapeRequest,
  CreateScrapeResponse,
  CreateScrapeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScrapeRequest,
  output: CreateScrapeResponse,
  errors: [],
}));

// =============================================================================
// Screenshot
// =============================================================================

export interface CreateScreenshotRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). */
  screenshotOptions?: {
    captureBeyondViewport?: boolean;
    clip?: {
      height: number;
      width: number;
      x: number;
      y: number;
      scale?: number;
    };
    encoding?: "binary" | "base64" | (string & {});
    fromSurface?: boolean;
    fullPage?: boolean;
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    quality?: number;
    type?: "png" | "jpeg" | "webp" | (string & {});
  };
  /** Body param */
  scrollPage?: boolean;
  /** Body param */
  selector?: string;
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
}

export const CreateScreenshotRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
      html: Schema.optional(Schema.String),
      actionTimeout: Schema.optional(Schema.Number),
      addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
      addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
      allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
      allowResourceTypes: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "document",
              "stylesheet",
              "image",
              "media",
              "font",
              "script",
              "texttrack",
              "xhr",
              "fetch",
              "prefetch",
              "eventsource",
              "websocket",
              "manifest",
              "signedexchange",
              "ping",
              "cspviolationreport",
              "preflight",
              "other",
            ]),
            Schema.String,
          ]),
        ),
      ),
      authenticate: Schema.optional(Authenticate),
      bestAttempt: Schema.optional(Schema.Boolean),
      cookies: Schema.optional(Schema.Array(Cookie)),
      emulateMediaType: Schema.optional(Schema.String),
      gotoOptions: Schema.optional(GotoOptions),
      rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
      rejectResourceTypes: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "document",
              "stylesheet",
              "image",
              "media",
              "font",
              "script",
              "texttrack",
              "xhr",
              "fetch",
              "prefetch",
              "eventsource",
              "websocket",
              "manifest",
              "signedexchange",
              "ping",
              "cspviolationreport",
              "preflight",
              "other",
            ]),
            Schema.String,
          ]),
        ),
      ),
      screenshotOptions: Schema.optional(ScreenshotOptions),
      scrollPage: Schema.optional(Schema.Boolean),
      selector: Schema.optional(Schema.String),
      setExtraHTTPHeaders: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      setJavaScriptEnabled: Schema.optional(Schema.Boolean),
      userAgent: Schema.optional(Schema.String),
      viewport: Schema.optional(Viewport),
      waitForSelector: Schema.optional(WaitForSelector),
      waitForTimeout: Schema.optional(Schema.Number),
      url: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/browser-rendering/screenshot",
      }),
    ),
  ) as unknown as Schema.Codec<CreateScreenshotRequest>;

export interface CreateScreenshotResponse {
  /** Response status. */
  success: boolean;
  errors?: { code: number; message: string }[] | null;
}

export const CreateScreenshotResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      errors: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Codec<CreateScreenshotResponse>;

export type CreateScreenshotError = DefaultErrors;

export const createScreenshot: API.OperationMethod<
  CreateScreenshotRequest,
  CreateScreenshotResponse,
  CreateScreenshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScreenshotRequest,
  output: CreateScreenshotResponse,
  errors: [],
}));

// =============================================================================
// Snapshot
// =============================================================================

export interface CreateSnapshotRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html?: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: {
    id?: string;
    content?: string;
    type?: string;
    url?: string;
  }[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: { content?: string; url?: string }[];
  /** Body param: Only allow requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  allowRequestPattern?: string[];
  /** Body param: Only allow requests that match the provided resource types, eg. 'image' or 'script'. */
  allowResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: { password: string; username: string };
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: {
    name: string;
    value: string;
    domain?: string;
    expires?: number;
    httpOnly?: boolean;
    partitionKey?: string;
    path?: string;
    priority?: "Low" | "Medium" | "High" | (string & {});
    sameParty?: boolean;
    sameSite?: "Strict" | "Lax" | "None" | (string & {});
    secure?: boolean;
    sourcePort?: number;
    sourceScheme?: "Unset" | "NonSecure" | "Secure" | (string & {});
    url?: string;
  }[];
  /** Body param */
  emulateMediaType?: string;
  /** Body param */
  formats?: (
    | "content"
    | "screenshot"
    | "markdown"
    | "accessibilityTree"
    | (string & {})
  )[];
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: {
    referer?: string;
    referrerPolicy?: string;
    timeout?: number;
    waitUntil?:
      | "load"
      | "domcontentloaded"
      | "networkidle0"
      | "networkidle2"
      | (
          | "load"
          | "domcontentloaded"
          | "networkidle0"
          | "networkidle2"
          | (string & {})
        )[];
  };
  /** Body param: Block undesired requests that match the provided regex patterns, eg. '/^.\ \.(css)'. */
  rejectRequestPattern?: string[];
  /** Body param: Block undesired requests that match the provided resource types, eg. 'image' or 'script'. */
  rejectResourceTypes?: (
    | "document"
    | "stylesheet"
    | "image"
    | "media"
    | "font"
    | "script"
    | "texttrack"
    | "xhr"
    | "fetch"
    | "prefetch"
    | "eventsource"
    | "websocket"
    | "manifest"
    | "signedexchange"
    | "ping"
    | "cspviolationreport"
    | "preflight"
    | "other"
    | (string & {})
  )[];
  /** Body param */
  screenshotOptions?: {
    captureBeyondViewport?: boolean;
    clip?: {
      height: number;
      width: number;
      x: number;
      y: number;
      scale?: number;
    };
    fromSurface?: boolean;
    fullPage?: boolean;
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    quality?: number;
    type?: "png" | "jpeg" | "webp" | (string & {});
  };
  /** Body param */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param */
  setJavaScriptEnabled?: boolean;
  /** Body param */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: {
    height: number;
    width: number;
    deviceScaleFactor?: number;
    hasTouch?: boolean;
    isLandscape?: boolean;
    isMobile?: boolean;
  };
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: {
    selector: string;
    hidden?: true;
    timeout?: number;
    visible?: true;
  };
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url?: string;
}

export const CreateSnapshotRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    html: Schema.optional(Schema.String),
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    authenticate: Schema.optional(Authenticate),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(Schema.Array(Cookie)),
    emulateMediaType: Schema.optional(Schema.String),
    formats: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "content",
            "screenshot",
            "markdown",
            "accessibilityTree",
          ]),
          Schema.String,
        ]),
      ),
    ),
    gotoOptions: Schema.optional(GotoOptions),
    rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    rejectResourceTypes: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals([
            "document",
            "stylesheet",
            "image",
            "media",
            "font",
            "script",
            "texttrack",
            "xhr",
            "fetch",
            "prefetch",
            "eventsource",
            "websocket",
            "manifest",
            "signedexchange",
            "ping",
            "cspviolationreport",
            "preflight",
            "other",
          ]),
          Schema.String,
        ]),
      ),
    ),
    screenshotOptions: Schema.optional(ScreenshotOptions2),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(Viewport),
    waitForSelector: Schema.optional(WaitForSelector),
    waitForTimeout: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/snapshot",
    }),
  ),
) as unknown as Schema.Codec<CreateSnapshotRequest>;

export interface CreateSnapshotResponse {
  /** Accessibility tree node */
  accessibilityTree?: {
    role: string;
    autocomplete?: string | null;
    checked?: boolean | "mixed" | null;
    children?: unknown[] | null;
    description?: string | null;
    disabled?: boolean | null;
    expanded?: boolean | null;
    focused?: boolean | null;
    haspopup?: string | null;
    invalid?: string | null;
    keyshortcuts?: string | null;
    level?: number | null;
    modal?: boolean | null;
    multiline?: boolean | null;
    multiselectable?: boolean | null;
    name?: string | null;
    orientation?: string | null;
    pressed?: boolean | "mixed" | null;
    readonly?: boolean | null;
    required?: boolean | null;
    roledescription?: string | null;
    selected?: boolean | null;
    value?: string | number | null;
    valuemax?: number | null;
    valuemin?: number | null;
    valuetext?: string | null;
  } | null;
  /** HTML content. */
  content?: string | null;
  /** Markdown content. */
  markdown?: string | null;
  /** Base64 encoded image. */
  screenshot?: string | null;
}

export const CreateSnapshotResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accessibilityTree: Schema.optional(
        Schema.Union([AccessibilityTree, Schema.Null]),
      ),
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      markdown: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      screenshot: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateSnapshotResponse>;

export type CreateSnapshotError = DefaultErrors;

export const createSnapshot: API.OperationMethod<
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotRequest,
  output: CreateSnapshotResponse,
  errors: [],
}));
