import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersPushTokensCreateInput {
  uuid: string;
  token: string;
  platform: "ios" | "android" | "web";
}
export const UsersPushTokensCreateInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    token: Schema.String,
    platform: Schema.Literals(["ios", "android", "web"]),
  }).pipe(
    T.Http({ method: "POST", path: "/api/users/{uuid}/push_tokens/" }),
  ) as unknown as Schema.Codec<UsersPushTokensCreateInput>;

// Output Schema
export interface UsersPushTokensCreateOutput {
  id: string;
  platform: "ios" | "android" | "web";
  created_at: string;
  last_seen_at: string;
}
export const UsersPushTokensCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    platform: Schema.Literals(["ios", "android", "web"]),
    created_at: Schema.String,
    last_seen_at: Schema.String,
  }) as unknown as Schema.Codec<UsersPushTokensCreateOutput>;

// The operation
/**
 * Register a push notification token
 *
 * Idempotent upsert: if the (user, token) pair already exists, `platform` and `last_seen_at` are refreshed. Otherwise a new row is created.
 */
export const usersPushTokensCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersPushTokensCreateInput,
  outputSchema: UsersPushTokensCreateOutput,
}));
