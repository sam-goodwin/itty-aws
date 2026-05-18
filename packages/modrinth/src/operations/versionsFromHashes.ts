import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const VersionsFromHashesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hashes: Schema.Array(Schema.String),
    algorithm: Schema.Literals(["sha1", "sha512"]),
  }).pipe(T.Http({ method: "POST", path: "/version_files" }));
export type VersionsFromHashesInput = typeof VersionsFromHashesInput.Type;

// Output Schema
export const VersionsFromHashesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Struct({
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
        Schema.NullOr(
          Schema.Literals(["listed", "archived", "draft", "unlisted"]),
        ),
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
    }),
  );
export type VersionsFromHashesOutput = typeof VersionsFromHashesOutput.Type;

// The operation
/**
 * Get versions from hashes
 *
 * This is the same as [`/version_file/{hash}`](#operation/versionFromHash) except it accepts multiple hashes.
 */
export const versionsFromHashes = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VersionsFromHashesInput,
  outputSchema: VersionsFromHashesOutput,
  errors: [BadRequest] as const,
}));
