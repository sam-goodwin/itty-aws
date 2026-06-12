import * as Schema from "effect/Schema";
import { UserSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/users" }),
);
export type GetUsersInput = typeof GetUsersInput.Type;

// Output Schema
export const GetUsersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => UserSchema),
);
export type GetUsersOutput = typeof GetUsersOutput.Type;

// The operation
/**
 * Get users
 */
export const getUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUsersInput,
  outputSchema: GetUsersOutput,
}));
