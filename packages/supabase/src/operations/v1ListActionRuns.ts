import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListActionRunsInput {
  ref: string;
  offset?: number;
  limit?: number;
}
export const V1ListActionRunsInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  offset: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/actions" }),
) as unknown as Schema.Codec<V1ListActionRunsInput>;

// Output Schema
export type V1ListActionRunsOutput = {
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
}[];
export const V1ListActionRunsOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<V1ListActionRunsOutput>;

// The operation
/**
 * List all action runs
 *
 * Returns a paginated list of action runs of the specified project.
 *
 * @param ref - Project ref
 */
export const v1ListActionRuns = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListActionRunsInput,
  outputSchema: V1ListActionRunsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
