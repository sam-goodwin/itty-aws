import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetGroupConfigurationInput {
  organizationSlug: string;
  groupName: string;
}
export const GetGroupConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/groups/{groupName}/configuration",
    }),
  ) as unknown as Schema.Codec<GetGroupConfigurationInput>;

// Output Schema
export interface GetGroupConfigurationOutput {
  delete_protection?: boolean;
}
export const GetGroupConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    delete_protection: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<GetGroupConfigurationOutput>;

// The operation
/**
 * Retrieve Group Configuration
 *
 * Retrieve an individual group configuration belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const getGroupConfiguration = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetGroupConfigurationInput,
  outputSchema: GetGroupConfigurationOutput,
  errors: [NotFound] as const,
}));
