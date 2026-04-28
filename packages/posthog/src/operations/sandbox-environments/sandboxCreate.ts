import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const SandboxCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id: Schema.String,
  name: Schema.String,
  network_access_level: Schema.optional(
    Schema.Literals(["trusted", "full", "custom"]),
  ),
  allowed_domains: Schema.optional(Schema.Array(Schema.String)),
  include_default_domains: Schema.optional(Schema.Boolean),
  repositories: Schema.optional(Schema.Array(Schema.String)),
  environment_variables: Schema.optional(Schema.Unknown),
  has_environment_variables: Schema.Boolean,
  private: Schema.optional(Schema.Boolean),
  internal: Schema.Boolean,
  effective_domains: Schema.Array(Schema.String),
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  created_at: Schema.String,
  updated_at: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/projects/{project_id}/sandbox_environments/",
  }),
);
export type SandboxCreateInput = typeof SandboxCreateInput.Type;

// Output Schema
export const SandboxCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  network_access_level: Schema.optional(
    Schema.Literals(["trusted", "full", "custom"]),
  ),
  allowed_domains: Schema.optional(Schema.Array(Schema.String)),
  include_default_domains: Schema.optional(Schema.Boolean),
  repositories: Schema.optional(Schema.Array(Schema.String)),
  environment_variables: Schema.optional(Schema.Unknown),
  has_environment_variables: Schema.Boolean,
  private: Schema.optional(Schema.Boolean),
  internal: Schema.Boolean,
  effective_domains: Schema.Array(Schema.String),
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  created_at: Schema.String,
  updated_at: Schema.String,
});
export type SandboxCreateOutput = typeof SandboxCreateOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SandboxCreateInput,
  outputSchema: SandboxCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
