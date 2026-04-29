import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    organization_id: Schema.optional(Schema.String),
    statuses: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/organization_memberships",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerListInput =
  typeof UserlandUserOrganizationMembershipsControllerListInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.String,
          id: Schema.String,
          user_id: Schema.String,
          organization_id: Schema.String,
          status: Schema.Literals(["active", "inactive", "pending"]),
          directory_managed: Schema.Boolean,
          organization_name: Schema.optional(Schema.String),
          custom_attributes: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_at: Schema.String,
          updated_at: Schema.String,
          role: Schema.Struct({
            slug: Schema.String,
          }),
        }),
      ),
    ),
  });
export type UserlandUserOrganizationMembershipsControllerListOutput =
  typeof UserlandUserOrganizationMembershipsControllerListOutput.Type;

// The operation
/**
 * List organization memberships
 *
 * Get a list of all organization memberships matching the criteria specified. At least one of `user_id` or `organization_id` must be provided. By default only active memberships are returned. Use the `statuses` parameter to filter by other statuses.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param organization_id - The ID of the [organization](/reference/organization) which the user belongs to.
 * @param statuses - Filter by the status of the organization membership. Array including any of `active`, `inactive`, or `pending`.
 * @param user_id - The ID of the [user](/reference/authkit/user).
 */
export const UserlandUserOrganizationMembershipsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerListInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerListOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
