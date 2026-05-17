import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateGuildScheduledEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/guilds/{guild_id}/scheduled-events" }),
  );
export type CreateGuildScheduledEventInput =
  typeof CreateGuildScheduledEventInput.Type;

// Output Schema
export const CreateGuildScheduledEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CreateGuildScheduledEventOutput =
  typeof CreateGuildScheduledEventOutput.Type;

// The operation
export const createGuildScheduledEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateGuildScheduledEventInput,
    outputSchema: CreateGuildScheduledEventOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
