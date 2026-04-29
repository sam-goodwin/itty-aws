import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
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
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/organizations" }));
export type OrganizationsControllerCreateInput =
  typeof OrganizationsControllerCreateInput.Type;

// Output Schema
export const OrganizationsControllerCreateOutput =
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
export type OrganizationsControllerCreateOutput =
  typeof OrganizationsControllerCreateOutput.Type;

// The operation
/**
 * Create an Organization
 *
 * Creates a new organization in the current environment.
 */
export const OrganizationsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsControllerCreateInput,
    outputSchema: OrganizationsControllerCreateOutput,
    errors: [BadRequest, Conflict, UnprocessableEntity] as const,
  }));
