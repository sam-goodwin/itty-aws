import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BenefitGrantslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  is_granted?: boolean | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "granted_at"
    | "-granted_at"
    | "revoked_at"
    | "-revoked_at"
  > | null;
}
export const BenefitGrantslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    customer_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    external_customer_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    is_granted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "created_at",
            "-created_at",
            "granted_at",
            "-granted_at",
            "revoked_at",
            "-revoked_at",
          ]),
        ),
      ),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/benefit-grants/" }),
) as unknown as Schema.Codec<BenefitGrantslistInput>;

// Output Schema
export interface BenefitGrantslistOutput {
  items: ReadonlyArray<{
    created_at: string;
    modified_at: string | null;
    id: string;
    granted_at?: string | null;
    is_granted: boolean;
    revoked_at?: string | null;
    is_revoked: boolean;
    subscription_id: string | null;
    order_id: string | null;
    customer_id: string;
    member_id?: string | null;
    benefit_id: string;
    error?: { message: string; type: string; timestamp: string } | null;
    customer: unknown;
    member?: {
      id: string;
      created_at: string;
      modified_at: string | null;
      customer_id: string;
      email: string;
      name: string | null;
      external_id: string | null;
      role: "owner" | "billing_manager" | "member";
    } | null;
    benefit:
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: { note: string | null | null };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            guild_id: string;
            role_id: string;
            kick_member: boolean;
            guild_token: string;
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            repository_owner: string;
            repository_name: string;
            permission: "pull" | "triage" | "push" | "maintain" | "admin";
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            archived: Record<string, boolean>;
            files: ReadonlyArray<string>;
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            prefix: string | null;
            expires: {
              ttl: number;
              timeframe: "year" | "month" | "day";
            } | null;
            activations: {
              limit: number;
              enable_customer_admin: boolean;
            } | null;
            limit_usage: number | null;
          };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: { units: number; rollover: boolean; meter_id: string };
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {};
          visibility_configurable: boolean;
        }
      | {
          id: string;
          created_at: string;
          modified_at: string | null;
          type: string;
          description: string;
          selectable: boolean;
          deletable: boolean;
          is_deleted: boolean;
          organization_id: string;
          metadata: Record<string, string | number | boolean>;
          visibility: "draft" | "private" | "public";
          properties: {
            slack_integration_id: string;
            channel_name_template: string;
            private?: boolean;
            welcome_message?: string | null;
            archive_on_revoke?: boolean;
            team_invitees?: ReadonlyArray<string>;
          };
          visibility_configurable: boolean;
        };
    properties:
      | {
          account_id?: string | null;
          guild_id?: string;
          role_id?: string;
          granted_account_id?: string;
        }
      | {
          account_id?: string | null;
          repository_owner?: string;
          repository_name?: string;
          permission?: "pull" | "triage" | "push" | "maintain" | "admin";
          granted_account_id?: string;
        }
      | { files?: ReadonlyArray<string> }
      | {
          user_provided_key?: string;
          license_key_id?: string;
          display_key?: string;
        }
      | {}
      | {
          invited_email?: string;
          channel_id?: string;
          channel_name?: string;
          invite_id?: string;
          invite_url?: string;
          connected_team_id?: string;
        };
  }>;
  pagination: { total_count: number; max_page: number };
}
export const BenefitGrantslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        id: Schema.String,
        granted_at: Schema.optional(Schema.NullOr(Schema.String)),
        is_granted: Schema.Boolean,
        revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
        is_revoked: Schema.Boolean,
        subscription_id: Schema.NullOr(Schema.String),
        order_id: Schema.NullOr(Schema.String),
        customer_id: Schema.String,
        member_id: Schema.optional(Schema.NullOr(Schema.String)),
        benefit_id: Schema.String,
        error: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              message: Schema.String,
              type: Schema.String,
              timestamp: Schema.String,
            }),
          ),
        ),
        customer: Schema.Unknown,
        member: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.String,
              created_at: Schema.String,
              modified_at: Schema.NullOr(Schema.String),
              customer_id: Schema.String,
              email: Schema.String,
              name: Schema.NullOr(Schema.String),
              external_id: Schema.NullOr(Schema.String),
              role: Schema.Literals(["owner", "billing_manager", "member"]),
            }),
          ),
        ),
        benefit: Schema.Unknown,
        properties: Schema.Union([
          Schema.Struct({
            account_id: Schema.optional(Schema.NullOr(Schema.String)),
            guild_id: Schema.optional(Schema.String),
            role_id: Schema.optional(Schema.String),
            granted_account_id: Schema.optional(Schema.String),
          }),
          Schema.Struct({
            account_id: Schema.optional(Schema.NullOr(Schema.String)),
            repository_owner: Schema.optional(Schema.String),
            repository_name: Schema.optional(Schema.String),
            permission: Schema.optional(
              Schema.Literals(["pull", "triage", "push", "maintain", "admin"]),
            ),
            granted_account_id: Schema.optional(Schema.String),
          }),
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
          Schema.Struct({
            user_provided_key: Schema.optional(Schema.String),
            license_key_id: Schema.optional(Schema.String),
            display_key: Schema.optional(Schema.String),
          }),
          Schema.Struct({}),
          Schema.Struct({
            invited_email: Schema.optional(Schema.String),
            channel_id: Schema.optional(Schema.String),
            channel_name: Schema.optional(Schema.String),
            invite_id: Schema.optional(Schema.String),
            invite_url: Schema.optional(Schema.String),
            connected_team_id: Schema.optional(Schema.String),
          }),
        ]),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<BenefitGrantslistOutput>;

// The operation
/**
 * List Benefit Grants
 *
 * List benefit grants across all benefits accessible to the authenticated subject.
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param is_granted - Filter by granted status. If `true`, only granted benefits will be returned. If `false`, only revoked benefits will be returned.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const benefitGrantslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitGrantslistInput,
  outputSchema: BenefitGrantslistOutput,
}));
