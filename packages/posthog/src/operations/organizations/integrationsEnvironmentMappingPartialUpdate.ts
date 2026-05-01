import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsEnvironmentMappingPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.Literals(["vercel"])),
    integration_id: Schema.optional(Schema.NullOr(Schema.String)),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/organizations/{organization_id}/integrations/{id}/environment-mapping/",
    }),
  );
export type IntegrationsEnvironmentMappingPartialUpdateInput =
  typeof IntegrationsEnvironmentMappingPartialUpdateInput.Type;

// Output Schema
export const IntegrationsEnvironmentMappingPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    kind: Schema.Literals(["vercel"]),
    integration_id: Schema.NullOr(Schema.String),
    config: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
  });
export type IntegrationsEnvironmentMappingPartialUpdateOutput =
  typeof IntegrationsEnvironmentMappingPartialUpdateOutput.Type;

// The operation
/**
 * ViewSet for organization-level integrations.
 * Provides access to integrations that are scoped to the entire organization
 * (vs. project-level integrations). Examples include Vercel, AWS Marketplace, etc.
 * Creation is handled by the integration installation flows
 * (e.g., Vercel marketplace installation). Users can disconnect integrations
 * via the DELETE endpoint.
 *
 * @param id - A UUID string identifying this organization integration.
 */
export const integrationsEnvironmentMappingPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsEnvironmentMappingPartialUpdateInput,
    outputSchema: IntegrationsEnvironmentMappingPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
