import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const IdentitiesUpdateIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identity: Schema.String,
    meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    ratelimits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          limit: Schema.Number,
          duration: Schema.Number,
          autoApply: Schema.Boolean,
        }),
      ),
    ),
  }).pipe(T.Http({ method: "POST", path: "/v2/identities.updateIdentity" }));
export type IdentitiesUpdateIdentityInput =
  typeof IdentitiesUpdateIdentityInput.Type;

// Output Schema
export const IdentitiesUpdateIdentityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
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
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
  });
export type IdentitiesUpdateIdentityOutput =
  typeof IdentitiesUpdateIdentityOutput.Type;

// The operation
/**
 * Update Identity
 *
 * Update an identity's metadata and rate limits. Only specified fields are modified - others remain unchanged.
 * Perfect for subscription changes, plan upgrades, or updating user information. Changes take effect immediately.
 * > **Important**
 * > Requires `identity.*.update_identity` permission
 * > Rate limit changes propagate within 30 seconds
 */
export const identitiesUpdateIdentity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IdentitiesUpdateIdentityInput,
    outputSchema: IdentitiesUpdateIdentityOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
