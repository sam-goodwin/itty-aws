import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PropertyDefinitionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/property_definitions/{id}/",
    }),
  );
export type PropertyDefinitionsDestroyInput =
  typeof PropertyDefinitionsDestroyInput.Type;

// Output Schema
export const PropertyDefinitionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PropertyDefinitionsDestroyOutput =
  typeof PropertyDefinitionsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this property definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const propertyDefinitionsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PropertyDefinitionsDestroyInput,
    outputSchema: PropertyDefinitionsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
