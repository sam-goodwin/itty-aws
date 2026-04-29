import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsClickupWorkspacesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/clickup_workspaces/",
    }),
  );
export type IntegrationsClickupWorkspacesRetrieveInput =
  typeof IntegrationsClickupWorkspacesRetrieveInput.Type;

// Output Schema
export const IntegrationsClickupWorkspacesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsClickupWorkspacesRetrieveOutput =
  typeof IntegrationsClickupWorkspacesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsClickupWorkspacesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsClickupWorkspacesRetrieveInput,
    outputSchema: IntegrationsClickupWorkspacesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
