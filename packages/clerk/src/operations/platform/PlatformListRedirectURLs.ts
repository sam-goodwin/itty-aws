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
export const PlatformListRedirectURLsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/redirect_urls",
    }),
  );
export type PlatformListRedirectURLsInput =
  typeof PlatformListRedirectURLsInput.Type;

// Output Schema
export const PlatformListRedirectURLsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["redirect_url"]),
        id: Schema.String,
        url: Schema.String,
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    total_count: Schema.Number,
  });
export type PlatformListRedirectURLsOutput =
  typeof PlatformListRedirectURLsOutput.Type;

// The operation
/**
 * List redirect URLs
 *
 * List all redirect URLs for an application instance.
 * The `envOrInsID` parameter can be either an environment type (e.g., "development", "production")
 * or an instance ID.
 * Requires the `applications:read` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 * @param limit - Number of results to return per page (1-500, default 10).
 * @param offset - Number of results to skip for pagination.
 */
export const PlatformListRedirectURLs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformListRedirectURLsInput,
    outputSchema: PlatformListRedirectURLsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
