import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetReviewsReviewInput {
  review: string;
  expand?: string;
}
export const GetReviewsReviewInput = /*@__PURE__*/ Schema.Struct({
  review: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/reviews/{review}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetReviewsReviewInput>;

// Output Schema
export interface GetReviewsReviewOutput {
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
}
export const GetReviewsReviewOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetReviewsReviewOutput>;

// The operation
/**
 * Retrieve a review
 *
 * <p>Retrieves a <code>Review</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetReviewsReview = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetReviewsReviewInput,
  outputSchema: GetReviewsReviewOutput,
}));
