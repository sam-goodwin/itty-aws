import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SideTypeListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tag/side_type" }));
export type SideTypeListInput = typeof SideTypeListInput.Type;

// Output Schema
export const SideTypeListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type SideTypeListOutput = typeof SideTypeListOutput.Type;

// The operation
/**
 * Get a list of side types
 *
 * Gets an array of valid side types
 */
export const sideTypeList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SideTypeListInput,
  outputSchema: SideTypeListOutput,
}));
