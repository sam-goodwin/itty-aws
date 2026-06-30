import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerList0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/user_management/users" }));
export type UserlandUsersControllerList0Input =
  typeof UserlandUsersControllerList0Input.Type;

// Output Schema
export const UserlandUsersControllerList0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          first_name: Schema.optional(Schema.NullOr(Schema.String)),
          last_name: Schema.optional(Schema.NullOr(Schema.String)),
          name: Schema.optional(Schema.NullOr(Schema.String)),
          profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
          email: Schema.optional(Schema.String),
          email_verified: Schema.optional(Schema.Boolean),
          external_id: Schema.optional(Schema.NullOr(Schema.String)),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
          locale: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type UserlandUsersControllerList0Output =
  typeof UserlandUsersControllerList0Output.Type;

// The operation
/**
 * List users
 *
 * Get a list of all of your existing users matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param organization - Filter users by the organization they are a member of. Deprecated in favor of `organization_id`.
 * @param organization_id - Filter users by the organization they are a member of.
 * @param email - Filter users by their email address.
 */
export const UserlandUsersControllerList0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerList0Input,
    outputSchema: UserlandUsersControllerList0Output,
    errors: [UnprocessableEntity] as const,
  }));
