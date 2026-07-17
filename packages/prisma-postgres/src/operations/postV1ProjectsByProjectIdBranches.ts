import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PostV1ProjectsByProjectIdBranchesInput {
  projectId: string;
  gitName: string;
  isDefault?: boolean;
}
export const PostV1ProjectsByProjectIdBranchesInput =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.PathParam()),
    gitName: Schema.String,
    isDefault: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{projectId}/branches" }),
  ) as unknown as Schema.Codec<PostV1ProjectsByProjectIdBranchesInput>;

// Output Schema
export interface PostV1ProjectsByProjectIdBranchesOutput {
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
  };
}
export const PostV1ProjectsByProjectIdBranchesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
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
  }) as unknown as Schema.Codec<PostV1ProjectsByProjectIdBranchesOutput>;

// The operation
/**
 * Create a branch
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Creates a Branch under the specified Project. The first Branch in a Project is always created with isDefault=true and role=production regardless of the body value. Later Branches are created with role=preview. Setting isDefault=true while another Branch already holds the default atomically swaps the default flag only.
 */
export const postV1ProjectsByProjectIdBranches =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV1ProjectsByProjectIdBranchesInput,
    outputSchema: PostV1ProjectsByProjectIdBranchesOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
