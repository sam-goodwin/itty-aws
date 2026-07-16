import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput {
  user_id: string;
  slug: string;
  organization_id?: string;
}
export const DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput =
  /*@__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/user_management/users/{user_id}/connected_accounts/{slug}",
    }),
  ) as unknown as Schema.Codec<DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput>;

// Output Schema
export type DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput =
  void;
export const DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput>;

// The operation
/**
 * Delete a connected account
 *
 * Disconnects WorkOS's account for the user, including removing any stored access and refresh tokens. The user will need to reauthorize if they want to reconnect. This does not revoke access on the provider side.
 *
 * @param user_id - A [User](/reference/authkit/user) identifier.
 * @param slug - The slug identifier of the provider (e.g., `github`, `slack`, `notion`).
 * @param organization_id - An [Organization](/reference/organization) identifier. Optional parameter if the connection is scoped to an organization.
 */
export const DataIntegrationsUserManagementControllerDeleteUserDataInstallation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput,
    outputSchema:
      DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput,
    errors: [NotFound] as const,
  }));
