import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UpdateGroupDatabasesInput {
  organizationSlug: string;
  groupName: string;
}
export const UpdateGroupDatabasesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{organizationSlug}/groups/{groupName}/update",
    }),
  ) as unknown as Schema.Codec<UpdateGroupDatabasesInput>;

// Output Schema
export type UpdateGroupDatabasesOutput = void;
export const UpdateGroupDatabasesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateGroupDatabasesOutput>;

// The operation
/**
 * Update Databases in a Group
 *
 * Updates all databases in the group to the latest libSQL version.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const updateGroupDatabases = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateGroupDatabasesInput,
    outputSchema: UpdateGroupDatabasesOutput,
    errors: [NotFound] as const,
  }),
);
