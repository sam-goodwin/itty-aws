import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WizardSessionsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  skill_id?: string;
  workflow_id?: string;
}
export const WizardSessionsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    skill_id: Schema.optional(Schema.String),
    workflow_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/wizard/sessions/",
    }),
  ) as unknown as Schema.Codec<WizardSessionsListInput>;

// Output Schema
export interface WizardSessionsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const WizardSessionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<WizardSessionsListOutput>;

// The operation
/**
 * List wizard sessions for the project, ordered by started_at desc. This should only be called by the PostHog Wizard. Optional filters: ?workflow_id=<id> and ?skill_id=<id>.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param skill_id - Filter to a single skill within the workflow (e.g. 'nextjs').
 * @param workflow_id - Filter to a single workflow (e.g. 'onboarding').
 */
export const wizardSessionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WizardSessionsListInput,
  outputSchema: WizardSessionsListOutput,
}));
