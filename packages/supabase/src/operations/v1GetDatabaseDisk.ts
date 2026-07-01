import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetDatabaseDiskInput {
  ref: string;
}
export const V1GetDatabaseDiskInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/config/disk" }),
) as unknown as Schema.Codec<V1GetDatabaseDiskInput>;

// Output Schema
export interface V1GetDatabaseDiskOutput {
  attributes:
    | { iops: number; size_gb: number; throughput_mibps?: number; type: "gp3" }
    | { iops: number; size_gb: number; type: "io2" };
  last_modified_at?: string;
}
export const V1GetDatabaseDiskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    last_modified_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<V1GetDatabaseDiskOutput>;

// The operation
/**
 * Get database disk attributes
 *
 * @param ref - Project ref
 */
export const v1GetDatabaseDisk = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetDatabaseDiskInput,
  outputSchema: V1GetDatabaseDiskOutput,
  errors: [BadRequest, Forbidden] as const,
}));
