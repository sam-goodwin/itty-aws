import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface RenameOrgTeamInput {
  orgId: string;
  teamId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const RenameOrgTeamInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  teamId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/api/atlas/v2/orgs/{orgId}/teams/{teamId}",
  }),
) as unknown as Schema.Codec<RenameOrgTeamInput>;

// Output Schema
export type RenameOrgTeamOutput = void;
export const RenameOrgTeamOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RenameOrgTeamOutput>;

// The operation
/**
 * Rename One Team
 *
 * Renames one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param teamId - Unique 24-hexadecimal digit string that identifies the team that you want to rename.
 */
export const renameOrgTeam = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RenameOrgTeamInput,
  outputSchema: RenameOrgTeamOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
