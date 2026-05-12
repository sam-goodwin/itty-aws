import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  name: Schema.optional(Schema.String),
  first_name: Schema.String,
  last_name: Schema.String,
  password: SensitiveString,
  api_enabled: Schema.optional(Schema.Boolean),
  acls: Schema.optional(Schema.Array(Schema.String)),
  service_user: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/users" }));
export type CreateUserInput = typeof CreateUserInput.Type;

// Output Schema
export const CreateUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      api_enabled: Schema.optional(Schema.Boolean),
      email: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      acls: Schema.optional(Schema.Array(Schema.String)),
      invited_by: Schema.optional(Schema.String),
      invited_on: Schema.optional(Schema.String),
      invite_accepted: Schema.optional(Schema.Boolean),
      service_user: Schema.optional(Schema.Boolean),
      status: Schema.optional(Schema.Unknown),
      last_activity: Schema.optional(Schema.String),
      api_key: Schema.optional(SensitiveString),
    }),
  ),
});
export type CreateUserOutput = typeof CreateUserOutput.Type;

// The operation
/**
 * Create User
 *
 * Create a new User. The `email`, `first_name`, `last_name`, and `password` attributes are required.
 */
export const createUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateUserInput,
  outputSchema: CreateUserOutput,
  errors: [BadRequest, Forbidden] as const,
}));
