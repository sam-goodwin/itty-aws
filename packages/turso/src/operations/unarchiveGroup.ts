import * as Schema from "effect/Schema";
import { GroupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UnarchiveGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/organizations/{organizationSlug}/groups/{groupName}/unarchive",
  }),
);
export type UnarchiveGroupInput = typeof UnarchiveGroupInput.Type;

// Output Schema
export const UnarchiveGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(Schema.suspend(() => GroupSchema)),
});
export type UnarchiveGroupOutput = typeof UnarchiveGroupOutput.Type;

// The operation
/**
 * Unarchive Group
 *
 * Unarchive a group that has been archived due to inactivity.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const unarchiveGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UnarchiveGroupInput,
  outputSchema: UnarchiveGroupOutput,
  errors: [NotFound] as const,
}));
