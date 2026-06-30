import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteProjectJWKSInput {
  project_id: string;
  jwks_id: string;
}
export const DeleteProjectJWKSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    jwks_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "DELETE", path: "/projects/{project_id}/jwks/{jwks_id}" }),
) as unknown as Schema.Codec<DeleteProjectJWKSInput>;

// Output Schema
export interface DeleteProjectJWKSOutput {
  id: string;
  project_id: string;
  branch_id?: string;
  jwks_url: string;
  provider_name: string;
  created_at: string;
  updated_at: string;
  jwt_audience?: string;
  role_names?: string[];
}
export const DeleteProjectJWKSOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    project_id: Schema.String,
    branch_id: Schema.optional(Schema.String),
    jwks_url: Schema.String,
    provider_name: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    jwt_audience: Schema.optional(Schema.String),
    role_names: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<DeleteProjectJWKSOutput>;

// The operation
/**
 * Delete JWKS URL
 *
 * Removes the specified JWKS URL from the project.
 * JWTs signed by keys from the removed URL can no longer authenticate to the project's endpoints.
 *
 * @param project_id - The Neon project ID
 * @param jwks_id - The JWKS ID
 */
export const deleteProjectJWKS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteProjectJWKSInput,
  outputSchema: DeleteProjectJWKSOutput,
}));
