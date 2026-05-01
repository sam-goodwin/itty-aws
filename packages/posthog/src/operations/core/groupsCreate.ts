import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  group_type_index: Schema.optional(Schema.Number),
  group_key: Schema.optional(Schema.String),
  group_properties: Schema.optional(Schema.NullOr(Schema.Unknown)),
}).pipe(T.Http({ method: "POST", path: "/api/projects/{project_id}/groups/" }));
export type GroupsCreateInput = typeof GroupsCreateInput.Type;

// Output Schema
export const GroupsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group_type_index: Schema.optional(Schema.Number),
  group_key: Schema.optional(Schema.String),
  group_properties: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
});
export type GroupsCreateOutput = typeof GroupsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsCreateInput,
  outputSchema: GroupsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
