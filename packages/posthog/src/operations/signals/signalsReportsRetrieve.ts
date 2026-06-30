import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsReportsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{id}/",
    }),
  );
export type SignalsReportsRetrieveInput =
  typeof SignalsReportsRetrieveInput.Type;

// Output Schema
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
  });
export type SignalsReportsRetrieveOutput =
  typeof SignalsReportsRetrieveOutput.Type;

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
