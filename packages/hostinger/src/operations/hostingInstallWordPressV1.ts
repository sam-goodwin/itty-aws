import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString, SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const HostingInstallWordPressV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String,
    site_title: Schema.String,
    language: Schema.optional(Schema.NullOr(Schema.String)),
    directory: Schema.optional(Schema.NullOr(Schema.String)),
    overwrite: Schema.optional(Schema.NullOr(Schema.Boolean)),
    auto_updates: Schema.optional(
      Schema.NullOr(Schema.Literals(["all", "none", "minor"])),
    ),
    version: Schema.optional(Schema.NullOr(Schema.String)),
    credentials: Schema.Struct({
      email: Schema.String,
      login: Schema.String,
      password: SensitiveString,
    }),
    database: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveNullableString),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/hosting/v1/accounts/{username}/wordpress/installations",
    }),
  );
export type HostingInstallWordPressV1Input =
  typeof HostingInstallWordPressV1Input.Type;

// Output Schema
export const HostingInstallWordPressV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingInstallWordPressV1Output =
  typeof HostingInstallWordPressV1Output.Type;

// The operation
/**
 * Install WordPress
 *
 * Install WordPress on an existing website.
 * The website must already exist before calling this endpoint. To create a new
 * website first, use POST /api/hosting/v1/websites and poll
 * GET /api/hosting/v1/websites until it appears.
 * Call GET /api/hosting/v1/wordpress/installations filtered by username and
 * domain before proceeding to check whether WordPress is already installed on
 * the target domain/path. If WordPress already exists and `overwrite` is false
 * (the default), the async job will fail.
 * This operation is asynchronous: a successful response only means the install
 * job has been queued, not that WordPress is ready. Installation typically
 * takes 1-2 minutes. Poll GET /api/hosting/v1/wordpress/installations filtered
 * by username and domain to track progress. When the installation appears in
 * that list, WordPress is ready.
 */
export const hostingInstallWordPressV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingInstallWordPressV1Input,
    outputSchema: HostingInstallWordPressV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
