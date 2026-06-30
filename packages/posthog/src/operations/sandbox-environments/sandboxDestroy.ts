import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SandboxDestroyInput {
  id: string;
  project_id: string;
}
export const SandboxDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/sandbox_environments/{id}/",
  }),
) as unknown as Schema.Codec<SandboxDestroyInput>;

// Output Schema
export type SandboxDestroyOutput = void;
export const SandboxDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SandboxDestroyOutput>;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SandboxDestroyInput,
  outputSchema: SandboxDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
