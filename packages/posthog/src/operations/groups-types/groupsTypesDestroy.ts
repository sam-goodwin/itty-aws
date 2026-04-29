import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsTypesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/",
    }),
  );
export type GroupsTypesDestroyInput = typeof GroupsTypesDestroyInput.Type;

// Output Schema
export const GroupsTypesDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsTypesDestroyOutput = typeof GroupsTypesDestroyOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsTypesDestroyInput,
  outputSchema: GroupsTypesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
