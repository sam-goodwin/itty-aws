import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetProjectsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/projects" }));
export type GetProjectsInput = typeof GetProjectsInput.Type;

// Output Schema
export const GetProjectsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
);
export type GetProjectsOutput = typeof GetProjectsOutput.Type;

// The operation
/**
 * Get multiple projects
 *
 * @param ids - The IDs and/or slugs of the projects
 */
export const getProjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectsInput,
  outputSchema: GetProjectsOutput,
}));
