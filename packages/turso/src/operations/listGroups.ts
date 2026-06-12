import * as Schema from "effect/Schema";
import { GroupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/organizations/{organizationSlug}/groups",
  }),
);
export type ListGroupsInput = typeof ListGroupsInput.Type;

// Output Schema
export const ListGroupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groups: Schema.optional(Schema.Array(Schema.suspend(() => GroupSchema))),
});
export type ListGroupsOutput = typeof ListGroupsOutput.Type;

// The operation
/**
 * List Groups
 *
 * Returns a list of groups belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const listGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGroupsInput,
  outputSchema: ListGroupsOutput,
}));
