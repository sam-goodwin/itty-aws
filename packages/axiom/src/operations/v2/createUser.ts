import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  name: Schema.String,
  role: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/users" }));
export type CreateUserInput = typeof CreateUserInput.Type;

// Output Schema
export const CreateUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateUserOutput = typeof CreateUserOutput.Type;

// The operation
/**
 * Create user
 */
export const createUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateUserInput,
  outputSchema: CreateUserOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
