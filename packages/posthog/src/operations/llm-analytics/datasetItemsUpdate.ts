import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DatasetItemsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    dataset: Schema.optional(Schema.String),
    input: Schema.optional(Schema.NullOr(Schema.Unknown)),
    output: Schema.optional(Schema.NullOr(Schema.Unknown)),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    ref_trace_id: Schema.optional(Schema.NullOr(Schema.String)),
    ref_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
    ref_source_id: Schema.optional(Schema.NullOr(Schema.String)),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    team: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/dataset_items/{id}/",
    }),
  );
export type DatasetItemsUpdateInput = typeof DatasetItemsUpdateInput.Type;

// Output Schema
export const DatasetItemsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    input: Schema.optional(Schema.NullOr(Schema.Unknown)),
    output: Schema.optional(Schema.NullOr(Schema.Unknown)),
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    ref_trace_id: Schema.optional(Schema.NullOr(Schema.String)),
    ref_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
    ref_source_id: Schema.optional(Schema.NullOr(Schema.String)),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    team: Schema.optional(Schema.Number),
  });
export type DatasetItemsUpdateOutput = typeof DatasetItemsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this dataset item.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const datasetItemsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatasetItemsUpdateInput,
  outputSchema: DatasetItemsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
