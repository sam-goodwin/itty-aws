import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1ProjectsInput {
  cursor?: string;
  limit?: number;
}
export const GetV1ProjectsInput = /*@__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects" }),
) as unknown as Schema.Codec<GetV1ProjectsInput>;

// Output Schema
export interface GetV1ProjectsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    createdAt: string;
    defaultRegion: string | null;
    workspace: { id: string; url: string; name: string };
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1ProjectsOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      name: Schema.String,
      createdAt: Schema.String,
      defaultRegion: Schema.NullOr(Schema.String),
      workspace: Schema.Struct({
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
}) as unknown as Schema.Codec<GetV1ProjectsOutput>;

// The operation
/**
 * Get list of projects
 *
 * Returns the list of projects the token has access to.
 */
export const getV1Projects = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1ProjectsInput,
  outputSchema: GetV1ProjectsOutput,
}));
