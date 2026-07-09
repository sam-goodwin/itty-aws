import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateContactPropertyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    type: Schema.Literals(["string", "number"]),
    fallback_value: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "POST", path: "/contact-properties" }));
export type CreateContactPropertyInput = typeof CreateContactPropertyInput.Type;

// Output Schema
export const CreateContactPropertyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  });
export type CreateContactPropertyOutput =
  typeof CreateContactPropertyOutput.Type;

// The operation
/**
 * Create a new contact property
 */
export const createContactProperty = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateContactPropertyInput,
    outputSchema: CreateContactPropertyOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }),
);
