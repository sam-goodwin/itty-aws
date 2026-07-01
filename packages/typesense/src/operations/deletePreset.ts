import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeletePresetInput {
  presetId: string;
}
export const DeletePresetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  presetId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/presets/{presetId}" }),
) as unknown as Schema.Codec<DeletePresetInput>;

// Output Schema
export interface DeletePresetOutput {
  name: string;
}
export const DeletePresetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
}) as unknown as Schema.Codec<DeletePresetOutput>;

// The operation
/**
 * Delete a preset.
 *
 * Permanently deletes a preset, given it's name.
 *
 * @param presetId - The ID of the preset to delete.
 */
export const deletePreset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePresetInput,
  outputSchema: DeletePresetOutput,
  errors: [NotFound] as const,
}));
