import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrievePresetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  presetId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/presets/{presetId}" }));
export type RetrievePresetInput = typeof RetrievePresetInput.Type;

// Output Schema
export const RetrievePresetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Unknown,
  name: Schema.String,
});
export type RetrievePresetOutput = typeof RetrievePresetOutput.Type;

// The operation
/**
 * Retrieves a preset.
 *
 * Retrieve the details of a preset, given it's name.
 *
 * @param presetId - The ID of the preset to retrieve.
 */
export const retrievePreset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrievePresetInput,
  outputSchema: RetrievePresetOutput,
  errors: [NotFound] as const,
}));
