import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WizardSessionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String,
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
    event_plan: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    error: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/wizard/sessions/",
    }),
  );
export type WizardSessionsCreateInput = typeof WizardSessionsCreateInput.Type;

// Output Schema
export const WizardSessionsCreateOutput =
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
  });
export type WizardSessionsCreateOutput = typeof WizardSessionsCreateOutput.Type;

// The operation
/**
 * Upsert a wizard session. The `session_id` key is the idempotency anchor — reposting the same `session_id` replaces the existing row. Returns 201 on create, 200 on update.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const wizardSessionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WizardSessionsCreateInput,
    outputSchema: WizardSessionsCreateOutput,
  }),
);
