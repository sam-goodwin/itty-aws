import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const GroupsTypesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/groups_types/" }),
);
export type GroupsTypesListInput = typeof GroupsTypesListInput.Type;

// Output Schema
export const GroupsTypesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    group_type: Schema.String,
    group_type_index: Schema.Number,
    name_singular: Schema.optional(Schema.NullOr(Schema.String)),
    name_plural: Schema.optional(Schema.NullOr(Schema.String)),
    detail_dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    default_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
  }),
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
