import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
  email: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  password: Schema.optional(SensitiveString),
  api_enabled: Schema.optional(Schema.Boolean),
  acls: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/users/{userId}" }));
export type UpdateUserInput = typeof UpdateUserInput.Type;

// Output Schema
export const UpdateUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateUserOutput = typeof UpdateUserOutput.Type;

// The operation
/**
 * Update User
 *
 * Update information for a User. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const updateUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateUserInput,
  outputSchema: UpdateUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
