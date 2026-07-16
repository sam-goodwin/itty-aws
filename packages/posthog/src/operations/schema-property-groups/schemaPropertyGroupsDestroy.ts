import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SchemaPropertyGroupsDestroyInput {
  id: string;
  project_id: string;
}
export const SchemaPropertyGroupsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/schema_property_groups/{id}/",
    }),
  ) as unknown as Schema.Codec<SchemaPropertyGroupsDestroyInput>;

// Output Schema
export type SchemaPropertyGroupsDestroyOutput = void;
export const SchemaPropertyGroupsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemaPropertyGroupsDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this schema property group.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const schemaPropertyGroupsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchemaPropertyGroupsDestroyInput,
  outputSchema: SchemaPropertyGroupsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
