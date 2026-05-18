import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNotificationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.String,
  }).pipe(T.Http({ method: "DELETE", path: "/notifications" }));
export type DeleteNotificationsInput = typeof DeleteNotificationsInput.Type;

// Output Schema
export const DeleteNotificationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNotificationsOutput = typeof DeleteNotificationsOutput.Type;

// The operation
/**
 * Delete multiple notifications
 *
 * @param ids - The IDs of the notifications
 */
export const deleteNotifications = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNotificationsInput,
  outputSchema: DeleteNotificationsOutput,
  errors: [BadRequest, NotFound] as const,
}));
