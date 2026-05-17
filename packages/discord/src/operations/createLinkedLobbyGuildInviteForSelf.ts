import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateLinkedLobbyGuildInviteForSelfInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lobby_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/lobbies/{lobby_id}/members/@me/invites" }),
  );
export type CreateLinkedLobbyGuildInviteForSelfInput =
  typeof CreateLinkedLobbyGuildInviteForSelfInput.Type;

// Output Schema
export const CreateLinkedLobbyGuildInviteForSelfOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.String,
  });
export type CreateLinkedLobbyGuildInviteForSelfOutput =
  typeof CreateLinkedLobbyGuildInviteForSelfOutput.Type;

// The operation
export const createLinkedLobbyGuildInviteForSelf =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateLinkedLobbyGuildInviteForSelfInput,
    outputSchema: CreateLinkedLobbyGuildInviteForSelfOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
