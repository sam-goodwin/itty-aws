import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const IdentitiesGetIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identity: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/identities.getIdentity" }));
export type IdentitiesGetIdentityInput = typeof IdentitiesGetIdentityInput.Type;

// Output Schema
export const IdentitiesGetIdentityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
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
  });
export type IdentitiesGetIdentityOutput =
  typeof IdentitiesGetIdentityOutput.Type;

// The operation
/**
 * Get Identity
 *
 * Retrieve an identity by external ID. Returns metadata, rate limits, and other associated data.
 * Use this to check if an identity exists, view configurations, or build management dashboards.
 * > **Important**
 * > Requires `identity.*.read_identity` permission
 */
export const identitiesGetIdentity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IdentitiesGetIdentityInput,
    outputSchema: IdentitiesGetIdentityOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
