import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ElementsDestroyInput {
  id: number;
  project_id: string;
}
export const ElementsDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/elements/{id}/",
  }),
) as unknown as Schema.Codec<ElementsDestroyInput>;

// Output Schema
export type ElementsDestroyOutput = void;
export const ElementsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ElementsDestroyOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this element.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElementsDestroyInput,
  outputSchema: ElementsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
