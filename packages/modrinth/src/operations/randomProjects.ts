import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const RandomProjectsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
}).pipe(T.Http({ method: "GET", path: "/projects_random" }));
export type RandomProjectsInput = typeof RandomProjectsInput.Type;

// Output Schema
export const RandomProjectsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
export type RandomProjectsOutput = typeof RandomProjectsOutput.Type;

// The operation
/**
 * Get a list of random projects
 *
 * @param count - The number of random projects to return
 */
export const randomProjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RandomProjectsInput,
  outputSchema: RandomProjectsOutput,
  errors: [BadRequest] as const,
}));
