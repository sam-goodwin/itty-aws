import * as Schema from "effect/Schema";

export const DesktopRecordingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    team: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    sdk_upload_id: Schema.optional(Schema.String),
    recall_recording_id: Schema.optional(Schema.NullOr(Schema.String)),
    platform: Schema.optional(Schema.suspend(() => MeetingPlatformEnumSchema)),
    meeting_title: Schema.optional(Schema.NullOr(Schema.String)),
    meeting_url: Schema.optional(Schema.NullOr(Schema.String)),
    duration_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
    status: Schema.optional(
      Schema.suspend(() => DesktopRecordingStatusEnumSchema),
    ),
    notes: Schema.optional(Schema.NullOr(Schema.String)),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    video_url: Schema.optional(Schema.NullOr(Schema.String)),
    video_size_bytes: Schema.optional(Schema.NullOr(Schema.Number)),
    participants: Schema.optional(Schema.Array(Schema.String)),
    transcript_text: Schema.optional(Schema.String),
    transcript_segments: Schema.optional(
      Schema.Array(Schema.suspend(() => TranscriptSegmentSchema)),
    ),
    summary: Schema.optional(Schema.NullOr(Schema.String)),
    extracted_tasks: Schema.optional(
      Schema.Array(Schema.suspend(() => DesktopRecordingTaskSchema)),
    ),
    tasks_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    summary_generated_at: Schema.optional(Schema.NullOr(Schema.String)),
    started_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  },
);
export const MeetingPlatformEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "zoom",
    "teams",
    "meet",
    "desktop_audio",
    "slack",
  ]);
export const DesktopRecordingStatusEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "recording",
    "uploading",
    "processing",
    "ready",
    "error",
  ]);
export const TranscriptSegmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timestamp: Schema.optional(Schema.NullOr(Schema.Number)),
    speaker: Schema.optional(Schema.NullOr(Schema.String)),
    text: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.NullOr(Schema.Number)),
    is_final: Schema.optional(Schema.NullOr(Schema.Boolean)),
  });
export const DesktopRecordingTaskSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.NullOr(Schema.String)),
  });
