import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFunctionsIconsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_functions/icons/",
    }),
  );
export type HogFunctionsIconsRetrieveInput =
  typeof HogFunctionsIconsRetrieveInput.Type;

// Output Schema
export const HogFunctionsIconsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HogFunctionsIconsRetrieveOutput =
  typeof HogFunctionsIconsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsIconsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFunctionsIconsRetrieveInput,
    outputSchema: HogFunctionsIconsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
