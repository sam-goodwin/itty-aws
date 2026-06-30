import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface UpdateGroupInput {
  id: string;
  description?: string;
  isManaged?: boolean;
  members?: ReadonlyArray<string>;
  name: string;
  roles?: ReadonlyArray<string>;
}
export const UpdateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({ method: "PUT", path: "/v2/rbac/groups/{id}" }),
) as unknown as Schema.Codec<UpdateGroupInput>;

// Output Schema
export interface UpdateGroupOutput {
  description?: string;
  isManaged?: boolean;
  members?: ReadonlyArray<string>;
  name: string;
  roles?: ReadonlyArray<string>;
  id: string;
}
export const UpdateGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
}) as unknown as Schema.Codec<UpdateGroupOutput>;

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
