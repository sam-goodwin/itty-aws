import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CategoryListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tag/category" }));
export type CategoryListInput = typeof CategoryListInput.Type;

// Output Schema
export const CategoryListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    icon: Schema.String,
    name: Schema.String,
    project_type: Schema.String,
    header: Schema.String,
  }),
);
export type CategoryListOutput = typeof CategoryListOutput.Type;

// The operation
/**
 * Get a list of categories
 *
 * Gets an array of categories, their icons, and applicable project types
 */
export const categoryList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CategoryListInput,
  outputSchema: CategoryListOutput,
}));
