import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ListBranchNeonAuthOauthProvidersInput {
  project_id: string;
  branch_id: string;
}
export const ListBranchNeonAuthOauthProvidersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
    }),
  ) as unknown as Schema.Codec<ListBranchNeonAuthOauthProvidersInput>;

// Output Schema
export interface ListBranchNeonAuthOauthProvidersOutput {
  providers: {
    id: "google" | "github" | "microsoft" | "vercel";
    type: "standard" | "shared";
    client_id?: string;
    client_secret?: Redacted.Redacted<string>;
  }[];
}
export const ListBranchNeonAuthOauthProvidersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providers: Schema.Array(
      Schema.Struct({
        id: Schema.Literals(["google", "github", "microsoft", "vercel"]),
        type: Schema.Literals(["standard", "shared"]),
        client_id: Schema.optional(Schema.String),
        client_secret: Schema.optional(SensitiveOutputString),
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchNeonAuthOauthProvidersOutput>;

// The operation
/**
 * List OAuth providers for the branch
 *
 * Lists the OAuth providers configured for the specified branch's Neon Auth integration.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const listBranchNeonAuthOauthProviders =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListBranchNeonAuthOauthProvidersInput,
    outputSchema: ListBranchNeonAuthOauthProvidersOutput,
  }));
