import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query auditLogEventTypeInfo {\n  auditLogEventTypeInfo {\n    description\n    eventType\n  }\n}";

// Input Schema (GraphQL variables)
export const AuditLogEventTypeInfoInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "auditLogEventTypeInfo",
    type: "query",
  }),
);
export type AuditLogEventTypeInfoInput = typeof AuditLogEventTypeInfoInput.Type;

// Output Schema (GraphQL selection set)
export const AuditLogEventTypeInfoOutput = Schema.Array(
  Schema.Struct({
    description: Schema.String,
    eventType: Schema.String,
  }),
).pipe(T.ResponsePath("auditLogEventTypeInfo"));
export type AuditLogEventTypeInfoOutput =
  typeof AuditLogEventTypeInfoOutput.Type;

/**
 * Get a list of all audit log event types and their description
 */
export const auditLogEventTypeInfo = API.make(() => ({
  inputSchema: AuditLogEventTypeInfoInput,
  outputSchema: AuditLogEventTypeInfoOutput,
}));
