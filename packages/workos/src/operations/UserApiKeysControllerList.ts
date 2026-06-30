import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserApiKeysControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/users/{userId}/api_keys" }),
  );
export type UserApiKeysControllerListInput =
  typeof UserApiKeysControllerListInput.Type;

// Output Schema
export const UserApiKeysControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        owner: Schema.Struct({
          type: Schema.String,
          id: Schema.String,
          organization_id: Schema.String,
        }),
        name: Schema.String,
        obfuscated_value: Schema.String,
        last_used_at: Schema.NullOr(Schema.String),
        expires_at: Schema.NullOr(Schema.String),
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
export type UserApiKeysControllerListOutput =
  typeof UserApiKeysControllerListOutput.Type;

// The operation
/**
 * List API keys for a user
 *
 * Get a list of API keys owned by a specific user.
 *
 * @param userId - Unique identifier of the user.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 * @param organization_id - The ID of the organization to filter user API keys by. When provided, only API keys created against that organization membership are returned.
 */
export const UserApiKeysControllerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserApiKeysControllerListInput,
    outputSchema: UserApiKeysControllerListOutput,
    errors: [NotFound] as const,
  }),
);
