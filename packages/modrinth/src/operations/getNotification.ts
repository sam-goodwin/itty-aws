import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetNotificationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/notification/{id}" }));
export type GetNotificationInput = typeof GetNotificationInput.Type;

// Output Schema
export const GetNotificationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type GetNotificationOutput = typeof GetNotificationOutput.Type;

// The operation
/**
 * Get notification from ID
 *
 * @param id - The ID of the notification
 */
export const getNotification = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNotificationInput,
  outputSchema: GetNotificationOutput,
  errors: [BadRequest, NotFound] as const,
}));
