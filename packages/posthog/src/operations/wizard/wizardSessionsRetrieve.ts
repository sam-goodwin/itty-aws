import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const WizardSessionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/wizard/sessions/{session_id}/",
    }),
  );
export type WizardSessionsRetrieveInput =
  typeof WizardSessionsRetrieveInput.Type;

// Output Schema
export const WizardSessionsRetrieveOutput =
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
export type WizardSessionsRetrieveOutput =
  typeof WizardSessionsRetrieveOutput.Type;

// The operation
/**
 * Retrieve a single wizard session by its session_id.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const wizardSessionsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WizardSessionsRetrieveInput,
    outputSchema: WizardSessionsRetrieveOutput,
    errors: [NotFound] as const,
  }),
);
