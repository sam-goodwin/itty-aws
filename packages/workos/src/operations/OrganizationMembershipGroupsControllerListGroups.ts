import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const OrganizationMembershipGroupsControllerListGroupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    omId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/organization_memberships/{omId}/groups",
    }),
  );
export type OrganizationMembershipGroupsControllerListGroupsInput =
  typeof OrganizationMembershipGroupsControllerListGroupsInput.Type;

// Output Schema
export const OrganizationMembershipGroupsControllerListGroupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        organization_id: Schema.String,
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type OrganizationMembershipGroupsControllerListGroupsOutput =
  typeof OrganizationMembershipGroupsControllerListGroupsOutput.Type;

// The operation
/**
 * List groups
 *
 * Get a list of groups that an organization membership belongs to.
 *
 * @param omId - Unique identifier of the Organization Membership.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 */
export const OrganizationMembershipGroupsControllerListGroups =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationMembershipGroupsControllerListGroupsInput,
    outputSchema: OrganizationMembershipGroupsControllerListGroupsOutput,
    errors: [NotFound] as const,
  }));
