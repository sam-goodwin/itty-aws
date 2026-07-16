import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetProjectJWKSInput {
  project_id: string;
}
export const GetProjectJWKSInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/projects/{project_id}/jwks" }),
) as unknown as Schema.Codec<GetProjectJWKSInput>;

// Output Schema
export interface GetProjectJWKSOutput {
  jwks: {
    id: string;
    project_id: string;
    branch_id?: string;
    jwks_url: string;
    provider_name: string;
    created_at: string;
    updated_at: string;
    jwt_audience?: string;
    role_names?: string[];
  }[];
}
export const GetProjectJWKSOutput = /*@__PURE__*/ Schema.Struct({
  jwks: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      project_id: Schema.String,
      branch_id: Schema.optional(Schema.String),
      jwks_url: Schema.String,
      provider_name: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      jwt_audience: Schema.optional(Schema.String),
      role_names: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}) as unknown as Schema.Codec<GetProjectJWKSOutput>;

// The operation
/**
 * List JWKS URLs
 *
 * Returns the JWKS URLs available for verifying JWTs used as the authentication mechanism for the specified project.
 *
 * @param project_id - The Neon project ID
 */
export const getProjectJWKS = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetProjectJWKSInput,
  outputSchema: GetProjectJWKSOutput,
}));
