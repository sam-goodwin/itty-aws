import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const RetrieveSessionSummariesConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_summaries/config/",
    }),
  );
export type RetrieveSessionSummariesConfigInput =
  typeof RetrieveSessionSummariesConfigInput.Type;

// Output Schema
export const RetrieveSessionSummariesConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product_context: Schema.optional(Schema.String),
    custom_tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type RetrieveSessionSummariesConfigOutput =
  typeof RetrieveSessionSummariesConfigOutput.Type;

// The operation
/**
 * Retrieve the team's session summaries configuration (product context used to tailor single-session replay summaries).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const retrieveSessionSummariesConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RetrieveSessionSummariesConfigInput,
    outputSchema: RetrieveSessionSummariesConfigOutput,
  }));
