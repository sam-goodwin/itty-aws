import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DataIntegrationsUserManagementControllerGetUserDataInstallationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/{user_id}/connected_accounts/{slug}",
    }),
  );
export type DataIntegrationsUserManagementControllerGetUserDataInstallationInput =
  typeof DataIntegrationsUserManagementControllerGetUserDataInstallationInput.Type;

// Output Schema
export const DataIntegrationsUserManagementControllerGetUserDataInstallationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    user_id: Schema.NullOr(Schema.String),
    organization_id: Schema.NullOr(Schema.String),
    scopes: Schema.Array(Schema.String),
    state: Schema.Literals([
      "connected",
      "needs_reauthorization",
      "disconnected",
    ]),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type DataIntegrationsUserManagementControllerGetUserDataInstallationOutput =
  typeof DataIntegrationsUserManagementControllerGetUserDataInstallationOutput.Type;

// The operation
/**
 * Get a connected account
 *
 * Retrieves a user's [connected account](/reference/pipes/connected-account) for a specific provider.
 *
 * @param user_id - A [User](/reference/authkit/user) identifier.
 * @param slug - The slug identifier of the provider (e.g., `github`, `slack`, `notion`).
 * @param organization_id - An [Organization](/reference/organization) identifier. Optional parameter if the connection is scoped to an organization.
 */
export const DataIntegrationsUserManagementControllerGetUserDataInstallation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DataIntegrationsUserManagementControllerGetUserDataInstallationInput,
    outputSchema:
      DataIntegrationsUserManagementControllerGetUserDataInstallationOutput,
    errors: [NotFound] as const,
  }));
