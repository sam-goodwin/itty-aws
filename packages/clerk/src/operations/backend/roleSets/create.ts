import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  key: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  default_role_key: Schema.String,
  creator_role_key: Schema.String,
  type: Schema.optional(Schema.Literals(["initial", "custom"])),
  roles: Schema.Array(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/role_sets" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create a role set
 *
 * Creates a new role set with the given name and roles.
 * The key must be unique for the instance and start with the 'role_set:' prefix, followed by lowercase alphanumeric characters and underscores only.
 * You must provide at least one role and specify a default role key and creator role key.
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [
    BadRequest,
    PaymentRequired,
    Forbidden,
    NotFound,
    UnprocessableEntity,
  ] as const,
}));
