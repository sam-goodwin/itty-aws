import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const ExternalDataSourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/",
    }),
  );
export type ExternalDataSourcesListInput =
  typeof ExternalDataSourcesListInput.Type;

// Output Schema
export const ExternalDataSourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        created_by: Schema.NullOr(Schema.String),
        status: Schema.String,
        client_secret: SensitiveString,
        account_id: Schema.String,
        source_type: Schema.Struct({}),
        latest_error: Schema.NullOr(Schema.String),
        prefix: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        access_method: Schema.Struct({}),
        engine: Schema.Unknown,
        last_run_at: Schema.NullOr(Schema.String),
        schemas: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        job_inputs: Schema.optional(Schema.NullOr(Schema.Unknown)),
        revenue_analytics_config: Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          include_invoiceless_charges: Schema.optional(Schema.Boolean),
        }),
        user_access_level: Schema.NullOr(Schema.String),
        supports_webhooks: Schema.Boolean,
      }),
    ),
  });
export type ExternalDataSourcesListOutput =
  typeof ExternalDataSourcesListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const externalDataSourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalDataSourcesListInput,
    outputSchema: ExternalDataSourcesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
