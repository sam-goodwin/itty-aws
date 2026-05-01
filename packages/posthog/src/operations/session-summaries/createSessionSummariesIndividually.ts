import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CreateSessionSummariesIndividuallyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_ids: Schema.optional(Schema.Array(Schema.String)),
    focus_area: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/session_summaries/create_session_summaries_individually/",
    }),
  );
export type CreateSessionSummariesIndividuallyInput =
  typeof CreateSessionSummariesIndividuallyInput.Type;

// Output Schema
export const CreateSessionSummariesIndividuallyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_ids: Schema.optional(Schema.Array(Schema.String)),
    focus_area: Schema.optional(Schema.String),
  });
export type CreateSessionSummariesIndividuallyOutput =
  typeof CreateSessionSummariesIndividuallyOutput.Type;

// The operation
/**
 * Generate AI individual summary for each session, without grouping.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const createSessionSummariesIndividually =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateSessionSummariesIndividuallyInput,
    outputSchema: CreateSessionSummariesIndividuallyOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
