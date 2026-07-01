import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersPushTokensUnregisterCreateInput {
  uuid: string;
  token: string;
}
export const UsersPushTokensUnregisterCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    token: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/push_tokens/unregister/",
    }),
  ) as unknown as Schema.Codec<UsersPushTokensUnregisterCreateInput>;

// Output Schema
export type UsersPushTokensUnregisterCreateOutput = void;
export const UsersPushTokensUnregisterCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersPushTokensUnregisterCreateOutput>;

// The operation
/**
 * Unregister a push notification token
 *
 * Delete the row matching `(user, token)`. Returns 204 even if no row matches so the mobile client can call this unconditionally when the user opts out.
 */
export const usersPushTokensUnregisterCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersPushTokensUnregisterCreateInput,
    outputSchema: UsersPushTokensUnregisterCreateOutput,
  }));
