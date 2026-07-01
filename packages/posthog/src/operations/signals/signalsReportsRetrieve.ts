import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsReportsRetrieveInput {
  id: string;
  project_id: string;
}
export const SignalsReportsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{id}/",
    }),
  ) as unknown as Schema.Codec<SignalsReportsRetrieveInput>;

// Output Schema
export interface SignalsReportsRetrieveOutput {
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
}
export const SignalsReportsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SignalsReportsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this signal report.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsReportsRetrieveInput,
    outputSchema: SignalsReportsRetrieveOutput,
  }),
);
