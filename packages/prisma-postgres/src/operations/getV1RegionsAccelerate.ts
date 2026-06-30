import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1RegionsAccelerateInput {}
export const GetV1RegionsAccelerateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/v1/regions/accelerate" }),
  ) as unknown as Schema.Codec<GetV1RegionsAccelerateInput>;

// Output Schema
export interface GetV1RegionsAccelerateOutput {
  data: { id: string; type: string; name: string }[];
}
export const GetV1RegionsAccelerateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetV1RegionsAccelerateOutput>;

// The operation
/**
 * Get Prisma Accelerate regions
 *
 * Returns all available regions for Prisma Accelerate.
 */
export const getV1RegionsAccelerate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1RegionsAccelerateInput,
    outputSchema: GetV1RegionsAccelerateOutput,
  }),
);
