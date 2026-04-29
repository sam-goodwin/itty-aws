import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UserlandSessionsControllerRevokeSessionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String,
    return_to: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/user_management/sessions/revoke" }));
export type UserlandSessionsControllerRevokeSessionInput =
  typeof UserlandSessionsControllerRevokeSessionInput.Type;

// Output Schema
export const UserlandSessionsControllerRevokeSessionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserlandSessionsControllerRevokeSessionOutput =
  typeof UserlandSessionsControllerRevokeSessionOutput.Type;

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
