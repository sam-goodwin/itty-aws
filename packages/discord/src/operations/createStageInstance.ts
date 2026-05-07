import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateStageInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.String,
    channel_id: Schema.String,
    privacy_level: Schema.optional(Schema.Unknown),
    guild_scheduled_event_id: Schema.optional(Schema.Unknown),
    send_start_notification: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(T.Http({ method: "POST", path: "/stage-instances" }));
export type CreateStageInstanceInput = typeof CreateStageInstanceInput.Type;

// Output Schema
export const CreateStageInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String,
    channel_id: Schema.String,
    topic: Schema.String,
    privacy_level: Schema.Unknown,
    id: Schema.String,
    discoverable_disabled: Schema.Boolean,
    guild_scheduled_event_id: Schema.Unknown,
  });
export type CreateStageInstanceOutput = typeof CreateStageInstanceOutput.Type;

// The operation
export const createStageInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateStageInstanceInput,
  outputSchema: CreateStageInstanceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
