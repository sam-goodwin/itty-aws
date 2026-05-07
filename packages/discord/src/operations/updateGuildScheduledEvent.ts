import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateGuildScheduledEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    guild_scheduled_event_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}",
    }),
  );
export type UpdateGuildScheduledEventInput =
  typeof UpdateGuildScheduledEventInput.Type;

// Output Schema
export const UpdateGuildScheduledEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type UpdateGuildScheduledEventOutput =
  typeof UpdateGuildScheduledEventOutput.Type;

// The operation
export const updateGuildScheduledEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateGuildScheduledEventInput,
    outputSchema: UpdateGuildScheduledEventOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
