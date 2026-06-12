import * as Schema from "effect/Schema";
import { NeonAuthSupportedAuthProviderSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AddBranchNeonAuthTrustedDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    domain: Schema.String,
    auth_provider: Schema.suspend(() => NeonAuthSupportedAuthProviderSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/auth/domains",
    }),
  );
export type AddBranchNeonAuthTrustedDomainInput =
  typeof AddBranchNeonAuthTrustedDomainInput.Type;

// Output Schema
export const AddBranchNeonAuthTrustedDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddBranchNeonAuthTrustedDomainOutput =
  typeof AddBranchNeonAuthTrustedDomainOutput.Type;

// The operation
/**
 * Add domain to redirect_uri whitelist
 *
 * Adds a domain to the redirect_uri whitelist for the specified project.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const addBranchNeonAuthTrustedDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AddBranchNeonAuthTrustedDomainInput,
    outputSchema: AddBranchNeonAuthTrustedDomainOutput,
  }));
