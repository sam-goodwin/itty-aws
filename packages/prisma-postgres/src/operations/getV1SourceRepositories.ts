import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetV1SourceRepositoriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    projectId: Schema.String,
  }).pipe(T.Http({ method: "GET", path: "/v1/source-repositories" }));
export type GetV1SourceRepositoriesInput =
  typeof GetV1SourceRepositoriesInput.Type;

// Output Schema
export const GetV1SourceRepositoriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  });
export type GetV1SourceRepositoriesOutput =
  typeof GetV1SourceRepositoriesOutput.Type;

// The operation
/**
 * List source repositories
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns source repositories linked to a project. Requires projectId query parameter.
 */
export const getV1SourceRepositories = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1SourceRepositoriesInput,
    outputSchema: GetV1SourceRepositoriesOutput,
    errors: [NotFound] as const,
  }),
);
