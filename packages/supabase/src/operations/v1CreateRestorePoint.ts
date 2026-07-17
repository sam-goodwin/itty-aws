import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CreateRestorePointInput {
  ref: string;
  name: string;
}
export const V1CreateRestorePointInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/database/backups/restore-point",
    }),
  ) as unknown as Schema.Codec<V1CreateRestorePointInput>;

// Output Schema
export interface V1CreateRestorePointOutput {
  name: string;
  status: "AVAILABLE" | "PENDING" | "REMOVED" | "FAILED";
  completed_on: string | null;
}
export const V1CreateRestorePointOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String,
    status: Schema.Literals(["AVAILABLE", "PENDING", "REMOVED", "FAILED"]),
    completed_on: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<V1CreateRestorePointOutput>;

// The operation
/**
 * Initiates a creation of a restore point for a database
 *
 * @param ref - Project ref
 */
export const v1CreateRestorePoint = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1CreateRestorePointInput,
  outputSchema: V1CreateRestorePointOutput,
  errors: [BadRequest, Forbidden] as const,
}));
