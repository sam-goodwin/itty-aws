import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HeatmapScreenshotsContentRetrieveInput {
  id: string;
  project_id: string;
  width?: number;
}
export const HeatmapScreenshotsContentRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    width: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/heatmap_screenshots/{id}/content/",
    }),
  ) as unknown as Schema.Codec<HeatmapScreenshotsContentRetrieveInput>;

// Output Schema
export type HeatmapScreenshotsContentRetrieveOutput = void;
export const HeatmapScreenshotsContentRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HeatmapScreenshotsContentRetrieveOutput>;

// The operation
/**
 * Fetch the rendered screenshot image (JPEG bytes) for a saved heatmap at a given viewport width. Returns 202 with the saved-heatmap metadata while the screenshot is still being generated.
 *
 * @param id - A UUID string identifying this saved heatmap.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param width - Viewport width (CSS pixels) to fetch. Defaults to 1024. If no exact render exists for this width the closest available one is returned.
 */
export const heatmapScreenshotsContentRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HeatmapScreenshotsContentRetrieveInput,
    outputSchema: HeatmapScreenshotsContentRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
