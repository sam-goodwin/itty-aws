import * as Schema from "effect/Schema";
import {
  NeonAuthDeleteDomainFromRedirectURIWhitelistItemSchema,
  NeonAuthSupportedAuthProviderSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DeleteBranchNeonAuthTrustedDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    auth_provider: Schema.suspend(() => NeonAuthSupportedAuthProviderSchema),
    domains: Schema.Array(
      Schema.suspend(
        () => NeonAuthDeleteDomainFromRedirectURIWhitelistItemSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/projects/{project_id}/branches/{branch_id}/auth/domains",
    }),
  );
export type DeleteBranchNeonAuthTrustedDomainInput =
  typeof DeleteBranchNeonAuthTrustedDomainInput.Type;

// Output Schema
export const DeleteBranchNeonAuthTrustedDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBranchNeonAuthTrustedDomainOutput =
  typeof DeleteBranchNeonAuthTrustedDomainOutput.Type;

// The operation
/**
 * Delete domain from redirect_uri whitelist
 *
 * Deletes a domain from the redirect_uri whitelist for the specified project.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const deleteBranchNeonAuthTrustedDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteBranchNeonAuthTrustedDomainInput,
    outputSchema: DeleteBranchNeonAuthTrustedDomainOutput,
  }));
