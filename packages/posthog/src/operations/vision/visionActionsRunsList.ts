import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionActionsRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    vision_action_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/actions/{vision_action_id}/runs/",
    }),
  );
export type VisionActionsRunsListInput = typeof VisionActionsRunsListInput.Type;

// Output Schema
export const VisionActionsRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        status: Schema.Literals(["running", "completed", "failed", "skipped"]),
        scheduled_at: Schema.NullOr(Schema.String),
        observation_count: Schema.Number,
        synthesized_markdown: Schema.String,
        error_reason: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type VisionActionsRunsListOutput =
  typeof VisionActionsRunsListOutput.Type;

// The operation
/**
 * Read-only run history for a single vision action (nested under /vision/actions/{action_id}/runs/).
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionActionsRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisionActionsRunsListInput,
    outputSchema: VisionActionsRunsListOutput,
  }),
);
