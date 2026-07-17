import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetDiskUtilizationInput {
  ref: string;
}
export const V1GetDiskUtilizationInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/config/disk/util" }),
  ) as unknown as Schema.Codec<V1GetDiskUtilizationInput>;

// Output Schema
export interface V1GetDiskUtilizationOutput {
  timestamp: string;
  metrics: {
    fs_size_bytes: number;
    fs_avail_bytes: number;
    fs_used_bytes: number;
  };
}
export const V1GetDiskUtilizationOutput =
  /*@__PURE__*/ Schema.Struct({
    timestamp: Schema.String,
    metrics: Schema.Struct({
      fs_size_bytes: Schema.Number,
      fs_avail_bytes: Schema.Number,
      fs_used_bytes: Schema.Number,
    }),
  }) as unknown as Schema.Codec<V1GetDiskUtilizationOutput>;

// The operation
/**
 * Get disk utilization
 *
 * @param ref - Project ref
 */
export const v1GetDiskUtilization = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetDiskUtilizationInput,
  outputSchema: V1GetDiskUtilizationOutput,
  errors: [BadRequest, Forbidden] as const,
}));
