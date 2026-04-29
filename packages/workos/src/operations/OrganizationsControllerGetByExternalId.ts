import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const OrganizationsControllerGetByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/external_id/{external_id}" }),
  );
export type OrganizationsControllerGetByExternalIdInput =
  typeof OrganizationsControllerGetByExternalIdInput.Type;

// Output Schema
export const OrganizationsControllerGetByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    name: Schema.String,
    domains: Schema.Array(
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
    metadata: Schema.Record(Schema.String, Schema.String),
    external_id: Schema.NullOr(Schema.String),
    stripe_customer_id: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    allow_profiles_outside_organization: Schema.optional(Schema.Boolean),
  });
export type OrganizationsControllerGetByExternalIdOutput =
  typeof OrganizationsControllerGetByExternalIdOutput.Type;

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
