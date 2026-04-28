import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EndpointsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/endpoints/{name}/",
  }),
);
export type EndpointsDestroyInput = typeof EndpointsDestroyInput.Type;

// Output Schema
export const EndpointsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EndpointsDestroyOutput = typeof EndpointsDestroyOutput.Type;

// The operation
/**
 * Delete an endpoint and clean up materialized query.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsDestroyInput,
  outputSchema: EndpointsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
