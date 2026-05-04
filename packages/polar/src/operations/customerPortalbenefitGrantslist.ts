import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalbenefitGrantslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    benefit_id: Schema.optional(Schema.String),
    checkout_id: Schema.optional(Schema.String),
    order_id: Schema.optional(Schema.String),
    subscription_id: Schema.optional(Schema.String),
    member_id: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/benefit-grants/" }),
  );
export type CustomerPortalbenefitGrantslistInput =
  typeof CustomerPortalbenefitGrantslistInput.Type;

// Output Schema
export const CustomerPortalbenefitGrantslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(Schema.Unknown),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CustomerPortalbenefitGrantslistOutput =
  typeof CustomerPortalbenefitGrantslistOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }));
