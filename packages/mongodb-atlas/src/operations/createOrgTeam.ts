import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface CreateOrgTeamInput {
  orgId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const CreateOrgTeamInput = /*@__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/api/atlas/v2/orgs/{orgId}/teams" }),
) as unknown as Schema.Codec<CreateOrgTeamInput>;

// Output Schema
export type CreateOrgTeamOutput = void;
export const CreateOrgTeamOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateOrgTeamOutput>;

// The operation
/**
 * Create One Team in One Organization
 *
 * Creates one team in the specified organization. Teams enable you to grant project access roles to MongoDB Cloud users. MongoDB Cloud limits the number of teams to a maximum of 250 teams per organization.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const createOrgTeam = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateOrgTeamInput,
  outputSchema: CreateOrgTeamOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
