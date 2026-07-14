import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersSignalAutonomyDestroyInput {
  user_id: string;
}
export const UsersSignalAutonomyDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/users/{user_id}/signal_autonomy/" }),
  ) as unknown as Schema.Codec<UsersSignalAutonomyDestroyInput>;

// Output Schema
export type UsersSignalAutonomyDestroyOutput = void;
export const UsersSignalAutonomyDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersSignalAutonomyDestroyOutput>;

// The operation
/**
 * Per-user signal autonomy config (singleton keyed by user).
 * GET    /api/users/<id>/signal_autonomy/ → current config (or 404)
 * POST   /api/users/<id>/signal_autonomy/ → create or update
 * DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)
 */
export const usersSignalAutonomyDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersSignalAutonomyDestroyInput,
  outputSchema: UsersSignalAutonomyDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
