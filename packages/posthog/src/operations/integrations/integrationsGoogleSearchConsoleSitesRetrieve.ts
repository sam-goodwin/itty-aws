import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const IntegrationsGoogleSearchConsoleSitesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/google_search_console_sites/",
    }),
  );
export type IntegrationsGoogleSearchConsoleSitesRetrieveInput =
  typeof IntegrationsGoogleSearchConsoleSitesRetrieveInput.Type;

// Output Schema
export const IntegrationsGoogleSearchConsoleSitesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sites: Schema.Array(
      Schema.Struct({
        siteUrl: Schema.String,
        permissionLevel: Schema.String,
      }),
    ),
  });
export type IntegrationsGoogleSearchConsoleSitesRetrieveOutput =
  typeof IntegrationsGoogleSearchConsoleSitesRetrieveOutput.Type;

// The operation
/**
 * List the Search Console properties the connected Google account has access to.
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGoogleSearchConsoleSitesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGoogleSearchConsoleSitesRetrieveInput,
    outputSchema: IntegrationsGoogleSearchConsoleSitesRetrieveOutput,
  }));
