import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListOAuthApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    name_query: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/oauth_applications" }));
export type ListOAuthApplicationsInput = typeof ListOAuthApplicationsInput.Type;

// Output Schema
export const ListOAuthApplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["oauth_application"]),
        id: Schema.String,
        instance_id: Schema.String,
        name: Schema.String,
        client_id: Schema.String,
        client_uri: Schema.NullOr(Schema.String),
        client_image_url: Schema.NullOr(Schema.String),
        dynamically_registered: Schema.Boolean,
        consent_screen_enabled: Schema.Boolean,
        pkce_required: Schema.Boolean,
        public: Schema.Boolean,
        scopes: Schema.String,
        redirect_uris: Schema.Array(Schema.String),
        callback_url: Schema.String,
        authorize_url: Schema.String,
        token_fetch_url: Schema.String,
        user_info_url: Schema.String,
        discovery_url: Schema.String,
        token_introspection_url: Schema.String,
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    total_count: Schema.Number,
  });
export type ListOAuthApplicationsOutput =
  typeof ListOAuthApplicationsOutput.Type;

// The operation
/**
 * Get a list of OAuth applications for an instance
 *
 * This request returns the list of OAuth applications for an instance.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 * The OAuth applications are ordered by descending creation date.
 * Most recent OAuth applications will be returned first.
 *
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param order_by - Allows to return OAuth applications in a particular order.
At the moment, you can order the returned OAuth applications by their `created_at` and `name`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want OAuth applications to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied. We only support one `order_by` parameter, and if multiple `order_by` parameters are provided, we will only keep the first one. For example,
if you pass `order_by=name&order_by=created_at`, we will consider only the first `order_by` parameter, which is `name`. The `created_at` parameter will be ignored in this case.
 * @param name_query - Returns OAuth applications with names that match the given query, via case-insensitive partial match.
 */
export const ListOAuthApplications = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOAuthApplicationsInput,
    outputSchema: ListOAuthApplicationsOutput,
    errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
  }),
);
