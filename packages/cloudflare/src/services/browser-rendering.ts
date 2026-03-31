/**
 * Cloudflare BROWSER-RENDERING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service browser-rendering
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Shared Types
// =============================================================================

export interface AddScriptTag {
  id?: string | null;
  content?: string | null;
  type?: string | null;
  url?: string | null;
}

export const AddScriptTag: Schema.Schema<AddScriptTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<AddScriptTag>;

export interface AddStyleTag {
  content?: string | null;
  url?: string | null;
}

export const AddStyleTag: Schema.Schema<AddStyleTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<AddStyleTag>;

export interface Authenticate {
  password: string;
  username: string;
}

export const Authenticate: Schema.Schema<Authenticate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ) as unknown as Schema.Schema<Authenticate>;

export interface Clip {
  height: number;
  width: number;
  x: number;
  y: number;
  scale?: number | null;
}

export const Clip: Schema.Schema<Clip> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      x: Schema.Number,
      y: Schema.Number,
      scale: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Clip>;

export interface Cookie {
  name: string;
  value: string;
  domain?: string | null;
  expires?: number | null;
  httpOnly?: boolean | null;
  partitionKey?: string | null;
  path?: string | null;
  priority?: "Low" | "Medium" | "High" | null;
  sameParty?: boolean | null;
  sameSite?: "Strict" | "Lax" | "None" | null;
  secure?: boolean | null;
  sourcePort?: number | null;
  sourceScheme?: "Unset" | "NonSecure" | "Secure" | null;
  url?: string | null;
}

export const Cookie: Schema.Schema<Cookie> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String,
      value: Schema.String,
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expires: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      httpOnly: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      partitionKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      priority: Schema.optional(
        Schema.Union([Schema.Literals(["Low", "Medium", "High"]), Schema.Null]),
      ),
      sameParty: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      sameSite: Schema.optional(
        Schema.Union([Schema.Literals(["Strict", "Lax", "None"]), Schema.Null]),
      ),
      secure: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      sourcePort: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      sourceScheme: Schema.optional(
        Schema.Union([
          Schema.Literals(["Unset", "NonSecure", "Secure"]),
          Schema.Null,
        ]),
      ),
      url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<Cookie>;

export interface GotoOptions {
  referer?: string | null;
  referrerPolicy?: string | null;
  timeout?: number | null;
  waitUntil?:
    | "load"
    | "domcontentloaded"
    | "networkidle0"
    | "networkidle2"
    | ("load" | "domcontentloaded" | "networkidle0" | "networkidle2")[]
    | null;
}

export const GotoOptions: Schema.Schema<GotoOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      referer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      referrerPolicy: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      waitUntil: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literal("load"),
            Schema.Literal("domcontentloaded"),
            Schema.Literal("networkidle0"),
            Schema.Literal("networkidle2"),
            Schema.Array(
              Schema.Literals([
                "load",
                "domcontentloaded",
                "networkidle0",
                "networkidle2",
              ]),
            ),
          ]),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Schema<GotoOptions>;

export interface ScreenshotOptions {
  captureBeyondViewport?: boolean | null;
  clip?: Clip | null;
  encoding?: "binary" | "base64" | null;
  fromSurface?: boolean | null;
  fullPage?: boolean | null;
  omitBackground?: boolean | null;
  optimizeForSpeed?: boolean | null;
  quality?: number | null;
  type?: "png" | "jpeg" | "webp" | null;
}

export const ScreenshotOptions: Schema.Schema<ScreenshotOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      captureBeyondViewport: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      clip: Schema.optional(Schema.Union([Clip, Schema.Null])),
      encoding: Schema.optional(
        Schema.Union([Schema.Literals(["binary", "base64"]), Schema.Null]),
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
        Schema.Union([Schema.Literals(["png", "jpeg", "webp"]), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<ScreenshotOptions>;

export interface Viewport {
  height: number;
  width: number;
  deviceScaleFactor?: number | null;
  hasTouch?: boolean | null;
  isLandscape?: boolean | null;
  isMobile?: boolean | null;
}

export const Viewport: Schema.Schema<Viewport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Schema<Viewport>;

export interface WaitForSelector {
  selector: string;
  hidden?: true | null;
  timeout?: number | null;
  visible?: true | null;
}

export const WaitForSelector: Schema.Schema<WaitForSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
      timeout: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      visible: Schema.optional(
        Schema.Union([Schema.Literal(true), Schema.Null]),
      ),
    }),
  ) as unknown as Schema.Schema<WaitForSelector>;

// =============================================================================
// Content
// =============================================================================

export interface CreateContentRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Cache TTL default is 5s. Set to 0 to disable. */
  cacheTTL?: number;
  /** Body param: URL to navigate to, eg. `https://example.com`. */
  url: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
  )[];
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateContentRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  url: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/content",
  }),
) as unknown as Schema.Schema<CreateContentRequest>;

export type CreateContentResponse = string;

export const CreateContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateContentResponse>;

export type CreateContentError = DefaultErrors;

export const createContent: API.OperationMethod<
  CreateContentRequest,
  CreateContentResponse,
  CreateContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateContentRequest,
  output: CreateContentResponse,
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
  html: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: Optional list of custom AI models to use for the request. The models will be tried in the order provided, and in case a model returns an error, the next one will be used as fallback. */
  customAi?: { authorization: string; model: string }[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
  /** Body param: */
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
  )[];
  /** Body param: */
  responseFormat?: {
    type: string;
    jsonSchema?: Record<string, unknown> | null;
  };
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateJsonRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
    ),
  ),
  authenticate: Schema.optional(Authenticate),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(Schema.Array(Cookie)),
  customAi: Schema.optional(
    Schema.Array(
      Schema.Struct({
        authorization: Schema.String,
        model: Schema.String,
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(GotoOptions),
  prompt: Schema.optional(Schema.String),
  rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  rejectResourceTypes: Schema.optional(
    Schema.Array(
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
    ),
  ),
  responseFormat: Schema.optional(
    Schema.Struct({
      type: Schema.String,
      jsonSchema: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ type: "type", jsonSchema: "json_schema" })),
  ),
  setExtraHTTPHeaders: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  setJavaScriptEnabled: Schema.optional(Schema.Boolean),
  userAgent: Schema.optional(Schema.String),
  viewport: Schema.optional(Viewport),
  waitForSelector: Schema.optional(WaitForSelector),
  waitForTimeout: Schema.optional(Schema.Number),
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
  }),
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/json",
  }),
) as unknown as Schema.Schema<CreateJsonRequest>;

export type CreateJsonResponse = Record<string, unknown>;

export const CreateJsonResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<CreateJsonResponse>;

export type CreateJsonError = DefaultErrors;

export const createJson: API.OperationMethod<
  CreateJsonRequest,
  CreateJsonResponse,
  CreateJsonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  html: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: */
  excludeExternalLinks?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
  )[];
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: */
  visibleLinksOnly?: boolean;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateLinkRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/links",
  }),
) as unknown as Schema.Schema<CreateLinkRequest>;

export type CreateLinkResponse = string[];

export const CreateLinkResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<CreateLinkResponse>;

export type CreateLinkError = DefaultErrors;

export const createLink: API.OperationMethod<
  CreateLinkRequest,
  CreateLinkResponse,
  CreateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  url: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
  )[];
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateMarkdownRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  url: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/markdown",
  }),
) as unknown as Schema.Schema<CreateMarkdownRequest>;

export type CreateMarkdownResponse = string;

export const CreateMarkdownResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateMarkdownResponse>;

export type CreateMarkdownError = DefaultErrors;

export const createMarkdown: API.OperationMethod<
  CreateMarkdownRequest,
  CreateMarkdownResponse,
  CreateMarkdownError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  html: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
      | "a6";
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
  )[];
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreatePdfRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
    ),
  ),
  authenticate: Schema.optional(Authenticate),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(Schema.Array(Cookie)),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(GotoOptions),
  pdfOptions: Schema.optional(
    Schema.Struct({
      displayHeaderFooter: Schema.optional(Schema.Boolean),
      footerTemplate: Schema.optional(Schema.String),
      format: Schema.optional(
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
      ),
      headerTemplate: Schema.optional(Schema.String),
      height: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
      landscape: Schema.optional(Schema.Boolean),
      margin: Schema.optional(
        Schema.Struct({
          bottom: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
          left: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
          right: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
          top: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
        }),
      ),
      omitBackground: Schema.optional(Schema.Boolean),
      outline: Schema.optional(Schema.Boolean),
      pageRanges: Schema.optional(Schema.String),
      preferCSSPageSize: Schema.optional(Schema.Boolean),
      printBackground: Schema.optional(Schema.Boolean),
      scale: Schema.optional(Schema.Number),
      tagged: Schema.optional(Schema.Boolean),
      timeout: Schema.optional(Schema.Number),
      width: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
    }),
  ),
  rejectRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  rejectResourceTypes: Schema.optional(
    Schema.Array(
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/pdf",
  }),
) as unknown as Schema.Schema<CreatePdfRequest>;

export type CreatePdfResponse = unknown;

export const CreatePdfResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<CreatePdfResponse>;

export type CreatePdfError = DefaultErrors;

export const createPdf: API.OperationMethod<
  CreatePdfRequest,
  CreatePdfResponse,
  CreatePdfError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /** Body param: */
  elements: { selector: string }[];
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
  )[];
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateScrapeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  elements: Schema.Array(
    Schema.Struct({
      selector: Schema.String,
    }),
  ),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/scrape",
  }),
) as unknown as Schema.Schema<CreateScrapeRequest>;

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

export const CreateScrapeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    results: Schema.Struct({
      attributes: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          value: Schema.String,
        }),
      ),
      height: Schema.Number,
      html: Schema.String,
      left: Schema.Number,
      text: Schema.String,
      top: Schema.Number,
      width: Schema.Number,
    }),
    selector: Schema.String,
  }),
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<CreateScrapeResponse>;

export type CreateScrapeError = DefaultErrors;

export const createScrape: API.OperationMethod<
  CreateScrapeRequest,
  CreateScrapeResponse,
  CreateScrapeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  html: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
  )[];
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.screenshotoptions). */
  screenshotOptions?: ScreenshotOptions;
  /** Body param: */
  scrollPage?: boolean;
  /** Body param: */
  selector?: string;
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateScreenshotRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    html: Schema.String,
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
    addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
    allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
    allowResourceTypes: Schema.optional(
      Schema.Array(
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/screenshot",
    }),
  ) as unknown as Schema.Schema<CreateScreenshotRequest>;

export interface CreateScreenshotResponse {
  /** Response status */
  success: boolean;
  errors?: { code: number; message: string }[] | null;
}

export const CreateScreenshotResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
    errors: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            code: Schema.Number,
            message: Schema.String,
          }),
        ),
        Schema.Null,
      ]),
    ),
  }) as unknown as Schema.Schema<CreateScreenshotResponse>;

export type CreateScreenshotError = DefaultErrors;

export const createScreenshot: API.OperationMethod<
  CreateScreenshotRequest,
  CreateScreenshotResponse,
  CreateScreenshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  html: string;
  /** Body param: The maximum duration allowed for the browser action to complete after the page has loaded (such as taking screenshots, extracting content, or generating PDFs). If this time limit is exceed */
  actionTimeout?: number;
  /** Body param: Adds a `<script>` tag into the page with the desired URL or content. */
  addScriptTag?: AddScriptTag[];
  /** Body param: Adds a `<link rel="stylesheet">` tag into the page with the desired URL or a `<style type="text/css">` tag with the content. */
  addStyleTag?: AddStyleTag[];
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
  )[];
  /** Body param: Provide credentials for HTTP authentication. */
  authenticate?: Authenticate;
  /** Body param: Attempt to proceed when 'awaited' events fail or timeout. */
  bestAttempt?: boolean;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setcookie). */
  cookies?: Cookie[];
  /** Body param: */
  emulateMediaType?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.gotooptions). */
  gotoOptions?: GotoOptions;
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
  )[];
  /** Body param: */
  screenshotOptions?: {
    captureBeyondViewport?: boolean;
    clip?: Clip;
    fromSurface?: boolean;
    fullPage?: boolean;
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    quality?: number;
    type?: "png" | "jpeg" | "webp";
  };
  /** Body param: */
  setExtraHTTPHeaders?: Record<string, unknown>;
  /** Body param: */
  setJavaScriptEnabled?: boolean;
  /** Body param: */
  userAgent?: string;
  /** Body param: Check [options](https://pptr.dev/api/puppeteer.page.setviewport). */
  viewport?: Viewport;
  /** Body param: Wait for the selector to appear in page. Check [options](https://pptr.dev/api/puppeteer.page.waitforselector). */
  waitForSelector?: WaitForSelector;
  /** Body param: Waits for a specified timeout before continuing. */
  waitForTimeout?: number;
}

export const CreateSnapshotRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(Schema.Array(AddScriptTag)),
  addStyleTag: Schema.optional(Schema.Array(AddStyleTag)),
  allowRequestPattern: Schema.optional(Schema.Array(Schema.String)),
  allowResourceTypes: Schema.optional(
    Schema.Array(
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
    ),
  ),
  screenshotOptions: Schema.optional(
    Schema.Struct({
      captureBeyondViewport: Schema.optional(Schema.Boolean),
      clip: Schema.optional(Clip),
      fromSurface: Schema.optional(Schema.Boolean),
      fullPage: Schema.optional(Schema.Boolean),
      omitBackground: Schema.optional(Schema.Boolean),
      optimizeForSpeed: Schema.optional(Schema.Boolean),
      quality: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.Literals(["png", "jpeg", "webp"])),
    }),
  ),
  setExtraHTTPHeaders: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  setJavaScriptEnabled: Schema.optional(Schema.Boolean),
  userAgent: Schema.optional(Schema.String),
  viewport: Schema.optional(Viewport),
  waitForSelector: Schema.optional(WaitForSelector),
  waitForTimeout: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/snapshot",
  }),
) as unknown as Schema.Schema<CreateSnapshotRequest>;

export interface CreateSnapshotResponse {
  /** HTML content */
  content: string;
  /** Base64 encoded image */
  screenshot: string;
}

export const CreateSnapshotResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    content: Schema.String,
    screenshot: Schema.String,
  },
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<CreateSnapshotResponse>;

export type CreateSnapshotError = DefaultErrors;

export const createSnapshot: API.OperationMethod<
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSnapshotRequest,
  output: CreateSnapshotResponse,
  errors: [],
}));
