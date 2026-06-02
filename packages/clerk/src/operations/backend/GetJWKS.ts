import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetJWKSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/jwks" }),
);
export type GetJWKSInput = typeof GetJWKSInput.Type;

// Output Schema
export const GetJWKSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keys: Schema.optional(Schema.Array(Schema.Unknown)),
});
export type GetJWKSOutput = typeof GetJWKSOutput.Type;

// The operation
/**
 * Retrieve the JSON Web Key Set of the instance
 */
export const GetJWKS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetJWKSInput,
  outputSchema: GetJWKSOutput,
}));
