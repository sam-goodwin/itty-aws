import * as Schema from "effect/Schema";
import { GroupTypeSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsTypesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/groups_types/" }),
);
export type GroupsTypesListInput = typeof GroupsTypesListInput.Type;

// Output Schema
export const GroupsTypesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => GroupTypeSchema),
);
export type GroupsTypesListOutput = typeof GroupsTypesListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsTypesListInput,
  outputSchema: GroupsTypesListOutput,
  errors: [Forbidden, NotFound] as const,
}));
