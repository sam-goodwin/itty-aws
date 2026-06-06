import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const IdentitiesListIdentitiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/identities.listIdentities" }));
export type IdentitiesListIdentitiesInput =
  typeof IdentitiesListIdentitiesInput.Type;

// Output Schema
export const IdentitiesListIdentitiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        externalId: Schema.String,
        meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        ratelimits: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              limit: Schema.Number,
              duration: Schema.Number,
              autoApply: Schema.Boolean,
            }),
          ),
        ),
      }),
    ),
    pagination: Schema.Struct({
      cursor: Schema.optional(Schema.String),
      hasMore: Schema.Boolean,
    }),
  });
export type IdentitiesListIdentitiesOutput =
  typeof IdentitiesListIdentitiesOutput.Type;

// The operation
/**
 * List Identities
 *
 * Get a paginated list of all identities in your workspace. Returns metadata and rate limit configurations.
 * Perfect for building management dashboards, auditing configurations, or browsing your identities.
 * > **Important**
 * > Requires `identity.*.read_identity` permission
 */
export const identitiesListIdentities = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IdentitiesListIdentitiesInput,
    outputSchema: IdentitiesListIdentitiesOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
