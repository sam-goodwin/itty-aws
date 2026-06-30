import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV1ScmInstallationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    workspaceId: Schema.String,
  }).pipe(T.Http({ method: "GET", path: "/v1/scm-installations" }));
export type GetV1ScmInstallationsInput = typeof GetV1ScmInstallationsInput.Type;

// Output Schema
export const GetV1ScmInstallationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        provider: Schema.Literals(["github"]),
        installationId: Schema.Number,
        accountId: Schema.Number,
        accountLogin: Schema.String,
        accountType: Schema.Literals(["user", "organization"]),
        suspended: Schema.Boolean,
        createdAt: Schema.String,
        updatedAt: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  });
export type GetV1ScmInstallationsOutput =
  typeof GetV1ScmInstallationsOutput.Type;

// The operation
/**
 * List SCM installations for a workspace
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Lists active SCM installations connected to the given workspace.
 */
export const getV1ScmInstallations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1ScmInstallationsInput,
    outputSchema: GetV1ScmInstallationsOutput,
  }),
);
