import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetFollowedProjectsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_username: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/user/{id_or_username}/follows" }));
export type GetFollowedProjectsInput = typeof GetFollowedProjectsInput.Type;

// Output Schema
export const GetFollowedProjectsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
export type GetFollowedProjectsOutput = typeof GetFollowedProjectsOutput.Type;

// The operation
/**
 * Get user's followed projects
 *
 * @param id_or_username - The ID or username of the user
 */
export const getFollowedProjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetFollowedProjectsInput,
  outputSchema: GetFollowedProjectsOutput,
  errors: [NotFound] as const,
}));
