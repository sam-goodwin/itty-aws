import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UpdateBranchNeonAuthOauthProviderInput {
  project_id: string;
  branch_id: string;
  oauth_provider_id: string;
  client_id?: string;
  client_secret?: string | Redacted.Redacted<string>;
  microsoft_tenant_id?: string;
}
export const UpdateBranchNeonAuthOauthProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    oauth_provider_id: Schema.String.pipe(T.PathParam()),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    microsoft_tenant_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
    }),
  ) as unknown as Schema.Codec<UpdateBranchNeonAuthOauthProviderInput>;

// Output Schema
export interface UpdateBranchNeonAuthOauthProviderOutput {
  id: "google" | "github" | "microsoft" | "vercel";
  type: "standard" | "shared";
  client_id?: string;
  client_secret?: Redacted.Redacted<string>;
}
export const UpdateBranchNeonAuthOauthProviderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literals(["google", "github", "microsoft", "vercel"]),
    type: Schema.Literals(["standard", "shared"]),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<UpdateBranchNeonAuthOauthProviderOutput>;

// The operation
/**
 * Update OAuth provider
 *
 * Updates a OAuth provider for the specified project.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 * @param oauth_provider_id - The OAuth provider ID
 */
export const updateBranchNeonAuthOauthProvider =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateBranchNeonAuthOauthProviderInput,
    outputSchema: UpdateBranchNeonAuthOauthProviderOutput,
  }));
