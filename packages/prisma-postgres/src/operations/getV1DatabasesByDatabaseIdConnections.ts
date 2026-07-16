import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1DatabasesByDatabaseIdConnectionsInput {
  databaseId: string;
  cursor?: string;
  limit?: number;
}
export const GetV1DatabasesByDatabaseIdConnectionsInput =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/databases/{databaseId}/connections" }),
  ) as unknown as Schema.Codec<GetV1DatabasesByDatabaseIdConnectionsInput>;

// Output Schema
export interface GetV1DatabasesByDatabaseIdConnectionsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    createdAt: string;
    kind: "postgres" | "accelerate";
    endpoints: {
      direct?: { host: string; port: number };
      pooled?: { host: string; port: number };
      accelerate?: { host: string; port: number };
    };
    directConnection?: { host: string; pass: string; user: string } | null;
    database: { id: string; url: string; name: string };
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1DatabasesByDatabaseIdConnectionsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        name: Schema.String,
        createdAt: Schema.String,
        kind: Schema.Literals(["postgres", "accelerate"]),
        endpoints: Schema.Struct({
          direct: Schema.optional(
            Schema.Struct({
              host: Schema.String,
              port: Schema.Number,
            }),
          ),
          pooled: Schema.optional(
            Schema.Struct({
              host: Schema.String,
              port: Schema.Number,
            }),
          ),
          accelerate: Schema.optional(
            Schema.Struct({
              host: Schema.String,
              port: Schema.Number,
            }),
          ),
        }),
        directConnection: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              host: Schema.String,
              pass: Schema.String,
              user: Schema.String,
            }),
          ),
        ),
        database: Schema.Struct({
          id: Schema.String,
          url: Schema.String,
          name: Schema.String,
        }),
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<GetV1DatabasesByDatabaseIdConnectionsOutput>;

// The operation
/**
 * Get list of database connections
 *
 * Returns all connections for the given database.
 */
export const getV1DatabasesByDatabaseIdConnections =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV1DatabasesByDatabaseIdConnectionsInput,
    outputSchema: GetV1DatabasesByDatabaseIdConnectionsOutput,
    errors: [UnprocessableEntity] as const,
  }));
