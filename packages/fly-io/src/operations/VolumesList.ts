import * as Schema from "effect/Schema";
import { VolumeSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const VolumesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  summary: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/apps/{app_name}/volumes" }));
export type VolumesListInput = typeof VolumesListInput.Type;

// Output Schema
export const VolumesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => VolumeSchema),
);
export type VolumesListOutput = typeof VolumesListOutput.Type;

// The operation
/**
 * List Volumes
 *
 * List all volumes associated with a specific app.
 *
 * @param app_name - Fly App Name
 * @param summary - Only return summary info about volumes (omit blocks, block size, etc)
 */
export const VolumesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesListInput,
  outputSchema: VolumesListOutput,
  errors: [Forbidden, NotFound] as const,
}));
