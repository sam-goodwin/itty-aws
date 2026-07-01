import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ExternalDataSourcesConnectLinkRetrieveInput {
  project_id: string;
  source_type: string;
}
export const ExternalDataSourcesConnectLinkRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_type: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/connect_link/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesConnectLinkRetrieveInput>;

// Output Schema
export interface ExternalDataSourcesConnectLinkRetrieveOutput {
  source_type: string;
  auth_method: "oauth" | "credentials";
  connect_url: string;
  instructions: string;
}
export const ExternalDataSourcesConnectLinkRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source_type: Schema.String,
    auth_method: Schema.Literals(["oauth", "credentials"]),
    connect_url: Schema.String,
    instructions: Schema.String,
  }) as unknown as Schema.Codec<ExternalDataSourcesConnectLinkRetrieveOutput>;

// The operation
/**
 * Return a secure browser link for connecting a data warehouse source.
 * The link opens a minimal connect page rendering the source's full connection form — OAuth options
 * included — with no table selection and no source creation. The user authenticates in their browser,
 * secrets never pass through the agent, and the agent finishes setup afterwards by passing the stored
 * credential id to data-warehouse-source-setup.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param source_type - The source type to generate a connect link for (e.g. 'Stripe', 'Postgres', 'Hubspot').
 */
export const externalDataSourcesConnectLinkRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesConnectLinkRetrieveInput,
    outputSchema: ExternalDataSourcesConnectLinkRetrieveOutput,
  }));
