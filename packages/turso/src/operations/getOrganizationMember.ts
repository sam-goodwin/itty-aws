import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetOrganizationMemberInput {
  organizationSlug: string;
  username: string;
}
export const GetOrganizationMemberInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/members/{username}",
    }),
  ) as unknown as Schema.Codec<GetOrganizationMemberInput>;

// Output Schema
export interface GetOrganizationMemberOutput {
  member?: {
    username?: string;
    role?: "owner" | "admin" | "member" | "viewer";
    email?: string;
  };
}
export const GetOrganizationMemberOutput =
  /*@__PURE__*/ Schema.Struct({
    member: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        role: Schema.optional(
          Schema.Literals(["owner", "admin", "member", "viewer"]),
        ),
        email: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GetOrganizationMemberOutput>;

// The operation
/**
 * Retrieve Member
 *
 * Retrieve details of a specific member in the organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param username - The username of a Turso user or organization member.
 */
export const getOrganizationMember = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationMemberInput,
  outputSchema: GetOrganizationMemberOutput,
  errors: [NotFound] as const,
}));
