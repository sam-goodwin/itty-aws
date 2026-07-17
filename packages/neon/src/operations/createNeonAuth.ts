import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateNeonAuthInput {
  project_id: string;
  branch_id: string;
  auth_provider: "mock" | "stack" | "better_auth";
  database_name?: string;
}
export const CreateNeonAuthInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  branch_id: Schema.String.pipe(T.PathParam()),
  auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
  database_name: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/projects/{project_id}/branches/{branch_id}/auth",
  }),
) as unknown as Schema.Codec<CreateNeonAuthInput>;

// Output Schema
export interface CreateNeonAuthOutput {
  auth_provider: "mock" | "stack" | "better_auth";
  auth_provider_project_id: string;
  pub_client_key: string;
  secret_server_key: string;
  jwks_url: string;
  schema_name: string;
  table_name: string;
  base_url?: string;
}
export const CreateNeonAuthOutput = /*@__PURE__*/ Schema.Struct({
  auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
  auth_provider_project_id: Schema.String,
  pub_client_key: Schema.String,
  secret_server_key: Schema.String,
  jwks_url: Schema.String,
  schema_name: Schema.String,
  table_name: Schema.String,
  base_url: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateNeonAuthOutput>;

// The operation
/**
 * Enable Neon Auth for the branch
 *
 * Enables Neon Auth for the specified branch by connecting it to an authentication provider.
 * Creating the integration provisions the `neon_auth` schema in the branch database, which stores user identity data synchronized from the provider.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const createNeonAuth = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateNeonAuthInput,
  outputSchema: CreateNeonAuthOutput,
}));
