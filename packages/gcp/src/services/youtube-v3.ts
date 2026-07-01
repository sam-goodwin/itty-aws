// ==========================================================================
// YouTube Data API v3 (youtube v3)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "youtube",
  version: "v3",
  rootUrl: "https://youtube.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface VideoAbuseReportSecondaryReason {
  /** The localized label for this abuse report secondary reason. */
  label?: string;
  /** The ID of this abuse report secondary reason. */
  id?: string;
}

export const VideoAbuseReportSecondaryReason: Schema.Codec<VideoAbuseReportSecondaryReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoAbuseReportSecondaryReason" });

export interface VideoAbuseReportReasonSnippet {
  /** The localized label belonging to this abuse report reason. */
  label?: string;
  /** The secondary reasons associated with this reason, if any are available. (There might be 0 or more.) */
  secondaryReasons?: ReadonlyArray<VideoAbuseReportSecondaryReason>;
}

export const VideoAbuseReportReasonSnippet: Schema.Codec<VideoAbuseReportReasonSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    secondaryReasons: Schema.optional(
      Schema.Array(VideoAbuseReportSecondaryReason),
    ),
  }).annotate({ identifier: "VideoAbuseReportReasonSnippet" });

export interface Thumbnail {
  /** (Optional) Height of the thumbnail image. */
  height?: number;
  /** The thumbnail image's URL. */
  url?: string;
  /** (Optional) Width of the thumbnail image. */
  width?: number;
}

export const Thumbnail: Schema.Codec<Thumbnail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    url: Schema.optional(Schema.String),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Thumbnail" });

export interface ThumbnailDetails {
  /** The standard quality image for this resource. */
  standard?: Thumbnail;
  /** The default image for this resource. */
  default?: Thumbnail;
  /** The medium quality image for this resource. */
  medium?: Thumbnail;
  /** The high quality image for this resource. */
  high?: Thumbnail;
  /** The maximum resolution quality image for this resource. */
  maxres?: Thumbnail;
}

export const ThumbnailDetails: Schema.Codec<ThumbnailDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(Thumbnail),
    default: Schema.optional(Thumbnail),
    medium: Schema.optional(Thumbnail),
    high: Schema.optional(Thumbnail),
    maxres: Schema.optional(Thumbnail),
  }).annotate({ identifier: "ThumbnailDetails" });

export interface PlaylistStatus {
  /** The playlist's privacy status. */
  privacyStatus?: "public" | "unlisted" | "private" | (string & {});
  /** The playlist's podcast status. */
  podcastStatus?: "enabled" | "disabled" | (string & {});
}

export const PlaylistStatus: Schema.Codec<PlaylistStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privacyStatus: Schema.optional(Schema.String),
    podcastStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistStatus" });

export interface PlaylistImageSnippet {
  /** The image height. */
  height?: number;
  /** The Playlist ID of the playlist this image is associated with. */
  playlistId?: string;
  /** The image type. */
  type?: "hero" | (string & {});
  /** The image width. */
  width?: number;
}

export const PlaylistImageSnippet: Schema.Codec<PlaylistImageSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    playlistId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PlaylistImageSnippet" });

export interface VideoPaidProductPlacementDetails {
  /** This boolean represents whether the video contains Paid Product Placement, Studio equivalent: https://screenshot.googleplex.com/4Me79DE6AfT2ktp.png */
  hasPaidProductPlacement?: boolean;
}

export const VideoPaidProductPlacementDetails: Schema.Codec<VideoPaidProductPlacementDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasPaidProductPlacement: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VideoPaidProductPlacementDetails" });

export interface VideoSuggestionsTagSuggestion {
  /** The keyword tag suggested for the video. */
  tag?: string;
  /** A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword. */
  categoryRestricts?: ReadonlyArray<string>;
}

export const VideoSuggestionsTagSuggestion: Schema.Codec<VideoSuggestionsTagSuggestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tag: Schema.optional(Schema.String),
    categoryRestricts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VideoSuggestionsTagSuggestion" });

export interface CommentSnippetAuthorChannelId {
  /** The id of the author's YouTube channel. */
  value?: string;
}

export const CommentSnippetAuthorChannelId: Schema.Codec<CommentSnippetAuthorChannelId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentSnippetAuthorChannelId" });

export interface CommentSnippet {
  /** The date and time when the comment was originally published. */
  publishedAt?: string;
  authorChannelId?: CommentSnippetAuthorChannelId;
  /** Whether the current viewer can rate this comment. */
  canRate?: boolean;
  /** The ID of the video the comment refers to, if any. */
  videoId?: string;
  /** The comment's moderation status. Will not be set if the comments were requested through the id filter. */
  moderationStatus?:
    | "published"
    | "heldForReview"
    | "likelySpam"
    | "rejected"
    | (string & {});
  /** The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author. */
  textOriginal?: string;
  /** The URL for the avatar of the user who posted the comment. */
  authorProfileImageUrl?: string;
  /** The total number of likes this comment has received. */
  likeCount?: number;
  /** The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future. */
  viewerRating?: "none" | "like" | "dislike" | (string & {});
  /** The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video or post comment it's the video/post's channel. */
  channelId?: string;
  /** The name of the user who posted the comment. */
  authorDisplayName?: string;
  /** The date and time when the comment was last updated. */
  updatedAt?: string;
  /** Link to the author's YouTube channel, if any. */
  authorChannelUrl?: string;
  /** The ID of the post the comment refers to, if any. */
  postId?: string;
  /** The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc. */
  textDisplay?: string;
  /** The unique id of the top-level comment, only set for replies. */
  parentId?: string;
}

export const CommentSnippet: Schema.Codec<CommentSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishedAt: Schema.optional(Schema.String),
    authorChannelId: Schema.optional(CommentSnippetAuthorChannelId),
    canRate: Schema.optional(Schema.Boolean),
    videoId: Schema.optional(Schema.String),
    moderationStatus: Schema.optional(Schema.String),
    textOriginal: Schema.optional(Schema.String),
    authorProfileImageUrl: Schema.optional(Schema.String),
    likeCount: Schema.optional(Schema.Number),
    viewerRating: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    authorDisplayName: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
    authorChannelUrl: Schema.optional(Schema.String),
    postId: Schema.optional(Schema.String),
    textDisplay: Schema.optional(Schema.String),
    parentId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentSnippet" });

export interface Comment {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#comment". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The snippet object contains basic details about the comment. */
  snippet?: CommentSnippet;
  /** The ID that YouTube uses to uniquely identify the comment. */
  id?: string;
}

export const Comment: Schema.Codec<Comment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    snippet: Schema.optional(CommentSnippet),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Comment" });

export interface TokenPagination {}

export const TokenPagination: Schema.Codec<TokenPagination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TokenPagination",
  });

export interface PageInfo {
  /** The total number of results in the result set. */
  totalResults?: number;
  /** The number of results included in the API response. */
  resultsPerPage?: number;
}

export const PageInfo: Schema.Codec<PageInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalResults: Schema.optional(Schema.Number),
    resultsPerPage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PageInfo" });

export interface CuepointSchedule {
  /** If set, automatic cuepoint insertion is paused until this timestamp ("No Ad Zone"). The value is specified in ISO 8601 format. */
  pauseAdsUntil?: string;
  /** Interval frequency in seconds that api uses to insert cuepoints automatically. */
  repeatIntervalSecs?: number;
  /** This field is semantically required. If it is set false or not set, other fields in this message will be ignored. */
  enabled?: boolean;
  /** The strategy to use when scheduling cuepoints. */
  scheduleStrategy?:
    | "scheduleStrategyUnspecified"
    | "concurrent"
    | "nonConcurrent"
    | (string & {});
}

export const CuepointSchedule: Schema.Codec<CuepointSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pauseAdsUntil: Schema.optional(Schema.String),
    repeatIntervalSecs: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    scheduleStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "CuepointSchedule" });

export interface LiveBroadcastMonetizationDetails {
  cuepointSchedule?: CuepointSchedule;
}

export const LiveBroadcastMonetizationDetails: Schema.Codec<LiveBroadcastMonetizationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cuepointSchedule: Schema.optional(CuepointSchedule),
  }).annotate({ identifier: "LiveBroadcastMonetizationDetails" });

export interface LiveBroadcastSnippet {
  /** The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. */
  actualEndTime?: string;
  /** The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. */
  actualStartTime?: string;
  /** The date and time that the broadcast is scheduled to end. */
  scheduledEndTime?: string;
  /** Indicates whether this broadcast is the default broadcast. Internal only. */
  isDefaultBroadcast?: boolean;
  /** The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource. */
  description?: string;
  /** The date and time that the broadcast was added to YouTube's live broadcast schedule. */
  publishedAt?: string;
  /** A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** The date and time that the broadcast is scheduled to start. */
  scheduledStartTime?: string;
  /** The id of the live chat for this broadcast. */
  liveChatId?: string;
  /** The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast. */
  channelId?: string;
  /** The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource. */
  title?: string;
}

export const LiveBroadcastSnippet: Schema.Codec<LiveBroadcastSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actualEndTime: Schema.optional(Schema.String),
    actualStartTime: Schema.optional(Schema.String),
    scheduledEndTime: Schema.optional(Schema.String),
    isDefaultBroadcast: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    publishedAt: Schema.optional(Schema.String),
    thumbnails: Schema.optional(ThumbnailDetails),
    scheduledStartTime: Schema.optional(Schema.String),
    liveChatId: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveBroadcastSnippet" });

export interface LiveBroadcastStatistics {
  /** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
  concurrentViewers?: string;
}

export const LiveBroadcastStatistics: Schema.Codec<LiveBroadcastStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    concurrentViewers: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveBroadcastStatistics" });

export interface LiveBroadcastStatus {
  /** Priority of the live broadcast event (internal state). */
  liveBroadcastPriority?:
    | "liveBroadcastPriorityUnspecified"
    | "low"
    | "normal"
    | "high"
    | (string & {});
  /** The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource. */
  privacyStatus?: "public" | "unlisted" | "private" | (string & {});
  /** This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work. */
  selfDeclaredMadeForKids?: boolean;
  /** The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method. */
  lifeCycleStatus?:
    | "lifeCycleStatusUnspecified"
    | "created"
    | "ready"
    | "testing"
    | "live"
    | "complete"
    | "revoked"
    | "testStarting"
    | "liveStarting"
    | (string & {});
  /** The broadcast's recording status. */
  recordingStatus?:
    | "liveBroadcastRecordingStatusUnspecified"
    | "notRecording"
    | "recording"
    | "recorded"
    | (string & {});
  /** Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only. */
  madeForKids?: boolean;
}

export const LiveBroadcastStatus: Schema.Codec<LiveBroadcastStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liveBroadcastPriority: Schema.optional(Schema.String),
    privacyStatus: Schema.optional(Schema.String),
    selfDeclaredMadeForKids: Schema.optional(Schema.Boolean),
    lifeCycleStatus: Schema.optional(Schema.String),
    recordingStatus: Schema.optional(Schema.String),
    madeForKids: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LiveBroadcastStatus" });

export interface MonitorStreamInfo {
  /** If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay. */
  broadcastStreamDelayMs?: number;
  /** HTML code that embeds a player that plays the monitor stream. */
  embedHtml?: string;
  /** This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state. */
  enableMonitorStream?: boolean;
}

export const MonitorStreamInfo: Schema.Codec<MonitorStreamInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    broadcastStreamDelayMs: Schema.optional(Schema.Number),
    embedHtml: Schema.optional(Schema.String),
    enableMonitorStream: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MonitorStreamInfo" });

export interface LiveBroadcastContentDetails {
  /** This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. */
  enableAutoStop?: boolean;
  /** This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers. */
  startWithSlate?: boolean;
  /** If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted. */
  latencyPreference?:
    | "latencyPreferenceUnspecified"
    | "normal"
    | "low"
    | "ultraLow"
    | (string & {});
  /** This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST. */
  enableClosedCaptions?: boolean;
  /** The 3D stereo layout of this broadcast. This defaults to mono. */
  stereoLayout?:
    | "stereoLayoutUnspecified"
    | "mono"
    | "leftRight"
    | "topBottom"
    | (string & {});
  /** The date and time that the live stream referenced by boundStreamId was last updated. */
  boundStreamLastUpdateTimeMs?: string;
  /** The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags. */
  mesh?: string;
  /** The projection format of this broadcast. This defaults to rectangular. */
  projection?:
    | "projectionUnspecified"
    | "rectangular"
    | "360"
    | "mesh"
    | (string & {});
  /** This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends. */
  enableDvr?: boolean;
  /** This value uniquely identifies the live stream bound to the broadcast. */
  boundStreamId?: string;
  /** Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback. */
  recordFromStart?: boolean;
  closedCaptionsType?:
    | "closedCaptionsTypeUnspecified"
    | "closedCaptionsDisabled"
    | "closedCaptionsHttpPost"
    | "closedCaptionsEmbedded"
    | (string & {});
  /** This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. */
  enableAutoStart?: boolean;
  /** The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly. */
  monitorStream?: MonitorStreamInfo;
  /** This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video. */
  enableEmbed?: boolean;
  /** Indicates whether this broadcast has low latency enabled. */
  enableLowLatency?: boolean;
  /** This setting indicates whether YouTube should enable content encryption for the broadcast. */
  enableContentEncryption?: boolean;
}

export const LiveBroadcastContentDetails: Schema.Codec<LiveBroadcastContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAutoStop: Schema.optional(Schema.Boolean),
    startWithSlate: Schema.optional(Schema.Boolean),
    latencyPreference: Schema.optional(Schema.String),
    enableClosedCaptions: Schema.optional(Schema.Boolean),
    stereoLayout: Schema.optional(Schema.String),
    boundStreamLastUpdateTimeMs: Schema.optional(Schema.String),
    mesh: Schema.optional(Schema.String),
    projection: Schema.optional(Schema.String),
    enableDvr: Schema.optional(Schema.Boolean),
    boundStreamId: Schema.optional(Schema.String),
    recordFromStart: Schema.optional(Schema.Boolean),
    closedCaptionsType: Schema.optional(Schema.String),
    enableAutoStart: Schema.optional(Schema.Boolean),
    monitorStream: Schema.optional(MonitorStreamInfo),
    enableEmbed: Schema.optional(Schema.Boolean),
    enableLowLatency: Schema.optional(Schema.Boolean),
    enableContentEncryption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LiveBroadcastContentDetails" });

export interface LiveBroadcast {
  /** The monetizationDetails object contains information about the event's monetization details. */
  monetizationDetails?: LiveBroadcastMonetizationDetails;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast". */
  kind?: string;
  /** The snippet object contains basic details about the event, including its title, description, start time, and end time. */
  snippet?: LiveBroadcastSnippet;
  /** The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live. */
  statistics?: LiveBroadcastStatistics;
  /** Etag of this resource. */
  etag?: string;
  /** The status object contains information about the event's status. */
  status?: LiveBroadcastStatus;
  /** The ID that YouTube assigns to uniquely identify the broadcast. */
  id?: string;
  /** The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded. */
  contentDetails?: LiveBroadcastContentDetails;
}

export const LiveBroadcast: Schema.Codec<LiveBroadcast> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monetizationDetails: Schema.optional(LiveBroadcastMonetizationDetails),
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(LiveBroadcastSnippet),
    statistics: Schema.optional(LiveBroadcastStatistics),
    etag: Schema.optional(Schema.String),
    status: Schema.optional(LiveBroadcastStatus),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(LiveBroadcastContentDetails),
  }).annotate({ identifier: "LiveBroadcast" });

export interface LiveBroadcastListResponse {
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse". */
  kind?: string;
  /** A list of broadcasts that match the request criteria. */
  items?: ReadonlyArray<LiveBroadcast>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
}

export const LiveBroadcastListResponse: Schema.Codec<LiveBroadcastListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(LiveBroadcast)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveBroadcastListResponse" });

export interface AccessPolicy {
  /** The value of allowed indicates whether the access to the policy is allowed or denied by default. */
  allowed?: boolean;
  /** A list of region codes that identify countries where the default policy do not apply. */
  exception?: ReadonlyArray<string>;
}

export const AccessPolicy: Schema.Codec<AccessPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowed: Schema.optional(Schema.Boolean),
    exception: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AccessPolicy" });

export interface VideoMonetizationDetails {
  /** The value of access indicates whether the video can be monetized or not. */
  access?: AccessPolicy;
}

export const VideoMonetizationDetails: Schema.Codec<VideoMonetizationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access: Schema.optional(AccessPolicy),
  }).annotate({ identifier: "VideoMonetizationDetails" });

export interface Entity {
  id?: string;
  typeId?: string;
  url?: string;
}

export const Entity: Schema.Codec<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    typeId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entity" });

export interface ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails {
  /** The current merchant affiliate program status. */
  status?:
    | "merchantAffiliateProgramStatusUnspecified"
    | "merchantAffiliateProgramStatusEligible"
    | "merchantAffiliateProgramStatusActive"
    | "merchantAffiliateProgramStatusPaused"
    | (string & {});
}

export const ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails: Schema.Codec<ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails",
  });

export interface ChannelToStoreLinkDetailsBillingDetails {
  /** The current billing profile status. */
  billingStatus?:
    | "billingStatusUnspecified"
    | "billingStatusPending"
    | "billingStatusActive"
    | "billingStatusInactive"
    | (string & {});
}

export const ChannelToStoreLinkDetailsBillingDetails: Schema.Codec<ChannelToStoreLinkDetailsBillingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelToStoreLinkDetailsBillingDetails" });

export interface ChannelToStoreLinkDetails {
  /** Name of the store. */
  storeName?: string;
  /** Landing page of the store. */
  storeUrl?: string;
  /** Google Merchant Center id of the store. */
  merchantId?: string;
  /** Information specific to merchant affiliate program (read-only). */
  merchantAffiliateProgramDetails?: ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails;
  /** Information specific to billing (read-only). */
  billingDetails?: ChannelToStoreLinkDetailsBillingDetails;
}

export const ChannelToStoreLinkDetails: Schema.Codec<ChannelToStoreLinkDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storeName: Schema.optional(Schema.String),
    storeUrl: Schema.optional(Schema.String),
    merchantId: Schema.optional(Schema.String),
    merchantAffiliateProgramDetails: Schema.optional(
      ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails,
    ),
    billingDetails: Schema.optional(ChannelToStoreLinkDetailsBillingDetails),
  }).annotate({ identifier: "ChannelToStoreLinkDetails" });

export interface ChannelToAffiliateProgramLinkDetails {
  /** Required. Google Merchant Center ID of the partner. */
  merchantId?: string;
  /** Optional. Timestamp when the affiliate program status was last updated. */
  statusUpdateTime?: string;
  /** Required. Affiliate program status. */
  programStatus?:
    | "affiliateProgramStatusUnspecified"
    | "active"
    | "inactive"
    | (string & {});
  /** Optional. Reason for the last update of the affiliate program status. */
  statusUpdateReason?: string;
}

export const ChannelToAffiliateProgramLinkDetails: Schema.Codec<ChannelToAffiliateProgramLinkDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    merchantId: Schema.optional(Schema.String),
    statusUpdateTime: Schema.optional(Schema.String),
    programStatus: Schema.optional(Schema.String),
    statusUpdateReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelToAffiliateProgramLinkDetails" });

export interface ThirdPartyLinkSnippet {
  /** Type of the link named after the entities that are being linked. */
  type?:
    | "linkUnspecified"
    | "channelToStoreLink"
    | "channelToAffiliateProgramLink"
    | (string & {});
  /** Information specific to a link between a channel and a store on a merchandising platform. */
  channelToStoreLink?: ChannelToStoreLinkDetails;
  /** Information specific to a link between a channel and an affiliate program of a partner. */
  channelToAffiliateProgramLink?: ChannelToAffiliateProgramLinkDetails;
}

export const ThirdPartyLinkSnippet: Schema.Codec<ThirdPartyLinkSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    channelToStoreLink: Schema.optional(ChannelToStoreLinkDetails),
    channelToAffiliateProgramLink: Schema.optional(
      ChannelToAffiliateProgramLinkDetails,
    ),
  }).annotate({ identifier: "ThirdPartyLinkSnippet" });

export interface ThirdPartyLinkStatus {
  linkStatus?: "unknown" | "failed" | "pending" | "linked" | (string & {});
}

export const ThirdPartyLinkStatus: Schema.Codec<ThirdPartyLinkStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThirdPartyLinkStatus" });

export interface ThirdPartyLink {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink". */
  kind?: string;
  /** The snippet object contains basic details about the third- party account link. */
  snippet?: ThirdPartyLinkSnippet;
  /** Etag of this resource */
  etag?: string;
  /** The status object contains information about the status of the link. */
  status?: ThirdPartyLinkStatus;
  /** The linking_token identifies a YouTube account and channel with which the third party account is linked. */
  linkingToken?: string;
}

export const ThirdPartyLink: Schema.Codec<ThirdPartyLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(ThirdPartyLinkSnippet),
    etag: Schema.optional(Schema.String),
    status: Schema.optional(ThirdPartyLinkStatus),
    linkingToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThirdPartyLink" });

export interface ChannelProfileDetails {
  /** The YouTube channel ID. */
  channelId?: string;
  /** The channel's display name. */
  displayName?: string;
  /** The channels's avatar URL. */
  profileImageUrl?: string;
  /** The channel's URL. */
  channelUrl?: string;
}

export const ChannelProfileDetails: Schema.Codec<ChannelProfileDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    profileImageUrl: Schema.optional(Schema.String),
    channelUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelProfileDetails" });

export interface SuperStickerMetadata {
  /** Specifies the localization language in which the alt text is returned. */
  altTextLanguage?: string;
  /** Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker. */
  stickerId?: string;
  /** Internationalized alt text that describes the sticker image and any animation associated with it. */
  altText?: string;
}

export const SuperStickerMetadata: Schema.Codec<SuperStickerMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    altTextLanguage: Schema.optional(Schema.String),
    stickerId: Schema.optional(Schema.String),
    altText: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuperStickerMetadata" });

export interface SuperChatEventSnippet {
  /** Channel id where the event occurred. */
  channelId?: string;
  /** The currency in which the purchase was made. ISO 4217. */
  currency?: string;
  /** The text contents of the comment left by the user. */
  commentText?: string;
  /** The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000. */
  amountMicros?: string;
  /** The tier for the paid message, which is based on the amount of money spent to purchase the message. */
  messageType?: number;
  /** True if this event is a Super Sticker event. */
  isSuperStickerEvent?: boolean;
  /** Details about the supporter. */
  supporterDetails?: ChannelProfileDetails;
  /** If this event is a Super Sticker event, this field will contain metadata about the Super Sticker. */
  superStickerMetadata?: SuperStickerMetadata;
  /** A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language. */
  displayString?: string;
  /** The date and time when the event occurred. */
  createdAt?: string;
}

export const SuperChatEventSnippet: Schema.Codec<SuperChatEventSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelId: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    commentText: Schema.optional(Schema.String),
    amountMicros: Schema.optional(Schema.String),
    messageType: Schema.optional(Schema.Number),
    isSuperStickerEvent: Schema.optional(Schema.Boolean),
    supporterDetails: Schema.optional(ChannelProfileDetails),
    superStickerMetadata: Schema.optional(SuperStickerMetadata),
    displayString: Schema.optional(Schema.String),
    createdAt: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuperChatEventSnippet" });

export interface SuperChatEvent {
  /** The ID that YouTube assigns to uniquely identify the Super Chat event. */
  id?: string;
  /** The `snippet` object contains basic details about the Super Chat event. */
  snippet?: SuperChatEventSnippet;
  /** Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`. */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const SuperChatEvent: Schema.Codec<SuperChatEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    snippet: Schema.optional(SuperChatEventSnippet),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuperChatEvent" });

export interface ResourceId {
  /** The type of the API resource. */
  kind?: string;
  /** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video. */
  videoId?: string;
  /** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist. */
  playlistId?: string;
  /** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel. */
  channelId?: string;
}

export const ResourceId: Schema.Codec<ResourceId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    videoId: Schema.optional(Schema.String),
    playlistId: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceId" });

export interface ActivityContentDetailsBulletin {
  /** The resourceId object contains information that identifies the resource associated with a bulletin post. @mutable youtube.activities.insert */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsBulletin: Schema.Codec<ActivityContentDetailsBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsBulletin" });

export interface PlaylistImage {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImages". */
  kind?: string;
  /** Identifies this resource (playlist id and image type). */
  id?: string;
  snippet?: PlaylistImageSnippet;
}

export const PlaylistImage: Schema.Codec<PlaylistImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    snippet: Schema.optional(PlaylistImageSnippet),
  }).annotate({ identifier: "PlaylistImage" });

export interface PlaylistItemStatus {
  /** This resource's privacy status. */
  privacyStatus?: "public" | "unlisted" | "private" | (string & {});
}

export const PlaylistItemStatus: Schema.Codec<PlaylistItemStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privacyStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistItemStatus" });

export interface PlaylistItemContentDetails {
  /** The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0. */
  startAt?: string;
  /** The date and time that the video was published to YouTube. */
  videoPublishedAt?: string;
  /** The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video. */
  endAt?: string;
  /** A user-generated note for this item. */
  note?: string;
  /** The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request. */
  videoId?: string;
}

export const PlaylistItemContentDetails: Schema.Codec<PlaylistItemContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startAt: Schema.optional(Schema.String),
    videoPublishedAt: Schema.optional(Schema.String),
    endAt: Schema.optional(Schema.String),
    note: Schema.optional(Schema.String),
    videoId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistItemContentDetails" });

export interface PlaylistItemSnippet {
  /** Channel title for the channel that the playlist item belongs to. */
  channelTitle?: string;
  /** Channel id for the channel this video belongs to. */
  videoOwnerChannelId?: string;
  /** The item's description. */
  description?: string;
  /** The date and time that the item was added to the playlist. */
  publishedAt?: string;
  /** A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in. */
  playlistId?: string;
  /** Channel title for the channel this video belongs to. */
  videoOwnerChannelTitle?: string;
  /** The ID that YouTube uses to uniquely identify the user that added the item to the playlist. */
  channelId?: string;
  /** The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth. */
  position?: number;
  /** The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item. */
  resourceId?: ResourceId;
  /** The item's title. */
  title?: string;
}

export const PlaylistItemSnippet: Schema.Codec<PlaylistItemSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelTitle: Schema.optional(Schema.String),
    videoOwnerChannelId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    publishedAt: Schema.optional(Schema.String),
    thumbnails: Schema.optional(ThumbnailDetails),
    playlistId: Schema.optional(Schema.String),
    videoOwnerChannelTitle: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    position: Schema.optional(Schema.Number),
    resourceId: Schema.optional(ResourceId),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistItemSnippet" });

export interface PlaylistItem {
  /** Etag of this resource. */
  etag?: string;
  /** The status object contains information about the playlist item's privacy status. */
  status?: PlaylistItemStatus;
  /** The ID that YouTube uses to uniquely identify the playlist item. */
  id?: string;
  /** The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video. */
  contentDetails?: PlaylistItemContentDetails;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem". */
  kind?: string;
  /** The snippet object contains basic details about the playlist item, such as its title and position in the playlist. */
  snippet?: PlaylistItemSnippet;
}

export const PlaylistItem: Schema.Codec<PlaylistItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    status: Schema.optional(PlaylistItemStatus),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(PlaylistItemContentDetails),
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(PlaylistItemSnippet),
  }).annotate({ identifier: "PlaylistItem" });

export interface PlaylistItemListResponse {
  /** A list of playlist items that match the request criteria. */
  items?: ReadonlyArray<PlaylistItem>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  etag?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
}

export const PlaylistItemListResponse: Schema.Codec<PlaylistItemListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(PlaylistItem)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistItemListResponse" });

export interface PlaylistLocalization {
  /** The localized strings for playlist's description. */
  description?: string;
  /** The localized strings for playlist's title. */
  title?: string;
}

export const PlaylistLocalization: Schema.Codec<PlaylistLocalization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistLocalization" });

export interface PlaylistSnippet {
  /** The playlist's description. */
  description?: string;
  /** The date and time that the playlist was created. */
  publishedAt?: string;
  /** Localized title and description, read-only. */
  localized?: PlaylistLocalization;
  /** The channel title of the channel that the video belongs to. */
  channelTitle?: string;
  /** Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted. */
  thumbnailVideoId?: string;
  /** The ID that YouTube uses to uniquely identify the channel that published the playlist. */
  channelId?: string;
  /** The language of the playlist's default title and description. */
  defaultLanguage?: string;
  /** The playlist's title. */
  title?: string;
  /** A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** Keyword tags associated with the playlist. */
  tags?: ReadonlyArray<string>;
}

export const PlaylistSnippet: Schema.Codec<PlaylistSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    publishedAt: Schema.optional(Schema.String),
    localized: Schema.optional(PlaylistLocalization),
    channelTitle: Schema.optional(Schema.String),
    thumbnailVideoId: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    defaultLanguage: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    thumbnails: Schema.optional(ThumbnailDetails),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PlaylistSnippet" });

export interface PlaylistContentDetails {
  /** The number of videos in the playlist. */
  itemCount?: number;
}

export const PlaylistContentDetails: Schema.Codec<PlaylistContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    itemCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PlaylistContentDetails" });

export interface PlaylistPlayer {
  /** An <iframe> tag that embeds a player that will play the playlist. */
  embedHtml?: string;
}

export const PlaylistPlayer: Schema.Codec<PlaylistPlayer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    embedHtml: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistPlayer" });

export interface Playlist {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#playlist". */
  kind?: string;
  /** The snippet object contains basic details about the playlist, such as its title and description. */
  snippet?: PlaylistSnippet;
  /** Etag of this resource. */
  etag?: string;
  /** The status object contains status information for the playlist. */
  status?: PlaylistStatus;
  /** Localizations for different languages */
  localizations?: Record<string, PlaylistLocalization>;
  /** The ID that YouTube uses to uniquely identify the playlist. */
  id?: string;
  /** The contentDetails object contains information like video count. */
  contentDetails?: PlaylistContentDetails;
  /** The player object contains information that you would use to play the playlist in an embedded player. */
  player?: PlaylistPlayer;
}

export const Playlist: Schema.Codec<Playlist> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(PlaylistSnippet),
    etag: Schema.optional(Schema.String),
    status: Schema.optional(PlaylistStatus),
    localizations: Schema.optional(
      Schema.Record(Schema.String, PlaylistLocalization),
    ),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(PlaylistContentDetails),
    player: Schema.optional(PlaylistPlayer),
  }).annotate({ identifier: "Playlist" });

export interface LiveChatGiftMembershipReceivedDetails {
  /** The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'. */
  associatedMembershipGiftingMessageId?: string;
  /** The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message. */
  gifterChannelId?: string;
  /** The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
  memberLevelName?: string;
}

export const LiveChatGiftMembershipReceivedDetails: Schema.Codec<LiveChatGiftMembershipReceivedDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    associatedMembershipGiftingMessageId: Schema.optional(Schema.String),
    gifterChannelId: Schema.optional(Schema.String),
    memberLevelName: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatGiftMembershipReceivedDetails" });

export interface InvideoPosition {
  /** Defines the position type. */
  type?: "corner" | (string & {});
  /** Describes in which corner of the video the visual widget will appear. */
  cornerPosition?:
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | (string & {});
}

export const InvideoPosition: Schema.Codec<InvideoPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    cornerPosition: Schema.optional(Schema.String),
  }).annotate({ identifier: "InvideoPosition" });

export interface ChannelConversionPing {
  /** The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping. */
  conversionUrl?: string;
  /** Defines the context of the ping. */
  context?: "subscribe" | "unsubscribe" | "cview" | (string & {});
}

export const ChannelConversionPing: Schema.Codec<ChannelConversionPing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionUrl: Schema.optional(Schema.String),
    context: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelConversionPing" });

export interface ChannelConversionPings {
  /** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
  pings?: ReadonlyArray<ChannelConversionPing>;
}

export const ChannelConversionPings: Schema.Codec<ChannelConversionPings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pings: Schema.optional(Schema.Array(ChannelConversionPing)),
  }).annotate({ identifier: "ChannelConversionPings" });

export interface I18nLanguageSnippet {
  /** The human-readable name of the language in the language itself. */
  name?: string;
  /** A short BCP-47 code that uniquely identifies a language. */
  hl?: string;
}

export const I18nLanguageSnippet: Schema.Codec<I18nLanguageSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    hl: Schema.optional(Schema.String),
  }).annotate({ identifier: "I18nLanguageSnippet" });

export interface I18nLanguage {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The snippet object contains basic details about the i18n language, such as language code and human-readable name. */
  snippet?: I18nLanguageSnippet;
  /** The ID that YouTube uses to uniquely identify the i18n language. */
  id?: string;
}

export const I18nLanguage: Schema.Codec<I18nLanguage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    snippet: Schema.optional(I18nLanguageSnippet),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "I18nLanguage" });

export interface LiveChatMessageAuthorDetails {
  /** The channels's avatar URL. */
  profileImageUrl?: string;
  /** Whether the author is a sponsor of the live chat. */
  isChatSponsor?: boolean;
  /** The YouTube channel ID. */
  channelId?: string;
  /** Whether the author's identity has been verified by YouTube. */
  isVerified?: boolean;
  /** Whether the author is the owner of the live chat. */
  isChatOwner?: boolean;
  /** The channel's display name. */
  displayName?: string;
  /** The channel's URL. */
  channelUrl?: string;
  /** Whether the author is a moderator of the live chat. */
  isChatModerator?: boolean;
}

export const LiveChatMessageAuthorDetails: Schema.Codec<LiveChatMessageAuthorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileImageUrl: Schema.optional(Schema.String),
    isChatSponsor: Schema.optional(Schema.Boolean),
    channelId: Schema.optional(Schema.String),
    isVerified: Schema.optional(Schema.Boolean),
    isChatOwner: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    channelUrl: Schema.optional(Schema.String),
    isChatModerator: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LiveChatMessageAuthorDetails" });

export interface LiveChatMemberMilestoneChatDetails {
  /** The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
  memberLevelName?: string;
  /** The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member. */
  userComment?: string;
  /** The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users. */
  memberMonth?: number;
}

export const LiveChatMemberMilestoneChatDetails: Schema.Codec<LiveChatMemberMilestoneChatDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberLevelName: Schema.optional(Schema.String),
    userComment: Schema.optional(Schema.String),
    memberMonth: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LiveChatMemberMilestoneChatDetails" });

export interface LiveChatMessageDeletedDetails {
  deletedMessageId?: string;
}

export const LiveChatMessageDeletedDetails: Schema.Codec<LiveChatMessageDeletedDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deletedMessageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatMessageDeletedDetails" });

export interface LiveChatGiftDetails {
  /** The number of times the gift has been sent in a row. */
  comboCount?: number;
  /** The URL of the gift image. */
  giftUrl?: string;
  /** The name of the gift. */
  giftName?: string;
  /** The value of the gift in jewels. */
  jewelsAmount?: number;
  /** Whether the gift involves a visual effect. */
  hasVisualEffect?: boolean;
  /** The duration of the gift. */
  giftDuration?: string;
  /** The alternative text to be used for accessibility. */
  altText?: string;
  /** The BCP-47 language code of the gift. */
  language?: string;
}

export const LiveChatGiftDetails: Schema.Codec<LiveChatGiftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comboCount: Schema.optional(Schema.Number),
    giftUrl: Schema.optional(Schema.String),
    giftName: Schema.optional(Schema.String),
    jewelsAmount: Schema.optional(Schema.Number),
    hasVisualEffect: Schema.optional(Schema.Boolean),
    giftDuration: Schema.optional(Schema.String),
    altText: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatGiftDetails" });

export interface LiveChatPollDetailsPollMetadataPollOption {
  optionText?: string;
  tally?: string;
}

export const LiveChatPollDetailsPollMetadataPollOption: Schema.Codec<LiveChatPollDetailsPollMetadataPollOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    optionText: Schema.optional(Schema.String),
    tally: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatPollDetailsPollMetadataPollOption" });

export interface LiveChatPollDetailsPollMetadata {
  /** The options will be returned in the order that is displayed in 1P */
  options?: ReadonlyArray<LiveChatPollDetailsPollMetadataPollOption>;
  questionText?: string;
}

export const LiveChatPollDetailsPollMetadata: Schema.Codec<LiveChatPollDetailsPollMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(
      Schema.Array(LiveChatPollDetailsPollMetadataPollOption),
    ),
    questionText: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatPollDetailsPollMetadata" });

export interface LiveChatPollDetails {
  metadata?: LiveChatPollDetailsPollMetadata;
  status?: "unknown" | "active" | "closed" | (string & {});
}

export const LiveChatPollDetails: Schema.Codec<LiveChatPollDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(LiveChatPollDetailsPollMetadata),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatPollDetails" });

export interface LiveChatTextMessageDetails {
  /** The user's message. */
  messageText?: string;
}

export const LiveChatTextMessageDetails: Schema.Codec<LiveChatTextMessageDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageText: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatTextMessageDetails" });

export interface LiveChatSuperStickerDetails {
  /** The currency in which the purchase was made. */
  currency?: string;
  /** Information about the Super Sticker. */
  superStickerMetadata?: SuperStickerMetadata;
  /** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
  amountMicros?: string;
  /** A rendered string that displays the fund amount and currency to the user. */
  amountDisplayString?: string;
  /** The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. */
  tier?: number;
}

export const LiveChatSuperStickerDetails: Schema.Codec<LiveChatSuperStickerDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    superStickerMetadata: Schema.optional(SuperStickerMetadata),
    amountMicros: Schema.optional(Schema.String),
    amountDisplayString: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LiveChatSuperStickerDetails" });

export interface LiveChatUserBannedMessageDetails {
  /** The details of the user that was banned. */
  bannedUserDetails?: ChannelProfileDetails;
  /** The type of ban. */
  banType?: "permanent" | "temporary" | (string & {});
  /** The duration of the ban. This property is only present if the banType is temporary. */
  banDurationSeconds?: string;
}

export const LiveChatUserBannedMessageDetails: Schema.Codec<LiveChatUserBannedMessageDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bannedUserDetails: Schema.optional(ChannelProfileDetails),
    banType: Schema.optional(Schema.String),
    banDurationSeconds: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatUserBannedMessageDetails" });

export interface LiveChatSuperChatDetails {
  /** The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. */
  tier?: number;
  /** A rendered string that displays the fund amount and currency to the user. */
  amountDisplayString?: string;
  /** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
  amountMicros?: string;
  /** The currency in which the purchase was made. */
  currency?: string;
  /** The comment added by the user to this Super Chat event. */
  userComment?: string;
}

export const LiveChatSuperChatDetails: Schema.Codec<LiveChatSuperChatDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tier: Schema.optional(Schema.Number),
    amountDisplayString: Schema.optional(Schema.String),
    amountMicros: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    userComment: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatSuperChatDetails" });

export interface LiveChatNewSponsorDetails {
  /** The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
  memberLevelName?: string;
  /** If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false. */
  isUpgrade?: boolean;
}

export const LiveChatNewSponsorDetails: Schema.Codec<LiveChatNewSponsorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberLevelName: Schema.optional(Schema.String),
    isUpgrade: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LiveChatNewSponsorDetails" });

export interface LiveChatFanFundingEventDetails {
  /** The amount of the fund. */
  amountMicros?: string;
  /** The comment added by the user to this fan funding event. */
  userComment?: string;
  /** The currency in which the fund was made. */
  currency?: string;
  /** A rendered string that displays the fund amount and currency to the user. */
  amountDisplayString?: string;
}

export const LiveChatFanFundingEventDetails: Schema.Codec<LiveChatFanFundingEventDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amountMicros: Schema.optional(Schema.String),
    userComment: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    amountDisplayString: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatFanFundingEventDetails" });

export interface LiveChatMembershipGiftingDetails {
  /** The number of gift memberships purchased by the user. */
  giftMembershipsCount?: number;
  /** The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
  giftMembershipsLevelName?: string;
}

export const LiveChatMembershipGiftingDetails: Schema.Codec<LiveChatMembershipGiftingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    giftMembershipsCount: Schema.optional(Schema.Number),
    giftMembershipsLevelName: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatMembershipGiftingDetails" });

export interface LiveChatMessageRetractedDetails {
  retractedMessageId?: string;
}

export const LiveChatMessageRetractedDetails: Schema.Codec<LiveChatMessageRetractedDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retractedMessageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatMessageRetractedDetails" });

export interface LiveChatMessageSnippet {
  /** The date and time when the message was orignally published. */
  publishedAt?: string;
  /** Details about the Member Milestone Chat event, this is only set if the type is 'memberMilestoneChatEvent'. */
  memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;
  /** The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action. Unused. messageRetractedEvent - the author that retracted their message. Unused. userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase pollEvent - the user that created the poll */
  authorChannelId?: string;
  messageDeletedDetails?: LiveChatMessageDeletedDetails;
  /** Whether the message has display content that should be displayed to users. */
  hasDisplayContent?: boolean;
  /** Details about the gift event, this is only set if the type is 'giftEvent'. */
  giftDetails?: LiveChatGiftDetails;
  /** Details about the poll event, this is only set if the type is 'pollEvent'. */
  pollDetails?: LiveChatPollDetails;
  /** Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent. */
  displayMessage?: string;
  /** Details about the text message, this is only set if the type is 'textMessageEvent'. */
  textMessageDetails?: LiveChatTextMessageDetails;
  /** Details about the Super Sticker event, this is only set if the type is 'superStickerEvent'. */
  superStickerDetails?: LiveChatSuperStickerDetails;
  userBannedDetails?: LiveChatUserBannedMessageDetails;
  /** Details about the Super Chat event, this is only set if the type is 'superChatEvent'. */
  superChatDetails?: LiveChatSuperChatDetails;
  /** Details about the Gift Membership Received event, this is only set if the type is 'giftMembershipReceivedEvent'. */
  giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;
  /** Details about the New Member Announcement event, this is only set if the type is 'newSponsorEvent'. Please note that "member" is the new term for "sponsor". */
  newSponsorDetails?: LiveChatNewSponsorDetails;
  liveChatId?: string;
  /** The type of message, this will always be present, it determines the contents of the message as well as which fields will be present. */
  type?:
    | "invalidType"
    | "textMessageEvent"
    | "tombstone"
    | "fanFundingEvent"
    | "chatEndedEvent"
    | "sponsorOnlyModeStartedEvent"
    | "sponsorOnlyModeEndedEvent"
    | "newSponsorEvent"
    | "memberMilestoneChatEvent"
    | "membershipGiftingEvent"
    | "giftMembershipReceivedEvent"
    | "messageDeletedEvent"
    | "messageRetractedEvent"
    | "userBannedEvent"
    | "superChatEvent"
    | "superStickerEvent"
    | "pollEvent"
    | "giftEvent"
    | (string & {});
  /** Details about the funding event, this is only set if the type is 'fanFundingEvent'. */
  fanFundingEventDetails?: LiveChatFanFundingEventDetails;
  /** Details about the Membership Gifting event, this is only set if the type is 'membershipGiftingEvent'. */
  membershipGiftingDetails?: LiveChatMembershipGiftingDetails;
  messageRetractedDetails?: LiveChatMessageRetractedDetails;
}

export const LiveChatMessageSnippet: Schema.Codec<LiveChatMessageSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishedAt: Schema.optional(Schema.String),
    memberMilestoneChatDetails: Schema.optional(
      LiveChatMemberMilestoneChatDetails,
    ),
    authorChannelId: Schema.optional(Schema.String),
    messageDeletedDetails: Schema.optional(LiveChatMessageDeletedDetails),
    hasDisplayContent: Schema.optional(Schema.Boolean),
    giftDetails: Schema.optional(LiveChatGiftDetails),
    pollDetails: Schema.optional(LiveChatPollDetails),
    displayMessage: Schema.optional(Schema.String),
    textMessageDetails: Schema.optional(LiveChatTextMessageDetails),
    superStickerDetails: Schema.optional(LiveChatSuperStickerDetails),
    userBannedDetails: Schema.optional(LiveChatUserBannedMessageDetails),
    superChatDetails: Schema.optional(LiveChatSuperChatDetails),
    giftMembershipReceivedDetails: Schema.optional(
      LiveChatGiftMembershipReceivedDetails,
    ),
    newSponsorDetails: Schema.optional(LiveChatNewSponsorDetails),
    liveChatId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    fanFundingEventDetails: Schema.optional(LiveChatFanFundingEventDetails),
    membershipGiftingDetails: Schema.optional(LiveChatMembershipGiftingDetails),
    messageRetractedDetails: Schema.optional(LiveChatMessageRetractedDetails),
  }).annotate({ identifier: "LiveChatMessageSnippet" });

export interface LiveChatMessage {
  /** The authorDetails object contains basic details about the user that posted this message. */
  authorDetails?: LiveChatMessageAuthorDetails;
  /** Etag of this resource. */
  etag?: string;
  /** The ID that YouTube assigns to uniquely identify the message. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage". */
  kind?: string;
  /** The snippet object contains basic details about the message. */
  snippet?: LiveChatMessageSnippet;
}

export const LiveChatMessage: Schema.Codec<LiveChatMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorDetails: Schema.optional(LiveChatMessageAuthorDetails),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(LiveChatMessageSnippet),
  }).annotate({ identifier: "LiveChatMessage" });

export interface ChannelSectionContentDetails {
  /** The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed. */
  playlists?: ReadonlyArray<string>;
  /** The channel ids for type multiple_channels. */
  channels?: ReadonlyArray<string>;
}

export const ChannelSectionContentDetails: Schema.Codec<ChannelSectionContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playlists: Schema.optional(Schema.Array(Schema.String)),
    channels: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChannelSectionContentDetails" });

export interface ChannelAuditDetails {
  /** Whether or not the channel has any unresolved claims. */
  contentIdClaimsGoodStanding?: boolean;
  /** Whether or not the channel respects the community guidelines. */
  communityGuidelinesGoodStanding?: boolean;
  /** Whether or not the channel has any copyright strikes. */
  copyrightStrikesGoodStanding?: boolean;
}

export const ChannelAuditDetails: Schema.Codec<ChannelAuditDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentIdClaimsGoodStanding: Schema.optional(Schema.Boolean),
    communityGuidelinesGoodStanding: Schema.optional(Schema.Boolean),
    copyrightStrikesGoodStanding: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ChannelAuditDetails" });

export interface ChannelLocalization {
  /** The localized strings for channel's description. */
  description?: string;
  /** The localized strings for channel's title. */
  title?: string;
}

export const ChannelLocalization: Schema.Codec<ChannelLocalization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelLocalization" });

export interface ChannelSnippet {
  /** A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. When displaying thumbnails in your application, make sure that your code uses the image URLs exactly as they are returned in API responses. For example, your application should not use the http domain instead of the https domain in a URL returned in an API response. Beginning in July 2018, channel thumbnail URLs will only be available in the https domain, which is how the URLs appear in API responses. After that time, you might see broken images in your application if it tries to load YouTube images from the http domain. Thumbnail images might be empty for newly created channels and might take up to one day to populate. */
  thumbnails?: ThumbnailDetails;
  /** The custom url of the channel. */
  customUrl?: string;
  /** The description of the channel. */
  description?: string;
  /** The language of the channel's default title and description. */
  defaultLanguage?: string;
  /** The country of the channel. */
  country?: string;
  /** The channel's title. */
  title?: string;
  /** The date and time that the channel was created. */
  publishedAt?: string;
  /** Localized title and description, read-only. */
  localized?: ChannelLocalization;
}

export const ChannelSnippet: Schema.Codec<ChannelSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnails: Schema.optional(ThumbnailDetails),
    customUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    defaultLanguage: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    publishedAt: Schema.optional(Schema.String),
    localized: Schema.optional(ChannelLocalization),
  }).annotate({ identifier: "ChannelSnippet" });

export interface ChannelStatus {
  /** The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information. */
  longUploadsStatus?:
    | "longUploadsUnspecified"
    | "allowed"
    | "eligible"
    | "disallowed"
    | (string & {});
  madeForKids?: boolean;
  /** If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity. */
  isLinked?: boolean;
  /** Privacy status of the channel. */
  privacyStatus?: "public" | "unlisted" | "private" | (string & {});
  selfDeclaredMadeForKids?: boolean;
  /** Whether the channel is considered ypp monetization enabled. See go/yppornot for more details. */
  isChannelMonetizationEnabled?: boolean;
}

export const ChannelStatus: Schema.Codec<ChannelStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longUploadsStatus: Schema.optional(Schema.String),
    madeForKids: Schema.optional(Schema.Boolean),
    isLinked: Schema.optional(Schema.Boolean),
    privacyStatus: Schema.optional(Schema.String),
    selfDeclaredMadeForKids: Schema.optional(Schema.Boolean),
    isChannelMonetizationEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ChannelStatus" });

export interface ChannelContentOwnerDetails {
  /** The ID of the content owner linked to the channel. */
  contentOwner?: string;
  /** The date and time when the channel was linked to the content owner. */
  timeLinked?: string;
}

export const ChannelContentOwnerDetails: Schema.Codec<ChannelContentOwnerDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentOwner: Schema.optional(Schema.String),
    timeLinked: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelContentOwnerDetails" });

export interface ChannelContentDetails {
  relatedPlaylists?: {
    watchLater?: string;
    likes?: string;
    watchHistory?: string;
    favorites?: string;
    uploads?: string;
  };
}

export const ChannelContentDetails: Schema.Codec<ChannelContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedPlaylists: Schema.optional(
      Schema.Struct({
        watchLater: Schema.optional(Schema.String),
        likes: Schema.optional(Schema.String),
        watchHistory: Schema.optional(Schema.String),
        favorites: Schema.optional(Schema.String),
        uploads: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "ChannelContentDetails" });

export interface ChannelStatistics {
  /** The number of times the channel has been viewed. */
  viewCount?: string;
  /** The number of comments for the channel. */
  commentCount?: string;
  /** The number of subscribers that the channel has. */
  subscriberCount?: string;
  /** Whether or not the number of subscribers is shown for this user. */
  hiddenSubscriberCount?: boolean;
  /** The number of videos uploaded to the channel. */
  videoCount?: string;
}

export const ChannelStatistics: Schema.Codec<ChannelStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewCount: Schema.optional(Schema.String),
    commentCount: Schema.optional(Schema.String),
    subscriberCount: Schema.optional(Schema.String),
    hiddenSubscriberCount: Schema.optional(Schema.Boolean),
    videoCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelStatistics" });

export interface ChannelTopicDetails {
  /** A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API. */
  topicIds?: ReadonlyArray<string>;
  /** A list of Wikipedia URLs that describe the channel's content. */
  topicCategories?: ReadonlyArray<string>;
}

export const ChannelTopicDetails: Schema.Codec<ChannelTopicDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicIds: Schema.optional(Schema.Array(Schema.String)),
    topicCategories: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChannelTopicDetails" });

export interface WatchSettings {
  /** An ID that uniquely identifies a playlist that displays next to the video player. */
  featuredPlaylistId?: string;
  /** The background color for the video watch page's branded area. */
  textColor?: string;
  /** The text color for the video watch page's branded area. */
  backgroundColor?: string;
}

export const WatchSettings: Schema.Codec<WatchSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featuredPlaylistId: Schema.optional(Schema.String),
    textColor: Schema.optional(Schema.String),
    backgroundColor: Schema.optional(Schema.String),
  }).annotate({ identifier: "WatchSettings" });

export interface LanguageTag {
  value?: string;
}

export const LanguageTag: Schema.Codec<LanguageTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguageTag" });

export interface LocalizedString {
  value?: string;
  language?: string;
}

export const LocalizedString: Schema.Codec<LocalizedString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedString" });

export interface LocalizedProperty {
  /** The language of the default property. */
  defaultLanguage?: LanguageTag;
  localized?: ReadonlyArray<LocalizedString>;
  default?: string;
}

export const LocalizedProperty: Schema.Codec<LocalizedProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultLanguage: Schema.optional(LanguageTag),
    localized: Schema.optional(Schema.Array(LocalizedString)),
    default: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedProperty" });

export interface ImageSettings {
  /** The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page. */
  largeBrandedBannerImageUrl?: LocalizedProperty;
  /** Banner image. Mobile size high resolution (1280x360). */
  bannerMobileHdImageUrl?: string;
  /** Banner image. Tablet size low resolution (1138x188). */
  bannerTabletLowImageUrl?: string;
  /** This is generated when a ChannelBanner.Insert request has succeeded for the given channel. */
  bannerExternalUrl?: string;
  /** The image map script for the small banner image. */
  smallBrandedBannerImageImapScript?: LocalizedProperty;
  /** Banner image. Desktop size (1060x175). */
  bannerImageUrl?: string;
  /** The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k. */
  backgroundImageUrl?: LocalizedProperty;
  /** Banner image. Mobile size medium/high resolution (960x263). */
  bannerMobileMediumHdImageUrl?: string;
  /** Banner image. TV size high resolution (1920x1080). */
  bannerTvHighImageUrl?: string;
  /** Banner image. Tablet size high resolution (2276x377). */
  bannerTabletHdImageUrl?: string;
  /** Banner image. Mobile size high resolution (1440x395). */
  bannerMobileExtraHdImageUrl?: string;
  /** Banner image. Tablet size (1707x283). */
  bannerTabletImageUrl?: string;
  watchIconImageUrl?: string;
  /** Banner image. Tablet size extra high resolution (2560x424). */
  bannerTabletExtraHdImageUrl?: string;
  /** The image map script for the large banner image. */
  largeBrandedBannerImageImapScript?: LocalizedProperty;
  /** Banner image. Mobile size (640x175). */
  bannerMobileImageUrl?: string;
  /** Banner image. TV size medium resolution (1280x720). */
  bannerTvMediumImageUrl?: string;
  /** The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages. */
  trackingImageUrl?: string;
  /** Banner image. TV size extra high resolution (2120x1192). */
  bannerTvImageUrl?: string;
  /** Banner image. TV size low resolution (854x480). */
  bannerTvLowImageUrl?: string;
  /** The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page. The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels. */
  smallBrandedBannerImageUrl?: LocalizedProperty;
  /** Banner image. Mobile size low resolution (320x88). */
  bannerMobileLowImageUrl?: string;
}

export const ImageSettings: Schema.Codec<ImageSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    largeBrandedBannerImageUrl: Schema.optional(LocalizedProperty),
    bannerMobileHdImageUrl: Schema.optional(Schema.String),
    bannerTabletLowImageUrl: Schema.optional(Schema.String),
    bannerExternalUrl: Schema.optional(Schema.String),
    smallBrandedBannerImageImapScript: Schema.optional(LocalizedProperty),
    bannerImageUrl: Schema.optional(Schema.String),
    backgroundImageUrl: Schema.optional(LocalizedProperty),
    bannerMobileMediumHdImageUrl: Schema.optional(Schema.String),
    bannerTvHighImageUrl: Schema.optional(Schema.String),
    bannerTabletHdImageUrl: Schema.optional(Schema.String),
    bannerMobileExtraHdImageUrl: Schema.optional(Schema.String),
    bannerTabletImageUrl: Schema.optional(Schema.String),
    watchIconImageUrl: Schema.optional(Schema.String),
    bannerTabletExtraHdImageUrl: Schema.optional(Schema.String),
    largeBrandedBannerImageImapScript: Schema.optional(LocalizedProperty),
    bannerMobileImageUrl: Schema.optional(Schema.String),
    bannerTvMediumImageUrl: Schema.optional(Schema.String),
    trackingImageUrl: Schema.optional(Schema.String),
    bannerTvImageUrl: Schema.optional(Schema.String),
    bannerTvLowImageUrl: Schema.optional(Schema.String),
    smallBrandedBannerImageUrl: Schema.optional(LocalizedProperty),
    bannerMobileLowImageUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageSettings" });

export interface PropertyValue {
  /** A property. */
  property?: string;
  /** The property's value. */
  value?: string;
}

export const PropertyValue: Schema.Codec<PropertyValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyValue" });

export interface ChannelSettings {
  /** Whether the tab to browse the videos should be displayed. */
  showBrowseView?: boolean;
  /** Title for the featured channels tab. */
  featuredChannelsTitle?: string;
  /** Specifies the channel description. */
  description?: string;
  /** The country of the channel. */
  country?: string;
  /** Which content tab users should see when viewing the channel. */
  defaultTab?: string;
  /** A prominent color that can be rendered on this channel page. */
  profileColor?: string;
  /** Lists keywords associated with the channel, comma-separated. */
  keywords?: string;
  /** Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible. */
  moderateComments?: boolean;
  /** The trailer of the channel, for users that are not subscribers. */
  unsubscribedTrailer?: string;
  defaultLanguage?: string;
  /** Specifies the channel title. */
  title?: string;
  /** The ID for a Google Analytics account to track and measure traffic to the channels. */
  trackingAnalyticsAccountId?: string;
  /** The list of featured channels. */
  featuredChannelsUrls?: ReadonlyArray<string>;
  /** Whether related channels should be proposed. */
  showRelatedChannels?: boolean;
}

export const ChannelSettings: Schema.Codec<ChannelSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showBrowseView: Schema.optional(Schema.Boolean),
    featuredChannelsTitle: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    defaultTab: Schema.optional(Schema.String),
    profileColor: Schema.optional(Schema.String),
    keywords: Schema.optional(Schema.String),
    moderateComments: Schema.optional(Schema.Boolean),
    unsubscribedTrailer: Schema.optional(Schema.String),
    defaultLanguage: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    trackingAnalyticsAccountId: Schema.optional(Schema.String),
    featuredChannelsUrls: Schema.optional(Schema.Array(Schema.String)),
    showRelatedChannels: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ChannelSettings" });

export interface ChannelBrandingSettings {
  /** Branding properties for the watch page. */
  watch?: WatchSettings;
  /** Branding properties for branding images. */
  image?: ImageSettings;
  /** Additional experimental branding properties. */
  hints?: ReadonlyArray<PropertyValue>;
  /** Branding properties for the channel view. */
  channel?: ChannelSettings;
}

export const ChannelBrandingSettings: Schema.Codec<ChannelBrandingSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    watch: Schema.optional(WatchSettings),
    image: Schema.optional(ImageSettings),
    hints: Schema.optional(Schema.Array(PropertyValue)),
    channel: Schema.optional(ChannelSettings),
  }).annotate({ identifier: "ChannelBrandingSettings" });

export interface Channel {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#channel". */
  kind?: string;
  /** The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process. */
  auditDetails?: ChannelAuditDetails;
  /** The snippet object contains basic details about the channel, such as its title, description, and thumbnail images. */
  snippet?: ChannelSnippet;
  /** The status object encapsulates information about the privacy status of the channel. */
  status?: ChannelStatus;
  /** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
  contentOwnerDetails?: ChannelContentOwnerDetails;
  /** Localizations for different languages */
  localizations?: Record<string, ChannelLocalization>;
  /** The ID that YouTube uses to uniquely identify the channel. */
  id?: string;
  /** The contentDetails object encapsulates information about the channel's content. */
  contentDetails?: ChannelContentDetails;
  /** The statistics object encapsulates statistics for the channel. */
  statistics?: ChannelStatistics;
  /** Etag of this resource. */
  etag?: string;
  /** The topicDetails object encapsulates information about Freebase topics associated with the channel. */
  topicDetails?: ChannelTopicDetails;
  /** The brandingSettings object encapsulates information about the branding of the channel. */
  brandingSettings?: ChannelBrandingSettings;
  /** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
  conversionPings?: ChannelConversionPings;
}

export const Channel: Schema.Codec<Channel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    auditDetails: Schema.optional(ChannelAuditDetails),
    snippet: Schema.optional(ChannelSnippet),
    status: Schema.optional(ChannelStatus),
    contentOwnerDetails: Schema.optional(ChannelContentOwnerDetails),
    localizations: Schema.optional(
      Schema.Record(Schema.String, ChannelLocalization),
    ),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(ChannelContentDetails),
    statistics: Schema.optional(ChannelStatistics),
    etag: Schema.optional(Schema.String),
    topicDetails: Schema.optional(ChannelTopicDetails),
    brandingSettings: Schema.optional(ChannelBrandingSettings),
    conversionPings: Schema.optional(ChannelConversionPings),
  }).annotate({ identifier: "Channel" });

export interface ChannelListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse". */
  kind?: string;
  /** General pagination information. */
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** Etag of this resource. */
  etag?: string;
  items?: ReadonlyArray<Channel>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
}

export const ChannelListResponse: Schema.Codec<ChannelListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    tokenPagination: Schema.optional(TokenPagination),
    prevPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Channel)),
    visitorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelListResponse" });

export interface VideoProcessingDetailsProcessingProgress {
  /** An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video. */
  timeLeftMs?: string;
  /** An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video. */
  partsTotal?: string;
  /** The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video. */
  partsProcessed?: string;
}

export const VideoProcessingDetailsProcessingProgress: Schema.Codec<VideoProcessingDetailsProcessingProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeLeftMs: Schema.optional(Schema.String),
    partsTotal: Schema.optional(Schema.String),
    partsProcessed: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoProcessingDetailsProcessingProgress" });

export interface ActivityContentDetailsUpload {
  /** The ID that YouTube uses to uniquely identify the uploaded video. */
  videoId?: string;
}

export const ActivityContentDetailsUpload: Schema.Codec<ActivityContentDetailsUpload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityContentDetailsUpload" });

export interface LiveChatBanSnippet {
  /** The type of ban. */
  type?:
    | "liveChatBanTypeUnspecified"
    | "permanent"
    | "temporary"
    | (string & {});
  /** The duration of a ban, only filled if the ban has type TEMPORARY. */
  banDurationSeconds?: string;
  bannedUserDetails?: ChannelProfileDetails;
  /** The chat this ban is pertinent to. */
  liveChatId?: string;
}

export const LiveChatBanSnippet: Schema.Codec<LiveChatBanSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    banDurationSeconds: Schema.optional(Schema.String),
    bannedUserDetails: Schema.optional(ChannelProfileDetails),
    liveChatId: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatBanSnippet" });

export interface LiveChatBan {
  /** Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`. */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The ID that YouTube assigns to uniquely identify the ban. */
  id?: string;
  /** The `snippet` object contains basic details about the ban. */
  snippet?: LiveChatBanSnippet;
}

export const LiveChatBan: Schema.Codec<LiveChatBan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    snippet: Schema.optional(LiveChatBanSnippet),
  }).annotate({ identifier: "LiveChatBan" });

export interface MembershipsDurationAtLevel {
  /** The date and time when the user became a continuous member for the given level. */
  memberSince?: string;
  /** The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer). */
  memberTotalDurationMonths?: number;
  /** Pricing level ID. */
  level?: string;
}

export const MembershipsDurationAtLevel: Schema.Codec<MembershipsDurationAtLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberSince: Schema.optional(Schema.String),
    memberTotalDurationMonths: Schema.optional(Schema.Number),
    level: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipsDurationAtLevel" });

export interface CommentThreadSnippet {
  /** The ID of the video the comments refer to, if any. */
  videoId?: string;
  /** The ID of the post the comments refer to, if any. */
  postId?: string;
  /** The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If neither video_id nor post_id is set the comments refer to the channel itself. */
  channelId?: string;
  /** The top level comment of this thread. */
  topLevelComment?: Comment;
  /** Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field. */
  canReply?: boolean;
  /** The total number of replies (not including the top level comment). */
  totalReplyCount?: number;
  /** Whether the thread (and therefore all its comments) is visible to all YouTube users. */
  isPublic?: boolean;
}

export const CommentThreadSnippet: Schema.Codec<CommentThreadSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoId: Schema.optional(Schema.String),
    postId: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    topLevelComment: Schema.optional(Comment),
    canReply: Schema.optional(Schema.Boolean),
    totalReplyCount: Schema.optional(Schema.Number),
    isPublic: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CommentThreadSnippet" });

export interface CommentThreadReplies {
  /** A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies. */
  comments?: ReadonlyArray<Comment>;
}

export const CommentThreadReplies: Schema.Codec<CommentThreadReplies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comments: Schema.optional(Schema.Array(Comment)),
  }).annotate({ identifier: "CommentThreadReplies" });

export interface CommentThread {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread". */
  kind?: string;
  /** The snippet object contains basic details about the comment thread and also the top level comment. */
  snippet?: CommentThreadSnippet;
  /** The replies object contains a limited number of replies (if any) to the top level comment found in the snippet. */
  replies?: CommentThreadReplies;
  /** Etag of this resource. */
  etag?: string;
  /** The ID that YouTube uses to uniquely identify the comment thread. */
  id?: string;
}

export const CommentThread: Schema.Codec<CommentThread> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(CommentThreadSnippet),
    replies: Schema.optional(CommentThreadReplies),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentThread" });

export interface CommentThreadListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse". */
  kind?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** Etag of this resource. */
  etag?: string;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** A list of comment threads that match the request criteria. */
  items?: ReadonlyArray<CommentThread>;
  tokenPagination?: TokenPagination;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
}

export const CommentThreadListResponse: Schema.Codec<CommentThreadListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    items: Schema.optional(Schema.Array(CommentThread)),
    tokenPagination: Schema.optional(TokenPagination),
    visitorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentThreadListResponse" });

export interface ChannelSectionLocalization {
  /** The localized strings for channel section's title. */
  title?: string;
}

export const ChannelSectionLocalization: Schema.Codec<ChannelSectionLocalization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelSectionLocalization" });

export interface ChannelSectionSnippet {
  /** The type of the channel section. */
  type?:
    | "channelsectionTypeUndefined"
    | "singlePlaylist"
    | "multiplePlaylists"
    | "popularUploads"
    | "recentUploads"
    | "likes"
    | "allPlaylists"
    | "likedPlaylists"
    | "recentPosts"
    | "recentActivity"
    | "liveEvents"
    | "upcomingEvents"
    | "completedEvents"
    | "multipleChannels"
    | "postedVideos"
    | "postedPlaylists"
    | "subscriptions"
    | (string & {});
  /** The ID that YouTube uses to uniquely identify the channel that published the channel section. */
  channelId?: string;
  /** The position of the channel section in the channel. */
  position?: number;
  /** The language of the channel section's default title and description. */
  defaultLanguage?: string;
  /** The channel section's title for multiple_playlists and multiple_channels. */
  title?: string;
  /** Localized title, read-only. */
  localized?: ChannelSectionLocalization;
  /** The style of the channel section. */
  style?:
    | "channelsectionStyleUnspecified"
    | "horizontalRow"
    | "verticalList"
    | (string & {});
}

export const ChannelSectionSnippet: Schema.Codec<ChannelSectionSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    position: Schema.optional(Schema.Number),
    defaultLanguage: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    localized: Schema.optional(ChannelSectionLocalization),
    style: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelSectionSnippet" });

export interface LiveStreamConfigurationIssue {
  /** The kind of error happening. */
  type?:
    | "gopSizeOver"
    | "gopSizeLong"
    | "gopSizeShort"
    | "openGop"
    | "badContainer"
    | "audioBitrateHigh"
    | "audioBitrateLow"
    | "audioSampleRate"
    | "bitrateHigh"
    | "bitrateLow"
    | "audioCodec"
    | "videoCodec"
    | "noAudioStream"
    | "noVideoStream"
    | "multipleVideoStreams"
    | "multipleAudioStreams"
    | "audioTooManyChannels"
    | "interlacedVideo"
    | "frameRateHigh"
    | "resolutionMismatch"
    | "videoCodecMismatch"
    | "videoInterlaceMismatch"
    | "videoProfileMismatch"
    | "videoBitrateMismatch"
    | "framerateMismatch"
    | "gopMismatch"
    | "audioSampleRateMismatch"
    | "audioStereoMismatch"
    | "audioCodecMismatch"
    | "audioBitrateMismatch"
    | "videoResolutionSuboptimal"
    | "videoResolutionUnsupported"
    | "videoIngestionStarved"
    | "videoIngestionFasterThanRealtime"
    | (string & {});
  /** How severe this issue is to the stream. */
  severity?: "info" | "warning" | "error" | (string & {});
  /** The long-form description of the issue and how to resolve it. */
  description?: string;
  /** The short-form reason for this issue. */
  reason?: string;
}

export const LiveStreamConfigurationIssue: Schema.Codec<LiveStreamConfigurationIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveStreamConfigurationIssue" });

export interface LiveStreamHealthStatus {
  /** The last time this status was updated (in seconds) */
  lastUpdateTimeSeconds?: string;
  /** The configurations issues on this stream */
  configurationIssues?: ReadonlyArray<LiveStreamConfigurationIssue>;
  /** The status code of this stream */
  status?: "good" | "ok" | "bad" | "noData" | "revoked" | (string & {});
}

export const LiveStreamHealthStatus: Schema.Codec<LiveStreamHealthStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdateTimeSeconds: Schema.optional(Schema.String),
    configurationIssues: Schema.optional(
      Schema.Array(LiveStreamConfigurationIssue),
    ),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveStreamHealthStatus" });

export interface ChannelSectionTargeting {
  /** The region the channel section is targeting. */
  regions?: ReadonlyArray<string>;
  /** The language the channel section is targeting. */
  languages?: ReadonlyArray<string>;
  /** The country the channel section is targeting. */
  countries?: ReadonlyArray<string>;
}

export const ChannelSectionTargeting: Schema.Codec<ChannelSectionTargeting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(Schema.Array(Schema.String)),
    languages: Schema.optional(Schema.Array(Schema.String)),
    countries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ChannelSectionTargeting" });

export interface ChannelSection {
  /** Localizations for different languages */
  localizations?: Record<string, ChannelSectionLocalization>;
  /** The ID that YouTube uses to uniquely identify the channel section. */
  id?: string;
  /** The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section. */
  contentDetails?: ChannelSectionContentDetails;
  /** Etag of this resource. */
  etag?: string;
  /** The snippet object contains basic details about the channel section, such as its type, style and title. */
  snippet?: ChannelSectionSnippet;
  /** The targeting object contains basic targeting settings about the channel section. */
  targeting?: ChannelSectionTargeting;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection". */
  kind?: string;
}

export const ChannelSection: Schema.Codec<ChannelSection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    localizations: Schema.optional(
      Schema.Record(Schema.String, ChannelSectionLocalization),
    ),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(ChannelSectionContentDetails),
    etag: Schema.optional(Schema.String),
    snippet: Schema.optional(ChannelSectionSnippet),
    targeting: Schema.optional(ChannelSectionTargeting),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelSection" });

export interface ChannelSectionListResponse {
  /** A list of ChannelSections that match the request criteria. */
  items?: ReadonlyArray<ChannelSection>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse". */
  kind?: string;
}

export const ChannelSectionListResponse: Schema.Codec<ChannelSectionListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(ChannelSection)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelSectionListResponse" });

export interface VideoLocalization {
  /** Localized version of the video's description. */
  description?: string;
  /** Localized version of the video's title. */
  title?: string;
}

export const VideoLocalization: Schema.Codec<VideoLocalization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoLocalization" });

export interface VideoSnippet {
  /** Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast. */
  liveBroadcastContent?:
    | "none"
    | "upcoming"
    | "live"
    | "completed"
    | (string & {});
  /** The video's title. @mutable youtube.videos.insert youtube.videos.update */
  title?: string;
  /** The ID that YouTube uses to uniquely identify the channel that the video was uploaded to. */
  channelId?: string;
  /** The language of the videos's default snippet. */
  defaultLanguage?: string;
  /** A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** The YouTube video category associated with the video. */
  categoryId?: string;
  /** A list of keyword tags associated with the video. Tags may contain spaces. */
  tags?: ReadonlyArray<string>;
  /** The date and time when the video was uploaded. */
  publishedAt?: string;
  /** Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only) */
  localized?: VideoLocalization;
  /** The video's description. @mutable youtube.videos.insert youtube.videos.update */
  description?: string;
  /** Channel title for the channel that the video belongs to. */
  channelTitle?: string;
  /** The default_audio_language property specifies the language spoken in the video's default audio track. */
  defaultAudioLanguage?: string;
}

export const VideoSnippet: Schema.Codec<VideoSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liveBroadcastContent: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    defaultLanguage: Schema.optional(Schema.String),
    thumbnails: Schema.optional(ThumbnailDetails),
    categoryId: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    publishedAt: Schema.optional(Schema.String),
    localized: Schema.optional(VideoLocalization),
    description: Schema.optional(Schema.String),
    channelTitle: Schema.optional(Schema.String),
    defaultAudioLanguage: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoSnippet" });

export interface LiveChatModeratorSnippet {
  /** Details about the moderator. */
  moderatorDetails?: ChannelProfileDetails;
  /** The ID of the live chat this moderator can act on. */
  liveChatId?: string;
}

export const LiveChatModeratorSnippet: Schema.Codec<LiveChatModeratorSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moderatorDetails: Schema.optional(ChannelProfileDetails),
    liveChatId: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatModeratorSnippet" });

export interface LiveChatModerator {
  /** The snippet object contains basic details about the moderator. */
  snippet?: LiveChatModeratorSnippet;
  /** The ID that YouTube assigns to uniquely identify the moderator. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const LiveChatModerator: Schema.Codec<LiveChatModerator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(LiveChatModeratorSnippet),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatModerator" });

export interface LiveChatModeratorListResponse {
  /** General pagination information. */
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** A list of moderators that match the request criteria. */
  items?: ReadonlyArray<LiveChatModerator>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
}

export const LiveChatModeratorListResponse: Schema.Codec<LiveChatModeratorListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageInfo: Schema.optional(PageInfo),
    tokenPagination: Schema.optional(TokenPagination),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(LiveChatModerator)),
    visitorId: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveChatModeratorListResponse" });

export interface ActivityContentDetailsLike {
  /** The resourceId object contains information that identifies the rated resource. */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsLike: Schema.Codec<ActivityContentDetailsLike> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsLike" });

export interface ActivityContentDetailsChannelItem {
  /** The resourceId object contains information that identifies the resource that was added to the channel. */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsChannelItem: Schema.Codec<ActivityContentDetailsChannelItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsChannelItem" });

export interface ActivityContentDetailsPromotedItem {
  /** The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item. */
  impressionUrl?: ReadonlyArray<string>;
  /** The ID that YouTube uses to uniquely identify the promoted video. */
  videoId?: string;
  /** The custom call-to-action button text. If specified, it will override the default button text for the cta_type. */
  customCtaButtonText?: string;
  /** The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown. */
  forecastingUrl?: ReadonlyArray<string>;
  /** The URL the client should fetch to request a promoted item. */
  adTag?: string;
  /** The type of call-to-action, a message to the user indicating action that can be taken. */
  ctaType?: "ctaTypeUnspecified" | "visitAdvertiserSite" | (string & {});
  /** The URL the client should ping to indicate that the user clicked through on this promoted item. */
  clickTrackingUrl?: string;
  /** The URL the client should direct the user to, if the user chooses to visit the advertiser's website. */
  destinationUrl?: string;
  /** The URL the client should ping to indicate that the user was shown this promoted item. */
  creativeViewUrl?: string;
  /** The text description to accompany the promoted item. */
  descriptionText?: string;
}

export const ActivityContentDetailsPromotedItem: Schema.Codec<ActivityContentDetailsPromotedItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impressionUrl: Schema.optional(Schema.Array(Schema.String)),
    videoId: Schema.optional(Schema.String),
    customCtaButtonText: Schema.optional(Schema.String),
    forecastingUrl: Schema.optional(Schema.Array(Schema.String)),
    adTag: Schema.optional(Schema.String),
    ctaType: Schema.optional(Schema.String),
    clickTrackingUrl: Schema.optional(Schema.String),
    destinationUrl: Schema.optional(Schema.String),
    creativeViewUrl: Schema.optional(Schema.String),
    descriptionText: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityContentDetailsPromotedItem" });

export interface ActivityContentDetailsRecommendation {
  /** The reason that the resource is recommended to the user. */
  reason?:
    | "reasonUnspecified"
    | "videoFavorited"
    | "videoLiked"
    | "videoWatched"
    | (string & {});
  /** The seedResourceId object contains information about the resource that caused the recommendation. */
  seedResourceId?: ResourceId;
  /** The resourceId object contains information that identifies the recommended resource. */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsRecommendation: Schema.Codec<ActivityContentDetailsRecommendation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    seedResourceId: Schema.optional(ResourceId),
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsRecommendation" });

export interface ActivityContentDetailsPlaylistItem {
  /** The resourceId object contains information about the resource that was added to the playlist. */
  resourceId?: ResourceId;
  /** ID of the item within the playlist. */
  playlistItemId?: string;
  /** The value that YouTube uses to uniquely identify the playlist. */
  playlistId?: string;
}

export const ActivityContentDetailsPlaylistItem: Schema.Codec<ActivityContentDetailsPlaylistItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
    playlistItemId: Schema.optional(Schema.String),
    playlistId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityContentDetailsPlaylistItem" });

export interface ActivityContentDetailsComment {
  /** The resourceId object contains information that identifies the resource associated with the comment. */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsComment: Schema.Codec<ActivityContentDetailsComment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsComment" });

export interface ActivityContentDetailsSubscription {
  /** The resourceId object contains information that identifies the resource that the user subscribed to. */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsSubscription: Schema.Codec<ActivityContentDetailsSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsSubscription" });

export interface ActivityContentDetailsSocial {
  /** The name of the social network. */
  type?: "unspecified" | "googlePlus" | "facebook" | "twitter" | (string & {});
  /** An image of the post's author. */
  imageUrl?: string;
  /** The resourceId object encapsulates information that identifies the resource associated with a social network post. */
  resourceId?: ResourceId;
  /** The URL of the social network post. */
  referenceUrl?: string;
  /** The author of the social network post. */
  author?: string;
}

export const ActivityContentDetailsSocial: Schema.Codec<ActivityContentDetailsSocial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    imageUrl: Schema.optional(Schema.String),
    resourceId: Schema.optional(ResourceId),
    referenceUrl: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityContentDetailsSocial" });

export interface ActivityContentDetailsFavorite {
  /** The resourceId object contains information that identifies the resource that was marked as a favorite. */
  resourceId?: ResourceId;
}

export const ActivityContentDetailsFavorite: Schema.Codec<ActivityContentDetailsFavorite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(ResourceId),
  }).annotate({ identifier: "ActivityContentDetailsFavorite" });

export interface ActivityContentDetails {
  /** The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like. */
  like?: ActivityContentDetailsLike;
  /** The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem. */
  channelItem?: ActivityContentDetailsChannelItem;
  /** The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload. */
  upload?: ActivityContentDetailsUpload;
  /** The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem. */
  promotedItem?: ActivityContentDetailsPromotedItem;
  /** The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation. */
  recommendation?: ActivityContentDetailsRecommendation;
  /** The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem. */
  playlistItem?: ActivityContentDetailsPlaylistItem;
  /** The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin. */
  bulletin?: ActivityContentDetailsBulletin;
  /** The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment. */
  comment?: ActivityContentDetailsComment;
  /** The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription. */
  subscription?: ActivityContentDetailsSubscription;
  /** The social object contains details about a social network post. This property is only present if the snippet.type is social. */
  social?: ActivityContentDetailsSocial;
  /** The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite. */
  favorite?: ActivityContentDetailsFavorite;
}

export const ActivityContentDetails: Schema.Codec<ActivityContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    like: Schema.optional(ActivityContentDetailsLike),
    channelItem: Schema.optional(ActivityContentDetailsChannelItem),
    upload: Schema.optional(ActivityContentDetailsUpload),
    promotedItem: Schema.optional(ActivityContentDetailsPromotedItem),
    recommendation: Schema.optional(ActivityContentDetailsRecommendation),
    playlistItem: Schema.optional(ActivityContentDetailsPlaylistItem),
    bulletin: Schema.optional(ActivityContentDetailsBulletin),
    comment: Schema.optional(ActivityContentDetailsComment),
    subscription: Schema.optional(ActivityContentDetailsSubscription),
    social: Schema.optional(ActivityContentDetailsSocial),
    favorite: Schema.optional(ActivityContentDetailsFavorite),
  }).annotate({ identifier: "ActivityContentDetails" });

export interface ActivitySnippet {
  /** Channel title for the channel responsible for this activity */
  channelTitle?: string;
  /** A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value. */
  groupId?: string;
  /** The type of activity that the resource describes. */
  type?:
    | "typeUnspecified"
    | "upload"
    | "like"
    | "favorite"
    | "comment"
    | "subscription"
    | "playlistItem"
    | "recommendation"
    | "bulletin"
    | "social"
    | "channelItem"
    | "promotedItem"
    | (string & {});
  /** The date and time that the video was uploaded. */
  publishedAt?: string;
  /** The title of the resource primarily associated with the activity. */
  title?: string;
  /** The ID that YouTube uses to uniquely identify the channel associated with the activity. */
  channelId?: string;
  /** The description of the resource primarily associated with the activity. @mutable youtube.activities.insert */
  description?: string;
}

export const ActivitySnippet: Schema.Codec<ActivitySnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelTitle: Schema.optional(Schema.String),
    thumbnails: Schema.optional(ThumbnailDetails),
    groupId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    publishedAt: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivitySnippet" });

export interface Activity {
  /** The ID that YouTube uses to uniquely identify the activity. */
  id?: string;
  /** The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object's content identifies the rated video. */
  contentDetails?: ActivityContentDetails;
  /** Etag of this resource */
  etag?: string;
  /** The snippet object contains basic details about the activity, including the activity's type and group ID. */
  snippet?: ActivitySnippet;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#activity". */
  kind?: string;
}

export const Activity: Schema.Codec<Activity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(ActivityContentDetails),
    etag: Schema.optional(Schema.String),
    snippet: Schema.optional(ActivitySnippet),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Activity" });

export interface ActivityListResponse {
  items?: ReadonlyArray<Activity>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
}

export const ActivityListResponse: Schema.Codec<ActivityListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Activity)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActivityListResponse" });

export interface PlaylistImageListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImageListResponse". */
  kind?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** General pagination information. */
  pageInfo?: PageInfo;
  items?: ReadonlyArray<PlaylistImage>;
}

export const PlaylistImageListResponse: Schema.Codec<PlaylistImageListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    items: Schema.optional(Schema.Array(PlaylistImage)),
  }).annotate({ identifier: "PlaylistImageListResponse" });

export interface LevelDetails {
  /** The name that should be used when referring to this level. */
  displayName?: string;
}

export const LevelDetails: Schema.Codec<LevelDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "LevelDetails" });

export interface VideoContentDetailsRegionRestriction {
  /** A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries. */
  allowed?: ReadonlyArray<string>;
  /** A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries. */
  blocked?: ReadonlyArray<string>;
}

export const VideoContentDetailsRegionRestriction: Schema.Codec<VideoContentDetailsRegionRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowed: Schema.optional(Schema.Array(Schema.String)),
    blocked: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VideoContentDetailsRegionRestriction" });

export interface CaptionSnippet {
  /** The type of audio track associated with the caption track. */
  audioTrackType?:
    | "unknown"
    | "primary"
    | "commentary"
    | "descriptive"
    | (string & {});
  /** Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update */
  isDraft?: boolean;
  /** The name of the caption track. The name is intended to be visible to the user as an option during playback. */
  name?: string;
  /** The language of the caption track. The property value is a BCP-47 language tag. */
  language?: string;
  /** Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions. */
  isAutoSynced?: boolean;
  /** Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false. */
  isCC?: boolean;
  /** The date and time when the caption track was last updated. */
  lastUpdated?: string;
  /** Indicates whether the caption track uses large text for the vision-impaired. The default value is false. */
  isLarge?: boolean;
  /** The caption track's status. */
  status?: "serving" | "syncing" | "failed" | (string & {});
  /** The caption track's type. */
  trackKind?: "standard" | "ASR" | "forced" | (string & {});
  /** Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false. */
  isEasyReader?: boolean;
  /** The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed. */
  failureReason?:
    | "unknownFormat"
    | "unsupportedFormat"
    | "processingFailed"
    | (string & {});
  /** The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert */
  videoId?: string;
}

export const CaptionSnippet: Schema.Codec<CaptionSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audioTrackType: Schema.optional(Schema.String),
    isDraft: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    isAutoSynced: Schema.optional(Schema.Boolean),
    isCC: Schema.optional(Schema.Boolean),
    lastUpdated: Schema.optional(Schema.String),
    isLarge: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    trackKind: Schema.optional(Schema.String),
    isEasyReader: Schema.optional(Schema.Boolean),
    failureReason: Schema.optional(Schema.String),
    videoId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CaptionSnippet" });

export interface SearchResultSnippet {
  /** It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts. */
  liveBroadcastContent?:
    | "none"
    | "upcoming"
    | "live"
    | "completed"
    | (string & {});
  /** The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies. */
  channelId?: string;
  /** A description of the search result. */
  description?: string;
  /** The creation date and time of the resource that the search result identifies. */
  publishedAt?: string;
  /** The title of the search result. */
  title?: string;
  /** A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** The title of the channel that published the resource that the search result identifies. */
  channelTitle?: string;
}

export const SearchResultSnippet: Schema.Codec<SearchResultSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liveBroadcastContent: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    publishedAt: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    thumbnails: Schema.optional(ThumbnailDetails),
    channelTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchResultSnippet" });

export interface SearchResult {
  /** The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video's title and the description will be the video's description. */
  snippet?: SearchResultSnippet;
  /** The id object contains information that can be used to uniquely identify the resource that matches the search request. */
  id?: ResourceId;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const SearchResult: Schema.Codec<SearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(SearchResultSnippet),
    id: Schema.optional(ResourceId),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchResult" });

export interface VideoProjectDetails {}

export const VideoProjectDetails: Schema.Codec<VideoProjectDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "VideoProjectDetails",
  });

export interface SubscriptionContentDetails {
  /** The approximate number of items that the subscription points to. */
  totalItemCount?: number;
  /** The number of new items in the subscription since its content was last read. */
  newItemCount?: number;
  /** The type of activity this subscription is for (only uploads, everything). */
  activityType?:
    | "subscriptionActivityTypeUnspecified"
    | "all"
    | "uploads"
    | (string & {});
}

export const SubscriptionContentDetails: Schema.Codec<SubscriptionContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalItemCount: Schema.optional(Schema.Number),
    newItemCount: Schema.optional(Schema.Number),
    activityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionContentDetails" });

export interface SubscriptionSubscriberSnippet {
  /** Thumbnails for this subscriber. */
  thumbnails?: ThumbnailDetails;
  /** The title of the subscriber. */
  title?: string;
  /** The description of the subscriber. */
  description?: string;
  /** The channel ID of the subscriber. */
  channelId?: string;
}

export const SubscriptionSubscriberSnippet: Schema.Codec<SubscriptionSubscriberSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnails: Schema.optional(ThumbnailDetails),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionSubscriberSnippet" });

export interface SubscriptionSnippet {
  /** A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. */
  thumbnails?: ThumbnailDetails;
  /** The date and time that the subscription was created. */
  publishedAt?: string;
  /** The subscription's title. */
  title?: string;
  /** The subscription's details. */
  description?: string;
  /** The id object contains information about the channel that the user subscribed to. */
  resourceId?: ResourceId;
  /** The ID that YouTube uses to uniquely identify the subscriber's channel. */
  channelId?: string;
}

export const SubscriptionSnippet: Schema.Codec<SubscriptionSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thumbnails: Schema.optional(ThumbnailDetails),
    publishedAt: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resourceId: Schema.optional(ResourceId),
    channelId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionSnippet" });

export interface Subscription {
  /** Etag of this resource. */
  etag?: string;
  /** The ID that YouTube uses to uniquely identify the subscription. */
  id?: string;
  /** The contentDetails object contains basic statistics about the subscription. */
  contentDetails?: SubscriptionContentDetails;
  /** The subscriberSnippet object contains basic details about the subscriber. */
  subscriberSnippet?: SubscriptionSubscriberSnippet;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#subscription". */
  kind?: string;
  /** The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to. */
  snippet?: SubscriptionSnippet;
}

export const Subscription: Schema.Codec<Subscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(SubscriptionContentDetails),
    subscriberSnippet: Schema.optional(SubscriptionSubscriberSnippet),
    kind: Schema.optional(Schema.String),
    snippet: Schema.optional(SubscriptionSnippet),
  }).annotate({ identifier: "Subscription" });

export interface TestItemTestItemSnippet {}

export const TestItemTestItemSnippet: Schema.Codec<TestItemTestItemSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TestItemTestItemSnippet",
  });

export interface VideoStatistics {
  /** The number of users who have indicated that they liked the video by giving it a positive rating. */
  likeCount?: string;
  /** The number of users who have indicated that they disliked the video by giving it a negative rating. */
  dislikeCount?: string;
  /** The number of comments for the video. */
  commentCount?: string;
  /** The number of times the video has been viewed. */
  viewCount?: string;
  /** The number of users who currently have the video marked as a favorite video. */
  favoriteCount?: string;
}

export const VideoStatistics: Schema.Codec<VideoStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    likeCount: Schema.optional(Schema.String),
    dislikeCount: Schema.optional(Schema.String),
    commentCount: Schema.optional(Schema.String),
    viewCount: Schema.optional(Schema.String),
    favoriteCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoStatistics" });

export interface VideoAgeGating {
  /** Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content. */
  alcoholContent?: boolean;
  /** Video game rating, if any. */
  videoGameRating?:
    | "anyone"
    | "m15Plus"
    | "m16Plus"
    | "m17Plus"
    | (string & {});
  /** Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present. */
  restricted?: boolean;
}

export const VideoAgeGating: Schema.Codec<VideoAgeGating> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alcoholContent: Schema.optional(Schema.Boolean),
    videoGameRating: Schema.optional(Schema.String),
    restricted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VideoAgeGating" });

export interface VideoTopicDetails {
  /** A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href="http://wiki.freebase.com/wiki/Topic_API">Freebase Topic API. */
  topicIds?: ReadonlyArray<string>;
  /** A list of Wikipedia URLs that provide a high-level description of the video's content. */
  topicCategories?: ReadonlyArray<string>;
  /** Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API. */
  relevantTopicIds?: ReadonlyArray<string>;
}

export const VideoTopicDetails: Schema.Codec<VideoTopicDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicIds: Schema.optional(Schema.Array(Schema.String)),
    topicCategories: Schema.optional(Schema.Array(Schema.String)),
    relevantTopicIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VideoTopicDetails" });

export interface VideoFileDetailsAudioStream {
  /** The number of audio channels that the stream contains. */
  channelCount?: number;
  /** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
  vendor?: string;
  /** The audio codec that the stream uses. */
  codec?: string;
  /** The audio stream's bitrate, in bits per second. */
  bitrateBps?: string;
}

export const VideoFileDetailsAudioStream: Schema.Codec<VideoFileDetailsAudioStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelCount: Schema.optional(Schema.Number),
    vendor: Schema.optional(Schema.String),
    codec: Schema.optional(Schema.String),
    bitrateBps: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoFileDetailsAudioStream" });

export interface VideoFileDetailsVideoStream {
  /** The encoded video content's height in pixels. */
  heightPixels?: number;
  /** The amount that YouTube needs to rotate the original source content to properly display the video. */
  rotation?:
    | "none"
    | "clockwise"
    | "upsideDown"
    | "counterClockwise"
    | "other"
    | (string & {});
  /** The video stream's frame rate, in frames per second. */
  frameRateFps?: number;
  /** The video codec that the stream uses. */
  codec?: string;
  /** The video stream's bitrate, in bits per second. */
  bitrateBps?: string;
  /** The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed. */
  aspectRatio?: number;
  /** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
  vendor?: string;
  /** The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels. */
  widthPixels?: number;
}

export const VideoFileDetailsVideoStream: Schema.Codec<VideoFileDetailsVideoStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    heightPixels: Schema.optional(Schema.Number),
    rotation: Schema.optional(Schema.String),
    frameRateFps: Schema.optional(Schema.Number),
    codec: Schema.optional(Schema.String),
    bitrateBps: Schema.optional(Schema.String),
    aspectRatio: Schema.optional(Schema.Number),
    vendor: Schema.optional(Schema.String),
    widthPixels: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VideoFileDetailsVideoStream" });

export interface VideoFileDetails {
  /** The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded. */
  fileSize?: string;
  /** The uploaded video file's combined (video and audio) bitrate in bits per second. */
  bitrateBps?: string;
  /** A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream. */
  audioStreams?: ReadonlyArray<VideoFileDetailsAudioStream>;
  /** The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM */
  creationTime?: string;
  /** The uploaded file's name. This field is present whether a video file or another type of file was uploaded. */
  fileName?: string;
  /** The uploaded video file's container format. */
  container?: string;
  /** The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded. */
  fileType?:
    | "video"
    | "audio"
    | "image"
    | "archive"
    | "document"
    | "project"
    | "other"
    | (string & {});
  /** A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream. */
  videoStreams?: ReadonlyArray<VideoFileDetailsVideoStream>;
  /** The length of the uploaded video in milliseconds. */
  durationMs?: string;
}

export const VideoFileDetails: Schema.Codec<VideoFileDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileSize: Schema.optional(Schema.String),
    bitrateBps: Schema.optional(Schema.String),
    audioStreams: Schema.optional(Schema.Array(VideoFileDetailsAudioStream)),
    creationTime: Schema.optional(Schema.String),
    fileName: Schema.optional(Schema.String),
    container: Schema.optional(Schema.String),
    fileType: Schema.optional(Schema.String),
    videoStreams: Schema.optional(Schema.Array(VideoFileDetailsVideoStream)),
    durationMs: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoFileDetails" });

export interface ContentRating {
  /** A rating that YouTube uses to identify age-restricted content. */
  ytRating?: "ytUnspecified" | "ytAgeRestricted" | (string & {});
  /** The video's rating from Thailand's Board of Film and Video Censors. */
  bfvcRating?:
    | "bfvcUnspecified"
    | "bfvcG"
    | "bfvcE"
    | "bfvc13"
    | "bfvc15"
    | "bfvc18"
    | "bfvc20"
    | "bfvcB"
    | "bfvcUnrated"
    | (string & {});
  /** The video's rating from Taiwan's Ministry of Culture (文化部). */
  moctwRating?:
    | "moctwUnspecified"
    | "moctwG"
    | "moctwP"
    | "moctwPg"
    | "moctwR"
    | "moctwUnrated"
    | "moctwR12"
    | "moctwR15"
    | (string & {});
  /** The video's rating system for Vietnam - MCST */
  mcstRating?:
    | "mcstUnspecified"
    | "mcstP"
    | "mcst0"
    | "mcstC13"
    | "mcstC16"
    | "mcst16plus"
    | "mcstC18"
    | "mcstGPg"
    | "mcstUnrated"
    | (string & {});
  /** The video's Canadian Home Video Rating System (CHVRS) rating. */
  chvrsRating?:
    | "chvrsUnspecified"
    | "chvrsG"
    | "chvrsPg"
    | "chvrs14a"
    | "chvrs18a"
    | "chvrsR"
    | "chvrsE"
    | "chvrsUnrated"
    | (string & {});
  /** The video's Eirin (映倫) rating. Eirin is the Japanese rating system. */
  eirinRating?:
    | "eirinUnspecified"
    | "eirinG"
    | "eirinPg12"
    | "eirinR15plus"
    | "eirinR18plus"
    | "eirinUnrated"
    | (string & {});
  /** The video's rating from the Bulgarian National Film Center. */
  nfrcRating?:
    | "nfrcUnspecified"
    | "nfrcA"
    | "nfrcB"
    | "nfrcC"
    | "nfrcD"
    | "nfrcX"
    | "nfrcUnrated"
    | (string & {});
  /** The video's rating in Slovakia. */
  skfilmRating?:
    | "skfilmUnspecified"
    | "skfilmG"
    | "skfilmP2"
    | "skfilmP5"
    | "skfilmP8"
    | "skfilmUnrated"
    | (string & {});
  /** The video's Ministerio de Cultura (Colombia) rating. */
  mocRating?:
    | "mocUnspecified"
    | "mocE"
    | "mocT"
    | "moc7"
    | "moc12"
    | "moc15"
    | "moc18"
    | "mocX"
    | "mocBanned"
    | "mocUnrated"
    | (string & {});
  /** The National Media Council ratings system for United Arab Emirates. */
  nmcRating?:
    | "nmcUnspecified"
    | "nmcG"
    | "nmcPg"
    | "nmcPg13"
    | "nmcPg15"
    | "nmc15plus"
    | "nmc18plus"
    | "nmc18tc"
    | "nmcUnrated"
    | (string & {});
  /** The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television. */
  anatelRating?:
    | "anatelUnspecified"
    | "anatelF"
    | "anatelI"
    | "anatelI7"
    | "anatelI10"
    | "anatelI12"
    | "anatelR"
    | "anatelA"
    | "anatelUnrated"
    | (string & {});
  /** The video's National Film Registry of the Russian Federation (MKRF - Russia) rating. */
  russiaRating?:
    | "russiaUnspecified"
    | "russia0"
    | "russia6"
    | "russia12"
    | "russia16"
    | "russia18"
    | "russiaUnrated"
    | (string & {});
  /** The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website. */
  catvfrRating?:
    | "catvfrUnspecified"
    | "catvfrG"
    | "catvfr8plus"
    | "catvfr13plus"
    | "catvfr16plus"
    | "catvfr18plus"
    | "catvfrUnrated"
    | "catvfrE"
    | (string & {});
  /** The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea. */
  kmrbRating?:
    | "kmrbUnspecified"
    | "kmrbAll"
    | "kmrb12plus"
    | "kmrb15plus"
    | "kmrbTeenr"
    | "kmrbR"
    | "kmrbUnrated"
    | (string & {});
  /** The video's rating in Switzerland. */
  chfilmRating?:
    | "chfilmUnspecified"
    | "chfilm0"
    | "chfilm6"
    | "chfilm12"
    | "chfilm16"
    | "chfilm18"
    | "chfilmUnrated"
    | (string & {});
  /** The video's rating from the Movie and Television Review and Classification Board (Philippines). */
  mtrcbRating?:
    | "mtrcbUnspecified"
    | "mtrcbG"
    | "mtrcbPg"
    | "mtrcbR13"
    | "mtrcbR16"
    | "mtrcbR18"
    | "mtrcbX"
    | "mtrcbUnrated"
    | (string & {});
  /** The video's General Directorate of Radio, Television and Cinematography (Mexico) rating. */
  rtcRating?:
    | "rtcUnspecified"
    | "rtcAa"
    | "rtcA"
    | "rtcB"
    | "rtcB15"
    | "rtcC"
    | "rtcD"
    | "rtcUnrated"
    | (string & {});
  /** The video's British Board of Film Classification (BBFC) rating. */
  bbfcRating?:
    | "bbfcUnspecified"
    | "bbfcU"
    | "bbfcPg"
    | "bbfc12a"
    | "bbfc12"
    | "bbfc15"
    | "bbfc18"
    | "bbfcR18"
    | "bbfcUnrated"
    | (string & {});
  /** The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details. */
  menaMpaaRating?:
    | "menaMpaaUnspecified"
    | "menaMpaaG"
    | "menaMpaaPg"
    | "menaMpaaPg13"
    | "menaMpaaR"
    | "menaMpaaUnrated"
    | (string & {});
  /** The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA). */
  cnaRating?:
    | "cnaUnspecified"
    | "cnaAp"
    | "cna12"
    | "cna15"
    | "cna18"
    | "cna18plus"
    | "cnaUnrated"
    | (string & {});
  /** The video's rating in Greece. */
  grfilmRating?:
    | "grfilmUnspecified"
    | "grfilmK"
    | "grfilmE"
    | "grfilmK12"
    | "grfilmK13"
    | "grfilmK15"
    | "grfilmK17"
    | "grfilmK18"
    | "grfilmUnrated"
    | (string & {});
  /** The video's rating in Israel. */
  ilfilmRating?:
    | "ilfilmUnspecified"
    | "ilfilmAa"
    | "ilfilm12"
    | "ilfilm14"
    | "ilfilm16"
    | "ilfilm18"
    | "ilfilmUnrated"
    | (string & {});
  /** The video's Office of Film and Literature Classification (OFLC - New Zealand) rating. */
  oflcRating?:
    | "oflcUnspecified"
    | "oflcG"
    | "oflcPg"
    | "oflcM"
    | "oflcR13"
    | "oflcR15"
    | "oflcR16"
    | "oflcR18"
    | "oflcUnrated"
    | "oflcRp13"
    | "oflcRp16"
    | "oflcRp18"
    | (string & {});
  /** The video's rating from Medietilsynet, the Norwegian Media Authority. */
  medietilsynetRating?:
    | "medietilsynetUnspecified"
    | "medietilsynetA"
    | "medietilsynet6"
    | "medietilsynet7"
    | "medietilsynet9"
    | "medietilsynet11"
    | "medietilsynet12"
    | "medietilsynet15"
    | "medietilsynet18"
    | "medietilsynetUnrated"
    | (string & {});
  /** The video's rating in the Czech Republic. */
  czfilmRating?:
    | "czfilmUnspecified"
    | "czfilmU"
    | "czfilm12"
    | "czfilm14"
    | "czfilm18"
    | "czfilmUnrated"
    | (string & {});
  /** The video's Central Board of Film Certification (CBFC - India) rating. */
  cbfcRating?:
    | "cbfcUnspecified"
    | "cbfcU"
    | "cbfcUA"
    | "cbfcUA7plus"
    | "cbfcUA13plus"
    | "cbfcUA16plus"
    | "cbfcA"
    | "cbfcS"
    | "cbfcUnrated"
    | (string & {});
  /** The video's rating from Ireland's Raidió Teilifís Éireann. */
  rteRating?:
    | "rteUnspecified"
    | "rteGa"
    | "rteCh"
    | "rtePs"
    | "rteMa"
    | "rteUnrated"
    | (string & {});
  /** The video's rating from Statens medieråd (Sweden's National Media Council). */
  smsaRating?:
    | "smsaUnspecified"
    | "smsaA"
    | "smsa7"
    | "smsa11"
    | "smsa15"
    | "smsaUnrated"
    | (string & {});
  /** The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content. */
  csaRating?:
    | "csaUnspecified"
    | "csaT"
    | "csa10"
    | "csa12"
    | "csa16"
    | "csa18"
    | "csaInterdiction"
    | "csaUnrated"
    | (string & {});
  /** The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia). */
  nkclvRating?:
    | "nkclvUnspecified"
    | "nkclvU"
    | "nkclv7plus"
    | "nkclv12plus"
    | "nkclv16plus"
    | "nkclv18plus"
    | "nkclvUnrated"
    | (string & {});
  /** The video's rating from the Kenya Film Classification Board. */
  kfcbRating?:
    | "kfcbUnspecified"
    | "kfcbG"
    | "kfcbPg"
    | "kfcb16plus"
    | "kfcbR"
    | "kfcbUnrated"
    | (string & {});
  /** The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands). */
  kijkwijzerRating?:
    | "kijkwijzerUnspecified"
    | "kijkwijzerAl"
    | "kijkwijzer6"
    | "kijkwijzer9"
    | "kijkwijzer12"
    | "kijkwijzer16"
    | "kijkwijzer18"
    | "kijkwijzerUnrated"
    | (string & {});
  /** The video's rating from the Commission de Contrôle des Films (Belgium). */
  cicfRating?:
    | "cicfUnspecified"
    | "cicfE"
    | "cicfKtEa"
    | "cicfKntEna"
    | "cicfUnrated"
    | (string & {});
  /** The video's rating from Nigeria's National Film and Video Censors Board. */
  nfvcbRating?:
    | "nfvcbUnspecified"
    | "nfvcbG"
    | "nfvcbPg"
    | "nfvcb12"
    | "nfvcb12a"
    | "nfvcb15"
    | "nfvcb18"
    | "nfvcbRe"
    | "nfvcbUnrated"
    | (string & {});
  /** The video's Consejo de Calificación Cinematográfica (Chile) rating. */
  cccRating?:
    | "cccUnspecified"
    | "cccTe"
    | "ccc6"
    | "ccc14"
    | "ccc18"
    | "ccc18v"
    | "ccc18s"
    | "cccUnrated"
    | (string & {});
  /** The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM). */
  agcomRating?:
    | "agcomUnspecified"
    | "agcomT"
    | "agcomVm14"
    | "agcomVm18"
    | "agcomUnrated"
    | (string & {});
  /** The video's rating in Peru. */
  pefilmRating?:
    | "pefilmUnspecified"
    | "pefilmPt"
    | "pefilmPg"
    | "pefilm14"
    | "pefilm18"
    | "pefilmUnrated"
    | (string & {});
  /** The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating. */
  icaaRating?:
    | "icaaUnspecified"
    | "icaaApta"
    | "icaa7"
    | "icaa12"
    | "icaa13"
    | "icaa16"
    | "icaa18"
    | "icaaX"
    | "icaaUnrated"
    | (string & {});
  /** The video's TV Parental Guidelines (TVPG) rating. */
  tvpgRating?:
    | "tvpgUnspecified"
    | "tvpgY"
    | "tvpgY7"
    | "tvpgY7Fv"
    | "tvpgG"
    | "tvpgPg"
    | "pg14"
    | "tvpgMa"
    | "tvpgUnrated"
    | (string & {});
  /** The video's rating from the Maldives National Bureau of Classification. */
  nbcRating?:
    | "nbcUnspecified"
    | "nbcG"
    | "nbcPg"
    | "nbc12plus"
    | "nbc15plus"
    | "nbc18plus"
    | "nbc18plusr"
    | "nbcPu"
    | "nbcUnrated"
    | (string & {});
  /** This property has been deprecated. Use the contentDetails.contentRating.cncRating instead. */
  fmocRating?:
    | "fmocUnspecified"
    | "fmocU"
    | "fmoc10"
    | "fmoc12"
    | "fmoc16"
    | "fmoc18"
    | "fmocE"
    | "fmocUnrated"
    | (string & {});
  /** Reasons that explain why the video received its FPB (South Africa) rating. */
  fpbRatingReasons?: ReadonlyArray<
    | "fpbRatingReasonUnspecified"
    | "fpbBlasphemy"
    | "fpbLanguage"
    | "fpbNudity"
    | "fpbPrejudice"
    | "fpbSex"
    | "fpbViolence"
    | "fpbDrugs"
    | "fpbSexualViolence"
    | "fpbHorror"
    | "fpbCriminalTechniques"
    | "fpbImitativeActsTechniques"
    | (string & {})
  >;
  /** The video's Motion Picture Association of America (MPAA) rating. */
  mpaaRating?:
    | "mpaaUnspecified"
    | "mpaaG"
    | "mpaaPg"
    | "mpaaPg13"
    | "mpaaR"
    | "mpaaNc17"
    | "mpaaX"
    | "mpaaUnrated"
    | (string & {});
  /** The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur). */
  bmukkRating?:
    | "bmukkUnspecified"
    | "bmukkAa"
    | "bmukk6"
    | "bmukk8"
    | "bmukk10"
    | "bmukk12"
    | "bmukk14"
    | "bmukk16"
    | "bmukkUnrated"
    | (string & {});
  /** The video's rating in Egypt. */
  egfilmRating?:
    | "egfilmUnspecified"
    | "egfilmGn"
    | "egfilm18"
    | "egfilmBn"
    | "egfilmUnrated"
    | (string & {});
  /** The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html. */
  mpaatRating?: "mpaatUnspecified" | "mpaatGb" | "mpaatRb" | (string & {});
  /** The video's rating from South Africa's Film and Publication Board. */
  fpbRating?:
    | "fpbUnspecified"
    | "fpbA"
    | "fpbPg"
    | "fpb79Pg"
    | "fpb1012Pg"
    | "fpb13"
    | "fpb16"
    | "fpb18"
    | "fpbX18"
    | "fpbXx"
    | "fpbUnrated"
    | "fpb10"
    | (string & {});
  /** Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism */
  ecbmctRating?:
    | "ecbmctUnspecified"
    | "ecbmctG"
    | "ecbmct7a"
    | "ecbmct7plus"
    | "ecbmct13a"
    | "ecbmct13plus"
    | "ecbmct15a"
    | "ecbmct15plus"
    | "ecbmct18plus"
    | "ecbmctUnrated"
    | (string & {});
  /** The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF). */
  cscfRating?:
    | "cscfUnspecified"
    | "cscfAl"
    | "cscfA"
    | "cscf6"
    | "cscf9"
    | "cscf12"
    | "cscf16"
    | "cscf18"
    | "cscfUnrated"
    | (string & {});
  /** The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating. */
  incaaRating?:
    | "incaaUnspecified"
    | "incaaAtp"
    | "incaaSam13"
    | "incaaSam16"
    | "incaaSam18"
    | "incaaC"
    | "incaaUnrated"
    | (string & {});
  /** The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute). */
  mekuRating?:
    | "mekuUnspecified"
    | "mekuS"
    | "meku7"
    | "meku12"
    | "meku16"
    | "meku18"
    | "mekuUnrated"
    | (string & {});
  /** The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC). */
  mdaRating?:
    | "mdaUnspecified"
    | "mdaG"
    | "mdaPg"
    | "mdaPg13"
    | "mdaNc16"
    | "mdaM18"
    | "mdaR21"
    | "mdaUnrated"
    | (string & {});
  /** The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People. */
  mccypRating?:
    | "mccypUnspecified"
    | "mccypA"
    | "mccyp7"
    | "mccyp11"
    | "mccyp15"
    | "mccypUnrated"
    | (string & {});
  /** The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating. */
  djctqRating?:
    | "djctqUnspecified"
    | "djctqL"
    | "djctq10"
    | "djctq12"
    | "djctq14"
    | "djctq16"
    | "djctq18"
    | "djctqEr"
    | "djctqL10"
    | "djctqL12"
    | "djctqL14"
    | "djctqL16"
    | "djctqL18"
    | "djctq1012"
    | "djctq1014"
    | "djctq1016"
    | "djctq1018"
    | "djctq1214"
    | "djctq1216"
    | "djctq1218"
    | "djctq1416"
    | "djctq1418"
    | "djctq1618"
    | "djctqUnrated"
    | (string & {});
  /** The video's rating in Iceland. */
  smaisRating?:
    | "smaisUnspecified"
    | "smaisL"
    | "smais7"
    | "smais12"
    | "smais14"
    | "smais16"
    | "smais18"
    | "smaisUnrated"
    | (string & {});
  /** The video's rating in Estonia. */
  eefilmRating?:
    | "eefilmUnspecified"
    | "eefilmPere"
    | "eefilmL"
    | "eefilmMs6"
    | "eefilmK6"
    | "eefilmMs12"
    | "eefilmK12"
    | "eefilmK14"
    | "eefilmK16"
    | "eefilmUnrated"
    | (string & {});
  /** The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming. */
  acbRating?:
    | "acbUnspecified"
    | "acbE"
    | "acbP"
    | "acbC"
    | "acbG"
    | "acbPg"
    | "acbM"
    | "acbMa15plus"
    | "acbR18plus"
    | "acbUnrated"
    | (string & {});
  /** Reasons that explain why the video received its DJCQT (Brazil) rating. */
  djctqRatingReasons?: ReadonlyArray<
    | "djctqRatingReasonUnspecified"
    | "djctqViolence"
    | "djctqExtremeViolence"
    | "djctqSexualContent"
    | "djctqNudity"
    | "djctqSex"
    | "djctqExplicitSex"
    | "djctqDrugs"
    | "djctqLegalDrugs"
    | "djctqIllegalDrugs"
    | "djctqInappropriateLanguage"
    | "djctqCriminalActs"
    | "djctqImpactingContent"
    | "djctqFear"
    | "djctqMedicalProcedures"
    | "djctqSensitiveTopics"
    | "djctqFantasyViolence"
    | (string & {})
  >;
  /** The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information. */
  ifcoRating?:
    | "ifcoUnspecified"
    | "ifcoG"
    | "ifcoPg"
    | "ifco12"
    | "ifco12a"
    | "ifco15"
    | "ifco15a"
    | "ifco16"
    | "ifco18"
    | "ifcoUnrated"
    | (string & {});
  /** The video's rating from Indonesia's Lembaga Sensor Film. */
  lsfRating?:
    | "lsfUnspecified"
    | "lsfSu"
    | "lsfA"
    | "lsfBo"
    | "lsf13"
    | "lsfR"
    | "lsf17"
    | "lsfD"
    | "lsf21"
    | "lsfUnrated"
    | (string & {});
  /** The video's rating from Malta's Film Age-Classification Board. */
  mccaaRating?:
    | "mccaaUnspecified"
    | "mccaaU"
    | "mccaaPg"
    | "mccaa12a"
    | "mccaa12"
    | "mccaa14"
    | "mccaa15"
    | "mccaa16"
    | "mccaa18"
    | "mccaaUnrated"
    | (string & {});
  /** The video's rating in Venezuela. */
  resorteviolenciaRating?:
    | "resorteviolenciaUnspecified"
    | "resorteviolenciaA"
    | "resorteviolenciaB"
    | "resorteviolenciaC"
    | "resorteviolenciaD"
    | "resorteviolenciaE"
    | "resorteviolenciaUnrated"
    | (string & {});
  /** The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating. */
  fskRating?:
    | "fskUnspecified"
    | "fsk0"
    | "fsk6"
    | "fsk12"
    | "fsk16"
    | "fsk18"
    | "fskUnrated"
    | (string & {});
  /** The video's rating in Poland. */
  nbcplRating?:
    | "nbcplUnspecified"
    | "nbcplI"
    | "nbcplIi"
    | "nbcplIii"
    | "nbcplIv"
    | "nbcpl18plus"
    | "nbcplUnrated"
    | (string & {});
  /** Rating system in France - Commission de classification cinematographique */
  cncRating?:
    | "cncUnspecified"
    | "cncT"
    | "cnc10"
    | "cnc12"
    | "cnc16"
    | "cnc18"
    | "cncE"
    | "cncInterdiction"
    | "cncUnrated"
    | (string & {});
  /** The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration. */
  fcoRating?:
    | "fcoUnspecified"
    | "fcoI"
    | "fcoIia"
    | "fcoIib"
    | "fcoIi"
    | "fcoIii"
    | "fcoUnrated"
    | (string & {});
  /** The video's rating from Malaysia's Film Censorship Board. */
  fcbmRating?:
    | "fcbmUnspecified"
    | "fcbmU"
    | "fcbmPg13"
    | "fcbmP13"
    | "fcbm18"
    | "fcbm18sx"
    | "fcbm18pa"
    | "fcbm18sg"
    | "fcbm18pl"
    | "fcbmUnrated"
    | (string & {});
  /** The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film. */
  rcnofRating?:
    | "rcnofUnspecified"
    | "rcnofI"
    | "rcnofIi"
    | "rcnofIii"
    | "rcnofIv"
    | "rcnofV"
    | "rcnofVi"
    | "rcnofUnrated"
    | (string & {});
  /** The video's rating from Portugal's Comissão de Classificação de Espect´culos. */
  cceRating?:
    | "cceUnspecified"
    | "cceM4"
    | "cceM6"
    | "cceM12"
    | "cceM16"
    | "cceM18"
    | "cceUnrated"
    | "cceM14"
    | (string & {});
  /** The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy). */
  mibacRating?:
    | "mibacUnspecified"
    | "mibacT"
    | "mibacVap"
    | "mibacVm6"
    | "mibacVm12"
    | "mibacVm14"
    | "mibacVm16"
    | "mibacVm18"
    | "mibacUnrated"
    | (string & {});
  /** Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website. */
  catvRating?:
    | "catvUnspecified"
    | "catvC"
    | "catvC8"
    | "catvG"
    | "catvPg"
    | "catv14plus"
    | "catv18plus"
    | "catvUnrated"
    | "catvE"
    | (string & {});
}

export const ContentRating: Schema.Codec<ContentRating> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ytRating: Schema.optional(Schema.String),
    bfvcRating: Schema.optional(Schema.String),
    moctwRating: Schema.optional(Schema.String),
    mcstRating: Schema.optional(Schema.String),
    chvrsRating: Schema.optional(Schema.String),
    eirinRating: Schema.optional(Schema.String),
    nfrcRating: Schema.optional(Schema.String),
    skfilmRating: Schema.optional(Schema.String),
    mocRating: Schema.optional(Schema.String),
    nmcRating: Schema.optional(Schema.String),
    anatelRating: Schema.optional(Schema.String),
    russiaRating: Schema.optional(Schema.String),
    catvfrRating: Schema.optional(Schema.String),
    kmrbRating: Schema.optional(Schema.String),
    chfilmRating: Schema.optional(Schema.String),
    mtrcbRating: Schema.optional(Schema.String),
    rtcRating: Schema.optional(Schema.String),
    bbfcRating: Schema.optional(Schema.String),
    menaMpaaRating: Schema.optional(Schema.String),
    cnaRating: Schema.optional(Schema.String),
    grfilmRating: Schema.optional(Schema.String),
    ilfilmRating: Schema.optional(Schema.String),
    oflcRating: Schema.optional(Schema.String),
    medietilsynetRating: Schema.optional(Schema.String),
    czfilmRating: Schema.optional(Schema.String),
    cbfcRating: Schema.optional(Schema.String),
    rteRating: Schema.optional(Schema.String),
    smsaRating: Schema.optional(Schema.String),
    csaRating: Schema.optional(Schema.String),
    nkclvRating: Schema.optional(Schema.String),
    kfcbRating: Schema.optional(Schema.String),
    kijkwijzerRating: Schema.optional(Schema.String),
    cicfRating: Schema.optional(Schema.String),
    nfvcbRating: Schema.optional(Schema.String),
    cccRating: Schema.optional(Schema.String),
    agcomRating: Schema.optional(Schema.String),
    pefilmRating: Schema.optional(Schema.String),
    icaaRating: Schema.optional(Schema.String),
    tvpgRating: Schema.optional(Schema.String),
    nbcRating: Schema.optional(Schema.String),
    fmocRating: Schema.optional(Schema.String),
    fpbRatingReasons: Schema.optional(Schema.Array(Schema.String)),
    mpaaRating: Schema.optional(Schema.String),
    bmukkRating: Schema.optional(Schema.String),
    egfilmRating: Schema.optional(Schema.String),
    mpaatRating: Schema.optional(Schema.String),
    fpbRating: Schema.optional(Schema.String),
    ecbmctRating: Schema.optional(Schema.String),
    cscfRating: Schema.optional(Schema.String),
    incaaRating: Schema.optional(Schema.String),
    mekuRating: Schema.optional(Schema.String),
    mdaRating: Schema.optional(Schema.String),
    mccypRating: Schema.optional(Schema.String),
    djctqRating: Schema.optional(Schema.String),
    smaisRating: Schema.optional(Schema.String),
    eefilmRating: Schema.optional(Schema.String),
    acbRating: Schema.optional(Schema.String),
    djctqRatingReasons: Schema.optional(Schema.Array(Schema.String)),
    ifcoRating: Schema.optional(Schema.String),
    lsfRating: Schema.optional(Schema.String),
    mccaaRating: Schema.optional(Schema.String),
    resorteviolenciaRating: Schema.optional(Schema.String),
    fskRating: Schema.optional(Schema.String),
    nbcplRating: Schema.optional(Schema.String),
    cncRating: Schema.optional(Schema.String),
    fcoRating: Schema.optional(Schema.String),
    fcbmRating: Schema.optional(Schema.String),
    rcnofRating: Schema.optional(Schema.String),
    cceRating: Schema.optional(Schema.String),
    mibacRating: Schema.optional(Schema.String),
    catvRating: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContentRating" });

export interface VideoContentDetails {
  /** Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader. */
  hasCustomThumbnail?: boolean;
  /** The value of definition indicates whether the video is available in high definition or only in standard definition. */
  definition?: "sd" | "hd" | (string & {});
  /** The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long. */
  duration?: string;
  /** The countryRestriction object contains information about the countries where a video is (or is not) viewable. */
  countryRestriction?: AccessPolicy;
  /** The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property. */
  regionRestriction?: VideoContentDetailsRegionRestriction;
  /** Specifies the ratings that the video received under various rating schemes. */
  contentRating?: ContentRating;
  /** The value of captions indicates whether the video has captions or not. */
  caption?: "true" | "false" | (string & {});
  /** The value of is_license_content indicates whether the video is licensed content. */
  licensedContent?: boolean;
  /** The value of dimension indicates whether the video is available in 3D or in 2D. */
  dimension?: string;
  /** Specifies the projection format of the video. */
  projection?: "rectangular" | "360" | (string & {});
}

export const VideoContentDetails: Schema.Codec<VideoContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasCustomThumbnail: Schema.optional(Schema.Boolean),
    definition: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    countryRestriction: Schema.optional(AccessPolicy),
    regionRestriction: Schema.optional(VideoContentDetailsRegionRestriction),
    contentRating: Schema.optional(ContentRating),
    caption: Schema.optional(Schema.String),
    licensedContent: Schema.optional(Schema.Boolean),
    dimension: Schema.optional(Schema.String),
    projection: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoContentDetails" });

export interface VideoPlayer {
  /** An <iframe> tag that embeds a player that will play the video. */
  embedHtml?: string;
  embedHeight?: string;
  /** The embed width */
  embedWidth?: string;
}

export const VideoPlayer: Schema.Codec<VideoPlayer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    embedHtml: Schema.optional(Schema.String),
    embedHeight: Schema.optional(Schema.String),
    embedWidth: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoPlayer" });

export interface VideoStatus {
  /** Indicates if the video contains altered or synthetic media. */
  containsSyntheticMedia?: boolean;
  /** The status of the uploaded video. */
  uploadStatus?:
    | "uploaded"
    | "processed"
    | "failed"
    | "rejected"
    | "deleted"
    | (string & {});
  /** The video's privacy status. */
  privacyStatus?: "public" | "unlisted" | "private" | (string & {});
  selfDeclaredMadeForKids?: boolean;
  /** This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update */
  publicStatsViewable?: boolean;
  /** This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed. */
  failureReason?:
    | "conversion"
    | "invalidFile"
    | "emptyFile"
    | "tooSmall"
    | "codec"
    | "uploadAborted"
    | (string & {});
  /** The video's license. @mutable youtube.videos.insert youtube.videos.update */
  license?: "youtube" | "creativeCommon" | (string & {});
  madeForKids?: boolean;
  /** This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected. */
  rejectionReason?:
    | "copyright"
    | "inappropriate"
    | "duplicate"
    | "termsOfUse"
    | "uploaderAccountSuspended"
    | "length"
    | "claim"
    | "uploaderAccountClosed"
    | "trademark"
    | "legal"
    | (string & {});
  /** The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private.. */
  publishAt?: string;
  /** This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update */
  embeddable?: boolean;
}

export const VideoStatus: Schema.Codec<VideoStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containsSyntheticMedia: Schema.optional(Schema.Boolean),
    uploadStatus: Schema.optional(Schema.String),
    privacyStatus: Schema.optional(Schema.String),
    selfDeclaredMadeForKids: Schema.optional(Schema.Boolean),
    publicStatsViewable: Schema.optional(Schema.Boolean),
    failureReason: Schema.optional(Schema.String),
    license: Schema.optional(Schema.String),
    madeForKids: Schema.optional(Schema.Boolean),
    rejectionReason: Schema.optional(Schema.String),
    publishAt: Schema.optional(Schema.String),
    embeddable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VideoStatus" });

export interface GeoPoint {
  /** Latitude in degrees. */
  latitude?: number;
  /** Longitude in degrees. */
  longitude?: number;
  /** Altitude above the reference ellipsoid, in meters. */
  altitude?: number;
}

export const GeoPoint: Schema.Codec<GeoPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
    altitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GeoPoint" });

export interface VideoRecordingDetails {
  /** The text description of the location where the video was recorded. */
  locationDescription?: string;
  /** The date and time when the video was recorded. */
  recordingDate?: string;
  /** The geolocation information associated with the video. */
  location?: GeoPoint;
}

export const VideoRecordingDetails: Schema.Codec<VideoRecordingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationDescription: Schema.optional(Schema.String),
    recordingDate: Schema.optional(Schema.String),
    location: Schema.optional(GeoPoint),
  }).annotate({ identifier: "VideoRecordingDetails" });

export interface VideoProcessingDetails {
  /** The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed. */
  processingFailureReason?:
    | "uploadFailed"
    | "transcodeFailed"
    | "streamingFailed"
    | "other"
    | (string & {});
  /** This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
  processingIssuesAvailability?: string;
  /** This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
  tagSuggestionsAvailability?: string;
  /** This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
  editorSuggestionsAvailability?: string;
  /** The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed. */
  processingStatus?:
    | "processing"
    | "succeeded"
    | "failed"
    | "terminated"
    | (string & {});
  /** The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video's processing status is processing. */
  processingProgress?: VideoProcessingDetailsProcessingProgress;
  /** This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request. */
  fileDetailsAvailability?: string;
  /** This value indicates whether thumbnail images have been generated for the video. */
  thumbnailsAvailability?: string;
}

export const VideoProcessingDetails: Schema.Codec<VideoProcessingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processingFailureReason: Schema.optional(Schema.String),
    processingIssuesAvailability: Schema.optional(Schema.String),
    tagSuggestionsAvailability: Schema.optional(Schema.String),
    editorSuggestionsAvailability: Schema.optional(Schema.String),
    processingStatus: Schema.optional(Schema.String),
    processingProgress: Schema.optional(
      VideoProcessingDetailsProcessingProgress,
    ),
    fileDetailsAvailability: Schema.optional(Schema.String),
    thumbnailsAvailability: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoProcessingDetails" });

export interface VideoSuggestions {
  /** A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track. */
  processingWarnings?: ReadonlyArray<
    | "unknownContainer"
    | "unknownVideoCodec"
    | "unknownAudioCodec"
    | "inconsistentResolution"
    | "hasEditlist"
    | "problematicVideoCodec"
    | "problematicAudioCodec"
    | "unsupportedVrStereoMode"
    | "unsupportedSphericalProjectionType"
    | "unsupportedHdrPixelFormat"
    | "unsupportedHdrColorMetadata"
    | "problematicHdrLookupTable"
    | (string & {})
  >;
  /** A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube. */
  tagSuggestions?: ReadonlyArray<VideoSuggestionsTagSuggestion>;
  /** A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed. */
  processingErrors?: ReadonlyArray<
    | "audioFile"
    | "imageFile"
    | "projectFile"
    | "notAVideoFile"
    | "docFile"
    | "archiveFile"
    | "unsupportedSpatialAudioLayout"
    | (string & {})
  >;
  /** A list of suggestions that may improve YouTube's ability to process the video. */
  processingHints?: ReadonlyArray<
    | "nonStreamableMov"
    | "sendBestQualityVideo"
    | "sphericalVideo"
    | "spatialAudio"
    | "vrVideo"
    | "hdrVideo"
    | (string & {})
  >;
  /** A list of video editing operations that might improve the video quality or playback experience of the uploaded video. */
  editorSuggestions?: ReadonlyArray<
    | "videoAutoLevels"
    | "videoStabilize"
    | "videoCrop"
    | "audioQuietAudioSwap"
    | (string & {})
  >;
}

export const VideoSuggestions: Schema.Codec<VideoSuggestions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processingWarnings: Schema.optional(Schema.Array(Schema.String)),
    tagSuggestions: Schema.optional(
      Schema.Array(VideoSuggestionsTagSuggestion),
    ),
    processingErrors: Schema.optional(Schema.Array(Schema.String)),
    processingHints: Schema.optional(Schema.Array(Schema.String)),
    editorSuggestions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VideoSuggestions" });

export interface VideoLiveStreamingDetails {
  /** The time that the broadcast is scheduled to begin. */
  scheduledStartTime?: string;
  /** The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely. */
  scheduledEndTime?: string;
  /** The time that the broadcast actually ended. This value will not be available until the broadcast is over. */
  actualEndTime?: string;
  /** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
  concurrentViewers?: string;
  /** The time that the broadcast actually started. This value will not be available until the broadcast begins. */
  actualStartTime?: string;
  /** The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page. */
  activeLiveChatId?: string;
}

export const VideoLiveStreamingDetails: Schema.Codec<VideoLiveStreamingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduledStartTime: Schema.optional(Schema.String),
    scheduledEndTime: Schema.optional(Schema.String),
    actualEndTime: Schema.optional(Schema.String),
    concurrentViewers: Schema.optional(Schema.String),
    actualStartTime: Schema.optional(Schema.String),
    activeLiveChatId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoLiveStreamingDetails" });

export interface Video {
  /** The statistics object contains statistics about the video. */
  statistics?: VideoStatistics;
  /** Age restriction details related to a video. This data can only be retrieved by the video owner. */
  ageGating?: VideoAgeGating;
  /** The projectDetails object contains information about the project specific video metadata. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
  projectDetails?: VideoProjectDetails;
  /** Etag of this resource. */
  etag?: string;
  /** The topicDetails object encapsulates information about Freebase topics associated with the video. */
  topicDetails?: VideoTopicDetails;
  /** The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner. */
  fileDetails?: VideoFileDetails;
  /** The ID that YouTube uses to uniquely identify the video. */
  id?: string;
  /** The contentDetails object contains information about the video content, including the length of the video and its aspect ratio. */
  contentDetails?: VideoContentDetails;
  paidProductPlacementDetails?: VideoPaidProductPlacementDetails;
  /** The snippet object contains basic details about the video, such as its title, description, and category. */
  snippet?: VideoSnippet;
  /** The monetizationDetails object encapsulates information about the monetization status of the video. */
  monetizationDetails?: VideoMonetizationDetails;
  /** The player object contains information that you would use to play the video in an embedded player. */
  player?: VideoPlayer;
  /** The localizations object contains localized versions of the basic details about the video, such as its title and description. */
  localizations?: Record<string, VideoLocalization>;
  /** The status object contains information about the video's uploading, processing, and privacy statuses. */
  status?: VideoStatus;
  /** The recordingDetails object encapsulates information about the location, date and address where the video was recorded. */
  recordingDetails?: VideoRecordingDetails;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#video". */
  kind?: string;
  /** The processingDetails object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video. The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner. */
  processingDetails?: VideoProcessingDetails;
  /** The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner. */
  suggestions?: VideoSuggestions;
  /** The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast. */
  liveStreamingDetails?: VideoLiveStreamingDetails;
}

export const Video: Schema.Codec<Video> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statistics: Schema.optional(VideoStatistics),
    ageGating: Schema.optional(VideoAgeGating),
    projectDetails: Schema.optional(VideoProjectDetails),
    etag: Schema.optional(Schema.String),
    topicDetails: Schema.optional(VideoTopicDetails),
    fileDetails: Schema.optional(VideoFileDetails),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(VideoContentDetails),
    paidProductPlacementDetails: Schema.optional(
      VideoPaidProductPlacementDetails,
    ),
    snippet: Schema.optional(VideoSnippet),
    monetizationDetails: Schema.optional(VideoMonetizationDetails),
    player: Schema.optional(VideoPlayer),
    localizations: Schema.optional(
      Schema.Record(Schema.String, VideoLocalization),
    ),
    status: Schema.optional(VideoStatus),
    recordingDetails: Schema.optional(VideoRecordingDetails),
    kind: Schema.optional(Schema.String),
    processingDetails: Schema.optional(VideoProcessingDetails),
    suggestions: Schema.optional(VideoSuggestions),
    liveStreamingDetails: Schema.optional(VideoLiveStreamingDetails),
  }).annotate({ identifier: "Video" });

export interface VideoListResponse {
  items?: ReadonlyArray<Video>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse". */
  kind?: string;
}

export const VideoListResponse: Schema.Codec<VideoListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Video)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoListResponse" });

export interface I18nRegionSnippet {
  /** The region code as a 2-letter ISO country code. */
  gl?: string;
  /** The human-readable name of the region. */
  name?: string;
}

export const I18nRegionSnippet: Schema.Codec<I18nRegionSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "I18nRegionSnippet" });

export interface I18nRegion {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The ID that YouTube uses to uniquely identify the i18n region. */
  id?: string;
  /** The snippet object contains basic details about the i18n region, such as region code and human-readable name. */
  snippet?: I18nRegionSnippet;
}

export const I18nRegion: Schema.Codec<I18nRegion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    snippet: Schema.optional(I18nRegionSnippet),
  }).annotate({ identifier: "I18nRegion" });

export interface LiveStreamContentDetails {
  /** The ingestion URL where the closed captions of this stream are sent. */
  closedCaptionsIngestionUrl?: string;
  /** Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream. */
  isReusable?: boolean;
}

export const LiveStreamContentDetails: Schema.Codec<LiveStreamContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    closedCaptionsIngestionUrl: Schema.optional(Schema.String),
    isReusable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LiveStreamContentDetails" });

export interface VideoStatsSnippet {
  /** Output only. The date and time that the video was uploaded. The property value is a [`google.protobuf.Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#timestamp) object. */
  publishTime?: string;
}

export const VideoStatsSnippet: Schema.Codec<VideoStatsSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoStatsSnippet" });

export interface VideoStatsStatistics {
  /** Output only. The number of times the video has been viewed. */
  viewCount?: string;
  /** Output only. The number of users who have indicated that they liked the video by giving it a positive rating. */
  likeCount?: string;
  /** Output only. The number of comments for the video. */
  commentCount?: string;
}

export const VideoStatsStatistics: Schema.Codec<VideoStatsStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewCount: Schema.optional(Schema.String),
    likeCount: Schema.optional(Schema.String),
    commentCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoStatsStatistics" });

export interface VideoStatsContentDetails {
  /** Output only. The length of the video. The property value is a [`google.protobuf.Duration`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) object. */
  duration?: string;
}

export const VideoStatsContentDetails: Schema.Codec<VideoStatsContentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoStatsContentDetails" });

export interface VideoStat {
  /** Output only. The VideoStatsSnippet object contains basic details about the video, such publish time. */
  snippet?: VideoStatsSnippet;
  /** Output only. The VideoStatsStatistics object contains statistics about the video. */
  statistics?: VideoStatsStatistics;
  /** Output only. Identifies what kind of resource this is. Value: the fixed string "youtube#videoStats". */
  kind?: string;
  /** Output only. The ID that YouTube uses to uniquely identify the video. */
  id?: string;
  /** Output only. The VideoStatsContentDetails object contains information about the video content, including the length of the video. */
  contentDetails?: VideoStatsContentDetails;
  /** Output only. Etag of this resource. */
  etag?: string;
}

export const VideoStat: Schema.Codec<VideoStat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(VideoStatsSnippet),
    statistics: Schema.optional(VideoStatsStatistics),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(VideoStatsContentDetails),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoStat" });

export interface RelatedEntity {
  entity?: Entity;
}

export const RelatedEntity: Schema.Codec<RelatedEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.optional(Entity),
  }).annotate({ identifier: "RelatedEntity" });

export interface Caption {
  /** The snippet object contains basic details about the caption. */
  snippet?: CaptionSnippet;
  /** The ID that YouTube uses to uniquely identify the caption track. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#caption". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const Caption: Schema.Codec<Caption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(CaptionSnippet),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Caption" });

export interface CaptionListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** A list of captions that match the request criteria. */
  items?: ReadonlyArray<Caption>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const CaptionListResponse: Schema.Codec<CaptionListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Caption)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "CaptionListResponse" });

export interface VideoAbuseReportReason {
  /** The `snippet` object contains basic details about the abuse report reason. */
  snippet?: VideoAbuseReportReasonSnippet;
  /** The ID of this abuse report reason. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`. */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const VideoAbuseReportReason: Schema.Codec<VideoAbuseReportReason> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(VideoAbuseReportReasonSnippet),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoAbuseReportReason" });

export interface LiveChatMessageListResponse {
  nextPageToken?: string;
  items?: ReadonlyArray<LiveChatMessage>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The amount of time the client should wait before polling again. */
  pollingIntervalMillis?: number;
  /** The date and time when the underlying stream went offline. */
  offlineAt?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse". */
  kind?: string;
  tokenPagination?: TokenPagination;
  /** Set when there is an active poll. */
  activePollItem?: LiveChatMessage;
  /** General pagination information. */
  pageInfo?: PageInfo;
}

export const LiveChatMessageListResponse: Schema.Codec<LiveChatMessageListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(LiveChatMessage)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    pollingIntervalMillis: Schema.optional(Schema.Number),
    offlineAt: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    tokenPagination: Schema.optional(TokenPagination),
    activePollItem: Schema.optional(LiveChatMessage),
    pageInfo: Schema.optional(PageInfo),
  }).annotate({ identifier: "LiveChatMessageListResponse" });

export interface BatchGetStatsResponse {
  /** The videos' stats information. */
  items?: ReadonlyArray<VideoStat>;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#batchGetStatsResponse". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const BatchGetStatsResponse: Schema.Codec<BatchGetStatsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(VideoStat)),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchGetStatsResponse" });

export interface VideoCategorySnippet {
  assignable?: boolean;
  /** The video category's title. */
  title?: string;
  /** The YouTube channel that created the video category. */
  channelId?: string;
}

export const VideoCategorySnippet: Schema.Codec<VideoCategorySnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assignable: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoCategorySnippet" });

export interface VideoCategory {
  /** The snippet object contains basic details about the video category, including its title. */
  snippet?: VideoCategorySnippet;
  /** The ID that YouTube uses to uniquely identify the video category. */
  id?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const VideoCategory: Schema.Codec<VideoCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(VideoCategorySnippet),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoCategory" });

export interface MembershipsDuration {
  /** The date and time when the user became a continuous member across all levels. */
  memberSince?: string;
  /** The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer). */
  memberTotalDurationMonths?: number;
}

export const MembershipsDuration: Schema.Codec<MembershipsDuration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberSince: Schema.optional(Schema.String),
    memberTotalDurationMonths: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MembershipsDuration" });

export interface MembershipsDetails {
  /** Display name for the highest level that the user has access to at the moment. */
  highestAccessibleLevelDisplayName?: string;
  /** Data about memberships duration without taking into consideration pricing levels. */
  membershipsDuration?: MembershipsDuration;
  /** Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase. */
  accessibleLevels?: ReadonlyArray<string>;
  /** Data about memberships duration on particular pricing levels. */
  membershipsDurationAtLevels?: ReadonlyArray<MembershipsDurationAtLevel>;
  /** Id of the highest level that the user has access to at the moment. */
  highestAccessibleLevel?: string;
}

export const MembershipsDetails: Schema.Codec<MembershipsDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highestAccessibleLevelDisplayName: Schema.optional(Schema.String),
    membershipsDuration: Schema.optional(MembershipsDuration),
    accessibleLevels: Schema.optional(Schema.Array(Schema.String)),
    membershipsDurationAtLevels: Schema.optional(
      Schema.Array(MembershipsDurationAtLevel),
    ),
    highestAccessibleLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipsDetails" });

export interface MemberSnippet {
  /** The id of the channel that's offering memberships. */
  creatorChannelId?: string;
  /** Details about the user's membership. */
  membershipsDetails?: MembershipsDetails;
  /** Details about the member. */
  memberDetails?: ChannelProfileDetails;
}

export const MemberSnippet: Schema.Codec<MemberSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creatorChannelId: Schema.optional(Schema.String),
    membershipsDetails: Schema.optional(MembershipsDetails),
    memberDetails: Schema.optional(ChannelProfileDetails),
  }).annotate({ identifier: "MemberSnippet" });

export interface Member {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#member". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The snippet object contains basic details about the member. */
  snippet?: MemberSnippet;
}

export const Member: Schema.Codec<Member> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    snippet: Schema.optional(MemberSnippet),
  }).annotate({ identifier: "Member" });

export interface MemberListResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse". */
  kind?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Etag of this resource. */
  etag?: string;
  pageInfo?: PageInfo;
  /** A list of members that match the request criteria. */
  items?: ReadonlyArray<Member>;
  tokenPagination?: TokenPagination;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
}

export const MemberListResponse: Schema.Codec<MemberListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    items: Schema.optional(Schema.Array(Member)),
    tokenPagination: Schema.optional(TokenPagination),
    visitorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemberListResponse" });

export interface InvideoTiming {
  /** Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds. */
  offsetMs?: string;
  /** Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default. */
  durationMs?: string;
  /** Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video. */
  type?: "offsetFromStart" | "offsetFromEnd" | (string & {});
}

export const InvideoTiming: Schema.Codec<InvideoTiming> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offsetMs: Schema.optional(Schema.String),
    durationMs: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "InvideoTiming" });

export interface TestItem {
  snippet?: TestItemTestItemSnippet;
  gaia?: string;
  featuredPart?: boolean;
  id?: string;
  /** Etag for the resource. See https://en.wikipedia.org/wiki/HTTP_ETag. */
  etag?: string;
}

export const TestItem: Schema.Codec<TestItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snippet: Schema.optional(TestItemTestItemSnippet),
    gaia: Schema.optional(Schema.String),
    featuredPart: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "TestItem" });

export interface AbuseType {
  id?: string;
}

export const AbuseType: Schema.Codec<AbuseType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AbuseType" });

export interface I18nLanguageListResponse {
  /** Etag of this resource. */
  etag?: string;
  /** A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource. */
  items?: ReadonlyArray<I18nLanguage>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
}

export const I18nLanguageListResponse: Schema.Codec<I18nLanguageListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(I18nLanguage)),
    visitorId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "I18nLanguageListResponse" });

export interface CommentListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse". */
  kind?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** A list of comments that match the request criteria. */
  items?: ReadonlyArray<Comment>;
  tokenPagination?: TokenPagination;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** General pagination information. */
  pageInfo?: PageInfo;
}

export const CommentListResponse: Schema.Codec<CommentListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Comment)),
    tokenPagination: Schema.optional(TokenPagination),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
  }).annotate({ identifier: "CommentListResponse" });

export interface IngestionInfo {
  /** This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. */
  rtmpsIngestionAddress?: string;
  /** The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME* */
  ingestionAddress?: string;
  /** The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL. */
  backupIngestionAddress?: string;
  /** The stream name that YouTube assigns to the video stream. */
  streamName?: string;
  /** This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. */
  rtmpsBackupIngestionAddress?: string;
}

export const IngestionInfo: Schema.Codec<IngestionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rtmpsIngestionAddress: Schema.optional(Schema.String),
    ingestionAddress: Schema.optional(Schema.String),
    backupIngestionAddress: Schema.optional(Schema.String),
    streamName: Schema.optional(Schema.String),
    rtmpsBackupIngestionAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestionInfo" });

export interface CdnSettings {
  /** The method or protocol used to transmit the video stream. */
  ingestionType?: "rtmp" | "dash" | "webrtc" | "hls" | (string & {});
  /** The frame rate of the inbound video data. */
  frameRate?: "30fps" | "60fps" | "variable" | (string & {});
  /** The format of the video stream that you are sending to Youtube. */
  format?: string;
  /** The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube. */
  ingestionInfo?: IngestionInfo;
  /** The resolution of the inbound video data. */
  resolution?:
    | "240p"
    | "360p"
    | "480p"
    | "720p"
    | "1080p"
    | "1440p"
    | "2160p"
    | "variable"
    | (string & {});
}

export const CdnSettings: Schema.Codec<CdnSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestionType: Schema.optional(Schema.String),
    frameRate: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    ingestionInfo: Schema.optional(IngestionInfo),
    resolution: Schema.optional(Schema.String),
  }).annotate({ identifier: "CdnSettings" });

export interface MembershipsLevelSnippet {
  /** The id of the channel that's offering channel memberships. */
  creatorChannelId?: string;
  /** Details about the pricing level. */
  levelDetails?: LevelDetails;
}

export const MembershipsLevelSnippet: Schema.Codec<MembershipsLevelSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    creatorChannelId: Schema.optional(Schema.String),
    levelDetails: Schema.optional(LevelDetails),
  }).annotate({ identifier: "MembershipsLevelSnippet" });

export interface MembershipsLevel {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The snippet object contains basic details about the level. */
  snippet?: MembershipsLevelSnippet;
  /** The ID that YouTube assigns to uniquely identify the memberships level. */
  id?: string;
}

export const MembershipsLevel: Schema.Codec<MembershipsLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    snippet: Schema.optional(MembershipsLevelSnippet),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipsLevel" });

export interface Cuepoint {
  /** The time when the cuepoint should be inserted by offset to the broadcast actual start time. */
  insertionOffsetTimeMs?: string;
  /** The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time. */
  walltimeMs?: string;
  /** The identifier for cuepoint resource. */
  id?: string;
  cueType?: "cueTypeUnspecified" | "cueTypeAd" | (string & {});
  /** The duration of this cuepoint. */
  durationSecs?: number;
  etag?: string;
}

export const Cuepoint: Schema.Codec<Cuepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insertionOffsetTimeMs: Schema.optional(Schema.String),
    walltimeMs: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    cueType: Schema.optional(Schema.String),
    durationSecs: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cuepoint" });

export interface VideoTrainability {
  /** The ID of the video. */
  videoId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#videoTrainability". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** Specifies who is allowed to train on the video. Valid values are: - a single string "all" - a single string "none" - a list of allowed parties */
  permitted?: ReadonlyArray<string>;
}

export const VideoTrainability: Schema.Codec<VideoTrainability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    permitted: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VideoTrainability" });

export interface MembershipsLevelListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** A list of pricing levels offered by a creator to the fans. */
  items?: ReadonlyArray<MembershipsLevel>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
}

export const MembershipsLevelListResponse: Schema.Codec<MembershipsLevelListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(MembershipsLevel)),
    visitorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipsLevelListResponse" });

export interface VideoCategoryListResponse {
  /** Etag of this resource. */
  etag?: string;
  /** A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource. */
  items?: ReadonlyArray<VideoCategory>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** General pagination information. */
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
}

export const VideoCategoryListResponse: Schema.Codec<VideoCategoryListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(VideoCategory)),
    visitorId: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    tokenPagination: Schema.optional(TokenPagination),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoCategoryListResponse" });

export interface SearchListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse". */
  kind?: string;
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** Pagination information for token pagination. */
  items?: ReadonlyArray<SearchResult>;
  /** The visitor ID identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  regionCode?: string;
}

export const SearchListResponse: Schema.Codec<SearchListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    prevPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(SearchResult)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchListResponse" });

export interface VideoRating {
  /** Rating of a video. */
  rating?: "none" | "like" | "dislike" | (string & {});
  /** The ID that YouTube uses to uniquely identify the video. */
  videoId?: string;
}

export const VideoRating: Schema.Codec<VideoRating> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rating: Schema.optional(Schema.String),
    videoId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoRating" });

export interface VideoGetRatingResponse {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** A list of ratings that match the request criteria. */
  items?: ReadonlyArray<VideoRating>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
}

export const VideoGetRatingResponse: Schema.Codec<VideoGetRatingResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(VideoRating)),
    visitorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoGetRatingResponse" });

export interface AbuseReport {
  abuseTypes?: ReadonlyArray<AbuseType>;
  subject?: Entity;
  description?: string;
  relatedEntities?: ReadonlyArray<RelatedEntity>;
}

export const AbuseReport: Schema.Codec<AbuseReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    abuseTypes: Schema.optional(Schema.Array(AbuseType)),
    subject: Schema.optional(Entity),
    description: Schema.optional(Schema.String),
    relatedEntities: Schema.optional(Schema.Array(RelatedEntity)),
  }).annotate({ identifier: "AbuseReport" });

export interface SuperChatEventListResponse {
  /** A list of Super Chat purchases that match the request criteria. */
  items?: ReadonlyArray<SuperChatEvent>;
  tokenPagination?: TokenPagination;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  pageInfo?: PageInfo;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse". */
  kind?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
}

export const SuperChatEventListResponse: Schema.Codec<SuperChatEventListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(SuperChatEvent)),
    tokenPagination: Schema.optional(TokenPagination),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SuperChatEventListResponse" });

export interface VideoAbuseReport {
  /** The ID that YouTube uses to uniquely identify the video. */
  videoId?: string;
  /** The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason. */
  secondaryReasonId?: string;
  /** Additional comments regarding the abuse report. */
  comments?: string;
  /** The language that the content was viewed in. */
  language?: string;
  /** The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID. */
  reasonId?: string;
}

export const VideoAbuseReport: Schema.Codec<VideoAbuseReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoId: Schema.optional(Schema.String),
    secondaryReasonId: Schema.optional(Schema.String),
    comments: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    reasonId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoAbuseReport" });

export interface PlaylistListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse". */
  kind?: string;
  tokenPagination?: TokenPagination;
  /** General pagination information. */
  pageInfo?: PageInfo;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** A list of playlists that match the request criteria */
  items?: ReadonlyArray<Playlist>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const PlaylistListResponse: Schema.Codec<PlaylistListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    prevPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Playlist)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlaylistListResponse" });

export interface ThirdPartyLinkListResponse {
  items?: ReadonlyArray<ThirdPartyLink>;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse". */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
}

export const ThirdPartyLinkListResponse: Schema.Codec<ThirdPartyLinkListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(ThirdPartyLink)),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThirdPartyLinkListResponse" });

export interface VideoAbuseReportReasonListResponse {
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`. */
  kind?: string;
  /** Etag of this resource. */
  etag?: string;
  /** A list of valid abuse reasons that are used with `video.ReportAbuse`. */
  items?: ReadonlyArray<VideoAbuseReportReason>;
  /** The `visitorId` identifies the visitor. */
  visitorId?: string;
}

export const VideoAbuseReportReasonListResponse: Schema.Codec<VideoAbuseReportReasonListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(VideoAbuseReportReason)),
    visitorId: Schema.optional(Schema.String),
  }).annotate({ identifier: "VideoAbuseReportReasonListResponse" });

export interface InvideoBranding {
  /** The spatial position within the video where the branding watermark will be displayed. */
  position?: InvideoPosition;
  /** The bytes the uploaded image. Only used in api to youtube communication. */
  imageBytes?: string;
  /** The channel to which this branding links. If not present it defaults to the current channel. */
  targetChannelId?: string;
  /** The temporal position within the video where watermark will be displayed. */
  timing?: InvideoTiming;
  /** The url of the uploaded image. Only used in apiary to api communication. */
  imageUrl?: string;
}

export const InvideoBranding: Schema.Codec<InvideoBranding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(InvideoPosition),
    imageBytes: Schema.optional(Schema.String),
    targetChannelId: Schema.optional(Schema.String),
    timing: Schema.optional(InvideoTiming),
    imageUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "InvideoBranding" });

export interface SubscriptionListResponse {
  tokenPagination?: TokenPagination;
  pageInfo?: PageInfo;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse". */
  kind?: string;
  /** A list of subscriptions that match the request criteria. */
  items?: ReadonlyArray<Subscription>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
}

export const SubscriptionListResponse: Schema.Codec<SubscriptionListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenPagination: Schema.optional(TokenPagination),
    pageInfo: Schema.optional(PageInfo),
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Subscription)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SubscriptionListResponse" });

export interface ChannelBannerResource {
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource". */
  kind?: string;
  etag?: string;
  /** The URL of this banner image. */
  url?: string;
}

export const ChannelBannerResource: Schema.Codec<ChannelBannerResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelBannerResource" });

export interface LiveStreamStatus {
  /** The health status of the stream. */
  healthStatus?: LiveStreamHealthStatus;
  streamStatus?:
    | "created"
    | "ready"
    | "active"
    | "inactive"
    | "error"
    | (string & {});
}

export const LiveStreamStatus: Schema.Codec<LiveStreamStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthStatus: Schema.optional(LiveStreamHealthStatus),
    streamStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveStreamStatus" });

export interface LiveStreamSnippet {
  /** The date and time that the stream was created. */
  publishedAt?: string;
  /** The stream's title. The value must be between 1 and 128 characters long. */
  title?: string;
  /** The ID that YouTube uses to uniquely identify the channel that is transmitting the stream. */
  channelId?: string;
  /** The stream's description. The value cannot be longer than 10000 characters. */
  description?: string;
  isDefaultStream?: boolean;
}

export const LiveStreamSnippet: Schema.Codec<LiveStreamSnippet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishedAt: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    isDefaultStream: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LiveStreamSnippet" });

export interface LiveStream {
  /** The ID that YouTube assigns to uniquely identify the stream. */
  id?: string;
  /** The content_details object contains information about the stream, including the closed captions ingestion URL. */
  contentDetails?: LiveStreamContentDetails;
  /** Etag of this resource. */
  etag?: string;
  /** The status object contains information about live stream's status. */
  status?: LiveStreamStatus;
  /** The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube. */
  cdn?: CdnSettings;
  /** The snippet object contains basic details about the stream, including its channel, title, and description. */
  snippet?: LiveStreamSnippet;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream". */
  kind?: string;
}

export const LiveStream: Schema.Codec<LiveStream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    contentDetails: Schema.optional(LiveStreamContentDetails),
    etag: Schema.optional(Schema.String),
    status: Schema.optional(LiveStreamStatus),
    cdn: Schema.optional(CdnSettings),
    snippet: Schema.optional(LiveStreamSnippet),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "LiveStream" });

export interface LiveStreamListResponse {
  /** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
  nextPageToken?: string;
  /** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
  prevPageToken?: string;
  /** Etag of this resource. */
  etag?: string;
  /** A list of live streams that match the request criteria. */
  items?: ReadonlyArray<LiveStream>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
}

export const LiveStreamListResponse: Schema.Codec<LiveStreamListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(LiveStream)),
    visitorId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    pageInfo: Schema.optional(PageInfo),
    tokenPagination: Schema.optional(TokenPagination),
  }).annotate({ identifier: "LiveStreamListResponse" });

export interface ThumbnailSetResponse {
  /** A list of thumbnails. */
  items?: ReadonlyArray<ThumbnailDetails>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse". */
  kind?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
}

export const ThumbnailSetResponse: Schema.Codec<ThumbnailSetResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(ThumbnailDetails)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThumbnailSetResponse" });

export interface I18nRegionListResponse {
  /** A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource. */
  items?: ReadonlyArray<I18nRegion>;
  /** The visitorId identifies the visitor. */
  visitorId?: string;
  /** Etag of this resource. */
  etag?: string;
  /** Serialized EventId of the request which produced this response. */
  eventId?: string;
  /** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse". */
  kind?: string;
}

export const I18nRegionListResponse: Schema.Codec<I18nRegionListResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(I18nRegion)),
    visitorId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "I18nRegionListResponse" });

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

export interface InsertAbuseReportsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. */
  part: string[];
  /** Request body */
  body?: AbuseReport;
}

export const InsertAbuseReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(AbuseReport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "youtube/v3/abuseReports", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<InsertAbuseReportsRequest>;

export type InsertAbuseReportsResponse = AbuseReport;
export const InsertAbuseReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AbuseReport;

export type InsertAbuseReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertAbuseReports: API.OperationMethod<
  InsertAbuseReportsRequest,
  InsertAbuseReportsResponse,
  InsertAbuseReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertAbuseReportsRequest,
  output: InsertAbuseReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListI18nLanguagesRequest {
  hl?: string;
  /** The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet. */
  part: string[];
}

export const ListI18nLanguagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/i18nLanguages" }),
    svc,
  ) as unknown as Schema.Codec<ListI18nLanguagesRequest>;

export type ListI18nLanguagesResponse = I18nLanguageListResponse;
export const ListI18nLanguagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ I18nLanguageListResponse;

export type ListI18nLanguagesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listI18nLanguages: API.OperationMethod<
  ListI18nLanguagesRequest,
  ListI18nLanguagesResponse,
  ListI18nLanguagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListI18nLanguagesRequest,
  output: ListI18nLanguagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertChannelBannersRequest {
  /** Unused, channel_id is currently derived from the security context of the requestor. */
  channelId?: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: ChannelBannerResource;
}

export const InsertChannelBannersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(ChannelBannerResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/channelBanners/insert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertChannelBannersRequest>;

export type InsertChannelBannersResponse = ChannelBannerResource;
export const InsertChannelBannersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChannelBannerResource;

export type InsertChannelBannersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertChannelBanners: API.OperationMethod<
  InsertChannelBannersRequest,
  InsertChannelBannersResponse,
  InsertChannelBannersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertChannelBannersRequest,
  output: InsertChannelBannersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMembersRequest {
  /** Parameter that specifies which channel members to return. */
  mode?: "listMembersModeUnknown" | "updates" | "all_current" | (string & {});
  /** The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet. */
  part: string[];
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response. */
  filterByMemberChannelId?: string;
  /** Filter members in the results set to the ones that have access to a level. */
  hasAccessToLevel?: string;
}

export const ListMembersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.String).pipe(T.HttpQuery("mode")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  filterByMemberChannelId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("filterByMemberChannelId"),
  ),
  hasAccessToLevel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("hasAccessToLevel"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/members" }),
  svc,
) as unknown as Schema.Codec<ListMembersRequest>;

export type ListMembersResponse = MemberListResponse;
export const ListMembersResponse =
  /*@__PURE__*/ /*#__PURE__*/ MemberListResponse;

export type ListMembersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of members that match the request criteria for a channel. */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMembersRequest,
  output: ListMembersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListSearchRequest {
  /** Filter on embeddable videos. */
  videoEmbeddable?:
    | "videoEmbeddableUnspecified"
    | "any"
    | "true"
    | (string & {});
  /** Filter on the presence of captions on the videos. */
  videoCaption?:
    | "videoCaptionUnspecified"
    | "any"
    | "closedCaption"
    | "none"
    | (string & {});
  /** Textual search terms to match. */
  q?: string;
  /** Filter on distance from the location (specified above). */
  locationRadius?: string;
  /** Filter on the license of the videos. */
  videoLicense?: "any" | "youtube" | "creativeCommon" | (string & {});
  /** Search owned by a content owner. */
  forContentOwner?: boolean;
  /** Display the content as seen by viewers in this country. */
  regionCode?: string;
  /** Filter on resources belonging to this channelId. (Force TAP rebuild) */
  channelId?: string;
  videoPaidProductPlacement?:
    | "videoPaidProductPlacementUnspecified"
    | "any"
    | "true"
    | (string & {});
  /** Restrict results to a particular topic. */
  topicId?: string;
  /** Search for the private videos of the authenticated user. */
  forMine?: boolean;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Restrict the search to only retrieve videos uploaded using the project id of the authenticated user. */
  forDeveloper?: boolean;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** Filter on location of the video */
  location?: string;
  /** Filter on 3d videos. */
  videoDimension?: "any" | "2d" | "3d" | (string & {});
  /** Add a filter on the channel search. */
  channelType?: "channelTypeUnspecified" | "any" | "show" | (string & {});
  /** Filter on syndicated videos. */
  videoSyndicated?:
    | "videoSyndicatedUnspecified"
    | "any"
    | "true"
    | (string & {});
  /** Restrict results to a particular set of resource types from One Platform. */
  type?: string[];
  /** Filter on the definition of the videos. */
  videoDefinition?: "any" | "standard" | "high" | (string & {});
  /** Filter on resources published before this date. */
  publishedBefore?: string;
  /** Return results relevant to this language. */
  relevanceLanguage?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** Sort order of the results. */
  order?:
    | "searchSortUnspecified"
    | "date"
    | "rating"
    | "viewCount"
    | "relevance"
    | "title"
    | "videoCount"
    | (string & {});
  /** Filter on videos in a specific category. */
  videoCategoryId?: string;
  /** Filter on videos of a specific type. */
  videoType?:
    | "videoTypeUnspecified"
    | "any"
    | "movie"
    | "episode"
    | (string & {});
  /** Indicates whether the search results should include restricted content as well as standard content. */
  safeSearch?:
    | "safeSearchSettingUnspecified"
    | "none"
    | "moderate"
    | "strict"
    | (string & {});
  /** The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet. */
  part: string[];
  /** Filter on the duration of the videos. */
  videoDuration?:
    | "videoDurationUnspecified"
    | "any"
    | "short"
    | "medium"
    | "long"
    | (string & {});
  /** Filter on resources published after this date. */
  publishedAfter?: string;
  /** Filter on the livestream status of the videos. */
  eventType?: "none" | "upcoming" | "live" | "completed" | (string & {});
}

export const ListSearchRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  videoEmbeddable: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoEmbeddable"),
  ),
  videoCaption: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoCaption"),
  ),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  locationRadius: Schema.optional(Schema.String).pipe(
    T.HttpQuery("locationRadius"),
  ),
  videoLicense: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoLicense"),
  ),
  forContentOwner: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("forContentOwner"),
  ),
  regionCode: Schema.optional(Schema.String).pipe(T.HttpQuery("regionCode")),
  channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
  videoPaidProductPlacement: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoPaidProductPlacement"),
  ),
  topicId: Schema.optional(Schema.String).pipe(T.HttpQuery("topicId")),
  forMine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("forMine")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  forDeveloper: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("forDeveloper"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
  videoDimension: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoDimension"),
  ),
  channelType: Schema.optional(Schema.String).pipe(T.HttpQuery("channelType")),
  videoSyndicated: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoSyndicated"),
  ),
  type: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("type")),
  videoDefinition: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoDefinition"),
  ),
  publishedBefore: Schema.optional(Schema.String).pipe(
    T.HttpQuery("publishedBefore"),
  ),
  relevanceLanguage: Schema.optional(Schema.String).pipe(
    T.HttpQuery("relevanceLanguage"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
  videoCategoryId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoCategoryId"),
  ),
  videoType: Schema.optional(Schema.String).pipe(T.HttpQuery("videoType")),
  safeSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("safeSearch")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  videoDuration: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoDuration"),
  ),
  publishedAfter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("publishedAfter"),
  ),
  eventType: Schema.optional(Schema.String).pipe(T.HttpQuery("eventType")),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/search" }),
  svc,
) as unknown as Schema.Codec<ListSearchRequest>;

export type ListSearchResponse = SearchListResponse;
export const ListSearchResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchListResponse;

export type ListSearchError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of search resources */
export const listSearch: API.PaginatedOperationMethod<
  ListSearchRequest,
  ListSearchResponse,
  ListSearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSearchRequest,
  output: ListSearchResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListMembershipsLevelsRequest {
  /** The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet. */
  part: string[];
}

export const ListMembershipsLevelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/membershipsLevels" }),
    svc,
  ) as unknown as Schema.Codec<ListMembershipsLevelsRequest>;

export type ListMembershipsLevelsResponse = MembershipsLevelListResponse;
export const ListMembershipsLevelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MembershipsLevelListResponse;

export type ListMembershipsLevelsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of all pricing levels offered by a creator to the fans. */
export const listMembershipsLevels: API.OperationMethod<
  ListMembershipsLevelsRequest,
  ListMembershipsLevelsResponse,
  ListMembershipsLevelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMembershipsLevelsRequest,
  output: ListMembershipsLevelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetWatermarksRequest {
  channelId: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: InvideoBranding;
}

export const SetWatermarksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channelId: Schema.String.pipe(T.HttpQuery("channelId")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  body: Schema.optional(InvideoBranding).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/watermarks/set", hasBody: true }),
  svc,
) as unknown as Schema.Codec<SetWatermarksRequest>;

export interface SetWatermarksResponse {}
export const SetWatermarksResponse: Schema.Codec<SetWatermarksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<SetWatermarksResponse>;

export type SetWatermarksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows upload of watermark image and setting it for a channel. */
export const setWatermarks: API.OperationMethod<
  SetWatermarksRequest,
  SetWatermarksResponse,
  SetWatermarksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetWatermarksRequest,
  output: SetWatermarksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnsetWatermarksRequest {
  channelId: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const UnsetWatermarksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    channelId: Schema.String.pipe(T.HttpQuery("channelId")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "youtube/v3/watermarks/unset",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UnsetWatermarksRequest>;

export interface UnsetWatermarksResponse {}
export const UnsetWatermarksResponse: Schema.Codec<UnsetWatermarksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<UnsetWatermarksResponse>;

export type UnsetWatermarksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows removal of channel watermark. */
export const unsetWatermarks: API.OperationMethod<
  UnsetWatermarksRequest,
  UnsetWatermarksResponse,
  UnsetWatermarksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnsetWatermarksRequest,
  output: UnsetWatermarksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StreamYoutubeV3LiveChatMessagesRequest {
  /** The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails. */
  part?: string[];
  /** Specifies the localization language in which the system messages should be returned. */
  hl?: string;
  /** The id of the live chat for which comments should be returned. */
  liveChatId?: string;
  /** Specifies the size of the profile image that should be returned for each user. */
  profileImageSize?: number;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC. */
  maxResults?: number;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved. */
  pageToken?: string;
}

export const StreamYoutubeV3LiveChatMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    liveChatId: Schema.optional(Schema.String).pipe(T.HttpQuery("liveChatId")),
    profileImageSize: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("profileImageSize"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/liveChat/messages/stream" }),
    svc,
  ) as unknown as Schema.Codec<StreamYoutubeV3LiveChatMessagesRequest>;

export type StreamYoutubeV3LiveChatMessagesResponse =
  LiveChatMessageListResponse;
export const StreamYoutubeV3LiveChatMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatMessageListResponse;

export type StreamYoutubeV3LiveChatMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Allows a user to load live chat through a server-streamed RPC. */
export const streamYoutubeV3LiveChatMessages: API.PaginatedOperationMethod<
  StreamYoutubeV3LiveChatMessagesRequest,
  StreamYoutubeV3LiveChatMessagesResponse,
  StreamYoutubeV3LiveChatMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: StreamYoutubeV3LiveChatMessagesRequest,
  output: StreamYoutubeV3LiveChatMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertLiveChatModeratorsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet. */
  part: string[];
  /** Request body */
  body?: LiveChatModerator;
}

export const InsertLiveChatModeratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(LiveChatModerator).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveChat/moderators",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertLiveChatModeratorsRequest>;

export type InsertLiveChatModeratorsResponse = LiveChatModerator;
export const InsertLiveChatModeratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatModerator;

export type InsertLiveChatModeratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertLiveChatModerators: API.OperationMethod<
  InsertLiveChatModeratorsRequest,
  InsertLiveChatModeratorsResponse,
  InsertLiveChatModeratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLiveChatModeratorsRequest,
  output: InsertLiveChatModeratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteLiveChatModeratorsRequest {
  id: string;
}

export const DeleteLiveChatModeratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/liveChat/moderators" }),
    svc,
  ) as unknown as Schema.Codec<DeleteLiveChatModeratorsRequest>;

export interface DeleteLiveChatModeratorsResponse {}
export const DeleteLiveChatModeratorsResponse: Schema.Codec<DeleteLiveChatModeratorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteLiveChatModeratorsResponse>;

export type DeleteLiveChatModeratorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a chat moderator. */
export const deleteLiveChatModerators: API.OperationMethod<
  DeleteLiveChatModeratorsRequest,
  DeleteLiveChatModeratorsResponse,
  DeleteLiveChatModeratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLiveChatModeratorsRequest,
  output: DeleteLiveChatModeratorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListLiveChatModeratorsRequest {
  /** The id of the live chat for which moderators should be returned. */
  liveChatId: string;
  /** The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet. */
  part: string[];
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
}

export const ListLiveChatModeratorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    liveChatId: Schema.String.pipe(T.HttpQuery("liveChatId")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/liveChat/moderators" }),
    svc,
  ) as unknown as Schema.Codec<ListLiveChatModeratorsRequest>;

export type ListLiveChatModeratorsResponse = LiveChatModeratorListResponse;
export const ListLiveChatModeratorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatModeratorListResponse;

export type ListLiveChatModeratorsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listLiveChatModerators: API.PaginatedOperationMethod<
  ListLiveChatModeratorsRequest,
  ListLiveChatModeratorsResponse,
  ListLiveChatModeratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLiveChatModeratorsRequest,
  output: ListLiveChatModeratorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdateCommentsRequest {
  /** The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update. */
  part: string[];
  /** Request body */
  body?: Comment;
}

export const UpdateCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  body: Schema.optional(Comment).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "youtube/v3/comments", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdateCommentsRequest>;

export type UpdateCommentsResponse = Comment;
export const UpdateCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type UpdateCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updateComments: API.OperationMethod<
  UpdateCommentsRequest,
  UpdateCommentsResponse,
  UpdateCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCommentsRequest,
  output: UpdateCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkAsSpamCommentsRequest {
  /** Flags the comments with the given IDs as spam in the caller's opinion. */
  id: string[];
}

export const MarkAsSpamCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Array(Schema.String).pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/comments/markAsSpam",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MarkAsSpamCommentsRequest>;

export interface MarkAsSpamCommentsResponse {}
export const MarkAsSpamCommentsResponse: Schema.Codec<MarkAsSpamCommentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<MarkAsSpamCommentsResponse>;

export type MarkAsSpamCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Expresses the caller's opinion that one or more comments should be flagged as spam. */
export const markAsSpamComments: API.OperationMethod<
  MarkAsSpamCommentsRequest,
  MarkAsSpamCommentsResponse,
  MarkAsSpamCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAsSpamCommentsRequest,
  output: MarkAsSpamCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetModerationStatusCommentsRequest {
  /** Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'. */
  moderationStatus:
    | "published"
    | "heldForReview"
    | "likelySpam"
    | "rejected"
    | (string & {});
  /** Modifies the moderation status of the comments with the given IDs */
  id: string[];
  /** If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED. */
  banAuthor?: boolean;
}

export const SetModerationStatusCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moderationStatus: Schema.String.pipe(T.HttpQuery("moderationStatus")),
    id: Schema.Array(Schema.String).pipe(T.HttpQuery("id")),
    banAuthor: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("banAuthor")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/comments/setModerationStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetModerationStatusCommentsRequest>;

export interface SetModerationStatusCommentsResponse {}
export const SetModerationStatusCommentsResponse: Schema.Codec<SetModerationStatusCommentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<SetModerationStatusCommentsResponse>;

export type SetModerationStatusCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the moderation status of one or more comments. */
export const setModerationStatusComments: API.OperationMethod<
  SetModerationStatusCommentsRequest,
  SetModerationStatusCommentsResponse,
  SetModerationStatusCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetModerationStatusCommentsRequest,
  output: SetModerationStatusCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCommentsRequest {
  /** Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future. */
  parentId?: string;
  /** The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include. */
  part: string[];
  /** The requested text format for the returned comments. */
  textFormat?: "textFormatUnspecified" | "html" | "plainText" | (string & {});
  /** Returns the comments with the given IDs for One Platform. */
  id?: string[];
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
}

export const ListCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parentId: Schema.optional(Schema.String).pipe(T.HttpQuery("parentId")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  textFormat: Schema.optional(Schema.String).pipe(T.HttpQuery("textFormat")),
  id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/comments" }),
  svc,
) as unknown as Schema.Codec<ListCommentsRequest>;

export type ListCommentsResponse = CommentListResponse;
export const ListCommentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommentListResponse;

export type ListCommentsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listComments: API.PaginatedOperationMethod<
  ListCommentsRequest,
  ListCommentsResponse,
  ListCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCommentsRequest,
  output: ListCommentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertCommentsRequest {
  /** The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. */
  part: string[];
  /** Request body */
  body?: Comment;
}

export const InsertCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  body: Schema.optional(Comment).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/comments", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertCommentsRequest>;

export type InsertCommentsResponse = Comment;
export const InsertCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type InsertCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertComments: API.OperationMethod<
  InsertCommentsRequest,
  InsertCommentsResponse,
  InsertCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCommentsRequest,
  output: InsertCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteCommentsRequest {
  id: string;
}

export const DeleteCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpQuery("id")),
}).pipe(
  T.Http({ method: "DELETE", path: "youtube/v3/comments" }),
  svc,
) as unknown as Schema.Codec<DeleteCommentsRequest>;

export interface DeleteCommentsResponse {}
export const DeleteCommentsResponse: Schema.Codec<DeleteCommentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteCommentsResponse>;

export type DeleteCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deleteComments: API.OperationMethod<
  DeleteCommentsRequest,
  DeleteCommentsResponse,
  DeleteCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCommentsRequest,
  output: DeleteCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListVideoCategoriesRequest {
  /** Returns the video categories with the given IDs for Stubby or Apiary. */
  id?: string[];
  regionCode?: string;
  hl?: string;
  /** The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet. */
  part: string[];
}

export const ListVideoCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    regionCode: Schema.optional(Schema.String).pipe(T.HttpQuery("regionCode")),
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/videoCategories" }),
    svc,
  ) as unknown as Schema.Codec<ListVideoCategoriesRequest>;

export type ListVideoCategoriesResponse = VideoCategoryListResponse;
export const ListVideoCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ VideoCategoryListResponse;

export type ListVideoCategoriesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listVideoCategories: API.OperationMethod<
  ListVideoCategoriesRequest,
  ListVideoCategoriesResponse,
  ListVideoCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVideoCategoriesRequest,
  output: ListVideoCategoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdatePlaylistsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: Playlist;
}

export const UpdatePlaylistsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    body: Schema.optional(Playlist).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({ method: "PUT", path: "youtube/v3/playlists", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdatePlaylistsRequest>;

export type UpdatePlaylistsResponse = Playlist;
export const UpdatePlaylistsResponse = /*@__PURE__*/ /*#__PURE__*/ Playlist;

export type UpdatePlaylistsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updatePlaylists: API.OperationMethod<
  UpdatePlaylistsRequest,
  UpdatePlaylistsResponse,
  UpdatePlaylistsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlaylistsRequest,
  output: UpdatePlaylistsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPlaylistsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: Playlist;
}

export const InsertPlaylistsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(Playlist).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({ method: "POST", path: "youtube/v3/playlists", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertPlaylistsRequest>;

export type InsertPlaylistsResponse = Playlist;
export const InsertPlaylistsResponse = /*@__PURE__*/ /*#__PURE__*/ Playlist;

export type InsertPlaylistsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertPlaylists: API.OperationMethod<
  InsertPlaylistsRequest,
  InsertPlaylistsResponse,
  InsertPlaylistsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlaylistsRequest,
  output: InsertPlaylistsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePlaylistsRequest {
  id: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const DeletePlaylistsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.HttpQuery("id")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  },
).pipe(
  T.Http({ method: "DELETE", path: "youtube/v3/playlists" }),
  svc,
) as unknown as Schema.Codec<DeletePlaylistsRequest>;

export interface DeletePlaylistsResponse {}
export const DeletePlaylistsResponse: Schema.Codec<DeletePlaylistsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeletePlaylistsResponse>;

export type DeletePlaylistsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deletePlaylists: API.OperationMethod<
  DeletePlaylistsRequest,
  DeletePlaylistsResponse,
  DeletePlaylistsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePlaylistsRequest,
  output: DeletePlaylistsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlaylistsRequest {
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** Return the playlists owned by the authenticated user. */
  mine?: boolean;
  /** Return the playlists owned by the specified channel ID. */
  channelId?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Return content in specified language */
  hl?: string;
  /** Return the playlists with the given IDs for Stubby or Apiary. */
  id?: string[];
}

export const ListPlaylistsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwnerChannel"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
  channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
  id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/playlists" }),
  svc,
) as unknown as Schema.Codec<ListPlaylistsRequest>;

export type ListPlaylistsResponse = PlaylistListResponse;
export const ListPlaylistsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistListResponse;

export type ListPlaylistsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listPlaylists: API.PaginatedOperationMethod<
  ListPlaylistsRequest,
  ListPlaylistsResponse,
  ListPlaylistsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlaylistsRequest,
  output: ListPlaylistsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListChannelsRequest {
  /** Return the channels managed by the authenticated user. */
  managedByMe?: boolean;
  /** Return the channels within the specified guide category ID. */
  categoryId?: string;
  /** The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Return the channel associated with a YouTube username. */
  forUsername?: string;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** Return the ids of channels owned by the authenticated user. */
  mine?: boolean;
  /** Return the channel associated with a YouTube handle. */
  forHandle?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** Return the channels with the specified IDs. */
  id?: string[];
  /** Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX). */
  hl?: string;
  /** Return the channels subscribed to the authenticated user */
  mySubscribers?: boolean;
}

export const ListChannelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  managedByMe: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("managedByMe")),
  categoryId: Schema.optional(Schema.String).pipe(T.HttpQuery("categoryId")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  forUsername: Schema.optional(Schema.String).pipe(T.HttpQuery("forUsername")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
  forHandle: Schema.optional(Schema.String).pipe(T.HttpQuery("forHandle")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
  hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
  mySubscribers: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("mySubscribers"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/channels" }),
  svc,
) as unknown as Schema.Codec<ListChannelsRequest>;

export type ListChannelsResponse = ChannelListResponse;
export const ListChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChannelListResponse;

export type ListChannelsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listChannels: API.PaginatedOperationMethod<
  ListChannelsRequest,
  ListChannelsResponse,
  ListChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListChannelsRequest,
  output: ListChannelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdateChannelsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. */
  part: string[];
  /** The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: Channel;
}

export const UpdateChannelsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  body: Schema.optional(Channel).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "youtube/v3/channels", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdateChannelsRequest>;

export type UpdateChannelsResponse = Channel;
export const UpdateChannelsResponse = /*@__PURE__*/ /*#__PURE__*/ Channel;

export type UpdateChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updateChannels: API.OperationMethod<
  UpdateChannelsRequest,
  UpdateChannelsResponse,
  UpdateChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateChannelsRequest,
  output: UpdateChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateVideosRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: Video;
}

export const UpdateVideosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  body: Schema.optional(Video).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "youtube/v3/videos", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdateVideosRequest>;

export type UpdateVideosResponse = Video;
export const UpdateVideosResponse = /*@__PURE__*/ /*#__PURE__*/ Video;

export type UpdateVideosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updateVideos: API.OperationMethod<
  UpdateVideosRequest,
  UpdateVideosResponse,
  UpdateVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateVideosRequest,
  output: UpdateVideosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetRatingVideosRequest {
  id: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const GetRatingVideosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.Array(Schema.String).pipe(T.HttpQuery("id")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "youtube/v3/videos/getRating" }),
  svc,
) as unknown as Schema.Codec<GetRatingVideosRequest>;

export type GetRatingVideosResponse = VideoGetRatingResponse;
export const GetRatingVideosResponse =
  /*@__PURE__*/ /*#__PURE__*/ VideoGetRatingResponse;

export type GetRatingVideosError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the ratings that the authorized user gave to a list of specified videos. */
export const getRatingVideos: API.OperationMethod<
  GetRatingVideosRequest,
  GetRatingVideosResponse,
  GetRatingVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRatingVideosRequest,
  output: GetRatingVideosResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVideosRequest {
  maxHeight?: number;
  /** Return the player with maximum height specified in */
  maxWidth?: number;
  /** The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter. */
  pageToken?: string;
  locale?: string;
  /** Use chart that is specific to the specified video category */
  videoCategoryId?: string;
  /** Return videos with the given ids. */
  id?: string[];
  /** Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX). */
  hl?: string;
  /** Use a chart that is specific to the specified region */
  regionCode?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter. */
  maxResults?: number;
  /** Return the videos that are in the specified chart. */
  chart?: "chartUnspecified" | "mostPopular" | (string & {});
  /** Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE. */
  myRating?: "none" | "like" | "dislike" | (string & {});
}

export const ListVideosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxHeight: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxHeight")),
  maxWidth: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxWidth")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
  videoCategoryId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("videoCategoryId"),
  ),
  id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
  hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
  regionCode: Schema.optional(Schema.String).pipe(T.HttpQuery("regionCode")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  chart: Schema.optional(Schema.String).pipe(T.HttpQuery("chart")),
  myRating: Schema.optional(Schema.String).pipe(T.HttpQuery("myRating")),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/videos" }),
  svc,
) as unknown as Schema.Codec<ListVideosRequest>;

export type ListVideosResponse = VideoListResponse;
export const ListVideosResponse = /*@__PURE__*/ /*#__PURE__*/ VideoListResponse;

export type ListVideosError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listVideos: API.PaginatedOperationMethod<
  ListVideosRequest,
  ListVideosResponse,
  ListVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListVideosRequest,
  output: ListVideosResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface BatchGetStatsVideosRequest {
  /** Required. Return videos with the given ids. The number of IDs specified cannot exceed 50. */
  id?: string[];
  /** Required. The `**part**` parameter specifies a comma-separated list of one or more `videoStat` resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a `videoStat` resource, the `statistics` property contains `view_count` and `like_count`. As such, if you set `**part=snippet**`, the API response will contain all of those properties. */
  part?: string[];
  /** Optional. **Note:** This parameter is intended exclusively for YouTube content partners. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const BatchGetStatsVideosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/videos:batchGetStats" }),
    svc,
  ) as unknown as Schema.Codec<BatchGetStatsVideosRequest>;

export type BatchGetStatsVideosResponse = BatchGetStatsResponse;
export const BatchGetStatsVideosResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetStatsResponse;

export type BatchGetStatsVideosError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a batch of VideoStat resources, possibly filtered. BatchGetStats is intentionally not atomic to provide a better user experience. */
export const batchGetStatsVideos: API.OperationMethod<
  BatchGetStatsVideosRequest,
  BatchGetStatsVideosResponse,
  BatchGetStatsVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetStatsVideosRequest,
  output: BatchGetStatsVideosResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertVideosRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Should auto-levels be applied to the upload. */
  autoLevels?: boolean;
  /** Should stabilize be applied to the upload. */
  stabilize?: boolean;
  /** Notify the channel subscribers about the new video. As default, the notification is enabled. */
  notifySubscribers?: boolean;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: Video;
}

export const InsertVideosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  autoLevels: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("autoLevels")),
  stabilize: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("stabilize")),
  notifySubscribers: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("notifySubscribers"),
  ),
  onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwnerChannel"),
  ),
  body: Schema.optional(Video).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/videos", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertVideosRequest>;

export type InsertVideosResponse = Video;
export const InsertVideosResponse = /*@__PURE__*/ /*#__PURE__*/ Video;

export type InsertVideosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertVideos: API.OperationMethod<
  InsertVideosRequest,
  InsertVideosResponse,
  InsertVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertVideosRequest,
  output: InsertVideosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteVideosRequest {
  id: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const DeleteVideosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpQuery("id")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "youtube/v3/videos" }),
  svc,
) as unknown as Schema.Codec<DeleteVideosRequest>;

export interface DeleteVideosResponse {}
export const DeleteVideosResponse: Schema.Codec<DeleteVideosResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteVideosResponse>;

export type DeleteVideosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deleteVideos: API.OperationMethod<
  DeleteVideosRequest,
  DeleteVideosResponse,
  DeleteVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteVideosRequest,
  output: DeleteVideosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportAbuseVideosRequest {
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: VideoAbuseReport;
}

export const ReportAbuseVideosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    body: Schema.optional(VideoAbuseReport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/videos/reportAbuse",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReportAbuseVideosRequest>;

export interface ReportAbuseVideosResponse {}
export const ReportAbuseVideosResponse: Schema.Codec<ReportAbuseVideosResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<ReportAbuseVideosResponse>;

export type ReportAbuseVideosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Report abuse for a video. */
export const reportAbuseVideos: API.OperationMethod<
  ReportAbuseVideosRequest,
  ReportAbuseVideosResponse,
  ReportAbuseVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportAbuseVideosRequest,
  output: ReportAbuseVideosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RateVideosRequest {
  id: string;
  rating: "none" | "like" | "dislike" | (string & {});
}

export const RateVideosRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpQuery("id")),
  rating: Schema.String.pipe(T.HttpQuery("rating")),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/videos/rate", hasBody: true }),
  svc,
) as unknown as Schema.Codec<RateVideosRequest>;

export interface RateVideosResponse {}
export const RateVideosResponse: Schema.Codec<RateVideosResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<RateVideosResponse>;

export type RateVideosError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a like or dislike rating to a video or removes a rating from a video. */
export const rateVideos: API.OperationMethod<
  RateVideosRequest,
  RateVideosResponse,
  RateVideosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RateVideosRequest,
  output: RateVideosResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSuperChatEventsRequest {
  /** Return rendered funding amounts in specified language. */
  hl?: string;
  /** The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported. */
  part: string[];
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
}

export const ListSuperChatEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/superChatEvents" }),
    svc,
  ) as unknown as Schema.Codec<ListSuperChatEventsRequest>;

export type ListSuperChatEventsResponse = SuperChatEventListResponse;
export const ListSuperChatEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SuperChatEventListResponse;

export type ListSuperChatEventsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listSuperChatEvents: API.PaginatedOperationMethod<
  ListSuperChatEventsRequest,
  ListSuperChatEventsResponse,
  ListSuperChatEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSuperChatEventsRequest,
  output: ListSuperChatEventsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertCaptionsRequest {
  /** ID of the Google+ Page for the channel that the request is be on behalf of */
  onBehalfOf?: string;
  /** Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio. */
  sync?: boolean;
  /** The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: Caption;
}

export const InsertCaptionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onBehalfOf: Schema.optional(Schema.String).pipe(T.HttpQuery("onBehalfOf")),
  sync: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("sync")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  body: Schema.optional(Caption).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/captions", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertCaptionsRequest>;

export type InsertCaptionsResponse = Caption;
export const InsertCaptionsResponse = /*@__PURE__*/ /*#__PURE__*/ Caption;

export type InsertCaptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertCaptions: API.OperationMethod<
  InsertCaptionsRequest,
  InsertCaptionsResponse,
  InsertCaptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCaptionsRequest,
  output: InsertCaptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteCaptionsRequest {
  id: string;
  /** ID of the Google+ Page for the channel that the request is be on behalf of */
  onBehalfOf?: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const DeleteCaptionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpQuery("id")),
  onBehalfOf: Schema.optional(Schema.String).pipe(T.HttpQuery("onBehalfOf")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "youtube/v3/captions" }),
  svc,
) as unknown as Schema.Codec<DeleteCaptionsRequest>;

export interface DeleteCaptionsResponse {}
export const DeleteCaptionsResponse: Schema.Codec<DeleteCaptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteCaptionsResponse>;

export type DeleteCaptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deleteCaptions: API.OperationMethod<
  DeleteCaptionsRequest,
  DeleteCaptionsResponse,
  DeleteCaptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCaptionsRequest,
  output: DeleteCaptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateCaptionsRequest {
  /** The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** ID of the Google+ Page for the channel that the request is on behalf of. */
  onBehalfOf?: string;
  /** Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio. */
  sync?: boolean;
  /** Request body */
  body?: Caption;
}

export const UpdateCaptionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  onBehalfOf: Schema.optional(Schema.String).pipe(T.HttpQuery("onBehalfOf")),
  sync: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("sync")),
  body: Schema.optional(Caption).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PUT", path: "youtube/v3/captions", hasBody: true }),
  svc,
) as unknown as Schema.Codec<UpdateCaptionsRequest>;

export type UpdateCaptionsResponse = Caption;
export const UpdateCaptionsResponse = /*@__PURE__*/ /*#__PURE__*/ Caption;

export type UpdateCaptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updateCaptions: API.OperationMethod<
  UpdateCaptionsRequest,
  UpdateCaptionsResponse,
  UpdateCaptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateCaptionsRequest,
  output: UpdateCaptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCaptionsRequest {
  /** Returns the captions for the specified video. */
  videoId: string;
  /** The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Returns the captions with the given IDs for Stubby or Apiary. */
  id?: string[];
  /** ID of the Google+ Page for the channel that the request is on behalf of. */
  onBehalfOf?: string;
}

export const ListCaptionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  videoId: Schema.String.pipe(T.HttpQuery("videoId")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
  onBehalfOf: Schema.optional(Schema.String).pipe(T.HttpQuery("onBehalfOf")),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/captions" }),
  svc,
) as unknown as Schema.Codec<ListCaptionsRequest>;

export type ListCaptionsResponse = CaptionListResponse;
export const ListCaptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CaptionListResponse;

export type ListCaptionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listCaptions: API.OperationMethod<
  ListCaptionsRequest,
  ListCaptionsResponse,
  ListCaptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCaptionsRequest,
  output: ListCaptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadCaptionsRequest {
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** The ID of the caption track to download, required for One Platform. */
  id: string;
  /** Convert the captions into this format. Supported options are sbv, srt, and vtt. */
  tfmt?: string;
  /** ID of the Google+ Page for the channel that the request is be on behalf of */
  onBehalfOf?: string;
  /** tlang is the language code; machine translate the captions into this language. */
  tlang?: string;
}

export const DownloadCaptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    id: Schema.String.pipe(T.HttpPath("id")),
    tfmt: Schema.optional(Schema.String).pipe(T.HttpQuery("tfmt")),
    onBehalfOf: Schema.optional(Schema.String).pipe(T.HttpQuery("onBehalfOf")),
    tlang: Schema.optional(Schema.String).pipe(T.HttpQuery("tlang")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/captions/{id}" }),
    svc,
  ) as unknown as Schema.Codec<DownloadCaptionsRequest>;

export interface DownloadCaptionsResponse {}
export const DownloadCaptionsResponse: Schema.Codec<DownloadCaptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DownloadCaptionsResponse>;

export type DownloadCaptionsError = DefaultErrors | NotFound | Forbidden;

/** Downloads a caption track. */
export const downloadCaptions: API.OperationMethod<
  DownloadCaptionsRequest,
  DownloadCaptionsResponse,
  DownloadCaptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadCaptionsRequest,
  output: DownloadCaptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLiveBroadcastsRequest {
  /** Return broadcasts with a certain status, e.g. active broadcasts. */
  broadcastStatus?:
    | "broadcastStatusFilterUnspecified"
    | "all"
    | "active"
    | "upcoming"
    | "completed"
    | (string & {});
  /** The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  mine?: boolean;
  /** Return only broadcasts with the selected type. */
  broadcastType?:
    | "broadcastTypeFilterUnspecified"
    | "all"
    | "event"
    | "persistent"
    | (string & {});
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Return broadcasts with the given ids from Stubby or Apiary. */
  id?: string[];
}

export const ListLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    broadcastStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("broadcastStatus"),
    ),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
    broadcastType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("broadcastType"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/liveBroadcasts" }),
    svc,
  ) as unknown as Schema.Codec<ListLiveBroadcastsRequest>;

export type ListLiveBroadcastsResponse = LiveBroadcastListResponse;
export const ListLiveBroadcastsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveBroadcastListResponse;

export type ListLiveBroadcastsError = DefaultErrors | NotFound | Forbidden;

/** Retrieve the list of broadcasts associated with the given channel. */
export const listLiveBroadcasts: API.PaginatedOperationMethod<
  ListLiveBroadcastsRequest,
  ListLiveBroadcastsResponse,
  ListLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLiveBroadcastsRequest,
  output: ListLiveBroadcastsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdateLiveBroadcastsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: LiveBroadcast;
}

export const UpdateLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(LiveBroadcast).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "youtube/v3/liveBroadcasts", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateLiveBroadcastsRequest>;

export type UpdateLiveBroadcastsResponse = LiveBroadcast;
export const UpdateLiveBroadcastsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveBroadcast;

export type UpdateLiveBroadcastsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing broadcast for the authenticated user. */
export const updateLiveBroadcasts: API.OperationMethod<
  UpdateLiveBroadcastsRequest,
  UpdateLiveBroadcastsResponse,
  UpdateLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLiveBroadcastsRequest,
  output: UpdateLiveBroadcastsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BindLiveBroadcastsRequest {
  /** Stream to bind, if not set unbind the current one. */
  streamId?: string;
  /** Broadcast to bind to the stream */
  id: string;
  /** The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
}

export const BindLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    streamId: Schema.optional(Schema.String).pipe(T.HttpQuery("streamId")),
    id: Schema.String.pipe(T.HttpQuery("id")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveBroadcasts/bind",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BindLiveBroadcastsRequest>;

export type BindLiveBroadcastsResponse = LiveBroadcast;
export const BindLiveBroadcastsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveBroadcast;

export type BindLiveBroadcastsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Bind a broadcast to a stream. */
export const bindLiveBroadcasts: API.OperationMethod<
  BindLiveBroadcastsRequest,
  BindLiveBroadcastsResponse,
  BindLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BindLiveBroadcastsRequest,
  output: BindLiveBroadcastsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertCuepointLiveBroadcastsRequest {
  /** The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status. */
  part?: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Broadcast to insert ads to, or equivalently `external_video_id` for internal use. */
  id?: string;
  /** Request body */
  body?: Cuepoint;
}

export const InsertCuepointLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    body: Schema.optional(Cuepoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveBroadcasts/cuepoint",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertCuepointLiveBroadcastsRequest>;

export type InsertCuepointLiveBroadcastsResponse = Cuepoint;
export const InsertCuepointLiveBroadcastsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cuepoint;

export type InsertCuepointLiveBroadcastsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Insert cuepoints in a broadcast */
export const insertCuepointLiveBroadcasts: API.OperationMethod<
  InsertCuepointLiveBroadcastsRequest,
  InsertCuepointLiveBroadcastsResponse,
  InsertCuepointLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCuepointLiveBroadcastsRequest,
  output: InsertCuepointLiveBroadcastsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TransitionLiveBroadcastsRequest {
  /** Broadcast to transition. */
  id: string;
  /** The status to which the broadcast is going to transition. */
  broadcastStatus:
    | "statusUnspecified"
    | "testing"
    | "live"
    | "complete"
    | (string & {});
  /** The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
}

export const TransitionLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    broadcastStatus: Schema.String.pipe(T.HttpQuery("broadcastStatus")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveBroadcasts/transition",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TransitionLiveBroadcastsRequest>;

export type TransitionLiveBroadcastsResponse = LiveBroadcast;
export const TransitionLiveBroadcastsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveBroadcast;

export type TransitionLiveBroadcastsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Transition a broadcast to a given status. */
export const transitionLiveBroadcasts: API.OperationMethod<
  TransitionLiveBroadcastsRequest,
  TransitionLiveBroadcastsResponse,
  TransitionLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TransitionLiveBroadcastsRequest,
  output: TransitionLiveBroadcastsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertLiveBroadcastsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: LiveBroadcast;
}

export const InsertLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(LiveBroadcast).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveBroadcasts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertLiveBroadcastsRequest>;

export type InsertLiveBroadcastsResponse = LiveBroadcast;
export const InsertLiveBroadcastsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveBroadcast;

export type InsertLiveBroadcastsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new stream for the authenticated user. */
export const insertLiveBroadcasts: API.OperationMethod<
  InsertLiveBroadcastsRequest,
  InsertLiveBroadcastsResponse,
  InsertLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLiveBroadcastsRequest,
  output: InsertLiveBroadcastsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteLiveBroadcastsRequest {
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Broadcast to delete. */
  id: string;
}

export const DeleteLiveBroadcastsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    id: Schema.String.pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/liveBroadcasts" }),
    svc,
  ) as unknown as Schema.Codec<DeleteLiveBroadcastsRequest>;

export interface DeleteLiveBroadcastsResponse {}
export const DeleteLiveBroadcastsResponse: Schema.Codec<DeleteLiveBroadcastsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteLiveBroadcastsResponse>;

export type DeleteLiveBroadcastsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a given broadcast. */
export const deleteLiveBroadcasts: API.OperationMethod<
  DeleteLiveBroadcastsRequest,
  DeleteLiveBroadcastsResponse,
  DeleteLiveBroadcastsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLiveBroadcastsRequest,
  output: DeleteLiveBroadcastsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListVideoAbuseReportReasonsRequest {
  hl?: string;
  /** The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet. */
  part: string[];
}

export const ListVideoAbuseReportReasonsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/videoAbuseReportReasons" }),
    svc,
  ) as unknown as Schema.Codec<ListVideoAbuseReportReasonsRequest>;

export type ListVideoAbuseReportReasonsResponse =
  VideoAbuseReportReasonListResponse;
export const ListVideoAbuseReportReasonsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VideoAbuseReportReasonListResponse;

export type ListVideoAbuseReportReasonsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listVideoAbuseReportReasons: API.OperationMethod<
  ListVideoAbuseReportReasonsRequest,
  ListVideoAbuseReportReasonsResponse,
  ListVideoAbuseReportReasonsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVideoAbuseReportReasonsRequest,
  output: ListVideoAbuseReportReasonsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLiveStreamsRequest {
  /** Return LiveStreams with the given ids from Stubby or Apiary. */
  id?: string[];
  /** The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  mine?: boolean;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
}

export const ListLiveStreamsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "youtube/v3/liveStreams" }),
  svc,
) as unknown as Schema.Codec<ListLiveStreamsRequest>;

export type ListLiveStreamsResponse = LiveStreamListResponse;
export const ListLiveStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveStreamListResponse;

export type ListLiveStreamsError = DefaultErrors | NotFound | Forbidden;

/** Retrieve the list of streams associated with the given channel. -- */
export const listLiveStreams: API.PaginatedOperationMethod<
  ListLiveStreamsRequest,
  ListLiveStreamsResponse,
  ListLiveStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLiveStreamsRequest,
  output: ListLiveStreamsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdateLiveStreamsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: LiveStream;
}

export const UpdateLiveStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(LiveStream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "youtube/v3/liveStreams", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateLiveStreamsRequest>;

export type UpdateLiveStreamsResponse = LiveStream;
export const UpdateLiveStreamsResponse = /*@__PURE__*/ /*#__PURE__*/ LiveStream;

export type UpdateLiveStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing stream for the authenticated user. */
export const updateLiveStreams: API.OperationMethod<
  UpdateLiveStreamsRequest,
  UpdateLiveStreamsResponse,
  UpdateLiveStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateLiveStreamsRequest,
  output: UpdateLiveStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertLiveStreamsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: LiveStream;
}

export const InsertLiveStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(LiveStream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "youtube/v3/liveStreams", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<InsertLiveStreamsRequest>;

export type InsertLiveStreamsResponse = LiveStream;
export const InsertLiveStreamsResponse = /*@__PURE__*/ /*#__PURE__*/ LiveStream;

export type InsertLiveStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new stream for the authenticated user. */
export const insertLiveStreams: API.OperationMethod<
  InsertLiveStreamsRequest,
  InsertLiveStreamsResponse,
  InsertLiveStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLiveStreamsRequest,
  output: InsertLiveStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteLiveStreamsRequest {
  id: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
}

export const DeleteLiveStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/liveStreams" }),
    svc,
  ) as unknown as Schema.Codec<DeleteLiveStreamsRequest>;

export interface DeleteLiveStreamsResponse {}
export const DeleteLiveStreamsResponse: Schema.Codec<DeleteLiveStreamsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteLiveStreamsResponse>;

export type DeleteLiveStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing stream for the authenticated user. */
export const deleteLiveStreams: API.OperationMethod<
  DeleteLiveStreamsRequest,
  DeleteLiveStreamsResponse,
  DeleteLiveStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLiveStreamsRequest,
  output: DeleteLiveStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetVideoTrainabilityRequest {
  /** The ID of the video to retrieve. */
  id?: string;
}

export const GetVideoTrainabilityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/videoTrainability" }),
    svc,
  ) as unknown as Schema.Codec<GetVideoTrainabilityRequest>;

export type GetVideoTrainabilityResponse = VideoTrainability;
export const GetVideoTrainabilityResponse =
  /*@__PURE__*/ /*#__PURE__*/ VideoTrainability;

export type GetVideoTrainabilityError = DefaultErrors | NotFound | Forbidden;

/** Returns the trainability status of a video. */
export const getVideoTrainability: API.OperationMethod<
  GetVideoTrainabilityRequest,
  GetVideoTrainabilityResponse,
  GetVideoTrainabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVideoTrainabilityRequest,
  output: GetVideoTrainabilityResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListI18nRegionsRequest {
  hl?: string;
  /** The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet. */
  part: string[];
}

export const ListI18nRegionsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  },
).pipe(
  T.Http({ method: "GET", path: "youtube/v3/i18nRegions" }),
  svc,
) as unknown as Schema.Codec<ListI18nRegionsRequest>;

export type ListI18nRegionsResponse = I18nRegionListResponse;
export const ListI18nRegionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ I18nRegionListResponse;

export type ListI18nRegionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listI18nRegions: API.OperationMethod<
  ListI18nRegionsRequest,
  ListI18nRegionsResponse,
  ListI18nRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListI18nRegionsRequest,
  output: ListI18nRegionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListActivitiesRequest {
  home?: boolean;
  channelId?: string;
  mine?: boolean;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  publishedBefore?: string;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  publishedAfter?: string;
  regionCode?: string;
  /** The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties. */
  part: string[];
}

export const ListActivitiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  home: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("home")),
  channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
  mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  publishedBefore: Schema.optional(Schema.String).pipe(
    T.HttpQuery("publishedBefore"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  publishedAfter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("publishedAfter"),
  ),
  regionCode: Schema.optional(Schema.String).pipe(T.HttpQuery("regionCode")),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
}).pipe(
  T.Http({ method: "GET", path: "youtube/v3/activities" }),
  svc,
) as unknown as Schema.Codec<ListActivitiesRequest>;

export type ListActivitiesResponse = ActivityListResponse;
export const ListActivitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ActivityListResponse;

export type ListActivitiesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listActivities: API.PaginatedOperationMethod<
  ListActivitiesRequest,
  ListActivitiesResponse,
  ListActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListActivitiesRequest,
  output: ListActivitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertLiveChatBansRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet. */
  part: string[];
  /** Request body */
  body?: LiveChatBan;
}

export const InsertLiveChatBansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(LiveChatBan).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "youtube/v3/liveChat/bans", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<InsertLiveChatBansRequest>;

export type InsertLiveChatBansResponse = LiveChatBan;
export const InsertLiveChatBansResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatBan;

export type InsertLiveChatBansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertLiveChatBans: API.OperationMethod<
  InsertLiveChatBansRequest,
  InsertLiveChatBansResponse,
  InsertLiveChatBansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLiveChatBansRequest,
  output: InsertLiveChatBansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteLiveChatBansRequest {
  id: string;
}

export const DeleteLiveChatBansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/liveChat/bans" }),
    svc,
  ) as unknown as Schema.Codec<DeleteLiveChatBansRequest>;

export interface DeleteLiveChatBansResponse {}
export const DeleteLiveChatBansResponse: Schema.Codec<DeleteLiveChatBansResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteLiveChatBansResponse>;

export type DeleteLiveChatBansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a chat ban. */
export const deleteLiveChatBans: API.OperationMethod<
  DeleteLiveChatBansRequest,
  DeleteLiveChatBansResponse,
  DeleteLiveChatBansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLiveChatBansRequest,
  output: DeleteLiveChatBansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlaylistItemsRequest {
  /** Return the playlist items associated with the given video ID. */
  videoId?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** Return the playlist items within the given playlist. */
  playlistId?: string;
  /** The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  id?: string[];
}

export const ListPlaylistItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    videoId: Schema.optional(Schema.String).pipe(T.HttpQuery("videoId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    playlistId: Schema.optional(Schema.String).pipe(T.HttpQuery("playlistId")),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/playlistItems" }),
    svc,
  ) as unknown as Schema.Codec<ListPlaylistItemsRequest>;

export type ListPlaylistItemsResponse = PlaylistItemListResponse;
export const ListPlaylistItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistItemListResponse;

export type ListPlaylistItemsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listPlaylistItems: API.PaginatedOperationMethod<
  ListPlaylistItemsRequest,
  ListPlaylistItemsResponse,
  ListPlaylistItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlaylistItemsRequest,
  output: ListPlaylistItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdatePlaylistItemsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: PlaylistItem;
}

export const UpdatePlaylistItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    body: Schema.optional(PlaylistItem).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "youtube/v3/playlistItems", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdatePlaylistItemsRequest>;

export type UpdatePlaylistItemsResponse = PlaylistItem;
export const UpdatePlaylistItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistItem;

export type UpdatePlaylistItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updatePlaylistItems: API.OperationMethod<
  UpdatePlaylistItemsRequest,
  UpdatePlaylistItemsResponse,
  UpdatePlaylistItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlaylistItemsRequest,
  output: UpdatePlaylistItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePlaylistItemsRequest {
  id: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const DeletePlaylistItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/playlistItems" }),
    svc,
  ) as unknown as Schema.Codec<DeletePlaylistItemsRequest>;

export interface DeletePlaylistItemsResponse {}
export const DeletePlaylistItemsResponse: Schema.Codec<DeletePlaylistItemsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeletePlaylistItemsResponse>;

export type DeletePlaylistItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deletePlaylistItems: API.OperationMethod<
  DeletePlaylistItemsRequest,
  DeletePlaylistItemsResponse,
  DeletePlaylistItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePlaylistItemsRequest,
  output: DeletePlaylistItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPlaylistItemsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: PlaylistItem;
}

export const InsertPlaylistItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    body: Schema.optional(PlaylistItem).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "youtube/v3/playlistItems", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<InsertPlaylistItemsRequest>;

export type InsertPlaylistItemsResponse = PlaylistItem;
export const InsertPlaylistItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistItem;

export type InsertPlaylistItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertPlaylistItems: API.OperationMethod<
  InsertPlaylistItemsRequest,
  InsertPlaylistItemsResponse,
  InsertPlaylistItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlaylistItemsRequest,
  output: InsertPlaylistItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetThumbnailsRequest {
  /** Returns the Thumbnail with the given video IDs for Stubby or Apiary. */
  videoId: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const SetThumbnailsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  videoId: Schema.String.pipe(T.HttpQuery("videoId")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/thumbnails/set", hasBody: true }),
  svc,
) as unknown as Schema.Codec<SetThumbnailsRequest>;

export type SetThumbnailsResponse = ThumbnailSetResponse;
export const SetThumbnailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ThumbnailSetResponse;

export type SetThumbnailsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here. */
export const setThumbnails: API.OperationMethod<
  SetThumbnailsRequest,
  SetThumbnailsResponse,
  SetThumbnailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetThumbnailsRequest,
  output: SetThumbnailsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListChannelSectionsRequest {
  /** The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Return the ChannelSections with the given IDs for Stubby or Apiary. */
  id?: string[];
  /** Return content in specified language */
  hl?: string;
  /** Return the ChannelSections owned by the authenticated user. */
  mine?: boolean;
  /** Return the ChannelSections owned by the specified channel ID. */
  channelId?: string;
}

export const ListChannelSectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
    channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/channelSections" }),
    svc,
  ) as unknown as Schema.Codec<ListChannelSectionsRequest>;

export type ListChannelSectionsResponse = ChannelSectionListResponse;
export const ListChannelSectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChannelSectionListResponse;

export type ListChannelSectionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listChannelSections: API.OperationMethod<
  ListChannelSectionsRequest,
  ListChannelSectionsResponse,
  ListChannelSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListChannelSectionsRequest,
  output: ListChannelSectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateChannelSectionsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: ChannelSection;
}

export const UpdateChannelSectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    body: Schema.optional(ChannelSection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "youtube/v3/channelSections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateChannelSectionsRequest>;

export type UpdateChannelSectionsResponse = ChannelSection;
export const UpdateChannelSectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChannelSection;

export type UpdateChannelSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updateChannelSections: API.OperationMethod<
  UpdateChannelSectionsRequest,
  UpdateChannelSectionsResponse,
  UpdateChannelSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateChannelSectionsRequest,
  output: UpdateChannelSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertChannelSectionsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: ChannelSection;
}

export const InsertChannelSectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(ChannelSection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/channelSections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertChannelSectionsRequest>;

export type InsertChannelSectionsResponse = ChannelSection;
export const InsertChannelSectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChannelSection;

export type InsertChannelSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertChannelSections: API.OperationMethod<
  InsertChannelSectionsRequest,
  InsertChannelSectionsResponse,
  InsertChannelSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertChannelSectionsRequest,
  output: InsertChannelSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteChannelSectionsRequest {
  id: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const DeleteChannelSectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/channelSections" }),
    svc,
  ) as unknown as Schema.Codec<DeleteChannelSectionsRequest>;

export interface DeleteChannelSectionsResponse {}
export const DeleteChannelSectionsResponse: Schema.Codec<DeleteChannelSectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteChannelSectionsResponse>;

export type DeleteChannelSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deleteChannelSections: API.OperationMethod<
  DeleteChannelSectionsRequest,
  DeleteChannelSectionsResponse,
  DeleteChannelSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteChannelSectionsRequest,
  output: DeleteChannelSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertCommentThreadsRequest {
  /** The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. */
  part: string[];
  /** Request body */
  body?: CommentThread;
}

export const InsertCommentThreadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(CommentThread).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/commentThreads",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertCommentThreadsRequest>;

export type InsertCommentThreadsResponse = CommentThread;
export const InsertCommentThreadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommentThread;

export type InsertCommentThreadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertCommentThreads: API.OperationMethod<
  InsertCommentThreadsRequest,
  InsertCommentThreadsResponse,
  InsertCommentThreadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertCommentThreadsRequest,
  output: InsertCommentThreadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCommentThreadsRequest {
  /** The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include. */
  part: string[];
  order?: "orderUnspecified" | "time" | "relevance" | (string & {});
  /** Returns the comment threads of the specified post. */
  postId?: string;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** Returns the comment threads for all the channel comments (ie does not include comments left on videos). */
  channelId?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The requested text format for the returned comments. */
  textFormat?: "textFormatUnspecified" | "html" | "plainText" | (string & {});
  /** Returns the comment threads with the given IDs for Stubby or Apiary. */
  id?: string[];
  /** Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter. */
  searchTerms?: string;
  /** Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam. */
  moderationStatus?:
    | "published"
    | "heldForReview"
    | "likelySpam"
    | "rejected"
    | (string & {});
  /** Returns the comment threads of the specified video. */
  videoId?: string;
  /** Returns the comment threads of all videos of the channel and the channel comments as well. */
  allThreadsRelatedToChannelId?: string;
}

export const ListCommentThreadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    postId: Schema.optional(Schema.String).pipe(T.HttpQuery("postId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    textFormat: Schema.optional(Schema.String).pipe(T.HttpQuery("textFormat")),
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    searchTerms: Schema.optional(Schema.String).pipe(
      T.HttpQuery("searchTerms"),
    ),
    moderationStatus: Schema.optional(Schema.String).pipe(
      T.HttpQuery("moderationStatus"),
    ),
    videoId: Schema.optional(Schema.String).pipe(T.HttpQuery("videoId")),
    allThreadsRelatedToChannelId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("allThreadsRelatedToChannelId"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/commentThreads" }),
    svc,
  ) as unknown as Schema.Codec<ListCommentThreadsRequest>;

export type ListCommentThreadsResponse = CommentThreadListResponse;
export const ListCommentThreadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommentThreadListResponse;

export type ListCommentThreadsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listCommentThreads: API.PaginatedOperationMethod<
  ListCommentThreadsRequest,
  ListCommentThreadsResponse,
  ListCommentThreadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCommentThreadsRequest,
  output: ListCommentThreadsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertTestsRequest {
  externalChannelId?: string;
  part: string[];
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: TestItem;
}

export const InsertTestsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  externalChannelId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("externalChannelId"),
  ),
  part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
  onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwnerChannel"),
  ),
  body: Schema.optional(TestItem).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "youtube/v3/tests", hasBody: true }),
  svc,
) as unknown as Schema.Codec<InsertTestsRequest>;

export type InsertTestsResponse = TestItem;
export const InsertTestsResponse = /*@__PURE__*/ /*#__PURE__*/ TestItem;

export type InsertTestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** POST method. */
export const insertTests: API.OperationMethod<
  InsertTestsRequest,
  InsertTestsResponse,
  InsertTestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTestsRequest,
  output: InsertTestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListLiveChatMessagesRequest {
  /** The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails. */
  part: string[];
  /** The id of the live chat for which comments should be returned. */
  liveChatId: string;
  /** Specifies the localization language in which the system messages should be returned. */
  hl?: string;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved. */
  pageToken?: string;
  /** Specifies the size of the profile image that should be returned for each user. */
  profileImageSize?: number;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC. */
  maxResults?: number;
}

export const ListLiveChatMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    liveChatId: Schema.String.pipe(T.HttpQuery("liveChatId")),
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    profileImageSize: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("profileImageSize"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/liveChat/messages" }),
    svc,
  ) as unknown as Schema.Codec<ListLiveChatMessagesRequest>;

export type ListLiveChatMessagesResponse = LiveChatMessageListResponse;
export const ListLiveChatMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatMessageListResponse;

export type ListLiveChatMessagesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listLiveChatMessages: API.PaginatedOperationMethod<
  ListLiveChatMessagesRequest,
  ListLiveChatMessagesResponse,
  ListLiveChatMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLiveChatMessagesRequest,
  output: ListLiveChatMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface TransitionLiveChatMessagesRequest {
  /** The ID that uniquely identify the chat message event to transition. */
  id?: string;
  /** The status to which the chat event is going to transition. */
  status?: "statusUnspecified" | "closed" | (string & {});
}

export const TransitionLiveChatMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveChat/messages/transition",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TransitionLiveChatMessagesRequest>;

export type TransitionLiveChatMessagesResponse = LiveChatMessage;
export const TransitionLiveChatMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatMessage;

export type TransitionLiveChatMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Transition a durable chat event. */
export const transitionLiveChatMessages: API.OperationMethod<
  TransitionLiveChatMessagesRequest,
  TransitionLiveChatMessagesResponse,
  TransitionLiveChatMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TransitionLiveChatMessagesRequest,
  output: TransitionLiveChatMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertLiveChatMessagesRequest {
  /** The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet. */
  part: string[];
  /** Request body */
  body?: LiveChatMessage;
}

export const InsertLiveChatMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(LiveChatMessage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/liveChat/messages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertLiveChatMessagesRequest>;

export type InsertLiveChatMessagesResponse = LiveChatMessage;
export const InsertLiveChatMessagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LiveChatMessage;

export type InsertLiveChatMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertLiveChatMessages: API.OperationMethod<
  InsertLiveChatMessagesRequest,
  InsertLiveChatMessagesResponse,
  InsertLiveChatMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertLiveChatMessagesRequest,
  output: InsertLiveChatMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteLiveChatMessagesRequest {
  id: string;
}

export const DeleteLiveChatMessagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/liveChat/messages" }),
    svc,
  ) as unknown as Schema.Codec<DeleteLiveChatMessagesRequest>;

export interface DeleteLiveChatMessagesResponse {}
export const DeleteLiveChatMessagesResponse: Schema.Codec<DeleteLiveChatMessagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteLiveChatMessagesResponse>;

export type DeleteLiveChatMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a chat message. */
export const deleteLiveChatMessages: API.OperationMethod<
  DeleteLiveChatMessagesRequest,
  DeleteLiveChatMessagesResponse,
  DeleteLiveChatMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLiveChatMessagesRequest,
  output: DeleteLiveChatMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdatePlaylistImagesRequest {
  /** The *part* parameter specifies the properties that the API response will include. */
  part?: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: PlaylistImage;
}

export const UpdatePlaylistImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    body: Schema.optional(PlaylistImage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "youtube/v3/playlistImages", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdatePlaylistImagesRequest>;

export type UpdatePlaylistImagesResponse = PlaylistImage;
export const UpdatePlaylistImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistImage;

export type UpdatePlaylistImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updatePlaylistImages: API.OperationMethod<
  UpdatePlaylistImagesRequest,
  UpdatePlaylistImagesResponse,
  UpdatePlaylistImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePlaylistImagesRequest,
  output: UpdatePlaylistImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPlaylistImagesRequest {
  /** The *part* parameter specifies the properties that the API response will include. */
  part?: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** Request body */
  body?: PlaylistImage;
}

export const InsertPlaylistImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    body: Schema.optional(PlaylistImage).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/playlistImages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertPlaylistImagesRequest>;

export type InsertPlaylistImagesResponse = PlaylistImage;
export const InsertPlaylistImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistImage;

export type InsertPlaylistImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertPlaylistImages: API.OperationMethod<
  InsertPlaylistImagesRequest,
  InsertPlaylistImagesResponse,
  InsertPlaylistImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPlaylistImagesRequest,
  output: InsertPlaylistImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePlaylistImagesRequest {
  /** Id to identify this image. This is returned from by the List method. */
  id?: string;
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const DeletePlaylistImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/playlistImages" }),
    svc,
  ) as unknown as Schema.Codec<DeletePlaylistImagesRequest>;

export interface DeletePlaylistImagesResponse {}
export const DeletePlaylistImagesResponse: Schema.Codec<DeletePlaylistImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeletePlaylistImagesResponse>;

export type DeletePlaylistImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deletePlaylistImages: API.OperationMethod<
  DeletePlaylistImagesRequest,
  DeletePlaylistImagesResponse,
  DeletePlaylistImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePlaylistImagesRequest,
  output: DeletePlaylistImagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPlaylistImagesRequest {
  /** Return PlaylistImages for this playlist id. */
  parent?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. */
  part?: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
}

export const ListPlaylistImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/playlistImages" }),
    svc,
  ) as unknown as Schema.Codec<ListPlaylistImagesRequest>;

export type ListPlaylistImagesResponse = PlaylistImageListResponse;
export const ListPlaylistImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PlaylistImageListResponse;

export type ListPlaylistImagesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listPlaylistImages: API.PaginatedOperationMethod<
  ListPlaylistImagesRequest,
  ListPlaylistImagesResponse,
  ListPlaylistImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPlaylistImagesRequest,
  output: ListPlaylistImagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListSubscriptionsRequest {
  /** Return the subscriptions with the given IDs for Stubby or Apiary. */
  id?: string[];
  /** Return the subscriptions to the subset of these channels that the authenticated user is subscribed to. */
  forChannelId?: string;
  /** Return the subscribers of the given channel owner. */
  mySubscribers?: boolean;
  /** The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties. */
  part: string[];
  /** *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. */
  onBehalfOfContentOwner?: string;
  /** This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. */
  onBehalfOfContentOwnerChannel?: string;
  /** The order of the returned subscriptions */
  order?:
    | "subscriptionOrderUnspecified"
    | "relevance"
    | "unread"
    | "alphabetical"
    | (string & {});
  /** Flag for returning the subscriptions of the authenticated user. */
  mine?: boolean;
  /** Return the subscriptions of the given channel owner. */
  channelId?: string;
  /** The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. */
  maxResults?: number;
  myRecentSubscribers?: boolean;
  /** The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. */
  pageToken?: string;
}

export const ListSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("id")),
    forChannelId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("forChannelId"),
    ),
    mySubscribers: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("mySubscribers"),
    ),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwnerChannel"),
    ),
    order: Schema.optional(Schema.String).pipe(T.HttpQuery("order")),
    mine: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("mine")),
    channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    myRecentSubscribers: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("myRecentSubscribers"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/subscriptions" }),
    svc,
  ) as unknown as Schema.Codec<ListSubscriptionsRequest>;

export type ListSubscriptionsResponse = SubscriptionListResponse;
export const ListSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SubscriptionListResponse;

export type ListSubscriptionsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listSubscriptions: API.PaginatedOperationMethod<
  ListSubscriptionsRequest,
  ListSubscriptionsResponse,
  ListSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSubscriptionsRequest,
  output: ListSubscriptionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface DeleteSubscriptionsRequest {
  id: string;
}

export const DeleteSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpQuery("id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/subscriptions" }),
    svc,
  ) as unknown as Schema.Codec<DeleteSubscriptionsRequest>;

export interface DeleteSubscriptionsResponse {}
export const DeleteSubscriptionsResponse: Schema.Codec<DeleteSubscriptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteSubscriptionsResponse>;

export type DeleteSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deleteSubscriptions: API.OperationMethod<
  DeleteSubscriptionsRequest,
  DeleteSubscriptionsResponse,
  DeleteSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSubscriptionsRequest,
  output: DeleteSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertSubscriptionsRequest {
  /** The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. */
  part: string[];
  /** Request body */
  body?: Subscription;
}

export const InsertSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "youtube/v3/subscriptions", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<InsertSubscriptionsRequest>;

export type InsertSubscriptionsResponse = Subscription;
export const InsertSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type InsertSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertSubscriptions: API.OperationMethod<
  InsertSubscriptionsRequest,
  InsertSubscriptionsResponse,
  InsertSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSubscriptionsRequest,
  output: InsertSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateThirdPartyLinksRequest {
  /** Channel ID to which changes should be applied, for delegation. */
  externalChannelId?: string;
  /** The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet. */
  part: string[];
  /** Request body */
  body?: ThirdPartyLink;
}

export const UpdateThirdPartyLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalChannelId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("externalChannelId"),
    ),
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    body: Schema.optional(ThirdPartyLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "youtube/v3/thirdPartyLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateThirdPartyLinksRequest>;

export type UpdateThirdPartyLinksResponse = ThirdPartyLink;
export const UpdateThirdPartyLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ThirdPartyLink;

export type UpdateThirdPartyLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing resource. */
export const updateThirdPartyLinks: API.OperationMethod<
  UpdateThirdPartyLinksRequest,
  UpdateThirdPartyLinksResponse,
  UpdateThirdPartyLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateThirdPartyLinksRequest,
  output: UpdateThirdPartyLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertThirdPartyLinksRequest {
  /** The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet. */
  part: string[];
  /** Channel ID to which changes should be applied, for delegation. */
  externalChannelId?: string;
  /** Request body */
  body?: ThirdPartyLink;
}

export const InsertThirdPartyLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    externalChannelId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("externalChannelId"),
    ),
    body: Schema.optional(ThirdPartyLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "youtube/v3/thirdPartyLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InsertThirdPartyLinksRequest>;

export type InsertThirdPartyLinksResponse = ThirdPartyLink;
export const InsertThirdPartyLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ThirdPartyLink;

export type InsertThirdPartyLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new resource into this collection. */
export const insertThirdPartyLinks: API.OperationMethod<
  InsertThirdPartyLinksRequest,
  InsertThirdPartyLinksResponse,
  InsertThirdPartyLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertThirdPartyLinksRequest,
  output: InsertThirdPartyLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteThirdPartyLinksRequest {
  /** Type of the link to be deleted. */
  type:
    | "linkUnspecified"
    | "channelToStoreLink"
    | "channelToAffiliateProgramLink"
    | (string & {});
  /** Delete the partner links with the given linking token. */
  linkingToken: string;
  /** Do not use. Required for compatibility. */
  part?: string[];
  /** Channel ID to which changes should be applied, for delegation. */
  externalChannelId?: string;
}

export const DeleteThirdPartyLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String.pipe(T.HttpQuery("type")),
    linkingToken: Schema.String.pipe(T.HttpQuery("linkingToken")),
    part: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("part"),
    ),
    externalChannelId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("externalChannelId"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "youtube/v3/thirdPartyLinks" }),
    svc,
  ) as unknown as Schema.Codec<DeleteThirdPartyLinksRequest>;

export interface DeleteThirdPartyLinksResponse {}
export const DeleteThirdPartyLinksResponse: Schema.Codec<DeleteThirdPartyLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Codec<DeleteThirdPartyLinksResponse>;

export type DeleteThirdPartyLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a resource. */
export const deleteThirdPartyLinks: API.OperationMethod<
  DeleteThirdPartyLinksRequest,
  DeleteThirdPartyLinksResponse,
  DeleteThirdPartyLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteThirdPartyLinksRequest,
  output: DeleteThirdPartyLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListThirdPartyLinksRequest {
  /** The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet. */
  part: string[];
  /** Channel ID to which changes should be applied, for delegation. */
  externalChannelId?: string;
  /** Get a third party link of the given type. */
  type?:
    | "linkUnspecified"
    | "channelToStoreLink"
    | "channelToAffiliateProgramLink"
    | (string & {});
  /** Get a third party link with the given linking token. */
  linkingToken?: string;
}

export const ListThirdPartyLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    part: Schema.Array(Schema.String).pipe(T.HttpQuery("part")),
    externalChannelId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("externalChannelId"),
    ),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    linkingToken: Schema.optional(Schema.String).pipe(
      T.HttpQuery("linkingToken"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "youtube/v3/thirdPartyLinks" }),
    svc,
  ) as unknown as Schema.Codec<ListThirdPartyLinksRequest>;

export type ListThirdPartyLinksResponse = ThirdPartyLinkListResponse;
export const ListThirdPartyLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ThirdPartyLinkListResponse;

export type ListThirdPartyLinksError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of resources, possibly filtered. */
export const listThirdPartyLinks: API.OperationMethod<
  ListThirdPartyLinksRequest,
  ListThirdPartyLinksResponse,
  ListThirdPartyLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListThirdPartyLinksRequest,
  output: ListThirdPartyLinksResponse,
  errors: [NotFound, Forbidden],
}));
