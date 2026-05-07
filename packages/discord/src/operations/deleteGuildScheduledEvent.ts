import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildScheduledEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    guild_scheduled_event_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}",
    }),
  );
export type DeleteGuildScheduledEventInput =
  typeof DeleteGuildScheduledEventInput.Type;

// Output Schema
export const DeleteGuildScheduledEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildScheduledEventOutput =
  typeof DeleteGuildScheduledEventOutput.Type;

// The operation
export const deleteGuildScheduledEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteGuildScheduledEventInput,
    outputSchema: DeleteGuildScheduledEventOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
