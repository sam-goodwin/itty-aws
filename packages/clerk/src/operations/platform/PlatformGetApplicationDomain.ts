import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformGetApplicationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    domainIDOrName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/domains/{domainIDOrName}",
    }),
  );
export type PlatformGetApplicationDomainInput =
  typeof PlatformGetApplicationDomainInput.Type;

// Output Schema
export const PlatformGetApplicationDomainOutput =
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
    application: Schema.optional(
      Schema.Struct({
        object: Schema.Literals(["application"]),
        id: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    instance: Schema.optional(
      Schema.Struct({
        object: Schema.Literals(["instance"]),
        id: Schema.String,
        environment_type: Schema.Literals(["production", "development"]),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type PlatformGetApplicationDomainOutput =
  typeof PlatformGetApplicationDomainOutput.Type;

// The operation
/**
 * Get application domain
 *
 * Get domain information for an application.
 *
 * @param applicationID - Application ID.
 * @param domainIDOrName - Domain ID or domain name.
 */
export const PlatformGetApplicationDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlatformGetApplicationDomainInput,
    outputSchema: PlatformGetApplicationDomainOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
