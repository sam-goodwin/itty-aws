import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface GetCurrentUserInput {}
export const GetCurrentUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v2/user" }),
) as unknown as Schema.Codec<GetCurrentUserInput>;

// Output Schema
export interface GetCurrentUserOutput {
  email: string;
  id: string;
  name: string;
  role?: { id: string; name: string };
}
export const GetCurrentUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  id: Schema.String,
  name: Schema.String,
  role: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<GetCurrentUserOutput>;

// The operation
/**
 * Get current user
 */
export const getCurrentUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInput,
  outputSchema: GetCurrentUserOutput,
}));
