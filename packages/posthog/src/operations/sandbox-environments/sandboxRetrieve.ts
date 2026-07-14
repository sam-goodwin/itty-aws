import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SandboxRetrieveInput {
  id: string;
  project_id: string;
}
export const SandboxRetrieveInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/sandbox_environments/{id}/",
  }),
) as unknown as Schema.Codec<SandboxRetrieveInput>;

// Output Schema
export interface SandboxRetrieveOutput {
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
}
export const SandboxRetrieveOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SandboxRetrieveOutput>;

// The operation
/**
 * API for managing sandbox environments that control network access for task runs.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sandboxRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: SandboxRetrieveInput,
  outputSchema: SandboxRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
