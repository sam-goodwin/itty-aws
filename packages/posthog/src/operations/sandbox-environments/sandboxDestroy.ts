import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SandboxDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/sandbox_environments/{id}/",
  }),
);
export type SandboxDestroyInput = typeof SandboxDestroyInput.Type;

// Output Schema
export const SandboxDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SandboxDestroyOutput = typeof SandboxDestroyOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param id - A UUID string identifying this sandbox environment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SandboxDestroyInput,
  outputSchema: SandboxDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
