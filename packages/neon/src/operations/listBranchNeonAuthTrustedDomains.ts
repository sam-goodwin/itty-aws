import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListBranchNeonAuthTrustedDomainsInput {
  project_id: string;
  branch_id: string;
}
export const ListBranchNeonAuthTrustedDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/domains",
    }),
  ) as unknown as Schema.Codec<ListBranchNeonAuthTrustedDomainsInput>;

// Output Schema
export interface ListBranchNeonAuthTrustedDomainsOutput {
  domains: {
    domain: string;
    auth_provider: "mock" | "stack" | "better_auth";
  }[];
}
export const ListBranchNeonAuthTrustedDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.Array(
      Schema.Struct({
        domain: Schema.String,
        auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchNeonAuthTrustedDomainsOutput>;

// The operation
/**
 * List domains in redirect_uri whitelist
 *
 * Lists the trusted domains in the redirect URI whitelist for the specified branch.
 * Only domains in this list are permitted as redirect targets after authentication.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const listBranchNeonAuthTrustedDomains =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListBranchNeonAuthTrustedDomainsInput,
    outputSchema: ListBranchNeonAuthTrustedDomainsOutput,
  }));
