import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

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
    has_environment_variables: Schema.optional(Schema.Boolean),
    private: Schema.optional(Schema.Boolean),
    internal: Schema.optional(Schema.Boolean),
    effective_domains: Schema.optional(Schema.Array(Schema.String)),
    created_by: Schema.optional(
      Schema.Struct({
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
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
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
export type SandboxPartialUpdateOutput = typeof SandboxPartialUpdateOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param id - A UUID string identifying this sandbox environment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SandboxPartialUpdateInput,
    outputSchema: SandboxPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
