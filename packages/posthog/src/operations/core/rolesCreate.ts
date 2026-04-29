import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RolesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/organizations/{organization_id}/roles/",
  }),
);
export type RolesCreateInput = typeof RolesCreateInput.Type;

// Output Schema
export const RolesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RolesCreateOutput = typeof RolesCreateOutput.Type;

// The operation
export const rolesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesCreateInput,
  outputSchema: RolesCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
