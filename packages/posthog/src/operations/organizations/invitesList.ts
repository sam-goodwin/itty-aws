import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InvitesListInput {
  organization_id: string;
  limit?: number;
  offset?: number;
}
export const InvitesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/invites/",
  }),
) as unknown as Schema.Codec<InvitesListInput>;

// Output Schema
export interface InvitesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const InvitesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
      }),
    ),
  ),
}) as unknown as Schema.Codec<InvitesListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const invitesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvitesListInput,
  outputSchema: InvitesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
