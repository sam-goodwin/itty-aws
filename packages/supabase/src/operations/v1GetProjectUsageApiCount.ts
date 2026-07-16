import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectUsageApiCountInput {
  ref: string;
  interval?: "15min" | "30min" | "1hr" | "3hr" | "1day" | "3day" | "7day";
}
export const V1GetProjectUsageApiCountInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    interval: Schema.optional(
      Schema.Literals(["15min", "30min", "1hr", "3hr", "1day", "3day", "7day"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/analytics/endpoints/usage.api-counts",
    }),
  ) as unknown as Schema.Codec<V1GetProjectUsageApiCountInput>;

// Output Schema
export interface V1GetProjectUsageApiCountOutput {
  result?: {
    timestamp: string;
    total_auth_requests: number;
    total_realtime_requests: number;
    total_rest_requests: number;
    total_storage_requests: number;
  }[];
  error?:
    | string
    | {
        code: number;
        errors: {
          domain: string;
          location: string;
          locationType: string;
          message: string;
          reason: string;
        }[];
        message: string;
        status: string;
      };
}
export const V1GetProjectUsageApiCountOutput =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(
      Schema.Array(
        Schema.Struct({
          timestamp: Schema.String,
          total_auth_requests: Schema.Number,
          total_realtime_requests: Schema.Number,
          total_rest_requests: Schema.Number,
          total_storage_requests: Schema.Number,
        }),
      ),
    ),
    error: Schema.optional(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          code: Schema.Number,
          errors: Schema.Array(
            Schema.Struct({
              domain: Schema.String,
              location: Schema.String,
              locationType: Schema.String,
              message: Schema.String,
              reason: Schema.String,
            }),
          ),
          message: Schema.String,
          status: Schema.String,
        }),
      ]),
    ),
  }) as unknown as Schema.Codec<V1GetProjectUsageApiCountOutput>;

// The operation
/**
 * Gets project's usage api counts
 *
 * @param ref - Project ref
 */
export const v1GetProjectUsageApiCount = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetProjectUsageApiCountInput,
  outputSchema: V1GetProjectUsageApiCountOutput,
  errors: [BadRequest, Forbidden] as const,
}));
