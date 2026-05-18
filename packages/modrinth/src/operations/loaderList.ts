import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const LoaderListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tag/loader" }));
export type LoaderListInput = typeof LoaderListInput.Type;

// Output Schema
export const LoaderListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    icon: Schema.String,
    name: Schema.String,
    supported_project_types: Schema.Array(Schema.String),
  }),
);
export type LoaderListOutput = typeof LoaderListOutput.Type;

// The operation
/**
 * Get a list of loaders
 *
 * Gets an array of loaders, their icons, and supported project types
 */
export const loaderList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LoaderListInput,
  outputSchema: LoaderListOutput,
}));
