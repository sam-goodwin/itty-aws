import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const GetVirtualFieldsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/v2/vfields" }));
export type GetVirtualFieldsInput = typeof GetVirtualFieldsInput.Type;

// Output Schema
export const GetVirtualFieldsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    id: Schema.String,
  }),
);
export type GetVirtualFieldsOutput = typeof GetVirtualFieldsOutput.Type;

// The operation
export const getVirtualFields = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVirtualFieldsInput,
  outputSchema: GetVirtualFieldsOutput,
}));
