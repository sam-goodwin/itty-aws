import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/integrations/{id}/",
    }),
  );
export type IntegrationsDestroyInput = typeof IntegrationsDestroyInput.Type;

// Output Schema
export const IntegrationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsDestroyOutput = typeof IntegrationsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IntegrationsDestroyInput,
  outputSchema: IntegrationsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
