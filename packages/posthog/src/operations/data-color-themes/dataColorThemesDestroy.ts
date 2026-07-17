import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DataColorThemesDestroyInput {
  id: number;
  project_id: string;
}
export const DataColorThemesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/data_color_themes/{id}/",
    }),
  ) as unknown as Schema.Codec<DataColorThemesDestroyInput>;

// Output Schema
export type DataColorThemesDestroyOutput = void;
export const DataColorThemesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataColorThemesDestroyOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this data color theme.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataColorThemesDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataColorThemesDestroyInput,
  outputSchema: DataColorThemesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
