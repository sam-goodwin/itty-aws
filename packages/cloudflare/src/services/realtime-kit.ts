/**
 * Cloudflare REALTIME-KIT API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service realtime-kit
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

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

export class RealtimeKitPresetExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RealtimeKitPresetExists>()(
    "RealtimeKitPresetExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 409 }],
) {}

export class RealtimeKitPresetNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RealtimeKitPresetNotFound>()(
    "RealtimeKitPresetNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class RealtimeKitWebhookExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RealtimeKitWebhookExists>()(
    "RealtimeKitWebhookExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 409 }],
) {}

export class RealtimeKitWebhookNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RealtimeKitWebhookNotFound>()(
    "RealtimeKitWebhookNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Livestream {
  id?: string | null;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt?: string | null;
  /** Specifies if the livestream was disabled. */
  disabled?: string | null;
  /** The server URL to which the RTMP encoder sends the video and audio data. */
  ingestServer?: string | null;
  /** ID of the meeting. */
  meetingId?: string | null;
  /** Name of the livestream. */
  name?: string | null;
  /** The web address that viewers can use to watch the livestream. */
  playbackUrl?: string | null;
  status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
  /** Unique key for accessing each livestream. */
  streamKey?: string | null;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt?: string | null;
}
const Livestream = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestServer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    meetingId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    playbackUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["LIVE", "IDLE", "ERRORED", "INVOKED"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    streamKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      disabled: "disabled",
      ingestServer: "ingest_server",
      meetingId: "meeting_id",
      name: "name",
      playbackUrl: "playback_url",
      status: "status",
      streamKey: "stream_key",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Livestream>;

interface Session {
  id?: string | null;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt?: string | null;
  errMessage?: string | null;
  /** The time duration for which the input was given or the meeting was streamed. */
  ingestSeconds?: string | null;
  /** Timestamp the object was invoked. The time is returned in ISO format. */
  invokedTime?: string | null;
  livestreamId?: string | null;
  /** Timestamp the object was started. The time is returned in ISO format. */
  startedTime?: string | null;
  /** Timestamp the object was stopped. The time is returned in ISO format. */
  stoppedTime?: string | null;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt?: string | null;
  /** The total view time for which the viewers watched the stream. */
  viewerSeconds?: string | null;
}
const Session = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestSeconds: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    invokedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    livestreamId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    stoppedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    viewerSeconds: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      errMessage: "err_message",
      ingestSeconds: "ingest_seconds",
      invokedTime: "invoked_time",
      livestreamId: "livestream_id",
      startedTime: "started_time",
      stoppedTime: "stopped_time",
      updatedAt: "updated_at",
      viewerSeconds: "viewer_seconds",
    }),
  ),
) as unknown as Schema.Codec<Session>;

interface Data {
  livestream?: {
    id?: string | null;
    createdAt?: string | null;
    disabled?: string | null;
    ingestServer?: string | null;
    meetingId?: string | null;
    name?: string | null;
    playbackUrl?: string | null;
    status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
    streamKey?: string | null;
    updatedAt?: string | null;
  } | null;
  session?: {
    id?: string | null;
    createdAt?: string | null;
    errMessage?: string | null;
    ingestSeconds?: string | null;
    invokedTime?: string | null;
    livestreamId?: string | null;
    startedTime?: string | null;
    stoppedTime?: string | null;
    updatedAt?: string | null;
    viewerSeconds?: string | null;
  } | null;
}
const Data = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    livestream: Schema.optional(Schema.Union([Livestream, Schema.Null])),
    session: Schema.optional(Schema.Union([Session, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data>;

interface Data2 {
  /** ID of the recording */
  id: string;
  /** If the audio_config is passed, the URL for downloading the audio recording is returned. */
  audioDownloadUrl: string | null;
  /** URL where the recording can be downloaded. */
  downloadUrl: string | null;
  /** Timestamp when the download URL expires. */
  downloadUrlExpiry: string | null;
  /** File size of the recording, in bytes. */
  fileSize: number | null;
  /** Timestamp when this recording was invoked. */
  invokedTime: string;
  /** File name of the recording. */
  outputFileName: string;
  /** ID of the meeting session this recording is for. */
  sessionId: string | null;
  /** Timestamp when this recording actually started after being invoked. Usually a few seconds after `invoked_time`. */
  startedTime: string | null;
  /** Current status of the recording. */
  status:
    | "INVOKED"
    | "RECORDING"
    | "UPLOADING"
    | "UPLOADED"
    | "ERRORED"
    | "PAUSED"
    | (string & {});
  /** Timestamp when this recording was stopped. Optional; is present only when the recording has actually been stopped. */
  stoppedTime: string | null;
  /** Total recording time in seconds. */
  recordingDuration?: number | null;
}
const Data2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    audioDownloadUrl: Schema.Union([Schema.String, Schema.Null]),
    downloadUrl: Schema.Union([Schema.String, Schema.Null]),
    downloadUrlExpiry: Schema.Union([Schema.String, Schema.Null]),
    fileSize: Schema.Union([Schema.Number, Schema.Null]),
    invokedTime: Schema.String,
    outputFileName: Schema.String,
    sessionId: Schema.Union([Schema.String, Schema.Null]),
    startedTime: Schema.Union([Schema.String, Schema.Null]),
    status: Schema.Union([
      Schema.Literals([
        "INVOKED",
        "RECORDING",
        "UPLOADING",
        "UPLOADED",
        "ERRORED",
        "PAUSED",
      ]),
      Schema.String,
    ]),
    stoppedTime: Schema.Union([Schema.String, Schema.Null]),
    recordingDuration: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      audioDownloadUrl: "audio_download_url",
      downloadUrl: "download_url",
      downloadUrlExpiry: "download_url_expiry",
      fileSize: "file_size",
      invokedTime: "invoked_time",
      outputFileName: "output_file_name",
      sessionId: "session_id",
      startedTime: "started_time",
      status: "status",
      stoppedTime: "stopped_time",
      recordingDuration: "recording_duration",
    }),
  ),
) as unknown as Schema.Codec<Data2>;

interface Data3 {
  /** ID of the session */
  id: string;
  /** ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the form `abcdef-ghijkl` */
  associatedId: string;
  /** timestamp when session created */
  createdAt: string;
  /** number of participants currently in the session */
  liveParticipants: number;
  /** number of maximum participants that were in the session */
  maxConcurrentParticipants: number;
  /** Title of the meeting this session belongs to */
  meetingDisplayName: string;
  /** number of minutes consumed since the session started */
  minutesConsumed: number;
  /** App id that hosted this session */
  organizationId: string;
  /** timestamp when session started */
  startedAt: string;
  /** current status of session */
  status: "LIVE" | "ENDED" | (string & {});
  /** type of session */
  type: "meeting" | "livestream" | "participant" | (string & {});
  /** timestamp when session was last updated */
  updatedAt: string;
  breakoutRooms?: unknown[] | null;
  /** timestamp when session ended */
  endedAt?: string | null;
  /** Any meta data about session. */
  meta?: unknown | null;
}
const Data3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    associatedId: Schema.String,
    createdAt: Schema.String,
    liveParticipants: Schema.Number,
    maxConcurrentParticipants: Schema.Number,
    meetingDisplayName: Schema.String,
    minutesConsumed: Schema.Number,
    organizationId: Schema.String,
    startedAt: Schema.String,
    status: Schema.Union([Schema.Literals(["LIVE", "ENDED"]), Schema.String]),
    type: Schema.Union([
      Schema.Literals(["meeting", "livestream", "participant"]),
      Schema.String,
    ]),
    updatedAt: Schema.String,
    breakoutRooms: Schema.optional(
      Schema.Union([Schema.Array(Schema.Unknown), Schema.Null]),
    ),
    endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    meta: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      associatedId: "associated_id",
      createdAt: "created_at",
      liveParticipants: "live_participants",
      maxConcurrentParticipants: "max_concurrent_participants",
      meetingDisplayName: "meeting_display_name",
      minutesConsumed: "minutes_consumed",
      organizationId: "organization_id",
      startedAt: "started_at",
      status: "status",
      type: "type",
      updatedAt: "updated_at",
      breakoutRooms: "breakout_rooms",
      endedAt: "ended_at",
      meta: "meta",
    }),
  ),
) as unknown as Schema.Codec<Data3>;

interface Paging {
  endOffset?: number | null;
  startOffset?: number | null;
  totalCount?: number | null;
}
const Paging = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endOffset: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    startOffset: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      endOffset: "end_offset",
      startOffset: "start_offset",
      totalCount: "total_count",
    }),
  ),
) as unknown as Schema.Codec<Paging>;

interface Data4 {
  /** The ID of the livestream. */
  id?: string | null;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt?: string | null;
  /** Specifies if the livestream was disabled. */
  disabled?: string | null;
  /** The server URL to which the RTMP encoder sends the video and audio data. */
  ingestServer?: string | null;
  /** ID of the meeting. */
  meetingId?: string | null;
  /** Name of the livestream. */
  name?: string | null;
  paging?: {
    endOffset?: number | null;
    startOffset?: number | null;
    totalCount?: number | null;
  } | null;
  /** The web address that viewers can use to watch the livestream. */
  playbackUrl?: string | null;
  status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
  /** Unique key for accessing each livestream. */
  streamKey?: string | null;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt?: string | null;
}
const Data4 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestServer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    meetingId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paging: Schema.optional(Schema.Union([Paging, Schema.Null])),
    playbackUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["LIVE", "IDLE", "ERRORED", "INVOKED"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    streamKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      disabled: "disabled",
      ingestServer: "ingest_server",
      meetingId: "meeting_id",
      name: "name",
      paging: "paging",
      playbackUrl: "playback_url",
      status: "status",
      streamKey: "stream_key",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Data4>;

interface Data5 {
  action?: string | null;
  kickedParticipantsCount?: number | null;
}
const Data5 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    kickedParticipantsCount: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      action: "action",
      kickedParticipantsCount: "kicked_participants_count",
    }),
  ),
) as unknown as Schema.Codec<Data5>;

interface Data6 {
  id?: string | null;
  createdAt?: string | null;
  name?: string | null;
}
const Data6 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ id: "id", createdAt: "created_at", name: "name" }),
  ),
) as unknown as Schema.Codec<Data6>;

interface Data7 {
  app?: {
    id?: string | null;
    createdAt?: string | null;
    name?: string | null;
  } | null;
}
const Data7 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    app: Schema.optional(Schema.Union([Data6, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data7>;

interface Data8 {
  /** The livestream ID. */
  id?: string | null;
  /** Specifies if the livestream was disabled. */
  disabled?: boolean | null;
  /** The server URL to which the RTMP encoder should send the video and audio data. */
  ingestServer?: string | null;
  meetingId?: string | null;
  name?: string | null;
  /** The web address that viewers can use to watch the livestream. */
  playbackUrl?: string | null;
  status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
  /** Unique key for accessing each livestream. */
  streamKey?: string | null;
}
const Data8 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    ingestServer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    meetingId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    playbackUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["LIVE", "IDLE", "ERRORED", "INVOKED"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    streamKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      disabled: "disabled",
      ingestServer: "ingest_server",
      meetingId: "meeting_id",
      name: "name",
      playbackUrl: "playback_url",
      status: "status",
      streamKey: "stream_key",
    }),
  ),
) as unknown as Schema.Codec<Data8>;

interface Data9 {
  /** Count of total livestreams. */
  count?: number | null;
  /** Total time duration for which the input was given or the meeting was streamed. */
  totalIngestSeconds?: number | null;
  /** Total view time for which the viewers watched the stream. */
  totalViewerSeconds?: number | null;
}
const Data9 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    totalIngestSeconds: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    totalViewerSeconds: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      totalIngestSeconds: "total_ingest_seconds",
      totalViewerSeconds: "total_viewer_seconds",
    }),
  ),
) as unknown as Schema.Codec<Data9>;

interface Data10 {
  /** Count of total livestream sessions. */
  count?: number | null;
  /** Analytics date. */
  date?: string | null;
  /** Total time duration for which the input was given or the meeting was streamed. */
  totalIngestSeconds?: number | null;
  /** Total view time for which the viewers watched the stream. */
  totalViewerSeconds?: number | null;
}
const Data10 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    date: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    totalIngestSeconds: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    totalViewerSeconds: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      date: "date",
      totalIngestSeconds: "total_ingest_seconds",
      totalViewerSeconds: "total_viewer_seconds",
    }),
  ),
) as unknown as Schema.Codec<Data10>;

interface VideoConfig {
  /** Height of the livestreaming video in pixels */
  height?: number | null;
  /** Width of the livestreaming video in pixels */
  width?: number | null;
}
const VideoConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    height: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    width: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<VideoConfig>;

interface Data11 {
  /** The livestream ID. */
  id?: string | null;
  /** The server URL to which the RTMP encoder sends the video and audio data. */
  ingestServer?: string | null;
  /** The web address that viewers can use to watch the livestream. */
  playbackUrl?: string | null;
  status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
  /** Unique key for accessing each livestream. */
  streamKey?: string | null;
}
const Data11 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestServer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    playbackUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["LIVE", "IDLE", "ERRORED", "INVOKED"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    streamKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      ingestServer: "ingest_server",
      playbackUrl: "playback_url",
      status: "status",
      streamKey: "stream_key",
    }),
  ),
) as unknown as Schema.Codec<Data11>;

interface Data12 {
  message?: string | null;
}
const Data12 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data12>;

interface Data13 {
  /** The livestream ID. */
  id?: string | null;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt?: string | null;
  /** The server URL to which the RTMP encoder sends the video and audio data. */
  errMessage?: string | null;
  /** Name of the livestream. */
  ingestSeconds?: number | null;
  livestreamId?: string | null;
  /** Unique key for accessing each livestream. */
  startedTime?: string | null;
  /** The web address that viewers can use to watch the livestream. */
  stoppedTime?: string | null;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt?: string | null;
  /** Specifies if the livestream was disabled. */
  viewerSeconds?: number | null;
}
const Data13 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    livestreamId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    stoppedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    viewerSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      errMessage: "err_message",
      ingestSeconds: "ingest_seconds",
      livestreamId: "livestream_id",
      startedTime: "started_time",
      stoppedTime: "stopped_time",
      updatedAt: "updated_at",
      viewerSeconds: "viewer_seconds",
    }),
  ),
) as unknown as Schema.Codec<Data13>;

interface Session2 {
  /** ID of the session. */
  id?: string | null;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt?: string | null;
  errMessage?: string | null;
  /** The time duration for which the input was given or the meeting was streamed. */
  ingestSeconds?: number | null;
  /** Timestamp the object was invoked. The time is returned in ISO format. */
  invokedTime?: string | null;
  livestreamId?: string | null;
  /** Timestamp the object was started. The time is returned in ISO format. */
  startedTime?: string | null;
  /** Timestamp the object was stopped. The time is returned in ISO format. */
  stoppedTime?: string | null;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt?: string | null;
  /** The total view time for which the viewers watched the stream. */
  viewerSeconds?: number | null;
}
const Session2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    invokedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    livestreamId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    startedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    stoppedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    viewerSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      errMessage: "err_message",
      ingestSeconds: "ingest_seconds",
      invokedTime: "invoked_time",
      livestreamId: "livestream_id",
      startedTime: "started_time",
      stoppedTime: "stopped_time",
      updatedAt: "updated_at",
      viewerSeconds: "viewer_seconds",
    }),
  ),
) as unknown as Schema.Codec<Session2>;

interface Data14 {
  livestream?: {
    id?: string | null;
    createdAt?: string | null;
    disabled?: string | null;
    ingestServer?: string | null;
    meetingId?: string | null;
    name?: string | null;
    playbackUrl?: string | null;
    status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
    streamKey?: string | null;
    updatedAt?: string | null;
  } | null;
  paging?: {
    endOffset?: number | null;
    startOffset?: number | null;
    totalCount?: number | null;
  } | null;
  session?: {
    id?: string | null;
    createdAt?: string | null;
    errMessage?: string | null;
    ingestSeconds?: number | null;
    invokedTime?: string | null;
    livestreamId?: string | null;
    startedTime?: string | null;
    stoppedTime?: string | null;
    updatedAt?: string | null;
    viewerSeconds?: number | null;
  } | null;
}
const Data14 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    livestream: Schema.optional(Schema.Union([Livestream, Schema.Null])),
    paging: Schema.optional(Schema.Union([Paging, Schema.Null])),
    session: Schema.optional(Schema.Union([Session2, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data14>;

interface AudioConfig {
  /** Audio signal pathway within an audio file that carries a specific sound source. */
  channel?: "mono" | "stereo" | (string & {}) | null;
  /** Codec using which the recording will be encoded. If VP8/VP9 is selected for videoConfig, changing audioConfig is not allowed. In this case, the codec in the audioConfig is automatically set to vorbis. */
  codec?: "MP3" | "AAC" | (string & {}) | null;
  /** Controls whether to export audio file seperately */
  exportFile?: boolean | null;
}
const AudioConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    channel: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["mono", "stereo"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    codec: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["MP3", "AAC"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    exportFile: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      channel: "channel",
      codec: "codec",
      exportFile: "export_file",
    }),
  ),
) as unknown as Schema.Codec<AudioConfig>;

interface LiveStreamingConfig {
  /** RTMP URL to stream to */
  rtmpUrl?: string | null;
}
const LiveStreamingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    rtmpUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ rtmpUrl: "rtmp_url" })),
) as unknown as Schema.Codec<LiveStreamingConfig>;

interface RealtimekitBucketConfig {
  /** Controls whether recordings are uploaded to RealtimeKit's bucket. If set to false, `download_url`, `audio_download_url`, `download_url_expiry` won't be generated for a recording. */
  enabled: boolean;
}
const RealtimekitBucketConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
  }),
) as unknown as Schema.Codec<RealtimekitBucketConfig>;

interface StorageConfig {
  /** Type of storage media. */
  type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
  /** Authentication method used for "sftp" type storage medium */
  authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
  /** Name of the storage medium's bucket. */
  bucket?: string | null;
  /** SSH destination server host for SFTP type storage medium */
  host?: string | null;
  /** SSH destination server password for SFTP type storage medium when auth_method is "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh private key. */
  password?: string | null;
  /** Path relative to the bucket root at which the recording will be placed. */
  path?: string | null;
  /** SSH destination server port for SFTP type storage medium */
  port?: number | null;
  /** Private key used to login to destination SSH server for SFTP type storage medium, when auth_method used is "KEY" */
  privateKey?: string | null;
  /** Region of the storage medium. */
  region?: string | null;
  /** Secret key of the storage medium. Similar to `access_key`, it is only writeable by clients, not readable. */
  secret?: string | null;
  /** SSH destination server username for SFTP type storage medium */
  username?: string | null;
}
const StorageConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Union([
      Schema.Literals(["aws", "azure", "digitalocean", "gcs", "sftp"]),
      Schema.String,
    ]),
    authMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["KEY", "PASSWORD"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    host: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    password: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    privateKey: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    secret: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      authMethod: "auth_method",
      bucket: "bucket",
      host: "host",
      password: "password",
      path: "path",
      port: "port",
      privateKey: "private_key",
      region: "region",
      secret: "secret",
      username: "username",
    }),
  ),
) as unknown as Schema.Codec<StorageConfig>;

interface Watermark {
  /** Position of the watermark */
  position?:
    | "left top"
    | "right top"
    | "left bottom"
    | "right bottom"
    | (string & {})
    | null;
  /** Size of the watermark */
  size?: { height?: number | null; width?: number | null } | null;
  /** URL of the watermark image */
  url?: string | null;
}
const Watermark = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    position: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "left top",
            "right top",
            "left bottom",
            "right bottom",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    size: Schema.optional(Schema.Union([VideoConfig, Schema.Null])),
    url: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Watermark>;

interface VideoConfig2 {
  /** Codec using which the recording will be encoded. */
  codec?: "H264" | "VP8" | (string & {}) | null;
  /** Controls whether to export video file seperately */
  exportFile?: boolean | null;
  /** Height of the recording video in pixels */
  height?: number | null;
  /** Watermark to be added to the recording */
  watermark?: {
    position?:
      | "left top"
      | "right top"
      | "left bottom"
      | "right bottom"
      | (string & {})
      | null;
    size?: { height?: number | null; width?: number | null } | null;
    url?: string | null;
  } | null;
  /** Width of the recording video in pixels */
  width?: number | null;
}
const VideoConfig2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    codec: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["H264", "VP8"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    exportFile: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    height: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    watermark: Schema.optional(Schema.Union([Watermark, Schema.Null])),
    width: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      codec: "codec",
      exportFile: "export_file",
      height: "height",
      watermark: "watermark",
      width: "width",
    }),
  ),
) as unknown as Schema.Codec<VideoConfig2>;

interface RecordingConfig {
  /** Object containing configuration regarding the audio that is being recorded. */
  audioConfig?: {
    channel?: "mono" | "stereo" | (string & {}) | null;
    codec?: "MP3" | "AAC" | (string & {}) | null;
    exportFile?: boolean | null;
  } | null;
  /** Adds a prefix to the beginning of the file name of the recording. */
  fileNamePrefix?: string | null;
  liveStreamingConfig?: { rtmpUrl?: string | null } | null;
  /** Specifies the maximum duration for recording in seconds, ranging from a minimum of 60 seconds to a maximum of 24 hours. */
  maxSeconds?: number | null;
  realtimekitBucketConfig?: { enabled: boolean } | null;
  storageConfig?: {
    type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
    authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
    bucket?: string | null;
    host?: string | null;
    password?: string | null;
    path?: string | null;
    port?: number | null;
    privateKey?: string | null;
    region?: string | null;
    secret?: string | null;
    username?: string | null;
  } | null;
  videoConfig?: {
    codec?: "H264" | "VP8" | (string & {}) | null;
    exportFile?: boolean | null;
    height?: number | null;
    watermark?: {
      position?:
        | "left top"
        | "right top"
        | "left bottom"
        | "right bottom"
        | (string & {})
        | null;
      size?: { height?: number | null; width?: number | null } | null;
      url?: string | null;
    } | null;
    width?: number | null;
  } | null;
}
const RecordingConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    audioConfig: Schema.optional(Schema.Union([AudioConfig, Schema.Null])),
    fileNamePrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    liveStreamingConfig: Schema.optional(
      Schema.Union([LiveStreamingConfig, Schema.Null]),
    ),
    maxSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    realtimekitBucketConfig: Schema.optional(
      Schema.Union([RealtimekitBucketConfig, Schema.Null]),
    ),
    storageConfig: Schema.optional(Schema.Union([StorageConfig, Schema.Null])),
    videoConfig: Schema.optional(Schema.Union([VideoConfig2, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      audioConfig: "audio_config",
      fileNamePrefix: "file_name_prefix",
      liveStreamingConfig: "live_streaming_config",
      maxSeconds: "max_seconds",
      realtimekitBucketConfig: "realtimekit_bucket_config",
      storageConfig: "storage_config",
      videoConfig: "video_config",
    }),
  ),
) as unknown as Schema.Codec<RecordingConfig>;

interface Data15 {
  /** ID of the meeting. */
  id: string;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt: string;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt: string;
  /** Specifies if the meeting should start getting livestreamed on start. */
  liveStreamOnStart?: boolean | null;
  /** Specifies if Chat within a meeting should persist for a week. */
  persistChat?: boolean | null;
  /** Specifies if the meeting should start getting recorded as soon as someone joins the meeting. */
  recordOnStart?: boolean | null;
  /** Recording Configurations to be used for this meeting. This level of configs takes higher preference over App level configs on the RealtimeKit developer portal. */
  recordingConfig?: {
    audioConfig?: {
      channel?: "mono" | "stereo" | (string & {}) | null;
      codec?: "MP3" | "AAC" | (string & {}) | null;
      exportFile?: boolean | null;
    } | null;
    fileNamePrefix?: string | null;
    liveStreamingConfig?: { rtmpUrl?: string | null } | null;
    maxSeconds?: number | null;
    realtimekitBucketConfig?: { enabled: boolean } | null;
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
      bucket?: string | null;
      host?: string | null;
      password?: string | null;
      path?: string | null;
      port?: number | null;
      privateKey?: string | null;
      region?: string | null;
      secret?: string | null;
      username?: string | null;
    } | null;
    videoConfig?: {
      codec?: "H264" | "VP8" | (string & {}) | null;
      exportFile?: boolean | null;
      height?: number | null;
      watermark?: {
        position?:
          | "left top"
          | "right top"
          | "left bottom"
          | "right bottom"
          | (string & {})
          | null;
        size?: { height?: number | null; width?: number | null } | null;
        url?: string | null;
      } | null;
      width?: number | null;
    } | null;
  } | null;
  /** Time in seconds, for which a session remains active, after the last participant has left the meeting. */
  sessionKeepAliveTimeInSecs?: number | null;
  /** Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an `INACTIVE` meeting. */
  status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
  /** Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API. */
  summarizeOnEnd?: boolean | null;
  /** Title of the meeting. */
  title?: string | null;
  /** Automatically generate transcripts when the meeting ends. */
  transcribeOnEnd?: boolean | null;
}
const Data15 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    updatedAt: Schema.String,
    liveStreamOnStart: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    persistChat: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    recordOnStart: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    recordingConfig: Schema.optional(
      Schema.Union([RecordingConfig, Schema.Null]),
    ),
    sessionKeepAliveTimeInSecs: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["ACTIVE", "INACTIVE"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    summarizeOnEnd: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    transcribeOnEnd: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      liveStreamOnStart: "live_stream_on_start",
      persistChat: "persist_chat",
      recordOnStart: "record_on_start",
      recordingConfig: "recording_config",
      sessionKeepAliveTimeInSecs: "session_keep_alive_time_in_secs",
      status: "status",
      summarizeOnEnd: "summarize_on_end",
      title: "title",
      transcribeOnEnd: "transcribe_on_end",
    }),
  ),
) as unknown as Schema.Codec<Data15>;

interface Paging2 {
  endOffset: number;
  startOffset: number;
  totalCount: number;
}
const Paging2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    endOffset: Schema.Number,
    startOffset: Schema.Number,
    totalCount: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      endOffset: "end_offset",
      startOffset: "start_offset",
      totalCount: "total_count",
    }),
  ),
) as unknown as Schema.Codec<Paging2>;

interface Summarization {
  /** Defines the style of the summary, such as general, team meeting, or sales call. */
  summaryType?:
    | "general"
    | "team_meeting"
    | "sales_call"
    | "client_check_in"
    | "interview"
    | "daily_standup"
    | "one_on_one_meeting"
    | "lecture"
    | "code_review"
    | (string & {})
    | null;
  /** Determines the text format of the summary, such as plain text or markdown. */
  textFormat?: "plain_text" | "markdown" | (string & {}) | null;
  /** Sets the maximum number of words in the meeting summary. */
  wordLimit?: number | null;
}
const Summarization = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    summaryType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "general",
            "team_meeting",
            "sales_call",
            "client_check_in",
            "interview",
            "daily_standup",
            "one_on_one_meeting",
            "lecture",
            "code_review",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    textFormat: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["plain_text", "markdown"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    wordLimit: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      summaryType: "summary_type",
      textFormat: "text_format",
      wordLimit: "word_limit",
    }),
  ),
) as unknown as Schema.Codec<Summarization>;

interface Transcription {
  /** Adds specific terms to improve accurate detection during transcription. */
  keywords?: string[] | null;
  /** Specifies the language code for transcription to ensure accurate results. */
  language?:
    | "en-US"
    | "en-IN"
    | "de"
    | "hi"
    | "sv"
    | "ru"
    | "pl"
    | "el"
    | "fr"
    | "nl"
    | (string & {})
    | null;
  /** Control the inclusion of offensive language in transcriptions. */
  profanityFilter?: boolean | null;
}
const Transcription = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    keywords: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    language: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "en-US",
            "en-IN",
            "de",
            "hi",
            "sv",
            "ru",
            "pl",
            "el",
            "fr",
            "nl",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    profanityFilter: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      keywords: "keywords",
      language: "language",
      profanityFilter: "profanity_filter",
    }),
  ),
) as unknown as Schema.Codec<Transcription>;

interface Aiconfig {
  /** Summary Config */
  summarization?: {
    summaryType?:
      | "general"
      | "team_meeting"
      | "sales_call"
      | "client_check_in"
      | "interview"
      | "daily_standup"
      | "one_on_one_meeting"
      | "lecture"
      | "code_review"
      | (string & {})
      | null;
    textFormat?: "plain_text" | "markdown" | (string & {}) | null;
    wordLimit?: number | null;
  } | null;
  /** Transcription Configurations */
  transcription?: {
    keywords?: string[] | null;
    language?:
      | "en-US"
      | "en-IN"
      | "de"
      | "hi"
      | "sv"
      | "ru"
      | "pl"
      | "el"
      | "fr"
      | "nl"
      | (string & {})
      | null;
    profanityFilter?: boolean | null;
  } | null;
}
const Aiconfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    summarization: Schema.optional(Schema.Union([Summarization, Schema.Null])),
    transcription: Schema.optional(Schema.Union([Transcription, Schema.Null])),
  }),
) as unknown as Schema.Codec<Aiconfig>;

interface StorageConfig2 {
  /** Type of storage media. */
  type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
  /** Access key of the storage medium. Access key is not required for the `gcs` storage media type.  Note that this field is not readable by clients, only writeable. */
  accessKey?: string | null;
  /** Authentication method used for "sftp" type storage medium */
  authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
  /** Name of the storage medium's bucket. */
  bucket?: string | null;
  /** SSH destination server host for SFTP type storage medium */
  host?: string | null;
  /** SSH destination server password for SFTP type storage medium when auth_method is "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh private key. */
  password?: string | null;
  /** Path relative to the bucket root at which the recording will be placed. */
  path?: string | null;
  /** SSH destination server port for SFTP type storage medium */
  port?: number | null;
  /** Private key used to login to destination SSH server for SFTP type storage medium, when auth_method used is "KEY" */
  privateKey?: string | null;
  /** Region of the storage medium. */
  region?: string | null;
  /** Secret key of the storage medium. Similar to `access_key`, it is only writeable by clients, not readable. */
  secret?: string | null;
  /** SSH destination server username for SFTP type storage medium */
  username?: string | null;
}
const StorageConfig2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Union([
      Schema.Literals(["aws", "azure", "digitalocean", "gcs", "sftp"]),
      Schema.String,
    ]),
    accessKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    authMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["KEY", "PASSWORD"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    host: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    password: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    privateKey: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    secret: Schema.optional(Schema.Union([SensitiveString, Schema.Null])),
    username: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      accessKey: "access_key",
      authMethod: "auth_method",
      bucket: "bucket",
      host: "host",
      password: "password",
      path: "path",
      port: "port",
      privateKey: "private_key",
      region: "region",
      secret: "secret",
      username: "username",
    }),
  ),
) as unknown as Schema.Codec<StorageConfig2>;

interface RecordingConfig2 {
  /** Object containing configuration regarding the audio that is being recorded. */
  audioConfig?: {
    channel?: "mono" | "stereo" | (string & {}) | null;
    codec?: "MP3" | "AAC" | (string & {}) | null;
    exportFile?: boolean | null;
  } | null;
  /** Adds a prefix to the beginning of the file name of the recording. */
  fileNamePrefix?: string | null;
  liveStreamingConfig?: { rtmpUrl?: string | null } | null;
  /** Specifies the maximum duration for recording in seconds, ranging from a minimum of 60 seconds to a maximum of 24 hours. */
  maxSeconds?: number | null;
  realtimekitBucketConfig?: { enabled: boolean } | null;
  storageConfig?: {
    type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
    accessKey?: string | null;
    authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
    bucket?: string | null;
    host?: string | null;
    password?: string | null;
    path?: string | null;
    port?: number | null;
    privateKey?: string | null;
    region?: string | null;
    secret?: string | null;
    username?: string | null;
  } | null;
  videoConfig?: {
    codec?: "H264" | "VP8" | (string & {}) | null;
    exportFile?: boolean | null;
    height?: number | null;
    watermark?: {
      position?:
        | "left top"
        | "right top"
        | "left bottom"
        | "right bottom"
        | (string & {})
        | null;
      size?: { height?: number | null; width?: number | null } | null;
      url?: string | null;
    } | null;
    width?: number | null;
  } | null;
}
const RecordingConfig2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    audioConfig: Schema.optional(Schema.Union([AudioConfig, Schema.Null])),
    fileNamePrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    liveStreamingConfig: Schema.optional(
      Schema.Union([LiveStreamingConfig, Schema.Null]),
    ),
    maxSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    realtimekitBucketConfig: Schema.optional(
      Schema.Union([RealtimekitBucketConfig, Schema.Null]),
    ),
    storageConfig: Schema.optional(Schema.Union([StorageConfig2, Schema.Null])),
    videoConfig: Schema.optional(Schema.Union([VideoConfig2, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      audioConfig: "audio_config",
      fileNamePrefix: "file_name_prefix",
      liveStreamingConfig: "live_streaming_config",
      maxSeconds: "max_seconds",
      realtimekitBucketConfig: "realtimekit_bucket_config",
      storageConfig: "storage_config",
      videoConfig: "video_config",
    }),
  ),
) as unknown as Schema.Codec<RecordingConfig2>;

interface Data16 {
  /** ID of the meeting. */
  id: string;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt: string;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt: string;
  /** The AI Config allows you to customize the behavior of meeting transcriptions and summaries */
  aiConfig?: {
    summarization?: {
      summaryType?:
        | "general"
        | "team_meeting"
        | "sales_call"
        | "client_check_in"
        | "interview"
        | "daily_standup"
        | "one_on_one_meeting"
        | "lecture"
        | "code_review"
        | (string & {})
        | null;
      textFormat?: "plain_text" | "markdown" | (string & {}) | null;
      wordLimit?: number | null;
    } | null;
    transcription?: {
      keywords?: string[] | null;
      language?:
        | "en-US"
        | "en-IN"
        | "de"
        | "hi"
        | "sv"
        | "ru"
        | "pl"
        | "el"
        | "fr"
        | "nl"
        | (string & {})
        | null;
      profanityFilter?: boolean | null;
    } | null;
  } | null;
  /** Specifies if the meeting should start getting livestreamed on start. */
  liveStreamOnStart?: boolean | null;
  /** Specifies if Chat within a meeting should persist for a week. */
  persistChat?: boolean | null;
  /** Specifies if the meeting should start getting recorded as soon as someone joins the meeting. */
  recordOnStart?: boolean | null;
  /** Recording Configurations to be used for this meeting. This level of configs takes higher preference over App level configs on the RealtimeKit developer portal. */
  recordingConfig?: {
    audioConfig?: {
      channel?: "mono" | "stereo" | (string & {}) | null;
      codec?: "MP3" | "AAC" | (string & {}) | null;
      exportFile?: boolean | null;
    } | null;
    fileNamePrefix?: string | null;
    liveStreamingConfig?: { rtmpUrl?: string | null } | null;
    maxSeconds?: number | null;
    realtimekitBucketConfig?: { enabled: boolean } | null;
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
      bucket?: string | null;
      host?: string | null;
      password?: string | null;
      path?: string | null;
      port?: number | null;
      privateKey?: string | null;
      region?: string | null;
      secret?: string | null;
      username?: string | null;
    } | null;
    videoConfig?: {
      codec?: "H264" | "VP8" | (string & {}) | null;
      exportFile?: boolean | null;
      height?: number | null;
      watermark?: {
        position?:
          | "left top"
          | "right top"
          | "left bottom"
          | "right bottom"
          | (string & {})
          | null;
        size?: { height?: number | null; width?: number | null } | null;
        url?: string | null;
      } | null;
      width?: number | null;
    } | null;
  } | null;
  /** Time in seconds, for which a session remains active, after the last participant has left the meeting. */
  sessionKeepAliveTimeInSecs?: number | null;
  /** Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an `INACTIVE` meeting. */
  status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
  /** Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API. */
  summarizeOnEnd?: boolean | null;
  /** Title of the meeting. */
  title?: string | null;
  /** Automatically generate transcripts when the meeting ends. */
  transcribeOnEnd?: boolean | null;
}
const Data16 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    updatedAt: Schema.String,
    aiConfig: Schema.optional(Schema.Union([Aiconfig, Schema.Null])),
    liveStreamOnStart: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    persistChat: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    recordOnStart: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    recordingConfig: Schema.optional(
      Schema.Union([RecordingConfig, Schema.Null]),
    ),
    sessionKeepAliveTimeInSecs: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["ACTIVE", "INACTIVE"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    summarizeOnEnd: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    transcribeOnEnd: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      aiConfig: "ai_config",
      liveStreamOnStart: "live_stream_on_start",
      persistChat: "persist_chat",
      recordOnStart: "record_on_start",
      recordingConfig: "recording_config",
      sessionKeepAliveTimeInSecs: "session_keep_alive_time_in_secs",
      status: "status",
      summarizeOnEnd: "summarize_on_end",
      title: "title",
      transcribeOnEnd: "transcribe_on_end",
    }),
  ),
) as unknown as Schema.Codec<Data16>;

interface Data17 {
  /** The livestream ID. */
  id?: string | null;
  /** Timestamp the object was created at. The time is returned in ISO format. */
  createdAt?: string | null;
  /** Specifies if the livestream was disabled. */
  disabled?: string | null;
  /** The server URL to which the RTMP encoder sends the video and audio data. */
  ingestServer?: string | null;
  meetingId?: string | null;
  /** Name of the livestream. */
  name?: string | null;
  /** The web address that viewers can use to watch the livestream. */
  playbackUrl?: string | null;
  status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
  /** Unique key for accessing each livestream. */
  streamKey?: string | null;
  /** Timestamp the object was updated at. The time is returned in ISO format. */
  updatedAt?: string | null;
}
const Data17 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ingestServer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    meetingId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    playbackUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["LIVE", "IDLE", "ERRORED", "INVOKED"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    streamKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      disabled: "disabled",
      ingestServer: "ingest_server",
      meetingId: "meeting_id",
      name: "name",
      playbackUrl: "playback_url",
      status: "status",
      streamKey: "stream_key",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Data17>;

interface Data18 {
  /** ID of the participant. */
  id: string;
  /** When this object was created. The time is returned in ISO format. */
  createdAt: string;
  /** A unique participant ID generated by the client. */
  customParticipantId: string;
  /** Preset applied to the participant. */
  presetName: string;
  /** When this object was updated. The time is returned in ISO format. */
  updatedAt: string;
  /** Name of the participant. */
  name?: string | null;
  /** URL to a picture of the participant. */
  picture?: string | null;
}
const Data18 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    customParticipantId: Schema.String,
    presetName: Schema.String,
    updatedAt: Schema.String,
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    picture: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      customParticipantId: "custom_participant_id",
      presetName: "preset_name",
      updatedAt: "updated_at",
      name: "name",
      picture: "picture",
    }),
  ),
) as unknown as Schema.Codec<Data18>;

interface Data19 {
  /** Timestamp this object was created at. The time is returned in ISO format. */
  createdAt: string;
  /** A unique participant ID generated by the client. */
  customParticipantId: string;
  /** ID of the preset applied to this participant. */
  presetId: string;
  /** Timestamp this object was updated at. The time is returned in ISO format. */
  updatedAt: string;
}
const Data19 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    createdAt: Schema.String,
    customParticipantId: Schema.String,
    presetId: Schema.String,
    updatedAt: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      createdAt: "created_at",
      customParticipantId: "custom_participant_id",
      presetId: "preset_id",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Data19>;

interface Caller {
  /** Name of the user who started the recording. */
  name?: string | null;
  /** The type can be an App or a user. If the type is `user`, then only the `user_Id` and `name` are returned. */
  type?: "ORGANIZATION" | "USER" | (string & {}) | null;
  /** The user ID of the person who started the recording. */
  userId?: string | null;
}
const Caller = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["ORGANIZATION", "USER"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    userId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ name: "name", type: "type", userId: "user_Id" })),
) as unknown as Schema.Codec<Caller>;

interface StartReason {
  caller?: {
    name?: string | null;
    type?: "ORGANIZATION" | "USER" | (string & {}) | null;
    userId?: string | null;
  } | null;
  /** Specifies if the recording was started using the "Start a Recording"API or using the parameter RECORD_ON_START in the "Create a meeting" API.  If the recording is initiated using the "RECORD_ON_START" */
  reason?: "API_CALL" | "RECORD_ON_START" | (string & {}) | null;
}
const StartReason = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    caller: Schema.optional(Schema.Union([Caller, Schema.Null])),
    reason: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["API_CALL", "RECORD_ON_START"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<StartReason>;

interface StopReason {
  caller?: {
    name?: string | null;
    type?: "ORGANIZATION" | "USER" | (string & {}) | null;
    userId?: string | null;
  } | null;
  /** Specifies the reason why the recording stopped. */
  reason?:
    | "API_CALL"
    | "INTERNAL_ERROR"
    | "ALL_PEERS_LEFT"
    | (string & {})
    | null;
}
const StopReason = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    caller: Schema.optional(Schema.Union([Caller, Schema.Null])),
    reason: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["API_CALL", "INTERNAL_ERROR", "ALL_PEERS_LEFT"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<StopReason>;

interface Data20 {
  /** ID of the recording */
  id: string;
  /** If the audio_config is passed, the URL for downloading the audio recording is returned. */
  audioDownloadUrl: string | null;
  /** URL where the recording can be downloaded. */
  downloadUrl: string | null;
  /** Timestamp when the download URL expires. */
  downloadUrlExpiry: string | null;
  /** File size of the recording, in bytes. */
  fileSize: number | null;
  /** Timestamp when this recording was invoked. */
  invokedTime: string;
  /** File name of the recording. */
  outputFileName: string;
  /** ID of the meeting session this recording is for. */
  sessionId: string | null;
  /** Timestamp when this recording actually started after being invoked. Usually a few seconds after `invoked_time`. */
  startedTime: string | null;
  /** Current status of the recording. */
  status:
    | "INVOKED"
    | "RECORDING"
    | "UPLOADING"
    | "UPLOADED"
    | "ERRORED"
    | "PAUSED"
    | (string & {});
  /** Timestamp when this recording was stopped. Optional; is present only when the recording has actually been stopped. */
  stoppedTime: string | null;
  /** Total recording time in seconds. */
  recordingDuration?: number | null;
  startReason?: {
    caller?: {
      name?: string | null;
      type?: "ORGANIZATION" | "USER" | (string & {}) | null;
      userId?: string | null;
    } | null;
    reason?: "API_CALL" | "RECORD_ON_START" | (string & {}) | null;
  } | null;
  stopReason?: {
    caller?: {
      name?: string | null;
      type?: "ORGANIZATION" | "USER" | (string & {}) | null;
      userId?: string | null;
    } | null;
    reason?:
      | "API_CALL"
      | "INTERNAL_ERROR"
      | "ALL_PEERS_LEFT"
      | (string & {})
      | null;
  } | null;
  storageConfig?: {
    type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
    authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
    bucket?: string | null;
    host?: string | null;
    password?: string | null;
    path?: string | null;
    port?: number | null;
    privateKey?: string | null;
    region?: string | null;
    secret?: string | null;
    username?: string | null;
  } | null;
}
const Data20 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    audioDownloadUrl: Schema.Union([Schema.String, Schema.Null]),
    downloadUrl: Schema.Union([Schema.String, Schema.Null]),
    downloadUrlExpiry: Schema.Union([Schema.String, Schema.Null]),
    fileSize: Schema.Union([Schema.Number, Schema.Null]),
    invokedTime: Schema.String,
    outputFileName: Schema.String,
    sessionId: Schema.Union([Schema.String, Schema.Null]),
    startedTime: Schema.Union([Schema.String, Schema.Null]),
    status: Schema.Union([
      Schema.Literals([
        "INVOKED",
        "RECORDING",
        "UPLOADING",
        "UPLOADED",
        "ERRORED",
        "PAUSED",
      ]),
      Schema.String,
    ]),
    stoppedTime: Schema.Union([Schema.String, Schema.Null]),
    recordingDuration: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    startReason: Schema.optional(Schema.Union([StartReason, Schema.Null])),
    stopReason: Schema.optional(Schema.Union([StopReason, Schema.Null])),
    storageConfig: Schema.optional(Schema.Union([StorageConfig, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      audioDownloadUrl: "audio_download_url",
      downloadUrl: "download_url",
      downloadUrlExpiry: "download_url_expiry",
      fileSize: "file_size",
      invokedTime: "invoked_time",
      outputFileName: "output_file_name",
      sessionId: "session_id",
      startedTime: "started_time",
      status: "status",
      stoppedTime: "stopped_time",
      recordingDuration: "recording_duration",
      startReason: "start_reason",
      stopReason: "stop_reason",
      storageConfig: "storage_config",
    }),
  ),
) as unknown as Schema.Codec<Data20>;

interface DayStat {
  day?: string | null;
  /** Total recording minutes for a specific day */
  totalRecordingMinutes?: number | null;
  /** Total number of recordings for a specific day */
  totalRecordings?: number | null;
}
const DayStat = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    day: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    totalRecordingMinutes: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    totalRecordings: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      day: "day",
      totalRecordingMinutes: "total_recording_minutes",
      totalRecordings: "total_recordings",
    }),
  ),
) as unknown as Schema.Codec<DayStat>;

interface RecordingStats {
  /** Day wise recording stats */
  dayStats?:
    | {
        day?: string | null;
        totalRecordingMinutes?: number | null;
        totalRecordings?: number | null;
      }[]
    | null;
  /** Total number of recordings during the range specified */
  recordingCount?: number | null;
  /** Total recording minutes during the range specified */
  recordingMinutesConsumed?: number | null;
}
const RecordingStats = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dayStats: Schema.optional(
      Schema.Union([Schema.Array(DayStat), Schema.Null]),
    ),
    recordingCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    recordingMinutesConsumed: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      dayStats: "day_stats",
      recordingCount: "recording_count",
      recordingMinutesConsumed: "recording_minutes_consumed",
    }),
  ),
) as unknown as Schema.Codec<RecordingStats>;

interface DayStat2 {
  day?: string | null;
  /** Total session minutes for a specific day */
  totalSessionMinutes?: number | null;
  /** Total number of sessions for a specific day */
  totalSessions?: number | null;
}
const DayStat2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    day: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    totalSessionMinutes: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    totalSessions: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      day: "day",
      totalSessionMinutes: "total_session_minutes",
      totalSessions: "total_sessions",
    }),
  ),
) as unknown as Schema.Codec<DayStat2>;

interface SessionStats {
  /** Day wise session stats */
  dayStats?:
    | {
        day?: string | null;
        totalSessionMinutes?: number | null;
        totalSessions?: number | null;
      }[]
    | null;
  /** Total number of sessions during the range specified */
  sessionsCount?: number | null;
  /** Total session minutes during the range specified */
  sessionsMinutesConsumed?: number | null;
}
const SessionStats = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dayStats: Schema.optional(
      Schema.Union([Schema.Array(DayStat2), Schema.Null]),
    ),
    sessionsCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    sessionsMinutesConsumed: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      dayStats: "day_stats",
      sessionsCount: "sessions_count",
      sessionsMinutesConsumed: "sessions_minutes_consumed",
    }),
  ),
) as unknown as Schema.Codec<SessionStats>;

interface Data21 {
  /** Recording statistics of an App during the range specified */
  recordingStats?: {
    dayStats?:
      | {
          day?: string | null;
          totalRecordingMinutes?: number | null;
          totalRecordings?: number | null;
        }[]
      | null;
    recordingCount?: number | null;
    recordingMinutesConsumed?: number | null;
  } | null;
  /** Session statistics of an App during the range specified */
  sessionStats?: {
    dayStats?:
      | {
          day?: string | null;
          totalSessionMinutes?: number | null;
          totalSessions?: number | null;
        }[]
      | null;
    sessionsCount?: number | null;
    sessionsMinutesConsumed?: number | null;
  } | null;
}
const Data21 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    recordingStats: Schema.optional(
      Schema.Union([RecordingStats, Schema.Null]),
    ),
    sessionStats: Schema.optional(Schema.Union([SessionStats, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      recordingStats: "recording_stats",
      sessionStats: "session_stats",
    }),
  ),
) as unknown as Schema.Codec<Data21>;

interface PeerReport {
  metadata?: Record<string, unknown> | null;
  quality?: Record<string, unknown> | null;
}
const PeerReport = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    metadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    quality: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<PeerReport>;

interface Participant {
  /** ID of the participant. */
  id?: string | null;
  /** timestamp when this participant was created. */
  createdAt?: string | null;
  /** ID passed by client to create this participant. */
  customParticipantId?: string | null;
  /** Display name of participant when joining the session. */
  displayName?: string | null;
  /** number of minutes for which the participant was in the session. */
  duration?: number | null;
  /** timestamp at which participant joined the session. */
  joinedAt?: string | null;
  /** timestamp at which participant left the session. */
  leftAt?: string | null;
  peerEvents?: Record<string, unknown>[] | null;
  /** Peer call statistics report. */
  peerReport?: {
    metadata?: Record<string, unknown> | null;
    quality?: Record<string, unknown> | null;
  } | null;
  /** Name of the preset associated with the participant. */
  role?: string | null;
  sessionId?: string | null;
  /** timestamp when this participant's data was last updated. */
  updatedAt?: string | null;
  /** User id for this participant. */
  userId?: string | null;
}
const Participant = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customParticipantId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    displayName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    duration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    joinedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    leftAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    peerEvents: Schema.optional(
      Schema.Union([
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        Schema.Null,
      ]),
    ),
    peerReport: Schema.optional(Schema.Union([PeerReport, Schema.Null])),
    role: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sessionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    userId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      customParticipantId: "custom_participant_id",
      displayName: "display_name",
      duration: "duration",
      joinedAt: "joined_at",
      leftAt: "left_at",
      peerEvents: "peer_events",
      peerReport: "peer_report",
      role: "role",
      sessionId: "session_id",
      updatedAt: "updated_at",
      userId: "user_id",
    }),
  ),
) as unknown as Schema.Codec<Participant>;

interface Data22 {
  participant?: {
    id?: string | null;
    createdAt?: string | null;
    customParticipantId?: string | null;
    displayName?: string | null;
    duration?: number | null;
    joinedAt?: string | null;
    leftAt?: string | null;
    peerEvents?: Record<string, unknown>[] | null;
    peerReport?: {
      metadata?: Record<string, unknown> | null;
      quality?: Record<string, unknown> | null;
    } | null;
    role?: string | null;
    sessionId?: string | null;
    updatedAt?: string | null;
    userId?: string | null;
  } | null;
}
const Data22 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    participant: Schema.optional(Schema.Union([Participant, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data22>;

interface Data23 {
  /** ID of the participant. */
  id: string;
  /** The participant's auth token that can be used for joining a meeting from the client side. */
  token: string;
  /** When this object was created. The time is returned in ISO format. */
  createdAt: string;
  /** A unique participant ID generated by the client. */
  customParticipantId: string;
  /** Preset applied to the participant. */
  presetName: string;
  /** When this object was updated. The time is returned in ISO format. */
  updatedAt: string;
  /** Name of the participant. */
  name?: string | null;
  /** URL to a picture of the participant. */
  picture?: string | null;
}
const Data23 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    token: Schema.String,
    createdAt: Schema.String,
    customParticipantId: Schema.String,
    presetName: Schema.String,
    updatedAt: Schema.String,
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    picture: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      token: "token",
      createdAt: "created_at",
      customParticipantId: "custom_participant_id",
      presetName: "preset_name",
      updatedAt: "updated_at",
      name: "name",
      picture: "picture",
    }),
  ),
) as unknown as Schema.Codec<Data23>;

interface Participant2 {
  /** ID of the session participant */
  id: string;
  createdAt: string;
  updatedAt: string;
  /** Email of the session participant. */
  email?: string | null;
  /** Name of the session participant. */
  name?: string | null;
  /** A URL pointing to a picture of the participant. */
  picture?: string | null;
}
const Participant2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    updatedAt: Schema.String,
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    picture: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      email: "email",
      name: "name",
      picture: "picture",
    }),
  ),
) as unknown as Schema.Codec<Participant2>;

interface Data24 {
  action?: string | null;
  participants?:
    | {
        id: string;
        createdAt: string;
        updatedAt: string;
        email?: string | null;
        name?: string | null;
        picture?: string | null;
      }[]
    | null;
}
const Data24 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    participants: Schema.optional(
      Schema.Union([Schema.Array(Participant2), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Data24>;

interface Data25 {
  /** Regenerated participant's authentication token. */
  token: string;
}
const Data25 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    token: Schema.String,
  }),
) as unknown as Schema.Codec<Data25>;

interface Vote {
  id: string;
  name: string;
}
const Vote = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Vote>;

interface Option {
  count: number;
  /** Text of the answer option */
  text: string;
  votes: { id: string; name: string }[];
}
const Option = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    text: Schema.String,
    votes: Schema.Array(Vote),
  }),
) as unknown as Schema.Codec<Option>;

interface Poll {
  /** ID of the poll */
  id: string;
  /** Answer options */
  options: {
    count: number;
    text: string;
    votes: { id: string; name: string }[];
  }[];
  /** Question asked by the poll */
  question: string;
  anonymous?: boolean | null;
  createdBy?: string | null;
  hideVotes?: boolean | null;
  voted?: string[] | null;
}
const Poll = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    options: Schema.Array(Option),
    question: Schema.String,
    anonymous: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hideVotes: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    voted: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      options: "options",
      question: "question",
      anonymous: "anonymous",
      createdBy: "created_by",
      hideVotes: "hide_votes",
      voted: "voted",
    }),
  ),
) as unknown as Schema.Codec<Poll>;

interface Data26 {
  action?: string | null;
  poll?: {
    id: string;
    options: {
      count: number;
      text: string;
      votes: { id: string; name: string }[];
    }[];
    question: string;
    anonymous?: boolean | null;
    createdBy?: string | null;
    hideVotes?: boolean | null;
    voted?: string[] | null;
  } | null;
}
const Data26 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    poll: Schema.optional(Schema.Union([Poll, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data26>;

interface Data27 {
  /** ID of the preset */
  id?: string | null;
  /** Timestamp this preset was created at */
  createdAt?: string | null;
  /** Name of the preset */
  name?: string | null;
  /** Timestamp this preset was last updated */
  updatedAt?: string | null;
}
const Data27 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      name: "name",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Data27>;

interface MaxVideoStreams {
  /** Maximum number of video streams visible on desktop devices */
  desktop: number;
  /** Maximum number of streams visible on mobile devices */
  mobile: number;
}
const MaxVideoStreams = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    desktop: Schema.Number,
    mobile: Schema.Number,
  }),
) as unknown as Schema.Codec<MaxVideoStreams>;

interface Screenshare {
  /** Frame rate of screen share */
  frameRate: number;
  /** Quality of screen share */
  quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
}
const Screenshare = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    frameRate: Schema.Number,
    quality: Schema.Union([
      Schema.Literals(["hd", "vga", "qvga", "fhd", "uhd"]),
      Schema.String,
    ]),
  }).pipe(Schema.encodeKeys({ frameRate: "frame_rate", quality: "quality" })),
) as unknown as Schema.Codec<Screenshare>;

interface Video {
  /** Frame rate of participants' video */
  frameRate: number;
  /** Video quality of participants */
  quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
  /** Enable simulcast for participant videos. */
  simulcast?: boolean | null;
}
const Video = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    frameRate: Schema.Number,
    quality: Schema.Union([
      Schema.Literals(["hd", "vga", "qvga", "fhd", "uhd"]),
      Schema.String,
    ]),
    simulcast: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      frameRate: "frame_rate",
      quality: "quality",
      simulcast: "simulcast",
    }),
  ),
) as unknown as Schema.Codec<Video>;

interface Audio {
  /** Enable High Quality Audio for your meetings */
  enableHighBitrate?: boolean | null;
  /** Enable Stereo for your meetings */
  enableStereo?: boolean | null;
}
const Audio = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enableHighBitrate: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    enableStereo: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enableHighBitrate: "enable_high_bitrate",
      enableStereo: "enable_stereo",
    }),
  ),
) as unknown as Schema.Codec<Audio>;

interface Media {
  /** Configuration options for participant screen shares */
  screenshare: {
    frameRate: number;
    quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
  };
  /** Configuration options for participant videos */
  video: {
    frameRate: number;
    quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
    simulcast?: boolean | null;
  };
  /** Control options for Audio quality. */
  audio?: {
    enableHighBitrate?: boolean | null;
    enableStereo?: boolean | null;
  } | null;
}
const Media = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    screenshare: Screenshare,
    video: Video,
    audio: Schema.optional(Schema.Union([Audio, Schema.Null])),
  }),
) as unknown as Schema.Codec<Media>;

interface Config {
  /** Maximum number of screen shares that can be active at a given time */
  maxScreenshareCount: number;
  /** Maximum number of streams that are visible on a device */
  maxVideoStreams: { desktop: number; mobile: number };
  /** Media configuration options. eg: Video quality */
  media: {
    screenshare: {
      frameRate: number;
      quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
    };
    video: {
      frameRate: number;
      quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
      simulcast?: boolean | null;
    };
    audio?: {
      enableHighBitrate?: boolean | null;
      enableStereo?: boolean | null;
    } | null;
  };
  /** Type of the meeting */
  viewType:
    | "GROUP_CALL"
    | "WEBINAR"
    | "AUDIO_ROOM"
    | "LIVESTREAM"
    | (string & {});
  /** Livestream viewer quality levels. */
  livestreamViewerQualities?: number[] | null;
}
const Config = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxScreenshareCount: Schema.Number,
    maxVideoStreams: MaxVideoStreams,
    media: Media,
    viewType: Schema.Union([
      Schema.Literals(["GROUP_CALL", "WEBINAR", "AUDIO_ROOM", "LIVESTREAM"]),
      Schema.String,
    ]),
    livestreamViewerQualities: Schema.optional(
      Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      maxScreenshareCount: "max_screenshare_count",
      maxVideoStreams: "max_video_streams",
      media: "media",
      viewType: "view_type",
      livestreamViewerQualities: "livestream_viewer_qualities",
    }),
  ),
) as unknown as Schema.Codec<Config>;

interface Private {
  canReceive: boolean;
  canSend: boolean;
  files: boolean;
  text: boolean;
}
const Private = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canReceive: Schema.Boolean,
    canSend: Schema.Boolean,
    files: Schema.Boolean,
    text: Schema.Boolean,
  }).pipe(
    Schema.encodeKeys({
      canReceive: "can_receive",
      canSend: "can_send",
      files: "files",
      text: "text",
    }),
  ),
) as unknown as Schema.Codec<Private>;

interface Public {
  /** Can send messages in general */
  canSend: boolean;
  /** Can send file messages */
  files: boolean;
  /** Can send text messages */
  text: boolean;
}
const Public = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canSend: Schema.Boolean,
    files: Schema.Boolean,
    text: Schema.Boolean,
  }).pipe(
    Schema.encodeKeys({ canSend: "can_send", files: "files", text: "text" }),
  ),
) as unknown as Schema.Codec<Public>;

interface Chat {
  private: {
    canReceive: boolean;
    canSend: boolean;
    files: boolean;
    text: boolean;
  };
  public: { canSend: boolean; files: boolean; text: boolean };
}
const Chat = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    private: Private,
    public: Public,
  }),
) as unknown as Schema.Codec<Chat>;

interface ConnectedMeetings {
  canAlterConnectedMeetings: boolean;
  canSwitchConnectedMeetings: boolean;
  canSwitchToParentMeeting: boolean;
}
const ConnectedMeetings = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canAlterConnectedMeetings: Schema.Boolean,
    canSwitchConnectedMeetings: Schema.Boolean,
    canSwitchToParentMeeting: Schema.Boolean,
  }).pipe(
    Schema.encodeKeys({
      canAlterConnectedMeetings: "can_alter_connected_meetings",
      canSwitchConnectedMeetings: "can_switch_connected_meetings",
      canSwitchToParentMeeting: "can_switch_to_parent_meeting",
    }),
  ),
) as unknown as Schema.Codec<ConnectedMeetings>;

interface Audio2 {
  /** Can produce audio */
  canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
}
const Audio2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canProduce: Schema.Union([
      Schema.Literals(["ALLOWED", "NOT_ALLOWED", "CAN_REQUEST"]),
      Schema.String,
    ]),
  }).pipe(Schema.encodeKeys({ canProduce: "can_produce" })),
) as unknown as Schema.Codec<Audio2>;

interface Media2 {
  /** Audio permissions */
  audio: {
    canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
  };
  /** Screenshare permissions */
  screenshare: {
    canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
  };
  /** Video permissions */
  video: {
    canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
  };
}
const Media2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    audio: Audio2,
    screenshare: Audio2,
    video: Audio2,
  }),
) as unknown as Schema.Codec<Media2>;

interface Plugins {
  /** Can close plugins that are already open */
  canClose: boolean;
  /** Can edit plugin config */
  canEditConfig: boolean;
  /** Can start plugins */
  canStart: boolean;
  /** Plugin configuration keyed by plugin UUID. */
  config: unknown;
}
const Plugins = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canClose: Schema.Boolean,
    canEditConfig: Schema.Boolean,
    canStart: Schema.Boolean,
    config: Schema.Unknown,
  }).pipe(
    Schema.encodeKeys({
      canClose: "can_close",
      canEditConfig: "can_edit_config",
      canStart: "can_start",
      config: "config",
    }),
  ),
) as unknown as Schema.Codec<Plugins>;

interface Polls {
  /** Can create polls */
  canCreate: boolean;
  /** Can view polls */
  canView: boolean;
  /** Can vote on polls */
  canVote: boolean;
}
const Polls = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canCreate: Schema.Boolean,
    canView: Schema.Boolean,
    canVote: Schema.Boolean,
  }).pipe(
    Schema.encodeKeys({
      canCreate: "can_create",
      canView: "can_view",
      canVote: "can_vote",
    }),
  ),
) as unknown as Schema.Codec<Polls>;

interface Permissions {
  /** Whether this participant can accept waiting requests */
  acceptWaitingRequests: boolean;
  canAcceptProductionRequests: boolean;
  canChangeParticipantPermissions: boolean;
  canEditDisplayName: boolean;
  canLivestream: boolean;
  canRecord: boolean;
  canSpotlight: boolean;
  chat: {
    private: {
      canReceive: boolean;
      canSend: boolean;
      files: boolean;
      text: boolean;
    };
    public: { canSend: boolean; files: boolean; text: boolean };
  };
  connectedMeetings: {
    canAlterConnectedMeetings: boolean;
    canSwitchConnectedMeetings: boolean;
    canSwitchToParentMeeting: boolean;
  };
  disableParticipantAudio: boolean;
  disableParticipantScreensharing: boolean;
  disableParticipantVideo: boolean;
  /** Whether this participant is visible to others or not */
  hiddenParticipant: boolean;
  kickParticipant: boolean;
  /** Media permissions */
  media: {
    audio: {
      canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
    };
    screenshare: {
      canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
    };
    video: {
      canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
    };
  };
  pinParticipant: boolean;
  /** Plugin permissions */
  plugins: {
    canClose: boolean;
    canEditConfig: boolean;
    canStart: boolean;
    config: unknown;
  };
  /** Poll permissions */
  polls: { canCreate: boolean; canView: boolean; canVote: boolean };
  /** Type of the recording peer */
  recorderType: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {});
  showParticipantList: boolean;
  /** Waiting room type */
  waitingRoomType:
    | "SKIP"
    | "ON_PRIVILEGED_USER_ENTRY"
    | "SKIP_ON_ACCEPT"
    | (string & {});
  acceptStageRequests?: boolean | null;
  isRecorder?: boolean | null;
  stageAccess?:
    | "ALLOWED"
    | "NOT_ALLOWED"
    | "CAN_REQUEST"
    | (string & {})
    | null;
  stageEnabled?: boolean | null;
  transcriptionEnabled?: boolean | null;
}
const Permissions = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    acceptWaitingRequests: Schema.Boolean,
    canAcceptProductionRequests: Schema.Boolean,
    canChangeParticipantPermissions: Schema.Boolean,
    canEditDisplayName: Schema.Boolean,
    canLivestream: Schema.Boolean,
    canRecord: Schema.Boolean,
    canSpotlight: Schema.Boolean,
    chat: Chat,
    connectedMeetings: ConnectedMeetings,
    disableParticipantAudio: Schema.Boolean,
    disableParticipantScreensharing: Schema.Boolean,
    disableParticipantVideo: Schema.Boolean,
    hiddenParticipant: Schema.Boolean,
    kickParticipant: Schema.Boolean,
    media: Media2,
    pinParticipant: Schema.Boolean,
    plugins: Plugins,
    polls: Polls,
    recorderType: Schema.Union([
      Schema.Literals(["RECORDER", "LIVESTREAMER", "NONE"]),
      Schema.String,
    ]),
    showParticipantList: Schema.Boolean,
    waitingRoomType: Schema.Union([
      Schema.Literals(["SKIP", "ON_PRIVILEGED_USER_ENTRY", "SKIP_ON_ACCEPT"]),
      Schema.String,
    ]),
    acceptStageRequests: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    isRecorder: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    stageAccess: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["ALLOWED", "NOT_ALLOWED", "CAN_REQUEST"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    stageEnabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    transcriptionEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      acceptWaitingRequests: "accept_waiting_requests",
      canAcceptProductionRequests: "can_accept_production_requests",
      canChangeParticipantPermissions: "can_change_participant_permissions",
      canEditDisplayName: "can_edit_display_name",
      canLivestream: "can_livestream",
      canRecord: "can_record",
      canSpotlight: "can_spotlight",
      chat: "chat",
      connectedMeetings: "connected_meetings",
      disableParticipantAudio: "disable_participant_audio",
      disableParticipantScreensharing: "disable_participant_screensharing",
      disableParticipantVideo: "disable_participant_video",
      hiddenParticipant: "hidden_participant",
      kickParticipant: "kick_participant",
      media: "media",
      pinParticipant: "pin_participant",
      plugins: "plugins",
      polls: "polls",
      recorderType: "recorder_type",
      showParticipantList: "show_participant_list",
      waitingRoomType: "waiting_room_type",
      acceptStageRequests: "accept_stage_requests",
      isRecorder: "is_recorder",
      stageAccess: "stage_access",
      stageEnabled: "stage_enabled",
      transcriptionEnabled: "transcription_enabled",
    }),
  ),
) as unknown as Schema.Codec<Permissions>;

interface Background {
  "1000": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}
const Background = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    "1000": Schema.String,
    "600": Schema.String,
    "700": Schema.String,
    "800": Schema.String,
    "900": Schema.String,
  }),
) as unknown as Schema.Codec<Background>;

interface Brand {
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
}
const Brand = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    "300": Schema.String,
    "400": Schema.String,
    "500": Schema.String,
    "600": Schema.String,
    "700": Schema.String,
  }),
) as unknown as Schema.Codec<Brand>;

interface Colors {
  background: {
    "1000": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };
  brand: {
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
  };
  danger: string;
  success: string;
  text: string;
  textOnBrand: string;
  videoBg: string;
  warning: string;
}
const Colors = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    background: Background,
    brand: Brand,
    danger: Schema.String,
    success: Schema.String,
    text: Schema.String,
    textOnBrand: Schema.String,
    videoBg: Schema.String,
    warning: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      background: "background",
      brand: "brand",
      danger: "danger",
      success: "success",
      text: "text",
      textOnBrand: "text_on_brand",
      videoBg: "video_bg",
      warning: "warning",
    }),
  ),
) as unknown as Schema.Codec<Colors>;

interface DesignTokens {
  borderRadius:
    | "sharp"
    | "rounded"
    | "extra-rounded"
    | "circular"
    | (string & {});
  borderWidth: "none" | "thin" | "fat" | (string & {});
  colors: {
    background: {
      "1000": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
    };
    brand: {
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
    };
    danger: string;
    success: string;
    text: string;
    textOnBrand: string;
    videoBg: string;
    warning: string;
  };
  spacingBase: number;
  theme: "darkest" | "dark" | "light" | (string & {});
  fontFamily?: string | null;
  googleFont?: string | null;
  logo?: string | null;
}
const DesignTokens = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    borderRadius: Schema.Union([
      Schema.Literals(["sharp", "rounded", "extra-rounded", "circular"]),
      Schema.String,
    ]),
    borderWidth: Schema.Union([
      Schema.Literals(["none", "thin", "fat"]),
      Schema.String,
    ]),
    colors: Colors,
    spacingBase: Schema.Number,
    theme: Schema.Union([
      Schema.Literals(["darkest", "dark", "light"]),
      Schema.String,
    ]),
    fontFamily: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    googleFont: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logo: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      borderRadius: "border_radius",
      borderWidth: "border_width",
      colors: "colors",
      spacingBase: "spacing_base",
      theme: "theme",
      fontFamily: "font_family",
      googleFont: "google_font",
      logo: "logo",
    }),
  ),
) as unknown as Schema.Codec<DesignTokens>;

interface Ui {
  designTokens: {
    borderRadius:
      | "sharp"
      | "rounded"
      | "extra-rounded"
      | "circular"
      | (string & {});
    borderWidth: "none" | "thin" | "fat" | (string & {});
    colors: {
      background: {
        "1000": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
      };
      brand: {
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
      };
      danger: string;
      success: string;
      text: string;
      textOnBrand: string;
      videoBg: string;
      warning: string;
    };
    spacingBase: number;
    theme: "darkest" | "dark" | "light" | (string & {});
    fontFamily?: string | null;
    googleFont?: string | null;
    logo?: string | null;
  };
  configDiff: unknown;
}
const Ui = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    designTokens: DesignTokens,
    configDiff: Schema.Unknown,
  }).pipe(
    Schema.encodeKeys({
      designTokens: "design_tokens",
      configDiff: "config_diff",
    }),
  ),
) as unknown as Schema.Codec<Ui>;

interface Ui2 {
  designTokens: {
    borderRadius:
      | "sharp"
      | "rounded"
      | "extra-rounded"
      | "circular"
      | (string & {});
    borderWidth: "none" | "thin" | "fat" | (string & {});
    colors: {
      background: {
        "1000": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
      };
      brand: {
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
      };
      danger: string;
      success: string;
      text: string;
      textOnBrand: string;
      videoBg: string;
      warning: string;
    };
    spacingBase: number;
    theme: "darkest" | "dark" | "light" | (string & {});
    fontFamily?: string | null;
    googleFont?: string | null;
    logo?: string | null;
  };
  configDiff?: unknown | null;
}
const Ui2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    designTokens: DesignTokens,
    configDiff: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      designTokens: "design_tokens",
      configDiff: "config_diff",
    }),
  ),
) as unknown as Schema.Codec<Ui2>;

interface Data28 {
  /** ID of the preset */
  id: string;
  config: {
    maxScreenshareCount: number;
    maxVideoStreams: { desktop: number; mobile: number };
    media: {
      screenshare: {
        frameRate: number;
        quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
      };
      video: {
        frameRate: number;
        quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
        simulcast?: boolean | null;
      };
      audio?: {
        enableHighBitrate?: boolean | null;
        enableStereo?: boolean | null;
      } | null;
    };
    viewType:
      | "GROUP_CALL"
      | "WEBINAR"
      | "AUDIO_ROOM"
      | "LIVESTREAM"
      | (string & {});
    livestreamViewerQualities?: number[] | null;
  };
  /** Timestamp this preset was created at */
  createdAt: string;
  /** Name of the preset */
  name: string;
  permissions: {
    acceptWaitingRequests: boolean;
    canAcceptProductionRequests: boolean;
    canChangeParticipantPermissions: boolean;
    canEditDisplayName: boolean;
    canLivestream: boolean;
    canRecord: boolean;
    canSpotlight: boolean;
    chat: {
      private: {
        canReceive: boolean;
        canSend: boolean;
        files: boolean;
        text: boolean;
      };
      public: { canSend: boolean; files: boolean; text: boolean };
    };
    connectedMeetings: {
      canAlterConnectedMeetings: boolean;
      canSwitchConnectedMeetings: boolean;
      canSwitchToParentMeeting: boolean;
    };
    disableParticipantAudio: boolean;
    disableParticipantScreensharing: boolean;
    disableParticipantVideo: boolean;
    hiddenParticipant: boolean;
    kickParticipant: boolean;
    media: {
      audio: {
        canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
      screenshare: {
        canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
      video: {
        canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
    };
    pinParticipant: boolean;
    plugins: {
      canClose: boolean;
      canEditConfig: boolean;
      canStart: boolean;
      config: unknown;
    };
    polls: { canCreate: boolean; canView: boolean; canVote: boolean };
    recorderType: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {});
    showParticipantList: boolean;
    waitingRoomType:
      | "SKIP"
      | "ON_PRIVILEGED_USER_ENTRY"
      | "SKIP_ON_ACCEPT"
      | (string & {});
    acceptStageRequests?: boolean | null;
    isRecorder?: boolean | null;
    stageAccess?:
      | "ALLOWED"
      | "NOT_ALLOWED"
      | "CAN_REQUEST"
      | (string & {})
      | null;
    stageEnabled?: boolean | null;
    transcriptionEnabled?: boolean | null;
  };
  ui: {
    designTokens: {
      borderRadius:
        | "sharp"
        | "rounded"
        | "extra-rounded"
        | "circular"
        | (string & {});
      borderWidth: "none" | "thin" | "fat" | (string & {});
      colors: {
        background: {
          "1000": string;
          "600": string;
          "700": string;
          "800": string;
          "900": string;
        };
        brand: {
          "300": string;
          "400": string;
          "500": string;
          "600": string;
          "700": string;
        };
        danger: string;
        success: string;
        text: string;
        textOnBrand: string;
        videoBg: string;
        warning: string;
      };
      spacingBase: number;
      theme: "darkest" | "dark" | "light" | (string & {});
      fontFamily?: string | null;
      googleFont?: string | null;
      logo?: string | null;
    };
    configDiff?: unknown | null;
  };
  /** Timestamp this preset was last updated */
  updatedAt: string;
}
const Data28 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    config: Config,
    createdAt: Schema.String,
    name: Schema.String,
    permissions: Permissions,
    ui: Ui2,
    updatedAt: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      config: "config",
      createdAt: "created_at",
      name: "name",
      permissions: "permissions",
      ui: "ui",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Data28>;

interface MaxVideoStreams2 {
  /** Maximum number of video streams visible on desktop devices */
  desktop?: number | null;
  /** Maximum number of streams visible on mobile devices */
  mobile?: number | null;
}
const MaxVideoStreams2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    desktop: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    mobile: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<MaxVideoStreams2>;

interface Screenshare2 {
  /** Frame rate of screen share */
  frameRate?: number | null;
  /** Quality of screen share */
  quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {}) | null;
}
const Screenshare2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    frameRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    quality: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["hd", "vga", "qvga", "fhd", "uhd"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ frameRate: "frame_rate", quality: "quality" })),
) as unknown as Schema.Codec<Screenshare2>;

interface Video2 {
  /** Frame rate of participants' video */
  frameRate?: number | null;
  /** Video quality of participants */
  quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {}) | null;
  /** Enable simulcast for participant videos. */
  simulcast?: boolean | null;
}
const Video2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    frameRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    quality: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["hd", "vga", "qvga", "fhd", "uhd"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    simulcast: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      frameRate: "frame_rate",
      quality: "quality",
      simulcast: "simulcast",
    }),
  ),
) as unknown as Schema.Codec<Video2>;

interface Media3 {
  /** Control options for Audio quality. */
  audio?: {
    enableHighBitrate?: boolean | null;
    enableStereo?: boolean | null;
  } | null;
  /** Configuration options for participant screen shares */
  screenshare?: {
    frameRate?: number | null;
    quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {}) | null;
  } | null;
  /** Configuration options for participant videos */
  video?: {
    frameRate?: number | null;
    quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {}) | null;
    simulcast?: boolean | null;
  } | null;
}
const Media3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    audio: Schema.optional(Schema.Union([Audio, Schema.Null])),
    screenshare: Schema.optional(Schema.Union([Screenshare2, Schema.Null])),
    video: Schema.optional(Schema.Union([Video2, Schema.Null])),
  }),
) as unknown as Schema.Codec<Media3>;

interface Config2 {
  /** Livestream viewer quality levels. */
  livestreamViewerQualities?: number[] | null;
  /** Maximum number of screen shares that can be active at a given time */
  maxScreenshareCount?: number | null;
  /** Maximum number of streams that are visible on a device */
  maxVideoStreams?: { desktop?: number | null; mobile?: number | null } | null;
  /** Media configuration options. eg: Video quality */
  media?: {
    audio?: {
      enableHighBitrate?: boolean | null;
      enableStereo?: boolean | null;
    } | null;
    screenshare?: {
      frameRate?: number | null;
      quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {}) | null;
    } | null;
    video?: {
      frameRate?: number | null;
      quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {}) | null;
      simulcast?: boolean | null;
    } | null;
  } | null;
  /** Type of the meeting */
  viewType?:
    | "GROUP_CALL"
    | "WEBINAR"
    | "AUDIO_ROOM"
    | "LIVESTREAM"
    | (string & {})
    | null;
}
const Config2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    livestreamViewerQualities: Schema.optional(
      Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
    ),
    maxScreenshareCount: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    maxVideoStreams: Schema.optional(
      Schema.Union([MaxVideoStreams2, Schema.Null]),
    ),
    media: Schema.optional(Schema.Union([Media3, Schema.Null])),
    viewType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "GROUP_CALL",
            "WEBINAR",
            "AUDIO_ROOM",
            "LIVESTREAM",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      livestreamViewerQualities: "livestream_viewer_qualities",
      maxScreenshareCount: "max_screenshare_count",
      maxVideoStreams: "max_video_streams",
      media: "media",
      viewType: "view_type",
    }),
  ),
) as unknown as Schema.Codec<Config2>;

interface Private2 {
  canReceive?: boolean | null;
  canSend?: boolean | null;
  files?: boolean | null;
  text?: boolean | null;
}
const Private2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canReceive: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canSend: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    files: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    text: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      canReceive: "can_receive",
      canSend: "can_send",
      files: "files",
      text: "text",
    }),
  ),
) as unknown as Schema.Codec<Private2>;

interface Public2 {
  /** Can send messages in general */
  canSend?: boolean | null;
  /** Can send file messages */
  files?: boolean | null;
  /** Can send text messages */
  text?: boolean | null;
}
const Public2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canSend: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    files: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    text: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({ canSend: "can_send", files: "files", text: "text" }),
  ),
) as unknown as Schema.Codec<Public2>;

interface Chat2 {
  private?: {
    canReceive?: boolean | null;
    canSend?: boolean | null;
    files?: boolean | null;
    text?: boolean | null;
  } | null;
  public?: {
    canSend?: boolean | null;
    files?: boolean | null;
    text?: boolean | null;
  } | null;
}
const Chat2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    private: Schema.optional(Schema.Union([Private2, Schema.Null])),
    public: Schema.optional(Schema.Union([Public2, Schema.Null])),
  }),
) as unknown as Schema.Codec<Chat2>;

interface ConnectedMeetings2 {
  canAlterConnectedMeetings?: boolean | null;
  canSwitchConnectedMeetings?: boolean | null;
  canSwitchToParentMeeting?: boolean | null;
}
const ConnectedMeetings2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canAlterConnectedMeetings: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    canSwitchConnectedMeetings: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    canSwitchToParentMeeting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      canAlterConnectedMeetings: "can_alter_connected_meetings",
      canSwitchConnectedMeetings: "can_switch_connected_meetings",
      canSwitchToParentMeeting: "can_switch_to_parent_meeting",
    }),
  ),
) as unknown as Schema.Codec<ConnectedMeetings2>;

interface Audio3 {
  /** Can produce audio */
  canProduce?: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {}) | null;
}
const Audio3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canProduce: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["ALLOWED", "NOT_ALLOWED", "CAN_REQUEST"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ canProduce: "can_produce" })),
) as unknown as Schema.Codec<Audio3>;

interface Media4 {
  /** Audio permissions */
  audio?: {
    canProduce?:
      | "ALLOWED"
      | "NOT_ALLOWED"
      | "CAN_REQUEST"
      | (string & {})
      | null;
  } | null;
  /** Screenshare permissions */
  screenshare?: {
    canProduce?:
      | "ALLOWED"
      | "NOT_ALLOWED"
      | "CAN_REQUEST"
      | (string & {})
      | null;
  } | null;
  /** Video permissions */
  video?: {
    canProduce?:
      | "ALLOWED"
      | "NOT_ALLOWED"
      | "CAN_REQUEST"
      | (string & {})
      | null;
  } | null;
}
const Media4 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    audio: Schema.optional(Schema.Union([Audio3, Schema.Null])),
    screenshare: Schema.optional(Schema.Union([Audio3, Schema.Null])),
    video: Schema.optional(Schema.Union([Audio3, Schema.Null])),
  }),
) as unknown as Schema.Codec<Media4>;

interface Plugins2 {
  /** Can close plugins that are already open */
  canClose?: boolean | null;
  /** Can edit plugin config */
  canEditConfig?: boolean | null;
  /** Can start plugins */
  canStart?: boolean | null;
  /** Plugin configuration keyed by plugin UUID. */
  config?: unknown | null;
}
const Plugins2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canClose: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canEditConfig: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canStart: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    config: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      canClose: "can_close",
      canEditConfig: "can_edit_config",
      canStart: "can_start",
      config: "config",
    }),
  ),
) as unknown as Schema.Codec<Plugins2>;

interface Polls2 {
  /** Can create polls */
  canCreate?: boolean | null;
  /** Can view polls */
  canView?: boolean | null;
  /** Can vote on polls */
  canVote?: boolean | null;
}
const Polls2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    canCreate: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canView: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canVote: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      canCreate: "can_create",
      canView: "can_view",
      canVote: "can_vote",
    }),
  ),
) as unknown as Schema.Codec<Polls2>;

interface Permissions2 {
  acceptStageRequests?: boolean | null;
  /** Whether this participant can accept waiting requests */
  acceptWaitingRequests?: boolean | null;
  canAcceptProductionRequests?: boolean | null;
  canChangeParticipantPermissions?: boolean | null;
  canEditDisplayName?: boolean | null;
  canLivestream?: boolean | null;
  canRecord?: boolean | null;
  canSpotlight?: boolean | null;
  chat?: {
    private?: {
      canReceive?: boolean | null;
      canSend?: boolean | null;
      files?: boolean | null;
      text?: boolean | null;
    } | null;
    public?: {
      canSend?: boolean | null;
      files?: boolean | null;
      text?: boolean | null;
    } | null;
  } | null;
  connectedMeetings?: {
    canAlterConnectedMeetings?: boolean | null;
    canSwitchConnectedMeetings?: boolean | null;
    canSwitchToParentMeeting?: boolean | null;
  } | null;
  disableParticipantAudio?: boolean | null;
  disableParticipantScreensharing?: boolean | null;
  disableParticipantVideo?: boolean | null;
  /** Whether this participant is visible to others or not */
  hiddenParticipant?: boolean | null;
  isRecorder?: boolean | null;
  kickParticipant?: boolean | null;
  /** Media permissions */
  media?: {
    audio?: {
      canProduce?:
        | "ALLOWED"
        | "NOT_ALLOWED"
        | "CAN_REQUEST"
        | (string & {})
        | null;
    } | null;
    screenshare?: {
      canProduce?:
        | "ALLOWED"
        | "NOT_ALLOWED"
        | "CAN_REQUEST"
        | (string & {})
        | null;
    } | null;
    video?: {
      canProduce?:
        | "ALLOWED"
        | "NOT_ALLOWED"
        | "CAN_REQUEST"
        | (string & {})
        | null;
    } | null;
  } | null;
  pinParticipant?: boolean | null;
  /** Plugin permissions */
  plugins?: {
    canClose?: boolean | null;
    canEditConfig?: boolean | null;
    canStart?: boolean | null;
    config?: unknown | null;
  } | null;
  /** Poll permissions */
  polls?: {
    canCreate?: boolean | null;
    canView?: boolean | null;
    canVote?: boolean | null;
  } | null;
  /** Type of the recording peer */
  recorderType?: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {}) | null;
  showParticipantList?: boolean | null;
  stageAccess?:
    | "ALLOWED"
    | "NOT_ALLOWED"
    | "CAN_REQUEST"
    | (string & {})
    | null;
  stageEnabled?: boolean | null;
  transcriptionEnabled?: boolean | null;
  /** Waiting room type */
  waitingRoomType?:
    | "SKIP"
    | "ON_PRIVILEGED_USER_ENTRY"
    | "SKIP_ON_ACCEPT"
    | (string & {})
    | null;
}
const Permissions2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    acceptStageRequests: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    acceptWaitingRequests: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    canAcceptProductionRequests: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    canChangeParticipantPermissions: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    canEditDisplayName: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    canLivestream: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canRecord: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    canSpotlight: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    chat: Schema.optional(Schema.Union([Chat2, Schema.Null])),
    connectedMeetings: Schema.optional(
      Schema.Union([ConnectedMeetings2, Schema.Null]),
    ),
    disableParticipantAudio: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    disableParticipantScreensharing: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    disableParticipantVideo: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hiddenParticipant: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    isRecorder: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    kickParticipant: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    media: Schema.optional(Schema.Union([Media4, Schema.Null])),
    pinParticipant: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    plugins: Schema.optional(Schema.Union([Plugins2, Schema.Null])),
    polls: Schema.optional(Schema.Union([Polls2, Schema.Null])),
    recorderType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["RECORDER", "LIVESTREAMER", "NONE"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    showParticipantList: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    stageAccess: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["ALLOWED", "NOT_ALLOWED", "CAN_REQUEST"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    stageEnabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    transcriptionEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    waitingRoomType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "SKIP",
            "ON_PRIVILEGED_USER_ENTRY",
            "SKIP_ON_ACCEPT",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      acceptStageRequests: "accept_stage_requests",
      acceptWaitingRequests: "accept_waiting_requests",
      canAcceptProductionRequests: "can_accept_production_requests",
      canChangeParticipantPermissions: "can_change_participant_permissions",
      canEditDisplayName: "can_edit_display_name",
      canLivestream: "can_livestream",
      canRecord: "can_record",
      canSpotlight: "can_spotlight",
      chat: "chat",
      connectedMeetings: "connected_meetings",
      disableParticipantAudio: "disable_participant_audio",
      disableParticipantScreensharing: "disable_participant_screensharing",
      disableParticipantVideo: "disable_participant_video",
      hiddenParticipant: "hidden_participant",
      isRecorder: "is_recorder",
      kickParticipant: "kick_participant",
      media: "media",
      pinParticipant: "pin_participant",
      plugins: "plugins",
      polls: "polls",
      recorderType: "recorder_type",
      showParticipantList: "show_participant_list",
      stageAccess: "stage_access",
      stageEnabled: "stage_enabled",
      transcriptionEnabled: "transcription_enabled",
      waitingRoomType: "waiting_room_type",
    }),
  ),
) as unknown as Schema.Codec<Permissions2>;

interface Background2 {
  "1000"?: string | null;
  "600"?: string | null;
  "700"?: string | null;
  "800"?: string | null;
  "900"?: string | null;
}
const Background2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    "1000": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "600": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "700": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "800": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "900": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Background2>;

interface Brand2 {
  "300"?: string | null;
  "400"?: string | null;
  "500"?: string | null;
  "600"?: string | null;
  "700"?: string | null;
}
const Brand2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    "300": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "400": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "500": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "600": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    "700": Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Brand2>;

interface Colors2 {
  background?: {
    "1000"?: string | null;
    "600"?: string | null;
    "700"?: string | null;
    "800"?: string | null;
    "900"?: string | null;
  } | null;
  brand?: {
    "300"?: string | null;
    "400"?: string | null;
    "500"?: string | null;
    "600"?: string | null;
    "700"?: string | null;
  } | null;
  danger?: string | null;
  success?: string | null;
  text?: string | null;
  textOnBrand?: string | null;
  videoBg?: string | null;
  warning?: string | null;
}
const Colors2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    background: Schema.optional(Schema.Union([Background2, Schema.Null])),
    brand: Schema.optional(Schema.Union([Brand2, Schema.Null])),
    danger: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    success: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    text: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    textOnBrand: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    videoBg: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    warning: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      background: "background",
      brand: "brand",
      danger: "danger",
      success: "success",
      text: "text",
      textOnBrand: "text_on_brand",
      videoBg: "video_bg",
      warning: "warning",
    }),
  ),
) as unknown as Schema.Codec<Colors2>;

interface DesignTokens2 {
  borderRadius?:
    | "sharp"
    | "rounded"
    | "extra-rounded"
    | "circular"
    | (string & {})
    | null;
  borderWidth?: "none" | "thin" | "fat" | (string & {}) | null;
  colors?: {
    background?: {
      "1000"?: string | null;
      "600"?: string | null;
      "700"?: string | null;
      "800"?: string | null;
      "900"?: string | null;
    } | null;
    brand?: {
      "300"?: string | null;
      "400"?: string | null;
      "500"?: string | null;
      "600"?: string | null;
      "700"?: string | null;
    } | null;
    danger?: string | null;
    success?: string | null;
    text?: string | null;
    textOnBrand?: string | null;
    videoBg?: string | null;
    warning?: string | null;
  } | null;
  fontFamily?: string | null;
  googleFont?: string | null;
  logo?: string | null;
  spacingBase?: number | null;
  theme?: "darkest" | "dark" | "light" | (string & {}) | null;
}
const DesignTokens2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    borderRadius: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["sharp", "rounded", "extra-rounded", "circular"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    borderWidth: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["none", "thin", "fat"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    colors: Schema.optional(Schema.Union([Colors2, Schema.Null])),
    fontFamily: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    googleFont: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    logo: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    spacingBase: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    theme: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["darkest", "dark", "light"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      borderRadius: "border_radius",
      borderWidth: "border_width",
      colors: "colors",
      fontFamily: "font_family",
      googleFont: "google_font",
      logo: "logo",
      spacingBase: "spacing_base",
      theme: "theme",
    }),
  ),
) as unknown as Schema.Codec<DesignTokens2>;

interface Ui3 {
  designTokens?: {
    borderRadius?:
      | "sharp"
      | "rounded"
      | "extra-rounded"
      | "circular"
      | (string & {})
      | null;
    borderWidth?: "none" | "thin" | "fat" | (string & {}) | null;
    colors?: {
      background?: {
        "1000"?: string | null;
        "600"?: string | null;
        "700"?: string | null;
        "800"?: string | null;
        "900"?: string | null;
      } | null;
      brand?: {
        "300"?: string | null;
        "400"?: string | null;
        "500"?: string | null;
        "600"?: string | null;
        "700"?: string | null;
      } | null;
      danger?: string | null;
      success?: string | null;
      text?: string | null;
      textOnBrand?: string | null;
      videoBg?: string | null;
      warning?: string | null;
    } | null;
    fontFamily?: string | null;
    googleFont?: string | null;
    logo?: string | null;
    spacingBase?: number | null;
    theme?: "darkest" | "dark" | "light" | (string & {}) | null;
  } | null;
  configDiff?: unknown | null;
}
const Ui3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    designTokens: Schema.optional(Schema.Union([DesignTokens2, Schema.Null])),
    configDiff: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      designTokens: "design_tokens",
      configDiff: "config_diff",
    }),
  ),
) as unknown as Schema.Codec<Ui3>;

interface Data29 {
  /** ID of the recording */
  id: string;
  /** If the audio_config is passed, the URL for downloading the audio recording is returned. */
  audioDownloadUrl: string | null;
  /** URL where the recording can be downloaded. */
  downloadUrl: string | null;
  /** Timestamp when the download URL expires. */
  downloadUrlExpiry: string | null;
  /** File size of the recording, in bytes. */
  fileSize: number | null;
  /** Timestamp when this recording was invoked. */
  invokedTime: string;
  /** File name of the recording. */
  outputFileName: string;
  /** ID of the meeting session this recording is for. */
  sessionId: string | null;
  /** Timestamp when this recording actually started after being invoked. Usually a few seconds after `invoked_time`. */
  startedTime: string | null;
  /** Current status of the recording. */
  status:
    | "INVOKED"
    | "RECORDING"
    | "UPLOADING"
    | "UPLOADED"
    | "ERRORED"
    | "PAUSED"
    | (string & {});
  /** Timestamp when this recording was stopped. Optional; is present only when the recording has actually been stopped. */
  stoppedTime: string | null;
  meeting?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    liveStreamOnStart?: boolean | null;
    persistChat?: boolean | null;
    recordOnStart?: boolean | null;
    recordingConfig?: {
      audioConfig?: {
        channel?: "mono" | "stereo" | (string & {}) | null;
        codec?: "MP3" | "AAC" | (string & {}) | null;
        exportFile?: boolean | null;
      } | null;
      fileNamePrefix?: string | null;
      liveStreamingConfig?: { rtmpUrl?: string | null } | null;
      maxSeconds?: number | null;
      realtimekitBucketConfig?: { enabled: boolean } | null;
      storageConfig?: {
        type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
        authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
        bucket?: string | null;
        host?: string | null;
        password?: string | null;
        path?: string | null;
        port?: number | null;
        privateKey?: string | null;
        region?: string | null;
        secret?: string | null;
        username?: string | null;
      } | null;
      videoConfig?: {
        codec?: "H264" | "VP8" | (string & {}) | null;
        exportFile?: boolean | null;
        height?: number | null;
        watermark?: {
          position?:
            | "left top"
            | "right top"
            | "left bottom"
            | "right bottom"
            | (string & {})
            | null;
          size?: { height?: number | null; width?: number | null } | null;
          url?: string | null;
        } | null;
        width?: number | null;
      } | null;
    } | null;
    sessionKeepAliveTimeInSecs?: number | null;
    status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
    summarizeOnEnd?: boolean | null;
    title?: string | null;
    transcribeOnEnd?: boolean | null;
  } | null;
  /** Total recording time in seconds. */
  recordingDuration?: number | null;
  storageConfig?: {
    type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
    authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
    bucket?: string | null;
    host?: string | null;
    password?: string | null;
    path?: string | null;
    port?: number | null;
    privateKey?: string | null;
    region?: string | null;
    secret?: string | null;
    username?: string | null;
  } | null;
}
const Data29 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    audioDownloadUrl: Schema.Union([Schema.String, Schema.Null]),
    downloadUrl: Schema.Union([Schema.String, Schema.Null]),
    downloadUrlExpiry: Schema.Union([Schema.String, Schema.Null]),
    fileSize: Schema.Union([Schema.Number, Schema.Null]),
    invokedTime: Schema.String,
    outputFileName: Schema.String,
    sessionId: Schema.Union([Schema.String, Schema.Null]),
    startedTime: Schema.Union([Schema.String, Schema.Null]),
    status: Schema.Union([
      Schema.Literals([
        "INVOKED",
        "RECORDING",
        "UPLOADING",
        "UPLOADED",
        "ERRORED",
        "PAUSED",
      ]),
      Schema.String,
    ]),
    stoppedTime: Schema.Union([Schema.String, Schema.Null]),
    meeting: Schema.optional(Schema.Union([Data15, Schema.Null])),
    recordingDuration: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    storageConfig: Schema.optional(Schema.Union([StorageConfig, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      audioDownloadUrl: "audio_download_url",
      downloadUrl: "download_url",
      downloadUrlExpiry: "download_url_expiry",
      fileSize: "file_size",
      invokedTime: "invoked_time",
      outputFileName: "output_file_name",
      sessionId: "session_id",
      startedTime: "started_time",
      status: "status",
      stoppedTime: "stopped_time",
      meeting: "meeting",
      recordingDuration: "recording_duration",
      storageConfig: "storage_config",
    }),
  ),
) as unknown as Schema.Codec<Data29>;

interface InteractiveConfig {
  /** The metadata is presented in the form of ID3 tags. */
  type?: "ID3" | null;
}
const InteractiveConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.optional(Schema.Union([Schema.Literal("ID3"), Schema.Null])),
  }),
) as unknown as Schema.Codec<InteractiveConfig>;

interface Data30 {
  /** URL where the chat logs can be downloaded */
  chatDownloadUrl: string;
  /** Time when the download URL will expire */
  chatDownloadUrlExpiry: string;
}
const Data30 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    chatDownloadUrl: Schema.String,
    chatDownloadUrlExpiry: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      chatDownloadUrl: "chat_download_url",
      chatDownloadUrlExpiry: "chat_download_url_expiry",
    }),
  ),
) as unknown as Schema.Codec<Data30>;

interface Participant3 {
  /** Participant ID. This maps to the corresponding peerId. */
  id?: string | null;
  /** timestamp when this participant was created. */
  createdAt?: string | null;
  /** ID passed by client to create this participant. */
  customParticipantId?: string | null;
  /** Display name of participant when joining the session. */
  displayName?: string | null;
  /** number of minutes for which the participant was in the session. */
  duration?: number | null;
  /** timestamp at which participant joined the session. */
  joinedAt?: string | null;
  /** timestamp at which participant left the session. */
  leftAt?: string | null;
  /** Name of the preset associated with the participant. */
  presetName?: string | null;
  /** timestamp when this participant's data was last updated. */
  updatedAt?: string | null;
  /** User id for this participant. */
  userId?: string | null;
}
const Participant3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customParticipantId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    displayName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    duration: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    joinedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    leftAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    presetName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    userId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      customParticipantId: "custom_participant_id",
      displayName: "display_name",
      duration: "duration",
      joinedAt: "joined_at",
      leftAt: "left_at",
      presetName: "preset_name",
      updatedAt: "updated_at",
      userId: "user_id",
    }),
  ),
) as unknown as Schema.Codec<Participant3>;

interface Data31 {
  participant?: {
    id?: string | null;
    createdAt?: string | null;
    customParticipantId?: string | null;
    displayName?: string | null;
    duration?: number | null;
    joinedAt?: string | null;
    leftAt?: string | null;
    presetName?: string | null;
    updatedAt?: string | null;
    userId?: string | null;
  } | null;
}
const Data31 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    participant: Schema.optional(Schema.Union([Participant3, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data31>;

interface Data32 {
  participants?:
    | {
        id?: string | null;
        createdAt?: string | null;
        customParticipantId?: string | null;
        displayName?: string | null;
        duration?: number | null;
        joinedAt?: string | null;
        leftAt?: string | null;
        presetName?: string | null;
        updatedAt?: string | null;
        userId?: string | null;
      }[]
    | null;
}
const Data32 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    participants: Schema.optional(
      Schema.Union([Schema.Array(Participant3), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Data32>;

interface Data33 {
  sessions?:
    | {
        id: string;
        associatedId: string;
        createdAt: string;
        liveParticipants: number;
        maxConcurrentParticipants: number;
        meetingDisplayName: string;
        minutesConsumed: number;
        organizationId: string;
        startedAt: string;
        status: "LIVE" | "ENDED" | (string & {});
        type: "meeting" | "livestream" | "participant" | (string & {});
        updatedAt: string;
        breakoutRooms?: unknown[] | null;
        endedAt?: string | null;
        meta?: unknown | null;
      }[]
    | null;
}
const Data33 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sessions: Schema.optional(Schema.Union([Schema.Array(Data3), Schema.Null])),
  }),
) as unknown as Schema.Codec<Data33>;

interface Data34 {
  sessionId: string;
  /** URL where the summary of transcripts can be downloaded */
  summaryDownloadUrl: string;
  /** Time of Expiry before when you need to download the csv file. */
  summaryDownloadUrlExpiry: string;
}
const Data34 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sessionId: Schema.String,
    summaryDownloadUrl: Schema.String,
    summaryDownloadUrlExpiry: Schema.String,
  }),
) as unknown as Schema.Codec<Data34>;

interface Data35 {
  sessionId: string;
  /** URL where the transcript can be downloaded */
  transcriptDownloadUrl: string;
  /** Time when the download URL will expire */
  transcriptDownloadUrlExpiry: string;
}
const Data35 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sessionId: Schema.String,
    transcriptDownloadUrl: Schema.String,
    transcriptDownloadUrlExpiry: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      sessionId: "sessionId",
      transcriptDownloadUrl: "transcript_download_url",
      transcriptDownloadUrlExpiry: "transcript_download_url_expiry",
    }),
  ),
) as unknown as Schema.Codec<Data35>;

interface Data36 {
  sessionId?: string | null;
  status?: string | null;
}
const Data36 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sessionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ sessionId: "session_id", status: "status" })),
) as unknown as Schema.Codec<Data36>;

interface Data37 {
  recording: {
    id: string;
    audioDownloadUrl: string | null;
    downloadUrl: string | null;
    downloadUrlExpiry: string | null;
    fileSize: number | null;
    invokedTime: string;
    outputFileName: string;
    sessionId: string | null;
    startedTime: string | null;
    status:
      | "INVOKED"
      | "RECORDING"
      | "UPLOADING"
      | "UPLOADED"
      | "ERRORED"
      | "PAUSED"
      | (string & {});
    stoppedTime: string | null;
    recordingDuration?: number | null;
  };
}
const Data37 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    recording: Data2,
  }),
) as unknown as Schema.Codec<Data37>;

interface Data38 {
  /** ID of the webhook */
  id: string;
  /** Timestamp when this webhook was created */
  createdAt: string;
  /** Set to true if the webhook is active */
  enabled: boolean;
  /** Events this webhook will send updates for */
  events: (
    | "meeting.started"
    | "meeting.ended"
    | "meeting.participantJoined"
    | "meeting.participantLeft"
    | "meeting.chatSynced"
    | "recording.statusUpdate"
    | "livestreaming.statusUpdate"
    | "meeting.transcript"
    | "meeting.summary"
    | (string & {})
  )[];
  /** Name of the webhook */
  name: string;
  /** Timestamp when this webhook was updated */
  updatedAt: string;
  /** URL the webhook will send events to */
  url: string;
}
const Data38 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    enabled: Schema.Boolean,
    events: Schema.Array(
      Schema.Union([
        Schema.Literals([
          "meeting.started",
          "meeting.ended",
          "meeting.participantJoined",
          "meeting.participantLeft",
          "meeting.chatSynced",
          "recording.statusUpdate",
          "livestreaming.statusUpdate",
          "meeting.transcript",
          "meeting.summary",
        ]),
        Schema.String,
      ]),
    ),
    name: Schema.String,
    updatedAt: Schema.String,
    url: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      enabled: "enabled",
      events: "events",
      name: "name",
      updatedAt: "updated_at",
      url: "url",
    }),
  ),
) as unknown as Schema.Codec<Data38>;

// =============================================================================
// ActiveLivestreamsForLivestreamIdLivestream
// =============================================================================

export interface GetActiveLivestreamsForLivestreamIdLivestreamRequest {
  appId: string;
  livestreamId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetActiveLivestreamsForLivestreamIdLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      livestreamId: Schema.String.pipe(T.HttpPath("livestreamId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/livestreams/{livestreamId}/active-livestream-session",
      }),
    ),
  ) as unknown as Schema.Codec<GetActiveLivestreamsForLivestreamIdLivestreamRequest>;

export interface GetActiveLivestreamsForLivestreamIdLivestreamResponse {
  data?: {
    livestream?: {
      id?: string | null;
      createdAt?: string | null;
      disabled?: string | null;
      ingestServer?: string | null;
      meetingId?: string | null;
      name?: string | null;
      playbackUrl?: string | null;
      status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
      streamKey?: string | null;
      updatedAt?: string | null;
    } | null;
    session?: {
      id?: string | null;
      createdAt?: string | null;
      errMessage?: string | null;
      ingestSeconds?: string | null;
      invokedTime?: string | null;
      livestreamId?: string | null;
      startedTime?: string | null;
      stoppedTime?: string | null;
      updatedAt?: string | null;
      viewerSeconds?: string | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const GetActiveLivestreamsForLivestreamIdLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetActiveLivestreamsForLivestreamIdLivestreamResponse>;

export type GetActiveLivestreamsForLivestreamIdLivestreamError = DefaultErrors;

export const getActiveLivestreamsForLivestreamIdLivestream: API.OperationMethod<
  GetActiveLivestreamsForLivestreamIdLivestreamRequest,
  GetActiveLivestreamsForLivestreamIdLivestreamResponse,
  GetActiveLivestreamsForLivestreamIdLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetActiveLivestreamsForLivestreamIdLivestreamRequest,
  output: GetActiveLivestreamsForLivestreamIdLivestreamResponse,
  errors: [],
}));

// =============================================================================
// ActiveRecordingsRecording
// =============================================================================

export interface GetActiveRecordingsRecordingRequest {
  appId: string;
  meetingId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetActiveRecordingsRecordingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/recordings/active-recording/{meetingId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetActiveRecordingsRecordingRequest>;

export interface GetActiveRecordingsRecordingResponse {
  /** Data returned by the operation */
  data: {
    id: string;
    audioDownloadUrl: string | null;
    downloadUrl: string | null;
    downloadUrlExpiry: string | null;
    fileSize: number | null;
    invokedTime: string;
    outputFileName: string;
    sessionId: string | null;
    startedTime: string | null;
    status:
      | "INVOKED"
      | "RECORDING"
      | "UPLOADING"
      | "UPLOADED"
      | "ERRORED"
      | "PAUSED"
      | (string & {});
    stoppedTime: string | null;
    recordingDuration?: number | null;
  };
  /** Success status of the operation */
  success: boolean;
}

export const GetActiveRecordingsRecordingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data2,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetActiveRecordingsRecordingResponse>;

export type GetActiveRecordingsRecordingError = DefaultErrors;

export const getActiveRecordingsRecording: API.OperationMethod<
  GetActiveRecordingsRecordingRequest,
  GetActiveRecordingsRecordingResponse,
  GetActiveRecordingsRecordingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetActiveRecordingsRecordingRequest,
  output: GetActiveRecordingsRecordingResponse,
  errors: [],
}));

// =============================================================================
// ActiveSessionActiveSession
// =============================================================================

export interface GetActiveSessionActiveSessionRequest {
  appId: string;
  meetingId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetActiveSessionActiveSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/active-session",
      }),
    ),
  ) as unknown as Schema.Codec<GetActiveSessionActiveSessionRequest>;

export interface GetActiveSessionActiveSessionResponse {
  data?: {
    id: string;
    associatedId: string;
    createdAt: string;
    liveParticipants: number;
    maxConcurrentParticipants: number;
    meetingDisplayName: string;
    minutesConsumed: number;
    organizationId: string;
    startedAt: string;
    status: "LIVE" | "ENDED" | (string & {});
    type: "meeting" | "livestream" | "participant" | (string & {});
    updatedAt: string;
    breakoutRooms?: unknown[] | null;
    endedAt?: string | null;
    meta?: unknown | null;
  } | null;
  success?: boolean | null;
}

export const GetActiveSessionActiveSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data3, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetActiveSessionActiveSessionResponse>;

export type GetActiveSessionActiveSessionError = DefaultErrors;

export const getActiveSessionActiveSession: API.OperationMethod<
  GetActiveSessionActiveSessionRequest,
  GetActiveSessionActiveSessionResponse,
  GetActiveSessionActiveSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetActiveSessionActiveSessionRequest,
  output: GetActiveSessionActiveSessionResponse,
  errors: [],
}));

// =============================================================================
// AllLivestreamsLivestream
// =============================================================================

export interface GetAllLivestreamsLivestreamRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: Specify the end time range in ISO format to access the live stream. */
  endTime?: string;
  /** Query param: Exclude the RealtimeKit meetings that are livestreamed. */
  excludeMeetings?: boolean;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page. */
  perPage?: number;
  /** Query param: Specifies the sorting order for the results. */
  sortOrder?: "ASC" | "DSC" | (string & {});
  /** Query param: Specify the start time range in ISO format to access the live stream. */
  startTime?: string;
  /** Query param: Specifies the status of the operation. */
  status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {});
}

export const GetAllLivestreamsLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("end_time")),
      excludeMeetings: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("exclude_meetings"),
      ),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      sortOrder: Schema.optional(
        Schema.Union([Schema.Literals(["ASC", "DSC"]), Schema.String]),
      ).pipe(T.HttpQuery("sort_order")),
      startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("start_time")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals(["LIVE", "IDLE", "ERRORED", "INVOKED"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/livestreams",
      }),
    ),
  ) as unknown as Schema.Codec<GetAllLivestreamsLivestreamRequest>;

export interface GetAllLivestreamsLivestreamResponse {
  data?: {
    id?: string | null;
    createdAt?: string | null;
    disabled?: string | null;
    ingestServer?: string | null;
    meetingId?: string | null;
    name?: string | null;
    paging?: {
      endOffset?: number | null;
      startOffset?: number | null;
      totalCount?: number | null;
    } | null;
    playbackUrl?: string | null;
    status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
    streamKey?: string | null;
    updatedAt?: string | null;
  } | null;
  success?: boolean | null;
}

export const GetAllLivestreamsLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data4, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetAllLivestreamsLivestreamResponse>;

export type GetAllLivestreamsLivestreamError = DefaultErrors;

export const getAllLivestreamsLivestream: API.OperationMethod<
  GetAllLivestreamsLivestreamRequest,
  GetAllLivestreamsLivestreamResponse,
  GetAllLivestreamsLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAllLivestreamsLivestreamRequest,
  output: GetAllLivestreamsLivestreamResponse,
  errors: [],
}));

// =============================================================================
// AllParticipantsActiveSession
// =============================================================================

export interface KickAllParticipantsActiveSessionRequest {
  appId: string;
  meetingId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const KickAllParticipantsActiveSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/active-session/kick-all",
      }),
    ),
  ) as unknown as Schema.Codec<KickAllParticipantsActiveSessionRequest>;

export interface KickAllParticipantsActiveSessionResponse {
  data?: {
    action?: string | null;
    kickedParticipantsCount?: number | null;
  } | null;
  success?: boolean | null;
}

export const KickAllParticipantsActiveSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data5, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<KickAllParticipantsActiveSessionResponse>;

export type KickAllParticipantsActiveSessionError = DefaultErrors;

export const kickAllParticipantsActiveSession: API.OperationMethod<
  KickAllParticipantsActiveSessionRequest,
  KickAllParticipantsActiveSessionResponse,
  KickAllParticipantsActiveSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: KickAllParticipantsActiveSessionRequest,
  output: KickAllParticipantsActiveSessionResponse,
  errors: [],
}));

// =============================================================================
// App
// =============================================================================

export interface GetAppRequest {
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page. */
  perPage?: number;
  /** Query param: Search string that matches apps by name. */
  search?: string;
  /** Query param: Sort order for apps by creation time. */
  sortOrder?: "ASC" | "DESC" | (string & {});
}

export const GetAppRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    sortOrder: Schema.optional(
      Schema.Union([Schema.Literals(["ASC", "DESC"]), Schema.String]),
    ).pipe(T.HttpQuery("sort_order")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/realtime/kit/apps" }),
  ),
) as unknown as Schema.Codec<GetAppRequest>;

export interface GetAppResponse {
  data?:
    | { id?: string | null; createdAt?: string | null; name?: string | null }[]
    | null;
  paging?: {
    endOffset?: number | null;
    startOffset?: number | null;
    totalCount?: number | null;
  } | null;
  success?: boolean | null;
}

export const GetAppResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.optional(Schema.Union([Schema.Array(Data6), Schema.Null])),
    paging: Schema.optional(Schema.Union([Paging, Schema.Null])),
    success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<GetAppResponse>;

export type GetAppError = DefaultErrors | Forbidden;

export const getApp: API.OperationMethod<
  GetAppRequest,
  GetAppResponse,
  GetAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAppRequest,
  output: GetAppResponse,
  errors: [Forbidden],
}));

export interface PostAppRequest {
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  name: string;
}

export const PostAppRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/realtime/kit/apps",
    }),
  ),
) as unknown as Schema.Codec<PostAppRequest>;

export interface PostAppResponse {
  data?: {
    app?: {
      id?: string | null;
      createdAt?: string | null;
      name?: string | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const PostAppResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<PostAppResponse>;

export type PostAppError = DefaultErrors | Forbidden;

export const postApp: API.OperationMethod<
  PostAppRequest,
  PostAppResponse,
  PostAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PostAppRequest,
  output: PostAppResponse,
  errors: [Forbidden],
}));

// =============================================================================
// IndependentLivestreamLivestream
// =============================================================================

export interface CreateIndependentLivestreamLivestreamRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: Name of the livestream */
  name?: string | null;
}

export const CreateIndependentLivestreamLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/livestreams",
      }),
    ),
  ) as unknown as Schema.Codec<CreateIndependentLivestreamLivestreamRequest>;

export interface CreateIndependentLivestreamLivestreamResponse {
  data?: {
    id?: string | null;
    disabled?: boolean | null;
    ingestServer?: string | null;
    meetingId?: string | null;
    name?: string | null;
    playbackUrl?: string | null;
    status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
    streamKey?: string | null;
  } | null;
  success?: boolean | null;
}

export const CreateIndependentLivestreamLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data8, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreateIndependentLivestreamLivestreamResponse>;

export type CreateIndependentLivestreamLivestreamError = DefaultErrors;

export const createIndependentLivestreamLivestream: API.OperationMethod<
  CreateIndependentLivestreamLivestreamRequest,
  CreateIndependentLivestreamLivestreamResponse,
  CreateIndependentLivestreamLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateIndependentLivestreamLivestreamRequest,
  output: CreateIndependentLivestreamLivestreamResponse,
  errors: [],
}));

// =============================================================================
// LivestreamAnalyticsCompleteLivestream
// =============================================================================

export interface GetLivestreamAnalyticsCompleteLivestreamRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: Specify the end time as a Unix timestamp in seconds to access the livestream analytics. */
  endTime?: number;
  /** Query param: Optional filters for livestream analytics. */
  filters?: string;
  /** Query param: Specify the start time as a Unix timestamp in seconds to access the livestream analytics. */
  startTime?: number;
}

export const GetLivestreamAnalyticsCompleteLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endTime: Schema.optional(Schema.Number).pipe(T.HttpQuery("end_time")),
      filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
      startTime: Schema.optional(Schema.Number).pipe(T.HttpQuery("start_time")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/analytics/livestreams/overall",
      }),
    ),
  ) as unknown as Schema.Codec<GetLivestreamAnalyticsCompleteLivestreamRequest>;

export interface GetLivestreamAnalyticsCompleteLivestreamResponse {
  data?: {
    count?: number | null;
    totalIngestSeconds?: number | null;
    totalViewerSeconds?: number | null;
  } | null;
  success?: boolean | null;
}

export const GetLivestreamAnalyticsCompleteLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data9, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetLivestreamAnalyticsCompleteLivestreamResponse>;

export type GetLivestreamAnalyticsCompleteLivestreamError = DefaultErrors;

export const getLivestreamAnalyticsCompleteLivestream: API.OperationMethod<
  GetLivestreamAnalyticsCompleteLivestreamRequest,
  GetLivestreamAnalyticsCompleteLivestreamResponse,
  GetLivestreamAnalyticsCompleteLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLivestreamAnalyticsCompleteLivestreamRequest,
  output: GetLivestreamAnalyticsCompleteLivestreamResponse,
  errors: [],
}));

// =============================================================================
// LivestreamAnalyticsDaywiseLivestream
// =============================================================================

export interface GetLivestreamAnalyticsDaywiseLivestreamRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: Specify the end time as a Unix timestamp in seconds to access the livestream analytics. */
  endTime?: number;
  /** Query param: Optional filters for livestream analytics. */
  filters?: string;
  /** Query param: Specify the start time as a Unix timestamp in seconds to access the livestream analytics. */
  startTime?: number;
}

export const GetLivestreamAnalyticsDaywiseLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endTime: Schema.optional(Schema.Number).pipe(T.HttpQuery("end_time")),
      filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
      startTime: Schema.optional(Schema.Number).pipe(T.HttpQuery("start_time")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/analytics/livestreams/daywise",
      }),
    ),
  ) as unknown as Schema.Codec<GetLivestreamAnalyticsDaywiseLivestreamRequest>;

export interface GetLivestreamAnalyticsDaywiseLivestreamResponse {
  data?:
    | {
        count?: number | null;
        date?: string | null;
        totalIngestSeconds?: number | null;
        totalViewerSeconds?: number | null;
      }[]
    | null;
  success?: boolean | null;
}

export const GetLivestreamAnalyticsDaywiseLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Schema.Array(Data10), Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetLivestreamAnalyticsDaywiseLivestreamResponse>;

export type GetLivestreamAnalyticsDaywiseLivestreamError = DefaultErrors;

export const getLivestreamAnalyticsDaywiseLivestream: API.OperationMethod<
  GetLivestreamAnalyticsDaywiseLivestreamRequest,
  GetLivestreamAnalyticsDaywiseLivestreamResponse,
  GetLivestreamAnalyticsDaywiseLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLivestreamAnalyticsDaywiseLivestreamRequest,
  output: GetLivestreamAnalyticsDaywiseLivestreamResponse,
  errors: [],
}));

// =============================================================================
// LivestreamingAMeetingLivestream
// =============================================================================

export interface StartLivestreamingAMeetingLivestreamRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  name?: string | null;
  /** Body param */
  videoConfig?: { height?: number; width?: number };
}

export const StartLivestreamingAMeetingLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      videoConfig: Schema.optional(VideoConfig),
    }).pipe(
      Schema.encodeKeys({ name: "name", videoConfig: "video_config" }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/livestreams",
      }),
    ),
  ) as unknown as Schema.Codec<StartLivestreamingAMeetingLivestreamRequest>;

export interface StartLivestreamingAMeetingLivestreamResponse {
  data?: {
    id?: string | null;
    ingestServer?: string | null;
    playbackUrl?: string | null;
    status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
    streamKey?: string | null;
  } | null;
  success?: boolean | null;
}

export const StartLivestreamingAMeetingLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data11, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<StartLivestreamingAMeetingLivestreamResponse>;

export type StartLivestreamingAMeetingLivestreamError = DefaultErrors;

export const startLivestreamingAMeetingLivestream: API.OperationMethod<
  StartLivestreamingAMeetingLivestreamRequest,
  StartLivestreamingAMeetingLivestreamResponse,
  StartLivestreamingAMeetingLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartLivestreamingAMeetingLivestreamRequest,
  output: StartLivestreamingAMeetingLivestreamResponse,
  errors: [],
}));

export interface StopLivestreamingAMeetingLivestreamRequest {
  appId: string;
  meetingId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const StopLivestreamingAMeetingLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/active-livestream/stop",
      }),
    ),
  ) as unknown as Schema.Codec<StopLivestreamingAMeetingLivestreamRequest>;

export interface StopLivestreamingAMeetingLivestreamResponse {
  data?: { message?: string | null } | null;
  success?: boolean | null;
}

export const StopLivestreamingAMeetingLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data12, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<StopLivestreamingAMeetingLivestreamResponse>;

export type StopLivestreamingAMeetingLivestreamError = DefaultErrors;

export const stopLivestreamingAMeetingLivestream: API.OperationMethod<
  StopLivestreamingAMeetingLivestreamRequest,
  StopLivestreamingAMeetingLivestreamResponse,
  StopLivestreamingAMeetingLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopLivestreamingAMeetingLivestreamRequest,
  output: StopLivestreamingAMeetingLivestreamResponse,
  errors: [],
}));

// =============================================================================
// LivestreamSessionDetailsForSessionIdLivestream
// =============================================================================

export interface GetLivestreamSessionDetailsForSessionIdLivestreamRequest {
  appId: string;
  livestreamSessionId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetLivestreamSessionDetailsForSessionIdLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      livestreamSessionId: Schema.String.pipe(
        T.HttpPath("livestreamSessionId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/livestreams/sessions/{livestreamSessionId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetLivestreamSessionDetailsForSessionIdLivestreamRequest>;

export interface GetLivestreamSessionDetailsForSessionIdLivestreamResponse {
  data?: {
    id?: string | null;
    createdAt?: string | null;
    errMessage?: string | null;
    ingestSeconds?: number | null;
    livestreamId?: string | null;
    startedTime?: string | null;
    stoppedTime?: string | null;
    updatedAt?: string | null;
    viewerSeconds?: number | null;
  } | null;
  success?: boolean | null;
}

export const GetLivestreamSessionDetailsForSessionIdLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data13, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetLivestreamSessionDetailsForSessionIdLivestreamResponse>;

export type GetLivestreamSessionDetailsForSessionIdLivestreamError =
  DefaultErrors;

export const getLivestreamSessionDetailsForSessionIdLivestream: API.OperationMethod<
  GetLivestreamSessionDetailsForSessionIdLivestreamRequest,
  GetLivestreamSessionDetailsForSessionIdLivestreamResponse,
  GetLivestreamSessionDetailsForSessionIdLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLivestreamSessionDetailsForSessionIdLivestreamRequest,
  output: GetLivestreamSessionDetailsForSessionIdLivestreamResponse,
  errors: [],
}));

// =============================================================================
// LivestreamSessionForLivestreamIdLivestream
// =============================================================================

export interface GetLivestreamSessionForLivestreamIdLivestreamRequest {
  appId: string;
  livestreamId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page. */
  perPage?: number;
}

export const GetLivestreamSessionForLivestreamIdLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      livestreamId: Schema.String.pipe(T.HttpPath("livestreamId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/livestreams/{livestreamId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetLivestreamSessionForLivestreamIdLivestreamRequest>;

export interface GetLivestreamSessionForLivestreamIdLivestreamResponse {
  data?: {
    livestream?: {
      id?: string | null;
      createdAt?: string | null;
      disabled?: string | null;
      ingestServer?: string | null;
      meetingId?: string | null;
      name?: string | null;
      playbackUrl?: string | null;
      status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
      streamKey?: string | null;
      updatedAt?: string | null;
    } | null;
    paging?: {
      endOffset?: number | null;
      startOffset?: number | null;
      totalCount?: number | null;
    } | null;
    session?: {
      id?: string | null;
      createdAt?: string | null;
      errMessage?: string | null;
      ingestSeconds?: number | null;
      invokedTime?: string | null;
      livestreamId?: string | null;
      startedTime?: string | null;
      stoppedTime?: string | null;
      updatedAt?: string | null;
      viewerSeconds?: number | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const GetLivestreamSessionForLivestreamIdLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data14, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetLivestreamSessionForLivestreamIdLivestreamResponse>;

export type GetLivestreamSessionForLivestreamIdLivestreamError = DefaultErrors;

export const getLivestreamSessionForLivestreamIdLivestream: API.OperationMethod<
  GetLivestreamSessionForLivestreamIdLivestreamRequest,
  GetLivestreamSessionForLivestreamIdLivestreamResponse,
  GetLivestreamSessionForLivestreamIdLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLivestreamSessionForLivestreamIdLivestreamRequest,
  output: GetLivestreamSessionForLivestreamIdLivestreamResponse,
  errors: [],
}));

// =============================================================================
// Meeting
// =============================================================================

export interface GetMeetingRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: The end time range for which you want to retrieve the meetings. The time must be specified in ISO format. */
  endTime?: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page */
  perPage?: number;
  /** Query param: The search query string. You can search using the meeting ID or title. */
  search?: string;
  /** Query param: The start time range for which you want to retrieve the meetings. The time must be specified in ISO format. */
  startTime?: string;
  /** Query param: Filter meetings by status. */
  status?: "ACTIVE" | "INACTIVE" | (string & {});
}

export const GetMeetingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("end_time")),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("start_time")),
      status: Schema.optional(
        Schema.Union([Schema.Literals(["ACTIVE", "INACTIVE"]), Schema.String]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings",
      }),
    ),
) as unknown as Schema.Codec<GetMeetingRequest>;

export interface GetMeetingResponse {
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    liveStreamOnStart?: boolean | null;
    persistChat?: boolean | null;
    recordOnStart?: boolean | null;
    recordingConfig?: {
      audioConfig?: {
        channel?: "mono" | "stereo" | (string & {}) | null;
        codec?: "MP3" | "AAC" | (string & {}) | null;
        exportFile?: boolean | null;
      } | null;
      fileNamePrefix?: string | null;
      liveStreamingConfig?: { rtmpUrl?: string | null } | null;
      maxSeconds?: number | null;
      realtimekitBucketConfig?: { enabled: boolean } | null;
      storageConfig?: {
        type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
        authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
        bucket?: string | null;
        host?: string | null;
        password?: string | null;
        path?: string | null;
        port?: number | null;
        privateKey?: string | null;
        region?: string | null;
        secret?: string | null;
        username?: string | null;
      } | null;
      videoConfig?: {
        codec?: "H264" | "VP8" | (string & {}) | null;
        exportFile?: boolean | null;
        height?: number | null;
        watermark?: {
          position?:
            | "left top"
            | "right top"
            | "left bottom"
            | "right bottom"
            | (string & {})
            | null;
          size?: { height?: number | null; width?: number | null } | null;
          url?: string | null;
        } | null;
        width?: number | null;
      } | null;
    } | null;
    sessionKeepAliveTimeInSecs?: number | null;
    status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
    summarizeOnEnd?: boolean | null;
    title?: string | null;
    transcribeOnEnd?: boolean | null;
  }[];
  paging: { endOffset: number; startOffset: number; totalCount: number };
  success: boolean;
}

export const GetMeetingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      data: Schema.Array(Data15),
      paging: Paging2,
      success: Schema.Boolean,
    }),
) as unknown as Schema.Codec<GetMeetingResponse>;

export type GetMeetingError = DefaultErrors;

export const getMeeting: API.OperationMethod<
  GetMeetingRequest,
  GetMeetingResponse,
  GetMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMeetingRequest,
  output: GetMeetingResponse,
  errors: [],
}));

export interface CreateMeetingRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: The AI Config allows you to customize the behavior of meeting transcriptions and summaries */
  aiConfig?: {
    summarization?: {
      summaryType?:
        | "general"
        | "team_meeting"
        | "sales_call"
        | "client_check_in"
        | "interview"
        | "daily_standup"
        | "one_on_one_meeting"
        | "lecture"
        | "code_review"
        | (string & {});
      textFormat?: "plain_text" | "markdown" | (string & {});
      wordLimit?: number;
    };
    transcription?: {
      keywords?: string[];
      language?:
        | "en-US"
        | "en-IN"
        | "de"
        | "hi"
        | "sv"
        | "ru"
        | "pl"
        | "el"
        | "fr"
        | "nl"
        | (string & {});
      profanityFilter?: boolean;
    };
  };
  /** Body param: Specifies if the meeting should start getting livestreamed on start. */
  liveStreamOnStart?: boolean | null;
  /** Body param: If a meeting is set to persist_chat, meeting chat would remain for a week within the meeting space. */
  persistChat?: boolean;
  /** Body param: Specifies if the meeting should start getting recorded as soon as someone joins the meeting. */
  recordOnStart?: boolean | null;
  /** Body param: Recording Configurations to be used for this meeting. This level of configs takes higher preference over App level configs on the RealtimeKit developer portal. */
  recordingConfig?: {
    audioConfig?: {
      channel?: "mono" | "stereo" | (string & {});
      codec?: "MP3" | "AAC" | (string & {});
      exportFile?: boolean;
    };
    fileNamePrefix?: string;
    liveStreamingConfig?: { rtmpUrl?: string };
    maxSeconds?: number;
    realtimekitBucketConfig?: { enabled: boolean };
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      accessKey?: string;
      authMethod?: "KEY" | "PASSWORD" | (string & {});
      bucket?: string;
      host?: string;
      password?: string;
      path?: string;
      port?: number;
      privateKey?: string;
      region?: string;
      secret?: string;
      username?: string;
    } | null;
    videoConfig?: {
      codec?: "H264" | "VP8" | (string & {});
      exportFile?: boolean;
      height?: number;
      watermark?: {
        position?:
          | "left top"
          | "right top"
          | "left bottom"
          | "right bottom"
          | (string & {});
        size?: { height?: number; width?: number };
        url?: string;
      };
      width?: number;
    };
  };
  /** Body param: Time in seconds, for which a session remains active, after the last participant has left the meeting. */
  sessionKeepAliveTimeInSecs?: number;
  /** Body param: Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API. */
  summarizeOnEnd?: boolean;
  /** Body param: Title of the meeting */
  title?: string | null;
  /** Body param: Automatically generate transcripts when the meeting ends. */
  transcribeOnEnd?: boolean;
}

export const CreateMeetingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiConfig: Schema.optional(Aiconfig),
      liveStreamOnStart: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      persistChat: Schema.optional(Schema.Boolean),
      recordOnStart: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      recordingConfig: Schema.optional(RecordingConfig2),
      sessionKeepAliveTimeInSecs: Schema.optional(Schema.Number),
      summarizeOnEnd: Schema.optional(Schema.Boolean),
      title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      transcribeOnEnd: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        aiConfig: "ai_config",
        liveStreamOnStart: "live_stream_on_start",
        persistChat: "persist_chat",
        recordOnStart: "record_on_start",
        recordingConfig: "recording_config",
        sessionKeepAliveTimeInSecs: "session_keep_alive_time_in_secs",
        summarizeOnEnd: "summarize_on_end",
        title: "title",
        transcribeOnEnd: "transcribe_on_end",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings",
      }),
    ),
) as unknown as Schema.Codec<CreateMeetingRequest>;

export interface CreateMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    aiConfig?: {
      summarization?: {
        summaryType?:
          | "general"
          | "team_meeting"
          | "sales_call"
          | "client_check_in"
          | "interview"
          | "daily_standup"
          | "one_on_one_meeting"
          | "lecture"
          | "code_review"
          | (string & {})
          | null;
        textFormat?: "plain_text" | "markdown" | (string & {}) | null;
        wordLimit?: number | null;
      } | null;
      transcription?: {
        keywords?: string[] | null;
        language?:
          | "en-US"
          | "en-IN"
          | "de"
          | "hi"
          | "sv"
          | "ru"
          | "pl"
          | "el"
          | "fr"
          | "nl"
          | (string & {})
          | null;
        profanityFilter?: boolean | null;
      } | null;
    } | null;
    liveStreamOnStart?: boolean | null;
    persistChat?: boolean | null;
    recordOnStart?: boolean | null;
    recordingConfig?: {
      audioConfig?: {
        channel?: "mono" | "stereo" | (string & {}) | null;
        codec?: "MP3" | "AAC" | (string & {}) | null;
        exportFile?: boolean | null;
      } | null;
      fileNamePrefix?: string | null;
      liveStreamingConfig?: { rtmpUrl?: string | null } | null;
      maxSeconds?: number | null;
      realtimekitBucketConfig?: { enabled: boolean } | null;
      storageConfig?: {
        type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
        authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
        bucket?: string | null;
        host?: string | null;
        password?: string | null;
        path?: string | null;
        port?: number | null;
        privateKey?: string | null;
        region?: string | null;
        secret?: string | null;
        username?: string | null;
      } | null;
      videoConfig?: {
        codec?: "H264" | "VP8" | (string & {}) | null;
        exportFile?: boolean | null;
        height?: number | null;
        watermark?: {
          position?:
            | "left top"
            | "right top"
            | "left bottom"
            | "right bottom"
            | (string & {})
            | null;
          size?: { height?: number | null; width?: number | null } | null;
          url?: string | null;
        } | null;
        width?: number | null;
      } | null;
    } | null;
    sessionKeepAliveTimeInSecs?: number | null;
    status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
    summarizeOnEnd?: boolean | null;
    title?: string | null;
    transcribeOnEnd?: boolean | null;
  } | null;
}

export const CreateMeetingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data16, Schema.Null])),
    }),
) as unknown as Schema.Codec<CreateMeetingResponse>;

export type CreateMeetingError = DefaultErrors;

export const createMeeting: API.OperationMethod<
  CreateMeetingRequest,
  CreateMeetingResponse,
  CreateMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMeetingRequest,
  output: CreateMeetingResponse,
  errors: [],
}));

// =============================================================================
// MeetingActiveLivestreamsLivestream
// =============================================================================

export interface GetMeetingActiveLivestreamsLivestreamRequest {
  appId: string;
  meetingId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetMeetingActiveLivestreamsLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/active-livestream",
      }),
    ),
  ) as unknown as Schema.Codec<GetMeetingActiveLivestreamsLivestreamRequest>;

export interface GetMeetingActiveLivestreamsLivestreamResponse {
  data?: {
    id?: string | null;
    createdAt?: string | null;
    disabled?: string | null;
    ingestServer?: string | null;
    meetingId?: string | null;
    name?: string | null;
    playbackUrl?: string | null;
    status?: "LIVE" | "IDLE" | "ERRORED" | "INVOKED" | (string & {}) | null;
    streamKey?: string | null;
    updatedAt?: string | null;
  } | null;
  success?: boolean | null;
}

export const GetMeetingActiveLivestreamsLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data17, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetMeetingActiveLivestreamsLivestreamResponse>;

export type GetMeetingActiveLivestreamsLivestreamError = DefaultErrors;

export const getMeetingActiveLivestreamsLivestream: API.OperationMethod<
  GetMeetingActiveLivestreamsLivestreamRequest,
  GetMeetingActiveLivestreamsLivestreamResponse,
  GetMeetingActiveLivestreamsLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMeetingActiveLivestreamsLivestreamRequest,
  output: GetMeetingActiveLivestreamsLivestreamResponse,
  errors: [],
}));

// =============================================================================
// MeetingByIdMeeting
// =============================================================================

export interface GetMeetingByIdMeetingRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param */
  name?: string;
}

export const GetMeetingByIdMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetMeetingByIdMeetingRequest>;

export interface GetMeetingByIdMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    aiConfig?: {
      summarization?: {
        summaryType?:
          | "general"
          | "team_meeting"
          | "sales_call"
          | "client_check_in"
          | "interview"
          | "daily_standup"
          | "one_on_one_meeting"
          | "lecture"
          | "code_review"
          | (string & {})
          | null;
        textFormat?: "plain_text" | "markdown" | (string & {}) | null;
        wordLimit?: number | null;
      } | null;
      transcription?: {
        keywords?: string[] | null;
        language?:
          | "en-US"
          | "en-IN"
          | "de"
          | "hi"
          | "sv"
          | "ru"
          | "pl"
          | "el"
          | "fr"
          | "nl"
          | (string & {})
          | null;
        profanityFilter?: boolean | null;
      } | null;
    } | null;
    liveStreamOnStart?: boolean | null;
    persistChat?: boolean | null;
    recordOnStart?: boolean | null;
    recordingConfig?: {
      audioConfig?: {
        channel?: "mono" | "stereo" | (string & {}) | null;
        codec?: "MP3" | "AAC" | (string & {}) | null;
        exportFile?: boolean | null;
      } | null;
      fileNamePrefix?: string | null;
      liveStreamingConfig?: { rtmpUrl?: string | null } | null;
      maxSeconds?: number | null;
      realtimekitBucketConfig?: { enabled: boolean } | null;
      storageConfig?: {
        type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
        authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
        bucket?: string | null;
        host?: string | null;
        password?: string | null;
        path?: string | null;
        port?: number | null;
        privateKey?: string | null;
        region?: string | null;
        secret?: string | null;
        username?: string | null;
      } | null;
      videoConfig?: {
        codec?: "H264" | "VP8" | (string & {}) | null;
        exportFile?: boolean | null;
        height?: number | null;
        watermark?: {
          position?:
            | "left top"
            | "right top"
            | "left bottom"
            | "right bottom"
            | (string & {})
            | null;
          size?: { height?: number | null; width?: number | null } | null;
          url?: string | null;
        } | null;
        width?: number | null;
      } | null;
    } | null;
    sessionKeepAliveTimeInSecs?: number | null;
    status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
    summarizeOnEnd?: boolean | null;
    title?: string | null;
    transcribeOnEnd?: boolean | null;
  } | null;
}

export const GetMeetingByIdMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data16, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetMeetingByIdMeetingResponse>;

export type GetMeetingByIdMeetingError = DefaultErrors;

export const getMeetingByIdMeeting: API.OperationMethod<
  GetMeetingByIdMeetingRequest,
  GetMeetingByIdMeetingResponse,
  GetMeetingByIdMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMeetingByIdMeetingRequest,
  output: GetMeetingByIdMeetingResponse,
  errors: [],
}));

export interface UpdateMeetingByIdMeetingRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: The AI Config allows you to customize the behavior of meeting transcriptions and summaries */
  aiConfig?: {
    summarization?: {
      summaryType?:
        | "general"
        | "team_meeting"
        | "sales_call"
        | "client_check_in"
        | "interview"
        | "daily_standup"
        | "one_on_one_meeting"
        | "lecture"
        | "code_review"
        | (string & {});
      textFormat?: "plain_text" | "markdown" | (string & {});
      wordLimit?: number;
    };
    transcription?: {
      keywords?: string[];
      language?:
        | "en-US"
        | "en-IN"
        | "de"
        | "hi"
        | "sv"
        | "ru"
        | "pl"
        | "el"
        | "fr"
        | "nl"
        | (string & {});
      profanityFilter?: boolean;
    };
  };
  /** Body param: Specifies if the meeting should start getting livestreamed on start. */
  liveStreamOnStart?: boolean;
  /** Body param: If a meeting is updated to persist_chat, meeting chat would remain for a week within the meeting space. */
  persistChat?: boolean;
  /** Body param: Specifies if the meeting should start getting recorded as soon as someone joins the meeting. */
  recordOnStart?: boolean;
  /** Body param: Recording Configurations to be used for this meeting. This level of configs takes higher preference over App level configs on the RealtimeKit developer portal. */
  recordingConfig?: {
    audioConfig?: {
      channel?: "mono" | "stereo" | (string & {});
      codec?: "MP3" | "AAC" | (string & {});
      exportFile?: boolean;
    };
    fileNamePrefix?: string;
    liveStreamingConfig?: { rtmpUrl?: string };
    maxSeconds?: number;
    realtimekitBucketConfig?: { enabled: boolean };
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      accessKey?: string;
      authMethod?: "KEY" | "PASSWORD" | (string & {});
      bucket?: string;
      host?: string;
      password?: string;
      path?: string;
      port?: number;
      privateKey?: string;
      region?: string;
      secret?: string;
      username?: string;
    } | null;
    videoConfig?: {
      codec?: "H264" | "VP8" | (string & {});
      exportFile?: boolean;
      height?: number;
      watermark?: {
        position?:
          | "left top"
          | "right top"
          | "left bottom"
          | "right bottom"
          | (string & {});
        size?: { height?: number; width?: number };
        url?: string;
      };
      width?: number;
    };
  };
  /** Body param: Time in seconds, for which a session remains active, after the last participant has left the meeting. */
  sessionKeepAliveTimeInSecs?: number;
  /** Body param: Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an `INACTIVE` meeting. */
  status?: "ACTIVE" | "INACTIVE" | (string & {});
  /** Body param: Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API. */
  summarizeOnEnd?: boolean;
  /** Body param: Title of the meeting */
  title?: string;
  /** Body param: Automatically generate transcripts when the meeting ends. */
  transcribeOnEnd?: boolean;
}

export const UpdateMeetingByIdMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiConfig: Schema.optional(Aiconfig),
      liveStreamOnStart: Schema.optional(Schema.Boolean),
      persistChat: Schema.optional(Schema.Boolean),
      recordOnStart: Schema.optional(Schema.Boolean),
      recordingConfig: Schema.optional(RecordingConfig2),
      sessionKeepAliveTimeInSecs: Schema.optional(Schema.Number),
      status: Schema.optional(
        Schema.Union([Schema.Literals(["ACTIVE", "INACTIVE"]), Schema.String]),
      ),
      summarizeOnEnd: Schema.optional(Schema.Boolean),
      title: Schema.optional(Schema.String),
      transcribeOnEnd: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        aiConfig: "ai_config",
        liveStreamOnStart: "live_stream_on_start",
        persistChat: "persist_chat",
        recordOnStart: "record_on_start",
        recordingConfig: "recording_config",
        sessionKeepAliveTimeInSecs: "session_keep_alive_time_in_secs",
        status: "status",
        summarizeOnEnd: "summarize_on_end",
        title: "title",
        transcribeOnEnd: "transcribe_on_end",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateMeetingByIdMeetingRequest>;

export interface UpdateMeetingByIdMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    aiConfig?: {
      summarization?: {
        summaryType?:
          | "general"
          | "team_meeting"
          | "sales_call"
          | "client_check_in"
          | "interview"
          | "daily_standup"
          | "one_on_one_meeting"
          | "lecture"
          | "code_review"
          | (string & {})
          | null;
        textFormat?: "plain_text" | "markdown" | (string & {}) | null;
        wordLimit?: number | null;
      } | null;
      transcription?: {
        keywords?: string[] | null;
        language?:
          | "en-US"
          | "en-IN"
          | "de"
          | "hi"
          | "sv"
          | "ru"
          | "pl"
          | "el"
          | "fr"
          | "nl"
          | (string & {})
          | null;
        profanityFilter?: boolean | null;
      } | null;
    } | null;
    liveStreamOnStart?: boolean | null;
    persistChat?: boolean | null;
    recordOnStart?: boolean | null;
    recordingConfig?: {
      audioConfig?: {
        channel?: "mono" | "stereo" | (string & {}) | null;
        codec?: "MP3" | "AAC" | (string & {}) | null;
        exportFile?: boolean | null;
      } | null;
      fileNamePrefix?: string | null;
      liveStreamingConfig?: { rtmpUrl?: string | null } | null;
      maxSeconds?: number | null;
      realtimekitBucketConfig?: { enabled: boolean } | null;
      storageConfig?: {
        type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
        authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
        bucket?: string | null;
        host?: string | null;
        password?: string | null;
        path?: string | null;
        port?: number | null;
        privateKey?: string | null;
        region?: string | null;
        secret?: string | null;
        username?: string | null;
      } | null;
      videoConfig?: {
        codec?: "H264" | "VP8" | (string & {}) | null;
        exportFile?: boolean | null;
        height?: number | null;
        watermark?: {
          position?:
            | "left top"
            | "right top"
            | "left bottom"
            | "right bottom"
            | (string & {})
            | null;
          size?: { height?: number | null; width?: number | null } | null;
          url?: string | null;
        } | null;
        width?: number | null;
      } | null;
    } | null;
    sessionKeepAliveTimeInSecs?: number | null;
    status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
    summarizeOnEnd?: boolean | null;
    title?: string | null;
    transcribeOnEnd?: boolean | null;
  } | null;
}

export const UpdateMeetingByIdMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data16, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<UpdateMeetingByIdMeetingResponse>;

export type UpdateMeetingByIdMeetingError = DefaultErrors;

export const updateMeetingByIdMeeting: API.OperationMethod<
  UpdateMeetingByIdMeetingRequest,
  UpdateMeetingByIdMeetingResponse,
  UpdateMeetingByIdMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMeetingByIdMeetingRequest,
  output: UpdateMeetingByIdMeetingResponse,
  errors: [],
}));

export interface ReplaceMeetingByIdMeetingRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: The AI Config allows you to customize the behavior of meeting transcriptions and summaries */
  aiConfig?: {
    summarization?: {
      summaryType?:
        | "general"
        | "team_meeting"
        | "sales_call"
        | "client_check_in"
        | "interview"
        | "daily_standup"
        | "one_on_one_meeting"
        | "lecture"
        | "code_review"
        | (string & {});
      textFormat?: "plain_text" | "markdown" | (string & {});
      wordLimit?: number;
    };
    transcription?: {
      keywords?: string[];
      language?:
        | "en-US"
        | "en-IN"
        | "de"
        | "hi"
        | "sv"
        | "ru"
        | "pl"
        | "el"
        | "fr"
        | "nl"
        | (string & {});
      profanityFilter?: boolean;
    };
  };
  /** Body param: Specifies if the meeting should start getting livestreamed on start. */
  liveStreamOnStart?: boolean | null;
  /** Body param: If a meeting is set to persist_chat, meeting chat would remain for a week within the meeting space. */
  persistChat?: boolean;
  /** Body param: Specifies if the meeting should start getting recorded as soon as someone joins the meeting. */
  recordOnStart?: boolean | null;
  /** Body param: Recording Configurations to be used for this meeting. This level of configs takes higher preference over App level configs on the RealtimeKit developer portal. */
  recordingConfig?: {
    audioConfig?: {
      channel?: "mono" | "stereo" | (string & {});
      codec?: "MP3" | "AAC" | (string & {});
      exportFile?: boolean;
    };
    fileNamePrefix?: string;
    liveStreamingConfig?: { rtmpUrl?: string };
    maxSeconds?: number;
    realtimekitBucketConfig?: { enabled: boolean };
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      accessKey?: string;
      authMethod?: "KEY" | "PASSWORD" | (string & {});
      bucket?: string;
      host?: string;
      password?: string;
      path?: string;
      port?: number;
      privateKey?: string;
      region?: string;
      secret?: string;
      username?: string;
    } | null;
    videoConfig?: {
      codec?: "H264" | "VP8" | (string & {});
      exportFile?: boolean;
      height?: number;
      watermark?: {
        position?:
          | "left top"
          | "right top"
          | "left bottom"
          | "right bottom"
          | (string & {});
        size?: { height?: number; width?: number };
        url?: string;
      };
      width?: number;
    };
  };
  /** Body param: Time in seconds, for which a session remains active, after the last participant has left the meeting. */
  sessionKeepAliveTimeInSecs?: number;
  /** Body param: Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API. */
  summarizeOnEnd?: boolean;
  /** Body param: Title of the meeting */
  title?: string | null;
  /** Body param: Automatically generate transcripts when the meeting ends. */
  transcribeOnEnd?: boolean;
}

export const ReplaceMeetingByIdMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiConfig: Schema.optional(Aiconfig),
      liveStreamOnStart: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      persistChat: Schema.optional(Schema.Boolean),
      recordOnStart: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      recordingConfig: Schema.optional(RecordingConfig2),
      sessionKeepAliveTimeInSecs: Schema.optional(Schema.Number),
      summarizeOnEnd: Schema.optional(Schema.Boolean),
      title: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      transcribeOnEnd: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        aiConfig: "ai_config",
        liveStreamOnStart: "live_stream_on_start",
        persistChat: "persist_chat",
        recordOnStart: "record_on_start",
        recordingConfig: "recording_config",
        sessionKeepAliveTimeInSecs: "session_keep_alive_time_in_secs",
        summarizeOnEnd: "summarize_on_end",
        title: "title",
        transcribeOnEnd: "transcribe_on_end",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}",
      }),
    ),
  ) as unknown as Schema.Codec<ReplaceMeetingByIdMeetingRequest>;

export interface ReplaceMeetingByIdMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    aiConfig?: {
      summarization?: {
        summaryType?:
          | "general"
          | "team_meeting"
          | "sales_call"
          | "client_check_in"
          | "interview"
          | "daily_standup"
          | "one_on_one_meeting"
          | "lecture"
          | "code_review"
          | (string & {})
          | null;
        textFormat?: "plain_text" | "markdown" | (string & {}) | null;
        wordLimit?: number | null;
      } | null;
      transcription?: {
        keywords?: string[] | null;
        language?:
          | "en-US"
          | "en-IN"
          | "de"
          | "hi"
          | "sv"
          | "ru"
          | "pl"
          | "el"
          | "fr"
          | "nl"
          | (string & {})
          | null;
        profanityFilter?: boolean | null;
      } | null;
    } | null;
    liveStreamOnStart?: boolean | null;
    persistChat?: boolean | null;
    recordOnStart?: boolean | null;
    recordingConfig?: {
      audioConfig?: {
        channel?: "mono" | "stereo" | (string & {}) | null;
        codec?: "MP3" | "AAC" | (string & {}) | null;
        exportFile?: boolean | null;
      } | null;
      fileNamePrefix?: string | null;
      liveStreamingConfig?: { rtmpUrl?: string | null } | null;
      maxSeconds?: number | null;
      realtimekitBucketConfig?: { enabled: boolean } | null;
      storageConfig?: {
        type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
        authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
        bucket?: string | null;
        host?: string | null;
        password?: string | null;
        path?: string | null;
        port?: number | null;
        privateKey?: string | null;
        region?: string | null;
        secret?: string | null;
        username?: string | null;
      } | null;
      videoConfig?: {
        codec?: "H264" | "VP8" | (string & {}) | null;
        exportFile?: boolean | null;
        height?: number | null;
        watermark?: {
          position?:
            | "left top"
            | "right top"
            | "left bottom"
            | "right bottom"
            | (string & {})
            | null;
          size?: { height?: number | null; width?: number | null } | null;
          url?: string | null;
        } | null;
        width?: number | null;
      } | null;
    } | null;
    sessionKeepAliveTimeInSecs?: number | null;
    status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
    summarizeOnEnd?: boolean | null;
    title?: string | null;
    transcribeOnEnd?: boolean | null;
  } | null;
}

export const ReplaceMeetingByIdMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data16, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ReplaceMeetingByIdMeetingResponse>;

export type ReplaceMeetingByIdMeetingError = DefaultErrors;

export const replaceMeetingByIdMeeting: API.OperationMethod<
  ReplaceMeetingByIdMeetingRequest,
  ReplaceMeetingByIdMeetingResponse,
  ReplaceMeetingByIdMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceMeetingByIdMeetingRequest,
  output: ReplaceMeetingByIdMeetingResponse,
  errors: [],
}));

// =============================================================================
// MeetingParticipantMeeting
// =============================================================================

export interface GetMeetingParticipantMeetingRequest {
  appId: string;
  meetingId: string;
  participantId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetMeetingParticipantMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      participantId: Schema.String.pipe(T.HttpPath("participantId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/participants/{participantId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetMeetingParticipantMeetingRequest>;

export interface GetMeetingParticipantMeetingResponse {
  /** Data returned by the operation */
  data: {
    id: string;
    createdAt: string;
    customParticipantId: string;
    presetName: string;
    updatedAt: string;
    name?: string | null;
    picture?: string | null;
  };
  /** Success status of the operation */
  success: boolean;
}

export const GetMeetingParticipantMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data18,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetMeetingParticipantMeetingResponse>;

export type GetMeetingParticipantMeetingError = DefaultErrors;

export const getMeetingParticipantMeeting: API.OperationMethod<
  GetMeetingParticipantMeetingRequest,
  GetMeetingParticipantMeetingResponse,
  GetMeetingParticipantMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMeetingParticipantMeetingRequest,
  output: GetMeetingParticipantMeetingResponse,
  errors: [],
}));

export interface DeleteMeetingParticipantMeetingRequest {
  appId: string;
  meetingId: string;
  participantId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const DeleteMeetingParticipantMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      participantId: Schema.String.pipe(T.HttpPath("participantId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/participants/{participantId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteMeetingParticipantMeetingRequest>;

export interface DeleteMeetingParticipantMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    createdAt: string;
    customParticipantId: string;
    presetId: string;
    updatedAt: string;
  } | null;
}

export const DeleteMeetingParticipantMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data19, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<DeleteMeetingParticipantMeetingResponse>;

export type DeleteMeetingParticipantMeetingError = DefaultErrors;

export const deleteMeetingParticipantMeeting: API.OperationMethod<
  DeleteMeetingParticipantMeetingRequest,
  DeleteMeetingParticipantMeetingResponse,
  DeleteMeetingParticipantMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMeetingParticipantMeetingRequest,
  output: DeleteMeetingParticipantMeetingResponse,
  errors: [],
}));

// =============================================================================
// MeetingParticipantsMeeting
// =============================================================================

export interface GetMeetingParticipantsMeetingRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page */
  perPage?: number;
}

export const GetMeetingParticipantsMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/participants",
      }),
    ),
  ) as unknown as Schema.Codec<GetMeetingParticipantsMeetingRequest>;

export interface GetMeetingParticipantsMeetingResponse {
  data: {
    id: string;
    createdAt: string;
    customParticipantId: string;
    presetName: string;
    updatedAt: string;
    name?: string | null;
    picture?: string | null;
  }[];
  paging: { endOffset: number; startOffset: number; totalCount: number };
  success: boolean;
}

export const GetMeetingParticipantsMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Array(Data18),
      paging: Paging2,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetMeetingParticipantsMeetingResponse>;

export type GetMeetingParticipantsMeetingError = DefaultErrors;

export const getMeetingParticipantsMeeting: API.OperationMethod<
  GetMeetingParticipantsMeetingRequest,
  GetMeetingParticipantsMeetingResponse,
  GetMeetingParticipantsMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMeetingParticipantsMeetingRequest,
  output: GetMeetingParticipantsMeetingResponse,
  errors: [],
}));

// =============================================================================
// OneRecordingRecording
// =============================================================================

export interface GetOneRecordingRecordingRequest {
  appId: string;
  recordingId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetOneRecordingRecordingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      recordingId: Schema.String.pipe(T.HttpPath("recordingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/recordings/{recordingId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetOneRecordingRecordingRequest>;

export interface GetOneRecordingRecordingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    audioDownloadUrl: string | null;
    downloadUrl: string | null;
    downloadUrlExpiry: string | null;
    fileSize: number | null;
    invokedTime: string;
    outputFileName: string;
    sessionId: string | null;
    startedTime: string | null;
    status:
      | "INVOKED"
      | "RECORDING"
      | "UPLOADING"
      | "UPLOADED"
      | "ERRORED"
      | "PAUSED"
      | (string & {});
    stoppedTime: string | null;
    recordingDuration?: number | null;
    startReason?: {
      caller?: {
        name?: string | null;
        type?: "ORGANIZATION" | "USER" | (string & {}) | null;
        userId?: string | null;
      } | null;
      reason?: "API_CALL" | "RECORD_ON_START" | (string & {}) | null;
    } | null;
    stopReason?: {
      caller?: {
        name?: string | null;
        type?: "ORGANIZATION" | "USER" | (string & {}) | null;
        userId?: string | null;
      } | null;
      reason?:
        | "API_CALL"
        | "INTERNAL_ERROR"
        | "ALL_PEERS_LEFT"
        | (string & {})
        | null;
    } | null;
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
      bucket?: string | null;
      host?: string | null;
      password?: string | null;
      path?: string | null;
      port?: number | null;
      privateKey?: string | null;
      region?: string | null;
      secret?: string | null;
      username?: string | null;
    } | null;
  } | null;
}

export const GetOneRecordingRecordingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data20, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetOneRecordingRecordingResponse>;

export type GetOneRecordingRecordingError = DefaultErrors;

export const getOneRecordingRecording: API.OperationMethod<
  GetOneRecordingRecordingRequest,
  GetOneRecordingRecordingResponse,
  GetOneRecordingRecordingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOneRecordingRecordingRequest,
  output: GetOneRecordingRecordingResponse,
  errors: [],
}));

// =============================================================================
// OrgAnalyticsAnalytic
// =============================================================================

export interface GetOrgAnalyticsAnalyticRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: end date in YYYY-MM-DD format */
  endDate?: string;
  /** Query param: start date in YYYY-MM-DD format */
  startDate?: string;
}

export const GetOrgAnalyticsAnalyticRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("end_date")),
      startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("start_date")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/analytics/daywise",
      }),
    ),
  ) as unknown as Schema.Codec<GetOrgAnalyticsAnalyticRequest>;

export interface GetOrgAnalyticsAnalyticResponse {
  data?: {
    recordingStats?: {
      dayStats?:
        | {
            day?: string | null;
            totalRecordingMinutes?: number | null;
            totalRecordings?: number | null;
          }[]
        | null;
      recordingCount?: number | null;
      recordingMinutesConsumed?: number | null;
    } | null;
    sessionStats?: {
      dayStats?:
        | {
            day?: string | null;
            totalSessionMinutes?: number | null;
            totalSessions?: number | null;
          }[]
        | null;
      sessionsCount?: number | null;
      sessionsMinutesConsumed?: number | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const GetOrgAnalyticsAnalyticResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data21, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetOrgAnalyticsAnalyticResponse>;

export type GetOrgAnalyticsAnalyticError = DefaultErrors;

export const getOrgAnalyticsAnalytic: API.OperationMethod<
  GetOrgAnalyticsAnalyticRequest,
  GetOrgAnalyticsAnalyticResponse,
  GetOrgAnalyticsAnalyticError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrgAnalyticsAnalyticRequest,
  output: GetOrgAnalyticsAnalyticResponse,
  errors: [],
}));

// =============================================================================
// OrgAnalyticsLivestream
// =============================================================================

export interface GetOrgAnalyticsLivestreamRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: end date in YYYY-MM-DD format */
  endDate?: string;
  /** Query param: start date in YYYY-MM-DD format */
  startDate?: string;
}

export const GetOrgAnalyticsLivestreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("end_date")),
      startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("start_date")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/analytics/daywise",
      }),
    ),
  ) as unknown as Schema.Codec<GetOrgAnalyticsLivestreamRequest>;

export interface GetOrgAnalyticsLivestreamResponse {
  data?: {
    recordingStats?: {
      dayStats?:
        | {
            day?: string | null;
            totalRecordingMinutes?: number | null;
            totalRecordings?: number | null;
          }[]
        | null;
      recordingCount?: number | null;
      recordingMinutesConsumed?: number | null;
    } | null;
    sessionStats?: {
      dayStats?:
        | {
            day?: string | null;
            totalSessionMinutes?: number | null;
            totalSessions?: number | null;
          }[]
        | null;
      sessionsCount?: number | null;
      sessionsMinutesConsumed?: number | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const GetOrgAnalyticsLivestreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data21, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetOrgAnalyticsLivestreamResponse>;

export type GetOrgAnalyticsLivestreamError = DefaultErrors;

export const getOrgAnalyticsLivestream: API.OperationMethod<
  GetOrgAnalyticsLivestreamRequest,
  GetOrgAnalyticsLivestreamResponse,
  GetOrgAnalyticsLivestreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrgAnalyticsLivestreamRequest,
  output: GetOrgAnalyticsLivestreamResponse,
  errors: [],
}));

// =============================================================================
// ParticipantDataFromPeerIdSession
// =============================================================================

export interface GetParticipantDataFromPeerIdSessionRequest {
  appId: string;
  peerId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: Filter to apply to the peer report. */
  filters?:
    | "device_info"
    | "ip_information"
    | "precall_network_information"
    | "events"
    | "quality_stats"
    | (string & {});
  /** Query param: if true, response includes all the peer events of participant. */
  includePeerEvents?: boolean;
}

export const GetParticipantDataFromPeerIdSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      peerId: Schema.String.pipe(T.HttpPath("peerId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      filters: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "device_info",
            "ip_information",
            "precall_network_information",
            "events",
            "quality_stats",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("filters")),
      includePeerEvents: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_peer_events"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/peer-report/{peerId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetParticipantDataFromPeerIdSessionRequest>;

export interface GetParticipantDataFromPeerIdSessionResponse {
  data?: {
    participant?: {
      id?: string | null;
      createdAt?: string | null;
      customParticipantId?: string | null;
      displayName?: string | null;
      duration?: number | null;
      joinedAt?: string | null;
      leftAt?: string | null;
      peerEvents?: Record<string, unknown>[] | null;
      peerReport?: {
        metadata?: Record<string, unknown> | null;
        quality?: Record<string, unknown> | null;
      } | null;
      role?: string | null;
      sessionId?: string | null;
      updatedAt?: string | null;
      userId?: string | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const GetParticipantDataFromPeerIdSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data22, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetParticipantDataFromPeerIdSessionResponse>;

export type GetParticipantDataFromPeerIdSessionError = DefaultErrors;

export const getParticipantDataFromPeerIdSession: API.OperationMethod<
  GetParticipantDataFromPeerIdSessionRequest,
  GetParticipantDataFromPeerIdSessionResponse,
  GetParticipantDataFromPeerIdSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetParticipantDataFromPeerIdSessionRequest,
  output: GetParticipantDataFromPeerIdSessionResponse,
  errors: [],
}));

// =============================================================================
// ParticipantMeeting
// =============================================================================

export interface AddParticipantMeetingRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: A unique participant ID. You must specify a unique ID for the participant, for example, UUID, email address, and so on. */
  customParticipantId: string;
  /** Body param: Name of the preset to apply to this participant. */
  presetName: string;
  /** Body param: (Optional) Name of the participant. */
  name?: string | null;
  /** Body param: (Optional) A URL to a picture to be used for the participant. */
  picture?: string | null;
}

export const AddParticipantMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      customParticipantId: Schema.String,
      presetName: Schema.String,
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      picture: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        customParticipantId: "custom_participant_id",
        presetName: "preset_name",
        name: "name",
        picture: "picture",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/participants",
      }),
    ),
  ) as unknown as Schema.Codec<AddParticipantMeetingRequest>;

export interface AddParticipantMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Represents a participant. */
  data?: {
    id: string;
    token: string;
    createdAt: string;
    customParticipantId: string;
    presetName: string;
    updatedAt: string;
    name?: string | null;
    picture?: string | null;
  } | null;
}

export const AddParticipantMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data23, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<AddParticipantMeetingResponse>;

export type AddParticipantMeetingError = DefaultErrors;

export const addParticipantMeeting: API.OperationMethod<
  AddParticipantMeetingRequest,
  AddParticipantMeetingResponse,
  AddParticipantMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddParticipantMeetingRequest,
  output: AddParticipantMeetingResponse,
  errors: [],
}));

export interface EditParticipantMeetingRequest {
  appId: string;
  meetingId: string;
  participantId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: (Optional) Name of the participant. */
  name?: string | null;
  /** Body param: (Optional) A URL to a picture to be used for the participant. */
  picture?: string | null;
  /** Body param: (Optional) Name of the preset to apply to this participant. */
  presetName?: string | null;
}

export const EditParticipantMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      participantId: Schema.String.pipe(T.HttpPath("participantId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      picture: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      presetName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        picture: "picture",
        presetName: "preset_name",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/participants/{participantId}",
      }),
    ),
  ) as unknown as Schema.Codec<EditParticipantMeetingRequest>;

export interface EditParticipantMeetingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Represents a participant. */
  data?: {
    id: string;
    token: string;
    createdAt: string;
    customParticipantId: string;
    presetName: string;
    updatedAt: string;
    name?: string | null;
    picture?: string | null;
  } | null;
}

export const EditParticipantMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data23, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<EditParticipantMeetingResponse>;

export type EditParticipantMeetingError = DefaultErrors;

export const editParticipantMeeting: API.OperationMethod<
  EditParticipantMeetingRequest,
  EditParticipantMeetingResponse,
  EditParticipantMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EditParticipantMeetingRequest,
  output: EditParticipantMeetingResponse,
  errors: [],
}));

// =============================================================================
// ParticipantsActiveSession
// =============================================================================

export interface KickParticipantsActiveSessionRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  customParticipantIds: string[];
  /** Body param */
  participantIds: string[];
}

export const KickParticipantsActiveSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      customParticipantIds: Schema.Array(Schema.String),
      participantIds: Schema.Array(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        customParticipantIds: "custom_participant_ids",
        participantIds: "participant_ids",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/active-session/kick",
      }),
    ),
  ) as unknown as Schema.Codec<KickParticipantsActiveSessionRequest>;

export interface KickParticipantsActiveSessionResponse {
  data?: {
    action?: string | null;
    participants?:
      | {
          id: string;
          createdAt: string;
          updatedAt: string;
          email?: string | null;
          name?: string | null;
          picture?: string | null;
        }[]
      | null;
  } | null;
  success?: boolean | null;
}

export const KickParticipantsActiveSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data24, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<KickParticipantsActiveSessionResponse>;

export type KickParticipantsActiveSessionError = DefaultErrors;

export const kickParticipantsActiveSession: API.OperationMethod<
  KickParticipantsActiveSessionRequest,
  KickParticipantsActiveSessionResponse,
  KickParticipantsActiveSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: KickParticipantsActiveSessionRequest,
  output: KickParticipantsActiveSessionResponse,
  errors: [],
}));

// =============================================================================
// ParticipantTokenMeeting
// =============================================================================

export interface RefreshParticipantTokenMeetingRequest {
  appId: string;
  meetingId: string;
  participantId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const RefreshParticipantTokenMeetingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      participantId: Schema.String.pipe(T.HttpPath("participantId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/participants/{participantId}/token",
      }),
    ),
  ) as unknown as Schema.Codec<RefreshParticipantTokenMeetingRequest>;

export interface RefreshParticipantTokenMeetingResponse {
  /** Data returned by the operation */
  data: { token: string };
  /** Success status of the operation */
  success: boolean;
}

export const RefreshParticipantTokenMeetingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data25,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<RefreshParticipantTokenMeetingResponse>;

export type RefreshParticipantTokenMeetingError = DefaultErrors;

export const refreshParticipantTokenMeeting: API.OperationMethod<
  RefreshParticipantTokenMeetingRequest,
  RefreshParticipantTokenMeetingResponse,
  RefreshParticipantTokenMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RefreshParticipantTokenMeetingRequest,
  output: RefreshParticipantTokenMeetingResponse,
  errors: [],
}));

// =============================================================================
// PollActiveSession
// =============================================================================

export interface CreatePollActiveSessionRequest {
  appId: string;
  meetingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: Different options for the question */
  options: string[];
  /** Body param: Question of the poll */
  question: string;
  /** Body param: if voters on a poll are anonymous */
  anonymous?: boolean;
  /** Body param: if votes on an option are visible before a person votes */
  hideVotes?: boolean;
}

export const CreatePollActiveSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      meetingId: Schema.String.pipe(T.HttpPath("meetingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      options: Schema.Array(Schema.String),
      question: Schema.String,
      anonymous: Schema.optional(Schema.Boolean),
      hideVotes: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        options: "options",
        question: "question",
        anonymous: "anonymous",
        hideVotes: "hide_votes",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/meetings/{meetingId}/active-session/poll",
      }),
    ),
  ) as unknown as Schema.Codec<CreatePollActiveSessionRequest>;

export interface CreatePollActiveSessionResponse {
  data?: {
    action?: string | null;
    poll?: {
      id: string;
      options: {
        count: number;
        text: string;
        votes: { id: string; name: string }[];
      }[];
      question: string;
      anonymous?: boolean | null;
      createdBy?: string | null;
      hideVotes?: boolean | null;
      voted?: string[] | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const CreatePollActiveSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data26, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CreatePollActiveSessionResponse>;

export type CreatePollActiveSessionError = DefaultErrors;

export const createPollActiveSession: API.OperationMethod<
  CreatePollActiveSessionRequest,
  CreatePollActiveSessionResponse,
  CreatePollActiveSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePollActiveSessionRequest,
  output: CreatePollActiveSessionResponse,
  errors: [],
}));

// =============================================================================
// Preset
// =============================================================================

export interface GetPresetRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page */
  perPage?: number;
  /** Query param: Search presets by name. */
  search?: string;
}

export const GetPresetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    appId: Schema.String.pipe(T.HttpPath("appId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/realtime/kit/{appId}/presets",
    }),
  ),
) as unknown as Schema.Codec<GetPresetRequest>;

export interface GetPresetResponse {
  data: {
    id?: string | null;
    createdAt?: string | null;
    name?: string | null;
    updatedAt?: string | null;
  }[];
  paging: { endOffset: number; startOffset: number; totalCount: number };
  success: boolean;
}

export const GetPresetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      data: Schema.Array(Data27),
      paging: Paging2,
      success: Schema.Boolean,
    }),
) as unknown as Schema.Codec<GetPresetResponse>;

export type GetPresetError = DefaultErrors | Forbidden;

export const getPreset: API.OperationMethod<
  GetPresetRequest,
  GetPresetResponse,
  GetPresetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPresetRequest,
  output: GetPresetResponse,
  errors: [Forbidden],
}));

export interface CreatePresetRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  config: {
    maxScreenshareCount: number;
    maxVideoStreams: { desktop: number; mobile: number };
    media: {
      screenshare: {
        frameRate: number;
        quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
      };
      video: {
        frameRate: number;
        quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
        simulcast?: boolean;
      };
      audio?: { enableHighBitrate?: boolean; enableStereo?: boolean };
    };
    viewType:
      | "GROUP_CALL"
      | "WEBINAR"
      | "AUDIO_ROOM"
      | "LIVESTREAM"
      | (string & {});
    livestreamViewerQualities?: number[] | null;
  };
  /** Body param: Name of the preset */
  name: string;
  /** Body param */
  permissions: {
    acceptWaitingRequests: boolean;
    canAcceptProductionRequests: boolean;
    canChangeParticipantPermissions: boolean;
    canEditDisplayName: boolean;
    canLivestream: boolean;
    canRecord: boolean;
    canSpotlight: boolean;
    chat: {
      private: {
        canReceive: boolean;
        canSend: boolean;
        files: boolean;
        text: boolean;
      };
      public: { canSend: boolean; files: boolean; text: boolean };
    };
    connectedMeetings: {
      canAlterConnectedMeetings: boolean;
      canSwitchConnectedMeetings: boolean;
      canSwitchToParentMeeting: boolean;
    };
    disableParticipantAudio: boolean;
    disableParticipantScreensharing: boolean;
    disableParticipantVideo: boolean;
    hiddenParticipant: boolean;
    kickParticipant: boolean;
    media: {
      audio: {
        canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
      screenshare: {
        canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
      video: {
        canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
    };
    pinParticipant: boolean;
    plugins: {
      canClose: boolean;
      canEditConfig: boolean;
      canStart: boolean;
      config: unknown;
    };
    polls: { canCreate: boolean; canView: boolean; canVote: boolean };
    recorderType: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {});
    showParticipantList: boolean;
    waitingRoomType:
      | "SKIP"
      | "ON_PRIVILEGED_USER_ENTRY"
      | "SKIP_ON_ACCEPT"
      | (string & {});
    acceptStageRequests?: boolean;
    isRecorder?: boolean;
    stageAccess?: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
    stageEnabled?: boolean;
    transcriptionEnabled?: boolean;
  };
  /** Body param */
  ui: {
    designTokens: {
      borderRadius:
        | "sharp"
        | "rounded"
        | "extra-rounded"
        | "circular"
        | (string & {});
      borderWidth: "none" | "thin" | "fat" | (string & {});
      colors: {
        background: {
          "1000": string;
          "600": string;
          "700": string;
          "800": string;
          "900": string;
        };
        brand: {
          "300": string;
          "400": string;
          "500": string;
          "600": string;
          "700": string;
        };
        danger: string;
        success: string;
        text: string;
        textOnBrand: string;
        videoBg: string;
        warning: string;
      };
      spacingBase: number;
      theme: "darkest" | "dark" | "light" | (string & {});
      fontFamily?: string;
      googleFont?: string;
      logo?: string;
    };
    configDiff: unknown;
  };
}

export const CreatePresetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      config: Config,
      name: Schema.String,
      permissions: Permissions,
      ui: Ui,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/presets",
      }),
    ),
) as unknown as Schema.Codec<CreatePresetRequest>;

export interface CreatePresetResponse {
  /** Data returned by the operation */
  data: {
    id: string;
    config: {
      maxScreenshareCount: number;
      maxVideoStreams: { desktop: number; mobile: number };
      media: {
        screenshare: {
          frameRate: number;
          quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
        };
        video: {
          frameRate: number;
          quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
          simulcast?: boolean | null;
        };
        audio?: {
          enableHighBitrate?: boolean | null;
          enableStereo?: boolean | null;
        } | null;
      };
      viewType:
        | "GROUP_CALL"
        | "WEBINAR"
        | "AUDIO_ROOM"
        | "LIVESTREAM"
        | (string & {});
      livestreamViewerQualities?: number[] | null;
    };
    createdAt: string;
    name: string;
    permissions: {
      acceptWaitingRequests: boolean;
      canAcceptProductionRequests: boolean;
      canChangeParticipantPermissions: boolean;
      canEditDisplayName: boolean;
      canLivestream: boolean;
      canRecord: boolean;
      canSpotlight: boolean;
      chat: {
        private: {
          canReceive: boolean;
          canSend: boolean;
          files: boolean;
          text: boolean;
        };
        public: { canSend: boolean; files: boolean; text: boolean };
      };
      connectedMeetings: {
        canAlterConnectedMeetings: boolean;
        canSwitchConnectedMeetings: boolean;
        canSwitchToParentMeeting: boolean;
      };
      disableParticipantAudio: boolean;
      disableParticipantScreensharing: boolean;
      disableParticipantVideo: boolean;
      hiddenParticipant: boolean;
      kickParticipant: boolean;
      media: {
        audio: {
          canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
        };
        screenshare: {
          canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
        };
        video: {
          canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
        };
      };
      pinParticipant: boolean;
      plugins: {
        canClose: boolean;
        canEditConfig: boolean;
        canStart: boolean;
        config: unknown;
      };
      polls: { canCreate: boolean; canView: boolean; canVote: boolean };
      recorderType: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {});
      showParticipantList: boolean;
      waitingRoomType:
        | "SKIP"
        | "ON_PRIVILEGED_USER_ENTRY"
        | "SKIP_ON_ACCEPT"
        | (string & {});
      acceptStageRequests?: boolean | null;
      isRecorder?: boolean | null;
      stageAccess?:
        | "ALLOWED"
        | "NOT_ALLOWED"
        | "CAN_REQUEST"
        | (string & {})
        | null;
      stageEnabled?: boolean | null;
      transcriptionEnabled?: boolean | null;
    };
    ui: {
      designTokens: {
        borderRadius:
          | "sharp"
          | "rounded"
          | "extra-rounded"
          | "circular"
          | (string & {});
        borderWidth: "none" | "thin" | "fat" | (string & {});
        colors: {
          background: {
            "1000": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
          };
          brand: {
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
          };
          danger: string;
          success: string;
          text: string;
          textOnBrand: string;
          videoBg: string;
          warning: string;
        };
        spacingBase: number;
        theme: "darkest" | "dark" | "light" | (string & {});
        fontFamily?: string | null;
        googleFont?: string | null;
        logo?: string | null;
      };
      configDiff?: unknown | null;
    };
    updatedAt: string;
  };
  /** Success status of the operation */
  success: boolean;
}

export const CreatePresetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      data: Data28,
      success: Schema.Boolean,
    }),
) as unknown as Schema.Codec<CreatePresetResponse>;

export type CreatePresetError =
  | DefaultErrors
  | RealtimeKitPresetExists
  | Forbidden;

export const createPreset: API.OperationMethod<
  CreatePresetRequest,
  CreatePresetResponse,
  CreatePresetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePresetRequest,
  output: CreatePresetResponse,
  errors: [RealtimeKitPresetExists, Forbidden],
}));

export interface PatchPresetRequest {
  appId: string;
  presetId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  config?: {
    livestreamViewerQualities?: number[] | null;
    maxScreenshareCount?: number;
    maxVideoStreams?: { desktop?: number; mobile?: number };
    media?: {
      audio?: { enableHighBitrate?: boolean; enableStereo?: boolean };
      screenshare?: {
        frameRate?: number;
        quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
      };
      video?: {
        frameRate?: number;
        quality?: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
        simulcast?: boolean;
      };
    };
    viewType?:
      | "GROUP_CALL"
      | "WEBINAR"
      | "AUDIO_ROOM"
      | "LIVESTREAM"
      | (string & {});
  };
  /** Body param: Name of the preset */
  name?: string;
  /** Body param */
  permissions?: {
    acceptStageRequests?: boolean;
    acceptWaitingRequests?: boolean;
    canAcceptProductionRequests?: boolean;
    canChangeParticipantPermissions?: boolean;
    canEditDisplayName?: boolean;
    canLivestream?: boolean;
    canRecord?: boolean;
    canSpotlight?: boolean;
    chat?: {
      private?: {
        canReceive?: boolean;
        canSend?: boolean;
        files?: boolean;
        text?: boolean;
      };
      public?: { canSend?: boolean; files?: boolean; text?: boolean };
    };
    connectedMeetings?: {
      canAlterConnectedMeetings?: boolean;
      canSwitchConnectedMeetings?: boolean;
      canSwitchToParentMeeting?: boolean;
    };
    disableParticipantAudio?: boolean;
    disableParticipantScreensharing?: boolean;
    disableParticipantVideo?: boolean;
    hiddenParticipant?: boolean;
    isRecorder?: boolean;
    kickParticipant?: boolean;
    media?: {
      audio?: {
        canProduce?: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
      screenshare?: {
        canProduce?: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
      video?: {
        canProduce?: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
      };
    };
    pinParticipant?: boolean;
    plugins?: {
      canClose?: boolean;
      canEditConfig?: boolean;
      canStart?: boolean;
      config?: unknown;
    };
    polls?: { canCreate?: boolean; canView?: boolean; canVote?: boolean };
    recorderType?: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {});
    showParticipantList?: boolean;
    stageAccess?: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
    stageEnabled?: boolean;
    transcriptionEnabled?: boolean;
    waitingRoomType?:
      | "SKIP"
      | "ON_PRIVILEGED_USER_ENTRY"
      | "SKIP_ON_ACCEPT"
      | (string & {});
  };
  /** Body param */
  ui?: {
    designTokens?: {
      borderRadius?:
        | "sharp"
        | "rounded"
        | "extra-rounded"
        | "circular"
        | (string & {});
      borderWidth?: "none" | "thin" | "fat" | (string & {});
      colors?: {
        background?: {
          "1000"?: string;
          "600"?: string;
          "700"?: string;
          "800"?: string;
          "900"?: string;
        };
        brand?: {
          "300"?: string;
          "400"?: string;
          "500"?: string;
          "600"?: string;
          "700"?: string;
        };
        danger?: string;
        success?: string;
        text?: string;
        textOnBrand?: string;
        videoBg?: string;
        warning?: string;
      };
      fontFamily?: string;
      googleFont?: string;
      logo?: string;
      spacingBase?: number;
      theme?: "darkest" | "dark" | "light" | (string & {});
    };
    configDiff?: unknown;
  };
}

export const PatchPresetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      presetId: Schema.String.pipe(T.HttpPath("presetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      config: Schema.optional(Config2),
      name: Schema.optional(Schema.String),
      permissions: Schema.optional(Permissions2),
      ui: Schema.optional(Ui3),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/realtime/kit/{appId}/presets/{presetId}",
      }),
    ),
) as unknown as Schema.Codec<PatchPresetRequest>;

export interface PatchPresetResponse {
  /** Data returned by the operation */
  data: unknown;
  /** Success status of the operation */
  success: boolean;
}

export const PatchPresetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      data: Schema.Unknown,
      success: Schema.Boolean,
    }),
) as unknown as Schema.Codec<PatchPresetResponse>;

export type PatchPresetError =
  | DefaultErrors
  | RealtimeKitPresetNotFound
  | Forbidden;

export const patchPreset: API.OperationMethod<
  PatchPresetRequest,
  PatchPresetResponse,
  PatchPresetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPresetRequest,
  output: PatchPresetResponse,
  errors: [RealtimeKitPresetNotFound, Forbidden],
}));

export interface DeletePresetRequest {
  appId: string;
  presetId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const DeletePresetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      presetId: Schema.String.pipe(T.HttpPath("presetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/realtime/kit/{appId}/presets/{presetId}",
      }),
    ),
) as unknown as Schema.Codec<DeletePresetRequest>;

export interface DeletePresetResponse {
  /** Data returned by the operation */
  data: unknown;
  /** Success status of the operation */
  success: boolean;
}

export const DeletePresetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      data: Schema.Unknown,
      success: Schema.Boolean,
    }),
) as unknown as Schema.Codec<DeletePresetResponse>;

export type DeletePresetError =
  | DefaultErrors
  | RealtimeKitPresetNotFound
  | Forbidden;

export const deletePreset: API.OperationMethod<
  DeletePresetRequest,
  DeletePresetResponse,
  DeletePresetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePresetRequest,
  output: DeletePresetResponse,
  errors: [RealtimeKitPresetNotFound, Forbidden],
}));

// =============================================================================
// PresetByIdPreset
// =============================================================================

export interface GetPresetByIdPresetRequest {
  appId: string;
  presetId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetPresetByIdPresetRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      presetId: Schema.String.pipe(T.HttpPath("presetId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/presets/{presetId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetPresetByIdPresetRequest>;

export interface GetPresetByIdPresetResponse {
  /** Data returned by the operation */
  data: {
    id: string;
    config: {
      maxScreenshareCount: number;
      maxVideoStreams: { desktop: number; mobile: number };
      media: {
        screenshare: {
          frameRate: number;
          quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
        };
        video: {
          frameRate: number;
          quality: "hd" | "vga" | "qvga" | "fhd" | "uhd" | (string & {});
          simulcast?: boolean | null;
        };
        audio?: {
          enableHighBitrate?: boolean | null;
          enableStereo?: boolean | null;
        } | null;
      };
      viewType:
        | "GROUP_CALL"
        | "WEBINAR"
        | "AUDIO_ROOM"
        | "LIVESTREAM"
        | (string & {});
      livestreamViewerQualities?: number[] | null;
    };
    createdAt: string;
    name: string;
    permissions: {
      acceptWaitingRequests: boolean;
      canAcceptProductionRequests: boolean;
      canChangeParticipantPermissions: boolean;
      canEditDisplayName: boolean;
      canLivestream: boolean;
      canRecord: boolean;
      canSpotlight: boolean;
      chat: {
        private: {
          canReceive: boolean;
          canSend: boolean;
          files: boolean;
          text: boolean;
        };
        public: { canSend: boolean; files: boolean; text: boolean };
      };
      connectedMeetings: {
        canAlterConnectedMeetings: boolean;
        canSwitchConnectedMeetings: boolean;
        canSwitchToParentMeeting: boolean;
      };
      disableParticipantAudio: boolean;
      disableParticipantScreensharing: boolean;
      disableParticipantVideo: boolean;
      hiddenParticipant: boolean;
      kickParticipant: boolean;
      media: {
        audio: {
          canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
        };
        screenshare: {
          canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
        };
        video: {
          canProduce: "ALLOWED" | "NOT_ALLOWED" | "CAN_REQUEST" | (string & {});
        };
      };
      pinParticipant: boolean;
      plugins: {
        canClose: boolean;
        canEditConfig: boolean;
        canStart: boolean;
        config: unknown;
      };
      polls: { canCreate: boolean; canView: boolean; canVote: boolean };
      recorderType: "RECORDER" | "LIVESTREAMER" | "NONE" | (string & {});
      showParticipantList: boolean;
      waitingRoomType:
        | "SKIP"
        | "ON_PRIVILEGED_USER_ENTRY"
        | "SKIP_ON_ACCEPT"
        | (string & {});
      acceptStageRequests?: boolean | null;
      isRecorder?: boolean | null;
      stageAccess?:
        | "ALLOWED"
        | "NOT_ALLOWED"
        | "CAN_REQUEST"
        | (string & {})
        | null;
      stageEnabled?: boolean | null;
      transcriptionEnabled?: boolean | null;
    };
    ui: {
      designTokens: {
        borderRadius:
          | "sharp"
          | "rounded"
          | "extra-rounded"
          | "circular"
          | (string & {});
        borderWidth: "none" | "thin" | "fat" | (string & {});
        colors: {
          background: {
            "1000": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
          };
          brand: {
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
          };
          danger: string;
          success: string;
          text: string;
          textOnBrand: string;
          videoBg: string;
          warning: string;
        };
        spacingBase: number;
        theme: "darkest" | "dark" | "light" | (string & {});
        fontFamily?: string | null;
        googleFont?: string | null;
        logo?: string | null;
      };
      configDiff?: unknown | null;
    };
    updatedAt: string;
  };
  /** Success status of the operation */
  success: boolean;
}

export const GetPresetByIdPresetResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data28,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetPresetByIdPresetResponse>;

export type GetPresetByIdPresetError =
  | DefaultErrors
  | RealtimeKitPresetNotFound
  | Forbidden;

export const getPresetByIdPreset: API.OperationMethod<
  GetPresetByIdPresetRequest,
  GetPresetByIdPresetResponse,
  GetPresetByIdPresetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPresetByIdPresetRequest,
  output: GetPresetByIdPresetResponse,
  errors: [RealtimeKitPresetNotFound, Forbidden],
}));

// =============================================================================
// RecordingsRecording
// =============================================================================

export interface GetRecordingsRecordingRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: The end time range for which you want to retrieve the meetings. The time must be specified in ISO format. */
  endTime?: string;
  /** Query param: If passed, only shows expired/non-expired recordings on RealtimeKit's bucket */
  expired?: boolean;
  /** Query param: ID of a meeting. Optional. Will limit results to only this meeting if passed. */
  meetingId?: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page */
  perPage?: number;
  /** Query param: The search query string. You can search using the meeting ID or title. */
  search?: string;
  /** Query param */
  sortBy?: "invokedTime";
  /** Query param */
  sortOrder?: "ASC" | "DESC" | (string & {});
  /** Query param: The start time range for which you want to retrieve the meetings. The time must be specified in ISO format. */
  startTime?: string;
  /** Query param: Filter by one or more recording status */
  status?: (
    | "INVOKED"
    | "RECORDING"
    | "UPLOADING"
    | "UPLOADED"
    | (string & {})
  )[];
}

export const GetRecordingsRecordingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("end_time")),
      expired: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("expired")),
      meetingId: Schema.optional(Schema.String).pipe(T.HttpQuery("meeting_id")),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      sortBy: Schema.optional(Schema.Literal("invokedTime")).pipe(
        T.HttpQuery("sort_by"),
      ),
      sortOrder: Schema.optional(
        Schema.Union([Schema.Literals(["ASC", "DESC"]), Schema.String]),
      ).pipe(T.HttpQuery("sort_order")),
      startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("start_time")),
      status: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["INVOKED", "RECORDING", "UPLOADING", "UPLOADED"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/recordings",
      }),
    ),
  ) as unknown as Schema.Codec<GetRecordingsRecordingRequest>;

export interface GetRecordingsRecordingResponse {
  data: {
    id: string;
    audioDownloadUrl: string | null;
    downloadUrl: string | null;
    downloadUrlExpiry: string | null;
    fileSize: number | null;
    invokedTime: string;
    outputFileName: string;
    sessionId: string | null;
    startedTime: string | null;
    status:
      | "INVOKED"
      | "RECORDING"
      | "UPLOADING"
      | "UPLOADED"
      | "ERRORED"
      | "PAUSED"
      | (string & {});
    stoppedTime: string | null;
    meeting?: {
      id: string;
      createdAt: string;
      updatedAt: string;
      liveStreamOnStart?: boolean | null;
      persistChat?: boolean | null;
      recordOnStart?: boolean | null;
      recordingConfig?: {
        audioConfig?: {
          channel?: "mono" | "stereo" | (string & {}) | null;
          codec?: "MP3" | "AAC" | (string & {}) | null;
          exportFile?: boolean | null;
        } | null;
        fileNamePrefix?: string | null;
        liveStreamingConfig?: { rtmpUrl?: string | null } | null;
        maxSeconds?: number | null;
        realtimekitBucketConfig?: { enabled: boolean } | null;
        storageConfig?: {
          type:
            | "aws"
            | "azure"
            | "digitalocean"
            | "gcs"
            | "sftp"
            | (string & {});
          authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
          bucket?: string | null;
          host?: string | null;
          password?: string | null;
          path?: string | null;
          port?: number | null;
          privateKey?: string | null;
          region?: string | null;
          secret?: string | null;
          username?: string | null;
        } | null;
        videoConfig?: {
          codec?: "H264" | "VP8" | (string & {}) | null;
          exportFile?: boolean | null;
          height?: number | null;
          watermark?: {
            position?:
              | "left top"
              | "right top"
              | "left bottom"
              | "right bottom"
              | (string & {})
              | null;
            size?: { height?: number | null; width?: number | null } | null;
            url?: string | null;
          } | null;
          width?: number | null;
        } | null;
      } | null;
      sessionKeepAliveTimeInSecs?: number | null;
      status?: "ACTIVE" | "INACTIVE" | (string & {}) | null;
      summarizeOnEnd?: boolean | null;
      title?: string | null;
      transcribeOnEnd?: boolean | null;
    } | null;
    recordingDuration?: number | null;
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
      bucket?: string | null;
      host?: string | null;
      password?: string | null;
      path?: string | null;
      port?: number | null;
      privateKey?: string | null;
      region?: string | null;
      secret?: string | null;
      username?: string | null;
    } | null;
  }[];
  paging: { endOffset: number; startOffset: number; totalCount: number };
  success: boolean;
}

export const GetRecordingsRecordingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Array(Data29),
      paging: Paging2,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetRecordingsRecordingResponse>;

export type GetRecordingsRecordingError = DefaultErrors;

export const getRecordingsRecording: API.OperationMethod<
  GetRecordingsRecordingRequest,
  GetRecordingsRecordingResponse,
  GetRecordingsRecordingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRecordingsRecordingRequest,
  output: GetRecordingsRecordingResponse,
  errors: [],
}));

export interface StartRecordingsRecordingRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: By default, a meeting allows only one recording to run at a time. Enabling the `allow_multiple_recordings` parameter to true allows you to initiate multiple recordings concurrently in the  */
  allowMultipleRecordings?: boolean;
  /** Body param: Object containing configuration regarding the audio that is being recorded. */
  audioConfig?: {
    channel?: "mono" | "stereo" | (string & {});
    codec?: "MP3" | "AAC" | (string & {});
    exportFile?: boolean;
  };
  /** Body param: Update the recording file name. */
  fileNamePrefix?: string;
  /** Body param: Allows you to add timed metadata to your recordings, which are digital markers inserted into a video file to provide contextual information at specific points in the content range. The ID3 */
  interactiveConfig?: { type?: "ID3" };
  /** Body param: Specifies the maximum duration for recording in seconds, ranging from a minimum of 60 seconds to a maximum of 24 hours. */
  maxSeconds?: number;
  /** Body param: ID of the meeting to record. */
  meetingId?: string;
  /** Body param */
  realtimekitBucketConfig?: { enabled: boolean };
  /** Body param */
  rtmpOutConfig?: { rtmpUrl?: string };
  /** Body param */
  storageConfig?: {
    type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
    accessKey?: string;
    authMethod?: "KEY" | "PASSWORD" | (string & {});
    bucket?: string;
    host?: string;
    password?: string;
    path?: string;
    port?: number;
    privateKey?: string;
    region?: string;
    secret?: string;
    username?: string;
  } | null;
  /** Body param: Pass a custom url to record arbitary screen */
  url?: string;
  /** Body param */
  videoConfig?: {
    codec?: "H264" | "VP8" | (string & {});
    exportFile?: boolean;
    height?: number;
    watermark?: {
      position?:
        | "left top"
        | "right top"
        | "left bottom"
        | "right bottom"
        | (string & {});
      size?: { height?: number; width?: number };
      url?: string;
    };
    width?: number;
  };
}

export const StartRecordingsRecordingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowMultipleRecordings: Schema.optional(Schema.Boolean),
      audioConfig: Schema.optional(AudioConfig),
      fileNamePrefix: Schema.optional(Schema.String),
      interactiveConfig: Schema.optional(InteractiveConfig),
      maxSeconds: Schema.optional(Schema.Number),
      meetingId: Schema.optional(Schema.String),
      realtimekitBucketConfig: Schema.optional(RealtimekitBucketConfig),
      rtmpOutConfig: Schema.optional(LiveStreamingConfig),
      storageConfig: Schema.optional(
        Schema.Union([StorageConfig2, Schema.Null]),
      ),
      url: Schema.optional(Schema.String),
      videoConfig: Schema.optional(VideoConfig2),
    }).pipe(
      Schema.encodeKeys({
        allowMultipleRecordings: "allow_multiple_recordings",
        audioConfig: "audio_config",
        fileNamePrefix: "file_name_prefix",
        interactiveConfig: "interactive_config",
        maxSeconds: "max_seconds",
        meetingId: "meeting_id",
        realtimekitBucketConfig: "realtimekit_bucket_config",
        rtmpOutConfig: "rtmp_out_config",
        storageConfig: "storage_config",
        url: "url",
        videoConfig: "video_config",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/recordings",
      }),
    ),
  ) as unknown as Schema.Codec<StartRecordingsRecordingRequest>;

export interface StartRecordingsRecordingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    audioDownloadUrl: string | null;
    downloadUrl: string | null;
    downloadUrlExpiry: string | null;
    fileSize: number | null;
    invokedTime: string;
    outputFileName: string;
    sessionId: string | null;
    startedTime: string | null;
    status:
      | "INVOKED"
      | "RECORDING"
      | "UPLOADING"
      | "UPLOADED"
      | "ERRORED"
      | "PAUSED"
      | (string & {});
    stoppedTime: string | null;
    recordingDuration?: number | null;
    startReason?: {
      caller?: {
        name?: string | null;
        type?: "ORGANIZATION" | "USER" | (string & {}) | null;
        userId?: string | null;
      } | null;
      reason?: "API_CALL" | "RECORD_ON_START" | (string & {}) | null;
    } | null;
    stopReason?: {
      caller?: {
        name?: string | null;
        type?: "ORGANIZATION" | "USER" | (string & {}) | null;
        userId?: string | null;
      } | null;
      reason?:
        | "API_CALL"
        | "INTERNAL_ERROR"
        | "ALL_PEERS_LEFT"
        | (string & {})
        | null;
    } | null;
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
      bucket?: string | null;
      host?: string | null;
      password?: string | null;
      path?: string | null;
      port?: number | null;
      privateKey?: string | null;
      region?: string | null;
      secret?: string | null;
      username?: string | null;
    } | null;
  } | null;
}

export const StartRecordingsRecordingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data20, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<StartRecordingsRecordingResponse>;

export type StartRecordingsRecordingError = DefaultErrors;

export const startRecordingsRecording: API.OperationMethod<
  StartRecordingsRecordingRequest,
  StartRecordingsRecordingResponse,
  StartRecordingsRecordingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartRecordingsRecordingRequest,
  output: StartRecordingsRecordingResponse,
  errors: [],
}));

// =============================================================================
// ResumeStopRecordingRecording
// =============================================================================

export interface PauseResumeStopRecordingRecordingRequest {
  appId: string;
  recordingId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  action: "stop" | "pause" | "resume" | (string & {});
}

export const PauseResumeStopRecordingRecordingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      recordingId: Schema.String.pipe(T.HttpPath("recordingId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      action: Schema.Union([
        Schema.Literals(["stop", "pause", "resume"]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/realtime/kit/{appId}/recordings/{recordingId}",
      }),
    ),
  ) as unknown as Schema.Codec<PauseResumeStopRecordingRecordingRequest>;

export interface PauseResumeStopRecordingRecordingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    id: string;
    audioDownloadUrl: string | null;
    downloadUrl: string | null;
    downloadUrlExpiry: string | null;
    fileSize: number | null;
    invokedTime: string;
    outputFileName: string;
    sessionId: string | null;
    startedTime: string | null;
    status:
      | "INVOKED"
      | "RECORDING"
      | "UPLOADING"
      | "UPLOADED"
      | "ERRORED"
      | "PAUSED"
      | (string & {});
    stoppedTime: string | null;
    recordingDuration?: number | null;
    startReason?: {
      caller?: {
        name?: string | null;
        type?: "ORGANIZATION" | "USER" | (string & {}) | null;
        userId?: string | null;
      } | null;
      reason?: "API_CALL" | "RECORD_ON_START" | (string & {}) | null;
    } | null;
    stopReason?: {
      caller?: {
        name?: string | null;
        type?: "ORGANIZATION" | "USER" | (string & {}) | null;
        userId?: string | null;
      } | null;
      reason?:
        | "API_CALL"
        | "INTERNAL_ERROR"
        | "ALL_PEERS_LEFT"
        | (string & {})
        | null;
    } | null;
    storageConfig?: {
      type: "aws" | "azure" | "digitalocean" | "gcs" | "sftp" | (string & {});
      authMethod?: "KEY" | "PASSWORD" | (string & {}) | null;
      bucket?: string | null;
      host?: string | null;
      password?: string | null;
      path?: string | null;
      port?: number | null;
      privateKey?: string | null;
      region?: string | null;
      secret?: string | null;
      username?: string | null;
    } | null;
  } | null;
}

export const PauseResumeStopRecordingRecordingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data20, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<PauseResumeStopRecordingRecordingResponse>;

export type PauseResumeStopRecordingRecordingError = DefaultErrors;

export const pauseResumeStopRecordingRecording: API.OperationMethod<
  PauseResumeStopRecordingRecordingRequest,
  PauseResumeStopRecordingRecordingResponse,
  PauseResumeStopRecordingRecordingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PauseResumeStopRecordingRecordingRequest,
  output: PauseResumeStopRecordingRecordingResponse,
  errors: [],
}));

// =============================================================================
// SessionChatSession
// =============================================================================

export interface GetSessionChatSessionRequest {
  appId: string;
  sessionId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetSessionChatSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}/chat",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionChatSessionRequest>;

export interface GetSessionChatSessionResponse {
  data?: { chatDownloadUrl: string; chatDownloadUrlExpiry: string } | null;
  success?: boolean | null;
}

export const GetSessionChatSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data30, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionChatSessionResponse>;

export type GetSessionChatSessionError = DefaultErrors;

export const getSessionChatSession: API.OperationMethod<
  GetSessionChatSessionRequest,
  GetSessionChatSessionResponse,
  GetSessionChatSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionChatSessionRequest,
  output: GetSessionChatSessionResponse,
  errors: [],
}));

// =============================================================================
// SessionDetailsSession
// =============================================================================

export interface GetSessionDetailsSessionRequest {
  appId: string;
  sessionId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: List all breakout rooms */
  includeBreakoutRooms?: boolean;
}

export const GetSessionDetailsSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      includeBreakoutRooms: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_breakout_rooms"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionDetailsSessionRequest>;

export interface GetSessionDetailsSessionResponse {
  data?: {
    id: string;
    associatedId: string;
    createdAt: string;
    liveParticipants: number;
    maxConcurrentParticipants: number;
    meetingDisplayName: string;
    minutesConsumed: number;
    organizationId: string;
    startedAt: string;
    status: "LIVE" | "ENDED" | (string & {});
    type: "meeting" | "livestream" | "participant" | (string & {});
    updatedAt: string;
    breakoutRooms?: unknown[] | null;
    endedAt?: string | null;
    meta?: unknown | null;
  } | null;
  success?: boolean | null;
}

export const GetSessionDetailsSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data3, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionDetailsSessionResponse>;

export type GetSessionDetailsSessionError = DefaultErrors;

export const getSessionDetailsSession: API.OperationMethod<
  GetSessionDetailsSessionRequest,
  GetSessionDetailsSessionResponse,
  GetSessionDetailsSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionDetailsSessionRequest,
  output: GetSessionDetailsSessionResponse,
  errors: [],
}));

// =============================================================================
// SessionParticipantDetailsSession
// =============================================================================

export interface GetSessionParticipantDetailsSessionRequest {
  appId: string;
  sessionId: string;
  participantId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: Comma separated list of filters to apply. Note that there must be no spaces between the filters. */
  filters?:
    | "device_info"
    | "ip_information"
    | "precall_network_information"
    | "events"
    | "quality_stats"
    | (string & {});
  /** Query param: if true, response includes all the peer events of participant. */
  includePeerEvents?: boolean;
}

export const GetSessionParticipantDetailsSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      participantId: Schema.String.pipe(T.HttpPath("participantId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      filters: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "device_info",
            "ip_information",
            "precall_network_information",
            "events",
            "quality_stats",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("filters")),
      includePeerEvents: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_peer_events"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}/participants/{participantId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionParticipantDetailsSessionRequest>;

export interface GetSessionParticipantDetailsSessionResponse {
  data?: {
    participant?: {
      id?: string | null;
      createdAt?: string | null;
      customParticipantId?: string | null;
      displayName?: string | null;
      duration?: number | null;
      joinedAt?: string | null;
      leftAt?: string | null;
      presetName?: string | null;
      updatedAt?: string | null;
      userId?: string | null;
    } | null;
  } | null;
  success?: boolean | null;
}

export const GetSessionParticipantDetailsSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data31, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionParticipantDetailsSessionResponse>;

export type GetSessionParticipantDetailsSessionError = DefaultErrors;

export const getSessionParticipantDetailsSession: API.OperationMethod<
  GetSessionParticipantDetailsSessionRequest,
  GetSessionParticipantDetailsSessionResponse,
  GetSessionParticipantDetailsSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionParticipantDetailsSessionRequest,
  output: GetSessionParticipantDetailsSessionResponse,
  errors: [],
}));

// =============================================================================
// SessionParticipantsSession
// =============================================================================

export interface GetSessionParticipantsSessionRequest {
  appId: string;
  sessionId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: if true, response includes all the peer events of participants. */
  includePeerEvents?: boolean;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param: Number of results per page */
  perPage?: number;
  /** Query param: The search query string. You can search using participant ID, custom participant ID, or display name. */
  search?: string;
  /** Query param */
  sortBy?: "joinedAt" | "duration" | (string & {});
  /** Query param */
  sortOrder?: "ASC" | "DESC" | (string & {});
  /** Query param: In breakout room sessions, the view parameter can be set to `raw` for session specific duration for participants or `consolidated` to accumulate breakout room durations. */
  view?: "raw" | "consolidated" | (string & {});
}

export const GetSessionParticipantsSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      includePeerEvents: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_peer_events"),
      ),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      sortBy: Schema.optional(
        Schema.Union([
          Schema.Literals(["joinedAt", "duration"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("sort_by")),
      sortOrder: Schema.optional(
        Schema.Union([Schema.Literals(["ASC", "DESC"]), Schema.String]),
      ).pipe(T.HttpQuery("sort_order")),
      view: Schema.optional(
        Schema.Union([Schema.Literals(["raw", "consolidated"]), Schema.String]),
      ).pipe(T.HttpQuery("view")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}/participants",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionParticipantsSessionRequest>;

export interface GetSessionParticipantsSessionResponse {
  data?: {
    participants?:
      | {
          id?: string | null;
          createdAt?: string | null;
          customParticipantId?: string | null;
          displayName?: string | null;
          duration?: number | null;
          joinedAt?: string | null;
          leftAt?: string | null;
          presetName?: string | null;
          updatedAt?: string | null;
          userId?: string | null;
        }[]
      | null;
  } | null;
  success?: boolean | null;
}

export const GetSessionParticipantsSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data32, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionParticipantsSessionResponse>;

export type GetSessionParticipantsSessionError = DefaultErrors;

export const getSessionParticipantsSession: API.OperationMethod<
  GetSessionParticipantsSessionRequest,
  GetSessionParticipantsSessionResponse,
  GetSessionParticipantsSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionParticipantsSessionRequest,
  output: GetSessionParticipantsSessionResponse,
  errors: [],
}));

// =============================================================================
// SessionsSession
// =============================================================================

export interface GetSessionsSessionRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: ID of the meeting that sessions should be associated with */
  associatedId?: string;
  /** Query param: The end time range for which you want to retrieve the meetings. The time must be specified in ISO format. */
  endTime?: string;
  /** Query param: The page number from which you want your page search results to be displayed. */
  pageNo?: number;
  /** Query param */
  participants?: string;
  /** Query param: Number of results per page */
  perPage?: number;
  /** Query param: Search string that matches sessions based on meeting title, meeting ID, and session ID */
  search?: string;
  /** Query param */
  sortBy?: "minutesConsumed" | "createdAt" | (string & {});
  /** Query param */
  sortOrder?: "ASC" | "DESC" | (string & {});
  /** Query param: The start time range for which you want to retrieve the meetings. The time must be specified in ISO format. */
  startTime?: string;
  /** Query param */
  status?: "LIVE" | "ENDED" | (string & {});
}

export const GetSessionsSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      associatedId: Schema.optional(Schema.String).pipe(
        T.HttpQuery("associated_id"),
      ),
      endTime: Schema.optional(Schema.String).pipe(T.HttpQuery("end_time")),
      pageNo: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_no")),
      participants: Schema.optional(Schema.String).pipe(
        T.HttpQuery("participants"),
      ),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      sortBy: Schema.optional(
        Schema.Union([
          Schema.Literals(["minutesConsumed", "createdAt"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("sort_by")),
      sortOrder: Schema.optional(
        Schema.Union([Schema.Literals(["ASC", "DESC"]), Schema.String]),
      ).pipe(T.HttpQuery("sort_order")),
      startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("start_time")),
      status: Schema.optional(
        Schema.Union([Schema.Literals(["LIVE", "ENDED"]), Schema.String]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionsSessionRequest>;

export interface GetSessionsSessionResponse {
  data?: {
    sessions?:
      | {
          id: string;
          associatedId: string;
          createdAt: string;
          liveParticipants: number;
          maxConcurrentParticipants: number;
          meetingDisplayName: string;
          minutesConsumed: number;
          organizationId: string;
          startedAt: string;
          status: "LIVE" | "ENDED" | (string & {});
          type: "meeting" | "livestream" | "participant" | (string & {});
          updatedAt: string;
          breakoutRooms?: unknown[] | null;
          endedAt?: string | null;
          meta?: unknown | null;
        }[]
      | null;
  } | null;
  paging?: {
    endOffset?: number | null;
    startOffset?: number | null;
    totalCount?: number | null;
  } | null;
  success?: boolean | null;
}

export const GetSessionsSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data33, Schema.Null])),
      paging: Schema.optional(Schema.Union([Paging, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionsSessionResponse>;

export type GetSessionsSessionError = DefaultErrors;

export const getSessionsSession: API.OperationMethod<
  GetSessionsSessionRequest,
  GetSessionsSessionResponse,
  GetSessionsSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionsSessionRequest,
  output: GetSessionsSessionResponse,
  errors: [],
}));

// =============================================================================
// SessionSummarySession
// =============================================================================

export interface GetSessionSummarySessionRequest {
  appId: string;
  sessionId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetSessionSummarySessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}/summary",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionSummarySessionRequest>;

export interface GetSessionSummarySessionResponse {
  data?: {
    sessionId: string;
    summaryDownloadUrl: string;
    summaryDownloadUrlExpiry: string;
  } | null;
  success?: boolean | null;
}

export const GetSessionSummarySessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data34, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionSummarySessionResponse>;

export type GetSessionSummarySessionError = DefaultErrors;

export const getSessionSummarySession: API.OperationMethod<
  GetSessionSummarySessionRequest,
  GetSessionSummarySessionResponse,
  GetSessionSummarySessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionSummarySessionRequest,
  output: GetSessionSummarySessionResponse,
  errors: [],
}));

// =============================================================================
// SessionTranscriptsSession
// =============================================================================

export interface GetSessionTranscriptsSessionRequest {
  appId: string;
  sessionId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Query param: Transcript file format to fetch. */
  format?: "SRT" | "VTT" | "JSON" | "CSV" | (string & {});
}

export const GetSessionTranscriptsSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      format: Schema.optional(
        Schema.Union([
          Schema.Literals(["SRT", "VTT", "JSON", "CSV"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("format")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}/transcript",
      }),
    ),
  ) as unknown as Schema.Codec<GetSessionTranscriptsSessionRequest>;

export interface GetSessionTranscriptsSessionResponse {
  data?: {
    sessionId: string;
    transcriptDownloadUrl: string;
    transcriptDownloadUrlExpiry: string;
  } | null;
  success?: boolean | null;
}

export const GetSessionTranscriptsSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data35, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetSessionTranscriptsSessionResponse>;

export type GetSessionTranscriptsSessionError = DefaultErrors;

export const getSessionTranscriptsSession: API.OperationMethod<
  GetSessionTranscriptsSessionRequest,
  GetSessionTranscriptsSessionResponse,
  GetSessionTranscriptsSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSessionTranscriptsSessionRequest,
  output: GetSessionTranscriptsSessionResponse,
  errors: [],
}));

// =============================================================================
// SummaryOfTranscriptsSession
// =============================================================================

export interface GenerateSummaryOfTranscriptsSessionRequest {
  appId: string;
  sessionId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GenerateSummaryOfTranscriptsSessionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      sessionId: Schema.String.pipe(T.HttpPath("sessionId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/sessions/{sessionId}/summary",
      }),
    ),
  ) as unknown as Schema.Codec<GenerateSummaryOfTranscriptsSessionRequest>;

export interface GenerateSummaryOfTranscriptsSessionResponse {
  data?: { sessionId?: string | null; status?: string | null } | null;
  success?: boolean | null;
}

export const GenerateSummaryOfTranscriptsSessionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.optional(Schema.Union([Data36, Schema.Null])),
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GenerateSummaryOfTranscriptsSessionResponse>;

export type GenerateSummaryOfTranscriptsSessionError = DefaultErrors;

export const generateSummaryOfTranscriptsSession: API.OperationMethod<
  GenerateSummaryOfTranscriptsSessionRequest,
  GenerateSummaryOfTranscriptsSessionResponse,
  GenerateSummaryOfTranscriptsSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateSummaryOfTranscriptsSessionRequest,
  output: GenerateSummaryOfTranscriptsSessionResponse,
  errors: [],
}));

// =============================================================================
// TrackRecordingRecording
// =============================================================================

export interface StartTrackRecordingRecordingRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: ID of the meeting to record. */
  meetingId: string;
  /** Body param: Optional audio layer configuration. If omitted, RealtimeKit records all participant audio using the default file name prefix. */
  layers?: Record<string, unknown>;
  /** Body param: Optional list of participant user IDs to record. Selective track recording (`user_ids`) is in early beta contact support to use this feature. */
  userIds?: string[];
}

export const StartTrackRecordingRecordingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      meetingId: Schema.String,
      layers: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      userIds: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      Schema.encodeKeys({
        meetingId: "meeting_id",
        layers: "layers",
        userIds: "user_ids",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/recordings/track",
      }),
    ),
  ) as unknown as Schema.Codec<StartTrackRecordingRecordingRequest>;

export interface StartTrackRecordingRecordingResponse {
  /** Success status of the operation */
  success: boolean;
  /** Data returned by the operation */
  data?: {
    recording: {
      id: string;
      audioDownloadUrl: string | null;
      downloadUrl: string | null;
      downloadUrlExpiry: string | null;
      fileSize: number | null;
      invokedTime: string;
      outputFileName: string;
      sessionId: string | null;
      startedTime: string | null;
      status:
        | "INVOKED"
        | "RECORDING"
        | "UPLOADING"
        | "UPLOADED"
        | "ERRORED"
        | "PAUSED"
        | (string & {});
      stoppedTime: string | null;
      recordingDuration?: number | null;
    };
  } | null;
}

export const StartTrackRecordingRecordingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.Boolean,
      data: Schema.optional(Schema.Union([Data37, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<StartTrackRecordingRecordingResponse>;

export type StartTrackRecordingRecordingError = DefaultErrors;

export const startTrackRecordingRecording: API.OperationMethod<
  StartTrackRecordingRecordingRequest,
  StartTrackRecordingRecordingResponse,
  StartTrackRecordingRecordingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartTrackRecordingRecordingRequest,
  output: StartTrackRecordingRecordingResponse,
  errors: [],
}));

// =============================================================================
// WebhookByIdWebhook
// =============================================================================

export interface GetWebhookByIdWebhookRequest {
  appId: string;
  webhookId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetWebhookByIdWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetWebhookByIdWebhookRequest>;

export interface GetWebhookByIdWebhookResponse {
  data: {
    id: string;
    createdAt: string;
    enabled: boolean;
    events: (
      | "meeting.started"
      | "meeting.ended"
      | "meeting.participantJoined"
      | "meeting.participantLeft"
      | "meeting.chatSynced"
      | "recording.statusUpdate"
      | "livestreaming.statusUpdate"
      | "meeting.transcript"
      | "meeting.summary"
      | (string & {})
    )[];
    name: string;
    updatedAt: string;
    url: string;
  };
  success: boolean;
}

export const GetWebhookByIdWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data38,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetWebhookByIdWebhookResponse>;

export type GetWebhookByIdWebhookError =
  | DefaultErrors
  | RealtimeKitWebhookNotFound
  | Forbidden;

export const getWebhookByIdWebhook: API.OperationMethod<
  GetWebhookByIdWebhookRequest,
  GetWebhookByIdWebhookResponse,
  GetWebhookByIdWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebhookByIdWebhookRequest,
  output: GetWebhookByIdWebhookResponse,
  errors: [RealtimeKitWebhookNotFound, Forbidden],
}));

// =============================================================================
// WebhooksWebhook
// =============================================================================

export interface GetWebhooksWebhookRequest {
  appId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const GetWebhooksWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/realtime/kit/{appId}/webhooks",
      }),
    ),
  ) as unknown as Schema.Codec<GetWebhooksWebhookRequest>;

export interface GetWebhooksWebhookResponse {
  data: {
    id: string;
    createdAt: string;
    enabled: boolean;
    events: (
      | "meeting.started"
      | "meeting.ended"
      | "meeting.participantJoined"
      | "meeting.participantLeft"
      | "meeting.chatSynced"
      | "recording.statusUpdate"
      | "livestreaming.statusUpdate"
      | "meeting.transcript"
      | "meeting.summary"
      | (string & {})
    )[];
    name: string;
    updatedAt: string;
    url: string;
  }[];
  success: boolean;
}

export const GetWebhooksWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Array(Data38),
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<GetWebhooksWebhookResponse>;

export type GetWebhooksWebhookError =
  | DefaultErrors
  | RealtimeKitWebhookNotFound
  | Forbidden;

export const getWebhooksWebhook: API.OperationMethod<
  GetWebhooksWebhookRequest,
  GetWebhooksWebhookResponse,
  GetWebhooksWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebhooksWebhookRequest,
  output: GetWebhooksWebhookResponse,
  errors: [RealtimeKitWebhookNotFound, Forbidden],
}));

// =============================================================================
// WebhookWebhook
// =============================================================================

export interface CreateWebhookWebhookRequest {
  appId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: Events that this webhook will get triggered by */
  events: (
    | "meeting.started"
    | "meeting.ended"
    | "meeting.participantJoined"
    | "meeting.participantLeft"
    | "meeting.chatSynced"
    | "recording.statusUpdate"
    | "livestreaming.statusUpdate"
    | "meeting.transcript"
    | "meeting.summary"
    | (string & {})
  )[];
  /** Body param: Name of the webhook */
  name: string;
  /** Body param: URL this webhook will send events to */
  url: string;
  /** Body param: Set whether or not the webhook should be active when created */
  enabled?: boolean;
}

export const CreateWebhookWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      events: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "meeting.started",
            "meeting.ended",
            "meeting.participantJoined",
            "meeting.participantLeft",
            "meeting.chatSynced",
            "recording.statusUpdate",
            "livestreaming.statusUpdate",
            "meeting.transcript",
            "meeting.summary",
          ]),
          Schema.String,
        ]),
      ),
      name: Schema.String,
      url: Schema.String,
      enabled: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/realtime/kit/{appId}/webhooks",
      }),
    ),
  ) as unknown as Schema.Codec<CreateWebhookWebhookRequest>;

export interface CreateWebhookWebhookResponse {
  data: {
    id: string;
    createdAt: string;
    enabled: boolean;
    events: (
      | "meeting.started"
      | "meeting.ended"
      | "meeting.participantJoined"
      | "meeting.participantLeft"
      | "meeting.chatSynced"
      | "recording.statusUpdate"
      | "livestreaming.statusUpdate"
      | "meeting.transcript"
      | "meeting.summary"
      | (string & {})
    )[];
    name: string;
    updatedAt: string;
    url: string;
  };
  success: boolean;
}

export const CreateWebhookWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data38,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<CreateWebhookWebhookResponse>;

export type CreateWebhookWebhookError =
  | DefaultErrors
  | RealtimeKitWebhookExists
  | Forbidden;

export const createWebhookWebhook: API.OperationMethod<
  CreateWebhookWebhookRequest,
  CreateWebhookWebhookResponse,
  CreateWebhookWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateWebhookWebhookRequest,
  output: CreateWebhookWebhookResponse,
  errors: [RealtimeKitWebhookExists, Forbidden],
}));

export interface DeleteWebhookWebhookRequest {
  appId: string;
  webhookId: string;
  /** The account identifier tag. */
  accountId: string;
}

export const DeleteWebhookWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/realtime/kit/{appId}/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteWebhookWebhookRequest>;

export interface DeleteWebhookWebhookResponse {
  data: unknown;
  success: boolean;
}

export const DeleteWebhookWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Unknown,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<DeleteWebhookWebhookResponse>;

export type DeleteWebhookWebhookError =
  | DefaultErrors
  | RealtimeKitWebhookNotFound
  | Forbidden;

export const deleteWebhookWebhook: API.OperationMethod<
  DeleteWebhookWebhookRequest,
  DeleteWebhookWebhookResponse,
  DeleteWebhookWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteWebhookWebhookRequest,
  output: DeleteWebhookWebhookResponse,
  errors: [RealtimeKitWebhookNotFound, Forbidden],
}));

export interface EditWebhookWebhookRequest {
  appId: string;
  webhookId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param */
  enabled?: boolean;
  /** Body param: Events that the webhook will get triggered by */
  events?: (
    | "meeting.started"
    | "meeting.ended"
    | "meeting.participantJoined"
    | "meeting.participantLeft"
    | "recording.statusUpdate"
    | "livestreaming.statusUpdate"
    | "meeting.chatSynced"
    | "meeting.transcript"
    | "meeting.summary"
    | (string & {})
  )[];
  /** Body param: Name of the webhook */
  name?: string;
  /** Body param: URL the webhook will send events to */
  url?: string;
}

export const EditWebhookWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      enabled: Schema.optional(Schema.Boolean),
      events: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "meeting.started",
              "meeting.ended",
              "meeting.participantJoined",
              "meeting.participantLeft",
              "recording.statusUpdate",
              "livestreaming.statusUpdate",
              "meeting.chatSynced",
              "meeting.transcript",
              "meeting.summary",
            ]),
            Schema.String,
          ]),
        ),
      ),
      name: Schema.optional(Schema.String),
      url: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/realtime/kit/{appId}/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<EditWebhookWebhookRequest>;

export interface EditWebhookWebhookResponse {
  data: {
    id: string;
    createdAt: string;
    enabled: boolean;
    events: (
      | "meeting.started"
      | "meeting.ended"
      | "meeting.participantJoined"
      | "meeting.participantLeft"
      | "meeting.chatSynced"
      | "recording.statusUpdate"
      | "livestreaming.statusUpdate"
      | "meeting.transcript"
      | "meeting.summary"
      | (string & {})
    )[];
    name: string;
    updatedAt: string;
    url: string;
  };
  success: boolean;
}

export const EditWebhookWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Data38,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<EditWebhookWebhookResponse>;

export type EditWebhookWebhookError = DefaultErrors;

export const editWebhookWebhook: API.OperationMethod<
  EditWebhookWebhookRequest,
  EditWebhookWebhookResponse,
  EditWebhookWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EditWebhookWebhookRequest,
  output: EditWebhookWebhookResponse,
  errors: [],
}));

export interface ReplaceWebhookWebhookRequest {
  appId: string;
  webhookId: string;
  /** Path param: The account identifier tag. */
  accountId: string;
  /** Body param: Events that this webhook will get triggered by */
  events: (
    | "meeting.started"
    | "meeting.ended"
    | "meeting.participantJoined"
    | "meeting.participantLeft"
    | "meeting.chatSynced"
    | "recording.statusUpdate"
    | "livestreaming.statusUpdate"
    | "meeting.transcript"
    | "meeting.summary"
    | (string & {})
  )[];
  /** Body param: Name of the webhook */
  name: string;
  /** Body param: URL this webhook will send events to */
  url: string;
  /** Body param: Set whether or not the webhook should be active when created */
  enabled?: boolean;
}

export const ReplaceWebhookWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      appId: Schema.String.pipe(T.HttpPath("appId")),
      webhookId: Schema.String.pipe(T.HttpPath("webhookId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      events: Schema.Array(
        Schema.Union([
          Schema.Literals([
            "meeting.started",
            "meeting.ended",
            "meeting.participantJoined",
            "meeting.participantLeft",
            "meeting.chatSynced",
            "recording.statusUpdate",
            "livestreaming.statusUpdate",
            "meeting.transcript",
            "meeting.summary",
          ]),
          Schema.String,
        ]),
      ),
      name: Schema.String,
      url: Schema.String,
      enabled: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/realtime/kit/{appId}/webhooks/{webhookId}",
      }),
    ),
  ) as unknown as Schema.Codec<ReplaceWebhookWebhookRequest>;

export interface ReplaceWebhookWebhookResponse {
  data: unknown;
  success: boolean;
}

export const ReplaceWebhookWebhookResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Unknown,
      success: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<ReplaceWebhookWebhookResponse>;

export type ReplaceWebhookWebhookError =
  | DefaultErrors
  | RealtimeKitWebhookNotFound
  | Forbidden;

export const replaceWebhookWebhook: API.OperationMethod<
  ReplaceWebhookWebhookRequest,
  ReplaceWebhookWebhookResponse,
  ReplaceWebhookWebhookError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceWebhookWebhookRequest,
  output: ReplaceWebhookWebhookResponse,
  errors: [RealtimeKitWebhookNotFound, Forbidden],
}));
