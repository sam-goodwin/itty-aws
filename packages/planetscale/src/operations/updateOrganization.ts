import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface UpdateOrganizationInput {
  organization: string;
  billing_email?: string;
  idp_managed_roles?: boolean;
  invoice_budget_amount?: number;
}
export const UpdateOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    billing_email: Schema.optional(Schema.String),
    idp_managed_roles: Schema.optional(Schema.Boolean),
    invoice_budget_amount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "PATCH", path: "/organizations/{organization}" }),
  ) as unknown as Schema.Codec<UpdateOrganizationInput>;

// Output Schema
export interface UpdateOrganizationOutput {
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
export const UpdateOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<UpdateOrganizationOutput>;

// The operation
/**
 * Update an organization
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param billing_email - The billing email for the organization
 * @param idp_managed_roles - Whether or not the IdP provider is be responsible for managing roles in PlanetScale
 * @param invoice_budget_amount - The expected monthly budget for the organization
 */
export const updateOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateOrganizationInput,
  outputSchema: UpdateOrganizationOutput,
  errors: [Forbidden, NotFound] as const,
}));
