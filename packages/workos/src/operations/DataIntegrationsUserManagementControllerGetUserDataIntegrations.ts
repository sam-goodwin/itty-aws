import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput {
  user_id: string;
  organization_id?: string;
}
export const DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/{user_id}/data_providers",
    }),
  ) as unknown as Schema.Codec<DataIntegrationsUserManagementControllerGetUserDataIntegrationsInput>;

// Output Schema
export interface DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput {
  object?: string;
  data?: ReadonlyArray<{
    object: string;
    id: string;
    name: string;
    description: string | null;
    slug: string;
    integration_type: string;
    credentials_type: string;
    scopes: ReadonlyArray<string> | null;
    auth_methods?: ReadonlyArray<"oauth" | "api_key">;
    ownership: "userland_user" | "organization";
    created_at: string;
    updated_at: string;
    integrationType: string;
    credentialsType: string;
    createdAt: string;
    updatedAt: string;
    connected_account: {
      object: string;
      id: string;
      user_id: string | null;
      organization_id: string | null;
      scopes: ReadonlyArray<string>;
      auth_method?: "oauth" | "api_key";
      api_key_last_4?: string | null;
      state: "connected" | "needs_reauthorization" | "disconnected";
      created_at: string;
      updated_at: string;
      userlandUserId: string | null;
      organizationId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
  }>;
}
export const DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.String,
          id: Schema.String,
          name: Schema.String,
          description: Schema.NullOr(Schema.String),
          slug: Schema.String,
          integration_type: Schema.String,
          credentials_type: Schema.String,
          scopes: Schema.NullOr(Schema.Array(Schema.String)),
          auth_methods: Schema.optional(
            Schema.Array(Schema.Literals(["oauth", "api_key"])),
          ),
          ownership: Schema.Literals(["userland_user", "organization"]),
          created_at: Schema.String,
          updated_at: Schema.String,
          integrationType: Schema.String,
          credentialsType: Schema.String,
          createdAt: Schema.String,
          updatedAt: Schema.String,
          connected_account: Schema.NullOr(
            Schema.Struct({
              object: Schema.String,
              id: Schema.String,
              user_id: Schema.NullOr(Schema.String),
              organization_id: Schema.NullOr(Schema.String),
              scopes: Schema.Array(Schema.String),
              auth_method: Schema.optional(
                Schema.Literals(["oauth", "api_key"]),
              ),
              api_key_last_4: Schema.optional(Schema.NullOr(Schema.String)),
              state: Schema.Literals([
                "connected",
                "needs_reauthorization",
                "disconnected",
              ]),
              created_at: Schema.String,
              updated_at: Schema.String,
              userlandUserId: Schema.NullOr(Schema.String),
              organizationId: Schema.NullOr(Schema.String),
              createdAt: Schema.String,
              updatedAt: Schema.String,
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DataIntegrationsUserManagementControllerGetUserDataIntegrationsOutput>;

// The operation
/**
 * List providers for a user
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
