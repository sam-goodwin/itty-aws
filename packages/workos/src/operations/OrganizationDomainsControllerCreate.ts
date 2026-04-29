import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Conflict } from "../errors.ts";

// Input Schema
export const OrganizationDomainsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
    organization_id: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/organization_domains" }));
export type OrganizationDomainsControllerCreateInput =
  typeof OrganizationDomainsControllerCreateInput.Type;

// Output Schema
export const OrganizationDomainsControllerCreateOutput =
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
export type OrganizationDomainsControllerCreateOutput =
  typeof OrganizationDomainsControllerCreateOutput.Type;

// The operation
/**
 * Create an Organization Domain
 *
 * Creates a new Organization Domain.
 */
export const OrganizationDomainsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDomainsControllerCreateInput,
    outputSchema: OrganizationDomainsControllerCreateOutput,
    errors: [Conflict] as const,
  }));
