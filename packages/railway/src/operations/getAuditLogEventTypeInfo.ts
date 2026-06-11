import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query auditLogEventTypeInfo {\n  auditLogEventTypeInfo {\n    description\n    eventType\n  }\n}";

// Input Schema (GraphQL variables)
export const GetAuditLogEventTypeInfoInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "auditLogEventTypeInfo",
    type: "query",
  }),
);
export type GetAuditLogEventTypeInfoInput =
  typeof GetAuditLogEventTypeInfoInput.Type;

// Output Schema (GraphQL selection set)
export const GetAuditLogEventTypeInfoOutput = Schema.Array(
  Schema.Struct({
    description: Schema.String,
    eventType: Schema.String,
  }),
).pipe(T.ResponsePath("auditLogEventTypeInfo"));
export type GetAuditLogEventTypeInfoOutput =
  typeof GetAuditLogEventTypeInfoOutput.Type;

/**
 * Get a list of all audit log event types and their description
 */
export const getAuditLogEventTypeInfo = API.make(() => ({
  inputSchema: GetAuditLogEventTypeInfoInput,
  outputSchema: GetAuditLogEventTypeInfoOutput,
}));
