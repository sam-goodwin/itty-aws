import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsUpdatePropertyCreateInput {
  project_id: string;
  group_key: string;
  group_type_index: number;
  group_properties?: unknown;
  created_at?: string;
}
export const GroupsUpdatePropertyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_key: Schema.String,
    group_type_index: Schema.Number,
    group_properties: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/groups/update_property/",
    }),
  ) as unknown as Schema.Codec<GroupsUpdatePropertyCreateInput>;

// Output Schema
export type GroupsUpdatePropertyCreateOutput = void;
export const GroupsUpdatePropertyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GroupsUpdatePropertyCreateOutput>;

// The operation
/**
 *
 * @param group_key - Specify the key of the group to find
 * @param group_type_index - Specify the group type to find
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsUpdatePropertyCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsUpdatePropertyCreateInput,
    outputSchema: GroupsUpdatePropertyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
