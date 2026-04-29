import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const OrganizationApiKeysControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/{organizationId}/api_keys" }),
  );
export type OrganizationApiKeysControllerListInput =
  typeof OrganizationApiKeysControllerListInput.Type;

// Output Schema
export const OrganizationApiKeysControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type OrganizationApiKeysControllerListOutput =
  typeof OrganizationApiKeysControllerListOutput.Type;

// The operation
/**
 * List API keys for an organization
 *
 * Get a list of all API keys for an organization.
 *
 * @param organizationId - Unique identifier of the Organization.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 */
export const OrganizationApiKeysControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationApiKeysControllerListInput,
    outputSchema: OrganizationApiKeysControllerListOutput,
    errors: [NotFound] as const,
  }));
