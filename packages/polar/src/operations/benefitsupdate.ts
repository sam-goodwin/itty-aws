import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BenefitsupdateInput {
  id: string;
  metadata?: Record<string, string | number | boolean>;
  description?: string | null;
  visibility?: "draft" | "private" | "public" | null;
  type: string;
  properties?: {
    slack_integration_id: string;
    channel_name_template: string;
    private?: boolean;
    welcome_message?: string | null;
    archive_on_revoke?: boolean;
    team_invitees?: ReadonlyArray<string>;
  } | null;
}
export const BenefitsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
  ),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  visibility: Schema.optional(
    Schema.NullOr(Schema.Literals(["draft", "private", "public"])),
  ),
  type: Schema.String,
  properties: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        slack_integration_id: Schema.String,
        channel_name_template: Schema.String,
        private: Schema.optional(Schema.Boolean),
        welcome_message: Schema.optional(Schema.NullOr(Schema.String)),
        archive_on_revoke: Schema.optional(Schema.Boolean),
        team_invitees: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  ),
}).pipe(
  T.Http({ method: "PATCH", path: "/v1/benefits/{id}" }),
) as unknown as Schema.Codec<BenefitsupdateInput>;

// Output Schema
export type BenefitsupdateOutput =
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
    };
export const BenefitsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<BenefitsupdateOutput>;

// The operation
/**
 * Update Benefit
 *
 * Update a benefit.
 * **Scopes**: `benefits:write`
 */
export const benefitsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsupdateInput,
  outputSchema: BenefitsupdateOutput,
}));
