import * as Schema from "effect/Schema";
import { issuing_network_token_network_dataSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingTokensTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/tokens/{token}",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingTokensTokenInput = typeof GetIssuingTokensTokenInput.Type;

// Output Schema
export const GetIssuingTokensTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card: Schema.Unknown,
    created: Schema.Number,
    device_fingerprint: Schema.NullOr(Schema.String),
    id: Schema.String,
    last4: Schema.optional(Schema.String),
    livemode: Schema.Boolean,
    network: Schema.Literals(["mastercard", "visa"]),
    network_data: Schema.optional(
      Schema.suspend(() => issuing_network_token_network_dataSchema),
    ),
    network_updated_at: Schema.Number,
    object: Schema.Literals(["issuing.token"]),
    status: Schema.Literals(["active", "deleted", "requested", "suspended"]),
    wallet_provider: Schema.optional(
      Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
    ),
  });
export type GetIssuingTokensTokenOutput =
  typeof GetIssuingTokensTokenOutput.Type;

// The operation
/**
 * Retrieve an issuing token
 *
 * <p>Retrieves an Issuing <code>Token</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingTokensToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetIssuingTokensTokenInput,
    outputSchema: GetIssuingTokensTokenOutput,
  }),
);
