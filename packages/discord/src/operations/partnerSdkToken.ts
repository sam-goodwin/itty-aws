import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString, SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const PartnerSdkTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  client_id: Schema.String,
  client_secret: Schema.optional(SensitiveNullableString),
  external_auth_token: Schema.String,
  external_auth_type: Schema.Unknown,
}).pipe(T.Http({ method: "POST", path: "/partner-sdk/token" }));
export type PartnerSdkTokenInput = typeof PartnerSdkTokenInput.Type;

// Output Schema
export const PartnerSdkTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token_type: Schema.String,
  access_token: SensitiveString,
  expires_in: Schema.Number,
  scope: Schema.String,
  id_token: Schema.String,
  refresh_token: Schema.optional(SensitiveNullableString),
  scopes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  expires_at_s: Schema.optional(Schema.NullOr(Schema.Number)),
});
export type PartnerSdkTokenOutput = typeof PartnerSdkTokenOutput.Type;

// The operation
export const partnerSdkToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PartnerSdkTokenInput,
  outputSchema: PartnerSdkTokenOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
