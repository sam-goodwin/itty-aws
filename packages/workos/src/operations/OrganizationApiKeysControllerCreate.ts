import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationApiKeysControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
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
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    owner: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        id: Schema.String,
      }),
    ),
    name: Schema.optional(Schema.String),
    obfuscated_value: Schema.optional(Schema.String),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
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
