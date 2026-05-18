import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ProjectTypeListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tag/project_type" }));
export type ProjectTypeListInput = typeof ProjectTypeListInput.Type;

// Output Schema
export const ProjectTypeListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type ProjectTypeListOutput = typeof ProjectTypeListOutput.Type;

// The operation
/**
 * Get a list of project types
 *
 * Gets an array of valid project types
 */
export const projectTypeList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectTypeListInput,
  outputSchema: ProjectTypeListOutput,
}));
