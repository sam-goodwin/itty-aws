import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ModifyTeamMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  id_or_username: Schema.String.pipe(T.PathParam()),
  role: Schema.optional(Schema.String),
  permissions: Schema.optional(Schema.Number),
  payouts_split: Schema.optional(Schema.Number),
  ordering: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "PATCH", path: "/team/{id}/members/{id_or_username}" }),
);
export type ModifyTeamMemberInput = typeof ModifyTeamMemberInput.Type;

// Output Schema
export const ModifyTeamMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ModifyTeamMemberOutput = typeof ModifyTeamMemberOutput.Type;

// The operation
/**
 * Modify a team member's information
 *
 * @param id - The ID of the team
 * @param id_or_username - The ID or username of the user
 */
export const modifyTeamMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModifyTeamMemberInput,
  outputSchema: ModifyTeamMemberOutput,
  errors: [BadRequest, NotFound] as const,
}));
