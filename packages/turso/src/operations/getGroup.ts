import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetGroupInput {
  organizationSlug: string;
  groupName: string;
}
export const GetGroupInput = /*@__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/organizations/{organizationSlug}/groups/{groupName}",
  }),
) as unknown as Schema.Codec<GetGroupInput>;

// Output Schema
export interface GetGroupOutput {
  group?: {
    name?: string;
    version?: string;
    uuid?: string;
    locations?: string[];
    primary?: string;
    delete_protection?: boolean;
  };
}
export const GetGroupOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetGroupOutput>;

// The operation
/**
 * Retrieve Group
 *
 * Returns a group belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const getGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetGroupInput,
  outputSchema: GetGroupOutput,
  errors: [NotFound] as const,
}));
