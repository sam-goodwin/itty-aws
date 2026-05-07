import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateLobbyMessageExternalModerationMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lobby_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/lobbies/{lobby_id}/messages/{message_id}/moderation-metadata",
    }),
  );
export type UpdateLobbyMessageExternalModerationMetadataInput =
  typeof UpdateLobbyMessageExternalModerationMetadataInput.Type;

// Output Schema
export const UpdateLobbyMessageExternalModerationMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateLobbyMessageExternalModerationMetadataOutput =
  typeof UpdateLobbyMessageExternalModerationMetadataOutput.Type;

// The operation
/**
 * Update the external moderation metadata for a lobby message.
 */
export const updateLobbyMessageExternalModerationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateLobbyMessageExternalModerationMetadataInput,
    outputSchema: UpdateLobbyMessageExternalModerationMetadataOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
