import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface SignalsScoutConfigCreateInput {
  project_id: string;
  skill_name: string;
  enabled?: boolean;
  emit?: boolean;
  run_interval_minutes?: number;
}
export const SignalsScoutConfigCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    emit: Schema.optional(Schema.Boolean),
    run_interval_minutes: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/configs/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutConfigCreateInput>;

// Output Schema
export interface SignalsScoutConfigCreateOutput {
  id: string;
  skill_name: string;
  description: string;
  scout_origin: "canonical" | "custom";
  enabled?: boolean;
  emit?: boolean;
  run_interval_minutes?: number;
  last_run_at: string | null;
  created_at: string;
}
export const SignalsScoutConfigCreateOutput =
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
  }) as unknown as Schema.Codec<SignalsScoutConfigCreateOutput>;

// The operation
/**
 * Create a scout config
 *
 * Register the config for a `signals-scout-*` skill immediately, without waiting for the coordinator to auto-register it — optionally setting `run_interval_minutes`, `enabled`, and `emit` in the same call. The skill must already exist on this project. Upsert: if a config already exists for the skill, the provided fields are applied to it.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutConfigCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutConfigCreateInput,
    outputSchema: SignalsScoutConfigCreateOutput,
    errors: [BadRequest] as const,
  }),
);
