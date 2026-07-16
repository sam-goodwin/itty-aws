import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationMembersInput {
  organizationSlug: string;
}
export const ListOrganizationMembersInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/members",
    }),
  ) as unknown as Schema.Codec<ListOrganizationMembersInput>;

// Output Schema
export interface ListOrganizationMembersOutput {
  members?: {
    username?: string;
    role?: "owner" | "admin" | "member" | "viewer";
    email?: string;
  }[];
}
export const ListOrganizationMembersOutput =
  /*@__PURE__*/ Schema.Struct({
    members: Schema.optional(
      Schema.Array(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          role: Schema.optional(
            Schema.Literals(["owner", "admin", "member", "viewer"]),
          ),
          email: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ListOrganizationMembersOutput>;

// The operation
/**
 * List Members
 *
 * Returns a list of members part of the organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const listOrganizationMembers = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOrganizationMembersInput,
  outputSchema: ListOrganizationMembersOutput,
}));
