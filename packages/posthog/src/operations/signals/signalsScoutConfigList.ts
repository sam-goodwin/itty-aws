import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsScoutConfigListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/configs/",
    }),
  );
export type SignalsScoutConfigListInput =
  typeof SignalsScoutConfigListInput.Type;

// Output Schema
export const SignalsScoutConfigListOutput =
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
export type SignalsScoutConfigListOutput =
  typeof SignalsScoutConfigListOutput.Type;

// The operation
/**
 * List scout configs
 *
 * List the per-(team, skill) scout configs for this project — schedule (`run_interval_minutes`), `enabled`, and `emit` posture per scout. A freshly authored scout skill appears here once its config is registered, either explicitly via create or by the coordinator's next tick.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutConfigList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutConfigListInput,
    outputSchema: SignalsScoutConfigListOutput,
  }),
);
