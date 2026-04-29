import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationResourcesControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    organization_id: Schema.optional(Schema.String),
    resource_type_slug: Schema.optional(Schema.String),
    resource_external_id: Schema.optional(Schema.String),
    parent_resource_id: Schema.optional(Schema.String),
    parent_resource_type_slug: Schema.optional(Schema.String),
    parent_external_id: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/authorization/resources" }));
export type AuthorizationResourcesControllerListInput =
  typeof AuthorizationResourcesControllerListInput.Type;

// Output Schema
export const AuthorizationResourcesControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        organization_id: Schema.String,
        parent_resource_id: Schema.NullOr(Schema.String),
        id: Schema.String,
        external_id: Schema.String,
        resource_type_slug: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type AuthorizationResourcesControllerListOutput =
  typeof AuthorizationResourcesControllerListOutput.Type;

// The operation
/**
 * List resources
 *
 * Get a paginated list of authorization resources.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param organization_id - Filter resources by organization ID.
 * @param resource_type_slug - Filter resources by resource type slug.
 * @param resource_external_id - Filter resources by external ID.
 * @param parent_resource_id - Filter resources by parent resource ID. Mutually exclusive with `parent_resource_type_slug` and `parent_external_id`.
 * @param parent_resource_type_slug - Filter resources by parent resource type slug. Required with `parent_external_id`. Mutually exclusive with `parent_resource_id`.
 * @param parent_external_id - Filter resources by parent external ID. Required with `parent_resource_type_slug`. Mutually exclusive with `parent_resource_id`.
 * @param search - Search resources by name.
 */
export const AuthorizationResourcesControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationResourcesControllerListInput,
    outputSchema: AuthorizationResourcesControllerListOutput,
    errors: [Forbidden, UnprocessableEntity] as const,
  }));
