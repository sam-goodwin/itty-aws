import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalbenefitGrantslistInput {
  query?: string | null;
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
  benefit_id?: string | ReadonlyArray<string> | null;
  checkout_id?: string | ReadonlyArray<string> | null;
  order_id?: string | ReadonlyArray<string> | null;
  subscription_id?: string | ReadonlyArray<string> | null;
  member_id?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "granted_at"
    | "-granted_at"
    | "type"
    | "-type"
    | "organization"
    | "-organization"
    | "product_benefit"
    | "-product_benefit"
  > | null;
}
export const CustomerPortalbenefitGrantslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.NullOr(Schema.String)),
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
    benefit_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    checkout_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    order_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    subscription_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    member_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "granted_at",
            "-granted_at",
            "type",
            "-type",
            "organization",
            "-organization",
            "product_benefit",
            "-product_benefit",
          ]),
        ),
      ),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/benefit-grants/" }),
  ) as unknown as Schema.Codec<CustomerPortalbenefitGrantslistInput>;

// Output Schema
export interface CustomerPortalbenefitGrantslistOutput {
  items: ReadonlyArray<unknown>;
  pagination: { total_count: number; max_page: number };
}
export const CustomerPortalbenefitGrantslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(Schema.Unknown),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<CustomerPortalbenefitGrantslistOutput>;

// The operation
/**
 * List Benefit Grants
 *
 * List benefits grants of the authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param query - Filter by benefit description.
 * @param type - Filter by benefit type.
 * @param benefit_id - Filter by benefit ID.
 * @param checkout_id - Filter by checkout ID.
 * @param order_id - Filter by order ID.
 * @param subscription_id - Filter by subscription ID.
 * @param member_id - Filter by member ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const customerPortalbenefitGrantslist =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalbenefitGrantslistInput,
    outputSchema: CustomerPortalbenefitGrantslistOutput,
  }));
