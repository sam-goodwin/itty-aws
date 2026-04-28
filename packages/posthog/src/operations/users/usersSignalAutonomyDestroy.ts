import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const UsersSignalAutonomyDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/users/{user_id}/signal_autonomy/" }),
  );
export type UsersSignalAutonomyDestroyInput =
  typeof UsersSignalAutonomyDestroyInput.Type;

// Output Schema
export const UsersSignalAutonomyDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersSignalAutonomyDestroyOutput =
  typeof UsersSignalAutonomyDestroyOutput.Type;

// The operation
/**
 * Per-user signal autonomy config (singleton keyed by user).
 * GET    /api/users/<id>/signal_autonomy/ → current config (or 404)
 * POST   /api/users/<id>/signal_autonomy/ → create or update
 * DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)
 */
export const usersSignalAutonomyDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersSignalAutonomyDestroyInput,
    outputSchema: UsersSignalAutonomyDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
