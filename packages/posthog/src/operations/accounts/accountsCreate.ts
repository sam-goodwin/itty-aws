import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AccountsCreateInput {
  project_id: string;
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
}
export const AccountsCreateInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
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
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/accounts/" }),
) as unknown as Schema.Codec<AccountsCreateInput>;

// Output Schema
export interface AccountsCreateOutput {
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
}
export const AccountsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccountsCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
