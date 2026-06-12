import * as Schema from "effect/Schema";
import { BranchSchema, ProjectSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RecoverProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/projects/{project_id}/recover" }));
export type RecoverProjectInput = typeof RecoverProjectInput.Type;

// Output Schema
export const RecoverProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.suspend(() => ProjectSchema),
  branches: Schema.Array(Schema.suspend(() => BranchSchema)),
});
export type RecoverProjectOutput = typeof RecoverProjectOutput.Type;

// The operation
/**
 * Recover a deleted project
 *
 * Recovers a deleted project during the deletion grace period.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 *
 * @param project_id - The Neon project ID
 */
export const recoverProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecoverProjectInput,
  outputSchema: RecoverProjectOutput,
}));
