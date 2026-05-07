import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildScheduledEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    guild_scheduled_event_id: Schema.String.pipe(T.PathParam()),
    with_user_count: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}",
    }),
  );
export type GetGuildScheduledEventInput =
  typeof GetGuildScheduledEventInput.Type;

// Output Schema
export const GetGuildScheduledEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetGuildScheduledEventOutput =
  typeof GetGuildScheduledEventOutput.Type;

// The operation
export const getGuildScheduledEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetGuildScheduledEventInput,
    outputSchema: GetGuildScheduledEventOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
