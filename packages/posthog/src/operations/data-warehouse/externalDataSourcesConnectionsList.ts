import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExternalDataSourcesConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/connections/",
    }),
  );
export type ExternalDataSourcesConnectionsListInput =
  typeof ExternalDataSourcesConnectionsListInput.Type;

// Output Schema
export const ExternalDataSourcesConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        prefix: Schema.NullOr(Schema.String),
        engine: Schema.Unknown,
      }),
    ),
  });
export type ExternalDataSourcesConnectionsListOutput =
  typeof ExternalDataSourcesConnectionsListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const externalDataSourcesConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesConnectionsListInput,
    outputSchema: ExternalDataSourcesConnectionsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
