import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const Oauth2userinfoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/oauth2/userinfo" }));
export type Oauth2userinfoInput = typeof Oauth2userinfoInput.Type;

// Output Schema
export const Oauth2userinfoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type Oauth2userinfoOutput = typeof Oauth2userinfoOutput.Type;

// The operation
/**
 * Get User Info
 *
 * Get information about the authenticated user.
 */
export const oauth2userinfo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2userinfoInput,
  outputSchema: Oauth2userinfoOutput,
}));
