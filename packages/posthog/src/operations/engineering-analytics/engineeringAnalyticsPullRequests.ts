import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export const EngineeringAnalyticsPullRequestsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    author: Schema.optional(Schema.String),
    date_from: Schema.optional(Schema.String),
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/pull_requests/",
    }),
  );
export type EngineeringAnalyticsPullRequestsInput =
  typeof EngineeringAnalyticsPullRequestsInput.Type;

// Output Schema
export const EngineeringAnalyticsPullRequestsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        author: Schema.Struct({
          handle: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
          is_bot: Schema.Boolean,
        }),
        repo: Schema.Struct({
          provider: Schema.String,
          owner: Schema.String,
          name: Schema.String,
        }),
        ci: Schema.Struct({
          runs: Schema.Number,
          passing: Schema.Number,
          failing: Schema.Number,
          pending: Schema.Number,
        }),
        number: Schema.Number,
        title: Schema.String,
        state: Schema.Literals(["open", "closed", "merged"]),
        is_draft: Schema.Boolean,
        created_at: Schema.String,
        merged_at: Schema.NullOr(Schema.String),
        open_to_merge_seconds: Schema.NullOr(Schema.Number),
        labels: Schema.Array(Schema.String),
        pushes: Schema.Number,
        rerun_cycles: Schema.Number,
        estimated_cost_usd: Schema.optional(Schema.NullOr(Schema.Number)),
        billable_minutes: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    truncated: Schema.Boolean,
    limit: Schema.Number,
  });
export type EngineeringAnalyticsPullRequestsOutput =
  typeof EngineeringAnalyticsPullRequestsOutput.Type;

// The operation
/**
 * Open pull requests plus any merged or closed since date_from (default -30d), newest first, each with its head-SHA CI rollup. The list is capped; when more match, `truncated` is true and the ci_cards counts can exceed it. open_to_merge_seconds is coarse — it fuses draft and ready-for-review time; CI counts can lag until late completions settle.
 *
 * @param author - Optional GitHub login to scope the list to one author's pull requests.
 * @param date_from - Window start: relative ('-30d', '-8w') or ISO8601. Defaults to -30d.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsPullRequests =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsPullRequestsInput,
    outputSchema: EngineeringAnalyticsPullRequestsOutput,
    errors: [BadRequest] as const,
  }));
