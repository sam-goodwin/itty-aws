import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ElementsValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/elements/values/",
    }),
  );
export type ElementsValuesRetrieveInput =
  typeof ElementsValuesRetrieveInput.Type;

// Output Schema
export const ElementsValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ElementsValuesRetrieveOutput =
  typeof ElementsValuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ElementsValuesRetrieveInput,
    outputSchema: ElementsValuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
