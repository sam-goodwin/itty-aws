import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListGroupsInput {
  organizationSlug: string;
}
export const ListGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/organizations/{organizationSlug}/groups",
  }),
) as unknown as Schema.Codec<ListGroupsInput>;

// Output Schema
export interface ListGroupsOutput {
  groups?: {
    name?: string;
    version?: string;
    uuid?: string;
    locations?: string[];
    primary?: string;
    delete_protection?: boolean;
  }[];
}
export const ListGroupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groups: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        locations: Schema.optional(Schema.Array(Schema.String)),
        primary: Schema.optional(Schema.String),
        delete_protection: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ListGroupsOutput>;

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
