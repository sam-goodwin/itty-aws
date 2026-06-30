import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const PostV1SourceRepositoriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String,
    provider: Schema.String,
    providerRepositoryId: Schema.Number,
    installationId: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v1/source-repositories" }));
export type PostV1SourceRepositoriesInput =
  typeof PostV1SourceRepositoriesInput.Type;

// Output Schema
export const PostV1SourceRepositoriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      repoId: Schema.Number,
      provider: Schema.Literals(["github"]),
      repoFullName: Schema.String,
      defaultBranch: Schema.String,
      isPrivate: Schema.Boolean,
      status: Schema.Literals(["active", "archived"]),
      projectId: Schema.String,
      installationId: Schema.String,
      createdAt: Schema.String,
      updatedAt: Schema.String,
    }),
  });
export type PostV1SourceRepositoriesOutput =
  typeof PostV1SourceRepositoriesOutput.Type;

// The operation
/**
 * Link a source repository to a project
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Links a GitHub repository to a Prisma project via an existing SCM installation.
 */
export const postV1SourceRepositories = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostV1SourceRepositoriesInput,
    outputSchema: PostV1SourceRepositoriesOutput,
    errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
