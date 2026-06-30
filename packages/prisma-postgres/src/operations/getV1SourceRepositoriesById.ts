import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetV1SourceRepositoriesByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/source-repositories/{id}" }));
export type GetV1SourceRepositoriesByIdInput =
  typeof GetV1SourceRepositoriesByIdInput.Type;

// Output Schema
export const GetV1SourceRepositoriesByIdOutput =
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
export type GetV1SourceRepositoriesByIdOutput =
  typeof GetV1SourceRepositoriesByIdOutput.Type;

// The operation
/**
 * Get a source repository
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns a single source repository link by ID.
 */
export const getV1SourceRepositoriesById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1SourceRepositoriesByIdInput,
    outputSchema: GetV1SourceRepositoriesByIdOutput,
    errors: [NotFound] as const,
  }),
);
