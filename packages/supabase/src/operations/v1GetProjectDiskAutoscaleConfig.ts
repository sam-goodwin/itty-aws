import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectDiskAutoscaleConfigInput {
  ref: string;
}
export const V1GetProjectDiskAutoscaleConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/config/disk/autoscale" }),
  ) as unknown as Schema.Codec<V1GetProjectDiskAutoscaleConfigInput>;

// Output Schema
export interface V1GetProjectDiskAutoscaleConfigOutput {
  growth_percent: number | null;
  min_increment_gb: number | null;
  max_size_gb: number | null;
}
export const V1GetProjectDiskAutoscaleConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    growth_percent: Schema.NullOr(Schema.Number),
    min_increment_gb: Schema.NullOr(Schema.Number),
    max_size_gb: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<V1GetProjectDiskAutoscaleConfigOutput>;

// The operation
/**
 * Gets project disk autoscale config
 *
 * @param ref - Project ref
 */
export const v1GetProjectDiskAutoscaleConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1GetProjectDiskAutoscaleConfigInput,
    outputSchema: V1GetProjectDiskAutoscaleConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
