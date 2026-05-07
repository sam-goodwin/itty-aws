import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateLinkedLobbyGuildInviteForUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lobby_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/lobbies/{lobby_id}/members/{user_id}/invites",
    }),
  );
export type CreateLinkedLobbyGuildInviteForUserInput =
  typeof CreateLinkedLobbyGuildInviteForUserInput.Type;

// Output Schema
export const CreateLinkedLobbyGuildInviteForUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.String,
  });
export type CreateLinkedLobbyGuildInviteForUserOutput =
  typeof CreateLinkedLobbyGuildInviteForUserOutput.Type;

// The operation
export const createLinkedLobbyGuildInviteForUser =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateLinkedLobbyGuildInviteForUserInput,
    outputSchema: CreateLinkedLobbyGuildInviteForUserOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
