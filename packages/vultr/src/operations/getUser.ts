import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/users/{userId}" }));
export type GetUserInput = typeof GetUserInput.Type;

// Output Schema
export const GetUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      api_enabled: Schema.optional(Schema.Boolean),
      email: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      acls: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
});
export type GetUserOutput = typeof GetUserOutput.Type;

// The operation
/**
 * Get User
 *
 * Get information about a User.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const getUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserInput,
  outputSchema: GetUserOutput,
  errors: [BadRequest, NotFound] as const,
}));
