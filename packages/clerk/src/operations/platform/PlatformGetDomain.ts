import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformGetDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    domainIDOrName: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/platform/domains/{domainIDOrName}" }));
export type PlatformGetDomainInput = typeof PlatformGetDomainInput.Type;

// Output Schema
export const PlatformGetDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["domain"]),
    id: Schema.String,
    name: Schema.String,
    is_satellite: Schema.optional(Schema.Boolean),
    is_provider_domain: Schema.optional(Schema.Boolean),
    frontend_api_url: Schema.String,
    development_origin: Schema.String,
    accounts_portal_url: Schema.optional(Schema.String),
    proxy_url: Schema.optional(Schema.String),
    cname_targets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          host: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
          required: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
    application: Schema.Struct({
      object: Schema.Literals(["application"]),
      id: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
    instance: Schema.Struct({
      object: Schema.Literals(["instance"]),
      id: Schema.String,
      environment_type: Schema.Literals(["production", "development"]),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  });
export type PlatformGetDomainOutput = typeof PlatformGetDomainOutput.Type;

// The operation
/**
 * Get domain
 *
 * Retrieve a single domain by ID or name for the authenticated workspace.
 *
 * @param domainIDOrName - Domain ID or domain name.
 */
export const PlatformGetDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PlatformGetDomainInput,
  outputSchema: PlatformGetDomainOutput,
  errors: [Forbidden, NotFound] as const,
}));
