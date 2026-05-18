import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ReadNotificationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/notification/{id}" }));
export type ReadNotificationInput = typeof ReadNotificationInput.Type;

// Output Schema
export const ReadNotificationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReadNotificationOutput = typeof ReadNotificationOutput.Type;

// The operation
/**
 * Mark notification as read
 *
 * @param id - The ID of the notification
 */
export const readNotification = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReadNotificationInput,
  outputSchema: ReadNotificationOutput,
  errors: [BadRequest, NotFound] as const,
}));
