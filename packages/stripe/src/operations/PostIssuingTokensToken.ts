import * as Schema from "effect/Schema";
import { issuing_network_token_network_dataSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostIssuingTokensTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.Literals(["active", "deleted", "suspended"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/issuing/tokens/{token}",
      contentType: "form-urlencoded",
    }),
  );
export type PostIssuingTokensTokenInput =
  typeof PostIssuingTokensTokenInput.Type;

// Output Schema
export const PostIssuingTokensTokenOutput =
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
export type PostIssuingTokensTokenOutput =
  typeof PostIssuingTokensTokenOutput.Type;

// The operation
/**
 * Update a token status
 *
 * <p>Attempts to update the specified Issuing <code>Token</code> object to the status specified.</p>
 */
export const PostIssuingTokensToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostIssuingTokensTokenInput,
    outputSchema: PostIssuingTokensTokenOutput,
  }),
);
