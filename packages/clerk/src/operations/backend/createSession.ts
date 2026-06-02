import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateSessionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String,
  active_organization_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/sessions" }));
export type CreateSessionInput = typeof CreateSessionInput.Type;

// Output Schema
export const CreateSessionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateSessionOutput = typeof CreateSessionOutput.Type;

// The operation
/**
 * Create a new active session
 *
 * Create a new active session for the provided user ID.
 * **This operation is intended only for use in testing, and is not available for production instances.** If you are looking to generate a user session from the backend,
 * we recommend using the [Sign-in Tokens](https://clerk.com/docs/reference/backend-api/tag/Sign-in-Tokens#operation/CreateSignInToken) resource instead.
 */
export const createSession = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSessionInput,
  outputSchema: CreateSessionOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
