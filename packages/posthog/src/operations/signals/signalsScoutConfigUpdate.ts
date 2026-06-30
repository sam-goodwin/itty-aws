import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsScoutConfigUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    scout_origin: Schema.optional(Schema.Literals(["canonical", "custom"])),
    enabled: Schema.optional(Schema.Boolean),
    emit: Schema.optional(Schema.Boolean),
    run_interval_minutes: Schema.optional(Schema.Number),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/signals/scout/configs/{id}/",
    }),
  );
export type SignalsScoutConfigUpdateInput =
  typeof SignalsScoutConfigUpdateInput.Type;

// Output Schema
export const SignalsScoutConfigUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    skill_name: Schema.String,
    description: Schema.String,
    scout_origin: Schema.Literals(["canonical", "custom"]),
    enabled: Schema.optional(Schema.Boolean),
    emit: Schema.optional(Schema.Boolean),
    run_interval_minutes: Schema.optional(Schema.Number),
    last_run_at: Schema.NullOr(Schema.String),
    created_at: Schema.String,
  });
export type SignalsScoutConfigUpdateOutput =
  typeof SignalsScoutConfigUpdateOutput.Type;

// The operation
/**
 * Update a scout config
 *
 * Tune one scout: change its schedule (`run_interval_minutes`), `enabled`, or `emit` (dry-run) posture. `skill_name` is fixed. Enabling records `enabled_by` and is activity-logged since it drives spend.
 *
 * @param id - A UUID string identifying this Signal scout config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutConfigUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutConfigUpdateInput,
    outputSchema: SignalsScoutConfigUpdateOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
