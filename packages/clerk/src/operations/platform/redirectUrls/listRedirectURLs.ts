import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const ListRedirectURLsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ListRedirectURLsInput = typeof ListRedirectURLsInput.Type;

// Output Schema
export const ListRedirectURLsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type ListRedirectURLsOutput = typeof ListRedirectURLsOutput.Type;

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
export const listRedirectURLs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRedirectURLsInput,
  outputSchema: ListRedirectURLsOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
