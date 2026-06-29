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
  key: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  permissions: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  include_in_initial_role_set: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(T.Http({ method: "POST", path: "/organization_roles" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["role"]),
  id: Schema.String,
  name: Schema.String,
  key: Schema.String,
  description: Schema.NullOr(Schema.String),
  is_creator_eligible: Schema.Boolean,
  permissions: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["permission"]),
      id: Schema.String,
      name: Schema.String,
      key: Schema.String,
      description: Schema.String,
      type: Schema.String,
      created_at: Schema.Number,
      updated_at: Schema.Number,
    }),
  ),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create an organization role
 *
 * Creates a new organization role with the given name and permissions for an instance.
 * The key must be unique for the instance and start with the 'org:' prefix, followed by lowercase alphanumeric characters and underscores only.
 * You can optionally provide a description for the role and specify whether it should be included in the initial role set.
 * Organization roles support permissions that can be assigned to control access within the organization.
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
