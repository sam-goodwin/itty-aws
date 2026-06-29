import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetRedirectURLInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  envOrInsID: Schema.String.pipe(T.PathParam()),
  redirectURLID: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/redirect_urls/{redirectURLID}",
  }),
);
export type GetRedirectURLInput = typeof GetRedirectURLInput.Type;

// Output Schema
export const GetRedirectURLOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["redirect_url"]),
  id: Schema.String,
  url: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type GetRedirectURLOutput = typeof GetRedirectURLOutput.Type;

// The operation
/**
 * Get a redirect URL
 *
 * Retrieve a redirect URL for an application instance.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Requires the `applications:read` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param redirectURLID - Redirect URL ID.
 */
export const getRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetRedirectURLInput,
  outputSchema: GetRedirectURLOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
