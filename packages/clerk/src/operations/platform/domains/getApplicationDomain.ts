import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetApplicationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    domainIDOrName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/domains/{domainIDOrName}",
    }),
  );
export type GetApplicationDomainInput = typeof GetApplicationDomainInput.Type;

// Output Schema
export const GetApplicationDomainOutput =
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
export type GetApplicationDomainOutput = typeof GetApplicationDomainOutput.Type;

// The operation
/**
 * Get application domain
 *
 * Get domain information for an application.
 *
 * @param applicationID - Application ID.
 * @param domainIDOrName - Domain ID or domain name.
 */
export const getApplicationDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetApplicationDomainInput,
    outputSchema: GetApplicationDomainOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
