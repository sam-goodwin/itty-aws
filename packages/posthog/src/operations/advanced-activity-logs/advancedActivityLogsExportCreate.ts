import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface AdvancedActivityLogsExportCreateInput {
  project_id: string;
  id?: string;
  user?: {
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
  unread?: boolean;
  team_id?: number | null;
  organization_id?: string | null;
  was_impersonated?: boolean | null;
  is_system?: boolean | null;
  client?: string | null;
  ip_address?: string | null;
  activity?: string;
  item_id?: string | null;
  scope?: string;
  detail?: unknown;
  created_at?: string;
}
export const AdvancedActivityLogsExportCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    user: Schema.optional(
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
    unread: Schema.optional(Schema.Boolean),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
    client: Schema.optional(Schema.NullOr(Schema.String)),
    ip_address: Schema.optional(Schema.NullOr(Schema.String)),
    activity: Schema.optional(Schema.String),
    item_id: Schema.optional(Schema.NullOr(Schema.String)),
    scope: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/advanced_activity_logs/export/",
    }),
  ) as unknown as Schema.Codec<AdvancedActivityLogsExportCreateInput>;

// Output Schema
export interface AdvancedActivityLogsExportCreateOutput {
  id?: string;
  user?: {
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
  unread?: boolean;
  team_id?: number | null;
  organization_id?: string | null;
  was_impersonated?: boolean | null;
  is_system?: boolean | null;
  client?: string | null;
  ip_address?: string | null;
  activity?: string;
  item_id?: string | null;
  scope?: string;
  detail?: unknown;
  created_at?: string;
}
export const AdvancedActivityLogsExportCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    user: Schema.optional(
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
    unread: Schema.optional(Schema.Boolean),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
    client: Schema.optional(Schema.NullOr(Schema.String)),
    ip_address: Schema.optional(Schema.NullOr(Schema.String)),
    activity: Schema.optional(Schema.String),
    item_id: Schema.optional(Schema.NullOr(Schema.String)),
    scope: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AdvancedActivityLogsExportCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const advancedActivityLogsExportCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AdvancedActivityLogsExportCreateInput,
    outputSchema: AdvancedActivityLogsExportCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
