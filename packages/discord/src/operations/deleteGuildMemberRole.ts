import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildMemberRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/guilds/{guild_id}/members/{user_id}/roles/{role_id}",
    }),
  );
export type DeleteGuildMemberRoleInput = typeof DeleteGuildMemberRoleInput.Type;

// Output Schema
export const DeleteGuildMemberRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildMemberRoleOutput =
  typeof DeleteGuildMemberRoleOutput.Type;

// The operation
export const deleteGuildMemberRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteGuildMemberRoleInput,
    outputSchema: DeleteGuildMemberRoleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
