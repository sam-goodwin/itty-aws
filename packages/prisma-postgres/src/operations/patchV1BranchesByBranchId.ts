import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PatchV1BranchesByBranchIdInput {
  branchId: string;
  isDefault?: boolean | null;
}
export const PatchV1BranchesByBranchIdInput =
  /*@__PURE__*/ Schema.Struct({
    branchId: Schema.String.pipe(T.PathParam()),
    isDefault: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/branches/{branchId}" }),
  ) as unknown as Schema.Codec<PatchV1BranchesByBranchIdInput>;

// Output Schema
export interface PatchV1BranchesByBranchIdOutput {
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
export const PatchV1BranchesByBranchIdOutput =
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
  }) as unknown as Schema.Codec<PatchV1BranchesByBranchIdOutput>;

// The operation
/**
 * Update a branch
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Promotes a Branch to be the Project's default. Only isDefault is mutable — gitName rename and role changes are rejected.
 */
export const patchV1BranchesByBranchId = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchV1BranchesByBranchIdInput,
  outputSchema: PatchV1BranchesByBranchIdOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
