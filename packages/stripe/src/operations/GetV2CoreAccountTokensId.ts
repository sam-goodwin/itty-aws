import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV2CoreAccountTokensIdInput {
  id: string;
}
export const GetV2CoreAccountTokensIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/core/account_tokens/{id}" }),
  ) as unknown as Schema.Codec<GetV2CoreAccountTokensIdInput>;

// Output Schema
export interface GetV2CoreAccountTokensIdOutput {
  created: string;
  expires_at: string;
  id: string;
  livemode: boolean;
  object: "v2.core.account_token";
  used: boolean;
}
export const GetV2CoreAccountTokensIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.String,
    expires_at: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["v2.core.account_token"]),
    used: Schema.Boolean,
  }) as unknown as Schema.Codec<GetV2CoreAccountTokensIdOutput>;

// The operation
/**
 * Retrieve an account token
 *
 * Retrieves an Account Token.
 *
 * @param id - The ID of the Account Token to retrieve.
 */
export const GetV2CoreAccountTokensId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV2CoreAccountTokensIdInput,
    outputSchema: GetV2CoreAccountTokensIdOutput,
  }),
);
