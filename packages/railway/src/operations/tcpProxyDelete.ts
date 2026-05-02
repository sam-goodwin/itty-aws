import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation tcpProxyDelete($id: String!) {\n  tcpProxyDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const TcpProxyDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "tcpProxyDelete",
    type: "mutation",
  }),
);
export type TcpProxyDeleteInput = typeof TcpProxyDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const TcpProxyDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("tcpProxyDelete"),
);
export type TcpProxyDeleteOutput = typeof TcpProxyDeleteOutput.Type;

/**
 * Deletes a TCP proxy by id
 */
export const tcpProxyDelete = API.make(() => ({
  inputSchema: TcpProxyDeleteInput,
  outputSchema: TcpProxyDeleteOutput,
}));
