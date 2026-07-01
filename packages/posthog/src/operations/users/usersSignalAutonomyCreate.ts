import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersSignalAutonomyCreateInput {
  user_id: string;
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
export const UsersSignalAutonomyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({ method: "POST", path: "/api/users/{user_id}/signal_autonomy/" }),
  ) as unknown as Schema.Codec<UsersSignalAutonomyCreateInput>;

// Output Schema
export interface UsersSignalAutonomyCreateOutput {
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
export const UsersSignalAutonomyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<UsersSignalAutonomyCreateOutput>;

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
