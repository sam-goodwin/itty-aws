import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const HostingCreateNodeJSBuildFromArchiveV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    archive: Schema.String,
    node_version: Schema.optional(
      Schema.NullOr(Schema.Literals([18, 20, 22, 24])),
    ),
    app_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "create-react-app",
          "vite",
          "angular",
          "react",
          "vue",
          "parcel",
          "express",
          "fastify",
          "nest",
        ]),
      ),
    ),
    root_directory: Schema.optional(Schema.NullOr(Schema.String)),
    output_directory: Schema.optional(Schema.NullOr(Schema.String)),
    build_script: Schema.optional(Schema.NullOr(Schema.String)),
    entry_file: Schema.optional(Schema.NullOr(Schema.String)),
    package_manager: Schema.optional(
      Schema.NullOr(Schema.Literals(["npm", "yarn", "pnpm"])),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds/from-archive",
    }),
  );
export type HostingCreateNodeJSBuildFromArchiveV1Input =
  typeof HostingCreateNodeJSBuildFromArchiveV1Input.Type;

// Output Schema
export const HostingCreateNodeJSBuildFromArchiveV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["pending", "running", "completed", "failed"]),
    ),
    options: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type HostingCreateNodeJSBuildFromArchiveV1Output =
  typeof HostingCreateNodeJSBuildFromArchiveV1Output.Type;

// The operation
/**
 * Create NodeJS build from archive
 *
 * Upload a project archive, auto-detect build settings, and immediately start a Node.js build.
 * This is the recommended single-step approach for deploying a Node.js application.
 * The archive is uploaded to the website's file storage, build settings are auto-detected
 * from the package.json inside the archive, and the build process starts automatically.
 * Optional override fields take precedence over auto-detected values.
 * Maximum archive size is 50MB.
 * Before archiving, exclude `node_modules/` and any build output directories
 * (e.g. `dist/`, `.next/`, `build/`) — they are not needed because the build
 * process runs the install step automatically, and including them unnecessarily
 * increases the archive size. This also helps keep the archive well under the 50MB limit.
 * Example (zip):
 * ```
 * zip -r archive.zip . --exclude "node_modules/*" --exclude "dist/*"
 * ```
 * The returned build `uuid` can be used to poll progress and retrieve logs via
 * the `Get Node.js Build Logs` endpoint.
 *
 * @param domain - Domain name
 */
export const hostingCreateNodeJSBuildFromArchiveV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingCreateNodeJSBuildFromArchiveV1Input,
    outputSchema: HostingCreateNodeJSBuildFromArchiveV1Output,
    errors: [UnprocessableEntity] as const,
  }));
