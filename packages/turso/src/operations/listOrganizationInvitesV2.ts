import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationInvitesV2Input {
  organizationSlug: string;
}
export const ListOrganizationInvitesV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/organizations/{organizationSlug}/invites",
    }),
  ) as unknown as Schema.Codec<ListOrganizationInvitesV2Input>;

// Output Schema
export interface ListOrganizationInvitesV2Output {
  invites?: {
    id?: number;
    email?: string;
    role?: "admin" | "member" | "viewer";
    created_at?: string;
  }[];
}
export const ListOrganizationInvitesV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invites: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          email: Schema.optional(Schema.String),
          role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ListOrganizationInvitesV2Output>;

// The operation
/**
 * List Invites
 *
 * Returns a list of pending invites for the organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const listOrganizationInvitesV2 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationInvitesV2Input,
    outputSchema: ListOrganizationInvitesV2Output,
  }),
);
