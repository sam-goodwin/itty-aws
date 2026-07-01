import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AddBranchNeonAuthOauthProviderInput {
  project_id: string;
  branch_id: string;
  id: "google" | "github" | "microsoft" | "vercel";
  client_id?: string;
  client_secret?: string | Redacted.Redacted<string>;
  microsoft_tenant_id?: string;
}
export const AddBranchNeonAuthOauthProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    id: Schema.Literals(["google", "github", "microsoft", "vercel"]),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    microsoft_tenant_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
    }),
  ) as unknown as Schema.Codec<AddBranchNeonAuthOauthProviderInput>;

// Output Schema
export interface AddBranchNeonAuthOauthProviderOutput {
  id: "google" | "github" | "microsoft" | "vercel";
  type: "standard" | "shared";
  client_id?: string;
  client_secret?: Redacted.Redacted<string>;
}
export const AddBranchNeonAuthOauthProviderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literals(["google", "github", "microsoft", "vercel"]),
    type: Schema.Literals(["standard", "shared"]),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<AddBranchNeonAuthOauthProviderOutput>;

// The operation
/**
 * Add an OAuth provider
 *
 * Adds an OAuth provider configuration to the specified branch's Neon Auth integration.
 * After adding, users can authenticate using the configured provider.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const addBranchNeonAuthOauthProvider =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AddBranchNeonAuthOauthProviderInput,
    outputSchema: AddBranchNeonAuthOauthProviderOutput,
  }));
