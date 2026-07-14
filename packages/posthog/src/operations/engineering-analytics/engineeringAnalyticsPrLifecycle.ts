import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsPrLifecycleInput {
  project_id: string;
  pr_number: number;
  repo: string;
  source_id?: string;
}
export const EngineeringAnalyticsPrLifecycleInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    pr_number: Schema.Number,
    repo: Schema.String,
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/pr_lifecycle/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsPrLifecycleInput>;

// Output Schema
export interface EngineeringAnalyticsPrLifecycleOutput {
  pull_request: {
    author: {
      handle: string;
      display_name: string;
      avatar_url: string;
      is_bot: boolean;
    };
    repo: { provider: string; owner: string; name: string };
    id: number;
    number: number;
    title: string;
    state: "open" | "closed" | "merged";
    is_draft: boolean;
    created_at: string;
    merged_at: string | null;
    closed_at: string | null;
  };
  events: {
    kind: "opened" | "ci_started" | "ci_finished" | "merged" | "closed";
    at: string;
    detail?: string | null;
    run_id?: number | null;
  }[];
  metric_quality?: "precise" | "coarse" | "partial";
}
export const EngineeringAnalyticsPrLifecycleOutput =
  /*@__PURE__*/ Schema.Struct({
    pull_request: Schema.Struct({
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
      id: Schema.Number,
      number: Schema.Number,
      title: Schema.String,
      state: Schema.Literals(["open", "closed", "merged"]),
      is_draft: Schema.Boolean,
      created_at: Schema.String,
      merged_at: Schema.NullOr(Schema.String),
      closed_at: Schema.NullOr(Schema.String),
    }),
    events: Schema.Array(
      Schema.Struct({
        kind: Schema.Literals([
          "opened",
          "ci_started",
          "ci_finished",
          "merged",
          "closed",
        ]),
        at: Schema.String,
        detail: Schema.optional(Schema.NullOr(Schema.String)),
        run_id: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    metric_quality: Schema.optional(
      Schema.Literals(["precise", "coarse", "partial"]),
    ),
  }) as unknown as Schema.Codec<EngineeringAnalyticsPrLifecycleOutput>;

// The operation
/**
 * The timeline of a single pull request: header plus ordered events (opened, CI started/finished, merged or closed). Use this to answer 'where is this PR stuck and what happened to it'. This is a partial view: review and comment events are not yet available.
 *
 * @param pr_number - Pull request number to inspect.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - 'owner/name' repository the pull request belongs to.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsPrLifecycle =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsPrLifecycleInput,
    outputSchema: EngineeringAnalyticsPrLifecycleOutput,
    errors: [BadRequest, NotFound] as const,
  }));
