import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/user_management/users/{user_id}/connected_accounts/{slug}",
    }),
  );
export type DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput =
  typeof DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput.Type;

// Output Schema
export const DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput =
  typeof DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DataIntegrationsUserManagementControllerDeleteUserDataInstallationInput,
    outputSchema:
      DataIntegrationsUserManagementControllerDeleteUserDataInstallationOutput,
    errors: [NotFound] as const,
  }));
