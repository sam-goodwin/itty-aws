import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExportsContentRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/exports/{id}/content/",
    }),
  );
export type ExportsContentRetrieveInput =
  typeof ExportsContentRetrieveInput.Type;

// Output Schema
export const ExportsContentRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExportsContentRetrieveOutput =
  typeof ExportsContentRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this exported asset.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const exportsContentRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExportsContentRetrieveInput,
    outputSchema: ExportsContentRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
