import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SandboxPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    network_access_level: Schema.optional(
      Schema.Literals(["trusted", "full", "custom"]),
    ),
    allowed_domains: Schema.optional(Schema.Array(Schema.String)),
    include_default_domains: Schema.optional(Schema.Boolean),
    repositories: Schema.optional(Schema.Array(Schema.String)),
    environment_variables: Schema.optional(Schema.Unknown),
    private: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/sandbox_environments/{id}/",
    }),
  );
export type SandboxPartialUpdateInput = typeof SandboxPartialUpdateInput.Type;

// Output Schema
export const SandboxPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SandboxPartialUpdateOutput = typeof SandboxPartialUpdateOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SandboxPartialUpdateInput,
    outputSchema: SandboxPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
