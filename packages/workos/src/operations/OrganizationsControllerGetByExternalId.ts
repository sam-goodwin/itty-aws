import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface OrganizationsControllerGetByExternalIdInput {
  external_id: string;
}
export const OrganizationsControllerGetByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/external_id/{external_id}" }),
  ) as unknown as Schema.Codec<OrganizationsControllerGetByExternalIdInput>;

// Output Schema
export interface OrganizationsControllerGetByExternalIdOutput {
  object?: string;
  id?: string;
  name?: string;
  domains?: ReadonlyArray<{
    object: string;
    id: string;
    organization_id: string;
    domain: string;
    state?:
      | "failed"
      | "legacy_verified"
      | "pending"
      | "unverified"
      | "verified";
    verification_prefix?: string;
    verification_token?: string;
    verification_strategy?: "dns" | "manual";
    created_at: string;
    updated_at: string;
  }>;
  metadata?: Record<string, string>;
  external_id?: string | null;
  stripe_customer_id?: string;
  created_at?: string;
  updated_at?: string;
  allow_profiles_outside_organization?: boolean;
}
export const OrganizationsControllerGetByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    domains: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.String,
          id: Schema.String,
          organization_id: Schema.String,
          domain: Schema.String,
          state: Schema.optional(
            Schema.Literals([
              "failed",
              "legacy_verified",
              "pending",
              "unverified",
              "verified",
            ]),
          ),
          verification_prefix: Schema.optional(Schema.String),
          verification_token: Schema.optional(Schema.String),
          verification_strategy: Schema.optional(
            Schema.Literals(["dns", "manual"]),
          ),
          created_at: Schema.String,
          updated_at: Schema.String,
        }),
      ),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
    stripe_customer_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    allow_profiles_outside_organization: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<OrganizationsControllerGetByExternalIdOutput>;

// The operation
/**
 * Get an Organization by External ID
 *
 * Get the details of an existing organization by an [external identifier](/authkit/metadata/external-identifiers).
 *
 * @param external_id - The external ID of the Organization.
 */
export const OrganizationsControllerGetByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsControllerGetByExternalIdInput,
    outputSchema: OrganizationsControllerGetByExternalIdOutput,
    errors: [NotFound] as const,
  }));
