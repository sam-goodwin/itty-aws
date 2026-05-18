import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetUserNotificationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/user/{id_or_username}/notifications" }),
  );
export type GetUserNotificationsInput = typeof GetUserNotificationsInput.Type;

// Output Schema
export const GetUserNotificationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      user_id: Schema.String,
      type: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "project_update",
            "team_invite",
            "status_change",
            "moderator_message",
          ]),
        ),
      ),
      title: Schema.String,
      text: Schema.String,
      link: Schema.String,
      read: Schema.Boolean,
      created: Schema.String,
      actions: Schema.Array(
        Schema.Struct({
          title: Schema.optional(Schema.String),
          action_route: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  );
export type GetUserNotificationsOutput = typeof GetUserNotificationsOutput.Type;

// The operation
/**
 * Get user's notifications
 *
 * @param id_or_username - The ID or username of the user
 */
export const getUserNotifications = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetUserNotificationsInput,
    outputSchema: GetUserNotificationsOutput,
    errors: [NotFound] as const,
  }),
);
