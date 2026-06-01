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
}

export const CreateContentRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  url: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
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

export const GetCrawlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Schema<GetCrawlRequest>;

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

export const GetCrawlResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  browserSecondsUsed: Schema.Number,
  finished: Schema.Number,
  records: Schema.Array(
    Schema.Struct({
      metadata: Schema.Struct({
        status: Schema.Number,
        url: Schema.String,
        title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }),
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
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      markdown: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ),
  skipped: Schema.Number,
  status: Schema.String,
  total: Schema.Number,
  cursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
}).pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetCrawlResponse>;

export type GetCrawlError = DefaultErrors;

export const getCrawl: API.OperationMethod<
  GetCrawlRequest,
  GetCrawlResponse,
  GetCrawlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  render?: true;
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

export const CreateCrawlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  url: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
  jsonOptions: Schema.optional(
    Schema.Struct({
      customAi: Schema.optional(
        Schema.Array(
          Schema.Struct({
            model: Schema.String,
            authorization: Schema.optional(Schema.String),
          }),
        ),
      ),
      prompt: Schema.optional(Schema.String),
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
    }).pipe(
      Schema.encodeKeys({
        customAi: "custom_ai",
        prompt: "prompt",
        responseFormat: "response_format",
      }),
    ),
  ),
  limit: Schema.optional(Schema.Number),
  maxAge: Schema.optional(Schema.Number),
  modifiedSince: Schema.optional(Schema.Number),
  options: Schema.optional(
    Schema.Struct({
      excludePatterns: Schema.optional(Schema.Array(Schema.String)),
      includeExternalLinks: Schema.optional(Schema.Boolean),
      includePatterns: Schema.optional(Schema.Array(Schema.String)),
      includeSubdomains: Schema.optional(Schema.Boolean),
    }),
  ),
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
  render: Schema.optional(Schema.Literal(true)),
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
  waitForTimeout: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/crawl",
  }),
) as unknown as Schema.Schema<CreateCrawlRequest>;

export type CreateCrawlResponse = string;

export const CreateCrawlResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateCrawlResponse>;

export type CreateCrawlError = DefaultErrors;

export const createCrawl: API.OperationMethod<
  CreateCrawlRequest,
  CreateCrawlResponse,
  CreateCrawlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCrawlRequest,
  output: CreateCrawlResponse,
  errors: [],
}));

export interface DeleteCrawlRequest {
  jobId: string;
  /** Account ID. */
  accountId: string;
}

export const DeleteCrawlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/browser-rendering/crawl/{jobId}",
  }),
) as unknown as Schema.Schema<DeleteCrawlRequest>;

export interface DeleteCrawlResponse {
  /** The ID of the cancelled job. */
  jobId: string;
  /** Cancellation confirmation message. */
  message: string;
}

export const DeleteCrawlResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.String,
  message: Schema.String,
})
  .pipe(Schema.encodeKeys({ jobId: "job_id", message: "message" }))
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteCrawlResponse>;

export type DeleteCrawlError = DefaultErrors;

export const deleteCrawl: API.OperationMethod<
  DeleteCrawlRequest,
  DeleteCrawlResponse,
  DeleteCrawlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateDevtoolBrowserRequest>;

export interface CreateDevtoolBrowserResponse {
  /** Browser session ID. */
  sessionId: string;
  /** WebSocket URL for the session. */
  webSocketDebuggerUrl?: string | null;
}

export const CreateDevtoolBrowserResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String,
    webSocketDebuggerUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }) as unknown as Schema.Schema<CreateDevtoolBrowserResponse>;

export type CreateDevtoolBrowserError = DefaultErrors;

export const createDevtoolBrowser: API.OperationMethod<
  CreateDevtoolBrowserRequest,
  CreateDevtoolBrowserResponse,
  CreateDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}",
    }),
  ) as unknown as Schema.Schema<DeleteDevtoolBrowserRequest>;

export interface DeleteDevtoolBrowserResponse {
  status: "closing" | "closed" | (string & {});
}

export const DeleteDevtoolBrowserResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Union([
      Schema.Literals(["closing", "closed"]),
      Schema.String,
    ]),
  }) as unknown as Schema.Schema<DeleteDevtoolBrowserResponse>;

export type DeleteDevtoolBrowserError = DefaultErrors;

export const deleteDevtoolBrowser: API.OperationMethod<
  DeleteDevtoolBrowserRequest,
  DeleteDevtoolBrowserResponse,
  DeleteDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ConnectDevtoolBrowserRequest>;

export type ConnectDevtoolBrowserResponse = unknown;

export const ConnectDevtoolBrowserResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<ConnectDevtoolBrowserResponse>;

export type ConnectDevtoolBrowserError = DefaultErrors;

export const connectDevtoolBrowser: API.OperationMethod<
  ConnectDevtoolBrowserRequest,
  ConnectDevtoolBrowserResponse,
  ConnectDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    keepAlive: Schema.optional(Schema.Number).pipe(T.HttpQuery("keep_alive")),
    lab: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("lab")),
    recording: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("recording")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser",
    }),
  ) as unknown as Schema.Schema<LaunchDevtoolBrowserRequest>;

export type LaunchDevtoolBrowserResponse = unknown;

export const LaunchDevtoolBrowserResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<LaunchDevtoolBrowserResponse>;

export type LaunchDevtoolBrowserError = DefaultErrors;

export const launchDevtoolBrowser: API.OperationMethod<
  LaunchDevtoolBrowserRequest,
  LaunchDevtoolBrowserResponse,
  LaunchDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/protocol",
    }),
  ) as unknown as Schema.Schema<ProtocolDevtoolBrowserRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.Array(
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
        experimental: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        types: Schema.optional(
          Schema.Union([
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            Schema.Null,
          ]),
        ),
      }),
    ),
    version: Schema.optional(
      Schema.Union([
        Schema.Struct({
          major: Schema.String,
          minor: Schema.String,
        }),
        Schema.Null,
      ]),
    ),
  }) as unknown as Schema.Schema<ProtocolDevtoolBrowserResponse>;

export type ProtocolDevtoolBrowserError = DefaultErrors;

export const protocolDevtoolBrowser: API.OperationMethod<
  ProtocolDevtoolBrowserRequest,
  ProtocolDevtoolBrowserResponse,
  ProtocolDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/version",
    }),
  ) as unknown as Schema.Schema<VersionDevtoolBrowserRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<VersionDevtoolBrowserResponse>;

export type VersionDevtoolBrowserError = DefaultErrors;

export const versionDevtoolBrowser: API.OperationMethod<
  VersionDevtoolBrowserRequest,
  VersionDevtoolBrowserResponse,
  VersionDevtoolBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    targetId: Schema.String.pipe(T.HttpPath("targetId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/page/{targetId}",
    }),
  ) as unknown as Schema.Schema<GetDevtoolBrowserPageRequest>;

export type GetDevtoolBrowserPageResponse = unknown;

export const GetDevtoolBrowserPageResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<GetDevtoolBrowserPageResponse>;

export type GetDevtoolBrowserPageError = DefaultErrors;

export const getDevtoolBrowserPage: API.OperationMethod<
  GetDevtoolBrowserPageRequest,
  GetDevtoolBrowserPageResponse,
  GetDevtoolBrowserPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    targetId: Schema.String.pipe(T.HttpPath("targetId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/list/{targetId}",
    }),
  ) as unknown as Schema.Schema<GetDevtoolBrowserTargetRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Schema<GetDevtoolBrowserTargetResponse>;

export type GetDevtoolBrowserTargetError = DefaultErrors;

export const getDevtoolBrowserTarget: API.OperationMethod<
  GetDevtoolBrowserTargetRequest,
  GetDevtoolBrowserTargetResponse,
  GetDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/list",
    }),
  ) as unknown as Schema.Schema<ListDevtoolBrowserTargetsRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
  ) as unknown as Schema.Schema<ListDevtoolBrowserTargetsResponse>;

export type ListDevtoolBrowserTargetsError = DefaultErrors;

export const listDevtoolBrowserTargets: API.OperationMethod<
  ListDevtoolBrowserTargetsRequest,
  ListDevtoolBrowserTargetsResponse,
  ListDevtoolBrowserTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    url: Schema.optional(Schema.String).pipe(T.HttpQuery("url")),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/new",
    }),
  ) as unknown as Schema.Schema<CreateDevtoolBrowserTargetRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Schema<CreateDevtoolBrowserTargetResponse>;

export type CreateDevtoolBrowserTargetError = DefaultErrors;

export const createDevtoolBrowserTarget: API.OperationMethod<
  CreateDevtoolBrowserTargetRequest,
  CreateDevtoolBrowserTargetResponse,
  CreateDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    targetId: Schema.String.pipe(T.HttpPath("targetId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/activate/{targetId}",
    }),
  ) as unknown as Schema.Schema<ActivateDevtoolBrowserTargetRequest>;

export interface ActivateDevtoolBrowserTargetResponse {
  /** Target activated. */
  message: string;
}

export const ActivateDevtoolBrowserTargetResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.String,
  }) as unknown as Schema.Schema<ActivateDevtoolBrowserTargetResponse>;

export type ActivateDevtoolBrowserTargetError = DefaultErrors;

export const activateDevtoolBrowserTarget: API.OperationMethod<
  ActivateDevtoolBrowserTargetRequest,
  ActivateDevtoolBrowserTargetResponse,
  ActivateDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    targetId: Schema.String.pipe(T.HttpPath("targetId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/browser/{sessionId}/json/close/{targetId}",
    }),
  ) as unknown as Schema.Schema<CloseDevtoolBrowserTargetRequest>;

export interface CloseDevtoolBrowserTargetResponse {
  /** Target is closing. */
  message: string;
}

export const CloseDevtoolBrowserTargetResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.String,
  }) as unknown as Schema.Schema<CloseDevtoolBrowserTargetResponse>;

export type CloseDevtoolBrowserTargetError = DefaultErrors;

export const closeDevtoolBrowserTarget: API.OperationMethod<
  CloseDevtoolBrowserTargetRequest,
  CloseDevtoolBrowserTargetResponse,
  CloseDevtoolBrowserTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/session/{sessionId}",
    }),
  ) as unknown as Schema.Schema<GetDevtoolSessionRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Schema<GetDevtoolSessionResponse>;

export type GetDevtoolSessionError = DefaultErrors;

export const getDevtoolSession: API.OperationMethod<
  GetDevtoolSessionRequest,
  GetDevtoolSessionResponse,
  GetDevtoolSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/browser-rendering/devtools/session",
    }),
  ) as unknown as Schema.Schema<ListDevtoolSessionsRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
  ) as unknown as Schema.Schema<ListDevtoolSessionsResponse>;

export type ListDevtoolSessionsError = DefaultErrors;

export const listDevtoolSessions: API.OperationMethod<
  ListDevtoolSessionsRequest,
  ListDevtoolSessionsResponse,
  ListDevtoolSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  html: string;
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
}

export const CreateJsonRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  customAi: Schema.optional(
    Schema.Array(
      Schema.Struct({
        model: Schema.String,
        authorization: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
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
}

export const CreateLinkRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  excludeExternalLinks: Schema.optional(Schema.Boolean),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  visibleLinksOnly: Schema.optional(Schema.Boolean),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
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
}

export const CreateMarkdownRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  url: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
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
}

export const CreatePdfRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
  pdfOptions: Schema.optional(
    Schema.Struct({
      displayHeaderFooter: Schema.optional(Schema.Boolean),
      footerTemplate: Schema.optional(Schema.String),
      format: Schema.optional(
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
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
  /** Body param */
  elements: { selector: string }[];
  /** Body param: Set the content of the page, eg: `<h1>Hello World!!</h1>`. Either `html` or `url` must be set. */
  html: string;
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
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
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
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
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
}

export const CreateScreenshotRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
    html: Schema.String,
    actionTimeout: Schema.optional(Schema.Number),
    addScriptTag: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          content: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          url: Schema.optional(Schema.String),
        }),
      ),
    ),
    addStyleTag: Schema.optional(
      Schema.Array(
        Schema.Struct({
          content: Schema.optional(Schema.String),
          url: Schema.optional(Schema.String),
        }),
      ),
    ),
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
    authenticate: Schema.optional(
      Schema.Struct({
        password: SensitiveString,
        username: Schema.String,
      }),
    ),
    bestAttempt: Schema.optional(Schema.Boolean),
    cookies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          value: Schema.String,
          domain: Schema.optional(Schema.String),
          expires: Schema.optional(Schema.Number),
          httpOnly: Schema.optional(Schema.Boolean),
          partitionKey: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
          priority: Schema.optional(
            Schema.Union([
              Schema.Literals(["Low", "Medium", "High"]),
              Schema.String,
            ]),
          ),
          sameParty: Schema.optional(Schema.Boolean),
          sameSite: Schema.optional(
            Schema.Union([
              Schema.Literals(["Strict", "Lax", "None"]),
              Schema.String,
            ]),
          ),
          secure: Schema.optional(Schema.Boolean),
          sourcePort: Schema.optional(Schema.Number),
          sourceScheme: Schema.optional(
            Schema.Union([
              Schema.Literals(["Unset", "NonSecure", "Secure"]),
              Schema.String,
            ]),
          ),
          url: Schema.optional(Schema.String),
        }),
      ),
    ),
    emulateMediaType: Schema.optional(Schema.String),
    gotoOptions: Schema.optional(
      Schema.Struct({
        referer: Schema.optional(Schema.String),
        referrerPolicy: Schema.optional(Schema.String),
        timeout: Schema.optional(Schema.Number),
        waitUntil: Schema.optional(
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
        ),
      }),
    ),
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
    screenshotOptions: Schema.optional(
      Schema.Struct({
        captureBeyondViewport: Schema.optional(Schema.Boolean),
        clip: Schema.optional(
          Schema.Struct({
            height: Schema.Number,
            width: Schema.Number,
            x: Schema.Number,
            y: Schema.Number,
            scale: Schema.optional(Schema.Number),
          }),
        ),
        encoding: Schema.optional(
          Schema.Union([Schema.Literals(["binary", "base64"]), Schema.String]),
        ),
        fromSurface: Schema.optional(Schema.Boolean),
        fullPage: Schema.optional(Schema.Boolean),
        omitBackground: Schema.optional(Schema.Boolean),
        optimizeForSpeed: Schema.optional(Schema.Boolean),
        quality: Schema.optional(Schema.Number),
        type: Schema.optional(
          Schema.Union([
            Schema.Literals(["png", "jpeg", "webp"]),
            Schema.String,
          ]),
        ),
      }),
    ),
    scrollPage: Schema.optional(Schema.Boolean),
    selector: Schema.optional(Schema.String),
    setExtraHTTPHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    setJavaScriptEnabled: Schema.optional(Schema.Boolean),
    userAgent: Schema.optional(Schema.String),
    viewport: Schema.optional(
      Schema.Struct({
        height: Schema.Number,
        width: Schema.Number,
        deviceScaleFactor: Schema.optional(Schema.Number),
        hasTouch: Schema.optional(Schema.Boolean),
        isLandscape: Schema.optional(Schema.Boolean),
        isMobile: Schema.optional(Schema.Boolean),
      }),
    ),
    waitForSelector: Schema.optional(
      Schema.Struct({
        selector: Schema.String,
        hidden: Schema.optional(Schema.Literal(true)),
        timeout: Schema.optional(Schema.Number),
        visible: Schema.optional(Schema.Literal(true)),
      }),
    ),
    waitForTimeout: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/browser-rendering/screenshot",
    }),
  ) as unknown as Schema.Schema<CreateScreenshotRequest>;

export interface CreateScreenshotResponse {
  /** Response status. */
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
}

export const CreateSnapshotRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  cacheTTL: Schema.optional(Schema.Number).pipe(T.HttpQuery("cacheTTL")),
  html: Schema.String,
  actionTimeout: Schema.optional(Schema.Number),
  addScriptTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  addStyleTag: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
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
  authenticate: Schema.optional(
    Schema.Struct({
      password: SensitiveString,
      username: Schema.String,
    }),
  ),
  bestAttempt: Schema.optional(Schema.Boolean),
  cookies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        value: Schema.String,
        domain: Schema.optional(Schema.String),
        expires: Schema.optional(Schema.Number),
        httpOnly: Schema.optional(Schema.Boolean),
        partitionKey: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        priority: Schema.optional(
          Schema.Union([
            Schema.Literals(["Low", "Medium", "High"]),
            Schema.String,
          ]),
        ),
        sameParty: Schema.optional(Schema.Boolean),
        sameSite: Schema.optional(
          Schema.Union([
            Schema.Literals(["Strict", "Lax", "None"]),
            Schema.String,
          ]),
        ),
        secure: Schema.optional(Schema.Boolean),
        sourcePort: Schema.optional(Schema.Number),
        sourceScheme: Schema.optional(
          Schema.Union([
            Schema.Literals(["Unset", "NonSecure", "Secure"]),
            Schema.String,
          ]),
        ),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  emulateMediaType: Schema.optional(Schema.String),
  gotoOptions: Schema.optional(
    Schema.Struct({
      referer: Schema.optional(Schema.String),
      referrerPolicy: Schema.optional(Schema.String),
      timeout: Schema.optional(Schema.Number),
      waitUntil: Schema.optional(
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
      ),
    }),
  ),
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
  screenshotOptions: Schema.optional(
    Schema.Struct({
      captureBeyondViewport: Schema.optional(Schema.Boolean),
      clip: Schema.optional(
        Schema.Struct({
          height: Schema.Number,
          width: Schema.Number,
          x: Schema.Number,
          y: Schema.Number,
          scale: Schema.optional(Schema.Number),
        }),
      ),
      fromSurface: Schema.optional(Schema.Boolean),
      fullPage: Schema.optional(Schema.Boolean),
      omitBackground: Schema.optional(Schema.Boolean),
      optimizeForSpeed: Schema.optional(Schema.Boolean),
      quality: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Union([Schema.Literals(["png", "jpeg", "webp"]), Schema.String]),
      ),
    }),
  ),
  setExtraHTTPHeaders: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  setJavaScriptEnabled: Schema.optional(Schema.Boolean),
  userAgent: Schema.optional(Schema.String),
  viewport: Schema.optional(
    Schema.Struct({
      height: Schema.Number,
      width: Schema.Number,
      deviceScaleFactor: Schema.optional(Schema.Number),
      hasTouch: Schema.optional(Schema.Boolean),
      isLandscape: Schema.optional(Schema.Boolean),
      isMobile: Schema.optional(Schema.Boolean),
    }),
  ),
  waitForSelector: Schema.optional(
    Schema.Struct({
      selector: Schema.String,
      hidden: Schema.optional(Schema.Literal(true)),
      timeout: Schema.optional(Schema.Number),
      visible: Schema.optional(Schema.Literal(true)),
    }),
  ),
  waitForTimeout: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/browser-rendering/snapshot",
  }),
) as unknown as Schema.Schema<CreateSnapshotRequest>;

export interface CreateSnapshotResponse {
  /** HTML content. */
  content: string;
  /** Base64 encoded image. */
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
