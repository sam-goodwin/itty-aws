import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AccountsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
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
    notebooks: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/accounts/{id}/",
    }),
  );
export type AccountsPartialUpdateInput = typeof AccountsPartialUpdateInput.Type;

// Output Schema
export const AccountsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AccountsPartialUpdateOutput =
  typeof AccountsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this account.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const accountsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsPartialUpdateInput,
    outputSchema: AccountsPartialUpdateOutput,
  }),
);
