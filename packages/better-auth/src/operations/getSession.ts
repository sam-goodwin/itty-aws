import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Session, User } from "../schemas.ts";

// Input Schema
export interface GetSessionInput {
  disableCookieCache?: boolean;
  disableRefresh?: boolean;
}
export const GetSessionInput = /*@__PURE__*/ Schema.Struct({
  disableCookieCache: Schema.optional(Schema.Boolean).pipe(T.QueryParam()),
  disableRefresh: Schema.optional(Schema.Boolean).pipe(T.QueryParam()),
}).pipe(
  T.Http({ method: "GET", path: "/get-session" }),
) as unknown as Schema.Codec<GetSessionInput>;

// Output Schema
export interface GetSessionOutput {
  session: Session;
  user: User;
}
export const GetSessionOutput = /*@__PURE__*/ Schema.NullOr(
  Schema.Struct({
    session: Session,
    user: User,
  }),
) as unknown as Schema.Codec<GetSessionOutput | null>;

/**
 * Get the current session.
 *
 * Reads the session from the request's cookie/bearer. Returns
 * `{ session, user }` when authenticated, or `null` when not (this does not
 * error on an unauthenticated request).
 *
 * @param disableCookieCache - Optional; bypass the short-lived cookie cache.
 * @param disableRefresh - Optional; do not slide the session expiry.
 */
export const getSession = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetSessionInput,
  outputSchema: GetSessionOutput,
}));
