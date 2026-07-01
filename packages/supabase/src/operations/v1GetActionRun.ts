import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetActionRunInput {
  ref: string;
  run_id: string;
}
export const V1GetActionRunInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  run_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/actions/{run_id}" }),
) as unknown as Schema.Codec<V1GetActionRunInput>;

// Output Schema
export interface V1GetActionRunOutput {
  id: string;
  branch_id: string;
  run_steps: {
    name:
      | "clone"
      | "pull"
      | "health"
      | "configure"
      | "migrate"
      | "seed"
      | "deploy";
    status:
      | "CREATED"
      | "DEAD"
      | "EXITED"
      | "PAUSED"
      | "REMOVING"
      | "RESTARTING"
      | "RUNNING";
    created_at: string;
    updated_at: string;
  }[];
  git_config?: unknown | null;
  workdir: string | null;
  check_run_id: number | null;
  created_at: string;
  updated_at: string;
}
export const V1GetActionRunOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  branch_id: Schema.String,
  run_steps: Schema.Array(
    Schema.Struct({
      name: Schema.Literals([
        "clone",
        "pull",
        "health",
        "configure",
        "migrate",
        "seed",
        "deploy",
      ]),
      status: Schema.Literals([
        "CREATED",
        "DEAD",
        "EXITED",
        "PAUSED",
        "REMOVING",
        "RESTARTING",
        "RUNNING",
      ]),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  ),
  git_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
  workdir: Schema.NullOr(Schema.String),
  check_run_id: Schema.NullOr(Schema.Number),
  created_at: Schema.String,
  updated_at: Schema.String,
}) as unknown as Schema.Codec<V1GetActionRunOutput>;

// The operation
/**
 * Get the status of an action run
 *
 * Returns the current status of the specified action run.
 *
 * @param ref - Project ref
 * @param run_id - Action Run ID
 */
export const v1GetActionRun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetActionRunInput,
  outputSchema: V1GetActionRunOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
