import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetOrganizationInput {
  organization: string;
}
export const GetOrganizationInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/organizations/{organization}" }),
) as unknown as Schema.Codec<GetOrganizationInput>;

// Output Schema
export interface GetOrganizationOutput {
  id: string;
  name: string;
  billing_email: string;
  created_at: string;
  updated_at: string;
  plan: string;
  valid_billing_info: boolean;
  sso: boolean;
  sso_directory: boolean;
  single_tenancy: boolean;
  managed_tenancy: boolean;
  has_past_due_invoices?: boolean | null;
  database_count: number;
  sso_portal_url?: string | null;
  features: Record<string, unknown>;
  idp_managed_roles: boolean;
  invoice_budget_amount: string;
  keyspace_shard_limit: number;
  has_card: boolean;
  payment_info_required: boolean;
}
export const GetOrganizationOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  billing_email: Schema.String,
  created_at: Schema.String,
  updated_at: Schema.String,
  plan: Schema.String,
  valid_billing_info: Schema.Boolean,
  sso: Schema.Boolean,
  sso_directory: Schema.Boolean,
  single_tenancy: Schema.Boolean,
  managed_tenancy: Schema.Boolean,
  has_past_due_invoices: Schema.optional(Schema.NullOr(Schema.Boolean)),
  database_count: Schema.Number,
  sso_portal_url: Schema.optional(Schema.NullOr(Schema.String)),
  features: Schema.Record(Schema.String, Schema.Unknown),
  idp_managed_roles: Schema.Boolean,
  invoice_budget_amount: Schema.String,
  keyspace_shard_limit: Schema.Number,
  has_card: Schema.Boolean,
  payment_info_required: Schema.Boolean,
}) as unknown as Schema.Codec<GetOrganizationOutput>;

// The operation
/**
 * Get an organization
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 */
export const getOrganization = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationInput,
  outputSchema: GetOrganizationOutput,
  errors: [Forbidden, NotFound] as const,
}));
