import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationApiKeysControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organizationId}/api_keys",
    }),
  );
export type OrganizationApiKeysControllerCreateInput =
  typeof OrganizationApiKeysControllerCreateInput.Type;

// Output Schema
export const OrganizationApiKeysControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    owner: Schema.Struct({
      type: Schema.String,
      id: Schema.String,
    }),
    name: Schema.String,
    obfuscated_value: Schema.String,
    last_used_at: Schema.NullOr(Schema.String),
    permissions: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    value: Schema.String,
  });
export type OrganizationApiKeysControllerCreateOutput =
  typeof OrganizationApiKeysControllerCreateOutput.Type;

// The operation
/**
 * Create an API key for an organization
 *
 * Create a new API key for an organization.
 *
 * @param organizationId - Unique identifier of the Organization.
 */
export const OrganizationApiKeysControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationApiKeysControllerCreateInput,
    outputSchema: OrganizationApiKeysControllerCreateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
