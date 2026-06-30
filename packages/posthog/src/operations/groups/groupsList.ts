import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsListInput {
  project_id: string;
  cursor?: string;
  group_key?: string;
  group_type_index: number;
  search?: string;
}
export const GroupsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  cursor: Schema.optional(Schema.String),
  group_key: Schema.optional(Schema.String),
  group_type_index: Schema.Number,
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/groups/" }),
) as unknown as Schema.Codec<GroupsListInput>;

// Output Schema
export type GroupsListOutput = {
  group_type_index?: number;
  group_key?: string;
  group_properties?: unknown;
  created_at?: string;
}[];
export const GroupsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    group_type_index: Schema.optional(Schema.Number),
    group_key: Schema.optional(Schema.String),
    group_properties: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  }),
) as unknown as Schema.Codec<GroupsListOutput>;

// The operation
/**
 * List all groups of a specific group type. You must pass ?group_type_index= in the URL.
 * To get a list of valid group types, call /api/:project_id/groups_types/.
 * Uses forward-only keyset pagination via the `cursor` parameter.
 * The `previous` field in the response envelope is always null.
 *
 * @param cursor - Pagination cursor returned in the `next` URL of a previous response
 * @param group_key - Filter groups whose key contains this string (case-insensitive)
 * @param group_type_index - Specify the group type to list
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search the group name
 */
export const groupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsListInput,
  outputSchema: GroupsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
