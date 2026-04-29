import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RolesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
  created_at: Schema.String,
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  members: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  is_default: Schema.Boolean,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/api/organizations/{organization_id}/roles/{id}/",
  }),
);
export type RolesUpdateInput = typeof RolesUpdateInput.Type;

// Output Schema
export const RolesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  created_at: Schema.String,
  created_by: Schema.Struct({
    id: Schema.Number,
    uuid: Schema.String,
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    email: Schema.String,
    is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    hedgehog_config: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    role_at_organization: Schema.optional(Schema.Unknown),
  }),
  members: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  is_default: Schema.Boolean,
});
export type RolesUpdateOutput = typeof RolesUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this role.
 */
export const rolesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesUpdateInput,
  outputSchema: RolesUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
