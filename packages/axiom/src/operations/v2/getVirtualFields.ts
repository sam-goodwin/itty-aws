import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface GetVirtualFieldsInput {
  dataset: string;
}
export const GetVirtualFieldsInput = /*@__PURE__*/ Schema.Struct({
  dataset: Schema.String,
}).pipe(
  T.Http({ method: "GET", path: "/v2/vfields" }),
) as unknown as Schema.Codec<GetVirtualFieldsInput>;

// Output Schema
export type GetVirtualFieldsOutput = ReadonlyArray<{
  dataset: string;
  description?: string;
  expression: string;
  name: string;
  type?: string;
  unit?: string;
  id: string;
}>;
export const GetVirtualFieldsOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<GetVirtualFieldsOutput>;

// The operation
export const getVirtualFields = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetVirtualFieldsInput,
  outputSchema: GetVirtualFieldsOutput,
}));
