import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1DiffABranchInput {
  branch_id_or_ref: string;
  included_schemas?: string;
  pgdelta?: boolean;
}
export const V1DiffABranchInput = /*@__PURE__*/ Schema.Struct({
  branch_id_or_ref: Schema.String.pipe(T.PathParam()),
  included_schemas: Schema.optional(Schema.String),
  pgdelta: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/v1/branches/{branch_id_or_ref}/diff" }),
) as unknown as Schema.Codec<V1DiffABranchInput>;

// Output Schema
export type V1DiffABranchOutput = void;
export const V1DiffABranchOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DiffABranchOutput>;

// The operation
/**
 * [Beta] Diffs a database branch
 *
 * Diffs the specified database branch
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 * @param pgdelta - Use pg-delta instead of Migra for diffing when true
 */
export const v1DiffABranch = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DiffABranchInput,
  outputSchema: V1DiffABranchOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
