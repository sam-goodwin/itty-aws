import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectUsageRequestCountInput {
  ref: string;
}
export const V1GetProjectUsageRequestCountInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/analytics/endpoints/usage.api-requests-count",
    }),
  ) as unknown as Schema.Codec<V1GetProjectUsageRequestCountInput>;

// Output Schema
export interface V1GetProjectUsageRequestCountOutput {
  result?: { count: number }[];
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
export const V1GetProjectUsageRequestCountOutput =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(
      Schema.Array(
        Schema.Struct({
          count: Schema.Number,
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
  }) as unknown as Schema.Codec<V1GetProjectUsageRequestCountOutput>;

// The operation
/**
 * Gets project's usage api requests count
 *
 * @param ref - Project ref
 */
export const v1GetProjectUsageRequestCount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: V1GetProjectUsageRequestCountInput,
    outputSchema: V1GetProjectUsageRequestCountOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
