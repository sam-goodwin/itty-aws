import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateUserRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  role: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/v2/users/{id}/role" }));
export type UpdateUserRoleInput = typeof UpdateUserRoleInput.Type;

// Output Schema
export const UpdateUserRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateUserRoleOutput = typeof UpdateUserRoleOutput.Type;

// The operation
/**
 * Update user role
 */
export const updateUserRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateUserRoleInput,
  outputSchema: UpdateUserRoleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
