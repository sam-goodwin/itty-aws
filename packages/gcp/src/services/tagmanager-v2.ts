// ==========================================================================
// Tag Manager API (tagmanager v2)
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
  name: "tagmanager",
  version: "v2",
  rootUrl: "https://tagmanager.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Parameter {
  /** The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. */
  key?: string;
  /** A parameter's value (may contain variable references). as appropriate to the specified type. */
  value?: string;
  /** This list parameter's parameters (keys will be ignored). */
  list?: ReadonlyArray<Parameter>;
  /** Whether or not a reference type parameter is strongly or weakly referenced. Only used by Transformations. */
  isWeakReference?: boolean;
  /** This map parameter's parameters (must have keys; keys must be unique). */
  map?: ReadonlyArray<Parameter>;
  /** The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name */
  type?:
    | "typeUnspecified"
    | "template"
    | "integer"
    | "boolean"
    | "list"
    | "map"
    | "triggerReference"
    | "tagReference"
    | (string & {});
}

export const Parameter: Schema.Schema<Parameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Schema.String),
      value: Schema.optional(Schema.String),
      list: Schema.optional(Schema.Array(Parameter)),
      isWeakReference: Schema.optional(Schema.Boolean),
      map: Schema.optional(Schema.Array(Parameter)),
      type: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Parameter" }) as any as Schema.Schema<Parameter>;

export interface Client {
  /** GTM Account ID. */
  accountId?: string;
  /** The client's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** User notes on how to apply this tag in the container. */
  notes?: string;
  /** Priority determines relative firing order. */
  priority?: number;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** Parent folder id. */
  parentFolderId?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified. */
  fingerprint?: string;
  /** Client type. */
  type?: string;
  /** GTM client's API relative path. */
  path?: string;
  /** The Client ID uniquely identifies the GTM client. */
  clientId?: string;
  /** Client display name. */
  name?: string;
}

export const Client: Schema.Schema<Client> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
    notes: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    tagManagerUrl: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
    parentFolderId: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Client" });

export interface VariableFormatValue {
  /** The value to convert if a variable value is true. */
  convertTrueToValue?: Parameter;
  /** The value to convert if a variable value is undefined. */
  convertUndefinedToValue?: Parameter;
  /** The option to convert a variable value to a boolean. */
  convertToBoolean?: boolean;
  /** The value to convert if a variable value is false. */
  convertFalseToValue?: Parameter;
  /** The option to convert a variable value to a number. */
  convertToNumber?:
    | "decimalSeparatorTypeUnspecified"
    | "period"
    | "comma"
    | (string & {});
  /** The value to convert if a variable value is null. */
  convertNullToValue?: Parameter;
  /** The option to convert a string-type variable value to either lowercase or uppercase. */
  caseConversionType?: "none" | "lowercase" | "uppercase" | (string & {});
}

export const VariableFormatValue: Schema.Schema<VariableFormatValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    convertTrueToValue: Schema.optional(Parameter),
    convertUndefinedToValue: Schema.optional(Parameter),
    convertToBoolean: Schema.optional(Schema.Boolean),
    convertFalseToValue: Schema.optional(Parameter),
    convertToNumber: Schema.optional(Schema.String),
    convertNullToValue: Schema.optional(Parameter),
    caseConversionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "VariableFormatValue" });

export interface Variable {
  /** The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. */
  fingerprint?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** Parent folder id. */
  parentFolderId?: string;
  /** The Variable ID uniquely identifies the GTM Variable. */
  variableId?: string;
  /** GTM Variable Type. */
  type?: string;
  /** The start timestamp in milliseconds to schedule a variable. */
  scheduleStartMs?: string;
  /** For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. */
  disablingTriggerId?: ReadonlyArray<string>;
  /** Variable display name. */
  name?: string;
  /** The end timestamp in milliseconds to schedule a variable. */
  scheduleEndMs?: string;
  /** GTM Variable's API relative path. */
  path?: string;
  /** For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. */
  enablingTriggerId?: ReadonlyArray<string>;
  /** User notes on how to apply this variable in the container. */
  notes?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** The variable's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** Option to convert a variable value to other value. */
  formatValue?: VariableFormatValue;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** GTM Workspace ID. */
  workspaceId?: string;
}

export const Variable: Schema.Schema<Variable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    parentFolderId: Schema.optional(Schema.String),
    variableId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    scheduleStartMs: Schema.optional(Schema.String),
    disablingTriggerId: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    scheduleEndMs: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    enablingTriggerId: Schema.optional(Schema.Array(Schema.String)),
    notes: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
    formatValue: Schema.optional(VariableFormatValue),
    tagManagerUrl: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Variable" });

export interface ListVariablesResponse {
  /** All GTM Variables of a GTM Container. */
  variable?: ReadonlyArray<Variable>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListVariablesResponse: Schema.Schema<ListVariablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variable: Schema.optional(Schema.Array(Variable)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListVariablesResponse" });

export interface AccountFeatures {
  /** Whether this Account supports user permissions managed by GTM. */
  supportUserPermissions?: boolean;
  /** Whether this Account supports multiple Containers. */
  supportMultipleContainers?: boolean;
}

export const AccountFeatures: Schema.Schema<AccountFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportUserPermissions: Schema.optional(Schema.Boolean),
    supportMultipleContainers: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AccountFeatures" });

export interface Account {
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** Read-only Account feature set */
  features?: AccountFeatures;
  /** The Account ID uniquely identifies the GTM Account. */
  accountId?: string;
  /** The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. */
  fingerprint?: string;
  /** Account display name. */
  name?: string;
  /** Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. */
  shareData?: boolean;
  /** GTM Account's API relative path. */
  path?: string;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagManagerUrl: Schema.optional(Schema.String),
    features: Schema.optional(AccountFeatures),
    accountId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    shareData: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "Account" });

export interface RevertBuiltInVariableResponse {
  /** Whether the built-in variable is enabled after reversion. */
  enabled?: boolean;
}

export const RevertBuiltInVariableResponse: Schema.Schema<RevertBuiltInVariableResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RevertBuiltInVariableResponse" });

export interface BuiltInVariable {
  /** Type of built-in variable. */
  type?:
    | "builtInVariableTypeUnspecified"
    | "pageUrl"
    | "pageHostname"
    | "pagePath"
    | "referrer"
    | "event"
    | "clickElement"
    | "clickClasses"
    | "clickId"
    | "clickTarget"
    | "clickUrl"
    | "clickText"
    | "firstPartyServingUrl"
    | "formElement"
    | "formClasses"
    | "formId"
    | "formTarget"
    | "formUrl"
    | "formText"
    | "errorMessage"
    | "errorUrl"
    | "errorLine"
    | "newHistoryUrl"
    | "oldHistoryUrl"
    | "newHistoryFragment"
    | "oldHistoryFragment"
    | "newHistoryState"
    | "oldHistoryState"
    | "historySource"
    | "containerVersion"
    | "debugMode"
    | "randomNumber"
    | "containerId"
    | "appId"
    | "appName"
    | "appVersionCode"
    | "appVersionName"
    | "language"
    | "osVersion"
    | "platform"
    | "sdkVersion"
    | "deviceName"
    | "resolution"
    | "advertiserId"
    | "advertisingTrackingEnabled"
    | "htmlId"
    | "environmentName"
    | "ampBrowserLanguage"
    | "ampCanonicalPath"
    | "ampCanonicalUrl"
    | "ampCanonicalHost"
    | "ampReferrer"
    | "ampTitle"
    | "ampClientId"
    | "ampClientTimezone"
    | "ampClientTimestamp"
    | "ampClientScreenWidth"
    | "ampClientScreenHeight"
    | "ampClientScrollX"
    | "ampClientScrollY"
    | "ampClientMaxScrollX"
    | "ampClientMaxScrollY"
    | "ampTotalEngagedTime"
    | "ampPageViewId"
    | "ampPageLoadTime"
    | "ampPageDownloadTime"
    | "ampGtmEvent"
    | "eventName"
    | "firebaseEventParameterCampaign"
    | "firebaseEventParameterCampaignAclid"
    | "firebaseEventParameterCampaignAnid"
    | "firebaseEventParameterCampaignClickTimestamp"
    | "firebaseEventParameterCampaignContent"
    | "firebaseEventParameterCampaignCp1"
    | "firebaseEventParameterCampaignGclid"
    | "firebaseEventParameterCampaignSource"
    | "firebaseEventParameterCampaignTerm"
    | "firebaseEventParameterCurrency"
    | "firebaseEventParameterDynamicLinkAcceptTime"
    | "firebaseEventParameterDynamicLinkLinkid"
    | "firebaseEventParameterNotificationMessageDeviceTime"
    | "firebaseEventParameterNotificationMessageId"
    | "firebaseEventParameterNotificationMessageName"
    | "firebaseEventParameterNotificationMessageTime"
    | "firebaseEventParameterNotificationTopic"
    | "firebaseEventParameterPreviousAppVersion"
    | "firebaseEventParameterPreviousOsVersion"
    | "firebaseEventParameterPrice"
    | "firebaseEventParameterProductId"
    | "firebaseEventParameterQuantity"
    | "firebaseEventParameterValue"
    | "videoProvider"
    | "videoUrl"
    | "videoTitle"
    | "videoDuration"
    | "videoPercent"
    | "videoVisible"
    | "videoStatus"
    | "videoCurrentTime"
    | "scrollDepthThreshold"
    | "scrollDepthUnits"
    | "scrollDepthDirection"
    | "elementVisibilityRatio"
    | "elementVisibilityTime"
    | "elementVisibilityFirstTime"
    | "elementVisibilityRecentTime"
    | "requestPath"
    | "requestMethod"
    | "clientName"
    | "queryString"
    | "serverPageLocationUrl"
    | "serverPageLocationPath"
    | "serverPageLocationHostname"
    | "visitorRegion"
    | "analyticsClientId"
    | "analyticsSessionId"
    | "analyticsSessionNumber"
    | (string & {});
  /** GTM Account ID. */
  accountId?: string;
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** Name of the built-in variable to be used to refer to the built-in variable. */
  name?: string;
  /** GTM BuiltInVariable's API relative path. */
  path?: string;
}

export const BuiltInVariable: Schema.Schema<BuiltInVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuiltInVariable" });

export interface Transformation {
  /** The Transformation ID uniquely identifies the GTM transformation. */
  transformationId?: string;
  /** User notes on how to apply this transformation in the container. */
  notes?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** The transformation's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** The fingerprint of the GTM Transformation as computed at storage time. This value is recomputed whenever the transformation is modified. */
  fingerprint?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** Parent folder id. */
  parentFolderId?: string;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** Transformation type. */
  type?: string;
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** Transformation display name. */
  name?: string;
  /** GTM transformation's API relative path. */
  path?: string;
}

export const Transformation: Schema.Schema<Transformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformationId: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    parentFolderId: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "Transformation" });

export interface Folder {
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** Folder display name. */
  name?: string;
  /** GTM Folder's API relative path. */
  path?: string;
  /** User notes on how to apply this folder in the container. */
  notes?: string;
  /** The Folder ID uniquely identifies the GTM Folder. */
  folderId?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified. */
  fingerprint?: string;
  /** GTM Container ID. */
  containerId?: string;
}

export const Folder: Schema.Schema<Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagManagerUrl: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    folderId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface ZoneChildContainer {
  /** The zone's nickname for the child container. */
  nickname?: string;
  /** The child container's public id. */
  publicId?: string;
}

export const ZoneChildContainer: Schema.Schema<ZoneChildContainer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nickname: Schema.optional(Schema.String),
    publicId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ZoneChildContainer" });

export interface Condition {
  /** A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. */
  parameter?: ReadonlyArray<Parameter>;
  /** The type of operator for this condition. */
  type?:
    | "conditionTypeUnspecified"
    | "equals"
    | "contains"
    | "startsWith"
    | "endsWith"
    | "matchRegex"
    | "greater"
    | "greaterOrEquals"
    | "less"
    | "lessOrEquals"
    | "cssSelector"
    | "urlMatches"
    | (string & {});
}

export const Condition: Schema.Schema<Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.Array(Parameter)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Condition" });

export interface ZoneBoundary {
  /** Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true. */
  customEvaluationTriggerId?: ReadonlyArray<string>;
  /** The conditions that, when conjoined, make up the boundary. */
  condition?: ReadonlyArray<Condition>;
}

export const ZoneBoundary: Schema.Schema<ZoneBoundary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customEvaluationTriggerId: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Schema.Array(Condition)),
  }).annotate({ identifier: "ZoneBoundary" });

export interface ZoneTypeRestriction {
  /** True if type restrictions have been enabled for this Zone. */
  enable?: boolean;
  /** List of type public ids that have been whitelisted for use in this Zone. */
  whitelistedTypeId?: ReadonlyArray<string>;
}

export const ZoneTypeRestriction: Schema.Schema<ZoneTypeRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enable: Schema.optional(Schema.Boolean),
    whitelistedTypeId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ZoneTypeRestriction" });

export interface Zone {
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** Zone display name. */
  name?: string;
  /** GTM Zone's API relative path. */
  path?: string;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** Containers that are children of this Zone. */
  childContainer?: ReadonlyArray<ZoneChildContainer>;
  /** The Zone ID uniquely identifies the GTM Zone. */
  zoneId?: string;
  /** The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified. */
  fingerprint?: string;
  /** This Zone's boundary. */
  boundary?: ZoneBoundary;
  /** GTM Container ID. */
  containerId?: string;
  /** This Zone's type restrictions. */
  typeRestriction?: ZoneTypeRestriction;
  /** User notes on how to apply this zone in the container. */
  notes?: string;
  /** GTM Account ID. */
  accountId?: string;
}

export const Zone: Schema.Schema<Zone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspaceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    childContainer: Schema.optional(Schema.Array(ZoneChildContainer)),
    zoneId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    boundary: Schema.optional(ZoneBoundary),
    containerId: Schema.optional(Schema.String),
    typeRestriction: Schema.optional(ZoneTypeRestriction),
    notes: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Zone" });

export interface GtagConfig {
  /** Google tag config type. */
  type?: string;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** Google tag config's API relative path. */
  path?: string;
  /** Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise. */
  workspaceId?: string;
  /** The ID uniquely identifies the Google tag config. */
  gtagConfigId?: string;
  /** Google tag account ID. */
  accountId?: string;
  /** The Google tag config's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified. */
  fingerprint?: string;
  /** Google tag container ID. */
  containerId?: string;
}

export const GtagConfig: Schema.Schema<GtagConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
    gtagConfigId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GtagConfig" });

export interface SetupTag {
  /** The name of the setup tag. */
  tagName?: string;
  /** If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status. */
  stopOnSetupFailure?: boolean;
}

export const SetupTag: Schema.Schema<SetupTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagName: Schema.optional(Schema.String),
    stopOnSetupFailure: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SetupTag" });

export interface TagConsentSetting {
  /** The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted. */
  consentStatus?: "notSet" | "notNeeded" | "needed" | (string & {});
  /** The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING. */
  consentType?: Parameter;
}

export const TagConsentSetting: Schema.Schema<TagConsentSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consentStatus: Schema.optional(Schema.String),
    consentType: Schema.optional(Parameter),
  }).annotate({ identifier: "TagConsentSetting" });

export interface TeardownTag {
  /** The name of the teardown tag. */
  tagName?: string;
  /** If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status. */
  stopTeardownOnFailure?: boolean;
}

export const TeardownTag: Schema.Schema<TeardownTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagName: Schema.optional(Schema.String),
    stopTeardownOnFailure: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TeardownTag" });

export interface Tag {
  /** User notes on how to apply this tag in the container. */
  notes?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** The tag's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** The Tag ID uniquely identifies the GTM Tag. */
  tagId?: string;
  /** The list of setup tags. Currently we only allow one. */
  setupTag?: ReadonlyArray<SetupTag>;
  /** GTM Container ID. */
  containerId?: string;
  /** The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. */
  fingerprint?: string;
  /** GTM Tag's API relative path. */
  path?: string;
  /** The end timestamp in milliseconds to schedule a tag. */
  scheduleEndMs?: string;
  /** Indicates whether the tag is paused, which prevents the tag from firing. */
  paused?: boolean;
  /** GTM Tag Type. */
  type?: string;
  /** The start timestamp in milliseconds to schedule a tag. */
  scheduleStartMs?: string;
  /** Option to fire this tag. */
  tagFiringOption?:
    | "tagFiringOptionUnspecified"
    | "unlimited"
    | "oncePerEvent"
    | "oncePerLoad"
    | (string & {});
  /** Consent settings of a tag. */
  consentSettings?: TagConsentSetting;
  /** The list of teardown tags. Currently we only allow one. */
  teardownTag?: ReadonlyArray<TeardownTag>;
  /** If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). */
  liveOnly?: boolean;
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. */
  priority?: Parameter;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** Parent folder id. */
  parentFolderId?: string;
  /** A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. */
  monitoringMetadata?: Parameter;
  /** Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. */
  firingTriggerId?: ReadonlyArray<string>;
  /** Tag display name. */
  name?: string;
  /** If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. */
  monitoringMetadataTagNameKey?: string;
  /** Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. */
  blockingTriggerId?: ReadonlyArray<string>;
}

export const Tag: Schema.Schema<Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
    tagId: Schema.optional(Schema.String),
    setupTag: Schema.optional(Schema.Array(SetupTag)),
    containerId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    scheduleEndMs: Schema.optional(Schema.String),
    paused: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    scheduleStartMs: Schema.optional(Schema.String),
    tagFiringOption: Schema.optional(Schema.String),
    consentSettings: Schema.optional(TagConsentSetting),
    teardownTag: Schema.optional(Schema.Array(TeardownTag)),
    liveOnly: Schema.optional(Schema.Boolean),
    workspaceId: Schema.optional(Schema.String),
    priority: Schema.optional(Parameter),
    tagManagerUrl: Schema.optional(Schema.String),
    parentFolderId: Schema.optional(Schema.String),
    monitoringMetadata: Schema.optional(Parameter),
    firingTriggerId: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    monitoringMetadataTagNameKey: Schema.optional(Schema.String),
    blockingTriggerId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Tag" });

export interface Trigger {
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. */
  visiblePercentageMin?: Parameter;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. */
  verticalScrollPercentageList?: Parameter;
  /** Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. */
  maxTimerLengthSeconds?: Parameter;
  /** The trigger will only fire iff all Conditions are true. */
  filter?: ReadonlyArray<Condition>;
  /** A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. */
  visibilitySelector?: Parameter;
  /** Name of the GTM event that is fired. Only valid for Timer triggers. */
  eventName?: Parameter;
  /** The Trigger ID uniquely identifies the GTM Trigger. */
  triggerId?: string;
  /** Trigger display name. */
  name?: string;
  /** Used in the case of custom event, which is fired iff all Conditions are true. */
  customEventFilter?: ReadonlyArray<Condition>;
  /** How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. */
  waitForTagsTimeout?: Parameter;
  /** Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. */
  uniqueTriggerId?: Parameter;
  /** Parent folder id. */
  parentFolderId?: string;
  /** Used in the case of auto event tracking. */
  autoEventFilter?: ReadonlyArray<Condition>;
  /** Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. */
  interval?: Parameter;
  /** Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. */
  intervalSeconds?: Parameter;
  /** Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. */
  waitForTags?: Parameter;
  /** A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. */
  selector?: Parameter;
  /** A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. */
  visiblePercentageMax?: Parameter;
  /** User notes on how to apply this trigger in the container. */
  notes?: string;
  /** Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. */
  limit?: Parameter;
  /** GTM Account ID. */
  accountId?: string;
  /** Additional parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. */
  continuousTimeMinMilliseconds?: Parameter;
  /** GTM Trigger's API relative path. */
  path?: string;
  /** Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. */
  checkValidation?: Parameter;
  /** Defines the data layer event that causes this trigger. */
  type?:
    | "eventTypeUnspecified"
    | "pageview"
    | "domReady"
    | "windowLoaded"
    | "customEvent"
    | "triggerGroup"
    | "init"
    | "consentInit"
    | "serverPageview"
    | "always"
    | "firebaseAppException"
    | "firebaseAppUpdate"
    | "firebaseCampaign"
    | "firebaseFirstOpen"
    | "firebaseInAppPurchase"
    | "firebaseNotificationDismiss"
    | "firebaseNotificationForeground"
    | "firebaseNotificationOpen"
    | "firebaseNotificationReceive"
    | "firebaseOsUpdate"
    | "firebaseSessionStart"
    | "firebaseUserEngagement"
    | "formSubmission"
    | "click"
    | "linkClick"
    | "jsError"
    | "historyChange"
    | "timer"
    | "ampClick"
    | "ampTimer"
    | "ampScroll"
    | "ampVisibility"
    | "youTubeVideo"
    | "scrollDepth"
    | "elementVisibility"
    | (string & {});
  /** A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. */
  totalTimeMinMilliseconds?: Parameter;
  /** The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified. */
  fingerprint?: string;
  /** List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. */
  horizontalScrollPercentageList?: Parameter;
  /** GTM Container ID. */
  containerId?: string;
}

export const Trigger: Schema.Schema<Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspaceId: Schema.optional(Schema.String),
    visiblePercentageMin: Schema.optional(Parameter),
    tagManagerUrl: Schema.optional(Schema.String),
    verticalScrollPercentageList: Schema.optional(Parameter),
    maxTimerLengthSeconds: Schema.optional(Parameter),
    filter: Schema.optional(Schema.Array(Condition)),
    visibilitySelector: Schema.optional(Parameter),
    eventName: Schema.optional(Parameter),
    triggerId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    customEventFilter: Schema.optional(Schema.Array(Condition)),
    waitForTagsTimeout: Schema.optional(Parameter),
    uniqueTriggerId: Schema.optional(Parameter),
    parentFolderId: Schema.optional(Schema.String),
    autoEventFilter: Schema.optional(Schema.Array(Condition)),
    interval: Schema.optional(Parameter),
    intervalSeconds: Schema.optional(Parameter),
    waitForTags: Schema.optional(Parameter),
    selector: Schema.optional(Parameter),
    visiblePercentageMax: Schema.optional(Parameter),
    notes: Schema.optional(Schema.String),
    limit: Schema.optional(Parameter),
    accountId: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
    continuousTimeMinMilliseconds: Schema.optional(Parameter),
    path: Schema.optional(Schema.String),
    checkValidation: Schema.optional(Parameter),
    type: Schema.optional(Schema.String),
    totalTimeMinMilliseconds: Schema.optional(Parameter),
    fingerprint: Schema.optional(Schema.String),
    horizontalScrollPercentageList: Schema.optional(Parameter),
    containerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Trigger" });

export interface GalleryReference {
  /** The version of the community gallery template. */
  version?: string;
  /** ID for the gallery template that is generated once during first sync and travels with the template redirects. */
  galleryTemplateId?: string;
  /** The name of the owner for the community gallery template. */
  owner?: string;
  /** The name of the host for the community gallery template. */
  host?: string;
  /** The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery. */
  signature?: string;
  /** If a user has manually edited the community gallery template. */
  isModified?: boolean;
  /** The developer id of the community gallery template. This value is set whenever the template is created from the gallery. */
  templateDeveloperId?: string;
  /** The name of the repository for the community gallery template. */
  repository?: string;
}

export const GalleryReference: Schema.Schema<GalleryReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    galleryTemplateId: Schema.optional(Schema.String),
    owner: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
    isModified: Schema.optional(Schema.Boolean),
    templateDeveloperId: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
  }).annotate({ identifier: "GalleryReference" });

export interface CustomTemplate {
  /** GTM Account ID. */
  accountId?: string;
  /** The Custom Template ID uniquely identifies the GTM custom template. */
  templateId?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified. */
  fingerprint?: string;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** GTM Custom Template's API relative path. */
  path?: string;
  /** The custom template in text format. */
  templateData?: string;
  /** Custom Template display name. */
  name?: string;
  /** GTM Workspace ID. */
  workspaceId?: string;
  /** A reference to the Community Template Gallery entry. */
  galleryReference?: GalleryReference;
}

export const CustomTemplate: Schema.Schema<CustomTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    templateId: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    templateData: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
    galleryReference: Schema.optional(GalleryReference),
  }).annotate({ identifier: "CustomTemplate" });

export interface Entity {
  /** The built in variable being represented by the entity. */
  builtInVariable?: BuiltInVariable;
  /** The transformation being represented by the entity. */
  transformation?: Transformation;
  /** The folder being represented by the entity. */
  folder?: Folder;
  /** The zone being represented by the entity. */
  zone?: Zone;
  /** The variable being represented by the entity. */
  variable?: Variable;
  /** The gtag config being represented by the entity. */
  gtagConfig?: GtagConfig;
  /** The tag being represented by the entity. */
  tag?: Tag;
  /** The trigger being represented by the entity. */
  trigger?: Trigger;
  /** The custom template being represented by the entity. */
  customTemplate?: CustomTemplate;
  /** Represents how the entity has been changed in the workspace. */
  changeStatus?:
    | "changeStatusUnspecified"
    | "none"
    | "added"
    | "deleted"
    | "updated"
    | (string & {});
  /** The client being represented by the entity. */
  client?: Client;
}

export const Entity: Schema.Schema<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    builtInVariable: Schema.optional(BuiltInVariable),
    transformation: Schema.optional(Transformation),
    folder: Schema.optional(Folder),
    zone: Schema.optional(Zone),
    variable: Schema.optional(Variable),
    gtagConfig: Schema.optional(GtagConfig),
    tag: Schema.optional(Tag),
    trigger: Schema.optional(Trigger),
    customTemplate: Schema.optional(CustomTemplate),
    changeStatus: Schema.optional(Schema.String),
    client: Schema.optional(Client),
  }).annotate({ identifier: "Entity" });

export interface BulkUpdateWorkspaceResponse {
  /** The entities that were added or updated during the bulk-update. Does not include entities that were deleted or updated by the system. */
  changes?: ReadonlyArray<Entity>;
}

export const BulkUpdateWorkspaceResponse: Schema.Schema<BulkUpdateWorkspaceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(Entity)),
  }).annotate({ identifier: "BulkUpdateWorkspaceResponse" });

export interface ListClientsResponse {
  /** All GTM Clients of a GTM Container. */
  client?: ReadonlyArray<Client>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListClientsResponse: Schema.Schema<ListClientsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client: Schema.optional(Schema.Array(Client)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListClientsResponse" });

export interface ContainerAccess {
  /** GTM Container ID. */
  containerId?: string;
  /** List of Container permissions. */
  permission?:
    | "containerPermissionUnspecified"
    | "noAccess"
    | "read"
    | "edit"
    | "approve"
    | "publish"
    | (string & {});
}

export const ContainerAccess: Schema.Schema<ContainerAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.optional(Schema.String),
    permission: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerAccess" });

export interface AccountAccess {
  /** Whether the user has no access, user access, or admin access to an account. */
  permission?:
    | "accountPermissionUnspecified"
    | "noAccess"
    | "user"
    | "admin"
    | (string & {});
}

export const AccountAccess: Schema.Schema<AccountAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountAccess" });

export interface UserPermission {
  /** The Account ID uniquely identifies the GTM Account. */
  accountId?: string;
  /** GTM Container access permissions. */
  containerAccess?: ReadonlyArray<ContainerAccess>;
  /** User's email address. */
  emailAddress?: string;
  /** GTM Account access permissions. */
  accountAccess?: AccountAccess;
  /** GTM UserPermission's API relative path. */
  path?: string;
}

export const UserPermission: Schema.Schema<UserPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    containerAccess: Schema.optional(Schema.Array(ContainerAccess)),
    emailAddress: Schema.optional(Schema.String),
    accountAccess: Schema.optional(AccountAccess),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserPermission" });

export interface RevertTemplateResponse {
  /** Template as it appears in the latest container version since the last workspace synchronization operation. If no template is present, that means the template was deleted in the latest container version. */
  template?: CustomTemplate;
}

export const RevertTemplateResponse: Schema.Schema<RevertTemplateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    template: Schema.optional(CustomTemplate),
  }).annotate({ identifier: "RevertTemplateResponse" });

export interface ContainerFeatures {
  /** Whether this Container supports templates. */
  supportTemplates?: boolean;
  /** Whether this Container supports tags. */
  supportTags?: boolean;
  /** Whether this Container supports workspaces. */
  supportWorkspaces?: boolean;
  /** Whether this Container supports Container versions. */
  supportVersions?: boolean;
  /** Whether this Container supports zones. */
  supportZones?: boolean;
  /** Whether this Container supports built-in variables */
  supportBuiltInVariables?: boolean;
  /** Whether this Container supports triggers. */
  supportTriggers?: boolean;
  /** Whether this Container supports user permissions managed by GTM. */
  supportUserPermissions?: boolean;
  /** Whether this Container supports clients. */
  supportClients?: boolean;
  /** Whether this Container supports transformations. */
  supportTransformations?: boolean;
  /** Whether this Container supports folders. */
  supportFolders?: boolean;
  /** Whether this Container supports Google tag config. */
  supportGtagConfigs?: boolean;
  /** Whether this Container supports environments. */
  supportEnvironments?: boolean;
  /** Whether this Container supports variables. */
  supportVariables?: boolean;
}

export const ContainerFeatures: Schema.Schema<ContainerFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportTemplates: Schema.optional(Schema.Boolean),
    supportTags: Schema.optional(Schema.Boolean),
    supportWorkspaces: Schema.optional(Schema.Boolean),
    supportVersions: Schema.optional(Schema.Boolean),
    supportZones: Schema.optional(Schema.Boolean),
    supportBuiltInVariables: Schema.optional(Schema.Boolean),
    supportTriggers: Schema.optional(Schema.Boolean),
    supportUserPermissions: Schema.optional(Schema.Boolean),
    supportClients: Schema.optional(Schema.Boolean),
    supportTransformations: Schema.optional(Schema.Boolean),
    supportFolders: Schema.optional(Schema.Boolean),
    supportGtagConfigs: Schema.optional(Schema.Boolean),
    supportEnvironments: Schema.optional(Schema.Boolean),
    supportVariables: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ContainerFeatures" });

export interface Destination {
  /** GTM Container ID. */
  containerId?: string;
  /** Destination display name. */
  name?: string;
  /** The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified. */
  fingerprint?: string;
  /** Destination's API relative path. */
  path?: string;
  /** Destination ID. */
  destinationId?: string;
  /** The Destination link ID uniquely identifies the Destination. */
  destinationLinkId?: string;
  /** Auto generated link to the tag manager UI. */
  tagManagerUrl?: string;
  /** GTM Account ID. */
  accountId?: string;
}

export const Destination: Schema.Schema<Destination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    destinationId: Schema.optional(Schema.String),
    destinationLinkId: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Destination" });

export interface Environment {
  /** The environment authorization code. */
  authorizationCode?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. */
  fingerprint?: string;
  /** GTM Environment ID uniquely identifies the GTM Environment. */
  environmentId?: string;
  /** The type of this environment. */
  type?: "user" | "live" | "latest" | "workspace" | (string & {});
  /** GTM Environment's API relative path. */
  path?: string;
  /** The environment display name. Can be set or changed only on USER type environments. */
  name?: string;
  /** The environment description. Can be set or changed only on USER type environments. */
  description?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** Whether or not to enable debug by default for the environment. */
  enableDebug?: boolean;
  /** The last update time-stamp for the authorization code. */
  authorizationTimestamp?: string;
  /** Represents a link to a container version. */
  containerVersionId?: string;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** Default preview page url for the environment. */
  url?: string;
  /** Represents a link to a quick preview of a workspace. */
  workspaceId?: string;
}

export const Environment: Schema.Schema<Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizationCode: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    environmentId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    enableDebug: Schema.optional(Schema.Boolean),
    authorizationTimestamp: Schema.optional(Schema.String),
    containerVersionId: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    workspaceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Environment" });

export interface RevertClientResponse {
  /** Client as it appears in the latest container version since the last workspace synchronization operation. If no client is present, that means the client was deleted in the latest container version. */
  client?: Client;
}

export const RevertClientResponse: Schema.Schema<RevertClientResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client: Schema.optional(Client),
  }).annotate({ identifier: "RevertClientResponse" });

export interface RevertZoneResponse {
  /** Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is present, that means the zone was deleted in the latest container version. */
  zone?: Zone;
}

export const RevertZoneResponse: Schema.Schema<RevertZoneResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Zone),
  }).annotate({ identifier: "RevertZoneResponse" });

export interface ListTemplatesResponse {
  /** All GTM Custom Templates of a GTM Container. */
  template?: ReadonlyArray<CustomTemplate>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListTemplatesResponse: Schema.Schema<ListTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    template: Schema.optional(Schema.Array(CustomTemplate)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTemplatesResponse" });

export interface ListFoldersResponse {
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
  /** All GTM Folders of a GTM Container. */
  folder?: ReadonlyArray<Folder>;
}

export const ListFoldersResponse: Schema.Schema<ListFoldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    folder: Schema.optional(Schema.Array(Folder)),
  }).annotate({ identifier: "ListFoldersResponse" });

export interface ListEnvironmentsResponse {
  /** All Environments of a GTM Container. */
  environment?: ReadonlyArray<Environment>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListEnvironmentsResponse: Schema.Schema<ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.Array(Environment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEnvironmentsResponse" });

export interface RevertFolderResponse {
  /** Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version. */
  folder?: Folder;
}

export const RevertFolderResponse: Schema.Schema<RevertFolderResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
  }).annotate({ identifier: "RevertFolderResponse" });

export interface CreateContainerVersionRequestVersionOptions {
  /** The name of the container version to be created. */
  name?: string;
  /** The notes of the container version to be created. */
  notes?: string;
}

export const CreateContainerVersionRequestVersionOptions: Schema.Schema<CreateContainerVersionRequestVersionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateContainerVersionRequestVersionOptions" });

export interface RevertTriggerResponse {
  /** Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version. */
  trigger?: Trigger;
}

export const RevertTriggerResponse: Schema.Schema<RevertTriggerResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trigger: Schema.optional(Trigger),
  }).annotate({ identifier: "RevertTriggerResponse" });

export interface ListGtagConfigResponse {
  /** All Google tag configs in a Container. */
  gtagConfig?: ReadonlyArray<GtagConfig>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListGtagConfigResponse: Schema.Schema<ListGtagConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gtagConfig: Schema.optional(Schema.Array(GtagConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGtagConfigResponse" });

export interface SyncStatus {
  /** Synchornization operation detected a merge conflict. */
  mergeConflict?: boolean;
  /** An error occurred during the synchronization operation. */
  syncError?: boolean;
}

export const SyncStatus: Schema.Schema<SyncStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mergeConflict: Schema.optional(Schema.Boolean),
    syncError: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SyncStatus" });

export interface MergeConflict {
  /** The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status. */
  entityInWorkspace?: Entity;
  /** The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version. */
  entityInBaseVersion?: Entity;
}

export const MergeConflict: Schema.Schema<MergeConflict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityInWorkspace: Schema.optional(Entity),
    entityInBaseVersion: Schema.optional(Entity),
  }).annotate({ identifier: "MergeConflict" });

export interface SyncWorkspaceResponse {
  /** Indicates whether synchronization caused a merge conflict or sync error. */
  syncStatus?: SyncStatus;
  /** The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved. */
  mergeConflict?: ReadonlyArray<MergeConflict>;
}

export const SyncWorkspaceResponse: Schema.Schema<SyncWorkspaceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncStatus: Schema.optional(SyncStatus),
    mergeConflict: Schema.optional(Schema.Array(MergeConflict)),
  }).annotate({ identifier: "SyncWorkspaceResponse" });

export interface GetContainerSnippetResponse {
  /** Tagging snippet for a Container. */
  snippet?: string;
  /** Server container config param for manually provisioning a tagging server. */
  containerConfig?: string;
}

export const GetContainerSnippetResponse: Schema.Schema<GetContainerSnippetResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(Schema.String),
    containerConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetContainerSnippetResponse" });

export interface ListTagsResponse {
  /** All GTM Tags of a GTM Container. */
  tag?: ReadonlyArray<Tag>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListTagsResponse: Schema.Schema<ListTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.Array(Tag)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTagsResponse" });

export interface ListAccountsResponse {
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
  /** List of GTM Accounts that a user has access to. */
  account?: ReadonlyArray<Account>;
}

export const ListAccountsResponse: Schema.Schema<ListAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    account: Schema.optional(Schema.Array(Account)),
  }).annotate({ identifier: "ListAccountsResponse" });

export interface ListZonesResponse {
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
  /** All GTM Zones of a GTM Container. */
  zone?: ReadonlyArray<Zone>;
}

export const ListZonesResponse: Schema.Schema<ListZonesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.Array(Zone)),
  }).annotate({ identifier: "ListZonesResponse" });

export interface ListUserPermissionsResponse {
  /** All GTM UserPermissions of a GTM Account. */
  userPermission?: ReadonlyArray<UserPermission>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListUserPermissionsResponse: Schema.Schema<ListUserPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userPermission: Schema.optional(Schema.Array(UserPermission)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUserPermissionsResponse" });

export interface Container {
  /** List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. */
  taggingServerUrls?: ReadonlyArray<string>;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** List of Usage Contexts for the Container. Valid values include: web, android, or ios. */
  usageContext?: ReadonlyArray<
    | "usageContextUnspecified"
    | "web"
    | "android"
    | "ios"
    | "androidSdk5"
    | "iosSdk5"
    | "amp"
    | "server"
    | (string & {})
  >;
  /** Container Notes. */
  notes?: string;
  /** Container Public ID. */
  publicId?: string;
  /** GTM Container's API relative path. */
  path?: string;
  /** Container display name. */
  name?: string;
  /** The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. */
  fingerprint?: string;
  /** The Container ID uniquely identifies the GTM Container. */
  containerId?: string;
  /** List of domain names associated with the Container. */
  domainName?: ReadonlyArray<string>;
  /** All Tag IDs that refer to this Container. */
  tagIds?: ReadonlyArray<string>;
  /** Read-only Container feature set. */
  features?: ContainerFeatures;
}

export const Container: Schema.Schema<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taggingServerUrls: Schema.optional(Schema.Array(Schema.String)),
    tagManagerUrl: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    usageContext: Schema.optional(Schema.Array(Schema.String)),
    notes: Schema.optional(Schema.String),
    publicId: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    domainName: Schema.optional(Schema.Array(Schema.String)),
    tagIds: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(ContainerFeatures),
  }).annotate({ identifier: "Container" });

export interface GetWorkspaceStatusResponse {
  /** The merge conflict after sync. */
  mergeConflict?: ReadonlyArray<MergeConflict>;
  /** Entities that have been changed in the workspace. */
  workspaceChange?: ReadonlyArray<Entity>;
}

export const GetWorkspaceStatusResponse: Schema.Schema<GetWorkspaceStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mergeConflict: Schema.optional(Schema.Array(MergeConflict)),
    workspaceChange: Schema.optional(Schema.Array(Entity)),
  }).annotate({ identifier: "GetWorkspaceStatusResponse" });

export interface CreateBuiltInVariableResponse {
  /** List of created built-in variables. */
  builtInVariable?: ReadonlyArray<BuiltInVariable>;
}

export const CreateBuiltInVariableResponse: Schema.Schema<CreateBuiltInVariableResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    builtInVariable: Schema.optional(Schema.Array(BuiltInVariable)),
  }).annotate({ identifier: "CreateBuiltInVariableResponse" });

export interface ContainerVersion {
  /** GTM Container ID. */
  containerId?: string;
  /** The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. */
  fingerprint?: string;
  /** The tags in the container that this version was taken from. */
  tag?: ReadonlyArray<Tag>;
  /** A value of true indicates this container version has been deleted. */
  deleted?: boolean;
  /** The triggers in the container that this version was taken from. */
  trigger?: ReadonlyArray<Trigger>;
  /** Container version display name. */
  name?: string;
  /** Container version description. */
  description?: string;
  /** GTM Container Version's API relative path. */
  path?: string;
  /** The variables in the container that this version was taken from. */
  variable?: ReadonlyArray<Variable>;
  /** The built-in variables in the container that this version was taken from. */
  builtInVariable?: ReadonlyArray<BuiltInVariable>;
  /** The clients in the container that this version was taken from. */
  client?: ReadonlyArray<Client>;
  /** GTM Account ID. */
  accountId?: string;
  /** The custom templates in the container that this version was taken from. */
  customTemplate?: ReadonlyArray<CustomTemplate>;
  /** The transformations in the container that this version was taken from. */
  transformation?: ReadonlyArray<Transformation>;
  /** The folders in the container that this version was taken from. */
  folder?: ReadonlyArray<Folder>;
  /** The zones in the container that this version was taken from. */
  zone?: ReadonlyArray<Zone>;
  /** The container that this version was taken from. */
  container?: Container;
  /** The Google tag configs in the container that this version was taken from. */
  gtagConfig?: ReadonlyArray<GtagConfig>;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** The Container Version ID uniquely identifies the GTM Container Version. */
  containerVersionId?: string;
}

export const ContainerVersion: Schema.Schema<ContainerVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.Array(Tag)),
    deleted: Schema.optional(Schema.Boolean),
    trigger: Schema.optional(Schema.Array(Trigger)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    variable: Schema.optional(Schema.Array(Variable)),
    builtInVariable: Schema.optional(Schema.Array(BuiltInVariable)),
    client: Schema.optional(Schema.Array(Client)),
    accountId: Schema.optional(Schema.String),
    customTemplate: Schema.optional(Schema.Array(CustomTemplate)),
    transformation: Schema.optional(Schema.Array(Transformation)),
    folder: Schema.optional(Schema.Array(Folder)),
    zone: Schema.optional(Schema.Array(Zone)),
    container: Schema.optional(Container),
    gtagConfig: Schema.optional(Schema.Array(GtagConfig)),
    tagManagerUrl: Schema.optional(Schema.String),
    containerVersionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerVersion" });

export interface QuickPreviewResponse {
  /** Whether quick previewing failed when syncing the workspace to the latest container version. */
  syncStatus?: SyncStatus;
  /** Were there compiler errors or not. */
  compilerError?: boolean;
  /** The quick previewed container version. */
  containerVersion?: ContainerVersion;
}

export const QuickPreviewResponse: Schema.Schema<QuickPreviewResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncStatus: Schema.optional(SyncStatus),
    compilerError: Schema.optional(Schema.Boolean),
    containerVersion: Schema.optional(ContainerVersion),
  }).annotate({ identifier: "QuickPreviewResponse" });

export interface ListEnabledBuiltInVariablesResponse {
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
  /** All GTM BuiltInVariables of a GTM container. */
  builtInVariable?: ReadonlyArray<BuiltInVariable>;
}

export const ListEnabledBuiltInVariablesResponse: Schema.Schema<ListEnabledBuiltInVariablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    builtInVariable: Schema.optional(Schema.Array(BuiltInVariable)),
  }).annotate({ identifier: "ListEnabledBuiltInVariablesResponse" });

export interface RevertVariableResponse {
  /** Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version. */
  variable?: Variable;
}

export const RevertVariableResponse: Schema.Schema<RevertVariableResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variable: Schema.optional(Variable),
  }).annotate({ identifier: "RevertVariableResponse" });

export interface ProposedChange {
  /** The list of workspace changes to be applied. */
  changes?: ReadonlyArray<Entity>;
}

export const ProposedChange: Schema.Schema<ProposedChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changes: Schema.optional(Schema.Array(Entity)),
  }).annotate({ identifier: "ProposedChange" });

export interface ContainerVersionHeader {
  /** Number of triggers in the container version. */
  numTriggers?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** Number of clients in the container version. */
  numClients?: string;
  /** The Container Version ID uniquely identifies the GTM Container Version. */
  containerVersionId?: string;
  /** Number of zones in the container version. */
  numZones?: string;
  /** Number of transformations in the container version. */
  numTransformations?: string;
  /** Number of tags in the container version. */
  numTags?: string;
  /** A value of true indicates this container version has been deleted. */
  deleted?: boolean;
  /** Number of custom templates in the container version. */
  numCustomTemplates?: string;
  /** Number of variables in the container version. */
  numVariables?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** GTM Container Version's API relative path. */
  path?: string;
  /** Number of Google tag configs in the container version. */
  numGtagConfigs?: string;
  /** Container version display name. */
  name?: string;
}

export const ContainerVersionHeader: Schema.Schema<ContainerVersionHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numTriggers: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    numClients: Schema.optional(Schema.String),
    containerVersionId: Schema.optional(Schema.String),
    numZones: Schema.optional(Schema.String),
    numTransformations: Schema.optional(Schema.String),
    numTags: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    numCustomTemplates: Schema.optional(Schema.String),
    numVariables: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    numGtagConfigs: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerVersionHeader" });

export interface ListTransformationsResponse {
  /** All GTM Transformations of a GTM Container. */
  transformation?: ReadonlyArray<Transformation>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListTransformationsResponse: Schema.Schema<ListTransformationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformation: Schema.optional(Schema.Array(Transformation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTransformationsResponse" });

export interface ListContainerVersionsResponse {
  /** All container version headers of a GTM Container. */
  containerVersionHeader?: ReadonlyArray<ContainerVersionHeader>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListContainerVersionsResponse: Schema.Schema<ListContainerVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersionHeader: Schema.optional(
      Schema.Array(ContainerVersionHeader),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListContainerVersionsResponse" });

export interface ListTriggersResponse {
  /** All GTM Triggers of a GTM Container. */
  trigger?: ReadonlyArray<Trigger>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListTriggersResponse: Schema.Schema<ListTriggersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trigger: Schema.optional(Schema.Array(Trigger)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTriggersResponse" });

export interface PublishContainerVersionResponse {
  /** Compiler errors or not. */
  compilerError?: boolean;
  /** The container version created. */
  containerVersion?: ContainerVersion;
}

export const PublishContainerVersionResponse: Schema.Schema<PublishContainerVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compilerError: Schema.optional(Schema.Boolean),
    containerVersion: Schema.optional(ContainerVersion),
  }).annotate({ identifier: "PublishContainerVersionResponse" });

export interface ListDestinationsResponse {
  /** All Destinations linked to a GTM Container. */
  destination?: ReadonlyArray<Destination>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListDestinationsResponse: Schema.Schema<ListDestinationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.Array(Destination)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDestinationsResponse" });

export interface FolderEntities {
  /** The list of variables inside the folder. */
  variable?: ReadonlyArray<Variable>;
  /** The list of triggers inside the folder. */
  trigger?: ReadonlyArray<Trigger>;
  /** The list of tags inside the folder. */
  tag?: ReadonlyArray<Tag>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const FolderEntities: Schema.Schema<FolderEntities> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variable: Schema.optional(Schema.Array(Variable)),
    trigger: Schema.optional(Schema.Array(Trigger)),
    tag: Schema.optional(Schema.Array(Tag)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FolderEntities" });

export interface RevertTagResponse {
  /** Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version. */
  tag?: Tag;
}

export const RevertTagResponse: Schema.Schema<RevertTagResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Tag),
  }).annotate({ identifier: "RevertTagResponse" });

export interface RevertTransformationResponse {
  /** Transformation as it appears in the latest container version since the last workspace synchronization operation. If no transformation is present, that means the transformation was deleted in the latest container version. */
  transformation?: Transformation;
}

export const RevertTransformationResponse: Schema.Schema<RevertTransformationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformation: Schema.optional(Transformation),
  }).annotate({ identifier: "RevertTransformationResponse" });

export interface CreateContainerVersionResponse {
  /** The container version created. */
  containerVersion?: ContainerVersion;
  /** Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview. */
  newWorkspacePath?: string;
  /** Compiler errors or not. */
  compilerError?: boolean;
  /** Whether version creation failed when syncing the workspace to the latest container version. */
  syncStatus?: SyncStatus;
}

export const CreateContainerVersionResponse: Schema.Schema<CreateContainerVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersion: Schema.optional(ContainerVersion),
    newWorkspacePath: Schema.optional(Schema.String),
    compilerError: Schema.optional(Schema.Boolean),
    syncStatus: Schema.optional(SyncStatus),
  }).annotate({ identifier: "CreateContainerVersionResponse" });

export interface Workspace {
  /** The Workspace ID uniquely identifies the GTM Workspace. */
  workspaceId?: string;
  /** Workspace description. */
  description?: string;
  /** The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified. */
  fingerprint?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** Workspace display name. */
  name?: string;
  /** GTM Workspace's API relative path. */
  path?: string;
  /** Auto generated link to the tag manager UI */
  tagManagerUrl?: string;
  /** GTM Account ID. */
  accountId?: string;
}

export const Workspace: Schema.Schema<Workspace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspaceId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    tagManagerUrl: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Workspace" });

export interface ListWorkspacesResponse {
  /** All Workspaces of a GTM Container. */
  workspace?: ReadonlyArray<Workspace>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListWorkspacesResponse: Schema.Schema<ListWorkspacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.optional(Schema.Array(Workspace)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListWorkspacesResponse" });

export interface ListContainersResponse {
  /** All Containers of a GTM Account. */
  container?: ReadonlyArray<Container>;
  /** Continuation token for fetching the next page of results. */
  nextPageToken?: string;
}

export const ListContainersResponse: Schema.Schema<ListContainersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    container: Schema.optional(Schema.Array(Container)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListContainersResponse" });

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

export interface ListAccountsRequest {
  /** Also retrieve accounts associated with Google Tag when true. */
  includeGoogleTags?: boolean;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeGoogleTags: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeGoogleTags"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "tagmanager/v2/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse_Op = ListAccountsResponse;
export const ListAccountsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountsResponse;

export type ListAccountsError = DefaultErrors | NotFound | Forbidden;

/** Lists all GTM Accounts that a user has access to. */
export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse_Op,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsRequest {
  /** GTM Account's API relative path. */
  path: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.String.pipe(T.HttpPath("path")),
}).pipe(
  T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
  svc,
) as unknown as Schema.Schema<GetAccountsRequest>;

export type GetAccountsResponse = Account;
export const GetAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type GetAccountsError = DefaultErrors | NotFound | Forbidden;

/** Gets a GTM Account. */
export const getAccounts: API.OperationMethod<
  GetAccountsRequest,
  GetAccountsResponse,
  GetAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsRequest,
  output: GetAccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsRequest {
  /** GTM Account's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the account in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Account;
}

export const UpdateAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.String.pipe(T.HttpPath("path")),
  fingerprint: Schema.optional(Schema.String).pipe(T.HttpQuery("fingerprint")),
  body: Schema.optional(Account).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<UpdateAccountsRequest>;

export type UpdateAccountsResponse = Account;
export const UpdateAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type UpdateAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Account. */
export const updateAccounts: API.OperationMethod<
  UpdateAccountsRequest,
  UpdateAccountsResponse,
  UpdateAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsRequest,
  output: UpdateAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsUser_permissionsRequest {
  /** GTM UserPermission's API relative path. */
  path: string;
  /** Request body */
  body?: UserPermission;
}

export const UpdateAccountsUser_permissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(UserPermission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsUser_permissionsRequest>;

export type UpdateAccountsUser_permissionsResponse = UserPermission;
export const UpdateAccountsUser_permissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserPermission;

export type UpdateAccountsUser_permissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a user's Account & Container access. */
export const updateAccountsUser_permissions: API.OperationMethod<
  UpdateAccountsUser_permissionsRequest,
  UpdateAccountsUser_permissionsResponse,
  UpdateAccountsUser_permissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsUser_permissionsRequest,
  output: UpdateAccountsUser_permissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsUser_permissionsRequest {
  /** GTM Account's API relative path. */
  parent: string;
  /** Request body */
  body?: UserPermission;
}

export const CreateAccountsUser_permissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UserPermission).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/user_permissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsUser_permissionsRequest>;

export type CreateAccountsUser_permissionsResponse = UserPermission;
export const CreateAccountsUser_permissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserPermission;

export type CreateAccountsUser_permissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a user's Account & Container access. */
export const createAccountsUser_permissions: API.OperationMethod<
  CreateAccountsUser_permissionsRequest,
  CreateAccountsUser_permissionsResponse,
  CreateAccountsUser_permissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsUser_permissionsRequest,
  output: CreateAccountsUser_permissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsUser_permissionsRequest {
  /** GTM Account's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsUser_permissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/user_permissions" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsUser_permissionsRequest>;

export type ListAccountsUser_permissionsResponse = ListUserPermissionsResponse;
export const ListAccountsUser_permissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUserPermissionsResponse;

export type ListAccountsUser_permissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all users that have access to the account along with Account and Container user access granted to each of them. */
export const listAccountsUser_permissions: API.PaginatedOperationMethod<
  ListAccountsUser_permissionsRequest,
  ListAccountsUser_permissionsResponse,
  ListAccountsUser_permissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsUser_permissionsRequest,
  output: ListAccountsUser_permissionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsUser_permissionsRequest {
  /** GTM UserPermission's API relative path. */
  path: string;
}

export const GetAccountsUser_permissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsUser_permissionsRequest>;

export type GetAccountsUser_permissionsResponse = UserPermission;
export const GetAccountsUser_permissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserPermission;

export type GetAccountsUser_permissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a user's Account & Container access. */
export const getAccountsUser_permissions: API.OperationMethod<
  GetAccountsUser_permissionsRequest,
  GetAccountsUser_permissionsResponse,
  GetAccountsUser_permissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsUser_permissionsRequest,
  output: GetAccountsUser_permissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsUser_permissionsRequest {
  /** GTM UserPermission's API relative path. */
  path: string;
}

export const DeleteAccountsUser_permissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsUser_permissionsRequest>;

export interface DeleteAccountsUser_permissionsResponse {}
export const DeleteAccountsUser_permissionsResponse: Schema.Schema<DeleteAccountsUser_permissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsUser_permissionsResponse>;

export type DeleteAccountsUser_permissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a user from the account, revoking access to it and all of its containers. */
export const deleteAccountsUser_permissions: API.OperationMethod<
  DeleteAccountsUser_permissionsRequest,
  DeleteAccountsUser_permissionsResponse,
  DeleteAccountsUser_permissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsUser_permissionsRequest,
  output: DeleteAccountsUser_permissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersRequest {
  /** GTM Container's API relative path. */
  path: string;
}

export const GetAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersRequest>;

export type GetAccountsContainersResponse = Container;
export const GetAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Container;

export type GetAccountsContainersError = DefaultErrors | NotFound | Forbidden;

/** Gets a Container. */
export const getAccountsContainers: API.OperationMethod<
  GetAccountsContainersRequest,
  GetAccountsContainersResponse,
  GetAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersRequest,
  output: GetAccountsContainersResponse,
  errors: [NotFound, Forbidden],
}));

export interface Move_tag_idAccountsContainersRequest {
  /** Whether or not to copy tag settings from this tag to the new tag. */
  copySettings?: boolean;
  /** Whether or not to copy users from this tag to the new tag. */
  copyUsers?: boolean;
  /** Tag ID to be removed from the current Container. */
  tagId?: string;
  /** The name for the newly created tag. */
  tagName?: string;
  /** Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail. */
  allowUserPermissionFeatureUpdate?: boolean;
  /** Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail. */
  copyTermsOfService?: boolean;
  /** GTM Container's API relative path. */
  path: string;
}

export const Move_tag_idAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    copySettings: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("copySettings"),
    ),
    copyUsers: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("copyUsers")),
    tagId: Schema.optional(Schema.String).pipe(T.HttpQuery("tagId")),
    tagName: Schema.optional(Schema.String).pipe(T.HttpQuery("tagName")),
    allowUserPermissionFeatureUpdate: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowUserPermissionFeatureUpdate"),
    ),
    copyTermsOfService: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("copyTermsOfService"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:move_tag_id",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Move_tag_idAccountsContainersRequest>;

export type Move_tag_idAccountsContainersResponse = Container;
export const Move_tag_idAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Container;

export type Move_tag_idAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Move Tag ID out of a Container. */
export const move_tag_idAccountsContainers: API.OperationMethod<
  Move_tag_idAccountsContainersRequest,
  Move_tag_idAccountsContainersResponse,
  Move_tag_idAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Move_tag_idAccountsContainersRequest,
  output: Move_tag_idAccountsContainersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersRequest {
  /** GTM Account's API relative path. */
  parent: string;
  /** Request body */
  body?: Container;
}

export const CreateAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Container).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/containers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersRequest>;

export type CreateAccountsContainersResponse = Container;
export const CreateAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Container;

export type CreateAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Container. */
export const createAccountsContainers: API.OperationMethod<
  CreateAccountsContainersRequest,
  CreateAccountsContainersResponse,
  CreateAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersRequest,
  output: CreateAccountsContainersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersRequest {
  /** GTM Account's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/containers" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersRequest>;

export type ListAccountsContainersResponse = ListContainersResponse;
export const ListAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListContainersResponse;

export type ListAccountsContainersError = DefaultErrors | NotFound | Forbidden;

/** Lists all Containers that belongs to a GTM Account. */
export const listAccountsContainers: API.PaginatedOperationMethod<
  ListAccountsContainersRequest,
  ListAccountsContainersResponse,
  ListAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersRequest,
  output: ListAccountsContainersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteAccountsContainersRequest {
  /** GTM Container's API relative path. */
  path: string;
}

export const DeleteAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersRequest>;

export interface DeleteAccountsContainersResponse {}
export const DeleteAccountsContainersResponse: Schema.Schema<DeleteAccountsContainersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersResponse>;

export type DeleteAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Container. */
export const deleteAccountsContainers: API.OperationMethod<
  DeleteAccountsContainersRequest,
  DeleteAccountsContainersResponse,
  DeleteAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersRequest,
  output: DeleteAccountsContainersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CombineAccountsContainersRequest {
  /** ID of container that will be merged into the current container. */
  containerId?: string;
  /** GTM Container's API relative path. */
  path: string;
  /** Specify the source of config setting after combine */
  settingSource?:
    | "settingSourceUnspecified"
    | "current"
    | "other"
    | (string & {});
  /** Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail. */
  allowUserPermissionFeatureUpdate?: boolean;
}

export const CombineAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("containerId"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    settingSource: Schema.optional(Schema.String).pipe(
      T.HttpQuery("settingSource"),
    ),
    allowUserPermissionFeatureUpdate: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowUserPermissionFeatureUpdate"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:combine",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CombineAccountsContainersRequest>;

export type CombineAccountsContainersResponse = Container;
export const CombineAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Container;

export type CombineAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Combines Containers. */
export const combineAccountsContainers: API.OperationMethod<
  CombineAccountsContainersRequest,
  CombineAccountsContainersResponse,
  CombineAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CombineAccountsContainersRequest,
  output: CombineAccountsContainersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SnippetAccountsContainersRequest {
  /** Container snippet's API relative path. */
  path: string;
}

export const SnippetAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}:snippet" }),
    svc,
  ) as unknown as Schema.Schema<SnippetAccountsContainersRequest>;

export type SnippetAccountsContainersResponse = GetContainerSnippetResponse;
export const SnippetAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetContainerSnippetResponse;

export type SnippetAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the tagging snippet for a Container. */
export const snippetAccountsContainers: API.OperationMethod<
  SnippetAccountsContainersRequest,
  SnippetAccountsContainersResponse,
  SnippetAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SnippetAccountsContainersRequest,
  output: SnippetAccountsContainersResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupAccountsContainersRequest {
  /** Tag ID for a GTM Container, e.g. GTM-123456789. Only one of destination_id or tag_id should be set. */
  tagId?: string;
  /** Destination ID linked to a GTM Container, e.g. AW-123456789. Only one of destination_id or tag_id should be set. */
  destinationId?: string;
}

export const LookupAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagId: Schema.optional(Schema.String).pipe(T.HttpQuery("tagId")),
    destinationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("destinationId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/accounts/containers:lookup" }),
    svc,
  ) as unknown as Schema.Schema<LookupAccountsContainersRequest>;

export type LookupAccountsContainersResponse = Container;
export const LookupAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Container;

export type LookupAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Looks up a Container by destination ID or tag ID. */
export const lookupAccountsContainers: API.OperationMethod<
  LookupAccountsContainersRequest,
  LookupAccountsContainersResponse,
  LookupAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupAccountsContainersRequest,
  output: LookupAccountsContainersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersRequest {
  /** GTM Container's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the container in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Container;
}

export const UpdateAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Container).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersRequest>;

export type UpdateAccountsContainersResponse = Container;
export const UpdateAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Container;

export type UpdateAccountsContainersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Container. */
export const updateAccountsContainers: API.OperationMethod<
  UpdateAccountsContainersRequest,
  UpdateAccountsContainersResponse,
  UpdateAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersRequest,
  output: UpdateAccountsContainersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LiveAccountsContainersVersionsRequest {
  /** GTM Container's API relative path. */
  parent: string;
}

export const LiveAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/versions:live" }),
    svc,
  ) as unknown as Schema.Schema<LiveAccountsContainersVersionsRequest>;

export type LiveAccountsContainersVersionsResponse = ContainerVersion;
export const LiveAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersion;

export type LiveAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the live (i.e. published) container version */
export const liveAccountsContainersVersions: API.OperationMethod<
  LiveAccountsContainersVersionsRequest,
  LiveAccountsContainersVersionsResponse,
  LiveAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LiveAccountsContainersVersionsRequest,
  output: LiveAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersVersionsRequest {
  /** GTM ContainerVersion's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the container version in storage. */
  fingerprint?: string;
  /** Request body */
  body?: ContainerVersion;
}

export const UpdateAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(ContainerVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersVersionsRequest>;

export type UpdateAccountsContainersVersionsResponse = ContainerVersion;
export const UpdateAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersion;

export type UpdateAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Container Version. */
export const updateAccountsContainersVersions: API.OperationMethod<
  UpdateAccountsContainersVersionsRequest,
  UpdateAccountsContainersVersionsResponse,
  UpdateAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersVersionsRequest,
  output: UpdateAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UndeleteAccountsContainersVersionsRequest {
  /** GTM ContainerVersion's API relative path. */
  path: string;
}

export const UndeleteAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:undelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UndeleteAccountsContainersVersionsRequest>;

export type UndeleteAccountsContainersVersionsResponse = ContainerVersion;
export const UndeleteAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersion;

export type UndeleteAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Undeletes a Container Version. */
export const undeleteAccountsContainersVersions: API.OperationMethod<
  UndeleteAccountsContainersVersionsRequest,
  UndeleteAccountsContainersVersionsResponse,
  UndeleteAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UndeleteAccountsContainersVersionsRequest,
  output: UndeleteAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PublishAccountsContainersVersionsRequest {
  /** When provided, this fingerprint must match the fingerprint of the container version in storage. */
  fingerprint?: string;
  /** GTM ContainerVersion's API relative path. */
  path: string;
}

export const PublishAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:publish",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishAccountsContainersVersionsRequest>;

export type PublishAccountsContainersVersionsResponse =
  PublishContainerVersionResponse;
export const PublishAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PublishContainerVersionResponse;

export type PublishAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Publishes a Container Version. */
export const publishAccountsContainersVersions: API.OperationMethod<
  PublishAccountsContainersVersionsRequest,
  PublishAccountsContainersVersionsResponse,
  PublishAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishAccountsContainersVersionsRequest,
  output: PublishAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersVersionsRequest {
  /** GTM ContainerVersion's API relative path. */
  path: string;
  /** The GTM ContainerVersion ID. Specify published to retrieve the currently published version. */
  containerVersionId?: string;
}

export const GetAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    containerVersionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("containerVersionId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersVersionsRequest>;

export type GetAccountsContainersVersionsResponse = ContainerVersion;
export const GetAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersion;

export type GetAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Container Version. */
export const getAccountsContainersVersions: API.OperationMethod<
  GetAccountsContainersVersionsRequest,
  GetAccountsContainersVersionsResponse,
  GetAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersVersionsRequest,
  output: GetAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersVersionsRequest {
  /** GTM ContainerVersion's API relative path. */
  path: string;
}

export const DeleteAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersVersionsRequest>;

export interface DeleteAccountsContainersVersionsResponse {}
export const DeleteAccountsContainersVersionsResponse: Schema.Schema<DeleteAccountsContainersVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersVersionsResponse>;

export type DeleteAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Container Version. */
export const deleteAccountsContainersVersions: API.OperationMethod<
  DeleteAccountsContainersVersionsRequest,
  DeleteAccountsContainersVersionsResponse,
  DeleteAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersVersionsRequest,
  output: DeleteAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Set_latestAccountsContainersVersionsRequest {
  /** GTM ContainerVersion's API relative path. */
  path: string;
}

export const Set_latestAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:set_latest",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Set_latestAccountsContainersVersionsRequest>;

export type Set_latestAccountsContainersVersionsResponse = ContainerVersion;
export const Set_latestAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersion;

export type Set_latestAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the latest version used for synchronization of workspaces when detecting conflicts and errors. */
export const set_latestAccountsContainersVersions: API.OperationMethod<
  Set_latestAccountsContainersVersionsRequest,
  Set_latestAccountsContainersVersionsResponse,
  Set_latestAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Set_latestAccountsContainersVersionsRequest,
  output: Set_latestAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersVersion_headersRequest {
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
  /** Also retrieve deleted (archived) versions when true. */
  includeDeleted?: boolean;
  /** GTM Container's API relative path. */
  parent: string;
}

export const ListAccountsContainersVersion_headersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    includeDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/version_headers" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersVersion_headersRequest>;

export type ListAccountsContainersVersion_headersResponse =
  ListContainerVersionsResponse;
export const ListAccountsContainersVersion_headersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListContainerVersionsResponse;

export type ListAccountsContainersVersion_headersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Container Versions of a GTM Container. */
export const listAccountsContainersVersion_headers: API.PaginatedOperationMethod<
  ListAccountsContainersVersion_headersRequest,
  ListAccountsContainersVersion_headersResponse,
  ListAccountsContainersVersion_headersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersVersion_headersRequest,
  output: ListAccountsContainersVersion_headersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface LatestAccountsContainersVersion_headersRequest {
  /** GTM Container's API relative path. */
  parent: string;
}

export const LatestAccountsContainersVersion_headersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v2/{+parent}/version_headers:latest",
    }),
    svc,
  ) as unknown as Schema.Schema<LatestAccountsContainersVersion_headersRequest>;

export type LatestAccountsContainersVersion_headersResponse =
  ContainerVersionHeader;
export const LatestAccountsContainersVersion_headersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersionHeader;

export type LatestAccountsContainersVersion_headersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest container version header */
export const latestAccountsContainersVersion_headers: API.OperationMethod<
  LatestAccountsContainersVersion_headersRequest,
  LatestAccountsContainersVersion_headersResponse,
  LatestAccountsContainersVersion_headersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LatestAccountsContainersVersion_headersRequest,
  output: LatestAccountsContainersVersion_headersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesRequest>;

export type GetAccountsContainersWorkspacesResponse = Workspace;
export const GetAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workspace;

export type GetAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Workspace. */
export const getAccountsContainersWorkspaces: API.OperationMethod<
  GetAccountsContainersWorkspacesRequest,
  GetAccountsContainersWorkspacesResponse,
  GetAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesRequest,
  output: GetAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetStatusAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
}

export const GetStatusAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}/status" }),
    svc,
  ) as unknown as Schema.Schema<GetStatusAccountsContainersWorkspacesRequest>;

export type GetStatusAccountsContainersWorkspacesResponse =
  GetWorkspaceStatusResponse;
export const GetStatusAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetWorkspaceStatusResponse;

export type GetStatusAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Finds conflicting and modified entities in the workspace. */
export const getStatusAccountsContainersWorkspaces: API.OperationMethod<
  GetStatusAccountsContainersWorkspacesRequest,
  GetStatusAccountsContainersWorkspacesResponse,
  GetStatusAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStatusAccountsContainersWorkspacesRequest,
  output: GetStatusAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface Bulk_updateAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
  /** Request body */
  body?: ProposedChange;
}

export const Bulk_updateAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(ProposedChange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}/bulk_update",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Bulk_updateAccountsContainersWorkspacesRequest>;

export type Bulk_updateAccountsContainersWorkspacesResponse =
  BulkUpdateWorkspaceResponse;
export const Bulk_updateAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BulkUpdateWorkspaceResponse;

export type Bulk_updateAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies multiple entity changes to a workspace in one call. When creating new entities, their entity IDs must be unique and in correct format. That is, they must start with "new_" and followed by number, e.g. "new_1", "new_2". Example body snippet to create myNewTag under myNewFolder is: ``` "changes": [ { "folder": { "folderId": "new_1", "name": "myNewFolder", ... }, "changeStatus": "added" }, { "tag": { "tagId": "new_2", "name": "myNewTag", "parentFolderId": "new_1", ... }, "changeStatus": "added" } ] ``` */
export const bulk_updateAccountsContainersWorkspaces: API.OperationMethod<
  Bulk_updateAccountsContainersWorkspacesRequest,
  Bulk_updateAccountsContainersWorkspacesResponse,
  Bulk_updateAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Bulk_updateAccountsContainersWorkspacesRequest,
  output: Bulk_updateAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Resolve_conflictAccountsContainersWorkspacesRequest {
  /** When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict. */
  fingerprint?: string;
  /** GTM Workspace's API relative path. */
  path: string;
  /** Request body */
  body?: Entity;
}

export const Resolve_conflictAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Entity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:resolve_conflict",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Resolve_conflictAccountsContainersWorkspacesRequest>;

export interface Resolve_conflictAccountsContainersWorkspacesResponse {}
export const Resolve_conflictAccountsContainersWorkspacesResponse: Schema.Schema<Resolve_conflictAccountsContainersWorkspacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<Resolve_conflictAccountsContainersWorkspacesResponse>;

export type Resolve_conflictAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request. */
export const resolve_conflictAccountsContainersWorkspaces: API.OperationMethod<
  Resolve_conflictAccountsContainersWorkspacesRequest,
  Resolve_conflictAccountsContainersWorkspacesResponse,
  Resolve_conflictAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Resolve_conflictAccountsContainersWorkspacesRequest,
  output: Resolve_conflictAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Create_versionAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
  /** Request body */
  body?: CreateContainerVersionRequestVersionOptions;
}

export const Create_versionAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(CreateContainerVersionRequestVersionOptions).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:create_version",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Create_versionAccountsContainersWorkspacesRequest>;

export type Create_versionAccountsContainersWorkspacesResponse =
  CreateContainerVersionResponse;
export const Create_versionAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateContainerVersionResponse;

export type Create_versionAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version. */
export const create_versionAccountsContainersWorkspaces: API.OperationMethod<
  Create_versionAccountsContainersWorkspacesRequest,
  Create_versionAccountsContainersWorkspacesResponse,
  Create_versionAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Create_versionAccountsContainersWorkspacesRequest,
  output: Create_versionAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesRequest>;

export interface DeleteAccountsContainersWorkspacesResponse {}
export const DeleteAccountsContainersWorkspacesResponse: Schema.Schema<DeleteAccountsContainersWorkspacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesResponse>;

export type DeleteAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Workspace. */
export const deleteAccountsContainersWorkspaces: API.OperationMethod<
  DeleteAccountsContainersWorkspacesRequest,
  DeleteAccountsContainersWorkspacesResponse,
  DeleteAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesRequest,
  output: DeleteAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesRequest {
  /** GTM parent Container's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/workspaces" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesRequest>;

export type ListAccountsContainersWorkspacesResponse = ListWorkspacesResponse;
export const ListAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkspacesResponse;

export type ListAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Workspaces that belong to a GTM Container. */
export const listAccountsContainersWorkspaces: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesRequest,
  ListAccountsContainersWorkspacesResponse,
  ListAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesRequest,
  output: ListAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SyncAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
}

export const SyncAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:sync",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SyncAccountsContainersWorkspacesRequest>;

export type SyncAccountsContainersWorkspacesResponse = SyncWorkspaceResponse;
export const SyncAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SyncWorkspaceResponse;

export type SyncAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities. */
export const syncAccountsContainersWorkspaces: API.OperationMethod<
  SyncAccountsContainersWorkspacesRequest,
  SyncAccountsContainersWorkspacesResponse,
  SyncAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SyncAccountsContainersWorkspacesRequest,
  output: SyncAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesRequest {
  /** GTM parent Container's API relative path. */
  parent: string;
  /** Request body */
  body?: Workspace;
}

export const CreateAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Workspace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/workspaces",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesRequest>;

export type CreateAccountsContainersWorkspacesResponse = Workspace;
export const CreateAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workspace;

export type CreateAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Workspace. */
export const createAccountsContainersWorkspaces: API.OperationMethod<
  CreateAccountsContainersWorkspacesRequest,
  CreateAccountsContainersWorkspacesResponse,
  CreateAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesRequest,
  output: CreateAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Quick_previewAccountsContainersWorkspacesRequest {
  /** GTM Workspace's API relative path. */
  path: string;
}

export const Quick_previewAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:quick_preview",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Quick_previewAccountsContainersWorkspacesRequest>;

export type Quick_previewAccountsContainersWorkspacesResponse =
  QuickPreviewResponse;
export const Quick_previewAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ QuickPreviewResponse;

export type Quick_previewAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Quick previews a workspace by creating a fake container version from all entities in the provided workspace. */
export const quick_previewAccountsContainersWorkspaces: API.OperationMethod<
  Quick_previewAccountsContainersWorkspacesRequest,
  Quick_previewAccountsContainersWorkspacesResponse,
  Quick_previewAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Quick_previewAccountsContainersWorkspacesRequest,
  output: Quick_previewAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesRequest {
  /** When provided, this fingerprint must match the fingerprint of the workspace in storage. */
  fingerprint?: string;
  /** GTM Workspace's API relative path. */
  path: string;
  /** Request body */
  body?: Workspace;
}

export const UpdateAccountsContainersWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Workspace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesRequest>;

export type UpdateAccountsContainersWorkspacesResponse = Workspace;
export const UpdateAccountsContainersWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workspace;

export type UpdateAccountsContainersWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Workspace. */
export const updateAccountsContainersWorkspaces: API.OperationMethod<
  UpdateAccountsContainersWorkspacesRequest,
  UpdateAccountsContainersWorkspacesResponse,
  UpdateAccountsContainersWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesRequest,
  output: UpdateAccountsContainersWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesBuilt_in_variablesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** The types of built-in variables to enable. */
  type?:
    | "builtInVariableTypeUnspecified"
    | "pageUrl"
    | "pageHostname"
    | "pagePath"
    | "referrer"
    | "event"
    | "clickElement"
    | "clickClasses"
    | "clickId"
    | "clickTarget"
    | "clickUrl"
    | "clickText"
    | "firstPartyServingUrl"
    | "formElement"
    | "formClasses"
    | "formId"
    | "formTarget"
    | "formUrl"
    | "formText"
    | "errorMessage"
    | "errorUrl"
    | "errorLine"
    | "newHistoryUrl"
    | "oldHistoryUrl"
    | "newHistoryFragment"
    | "oldHistoryFragment"
    | "newHistoryState"
    | "oldHistoryState"
    | "historySource"
    | "containerVersion"
    | "debugMode"
    | "randomNumber"
    | "containerId"
    | "appId"
    | "appName"
    | "appVersionCode"
    | "appVersionName"
    | "language"
    | "osVersion"
    | "platform"
    | "sdkVersion"
    | "deviceName"
    | "resolution"
    | "advertiserId"
    | "advertisingTrackingEnabled"
    | "htmlId"
    | "environmentName"
    | "ampBrowserLanguage"
    | "ampCanonicalPath"
    | "ampCanonicalUrl"
    | "ampCanonicalHost"
    | "ampReferrer"
    | "ampTitle"
    | "ampClientId"
    | "ampClientTimezone"
    | "ampClientTimestamp"
    | "ampClientScreenWidth"
    | "ampClientScreenHeight"
    | "ampClientScrollX"
    | "ampClientScrollY"
    | "ampClientMaxScrollX"
    | "ampClientMaxScrollY"
    | "ampTotalEngagedTime"
    | "ampPageViewId"
    | "ampPageLoadTime"
    | "ampPageDownloadTime"
    | "ampGtmEvent"
    | "eventName"
    | "firebaseEventParameterCampaign"
    | "firebaseEventParameterCampaignAclid"
    | "firebaseEventParameterCampaignAnid"
    | "firebaseEventParameterCampaignClickTimestamp"
    | "firebaseEventParameterCampaignContent"
    | "firebaseEventParameterCampaignCp1"
    | "firebaseEventParameterCampaignGclid"
    | "firebaseEventParameterCampaignSource"
    | "firebaseEventParameterCampaignTerm"
    | "firebaseEventParameterCurrency"
    | "firebaseEventParameterDynamicLinkAcceptTime"
    | "firebaseEventParameterDynamicLinkLinkid"
    | "firebaseEventParameterNotificationMessageDeviceTime"
    | "firebaseEventParameterNotificationMessageId"
    | "firebaseEventParameterNotificationMessageName"
    | "firebaseEventParameterNotificationMessageTime"
    | "firebaseEventParameterNotificationTopic"
    | "firebaseEventParameterPreviousAppVersion"
    | "firebaseEventParameterPreviousOsVersion"
    | "firebaseEventParameterPrice"
    | "firebaseEventParameterProductId"
    | "firebaseEventParameterQuantity"
    | "firebaseEventParameterValue"
    | "videoProvider"
    | "videoUrl"
    | "videoTitle"
    | "videoDuration"
    | "videoPercent"
    | "videoVisible"
    | "videoStatus"
    | "videoCurrentTime"
    | "scrollDepthThreshold"
    | "scrollDepthUnits"
    | "scrollDepthDirection"
    | "elementVisibilityRatio"
    | "elementVisibilityTime"
    | "elementVisibilityFirstTime"
    | "elementVisibilityRecentTime"
    | "requestPath"
    | "requestMethod"
    | "clientName"
    | "queryString"
    | "serverPageLocationUrl"
    | "serverPageLocationPath"
    | "serverPageLocationHostname"
    | "visitorRegion"
    | "analyticsClientId"
    | "analyticsSessionId"
    | "analyticsSessionNumber"
    | (string & {})[];
}

export const CreateAccountsContainersWorkspacesBuilt_in_variablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    type: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("type"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/built_in_variables",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesBuilt_in_variablesRequest>;

export type CreateAccountsContainersWorkspacesBuilt_in_variablesResponse =
  CreateBuiltInVariableResponse;
export const CreateAccountsContainersWorkspacesBuilt_in_variablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateBuiltInVariableResponse;

export type CreateAccountsContainersWorkspacesBuilt_in_variablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates one or more GTM Built-In Variables. */
export const createAccountsContainersWorkspacesBuilt_in_variables: API.OperationMethod<
  CreateAccountsContainersWorkspacesBuilt_in_variablesRequest,
  CreateAccountsContainersWorkspacesBuilt_in_variablesResponse,
  CreateAccountsContainersWorkspacesBuilt_in_variablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesBuilt_in_variablesRequest,
  output: CreateAccountsContainersWorkspacesBuilt_in_variablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsContainersWorkspacesBuilt_in_variablesRequest {
  /** The types of built-in variables to delete. */
  type?:
    | "builtInVariableTypeUnspecified"
    | "pageUrl"
    | "pageHostname"
    | "pagePath"
    | "referrer"
    | "event"
    | "clickElement"
    | "clickClasses"
    | "clickId"
    | "clickTarget"
    | "clickUrl"
    | "clickText"
    | "firstPartyServingUrl"
    | "formElement"
    | "formClasses"
    | "formId"
    | "formTarget"
    | "formUrl"
    | "formText"
    | "errorMessage"
    | "errorUrl"
    | "errorLine"
    | "newHistoryUrl"
    | "oldHistoryUrl"
    | "newHistoryFragment"
    | "oldHistoryFragment"
    | "newHistoryState"
    | "oldHistoryState"
    | "historySource"
    | "containerVersion"
    | "debugMode"
    | "randomNumber"
    | "containerId"
    | "appId"
    | "appName"
    | "appVersionCode"
    | "appVersionName"
    | "language"
    | "osVersion"
    | "platform"
    | "sdkVersion"
    | "deviceName"
    | "resolution"
    | "advertiserId"
    | "advertisingTrackingEnabled"
    | "htmlId"
    | "environmentName"
    | "ampBrowserLanguage"
    | "ampCanonicalPath"
    | "ampCanonicalUrl"
    | "ampCanonicalHost"
    | "ampReferrer"
    | "ampTitle"
    | "ampClientId"
    | "ampClientTimezone"
    | "ampClientTimestamp"
    | "ampClientScreenWidth"
    | "ampClientScreenHeight"
    | "ampClientScrollX"
    | "ampClientScrollY"
    | "ampClientMaxScrollX"
    | "ampClientMaxScrollY"
    | "ampTotalEngagedTime"
    | "ampPageViewId"
    | "ampPageLoadTime"
    | "ampPageDownloadTime"
    | "ampGtmEvent"
    | "eventName"
    | "firebaseEventParameterCampaign"
    | "firebaseEventParameterCampaignAclid"
    | "firebaseEventParameterCampaignAnid"
    | "firebaseEventParameterCampaignClickTimestamp"
    | "firebaseEventParameterCampaignContent"
    | "firebaseEventParameterCampaignCp1"
    | "firebaseEventParameterCampaignGclid"
    | "firebaseEventParameterCampaignSource"
    | "firebaseEventParameterCampaignTerm"
    | "firebaseEventParameterCurrency"
    | "firebaseEventParameterDynamicLinkAcceptTime"
    | "firebaseEventParameterDynamicLinkLinkid"
    | "firebaseEventParameterNotificationMessageDeviceTime"
    | "firebaseEventParameterNotificationMessageId"
    | "firebaseEventParameterNotificationMessageName"
    | "firebaseEventParameterNotificationMessageTime"
    | "firebaseEventParameterNotificationTopic"
    | "firebaseEventParameterPreviousAppVersion"
    | "firebaseEventParameterPreviousOsVersion"
    | "firebaseEventParameterPrice"
    | "firebaseEventParameterProductId"
    | "firebaseEventParameterQuantity"
    | "firebaseEventParameterValue"
    | "videoProvider"
    | "videoUrl"
    | "videoTitle"
    | "videoDuration"
    | "videoPercent"
    | "videoVisible"
    | "videoStatus"
    | "videoCurrentTime"
    | "scrollDepthThreshold"
    | "scrollDepthUnits"
    | "scrollDepthDirection"
    | "elementVisibilityRatio"
    | "elementVisibilityTime"
    | "elementVisibilityFirstTime"
    | "elementVisibilityRecentTime"
    | "requestPath"
    | "requestMethod"
    | "clientName"
    | "queryString"
    | "serverPageLocationUrl"
    | "serverPageLocationPath"
    | "serverPageLocationHostname"
    | "visitorRegion"
    | "analyticsClientId"
    | "analyticsSessionId"
    | "analyticsSessionNumber"
    | (string & {})[];
  /** GTM BuiltInVariable's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesBuilt_in_variablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("type"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesBuilt_in_variablesRequest>;

export interface DeleteAccountsContainersWorkspacesBuilt_in_variablesResponse {}
export const DeleteAccountsContainersWorkspacesBuilt_in_variablesResponse: Schema.Schema<DeleteAccountsContainersWorkspacesBuilt_in_variablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesBuilt_in_variablesResponse>;

export type DeleteAccountsContainersWorkspacesBuilt_in_variablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes one or more GTM Built-In Variables. */
export const deleteAccountsContainersWorkspacesBuilt_in_variables: API.OperationMethod<
  DeleteAccountsContainersWorkspacesBuilt_in_variablesRequest,
  DeleteAccountsContainersWorkspacesBuilt_in_variablesResponse,
  DeleteAccountsContainersWorkspacesBuilt_in_variablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesBuilt_in_variablesRequest,
  output: DeleteAccountsContainersWorkspacesBuilt_in_variablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesBuilt_in_variablesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesBuilt_in_variablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v2/{+parent}/built_in_variables",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesBuilt_in_variablesRequest>;

export type ListAccountsContainersWorkspacesBuilt_in_variablesResponse =
  ListEnabledBuiltInVariablesResponse;
export const ListAccountsContainersWorkspacesBuilt_in_variablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEnabledBuiltInVariablesResponse;

export type ListAccountsContainersWorkspacesBuilt_in_variablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the enabled Built-In Variables of a GTM Container. */
export const listAccountsContainersWorkspacesBuilt_in_variables: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesBuilt_in_variablesRequest,
  ListAccountsContainersWorkspacesBuilt_in_variablesResponse,
  ListAccountsContainersWorkspacesBuilt_in_variablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesBuilt_in_variablesRequest,
  output: ListAccountsContainersWorkspacesBuilt_in_variablesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RevertAccountsContainersWorkspacesBuilt_in_variablesRequest {
  /** The type of built-in variable to revert. */
  type?:
    | "builtInVariableTypeUnspecified"
    | "pageUrl"
    | "pageHostname"
    | "pagePath"
    | "referrer"
    | "event"
    | "clickElement"
    | "clickClasses"
    | "clickId"
    | "clickTarget"
    | "clickUrl"
    | "clickText"
    | "firstPartyServingUrl"
    | "formElement"
    | "formClasses"
    | "formId"
    | "formTarget"
    | "formUrl"
    | "formText"
    | "errorMessage"
    | "errorUrl"
    | "errorLine"
    | "newHistoryUrl"
    | "oldHistoryUrl"
    | "newHistoryFragment"
    | "oldHistoryFragment"
    | "newHistoryState"
    | "oldHistoryState"
    | "historySource"
    | "containerVersion"
    | "debugMode"
    | "randomNumber"
    | "containerId"
    | "appId"
    | "appName"
    | "appVersionCode"
    | "appVersionName"
    | "language"
    | "osVersion"
    | "platform"
    | "sdkVersion"
    | "deviceName"
    | "resolution"
    | "advertiserId"
    | "advertisingTrackingEnabled"
    | "htmlId"
    | "environmentName"
    | "ampBrowserLanguage"
    | "ampCanonicalPath"
    | "ampCanonicalUrl"
    | "ampCanonicalHost"
    | "ampReferrer"
    | "ampTitle"
    | "ampClientId"
    | "ampClientTimezone"
    | "ampClientTimestamp"
    | "ampClientScreenWidth"
    | "ampClientScreenHeight"
    | "ampClientScrollX"
    | "ampClientScrollY"
    | "ampClientMaxScrollX"
    | "ampClientMaxScrollY"
    | "ampTotalEngagedTime"
    | "ampPageViewId"
    | "ampPageLoadTime"
    | "ampPageDownloadTime"
    | "ampGtmEvent"
    | "eventName"
    | "firebaseEventParameterCampaign"
    | "firebaseEventParameterCampaignAclid"
    | "firebaseEventParameterCampaignAnid"
    | "firebaseEventParameterCampaignClickTimestamp"
    | "firebaseEventParameterCampaignContent"
    | "firebaseEventParameterCampaignCp1"
    | "firebaseEventParameterCampaignGclid"
    | "firebaseEventParameterCampaignSource"
    | "firebaseEventParameterCampaignTerm"
    | "firebaseEventParameterCurrency"
    | "firebaseEventParameterDynamicLinkAcceptTime"
    | "firebaseEventParameterDynamicLinkLinkid"
    | "firebaseEventParameterNotificationMessageDeviceTime"
    | "firebaseEventParameterNotificationMessageId"
    | "firebaseEventParameterNotificationMessageName"
    | "firebaseEventParameterNotificationMessageTime"
    | "firebaseEventParameterNotificationTopic"
    | "firebaseEventParameterPreviousAppVersion"
    | "firebaseEventParameterPreviousOsVersion"
    | "firebaseEventParameterPrice"
    | "firebaseEventParameterProductId"
    | "firebaseEventParameterQuantity"
    | "firebaseEventParameterValue"
    | "videoProvider"
    | "videoUrl"
    | "videoTitle"
    | "videoDuration"
    | "videoPercent"
    | "videoVisible"
    | "videoStatus"
    | "videoCurrentTime"
    | "scrollDepthThreshold"
    | "scrollDepthUnits"
    | "scrollDepthDirection"
    | "elementVisibilityRatio"
    | "elementVisibilityTime"
    | "elementVisibilityFirstTime"
    | "elementVisibilityRecentTime"
    | "requestPath"
    | "requestMethod"
    | "clientName"
    | "queryString"
    | "serverPageLocationUrl"
    | "serverPageLocationPath"
    | "serverPageLocationHostname"
    | "visitorRegion"
    | "analyticsClientId"
    | "analyticsSessionId"
    | "analyticsSessionNumber"
    | (string & {});
  /** GTM BuiltInVariable's API relative path. */
  path: string;
}

export const RevertAccountsContainersWorkspacesBuilt_in_variablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}/built_in_variables:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesBuilt_in_variablesRequest>;

export type RevertAccountsContainersWorkspacesBuilt_in_variablesResponse =
  RevertBuiltInVariableResponse;
export const RevertAccountsContainersWorkspacesBuilt_in_variablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertBuiltInVariableResponse;

export type RevertAccountsContainersWorkspacesBuilt_in_variablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Built-In Variables in a GTM Workspace. */
export const revertAccountsContainersWorkspacesBuilt_in_variables: API.OperationMethod<
  RevertAccountsContainersWorkspacesBuilt_in_variablesRequest,
  RevertAccountsContainersWorkspacesBuilt_in_variablesResponse,
  RevertAccountsContainersWorkspacesBuilt_in_variablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesBuilt_in_variablesRequest,
  output: RevertAccountsContainersWorkspacesBuilt_in_variablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesTriggersRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Trigger;
}

export const CreateAccountsContainersWorkspacesTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Trigger).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/triggers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesTriggersRequest>;

export type CreateAccountsContainersWorkspacesTriggersResponse = Trigger;
export const CreateAccountsContainersWorkspacesTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type CreateAccountsContainersWorkspacesTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Trigger. */
export const createAccountsContainersWorkspacesTriggers: API.OperationMethod<
  CreateAccountsContainersWorkspacesTriggersRequest,
  CreateAccountsContainersWorkspacesTriggersResponse,
  CreateAccountsContainersWorkspacesTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesTriggersRequest,
  output: CreateAccountsContainersWorkspacesTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesTriggersRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/triggers" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesTriggersRequest>;

export type ListAccountsContainersWorkspacesTriggersResponse =
  ListTriggersResponse;
export const ListAccountsContainersWorkspacesTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTriggersResponse;

export type ListAccountsContainersWorkspacesTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Triggers of a Container. */
export const listAccountsContainersWorkspacesTriggers: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesTriggersRequest,
  ListAccountsContainersWorkspacesTriggersResponse,
  ListAccountsContainersWorkspacesTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesTriggersRequest,
  output: ListAccountsContainersWorkspacesTriggersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesTriggersRequest {
  /** GTM Trigger's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesTriggersRequest>;

export type GetAccountsContainersWorkspacesTriggersResponse = Trigger;
export const GetAccountsContainersWorkspacesTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type GetAccountsContainersWorkspacesTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Trigger. */
export const getAccountsContainersWorkspacesTriggers: API.OperationMethod<
  GetAccountsContainersWorkspacesTriggersRequest,
  GetAccountsContainersWorkspacesTriggersResponse,
  GetAccountsContainersWorkspacesTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesTriggersRequest,
  output: GetAccountsContainersWorkspacesTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesTriggersRequest {
  /** GTM Trigger's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesTriggersRequest>;

export interface DeleteAccountsContainersWorkspacesTriggersResponse {}
export const DeleteAccountsContainersWorkspacesTriggersResponse: Schema.Schema<DeleteAccountsContainersWorkspacesTriggersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesTriggersResponse>;

export type DeleteAccountsContainersWorkspacesTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Trigger. */
export const deleteAccountsContainersWorkspacesTriggers: API.OperationMethod<
  DeleteAccountsContainersWorkspacesTriggersRequest,
  DeleteAccountsContainersWorkspacesTriggersResponse,
  DeleteAccountsContainersWorkspacesTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesTriggersRequest,
  output: DeleteAccountsContainersWorkspacesTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesTriggersRequest {
  /** When provided, this fingerprint must match the fingerprint of the trigger in storage. */
  fingerprint?: string;
  /** GTM Trigger's API relative path. */
  path: string;
}

export const RevertAccountsContainersWorkspacesTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesTriggersRequest>;

export type RevertAccountsContainersWorkspacesTriggersResponse =
  RevertTriggerResponse;
export const RevertAccountsContainersWorkspacesTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertTriggerResponse;

export type RevertAccountsContainersWorkspacesTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Trigger in a GTM Workspace. */
export const revertAccountsContainersWorkspacesTriggers: API.OperationMethod<
  RevertAccountsContainersWorkspacesTriggersRequest,
  RevertAccountsContainersWorkspacesTriggersResponse,
  RevertAccountsContainersWorkspacesTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesTriggersRequest,
  output: RevertAccountsContainersWorkspacesTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesTriggersRequest {
  /** When provided, this fingerprint must match the fingerprint of the trigger in storage. */
  fingerprint?: string;
  /** GTM Trigger's API relative path. */
  path: string;
  /** Request body */
  body?: Trigger;
}

export const UpdateAccountsContainersWorkspacesTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Trigger).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesTriggersRequest>;

export type UpdateAccountsContainersWorkspacesTriggersResponse = Trigger;
export const UpdateAccountsContainersWorkspacesTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type UpdateAccountsContainersWorkspacesTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Trigger. */
export const updateAccountsContainersWorkspacesTriggers: API.OperationMethod<
  UpdateAccountsContainersWorkspacesTriggersRequest,
  UpdateAccountsContainersWorkspacesTriggersResponse,
  UpdateAccountsContainersWorkspacesTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesTriggersRequest,
  output: UpdateAccountsContainersWorkspacesTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesClientsRequest {
  /** When provided, this fingerprint must match the fingerprint of the client in storage. */
  fingerprint?: string;
  /** GTM Client's API relative path. */
  path: string;
  /** Request body */
  body?: Client;
}

export const UpdateAccountsContainersWorkspacesClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Client).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesClientsRequest>;

export type UpdateAccountsContainersWorkspacesClientsResponse = Client;
export const UpdateAccountsContainersWorkspacesClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Client;

export type UpdateAccountsContainersWorkspacesClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Client. */
export const updateAccountsContainersWorkspacesClients: API.OperationMethod<
  UpdateAccountsContainersWorkspacesClientsRequest,
  UpdateAccountsContainersWorkspacesClientsResponse,
  UpdateAccountsContainersWorkspacesClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesClientsRequest,
  output: UpdateAccountsContainersWorkspacesClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesClientsRequest {
  /** GTM Client's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the client in storage. */
  fingerprint?: string;
}

export const RevertAccountsContainersWorkspacesClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesClientsRequest>;

export type RevertAccountsContainersWorkspacesClientsResponse =
  RevertClientResponse;
export const RevertAccountsContainersWorkspacesClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertClientResponse;

export type RevertAccountsContainersWorkspacesClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Client in a GTM Workspace. */
export const revertAccountsContainersWorkspacesClients: API.OperationMethod<
  RevertAccountsContainersWorkspacesClientsRequest,
  RevertAccountsContainersWorkspacesClientsResponse,
  RevertAccountsContainersWorkspacesClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesClientsRequest,
  output: RevertAccountsContainersWorkspacesClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesClientsRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/clients" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesClientsRequest>;

export type ListAccountsContainersWorkspacesClientsResponse =
  ListClientsResponse;
export const ListAccountsContainersWorkspacesClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClientsResponse;

export type ListAccountsContainersWorkspacesClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Clients of a GTM container workspace. */
export const listAccountsContainersWorkspacesClients: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesClientsRequest,
  ListAccountsContainersWorkspacesClientsResponse,
  ListAccountsContainersWorkspacesClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesClientsRequest,
  output: ListAccountsContainersWorkspacesClientsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesClientsRequest {
  /** GTM Client's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesClientsRequest>;

export type GetAccountsContainersWorkspacesClientsResponse = Client;
export const GetAccountsContainersWorkspacesClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Client;

export type GetAccountsContainersWorkspacesClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Client. */
export const getAccountsContainersWorkspacesClients: API.OperationMethod<
  GetAccountsContainersWorkspacesClientsRequest,
  GetAccountsContainersWorkspacesClientsResponse,
  GetAccountsContainersWorkspacesClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesClientsRequest,
  output: GetAccountsContainersWorkspacesClientsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesClientsRequest {
  /** GTM Client's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesClientsRequest>;

export interface DeleteAccountsContainersWorkspacesClientsResponse {}
export const DeleteAccountsContainersWorkspacesClientsResponse: Schema.Schema<DeleteAccountsContainersWorkspacesClientsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesClientsResponse>;

export type DeleteAccountsContainersWorkspacesClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Client. */
export const deleteAccountsContainersWorkspacesClients: API.OperationMethod<
  DeleteAccountsContainersWorkspacesClientsRequest,
  DeleteAccountsContainersWorkspacesClientsResponse,
  DeleteAccountsContainersWorkspacesClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesClientsRequest,
  output: DeleteAccountsContainersWorkspacesClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesClientsRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Client;
}

export const CreateAccountsContainersWorkspacesClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Client).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/clients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesClientsRequest>;

export type CreateAccountsContainersWorkspacesClientsResponse = Client;
export const CreateAccountsContainersWorkspacesClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Client;

export type CreateAccountsContainersWorkspacesClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Client. */
export const createAccountsContainersWorkspacesClients: API.OperationMethod<
  CreateAccountsContainersWorkspacesClientsRequest,
  CreateAccountsContainersWorkspacesClientsResponse,
  CreateAccountsContainersWorkspacesClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesClientsRequest,
  output: CreateAccountsContainersWorkspacesClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesTagsRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/tags" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesTagsRequest>;

export type ListAccountsContainersWorkspacesTagsResponse = ListTagsResponse;
export const ListAccountsContainersWorkspacesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTagsResponse;

export type ListAccountsContainersWorkspacesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Tags of a Container. */
export const listAccountsContainersWorkspacesTags: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesTagsRequest,
  ListAccountsContainersWorkspacesTagsResponse,
  ListAccountsContainersWorkspacesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesTagsRequest,
  output: ListAccountsContainersWorkspacesTagsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesTagsRequest {
  /** GTM Tag's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesTagsRequest>;

export type GetAccountsContainersWorkspacesTagsResponse = Tag;
export const GetAccountsContainersWorkspacesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type GetAccountsContainersWorkspacesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Tag. */
export const getAccountsContainersWorkspacesTags: API.OperationMethod<
  GetAccountsContainersWorkspacesTagsRequest,
  GetAccountsContainersWorkspacesTagsResponse,
  GetAccountsContainersWorkspacesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesTagsRequest,
  output: GetAccountsContainersWorkspacesTagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesTagsRequest {
  /** GTM Tag's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesTagsRequest>;

export interface DeleteAccountsContainersWorkspacesTagsResponse {}
export const DeleteAccountsContainersWorkspacesTagsResponse: Schema.Schema<DeleteAccountsContainersWorkspacesTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesTagsResponse>;

export type DeleteAccountsContainersWorkspacesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Tag. */
export const deleteAccountsContainersWorkspacesTags: API.OperationMethod<
  DeleteAccountsContainersWorkspacesTagsRequest,
  DeleteAccountsContainersWorkspacesTagsResponse,
  DeleteAccountsContainersWorkspacesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesTagsRequest,
  output: DeleteAccountsContainersWorkspacesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesTagsRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Tag;
}

export const CreateAccountsContainersWorkspacesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/tags",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesTagsRequest>;

export type CreateAccountsContainersWorkspacesTagsResponse = Tag;
export const CreateAccountsContainersWorkspacesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type CreateAccountsContainersWorkspacesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Tag. */
export const createAccountsContainersWorkspacesTags: API.OperationMethod<
  CreateAccountsContainersWorkspacesTagsRequest,
  CreateAccountsContainersWorkspacesTagsResponse,
  CreateAccountsContainersWorkspacesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesTagsRequest,
  output: CreateAccountsContainersWorkspacesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesTagsRequest {
  /** When provided, this fingerprint must match the fingerprint of the tag in storage. */
  fingerprint?: string;
  /** GTM Tag's API relative path. */
  path: string;
  /** Request body */
  body?: Tag;
}

export const UpdateAccountsContainersWorkspacesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesTagsRequest>;

export type UpdateAccountsContainersWorkspacesTagsResponse = Tag;
export const UpdateAccountsContainersWorkspacesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type UpdateAccountsContainersWorkspacesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Tag. */
export const updateAccountsContainersWorkspacesTags: API.OperationMethod<
  UpdateAccountsContainersWorkspacesTagsRequest,
  UpdateAccountsContainersWorkspacesTagsResponse,
  UpdateAccountsContainersWorkspacesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesTagsRequest,
  output: UpdateAccountsContainersWorkspacesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesTagsRequest {
  /** GTM Tag's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of thetag in storage. */
  fingerprint?: string;
}

export const RevertAccountsContainersWorkspacesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesTagsRequest>;

export type RevertAccountsContainersWorkspacesTagsResponse = RevertTagResponse;
export const RevertAccountsContainersWorkspacesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertTagResponse;

export type RevertAccountsContainersWorkspacesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Tag in a GTM Workspace. */
export const revertAccountsContainersWorkspacesTags: API.OperationMethod<
  RevertAccountsContainersWorkspacesTagsRequest,
  RevertAccountsContainersWorkspacesTagsResponse,
  RevertAccountsContainersWorkspacesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesTagsRequest,
  output: RevertAccountsContainersWorkspacesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesVariablesRequest {
  /** When provided, this fingerprint must match the fingerprint of the variable in storage. */
  fingerprint?: string;
  /** GTM Variable's API relative path. */
  path: string;
}

export const RevertAccountsContainersWorkspacesVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesVariablesRequest>;

export type RevertAccountsContainersWorkspacesVariablesResponse =
  RevertVariableResponse;
export const RevertAccountsContainersWorkspacesVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertVariableResponse;

export type RevertAccountsContainersWorkspacesVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Variable in a GTM Workspace. */
export const revertAccountsContainersWorkspacesVariables: API.OperationMethod<
  RevertAccountsContainersWorkspacesVariablesRequest,
  RevertAccountsContainersWorkspacesVariablesResponse,
  RevertAccountsContainersWorkspacesVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesVariablesRequest,
  output: RevertAccountsContainersWorkspacesVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesVariablesRequest {
  /** GTM Variable's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the variable in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Variable;
}

export const UpdateAccountsContainersWorkspacesVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Variable).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesVariablesRequest>;

export type UpdateAccountsContainersWorkspacesVariablesResponse = Variable;
export const UpdateAccountsContainersWorkspacesVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Variable;

export type UpdateAccountsContainersWorkspacesVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Variable. */
export const updateAccountsContainersWorkspacesVariables: API.OperationMethod<
  UpdateAccountsContainersWorkspacesVariablesRequest,
  UpdateAccountsContainersWorkspacesVariablesResponse,
  UpdateAccountsContainersWorkspacesVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesVariablesRequest,
  output: UpdateAccountsContainersWorkspacesVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesVariablesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Variable;
}

export const CreateAccountsContainersWorkspacesVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Variable).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/variables",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesVariablesRequest>;

export type CreateAccountsContainersWorkspacesVariablesResponse = Variable;
export const CreateAccountsContainersWorkspacesVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Variable;

export type CreateAccountsContainersWorkspacesVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Variable. */
export const createAccountsContainersWorkspacesVariables: API.OperationMethod<
  CreateAccountsContainersWorkspacesVariablesRequest,
  CreateAccountsContainersWorkspacesVariablesResponse,
  CreateAccountsContainersWorkspacesVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesVariablesRequest,
  output: CreateAccountsContainersWorkspacesVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesVariablesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/variables" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesVariablesRequest>;

export type ListAccountsContainersWorkspacesVariablesResponse =
  ListVariablesResponse;
export const ListAccountsContainersWorkspacesVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVariablesResponse;

export type ListAccountsContainersWorkspacesVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Variables of a Container. */
export const listAccountsContainersWorkspacesVariables: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesVariablesRequest,
  ListAccountsContainersWorkspacesVariablesResponse,
  ListAccountsContainersWorkspacesVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesVariablesRequest,
  output: ListAccountsContainersWorkspacesVariablesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesVariablesRequest {
  /** GTM Variable's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesVariablesRequest>;

export type GetAccountsContainersWorkspacesVariablesResponse = Variable;
export const GetAccountsContainersWorkspacesVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Variable;

export type GetAccountsContainersWorkspacesVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Variable. */
export const getAccountsContainersWorkspacesVariables: API.OperationMethod<
  GetAccountsContainersWorkspacesVariablesRequest,
  GetAccountsContainersWorkspacesVariablesResponse,
  GetAccountsContainersWorkspacesVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesVariablesRequest,
  output: GetAccountsContainersWorkspacesVariablesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesVariablesRequest {
  /** GTM Variable's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesVariablesRequest>;

export interface DeleteAccountsContainersWorkspacesVariablesResponse {}
export const DeleteAccountsContainersWorkspacesVariablesResponse: Schema.Schema<DeleteAccountsContainersWorkspacesVariablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesVariablesResponse>;

export type DeleteAccountsContainersWorkspacesVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Variable. */
export const deleteAccountsContainersWorkspacesVariables: API.OperationMethod<
  DeleteAccountsContainersWorkspacesVariablesRequest,
  DeleteAccountsContainersWorkspacesVariablesResponse,
  DeleteAccountsContainersWorkspacesVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesVariablesRequest,
  output: DeleteAccountsContainersWorkspacesVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesTemplatesRequest {
  /** When provided, this fingerprint must match the fingerprint of the template in storage. */
  fingerprint?: string;
  /** GTM Custom Template's API relative path. */
  path: string;
}

export const RevertAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesTemplatesRequest>;

export type RevertAccountsContainersWorkspacesTemplatesResponse =
  RevertTemplateResponse;
export const RevertAccountsContainersWorkspacesTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertTemplateResponse;

export type RevertAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Template in a GTM Workspace. */
export const revertAccountsContainersWorkspacesTemplates: API.OperationMethod<
  RevertAccountsContainersWorkspacesTemplatesRequest,
  RevertAccountsContainersWorkspacesTemplatesResponse,
  RevertAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesTemplatesRequest,
  output: RevertAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesTemplatesRequest {
  /** When provided, this fingerprint must match the fingerprint of the templates in storage. */
  fingerprint?: string;
  /** GTM Custom Template's API relative path. */
  path: string;
  /** Request body */
  body?: CustomTemplate;
}

export const UpdateAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(CustomTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesTemplatesRequest>;

export type UpdateAccountsContainersWorkspacesTemplatesResponse =
  CustomTemplate;
export const UpdateAccountsContainersWorkspacesTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomTemplate;

export type UpdateAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Template. */
export const updateAccountsContainersWorkspacesTemplates: API.OperationMethod<
  UpdateAccountsContainersWorkspacesTemplatesRequest,
  UpdateAccountsContainersWorkspacesTemplatesResponse,
  UpdateAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesTemplatesRequest,
  output: UpdateAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesTemplatesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: CustomTemplate;
}

export const CreateAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CustomTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/templates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesTemplatesRequest>;

export type CreateAccountsContainersWorkspacesTemplatesResponse =
  CustomTemplate;
export const CreateAccountsContainersWorkspacesTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomTemplate;

export type CreateAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Custom Template. */
export const createAccountsContainersWorkspacesTemplates: API.OperationMethod<
  CreateAccountsContainersWorkspacesTemplatesRequest,
  CreateAccountsContainersWorkspacesTemplatesResponse,
  CreateAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesTemplatesRequest,
  output: CreateAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface Import_from_galleryAccountsContainersWorkspacesTemplatesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Owner of the Gallery template to import */
  galleryOwner?: string;
  /** Repository of the Gallery template to import */
  galleryRepository?: string;
  /** Must be set to true to allow Gallery template to be imported into the workspace. If this bit is false, the import operation will fail. */
  acknowledgePermissions?: boolean;
  /** SHA version of the Gallery template to import. Defaulted to the latest SHA version if not provided. */
  gallerySha?: string;
}

export const Import_from_galleryAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    galleryOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("galleryOwner"),
    ),
    galleryRepository: Schema.optional(Schema.String).pipe(
      T.HttpQuery("galleryRepository"),
    ),
    acknowledgePermissions: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acknowledgePermissions"),
    ),
    gallerySha: Schema.optional(Schema.String).pipe(T.HttpQuery("gallerySha")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/templates:import_from_gallery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Import_from_galleryAccountsContainersWorkspacesTemplatesRequest>;

export type Import_from_galleryAccountsContainersWorkspacesTemplatesResponse =
  CustomTemplate;
export const Import_from_galleryAccountsContainersWorkspacesTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomTemplate;

export type Import_from_galleryAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports a GTM Custom Template from Gallery. */
export const import_from_galleryAccountsContainersWorkspacesTemplates: API.OperationMethod<
  Import_from_galleryAccountsContainersWorkspacesTemplatesRequest,
  Import_from_galleryAccountsContainersWorkspacesTemplatesResponse,
  Import_from_galleryAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Import_from_galleryAccountsContainersWorkspacesTemplatesRequest,
  output: Import_from_galleryAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesTemplatesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/templates" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesTemplatesRequest>;

export type ListAccountsContainersWorkspacesTemplatesResponse =
  ListTemplatesResponse;
export const ListAccountsContainersWorkspacesTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTemplatesResponse;

export type ListAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Templates of a GTM container workspace. */
export const listAccountsContainersWorkspacesTemplates: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesTemplatesRequest,
  ListAccountsContainersWorkspacesTemplatesResponse,
  ListAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesTemplatesRequest,
  output: ListAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesTemplatesRequest {
  /** GTM Custom Template's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesTemplatesRequest>;

export type GetAccountsContainersWorkspacesTemplatesResponse = CustomTemplate;
export const GetAccountsContainersWorkspacesTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomTemplate;

export type GetAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Template. */
export const getAccountsContainersWorkspacesTemplates: API.OperationMethod<
  GetAccountsContainersWorkspacesTemplatesRequest,
  GetAccountsContainersWorkspacesTemplatesResponse,
  GetAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesTemplatesRequest,
  output: GetAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesTemplatesRequest {
  /** GTM Custom Template's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesTemplatesRequest>;

export interface DeleteAccountsContainersWorkspacesTemplatesResponse {}
export const DeleteAccountsContainersWorkspacesTemplatesResponse: Schema.Schema<DeleteAccountsContainersWorkspacesTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesTemplatesResponse>;

export type DeleteAccountsContainersWorkspacesTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Template. */
export const deleteAccountsContainersWorkspacesTemplates: API.OperationMethod<
  DeleteAccountsContainersWorkspacesTemplatesRequest,
  DeleteAccountsContainersWorkspacesTemplatesResponse,
  DeleteAccountsContainersWorkspacesTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesTemplatesRequest,
  output: DeleteAccountsContainersWorkspacesTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesGtag_configRequest {
  /** Google tag config's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the config in storage. */
  fingerprint?: string;
  /** Request body */
  body?: GtagConfig;
}

export const UpdateAccountsContainersWorkspacesGtag_configRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(GtagConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesGtag_configRequest>;

export type UpdateAccountsContainersWorkspacesGtag_configResponse = GtagConfig;
export const UpdateAccountsContainersWorkspacesGtag_configResponse =
  /*@__PURE__*/ /*#__PURE__*/ GtagConfig;

export type UpdateAccountsContainersWorkspacesGtag_configError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Google tag config. */
export const updateAccountsContainersWorkspacesGtag_config: API.OperationMethod<
  UpdateAccountsContainersWorkspacesGtag_configRequest,
  UpdateAccountsContainersWorkspacesGtag_configResponse,
  UpdateAccountsContainersWorkspacesGtag_configError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesGtag_configRequest,
  output: UpdateAccountsContainersWorkspacesGtag_configResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesGtag_configRequest {
  /** Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesGtag_configRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/gtag_config" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesGtag_configRequest>;

export type ListAccountsContainersWorkspacesGtag_configResponse =
  ListGtagConfigResponse;
export const ListAccountsContainersWorkspacesGtag_configResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGtagConfigResponse;

export type ListAccountsContainersWorkspacesGtag_configError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Google tag configs in a Container. */
export const listAccountsContainersWorkspacesGtag_config: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesGtag_configRequest,
  ListAccountsContainersWorkspacesGtag_configResponse,
  ListAccountsContainersWorkspacesGtag_configError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesGtag_configRequest,
  output: ListAccountsContainersWorkspacesGtag_configResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesGtag_configRequest {
  /** Google tag config's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesGtag_configRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesGtag_configRequest>;

export type GetAccountsContainersWorkspacesGtag_configResponse = GtagConfig;
export const GetAccountsContainersWorkspacesGtag_configResponse =
  /*@__PURE__*/ /*#__PURE__*/ GtagConfig;

export type GetAccountsContainersWorkspacesGtag_configError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Google tag config. */
export const getAccountsContainersWorkspacesGtag_config: API.OperationMethod<
  GetAccountsContainersWorkspacesGtag_configRequest,
  GetAccountsContainersWorkspacesGtag_configResponse,
  GetAccountsContainersWorkspacesGtag_configError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesGtag_configRequest,
  output: GetAccountsContainersWorkspacesGtag_configResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesGtag_configRequest {
  /** Google tag config's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesGtag_configRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesGtag_configRequest>;

export interface DeleteAccountsContainersWorkspacesGtag_configResponse {}
export const DeleteAccountsContainersWorkspacesGtag_configResponse: Schema.Schema<DeleteAccountsContainersWorkspacesGtag_configResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesGtag_configResponse>;

export type DeleteAccountsContainersWorkspacesGtag_configError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Google tag config. */
export const deleteAccountsContainersWorkspacesGtag_config: API.OperationMethod<
  DeleteAccountsContainersWorkspacesGtag_configRequest,
  DeleteAccountsContainersWorkspacesGtag_configResponse,
  DeleteAccountsContainersWorkspacesGtag_configError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesGtag_configRequest,
  output: DeleteAccountsContainersWorkspacesGtag_configResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesGtag_configRequest {
  /** Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: GtagConfig;
}

export const CreateAccountsContainersWorkspacesGtag_configRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GtagConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/gtag_config",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesGtag_configRequest>;

export type CreateAccountsContainersWorkspacesGtag_configResponse = GtagConfig;
export const CreateAccountsContainersWorkspacesGtag_configResponse =
  /*@__PURE__*/ /*#__PURE__*/ GtagConfig;

export type CreateAccountsContainersWorkspacesGtag_configError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Google tag config. */
export const createAccountsContainersWorkspacesGtag_config: API.OperationMethod<
  CreateAccountsContainersWorkspacesGtag_configRequest,
  CreateAccountsContainersWorkspacesGtag_configResponse,
  CreateAccountsContainersWorkspacesGtag_configError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesGtag_configRequest,
  output: CreateAccountsContainersWorkspacesGtag_configResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesTransformationsRequest {
  /** When provided, this fingerprint must match the fingerprint of the transformation in storage. */
  fingerprint?: string;
  /** GTM Transformation's API relative path. */
  path: string;
}

export const RevertAccountsContainersWorkspacesTransformationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesTransformationsRequest>;

export type RevertAccountsContainersWorkspacesTransformationsResponse =
  RevertTransformationResponse;
export const RevertAccountsContainersWorkspacesTransformationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertTransformationResponse;

export type RevertAccountsContainersWorkspacesTransformationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Transformation in a GTM Workspace. */
export const revertAccountsContainersWorkspacesTransformations: API.OperationMethod<
  RevertAccountsContainersWorkspacesTransformationsRequest,
  RevertAccountsContainersWorkspacesTransformationsResponse,
  RevertAccountsContainersWorkspacesTransformationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesTransformationsRequest,
  output: RevertAccountsContainersWorkspacesTransformationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesTransformationsRequest {
  /** When provided, this fingerprint must match the fingerprint of the transformation in storage. */
  fingerprint?: string;
  /** GTM Transformation's API relative path. */
  path: string;
  /** Request body */
  body?: Transformation;
}

export const UpdateAccountsContainersWorkspacesTransformationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Transformation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesTransformationsRequest>;

export type UpdateAccountsContainersWorkspacesTransformationsResponse =
  Transformation;
export const UpdateAccountsContainersWorkspacesTransformationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Transformation;

export type UpdateAccountsContainersWorkspacesTransformationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Transformation. */
export const updateAccountsContainersWorkspacesTransformations: API.OperationMethod<
  UpdateAccountsContainersWorkspacesTransformationsRequest,
  UpdateAccountsContainersWorkspacesTransformationsResponse,
  UpdateAccountsContainersWorkspacesTransformationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesTransformationsRequest,
  output: UpdateAccountsContainersWorkspacesTransformationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesTransformationsRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Transformation;
}

export const CreateAccountsContainersWorkspacesTransformationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Transformation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/transformations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesTransformationsRequest>;

export type CreateAccountsContainersWorkspacesTransformationsResponse =
  Transformation;
export const CreateAccountsContainersWorkspacesTransformationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Transformation;

export type CreateAccountsContainersWorkspacesTransformationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Transformation. */
export const createAccountsContainersWorkspacesTransformations: API.OperationMethod<
  CreateAccountsContainersWorkspacesTransformationsRequest,
  CreateAccountsContainersWorkspacesTransformationsResponse,
  CreateAccountsContainersWorkspacesTransformationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesTransformationsRequest,
  output: CreateAccountsContainersWorkspacesTransformationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesTransformationsRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesTransformationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/transformations" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesTransformationsRequest>;

export type ListAccountsContainersWorkspacesTransformationsResponse =
  ListTransformationsResponse;
export const ListAccountsContainersWorkspacesTransformationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransformationsResponse;

export type ListAccountsContainersWorkspacesTransformationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Transformations of a GTM container workspace. */
export const listAccountsContainersWorkspacesTransformations: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesTransformationsRequest,
  ListAccountsContainersWorkspacesTransformationsResponse,
  ListAccountsContainersWorkspacesTransformationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesTransformationsRequest,
  output: ListAccountsContainersWorkspacesTransformationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesTransformationsRequest {
  /** GTM Transformation's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesTransformationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesTransformationsRequest>;

export type GetAccountsContainersWorkspacesTransformationsResponse =
  Transformation;
export const GetAccountsContainersWorkspacesTransformationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Transformation;

export type GetAccountsContainersWorkspacesTransformationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Transformation. */
export const getAccountsContainersWorkspacesTransformations: API.OperationMethod<
  GetAccountsContainersWorkspacesTransformationsRequest,
  GetAccountsContainersWorkspacesTransformationsResponse,
  GetAccountsContainersWorkspacesTransformationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesTransformationsRequest,
  output: GetAccountsContainersWorkspacesTransformationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesTransformationsRequest {
  /** GTM Transformation's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesTransformationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesTransformationsRequest>;

export interface DeleteAccountsContainersWorkspacesTransformationsResponse {}
export const DeleteAccountsContainersWorkspacesTransformationsResponse: Schema.Schema<DeleteAccountsContainersWorkspacesTransformationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesTransformationsResponse>;

export type DeleteAccountsContainersWorkspacesTransformationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Transformation. */
export const deleteAccountsContainersWorkspacesTransformations: API.OperationMethod<
  DeleteAccountsContainersWorkspacesTransformationsRequest,
  DeleteAccountsContainersWorkspacesTransformationsResponse,
  DeleteAccountsContainersWorkspacesTransformationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesTransformationsRequest,
  output: DeleteAccountsContainersWorkspacesTransformationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesFoldersRequest {
  /** GTM Folder's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the folder in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Folder;
}

export const UpdateAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesFoldersRequest>;

export type UpdateAccountsContainersWorkspacesFoldersResponse = Folder;
export const UpdateAccountsContainersWorkspacesFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

export type UpdateAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Folder. */
export const updateAccountsContainersWorkspacesFolders: API.OperationMethod<
  UpdateAccountsContainersWorkspacesFoldersRequest,
  UpdateAccountsContainersWorkspacesFoldersResponse,
  UpdateAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesFoldersRequest,
  output: UpdateAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesFoldersRequest {
  /** When provided, this fingerprint must match the fingerprint of the tag in storage. */
  fingerprint?: string;
  /** GTM Folder's API relative path. */
  path: string;
}

export const RevertAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesFoldersRequest>;

export type RevertAccountsContainersWorkspacesFoldersResponse =
  RevertFolderResponse;
export const RevertAccountsContainersWorkspacesFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertFolderResponse;

export type RevertAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Folder in a GTM Workspace. */
export const revertAccountsContainersWorkspacesFolders: API.OperationMethod<
  RevertAccountsContainersWorkspacesFoldersRequest,
  RevertAccountsContainersWorkspacesFoldersResponse,
  RevertAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesFoldersRequest,
  output: RevertAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EntitiesAccountsContainersWorkspacesFoldersRequest {
  /** GTM Folder's API relative path. */
  path: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const EntitiesAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:entities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EntitiesAccountsContainersWorkspacesFoldersRequest>;

export type EntitiesAccountsContainersWorkspacesFoldersResponse =
  FolderEntities;
export const EntitiesAccountsContainersWorkspacesFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ FolderEntities;

export type EntitiesAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** List all entities in a GTM Folder. */
export const entitiesAccountsContainersWorkspacesFolders: API.PaginatedOperationMethod<
  EntitiesAccountsContainersWorkspacesFoldersRequest,
  EntitiesAccountsContainersWorkspacesFoldersResponse,
  EntitiesAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: EntitiesAccountsContainersWorkspacesFoldersRequest,
  output: EntitiesAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface Move_entities_to_folderAccountsContainersWorkspacesFoldersRequest {
  /** The variables to be moved to the folder. */
  variableId?: string[];
  /** GTM Folder's API relative path. */
  path: string;
  /** The triggers to be moved to the folder. */
  triggerId?: string[];
  /** The tags to be moved to the folder. */
  tagId?: string[];
  /** Request body */
  body?: Folder;
}

export const Move_entities_to_folderAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variableId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("variableId"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    triggerId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("triggerId"),
    ),
    tagId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("tagId"),
    ),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:move_entities_to_folder",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<Move_entities_to_folderAccountsContainersWorkspacesFoldersRequest>;

export interface Move_entities_to_folderAccountsContainersWorkspacesFoldersResponse {}
export const Move_entities_to_folderAccountsContainersWorkspacesFoldersResponse: Schema.Schema<Move_entities_to_folderAccountsContainersWorkspacesFoldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<Move_entities_to_folderAccountsContainersWorkspacesFoldersResponse>;

export type Move_entities_to_folderAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves entities to a GTM Folder. If {folder_id} in the request path equals 0, this will instead move entities out of the folder they currently belong to. */
export const move_entities_to_folderAccountsContainersWorkspacesFolders: API.OperationMethod<
  Move_entities_to_folderAccountsContainersWorkspacesFoldersRequest,
  Move_entities_to_folderAccountsContainersWorkspacesFoldersResponse,
  Move_entities_to_folderAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: Move_entities_to_folderAccountsContainersWorkspacesFoldersRequest,
  output: Move_entities_to_folderAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesFoldersRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/folders" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesFoldersRequest>;

export type ListAccountsContainersWorkspacesFoldersResponse =
  ListFoldersResponse;
export const ListAccountsContainersWorkspacesFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFoldersResponse;

export type ListAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Folders of a Container. */
export const listAccountsContainersWorkspacesFolders: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesFoldersRequest,
  ListAccountsContainersWorkspacesFoldersResponse,
  ListAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesFoldersRequest,
  output: ListAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesFoldersRequest {
  /** GTM Folder's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesFoldersRequest>;

export type GetAccountsContainersWorkspacesFoldersResponse = Folder;
export const GetAccountsContainersWorkspacesFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

export type GetAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Folder. */
export const getAccountsContainersWorkspacesFolders: API.OperationMethod<
  GetAccountsContainersWorkspacesFoldersRequest,
  GetAccountsContainersWorkspacesFoldersResponse,
  GetAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesFoldersRequest,
  output: GetAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesFoldersRequest {
  /** GTM Folder's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesFoldersRequest>;

export interface DeleteAccountsContainersWorkspacesFoldersResponse {}
export const DeleteAccountsContainersWorkspacesFoldersResponse: Schema.Schema<DeleteAccountsContainersWorkspacesFoldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesFoldersResponse>;

export type DeleteAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Folder. */
export const deleteAccountsContainersWorkspacesFolders: API.OperationMethod<
  DeleteAccountsContainersWorkspacesFoldersRequest,
  DeleteAccountsContainersWorkspacesFoldersResponse,
  DeleteAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesFoldersRequest,
  output: DeleteAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesFoldersRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Folder;
}

export const CreateAccountsContainersWorkspacesFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/folders",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesFoldersRequest>;

export type CreateAccountsContainersWorkspacesFoldersResponse = Folder;
export const CreateAccountsContainersWorkspacesFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

export type CreateAccountsContainersWorkspacesFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Folder. */
export const createAccountsContainersWorkspacesFolders: API.OperationMethod<
  CreateAccountsContainersWorkspacesFoldersRequest,
  CreateAccountsContainersWorkspacesFoldersResponse,
  CreateAccountsContainersWorkspacesFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesFoldersRequest,
  output: CreateAccountsContainersWorkspacesFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersWorkspacesZonesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersWorkspacesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/zones" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersWorkspacesZonesRequest>;

export type ListAccountsContainersWorkspacesZonesResponse = ListZonesResponse;
export const ListAccountsContainersWorkspacesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListZonesResponse;

export type ListAccountsContainersWorkspacesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Zones of a GTM container workspace. */
export const listAccountsContainersWorkspacesZones: API.PaginatedOperationMethod<
  ListAccountsContainersWorkspacesZonesRequest,
  ListAccountsContainersWorkspacesZonesResponse,
  ListAccountsContainersWorkspacesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersWorkspacesZonesRequest,
  output: ListAccountsContainersWorkspacesZonesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersWorkspacesZonesRequest {
  /** GTM Zone's API relative path. */
  path: string;
}

export const GetAccountsContainersWorkspacesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersWorkspacesZonesRequest>;

export type GetAccountsContainersWorkspacesZonesResponse = Zone;
export const GetAccountsContainersWorkspacesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Zone;

export type GetAccountsContainersWorkspacesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Zone. */
export const getAccountsContainersWorkspacesZones: API.OperationMethod<
  GetAccountsContainersWorkspacesZonesRequest,
  GetAccountsContainersWorkspacesZonesResponse,
  GetAccountsContainersWorkspacesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersWorkspacesZonesRequest,
  output: GetAccountsContainersWorkspacesZonesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersWorkspacesZonesRequest {
  /** GTM Zone's API relative path. */
  path: string;
}

export const DeleteAccountsContainersWorkspacesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersWorkspacesZonesRequest>;

export interface DeleteAccountsContainersWorkspacesZonesResponse {}
export const DeleteAccountsContainersWorkspacesZonesResponse: Schema.Schema<DeleteAccountsContainersWorkspacesZonesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersWorkspacesZonesResponse>;

export type DeleteAccountsContainersWorkspacesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Zone. */
export const deleteAccountsContainersWorkspacesZones: API.OperationMethod<
  DeleteAccountsContainersWorkspacesZonesRequest,
  DeleteAccountsContainersWorkspacesZonesResponse,
  DeleteAccountsContainersWorkspacesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersWorkspacesZonesRequest,
  output: DeleteAccountsContainersWorkspacesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersWorkspacesZonesRequest {
  /** GTM Workspace's API relative path. */
  parent: string;
  /** Request body */
  body?: Zone;
}

export const CreateAccountsContainersWorkspacesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Zone).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/zones",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersWorkspacesZonesRequest>;

export type CreateAccountsContainersWorkspacesZonesResponse = Zone;
export const CreateAccountsContainersWorkspacesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Zone;

export type CreateAccountsContainersWorkspacesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Zone. */
export const createAccountsContainersWorkspacesZones: API.OperationMethod<
  CreateAccountsContainersWorkspacesZonesRequest,
  CreateAccountsContainersWorkspacesZonesResponse,
  CreateAccountsContainersWorkspacesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersWorkspacesZonesRequest,
  output: CreateAccountsContainersWorkspacesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersWorkspacesZonesRequest {
  /** When provided, this fingerprint must match the fingerprint of the zone in storage. */
  fingerprint?: string;
  /** GTM Zone's API relative path. */
  path: string;
  /** Request body */
  body?: Zone;
}

export const UpdateAccountsContainersWorkspacesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Zone).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersWorkspacesZonesRequest>;

export type UpdateAccountsContainersWorkspacesZonesResponse = Zone;
export const UpdateAccountsContainersWorkspacesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Zone;

export type UpdateAccountsContainersWorkspacesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Zone. */
export const updateAccountsContainersWorkspacesZones: API.OperationMethod<
  UpdateAccountsContainersWorkspacesZonesRequest,
  UpdateAccountsContainersWorkspacesZonesResponse,
  UpdateAccountsContainersWorkspacesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersWorkspacesZonesRequest,
  output: UpdateAccountsContainersWorkspacesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertAccountsContainersWorkspacesZonesRequest {
  /** GTM Zone's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the zone in storage. */
  fingerprint?: string;
}

export const RevertAccountsContainersWorkspacesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:revert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertAccountsContainersWorkspacesZonesRequest>;

export type RevertAccountsContainersWorkspacesZonesResponse =
  RevertZoneResponse;
export const RevertAccountsContainersWorkspacesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RevertZoneResponse;

export type RevertAccountsContainersWorkspacesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts changes to a GTM Zone in a GTM Workspace. */
export const revertAccountsContainersWorkspacesZones: API.OperationMethod<
  RevertAccountsContainersWorkspacesZonesRequest,
  RevertAccountsContainersWorkspacesZonesResponse,
  RevertAccountsContainersWorkspacesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertAccountsContainersWorkspacesZonesRequest,
  output: RevertAccountsContainersWorkspacesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersDestinationsRequest {
  /** Google Tag Destination's API relative path. */
  path: string;
}

export const GetAccountsContainersDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersDestinationsRequest>;

export type GetAccountsContainersDestinationsResponse = Destination;
export const GetAccountsContainersDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Destination;

export type GetAccountsContainersDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Destination. */
export const getAccountsContainersDestinations: API.OperationMethod<
  GetAccountsContainersDestinationsRequest,
  GetAccountsContainersDestinationsResponse,
  GetAccountsContainersDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersDestinationsRequest,
  output: GetAccountsContainersDestinationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsContainersDestinationsRequest {
  /** GTM parent Container's API relative path. */
  parent: string;
}

export const ListAccountsContainersDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/destinations" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersDestinationsRequest>;

export type ListAccountsContainersDestinationsResponse =
  ListDestinationsResponse;
export const ListAccountsContainersDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDestinationsResponse;

export type ListAccountsContainersDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Destinations linked to a GTM Container. */
export const listAccountsContainersDestinations: API.OperationMethod<
  ListAccountsContainersDestinationsRequest,
  ListAccountsContainersDestinationsResponse,
  ListAccountsContainersDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersDestinationsRequest,
  output: ListAccountsContainersDestinationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LinkAccountsContainersDestinationsRequest {
  /** Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail. */
  allowUserPermissionFeatureUpdate?: boolean;
  /** GTM parent Container's API relative path. */
  parent: string;
  /** Destination ID to be linked to the current container. */
  destinationId?: string;
}

export const LinkAccountsContainersDestinationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowUserPermissionFeatureUpdate: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowUserPermissionFeatureUpdate"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    destinationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("destinationId"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/destinations:link",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LinkAccountsContainersDestinationsRequest>;

export type LinkAccountsContainersDestinationsResponse = Destination;
export const LinkAccountsContainersDestinationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Destination;

export type LinkAccountsContainersDestinationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a Destination to this Container and removes it from the Container to which it is currently linked. */
export const linkAccountsContainersDestinations: API.OperationMethod<
  LinkAccountsContainersDestinationsRequest,
  LinkAccountsContainersDestinationsResponse,
  LinkAccountsContainersDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LinkAccountsContainersDestinationsRequest,
  output: LinkAccountsContainersDestinationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAccountsContainersEnvironmentsRequest {
  /** GTM Environment's API relative path. */
  path: string;
  /** When provided, this fingerprint must match the fingerprint of the environment in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Environment;
}

export const UpdateAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "tagmanager/v2/{+path}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersEnvironmentsRequest>;

export type UpdateAccountsContainersEnvironmentsResponse = Environment;
export const UpdateAccountsContainersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type UpdateAccountsContainersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Environment. */
export const updateAccountsContainersEnvironments: API.OperationMethod<
  UpdateAccountsContainersEnvironmentsRequest,
  UpdateAccountsContainersEnvironmentsResponse,
  UpdateAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersEnvironmentsRequest,
  output: UpdateAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersEnvironmentsRequest {
  /** GTM Container's API relative path. */
  parent: string;
  /** Continuation token for fetching the next page of results. */
  pageToken?: string;
}

export const ListAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+parent}/environments" }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersEnvironmentsRequest>;

export type ListAccountsContainersEnvironmentsResponse =
  ListEnvironmentsResponse;
export const ListAccountsContainersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEnvironmentsResponse;

export type ListAccountsContainersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Environments of a GTM Container. */
export const listAccountsContainersEnvironments: API.PaginatedOperationMethod<
  ListAccountsContainersEnvironmentsRequest,
  ListAccountsContainersEnvironmentsResponse,
  ListAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsContainersEnvironmentsRequest,
  output: ListAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountsContainersEnvironmentsRequest {
  /** GTM Environment's API relative path. */
  path: string;
}

export const GetAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "GET", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersEnvironmentsRequest>;

export type GetAccountsContainersEnvironmentsResponse = Environment;
export const GetAccountsContainersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type GetAccountsContainersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Environment. */
export const getAccountsContainersEnvironments: API.OperationMethod<
  GetAccountsContainersEnvironmentsRequest,
  GetAccountsContainersEnvironmentsResponse,
  GetAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersEnvironmentsRequest,
  output: GetAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAccountsContainersEnvironmentsRequest {
  /** GTM Environment's API relative path. */
  path: string;
}

export const DeleteAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
  }).pipe(
    T.Http({ method: "DELETE", path: "tagmanager/v2/{+path}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersEnvironmentsRequest>;

export interface DeleteAccountsContainersEnvironmentsResponse {}
export const DeleteAccountsContainersEnvironmentsResponse: Schema.Schema<DeleteAccountsContainersEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersEnvironmentsResponse>;

export type DeleteAccountsContainersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Environment. */
export const deleteAccountsContainersEnvironments: API.OperationMethod<
  DeleteAccountsContainersEnvironmentsRequest,
  DeleteAccountsContainersEnvironmentsResponse,
  DeleteAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersEnvironmentsRequest,
  output: DeleteAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersEnvironmentsRequest {
  /** GTM Container's API relative path. */
  parent: string;
  /** Request body */
  body?: Environment;
}

export const CreateAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+parent}/environments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersEnvironmentsRequest>;

export type CreateAccountsContainersEnvironmentsResponse = Environment;
export const CreateAccountsContainersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type CreateAccountsContainersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Environment. */
export const createAccountsContainersEnvironments: API.OperationMethod<
  CreateAccountsContainersEnvironmentsRequest,
  CreateAccountsContainersEnvironmentsResponse,
  CreateAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersEnvironmentsRequest,
  output: CreateAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReauthorizeAccountsContainersEnvironmentsRequest {
  /** GTM Environment's API relative path. */
  path: string;
  /** Request body */
  body?: Environment;
}

export const ReauthorizeAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String.pipe(T.HttpPath("path")),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v2/{+path}:reauthorize",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReauthorizeAccountsContainersEnvironmentsRequest>;

export type ReauthorizeAccountsContainersEnvironmentsResponse = Environment;
export const ReauthorizeAccountsContainersEnvironmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type ReauthorizeAccountsContainersEnvironmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Re-generates the authorization code for a GTM Environment. */
export const reauthorizeAccountsContainersEnvironments: API.OperationMethod<
  ReauthorizeAccountsContainersEnvironmentsRequest,
  ReauthorizeAccountsContainersEnvironmentsResponse,
  ReauthorizeAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReauthorizeAccountsContainersEnvironmentsRequest,
  output: ReauthorizeAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
