import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationsInput {}
export const ListOrganizationsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v1/organizations" }),
) as unknown as Schema.Codec<ListOrganizationsInput>;

// Output Schema
export type ListOrganizationsOutput = {
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
}[];
export const ListOrganizationsOutput = /*@__PURE__*/ Schema.Array(
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
) as unknown as Schema.Codec<ListOrganizationsOutput>;

// The operation
/**
 * List Organizations
 *
 * Returns a list of organizations the authenticated user owns or is a member of.
 */
export const listOrganizations = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOrganizationsInput,
  outputSchema: ListOrganizationsOutput,
}));
