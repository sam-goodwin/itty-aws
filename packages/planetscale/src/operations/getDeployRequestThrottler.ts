import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetDeployRequestThrottlerInput {
  organization: string;
  database: string;
  number: number;
}
export const GetDeployRequestThrottlerInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    number: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/deploy-requests/{number}/throttler",
    }),
  ) as unknown as Schema.Codec<GetDeployRequestThrottlerInput>;

// Output Schema
export interface GetDeployRequestThrottlerOutput {
  keyspaces: ReadonlyArray<string>;
  configurable: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  configurations: ReadonlyArray<{ keyspace_name: string; ratio: number }>;
}
export const GetDeployRequestThrottlerOutput =
  /*@__PURE__*/ Schema.Struct({
    keyspaces: Schema.Array(Schema.String),
    configurable: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
    }),
    configurations: Schema.Array(
      Schema.Struct({
        keyspace_name: Schema.String,
        ratio: Schema.Number,
      }),
    ),
  }) as unknown as Schema.Codec<GetDeployRequestThrottlerOutput>;

// The operation
/**
 * Get deploy request throttler configurations
 *
 * @param organization - The name of the deploy request's organization
 * @param database - The name of the deploy request's database
 * @param number - The number of the deploy request
 */
export const getDeployRequestThrottler = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetDeployRequestThrottlerInput,
  outputSchema: GetDeployRequestThrottlerOutput,
  errors: [Forbidden, NotFound] as const,
}));
