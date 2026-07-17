import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1DatabasesByDatabaseIdBackupsInput {
  databaseId: string;
  limit?: number;
}
export const GetV1DatabasesByDatabaseIdBackupsInput =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/databases/{databaseId}/backups" }),
  ) as unknown as Schema.Codec<GetV1DatabasesByDatabaseIdBackupsInput>;

// Output Schema
export interface GetV1DatabasesByDatabaseIdBackupsOutput {
  data: {
    id: string;
    backupType: "full" | "incremental";
    createdAt: string;
    size?: number;
    status: "running" | "completed" | "failed" | "unknown";
    type?: string;
  }[];
  meta: { backupRetentionDays: number };
  pagination: { hasMore: boolean; limit: number | null };
}
export const GetV1DatabasesByDatabaseIdBackupsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        backupType: Schema.Literals(["full", "incremental"]),
        createdAt: Schema.String,
        size: Schema.optional(Schema.Number),
        status: Schema.Literals(["running", "completed", "failed", "unknown"]),
        type: Schema.optional(Schema.String),
      }),
    ),
    meta: Schema.Struct({
      backupRetentionDays: Schema.Number,
    }),
    pagination: Schema.Struct({
      hasMore: Schema.Boolean,
      limit: Schema.NullOr(Schema.Number),
    }),
  }) as unknown as Schema.Codec<GetV1DatabasesByDatabaseIdBackupsOutput>;

// The operation
/**
 * Get list of backups
 *
 * Returns backups for the specified database.
 */
export const getV1DatabasesByDatabaseIdBackups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1DatabasesByDatabaseIdBackupsInput,
    outputSchema: GetV1DatabasesByDatabaseIdBackupsOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
