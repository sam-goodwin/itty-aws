/**
 * Cloudflare ZARAZ API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service zaraz
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class NotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NotFound>()("NotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ContextEnricher {
  escapedWorkerName: string;
  workerTag: string;
}
const ContextEnricher = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    escapedWorkerName: Schema.String,
    workerTag: Schema.String,
  }),
) as unknown as Schema.Codec<ContextEnricher>;

interface Settings {
  /** Automatic injection of Zaraz scripts enabled. */
  autoInjectScript: boolean;
  /** Details of the worker that receives and edits Zaraz Context object. */
  contextEnricher?: { escapedWorkerName: string; workerTag: string } | null;
  /** The domain Zaraz will use for writing and reading its cookies. */
  cookieDomain?: string | null;
  /** Ecommerce API enabled. */
  ecommerce?: boolean | null;
  /** Custom endpoint for server-side track events. */
  eventsApiPath?: string | null;
  /** Hiding external referrer URL enabled. */
  hideExternalReferer?: boolean | null;
  /** Trimming IP address enabled. */
  hideIPAddress?: boolean | null;
  /** Removing URL query params enabled. */
  hideQueryParams?: boolean | null;
  /** Removing sensitive data from User Agent string enabled. */
  hideUserAgent?: boolean | null;
  /** Custom endpoint for Zaraz init script. */
  initPath?: string | null;
  /** Injection of Zaraz scripts into iframes enabled. */
  injectIframes?: boolean | null;
  /** Custom path for Managed Components server functionalities. */
  mcRootPath?: string | null;
  /** Custom endpoint for Zaraz main script. */
  scriptPath?: string | null;
  /** Custom endpoint for Zaraz tracking requests. */
  trackPath?: string | null;
}
const Settings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    autoInjectScript: Schema.Boolean,
    contextEnricher: Schema.optional(
      Schema.Union([ContextEnricher, Schema.Null]),
    ),
    cookieDomain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ecommerce: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    eventsApiPath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hideExternalReferer: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hideIPAddress: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    hideQueryParams: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hideUserAgent: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    initPath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    injectIframes: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    mcRootPath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    scriptPath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    trackPath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Settings>;

interface Analytics {
  /** Consent purpose assigned to Monitoring. */
  defaultPurpose?: string | null;
  /** Whether Advanced Monitoring reports are enabled. */
  enabled?: boolean | null;
  /** Session expiration time (seconds). */
  sessionExpTime?: number | null;
}
const Analytics = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    defaultPurpose: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sessionExpTime: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Analytics>;

interface ButtonTextTranslation {
  /** Object where keys are language codes. */
  acceptAll: Record<string, unknown>;
  /** Object where keys are language codes. */
  confirmMyChoices: Record<string, unknown>;
  /** Object where keys are language codes. */
  rejectAll: Record<string, unknown>;
}
const ButtonTextTranslation = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    acceptAll: Schema.Record(Schema.String, Schema.Unknown),
    confirmMyChoices: Schema.Record(Schema.String, Schema.Unknown),
    rejectAll: Schema.Record(Schema.String, Schema.Unknown),
  }).pipe(
    Schema.encodeKeys({
      acceptAll: "accept_all",
      confirmMyChoices: "confirm_my_choices",
      rejectAll: "reject_all",
    }),
  ),
) as unknown as Schema.Codec<ButtonTextTranslation>;

interface Consent {
  enabled: boolean;
  buttonTextTranslations?: {
    acceptAll: Record<string, unknown>;
    confirmMyChoices: Record<string, unknown>;
    rejectAll: Record<string, unknown>;
  } | null;
  companyEmail?: string | null;
  companyName?: string | null;
  companyStreetAddress?: string | null;
  consentModalIntroHTML?: string | null;
  /** Object where keys are language codes. */
  consentModalIntroHTMLWithTranslations?: Record<string, unknown> | null;
  cookieName?: string | null;
  customCSS?: string | null;
  customIntroDisclaimerDismissed?: boolean | null;
  defaultLanguage?: string | null;
  hideModal?: boolean | null;
  /** Object where keys are purpose alpha-numeric IDs. */
  purposes?: Record<string, unknown> | null;
  /** Object where keys are purpose alpha-numeric IDs. */
  purposesWithTranslations?: Record<string, unknown> | null;
  tcfCompliant?: boolean | null;
}
const Consent = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    buttonTextTranslations: Schema.optional(
      Schema.Union([ButtonTextTranslation, Schema.Null]),
    ),
    companyEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    companyName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    companyStreetAddress: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    consentModalIntroHTML: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    consentModalIntroHTMLWithTranslations: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    cookieName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customCSS: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customIntroDisclaimerDismissed: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    defaultLanguage: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    hideModal: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    purposes: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    purposesWithTranslations: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    tcfCompliant: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Consent>;

interface ListHistoriesResponseResult {
  /** ID of the configuration. */
  id: number;
  /** Date and time the configuration was created. */
  createdAt: string;
  /** Configuration description provided by the user who published this configuration. */
  description: string;
  /** Date and time the configuration was last updated. */
  updatedAt: string;
  /** Alpha-numeric ID of the account user who published the configuration. */
  userId: string;
}
const ListHistoriesResponseResult = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Number,
    createdAt: Schema.String,
    description: Schema.String,
    updatedAt: Schema.String,
    userId: Schema.String,
  }),
) as unknown as Schema.Codec<ListHistoriesResponseResult>;

// =============================================================================
// Config
// =============================================================================

export interface GetConfigRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetConfigRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/settings/zaraz/config" }),
  ),
) as unknown as Schema.Codec<GetConfigRequest>;

export interface GetConfigResponse {
  /** Data layer compatibility mode enabled. */
  dataLayer: boolean;
  /** The key for Zaraz debug mode. */
  debugKey: string;
  /** General Zaraz settings. */
  settings: {
    autoInjectScript: boolean;
    contextEnricher?: { escapedWorkerName: string; workerTag: string } | null;
    cookieDomain?: string | null;
    ecommerce?: boolean | null;
    eventsApiPath?: string | null;
    hideExternalReferer?: boolean | null;
    hideIPAddress?: boolean | null;
    hideQueryParams?: boolean | null;
    hideUserAgent?: boolean | null;
    initPath?: string | null;
    injectIframes?: boolean | null;
    mcRootPath?: string | null;
    scriptPath?: string | null;
    trackPath?: string | null;
  };
  /** Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. */
  tools: Record<string, unknown>;
  /** Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. */
  triggers: Record<string, unknown>;
  /** Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included. */
  variables: Record<string, unknown>;
  /** Zaraz internal version of the config. */
  zarazVersion: number;
  /** Cloudflare Monitoring settings. */
  analytics?: {
    defaultPurpose?: string | null;
    enabled?: boolean | null;
    sessionExpTime?: number | null;
  } | null;
  /** Consent management configuration. */
  consent?: {
    enabled: boolean;
    buttonTextTranslations?: {
      acceptAll: Record<string, unknown>;
      confirmMyChoices: Record<string, unknown>;
      rejectAll: Record<string, unknown>;
    } | null;
    companyEmail?: string | null;
    companyName?: string | null;
    companyStreetAddress?: string | null;
    consentModalIntroHTML?: string | null;
    consentModalIntroHTMLWithTranslations?: Record<string, unknown> | null;
    cookieName?: string | null;
    customCSS?: string | null;
    customIntroDisclaimerDismissed?: boolean | null;
    defaultLanguage?: string | null;
    hideModal?: boolean | null;
    purposes?: Record<string, unknown> | null;
    purposesWithTranslations?: Record<string, unknown> | null;
    tcfCompliant?: boolean | null;
  } | null;
  /** Single Page Application support enabled. */
  historyChange?: boolean | null;
}

export const GetConfigResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataLayer: Schema.Boolean,
    debugKey: Schema.String,
    settings: Settings,
    tools: Schema.Record(Schema.String, Schema.Unknown),
    triggers: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.Record(Schema.String, Schema.Unknown),
    zarazVersion: Schema.Number,
    analytics: Schema.optional(Schema.Union([Analytics, Schema.Null])),
    consent: Schema.optional(Schema.Union([Consent, Schema.Null])),
    historyChange: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetConfigResponse>;

export type GetConfigError = DefaultErrors | Forbidden | NotFound;

export const getConfig: API.OperationMethod<
  GetConfigRequest,
  GetConfigResponse,
  GetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigRequest,
  output: GetConfigResponse,
  errors: [Forbidden, NotFound],
}));

export interface PutConfigRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Data layer compatibility mode enabled. */
  dataLayer: boolean;
  /** Body param: The key for Zaraz debug mode. */
  debugKey: string;
  /** Body param: General Zaraz settings. */
  settings: {
    autoInjectScript: boolean;
    contextEnricher?: { escapedWorkerName: string; workerTag: string };
    cookieDomain?: string;
    ecommerce?: boolean;
    eventsApiPath?: string;
    hideExternalReferer?: boolean;
    hideIPAddress?: boolean;
    hideQueryParams?: boolean;
    hideUserAgent?: boolean;
    initPath?: string;
    injectIframes?: boolean;
    mcRootPath?: string;
    scriptPath?: string;
    trackPath?: string;
  };
  /** Body param: Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. */
  tools: Record<string, unknown>;
  /** Body param: Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. */
  triggers: Record<string, unknown>;
  /** Body param: Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included. */
  variables: Record<string, unknown>;
  /** Body param: Zaraz internal version of the config. */
  zarazVersion: number;
  /** Body param: Cloudflare Monitoring settings. */
  analytics?: {
    defaultPurpose?: string;
    enabled?: boolean;
    sessionExpTime?: number;
  };
  /** Body param: Consent management configuration. */
  consent?: {
    enabled: boolean;
    buttonTextTranslations?: {
      acceptAll: Record<string, unknown>;
      confirmMyChoices: Record<string, unknown>;
      rejectAll: Record<string, unknown>;
    };
    companyEmail?: string;
    companyName?: string;
    companyStreetAddress?: string;
    consentModalIntroHTML?: string;
    consentModalIntroHTMLWithTranslations?: Record<string, unknown>;
    cookieName?: string;
    customCSS?: string;
    customIntroDisclaimerDismissed?: boolean;
    defaultLanguage?: string;
    hideModal?: boolean;
    purposes?: Record<string, unknown>;
    purposesWithTranslations?: Record<string, unknown>;
    tcfCompliant?: boolean;
  };
  /** Body param: Single Page Application support enabled. */
  historyChange?: boolean;
}

export const PutConfigRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    dataLayer: Schema.Boolean,
    debugKey: Schema.String,
    settings: Settings,
    tools: Schema.Record(Schema.String, Schema.Unknown),
    triggers: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.Record(Schema.String, Schema.Unknown),
    zarazVersion: Schema.Number,
    analytics: Schema.optional(Analytics),
    consent: Schema.optional(Consent),
    historyChange: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "PUT", path: "/zones/{zone_id}/settings/zaraz/config" }),
  ),
) as unknown as Schema.Codec<PutConfigRequest>;

export interface PutConfigResponse {
  /** Data layer compatibility mode enabled. */
  dataLayer: boolean;
  /** The key for Zaraz debug mode. */
  debugKey: string;
  /** General Zaraz settings. */
  settings: {
    autoInjectScript: boolean;
    contextEnricher?: { escapedWorkerName: string; workerTag: string } | null;
    cookieDomain?: string | null;
    ecommerce?: boolean | null;
    eventsApiPath?: string | null;
    hideExternalReferer?: boolean | null;
    hideIPAddress?: boolean | null;
    hideQueryParams?: boolean | null;
    hideUserAgent?: boolean | null;
    initPath?: string | null;
    injectIframes?: boolean | null;
    mcRootPath?: string | null;
    scriptPath?: string | null;
    trackPath?: string | null;
  };
  /** Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. */
  tools: Record<string, unknown>;
  /** Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. */
  triggers: Record<string, unknown>;
  /** Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included. */
  variables: Record<string, unknown>;
  /** Zaraz internal version of the config. */
  zarazVersion: number;
  /** Cloudflare Monitoring settings. */
  analytics?: {
    defaultPurpose?: string | null;
    enabled?: boolean | null;
    sessionExpTime?: number | null;
  } | null;
  /** Consent management configuration. */
  consent?: {
    enabled: boolean;
    buttonTextTranslations?: {
      acceptAll: Record<string, unknown>;
      confirmMyChoices: Record<string, unknown>;
      rejectAll: Record<string, unknown>;
    } | null;
    companyEmail?: string | null;
    companyName?: string | null;
    companyStreetAddress?: string | null;
    consentModalIntroHTML?: string | null;
    consentModalIntroHTMLWithTranslations?: Record<string, unknown> | null;
    cookieName?: string | null;
    customCSS?: string | null;
    customIntroDisclaimerDismissed?: boolean | null;
    defaultLanguage?: string | null;
    hideModal?: boolean | null;
    purposes?: Record<string, unknown> | null;
    purposesWithTranslations?: Record<string, unknown> | null;
    tcfCompliant?: boolean | null;
  } | null;
  /** Single Page Application support enabled. */
  historyChange?: boolean | null;
}

export const PutConfigResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataLayer: Schema.Boolean,
    debugKey: Schema.String,
    settings: Settings,
    tools: Schema.Record(Schema.String, Schema.Unknown),
    triggers: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.Record(Schema.String, Schema.Unknown),
    zarazVersion: Schema.Number,
    analytics: Schema.optional(Schema.Union([Analytics, Schema.Null])),
    consent: Schema.optional(Schema.Union([Consent, Schema.Null])),
    historyChange: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutConfigResponse>;

export type PutConfigError = DefaultErrors;

export const putConfig: API.OperationMethod<
  PutConfigRequest,
  PutConfigResponse,
  PutConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutConfigRequest,
  output: PutConfigResponse,
  errors: [],
}));

// =============================================================================
// Default
// =============================================================================

export interface GetDefaultRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetDefaultRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/settings/zaraz/default",
    }),
  ),
) as unknown as Schema.Codec<GetDefaultRequest>;

export interface GetDefaultResponse {
  /** Data layer compatibility mode enabled. */
  dataLayer: boolean;
  /** The key for Zaraz debug mode. */
  debugKey: string;
  /** General Zaraz settings. */
  settings: {
    autoInjectScript: boolean;
    contextEnricher?: { escapedWorkerName: string; workerTag: string } | null;
    cookieDomain?: string | null;
    ecommerce?: boolean | null;
    eventsApiPath?: string | null;
    hideExternalReferer?: boolean | null;
    hideIPAddress?: boolean | null;
    hideQueryParams?: boolean | null;
    hideUserAgent?: boolean | null;
    initPath?: string | null;
    injectIframes?: boolean | null;
    mcRootPath?: string | null;
    scriptPath?: string | null;
    trackPath?: string | null;
  };
  /** Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. */
  tools: Record<string, unknown>;
  /** Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. */
  triggers: Record<string, unknown>;
  /** Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included. */
  variables: Record<string, unknown>;
  /** Zaraz internal version of the config. */
  zarazVersion: number;
  /** Cloudflare Monitoring settings. */
  analytics?: {
    defaultPurpose?: string | null;
    enabled?: boolean | null;
    sessionExpTime?: number | null;
  } | null;
  /** Consent management configuration. */
  consent?: {
    enabled: boolean;
    buttonTextTranslations?: {
      acceptAll: Record<string, unknown>;
      confirmMyChoices: Record<string, unknown>;
      rejectAll: Record<string, unknown>;
    } | null;
    companyEmail?: string | null;
    companyName?: string | null;
    companyStreetAddress?: string | null;
    consentModalIntroHTML?: string | null;
    consentModalIntroHTMLWithTranslations?: Record<string, unknown> | null;
    cookieName?: string | null;
    customCSS?: string | null;
    customIntroDisclaimerDismissed?: boolean | null;
    defaultLanguage?: string | null;
    hideModal?: boolean | null;
    purposes?: Record<string, unknown> | null;
    purposesWithTranslations?: Record<string, unknown> | null;
    tcfCompliant?: boolean | null;
  } | null;
  /** Single Page Application support enabled. */
  historyChange?: boolean | null;
}

export const GetDefaultResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataLayer: Schema.Boolean,
    debugKey: Schema.String,
    settings: Settings,
    tools: Schema.Record(Schema.String, Schema.Unknown),
    triggers: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.Record(Schema.String, Schema.Unknown),
    zarazVersion: Schema.Number,
    analytics: Schema.optional(Schema.Union([Analytics, Schema.Null])),
    consent: Schema.optional(Schema.Union([Consent, Schema.Null])),
    historyChange: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetDefaultResponse>;

export type GetDefaultError = DefaultErrors;

export const getDefault: API.OperationMethod<
  GetDefaultRequest,
  GetDefaultResponse,
  GetDefaultError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDefaultRequest,
  output: GetDefaultResponse,
  errors: [],
}));

// =============================================================================
// Export
// =============================================================================

export interface GetExportRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetExportRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/settings/zaraz/export" }),
  ),
) as unknown as Schema.Codec<GetExportRequest>;

export interface GetExportResponse {
  /** Data layer compatibility mode enabled. */
  dataLayer: boolean;
  /** The key for Zaraz debug mode. */
  debugKey: string;
  /** General Zaraz settings. */
  settings: {
    autoInjectScript: boolean;
    contextEnricher?: { escapedWorkerName: string; workerTag: string } | null;
    cookieDomain?: string | null;
    ecommerce?: boolean | null;
    eventsApiPath?: string | null;
    hideExternalReferer?: boolean | null;
    hideIPAddress?: boolean | null;
    hideQueryParams?: boolean | null;
    hideUserAgent?: boolean | null;
    initPath?: string | null;
    injectIframes?: boolean | null;
    mcRootPath?: string | null;
    scriptPath?: string | null;
    trackPath?: string | null;
  };
  /** Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. */
  tools: Record<string, unknown>;
  /** Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. */
  triggers: Record<string, unknown>;
  /** Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included. */
  variables: Record<string, unknown>;
  /** Zaraz internal version of the config. */
  zarazVersion: number;
  /** Cloudflare Monitoring settings. */
  analytics?: {
    defaultPurpose?: string | null;
    enabled?: boolean | null;
    sessionExpTime?: number | null;
  } | null;
  /** Consent management configuration. */
  consent?: {
    enabled: boolean;
    buttonTextTranslations?: {
      acceptAll: Record<string, unknown>;
      confirmMyChoices: Record<string, unknown>;
      rejectAll: Record<string, unknown>;
    } | null;
    companyEmail?: string | null;
    companyName?: string | null;
    companyStreetAddress?: string | null;
    consentModalIntroHTML?: string | null;
    consentModalIntroHTMLWithTranslations?: Record<string, unknown> | null;
    cookieName?: string | null;
    customCSS?: string | null;
    customIntroDisclaimerDismissed?: boolean | null;
    defaultLanguage?: string | null;
    hideModal?: boolean | null;
    purposes?: Record<string, unknown> | null;
    purposesWithTranslations?: Record<string, unknown> | null;
    tcfCompliant?: boolean | null;
  } | null;
  /** Single Page Application support enabled. */
  historyChange?: boolean | null;
}

export const GetExportResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataLayer: Schema.Boolean,
    debugKey: Schema.String,
    settings: Settings,
    tools: Schema.Record(Schema.String, Schema.Unknown),
    triggers: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.Record(Schema.String, Schema.Unknown),
    zarazVersion: Schema.Number,
    analytics: Schema.optional(Schema.Union([Analytics, Schema.Null])),
    consent: Schema.optional(Schema.Union([Consent, Schema.Null])),
    historyChange: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<GetExportResponse>;

export type GetExportError = DefaultErrors;

export const getExport: API.OperationMethod<
  GetExportRequest,
  GetExportResponse,
  GetExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetExportRequest,
  output: GetExportResponse,
  errors: [],
}));

// =============================================================================
// History
// =============================================================================

export interface ListHistoriesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Maximum amount of results to list. Default value is 10. */
  limit?: number;
  /** Query param: Ordinal number to start listing the results with. Default value is 0. */
  offset?: number;
  /** Query param: The field to sort by. Default is updated_at. */
  sortField?:
    | "id"
    | "user_id"
    | "description"
    | "created_at"
    | "updated_at"
    | (string & {});
  /** Query param: Sorting order. Default is DESC. */
  sortOrder?: "DESC" | "ASC" | (string & {});
}

export const ListHistoriesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
    sortField: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "id",
          "user_id",
          "description",
          "created_at",
          "updated_at",
        ]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("sortField")),
    sortOrder: Schema.optional(
      Schema.Union([Schema.Literals(["DESC", "ASC"]), Schema.String]),
    ).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/settings/zaraz/history",
    }),
  ),
) as unknown as Schema.Codec<ListHistoriesRequest>;

export interface ListHistoriesResponse {
  result: {
    id: number;
    createdAt: string;
    description: string;
    updatedAt: string;
    userId: string;
  }[];
}

export const ListHistoriesResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: Schema.Array(ListHistoriesResponseResult),
  }),
) as unknown as Schema.Codec<ListHistoriesResponse>;

export type ListHistoriesError = DefaultErrors;

export const listHistories: API.PaginatedOperationMethod<
  ListHistoriesRequest,
  ListHistoriesResponse,
  ListHistoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListHistoriesRequest,
  output: ListHistoriesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface PutHistoryRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: ID of the Zaraz configuration to restore. */
  body: number;
}

export const PutHistoryRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    body: Schema.Number.pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/settings/zaraz/history",
    }),
  ),
) as unknown as Schema.Codec<PutHistoryRequest>;

export interface PutHistoryResponse {
  /** Data layer compatibility mode enabled. */
  dataLayer: boolean;
  /** The key for Zaraz debug mode. */
  debugKey: string;
  /** General Zaraz settings. */
  settings: {
    autoInjectScript: boolean;
    contextEnricher?: { escapedWorkerName: string; workerTag: string } | null;
    cookieDomain?: string | null;
    ecommerce?: boolean | null;
    eventsApiPath?: string | null;
    hideExternalReferer?: boolean | null;
    hideIPAddress?: boolean | null;
    hideQueryParams?: boolean | null;
    hideUserAgent?: boolean | null;
    initPath?: string | null;
    injectIframes?: boolean | null;
    mcRootPath?: string | null;
    scriptPath?: string | null;
    trackPath?: string | null;
  };
  /** Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. */
  tools: Record<string, unknown>;
  /** Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. */
  triggers: Record<string, unknown>;
  /** Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included. */
  variables: Record<string, unknown>;
  /** Zaraz internal version of the config. */
  zarazVersion: number;
  /** Cloudflare Monitoring settings. */
  analytics?: {
    defaultPurpose?: string | null;
    enabled?: boolean | null;
    sessionExpTime?: number | null;
  } | null;
  /** Consent management configuration. */
  consent?: {
    enabled: boolean;
    buttonTextTranslations?: {
      acceptAll: Record<string, unknown>;
      confirmMyChoices: Record<string, unknown>;
      rejectAll: Record<string, unknown>;
    } | null;
    companyEmail?: string | null;
    companyName?: string | null;
    companyStreetAddress?: string | null;
    consentModalIntroHTML?: string | null;
    consentModalIntroHTMLWithTranslations?: Record<string, unknown> | null;
    cookieName?: string | null;
    customCSS?: string | null;
    customIntroDisclaimerDismissed?: boolean | null;
    defaultLanguage?: string | null;
    hideModal?: boolean | null;
    purposes?: Record<string, unknown> | null;
    purposesWithTranslations?: Record<string, unknown> | null;
    tcfCompliant?: boolean | null;
  } | null;
  /** Single Page Application support enabled. */
  historyChange?: boolean | null;
}

export const PutHistoryResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataLayer: Schema.Boolean,
    debugKey: Schema.String,
    settings: Settings,
    tools: Schema.Record(Schema.String, Schema.Unknown),
    triggers: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.Record(Schema.String, Schema.Unknown),
    zarazVersion: Schema.Number,
    analytics: Schema.optional(Schema.Union([Analytics, Schema.Null])),
    consent: Schema.optional(Schema.Union([Consent, Schema.Null])),
    historyChange: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutHistoryResponse>;

export type PutHistoryError = DefaultErrors;

export const putHistory: API.OperationMethod<
  PutHistoryRequest,
  PutHistoryResponse,
  PutHistoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutHistoryRequest,
  output: PutHistoryResponse,
  errors: [],
}));

// =============================================================================
// HistoryConfig
// =============================================================================

export interface GetHistoryConfigRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Comma separated list of Zaraz configuration IDs. */
  ids: number[];
}

export const GetHistoryConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ids: Schema.Array(Schema.Number).pipe(T.HttpQuery("ids")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/settings/zaraz/history/configs",
      }),
    ),
  ) as unknown as Schema.Codec<GetHistoryConfigRequest>;

export type GetHistoryConfigResponse = Record<string, unknown>;

export const GetHistoryConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetHistoryConfigResponse>;

export type GetHistoryConfigError = DefaultErrors;

export const getHistoryConfig: API.OperationMethod<
  GetHistoryConfigRequest,
  GetHistoryConfigResponse,
  GetHistoryConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetHistoryConfigRequest,
  output: GetHistoryConfigResponse,
  errors: [],
}));

// =============================================================================
// Publish
// =============================================================================

export interface CreatePublishRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Zaraz configuration description. */
  body?: string;
}

export const CreatePublishRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    body: Schema.optional(Schema.String).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/settings/zaraz/publish",
    }),
  ),
) as unknown as Schema.Codec<CreatePublishRequest>;

export type CreatePublishResponse = string;

export const CreatePublishResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.String.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreatePublishResponse>;

export type CreatePublishError = DefaultErrors;

export const createPublish: API.OperationMethod<
  CreatePublishRequest,
  CreatePublishResponse,
  CreatePublishError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePublishRequest,
  output: CreatePublishResponse,
  errors: [],
}));

// =============================================================================
// Workflow
// =============================================================================

export interface GetWorkflowRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetWorkflowRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/settings/zaraz/workflow",
    }),
  ),
) as unknown as Schema.Codec<GetWorkflowRequest>;

export type GetWorkflowResponse = "realtime" | "preview" | (string & {});

export const GetWorkflowResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([Schema.Literals(["realtime", "preview"]), Schema.String]).pipe(
    T.ResponsePath("result"),
  ),
) as unknown as Schema.Codec<GetWorkflowResponse>;

export type GetWorkflowError = DefaultErrors | Forbidden | NotFound;

export const getWorkflow: API.OperationMethod<
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowRequest,
  output: GetWorkflowResponse,
  errors: [Forbidden, NotFound],
}));

// =============================================================================
// Zaraz
// =============================================================================

export interface PutZarazRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Zaraz workflow. */
  workflow: "realtime" | "preview" | (string & {});
}

export const PutZarazRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    workflow: Schema.Union([
      Schema.Literals(["realtime", "preview"]),
      Schema.String,
    ]).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/settings/zaraz/workflow",
      contentType: "binary",
    }),
  ),
) as unknown as Schema.Codec<PutZarazRequest>;

export type PutZarazResponse = "realtime" | "preview" | (string & {});

export const PutZarazResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Union([Schema.Literals(["realtime", "preview"]), Schema.String]).pipe(
    T.ResponsePath("result"),
  ),
) as unknown as Schema.Codec<PutZarazResponse>;

export type PutZarazError = DefaultErrors;

export const putZaraz: API.OperationMethod<
  PutZarazRequest,
  PutZarazResponse,
  PutZarazError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutZarazRequest,
  output: PutZarazResponse,
  errors: [],
}));
