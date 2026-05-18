import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const GetVersionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/versions" }));
export type GetVersionsInput = typeof GetVersionsInput.Type;

// Output Schema
export const GetVersionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
export type GetVersionsOutput = typeof GetVersionsOutput.Type;

// The operation
/**
 * Get multiple versions
 *
 * @param ids - The IDs of the versions
 */
export const getVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVersionsInput,
  outputSchema: GetVersionsOutput,
  errors: [BadRequest] as const,
}));
