import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsSamplingRulesSimulateCreateInput {
  id: string;
  project_id: string;
}
export const LogsSamplingRulesSimulateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/sampling_rules/{id}/simulate/",
    }),
  ) as unknown as Schema.Codec<LogsSamplingRulesSimulateCreateInput>;

// Output Schema
export interface LogsSamplingRulesSimulateCreateOutput {
  estimated_reduction_pct: number;
  notes: string;
}
export const LogsSamplingRulesSimulateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimated_reduction_pct: Schema.Number,
    notes: Schema.String,
  }) as unknown as Schema.Codec<LogsSamplingRulesSimulateCreateOutput>;

// The operation
/**
 * Dry-run estimate for how much volume this rule would remove (placeholder response until CH-backed simulation is wired).
 *
 * @param id - A UUID string identifying this logs exclusion rule.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSamplingRulesSimulateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogsSamplingRulesSimulateCreateInput,
    outputSchema: LogsSamplingRulesSimulateCreateOutput,
  }));
