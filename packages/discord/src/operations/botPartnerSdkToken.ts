import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString, SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const BotPartnerSdkTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_user_id: Schema.String,
    preferred_global_name: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/partner-sdk/token/bot" }));
export type BotPartnerSdkTokenInput = typeof BotPartnerSdkTokenInput.Type;

// Output Schema
export const BotPartnerSdkTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token_type: Schema.String,
    access_token: SensitiveString,
    expires_in: Schema.Number,
    scope: Schema.String,
    id_token: Schema.String,
    refresh_token: Schema.optional(SensitiveNullableString),
    scopes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    expires_at_s: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export type BotPartnerSdkTokenOutput = typeof BotPartnerSdkTokenOutput.Type;

// The operation
export const botPartnerSdkToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BotPartnerSdkTokenInput,
  outputSchema: BotPartnerSdkTokenOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
