import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteNotifierInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/notifiers/{id}" }));
export type DeleteNotifierInput = typeof DeleteNotifierInput.Type;

// Output Schema
export const DeleteNotifierOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteNotifierOutput = typeof DeleteNotifierOutput.Type;

// The operation
/**
 * Delete notifier
 */
export const deleteNotifier = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNotifierInput,
  outputSchema: DeleteNotifierOutput,
  errors: [NotFound] as const,
}));
