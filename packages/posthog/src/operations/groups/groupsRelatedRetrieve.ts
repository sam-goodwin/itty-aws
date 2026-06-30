import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsRelatedRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_type_index: Schema.Number,
    id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups/related/",
    }),
  );
export type GroupsRelatedRetrieveInput = typeof GroupsRelatedRetrieveInput.Type;

// Output Schema
export const GroupsRelatedRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsRelatedRetrieveOutput =
  typeof GroupsRelatedRetrieveOutput.Type;

// The operation
/**
 *
 * @param group_type_index - Specify the group type to find
 * @param id - Specify the id of the user to find groups for
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsRelatedRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsRelatedRetrieveInput,
    outputSchema: GroupsRelatedRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
