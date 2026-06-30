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
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
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
    }),
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
