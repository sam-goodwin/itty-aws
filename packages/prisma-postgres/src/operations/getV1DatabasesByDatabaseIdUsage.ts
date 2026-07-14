import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1DatabasesByDatabaseIdUsageInput {
  databaseId: string;
  startDate?: string;
  endDate?: string;
}
export const GetV1DatabasesByDatabaseIdUsageInput =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/databases/{databaseId}/usage" }),
  ) as unknown as Schema.Codec<GetV1DatabasesByDatabaseIdUsageInput>;

// Output Schema
export interface GetV1DatabasesByDatabaseIdUsageOutput {
  period: { start: string; end: string };
  metrics: {
    operations: { used: number; unit: string };
    storage: { used: number; unit: string };
  };
  generatedAt: string;
}
export const GetV1DatabasesByDatabaseIdUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    period: Schema.Struct({
      start: Schema.String,
      end: Schema.String,
    }),
    metrics: Schema.Struct({
      operations: Schema.Struct({
        used: Schema.Number,
        unit: Schema.String,
      }),
      storage: Schema.Struct({
        used: Schema.Number,
        unit: Schema.String,
      }),
    }),
    generatedAt: Schema.String,
  }) as unknown as Schema.Codec<GetV1DatabasesByDatabaseIdUsageOutput>;

// The operation
/**
 * Get database usage metrics
 *
 * Returns usage metrics for the specified database.
 */
export const getV1DatabasesByDatabaseIdUsage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1DatabasesByDatabaseIdUsageInput,
    outputSchema: GetV1DatabasesByDatabaseIdUsageOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
