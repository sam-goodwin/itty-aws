import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetV1BranchesByBranchIdInput {
  branchId: string;
}
export const GetV1BranchesByBranchIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branchId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/branches/{branchId}" }),
  ) as unknown as Schema.Codec<GetV1BranchesByBranchIdInput>;

// Output Schema
export interface GetV1BranchesByBranchIdOutput {
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
export const GetV1BranchesByBranchIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetV1BranchesByBranchIdOutput>;

// The operation
/**
 * Get a branch
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns a single Branch by ID. Member resources are not inlined — list them via /v1/databases?branchId= and /v1/compute-services?branchId=.
 */
export const getV1BranchesByBranchId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1BranchesByBranchIdInput,
    outputSchema: GetV1BranchesByBranchIdOutput,
    errors: [NotFound] as const,
  }),
);
