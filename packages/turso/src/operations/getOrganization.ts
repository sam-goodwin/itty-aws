import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetOrganizationInput {
  organizationSlug: string;
}
export const GetOrganizationInput = /*@__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/organizations/{organizationSlug}" }),
) as unknown as Schema.Codec<GetOrganizationInput>;

// Output Schema
export interface GetOrganizationOutput {
  organization?: {
    name?: string;
    slug?: string;
    type?: "personal" | "team";
    overages?: boolean;
    require_mfa?: boolean;
    blocked_reads?: boolean;
    blocked_writes?: boolean;
    plan_id?: string;
    plan_timeline?: string;
    platform?: string;
  };
}
export const GetOrganizationOutput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      slug: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["personal", "team"])),
      overages: Schema.optional(Schema.Boolean),
      require_mfa: Schema.optional(Schema.Boolean),
      blocked_reads: Schema.optional(Schema.Boolean),
      blocked_writes: Schema.optional(Schema.Boolean),
      plan_id: Schema.optional(Schema.String),
      plan_timeline: Schema.optional(Schema.String),
      platform: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<GetOrganizationOutput>;

// The operation
/**
 * Retrieve Organization
 *
 * Retrieve details of a specific organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const getOrganization = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationInput,
  outputSchema: GetOrganizationOutput,
  errors: [NotFound] as const,
}));
