import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionActionsRunsListInput {
  project_id: string;
  vision_action_id: string;
  limit?: number;
  offset?: number;
}
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
  ) as unknown as Schema.Codec<VisionActionsRunsListInput>;

// Output Schema
export interface VisionActionsRunsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    status: "running" | "completed" | "failed" | "skipped";
    scheduled_at: string | null;
    observation_count: number;
    synthesized_markdown: string;
    error_reason: string | null;
    created_at: string;
    updated_at: string;
  }[];
}
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
  }) as unknown as Schema.Codec<VisionActionsRunsListOutput>;

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
