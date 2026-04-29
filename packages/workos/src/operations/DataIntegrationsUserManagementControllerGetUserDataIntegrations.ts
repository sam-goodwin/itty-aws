import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/{user_id}/data_providers",
    }),
  );
export type DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput =
  typeof DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput.Type;

// Output Schema
export const DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        slug: Schema.String,
        integration_type: Schema.String,
        credentials_type: Schema.String,
        scopes: Schema.Unknown,
        ownership: Schema.Literals(["userland_user", "organization"]),
        created_at: Schema.String,
        updated_at: Schema.String,
        integrationType: Schema.String,
        credentialsType: Schema.String,
        createdAt: Schema.String,
        updatedAt: Schema.String,
        connected_account: Schema.Unknown,
      }),
    ),
  });
export type DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput =
  typeof DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput.Type;

// The operation
/**
 * List providers
 *
 * Retrieves a list of available providers and the user's connection status for each. Returns all providers configured for your environment, along with the user's [connected account](/reference/pipes/connected-account) information where applicable.
 *
 * @param user_id - A [User](/reference/authkit/user) identifier to list providers and connected accounts for.
 * @param organization_id - An [Organization](/reference/organization) identifier. Optional parameter to filter connections for a specific organization.
 */
export const DataIntegrationsUserManagementControllerGetUserDataIntegrations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput,
    outputSchema:
      DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput,
    errors: [NotFound] as const,
  }));
