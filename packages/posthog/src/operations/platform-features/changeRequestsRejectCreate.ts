import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ChangeRequestsRejectCreateInput {
  id: string;
  project_id: string;
  action_key?: string;
  action_version?: number;
  resource_type?: string;
  resource_id?: string | null;
  intent?: unknown;
  intent_display?: unknown;
  policy_snapshot?: unknown;
  validation_status?: "valid" | "invalid" | "expired" | "stale";
  validation_errors?: unknown;
  validated_at?: string | null;
  state?:
    | "pending"
    | "approved"
    | "applied"
    | "rejected"
    | "expired"
    | "failed";
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
  applied_by?: {
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
  expires_at?: string;
  applied_at?: string | null;
  apply_error?: string;
  result_data?: unknown;
  approvals?: Record<string, unknown>[];
  can_approve?: boolean;
  can_cancel?: boolean;
  is_requester?: boolean;
  user_decision?: string | null;
}
export const ChangeRequestsRejectCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    action_key: Schema.optional(Schema.String),
    action_version: Schema.optional(Schema.Number),
    resource_type: Schema.optional(Schema.String),
    resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    intent: Schema.optional(Schema.Unknown),
    intent_display: Schema.optional(Schema.Unknown),
    policy_snapshot: Schema.optional(Schema.Unknown),
    validation_status: Schema.optional(
      Schema.Literals(["valid", "invalid", "expired", "stale"]),
    ),
    validation_errors: Schema.optional(Schema.Unknown),
    validated_at: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.Literals([
        "pending",
        "approved",
        "applied",
        "rejected",
        "expired",
        "failed",
      ]),
    ),
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
    applied_by: Schema.optional(
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
    expires_at: Schema.optional(Schema.String),
    applied_at: Schema.optional(Schema.NullOr(Schema.String)),
    apply_error: Schema.optional(Schema.String),
    result_data: Schema.optional(Schema.Unknown),
    approvals: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    can_approve: Schema.optional(Schema.Boolean),
    can_cancel: Schema.optional(Schema.Boolean),
    is_requester: Schema.optional(Schema.Boolean),
    user_decision: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/change_requests/{id}/reject/",
    }),
  ) as unknown as Schema.Codec<ChangeRequestsRejectCreateInput>;

// Output Schema
export interface ChangeRequestsRejectCreateOutput {
  id?: string;
  action_key?: string;
  action_version?: number;
  resource_type?: string;
  resource_id?: string | null;
  intent?: unknown;
  intent_display?: unknown;
  policy_snapshot?: unknown;
  validation_status?: "valid" | "invalid" | "expired" | "stale";
  validation_errors?: unknown;
  validated_at?: string | null;
  state?:
    | "pending"
    | "approved"
    | "applied"
    | "rejected"
    | "expired"
    | "failed";
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
  applied_by?: {
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
  expires_at?: string;
  applied_at?: string | null;
  apply_error?: string;
  result_data?: unknown;
  approvals?: Record<string, unknown>[];
  can_approve?: boolean;
  can_cancel?: boolean;
  is_requester?: boolean;
  user_decision?: string | null;
}
export const ChangeRequestsRejectCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    action_key: Schema.optional(Schema.String),
    action_version: Schema.optional(Schema.Number),
    resource_type: Schema.optional(Schema.String),
    resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    intent: Schema.optional(Schema.Unknown),
    intent_display: Schema.optional(Schema.Unknown),
    policy_snapshot: Schema.optional(Schema.Unknown),
    validation_status: Schema.optional(
      Schema.Literals(["valid", "invalid", "expired", "stale"]),
    ),
    validation_errors: Schema.optional(Schema.Unknown),
    validated_at: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.Literals([
        "pending",
        "approved",
        "applied",
        "rejected",
        "expired",
        "failed",
      ]),
    ),
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
    applied_by: Schema.optional(
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
    expires_at: Schema.optional(Schema.String),
    applied_at: Schema.optional(Schema.NullOr(Schema.String)),
    apply_error: Schema.optional(Schema.String),
    result_data: Schema.optional(Schema.Unknown),
    approvals: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    can_approve: Schema.optional(Schema.Boolean),
    can_cancel: Schema.optional(Schema.Boolean),
    is_requester: Schema.optional(Schema.Boolean),
    user_decision: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ChangeRequestsRejectCreateOutput>;

// The operation
/**
 * Reject a change request.
 *
 * @param id - A UUID string identifying this change request.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const changeRequestsRejectCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChangeRequestsRejectCreateInput,
    outputSchema: ChangeRequestsRejectCreateOutput,
  }),
);
