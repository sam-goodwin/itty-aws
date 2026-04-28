import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFunctionsIconRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_functions/icon/",
    }),
  );
export type HogFunctionsIconRetrieveInput =
  typeof HogFunctionsIconRetrieveInput.Type;

// Output Schema
export const HogFunctionsIconRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HogFunctionsIconRetrieveOutput =
  typeof HogFunctionsIconRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsIconRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFunctionsIconRetrieveInput,
    outputSchema: HogFunctionsIconRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
