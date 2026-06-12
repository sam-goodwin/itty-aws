import * as Schema from "effect/Schema";
import { bank_accountSchema, cardSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTokensTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/tokens/{token}",
    contentType: "form-urlencoded",
  }),
);
export type GetTokensTokenInput = typeof GetTokensTokenInput.Type;

// Output Schema
export const GetTokensTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bank_account: Schema.optional(Schema.suspend(() => bank_accountSchema)),
  card: Schema.optional(Schema.suspend(() => cardSchema)),
  client_ip: Schema.NullOr(Schema.String),
  created: Schema.Number,
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["token"]),
  type: Schema.String,
  used: Schema.Boolean,
});
export type GetTokensTokenOutput = typeof GetTokensTokenOutput.Type;

// The operation
/**
 * Retrieve a token
 *
 * <p>Retrieves the token with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTokensToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTokensTokenInput,
  outputSchema: GetTokensTokenOutput,
}));
