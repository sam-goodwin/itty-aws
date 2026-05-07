import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildIntegrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    integration_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/guilds/{guild_id}/integrations/{integration_id}",
    }),
  );
export type DeleteGuildIntegrationInput =
  typeof DeleteGuildIntegrationInput.Type;

// Output Schema
export const DeleteGuildIntegrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildIntegrationOutput =
  typeof DeleteGuildIntegrationOutput.Type;

// The operation
export const deleteGuildIntegration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteGuildIntegrationInput,
    outputSchema: DeleteGuildIntegrationOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
