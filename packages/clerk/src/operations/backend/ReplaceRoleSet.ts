import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const ReplaceRoleSetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role_set_key_or_id: Schema.String.pipe(T.PathParam()),
  dest_role_set_key: Schema.String,
  reassignment_mappings: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/role_sets/{role_set_key_or_id}/replace" }),
);
export type ReplaceRoleSetInput = typeof ReplaceRoleSetInput.Type;

// Output Schema
export const ReplaceRoleSetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.String,
  id: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  deleted: Schema.Boolean,
  external_id: Schema.optional(Schema.String),
});
export type ReplaceRoleSetOutput = typeof ReplaceRoleSetOutput.Type;

// The operation
/**
 * Replace a role set
 *
 * Replaces a role set with another role set. This is functionally equivalent to deleting
 * the role set but allows for atomic replacement with migration support.
 * Organizations using this role set will be migrated to the destination role set.
 *
 * @param role_set_key_or_id - The key or ID of the role set to replace
 */
export const ReplaceRoleSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplaceRoleSetInput,
  outputSchema: ReplaceRoleSetOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
