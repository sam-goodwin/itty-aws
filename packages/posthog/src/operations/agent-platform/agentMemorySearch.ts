import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentMemorySearchInput {
  application_id: string;
  project_id: string;
  limit?: number;
  prefix?: string;
  q: string;
}
export const AgentMemorySearchInput = /*@__PURE__*/ Schema.Struct({
  application_id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  prefix: Schema.optional(Schema.String),
  q: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/search/",
  }),
) as unknown as Schema.Codec<AgentMemorySearchInput>;

// Output Schema
export interface AgentMemorySearchOutput {
  cue: string;
  count: number;
  results: {
    path: string;
    description: string;
    tags: string[];
    score: number;
    snippet: string | null;
  }[];
}
export const AgentMemorySearchOutput =
  /*@__PURE__*/ Schema.Struct({
    cue: Schema.String,
    count: Schema.Number,
    results: Schema.Array(
      Schema.Struct({
        path: Schema.String,
        description: Schema.String,
        tags: Schema.Array(Schema.String),
        score: Schema.Number,
        snippet: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AgentMemorySearchOutput>;

// The operation
/**
 * BM25 search across the agent's memory files. Ranks by description+tags+path+body with field weighting.
 *
 * @param limit - Max results (default 10, max 100).
 * @param prefix - Optional path prefix to scope the search.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param q - Search cue — plain natural language is fine.
 */
export const agentMemorySearch = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentMemorySearchInput,
  outputSchema: AgentMemorySearchOutput,
}));
