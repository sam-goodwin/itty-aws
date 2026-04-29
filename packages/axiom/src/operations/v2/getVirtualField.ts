import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetVirtualFieldInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/vfields/{id}" }));
export type GetVirtualFieldInput = typeof GetVirtualFieldInput.Type;

// Output Schema
export const GetVirtualFieldOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.String,
  description: Schema.optional(Schema.String),
  expression: Schema.String,
  name: Schema.String,
  type: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  id: Schema.String,
});
export type GetVirtualFieldOutput = typeof GetVirtualFieldOutput.Type;

// The operation
export const getVirtualField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVirtualFieldInput,
  outputSchema: GetVirtualFieldOutput,
  errors: [NotFound] as const,
}));
