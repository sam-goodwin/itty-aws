import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsGoogleConversionActionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/google_conversion_actions/",
    }),
  );
export type IntegrationsGoogleConversionActionsRetrieveInput =
  typeof IntegrationsGoogleConversionActionsRetrieveInput.Type;

// Output Schema
export const IntegrationsGoogleConversionActionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsGoogleConversionActionsRetrieveOutput =
  typeof IntegrationsGoogleConversionActionsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGoogleConversionActionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGoogleConversionActionsRetrieveInput,
    outputSchema: IntegrationsGoogleConversionActionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
