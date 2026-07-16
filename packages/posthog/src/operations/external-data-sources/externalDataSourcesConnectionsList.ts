import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExternalDataSourcesConnectionsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const ExternalDataSourcesConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/connections/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesConnectionsListInput>;

// Output Schema
export interface ExternalDataSourcesConnectionsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    prefix?: string | null;
    engine?: "duckdb" | "postgres" | "mysql" | null;
  }[];
}
export const ExternalDataSourcesConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          prefix: Schema.optional(Schema.NullOr(Schema.String)),
          engine: Schema.optional(
            Schema.NullOr(Schema.Literals(["duckdb", "postgres", "mysql"])),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ExternalDataSourcesConnectionsListOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesConnectionsListInput,
    outputSchema: ExternalDataSourcesConnectionsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
