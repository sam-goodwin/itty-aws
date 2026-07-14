import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1ScmInstallationsInput {
  cursor?: string;
  limit?: number;
  workspaceId: string;
}
export const GetV1ScmInstallationsInput =
  /*@__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    workspaceId: Schema.String,
  }).pipe(
    T.Http({ method: "GET", path: "/v1/scm-installations" }),
  ) as unknown as Schema.Codec<GetV1ScmInstallationsInput>;

// Output Schema
export interface GetV1ScmInstallationsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    provider: "github";
    installationId: number;
    accountId: number;
    accountLogin: string;
    accountType: "user" | "organization";
    suspended: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1ScmInstallationsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetV1ScmInstallationsOutput>;

// The operation
/**
 * List SCM installations for a workspace
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Lists active SCM installations connected to the given workspace.
 */
export const getV1ScmInstallations = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1ScmInstallationsInput,
  outputSchema: GetV1ScmInstallationsOutput,
}));
