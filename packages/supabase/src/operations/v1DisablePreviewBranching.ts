import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1DisablePreviewBranchingInput {
  ref: string;
}
export const V1DisablePreviewBranchingInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/branches" }),
  ) as unknown as Schema.Codec<V1DisablePreviewBranchingInput>;

// Output Schema
export type V1DisablePreviewBranchingOutput = void;
export const V1DisablePreviewBranchingOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DisablePreviewBranchingOutput>;

// The operation
/**
 * Disables preview branching
 *
 * Disables preview branching for the specified project
 *
 * @param ref - Project ref
 */
export const v1DisablePreviewBranching = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DisablePreviewBranchingInput,
  outputSchema: V1DisablePreviewBranchingOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
