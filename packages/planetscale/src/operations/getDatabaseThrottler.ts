import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetDatabaseThrottlerInput {
  organization: string;
  database: string;
}
export const GetDatabaseThrottlerInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/throttler",
    }),
  ) as unknown as Schema.Codec<GetDatabaseThrottlerInput>;

// Output Schema
export interface GetDatabaseThrottlerOutput {
  keyspaces: string[];
  configurable: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  configurations: { keyspace_name: string; ratio: number }[];
}
export const GetDatabaseThrottlerOutput =
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
  }) as unknown as Schema.Codec<GetDatabaseThrottlerOutput>;

// The operation
/**
 * Get database throttler configurations
 *
 * @param organization - The name of the organization that the throttled deploy requests belong to
 * @param database - The name of the database that the throttled deploy requests belong to
 */
export const getDatabaseThrottler = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseThrottlerInput,
  outputSchema: GetDatabaseThrottlerOutput,
  errors: [Forbidden, NotFound] as const,
}));
