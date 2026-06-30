import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface UserlandSessionsControllerRevokeSessionInput {
  session_id?: string;
}
export const UserlandSessionsControllerRevokeSessionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/sessions/revoke" }),
  ) as unknown as Schema.Codec<UserlandSessionsControllerRevokeSessionInput>;

// Output Schema
export type UserlandSessionsControllerRevokeSessionOutput = void;
export const UserlandSessionsControllerRevokeSessionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserlandSessionsControllerRevokeSessionOutput>;

// The operation
/**
 * Revoke Session
 *
 * Revoke a [user session](/reference/authkit/session).
 */
export const UserlandSessionsControllerRevokeSession =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandSessionsControllerRevokeSessionInput,
    outputSchema: UserlandSessionsControllerRevokeSessionOutput,
    errors: [BadRequest] as const,
  }));
