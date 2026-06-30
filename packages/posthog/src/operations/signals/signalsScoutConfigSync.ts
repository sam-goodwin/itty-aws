import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsScoutConfigSyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/configs/sync/",
    }),
  );
export type SignalsScoutConfigSyncInput =
  typeof SignalsScoutConfigSyncInput.Type;

// Output Schema
export const SignalsScoutConfigSyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      skill_name: Schema.String,
      description: Schema.String,
      scout_origin: Schema.Literals(["canonical", "custom"]),
      enabled: Schema.optional(Schema.Boolean),
      emit: Schema.optional(Schema.Boolean),
      run_interval_minutes: Schema.optional(Schema.Number),
      last_run_at: Schema.NullOr(Schema.String),
      created_at: Schema.String,
    }),
  );
export type SignalsScoutConfigSyncOutput =
  typeof SignalsScoutConfigSyncOutput.Type;

// The operation
/**
 * Sync scout configs
 *
 * Materialize the scout fleet for this project on demand (idempotent): seed the canonical `signals-scout-*` skills, create a default-schedule config for any scout lacking one, and return all scout configs. Normally the Temporal coordinator does this on its next tick; this action exists so setup flows (e.g. the wizard's self-driving program) can hand the user a tunable fleet immediately.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutConfigSync = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutConfigSyncInput,
    outputSchema: SignalsScoutConfigSyncOutput,
  }),
);
