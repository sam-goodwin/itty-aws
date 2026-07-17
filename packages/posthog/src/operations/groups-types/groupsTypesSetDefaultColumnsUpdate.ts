import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsTypesSetDefaultColumnsUpdateInput {
  project_id: string;
  group_type?: string;
  group_type_index?: number;
  name_singular?: string | null;
  name_plural?: string | null;
  detail_dashboard?: number | null;
  default_columns?: string[] | null;
  created_at?: string | null;
}
export const GroupsTypesSetDefaultColumnsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_type: Schema.optional(Schema.String),
    group_type_index: Schema.optional(Schema.Number),
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
      path: "/api/projects/{project_id}/groups_types/set_default_columns/",
    }),
  ) as unknown as Schema.Codec<GroupsTypesSetDefaultColumnsUpdateInput>;

// Output Schema
export type GroupsTypesSetDefaultColumnsUpdateOutput = void;
export const GroupsTypesSetDefaultColumnsUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GroupsTypesSetDefaultColumnsUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesSetDefaultColumnsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupsTypesSetDefaultColumnsUpdateInput,
    outputSchema: GroupsTypesSetDefaultColumnsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
