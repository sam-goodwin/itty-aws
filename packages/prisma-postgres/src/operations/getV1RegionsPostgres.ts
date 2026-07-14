import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1RegionsPostgresInput {}
export const GetV1RegionsPostgresInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/v1/regions/postgres" }),
  ) as unknown as Schema.Codec<GetV1RegionsPostgresInput>;

// Output Schema
export interface GetV1RegionsPostgresOutput {
  data: {
    id: string;
    type: string;
    name: string;
    status: "available" | "unavailable";
  }[];
}
export const GetV1RegionsPostgresOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        name: Schema.String,
        status: Schema.Literals(["available", "unavailable"]),
      }),
    ),
  }) as unknown as Schema.Codec<GetV1RegionsPostgresOutput>;

// The operation
/**
 * Get Prisma Postgres regions
 *
 * Returns all available regions for Prisma Postgres.
 */
export const getV1RegionsPostgres = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1RegionsPostgresInput,
  outputSchema: GetV1RegionsPostgresOutput,
}));
