// ==========================================================================
// Campaign Manager 360 API (dfareporting v4)
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
  version: "v4",
  rootUrl: "https://dfareporting.googleapis.com/",
  servicePath: "dfareporting/v4/",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface TranscodeSetting {
  /** Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats. */
  enabledVideoFormats?: ReadonlyArray<number>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting". */
  kind?: string;
}

export const TranscodeSetting: Schema.Schema<TranscodeSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabledVideoFormats: Schema.optional(Schema.Array(Schema.Number)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "TranscodeSetting" });

export interface DependentFieldValue {
  /** Optional. The ID of the element that value's field will match against. */
  elementId?: string;
  /** Optional. The field id of the dependent field. */
  fieldId?: number;
  /** Optional. The ID of the dynamic feed that value's field will match against. */
  dynamicFeedId?: string;
}

export const DependentFieldValue: Schema.Schema<DependentFieldValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elementId: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.Number),
    dynamicFeedId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DependentFieldValue" });

export interface RequestValue {
  /** Optional. Custom key in the request. Used only when the field type is CUSTOM_VALUE. */
  key?: string;
  /** Optional. User attribute IDs in the request that should be excluded. Used only when the field type is REMARKETING_VALUE or USER_ATTRIBUTE_ID. */
  excludeFromUserAttributeIds?: ReadonlyArray<string>;
  /** Optional. User attribute IDs in the request. Used only when the field type is REMARKETING_VALUE or USER_ATTRIBUTE_ID. */
  userAttributeIds?: ReadonlyArray<string>;
}

export const RequestValue: Schema.Schema<RequestValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    excludeFromUserAttributeIds: Schema.optional(Schema.Array(Schema.String)),
    userAttributeIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RequestValue" });

export interface FieldFilter {
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
  /** Optional. The boolean values, only applicable when rhs_value_type is BOOL. */
  boolValue?: boolean;
  /** Optional. The request value, only applicable when rhs_value_type is REQUEST. */
  requestValue?: RequestValue;
  /** Optional. The string value, only applicable when rhs_value_type is STRING. */
  stringValue?: string;
  /** Optional. The field ID on the left hand side of the expression. */
  fieldId?: number;
  /** Optional. Right hand side of the expression. */
  valueType?:
    | "RHS_VALUE_TYPE_UNKNOWN"
    | "STRING"
    | "REQUEST"
    | "BOOL"
    | "DEPENDENT"
    | (string & {});
}

export const FieldFilter: Schema.Schema<FieldFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchType: Schema.optional(Schema.String),
    dependentFieldValue: Schema.optional(DependentFieldValue),
    boolValue: Schema.optional(Schema.Boolean),
    requestValue: Schema.optional(RequestValue),
    stringValue: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.Number),
    valueType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldFilter" });

export interface LastModifiedInfo {
  /** Timestamp of the last change in milliseconds since epoch. */
  time?: string;
}

export const LastModifiedInfo: Schema.Schema<LastModifiedInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(Schema.String),
  }).annotate({ identifier: "LastModifiedInfo" });

export interface ContentSourceMetaData {
  /** Output only. The charset of the content source. */
  charset?: string;
  /** Output only. The list of column names in the content source. */
  fieldNames?: ReadonlyArray<string>;
  /** Output only. The number of rows in the content source. */
  rowNumber?: number;
  /** Output only. The separator of the content source. */
  separator?: string;
}

export const ContentSourceMetaData: Schema.Schema<ContentSourceMetaData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    charset: Schema.optional(Schema.String),
    fieldNames: Schema.optional(Schema.Array(Schema.String)),
    rowNumber: Schema.optional(Schema.Number),
    separator: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContentSourceMetaData" });

export interface ContentSource {
  /** Required. The resource type of the content source. */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "RESOURCE_TYPE_GOOGLE_SPREADSHEET"
    | "RESOURCE_TYPE_REMOTE_FILE"
    | (string & {});
  /** Optional. The name of the content source. It is defaulted to content source file name if not provided. */
  contentSourceName?: string;
  /** Required. The link to the file of the content source. */
  resourceLink?: string;
  /** Output only. The creation timestamp of the content source. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Output only. Metadata of the content source. It contains the number of rows and the column names from resource link. This is a read-only field. */
  metaData?: ContentSourceMetaData;
  /** Output only. The last modified timestamp of the content source. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
}

export const ContentSource: Schema.Schema<ContentSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    contentSourceName: Schema.optional(Schema.String),
    resourceLink: Schema.optional(Schema.String),
    createInfo: Schema.optional(LastModifiedInfo),
    metaData: Schema.optional(ContentSourceMetaData),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
  }).annotate({ identifier: "ContentSource" });

export interface DimensionValue {
  /** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
  matchType?:
    | "EXACT"
    | "BEGINS_WITH"
    | "CONTAINS"
    | "WILDCARD_EXPRESSION"
    | (string & {});
  /** The kind of resource this is, in this case dfareporting#dimensionValue. */
  kind?: string;
  /** The value of the dimension. */
  value?: string;
  /** The eTag of this response for caching purposes. */
  etag?: string;
  /** The name of the dimension. */
  dimensionName?: string;
  /** The ID associated with the value if available. */
  id?: string;
}

export const DimensionValue: Schema.Schema<DimensionValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchType: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    dimensionName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "DimensionValue" });

export interface Activities {
  /** List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup". */
  filters?: ReadonlyArray<DimensionValue>;
  /** The kind of resource this is, in this case dfareporting#activities. */
  kind?: string;
  /** List of names of floodlight activity metrics. */
  metricNames?: ReadonlyArray<string>;
}

export const Activities: Schema.Schema<Activities> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filters: Schema.optional(Schema.Array(DimensionValue)),
    kind: Schema.optional(Schema.String),
    metricNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Activities" });

export interface TagSetting {
  /** Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field. */
  additionalKeyValues?: string;
  /** Whether static landing page URLs should be included in the tags. New placements will default to the value set on their site. */
  includeClickThroughUrls?: boolean;
  /** Optional. Indicates that the unescapedlpurl macro should be included in the tag for the static landing page. New placements will default to the value set on their site. */
  includeUnescapedlpurlMacro?: boolean;
  /** Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders. */
  keywordOption?:
    | "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
    | "IGNORE"
    | "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
    | (string & {});
  /** Whether click-tracking string should be included in the tags. */
  includeClickTracking?: boolean;
}

export const TagSetting: Schema.Schema<TagSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalKeyValues: Schema.optional(Schema.String),
    includeClickThroughUrls: Schema.optional(Schema.Boolean),
    includeUnescapedlpurlMacro: Schema.optional(Schema.Boolean),
    keywordOption: Schema.optional(Schema.String),
    includeClickTracking: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TagSetting" });

export interface SiteSettings {
  /** Whether new cookies are disabled for this site. */
  disableNewCookie?: boolean;
  /** Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect. */
  adBlockingOptOut?: boolean;
  /** Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement. */
  videoActiveViewOptOutTemplate?: boolean;
  /** Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
  vpaidAdapterChoiceTemplate?:
    | "DEFAULT"
    | "FLASH"
    | "HTML5"
    | "BOTH"
    | (string & {});
  /** Configuration settings for dynamic and image floodlight tags. */
  tagSetting?: TagSetting;
  /** Whether active view creatives are disabled for this site. */
  activeViewOptOut?: boolean;
}

export const SiteSettings: Schema.Schema<SiteSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableNewCookie: Schema.optional(Schema.Boolean),
    adBlockingOptOut: Schema.optional(Schema.Boolean),
    videoActiveViewOptOutTemplate: Schema.optional(Schema.Boolean),
    vpaidAdapterChoiceTemplate: Schema.optional(Schema.String),
    tagSetting: Schema.optional(TagSetting),
    activeViewOptOut: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SiteSettings" });

export interface Size {
  /** ID of this size. This is a read-only, auto-generated field. */
  id?: string;
  /** Width of this size. Acceptable values are 0 to 32767, inclusive. */
  width?: number;
  /** IAB standard size. This is a read-only, auto-generated field. */
  iab?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
  kind?: string;
  /** Height of this size. Acceptable values are 0 to 32767, inclusive. */
  height?: number;
}

export const Size: Schema.Schema<Size> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    width: Schema.optional(Schema.Number),
    iab: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    height: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Size" });

export interface OffsetPosition {
  /** Offset distance from top side of an asset or a window. */
  top?: number;
  /** Offset distance from left side of an asset or a window. */
  left?: number;
}

export const OffsetPosition: Schema.Schema<OffsetPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    top: Schema.optional(Schema.Number),
    left: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OffsetPosition" });

export interface PopupWindowProperties {
  /** Popup window position either centered or at specific coordinate. */
  positionType?: "CENTER" | "COORDINATES" | (string & {});
  /** Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES. */
  offset?: OffsetPosition;
  /** Whether to display the browser address bar. */
  showAddressBar?: boolean;
  /** Title of popup window. */
  title?: string;
  /** Whether to display the browser status bar. */
  showStatusBar?: boolean;
  /** Whether to display the browser scroll bar. */
  showScrollBar?: boolean;
  /** Whether to display the browser menu bar. */
  showMenuBar?: boolean;
  /** Whether to display the browser tool bar. */
  showToolBar?: boolean;
  /** Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID */
  dimension?: Size;
}

export const PopupWindowProperties: Schema.Schema<PopupWindowProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    positionType: Schema.optional(Schema.String),
    offset: Schema.optional(OffsetPosition),
    showAddressBar: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.String),
    showStatusBar: Schema.optional(Schema.Boolean),
    showScrollBar: Schema.optional(Schema.Boolean),
    showMenuBar: Schema.optional(Schema.Boolean),
    showToolBar: Schema.optional(Schema.Boolean),
    dimension: Schema.optional(Size),
  }).annotate({ identifier: "PopupWindowProperties" });

export interface CreativeClickThroughUrl {
  /** ID of the landing page for the click-through URL. */
  landingPageId?: string;
  /** Custom click-through URL. Applicable if the landingPageId field is left unset. */
  customClickThroughUrl?: string;
  /** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. */
  computedClickThroughUrl?: string;
}

export const CreativeClickThroughUrl: Schema.Schema<CreativeClickThroughUrl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    landingPageId: Schema.optional(Schema.String),
    customClickThroughUrl: Schema.optional(Schema.String),
    computedClickThroughUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeClickThroughUrl" });

export interface CreativeCustomEvent {
  /** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
  advertiserCustomEventId?: string;
  /** Type of the event. This is a read-only field. */
  advertiserCustomEventType?:
    | "ADVERTISER_EVENT_TIMER"
    | "ADVERTISER_EVENT_EXIT"
    | "ADVERTISER_EVENT_COUNTER"
    | (string & {});
  /** ID of this event. This is a required field and should not be modified after insertion. */
  id?: string;
  /** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
  videoReportingId?: string;
  /** Properties for rich media popup windows. This field is used only for exit events. */
  popupWindowProperties?: PopupWindowProperties;
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
  /** Exit click-through URL for the event. This field is used only for exit events. */
  exitClickThroughUrl?: CreativeClickThroughUrl;
  /** Artwork type used by the creative.This is a read-only field. */
  artworkType?:
    | "ARTWORK_TYPE_FLASH"
    | "ARTWORK_TYPE_HTML5"
    | "ARTWORK_TYPE_MIXED"
    | "ARTWORK_TYPE_IMAGE"
    | (string & {});
  /** User-entered name for the event. */
  advertiserCustomEventName?: string;
}

export const CreativeCustomEvent: Schema.Schema<CreativeCustomEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserCustomEventId: Schema.optional(Schema.String),
    advertiserCustomEventType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    videoReportingId: Schema.optional(Schema.String),
    popupWindowProperties: Schema.optional(PopupWindowProperties),
    artworkLabel: Schema.optional(Schema.String),
    targetType: Schema.optional(Schema.String),
    exitClickThroughUrl: Schema.optional(CreativeClickThroughUrl),
    artworkType: Schema.optional(Schema.String),
    advertiserCustomEventName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeCustomEvent" });

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

export const CreativeAssetId: Schema.Schema<CreativeAssetId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeAssetId" });

export interface CreativeAsset {
  /** Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
  hideSelectionBoxes?: boolean;
  /** Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  audioSampleRate?: number;
  /** File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
  zipFilename?: string;
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
  /** Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA. */
  positionTopUnit?:
    | "OFFSET_UNIT_PIXEL"
    | "OFFSET_UNIT_PERCENT"
    | "OFFSET_UNIT_PIXEL_FROM_CENTER"
    | (string & {});
  /** List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true. */
  companionCreativeIds?: ReadonlyArray<string>;
  /** Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  actionScript3?: boolean;
  /** Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. */
  pushdown?: boolean;
  /** Whether this asset is used as a polite load asset. */
  politeLoad?: boolean;
  /** Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  sslCompliant?: boolean;
  /** Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  horizontallyLocked?: boolean;
  /** Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA. */
  originalBackup?: boolean;
  /** Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  expandedDimension?: Size;
  /** Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  frameRate?: number;
  /** Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0. */
  customStartTimeValue?: number;
  /** Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID. */
  childAssetType?:
    | "CHILD_ASSET_TYPE_FLASH"
    | "CHILD_ASSET_TYPE_VIDEO"
    | "CHILD_ASSET_TYPE_IMAGE"
    | "CHILD_ASSET_TYPE_DATA"
    | (string & {});
  /** Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render. */
  additionalSizes?: ReadonlyArray<Size>;
  /** Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN. */
  offset?: OffsetPosition;
  /** Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  streamingServingUrl?: string;
  /** File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  fileSize?: string;
  /** Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE, creatives if left blank, this field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  size?: Size;
  /** Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA. */
  startTimeType?:
    | "ASSET_START_TIME_TYPE_NONE"
    | "ASSET_START_TIME_TYPE_CUSTOM"
    | (string & {});
  /** Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL . */
  alignment?:
    | "ALIGNMENT_TOP"
    | "ALIGNMENT_RIGHT"
    | "ALIGNMENT_BOTTOM"
    | "ALIGNMENT_LEFT"
    | (string & {});
  /** Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA. */
  backupImageExit?: CreativeCustomEvent;
  /** Orientation of video asset. This is a read-only, auto-generated field. */
  orientation?: "LANDSCAPE" | "PORTRAIT" | "SQUARE" | (string & {});
  /** zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive. */
  zIndex?: number;
  /** Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  bitRate?: number;
  /** Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  active?: boolean;
  /** Dimension value for the ID of the asset. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA. */
  position?: OffsetPosition;
  /** Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA. */
  durationType?:
    | "ASSET_DURATION_TYPE_AUTO"
    | "ASSET_DURATION_TYPE_NONE"
    | "ASSET_DURATION_TYPE_CUSTOM"
    | (string & {});
  /** Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  verticallyLocked?: boolean;
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
  /** Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
  progressiveServingUrl?: string;
  /** Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  positionLeftUnit?:
    | "OFFSET_UNIT_PIXEL"
    | "OFFSET_UNIT_PERCENT"
    | "OFFSET_UNIT_PIXEL_FROM_CENTER"
    | (string & {});
  /** Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  audioBitRate?: number;
  /** Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  mimeType?: string;
  /** Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1. */
  duration?: number;
  /** Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
  zipFilesize?: string;
  /** Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets. */
  transparency?: boolean;
  /** Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  assetIdentifier?: CreativeAssetId;
  /** Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN. */
  collapsedSize?: Size;
  /** Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive. */
  pushdownDuration?: number;
  /** Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING. */
  windowMode?: "OPAQUE" | "WINDOW" | "TRANSPARENT" | (string & {});
  /** Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
  mediaDuration?: number;
  /** Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
  hideFlashObjects?: boolean;
  /** Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
  artworkType?:
    | "ARTWORK_TYPE_FLASH"
    | "ARTWORK_TYPE_HTML5"
    | "ARTWORK_TYPE_MIXED"
    | "ARTWORK_TYPE_IMAGE"
    | (string & {});
  /** Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  flashVersion?: number;
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
  /** Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
  id?: string;
}

export const CreativeAsset: Schema.Schema<CreativeAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hideSelectionBoxes: Schema.optional(Schema.Boolean),
    audioSampleRate: Schema.optional(Schema.Number),
    zipFilename: Schema.optional(Schema.String),
    displayType: Schema.optional(Schema.String),
    positionTopUnit: Schema.optional(Schema.String),
    companionCreativeIds: Schema.optional(Schema.Array(Schema.String)),
    actionScript3: Schema.optional(Schema.Boolean),
    pushdown: Schema.optional(Schema.Boolean),
    politeLoad: Schema.optional(Schema.Boolean),
    sslCompliant: Schema.optional(Schema.Boolean),
    horizontallyLocked: Schema.optional(Schema.Boolean),
    originalBackup: Schema.optional(Schema.Boolean),
    expandedDimension: Schema.optional(Size),
    frameRate: Schema.optional(Schema.Number),
    customStartTimeValue: Schema.optional(Schema.Number),
    childAssetType: Schema.optional(Schema.String),
    additionalSizes: Schema.optional(Schema.Array(Size)),
    offset: Schema.optional(OffsetPosition),
    streamingServingUrl: Schema.optional(Schema.String),
    fileSize: Schema.optional(Schema.String),
    size: Schema.optional(Size),
    startTimeType: Schema.optional(Schema.String),
    alignment: Schema.optional(Schema.String),
    backupImageExit: Schema.optional(CreativeCustomEvent),
    orientation: Schema.optional(Schema.String),
    zIndex: Schema.optional(Schema.Number),
    bitRate: Schema.optional(Schema.Number),
    active: Schema.optional(Schema.Boolean),
    idDimensionValue: Schema.optional(DimensionValue),
    position: Schema.optional(OffsetPosition),
    durationType: Schema.optional(Schema.String),
    verticallyLocked: Schema.optional(Schema.Boolean),
    role: Schema.optional(Schema.String),
    progressiveServingUrl: Schema.optional(Schema.String),
    positionLeftUnit: Schema.optional(Schema.String),
    audioBitRate: Schema.optional(Schema.Number),
    mimeType: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.Number),
    zipFilesize: Schema.optional(Schema.String),
    transparency: Schema.optional(Schema.Boolean),
    assetIdentifier: Schema.optional(CreativeAssetId),
    collapsedSize: Schema.optional(Size),
    pushdownDuration: Schema.optional(Schema.Number),
    windowMode: Schema.optional(Schema.String),
    mediaDuration: Schema.optional(Schema.Number),
    hideFlashObjects: Schema.optional(Schema.Boolean),
    artworkType: Schema.optional(Schema.String),
    flashVersion: Schema.optional(Schema.Number),
    detectedFeatures: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeAsset" });

export interface SiteContact {
  /** Address of this site contact. */
  address?: string;
  /** Title or designation of this site contact. */
  title?: string;
  /** First name of this site contact. */
  firstName?: string;
  /** Primary phone number of this site contact. */
  phone?: string;
  /** ID of this site contact. This is a read-only, auto-generated field. */
  id?: string;
  /** Email address of this site contact. This is a required field. */
  email?: string;
  /** Site contact type. */
  contactType?: "SALES_PERSON" | "TRAFFICKER" | (string & {});
  /** Last name of this site contact. */
  lastName?: string;
}

export const SiteContact: Schema.Schema<SiteContact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    firstName: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    contactType: Schema.optional(Schema.String),
    lastName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SiteContact" });

export interface ObaIcon {
  /** OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more */
  resourceUrl?: string;
  /** Identifies the industry initiative that the icon supports. For example, AdChoices. */
  program?: string;
  /** OBA icon x coordinate position. Accepted values are left or right. */
  xPosition?: string;
  /** OBA icon y coordinate position. Accepted values are top or bottom. */
  yPosition?: string;
  /** URL to redirect to when an OBA icon is clicked. */
  iconClickThroughUrl?: string;
  /** URL to track click when an OBA icon is clicked. */
  iconClickTrackingUrl?: string;
  /** URL to track view when an OBA icon is clicked. */
  iconViewTrackingUrl?: string;
  /** OBA icon size. */
  size?: Size;
}

export const ObaIcon: Schema.Schema<ObaIcon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUrl: Schema.optional(Schema.String),
    program: Schema.optional(Schema.String),
    xPosition: Schema.optional(Schema.String),
    yPosition: Schema.optional(Schema.String),
    iconClickThroughUrl: Schema.optional(Schema.String),
    iconClickTrackingUrl: Schema.optional(Schema.String),
    iconViewTrackingUrl: Schema.optional(Schema.String),
    size: Schema.optional(Size),
  }).annotate({ identifier: "ObaIcon" });

export interface RemarketingValueAttribute {
  /** Optional. Field ID in the element. */
  fieldId?: number;
  /** Optional. Remarketing user attribute IDs for auto filtering. */
  userAttributeIds?: ReadonlyArray<string>;
}

export const RemarketingValueAttribute: Schema.Schema<RemarketingValueAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.Number),
    userAttributeIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemarketingValueAttribute" });

export interface RuleBlock {
  /** Optional. A list of non-auto field filters */
  fieldFilter?: ReadonlyArray<FieldFilter>;
}

export const RuleBlock: Schema.Schema<RuleBlock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldFilter: Schema.optional(Schema.Array(FieldFilter)),
  }).annotate({ identifier: "RuleBlock" });

export interface CustomRule {
  /** Optional. Priority of the custom rule. */
  priority?: number;
  /** Optional. A list of field filter, the custom rule will apply. */
  ruleBlocks?: ReadonlyArray<RuleBlock>;
  /** Optional. Name of this custom rule. */
  name?: string;
}

export const CustomRule: Schema.Schema<CustomRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priority: Schema.optional(Schema.Number),
    ruleBlocks: Schema.optional(Schema.Array(RuleBlock)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomRule" });

export interface ProximityFilter {
  /** Optional. The units of the radius value */
  radiusUnitType?:
    | "RADIUS_UNIT_TYPE_UNKNOWN"
    | "KILOMETERS"
    | "MILES"
    | (string & {});
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
  /** Optional. Radius length in units defined by radius_units. */
  radiusValue?: number;
}

export const ProximityFilter: Schema.Schema<ProximityFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    radiusUnitType: Schema.optional(Schema.String),
    radiusBucketType: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.Number),
    radiusValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ProximityFilter" });

export interface CustomValueField {
  /** Optional. Field ID in the element. */
  fieldId?: number;
  /** Optional. Custom key used to match for auto filtering. */
  requestKey?: string;
}

export const CustomValueField: Schema.Schema<CustomValueField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.Number),
    requestKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomValueField" });

export interface DynamicRules {
  /** Optional. The field ID for the feed that will be used for weighted rotation, only applicable when rotation type is WEIGHTED. */
  weightFieldId?: number;
  /** Optional. The link between an element field ID and a list of user attribute IDs. */
  remarketingValueAttributes?: ReadonlyArray<RemarketingValueAttribute>;
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
  /** Optional. List of field IDs in this element that should be auto-targeted. Applicable when rule type is AUTO. */
  autoTargetedFieldIds?: ReadonlyArray<number>;
  /** Optional. The rotation type to select from eligible rows. Rotation type only apply when the filtering rule results in more than one eligible rows. */
  rotationType?:
    | "ROTATION_TYPE_UNKNOWN"
    | "RANDOM"
    | "OPTIMIZED"
    | "WEIGHTED"
    | (string & {});
  /** Optional. The proximity targeting rules of the dynamic feed, only applicable when rule type is PROXIMITY_TARGETING. */
  proximityFilter?: ProximityFilter;
  /** Optional. Mapping between field ID and custom key that are used to match for auto filtering. */
  customValueFields?: ReadonlyArray<CustomValueField>;
}

export const DynamicRules: Schema.Schema<DynamicRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weightFieldId: Schema.optional(Schema.Number),
    remarketingValueAttributes: Schema.optional(
      Schema.Array(RemarketingValueAttribute),
    ),
    ruleType: Schema.optional(Schema.String),
    customRules: Schema.optional(Schema.Array(CustomRule)),
    autoTargetedFieldIds: Schema.optional(Schema.Array(Schema.Number)),
    rotationType: Schema.optional(Schema.String),
    proximityFilter: Schema.optional(ProximityFilter),
    customValueFields: Schema.optional(Schema.Array(CustomValueField)),
  }).annotate({ identifier: "DynamicRules" });

export interface DynamicProfileFeedSettings {
  /** Optional. Dynamic feed ID associated with dynamic profile version. */
  dynamicFeedId?: string;
  /** Optional. The number of this dynamic feed rows needed by the dynamic profile, default value is 1. Acceptable values are between 1 to 99, inclusive. */
  quantity?: number;
  /** Optional. Dynamic rules for row selection for the given dynamic feed in the given dynamic profile. */
  dynamicRules?: DynamicRules;
}

export const DynamicProfileFeedSettings: Schema.Schema<DynamicProfileFeedSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicFeedId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    dynamicRules: Schema.optional(DynamicRules),
  }).annotate({ identifier: "DynamicProfileFeedSettings" });

export interface SortedDimension {
  /** An optional sort order for the dimension column. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The name of the dimension. */
  name?: string;
  /** The kind of resource this is, in this case dfareporting#sortedDimension. */
  kind?: string;
}

export const SortedDimension: Schema.Schema<SortedDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortOrder: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "SortedDimension" });

export interface DayPartTargeting {
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
  /** Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive. */
  hoursOfDay?: ReadonlyArray<number>;
}

export const DayPartTargeting: Schema.Schema<DayPartTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userLocalTime: Schema.optional(Schema.Boolean),
    daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
    hoursOfDay: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "DayPartTargeting" });

export interface DefaultClickThroughEventTagProperties {
  /** Whether this entity should override the inherited default click-through event tag with its own defined value. */
  overrideInheritedEventTag?: boolean;
  /** ID of the click-through event tag to apply to all ads in this entity's scope. */
  defaultClickThroughEventTagId?: string;
}

export const DefaultClickThroughEventTagProperties: Schema.Schema<DefaultClickThroughEventTagProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overrideInheritedEventTag: Schema.optional(Schema.Boolean),
    defaultClickThroughEventTagId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DefaultClickThroughEventTagProperties" });

export interface ObjectFilter {
  /** Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list. */
  status?: "NONE" | "ASSIGNED" | "ALL" | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter". */
  kind?: string;
  /** Applicable when status is ASSIGNED. The user has access to objects with these object IDs. */
  objectIds?: ReadonlyArray<string>;
}

export const ObjectFilter: Schema.Schema<ObjectFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    objectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ObjectFilter" });

export interface AccountUserProfile {
  /** ID of the user profile. This is a read-only, auto-generated field. */
  id?: string;
  /** Email of the user profile. The email address must be linked to a Google Account. This field is required on insertion and is read-only after insertion. */
  email?: string;
  /** Account ID of the user profile. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Filter that describes which sites are visible to the user profile. */
  siteFilter?: ObjectFilter;
  /** Filter that describes which campaigns are visible to the user profile. */
  campaignFilter?: ObjectFilter;
  /** Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,". */
  name?: string;
  /** Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
  locale?: string;
  /** Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable. */
  active?: boolean;
  /** Trafficker type of this user profile. This is a read-only field. */
  traffickerType?:
    | "INTERNAL_NON_TRAFFICKER"
    | "INTERNAL_TRAFFICKER"
    | "EXTERNAL_TRAFFICKER"
    | (string & {});
  /** User type of the user profile. This is a read-only field that can be left blank. */
  userAccessType?:
    | "NORMAL_USER"
    | "SUPER_USER"
    | "INTERNAL_ADMINISTRATOR"
    | "READ_ONLY_SUPER_USER"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile". */
  kind?: string;
  /** Comments for this user profile. */
  comments?: string;
  /** Filter that describes which advertisers are visible to the user profile. */
  advertiserFilter?: ObjectFilter;
  /** Filter that describes which user roles are visible to the user profile. */
  userRoleFilter?: ObjectFilter;
  /** User role ID of the user profile. This is a required field. */
  userRoleId?: string;
  /** Subaccount ID of the user profile. This is a read-only field that can be left blank. */
  subaccountId?: string;
}

export const AccountUserProfile: Schema.Schema<AccountUserProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    siteFilter: Schema.optional(ObjectFilter),
    campaignFilter: Schema.optional(ObjectFilter),
    name: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    traffickerType: Schema.optional(Schema.String),
    userAccessType: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    comments: Schema.optional(Schema.String),
    advertiserFilter: Schema.optional(ObjectFilter),
    userRoleFilter: Schema.optional(ObjectFilter),
    userRoleId: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountUserProfile" });

export interface DynamicProfileGenerateCodeResponse {
  /** Generated code for the dynamic profile. The code will need to be unescaped. */
  code?: string;
}

export const DynamicProfileGenerateCodeResponse: Schema.Schema<DynamicProfileGenerateCodeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicProfileGenerateCodeResponse" });

export interface ChangeLog {
  /** ID of the object of this change log. The object could be a campaign, placement, ad, or other type. */
  objectId?: string;
  /** User profile name of the user who modified the object. */
  userProfileName?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog". */
  kind?: string;
  /** Subaccount ID of the modified object. */
  subaccountId?: string;
  changeTime?: string;
  /** New value of the object field. */
  newValue?: string;
  /** ID of the user who modified the object. */
  userProfileId?: string;
  /** Account ID of the modified object. */
  accountId?: string;
  /** ID of this change log. */
  id?: string;
  /** Action which caused the change. */
  action?: string;
  /** Field name of the object which changed. */
  fieldName?: string;
  /** Object type of the change log. */
  objectType?: string;
  /** Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId. */
  transactionId?: string;
  /** Old value of the object field. */
  oldValue?: string;
}

export const ChangeLog: Schema.Schema<ChangeLog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectId: Schema.optional(Schema.String),
    userProfileName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    changeTime: Schema.optional(Schema.String),
    newValue: Schema.optional(Schema.String),
    userProfileId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    fieldName: Schema.optional(Schema.String),
    objectType: Schema.optional(Schema.String),
    transactionId: Schema.optional(Schema.String),
    oldValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChangeLog" });

export interface ChangeLogsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Change log collection. */
  changeLogs?: ReadonlyArray<ChangeLog>;
}

export const ChangeLogsListResponse: Schema.Schema<ChangeLogsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    changeLogs: Schema.optional(Schema.Array(ChangeLog)),
  }).annotate({ identifier: "ChangeLogsListResponse" });

export interface PlacementStrategy {
  /** Account ID of this placement strategy.This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy". */
  kind?: string;
  /** ID of this placement strategy. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account. */
  name?: string;
}

export const PlacementStrategy: Schema.Schema<PlacementStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementStrategy" });

export interface LookbackConfiguration {
  /** Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
  clickDuration?: number;
  /** Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
  postImpressionActivitiesDuration?: number;
}

export const LookbackConfiguration: Schema.Schema<LookbackConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clickDuration: Schema.optional(Schema.Number),
    postImpressionActivitiesDuration: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LookbackConfiguration" });

export interface ReportsConfiguration {
  /** Default lookback windows for new advertisers in this account. */
  lookbackConfiguration?: LookbackConfiguration;
  /** Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
  exposureToConversionEnabled?: boolean;
  /** Report generation time zone ID of this account. This is a required field that cannot be changed on update. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu" */
  reportGenerationTimeZoneId?: string;
}

export const ReportsConfiguration: Schema.Schema<ReportsConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lookbackConfiguration: Schema.optional(LookbackConfiguration),
    exposureToConversionEnabled: Schema.optional(Schema.Boolean),
    reportGenerationTimeZoneId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportsConfiguration" });

export interface MeasurementPartnerAdvertiserLink {
  /** Measurement partner used for tag wrapping. */
  measurementPartner?:
    | "NONE"
    | "INTEGRAL_AD_SCIENCE"
    | "DOUBLE_VERIFY"
    | (string & {});
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
  /** partner Advertiser Id. */
  partnerAdvertiserId?: string;
}

export const MeasurementPartnerAdvertiserLink: Schema.Schema<MeasurementPartnerAdvertiserLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    measurementPartner: Schema.optional(Schema.String),
    linkStatus: Schema.optional(Schema.String),
    partnerAdvertiserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeasurementPartnerAdvertiserLink" });

export interface Advertiser {
  /** Subaccount ID of this advertiser.This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Status of this advertiser. */
  status?: "APPROVED" | "ON_HOLD" | (string & {});
  /** Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long. */
  clickThroughUrlSuffix?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser". */
  kind?: string;
  /** Suspension status of this advertiser. */
  suspended?: boolean;
  /** Dimension value for the ID of this advertiser. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account. */
  name?: string;
  /** Optional. Whether the advertiser plans to serve EU political ads. */
  euPoliticalAdsDeclaration?:
    | "ADVERTISER_PLANS_TO_SERVE_EU_POLITICAL_ADS"
    | "ADVERTISER_DOES_NOT_PLAN_TO_SERVE_EU_POLITICAL_ADS"
    | (string & {});
  /** Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field. */
  floodlightConfigurationIdDimensionValue?: DimensionValue;
  /** Measurement partner advertiser link for tag wrapping. */
  measurementPartnerLink?: MeasurementPartnerAdvertiserLink;
  /** Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser. */
  floodlightConfigurationId?: string;
  /** Default email address used in sender field for tag emails. */
  defaultEmail?: string;
  /** Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement. */
  originalFloodlightConfigurationId?: string;
  /** ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group. */
  advertiserGroupId?: string;
  /** Account ID of this advertiser.This is a read-only field that can be left blank. */
  accountId?: string;
  /** ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns. */
  defaultClickThroughEventTagId?: string;
  /** ID of this advertiser. This is a read-only, auto-generated field. */
  id?: string;
}

export const Advertiser: Schema.Schema<Advertiser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subaccountId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    clickThroughUrlSuffix: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    suspended: Schema.optional(Schema.Boolean),
    idDimensionValue: Schema.optional(DimensionValue),
    name: Schema.optional(Schema.String),
    euPoliticalAdsDeclaration: Schema.optional(Schema.String),
    floodlightConfigurationIdDimensionValue: Schema.optional(DimensionValue),
    measurementPartnerLink: Schema.optional(MeasurementPartnerAdvertiserLink),
    floodlightConfigurationId: Schema.optional(Schema.String),
    defaultEmail: Schema.optional(Schema.String),
    originalFloodlightConfigurationId: Schema.optional(Schema.String),
    advertiserGroupId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    defaultClickThroughEventTagId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Advertiser" });

export interface AdvertisersListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Advertiser collection. */
  advertisers?: ReadonlyArray<Advertiser>;
}

export const AdvertisersListResponse: Schema.Schema<AdvertisersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    advertisers: Schema.optional(Schema.Array(Advertiser)),
  }).annotate({ identifier: "AdvertisersListResponse" });

export interface CompanionSetting {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting". */
  kind?: string;
  /** Whether companions are disabled for this placement. */
  companionsDisabled?: boolean;
  /** Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes. */
  enabledSizes?: ReadonlyArray<Size>;
  /** Whether to serve only static images as companions. */
  imageOnly?: boolean;
}

export const CompanionSetting: Schema.Schema<CompanionSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    companionsDisabled: Schema.optional(Schema.Boolean),
    enabledSizes: Schema.optional(Schema.Array(Size)),
    imageOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CompanionSetting" });

export interface VideoOffset {
  /** Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive. */
  offsetPercentage?: number;
  /** Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive. */
  offsetSeconds?: number;
}

export const VideoOffset: Schema.Schema<VideoOffset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offsetPercentage: Schema.optional(Schema.Number),
    offsetSeconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VideoOffset" });

export interface SkippableSetting {
  /** Whether the user can skip creatives served to this placement. */
  skippable?: boolean;
  /** Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true. */
  progressOffset?: VideoOffset;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting". */
  kind?: string;
  /** Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable is true. */
  skipOffset?: VideoOffset;
}

export const SkippableSetting: Schema.Schema<SkippableSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skippable: Schema.optional(Schema.Boolean),
    progressOffset: Schema.optional(VideoOffset),
    kind: Schema.optional(Schema.String),
    skipOffset: Schema.optional(VideoOffset),
  }).annotate({ identifier: "SkippableSetting" });

export interface CustomViewabilityMetricConfiguration {
  /** The percentage of video that must be on screen for the Custom Viewability Metric to count an impression. */
  viewabilityPercent?: number;
  /** Whether the video must be audible to count an impression. */
  audible?: boolean;
  /** The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used. */
  timePercent?: number;
  /** The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used. */
  timeMillis?: number;
}

export const CustomViewabilityMetricConfiguration: Schema.Schema<CustomViewabilityMetricConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewabilityPercent: Schema.optional(Schema.Number),
    audible: Schema.optional(Schema.Boolean),
    timePercent: Schema.optional(Schema.Number),
    timeMillis: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CustomViewabilityMetricConfiguration" });

export interface CustomViewabilityMetric {
  /** ID of the custom viewability metric. */
  id?: string;
  /** Name of the custom viewability metric. */
  name?: string;
  /** Configuration of the custom viewability metric. */
  configuration?: CustomViewabilityMetricConfiguration;
}

export const CustomViewabilityMetric: Schema.Schema<CustomViewabilityMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    configuration: Schema.optional(CustomViewabilityMetricConfiguration),
  }).annotate({ identifier: "CustomViewabilityMetric" });

export interface ListPopulationTerm {
  /** Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  variableName?: string;
  /** Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  value?: string;
  /** Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM. */
  variableFriendlyName?: string;
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
  /** Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default. */
  contains?: boolean;
  /** Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
  negation?: boolean;
  /** List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable. */
  type?:
    | "CUSTOM_VARIABLE_TERM"
    | "LIST_MEMBERSHIP_TERM"
    | "REFERRER_TERM"
    | (string & {});
  /** ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. */
  remarketingListId?: string;
}

export const ListPopulationTerm: Schema.Schema<ListPopulationTerm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variableName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    variableFriendlyName: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
    contains: Schema.optional(Schema.Boolean),
    negation: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    remarketingListId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPopulationTerm" });

export interface ListPopulationClause {
  /** Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs. */
  terms?: ReadonlyArray<ListPopulationTerm>;
}

export const ListPopulationClause: Schema.Schema<ListPopulationClause> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    terms: Schema.optional(Schema.Array(ListPopulationTerm)),
  }).annotate({ identifier: "ListPopulationClause" });

export interface SiteTranscodeSetting {
  /** Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats. */
  enabledVideoFormats?: ReadonlyArray<number>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting". */
  kind?: string;
}

export const SiteTranscodeSetting: Schema.Schema<SiteTranscodeSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabledVideoFormats: Schema.optional(Schema.Array(Schema.Number)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "SiteTranscodeSetting" });

export interface PricingSchedulePricingPeriod {
  endDate?: string;
  startDate?: string;
  /** Rate or cost of this pricing period in nanos (i.e., multiplied by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive. */
  rateOrCostNanos?: string;
  /** Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive. */
  units?: string;
  /** Comments for this pricing period. */
  pricingComment?: string;
}

export const PricingSchedulePricingPeriod: Schema.Schema<PricingSchedulePricingPeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endDate: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    rateOrCostNanos: Schema.optional(Schema.String),
    units: Schema.optional(Schema.String),
    pricingComment: Schema.optional(Schema.String),
  }).annotate({ identifier: "PricingSchedulePricingPeriod" });

export interface PricingSchedule {
  startDate?: string;
  /** Placement cap cost option. */
  capCostOption?:
    | "CAP_COST_NONE"
    | "CAP_COST_MONTHLY"
    | "CAP_COST_CUMULATIVE"
    | (string & {});
  testingStartDate?: string;
  endDate?: string;
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
  /** Whether this placement is flighted. If true, pricing periods will be computed automatically. */
  flighted?: boolean;
  /** Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA. */
  floodlightActivityId?: string;
}

export const PricingSchedule: Schema.Schema<PricingSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Schema.String),
    capCostOption: Schema.optional(Schema.String),
    testingStartDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    pricingPeriods: Schema.optional(Schema.Array(PricingSchedulePricingPeriod)),
    pricingType: Schema.optional(Schema.String),
    flighted: Schema.optional(Schema.Boolean),
    floodlightActivityId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PricingSchedule" });

export interface VideoSettings {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings". */
  kind?: string;
  /** Settings for the OBA icon of video creatives served to this placement. If this object is provided, the creative-level OBA settings will be overridden. */
  obaSettings?: ObaIcon;
  /** Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level transcode settings will be overridden. */
  transcodeSettings?: TranscodeSetting;
  /** Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation. */
  orientation?: "ANY" | "LANDSCAPE" | "PORTRAIT" | (string & {});
  /** Whether OBA icons are enabled for this placement. */
  obaEnabled?: boolean;
  /** Duration of a video placement in seconds. */
  durationSeconds?: number;
  /** Settings for the companion creatives of video creatives served to this placement. */
  companionSettings?: CompanionSetting;
  /** Settings for the skippability of video creatives served to this placement. If this object is provided, the creative-level skippable settings will be overridden. */
  skippableSettings?: SkippableSetting;
  /** Publisher specification ID of a video placement. Possible values are: * `1`, Hulu * `2`, NBC * `3`, CBS * `4`, CBS Desktop * `5`, Discovery * `6`, VEVO HD * `7`, VEVO Vertical * `8`, Fox * `9`, CW Network * `10`, Disney * `11`, IGN * `12`, NFL.com * `13`, Turner Broadcasting * `14`, Tubi on Fox * `15`, Hearst Corporation * `16`, Twitch Desktop * `17`, ABC * `18`, Univision * `19`, MLB.com * `20`, MLB.com Mobile * `21`, MLB.com OTT * `22`, Polsat * `23`, TVN * `24`, Mediaset * `25`, Antena 3 * `26`, Mediamond * `27`, Sky Italia * `28`, Tubi on CBS * `29`, Spotify * `30`, Paramount * `31`, Max */
  publisherSpecificationId?: string;
}

export const VideoSettings: Schema.Schema<VideoSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    obaSettings: Schema.optional(ObaIcon),
    transcodeSettings: Schema.optional(TranscodeSetting),
    orientation: Schema.optional(Schema.String),
    obaEnabled: Schema.optional(Schema.Boolean),
    durationSeconds: Schema.optional(Schema.Number),
    companionSettings: Schema.optional(CompanionSetting),
    skippableSettings: Schema.optional(SkippableSetting),
    publisherSpecificationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoSettings" });

export interface PlacementSingleConversionDomain {
  conversionDomainValue?: string;
  conversionDomainId?: string;
}

export const PlacementSingleConversionDomain: Schema.Schema<PlacementSingleConversionDomain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionDomainValue: Schema.optional(Schema.String),
    conversionDomainId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementSingleConversionDomain" });

export interface PlacementConversionDomainOverride {
  conversionDomains?: ReadonlyArray<PlacementSingleConversionDomain>;
}

export const PlacementConversionDomainOverride: Schema.Schema<PlacementConversionDomainOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionDomains: Schema.optional(
      Schema.Array(PlacementSingleConversionDomain),
    ),
  }).annotate({ identifier: "PlacementConversionDomainOverride" });

export interface YoutubeSettings {
  /** Optional. The IDs of the creatives to use for the business logo. Currently only one creative is supported. */
  businessLogoCreativeIds?: ReadonlyArray<string>;
  /** Optional. The headlines associated with the call to actions. Currently only one headline is supported. */
  headlines?: ReadonlyArray<string>;
  /** Optional. The business name. */
  businessName?: string;
  /** Optional. The long headlines. Currently only one long headline is supported. */
  longHeadlines?: ReadonlyArray<string>;
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
  /** Optional. The descriptions. Currently only one description is supported. */
  descriptions?: ReadonlyArray<string>;
}

export const YoutubeSettings: Schema.Schema<YoutubeSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    businessLogoCreativeIds: Schema.optional(Schema.Array(Schema.String)),
    headlines: Schema.optional(Schema.Array(Schema.String)),
    businessName: Schema.optional(Schema.String),
    longHeadlines: Schema.optional(Schema.Array(Schema.String)),
    callToActions: Schema.optional(Schema.Array(Schema.String)),
    descriptions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "YoutubeSettings" });

export interface MeasurementPartnerWrappingData {
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
  /** Tag provided by the measurement partner during wrapping. */
  wrappedTag?: string;
}

export const MeasurementPartnerWrappingData: Schema.Schema<MeasurementPartnerWrappingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkStatus: Schema.optional(Schema.String),
    tagWrappingMode: Schema.optional(Schema.String),
    measurementPartner: Schema.optional(Schema.String),
    wrappedTag: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeasurementPartnerWrappingData" });

export interface Placement {
  /** Whether this placement is active, inactive, archived or permanently archived. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {});
  /** Optional. Whether the ads in the placement are served by another platform and CM is only used for tracking or they are served by CM. A false value indicates the ad is served by CM. */
  siteServed?: boolean;
  /** Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType. */
  pricingSchedule?: PricingSchedule;
  /** Lookback window settings for this placement. */
  lookbackConfiguration?: LookbackConfiguration;
  /** External ID for this placement. */
  externalId?: string;
  /** ID of the placement strategy assigned to this placement. */
  placementStrategyId?: string;
  /** ID of the content category assigned to this placement. */
  contentCategoryId?: string;
  /** ID of this placement's group, if applicable. */
  placementGroupId?: string;
  /** A collection of settings which affect video creatives served through this placement. Applicable to placements with IN_STREAM_VIDEO compatibility. */
  videoSettings?: VideoSettings;
  /** Dimension value for the ID of the site. This is a read-only, auto-generated field. */
  siteIdDimensionValue?: DimensionValue;
  /** Subaccount ID of this placement. This field can be left blank. */
  subaccountId?: string;
  /** Information about the most recent modification of this placement. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
  directorySiteId?: string;
  /** Optional. Conversion domain overrides for a placement. */
  conversionDomainOverride?: PlacementConversionDomainOverride;
  /** Campaign ID of this placement. This field is a required field on insertion. */
  campaignId?: string;
  /** Third-party placement status. */
  status?:
    | "PENDING_REVIEW"
    | "PAYMENT_ACCEPTED"
    | "PAYMENT_REJECTED"
    | "ACKNOWLEDGE_REJECTION"
    | "ACKNOWLEDGE_ACCEPTANCE"
    | "DRAFT"
    | (string & {});
  /** Payment source for this placement. This is a required field that is read-only after insertion. */
  paymentSource?:
    | "PLACEMENT_AGENCY_PAID"
    | "PLACEMENT_PUBLISHER_PAID"
    | (string & {});
  /** Information about the last publisher update. This is a read-only field. */
  publisherUpdateInfo?: LastModifiedInfo;
  /** Dimension value for the ID of the directory site. This is a read-only, auto-generated field. */
  directorySiteIdDimensionValue?: DimensionValue;
  /** Account ID of this placement. This field can be left blank. */
  accountId?: string;
  /** Whether creatives assigned to this placement must be SSL-compliant. */
  sslRequired?: boolean;
  /** Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView. */
  videoActiveViewOptOut?: boolean;
  /** Dimension value for the ID of the placement group. This is a read-only, auto-generated field. */
  placementGroupIdDimensionValue?: DimensionValue;
  /** ID of this placement. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this placement.This is a required field and must be less than or equal to 512 characters long. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used. */
  additionalSizes?: ReadonlyArray<Size>;
  /** Advertiser ID of this placement. This field can be left blank. */
  advertiserId?: string;
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
  /** Information about the creation of this placement. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement". */
  kind?: string;
  /** Dimension value for the ID of this placement. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Optional. Whether the placement is enabled for YouTube integration. */
  allowOnYoutube?: boolean;
  /** Whether this placement opts out of tag wrapping. */
  wrappingOptOut?: boolean;
  /** Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion. */
  size?: Size;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement. */
  primary?: boolean;
  /** Comments for this placement. */
  comment?: string;
  /** Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
  siteId?: string;
  /** Tag settings for this placement. */
  tagSetting?: TagSetting;
  /** Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect. */
  adBlockingOptOut?: boolean;
  /** Optional. YouTube settings for the placement. The placement must be enabled for YouTube to use this field. */
  youtubeSettings?: YoutubeSettings;
  /** Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements. */
  paymentApproved?: boolean;
  /** VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
  vpaidAdapterChoice?: "DEFAULT" | "FLASH" | "HTML5" | "BOTH" | (string & {});
  /** Key name of this placement. This is a read-only, auto-generated field. */
  keyName?: string;
  /** Measurement partner provided settings for a wrapped placement. */
  partnerWrappingData?: MeasurementPartnerWrappingData;
  /** Optional. Ad serving platform ID to identify the ad serving platform used by the placement. Measurement partners can use this field to add ad-server specific macros. Possible values are: * `1`, Adelphic * `2`, Adform * `3`, Adobe * `4`, Amobee * `5`, Basis (Centro) * `6`, Beeswax * `7`, Amazon * `8`, DV360 (DBM) * `9`, Innovid * `10`, MediaMath * `11`, Roku OneView DSP * `12`, TabMo Hawk * `13`, The Trade Desk * `14`, Xandr Invest DSP * `15`, Yahoo DSP * `16`, Zeta Global * `17`, Scaleout * `18`, Bidtellect * `19`, Unicorn * `20`, Teads * `21`, Quantcast * `22`, Cognitiv * `23`, AdTheorent * `24`, DeepIntent * `25`, Pulsepoint */
  adServingPlatformId?: string;
}

export const Placement: Schema.Schema<Placement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeStatus: Schema.optional(Schema.String),
    siteServed: Schema.optional(Schema.Boolean),
    pricingSchedule: Schema.optional(PricingSchedule),
    lookbackConfiguration: Schema.optional(LookbackConfiguration),
    externalId: Schema.optional(Schema.String),
    placementStrategyId: Schema.optional(Schema.String),
    contentCategoryId: Schema.optional(Schema.String),
    placementGroupId: Schema.optional(Schema.String),
    videoSettings: Schema.optional(VideoSettings),
    siteIdDimensionValue: Schema.optional(DimensionValue),
    subaccountId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    directorySiteId: Schema.optional(Schema.String),
    conversionDomainOverride: Schema.optional(
      PlacementConversionDomainOverride,
    ),
    campaignId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    paymentSource: Schema.optional(Schema.String),
    publisherUpdateInfo: Schema.optional(LastModifiedInfo),
    directorySiteIdDimensionValue: Schema.optional(DimensionValue),
    accountId: Schema.optional(Schema.String),
    sslRequired: Schema.optional(Schema.Boolean),
    videoActiveViewOptOut: Schema.optional(Schema.Boolean),
    placementGroupIdDimensionValue: Schema.optional(DimensionValue),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    additionalSizes: Schema.optional(Schema.Array(Size)),
    advertiserId: Schema.optional(Schema.String),
    tagFormats: Schema.optional(Schema.Array(Schema.String)),
    createInfo: Schema.optional(LastModifiedInfo),
    kind: Schema.optional(Schema.String),
    idDimensionValue: Schema.optional(DimensionValue),
    allowOnYoutube: Schema.optional(Schema.Boolean),
    wrappingOptOut: Schema.optional(Schema.Boolean),
    size: Schema.optional(Size),
    campaignIdDimensionValue: Schema.optional(DimensionValue),
    primary: Schema.optional(Schema.Boolean),
    comment: Schema.optional(Schema.String),
    siteId: Schema.optional(Schema.String),
    tagSetting: Schema.optional(TagSetting),
    compatibility: Schema.optional(Schema.String),
    adBlockingOptOut: Schema.optional(Schema.Boolean),
    youtubeSettings: Schema.optional(YoutubeSettings),
    paymentApproved: Schema.optional(Schema.Boolean),
    vpaidAdapterChoice: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
    partnerWrappingData: Schema.optional(MeasurementPartnerWrappingData),
    adServingPlatformId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Placement" });

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

export const ConversionError: Schema.Schema<ConversionError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionError" });

export interface OfflineUserAddressInfo {
  /** Postal code of the user's address. */
  postalCode?: string;
  /** Last name of the user, which is hashed as SHA-256 after normalized (lower case only and no punctuation). */
  hashedLastName?: string;
  /** City of the address. */
  city?: string;
  /** First name of the user, which is hashed as SHA-256 after normalized (Lowercase all characters; Remove any extra spaces before, after, and in between). */
  hashedFirstName?: string;
  /** State code of the address. */
  state?: string;
  /** 2-letter country code in ISO-3166-1 alpha-2 of the user's address. */
  countryCode?: string;
  /** The street address of the user hashed using SHA-256 hash function after normalization (lower case only). */
  hashedStreetAddress?: string;
}

export const OfflineUserAddressInfo: Schema.Schema<OfflineUserAddressInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postalCode: Schema.optional(Schema.String),
    hashedLastName: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
    hashedFirstName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    hashedStreetAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "OfflineUserAddressInfo" });

export interface UserIdentifier {
  /** Hashed email address using SHA-256 hash function after normalization. */
  hashedEmail?: string;
  /** Hashed phone number using SHA-256 hash function after normalization (E164 standard). */
  hashedPhoneNumber?: string;
  /** Address information. */
  addressInfo?: OfflineUserAddressInfo;
}

export const UserIdentifier: Schema.Schema<UserIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hashedEmail: Schema.optional(Schema.String),
    hashedPhoneNumber: Schema.optional(Schema.String),
    addressInfo: Schema.optional(OfflineUserAddressInfo),
  }).annotate({ identifier: "UserIdentifier" });

export interface CartDataItem {
  /** The shopping id of the item. Must be equal to the Merchant Center product identifier. This is a required field. */
  itemId?: string;
  /** Number of items sold. This is a required field. */
  quantity?: number;
  /** Unit price excluding tax, shipping, and any transaction level discounts. Interpreted in CM360 Floodlight config parent advertiser's currency code. This is a required field. */
  unitPrice?: number;
}

export const CartDataItem: Schema.Schema<CartDataItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    unitPrice: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CartDataItem" });

export interface CartData {
  /** Data of the items purchased. */
  items?: ReadonlyArray<CartDataItem>;
  /** The Merchant Center ID where the items are uploaded. Providing Merchant Center ID reduces ambiguity in identifying the right offer details. */
  merchantId?: string;
  /** The feed labels associated with the feed where your items are uploaded. For more information, please refer to ​​ https://support.google.com/merchants/answer/12453549. Providing the feed label reduces ambiguity in identifying the right offer details. */
  merchantFeedLabel?: string;
  /** The language associated with the feed where your items are uploaded. Use ISO 639-1 language codes. Providing the feed language reduces ambiguity in identifying the right offer details. */
  merchantFeedLanguage?: string;
}

export const CartData: Schema.Schema<CartData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(CartDataItem)),
    merchantId: Schema.optional(Schema.String),
    merchantFeedLabel: Schema.optional(Schema.String),
    merchantFeedLanguage: Schema.optional(Schema.String),
  }).annotate({ identifier: "CartData" });

export interface CustomFloodlightVariable {
  /** The value of the custom floodlight variable. The length of string must not exceed 100 characters. */
  value?: string;
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
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable". */
  kind?: string;
}

export const CustomFloodlightVariable: Schema.Schema<CustomFloodlightVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomFloodlightVariable" });

export interface Conversion {
  /** The timestamp of conversion, in Unix epoch micros. This is a required field. */
  timestampMicros?: string;
  /** The value of the conversion. Interpreted in CM360 Floodlight config parent advertiser's currency code. This is a required field. */
  value?: number;
  /** Whether this particular request may come from a user under the age of 13, under COPPA compliance. */
  childDirectedTreatment?: boolean;
  /** The user identifiers to enhance the conversion. The maximum number of user identifiers for each conversion is 5. */
  userIdentifiers?: ReadonlyArray<UserIdentifier>;
  /** The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserId orencryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid or impressionIdis a required field. */
  matchId?: string;
  /** Floodlight Configuration ID of this conversion. This is a required field. */
  floodlightConfigurationId?: string;
  /** The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid or impressionId is a required field. */
  mobileDeviceId?: string;
  /** A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid dclid, and impressionId. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
  encryptedUserIdCandidates?: ReadonlyArray<string>;
  /** The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or impressionId is a required field. */
  dclid?: string;
  /** This represents consent for ad user data. */
  adUserDataConsent?: "GRANTED" | "DENIED" | (string & {});
  /** The cart data associated with this conversion. */
  cartData?: CartData;
  /** The quantity of the conversion. This is a required field. */
  quantity?: string;
  /** Session attributes for the conversion, encoded as based64 bytes. This field may only be used when calling batchinsert; it is not supported by batchupdate. */
  sessionAttributesEncoded?: string;
  /** The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid or impressionId is a required field. */
  gclid?: string;
  /** Floodlight Activity ID of this conversion. This is a required field. */
  floodlightActivityId?: string;
  /** Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing. */
  limitAdTracking?: boolean;
  /** The impression ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, and gclid. One of these identifiers must be set. */
  impressionId?: string;
  /** The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
  encryptedUserId?: string;
  /** The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field. */
  ordinal?: string;
  /** Whether the conversion was for a non personalized ad. */
  nonPersonalizedAd?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion". */
  kind?: string;
  /** Custom floodlight variables. */
  customVariables?: ReadonlyArray<CustomFloodlightVariable>;
  /** Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR). */
  treatmentForUnderage?: boolean;
}

export const Conversion: Schema.Schema<Conversion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timestampMicros: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
    childDirectedTreatment: Schema.optional(Schema.Boolean),
    userIdentifiers: Schema.optional(Schema.Array(UserIdentifier)),
    matchId: Schema.optional(Schema.String),
    floodlightConfigurationId: Schema.optional(Schema.String),
    mobileDeviceId: Schema.optional(Schema.String),
    encryptedUserIdCandidates: Schema.optional(Schema.Array(Schema.String)),
    dclid: Schema.optional(Schema.String),
    adUserDataConsent: Schema.optional(Schema.String),
    cartData: Schema.optional(CartData),
    quantity: Schema.optional(Schema.String),
    sessionAttributesEncoded: Schema.optional(Schema.String),
    gclid: Schema.optional(Schema.String),
    floodlightActivityId: Schema.optional(Schema.String),
    limitAdTracking: Schema.optional(Schema.Boolean),
    impressionId: Schema.optional(Schema.String),
    encryptedUserId: Schema.optional(Schema.String),
    ordinal: Schema.optional(Schema.String),
    nonPersonalizedAd: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    customVariables: Schema.optional(Schema.Array(CustomFloodlightVariable)),
    treatmentForUnderage: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Conversion" });

export interface ConversionStatus {
  /** A list of errors related to this conversion. */
  errors?: ReadonlyArray<ConversionError>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus". */
  kind?: string;
  /** The original conversion that was inserted or updated. */
  conversion?: Conversion;
}

export const ConversionStatus: Schema.Schema<ConversionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(ConversionError)),
    kind: Schema.optional(Schema.String),
    conversion: Schema.optional(Conversion),
  }).annotate({ identifier: "ConversionStatus" });

export interface ConversionsBatchInsertResponse {
  /** Indicates that some or all conversions failed to insert. */
  hasFailures?: boolean;
  /** The insert status of each conversion. Statuses are returned in the same order that conversions are inserted. */
  status?: ReadonlyArray<ConversionStatus>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse". */
  kind?: string;
}

export const ConversionsBatchInsertResponse: Schema.Schema<ConversionsBatchInsertResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasFailures: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Array(ConversionStatus)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionsBatchInsertResponse" });

export interface TvCampaignSummary {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#tvCampaignSummary". */
  kind?: string;
  /** The start date of the TV campaign, inclusive. A string of the format: "yyyy-MM-dd". */
  startDate?: string;
  /** GRP of this TV campaign. */
  grp?: string;
  /** "CampaignComponentType" of this TV campaign. */
  type?:
    | "CAMPAIGN_COMPONENT_TYPE_UNSPECIFIED"
    | "COMPANY"
    | "BRAND"
    | "PRODUCT"
    | "CAMPAIGN"
    | (string & {});
  /** ID of this TV campaign. */
  id?: string;
  /** Spend across the entire TV campaign. */
  spend?: number;
  /** Impressions across the entire TV campaign. */
  impressions?: string;
  /** Identifier. Name of this TV campaign. */
  name?: string;
  /** The end date of the TV campaign, inclusive. A string of the format: "yyyy-MM-dd". */
  endDate?: string;
}

export const TvCampaignSummary: Schema.Schema<TvCampaignSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    grp: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    spend: Schema.optional(Schema.Number),
    impressions: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "TvCampaignSummary" });

export interface TvCampaignSummariesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#tvCampaignSummariesListResponse". */
  kind?: string;
  /** List of TV campaign summaries. */
  tvCampaignSummaries?: ReadonlyArray<TvCampaignSummary>;
}

export const TvCampaignSummariesListResponse: Schema.Schema<TvCampaignSummariesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    tvCampaignSummaries: Schema.optional(Schema.Array(TvCampaignSummary)),
  }).annotate({ identifier: "TvCampaignSummariesListResponse" });

export interface FsCommand {
  /** Width of the window. */
  windowWidth?: number;
  /** Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
  left?: number;
  /** Height of the window. */
  windowHeight?: number;
  /** Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
  top?: number;
  /** Position in the browser where the window will open. */
  positionOption?: "CENTERED" | "DISTANCE_FROM_TOP_LEFT_CORNER" | (string & {});
}

export const FsCommand: Schema.Schema<FsCommand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    windowWidth: Schema.optional(Schema.Number),
    left: Schema.optional(Schema.Number),
    windowHeight: Schema.optional(Schema.Number),
    top: Schema.optional(Schema.Number),
    positionOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "FsCommand" });

export interface ClickTag {
  /** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  eventName?: string;
  /** Parameter value for the specified click tag. This field contains a click-through url. */
  clickThroughUrl?: CreativeClickThroughUrl;
  /** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
  name?: string;
}

export const ClickTag: Schema.Schema<ClickTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventName: Schema.optional(Schema.String),
    clickThroughUrl: Schema.optional(CreativeClickThroughUrl),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClickTag" });

export interface UniversalAdId {
  /** Registry used for the Ad ID value. */
  registry?:
    | "OTHER"
    | "AD_ID_OFFICIAL"
    | "CLEARCAST"
    | "DCM"
    | "ARPP"
    | "CUSV"
    | (string & {});
  /** ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM. */
  value?: string;
}

export const UniversalAdId: Schema.Schema<UniversalAdId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registry: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "UniversalAdId" });

export interface Rule {
  /** A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field. */
  targetingTemplateId?: string;
  /** A user-friendly name for this rule. This is a required field. */
  name?: string;
  /** A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field. */
  assetId?: string;
}

export const Rule: Schema.Schema<Rule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetingTemplateId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    assetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rule" });

export interface CreativeAssetSelection {
  /** Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives. */
  rules?: ReadonlyArray<Rule>;
  /** A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field. */
  defaultAssetId?: string;
}

export const CreativeAssetSelection: Schema.Schema<CreativeAssetSelection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.optional(Schema.Array(Rule)),
    defaultAssetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeAssetSelection" });

export interface ThirdPartyTrackingUrl {
  /** URL for the specified third-party URL type. */
  url?: string;
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
}

export const ThirdPartyTrackingUrl: Schema.Schema<ThirdPartyTrackingUrl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    thirdPartyUrlType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThirdPartyTrackingUrl" });

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

export const TargetWindow: Schema.Schema<TargetWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customHtml: Schema.optional(Schema.String),
    targetWindowOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetWindow" });

export interface CreativeFieldAssignment {
  /** ID of the creative field value. */
  creativeFieldValueId?: string;
  /** ID of the creative field. */
  creativeFieldId?: string;
}

export const CreativeFieldAssignment: Schema.Schema<CreativeFieldAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldValueId: Schema.optional(Schema.String),
    creativeFieldId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeFieldAssignment" });

export interface Creative {
  /** HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA. */
  htmlCode?: string;
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
  /** Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE. */
  allowScriptAccess?: boolean;
  /** The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  requiredFlashVersion?: number;
  /** Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA. */
  overrideCss?: string;
  /** OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE. */
  fsCommand?: FsCommand;
  /** The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE. */
  backgroundColor?: string;
  /** Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types. */
  sslOverride?: boolean;
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
  /** Online behavioral advertising icon to be added to the creative. Applicable to the following creative types: all INSTREAM_VIDEO. */
  obaIcon?: ObaIcon;
  /** Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives. */
  dynamicAssetSelection?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative". */
  kind?: string;
  /** Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO. */
  progressOffset?: VideoOffset;
  /** Whether the creative is active. Applicable to all creative types. */
  active?: boolean;
  /** Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types. */
  idDimensionValue?: DimensionValue;
  /** Click-through URL for backup image. Applicable to ENHANCED_BANNER when the primary asset type is not HTML_IMAGE. */
  backupImageClickThroughUrl?: CreativeClickThroughUrl;
  /** Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for DISPLAY creatives with a primary asset of type HTML_IMAGE, if left blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: DISPLAY, DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. */
  size?: Size;
  /** Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
  accountId?: string;
  /** List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false. */
  companionCreatives?: ReadonlyArray<string>;
  /** ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types. */
  id?: string;
  /** Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
  authoringTool?: "NINJA" | "SWIFFY" | (string & {});
  /** Whether the creative is archived. Applicable to all creative types. */
  archived?: boolean;
  /** Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  artworkType?:
    | "ARTWORK_TYPE_FLASH"
    | "ARTWORK_TYPE_HTML5"
    | "ARTWORK_TYPE_MIXED"
    | "ARTWORK_TYPE_IMAGE"
    | (string & {});
  /** Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  studioAdvertiserId?: string;
  /** Required. Advertiser ID of this creative. This is a required field. Applicable to all creative types. */
  advertiserId?: string;
  /** Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA. */
  thirdPartyBackupImageImpressionsUrl?: string;
  /** Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT */
  creativeAssets?: ReadonlyArray<CreativeAsset>;
  /** Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  clickTags?: ReadonlyArray<ClickTag>;
  /** Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID. */
  mediaDuration?: number;
  /** Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY. */
  autoAdvanceImages?: boolean;
  /** ID of current rendering version. This is a read-only field. Applicable to all creative types. */
  renderingId?: string;
  /** Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  studioCreativeId?: string;
  /** Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
  subaccountId?: string;
  /** List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. */
  counterCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO and INSTREAM_VIDEO and VPAID. */
  universalAdId?: UniversalAdId;
  /** Required if dynamicAssetSelection is true. */
  creativeAssetSelection?: CreativeAssetSelection;
  /** Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  customKeyValues?: ReadonlyArray<string>;
  /** Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID. */
  thirdPartyUrls?: ReadonlyArray<ThirdPartyTrackingUrl>;
  /** List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE. */
  timerCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types. */
  version?: number;
  /** The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  requiredFlashPluginVersion?: string;
  /** Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  totalFileSize?: string;
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
  /** Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE. */
  backupImageReportingLabel?: string;
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
  /** Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID. */
  adParameters?: string;
  /** Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA. */
  thirdPartyRichMediaImpressionsUrl?: string;
  /** Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. */
  htmlCodeLocked?: boolean;
  /** Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  adTagKeys?: ReadonlyArray<string>;
  /** Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives. */
  commercialId?: string;
  /** Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  studioTraffickedCreativeId?: string;
  /** Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID. */
  mediaDescription?: string;
  /** Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID. */
  skippable?: boolean;
  /** Required. Name of the creative. This must be less than 256 characters long. Applicable to all creative types. */
  name?: string;
  /** Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE. */
  additionalSizes?: ReadonlyArray<Size>;
  /** Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
  latestTraffickedCreativeId?: string;
  /** Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types. */
  renderingIdDimensionValue?: DimensionValue;
  /** Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  backupImageTargetWindow?: TargetWindow;
  /** URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT */
  redirectUrl?: string;
  /** Amount of time to play the video before the skip button appears. Applicable to the following creative types: all INSTREAM_VIDEO. */
  skipOffset?: VideoOffset;
  /** Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  convertFlashToHtml5?: boolean;
  /** Creative field assignments for this creative. Applicable to all creative types. */
  creativeFieldAssignments?: ReadonlyArray<CreativeFieldAssignment>;
  /** Creative last modification information. This is a read-only field. Applicable to all creative types. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types. */
  sslCompliant?: boolean;
  /** List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
  exitCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
}

export const Creative: Schema.Schema<Creative> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    htmlCode: Schema.optional(Schema.String),
    compatibility: Schema.optional(Schema.Array(Schema.String)),
    allowScriptAccess: Schema.optional(Schema.Boolean),
    requiredFlashVersion: Schema.optional(Schema.Number),
    overrideCss: Schema.optional(Schema.String),
    fsCommand: Schema.optional(FsCommand),
    backgroundColor: Schema.optional(Schema.String),
    sslOverride: Schema.optional(Schema.Boolean),
    backupImageFeatures: Schema.optional(Schema.Array(Schema.String)),
    obaIcon: Schema.optional(ObaIcon),
    dynamicAssetSelection: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    progressOffset: Schema.optional(VideoOffset),
    active: Schema.optional(Schema.Boolean),
    idDimensionValue: Schema.optional(DimensionValue),
    backupImageClickThroughUrl: Schema.optional(CreativeClickThroughUrl),
    size: Schema.optional(Size),
    accountId: Schema.optional(Schema.String),
    companionCreatives: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    authoringTool: Schema.optional(Schema.String),
    archived: Schema.optional(Schema.Boolean),
    artworkType: Schema.optional(Schema.String),
    studioAdvertiserId: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    thirdPartyBackupImageImpressionsUrl: Schema.optional(Schema.String),
    creativeAssets: Schema.optional(Schema.Array(CreativeAsset)),
    clickTags: Schema.optional(Schema.Array(ClickTag)),
    mediaDuration: Schema.optional(Schema.Number),
    autoAdvanceImages: Schema.optional(Schema.Boolean),
    renderingId: Schema.optional(Schema.String),
    studioCreativeId: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    counterCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
    universalAdId: Schema.optional(UniversalAdId),
    creativeAssetSelection: Schema.optional(CreativeAssetSelection),
    customKeyValues: Schema.optional(Schema.Array(Schema.String)),
    thirdPartyUrls: Schema.optional(Schema.Array(ThirdPartyTrackingUrl)),
    timerCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
    version: Schema.optional(Schema.Number),
    requiredFlashPluginVersion: Schema.optional(Schema.String),
    totalFileSize: Schema.optional(Schema.String),
    authoringSource: Schema.optional(Schema.String),
    backupImageReportingLabel: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    adParameters: Schema.optional(Schema.String),
    thirdPartyRichMediaImpressionsUrl: Schema.optional(Schema.String),
    htmlCodeLocked: Schema.optional(Schema.Boolean),
    adTagKeys: Schema.optional(Schema.Array(Schema.String)),
    commercialId: Schema.optional(Schema.String),
    studioTraffickedCreativeId: Schema.optional(Schema.String),
    mediaDescription: Schema.optional(Schema.String),
    skippable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    additionalSizes: Schema.optional(Schema.Array(Size)),
    latestTraffickedCreativeId: Schema.optional(Schema.String),
    renderingIdDimensionValue: Schema.optional(DimensionValue),
    backupImageTargetWindow: Schema.optional(TargetWindow),
    redirectUrl: Schema.optional(Schema.String),
    skipOffset: Schema.optional(VideoOffset),
    convertFlashToHtml5: Schema.optional(Schema.Boolean),
    creativeFieldAssignments: Schema.optional(
      Schema.Array(CreativeFieldAssignment),
    ),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    sslCompliant: Schema.optional(Schema.Boolean),
    exitCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  }).annotate({ identifier: "Creative" });

export interface CreativesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Creative collection. */
  creatives?: ReadonlyArray<Creative>;
}

export const CreativesListResponse: Schema.Schema<CreativesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    creatives: Schema.optional(Schema.Array(Creative)),
  }).annotate({ identifier: "CreativesListResponse" });

export interface TagData {
  /** Tag string to record a click. */
  clickTag?: string;
  /** Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
  creativeId?: string;
  /** Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
  adId?: string;
  /** Tag string for serving an ad. */
  impressionTag?: string;
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
}

export const TagData: Schema.Schema<TagData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clickTag: Schema.optional(Schema.String),
    creativeId: Schema.optional(Schema.String),
    adId: Schema.optional(Schema.String),
    impressionTag: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
  }).annotate({ identifier: "TagData" });

export interface PlacementTag {
  /** Placement ID */
  placementId?: string;
  /** Tags generated for this placement. */
  tagDatas?: ReadonlyArray<TagData>;
}

export const PlacementTag: Schema.Schema<PlacementTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placementId: Schema.optional(Schema.String),
    tagDatas: Schema.optional(Schema.Array(TagData)),
  }).annotate({ identifier: "PlacementTag" });

export interface PlacementsGenerateTagsResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse". */
  kind?: string;
  /** Set of generated tags for the specified placements. */
  placementTags?: ReadonlyArray<PlacementTag>;
}

export const PlacementsGenerateTagsResponse: Schema.Schema<PlacementsGenerateTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    placementTags: Schema.optional(Schema.Array(PlacementTag)),
  }).annotate({ identifier: "PlacementsGenerateTagsResponse" });

export interface EventTag {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag". */
  kind?: string;
  /** Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field. */
  type?:
    | "IMPRESSION_IMAGE_EVENT_TAG"
    | "IMPRESSION_JAVASCRIPT_EVENT_TAG"
    | "CLICK_THROUGH_EVENT_TAG"
    | (string & {});
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Subaccount ID of this event tag. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Whether this tag is SSL-compliant or not. This is a read-only field. */
  sslCompliant?: boolean;
  /** Campaign ID of this event tag. This field or the advertiserId field is required on insertion. */
  campaignId?: string;
  /** Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field. */
  status?: "ENABLED" | "DISABLED" | (string & {});
  /** Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter. */
  siteIds?: ReadonlyArray<string>;
  /** Account ID of this event tag. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type. */
  urlEscapeLevels?: number;
  /** Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion. */
  url?: string;
  /** ID of this event tag. This is a read-only, auto-generated field. */
  id?: string;
  /** Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network. */
  excludeFromAdxRequests?: boolean;
  /** Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads. */
  enabledByDefault?: boolean;
  /** Name of this event tag. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of this event tag. This field or the campaignId field is required on insertion. */
  advertiserId?: string;
  /** Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites. */
  siteFilterType?: "ALLOWLIST" | "BLOCKLIST" | (string & {});
}

export const EventTag: Schema.Schema<EventTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    campaignIdDimensionValue: Schema.optional(DimensionValue),
    subaccountId: Schema.optional(Schema.String),
    sslCompliant: Schema.optional(Schema.Boolean),
    campaignId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    siteIds: Schema.optional(Schema.Array(Schema.String)),
    accountId: Schema.optional(Schema.String),
    urlEscapeLevels: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    excludeFromAdxRequests: Schema.optional(Schema.Boolean),
    enabledByDefault: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    advertiserId: Schema.optional(Schema.String),
    siteFilterType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventTag" });

export interface EventTagsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse". */
  kind?: string;
  /** Event tag collection. */
  eventTags?: ReadonlyArray<EventTag>;
}

export const EventTagsListResponse: Schema.Schema<EventTagsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    eventTags: Schema.optional(Schema.Array(EventTag)),
  }).annotate({ identifier: "EventTagsListResponse" });

export interface ThirdPartyAuthenticationToken {
  /** Name of the third-party authentication token. */
  name?: string;
  /** Value of the third-party authentication token. This is a read-only, auto-generated field. */
  value?: string;
}

export const ThirdPartyAuthenticationToken: Schema.Schema<ThirdPartyAuthenticationToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThirdPartyAuthenticationToken" });

export interface OmnitureSettings {
  /** Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled. */
  omnitureIntegrationEnabled?: boolean;
  /** Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true. */
  omnitureCostDataEnabled?: boolean;
}

export const OmnitureSettings: Schema.Schema<OmnitureSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    omnitureIntegrationEnabled: Schema.optional(Schema.Boolean),
    omnitureCostDataEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OmnitureSettings" });

export interface TagSettings {
  /** Whether dynamic floodlight tags are enabled. */
  dynamicTagEnabled?: boolean;
  /** Whether image tags are enabled. */
  imageTagEnabled?: boolean;
}

export const TagSettings: Schema.Schema<TagSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicTagEnabled: Schema.optional(Schema.Boolean),
    imageTagEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TagSettings" });

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
  /** User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>". */
  reportName?: string;
  /** Data type for the variable. This is a required field. */
  dataType?: "STRING" | "NUMBER" | (string & {});
}

export const UserDefinedVariableConfiguration: Schema.Schema<UserDefinedVariableConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variableType: Schema.optional(Schema.String),
    reportName: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserDefinedVariableConfiguration" });

export interface FloodlightConfiguration {
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of the parent advertiser of this floodlight configuration. */
  advertiserId?: string;
  /** List of third-party authentication tokens enabled for this configuration. */
  thirdPartyAuthenticationTokens?: ReadonlyArray<ThirdPartyAuthenticationToken>;
  /** Account ID of this floodlight configuration. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Whether in-app attribution tracking is enabled. */
  inAppAttributionTrackingEnabled?: boolean;
  /** ID of this floodlight configuration. This is a read-only, auto-generated field. */
  id?: string;
  /** Settings for Campaign Manager Omniture integration. */
  omnitureSettings?: OmnitureSettings;
  firstDayOfWeek?: "SUNDAY" | "MONDAY" | (string & {});
  /** Configuration settings for dynamic and image floodlight tags. */
  tagSettings?: TagSettings;
  /** Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** List of user defined variables enabled for this configuration. */
  userDefinedVariableConfigurations?: ReadonlyArray<UserDefinedVariableConfiguration>;
  /** Types of attribution options for natural search conversions. */
  naturalSearchConversionAttributionOption?:
    | "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    | "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    | "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
    | (string & {});
  /** Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
  exposureToConversionEnabled?: boolean;
  /** Custom Viewability metric for the floodlight configuration. */
  customViewabilityMetric?: CustomViewabilityMetric;
  /** Lookback window settings for this floodlight configuration. */
  lookbackConfiguration?: LookbackConfiguration;
  /** Whether advertiser data is shared with Google Analytics. */
  analyticsDataSharingEnabled?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration". */
  kind?: string;
  /** Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
}

export const FloodlightConfiguration: Schema.Schema<FloodlightConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    advertiserId: Schema.optional(Schema.String),
    thirdPartyAuthenticationTokens: Schema.optional(
      Schema.Array(ThirdPartyAuthenticationToken),
    ),
    accountId: Schema.optional(Schema.String),
    inAppAttributionTrackingEnabled: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    omnitureSettings: Schema.optional(OmnitureSettings),
    firstDayOfWeek: Schema.optional(Schema.String),
    tagSettings: Schema.optional(TagSettings),
    subaccountId: Schema.optional(Schema.String),
    userDefinedVariableConfigurations: Schema.optional(
      Schema.Array(UserDefinedVariableConfiguration),
    ),
    naturalSearchConversionAttributionOption: Schema.optional(Schema.String),
    exposureToConversionEnabled: Schema.optional(Schema.Boolean),
    customViewabilityMetric: Schema.optional(CustomViewabilityMetric),
    lookbackConfiguration: Schema.optional(LookbackConfiguration),
    analyticsDataSharingEnabled: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    idDimensionValue: Schema.optional(DimensionValue),
  }).annotate({ identifier: "FloodlightConfiguration" });

export interface AccountActiveAdSummary {
  /** ID of the account. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary". */
  kind?: string;
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
  /** Ads that can be activated for the account. */
  availableAds?: string;
  /** Ads that have been activated for the account */
  activeAds?: string;
}

export const AccountActiveAdSummary: Schema.Schema<AccountActiveAdSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    activeAdsLimitTier: Schema.optional(Schema.String),
    availableAds: Schema.optional(Schema.String),
    activeAds: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountActiveAdSummary" });

export interface FrequencyCap {
  /** Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive. */
  impressions?: string;
  /** Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive. */
  duration?: string;
}

export const FrequencyCap: Schema.Schema<FrequencyCap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impressions: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "FrequencyCap" });

export interface DeliverySchedule {
  /** Limit on the number of times an individual user can be served the ad within a specified period of time. */
  frequencyCap?: FrequencyCap;
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
  /** Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive. */
  impressionRatio?: string;
  /** Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals. */
  hardCutoff?: boolean;
}

export const DeliverySchedule: Schema.Schema<DeliverySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frequencyCap: Schema.optional(FrequencyCap),
    priority: Schema.optional(Schema.String),
    impressionRatio: Schema.optional(Schema.String),
    hardCutoff: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeliverySchedule" });

export interface Browser {
  /** Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
  minorVersion?: string;
  /** DART ID of this browser. This is the ID used when generating reports. */
  dartId?: string;
  /** Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
  majorVersion?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser". */
  kind?: string;
  /** ID referring to this grouping of browser and version numbers. This is the ID used for targeting. */
  browserVersionId?: string;
  /** Name of this browser. */
  name?: string;
}

export const Browser: Schema.Schema<Browser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minorVersion: Schema.optional(Schema.String),
    dartId: Schema.optional(Schema.String),
    majorVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    browserVersionId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Browser" });

export interface OperatingSystem {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem". */
  kind?: string;
  /** Name of this operating system. */
  name?: string;
  /** Whether this operating system is for desktop. */
  desktop?: boolean;
  /** Whether this operating system is for mobile. */
  mobile?: boolean;
  /** DART ID of this operating system. This is the ID used for targeting. */
  dartId?: string;
}

export const OperatingSystem: Schema.Schema<OperatingSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    desktop: Schema.optional(Schema.Boolean),
    mobile: Schema.optional(Schema.Boolean),
    dartId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperatingSystem" });

export interface OperatingSystemVersion {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion". */
  kind?: string;
  /** Name of this operating system version. */
  name?: string;
  /** ID of this operating system version. */
  id?: string;
  /** Minor version (number after the first dot) of this operating system version. */
  minorVersion?: string;
  /** Major version (leftmost number) of this operating system version. */
  majorVersion?: string;
  /** Operating system of this operating system version. */
  operatingSystem?: OperatingSystem;
}

export const OperatingSystemVersion: Schema.Schema<OperatingSystemVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    minorVersion: Schema.optional(Schema.String),
    majorVersion: Schema.optional(Schema.String),
    operatingSystem: Schema.optional(OperatingSystem),
  }).annotate({ identifier: "OperatingSystemVersion" });

export interface MobileCarrier {
  /** DART ID of the country to which this mobile carrier belongs. */
  countryDartId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier". */
  kind?: string;
  /** Name of this mobile carrier. */
  name?: string;
  /** Country code of the country to which this mobile carrier belongs. */
  countryCode?: string;
  /** ID of this mobile carrier. */
  id?: string;
}

export const MobileCarrier: Schema.Schema<MobileCarrier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countryDartId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileCarrier" });

export interface ConnectionType {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType". */
  kind?: string;
  /** ID of this connection type. */
  id?: string;
  /** Name of this connection type. */
  name?: string;
}

export const ConnectionType: Schema.Schema<ConnectionType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionType" });

export interface PlatformType {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType". */
  kind?: string;
  /** ID of this platform type. */
  id?: string;
  /** Name of this platform type. */
  name?: string;
}

export const PlatformType: Schema.Schema<PlatformType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlatformType" });

export interface TechnologyTargeting {
  /** Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated. */
  browsers?: ReadonlyArray<Browser>;
  /** Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems. */
  operatingSystemVersions?: ReadonlyArray<OperatingSystemVersion>;
  /** Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system. */
  operatingSystems?: ReadonlyArray<OperatingSystem>;
  /** Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes. */
  mobileCarriers?: ReadonlyArray<MobileCarrier>;
  /** Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated. */
  connectionTypes?: ReadonlyArray<ConnectionType>;
  /** Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated. */
  platformTypes?: ReadonlyArray<PlatformType>;
}

export const TechnologyTargeting: Schema.Schema<TechnologyTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    browsers: Schema.optional(Schema.Array(Browser)),
    operatingSystemVersions: Schema.optional(
      Schema.Array(OperatingSystemVersion),
    ),
    operatingSystems: Schema.optional(Schema.Array(OperatingSystem)),
    mobileCarriers: Schema.optional(Schema.Array(MobileCarrier)),
    connectionTypes: Schema.optional(Schema.Array(ConnectionType)),
    platformTypes: Schema.optional(Schema.Array(PlatformType)),
  }).annotate({ identifier: "TechnologyTargeting" });

export interface KeyValueTargetingExpression {
  /** Keyword expression being targeted by the ad. */
  expression?: string;
}

export const KeyValueTargetingExpression: Schema.Schema<KeyValueTargetingExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "KeyValueTargetingExpression" });

export interface ClickThroughUrl {
  /** Whether the campaign default landing page is used. */
  defaultLandingPage?: boolean;
  /** ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false. */
  landingPageId?: string;
  /** Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset. */
  customClickThroughUrl?: string;
  /** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field. */
  computedClickThroughUrl?: string;
}

export const ClickThroughUrl: Schema.Schema<ClickThroughUrl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultLandingPage: Schema.optional(Schema.Boolean),
    landingPageId: Schema.optional(Schema.String),
    customClickThroughUrl: Schema.optional(Schema.String),
    computedClickThroughUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClickThroughUrl" });

export interface RichMediaExitOverride {
  /** ID for the override to refer to a specific exit in the creative. */
  exitId?: string;
  /** Click-through URL of this rich media exit override. Applicable if the enabled field is set to true. */
  clickThroughUrl?: ClickThroughUrl;
  /** Whether to use the clickThroughUrl. If false, the creative-level exit will be used. */
  enabled?: boolean;
}

export const RichMediaExitOverride: Schema.Schema<RichMediaExitOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exitId: Schema.optional(Schema.String),
    clickThroughUrl: Schema.optional(ClickThroughUrl),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RichMediaExitOverride" });

export interface CompanionClickThroughOverride {
  /** Click-through URL of this companion click-through override. */
  clickThroughUrl?: ClickThroughUrl;
  /** ID of the creative for this companion click-through override. */
  creativeId?: string;
}

export const CompanionClickThroughOverride: Schema.Schema<CompanionClickThroughOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clickThroughUrl: Schema.optional(ClickThroughUrl),
    creativeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompanionClickThroughOverride" });

export interface CreativeGroupAssignment {
  /** ID of the creative group to be assigned. */
  creativeGroupId?: string;
  /** Creative group number of the creative group assignment. */
  creativeGroupNumber?:
    | "CREATIVE_GROUP_ONE"
    | "CREATIVE_GROUP_TWO"
    | (string & {});
}

export const CreativeGroupAssignment: Schema.Schema<CreativeGroupAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeGroupId: Schema.optional(Schema.String),
    creativeGroupNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeGroupAssignment" });

export interface CreativeAssignment {
  /** Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR */
  richMediaExitOverrides?: ReadonlyArray<RichMediaExitOverride>;
  /** ID of the creative to be assigned. This is a required field. */
  creativeId?: string;
  /** Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive. */
  sequence?: number;
  /** Dimension value for the ID of the creative. This is a read-only, auto-generated field. */
  creativeIdDimensionValue?: DimensionValue;
  /** Whether this creative assignment is active. When true, the creative will be included in the ad's rotation. */
  active?: boolean;
  /** Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO. */
  applyEventTags?: boolean;
  /** Companion creative overrides for this creative assignment. Applicable to video ads. */
  companionCreativeOverrides?: ReadonlyArray<CompanionClickThroughOverride>;
  /** Click-through URL of the creative assignment. */
  clickThroughUrl?: ClickThroughUrl;
  /** Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1. */
  weight?: number;
  /** Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments. */
  creativeGroupAssignments?: ReadonlyArray<CreativeGroupAssignment>;
  /** Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslCompliant?: boolean;
  startTime?: string;
  endTime?: string;
}

export const CreativeAssignment: Schema.Schema<CreativeAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    richMediaExitOverrides: Schema.optional(
      Schema.Array(RichMediaExitOverride),
    ),
    creativeId: Schema.optional(Schema.String),
    sequence: Schema.optional(Schema.Number),
    creativeIdDimensionValue: Schema.optional(DimensionValue),
    active: Schema.optional(Schema.Boolean),
    applyEventTags: Schema.optional(Schema.Boolean),
    companionCreativeOverrides: Schema.optional(
      Schema.Array(CompanionClickThroughOverride),
    ),
    clickThroughUrl: Schema.optional(ClickThroughUrl),
    weight: Schema.optional(Schema.Number),
    creativeGroupAssignments: Schema.optional(
      Schema.Array(CreativeGroupAssignment),
    ),
    sslCompliant: Schema.optional(Schema.Boolean),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeAssignment" });

export interface CreativeRotation {
  /** Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad. */
  creativeOptimizationConfigurationId?: string;
  /** Type of creative rotation. Can be used to specify whether to use sequential or random rotation. */
  type?:
    | "CREATIVE_ROTATION_TYPE_SEQUENTIAL"
    | "CREATIVE_ROTATION_TYPE_RANDOM"
    | (string & {});
  /** Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM. */
  weightCalculationStrategy?:
    | "WEIGHT_STRATEGY_EQUAL"
    | "WEIGHT_STRATEGY_CUSTOM"
    | "WEIGHT_STRATEGY_HIGHEST_CTR"
    | "WEIGHT_STRATEGY_OPTIMIZED"
    | (string & {});
  /** Creative assignments in this creative rotation. */
  creativeAssignments?: ReadonlyArray<CreativeAssignment>;
}

export const CreativeRotation: Schema.Schema<CreativeRotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeOptimizationConfigurationId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    weightCalculationStrategy: Schema.optional(Schema.String),
    creativeAssignments: Schema.optional(Schema.Array(CreativeAssignment)),
  }).annotate({ identifier: "CreativeRotation" });

export interface PlacementAssignment {
  /** ID of the placement to be assigned. This is a required field. */
  placementId?: string;
  /** Whether this placement assignment is active. When true, the placement will be included in the ad's rotation. */
  active?: boolean;
  /** Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslRequired?: boolean;
  /** Dimension value for the ID of the placement. This is a read-only, auto-generated field. */
  placementIdDimensionValue?: DimensionValue;
}

export const PlacementAssignment: Schema.Schema<PlacementAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    placementId: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    sslRequired: Schema.optional(Schema.Boolean),
    placementIdDimensionValue: Schema.optional(DimensionValue),
  }).annotate({ identifier: "PlacementAssignment" });

export interface EventTagOverride {
  /** Whether this override is enabled. */
  enabled?: boolean;
  /** ID of this event tag override. This is a read-only, auto-generated field. */
  id?: string;
}

export const EventTagOverride: Schema.Schema<EventTagOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventTagOverride" });

export interface ClickThroughUrlSuffixProperties {
  /** Whether this entity should override the inherited click-through URL suffix with its own defined value. */
  overrideInheritedSuffix?: boolean;
  /** Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long. */
  clickThroughUrlSuffix?: string;
}

export const ClickThroughUrlSuffixProperties: Schema.Schema<ClickThroughUrlSuffixProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overrideInheritedSuffix: Schema.optional(Schema.Boolean),
    clickThroughUrlSuffix: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClickThroughUrlSuffixProperties" });

export interface Language {
  /** Language ID of this language. This is the ID used for targeting and generating reports. */
  id?: string;
  /** Name of this language. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#language". */
  kind?: string;
  /** Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese. */
  languageCode?: string;
}

export const Language: Schema.Schema<Language> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Language" });

export interface LanguageTargeting {
  /** Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated. */
  languages?: ReadonlyArray<Language>;
}

export const LanguageTargeting: Schema.Schema<LanguageTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languages: Schema.optional(Schema.Array(Language)),
  }).annotate({ identifier: "LanguageTargeting" });

export interface Country {
  /** Name of this country. */
  name?: string;
  /** Whether ad serving supports secure servers in this country. */
  sslEnabled?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#country". */
  kind?: string;
  /** DART ID of this country. This is the ID used for targeting and generating reports. */
  dartId?: string;
  /** Country code. */
  countryCode?: string;
}

export const Country: Schema.Schema<Country> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    sslEnabled: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    dartId: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Country" });

export interface Region {
  /** DART ID of this region. */
  dartId?: string;
  /** Country code of the country to which this region belongs. */
  countryCode?: string;
  /** Region code. */
  regionCode?: string;
  /** Name of this region. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#region". */
  kind?: string;
  /** DART ID of the country to which this region belongs. */
  countryDartId?: string;
}

export const Region: Schema.Schema<Region> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dartId: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    countryDartId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Region" });

export interface City {
  /** Name of this city. */
  name?: string;
  /** ID of the metro region (DMA) to which this city belongs. */
  metroDmaId?: string;
  /** Metro region code of the metro region (DMA) to which this city belongs. */
  metroCode?: string;
  /** DART ID of this city. This is the ID used for targeting and generating reports. */
  dartId?: string;
  /** Country code of the country to which this city belongs. */
  countryCode?: string;
  /** Region code of the region to which this city belongs. */
  regionCode?: string;
  /** DART ID of the region to which this city belongs. */
  regionDartId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#city". */
  kind?: string;
  /** DART ID of the country to which this city belongs. */
  countryDartId?: string;
}

export const City: Schema.Schema<City> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metroDmaId: Schema.optional(Schema.String),
    metroCode: Schema.optional(Schema.String),
    dartId: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    regionDartId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    countryDartId: Schema.optional(Schema.String),
  }).annotate({ identifier: "City" });

export interface Metro {
  /** DART ID of the country to which this metro region belongs. */
  countryDartId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro". */
  kind?: string;
  /** DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code. */
  dmaId?: string;
  /** Name of this metro region. */
  name?: string;
  /** DART ID of this metro region. */
  dartId?: string;
  /** Country code of the country to which this metro region belongs. */
  countryCode?: string;
  /** Metro code of this metro region. This is equivalent to dma_id. */
  metroCode?: string;
}

export const Metro: Schema.Schema<Metro> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countryDartId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    dmaId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dartId: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    metroCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Metro" });

export interface PostalCode {
  /** ID of this postal code. */
  id?: string;
  /** Postal code. This is equivalent to the id field. */
  code?: string;
  /** Country code of the country to which this postal code belongs. */
  countryCode?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode". */
  kind?: string;
  /** DART ID of the country to which this postal code belongs. */
  countryDartId?: string;
}

export const PostalCode: Schema.Schema<PostalCode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    countryDartId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostalCode" });

export interface GeoTargeting {
  /** Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country. */
  countries?: ReadonlyArray<Country>;
  /** Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region. */
  regions?: ReadonlyArray<Region>;
  /** Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city. */
  cities?: ReadonlyArray<City>;
  /** Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro. */
  metros?: ReadonlyArray<Metro>;
  /** Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code. */
  postalCodes?: ReadonlyArray<PostalCode>;
  /** Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad. */
  excludeCountries?: boolean;
}

export const GeoTargeting: Schema.Schema<GeoTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countries: Schema.optional(Schema.Array(Country)),
    regions: Schema.optional(Schema.Array(Region)),
    cities: Schema.optional(Schema.Array(City)),
    metros: Schema.optional(Schema.Array(Metro)),
    postalCodes: Schema.optional(Schema.Array(PostalCode)),
    excludeCountries: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GeoTargeting" });

export interface ListTargetingExpression {
  /** Expression describing which lists are being targeted by the ad. */
  expression?: string;
}

export const ListTargetingExpression: Schema.Schema<ListTargetingExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTargetingExpression" });

export interface ContextualKeyword {
  /** The keyword that can be targeted by ads. */
  keyword?: string;
}

export const ContextualKeyword: Schema.Schema<ContextualKeyword> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyword: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContextualKeyword" });

export interface ContextualKeywordTargeting {
  /** Contextual keywords that this ad targets */
  keywords?: ReadonlyArray<ContextualKeyword>;
}

export const ContextualKeywordTargeting: Schema.Schema<ContextualKeywordTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keywords: Schema.optional(Schema.Array(ContextualKeyword)),
  }).annotate({ identifier: "ContextualKeywordTargeting" });

export interface Ad {
  /** Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. */
  size?: Size;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD. */
  deliverySchedule?: DeliverySchedule;
  /** Information about the creation of this ad. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  technologyTargeting?: TechnologyTargeting;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad". */
  kind?: string;
  /** Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  keyValueTargetingExpression?: KeyValueTargetingExpression;
  /** Whether this ad is active. When true, archived must be false. */
  active?: boolean;
  /** Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource). */
  type?:
    | "AD_SERVING_STANDARD_AD"
    | "AD_SERVING_DEFAULT_AD"
    | "AD_SERVING_CLICK_TRACKER"
    | "AD_SERVING_TRACKING"
    | "AD_SERVING_BRAND_SAFE_AD"
    | (string & {});
  /** Dimension value for the ID of this ad. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD. */
  audienceSegmentId?: string;
  /** Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment . */
  creativeRotation?: CreativeRotation;
  /** Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** Default click-through event tag properties for this ad. */
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
  startTime?: string;
  endTime?: string;
  /** Placement assignments for this ad. */
  placementAssignments?: ReadonlyArray<PlacementAssignment>;
  /** Event tag overrides for this ad. */
  eventTagOverrides?: ReadonlyArray<EventTagOverride>;
  /** Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative. */
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
  /** Subaccount ID of this ad. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Information about the most recent modification of this ad. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslCompliant?: boolean;
  /** Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments. */
  creativeGroupAssignments?: ReadonlyArray<CreativeGroupAssignment>;
  /** Comments for this ad. */
  comments?: string;
  /** Campaign ID of this ad. This is a required field on insertion. */
  campaignId?: string;
  /** Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER. */
  clickThroughUrl?: ClickThroughUrl;
  /** Language targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  languageTargeting?: LanguageTargeting;
  /** Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD. */
  targetingTemplateId?: string;
  /** Whether this ad is archived. When true, active must be false. */
  archived?: boolean;
  /** Name of this ad. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of this ad. This is a required field on insertion. */
  advertiserId?: string;
  /** Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert. */
  dynamicClickTracker?: boolean;
  /** Account ID of this ad. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated. */
  sslRequired?: boolean;
  /** Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  geoTargeting?: GeoTargeting;
  /** Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  remarketingListExpression?: ListTargetingExpression;
  /** Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD. */
  dayPartTargeting?: DayPartTargeting;
  /** ID of this ad. This is a read-only, auto-generated field. */
  id?: string;
  /** Optional. Contextual keyword targeting information for this ad. */
  contextualKeywordTargeting?: ContextualKeywordTargeting;
}

export const Ad: Schema.Schema<Ad> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  size: Schema.optional(Size),
  campaignIdDimensionValue: Schema.optional(DimensionValue),
  deliverySchedule: Schema.optional(DeliverySchedule),
  createInfo: Schema.optional(LastModifiedInfo),
  technologyTargeting: Schema.optional(TechnologyTargeting),
  kind: Schema.optional(Schema.String),
  keyValueTargetingExpression: Schema.optional(KeyValueTargetingExpression),
  active: Schema.optional(Schema.Boolean),
  type: Schema.optional(Schema.String),
  idDimensionValue: Schema.optional(DimensionValue),
  audienceSegmentId: Schema.optional(Schema.String),
  creativeRotation: Schema.optional(CreativeRotation),
  compatibility: Schema.optional(Schema.String),
  defaultClickThroughEventTagProperties: Schema.optional(
    DefaultClickThroughEventTagProperties,
  ),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  placementAssignments: Schema.optional(Schema.Array(PlacementAssignment)),
  eventTagOverrides: Schema.optional(Schema.Array(EventTagOverride)),
  clickThroughUrlSuffixProperties: Schema.optional(
    ClickThroughUrlSuffixProperties,
  ),
  subaccountId: Schema.optional(Schema.String),
  lastModifiedInfo: Schema.optional(LastModifiedInfo),
  sslCompliant: Schema.optional(Schema.Boolean),
  creativeGroupAssignments: Schema.optional(
    Schema.Array(CreativeGroupAssignment),
  ),
  comments: Schema.optional(Schema.String),
  campaignId: Schema.optional(Schema.String),
  clickThroughUrl: Schema.optional(ClickThroughUrl),
  languageTargeting: Schema.optional(LanguageTargeting),
  targetingTemplateId: Schema.optional(Schema.String),
  archived: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  advertiserIdDimensionValue: Schema.optional(DimensionValue),
  advertiserId: Schema.optional(Schema.String),
  dynamicClickTracker: Schema.optional(Schema.Boolean),
  accountId: Schema.optional(Schema.String),
  sslRequired: Schema.optional(Schema.Boolean),
  geoTargeting: Schema.optional(GeoTargeting),
  remarketingListExpression: Schema.optional(ListTargetingExpression),
  dayPartTargeting: Schema.optional(DayPartTargeting),
  id: Schema.optional(Schema.String),
  contextualKeywordTargeting: Schema.optional(ContextualKeywordTargeting),
}).annotate({ identifier: "Ad" });

export interface AdsListResponse {
  /** Ad collection. */
  ads?: ReadonlyArray<Ad>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const AdsListResponse: Schema.Schema<AdsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ads: Schema.optional(Schema.Array(Ad)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdsListResponse" });

export interface OrderContact {
  /** Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID. */
  contactInfo?: string;
  /** Name of this contact. */
  contactName?: string;
  /** Type of this contact. */
  contactType?:
    | "PLANNING_ORDER_CONTACT_BUYER_CONTACT"
    | "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"
    | "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
    | (string & {});
  /** Title of this contact. */
  contactTitle?: string;
  /** ID of the user profile containing the signature that will be embedded into order documents. */
  signatureUserProfileId?: string;
}

export const OrderContact: Schema.Schema<OrderContact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contactInfo: Schema.optional(Schema.String),
    contactName: Schema.optional(Schema.String),
    contactType: Schema.optional(Schema.String),
    contactTitle: Schema.optional(Schema.String),
    signatureUserProfileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrderContact" });

export interface Order {
  /** Account ID of this order. */
  accountId?: string;
  /** Notes of this order. */
  notes?: string;
  /** ID of this order. This is a read-only, auto-generated field. */
  id?: string;
  /** Project ID of this order. */
  projectId?: string;
  /** Name of this order. */
  name?: string;
  /** ID of the terms and conditions template used in this order. */
  planningTermId?: string;
  /** Advertiser ID of this order. */
  advertiserId?: string;
  /** Terms and conditions of this order. */
  termsAndConditions?: string;
  /** Free-form site names this order is associated with. */
  siteNames?: ReadonlyArray<string>;
  /** Contacts for this order. */
  contacts?: ReadonlyArray<OrderContact>;
  /** Name of the seller organization. */
  sellerOrganizationName?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#order". */
  kind?: string;
  /** IDs for users that have to approve documents created for this order. */
  approverUserProfileIds?: ReadonlyArray<string>;
  /** Name of the buyer organization. */
  buyerOrganizationName?: string;
  /** Subaccount ID of this order. */
  subaccountId?: string;
  /** Buyer invoice ID associated with this order. */
  buyerInvoiceId?: string;
  /** Information about the most recent modification of this order. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Seller order ID associated with this order. */
  sellerOrderId?: string;
  /** Comments in this order. */
  comments?: string;
  /** Site IDs this order is associated with. */
  siteId?: ReadonlyArray<string>;
}

export const Order: Schema.Schema<Order> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    planningTermId: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    termsAndConditions: Schema.optional(Schema.String),
    siteNames: Schema.optional(Schema.Array(Schema.String)),
    contacts: Schema.optional(Schema.Array(OrderContact)),
    sellerOrganizationName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    approverUserProfileIds: Schema.optional(Schema.Array(Schema.String)),
    buyerOrganizationName: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    buyerInvoiceId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    sellerOrderId: Schema.optional(Schema.String),
    comments: Schema.optional(Schema.String),
    siteId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Order" });

export interface OrdersListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Order collection. */
  orders?: ReadonlyArray<Order>;
}

export const OrdersListResponse: Schema.Schema<OrdersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    orders: Schema.optional(Schema.Array(Order)),
  }).annotate({ identifier: "OrdersListResponse" });

export interface BillingRateTieredRate {
  /** The maximum for this tier range. */
  highValue?: string;
  /** Rate in micros for this tier. */
  rateInMicros?: string;
  /** The minimum for this tier range. */
  lowValue?: string;
}

export const BillingRateTieredRate: Schema.Schema<BillingRateTieredRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highValue: Schema.optional(Schema.String),
    rateInMicros: Schema.optional(Schema.String),
    lowValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingRateTieredRate" });

export interface UserProfile {
  /** The user name. */
  userName?: string;
  /** The account name this profile belongs to. */
  accountName?: string;
  /** The sub account ID this profile belongs to if applicable. */
  subAccountId?: string;
  /** The sub account name this profile belongs to if applicable. */
  subAccountName?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile". */
  kind?: string;
  /** The account ID to which this profile belongs. */
  accountId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The unique ID of the user profile. */
  profileId?: string;
}

export const UserProfile: Schema.Schema<UserProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userName: Schema.optional(Schema.String),
    accountName: Schema.optional(Schema.String),
    subAccountId: Schema.optional(Schema.String),
    subAccountName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    profileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserProfile" });

export interface UserProfileList {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The user profiles returned in this response. */
  items?: ReadonlyArray<UserProfile>;
}

export const UserProfileList: Schema.Schema<UserProfileList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(UserProfile)),
  }).annotate({ identifier: "UserProfileList" });

export interface OperatingSystemVersionsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse". */
  kind?: string;
  /** Operating system version collection. */
  operatingSystemVersions?: ReadonlyArray<OperatingSystemVersion>;
}

export const OperatingSystemVersionsListResponse: Schema.Schema<OperatingSystemVersionsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    operatingSystemVersions: Schema.optional(
      Schema.Array(OperatingSystemVersion),
    ),
  }).annotate({ identifier: "OperatingSystemVersionsListResponse" });

export interface EncryptionInfo {
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
  /** Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. */
  encryptionSource?:
    | "ENCRYPTION_SCOPE_UNKNOWN"
    | "AD_SERVING"
    | "DATA_TRANSFER"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo". */
  kind?: string;
}

export const EncryptionInfo: Schema.Schema<EncryptionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionEntityType: Schema.optional(Schema.String),
    encryptionEntityId: Schema.optional(Schema.String),
    encryptionSource: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionInfo" });

export interface ConversionsBatchInsertRequest {
  /** Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId or encryptedUserIdCandidates[] is used. */
  encryptionInfo?: EncryptionInfo;
  /** The set of conversions to insert. */
  conversions?: ReadonlyArray<Conversion>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest". */
  kind?: string;
}

export const ConversionsBatchInsertRequest: Schema.Schema<ConversionsBatchInsertRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionInfo: Schema.optional(EncryptionInfo),
    conversions: Schema.optional(Schema.Array(Conversion)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionsBatchInsertRequest" });

export interface FeedField {
  /** Required. The name of the field. */
  name?: string;
  /** Optional. The default value of the field. */
  defaultValue?: string;
  /** Optional. Whether the field is required and should not be empty in the feed. Could be set as true when the field type is any of the following: - GPA_SERVED_IMAGE_URL - GPA_SERVED_ASSET_URL - ASSET_LIBRARY_HANDLE - ASSET_LIBRARY_VIDEO_HANDLE - ASSET_LIBRARY_DIRECTORY_HANDLE */
  required?: boolean;
  /** Required. The ID of the field. The ID is based on the column index starting from 0, and it should match the column index in the resource link. */
  id?: number;
  /** Optional. Whether the field is able to display. Could be set as true when the field type is not in any of the following and the field is not filterable: - COUNTRY_CODE_ISO - CITY - REGION - POSTAL_CODE - METRO - GEO_CANONICAL - USERLIST_ID - CONTEXTUAL_KEYWORD - CM360_DYNAMIC_TARGETING_KEY - WEIGHT */
  renderable?: boolean;
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
  /** Optional. Whether the field is filterable. Could be set as true when the field type is any of the following and is not renderable: - STRING - BOOL - COUNTRY_CODE_ISO - CM360_SITE_ID - CM360_KEYWORD - CM360_CREATIVE_ID - CM360_PLACEMENT_ID - CM360_AD_ID - CM360_ADVERTISER_ID - CM360_CAMPAIGN_ID - CITY - REGION - POSTAL_CODE - METRO - CUSTOM_VALUE - REMARKETING_VALUE - GEO_CANONICAL - STRING_LIST - CREATIVE_DIMENSION - USERLIST_ID - CM360_DYNAMIC_TARGETING_KEY - DV360_LINE_ITEM_ID */
  filterable?: boolean;
}

export const FeedField: Schema.Schema<FeedField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.Number),
    renderable: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    filterable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FeedField" });

export interface VideoFormat {
  /** The target bit rate of this video format. */
  targetBitRate?: number;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat". */
  kind?: string;
  /** ID of the video format. */
  id?: number;
  /** File type of the video format. */
  fileType?: "FLV" | "THREEGPP" | "MP4" | "WEBM" | "M3U8" | (string & {});
  /** The resolution of this video format. */
  resolution?: Size;
}

export const VideoFormat: Schema.Schema<VideoFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetBitRate: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.Number),
    fileType: Schema.optional(Schema.String),
    resolution: Schema.optional(Size),
  }).annotate({ identifier: "VideoFormat" });

export interface VideoFormatsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse". */
  kind?: string;
  /** Video format collection. */
  videoFormats?: ReadonlyArray<VideoFormat>;
}

export const VideoFormatsListResponse: Schema.Schema<VideoFormatsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    videoFormats: Schema.optional(Schema.Array(VideoFormat)),
  }).annotate({ identifier: "VideoFormatsListResponse" });

export interface FloodlightActivitiesGenerateTagResponse {
  /** Generated tag for this Floodlight activity. For Google tags, this is the event snippet. */
  floodlightActivityTag?: string;
  /** The global snippet section of a Google tag. The Google tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more. */
  globalSiteTagGlobalSnippet?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse". */
  kind?: string;
}

export const FloodlightActivitiesGenerateTagResponse: Schema.Schema<FloodlightActivitiesGenerateTagResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightActivityTag: Schema.optional(Schema.String),
    globalSiteTagGlobalSnippet: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivitiesGenerateTagResponse" });

export interface IngestionStatus {
  /** Output only. The number of rows with errors in the feed. */
  numRowsWithErrors?: string;
  /** Output only. The number of rows processed in the feed. */
  numRowsProcessed?: string;
  /** Output only. The number of active rows in the feed. */
  numActiveRows?: string;
  /** Output only. The total number of rows in the feed. */
  numRowsTotal?: string;
  /** Output only. The total number of warnings in the feed. */
  numWarningsTotal?: string;
}

export const IngestionStatus: Schema.Schema<IngestionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numRowsWithErrors: Schema.optional(Schema.String),
    numRowsProcessed: Schema.optional(Schema.String),
    numActiveRows: Schema.optional(Schema.String),
    numRowsTotal: Schema.optional(Schema.String),
    numWarningsTotal: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestionStatus" });

export interface DimensionFilter {
  /** The value of the dimension to filter. */
  value?: string;
  /** The name of the dimension to filter. */
  dimensionName?: string;
  /** The kind of resource this is, in this case dfareporting#dimensionFilter. */
  kind?: string;
}

export const DimensionFilter: Schema.Schema<DimensionFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    dimensionName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DimensionFilter" });

export interface DimensionValueRequest {
  /** The name of the dimension for which values should be requested. */
  dimensionName?: string;
  endDate?: string;
  /** The list of filters by which to filter values. The filters are ANDed. */
  filters?: ReadonlyArray<DimensionFilter>;
  /** The kind of request this is, in this case dfareporting#dimensionValueRequest . */
  kind?: string;
  startDate?: string;
}

export const DimensionValueRequest: Schema.Schema<DimensionValueRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionName: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Array(DimensionFilter)),
    kind: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "DimensionValueRequest" });

export interface MeasurementPartnerCampaignLink {
  /** Measurement partner used for tag wrapping. */
  measurementPartner?:
    | "NONE"
    | "INTEGRAL_AD_SCIENCE"
    | "DOUBLE_VERIFY"
    | (string & {});
  /** Partner campaign ID needed for establishing linking with Measurement partner. */
  partnerCampaignId?: string;
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
}

export const MeasurementPartnerCampaignLink: Schema.Schema<MeasurementPartnerCampaignLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    measurementPartner: Schema.optional(Schema.String),
    partnerCampaignId: Schema.optional(Schema.String),
    linkStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeasurementPartnerCampaignLink" });

export interface Dimension {
  /** The dimension name, e.g. advertiser */
  name?: string;
  /** The kind of resource this is, in this case dfareporting#dimension. */
  kind?: string;
}

export const Dimension: Schema.Schema<Dimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dimension" });

export interface Metric {
  /** The kind of resource this is, in this case dfareporting#metric. */
  kind?: string;
  /** The metric name, e.g. impressions */
  name?: string;
}

export const Metric: Schema.Schema<Metric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Metric" });

export interface ReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
  pivotedActivityMetrics?: ReadonlyArray<Metric>;
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** The kind of resource this is, in this case dfareporting#reportCompatibleFields. */
  kind?: string;
}

export const ReportCompatibleFields: Schema.Schema<ReportCompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    pivotedActivityMetrics: Schema.optional(Schema.Array(Metric)),
    dimensions: Schema.optional(Schema.Array(Dimension)),
    metrics: Schema.optional(Schema.Array(Metric)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportCompatibleFields" });

export interface FieldError {
  /** Output only. The ID of the field. */
  fieldId?: number;
  /** Output only. The name of the field. */
  fieldName?: string;
  /** Output only. The list of values of the field. */
  fieldValues?: ReadonlyArray<string>;
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
  /** Output only. Incidcates whether the field has error or warning. */
  isError?: boolean;
}

export const FieldError: Schema.Schema<FieldError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(Schema.Number),
    fieldName: Schema.optional(Schema.String),
    fieldValues: Schema.optional(Schema.Array(Schema.String)),
    ingestionError: Schema.optional(Schema.String),
    isError: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FieldError" });

export interface IngestionErrorRecord {
  /** Output only. The record ID of the ingestion error record. */
  recordId?: string;
  /** Output only. The list of field errors of the ingestion error record. */
  errors?: ReadonlyArray<FieldError>;
}

export const IngestionErrorRecord: Schema.Schema<IngestionErrorRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordId: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(FieldError)),
  }).annotate({ identifier: "IngestionErrorRecord" });

export interface CampaignSummary {
  /** The pre-tax amount for this campaign, in micros of the invoice's currency. */
  preTaxAmountMicros?: string;
  /** Campaign billing invoice code. */
  billingInvoiceCode?: string;
  /** Campaign ID. */
  campaignId?: string;
  /** The tax amount for this campaign, in micros of the invoice's currency. */
  taxAmountMicros?: string;
  /** The total amount of charges for this campaign, in micros of the invoice's currency. */
  totalAmountMicros?: string;
}

export const CampaignSummary: Schema.Schema<CampaignSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preTaxAmountMicros: Schema.optional(Schema.String),
    billingInvoiceCode: Schema.optional(Schema.String),
    campaignId: Schema.optional(Schema.String),
    taxAmountMicros: Schema.optional(Schema.String),
    totalAmountMicros: Schema.optional(Schema.String),
  }).annotate({ identifier: "CampaignSummary" });

export interface Invoice {
  /** The invoice total amount, in micros of the invoice's currency. */
  totalAmountMicros?: string;
  /** The invoice service start date. */
  serviceStartDate?: string;
  /** The type of invoice document. */
  invoiceType?:
    | "INVOICE_TYPE_UNSPECIFIED"
    | "INVOICE_TYPE_CREDIT"
    | "INVOICE_TYPE_INVOICE"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#invoice". */
  kind?: string;
  /** Purchase order number associated with the invoice. */
  purchaseOrderNumber?: string;
  /** The list of summarized campaign information associated with this invoice. */
  campaign_summaries?: ReadonlyArray<CampaignSummary>;
  /** The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*. */
  paymentsProfileId?: string;
  /** The sum of all taxes in invoice, in micros of the invoice's currency. */
  totalTaxAmountMicros?: string;
  /** The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*. */
  paymentsAccountId?: string;
  /** The invoice due date. */
  dueDate?: string;
  /** Invoice currency code in ISO 4217 format. */
  currencyCode?: string;
  /** ID of this invoice. */
  id?: string;
  /** The invoice service end date. */
  serviceEndDate?: string;
  /** The pre-tax subtotal amount, in micros of the invoice's currency. */
  subtotalAmountMicros?: string;
  /** The date when the invoice was issued. */
  issueDate?: string;
  /** The originally issued invoice(s) that is being cancelled by this invoice, if applicable. May appear on invoice PDF as *Replaced invoice numbers*. Note: There may be multiple replaced invoices due to consolidation of multiple invoices into a single invoice. */
  replacedInvoiceIds?: ReadonlyArray<string>;
  /** The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*. */
  correctedInvoiceId?: string;
  /** The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called. */
  pdfUrl?: string;
}

export const Invoice: Schema.Schema<Invoice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalAmountMicros: Schema.optional(Schema.String),
    serviceStartDate: Schema.optional(Schema.String),
    invoiceType: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    purchaseOrderNumber: Schema.optional(Schema.String),
    campaign_summaries: Schema.optional(Schema.Array(CampaignSummary)),
    paymentsProfileId: Schema.optional(Schema.String),
    totalTaxAmountMicros: Schema.optional(Schema.String),
    paymentsAccountId: Schema.optional(Schema.String),
    dueDate: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    serviceEndDate: Schema.optional(Schema.String),
    subtotalAmountMicros: Schema.optional(Schema.String),
    issueDate: Schema.optional(Schema.String),
    replacedInvoiceIds: Schema.optional(Schema.Array(Schema.String)),
    correctedInvoiceId: Schema.optional(Schema.String),
    pdfUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "Invoice" });

export interface SiteSkippableSetting {
  /** Amount of time to play videos served to this site before the skip button should appear. Applicable when skippable is true. */
  skipOffset?: VideoOffset;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting". */
  kind?: string;
  /** Amount of time to play videos served to this site template before counting a view. Applicable when skippable is true. */
  progressOffset?: VideoOffset;
  /** Whether the user can skip creatives served to this site. This will act as default for new placements created under this site. */
  skippable?: boolean;
}

export const SiteSkippableSetting: Schema.Schema<SiteSkippableSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipOffset: Schema.optional(VideoOffset),
    kind: Schema.optional(Schema.String),
    progressOffset: Schema.optional(VideoOffset),
    skippable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SiteSkippableSetting" });

export interface RegionsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse". */
  kind?: string;
  /** Region collection. */
  regions?: ReadonlyArray<Region>;
}

export const RegionsListResponse: Schema.Schema<RegionsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    regions: Schema.optional(Schema.Array(Region)),
  }).annotate({ identifier: "RegionsListResponse" });

export interface ConversionsBatchUpdateRequest {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest". */
  kind?: string;
  /** Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used. */
  encryptionInfo?: EncryptionInfo;
  /** The set of conversions to update. */
  conversions?: ReadonlyArray<Conversion>;
}

export const ConversionsBatchUpdateRequest: Schema.Schema<ConversionsBatchUpdateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    encryptionInfo: Schema.optional(EncryptionInfo),
    conversions: Schema.optional(Schema.Array(Conversion)),
  }).annotate({ identifier: "ConversionsBatchUpdateRequest" });

export interface FloodlightActivityDynamicTag {
  /** ID of this dynamic tag. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this tag. */
  name?: string;
  /** Tag code. */
  tag?: string;
}

export const FloodlightActivityDynamicTag: Schema.Schema<FloodlightActivityDynamicTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivityDynamicTag" });

export interface FloodlightActivityPublisherDynamicTag {
  /** Dynamic floodlight tag. */
  dynamicTag?: FloodlightActivityDynamicTag;
  /** Site ID of this dynamic tag. */
  siteId?: string;
  /** Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated. */
  directorySiteId?: string;
  /** Whether this tag is applicable only for view-throughs. */
  viewThrough?: boolean;
  /** Whether this tag is applicable only for click-throughs. */
  clickThrough?: boolean;
  /** Dimension value for the ID of the site. This is a read-only, auto-generated field. */
  siteIdDimensionValue?: DimensionValue;
}

export const FloodlightActivityPublisherDynamicTag: Schema.Schema<FloodlightActivityPublisherDynamicTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicTag: Schema.optional(FloodlightActivityDynamicTag),
    siteId: Schema.optional(Schema.String),
    directorySiteId: Schema.optional(Schema.String),
    viewThrough: Schema.optional(Schema.Boolean),
    clickThrough: Schema.optional(Schema.Boolean),
    siteIdDimensionValue: Schema.optional(DimensionValue),
  }).annotate({ identifier: "FloodlightActivityPublisherDynamicTag" });

export interface FloodlightActivity {
  /** Tag format type for the floodlight activity. If left blank, the tag format will default to HTML. */
  tagFormat?: "HTML" | "XHTML" | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity". */
  kind?: string;
  /** Publisher dynamic floodlight tags. */
  publisherTags?: ReadonlyArray<FloodlightActivityPublisherDynamicTag>;
  /** Counting method for conversions for this floodlight activity. This is a required field. */
  countingMethod?:
    | "STANDARD_COUNTING"
    | "UNIQUE_COUNTING"
    | "SESSION_COUNTING"
    | "TRANSACTIONS_COUNTING"
    | "ITEMS_SOLD_COUNTING"
    | (string & {});
  /** Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Name of the associated floodlight activity group. This is a read-only field. */
  floodlightActivityGroupName?: string;
  /** Floodlight activity group ID of this floodlight activity. This is a required field. */
  floodlightActivityGroupId?: string;
  /** The type of Floodlight tag this activity will generate. This is a required field. */
  floodlightTagType?: "IFRAME" | "IMAGE" | "GLOBAL_SITE_TAG" | (string & {});
  /** Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field. */
  floodlightConfigurationIdDimensionValue?: DimensionValue;
  /** Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration. */
  floodlightConfigurationId?: string;
  /** URL where this tag will be deployed. If specified, must be less than 256 characters long. */
  expectedUrl?: string;
  /** Subaccount ID of this floodlight activity. This is a read-only field that can be left blank. */
  subaccountId?: string;
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
  /** The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information. */
  status?:
    | "ACTIVE"
    | "ARCHIVED_AND_DISABLED"
    | "ARCHIVED"
    | "DISABLED_POLICY"
    | (string & {});
  /** Whether the activity is enabled for attribution. */
  attributionEnabled?: boolean;
  /** Dynamic floodlight tags. */
  defaultTags?: ReadonlyArray<FloodlightActivityDynamicTag>;
  /** Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion. */
  tagString?: string;
  /** Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING. */
  cacheBustingType?:
    | "JAVASCRIPT"
    | "ACTIVE_SERVER_PAGE"
    | "JSP"
    | "PHP"
    | "COLD_FUSION"
    | (string & {});
  /** Tag string of the associated floodlight activity group. This is a read-only field. */
  floodlightActivityGroupTagString?: string;
  /** Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes. */
  name?: string;
  /** Whether this tag should use SSL. */
  secure?: boolean;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Type of the associated floodlight activity group. This is a read-only field. */
  floodlightActivityGroupType?: "COUNTER" | "SALE" | (string & {});
  /** Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser. */
  advertiserId?: string;
  /** General notes or implementation instructions for the tag. */
  notes?: string;
  /** Account ID of this floodlight activity. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Whether this floodlight activity must be SSL-compliant. */
  sslRequired?: boolean;
  /** ID of this floodlight activity. This is a read-only, auto-generated field. */
  id?: string;
}

export const FloodlightActivity: Schema.Schema<FloodlightActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagFormat: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    publisherTags: Schema.optional(
      Schema.Array(FloodlightActivityPublisherDynamicTag),
    ),
    countingMethod: Schema.optional(Schema.String),
    idDimensionValue: Schema.optional(DimensionValue),
    floodlightActivityGroupName: Schema.optional(Schema.String),
    floodlightActivityGroupId: Schema.optional(Schema.String),
    floodlightTagType: Schema.optional(Schema.String),
    floodlightConfigurationIdDimensionValue: Schema.optional(DimensionValue),
    floodlightConfigurationId: Schema.optional(Schema.String),
    expectedUrl: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    sslCompliant: Schema.optional(Schema.Boolean),
    userDefinedVariableTypes: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    attributionEnabled: Schema.optional(Schema.Boolean),
    defaultTags: Schema.optional(Schema.Array(FloodlightActivityDynamicTag)),
    tagString: Schema.optional(Schema.String),
    cacheBustingType: Schema.optional(Schema.String),
    floodlightActivityGroupTagString: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    secure: Schema.optional(Schema.Boolean),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    floodlightActivityGroupType: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    sslRequired: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivity" });

export interface FloodlightActivitiesListResponse {
  /** Floodlight activity collection. */
  floodlightActivities?: ReadonlyArray<FloodlightActivity>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const FloodlightActivitiesListResponse: Schema.Schema<FloodlightActivitiesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightActivities: Schema.optional(Schema.Array(FloodlightActivity)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivitiesListResponse" });

export interface VideoProcessingData {
  /** For a FAILED processing state, the error reason discovered. */
  errorReason?: string;
  /** Output only. The processing state of the studio creative asset. */
  processingState?:
    | "UNKNOWN"
    | "PROCESSING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const VideoProcessingData: Schema.Schema<VideoProcessingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorReason: Schema.optional(Schema.String),
    processingState: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoProcessingData" });

export interface StudioCreativeAsset {
  /** The type of the studio creative asset. It is a auto-generated, read-only field. */
  type?: "UNKNOWN_TYPE" | "HTML" | "VIDEO" | "IMAGE" | "FONT" | (string & {});
  /** Output only. Unique ID of this studio creative asset. This is a read-only, auto-generated field. */
  id?: string;
  /** Studio creative ID of this studio creative asset. The asset will be associated to the creative if creative id is set. */
  studioCreativeId?: string;
  /** The filesize of the studio creative asset. This is a read-only field. */
  filesize?: string;
  /** Output only. The creation timestamp of the studio creative asset. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** The processing data of the studio creative asset. This is a read-only field. */
  videoProcessingData?: VideoProcessingData;
  /** Studio advertiser ID of this studio creative asset. This is a required field on insertion. */
  studioAdvertiserId?: string;
  /** The filename of the studio creative asset. It is default to the original filename of the asset. */
  filename?: string;
  /** Studio account ID of this studio creative asset. This field, if left unset, will be auto-populated.. */
  studioAccountId?: string;
  /** Output only. The last modified timestamp of the studio creative asset. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
}

export const StudioCreativeAsset: Schema.Schema<StudioCreativeAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    studioCreativeId: Schema.optional(Schema.String),
    filesize: Schema.optional(Schema.String),
    createInfo: Schema.optional(LastModifiedInfo),
    videoProcessingData: Schema.optional(VideoProcessingData),
    studioAdvertiserId: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.String),
    studioAccountId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
  }).annotate({ identifier: "StudioCreativeAsset" });

export interface StudioCreativeAssetsResponse {
  /** The list of studio creative assets. */
  assets?: ReadonlyArray<StudioCreativeAsset>;
}

export const StudioCreativeAssetsResponse: Schema.Schema<StudioCreativeAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(StudioCreativeAsset)),
  }).annotate({ identifier: "StudioCreativeAssetsResponse" });

export interface Account {
  /** Default placement dimensions for this account. */
  defaultCreativeSizeId?: string;
  /** Reporting configuration of this account. */
  reportsConfiguration?: ReportsConfiguration;
  /** Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions. */
  activeViewOptOut?: boolean;
  /** ID of this account. This is a read-only, auto-generated field. */
  id?: string;
  /** Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1. */
  maximumImageSize?: string;
  /** File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive. */
  teaserSizeLimit?: string;
  /** Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default. */
  nielsenOcrEnabled?: boolean;
  /** ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP */
  currencyId?: string;
  /** Name of this account. This is a required field, and must be less than 128 characters long and be globally unique. */
  name?: string;
  /** Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
  locale?: string;
  /** Profile for this account. This is a read-only field that can be left blank. */
  accountProfile?:
    | "ACCOUNT_PROFILE_BASIC"
    | "ACCOUNT_PROFILE_STANDARD"
    | (string & {});
  /** Whether this account is active. */
  active?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#account". */
  kind?: string;
  /** Account permissions assigned to this account. */
  accountPermissionIds?: ReadonlyArray<string>;
  /** Description of this account. */
  description?: string;
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
  /** Share Path to Conversion reports with Twitter. */
  shareReportsWithTwitter?: boolean;
  /** ID of the country associated with this account. */
  countryId?: string;
  /** User role permissions available to the user roles of this account. */
  availablePermissionIds?: ReadonlyArray<string>;
}

export const Account: Schema.Schema<Account> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultCreativeSizeId: Schema.optional(Schema.String),
    reportsConfiguration: Schema.optional(ReportsConfiguration),
    activeViewOptOut: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    maximumImageSize: Schema.optional(Schema.String),
    teaserSizeLimit: Schema.optional(Schema.String),
    nielsenOcrEnabled: Schema.optional(Schema.Boolean),
    currencyId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    accountProfile: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    accountPermissionIds: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    activeAdsLimitTier: Schema.optional(Schema.String),
    shareReportsWithTwitter: Schema.optional(Schema.Boolean),
    countryId: Schema.optional(Schema.String),
    availablePermissionIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Account" });

export interface DfpSettings {
  /** Whether this directory site accepts publisher-paid tags. */
  pubPaidPlacementAccepted?: boolean;
  /** Ad Manager network name for this directory site. */
  dfpNetworkName?: string;
  /** Whether this directory site accepts programmatic placements. */
  programmaticPlacementAccepted?: boolean;
  /** Whether this directory site is available only via Publisher Portal. */
  publisherPortalOnly?: boolean;
  /** Ad Manager network code for this directory site. */
  dfpNetworkCode?: string;
}

export const DfpSettings: Schema.Schema<DfpSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubPaidPlacementAccepted: Schema.optional(Schema.Boolean),
    dfpNetworkName: Schema.optional(Schema.String),
    programmaticPlacementAccepted: Schema.optional(Schema.Boolean),
    publisherPortalOnly: Schema.optional(Schema.Boolean),
    dfpNetworkCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DfpSettings" });

export interface DirectorySiteSettings {
  /** Whether this site accepts in-stream video ads. */
  instreamVideoPlacementAccepted?: boolean;
  /** Whether this site accepts interstitial ads. */
  interstitialPlacementAccepted?: boolean;
  /** Whether this directory site has disabled active view creatives. */
  activeViewOptOut?: boolean;
  /** Directory site Ad Manager settings. */
  dfpSettings?: DfpSettings;
}

export const DirectorySiteSettings: Schema.Schema<DirectorySiteSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instreamVideoPlacementAccepted: Schema.optional(Schema.Boolean),
    interstitialPlacementAccepted: Schema.optional(Schema.Boolean),
    activeViewOptOut: Schema.optional(Schema.Boolean),
    dfpSettings: Schema.optional(DfpSettings),
  }).annotate({ identifier: "DirectorySiteSettings" });

export interface DirectorySite {
  /** Name of this directory site. */
  name?: string;
  /** Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE" */
  inpageTagFormats?: ReadonlyArray<
    | "STANDARD"
    | "IFRAME_JAVASCRIPT_INPAGE"
    | "INTERNAL_REDIRECT_INPAGE"
    | "JAVASCRIPT_INPAGE"
    | (string & {})
  >;
  /** Output only. Default publisher specification ID of video placements under this directory site. Possible values are: * `1`, Hulu * `2`, NBC * `3`, CBS * `4`, CBS Desktop * `5`, Discovery * `6`, VEVO HD * `7`, VEVO Vertical * `8`, Fox * `9`, CW Network * `10`, Disney * `11`, IGN * `12`, NFL.com * `13`, Turner Broadcasting * `14`, Tubi on Fox * `15`, Hearst Corporation * `16`, Twitch Desktop * `17`, ABC * `18`, Univision * `19`, MLB.com * `20`, MLB.com Mobile * `21`, MLB.com OTT * `22`, Polsat * `23`, TVN * `24`, Mediaset * `25`, Antena 3 * `26`, Mediamond * `27`, Sky Italia * `28`, Tubi on CBS * `29`, Spotify * `30`, Paramount * `31`, Max */
  publisherSpecificationId?: string;
  /** Directory site settings. */
  settings?: DirectorySiteSettings;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite". */
  kind?: string;
  /** URL of this directory site. */
  url?: string;
  /** ID of this directory site. This is a read-only, auto-generated field. */
  id?: string;
  /** Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL" */
  interstitialTagFormats?: ReadonlyArray<
    | "IFRAME_JAVASCRIPT_INTERSTITIAL"
    | "INTERNAL_REDIRECT_INTERSTITIAL"
    | "JAVASCRIPT_INTERSTITIAL"
    | (string & {})
  >;
  /** Dimension value for the ID of this directory site. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
}

export const DirectorySite: Schema.Schema<DirectorySite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    inpageTagFormats: Schema.optional(Schema.Array(Schema.String)),
    publisherSpecificationId: Schema.optional(Schema.String),
    settings: Schema.optional(DirectorySiteSettings),
    kind: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    interstitialTagFormats: Schema.optional(Schema.Array(Schema.String)),
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

export const DirectorySitesListResponse: Schema.Schema<DirectorySitesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directorySites: Schema.optional(Schema.Array(DirectorySite)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectorySitesListResponse" });

export interface TargetingTemplate {
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser. */
  name?: string;
  /** Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert. */
  advertiserId?: string;
  /** Remarketing list targeting criteria. */
  listTargetingExpression?: ListTargetingExpression;
  /** Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
  accountId?: string;
  /** Geographical targeting criteria. */
  geoTargeting?: GeoTargeting;
  /** Time and day targeting criteria. */
  dayPartTargeting?: DayPartTargeting;
  /** ID of this targeting template. This is a read-only, auto-generated field. */
  id?: string;
  /** Optional. Contextual keyword targeting criteria. */
  contextualKeywordTargeting?: ContextualKeywordTargeting;
  /** Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
  subaccountId?: string;
  /** Language targeting criteria. */
  languageTargeting?: LanguageTargeting;
  /** Technology platform targeting criteria. */
  technologyTargeting?: TechnologyTargeting;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate". */
  kind?: string;
  /** Key-value targeting criteria. */
  keyValueTargetingExpression?: KeyValueTargetingExpression;
}

export const TargetingTemplate: Schema.Schema<TargetingTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    name: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    listTargetingExpression: Schema.optional(ListTargetingExpression),
    accountId: Schema.optional(Schema.String),
    geoTargeting: Schema.optional(GeoTargeting),
    dayPartTargeting: Schema.optional(DayPartTargeting),
    id: Schema.optional(Schema.String),
    contextualKeywordTargeting: Schema.optional(ContextualKeywordTargeting),
    subaccountId: Schema.optional(Schema.String),
    languageTargeting: Schema.optional(LanguageTargeting),
    technologyTargeting: Schema.optional(TechnologyTargeting),
    kind: Schema.optional(Schema.String),
    keyValueTargetingExpression: Schema.optional(KeyValueTargetingExpression),
  }).annotate({ identifier: "TargetingTemplate" });

export interface AccountPermission {
  /** Permission group of this account permission. */
  permissionGroupId?: string;
  /** ID of this account permission. */
  id?: string;
  /** Administrative level required to enable this account permission. */
  level?: "USER" | "ADMINISTRATOR" | (string & {});
  /** Name of this account permission. */
  name?: string;
  /** Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD" */
  accountProfiles?: ReadonlyArray<
    "ACCOUNT_PROFILE_BASIC" | "ACCOUNT_PROFILE_STANDARD" | (string & {})
  >;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission". */
  kind?: string;
}

export const AccountPermission: Schema.Schema<AccountPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissionGroupId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    level: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    accountProfiles: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountPermission" });

export interface AccountPermissionsListResponse {
  /** Account permission collection. */
  accountPermissions?: ReadonlyArray<AccountPermission>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse". */
  kind?: string;
}

export const AccountPermissionsListResponse: Schema.Schema<AccountPermissionsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountPermissions: Schema.optional(Schema.Array(AccountPermission)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountPermissionsListResponse" });

export interface FeedSchedule {
  /** Optional. The number of times the feed retransforms within one day. This is a required field if the schedule is enabled. Acceptable values are between 1 to 6, inclusive. */
  repeatValue?: string;
  /** Optional. Whether the schedule is enabled. */
  scheduleEnabled?: boolean;
  /** Optional. The hour of the day to start the feed. It is applicable if the repeat value is equal to 1. Default value is 0. */
  startHour?: string;
  /** Optional. The minute of the hour to start the feed. It is applicable if the repeat value is equal to 1. Default value is 0. */
  startMinute?: string;
  /** Optional. The time zone to schedule the feed. It is applicable if the repeat value is equal to 1. Default value is "America/Los_Angeles". */
  timeZone?: string;
}

export const FeedSchedule: Schema.Schema<FeedSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repeatValue: Schema.optional(Schema.String),
    scheduleEnabled: Schema.optional(Schema.Boolean),
    startHour: Schema.optional(Schema.String),
    startMinute: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "FeedSchedule" });

export interface PostalCodesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse". */
  kind?: string;
  /** Postal code collection. */
  postalCodes?: ReadonlyArray<PostalCode>;
}

export const PostalCodesListResponse: Schema.Schema<PostalCodesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    postalCodes: Schema.optional(Schema.Array(PostalCode)),
  }).annotate({ identifier: "PostalCodesListResponse" });

export interface SizesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse". */
  kind?: string;
  /** Size collection. */
  sizes?: ReadonlyArray<Size>;
}

export const SizesListResponse: Schema.Schema<SizesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    sizes: Schema.optional(Schema.Array(Size)),
  }).annotate({ identifier: "SizesListResponse" });

export interface ListPopulationRule {
  /** Floodlight activity ID associated with this rule. This field can be left blank. */
  floodlightActivityId?: string;
  /** Name of floodlight activity associated with this rule. This is a read-only, auto-generated field. */
  floodlightActivityName?: string;
  /** Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs. */
  listPopulationClauses?: ReadonlyArray<ListPopulationClause>;
}

export const ListPopulationRule: Schema.Schema<ListPopulationRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightActivityId: Schema.optional(Schema.String),
    floodlightActivityName: Schema.optional(Schema.String),
    listPopulationClauses: Schema.optional(Schema.Array(ListPopulationClause)),
  }).annotate({ identifier: "ListPopulationRule" });

export interface DynamicProfileVersion {
  /** Output only. Version ID of this dynamic profile version. This is a read-only, auto-generated field. -1 for draft version, 0+ for published versions. */
  versionId?: string;
  /** Optional. Associated dynamic feeds and their settings (including dynamic rules) for this dynamic profile version. */
  dynamicProfileFeedSettings?: ReadonlyArray<DynamicProfileFeedSettings>;
}

export const DynamicProfileVersion: Schema.Schema<DynamicProfileVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionId: Schema.optional(Schema.String),
    dynamicProfileFeedSettings: Schema.optional(
      Schema.Array(DynamicProfileFeedSettings),
    ),
  }).annotate({ identifier: "DynamicProfileVersion" });

export interface DynamicProfile {
  /** Output only. Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicProfile". */
  kind?: string;
  /** Output only. The creation timestamp of the dynamic profile. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Optional. Active version of the dynamic profile. */
  active?: DynamicProfileVersion;
  /** Required. Identifier. Name of this dynamic profile. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Output only. The last modified timestamp of the dynamic profile. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Optional. Description of this dynamic profile. */
  description?: string;
  /** Optional. Archive status of this dynamic profile. */
  archiveStatus?:
    | "ARCHIVE_STATUS_UNKNOWN"
    | "UNARCHIVED"
    | "ARCHIVED"
    | (string & {});
  /** Optional. Status of this dynamic profile. */
  status?: "STATUS_UNKNOWN" | "ACTIVE" | "INACTIVE" | "DELETED" | (string & {});
  /** Optional. Draft version of the dynamic profile. */
  draft?: DynamicProfileVersion;
  /** Output only. Unique ID of this dynamic profile. This is a read-only, auto-generated field. */
  dynamicProfileId?: string;
  /** Required. Advertiser ID of this dynamic profile. This is a required field on insertion. */
  studioAdvertiserId?: string;
}

export const DynamicProfile: Schema.Schema<DynamicProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    createInfo: Schema.optional(LastModifiedInfo),
    active: Schema.optional(DynamicProfileVersion),
    name: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    description: Schema.optional(Schema.String),
    archiveStatus: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    draft: Schema.optional(DynamicProfileVersion),
    dynamicProfileId: Schema.optional(Schema.String),
    studioAdvertiserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicProfile" });

export interface BillingAssignment {
  /** ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field. */
  subaccountId?: string;
  /** ID of the account associated with the billing assignment.This is a read-only, auto-generated field. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignment". */
  kind?: string;
  /** ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign */
  campaignId?: string;
  /** ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser */
  advertiserId?: string;
}

export const BillingAssignment: Schema.Schema<BillingAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subaccountId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    campaignId: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingAssignment" });

export interface BillingAssignmentsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignmentsListResponse". */
  kind?: string;
  /** Billing assignments collection. */
  billingAssignments?: ReadonlyArray<BillingAssignment>;
}

export const BillingAssignmentsListResponse: Schema.Schema<BillingAssignmentsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    billingAssignments: Schema.optional(Schema.Array(BillingAssignment)),
  }).annotate({ identifier: "BillingAssignmentsListResponse" });

export interface Flight {
  /** Rate or cost of this flight. */
  rateOrCost?: string;
  startDate?: string;
  endDate?: string;
  /** Units of this flight. */
  units?: string;
}

export const Flight: Schema.Schema<Flight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rateOrCost: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    units: Schema.optional(Schema.String),
  }).annotate({ identifier: "Flight" });

export interface Pricing {
  /** Pricing type of this inventory item. */
  pricingType?:
    | "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS"
    | "PLANNING_PLACEMENT_PRICING_TYPE_CPM"
    | "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS"
    | "PLANNING_PLACEMENT_PRICING_TYPE_CPC"
    | "PLANNING_PLACEMENT_PRICING_TYPE_CPA"
    | "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    | "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS"
    | "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"
    | (string & {});
  /** Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time. */
  flights?: ReadonlyArray<Flight>;
  endDate?: string;
  startDate?: string;
  /** Cap cost type of this inventory item. */
  capCostType?:
    | "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE"
    | "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY"
    | "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"
    | (string & {});
  /** Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary. */
  groupType?:
    | "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE"
    | "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"
    | (string & {});
}

export const Pricing: Schema.Schema<Pricing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pricingType: Schema.optional(Schema.String),
    flights: Schema.optional(Schema.Array(Flight)),
    endDate: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    capCostType: Schema.optional(Schema.String),
    groupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pricing" });

export interface AdBlockingConfiguration {
  /** Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. */
  enabled?: boolean;
}

export const AdBlockingConfiguration: Schema.Schema<AdBlockingConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdBlockingConfiguration" });

export interface OptimizationActivity {
  /** Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1. */
  weight?: number;
  /** Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field. */
  floodlightActivityIdDimensionValue?: DimensionValue;
  /** Floodlight activity ID of this optimization activity. This is a required field. */
  floodlightActivityId?: string;
}

export const OptimizationActivity: Schema.Schema<OptimizationActivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weight: Schema.optional(Schema.Number),
    floodlightActivityIdDimensionValue: Schema.optional(DimensionValue),
    floodlightActivityId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OptimizationActivity" });

export interface CreativeOptimizationConfiguration {
  /** List of optimization activities associated with this configuration. */
  optimizationActivitys?: ReadonlyArray<OptimizationActivity>;
  /** ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns. */
  id?: string;
  /** Name of this creative optimization config. This is a required field and must be less than 129 characters long. */
  name?: string;
  /** Optimization model for this configuration. */
  optimizationModel?:
    | "CLICK"
    | "POST_CLICK"
    | "POST_IMPRESSION"
    | "POST_CLICK_AND_IMPRESSION"
    | "VIDEO_COMPLETION"
    | (string & {});
}

export const CreativeOptimizationConfiguration: Schema.Schema<CreativeOptimizationConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optimizationActivitys: Schema.optional(Schema.Array(OptimizationActivity)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    optimizationModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeOptimizationConfiguration" });

export interface AudienceSegment {
  /** ID of this audience segment. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this audience segment. This is a required field and must be less than 65 characters long. */
  name?: string;
  /** Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive. */
  allocation?: number;
}

export const AudienceSegment: Schema.Schema<AudienceSegment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    allocation: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AudienceSegment" });

export interface AudienceSegmentGroup {
  /** ID of this audience segment group. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this audience segment group. This is a required field and must be less than 65 characters long. */
  name?: string;
  /** Audience segments assigned to this group. The number of segments must be between 2 and 100. */
  audienceSegments?: ReadonlyArray<AudienceSegment>;
}

export const AudienceSegmentGroup: Schema.Schema<AudienceSegmentGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    audienceSegments: Schema.optional(Schema.Array(AudienceSegment)),
  }).annotate({ identifier: "AudienceSegmentGroup" });

export interface Campaign {
  startDate?: string;
  /** External ID for this campaign. */
  externalId?: string;
  /** Ad blocking settings for this campaign. */
  adBlockingConfiguration?: AdBlockingConfiguration;
  /** Subaccount ID of this campaign. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** List of creative group IDs that are assigned to the campaign. */
  creativeGroupIds?: ReadonlyArray<string>;
  /** Information about the most recent modification of this campaign. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Overrides that can be used to activate or deactivate advertiser event tags. */
  eventTagOverrides?: ReadonlyArray<EventTagOverride>;
  /** Click-through URL suffix override properties for this campaign. */
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
  /** Account ID of this campaign. This is a read-only field that can be left blank. */
  accountId?: string;
  /** ID of this campaign. This is a read-only auto-generated field. */
  id?: string;
  /** Additional creative optimization configurations for the campaign. */
  additionalCreativeOptimizationConfigurations?: ReadonlyArray<CreativeOptimizationConfiguration>;
  /** Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser. */
  name?: string;
  /** Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups. */
  audienceSegmentGroups?: ReadonlyArray<AudienceSegmentGroup>;
  /** Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  endDate?: string;
  /** Whether this campaign has been archived. */
  archived?: boolean;
  /** Measurement partner campaign link for tag wrapping. */
  measurementPartnerLink?: MeasurementPartnerCampaignLink;
  /** Advertiser ID of this campaign. This is a required field. */
  advertiserId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign". */
  kind?: string;
  /** Information about the creation of this campaign. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Dimension value for the ID of this campaign. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Arbitrary comments about this campaign. Must be less than 256 characters long. */
  comment?: string;
  /** The default landing page ID for this campaign. */
  defaultLandingPageId?: string;
  /** Advertiser group ID of the associated advertiser. */
  advertiserGroupId?: string;
  /** Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign. */
  billingInvoiceCode?: string;
  /** Click-through event tag ID override properties for this campaign. */
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
  /** Optional. Whether the campaign has EU political ads. Campaign Manager 360 doesn't allow campaigns with EU political ads to serve in the EU. They can still serve in other regions. */
  euPoliticalAdsDeclaration?:
    | "CONTAINS_EU_POLITICAL_ADS"
    | "DOES_NOT_CONTAIN_EU_POLITICAL_ADS"
    | (string & {});
  /** Creative optimization configuration for the campaign. */
  creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;
}

export const Campaign: Schema.Schema<Campaign> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Schema.String),
    externalId: Schema.optional(Schema.String),
    adBlockingConfiguration: Schema.optional(AdBlockingConfiguration),
    subaccountId: Schema.optional(Schema.String),
    creativeGroupIds: Schema.optional(Schema.Array(Schema.String)),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    eventTagOverrides: Schema.optional(Schema.Array(EventTagOverride)),
    clickThroughUrlSuffixProperties: Schema.optional(
      ClickThroughUrlSuffixProperties,
    ),
    accountId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    additionalCreativeOptimizationConfigurations: Schema.optional(
      Schema.Array(CreativeOptimizationConfiguration),
    ),
    name: Schema.optional(Schema.String),
    audienceSegmentGroups: Schema.optional(Schema.Array(AudienceSegmentGroup)),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    endDate: Schema.optional(Schema.String),
    archived: Schema.optional(Schema.Boolean),
    measurementPartnerLink: Schema.optional(MeasurementPartnerCampaignLink),
    advertiserId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    createInfo: Schema.optional(LastModifiedInfo),
    idDimensionValue: Schema.optional(DimensionValue),
    comment: Schema.optional(Schema.String),
    defaultLandingPageId: Schema.optional(Schema.String),
    advertiserGroupId: Schema.optional(Schema.String),
    billingInvoiceCode: Schema.optional(Schema.String),
    defaultClickThroughEventTagProperties: Schema.optional(
      DefaultClickThroughEventTagProperties,
    ),
    euPoliticalAdsDeclaration: Schema.optional(Schema.String),
    creativeOptimizationConfiguration: Schema.optional(
      CreativeOptimizationConfiguration,
    ),
  }).annotate({ identifier: "Campaign" });

export interface CampaignsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Campaign collection. */
  campaigns?: ReadonlyArray<Campaign>;
}

export const CampaignsListResponse: Schema.Schema<CampaignsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    campaigns: Schema.optional(Schema.Array(Campaign)),
  }).annotate({ identifier: "CampaignsListResponse" });

export interface DynamicTargetingKey {
  /** Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
  name?: string;
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
}

export const DynamicTargetingKey: Schema.Schema<DynamicTargetingKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    objectType: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicTargetingKey" });

export interface Subaccount {
  /** ID of the account that contains this subaccount. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount". */
  kind?: string;
  /** Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account. */
  name?: string;
  /** IDs of the available user role permissions for this subaccount. */
  availablePermissionIds?: ReadonlyArray<string>;
  /** ID of this subaccount. This is a read-only, auto-generated field. */
  id?: string;
}

export const Subaccount: Schema.Schema<Subaccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    availablePermissionIds: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subaccount" });

export interface PlacementGroup {
  /** ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements. */
  primaryPlacementId?: string;
  /** IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field. */
  childPlacementIds?: ReadonlyArray<string>;
  /** Information about the creation of this placement group. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup". */
  kind?: string;
  /** Dimension value for the ID of this placement group. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** Dimension value for the ID of the campaign. This is a read-only, auto-generated field. */
  campaignIdDimensionValue?: DimensionValue;
  /** Comments for this placement group. */
  comment?: string;
  /** Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
  siteId?: string;
  /** Dimension value for the ID of the directory site. This is a read-only, auto-generated field. */
  directorySiteIdDimensionValue?: DimensionValue;
  /** Account ID of this placement group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Dimension value for the ID of the primary placement. This is a read-only, auto-generated field. */
  primaryPlacementIdDimensionValue?: DimensionValue;
  /** ID of this placement group. This is a read-only, auto-generated field. */
  id?: string;
  /** Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion. */
  placementGroupType?:
    | "PLACEMENT_PACKAGE"
    | "PLACEMENT_ROADBLOCK"
    | (string & {});
  /** Name of this placement group. This is a required field and must be less than 256 characters long. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of this placement group. This is a required field on insertion. */
  advertiserId?: string;
  /** Whether this placement group is active, inactive, archived or permanently archived. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {});
  /** Pricing schedule of this placement group. This field is required on insertion. */
  pricingSchedule?: PricingSchedule;
  /** External ID for this placement. */
  externalId?: string;
  /** ID of the placement strategy assigned to this placement group. */
  placementStrategyId?: string;
  /** ID of the content category assigned to this placement group. */
  contentCategoryId?: string;
  /** Dimension value for the ID of the site. This is a read-only, auto-generated field. */
  siteIdDimensionValue?: DimensionValue;
  /** Subaccount ID of this placement group. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Information about the most recent modification of this placement group. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
  directorySiteId?: string;
  /** Campaign ID of this placement group. This field is required on insertion. */
  campaignId?: string;
}

export const PlacementGroup: Schema.Schema<PlacementGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryPlacementId: Schema.optional(Schema.String),
    childPlacementIds: Schema.optional(Schema.Array(Schema.String)),
    createInfo: Schema.optional(LastModifiedInfo),
    kind: Schema.optional(Schema.String),
    idDimensionValue: Schema.optional(DimensionValue),
    campaignIdDimensionValue: Schema.optional(DimensionValue),
    comment: Schema.optional(Schema.String),
    siteId: Schema.optional(Schema.String),
    directorySiteIdDimensionValue: Schema.optional(DimensionValue),
    accountId: Schema.optional(Schema.String),
    primaryPlacementIdDimensionValue: Schema.optional(DimensionValue),
    id: Schema.optional(Schema.String),
    placementGroupType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    advertiserId: Schema.optional(Schema.String),
    activeStatus: Schema.optional(Schema.String),
    pricingSchedule: Schema.optional(PricingSchedule),
    externalId: Schema.optional(Schema.String),
    placementStrategyId: Schema.optional(Schema.String),
    contentCategoryId: Schema.optional(Schema.String),
    siteIdDimensionValue: Schema.optional(DimensionValue),
    subaccountId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    directorySiteId: Schema.optional(Schema.String),
    campaignId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementGroup" });

export interface PlacementGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Placement group collection. */
  placementGroups?: ReadonlyArray<PlacementGroup>;
}

export const PlacementGroupsListResponse: Schema.Schema<PlacementGroupsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    placementGroups: Schema.optional(Schema.Array(PlacementGroup)),
  }).annotate({ identifier: "PlacementGroupsListResponse" });

export interface CreativeField {
  /** Subaccount ID of this creative field. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Account ID of this creative field. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField". */
  kind?: string;
  /** Advertiser ID of this creative field. This is a required field on insertion. */
  advertiserId?: string;
  /** ID of this creative field. This is a read-only, auto-generated field. */
  id?: string;
}

export const CreativeField: Schema.Schema<CreativeField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subaccountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeField" });

export interface PlatformTypesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse". */
  kind?: string;
  /** Platform type collection. */
  platformTypes?: ReadonlyArray<PlatformType>;
}

export const PlatformTypesListResponse: Schema.Schema<PlatformTypesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    platformTypes: Schema.optional(Schema.Array(PlatformType)),
  }).annotate({ identifier: "PlatformTypesListResponse" });

export interface OperatingSystemsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse". */
  kind?: string;
  /** Operating system collection. */
  operatingSystems?: ReadonlyArray<OperatingSystem>;
}

export const OperatingSystemsListResponse: Schema.Schema<OperatingSystemsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    operatingSystems: Schema.optional(Schema.Array(OperatingSystem)),
  }).annotate({ identifier: "OperatingSystemsListResponse" });

export interface CrossDimensionReachReportCompatibleFields {
  /** The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields. */
  kind?: string;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** Dimensions which are compatible to be selected in the "breakdown" section of the report. */
  breakdown?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "overlapMetricNames" section of the report. */
  overlapMetrics?: ReadonlyArray<Metric>;
}

export const CrossDimensionReachReportCompatibleFields: Schema.Schema<CrossDimensionReachReportCompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Array(Metric)),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    breakdown: Schema.optional(Schema.Array(Dimension)),
    overlapMetrics: Schema.optional(Schema.Array(Metric)),
  }).annotate({ identifier: "CrossDimensionReachReportCompatibleFields" });

export interface UserRolePermission {
  /** Levels of availability for a user role permission. */
  availability?:
    | "NOT_AVAILABLE_BY_DEFAULT"
    | "ACCOUNT_BY_DEFAULT"
    | "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"
    | "ACCOUNT_ALWAYS"
    | "SUBACCOUNT_AND_ACCOUNT_ALWAYS"
    | "USER_PROFILE_ONLY"
    | (string & {});
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission". */
  kind?: string;
  /** Name of this user role permission. */
  name?: string;
  /** ID of the permission group that this user role permission belongs to. */
  permissionGroupId?: string;
  /** ID of this user role permission. */
  id?: string;
}

export const UserRolePermission: Schema.Schema<UserRolePermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availability: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    permissionGroupId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserRolePermission" });

export interface StudioCreativeDimension {
  /** Width of the studio creative. */
  width?: number;
  /** Height of the studio creative. */
  height?: number;
}

export const StudioCreativeDimension: Schema.Schema<StudioCreativeDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Schema.Number),
    height: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StudioCreativeDimension" });

export interface StudioCreative {
  /** Studio campaign ID of this studio creative. This is a required field on insertion. */
  studioCampaignId?: string;
  /** Dimension of this studio creative. This is a required field on insertion if format is BANNER or EXPANDING. */
  dimension?: StudioCreativeDimension;
  /** Dynamic profile ID of this studio creative. */
  dynamicProfileId?: string;
  /** Studio advertiser ID of this studio creative. This is a required field on insertion. */
  studioAdvertiserId?: string;
  /** Studio account ID of this creative. This field, if left unset, will be auto-populated. */
  studioAccountId?: string;
  /** Identifier. Name of this studio creative. This is a required field on insertion. */
  name?: string;
  /** The timestamp when the studio creative was created. This is a read-only, auto-generated field. */
  createdInfo?: LastModifiedInfo;
  /** Output only. Unique ID of this studio creative. This is a read-only, auto-generated field. */
  id?: string;
  /** Output only. Status of this studio creative. It is a read-only field. */
  status?:
    | "UNKNOWN_STATUS"
    | "IN_DEVELOPMENT"
    | "PUBLISHED"
    | "QA_REJECTED"
    | "QA_APPROVED"
    | "TRAFFICKED"
    | (string & {});
  /** Format of this studio creative. This is a required field on insertion. */
  format?:
    | "UNKNOWN"
    | "BANNER"
    | "EXPANDING"
    | "INTERSTITIAL"
    | "VPAID_LINEAR_VIDEO"
    | (string & {});
  /** The timestamp when the studio creative was last modified. This is a read-only, auto-generated field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** List of assets associated with this studio creative. It is a required field on insertion. */
  assetIds?: ReadonlyArray<string>;
  /** Backup image asset ID of this studio creative. It is a required field on insertion. */
  backupImageAssetId?: string;
}

export const StudioCreative: Schema.Schema<StudioCreative> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    studioCampaignId: Schema.optional(Schema.String),
    dimension: Schema.optional(StudioCreativeDimension),
    dynamicProfileId: Schema.optional(Schema.String),
    studioAdvertiserId: Schema.optional(Schema.String),
    studioAccountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createdInfo: Schema.optional(LastModifiedInfo),
    id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    assetIds: Schema.optional(Schema.Array(Schema.String)),
    backupImageAssetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "StudioCreative" });

export interface PathToConversionReportCompatibleFields {
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report. */
  perInteractionDimensions?: ReadonlyArray<Dimension>;
  /** The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields. */
  kind?: string;
  /** Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report. */
  customFloodlightVariables?: ReadonlyArray<Dimension>;
  /** Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report. */
  conversionDimensions?: ReadonlyArray<Dimension>;
}

export const PathToConversionReportCompatibleFields: Schema.Schema<PathToConversionReportCompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(Schema.Array(Metric)),
    perInteractionDimensions: Schema.optional(Schema.Array(Dimension)),
    kind: Schema.optional(Schema.String),
    customFloodlightVariables: Schema.optional(Schema.Array(Dimension)),
    conversionDimensions: Schema.optional(Schema.Array(Dimension)),
  }).annotate({ identifier: "PathToConversionReportCompatibleFields" });

export interface CrossMediaReachReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** The kind of resource this is, in this case dfareporting#crossMediaReachReportCompatibleFields. */
  kind?: string;
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
}

export const CrossMediaReachReportCompatibleFields: Schema.Schema<CrossMediaReachReportCompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    kind: Schema.optional(Schema.String),
    dimensions: Schema.optional(Schema.Array(Dimension)),
    metrics: Schema.optional(Schema.Array(Metric)),
  }).annotate({ identifier: "CrossMediaReachReportCompatibleFields" });

export interface ReachReportCompatibleFields {
  /** The kind of resource this is, in this case dfareporting#reachReportCompatibleFields. */
  kind?: string;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
  pivotedActivityMetrics?: ReadonlyArray<Metric>;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report. */
  reachByFrequencyMetrics?: ReadonlyArray<Metric>;
}

export const ReachReportCompatibleFields: Schema.Schema<ReachReportCompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.Array(Metric)),
    dimensions: Schema.optional(Schema.Array(Dimension)),
    pivotedActivityMetrics: Schema.optional(Schema.Array(Metric)),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    reachByFrequencyMetrics: Schema.optional(Schema.Array(Metric)),
  }).annotate({ identifier: "ReachReportCompatibleFields" });

export interface FloodlightReportCompatibleFields {
  /** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
  dimensions?: ReadonlyArray<Dimension>;
  /** Metrics which are compatible to be selected in the "metricNames" section of the report. */
  metrics?: ReadonlyArray<Metric>;
  /** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
  dimensionFilters?: ReadonlyArray<Dimension>;
  /** The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields. */
  kind?: string;
}

export const FloodlightReportCompatibleFields: Schema.Schema<FloodlightReportCompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensions: Schema.optional(Schema.Array(Dimension)),
    metrics: Schema.optional(Schema.Array(Metric)),
    dimensionFilters: Schema.optional(Schema.Array(Dimension)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightReportCompatibleFields" });

export interface CompatibleFields {
  /** Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
  crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
  pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "CROSS_MEDIA_REACH". */
  crossMediaReachReportCompatibleFields?: CrossMediaReachReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "REACH". */
  reachReportCompatibleFields?: ReachReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "STANDARD". */
  reportCompatibleFields?: ReportCompatibleFields;
  /** Contains items that are compatible to be selected for a report of type "FLOODLIGHT". */
  floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;
  /** The kind of resource this is, in this case dfareporting#compatibleFields. */
  kind?: string;
}

export const CompatibleFields: Schema.Schema<CompatibleFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    crossDimensionReachReportCompatibleFields: Schema.optional(
      CrossDimensionReachReportCompatibleFields,
    ),
    pathToConversionReportCompatibleFields: Schema.optional(
      PathToConversionReportCompatibleFields,
    ),
    crossMediaReachReportCompatibleFields: Schema.optional(
      CrossMediaReachReportCompatibleFields,
    ),
    reachReportCompatibleFields: Schema.optional(ReachReportCompatibleFields),
    reportCompatibleFields: Schema.optional(ReportCompatibleFields),
    floodlightReportCompatibleFields: Schema.optional(
      FloodlightReportCompatibleFields,
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompatibleFields" });

export interface ContentCategory {
  /** Account ID of this content category. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory". */
  kind?: string;
  /** ID of this content category. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account. */
  name?: string;
}

export const ContentCategory: Schema.Schema<ContentCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContentCategory" });

export interface AccountsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Account collection. */
  accounts?: ReadonlyArray<Account>;
}

export const AccountsListResponse: Schema.Schema<AccountsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    accounts: Schema.optional(Schema.Array(Account)),
  }).annotate({ identifier: "AccountsListResponse" });

export interface CreativeFieldsListResponse {
  /** Creative field collection. */
  creativeFields?: ReadonlyArray<CreativeField>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const CreativeFieldsListResponse: Schema.Schema<CreativeFieldsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFields: Schema.optional(Schema.Array(CreativeField)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeFieldsListResponse" });

export interface MobileApp {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp". */
  kind?: string;
  /** ID of this mobile app. */
  id?: string;
  /** Title of this mobile app. */
  title?: string;
  /** Publisher name. */
  publisherName?: string;
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
}

export const MobileApp: Schema.Schema<MobileApp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    publisherName: Schema.optional(Schema.String),
    directory: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileApp" });

export interface DeepLink {
  /** The mobile app targeted by this deep link. */
  mobileApp?: MobileApp;
  /** The URL of the mobile app being linked to. */
  appUrl?: string;
  /** Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE. */
  remarketingListIds?: ReadonlyArray<string>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink". */
  kind?: string;
  /** The fallback URL. This URL will be served to users who do not have the mobile app installed. */
  fallbackUrl?: string;
}

export const DeepLink: Schema.Schema<DeepLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobileApp: Schema.optional(MobileApp),
    appUrl: Schema.optional(Schema.String),
    remarketingListIds: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
    fallbackUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeepLink" });

export interface UserRolePermissionsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse". */
  kind?: string;
  /** User role permission collection. */
  userRolePermissions?: ReadonlyArray<UserRolePermission>;
}

export const UserRolePermissionsListResponse: Schema.Schema<UserRolePermissionsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    userRolePermissions: Schema.optional(Schema.Array(UserRolePermission)),
  }).annotate({ identifier: "UserRolePermissionsListResponse" });

export interface BrowsersListResponse {
  /** Browser collection. */
  browsers?: ReadonlyArray<Browser>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse". */
  kind?: string;
}

export const BrowsersListResponse: Schema.Schema<BrowsersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    browsers: Schema.optional(Schema.Array(Browser)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "BrowsersListResponse" });

export interface DateRange {
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
  startDate?: string;
  /** The kind of resource this is, in this case dfareporting#dateRange. */
  kind?: string;
}

export const DateRange: Schema.Schema<DateRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativeDateRange: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DateRange" });

export interface CustomRichMediaEvents {
  /** List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName. */
  filteredEventIds?: ReadonlyArray<DimensionValue>;
  /** The kind of resource this is, in this case dfareporting#customRichMediaEvents. */
  kind?: string;
}

export const CustomRichMediaEvents: Schema.Schema<CustomRichMediaEvents> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filteredEventIds: Schema.optional(Schema.Array(DimensionValue)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomRichMediaEvents" });

export interface Recipient {
  /** The delivery type for the recipient. */
  deliveryType?: "LINK" | "ATTACHMENT" | (string & {});
  /** The kind of resource this is, in this case dfareporting#recipient. */
  kind?: string;
  /** The email address of the recipient. */
  email?: string;
}

export const Recipient: Schema.Schema<Recipient> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deliveryType: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Recipient" });

export interface Report {
  /** The type of the report. */
  type?:
    | "STANDARD"
    | "REACH"
    | "PATH_TO_CONVERSION"
    | "CROSS_DIMENSION_REACH"
    | "FLOODLIGHT"
    | "CROSS_MEDIA_REACH"
    | (string & {});
  /** The filename used when generating report files for this report. */
  fileName?: string;
  /** Optional. The report criteria for a report of type "CROSS_MEDIA_REACH". */
  crossMediaReachCriteria?: {
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    metricNames?: ReadonlyArray<string>;
    dateRange?: DateRange;
    dimensions?: ReadonlyArray<SortedDimension>;
  };
  /** The kind of resource this is, in this case dfareporting#report. */
  kind?: string;
  /** The timestamp (in milliseconds since epoch) of when this report was last modified. */
  lastModifiedTime?: string;
  /** The report criteria for a report of type "REACH". */
  reachCriteria?: {
    metricNames?: ReadonlyArray<string>;
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    dateRange?: DateRange;
    activities?: Activities;
    customRichMediaEvents?: CustomRichMediaEvents;
    enableAllDimensionCombinations?: boolean;
    reachByFrequencyMetricNames?: ReadonlyArray<string>;
    dimensions?: ReadonlyArray<SortedDimension>;
  };
  /** The subaccount ID to which this report belongs if applicable. */
  subAccountId?: string;
  /** The eTag of this response for caching purposes. */
  etag?: string;
  /** The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format. */
  format?: "CSV" | "EXCEL" | (string & {});
  /** The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY". */
  schedule?: {
    active?: boolean;
    runsOnDayOfMonth?: "DAY_OF_MONTH" | "WEEK_OF_MONTH" | (string & {});
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
    every?: number;
    expirationDate?: string;
    timezone?: string;
    startDate?: string;
    repeats?: string;
  };
  /** The unique ID identifying this report resource. */
  id?: string;
  /** The report criteria for a report of type "PATH_TO_CONVERSION". */
  pathToConversionCriteria?: {
    activityFilters?: ReadonlyArray<DimensionValue>;
    dateRange?: DateRange;
    customFloodlightVariables?: ReadonlyArray<SortedDimension>;
    metricNames?: ReadonlyArray<string>;
    customRichMediaEvents?: ReadonlyArray<DimensionValue>;
    perInteractionDimensions?: ReadonlyArray<SortedDimension>;
    reportProperties?: {
      maximumInteractionGap?: number;
      includeUnattributedCookieConversions?: boolean;
      impressionsLookbackWindow?: number;
      pivotOnInteractionPath?: boolean;
      maximumClickInteractions?: number;
      clicksLookbackWindow?: number;
      includeAttributedIPConversions?: boolean;
      maximumImpressionInteractions?: number;
      includeUnattributedIPConversions?: boolean;
    };
    floodlightConfigId?: DimensionValue;
    conversionDimensions?: ReadonlyArray<SortedDimension>;
  };
  /** The user profile id of the owner of this report. */
  ownerProfileId?: string;
  /** The report criteria for a report of type "STANDARD". */
  criteria?: {
    dimensions?: ReadonlyArray<SortedDimension>;
    customRichMediaEvents?: CustomRichMediaEvents;
    dateRange?: DateRange;
    activities?: Activities;
    metricNames?: ReadonlyArray<string>;
    dimensionFilters?: ReadonlyArray<DimensionValue>;
  };
  /** The report criteria for a report of type "FLOODLIGHT". */
  floodlightCriteria?: {
    customRichMediaEvents?: ReadonlyArray<DimensionValue>;
    dimensions?: ReadonlyArray<SortedDimension>;
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    metricNames?: ReadonlyArray<string>;
    floodlightConfigId?: DimensionValue;
    dateRange?: DateRange;
    reportProperties?: {
      includeAttributedIPConversions?: boolean;
      includeUnattributedCookieConversions?: boolean;
      includeUnattributedIPConversions?: boolean;
    };
  };
  /** The account ID to which this report belongs. */
  accountId?: string;
  /** The report's email delivery settings. */
  delivery?: {
    emailOwner?: boolean;
    emailOwnerDeliveryType?: "LINK" | "ATTACHMENT" | (string & {});
    message?: string;
    recipients?: ReadonlyArray<Recipient>;
  };
  /** The report criteria for a report of type "CROSS_DIMENSION_REACH". */
  crossDimensionReachCriteria?: {
    dimensionFilters?: ReadonlyArray<DimensionValue>;
    metricNames?: ReadonlyArray<string>;
    dimension?:
      | "ADVERTISER"
      | "CAMPAIGN"
      | "SITE_BY_ADVERTISER"
      | "SITE_BY_CAMPAIGN"
      | (string & {});
    dateRange?: DateRange;
    pivoted?: boolean;
    breakdown?: ReadonlyArray<SortedDimension>;
    overlapMetricNames?: ReadonlyArray<string>;
  };
  /** The name of the report. */
  name?: string;
}

export const Report: Schema.Schema<Report> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    fileName: Schema.optional(Schema.String),
    crossMediaReachCriteria: Schema.optional(
      Schema.Struct({
        dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
        metricNames: Schema.optional(Schema.Array(Schema.String)),
        dateRange: Schema.optional(DateRange),
        dimensions: Schema.optional(Schema.Array(SortedDimension)),
      }),
    ),
    kind: Schema.optional(Schema.String),
    lastModifiedTime: Schema.optional(Schema.String),
    reachCriteria: Schema.optional(
      Schema.Struct({
        metricNames: Schema.optional(Schema.Array(Schema.String)),
        dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
        dateRange: Schema.optional(DateRange),
        activities: Schema.optional(Activities),
        customRichMediaEvents: Schema.optional(CustomRichMediaEvents),
        enableAllDimensionCombinations: Schema.optional(Schema.Boolean),
        reachByFrequencyMetricNames: Schema.optional(
          Schema.Array(Schema.String),
        ),
        dimensions: Schema.optional(Schema.Array(SortedDimension)),
      }),
    ),
    subAccountId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    schedule: Schema.optional(
      Schema.Struct({
        active: Schema.optional(Schema.Boolean),
        runsOnDayOfMonth: Schema.optional(Schema.String),
        repeatsOnWeekDays: Schema.optional(Schema.Array(Schema.String)),
        every: Schema.optional(Schema.Number),
        expirationDate: Schema.optional(Schema.String),
        timezone: Schema.optional(Schema.String),
        startDate: Schema.optional(Schema.String),
        repeats: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    pathToConversionCriteria: Schema.optional(
      Schema.Struct({
        activityFilters: Schema.optional(Schema.Array(DimensionValue)),
        dateRange: Schema.optional(DateRange),
        customFloodlightVariables: Schema.optional(
          Schema.Array(SortedDimension),
        ),
        metricNames: Schema.optional(Schema.Array(Schema.String)),
        customRichMediaEvents: Schema.optional(Schema.Array(DimensionValue)),
        perInteractionDimensions: Schema.optional(
          Schema.Array(SortedDimension),
        ),
        reportProperties: Schema.optional(
          Schema.Struct({
            maximumInteractionGap: Schema.optional(Schema.Number),
            includeUnattributedCookieConversions: Schema.optional(
              Schema.Boolean,
            ),
            impressionsLookbackWindow: Schema.optional(Schema.Number),
            pivotOnInteractionPath: Schema.optional(Schema.Boolean),
            maximumClickInteractions: Schema.optional(Schema.Number),
            clicksLookbackWindow: Schema.optional(Schema.Number),
            includeAttributedIPConversions: Schema.optional(Schema.Boolean),
            maximumImpressionInteractions: Schema.optional(Schema.Number),
            includeUnattributedIPConversions: Schema.optional(Schema.Boolean),
          }),
        ),
        floodlightConfigId: Schema.optional(DimensionValue),
        conversionDimensions: Schema.optional(Schema.Array(SortedDimension)),
      }),
    ),
    ownerProfileId: Schema.optional(Schema.String),
    criteria: Schema.optional(
      Schema.Struct({
        dimensions: Schema.optional(Schema.Array(SortedDimension)),
        customRichMediaEvents: Schema.optional(CustomRichMediaEvents),
        dateRange: Schema.optional(DateRange),
        activities: Schema.optional(Activities),
        metricNames: Schema.optional(Schema.Array(Schema.String)),
        dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
      }),
    ),
    floodlightCriteria: Schema.optional(
      Schema.Struct({
        customRichMediaEvents: Schema.optional(Schema.Array(DimensionValue)),
        dimensions: Schema.optional(Schema.Array(SortedDimension)),
        dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
        metricNames: Schema.optional(Schema.Array(Schema.String)),
        floodlightConfigId: Schema.optional(DimensionValue),
        dateRange: Schema.optional(DateRange),
        reportProperties: Schema.optional(
          Schema.Struct({
            includeAttributedIPConversions: Schema.optional(Schema.Boolean),
            includeUnattributedCookieConversions: Schema.optional(
              Schema.Boolean,
            ),
            includeUnattributedIPConversions: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    accountId: Schema.optional(Schema.String),
    delivery: Schema.optional(
      Schema.Struct({
        emailOwner: Schema.optional(Schema.Boolean),
        emailOwnerDeliveryType: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        recipients: Schema.optional(Schema.Array(Recipient)),
      }),
    ),
    crossDimensionReachCriteria: Schema.optional(
      Schema.Struct({
        dimensionFilters: Schema.optional(Schema.Array(DimensionValue)),
        metricNames: Schema.optional(Schema.Array(Schema.String)),
        dimension: Schema.optional(Schema.String),
        dateRange: Schema.optional(DateRange),
        pivoted: Schema.optional(Schema.Boolean),
        breakdown: Schema.optional(Schema.Array(SortedDimension)),
        overlapMetricNames: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Report" });

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

export const ReportList: Schema.Schema<ReportList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Report)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportList" });

export interface MobileAppsListResponse {
  /** Mobile apps collection. */
  mobileApps?: ReadonlyArray<MobileApp>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const MobileAppsListResponse: Schema.Schema<MobileAppsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobileApps: Schema.optional(Schema.Array(MobileApp)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileAppsListResponse" });

export interface DynamicTargetingKeysListResponse {
  /** Dynamic targeting key collection. */
  dynamicTargetingKeys?: ReadonlyArray<DynamicTargetingKey>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse". */
  kind?: string;
}

export const DynamicTargetingKeysListResponse: Schema.Schema<DynamicTargetingKeysListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicTargetingKeys: Schema.optional(Schema.Array(DynamicTargetingKey)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicTargetingKeysListResponse" });

export interface Element {
  /** Optional. The name of the element. It is defaulted to resource file name if not provided. */
  elementName?: string;
  /** Optional. Whether the start and end timestamp is local timestamp. The default value is false which means start and end timestamp is in UTC. */
  isLocalTimestamp?: boolean;
  /** Optional. The field ID that specify field used for proximity targeting. */
  proximityTargetingFieldId?: number;
  /** Required. The field ID to specify the field used for dynamic reporting in Campaign Manager 360. */
  reportingLabelFieldId?: number;
  /** Output only. The last modified timestamp of the element. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Required. The list of fields of the element. The field order and name should match the meta data in the content source source. */
  feedFields?: ReadonlyArray<FeedField>;
  /** Optional. The field ID to specify the field that represents the start timestamp. Only applicable if you're planning to use scheduling in your dynamic creative. */
  startTimestampFieldId?: number;
  /** Optional. The field ID to specify the field that represents the end timestamp. Only applicable if you're planning to use scheduling in your dynamic creative. */
  endTimestampFieldId?: number;
  /** Optional. The field ID to specify the active field in the feed. */
  activeFieldId?: number;
  /** Output only. The creation timestamp of the element. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Required. The field ID to specify the field used for uniquely identifying the feed row. This is a required field. */
  externalIdFieldId?: number;
  /** Optional. The field ID to specify the field that represents the default field in the feed. */
  defaultFieldId?: number;
}

export const Element: Schema.Schema<Element> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elementName: Schema.optional(Schema.String),
    isLocalTimestamp: Schema.optional(Schema.Boolean),
    proximityTargetingFieldId: Schema.optional(Schema.Number),
    reportingLabelFieldId: Schema.optional(Schema.Number),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    feedFields: Schema.optional(Schema.Array(FeedField)),
    startTimestampFieldId: Schema.optional(Schema.Number),
    endTimestampFieldId: Schema.optional(Schema.Number),
    activeFieldId: Schema.optional(Schema.Number),
    createInfo: Schema.optional(LastModifiedInfo),
    externalIdFieldId: Schema.optional(Schema.Number),
    defaultFieldId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Element" });

export interface AdSlot {
  /** Width of this ad slot. */
  width?: string;
  /** Height of this ad slot. */
  height?: string;
  /** Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** ID of the placement from an external platform that is linked to this ad slot. */
  linkedPlacementId?: string;
  /** Name of this ad slot. */
  name?: string;
  /** Payment source type of this ad slot. */
  paymentSourceType?:
    | "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID"
    | "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
    | (string & {});
  /** Comment for this ad slot. */
  comment?: string;
  /** Primary ad slot of a roadblock inventory item. */
  primary?: boolean;
}

export const AdSlot: Schema.Schema<AdSlot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    width: Schema.optional(Schema.String),
    height: Schema.optional(Schema.String),
    compatibility: Schema.optional(Schema.String),
    linkedPlacementId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    paymentSourceType: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AdSlot" });

export interface InventoryItem {
  /** Account ID of this inventory item. */
  accountId?: string;
  /** RFP ID of this inventory item. */
  rfpId?: string;
  /** ID of this inventory item. */
  id?: string;
  /** Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots. */
  name?: string;
  /** Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group. */
  adSlots?: ReadonlyArray<AdSlot>;
  /** Project ID of this inventory item. */
  projectId?: string;
  /** Estimated click-through rate of this inventory item. */
  estimatedClickThroughRate?: string;
  /** Advertiser ID of this inventory item. */
  advertiserId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem". */
  kind?: string;
  /** Negotiation channel ID of this inventory item. */
  negotiationChannelId?: string;
  /** Whether this inventory item is in plan. */
  inPlan?: boolean;
  /** Pricing of this inventory item. */
  pricing?: Pricing;
  /** Content category ID of this inventory item. */
  contentCategoryId?: string;
  /** Type of inventory item. */
  type?:
    | "PLANNING_PLACEMENT_TYPE_REGULAR"
    | "PLANNING_PLACEMENT_TYPE_CREDIT"
    | (string & {});
  /** Placement strategy ID of this inventory item. */
  placementStrategyId?: string;
  /** Subaccount ID of this inventory item. */
  subaccountId?: string;
  /** Information about the most recent modification of this inventory item. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Order ID of this inventory item. */
  orderId?: string;
  /** Estimated conversion rate of this inventory item. */
  estimatedConversionRate?: string;
  /** ID of the site this inventory item is associated with. */
  siteId?: string;
}

export const InventoryItem: Schema.Schema<InventoryItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    rfpId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    adSlots: Schema.optional(Schema.Array(AdSlot)),
    projectId: Schema.optional(Schema.String),
    estimatedClickThroughRate: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    negotiationChannelId: Schema.optional(Schema.String),
    inPlan: Schema.optional(Schema.Boolean),
    pricing: Schema.optional(Pricing),
    contentCategoryId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    placementStrategyId: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    orderId: Schema.optional(Schema.String),
    estimatedConversionRate: Schema.optional(Schema.String),
    siteId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InventoryItem" });

export interface InventoryItemsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Inventory item collection */
  inventoryItems?: ReadonlyArray<InventoryItem>;
}

export const InventoryItemsListResponse: Schema.Schema<InventoryItemsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    inventoryItems: Schema.optional(Schema.Array(InventoryItem)),
  }).annotate({ identifier: "InventoryItemsListResponse" });

export interface BillingRate {
  /** Flat rate in micros of this billing rate. This cannot co-exist with tiered rate. */
  rateInMicros?: string;
  /** End date of this billing rate. */
  endDate?: string;
  /** Billing currency code in ISO 4217 format. */
  currencyCode?: string;
  /** Name of this billing rate. This must be less than 256 characters long. */
  name?: string;
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
  /** Tiered rate of this billing rate. This cannot co-exist with flat rate. */
  tieredRates?: ReadonlyArray<BillingRateTieredRate>;
  /** ID of this billing rate. */
  id?: string;
  /** Unit of measure for this billing rate. */
  unitOfMeasure?: "CPM" | "CPC" | "EA" | "P2C" | (string & {});
  /** Start date of this billing rate. */
  startDate?: string;
}

export const BillingRate: Schema.Schema<BillingRate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rateInMicros: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tieredRates: Schema.optional(Schema.Array(BillingRateTieredRate)),
    id: Schema.optional(Schema.String),
    unitOfMeasure: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingRate" });

export interface ConnectionTypesListResponse {
  /** Collection of connection types such as broadband and mobile. */
  connectionTypes?: ReadonlyArray<ConnectionType>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse". */
  kind?: string;
}

export const ConnectionTypesListResponse: Schema.Schema<ConnectionTypesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionTypes: Schema.optional(Schema.Array(ConnectionType)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionTypesListResponse" });

export interface RemarketingListShare {
  /** Remarketing list ID. This is a read-only, auto-generated field. */
  remarketingListId?: string;
  /** Accounts that the remarketing list is shared with. */
  sharedAccountIds?: ReadonlyArray<string>;
  /** Advertisers that the remarketing list is shared with. */
  sharedAdvertiserIds?: ReadonlyArray<string>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare". */
  kind?: string;
}

export const RemarketingListShare: Schema.Schema<RemarketingListShare> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remarketingListId: Schema.optional(Schema.String),
    sharedAccountIds: Schema.optional(Schema.Array(Schema.String)),
    sharedAdvertiserIds: Schema.optional(Schema.Array(Schema.String)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemarketingListShare" });

export interface SubaccountsListResponse {
  /** Subaccount collection. */
  subaccounts?: ReadonlyArray<Subaccount>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const SubaccountsListResponse: Schema.Schema<SubaccountsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subaccounts: Schema.optional(Schema.Array(Subaccount)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubaccountsListResponse" });

export interface FeedIngestionStatus {
  /** Output only. The ingestion status of the feed. */
  ingestionStatus?: IngestionStatus;
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
}

export const FeedIngestionStatus: Schema.Schema<FeedIngestionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestionStatus: Schema.optional(IngestionStatus),
    state: Schema.optional(Schema.String),
    ingestionErrorRecords: Schema.optional(Schema.Array(IngestionErrorRecord)),
  }).annotate({ identifier: "FeedIngestionStatus" });

export interface DynamicFeed {
  /** Optional. Name of this dynamic feed. It is defaulted to content source file name if not provided. */
  dynamicFeedName?: string;
  /** Output only. The ingestion status of the dynamic feed. This is a read-only field. */
  feedIngestionStatus?: FeedIngestionStatus;
  /** Output only. The creation timestamp of the dynamic feed. This is a read-only field. */
  createInfo?: LastModifiedInfo;
  /** Required. The element of the dynamic feed that is to specify the schema of the feed. This is a required field. */
  element?: Element;
  /** Output only. The status of the feed. It is a read-only field that depends on the the feed ingestion status. The default value is INACTIVE, and it will be updated to ACTIVE once the feed is ingested successfully. */
  status?: "STATUS_UNKNOWN" | "ACTIVE" | "INACTIVE" | "DELETED" | (string & {});
  /** Output only. Unique ID of this dynamic feed. This is a read-only, auto-generated field. */
  dynamicFeedId?: string;
  /** Optional. The schedule of the dynamic feed. It can be set if the feed is published. */
  feedSchedule?: FeedSchedule;
  /** Required. Advertiser ID of this dynamic feed. This is a required field. */
  studioAdvertiserId?: string;
  /** Output only. The last modified timestamp of the dynamic feed. This is a read-only field. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Output only. Indicates whether the dynamic feed has a published version. This is a read-only field. */
  hasPublished?: boolean;
  /** Required. The content source of the dynamic feed. This is a required field. */
  contentSource?: ContentSource;
}

export const DynamicFeed: Schema.Schema<DynamicFeed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicFeedName: Schema.optional(Schema.String),
    feedIngestionStatus: Schema.optional(FeedIngestionStatus),
    createInfo: Schema.optional(LastModifiedInfo),
    element: Schema.optional(Element),
    status: Schema.optional(Schema.String),
    dynamicFeedId: Schema.optional(Schema.String),
    feedSchedule: Schema.optional(FeedSchedule),
    studioAdvertiserId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    hasPublished: Schema.optional(Schema.Boolean),
    contentSource: Schema.optional(ContentSource),
  }).annotate({ identifier: "DynamicFeed" });

export interface DynamicFeedsInsertRequest {
  /** Required. Dynamic profile ID of the inserted dynamic feed. */
  dynamicProfileId?: string;
  /** Required. Dynamic feed to insert. */
  dynamicFeed?: DynamicFeed;
}

export const DynamicFeedsInsertRequest: Schema.Schema<DynamicFeedsInsertRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicProfileId: Schema.optional(Schema.String),
    dynamicFeed: Schema.optional(DynamicFeed),
  }).annotate({ identifier: "DynamicFeedsInsertRequest" });

export interface LanguagesListResponse {
  /** Language collection. */
  languages?: ReadonlyArray<Language>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse". */
  kind?: string;
}

export const LanguagesListResponse: Schema.Schema<LanguagesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languages: Schema.optional(Schema.Array(Language)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguagesListResponse" });

export interface CreativeFieldValue {
  /** ID of this creative field value. This is a read-only, auto-generated field. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue". */
  kind?: string;
  /** Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field. */
  value?: string;
}

export const CreativeFieldValue: Schema.Schema<CreativeFieldValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeFieldValue" });

export interface CreativeFieldValuesListResponse {
  /** Creative field value collection. */
  creativeFieldValues?: ReadonlyArray<CreativeFieldValue>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const CreativeFieldValuesListResponse: Schema.Schema<CreativeFieldValuesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldValues: Schema.optional(Schema.Array(CreativeFieldValue)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreativeFieldValuesListResponse" });

export interface CitiesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse". */
  kind?: string;
  /** City collection. */
  cities?: ReadonlyArray<City>;
}

export const CitiesListResponse: Schema.Schema<CitiesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    cities: Schema.optional(Schema.Array(City)),
  }).annotate({ identifier: "CitiesListResponse" });

export interface MobileCarriersListResponse {
  /** Mobile carrier collection. */
  mobileCarriers?: ReadonlyArray<MobileCarrier>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse". */
  kind?: string;
}

export const MobileCarriersListResponse: Schema.Schema<MobileCarriersListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mobileCarriers: Schema.optional(Schema.Array(MobileCarrier)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "MobileCarriersListResponse" });

export interface MetrosListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse". */
  kind?: string;
  /** Metro collection. */
  metros?: ReadonlyArray<Metro>;
}

export const MetrosListResponse: Schema.Schema<MetrosListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    metros: Schema.optional(Schema.Array(Metro)),
  }).annotate({ identifier: "MetrosListResponse" });

export interface CreativeAssetMetadata {
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
  /** List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset. */
  clickTags?: ReadonlyArray<ClickTag>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
  kind?: string;
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
  /** ID of the creative asset. This is a required field. */
  assetIdentifier?: CreativeAssetId;
  /** Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. */
  richMedia?: boolean;
  /** Numeric ID of the asset. This is a read-only, auto-generated field. */
  id?: string;
  /** List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
  counterCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
  exitCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
  /** List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
  timerCustomEvents?: ReadonlyArray<CreativeCustomEvent>;
}

export const CreativeAssetMetadata: Schema.Schema<CreativeAssetMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnedValidationRules: Schema.optional(Schema.Array(Schema.String)),
    clickTags: Schema.optional(Schema.Array(ClickTag)),
    kind: Schema.optional(Schema.String),
    detectedFeatures: Schema.optional(Schema.Array(Schema.String)),
    assetIdentifier: Schema.optional(CreativeAssetId),
    idDimensionValue: Schema.optional(DimensionValue),
    richMedia: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    counterCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
    exitCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
    timerCustomEvents: Schema.optional(Schema.Array(CreativeCustomEvent)),
  }).annotate({ identifier: "CreativeAssetMetadata" });

export interface SiteCompanionSetting {
  /** Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes. */
  enabledSizes?: ReadonlyArray<Size>;
  /** Whether to serve only static images as companions. */
  imageOnly?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting". */
  kind?: string;
  /** Whether companions are disabled for this site template. */
  companionsDisabled?: boolean;
}

export const SiteCompanionSetting: Schema.Schema<SiteCompanionSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabledSizes: Schema.optional(Schema.Array(Size)),
    imageOnly: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    companionsDisabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SiteCompanionSetting" });

export interface SiteVideoSettings {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings". */
  kind?: string;
  /** Settings for the OBA icon of video creatives served to this site. This will act as default for new placements created under this site. */
  obaSettings?: ObaIcon;
  /** Settings for the companion creatives of video creatives served to this site. */
  companionSettings?: SiteCompanionSetting;
  /** Settings for the skippability of video creatives served to this site. This will act as default for new placements created under this site. */
  skippableSettings?: SiteSkippableSetting;
  /** Publisher specification ID used to identify site-associated publisher requirements and automatically populate transcode settings. If publisher specification ID is specified, it will take precedence over transcode settings. Possible values are: * `1`, Hulu * `2`, NBC * `3`, CBS * `4`, CBS Desktop * `5`, Discovery * `6`, VEVO HD * `7`, VEVO Vertical * `8`, Fox * `9`, CW Network * `10`, Disney * `11`, IGN * `12`, NFL.com * `13`, Turner Broadcasting * `14`, Tubi on Fox * `15`, Hearst Corporation * `16`, Twitch Desktop * `17`, ABC * `18`, Univision * `19`, MLB.com * `20`, MLB.com Mobile * `21`, MLB.com OTT * `22`, Polsat * `23`, TVN * `24`, Mediaset * `25`, Antena 3 * `26`, Mediamond * `27`, Sky Italia * `28`, Tubi on CBS * `29`, Spotify * `30`, Paramount * `31`, Max */
  publisherSpecificationId?: string;
  /** Whether OBA icons are enabled for this placement. */
  obaEnabled?: boolean;
  /** Settings for the transcodes of video creatives served to this site. This will act as default for new placements created under this site. */
  transcodeSettings?: SiteTranscodeSetting;
  /** Orientation of a site template used for video. This will act as default for new placements created under this site. */
  orientation?: "ANY" | "LANDSCAPE" | "PORTRAIT" | (string & {});
}

export const SiteVideoSettings: Schema.Schema<SiteVideoSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    obaSettings: Schema.optional(ObaIcon),
    companionSettings: Schema.optional(SiteCompanionSetting),
    skippableSettings: Schema.optional(SiteSkippableSetting),
    publisherSpecificationId: Schema.optional(Schema.String),
    obaEnabled: Schema.optional(Schema.Boolean),
    transcodeSettings: Schema.optional(SiteTranscodeSetting),
    orientation: Schema.optional(Schema.String),
  }).annotate({ identifier: "SiteVideoSettings" });

export interface Site {
  /** Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account. */
  name?: string;
  /** Site-wide settings. */
  siteSettings?: SiteSettings;
  /** Key name of this site. This is a read-only, auto-generated field. */
  keyName?: string;
  /** Optional. Ad serving platform ID to identify the ad serving platform used by the site. Measurement partners can use this field to add ad-server specific macros. If set, this value acts as the default during placement creation. Possible values are: * `1`, Adelphic * `2`, Adform * `3`, Adobe * `4`, Amobee * `5`, Basis (Centro) * `6`, Beeswax * `7`, Amazon * `8`, DV360 (DBM) * `9`, Innovid * `10`, MediaMath * `11`, Roku OneView DSP * `12`, TabMo Hawk * `13`, The Trade Desk * `14`, Xandr Invest DSP * `15`, Yahoo DSP * `16`, Zeta Global * `17`, Scaleout * `18`, Bidtellect * `19`, Unicorn * `20`, Teads * `21`, Quantcast * `22`, Cognitiv * `23`, AdTheorent * `24`, DeepIntent * `25`, Pulsepoint */
  adServingPlatformId?: string;
  /** Dimension value for the ID of the directory site. This is a read-only, auto-generated field. */
  directorySiteIdDimensionValue?: DimensionValue;
  /** Account ID of this site. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Whether this site is approved. */
  approved?: boolean;
  /** ID of this site. This is a read-only, auto-generated field. */
  id?: string;
  /** Subaccount ID of this site. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Directory site associated with this site. This is a required field that is read-only after insertion. */
  directorySiteId?: string;
  /** Site contacts. */
  siteContacts?: ReadonlyArray<SiteContact>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#site". */
  kind?: string;
  /** Default video settings for new placements created under this site. This value will be used to populate the placements.videoSettings field, when no value is specified for the new placement. */
  videoSettings?: SiteVideoSettings;
  /** Dimension value for the ID of this site. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
}

export const Site: Schema.Schema<Site> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    siteSettings: Schema.optional(SiteSettings),
    keyName: Schema.optional(Schema.String),
    adServingPlatformId: Schema.optional(Schema.String),
    directorySiteIdDimensionValue: Schema.optional(DimensionValue),
    accountId: Schema.optional(Schema.String),
    approved: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    directorySiteId: Schema.optional(Schema.String),
    siteContacts: Schema.optional(Schema.Array(SiteContact)),
    kind: Schema.optional(Schema.String),
    videoSettings: Schema.optional(SiteVideoSettings),
    idDimensionValue: Schema.optional(DimensionValue),
  }).annotate({ identifier: "Site" });

export interface UserRolePermissionGroup {
  /** ID of this user role permission. */
  id?: string;
  /** Name of this user role permission group. */
  name?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup". */
  kind?: string;
}

export const UserRolePermissionGroup: Schema.Schema<UserRolePermissionGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserRolePermissionGroup" });

export interface UserRolePermissionGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse". */
  kind?: string;
  /** User role permission group collection. */
  userRolePermissionGroups?: ReadonlyArray<UserRolePermissionGroup>;
}

export const UserRolePermissionGroupsListResponse: Schema.Schema<UserRolePermissionGroupsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    userRolePermissionGroups: Schema.optional(
      Schema.Array(UserRolePermissionGroup),
    ),
  }).annotate({ identifier: "UserRolePermissionGroupsListResponse" });

export interface SitesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Site collection. */
  sites?: ReadonlyArray<Site>;
}

export const SitesListResponse: Schema.Schema<SitesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    sites: Schema.optional(Schema.Array(Site)),
  }).annotate({ identifier: "SitesListResponse" });

export interface LandingPage {
  /** Advertiser ID of this landing page. This is a required field. */
  advertiserId?: string;
  /** URL of this landing page. This is a required field. */
  url?: string;
  /** ID of this landing page. This is a read-only, auto-generated field. */
  id?: string;
  /** Links that will direct the user to a mobile app, if installed. */
  deepLinks?: ReadonlyArray<DeepLink>;
  /** Whether this landing page has been archived. */
  archived?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage". */
  kind?: string;
  /** Name of this landing page. This is a required field. It must be less than 256 characters long. */
  name?: string;
}

export const LandingPage: Schema.Schema<LandingPage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    deepLinks: Schema.optional(Schema.Array(DeepLink)),
    archived: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LandingPage" });

export interface PlacementStrategiesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Placement strategy collection. */
  placementStrategies?: ReadonlyArray<PlacementStrategy>;
}

export const PlacementStrategiesListResponse: Schema.Schema<PlacementStrategiesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    placementStrategies: Schema.optional(Schema.Array(PlacementStrategy)),
  }).annotate({ identifier: "PlacementStrategiesListResponse" });

export interface CampaignCreativeAssociation {
  /** ID of the creative associated with the campaign. This is a required field. */
  creativeId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation". */
  kind?: string;
}

export const CampaignCreativeAssociation: Schema.Schema<CampaignCreativeAssociation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CampaignCreativeAssociation" });

export interface ContentCategoriesListResponse {
  /** Content category collection. */
  contentCategories?: ReadonlyArray<ContentCategory>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const ContentCategoriesListResponse: Schema.Schema<ContentCategoriesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentCategories: Schema.optional(Schema.Array(ContentCategory)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContentCategoriesListResponse" });

export interface FloodlightActivityGroup {
  /** Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion. */
  tagString?: string;
  /** Account ID of this floodlight activity group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup". */
  kind?: string;
  /** Type of the floodlight activity group. This is a required field that is read-only after insertion. */
  type?: "COUNTER" | "SALE" | (string & {});
  /** Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field. */
  idDimensionValue?: DimensionValue;
  /** ID of this floodlight activity group. This is a read-only, auto-generated field. */
  id?: string;
  /** Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field. */
  floodlightConfigurationIdDimensionValue?: DimensionValue;
  /** Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes. */
  name?: string;
  /** Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser. */
  advertiserId?: string;
  /** Floodlight configuration ID of this floodlight activity group. This is a required field. */
  floodlightConfigurationId?: string;
}

export const FloodlightActivityGroup: Schema.Schema<FloodlightActivityGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagString: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    idDimensionValue: Schema.optional(DimensionValue),
    id: Schema.optional(Schema.String),
    floodlightConfigurationIdDimensionValue: Schema.optional(DimensionValue),
    name: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    advertiserId: Schema.optional(Schema.String),
    floodlightConfigurationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivityGroup" });

export interface AdvertiserGroup {
  /** Account ID of this advertiser group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup". */
  kind?: string;
  /** ID of this advertiser group. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account. */
  name?: string;
}

export const AdvertiserGroup: Schema.Schema<AdvertiserGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvertiserGroup" });

export interface AdvertiserGroupsListResponse {
  /** Advertiser group collection. */
  advertiserGroups?: ReadonlyArray<AdvertiserGroup>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const AdvertiserGroupsListResponse: Schema.Schema<AdvertiserGroupsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserGroups: Schema.optional(Schema.Array(AdvertiserGroup)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvertiserGroupsListResponse" });

export interface Project {
  /** Audience gender of this project. */
  audienceGender?:
    | "PLANNING_AUDIENCE_GENDER_MALE"
    | "PLANNING_AUDIENCE_GENDER_FEMALE"
    | (string & {});
  startDate?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#project". */
  kind?: string;
  /** Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar. */
  budget?: string;
  /** Number of impressions that the advertiser is targeting. */
  targetImpressions?: string;
  /** CPA that the advertiser is targeting. */
  targetCpaNanos?: string;
  /** Client billing code of this project. */
  clientBillingCode?: string;
  /** CPM that the advertiser is targeting. */
  targetCpmNanos?: string;
  /** Subaccount ID of this project. */
  subaccountId?: string;
  /** Information about the most recent modification of this project. */
  lastModifiedInfo?: LastModifiedInfo;
  /** Name of the project client. */
  clientName?: string;
  /** vCPM from Active View that the advertiser is targeting. */
  targetCpmActiveViewNanos?: string;
  /** ID of this project. This is a read-only, auto-generated field. */
  id?: string;
  /** Number of conversions that the advertiser is targeting. */
  targetConversions?: string;
  /** Account ID of this project. */
  accountId?: string;
  /** Advertiser ID of this project. */
  advertiserId?: string;
  /** Number of clicks that the advertiser is targeting. */
  targetClicks?: string;
  /** CPC that the advertiser is targeting. */
  targetCpcNanos?: string;
  /** Audience age group of this project. */
  audienceAgeGroup?:
    | "PLANNING_AUDIENCE_AGE_18_24"
    | "PLANNING_AUDIENCE_AGE_25_34"
    | "PLANNING_AUDIENCE_AGE_35_44"
    | "PLANNING_AUDIENCE_AGE_45_54"
    | "PLANNING_AUDIENCE_AGE_55_64"
    | "PLANNING_AUDIENCE_AGE_65_OR_MORE"
    | "PLANNING_AUDIENCE_AGE_UNKNOWN"
    | (string & {});
  /** Overview of this project. */
  overview?: string;
  endDate?: string;
  /** Name of this project. */
  name?: string;
}

export const Project: Schema.Schema<Project> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audienceGender: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    budget: Schema.optional(Schema.String),
    targetImpressions: Schema.optional(Schema.String),
    targetCpaNanos: Schema.optional(Schema.String),
    clientBillingCode: Schema.optional(Schema.String),
    targetCpmNanos: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    lastModifiedInfo: Schema.optional(LastModifiedInfo),
    clientName: Schema.optional(Schema.String),
    targetCpmActiveViewNanos: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    targetConversions: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    targetClicks: Schema.optional(Schema.String),
    targetCpcNanos: Schema.optional(Schema.String),
    audienceAgeGroup: Schema.optional(Schema.String),
    overview: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Project" });

export interface ProjectsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Project collection. */
  projects?: ReadonlyArray<Project>;
}

export const ProjectsListResponse: Schema.Schema<ProjectsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    projects: Schema.optional(Schema.Array(Project)),
  }).annotate({ identifier: "ProjectsListResponse" });

export interface CampaignCreativeAssociationsListResponse {
  /** Campaign creative association collection */
  campaignCreativeAssociations?: ReadonlyArray<CampaignCreativeAssociation>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const CampaignCreativeAssociationsListResponse: Schema.Schema<CampaignCreativeAssociationsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    campaignCreativeAssociations: Schema.optional(
      Schema.Array(CampaignCreativeAssociation),
    ),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "CampaignCreativeAssociationsListResponse" });

export interface AdvertiserInvoicesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserInvoicesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Invoice collection */
  invoices?: ReadonlyArray<Invoice>;
}

export const AdvertiserInvoicesListResponse: Schema.Schema<AdvertiserInvoicesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    invoices: Schema.optional(Schema.Array(Invoice)),
  }).annotate({ identifier: "AdvertiserInvoicesListResponse" });

export interface AccountPermissionGroup {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup". */
  kind?: string;
  /** ID of this account permission group. */
  id?: string;
  /** Name of this account permission group. */
  name?: string;
}

export const AccountPermissionGroup: Schema.Schema<AccountPermissionGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountPermissionGroup" });

export interface TvCampaignTimepoint {
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
  /** The spend within the time range of the timepoint. */
  spend?: number;
}

export const TvCampaignTimepoint: Schema.Schema<TvCampaignTimepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dateWindow: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    spend: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TvCampaignTimepoint" });

export interface TvCampaignDetail {
  /** ID of this TV campaign. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#tvCampaignSummary". */
  kind?: string;
  /** The timepoints of the TV campaign. */
  timepoints?: ReadonlyArray<TvCampaignTimepoint>;
}

export const TvCampaignDetail: Schema.Schema<TvCampaignDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    timepoints: Schema.optional(Schema.Array(TvCampaignTimepoint)),
  }).annotate({ identifier: "TvCampaignDetail" });

export interface BillingProfile {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfile". */
  kind?: string;
  /** Billing currency code in ISO 4217 format.This is a read-only field. */
  currencyCode?: string;
  /** The ID of the payment account the billing profile belongs to. This is a read-only field. */
  paymentsAccountId?: string;
  /** Country code of this billing profile.This is a read-only field. */
  countryCode?: string;
  /** Status of this billing profile.This is a read-only field. */
  status?: "UNDER_REVIEW" | "ACTIVE" | "ARCHIVED" | (string & {});
  /** The ID of the secondary payment customer the billing profile belongs to. This is a read-only field. */
  secondaryPaymentsCustomerId?: string;
  /** Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile. */
  purchaseOrder?: string;
  /** Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level. */
  consolidatedInvoice?: boolean;
  /** ID of this billing profile. This is a read-only, auto-generated field. */
  id?: string;
  /** Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account. */
  name?: string;
  /** The ID of the payment customer the billing profile belongs to. This is a read-only field. */
  paymentsCustomerId?: string;
  /** Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign. */
  invoiceLevel?:
    | "ACCOUNT_LEVEL"
    | "ADVERTISER_LEVEL"
    | "CAMPAIGN_LEVEL"
    | (string & {});
  /** True if the billing profile is the account default profile. This is a read-only field. */
  isDefault?: boolean;
}

export const BillingProfile: Schema.Schema<BillingProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    currencyCode: Schema.optional(Schema.String),
    paymentsAccountId: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    secondaryPaymentsCustomerId: Schema.optional(Schema.String),
    purchaseOrder: Schema.optional(Schema.String),
    consolidatedInvoice: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    paymentsCustomerId: Schema.optional(Schema.String),
    invoiceLevel: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BillingProfile" });

export interface BillingProfilesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfilesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Billing profiles collection. */
  billingProfiles?: ReadonlyArray<BillingProfile>;
}

export const BillingProfilesListResponse: Schema.Schema<BillingProfilesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    billingProfiles: Schema.optional(Schema.Array(BillingProfile)),
  }).annotate({ identifier: "BillingProfilesListResponse" });

export interface RemarketingList {
  /** Rule used to populate the remarketing list with users. */
  listPopulationRule?: ListPopulationRule;
  /** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  subaccountId?: string;
  /** Remarketing list description. */
  description?: string;
  /** Whether this remarketing list is active. */
  active?: boolean;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList". */
  kind?: string;
  /** Dimension value for the advertiser ID that owns this remarketing list. This is a required field. */
  advertiserId?: string;
  /** Number of users currently in the list. This is a read-only field. */
  listSize?: string;
  /** Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive. */
  lifeSpan?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Name of the remarketing list. This is a required field. Must be no greater than 128 characters long. */
  name?: string;
  /** Remarketing list ID. This is a read-only, auto-generated field. */
  id?: string;
  /** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  accountId?: string;
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
}

export const RemarketingList: Schema.Schema<RemarketingList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listPopulationRule: Schema.optional(ListPopulationRule),
    subaccountId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    listSize: Schema.optional(Schema.String),
    lifeSpan: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    listSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemarketingList" });

export interface CreativeGroup {
  /** Advertiser ID of this creative group. This is a required field on insertion. */
  advertiserId?: string;
  /** Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive. */
  groupNumber?: number;
  /** ID of this creative group. This is a read-only, auto-generated field. */
  id?: string;
  /** Account ID of this creative group. This is a read-only field that can be left blank. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup". */
  kind?: string;
  /** Subaccount ID of this creative group. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser. */
  name?: string;
  /** Dimension value for the ID of the advertiser. This is a read-only, auto-generated field. */
  advertiserIdDimensionValue?: DimensionValue;
}

export const CreativeGroup: Schema.Schema<CreativeGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserId: Schema.optional(Schema.String),
    groupNumber: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
  }).annotate({ identifier: "CreativeGroup" });

export interface CountriesListResponse {
  /** Country collection. */
  countries?: ReadonlyArray<Country>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse". */
  kind?: string;
}

export const CountriesListResponse: Schema.Schema<CountriesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    countries: Schema.optional(Schema.Array(Country)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "CountriesListResponse" });

export interface CreativeGroupsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Creative group collection. */
  creativeGroups?: ReadonlyArray<CreativeGroup>;
}

export const CreativeGroupsListResponse: Schema.Schema<CreativeGroupsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    creativeGroups: Schema.optional(Schema.Array(CreativeGroup)),
  }).annotate({ identifier: "CreativeGroupsListResponse" });

export interface UserRole {
  /** ID of this user role. This is a read-only, auto-generated field. */
  id?: string;
  /** ID of the user role that this user role is based on or copied from. This is a required field. */
  parentUserRoleId?: string;
  /** Account ID of this user role. This is a read-only field that can be left blank. */
  accountId?: string;
  /** List of permissions associated with this user role. */
  permissions?: ReadonlyArray<UserRolePermission>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole". */
  kind?: string;
  /** Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account. */
  name?: string;
  /** Subaccount ID of this user role. This is a read-only field that can be left blank. */
  subaccountId?: string;
  /** Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions. */
  defaultUserRole?: boolean;
}

export const UserRole: Schema.Schema<UserRole> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    parentUserRoleId: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.Array(UserRolePermission)),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    defaultUserRole: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UserRole" });

export interface UserRolesListResponse {
  /** User role collection. */
  userRoles?: ReadonlyArray<UserRole>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const UserRolesListResponse: Schema.Schema<UserRolesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userRoles: Schema.optional(Schema.Array(UserRole)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserRolesListResponse" });

export interface DimensionValueList {
  /** The dimension values returned in this response. */
  items?: ReadonlyArray<DimensionValue>;
  /** The eTag of this response for caching purposes. */
  etag?: string;
  /** The kind of list this is, in this case dfareporting#dimensionValueList. */
  kind?: string;
  /** Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
  nextPageToken?: string;
}

export const DimensionValueList: Schema.Schema<DimensionValueList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(DimensionValue)),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DimensionValueList" });

export interface File {
  /** The output format of the report. Only available once the file is available. */
  format?: "CSV" | "EXCEL" | (string & {});
  /** Etag of this resource. */
  etag?: string;
  /** The ID of the report this file was generated from. */
  reportId?: string;
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
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#file". */
  kind?: string;
  /** The filename of the file. */
  fileName?: string;
  /** The unique ID of this report file. */
  id?: string;
  /** The URLs where the completed report file can be downloaded. */
  urls?: { browserUrl?: string; apiUrl?: string };
  /** The date range for which the file has report data. The date range will always be the absolute date range for which the report is run. */
  dateRange?: DateRange;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    format: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    reportId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    lastModifiedTime: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    fileName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    urls: Schema.optional(
      Schema.Struct({
        browserUrl: Schema.optional(Schema.String),
        apiUrl: Schema.optional(Schema.String),
      }),
    ),
    dateRange: Schema.optional(DateRange),
  }).annotate({ identifier: "File" });

export interface FileList {
  /** Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
  nextPageToken?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The files returned in this response. */
  items?: ReadonlyArray<File>;
}

export const FileList: Schema.Schema<FileList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(File)),
  }).annotate({ identifier: "FileList" });

export interface AdvertiserLandingPagesListResponse {
  /** Landing page collection */
  landingPages?: ReadonlyArray<LandingPage>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const AdvertiserLandingPagesListResponse: Schema.Schema<AdvertiserLandingPagesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    landingPages: Schema.optional(Schema.Array(LandingPage)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvertiserLandingPagesListResponse" });

export interface AccountUserProfilesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Account user profile collection. */
  accountUserProfiles?: ReadonlyArray<AccountUserProfile>;
}

export const AccountUserProfilesListResponse: Schema.Schema<AccountUserProfilesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    accountUserProfiles: Schema.optional(Schema.Array(AccountUserProfile)),
  }).annotate({ identifier: "AccountUserProfilesListResponse" });

export interface FloodlightConfigurationsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse". */
  kind?: string;
  /** Floodlight configuration collection. */
  floodlightConfigurations?: ReadonlyArray<FloodlightConfiguration>;
}

export const FloodlightConfigurationsListResponse: Schema.Schema<FloodlightConfigurationsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    floodlightConfigurations: Schema.optional(
      Schema.Array(FloodlightConfiguration),
    ),
  }).annotate({ identifier: "FloodlightConfigurationsListResponse" });

export interface PlacementsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Placement collection. */
  placements?: ReadonlyArray<Placement>;
}

export const PlacementsListResponse: Schema.Schema<PlacementsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    placements: Schema.optional(Schema.Array(Placement)),
  }).annotate({ identifier: "PlacementsListResponse" });

export interface TargetableRemarketingList {
  /** Targetable remarketing list ID. */
  id?: string;
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
  /** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  accountId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList". */
  kind?: string;
  /** Dimension value for the advertiser ID that owns this targetable remarketing list. */
  advertiserId?: string;
  /** Number of users currently in the list. This is a read-only field. */
  listSize?: string;
  /** Targetable remarketing list description. */
  description?: string;
  /** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
  subaccountId?: string;
  /** Dimension value for the ID of the advertiser. */
  advertiserIdDimensionValue?: DimensionValue;
  /** Name of the targetable remarketing list. Is no greater than 128 characters long. */
  name?: string;
  /** Number of days that a user should remain in the targetable remarketing list without an impression. */
  lifeSpan?: string;
}

export const TargetableRemarketingList: Schema.Schema<TargetableRemarketingList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    active: Schema.optional(Schema.Boolean),
    listSource: Schema.optional(Schema.String),
    accountId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    advertiserId: Schema.optional(Schema.String),
    listSize: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    subaccountId: Schema.optional(Schema.String),
    advertiserIdDimensionValue: Schema.optional(DimensionValue),
    name: Schema.optional(Schema.String),
    lifeSpan: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetableRemarketingList" });

export interface TargetableRemarketingListsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Targetable remarketing list collection. */
  targetableRemarketingLists?: ReadonlyArray<TargetableRemarketingList>;
}

export const TargetableRemarketingListsListResponse: Schema.Schema<TargetableRemarketingListsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    targetableRemarketingLists: Schema.optional(
      Schema.Array(TargetableRemarketingList),
    ),
  }).annotate({ identifier: "TargetableRemarketingListsListResponse" });

export interface RemarketingListsListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Remarketing list collection. */
  remarketingLists?: ReadonlyArray<RemarketingList>;
}

export const RemarketingListsListResponse: Schema.Schema<RemarketingListsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    remarketingLists: Schema.optional(Schema.Array(RemarketingList)),
  }).annotate({ identifier: "RemarketingListsListResponse" });

export interface AccountPermissionGroupsListResponse {
  /** Account permission group collection. */
  accountPermissionGroups?: ReadonlyArray<AccountPermissionGroup>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupGroupsListResponse". */
  kind?: string;
}

export const AccountPermissionGroupsListResponse: Schema.Schema<AccountPermissionGroupsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountPermissionGroups: Schema.optional(
      Schema.Array(AccountPermissionGroup),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountPermissionGroupsListResponse" });

export interface BillingRatesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingRatesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Billing rates collection. */
  billingRates?: ReadonlyArray<BillingRate>;
}

export const BillingRatesListResponse: Schema.Schema<BillingRatesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    billingRates: Schema.optional(Schema.Array(BillingRate)),
  }).annotate({ identifier: "BillingRatesListResponse" });

export interface TargetingTemplatesListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
  /** Targeting template collection. */
  targetingTemplates?: ReadonlyArray<TargetingTemplate>;
}

export const TargetingTemplatesListResponse: Schema.Schema<TargetingTemplatesListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    targetingTemplates: Schema.optional(Schema.Array(TargetingTemplate)),
  }).annotate({ identifier: "TargetingTemplatesListResponse" });

export interface FloodlightActivityGroupsListResponse {
  /** Floodlight activity group collection. */
  floodlightActivityGroups?: ReadonlyArray<FloodlightActivityGroup>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse". */
  kind?: string;
  /** Pagination token to be used for the next list operation. */
  nextPageToken?: string;
}

export const FloodlightActivityGroupsListResponse: Schema.Schema<FloodlightActivityGroupsListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floodlightActivityGroups: Schema.optional(
      Schema.Array(FloodlightActivityGroup),
    ),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FloodlightActivityGroupsListResponse" });

export interface DfareportingStudioCreativeAssetsInsertRequest {
  /** Required. Studio advertiser ID of the studio creative asset. It is a required field on insertion. */
  studioAdvertiserId?: string;
  /** Optional. Studio account ID of the studio creative asset. It is a optional. */
  studioAccountId?: string;
  /** Optional. Studio creative ID of the studio creative asset. It is a optional field. If it is set, the asset will be associated to the creative. */
  studioCreativeId?: string;
}

export const DfareportingStudioCreativeAssetsInsertRequest: Schema.Schema<DfareportingStudioCreativeAssetsInsertRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    studioAdvertiserId: Schema.optional(Schema.String),
    studioAccountId: Schema.optional(Schema.String),
    studioCreativeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DfareportingStudioCreativeAssetsInsertRequest" });

export interface ConversionsBatchUpdateResponse {
  /** Indicates that some or all conversions failed to update. */
  hasFailures?: boolean;
  /** The update status of each conversion. Statuses are returned in the same order that conversions are updated. */
  status?: ReadonlyArray<ConversionStatus>;
  /** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse". */
  kind?: string;
}

export const ConversionsBatchUpdateResponse: Schema.Schema<ConversionsBatchUpdateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasFailures: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Array(ConversionStatus)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionsBatchUpdateResponse" });

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
      path: "userprofiles/{+profileId}/advertisers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAdvertisersRequest>;

export type InsertAdvertisersResponse = Advertiser;
export const InsertAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type InsertAdvertisersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new advertiser. */
export const insertAdvertisers: API.OperationMethod<
  InsertAdvertisersRequest,
  InsertAdvertisersResponse,
  InsertAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdvertisersRequest,
  output: InsertAdvertisersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAdvertisersRequest {
  /** Required. Advertiser ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Advertiser;
}

export const PatchAdvertisersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Advertiser).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/advertisers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAdvertisersRequest>;

export type PatchAdvertisersResponse = Advertiser;
export const PatchAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type PatchAdvertisersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing advertiser. This method supports patch semantics. */
export const patchAdvertisers: API.OperationMethod<
  PatchAdvertisersRequest,
  PatchAdvertisersResponse,
  PatchAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvertisersRequest,
  output: PatchAdvertisersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  T.Http({
    method: "GET",
    path: "userprofiles/{+profileId}/advertisers/{+id}",
  }),
  svc,
) as unknown as Schema.Schema<GetAdvertisersRequest>;

export type GetAdvertisersResponse = Advertiser;
export const GetAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type GetAdvertisersError = DefaultErrors | NotFound | Forbidden;

/** Gets one advertiser by ID. */
export const getAdvertisers: API.OperationMethod<
  GetAdvertisersRequest,
  GetAdvertisersResponse,
  GetAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvertisersRequest,
  output: GetAdvertisersResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/advertisers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAdvertisersRequest>;

export type UpdateAdvertisersResponse = Advertiser;
export const UpdateAdvertisersResponse = /*@__PURE__*/ /*#__PURE__*/ Advertiser;

export type UpdateAdvertisersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing advertiser. */
export const updateAdvertisers: API.OperationMethod<
  UpdateAdvertisersRequest,
  UpdateAdvertisersResponse,
  UpdateAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdvertisersRequest,
  output: UpdateAdvertisersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAdvertisersRequest {
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" . */
  searchString?: string;
  /** Select only advertisers with these advertiser group IDs. */
  advertiserGroupIds?: string[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only advertisers with these subaccount IDs. */
  subaccountId?: string;
  /** Select only advertisers with these floodlight configuration IDs. */
  floodlightConfigurationIds?: string[];
  /** Select only advertisers with the specified status. */
  status?: "APPROVED" | "ON_HOLD" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only advertisers with these IDs. */
  ids?: string[];
  /** Select only advertisers which do not belong to any advertiser group. */
  includeAdvertisersWithoutGroupsOnly?: boolean;
  /** Select only advertisers which use another advertiser's floodlight configuration. */
  onlyParent?: boolean;
}

export const ListAdvertisersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    advertiserGroupIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserGroupIds"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    subaccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subaccountId"),
    ),
    floodlightConfigurationIds: Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("floodlightConfigurationIds")),
    status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    includeAdvertisersWithoutGroupsOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeAdvertisersWithoutGroupsOnly"),
    ),
    onlyParent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("onlyParent")),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/advertisers" }),
  svc,
) as unknown as Schema.Schema<ListAdvertisersRequest>;

export type ListAdvertisersResponse = AdvertisersListResponse;
export const ListAdvertisersResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertisersListResponse;

export type ListAdvertisersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of advertisers, possibly filtered. This method supports paging. */
export const listAdvertisers: API.PaginatedOperationMethod<
  ListAdvertisersRequest,
  ListAdvertisersResponse,
  ListAdvertisersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertisersRequest,
  output: ListAdvertisersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/operatingSystemVersions/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetOperatingSystemVersionsRequest>;

export type GetOperatingSystemVersionsResponse = OperatingSystemVersion;
export const GetOperatingSystemVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystemVersion;

export type GetOperatingSystemVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one operating system version by ID. */
export const getOperatingSystemVersions: API.OperationMethod<
  GetOperatingSystemVersionsRequest,
  GetOperatingSystemVersionsResponse,
  GetOperatingSystemVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperatingSystemVersionsRequest,
  output: GetOperatingSystemVersionsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/operatingSystemVersions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListOperatingSystemVersionsRequest>;

export type ListOperatingSystemVersionsResponse =
  OperatingSystemVersionsListResponse;
export const ListOperatingSystemVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystemVersionsListResponse;

export type ListOperatingSystemVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of operating system versions. */
export const listOperatingSystemVersions: API.OperationMethod<
  ListOperatingSystemVersionsRequest,
  ListOperatingSystemVersionsResponse,
  ListOperatingSystemVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOperatingSystemVersionsRequest,
  output: ListOperatingSystemVersionsResponse,
  errors: [NotFound, Forbidden],
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
  T.Http({ method: "GET", path: "studio/dynamicFeeds/{+dynamicFeedId}" }),
  svc,
) as unknown as Schema.Schema<GetDynamicFeedsRequest>;

export type GetDynamicFeedsResponse = DynamicFeed;
export const GetDynamicFeedsResponse = /*@__PURE__*/ /*#__PURE__*/ DynamicFeed;

export type GetDynamicFeedsError = DefaultErrors | NotFound | Forbidden;

/** Gets a dynamic feed by ID. */
export const getDynamicFeeds: API.OperationMethod<
  GetDynamicFeedsRequest,
  GetDynamicFeedsResponse,
  GetDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDynamicFeedsRequest,
  output: GetDynamicFeedsResponse,
  errors: [NotFound, Forbidden],
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

export type InsertDynamicFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new dynamic feed. */
export const insertDynamicFeeds: API.OperationMethod<
  InsertDynamicFeedsRequest,
  InsertDynamicFeedsResponse,
  InsertDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDynamicFeedsRequest,
  output: InsertDynamicFeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateDynamicFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a new dynamic feed. For draft feeds, only Element can be updated. For published feeds, only FeedSchedule can be updated. Other fields will be ignored. */
export const updateDynamicFeeds: API.OperationMethod<
  UpdateDynamicFeedsRequest,
  UpdateDynamicFeedsResponse,
  UpdateDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDynamicFeedsRequest,
  output: UpdateDynamicFeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "studio/dynamicFeeds/{+dynamicFeedId}/retransform",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RetransformDynamicFeedsRequest>;

export type RetransformDynamicFeedsResponse = DynamicFeed;
export const RetransformDynamicFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicFeed;

export type RetransformDynamicFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retransforms a dynamic feed. Only draft feeds can be retransformed (i.e. the feed has not been published). */
export const retransformDynamicFeeds: API.OperationMethod<
  RetransformDynamicFeedsRequest,
  RetransformDynamicFeedsResponse,
  RetransformDynamicFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetransformDynamicFeedsRequest,
  output: RetransformDynamicFeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "studio/dynamicProfiles/{+dynamicProfileId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDynamicProfilesRequest>;

export type GetDynamicProfilesResponse = DynamicProfile;
export const GetDynamicProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicProfile;

export type GetDynamicProfilesError = DefaultErrors | NotFound | Forbidden;

/** Gets a dynamic profile by ID. */
export const getDynamicProfiles: API.OperationMethod<
  GetDynamicProfilesRequest,
  GetDynamicProfilesResponse,
  GetDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDynamicProfilesRequest,
  output: GetDynamicProfilesResponse,
  errors: [NotFound, Forbidden],
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

export type InsertDynamicProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new dynamic profile. */
export const insertDynamicProfiles: API.OperationMethod<
  InsertDynamicProfilesRequest,
  InsertDynamicProfilesResponse,
  InsertDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDynamicProfilesRequest,
  output: InsertDynamicProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "studio/dynamicProfiles/{+dynamicProfileId}/generateCode",
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateCodeDynamicProfilesRequest>;

export type GenerateCodeDynamicProfilesResponse =
  DynamicProfileGenerateCodeResponse;
export const GenerateCodeDynamicProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicProfileGenerateCodeResponse;

export type GenerateCodeDynamicProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Generates code for a dynamic profile, which will need unescaping. */
export const generateCodeDynamicProfiles: API.OperationMethod<
  GenerateCodeDynamicProfilesRequest,
  GenerateCodeDynamicProfilesResponse,
  GenerateCodeDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateCodeDynamicProfilesRequest,
  output: GenerateCodeDynamicProfilesResponse,
  errors: [NotFound, Forbidden],
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
      path: "studio/dynamicProfiles/{+dynamicProfileId}/publish",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishDynamicProfilesRequest>;

export interface PublishDynamicProfilesResponse {}
export const PublishDynamicProfilesResponse: Schema.Schema<PublishDynamicProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<PublishDynamicProfilesResponse>;

export type PublishDynamicProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Publish for a dynamic profile. */
export const publishDynamicProfiles: API.OperationMethod<
  PublishDynamicProfilesRequest,
  PublishDynamicProfilesResponse,
  PublishDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishDynamicProfilesRequest,
  output: PublishDynamicProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateDynamicProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing dynamic profile. */
export const updateDynamicProfiles: API.OperationMethod<
  UpdateDynamicProfilesRequest,
  UpdateDynamicProfilesResponse,
  UpdateDynamicProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDynamicProfilesRequest,
  output: UpdateDynamicProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/countries/{+dartId}",
  }),
  svc,
) as unknown as Schema.Schema<GetCountriesRequest>;

export type GetCountriesResponse = Country;
export const GetCountriesResponse = /*@__PURE__*/ /*#__PURE__*/ Country;

export type GetCountriesError = DefaultErrors | NotFound | Forbidden;

/** Gets one country by ID. */
export const getCountries: API.OperationMethod<
  GetCountriesRequest,
  GetCountriesResponse,
  GetCountriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCountriesRequest,
  output: GetCountriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCountriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListCountriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/countries" }),
  svc,
) as unknown as Schema.Schema<ListCountriesRequest>;

export type ListCountriesResponse = CountriesListResponse;
export const ListCountriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CountriesListResponse;

export type ListCountriesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of countries. */
export const listCountries: API.OperationMethod<
  ListCountriesRequest,
  ListCountriesResponse,
  ListCountriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCountriesRequest,
  output: ListCountriesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCampaignCreativeAssociationsRequest>;

export type InsertCampaignCreativeAssociationsResponse =
  CampaignCreativeAssociation;
export const InsertCampaignCreativeAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CampaignCreativeAssociation;

export type InsertCampaignCreativeAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already. */
export const insertCampaignCreativeAssociations: API.OperationMethod<
  InsertCampaignCreativeAssociationsRequest,
  InsertCampaignCreativeAssociationsResponse,
  InsertCampaignCreativeAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCampaignCreativeAssociationsRequest,
  output: InsertCampaignCreativeAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCampaignCreativeAssociationsRequest {
  /** Campaign ID in this association. */
  campaignId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListCampaignCreativeAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    campaignId: Schema.String.pipe(T.HttpPath("campaignId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListCampaignCreativeAssociationsRequest>;

export type ListCampaignCreativeAssociationsResponse =
  CampaignCreativeAssociationsListResponse;
export const ListCampaignCreativeAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CampaignCreativeAssociationsListResponse;

export type ListCampaignCreativeAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of creative IDs associated with the specified campaign. This method supports paging. */
export const listCampaignCreativeAssociations: API.PaginatedOperationMethod<
  ListCampaignCreativeAssociationsRequest,
  ListCampaignCreativeAssociationsResponse,
  ListCampaignCreativeAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCampaignCreativeAssociationsRequest,
  output: ListCampaignCreativeAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetUserRolePermissionGroupsRequest {
  /** User role permission group ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetUserRolePermissionGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/userRolePermissionGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetUserRolePermissionGroupsRequest>;

export type GetUserRolePermissionGroupsResponse = UserRolePermissionGroup;
export const GetUserRolePermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermissionGroup;

export type GetUserRolePermissionGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one user role permission group by ID. */
export const getUserRolePermissionGroups: API.OperationMethod<
  GetUserRolePermissionGroupsRequest,
  GetUserRolePermissionGroupsResponse,
  GetUserRolePermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserRolePermissionGroupsRequest,
  output: GetUserRolePermissionGroupsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/userRolePermissionGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListUserRolePermissionGroupsRequest>;

export type ListUserRolePermissionGroupsResponse =
  UserRolePermissionGroupsListResponse;
export const ListUserRolePermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermissionGroupsListResponse;

export type ListUserRolePermissionGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a list of all supported user role permission groups. */
export const listUserRolePermissionGroups: API.OperationMethod<
  ListUserRolePermissionGroupsRequest,
  ListUserRolePermissionGroupsResponse,
  ListUserRolePermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUserRolePermissionGroupsRequest,
  output: ListUserRolePermissionGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountPermissionsRequest {
  /** Account permission ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAccountPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/accountPermissions/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountPermissionsRequest>;

export type GetAccountPermissionsResponse = AccountPermission;
export const GetAccountPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermission;

export type GetAccountPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Gets one account permission by ID. */
export const getAccountPermissions: API.OperationMethod<
  GetAccountPermissionsRequest,
  GetAccountPermissionsResponse,
  GetAccountPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountPermissionsRequest,
  output: GetAccountPermissionsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/accountPermissions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountPermissionsRequest>;

export type ListAccountPermissionsResponse = AccountPermissionsListResponse;
export const ListAccountPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermissionsListResponse;

export type ListAccountPermissionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the list of account permissions. */
export const listAccountPermissions: API.OperationMethod<
  ListAccountPermissionsRequest,
  ListAccountPermissionsResponse,
  ListAccountPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountPermissionsRequest,
  output: ListAccountPermissionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMetrosRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListMetrosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/metros" }),
  svc,
) as unknown as Schema.Schema<ListMetrosRequest>;

export type ListMetrosResponse = MetrosListResponse;
export const ListMetrosResponse =
  /*@__PURE__*/ /*#__PURE__*/ MetrosListResponse;

export type ListMetrosError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of metros. */
export const listMetros: API.OperationMethod<
  ListMetrosRequest,
  ListMetrosResponse,
  ListMetrosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMetrosRequest,
  output: ListMetrosResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSitesRequest {
  /** Select only AdWords sites. */
  adWordsSite?: boolean;
  /** Select only sites with these directory site IDs. */
  directorySiteIds?: string[];
  /** Select only sites with this subaccount ID. */
  subaccountId?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site". */
  searchString?: string;
  /** Select only sites that accept publisher paid placements. */
  acceptsPublisherPaidPlacements?: boolean;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInterstitialPlacements?: boolean;
  /** Select only sites with these campaign IDs. */
  campaignIds?: string[];
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInStreamVideoPlacements?: boolean;
  /** Select only sites with these IDs. */
  ids?: string[];
  /** Select only approved sites. */
  approved?: boolean;
  /** Select only sites that have not been mapped to a directory site. */
  unmappedSite?: boolean;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adWordsSite: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("adWordsSite")),
  directorySiteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("directorySiteIds"),
  ),
  subaccountId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("subaccountId"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  acceptsPublisherPaidPlacements: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acceptsPublisherPaidPlacements"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  acceptsInterstitialPlacements: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acceptsInterstitialPlacements"),
  ),
  campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("campaignIds"),
  ),
  acceptsInStreamVideoPlacements: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("acceptsInStreamVideoPlacements"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  approved: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("approved")),
  unmappedSite: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("unmappedSite"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/sites" }),
  svc,
) as unknown as Schema.Schema<ListSitesRequest>;

export type ListSitesResponse = SitesListResponse;
export const ListSitesResponse = /*@__PURE__*/ /*#__PURE__*/ SitesListResponse;

export type ListSitesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of sites, possibly filtered. This method supports paging. */
export const listSites: API.PaginatedOperationMethod<
  ListSitesRequest,
  ListSitesResponse,
  ListSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSitesRequest,
  output: ListSitesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    path: "userprofiles/{+profileId}/sites",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateSitesRequest>;

export type UpdateSitesResponse = Site;
export const UpdateSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type UpdateSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing site. */
export const updateSites: API.OperationMethod<
  UpdateSitesRequest,
  UpdateSitesResponse,
  UpdateSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSitesRequest,
  output: UpdateSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchSitesRequest {
  /** Required. Site ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Site;
}

export const PatchSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpQuery("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(Site).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{+profileId}/sites",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchSitesRequest>;

export type PatchSitesResponse = Site;
export const PatchSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type PatchSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing site. This method supports patch semantics. */
export const patchSites: API.OperationMethod<
  PatchSitesRequest,
  PatchSitesResponse,
  PatchSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSitesRequest,
  output: PatchSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/sites",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertSitesRequest>;

export type InsertSitesResponse = Site;
export const InsertSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type InsertSitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new site. */
export const insertSites: API.OperationMethod<
  InsertSitesRequest,
  InsertSitesResponse,
  InsertSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSitesRequest,
  output: InsertSitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSitesRequest {
  /** Site ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetSitesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/sites/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetSitesRequest>;

export type GetSitesResponse = Site;
export const GetSitesResponse = /*@__PURE__*/ /*#__PURE__*/ Site;

export type GetSitesError = DefaultErrors | NotFound | Forbidden;

/** Gets one site by ID. */
export const getSites: API.OperationMethod<
  GetSitesRequest,
  GetSitesResponse,
  GetSitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSitesRequest,
  output: GetSitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface RunReportsRequest {
  /** The ID of the report. */
  reportId: string;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** If set and true, tries to run the report synchronously. */
  synchronous?: boolean;
}

export const RunReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  synchronous: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("synchronous")),
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

export type RunReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs a report. */
export const runReports: API.OperationMethod<
  RunReportsRequest,
  RunReportsResponse,
  RunReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunReportsRequest,
  output: RunReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type UpdateReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a report. */
export const updateReports: API.OperationMethod<
  UpdateReportsRequest,
  UpdateReportsResponse,
  UpdateReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateReportsRequest,
  output: UpdateReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListReportsRequest {
  /** The scope that defines which results are returned. */
  scope?: "ALL" | "MINE" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The field by which to sort the list. */
  sortField?: "ID" | "LAST_MODIFIED_TIME" | "NAME" | (string & {});
}

export const ListReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/reports" }),
  svc,
) as unknown as Schema.Schema<ListReportsRequest>;

export type ListReportsResponse = ReportList;
export const ListReportsResponse = /*@__PURE__*/ /*#__PURE__*/ ReportList;

export type ListReportsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves list of reports. */
export const listReports: API.PaginatedOperationMethod<
  ListReportsRequest,
  ListReportsResponse,
  ListReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReportsRequest,
  output: ListReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface GetReportsRequest {
  /** The ID of the report. */
  reportId: string;
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
}

export const GetReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{profileId}/reports/{reportId}",
  }),
  svc,
) as unknown as Schema.Schema<GetReportsRequest>;

export type GetReportsResponse = Report;
export const GetReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Report;

export type GetReportsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a report by its ID. */
export const getReports: API.OperationMethod<
  GetReportsRequest,
  GetReportsResponse,
  GetReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetReportsRequest,
  output: GetReportsResponse,
  errors: [NotFound, Forbidden],
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

export type DeleteReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a report by its ID. */
export const deleteReports: API.OperationMethod<
  DeleteReportsRequest,
  DeleteReportsResponse,
  DeleteReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteReportsRequest,
  output: DeleteReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a report. */
export const insertReports: API.OperationMethod<
  InsertReportsRequest,
  InsertReportsResponse,
  InsertReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertReportsRequest,
  output: InsertReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchReportsRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The ID of the report. */
  reportId: string;
  /** Request body */
  body?: Report;
}

export const PatchReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  body: Schema.optional(Report).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{profileId}/reports/{reportId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchReportsRequest>;

export type PatchReportsResponse = Report;
export const PatchReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Report;

export type PatchReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing report. This method supports patch semantics. */
export const patchReports: API.OperationMethod<
  PatchReportsRequest,
  PatchReportsResponse,
  PatchReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchReportsRequest,
  output: PatchReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetReportsFilesRequest {
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The ID of the report. */
  reportId: string;
  /** The ID of the report file. */
  fileId: string;
}

export const GetReportsFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    reportId: Schema.String.pipe(T.HttpPath("reportId")),
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

export type GetReportsFilesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a report file by its report ID and file ID. This method supports media download. */
export const getReportsFiles: API.OperationMethod<
  GetReportsFilesRequest,
  GetReportsFilesResponse,
  GetReportsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetReportsFilesRequest,
  output: GetReportsFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListReportsFilesRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The ID of the parent report. */
  reportId: string;
  /** The field by which to sort the list. */
  sortField?: "ID" | "LAST_MODIFIED_TIME" | (string & {});
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
}

export const ListReportsFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    reportId: Schema.String.pipe(T.HttpPath("reportId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/reports/{reportId}/files",
    }),
    svc,
  ) as unknown as Schema.Schema<ListReportsFilesRequest>;

export type ListReportsFilesResponse = FileList;
export const ListReportsFilesResponse = /*@__PURE__*/ /*#__PURE__*/ FileList;

export type ListReportsFilesError = DefaultErrors | NotFound | Forbidden;

/** Lists files for a report. */
export const listReportsFiles: API.PaginatedOperationMethod<
  ListReportsFilesRequest,
  ListReportsFilesResponse,
  ListReportsFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReportsFilesRequest,
  output: ListReportsFilesResponse,
  errors: [NotFound, Forbidden],
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

export type QueryReportsCompatibleFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions. */
export const queryReportsCompatibleFields: API.OperationMethod<
  QueryReportsCompatibleFieldsRequest,
  QueryReportsCompatibleFieldsResponse,
  QueryReportsCompatibleFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryReportsCompatibleFieldsRequest,
  output: QueryReportsCompatibleFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments",
    }),
    svc,
  ) as unknown as Schema.Schema<ListBillingAssignmentsRequest>;

export type ListBillingAssignmentsResponse = BillingAssignmentsListResponse;
export const ListBillingAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingAssignmentsListResponse;

export type ListBillingAssignmentsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of billing assignments. */
export const listBillingAssignments: API.OperationMethod<
  ListBillingAssignmentsRequest,
  ListBillingAssignmentsResponse,
  ListBillingAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBillingAssignmentsRequest,
  output: ListBillingAssignmentsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertBillingAssignmentsRequest>;

export type InsertBillingAssignmentsResponse = BillingAssignment;
export const InsertBillingAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingAssignment;

export type InsertBillingAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned. */
export const insertBillingAssignments: API.OperationMethod<
  InsertBillingAssignmentsRequest,
  InsertBillingAssignmentsResponse,
  InsertBillingAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertBillingAssignmentsRequest,
  output: InsertBillingAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUserRolePermissionsRequest {
  /** User role permission ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetUserRolePermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/userRolePermissions/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetUserRolePermissionsRequest>;

export type GetUserRolePermissionsResponse = UserRolePermission;
export const GetUserRolePermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermission;

export type GetUserRolePermissionsError = DefaultErrors | NotFound | Forbidden;

/** Gets one user role permission by ID. */
export const getUserRolePermissions: API.OperationMethod<
  GetUserRolePermissionsRequest,
  GetUserRolePermissionsResponse,
  GetUserRolePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserRolePermissionsRequest,
  output: GetUserRolePermissionsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/userRolePermissions",
    }),
    svc,
  ) as unknown as Schema.Schema<ListUserRolePermissionsRequest>;

export type ListUserRolePermissionsResponse = UserRolePermissionsListResponse;
export const ListUserRolePermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolePermissionsListResponse;

export type ListUserRolePermissionsError = DefaultErrors | NotFound | Forbidden;

/** Gets a list of user role permissions, possibly filtered. */
export const listUserRolePermissions: API.OperationMethod<
  ListUserRolePermissionsRequest,
  ListUserRolePermissionsResponse,
  ListUserRolePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUserRolePermissionsRequest,
  output: ListUserRolePermissionsResponse,
  errors: [NotFound, Forbidden],
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

export type BatchupdateConversionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates existing conversions. */
export const batchupdateConversions: API.OperationMethod<
  BatchupdateConversionsRequest,
  BatchupdateConversionsResponse,
  BatchupdateConversionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchupdateConversionsRequest,
  output: BatchupdateConversionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type BatchinsertConversionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts conversions. */
export const batchinsertConversions: API.OperationMethod<
  BatchinsertConversionsRequest,
  BatchinsertConversionsResponse,
  BatchinsertConversionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchinsertConversionsRequest,
  output: BatchinsertConversionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type InsertStudioCreativeAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new studio creative asset. */
export const insertStudioCreativeAssets: API.OperationMethod<
  InsertStudioCreativeAssetsRequest,
  InsertStudioCreativeAssetsResponse,
  InsertStudioCreativeAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertStudioCreativeAssetsRequest,
  output: InsertStudioCreativeAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCitiesRequest {
  /** Select only cities from these countries. */
  countryDartIds?: string[];
  /** Select only cities from these regions. */
  regionDartIds?: string[];
  /** Select only cities with names starting with this prefix. */
  namePrefix?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only cities with these DART IDs. */
  dartIds?: string[];
}

export const ListCitiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  countryDartIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("countryDartIds"),
  ),
  regionDartIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("regionDartIds"),
  ),
  namePrefix: Schema.optional(Schema.String).pipe(T.HttpQuery("namePrefix")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  dartIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("dartIds"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/cities" }),
  svc,
) as unknown as Schema.Schema<ListCitiesRequest>;

export type ListCitiesResponse = CitiesListResponse;
export const ListCitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CitiesListResponse;

export type ListCitiesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of cities, possibly filtered. */
export const listCities: API.OperationMethod<
  ListCitiesRequest,
  ListCitiesResponse,
  ListCitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCitiesRequest,
  output: ListCitiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountPermissionGroupsRequest {
  /** Account permission group ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAccountPermissionGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/accountPermissionGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountPermissionGroupsRequest>;

export type GetAccountPermissionGroupsResponse = AccountPermissionGroup;
export const GetAccountPermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermissionGroup;

export type GetAccountPermissionGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one account permission group by ID. */
export const getAccountPermissionGroups: API.OperationMethod<
  GetAccountPermissionGroupsRequest,
  GetAccountPermissionGroupsResponse,
  GetAccountPermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountPermissionGroupsRequest,
  output: GetAccountPermissionGroupsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/accountPermissionGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountPermissionGroupsRequest>;

export type ListAccountPermissionGroupsResponse =
  AccountPermissionGroupsListResponse;
export const ListAccountPermissionGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountPermissionGroupsListResponse;

export type ListAccountPermissionGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the list of account permission groups. */
export const listAccountPermissionGroups: API.OperationMethod<
  ListAccountPermissionGroupsRequest,
  ListAccountPermissionGroupsResponse,
  ListAccountPermissionGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListAccountPermissionGroupsRequest,
  output: ListAccountPermissionGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListTvCampaignSummariesRequest {
  /** Required. Account ID associated with this request. */
  accountId?: string;
  /** Required. Search string to filter the list of TV campaign summaries. Matches any substring. Required field. */
  name?: string;
  /** Required. User profile ID associated with this request. */
  profileId: string;
}

export const ListTvCampaignSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String).pipe(T.HttpQuery("accountId")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/tvCampaignSummaries",
    }),
    svc,
  ) as unknown as Schema.Schema<ListTvCampaignSummariesRequest>;

export type ListTvCampaignSummariesResponse = TvCampaignSummariesListResponse;
export const ListTvCampaignSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TvCampaignSummariesListResponse;

export type ListTvCampaignSummariesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of TV campaign summaries. */
export const listTvCampaignSummaries: API.OperationMethod<
  ListTvCampaignSummariesRequest,
  ListTvCampaignSummariesResponse,
  ListTvCampaignSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTvCampaignSummariesRequest,
  output: ListTvCampaignSummariesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetTargetableRemarketingListsRequest {
  /** Remarketing list ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetTargetableRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/targetableRemarketingLists/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTargetableRemarketingListsRequest>;

export type GetTargetableRemarketingListsResponse = TargetableRemarketingList;
export const GetTargetableRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetableRemarketingList;

export type GetTargetableRemarketingListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one remarketing list by ID. */
export const getTargetableRemarketingLists: API.OperationMethod<
  GetTargetableRemarketingListsRequest,
  GetTargetableRemarketingListsResponse,
  GetTargetableRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTargetableRemarketingListsRequest,
  output: GetTargetableRemarketingListsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListTargetableRemarketingListsRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list". */
  name?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only active or only inactive targetable remarketing lists. */
  active?: boolean;
  /** Required. Select only targetable remarketing lists targetable by these advertisers. */
  advertiserId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListTargetableRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    advertiserId: Schema.String.pipe(T.HttpQuery("advertiserId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/targetableRemarketingLists",
    }),
    svc,
  ) as unknown as Schema.Schema<ListTargetableRemarketingListsRequest>;

export type ListTargetableRemarketingListsResponse =
  TargetableRemarketingListsListResponse;
export const ListTargetableRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetableRemarketingListsListResponse;

export type ListTargetableRemarketingListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging. */
export const listTargetableRemarketingLists: API.PaginatedOperationMethod<
  ListTargetableRemarketingListsRequest,
  ListTargetableRemarketingListsResponse,
  ListTargetableRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTargetableRemarketingListsRequest,
  output: ListTargetableRemarketingListsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteDynamicTargetingKeysRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** ID of the object of this dynamic targeting key. This is a required field. */
  objectId: string;
  /** Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
  name: string;
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
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    objectId: Schema.String.pipe(T.HttpPath("objectId")),
    name: Schema.String.pipe(T.HttpQuery("name")),
    objectType: Schema.String.pipe(T.HttpQuery("objectType")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{+profileId}/dynamicTargetingKeys/{+objectId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteDynamicTargetingKeysRequest>;

export interface DeleteDynamicTargetingKeysResponse {}
export const DeleteDynamicTargetingKeysResponse: Schema.Schema<DeleteDynamicTargetingKeysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteDynamicTargetingKeysResponse>;

export type DeleteDynamicTargetingKeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing dynamic targeting key. */
export const deleteDynamicTargetingKeys: API.OperationMethod<
  DeleteDynamicTargetingKeysRequest,
  DeleteDynamicTargetingKeysResponse,
  DeleteDynamicTargetingKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDynamicTargetingKeysRequest,
  output: DeleteDynamicTargetingKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/dynamicTargetingKeys",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertDynamicTargetingKeysRequest>;

export type InsertDynamicTargetingKeysResponse = DynamicTargetingKey;
export const InsertDynamicTargetingKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicTargetingKey;

export type InsertDynamicTargetingKeysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement. */
export const insertDynamicTargetingKeys: API.OperationMethod<
  InsertDynamicTargetingKeysRequest,
  InsertDynamicTargetingKeysResponse,
  InsertDynamicTargetingKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDynamicTargetingKeysRequest,
  output: InsertDynamicTargetingKeysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDynamicTargetingKeysRequest {
  /** Select only dynamic targeting keys whose object has this advertiser ID. */
  advertiserId?: string;
  /** Select only dynamic targeting keys exactly matching these names. */
  names?: string[];
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only dynamic targeting keys with this object type. */
  objectType?:
    | "OBJECT_ADVERTISER"
    | "OBJECT_AD"
    | "OBJECT_CREATIVE"
    | "OBJECT_PLACEMENT"
    | (string & {});
  /** Select only dynamic targeting keys with this object ID. */
  objectId?: string;
}

export const ListDynamicTargetingKeysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    objectType: Schema.optional(Schema.String).pipe(T.HttpQuery("objectType")),
    objectId: Schema.optional(Schema.String).pipe(T.HttpQuery("objectId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/dynamicTargetingKeys",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDynamicTargetingKeysRequest>;

export type ListDynamicTargetingKeysResponse = DynamicTargetingKeysListResponse;
export const ListDynamicTargetingKeysResponse =
  /*@__PURE__*/ /*#__PURE__*/ DynamicTargetingKeysListResponse;

export type ListDynamicTargetingKeysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of dynamic targeting keys. */
export const listDynamicTargetingKeys: API.OperationMethod<
  ListDynamicTargetingKeysRequest,
  ListDynamicTargetingKeysResponse,
  ListDynamicTargetingKeysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDynamicTargetingKeysRequest,
  output: ListDynamicTargetingKeysResponse,
  errors: [NotFound, Forbidden],
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
    path: "userprofiles/{+profileId}/postalCodes/{+code}",
  }),
  svc,
) as unknown as Schema.Schema<GetPostalCodesRequest>;

export type GetPostalCodesResponse = PostalCode;
export const GetPostalCodesResponse = /*@__PURE__*/ /*#__PURE__*/ PostalCode;

export type GetPostalCodesError = DefaultErrors | NotFound | Forbidden;

/** Gets one postal code by ID. */
export const getPostalCodes: API.OperationMethod<
  GetPostalCodesRequest,
  GetPostalCodesResponse,
  GetPostalCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPostalCodesRequest,
  output: GetPostalCodesResponse,
  errors: [NotFound, Forbidden],
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
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/postalCodes" }),
  svc,
) as unknown as Schema.Schema<ListPostalCodesRequest>;

export type ListPostalCodesResponse = PostalCodesListResponse;
export const ListPostalCodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PostalCodesListResponse;

export type ListPostalCodesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of postal codes. */
export const listPostalCodes: API.OperationMethod<
  ListPostalCodesRequest,
  ListPostalCodesResponse,
  ListPostalCodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPostalCodesRequest,
  output: ListPostalCodesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSizesRequest {
  /** Size ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetSizesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/sizes/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetSizesRequest>;

export type GetSizesResponse = Size;
export const GetSizesResponse = /*@__PURE__*/ /*#__PURE__*/ Size;

export type GetSizesError = DefaultErrors | NotFound | Forbidden;

/** Gets one size by ID. */
export const getSizes: API.OperationMethod<
  GetSizesRequest,
  GetSizesResponse,
  GetSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSizesRequest,
  output: GetSizesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSizesRequest {
  /** Select only sizes with these IDs. */
  ids?: string[];
  /** Select only IAB standard sizes. */
  iabStandard?: boolean;
  /** Select only sizes with this width. */
  width?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only sizes with this height. */
  height?: number;
}

export const ListSizesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  iabStandard: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("iabStandard")),
  width: Schema.optional(Schema.Number).pipe(T.HttpQuery("width")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  height: Schema.optional(Schema.Number).pipe(T.HttpQuery("height")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/sizes" }),
  svc,
) as unknown as Schema.Schema<ListSizesRequest>;

export type ListSizesResponse = SizesListResponse;
export const ListSizesResponse = /*@__PURE__*/ /*#__PURE__*/ SizesListResponse;

export type ListSizesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI. */
export const listSizes: API.OperationMethod<
  ListSizesRequest,
  ListSizesResponse,
  ListSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListSizesRequest,
  output: ListSizesResponse,
  errors: [NotFound, Forbidden],
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
    path: "userprofiles/{+profileId}/sizes",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertSizesRequest>;

export type InsertSizesResponse = Size;
export const InsertSizesResponse = /*@__PURE__*/ /*#__PURE__*/ Size;

export type InsertSizesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new size. */
export const insertSizes: API.OperationMethod<
  InsertSizesRequest,
  InsertSizesResponse,
  InsertSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSizesRequest,
  output: InsertSizesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrdersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Project ID for orders. */
  projectId: string;
  /** Order ID. */
  id: string;
}

export const GetOrdersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{+profileId}/projects/{projectId}/orders/{+id}",
  }),
  svc,
) as unknown as Schema.Schema<GetOrdersRequest>;

export type GetOrdersResponse = Order;
export const GetOrdersResponse = /*@__PURE__*/ /*#__PURE__*/ Order;

export type GetOrdersError = DefaultErrors | NotFound | Forbidden;

/** Gets one order by ID. */
export const getOrders: API.OperationMethod<
  GetOrdersRequest,
  GetOrdersResponse,
  GetOrdersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrdersRequest,
  output: GetOrdersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrdersRequest {
  /** Select only orders that are associated with these site IDs. */
  siteId?: string[];
  /** Project ID for orders. */
  projectId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only orders with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListOrdersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  siteId: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("siteId"),
  ),
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
}).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{+profileId}/projects/{projectId}/orders",
  }),
  svc,
) as unknown as Schema.Schema<ListOrdersRequest>;

export type ListOrdersResponse = OrdersListResponse;
export const ListOrdersResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrdersListResponse;

export type ListOrdersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of orders, possibly filtered. This method supports paging. */
export const listOrders: API.PaginatedOperationMethod<
  ListOrdersRequest,
  ListOrdersResponse,
  ListOrdersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrdersRequest,
  output: ListOrdersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Project ID. */
  id: string;
}

export const GetProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/projects/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetProjectsRequest>;

export type GetProjectsResponse = Project;
export const GetProjectsResponse = /*@__PURE__*/ /*#__PURE__*/ Project;

export type GetProjectsError = DefaultErrors | NotFound | Forbidden;

/** Gets one project by ID. */
export const getProjects: API.OperationMethod<
  GetProjectsRequest,
  GetProjectsResponse,
  GetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsRequest,
  output: GetProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only projects with these advertiser IDs. */
  advertiserIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project". */
  searchString?: string;
  /** Select only projects with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserIds"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/projects" }),
  svc,
) as unknown as Schema.Schema<ListProjectsRequest>;

export type ListProjectsResponse = ProjectsListResponse;
export const ListProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectsListResponse;

export type ListProjectsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of projects, possibly filtered. This method supports paging . */
export const listProjects: API.PaginatedOperationMethod<
  ListProjectsRequest,
  ListProjectsResponse,
  ListProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRequest,
  output: ListProjectsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAdvertiserGroupsRequest {
  /** Advertiser group ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/advertiserGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAdvertiserGroupsRequest>;

export type GetAdvertiserGroupsResponse = AdvertiserGroup;
export const GetAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type GetAdvertiserGroupsError = DefaultErrors | NotFound | Forbidden;

/** Gets one advertiser group by ID. */
export const getAdvertiserGroups: API.OperationMethod<
  GetAdvertiserGroupsRequest,
  GetAdvertiserGroupsResponse,
  GetAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvertiserGroupsRequest,
  output: GetAdvertiserGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteAdvertiserGroupsRequest {
  /** Advertiser group ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const DeleteAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{+profileId}/advertiserGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteAdvertiserGroupsRequest>;

export interface DeleteAdvertiserGroupsResponse {}
export const DeleteAdvertiserGroupsResponse: Schema.Schema<DeleteAdvertiserGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteAdvertiserGroupsResponse>;

export type DeleteAdvertiserGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing advertiser group. */
export const deleteAdvertiserGroups: API.OperationMethod<
  DeleteAdvertiserGroupsRequest,
  DeleteAdvertiserGroupsResponse,
  DeleteAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteAdvertiserGroupsRequest,
  output: DeleteAdvertiserGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/advertiserGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAdvertiserGroupsRequest>;

export type InsertAdvertiserGroupsResponse = AdvertiserGroup;
export const InsertAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type InsertAdvertiserGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new advertiser group. */
export const insertAdvertiserGroups: API.OperationMethod<
  InsertAdvertiserGroupsRequest,
  InsertAdvertiserGroupsResponse,
  InsertAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdvertiserGroupsRequest,
  output: InsertAdvertiserGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchAdvertiserGroupsRequest {
  /** Required. Advertiser Group ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: AdvertiserGroup;
}

export const PatchAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(AdvertiserGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/advertiserGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAdvertiserGroupsRequest>;

export type PatchAdvertiserGroupsResponse = AdvertiserGroup;
export const PatchAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type PatchAdvertiserGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing advertiser group. This method supports patch semantics. */
export const patchAdvertiserGroups: API.OperationMethod<
  PatchAdvertiserGroupsRequest,
  PatchAdvertiserGroupsResponse,
  PatchAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvertiserGroupsRequest,
  output: PatchAdvertiserGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/advertiserGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAdvertiserGroupsRequest>;

export type UpdateAdvertiserGroupsResponse = AdvertiserGroup;
export const UpdateAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroup;

export type UpdateAdvertiserGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing advertiser group. */
export const updateAdvertiserGroups: API.OperationMethod<
  UpdateAdvertiserGroupsRequest,
  UpdateAdvertiserGroupsResponse,
  UpdateAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdvertiserGroupsRequest,
  output: UpdateAdvertiserGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAdvertiserGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only advertiser groups with these IDs. */
  ids?: string[];
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup". */
  searchString?: string;
}

export const ListAdvertiserGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/advertiserGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAdvertiserGroupsRequest>;

export type ListAdvertiserGroupsResponse = AdvertiserGroupsListResponse;
export const ListAdvertiserGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserGroupsListResponse;

export type ListAdvertiserGroupsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of advertiser groups, possibly filtered. This method supports paging. */
export const listAdvertiserGroups: API.PaginatedOperationMethod<
  ListAdvertiserGroupsRequest,
  ListAdvertiserGroupsResponse,
  ListAdvertiserGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertiserGroupsRequest,
  output: ListAdvertiserGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/placementGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertPlacementGroupsRequest>;

export type InsertPlacementGroupsResponse = PlacementGroup;
export const InsertPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type InsertPlacementGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new placement group. */
export const insertPlacementGroups: API.OperationMethod<
  InsertPlacementGroupsRequest,
  InsertPlacementGroupsResponse,
  InsertPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlacementGroupsRequest,
  output: InsertPlacementGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/placementGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchPlacementGroupsRequest>;

export type PatchPlacementGroupsResponse = PlacementGroup;
export const PatchPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type PatchPlacementGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing placement group. This method supports patch semantics. */
export const patchPlacementGroups: API.OperationMethod<
  PatchPlacementGroupsRequest,
  PatchPlacementGroupsResponse,
  PatchPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPlacementGroupsRequest,
  output: PatchPlacementGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/placementGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPlacementGroupsRequest>;

export type GetPlacementGroupsResponse = PlacementGroup;
export const GetPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type GetPlacementGroupsError = DefaultErrors | NotFound | Forbidden;

/** Gets one placement group by ID. */
export const getPlacementGroups: API.OperationMethod<
  GetPlacementGroupsRequest,
  GetPlacementGroupsResponse,
  GetPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacementGroupsRequest,
  output: GetPlacementGroupsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/placementGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePlacementGroupsRequest>;

export type UpdatePlacementGroupsResponse = PlacementGroup;
export const UpdatePlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroup;

export type UpdatePlacementGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing placement group. */
export const updatePlacementGroups: API.OperationMethod<
  UpdatePlacementGroupsRequest,
  UpdatePlacementGroupsResponse,
  UpdatePlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlacementGroupsRequest,
  output: UpdatePlacementGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlacementGroupsRequest {
  /** Select only placement groups with these IDs. */
  ids?: string[];
  /** Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd". */
  maxStartDate?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only placement groups that are associated with these sites. */
  siteIds?: string[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only placement groups that are associated with these content categories. */
  contentCategoryIds?: string[];
  /** Select only placement groups with these pricing types. */
  pricingTypes?:
    | "PRICING_TYPE_CPM"
    | "PRICING_TYPE_CPC"
    | "PRICING_TYPE_CPA"
    | "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    | "PRICING_TYPE_FLAT_RATE_CLICKS"
    | "PRICING_TYPE_CPM_ACTIVEVIEW"
    | (string & {})[];
  /** Select only placement groups that belong to these campaigns. */
  campaignIds?: string[];
  /** Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd". */
  maxEndDate?: string;
  /** Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd". */
  minStartDate?: string;
  /** Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. */
  placementGroupType?:
    | "PLACEMENT_PACKAGE"
    | "PLACEMENT_ROADBLOCK"
    | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup". */
  searchString?: string;
  /** Select only placement groups that are associated with these placement strategies. */
  placementStrategyIds?: string[];
  /** Select only placements with these active statuses. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {})[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd". */
  minEndDate?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only placement groups that belong to these advertisers. */
  advertiserIds?: string[];
  /** Select only placement groups that are associated with these directory sites. */
  directorySiteIds?: string[];
}

export const ListPlacementGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxStartDate: Schema.optional(Schema.String).pipe(
      T.HttpQuery("maxStartDate"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    siteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("siteIds"),
    ),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    contentCategoryIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("contentCategoryIds"),
    ),
    pricingTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("pricingTypes"),
    ),
    campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("campaignIds"),
    ),
    maxEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("maxEndDate")),
    minStartDate: Schema.optional(Schema.String).pipe(
      T.HttpQuery("minStartDate"),
    ),
    placementGroupType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("placementGroupType"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    placementStrategyIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("placementStrategyIds"),
    ),
    activeStatus: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("activeStatus"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    minEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("minEndDate")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    directorySiteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("directorySiteIds"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/placementGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListPlacementGroupsRequest>;

export type ListPlacementGroupsResponse = PlacementGroupsListResponse;
export const ListPlacementGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementGroupsListResponse;

export type ListPlacementGroupsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of placement groups, possibly filtered. This method supports paging. */
export const listPlacementGroups: API.PaginatedOperationMethod<
  ListPlacementGroupsRequest,
  ListPlacementGroupsResponse,
  ListPlacementGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlacementGroupsRequest,
  output: ListPlacementGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetInventoryItemsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Project ID for order documents. */
  projectId: string;
  /** Inventory item ID. */
  id: string;
}

export const GetInventoryItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/projects/{projectId}/inventoryItems/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetInventoryItemsRequest>;

export type GetInventoryItemsResponse = InventoryItem;
export const GetInventoryItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InventoryItem;

export type GetInventoryItemsError = DefaultErrors | NotFound | Forbidden;

/** Gets one inventory item by ID. */
export const getInventoryItems: API.OperationMethod<
  GetInventoryItemsRequest,
  GetInventoryItemsResponse,
  GetInventoryItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInventoryItemsRequest,
  output: GetInventoryItemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListInventoryItemsRequest {
  /** Select only inventory items that are associated with these sites. */
  siteId?: string[];
  /** Select only inventory items that belong to specified orders. */
  orderId?: string[];
  /** Project ID for order documents. */
  projectId: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only inventory items that are in plan. */
  inPlan?: boolean;
  /** Select only inventory items with this type. */
  type?:
    | "PLANNING_PLACEMENT_TYPE_REGULAR"
    | "PLANNING_PLACEMENT_TYPE_CREDIT"
    | (string & {});
  /** Select only inventory items with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListInventoryItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("siteId"),
    ),
    orderId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("orderId"),
    ),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    inPlan: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("inPlan")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/projects/{projectId}/inventoryItems",
    }),
    svc,
  ) as unknown as Schema.Schema<ListInventoryItemsRequest>;

export type ListInventoryItemsResponse = InventoryItemsListResponse;
export const ListInventoryItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InventoryItemsListResponse;

export type ListInventoryItemsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of inventory items, possibly filtered. This method supports paging. */
export const listInventoryItems: API.PaginatedOperationMethod<
  ListInventoryItemsRequest,
  ListInventoryItemsResponse,
  ListInventoryItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInventoryItemsRequest,
  output: ListInventoryItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    path: "userprofiles/{+profileId}/campaigns",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchCampaignsRequest>;

export type PatchCampaignsResponse = Campaign;
export const PatchCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type PatchCampaignsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing campaign. This method supports patch semantics. */
export const patchCampaigns: API.OperationMethod<
  PatchCampaignsRequest,
  PatchCampaignsResponse,
  PatchCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCampaignsRequest,
  output: PatchCampaignsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/campaigns",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertCampaignsRequest>;

export type InsertCampaignsResponse = Campaign;
export const InsertCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type InsertCampaignsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new campaign. */
export const insertCampaigns: API.OperationMethod<
  InsertCampaignsRequest,
  InsertCampaignsResponse,
  InsertCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCampaignsRequest,
  output: InsertCampaignsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/campaigns/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetCampaignsRequest>;

export type GetCampaignsResponse = Campaign;
export const GetCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type GetCampaignsError = DefaultErrors | NotFound | Forbidden;

/** Gets one campaign by ID. */
export const getCampaigns: API.OperationMethod<
  GetCampaignsRequest,
  GetCampaignsResponse,
  GetCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCampaignsRequest,
  output: GetCampaignsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCampaignsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only campaigns with these IDs. */
  ids?: string[];
  /** Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns. */
  archived?: boolean;
  /** Select only campaigns that have at least one optimization activity. */
  atLeastOneOptimizationActivity?: boolean;
  /** Select only campaigns that have overridden this event tag ID. */
  overriddenEventTagId?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Exclude campaigns with these IDs. */
  excludedIds?: string[];
  /** Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign". */
  searchString?: string;
  /** Select only campaigns that belong to these advertisers. */
  advertiserIds?: string[];
  /** Select only campaigns whose advertisers belong to these advertiser groups. */
  advertiserGroupIds?: string[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only campaigns that belong to this subaccount. */
  subaccountId?: string;
}

export const ListCampaignsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
  atLeastOneOptimizationActivity: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("atLeastOneOptimizationActivity"),
  ),
  overriddenEventTagId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("overriddenEventTagId"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  excludedIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("excludedIds"),
  ),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserIds"),
  ),
  advertiserGroupIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserGroupIds"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  subaccountId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("subaccountId"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/campaigns" }),
  svc,
) as unknown as Schema.Schema<ListCampaignsRequest>;

export type ListCampaignsResponse = CampaignsListResponse;
export const ListCampaignsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CampaignsListResponse;

export type ListCampaignsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of campaigns, possibly filtered. This method supports paging. */
export const listCampaigns: API.PaginatedOperationMethod<
  ListCampaignsRequest,
  ListCampaignsResponse,
  ListCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCampaignsRequest,
  output: ListCampaignsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    path: "userprofiles/{+profileId}/campaigns",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateCampaignsRequest>;

export type UpdateCampaignsResponse = Campaign;
export const UpdateCampaignsResponse = /*@__PURE__*/ /*#__PURE__*/ Campaign;

export type UpdateCampaignsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing campaign. */
export const updateCampaigns: API.OperationMethod<
  UpdateCampaignsRequest,
  UpdateCampaignsResponse,
  UpdateCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCampaignsRequest,
  output: UpdateCampaignsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPlacementStrategiesRequest {
  /** Placement strategy ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/placementStrategies/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPlacementStrategiesRequest>;

export type GetPlacementStrategiesResponse = PlacementStrategy;
export const GetPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type GetPlacementStrategiesError = DefaultErrors | NotFound | Forbidden;

/** Gets one placement strategy by ID. */
export const getPlacementStrategies: API.OperationMethod<
  GetPlacementStrategiesRequest,
  GetPlacementStrategiesResponse,
  GetPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacementStrategiesRequest,
  output: GetPlacementStrategiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchPlacementStrategiesRequest {
  /** Required. PlacementStrategy ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: PlacementStrategy;
}

export const PatchPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(PlacementStrategy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/placementStrategies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchPlacementStrategiesRequest>;

export type PatchPlacementStrategiesResponse = PlacementStrategy;
export const PatchPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type PatchPlacementStrategiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing placement strategy. This method supports patch semantics. */
export const patchPlacementStrategies: API.OperationMethod<
  PatchPlacementStrategiesRequest,
  PatchPlacementStrategiesResponse,
  PatchPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPlacementStrategiesRequest,
  output: PatchPlacementStrategiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/placementStrategies/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeletePlacementStrategiesRequest>;

export interface DeletePlacementStrategiesResponse {}
export const DeletePlacementStrategiesResponse: Schema.Schema<DeletePlacementStrategiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePlacementStrategiesResponse>;

export type DeletePlacementStrategiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing placement strategy. */
export const deletePlacementStrategies: API.OperationMethod<
  DeletePlacementStrategiesRequest,
  DeletePlacementStrategiesResponse,
  DeletePlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePlacementStrategiesRequest,
  output: DeletePlacementStrategiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/placementStrategies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertPlacementStrategiesRequest>;

export type InsertPlacementStrategiesResponse = PlacementStrategy;
export const InsertPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type InsertPlacementStrategiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new placement strategy. */
export const insertPlacementStrategies: API.OperationMethod<
  InsertPlacementStrategiesRequest,
  InsertPlacementStrategiesResponse,
  InsertPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlacementStrategiesRequest,
  output: InsertPlacementStrategiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlacementStrategiesRequest {
  /** Select only placement strategies with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
}

export const ListPlacementStrategiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/placementStrategies",
    }),
    svc,
  ) as unknown as Schema.Schema<ListPlacementStrategiesRequest>;

export type ListPlacementStrategiesResponse = PlacementStrategiesListResponse;
export const ListPlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategiesListResponse;

export type ListPlacementStrategiesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of placement strategies, possibly filtered. This method supports paging. */
export const listPlacementStrategies: API.PaginatedOperationMethod<
  ListPlacementStrategiesRequest,
  ListPlacementStrategiesResponse,
  ListPlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlacementStrategiesRequest,
  output: ListPlacementStrategiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/placementStrategies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePlacementStrategiesRequest>;

export type UpdatePlacementStrategiesResponse = PlacementStrategy;
export const UpdatePlacementStrategiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementStrategy;

export type UpdatePlacementStrategiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing placement strategy. */
export const updatePlacementStrategies: API.OperationMethod<
  UpdatePlacementStrategiesRequest,
  UpdatePlacementStrategiesResponse,
  UpdatePlacementStrategiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlacementStrategiesRequest,
  output: UpdatePlacementStrategiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/userRoles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchUserRolesRequest>;

export type PatchUserRolesResponse = UserRole;
export const PatchUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type PatchUserRolesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing user role. This method supports patch semantics. */
export const patchUserRoles: API.OperationMethod<
  PatchUserRolesRequest,
  PatchUserRolesResponse,
  PatchUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchUserRolesRequest,
  output: PatchUserRolesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/userRoles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertUserRolesRequest>;

export type InsertUserRolesResponse = UserRole;
export const InsertUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type InsertUserRolesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new user role. */
export const insertUserRoles: API.OperationMethod<
  InsertUserRolesRequest,
  InsertUserRolesResponse,
  InsertUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertUserRolesRequest,
  output: InsertUserRolesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  T.Http({
    method: "DELETE",
    path: "userprofiles/{+profileId}/userRoles/{+id}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteUserRolesRequest>;

export interface DeleteUserRolesResponse {}
export const DeleteUserRolesResponse: Schema.Schema<DeleteUserRolesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteUserRolesResponse>;

export type DeleteUserRolesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing user role. */
export const deleteUserRoles: API.OperationMethod<
  DeleteUserRolesRequest,
  DeleteUserRolesResponse,
  DeleteUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUserRolesRequest,
  output: DeleteUserRolesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUserRolesRequest {
  /** User role ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/userRoles/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetUserRolesRequest>;

export type GetUserRolesResponse = UserRole;
export const GetUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type GetUserRolesError = DefaultErrors | NotFound | Forbidden;

/** Gets one user role by ID. */
export const getUserRoles: API.OperationMethod<
  GetUserRolesRequest,
  GetUserRolesResponse,
  GetUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserRolesRequest,
  output: GetUserRolesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListUserRolesRequest {
  /** Select only user roles with the specified IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole". */
  searchString?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only account level user roles not associated with any specific subaccount. */
  accountUserRoleOnly?: boolean;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only user roles that belong to this subaccount. */
  subaccountId?: string;
}

export const ListUserRolesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  accountUserRoleOnly: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("accountUserRoleOnly"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  subaccountId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("subaccountId"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/userRoles" }),
  svc,
) as unknown as Schema.Schema<ListUserRolesRequest>;

export type ListUserRolesResponse = UserRolesListResponse;
export const ListUserRolesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserRolesListResponse;

export type ListUserRolesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of user roles, possibly filtered. This method supports paging. */
export const listUserRoles: API.PaginatedOperationMethod<
  ListUserRolesRequest,
  ListUserRolesResponse,
  ListUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListUserRolesRequest,
  output: ListUserRolesResponse,
  errors: [NotFound, Forbidden],
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
    path: "userprofiles/{+profileId}/userRoles",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateUserRolesRequest>;

export type UpdateUserRolesResponse = UserRole;
export const UpdateUserRolesResponse = /*@__PURE__*/ /*#__PURE__*/ UserRole;

export type UpdateUserRolesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing user role. */
export const updateUserRoles: API.OperationMethod<
  UpdateUserRolesRequest,
  UpdateUserRolesResponse,
  UpdateUserRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUserRolesRequest,
  output: UpdateUserRolesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetTvCampaignDetailsRequest {
  /** Required. Account ID associated with this request. */
  accountId?: string;
  /** Required. TV Campaign ID. */
  id: string;
  /** Required. User profile ID associated with this request. */
  profileId: string;
}

export const GetTvCampaignDetailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String).pipe(T.HttpQuery("accountId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/tvCampaignDetails/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTvCampaignDetailsRequest>;

export type GetTvCampaignDetailsResponse = TvCampaignDetail;
export const GetTvCampaignDetailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TvCampaignDetail;

export type GetTvCampaignDetailsError = DefaultErrors | NotFound | Forbidden;

/** Gets one TvCampaignDetail by ID. */
export const getTvCampaignDetails: API.OperationMethod<
  GetTvCampaignDetailsRequest,
  GetTvCampaignDetailsResponse,
  GetTvCampaignDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTvCampaignDetailsRequest,
  output: GetTvCampaignDetailsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/connectionTypes/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetConnectionTypesRequest>;

export type GetConnectionTypesResponse = ConnectionType;
export const GetConnectionTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionType;

export type GetConnectionTypesError = DefaultErrors | NotFound | Forbidden;

/** Gets one connection type by ID. */
export const getConnectionTypes: API.OperationMethod<
  GetConnectionTypesRequest,
  GetConnectionTypesResponse,
  GetConnectionTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConnectionTypesRequest,
  output: GetConnectionTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListConnectionTypesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListConnectionTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/connectionTypes",
    }),
    svc,
  ) as unknown as Schema.Schema<ListConnectionTypesRequest>;

export type ListConnectionTypesResponse = ConnectionTypesListResponse;
export const ListConnectionTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionTypesListResponse;

export type ListConnectionTypesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of connection types. */
export const listConnectionTypes: API.OperationMethod<
  ListConnectionTypesRequest,
  ListConnectionTypesResponse,
  ListConnectionTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListConnectionTypesRequest,
  output: ListConnectionTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBrowsersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListBrowsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/browsers" }),
  svc,
) as unknown as Schema.Schema<ListBrowsersRequest>;

export type ListBrowsersResponse = BrowsersListResponse;
export const ListBrowsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ BrowsersListResponse;

export type ListBrowsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of browsers. */
export const listBrowsers: API.OperationMethod<
  ListBrowsersRequest,
  ListBrowsersResponse,
  ListBrowsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBrowsersRequest,
  output: ListBrowsersResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeAssetsRequest>;

export type InsertCreativeAssetsResponse = CreativeAssetMetadata;
export const InsertCreativeAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeAssetMetadata;

export type InsertCreativeAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new creative asset. */
export const insertCreativeAssets: API.OperationMethod<
  InsertCreativeAssetsRequest,
  InsertCreativeAssetsResponse,
  InsertCreativeAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeAssetsRequest,
  output: InsertCreativeAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateCreativeFieldValuesRequest {
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeFieldValue;
}

export const UpdateCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeFieldValue).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateCreativeFieldValuesRequest>;

export type UpdateCreativeFieldValuesResponse = CreativeFieldValue;
export const UpdateCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type UpdateCreativeFieldValuesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative field value. */
export const updateCreativeFieldValues: API.OperationMethod<
  UpdateCreativeFieldValuesRequest,
  UpdateCreativeFieldValuesResponse,
  UpdateCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativeFieldValuesRequest,
  output: UpdateCreativeFieldValuesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCreativeFieldValuesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Field by which to sort the list. */
  sortField?: "ID" | "VALUE" | (string & {});
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only creative field values with these IDs. */
  ids?: string[];
  /** Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed. */
  searchString?: string;
}

export const ListCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues",
    }),
    svc,
  ) as unknown as Schema.Schema<ListCreativeFieldValuesRequest>;

export type ListCreativeFieldValuesResponse = CreativeFieldValuesListResponse;
export const ListCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValuesListResponse;

export type ListCreativeFieldValuesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of creative field values, possibly filtered. This method supports paging. */
export const listCreativeFieldValues: API.PaginatedOperationMethod<
  ListCreativeFieldValuesRequest,
  ListCreativeFieldValuesResponse,
  ListCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativeFieldValuesRequest,
  output: ListCreativeFieldValuesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCreativeFieldValuesRequest {
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** Creative Field Value ID */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCreativeFieldValuesRequest>;

export type GetCreativeFieldValuesResponse = CreativeFieldValue;
export const GetCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type GetCreativeFieldValuesError = DefaultErrors | NotFound | Forbidden;

/** Gets one creative field value by ID. */
export const getCreativeFieldValues: API.OperationMethod<
  GetCreativeFieldValuesRequest,
  GetCreativeFieldValuesResponse,
  GetCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativeFieldValuesRequest,
  output: GetCreativeFieldValuesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteCreativeFieldValuesRequest {
  /** Creative field ID for this creative field value. */
  creativeFieldId: string;
  /** Creative Field Value ID */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const DeleteCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteCreativeFieldValuesRequest>;

export interface DeleteCreativeFieldValuesResponse {}
export const DeleteCreativeFieldValuesResponse: Schema.Schema<DeleteCreativeFieldValuesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCreativeFieldValuesResponse>;

export type DeleteCreativeFieldValuesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing creative field value. */
export const deleteCreativeFieldValues: API.OperationMethod<
  DeleteCreativeFieldValuesRequest,
  DeleteCreativeFieldValuesResponse,
  DeleteCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCreativeFieldValuesRequest,
  output: DeleteCreativeFieldValuesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeFieldValuesRequest>;

export type InsertCreativeFieldValuesResponse = CreativeFieldValue;
export const InsertCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type InsertCreativeFieldValuesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new creative field value. */
export const insertCreativeFieldValues: API.OperationMethod<
  InsertCreativeFieldValuesRequest,
  InsertCreativeFieldValuesResponse,
  InsertCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeFieldValuesRequest,
  output: InsertCreativeFieldValuesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCreativeFieldValuesRequest {
  /** CreativeField ID. */
  creativeFieldId: string;
  /** CreativeFieldValue ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeFieldValue;
}

export const PatchCreativeFieldValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creativeFieldId: Schema.String.pipe(T.HttpPath("creativeFieldId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeFieldValue).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCreativeFieldValuesRequest>;

export type PatchCreativeFieldValuesResponse = CreativeFieldValue;
export const PatchCreativeFieldValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldValue;

export type PatchCreativeFieldValuesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative field value. This method supports patch semantics. */
export const patchCreativeFieldValues: API.OperationMethod<
  PatchCreativeFieldValuesRequest,
  PatchCreativeFieldValuesResponse,
  PatchCreativeFieldValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativeFieldValuesRequest,
  output: PatchCreativeFieldValuesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type GetUserProfilesError = DefaultErrors | NotFound | Forbidden;

/** Gets one user profile by ID. */
export const getUserProfiles: API.OperationMethod<
  GetUserProfilesRequest,
  GetUserProfilesResponse,
  GetUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserProfilesRequest,
  output: GetUserProfilesResponse,
  errors: [NotFound, Forbidden],
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

export type ListUserProfilesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves list of user profiles for a user. */
export const listUserProfiles: API.OperationMethod<
  ListUserProfilesRequest,
  ListUserProfilesResponse,
  ListUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUserProfilesRequest,
  output: ListUserProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListRegionsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/regions" }),
  svc,
) as unknown as Schema.Schema<ListRegionsRequest>;

export type ListRegionsResponse = RegionsListResponse;
export const ListRegionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegionsListResponse;

export type ListRegionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of regions. */
export const listRegions: API.OperationMethod<
  ListRegionsRequest,
  ListRegionsResponse,
  ListRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListRegionsRequest,
  output: ListRegionsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/remarketingLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateRemarketingListsRequest>;

export type UpdateRemarketingListsResponse = RemarketingList;
export const UpdateRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type UpdateRemarketingListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing remarketing list. */
export const updateRemarketingLists: API.OperationMethod<
  UpdateRemarketingListsRequest,
  UpdateRemarketingListsResponse,
  UpdateRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRemarketingListsRequest,
  output: UpdateRemarketingListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListRemarketingListsRequest {
  /** Select only active or only inactive remarketing lists. */
  active?: boolean;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Required. Select only remarketing lists owned by this advertiser. */
  advertiserId: string;
  /** Select only remarketing lists that have this floodlight activity ID. */
  floodlightActivityId?: string;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list". */
  name?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
}

export const ListRemarketingListsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    advertiserId: Schema.String.pipe(T.HttpQuery("advertiserId")),
    floodlightActivityId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityId"),
    ),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/remarketingLists",
    }),
    svc,
  ) as unknown as Schema.Schema<ListRemarketingListsRequest>;

export type ListRemarketingListsResponse = RemarketingListsListResponse;
export const ListRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListsListResponse;

export type ListRemarketingListsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of remarketing lists, possibly filtered. This method supports paging. */
export const listRemarketingLists: API.PaginatedOperationMethod<
  ListRemarketingListsRequest,
  ListRemarketingListsResponse,
  ListRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRemarketingListsRequest,
  output: ListRemarketingListsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/remarketingLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertRemarketingListsRequest>;

export type InsertRemarketingListsResponse = RemarketingList;
export const InsertRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type InsertRemarketingListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new remarketing list. */
export const insertRemarketingLists: API.OperationMethod<
  InsertRemarketingListsRequest,
  InsertRemarketingListsResponse,
  InsertRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertRemarketingListsRequest,
  output: InsertRemarketingListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/remarketingLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchRemarketingListsRequest>;

export type PatchRemarketingListsResponse = RemarketingList;
export const PatchRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type PatchRemarketingListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing remarketing list. This method supports patch semantics. */
export const patchRemarketingLists: API.OperationMethod<
  PatchRemarketingListsRequest,
  PatchRemarketingListsResponse,
  PatchRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRemarketingListsRequest,
  output: PatchRemarketingListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/remarketingLists/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetRemarketingListsRequest>;

export type GetRemarketingListsResponse = RemarketingList;
export const GetRemarketingListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingList;

export type GetRemarketingListsError = DefaultErrors | NotFound | Forbidden;

/** Gets one remarketing list by ID. */
export const getRemarketingLists: API.OperationMethod<
  GetRemarketingListsRequest,
  GetRemarketingListsResponse,
  GetRemarketingListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRemarketingListsRequest,
  output: GetRemarketingListsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/platformTypes/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPlatformTypesRequest>;

export type GetPlatformTypesResponse = PlatformType;
export const GetPlatformTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformType;

export type GetPlatformTypesError = DefaultErrors | NotFound | Forbidden;

/** Gets one platform type by ID. */
export const getPlatformTypes: API.OperationMethod<
  GetPlatformTypesRequest,
  GetPlatformTypesResponse,
  GetPlatformTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlatformTypesRequest,
  output: GetPlatformTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListPlatformTypesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListPlatformTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{+profileId}/platformTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListPlatformTypesRequest>;

export type ListPlatformTypesResponse = PlatformTypesListResponse;
export const ListPlatformTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlatformTypesListResponse;

export type ListPlatformTypesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of platform types. */
export const listPlatformTypes: API.OperationMethod<
  ListPlatformTypesRequest,
  ListPlatformTypesResponse,
  ListPlatformTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPlatformTypesRequest,
  output: ListPlatformTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSubaccountsRequest {
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" . */
  searchString?: string;
  /** Select only subaccounts with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListSubaccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  },
).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/subaccounts" }),
  svc,
) as unknown as Schema.Schema<ListSubaccountsRequest>;

export type ListSubaccountsResponse = SubaccountsListResponse;
export const ListSubaccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SubaccountsListResponse;

export type ListSubaccountsError = DefaultErrors | NotFound | Forbidden;

/** Gets a list of subaccounts, possibly filtered. This method supports paging. */
export const listSubaccounts: API.PaginatedOperationMethod<
  ListSubaccountsRequest,
  ListSubaccountsResponse,
  ListSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSubaccountsRequest,
  output: ListSubaccountsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/subaccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateSubaccountsRequest>;

export type UpdateSubaccountsResponse = Subaccount;
export const UpdateSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type UpdateSubaccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing subaccount. */
export const updateSubaccounts: API.OperationMethod<
  UpdateSubaccountsRequest,
  UpdateSubaccountsResponse,
  UpdateSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSubaccountsRequest,
  output: UpdateSubaccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  T.Http({
    method: "GET",
    path: "userprofiles/{+profileId}/subaccounts/{+id}",
  }),
  svc,
) as unknown as Schema.Schema<GetSubaccountsRequest>;

export type GetSubaccountsResponse = Subaccount;
export const GetSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type GetSubaccountsError = DefaultErrors | NotFound | Forbidden;

/** Gets one subaccount by ID. */
export const getSubaccounts: API.OperationMethod<
  GetSubaccountsRequest,
  GetSubaccountsResponse,
  GetSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSubaccountsRequest,
  output: GetSubaccountsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchSubaccountsRequest {
  /** Required. Subaccount ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Subaccount;
}

export const PatchSubaccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Subaccount).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/subaccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchSubaccountsRequest>;

export type PatchSubaccountsResponse = Subaccount;
export const PatchSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type PatchSubaccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing subaccount. This method supports patch semantics. */
export const patchSubaccounts: API.OperationMethod<
  PatchSubaccountsRequest,
  PatchSubaccountsResponse,
  PatchSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSubaccountsRequest,
  output: PatchSubaccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/subaccounts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertSubaccountsRequest>;

export type InsertSubaccountsResponse = Subaccount;
export const InsertSubaccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Subaccount;

export type InsertSubaccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new subaccount. */
export const insertSubaccounts: API.OperationMethod<
  InsertSubaccountsRequest,
  InsertSubaccountsResponse,
  InsertSubaccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSubaccountsRequest,
  output: InsertSubaccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/ads",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchAdsRequest>;

export type PatchAdsResponse = Ad;
export const PatchAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type PatchAdsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing ad. This method supports patch semantics. */
export const patchAds: API.OperationMethod<
  PatchAdsRequest,
  PatchAdsResponse,
  PatchAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdsRequest,
  output: PatchAdsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/ads",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertAdsRequest>;

export type InsertAdsResponse = Ad;
export const InsertAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type InsertAdsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new ad. */
export const insertAds: API.OperationMethod<
  InsertAdsRequest,
  InsertAdsResponse,
  InsertAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdsRequest,
  output: InsertAdsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAdsRequest {
  /** Ad ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/ads/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetAdsRequest>;

export type GetAdsResponse = Ad;
export const GetAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type GetAdsError = DefaultErrors | NotFound | Forbidden;

/** Gets one ad by ID. */
export const getAds: API.OperationMethod<
  GetAdsRequest,
  GetAdsResponse,
  GetAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdsRequest,
  output: GetAdsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListAdsRequest {
  /** Select only ads with these audience segment IDs. */
  audienceSegmentIds?: string[];
  /** Select only ads with these IDs. */
  ids?: string[];
  /** Select only ads that require SSL. */
  sslRequired?: boolean;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard. */
  compatibility?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {});
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only ads with these placement IDs assigned. */
  placementIds?: string[];
  /** Select only ads with these campaign IDs. */
  campaignIds?: string[];
  /** Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both. */
  dynamicClickTracker?: boolean;
  /** Select only ads with this event tag override ID. */
  overriddenEventTagId?: string;
  /** Select only ads with this advertiser ID. */
  advertiserId?: string;
  /** Select only ads with these landing page IDs. */
  landingPageIds?: string[];
  /** Select only ads with these creative optimization configuration IDs. */
  creativeOptimizationConfigurationIds?: string[];
  /** Select only archived ads. */
  archived?: boolean;
  /** Select only active ads. */
  active?: boolean;
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
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only ads with these size IDs. */
  sizeIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only ads with these creative IDs assigned. */
  creativeIds?: string[];
  /** Select only ads whose list targeting expression use these remarketing list IDs. */
  remarketingListIds?: string[];
  /** Select only ads that are SSL-compliant. */
  sslCompliant?: boolean;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
}

export const ListAdsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  audienceSegmentIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("audienceSegmentIds"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  sslRequired: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("sslRequired")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  compatibility: Schema.optional(Schema.String).pipe(
    T.HttpQuery("compatibility"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  placementIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("placementIds"),
  ),
  campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("campaignIds"),
  ),
  dynamicClickTracker: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("dynamicClickTracker"),
  ),
  overriddenEventTagId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("overriddenEventTagId"),
  ),
  advertiserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("advertiserId"),
  ),
  landingPageIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("landingPageIds"),
  ),
  creativeOptimizationConfigurationIds: Schema.optional(
    Schema.Array(Schema.String),
  ).pipe(T.HttpQuery("creativeOptimizationConfigurationIds")),
  archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
  active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
  type: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("type")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  sizeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("sizeIds"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  creativeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("creativeIds"),
  ),
  remarketingListIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("remarketingListIds"),
  ),
  sslCompliant: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("sslCompliant"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/ads" }),
  svc,
) as unknown as Schema.Schema<ListAdsRequest>;

export type ListAdsResponse = AdsListResponse;
export const ListAdsResponse = /*@__PURE__*/ /*#__PURE__*/ AdsListResponse;

export type ListAdsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of ads, possibly filtered. This method supports paging. */
export const listAds: API.PaginatedOperationMethod<
  ListAdsRequest,
  ListAdsResponse,
  ListAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdsRequest,
  output: ListAdsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    path: "userprofiles/{+profileId}/ads",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateAdsRequest>;

export type UpdateAdsResponse = Ad;
export const UpdateAdsResponse = /*@__PURE__*/ /*#__PURE__*/ Ad;

export type UpdateAdsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing ad. */
export const updateAds: API.OperationMethod<
  UpdateAdsRequest,
  UpdateAdsResponse,
  UpdateAdsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdsRequest,
  output: UpdateAdsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBillingProfilesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API. */
  onlySuggestion?: boolean;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only billing profile with these IDs. */
  ids?: string[];
  /** Select only billing profile with currency. */
  currency_code?: string;
  /** Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported. */
  subaccountIds?: string[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile". */
  name?: string;
  /** Select only billing profile with the specified status. */
  status?: "UNDER_REVIEW" | "ACTIVE" | "ARCHIVED" | (string & {})[];
}

export const ListBillingProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    onlySuggestion: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("onlySuggestion"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    currency_code: Schema.optional(Schema.String).pipe(
      T.HttpQuery("currency_code"),
    ),
    subaccountIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("subaccountIds"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/billingProfiles",
    }),
    svc,
  ) as unknown as Schema.Schema<ListBillingProfilesRequest>;

export type ListBillingProfilesResponse = BillingProfilesListResponse;
export const ListBillingProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingProfilesListResponse;

export type ListBillingProfilesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of billing profiles, possibly filtered. This method supports paging. */
export const listBillingProfiles: API.PaginatedOperationMethod<
  ListBillingProfilesRequest,
  ListBillingProfilesResponse,
  ListBillingProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBillingProfilesRequest,
  output: ListBillingProfilesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/billingProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateBillingProfilesRequest>;

export type UpdateBillingProfilesResponse = BillingProfile;
export const UpdateBillingProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingProfile;

export type UpdateBillingProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing billing profile. */
export const updateBillingProfiles: API.OperationMethod<
  UpdateBillingProfilesRequest,
  UpdateBillingProfilesResponse,
  UpdateBillingProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBillingProfilesRequest,
  output: UpdateBillingProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/billingProfiles/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetBillingProfilesRequest>;

export type GetBillingProfilesResponse = BillingProfile;
export const GetBillingProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingProfile;

export type GetBillingProfilesError = DefaultErrors | NotFound | Forbidden;

/** Gets one billing profile by ID. */
export const getBillingProfiles: API.OperationMethod<
  GetBillingProfilesRequest,
  GetBillingProfilesResponse,
  GetBillingProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBillingProfilesRequest,
  output: GetBillingProfilesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingRates",
    }),
    svc,
  ) as unknown as Schema.Schema<ListBillingRatesRequest>;

export type ListBillingRatesResponse = BillingRatesListResponse;
export const ListBillingRatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BillingRatesListResponse;

export type ListBillingRatesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of billing rates. This method supports paging. */
export const listBillingRates: API.OperationMethod<
  ListBillingRatesRequest,
  ListBillingRatesResponse,
  ListBillingRatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBillingRatesRequest,
  output: ListBillingRatesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/creativeGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCreativeGroupsRequest>;

export type GetCreativeGroupsResponse = CreativeGroup;
export const GetCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type GetCreativeGroupsError = DefaultErrors | NotFound | Forbidden;

/** Gets one creative group by ID. */
export const getCreativeGroups: API.OperationMethod<
  GetCreativeGroupsRequest,
  GetCreativeGroupsResponse,
  GetCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativeGroupsRequest,
  output: GetCreativeGroupsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/creativeGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeGroupsRequest>;

export type InsertCreativeGroupsResponse = CreativeGroup;
export const InsertCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type InsertCreativeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new creative group. */
export const insertCreativeGroups: API.OperationMethod<
  InsertCreativeGroupsRequest,
  InsertCreativeGroupsResponse,
  InsertCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeGroupsRequest,
  output: InsertCreativeGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCreativeGroupsRequest {
  /** Required. Creative Group ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeGroup;
}

export const PatchCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/creativeGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCreativeGroupsRequest>;

export type PatchCreativeGroupsResponse = CreativeGroup;
export const PatchCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type PatchCreativeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative group. This method supports patch semantics. */
export const patchCreativeGroups: API.OperationMethod<
  PatchCreativeGroupsRequest,
  PatchCreativeGroupsResponse,
  PatchCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativeGroupsRequest,
  output: PatchCreativeGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/creativeGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateCreativeGroupsRequest>;

export type UpdateCreativeGroupsResponse = CreativeGroup;
export const UpdateCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroup;

export type UpdateCreativeGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative group. */
export const updateCreativeGroups: API.OperationMethod<
  UpdateCreativeGroupsRequest,
  UpdateCreativeGroupsResponse,
  UpdateCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativeGroupsRequest,
  output: UpdateCreativeGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCreativeGroupsRequest {
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only creative groups that belong to these advertisers. */
  advertiserIds?: string[];
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup". */
  searchString?: string;
  /** Select only creative groups that belong to this subgroup. */
  groupNumber?: number;
  /** Select only creative groups with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListCreativeGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    groupNumber: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("groupNumber"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{+profileId}/creativeGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListCreativeGroupsRequest>;

export type ListCreativeGroupsResponse = CreativeGroupsListResponse;
export const ListCreativeGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeGroupsListResponse;

export type ListCreativeGroupsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of creative groups, possibly filtered. This method supports paging. */
export const listCreativeGroups: API.PaginatedOperationMethod<
  ListCreativeGroupsRequest,
  ListCreativeGroupsResponse,
  ListCreativeGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativeGroupsRequest,
  output: ListCreativeGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/mobileApps/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetMobileAppsRequest>;

export type GetMobileAppsResponse = MobileApp;
export const GetMobileAppsResponse = /*@__PURE__*/ /*#__PURE__*/ MobileApp;

export type GetMobileAppsError = DefaultErrors | NotFound | Forbidden;

/** Gets one mobile app by ID. */
export const getMobileApps: API.OperationMethod<
  GetMobileAppsRequest,
  GetMobileAppsResponse,
  GetMobileAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMobileAppsRequest,
  output: GetMobileAppsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMobileAppsRequest {
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
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app". */
  searchString?: string;
  /** Select only apps with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListMobileAppsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  directories: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("directories"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/mobileApps" }),
  svc,
) as unknown as Schema.Schema<ListMobileAppsRequest>;

export type ListMobileAppsResponse = MobileAppsListResponse;
export const ListMobileAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileAppsListResponse;

export type ListMobileAppsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves list of available mobile apps. */
export const listMobileApps: API.PaginatedOperationMethod<
  ListMobileAppsRequest,
  ListMobileAppsResponse,
  ListMobileAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMobileAppsRequest,
  output: ListMobileAppsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetMobileCarriersRequest {
  /** Mobile carrier ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetMobileCarriersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/mobileCarriers/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetMobileCarriersRequest>;

export type GetMobileCarriersResponse = MobileCarrier;
export const GetMobileCarriersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileCarrier;

export type GetMobileCarriersError = DefaultErrors | NotFound | Forbidden;

/** Gets one mobile carrier by ID. */
export const getMobileCarriers: API.OperationMethod<
  GetMobileCarriersRequest,
  GetMobileCarriersResponse,
  GetMobileCarriersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMobileCarriersRequest,
  output: GetMobileCarriersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMobileCarriersRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListMobileCarriersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{+profileId}/mobileCarriers" }),
    svc,
  ) as unknown as Schema.Schema<ListMobileCarriersRequest>;

export type ListMobileCarriersResponse = MobileCarriersListResponse;
export const ListMobileCarriersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MobileCarriersListResponse;

export type ListMobileCarriersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of mobile carriers. */
export const listMobileCarriers: API.OperationMethod<
  ListMobileCarriersRequest,
  ListMobileCarriersResponse,
  ListMobileCarriersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMobileCarriersRequest,
  output: ListMobileCarriersResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/floodlightActivityGroups/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFloodlightActivityGroupsRequest>;

export type GetFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const GetFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type GetFloodlightActivityGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one floodlight activity group by ID. */
export const getFloodlightActivityGroups: API.OperationMethod<
  GetFloodlightActivityGroupsRequest,
  GetFloodlightActivityGroupsResponse,
  GetFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFloodlightActivityGroupsRequest,
  output: GetFloodlightActivityGroupsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/floodlightActivityGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFloodlightActivityGroupsRequest>;

export type InsertFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const InsertFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type InsertFloodlightActivityGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new floodlight activity group. */
export const insertFloodlightActivityGroups: API.OperationMethod<
  InsertFloodlightActivityGroupsRequest,
  InsertFloodlightActivityGroupsResponse,
  InsertFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFloodlightActivityGroupsRequest,
  output: InsertFloodlightActivityGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFloodlightActivityGroupsRequest {
  /** Required. EventTag ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightActivityGroup;
}

export const PatchFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightActivityGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/floodlightActivityGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFloodlightActivityGroupsRequest>;

export type PatchFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const PatchFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type PatchFloodlightActivityGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing floodlight activity group. This method supports patch semantics. */
export const patchFloodlightActivityGroups: API.OperationMethod<
  PatchFloodlightActivityGroupsRequest,
  PatchFloodlightActivityGroupsResponse,
  PatchFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFloodlightActivityGroupsRequest,
  output: PatchFloodlightActivityGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightActivityGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFloodlightActivityGroupsRequest>;

export type UpdateFloodlightActivityGroupsResponse = FloodlightActivityGroup;
export const UpdateFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroup;

export type UpdateFloodlightActivityGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing floodlight activity group. */
export const updateFloodlightActivityGroups: API.OperationMethod<
  UpdateFloodlightActivityGroupsRequest,
  UpdateFloodlightActivityGroupsResponse,
  UpdateFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFloodlightActivityGroupsRequest,
  output: UpdateFloodlightActivityGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFloodlightActivityGroupsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only floodlight activity groups with the specified floodlight activity group type. */
  type?: "COUNTER" | "SALE" | (string & {});
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup". */
  searchString?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result. */
  advertiserId?: string;
  /** Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result. */
  floodlightConfigurationId?: string;
}

export const ListFloodlightActivityGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    floodlightConfigurationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightConfigurationId"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/floodlightActivityGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<ListFloodlightActivityGroupsRequest>;

export type ListFloodlightActivityGroupsResponse =
  FloodlightActivityGroupsListResponse;
export const ListFloodlightActivityGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivityGroupsListResponse;

export type ListFloodlightActivityGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging. */
export const listFloodlightActivityGroups: API.PaginatedOperationMethod<
  ListFloodlightActivityGroupsRequest,
  ListFloodlightActivityGroupsResponse,
  ListFloodlightActivityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFloodlightActivityGroupsRequest,
  output: ListFloodlightActivityGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListDirectorySitesRequest {
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInStreamVideoPlacements?: boolean;
  /** This search filter is no longer supported and will have no effect on the results returned. */
  acceptsInterstitialPlacements?: boolean;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site". */
  searchString?: string;
  /** Select only active directory sites. Leave blank to retrieve both active and inactive directory sites. */
  active?: boolean;
  /** Select only directory sites with this Ad Manager network code. */
  dfpNetworkCode?: string;
  /** Select only directory sites that accept publisher paid placements. This field can be left blank. */
  acceptsPublisherPaidPlacements?: boolean;
  /** Select only directory sites with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListDirectorySitesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    acceptsInStreamVideoPlacements: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acceptsInStreamVideoPlacements"),
    ),
    acceptsInterstitialPlacements: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acceptsInterstitialPlacements"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    dfpNetworkCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dfpNetworkCode"),
    ),
    acceptsPublisherPaidPlacements: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("acceptsPublisherPaidPlacements"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{+profileId}/directorySites" }),
    svc,
  ) as unknown as Schema.Schema<ListDirectorySitesRequest>;

export type ListDirectorySitesResponse = DirectorySitesListResponse;
export const ListDirectorySitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectorySitesListResponse;

export type ListDirectorySitesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of directory sites, possibly filtered. This method supports paging. */
export const listDirectorySites: API.PaginatedOperationMethod<
  ListDirectorySitesRequest,
  ListDirectorySitesResponse,
  ListDirectorySitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDirectorySitesRequest,
  output: ListDirectorySitesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
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
      path: "userprofiles/{+profileId}/directorySites",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertDirectorySitesRequest>;

export type InsertDirectorySitesResponse = DirectorySite;
export const InsertDirectorySitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectorySite;

export type InsertDirectorySitesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new directory site. */
export const insertDirectorySites: API.OperationMethod<
  InsertDirectorySitesRequest,
  InsertDirectorySitesResponse,
  InsertDirectorySitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDirectorySitesRequest,
  output: InsertDirectorySitesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/directorySites/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDirectorySitesRequest>;

export type GetDirectorySitesResponse = DirectorySite;
export const GetDirectorySitesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DirectorySite;

export type GetDirectorySitesError = DefaultErrors | NotFound | Forbidden;

/** Gets one directory site by ID. */
export const getDirectorySites: API.OperationMethod<
  GetDirectorySitesRequest,
  GetDirectorySitesResponse,
  GetDirectorySitesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDirectorySitesRequest,
  output: GetDirectorySitesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountsRequest {
  /** Account ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/accounts/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetAccountsRequest>;

export type GetAccountsResponse = Account;
export const GetAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type GetAccountsError = DefaultErrors | NotFound | Forbidden;

/** Gets one account by ID. */
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
    path: "userprofiles/{+profileId}/accounts",
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

/** Updates an existing account. */
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

export interface ListAccountsRequest {
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only accounts with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account". */
  searchString?: string;
  /** Select only active accounts. Don't set this field to select both active and non-active accounts. */
  active?: boolean;
}

export const ListAccountsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/accounts" }),
  svc,
) as unknown as Schema.Schema<ListAccountsRequest>;

export type ListAccountsResponse = AccountsListResponse;
export const ListAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountsListResponse;

export type ListAccountsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the list of accounts, possibly filtered. This method supports paging. */
export const listAccounts: API.PaginatedOperationMethod<
  ListAccountsRequest,
  ListAccountsResponse,
  ListAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsRequest,
  output: ListAccountsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    path: "userprofiles/{+profileId}/accounts",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchAccountsRequest>;

export type PatchAccountsResponse = Account;
export const PatchAccountsResponse = /*@__PURE__*/ /*#__PURE__*/ Account;

export type PatchAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing account. This method supports patch semantics. */
export const patchAccounts: API.OperationMethod<
  PatchAccountsRequest,
  PatchAccountsResponse,
  PatchAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountsRequest,
  output: PatchAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightConfigurations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFloodlightConfigurationsRequest>;

export type UpdateFloodlightConfigurationsResponse = FloodlightConfiguration;
export const UpdateFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfiguration;

export type UpdateFloodlightConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing floodlight configuration. */
export const updateFloodlightConfigurations: API.OperationMethod<
  UpdateFloodlightConfigurationsRequest,
  UpdateFloodlightConfigurationsResponse,
  UpdateFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFloodlightConfigurationsRequest,
  output: UpdateFloodlightConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightConfigurations",
    }),
    svc,
  ) as unknown as Schema.Schema<ListFloodlightConfigurationsRequest>;

export type ListFloodlightConfigurationsResponse =
  FloodlightConfigurationsListResponse;
export const ListFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfigurationsListResponse;

export type ListFloodlightConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of floodlight configurations, possibly filtered. */
export const listFloodlightConfigurations: API.OperationMethod<
  ListFloodlightConfigurationsRequest,
  ListFloodlightConfigurationsResponse,
  ListFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFloodlightConfigurationsRequest,
  output: ListFloodlightConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchFloodlightConfigurationsRequest {
  /** Required. EventTag ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: FloodlightConfiguration;
}

export const PatchFloodlightConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(FloodlightConfiguration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/floodlightConfigurations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFloodlightConfigurationsRequest>;

export type PatchFloodlightConfigurationsResponse = FloodlightConfiguration;
export const PatchFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfiguration;

export type PatchFloodlightConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing floodlight configuration. This method supports patch semantics. */
export const patchFloodlightConfigurations: API.OperationMethod<
  PatchFloodlightConfigurationsRequest,
  PatchFloodlightConfigurationsResponse,
  PatchFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFloodlightConfigurationsRequest,
  output: PatchFloodlightConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFloodlightConfigurationsRequest {
  /** Floodlight configuration ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetFloodlightConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/floodlightConfigurations/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFloodlightConfigurationsRequest>;

export type GetFloodlightConfigurationsResponse = FloodlightConfiguration;
export const GetFloodlightConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightConfiguration;

export type GetFloodlightConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one floodlight configuration by ID. */
export const getFloodlightConfigurations: API.OperationMethod<
  GetFloodlightConfigurationsRequest,
  GetFloodlightConfigurationsResponse,
  GetFloodlightConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFloodlightConfigurationsRequest,
  output: GetFloodlightConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountUserProfilesRequest {
  /** User profile ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{profileId}/accountUserProfiles/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountUserProfilesRequest>;

export type GetAccountUserProfilesResponse = AccountUserProfile;
export const GetAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type GetAccountUserProfilesError = DefaultErrors | NotFound | Forbidden;

/** Gets one account user profile by ID. */
export const getAccountUserProfiles: API.OperationMethod<
  GetAccountUserProfilesRequest,
  GetAccountUserProfilesResponse,
  GetAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountUserProfilesRequest,
  output: GetAccountUserProfilesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/accountUserProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAccountUserProfilesRequest>;

export type PatchAccountUserProfilesResponse = AccountUserProfile;
export const PatchAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type PatchAccountUserProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing account user profile. This method supports patch semantics. */
export const patchAccountUserProfiles: API.OperationMethod<
  PatchAccountUserProfilesRequest,
  PatchAccountUserProfilesResponse,
  PatchAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAccountUserProfilesRequest,
  output: PatchAccountUserProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/accountUserProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAccountUserProfilesRequest>;

export type InsertAccountUserProfilesResponse = AccountUserProfile;
export const InsertAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type InsertAccountUserProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new account user profile. */
export const insertAccountUserProfiles: API.OperationMethod<
  InsertAccountUserProfilesRequest,
  InsertAccountUserProfilesResponse,
  InsertAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAccountUserProfilesRequest,
  output: InsertAccountUserProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAccountUserProfilesRequest {
  /** Select only active user profiles. */
  active?: boolean;
  /** Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile". */
  searchString?: string;
  /** Select only user profiles with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only user profiles with the specified user role ID. */
  userRoleId?: string;
  /** Select only user profiles with the specified subaccount ID. */
  subaccountId?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
}

export const ListAccountUserProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    userRoleId: Schema.optional(Schema.String).pipe(T.HttpQuery("userRoleId")),
    subaccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subaccountId"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/accountUserProfiles",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAccountUserProfilesRequest>;

export type ListAccountUserProfilesResponse = AccountUserProfilesListResponse;
export const ListAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfilesListResponse;

export type ListAccountUserProfilesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of account user profiles, possibly filtered. This method supports paging. */
export const listAccountUserProfiles: API.PaginatedOperationMethod<
  ListAccountUserProfilesRequest,
  ListAccountUserProfilesResponse,
  ListAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAccountUserProfilesRequest,
  output: ListAccountUserProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/accountUserProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAccountUserProfilesRequest>;

export type UpdateAccountUserProfilesResponse = AccountUserProfile;
export const UpdateAccountUserProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountUserProfile;

export type UpdateAccountUserProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing account user profile. */
export const updateAccountUserProfiles: API.OperationMethod<
  UpdateAccountUserProfilesRequest,
  UpdateAccountUserProfilesResponse,
  UpdateAccountUserProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAccountUserProfilesRequest,
  output: UpdateAccountUserProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetChangeLogsRequest {
  /** Change log ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetChangeLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/changeLogs/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetChangeLogsRequest>;

export type GetChangeLogsResponse = ChangeLog;
export const GetChangeLogsResponse = /*@__PURE__*/ /*#__PURE__*/ ChangeLog;

export type GetChangeLogsError = DefaultErrors | NotFound | Forbidden;

/** Gets one change log by ID. */
export const getChangeLogs: API.OperationMethod<
  GetChangeLogsRequest,
  GetChangeLogsResponse,
  GetChangeLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetChangeLogsRequest,
  output: GetChangeLogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListChangeLogsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset. */
  minChangeTime?: string;
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
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only change logs whose object ID, user name, old or new values match the search string. */
  searchString?: string;
  /** Select only change logs with these object IDs. */
  objectIds?: string[];
  /** Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset. */
  maxChangeTime?: string;
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
  /** Select only change logs with these user profile IDs. */
  userProfileIds?: string[];
}

export const ListChangeLogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  minChangeTime: Schema.optional(Schema.String).pipe(
    T.HttpQuery("minChangeTime"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  action: Schema.optional(Schema.String).pipe(T.HttpQuery("action")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  objectIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("objectIds"),
  ),
  maxChangeTime: Schema.optional(Schema.String).pipe(
    T.HttpQuery("maxChangeTime"),
  ),
  objectType: Schema.optional(Schema.String).pipe(T.HttpQuery("objectType")),
  userProfileIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("userProfileIds"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/changeLogs" }),
  svc,
) as unknown as Schema.Schema<ListChangeLogsRequest>;

export type ListChangeLogsResponse = ChangeLogsListResponse;
export const ListChangeLogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChangeLogsListResponse;

export type ListChangeLogsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of change logs. This method supports paging. */
export const listChangeLogs: API.PaginatedOperationMethod<
  ListChangeLogsRequest,
  ListChangeLogsResponse,
  ListChangeLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListChangeLogsRequest,
  output: ListChangeLogsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListAdvertiserInvoicesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Advertiser ID of this invoice. */
  advertiserId: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Month for which invoices are needed in the format YYYYMM. Required field */
  issueMonth?: string;
}

export const ListAdvertiserInvoicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    advertiserId: Schema.String.pipe(T.HttpPath("advertiserId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    issueMonth: Schema.optional(Schema.String).pipe(T.HttpQuery("issueMonth")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/advertisers/{+advertiserId}/invoices",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAdvertiserInvoicesRequest>;

export type ListAdvertiserInvoicesResponse = AdvertiserInvoicesListResponse;
export const ListAdvertiserInvoicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserInvoicesListResponse;

export type ListAdvertiserInvoicesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level. */
export const listAdvertiserInvoices: API.PaginatedOperationMethod<
  ListAdvertiserInvoicesRequest,
  ListAdvertiserInvoicesResponse,
  ListAdvertiserInvoicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertiserInvoicesRequest,
  output: ListAdvertiserInvoicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetAdvertiserLandingPagesRequest {
  /** Landing page ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/advertiserLandingPages/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAdvertiserLandingPagesRequest>;

export type GetAdvertiserLandingPagesResponse = LandingPage;
export const GetAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type GetAdvertiserLandingPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one landing page by ID. */
export const getAdvertiserLandingPages: API.OperationMethod<
  GetAdvertiserLandingPagesRequest,
  GetAdvertiserLandingPagesResponse,
  GetAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAdvertiserLandingPagesRequest,
  output: GetAdvertiserLandingPagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchAdvertiserLandingPagesRequest {
  /** Required. Landing Page ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: LandingPage;
}

export const PatchAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(LandingPage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/advertiserLandingPages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchAdvertiserLandingPagesRequest>;

export type PatchAdvertiserLandingPagesResponse = LandingPage;
export const PatchAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type PatchAdvertiserLandingPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing landing page. This method supports patch semantics. */
export const patchAdvertiserLandingPages: API.OperationMethod<
  PatchAdvertiserLandingPagesRequest,
  PatchAdvertiserLandingPagesResponse,
  PatchAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchAdvertiserLandingPagesRequest,
  output: PatchAdvertiserLandingPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/advertiserLandingPages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertAdvertiserLandingPagesRequest>;

export type InsertAdvertiserLandingPagesResponse = LandingPage;
export const InsertAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type InsertAdvertiserLandingPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new landing page. */
export const insertAdvertiserLandingPages: API.OperationMethod<
  InsertAdvertiserLandingPagesRequest,
  InsertAdvertiserLandingPagesResponse,
  InsertAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAdvertiserLandingPagesRequest,
  output: InsertAdvertiserLandingPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListAdvertiserLandingPagesRequest {
  /** Select only landing pages that belong to this subaccount. */
  subaccountId?: string;
  /** Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages. */
  archived?: boolean;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only landing pages that belong to these advertisers. */
  advertiserIds?: string[];
  /** Select only landing pages that are associated with these campaigns. */
  campaignIds?: string[];
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage". */
  searchString?: string;
  /** Select only landing pages with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
}

export const ListAdvertiserLandingPagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subaccountId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subaccountId"),
    ),
    archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("campaignIds"),
    ),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/advertiserLandingPages",
    }),
    svc,
  ) as unknown as Schema.Schema<ListAdvertiserLandingPagesRequest>;

export type ListAdvertiserLandingPagesResponse =
  AdvertiserLandingPagesListResponse;
export const ListAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvertiserLandingPagesListResponse;

export type ListAdvertiserLandingPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of landing pages. */
export const listAdvertiserLandingPages: API.PaginatedOperationMethod<
  ListAdvertiserLandingPagesRequest,
  ListAdvertiserLandingPagesResponse,
  ListAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAdvertiserLandingPagesRequest,
  output: ListAdvertiserLandingPagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/advertiserLandingPages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateAdvertiserLandingPagesRequest>;

export type UpdateAdvertiserLandingPagesResponse = LandingPage;
export const UpdateAdvertiserLandingPagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LandingPage;

export type UpdateAdvertiserLandingPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing landing page. */
export const updateAdvertiserLandingPages: API.OperationMethod<
  UpdateAdvertiserLandingPagesRequest,
  UpdateAdvertiserLandingPagesResponse,
  UpdateAdvertiserLandingPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateAdvertiserLandingPagesRequest,
  output: UpdateAdvertiserLandingPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOperatingSystemsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Operating system DART ID. */
  dartId: string;
}

export const GetOperatingSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    dartId: Schema.String.pipe(T.HttpPath("dartId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/operatingSystems/{+dartId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetOperatingSystemsRequest>;

export type GetOperatingSystemsResponse = OperatingSystem;
export const GetOperatingSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystem;

export type GetOperatingSystemsError = DefaultErrors | NotFound | Forbidden;

/** Gets one operating system by DART ID. */
export const getOperatingSystems: API.OperationMethod<
  GetOperatingSystemsRequest,
  GetOperatingSystemsResponse,
  GetOperatingSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperatingSystemsRequest,
  output: GetOperatingSystemsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/operatingSystems",
    }),
    svc,
  ) as unknown as Schema.Schema<ListOperatingSystemsRequest>;

export type ListOperatingSystemsResponse = OperatingSystemsListResponse;
export const ListOperatingSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperatingSystemsListResponse;

export type ListOperatingSystemsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of operating systems. */
export const listOperatingSystems: API.OperationMethod<
  ListOperatingSystemsRequest,
  ListOperatingSystemsResponse,
  ListOperatingSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOperatingSystemsRequest,
  output: ListOperatingSystemsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/remarketingListShares/{+remarketingListId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetRemarketingListSharesRequest>;

export type GetRemarketingListSharesResponse = RemarketingListShare;
export const GetRemarketingListSharesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListShare;

export type GetRemarketingListSharesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets one remarketing list share by remarketing list ID. */
export const getRemarketingListShares: API.OperationMethod<
  GetRemarketingListSharesRequest,
  GetRemarketingListSharesResponse,
  GetRemarketingListSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRemarketingListSharesRequest,
  output: GetRemarketingListSharesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/remarketingListShares",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateRemarketingListSharesRequest>;

export type UpdateRemarketingListSharesResponse = RemarketingListShare;
export const UpdateRemarketingListSharesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListShare;

export type UpdateRemarketingListSharesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing remarketing list share. */
export const updateRemarketingListShares: API.OperationMethod<
  UpdateRemarketingListSharesRequest,
  UpdateRemarketingListSharesResponse,
  UpdateRemarketingListSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRemarketingListSharesRequest,
  output: UpdateRemarketingListSharesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchRemarketingListSharesRequest {
  /** Required. RemarketingList ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: RemarketingListShare;
}

export const PatchRemarketingListSharesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(RemarketingListShare).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/remarketingListShares",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchRemarketingListSharesRequest>;

export type PatchRemarketingListSharesResponse = RemarketingListShare;
export const PatchRemarketingListSharesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemarketingListShare;

export type PatchRemarketingListSharesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing remarketing list share. This method supports patch semantics. */
export const patchRemarketingListShares: API.OperationMethod<
  PatchRemarketingListSharesRequest,
  PatchRemarketingListSharesResponse,
  PatchRemarketingListSharesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRemarketingListSharesRequest,
  output: PatchRemarketingListSharesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/targetingTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertTargetingTemplatesRequest>;

export type InsertTargetingTemplatesResponse = TargetingTemplate;
export const InsertTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type InsertTargetingTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new targeting template. */
export const insertTargetingTemplates: API.OperationMethod<
  InsertTargetingTemplatesRequest,
  InsertTargetingTemplatesResponse,
  InsertTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTargetingTemplatesRequest,
  output: InsertTargetingTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchTargetingTemplatesRequest {
  /** Required. RemarketingList ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: TargetingTemplate;
}

export const PatchTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(TargetingTemplate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/targetingTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchTargetingTemplatesRequest>;

export type PatchTargetingTemplatesResponse = TargetingTemplate;
export const PatchTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type PatchTargetingTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing targeting template. This method supports patch semantics. */
export const patchTargetingTemplates: API.OperationMethod<
  PatchTargetingTemplatesRequest,
  PatchTargetingTemplatesResponse,
  PatchTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTargetingTemplatesRequest,
  output: PatchTargetingTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/targetingTemplates/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetTargetingTemplatesRequest>;

export type GetTargetingTemplatesResponse = TargetingTemplate;
export const GetTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type GetTargetingTemplatesError = DefaultErrors | NotFound | Forbidden;

/** Gets one targeting template by ID. */
export const getTargetingTemplates: API.OperationMethod<
  GetTargetingTemplatesRequest,
  GetTargetingTemplatesResponse,
  GetTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTargetingTemplatesRequest,
  output: GetTargetingTemplatesResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/targetingTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateTargetingTemplatesRequest>;

export type UpdateTargetingTemplatesResponse = TargetingTemplate;
export const UpdateTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplate;

export type UpdateTargetingTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing targeting template. */
export const updateTargetingTemplates: API.OperationMethod<
  UpdateTargetingTemplatesRequest,
  UpdateTargetingTemplatesResponse,
  UpdateTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTargetingTemplatesRequest,
  output: UpdateTargetingTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListTargetingTemplatesRequest {
  /** Select only targeting templates with these IDs. */
  ids?: string[];
  /** Select only targeting templates with this advertiser ID. */
  advertiserId?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template". */
  searchString?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListTargetingTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/targetingTemplates",
    }),
    svc,
  ) as unknown as Schema.Schema<ListTargetingTemplatesRequest>;

export type ListTargetingTemplatesResponse = TargetingTemplatesListResponse;
export const ListTargetingTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetingTemplatesListResponse;

export type ListTargetingTemplatesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of targeting templates, optionally filtered. This method supports paging. */
export const listTargetingTemplates: API.PaginatedOperationMethod<
  ListTargetingTemplatesRequest,
  ListTargetingTemplatesResponse,
  ListTargetingTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTargetingTemplatesRequest,
  output: ListTargetingTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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

export type QueryDimensionValuesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves list of report dimension values for a list of filters. */
export const queryDimensionValues: API.PaginatedOperationMethod<
  QueryDimensionValuesRequest,
  QueryDimensionValuesResponse,
  QueryDimensionValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryDimensionValuesRequest,
  output: QueryDimensionValuesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
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
      path: "userprofiles/{+profileId}/creativeFields/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteCreativeFieldsRequest>;

export interface DeleteCreativeFieldsResponse {}
export const DeleteCreativeFieldsResponse: Schema.Schema<DeleteCreativeFieldsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCreativeFieldsResponse>;

export type DeleteCreativeFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing creative field. */
export const deleteCreativeFields: API.OperationMethod<
  DeleteCreativeFieldsRequest,
  DeleteCreativeFieldsResponse,
  DeleteCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCreativeFieldsRequest,
  output: DeleteCreativeFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/creativeFields",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertCreativeFieldsRequest>;

export type InsertCreativeFieldsResponse = CreativeField;
export const InsertCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type InsertCreativeFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new creative field. */
export const insertCreativeFields: API.OperationMethod<
  InsertCreativeFieldsRequest,
  InsertCreativeFieldsResponse,
  InsertCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativeFieldsRequest,
  output: InsertCreativeFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCreativeFieldsRequest {
  /** CreativeField ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: CreativeField;
}

export const PatchCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(CreativeField).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/creativeFields",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchCreativeFieldsRequest>;

export type PatchCreativeFieldsResponse = CreativeField;
export const PatchCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type PatchCreativeFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative field. This method supports patch semantics. */
export const patchCreativeFields: API.OperationMethod<
  PatchCreativeFieldsRequest,
  PatchCreativeFieldsResponse,
  PatchCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativeFieldsRequest,
  output: PatchCreativeFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCreativeFieldsRequest {
  /** Creative Field ID */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/creativeFields/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetCreativeFieldsRequest>;

export type GetCreativeFieldsResponse = CreativeField;
export const GetCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type GetCreativeFieldsError = DefaultErrors | NotFound | Forbidden;

/** Gets one creative field by ID. */
export const getCreativeFields: API.OperationMethod<
  GetCreativeFieldsRequest,
  GetCreativeFieldsResponse,
  GetCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativeFieldsRequest,
  output: GetCreativeFieldsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/creativeFields",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateCreativeFieldsRequest>;

export type UpdateCreativeFieldsResponse = CreativeField;
export const UpdateCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeField;

export type UpdateCreativeFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative field. */
export const updateCreativeFields: API.OperationMethod<
  UpdateCreativeFieldsRequest,
  UpdateCreativeFieldsResponse,
  UpdateCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativeFieldsRequest,
  output: UpdateCreativeFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCreativeFieldsRequest {
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only creative fields that belong to these advertisers. */
  advertiserIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only creative fields with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield". */
  searchString?: string;
}

export const ListCreativeFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("advertiserIds"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{+profileId}/creativeFields" }),
    svc,
  ) as unknown as Schema.Schema<ListCreativeFieldsRequest>;

export type ListCreativeFieldsResponse = CreativeFieldsListResponse;
export const ListCreativeFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativeFieldsListResponse;

export type ListCreativeFieldsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of creative fields, possibly filtered. This method supports paging. */
export const listCreativeFields: API.PaginatedOperationMethod<
  ListCreativeFieldsRequest,
  ListCreativeFieldsResponse,
  ListCreativeFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativeFieldsRequest,
  output: ListCreativeFieldsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListContentCategoriesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only content categories with these IDs. */
  ids?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory". */
  searchString?: string;
}

export const ListContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/contentCategories",
    }),
    svc,
  ) as unknown as Schema.Schema<ListContentCategoriesRequest>;

export type ListContentCategoriesResponse = ContentCategoriesListResponse;
export const ListContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategoriesListResponse;

export type ListContentCategoriesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of content categories, possibly filtered. This method supports paging. */
export const listContentCategories: API.PaginatedOperationMethod<
  ListContentCategoriesRequest,
  ListContentCategoriesResponse,
  ListContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListContentCategoriesRequest,
  output: ListContentCategoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "userprofiles/{+profileId}/contentCategories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateContentCategoriesRequest>;

export type UpdateContentCategoriesResponse = ContentCategory;
export const UpdateContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type UpdateContentCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing content category. */
export const updateContentCategories: API.OperationMethod<
  UpdateContentCategoriesRequest,
  UpdateContentCategoriesResponse,
  UpdateContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContentCategoriesRequest,
  output: UpdateContentCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchContentCategoriesRequest {
  /** Required. ContentCategory ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: ContentCategory;
}

export const PatchContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(ContentCategory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "userprofiles/{+profileId}/contentCategories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchContentCategoriesRequest>;

export type PatchContentCategoriesResponse = ContentCategory;
export const PatchContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type PatchContentCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing content category. This method supports patch semantics. */
export const patchContentCategories: API.OperationMethod<
  PatchContentCategoriesRequest,
  PatchContentCategoriesResponse,
  PatchContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchContentCategoriesRequest,
  output: PatchContentCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteContentCategoriesRequest {
  /** Content category ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const DeleteContentCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{+profileId}/contentCategories/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteContentCategoriesRequest>;

export interface DeleteContentCategoriesResponse {}
export const DeleteContentCategoriesResponse: Schema.Schema<DeleteContentCategoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteContentCategoriesResponse>;

export type DeleteContentCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing content category. */
export const deleteContentCategories: API.OperationMethod<
  DeleteContentCategoriesRequest,
  DeleteContentCategoriesResponse,
  DeleteContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteContentCategoriesRequest,
  output: DeleteContentCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/contentCategories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertContentCategoriesRequest>;

export type InsertContentCategoriesResponse = ContentCategory;
export const InsertContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type InsertContentCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new content category. */
export const insertContentCategories: API.OperationMethod<
  InsertContentCategoriesRequest,
  InsertContentCategoriesResponse,
  InsertContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertContentCategoriesRequest,
  output: InsertContentCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/contentCategories/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetContentCategoriesRequest>;

export type GetContentCategoriesResponse = ContentCategory;
export const GetContentCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContentCategory;

export type GetContentCategoriesError = DefaultErrors | NotFound | Forbidden;

/** Gets one content category by ID. */
export const getContentCategories: API.OperationMethod<
  GetContentCategoriesRequest,
  GetContentCategoriesResponse,
  GetContentCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentCategoriesRequest,
  output: GetContentCategoriesResponse,
  errors: [NotFound, Forbidden],
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

export type InsertStudioCreativesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new studio creative. */
export const insertStudioCreatives: API.OperationMethod<
  InsertStudioCreativesRequest,
  InsertStudioCreativesResponse,
  InsertStudioCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertStudioCreativesRequest,
  output: InsertStudioCreativesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "studio/creatives/{+studioCreativeId}/publish",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishStudioCreativesRequest>;

export interface PublishStudioCreativesResponse {}
export const PublishStudioCreativesResponse: Schema.Schema<PublishStudioCreativesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<PublishStudioCreativesResponse>;

export type PublishStudioCreativesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Publish for a studio creative. */
export const publishStudioCreatives: API.OperationMethod<
  PublishStudioCreativesRequest,
  PublishStudioCreativesResponse,
  PublishStudioCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishStudioCreativesRequest,
  output: PublishStudioCreativesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetStudioCreativesRequest {
  /** Required. Studio creative ID. */
  studioCreativeId: string;
}

export const GetStudioCreativesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    studioCreativeId: Schema.String.pipe(T.HttpPath("studioCreativeId")),
  }).pipe(
    T.Http({ method: "GET", path: "studio/creatives/{+studioCreativeId}" }),
    svc,
  ) as unknown as Schema.Schema<GetStudioCreativesRequest>;

export type GetStudioCreativesResponse = StudioCreative;
export const GetStudioCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ StudioCreative;

export type GetStudioCreativesError = DefaultErrors | NotFound | Forbidden;

/** Gets a studio creative by ID. */
export const getStudioCreatives: API.OperationMethod<
  GetStudioCreativesRequest,
  GetStudioCreativesResponse,
  GetStudioCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStudioCreativesRequest,
  output: GetStudioCreativesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFilesRequest {
  /** The ID of the report. */
  reportId: string;
  /** The ID of the report file. */
  fileId: string;
}

export const GetFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
  fileId: Schema.String.pipe(T.HttpPath("fileId")),
}).pipe(
  T.Http({ method: "GET", path: "reports/{reportId}/files/{fileId}" }),
  svc,
) as unknown as Schema.Schema<GetFilesRequest>;

export type GetFilesResponse = File;
export const GetFilesResponse = /*@__PURE__*/ /*#__PURE__*/ File;

export type GetFilesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a report file by its report ID and file ID. This method supports media download. */
export const getFiles: API.OperationMethod<
  GetFilesRequest,
  GetFilesResponse,
  GetFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFilesRequest,
  output: GetFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFilesRequest {
  /** The scope that defines which results are returned. */
  scope?: "ALL" | "MINE" | "SHARED_WITH_ME" | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** The field by which to sort the list. */
  sortField?: "ID" | "LAST_MODIFIED_TIME" | (string & {});
  /** The Campaign Manager 360 user profile ID. */
  profileId: string;
  /** The value of the nextToken from the previous result page. */
  pageToken?: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListFilesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{profileId}/files" }),
  svc,
) as unknown as Schema.Schema<ListFilesRequest>;

export type ListFilesResponse = FileList;
export const ListFilesResponse = /*@__PURE__*/ /*#__PURE__*/ FileList;

export type ListFilesError = DefaultErrors | NotFound | Forbidden;

/** Lists files for a user profile. */
export const listFiles: API.PaginatedOperationMethod<
  ListFilesRequest,
  ListFilesResponse,
  ListFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFilesRequest,
  output: ListFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface GetCreativesRequest {
  /** Creative ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/creatives/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetCreativesRequest>;

export type GetCreativesResponse = Creative;
export const GetCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type GetCreativesError = DefaultErrors | NotFound | Forbidden;

/** Gets one creative by ID. */
export const getCreatives: API.OperationMethod<
  GetCreativesRequest,
  GetCreativesResponse,
  GetCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCreativesRequest,
  output: GetCreativesResponse,
  errors: [NotFound, Forbidden],
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
    path: "userprofiles/{+profileId}/creatives",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertCreativesRequest>;

export type InsertCreativesResponse = Creative;
export const InsertCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type InsertCreativesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new creative. */
export const insertCreatives: API.OperationMethod<
  InsertCreativesRequest,
  InsertCreativesResponse,
  InsertCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCreativesRequest,
  output: InsertCreativesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/creatives",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchCreativesRequest>;

export type PatchCreativesResponse = Creative;
export const PatchCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type PatchCreativesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative. This method supports patch semantics. */
export const patchCreatives: API.OperationMethod<
  PatchCreativesRequest,
  PatchCreativesResponse,
  PatchCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCreativesRequest,
  output: PatchCreativesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/creatives",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateCreativesRequest>;

export type UpdateCreativesResponse = Creative;
export const UpdateCreativesResponse = /*@__PURE__*/ /*#__PURE__*/ Creative;

export type UpdateCreativesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing creative. */
export const updateCreatives: API.OperationMethod<
  UpdateCreativesRequest,
  UpdateCreativesResponse,
  UpdateCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCreativesRequest,
  output: UpdateCreativesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCreativesRequest {
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only in-stream video creatives with these companion IDs. */
  companionCreativeIds?: string[];
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
  /** Select only creatives with these creative field IDs. */
  creativeFieldIds?: string[];
  /** Select only creatives with these size IDs. */
  sizeIds?: string[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative". */
  searchString?: string;
  /** Select only creatives corresponding to this Studio creative ID. */
  studioCreativeId?: string;
  /** Select only active creatives. Leave blank to select active and inactive creatives. */
  active?: boolean;
  /** Select only archived creatives. Leave blank to select archived and unarchived creatives. */
  archived?: boolean;
  /** Select only creatives with these rendering IDs. */
  renderingIds?: string[];
  /** Select only creatives with this advertiser ID. */
  advertiserId?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only creatives with these IDs. */
  ids?: string[];
}

export const ListCreativesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  companionCreativeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("companionCreativeIds"),
  ),
  types: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("types"),
  ),
  campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
  creativeFieldIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("creativeFieldIds"),
  ),
  sizeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("sizeIds"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  studioCreativeId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("studioCreativeId"),
  ),
  active: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("active")),
  archived: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("archived")),
  renderingIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("renderingIds"),
  ),
  advertiserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("advertiserId"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/creatives" }),
  svc,
) as unknown as Schema.Schema<ListCreativesRequest>;

export type ListCreativesResponse = CreativesListResponse;
export const ListCreativesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreativesListResponse;

export type ListCreativesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of creatives, possibly filtered. This method supports paging. */
export const listCreatives: API.PaginatedOperationMethod<
  ListCreativesRequest,
  ListCreativesResponse,
  ListCreativesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCreativesRequest,
  output: ListCreativesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListLanguagesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListLanguagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/languages" }),
  svc,
) as unknown as Schema.Schema<ListLanguagesRequest>;

export type ListLanguagesResponse = LanguagesListResponse;
export const ListLanguagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LanguagesListResponse;

export type ListLanguagesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of languages. */
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

export interface GetVideoFormatsRequest {
  /** Video format ID. */
  id: number;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetVideoFormatsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.Number.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "userprofiles/{+profileId}/videoFormats/{+id}",
  }),
  svc,
) as unknown as Schema.Schema<GetVideoFormatsRequest>;

export type GetVideoFormatsResponse = VideoFormat;
export const GetVideoFormatsResponse = /*@__PURE__*/ /*#__PURE__*/ VideoFormat;

export type GetVideoFormatsError = DefaultErrors | NotFound | Forbidden;

/** Gets one video format by ID. */
export const getVideoFormats: API.OperationMethod<
  GetVideoFormatsRequest,
  GetVideoFormatsResponse,
  GetVideoFormatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVideoFormatsRequest,
  output: GetVideoFormatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVideoFormatsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
}

export const ListVideoFormatsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({ method: "GET", path: "userprofiles/{+profileId}/videoFormats" }),
    svc,
  ) as unknown as Schema.Schema<ListVideoFormatsRequest>;

export type ListVideoFormatsResponse = VideoFormatsListResponse;
export const ListVideoFormatsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VideoFormatsListResponse;

export type ListVideoFormatsError = DefaultErrors | NotFound | Forbidden;

/** Lists available video formats. */
export const listVideoFormats: API.OperationMethod<
  ListVideoFormatsRequest,
  ListVideoFormatsResponse,
  ListVideoFormatsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVideoFormatsRequest,
  output: ListVideoFormatsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetAccountActiveAdSummariesRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Account ID. */
  summaryAccountId: string;
}

export const GetAccountActiveAdSummariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    summaryAccountId: Schema.String.pipe(T.HttpPath("summaryAccountId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/accountActiveAdSummaries/{+summaryAccountId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetAccountActiveAdSummariesRequest>;

export type GetAccountActiveAdSummariesResponse = AccountActiveAdSummary;
export const GetAccountActiveAdSummariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountActiveAdSummary;

export type GetAccountActiveAdSummariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the account's active ad summary by account ID. */
export const getAccountActiveAdSummaries: API.OperationMethod<
  GetAccountActiveAdSummariesRequest,
  GetAccountActiveAdSummariesResponse,
  GetAccountActiveAdSummariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAccountActiveAdSummariesRequest,
  output: GetAccountActiveAdSummariesResponse,
  errors: [NotFound, Forbidden],
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
    path: "userprofiles/{+profileId}/eventTags",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateEventTagsRequest>;

export type UpdateEventTagsResponse = EventTag;
export const UpdateEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type UpdateEventTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing event tag. */
export const updateEventTags: API.OperationMethod<
  UpdateEventTagsRequest,
  UpdateEventTagsResponse,
  UpdateEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventTagsRequest,
  output: UpdateEventTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEventTagsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags. */
  definitionsOnly?: boolean;
  /** Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. */
  eventTagTypes?:
    | "IMPRESSION_IMAGE_EVENT_TAG"
    | "IMPRESSION_JAVASCRIPT_EVENT_TAG"
    | "CLICK_THROUGH_EVENT_TAG"
    | (string & {})[];
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only event tags with these IDs. */
  ids?: string[];
  /** Select only event tags that belong to this ad. */
  adId?: string;
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag". */
  searchString?: string;
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only event tags that belong to this advertiser. */
  advertiserId?: string;
  /** Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well. */
  enabled?: boolean;
  /** Select only event tags that belong to this campaign. */
  campaignId?: string;
}

export const ListEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  definitionsOnly: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("definitionsOnly"),
  ),
  eventTagTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("eventTagTypes"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  adId: Schema.optional(Schema.String).pipe(T.HttpQuery("adId")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  advertiserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("advertiserId"),
  ),
  enabled: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("enabled")),
  campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/eventTags" }),
  svc,
) as unknown as Schema.Schema<ListEventTagsRequest>;

export type ListEventTagsResponse = EventTagsListResponse;
export const ListEventTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventTagsListResponse;

export type ListEventTagsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of event tags, possibly filtered. */
export const listEventTags: API.OperationMethod<
  ListEventTagsRequest,
  ListEventTagsResponse,
  ListEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEventTagsRequest,
  output: ListEventTagsResponse,
  errors: [NotFound, Forbidden],
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
  T.Http({
    method: "DELETE",
    path: "userprofiles/{+profileId}/eventTags/{+id}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteEventTagsRequest>;

export interface DeleteEventTagsResponse {}
export const DeleteEventTagsResponse: Schema.Schema<DeleteEventTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteEventTagsResponse>;

export type DeleteEventTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing event tag. */
export const deleteEventTags: API.OperationMethod<
  DeleteEventTagsRequest,
  DeleteEventTagsResponse,
  DeleteEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteEventTagsRequest,
  output: DeleteEventTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    path: "userprofiles/{+profileId}/eventTags",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertEventTagsRequest>;

export type InsertEventTagsResponse = EventTag;
export const InsertEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type InsertEventTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new event tag. */
export const insertEventTags: API.OperationMethod<
  InsertEventTagsRequest,
  InsertEventTagsResponse,
  InsertEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertEventTagsRequest,
  output: InsertEventTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchEventTagsRequest {
  /** Required. EventTag ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: EventTag;
}

export const PatchEventTagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpQuery("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  body: Schema.optional(EventTag).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{+profileId}/eventTags",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchEventTagsRequest>;

export type PatchEventTagsResponse = EventTag;
export const PatchEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type PatchEventTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing event tag. This method supports patch semantics. */
export const patchEventTags: API.OperationMethod<
  PatchEventTagsRequest,
  PatchEventTagsResponse,
  PatchEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchEventTagsRequest,
  output: PatchEventTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/eventTags/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetEventTagsRequest>;

export type GetEventTagsResponse = EventTag;
export const GetEventTagsResponse = /*@__PURE__*/ /*#__PURE__*/ EventTag;

export type GetEventTagsError = DefaultErrors | NotFound | Forbidden;

/** Gets one event tag by ID. */
export const getEventTags: API.OperationMethod<
  GetEventTagsRequest,
  GetEventTagsResponse,
  GetEventTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventTagsRequest,
  output: GetEventTagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchPlacementsRequest {
  /** Required. Placement ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Request body */
  body?: Placement;
}

export const PatchPlacementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.HttpQuery("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    body: Schema.optional(Placement).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "userprofiles/{+profileId}/placements",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchPlacementsRequest>;

export type PatchPlacementsResponse = Placement;
export const PatchPlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type PatchPlacementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing placement. This method supports patch semantics. */
export const patchPlacements: API.OperationMethod<
  PatchPlacementsRequest,
  PatchPlacementsResponse,
  PatchPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPlacementsRequest,
  output: PatchPlacementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GeneratetagsPlacementsRequest {
  /** User profile ID associated with this request. */
  profileId: string;
  /** Generate tags for these placements. */
  placementIds?: string[];
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
  /** Generate placements belonging to this campaign. This is a required field. */
  campaignId?: string;
}

export const GeneratetagsPlacementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    placementIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("placementIds"),
    ),
    tagFormats: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("tagFormats"),
    ),
    campaignId: Schema.optional(Schema.String).pipe(T.HttpQuery("campaignId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "userprofiles/{+profileId}/placements/generatetags",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratetagsPlacementsRequest>;

export type GeneratetagsPlacementsResponse = PlacementsGenerateTagsResponse;
export const GeneratetagsPlacementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementsGenerateTagsResponse;

export type GeneratetagsPlacementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates tags for a placement. */
export const generatetagsPlacements: API.OperationMethod<
  GeneratetagsPlacementsRequest,
  GeneratetagsPlacementsResponse,
  GeneratetagsPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratetagsPlacementsRequest,
  output: GeneratetagsPlacementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/placements",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertPlacementsRequest>;

export type InsertPlacementsResponse = Placement;
export const InsertPlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type InsertPlacementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new placement. */
export const insertPlacements: API.OperationMethod<
  InsertPlacementsRequest,
  InsertPlacementsResponse,
  InsertPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlacementsRequest,
  output: InsertPlacementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPlacementsRequest {
  /** Placement ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const GetPlacementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/placements/{+id}" }),
  svc,
) as unknown as Schema.Schema<GetPlacementsRequest>;

export type GetPlacementsResponse = Placement;
export const GetPlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type GetPlacementsError = DefaultErrors | NotFound | Forbidden;

/** Gets one placement by ID. */
export const getPlacements: API.OperationMethod<
  GetPlacementsRequest,
  GetPlacementsResponse,
  GetPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPlacementsRequest,
  output: GetPlacementsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListPlacementsRequest {
  /** Select only placements that belong to these advertisers. */
  advertiserIds?: string[];
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Select only placements that are associated with these directory sites. */
  directorySiteIds?: string[];
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" . */
  searchString?: string;
  /** Select only placements that are associated with these sizes. */
  sizeIds?: string[];
  /** Select only placements with these active statuses. */
  activeStatus?:
    | "PLACEMENT_STATUS_UNKNOWN"
    | "PLACEMENT_STATUS_ACTIVE"
    | "PLACEMENT_STATUS_INACTIVE"
    | "PLACEMENT_STATUS_ARCHIVED"
    | "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
    | (string & {})[];
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only placements that are associated with these placement strategies. */
  placementStrategyIds?: string[];
  /** Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd". */
  minEndDate?: string;
  /** Select only placements that belong to these placement groups. */
  groupIds?: string[];
  /** Select only placements that belong to these campaigns. */
  campaignIds?: string[];
  /** Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd". */
  maxEndDate?: string;
  /** Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd". */
  minStartDate?: string;
  /** Select only placements that are associated with these content categories. */
  contentCategoryIds?: string[];
  /** Select only placements with these pricing types. */
  pricingTypes?:
    | "PRICING_TYPE_CPM"
    | "PRICING_TYPE_CPC"
    | "PRICING_TYPE_CPA"
    | "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    | "PRICING_TYPE_FLAT_RATE_CLICKS"
    | "PRICING_TYPE_CPM_ACTIVEVIEW"
    | (string & {})[];
  /** Select only placements with these IDs. */
  ids?: string[];
  /** Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd". */
  maxStartDate?: string;
  /** User profile ID associated with this request. */
  profileId: string;
  /** Select only placements that are associated with these sites. */
  siteIds?: string[];
  /** Select only placements with this payment source. */
  paymentSource?:
    | "PLACEMENT_AGENCY_PAID"
    | "PLACEMENT_PUBLISHER_PAID"
    | (string & {});
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
  /** Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. */
  compatibilities?:
    | "DISPLAY"
    | "DISPLAY_INTERSTITIAL"
    | "APP"
    | "APP_INTERSTITIAL"
    | "IN_STREAM_VIDEO"
    | "IN_STREAM_AUDIO"
    | (string & {})[];
}

export const ListPlacementsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  advertiserIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("advertiserIds"),
  ),
  sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
  directorySiteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("directorySiteIds"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  searchString: Schema.optional(Schema.String).pipe(
    T.HttpQuery("searchString"),
  ),
  sizeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("sizeIds"),
  ),
  activeStatus: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("activeStatus"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  placementStrategyIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("placementStrategyIds"),
  ),
  minEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("minEndDate")),
  groupIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("groupIds"),
  ),
  campaignIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("campaignIds"),
  ),
  maxEndDate: Schema.optional(Schema.String).pipe(T.HttpQuery("maxEndDate")),
  minStartDate: Schema.optional(Schema.String).pipe(
    T.HttpQuery("minStartDate"),
  ),
  contentCategoryIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("contentCategoryIds"),
  ),
  pricingTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("pricingTypes"),
  ),
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  maxStartDate: Schema.optional(Schema.String).pipe(
    T.HttpQuery("maxStartDate"),
  ),
  profileId: Schema.String.pipe(T.HttpPath("profileId")),
  siteIds: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("siteIds"),
  ),
  paymentSource: Schema.optional(Schema.String).pipe(
    T.HttpQuery("paymentSource"),
  ),
  sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  compatibilities: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("compatibilities"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "userprofiles/{+profileId}/placements" }),
  svc,
) as unknown as Schema.Schema<ListPlacementsRequest>;

export type ListPlacementsResponse = PlacementsListResponse;
export const ListPlacementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlacementsListResponse;

export type ListPlacementsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of placements, possibly filtered. This method supports paging. */
export const listPlacements: API.PaginatedOperationMethod<
  ListPlacementsRequest,
  ListPlacementsResponse,
  ListPlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlacementsRequest,
  output: ListPlacementsResponse,
  errors: [NotFound, Forbidden],
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
      path: "userprofiles/{+profileId}/placements",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdatePlacementsRequest>;

export type UpdatePlacementsResponse = Placement;
export const UpdatePlacementsResponse = /*@__PURE__*/ /*#__PURE__*/ Placement;

export type UpdatePlacementsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing placement. */
export const updatePlacements: API.OperationMethod<
  UpdatePlacementsRequest,
  UpdatePlacementsResponse,
  UpdatePlacementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlacementsRequest,
  output: UpdatePlacementsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightActivities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateFloodlightActivitiesRequest>;

export type UpdateFloodlightActivitiesResponse = FloodlightActivity;
export const UpdateFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type UpdateFloodlightActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing floodlight activity. */
export const updateFloodlightActivities: API.OperationMethod<
  UpdateFloodlightActivitiesRequest,
  UpdateFloodlightActivitiesResponse,
  UpdateFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateFloodlightActivitiesRequest,
  output: UpdateFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFloodlightActivitiesRequest {
  /** Field by which to sort the list. */
  sortField?: "ID" | "NAME" | (string & {});
  /** Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity". */
  searchString?: string;
  /** Select only floodlight activities with the specified floodlight activity group name. */
  floodlightActivityGroupName?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Select only floodlight activities with the specified floodlight activity group tag string. */
  floodlightActivityGroupTagString?: string;
  /** Select only floodlight activities with the specified tag string. */
  tagString?: string;
  /** Value of the nextPageToken from the previous result page. */
  pageToken?: string;
  /** Select only floodlight activities with the specified floodlight activity group type. */
  floodlightActivityGroupType?: "COUNTER" | "SALE" | (string & {});
  /** Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. */
  floodlightConfigurationId?: string;
  /** Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. */
  advertiserId?: string;
  /** Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. */
  ids?: string[];
  /** Select only floodlight activities with the specified floodlight activity group IDs. */
  floodlightActivityGroupIds?: string[];
  /** User profile ID associated with this request. */
  profileId: string;
  /** Order of sorted results. */
  sortOrder?: "ASCENDING" | "DESCENDING" | (string & {});
}

export const ListFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sortField: Schema.optional(Schema.String).pipe(T.HttpQuery("sortField")),
    searchString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchString"),
    ),
    floodlightActivityGroupName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityGroupName"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    floodlightActivityGroupTagString: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityGroupTagString"),
    ),
    tagString: Schema.optional(Schema.String).pipe(T.HttpQuery("tagString")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    floodlightActivityGroupType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightActivityGroupType"),
    ),
    floodlightConfigurationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("floodlightConfigurationId"),
    ),
    advertiserId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("advertiserId"),
    ),
    ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
    floodlightActivityGroupIds: Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("floodlightActivityGroupIds")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
    sortOrder: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOrder")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "userprofiles/{+profileId}/floodlightActivities",
    }),
    svc,
  ) as unknown as Schema.Schema<ListFloodlightActivitiesRequest>;

export type ListFloodlightActivitiesResponse = FloodlightActivitiesListResponse;
export const ListFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivitiesListResponse;

export type ListFloodlightActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of floodlight activities, possibly filtered. This method supports paging. */
export const listFloodlightActivities: API.PaginatedOperationMethod<
  ListFloodlightActivitiesRequest,
  ListFloodlightActivitiesResponse,
  ListFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFloodlightActivitiesRequest,
  output: ListFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteFloodlightActivitiesRequest {
  /** Floodlight activity ID. */
  id: string;
  /** User profile ID associated with this request. */
  profileId: string;
}

export const DeleteFloodlightActivitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    profileId: Schema.String.pipe(T.HttpPath("profileId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "userprofiles/{+profileId}/floodlightActivities/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteFloodlightActivitiesRequest>;

export interface DeleteFloodlightActivitiesResponse {}
export const DeleteFloodlightActivitiesResponse: Schema.Schema<DeleteFloodlightActivitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteFloodlightActivitiesResponse>;

export type DeleteFloodlightActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing floodlight activity. */
export const deleteFloodlightActivities: API.OperationMethod<
  DeleteFloodlightActivitiesRequest,
  DeleteFloodlightActivitiesResponse,
  DeleteFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFloodlightActivitiesRequest,
  output: DeleteFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightActivities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertFloodlightActivitiesRequest>;

export type InsertFloodlightActivitiesResponse = FloodlightActivity;
export const InsertFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type InsertFloodlightActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new floodlight activity. */
export const insertFloodlightActivities: API.OperationMethod<
  InsertFloodlightActivitiesRequest,
  InsertFloodlightActivitiesResponse,
  InsertFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertFloodlightActivitiesRequest,
  output: InsertFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightActivities",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PatchFloodlightActivitiesRequest>;

export type PatchFloodlightActivitiesResponse = FloodlightActivity;
export const PatchFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type PatchFloodlightActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing floodlight activity. This method supports patch semantics. */
export const patchFloodlightActivities: API.OperationMethod<
  PatchFloodlightActivitiesRequest,
  PatchFloodlightActivitiesResponse,
  PatchFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFloodlightActivitiesRequest,
  output: PatchFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightActivities/generatetag",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratetagFloodlightActivitiesRequest>;

export type GeneratetagFloodlightActivitiesResponse =
  FloodlightActivitiesGenerateTagResponse;
export const GeneratetagFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivitiesGenerateTagResponse;

export type GeneratetagFloodlightActivitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a tag for a floodlight activity. */
export const generatetagFloodlightActivities: API.OperationMethod<
  GeneratetagFloodlightActivitiesRequest,
  GeneratetagFloodlightActivitiesResponse,
  GeneratetagFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratetagFloodlightActivitiesRequest,
  output: GeneratetagFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "userprofiles/{+profileId}/floodlightActivities/{+id}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetFloodlightActivitiesRequest>;

export type GetFloodlightActivitiesResponse = FloodlightActivity;
export const GetFloodlightActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FloodlightActivity;

export type GetFloodlightActivitiesError = DefaultErrors | NotFound | Forbidden;

/** Gets one floodlight activity by ID. */
export const getFloodlightActivities: API.OperationMethod<
  GetFloodlightActivitiesRequest,
  GetFloodlightActivitiesResponse,
  GetFloodlightActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFloodlightActivitiesRequest,
  output: GetFloodlightActivitiesResponse,
  errors: [NotFound, Forbidden],
}));
