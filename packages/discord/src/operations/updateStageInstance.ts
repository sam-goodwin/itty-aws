import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateStageInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    topic: Schema.optional(Schema.String),
    privacy_level: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/stage-instances/{channel_id}" }));
export type UpdateStageInstanceInput = typeof UpdateStageInstanceInput.Type;

// Output Schema
export const UpdateStageInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String,
    channel_id: Schema.String,
    topic: Schema.String,
    privacy_level: Schema.Unknown,
    id: Schema.String,
    discoverable_disabled: Schema.Boolean,
    guild_scheduled_event_id: Schema.Unknown,
  });
export type UpdateStageInstanceOutput = typeof UpdateStageInstanceOutput.Type;

// The operation
export const updateStageInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateStageInstanceInput,
  outputSchema: UpdateStageInstanceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
