import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExperimentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  archived: Schema.optional(Schema.Boolean),
  created_by_id: Schema.optional(Schema.String),
  event: Schema.optional(Schema.String),
  feature_flag_id: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order: Schema.optional(Schema.String),
  prompt_name: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "all",
      "complete",
      "draft",
      "paused",
      "running",
      "stopped",
    ]),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/experiments/" }),
);
export type ExperimentsListInput = typeof ExperimentsListInput.Type;

// Output Schema
export const ExperimentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.Number,
      name: Schema.String,
      description: Schema.optional(Schema.NullOr(Schema.String)),
      start_date: Schema.optional(Schema.NullOr(Schema.String)),
      end_date: Schema.optional(Schema.NullOr(Schema.String)),
      feature_flag_key: Schema.String,
      feature_flag: Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(Schema.Unknown),
        bucketing_identifier: Schema.optional(Schema.Unknown),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
      holdout: Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        filters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(Schema.Array(Schema.Unknown)),
              rollout_percentage: Schema.optional(Schema.Number),
              variant: Schema.optional(Schema.NullOr(Schema.String)),
              aggregation_group_type_index: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
            }),
          ),
        ),
        created_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              uuid: Schema.optional(Schema.String),
              distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
              first_name: Schema.optional(Schema.String),
              last_name: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
              is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
              hedgehog_config: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              role_at_organization: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
      }),
      exposure_cohort: Schema.NullOr(Schema.Number),
      parameters: Schema.optional(Schema.Unknown),
      running_time_calculation: Schema.optional(Schema.Unknown),
      excluded_variants: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      archived: Schema.optional(Schema.Boolean),
      deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
      created_by: Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      created_at: Schema.String,
      updated_at: Schema.String,
      type: Schema.optional(Schema.Unknown),
      conclusion: Schema.optional(Schema.Unknown),
      conclusion_comment: Schema.optional(Schema.NullOr(Schema.String)),
      status: Schema.Literals(["draft", "running", "paused", "stopped"]),
      is_legacy: Schema.Boolean,
      user_access_level: Schema.NullOr(Schema.String),
    }),
  ),
});
export type ExperimentsListOutput = typeof ExperimentsListOutput.Type;

// The operation
/**
 * List experiments for the current project. Supports filtering by status and archival state.
 *
 * @param archived - Filter by archived state. Defaults to non-archived experiments only.
 * @param created_by_id - Filter to experiments created by the given user(s). Accepts a single user ID, or a JSON-encoded / comma-separated list of user IDs to match any of them.
 * @param event - Filter to experiments whose metrics reference this event name. Matches events used directly in metric queries as well as events behind any actions those metrics reference.
 * @param feature_flag_id - Filter to experiments linked to the given feature flag ID.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order - Field to order by. Prefix with '-' for descending. Allowlisted fields include name, created_at, updated_at, start_date, end_date, duration, and status.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param prompt_name - Filter to experiments created from an LLM prompt with this name. Matches experiments whose parameters.prompt_metadata.name equals the given value.
 * @param search - Free-text search applied to the experiment name (case-insensitive).
 * @param status - Filter by experiment status. "running" and "paused" are mutually exclusive: "running" returns launched experiments with an active feature flag, "paused" returns launched experiments whose feature flag is deactivated. "complete" is an alias for "stopped". "all" disables status filtering.
 */
export const experimentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsListInput,
  outputSchema: ExperimentsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
