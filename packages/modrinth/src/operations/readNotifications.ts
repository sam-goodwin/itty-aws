import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ReadNotificationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ids: Schema.String,
  },
).pipe(T.Http({ method: "PATCH", path: "/notifications" }));
export type ReadNotificationsInput = typeof ReadNotificationsInput.Type;

// Output Schema
export const ReadNotificationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReadNotificationsOutput = typeof ReadNotificationsOutput.Type;

// The operation
/**
 * Mark multiple notifications as read
 *
 * @param ids - The IDs of the notifications
 */
export const readNotifications = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadNotificationsInput,
  outputSchema: ReadNotificationsOutput,
  errors: [BadRequest, NotFound] as const,
}));
