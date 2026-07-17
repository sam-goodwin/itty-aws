import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SandboxListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const SandboxListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/sandbox_environments/",
  }),
) as unknown as Schema.Codec<SandboxListInput>;

// Output Schema
export interface SandboxListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    name: string;
    network_access_level: string;
    allowed_domains?: string[];
    repositories?: string[];
    private: boolean;
    internal: boolean;
    created_by?: {
      id: number;
      uuid: string;
      distinct_id: string;
      first_name: string;
      last_name: string;
      email: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?: string | null;
    } | null;
    created_at?: string | null;
    updated_at?: string | null;
  }[];
}
export const SandboxListOutput = /*@__PURE__*/ Schema.Struct({
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
      created_by: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.Number,
            uuid: Schema.String,
            distinct_id: Schema.String,
            first_name: Schema.String,
            last_name: Schema.String,
            email: Schema.String,
            is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
            hedgehog_config: Schema.optional(
              Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            role_at_organization: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      ),
      created_at: Schema.optional(Schema.NullOr(Schema.String)),
      updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
}) as unknown as Schema.Codec<SandboxListOutput>;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SandboxListInput,
  outputSchema: SandboxListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
