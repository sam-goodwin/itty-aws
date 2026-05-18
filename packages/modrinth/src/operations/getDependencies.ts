import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetDependenciesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/project/{id_or_slug}/dependencies" }));
export type GetDependenciesInput = typeof GetDependenciesInput.Type;

// Output Schema
export const GetDependenciesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projects: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        team: Schema.String,
        body_url: Schema.optional(Schema.NullOr(Schema.String)),
        moderator_message: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              message: Schema.optional(Schema.String),
              body: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        published: Schema.String,
        updated: Schema.String,
        approved: Schema.optional(Schema.NullOr(Schema.String)),
        queued: Schema.optional(Schema.NullOr(Schema.String)),
        followers: Schema.Number,
        license: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            url: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        versions: Schema.optional(Schema.Array(Schema.String)),
        game_versions: Schema.optional(Schema.Array(Schema.String)),
        loaders: Schema.optional(Schema.Array(Schema.String)),
        gallery: Schema.optional(
          Schema.Array(
            Schema.NullOr(
              Schema.Struct({
                url: Schema.String,
                featured: Schema.Boolean,
                title: Schema.optional(Schema.NullOr(Schema.String)),
                description: Schema.optional(Schema.NullOr(Schema.String)),
                created: Schema.String,
                ordering: Schema.optional(Schema.Number),
              }),
            ),
          ),
        ),
      }),
    ),
  ),
  versions: Schema.optional(
    Schema.Array(
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
    ),
  ),
});
export type GetDependenciesOutput = typeof GetDependenciesOutput.Type;

// The operation
/**
 * Get all of a project's dependencies
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const getDependencies = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDependenciesInput,
  outputSchema: GetDependenciesOutput,
  errors: [NotFound] as const,
}));
