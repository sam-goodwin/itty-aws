import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1IntegrationsInput {
  cursor?: string;
  limit?: number;
  workspaceId: string;
}
export const GetV1IntegrationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    workspaceId: Schema.String,
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/integrations" }),
) as unknown as Schema.Codec<GetV1IntegrationsInput>;

// Output Schema
export interface GetV1IntegrationsOutput {
  data: {
    id: string;
    url: string;
    createdAt: string;
    scopes: string[];
    client: { id: string; name: string; createdAt: string };
    createdByUser: { id: string; email: string; displayName: string | null };
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1IntegrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        url: Schema.String,
        createdAt: Schema.String,
        scopes: Schema.Array(Schema.String),
        client: Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          createdAt: Schema.String,
        }),
        createdByUser: Schema.Struct({
          id: Schema.String,
          email: Schema.String,
          displayName: Schema.NullOr(Schema.String),
        }),
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<GetV1IntegrationsOutput>;

// The operation
/**
 * Get list of integrations
 *
 * Returns integrations filtered by workspace ID.
 */
export const getV1Integrations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV1IntegrationsInput,
  outputSchema: GetV1IntegrationsOutput,
}));
