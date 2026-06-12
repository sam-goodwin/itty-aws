import * as Schema from "effect/Schema";
import { ExternalDataSchemaSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExternalDataSchemasListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_schemas/",
    }),
  );
export type ExternalDataSchemasListInput =
  typeof ExternalDataSchemasListInput.Type;

// Output Schema
export const ExternalDataSchemasListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ExternalDataSchemaSchema)),
    ),
  });
export type ExternalDataSchemasListOutput =
  typeof ExternalDataSchemasListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const externalDataSchemasList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalDataSchemasListInput,
    outputSchema: ExternalDataSchemasListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
