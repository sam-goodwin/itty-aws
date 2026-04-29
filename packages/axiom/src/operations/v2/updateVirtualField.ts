import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateVirtualFieldInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PUT", path: "/v2/vfields/{id}" }));
export type UpdateVirtualFieldInput = typeof UpdateVirtualFieldInput.Type;

// Output Schema
export const UpdateVirtualFieldOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    id: Schema.String,
  });
export type UpdateVirtualFieldOutput = typeof UpdateVirtualFieldOutput.Type;

// The operation
export const updateVirtualField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateVirtualFieldInput,
  outputSchema: UpdateVirtualFieldOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
