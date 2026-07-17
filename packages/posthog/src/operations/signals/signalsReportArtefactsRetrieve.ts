import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsReportArtefactsRetrieveInput {
  id: string;
  project_id: string;
  report_id: string;
}
export const SignalsReportArtefactsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/",
    }),
  ) as unknown as Schema.Codec<SignalsReportArtefactsRetrieveInput>;

// Output Schema
export interface SignalsReportArtefactsRetrieveOutput {
  id: string;
  type:
    | "video_segment"
    | "safety_judgment"
    | "actionability_judgment"
    | "priority_judgment"
    | "signal_finding"
    | "repo_selection"
    | "suggested_reviewers"
    | "dismissal"
    | "code_reference"
    | "commit"
    | "task_run"
    | "note";
  content: Record<string, unknown> | unknown[];
  created_at: string;
  updated_at: string | null;
  created_by: {
    id?: number;
    uuid?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
  } | null;
  task_id: string | null;
}
export const SignalsReportArtefactsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    type: Schema.Literals([
      "video_segment",
      "safety_judgment",
      "actionability_judgment",
      "priority_judgment",
      "signal_finding",
      "repo_selection",
      "suggested_reviewers",
      "dismissal",
      "code_reference",
      "commit",
      "task_run",
      "note",
    ]),
    content: Schema.Union([
      Schema.Record(Schema.String, Schema.Unknown),
      Schema.Array(Schema.Unknown),
    ]),
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    created_by: Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
      }),
    ),
    task_id: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<SignalsReportArtefactsRetrieveOutput>;

// The operation
/**
 * Get a single artefact
 *
 * Get one artefact by id, content parsed (and reviewers enriched) the same way as the list.
 *
 * @param id - A UUID string identifying this signal report artefact.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalsReportArtefactsRetrieveInput,
    outputSchema: SignalsReportArtefactsRetrieveOutput,
  }));
