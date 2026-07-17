import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ModifyDatabaseDiskInput {
  ref: string;
  attributes:
    | { iops: number; size_gb: number; throughput_mibps?: number; type: "gp3" }
    | { iops: number; size_gb: number; type: "io2" };
}
export const V1ModifyDatabaseDiskInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    attributes: Schema.Union([
      Schema.Struct({
        iops: Schema.Number,
        size_gb: Schema.Number,
        throughput_mibps: Schema.optional(Schema.Number),
        type: Schema.Literals(["gp3"]),
      }),
      Schema.Struct({
        iops: Schema.Number,
        size_gb: Schema.Number,
        type: Schema.Literals(["io2"]),
      }),
    ]),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/config/disk" }),
  ) as unknown as Schema.Codec<V1ModifyDatabaseDiskInput>;

// Output Schema
export type V1ModifyDatabaseDiskOutput = void;
export const V1ModifyDatabaseDiskOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1ModifyDatabaseDiskOutput>;

// The operation
/**
 * Modify database disk
 *
 * @param ref - Project ref
 */
export const v1ModifyDatabaseDisk = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ModifyDatabaseDiskInput,
  outputSchema: V1ModifyDatabaseDiskOutput,
  errors: [BadRequest, Forbidden] as const,
}));
