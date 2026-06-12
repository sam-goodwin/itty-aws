import * as Schema from "effect/Schema";
import { DatasetSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DatasetsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id__in: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order_by: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/datasets/" }),
);
export type DatasetsListInput = typeof DatasetsListInput.Type;

// Output Schema
export const DatasetsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => DatasetSchema))),
});
export type DatasetsListOutput = typeof DatasetsListOutput.Type;

// The operation
/**
 *
 * @param id__in - Multiple values may be separated by commas.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Ordering

* `created_at` - Created At
* `-created_at` - Created At (descending)
* `updated_at` - Updated At
* `-updated_at` - Updated At (descending)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search in name, description, or metadata
 */
export const datasetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatasetsListInput,
  outputSchema: DatasetsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
