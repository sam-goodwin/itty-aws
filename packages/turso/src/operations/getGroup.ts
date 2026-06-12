import * as Schema from "effect/Schema";
import { GroupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/organizations/{organizationSlug}/groups/{groupName}",
  }),
);
export type GetGroupInput = typeof GetGroupInput.Type;

// Output Schema
export const GetGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(Schema.suspend(() => GroupSchema)),
});
export type GetGroupOutput = typeof GetGroupOutput.Type;

// The operation
/**
 * Retrieve Group
 *
 * Returns a group belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const getGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGroupInput,
  outputSchema: GetGroupOutput,
  errors: [NotFound] as const,
}));
