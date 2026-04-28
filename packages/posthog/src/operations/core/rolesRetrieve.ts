import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const RolesRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/roles/{id}/",
  }),
);
export type RolesRetrieveInput = typeof RolesRetrieveInput.Type;

// Output Schema
export const RolesRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RolesRetrieveOutput = typeof RolesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this role.
 */
export const rolesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesRetrieveInput,
  outputSchema: RolesRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
