import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type VisionScannersObserveCreateInput =
  typeof VisionScannersObserveCreateInput.Type;

// Output Schema
export const VisionScannersObserveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VisionScannersObserveCreateOutput =
  typeof VisionScannersObserveCreateOutput.Type;

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
