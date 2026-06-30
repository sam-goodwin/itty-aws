import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SandboxRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/sandbox_environments/{id}/",
  }),
);
export type SandboxRetrieveInput = typeof SandboxRetrieveInput.Type;

// Output Schema
export const SandboxRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  network_access_level: Schema.String,
  allowed_domains: Schema.optional(Schema.Array(Schema.String)),
  repositories: Schema.optional(Schema.Array(Schema.String)),
  private: Schema.Boolean,
  internal: Schema.Boolean,
  created_by: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export type SandboxRetrieveOutput = typeof SandboxRetrieveOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SandboxRetrieveInput,
  outputSchema: SandboxRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
