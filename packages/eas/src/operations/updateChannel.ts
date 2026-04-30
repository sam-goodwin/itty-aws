import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation updateChannel {\n  updateChannel\n}";

// Input Schema (GraphQL variables)
export const UpdateChannelInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateChannel",
    type: "mutation",
  }),
);
export type UpdateChannelInput = typeof UpdateChannelInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateChannelOutput = Schema.Unknown;
export type UpdateChannelOutput = typeof UpdateChannelOutput.Type;

export const updateChannel = API.make(() => ({
  inputSchema: UpdateChannelInput,
  outputSchema: UpdateChannelOutput,
}));
