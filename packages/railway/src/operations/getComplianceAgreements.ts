import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query complianceAgreements($workspaceId: String!) {\n  complianceAgreements(workspaceId: $workspaceId) {\n    hasBAA\n    hasDPA\n  }\n}";

// Input Schema (GraphQL variables)
export const GetComplianceAgreementsInput = Schema.Struct({
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "complianceAgreements",
    type: "query",
  }),
);
export type GetComplianceAgreementsInput =
  typeof GetComplianceAgreementsInput.Type;

// Output Schema (GraphQL selection set)
export const GetComplianceAgreementsOutput = Schema.Struct({
  hasBAA: Schema.Boolean,
  hasDPA: Schema.Boolean,
}).pipe(T.ResponsePath("complianceAgreements"));
export type GetComplianceAgreementsOutput =
  typeof GetComplianceAgreementsOutput.Type;

/**
 * Get compliance agreements for a workspace including HIPAA BAA and GDPR DPA status.
 */
export const getComplianceAgreements = API.make(() => ({
  inputSchema: GetComplianceAgreementsInput,
  outputSchema: GetComplianceAgreementsOutput,
}));
