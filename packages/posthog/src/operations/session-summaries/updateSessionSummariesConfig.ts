import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UpdateSessionSummariesConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    product_context: Schema.optional(Schema.String),
    custom_tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/session_summaries/config/",
    }),
  );
export type UpdateSessionSummariesConfigInput =
  typeof UpdateSessionSummariesConfigInput.Type;

// Output Schema
export const UpdateSessionSummariesConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product_context: Schema.optional(Schema.String),
    custom_tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateSessionSummariesConfigOutput =
  typeof UpdateSessionSummariesConfigOutput.Type;

// The operation
/**
 * Update the team's session summaries configuration (product context used to tailor single-session replay summaries).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const updateSessionSummariesConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateSessionSummariesConfigInput,
    outputSchema: UpdateSessionSummariesConfigOutput,
  }));
