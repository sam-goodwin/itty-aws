import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AddBranchNeonAuthTrustedDomainInput {
  project_id: string;
  branch_id: string;
  domain: string;
  auth_provider: "mock" | "stack" | "better_auth";
}
export const AddBranchNeonAuthTrustedDomainInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    domain: Schema.String,
    auth_provider: Schema.Literals(["mock", "stack", "better_auth"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/auth/domains",
    }),
  ) as unknown as Schema.Codec<AddBranchNeonAuthTrustedDomainInput>;

// Output Schema
export type AddBranchNeonAuthTrustedDomainOutput = void;
export const AddBranchNeonAuthTrustedDomainOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddBranchNeonAuthTrustedDomainOutput>;

// The operation
/**
 * Add domain to redirect_uri whitelist
 *
 * Adds a domain to the redirect URI whitelist for the specified branch.
 * Only domains in this list are permitted as redirect targets after authentication.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const addBranchNeonAuthTrustedDomain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AddBranchNeonAuthTrustedDomainInput,
    outputSchema: AddBranchNeonAuthTrustedDomainOutput,
  }));
