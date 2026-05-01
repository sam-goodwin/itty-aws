import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsDeletePropertyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_key: Schema.String,
    group_type_index: Schema.Number,
    group_properties: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/groups/delete_property/",
    }),
  );
export type GroupsDeletePropertyCreateInput =
  typeof GroupsDeletePropertyCreateInput.Type;

// Output Schema
export const GroupsDeletePropertyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsDeletePropertyCreateOutput =
  typeof GroupsDeletePropertyCreateOutput.Type;

// The operation
/**
 *
 * @param group_key - Specify the key of the group to find
 * @param group_type_index - Specify the group type to find
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsDeletePropertyCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsDeletePropertyCreateInput,
    outputSchema: GroupsDeletePropertyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
