import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetCurrentUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/user" }));
export type GetCurrentUserInput = typeof GetCurrentUserInput.Type;

// Output Schema
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
});
export type GetCurrentUserOutput = typeof GetCurrentUserOutput.Type;

// The operation
/**
 * Get current user
 */
export const getCurrentUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInput,
  outputSchema: GetCurrentUserOutput,
}));
