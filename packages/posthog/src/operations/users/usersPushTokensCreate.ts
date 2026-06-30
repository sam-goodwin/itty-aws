import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersPushTokensCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    token: Schema.String,
    platform: Schema.Literals(["ios", "android", "web"]),
  }).pipe(T.Http({ method: "POST", path: "/api/users/{uuid}/push_tokens/" }));
export type UsersPushTokensCreateInput = typeof UsersPushTokensCreateInput.Type;

// Output Schema
export const UsersPushTokensCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    platform: Schema.Literals(["ios", "android", "web"]),
    created_at: Schema.String,
    last_seen_at: Schema.String,
  });
export type UsersPushTokensCreateOutput =
  typeof UsersPushTokensCreateOutput.Type;

// The operation
/**
 * Register a push notification token
 *
 * Idempotent upsert: if the (user, token) pair already exists, `platform` and `last_seen_at` are refreshed. Otherwise a new row is created.
 */
export const usersPushTokensCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersPushTokensCreateInput,
    outputSchema: UsersPushTokensCreateOutput,
  }),
);
