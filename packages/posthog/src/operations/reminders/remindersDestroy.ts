import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface RemindersDestroyInput {
  id: string;
}
export const RemindersDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/reminders/{id}/" }),
) as unknown as Schema.Codec<RemindersDestroyInput>;

// Output Schema
export type RemindersDestroyOutput = void;
export const RemindersDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RemindersDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this reminder.
 */
export const remindersDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RemindersDestroyInput,
  outputSchema: RemindersDestroyOutput,
}));
