import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateOrgUserInput {
  orgId: string;
  userId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const UpdateOrgUserInput = /*@__PURE__*/ Schema.Struct({
  orgId: Schema.String.pipe(T.PathParam()),
  userId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/api/atlas/v2/orgs/{orgId}/users/{userId}",
  }),
) as unknown as Schema.Codec<UpdateOrgUserInput>;

// Output Schema
export type UpdateOrgUserOutput = void;
export const UpdateOrgUserOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateOrgUserOutput>;

// The operation
/**
 * Update One MongoDB Cloud User in One Organization
 *
 * Updates one MongoDB Cloud user in the specified organization. You can update an active user or a user that has not yet accepted the invitation to join the organization.
 * **Note**: Only include the fields you wish to update in the request body. Supplying a field with an empty value will reset that field on the user.
 * **Note**: This resource cannot be used to update pending users invited via the deprecated Invite One MongoDB Cloud User to Join One Project endpoint.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param userId - Unique 24-hexadecimal digit string that identifies the pending or active user in the organization. If you need to lookup a user's `userId` or verify a user's status in the organization, use the Return All MongoDB Cloud Users in One Organization resource and filter by `username`.
 */
export const updateOrgUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateOrgUserInput,
  outputSchema: UpdateOrgUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
