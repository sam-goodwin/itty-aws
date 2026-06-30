import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersPushTokensUnregisterCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    token: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/push_tokens/unregister/",
    }),
  );
export type UsersPushTokensUnregisterCreateInput =
  typeof UsersPushTokensUnregisterCreateInput.Type;

// Output Schema
export const UsersPushTokensUnregisterCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersPushTokensUnregisterCreateOutput =
  typeof UsersPushTokensUnregisterCreateOutput.Type;

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
