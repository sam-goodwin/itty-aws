import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface AddLocationToGroupInput {
  organizationSlug: string;
  groupName: string;
  location: string;
}
export const AddLocationToGroupInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{organizationSlug}/groups/{groupName}/locations/{location}",
    }),
  ) as unknown as Schema.Codec<AddLocationToGroupInput>;

// Output Schema
export interface AddLocationToGroupOutput {
  group?: {
    name?: string;
    version?: string;
    uuid?: string;
    locations?: string[];
    primary?: string;
    delete_protection?: boolean;
  };
}
export const AddLocationToGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AddLocationToGroupOutput>;

// The operation
/**
 * Add Location to Group
 *
 * Adds a location to the specified group.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 * @param location - The location code to add to the group.
 */
export const addLocationToGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddLocationToGroupInput,
  outputSchema: AddLocationToGroupOutput,
  errors: [BadRequest, NotFound] as const,
}));
