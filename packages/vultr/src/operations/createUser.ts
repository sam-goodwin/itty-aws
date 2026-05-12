import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  name: Schema.String,
  password: SensitiveString,
  api_enabled: Schema.optional(Schema.Boolean),
  acls: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/users" }));
export type CreateUserInput = typeof CreateUserInput.Type;

// Output Schema
export const CreateUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateUserOutput = typeof CreateUserOutput.Type;

// The operation
/**
 * Create User
 *
 * Create a new User. The `email`, `name`, and `password` attributes are required.
 */
export const createUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateUserInput,
  outputSchema: CreateUserOutput,
  errors: [BadRequest, Forbidden] as const,
}));
