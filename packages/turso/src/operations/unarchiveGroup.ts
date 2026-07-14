import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UnarchiveGroupInput {
  organizationSlug: string;
  groupName: string;
}
export const UnarchiveGroupInput = /*@__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/organizations/{organizationSlug}/groups/{groupName}/unarchive",
  }),
) as unknown as Schema.Codec<UnarchiveGroupInput>;

// Output Schema
export interface UnarchiveGroupOutput {
  group?: {
    name?: string;
    version?: string;
    uuid?: string;
    locations?: string[];
    primary?: string;
    delete_protection?: boolean;
  };
}
export const UnarchiveGroupOutput = /*@__PURE__*/ Schema.Struct({
  group: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
      uuid: Schema.optional(Schema.String),
      locations: Schema.optional(Schema.Array(Schema.String)),
      primary: Schema.optional(Schema.String),
      delete_protection: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<UnarchiveGroupOutput>;

// The operation
/**
 * Unarchive Group
 *
 * Unarchive a group that has been archived due to inactivity.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const unarchiveGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: UnarchiveGroupInput,
  outputSchema: UnarchiveGroupOutput,
  errors: [NotFound] as const,
}));
