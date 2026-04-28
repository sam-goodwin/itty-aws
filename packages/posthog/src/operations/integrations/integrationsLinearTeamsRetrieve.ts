import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsLinearTeamsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/linear_teams/",
    }),
  );
export type IntegrationsLinearTeamsRetrieveInput =
  typeof IntegrationsLinearTeamsRetrieveInput.Type;

// Output Schema
export const IntegrationsLinearTeamsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsLinearTeamsRetrieveOutput =
  typeof IntegrationsLinearTeamsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsLinearTeamsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsLinearTeamsRetrieveInput,
    outputSchema: IntegrationsLinearTeamsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
