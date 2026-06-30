import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersObserveCreateInput {
  id: string;
  project_id: string;
  session_id: string;
}
export const VisionScannersObserveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/vision/scanners/{id}/observe/",
    }),
  ) as unknown as Schema.Codec<VisionScannersObserveCreateInput>;

// Output Schema
export type VisionScannersObserveCreateOutput = void;
export const VisionScannersObserveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VisionScannersObserveCreateOutput>;

// The operation
/**
 * Apply this scanner to one specific session, on demand. Returns 202 with the workflow handle.
 *
 * @param id - A UUID string identifying this replay scanner.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersObserveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisionScannersObserveCreateInput,
    outputSchema: VisionScannersObserveCreateOutput,
  }),
);
