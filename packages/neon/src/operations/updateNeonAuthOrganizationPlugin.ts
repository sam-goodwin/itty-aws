import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateNeonAuthOrganizationPluginInput {
  project_id: string;
  branch_id: string;
  enabled?: boolean;
  organization_limit?: number;
  membership_limit?: number;
  creator_role?: "admin" | "owner";
  send_invitation_email?: boolean;
}
export const UpdateNeonAuthOrganizationPluginInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    organization_limit: Schema.optional(Schema.Number),
    membership_limit: Schema.optional(Schema.Number),
    creator_role: Schema.optional(Schema.Literals(["admin", "owner"])),
    send_invitation_email: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins/organization",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthOrganizationPluginInput>;

// Output Schema
export interface UpdateNeonAuthOrganizationPluginOutput {
  enabled: boolean;
  organization_limit: number;
  membership_limit: number;
  creator_role: "admin" | "owner";
  send_invitation_email: boolean;
}
export const UpdateNeonAuthOrganizationPluginOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    organization_limit: Schema.Number,
    membership_limit: Schema.Number,
    creator_role: Schema.Literals(["admin", "owner"]),
    send_invitation_email: Schema.Boolean,
  }) as unknown as Schema.Codec<UpdateNeonAuthOrganizationPluginOutput>;

// The operation
/**
 * Update organization plugin configuration
 *
 * Updates the organization plugin configuration for Neon Auth.
 * The organization plugin enables multi-tenant organization support.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthOrganizationPlugin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNeonAuthOrganizationPluginInput,
    outputSchema: UpdateNeonAuthOrganizationPluginOutput,
  }));
