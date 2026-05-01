import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SandboxListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/sandbox_environments/",
  }),
);
export type SandboxListInput = typeof SandboxListInput.Type;

// Output Schema
export const SandboxListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        network_access_level: Schema.optional(
          Schema.Literals(["trusted", "full", "custom"]),
        ),
        allowed_domains: Schema.optional(Schema.Array(Schema.String)),
        repositories: Schema.optional(Schema.Array(Schema.String)),
        private: Schema.optional(Schema.Boolean),
        internal: Schema.optional(Schema.Boolean),
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
      }),
    ),
  ),
});
export type SandboxListOutput = typeof SandboxListOutput.Type;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SandboxListInput,
  outputSchema: SandboxListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
