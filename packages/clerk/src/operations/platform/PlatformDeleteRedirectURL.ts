import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformDeleteRedirectURLInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    redirectURLID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/redirect_urls/{redirectURLID}",
    }),
  );
export type PlatformDeleteRedirectURLInput =
  typeof PlatformDeleteRedirectURLInput.Type;

// Output Schema
export const PlatformDeleteRedirectURLOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type PlatformDeleteRedirectURLOutput =
  typeof PlatformDeleteRedirectURLOutput.Type;

// The operation
/**
 * Delete a redirect URL
 *
 * Delete a redirect URL from an application instance.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Requires the `applications:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param redirectURLID - Redirect URL ID.
 */
export const PlatformDeleteRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformDeleteRedirectURLInput,
    outputSchema: PlatformDeleteRedirectURLOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
