import * as Schema from "effect/Schema";
import { BranchResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const V1ListAllBranchesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/v1/projects/{ref}/branches" }));
export type V1ListAllBranchesInput = typeof V1ListAllBranchesInput.Type;

// Output Schema
export const V1ListAllBranchesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => BranchResponseSchema),
);
export type V1ListAllBranchesOutput = typeof V1ListAllBranchesOutput.Type;

// The operation
/**
 * List all database branches
 *
 * Returns all database branches of the specified project.
 *
 * @param ref - Project ref
 */
export const v1ListAllBranches = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllBranchesInput,
  outputSchema: V1ListAllBranchesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
