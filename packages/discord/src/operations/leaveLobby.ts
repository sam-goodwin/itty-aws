import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const LeaveLobbyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lobby_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/lobbies/{lobby_id}/members/@me" }));
export type LeaveLobbyInput = typeof LeaveLobbyInput.Type;

// Output Schema
export const LeaveLobbyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LeaveLobbyOutput = typeof LeaveLobbyOutput.Type;

// The operation
export const leaveLobby = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LeaveLobbyInput,
  outputSchema: LeaveLobbyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
