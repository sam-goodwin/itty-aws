import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsChannelsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/channels/",
    }),
  );
export type IntegrationsChannelsRetrieveInput =
  typeof IntegrationsChannelsRetrieveInput.Type;

// Output Schema
export const IntegrationsChannelsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsChannelsRetrieveOutput =
  typeof IntegrationsChannelsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsChannelsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsChannelsRetrieveInput,
    outputSchema: IntegrationsChannelsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
