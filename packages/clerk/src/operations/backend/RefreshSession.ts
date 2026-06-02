import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const RefreshSessionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  session_id: Schema.String.pipe(T.PathParam()),
  expired_token: Schema.String,
  refresh_token: SensitiveString,
  request_origin: Schema.String,
  request_headers: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  format: Schema.optional(Schema.NullOr(Schema.Literals(["token", "cookie"]))),
  request_originating_ip: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/sessions/{session_id}/refresh" }));
export type RefreshSessionInput = typeof RefreshSessionInput.Type;

// Output Schema
export const RefreshSessionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type RefreshSessionOutput = typeof RefreshSessionOutput.Type;

// The operation
/**
 * Refresh a session
 *
 * Refreshes a session by creating a new session token. A 401 is returned when there
 * are validation errors, which signals the SDKs to fall back to the handshake flow.
 *
 * @param session_id - The ID of the session
 */
export const RefreshSession = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RefreshSessionInput,
  outputSchema: RefreshSessionOutput,
  errors: [BadRequest] as const,
}));
