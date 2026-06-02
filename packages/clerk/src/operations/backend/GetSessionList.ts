import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const GetSessionListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  client_id: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "abandoned",
      "active",
      "ended",
      "expired",
      "removed",
      "replaced",
      "revoked",
    ]),
  ),
  paginated: Schema.optional(Schema.Boolean),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/sessions" }));
export type GetSessionListInput = typeof GetSessionListInput.Type;

// Output Schema
export const GetSessionListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
  }),
);
export type GetSessionListOutput = typeof GetSessionListOutput.Type;

// The operation
/**
 * List all sessions
 *
 * Returns a list of sessions matching the provided criteria.
 * The sessions are returned sorted by creation date, with the newest sessions appearing first.
 * Note: This endpoint does not return all sessions that have ever existed. Old and inactive sessions are periodically cleaned up and will not be included in the results.
 * **Deprecation Notice (2024-01-01):** All parameters were initially considered optional, however
 * moving forward at least one of `client_id` or `user_id` parameters should be provided.
 *
 * @param client_id - List sessions for the given client
 * @param user_id - List sessions for the given user
 * @param status - Filter sessions by the provided status
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const GetSessionList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSessionListInput,
  outputSchema: GetSessionListOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
