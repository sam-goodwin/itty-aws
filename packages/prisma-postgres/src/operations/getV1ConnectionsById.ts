import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1ConnectionsByIdInput {
  id: string;
}
export const GetV1ConnectionsByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/connections/{id}" }),
  ) as unknown as Schema.Codec<GetV1ConnectionsByIdInput>;

// Output Schema
export interface GetV1ConnectionsByIdOutput {
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
  };
}
export const GetV1ConnectionsByIdOutput =
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
  }) as unknown as Schema.Codec<GetV1ConnectionsByIdOutput>;

// The operation
/**
 * Get connection
 *
 * Returns the connection with the given ID.
 */
export const getV1ConnectionsById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1ConnectionsByIdInput,
    outputSchema: GetV1ConnectionsByIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
