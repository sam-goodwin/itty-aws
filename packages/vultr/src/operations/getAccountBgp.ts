import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetAccountBgpInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/account/bgp" }));
export type GetAccountBgpInput = typeof GetAccountBgpInput.Type;

// Output Schema
export const GetAccountBgpOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  asn: Schema.optional(Schema.Number),
  password: Schema.optional(SensitiveString),
  enabled: Schema.optional(Schema.Boolean),
});
export type GetAccountBgpOutput = typeof GetAccountBgpOutput.Type;

// The operation
/**
 * Get Account BGP Info
 *
 * Get your Vultr account BGP information.
 */
export const getAccountBgp = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAccountBgpInput,
  outputSchema: GetAccountBgpOutput,
}));
