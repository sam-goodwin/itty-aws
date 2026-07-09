import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListWordPressInstallationsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    ownership: Schema.optional(Schema.Literals(["owned", "managed", "all"])),
  }).pipe(
    T.Http({ method: "GET", path: "/api/hosting/v1/wordpress/installations" }),
  );
export type HostingListWordPressInstallationsV1Input =
  typeof HostingListWordPressInstallationsV1Input.Type;

// Output Schema
export const HostingListWordPressInstallationsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      username: Schema.optional(Schema.String),
      domain: Schema.optional(Schema.String),
      site_title: Schema.optional(Schema.String),
      url: Schema.optional(Schema.String),
      directory: Schema.optional(Schema.String),
      language: Schema.optional(Schema.String),
      login: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_valid: Schema.optional(Schema.Boolean),
      validation_error: Schema.optional(Schema.NullOr(Schema.String)),
      created_at: Schema.optional(Schema.String),
    }),
  );
export type HostingListWordPressInstallationsV1Output =
  typeof HostingListWordPressInstallationsV1Output.Type;

// The operation
/**
 * List WordPress installations
 *
 * List WordPress installations accessible to the authenticated client.
 * Use this endpoint to discover existing WordPress installations and to poll
 * for installation status after calling the install endpoint. When a newly
 * requested installation appears in this list, WordPress is ready. Filter by
 * username and domain to narrow results to a specific website.
 * Each installation includes a `valid` flag and, when invalid, a
 * `validationError` describing why.
 *
 * @param username - Filter by specific username
 * @param domain - Filter by domain name (exact match)
 * @param ownership - Filter by ownership type. Defaults to "owned". Use "all" to include both owned and managed installations.
 */
export const hostingListWordPressInstallationsV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingListWordPressInstallationsV1Input,
    outputSchema: HostingListWordPressInstallationsV1Output,
  }));
