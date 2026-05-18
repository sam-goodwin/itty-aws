import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    name: Schema.String,
    version_number: Schema.String,
    changelog: Schema.optional(Schema.NullOr(Schema.String)),
    dependencies: Schema.Array(
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
    project_id: Schema.String,
    file_parts: Schema.Array(Schema.String),
    primary_file: Schema.optional(Schema.String),
  }),
}).pipe(T.Http({ method: "POST", path: "/version", contentType: "multipart" }));
export type CreateVersionInput = typeof CreateVersionInput.Type;

// Output Schema
export const CreateVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateVersionOutput = typeof CreateVersionOutput.Type;

// The operation
/**
 * Create a version
 *
 * This route creates a version on an existing project. There must be at least one file attached to each new version, unless the new version's status is `draft`. `.mrpack`, `.jar`, `.zip`, and `.litemod` files are accepted.
 * The request is a [multipart request](https://www.ietf.org/rfc/rfc2388.txt) with at least two form fields: one is `data`, which includes a JSON body with the version metadata as shown below, and at least one field containing an upload file.
 * You can name the file parts anything you would like, but you must list each of the parts' names in `file_parts`, and optionally, provide one to use as the primary file in `primary_file`.
 */
export const createVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateVersionInput,
  outputSchema: CreateVersionOutput,
  errors: [BadRequest] as const,
}));
