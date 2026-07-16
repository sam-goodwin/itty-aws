import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersStatsRetrieveInput {
  project_id: string;
}
export const VisionScannersStatsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/stats/",
    }),
  ) as unknown as Schema.Codec<VisionScannersStatsRetrieveInput>;

// Output Schema
export interface VisionScannersStatsRetrieveOutput {
  total: number;
  enabled: number;
  by_type: {
    monitor: { enabled: number; total: number };
    classifier: { enabled: number; total: number };
    scorer: { enabled: number; total: number };
    summarizer: { enabled: number; total: number };
  };
}
export const VisionScannersStatsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    total: Schema.Number,
    enabled: Schema.Number,
    by_type: Schema.Struct({
      monitor: Schema.Struct({
        enabled: Schema.Number,
        total: Schema.Number,
      }),
      classifier: Schema.Struct({
        enabled: Schema.Number,
        total: Schema.Number,
      }),
      scorer: Schema.Struct({
        enabled: Schema.Number,
        total: Schema.Number,
      }),
      summarizer: Schema.Struct({
        enabled: Schema.Number,
        total: Schema.Number,
      }),
    }),
  }) as unknown as Schema.Codec<VisionScannersStatsRetrieveOutput>;

// The operation
/**
 * Team-wide scanner counts — independent of list filters, so the overview stays stable.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersStatsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisionScannersStatsRetrieveInput,
  outputSchema: VisionScannersStatsRetrieveOutput,
}));
