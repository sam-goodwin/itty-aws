import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const HeatmapScreenshotsContentRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/heatmap_screenshots/{id}/content/",
    }),
  );
export type HeatmapScreenshotsContentRetrieveInput =
  typeof HeatmapScreenshotsContentRetrieveInput.Type;

// Output Schema
export const HeatmapScreenshotsContentRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HeatmapScreenshotsContentRetrieveOutput =
  typeof HeatmapScreenshotsContentRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this saved heatmap.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const heatmapScreenshotsContentRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HeatmapScreenshotsContentRetrieveInput,
    outputSchema: HeatmapScreenshotsContentRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
