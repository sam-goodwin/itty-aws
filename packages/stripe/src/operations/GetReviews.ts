import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetReviewsInput {
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetReviewsInput = /*@__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/reviews",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetReviewsInput>;

// Output Schema
export interface GetReviewsOutput {
  data: {
    billing_zip: string | null;
    charge: unknown;
    closed_reason:
      | "acknowledged"
      | "approved"
      | "canceled"
      | "disputed"
      | "payment_never_settled"
      | "redacted"
      | "refunded"
      | "refunded_as_fraud"
      | null;
    created: number;
    id: string;
    ip_address: string | null;
    ip_address_location: {
      city: string | null;
      country: string | null;
      latitude: number | null;
      longitude: number | null;
      region: string | null;
    } | null;
    livemode: boolean;
    object: "review";
    open: boolean;
    opened_reason: "manual" | "rule";
    payment_intent?: unknown;
    reason: string;
    session: {
      browser: string | null;
      device: string | null;
      platform: string | null;
      version: string | null;
    } | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetReviewsOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      billing_zip: Schema.NullOr(Schema.String),
      charge: Schema.Unknown,
      closed_reason: Schema.NullOr(
        Schema.Literals([
          "acknowledged",
          "approved",
          "canceled",
          "disputed",
          "payment_never_settled",
          "redacted",
          "refunded",
          "refunded_as_fraud",
        ]),
      ),
      created: Schema.Number,
      id: Schema.String,
      ip_address: Schema.NullOr(Schema.String),
      ip_address_location: Schema.NullOr(
        Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          latitude: Schema.NullOr(Schema.Number),
          longitude: Schema.NullOr(Schema.Number),
          region: Schema.NullOr(Schema.String),
        }),
      ),
      livemode: Schema.Boolean,
      object: Schema.Literals(["review"]),
      open: Schema.Boolean,
      opened_reason: Schema.Literals(["manual", "rule"]),
      payment_intent: Schema.optional(Schema.Unknown),
      reason: Schema.String,
      session: Schema.NullOr(
        Schema.Struct({
          browser: Schema.NullOr(Schema.String),
          device: Schema.NullOr(Schema.String),
          platform: Schema.NullOr(Schema.String),
          version: Schema.NullOr(Schema.String),
        }),
      ),
    }),
  ),
  has_more: Schema.Boolean,
  object: Schema.Literals(["list"]),
  url: Schema.String,
}) as unknown as Schema.Codec<GetReviewsOutput>;

// The operation
/**
 * List all open reviews
 *
 * <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param created - Only return reviews that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetReviews = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetReviewsInput,
  outputSchema: GetReviewsOutput,
}));
