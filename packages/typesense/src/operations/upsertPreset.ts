import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UpsertPresetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  presetId: Schema.String.pipe(T.PathParam()),
  value: Schema.Unknown,
}).pipe(T.Http({ method: "PUT", path: "/presets/{presetId}" }));
export type UpsertPresetInput = typeof UpsertPresetInput.Type;

// Output Schema
export const UpsertPresetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Unknown,
  name: Schema.String,
});
export type UpsertPresetOutput = typeof UpsertPresetOutput.Type;

// The operation
/**
 * Upserts a preset.
 *
 * Create or update an existing preset.
 *
 * @param presetId - The name of the preset set to upsert.
 */
export const upsertPreset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpsertPresetInput,
  outputSchema: UpsertPresetOutput,
  errors: [BadRequest] as const,
}));
