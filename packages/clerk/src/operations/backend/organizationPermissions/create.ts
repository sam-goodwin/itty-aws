import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  key: Schema.String,
  description: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/organization_permissions" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["permission"]),
  id: Schema.String,
  name: Schema.String,
  key: Schema.String,
  description: Schema.String,
  type: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create a new organization permission
 *
 * Creates a new organization permission for the given instance.
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [BadRequest, PaymentRequired, NotFound, UnprocessableEntity] as const,
}));
