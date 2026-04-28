import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const GroupsTypesMetricsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/",
    }),
  );
export type GroupsTypesMetricsDestroyInput =
  typeof GroupsTypesMetricsDestroyInput.Type;

// Output Schema
export const GroupsTypesMetricsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsTypesMetricsDestroyOutput =
  typeof GroupsTypesMetricsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this group usage metric.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesMetricsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsTypesMetricsDestroyInput,
    outputSchema: GroupsTypesMetricsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
