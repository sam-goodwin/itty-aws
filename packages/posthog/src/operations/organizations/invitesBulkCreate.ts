import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InvitesBulkCreateInput {
  organization_id: string;
  id?: string;
  target_email?: string;
  first_name?: string;
  emailing_attempt_made?: boolean;
  level?: 1 | 8 | 15;
  is_expired?: boolean;
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
  updated_at?: string;
  message?: string | null;
  private_project_access?: unknown;
  send_email?: boolean;
  combine_pending_invites?: boolean;
}
export const InvitesBulkCreateInput = /*@__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  target_email: Schema.optional(Schema.String),
  first_name: Schema.optional(Schema.String),
  emailing_attempt_made: Schema.optional(Schema.Boolean),
  level: Schema.optional(Schema.Literals([1, 8, 15])),
  is_expired: Schema.optional(Schema.Boolean),
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
  updated_at: Schema.optional(Schema.String),
  message: Schema.optional(Schema.NullOr(Schema.String)),
  private_project_access: Schema.optional(Schema.Unknown),
  send_email: Schema.optional(Schema.Boolean),
  combine_pending_invites: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/organizations/{organization_id}/invites/bulk/",
  }),
) as unknown as Schema.Codec<InvitesBulkCreateInput>;

// Output Schema
export type InvitesBulkCreateOutput = void;
export const InvitesBulkCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InvitesBulkCreateOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const invitesBulkCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvitesBulkCreateInput,
  outputSchema: InvitesBulkCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
