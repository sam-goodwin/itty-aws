import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteRedirectURLInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    redirectURLID: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/platform/applications/{applicationID}/instances/{envOrInsID}/redirect_urls/{redirectURLID}",
  }),
);
export type DeleteRedirectURLInput = typeof DeleteRedirectURLInput.Type;

// Output Schema
export const DeleteRedirectURLOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteRedirectURLOutput = typeof DeleteRedirectURLOutput.Type;

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
export const deleteRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRedirectURLInput,
  outputSchema: DeleteRedirectURLOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
