import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "PUT", path: "/v2/rbac/groups/{id}" }));
export type UpdateGroupInput = typeof UpdateGroupInput.Type;

// Output Schema
export const UpdateGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
});
export type UpdateGroupOutput = typeof UpdateGroupOutput.Type;

// The operation
/**
 * Update group
 *
 * Updates an existing group's configuration.
 *
 * @param id - Unique identifier of the group to update
 */
export const updateGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateGroupInput,
  outputSchema: UpdateGroupOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
