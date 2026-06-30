import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface OrganizationDomainsControllerVerifyInput {
  id: string;
}
export const OrganizationDomainsControllerVerifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/organization_domains/{id}/verify" }),
  ) as unknown as Schema.Codec<OrganizationDomainsControllerVerifyInput>;

// Output Schema
export interface OrganizationDomainsControllerVerifyOutput {
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
export const OrganizationDomainsControllerVerifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OrganizationDomainsControllerVerifyOutput>;

// The operation
/**
 * Verify an Organization Domain
 *
 * Initiates verification process for an Organization Domain.
 *
 * @param id - Unique identifier of the organization domain.
 */
export const OrganizationDomainsControllerVerify =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDomainsControllerVerifyInput,
    outputSchema: OrganizationDomainsControllerVerifyOutput,
    errors: [BadRequest] as const,
  }));
