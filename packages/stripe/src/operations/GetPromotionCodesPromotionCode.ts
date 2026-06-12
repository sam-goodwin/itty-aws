import * as Schema from "effect/Schema";
import {
  promotion_codes_resource_promotionSchema,
  promotion_codes_resource_restrictionsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPromotionCodesPromotionCodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promotion_code: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/promotion_codes/{promotion_code}",
      contentType: "form-urlencoded",
    }),
  );
export type GetPromotionCodesPromotionCodeInput =
  typeof GetPromotionCodesPromotionCodeInput.Type;

// Output Schema
export const GetPromotionCodesPromotionCodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    code: Schema.String,
    created: Schema.Number,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    max_redemptions: Schema.NullOr(Schema.Number),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["promotion_code"]),
    promotion: Schema.suspend(() => promotion_codes_resource_promotionSchema),
    restrictions: Schema.suspend(
      () => promotion_codes_resource_restrictionsSchema,
    ),
    times_redeemed: Schema.Number,
  });
export type GetPromotionCodesPromotionCodeOutput =
  typeof GetPromotionCodesPromotionCodeOutput.Type;

// The operation
/**
 * Retrieve a promotion code
 *
 * <p>Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing <code>code</code> use <a href="/docs/api/promotion_codes/list">list</a> with the desired <code>code</code>.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetPromotionCodesPromotionCode =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetPromotionCodesPromotionCodeInput,
    outputSchema: GetPromotionCodesPromotionCodeOutput,
  }));
