import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation tunnelsCreateSignedTunnelUrl($accountId: ID!) {\n  tunnels {\n    createSignedTunnelUrl(accountId: $accountId) {\n      label\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const TunnelsCreateSignedTunnelUrlInput = Schema.Struct({
  accountId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "tunnelsCreateSignedTunnelUrl",
    type: "mutation",
  }),
);
export type TunnelsCreateSignedTunnelUrlInput =
  typeof TunnelsCreateSignedTunnelUrlInput.Type;

// Output Schema (GraphQL selection set)
export const TunnelsCreateSignedTunnelUrlOutput = Schema.Struct({
  label: Schema.String,
  url: Schema.String,
}).pipe(T.ResponsePath("tunnels.createSignedTunnelUrl"));
export type TunnelsCreateSignedTunnelUrlOutput =
  typeof TunnelsCreateSignedTunnelUrlOutput.Type;

export const tunnelsCreateSignedTunnelUrl = API.make(() => ({
  inputSchema: TunnelsCreateSignedTunnelUrlInput,
  outputSchema: TunnelsCreateSignedTunnelUrlOutput,
}));
