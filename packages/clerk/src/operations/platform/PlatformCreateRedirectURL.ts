import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const PlatformCreateRedirectURLInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    url: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/redirect_urls",
    }),
  );
export type PlatformCreateRedirectURLInput =
  typeof PlatformCreateRedirectURLInput.Type;

// Output Schema
export const PlatformCreateRedirectURLOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["redirect_url"]),
    id: Schema.String,
    url: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type PlatformCreateRedirectURLOutput =
  typeof PlatformCreateRedirectURLOutput.Type;

// The operation
/**
 * Create a redirect URL
 *
 * Create a redirect URL for an application instance.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Requires the `applications:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 */
export const PlatformCreateRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformCreateRedirectURLInput,
    outputSchema: PlatformCreateRedirectURLOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
