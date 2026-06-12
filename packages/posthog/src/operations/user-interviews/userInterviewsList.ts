import * as Schema from "effect/Schema";
import { UserInterviewSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UserInterviewsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/user_interviews/",
    }),
  );
export type UserInterviewsListInput = typeof UserInterviewsListInput.Type;

// Output Schema
export const UserInterviewsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => UserInterviewSchema)),
    ),
  });
export type UserInterviewsListOutput = typeof UserInterviewsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserInterviewsListInput,
  outputSchema: UserInterviewsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
