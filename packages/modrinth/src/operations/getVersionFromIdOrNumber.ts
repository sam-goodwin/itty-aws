import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetVersionFromIdOrNumberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_slug: Schema.String.pipe(T.PathParam()),
    id_or_number: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/project/{id_or_slug}/version/{id_or_number}",
    }),
  );
export type GetVersionFromIdOrNumberInput =
  typeof GetVersionFromIdOrNumberInput.Type;

// Output Schema
export const GetVersionFromIdOrNumberOutput =
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
export type GetVersionFromIdOrNumberOutput =
  typeof GetVersionFromIdOrNumberOutput.Type;

// The operation
/**
 * Get a version given a version number or ID
 *
 * Please note that, if the version number provided matches multiple versions, only the **oldest matching version** will be returned.
 *
 * @param id_or_slug - The ID or slug of the project
 * @param id_or_number - The version ID or version number
 */
export const getVersionFromIdOrNumber = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetVersionFromIdOrNumberInput,
    outputSchema: GetVersionFromIdOrNumberOutput,
    errors: [NotFound] as const,
  }),
);
