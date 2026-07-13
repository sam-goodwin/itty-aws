/**
 * Shared response object schemas reused across better-auth operations.
 *
 * Dates are serialized as ISO-8601 strings over the HTTP JSON body, so they
 * are modeled as `string` here (not `Schema.Date`). better-auth allows
 * `additionalFields` on `user`/`session`; excess properties are ignored on
 * decode rather than surfaced as typed fields.
 */
import * as Schema from "effect/Schema";

/** An authenticated user record. */
export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
}
export const User = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  email: Schema.String,
  emailVerified: Schema.Boolean,
  image: Schema.optional(Schema.NullOr(Schema.String)),
  createdAt: Schema.String,
  updatedAt: Schema.String,
});

/** A session record for a signed-in user. */
export interface Session {
  id: string;
  token: string;
  userId: string;
  expiresAt: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  createdAt: string;
  updatedAt: string;
}
export const Session = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  token: Schema.String,
  userId: Schema.String,
  expiresAt: Schema.String,
  ipAddress: Schema.optional(Schema.NullOr(Schema.String)),
  userAgent: Schema.optional(Schema.NullOr(Schema.String)),
  createdAt: Schema.String,
  updatedAt: Schema.String,
});

/** A linked OAuth/credential account, as returned by `listAccounts`. */
export interface Account {
  id: string;
  providerId: string;
  accountId: string;
  scopes: string[];
  createdAt: string;
  updatedAt: string;
}
export const Account = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  providerId: Schema.String,
  accountId: Schema.String,
  scopes: Schema.Array(Schema.String),
  createdAt: Schema.String,
  updatedAt: Schema.String,
});
