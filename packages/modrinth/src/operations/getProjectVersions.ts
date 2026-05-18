import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetProjectVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_slug: Schema.String.pipe(T.PathParam()),
    loaders: Schema.optional(Schema.String),
    game_versions: Schema.optional(Schema.String),
    featured: Schema.optional(Schema.Boolean),
    include_changelog: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "GET", path: "/project/{id_or_slug}/version" }));
export type GetProjectVersionsInput = typeof GetProjectVersionsInput.Type;

// Output Schema
export const GetProjectVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
export type GetProjectVersionsOutput = typeof GetProjectVersionsOutput.Type;

// The operation
/**
 * List project's versions
 *
 * @param id_or_slug - The ID or slug of the project
 * @param loaders - The types of loaders to filter for
 * @param game_versions - The game versions to filter for
 * @param featured - Allows to filter for featured or non-featured versions only
 * @param include_changelog - Allows you to toggle the inclusion of the changelog field in the response. It is highly recommended to use include_changelog=false in most cases unless you specifically need the changelog for all versions.
 */
export const getProjectVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectVersionsInput,
  outputSchema: GetProjectVersionsOutput,
  errors: [NotFound] as const,
}));
