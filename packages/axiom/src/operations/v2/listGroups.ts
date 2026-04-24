import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const ListGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/rbac/groups" }));
export type ListGroupsInput = typeof ListGroupsInput.Type;

// Output Schema
export const ListGroupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    description: Schema.optional(Schema.String),
    isManaged: Schema.optional(Schema.Boolean),
    members: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.String,
    roles: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.String,
  }),
);
export type ListGroupsOutput = typeof ListGroupsOutput.Type;

// The operation
/**
 * List all groups
 *
 * Retrieves all groups in the organization.
 */
export const listGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGroupsInput,
  outputSchema: ListGroupsOutput,
}));
