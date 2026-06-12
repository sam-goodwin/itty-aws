import * as Schema from "effect/Schema";
import { ChangeRequestSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ChangeRequestsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    action_key: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    requester: Schema.optional(Schema.Number),
    resource_id: Schema.optional(Schema.String),
    resource_type: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/change_requests/",
    }),
  );
export type ChangeRequestsListInput = typeof ChangeRequestsListInput.Type;

// Output Schema
export const ChangeRequestsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ChangeRequestSchema)),
    ),
  });
export type ChangeRequestsListOutput = typeof ChangeRequestsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param state - Multiple values may be separated by commas.
 */
export const changeRequestsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChangeRequestsListInput,
  outputSchema: ChangeRequestsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
