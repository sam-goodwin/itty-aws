import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface RetrieveSessionSummariesConfigInput {
  project_id: string;
}
export const RetrieveSessionSummariesConfigInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_summaries/config/",
    }),
  ) as unknown as Schema.Codec<RetrieveSessionSummariesConfigInput>;

// Output Schema
export interface RetrieveSessionSummariesConfigOutput {
  product_context?: string;
  custom_tags?: Record<string, string>;
}
export const RetrieveSessionSummariesConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    product_context: Schema.optional(Schema.String),
    custom_tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<RetrieveSessionSummariesConfigOutput>;

// The operation
/**
 * Retrieve the team's session summaries configuration (product context used to tailor single-session replay summaries).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const retrieveSessionSummariesConfig =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RetrieveSessionSummariesConfigInput,
    outputSchema: RetrieveSessionSummariesConfigOutput,
  }));
