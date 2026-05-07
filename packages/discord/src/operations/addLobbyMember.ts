import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AddLobbyMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lobby_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
  flags: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({ method: "PUT", path: "/lobbies/{lobby_id}/members/{user_id}" }),
);
export type AddLobbyMemberInput = typeof AddLobbyMemberInput.Type;

// Output Schema
export const AddLobbyMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  flags: Schema.Number,
});
export type AddLobbyMemberOutput = typeof AddLobbyMemberOutput.Type;

// The operation
export const addLobbyMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddLobbyMemberInput,
  outputSchema: AddLobbyMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
