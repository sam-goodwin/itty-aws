import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    project_type: Schema.Literals(["mod", "modpack"]),
    initial_versions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          version_number: Schema.optional(Schema.String),
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
          game_versions: Schema.optional(Schema.Array(Schema.String)),
          version_type: Schema.optional(
            Schema.Literals(["release", "beta", "alpha"]),
          ),
          loaders: Schema.optional(Schema.Array(Schema.String)),
          featured: Schema.optional(Schema.Boolean),
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
          primary_file: Schema.optional(Schema.Array(Schema.String)),
          file_types: Schema.optional(
            Schema.Array(
              Schema.Struct({
                algorithm: Schema.String,
                hash: Schema.String,
                file_type: Schema.Struct({}),
              }),
            ),
          ),
        }),
      ),
    ),
    is_draft: Schema.optional(Schema.Boolean),
    gallery_items: Schema.optional(
      Schema.Array(
        Schema.NullOr(
          Schema.Struct({
            item: Schema.optional(Schema.String),
            featured: Schema.optional(Schema.Boolean),
            title: Schema.optional(Schema.NullOr(Schema.String)),
            description: Schema.optional(Schema.NullOr(Schema.String)),
            ordering: Schema.optional(Schema.Number),
          }),
        ),
      ),
    ),
  }),
  icon: Schema.optional(
    Schema.Literals([
      "*.png",
      "*.jpg",
      "*.jpeg",
      "*.bmp",
      "*.gif",
      "*.webp",
      "*.svg",
      "*.svgz",
      "*.rgb",
    ]),
  ),
}).pipe(T.Http({ method: "POST", path: "/project", contentType: "multipart" }));
export type CreateProjectInput = typeof CreateProjectInput.Type;

// Output Schema
export const CreateProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type CreateProjectOutput = typeof CreateProjectOutput.Type;

// The operation
/**
 * Create a project
 */
export const createProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectInput,
  outputSchema: CreateProjectOutput,
  errors: [BadRequest] as const,
}));
