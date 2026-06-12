import * as Schema from "effect/Schema";
import { VolumeSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const VolumesExtendInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  volume_id: Schema.String.pipe(T.PathParam()),
  size_gb: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/apps/{app_name}/volumes/{volume_id}/extend",
  }),
);
export type VolumesExtendInput = typeof VolumesExtendInput.Type;

// Output Schema
export const VolumesExtendOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  needs_restart: Schema.optional(Schema.Boolean),
  volume: Schema.optional(Schema.suspend(() => VolumeSchema)),
});
export type VolumesExtendOutput = typeof VolumesExtendOutput.Type;

// The operation
/**
 * Extend Volume
 *
 * Extend a volume's size within an app using the details provided in the request body.
 *
 * @param app_name - Fly App Name
 * @param volume_id - Volume ID
 */
export const VolumesExtend = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesExtendInput,
  outputSchema: VolumesExtendOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
