import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteNotificationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/notification/{id}" }));
export type DeleteNotificationInput = typeof DeleteNotificationInput.Type;

// Output Schema
export const DeleteNotificationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNotificationOutput = typeof DeleteNotificationOutput.Type;

// The operation
/**
 * Delete notification
 *
 * @param id - The ID of the notification
 */
export const deleteNotification = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNotificationInput,
  outputSchema: DeleteNotificationOutput,
  errors: [BadRequest, NotFound] as const,
}));
