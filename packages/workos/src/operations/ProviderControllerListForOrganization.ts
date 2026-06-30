import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ProviderControllerListForOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organizationId}/data_integration_configurations",
    }),
  );
export type ProviderControllerListForOrganizationInput =
  typeof ProviderControllerListForOrganizationInput.Type;

// Output Schema
export const ProviderControllerListForOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        organization_id: Schema.String,
        slug: Schema.String,
        name: Schema.String,
        enabled: Schema.Boolean,
        scopes: Schema.Unknown,
        created_at: Schema.String,
        updated_at: Schema.String,
        credentials: Schema.optional(
          Schema.Struct({
            credentials_type: Schema.Literals([
              "shared",
              "custom",
              "organization",
            ]),
            has_credentials: Schema.Boolean,
            client_id: Schema.NullOr(Schema.String),
            client_secret_last_four: Schema.NullOr(Schema.String),
            redirect_uri: Schema.String,
          }),
        ),
      }),
    ),
  });
export type ProviderControllerListForOrganizationOutput =
  typeof ProviderControllerListForOrganizationOutput.Type;

// The operation
/**
 * List providers for an organization
 *
 * Returns a list of all providers available to the specified organization, along with any configured custom OAuth scopes, enabled state, and organization-managed credentials where applicable.
 *
 * @param organizationId - An [Organization](/reference/organization) identifier to list provider configurations for.
 */
export const ProviderControllerListForOrganization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderControllerListForOrganizationInput,
    outputSchema: ProviderControllerListForOrganizationOutput,
    errors: [NotFound] as const,
  }));
