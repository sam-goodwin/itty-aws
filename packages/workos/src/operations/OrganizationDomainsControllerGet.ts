import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface OrganizationDomainsControllerGetInput {
  id: string;
}
export const OrganizationDomainsControllerGetInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/organization_domains/{id}" }),
  ) as unknown as Schema.Codec<OrganizationDomainsControllerGetInput>;

// Output Schema
export interface OrganizationDomainsControllerGetOutput {
  object?: string;
  id?: string;
  organization_id?: string;
  domain?: string;
  state?: "failed" | "legacy_verified" | "pending" | "unverified" | "verified";
  verification_prefix?: string;
  verification_token?: string;
  verification_strategy?: "dns" | "manual";
  created_at?: string;
  updated_at?: string;
}
export const OrganizationDomainsControllerGetOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
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
    verification_strategy: Schema.optional(Schema.Literals(["dns", "manual"])),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrganizationDomainsControllerGetOutput>;

// The operation
/**
 * Get an Organization Domain
 *
 * Get the details of an existing organization domain.
 *
 * @param id - Unique identifier of the organization domain.
 */
export const OrganizationDomainsControllerGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDomainsControllerGetInput,
    outputSchema: OrganizationDomainsControllerGetOutput,
    errors: [NotFound] as const,
  }));
