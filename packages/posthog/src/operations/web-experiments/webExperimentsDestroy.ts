import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WebExperimentsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/web_experiments/{id}/",
    }),
  );
export type WebExperimentsDestroyInput = typeof WebExperimentsDestroyInput.Type;

// Output Schema
export const WebExperimentsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebExperimentsDestroyOutput =
  typeof WebExperimentsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this web experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webExperimentsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebExperimentsDestroyInput,
    outputSchema: WebExperimentsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
