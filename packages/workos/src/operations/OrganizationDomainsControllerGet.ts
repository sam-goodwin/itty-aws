import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const OrganizationDomainsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/organization_domains/{id}" }));
export type OrganizationDomainsControllerGetInput =
  typeof OrganizationDomainsControllerGetInput.Type;

// Output Schema
export const OrganizationDomainsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    verification_strategy: Schema.optional(Schema.Literals(["dns", "manual"])),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type OrganizationDomainsControllerGetOutput =
  typeof OrganizationDomainsControllerGetOutput.Type;

// The operation
/**
 * Get an Organization Domain
 *
 * Get the details of an existing organization domain.
 *
 * @param id - Unique identifier of the organization domain.
 */
export const OrganizationDomainsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDomainsControllerGetInput,
    outputSchema: OrganizationDomainsControllerGetOutput,
    errors: [NotFound] as const,
  }));
