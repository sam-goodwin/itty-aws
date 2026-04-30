import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation auditLog {\n  auditLog\n}";

// Input Schema (GraphQL variables)
export const AuditLogInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "auditLog",
    type: "mutation",
  }),
);
export type AuditLogInput = typeof AuditLogInput.Type;

// Output Schema (GraphQL selection set)
export const AuditLogOutput = Schema.Unknown;
export type AuditLogOutput = typeof AuditLogOutput.Type;

export const auditLog = API.make(() => ({
  inputSchema: AuditLogInput,
  outputSchema: AuditLogOutput,
}));
