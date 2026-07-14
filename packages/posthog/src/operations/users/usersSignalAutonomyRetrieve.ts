import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersSignalAutonomyRetrieveInput {
  user_id: string;
}
export const UsersSignalAutonomyRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{user_id}/signal_autonomy/" }),
  ) as unknown as Schema.Codec<UsersSignalAutonomyRetrieveInput>;

// Output Schema
export interface UsersSignalAutonomyRetrieveOutput {
  id?: string;
  user?: {
    id?: number;
    uuid?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
  };
  autostart_priority?: "P0" | "P1" | "P2" | "P3" | "P4" | "" | null;
  slack_notification_integration_id?: number | null;
  slack_notification_channel?: string | null;
  slack_notification_min_priority?:
    | "P0"
    | "P1"
    | "P2"
    | "P3"
    | "P4"
    | ""
    | null;
  created_at?: string;
  updated_at?: string;
}
export const UsersSignalAutonomyRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    user: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
      }),
    ),
    autostart_priority: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["P0", "P1", "P2", "P3", "P4"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    slack_notification_integration_id: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    slack_notification_channel: Schema.optional(Schema.NullOr(Schema.String)),
    slack_notification_min_priority: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["P0", "P1", "P2", "P3", "P4"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UsersSignalAutonomyRetrieveOutput>;

// The operation
/**
 * Per-user signal autonomy config (singleton keyed by user).
 * GET    /api/users/<id>/signal_autonomy/ → current config (or 404)
 * POST   /api/users/<id>/signal_autonomy/ → create or update
 * DELETE /api/users/<id>/signal_autonomy/ → remove (opt out)
 */
export const usersSignalAutonomyRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersSignalAutonomyRetrieveInput,
  outputSchema: UsersSignalAutonomyRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
