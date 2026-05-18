import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetNotificationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/notifications" }));
export type GetNotificationsInput = typeof GetNotificationsInput.Type;

// Output Schema
export const GetNotificationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
export type GetNotificationsOutput = typeof GetNotificationsOutput.Type;

// The operation
/**
 * Get multiple notifications
 *
 * @param ids - The IDs of the notifications
 */
export const getNotifications = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNotificationsInput,
  outputSchema: GetNotificationsOutput,
  errors: [BadRequest, NotFound] as const,
}));
