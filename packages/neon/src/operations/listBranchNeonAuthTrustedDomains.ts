import * as Schema from "effect/Schema";
import { NeonAuthRedirectURIWhitelistDomainSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListBranchNeonAuthTrustedDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/domains",
    }),
  );
export type ListBranchNeonAuthTrustedDomainsInput =
  typeof ListBranchNeonAuthTrustedDomainsInput.Type;

// Output Schema
export const ListBranchNeonAuthTrustedDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.Array(
      Schema.suspend(() => NeonAuthRedirectURIWhitelistDomainSchema),
    ),
  });
export type ListBranchNeonAuthTrustedDomainsOutput =
  typeof ListBranchNeonAuthTrustedDomainsOutput.Type;

// The operation
/**
 * List domains in redirect_uri whitelist
 *
 * Lists the domains in the redirect_uri whitelist for the specified project.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const listBranchNeonAuthTrustedDomains =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListBranchNeonAuthTrustedDomainsInput,
    outputSchema: ListBranchNeonAuthTrustedDomainsOutput,
  }));
