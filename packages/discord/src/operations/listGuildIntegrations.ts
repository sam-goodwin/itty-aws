import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildIntegrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/integrations" }));
export type ListGuildIntegrationsInput = typeof ListGuildIntegrationsInput.Type;

// Output Schema
export const ListGuildIntegrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.Unknown);
export type ListGuildIntegrationsOutput =
  typeof ListGuildIntegrationsOutput.Type;

// The operation
export const listGuildIntegrations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListGuildIntegrationsInput,
    outputSchema: ListGuildIntegrationsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
