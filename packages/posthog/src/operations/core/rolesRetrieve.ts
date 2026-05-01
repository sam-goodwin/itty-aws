import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

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
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  members: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  is_default: Schema.optional(Schema.Boolean),
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
