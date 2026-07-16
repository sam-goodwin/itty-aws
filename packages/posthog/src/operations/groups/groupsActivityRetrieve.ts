import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsActivityRetrieveInput {
  project_id: string;
  group_type_index: number;
  id: string;
}
export const GroupsActivityRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_type_index: Schema.Number,
    id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups/activity/",
    }),
  ) as unknown as Schema.Codec<GroupsActivityRetrieveInput>;

// Output Schema
export type GroupsActivityRetrieveOutput = void;
export const GroupsActivityRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GroupsActivityRetrieveOutput>;

// The operation
/**
 *
 * @param group_type_index - Specify the group type to find
 * @param id - Specify the id of the user to find groups for
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsActivityRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupsActivityRetrieveInput,
  outputSchema: GroupsActivityRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
