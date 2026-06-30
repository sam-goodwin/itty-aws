import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const CustomPropertyDefinitionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/custom_property_definitions/{id}/",
    }),
  );
export type CustomPropertyDefinitionsDestroyInput =
  typeof CustomPropertyDefinitionsDestroyInput.Type;

// Output Schema
export const CustomPropertyDefinitionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomPropertyDefinitionsDestroyOutput =
  typeof CustomPropertyDefinitionsDestroyOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customPropertyDefinitionsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomPropertyDefinitionsDestroyInput,
    outputSchema: CustomPropertyDefinitionsDestroyOutput,
  }));
