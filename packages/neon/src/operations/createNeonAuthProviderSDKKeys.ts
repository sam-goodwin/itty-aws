import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateNeonAuthProviderSDKKeysInput {
  project_id: string;
  auth_provider: "mock" | "stack" | "better_auth";
}
export const CreateNeonAuthProviderSDKKeysInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String,
    auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
  }).pipe(
    T.Http({ method: "POST", path: "/projects/auth/keys" }),
  ) as unknown as Schema.Codec<CreateNeonAuthProviderSDKKeysInput>;

// Output Schema
export interface CreateNeonAuthProviderSDKKeysOutput {
  auth_provider: "mock" | "stack" | "better_auth";
  auth_provider_project_id: string;
  pub_client_key: string;
  secret_server_key: string;
  jwks_url: string;
  schema_name: string;
  table_name: string;
  base_url?: string;
}
export const CreateNeonAuthProviderSDKKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
    auth_provider_project_id: Schema.String,
    pub_client_key: Schema.String,
    secret_server_key: Schema.String,
    jwks_url: Schema.String,
    schema_name: Schema.String,
    table_name: Schema.String,
    base_url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CreateNeonAuthProviderSDKKeysOutput>;

// The operation
/**
 * Create Auth Provider SDK keys
 *
 * Generates SDK or API Keys for the auth provider. These might be called different things depending
 * on the auth provider you're using, but are generally used for setting up the frontend and backend SDKs.
 */
export const createNeonAuthProviderSDKKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CreateNeonAuthProviderSDKKeysInput,
    outputSchema: CreateNeonAuthProviderSDKKeysOutput,
  }));
