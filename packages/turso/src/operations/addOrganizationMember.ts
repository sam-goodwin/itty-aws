import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface AddOrganizationMemberInput {
  organizationSlug: string;
  username?: string;
  role?: "admin" | "member" | "viewer";
}
export const AddOrganizationMemberInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    username: Schema.optional(Schema.String),
    role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{organizationSlug}/members",
    }),
  ) as unknown as Schema.Codec<AddOrganizationMemberInput>;

// Output Schema
export interface AddOrganizationMemberOutput {
  member?: string;
  role?: "owner" | "admin" | "member" | "viewer";
}
export const AddOrganizationMemberOutput =
  /*@__PURE__*/ Schema.Struct({
    member: Schema.optional(Schema.String),
    role: Schema.optional(
      Schema.Literals(["owner", "admin", "member", "viewer"]),
    ),
  }) as unknown as Schema.Codec<AddOrganizationMemberOutput>;

// The operation
/**
 * Add Member
 *
 * Add an existing Turso user to an organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const addOrganizationMember = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddOrganizationMemberInput,
  outputSchema: AddOrganizationMemberOutput,
  errors: [BadRequest, NotFound, Conflict] as const,
}));
