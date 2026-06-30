import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOrganizationInput {
  org_id: string;
}
export const GetOrganizationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  org_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/organizations/{org_id}" }),
) as unknown as Schema.Codec<GetOrganizationInput>;

// Output Schema
export interface GetOrganizationOutput {
  id: string;
  name: string;
  handle: string;
  plan: string;
  created_at: string;
  managed_by: string;
  updated_at: string;
  allow_hipaa_projects?: boolean;
  require_mfa?: boolean;
}
export const GetOrganizationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  handle: Schema.String,
  plan: Schema.String,
  created_at: Schema.String,
  managed_by: Schema.String,
  updated_at: Schema.String,
  allow_hipaa_projects: Schema.optional(Schema.Boolean),
  require_mfa: Schema.optional(Schema.Boolean),
}) as unknown as Schema.Codec<GetOrganizationOutput>;

// The operation
/**
 * Retrieve organization details
 *
 * Retrieves details for the specified organization, including its name, plan, and configuration.
 *
 * @param org_id - The Neon organization ID
 */
export const getOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationInput,
  outputSchema: GetOrganizationOutput,
}));
