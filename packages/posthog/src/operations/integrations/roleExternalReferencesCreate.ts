import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RoleExternalReferencesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    provider: Schema.String,
    provider_organization_id: Schema.String,
    provider_role_id: Schema.String,
    provider_role_slug: Schema.optional(Schema.NullOr(Schema.String)),
    provider_role_name: Schema.String,
    role: Schema.String,
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/role_external_references/",
    }),
  );
export type RoleExternalReferencesCreateInput =
  typeof RoleExternalReferencesCreateInput.Type;

// Output Schema
export const RoleExternalReferencesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    provider: Schema.String,
    provider_organization_id: Schema.String,
    provider_role_id: Schema.String,
    provider_role_slug: Schema.optional(Schema.NullOr(Schema.String)),
    provider_role_name: Schema.String,
    role: Schema.String,
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
  });
export type RoleExternalReferencesCreateOutput =
  typeof RoleExternalReferencesCreateOutput.Type;

// The operation
export const roleExternalReferencesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoleExternalReferencesCreateInput,
    outputSchema: RoleExternalReferencesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
