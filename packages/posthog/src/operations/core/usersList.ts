import * as Schema from "effect/Schema";
import { UserSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";

// Input Schema
export const UsersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  is_staff: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/api/users/" }));
export type UsersListInput = typeof UsersListInput.Type;

// Output Schema
export const UsersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => UserSchema))),
});
export type UsersListOutput = typeof UsersListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const usersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersListInput,
  outputSchema: UsersListOutput,
  errors: [BadRequest, Forbidden] as const,
}));
