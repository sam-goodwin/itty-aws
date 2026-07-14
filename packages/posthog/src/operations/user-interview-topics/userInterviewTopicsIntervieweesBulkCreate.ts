import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UserInterviewTopicsIntervieweesBulkCreateInput {
  project_id: string;
  topic_id: string;
  items: { interviewee_identifier: string; agent_context: string }[];
}
export const UserInterviewTopicsIntervieweesBulkCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    topic_id: Schema.String.pipe(T.PathParam()),
    items: Schema.Array(
      Schema.Struct({
        interviewee_identifier: Schema.String,
        agent_context: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interview_topics/{topic_id}/interviewees/bulk/",
    }),
  ) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesBulkCreateInput>;

// Output Schema
export interface UserInterviewTopicsIntervieweesBulkCreateOutput {
  inserted_count: number;
  skipped_count: number;
  skipped_identifiers: string[];
}
export const UserInterviewTopicsIntervieweesBulkCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    inserted_count: Schema.Number,
    skipped_count: Schema.Number,
    skipped_identifiers: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<UserInterviewTopicsIntervieweesBulkCreateOutput>;

// The operation
/**
 * Create up to 500 interviewee context rows for a topic in a single request. Rows whose (topic, interviewee_identifier) already exists are skipped — the response surfaces an `inserted_count`, a `skipped_count`, and the `skipped_identifiers` so the caller can reconcile. Items must have unique `interviewee_identifier` values within the batch.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewTopicsIntervieweesBulkCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserInterviewTopicsIntervieweesBulkCreateInput,
    outputSchema: UserInterviewTopicsIntervieweesBulkCreateOutput,
  }));
