// ==========================================================================
// Tag Manager API (tagmanager v1)
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
  version: "v1",
  rootUrl: "https://tagmanager.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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

export interface TeardownTag {
  /** If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status. */
  stopTeardownOnFailure?: boolean;
  /** The name of the teardown tag. */
  tagName?: string;
}

export const TeardownTag: Schema.Schema<TeardownTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stopTeardownOnFailure: Schema.optional(Schema.Boolean),
    tagName: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeardownTag" });

export interface Parameter {
  /** The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. */
  key?: string;
  /** A parameter's value (may contain variable references). as appropriate to the specified type. */
  value?: string;
  /** This map parameter's parameters (must have keys; keys must be unique). */
  map?: ReadonlyArray<Parameter>;
  /** The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name */
  type?:
    | "template"
    | "integer"
    | "boolean"
    | "list"
    | "map"
    | "triggerReference"
    | "tagReference"
    | (string & {});
  /** This list parameter's parameters (keys will be ignored). */
  list?: ReadonlyArray<Parameter>;
}

export const Parameter: Schema.Schema<Parameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Schema.String),
      value: Schema.optional(Schema.String),
      map: Schema.optional(Schema.Array(Parameter)),
      type: Schema.optional(Schema.String),
      list: Schema.optional(Schema.Array(Parameter)),
    }),
  ).annotate({ identifier: "Parameter" }) as any as Schema.Schema<Parameter>;

export interface Tag {
  /** The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. */
  fingerprint?: string;
  /** True if the tag is paused. */
  paused?: boolean;
  /** The list of setup tags. Currently we only allow one. */
  setupTag?: ReadonlyArray<SetupTag>;
  /** GTM Tag Type. */
  type?: string;
  /** The list of teardown tags. Currently we only allow one. */
  teardownTag?: ReadonlyArray<TeardownTag>;
  /** Parent folder id. */
  parentFolderId?: string;
  /** The end timestamp in milliseconds to schedule a tag. */
  scheduleEndMs?: string;
  /** The Tag ID uniquely identifies the GTM Tag. */
  tagId?: string;
  /** Tag display name. */
  name?: string;
  /** Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. */
  firingTriggerId?: ReadonlyArray<string>;
  /** If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). */
  liveOnly?: boolean;
  /** The tag's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** Option to fire this tag. */
  tagFiringOption?:
    | "unlimited"
    | "oncePerEvent"
    | "oncePerLoad"
    | (string & {});
  /** User notes on how to apply this tag in the container. */
  notes?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. */
  priority?: Parameter;
  /** GTM Account ID. */
  accountId?: string;
  /** The start timestamp in milliseconds to schedule a tag. */
  scheduleStartMs?: string;
  /** Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. */
  blockingTriggerId?: ReadonlyArray<string>;
}

export const Tag: Schema.Schema<Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    paused: Schema.optional(Schema.Boolean),
    setupTag: Schema.optional(Schema.Array(SetupTag)),
    type: Schema.optional(Schema.String),
    teardownTag: Schema.optional(Schema.Array(TeardownTag)),
    parentFolderId: Schema.optional(Schema.String),
    scheduleEndMs: Schema.optional(Schema.String),
    tagId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    firingTriggerId: Schema.optional(Schema.Array(Schema.String)),
    liveOnly: Schema.optional(Schema.Boolean),
    parameter: Schema.optional(Schema.Array(Parameter)),
    tagFiringOption: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    priority: Schema.optional(Parameter),
    accountId: Schema.optional(Schema.String),
    scheduleStartMs: Schema.optional(Schema.String),
    blockingTriggerId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Tag" });

export interface Folder {
  /** The Folder ID uniquely identifies the GTM Folder. */
  folderId?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** Folder display name. */
  name?: string;
  /** The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified. */
  fingerprint?: string;
  /** GTM Container ID. */
  containerId?: string;
}

export const Folder: Schema.Schema<Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folderId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface Variable {
  /** The variable's parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** Variable display name. */
  name?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** The start timestamp in milliseconds to schedule a variable. */
  scheduleStartMs?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** User notes on how to apply this variable in the container. */
  notes?: string;
  /** For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. */
  enablingTriggerId?: ReadonlyArray<string>;
  /** For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. */
  disablingTriggerId?: ReadonlyArray<string>;
  /** The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. */
  fingerprint?: string;
  /** The Variable ID uniquely identifies the GTM Variable. */
  variableId?: string;
  /** Parent folder id. */
  parentFolderId?: string;
  /** GTM Variable Type. */
  type?: string;
  /** The end timestamp in milliseconds to schedule a variable. */
  scheduleEndMs?: string;
}

export const Variable: Schema.Schema<Variable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.Array(Parameter)),
    name: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    scheduleStartMs: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    enablingTriggerId: Schema.optional(Schema.Array(Schema.String)),
    disablingTriggerId: Schema.optional(Schema.Array(Schema.String)),
    fingerprint: Schema.optional(Schema.String),
    variableId: Schema.optional(Schema.String),
    parentFolderId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    scheduleEndMs: Schema.optional(Schema.String),
  }).annotate({ identifier: "Variable" });

export interface Container {
  /** GTM Account ID. */
  accountId?: string;
  /** Optional list of domain names associated with the Container. */
  domainName?: ReadonlyArray<string>;
  /** Container Country ID. */
  timeZoneCountryId?: string;
  /** The Container ID uniquely identifies the GTM Container. */
  containerId?: string;
  /** Container Notes. */
  notes?: string;
  /** Container Time Zone ID. */
  timeZoneId?: string;
  /** Container Public ID. */
  publicId?: string;
  /** List of Usage Contexts for the Container. Valid values include: web, android, ios. */
  usageContext?: ReadonlyArray<
    | "web"
    | "android"
    | "ios"
    | "androidSdk5"
    | "iosSdk5"
    | "amp"
    | (string & {})
  >;
  /** Container display name. */
  name?: string;
  /** The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. */
  fingerprint?: string;
  /** List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId. */
  enabledBuiltInVariable?: ReadonlyArray<
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
    | "environmentName"
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
    | "analyticsClientId"
    | "analyticsSessionId"
    | "analyticsSessionNumber"
    | (string & {})
  >;
}

export const Container: Schema.Schema<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    domainName: Schema.optional(Schema.Array(Schema.String)),
    timeZoneCountryId: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    timeZoneId: Schema.optional(Schema.String),
    publicId: Schema.optional(Schema.String),
    usageContext: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    enabledBuiltInVariable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Container" });

export interface Condition {
  /** The type of operator for this condition. */
  type?:
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
  /** A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. */
  parameter?: ReadonlyArray<Parameter>;
}

export const Condition: Schema.Schema<Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    parameter: Schema.optional(Schema.Array(Parameter)),
  }).annotate({ identifier: "Condition" });

export interface Trigger {
  /** The Trigger ID uniquely identifies the GTM Trigger. */
  triggerId?: string;
  /** A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. */
  visiblePercentageMax?: Parameter;
  /** A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. */
  totalTimeMinMilliseconds?: Parameter;
  /** Parent folder id. */
  parentFolderId?: string;
  /** Defines the data layer event that causes this trigger. */
  type?:
    | "pageview"
    | "domReady"
    | "windowLoaded"
    | "customEvent"
    | "triggerGroup"
    | "always"
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
  /** Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. */
  interval?: Parameter;
  /** Used in the case of custom event, which is fired iff all Conditions are true. */
  customEventFilter?: ReadonlyArray<Condition>;
  /** Used in the case of auto event tracking. */
  autoEventFilter?: ReadonlyArray<Condition>;
  /** Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. */
  waitForTags?: Parameter;
  /** Additional parameters. */
  parameter?: ReadonlyArray<Parameter>;
  /** How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. */
  waitForTagsTimeout?: Parameter;
  /** A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. */
  visibilitySelector?: Parameter;
  /** Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. */
  checkValidation?: Parameter;
  /** The trigger will only fire iff all Conditions are true. */
  filter?: ReadonlyArray<Condition>;
  /** Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. */
  maxTimerLengthSeconds?: Parameter;
  /** Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. */
  limit?: Parameter;
  /** Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. */
  uniqueTriggerId?: Parameter;
  /** A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. */
  continuousTimeMinMilliseconds?: Parameter;
  /** The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified. */
  fingerprint?: string;
  /** Name of the GTM event that is fired. Only valid for Timer triggers. */
  eventName?: Parameter;
  /** Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. */
  intervalSeconds?: Parameter;
  /** A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. */
  visiblePercentageMin?: Parameter;
  /** List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. */
  horizontalScrollPercentageList?: Parameter;
  /** List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. */
  verticalScrollPercentageList?: Parameter;
  /** Trigger display name. */
  name?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. */
  selector?: Parameter;
}

export const Trigger: Schema.Schema<Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerId: Schema.optional(Schema.String),
    visiblePercentageMax: Schema.optional(Parameter),
    totalTimeMinMilliseconds: Schema.optional(Parameter),
    parentFolderId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    interval: Schema.optional(Parameter),
    customEventFilter: Schema.optional(Schema.Array(Condition)),
    autoEventFilter: Schema.optional(Schema.Array(Condition)),
    waitForTags: Schema.optional(Parameter),
    parameter: Schema.optional(Schema.Array(Parameter)),
    waitForTagsTimeout: Schema.optional(Parameter),
    visibilitySelector: Schema.optional(Parameter),
    checkValidation: Schema.optional(Parameter),
    filter: Schema.optional(Schema.Array(Condition)),
    maxTimerLengthSeconds: Schema.optional(Parameter),
    limit: Schema.optional(Parameter),
    uniqueTriggerId: Schema.optional(Parameter),
    continuousTimeMinMilliseconds: Schema.optional(Parameter),
    fingerprint: Schema.optional(Schema.String),
    eventName: Schema.optional(Parameter),
    intervalSeconds: Schema.optional(Parameter),
    visiblePercentageMin: Schema.optional(Parameter),
    horizontalScrollPercentageList: Schema.optional(Parameter),
    verticalScrollPercentageList: Schema.optional(Parameter),
    name: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    selector: Schema.optional(Parameter),
  }).annotate({ identifier: "Trigger" });

export interface ContainerVersion {
  /** Container version display name. */
  name?: string;
  /** The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. */
  fingerprint?: string;
  /** A value of true indicates this container version has been deleted. */
  deleted?: boolean;
  /** The Container Version ID uniquely identifies the GTM Container Version. */
  containerVersionId?: string;
  /** The tags in the container that this version was taken from. */
  tag?: ReadonlyArray<Tag>;
  /** The folders in the container that this version was taken from. */
  folder?: ReadonlyArray<Folder>;
  /** The variables in the container that this version was taken from. */
  variable?: ReadonlyArray<Variable>;
  /** GTM Container ID. */
  containerId?: string;
  /** User notes on how to apply this container version in the container. */
  notes?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** The container that this version was taken from. */
  container?: Container;
  /** The triggers in the container that this version was taken from. */
  trigger?: ReadonlyArray<Trigger>;
}

export const ContainerVersion: Schema.Schema<ContainerVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    containerVersionId: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.Array(Tag)),
    folder: Schema.optional(Schema.Array(Folder)),
    variable: Schema.optional(Schema.Array(Variable)),
    containerId: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    container: Schema.optional(Container),
    trigger: Schema.optional(Schema.Array(Trigger)),
  }).annotate({ identifier: "ContainerVersion" });

export interface CreateContainerVersionResponse {
  /** The container version created. */
  containerVersion?: ContainerVersion;
  /** Compiler errors or not. */
  compilerError?: boolean;
}

export const CreateContainerVersionResponse: Schema.Schema<CreateContainerVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersion: Schema.optional(ContainerVersion),
    compilerError: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CreateContainerVersionResponse" });

export interface ContainerVersionHeader {
  /** The Container Version ID uniquely identifies the GTM Container Version. */
  containerVersionId?: string;
  /** A value of true indicates this container version has been deleted. */
  deleted?: boolean;
  /** Number of triggers in the container version. */
  numTriggers?: string;
  /** Number of variables in the container version. */
  numVariables?: string;
  /** Container version display name. */
  name?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** Number of tags in the container version. */
  numTags?: string;
}

export const ContainerVersionHeader: Schema.Schema<ContainerVersionHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersionId: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    numTriggers: Schema.optional(Schema.String),
    numVariables: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    numTags: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerVersionHeader" });

export interface ListContainersResponse {
  /** All Containers of a GTM Account. */
  containers?: ReadonlyArray<Container>;
}

export const ListContainersResponse: Schema.Schema<ListContainersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containers: Schema.optional(Schema.Array(Container)),
  }).annotate({ identifier: "ListContainersResponse" });

export interface Environment {
  /** The environment description. Can be set or changed only on USER type environments. */
  description?: string;
  /** Whether or not to enable debug by default on for the environment. */
  enableDebug?: boolean;
  /** The last update time-stamp for the authorization code. */
  authorizationTimestampMs?: string;
  /** The type of this environment. */
  type?: "user" | "live" | "latest" | "draft" | (string & {});
  /** GTM Account ID. */
  accountId?: string;
  /** GTM Container ID. */
  containerId?: string;
  /** The environment authorization code. */
  authorizationCode?: string;
  containerVersionId?: string;
  /** Default preview page url for the environment. */
  url?: string;
  /** GTM Environment ID uniquely identifies the GTM Environment. */
  environmentId?: string;
  /** The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. */
  fingerprint?: string;
  /** The environment display name. Can be set or changed only on USER type environments. */
  name?: string;
}

export const Environment: Schema.Schema<Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    enableDebug: Schema.optional(Schema.Boolean),
    authorizationTimestampMs: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    containerId: Schema.optional(Schema.String),
    authorizationCode: Schema.optional(Schema.String),
    containerVersionId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    environmentId: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Environment" });

export interface ListVariablesResponse {
  /** All GTM Variables of a GTM Container. */
  variables?: ReadonlyArray<Variable>;
}

export const ListVariablesResponse: Schema.Schema<ListVariablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Array(Variable)),
  }).annotate({ identifier: "ListVariablesResponse" });

export interface ListEnvironmentsResponse {
  /** All Environments of a GTM Container. */
  environments?: ReadonlyArray<Environment>;
}

export const ListEnvironmentsResponse: Schema.Schema<ListEnvironmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environments: Schema.optional(Schema.Array(Environment)),
  }).annotate({ identifier: "ListEnvironmentsResponse" });

export interface AccountAccess {
  /** List of Account permissions. Valid account permissions are read and manage. */
  permission?: ReadonlyArray<
    | "read"
    | "edit"
    | "publish"
    | "delete"
    | "manage"
    | "editWorkspace"
    | (string & {})
  >;
}

export const AccountAccess: Schema.Schema<AccountAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AccountAccess" });

export interface ContainerAccess {
  /** List of Container permissions. Valid container permissions are: read, edit, delete, publish. */
  permission?: ReadonlyArray<
    | "read"
    | "edit"
    | "publish"
    | "delete"
    | "manage"
    | "editWorkspace"
    | (string & {})
  >;
  /** GTM Container ID. */
  containerId?: string;
}

export const ContainerAccess: Schema.Schema<ContainerAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.optional(Schema.Array(Schema.String)),
    containerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerAccess" });

export interface UserAccess {
  /** GTM Account access permissions. */
  accountAccess?: AccountAccess;
  /** User's email address. */
  emailAddress?: string;
  /** GTM Account ID. */
  accountId?: string;
  /** Account Permission ID. */
  permissionId?: string;
  /** GTM Container access permissions. */
  containerAccess?: ReadonlyArray<ContainerAccess>;
}

export const UserAccess: Schema.Schema<UserAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountAccess: Schema.optional(AccountAccess),
    emailAddress: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    permissionId: Schema.optional(Schema.String),
    containerAccess: Schema.optional(Schema.Array(ContainerAccess)),
  }).annotate({ identifier: "UserAccess" });

export interface CreateContainerVersionRequestVersionOptions {
  /** The creation of this version may be for quick preview and shouldn't be saved. */
  quickPreview?: boolean;
  /** The name of the container version to be created. */
  name?: string;
  /** The notes of the container version to be created. */
  notes?: string;
}

export const CreateContainerVersionRequestVersionOptions: Schema.Schema<CreateContainerVersionRequestVersionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quickPreview: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateContainerVersionRequestVersionOptions" });

export interface Account {
  /** The Account ID uniquely identifies the GTM Account. */
  accountId?: string;
  /** Whether the account shares data anonymously with Google and others. */
  shareData?: boolean;
  /** Account display name. */
  name?: string;
  /** The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. */
  fingerprint?: string;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    shareData: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
  }).annotate({ identifier: "Account" });

export interface ListContainerVersionsResponse {
  /** All versions of a GTM Container. */
  containerVersion?: ReadonlyArray<ContainerVersion>;
  /** All container version headers of a GTM Container. */
  containerVersionHeader?: ReadonlyArray<ContainerVersionHeader>;
}

export const ListContainerVersionsResponse: Schema.Schema<ListContainerVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersion: Schema.optional(Schema.Array(ContainerVersion)),
    containerVersionHeader: Schema.optional(
      Schema.Array(ContainerVersionHeader),
    ),
  }).annotate({ identifier: "ListContainerVersionsResponse" });

export interface PublishContainerVersionResponse {
  /** The container version created. */
  containerVersion?: ContainerVersion;
  /** Compiler errors or not. */
  compilerError?: boolean;
}

export const PublishContainerVersionResponse: Schema.Schema<PublishContainerVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersion: Schema.optional(ContainerVersion),
    compilerError: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PublishContainerVersionResponse" });

export interface FolderEntities {
  /** The list of tags inside the folder. */
  tag?: ReadonlyArray<Tag>;
  /** The list of variables inside the folder. */
  variable?: ReadonlyArray<Variable>;
  /** The list of triggers inside the folder. */
  trigger?: ReadonlyArray<Trigger>;
}

export const FolderEntities: Schema.Schema<FolderEntities> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.Array(Tag)),
    variable: Schema.optional(Schema.Array(Variable)),
    trigger: Schema.optional(Schema.Array(Trigger)),
  }).annotate({ identifier: "FolderEntities" });

export interface ListTagsResponse {
  /** All GTM Tags of a GTM Container. */
  tags?: ReadonlyArray<Tag>;
}

export const ListTagsResponse: Schema.Schema<ListTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Tag)),
  }).annotate({ identifier: "ListTagsResponse" });

export interface ListAccountsResponse {
  /** List of GTM Accounts that a user has access to. */
  accounts?: ReadonlyArray<Account>;
}

export const ListAccountsResponse: Schema.Schema<ListAccountsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accounts: Schema.optional(Schema.Array(Account)),
  }).annotate({ identifier: "ListAccountsResponse" });

export interface ListAccountUsersResponse {
  /** All GTM AccountUsers of a GTM Account. */
  userAccess?: ReadonlyArray<UserAccess>;
}

export const ListAccountUsersResponse: Schema.Schema<ListAccountUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userAccess: Schema.optional(Schema.Array(UserAccess)),
  }).annotate({ identifier: "ListAccountUsersResponse" });

export interface ListTriggersResponse {
  /** All GTM Triggers of a GTM Container. */
  triggers?: ReadonlyArray<Trigger>;
}

export const ListTriggersResponse: Schema.Schema<ListTriggersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggers: Schema.optional(Schema.Array(Trigger)),
  }).annotate({ identifier: "ListTriggersResponse" });

export interface ListFoldersResponse {
  /** All GTM Folders of a GTM Container. */
  folders?: ReadonlyArray<Folder>;
}

export const ListFoldersResponse: Schema.Schema<ListFoldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folders: Schema.optional(Schema.Array(Folder)),
  }).annotate({ identifier: "ListFoldersResponse" });

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

export interface UpdateAccountsRequest {
  /** When provided, this fingerprint must match the fingerprint of the account in storage. */
  fingerprint?: string;
  /** The GTM Account ID. */
  accountId: string;
  /** Request body */
  body?: Account;
}

export const UpdateAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fingerprint: Schema.optional(Schema.String).pipe(T.HttpQuery("fingerprint")),
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
  body: Schema.optional(Account).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "tagmanager/v1/accounts/{accountId}",
    hasBody: true,
  }),
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

export interface ListAccountsRequest {}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "tagmanager/v1/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse_Op = ListAccountsResponse;
export const ListAccountsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountsResponse;

export type ListAccountsError = DefaultErrors | NotFound | Forbidden;

/** Lists all GTM Accounts that a user has access to. */
export const listAccounts: API.OperationMethod<
  ListAccountsRequest,
  ListAccountsResponse_Op,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse_Op,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountsRequest {
  /** The GTM Account ID. */
  accountId: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("accountId")),
}).pipe(
  T.Http({ method: "GET", path: "tagmanager/v1/accounts/{accountId}" }),
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

export interface CreateAccountsPermissionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** Request body */
  body?: UserAccess;
}

export const CreateAccountsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(UserAccess).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/permissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsPermissionsRequest>;

export type CreateAccountsPermissionsResponse = UserAccess;
export const CreateAccountsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserAccess;

export type CreateAccountsPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a user's Account & Container Permissions. */
export const createAccountsPermissions: API.OperationMethod<
  CreateAccountsPermissionsRequest,
  CreateAccountsPermissionsResponse,
  CreateAccountsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsPermissionsRequest,
  output: CreateAccountsPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsPermissionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM User ID. */
  permissionId: string;
}

export const GetAccountsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/permissions/{permissionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsPermissionsRequest>;

export type GetAccountsPermissionsResponse = UserAccess;
export const GetAccountsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserAccess;

export type GetAccountsPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a user's Account & Container Permissions. */
export const getAccountsPermissions: API.OperationMethod<
  GetAccountsPermissionsRequest,
  GetAccountsPermissionsResponse,
  GetAccountsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsPermissionsRequest,
  output: GetAccountsPermissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsPermissionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM User ID. */
  permissionId: string;
  /** Request body */
  body?: UserAccess;
}

export const UpdateAccountsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
    body: Schema.optional(UserAccess).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/permissions/{permissionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsPermissionsRequest>;

export type UpdateAccountsPermissionsResponse = UserAccess;
export const UpdateAccountsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserAccess;

export type UpdateAccountsPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a user's Account & Container Permissions. */
export const updateAccountsPermissions: API.OperationMethod<
  UpdateAccountsPermissionsRequest,
  UpdateAccountsPermissionsResponse,
  UpdateAccountsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsPermissionsRequest,
  output: UpdateAccountsPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsPermissionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM User ID. */
  permissionId: string;
}

export const DeleteAccountsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    permissionId: Schema.String.pipe(T.HttpPath("permissionId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/permissions/{permissionId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsPermissionsRequest>;

export interface DeleteAccountsPermissionsResponse {}
export const DeleteAccountsPermissionsResponse: Schema.Schema<DeleteAccountsPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsPermissionsResponse>;

export type DeleteAccountsPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a user from the account, revoking access to it and all of its containers. */
export const deleteAccountsPermissions: API.OperationMethod<
  DeleteAccountsPermissionsRequest,
  DeleteAccountsPermissionsResponse,
  DeleteAccountsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsPermissionsRequest,
  output: DeleteAccountsPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsPermissionsRequest {
  /** The GTM Account ID. */
  accountId: string;
}

export const ListAccountsPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/permissions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsPermissionsRequest>;

export type ListAccountsPermissionsResponse = ListAccountUsersResponse;
export const ListAccountsPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountUsersResponse;

export type ListAccountsPermissionsError = DefaultErrors | NotFound | Forbidden;

/** List all users that have access to the account along with Account and Container Permissions granted to each of them. */
export const listAccountsPermissions: API.OperationMethod<
  ListAccountsPermissionsRequest,
  ListAccountsPermissionsResponse,
  ListAccountsPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsPermissionsRequest,
  output: ListAccountsPermissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsContainersRequest {
  /** The GTM Account ID. */
  accountId: string;
}

export const ListAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersRequest>;

export type ListAccountsContainersResponse = ListContainersResponse;
export const ListAccountsContainersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListContainersResponse;

export type ListAccountsContainersError = DefaultErrors | NotFound | Forbidden;

/** Lists all Containers that belongs to a GTM Account. */
export const listAccountsContainers: API.OperationMethod<
  ListAccountsContainersRequest,
  ListAccountsContainersResponse,
  ListAccountsContainersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersRequest,
  output: ListAccountsContainersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** When provided, this fingerprint must match the fingerprint of the container in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Container;
}

export const UpdateAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Container).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}",
      hasBody: true,
    }),
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

export interface DeleteAccountsContainersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const DeleteAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}",
    }),
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

export interface GetAccountsContainersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const GetAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}",
    }),
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

export interface CreateAccountsContainersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** Request body */
  body?: Container;
}

export const CreateAccountsContainersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Container).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers",
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

export interface UpdateAccountsContainersMove_foldersRequest {
  /** The tags to be moved to the folder. */
  tagId?: string[];
  /** The triggers to be moved to the folder. */
  triggerId?: string[];
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Folder ID. */
  folderId: string;
  /** The GTM Account ID. */
  accountId: string;
  /** The variables to be moved to the folder. */
  variableId?: string[];
  /** Request body */
  body?: Folder;
}

export const UpdateAccountsContainersMove_foldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("tagId"),
    ),
    triggerId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("triggerId"),
    ),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    folderId: Schema.String.pipe(T.HttpPath("folderId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    variableId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("variableId"),
    ),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersMove_foldersRequest>;

export interface UpdateAccountsContainersMove_foldersResponse {}
export const UpdateAccountsContainersMove_foldersResponse: Schema.Schema<UpdateAccountsContainersMove_foldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<UpdateAccountsContainersMove_foldersResponse>;

export type UpdateAccountsContainersMove_foldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves entities to a GTM Folder. */
export const updateAccountsContainersMove_folders: API.OperationMethod<
  UpdateAccountsContainersMove_foldersRequest,
  UpdateAccountsContainersMove_foldersResponse,
  UpdateAccountsContainersMove_foldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersMove_foldersRequest,
  output: UpdateAccountsContainersMove_foldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersEnvironmentsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Environment ID. */
  environmentId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const GetAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}",
    }),
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

export interface CreateAccountsContainersEnvironmentsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Environment;
}

export const CreateAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments",
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

export interface ListAccountsContainersEnvironmentsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const ListAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments",
    }),
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
export const listAccountsContainersEnvironments: API.OperationMethod<
  ListAccountsContainersEnvironmentsRequest,
  ListAccountsContainersEnvironmentsResponse,
  ListAccountsContainersEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersEnvironmentsRequest,
  output: ListAccountsContainersEnvironmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersEnvironmentsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Environment ID. */
  environmentId: string;
  /** When provided, this fingerprint must match the fingerprint of the environment in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Environment;
}

export const UpdateAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}",
      hasBody: true,
    }),
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

export interface DeleteAccountsContainersEnvironmentsRequest {
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Environment ID. */
  environmentId: string;
  /** The GTM Account ID. */
  accountId: string;
}

export const DeleteAccountsContainersEnvironmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}",
    }),
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

export interface UpdateAccountsContainersTriggersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Trigger ID. */
  triggerId: string;
  /** When provided, this fingerprint must match the fingerprint of the trigger in storage. */
  fingerprint?: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Trigger;
}

export const UpdateAccountsContainersTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    triggerId: Schema.String.pipe(T.HttpPath("triggerId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Trigger).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersTriggersRequest>;

export type UpdateAccountsContainersTriggersResponse = Trigger;
export const UpdateAccountsContainersTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type UpdateAccountsContainersTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Trigger. */
export const updateAccountsContainersTriggers: API.OperationMethod<
  UpdateAccountsContainersTriggersRequest,
  UpdateAccountsContainersTriggersResponse,
  UpdateAccountsContainersTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersTriggersRequest,
  output: UpdateAccountsContainersTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsContainersTriggersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Trigger ID. */
  triggerId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const DeleteAccountsContainersTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    triggerId: Schema.String.pipe(T.HttpPath("triggerId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersTriggersRequest>;

export interface DeleteAccountsContainersTriggersResponse {}
export const DeleteAccountsContainersTriggersResponse: Schema.Schema<DeleteAccountsContainersTriggersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersTriggersResponse>;

export type DeleteAccountsContainersTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Trigger. */
export const deleteAccountsContainersTriggers: API.OperationMethod<
  DeleteAccountsContainersTriggersRequest,
  DeleteAccountsContainersTriggersResponse,
  DeleteAccountsContainersTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersTriggersRequest,
  output: DeleteAccountsContainersTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersTriggersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const ListAccountsContainersTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersTriggersRequest>;

export type ListAccountsContainersTriggersResponse = ListTriggersResponse;
export const ListAccountsContainersTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTriggersResponse;

export type ListAccountsContainersTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Triggers of a Container. */
export const listAccountsContainersTriggers: API.OperationMethod<
  ListAccountsContainersTriggersRequest,
  ListAccountsContainersTriggersResponse,
  ListAccountsContainersTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersTriggersRequest,
  output: ListAccountsContainersTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateAccountsContainersTriggersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Trigger;
}

export const CreateAccountsContainersTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Trigger).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersTriggersRequest>;

export type CreateAccountsContainersTriggersResponse = Trigger;
export const CreateAccountsContainersTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type CreateAccountsContainersTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Trigger. */
export const createAccountsContainersTriggers: API.OperationMethod<
  CreateAccountsContainersTriggersRequest,
  CreateAccountsContainersTriggersResponse,
  CreateAccountsContainersTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersTriggersRequest,
  output: CreateAccountsContainersTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersTriggersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Trigger ID. */
  triggerId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const GetAccountsContainersTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    triggerId: Schema.String.pipe(T.HttpPath("triggerId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersTriggersRequest>;

export type GetAccountsContainersTriggersResponse = Trigger;
export const GetAccountsContainersTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type GetAccountsContainersTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Trigger. */
export const getAccountsContainersTriggers: API.OperationMethod<
  GetAccountsContainersTriggersRequest,
  GetAccountsContainersTriggersResponse,
  GetAccountsContainersTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersTriggersRequest,
  output: GetAccountsContainersTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersFoldersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Folder ID. */
  folderId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** When provided, this fingerprint must match the fingerprint of the folder in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Folder;
}

export const UpdateAccountsContainersFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    folderId: Schema.String.pipe(T.HttpPath("folderId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersFoldersRequest>;

export type UpdateAccountsContainersFoldersResponse = Folder;
export const UpdateAccountsContainersFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

export type UpdateAccountsContainersFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Folder. */
export const updateAccountsContainersFolders: API.OperationMethod<
  UpdateAccountsContainersFoldersRequest,
  UpdateAccountsContainersFoldersResponse,
  UpdateAccountsContainersFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersFoldersRequest,
  output: UpdateAccountsContainersFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsContainersFoldersRequest {
  /** The GTM Folder ID. */
  folderId: string;
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const DeleteAccountsContainersFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folderId: Schema.String.pipe(T.HttpPath("folderId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersFoldersRequest>;

export interface DeleteAccountsContainersFoldersResponse {}
export const DeleteAccountsContainersFoldersResponse: Schema.Schema<DeleteAccountsContainersFoldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersFoldersResponse>;

export type DeleteAccountsContainersFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Folder. */
export const deleteAccountsContainersFolders: API.OperationMethod<
  DeleteAccountsContainersFoldersRequest,
  DeleteAccountsContainersFoldersResponse,
  DeleteAccountsContainersFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersFoldersRequest,
  output: DeleteAccountsContainersFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersFoldersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const ListAccountsContainersFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersFoldersRequest>;

export type ListAccountsContainersFoldersResponse = ListFoldersResponse;
export const ListAccountsContainersFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFoldersResponse;

export type ListAccountsContainersFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Folders of a Container. */
export const listAccountsContainersFolders: API.OperationMethod<
  ListAccountsContainersFoldersRequest,
  ListAccountsContainersFoldersResponse,
  ListAccountsContainersFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersFoldersRequest,
  output: ListAccountsContainersFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateAccountsContainersFoldersRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Folder;
}

export const CreateAccountsContainersFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersFoldersRequest>;

export type CreateAccountsContainersFoldersResponse = Folder;
export const CreateAccountsContainersFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

export type CreateAccountsContainersFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Folder. */
export const createAccountsContainersFolders: API.OperationMethod<
  CreateAccountsContainersFoldersRequest,
  CreateAccountsContainersFoldersResponse,
  CreateAccountsContainersFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersFoldersRequest,
  output: CreateAccountsContainersFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersFoldersRequest {
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Folder ID. */
  folderId: string;
  /** The GTM Account ID. */
  accountId: string;
}

export const GetAccountsContainersFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    folderId: Schema.String.pipe(T.HttpPath("folderId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersFoldersRequest>;

export type GetAccountsContainersFoldersResponse = Folder;
export const GetAccountsContainersFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

export type GetAccountsContainersFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Folder. */
export const getAccountsContainersFolders: API.OperationMethod<
  GetAccountsContainersFoldersRequest,
  GetAccountsContainersFoldersResponse,
  GetAccountsContainersFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersFoldersRequest,
  output: GetAccountsContainersFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAccountsContainersFoldersEntitiesRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Folder ID. */
  folderId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const ListAccountsContainersFoldersEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    folderId: Schema.String.pipe(T.HttpPath("folderId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersFoldersEntitiesRequest>;

export type ListAccountsContainersFoldersEntitiesResponse = FolderEntities;
export const ListAccountsContainersFoldersEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FolderEntities;

export type ListAccountsContainersFoldersEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all entities in a GTM Folder. */
export const listAccountsContainersFoldersEntities: API.OperationMethod<
  ListAccountsContainersFoldersEntitiesRequest,
  ListAccountsContainersFoldersEntitiesResponse,
  ListAccountsContainersFoldersEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersFoldersEntitiesRequest,
  output: ListAccountsContainersFoldersEntitiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersVersionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container Version ID. */
  containerVersionId: string;
  /** When provided, this fingerprint must match the fingerprint of the container version in storage. */
  fingerprint?: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: ContainerVersion;
}

export const UpdateAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerVersionId: Schema.String.pipe(T.HttpPath("containerVersionId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(ContainerVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}",
      hasBody: true,
    }),
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

export interface DeleteAccountsContainersVersionsRequest {
  /** The GTM Container Version ID. */
  containerVersionId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Account ID. */
  accountId: string;
}

export const DeleteAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersionId: Schema.String.pipe(T.HttpPath("containerVersionId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}",
    }),
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

export interface UndeleteAccountsContainersVersionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container Version ID. */
  containerVersionId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const UndeleteAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerVersionId: Schema.String.pipe(T.HttpPath("containerVersionId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete",
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

export interface RestoreAccountsContainersVersionsRequest {
  /** The GTM Container Version ID. */
  containerVersionId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Account ID. */
  accountId: string;
}

export const RestoreAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersionId: Schema.String.pipe(T.HttpPath("containerVersionId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreAccountsContainersVersionsRequest>;

export type RestoreAccountsContainersVersionsResponse = ContainerVersion;
export const RestoreAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerVersion;

export type RestoreAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version). */
export const restoreAccountsContainersVersions: API.OperationMethod<
  RestoreAccountsContainersVersionsRequest,
  RestoreAccountsContainersVersionsResponse,
  RestoreAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreAccountsContainersVersionsRequest,
  output: RestoreAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersVersionsRequest {
  /** The GTM Container ID. */
  containerId: string;
  /** Retrieve headers only when true. */
  headers?: boolean;
  /** The GTM Account ID. */
  accountId: string;
  /** Also retrieve deleted (archived) versions when true. */
  includeDeleted?: boolean;
}

export const ListAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    headers: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("headers")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    includeDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeDeleted"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersVersionsRequest>;

export type ListAccountsContainersVersionsResponse =
  ListContainerVersionsResponse;
export const ListAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListContainerVersionsResponse;

export type ListAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Container Versions of a GTM Container. */
export const listAccountsContainersVersions: API.OperationMethod<
  ListAccountsContainersVersionsRequest,
  ListAccountsContainersVersionsResponse,
  ListAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersVersionsRequest,
  output: ListAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PublishAccountsContainersVersionsRequest {
  /** The GTM Container Version ID. */
  containerVersionId: string;
  /** When provided, this fingerprint must match the fingerprint of the container version in storage. */
  fingerprint?: string;
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Account ID. */
  accountId: string;
}

export const PublishAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerVersionId: Schema.String.pipe(T.HttpPath("containerVersionId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish",
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

export interface CreateAccountsContainersVersionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: CreateContainerVersionRequestVersionOptions;
}

export const CreateAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(CreateContainerVersionRequestVersionOptions).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersVersionsRequest>;

export type CreateAccountsContainersVersionsResponse =
  CreateContainerVersionResponse;
export const CreateAccountsContainersVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateContainerVersionResponse;

export type CreateAccountsContainersVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Container Version. */
export const createAccountsContainersVersions: API.OperationMethod<
  CreateAccountsContainersVersionsRequest,
  CreateAccountsContainersVersionsResponse,
  CreateAccountsContainersVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersVersionsRequest,
  output: CreateAccountsContainersVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersVersionsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Container Version ID. Specify published to retrieve the currently published version. */
  containerVersionId: string;
}

export const GetAccountsContainersVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    containerVersionId: Schema.String.pipe(T.HttpPath("containerVersionId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}",
    }),
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

export interface GetAccountsContainersVariablesRequest {
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Variable ID. */
  variableId: string;
}

export const GetAccountsContainersVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    variableId: Schema.String.pipe(T.HttpPath("variableId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersVariablesRequest>;

export type GetAccountsContainersVariablesResponse = Variable;
export const GetAccountsContainersVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Variable;

export type GetAccountsContainersVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Variable. */
export const getAccountsContainersVariables: API.OperationMethod<
  GetAccountsContainersVariablesRequest,
  GetAccountsContainersVariablesResponse,
  GetAccountsContainersVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersVariablesRequest,
  output: GetAccountsContainersVariablesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateAccountsContainersVariablesRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Variable;
}

export const CreateAccountsContainersVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Variable).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersVariablesRequest>;

export type CreateAccountsContainersVariablesResponse = Variable;
export const CreateAccountsContainersVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Variable;

export type CreateAccountsContainersVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Variable. */
export const createAccountsContainersVariables: API.OperationMethod<
  CreateAccountsContainersVariablesRequest,
  CreateAccountsContainersVariablesResponse,
  CreateAccountsContainersVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersVariablesRequest,
  output: CreateAccountsContainersVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersVariablesRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const ListAccountsContainersVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersVariablesRequest>;

export type ListAccountsContainersVariablesResponse = ListVariablesResponse;
export const ListAccountsContainersVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVariablesResponse;

export type ListAccountsContainersVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Variables of a Container. */
export const listAccountsContainersVariables: API.OperationMethod<
  ListAccountsContainersVariablesRequest,
  ListAccountsContainersVariablesResponse,
  ListAccountsContainersVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersVariablesRequest,
  output: ListAccountsContainersVariablesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersVariablesRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Variable ID. */
  variableId: string;
  /** When provided, this fingerprint must match the fingerprint of the variable in storage. */
  fingerprint?: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Variable;
}

export const UpdateAccountsContainersVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    variableId: Schema.String.pipe(T.HttpPath("variableId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Variable).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersVariablesRequest>;

export type UpdateAccountsContainersVariablesResponse = Variable;
export const UpdateAccountsContainersVariablesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Variable;

export type UpdateAccountsContainersVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Variable. */
export const updateAccountsContainersVariables: API.OperationMethod<
  UpdateAccountsContainersVariablesRequest,
  UpdateAccountsContainersVariablesResponse,
  UpdateAccountsContainersVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersVariablesRequest,
  output: UpdateAccountsContainersVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsContainersVariablesRequest {
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Variable ID. */
  variableId: string;
}

export const DeleteAccountsContainersVariablesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    variableId: Schema.String.pipe(T.HttpPath("variableId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersVariablesRequest>;

export interface DeleteAccountsContainersVariablesResponse {}
export const DeleteAccountsContainersVariablesResponse: Schema.Schema<DeleteAccountsContainersVariablesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersVariablesResponse>;

export type DeleteAccountsContainersVariablesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Variable. */
export const deleteAccountsContainersVariables: API.OperationMethod<
  DeleteAccountsContainersVariablesRequest,
  DeleteAccountsContainersVariablesResponse,
  DeleteAccountsContainersVariablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersVariablesRequest,
  output: DeleteAccountsContainersVariablesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateAccountsContainersTagsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** Request body */
  body?: Tag;
}

export const CreateAccountsContainersTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    body: Schema.optional(Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateAccountsContainersTagsRequest>;

export type CreateAccountsContainersTagsResponse = Tag;
export const CreateAccountsContainersTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type CreateAccountsContainersTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GTM Tag. */
export const createAccountsContainersTags: API.OperationMethod<
  CreateAccountsContainersTagsRequest,
  CreateAccountsContainersTagsResponse,
  CreateAccountsContainersTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAccountsContainersTagsRequest,
  output: CreateAccountsContainersTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAccountsContainersTagsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Tag ID. */
  tagId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const GetAccountsContainersTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    tagId: Schema.String.pipe(T.HttpPath("tagId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountsContainersTagsRequest>;

export type GetAccountsContainersTagsResponse = Tag;
export const GetAccountsContainersTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type GetAccountsContainersTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GTM Tag. */
export const getAccountsContainersTags: API.OperationMethod<
  GetAccountsContainersTagsRequest,
  GetAccountsContainersTagsResponse,
  GetAccountsContainersTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsContainersTagsRequest,
  output: GetAccountsContainersTagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersTagsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Tag ID. */
  tagId: string;
  /** The GTM Container ID. */
  containerId: string;
  /** When provided, this fingerprint must match the fingerprint of the tag in storage. */
  fingerprint?: string;
  /** Request body */
  body?: Tag;
}

export const UpdateAccountsContainersTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    tagId: Schema.String.pipe(T.HttpPath("tagId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    fingerprint: Schema.optional(Schema.String).pipe(
      T.HttpQuery("fingerprint"),
    ),
    body: Schema.optional(Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersTagsRequest>;

export type UpdateAccountsContainersTagsResponse = Tag;
export const UpdateAccountsContainersTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type UpdateAccountsContainersTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GTM Tag. */
export const updateAccountsContainersTags: API.OperationMethod<
  UpdateAccountsContainersTagsRequest,
  UpdateAccountsContainersTagsResponse,
  UpdateAccountsContainersTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersTagsRequest,
  output: UpdateAccountsContainersTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteAccountsContainersTagsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Tag ID. */
  tagId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const DeleteAccountsContainersTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    tagId: Schema.String.pipe(T.HttpPath("tagId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAccountsContainersTagsRequest>;

export interface DeleteAccountsContainersTagsResponse {}
export const DeleteAccountsContainersTagsResponse: Schema.Schema<DeleteAccountsContainersTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAccountsContainersTagsResponse>;

export type DeleteAccountsContainersTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GTM Tag. */
export const deleteAccountsContainersTags: API.OperationMethod<
  DeleteAccountsContainersTagsRequest,
  DeleteAccountsContainersTagsResponse,
  DeleteAccountsContainersTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAccountsContainersTagsRequest,
  output: DeleteAccountsContainersTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountsContainersTagsRequest {
  /** The GTM Account ID. */
  accountId: string;
  /** The GTM Container ID. */
  containerId: string;
}

export const ListAccountsContainersTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountsContainersTagsRequest>;

export type ListAccountsContainersTagsResponse = ListTagsResponse;
export const ListAccountsContainersTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTagsResponse;

export type ListAccountsContainersTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all GTM Tags of a Container. */
export const listAccountsContainersTags: API.OperationMethod<
  ListAccountsContainersTagsRequest,
  ListAccountsContainersTagsResponse,
  ListAccountsContainersTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountsContainersTagsRequest,
  output: ListAccountsContainersTagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateAccountsContainersReauthorize_environmentsRequest {
  /** The GTM Container ID. */
  containerId: string;
  /** The GTM Environment ID. */
  environmentId: string;
  /** The GTM Account ID. */
  accountId: string;
  /** Request body */
  body?: Environment;
}

export const UpdateAccountsContainersReauthorize_environmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerId: Schema.String.pipe(T.HttpPath("containerId")),
    environmentId: Schema.String.pipe(T.HttpPath("environmentId")),
    accountId: Schema.String.pipe(T.HttpPath("accountId")),
    body: Schema.optional(Environment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountsContainersReauthorize_environmentsRequest>;

export type UpdateAccountsContainersReauthorize_environmentsResponse =
  Environment;
export const UpdateAccountsContainersReauthorize_environmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Environment;

export type UpdateAccountsContainersReauthorize_environmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Re-generates the authorization code for a GTM Environment. */
export const updateAccountsContainersReauthorize_environments: API.OperationMethod<
  UpdateAccountsContainersReauthorize_environmentsRequest,
  UpdateAccountsContainersReauthorize_environmentsResponse,
  UpdateAccountsContainersReauthorize_environmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsContainersReauthorize_environmentsRequest,
  output: UpdateAccountsContainersReauthorize_environmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
