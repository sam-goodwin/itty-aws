import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveAllPresetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/presets" }),
  );
export type RetrieveAllPresetsInput = typeof RetrieveAllPresetsInput.Type;

// Output Schema
export const RetrieveAllPresetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    presets: Schema.Array(
      Schema.Struct({
        value: Schema.Unknown,
        name: Schema.String,
      }),
    ),
  });
export type RetrieveAllPresetsOutput = typeof RetrieveAllPresetsOutput.Type;

// The operation
/**
 * Retrieves all presets.
 *
 * Retrieve the details of all presets
 */
export const retrieveAllPresets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveAllPresetsInput,
  outputSchema: RetrieveAllPresetsOutput,
}));
