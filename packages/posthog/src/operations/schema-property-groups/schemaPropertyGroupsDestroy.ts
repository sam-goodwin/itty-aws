import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SchemaPropertyGroupsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/schema_property_groups/{id}/",
    }),
  );
export type SchemaPropertyGroupsDestroyInput =
  typeof SchemaPropertyGroupsDestroyInput.Type;

// Output Schema
export const SchemaPropertyGroupsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchemaPropertyGroupsDestroyOutput =
  typeof SchemaPropertyGroupsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this schema property group.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const schemaPropertyGroupsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaPropertyGroupsDestroyInput,
    outputSchema: SchemaPropertyGroupsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
