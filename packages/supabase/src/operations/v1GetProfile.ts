import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";

// Input Schema
export const V1GetProfileInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/profile" }));
export type V1GetProfileInput = typeof V1GetProfileInput.Type;

// Output Schema
export const V1GetProfileOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gotrue_id: Schema.String,
  primary_email: Schema.String,
  username: Schema.String,
});
export type V1GetProfileOutput = typeof V1GetProfileOutput.Type;

// The operation
/**
 * Gets the user's profile
 */
export const v1GetProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetProfileInput,
  outputSchema: V1GetProfileOutput,
}));
