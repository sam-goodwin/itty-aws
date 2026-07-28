import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BenefitslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  type?:
    | "custom"
    | "discord"
    | "github_repository"
    | "downloadables"
    | "license_keys"
    | "meter_credit"
    | "feature_flag"
    | "slack_shared_channel"
    | ReadonlyArray<
        | "custom"
        | "discord"
        | "github_repository"
        | "downloadables"
        | "license_keys"
        | "meter_credit"
        | "feature_flag"
        | "slack_shared_channel"
      >
    | null;
  id?: string | ReadonlyArray<string> | null;
  exclude_id?: string | ReadonlyArray<string> | null;
  query?: string | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "description"
    | "-description"
    | "type"
    | "-type"
    | "user_order"
    | "-user_order"
  > | null;
  metadata?: Record<
    string,
    | string
    | number
    | boolean
    | ReadonlyArray<string>
    | ReadonlyArray<number>
    | ReadonlyArray<boolean>
  > | null;
}
export const BenefitslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  type: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals([
          "custom",
          "discord",
          "github_repository",
          "downloadables",
          "license_keys",
          "meter_credit",
          "feature_flag",
          "slack_shared_channel",
        ]),
        Schema.Array(
          Schema.Literals([
            "custom",
            "discord",
            "github_repository",
            "downloadables",
            "license_keys",
            "meter_credit",
            "feature_flag",
            "slack_shared_channel",
          ]),
        ),
      ]),
    ),
  ),
  id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  exclude_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "description",
          "-description",
          "type",
          "-type",
          "user_order",
          "-user_order",
        ]),
      ),
    ),
  ),
  metadata: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Union([
          Schema.String,
          Schema.Number,
          Schema.Boolean,
          Schema.Array(Schema.String),
          Schema.Array(Schema.Number),
          Schema.Array(Schema.Boolean),
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/benefits/" }),
) as unknown as Schema.Codec<BenefitslistInput>;

// Output Schema
export interface BenefitslistOutput {
  items: ReadonlyArray<
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
          expires: { ttl: number; timeframe: "year" | "month" | "day" } | null;
          activations: { limit: number; enable_customer_admin: boolean } | null;
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
      }
  >;
  pagination: { total_count: number; max_page: number };
}
export const BenefitslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(Schema.Unknown),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<BenefitslistOutput>;

// The operation
/**
 * List Benefits
 *
 * List benefits.
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param type - Filter by benefit type.
 * @param id - Filter by benefit IDs.
 * @param exclude_id - Exclude benefits with these IDs.
 * @param query - Filter by description.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const benefitslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitslistInput,
  outputSchema: BenefitslistOutput,
}));
