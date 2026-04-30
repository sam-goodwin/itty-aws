import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation userAuditLog {\n  userAuditLog\n}";

// Input Schema (GraphQL variables)
export const UserAuditLogInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userAuditLog",
    type: "mutation",
  }),
);
export type UserAuditLogInput = typeof UserAuditLogInput.Type;

// Output Schema (GraphQL selection set)
export const UserAuditLogOutput = Schema.Unknown;
export type UserAuditLogOutput = typeof UserAuditLogOutput.Type;

export const userAuditLog = API.make(() => ({
  inputSchema: UserAuditLogInput,
  outputSchema: UserAuditLogOutput,
}));
