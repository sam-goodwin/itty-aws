import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DirectoryUsersControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    directory: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/directory_users" }));
export type DirectoryUsersControllerListInput =
  typeof DirectoryUsersControllerListInput.Type;

// Output Schema
export const DirectoryUsersControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        directory_id: Schema.String,
        organization_id: Schema.String,
        idp_id: Schema.String,
        email: Schema.NullOr(Schema.String),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        emails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              primary: Schema.optional(Schema.Boolean),
              type: Schema.optional(Schema.String),
              value: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        job_title: Schema.optional(Schema.NullOr(Schema.String)),
        username: Schema.optional(Schema.NullOr(Schema.String)),
        state: Schema.Literals(["active", "suspended", "inactive"]),
        raw_attributes: Schema.Record(Schema.String, Schema.Unknown),
        custom_attributes: Schema.Record(Schema.String, Schema.Unknown),
        role: Schema.optional(
          Schema.Struct({
            slug: Schema.String,
          }),
        ),
        roles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              slug: Schema.String,
            }),
          ),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
        groups: Schema.Array(
          Schema.Struct({
            object: Schema.String,
            id: Schema.String,
            idp_id: Schema.String,
            directory_id: Schema.String,
            organization_id: Schema.String,
            name: Schema.String,
            raw_attributes: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            created_at: Schema.String,
            updated_at: Schema.String,
          }),
        ),
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type DirectoryUsersControllerListOutput =
  typeof DirectoryUsersControllerListOutput.Type;

// The operation
/**
 * List Directory Users
 *
 * Get a list of all of existing Directory Users matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param directory - Unique identifier of the WorkOS Directory. This value can be obtained from the WorkOS dashboard or from the WorkOS API.
 * @param group - Unique identifier of the WorkOS Directory Group. This value can be obtained from the WorkOS API.
 */
export const DirectoryUsersControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DirectoryUsersControllerListInput,
    outputSchema: DirectoryUsersControllerListOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
