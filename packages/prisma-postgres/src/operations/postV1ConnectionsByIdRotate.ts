import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostV1ConnectionsByIdRotateInput {
  id: string;
}
export const PostV1ConnectionsByIdRotateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/connections/{id}/rotate" }),
  ) as unknown as Schema.Codec<PostV1ConnectionsByIdRotateInput>;

// Output Schema
export interface PostV1ConnectionsByIdRotateOutput {
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
export const PostV1ConnectionsByIdRotateOutput =
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
  }) as unknown as Schema.Codec<PostV1ConnectionsByIdRotateOutput>;

// The operation
/**
 * Rotate connection credentials
 *
 * Generates new credentials for the connection with the given ID. Revocation of the previous credentials is best-effort.
 */
export const postV1ConnectionsByIdRotate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostV1ConnectionsByIdRotateInput,
    outputSchema: PostV1ConnectionsByIdRotateOutput,
    errors: [NotFound] as const,
  }),
);
