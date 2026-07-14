import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetV1SourceRepositoriesByIdInput {
  id: string;
}
export const GetV1SourceRepositoriesByIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/source-repositories/{id}" }),
  ) as unknown as Schema.Codec<GetV1SourceRepositoriesByIdInput>;

// Output Schema
export interface GetV1SourceRepositoriesByIdOutput {
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
  };
}
export const GetV1SourceRepositoriesByIdOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetV1SourceRepositoriesByIdOutput>;

// The operation
/**
 * Get a source repository
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns a single source repository link by ID.
 */
export const getV1SourceRepositoriesById = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1SourceRepositoriesByIdInput,
  outputSchema: GetV1SourceRepositoriesByIdOutput,
  errors: [NotFound] as const,
}));
