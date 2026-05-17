import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetStageInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/stage-instances/{channel_id}" }));
export type GetStageInstanceInput = typeof GetStageInstanceInput.Type;

// Output Schema
export const GetStageInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String,
    channel_id: Schema.String,
    topic: Schema.String,
    privacy_level: Schema.Unknown,
    id: Schema.String,
    discoverable_disabled: Schema.Boolean,
    guild_scheduled_event_id: Schema.Unknown,
  },
);
export type GetStageInstanceOutput = typeof GetStageInstanceOutput.Type;

// The operation
export const getStageInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStageInstanceInput,
  outputSchema: GetStageInstanceOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
