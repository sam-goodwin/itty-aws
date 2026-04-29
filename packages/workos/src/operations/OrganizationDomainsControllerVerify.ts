import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const OrganizationDomainsControllerVerifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/organization_domains/{id}/verify" }),
  );
export type OrganizationDomainsControllerVerifyInput =
  typeof OrganizationDomainsControllerVerifyInput.Type;

// Output Schema
export const OrganizationDomainsControllerVerifyOutput =
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
export type OrganizationDomainsControllerVerifyOutput =
  typeof OrganizationDomainsControllerVerifyOutput.Type;

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
