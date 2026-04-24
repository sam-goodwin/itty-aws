import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound, UnprocessableEntity } from "../../errors";

// Input Schema
export const UpdateFieldForDatasetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset_id: Schema.String.pipe(T.PathParam()),
    field_id: Schema.String.pipe(T.PathParam()),
    description: Schema.optional(Schema.String),
    hidden: Schema.optional(Schema.Boolean),
    name: Schema.String,
    type: Schema.String,
    unit: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/v2/datasets/{dataset_id}/fields/{field_id}",
    }),
  );
export type UpdateFieldForDatasetInput = typeof UpdateFieldForDatasetInput.Type;

// Output Schema
export const UpdateFieldForDatasetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    hidden: Schema.optional(Schema.Boolean),
    name: Schema.String,
    type: Schema.String,
    unit: Schema.optional(Schema.String),
  });
export type UpdateFieldForDatasetOutput =
  typeof UpdateFieldForDatasetOutput.Type;

// The operation
export const updateFieldForDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateFieldForDatasetInput,
    outputSchema: UpdateFieldForDatasetOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
