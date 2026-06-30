import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionActionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    scanner: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/vision/actions/" }),
);
export type VisionActionsListInput = typeof VisionActionsListInput.Type;

// Output Schema
export const VisionActionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        scanner: Schema.String,
        enabled: Schema.optional(Schema.Boolean),
        trigger_type: Schema.optional(
          Schema.Literals(["schedule", "threshold"]),
        ),
        mode: Schema.optional(
          Schema.Literals(["group_summary", "per_observation"]),
        ),
        trigger_config: Schema.optional(
          Schema.Struct({
            rrule: Schema.optional(Schema.String),
            timezone: Schema.optional(Schema.String),
          }),
        ),
        selection: Schema.optional(
          Schema.Struct({
            scanner_type: Schema.optional(Schema.String),
            scanner_ids: Schema.optional(Schema.Array(Schema.String)),
            verdict: Schema.optional(Schema.String),
            tags: Schema.optional(Schema.Array(Schema.String)),
            min_score: Schema.optional(Schema.Number),
            max_score: Schema.optional(Schema.Number),
            status: Schema.optional(Schema.String),
            window_days: Schema.optional(Schema.Number),
          }),
        ),
        synthesis_config: Schema.optional(
          Schema.Struct({
            prompt_guide: Schema.optional(Schema.String),
          }),
        ),
        delivery_config: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["slack"]),
              integration_id: Schema.Number,
              channel: Schema.String,
            }),
          ),
        ),
        next_run_at: Schema.NullOr(Schema.String),
        last_run_at: Schema.NullOr(Schema.String),
        hog_flow_id: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        created_by: Schema.Unknown,
        updated_at: Schema.String,
      }),
    ),
  });
export type VisionActionsListOutput = typeof VisionActionsListOutput.Type;

// The operation
/**
 * CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param scanner - Filter to the actions belonging to one scanner.
 */
export const visionActionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VisionActionsListInput,
  outputSchema: VisionActionsListOutput,
}));
