import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOrganizationMemberInput {
  org_id: string;
  member_id: string;
}
export const GetOrganizationMemberInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{org_id}/members/{member_id}",
    }),
  ) as unknown as Schema.Codec<GetOrganizationMemberInput>;

// Output Schema
export interface GetOrganizationMemberOutput {
  id: string;
  user_id: string;
  org_id: string;
  role: "admin" | "member" | "editor" | "viewer" | "collaborator";
  joined_at?: string;
}
export const GetOrganizationMemberOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    user_id: Schema.String,
    org_id: Schema.String,
    role: Schema.Literals([
      "admin",
      "member",
      "editor",
      "viewer",
      "collaborator",
    ]),
    joined_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetOrganizationMemberOutput>;

// The operation
/**
 * Retrieve organization member details
 *
 * Retrieves information about the specified organization member.
 *
 * @param org_id - The Neon organization ID
 * @param member_id - The Neon organization member ID
 */
export const getOrganizationMember = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationMemberInput,
  outputSchema: GetOrganizationMemberOutput,
}));
