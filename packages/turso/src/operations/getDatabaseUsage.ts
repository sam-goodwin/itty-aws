import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface GetDatabaseUsageInput {
  organizationSlug: string;
  databaseName: string;
  from?: string;
  to?: string;
}
export const GetDatabaseUsageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  from: Schema.optional(Schema.String),
  to: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/organizations/{organizationSlug}/databases/{databaseName}/usage",
  }),
) as unknown as Schema.Codec<GetDatabaseUsageInput>;

// Output Schema
export interface GetDatabaseUsageOutput {
  database?: {
    uuid?: string;
    instances?: {
      uuid?: string;
      usage?: {
        rows_read?: number;
        rows_written?: number;
        storage_bytes?: number;
        bytes_synced?: number;
      };
    }[];
    total?: {
      rows_read?: number;
      rows_written?: number;
      storage_bytes?: number;
      bytes_synced?: number;
    };
  };
}
export const GetDatabaseUsageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    database: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              uuid: Schema.optional(Schema.String),
              usage: Schema.optional(
                Schema.Struct({
                  rows_read: Schema.optional(Schema.Number),
                  rows_written: Schema.optional(Schema.Number),
                  storage_bytes: Schema.optional(Schema.Number),
                  bytes_synced: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        total: Schema.optional(
          Schema.Struct({
            rows_read: Schema.optional(Schema.Number),
            rows_written: Schema.optional(Schema.Number),
            storage_bytes: Schema.optional(Schema.Number),
            bytes_synced: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  },
) as unknown as Schema.Codec<GetDatabaseUsageOutput>;

// The operation
/**
 * Retrieve Database Usage
 *
 * Fetch activity usage for a database in a given time period.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 * @param from - The datetime to retrieve usage **from** in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Defaults to the current calendar month if not provided. Example: `2023-01-01T00:00:00Z`
 * @param to - The datetime to retrieve usage **to** in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Defaults to the current calendar month if not provided. Example: `2023-02-01T00:00:00Z`
 */
export const getDatabaseUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseUsageInput,
  outputSchema: GetDatabaseUsageOutput,
  errors: [BadRequest, NotFound] as const,
}));
