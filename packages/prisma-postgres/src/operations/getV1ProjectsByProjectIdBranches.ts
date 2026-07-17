import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1ProjectsByProjectIdBranchesInput {
  projectId: string;
  cursor?: string;
  limit?: number;
  gitName?: string;
  gitNameContains?: string;
}
export const GetV1ProjectsByProjectIdBranchesInput =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    gitName: Schema.optional(Schema.String),
    gitNameContains: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{projectId}/branches" }),
  ) as unknown as Schema.Codec<GetV1ProjectsByProjectIdBranchesInput>;

// Output Schema
export interface GetV1ProjectsByProjectIdBranchesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    gitName: string;
    isDefault: boolean;
    role: "production" | "preview";
    createdAt: string;
    updatedAt: string;
    project: { id: string; url: string; name: string };
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1ProjectsByProjectIdBranchesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        gitName: Schema.String,
        isDefault: Schema.Boolean,
        role: Schema.Literals(["production", "preview"]),
        createdAt: Schema.String,
        updatedAt: Schema.String,
        project: Schema.Struct({
          id: Schema.String,
          url: Schema.String,
          name: Schema.String,
        }),
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<GetV1ProjectsByProjectIdBranchesOutput>;

// The operation
/**
 * List branches in a project
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns the live Branches of a Project. Supports two mutually exclusive filters: ?gitName= (exact match — at most one row), ?gitNameContains= (case-sensitive substring). Soft-deleted Branches are not returned. Ordered by createdAt ascending.
 */
export const getV1ProjectsByProjectIdBranches =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1ProjectsByProjectIdBranchesInput,
    outputSchema: GetV1ProjectsByProjectIdBranchesOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
