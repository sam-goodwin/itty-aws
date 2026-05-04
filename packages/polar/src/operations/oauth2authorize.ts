import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const Oauth2authorizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/oauth2/authorize" }));
export type Oauth2authorizeInput = typeof Oauth2authorizeInput.Type;

// Output Schema
export const Oauth2authorizeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type Oauth2authorizeOutput = typeof Oauth2authorizeOutput.Type;

// The operation
/**
 * Authorize
 */
export const oauth2authorize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2authorizeInput,
  outputSchema: Oauth2authorizeOutput,
}));
