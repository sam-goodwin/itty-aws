import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostV1ConnectionsInput {
  databaseId: string;
  name: string;
}
export const PostV1ConnectionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    databaseId: Schema.String,
    name: Schema.String,
  },
).pipe(
  T.Http({ method: "POST", path: "/v1/connections" }),
) as unknown as Schema.Codec<PostV1ConnectionsInput>;

// Output Schema
export interface PostV1ConnectionsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    createdAt: string;
    kind: "postgres" | "accelerate";
    endpoints: {
      direct?: {
        host: string;
        port: number;
        connectionString: Redacted.Redacted<string>;
      };
      pooled?: {
        host: string;
        port: number;
        connectionString: Redacted.Redacted<string>;
      };
      accelerate?: {
        host: string;
        port: number;
        connectionString: Redacted.Redacted<string>;
      };
    };
    connectionString: Redacted.Redacted<string>;
    directConnection?: { host: string; pass: string; user: string } | null;
    database: { id: string; url: string; name: string };
    host: string | null;
    pass: string | null;
    user: string | null;
  };
}
export const PostV1ConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
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
            connectionString: SensitiveOutputString,
          }),
        ),
        pooled: Schema.optional(
          Schema.Struct({
            host: Schema.String,
            port: Schema.Number,
            connectionString: SensitiveOutputString,
          }),
        ),
        accelerate: Schema.optional(
          Schema.Struct({
            host: Schema.String,
            port: Schema.Number,
            connectionString: SensitiveOutputString,
          }),
        ),
      }),
      connectionString: SensitiveOutputString,
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
      host: Schema.NullOr(Schema.String),
      pass: Schema.NullOr(Schema.String),
      user: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<PostV1ConnectionsOutput>;

// The operation
/**
 * Create connection
 *
 * Creates a new connection for the specified database.
 */
export const postV1Connections = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostV1ConnectionsInput,
  outputSchema: PostV1ConnectionsOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
