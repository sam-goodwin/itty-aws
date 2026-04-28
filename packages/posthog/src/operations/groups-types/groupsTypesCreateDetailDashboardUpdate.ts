import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const GroupsTypesCreateDetailDashboardUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_type: Schema.String,
    group_type_index: Schema.Number,
    name_singular: Schema.optional(Schema.NullOr(Schema.String)),
    name_plural: Schema.optional(Schema.NullOr(Schema.String)),
    detail_dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    default_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/groups_types/create_detail_dashboard/",
    }),
  );
export type GroupsTypesCreateDetailDashboardUpdateInput =
  typeof GroupsTypesCreateDetailDashboardUpdateInput.Type;

// Output Schema
export const GroupsTypesCreateDetailDashboardUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsTypesCreateDetailDashboardUpdateOutput =
  typeof GroupsTypesCreateDetailDashboardUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesCreateDetailDashboardUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupsTypesCreateDetailDashboardUpdateInput,
    outputSchema: GroupsTypesCreateDetailDashboardUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
