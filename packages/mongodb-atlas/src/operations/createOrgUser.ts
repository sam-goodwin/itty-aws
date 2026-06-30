import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface CreateOrgUserInput {
  orgId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const CreateOrgUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/api/atlas/v2/orgs/{orgId}/users" }),
) as unknown as Schema.Codec<CreateOrgUserInput>;

// Output Schema
export type CreateOrgUserOutput = void;
export const CreateOrgUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateOrgUserOutput>;

// The operation
/**
 * Add One MongoDB Cloud User to One Organization
 *
 * Invites one new or existing MongoDB Cloud user to join the organization. The invitation to join the organization will be sent to the username provided and must be accepted within 30 days.
 * **Note**: If the user does not have an existing MongoDB Cloud account, they will be prompted to finish setting up an account upon accepting the invitation. If the user already has an account, they will still receive an invitation to access the organization.
 * Replaces `INVITATION_EXPIRED` and `INVITATION_REJECTED` user with the same email. A conflict, if and only if, there is an existing `PENDING` or `ACTIVE` user.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const createOrgUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOrgUserInput,
  outputSchema: CreateOrgUserOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
