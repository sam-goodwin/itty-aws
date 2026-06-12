import * as Schema from "effect/Schema";
import { NotifierPropertiesSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateNotifierInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.suspend(() => NotifierPropertiesSchema),
}).pipe(T.Http({ method: "PUT", path: "/v2/notifiers/{id}" }));
export type UpdateNotifierInput = typeof UpdateNotifierInput.Type;

// Output Schema
export const UpdateNotifierOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.suspend(() => NotifierPropertiesSchema),
  id: Schema.optional(Schema.String),
});
export type UpdateNotifierOutput = typeof UpdateNotifierOutput.Type;

// The operation
/**
 * Update notifier
 */
export const updateNotifier = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateNotifierInput,
  outputSchema: UpdateNotifierOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
