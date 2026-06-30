import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetV1BranchesByBranchIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branchId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/branches/{branchId}" }));
export type GetV1BranchesByBranchIdInput =
  typeof GetV1BranchesByBranchIdInput.Type;

// Output Schema
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
  });
export type GetV1BranchesByBranchIdOutput =
  typeof GetV1BranchesByBranchIdOutput.Type;

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
