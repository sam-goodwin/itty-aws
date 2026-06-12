import * as Schema from "effect/Schema";
import { NotifierPropertiesSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetNotifierInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/notifiers/{id}" }));
export type GetNotifierInput = typeof GetNotifierInput.Type;

// Output Schema
export const GetNotifierOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.suspend(() => NotifierPropertiesSchema),
  id: Schema.optional(Schema.String),
});
export type GetNotifierOutput = typeof GetNotifierOutput.Type;

// The operation
/**
 * Retrieves detailed configuration for a specific notifier by its unique identifier
 *
 * @param id - Unique identifier of the notifier (format: notify_*)
 */
export const getNotifier = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNotifierInput,
  outputSchema: GetNotifierOutput,
  errors: [NotFound] as const,
}));
