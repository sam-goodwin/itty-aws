import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface V1GetProfileInput {}
export const V1GetProfileInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v1/profile" }),
) as unknown as Schema.Codec<V1GetProfileInput>;

// Output Schema
export interface V1GetProfileOutput {
  gotrue_id: string;
  primary_email: string;
  username: string;
}
export const V1GetProfileOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gotrue_id: Schema.String,
  primary_email: Schema.String,
  username: Schema.String,
}) as unknown as Schema.Codec<V1GetProfileOutput>;

// The operation
/**
 * Gets the user's profile
 */
export const v1GetProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetProfileInput,
  outputSchema: V1GetProfileOutput,
}));
