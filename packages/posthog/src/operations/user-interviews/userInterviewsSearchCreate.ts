import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UserInterviewsSearchCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.String,
    document_types: Schema.optional(
      Schema.Array(Schema.Literals(["transcript", "summary"])),
    ),
    topic_id: Schema.optional(Schema.NullOr(Schema.String)),
    classifications: Schema.optional(
      Schema.Array(Schema.Literals(["abandoned", "off-topic"])),
    ),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/user_interviews/search/",
    }),
  );
export type UserInterviewsSearchCreateInput =
  typeof UserInterviewsSearchCreateInput.Type;

// Output Schema
export const UserInterviewsSearchCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      interview_id: Schema.String,
      document_type: Schema.Literals(["transcript", "summary"]),
      similarity: Schema.Number,
      content_snippet: Schema.String,
      interviewee_identifier: Schema.String,
      topic_id: Schema.NullOr(Schema.String),
      created_at: Schema.String,
    }),
  );
export type UserInterviewsSearchCreateOutput =
  typeof UserInterviewsSearchCreateOutput.Type;

// The operation
/**
 * Search interview responses by semantic similarity
 *
 * Embed `query` with the same model used to index interview transcripts and summaries, then return the top matches by cosine distance. Each match is a single (interview, document_type) pair — an interview can appear up to twice if both its transcript and summary score above other interviews. Useful for surfacing relevant interview snippets in natural language, without exact keyword matches.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const userInterviewsSearchCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserInterviewsSearchCreateInput,
    outputSchema: UserInterviewsSearchCreateOutput,
  }),
);
