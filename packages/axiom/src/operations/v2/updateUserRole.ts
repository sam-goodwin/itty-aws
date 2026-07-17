import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface UpdateUserRoleInput {
  id: string;
  role: string;
}
export const UpdateUserRoleInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  role: Schema.String,
}).pipe(
  T.Http({ method: "PUT", path: "/v2/users/{id}/role" }),
) as unknown as Schema.Codec<UpdateUserRoleInput>;

// Output Schema
export interface UpdateUserRoleOutput {
  email: string;
  id: string;
  name: string;
  role?: { id: string; name: string };
}
export const UpdateUserRoleOutput = /*@__PURE__*/ Schema.Struct({
  email: Schema.String,
  id: Schema.String,
  name: Schema.String,
  role: Schema.optional(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<UpdateUserRoleOutput>;

// The operation
/**
 * Update user role
 */
export const updateUserRole = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateUserRoleInput,
  outputSchema: UpdateUserRoleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
