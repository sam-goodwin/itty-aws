import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GetV1ScmInstallationsByInstallationIdRepositoriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installationId: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/scm-installations/{installationId}/repositories",
    }),
  );
export type GetV1ScmInstallationsByInstallationIdRepositoriesInput =
  typeof GetV1ScmInstallationsByInstallationIdRepositoriesInput.Type;

// Output Schema
export const GetV1ScmInstallationsByInstallationIdRepositoriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        type: Schema.String,
        fullName: Schema.String,
        defaultBranch: Schema.String,
        isPrivate: Schema.Boolean,
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  });
export type GetV1ScmInstallationsByInstallationIdRepositoriesOutput =
  typeof GetV1ScmInstallationsByInstallationIdRepositoriesOutput.Type;

// The operation
/**
 * List repositories accessible to an SCM installation
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Lists repositories accessible to the given SCM installation.
 */
export const getV1ScmInstallationsByInstallationIdRepositories =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetV1ScmInstallationsByInstallationIdRepositoriesInput,
    outputSchema: GetV1ScmInstallationsByInstallationIdRepositoriesOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
