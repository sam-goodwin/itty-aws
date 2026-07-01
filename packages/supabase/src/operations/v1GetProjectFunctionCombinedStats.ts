import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectFunctionCombinedStatsInput {
  ref: string;
  interval: "15min" | "1hr" | "3hr" | "1day";
  function_id: string;
}
export const V1GetProjectFunctionCombinedStatsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    interval: Schema.Literals(["15min", "1hr", "3hr", "1day"]),
    function_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/analytics/endpoints/functions.combined-stats",
    }),
  ) as unknown as Schema.Codec<V1GetProjectFunctionCombinedStatsInput>;

// Output Schema
export interface V1GetProjectFunctionCombinedStatsOutput {
  result?: unknown[];
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
export const V1GetProjectFunctionCombinedStatsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<V1GetProjectFunctionCombinedStatsOutput>;

// The operation
/**
 * Gets a project's function combined statistics
 *
 * @param ref - Project ref
 */
export const v1GetProjectFunctionCombinedStats =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1GetProjectFunctionCombinedStatsInput,
    outputSchema: V1GetProjectFunctionCombinedStatsOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
