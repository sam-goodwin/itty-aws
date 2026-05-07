import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGuildRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  role_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/guilds/{guild_id}/roles/{role_id}" }),
);
export type DeleteGuildRoleInput = typeof DeleteGuildRoleInput.Type;

// Output Schema
export const DeleteGuildRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGuildRoleOutput = typeof DeleteGuildRoleOutput.Type;

// The operation
export const deleteGuildRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGuildRoleInput,
  outputSchema: DeleteGuildRoleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
