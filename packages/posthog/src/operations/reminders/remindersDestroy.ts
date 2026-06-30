import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const RemindersDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/api/reminders/{id}/" }));
export type RemindersDestroyInput = typeof RemindersDestroyInput.Type;

// Output Schema
export const RemindersDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemindersDestroyOutput = typeof RemindersDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this reminder.
 */
export const remindersDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RemindersDestroyInput,
  outputSchema: RemindersDestroyOutput,
}));
