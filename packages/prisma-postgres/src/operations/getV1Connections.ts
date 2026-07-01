import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1ConnectionsInput {
  cursor?: string;
  limit?: number;
  databaseId?: string;
}
export const GetV1ConnectionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  databaseId: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v1/connections" }),
) as unknown as Schema.Codec<GetV1ConnectionsInput>;

// Output Schema
export interface GetV1ConnectionsOutput {
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
export const GetV1ConnectionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<GetV1ConnectionsOutput>;

// The operation
/**
 * List connections
 *
 * Returns all connections the actor has access to, with optional database filter.
 */
export const getV1Connections = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV1ConnectionsInput,
  outputSchema: GetV1ConnectionsOutput,
}));
