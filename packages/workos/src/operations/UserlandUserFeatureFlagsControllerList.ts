import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUserFeatureFlagsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/{userId}/feature-flags",
    }),
  );
export type UserlandUserFeatureFlagsControllerListInput =
  typeof UserlandUserFeatureFlagsControllerListInput.Type;

// Output Schema
export const UserlandUserFeatureFlagsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        slug: Schema.String,
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        owner: Schema.Unknown,
        tags: Schema.Array(Schema.String),
        enabled: Schema.Boolean,
        default_value: Schema.Boolean,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type UserlandUserFeatureFlagsControllerListOutput =
  typeof UserlandUserFeatureFlagsControllerListOutput.Type;

// The operation
/**
 * List enabled feature flags for a user
 *
 * Get a list of all enabled feature flags for the provided user. This includes feature flags enabled specifically for the user as well as any organizations that the user is a member of.
 *
 * @param userId - The ID of the user.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 */
export const UserlandUserFeatureFlagsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserFeatureFlagsControllerListInput,
    outputSchema: UserlandUserFeatureFlagsControllerListOutput,
    errors: [NotFound] as const,
  }));
