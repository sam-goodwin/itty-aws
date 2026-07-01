import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateGroupInput {
  groupId: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const UpdateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupId: Schema.String.pipe(T.PathParam()),
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "PATCH", path: "/api/atlas/v2/groups/{groupId}" }),
) as unknown as Schema.Codec<UpdateGroupInput>;

// Output Schema
export type UpdateGroupOutput = void;
export const UpdateGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateGroupOutput>;

// The operation
/**
 * Update One Project
 *
 * Updates the human-readable label that identifies the specified project, or the tags associated with the project.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 */
export const updateGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateGroupInput,
  outputSchema: UpdateGroupOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
