import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExternalDataSourcesWebhookInfoRetrieveInput {
  id: string;
  project_id: string;
}
export const ExternalDataSourcesWebhookInfoRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/{id}/webhook_info/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesWebhookInfoRetrieveInput>;

// Output Schema
export type ExternalDataSourcesWebhookInfoRetrieveOutput = void;
export const ExternalDataSourcesWebhookInfoRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ExternalDataSourcesWebhookInfoRetrieveOutput>;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesWebhookInfoRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesWebhookInfoRetrieveInput,
    outputSchema: ExternalDataSourcesWebhookInfoRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
