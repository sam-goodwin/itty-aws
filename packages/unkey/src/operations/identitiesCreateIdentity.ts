import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, Conflict } from "../errors.ts";

// Input Schema
export const IdentitiesCreateIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalId: Schema.String,
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
  }).pipe(T.Http({ method: "POST", path: "/v2/identities.createIdentity" }));
export type IdentitiesCreateIdentityInput =
  typeof IdentitiesCreateIdentityInput.Type;

// Output Schema
export const IdentitiesCreateIdentityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      identityId: Schema.String,
    }),
  });
export type IdentitiesCreateIdentityOutput =
  typeof IdentitiesCreateIdentityOutput.Type;

// The operation
/**
 * Create Identity
 *
 * Create an identity to group multiple API keys under a single entity. Identities enable shared rate limits and metadata across all associated keys.
 * Perfect for users with multiple devices, organizations with multiple API keys, or when you need unified rate limiting across different services.
 * **Important**
 * Requires `identity.*.create_identity` permission
 */
export const identitiesCreateIdentity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IdentitiesCreateIdentityInput,
    outputSchema: IdentitiesCreateIdentityOutput,
    errors: [BadRequest, Forbidden, Conflict] as const,
  }),
);
