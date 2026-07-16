import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersDestroyInput {
  id: string;
  project_id: string;
}
export const VisionScannersDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/vision/scanners/{id}/",
    }),
  ) as unknown as Schema.Codec<VisionScannersDestroyInput>;

// Output Schema
export type VisionScannersDestroyOutput = void;
export const VisionScannersDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VisionScannersDestroyOutput>;

// The operation
/**
 * CRUD for Replay Vision scanners.
 *
 * @param id - A UUID string identifying this replay scanner.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisionScannersDestroyInput,
  outputSchema: VisionScannersDestroyOutput,
}));
