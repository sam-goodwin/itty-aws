import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsReportsListInput {
  project_id: string;
  has_implementation_pr?: boolean;
  limit?: number;
  offset?: number;
  ordering?: string;
  priority?: string;
  search?: string;
  source_product?: string;
  status?: string;
  suggested_reviewers?: string;
  task_id?: string;
}
export const SignalsReportsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    has_implementation_pr: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordering: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    source_product: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    suggested_reviewers: Schema.optional(Schema.String),
    task_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/",
    }),
  ) as unknown as Schema.Codec<SignalsReportsListInput>;

// Output Schema
export interface SignalsReportsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    title: string | null;
    summary: string | null;
    status:
      | "potential"
      | "candidate"
      | "in_progress"
      | "pending_input"
      | "ready"
      | "resolved"
      | "failed"
      | "deleted"
      | "suppressed";
    total_weight: number;
    signal_count: number;
    signals_at_run: number;
    created_at: string;
    updated_at: string;
    artefact_count: number;
    priority: string | null;
    actionability: string | null;
    already_addressed: boolean | null;
    dismissal_reason: string | null;
    dismissal_note: string | null;
    is_suggested_reviewer: boolean;
    source_products: string[];
    implementation_pr_url: string | null;
  }[];
}
export const SignalsReportsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        title: Schema.NullOr(Schema.String),
        summary: Schema.NullOr(Schema.String),
        status: Schema.Literals([
          "potential",
          "candidate",
          "in_progress",
          "pending_input",
          "ready",
          "resolved",
          "failed",
          "deleted",
          "suppressed",
        ]),
        total_weight: Schema.Number,
        signal_count: Schema.Number,
        signals_at_run: Schema.Number,
        created_at: Schema.String,
        updated_at: Schema.String,
        artefact_count: Schema.Number,
        priority: Schema.NullOr(Schema.String),
        actionability: Schema.NullOr(Schema.String),
        already_addressed: Schema.NullOr(Schema.Boolean),
        dismissal_reason: Schema.NullOr(Schema.String),
        dismissal_note: Schema.NullOr(Schema.String),
        is_suggested_reviewer: Schema.Boolean,
        source_products: Schema.Array(Schema.String),
        implementation_pr_url: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SignalsReportsListOutput>;

// The operation
/**
 *
 * @param has_implementation_pr - Filter reports by whether a shipped implementation pull request exists. 'true' keeps only reports with a PR; 'false' keeps only those without. Pair with limit=1 to count PR reports cheaply.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param ordering - Comma-separated ordering clauses. Each clause is a field name optionally prefixed with '-' for descending. Allowed fields: status, is_suggested_reviewer, signal_count, total_weight, priority, created_at, updated_at, id. Defaults to '-is_suggested_reviewer,status,-updated_at'.
 * @param priority - Comma-separated list of priorities to include. Valid values: P0, P1, P2, P3, P4. Reports without a priority assignment are excluded when this filter is set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Case-insensitive substring match against report title and summary.
 * @param source_product - Comma-separated list of source products to include. Reports are kept if at least one of their contributing signals comes from one of these products (e.g. error_tracking, session_replay).
 * @param status - Comma-separated list of statuses to include. Valid values: potential, candidate, in_progress, pending_input, ready, resolved, failed, suppressed. Defaults to all statuses except suppressed.
 * @param suggested_reviewers - Comma-separated list of PostHog user UUIDs. Reports are kept if their suggested reviewers include any of the given users.
 * @param task_id - Only reports associated with this task (via the report's task associations).
 */
export const signalsReportsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalsReportsListInput,
  outputSchema: SignalsReportsListOutput,
}));
