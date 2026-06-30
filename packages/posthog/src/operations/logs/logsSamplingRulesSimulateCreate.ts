import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LogsSamplingRulesSimulateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/sampling_rules/{id}/simulate/",
    }),
  );
export type LogsSamplingRulesSimulateCreateInput =
  typeof LogsSamplingRulesSimulateCreateInput.Type;

// Output Schema
export const LogsSamplingRulesSimulateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimated_reduction_pct: Schema.Number,
    notes: Schema.String,
  });
export type LogsSamplingRulesSimulateCreateOutput =
  typeof LogsSamplingRulesSimulateCreateOutput.Type;

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
