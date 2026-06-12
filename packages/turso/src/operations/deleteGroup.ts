import * as Schema from "effect/Schema";
import { GroupSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v1/organizations/{organizationSlug}/groups/{groupName}",
  }),
);
export type DeleteGroupInput = typeof DeleteGroupInput.Type;

// Output Schema
export const DeleteGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  group: Schema.optional(Schema.suspend(() => GroupSchema)),
});
export type DeleteGroupOutput = typeof DeleteGroupOutput.Type;

// The operation
/**
 * Delete Group
 *
 * Delete a group belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGroupInput,
  outputSchema: DeleteGroupOutput,
  errors: [NotFound] as const,
}));
