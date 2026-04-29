import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UsersSignalAutonomyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    user: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      first_name: Schema.String,
      last_name: Schema.String,
      email: Schema.String,
    }),
    autostart_priority: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/api/users/{user_id}/signal_autonomy/" }),
  );
export type UsersSignalAutonomyCreateInput =
  typeof UsersSignalAutonomyCreateInput.Type;

// Output Schema
export const UsersSignalAutonomyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    user: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      first_name: Schema.String,
      last_name: Schema.String,
      email: Schema.String,
    }),
    autostart_priority: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type UsersSignalAutonomyCreateOutput =
  typeof UsersSignalAutonomyCreateOutput.Type;

// The operation
/**
 * Per-user signal autonomy config (singleton keyed by user).
 * GET    /api/users/<id>/signal_autonomy/ → current config (or 404)
 * POST   /api/users/<id>/signal_autonomy/ → create or update
 * DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)
 */
export const usersSignalAutonomyCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersSignalAutonomyCreateInput,
    outputSchema: UsersSignalAutonomyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
