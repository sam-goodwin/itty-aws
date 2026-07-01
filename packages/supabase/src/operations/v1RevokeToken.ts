import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1RevokeTokenInput {
  client_id: string;
  client_secret: string | Redacted.Redacted<string>;
  refresh_token: string | Redacted.Redacted<string>;
}
export const V1RevokeTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  client_id: Schema.String,
  client_secret: SensitiveString,
  refresh_token: SensitiveString,
}).pipe(
  T.Http({ method: "POST", path: "/v1/oauth/revoke" }),
) as unknown as Schema.Codec<V1RevokeTokenInput>;

// Output Schema
export type V1RevokeTokenOutput = void;
export const V1RevokeTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RevokeTokenOutput>;

// The operation
/**
 * [Beta] Revoke oauth app authorization and it's corresponding tokens
 */
export const v1RevokeToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1RevokeTokenInput,
  outputSchema: V1RevokeTokenOutput,
  errors: [BadRequest, Forbidden] as const,
}));
