import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const VersionFromHashInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hash: Schema.String.pipe(T.PathParam()),
  algorithm: Schema.Literals(["sha1", "sha512"]),
  multiple: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/version_file/{hash}" }));
export type VersionFromHashInput = typeof VersionFromHashInput.Type;

// Output Schema
export const VersionFromHashOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  version_number: Schema.String,
  changelog: Schema.optional(Schema.NullOr(Schema.String)),
  dependencies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        version_id: Schema.optional(Schema.NullOr(Schema.String)),
        project_id: Schema.optional(Schema.NullOr(Schema.String)),
        file_name: Schema.optional(Schema.NullOr(Schema.String)),
        dependency_type: Schema.Literals([
          "required",
          "optional",
          "incompatible",
          "embedded",
        ]),
      }),
    ),
  ),
  game_versions: Schema.Array(Schema.String),
  version_type: Schema.Literals(["release", "beta", "alpha"]),
  loaders: Schema.Array(Schema.String),
  featured: Schema.Boolean,
  status: Schema.optional(
    Schema.Literals([
      "listed",
      "archived",
      "draft",
      "unlisted",
      "scheduled",
      "unknown",
    ]),
  ),
  requested_status: Schema.optional(
    Schema.NullOr(Schema.Literals(["listed", "archived", "draft", "unlisted"])),
  ),
  id: Schema.String,
  project_id: Schema.String,
  author_id: Schema.String,
  date_published: Schema.String,
  downloads: Schema.Number,
  changelog_url: Schema.optional(Schema.NullOr(Schema.String)),
  files: Schema.Array(
    Schema.Struct({
      hashes: Schema.Struct({
        sha512: Schema.optional(Schema.String),
        sha1: Schema.optional(Schema.String),
      }),
      url: Schema.String,
      filename: Schema.String,
      primary: Schema.Boolean,
      size: Schema.Number,
      file_type: Schema.optional(Schema.Struct({})),
    }),
  ),
});
export type VersionFromHashOutput = typeof VersionFromHashOutput.Type;

// The operation
/**
 * Get version from hash
 *
 * @param hash - The hash of the file, considering its byte content, and encoded in hexadecimal
 * @param algorithm - The algorithm of the hash
 * @param multiple - Whether to return multiple results when looking for this hash
 */
export const versionFromHash = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VersionFromHashInput,
  outputSchema: VersionFromHashOutput,
  errors: [NotFound] as const,
}));
