import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const RevokeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  session_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/sessions/{session_id}/revoke" }));
export type RevokeInput = typeof RevokeInput.Type;

// Output Schema
export const RevokeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["session"]),
  id: Schema.String,
  user_id: Schema.String,
  client_id: Schema.String,
  actor: Schema.optional(Schema.NullOr(Schema.Unknown)),
  status: Schema.Literals([
    "active",
    "revoked",
    "ended",
    "expired",
    "removed",
    "abandoned",
    "replaced",
    "pending",
  ]),
  last_active_organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  last_active_at: Schema.Number,
  latest_activity: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        device_type: Schema.optional(Schema.String),
        is_mobile: Schema.Boolean,
        browser_name: Schema.optional(Schema.String),
        browser_version: Schema.optional(Schema.String),
        ip_address: Schema.optional(Schema.String),
        city: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
      }),
    ),
  ),
  expire_at: Schema.Number,
  abandon_at: Schema.Number,
  updated_at: Schema.Number,
  created_at: Schema.Number,
  tasks: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          key: Schema.String,
        }),
      ),
    ),
  ),
});
export type RevokeOutput = typeof RevokeOutput.Type;

// The operation
/**
 * Revoke a session
 *
 * Sets the status of a session as "revoked", which is an unauthenticated state.
 * In multi-session mode, a revoked session will still be returned along with its client object, however the user will need to sign in again.
 *
 * @param session_id - The ID of the session
 */
export const revoke = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeInput,
  outputSchema: RevokeOutput,
  errors: [BadRequest, NotFound] as const,
}));
