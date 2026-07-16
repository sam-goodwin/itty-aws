import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ApprovalPoliciesCreateInput {
  project_id: string;
  id?: string;
  action_key?: string;
  conditions?: unknown;
  approver_config?: unknown;
  allow_self_approve?: boolean;
  bypass_org_membership_levels?: unknown;
  bypass_roles?: string[];
  expires_after?: string;
  enabled?: boolean;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  created_at?: string;
  updated_at?: string | null;
}
export const ApprovalPoliciesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    action_key: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Unknown),
    approver_config: Schema.optional(Schema.Unknown),
    allow_self_approve: Schema.optional(Schema.Boolean),
    bypass_org_membership_levels: Schema.optional(Schema.Unknown),
    bypass_roles: Schema.optional(Schema.Array(Schema.String)),
    expires_after: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/approval_policies/",
    }),
  ) as unknown as Schema.Codec<ApprovalPoliciesCreateInput>;

// Output Schema
export interface ApprovalPoliciesCreateOutput {
  id?: string;
  action_key?: string;
  conditions?: unknown;
  approver_config?: unknown;
  allow_self_approve?: boolean;
  bypass_org_membership_levels?: unknown;
  bypass_roles?: string[];
  expires_after?: string;
  enabled?: boolean;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  created_at?: string;
  updated_at?: string | null;
}
export const ApprovalPoliciesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    action_key: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Unknown),
    approver_config: Schema.optional(Schema.Unknown),
    allow_self_approve: Schema.optional(Schema.Boolean),
    bypass_org_membership_levels: Schema.optional(Schema.Unknown),
    bypass_roles: Schema.optional(Schema.Array(Schema.String)),
    expires_after: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ApprovalPoliciesCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const approvalPoliciesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApprovalPoliciesCreateInput,
  outputSchema: ApprovalPoliciesCreateOutput,
}));
