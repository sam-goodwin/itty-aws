import * as Schema from "effect/Schema";
import { NotifierPropertiesSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateNotifierInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.suspend(() => NotifierPropertiesSchema),
}).pipe(T.Http({ method: "POST", path: "/v2/notifiers" }));
export type CreateNotifierInput = typeof CreateNotifierInput.Type;

// Output Schema
export const CreateNotifierOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.suspend(() => NotifierPropertiesSchema),
  id: Schema.optional(Schema.String),
});
export type CreateNotifierOutput = typeof CreateNotifierOutput.Type;

// The operation
/**
 * Creates a new notifier configuration for sending alerts through various channels (Slack, Email, etc)
 */
export const createNotifier = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNotifierInput,
  outputSchema: CreateNotifierOutput,
  errors: [UnprocessableEntity] as const,
}));
