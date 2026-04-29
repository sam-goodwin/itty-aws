import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CreateSessionSummariesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_ids: Schema.Array(Schema.String),
    focus_area: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/session_summaries/create_session_summaries/",
    }),
  );
export type CreateSessionSummariesInput =
  typeof CreateSessionSummariesInput.Type;

// Output Schema
export const CreateSessionSummariesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_ids: Schema.Array(Schema.String),
    focus_area: Schema.optional(Schema.String),
  });
export type CreateSessionSummariesOutput =
  typeof CreateSessionSummariesOutput.Type;

// The operation
/**
 * Generate AI summary for a group of session recordings to find patterns and generate a notebook.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const createSessionSummaries = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateSessionSummariesInput,
    outputSchema: CreateSessionSummariesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
