import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformDeleteUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    userID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/users/{userID}",
    }),
  );
export type PlatformDeleteUserInput = typeof PlatformDeleteUserInput.Type;

// Output Schema
export const PlatformDeleteUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type PlatformDeleteUserOutput = typeof PlatformDeleteUserOutput.Type;

// The operation
/**
 * Delete a user
 *
 * Delete a user within an application instance. Returns the deleted user object.
 * Deleting a user that does not exist (or has already been deleted) returns 404.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Requires the `users:delete` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param userID - User ID.
 */
export const PlatformDeleteUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PlatformDeleteUserInput,
  outputSchema: PlatformDeleteUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
