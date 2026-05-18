import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AddTeamMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/team/{id}/members" }));
export type AddTeamMemberInput = typeof AddTeamMemberInput.Type;

// Output Schema
export const AddTeamMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddTeamMemberOutput = typeof AddTeamMemberOutput.Type;

// The operation
/**
 * Add a user to a team
 *
 * @param id - The ID of the team
 */
export const addTeamMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddTeamMemberInput,
  outputSchema: AddTeamMemberOutput,
  errors: [BadRequest, NotFound] as const,
}));
