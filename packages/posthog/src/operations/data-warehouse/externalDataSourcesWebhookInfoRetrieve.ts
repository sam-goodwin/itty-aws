import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExternalDataSourcesWebhookInfoRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/{id}/webhook_info/",
    }),
  );
export type ExternalDataSourcesWebhookInfoRetrieveInput =
  typeof ExternalDataSourcesWebhookInfoRetrieveInput.Type;

// Output Schema
export const ExternalDataSourcesWebhookInfoRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSourcesWebhookInfoRetrieveOutput =
  typeof ExternalDataSourcesWebhookInfoRetrieveOutput.Type;

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
