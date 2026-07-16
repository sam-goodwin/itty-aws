import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateVirtualFieldInput {
  dataset: string;
  description?: string;
  expression: string;
  name: string;
  type?: string;
  unit?: string;
}
export const CreateVirtualFieldInput =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/vfields" }),
  ) as unknown as Schema.Codec<CreateVirtualFieldInput>;

// Output Schema
export interface CreateVirtualFieldOutput {
  dataset: string;
  description?: string;
  expression: string;
  name: string;
  type?: string;
  unit?: string;
  id: string;
}
export const CreateVirtualFieldOutput =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    id: Schema.String,
  }) as unknown as Schema.Codec<CreateVirtualFieldOutput>;

// The operation
export const createVirtualField = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateVirtualFieldInput,
  outputSchema: CreateVirtualFieldOutput,
  errors: [UnprocessableEntity] as const,
}));
