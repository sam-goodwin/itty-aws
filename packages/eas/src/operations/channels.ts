import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query channels {\n  channels\n}";

// Input Schema (GraphQL variables)
export const ChannelsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "channels",
    type: "query",
  }),
);
export type ChannelsInput = typeof ChannelsInput.Type;

// Output Schema (GraphQL selection set)
export const ChannelsOutput = Schema.Unknown;
export type ChannelsOutput = typeof ChannelsOutput.Type;

/**
 * Top-level query object for querying Channels.
 */
export const channels = API.make(() => ({
  inputSchema: ChannelsInput,
  outputSchema: ChannelsOutput,
}));
