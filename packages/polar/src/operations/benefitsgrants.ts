import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitsgrantsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  is_granted: Schema.optional(Schema.String),
  customer_id: Schema.optional(Schema.String),
  member_id: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/v1/benefits/{id}/grants" }));
export type BenefitsgrantsInput = typeof BenefitsgrantsInput.Type;

// Output Schema
export const BenefitsgrantsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      id: Schema.String,
      granted_at: Schema.optional(Schema.Unknown),
      is_granted: Schema.Boolean,
      revoked_at: Schema.optional(Schema.Unknown),
      is_revoked: Schema.Boolean,
      subscription_id: Schema.Unknown,
      order_id: Schema.Unknown,
      customer_id: Schema.String,
      member_id: Schema.optional(Schema.Unknown),
      benefit_id: Schema.String,
      error: Schema.optional(Schema.Unknown),
      customer: Schema.Unknown,
      member: Schema.optional(Schema.Unknown),
      benefit: Schema.Unknown,
      properties: Schema.Unknown,
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type BenefitsgrantsOutput = typeof BenefitsgrantsOutput.Type;

// The operation
/**
 * List Benefit Grants
 *
 * List the individual grants for a benefit.
 * It's especially useful to check if a user has been granted a benefit.
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * @param is_granted - Filter by granted status. If `true`, only granted benefits will be returned. If `false`, only revoked benefits will be returned.
 * @param customer_id - Filter by customer.
 * @param member_id - Filter by member.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const benefitsgrants = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsgrantsInput,
  outputSchema: BenefitsgrantsOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
