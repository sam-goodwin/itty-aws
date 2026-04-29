import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GroupMembershipsControllerListMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organizationId}/groups/{groupId}/organization-memberships",
    }),
  );
export type GroupMembershipsControllerListMembersInput =
  typeof GroupMembershipsControllerListMembersInput.Type;

// Output Schema
export const GroupMembershipsControllerListMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
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
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type GroupMembershipsControllerListMembersOutput =
  typeof GroupMembershipsControllerListMembersOutput.Type;

// The operation
/**
 * List Group members
 *
 * Get a list of organization memberships in a group.
 *
 * @param organizationId - Unique identifier of the Organization.
 * @param groupId - Unique identifier of the Group.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 */
export const GroupMembershipsControllerListMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupMembershipsControllerListMembersInput,
    outputSchema: GroupMembershipsControllerListMembersOutput,
    errors: [Forbidden, NotFound] as const,
  }));
