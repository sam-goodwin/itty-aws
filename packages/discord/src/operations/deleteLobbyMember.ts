import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteLobbyMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    lobby_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "DELETE", path: "/lobbies/{lobby_id}/members/{user_id}" }),
);
export type DeleteLobbyMemberInput = typeof DeleteLobbyMemberInput.Type;

// Output Schema
export const DeleteLobbyMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteLobbyMemberOutput = typeof DeleteLobbyMemberOutput.Type;

// The operation
export const deleteLobbyMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteLobbyMemberInput,
  outputSchema: DeleteLobbyMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
