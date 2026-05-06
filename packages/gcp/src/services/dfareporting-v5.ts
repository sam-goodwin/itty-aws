// ==========================================================================
// Campaign Manager 360 API (dfareporting v5)
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
  name: "dfareporting",
  version: "v5",
  rootUrl: "https://dfareporting.googleapis.com/",
  servicePath: "dfareporting/v5/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ChangeLog {
  /** Field name of the object which changed. */
  fieldName?: string;
  /** Object type of the change log. */
  objectType?: string;
  /** User profile name of the user who modified the object. */
  userProfileName?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog". */
  kind?: string;
  /** ID of the user who modified the object. */
  userProfileId?: string;
  /** ID of the object of this change log. The object could be a campaign, placement, ad, or other type. */
  objectId?: string;
  /** Old value of the object field. */
  oldValue?: string;
  /** ID of this change log. */
  id?: string;
  /** New value of the object field. */
  newValue?: string;
  /** Account ID of the modified object. */
  accountId?: string;
  changeTime?: string;
  /** Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId. */
  transactionId?: string;
  /** Subaccount ID of the modified object. */
  subaccountId?: string;
  /** Action which caused the change. */
  action?: string;
}

export const ChangeLog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldName: Schema.optional(Schema.String),
  objectType: Schema.optional(Schema.String),
  userProfileName: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  userProfileId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
  oldValue: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  newValue: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  changeTime: Schema.optional(Schema.String),
  transactionId: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
  action: Schema.optional(Schema.String),
}).annotate({ identifier: "ChangeLog" });

export interface ChangeLogsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse". */
  kind?: string;
  /** Change log collection. */
  changeLogs?: ReadonlyArray<ChangeLog>;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const ChangeLogsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    changeLogs: Schema.optional(Schema.Array(ChangeLog)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ChangeLogsListResponse" });

export interface AudienceSegment {
  /** Name of this audience segment. This is a required field and must be less than 65 characters long. */
  name?: string;
  /** ID of this audience segment. This is a read-only, auto-generated field. */
  id?: string;
  /** Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive. */
  allocation?: number;
}

export const AudienceSegment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  allocation: Schema.optional(Schema.Number),
}).annotate({ identifier: "AudienceSegment" });

export interface AudienceSegmentGroup {
  /** Name of this audience segment group. This is a required field and must be less than 65 characters long. */
  name?: string;
  /** ID of this audience segment group. This is a read-only, auto-generated field. */
  id?: string;
  /** Audience segments assigned to this group. The number of segments must be between 2 and 100. */
  audienceSegments?: ReadonlyArray<AudienceSegment>;
}

export const AudienceSegmentGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  audienceSegments: Schema.optional(Schema.Array(AudienceSegment)),
}).annotate({ identifier: "AudienceSegmentGroup" });

export interface TagData {
  /** Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
  creativeId?: string;
  /** TagData tag format of this tag. */
  format?:
    | "PLACEMENT_TAG_STANDARD"
    | "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
    | "PLACEMENT_TAG_IFRAME_ILAYER"
    | "PLACEMENT_TAG_INTERNAL_REDIRECT"
    | "PLACEMENT_TAG_JAVASCRIPT"
    | "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
    | "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
    | "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
    | "PLACEMENT_TAG_CLICK_COMMANDS"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
    | "PLACEMENT_TAG_TRACKING"
    | "PLACEMENT_TAG_TRACKING_IFRAME"
    | "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
    | "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
    | "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
    | (string & {});
  /** Tag string to record a click. */
  clickTag?: string;
  /** Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
  adId?: string;
  /** Tag string for serving an ad. */
  impressionTag?: string;
}

export const TagData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creativeId: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  clickTag: Schema.optional(Schema.String),
  adId: Schema.optional(Schema.String),
  impressionTag: Schema.optional(Schema.String),
}).annotate({ identifier: "TagData" });

export interface PlacementTag {
  /** Tags generated for this placement. */
  tagDatas?: ReadonlyArray<TagData>;
  /** Placement ID */
  placementId?: string;
}

export const PlacementTag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tagDatas: Schema.optional(Schema.Array(TagData)),
  placementId: Schema.optional(Schema.String),
}).annotate({ identifier: "PlacementTag" });

export interface RequestValue {
  /** Optional. User attribute IDs in the request. Used only when the field type is REMARKETING_VALUE or USER_ATTRIBUTE_ID. */
  userAttributeIds?: ReadonlyArray<string>;
  /** Optional. User attribute IDs in the request that should be excluded. Used only when the field type is REMARKETING_VALUE or USER_ATTRIBUTE_ID. */
  excludeFromUserAttributeIds?: ReadonlyArray<string>;
  /** Optional. Custom key in the request. Used only when the field type is CUSTOM_VALUE. */
  key?: string;
}

export const RequestValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userAttributeIds: Schema.optional(Schema.Array(Schema.String)),
  excludeFromUserAttributeIds: Schema.optional(Schema.Array(Schema.String)),
  key: Schema.optional(Schema.String),
}).annotate({ identifier: "RequestValue" });

export interface DependentFieldValue {
  /** Optional. The field id of the dependent field. */
  fieldId?: number;
  /** Optional. The ID of the element that value's field will match against. */
  elementId?: string;
}

export const DependentFieldValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldId: Schema.optional(Schema.Number),
  elementId: Schema.optional(Schema.String),
}).annotate({ identifier: "DependentFieldValue" });

export interface FieldFilter {
  /** Optional. The request value, only applicable when rhs_value_type is REQUEST. */
  requestValue?: RequestValue;
  /** Optional. The boolean values, only applicable when rhs_value_type is BOOL. */
  boolValue?: boolean;
  /** Optional. Right hand side of the expression. */
  valueType?:
    | "RHS_VALUE_TYPE_UNKNOWN"
    | "STRING"
    | "REQUEST"
    | "BOOL"
    | "DEPENDENT"
    | (string & {});
  /** Optional. The field ID on the left hand side of the expression. */
  fieldId?: number;
  /** Optional. Left hand side of the expression match type. */
  matchType?:
    | "LHS_MATCH_TYPE_UNKNOWN"
    | "EQUALS_OR_UNRESTRICTED"
    | "EQUALS"
    | "UNRESTRICTED"
    | "NOT_EQUALS"
    | (string & {});
  /** Optional. The dependent values, only applicable when rhs_value_type is DEPENDENT. */
  dependentFieldValue?: DependentFieldValue;
  /** Optional. The string value, only applicable when rhs_value_type is STRING. */
  stringValue?: string;
}

export const FieldFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestValue: Schema.optional(RequestValue),
  boolValue: Schema.optional(Schema.Boolean),
  valueType: Schema.optional(Schema.String),
  fieldId: Schema.optional(Schema.Number),
  matchType: Schema.optional(Schema.String),
  dependentFieldValue: Schema.optional(DependentFieldValue),
  stringValue: Schema.optional(Schema.String),
}).annotate({ identifier: "FieldFilter" });

export interface RuleBlock {
  /** Optional. A list of non-auto field filters */
  fieldFilter?: ReadonlyArray<FieldFilter>;
}

export const RuleBlock = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldFilter: Schema.optional(Schema.Array(FieldFilter)),
}).annotate({ identifier: "RuleBlock" });

export interface Region {
  /** Country code of the country to which this region belongs. */
  countryCode?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#region". */
  kind?: string;
  /** DART ID of the country to which this region belongs. */
  countryDartId?: string;
  /** Region code. */
  regionCode?: string;
  /** DART ID of this region. */
  dartId?: string;
  /** Name of this region. */
  name?: string;
}

export const Region = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countryCode: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  countryDartId: Schema.optional(Schema.String),
  regionCode: Schema.optional(Schema.String),
  dartId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Region" });

export interface RemarketingListShare {
  /** Advertisers that the remarketing list is shared with. */
  sharedAdvertiserIds?: ReadonlyArray<string>;
  /** Remarketing list ID. This is a read-only, auto-generated field. */
  remarketingListId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare". */
  kind?: string;
  /** Accounts that the remarketing list is shared with. */
  sharedAccountIds?: ReadonlyArray<string>;
}

export const RemarketingListShare = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sharedAdvertiserIds: Schema.optional(Schema.Array(Schema.String)),
  remarketingListId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  sharedAccountIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RemarketingListShare" });

export interface DimensionValue {
  /** The name of the dimension. */
  dimensionName?: string;
  /** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
  matchType?:
    | "EXACT"
    | "BEGINS_WITH"
    | "CONTAINS"
    | "WILDCARD_EXPRESSION"
    | (string & {});
  /** The value of the dimension. */
  value?: string;
  /** The eTag of this response for caching purposes. */
  etag?: string;
  /** The ID associated with the value if available. */
  id?: string;
  /** The kind of resource this is, in this case dfareporting#dimensionValue. */
  kind?: string;
}

export const DimensionValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dimensionName: Schema.optional(Schema.String),
  matchType: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "DimensionValue" });

export interface CreativeGroup {
  /** Account ID of this creative group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser. */
  name?: string;
  /** Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive. */
  groupNumber?: number;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Subaccount ID of this creative group. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup". */
  kind?: string;
  /** Advertiser ID of this creative group. This is a required field on insertion. */
  advertiserId?: string;
  /** ID of this creative group. This is a read-only, auto-generated field. */
  id?: string;
}

export const CreativeGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  groupNumber: Schema.optional(Schema.Number),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  subaccountId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeGroup" });

export interface DfpSettings {
  /** Whether this directory site accepts programmatic placements. */
  programmaticPlacementAccepted?: boolean;
  /** Whether this directory site accepts publisher-paid tags. */
  pubPaidPlacementAccepted?: boolean;
  /** Whether this directory site is available only via Publisher Portal. */
  publisherPortalOnly?: boolean;
  /** Ad Manager network code for this directory site. */
  dfpNetworkCode?: string;
  /** Ad Manager network name for this directory site. */
  dfpNetworkName?: string;
}

export const DfpSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  programmaticPlacementAccepted: Schema.optional(Schema.Boolean),
  pubPaidPlacementAccepted: Schema.optional(Schema.Boolean),
  publisherPortalOnly: Schema.optional(Schema.Boolean),
  dfpNetworkCode: Schema.optional(Schema.String),
  dfpNetworkName: Schema.optional(Schema.String),
}).annotate({ identifier: "DfpSettings" });

export interface DirectorySiteSettings {
  /** Whether this site accepts interstitial ads. */
  interstitialPlacementAccepted?: boolean;
  /** Whether this site accepts in-stream video ads. */
  instreamVideoPlacementAccepted?: boolean;
  /** Directory site Ad Manager settings. */
  dfpSettings?: DfpSettings;
  /** Whether this directory site has disabled active view creatives. */
  activeViewOptOut?: boolean;
}

export const DirectorySiteSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  interstitialPlacementAccepted: Schema.optional(Schema.Boolean),
  instreamVideoPlacementAccepted: Schema.optional(Schema.Boolean),
  dfpSettings: Schema.optional(DfpSettings),
  activeViewOptOut: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DirectorySiteSettings" });

export interface DirectorySite {
  /** URL of this directory site. */
  url?: string;
  /** Output only. Default publisher specification ID of video placements under this directory site. Possible values are: * `1`, Hulu * `2`, NBC * `3`, CBS * `4`, CBS Desktop * `5`, Discovery * `6`, VEVO HD * `7`, VEVO Vertical * `8`, Fox * `9`, CW Network * `10`, Disney * `11`, IGN * `12`, NFL.com * `13`, Turner Broadcasting * `14`, Tubi on Fox * `15`, Hearst Corporation * `16`, Twitch Desktop * `17`, ABC * `18`, Univision * `19`, MLB.com * `20`, MLB.com Mobile * `21`, MLB.com OTT * `22`, Polsat * `23`, TVN * `24`, Mediaset * `25`, Antena 3 * `26`, Mediamond * `27`, Sky Italia * `28`, Tubi on CBS * `29`, Spotify * `30`, Paramount * `31`, Max */
  publisherSpecificationId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite". */
  kind?: string;
  /** Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE" */
  inpageTagFormats?: ReadonlyArray<
    | "STANDARD"
    | "IFRAME_JAVASCRIPT_INPAGE"
    | "INTERNAL_REDIRECT_INPAGE"
    | "JAVASCRIPT_INPAGE"
    | (string & {})
  >;
  /** Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL" */
  interstitialTagFormats?: ReadonlyArray<
    | "IFRAME_JAVASCRIPT_INTERSTITIAL"
    | "INTERNAL_REDIRECT_INTERSTITIAL"
    | "JAVASCRIPT_INTERSTITIAL"
    | (string & {})
  >;
  /** Name of this directory site. */
  name?: string;
  /** Directory site settings. */
  settings?: DirectorySiteSettings;
  /** ID of this directory site. This is a read-only, auto-generated field. */
  id?: string;
  /** Dimension value for the ID of this directory site. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
}

export const DirectorySite = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  publisherSpecificationId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  inpageTagFormats: Schema.optional(Schema.Array(Schema.String)),
  interstitialTagFormats: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  settings: Schema.optional(DirectorySiteSettings),
  id: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
}).annotate({ identifier: "DirectorySite" });

export interface DirectorySitesListResponse {
  /** Directory site collection. */
  directorySites?: ReadonlyArray<DirectorySite>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const DirectorySitesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directorySites: Schema.optional(Schema.Array(DirectorySite)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectorySitesListResponse" });

export interface ClickThroughUrl {
  /** ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false. */
  landingPageId?: string;
  /** Whether the campaign default landing page is used. */
  defaultLandingPage?: boolean;
  /** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field. */
  computedClickThroughUrl?: string;
  /** Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset. */
  customClickThroughUrl?: string;
}

export const ClickThroughUrl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  landingPageId: Schema.optional(Schema.String),
  defaultLandingPage: Schema.optional(Schema.Boolean),
  computedClickThroughUrl: Schema.optional(Schema.String),
  customClickThroughUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "ClickThroughUrl" });

export interface CompanionClickThroughOverride {
  /** ID of the creative for this companion click-through override. */
  creativeId?: string;
  /** Click-through URL of this companion click-through override. */
  clickThroughUrl?: ClickThroughUrl;
}

export const CompanionClickThroughOverride =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeId: Schema.optional(Schema.String),
    clickThroughUrl: Schema.optional(ClickThroughUrl),
  }).annotate({ identifier: "CompanionClickThroughOverride" });

export interface RichMediaExitOverride {
  /** Click-through URL of this rich media exit override. Applicable if the enabled field is set to true. */
  clickThroughUrl?: ClickThroughUrl;
  /** ID for the override to refer to a specific exit in the creative. */
  exitId?: string;
  /** Whether to use the clickThroughUrl. If false, the creative-level exit will be used. */
  enabled?: boolean;
}

export const RichMediaExitOverride = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clickThroughUrl: Schema.optional(ClickThroughUrl),
  exitId: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "RichMediaExitOverride" });

export interface CreativeGroupAssignment {
  /** ID of the creative group to be assigned. */
  creativeGroupId?: string;
  /** Creative group number of the creative group assignment. */
  creativeGroupNumber?:
    | "CREATIVE_GROUP_ONE"
    | "CREATIVE_GROUP_TWO"
    | (string & {});
}

export const CreativeGroupAssignment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeGroupId: Schema.optional(Schema.String),
    creativeGroupNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeGroupAssignment" });

export interface CreativeAssignment {
  /** Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO. */
  applyEventTags?: boolean;
  /** Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1. */
  weight?: number;
  /** Companion creative overrides for this creative assignment. Applicable to video ads. */
  companionCreativeOverrides?: ReadonlyArray<CompanionClickThroughOverride>;
  /** Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive. */
  sequence?: number;
  /** Whether this creative assignment is active. When true, the creative will be included in the ad's rotation. */
  active?: boolean;
  /** Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR */
  richMediaExitOverrides?: ReadonlyArray<RichMediaExitOverride>;
  /** Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslCompliant?: boolean;
  startTime?: string;
  /** Dimension value for the ID of the creative. This is a read-only, auto-generated field. */
  creativeIdDimensionValue?: DimensionValue;
  /** Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments. */
  creativeGroupAssignments?: ReadonlyArray<CreativeGroupAssignment>;
  /** Click-through URL of the creative assignment. */
  clickThroughUrl?: ClickThroughUrl;
  endTime?: string;
  /** ID of the creative to be assigned. This is a required field. */
  creativeId?: string;
}

export const CreativeAssignment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applyEventTags: Schema.optional(Schema.Boolean),
  weight: Schema.optional(Schema.Number),
  companionCreativeOverrides: Schema.optional(
    Schema.Array(CompanionClickThroughOverride),
  ),
  sequence: Schema.optional(Schema.Number),
  active: Schema.optional(Schema.Boolean),
  richMediaExitOverrides: Schema.optional(Schema.Array(RichMediaExitOverride)),
  sslCompliant: Schema.optional(Schema.Boolean),
  startTime: Schema.optional(Schema.String),
  creativeIdDimensionValue: Schema.optional(DimensionValue),
  creativeGroupAssignments: Schema.optional(
    Schema.Array(CreativeGroupAssignment),
  ),
  clickThroughUrl: Schema.optional(ClickThroughUrl),
  endTime: Schema.optional(Schema.String),
  creativeId: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeAssignment" });

export interface CreativeRotation {
  /** Type of creative rotation. Can be used to specify whether to use sequential or random rotation. */
  type?:
    | "CREATIVE_ROTATION_TYPE_SEQUENTIAL"
    | "CREATIVE_ROTATION_TYPE_RANDOM"
    | (string & {});
  /** Creative assignments in this creative rotation. */
  creativeAssignments?: ReadonlyArray<CreativeAssignment>;
  /** Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad. */
  creativeOptimizationConfigurationId?: string;
  /** Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM. */
  weightCalculationStrategy?:
    | "WEIGHT_STRATEGY_EQUAL"
    | "WEIGHT_STRATEGY_CUSTOM"
    | "WEIGHT_STRATEGY_HIGHEST_CTR"
    | "WEIGHT_STRATEGY_OPTIMIZED"
    | (string & {});
}

export const CreativeRotation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  creativeAssignments: Schema.optional(Schema.Array(CreativeAssignment)),
  creativeOptimizationConfigurationId: Schema.optional(Schema.String),
  weightCalculationStrategy: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeRotation" });

export interface FloodlightActivityDynamicTag {
  /** ID of this dynamic tag. This is a read-only, auto-generated field. */
  id?: string;
  /** Tag code. */
  tag?: string;
  /** Name of this tag. */
  name?: string;
}

export const FloodlightActivityDynamicTag =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivityDynamicTag" });

export interface FloodlightActivityPublisherDynamicTag {
  /** Site ID of this dynamic tag. */
  siteId?: string;
  /** Whether this tag is applicable only for view-throughs. */
  viewThrough?: boolean;
  /** Dynamic floodlight tag. */
  dynamicTag?: FloodlightActivityDynamicTag;
  /** Whether this tag is applicable only for click-throughs. */
  clickThrough?: boolean;
  /** Dimension value for the ID of the site. This is a read-only, auto-generated field. */
  siteIdDimensionValue?: DimensionValue;
  /** Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated. */
  directorySiteId?: string;
}

export const FloodlightActivityPublisherDynamicTag =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteId: Schema.optional(Schema.String),
    viewThrough: Schema.optional(Schema.Boolean),
    dynamicTag: Schema.optional(FloodlightActivityDynamicTag),
    clickThrough: Schema.optional(Schema.Boolean),
    siteIdDimensionValue: Schema.optional(DimensionValue),
    directorySiteId: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivityPublisherDynamicTag" });

export interface FloodlightActivity {
  /** Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING. */
  cacheBustingType?:
    | "JAVASCRIPT"
    | "ACTIVE_SERVER_PAGE"
    | "JSP"
    | "PHP"
    | "COLD_FUSION"
    | (string & {});
  /** Account ID of this floodlight activity. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser. */
  advertiserId?: string;
  /** The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information. */
  status?:
    | "ACTIVE"
    | "ARCHIVED_AND_DISABLED"
    | "ARCHIVED"
    | "DISABLED_POLICY"
    | (string & {});
  /** Whether the activity is enabled for attribution. */
  attributionEnabled?: boolean;
  /** Type of the associated floodlight activity group. This is a read-only field. */
  floodlightActivityGroupType?: "COUNTER" | "SALE" | (string & {});
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags. */
  sslCompliant?: boolean;
  /** List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive. */
  userDefinedVariableTypes?: ReadonlyArray<
    | "U1"
    | "U2"
    | "U3"
    | "U4"
    | "U5"
    | "U6"
    | "U7"
    | "U8"
    | "U9"
    | "U10"
    | "U11"
    | "U12"
    | "U13"
    | "U14"
    | "U15"
    | "U16"
    | "U17"
    | "U18"
    | "U19"
    | "U20"
    | "U21"
    | "U22"
    | "U23"
    | "U24"
    | "U25"
    | "U26"
    | "U27"
    | "U28"
    | "U29"
    | "U30"
    | "U31"
    | "U32"
    | "U33"
    | "U34"
    | "U35"
    | "U36"
    | "U37"
    | "U38"
    | "U39"
    | "U40"
    | "U41"
    | "U42"
    | "U43"
    | "U44"
    | "U45"
    | "U46"
    | "U47"
    | "U48"
    | "U49"
    | "U50"
    | "U51"
    | "U52"
    | "U53"
    | "U54"
    | "U55"
    | "U56"
    | "U57"
    | "U58"
    | "U59"
    | "U60"
    | "U61"
    | "U62"
    | "U63"
    | "U64"
    | "U65"
    | "U66"
    | "U67"
    | "U68"
    | "U69"
    | "U70"
    | "U71"
    | "U72"
    | "U73"
    | "U74"
    | "U75"
    | "U76"
    | "U77"
    | "U78"
    | "U79"
    | "U80"
    | "U81"
    | "U82"
    | "U83"
    | "U84"
    | "U85"
    | "U86"
    | "U87"
    | "U88"
    | "U89"
    | "U90"
    | "U91"
    | "U92"
    | "U93"
    | "U94"
    | "U95"
    | "U96"
    | "U97"
    | "U98"
    | "U99"
    | "U100"
    | (string & {})
  >;
  /** The type of Floodlight tag this activity will generate. This is a required field. */
  floodlightTagType?: "IFRAME" | "IMAGE" | "GLOBAL_SITE_TAG" | (string & {});
  /** Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes. */
  name?: string;
  /** Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion. */
  tagString?: string;
  /** Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field. */
  floodlightConfigurationIdDimensionValue?: DimensionValue;
  /** ID of this floodlight activity. This is a read-only, auto-generated field. */
  id?: string;
  /** General notes or implementation instructions for the tag. */
  notes?: string;
  /** Name of the associated floodlight activity group. This is a read-only field. */
  floodlightActivityGroupName?: string;
  /** Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration. */
  floodlightConfigurationId?: string;
  /** Subaccount ID of this floodlight activity. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Publisher dynamic floodlight tags. */
  publisherTags?: ReadonlyArray<FloodlightActivityPublisherDynamicTag>;
  /** Floodlight activity group ID of this floodlight activity. This is a required field. */
  floodlightActivityGroupId?: string;
  /** Required. The conversion category of the activity. */
  conversionCategory?:
    | "CONVERSION_CATEGORY_DEFAULT"
    | "CONVERSION_CATEGORY_PURCHASE"
    | "CONVERSION_CATEGORY_SIGNUP"
    | "CONVERSION_CATEGORY_PAGE_VIEW"
    | "CONVERSION_CATEGORY_DOWNLOAD"
    | "CONVERSION_CATEGORY_BOOM_EVENT"
    | "CONVERSION_CATEGORY_ADD_TO_CART"
    | "CONVERSION_CATEGORY_BEGIN_CHECKOUT"
    | "CONVERSION_CATEGORY_SUBSCRIBE_PAID"
    | "CONVERSION_CATEGORY_SUBSCRIBE_FREE"
    | "CONVERSION_CATEGORY_PHONE_CALL_LEAD"
    | "CONVERSION_CATEGORY_IMPORTED_LEAD"
    | "CONVERSION_CATEGORY_SUBMIT_LEAD_FORM"
    | "CONVERSION_CATEGORY_BOOK_APPOINTMENT"
    | "CONVERSION_CATEGORY_REQUEST_QUOTE"
    | "CONVERSION_CATEGORY_GET_DIRECTIONS"
    | "CONVERSION_CATEGORY_OUTBOUND_CLICK"
    | "CONVERSION_CATEGORY_CONTACT"
    | "CONVERSION_CATEGORY_VIEW_KEY_PAGE"
    | "CONVERSION_CATEGORY_ENGAGEMENT"
    | "CONVERSION_CATEGORY_STORE_VISIT"
    | "CONVERSION_CATEGORY_STORE_SALE"
    | "CONVERSION_CATEGORY_QUALIFIED_LEAD"
    | "CONVERSION_CATEGORY_CONVERTED_LEAD"
    | "CONVERSION_CATEGORY_IN_APP_AD_REVENUE"
    | "CONVERSION_CATEGORY_MESSAGE_LEAD"
    | (string & {});
  /** URL where this tag will be deployed. If specified, must be less than 256 characters long. */
  expectedUrl?: string;
  /** Whether this floodlight activity must be SSL-compliant. */
  sslRequired?: boolean;
  /** Tag string of the associated floodlight activity group. This is a read-only field. */
  floodlightActivityGroupTagString?: string;
  /** Dynamic floodlight tags. */
  defaultTags?: ReadonlyArray<FloodlightActivityDynamicTag>;
  /** Counting method for conversions for this floodlight activity. This is a required field. */
  countingMethod?:
    | "STANDARD_COUNTING"
    | "UNIQUE_COUNTING"
    | "SESSION_COUNTING"
    | "TRANSACTIONS_COUNTING"
    | "ITEMS_SOLD_COUNTING"
    | (string & {});
  /** Whether this tag should use SSL. */
  secure?: boolean;
  /** Tag format type for the floodlight activity. If left blank, the tag format will default to HTML. */
  tagFormat?: "HTML" | "XHTML" | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity". */
  kind?: string;
}

export const FloodlightActivity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cacheBustingType: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  attributionEnabled: Schema.optional(Schema.Boolean),
  floodlightActivityGroupType: Schema.optional(Schema.String),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  idDimensionValue: Schema.optional(DimensionValue),
  sslCompliant: Schema.optional(Schema.Boolean),
  userDefinedVariableTypes: Schema.optional(Schema.Array(Schema.String)),
  floodlightTagType: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  tagString: Schema.optional(Schema.String),
  floodlightConfigurationIdDimensionValue: Schema.optional(DimensionValue),
  id: Schema.optional(Schema.String),
  notes: Schema.optional(Schema.String),
  floodlightActivityGroupName: Schema.optional(Schema.String),
  floodlightConfigurationId: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
  publisherTags: Schema.optional(
    Schema.Array(FloodlightActivityPublisherDynamicTag),
  ),
  floodlightActivityGroupId: Schema.optional(Schema.String),
  conversionCategory: Schema.optional(Schema.String),
  expectedUrl: Schema.optional(Schema.String),
  sslRequired: Schema.optional(Schema.Boolean),
  floodlightActivityGroupTagString: Schema.optional(Schema.String),
  defaultTags: Schema.optional(Schema.Array(FloodlightActivityDynamicTag)),
  countingMethod: Schema.optional(Schema.String),
  secure: Schema.optional(Schema.Boolean),
  tagFormat: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "FloodlightActivity" });

export interface FloodlightActivitiesListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Floodlight activity collection. */
  floodlightActivities?: ReadonlyArray<FloodlightActivity>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse". */
  kind?: string;
}

export const FloodlightActivitiesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    floodlightActivities: Schema.optional(Schema.Array(FloodlightActivity)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivitiesListResponse" });

export interface IngestionStatus {
  /** Output only. The number of rows with errors in the feed. */
  numRowsWithErrors?: string;
  /** Output only. The number of active rows in the feed. */
  numActiveRows?: string;
  /** Output only. The total number of rows in the feed. */
  numRowsTotal?: string;
  /** Output only. The total number of warnings in the feed. */
  numWarningsTotal?: string;
  /** Output only. The number of rows processed in the feed. */
  numRowsProcessed?: string;
}

export const IngestionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  numRowsWithErrors: Schema.optional(Schema.String),
  numActiveRows: Schema.optional(Schema.String),
  numRowsTotal: Schema.optional(Schema.String),
  numWarningsTotal: Schema.optional(Schema.String),
  numRowsProcessed: Schema.optional(Schema.String),
}).annotate({ identifier: "IngestionStatus" });

export interface PlacementSingleConversionDomain {
  conversionDomainValue?: string;
  conversionDomainId?: string;
}

export const PlacementSingleConversionDomain =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionDomainValue: Schema.optional(Schema.String),
    conversionDomainId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementSingleConversionDomain" });

export interface PlacementConversionDomainOverride {
  conversionDomains?: ReadonlyArray<PlacementSingleConversionDomain>;
}

export const PlacementConversionDomainOverride =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionDomains: Schema.optional(
      Schema.Array(PlacementSingleConversionDomain),
    ),
  }).annotate({ identifier: "PlacementConversionDomainOverride" });

export interface CreativeField {
  /** Subaccount ID of this creative field. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Account ID of this creative field. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of this creative field. This is a required field on insertion. */
  advertiserId?: string;
  /** ID of this creative field. This is a read-only, auto-generated field. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField". */
  kind?: string;
}

export const CreativeField = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subaccountId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  advertiserId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeField" });

export interface TranscodeSetting {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting". */
  kind?: string;
  /** Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats. */
  enabledVideoFormats?: ReadonlyArray<number>;
}

export const TranscodeSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  enabledVideoFormats: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "TranscodeSetting" });

export interface Size {
  /** Width of this size. Acceptable values are 0 to 32767, inclusive. */
  width?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
  kind?: string;
  /** ID of this size. This is a read-only, auto-generated field. */
  id?: string;
  /** Height of this size. Acceptable values are 0 to 32767, inclusive. */
  height?: number;
  /** IAB standard size. This is a read-only, auto-generated field. */
  iab?: boolean;
}

export const Size = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  width: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  height: Schema.optional(Schema.Number),
  iab: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Size" });

export interface ObaIcon {
  /** OBA icon size. */
  size?: Size;
  /** OBA icon y coordinate position. Accepted values are top or bottom. */
  yPosition?: string;
  /** OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more */
  resourceUrl?: string;
  /** URL to redirect to when an OBA icon is clicked. */
  iconClickThroughUrl?: string;
  /** URL to track click when an OBA icon is clicked. */
  iconClickTrackingUrl?: string;
  /** OBA icon x coordinate position. Accepted values are left or right. */
  xPosition?: string;
  /** Identifies the industry initiative that the icon supports. For example, AdChoices. */
  program?: string;
  /** URL to track view when an OBA icon is clicked. */
  iconViewTrackingUrl?: string;
}

export const ObaIcon = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  size: Schema.optional(Size),
  yPosition: Schema.optional(Schema.String),
  resourceUrl: Schema.optional(Schema.String),
  iconClickThroughUrl: Schema.optional(Schema.String),
  iconClickTrackingUrl: Schema.optional(Schema.String),
  xPosition: Schema.optional(Schema.String),
  program: Schema.optional(Schema.String),
  iconViewTrackingUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "ObaIcon" });

export interface VideoOffset {
  /** Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive. */
  offsetPercentage?: number;
  /** Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive. */
  offsetSeconds?: number;
}

export const VideoOffset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offsetPercentage: Schema.optional(Schema.Number),
  offsetSeconds: Schema.optional(Schema.Number),
}).annotate({ identifier: "VideoOffset" });

export interface SkippableSetting {
  /** Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable is true. */
  skipOffset?: VideoOffset;
  /** Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true. */
  progressOffset?: VideoOffset;
  /** Whether the user can skip creatives served to this placement. */
  skippable?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting". */
  kind?: string;
}

export const SkippableSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  skipOffset: Schema.optional(VideoOffset),
  progressOffset: Schema.optional(VideoOffset),
  skippable: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "SkippableSetting" });

export interface CompanionSetting {
  /** Whether companions are disabled for this placement. */
  companionsDisabled?: boolean;
  /** Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes. */
  enabledSizes?: ReadonlyArray<Size>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting". */
  kind?: string;
  /** Whether to serve only static images as companions. */
  imageOnly?: boolean;
}

export const CompanionSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  companionsDisabled: Schema.optional(Schema.Boolean),
  enabledSizes: Schema.optional(Schema.Array(Size)),
  kind: Schema.optional(Schema.String),
  imageOnly: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "CompanionSetting" });

export interface VideoSettings {
  /** Duration of a video placement in seconds. */
  durationSeconds?: number;
  /** Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level transcode settings will be overridden. */
  transcodeSettings?: TranscodeSetting;
  /** Settings for the OBA icon of video creatives served to this placement. If this object is provided, the creative-level OBA settings will be overridden. */
  obaSettings?: ObaIcon;
  /** Whether OBA icons are enabled for this placement. */
  obaEnabled?: boolean;
  /** Settings for the skippability of video creatives served to this placement. If this object is provided, the creative-level skippable settings will be overridden. */
  skippableSettings?: SkippableSetting;
  /** Publisher specification ID of a video placement. Possible values are: * `1`, Hulu * `2`, NBC * `3`, CBS * `4`, CBS Desktop * `5`, Discovery * `6`, VEVO HD * `7`, VEVO Vertical * `8`, Fox * `9`, CW Network * `10`, Disney * `11`, IGN * `12`, NFL.com * `13`, Turner Broadcasting * `14`, Tubi on Fox * `15`, Hearst Corporation * `16`, Twitch Desktop * `17`, ABC * `18`, Univision * `19`, MLB.com * `20`, MLB.com Mobile * `21`, MLB.com OTT * `22`, Polsat * `23`, TVN * `24`, Mediaset * `25`, Antena 3 * `26`, Mediamond * `27`, Sky Italia * `28`, Tubi on CBS * `29`, Spotify * `30`, Paramount * `31`, Max */
  publisherSpecificationId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings". */
  kind?: string;
  /** Settings for the companion creatives of video creatives served to this placement. */
  companionSettings?: CompanionSetting;
  /** Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation. */
  orientation?: "ANY" | "LANDSCAPE" | "PORTRAIT" | (string & {});
}

export const VideoSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  durationSeconds: Schema.optional(Schema.Number),
  transcodeSettings: Schema.optional(TranscodeSetting),
  obaSettings: Schema.optional(ObaIcon),
  obaEnabled: Schema.optional(Schema.Boolean),
  skippableSettings: Schema.optional(SkippableSetting),
  publisherSpecificationId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  companionSettings: Schema.optional(CompanionSetting),
  orientation: Schema.optional(Schema.String),
}).annotate({ identifier: "VideoSettings" });

export interface FsCommand {
  /** Width of the window. */
  windowWidth?: number;
  /** Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
  top?: number;
  /** Height of the window. */
  windowHeight?: number;
  /** Position in the browser where the window will open. */
  positionOption?: "CENTERED" | "DISTANCE_FROM_TOP_LEFT_CORNER" | (string & {});
  /** Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
  left?: number;
}

export const FsCommand = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  windowWidth: Schema.optional(Schema.Number),
  top: Schema.optional(Schema.Number),
  windowHeight: Schema.optional(Schema.Number),
  positionOption: Schema.optional(Schema.String),
  left: Schema.optional(Schema.Number),
}).annotate({ identifier: "FsCommand" });

export interface SiteTranscodeSetting {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting". */
  kind?: string;
  /** Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats. */
  enabledVideoFormats?: ReadonlyArray<number>;
}

export const SiteTranscodeSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  enabledVideoFormats: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "SiteTranscodeSetting" });

export interface ConversionError {
  /** A description of the error. */
  message?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError". */
  kind?: string;
  /** The error code. */
  code?:
    | "INVALID_ARGUMENT"
    | "INTERNAL"
    | "PERMISSION_DENIED"
    | "NOT_FOUND"
    | (string & {});
}

export const ConversionError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "ConversionError" });

export interface CartDataItem {
  /** Number of items sold. This is a required field. */
  quantity?: number;
  /** Unit price excluding tax, shipping, and any transaction level discounts. Interpreted in CM360 Floodlight config parent advertiser's currency code. This is a required field. */
  unitPrice?: number;
  /** The shopping id of the item. Must be equal to the Merchant Center product identifier. This is a required field. */
  itemId?: string;
}

export const CartDataItem = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  quantity: Schema.optional(Schema.Number),
  unitPrice: Schema.optional(Schema.Number),
  itemId: Schema.optional(Schema.String),
}).annotate({ identifier: "CartDataItem" });

export interface CartData {
  /** The feed labels associated with the feed where your items are uploaded. For more information, please refer to ​​ https://support.google.com/merchants/answer/12453549. Providing the feed label reduces ambiguity in identifying the right offer details. */
  merchantFeedLabel?: string;
  /** The Merchant Center ID where the items are uploaded. Providing Merchant Center ID reduces ambiguity in identifying the right offer details. */
  merchantId?: string;
  /** The language associated with the feed where your items are uploaded. Use ISO 639-1 language codes. Providing the feed language reduces ambiguity in identifying the right offer details. */
  merchantFeedLanguage?: string;
  /** Data of the items purchased. */
  items?: ReadonlyArray<CartDataItem>;
}

export const CartData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  merchantFeedLabel: Schema.optional(Schema.String),
  merchantId: Schema.optional(Schema.String),
  merchantFeedLanguage: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(CartDataItem)),
}).annotate({ identifier: "CartData" });

export interface CustomFloodlightVariable {
  /** The type of custom floodlight variable to supply a value for. These map to the "u[1-100]=" in the tags. */
  type?:
    | "U1"
    | "U2"
    | "U3"
    | "U4"
    | "U5"
    | "U6"
    | "U7"
    | "U8"
    | "U9"
    | "U10"
    | "U11"
    | "U12"
    | "U13"
    | "U14"
    | "U15"
    | "U16"
    | "U17"
    | "U18"
    | "U19"
    | "U20"
    | "U21"
    | "U22"
    | "U23"
    | "U24"
    | "U25"
    | "U26"
    | "U27"
    | "U28"
    | "U29"
    | "U30"
    | "U31"
    | "U32"
    | "U33"
    | "U34"
    | "U35"
    | "U36"
    | "U37"
    | "U38"
    | "U39"
    | "U40"
    | "U41"
    | "U42"
    | "U43"
    | "U44"
    | "U45"
    | "U46"
    | "U47"
    | "U48"
    | "U49"
    | "U50"
    | "U51"
    | "U52"
    | "U53"
    | "U54"
    | "U55"
    | "U56"
    | "U57"
    | "U58"
    | "U59"
    | "U60"
    | "U61"
    | "U62"
    | "U63"
    | "U64"
    | "U65"
    | "U66"
    | "U67"
    | "U68"
    | "U69"
    | "U70"
    | "U71"
    | "U72"
    | "U73"
    | "U74"
    | "U75"
    | "U76"
    | "U77"
    | "U78"
    | "U79"
    | "U80"
    | "U81"
    | "U82"
    | "U83"
    | "U84"
    | "U85"
    | "U86"
    | "U87"
    | "U88"
    | "U89"
    | "U90"
    | "U91"
    | "U92"
    | "U93"
    | "U94"
    | "U95"
    | "U96"
    | "U97"
    | "U98"
    | "U99"
    | "U100"
    | (string & {});
  /** The value of the custom floodlight variable. The length of string must not exceed 100 characters. */
  value?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable". */
  kind?: string;
}

export const CustomFloodlightVariable =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomFloodlightVariable" });

export interface OfflineUserAddressInfo {
  /** First name of the user, which is hashed as SHA-256 after normalized (Lowercase all characters; Remove any extra spaces before, after, and in between). */
  hashedFirstName?: string;
  /** Postal code of the user's address. */
  postalCode?: string;
  /** Last name of the user, which is hashed as SHA-256 after normalized (lower case only and no punctuation). */
  hashedLastName?: string;
  /** City of the address. */
  city?: string;
  /** The street address of the user hashed using SHA-256 hash function after normalization (lower case only). */
  hashedStreetAddress?: string;
  /** State code of the address. */
  state?: string;
  /** 2-letter country code in ISO-3166-1 alpha-2 of the user's address. */
  countryCode?: string;
}

export const OfflineUserAddressInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hashedFirstName: Schema.optional(Schema.String),
    postalCode: Schema.optional(Schema.String),
    hashedLastName: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
    hashedStreetAddress: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
  },
).annotate({ identifier: "OfflineUserAddressInfo" });

export interface UserIdentifier {
  /** Hashed email address using SHA-256 hash function after normalization. */
  hashedEmail?: string;
  /** Address information. */
  addressInfo?: OfflineUserAddressInfo;
  /** Hashed phone number using SHA-256 hash function after normalization (E164 standard). */
  hashedPhoneNumber?: string;
}

export const UserIdentifier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hashedEmail: Schema.optional(Schema.String),
  addressInfo: Schema.optional(OfflineUserAddressInfo),
  hashedPhoneNumber: Schema.optional(Schema.String),
}).annotate({ identifier: "UserIdentifier" });

export interface Conversion {
  /** A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid dclid, and impressionId. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
  encryptedUserIdCandidates?: ReadonlyArray<string>;
  /** The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserId orencryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid or impressionIdis a required field. */
  matchId?: string;
  /** The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid or impressionId is a required field. */
  gclid?: string;
  /** Floodlight Configuration ID of this conversion. This is a required field. */
  floodlightConfigurationId?: string;
  /** The value of the conversion. Interpreted in CM360 Floodlight config parent advertiser's currency code. This is a required field. */
  value?: number;
  /** Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing. */
  limitAdTracking?: boolean;
  /** The impression ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, and gclid. One of these identifiers must be set. */
  impressionId?: string;
  /** Floodlight Activity ID of this conversion. This is a required field. */
  floodlightActivityId?: string;
  /** The quantity of the conversion. This is a required field. */
  quantity?: string;
  /** The cart data associated with this conversion. */
  cartData?: CartData;
  /** Custom floodlight variables. */
  customVariables?: ReadonlyArray<CustomFloodlightVariable>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion". */
  kind?: string;
  /** This represents consent for ad user data. */
  adUserDataConsent?: "GRANTED" | "DENIED" | (string & {});
  /** The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field. */
  ordinal?: string;
  /** The timestamp of conversion, in Unix epoch micros. This is a required field. */
  timestampMicros?: string;
  /** Whether this particular request may come from a user under the age of 13, under COPPA compliance. */
  childDirectedTreatment?: boolean;
  /** The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid or impressionId is a required field. */
  mobileDeviceId?: string;
  /** The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or impressionId is a required field. */
  dclid?: string;
  /** Whether the conversion was for a non personalized ad. */
  nonPersonalizedAd?: boolean;
  /** Session attributes for the conversion, encoded as based64 bytes. This field may only be used when calling batchinsert; it is not supported by batchupdate. */
  sessionAttributesEncoded?: string;
  /** The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
  encryptedUserId?: string;
  /** Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR). */
  treatmentForUnderage?: boolean;
  /** The user identifiers to enhance the conversion. The maximum number of user identifiers for each conversion is 5. */
  userIdentifiers?: ReadonlyArray<UserIdentifier>;
}

export const Conversion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  encryptedUserIdCandidates: Schema.optional(Schema.Array(Schema.String)),
  matchId: Schema.optional(Schema.String),
  gclid: Schema.optional(Schema.String),
  floodlightConfigurationId: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
  limitAdTracking: Schema.optional(Schema.Boolean),
  impressionId: Schema.optional(Schema.String),
  floodlightActivityId: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.String),
  cartData: Schema.optional(CartData),
  customVariables: Schema.optional(Schema.Array(CustomFloodlightVariable)),
  kind: Schema.optional(Schema.String),
  adUserDataConsent: Schema.optional(Schema.String),
  ordinal: Schema.optional(Schema.String),
  timestampMicros: Schema.optional(Schema.String),
  childDirectedTreatment: Schema.optional(Schema.Boolean),
  mobileDeviceId: Schema.optional(Schema.String),
  dclid: Schema.optional(Schema.String),
  nonPersonalizedAd: Schema.optional(Schema.Boolean),
  sessionAttributesEncoded: Schema.optional(Schema.String),
  encryptedUserId: Schema.optional(Schema.String),
  treatmentForUnderage: Schema.optional(Schema.Boolean),
  userIdentifiers: Schema.optional(Schema.Array(UserIdentifier)),
}).annotate({ identifier: "Conversion" });

export interface ConversionStatus {
  /** A list of errors related to this conversion. */
  errors?: ReadonlyArray<ConversionError>;
  /** The original conversion that was inserted or updated. */
  conversion?: Conversion;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus". */
  kind?: string;
}

export const ConversionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errors: Schema.optional(Schema.Array(ConversionError)),
  conversion: Schema.optional(Conversion),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "ConversionStatus" });

export interface ConversionsBatchUpdateResponse {
  /** Indicates that some or all conversions failed to update. */
  hasFailures?: boolean;
  /** The update status of each conversion. Statuses are returned in the same order that conversions are updated. */
  status?: ReadonlyArray<ConversionStatus>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse". */
  kind?: string;
}

export const ConversionsBatchUpdateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasFailures: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Array(ConversionStatus)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionsBatchUpdateResponse" });

export interface TagSetting {
  /** Whether static landing page URLs should be included in the tags. New placements will default to the value set on their site. */
  includeClickThroughUrls?: boolean;
  /** Optional. Indicates that the unescapedlpurl macro should be included in the tag for the static landing page. New placements will default to the value set on their site. */
  includeUnescapedlpurlMacro?: boolean;
  /** Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field. */
  additionalKeyValues?: string;
  /** Whether click-tracking string should be included in the tags. */
  includeClickTracking?: boolean;
  /** Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders. */
  keywordOption?:
    | "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
    | "IGNORE"
    | "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
    | (string & {});
}

export const TagSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeClickThroughUrls: Schema.optional(Schema.Boolean),
  includeUnescapedlpurlMacro: Schema.optional(Schema.Boolean),
  additionalKeyValues: Schema.optional(Schema.String),
  includeClickTracking: Schema.optional(Schema.Boolean),
  keywordOption: Schema.optional(Schema.String),
}).annotate({ identifier: "TagSetting" });

export interface ListTargetingExpression {
  /** Expression describing which lists are being targeted by the ad. */
  expression?: string;
}

export const ListTargetingExpression =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTargetingExpression" });

export interface AccountActiveAdSummary {
  /** Ads that can be activated for the account. */
  availableAds?: string;
  /** Ads that have been activated for the account */
  activeAds?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary". */
  kind?: string;
  /** ID of the account. */
  accountId?: string;
  /** Maximum number of active ads allowed for the account. */
  activeAdsLimitTier?:
    | "ACTIVE_ADS_TIER_40K"
    | "ACTIVE_ADS_TIER_75K"
    | "ACTIVE_ADS_TIER_100K"
    | "ACTIVE_ADS_TIER_200K"
    | "ACTIVE_ADS_TIER_300K"
    | "ACTIVE_ADS_TIER_500K"
    | "ACTIVE_ADS_TIER_750K"
    | "ACTIVE_ADS_TIER_1M"
    | (string & {});
}

export const AccountActiveAdSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    availableAds: Schema.optional(Schema.String),
    activeAds: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    activeAdsLimitTier: Schema.optional(Schema.String),
  },
).annotate({ identifier: "AccountActiveAdSummary" });

export interface LastModifiedInfo {
  /** Timestamp of the last change in milliseconds since epoch. */
  time?: string;
}

export const LastModifiedInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  time: Schema.optional(Schema.String),
}).annotate({ identifier: "LastModifiedInfo" });

export interface StudioCreativeDimension {
  /** Height of the studio creative. */
  height?: number;
  /** Width of the studio creative. */
  width?: number;
}

export const StudioCreativeDimension =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StudioCreativeDimension" });

export interface StudioCreative {
  /** The timestamp when the studio creative was created. This is a read-only, auto-generated field. */
  createdInfo?: LastModifiedInfo;
  /** Dimension of this studio creative. This is a required field on insertion if format is BANNER or EXPANDING. */
  dimension?: StudioCreativeDimension;
  /** Backup image asset ID of this studio creative. It is a required field on insertion. */
  backupImageAssetId?: string;
  /** Studio campaign ID of this studio creative. This is a required field on insertion. */
  studioCampaignId?: string;
  /** Format of this studio creative. This is a required field on insertion. */
  format?:
    | "UNKNOWN"
    | "BANNER"
    | "EXPANDING"
    | "INTERSTITIAL"
    | "VPAID_LINEAR_VIDEO"
    | (string & {});
  /** List of assets associated with this studio creative. It is a required field on insertion. */
  assetIds?: ReadonlyArray<string>;
  /** The timestamp when the studio creative was last modified. This is a read-only, auto-generated field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Studio advertiser ID of this studio creative. This is a required field on insertion. */
  studioAdvertiserId?: string;
  /** Dynamic profile ID of this studio creative. */
  dynamicProfileId?: string;
  /** Identifier. Name of this studio creative. This is a required field on insertion. */
  name?: string;
  /** Output only. Unique ID of this studio creative. This is a read-only, auto-generated field. */
  id?: string;
  /** Studio account ID of this creative. This field, if left unset, will be auto-populated. */
  studioAccountId?: string;
  /** Output only. Status of this studio creative. It is a read-only field. */
  status?:
    | "UNKNOWN_STATUS"
    | "IN_DEVELOPMENT"
    | "PUBLISHED"
    | "QA_REJECTED"
    | "QA_APPROVED"
    | "TRAFFICKED"
    | (string & {});
}

export const StudioCreative = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdInfo: Schema.optional(LastModifiedInfo),
  dimension: Schema.optional(StudioCreativeDimension),
  backupImageAssetId: Schema.optional(Schema.String),
  studioCampaignId: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  assetIds: Schema.optional(Schema.Array(Schema.String)),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  studioAdvertiserId: Schema.optional(Schema.String),
  dynamicProfileId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  studioAccountId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
}).annotate({ identifier: "StudioCreative" });

export interface AccountPermission {
  /** Name of this account permission. */
  name?: string;
  /** Permission group of this account permission. */
  permissionGroupId?: string;
  /** Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD" */
  accountProfiles?: ReadonlyArray<
    "ACCOUNT_PROFILE_BASIC" | "ACCOUNT_PROFILE_STANDARD" | (string & {})
  >;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission". */
  kind?: string;
  /** ID of this account permission. */
  id?: string;
  /** Administrative level required to enable this account permission. */
  level?: "USER" | "ADMINISTRATOR" | (string & {});
}

export const AccountPermission = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  permissionGroupId: Schema.optional(Schema.String),
  accountProfiles: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  level: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountPermission" });

export interface DynamicTargetingKey {
  /** Type of the object of this dynamic targeting key. This is a required field. */
  objectType?:
    | "OBJECT_ADVERTISER"
    | "OBJECT_AD"
    | "OBJECT_CREATIVE"
    | "OBJECT_PLACEMENT"
    | (string & {});
  /** ID of the object of this dynamic targeting key. This is a required field. */
  objectId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey". */
  kind?: string;
  /** Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
  name?: string;
}

export const DynamicTargetingKey = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectType: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "DynamicTargetingKey" });

export interface UserProfile {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile". */
  kind?: string;
  /** The unique ID of the user profile. */
  profileId?: string;
  /** The user name. */
  userName?: string;
  /** The sub account ID this profile belongs to if applicable. */
  subAccountId?: string;
  /** The account ID to which this profile belongs. */
  accountId?: string;
  /** The sub account name this profile belongs to if applicable. */
  subAccountName?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The account name this profile belongs to. */
  accountName?: string;
}

export const UserProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  profileId: Schema.optional(Schema.String),
  userName: Schema.optional(Schema.String),
  subAccountId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  subAccountName: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  accountName: Schema.optional(Schema.String),
}).annotate({ identifier: "UserProfile" });

export interface UserProfileList {
  /** Etag of this resource. */
  etag?: string;
  /** The user profiles returned in this response. */
  items?: ReadonlyArray<UserProfile>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList". */
  kind?: string;
}

export const UserProfileList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(UserProfile)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "UserProfileList" });

export interface FieldError {
  /** Output only. Incidcates whether the field has error or warning. */
  isError?: boolean;
  /** Output only. The ingestion error of the field. */
  ingestionError?:
    | "UNKNOWN_PARSING_ERROR"
    | "MISSING_ID"
    | "MISSING_REPORTING_LABEL"
    | "EMPTY_VALUE"
    | "ASSET_DOWNLOAD_ERROR"
    | "ID_TOO_LONG"
    | "DUPLICATE_ID"
    | "PARSING_ERROR"
    | "COUNTRY_PARSING_ERROR"
    | "LONG_PARSING_ERROR"
    | "BOOL_PARSING_ERROR"
    | "EXPANDED_URL_PARSING_ERROR"
    | "FLOAT_PARSING_ERROR"
    | "DATETIME_PARSING_ERROR"
    | "INVALID_PREFERENCE_VALUE"
    | "GEO_NOT_FOUND_ERROR"
    | "GEO_PARSING_ERROR"
    | "GEO_PROXIMITY_TARGETING_MULTIPLE_LOCATION_ERROR"
    | "POSTAL_CODE_PARSING_ERROR"
    | "METRO_CODE_PARSING_ERROR"
    | "DATETIME_WITHOUT_TIMEZONE_PARSING_ERROR"
    | "WEIGHT_PARSING_ERROR"
    | "CREATIVE_DIMENSION_PARSING_ERROR"
    | "MULTIVALUE_ID"
    | "ENDTIME_BEFORE_STARTTIME"
    | "INVALID_ASSET_LIBRARY_HANDLE"
    | "INVALID_ASSET_LIBRARY_VIDEO_HANDLE"
    | "INVALID_ASSET_LIBRARY_DIRECTORY_HANDLE"
    | "DYNAMIC_TARGETING_KEY_NOT_DEFINED_FOR_ADVERTISER"
    | "USERLIST_ID_NOT_ACCESSIBLE_FOR_ADVERTISER"
    | "ENDTIME_PASSED"
    | "ENDTIME_TOO_SOON"
    | "TEXT_ASSET_REFERENCE"
    | "IMAGE_ASSET_SCS_REFERENCE"
    | "AIRPORT_GEO_TARGET"
    | "CANONICAL_NAME_QUERY_MISMATCH"
    | "NO_DEFAULT_ROW"
    | "NO_ACTIVE_DEFAULT_ROW"
    | "NO_DEFAULT_ROW_IN_DATE_RANGE"
    | "NO_ACTIVE_DEFAULT_ROW_IN_DATE_RANGE"
    | "PAYLOAD_LIMIT_EXCEEDED"
    | "SSL_NOT_COMPLIANT"
    | (string & {});
  /** Output only. The name of the field. */
  fieldName?: string;
  /** Output only. The ID of the field. */
  fieldId?: number;
  /** Output only. The list of values of the field. */
  fieldValues?: ReadonlyArray<string>;
}

export const FieldError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isError: Schema.optional(Schema.Boolean),
  ingestionError: Schema.optional(Schema.String),
  fieldName: Schema.optional(Schema.String),
  fieldId: Schema.optional(Schema.Number),
  fieldValues: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "FieldError" });

export interface IngestionErrorRecord {
  /** Output only. The record ID of the ingestion error record. */
  recordId?: string;
  /** Output only. The list of field errors of the ingestion error record. */
  errors?: ReadonlyArray<FieldError>;
}

export const IngestionErrorRecord = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recordId: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(FieldError)),
}).annotate({ identifier: "IngestionErrorRecord" });

export interface CampaignSummary {
  /** The tax amount for this campaign, in micros of the invoice's currency. */
  taxAmountMicros?: string;
  /** Campaign billing invoice code. */
  billingInvoiceCode?: string;
  /** Campaign ID. */
  campaignId?: string;
  /** The total amount of charges for this campaign, in micros of the invoice's currency. */
  totalAmountMicros?: string;
  /** The pre-tax amount for this campaign, in micros of the invoice's currency. */
  preTaxAmountMicros?: string;
}

export const CampaignSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  taxAmountMicros: Schema.optional(Schema.String),
  billingInvoiceCode: Schema.optional(Schema.String),
  campaignId: Schema.optional(Schema.String),
  totalAmountMicros: Schema.optional(Schema.String),
  preTaxAmountMicros: Schema.optional(Schema.String),
}).annotate({ identifier: "CampaignSummary" });

export interface Invoice {
  /** The pre-tax subtotal amount, in micros of the invoice's currency. */
  subtotalAmountMicros?: string;
  /** The list of summarized campaign information associated with this invoice. */
  campaign_summaries?: ReadonlyArray<CampaignSummary>;
  /** The invoice due date. */
  dueDate?: string;
  /** The invoice total amount, in micros of the invoice's currency. */
  totalAmountMicros?: string;
  /** The originally issued invoice(s) that is being cancelled by this invoice, if applicable. May appear on invoice PDF as *Replaced invoice numbers*. Note: There may be multiple replaced invoices due to consolidation of multiple invoices into a single invoice. */
  replacedInvoiceIds?: ReadonlyArray<string>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#invoice". */
  kind?: string;
  /** Invoice currency code in ISO 4217 format. */
  currencyCode?: string;
  /** The type of invoice document. */
  invoiceType?:
    | "INVOICE_TYPE_UNSPECIFIED"
    | "INVOICE_TYPE_CREDIT"
    | "INVOICE_TYPE_INVOICE"
    | (string & {});
  /** The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*. */
  correctedInvoiceId?: string;
  /** The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called. */
  pdfUrl?: string;
  /** The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*. */
  paymentsProfileId?: string;
  /** The sum of all taxes in invoice, in micros of the invoice's currency. */
  totalTaxAmountMicros?: string;
  /** ID of this invoice. */
  id?: string;
  /** The date when the invoice was issued. */
  issueDate?: string;
  /** The invoice service end date. */
  serviceEndDate?: string;
  /** Purchase order number associated with the invoice. */
  purchaseOrderNumber?: string;
  /** The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*. */
  paymentsAccountId?: string;
  /** The invoice service start date. */
  serviceStartDate?: string;
}

export const Invoice = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subtotalAmountMicros: Schema.optional(Schema.String),
  campaign_summaries: Schema.optional(Schema.Array(CampaignSummary)),
  dueDate: Schema.optional(Schema.String),
  totalAmountMicros: Schema.optional(Schema.String),
  replacedInvoiceIds: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  currencyCode: Schema.optional(Schema.String),
  invoiceType: Schema.optional(Schema.String),
  correctedInvoiceId: Schema.optional(Schema.String),
  pdfUrl: Schema.optional(Schema.String),
  paymentsProfileId: Schema.optional(Schema.String),
  totalTaxAmountMicros: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  issueDate: Schema.optional(Schema.String),
  serviceEndDate: Schema.optional(Schema.String),
  purchaseOrderNumber: Schema.optional(Schema.String),
  paymentsAccountId: Schema.optional(Schema.String),
  serviceStartDate: Schema.optional(Schema.String),
}).annotate({ identifier: "Invoice" });

export interface TvCampaignSummary {
  /** "CampaignComponentType" of this TV campaign. */
  type?:
    | "CAMPAIGN_COMPONENT_TYPE_UNSPECIFIED"
    | "COMPANY"
    | "BRAND"
    | "PRODUCT"
    | "CAMPAIGN"
    | (string & {});
  /** The start date of the TV campaign, inclusive. A string of the format: "yyyy-MM-dd". */
  startDate?: string;
  /** The end date of the TV campaign, inclusive. A string of the format: "yyyy-MM-dd". */
  endDate?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#tvCampaignSummary". */
  kind?: string;
  /** ID of this TV campaign. */
  id?: string;
  /** GRP of this TV campaign. */
  grp?: string;
  /** Spend across the entire TV campaign. */
  spend?: number;
  /** Identifier. Name of this TV campaign. */
  name?: string;
  /** Impressions across the entire TV campaign. */
  impressions?: string;
}

export const TvCampaignSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  grp: Schema.optional(Schema.String),
  spend: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  impressions: Schema.optional(Schema.String),
}).annotate({ identifier: "TvCampaignSummary" });

export interface BillingRateTieredRate {
  /** Rate in micros for this tier. */
  rateInMicros?: string;
  /** The minimum for this tier range. */
  lowValue?: string;
  /** The maximum for this tier range. */
  highValue?: string;
}

export const BillingRateTieredRate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rateInMicros: Schema.optional(Schema.String),
  lowValue: Schema.optional(Schema.String),
  highValue: Schema.optional(Schema.String),
}).annotate({ identifier: "BillingRateTieredRate" });

export interface BillingRate {
  /** Type of this billing rate. */
  type?:
    | "AD_SERVING"
    | "CLICKS"
    | "MINIMUM_SERVICE"
    | "PATH_TO_CONVERSION"
    | "RICH_MEDIA_INPAGE"
    | "RICH_MEDIA_EXPANDING"
    | "RICH_MEDIA_FLOATING"
    | "RICH_MEDIA_VIDEO"
    | "RICH_MEDIA_TEASER"
    | "RICH_MEDIA_VPAID"
    | "INSTREAM_VIDEO"
    | "PIXEL"
    | "TRACKING"
    | "TRAFFICKING_FEATURE"
    | "CUSTOM_REPORTS"
    | "EXPOSURE_TO_CONVERSION"
    | "DATA_TRANSFER"
    | "DATA_TRANSFER_SETUP"
    | "STARTUP"
    | "STATEMENT_OF_WORK"
    | "PROVIDED_LIST"
    | "PROVIDED_LIST_SETUP"
    | "ENHANCED_FORMATS"
    | "TRACKING_AD_IMPRESSIONS"
    | "TRACKING_AD_CLICKS"
    | "NIELSEN_DIGITAL_AD_RATINGS_FEE"
    | "INSTREAM_VIDEO_REDIRECT"
    | "INSTREAM_VIDEO_VPAID"
    | "DISPLAY_AD_SERVING"
    | "VIDEO_AD_SERVING"
    | "AUDIO_AD_SERVING"
    | "ADVANCED_DISPLAY_AD_SERVING"
    | (string & {});
  /** Billing currency code in ISO 4217 format. */
  currencyCode?: string;
  /** End date of this billing rate. */
  endDate?: string;
  /** Start date of this billing rate. */
  startDate?: string;
  /** Tiered rate of this billing rate. This cannot co-exist with flat rate. */
  tieredRates?: ReadonlyArray<BillingRateTieredRate>;
  /** ID of this billing rate. */
  id?: string;
  /** Unit of measure for this billing rate. */
  unitOfMeasure?: "CPM" | "CPC" | "EA" | "P2C" | (string & {});
  /** Flat rate in micros of this billing rate. This cannot co-exist with tiered rate. */
  rateInMicros?: string;
  /** Name of this billing rate. This must be less than 256 characters long. */
  name?: string;
}

export const BillingRate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  currencyCode: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  tieredRates: Schema.optional(Schema.Array(BillingRateTieredRate)),
  id: Schema.optional(Schema.String),
  unitOfMeasure: Schema.optional(Schema.String),
  rateInMicros: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "BillingRate" });

export interface BillingRatesListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Billing rates collection. */
  billingRates?: ReadonlyArray<BillingRate>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingRatesListResponse". */
  kind?: string;
}

export const BillingRatesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    billingRates: Schema.optional(Schema.Array(BillingRate)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingRatesListResponse" });

export interface FeedField {
  /** Optional. Whether the field is able to display. Could be set as true when the field type is not in any of the following and the field is not filterable: - COUNTRY_CODE_ISO - CITY - REGION - POSTAL_CODE - METRO - GEO_CANONICAL - USERLIST_ID - CONTEXTUAL_KEYWORD - CM360_DYNAMIC_TARGETING_KEY - WEIGHT */
  renderable?: boolean;
  /** Required. The ID of the field. The ID is based on the column index starting from 0, and it should match the column index in the resource link. */
  id?: number;
  /** Required. The type of the field. */
  type?:
    | "TYPE_UNKNOWN"
    | "STRING"
    | "LONG"
    | "GPA_SERVED_IMAGE_URL"
    | "GPA_SERVED_ASSET_URL"
    | "COUNTRY_CODE_ISO"
    | "FLOAT"
    | "CM360_KEYWORD"
    | "CM360_SITE_ID"
    | "BOOL"
    | "EXIT_URL"
    | "DATETIME"
    | "CM360_CREATIVE_ID"
    | "CM360_PLACEMENT_ID"
    | "CM360_AD_ID"
    | "CM360_ADVERTISER_ID"
    | "CM360_CAMPAIGN_ID"
    | "CITY"
    | "REGION"
    | "POSTAL_CODE"
    | "METRO"
    | "CUSTOM_VALUE"
    | "REMARKETING_VALUE"
    | "GEO_CANONICAL"
    | "WEIGHT"
    | "STRING_LIST"
    | "CREATIVE_DIMENSION"
    | "USERLIST_ID"
    | "ASSET_LIBRARY_DIRECTORY_HANDLE"
    | "ASSET_LIBRARY_VIDEO_HANDLE"
    | "ASSET_LIBRARY_HANDLE"
    | "THIRD_PARTY_SERVED_URL"
    | "CM360_DYNAMIC_TARGETING_KEY"
    | "DV360_LINE_ITEM_ID"
    | (string & {});
  /** Optional. Whether the field is required and should not be empty in the feed. Could be set as true when the field type is any of the following: - GPA_SERVED_IMAGE_URL - GPA_SERVED_ASSET_URL - ASSET_LIBRARY_HANDLE - ASSET_LIBRARY_VIDEO_HANDLE - ASSET_LIBRARY_DIRECTORY_HANDLE */
  required?: boolean;
  /** Optional. The default value of the field. */
  defaultValue?: string;
  /** Optional. Whether the field is filterable. Could be set as true when the field type is any of the following and is not renderable: - STRING - BOOL - COUNTRY_CODE_ISO - CM360_SITE_ID - CM360_KEYWORD - CM360_CREATIVE_ID - CM360_PLACEMENT_ID - CM360_AD_ID - CM360_ADVERTISER_ID - CM360_CAMPAIGN_ID - CITY - REGION - POSTAL_CODE - METRO - CUSTOM_VALUE - REMARKETING_VALUE - GEO_CANONICAL - STRING_LIST - CREATIVE_DIMENSION - USERLIST_ID - CM360_DYNAMIC_TARGETING_KEY - DV360_LINE_ITEM_ID */
  filterable?: boolean;
  /** Required. The name of the field. */
  name?: string;
}

export const FeedField = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  renderable: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.String),
  required: Schema.optional(Schema.Boolean),
  defaultValue: Schema.optional(Schema.String),
  filterable: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "FeedField" });

export interface Element {
  /** Required. The field ID to specify the field used for uniquely identifying the feed row. This is a required field. */
  externalIdFieldId?: number;
  /** Optional. Whether the start and end timestamp is local timestamp. The default value is false which means start and end timestamp is in UTC. */
  isLocalTimestamp?: boolean;
  /** Output only. The last modified timestamp of the element. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Required. The field ID to specify the field used for dynamic reporting in Campaign Manager 360. */
  reportingLabelFieldId?: number;
  /** Optional. The name of the element. It is defaulted to resource file name if not provided. */
  elementName?: string;
  /** Optional. The field ID that specify field used for proximity targeting. */
  proximityTargetingFieldId?: number;
  /** Output only. The creation timestamp of the element. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Optional. The field ID to specify the field that represents the end timestamp. Only applicable if you're planning to use scheduling in your dynamic creative. */
  endTimestampFieldId?: number;
  /** Optional. The field ID to specify the active field in the feed. */
  activeFieldId?: number;
  /** Required. The list of fields of the element. The field order and name should match the meta data in the content source source. */
  feedFields?: ReadonlyArray<FeedField>;
  /** Optional. The field ID to specify the field that represents the start timestamp. Only applicable if you're planning to use scheduling in your dynamic creative. */
  startTimestampFieldId?: number;
  /** Optional. The field ID to specify the field that represents the default field in the feed. */
  defaultFieldId?: number;
}

export const Element = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  externalIdFieldId: Schema.optional(Schema.Number),
  isLocalTimestamp: Schema.optional(Schema.Boolean),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  reportingLabelFieldId: Schema.optional(Schema.Number),
  elementName: Schema.optional(Schema.String),
  proximityTargetingFieldId: Schema.optional(Schema.Number),
  createInfo: Schema.optional(LastModifiedInfo),
  endTimestampFieldId: Schema.optional(Schema.Number),
  activeFieldId: Schema.optional(Schema.Number),
  feedFields: Schema.optional(Schema.Array(FeedField)),
  startTimestampFieldId: Schema.optional(Schema.Number),
  defaultFieldId: Schema.optional(Schema.Number),
}).annotate({ identifier: "Element" });

export interface FeedSchedule {
  /** Optional. The hour of the day to start the feed. It is applicable if the repeat value is equal to 1. Default value is 0. */
  startHour?: string;
  /** Optional. The minute of the hour to start the feed. It is applicable if the repeat value is equal to 1. Default value is 0. */
  startMinute?: string;
  /** Optional. Whether the schedule is enabled. */
  scheduleEnabled?: boolean;
  /** Optional. The number of times the feed retransforms within one day. This is a required field if the schedule is enabled. Acceptable values are between 1 to 6, inclusive. */
  repeatValue?: string;
  /** Optional. The time zone to schedule the feed. It is applicable if the repeat value is equal to 1. Default value is "America/Los_Angeles". */
  timeZone?: string;
}

export const FeedSchedule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startHour: Schema.optional(Schema.String),
  startMinute: Schema.optional(Schema.String),
  scheduleEnabled: Schema.optional(Schema.Boolean),
  repeatValue: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
}).annotate({ identifier: "FeedSchedule" });

export interface ContentSourceMetaData {
  /** Output only. The charset of the content source. */
  charset?: string;
  /** Output only. The list of column names in the content source. */
  fieldNames?: ReadonlyArray<string>;
  /** Output only. The separator of the content source. */
  separator?: string;
  /** Output only. The number of rows in the content source. */
  rowNumber?: number;
}

export const ContentSourceMetaData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  charset: Schema.optional(Schema.String),
  fieldNames: Schema.optional(Schema.Array(Schema.String)),
  separator: Schema.optional(Schema.String),
  rowNumber: Schema.optional(Schema.Number),
}).annotate({ identifier: "ContentSourceMetaData" });

export interface ContentSource {
  /** Output only. The creation timestamp of the content source. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Output only. Metadata of the content source. It contains the number of rows and the column names from resource link. This is a read-only field. */
  metaData?: ContentSourceMetaData;
  /** Required. The link to the file of the content source. */
  resourceLink?: string;
  /** Output only. The last modified timestamp of the content source. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Optional. The name of the content source. It is defaulted to content source file name if not provided. */
  contentSourceName?: string;
  /** Required. The resource type of the content source. */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "RESOURCE_TYPE_GOOGLE_SPREADSHEET"
    | "RESOURCE_TYPE_REMOTE_FILE"
    | (string & {});
}

export const ContentSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createInfo: Schema.optional(LastModifiedInfo),
  metaData: Schema.optional(ContentSourceMetaData),
  resourceLink: Schema.optional(Schema.String),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  contentSourceName: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
}).annotate({ identifier: "ContentSource" });

export interface FeedIngestionStatus {
  /** Output only. The processing state of the feed. */
  state?:
    | "FEED_PROCESSING_STATE_UNKNOWN"
    | "CANCELLED"
    | "INGESTING_QUEUED"
    | "INGESTING"
    | "INGESTED_SUCCESS"
    | "INGESTED_FAILURE"
    | "REQUEST_TO_PUBLISH"
    | "PUBLISHING"
    | "PUBLISHED_SUCCESS"
    | "PUBLISHED_FAILURE"
    | (string & {});
  /** Output only. The ingestion error records of the feed. */
  ingestionErrorRecords?: ReadonlyArray<IngestionErrorRecord>;
  /** Output only. The ingestion status of the feed. */
  ingestionStatus?: IngestionStatus;
}

export const FeedIngestionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  ingestionErrorRecords: Schema.optional(Schema.Array(IngestionErrorRecord)),
  ingestionStatus: Schema.optional(IngestionStatus),
}).annotate({ identifier: "FeedIngestionStatus" });

export interface DynamicFeed {
  /** Output only. The status of the feed. It is a read-only field that depends on the the feed ingestion status. The default value is INACTIVE, and it will be updated to ACTIVE once the feed is ingested successfully. */
  status?: "STATUS_UNKNOWN" | "ACTIVE" | "INACTIVE" | "DELETED" | (string & {});
  /** Required. The element of the dynamic feed that is to specify the schema of the feed. This is a required field. */
  element?: Element;
  /** Optional. The schedule of the dynamic feed. It can be set if the feed is published. */
  feedSchedule?: FeedSchedule;
  /** Output only. Unique ID of this dynamic feed. This is a read-only, auto-generated field. */
  dynamicFeedId?: string;
  /** Required. The content source of the dynamic feed. This is a required field. */
  contentSource?: ContentSource;
  /** Output only. The ingestion status of the dynamic feed. This is a read-only field. */
  feedIngestionStatus?: FeedIngestionStatus;
  /** Optional. Name of this dynamic feed. It is defaulted to content source file name if not provided. */
  dynamicFeedName?: string;
  /** Output only. The creation timestamp of the dynamic feed. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Required. Advertiser ID of this dynamic feed. This is a required field. */
  studioAdvertiserId?: string;
  /** Output only. Indicates whether the dynamic feed has a published version. This is a read-only field. */
  hasPublished?: boolean;
  /** Output only. The last modified timestamp of the dynamic feed. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
}

export const DynamicFeed = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  element: Schema.optional(Element),
  feedSchedule: Schema.optional(FeedSchedule),
  dynamicFeedId: Schema.optional(Schema.String),
  contentSource: Schema.optional(ContentSource),
  feedIngestionStatus: Schema.optional(FeedIngestionStatus),
  dynamicFeedName: Schema.optional(Schema.String),
  createInfo: Schema.optional(LastModifiedInfo),
  studioAdvertiserId: Schema.optional(Schema.String),
  hasPublished: Schema.optional(Schema.Boolean),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
}).annotate({ identifier: "DynamicFeed" });

export interface DynamicFeedsInsertRequest {
  /** Required. Dynamic profile ID of the inserted dynamic feed. */
  dynamicProfileId?: string;
  /** Required. Dynamic feed to insert. */
  dynamicFeed?: DynamicFeed;
}

export const DynamicFeedsInsertRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicProfileId: Schema.optional(Schema.String),
    dynamicFeed: Schema.optional(DynamicFeed),
  }).annotate({ identifier: "DynamicFeedsInsertRequest" });

export interface SiteContact {
  /** Site contact type. */
  contactType?: "SALES_PERSON" | "TRAFFICKER" | (string & {});
  /** Email address of this site contact. This is a required field. */
  email?: string;
  /** Address of this site contact. */
  address?: string;
  /** ID of this site contact. This is a read-only, auto-generated field. */
  id?: string;
  /** Last name of this site contact. */
  lastName?: string;
  /** Title or designation of this site contact. */
  title?: string;
  /** Primary phone number of this site contact. */
  phone?: string;
  /** First name of this site contact. */
  firstName?: string;
}

export const SiteContact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contactType: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  address: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  lastName: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  phone: Schema.optional(Schema.String),
  firstName: Schema.optional(Schema.String),
}).annotate({ identifier: "SiteContact" });

export interface PricingSchedulePricingPeriod {
  startDate?: string;
  endDate?: string;
  /** Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive. */
  units?: string;
  /** Rate or cost of this pricing period in nanos (i.e., multiplied by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive. */
  rateOrCostNanos?: string;
  /** Comments for this pricing period. */
  pricingComment?: string;
}

export const PricingSchedulePricingPeriod =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    units: Schema.optional(Schema.String),
    rateOrCostNanos: Schema.optional(Schema.String),
    pricingComment: Schema.optional(Schema.String),
  }).annotate({ identifier: "PricingSchedulePricingPeriod" });

export interface PricingSchedule {
  /** Whether this placement is flighted. If true, pricing periods will be computed automatically. */
  flighted?: boolean;
  testingStartDate?: string;
  /** Pricing periods for this placement. */
  pricingPeriods?: ReadonlyArray<PricingSchedulePricingPeriod>;
  /** Placement pricing type. This field is required on insertion. */
  pricingType?:
    | "PRICING_TYPE_CPM"
    | "PRICING_TYPE_CPC"
    | "PRICING_TYPE_CPA"
    | "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    | "PRICING_TYPE_FLAT_RATE_CLICKS"
    | "PRICING_TYPE_CPM_ACTIVEVIEW"
    | (string & {});
  /** Placement cap cost option. */
  capCostOption?:
    | "CAP_COST_NONE"
    | "CAP_COST_MONTHLY"
    | "CAP_COST_CUMULATIVE"
    | (string & {});
  /** Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA. */
  floodlightActivityId?: string;
  startDate?: string;
  endDate?: string;
}

export const PricingSchedule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  flighted: Schema.optional(Schema.Boolean),
  testingStartDate: Schema.optional(Schema.String),
  pricingPeriods: Schema.optional(Schema.Array(PricingSchedulePricingPeriod)),
  pricingType: Schema.optional(Schema.String),
  capCostOption: Schema.optional(Schema.String),
  floodlightActivityId: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
}).annotate({ identifier: "PricingSchedule" });

export interface PlacementGroup {
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Dimension value for the ID of the primary placement. This is a read-only, auto-generated field. */
  primaryPlacementIdDimensionValue?: DimensionValue;
  /** Whether this placement group is active, inactive, archived or permanently archived. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {});
  /** Comments for this placement group. */
  comment?: string;
  /** Dimension value for the ID of this placement group. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion. */
  placementGroupType?:
    | "PLACEMENT_PACKAGE"
    | "PLACEMENT_ROADBLOCK"
    | (string & {});
  /** Pricing schedule of this placement group. This field is required on insertion. */
  pricingSchedule?: PricingSchedule;
  /** Account ID of this placement group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements. */
  primaryPlacementId?: string;
  /** Advertiser ID of this placement group. This is a required field on insertion. */
  advertiserId?: string;
  /** Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
  siteId?: string;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
  directorySiteId?: string;
  /** External ID for this placement. */
  externalId?: string;
  /** Campaign ID of this placement group. This field is required on insertion. */
  campaignId?: string;
  /** ID of the placement strategy assigned to this placement group. */
  placementStrategyId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup". */
  kind?: string;
  /** Dimension value for the ID of the directory site. This is a read-only, auto-generated field. */
  directorySiteIdDimensionValue?: DimensionValue;
  /** Name of this placement group. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** ID of the content category assigned to this placement group. */
  contentCategoryId?: string;
  /** ID of this placement group. This is a read-only, auto-generated field. */
  id?: string;
  /** IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field. */
  childPlacementIds?: ReadonlyArray<string>;
  /** Subaccount ID of this placement group. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Information about the most recent modification of this placement group. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Dimension value for the ID of the site. This is a read-only, auto-generated field. */
  siteIdDimensionValue?: DimensionValue;
  /** Information about the creation of this placement group. This is a read-only field. */
  createInfo?: LastModifiedInfo;
}

export const PlacementGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  primaryPlacementIdDimensionValue: Schema.optional(DimensionValue),
  activeStatus: Schema.optional(Schema.String),
  comment: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  placementGroupType: Schema.optional(Schema.String),
  pricingSchedule: Schema.optional(PricingSchedule),
  accountId: Schema.optional(Schema.String),
  primaryPlacementId: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  siteId: Schema.optional(Schema.String),
  campaignIdDimensionValue: Schema.optional(DimensionValue),
  directorySiteId: Schema.optional(Schema.String),
  externalId: Schema.optional(Schema.String),
  campaignId: Schema.optional(Schema.String),
  placementStrategyId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  directorySiteIdDimensionValue: Schema.optional(DimensionValue),
  name: Schema.optional(Schema.String),
  contentCategoryId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  childPlacementIds: Schema.optional(Schema.Array(Schema.String)),
  subaccountId: Schema.optional(Schema.String),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  siteIdDimensionValue: Schema.optional(DimensionValue),
  createInfo: Schema.optional(LastModifiedInfo),
}).annotate({ identifier: "PlacementGroup" });

export interface CreativeGroupsListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Creative group collection. */
  creativeGroups?: ReadonlyArray<CreativeGroup>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse". */
  kind?: string;
}

export const CreativeGroupsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    creativeGroups: Schema.optional(Schema.Array(CreativeGroup)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeGroupsListResponse" });

export interface DfareportingStudioCreativeAssetsInsertRequest {
  /** Optional. Studio creative ID of the studio creative asset. It is a optional field. If it is set, the asset will be associated to the creative. */
  studioCreativeId?: string;
  /** Optional. Studio account ID of the studio creative asset. It is a optional. */
  studioAccountId?: string;
  /** Required. Studio advertiser ID of the studio creative asset. It is a required field on insertion. */
  studioAdvertiserId?: string;
}

export const DfareportingStudioCreativeAssetsInsertRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    studioCreativeId: Schema.optional(Schema.String),
    studioAccountId: Schema.optional(Schema.String),
    studioAdvertiserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DfareportingStudioCreativeAssetsInsertRequest" });

export interface PlacementsGenerateTagsResponse {
  /** Set of generated tags for the specified placements. */
  placementTags?: ReadonlyArray<PlacementTag>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse". */
  kind?: string;
}

export const PlacementsGenerateTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placementTags: Schema.optional(Schema.Array(PlacementTag)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementsGenerateTagsResponse" });

export interface PlacementStrategy {
  /** ID of this placement strategy. This is a read-only, auto-generated field. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy". */
  kind?: string;
  /** Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account. */
  name?: string;
  /** Account ID of this placement strategy.This is a read-only field that can be left blank. */
  accountId?: string;
}

export const PlacementStrategy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
}).annotate({ identifier: "PlacementStrategy" });

export interface PlacementStrategiesListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse". */
  kind?: string;
  /** Placement strategy collection. */
  placementStrategies?: ReadonlyArray<PlacementStrategy>;
}

export const PlacementStrategiesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    placementStrategies: Schema.optional(Schema.Array(PlacementStrategy)),
  }).annotate({ identifier: "PlacementStrategiesListResponse" });

export interface AccountPermissionsListResponse {
  /** Account permission collection. */
  accountPermissions?: ReadonlyArray<AccountPermission>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse". */
  kind?: string;
}

export const AccountPermissionsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountPermissions: Schema.optional(Schema.Array(AccountPermission)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountPermissionsListResponse" });

export interface ListPopulationTerm {
  /** Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM. */
  variableFriendlyName?: string;
  /** Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  value?: string;
  /** Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default. */
  contains?: boolean;
  /** Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  variableName?: string;
  /** ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. */
  remarketingListId?: string;
  /** Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  operator?:
    | "NUM_EQUALS"
    | "NUM_LESS_THAN"
    | "NUM_LESS_THAN_EQUAL"
    | "NUM_GREATER_THAN"
    | "NUM_GREATER_THAN_EQUAL"
    | "STRING_EQUALS"
    | "STRING_CONTAINS"
    | (string & {});
  /** Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  negation?: boolean;
  /** List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable. */
  type?:
    | "CUSTOM_VARIABLE_TERM"
    | "LIST_MEMBERSHIP_TERM"
    | "REFERRER_TERM"
    | (string & {});
}

export const ListPopulationTerm = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  variableFriendlyName: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  contains: Schema.optional(Schema.Boolean),
  variableName: Schema.optional(Schema.String),
  remarketingListId: Schema.optional(Schema.String),
  operator: Schema.optional(Schema.String),
  negation: Schema.optional(Schema.Boolean),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "ListPopulationTerm" });

export interface ListPopulationClause {
  /** Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs. */
  terms?: ReadonlyArray<ListPopulationTerm>;
}

export const ListPopulationClause = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  terms: Schema.optional(Schema.Array(ListPopulationTerm)),
}).annotate({ identifier: "ListPopulationClause" });

export interface ListPopulationRule {
  /** Name of floodlight activity associated with this rule. This is a read-only, auto-generated field. */
  floodlightActivityName?: string;
  /** Floodlight activity ID associated with this rule. This field can be left blank. */
  floodlightActivityId?: string;
  /** Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs. */
  listPopulationClauses?: ReadonlyArray<ListPopulationClause>;
}

export const ListPopulationRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  floodlightActivityName: Schema.optional(Schema.String),
  floodlightActivityId: Schema.optional(Schema.String),
  listPopulationClauses: Schema.optional(Schema.Array(ListPopulationClause)),
}).annotate({ identifier: "ListPopulationRule" });

export interface SortedDimension {
  /** The kind of resource this is, in this case dfareporting#sortedDimension. */
  kind?: string;
  /** The name of the dimension. */
  name?: string;
  /** An optional sort order for the dimension column. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const SortedDimension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  sortOrder: Schema.optional(Schema.String),
}).annotate({ identifier: "SortedDimension" });

export interface DateRange {
  startDate?: string;
  /** The date range relative to the date of when the report is run. */
  relativeDateRange?:
    | "TODAY"
    | "YESTERDAY"
    | "WEEK_TO_DATE"
    | "MONTH_TO_DATE"
    | "QUARTER_TO_DATE"
    | "YEAR_TO_DATE"
    | "PREVIOUS_WEEK"
    | "PREVIOUS_MONTH"
    | "PREVIOUS_QUARTER"
    | "PREVIOUS_YEAR"
    | "LAST_7_DAYS"
    | "LAST_30_DAYS"
    | "LAST_90_DAYS"
    | "LAST_365_DAYS"
    | "LAST_24_MONTHS"
    | "LAST_14_DAYS"
    | "LAST_60_DAYS"
    | (string & {});
  endDate?: string;
  /** The kind of resource this is, in this case dfareporting#dateRange. */
  kind?: string;
}

export const DateRange = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startDate: Schema.optional(Schema.String),
  relativeDateRange: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "DateRange" });

export interface CustomRichMediaEvents {
  /** List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName. */
  filteredEventIds?: ReadonlyArray<DimensionValue>;
  /** The kind of resource this is, in this case dfareporting#customRichMediaEvents. */
  kind?: string;
}

export const CustomRichMediaEvents = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filteredEventIds: Schema.optional(Schema.Array(DimensionValue)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomRichMediaEvents" });

export interface Activities {
  /** List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup". */
  filters?: ReadonlyArray<DimensionValue>;
  /** List of names of floodlight activity metrics. */
  metricNames?: ReadonlyArray<string>;
  /** The kind of resource this is, in this case dfareporting#activities. */
  kind?: string;
}

export const Activities = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filters: Schema.optional(Schema.Array(DimensionValue)),
  metricNames: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Activities" });

export interface Recipient {
  /** The kind of resource this is, in this case dfareporting#recipient. */
  kind?: string;
  /** The delivery type for the recipient. */
  deliveryType?: "LINK" | "ATTACHMENT" | (string & {});
  /** The email address of the recipient. */
  email?: string;
}

export const Recipient = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  deliveryType: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
}).annotate({ identifier: "Recipient" });

export interface Report {
  /** The timestamp (in milliseconds since epoch) of when this report was last modified. */
  lastModifiedTime?: string;
  /** The user profile id of the owner of this report. */
  ownerProfileId?: string;
  /** The kind of resource this is, in this case dfareporting#report. */
  kind?: string;
  /** The report criteria for a report of type "REACH". */
  reachCriteria?: {
    dimensions?: ReadonlyArray<SortedDimension>;
    dateRange?: DateRange;
    metricNames?: ReadonlyArray<string>;
    customRichMediaEvents?: CustomRichMediaEvents;
    reachByFrequencyMetricNames?: ReadonlyArray<string>;
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    activities?: Activities;
  };
  /** The type of the report. */
  type?:
    | "STANDARD"
    | "REACH"
    | "PATH_TO_CONVERSION"
    | "FLOODLIGHT"
    | "CROSS_MEDIA_REACH"
    | (string & {});
  /** The report criteria for a report of type "STANDARD". */
  criteria?: {
    activities?: Activities;
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    dateRange?: DateRange;
    metricNames?: ReadonlyArray<string>;
    customRichMediaEvents?: CustomRichMediaEvents;
    dimensions?: ReadonlyArray<SortedDimension>;
  };
  /** The filename used when generating report files for this report. */
  fileName?: string;
  /** The subaccount ID to which this report belongs if applicable. */
  subAccountId?: string;
  /** The unique ID identifying this report resource. */
  id?: string;
  /** The account ID to which this report belongs. */
  accountId?: string;
  /** The name of the report. */
  name?: string;
  /** The report criteria for a report of type "FLOODLIGHT". */
  floodlightCriteria?: {
    reportProperties?: {
      includeAttributedIPConversions?: boolean;
      includeUnattributedIPConversions?: boolean;
      includeUnattributedCookieConversions?: boolean;
    };
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    dateRange?: DateRange;
    metricNames?: ReadonlyArray<string>;
    customRichMediaEvents?: ReadonlyArray<DimensionValue>;
    floodlightConfigId?: DimensionValue;
    dimensions?: ReadonlyArray<SortedDimension>;
  };
  /** The report's email delivery settings. */
  delivery?: {
    emailOwner?: boolean;
    recipients?: ReadonlyArray<Recipient>;
    emailOwnerDeliveryType?: "LINK" | "ATTACHMENT" | (string & {});
    message?: string;
  };
  /** The eTag of this response for caching purposes. */
  etag?: string;
  /** The report criteria for a report of type "PATH_TO_CONVERSION". */
  pathToConversionCriteria?: {
    metricNames?: ReadonlyArray<string>;
    activityFilters?: ReadonlyArray<DimensionValue>;
    reportProperties?: {
      clicksLookbackWindow?: number;
      includeUnattributedCookieConversions?: boolean;
      includeAttributedIPConversions?: boolean;
      maximumClickInteractions?: number;
      maximumImpressionInteractions?: number;
      impressionsLookbackWindow?: number;
      includeUnattributedIPConversions?: boolean;
      maximumInteractionGap?: number;
      pivotOnInteractionPath?: boolean;
    };
    floodlightConfigId?: DimensionValue;
    dateRange?: DateRange;
    customRichMediaEvents?: ReadonlyArray<DimensionValue>;
    customFloodlightVariables?: ReadonlyArray<SortedDimension>;
    conversionDimensions?: ReadonlyArray<SortedDimension>;
    perInteractionDimensions?: ReadonlyArray<SortedDimension>;
  };
  /** The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY". */
  schedule?: {
    runsOnDayOfMonth?: "DAY_OF_MONTH" | "WEEK_OF_MONTH" | (string & {});
    active?: boolean;
    repeatsOnWeekDays?: ReadonlyArray<
      | "SUNDAY"
      | "MONDAY"
      | "TUESDAY"
      | "WEDNESDAY"
      | "THURSDAY"
      | "FRIDAY"
      | "SATURDAY"
      | (string & {})
    >;
    expirationDate?: string;
    timezone?: string;
    every?: number;
    startDate?: string;
    repeats?: string;
  };
  /** The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format. */
  format?: "CSV" | "EXCEL" | (string & {});
  /** Optional. The report criteria for a report of type "CROSS_MEDIA_REACH". */
  crossMediaReachCriteria?: {
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    dimensions?: ReadonlyArray<SortedDimension>;
    dateRange?: DateRange;
    metricNames?: ReadonlyArray<string>;
  };
}

export const Report = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lastModifiedTime: Schema.optional(Schema.String),
  ownerProfileId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  reachCriteria: Schema.optional(
    Schema.Struct({
      dimensions: Schema.optional(Schema.Array(SortedDimension)),
      dateRange: Schema.optional(DateRange),
      metricNames: Schema.optional(Schema.Array(Schema.String)),
      customRichMediaEvents: Schema.optional(CustomRichMediaEvents),
      reachByFrequencyMetricNames: Schema.optional(Schema.Array(Schema.String)),
      dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
      activities: Schema.optional(Activities),
    }),
  ),
  type: Schema.optional(Schema.String),
  criteria: Schema.optional(
    Schema.Struct({
      activities: Schema.optional(Activities),
      dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
      dateRange: Schema.optional(DateRange),
      metricNames: Schema.optional(Schema.Array(Schema.String)),
      customRichMediaEvents: Schema.optional(CustomRichMediaEvents),
      dimensions: Schema.optional(Schema.Array(SortedDimension)),
    }),
  ),
  fileName: Schema.optional(Schema.String),
  subAccountId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  floodlightCriteria: Schema.optional(
    Schema.Struct({
      reportProperties: Schema.optional(
        Schema.Struct({
          includeAttributedIPConversions: Schema.optional(Schema.Boolean),
          includeUnattributedIPConversions: Schema.optional(Schema.Boolean),
          includeUnattributedCookieConversions: Schema.optional(Schema.Boolean),
        }),
      ),
      dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
      dateRange: Schema.optional(DateRange),
      metricNames: Schema.optional(Schema.Array(Schema.String)),
      customRichMediaEvents: Schema.optional(Schema.Array(DimensionValue)),
      floodlightConfigId: Schema.optional(DimensionValue),
      dimensions: Schema.optional(Schema.Array(SortedDimension)),
    }),
  ),
  delivery: Schema.optional(
    Schema.Struct({
      emailOwner: Schema.optional(Schema.Boolean),
      recipients: Schema.optional(Schema.Array(Recipient)),
      emailOwnerDeliveryType: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
  etag: Schema.optional(Schema.String),
  pathToConversionCriteria: Schema.optional(
    Schema.Struct({
      metricNames: Schema.optional(Schema.Array(Schema.String)),
      activityFilters: Schema.optional(Schema.Array(DimensionValue)),
      reportProperties: Schema.optional(
        Schema.Struct({
          clicksLookbackWindow: Schema.optional(Schema.Number),
          includeUnattributedCookieConversions: Schema.optional(Schema.Boolean),
          includeAttributedIPConversions: Schema.optional(Schema.Boolean),
          maximumClickInteractions: Schema.optional(Schema.Number),
          maximumImpressionInteractions: Schema.optional(Schema.Number),
          impressionsLookbackWindow: Schema.optional(Schema.Number),
          includeUnattributedIPConversions: Schema.optional(Schema.Boolean),
          maximumInteractionGap: Schema.optional(Schema.Number),
          pivotOnInteractionPath: Schema.optional(Schema.Boolean),
        }),
      ),
      floodlightConfigId: Schema.optional(DimensionValue),
      dateRange: Schema.optional(DateRange),
      customRichMediaEvents: Schema.optional(Schema.Array(DimensionValue)),
      customFloodlightVariables: Schema.optional(Schema.Array(SortedDimension)),
      conversionDimensions: Schema.optional(Schema.Array(SortedDimension)),
      perInteractionDimensions: Schema.optional(Schema.Array(SortedDimension)),
    }),
  ),
  schedule: Schema.optional(
    Schema.Struct({
      runsOnDayOfMonth: Schema.optional(Schema.String),
      active: Schema.optional(Schema.Boolean),
      repeatsOnWeekDays: Schema.optional(Schema.Array(Schema.String)),
      expirationDate: Schema.optional(Schema.String),
      timezone: Schema.optional(Schema.String),
      every: Schema.optional(Schema.Number),
      startDate: Schema.optional(Schema.String),
      repeats: Schema.optional(Schema.String),
    }),
  ),
  format: Schema.optional(Schema.String),
  crossMediaReachCriteria: Schema.optional(
    Schema.Struct({
      dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
      dimensions: Schema.optional(Schema.Array(SortedDimension)),
      dateRange: Schema.optional(DateRange),
      metricNames: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).annotate({ identifier: "Report" });

export interface ProximityFilter {
  /** Optional. Radius length in units defined by radius_units. */
  radiusValue?: number;
  /** Optional. The radius bucket type of the proximity filter */
  radiusBucketType?:
    | "RADIUS_BUCKET_TYPE_UNKNOWN"
    | "SMALL"
    | "MEDIUM"
    | "LARGE"
    | "MULTI_REGIONAL"
    | "NATIONAL"
    | (string & {});
  /** Optional. Field ID in the element. */
  fieldId?: number;
  /** Optional. The units of the radius value */
  radiusUnitType?:
    | "RADIUS_UNIT_TYPE_UNKNOWN"
    | "KILOMETERS"
    | "MILES"
    | (string & {});
}

export const ProximityFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  radiusValue: Schema.optional(Schema.Number),
  radiusBucketType: Schema.optional(Schema.String),
  fieldId: Schema.optional(Schema.Number),
  radiusUnitType: Schema.optional(Schema.String),
}).annotate({ identifier: "ProximityFilter" });

export interface TvCampaignSummariesListResponse {
  /** List of TV campaign summaries. */
  tvCampaignSummaries?: ReadonlyArray<TvCampaignSummary>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#tvCampaignSummariesListResponse". */
  kind?: string;
}

export const TvCampaignSummariesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tvCampaignSummaries: Schema.optional(Schema.Array(TvCampaignSummary)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "TvCampaignSummariesListResponse" });

export interface UserRolePermissionGroup {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup". */
  kind?: string;
  /** Name of this user role permission group. */
  name?: string;
  /** ID of this user role permission. */
  id?: string;
}

export const UserRolePermissionGroup =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserRolePermissionGroup" });

export interface UserRolePermissionGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse". */
  kind?: string;
  /** User role permission group collection. */
  userRolePermissionGroups?: ReadonlyArray<UserRolePermissionGroup>;
}

export const UserRolePermissionGroupsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    userRolePermissionGroups: Schema.optional(
      Schema.Array(UserRolePermissionGroup),
    ),
  }).annotate({ identifier: "UserRolePermissionGroupsListResponse" });

export interface RemarketingList {
  /** Dimension value for the advertiser ID that owns this remarketing list. This is a required field. */
  advertiserId?: string;
  /** Remarketing list ID. This is a read-only, auto-generated field. */
  id?: string;
  /** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  accountId?: string;
  /** Name of the remarketing list. This is a required field. Must be no greater than 128 characters long. */
  name?: string;
  /** Product from which this remarketing list was originated. */
  listSource?:
    | "REMARKETING_LIST_SOURCE_OTHER"
    | "REMARKETING_LIST_SOURCE_ADX"
    | "REMARKETING_LIST_SOURCE_DFP"
    | "REMARKETING_LIST_SOURCE_XFP"
    | "REMARKETING_LIST_SOURCE_DFA"
    | "REMARKETING_LIST_SOURCE_GA"
    | "REMARKETING_LIST_SOURCE_YOUTUBE"
    | "REMARKETING_LIST_SOURCE_DBM"
    | "REMARKETING_LIST_SOURCE_GPLUS"
    | "REMARKETING_LIST_SOURCE_DMP"
    | "REMARKETING_LIST_SOURCE_PLAY_STORE"
    | (string & {});
  /** Number of users currently in the list. This is a read-only field. */
  listSize?: string;
  /** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  subaccountId?: string;
  /** Remarketing list description. */
  description?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive. */
  lifeSpan?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList". */
  kind?: string;
  /** Whether this remarketing list is active. */
  active?: boolean;
  /** Rule used to populate the remarketing list with users. */
  listPopulationRule?: ListPopulationRule;
}

export const RemarketingList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  listSource: Schema.optional(Schema.String),
  listSize: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  lifeSpan: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  listPopulationRule: Schema.optional(ListPopulationRule),
}).annotate({ identifier: "RemarketingList" });

export interface PlacementGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse". */
  kind?: string;
  /** Placement group collection. */
  placementGroups?: ReadonlyArray<PlacementGroup>;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const PlacementGroupsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    placementGroups: Schema.optional(Schema.Array(PlacementGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementGroupsListResponse" });

export interface LookbackConfiguration {
  /** Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
  postImpressionActivitiesDuration?: number;
  /** Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
  clickDuration?: number;
}

export const LookbackConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postImpressionActivitiesDuration: Schema.optional(Schema.Number),
  clickDuration: Schema.optional(Schema.Number),
}).annotate({ identifier: "LookbackConfiguration" });

export interface ReportsConfiguration {
  /** Report generation time zone ID of this account. This is a required field that cannot be changed on update. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu" */
  reportGenerationTimeZoneId?: string;
  /** Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
  exposureToConversionEnabled?: boolean;
  /** Default lookback windows for new advertisers in this account. */
  lookbackConfiguration?: LookbackConfiguration;
}

export const ReportsConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportGenerationTimeZoneId: Schema.optional(Schema.String),
  exposureToConversionEnabled: Schema.optional(Schema.Boolean),
  lookbackConfiguration: Schema.optional(LookbackConfiguration),
}).annotate({ identifier: "ReportsConfiguration" });

export interface TagSettings {
  /** Whether dynamic floodlight tags are enabled. */
  dynamicTagEnabled?: boolean;
  /** Whether image tags are enabled. */
  imageTagEnabled?: boolean;
}

export const TagSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dynamicTagEnabled: Schema.optional(Schema.Boolean),
  imageTagEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "TagSettings" });

export interface OperatingSystem {
  /** DART ID of this operating system. This is the ID used for targeting. */
  dartId?: string;
  /** Name of this operating system. */
  name?: string;
  /** Whether this operating system is for desktop. */
  desktop?: boolean;
  /** Whether this operating system is for mobile. */
  mobile?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem". */
  kind?: string;
}

export const OperatingSystem = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dartId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  desktop: Schema.optional(Schema.Boolean),
  mobile: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "OperatingSystem" });

export interface OperatingSystemsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse". */
  kind?: string;
  /** Operating system collection. */
  operatingSystems?: ReadonlyArray<OperatingSystem>;
}

export const OperatingSystemsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    operatingSystems: Schema.optional(Schema.Array(OperatingSystem)),
  }).annotate({ identifier: "OperatingSystemsListResponse" });

export interface Country {
  /** DART ID of this country. This is the ID used for targeting and generating reports. */
  dartId?: string;
  /** Name of this country. */
  name?: string;
  /** Country code. */
  countryCode?: string;
  /** Output only. The TV data providers supported in this country. */
  tvDataProviders?: ReadonlyArray<
    | "INVALID_TV_DATA_PROVIDER"
    | "INTAGE_JP"
    | "IBOPE_AR"
    | "IBOPE_BR"
    | "IBOPE_CL"
    | "IBOPE_CO"
    | "TNS_VN"
    | "COMSCORE_NATIONAL_US"
    | "COMSCORE_CA"
    | "SAMBA_AU"
    | (string & {})
  >;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#country". */
  kind?: string;
  /** Whether ad serving supports secure servers in this country. */
  sslEnabled?: boolean;
}

export const Country = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dartId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  tvDataProviders: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  sslEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Country" });

export interface CountriesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse". */
  kind?: string;
  /** Country collection. */
  countries?: ReadonlyArray<Country>;
}

export const CountriesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  countries: Schema.optional(Schema.Array(Country)),
}).annotate({ identifier: "CountriesListResponse" });

export interface SiteSkippableSetting {
  /** Whether the user can skip creatives served to this site. This will act as default for new placements created under this site. */
  skippable?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting". */
  kind?: string;
  /** Amount of time to play videos served to this site before the skip button should appear. Applicable when skippable is true. */
  skipOffset?: VideoOffset;
  /** Amount of time to play videos served to this site template before counting a view. Applicable when skippable is true. */
  progressOffset?: VideoOffset;
}

export const SiteSkippableSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  skippable: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  skipOffset: Schema.optional(VideoOffset),
  progressOffset: Schema.optional(VideoOffset),
}).annotate({ identifier: "SiteSkippableSetting" });

export interface SiteCompanionSetting {
  /** Whether to serve only static images as companions. */
  imageOnly?: boolean;
  /** Whether companions are disabled for this site template. */
  companionsDisabled?: boolean;
  /** Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes. */
  enabledSizes?: ReadonlyArray<Size>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting". */
  kind?: string;
}

export const SiteCompanionSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  imageOnly: Schema.optional(Schema.Boolean),
  companionsDisabled: Schema.optional(Schema.Boolean),
  enabledSizes: Schema.optional(Schema.Array(Size)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "SiteCompanionSetting" });

export interface SiteVideoSettings {
  /** Publisher specification ID used to identify site-associated publisher requirements and automatically populate transcode settings. If publisher specification ID is specified, it will take precedence over transcode settings. Possible values are: * `1`, Hulu * `2`, NBC * `3`, CBS * `4`, CBS Desktop * `5`, Discovery * `6`, VEVO HD * `7`, VEVO Vertical * `8`, Fox * `9`, CW Network * `10`, Disney * `11`, IGN * `12`, NFL.com * `13`, Turner Broadcasting * `14`, Tubi on Fox * `15`, Hearst Corporation * `16`, Twitch Desktop * `17`, ABC * `18`, Univision * `19`, MLB.com * `20`, MLB.com Mobile * `21`, MLB.com OTT * `22`, Polsat * `23`, TVN * `24`, Mediaset * `25`, Antena 3 * `26`, Mediamond * `27`, Sky Italia * `28`, Tubi on CBS * `29`, Spotify * `30`, Paramount * `31`, Max */
  publisherSpecificationId?: string;
  /** Settings for the skippability of video creatives served to this site. This will act as default for new placements created under this site. */
  skippableSettings?: SiteSkippableSetting;
  /** Whether OBA icons are enabled for this placement. */
  obaEnabled?: boolean;
  /** Settings for the OBA icon of video creatives served to this site. This will act as default for new placements created under this site. */
  obaSettings?: ObaIcon;
  /** Orientation of a site template used for video. This will act as default for new placements created under this site. */
  orientation?: "ANY" | "LANDSCAPE" | "PORTRAIT" | (string & {});
  /** Settings for the companion creatives of video creatives served to this site. */
  companionSettings?: SiteCompanionSetting;
  /** Settings for the transcodes of video creatives served to this site. This will act as default for new placements created under this site. */
  transcodeSettings?: SiteTranscodeSetting;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings". */
  kind?: string;
}

export const SiteVideoSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisherSpecificationId: Schema.optional(Schema.String),
  skippableSettings: Schema.optional(SiteSkippableSetting),
  obaEnabled: Schema.optional(Schema.Boolean),
  obaSettings: Schema.optional(ObaIcon),
  orientation: Schema.optional(Schema.String),
  companionSettings: Schema.optional(SiteCompanionSetting),
  transcodeSettings: Schema.optional(SiteTranscodeSetting),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "SiteVideoSettings" });

export interface TargetableRemarketingList {
  /** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  accountId?: string;
  /** Name of the targetable remarketing list. Is no greater than 128 characters long. */
  name?: string;
  /** Dimension value for the ID of the advertiser. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Number of days that a user should remain in the targetable remarketing list without an impression. */
  lifeSpan?: string;
  /** Dimension value for the advertiser ID that owns this targetable remarketing list. */
  advertiserId?: string;
  /** Targetable remarketing list description. */
  description?: string;
  /** Targetable remarketing list ID. */
  id?: string;
  /** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  subaccountId?: string;
  /** Whether this targetable remarketing list is active. */
  active?: boolean;
  /** Product from which this targetable remarketing list was originated. */
  listSource?:
    | "REMARKETING_LIST_SOURCE_OTHER"
    | "REMARKETING_LIST_SOURCE_ADX"
    | "REMARKETING_LIST_SOURCE_DFP"
    | "REMARKETING_LIST_SOURCE_XFP"
    | "REMARKETING_LIST_SOURCE_DFA"
    | "REMARKETING_LIST_SOURCE_GA"
    | "REMARKETING_LIST_SOURCE_YOUTUBE"
    | "REMARKETING_LIST_SOURCE_DBM"
    | "REMARKETING_LIST_SOURCE_GPLUS"
    | "REMARKETING_LIST_SOURCE_DMP"
    | "REMARKETING_LIST_SOURCE_PLAY_STORE"
    | (string & {});
  /** Number of users currently in the list. This is a read-only field. */
  listSize?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList". */
  kind?: string;
}

export const TargetableRemarketingList =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    lifeSpan: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    listSource: Schema.optional(Schema.String),
    listSize: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetableRemarketingList" });

export interface TargetableRemarketingListsListResponse {
  /** Targetable remarketing list collection. */
  targetableRemarketingLists?: ReadonlyArray<TargetableRemarketingList>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const TargetableRemarketingListsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetableRemarketingLists: Schema.optional(
      Schema.Array(TargetableRemarketingList),
    ),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetableRemarketingListsListResponse" });

export interface AccountPermissionGroup {
  /** Name of this account permission group. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup". */
  kind?: string;
  /** ID of this account permission group. */
  id?: string;
}

export const AccountPermissionGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  },
).annotate({ identifier: "AccountPermissionGroup" });

export interface Dimension {
  /** The dimension name, e.g. advertiser */
  name?: string;
  /** The kind of resource this is, in this case dfareporting#dimension. */
  kind?: string;
}

export const Dimension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Dimension" });

export interface Metric {
  /** The metric name, e.g. impressions */
  name?: string;
  /** The kind of resource this is, in this case dfareporting#metric. */
  kind?: string;
}

export const Metric = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Metric" });

export interface PathToConversionReportCompatibleFields {
  /** Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report. */
  conversionDimensions?: ReadonlyArray<Dimension>;
  /** Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report. */
  perInteractionDimensions?: ReadonlyArray<Dimension>;
  /** Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report. */
  customFloodlightVariables?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields. */
  kind?: string;
}

export const PathToConversionReportCompatibleFields =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionDimensions: Schema.optional(Schema.Array(Dimension)),
    perInteractionDimensions: Schema.optional(Schema.Array(Dimension)),
    customFloodlightVariables: Schema.optional(Schema.Array(Dimension)),
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "PathToConversionReportCompatibleFields" });

export interface OptimizationActivity {
  /** Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field. */
  floodlightActivityIdDimensionValue?: DimensionValue;
  /** Floodlight activity ID of this optimization activity. This is a required field. */
  floodlightActivityId?: string;
  /** Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1. */
  weight?: number;
}

export const OptimizationActivity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  floodlightActivityIdDimensionValue: Schema.optional(DimensionValue),
  floodlightActivityId: Schema.optional(Schema.String),
  weight: Schema.optional(Schema.Number),
}).annotate({ identifier: "OptimizationActivity" });

export interface CreativeOptimizationConfiguration {
  /** Optimization model for this configuration. */
  optimizationModel?:
    | "CLICK"
    | "POST_CLICK"
    | "POST_IMPRESSION"
    | "POST_CLICK_AND_IMPRESSION"
    | "VIDEO_COMPLETION"
    | (string & {});
  /** Name of this creative optimization config. This is a required field and must be less than 129 characters long. */
  name?: string;
  /** ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns. */
  id?: string;
  /** List of optimization activities associated with this configuration. */
  optimizationActivitys?: ReadonlyArray<OptimizationActivity>;
}

export const CreativeOptimizationConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optimizationModel: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    optimizationActivitys: Schema.optional(Schema.Array(OptimizationActivity)),
  }).annotate({ identifier: "CreativeOptimizationConfiguration" });

export interface EventTag {
  /** Subaccount ID of this event tag. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type. */
  urlEscapeLevels?: number;
  /** Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter. */
  siteIds?: ReadonlyArray<string>;
  /** Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites. */
  siteFilterType?: "ALLOWLIST" | "BLOCKLIST" | (string & {});
  /** Name of this event tag. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Account ID of this event tag. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Advertiser ID of this event tag. This field or the campaignId field is required on insertion. */
  advertiserId?: string;
  /** Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network. */
  excludeFromAdxRequests?: boolean;
  /** ID of this event tag. This is a read-only, auto-generated field. */
  id?: string;
  /** Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads. */
  enabledByDefault?: boolean;
  /** Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field. */
  status?: "ENABLED" | "DISABLED" | (string & {});
  /** Campaign ID of this event tag. This field or the advertiserId field is required on insertion. */
  campaignId?: string;
  /** Whether this tag is SSL-compliant or not. This is a read-only field. */
  sslCompliant?: boolean;
  /** Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion. */
  url?: string;
  /** Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field. */
  type?:
    | "IMPRESSION_IMAGE_EVENT_TAG"
    | "IMPRESSION_JAVASCRIPT_EVENT_TAG"
    | "CLICK_THROUGH_EVENT_TAG"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag". */
  kind?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
}

export const EventTag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subaccountId: Schema.optional(Schema.String),
  campaignIdDimensionValue: Schema.optional(DimensionValue),
  urlEscapeLevels: Schema.optional(Schema.Number),
  siteIds: Schema.optional(Schema.Array(Schema.String)),
  siteFilterType: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  excludeFromAdxRequests: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  enabledByDefault: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
  campaignId: Schema.optional(Schema.String),
  sslCompliant: Schema.optional(Schema.Boolean),
  url: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
}).annotate({ identifier: "EventTag" });

export interface SiteSettings {
  /** Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect. */
  adBlockingOptOut?: boolean;
  /** Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
  vpaidAdapterChoiceTemplate?:
    | "DEFAULT"
    | "FLASH"
    | "HTML5"
    | "BOTH"
    | (string & {});
  /** Whether active view creatives are disabled for this site. */
  activeViewOptOut?: boolean;
  /** Configuration settings for dynamic and image floodlight tags. */
  tagSetting?: TagSetting;
  /** Whether new cookies are disabled for this site. */
  disableNewCookie?: boolean;
  /** Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement. */
  videoActiveViewOptOutTemplate?: boolean;
}

export const SiteSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adBlockingOptOut: Schema.optional(Schema.Boolean),
  vpaidAdapterChoiceTemplate: Schema.optional(Schema.String),
  activeViewOptOut: Schema.optional(Schema.Boolean),
  tagSetting: Schema.optional(TagSetting),
  disableNewCookie: Schema.optional(Schema.Boolean),
  videoActiveViewOptOutTemplate: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SiteSettings" });

export interface Site {
  /** Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account. */
  name?: string;
  /** Account ID of this site. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Dimension value for the ID of the directory site. This is a read-only, auto-generated field. */
  directorySiteIdDimensionValue?: DimensionValue;
  /** Whether this site is approved. */
  approved?: boolean;
  /** Site-wide settings. */
  siteSettings?: SiteSettings;
  /** Default video settings for new placements created under this site. This value will be used to populate the placements.videoSettings field, when no value is specified for the new placement. */
  videoSettings?: SiteVideoSettings;
  /** Optional. Ad serving platform ID to identify the ad serving platform used by the site. Measurement partners can use this field to add ad-server specific macros. If set, this value acts as the default during placement creation. Possible values are: * `1`, Adelphic * `2`, Adform * `3`, Adobe * `4`, Amobee * `5`, Basis (Centro) * `6`, Beeswax * `7`, Amazon * `8`, DV360 (DBM) * `9`, Innovid * `10`, MediaMath * `11`, Roku OneView DSP * `12`, TabMo Hawk * `13`, The Trade Desk * `14`, Xandr Invest DSP * `15`, Yahoo DSP * `16`, Zeta Global * `17`, Scaleout * `18`, Bidtellect * `19`, Unicorn * `20`, Teads * `21`, Quantcast * `22`, Cognitiv * `23`, AdTheorent * `24`, DeepIntent * `25`, Pulsepoint */
  adServingPlatformId?: string;
  /** ID of this site. This is a read-only, auto-generated field. */
  id?: string;
  /** Subaccount ID of this site. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Directory site associated with this site. This is a required field that is read-only after insertion. */
  directorySiteId?: string;
  /** Site contacts. */
  siteContacts?: ReadonlyArray<SiteContact>;
  /** Dimension value for the ID of this site. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Key name of this site. This is a read-only, auto-generated field. */
  keyName?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#site". */
  kind?: string;
}

export const Site = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  directorySiteIdDimensionValue: Schema.optional(DimensionValue),
  approved: Schema.optional(Schema.Boolean),
  siteSettings: Schema.optional(SiteSettings),
  videoSettings: Schema.optional(SiteVideoSettings),
  adServingPlatformId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
  directorySiteId: Schema.optional(Schema.String),
  siteContacts: Schema.optional(Schema.Array(SiteContact)),
  idDimensionValue: Schema.optional(DimensionValue),
  keyName: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Site" });

export interface SitesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Site collection. */
  sites?: ReadonlyArray<Site>;
}

export const SitesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  sites: Schema.optional(Schema.Array(Site)),
}).annotate({ identifier: "SitesListResponse" });

export interface ThirdPartyTrackingUrl {
  /** Third-party URL type for in-stream video and in-stream audio creatives. */
  thirdPartyUrlType?:
    | "IMPRESSION"
    | "CLICK_TRACKING"
    | "VIDEO_START"
    | "VIDEO_FIRST_QUARTILE"
    | "VIDEO_MIDPOINT"
    | "VIDEO_THIRD_QUARTILE"
    | "VIDEO_COMPLETE"
    | "VIDEO_MUTE"
    | "VIDEO_PAUSE"
    | "VIDEO_REWIND"
    | "VIDEO_FULLSCREEN"
    | "VIDEO_STOP"
    | "VIDEO_CUSTOM"
    | "SURVEY"
    | "RICH_MEDIA_IMPRESSION"
    | "RICH_MEDIA_RM_IMPRESSION"
    | "RICH_MEDIA_BACKUP_IMPRESSION"
    | "VIDEO_SKIP"
    | "VIDEO_PROGRESS"
    | (string & {});
  /** URL for the specified third-party URL type. */
  url?: string;
}

export const ThirdPartyTrackingUrl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  thirdPartyUrlType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
}).annotate({ identifier: "ThirdPartyTrackingUrl" });

export interface MobileApp {
  /** Title of this mobile app. */
  title?: string;
  /** Mobile app directory. */
  directory?:
    | "UNKNOWN"
    | "APPLE_APP_STORE"
    | "GOOGLE_PLAY_STORE"
    | "ROKU_APP_STORE"
    | "AMAZON_FIRETV_APP_STORE"
    | "PLAYSTATION_APP_STORE"
    | "APPLE_TV_APP_STORE"
    | "XBOX_APP_STORE"
    | "SAMSUNG_TV_APP_STORE"
    | "ANDROID_TV_APP_STORE"
    | "GENERIC_CTV_APP_STORE"
    | (string & {});
  /** Publisher name. */
  publisherName?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp". */
  kind?: string;
  /** ID of this mobile app. */
  id?: string;
}

export const MobileApp = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  directory: Schema.optional(Schema.String),
  publisherName: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "MobileApp" });

export interface DeepLink {
  /** The URL of the mobile app being linked to. */
  appUrl?: string;
  /** The mobile app targeted by this deep link. */
  mobileApp?: MobileApp;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink". */
  kind?: string;
  /** Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE. */
  remarketingListIds?: ReadonlyArray<string>;
  /** The fallback URL. This URL will be served to users who do not have the mobile app installed. */
  fallbackUrl?: string;
}

export const DeepLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appUrl: Schema.optional(Schema.String),
  mobileApp: Schema.optional(MobileApp),
  kind: Schema.optional(Schema.String),
  remarketingListIds: Schema.optional(Schema.Array(Schema.String)),
  fallbackUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "DeepLink" });

export interface LandingPage {
  /** Advertiser ID of this landing page. This is a required field. */
  advertiserId?: string;
  /** ID of this landing page. This is a read-only, auto-generated field. */
  id?: string;
  /** Links that will direct the user to a mobile app, if installed. */
  deepLinks?: ReadonlyArray<DeepLink>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage". */
  kind?: string;
  /** Whether this landing page has been archived. */
  archived?: boolean;
  /** Name of this landing page. This is a required field. It must be less than 256 characters long. */
  name?: string;
  /** URL of this landing page. This is a required field. */
  url?: string;
}

export const LandingPage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deepLinks: Schema.optional(Schema.Array(DeepLink)),
  kind: Schema.optional(Schema.String),
  archived: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
}).annotate({ identifier: "LandingPage" });

export interface Subaccount {
  /** Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account. */
  name?: string;
  /** ID of the account that contains this subaccount. This is a read-only field that can be left blank. */
  accountId?: string;
  /** IDs of the available user role permissions for this subaccount. */
  availablePermissionIds?: ReadonlyArray<string>;
  /** ID of this subaccount. This is a read-only, auto-generated field. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount". */
  kind?: string;
}

export const Subaccount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  availablePermissionIds: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Subaccount" });

export interface SubaccountsListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Subaccount collection. */
  subaccounts?: ReadonlyArray<Subaccount>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse". */
  kind?: string;
}

export const SubaccountsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    subaccounts: Schema.optional(Schema.Array(Subaccount)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubaccountsListResponse" });

export interface CampaignCreativeAssociation {
  /** ID of the creative associated with the campaign. This is a required field. */
  creativeId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation". */
  kind?: string;
}

export const CampaignCreativeAssociation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CampaignCreativeAssociation" });

export interface CampaignCreativeAssociationsListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Campaign creative association collection */
  campaignCreativeAssociations?: ReadonlyArray<CampaignCreativeAssociation>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse". */
  kind?: string;
}

export const CampaignCreativeAssociationsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    campaignCreativeAssociations: Schema.optional(
      Schema.Array(CampaignCreativeAssociation),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CampaignCreativeAssociationsListResponse" });

export interface ConnectionType {
  /** ID of this connection type. */
  id?: string;
  /** Name of this connection type. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType". */
  kind?: string;
}

export const ConnectionType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "ConnectionType" });

export interface FrequencyCap {
  /** Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive. */
  impressions?: string;
  /** Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive. */
  duration?: string;
}

export const FrequencyCap = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  impressions: Schema.optional(Schema.String),
  duration: Schema.optional(Schema.String),
}).annotate({ identifier: "FrequencyCap" });

export interface DeliverySchedule {
  /** Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served. */
  priority?:
    | "AD_PRIORITY_01"
    | "AD_PRIORITY_02"
    | "AD_PRIORITY_03"
    | "AD_PRIORITY_04"
    | "AD_PRIORITY_05"
    | "AD_PRIORITY_06"
    | "AD_PRIORITY_07"
    | "AD_PRIORITY_08"
    | "AD_PRIORITY_09"
    | "AD_PRIORITY_10"
    | "AD_PRIORITY_11"
    | "AD_PRIORITY_12"
    | "AD_PRIORITY_13"
    | "AD_PRIORITY_14"
    | "AD_PRIORITY_15"
    | "AD_PRIORITY_16"
    | (string & {});
  /** Limit on the number of times an individual user can be served the ad within a specified period of time. */
  frequencyCap?: FrequencyCap;
  /** Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive. */
  impressionRatio?: string;
  /** Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals. */
  hardCutoff?: boolean;
}

export const DeliverySchedule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  priority: Schema.optional(Schema.String),
  frequencyCap: Schema.optional(FrequencyCap),
  impressionRatio: Schema.optional(Schema.String),
  hardCutoff: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DeliverySchedule" });

export interface FloodlightReportCompatibleFields {
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields. */
  kind?: string;
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
}

export const FloodlightReportCompatibleFields =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Array(Dimension)),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
  }).annotate({ identifier: "FloodlightReportCompatibleFields" });

export interface CrossMediaReachReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#crossMediaReachReportCompatibleFields. */
  kind?: string;
}

export const CrossMediaReachReportCompatibleFields =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensions: Schema.optional(Schema.Array(Dimension)),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CrossMediaReachReportCompatibleFields" });

export interface ReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
  pivotedActivityMetrics?: ReadonlyArray<Metric>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#reportCompatibleFields. */
  kind?: string;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
}

export const ReportCompatibleFields = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dimensions: Schema.optional(Schema.Array(Dimension)),
    pivotedActivityMetrics: Schema.optional(Schema.Array(Metric)),
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
  },
).annotate({ identifier: "ReportCompatibleFields" });

export interface CrossDimensionReachReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "overlapMetricNames" section of the report. */
  overlapMetrics?: ReadonlyArray<Metric>;
  /** Dimensions which are compatible to be selected in the "breakdown" section of the report. */
  breakdown?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields. */
  kind?: string;
}

export const CrossDimensionReachReportCompatibleFields =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    overlapMetrics: Schema.optional(Schema.Array(Metric)),
    breakdown: Schema.optional(Schema.Array(Dimension)),
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CrossDimensionReachReportCompatibleFields" });

export interface ReachReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
  pivotedActivityMetrics?: ReadonlyArray<Metric>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#reachReportCompatibleFields. */
  kind?: string;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report. */
  reachByFrequencyMetrics?: ReadonlyArray<Metric>;
}

export const ReachReportCompatibleFields =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensions: Schema.optional(Schema.Array(Dimension)),
    pivotedActivityMetrics: Schema.optional(Schema.Array(Metric)),
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    reachByFrequencyMetrics: Schema.optional(Schema.Array(Metric)),
  }).annotate({ identifier: "ReachReportCompatibleFields" });

export interface CompatibleFields {
  /** Contains items that are compatible to be selected for a report of type "FLOODLIGHT". */
  floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "CROSS_MEDIA_REACH". */
  crossMediaReachReportCompatibleFields?: CrossMediaReachReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "STANDARD". */
  reportCompatibleFields?: ReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
  pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
  crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;
  /** The kind of resource this is, in this case dfareporting#compatibleFields. */
  kind?: string;
  /** Contains items that are compatible to be selected for a report of type "REACH". */
  reachReportCompatibleFields?: ReachReportCompatibleFields;
}

export const CompatibleFields = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  floodlightReportCompatibleFields: Schema.optional(
    FloodlightReportCompatibleFields,
  ),
  crossMediaReachReportCompatibleFields: Schema.optional(
    CrossMediaReachReportCompatibleFields,
  ),
  reportCompatibleFields: Schema.optional(ReportCompatibleFields),
  pathToConversionReportCompatibleFields: Schema.optional(
    PathToConversionReportCompatibleFields,
  ),
  crossDimensionReachReportCompatibleFields: Schema.optional(
    CrossDimensionReachReportCompatibleFields,
  ),
  kind: Schema.optional(Schema.String),
  reachReportCompatibleFields: Schema.optional(ReachReportCompatibleFields),
}).annotate({ identifier: "CompatibleFields" });

export interface MobileCarrier {
  /** Name of this mobile carrier. */
  name?: string;
  /** DART ID of the country to which this mobile carrier belongs. */
  countryDartId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier". */
  kind?: string;
  /** ID of this mobile carrier. */
  id?: string;
  /** Country code of the country to which this mobile carrier belongs. */
  countryCode?: string;
}

export const MobileCarrier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  countryDartId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
}).annotate({ identifier: "MobileCarrier" });

export interface DimensionValueList {
  /** Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
  nextPageToken?: string;
  /** The kind of list this is, in this case dfareporting#dimensionValueList. */
  kind?: string;
  /** The dimension values returned in this response. */
  items?: ReadonlyArray<DimensionValue>;
  /** The eTag of this response for caching purposes. */
  etag?: string;
}

export const DimensionValueList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(DimensionValue)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "DimensionValueList" });

export interface CreativeFieldAssignment {
  /** ID of the creative field. */
  creativeFieldId?: string;
  /** ID of the creative field value. */
  creativeFieldValueId?: string;
}

export const CreativeFieldAssignment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.optional(Schema.String),
    creativeFieldValueId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeFieldAssignment" });

export interface CreativeClickThroughUrl {
  /** ID of the landing page for the click-through URL. */
  landingPageId?: string;
  /** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. */
  computedClickThroughUrl?: string;
  /** Custom click-through URL. Applicable if the landingPageId field is left unset. */
  customClickThroughUrl?: string;
}

export const CreativeClickThroughUrl =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    landingPageId: Schema.optional(Schema.String),
    computedClickThroughUrl: Schema.optional(Schema.String),
    customClickThroughUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeClickThroughUrl" });

export interface OffsetPosition {
  /** Offset distance from top side of an asset or a window. */
  top?: number;
  /** Offset distance from left side of an asset or a window. */
  left?: number;
}

export const OffsetPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  top: Schema.optional(Schema.Number),
  left: Schema.optional(Schema.Number),
}).annotate({ identifier: "OffsetPosition" });

export interface PopupWindowProperties {
  /** Whether to display the browser scroll bar. */
  showScrollBar?: boolean;
  /** Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES. */
  offset?: OffsetPosition;
  /** Title of popup window. */
  title?: string;
  /** Whether to display the browser tool bar. */
  showToolBar?: boolean;
  /** Whether to display the browser address bar. */
  showAddressBar?: boolean;
  /** Whether to display the browser status bar. */
  showStatusBar?: boolean;
  /** Popup window position either centered or at specific coordinate. */
  positionType?: "CENTER" | "COORDINATES" | (string & {});
  /** Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID */
  dimension?: Size;
  /** Whether to display the browser menu bar. */
  showMenuBar?: boolean;
}

export const PopupWindowProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  showScrollBar: Schema.optional(Schema.Boolean),
  offset: Schema.optional(OffsetPosition),
  title: Schema.optional(Schema.String),
  showToolBar: Schema.optional(Schema.Boolean),
  showAddressBar: Schema.optional(Schema.Boolean),
  showStatusBar: Schema.optional(Schema.Boolean),
  positionType: Schema.optional(Schema.String),
  dimension: Schema.optional(Size),
  showMenuBar: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PopupWindowProperties" });

export interface CreativeCustomEvent {
  /** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
  advertiserCustomEventId?: string;
  /** Exit click-through URL for the event. This field is used only for exit events. */
  exitClickThroughUrl?: CreativeClickThroughUrl;
  /** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
  videoReportingId?: string;
  /** Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. */
  artworkLabel?: string;
  /** Target type used by the event. */
  targetType?:
    | "TARGET_BLANK"
    | "TARGET_TOP"
    | "TARGET_SELF"
    | "TARGET_PARENT"
    | "TARGET_POPUP"
    | (string & {});
  /** ID of this event. This is a required field and should not be modified after insertion. */
  id?: string;
  /** Artwork type used by the creative.This is a read-only field. */
  artworkType?:
    | "ARTWORK_TYPE_FLASH"
    | "ARTWORK_TYPE_HTML5"
    | "ARTWORK_TYPE_MIXED"
    | "ARTWORK_TYPE_IMAGE"
    | (string & {});
  /** Properties for rich media popup windows. This field is used only for exit events. */
  popupWindowProperties?: PopupWindowProperties;
  /** User-entered name for the event. */
  advertiserCustomEventName?: string;
  /** Type of the event. This is a read-only field. */
  advertiserCustomEventType?:
    | "ADVERTISER_EVENT_TIMER"
    | "ADVERTISER_EVENT_EXIT"
    | "ADVERTISER_EVENT_COUNTER"
    | (string & {});
}

export const CreativeCustomEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserCustomEventId: Schema.optional(Schema.String),
  exitClickThroughUrl: Schema.optional(CreativeClickThroughUrl),
  videoReportingId: Schema.optional(Schema.String),
  artworkLabel: Schema.optional(Schema.String),
  targetType: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  artworkType: Schema.optional(Schema.String),
  popupWindowProperties: Schema.optional(PopupWindowProperties),
  advertiserCustomEventName: Schema.optional(Schema.String),
  advertiserCustomEventType: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeCustomEvent" });

export interface ClickTag {
  /** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  eventName?: string;
  /** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
  name?: string;
  /** Parameter value for the specified click tag. This field contains a click-through url. */
  clickThroughUrl?: CreativeClickThroughUrl;
}

export const ClickTag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  eventName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  clickThroughUrl: Schema.optional(CreativeClickThroughUrl),
}).annotate({ identifier: "ClickTag" });

export interface CreativeAssetId {
  /** Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed. */
  name?: string;
  /** Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. */
  type?:
    | "IMAGE"
    | "FLASH"
    | "VIDEO"
    | "HTML"
    | "HTML_IMAGE"
    | "AUDIO"
    | (string & {});
}

export const CreativeAssetId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeAssetId" });

export interface CreativeAsset {
  /** Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  audioSampleRate?: number;
  /** Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA. */
  durationType?:
    | "ASSET_DURATION_TYPE_AUTO"
    | "ASSET_DURATION_TYPE_NONE"
    | "ASSET_DURATION_TYPE_CUSTOM"
    | (string & {});
  /** List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true. */
  companionCreativeIds?: ReadonlyArray<string>;
  /** Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  streamingServingUrl?: string;
  /** Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  positionLeftUnit?:
    | "OFFSET_UNIT_PIXEL"
    | "OFFSET_UNIT_PERCENT"
    | "OFFSET_UNIT_PIXEL_FROM_CENTER"
    | (string & {});
  /** Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA. */
  positionTopUnit?:
    | "OFFSET_UNIT_PIXEL"
    | "OFFSET_UNIT_PERCENT"
    | "OFFSET_UNIT_PIXEL_FROM_CENTER"
    | (string & {});
  /** Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA. */
  originalBackup?: boolean;
  /** zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive. */
  zIndex?: number;
  /** Orientation of video asset. This is a read-only, auto-generated field. */
  orientation?: "LANDSCAPE" | "PORTRAIT" | "SQUARE" | (string & {});
  /** Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  sslCompliant?: boolean;
  /** Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA. */
  backupImageExit?: CreativeCustomEvent;
  /** File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  fileSize?: string;
  /** Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  verticallyLocked?: boolean;
  /** Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  mimeType?: string;
  /** Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets. */
  transparency?: boolean;
  /** File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
  zipFilename?: string;
  /** Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA. */
  position?: OffsetPosition;
  /** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  detectedFeatures?: ReadonlyArray<
    | "CSS_FONT_FACE"
    | "CSS_BACKGROUND_SIZE"
    | "CSS_BORDER_IMAGE"
    | "CSS_BORDER_RADIUS"
    | "CSS_BOX_SHADOW"
    | "CSS_FLEX_BOX"
    | "CSS_HSLA"
    | "CSS_MULTIPLE_BGS"
    | "CSS_OPACITY"
    | "CSS_RGBA"
    | "CSS_TEXT_SHADOW"
    | "CSS_ANIMATIONS"
    | "CSS_COLUMNS"
    | "CSS_GENERATED_CONTENT"
    | "CSS_GRADIENTS"
    | "CSS_REFLECTIONS"
    | "CSS_TRANSFORMS"
    | "CSS_TRANSFORMS3D"
    | "CSS_TRANSITIONS"
    | "APPLICATION_CACHE"
    | "CANVAS"
    | "CANVAS_TEXT"
    | "DRAG_AND_DROP"
    | "HASH_CHANGE"
    | "HISTORY"
    | "AUDIO"
    | "VIDEO"
    | "INDEXED_DB"
    | "INPUT_ATTR_AUTOCOMPLETE"
    | "INPUT_ATTR_AUTOFOCUS"
    | "INPUT_ATTR_LIST"
    | "INPUT_ATTR_PLACEHOLDER"
    | "INPUT_ATTR_MAX"
    | "INPUT_ATTR_MIN"
    | "INPUT_ATTR_MULTIPLE"
    | "INPUT_ATTR_PATTERN"
    | "INPUT_ATTR_REQUIRED"
    | "INPUT_ATTR_STEP"
    | "INPUT_TYPE_SEARCH"
    | "INPUT_TYPE_TEL"
    | "INPUT_TYPE_URL"
    | "INPUT_TYPE_EMAIL"
    | "INPUT_TYPE_DATETIME"
    | "INPUT_TYPE_DATE"
    | "INPUT_TYPE_MONTH"
    | "INPUT_TYPE_WEEK"
    | "INPUT_TYPE_TIME"
    | "INPUT_TYPE_DATETIME_LOCAL"
    | "INPUT_TYPE_NUMBER"
    | "INPUT_TYPE_RANGE"
    | "INPUT_TYPE_COLOR"
    | "LOCAL_STORAGE"
    | "POST_MESSAGE"
    | "SESSION_STORAGE"
    | "WEB_SOCKETS"
    | "WEB_SQL_DATABASE"
    | "WEB_WORKERS"
    | "GEO_LOCATION"
    | "INLINE_SVG"
    | "SMIL"
    | "SVG_HREF"
    | "SVG_CLIP_PATHS"
    | "TOUCH"
    | "WEBGL"
    | "SVG_FILTERS"
    | "SVG_FE_IMAGE"
    | (string & {})
  >;
  /** Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  assetIdentifier?: CreativeAssetId;
  /** Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  artworkType?:
    | "ARTWORK_TYPE_FLASH"
    | "ARTWORK_TYPE_HTML5"
    | "ARTWORK_TYPE_MIXED"
    | "ARTWORK_TYPE_IMAGE"
    | (string & {});
  /** Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  bitRate?: number;
  /** Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN. */
  collapsedSize?: Size;
  /** Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE, creatives if left blank, this field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  size?: Size;
  /** Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render. */
  additionalSizes?: ReadonlyArray<Size>;
  /** Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  flashVersion?: number;
  /** Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID. */
  childAssetType?:
    | "CHILD_ASSET_TYPE_FLASH"
    | "CHILD_ASSET_TYPE_VIDEO"
    | "CHILD_ASSET_TYPE_IMAGE"
    | "CHILD_ASSET_TYPE_DATA"
    | (string & {});
  /** Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  progressiveServingUrl?: string;
  /** Dimension value for the ID of the asset. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive. */
  pushdownDuration?: number;
  /** Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
  hideFlashObjects?: boolean;
  /** Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  frameRate?: number;
  /** Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  actionScript3?: boolean;
  /** Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. */
  pushdown?: boolean;
  /** Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  active?: boolean;
  /** Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING. */
  windowMode?: "OPAQUE" | "WINDOW" | "TRANSPARENT" | (string & {});
  /** Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  id?: string;
  /** Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL . */
  alignment?:
    | "ALIGNMENT_TOP"
    | "ALIGNMENT_RIGHT"
    | "ALIGNMENT_BOTTOM"
    | "ALIGNMENT_LEFT"
    | (string & {});
  /** Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives. */
  role?:
    | "PRIMARY"
    | "BACKUP_IMAGE"
    | "ADDITIONAL_IMAGE"
    | "ADDITIONAL_FLASH"
    | "PARENT_VIDEO"
    | "TRANSCODED_VIDEO"
    | "OTHER"
    | "ALTERNATE_VIDEO"
    | "PARENT_AUDIO"
    | "TRANSCODED_AUDIO"
    | (string & {});
  /** Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN. */
  offset?: OffsetPosition;
  /** Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0. */
  customStartTimeValue?: number;
  /** Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
  hideSelectionBoxes?: boolean;
  /** Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  audioBitRate?: number;
  /** Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA. */
  startTimeType?:
    | "ASSET_START_TIME_TYPE_NONE"
    | "ASSET_START_TIME_TYPE_CUSTOM"
    | (string & {});
  /** Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  mediaDuration?: number;
  /** Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  expandedDimension?: Size;
  /** Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  horizontallyLocked?: boolean;
  /** Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  displayType?:
    | "ASSET_DISPLAY_TYPE_INPAGE"
    | "ASSET_DISPLAY_TYPE_FLOATING"
    | "ASSET_DISPLAY_TYPE_OVERLAY"
    | "ASSET_DISPLAY_TYPE_EXPANDING"
    | "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH"
    | "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING"
    | "ASSET_DISPLAY_TYPE_PEEL_DOWN"
    | "ASSET_DISPLAY_TYPE_VPAID_LINEAR"
    | "ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR"
    | "ASSET_DISPLAY_TYPE_BACKDROP"
    | (string & {});
  /** Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1. */
  duration?: number;
  /** Whether this asset is used as a polite load asset. */
  politeLoad?: boolean;
  /** Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
  zipFilesize?: string;
}

export const CreativeAsset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  audioSampleRate: Schema.optional(Schema.Number),
  durationType: Schema.optional(Schema.String),
  companionCreativeIds: Schema.optional(Schema.Array(Schema.String)),
  streamingServingUrl: Schema.optional(Schema.String),
  positionLeftUnit: Schema.optional(Schema.String),
  positionTopUnit: Schema.optional(Schema.String),
  originalBackup: Schema.optional(Schema.Boolean),
  zIndex: Schema.optional(Schema.Number),
  orientation: Schema.optional(Schema.String),
  sslCompliant: Schema.optional(Schema.Boolean),
  backupImageExit: Schema.optional(CreativeCustomEvent),
  fileSize: Schema.optional(Schema.String),
  verticallyLocked: Schema.optional(Schema.Boolean),
  mimeType: Schema.optional(Schema.String),
  transparency: Schema.optional(Schema.Boolean),
  zipFilename: Schema.optional(Schema.String),
  position: Schema.optional(OffsetPosition),
  detectedFeatures: Schema.optional(Schema.Array(Schema.String)),
  assetIdentifier: Schema.optional(CreativeAssetId),
  artworkType: Schema.optional(Schema.String),
  bitRate: Schema.optional(Schema.Number),
  collapsedSize: Schema.optional(Size),
  size: Schema.optional(Size),
  additionalSizes: Schema.optional(Schema.Array(Size)),
  flashVersion: Schema.optional(Schema.Number),
  childAssetType: Schema.optional(Schema.String),
  progressiveServingUrl: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  pushdownDuration: Schema.optional(Schema.Number),
  hideFlashObjects: Schema.optional(Schema.Boolean),
  frameRate: Schema.optional(Schema.Number),
  actionScript3: Schema.optional(Schema.Boolean),
  pushdown: Schema.optional(Schema.Boolean),
  active: Schema.optional(Schema.Boolean),
  windowMode: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  alignment: Schema.optional(Schema.String),
  role: Schema.optional(Schema.String),
  offset: Schema.optional(OffsetPosition),
  customStartTimeValue: Schema.optional(Schema.Number),
  hideSelectionBoxes: Schema.optional(Schema.Boolean),
  audioBitRate: Schema.optional(Schema.Number),
  startTimeType: Schema.optional(Schema.String),
  mediaDuration: Schema.optional(Schema.Number),
  expandedDimension: Schema.optional(Size),
  horizontallyLocked: Schema.optional(Schema.Boolean),
  displayType: Schema.optional(Schema.String),
  duration: Schema.optional(Schema.Number),
  politeLoad: Schema.optional(Schema.Boolean),
  zipFilesize: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeAsset" });

export interface TargetWindow {
  /** User-entered value. */
  customHtml?: string;
  /** Type of browser window for which the backup image of the flash creative can be displayed. */
  targetWindowOption?:
    | "NEW_WINDOW"
    | "CURRENT_WINDOW"
    | "CUSTOM"
    | (string & {});
}

export const TargetWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customHtml: Schema.optional(Schema.String),
  targetWindowOption: Schema.optional(Schema.String),
}).annotate({ identifier: "TargetWindow" });

export interface UniversalAdId {
  /** ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM. */
  value?: string;
  /** Registry used for the Ad ID value. */
  registry?:
    | "OTHER"
    | "AD_ID_OFFICIAL"
    | "CLEARCAST"
    | "DCM"
    | "ARPP"
    | "CUSV"
    | (string & {});
}

export const UniversalAdId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  registry: Schema.optional(Schema.String),
}).annotate({ identifier: "UniversalAdId" });

export interface Creative {
  /** Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID. */
  mediaDuration?: number;
  /** Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO. */
  progressOffset?: VideoOffset;
  /** The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  requiredFlashPluginVersion?: string;
  /** Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
  subaccountId?: string;
  /** Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  totalFileSize?: string;
  /** Creative last modification information. This is a read-only field. Applicable to all creative types. */
  lastModifiedInfo?: LastModifiedInfo;
  /** ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types. */
  id?: string;
  /** List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  backupImageFeatures?: ReadonlyArray<
    | "CSS_FONT_FACE"
    | "CSS_BACKGROUND_SIZE"
    | "CSS_BORDER_IMAGE"
    | "CSS_BORDER_RADIUS"
    | "CSS_BOX_SHADOW"
    | "CSS_FLEX_BOX"
    | "CSS_HSLA"
    | "CSS_MULTIPLE_BGS"
    | "CSS_OPACITY"
    | "CSS_RGBA"
    | "CSS_TEXT_SHADOW"
    | "CSS_ANIMATIONS"
    | "CSS_COLUMNS"
    | "CSS_GENERATED_CONTENT"
    | "CSS_GRADIENTS"
    | "CSS_REFLECTIONS"
    | "CSS_TRANSFORMS"
    | "CSS_TRANSFORMS3D"
    | "CSS_TRANSITIONS"
    | "APPLICATION_CACHE"
    | "CANVAS"
    | "CANVAS_TEXT"
    | "DRAG_AND_DROP"
    | "HASH_CHANGE"
    | "HISTORY"
    | "AUDIO"
    | "VIDEO"
    | "INDEXED_DB"
    | "INPUT_ATTR_AUTOCOMPLETE"
    | "INPUT_ATTR_AUTOFOCUS"
    | "INPUT_ATTR_LIST"
    | "INPUT_ATTR_PLACEHOLDER"
    | "INPUT_ATTR_MAX"
    | "INPUT_ATTR_MIN"
    | "INPUT_ATTR_MULTIPLE"
    | "INPUT_ATTR_PATTERN"
    | "INPUT_ATTR_REQUIRED"
    | "INPUT_ATTR_STEP"
    | "INPUT_TYPE_SEARCH"
    | "INPUT_TYPE_TEL"
    | "INPUT_TYPE_URL"
    | "INPUT_TYPE_EMAIL"
    | "INPUT_TYPE_DATETIME"
    | "INPUT_TYPE_DATE"
    | "INPUT_TYPE_MONTH"
    | "INPUT_TYPE_WEEK"
    | "INPUT_TYPE_TIME"
    | "INPUT_TYPE_DATETIME_LOCAL"
    | "INPUT_TYPE_NUMBER"
    | "INPUT_TYPE_RANGE"
    | "INPUT_TYPE_COLOR"
    | "LOCAL_STORAGE"
    | "POST_MESSAGE"
    | "SESSION_STORAGE"
    | "WEB_SOCKETS"
    | "WEB_SQL_DATABASE"
    | "WEB_WORKERS"
    | "GEO_LOCATION"
    | "INLINE_SVG"
    | "SMIL"
    | "SVG_HREF"
    | "SVG_CLIP_PATHS"
    | "TOUCH"
    | "WEBGL"
    | "SVG_FILTERS"
    | "SVG_FE_IMAGE"
    | (string & {})
  >;
  /** Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. */
  htmlCodeLocked?: boolean;
  /** OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE. */
  fsCommand?: FsCommand;
  /** List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false. */
  companionCreatives?: ReadonlyArray<string>;
  /** Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID. */
  thirdPartyUrls?: ReadonlyArray<ThirdPartyTrackingUrl>;
  /** The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  requiredFlashVersion?: number;
  /** Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  convertFlashToHtml5?: boolean;
  /** Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE. */
  backupImageReportingLabel?: string;
  /** Amount of time to play the video before the skip button appears. Applicable to the following creative types: all INSTREAM_VIDEO. */
  skipOffset?: VideoOffset;
  /** Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE. */
  additionalSizes?: ReadonlyArray<Size>;
  /** Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for DISPLAY creatives with a primary asset of type HTML_IMAGE, if left blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: DISPLAY, DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. */
  size?: Size;
  /** Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  adTagKeys?: ReadonlyArray<string>;
  /** Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  customKeyValues?: ReadonlyArray<string>;
  /** Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  artworkType?:
    | "ARTWORK_TYPE_FLASH"
    | "ARTWORK_TYPE_HTML5"
    | "ARTWORK_TYPE_MIXED"
    | "ARTWORK_TYPE_IMAGE"
    | (string & {});
  /** Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives. */
  commercialId?: string;
  /** Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY. */
  autoAdvanceImages?: boolean;
  /** Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types. */
  renderingIdDimensionValue?: DimensionValue;
  /** Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE. */
  allowScriptAccess?: boolean;
  /** Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  studioTraffickedCreativeId?: string;
  /** ID of current rendering version. This is a read-only field. Applicable to all creative types. */
  renderingId?: string;
  /** Whether the creative is active. Applicable to all creative types. */
  active?: boolean;
  /** Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA. */
  overrideCss?: string;
  /** Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types. */
  sslOverride?: boolean;
  /** Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID. */
  mediaDescription?: string;
  /** Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types. */
  idDimensionValue?: DimensionValue;
  /** Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA. */
  thirdPartyRichMediaImpressionsUrl?: string;
  /** Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID. */
  skippable?: boolean;
  /** The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types. */
  version?: number;
  /** The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE. */
  backgroundColor?: string;
  /** Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  studioCreativeId?: string;
  /** Creative field assignments for this creative. Applicable to all creative types. */
  creativeFieldAssignments?: ReadonlyArray<CreativeFieldAssignment>;
  /** Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID. */
  adParameters?: string;
  /** List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE. */
  timerCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** Click-through URL for backup image. Applicable to ENHANCED_BANNER when the primary asset type is not HTML_IMAGE. */
  backupImageClickThroughUrl?: CreativeClickThroughUrl;
  /** Whether the creative is archived. Applicable to all creative types. */
  archived?: boolean;
  /** Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types. */
  authoringSource?:
    | "CREATIVE_AUTHORING_SOURCE_DCM"
    | "CREATIVE_AUTHORING_SOURCE_DBM"
    | "CREATIVE_AUTHORING_SOURCE_STUDIO"
    | "CREATIVE_AUTHORING_SOURCE_GWD"
    | "CREATIVE_AUTHORING_SOURCE_ACS"
    | "CREATIVE_AUTHORING_SOURCE_ADOBE"
    | "CREATIVE_AUTHORING_SOURCE_TYPEFACE_AI"
    | "CREATIVE_AUTHORING_SOURCE_REMBRAND"
    | "CREATIVE_AUTHORING_SOURCE_TRACKTO_STUDIO"
    | "CREATIVE_AUTHORING_SOURCE_BORNLOGIC"
    | (string & {});
  /** Required. Name of the creative. This must be less than 256 characters long. Applicable to all creative types. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative". */
  kind?: string;
  /** Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  clickTags?: ReadonlyArray<ClickTag>;
  /** URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT */
  redirectUrl?: string;
  /** List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. */
  counterCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** Online behavioral advertising icon to be added to the creative. Applicable to the following creative types: all INSTREAM_VIDEO. */
  obaIcon?: ObaIcon;
  /** List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  exitCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types. Acceptable values are: - "APP" - "APP_INTERSTITIAL" - "IN_STREAM_VIDEO" - "IN_STREAM_AUDIO" - "DISPLAY" - "DISPLAY_INTERSTITIAL" */
  compatibility?: ReadonlyArray<
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {})
  >;
  /** Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT */
  creativeAssets?: ReadonlyArray<CreativeAsset>;
  /** Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  backupImageTargetWindow?: TargetWindow;
  /** HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA. */
  htmlCode?: string;
  /** Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA. */
  thirdPartyBackupImageImpressionsUrl?: string;
  /** Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  studioAdvertiserId?: string;
  /** Required. Advertiser ID of this creative. This is a required field. Applicable to all creative types. */
  advertiserId?: string;
  /** Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
  authoringTool?: "NINJA" | "SWIFFY" | (string & {});
  /** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO and INSTREAM_VIDEO and VPAID. */
  universalAdId?: UniversalAdId;
  /** Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  latestTraffickedCreativeId?: string;
  /** Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
  accountId?: string;
  /** Required. Type of this creative. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types. */
  type?:
    | "IMAGE"
    | "DISPLAY_REDIRECT"
    | "CUSTOM_DISPLAY"
    | "INTERNAL_REDIRECT"
    | "CUSTOM_DISPLAY_INTERSTITIAL"
    | "INTERSTITIAL_INTERNAL_REDIRECT"
    | "TRACKING_TEXT"
    | "RICH_MEDIA_DISPLAY_BANNER"
    | "RICH_MEDIA_INPAGE_FLOATING"
    | "RICH_MEDIA_IM_EXPAND"
    | "RICH_MEDIA_DISPLAY_EXPANDING"
    | "RICH_MEDIA_DISPLAY_INTERSTITIAL"
    | "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
    | "RICH_MEDIA_MOBILE_IN_APP"
    | "FLASH_INPAGE"
    | "INSTREAM_VIDEO"
    | "VPAID_LINEAR_VIDEO"
    | "VPAID_NON_LINEAR_VIDEO"
    | "INSTREAM_VIDEO_REDIRECT"
    | "RICH_MEDIA_PEEL_DOWN"
    | "HTML5_BANNER"
    | "DISPLAY"
    | "DISPLAY_IMAGE_GALLERY"
    | "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
    | "INSTREAM_AUDIO"
    | (string & {});
  /** Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types. */
  sslCompliant?: boolean;
}

export const Creative = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mediaDuration: Schema.optional(Schema.Number),
  progressOffset: Schema.optional(VideoOffset),
  requiredFlashPluginVersion: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
  totalFileSize: Schema.optional(Schema.String),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  id: Schema.optional(Schema.String),
  backupImageFeatures: Schema.optional(Schema.Array(Schema.String)),
  htmlCodeLocked: Schema.optional(Schema.Boolean),
  fsCommand: Schema.optional(FsCommand),
  companionCreatives: Schema.optional(Schema.Array(Schema.String)),
  thirdPartyUrls: Schema.optional(Schema.Array(ThirdPartyTrackingUrl)),
  requiredFlashVersion: Schema.optional(Schema.Number),
  convertFlashToHtml5: Schema.optional(Schema.Boolean),
  backupImageReportingLabel: Schema.optional(Schema.String),
  skipOffset: Schema.optional(VideoOffset),
  additionalSizes: Schema.optional(Schema.Array(Size)),
  size: Schema.optional(Size),
  adTagKeys: Schema.optional(Schema.Array(Schema.String)),
  customKeyValues: Schema.optional(Schema.Array(Schema.String)),
  artworkType: Schema.optional(Schema.String),
  commercialId: Schema.optional(Schema.String),
  autoAdvanceImages: Schema.optional(Schema.Boolean),
  renderingIdDimensionValue: Schema.optional(DimensionValue),
  allowScriptAccess: Schema.optional(Schema.Boolean),
  studioTraffickedCreativeId: Schema.optional(Schema.String),
  renderingId: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  overrideCss: Schema.optional(Schema.String),
  sslOverride: Schema.optional(Schema.Boolean),
  mediaDescription: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  thirdPartyRichMediaImpressionsUrl: Schema.optional(Schema.String),
  skippable: Schema.optional(Schema.Boolean),
  version: Schema.optional(Schema.Number),
  backgroundColor: Schema.optional(Schema.String),
  studioCreativeId: Schema.optional(Schema.String),
  creativeFieldAssignments: Schema.optional(
    Schema.Array(CreativeFieldAssignment),
  ),
  adParameters: Schema.optional(Schema.String),
  timerCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  backupImageClickThroughUrl: Schema.optional(CreativeClickThroughUrl),
  archived: Schema.optional(Schema.Boolean),
  authoringSource: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  clickTags: Schema.optional(Schema.Array(ClickTag)),
  redirectUrl: Schema.optional(Schema.String),
  counterCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  obaIcon: Schema.optional(ObaIcon),
  exitCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  compatibility: Schema.optional(Schema.Array(Schema.String)),
  creativeAssets: Schema.optional(Schema.Array(CreativeAsset)),
  backupImageTargetWindow: Schema.optional(TargetWindow),
  htmlCode: Schema.optional(Schema.String),
  thirdPartyBackupImageImpressionsUrl: Schema.optional(Schema.String),
  studioAdvertiserId: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  authoringTool: Schema.optional(Schema.String),
  universalAdId: Schema.optional(UniversalAdId),
  latestTraffickedCreativeId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  sslCompliant: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Creative" });

export interface DefaultClickThroughEventTagProperties {
  /** ID of the click-through event tag to apply to all ads in this entity's scope. */
  defaultClickThroughEventTagId?: string;
  /** Whether this entity should override the inherited default click-through event tag with its own defined value. */
  overrideInheritedEventTag?: boolean;
}

export const DefaultClickThroughEventTagProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultClickThroughEventTagId: Schema.optional(Schema.String),
    overrideInheritedEventTag: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DefaultClickThroughEventTagProperties" });

export interface CreativesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Creative collection. */
  creatives?: ReadonlyArray<Creative>;
}

export const CreativesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  creatives: Schema.optional(Schema.Array(Creative)),
}).annotate({ identifier: "CreativesListResponse" });

export interface Metro {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro". */
  kind?: string;
  /** DART ID of the country to which this metro region belongs. */
  countryDartId?: string;
  /** Country code of the country to which this metro region belongs. */
  countryCode?: string;
  /** DART ID of this metro region. */
  dartId?: string;
  /** Name of this metro region. */
  name?: string;
  /** Metro code of this metro region. This is equivalent to dma_id. */
  metroCode?: string;
  /** DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code. */
  dmaId?: string;
}

export const Metro = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  countryDartId: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  dartId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  metroCode: Schema.optional(Schema.String),
  dmaId: Schema.optional(Schema.String),
}).annotate({ identifier: "Metro" });

export interface MetrosListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse". */
  kind?: string;
  /** Metro collection. */
  metros?: ReadonlyArray<Metro>;
}

export const MetrosListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  metros: Schema.optional(Schema.Array(Metro)),
}).annotate({ identifier: "MetrosListResponse" });

export interface CustomValueField {
  /** Optional. Field ID in the element. */
  fieldId?: number;
  /** Optional. Custom key used to match for auto filtering. */
  requestKey?: string;
}

export const CustomValueField = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldId: Schema.optional(Schema.Number),
  requestKey: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomValueField" });

export interface CustomRule {
  /** Optional. Priority of the custom rule. */
  priority?: number;
  /** Optional. Name of this custom rule. */
  name?: string;
  /** Optional. A list of field filter, the custom rule will apply. */
  ruleBlocks?: ReadonlyArray<RuleBlock>;
}

export const CustomRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  priority: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  ruleBlocks: Schema.optional(Schema.Array(RuleBlock)),
}).annotate({ identifier: "CustomRule" });

export interface RemarketingValueAttribute {
  /** Optional. Field ID in the element. */
  fieldId?: number;
  /** Optional. Remarketing user attribute IDs for auto filtering. */
  userAttributeIds?: ReadonlyArray<string>;
}

export const RemarketingValueAttribute =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.Number),
    userAttributeIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemarketingValueAttribute" });

export interface DynamicRules {
  /** Optional. The proximity targeting rules of the dynamic feed, only applicable when rule type is PROXIMITY_TARGETING. */
  proximityFilter?: ProximityFilter;
  /** Optional. The rotation type to select from eligible rows. Rotation type only apply when the filtering rule results in more than one eligible rows. */
  rotationType?:
    | "ROTATION_TYPE_UNKNOWN"
    | "RANDOM"
    | "OPTIMIZED"
    | "WEIGHTED"
    | (string & {});
  /** Optional. Mapping between field ID and custom key that are used to match for auto filtering. */
  customValueFields?: ReadonlyArray<CustomValueField>;
  /** Optional. The type of the rule, the default value is OPEN. */
  ruleType?:
    | "RULE_SET_TYPE_UNKNOWN"
    | "OPEN"
    | "AUTO"
    | "CUSTOM"
    | "PROXIMITY_TARGETING"
    | (string & {});
  /** Optional. The custom rules of the dynamic feed, only applicable when rule type is CUSTOM. */
  customRules?: ReadonlyArray<CustomRule>;
  /** Optional. The field ID for the feed that will be used for weighted rotation, only applicable when rotation type is WEIGHTED. */
  weightFieldId?: number;
  /** Optional. List of field IDs in this element that should be auto-targeted. Applicable when rule type is AUTO. */
  autoTargetedFieldIds?: ReadonlyArray<number>;
  /** Optional. The link between an element field ID and a list of user attribute IDs. */
  remarketingValueAttributes?: ReadonlyArray<RemarketingValueAttribute>;
}

export const DynamicRules = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  proximityFilter: Schema.optional(ProximityFilter),
  rotationType: Schema.optional(Schema.String),
  customValueFields: Schema.optional(Schema.Array(CustomValueField)),
  ruleType: Schema.optional(Schema.String),
  customRules: Schema.optional(Schema.Array(CustomRule)),
  weightFieldId: Schema.optional(Schema.Number),
  autoTargetedFieldIds: Schema.optional(Schema.Array(Schema.Number)),
  remarketingValueAttributes: Schema.optional(
    Schema.Array(RemarketingValueAttribute),
  ),
}).annotate({ identifier: "DynamicRules" });

export interface DynamicProfileFeedSettings {
  /** Optional. The number of this dynamic feed rows needed by the dynamic profile, default value is 1. Acceptable values are between 1 to 99, inclusive. */
  quantity?: number;
  /** Optional. Dynamic feed ID associated with dynamic profile version. */
  dynamicFeedId?: string;
  /** Optional. Dynamic rules for row selection for the given dynamic feed in the given dynamic profile. */
  dynamicRules?: DynamicRules;
}

export const DynamicProfileFeedSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quantity: Schema.optional(Schema.Number),
    dynamicFeedId: Schema.optional(Schema.String),
    dynamicRules: Schema.optional(DynamicRules),
  }).annotate({ identifier: "DynamicProfileFeedSettings" });

export interface DynamicProfileVersion {
  /** Output only. Version ID of this dynamic profile version. This is a read-only, auto-generated field. -1 for draft version, 0+ for published versions. */
  versionId?: string;
  /** Optional. Associated dynamic feeds and their settings (including dynamic rules) for this dynamic profile version. */
  dynamicProfileFeedSettings?: ReadonlyArray<DynamicProfileFeedSettings>;
}

export const DynamicProfileVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  versionId: Schema.optional(Schema.String),
  dynamicProfileFeedSettings: Schema.optional(
    Schema.Array(DynamicProfileFeedSettings),
  ),
}).annotate({ identifier: "DynamicProfileVersion" });

export interface MeasurementPartnerAdvertiserLink {
  /** Status of the partner link. */
  linkStatus?:
    | "MEASUREMENT_PARTNER_UNLINKED"
    | "MEASUREMENT_PARTNER_LINKED"
    | "MEASUREMENT_PARTNER_LINK_PENDING"
    | "MEASUREMENT_PARTNER_LINK_FAILURE"
    | "MEASUREMENT_PARTNER_LINK_OPT_OUT"
    | "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
    | "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
    | "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
    | "MEASUREMENT_PARTNER_UNLINK_PENDING"
    | (string & {});
  /** Measurement partner used for tag wrapping. */
  measurementPartner?:
    | "NONE"
    | "INTEGRAL_AD_SCIENCE"
    | "DOUBLE_VERIFY"
    | (string & {});
  /** partner Advertiser Id. */
  partnerAdvertiserId?: string;
}

export const MeasurementPartnerAdvertiserLink =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkStatus: Schema.optional(Schema.String),
    measurementPartner: Schema.optional(Schema.String),
    partnerAdvertiserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeasurementPartnerAdvertiserLink" });

export interface Advertiser {
  /** ID of this advertiser. This is a read-only, auto-generated field. */
  id?: string;
  /** Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field. */
  floodlightConfigurationIdDimensionValue?: DimensionValue;
  /** Status of this advertiser. */
  status?: "APPROVED" | "ON_HOLD" | (string & {});
  /** ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group. */
  advertiserGroupId?: string;
  /** Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement. */
  originalFloodlightConfigurationId?: string;
  /** Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account. */
  name?: string;
  /** Account ID of this advertiser.This is a read-only field that can be left blank. */
  accountId?: string;
  /** Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long. */
  clickThroughUrlSuffix?: string;
  /** Subaccount ID of this advertiser.This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser. */
  floodlightConfigurationId?: string;
  /** Default email address used in sender field for tag emails. */
  defaultEmail?: string;
  /** Dimension value for the ID of this advertiser. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Suspension status of this advertiser. */
  suspended?: boolean;
  /** Optional. Whether the advertiser plans to serve EU political ads. */
  euPoliticalAdsDeclaration?:
    | "ADVERTISER_PLANS_TO_SERVE_EU_POLITICAL_ADS"
    | "ADVERTISER_DOES_NOT_PLAN_TO_SERVE_EU_POLITICAL_ADS"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser". */
  kind?: string;
  /** ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns. */
  defaultClickThroughEventTagId?: string;
  /** Measurement partner advertiser link for tag wrapping. */
  measurementPartnerLink?: MeasurementPartnerAdvertiserLink;
}

export const Advertiser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  floodlightConfigurationIdDimensionValue: Schema.optional(DimensionValue),
  status: Schema.optional(Schema.String),
  advertiserGroupId: Schema.optional(Schema.String),
  originalFloodlightConfigurationId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  clickThroughUrlSuffix: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
  floodlightConfigurationId: Schema.optional(Schema.String),
  defaultEmail: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  suspended: Schema.optional(Schema.Boolean),
  euPoliticalAdsDeclaration: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  defaultClickThroughEventTagId: Schema.optional(Schema.String),
  measurementPartnerLink: Schema.optional(MeasurementPartnerAdvertiserLink),
}).annotate({ identifier: "Advertiser" });

export interface PlacementAssignment {
  /** Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslRequired?: boolean;
  /** Dimension value for the ID of the placement. This is a read-only, auto-generated field. */
  placementIdDimensionValue?: DimensionValue;
  /** ID of the placement to be assigned. This is a required field. */
  placementId?: string;
  /** Whether this placement assignment is active. When true, the placement will be included in the ad's rotation. */
  active?: boolean;
}

export const PlacementAssignment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sslRequired: Schema.optional(Schema.Boolean),
  placementIdDimensionValue: Schema.optional(DimensionValue),
  placementId: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PlacementAssignment" });

export interface CustomViewabilityMetricConfiguration {
  /** Whether the video must be audible to count an impression. */
  audible?: boolean;
  /** The percentage of video that must be on screen for the Custom Viewability Metric to count an impression. */
  viewabilityPercent?: number;
  /** The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used. */
  timeMillis?: number;
  /** The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used. */
  timePercent?: number;
}

export const CustomViewabilityMetricConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audible: Schema.optional(Schema.Boolean),
    viewabilityPercent: Schema.optional(Schema.Number),
    timeMillis: Schema.optional(Schema.Number),
    timePercent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CustomViewabilityMetricConfiguration" });

export interface CustomViewabilityMetric {
  /** ID of the custom viewability metric. */
  id?: string;
  /** Name of the custom viewability metric. */
  name?: string;
  /** Configuration of the custom viewability metric. */
  configuration?: CustomViewabilityMetricConfiguration;
}

export const CustomViewabilityMetric =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    configuration: Schema.optional(CustomViewabilityMetricConfiguration),
  }).annotate({ identifier: "CustomViewabilityMetric" });

export interface OmnitureSettings {
  /** Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled. */
  omnitureIntegrationEnabled?: boolean;
  /** Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true. */
  omnitureCostDataEnabled?: boolean;
}

export const OmnitureSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  omnitureIntegrationEnabled: Schema.optional(Schema.Boolean),
  omnitureCostDataEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "OmnitureSettings" });

export interface UserDefinedVariableConfiguration {
  /** Variable name in the tag. This is a required field. */
  variableType?:
    | "U1"
    | "U2"
    | "U3"
    | "U4"
    | "U5"
    | "U6"
    | "U7"
    | "U8"
    | "U9"
    | "U10"
    | "U11"
    | "U12"
    | "U13"
    | "U14"
    | "U15"
    | "U16"
    | "U17"
    | "U18"
    | "U19"
    | "U20"
    | "U21"
    | "U22"
    | "U23"
    | "U24"
    | "U25"
    | "U26"
    | "U27"
    | "U28"
    | "U29"
    | "U30"
    | "U31"
    | "U32"
    | "U33"
    | "U34"
    | "U35"
    | "U36"
    | "U37"
    | "U38"
    | "U39"
    | "U40"
    | "U41"
    | "U42"
    | "U43"
    | "U44"
    | "U45"
    | "U46"
    | "U47"
    | "U48"
    | "U49"
    | "U50"
    | "U51"
    | "U52"
    | "U53"
    | "U54"
    | "U55"
    | "U56"
    | "U57"
    | "U58"
    | "U59"
    | "U60"
    | "U61"
    | "U62"
    | "U63"
    | "U64"
    | "U65"
    | "U66"
    | "U67"
    | "U68"
    | "U69"
    | "U70"
    | "U71"
    | "U72"
    | "U73"
    | "U74"
    | "U75"
    | "U76"
    | "U77"
    | "U78"
    | "U79"
    | "U80"
    | "U81"
    | "U82"
    | "U83"
    | "U84"
    | "U85"
    | "U86"
    | "U87"
    | "U88"
    | "U89"
    | "U90"
    | "U91"
    | "U92"
    | "U93"
    | "U94"
    | "U95"
    | "U96"
    | "U97"
    | "U98"
    | "U99"
    | "U100"
    | (string & {});
  /** Data type for the variable. This is a required field. */
  dataType?: "STRING" | "NUMBER" | (string & {});
  /** User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>". */
  reportName?: string;
}

export const UserDefinedVariableConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variableType: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    reportName: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserDefinedVariableConfiguration" });

export interface ThirdPartyAuthenticationToken {
  /** Name of the third-party authentication token. */
  name?: string;
  /** Value of the third-party authentication token. This is a read-only, auto-generated field. */
  value?: string;
}

export const ThirdPartyAuthenticationToken =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThirdPartyAuthenticationToken" });

export interface FloodlightConfiguration {
  firstDayOfWeek?: "SUNDAY" | "MONDAY" | (string & {});
  /** Configuration settings for dynamic and image floodlight tags. */
  tagSettings?: TagSettings;
  /** Whether advertiser data is shared with Google Analytics. */
  analyticsDataSharingEnabled?: boolean;
  /** Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration". */
  kind?: string;
  /** Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
  exposureToConversionEnabled?: boolean;
  /** Custom Viewability metric for the floodlight configuration. */
  customViewabilityMetric?: CustomViewabilityMetric;
  /** Advertiser ID of the parent advertiser of this floodlight configuration. */
  advertiserId?: string;
  /** Lookback window settings for this floodlight configuration. */
  lookbackConfiguration?: LookbackConfiguration;
  /** ID of this floodlight configuration. This is a read-only, auto-generated field. */
  id?: string;
  /** Settings for Campaign Manager Omniture integration. */
  omnitureSettings?: OmnitureSettings;
  /** Types of attribution options for natural search conversions. */
  naturalSearchConversionAttributionOption?:
    | "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    | "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    | "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
    | (string & {});
  /** Account ID of this floodlight configuration. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Whether in-app attribution tracking is enabled. */
  inAppAttributionTrackingEnabled?: boolean;
  /** List of user defined variables enabled for this configuration. */
  userDefinedVariableConfigurations?: ReadonlyArray<UserDefinedVariableConfiguration>;
  /** List of third-party authentication tokens enabled for this configuration. */
  thirdPartyAuthenticationTokens?: ReadonlyArray<ThirdPartyAuthenticationToken>;
  /** Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank. */
  subaccountId?: string;
}

export const FloodlightConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstDayOfWeek: Schema.optional(Schema.String),
    tagSettings: Schema.optional(TagSettings),
    analyticsDataSharingEnabled: Schema.optional(Schema.Boolean),
    idDimensionValue: Schema.optional(DimensionValue),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    kind: Schema.optional(Schema.String),
    exposureToConversionEnabled: Schema.optional(Schema.Boolean),
    customViewabilityMetric: Schema.optional(CustomViewabilityMetric),
    advertiserId: Schema.optional(Schema.String),
    lookbackConfiguration: Schema.optional(LookbackConfiguration),
    id: Schema.optional(Schema.String),
    omnitureSettings: Schema.optional(OmnitureSettings),
    naturalSearchConversionAttributionOption: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    inAppAttributionTrackingEnabled: Schema.optional(Schema.Boolean),
    userDefinedVariableConfigurations: Schema.optional(
      Schema.Array(UserDefinedVariableConfiguration),
    ),
    thirdPartyAuthenticationTokens: Schema.optional(
      Schema.Array(ThirdPartyAuthenticationToken),
    ),
    subaccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightConfiguration" });

export interface FloodlightConfigurationsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse". */
  kind?: string;
  /** Floodlight configuration collection. */
  floodlightConfigurations?: ReadonlyArray<FloodlightConfiguration>;
}

export const FloodlightConfigurationsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    floodlightConfigurations: Schema.optional(
      Schema.Array(FloodlightConfiguration),
    ),
  }).annotate({ identifier: "FloodlightConfigurationsListResponse" });

export interface YoutubeSettings {
  /** Optional. The business name. */
  businessName?: string;
  /** Optional. The call to actions. Currently only one call to action is supported. */
  callToActions?: ReadonlyArray<
    | "CALL_TO_ACTION_UNKNOWN"
    | "CALL_TO_ACTION_LEARN_MORE"
    | "CALL_TO_ACTION_GET_QUOTE"
    | "CALL_TO_ACTION_APPLY_NOW"
    | "CALL_TO_ACTION_SIGN_UP"
    | "CALL_TO_ACTION_CONTACT_US"
    | "CALL_TO_ACTION_SUBSCRIBE"
    | "CALL_TO_ACTION_DOWNLOAD"
    | "CALL_TO_ACTION_BOOK_NOW"
    | "CALL_TO_ACTION_GET_OFFER"
    | "CALL_TO_ACTION_SHOP_NOW"
    | "CALL_TO_ACTION_VISIT_STORE"
    | "CALL_TO_ACTION_CALL_NOW"
    | "CALL_TO_ACTION_VIEW_MENU"
    | "CALL_TO_ACTION_TEST_DRIVE"
    | "CALL_TO_ACTION_SCHEDULE_NOW"
    | "CALL_TO_ACTION_BUY_NOW"
    | "CALL_TO_ACTION_DONATE_NOW"
    | "CALL_TO_ACTION_ORDER_NOW"
    | "CALL_TO_ACTION_PLAY_NOW"
    | "CALL_TO_ACTION_SEE_MORE"
    | "CALL_TO_ACTION_START_NOW"
    | "CALL_TO_ACTION_VISIT_SITE"
    | "CALL_TO_ACTION_WATCH_NOW"
    | (string & {})
  >;
  /** Optional. The long headlines. Currently only one long headline is supported. */
  longHeadlines?: ReadonlyArray<string>;
  /** Optional. The IDs of the creatives to use for the business logo. Currently only one creative is supported. */
  businessLogoCreativeIds?: ReadonlyArray<string>;
  /** Optional. The headlines associated with the call to actions. Currently only one headline is supported. */
  headlines?: ReadonlyArray<string>;
  /** Optional. The descriptions. Currently only one description is supported. */
  descriptions?: ReadonlyArray<string>;
}

export const YoutubeSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  businessName: Schema.optional(Schema.String),
  callToActions: Schema.optional(Schema.Array(Schema.String)),
  longHeadlines: Schema.optional(Schema.Array(Schema.String)),
  businessLogoCreativeIds: Schema.optional(Schema.Array(Schema.String)),
  headlines: Schema.optional(Schema.Array(Schema.String)),
  descriptions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "YoutubeSettings" });

export interface MobileCarriersListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse". */
  kind?: string;
  /** Mobile carrier collection. */
  mobileCarriers?: ReadonlyArray<MobileCarrier>;
}

export const MobileCarriersListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    mobileCarriers: Schema.optional(Schema.Array(MobileCarrier)),
  }).annotate({ identifier: "MobileCarriersListResponse" });

export interface PlatformType {
  /** ID of this platform type. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType". */
  kind?: string;
  /** Name of this platform type. */
  name?: string;
}

export const PlatformType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "PlatformType" });

export interface PlatformTypesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse". */
  kind?: string;
  /** Platform type collection. */
  platformTypes?: ReadonlyArray<PlatformType>;
}

export const PlatformTypesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    platformTypes: Schema.optional(Schema.Array(PlatformType)),
  }).annotate({ identifier: "PlatformTypesListResponse" });

export interface City {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#city". */
  kind?: string;
  /** DART ID of the country to which this city belongs. */
  countryDartId?: string;
  /** DART ID of this city. This is the ID used for targeting and generating reports. */
  dartId?: string;
  /** Country code of the country to which this city belongs. */
  countryCode?: string;
  /** DART ID of the region to which this city belongs. */
  regionDartId?: string;
  /** Region code of the region to which this city belongs. */
  regionCode?: string;
  /** Name of this city. */
  name?: string;
  /** Metro region code of the metro region (DMA) to which this city belongs. */
  metroCode?: string;
  /** ID of the metro region (DMA) to which this city belongs. */
  metroDmaId?: string;
}

export const City = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  countryDartId: Schema.optional(Schema.String),
  dartId: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  regionDartId: Schema.optional(Schema.String),
  regionCode: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  metroCode: Schema.optional(Schema.String),
  metroDmaId: Schema.optional(Schema.String),
}).annotate({ identifier: "City" });

export interface CitiesListResponse {
  /** City collection. */
  cities?: ReadonlyArray<City>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse". */
  kind?: string;
}

export const CitiesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cities: Schema.optional(Schema.Array(City)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "CitiesListResponse" });

export interface KeyValueTargetingExpression {
  /** Keyword expression being targeted by the ad. */
  expression?: string;
}

export const KeyValueTargetingExpression =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyValueTargetingExpression" });

export interface DayPartTargeting {
  /** Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive. */
  hoursOfDay?: ReadonlyArray<number>;
  /** Whether or not to use the user's local time. If false, the America/New York time zone applies. */
  userLocalTime?: boolean;
  /** Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" - "THURSDAY" - "FRIDAY" - "SATURDAY" */
  daysOfWeek?: ReadonlyArray<
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | (string & {})
  >;
}

export const DayPartTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hoursOfDay: Schema.optional(Schema.Array(Schema.Number)),
  userLocalTime: Schema.optional(Schema.Boolean),
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "DayPartTargeting" });

export interface ClickThroughUrlSuffixProperties {
  /** Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long. */
  clickThroughUrlSuffix?: string;
  /** Whether this entity should override the inherited click-through URL suffix with its own defined value. */
  overrideInheritedSuffix?: boolean;
}

export const ClickThroughUrlSuffixProperties =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clickThroughUrlSuffix: Schema.optional(Schema.String),
    overrideInheritedSuffix: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ClickThroughUrlSuffixProperties" });

export interface Language {
  /** Language ID of this language. This is the ID used for targeting and generating reports. */
  id?: string;
  /** Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese. */
  languageCode?: string;
  /** Name of this language. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#language". */
  kind?: string;
}

export const Language = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Language" });

export interface LanguageTargeting {
  /** Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated. */
  languages?: ReadonlyArray<Language>;
}

export const LanguageTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  languages: Schema.optional(Schema.Array(Language)),
}).annotate({ identifier: "LanguageTargeting" });

export interface EventTagOverride {
  /** ID of this event tag override. This is a read-only, auto-generated field. */
  id?: string;
  /** Whether this override is enabled. */
  enabled?: boolean;
}

export const EventTagOverride = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "EventTagOverride" });

export interface PostalCode {
  /** ID of this postal code. */
  id?: string;
  /** Country code of the country to which this postal code belongs. */
  countryCode?: string;
  /** Postal code. This is equivalent to the id field. */
  code?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode". */
  kind?: string;
  /** DART ID of the country to which this postal code belongs. */
  countryDartId?: string;
}

export const PostalCode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  countryDartId: Schema.optional(Schema.String),
}).annotate({ identifier: "PostalCode" });

export interface GeoTargeting {
  /** Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city. */
  cities?: ReadonlyArray<City>;
  /** Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code. */
  postalCodes?: ReadonlyArray<PostalCode>;
  /** Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro. */
  metros?: ReadonlyArray<Metro>;
  /** Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country. */
  countries?: ReadonlyArray<Country>;
  /** Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region. */
  regions?: ReadonlyArray<Region>;
  /** Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad. */
  excludeCountries?: boolean;
}

export const GeoTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cities: Schema.optional(Schema.Array(City)),
  postalCodes: Schema.optional(Schema.Array(PostalCode)),
  metros: Schema.optional(Schema.Array(Metro)),
  countries: Schema.optional(Schema.Array(Country)),
  regions: Schema.optional(Schema.Array(Region)),
  excludeCountries: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "GeoTargeting" });

export interface ContextualKeyword {
  /** The keyword that can be targeted by ads. */
  keyword?: string;
}

export const ContextualKeyword = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyword: Schema.optional(Schema.String),
}).annotate({ identifier: "ContextualKeyword" });

export interface ContextualKeywordTargeting {
  /** Contextual keywords that this ad targets */
  keywords?: ReadonlyArray<ContextualKeyword>;
}

export const ContextualKeywordTargeting =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keywords: Schema.optional(Schema.Array(ContextualKeyword)),
  }).annotate({ identifier: "ContextualKeywordTargeting" });

export interface OperatingSystemVersion {
  /** ID of this operating system version. */
  id?: string;
  /** Major version (leftmost number) of this operating system version. */
  majorVersion?: string;
  /** Minor version (number after the first dot) of this operating system version. */
  minorVersion?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion". */
  kind?: string;
  /** Name of this operating system version. */
  name?: string;
  /** Operating system of this operating system version. */
  operatingSystem?: OperatingSystem;
}

export const OperatingSystemVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    majorVersion: Schema.optional(Schema.String),
    minorVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    operatingSystem: Schema.optional(OperatingSystem),
  },
).annotate({ identifier: "OperatingSystemVersion" });

export interface Browser {
  /** DART ID of this browser. This is the ID used when generating reports. */
  dartId?: string;
  /** Name of this browser. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser". */
  kind?: string;
  /** ID referring to this grouping of browser and version numbers. This is the ID used for targeting. */
  browserVersionId?: string;
  /** Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
  majorVersion?: string;
  /** Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
  minorVersion?: string;
}

export const Browser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dartId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  browserVersionId: Schema.optional(Schema.String),
  majorVersion: Schema.optional(Schema.String),
  minorVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "Browser" });

export interface TechnologyTargeting {
  /** Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated. */
  platformTypes?: ReadonlyArray<PlatformType>;
  /** Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system. */
  operatingSystems?: ReadonlyArray<OperatingSystem>;
  /** Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes. */
  mobileCarriers?: ReadonlyArray<MobileCarrier>;
  /** Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated. */
  connectionTypes?: ReadonlyArray<ConnectionType>;
  /** Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems. */
  operatingSystemVersions?: ReadonlyArray<OperatingSystemVersion>;
  /** Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated. */
  browsers?: ReadonlyArray<Browser>;
}

export const TechnologyTargeting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  platformTypes: Schema.optional(Schema.Array(PlatformType)),
  operatingSystems: Schema.optional(Schema.Array(OperatingSystem)),
  mobileCarriers: Schema.optional(Schema.Array(MobileCarrier)),
  connectionTypes: Schema.optional(Schema.Array(ConnectionType)),
  operatingSystemVersions: Schema.optional(
    Schema.Array(OperatingSystemVersion),
  ),
  browsers: Schema.optional(Schema.Array(Browser)),
}).annotate({ identifier: "TechnologyTargeting" });

export interface Ad {
  /** Campaign ID of this ad. This is a required field on insertion. */
  campaignId?: string;
  /** Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment . */
  creativeRotation?: CreativeRotation;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad". */
  kind?: string;
  /** Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD. */
  deliverySchedule?: DeliverySchedule;
  /** Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslRequired?: boolean;
  /** Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  keyValueTargetingExpression?: KeyValueTargetingExpression;
  startTime?: string;
  /** Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  dayPartTargeting?: DayPartTargeting;
  /** Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative. */
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
  /** Information about the most recent modification of this ad. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Subaccount ID of this ad. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Language targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  languageTargeting?: LanguageTargeting;
  /** Event tag overrides for this ad. */
  eventTagOverrides?: ReadonlyArray<EventTagOverride>;
  /** Information about the creation of this ad. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments. */
  creativeGroupAssignments?: ReadonlyArray<CreativeGroupAssignment>;
  /** Name of this ad. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Whether this ad is archived. When true, active must be false. */
  archived?: boolean;
  /** Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER. */
  clickThroughUrl?: ClickThroughUrl;
  /** ID of this ad. This is a read-only, auto-generated field. */
  id?: string;
  /** Whether this ad is active. When true, archived must be false. */
  active?: boolean;
  /** Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslCompliant?: boolean;
  /** Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  geoTargeting?: GeoTargeting;
  /** Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource). */
  type?:
    | "AD_SERVING_STANDARD_AD"
    | "AD_SERVING_DEFAULT_AD"
    | "AD_SERVING_CLICK_TRACKER"
    | "AD_SERVING_TRACKING"
    | "AD_SERVING_BRAND_SAFE_AD"
    | (string & {});
  /** Optional. Contextual keyword targeting information for this ad. */
  contextualKeywordTargeting?: ContextualKeywordTargeting;
  /** Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert. */
  dynamicClickTracker?: boolean;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD. */
  targetingTemplateId?: string;
  /** Dimension value for the ID of this ad. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Default click-through event tag properties for this ad. */
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. */
  size?: Size;
  /** Account ID of this ad. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  technologyTargeting?: TechnologyTargeting;
  /** Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD. */
  audienceSegmentId?: string;
  /** Placement assignments for this ad. */
  placementAssignments?: ReadonlyArray<PlacementAssignment>;
  endTime?: string;
  /** Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  remarketingListExpression?: ListTargetingExpression;
  /** Advertiser ID of this ad. This is a required field on insertion. */
  advertiserId?: string;
  /** Comments for this ad. */
  comments?: string;
}

export const Ad = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  campaignId: Schema.optional(Schema.String),
  creativeRotation: Schema.optional(CreativeRotation),
  kind: Schema.optional(Schema.String),
  deliverySchedule: Schema.optional(DeliverySchedule),
  sslRequired: Schema.optional(Schema.Boolean),
  compatibility: Schema.optional(Schema.String),
  keyValueTargetingExpression: Schema.optional(KeyValueTargetingExpression),
  startTime: Schema.optional(Schema.String),
  dayPartTargeting: Schema.optional(DayPartTargeting),
  clickThroughUrlSuffixProperties: Schema.optional(
    ClickThroughUrlSuffixProperties,
  ),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  subaccountId: Schema.optional(Schema.String),
  languageTargeting: Schema.optional(LanguageTargeting),
  eventTagOverrides: Schema.optional(Schema.Array(EventTagOverride)),
  createInfo: Schema.optional(LastModifiedInfo),
  creativeGroupAssignments: Schema.optional(
    Schema.Array(CreativeGroupAssignment),
  ),
  name: Schema.optional(Schema.String),
  archived: Schema.optional(Schema.Boolean),
  clickThroughUrl: Schema.optional(ClickThroughUrl),
  id: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  sslCompliant: Schema.optional(Schema.Boolean),
  geoTargeting: Schema.optional(GeoTargeting),
  type: Schema.optional(Schema.String),
  contextualKeywordTargeting: Schema.optional(ContextualKeywordTargeting),
  dynamicClickTracker: Schema.optional(Schema.Boolean),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  targetingTemplateId: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  defaultClickThroughEventTagProperties: Schema.optional(
    DefaultClickThroughEventTagProperties,
  ),
  campaignIdDimensionValue: Schema.optional(DimensionValue),
  size: Schema.optional(Size),
  accountId: Schema.optional(Schema.String),
  technologyTargeting: Schema.optional(TechnologyTargeting),
  audienceSegmentId: Schema.optional(Schema.String),
  placementAssignments: Schema.optional(Schema.Array(PlacementAssignment)),
  endTime: Schema.optional(Schema.String),
  remarketingListExpression: Schema.optional(ListTargetingExpression),
  advertiserId: Schema.optional(Schema.String),
  comments: Schema.optional(Schema.String),
}).annotate({ identifier: "Ad" });

export interface FloodlightActivityGroup {
  /** Floodlight configuration ID of this floodlight activity group. This is a required field. */
  floodlightConfigurationId?: string;
  /** Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup". */
  kind?: string;
  /** Type of the floodlight activity group. This is a required field that is read-only after insertion. */
  type?: "COUNTER" | "SALE" | (string & {});
  /** Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes. */
  name?: string;
  /** Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion. */
  tagString?: string;
  /** Account ID of this floodlight activity group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser. */
  advertiserId?: string;
  /** Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field. */
  floodlightConfigurationIdDimensionValue?: DimensionValue;
  /** ID of this floodlight activity group. This is a read-only, auto-generated field. */
  id?: string;
  /** Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
}

export const FloodlightActivityGroup =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightConfigurationId: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tagString: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    advertiserId: Schema.optional(Schema.String),
    floodlightConfigurationIdDimensionValue: Schema.optional(DimensionValue),
    id: Schema.optional(Schema.String),
    idDimensionValue: Schema.optional(DimensionValue),
  }).annotate({ identifier: "FloodlightActivityGroup" });

export interface FloodlightActivityGroupsListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse". */
  kind?: string;
  /** Floodlight activity group collection. */
  floodlightActivityGroups?: ReadonlyArray<FloodlightActivityGroup>;
}

export const FloodlightActivityGroupsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    floodlightActivityGroups: Schema.optional(
      Schema.Array(FloodlightActivityGroup),
    ),
  }).annotate({ identifier: "FloodlightActivityGroupsListResponse" });

export interface Account {
  /** Description of this account. */
  description?: string;
  /** User role permissions available to the user roles of this account. */
  availablePermissionIds?: ReadonlyArray<string>;
  /** Default placement dimensions for this account. */
  defaultCreativeSizeId?: string;
  /** Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions. */
  activeViewOptOut?: boolean;
  /** Reporting configuration of this account. */
  reportsConfiguration?: ReportsConfiguration;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#account". */
  kind?: string;
  /** Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
  locale?: string;
  /** Maximum number of active ads allowed for this account. */
  activeAdsLimitTier?:
    | "ACTIVE_ADS_TIER_40K"
    | "ACTIVE_ADS_TIER_75K"
    | "ACTIVE_ADS_TIER_100K"
    | "ACTIVE_ADS_TIER_200K"
    | "ACTIVE_ADS_TIER_300K"
    | "ACTIVE_ADS_TIER_500K"
    | "ACTIVE_ADS_TIER_750K"
    | "ACTIVE_ADS_TIER_1M"
    | (string & {});
  /** ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP */
  currencyId?: string;
  /** Whether this account is active. */
  active?: boolean;
  /** Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1. */
  maximumImageSize?: string;
  /** Profile for this account. This is a read-only field that can be left blank. */
  accountProfile?:
    | "ACCOUNT_PROFILE_BASIC"
    | "ACCOUNT_PROFILE_STANDARD"
    | (string & {});
  /** Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default. */
  nielsenOcrEnabled?: boolean;
  /** Account permissions assigned to this account. */
  accountPermissionIds?: ReadonlyArray<string>;
  /** ID of this account. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this account. This is a required field, and must be less than 128 characters long and be globally unique. */
  name?: string;
  /** ID of the country associated with this account. */
  countryId?: string;
  /** Share Path to Conversion reports with Twitter. */
  shareReportsWithTwitter?: boolean;
  /** File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive. */
  teaserSizeLimit?: string;
}

export const Account = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  availablePermissionIds: Schema.optional(Schema.Array(Schema.String)),
  defaultCreativeSizeId: Schema.optional(Schema.String),
  activeViewOptOut: Schema.optional(Schema.Boolean),
  reportsConfiguration: Schema.optional(ReportsConfiguration),
  kind: Schema.optional(Schema.String),
  locale: Schema.optional(Schema.String),
  activeAdsLimitTier: Schema.optional(Schema.String),
  currencyId: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  maximumImageSize: Schema.optional(Schema.String),
  accountProfile: Schema.optional(Schema.String),
  nielsenOcrEnabled: Schema.optional(Schema.Boolean),
  accountPermissionIds: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  countryId: Schema.optional(Schema.String),
  shareReportsWithTwitter: Schema.optional(Schema.Boolean),
  teaserSizeLimit: Schema.optional(Schema.String),
}).annotate({ identifier: "Account" });

export interface EncryptionInfo {
  /** Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. */
  encryptionSource?:
    | "ENCRYPTION_SCOPE_UNKNOWN"
    | "AD_SERVING"
    | "DATA_TRANSFER"
    | (string & {});
  /** The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer. */
  encryptionEntityType?:
    | "ENCRYPTION_ENTITY_TYPE_UNKNOWN"
    | "DCM_ACCOUNT"
    | "DCM_ADVERTISER"
    | "DBM_PARTNER"
    | "DBM_ADVERTISER"
    | "ADWORDS_CUSTOMER"
    | "DFP_NETWORK_CODE"
    | (string & {});
  /** The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer. */
  encryptionEntityId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo". */
  kind?: string;
}

export const EncryptionInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  encryptionSource: Schema.optional(Schema.String),
  encryptionEntityType: Schema.optional(Schema.String),
  encryptionEntityId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "EncryptionInfo" });

export interface ConversionsBatchInsertRequest {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest". */
  kind?: string;
  /** The set of conversions to insert. */
  conversions?: ReadonlyArray<Conversion>;
  /** Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId or encryptedUserIdCandidates[] is used. */
  encryptionInfo?: EncryptionInfo;
}

export const ConversionsBatchInsertRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    conversions: Schema.optional(Schema.Array(Conversion)),
    encryptionInfo: Schema.optional(EncryptionInfo),
  }).annotate({ identifier: "ConversionsBatchInsertRequest" });

export interface MeasurementPartnerCampaignLink {
  /** . */
  linkStatus?:
    | "MEASUREMENT_PARTNER_UNLINKED"
    | "MEASUREMENT_PARTNER_LINKED"
    | "MEASUREMENT_PARTNER_LINK_PENDING"
    | "MEASUREMENT_PARTNER_LINK_FAILURE"
    | "MEASUREMENT_PARTNER_LINK_OPT_OUT"
    | "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
    | "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
    | "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
    | "MEASUREMENT_PARTNER_UNLINK_PENDING"
    | (string & {});
  /** Partner campaign ID needed for establishing linking with Measurement partner. */
  partnerCampaignId?: string;
  /** Measurement partner used for tag wrapping. */
  measurementPartner?:
    | "NONE"
    | "INTEGRAL_AD_SCIENCE"
    | "DOUBLE_VERIFY"
    | (string & {});
}

export const MeasurementPartnerCampaignLink =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkStatus: Schema.optional(Schema.String),
    partnerCampaignId: Schema.optional(Schema.String),
    measurementPartner: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeasurementPartnerCampaignLink" });

export interface AdvertiserLandingPagesListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse". */
  kind?: string;
  /** Landing page collection */
  landingPages?: ReadonlyArray<LandingPage>;
}

export const AdvertiserLandingPagesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    landingPages: Schema.optional(Schema.Array(LandingPage)),
  }).annotate({ identifier: "AdvertiserLandingPagesListResponse" });

export interface ConversionsBatchUpdateRequest {
  /** The set of conversions to update. */
  conversions?: ReadonlyArray<Conversion>;
  /** Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used. */
  encryptionInfo?: EncryptionInfo;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest". */
  kind?: string;
}

export const ConversionsBatchUpdateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversions: Schema.optional(Schema.Array(Conversion)),
    encryptionInfo: Schema.optional(EncryptionInfo),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionsBatchUpdateRequest" });

export interface AccountPermissionGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupGroupsListResponse". */
  kind?: string;
  /** Account permission group collection. */
  accountPermissionGroups?: ReadonlyArray<AccountPermissionGroup>;
}

export const AccountPermissionGroupsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    accountPermissionGroups: Schema.optional(
      Schema.Array(AccountPermissionGroup),
    ),
  }).annotate({ identifier: "AccountPermissionGroupsListResponse" });

export interface MeasurementPartnerWrappingData {
  /** Tag provided by the measurement partner during wrapping. */
  wrappedTag?: string;
  /** Measurement mode for the wrapped placement. */
  tagWrappingMode?:
    | "NONE"
    | "BLOCKING"
    | "MONITORING"
    | "MONITORING_READ_ONLY"
    | "VIDEO_PIXEL_MONITORING"
    | "TRACKING"
    | "VPAID_MONITORING"
    | "VPAID_BLOCKING"
    | "NON_VPAID_MONITORING"
    | "VPAID_ONLY_MONITORING"
    | "VPAID_ONLY_BLOCKING"
    | "VPAID_ONLY_FILTERING"
    | "VPAID_FILTERING"
    | "NON_VPAID_FILTERING"
    | "BLOCKING_FILTERING_VPAID"
    | "BLOCKING_FILTERING_VPAID_ONLY"
    | (string & {});
  /** Measurement partner used for wrapping the placement. */
  measurementPartner?:
    | "NONE"
    | "INTEGRAL_AD_SCIENCE"
    | "DOUBLE_VERIFY"
    | (string & {});
  /** Placement wrapping status. */
  linkStatus?:
    | "MEASUREMENT_PARTNER_UNLINKED"
    | "MEASUREMENT_PARTNER_LINKED"
    | "MEASUREMENT_PARTNER_LINK_PENDING"
    | "MEASUREMENT_PARTNER_LINK_FAILURE"
    | "MEASUREMENT_PARTNER_LINK_OPT_OUT"
    | "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
    | "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
    | "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
    | "MEASUREMENT_PARTNER_UNLINK_PENDING"
    | (string & {});
}

export const MeasurementPartnerWrappingData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wrappedTag: Schema.optional(Schema.String),
    tagWrappingMode: Schema.optional(Schema.String),
    measurementPartner: Schema.optional(Schema.String),
    linkStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeasurementPartnerWrappingData" });

export interface TvCampaignTimepoint {
  /** The spend within the time range of the timepoint. */
  spend?: number;
  /** The date window of the timepoint. */
  dateWindow?:
    | "WEEKS_UNSPECIFIED"
    | "DAYS_ONE"
    | "WEEKS_ONE"
    | "WEEKS_FOUR"
    | "WEEKS_EIGHT"
    | "WEEKS_TWELVE"
    | (string & {});
  /** The start date of the timepoint. A string in the format of "yyyy-MM-dd". */
  startDate?: string;
}

export const TvCampaignTimepoint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spend: Schema.optional(Schema.Number),
  dateWindow: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
}).annotate({ identifier: "TvCampaignTimepoint" });

export interface TvCampaignDetail {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#tvCampaignSummary". */
  kind?: string;
  /** ID of this TV campaign. */
  id?: string;
  /** The timepoints of the TV campaign. */
  timepoints?: ReadonlyArray<TvCampaignTimepoint>;
}

export const TvCampaignDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  timepoints: Schema.optional(Schema.Array(TvCampaignTimepoint)),
}).annotate({ identifier: "TvCampaignDetail" });

export interface Placement {
  /** Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement. */
  primary?: boolean;
  /** ID of this placement's group, if applicable. */
  placementGroupId?: string;
  /** Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** Whether creatives assigned to this placement must be SSL-compliant. */
  sslRequired?: boolean;
  /** External ID for this placement. */
  externalId?: string;
  /** Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements. */
  paymentApproved?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement". */
  kind?: string;
  /** Campaign ID of this placement. This field is a required field on insertion. */
  campaignId?: string;
  /** ID of the placement strategy assigned to this placement. */
  placementStrategyId?: string;
  /** Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT" */
  tagFormats?: ReadonlyArray<
    | "PLACEMENT_TAG_STANDARD"
    | "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
    | "PLACEMENT_TAG_IFRAME_ILAYER"
    | "PLACEMENT_TAG_INTERNAL_REDIRECT"
    | "PLACEMENT_TAG_JAVASCRIPT"
    | "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
    | "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
    | "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
    | "PLACEMENT_TAG_CLICK_COMMANDS"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
    | "PLACEMENT_TAG_TRACKING"
    | "PLACEMENT_TAG_TRACKING_IFRAME"
    | "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
    | "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
    | "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
    | (string & {})
  >;
  /** Optional. Whether the ads in the placement are served by another platform and CM is only used for tracking or they are served by CM. A false value indicates the ad is served by CM. */
  siteServed?: boolean;
  /** Optional. YouTube settings for the placement. The placement must be enabled for YouTube to use this field. */
  youtubeSettings?: YoutubeSettings;
  /** ID of this placement. This is a read-only, auto-generated field. */
  id?: string;
  /** Dimension value for the ID of the placement group. This is a read-only, auto-generated field. */
  placementGroupIdDimensionValue?: DimensionValue;
  /** Measurement partner provided settings for a wrapped placement. */
  partnerWrappingData?: MeasurementPartnerWrappingData;
  /** ID of the content category assigned to this placement. */
  contentCategoryId?: string;
  /** Name of this placement.This is a required field and must be less than or equal to 512 characters long. */
  name?: string;
  /** Tag settings for this placement. */
  tagSetting?: TagSetting;
  /** Dimension value for the ID of the directory site. This is a read-only, auto-generated field. */
  directorySiteIdDimensionValue?: DimensionValue;
  /** Dimension value for the ID of the site. This is a read-only, auto-generated field. */
  siteIdDimensionValue?: DimensionValue;
  /** Information about the creation of this placement. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Information about the most recent modification of this placement. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect. */
  adBlockingOptOut?: boolean;
  /** Subaccount ID of this placement. This field can be left blank. */
  subaccountId?: string;
  /** Optional. Conversion domain overrides for a placement. */
  conversionDomainOverride?: PlacementConversionDomainOverride;
  /** Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView. */
  videoActiveViewOptOut?: boolean;
  /** Dimension value for the ID of this placement. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Whether this placement opts out of tag wrapping. */
  wrappingOptOut?: boolean;
  /** Comments for this placement. */
  comment?: string;
  /** Whether this placement is active, inactive, archived or permanently archived. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {});
  /** Information about the last publisher update. This is a read-only field. */
  publisherUpdateInfo?: LastModifiedInfo;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType. */
  pricingSchedule?: PricingSchedule;
  /** VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
  vpaidAdapterChoice?: "DEFAULT" | "FLASH" | "HTML5" | "BOTH" | (string & {});
  /** Key name of this placement. This is a read-only, auto-generated field. */
  keyName?: string;
  /** Optional. Whether the placement is enabled for YouTube integration. */
  allowOnYoutube?: boolean;
  /** Advertiser ID of this placement. This field can be left blank. */
  advertiserId?: string;
  /** Lookback window settings for this placement. */
  lookbackConfiguration?: LookbackConfiguration;
  /** Optional. Ad serving platform ID to identify the ad serving platform used by the placement. Measurement partners can use this field to add ad-server specific macros. Possible values are: * `1`, Adelphic * `2`, Adform * `3`, Adobe * `4`, Amobee * `5`, Basis (Centro) * `6`, Beeswax * `7`, Amazon * `8`, DV360 (DBM) * `9`, Innovid * `10`, MediaMath * `11`, Roku OneView DSP * `12`, TabMo Hawk * `13`, The Trade Desk * `14`, Xandr Invest DSP * `15`, Yahoo DSP * `16`, Zeta Global * `17`, Scaleout * `18`, Bidtellect * `19`, Unicorn * `20`, Teads * `21`, Quantcast * `22`, Cognitiv * `23`, AdTheorent * `24`, DeepIntent * `25`, Pulsepoint */
  adServingPlatformId?: string;
  /** Third-party placement status. */
  status?:
    | "PENDING_REVIEW"
    | "PAYMENT_ACCEPTED"
    | "PAYMENT_REJECTED"
    | "ACKNOWLEDGE_REJECTION"
    | "ACKNOWLEDGE_ACCEPTANCE"
    | "DRAFT"
    | (string & {});
  /** A collection of settings which affect video creatives served through this placement. Applicable to placements with IN_STREAM_VIDEO compatibility. */
  videoSettings?: VideoSettings;
  /** Account ID of this placement. This field can be left blank. */
  accountId?: string;
  /** Payment source for this placement. This is a required field that is read-only after insertion. */
  paymentSource?:
    | "PLACEMENT_AGENCY_PAID"
    | "PLACEMENT_PUBLISHER_PAID"
    | (string & {});
  /** Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used. */
  additionalSizes?: ReadonlyArray<Size>;
  /** Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
  directorySiteId?: string;
  /** Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion. */
  size?: Size;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
  siteId?: string;
}

export const Placement = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primary: Schema.optional(Schema.Boolean),
  placementGroupId: Schema.optional(Schema.String),
  compatibility: Schema.optional(Schema.String),
  sslRequired: Schema.optional(Schema.Boolean),
  externalId: Schema.optional(Schema.String),
  paymentApproved: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  campaignId: Schema.optional(Schema.String),
  placementStrategyId: Schema.optional(Schema.String),
  tagFormats: Schema.optional(Schema.Array(Schema.String)),
  siteServed: Schema.optional(Schema.Boolean),
  youtubeSettings: Schema.optional(YoutubeSettings),
  id: Schema.optional(Schema.String),
  placementGroupIdDimensionValue: Schema.optional(DimensionValue),
  partnerWrappingData: Schema.optional(MeasurementPartnerWrappingData),
  contentCategoryId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  tagSetting: Schema.optional(TagSetting),
  directorySiteIdDimensionValue: Schema.optional(DimensionValue),
  siteIdDimensionValue: Schema.optional(DimensionValue),
  createInfo: Schema.optional(LastModifiedInfo),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  adBlockingOptOut: Schema.optional(Schema.Boolean),
  subaccountId: Schema.optional(Schema.String),
  conversionDomainOverride: Schema.optional(PlacementConversionDomainOverride),
  videoActiveViewOptOut: Schema.optional(Schema.Boolean),
  idDimensionValue: Schema.optional(DimensionValue),
  wrappingOptOut: Schema.optional(Schema.Boolean),
  comment: Schema.optional(Schema.String),
  activeStatus: Schema.optional(Schema.String),
  publisherUpdateInfo: Schema.optional(LastModifiedInfo),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  pricingSchedule: Schema.optional(PricingSchedule),
  vpaidAdapterChoice: Schema.optional(Schema.String),
  keyName: Schema.optional(Schema.String),
  allowOnYoutube: Schema.optional(Schema.Boolean),
  advertiserId: Schema.optional(Schema.String),
  lookbackConfiguration: Schema.optional(LookbackConfiguration),
  adServingPlatformId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  videoSettings: Schema.optional(VideoSettings),
  accountId: Schema.optional(Schema.String),
  paymentSource: Schema.optional(Schema.String),
  additionalSizes: Schema.optional(Schema.Array(Size)),
  directorySiteId: Schema.optional(Schema.String),
  size: Schema.optional(Size),
  campaignIdDimensionValue: Schema.optional(DimensionValue),
  siteId: Schema.optional(Schema.String),
}).annotate({ identifier: "Placement" });

export interface File {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#file". */
  kind?: string;
  /** The filename of the file. */
  fileName?: string;
  /** The ID of the report this file was generated from. */
  reportId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The output format of the report. Only available once the file is available. */
  format?: "CSV" | "EXCEL" | (string & {});
  /** The URLs where the completed report file can be downloaded. */
  urls?: { browserUrl?: string; apiUrl?: string };
  /** The date range for which the file has report data. The date range will always be the absolute date range for which the report is run. */
  dateRange?: DateRange;
  /** The status of the report file. */
  status?:
    | "PROCESSING"
    | "REPORT_AVAILABLE"
    | "FAILED"
    | "CANCELLED"
    | "QUEUED"
    | (string & {});
  /** The timestamp in milliseconds since epoch when this file was last modified. */
  lastModifiedTime?: string;
  /** The unique ID of this report file. */
  id?: string;
}

export const File = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  fileName: Schema.optional(Schema.String),
  reportId: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  urls: Schema.optional(
    Schema.Struct({
      browserUrl: Schema.optional(Schema.String),
      apiUrl: Schema.optional(Schema.String),
    }),
  ),
  dateRange: Schema.optional(DateRange),
  status: Schema.optional(Schema.String),
  lastModifiedTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "File" });

export interface FileList {
  /** Etag of this resource. */
  etag?: string;
  /** The files returned in this response. */
  items?: ReadonlyArray<File>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList". */
  kind?: string;
  /** Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
  nextPageToken?: string;
}

export const FileList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(File)),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "FileList" });

export interface PlacementsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Placement collection. */
  placements?: ReadonlyArray<Placement>;
}

export const PlacementsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    placements: Schema.optional(Schema.Array(Placement)),
  },
).annotate({ identifier: "PlacementsListResponse" });

export interface ObjectFilter {
  /** Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list. */
  status?: "NONE" | "ASSIGNED" | "ALL" | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter". */
  kind?: string;
  /** Applicable when status is ASSIGNED. The user has access to objects with these object IDs. */
  objectIds?: ReadonlyArray<string>;
}

export const ObjectFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  objectIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ObjectFilter" });

export interface AccountUserProfile {
  /** Subaccount ID of the user profile. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** User role ID of the user profile. This is a required field. */
  userRoleId?: string;
  /** Trafficker type of this user profile. This is a read-only field. */
  traffickerType?:
    | "INTERNAL_NON_TRAFFICKER"
    | "INTERNAL_TRAFFICKER"
    | "EXTERNAL_TRAFFICKER"
    | (string & {});
  /** Filter that describes which campaigns are visible to the user profile. */
  campaignFilter?: ObjectFilter;
  /** User type of the user profile. This is a read-only field that can be left blank. */
  userAccessType?:
    | "NORMAL_USER"
    | "SUPER_USER"
    | "INTERNAL_ADMINISTRATOR"
    | "READ_ONLY_SUPER_USER"
    | (string & {});
  /** Filter that describes which advertisers are visible to the user profile. */
  advertiserFilter?: ObjectFilter;
  /** Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,". */
  name?: string;
  /** Account ID of the user profile. This is a read-only field that can be left blank. */
  accountId?: string;
  /** ID of the user profile. This is a read-only, auto-generated field. */
  id?: string;
  /** Comments for this user profile. */
  comments?: string;
  /** Filter that describes which user roles are visible to the user profile. */
  userRoleFilter?: ObjectFilter;
  /** Email of the user profile. The email address must be linked to a Google Account. This field is required on insertion and is read-only after insertion. */
  email?: string;
  /** Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable. */
  active?: boolean;
  /** Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
  locale?: string;
  /** Filter that describes which sites are visible to the user profile. */
  siteFilter?: ObjectFilter;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile". */
  kind?: string;
}

export const AccountUserProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subaccountId: Schema.optional(Schema.String),
  userRoleId: Schema.optional(Schema.String),
  traffickerType: Schema.optional(Schema.String),
  campaignFilter: Schema.optional(ObjectFilter),
  userAccessType: Schema.optional(Schema.String),
  advertiserFilter: Schema.optional(ObjectFilter),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  comments: Schema.optional(Schema.String),
  userRoleFilter: Schema.optional(ObjectFilter),
  email: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  locale: Schema.optional(Schema.String),
  siteFilter: Schema.optional(ObjectFilter),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountUserProfile" });

export interface PostalCodesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse". */
  kind?: string;
  /** Postal code collection. */
  postalCodes?: ReadonlyArray<PostalCode>;
}

export const PostalCodesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    postalCodes: Schema.optional(Schema.Array(PostalCode)),
  }).annotate({ identifier: "PostalCodesListResponse" });

export interface AdBlockingConfiguration {
  /** Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. */
  enabled?: boolean;
}

export const AdBlockingConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdBlockingConfiguration" });

export interface Campaign {
  /** Dimension value for the ID of this campaign. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Arbitrary comments about this campaign. Must be less than 256 characters long. */
  comment?: string;
  /** Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  endDate?: string;
  /** Measurement partner campaign link for tag wrapping. */
  measurementPartnerLink?: MeasurementPartnerCampaignLink;
  /** Advertiser ID of this campaign. This is a required field. */
  advertiserId?: string;
  /** Advertiser group ID of the associated advertiser. */
  advertiserGroupId?: string;
  /** Account ID of this campaign. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Ad blocking settings for this campaign. */
  adBlockingConfiguration?: AdBlockingConfiguration;
  /** The default landing page ID for this campaign. */
  defaultLandingPageId?: string;
  /** List of creative group IDs that are assigned to the campaign. */
  creativeGroupIds?: ReadonlyArray<string>;
  /** Click-through event tag ID override properties for this campaign. */
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
  /** Optional. Whether the campaign has EU political ads. Campaign Manager 360 doesn't allow campaigns with EU political ads to serve in the EU. They can still serve in other regions. */
  euPoliticalAdsDeclaration?:
    | "CONTAINS_EU_POLITICAL_ADS"
    | "DOES_NOT_CONTAIN_EU_POLITICAL_ADS"
    | (string & {});
  /** Click-through URL suffix override properties for this campaign. */
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
  /** Additional creative optimization configurations for the campaign. */
  additionalCreativeOptimizationConfigurations?: ReadonlyArray<CreativeOptimizationConfiguration>;
  /** External ID for this campaign. */
  externalId?: string;
  /** Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups. */
  audienceSegmentGroups?: ReadonlyArray<AudienceSegmentGroup>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign". */
  kind?: string;
  /** ID of this campaign. This is a read-only auto-generated field. */
  id?: string;
  /** Creative optimization configuration for the campaign. */
  creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;
  /** Whether this campaign has been archived. */
  archived?: boolean;
  /** Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser. */
  name?: string;
  /** Information about the creation of this campaign. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  startDate?: string;
  /** Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign. */
  billingInvoiceCode?: string;
  /** Overrides that can be used to activate or deactivate advertiser event tags. */
  eventTagOverrides?: ReadonlyArray<EventTagOverride>;
  /** Information about the most recent modification of this campaign. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Subaccount ID of this campaign. This is a read-only field that can be left blank. */
  subaccountId?: string;
}

export const Campaign = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  idDimensionValue: Schema.optional(DimensionValue),
  comment: Schema.optional(Schema.String),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  endDate: Schema.optional(Schema.String),
  measurementPartnerLink: Schema.optional(MeasurementPartnerCampaignLink),
  advertiserId: Schema.optional(Schema.String),
  advertiserGroupId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  adBlockingConfiguration: Schema.optional(AdBlockingConfiguration),
  defaultLandingPageId: Schema.optional(Schema.String),
  creativeGroupIds: Schema.optional(Schema.Array(Schema.String)),
  defaultClickThroughEventTagProperties: Schema.optional(
    DefaultClickThroughEventTagProperties,
  ),
  euPoliticalAdsDeclaration: Schema.optional(Schema.String),
  clickThroughUrlSuffixProperties: Schema.optional(
    ClickThroughUrlSuffixProperties,
  ),
  additionalCreativeOptimizationConfigurations: Schema.optional(
    Schema.Array(CreativeOptimizationConfiguration),
  ),
  externalId: Schema.optional(Schema.String),
  audienceSegmentGroups: Schema.optional(Schema.Array(AudienceSegmentGroup)),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  creativeOptimizationConfiguration: Schema.optional(
    CreativeOptimizationConfiguration,
  ),
  archived: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  createInfo: Schema.optional(LastModifiedInfo),
  startDate: Schema.optional(Schema.String),
  billingInvoiceCode: Schema.optional(Schema.String),
  eventTagOverrides: Schema.optional(Schema.Array(EventTagOverride)),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  subaccountId: Schema.optional(Schema.String),
}).annotate({ identifier: "Campaign" });

export interface VideoProcessingData {
  /** Output only. The processing state of the studio creative asset. */
  processingState?:
    | "UNKNOWN"
    | "PROCESSING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** For a FAILED processing state, the error reason discovered. */
  errorReason?: string;
}

export const VideoProcessingData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  processingState: Schema.optional(Schema.String),
  errorReason: Schema.optional(Schema.String),
}).annotate({ identifier: "VideoProcessingData" });

export interface StudioCreativeAsset {
  /** Output only. The creation timestamp of the studio creative asset. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** The type of the studio creative asset. It is a auto-generated, read-only field. */
  type?: "UNKNOWN_TYPE" | "HTML" | "VIDEO" | "IMAGE" | "FONT" | (string & {});
  /** Output only. The last modified timestamp of the studio creative asset. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Studio creative ID of this studio creative asset. The asset will be associated to the creative if creative id is set. */
  studioCreativeId?: string;
  /** The filesize of the studio creative asset. This is a read-only field. */
  filesize?: string;
  /** The processing data of the studio creative asset. This is a read-only field. */
  videoProcessingData?: VideoProcessingData;
  /** Studio advertiser ID of this studio creative asset. This is a required field on insertion. */
  studioAdvertiserId?: string;
  /** Output only. Unique ID of this studio creative asset. This is a read-only, auto-generated field. */
  id?: string;
  /** Studio account ID of this studio creative asset. This field, if left unset, will be auto-populated.. */
  studioAccountId?: string;
  /** The filename of the studio creative asset. It is default to the original filename of the asset. */
  filename?: string;
}

export const StudioCreativeAsset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createInfo: Schema.optional(LastModifiedInfo),
  type: Schema.optional(Schema.String),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  studioCreativeId: Schema.optional(Schema.String),
  filesize: Schema.optional(Schema.String),
  videoProcessingData: Schema.optional(VideoProcessingData),
  studioAdvertiserId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  studioAccountId: Schema.optional(Schema.String),
  filename: Schema.optional(Schema.String),
}).annotate({ identifier: "StudioCreativeAsset" });

export interface StudioCreativeAssetsResponse {
  /** The list of studio creative assets. */
  assets?: ReadonlyArray<StudioCreativeAsset>;
}

export const StudioCreativeAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(StudioCreativeAsset)),
  }).annotate({ identifier: "StudioCreativeAssetsResponse" });

export interface RemarketingListsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Remarketing list collection. */
  remarketingLists?: ReadonlyArray<RemarketingList>;
}

export const RemarketingListsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    remarketingLists: Schema.optional(Schema.Array(RemarketingList)),
  }).annotate({ identifier: "RemarketingListsListResponse" });

export interface ContentCategory {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory". */
  kind?: string;
  /** Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account. */
  name?: string;
  /** Account ID of this content category. This is a read-only field that can be left blank. */
  accountId?: string;
  /** ID of this content category. This is a read-only, auto-generated field. */
  id?: string;
}

export const ContentCategory = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "ContentCategory" });

export interface UserRolePermission {
  /** Name of this user role permission. */
  name?: string;
  /** ID of the permission group that this user role permission belongs to. */
  permissionGroupId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission". */
  kind?: string;
  /** ID of this user role permission. */
  id?: string;
  /** Levels of availability for a user role permission. */
  availability?:
    | "NOT_AVAILABLE_BY_DEFAULT"
    | "ACCOUNT_BY_DEFAULT"
    | "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"
    | "ACCOUNT_ALWAYS"
    | "SUBACCOUNT_AND_ACCOUNT_ALWAYS"
    | "USER_PROFILE_ONLY"
    | (string & {});
}

export const UserRolePermission = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  permissionGroupId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  availability: Schema.optional(Schema.String),
}).annotate({ identifier: "UserRolePermission" });

export interface UserRolePermissionsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse". */
  kind?: string;
  /** User role permission collection. */
  userRolePermissions?: ReadonlyArray<UserRolePermission>;
}

export const UserRolePermissionsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    userRolePermissions: Schema.optional(Schema.Array(UserRolePermission)),
  }).annotate({ identifier: "UserRolePermissionsListResponse" });

export interface CreativeFieldValue {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue". */
  kind?: string;
  /** ID of this creative field value. This is a read-only, auto-generated field. */
  id?: string;
  /** Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field. */
  value?: string;
}

export const CreativeFieldValue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "CreativeFieldValue" });

export interface AdvertisersListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse". */
  kind?: string;
  /** Advertiser collection. */
  advertisers?: ReadonlyArray<Advertiser>;
}

export const AdvertisersListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    advertisers: Schema.optional(Schema.Array(Advertiser)),
  }).annotate({ identifier: "AdvertisersListResponse" });

export interface CampaignsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse". */
  kind?: string;
  /** Campaign collection. */
  campaigns?: ReadonlyArray<Campaign>;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const CampaignsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  campaigns: Schema.optional(Schema.Array(Campaign)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "CampaignsListResponse" });

export interface BillingAssignment {
  /** ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field. */
  subaccountId?: string;
  /** ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign */
  campaignId?: string;
  /** ID of the account associated with the billing assignment.This is a read-only, auto-generated field. */
  accountId?: string;
  /** ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser */
  advertiserId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignment". */
  kind?: string;
}

export const BillingAssignment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subaccountId: Schema.optional(Schema.String),
  campaignId: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "BillingAssignment" });

export interface BillingAssignmentsListResponse {
  /** Billing assignments collection. */
  billingAssignments?: ReadonlyArray<BillingAssignment>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignmentsListResponse". */
  kind?: string;
}

export const BillingAssignmentsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAssignments: Schema.optional(Schema.Array(BillingAssignment)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingAssignmentsListResponse" });

export interface ConnectionTypesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse". */
  kind?: string;
  /** Collection of connection types such as broadband and mobile. */
  connectionTypes?: ReadonlyArray<ConnectionType>;
}

export const ConnectionTypesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    connectionTypes: Schema.optional(Schema.Array(ConnectionType)),
  }).annotate({ identifier: "ConnectionTypesListResponse" });

export interface BrowsersListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse". */
  kind?: string;
  /** Browser collection. */
  browsers?: ReadonlyArray<Browser>;
}

export const BrowsersListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  browsers: Schema.optional(Schema.Array(Browser)),
}).annotate({ identifier: "BrowsersListResponse" });

export interface UserRole {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole". */
  kind?: string;
  /** ID of this user role. This is a read-only, auto-generated field. */
  id?: string;
  /** List of permissions associated with this user role. */
  permissions?: ReadonlyArray<UserRolePermission>;
  /** Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account. */
  name?: string;
  /** Account ID of this user role. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions. */
  defaultUserRole?: boolean;
  /** ID of the user role that this user role is based on or copied from. This is a required field. */
  parentUserRoleId?: string;
  /** Subaccount ID of this user role. This is a read-only field that can be left blank. */
  subaccountId?: string;
}

export const UserRole = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  permissions: Schema.optional(Schema.Array(UserRolePermission)),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  defaultUserRole: Schema.optional(Schema.Boolean),
  parentUserRoleId: Schema.optional(Schema.String),
  subaccountId: Schema.optional(Schema.String),
}).annotate({ identifier: "UserRole" });

export interface AdvertiserGroup {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup". */
  kind?: string;
  /** Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account. */
  name?: string;
  /** Account ID of this advertiser group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** ID of this advertiser group. This is a read-only, auto-generated field. */
  id?: string;
}

export const AdvertiserGroup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "AdvertiserGroup" });

export interface AdvertiserGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Advertiser group collection. */
  advertiserGroups?: ReadonlyArray<AdvertiserGroup>;
}

export const AdvertiserGroupsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    advertiserGroups: Schema.optional(Schema.Array(AdvertiserGroup)),
  }).annotate({ identifier: "AdvertiserGroupsListResponse" });

export interface DynamicProfile {
  /** Optional. Archive status of this dynamic profile. */
  archiveStatus?:
    | "ARCHIVE_STATUS_UNKNOWN"
    | "UNARCHIVED"
    | "ARCHIVED"
    | (string & {});
  /** Required. Identifier. Name of this dynamic profile. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Optional. Description of this dynamic profile. */
  description?: string;
  /** Optional. Draft version of the dynamic profile. */
  draft?: DynamicProfileVersion;
  /** Optional. Status of this dynamic profile. */
  status?: "STATUS_UNKNOWN" | "ACTIVE" | "INACTIVE" | "DELETED" | (string & {});
  /** Output only. The last modified timestamp of the dynamic profile. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Optional. Active version of the dynamic profile. */
  active?: DynamicProfileVersion;
  /** Required. Advertiser ID of this dynamic profile. This is a required field on insertion. */
  studioAdvertiserId?: string;
  /** Output only. The creation timestamp of the dynamic profile. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Output only. Unique ID of this dynamic profile. This is a read-only, auto-generated field. */
  dynamicProfileId?: string;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicProfile". */
  kind?: string;
}

export const DynamicProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  archiveStatus: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  draft: Schema.optional(DynamicProfileVersion),
  status: Schema.optional(Schema.String),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  active: Schema.optional(DynamicProfileVersion),
  studioAdvertiserId: Schema.optional(Schema.String),
  createInfo: Schema.optional(LastModifiedInfo),
  dynamicProfileId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "DynamicProfile" });

export interface OperatingSystemVersionsListResponse {
  /** Operating system version collection. */
  operatingSystemVersions?: ReadonlyArray<OperatingSystemVersion>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse". */
  kind?: string;
}

export const OperatingSystemVersionsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatingSystemVersions: Schema.optional(
      Schema.Array(OperatingSystemVersion),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperatingSystemVersionsListResponse" });

export interface ConversionsBatchInsertResponse {
  /** Indicates that some or all conversions failed to insert. */
  hasFailures?: boolean;
  /** The insert status of each conversion. Statuses are returned in the same order that conversions are inserted. */
  status?: ReadonlyArray<ConversionStatus>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse". */
  kind?: string;
}

export const ConversionsBatchInsertResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasFailures: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Array(ConversionStatus)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionsBatchInsertResponse" });

export interface MobileAppsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse". */
  kind?: string;
  /** Mobile apps collection. */
  mobileApps?: ReadonlyArray<MobileApp>;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const MobileAppsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    mobileApps: Schema.optional(Schema.Array(MobileApp)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "MobileAppsListResponse" });

export interface CreativeFieldsListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse". */
  kind?: string;
  /** Creative field collection. */
  creativeFields?: ReadonlyArray<CreativeField>;
}

export const CreativeFieldsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    creativeFields: Schema.optional(Schema.Array(CreativeField)),
  }).annotate({ identifier: "CreativeFieldsListResponse" });

export interface DimensionFilter {
  /** The kind of resource this is, in this case dfareporting#dimensionFilter. */
  kind?: string;
  /** The value of the dimension to filter. */
  value?: string;
  /** The name of the dimension to filter. */
  dimensionName?: string;
}

export const DimensionFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  dimensionName: Schema.optional(Schema.String),
}).annotate({ identifier: "DimensionFilter" });

export interface DimensionValueRequest {
  /** The name of the dimension for which values should be requested. */
  dimensionName?: string;
  /** The list of filters by which to filter values. The filters are ANDed. */
  filters?: ReadonlyArray<DimensionFilter>;
  startDate?: string;
  endDate?: string;
  /** The kind of request this is, in this case dfareporting#dimensionValueRequest . */
  kind?: string;
}

export const DimensionValueRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dimensionName: Schema.optional(Schema.String),
  filters: Schema.optional(Schema.Array(DimensionFilter)),
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "DimensionValueRequest" });

export interface AdsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Ad collection. */
  ads?: ReadonlyArray<Ad>;
}

export const AdsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  ads: Schema.optional(Schema.Array(Ad)),
}).annotate({ identifier: "AdsListResponse" });

export interface ReportList {
  /** The eTag of this response for caching purposes. */
  etag?: string;
  /** The reports returned in this response. */
  items?: ReadonlyArray<Report>;
  /** The kind of list this is, in this case dfareporting#reportList. */
  kind?: string;
  /** Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
  nextPageToken?: string;
}

export const ReportList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Report)),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ReportList" });

export interface TargetingTemplate {
  /** Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
  subaccountId?: string;
  /** Language targeting criteria. */
  languageTargeting?: LanguageTargeting;
  /** ID of this targeting template. This is a read-only, auto-generated field. */
  id?: string;
  /** Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert. */
  advertiserId?: string;
  /** Remarketing list targeting criteria. */
  listTargetingExpression?: ListTargetingExpression;
  /** Technology platform targeting criteria. */
  technologyTargeting?: TechnologyTargeting;
  /** Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
  accountId?: string;
  /** Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser. */
  name?: string;
  /** Optional. Contextual keyword targeting criteria. */
  contextualKeywordTargeting?: ContextualKeywordTargeting;
  /** Geographical targeting criteria. */
  geoTargeting?: GeoTargeting;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate". */
  kind?: string;
  /** Time and day targeting criteria. */
  dayPartTargeting?: DayPartTargeting;
  /** Key-value targeting criteria. */
  keyValueTargetingExpression?: KeyValueTargetingExpression;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
}

export const TargetingTemplate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subaccountId: Schema.optional(Schema.String),
  languageTargeting: Schema.optional(LanguageTargeting),
  id: Schema.optional(Schema.String),
  advertiserId: Schema.optional(Schema.String),
  listTargetingExpression: Schema.optional(ListTargetingExpression),
  technologyTargeting: Schema.optional(TechnologyTargeting),
  accountId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  contextualKeywordTargeting: Schema.optional(ContextualKeywordTargeting),
  geoTargeting: Schema.optional(GeoTargeting),
  kind: Schema.optional(Schema.String),
  dayPartTargeting: Schema.optional(DayPartTargeting),
  keyValueTargetingExpression: Schema.optional(KeyValueTargetingExpression),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
}).annotate({ identifier: "TargetingTemplate" });

export interface TargetingTemplatesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Targeting template collection. */
  targetingTemplates?: ReadonlyArray<TargetingTemplate>;
}

export const TargetingTemplatesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    targetingTemplates: Schema.optional(Schema.Array(TargetingTemplate)),
  }).annotate({ identifier: "TargetingTemplatesListResponse" });

export interface VideoFormat {
  /** The resolution of this video format. */
  resolution?: Size;
  /** ID of the video format. */
  id?: number;
  /** File type of the video format. */
  fileType?: "FLV" | "THREEGPP" | "MP4" | "WEBM" | "M3U8" | (string & {});
  /** The target bit rate of this video format. */
  targetBitRate?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat". */
  kind?: string;
}

export const VideoFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resolution: Schema.optional(Size),
  id: Schema.optional(Schema.Number),
  fileType: Schema.optional(Schema.String),
  targetBitRate: Schema.optional(Schema.Number),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "VideoFormat" });

export interface CreativeAssetMetadata {
  /** Numeric ID of the asset. This is a read-only, auto-generated field. */
  id?: string;
  /** Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
  timerCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID" */
  warnedValidationRules?: ReadonlyArray<
    | "CLICK_TAG_NON_TOP_LEVEL"
    | "CLICK_TAG_MISSING"
    | "CLICK_TAG_MORE_THAN_ONE"
    | "CLICK_TAG_INVALID"
    | "ORPHANED_ASSET"
    | "PRIMARY_HTML_MISSING"
    | "EXTERNAL_FILE_REFERENCED"
    | "MRAID_REFERENCED"
    | "ADMOB_REFERENCED"
    | "FILE_TYPE_INVALID"
    | "ZIP_INVALID"
    | "LINKED_FILE_NOT_FOUND"
    | "MAX_FLASH_VERSION_11"
    | "NOT_SSL_COMPLIANT"
    | "FILE_DETAIL_EMPTY"
    | "ASSET_INVALID"
    | "GWD_PROPERTIES_INVALID"
    | "ENABLER_UNSUPPORTED_METHOD_DCM"
    | "ASSET_FORMAT_UNSUPPORTED_DCM"
    | "COMPONENT_UNSUPPORTED_DCM"
    | "HTML5_FEATURE_UNSUPPORTED"
    | "CLICK_TAG_IN_GWD"
    | "CLICK_TAG_HARD_CODED"
    | "SVG_INVALID"
    | "CLICK_TAG_IN_RICH_MEDIA"
    | "MISSING_ENABLER_REFERENCE"
    | (string & {})
  >;
  /** ID of the creative asset. This is a required field. */
  assetIdentifier?: CreativeAssetId;
  /** List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
  exitCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. */
  detectedFeatures?: ReadonlyArray<
    | "CSS_FONT_FACE"
    | "CSS_BACKGROUND_SIZE"
    | "CSS_BORDER_IMAGE"
    | "CSS_BORDER_RADIUS"
    | "CSS_BOX_SHADOW"
    | "CSS_FLEX_BOX"
    | "CSS_HSLA"
    | "CSS_MULTIPLE_BGS"
    | "CSS_OPACITY"
    | "CSS_RGBA"
    | "CSS_TEXT_SHADOW"
    | "CSS_ANIMATIONS"
    | "CSS_COLUMNS"
    | "CSS_GENERATED_CONTENT"
    | "CSS_GRADIENTS"
    | "CSS_REFLECTIONS"
    | "CSS_TRANSFORMS"
    | "CSS_TRANSFORMS3D"
    | "CSS_TRANSITIONS"
    | "APPLICATION_CACHE"
    | "CANVAS"
    | "CANVAS_TEXT"
    | "DRAG_AND_DROP"
    | "HASH_CHANGE"
    | "HISTORY"
    | "AUDIO"
    | "VIDEO"
    | "INDEXED_DB"
    | "INPUT_ATTR_AUTOCOMPLETE"
    | "INPUT_ATTR_AUTOFOCUS"
    | "INPUT_ATTR_LIST"
    | "INPUT_ATTR_PLACEHOLDER"
    | "INPUT_ATTR_MAX"
    | "INPUT_ATTR_MIN"
    | "INPUT_ATTR_MULTIPLE"
    | "INPUT_ATTR_PATTERN"
    | "INPUT_ATTR_REQUIRED"
    | "INPUT_ATTR_STEP"
    | "INPUT_TYPE_SEARCH"
    | "INPUT_TYPE_TEL"
    | "INPUT_TYPE_URL"
    | "INPUT_TYPE_EMAIL"
    | "INPUT_TYPE_DATETIME"
    | "INPUT_TYPE_DATE"
    | "INPUT_TYPE_MONTH"
    | "INPUT_TYPE_WEEK"
    | "INPUT_TYPE_TIME"
    | "INPUT_TYPE_DATETIME_LOCAL"
    | "INPUT_TYPE_NUMBER"
    | "INPUT_TYPE_RANGE"
    | "INPUT_TYPE_COLOR"
    | "LOCAL_STORAGE"
    | "POST_MESSAGE"
    | "SESSION_STORAGE"
    | "WEB_SOCKETS"
    | "WEB_SQL_DATABASE"
    | "WEB_WORKERS"
    | "GEO_LOCATION"
    | "INLINE_SVG"
    | "SMIL"
    | "SVG_HREF"
    | "SVG_CLIP_PATHS"
    | "TOUCH"
    | "WEBGL"
    | "SVG_FILTERS"
    | "SVG_FE_IMAGE"
    | (string & {})
  >;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
  kind?: string;
  /** List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset. */
  clickTags?: ReadonlyArray<ClickTag>;
  /** True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. */
  richMedia?: boolean;
  /** List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
  counterCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
}

export const CreativeAssetMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  timerCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  warnedValidationRules: Schema.optional(Schema.Array(Schema.String)),
  assetIdentifier: Schema.optional(CreativeAssetId),
  exitCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  detectedFeatures: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  clickTags: Schema.optional(Schema.Array(ClickTag)),
  richMedia: Schema.optional(Schema.Boolean),
  counterCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
}).annotate({ identifier: "CreativeAssetMetadata" });

export interface DynamicProfileGenerateCodeResponse {
  /** Generated code for the dynamic profile. The code will need to be unescaped. */
  code?: string;
}

export const DynamicProfileGenerateCodeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicProfileGenerateCodeResponse" });

export interface UserRolesListResponse {
  /** User role collection. */
  userRoles?: ReadonlyArray<UserRole>;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse". */
  kind?: string;
}

export const UserRolesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userRoles: Schema.optional(Schema.Array(UserRole)),
  nextPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "UserRolesListResponse" });

export interface AccountUserProfilesListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Account user profile collection. */
  accountUserProfiles?: ReadonlyArray<AccountUserProfile>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse". */
  kind?: string;
}

export const AccountUserProfilesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    accountUserProfiles: Schema.optional(Schema.Array(AccountUserProfile)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountUserProfilesListResponse" });

export interface SizesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse". */
  kind?: string;
  /** Size collection. */
  sizes?: ReadonlyArray<Size>;
}

export const SizesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  sizes: Schema.optional(Schema.Array(Size)),
}).annotate({ identifier: "SizesListResponse" });

export interface AccountsListResponse {
  /** Account collection. */
  accounts?: ReadonlyArray<Account>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const AccountsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accounts: Schema.optional(Schema.Array(Account)),
  kind: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountsListResponse" });

export interface AdvertiserInvoicesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserInvoicesListResponse". */
  kind?: string;
  /** Invoice collection */
  invoices?: ReadonlyArray<Invoice>;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const AdvertiserInvoicesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    invoices: Schema.optional(Schema.Array(Invoice)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvertiserInvoicesListResponse" });

export interface ContentCategoriesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Content category collection. */
  contentCategories?: ReadonlyArray<ContentCategory>;
}

export const ContentCategoriesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    contentCategories: Schema.optional(Schema.Array(ContentCategory)),
  }).annotate({ identifier: "ContentCategoriesListResponse" });

export interface CreativeFieldValuesListResponse {
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse". */
  kind?: string;
  /** Creative field value collection. */
  creativeFieldValues?: ReadonlyArray<CreativeFieldValue>;
}

export const CreativeFieldValuesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    creativeFieldValues: Schema.optional(Schema.Array(CreativeFieldValue)),
  }).annotate({ identifier: "CreativeFieldValuesListResponse" });

export interface BillingProfile {
  /** ID of this billing profile. This is a read-only, auto-generated field. */
  id?: string;
  /** Status of this billing profile.This is a read-only field. */
  status?: "UNDER_REVIEW" | "ACTIVE" | "ARCHIVED" | (string & {});
  /** True if the billing profile is the account default profile. This is a read-only field. */
  isDefault?: boolean;
  /** Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account. */
  name?: string;
  /** Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign. */
  invoiceLevel?:
    | "ACCOUNT_LEVEL"
    | "ADVERTISER_LEVEL"
    | "CAMPAIGN_LEVEL"
    | (string & {});
  /** The ID of the payment account the billing profile belongs to. This is a read-only field. */
  paymentsAccountId?: string;
  /** Country code of this billing profile.This is a read-only field. */
  countryCode?: string;
  /** Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level. */
  consolidatedInvoice?: boolean;
  /** The ID of the secondary payment customer the billing profile belongs to. This is a read-only field. */
  secondaryPaymentsCustomerId?: string;
  /** The ID of the payment customer the billing profile belongs to. This is a read-only field. */
  paymentsCustomerId?: string;
  /** Billing currency code in ISO 4217 format.This is a read-only field. */
  currencyCode?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfile". */
  kind?: string;
  /** Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile. */
  purchaseOrder?: string;
}

export const BillingProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  isDefault: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  invoiceLevel: Schema.optional(Schema.String),
  paymentsAccountId: Schema.optional(Schema.String),
  countryCode: Schema.optional(Schema.String),
  consolidatedInvoice: Schema.optional(Schema.Boolean),
  secondaryPaymentsCustomerId: Schema.optional(Schema.String),
  paymentsCustomerId: Schema.optional(Schema.String),
  currencyCode: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  purchaseOrder: Schema.optional(Schema.String),
}).annotate({ identifier: "BillingProfile" });

export interface FloodlightActivitiesGenerateTagResponse {
  /** Generated tag for this Floodlight activity. For Google tags, this is the event snippet. */
  floodlightActivityTag?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse". */
  kind?: string;
  /** The global snippet section of a Google tag. The Google tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more. */
  globalSiteTagGlobalSnippet?: string;
}

export const FloodlightActivitiesGenerateTagResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightActivityTag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    globalSiteTagGlobalSnippet: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivitiesGenerateTagResponse" });

export interface EventTagsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse". */
  kind?: string;
  /** Event tag collection. */
  eventTags?: ReadonlyArray<EventTag>;
}

export const EventTagsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  eventTags: Schema.optional(Schema.Array(EventTag)),
}).annotate({ identifier: "EventTagsListResponse" });

export interface BillingProfilesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfilesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Billing profiles collection. */
  billingProfiles?: ReadonlyArray<BillingProfile>;
}

export const BillingProfilesListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    billingProfiles: Schema.optional(Schema.Array(BillingProfile)),
  }).annotate({ identifier: "BillingProfilesListResponse" });

export interface DynamicTargetingKeysListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse". */
  kind?: string;
  /** Dynamic targeting key collection. */
  dynamicTargetingKeys?: ReadonlyArray<DynamicTargetingKey>;
}

export const DynamicTargetingKeysListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    dynamicTargetingKeys: Schema.optional(Schema.Array(DynamicTargetingKey)),
  }).annotate({ identifier: "DynamicTargetingKeysListResponse" });

export interface LanguagesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse". */
  kind?: string;
  /** Language collection. */
  languages?: ReadonlyArray<Language>;
}

export const LanguagesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  languages: Schema.optional(Schema.Array(Language)),
}).annotate({ identifier: "LanguagesListResponse" });

export interface VideoFormatsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse". */
  kind?: string;
  /** Video format collection. */
  videoFormats?: ReadonlyArray<VideoFormat>;
}

export const VideoFormatsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    videoFormats: Schema.optional(Schema.Array(VideoFormat)),
  }).annotate({ identifier: "VideoFormatsListResponse" });

export interface RegionsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse". */
  kind?: string;
  /** Region collection. */
  regions?: ReadonlyArray<Region>;
}

export const RegionsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  regions: Schema.optional(Schema.Array(Region)),
}).annotate({ identifier: "RegionsListResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListRegionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/regions" }),
  svc,
) as unknown as Schema.Schema<ListRegionsRequest>;

export type ListRegionsResponse = RegionsListResponse;
export const ListRegionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegionsListResponse;

export type ListRegionsError = DefaultErrors;

/** Retrieves a list of regions. */
export const listRegions: API.OperationMethod<
  ListRegionsRequest,
  ListRegionsResponse,
  ListRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListRegionsRequest,
  output: ListRegionsResponse,
  errors: [],
}));

export interface UpdateAdvertisersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Advertiser;
}

export const UpdateAdvertisersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Advertiser).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/advertisers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAdvertisersRequest>;

export type UpdateAdvertisersResponse = Advertiser;
export const UpdateAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type UpdateAdvertisersError = DefaultErrors;

/** Updates an existing advertiser. */
export const updateAdvertisers: API.OperationMethod<
  UpdateAdvertisersRequest,
  UpdateAdvertisersResponse,
  UpdateAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdvertisersRequest,
  output: UpdateAdvertisersResponse,
  errors: [],
}));

export interface GetAdvertisersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Advertiser ID. */
  id: string;
}

export const GetAdvertisersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/advertisers/{id}" }),
  svc,
) as unknown as Schema.Schema<GetAdvertisersRequest>;

export type GetAdvertisersResponse = Advertiser;
export const GetAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type GetAdvertisersError = DefaultErrors;

/** Gets one advertiser by ID. */
export const getAdvertisers: API.OperationMethod<
  GetAdvertisersRequest,
  GetAdvertisersResponse,
  GetAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvertisersRequest,
  output: GetAdvertisersResponse,
  errors: [],
}));

export interface InsertAdvertisersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Advertiser;
}

export const InsertAdvertisersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Advertiser).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/advertisers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAdvertisersRequest>;

export type InsertAdvertisersResponse = Advertiser;
export const InsertAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type InsertAdvertisersError = DefaultErrors;

/** Inserts a new advertiser. */
export const insertAdvertisers: API.OperationMethod<
  InsertAdvertisersRequest,
  InsertAdvertisersResponse,
  InsertAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdvertisersRequest,
  output: InsertAdvertisersResponse,
  errors: [],
}));

export interface PatchAdvertisersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Advertiser ID. */
  id: string;
  /** Request body */
  body?: Advertiser;
}

export const PatchAdvertisersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(Advertiser).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/advertisers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAdvertisersRequest>;

export type PatchAdvertisersResponse = Advertiser;
export const PatchAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type PatchAdvertisersError = DefaultErrors;

/** Updates an existing advertiser. This method supports patch semantics. */
export const patchAdvertisers: API.OperationMethod<
  PatchAdvertisersRequest,
  PatchAdvertisersResponse,
  PatchAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvertisersRequest,
  output: PatchAdvertisersResponse,
  errors: [],
}));

export interface ListAdvertisersRequest {
  /** Select only advertisers with these floodlight configuration IDs. */
  floodlightConfigurationIds?: string[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only advertisers which use another advertiser's floodlight configuration. */
  onlyParent?: boolean;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" . */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only advertisers with these advertiser group IDs. */
  advertiserGroupIds?: string[];
  /** Select only advertisers with the specified status. */
  status?: "APPROVED" | "ON_HOLD" | (string & {});
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only advertisers with these subaccount IDs. */
  subaccountId?: string;
  /** Select only advertisers with these IDs. */
  ids?: string[];
  /** Select only advertisers which do not belong to any advertiser group. */
  includeAdvertisersWithoutGroupsOnly?: boolean;
}

export const ListAdvertisersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    floodlightConfigurationIds: Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("floodlightConfigurationIds")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    onlyParent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("onlyParent")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    advertiserGroupIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserGroupIds"),
    ),
    status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    subaccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subaccountId"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    includeAdvertisersWithoutGroupsOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeAdvertisersWithoutGroupsOnly"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/advertisers" }),
  svc,
) as unknown as Schema.Schema<ListAdvertisersRequest>;

export type ListAdvertisersResponse = AdvertisersListResponse;
export const ListAdvertisersResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertisersListResponse;

export type ListAdvertisersError = DefaultErrors;

/** Retrieves a list of advertisers, possibly filtered. This method supports paging. */
export const listAdvertisers: API.PaginatedOperationMethod<
  ListAdvertisersRequest,
  ListAdvertisersResponse,
  ListAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertisersRequest,
  output: ListAdvertisersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetUserProfilesRequest {
  /** The user profile ID. */
  profileId: string;
}

export const GetUserProfilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}" }),
  svc,
) as unknown as Schema.Schema<GetUserProfilesRequest>;

export type GetUserProfilesResponse = UserProfile;
export const GetUserProfilesResponse = /*@__PURE__*/ /*#__PURE__*/ UserProfile;

export type GetUserProfilesError = DefaultErrors;

/** Gets one user profile by ID. */
export const getUserProfiles: API.OperationMethod<
  GetUserProfilesRequest,
  GetUserProfilesResponse,
  GetUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserProfilesRequest,
  output: GetUserProfilesResponse,
  errors: [],
}));

export interface ListUserProfilesRequest {}

export const ListUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "userprofiles" }),
    svc,
  ) as unknown as Schema.Schema<ListUserProfilesRequest>;

export type ListUserProfilesResponse = UserProfileList;
export const ListUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserProfileList;

export type ListUserProfilesError = DefaultErrors;

/** Retrieves list of user profiles for a user. */
export const listUserProfiles: API.OperationMethod<
  ListUserProfilesRequest,
  ListUserProfilesResponse,
  ListUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUserProfilesRequest,
  output: ListUserProfilesResponse,
  errors: [],
}));

export interface UpdateDynamicProfilesRequest {
  /** Request body */
  body?: DynamicProfile;
}

export const UpdateDynamicProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DynamicProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "studio/dynamicProfiles", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateDynamicProfilesRequest>;

export type UpdateDynamicProfilesResponse = DynamicProfile;
export const UpdateDynamicProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicProfile;

export type UpdateDynamicProfilesError = DefaultErrors;

/** Updates an existing dynamic profile. */
export const updateDynamicProfiles: API.OperationMethod<
  UpdateDynamicProfilesRequest,
  UpdateDynamicProfilesResponse,
  UpdateDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDynamicProfilesRequest,
  output: UpdateDynamicProfilesResponse,
  errors: [],
}));

export interface GenerateCodeDynamicProfilesRequest {
  /** Required. Dynamic profile ID. */
  dynamicProfileId: string;
}

export const GenerateCodeDynamicProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicProfileId: Schema.String.pipe(T.HttpPath("dynamicProfileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "studio/dynamicProfiles/{dynamicProfileId}/generateCode",
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateCodeDynamicProfilesRequest>;

export type GenerateCodeDynamicProfilesResponse =
  DynamicProfileGenerateCodeResponse;
export const GenerateCodeDynamicProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicProfileGenerateCodeResponse;

export type GenerateCodeDynamicProfilesError = DefaultErrors;

/** Generates code for a dynamic profile, which will need unescaping. */
export const generateCodeDynamicProfiles: API.OperationMethod<
  GenerateCodeDynamicProfilesRequest,
  GenerateCodeDynamicProfilesResponse,
  GenerateCodeDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateCodeDynamicProfilesRequest,
  output: GenerateCodeDynamicProfilesResponse,
  errors: [],
}));

export interface GetDynamicProfilesRequest {
  /** Required. Dynamic profile ID. */
  dynamicProfileId: string;
}

export const GetDynamicProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicProfileId: Schema.String.pipe(T.HttpPath("dynamicProfileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "studio/dynamicProfiles/{dynamicProfileId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDynamicProfilesRequest>;

export type GetDynamicProfilesResponse = DynamicProfile;
export const GetDynamicProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicProfile;

export type GetDynamicProfilesError = DefaultErrors;

/** Gets a dynamic profile by ID. */
export const getDynamicProfiles: API.OperationMethod<
  GetDynamicProfilesRequest,
  GetDynamicProfilesResponse,
  GetDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDynamicProfilesRequest,
  output: GetDynamicProfilesResponse,
  errors: [],
}));

export interface InsertDynamicProfilesRequest {
  /** Request body */
  body?: DynamicProfile;
}

export const InsertDynamicProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DynamicProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "studio/dynamicProfiles", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InsertDynamicProfilesRequest>;

export type InsertDynamicProfilesResponse = DynamicProfile;
export const InsertDynamicProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicProfile;

export type InsertDynamicProfilesError = DefaultErrors;

/** Inserts a new dynamic profile. */
export const insertDynamicProfiles: API.OperationMethod<
  InsertDynamicProfilesRequest,
  InsertDynamicProfilesResponse,
  InsertDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDynamicProfilesRequest,
  output: InsertDynamicProfilesResponse,
  errors: [],
}));

export interface PublishDynamicProfilesRequest {
  /** Required. Dynamic profile ID. */
  dynamicProfileId: string;
}

export const PublishDynamicProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicProfileId: Schema.String.pipe(T.HttpPath("dynamicProfileId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "studio/dynamicProfiles/{dynamicProfileId}/publish",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishDynamicProfilesRequest>;

export interface PublishDynamicProfilesResponse {}
export const PublishDynamicProfilesResponse: Schema.Schema<PublishDynamicProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<PublishDynamicProfilesResponse>;

export type PublishDynamicProfilesError = DefaultErrors;

/** Publish for a dynamic profile. */
export const publishDynamicProfiles: API.OperationMethod<
  PublishDynamicProfilesRequest,
  PublishDynamicProfilesResponse,
  PublishDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishDynamicProfilesRequest,
  output: PublishDynamicProfilesResponse,
  errors: [],
}));

export interface GetPlatformTypesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Platform type ID. */
  id: string;
}

export const GetPlatformTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/platformTypes/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPlatformTypesRequest>;

export type GetPlatformTypesResponse = PlatformType;
export const GetPlatformTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformType;

export type GetPlatformTypesError = DefaultErrors;

/** Gets one platform type by ID. */
export const getPlatformTypes: API.OperationMethod<
  GetPlatformTypesRequest,
  GetPlatformTypesResponse,
  GetPlatformTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlatformTypesRequest,
  output: GetPlatformTypesResponse,
  errors: [],
}));

export interface ListPlatformTypesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListPlatformTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/platformTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListPlatformTypesRequest>;

export type ListPlatformTypesResponse = PlatformTypesListResponse;
export const ListPlatformTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformTypesListResponse;

export type ListPlatformTypesError = DefaultErrors;

/** Retrieves a list of platform types. */
export const listPlatformTypes: API.OperationMethod<
  ListPlatformTypesRequest,
  ListPlatformTypesResponse,
  ListPlatformTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPlatformTypesRequest,
  output: ListPlatformTypesResponse,
  errors: [],
}));

export interface GetTargetableRemarketingListsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Remarketing list ID. */
  id: string;
}

export const GetTargetableRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/targetableRemarketingLists/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTargetableRemarketingListsRequest>;

export type GetTargetableRemarketingListsResponse = TargetableRemarketingList;
export const GetTargetableRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetableRemarketingList;

export type GetTargetableRemarketingListsError = DefaultErrors;

/** Gets one remarketing list by ID. */
export const getTargetableRemarketingLists: API.OperationMethod<
  GetTargetableRemarketingListsRequest,
  GetTargetableRemarketingListsResponse,
  GetTargetableRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTargetableRemarketingListsRequest,
  output: GetTargetableRemarketingListsResponse,
  errors: [],
}));

export interface ListTargetableRemarketingListsRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list". */
  name?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only active or only inactive targetable remarketing lists. */
  active?: boolean;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Required. Select only targetable remarketing lists targetable by these advertisers. */
  advertiserId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
}

export const ListTargetableRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    advertiserId: Schema.String.pipe(T.HttpQuery("advertiserId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/targetableRemarketingLists",
    }),
    svc,
  ) as unknown as Schema.Schema<ListTargetableRemarketingListsRequest>;

export type ListTargetableRemarketingListsResponse =
  TargetableRemarketingListsListResponse;
export const ListTargetableRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetableRemarketingListsListResponse;

export type ListTargetableRemarketingListsError = DefaultErrors;

/** Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging. */
export const listTargetableRemarketingLists: API.PaginatedOperationMethod<
  ListTargetableRemarketingListsRequest,
  ListTargetableRemarketingListsResponse,
  ListTargetableRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTargetableRemarketingListsRequest,
  output: ListTargetableRemarketingListsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListCitiesRequest {
  /** Select only cities with these DART IDs. */
  dartIds?: string[];
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only cities with names starting with this prefix. */
  namePrefix?: string;
  /** Select only cities from these countries. */
  countryDartIds?: string[];
  /** Select only cities from these regions. */
  regionDartIds?: string[];
}

export const ListCitiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dartIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("dartIds"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  namePrefix: Schema.optional(Schema.String).pipe(T.HttpQuery("namePrefix")),
  countryDartIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("countryDartIds"),
  ),
  regionDartIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("regionDartIds"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/cities" }),
  svc,
) as unknown as Schema.Schema<ListCitiesRequest>;

export type ListCitiesResponse = CitiesListResponse;
export const ListCitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CitiesListResponse;

export type ListCitiesError = DefaultErrors;

/** Retrieves a list of cities, possibly filtered. */
export const listCities: API.OperationMethod<
  ListCitiesRequest,
  ListCitiesResponse,
  ListCitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCitiesRequest,
  output: ListCitiesResponse,
  errors: [],
}));

export interface GetConnectionTypesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Connection type ID. */
  id: string;
}

export const GetConnectionTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/connectionTypes/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetConnectionTypesRequest>;

export type GetConnectionTypesResponse = ConnectionType;
export const GetConnectionTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionType;

export type GetConnectionTypesError = DefaultErrors;

/** Gets one connection type by ID. */
export const getConnectionTypes: API.OperationMethod<
  GetConnectionTypesRequest,
  GetConnectionTypesResponse,
  GetConnectionTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConnectionTypesRequest,
  output: GetConnectionTypesResponse,
  errors: [],
}));

export interface ListConnectionTypesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListConnectionTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/connectionTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListConnectionTypesRequest>;

export type ListConnectionTypesResponse = ConnectionTypesListResponse;
export const ListConnectionTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionTypesListResponse;

export type ListConnectionTypesError = DefaultErrors;

/** Retrieves a list of connection types. */
export const listConnectionTypes: API.OperationMethod<
  ListConnectionTypesRequest,
  ListConnectionTypesResponse,
  ListConnectionTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListConnectionTypesRequest,
  output: ListConnectionTypesResponse,
  errors: [],
}));

export interface UpdateCreativeFieldValuesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** Request body */
  body?: CreativeFieldValue;
}

export const UpdateCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    body: Schema.optional(CreativeFieldValue).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateCreativeFieldValuesRequest>;

export type UpdateCreativeFieldValuesResponse = CreativeFieldValue;
export const UpdateCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type UpdateCreativeFieldValuesError = DefaultErrors;

/** Updates an existing creative field value. */
export const updateCreativeFieldValues: API.OperationMethod<
  UpdateCreativeFieldValuesRequest,
  UpdateCreativeFieldValuesResponse,
  UpdateCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativeFieldValuesRequest,
  output: UpdateCreativeFieldValuesResponse,
  errors: [],
}));

export interface DeleteCreativeFieldValuesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative Field Value ID */
  id: string;
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
}

export const DeleteCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteCreativeFieldValuesRequest>;

export interface DeleteCreativeFieldValuesResponse {}
export const DeleteCreativeFieldValuesResponse: Schema.Schema<DeleteCreativeFieldValuesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCreativeFieldValuesResponse>;

export type DeleteCreativeFieldValuesError = DefaultErrors;

/** Deletes an existing creative field value. */
export const deleteCreativeFieldValues: API.OperationMethod<
  DeleteCreativeFieldValuesRequest,
  DeleteCreativeFieldValuesResponse,
  DeleteCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCreativeFieldValuesRequest,
  output: DeleteCreativeFieldValuesResponse,
  errors: [],
}));

export interface GetCreativeFieldValuesRequest {
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative Field Value ID */
  id: string;
}

export const GetCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCreativeFieldValuesRequest>;

export type GetCreativeFieldValuesResponse = CreativeFieldValue;
export const GetCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type GetCreativeFieldValuesError = DefaultErrors;

/** Gets one creative field value by ID. */
export const getCreativeFieldValues: API.OperationMethod<
  GetCreativeFieldValuesRequest,
  GetCreativeFieldValuesResponse,
  GetCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativeFieldValuesRequest,
  output: GetCreativeFieldValuesResponse,
  errors: [],
}));

export interface InsertCreativeFieldValuesRequest {
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeFieldValue;
}

export const InsertCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeFieldValue).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeFieldValuesRequest>;

export type InsertCreativeFieldValuesResponse = CreativeFieldValue;
export const InsertCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type InsertCreativeFieldValuesError = DefaultErrors;

/** Inserts a new creative field value. */
export const insertCreativeFieldValues: API.OperationMethod<
  InsertCreativeFieldValuesRequest,
  InsertCreativeFieldValuesResponse,
  InsertCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeFieldValuesRequest,
  output: InsertCreativeFieldValuesResponse,
  errors: [],
}));

export interface PatchCreativeFieldValuesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** CreativeFieldValue ID. */
  id: string;
  /** CreativeField ID. */
  creativeFieldId: string;
  /** Request body */
  body?: CreativeFieldValue;
}

export const PatchCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    body: Schema.optional(CreativeFieldValue).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCreativeFieldValuesRequest>;

export type PatchCreativeFieldValuesResponse = CreativeFieldValue;
export const PatchCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type PatchCreativeFieldValuesError = DefaultErrors;

/** Updates an existing creative field value. This method supports patch semantics. */
export const patchCreativeFieldValues: API.OperationMethod<
  PatchCreativeFieldValuesRequest,
  PatchCreativeFieldValuesResponse,
  PatchCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativeFieldValuesRequest,
  output: PatchCreativeFieldValuesResponse,
  errors: [],
}));

export interface ListCreativeFieldValuesRequest {
  /** Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed. */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "VALUE" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only creative field values with these IDs. */
  ids?: string[];
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
}

export const ListCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues",
    }),
    svc,
  ) as unknown as Schema.Schema<ListCreativeFieldValuesRequest>;

export type ListCreativeFieldValuesResponse = CreativeFieldValuesListResponse;
export const ListCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValuesListResponse;

export type ListCreativeFieldValuesError = DefaultErrors;

/** Retrieves a list of creative field values, possibly filtered. This method supports paging. */
export const listCreativeFieldValues: API.PaginatedOperationMethod<
  ListCreativeFieldValuesRequest,
  ListCreativeFieldValuesResponse,
  ListCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativeFieldValuesRequest,
  output: ListCreativeFieldValuesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertDynamicTargetingKeysRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: DynamicTargetingKey;
}

export const InsertDynamicTargetingKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(DynamicTargetingKey).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/dynamicTargetingKeys",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertDynamicTargetingKeysRequest>;

export type InsertDynamicTargetingKeysResponse = DynamicTargetingKey;
export const InsertDynamicTargetingKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicTargetingKey;

export type InsertDynamicTargetingKeysError = DefaultErrors;

/** Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement. */
export const insertDynamicTargetingKeys: API.OperationMethod<
  InsertDynamicTargetingKeysRequest,
  InsertDynamicTargetingKeysResponse,
  InsertDynamicTargetingKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDynamicTargetingKeysRequest,
  output: InsertDynamicTargetingKeysResponse,
  errors: [],
}));

export interface ListDynamicTargetingKeysRequest {
  /** Select only dynamic targeting keys exactly matching these names. */
  names?: string[];
  /** Select only dynamic targeting keys with this object ID. */
  objectId?: string;
  /** Select only dynamic targeting keys with this object type. */
  objectType?:
    | "OBJECT_ADVERTISER"
    | "OBJECT_AD"
    | "OBJECT_CREATIVE"
    | "OBJECT_PLACEMENT"
    | (string & {});
  /** Select only dynamic targeting keys whose object has this advertiser ID. */
  advertiserId?: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListDynamicTargetingKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
    objectId: Schema.optional(Schema.String).pipe(T.HttpQuery("objectId")),
    objectType: Schema.optional(Schema.String).pipe(T.HttpQuery("objectType")),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/dynamicTargetingKeys",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDynamicTargetingKeysRequest>;

export type ListDynamicTargetingKeysResponse = DynamicTargetingKeysListResponse;
export const ListDynamicTargetingKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicTargetingKeysListResponse;

export type ListDynamicTargetingKeysError = DefaultErrors;

/** Retrieves a list of dynamic targeting keys. */
export const listDynamicTargetingKeys: API.OperationMethod<
  ListDynamicTargetingKeysRequest,
  ListDynamicTargetingKeysResponse,
  ListDynamicTargetingKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDynamicTargetingKeysRequest,
  output: ListDynamicTargetingKeysResponse,
  errors: [],
}));

export interface DeleteDynamicTargetingKeysRequest {
  /** Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
  name: string;
  /** ID of the object of this dynamic targeting key. This is a required field. */
  objectId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Type of the object of this dynamic targeting key. This is a required field. */
  objectType:
    | "OBJECT_ADVERTISER"
    | "OBJECT_AD"
    | "OBJECT_CREATIVE"
    | "OBJECT_PLACEMENT"
    | (string & {});
}

export const DeleteDynamicTargetingKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpQuery("name")),
    objectId: Schema.String.pipe(T.HttpPath("objectId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    objectType: Schema.String.pipe(T.HttpQuery("objectType")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/dynamicTargetingKeys/{objectId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteDynamicTargetingKeysRequest>;

export interface DeleteDynamicTargetingKeysResponse {}
export const DeleteDynamicTargetingKeysResponse: Schema.Schema<DeleteDynamicTargetingKeysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteDynamicTargetingKeysResponse>;

export type DeleteDynamicTargetingKeysError = DefaultErrors;

/** Deletes an existing dynamic targeting key. */
export const deleteDynamicTargetingKeys: API.OperationMethod<
  DeleteDynamicTargetingKeysRequest,
  DeleteDynamicTargetingKeysResponse,
  DeleteDynamicTargetingKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDynamicTargetingKeysRequest,
  output: DeleteDynamicTargetingKeysResponse,
  errors: [],
}));

export interface ListTvCampaignSummariesRequest {
  /** Optional. TV data provider. If not specified, defaults to `COMSCORE_NATIONAL_US`. */
  tvDataProvider?:
    | "INVALID_TV_DATA_PROVIDER"
    | "INTAGE_JP"
    | "IBOPE_AR"
    | "IBOPE_BR"
    | "IBOPE_CL"
    | "IBOPE_CO"
    | "TNS_VN"
    | "COMSCORE_NATIONAL_US"
    | "COMSCORE_CA"
    | "SAMBA_AU"
    | (string & {});
  /** Required. User profile ID associated with this request. */
  profileId: string;
  /** Optional. Country Dart ID. If not specified, defaults to 256 (US). */
  countryDartId?: string;
  /** Required. Account ID associated with this request. */
  accountId?: string;
  /** Required. Search string to filter the list of TV campaign summaries. Matches any substring. Required field. */
  name?: string;
}

export const ListTvCampaignSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tvDataProvider: Schema.optional(Schema.String).pipe(
      T.HttpQuery("tvDataProvider"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    countryDartId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("countryDartId"),
    ),
    accountId: Schema.optional(Schema.String).pipe(T.HttpQuery("accountId")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/tvCampaignSummaries",
    }),
    svc,
  ) as unknown as Schema.Schema<ListTvCampaignSummariesRequest>;

export type ListTvCampaignSummariesResponse = TvCampaignSummariesListResponse;
export const ListTvCampaignSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TvCampaignSummariesListResponse;

export type ListTvCampaignSummariesError = DefaultErrors;

/** Retrieves a list of TV campaign summaries. */
export const listTvCampaignSummaries: API.OperationMethod<
  ListTvCampaignSummariesRequest,
  ListTvCampaignSummariesResponse,
  ListTvCampaignSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTvCampaignSummariesRequest,
  output: ListTvCampaignSummariesResponse,
  errors: [],
}));

export interface GetAccountActiveAdSummariesRequest {
  /** Account ID. */
  summaryAccountId: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAccountActiveAdSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summaryAccountId: Schema.String.pipe(T.HttpPath("summaryAccountId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountActiveAdSummariesRequest>;

export type GetAccountActiveAdSummariesResponse = AccountActiveAdSummary;
export const GetAccountActiveAdSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountActiveAdSummary;

export type GetAccountActiveAdSummariesError = DefaultErrors;

/** Gets the account's active ad summary by account ID. */
export const getAccountActiveAdSummaries: API.OperationMethod<
  GetAccountActiveAdSummariesRequest,
  GetAccountActiveAdSummariesResponse,
  GetAccountActiveAdSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountActiveAdSummariesRequest,
  output: GetAccountActiveAdSummariesResponse,
  errors: [],
}));

export interface PatchRemarketingListSharesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. RemarketingList ID. */
  id: string;
  /** Request body */
  body?: RemarketingListShare;
}

export const PatchRemarketingListSharesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(RemarketingListShare).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/remarketingListShares",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchRemarketingListSharesRequest>;

export type PatchRemarketingListSharesResponse = RemarketingListShare;
export const PatchRemarketingListSharesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListShare;

export type PatchRemarketingListSharesError = DefaultErrors;

/** Updates an existing remarketing list share. This method supports patch semantics. */
export const patchRemarketingListShares: API.OperationMethod<
  PatchRemarketingListSharesRequest,
  PatchRemarketingListSharesResponse,
  PatchRemarketingListSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRemarketingListSharesRequest,
  output: PatchRemarketingListSharesResponse,
  errors: [],
}));

export interface UpdateRemarketingListSharesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: RemarketingListShare;
}

export const UpdateRemarketingListSharesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(RemarketingListShare).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/remarketingListShares",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateRemarketingListSharesRequest>;

export type UpdateRemarketingListSharesResponse = RemarketingListShare;
export const UpdateRemarketingListSharesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListShare;

export type UpdateRemarketingListSharesError = DefaultErrors;

/** Updates an existing remarketing list share. */
export const updateRemarketingListShares: API.OperationMethod<
  UpdateRemarketingListSharesRequest,
  UpdateRemarketingListSharesResponse,
  UpdateRemarketingListSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRemarketingListSharesRequest,
  output: UpdateRemarketingListSharesResponse,
  errors: [],
}));

export interface GetRemarketingListSharesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Remarketing list ID. */
  remarketingListId: string;
}

export const GetRemarketingListSharesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    remarketingListId: Schema.String.pipe(T.HttpPath("remarketingListId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/remarketingListShares/{remarketingListId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetRemarketingListSharesRequest>;

export type GetRemarketingListSharesResponse = RemarketingListShare;
export const GetRemarketingListSharesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListShare;

export type GetRemarketingListSharesError = DefaultErrors;

/** Gets one remarketing list share by remarketing list ID. */
export const getRemarketingListShares: API.OperationMethod<
  GetRemarketingListSharesRequest,
  GetRemarketingListSharesResponse,
  GetRemarketingListSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRemarketingListSharesRequest,
  output: GetRemarketingListSharesResponse,
  errors: [],
}));

export interface ListMetrosRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListMetrosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/metros" }),
  svc,
) as unknown as Schema.Schema<ListMetrosRequest>;

export type ListMetrosResponse = MetrosListResponse;
export const ListMetrosResponse =
  /*@__PURE__*/ /*#__PURE__*/ MetrosListResponse;

export type ListMetrosError = DefaultErrors;

/** Retrieves a list of metros. */
export const listMetros: API.OperationMethod<
  ListMetrosRequest,
  ListMetrosResponse,
  ListMetrosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMetrosRequest,
  output: ListMetrosResponse,
  errors: [],
}));

export interface DeletePlacementStrategiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Placement strategy ID. */
  id: string;
}

export const DeletePlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/placementStrategies/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeletePlacementStrategiesRequest>;

export interface DeletePlacementStrategiesResponse {}
export const DeletePlacementStrategiesResponse: Schema.Schema<DeletePlacementStrategiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePlacementStrategiesResponse>;

export type DeletePlacementStrategiesError = DefaultErrors;

/** Deletes an existing placement strategy. */
export const deletePlacementStrategies: API.OperationMethod<
  DeletePlacementStrategiesRequest,
  DeletePlacementStrategiesResponse,
  DeletePlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePlacementStrategiesRequest,
  output: DeletePlacementStrategiesResponse,
  errors: [],
}));

export interface UpdatePlacementStrategiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: PlacementStrategy;
}

export const UpdatePlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(PlacementStrategy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/placementStrategies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePlacementStrategiesRequest>;

export type UpdatePlacementStrategiesResponse = PlacementStrategy;
export const UpdatePlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type UpdatePlacementStrategiesError = DefaultErrors;

/** Updates an existing placement strategy. */
export const updatePlacementStrategies: API.OperationMethod<
  UpdatePlacementStrategiesRequest,
  UpdatePlacementStrategiesResponse,
  UpdatePlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlacementStrategiesRequest,
  output: UpdatePlacementStrategiesResponse,
  errors: [],
}));

export interface ListPlacementStrategiesRequest {
  /** Select only placement strategies with these IDs. */
  ids?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy". */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
}

export const ListPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/placementStrategies",
    }),
    svc,
  ) as unknown as Schema.Schema<ListPlacementStrategiesRequest>;

export type ListPlacementStrategiesResponse = PlacementStrategiesListResponse;
export const ListPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategiesListResponse;

export type ListPlacementStrategiesError = DefaultErrors;

/** Retrieves a list of placement strategies, possibly filtered. This method supports paging. */
export const listPlacementStrategies: API.PaginatedOperationMethod<
  ListPlacementStrategiesRequest,
  ListPlacementStrategiesResponse,
  ListPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlacementStrategiesRequest,
  output: ListPlacementStrategiesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetPlacementStrategiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Placement strategy ID. */
  id: string;
}

export const GetPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/placementStrategies/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPlacementStrategiesRequest>;

export type GetPlacementStrategiesResponse = PlacementStrategy;
export const GetPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type GetPlacementStrategiesError = DefaultErrors;

/** Gets one placement strategy by ID. */
export const getPlacementStrategies: API.OperationMethod<
  GetPlacementStrategiesRequest,
  GetPlacementStrategiesResponse,
  GetPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacementStrategiesRequest,
  output: GetPlacementStrategiesResponse,
  errors: [],
}));

export interface PatchPlacementStrategiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. PlacementStrategy ID. */
  id: string;
  /** Request body */
  body?: PlacementStrategy;
}

export const PatchPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(PlacementStrategy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/placementStrategies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchPlacementStrategiesRequest>;

export type PatchPlacementStrategiesResponse = PlacementStrategy;
export const PatchPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type PatchPlacementStrategiesError = DefaultErrors;

/** Updates an existing placement strategy. This method supports patch semantics. */
export const patchPlacementStrategies: API.OperationMethod<
  PatchPlacementStrategiesRequest,
  PatchPlacementStrategiesResponse,
  PatchPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPlacementStrategiesRequest,
  output: PatchPlacementStrategiesResponse,
  errors: [],
}));

export interface InsertPlacementStrategiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: PlacementStrategy;
}

export const InsertPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(PlacementStrategy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/placementStrategies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertPlacementStrategiesRequest>;

export type InsertPlacementStrategiesResponse = PlacementStrategy;
export const InsertPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type InsertPlacementStrategiesError = DefaultErrors;

/** Inserts a new placement strategy. */
export const insertPlacementStrategies: API.OperationMethod<
  InsertPlacementStrategiesRequest,
  InsertPlacementStrategiesResponse,
  InsertPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlacementStrategiesRequest,
  output: InsertPlacementStrategiesResponse,
  errors: [],
}));

export interface GetMobileAppsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Mobile app ID. */
  id: string;
}

export const GetMobileAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/mobileApps/{id}" }),
  svc,
) as unknown as Schema.Schema<GetMobileAppsRequest>;

export type GetMobileAppsResponse = MobileApp;
export const GetMobileAppsResponse = /*@__PURE__*/ /*#__PURE__*/ MobileApp;

export type GetMobileAppsError = DefaultErrors;

/** Gets one mobile app by ID. */
export const getMobileApps: API.OperationMethod<
  GetMobileAppsRequest,
  GetMobileAppsResponse,
  GetMobileAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMobileAppsRequest,
  output: GetMobileAppsResponse,
  errors: [],
}));

export interface ListMobileAppsRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only apps from these directories. */
  directories?:
    | "UNKNOWN"
    | "APPLE_APP_STORE"
    | "GOOGLE_PLAY_STORE"
    | "ROKU_APP_STORE"
    | "AMAZON_FIRETV_APP_STORE"
    | "PLAYSTATION_APP_STORE"
    | "APPLE_TV_APP_STORE"
    | "XBOX_APP_STORE"
    | "SAMSUNG_TV_APP_STORE"
    | "ANDROID_TV_APP_STORE"
    | "GENERIC_CTV_APP_STORE"
    | (string & {})[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only apps with these IDs. */
  ids?: string[];
}

export const ListMobileAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  directories: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("directories"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/mobileApps" }),
  svc,
) as unknown as Schema.Schema<ListMobileAppsRequest>;

export type ListMobileAppsResponse = MobileAppsListResponse;
export const ListMobileAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileAppsListResponse;

export type ListMobileAppsError = DefaultErrors;

/** Retrieves list of available mobile apps. */
export const listMobileApps: API.PaginatedOperationMethod<
  ListMobileAppsRequest,
  ListMobileAppsResponse,
  ListMobileAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMobileAppsRequest,
  output: ListMobileAppsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListBillingAssignmentsRequest {
  /** Billing profile ID of this billing assignment. */
  billingProfileId: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListBillingAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingProfileId: Schema.String.pipe(T.HttpPath("billingProfileId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/billingProfiles/{billingProfileId}/billingAssignments",
    }),
    svc,
  ) as unknown as Schema.Schema<ListBillingAssignmentsRequest>;

export type ListBillingAssignmentsResponse = BillingAssignmentsListResponse;
export const ListBillingAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingAssignmentsListResponse;

export type ListBillingAssignmentsError = DefaultErrors;

/** Retrieves a list of billing assignments. */
export const listBillingAssignments: API.OperationMethod<
  ListBillingAssignmentsRequest,
  ListBillingAssignmentsResponse,
  ListBillingAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBillingAssignmentsRequest,
  output: ListBillingAssignmentsResponse,
  errors: [],
}));

export interface InsertBillingAssignmentsRequest {
  /** Billing profile ID of this billing assignment. */
  billingProfileId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: BillingAssignment;
}

export const InsertBillingAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingProfileId: Schema.String.pipe(T.HttpPath("billingProfileId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(BillingAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/billingProfiles/{billingProfileId}/billingAssignments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertBillingAssignmentsRequest>;

export type InsertBillingAssignmentsResponse = BillingAssignment;
export const InsertBillingAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingAssignment;

export type InsertBillingAssignmentsError = DefaultErrors;

/** Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned. */
export const insertBillingAssignments: API.OperationMethod<
  InsertBillingAssignmentsRequest,
  InsertBillingAssignmentsResponse,
  InsertBillingAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertBillingAssignmentsRequest,
  output: InsertBillingAssignmentsResponse,
  errors: [],
}));

export interface ListContentCategoriesRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only content categories with these IDs. */
  ids?: string[];
}

export const ListContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/contentCategories",
    }),
    svc,
  ) as unknown as Schema.Schema<ListContentCategoriesRequest>;

export type ListContentCategoriesResponse = ContentCategoriesListResponse;
export const ListContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategoriesListResponse;

export type ListContentCategoriesError = DefaultErrors;

/** Retrieves a list of content categories, possibly filtered. This method supports paging. */
export const listContentCategories: API.PaginatedOperationMethod<
  ListContentCategoriesRequest,
  ListContentCategoriesResponse,
  ListContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListContentCategoriesRequest,
  output: ListContentCategoriesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertContentCategoriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: ContentCategory;
}

export const InsertContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(ContentCategory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/contentCategories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertContentCategoriesRequest>;

export type InsertContentCategoriesResponse = ContentCategory;
export const InsertContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type InsertContentCategoriesError = DefaultErrors;

/** Inserts a new content category. */
export const insertContentCategories: API.OperationMethod<
  InsertContentCategoriesRequest,
  InsertContentCategoriesResponse,
  InsertContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertContentCategoriesRequest,
  output: InsertContentCategoriesResponse,
  errors: [],
}));

export interface PatchContentCategoriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. ContentCategory ID. */
  id: string;
  /** Request body */
  body?: ContentCategory;
}

export const PatchContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(ContentCategory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/contentCategories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchContentCategoriesRequest>;

export type PatchContentCategoriesResponse = ContentCategory;
export const PatchContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type PatchContentCategoriesError = DefaultErrors;

/** Updates an existing content category. This method supports patch semantics. */
export const patchContentCategories: API.OperationMethod<
  PatchContentCategoriesRequest,
  PatchContentCategoriesResponse,
  PatchContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchContentCategoriesRequest,
  output: PatchContentCategoriesResponse,
  errors: [],
}));

export interface GetContentCategoriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Content category ID. */
  id: string;
}

export const GetContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/contentCategories/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetContentCategoriesRequest>;

export type GetContentCategoriesResponse = ContentCategory;
export const GetContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type GetContentCategoriesError = DefaultErrors;

/** Gets one content category by ID. */
export const getContentCategories: API.OperationMethod<
  GetContentCategoriesRequest,
  GetContentCategoriesResponse,
  GetContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentCategoriesRequest,
  output: GetContentCategoriesResponse,
  errors: [],
}));

export interface DeleteContentCategoriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Content category ID. */
  id: string;
}

export const DeleteContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/contentCategories/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteContentCategoriesRequest>;

export interface DeleteContentCategoriesResponse {}
export const DeleteContentCategoriesResponse: Schema.Schema<DeleteContentCategoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteContentCategoriesResponse>;

export type DeleteContentCategoriesError = DefaultErrors;

/** Deletes an existing content category. */
export const deleteContentCategories: API.OperationMethod<
  DeleteContentCategoriesRequest,
  DeleteContentCategoriesResponse,
  DeleteContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContentCategoriesRequest,
  output: DeleteContentCategoriesResponse,
  errors: [],
}));

export interface UpdateContentCategoriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: ContentCategory;
}

export const UpdateContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(ContentCategory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/contentCategories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateContentCategoriesRequest>;

export type UpdateContentCategoriesResponse = ContentCategory;
export const UpdateContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type UpdateContentCategoriesError = DefaultErrors;

/** Updates an existing content category. */
export const updateContentCategories: API.OperationMethod<
  UpdateContentCategoriesRequest,
  UpdateContentCategoriesResponse,
  UpdateContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContentCategoriesRequest,
  output: UpdateContentCategoriesResponse,
  errors: [],
}));

export interface PatchSubaccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Subaccount ID. */
  id: string;
  /** Request body */
  body?: Subaccount;
}

export const PatchSubaccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(Subaccount).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/subaccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchSubaccountsRequest>;

export type PatchSubaccountsResponse = Subaccount;
export const PatchSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type PatchSubaccountsError = DefaultErrors;

/** Updates an existing subaccount. This method supports patch semantics. */
export const patchSubaccounts: API.OperationMethod<
  PatchSubaccountsRequest,
  PatchSubaccountsResponse,
  PatchSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSubaccountsRequest,
  output: PatchSubaccountsResponse,
  errors: [],
}));

export interface InsertSubaccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Subaccount;
}

export const InsertSubaccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Subaccount).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/subaccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertSubaccountsRequest>;

export type InsertSubaccountsResponse = Subaccount;
export const InsertSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type InsertSubaccountsError = DefaultErrors;

/** Inserts a new subaccount. */
export const insertSubaccounts: API.OperationMethod<
  InsertSubaccountsRequest,
  InsertSubaccountsResponse,
  InsertSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSubaccountsRequest,
  output: InsertSubaccountsResponse,
  errors: [],
}));

export interface GetSubaccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Subaccount ID. */
  id: string;
}

export const GetSubaccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/subaccounts/{id}" }),
  svc,
) as unknown as Schema.Schema<GetSubaccountsRequest>;

export type GetSubaccountsResponse = Subaccount;
export const GetSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type GetSubaccountsError = DefaultErrors;

/** Gets one subaccount by ID. */
export const getSubaccounts: API.OperationMethod<
  GetSubaccountsRequest,
  GetSubaccountsResponse,
  GetSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSubaccountsRequest,
  output: GetSubaccountsResponse,
  errors: [],
}));

export interface ListSubaccountsRequest {
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only subaccounts with these IDs. */
  ids?: string[];
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" . */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
}

export const ListSubaccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/subaccounts" }),
  svc,
) as unknown as Schema.Schema<ListSubaccountsRequest>;

export type ListSubaccountsResponse = SubaccountsListResponse;
export const ListSubaccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SubaccountsListResponse;

export type ListSubaccountsError = DefaultErrors;

/** Gets a list of subaccounts, possibly filtered. This method supports paging. */
export const listSubaccounts: API.PaginatedOperationMethod<
  ListSubaccountsRequest,
  ListSubaccountsResponse,
  ListSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSubaccountsRequest,
  output: ListSubaccountsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSubaccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Subaccount;
}

export const UpdateSubaccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Subaccount).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/subaccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateSubaccountsRequest>;

export type UpdateSubaccountsResponse = Subaccount;
export const UpdateSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type UpdateSubaccountsError = DefaultErrors;

/** Updates an existing subaccount. */
export const updateSubaccounts: API.OperationMethod<
  UpdateSubaccountsRequest,
  UpdateSubaccountsResponse,
  UpdateSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSubaccountsRequest,
  output: UpdateSubaccountsResponse,
  errors: [],
}));

export interface ListAdvertiserLandingPagesRequest {
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages. */
  archived?: boolean;
  /** Select only landing pages that belong to these advertisers. */
  advertiserIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage". */
  searchString?: string;
  /** Select only landing pages that are associated with these campaigns. */
  campaignIds?: string[];
  /** Select only landing pages with these IDs. */
  ids?: string[];
  /** Select only landing pages that belong to this subaccount. */
  subaccountId?: string;
}

export const ListAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("campaignIds"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    subaccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subaccountId"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/advertiserLandingPages",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAdvertiserLandingPagesRequest>;

export type ListAdvertiserLandingPagesResponse =
  AdvertiserLandingPagesListResponse;
export const ListAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserLandingPagesListResponse;

export type ListAdvertiserLandingPagesError = DefaultErrors;

/** Retrieves a list of landing pages. */
export const listAdvertiserLandingPages: API.PaginatedOperationMethod<
  ListAdvertiserLandingPagesRequest,
  ListAdvertiserLandingPagesResponse,
  ListAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertiserLandingPagesRequest,
  output: ListAdvertiserLandingPagesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAdvertiserLandingPagesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Landing page ID. */
  id: string;
}

export const GetAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/advertiserLandingPages/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAdvertiserLandingPagesRequest>;

export type GetAdvertiserLandingPagesResponse = LandingPage;
export const GetAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type GetAdvertiserLandingPagesError = DefaultErrors;

/** Gets one landing page by ID. */
export const getAdvertiserLandingPages: API.OperationMethod<
  GetAdvertiserLandingPagesRequest,
  GetAdvertiserLandingPagesResponse,
  GetAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvertiserLandingPagesRequest,
  output: GetAdvertiserLandingPagesResponse,
  errors: [],
}));

export interface InsertAdvertiserLandingPagesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: LandingPage;
}

export const InsertAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(LandingPage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/advertiserLandingPages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAdvertiserLandingPagesRequest>;

export type InsertAdvertiserLandingPagesResponse = LandingPage;
export const InsertAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type InsertAdvertiserLandingPagesError = DefaultErrors;

/** Inserts a new landing page. */
export const insertAdvertiserLandingPages: API.OperationMethod<
  InsertAdvertiserLandingPagesRequest,
  InsertAdvertiserLandingPagesResponse,
  InsertAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdvertiserLandingPagesRequest,
  output: InsertAdvertiserLandingPagesResponse,
  errors: [],
}));

export interface PatchAdvertiserLandingPagesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Landing Page ID. */
  id: string;
  /** Request body */
  body?: LandingPage;
}

export const PatchAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(LandingPage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/advertiserLandingPages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAdvertiserLandingPagesRequest>;

export type PatchAdvertiserLandingPagesResponse = LandingPage;
export const PatchAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type PatchAdvertiserLandingPagesError = DefaultErrors;

/** Updates an existing landing page. This method supports patch semantics. */
export const patchAdvertiserLandingPages: API.OperationMethod<
  PatchAdvertiserLandingPagesRequest,
  PatchAdvertiserLandingPagesResponse,
  PatchAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvertiserLandingPagesRequest,
  output: PatchAdvertiserLandingPagesResponse,
  errors: [],
}));

export interface UpdateAdvertiserLandingPagesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: LandingPage;
}

export const UpdateAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(LandingPage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/advertiserLandingPages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAdvertiserLandingPagesRequest>;

export type UpdateAdvertiserLandingPagesResponse = LandingPage;
export const UpdateAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type UpdateAdvertiserLandingPagesError = DefaultErrors;

/** Updates an existing landing page. */
export const updateAdvertiserLandingPages: API.OperationMethod<
  UpdateAdvertiserLandingPagesRequest,
  UpdateAdvertiserLandingPagesResponse,
  UpdateAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdvertiserLandingPagesRequest,
  output: UpdateAdvertiserLandingPagesResponse,
  errors: [],
}));

export interface GetMobileCarriersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Mobile carrier ID. */
  id: string;
}

export const GetMobileCarriersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/mobileCarriers/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetMobileCarriersRequest>;

export type GetMobileCarriersResponse = MobileCarrier;
export const GetMobileCarriersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileCarrier;

export type GetMobileCarriersError = DefaultErrors;

/** Gets one mobile carrier by ID. */
export const getMobileCarriers: API.OperationMethod<
  GetMobileCarriersRequest,
  GetMobileCarriersResponse,
  GetMobileCarriersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMobileCarriersRequest,
  output: GetMobileCarriersResponse,
  errors: [],
}));

export interface ListMobileCarriersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListMobileCarriersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/mobileCarriers" }),
    svc,
  ) as unknown as Schema.Schema<ListMobileCarriersRequest>;

export type ListMobileCarriersResponse = MobileCarriersListResponse;
export const ListMobileCarriersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileCarriersListResponse;

export type ListMobileCarriersError = DefaultErrors;

/** Retrieves a list of mobile carriers. */
export const listMobileCarriers: API.OperationMethod<
  ListMobileCarriersRequest,
  ListMobileCarriersResponse,
  ListMobileCarriersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMobileCarriersRequest,
  output: ListMobileCarriersResponse,
  errors: [],
}));

export interface ListSizesRequest {
  /** Select only IAB standard sizes. */
  iabStandard?: boolean;
  /** Select only sizes with this width. */
  width?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only sizes with this height. */
  height?: number;
  /** Select only sizes with these IDs. */
  ids?: string[];
}

export const ListSizesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iabStandard: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("iabStandard")),
  width: Schema.optional(Schema.Number).pipe(T.HttpQuery("width")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  height: Schema.optional(Schema.Number).pipe(T.HttpQuery("height")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/sizes" }),
  svc,
) as unknown as Schema.Schema<ListSizesRequest>;

export type ListSizesResponse = SizesListResponse;
export const ListSizesResponse = /*@__PURE__*/ /*#__PURE__*/ SizesListResponse;

export type ListSizesError = DefaultErrors;

/** Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI. */
export const listSizes: API.OperationMethod<
  ListSizesRequest,
  ListSizesResponse,
  ListSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListSizesRequest,
  output: ListSizesResponse,
  errors: [],
}));

export interface InsertSizesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Size;
}

export const InsertSizesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Size).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/sizes",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertSizesRequest>;

export type InsertSizesResponse = Size;
export const InsertSizesResponse = /*@__PURE__*/ /*#__PURE__*/ Size;

export type InsertSizesError = DefaultErrors;

/** Inserts a new size. */
export const insertSizes: API.OperationMethod<
  InsertSizesRequest,
  InsertSizesResponse,
  InsertSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSizesRequest,
  output: InsertSizesResponse,
  errors: [],
}));

export interface GetSizesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Size ID. */
  id: string;
}

export const GetSizesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/sizes/{id}" }),
  svc,
) as unknown as Schema.Schema<GetSizesRequest>;

export type GetSizesResponse = Size;
export const GetSizesResponse = /*@__PURE__*/ /*#__PURE__*/ Size;

export type GetSizesError = DefaultErrors;

/** Gets one size by ID. */
export const getSizes: API.OperationMethod<
  GetSizesRequest,
  GetSizesResponse,
  GetSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSizesRequest,
  output: GetSizesResponse,
  errors: [],
}));

export interface ListBrowsersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListBrowsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/browsers" }),
  svc,
) as unknown as Schema.Schema<ListBrowsersRequest>;

export type ListBrowsersResponse = BrowsersListResponse;
export const ListBrowsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BrowsersListResponse;

export type ListBrowsersError = DefaultErrors;

/** Retrieves a list of browsers. */
export const listBrowsers: API.OperationMethod<
  ListBrowsersRequest,
  ListBrowsersResponse,
  ListBrowsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBrowsersRequest,
  output: ListBrowsersResponse,
  errors: [],
}));

export interface ListLanguagesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListLanguagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/languages" }),
  svc,
) as unknown as Schema.Schema<ListLanguagesRequest>;

export type ListLanguagesResponse = LanguagesListResponse;
export const ListLanguagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LanguagesListResponse;

export type ListLanguagesError = DefaultErrors;

/** Retrieves a list of languages. */
export const listLanguages: API.OperationMethod<
  ListLanguagesRequest,
  ListLanguagesResponse,
  ListLanguagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLanguagesRequest,
  output: ListLanguagesResponse,
  errors: [],
}));

export interface GetChangeLogsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Change log ID. */
  id: string;
}

export const GetChangeLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/changeLogs/{id}" }),
  svc,
) as unknown as Schema.Schema<GetChangeLogsRequest>;

export type GetChangeLogsResponse = ChangeLog;
export const GetChangeLogsResponse = /*@__PURE__*/ /*#__PURE__*/ ChangeLog;

export type GetChangeLogsError = DefaultErrors;

/** Gets one change log by ID. */
export const getChangeLogs: API.OperationMethod<
  GetChangeLogsRequest,
  GetChangeLogsResponse,
  GetChangeLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetChangeLogsRequest,
  output: GetChangeLogsResponse,
  errors: [],
}));

export interface ListChangeLogsRequest {
  /** Select only change logs whose object ID, user name, old or new values match the search string. */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only change logs with these IDs. */
  ids?: string[];
  /** Select only change logs with the specified action. */
  action?:
    | "ACTION_CREATE"
    | "ACTION_UPDATE"
    | "ACTION_DELETE"
    | "ACTION_ENABLE"
    | "ACTION_DISABLE"
    | "ACTION_ADD"
    | "ACTION_REMOVE"
    | "ACTION_MARK_AS_DEFAULT"
    | "ACTION_ASSOCIATE"
    | "ACTION_ASSIGN"
    | "ACTION_UNASSIGN"
    | "ACTION_SEND"
    | "ACTION_LINK"
    | "ACTION_UNLINK"
    | "ACTION_PUSH"
    | "ACTION_EMAIL_TAGS"
    | "ACTION_SHARE"
    | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only change logs with these user profile IDs. */
  userProfileIds?: string[];
  /** Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset. */
  minChangeTime?: string;
  /** Select only change logs with these object IDs. */
  objectIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only change logs with the specified object type. */
  objectType?:
    | "OBJECT_ADVERTISER"
    | "OBJECT_FLOODLIGHT_CONFIGURATION"
    | "OBJECT_AD"
    | "OBJECT_FLOODLIGHT_ACTVITY"
    | "OBJECT_CAMPAIGN"
    | "OBJECT_FLOODLIGHT_ACTIVITY_GROUP"
    | "OBJECT_CREATIVE"
    | "OBJECT_PLACEMENT"
    | "OBJECT_DFA_SITE"
    | "OBJECT_USER_ROLE"
    | "OBJECT_USER_PROFILE"
    | "OBJECT_ADVERTISER_GROUP"
    | "OBJECT_ACCOUNT"
    | "OBJECT_SUBACCOUNT"
    | "OBJECT_RICHMEDIA_CREATIVE"
    | "OBJECT_INSTREAM_CREATIVE"
    | "OBJECT_MEDIA_ORDER"
    | "OBJECT_CONTENT_CATEGORY"
    | "OBJECT_PLACEMENT_STRATEGY"
    | "OBJECT_SD_SITE"
    | "OBJECT_SIZE"
    | "OBJECT_CREATIVE_GROUP"
    | "OBJECT_CREATIVE_ASSET"
    | "OBJECT_USER_PROFILE_FILTER"
    | "OBJECT_LANDING_PAGE"
    | "OBJECT_CREATIVE_FIELD"
    | "OBJECT_REMARKETING_LIST"
    | "OBJECT_PROVIDED_LIST_CLIENT"
    | "OBJECT_EVENT_TAG"
    | "OBJECT_CREATIVE_BUNDLE"
    | "OBJECT_BILLING_ACCOUNT_GROUP"
    | "OBJECT_BILLING_FEATURE"
    | "OBJECT_RATE_CARD"
    | "OBJECT_ACCOUNT_BILLING_FEATURE"
    | "OBJECT_BILLING_MINIMUM_FEE"
    | "OBJECT_BILLING_PROFILE"
    | "OBJECT_PLAYSTORE_LINK"
    | "OBJECT_TARGETING_TEMPLATE"
    | "OBJECT_SEARCH_LIFT_STUDY"
    | "OBJECT_FLOODLIGHT_DV360_LINK"
    | "OBJECT_ADVERTISER_CUSTOMER_LINK"
    | "OBJECT_CONVERSION_DOMAIN"
    | "OBJECT_ACCOUNT_CONVERSION_DOMAIN"
    | (string & {});
  /** Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset. */
  maxChangeTime?: string;
}

export const ListChangeLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  action: Schema.optional(Schema.String).pipe(T.HttpQuery("action")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  userProfileIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("userProfileIds"),
  ),
  minChangeTime: Schema.optional(Schema.String).pipe(
    T.HttpQuery("minChangeTime"),
  ),
  objectIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("objectIds"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  objectType: Schema.optional(Schema.String).pipe(T.HttpQuery("objectType")),
  maxChangeTime: Schema.optional(Schema.String).pipe(
    T.HttpQuery("maxChangeTime"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/changeLogs" }),
  svc,
) as unknown as Schema.Schema<ListChangeLogsRequest>;

export type ListChangeLogsResponse = ChangeLogsListResponse;
export const ListChangeLogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChangeLogsListResponse;

export type ListChangeLogsError = DefaultErrors;

/** Retrieves a list of change logs. This method supports paging. */
export const listChangeLogs: API.PaginatedOperationMethod<
  ListChangeLogsRequest,
  ListChangeLogsResponse,
  ListChangeLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListChangeLogsRequest,
  output: ListChangeLogsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetPlacementGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Placement group ID. */
  id: string;
}

export const GetPlacementGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/placementGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPlacementGroupsRequest>;

export type GetPlacementGroupsResponse = PlacementGroup;
export const GetPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type GetPlacementGroupsError = DefaultErrors;

/** Gets one placement group by ID. */
export const getPlacementGroups: API.OperationMethod<
  GetPlacementGroupsRequest,
  GetPlacementGroupsResponse,
  GetPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacementGroupsRequest,
  output: GetPlacementGroupsResponse,
  errors: [],
}));

export interface PatchPlacementGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Placement ID. */
  id: string;
  /** Request body */
  body?: PlacementGroup;
}

export const PatchPlacementGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(PlacementGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/placementGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchPlacementGroupsRequest>;

export type PatchPlacementGroupsResponse = PlacementGroup;
export const PatchPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type PatchPlacementGroupsError = DefaultErrors;

/** Updates an existing placement group. This method supports patch semantics. */
export const patchPlacementGroups: API.OperationMethod<
  PatchPlacementGroupsRequest,
  PatchPlacementGroupsResponse,
  PatchPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPlacementGroupsRequest,
  output: PatchPlacementGroupsResponse,
  errors: [],
}));

export interface InsertPlacementGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: PlacementGroup;
}

export const InsertPlacementGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(PlacementGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/placementGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertPlacementGroupsRequest>;

export type InsertPlacementGroupsResponse = PlacementGroup;
export const InsertPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type InsertPlacementGroupsError = DefaultErrors;

/** Inserts a new placement group. */
export const insertPlacementGroups: API.OperationMethod<
  InsertPlacementGroupsRequest,
  InsertPlacementGroupsResponse,
  InsertPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlacementGroupsRequest,
  output: InsertPlacementGroupsResponse,
  errors: [],
}));

export interface ListPlacementGroupsRequest {
  /** Select only placement groups that are associated with these content categories. */
  contentCategoryIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only placement groups that are associated with these sites. */
  siteIds?: string[];
  /** Select only placement groups that belong to these advertisers. */
  advertiserIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only placement groups with these pricing types. */
  pricingTypes?:
    | "PRICING_TYPE_CPM"
    | "PRICING_TYPE_CPC"
    | "PRICING_TYPE_CPA"
    | "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    | "PRICING_TYPE_FLAT_RATE_CLICKS"
    | "PRICING_TYPE_CPM_ACTIVEVIEW"
    | (string & {})[];
  /** Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd". */
  minEndDate?: string;
  /** Select only placement groups that belong to these campaigns. */
  campaignIds?: string[];
  /** Select only placement groups with these IDs. */
  ids?: string[];
  /** Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd". */
  minStartDate?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only placements with these active statuses. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {})[];
  /** Select only placement groups that are associated with these placement strategies. */
  placementStrategyIds?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup". */
  searchString?: string;
  /** Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd". */
  maxEndDate?: string;
  /** Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd". */
  maxStartDate?: string;
  /** Select only placement groups that are associated with these directory sites. */
  directorySiteIds?: string[];
  /** Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. */
  placementGroupType?:
    | "PLACEMENT_PACKAGE"
    | "PLACEMENT_ROADBLOCK"
    | (string & {});
}

export const ListPlacementGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentCategoryIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("contentCategoryIds"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    siteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("siteIds"),
    ),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    pricingTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("pricingTypes"),
    ),
    minEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("minEndDate")),
    campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("campaignIds"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    minStartDate: Schema.optional(Schema.String).pipe(
      T.HttpQuery("minStartDate"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    activeStatus: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("activeStatus"),
    ),
    placementStrategyIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("placementStrategyIds"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    maxEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("maxEndDate")),
    maxStartDate: Schema.optional(Schema.String).pipe(
      T.HttpQuery("maxStartDate"),
    ),
    directorySiteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("directorySiteIds"),
    ),
    placementGroupType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("placementGroupType"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/placementGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListPlacementGroupsRequest>;

export type ListPlacementGroupsResponse = PlacementGroupsListResponse;
export const ListPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroupsListResponse;

export type ListPlacementGroupsError = DefaultErrors;

/** Retrieves a list of placement groups, possibly filtered. This method supports paging. */
export const listPlacementGroups: API.PaginatedOperationMethod<
  ListPlacementGroupsRequest,
  ListPlacementGroupsResponse,
  ListPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlacementGroupsRequest,
  output: ListPlacementGroupsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdatePlacementGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: PlacementGroup;
}

export const UpdatePlacementGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(PlacementGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/placementGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePlacementGroupsRequest>;

export type UpdatePlacementGroupsResponse = PlacementGroup;
export const UpdatePlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type UpdatePlacementGroupsError = DefaultErrors;

/** Updates an existing placement group. */
export const updatePlacementGroups: API.OperationMethod<
  UpdatePlacementGroupsRequest,
  UpdatePlacementGroupsResponse,
  UpdatePlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlacementGroupsRequest,
  output: UpdatePlacementGroupsResponse,
  errors: [],
}));

export interface GetUserRolePermissionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** User role permission ID. */
  id: string;
}

export const GetUserRolePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/userRolePermissions/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetUserRolePermissionsRequest>;

export type GetUserRolePermissionsResponse = UserRolePermission;
export const GetUserRolePermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermission;

export type GetUserRolePermissionsError = DefaultErrors;

/** Gets one user role permission by ID. */
export const getUserRolePermissions: API.OperationMethod<
  GetUserRolePermissionsRequest,
  GetUserRolePermissionsResponse,
  GetUserRolePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserRolePermissionsRequest,
  output: GetUserRolePermissionsResponse,
  errors: [],
}));

export interface ListUserRolePermissionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only user role permissions with these IDs. */
  ids?: string[];
}

export const ListUserRolePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/userRolePermissions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListUserRolePermissionsRequest>;

export type ListUserRolePermissionsResponse = UserRolePermissionsListResponse;
export const ListUserRolePermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermissionsListResponse;

export type ListUserRolePermissionsError = DefaultErrors;

/** Gets a list of user role permissions, possibly filtered. */
export const listUserRolePermissions: API.OperationMethod<
  ListUserRolePermissionsRequest,
  ListUserRolePermissionsResponse,
  ListUserRolePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUserRolePermissionsRequest,
  output: ListUserRolePermissionsResponse,
  errors: [],
}));

export interface UpdateAdsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Ad;
}

export const UpdateAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Ad).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/ads",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateAdsRequest>;

export type UpdateAdsResponse = Ad;
export const UpdateAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type UpdateAdsError = DefaultErrors;

/** Updates an existing ad. */
export const updateAds: API.OperationMethod<
  UpdateAdsRequest,
  UpdateAdsResponse,
  UpdateAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdsRequest,
  output: UpdateAdsResponse,
  errors: [],
}));

export interface GetAdsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Ad ID. */
  id: string;
}

export const GetAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/ads/{id}" }),
  svc,
) as unknown as Schema.Schema<GetAdsRequest>;

export type GetAdsResponse = Ad;
export const GetAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type GetAdsError = DefaultErrors;

/** Gets one ad by ID. */
export const getAds: API.OperationMethod<
  GetAdsRequest,
  GetAdsResponse,
  GetAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdsRequest,
  output: GetAdsResponse,
  errors: [],
}));

export interface InsertAdsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Ad;
}

export const InsertAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Ad).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/ads",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertAdsRequest>;

export type InsertAdsResponse = Ad;
export const InsertAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type InsertAdsError = DefaultErrors;

/** Inserts a new ad. */
export const insertAds: API.OperationMethod<
  InsertAdsRequest,
  InsertAdsResponse,
  InsertAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdsRequest,
  output: InsertAdsResponse,
  errors: [],
}));

export interface PatchAdsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. RemarketingList ID. */
  id: string;
  /** Request body */
  body?: Ad;
}

export const PatchAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(Ad).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/ads",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchAdsRequest>;

export type PatchAdsResponse = Ad;
export const PatchAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type PatchAdsError = DefaultErrors;

/** Updates an existing ad. This method supports patch semantics. */
export const patchAds: API.OperationMethod<
  PatchAdsRequest,
  PatchAdsResponse,
  PatchAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdsRequest,
  output: PatchAdsResponse,
  errors: [],
}));

export interface ListAdsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only ads with this advertiser ID. */
  advertiserId?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only archived ads. */
  archived?: boolean;
  /** Select only ads with these audience segment IDs. */
  audienceSegmentIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only ads with these placement IDs assigned. */
  placementIds?: string[];
  /** Select only ads with these creative IDs assigned. */
  creativeIds?: string[];
  /** Select only ads with these landing page IDs. */
  landingPageIds?: string[];
  /** Select only ads with these creative optimization configuration IDs. */
  creativeOptimizationConfigurationIds?: string[];
  /** Select only ads with these IDs. */
  ids?: string[];
  /** Select only ads whose list targeting expression use these remarketing list IDs. */
  remarketingListIds?: string[];
  /** Select only ads with these campaign IDs. */
  campaignIds?: string[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both. */
  dynamicClickTracker?: boolean;
  /** Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** Select only ads that require SSL. */
  sslRequired?: boolean;
  /** Select only ads with these types. */
  type?:
    | "AD_SERVING_STANDARD_AD"
    | "AD_SERVING_DEFAULT_AD"
    | "AD_SERVING_CLICK_TRACKER"
    | "AD_SERVING_TRACKING"
    | "AD_SERVING_BRAND_SAFE_AD"
    | (string & {})[];
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad". */
  searchString?: string;
  /** Select only ads with these size IDs. */
  sizeIds?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only active ads. */
  active?: boolean;
  /** Select only ads that are SSL-compliant. */
  sslCompliant?: boolean;
  /** Select only ads with this event tag override ID. */
  overriddenEventTagId?: string;
}

export const ListAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  advertiserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("advertiserId"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
  audienceSegmentIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("audienceSegmentIds"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  placementIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("placementIds"),
  ),
  creativeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("creativeIds"),
  ),
  landingPageIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("landingPageIds"),
  ),
  creativeOptimizationConfigurationIds: Schema.optional(
    Schema.Array(Schema.String),
  ).pipe(T.HttpQuery("creativeOptimizationConfigurationIds")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  remarketingListIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("remarketingListIds"),
  ),
  campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("campaignIds"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  dynamicClickTracker: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("dynamicClickTracker"),
  ),
  compatibility: Schema.optional(Schema.String).pipe(
    T.HttpQuery("compatibility"),
  ),
  sslRequired: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("sslRequired")),
  type: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("type")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  sizeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("sizeIds"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
  sslCompliant: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("sslCompliant"),
  ),
  overriddenEventTagId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("overriddenEventTagId"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/ads" }),
  svc,
) as unknown as Schema.Schema<ListAdsRequest>;

export type ListAdsResponse = AdsListResponse;
export const ListAdsResponse = /*@__PURE__*/ /*#__PURE__*/ AdsListResponse;

export type ListAdsError = DefaultErrors;

/** Retrieves a list of ads, possibly filtered. This method supports paging. */
export const listAds: API.PaginatedOperationMethod<
  ListAdsRequest,
  ListAdsResponse,
  ListAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdsRequest,
  output: ListAdsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListTargetingTemplatesRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template". */
  searchString?: string;
  /** Select only targeting templates with this advertiser ID. */
  advertiserId?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only targeting templates with these IDs. */
  ids?: string[];
}

export const ListTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/targetingTemplates",
    }),
    svc,
  ) as unknown as Schema.Schema<ListTargetingTemplatesRequest>;

export type ListTargetingTemplatesResponse = TargetingTemplatesListResponse;
export const ListTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplatesListResponse;

export type ListTargetingTemplatesError = DefaultErrors;

/** Retrieves a list of targeting templates, optionally filtered. This method supports paging. */
export const listTargetingTemplates: API.PaginatedOperationMethod<
  ListTargetingTemplatesRequest,
  ListTargetingTemplatesResponse,
  ListTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTargetingTemplatesRequest,
  output: ListTargetingTemplatesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchTargetingTemplatesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. RemarketingList ID. */
  id: string;
  /** Request body */
  body?: TargetingTemplate;
}

export const PatchTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(TargetingTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/targetingTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchTargetingTemplatesRequest>;

export type PatchTargetingTemplatesResponse = TargetingTemplate;
export const PatchTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type PatchTargetingTemplatesError = DefaultErrors;

/** Updates an existing targeting template. This method supports patch semantics. */
export const patchTargetingTemplates: API.OperationMethod<
  PatchTargetingTemplatesRequest,
  PatchTargetingTemplatesResponse,
  PatchTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTargetingTemplatesRequest,
  output: PatchTargetingTemplatesResponse,
  errors: [],
}));

export interface InsertTargetingTemplatesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: TargetingTemplate;
}

export const InsertTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(TargetingTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/targetingTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertTargetingTemplatesRequest>;

export type InsertTargetingTemplatesResponse = TargetingTemplate;
export const InsertTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type InsertTargetingTemplatesError = DefaultErrors;

/** Inserts a new targeting template. */
export const insertTargetingTemplates: API.OperationMethod<
  InsertTargetingTemplatesRequest,
  InsertTargetingTemplatesResponse,
  InsertTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTargetingTemplatesRequest,
  output: InsertTargetingTemplatesResponse,
  errors: [],
}));

export interface GetTargetingTemplatesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Targeting template ID. */
  id: string;
}

export const GetTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/targetingTemplates/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTargetingTemplatesRequest>;

export type GetTargetingTemplatesResponse = TargetingTemplate;
export const GetTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type GetTargetingTemplatesError = DefaultErrors;

/** Gets one targeting template by ID. */
export const getTargetingTemplates: API.OperationMethod<
  GetTargetingTemplatesRequest,
  GetTargetingTemplatesResponse,
  GetTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTargetingTemplatesRequest,
  output: GetTargetingTemplatesResponse,
  errors: [],
}));

export interface UpdateTargetingTemplatesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: TargetingTemplate;
}

export const UpdateTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(TargetingTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/targetingTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateTargetingTemplatesRequest>;

export type UpdateTargetingTemplatesResponse = TargetingTemplate;
export const UpdateTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type UpdateTargetingTemplatesError = DefaultErrors;

/** Updates an existing targeting template. */
export const updateTargetingTemplates: API.OperationMethod<
  UpdateTargetingTemplatesRequest,
  UpdateTargetingTemplatesResponse,
  UpdateTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTargetingTemplatesRequest,
  output: UpdateTargetingTemplatesResponse,
  errors: [],
}));

export interface InsertCampaignCreativeAssociationsRequest {
  /** Campaign ID in this association. */
  campaignId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CampaignCreativeAssociation;
}

export const InsertCampaignCreativeAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    campaignId: Schema.String.pipe(T.HttpPath("campaignId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CampaignCreativeAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCampaignCreativeAssociationsRequest>;

export type InsertCampaignCreativeAssociationsResponse =
  CampaignCreativeAssociation;
export const InsertCampaignCreativeAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CampaignCreativeAssociation;

export type InsertCampaignCreativeAssociationsError = DefaultErrors;

/** Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already. */
export const insertCampaignCreativeAssociations: API.OperationMethod<
  InsertCampaignCreativeAssociationsRequest,
  InsertCampaignCreativeAssociationsResponse,
  InsertCampaignCreativeAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCampaignCreativeAssociationsRequest,
  output: InsertCampaignCreativeAssociationsResponse,
  errors: [],
}));

export interface ListCampaignCreativeAssociationsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Campaign ID in this association. */
  campaignId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListCampaignCreativeAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    campaignId: Schema.String.pipe(T.HttpPath("campaignId")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListCampaignCreativeAssociationsRequest>;

export type ListCampaignCreativeAssociationsResponse =
  CampaignCreativeAssociationsListResponse;
export const ListCampaignCreativeAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CampaignCreativeAssociationsListResponse;

export type ListCampaignCreativeAssociationsError = DefaultErrors;

/** Retrieves the list of creative IDs associated with the specified campaign. This method supports paging. */
export const listCampaignCreativeAssociations: API.PaginatedOperationMethod<
  ListCampaignCreativeAssociationsRequest,
  ListCampaignCreativeAssociationsResponse,
  ListCampaignCreativeAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCampaignCreativeAssociationsRequest,
  output: ListCampaignCreativeAssociationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAdvertiserGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Advertiser group ID. */
  id: string;
}

export const GetAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/advertiserGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAdvertiserGroupsRequest>;

export type GetAdvertiserGroupsResponse = AdvertiserGroup;
export const GetAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type GetAdvertiserGroupsError = DefaultErrors;

/** Gets one advertiser group by ID. */
export const getAdvertiserGroups: API.OperationMethod<
  GetAdvertiserGroupsRequest,
  GetAdvertiserGroupsResponse,
  GetAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvertiserGroupsRequest,
  output: GetAdvertiserGroupsResponse,
  errors: [],
}));

export interface InsertAdvertiserGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: AdvertiserGroup;
}

export const InsertAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(AdvertiserGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/advertiserGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAdvertiserGroupsRequest>;

export type InsertAdvertiserGroupsResponse = AdvertiserGroup;
export const InsertAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type InsertAdvertiserGroupsError = DefaultErrors;

/** Inserts a new advertiser group. */
export const insertAdvertiserGroups: API.OperationMethod<
  InsertAdvertiserGroupsRequest,
  InsertAdvertiserGroupsResponse,
  InsertAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdvertiserGroupsRequest,
  output: InsertAdvertiserGroupsResponse,
  errors: [],
}));

export interface PatchAdvertiserGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Advertiser Group ID. */
  id: string;
  /** Request body */
  body?: AdvertiserGroup;
}

export const PatchAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(AdvertiserGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/advertiserGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAdvertiserGroupsRequest>;

export type PatchAdvertiserGroupsResponse = AdvertiserGroup;
export const PatchAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type PatchAdvertiserGroupsError = DefaultErrors;

/** Updates an existing advertiser group. This method supports patch semantics. */
export const patchAdvertiserGroups: API.OperationMethod<
  PatchAdvertiserGroupsRequest,
  PatchAdvertiserGroupsResponse,
  PatchAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvertiserGroupsRequest,
  output: PatchAdvertiserGroupsResponse,
  errors: [],
}));

export interface ListAdvertiserGroupsRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only advertiser groups with these IDs. */
  ids?: string[];
}

export const ListAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/advertiserGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAdvertiserGroupsRequest>;

export type ListAdvertiserGroupsResponse = AdvertiserGroupsListResponse;
export const ListAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroupsListResponse;

export type ListAdvertiserGroupsError = DefaultErrors;

/** Retrieves a list of advertiser groups, possibly filtered. This method supports paging. */
export const listAdvertiserGroups: API.PaginatedOperationMethod<
  ListAdvertiserGroupsRequest,
  ListAdvertiserGroupsResponse,
  ListAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertiserGroupsRequest,
  output: ListAdvertiserGroupsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateAdvertiserGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: AdvertiserGroup;
}

export const UpdateAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(AdvertiserGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/advertiserGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAdvertiserGroupsRequest>;

export type UpdateAdvertiserGroupsResponse = AdvertiserGroup;
export const UpdateAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type UpdateAdvertiserGroupsError = DefaultErrors;

/** Updates an existing advertiser group. */
export const updateAdvertiserGroups: API.OperationMethod<
  UpdateAdvertiserGroupsRequest,
  UpdateAdvertiserGroupsResponse,
  UpdateAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdvertiserGroupsRequest,
  output: UpdateAdvertiserGroupsResponse,
  errors: [],
}));

export interface DeleteAdvertiserGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Advertiser group ID. */
  id: string;
}

export const DeleteAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/advertiserGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAdvertiserGroupsRequest>;

export interface DeleteAdvertiserGroupsResponse {}
export const DeleteAdvertiserGroupsResponse: Schema.Schema<DeleteAdvertiserGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAdvertiserGroupsResponse>;

export type DeleteAdvertiserGroupsError = DefaultErrors;

/** Deletes an existing advertiser group. */
export const deleteAdvertiserGroups: API.OperationMethod<
  DeleteAdvertiserGroupsRequest,
  DeleteAdvertiserGroupsResponse,
  DeleteAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvertiserGroupsRequest,
  output: DeleteAdvertiserGroupsResponse,
  errors: [],
}));

export interface BatchinsertConversionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: ConversionsBatchInsertRequest;
}

export const BatchinsertConversionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(ConversionsBatchInsertRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/conversions/batchinsert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchinsertConversionsRequest>;

export type BatchinsertConversionsResponse = ConversionsBatchInsertResponse;
export const BatchinsertConversionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionsBatchInsertResponse;

export type BatchinsertConversionsError = DefaultErrors;

/** Inserts conversions. */
export const batchinsertConversions: API.OperationMethod<
  BatchinsertConversionsRequest,
  BatchinsertConversionsResponse,
  BatchinsertConversionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchinsertConversionsRequest,
  output: BatchinsertConversionsResponse,
  errors: [],
}));

export interface BatchupdateConversionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: ConversionsBatchUpdateRequest;
}

export const BatchupdateConversionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(ConversionsBatchUpdateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/conversions/batchupdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchupdateConversionsRequest>;

export type BatchupdateConversionsResponse = ConversionsBatchUpdateResponse;
export const BatchupdateConversionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionsBatchUpdateResponse;

export type BatchupdateConversionsError = DefaultErrors;

/** Updates existing conversions. */
export const batchupdateConversions: API.OperationMethod<
  BatchupdateConversionsRequest,
  BatchupdateConversionsResponse,
  BatchupdateConversionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchupdateConversionsRequest,
  output: BatchupdateConversionsResponse,
  errors: [],
}));

export interface InsertReportsRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** Request body */
  body?: Report;
}

export const InsertReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Report).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/reports",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertReportsRequest>;

export type InsertReportsResponse = Report;
export const InsertReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Report;

export type InsertReportsError = DefaultErrors;

/** Creates a report. */
export const insertReports: API.OperationMethod<
  InsertReportsRequest,
  InsertReportsResponse,
  InsertReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertReportsRequest,
  output: InsertReportsResponse,
  errors: [],
}));

export interface RunReportsRequest {
  /** The ID of the report. */
  reportId: string;
  /** If set and true, tries to run the report synchronously. */
  synchronous?: boolean;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
}

export const RunReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  synchronous: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("synchronous")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/reports/{reportId}/run",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<RunReportsRequest>;

export type RunReportsResponse = File;
export const RunReportsResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type RunReportsError = DefaultErrors;

/** Runs a report. */
export const runReports: API.OperationMethod<
  RunReportsRequest,
  RunReportsResponse,
  RunReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunReportsRequest,
  output: RunReportsResponse,
  errors: [],
}));

export interface GetReportsRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The ID of the report. */
  reportId: string;
}

export const GetReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{profileId}/reports/{reportId}",
  }),
  svc,
) as unknown as Schema.Schema<GetReportsRequest>;

export type GetReportsResponse = Report;
export const GetReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Report;

export type GetReportsError = DefaultErrors;

/** Retrieves a report by its ID. */
export const getReports: API.OperationMethod<
  GetReportsRequest,
  GetReportsResponse,
  GetReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetReportsRequest,
  output: GetReportsResponse,
  errors: [],
}));

export interface ListReportsRequest {
  /** The scope that defines which results are returned. */
  scope?: "ALL" | "MINE" | (string & {});
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The field by which to sort the list. */
  sortField?: "ID" | "LAST_MODIFIED_TIME" | "NAME" | (string & {});
}

export const ListReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/reports" }),
  svc,
) as unknown as Schema.Schema<ListReportsRequest>;

export type ListReportsResponse = ReportList;
export const ListReportsResponse = /*@__PURE__*/ /*#__PURE__*/ ReportList;

export type ListReportsError = DefaultErrors;

/** Retrieves list of reports. */
export const listReports: API.PaginatedOperationMethod<
  ListReportsRequest,
  ListReportsResponse,
  ListReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReportsRequest,
  output: ListReportsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdateReportsRequest {
  /** The ID of the report. */
  reportId: string;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** Request body */
  body?: Report;
}

export const UpdateReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Report).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/reports/{reportId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateReportsRequest>;

export type UpdateReportsResponse = Report;
export const UpdateReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Report;

export type UpdateReportsError = DefaultErrors;

/** Updates a report. */
export const updateReports: API.OperationMethod<
  UpdateReportsRequest,
  UpdateReportsResponse,
  UpdateReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateReportsRequest,
  output: UpdateReportsResponse,
  errors: [],
}));

export interface DeleteReportsRequest {
  /** The ID of the report. */
  reportId: string;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
}

export const DeleteReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "userprofiles/{profileId}/reports/{reportId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteReportsRequest>;

export interface DeleteReportsResponse {}
export const DeleteReportsResponse: Schema.Schema<DeleteReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteReportsResponse>;

export type DeleteReportsError = DefaultErrors;

/** Deletes a report by its ID. */
export const deleteReports: API.OperationMethod<
  DeleteReportsRequest,
  DeleteReportsResponse,
  DeleteReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteReportsRequest,
  output: DeleteReportsResponse,
  errors: [],
}));

export interface GetReportsFilesRequest {
  /** The ID of the report. */
  reportId: string;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The ID of the report file. */
  fileId: string;
}

export const GetReportsFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    reportId: Schema.String.pipe(T.HttpPath("reportId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    fileId: Schema.String.pipe(T.HttpPath("fileId")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{profileId}/reports/{reportId}/files/{fileId}",
  }),
  svc,
) as unknown as Schema.Schema<GetReportsFilesRequest>;

export type GetReportsFilesResponse = File;
export const GetReportsFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type GetReportsFilesError = DefaultErrors;

/** Retrieves a report file by its report ID and file ID. This method supports media download. */
export const getReportsFiles: API.OperationMethod<
  GetReportsFilesRequest,
  GetReportsFilesResponse,
  GetReportsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetReportsFilesRequest,
  output: GetReportsFilesResponse,
  errors: [],
}));

export interface ListReportsFilesRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The field by which to sort the list. */
  sortField?: "ID" | "LAST_MODIFIED_TIME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The ID of the parent report. */
  reportId: string;
}

export const ListReportsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    reportId: Schema.String.pipe(T.HttpPath("reportId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/reports/{reportId}/files",
    }),
    svc,
  ) as unknown as Schema.Schema<ListReportsFilesRequest>;

export type ListReportsFilesResponse = FileList;
export const ListReportsFilesResponse = /*@__PURE__*/ /*#__PURE__*/ FileList;

export type ListReportsFilesError = DefaultErrors;

/** Lists files for a report. */
export const listReportsFiles: API.PaginatedOperationMethod<
  ListReportsFilesRequest,
  ListReportsFilesResponse,
  ListReportsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReportsFilesRequest,
  output: ListReportsFilesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface QueryReportsCompatibleFieldsRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** Request body */
  body?: Report;
}

export const QueryReportsCompatibleFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Report).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/reports/compatiblefields/query",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryReportsCompatibleFieldsRequest>;

export type QueryReportsCompatibleFieldsResponse = CompatibleFields;
export const QueryReportsCompatibleFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CompatibleFields;

export type QueryReportsCompatibleFieldsError = DefaultErrors;

/** Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions. */
export const queryReportsCompatibleFields: API.OperationMethod<
  QueryReportsCompatibleFieldsRequest,
  QueryReportsCompatibleFieldsResponse,
  QueryReportsCompatibleFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryReportsCompatibleFieldsRequest,
  output: QueryReportsCompatibleFieldsResponse,
  errors: [],
}));

export interface ListCreativeGroupsRequest {
  /** Select only creative groups that belong to this subgroup. */
  groupNumber?: number;
  /** Select only creative groups with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup". */
  searchString?: string;
  /** Select only creative groups that belong to these advertisers. */
  advertiserIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
}

export const ListCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupNumber: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("groupNumber"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/creativeGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListCreativeGroupsRequest>;

export type ListCreativeGroupsResponse = CreativeGroupsListResponse;
export const ListCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroupsListResponse;

export type ListCreativeGroupsError = DefaultErrors;

/** Retrieves a list of creative groups, possibly filtered. This method supports paging. */
export const listCreativeGroups: API.PaginatedOperationMethod<
  ListCreativeGroupsRequest,
  ListCreativeGroupsResponse,
  ListCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativeGroupsRequest,
  output: ListCreativeGroupsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertCreativeGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeGroup;
}

export const InsertCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/creativeGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeGroupsRequest>;

export type InsertCreativeGroupsResponse = CreativeGroup;
export const InsertCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type InsertCreativeGroupsError = DefaultErrors;

/** Inserts a new creative group. */
export const insertCreativeGroups: API.OperationMethod<
  InsertCreativeGroupsRequest,
  InsertCreativeGroupsResponse,
  InsertCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeGroupsRequest,
  output: InsertCreativeGroupsResponse,
  errors: [],
}));

export interface PatchCreativeGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Creative Group ID. */
  id: string;
  /** Request body */
  body?: CreativeGroup;
}

export const PatchCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(CreativeGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/creativeGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCreativeGroupsRequest>;

export type PatchCreativeGroupsResponse = CreativeGroup;
export const PatchCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type PatchCreativeGroupsError = DefaultErrors;

/** Updates an existing creative group. This method supports patch semantics. */
export const patchCreativeGroups: API.OperationMethod<
  PatchCreativeGroupsRequest,
  PatchCreativeGroupsResponse,
  PatchCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativeGroupsRequest,
  output: PatchCreativeGroupsResponse,
  errors: [],
}));

export interface GetCreativeGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative group ID. */
  id: string;
}

export const GetCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/creativeGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCreativeGroupsRequest>;

export type GetCreativeGroupsResponse = CreativeGroup;
export const GetCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type GetCreativeGroupsError = DefaultErrors;

/** Gets one creative group by ID. */
export const getCreativeGroups: API.OperationMethod<
  GetCreativeGroupsRequest,
  GetCreativeGroupsResponse,
  GetCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativeGroupsRequest,
  output: GetCreativeGroupsResponse,
  errors: [],
}));

export interface UpdateCreativeGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeGroup;
}

export const UpdateCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/creativeGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateCreativeGroupsRequest>;

export type UpdateCreativeGroupsResponse = CreativeGroup;
export const UpdateCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type UpdateCreativeGroupsError = DefaultErrors;

/** Updates an existing creative group. */
export const updateCreativeGroups: API.OperationMethod<
  UpdateCreativeGroupsRequest,
  UpdateCreativeGroupsResponse,
  UpdateCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativeGroupsRequest,
  output: UpdateCreativeGroupsResponse,
  errors: [],
}));

export interface DeleteCreativeFieldsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative Field ID */
  id: string;
}

export const DeleteCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/creativeFields/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteCreativeFieldsRequest>;

export interface DeleteCreativeFieldsResponse {}
export const DeleteCreativeFieldsResponse: Schema.Schema<DeleteCreativeFieldsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCreativeFieldsResponse>;

export type DeleteCreativeFieldsError = DefaultErrors;

/** Deletes an existing creative field. */
export const deleteCreativeFields: API.OperationMethod<
  DeleteCreativeFieldsRequest,
  DeleteCreativeFieldsResponse,
  DeleteCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCreativeFieldsRequest,
  output: DeleteCreativeFieldsResponse,
  errors: [],
}));

export interface UpdateCreativeFieldsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeField;
}

export const UpdateCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeField).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/creativeFields",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateCreativeFieldsRequest>;

export type UpdateCreativeFieldsResponse = CreativeField;
export const UpdateCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type UpdateCreativeFieldsError = DefaultErrors;

/** Updates an existing creative field. */
export const updateCreativeFields: API.OperationMethod<
  UpdateCreativeFieldsRequest,
  UpdateCreativeFieldsResponse,
  UpdateCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativeFieldsRequest,
  output: UpdateCreativeFieldsResponse,
  errors: [],
}));

export interface ListCreativeFieldsRequest {
  /** Select only creative fields that belong to these advertisers. */
  advertiserIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only creative fields with these IDs. */
  ids?: string[];
  /** Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
}

export const ListCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/creativeFields" }),
    svc,
  ) as unknown as Schema.Schema<ListCreativeFieldsRequest>;

export type ListCreativeFieldsResponse = CreativeFieldsListResponse;
export const ListCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldsListResponse;

export type ListCreativeFieldsError = DefaultErrors;

/** Retrieves a list of creative fields, possibly filtered. This method supports paging. */
export const listCreativeFields: API.PaginatedOperationMethod<
  ListCreativeFieldsRequest,
  ListCreativeFieldsResponse,
  ListCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativeFieldsRequest,
  output: ListCreativeFieldsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCreativeFieldsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative Field ID */
  id: string;
}

export const GetCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/creativeFields/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCreativeFieldsRequest>;

export type GetCreativeFieldsResponse = CreativeField;
export const GetCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type GetCreativeFieldsError = DefaultErrors;

/** Gets one creative field by ID. */
export const getCreativeFields: API.OperationMethod<
  GetCreativeFieldsRequest,
  GetCreativeFieldsResponse,
  GetCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativeFieldsRequest,
  output: GetCreativeFieldsResponse,
  errors: [],
}));

export interface InsertCreativeFieldsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeField;
}

export const InsertCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeField).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/creativeFields",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeFieldsRequest>;

export type InsertCreativeFieldsResponse = CreativeField;
export const InsertCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type InsertCreativeFieldsError = DefaultErrors;

/** Inserts a new creative field. */
export const insertCreativeFields: API.OperationMethod<
  InsertCreativeFieldsRequest,
  InsertCreativeFieldsResponse,
  InsertCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeFieldsRequest,
  output: InsertCreativeFieldsResponse,
  errors: [],
}));

export interface PatchCreativeFieldsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** CreativeField ID. */
  id: string;
  /** Request body */
  body?: CreativeField;
}

export const PatchCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(CreativeField).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/creativeFields",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCreativeFieldsRequest>;

export type PatchCreativeFieldsResponse = CreativeField;
export const PatchCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type PatchCreativeFieldsError = DefaultErrors;

/** Updates an existing creative field. This method supports patch semantics. */
export const patchCreativeFields: API.OperationMethod<
  PatchCreativeFieldsRequest,
  PatchCreativeFieldsResponse,
  PatchCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativeFieldsRequest,
  output: PatchCreativeFieldsResponse,
  errors: [],
}));

export interface GetUserRolePermissionGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** User role permission group ID. */
  id: string;
}

export const GetUserRolePermissionGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/userRolePermissionGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetUserRolePermissionGroupsRequest>;

export type GetUserRolePermissionGroupsResponse = UserRolePermissionGroup;
export const GetUserRolePermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermissionGroup;

export type GetUserRolePermissionGroupsError = DefaultErrors;

/** Gets one user role permission group by ID. */
export const getUserRolePermissionGroups: API.OperationMethod<
  GetUserRolePermissionGroupsRequest,
  GetUserRolePermissionGroupsResponse,
  GetUserRolePermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserRolePermissionGroupsRequest,
  output: GetUserRolePermissionGroupsResponse,
  errors: [],
}));

export interface ListUserRolePermissionGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListUserRolePermissionGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/userRolePermissionGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListUserRolePermissionGroupsRequest>;

export type ListUserRolePermissionGroupsResponse =
  UserRolePermissionGroupsListResponse;
export const ListUserRolePermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermissionGroupsListResponse;

export type ListUserRolePermissionGroupsError = DefaultErrors;

/** Gets a list of all supported user role permission groups. */
export const listUserRolePermissionGroups: API.OperationMethod<
  ListUserRolePermissionGroupsRequest,
  ListUserRolePermissionGroupsResponse,
  ListUserRolePermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUserRolePermissionGroupsRequest,
  output: ListUserRolePermissionGroupsResponse,
  errors: [],
}));

export interface UpdateAccountUserProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: AccountUserProfile;
}

export const UpdateAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(AccountUserProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/accountUserProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountUserProfilesRequest>;

export type UpdateAccountUserProfilesResponse = AccountUserProfile;
export const UpdateAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type UpdateAccountUserProfilesError = DefaultErrors;

/** Updates an existing account user profile. */
export const updateAccountUserProfiles: API.OperationMethod<
  UpdateAccountUserProfilesRequest,
  UpdateAccountUserProfilesResponse,
  UpdateAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountUserProfilesRequest,
  output: UpdateAccountUserProfilesResponse,
  errors: [],
}));

export interface ListAccountUserProfilesRequest {
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only user profiles with these IDs. */
  ids?: string[];
  /** Select only user profiles with the specified user role ID. */
  userRoleId?: string;
  /** Select only user profiles with the specified subaccount ID. */
  subaccountId?: string;
  /** Select only active user profiles. */
  active?: boolean;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile". */
  searchString?: string;
}

export const ListAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    userRoleId: Schema.optional(Schema.String).pipe(T.HttpQuery("userRoleId")),
    subaccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subaccountId"),
    ),
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountUserProfiles",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountUserProfilesRequest>;

export type ListAccountUserProfilesResponse = AccountUserProfilesListResponse;
export const ListAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfilesListResponse;

export type ListAccountUserProfilesError = DefaultErrors;

/** Retrieves a list of account user profiles, possibly filtered. This method supports paging. */
export const listAccountUserProfiles: API.PaginatedOperationMethod<
  ListAccountUserProfilesRequest,
  ListAccountUserProfilesResponse,
  ListAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountUserProfilesRequest,
  output: ListAccountUserProfilesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountUserProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** User profile ID. */
  id: string;
}

export const GetAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountUserProfiles/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountUserProfilesRequest>;

export type GetAccountUserProfilesResponse = AccountUserProfile;
export const GetAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type GetAccountUserProfilesError = DefaultErrors;

/** Gets one account user profile by ID. */
export const getAccountUserProfiles: API.OperationMethod<
  GetAccountUserProfilesRequest,
  GetAccountUserProfilesResponse,
  GetAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountUserProfilesRequest,
  output: GetAccountUserProfilesResponse,
  errors: [],
}));

export interface InsertAccountUserProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: AccountUserProfile;
}

export const InsertAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(AccountUserProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/accountUserProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAccountUserProfilesRequest>;

export type InsertAccountUserProfilesResponse = AccountUserProfile;
export const InsertAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type InsertAccountUserProfilesError = DefaultErrors;

/** Inserts a new account user profile. */
export const insertAccountUserProfiles: API.OperationMethod<
  InsertAccountUserProfilesRequest,
  InsertAccountUserProfilesResponse,
  InsertAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAccountUserProfilesRequest,
  output: InsertAccountUserProfilesResponse,
  errors: [],
}));

export interface PatchAccountUserProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. AccountUserProfile ID. */
  id: string;
  /** Request body */
  body?: AccountUserProfile;
}

export const PatchAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(AccountUserProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/accountUserProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountUserProfilesRequest>;

export type PatchAccountUserProfilesResponse = AccountUserProfile;
export const PatchAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type PatchAccountUserProfilesError = DefaultErrors;

/** Updates an existing account user profile. This method supports patch semantics. */
export const patchAccountUserProfiles: API.OperationMethod<
  PatchAccountUserProfilesRequest,
  PatchAccountUserProfilesResponse,
  PatchAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountUserProfilesRequest,
  output: PatchAccountUserProfilesResponse,
  errors: [],
}));

export interface UpdateRemarketingListsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: RemarketingList;
}

export const UpdateRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(RemarketingList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/remarketingLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateRemarketingListsRequest>;

export type UpdateRemarketingListsResponse = RemarketingList;
export const UpdateRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type UpdateRemarketingListsError = DefaultErrors;

/** Updates an existing remarketing list. */
export const updateRemarketingLists: API.OperationMethod<
  UpdateRemarketingListsRequest,
  UpdateRemarketingListsResponse,
  UpdateRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRemarketingListsRequest,
  output: UpdateRemarketingListsResponse,
  errors: [],
}));

export interface ListRemarketingListsRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list". */
  name?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Required. Select only remarketing lists owned by this advertiser. */
  advertiserId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only remarketing lists that have this floodlight activity ID. */
  floodlightActivityId?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only active or only inactive remarketing lists. */
  active?: boolean;
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    advertiserId: Schema.String.pipe(T.HttpQuery("advertiserId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    floodlightActivityId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityId"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/remarketingLists",
    }),
    svc,
  ) as unknown as Schema.Schema<ListRemarketingListsRequest>;

export type ListRemarketingListsResponse = RemarketingListsListResponse;
export const ListRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListsListResponse;

export type ListRemarketingListsError = DefaultErrors;

/** Retrieves a list of remarketing lists, possibly filtered. This method supports paging. */
export const listRemarketingLists: API.PaginatedOperationMethod<
  ListRemarketingListsRequest,
  ListRemarketingListsResponse,
  ListRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRemarketingListsRequest,
  output: ListRemarketingListsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchRemarketingListsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. RemarketingList ID. */
  id: string;
  /** Request body */
  body?: RemarketingList;
}

export const PatchRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(RemarketingList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/remarketingLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchRemarketingListsRequest>;

export type PatchRemarketingListsResponse = RemarketingList;
export const PatchRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type PatchRemarketingListsError = DefaultErrors;

/** Updates an existing remarketing list. This method supports patch semantics. */
export const patchRemarketingLists: API.OperationMethod<
  PatchRemarketingListsRequest,
  PatchRemarketingListsResponse,
  PatchRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRemarketingListsRequest,
  output: PatchRemarketingListsResponse,
  errors: [],
}));

export interface InsertRemarketingListsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: RemarketingList;
}

export const InsertRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(RemarketingList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/remarketingLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertRemarketingListsRequest>;

export type InsertRemarketingListsResponse = RemarketingList;
export const InsertRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type InsertRemarketingListsError = DefaultErrors;

/** Inserts a new remarketing list. */
export const insertRemarketingLists: API.OperationMethod<
  InsertRemarketingListsRequest,
  InsertRemarketingListsResponse,
  InsertRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertRemarketingListsRequest,
  output: InsertRemarketingListsResponse,
  errors: [],
}));

export interface GetRemarketingListsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Remarketing list ID. */
  id: string;
}

export const GetRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/remarketingLists/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetRemarketingListsRequest>;

export type GetRemarketingListsResponse = RemarketingList;
export const GetRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type GetRemarketingListsError = DefaultErrors;

/** Gets one remarketing list by ID. */
export const getRemarketingLists: API.OperationMethod<
  GetRemarketingListsRequest,
  GetRemarketingListsResponse,
  GetRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRemarketingListsRequest,
  output: GetRemarketingListsResponse,
  errors: [],
}));

export interface ListCreativesRequest {
  /** Select only in-stream video creatives with these companion IDs. */
  companionCreativeIds?: string[];
  /** Select only creatives with this advertiser ID. */
  advertiserId?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only creatives with these creative field IDs. */
  creativeFieldIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only archived creatives. Leave blank to select archived and unarchived creatives. */
  archived?: boolean;
  /** Select only creatives with these IDs. */
  ids?: string[];
  /** Select only creatives corresponding to this Studio creative ID. */
  studioCreativeId?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative". */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only creatives with these size IDs. */
  sizeIds?: string[];
  /** Select only creatives with these creative types. */
  types?:
    | "IMAGE"
    | "DISPLAY_REDIRECT"
    | "CUSTOM_DISPLAY"
    | "INTERNAL_REDIRECT"
    | "CUSTOM_DISPLAY_INTERSTITIAL"
    | "INTERSTITIAL_INTERNAL_REDIRECT"
    | "TRACKING_TEXT"
    | "RICH_MEDIA_DISPLAY_BANNER"
    | "RICH_MEDIA_INPAGE_FLOATING"
    | "RICH_MEDIA_IM_EXPAND"
    | "RICH_MEDIA_DISPLAY_EXPANDING"
    | "RICH_MEDIA_DISPLAY_INTERSTITIAL"
    | "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
    | "RICH_MEDIA_MOBILE_IN_APP"
    | "FLASH_INPAGE"
    | "INSTREAM_VIDEO"
    | "VPAID_LINEAR_VIDEO"
    | "VPAID_NON_LINEAR_VIDEO"
    | "INSTREAM_VIDEO_REDIRECT"
    | "RICH_MEDIA_PEEL_DOWN"
    | "HTML5_BANNER"
    | "DISPLAY"
    | "DISPLAY_IMAGE_GALLERY"
    | "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
    | "INSTREAM_AUDIO"
    | (string & {})[];
  /** Select only creatives with this campaign ID. */
  campaignId?: string;
  /** Select only active creatives. Leave blank to select active and inactive creatives. */
  active?: boolean;
  /** Select only creatives with these rendering IDs. */
  renderingIds?: string[];
}

export const ListCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  companionCreativeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("companionCreativeIds"),
  ),
  advertiserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("advertiserId"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  creativeFieldIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("creativeFieldIds"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  studioCreativeId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("studioCreativeId"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  sizeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("sizeIds"),
  ),
  types: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("types"),
  ),
  campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
  active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
  renderingIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("renderingIds"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/creatives" }),
  svc,
) as unknown as Schema.Schema<ListCreativesRequest>;

export type ListCreativesResponse = CreativesListResponse;
export const ListCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativesListResponse;

export type ListCreativesError = DefaultErrors;

/** Retrieves a list of creatives, possibly filtered. This method supports paging. */
export const listCreatives: API.PaginatedOperationMethod<
  ListCreativesRequest,
  ListCreativesResponse,
  ListCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativesRequest,
  output: ListCreativesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCreativesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Creative ID. */
  id: string;
}

export const GetCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/creatives/{id}" }),
  svc,
) as unknown as Schema.Schema<GetCreativesRequest>;

export type GetCreativesResponse = Creative;
export const GetCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type GetCreativesError = DefaultErrors;

/** Gets one creative by ID. */
export const getCreatives: API.OperationMethod<
  GetCreativesRequest,
  GetCreativesResponse,
  GetCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativesRequest,
  output: GetCreativesResponse,
  errors: [],
}));

export interface InsertCreativesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Creative;
}

export const InsertCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Creative).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/creatives",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertCreativesRequest>;

export type InsertCreativesResponse = Creative;
export const InsertCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type InsertCreativesError = DefaultErrors;

/** Inserts a new creative. */
export const insertCreatives: API.OperationMethod<
  InsertCreativesRequest,
  InsertCreativesResponse,
  InsertCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativesRequest,
  output: InsertCreativesResponse,
  errors: [],
}));

export interface PatchCreativesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Creative ID. */
  id: string;
  /** Request body */
  body?: Creative;
}

export const PatchCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(Creative).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/creatives",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchCreativesRequest>;

export type PatchCreativesResponse = Creative;
export const PatchCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type PatchCreativesError = DefaultErrors;

/** Updates an existing creative. This method supports patch semantics. */
export const patchCreatives: API.OperationMethod<
  PatchCreativesRequest,
  PatchCreativesResponse,
  PatchCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativesRequest,
  output: PatchCreativesResponse,
  errors: [],
}));

export interface UpdateCreativesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Creative;
}

export const UpdateCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Creative).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/creatives",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateCreativesRequest>;

export type UpdateCreativesResponse = Creative;
export const UpdateCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type UpdateCreativesError = DefaultErrors;

/** Updates an existing creative. */
export const updateCreatives: API.OperationMethod<
  UpdateCreativesRequest,
  UpdateCreativesResponse,
  UpdateCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativesRequest,
  output: UpdateCreativesResponse,
  errors: [],
}));

export interface GetPostalCodesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Postal code ID. */
  code: string;
}

export const GetPostalCodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  code: Schema.String.pipe(T.HttpPath("code")),
}).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{profileId}/postalCodes/{code}",
  }),
  svc,
) as unknown as Schema.Schema<GetPostalCodesRequest>;

export type GetPostalCodesResponse = PostalCode;
export const GetPostalCodesResponse = /*@__PURE__*/ /*#__PURE__*/ PostalCode;

export type GetPostalCodesError = DefaultErrors;

/** Gets one postal code by ID. */
export const getPostalCodes: API.OperationMethod<
  GetPostalCodesRequest,
  GetPostalCodesResponse,
  GetPostalCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPostalCodesRequest,
  output: GetPostalCodesResponse,
  errors: [],
}));

export interface ListPostalCodesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListPostalCodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/postalCodes" }),
  svc,
) as unknown as Schema.Schema<ListPostalCodesRequest>;

export type ListPostalCodesResponse = PostalCodesListResponse;
export const ListPostalCodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PostalCodesListResponse;

export type ListPostalCodesError = DefaultErrors;

/** Retrieves a list of postal codes. */
export const listPostalCodes: API.OperationMethod<
  ListPostalCodesRequest,
  ListPostalCodesResponse,
  ListPostalCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPostalCodesRequest,
  output: ListPostalCodesResponse,
  errors: [],
}));

export interface ListFloodlightActivitiesRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity". */
  searchString?: string;
  /** Select only floodlight activities with the specified floodlight activity group tag string. */
  floodlightActivityGroupTagString?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only floodlight activities with the specified floodlight activity group type. */
  floodlightActivityGroupType?: "COUNTER" | "SALE" | (string & {});
  /** Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. */
  ids?: string[];
  /** Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. */
  floodlightConfigurationId?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only floodlight activities with the specified floodlight activity group name. */
  floodlightActivityGroupName?: string;
  /** Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. */
  advertiserId?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only floodlight activities with the specified floodlight activity group IDs. */
  floodlightActivityGroupIds?: string[];
  /** Select only floodlight activities with the specified tag string. */
  tagString?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    floodlightActivityGroupTagString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityGroupTagString"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    floodlightActivityGroupType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityGroupType"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    floodlightConfigurationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightConfigurationId"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    floodlightActivityGroupName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityGroupName"),
    ),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    floodlightActivityGroupIds: Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("floodlightActivityGroupIds")),
    tagString: Schema.optional(Schema.String).pipe(T.HttpQuery("tagString")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/floodlightActivities",
    }),
    svc,
  ) as unknown as Schema.Schema<ListFloodlightActivitiesRequest>;

export type ListFloodlightActivitiesResponse = FloodlightActivitiesListResponse;
export const ListFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivitiesListResponse;

export type ListFloodlightActivitiesError = DefaultErrors;

/** Retrieves a list of floodlight activities, possibly filtered. This method supports paging. */
export const listFloodlightActivities: API.PaginatedOperationMethod<
  ListFloodlightActivitiesRequest,
  ListFloodlightActivitiesResponse,
  ListFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFloodlightActivitiesRequest,
  output: ListFloodlightActivitiesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertFloodlightActivitiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightActivity;
}

export const InsertFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightActivity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/floodlightActivities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFloodlightActivitiesRequest>;

export type InsertFloodlightActivitiesResponse = FloodlightActivity;
export const InsertFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type InsertFloodlightActivitiesError = DefaultErrors;

/** Inserts a new floodlight activity. */
export const insertFloodlightActivities: API.OperationMethod<
  InsertFloodlightActivitiesRequest,
  InsertFloodlightActivitiesResponse,
  InsertFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFloodlightActivitiesRequest,
  output: InsertFloodlightActivitiesResponse,
  errors: [],
}));

export interface PatchFloodlightActivitiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. EventTag ID. */
  id: string;
  /** Request body */
  body?: FloodlightActivity;
}

export const PatchFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(FloodlightActivity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/floodlightActivities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFloodlightActivitiesRequest>;

export type PatchFloodlightActivitiesResponse = FloodlightActivity;
export const PatchFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type PatchFloodlightActivitiesError = DefaultErrors;

/** Updates an existing floodlight activity. This method supports patch semantics. */
export const patchFloodlightActivities: API.OperationMethod<
  PatchFloodlightActivitiesRequest,
  PatchFloodlightActivitiesResponse,
  PatchFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFloodlightActivitiesRequest,
  output: PatchFloodlightActivitiesResponse,
  errors: [],
}));

export interface GetFloodlightActivitiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Floodlight activity ID. */
  id: string;
}

export const GetFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/floodlightActivities/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFloodlightActivitiesRequest>;

export type GetFloodlightActivitiesResponse = FloodlightActivity;
export const GetFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type GetFloodlightActivitiesError = DefaultErrors;

/** Gets one floodlight activity by ID. */
export const getFloodlightActivities: API.OperationMethod<
  GetFloodlightActivitiesRequest,
  GetFloodlightActivitiesResponse,
  GetFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFloodlightActivitiesRequest,
  output: GetFloodlightActivitiesResponse,
  errors: [],
}));

export interface DeleteFloodlightActivitiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Floodlight activity ID. */
  id: string;
}

export const DeleteFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{profileId}/floodlightActivities/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteFloodlightActivitiesRequest>;

export interface DeleteFloodlightActivitiesResponse {}
export const DeleteFloodlightActivitiesResponse: Schema.Schema<DeleteFloodlightActivitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteFloodlightActivitiesResponse>;

export type DeleteFloodlightActivitiesError = DefaultErrors;

/** Deletes an existing floodlight activity. */
export const deleteFloodlightActivities: API.OperationMethod<
  DeleteFloodlightActivitiesRequest,
  DeleteFloodlightActivitiesResponse,
  DeleteFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFloodlightActivitiesRequest,
  output: DeleteFloodlightActivitiesResponse,
  errors: [],
}));

export interface UpdateFloodlightActivitiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightActivity;
}

export const UpdateFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightActivity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/floodlightActivities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFloodlightActivitiesRequest>;

export type UpdateFloodlightActivitiesResponse = FloodlightActivity;
export const UpdateFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type UpdateFloodlightActivitiesError = DefaultErrors;

/** Updates an existing floodlight activity. */
export const updateFloodlightActivities: API.OperationMethod<
  UpdateFloodlightActivitiesRequest,
  UpdateFloodlightActivitiesResponse,
  UpdateFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFloodlightActivitiesRequest,
  output: UpdateFloodlightActivitiesResponse,
  errors: [],
}));

export interface GeneratetagFloodlightActivitiesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Floodlight activity ID for which we want to generate a tag. */
  floodlightActivityId?: string;
}

export const GeneratetagFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    floodlightActivityId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityId"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/floodlightActivities/generatetag",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratetagFloodlightActivitiesRequest>;

export type GeneratetagFloodlightActivitiesResponse =
  FloodlightActivitiesGenerateTagResponse;
export const GeneratetagFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivitiesGenerateTagResponse;

export type GeneratetagFloodlightActivitiesError = DefaultErrors;

/** Generates a tag for a floodlight activity. */
export const generatetagFloodlightActivities: API.OperationMethod<
  GeneratetagFloodlightActivitiesRequest,
  GeneratetagFloodlightActivitiesResponse,
  GeneratetagFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratetagFloodlightActivitiesRequest,
  output: GeneratetagFloodlightActivitiesResponse,
  errors: [],
}));

export interface GetOperatingSystemVersionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Operating system version ID. */
  id: string;
}

export const GetOperatingSystemVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/operatingSystemVersions/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetOperatingSystemVersionsRequest>;

export type GetOperatingSystemVersionsResponse = OperatingSystemVersion;
export const GetOperatingSystemVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystemVersion;

export type GetOperatingSystemVersionsError = DefaultErrors;

/** Gets one operating system version by ID. */
export const getOperatingSystemVersions: API.OperationMethod<
  GetOperatingSystemVersionsRequest,
  GetOperatingSystemVersionsResponse,
  GetOperatingSystemVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperatingSystemVersionsRequest,
  output: GetOperatingSystemVersionsResponse,
  errors: [],
}));

export interface ListOperatingSystemVersionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListOperatingSystemVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/operatingSystemVersions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListOperatingSystemVersionsRequest>;

export type ListOperatingSystemVersionsResponse =
  OperatingSystemVersionsListResponse;
export const ListOperatingSystemVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystemVersionsListResponse;

export type ListOperatingSystemVersionsError = DefaultErrors;

/** Retrieves a list of operating system versions. */
export const listOperatingSystemVersions: API.OperationMethod<
  ListOperatingSystemVersionsRequest,
  ListOperatingSystemVersionsResponse,
  ListOperatingSystemVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOperatingSystemVersionsRequest,
  output: ListOperatingSystemVersionsResponse,
  errors: [],
}));

export interface InsertEventTagsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: EventTag;
}

export const InsertEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(EventTag).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/eventTags",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertEventTagsRequest>;

export type InsertEventTagsResponse = EventTag;
export const InsertEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type InsertEventTagsError = DefaultErrors;

/** Inserts a new event tag. */
export const insertEventTags: API.OperationMethod<
  InsertEventTagsRequest,
  InsertEventTagsResponse,
  InsertEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertEventTagsRequest,
  output: InsertEventTagsResponse,
  errors: [],
}));

export interface PatchEventTagsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. EventTag ID. */
  id: string;
  /** Request body */
  body?: EventTag;
}

export const PatchEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(EventTag).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/eventTags",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchEventTagsRequest>;

export type PatchEventTagsResponse = EventTag;
export const PatchEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type PatchEventTagsError = DefaultErrors;

/** Updates an existing event tag. This method supports patch semantics. */
export const patchEventTags: API.OperationMethod<
  PatchEventTagsRequest,
  PatchEventTagsResponse,
  PatchEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEventTagsRequest,
  output: PatchEventTagsResponse,
  errors: [],
}));

export interface GetEventTagsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Event tag ID. */
  id: string;
}

export const GetEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/eventTags/{id}" }),
  svc,
) as unknown as Schema.Schema<GetEventTagsRequest>;

export type GetEventTagsResponse = EventTag;
export const GetEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type GetEventTagsError = DefaultErrors;

/** Gets one event tag by ID. */
export const getEventTags: API.OperationMethod<
  GetEventTagsRequest,
  GetEventTagsResponse,
  GetEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventTagsRequest,
  output: GetEventTagsResponse,
  errors: [],
}));

export interface ListEventTagsRequest {
  /** Select only event tags that belong to this campaign. */
  campaignId?: string;
  /** Select only event tags that belong to this ad. */
  adId?: string;
  /** Select only event tags with these IDs. */
  ids?: string[];
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag". */
  searchString?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only event tags that belong to this advertiser. */
  advertiserId?: string;
  /** Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well. */
  enabled?: boolean;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags. */
  definitionsOnly?: boolean;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. */
  eventTagTypes?:
    | "IMPRESSION_IMAGE_EVENT_TAG"
    | "IMPRESSION_JAVASCRIPT_EVENT_TAG"
    | "CLICK_THROUGH_EVENT_TAG"
    | (string & {})[];
}

export const ListEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
  adId: Schema.optional(Schema.String).pipe(T.HttpQuery("adId")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  advertiserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("advertiserId"),
  ),
  enabled: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("enabled")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  definitionsOnly: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("definitionsOnly"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  eventTagTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("eventTagTypes"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/eventTags" }),
  svc,
) as unknown as Schema.Schema<ListEventTagsRequest>;

export type ListEventTagsResponse = EventTagsListResponse;
export const ListEventTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTagsListResponse;

export type ListEventTagsError = DefaultErrors;

/** Retrieves a list of event tags, possibly filtered. */
export const listEventTags: API.OperationMethod<
  ListEventTagsRequest,
  ListEventTagsResponse,
  ListEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEventTagsRequest,
  output: ListEventTagsResponse,
  errors: [],
}));

export interface UpdateEventTagsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: EventTag;
}

export const UpdateEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(EventTag).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/eventTags",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateEventTagsRequest>;

export type UpdateEventTagsResponse = EventTag;
export const UpdateEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type UpdateEventTagsError = DefaultErrors;

/** Updates an existing event tag. */
export const updateEventTags: API.OperationMethod<
  UpdateEventTagsRequest,
  UpdateEventTagsResponse,
  UpdateEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventTagsRequest,
  output: UpdateEventTagsResponse,
  errors: [],
}));

export interface DeleteEventTagsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Event tag ID. */
  id: string;
}

export const DeleteEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  },
).pipe(
  T.Http({ method: "DELETE", path: "userprofiles/{profileId}/eventTags/{id}" }),
  svc,
) as unknown as Schema.Schema<DeleteEventTagsRequest>;

export interface DeleteEventTagsResponse {}
export const DeleteEventTagsResponse: Schema.Schema<DeleteEventTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteEventTagsResponse>;

export type DeleteEventTagsError = DefaultErrors;

/** Deletes an existing event tag. */
export const deleteEventTags: API.OperationMethod<
  DeleteEventTagsRequest,
  DeleteEventTagsResponse,
  DeleteEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEventTagsRequest,
  output: DeleteEventTagsResponse,
  errors: [],
}));

export interface GetAccountPermissionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Account permission ID. */
  id: string;
}

export const GetAccountPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountPermissions/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountPermissionsRequest>;

export type GetAccountPermissionsResponse = AccountPermission;
export const GetAccountPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermission;

export type GetAccountPermissionsError = DefaultErrors;

/** Gets one account permission by ID. */
export const getAccountPermissions: API.OperationMethod<
  GetAccountPermissionsRequest,
  GetAccountPermissionsResponse,
  GetAccountPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountPermissionsRequest,
  output: GetAccountPermissionsResponse,
  errors: [],
}));

export interface ListAccountPermissionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListAccountPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountPermissions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountPermissionsRequest>;

export type ListAccountPermissionsResponse = AccountPermissionsListResponse;
export const ListAccountPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermissionsListResponse;

export type ListAccountPermissionsError = DefaultErrors;

/** Retrieves the list of account permissions. */
export const listAccountPermissions: API.OperationMethod<
  ListAccountPermissionsRequest,
  ListAccountPermissionsResponse,
  ListAccountPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountPermissionsRequest,
  output: ListAccountPermissionsResponse,
  errors: [],
}));

export interface GetCountriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Country DART ID. */
  dartId: string;
}

export const GetCountriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  dartId: Schema.String.pipe(T.HttpPath("dartId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{profileId}/countries/{dartId}",
  }),
  svc,
) as unknown as Schema.Schema<GetCountriesRequest>;

export type GetCountriesResponse = Country;
export const GetCountriesResponse = /*@__PURE__*/ /*#__PURE__*/ Country;

export type GetCountriesError = DefaultErrors;

/** Gets one country by ID. */
export const getCountries: API.OperationMethod<
  GetCountriesRequest,
  GetCountriesResponse,
  GetCountriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCountriesRequest,
  output: GetCountriesResponse,
  errors: [],
}));

export interface ListCountriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListCountriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/countries" }),
  svc,
) as unknown as Schema.Schema<ListCountriesRequest>;

export type ListCountriesResponse = CountriesListResponse;
export const ListCountriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CountriesListResponse;

export type ListCountriesError = DefaultErrors;

/** Retrieves a list of countries. */
export const listCountries: API.OperationMethod<
  ListCountriesRequest,
  ListCountriesResponse,
  ListCountriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCountriesRequest,
  output: ListCountriesResponse,
  errors: [],
}));

export interface ListSitesRequest {
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only sites that accept publisher paid placements. */
  acceptsPublisherPaidPlacements?: boolean;
  /** Select only approved sites. */
  approved?: boolean;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only AdWords sites. */
  adWordsSite?: boolean;
  /** Select only sites that have not been mapped to a directory site. */
  unmappedSite?: boolean;
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInterstitialPlacements?: boolean;
  /** Select only sites with these campaign IDs. */
  campaignIds?: string[];
  /** Select only sites with these IDs. */
  ids?: string[];
  /** Select only sites with this subaccount ID. */
  subaccountId?: string;
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInStreamVideoPlacements?: boolean;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site". */
  searchString?: string;
  /** Select only sites with these directory site IDs. */
  directorySiteIds?: string[];
}

export const ListSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  acceptsPublisherPaidPlacements: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acceptsPublisherPaidPlacements"),
  ),
  approved: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("approved")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  adWordsSite: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("adWordsSite")),
  unmappedSite: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("unmappedSite"),
  ),
  acceptsInterstitialPlacements: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acceptsInterstitialPlacements"),
  ),
  campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("campaignIds"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  subaccountId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("subaccountId"),
  ),
  acceptsInStreamVideoPlacements: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acceptsInStreamVideoPlacements"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  directorySiteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("directorySiteIds"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/sites" }),
  svc,
) as unknown as Schema.Schema<ListSitesRequest>;

export type ListSitesResponse = SitesListResponse;
export const ListSitesResponse = /*@__PURE__*/ /*#__PURE__*/ SitesListResponse;

export type ListSitesError = DefaultErrors;

/** Retrieves a list of sites, possibly filtered. This method supports paging. */
export const listSites: API.PaginatedOperationMethod<
  ListSitesRequest,
  ListSitesResponse,
  ListSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSitesRequest,
  output: ListSitesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchSitesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Site ID. */
  id: string;
  /** Request body */
  body?: Site;
}

export const PatchSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(Site).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/sites",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchSitesRequest>;

export type PatchSitesResponse = Site;
export const PatchSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type PatchSitesError = DefaultErrors;

/** Updates an existing site. This method supports patch semantics. */
export const patchSites: API.OperationMethod<
  PatchSitesRequest,
  PatchSitesResponse,
  PatchSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSitesRequest,
  output: PatchSitesResponse,
  errors: [],
}));

export interface InsertSitesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Site;
}

export const InsertSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Site).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/sites",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertSitesRequest>;

export type InsertSitesResponse = Site;
export const InsertSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type InsertSitesError = DefaultErrors;

/** Inserts a new site. */
export const insertSites: API.OperationMethod<
  InsertSitesRequest,
  InsertSitesResponse,
  InsertSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSitesRequest,
  output: InsertSitesResponse,
  errors: [],
}));

export interface GetSitesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Site ID. */
  id: string;
}

export const GetSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/sites/{id}" }),
  svc,
) as unknown as Schema.Schema<GetSitesRequest>;

export type GetSitesResponse = Site;
export const GetSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type GetSitesError = DefaultErrors;

/** Gets one site by ID. */
export const getSites: API.OperationMethod<
  GetSitesRequest,
  GetSitesResponse,
  GetSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSitesRequest,
  output: GetSitesResponse,
  errors: [],
}));

export interface UpdateSitesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Site;
}

export const UpdateSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Site).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/sites",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateSitesRequest>;

export type UpdateSitesResponse = Site;
export const UpdateSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type UpdateSitesError = DefaultErrors;

/** Updates an existing site. */
export const updateSites: API.OperationMethod<
  UpdateSitesRequest,
  UpdateSitesResponse,
  UpdateSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSitesRequest,
  output: UpdateSitesResponse,
  errors: [],
}));

export interface InsertCreativeAssetsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Advertiser ID of this creative. This is a required field. */
  advertiserId: string;
  /** Request body */
  body?: CreativeAssetMetadata;
}

export const InsertCreativeAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    advertiserId: Schema.String.pipe(T.HttpPath("advertiserId")),
    body: Schema.optional(CreativeAssetMetadata).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeAssetsRequest>;

export type InsertCreativeAssetsResponse = CreativeAssetMetadata;
export const InsertCreativeAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeAssetMetadata;

export type InsertCreativeAssetsError = DefaultErrors;

/** Inserts a new creative asset. */
export const insertCreativeAssets: API.OperationMethod<
  InsertCreativeAssetsRequest,
  InsertCreativeAssetsResponse,
  InsertCreativeAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeAssetsRequest,
  output: InsertCreativeAssetsResponse,
  errors: [],
}));

export interface GetFloodlightConfigurationsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Floodlight configuration ID. */
  id: string;
}

export const GetFloodlightConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/floodlightConfigurations/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFloodlightConfigurationsRequest>;

export type GetFloodlightConfigurationsResponse = FloodlightConfiguration;
export const GetFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfiguration;

export type GetFloodlightConfigurationsError = DefaultErrors;

/** Gets one floodlight configuration by ID. */
export const getFloodlightConfigurations: API.OperationMethod<
  GetFloodlightConfigurationsRequest,
  GetFloodlightConfigurationsResponse,
  GetFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFloodlightConfigurationsRequest,
  output: GetFloodlightConfigurationsResponse,
  errors: [],
}));

export interface UpdateFloodlightConfigurationsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightConfiguration;
}

export const UpdateFloodlightConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/floodlightConfigurations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFloodlightConfigurationsRequest>;

export type UpdateFloodlightConfigurationsResponse = FloodlightConfiguration;
export const UpdateFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfiguration;

export type UpdateFloodlightConfigurationsError = DefaultErrors;

/** Updates an existing floodlight configuration. */
export const updateFloodlightConfigurations: API.OperationMethod<
  UpdateFloodlightConfigurationsRequest,
  UpdateFloodlightConfigurationsResponse,
  UpdateFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFloodlightConfigurationsRequest,
  output: UpdateFloodlightConfigurationsResponse,
  errors: [],
}));

export interface PatchFloodlightConfigurationsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. EventTag ID. */
  id: string;
  /** Request body */
  body?: FloodlightConfiguration;
}

export const PatchFloodlightConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(FloodlightConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/floodlightConfigurations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFloodlightConfigurationsRequest>;

export type PatchFloodlightConfigurationsResponse = FloodlightConfiguration;
export const PatchFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfiguration;

export type PatchFloodlightConfigurationsError = DefaultErrors;

/** Updates an existing floodlight configuration. This method supports patch semantics. */
export const patchFloodlightConfigurations: API.OperationMethod<
  PatchFloodlightConfigurationsRequest,
  PatchFloodlightConfigurationsResponse,
  PatchFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFloodlightConfigurationsRequest,
  output: PatchFloodlightConfigurationsResponse,
  errors: [],
}));

export interface ListFloodlightConfigurationsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned. */
  ids?: string[];
}

export const ListFloodlightConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/floodlightConfigurations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListFloodlightConfigurationsRequest>;

export type ListFloodlightConfigurationsResponse =
  FloodlightConfigurationsListResponse;
export const ListFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfigurationsListResponse;

export type ListFloodlightConfigurationsError = DefaultErrors;

/** Retrieves a list of floodlight configurations, possibly filtered. */
export const listFloodlightConfigurations: API.OperationMethod<
  ListFloodlightConfigurationsRequest,
  ListFloodlightConfigurationsResponse,
  ListFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFloodlightConfigurationsRequest,
  output: ListFloodlightConfigurationsResponse,
  errors: [],
}));

export interface UpdateFloodlightActivityGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightActivityGroup;
}

export const UpdateFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightActivityGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/floodlightActivityGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFloodlightActivityGroupsRequest>;

export type UpdateFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const UpdateFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type UpdateFloodlightActivityGroupsError = DefaultErrors;

/** Updates an existing floodlight activity group. */
export const updateFloodlightActivityGroups: API.OperationMethod<
  UpdateFloodlightActivityGroupsRequest,
  UpdateFloodlightActivityGroupsResponse,
  UpdateFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFloodlightActivityGroupsRequest,
  output: UpdateFloodlightActivityGroupsResponse,
  errors: [],
}));

export interface InsertFloodlightActivityGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightActivityGroup;
}

export const InsertFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightActivityGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/floodlightActivityGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFloodlightActivityGroupsRequest>;

export type InsertFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const InsertFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type InsertFloodlightActivityGroupsError = DefaultErrors;

/** Inserts a new floodlight activity group. */
export const insertFloodlightActivityGroups: API.OperationMethod<
  InsertFloodlightActivityGroupsRequest,
  InsertFloodlightActivityGroupsResponse,
  InsertFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFloodlightActivityGroupsRequest,
  output: InsertFloodlightActivityGroupsResponse,
  errors: [],
}));

export interface PatchFloodlightActivityGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. EventTag ID. */
  id: string;
  /** Request body */
  body?: FloodlightActivityGroup;
}

export const PatchFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(FloodlightActivityGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{profileId}/floodlightActivityGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFloodlightActivityGroupsRequest>;

export type PatchFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const PatchFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type PatchFloodlightActivityGroupsError = DefaultErrors;

/** Updates an existing floodlight activity group. This method supports patch semantics. */
export const patchFloodlightActivityGroups: API.OperationMethod<
  PatchFloodlightActivityGroupsRequest,
  PatchFloodlightActivityGroupsResponse,
  PatchFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFloodlightActivityGroupsRequest,
  output: PatchFloodlightActivityGroupsResponse,
  errors: [],
}));

export interface GetFloodlightActivityGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Floodlight activity Group ID. */
  id: string;
}

export const GetFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/floodlightActivityGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFloodlightActivityGroupsRequest>;

export type GetFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const GetFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type GetFloodlightActivityGroupsError = DefaultErrors;

/** Gets one floodlight activity group by ID. */
export const getFloodlightActivityGroups: API.OperationMethod<
  GetFloodlightActivityGroupsRequest,
  GetFloodlightActivityGroupsResponse,
  GetFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFloodlightActivityGroupsRequest,
  output: GetFloodlightActivityGroupsResponse,
  errors: [],
}));

export interface ListFloodlightActivityGroupsRequest {
  /** Select only floodlight activity groups with the specified floodlight activity group type. */
  type?: "COUNTER" | "SALE" | (string & {});
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup". */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result. */
  ids?: string[];
  /** Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result. */
  floodlightConfigurationId?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result. */
  advertiserId?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    floodlightConfigurationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightConfigurationId"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/floodlightActivityGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListFloodlightActivityGroupsRequest>;

export type ListFloodlightActivityGroupsResponse =
  FloodlightActivityGroupsListResponse;
export const ListFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroupsListResponse;

export type ListFloodlightActivityGroupsError = DefaultErrors;

/** Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging. */
export const listFloodlightActivityGroups: API.PaginatedOperationMethod<
  ListFloodlightActivityGroupsRequest,
  ListFloodlightActivityGroupsResponse,
  ListFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFloodlightActivityGroupsRequest,
  output: ListFloodlightActivityGroupsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAccountPermissionGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Account permission group ID. */
  id: string;
}

export const GetAccountPermissionGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountPermissionGroups/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountPermissionGroupsRequest>;

export type GetAccountPermissionGroupsResponse = AccountPermissionGroup;
export const GetAccountPermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermissionGroup;

export type GetAccountPermissionGroupsError = DefaultErrors;

/** Gets one account permission group by ID. */
export const getAccountPermissionGroups: API.OperationMethod<
  GetAccountPermissionGroupsRequest,
  GetAccountPermissionGroupsResponse,
  GetAccountPermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountPermissionGroupsRequest,
  output: GetAccountPermissionGroupsResponse,
  errors: [],
}));

export interface ListAccountPermissionGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListAccountPermissionGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountPermissionGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountPermissionGroupsRequest>;

export type ListAccountPermissionGroupsResponse =
  AccountPermissionGroupsListResponse;
export const ListAccountPermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermissionGroupsListResponse;

export type ListAccountPermissionGroupsError = DefaultErrors;

/** Retrieves the list of account permission groups. */
export const listAccountPermissionGroups: API.OperationMethod<
  ListAccountPermissionGroupsRequest,
  ListAccountPermissionGroupsResponse,
  ListAccountPermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountPermissionGroupsRequest,
  output: ListAccountPermissionGroupsResponse,
  errors: [],
}));

export interface GetVideoFormatsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Video format ID. */
  id: number;
}

export const GetVideoFormatsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.Number.pipe(T.HttpPath("id")),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/videoFormats/{id}" }),
  svc,
) as unknown as Schema.Schema<GetVideoFormatsRequest>;

export type GetVideoFormatsResponse = VideoFormat;
export const GetVideoFormatsResponse = /*@__PURE__*/ /*#__PURE__*/ VideoFormat;

export type GetVideoFormatsError = DefaultErrors;

/** Gets one video format by ID. */
export const getVideoFormats: API.OperationMethod<
  GetVideoFormatsRequest,
  GetVideoFormatsResponse,
  GetVideoFormatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVideoFormatsRequest,
  output: GetVideoFormatsResponse,
  errors: [],
}));

export interface ListVideoFormatsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListVideoFormatsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/videoFormats" }),
    svc,
  ) as unknown as Schema.Schema<ListVideoFormatsRequest>;

export type ListVideoFormatsResponse = VideoFormatsListResponse;
export const ListVideoFormatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VideoFormatsListResponse;

export type ListVideoFormatsError = DefaultErrors;

/** Lists available video formats. */
export const listVideoFormats: API.OperationMethod<
  ListVideoFormatsRequest,
  ListVideoFormatsResponse,
  ListVideoFormatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVideoFormatsRequest,
  output: ListVideoFormatsResponse,
  errors: [],
}));

export interface GetFilesRequest {
  /** The ID of the report file. */
  fileId: string;
  /** The ID of the report. */
  reportId: string;
}

export const GetFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
}).pipe(
  T.Http({ method: "GET", path: "reports/{reportId}/files/{fileId}" }),
  svc,
) as unknown as Schema.Schema<GetFilesRequest>;

export type GetFilesResponse = File;
export const GetFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type GetFilesError = DefaultErrors;

/** Retrieves a report file by its report ID and file ID. This method supports media download. */
export const getFiles: API.OperationMethod<
  GetFilesRequest,
  GetFilesResponse,
  GetFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFilesRequest,
  output: GetFilesResponse,
  errors: [],
}));

export interface ListFilesRequest {
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The scope that defines which results are returned. */
  scope?: "ALL" | "MINE" | "SHARED_WITH_ME" | (string & {});
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The field by which to sort the list. */
  sortField?: "ID" | "LAST_MODIFIED_TIME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
}

export const ListFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/files" }),
  svc,
) as unknown as Schema.Schema<ListFilesRequest>;

export type ListFilesResponse = FileList;
export const ListFilesResponse = /*@__PURE__*/ /*#__PURE__*/ FileList;

export type ListFilesError = DefaultErrors;

/** Lists files for a user profile. */
export const listFiles: API.PaginatedOperationMethod<
  ListFilesRequest,
  ListFilesResponse,
  ListFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFilesRequest,
  output: ListFilesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListAccountsRequest {
  /** Select only accounts with these IDs. */
  ids?: string[];
  /** Select only active accounts. Don't set this field to select both active and non-active accounts. */
  active?: boolean;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account". */
  searchString?: string;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse = AccountsListResponse;
export const ListAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsListResponse;

export type ListAccountsError = DefaultErrors;

/** Retrieves the list of accounts, possibly filtered. This method supports paging. */
export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateAccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Account;
}

export const UpdateAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Account).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/accounts",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateAccountsRequest>;

export type UpdateAccountsResponse = Account;
export const UpdateAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type UpdateAccountsError = DefaultErrors;

/** Updates an existing account. */
export const updateAccounts: API.OperationMethod<
  UpdateAccountsRequest,
  UpdateAccountsResponse,
  UpdateAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountsRequest,
  output: UpdateAccountsResponse,
  errors: [],
}));

export interface PatchAccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Account ID. */
  id: string;
  /** Request body */
  body?: Account;
}

export const PatchAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(Account).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/accounts",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchAccountsRequest>;

export type PatchAccountsResponse = Account;
export const PatchAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type PatchAccountsError = DefaultErrors;

/** Updates an existing account. This method supports patch semantics. */
export const patchAccounts: API.OperationMethod<
  PatchAccountsRequest,
  PatchAccountsResponse,
  PatchAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsRequest,
  output: PatchAccountsResponse,
  errors: [],
}));

export interface GetAccountsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Account ID. */
  id: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/accounts/{id}" }),
  svc,
) as unknown as Schema.Schema<GetAccountsRequest>;

export type GetAccountsResponse = Account;
export const GetAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type GetAccountsError = DefaultErrors;

/** Gets one account by ID. */
export const getAccounts: API.OperationMethod<
  GetAccountsRequest,
  GetAccountsResponse,
  GetAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountsRequest,
  output: GetAccountsResponse,
  errors: [],
}));

export interface ListCampaignsRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign". */
  searchString?: string;
  /** Select only campaigns that have overridden this event tag ID. */
  overriddenEventTagId?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only campaigns that have at least one optimization activity. */
  atLeastOneOptimizationActivity?: boolean;
  /** Select only campaigns with these IDs. */
  ids?: string[];
  /** Select only campaigns that belong to this subaccount. */
  subaccountId?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Exclude campaigns with these IDs. */
  excludedIds?: string[];
  /** Select only campaigns whose advertisers belong to these advertiser groups. */
  advertiserGroupIds?: string[];
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only campaigns that belong to these advertisers. */
  advertiserIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns. */
  archived?: boolean;
}

export const ListCampaignsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  overriddenEventTagId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("overriddenEventTagId"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  atLeastOneOptimizationActivity: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("atLeastOneOptimizationActivity"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  subaccountId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("subaccountId"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  excludedIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("excludedIds"),
  ),
  advertiserGroupIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserGroupIds"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserIds"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/campaigns" }),
  svc,
) as unknown as Schema.Schema<ListCampaignsRequest>;

export type ListCampaignsResponse = CampaignsListResponse;
export const ListCampaignsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CampaignsListResponse;

export type ListCampaignsError = DefaultErrors;

/** Retrieves a list of campaigns, possibly filtered. This method supports paging. */
export const listCampaigns: API.PaginatedOperationMethod<
  ListCampaignsRequest,
  ListCampaignsResponse,
  ListCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCampaignsRequest,
  output: ListCampaignsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCampaignsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Campaign ID. */
  id: string;
}

export const GetCampaignsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/campaigns/{id}" }),
  svc,
) as unknown as Schema.Schema<GetCampaignsRequest>;

export type GetCampaignsResponse = Campaign;
export const GetCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type GetCampaignsError = DefaultErrors;

/** Gets one campaign by ID. */
export const getCampaigns: API.OperationMethod<
  GetCampaignsRequest,
  GetCampaignsResponse,
  GetCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCampaignsRequest,
  output: GetCampaignsResponse,
  errors: [],
}));

export interface InsertCampaignsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Campaign;
}

export const InsertCampaignsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Campaign).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/campaigns",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertCampaignsRequest>;

export type InsertCampaignsResponse = Campaign;
export const InsertCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type InsertCampaignsError = DefaultErrors;

/** Inserts a new campaign. */
export const insertCampaigns: API.OperationMethod<
  InsertCampaignsRequest,
  InsertCampaignsResponse,
  InsertCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCampaignsRequest,
  output: InsertCampaignsResponse,
  errors: [],
}));

export interface PatchCampaignsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Campaign ID. */
  id: string;
  /** Request body */
  body?: Campaign;
}

export const PatchCampaignsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(Campaign).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/campaigns",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchCampaignsRequest>;

export type PatchCampaignsResponse = Campaign;
export const PatchCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type PatchCampaignsError = DefaultErrors;

/** Updates an existing campaign. This method supports patch semantics. */
export const patchCampaigns: API.OperationMethod<
  PatchCampaignsRequest,
  PatchCampaignsResponse,
  PatchCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCampaignsRequest,
  output: PatchCampaignsResponse,
  errors: [],
}));

export interface UpdateCampaignsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Campaign;
}

export const UpdateCampaignsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Campaign).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/campaigns",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateCampaignsRequest>;

export type UpdateCampaignsResponse = Campaign;
export const UpdateCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type UpdateCampaignsError = DefaultErrors;

/** Updates an existing campaign. */
export const updateCampaigns: API.OperationMethod<
  UpdateCampaignsRequest,
  UpdateCampaignsResponse,
  UpdateCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCampaignsRequest,
  output: UpdateCampaignsResponse,
  errors: [],
}));

export interface GetUserRolesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** User role ID. */
  id: string;
}

export const GetUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/userRoles/{id}" }),
  svc,
) as unknown as Schema.Schema<GetUserRolesRequest>;

export type GetUserRolesResponse = UserRole;
export const GetUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type GetUserRolesError = DefaultErrors;

/** Gets one user role by ID. */
export const getUserRoles: API.OperationMethod<
  GetUserRolesRequest,
  GetUserRolesResponse,
  GetUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserRolesRequest,
  output: GetUserRolesResponse,
  errors: [],
}));

export interface PatchUserRolesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. UserRole ID. */
  id: string;
  /** Request body */
  body?: UserRole;
}

export const PatchUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpQuery("id")),
  body: Schema.optional(UserRole).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/userRoles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchUserRolesRequest>;

export type PatchUserRolesResponse = UserRole;
export const PatchUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type PatchUserRolesError = DefaultErrors;

/** Updates an existing user role. This method supports patch semantics. */
export const patchUserRoles: API.OperationMethod<
  PatchUserRolesRequest,
  PatchUserRolesResponse,
  PatchUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUserRolesRequest,
  output: PatchUserRolesResponse,
  errors: [],
}));

export interface InsertUserRolesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: UserRole;
}

export const InsertUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(UserRole).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "userprofiles/{profileId}/userRoles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertUserRolesRequest>;

export type InsertUserRolesResponse = UserRole;
export const InsertUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type InsertUserRolesError = DefaultErrors;

/** Inserts a new user role. */
export const insertUserRoles: API.OperationMethod<
  InsertUserRolesRequest,
  InsertUserRolesResponse,
  InsertUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertUserRolesRequest,
  output: InsertUserRolesResponse,
  errors: [],
}));

export interface ListUserRolesRequest {
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only user roles with the specified IDs. */
  ids?: string[];
  /** Select only user roles that belong to this subaccount. */
  subaccountId?: string;
  /** Select only account level user roles not associated with any specific subaccount. */
  accountUserRoleOnly?: boolean;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole". */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  subaccountId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("subaccountId"),
  ),
  accountUserRoleOnly: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("accountUserRoleOnly"),
  ),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/userRoles" }),
  svc,
) as unknown as Schema.Schema<ListUserRolesRequest>;

export type ListUserRolesResponse = UserRolesListResponse;
export const ListUserRolesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolesListResponse;

export type ListUserRolesError = DefaultErrors;

/** Retrieves a list of user roles, possibly filtered. This method supports paging. */
export const listUserRoles: API.PaginatedOperationMethod<
  ListUserRolesRequest,
  ListUserRolesResponse,
  ListUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUserRolesRequest,
  output: ListUserRolesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateUserRolesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: UserRole;
}

export const UpdateUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(UserRole).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "userprofiles/{profileId}/userRoles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateUserRolesRequest>;

export type UpdateUserRolesResponse = UserRole;
export const UpdateUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type UpdateUserRolesError = DefaultErrors;

/** Updates an existing user role. */
export const updateUserRoles: API.OperationMethod<
  UpdateUserRolesRequest,
  UpdateUserRolesResponse,
  UpdateUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUserRolesRequest,
  output: UpdateUserRolesResponse,
  errors: [],
}));

export interface DeleteUserRolesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** User role ID. */
  id: string;
}

export const DeleteUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  },
).pipe(
  T.Http({ method: "DELETE", path: "userprofiles/{profileId}/userRoles/{id}" }),
  svc,
) as unknown as Schema.Schema<DeleteUserRolesRequest>;

export interface DeleteUserRolesResponse {}
export const DeleteUserRolesResponse: Schema.Schema<DeleteUserRolesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUserRolesResponse>;

export type DeleteUserRolesError = DefaultErrors;

/** Deletes an existing user role. */
export const deleteUserRoles: API.OperationMethod<
  DeleteUserRolesRequest,
  DeleteUserRolesResponse,
  DeleteUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUserRolesRequest,
  output: DeleteUserRolesResponse,
  errors: [],
}));

export interface QueryDimensionValuesRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
  /** Request body */
  body?: DimensionValueRequest;
}

export const QueryDimensionValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    body: Schema.optional(DimensionValueRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/dimensionvalues/query",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<QueryDimensionValuesRequest>;

export type QueryDimensionValuesResponse = DimensionValueList;
export const QueryDimensionValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DimensionValueList;

export type QueryDimensionValuesError = DefaultErrors;

/** Retrieves list of report dimension values for a list of filters. */
export const queryDimensionValues: API.PaginatedOperationMethod<
  QueryDimensionValuesRequest,
  QueryDimensionValuesResponse,
  QueryDimensionValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryDimensionValuesRequest,
  output: QueryDimensionValuesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertDirectorySitesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: DirectorySite;
}

export const InsertDirectorySitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(DirectorySite).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/directorySites",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertDirectorySitesRequest>;

export type InsertDirectorySitesResponse = DirectorySite;
export const InsertDirectorySitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectorySite;

export type InsertDirectorySitesError = DefaultErrors;

/** Inserts a new directory site. */
export const insertDirectorySites: API.OperationMethod<
  InsertDirectorySitesRequest,
  InsertDirectorySitesResponse,
  InsertDirectorySitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDirectorySitesRequest,
  output: InsertDirectorySitesResponse,
  errors: [],
}));

export interface GetDirectorySitesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Directory site ID. */
  id: string;
}

export const GetDirectorySitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/directorySites/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDirectorySitesRequest>;

export type GetDirectorySitesResponse = DirectorySite;
export const GetDirectorySitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectorySite;

export type GetDirectorySitesError = DefaultErrors;

/** Gets one directory site by ID. */
export const getDirectorySites: API.OperationMethod<
  GetDirectorySitesRequest,
  GetDirectorySitesResponse,
  GetDirectorySitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDirectorySitesRequest,
  output: GetDirectorySitesResponse,
  errors: [],
}));

export interface ListDirectorySitesRequest {
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only directory sites that accept publisher paid placements. This field can be left blank. */
  acceptsPublisherPaidPlacements?: boolean;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInStreamVideoPlacements?: boolean;
  /** Select only directory sites with this Ad Manager network code. */
  dfpNetworkCode?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only directory sites with these IDs. */
  ids?: string[];
  /** Select only active directory sites. Leave blank to retrieve both active and inactive directory sites. */
  active?: boolean;
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInterstitialPlacements?: boolean;
  /** Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site". */
  searchString?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListDirectorySitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    acceptsPublisherPaidPlacements: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acceptsPublisherPaidPlacements"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    acceptsInStreamVideoPlacements: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acceptsInStreamVideoPlacements"),
    ),
    dfpNetworkCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dfpNetworkCode"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    acceptsInterstitialPlacements: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acceptsInterstitialPlacements"),
    ),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/directorySites" }),
    svc,
  ) as unknown as Schema.Schema<ListDirectorySitesRequest>;

export type ListDirectorySitesResponse = DirectorySitesListResponse;
export const ListDirectorySitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectorySitesListResponse;

export type ListDirectorySitesError = DefaultErrors;

/** Retrieves a list of directory sites, possibly filtered. This method supports paging. */
export const listDirectorySites: API.PaginatedOperationMethod<
  ListDirectorySitesRequest,
  ListDirectorySitesResponse,
  ListDirectorySitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDirectorySitesRequest,
  output: ListDirectorySitesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOperatingSystemsRequest {
  /** Operating system DART ID. */
  dartId: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetOperatingSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dartId: Schema.String.pipe(T.HttpPath("dartId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/operatingSystems/{dartId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetOperatingSystemsRequest>;

export type GetOperatingSystemsResponse = OperatingSystem;
export const GetOperatingSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystem;

export type GetOperatingSystemsError = DefaultErrors;

/** Gets one operating system by DART ID. */
export const getOperatingSystems: API.OperationMethod<
  GetOperatingSystemsRequest,
  GetOperatingSystemsResponse,
  GetOperatingSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperatingSystemsRequest,
  output: GetOperatingSystemsResponse,
  errors: [],
}));

export interface ListOperatingSystemsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListOperatingSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/operatingSystems",
    }),
    svc,
  ) as unknown as Schema.Schema<ListOperatingSystemsRequest>;

export type ListOperatingSystemsResponse = OperatingSystemsListResponse;
export const ListOperatingSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystemsListResponse;

export type ListOperatingSystemsError = DefaultErrors;

/** Retrieves a list of operating systems. */
export const listOperatingSystems: API.OperationMethod<
  ListOperatingSystemsRequest,
  ListOperatingSystemsResponse,
  ListOperatingSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOperatingSystemsRequest,
  output: ListOperatingSystemsResponse,
  errors: [],
}));

export interface InsertStudioCreativeAssetsRequest {
  /** Request body */
  body?: DfareportingStudioCreativeAssetsInsertRequest;
}

export const InsertStudioCreativeAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DfareportingStudioCreativeAssetsInsertRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "studio/creativeAssets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InsertStudioCreativeAssetsRequest>;

export type InsertStudioCreativeAssetsResponse = StudioCreativeAssetsResponse;
export const InsertStudioCreativeAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StudioCreativeAssetsResponse;

export type InsertStudioCreativeAssetsError = DefaultErrors;

/** Inserts a new studio creative asset. */
export const insertStudioCreativeAssets: API.OperationMethod<
  InsertStudioCreativeAssetsRequest,
  InsertStudioCreativeAssetsResponse,
  InsertStudioCreativeAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertStudioCreativeAssetsRequest,
  output: InsertStudioCreativeAssetsResponse,
  errors: [],
}));

export interface ListBillingRatesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Billing profile ID of this billing rate. */
  billingProfileId: string;
}

export const ListBillingRatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    billingProfileId: Schema.String.pipe(T.HttpPath("billingProfileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/billingProfiles/{billingProfileId}/billingRates",
    }),
    svc,
  ) as unknown as Schema.Schema<ListBillingRatesRequest>;

export type ListBillingRatesResponse = BillingRatesListResponse;
export const ListBillingRatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingRatesListResponse;

export type ListBillingRatesError = DefaultErrors;

/** Retrieves a list of billing rates. This method supports paging. */
export const listBillingRates: API.OperationMethod<
  ListBillingRatesRequest,
  ListBillingRatesResponse,
  ListBillingRatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBillingRatesRequest,
  output: ListBillingRatesResponse,
  errors: [],
}));

export interface GetTvCampaignDetailsRequest {
  /** Optional. TV data provider. If not specified, defaults to `COMSCORE_NATIONAL_US`. */
  tvDataProvider?:
    | "INVALID_TV_DATA_PROVIDER"
    | "INTAGE_JP"
    | "IBOPE_AR"
    | "IBOPE_BR"
    | "IBOPE_CL"
    | "IBOPE_CO"
    | "TNS_VN"
    | "COMSCORE_NATIONAL_US"
    | "COMSCORE_CA"
    | "SAMBA_AU"
    | (string & {});
  /** Required. User profile ID associated with this request. */
  profileId: string;
  /** Required. TV Campaign ID. */
  id: string;
  /** Optional. Country Dart ID. If not specified, defaults to 256 (US). */
  countryDartId?: string;
  /** Required. Account ID associated with this request. */
  accountId?: string;
}

export const GetTvCampaignDetailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tvDataProvider: Schema.optional(Schema.String).pipe(
      T.HttpQuery("tvDataProvider"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    countryDartId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("countryDartId"),
    ),
    accountId: Schema.optional(Schema.String).pipe(T.HttpQuery("accountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/tvCampaignDetails/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTvCampaignDetailsRequest>;

export type GetTvCampaignDetailsResponse = TvCampaignDetail;
export const GetTvCampaignDetailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TvCampaignDetail;

export type GetTvCampaignDetailsError = DefaultErrors;

/** Gets one TvCampaignDetail by ID. */
export const getTvCampaignDetails: API.OperationMethod<
  GetTvCampaignDetailsRequest,
  GetTvCampaignDetailsResponse,
  GetTvCampaignDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTvCampaignDetailsRequest,
  output: GetTvCampaignDetailsResponse,
  errors: [],
}));

export interface ListAdvertiserInvoicesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Advertiser ID of this invoice. */
  advertiserId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Month for which invoices are needed in the format YYYYMM. Required field */
  issueMonth?: string;
}

export const ListAdvertiserInvoicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    advertiserId: Schema.String.pipe(T.HttpPath("advertiserId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    issueMonth: Schema.optional(Schema.String).pipe(T.HttpQuery("issueMonth")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/advertisers/{advertiserId}/invoices",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAdvertiserInvoicesRequest>;

export type ListAdvertiserInvoicesResponse = AdvertiserInvoicesListResponse;
export const ListAdvertiserInvoicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserInvoicesListResponse;

export type ListAdvertiserInvoicesError = DefaultErrors;

/** Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level. */
export const listAdvertiserInvoices: API.PaginatedOperationMethod<
  ListAdvertiserInvoicesRequest,
  ListAdvertiserInvoicesResponse,
  ListAdvertiserInvoicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertiserInvoicesRequest,
  output: ListAdvertiserInvoicesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListBillingProfilesRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only billing profile with currency. */
  currency_code?: string;
  /** Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported. */
  subaccountIds?: string[];
  /** Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API. */
  onlySuggestion?: boolean;
  /** Select only billing profile with these IDs. */
  ids?: string[];
  /** Select only billing profile with the specified status. */
  status?: "UNDER_REVIEW" | "ACTIVE" | "ARCHIVED" | (string & {})[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile". */
  name?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListBillingProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    currency_code: Schema.optional(Schema.String).pipe(
      T.HttpQuery("currency_code"),
    ),
    subaccountIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("subaccountIds"),
    ),
    onlySuggestion: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("onlySuggestion"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{profileId}/billingProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListBillingProfilesRequest>;

export type ListBillingProfilesResponse = BillingProfilesListResponse;
export const ListBillingProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingProfilesListResponse;

export type ListBillingProfilesError = DefaultErrors;

/** Retrieves a list of billing profiles, possibly filtered. This method supports paging. */
export const listBillingProfiles: API.PaginatedOperationMethod<
  ListBillingProfilesRequest,
  ListBillingProfilesResponse,
  ListBillingProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingProfilesRequest,
  output: ListBillingProfilesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateBillingProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: BillingProfile;
}

export const UpdateBillingProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(BillingProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/billingProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateBillingProfilesRequest>;

export type UpdateBillingProfilesResponse = BillingProfile;
export const UpdateBillingProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingProfile;

export type UpdateBillingProfilesError = DefaultErrors;

/** Updates an existing billing profile. */
export const updateBillingProfiles: API.OperationMethod<
  UpdateBillingProfilesRequest,
  UpdateBillingProfilesResponse,
  UpdateBillingProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBillingProfilesRequest,
  output: UpdateBillingProfilesResponse,
  errors: [],
}));

export interface GetBillingProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Billing Profile ID. */
  id: string;
}

export const GetBillingProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/billingProfiles/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetBillingProfilesRequest>;

export type GetBillingProfilesResponse = BillingProfile;
export const GetBillingProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingProfile;

export type GetBillingProfilesError = DefaultErrors;

/** Gets one billing profile by ID. */
export const getBillingProfiles: API.OperationMethod<
  GetBillingProfilesRequest,
  GetBillingProfilesResponse,
  GetBillingProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingProfilesRequest,
  output: GetBillingProfilesResponse,
  errors: [],
}));

export interface PublishStudioCreativesRequest {
  /** Required. Studio creative ID. */
  studioCreativeId: string;
}

export const PublishStudioCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    studioCreativeId: Schema.String.pipe(T.HttpPath("studioCreativeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "studio/creatives/{studioCreativeId}/publish",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishStudioCreativesRequest>;

export interface PublishStudioCreativesResponse {}
export const PublishStudioCreativesResponse: Schema.Schema<PublishStudioCreativesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<PublishStudioCreativesResponse>;

export type PublishStudioCreativesError = DefaultErrors;

/** Publish for a studio creative. */
export const publishStudioCreatives: API.OperationMethod<
  PublishStudioCreativesRequest,
  PublishStudioCreativesResponse,
  PublishStudioCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishStudioCreativesRequest,
  output: PublishStudioCreativesResponse,
  errors: [],
}));

export interface GetStudioCreativesRequest {
  /** Required. Studio creative ID. */
  studioCreativeId: string;
}

export const GetStudioCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    studioCreativeId: Schema.String.pipe(T.HttpPath("studioCreativeId")),
  }).pipe(
    T.Http({ method: "GET", path: "studio/creatives/{studioCreativeId}" }),
    svc,
  ) as unknown as Schema.Schema<GetStudioCreativesRequest>;

export type GetStudioCreativesResponse = StudioCreative;
export const GetStudioCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StudioCreative;

export type GetStudioCreativesError = DefaultErrors;

/** Gets a studio creative by ID. */
export const getStudioCreatives: API.OperationMethod<
  GetStudioCreativesRequest,
  GetStudioCreativesResponse,
  GetStudioCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStudioCreativesRequest,
  output: GetStudioCreativesResponse,
  errors: [],
}));

export interface InsertStudioCreativesRequest {
  /** Request body */
  body?: StudioCreative;
}

export const InsertStudioCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(StudioCreative).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "studio/creatives", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InsertStudioCreativesRequest>;

export type InsertStudioCreativesResponse = StudioCreative;
export const InsertStudioCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StudioCreative;

export type InsertStudioCreativesError = DefaultErrors;

/** Inserts a new studio creative. */
export const insertStudioCreatives: API.OperationMethod<
  InsertStudioCreativesRequest,
  InsertStudioCreativesResponse,
  InsertStudioCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertStudioCreativesRequest,
  output: InsertStudioCreativesResponse,
  errors: [],
}));

export interface GetPlacementsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Placement ID. */
  id: string;
}

export const GetPlacementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/placements/{id}" }),
  svc,
) as unknown as Schema.Schema<GetPlacementsRequest>;

export type GetPlacementsResponse = Placement;
export const GetPlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type GetPlacementsError = DefaultErrors;

/** Gets one placement by ID. */
export const getPlacements: API.OperationMethod<
  GetPlacementsRequest,
  GetPlacementsResponse,
  GetPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacementsRequest,
  output: GetPlacementsResponse,
  errors: [],
}));

export interface PatchPlacementsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Required. Placement ID. */
  id: string;
  /** Request body */
  body?: Placement;
}

export const PatchPlacementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    body: Schema.optional(Placement).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/placements",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchPlacementsRequest>;

export type PatchPlacementsResponse = Placement;
export const PatchPlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type PatchPlacementsError = DefaultErrors;

/** Updates an existing placement. This method supports patch semantics. */
export const patchPlacements: API.OperationMethod<
  PatchPlacementsRequest,
  PatchPlacementsResponse,
  PatchPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPlacementsRequest,
  output: PatchPlacementsResponse,
  errors: [],
}));

export interface InsertPlacementsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Placement;
}

export const InsertPlacementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Placement).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/placements",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertPlacementsRequest>;

export type InsertPlacementsResponse = Placement;
export const InsertPlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type InsertPlacementsError = DefaultErrors;

/** Inserts a new placement. */
export const insertPlacements: API.OperationMethod<
  InsertPlacementsRequest,
  InsertPlacementsResponse,
  InsertPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlacementsRequest,
  output: InsertPlacementsResponse,
  errors: [],
}));

export interface ListPlacementsRequest {
  /** Select only placements that belong to these advertisers. */
  advertiserIds?: string[];
  /** Select only placements that are associated with these sites. */
  siteIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only placements with this payment source. */
  paymentSource?:
    | "PLACEMENT_AGENCY_PAID"
    | "PLACEMENT_PUBLISHER_PAID"
    | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only placements that are associated with these content categories. */
  contentCategoryIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only placements with these IDs. */
  ids?: string[];
  /** Select only placements that belong to these campaigns. */
  campaignIds?: string[];
  /** Select only placements that belong to these placement groups. */
  groupIds?: string[];
  /** Select only placements with these pricing types. */
  pricingTypes?:
    | "PRICING_TYPE_CPM"
    | "PRICING_TYPE_CPC"
    | "PRICING_TYPE_CPA"
    | "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    | "PRICING_TYPE_FLAT_RATE_CLICKS"
    | "PRICING_TYPE_CPM_ACTIVEVIEW"
    | (string & {})[];
  /** Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd". */
  minEndDate?: string;
  /** Select only placements with these active statuses. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {})[];
  /** Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. */
  compatibilities?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {})[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd". */
  minStartDate?: string;
  /** Select only placements that are associated with these directory sites. */
  directorySiteIds?: string[];
  /** Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" . */
  searchString?: string;
  /** Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd". */
  maxEndDate?: string;
  /** Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd". */
  maxStartDate?: string;
  /** Select only placements that are associated with these placement strategies. */
  placementStrategyIds?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only placements that are associated with these sizes. */
  sizeIds?: string[];
}

export const ListPlacementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserIds"),
  ),
  siteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("siteIds"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  paymentSource: Schema.optional(Schema.String).pipe(
    T.HttpQuery("paymentSource"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  contentCategoryIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("contentCategoryIds"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("campaignIds"),
  ),
  groupIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("groupIds"),
  ),
  pricingTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("pricingTypes"),
  ),
  minEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("minEndDate")),
  activeStatus: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("activeStatus"),
  ),
  compatibilities: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("compatibilities"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  minStartDate: Schema.optional(Schema.String).pipe(
    T.HttpQuery("minStartDate"),
  ),
  directorySiteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("directorySiteIds"),
  ),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  maxEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("maxEndDate")),
  maxStartDate: Schema.optional(Schema.String).pipe(
    T.HttpQuery("maxStartDate"),
  ),
  placementStrategyIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("placementStrategyIds"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  sizeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("sizeIds"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/placements" }),
  svc,
) as unknown as Schema.Schema<ListPlacementsRequest>;

export type ListPlacementsResponse = PlacementsListResponse;
export const ListPlacementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementsListResponse;

export type ListPlacementsError = DefaultErrors;

/** Retrieves a list of placements, possibly filtered. This method supports paging. */
export const listPlacements: API.PaginatedOperationMethod<
  ListPlacementsRequest,
  ListPlacementsResponse,
  ListPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlacementsRequest,
  output: ListPlacementsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdatePlacementsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Placement;
}

export const UpdatePlacementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Placement).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{profileId}/placements",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePlacementsRequest>;

export type UpdatePlacementsResponse = Placement;
export const UpdatePlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type UpdatePlacementsError = DefaultErrors;

/** Updates an existing placement. */
export const updatePlacements: API.OperationMethod<
  UpdatePlacementsRequest,
  UpdatePlacementsResponse,
  UpdatePlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlacementsRequest,
  output: UpdatePlacementsResponse,
  errors: [],
}));

export interface GeneratetagsPlacementsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Optional. Indicates whether to include the GPP macro in the generated tags. [Learn more](https://support.google.com/campaignmanager/answer/10031693) about this macro. */
  "tagProperties.gppMacrosIncluded"?: boolean;
  /** Optional. Indicates whether to include the dc_dbm macro in the generated tags. [Learn more](https://support.google.com/campaignmanager/answer/9280273) about this macro. */
  "tagProperties.dcDbmMacroIncluded"?: boolean;
  /** Generate tags for these placements. */
  placementIds?: string[];
  /** Generate placements belonging to this campaign. This is a required field. */
  campaignId?: string;
  /** Optional. Indicates whether to include the TCF macro in the generated tags. Default true. [Learn more](https://support.google.com/campaignmanager/answer/10031693) about this macro. */
  "tagProperties.tcfGdprMacrosIncluded"?: boolean;
  /** Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements. */
  tagFormats?:
    | "PLACEMENT_TAG_STANDARD"
    | "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
    | "PLACEMENT_TAG_IFRAME_ILAYER"
    | "PLACEMENT_TAG_INTERNAL_REDIRECT"
    | "PLACEMENT_TAG_JAVASCRIPT"
    | "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
    | "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
    | "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
    | "PLACEMENT_TAG_CLICK_COMMANDS"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
    | "PLACEMENT_TAG_TRACKING"
    | "PLACEMENT_TAG_TRACKING_IFRAME"
    | "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
    | "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
    | "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
    | "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
    | (string & {})[];
}

export const GeneratetagsPlacementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    "tagProperties.gppMacrosIncluded": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("tagProperties.gppMacrosIncluded"),
    ),
    "tagProperties.dcDbmMacroIncluded": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("tagProperties.dcDbmMacroIncluded"),
    ),
    placementIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("placementIds"),
    ),
    campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
    "tagProperties.tcfGdprMacrosIncluded": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("tagProperties.tcfGdprMacrosIncluded"),
    ),
    tagFormats: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("tagFormats"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{profileId}/placements/generatetags",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratetagsPlacementsRequest>;

export type GeneratetagsPlacementsResponse = PlacementsGenerateTagsResponse;
export const GeneratetagsPlacementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementsGenerateTagsResponse;

export type GeneratetagsPlacementsError = DefaultErrors;

/** Generates tags for a placement. */
export const generatetagsPlacements: API.OperationMethod<
  GeneratetagsPlacementsRequest,
  GeneratetagsPlacementsResponse,
  GeneratetagsPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratetagsPlacementsRequest,
  output: GeneratetagsPlacementsResponse,
  errors: [],
}));

export interface InsertDynamicFeedsRequest {
  /** Request body */
  body?: DynamicFeedsInsertRequest;
}

export const InsertDynamicFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DynamicFeedsInsertRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "studio/dynamicFeeds", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InsertDynamicFeedsRequest>;

export type InsertDynamicFeedsResponse = DynamicFeed;
export const InsertDynamicFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicFeed;

export type InsertDynamicFeedsError = DefaultErrors;

/** Inserts a new dynamic feed. */
export const insertDynamicFeeds: API.OperationMethod<
  InsertDynamicFeedsRequest,
  InsertDynamicFeedsResponse,
  InsertDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDynamicFeedsRequest,
  output: InsertDynamicFeedsResponse,
  errors: [],
}));

export interface UpdateDynamicFeedsRequest {
  /** Request body */
  body?: DynamicFeed;
}

export const UpdateDynamicFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(DynamicFeed).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "studio/dynamicFeeds", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateDynamicFeedsRequest>;

export type UpdateDynamicFeedsResponse = DynamicFeed;
export const UpdateDynamicFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicFeed;

export type UpdateDynamicFeedsError = DefaultErrors;

/** Updates a new dynamic feed. For draft feeds, only Element can be updated. For published feeds, only FeedSchedule can be updated. Other fields will be ignored. */
export const updateDynamicFeeds: API.OperationMethod<
  UpdateDynamicFeedsRequest,
  UpdateDynamicFeedsResponse,
  UpdateDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDynamicFeedsRequest,
  output: UpdateDynamicFeedsResponse,
  errors: [],
}));

export interface GetDynamicFeedsRequest {
  /** Required. Dynamic feed ID. */
  dynamicFeedId: string;
}

export const GetDynamicFeedsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dynamicFeedId: Schema.String.pipe(T.HttpPath("dynamicFeedId")),
  },
).pipe(
  T.Http({ method: "GET", path: "studio/dynamicFeeds/{dynamicFeedId}" }),
  svc,
) as unknown as Schema.Schema<GetDynamicFeedsRequest>;

export type GetDynamicFeedsResponse = DynamicFeed;
export const GetDynamicFeedsResponse = /*@__PURE__*/ /*#__PURE__*/ DynamicFeed;

export type GetDynamicFeedsError = DefaultErrors;

/** Gets a dynamic feed by ID. */
export const getDynamicFeeds: API.OperationMethod<
  GetDynamicFeedsRequest,
  GetDynamicFeedsResponse,
  GetDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDynamicFeedsRequest,
  output: GetDynamicFeedsResponse,
  errors: [],
}));

export interface RetransformDynamicFeedsRequest {
  /** Required. Dynamic feed ID. */
  dynamicFeedId: string;
}

export const RetransformDynamicFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicFeedId: Schema.String.pipe(T.HttpPath("dynamicFeedId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "studio/dynamicFeeds/{dynamicFeedId}/retransform",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RetransformDynamicFeedsRequest>;

export type RetransformDynamicFeedsResponse = DynamicFeed;
export const RetransformDynamicFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicFeed;

export type RetransformDynamicFeedsError = DefaultErrors;

/** Retransforms a dynamic feed. Only draft feeds can be retransformed (i.e. the feed has not been published). */
export const retransformDynamicFeeds: API.OperationMethod<
  RetransformDynamicFeedsRequest,
  RetransformDynamicFeedsResponse,
  RetransformDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetransformDynamicFeedsRequest,
  output: RetransformDynamicFeedsResponse,
  errors: [],
}));
