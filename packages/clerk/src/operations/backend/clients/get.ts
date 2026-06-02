import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  client_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/clients/{client_id}" }));
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Get a client
 *
 * Returns the details of a client.
 *
 * @param client_id - Client ID.
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [BadRequest, NotFound] as const,
}));
