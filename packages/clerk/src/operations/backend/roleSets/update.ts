import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const UpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role_set_key_or_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  key: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.optional(Schema.NullOr(Schema.Literals(["initial"]))),
  default_role_key: Schema.optional(Schema.NullOr(Schema.String)),
  creator_role_key: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/role_sets/{role_set_key_or_id}" }));
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema
export const UpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["role_set"]),
  id: Schema.String,
  name: Schema.String,
  key: Schema.String,
  description: Schema.NullOr(Schema.String),
  roles: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["role_set_item"]),
      id: Schema.String,
      name: Schema.String,
      key: Schema.String,
      description: Schema.NullOr(Schema.String),
      members_count: Schema.optional(Schema.NullOr(Schema.Number)),
      has_members: Schema.optional(Schema.NullOr(Schema.Boolean)),
      created_at: Schema.Number,
      updated_at: Schema.Number,
    }),
  ),
  default_role: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        object: Schema.Literals(["role_set_item"]),
        id: Schema.String,
        name: Schema.String,
        key: Schema.String,
        description: Schema.NullOr(Schema.String),
        members_count: Schema.optional(Schema.NullOr(Schema.Number)),
        has_members: Schema.optional(Schema.NullOr(Schema.Boolean)),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
  ),
  creator_role: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        object: Schema.Literals(["role_set_item"]),
        id: Schema.String,
        name: Schema.String,
        key: Schema.String,
        description: Schema.NullOr(Schema.String),
        members_count: Schema.optional(Schema.NullOr(Schema.Number)),
        has_members: Schema.optional(Schema.NullOr(Schema.Boolean)),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
  ),
  type: Schema.Literals(["initial", "custom"]),
  role_set_migration: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        object: Schema.Literals(["role_set_migration"]),
        id: Schema.String,
        organization_id: Schema.optional(Schema.NullOr(Schema.String)),
        instance_id: Schema.String,
        source_role_set_id: Schema.String,
        dest_role_set_id: Schema.optional(Schema.NullOr(Schema.String)),
        trigger_type: Schema.String,
        status: Schema.String,
        migrated_members: Schema.Number,
        mappings: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
        started_at: Schema.optional(Schema.NullOr(Schema.Number)),
        completed_at: Schema.optional(Schema.NullOr(Schema.Number)),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
  ),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type UpdateOutput = typeof UpdateOutput.Type;

// The operation
/**
 * Update a role set
 *
 * Updates an existing role set.
 * You can update the name, key, description, type, default role, or creator role.
 * All parameters are optional - you can update only the fields you want to change.
 *
 * @param role_set_key_or_id - The key or ID of the role set to update
 */
export const update = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
