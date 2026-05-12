import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RestoreIamRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/v2/roles/{id}/restore" }));
export type RestoreIamRoleInput = typeof RestoreIamRoleInput.Type;

// Output Schema
export const RestoreIamRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      role_type: Schema.optional(Schema.Literals(["user", "service"])),
      max_session_duration: Schema.optional(Schema.Number),
      date_created: Schema.optional(Schema.String),
      policies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            policy_id: Schema.optional(Schema.String),
            policy_name: Schema.optional(Schema.String),
            role_id: Schema.optional(Schema.String),
            role_name: Schema.optional(Schema.String),
            role_description: Schema.optional(Schema.String),
            role_type: Schema.optional(Schema.String),
            date_assigned: Schema.optional(Schema.String),
            assigned_by: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
});
export type RestoreIamRoleOutput = typeof RestoreIamRoleOutput.Type;

// The operation
/**
 * Restore Role
 *
 * Restore a soft-deleted Role.
 *
 * @param id - The Role ID.
 */
export const restoreIamRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestoreIamRoleInput,
  outputSchema: RestoreIamRoleOutput,
  errors: [Forbidden, NotFound] as const,
}));
