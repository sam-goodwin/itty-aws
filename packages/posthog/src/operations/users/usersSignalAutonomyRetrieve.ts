import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UsersSignalAutonomyRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{user_id}/signal_autonomy/" }),
  );
export type UsersSignalAutonomyRetrieveInput =
  typeof UsersSignalAutonomyRetrieveInput.Type;

// Output Schema
export const UsersSignalAutonomyRetrieveOutput =
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
export type UsersSignalAutonomyRetrieveOutput =
  typeof UsersSignalAutonomyRetrieveOutput.Type;

// The operation
/**
 * Per-user signal autonomy config (singleton keyed by user).
 * GET    /api/users/<id>/signal_autonomy/ → current config (or 404)
 * POST   /api/users/<id>/signal_autonomy/ → create or update
 * DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)
 */
export const usersSignalAutonomyRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersSignalAutonomyRetrieveInput,
    outputSchema: UsersSignalAutonomyRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
