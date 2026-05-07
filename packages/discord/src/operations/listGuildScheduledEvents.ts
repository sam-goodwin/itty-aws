import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildScheduledEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    with_user_count: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "GET", path: "/guilds/{guild_id}/scheduled-events" }),
  );
export type ListGuildScheduledEventsInput =
  typeof ListGuildScheduledEventsInput.Type;

// Output Schema
export const ListGuildScheduledEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.Unknown);
export type ListGuildScheduledEventsOutput =
  typeof ListGuildScheduledEventsOutput.Type;

// The operation
export const listGuildScheduledEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListGuildScheduledEventsInput,
    outputSchema: ListGuildScheduledEventsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
