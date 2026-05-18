import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteTeamMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  id_or_username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/team/{id}/members/{id_or_username}" }),
);
export type DeleteTeamMemberInput = typeof DeleteTeamMemberInput.Type;

// Output Schema
export const DeleteTeamMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteTeamMemberOutput = typeof DeleteTeamMemberOutput.Type;

// The operation
/**
 * Remove a member from a team
 *
 * @param id - The ID of the team
 * @param id_or_username - The ID or username of the user
 */
export const deleteTeamMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteTeamMemberInput,
  outputSchema: DeleteTeamMemberOutput,
  errors: [BadRequest, NotFound] as const,
}));
