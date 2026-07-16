import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetV1SourceRepositoriesInput {
  cursor?: string;
  limit?: number;
  projectId: string;
}
export const GetV1SourceRepositoriesInput =
  /*@__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    projectId: Schema.String,
  }).pipe(
    T.Http({ method: "GET", path: "/v1/source-repositories" }),
  ) as unknown as Schema.Codec<GetV1SourceRepositoriesInput>;

// Output Schema
export interface GetV1SourceRepositoriesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    repoId: number;
    provider: "github";
    repoFullName: string;
    defaultBranch: string;
    isPrivate: boolean;
    status: "active" | "archived";
    projectId: string;
    installationId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1SourceRepositoriesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetV1SourceRepositoriesOutput>;

// The operation
/**
 * List source repositories
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns source repositories linked to a project. Requires projectId query parameter.
 */
export const getV1SourceRepositories = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1SourceRepositoriesInput,
  outputSchema: GetV1SourceRepositoriesOutput,
  errors: [NotFound] as const,
}));
