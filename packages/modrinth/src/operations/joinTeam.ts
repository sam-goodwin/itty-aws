import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const JoinTeamInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/team/{id}/join" }));
export type JoinTeamInput = typeof JoinTeamInput.Type;

// Output Schema
export const JoinTeamOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type JoinTeamOutput = typeof JoinTeamOutput.Type;

// The operation
/**
 * Join a team
 *
 * @param id - The ID of the team
 */
export const joinTeam = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JoinTeamInput,
  outputSchema: JoinTeamOutput,
  errors: [BadRequest, NotFound] as const,
}));
