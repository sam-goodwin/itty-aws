import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ProviderControllerConfigureInput {
  organizationId: string;
  slug: string;
  enabled?: boolean;
  scopes?: ReadonlyArray<string> | null;
  client_id?: string;
  client_secret?: string | Redacted.Redacted<string>;
}
export const ProviderControllerConfigureInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    scopes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    client_id: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/organizations/{organizationId}/data_integration_configurations/{slug}",
    }),
  ) as unknown as Schema.Codec<ProviderControllerConfigureInput>;

// Output Schema
export interface ProviderControllerConfigureOutput {
  object: string;
  id: string;
  organization_id: string;
  slug: string;
  name: string;
  enabled: boolean;
  scopes: ReadonlyArray<string> | null;
  created_at: string;
  updated_at: string;
  credentials?: {
    credentials_type: "shared" | "custom" | "organization";
    has_credentials: boolean;
    client_id: string | null;
    client_secret_last_four: string | null;
    redirect_uri: string;
  };
}
export const ProviderControllerConfigureOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    enabled: Schema.Boolean,
    scopes: Schema.NullOr(Schema.Array(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.String,
    credentials: Schema.optional(
      Schema.Struct({
        credentials_type: Schema.Literals(["shared", "custom", "organization"]),
        has_credentials: Schema.Boolean,
        client_id: Schema.NullOr(Schema.String),
        client_secret_last_four: Schema.NullOr(Schema.String),
        redirect_uri: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ProviderControllerConfigureOutput>;

// The operation
/**
 * Configure a provider for an organization
 *
 * Creates or updates an organization's provider configuration. Use this endpoint to enable or disable a provider, set custom OAuth scopes, or supply organization-managed OAuth credentials.
 *
 * @param organizationId - An [Organization](/reference/organization) identifier to configure the provider for.
 * @param slug - The slug identifier of the provider to configure (e.g., `github`, `slack`, `notion`).
 */
export const ProviderControllerConfigure = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderControllerConfigureInput,
    outputSchema: ProviderControllerConfigureOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
