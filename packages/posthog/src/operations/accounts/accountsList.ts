import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AccountsListInput {
  project_id: string;
  account_executive?: string;
  account_owner?: string;
  all_roles_unassigned?: boolean;
  csm?: string;
  limit?: number;
  offset?: number;
  ordering?:
    | "-created_at"
    | "-name"
    | "-updated_at"
    | "created_at"
    | "name"
    | "updated_at";
  search?: string;
  tags?: string;
}
export const AccountsListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  account_executive: Schema.optional(Schema.String),
  account_owner: Schema.optional(Schema.String),
  all_roles_unassigned: Schema.optional(Schema.Boolean),
  csm: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  ordering: Schema.optional(
    Schema.Literals([
      "-created_at",
      "-name",
      "-updated_at",
      "created_at",
      "name",
      "updated_at",
    ]),
  ),
  search: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/accounts/" }),
) as unknown as Schema.Codec<AccountsListInput>;

// Output Schema
export interface AccountsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    name: string;
    external_id?: string | null;
    properties?: {
      csm?: { id: number; email: string } | null;
      account_executive?: { id: number; email: string } | null;
      account_owner?: { id: number; email: string } | null;
      stripe_customer_id?: string | null;
      hubspot_deal_id?: string | null;
      billing_id?: string | null;
      sfdc_id?: string | null;
      zendesk_id?: string | null;
      slack_channel_id?: string | null;
      usage_dashboard_link?: string | null;
    } | null;
    tags?: string[];
    notebooks: string[];
    created_at: string;
    created_by: number | null;
    updated_at: string | null;
  }[];
}
export const AccountsListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      external_id: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            csm: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  id: Schema.Number,
                  email: Schema.String,
                }),
              ),
            ),
            account_executive: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  id: Schema.Number,
                  email: Schema.String,
                }),
              ),
            ),
            account_owner: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  id: Schema.Number,
                  email: Schema.String,
                }),
              ),
            ),
            stripe_customer_id: Schema.optional(Schema.NullOr(Schema.String)),
            hubspot_deal_id: Schema.optional(Schema.NullOr(Schema.String)),
            billing_id: Schema.optional(Schema.NullOr(Schema.String)),
            sfdc_id: Schema.optional(Schema.NullOr(Schema.String)),
            zendesk_id: Schema.optional(Schema.NullOr(Schema.String)),
            slack_channel_id: Schema.optional(Schema.NullOr(Schema.String)),
            usage_dashboard_link: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      ),
      tags: Schema.optional(Schema.Array(Schema.String)),
      notebooks: Schema.Array(Schema.String),
      created_at: Schema.String,
      created_by: Schema.NullOr(Schema.Number),
      updated_at: Schema.NullOr(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AccountsListOutput>;

// The operation
/**
 *
 * @param account_executive - Filter by account executive. Use 'unassigned' or an integer user id.
 * @param account_owner - Filter by account owner. Use 'unassigned' or an integer user id.
 * @param all_roles_unassigned - When true, returns only accounts where CSM, account executive, and account owner are all unset.
 * @param csm - Filter by CSM. Use 'unassigned' for accounts with no CSM, or an integer user id.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param ordering - Sort order. Defaults to '-created_at'.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Case-insensitive substring search across account name and external ID.
 * @param tags - JSON-encoded array of tag names to filter by, e.g. `["enterprise","priority"]`. Returns accounts that have any of the listed tags. Malformed values (not a JSON-encoded list of strings) return a 400.
 */
export const accountsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
}));
