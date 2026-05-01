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
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  network_access_level: Schema.optional(
    Schema.Literals(["trusted", "full", "custom"]),
  ),
  allowed_domains: Schema.optional(Schema.Array(Schema.String)),
  include_default_domains: Schema.optional(Schema.Boolean),
  repositories: Schema.optional(Schema.Array(Schema.String)),
  environment_variables: Schema.optional(Schema.Unknown),
  has_environment_variables: Schema.optional(Schema.Boolean),
  private: Schema.optional(Schema.Boolean),
  internal: Schema.optional(Schema.Boolean),
  effective_domains: Schema.optional(Schema.Array(Schema.String)),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export type SandboxRetrieveOutput = typeof SandboxRetrieveOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param id - A UUID string identifying this sandbox environment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SandboxRetrieveInput,
  outputSchema: SandboxRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
