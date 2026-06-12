import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  NotAuthorized,
  ProblemProcessingRequest,
  TcpProxyOperationInProgress,
} from "./errors.ts";

const __document =
  "mutation tcpProxyDelete($id: String!) {\n  tcpProxyDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeleteTcpProxyInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "tcpProxyDelete",
    type: "mutation",
  }),
);
export type DeleteTcpProxyInput = typeof DeleteTcpProxyInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteTcpProxyOutput = Schema.Boolean.pipe(
  T.ResponsePath("tcpProxyDelete"),
);
export type DeleteTcpProxyOutput = typeof DeleteTcpProxyOutput.Type;

/**
 * Deletes a TCP proxy by id
 */
export const deleteTcpProxy = API.make(() => ({
  inputSchema: DeleteTcpProxyInput,
  outputSchema: DeleteTcpProxyOutput,
  errors: [
    NotAuthorized,
    ProblemProcessingRequest,
    TcpProxyOperationInProgress,
  ],
}));
