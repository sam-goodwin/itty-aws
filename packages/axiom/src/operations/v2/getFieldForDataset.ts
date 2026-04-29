import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetFieldForDatasetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset_id: Schema.String.pipe(T.PathParam()),
    field_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/datasets/{dataset_id}/fields/{field_id}",
    }),
  );
export type GetFieldForDatasetInput = typeof GetFieldForDatasetInput.Type;

// Output Schema
export const GetFieldForDatasetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    hidden: Schema.optional(Schema.Boolean),
    name: Schema.String,
    type: Schema.String,
    unit: Schema.optional(Schema.String),
  });
export type GetFieldForDatasetOutput = typeof GetFieldForDatasetOutput.Type;

// The operation
export const getFieldForDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetFieldForDatasetInput,
  outputSchema: GetFieldForDatasetOutput,
  errors: [NotFound] as const,
}));
