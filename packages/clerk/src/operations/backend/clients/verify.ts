import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const VerifyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/clients/verify" }));
export type VerifyInput = typeof VerifyInput.Type;

// Output Schema
export const VerifyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["client"]),
  id: Schema.String,
  session_ids: Schema.Array(Schema.String),
  sessions: Schema.Array(
    Schema.Struct({
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
      last_active_organization_id: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
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
    }),
  ),
  sign_in_id: Schema.NullOr(Schema.String),
  sign_up_id: Schema.NullOr(Schema.String),
  last_active_session_id: Schema.NullOr(Schema.String),
  last_authentication_strategy: Schema.NullOr(Schema.String),
  updated_at: Schema.Number,
  created_at: Schema.Number,
});
export type VerifyOutput = typeof VerifyOutput.Type;

// The operation
/**
 * Verify a client
 *
 * Verifies the client in the provided token
 */
export const verify = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyInput,
  outputSchema: VerifyOutput,
  errors: [BadRequest, NotFound] as const,
}));
