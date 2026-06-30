import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetRestorePointInput {
  ref: string;
  name?: string;
}
export const V1GetRestorePointInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/v1/projects/{ref}/database/backups/restore-point",
  }),
) as unknown as Schema.Codec<V1GetRestorePointInput>;

// Output Schema
export interface V1GetRestorePointOutput {
  name: string;
  status: "AVAILABLE" | "PENDING" | "REMOVED" | "FAILED";
  completed_on: string | null;
}
export const V1GetRestorePointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    status: Schema.Literals(["AVAILABLE", "PENDING", "REMOVED", "FAILED"]),
    completed_on: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<V1GetRestorePointOutput>;

// The operation
/**
 * Get restore points for project
 *
 * @param ref - Project ref
 */
export const v1GetRestorePoint = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetRestorePointInput,
  outputSchema: V1GetRestorePointOutput,
  errors: [BadRequest, Forbidden] as const,
}));
