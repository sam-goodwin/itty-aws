import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateVirtualFieldInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/vfields" }));
export type CreateVirtualFieldInput = typeof CreateVirtualFieldInput.Type;

// Output Schema
export const CreateVirtualFieldOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    id: Schema.String,
  });
export type CreateVirtualFieldOutput = typeof CreateVirtualFieldOutput.Type;

// The operation
export const createVirtualField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateVirtualFieldInput,
  outputSchema: CreateVirtualFieldOutput,
  errors: [UnprocessableEntity] as const,
}));
