import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionActionsRunsRetrieveInput {
  id: string;
  project_id: string;
  vision_action_id: string;
}
export const VisionActionsRunsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    vision_action_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/actions/{vision_action_id}/runs/{id}/",
    }),
  ) as unknown as Schema.Codec<VisionActionsRunsRetrieveInput>;

// Output Schema
export interface VisionActionsRunsRetrieveOutput {
  id: string;
  status: "running" | "completed" | "failed" | "skipped";
  scheduled_at: string | null;
  observation_count: number;
  synthesized_markdown: string;
  error_reason: string | null;
  created_at: string;
  updated_at: string;
}
export const VisionActionsRunsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    status: Schema.Literals(["running", "completed", "failed", "skipped"]),
    scheduled_at: Schema.NullOr(Schema.String),
    observation_count: Schema.Number,
    synthesized_markdown: Schema.String,
    error_reason: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<VisionActionsRunsRetrieveOutput>;

// The operation
/**
 * Read-only run history for a single vision action (nested under /vision/actions/{action_id}/runs/).
 *
 * @param id - A UUID string identifying this vision action run.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionActionsRunsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisionActionsRunsRetrieveInput,
    outputSchema: VisionActionsRunsRetrieveOutput,
  }),
);
