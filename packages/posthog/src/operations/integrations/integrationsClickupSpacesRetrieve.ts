import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsClickupSpacesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/clickup_spaces/",
    }),
  );
export type IntegrationsClickupSpacesRetrieveInput =
  typeof IntegrationsClickupSpacesRetrieveInput.Type;

// Output Schema
export const IntegrationsClickupSpacesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsClickupSpacesRetrieveOutput =
  typeof IntegrationsClickupSpacesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsClickupSpacesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsClickupSpacesRetrieveInput,
    outputSchema: IntegrationsClickupSpacesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
