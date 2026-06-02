import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformListApplicationDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/platform/applications/{applicationID}/domains",
    }),
  );
export type PlatformListApplicationDomainsInput =
  typeof PlatformListApplicationDomainsInput.Type;

// Output Schema
export const PlatformListApplicationDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    total_count: Schema.Number,
  });
export type PlatformListApplicationDomainsOutput =
  typeof PlatformListApplicationDomainsOutput.Type;

// The operation
/**
 * List application domains
 *
 * List all domains for an application's production instance.
 *
 * @param applicationID - Application ID.
 */
export const PlatformListApplicationDomains =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlatformListApplicationDomainsInput,
    outputSchema: PlatformListApplicationDomainsOutput,
    errors: [Forbidden, NotFound] as const,
  }));
