import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1WorkspacesInput {
  cursor?: string;
  limit?: number;
}
export const GetV1WorkspacesInput = /*@__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/v1/workspaces" }),
) as unknown as Schema.Codec<GetV1WorkspacesInput>;

// Output Schema
export interface GetV1WorkspacesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    createdAt: string;
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1WorkspacesOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      name: Schema.String,
      createdAt: Schema.String,
    }),
  ),
  pagination: Schema.Struct({
    nextCursor: Schema.NullOr(Schema.String),
    hasMore: Schema.Boolean,
  }),
}) as unknown as Schema.Codec<GetV1WorkspacesOutput>;

// The operation
/**
 * Get list of workspaces
 *
 * Returns the list of workspaces the current token can access.
 */
export const getV1Workspaces = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1WorkspacesInput,
  outputSchema: GetV1WorkspacesOutput,
}));
