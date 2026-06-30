import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GetFieldsForDatasetInput {
  dataset_id: string;
}
export const GetFieldsForDatasetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/datasets/{dataset_id}/fields" }),
  ) as unknown as Schema.Codec<GetFieldsForDatasetInput>;

// Output Schema
export type GetFieldsForDatasetOutput = {
  description?: string;
  hidden?: boolean;
  name: string;
  type: string;
  unit?: string;
}[];
export const GetFieldsForDatasetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      hidden: Schema.optional(Schema.Boolean),
      name: Schema.String,
      type: Schema.String,
      unit: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<GetFieldsForDatasetOutput>;

// The operation
export const getFieldsForDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetFieldsForDatasetInput,
  outputSchema: GetFieldsForDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
