import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const OrganizationsControllerUpdateOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    allow_profiles_outside_organization: Schema.optional(Schema.Boolean),
    domains: Schema.optional(Schema.Array(Schema.String)),
    domain_data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          domain: Schema.String,
          state: Schema.Literals(["pending", "verified"]),
        }),
      ),
    ),
    stripe_customer_id: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "PUT", path: "/organizations/{id}" }));
export type OrganizationsControllerUpdateOrganizationInput =
  typeof OrganizationsControllerUpdateOrganizationInput.Type;

// Output Schema
export const OrganizationsControllerUpdateOrganizationOutput =
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
export type OrganizationsControllerUpdateOrganizationOutput =
  typeof OrganizationsControllerUpdateOrganizationOutput.Type;

// The operation
/**
 * Update an Organization
 *
 * Updates an organization in the current environment.
 *
 * @param id - Unique identifier of the Organization.
 */
export const OrganizationsControllerUpdateOrganization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsControllerUpdateOrganizationInput,
    outputSchema: OrganizationsControllerUpdateOrganizationOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
