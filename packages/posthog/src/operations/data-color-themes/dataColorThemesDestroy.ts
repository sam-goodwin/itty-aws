import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DataColorThemesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/data_color_themes/{id}/",
    }),
  );
export type DataColorThemesDestroyInput =
  typeof DataColorThemesDestroyInput.Type;

// Output Schema
export const DataColorThemesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataColorThemesDestroyOutput =
  typeof DataColorThemesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this data color theme.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataColorThemesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataColorThemesDestroyInput,
    outputSchema: DataColorThemesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
