import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const PlatformListDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    include_development: Schema.optional(Schema.Literals(["true"])),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/platform/domains" }));
export type PlatformListDomainsInput = typeof PlatformListDomainsInput.Type;

// Output Schema
export const PlatformListDomainsOutput =
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
      }),
    ),
    total_count: Schema.Number,
  });
export type PlatformListDomainsOutput = typeof PlatformListDomainsOutput.Type;

// The operation
/**
 * List domains
 *
 * List production instance domains for applications in the authenticated workspace.
 * Results are sorted by domain creation time in descending order (most recent first).
 * Set `include_development` to include development instance domains.
 *
 * @param name - Filter domains whose name contains this substring (case-insensitive).
 * @param include_development - When `true`, include development instance domains. Defaults to production only.
 * @param limit - Number of results to return per page (1-500, default 10).
 * @param starting_after - Cursor for pagination. Provide the ID of the last domain from the
previous page to get the next page of results.

 * @param ending_before - Cursor for pagination. Provide the ID of the first domain from the
previous page to get the previous page of results.

 */
export const PlatformListDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PlatformListDomainsInput,
  outputSchema: PlatformListDomainsOutput,
  errors: [Forbidden, UnprocessableEntity] as const,
}));
