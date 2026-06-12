import * as Schema from "effect/Schema";
import { GroupWithIDSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/rbac/groups" }));
export type ListGroupsInput = typeof ListGroupsInput.Type;

// Output Schema
export const ListGroupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => GroupWithIDSchema),
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
