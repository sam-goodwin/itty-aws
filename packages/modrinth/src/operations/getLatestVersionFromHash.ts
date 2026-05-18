import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetLatestVersionFromHashInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hash: Schema.String.pipe(T.PathParam()),
    algorithm: Schema.Literals(["sha1", "sha512"]),
    loaders: Schema.Array(Schema.String),
    game_versions: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/version_file/{hash}/update" }));
export type GetLatestVersionFromHashInput =
  typeof GetLatestVersionFromHashInput.Type;

// Output Schema
export const GetLatestVersionFromHashOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetLatestVersionFromHashOutput =
  typeof GetLatestVersionFromHashOutput.Type;

// The operation
/**
 * Latest version of a project from a hash, loader(s), and game version(s)
 *
 * @param hash - The hash of the file, considering its byte content, and encoded in hexadecimal
 * @param algorithm - The algorithm of the hash
 */
export const getLatestVersionFromHash = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetLatestVersionFromHashInput,
    outputSchema: GetLatestVersionFromHashOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
