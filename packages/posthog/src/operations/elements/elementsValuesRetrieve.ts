import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ElementsValuesRetrieveInput {
  project_id: string;
}
export const ElementsValuesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/elements/values/",
    }),
  ) as unknown as Schema.Codec<ElementsValuesRetrieveInput>;

// Output Schema
export type ElementsValuesRetrieveOutput = void;
export const ElementsValuesRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ElementsValuesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsValuesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElementsValuesRetrieveInput,
  outputSchema: ElementsValuesRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
