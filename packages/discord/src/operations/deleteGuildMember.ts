import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "DELETE", path: "/guilds/{guild_id}/members/{user_id}" }),
);
export type DeleteGuildMemberInput = typeof DeleteGuildMemberInput.Type;

// Output Schema
export const DeleteGuildMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildMemberOutput = typeof DeleteGuildMemberOutput.Type;

// The operation
export const deleteGuildMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGuildMemberInput,
  outputSchema: DeleteGuildMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
