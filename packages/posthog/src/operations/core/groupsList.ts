import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  cursor: Schema.optional(Schema.String),
  group_type_index: Schema.Number,
  search: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/api/projects/{project_id}/groups/" }));
export type GroupsListInput = typeof GroupsListInput.Type;

// Output Schema
export const GroupsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      group_type_index: Schema.Number,
      group_key: Schema.String,
      group_properties: Schema.optional(Schema.Unknown),
      created_at: Schema.String,
    }),
  ),
});
export type GroupsListOutput = typeof GroupsListOutput.Type;

// The operation
/**
 * List all groups of a specific group type. You must pass ?group_type_index= in the URL. To get a list of valid group types, call /api/:project_id/groups_types/
 *
 * @param cursor - The pagination cursor value.
 * @param group_type_index - Specify the group type to list
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search the group name
 */
export const groupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsListInput,
  outputSchema: GroupsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
