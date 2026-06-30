import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WizardSessionsLatestRetrieveInput {
  project_id: string;
  skill_id?: string;
  workflow_id: string;
}
export const WizardSessionsLatestRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_id: Schema.optional(Schema.String),
    workflow_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/wizard/sessions/latest/",
    }),
  ) as unknown as Schema.Codec<WizardSessionsLatestRetrieveInput>;

// Output Schema
export interface WizardSessionsLatestRetrieveOutput {
  session_id: string;
  team_id: number;
  workflow_id: string;
  skill_id: string;
  started_at: string;
  run_phase: "idle" | "running" | "completed" | "error";
  tasks: {
    id: string;
    title: string;
    status: "pending" | "in_progress" | "completed" | "failed" | "canceled";
  }[];
  event_plan: Record<string, unknown> | null;
  error: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
  is_stale: boolean;
}
export const WizardSessionsLatestRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String,
    team_id: Schema.Number,
    workflow_id: Schema.String,
    skill_id: Schema.String,
    started_at: Schema.String,
    run_phase: Schema.Literals(["idle", "running", "completed", "error"]),
    tasks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        title: Schema.String,
        status: Schema.Literals([
          "pending",
          "in_progress",
          "completed",
          "failed",
          "canceled",
        ]),
      }),
    ),
    event_plan: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.String,
    is_stale: Schema.Boolean,
  }) as unknown as Schema.Codec<WizardSessionsLatestRetrieveOutput>;

// The operation
/**
 * Return the single most-recent wizard session for a workflow (and optional skill), or 204 if none exists. Unlike `list`, this is a point lookup the app shell uses to decide whether to open the live SSE stream — it never returns a collection, and 'no run' is a 204 rather than a 404 so clients don't conflate it with a missing endpoint.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param skill_id - Filter to a single skill within the workflow (e.g. 'nextjs').
 * @param workflow_id - Filter to a single workflow (e.g. 'posthog-integration').
 */
export const wizardSessionsLatestRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WizardSessionsLatestRetrieveInput,
    outputSchema: WizardSessionsLatestRetrieveOutput,
  }));
