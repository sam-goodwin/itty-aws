import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AddGuildMemberRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/guilds/{guild_id}/members/{user_id}/roles/{role_id}",
    }),
  );
export type AddGuildMemberRoleInput = typeof AddGuildMemberRoleInput.Type;

// Output Schema
export const AddGuildMemberRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddGuildMemberRoleOutput = typeof AddGuildMemberRoleOutput.Type;

// The operation
export const addGuildMemberRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddGuildMemberRoleInput,
  outputSchema: AddGuildMemberRoleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
