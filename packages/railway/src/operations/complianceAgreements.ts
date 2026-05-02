import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query complianceAgreements($workspaceId: String!) {\n  complianceAgreements(workspaceId: $workspaceId) {\n    hasBAA\n    hasDPA\n  }\n}";

// Input Schema (GraphQL variables)
export const ComplianceAgreementsInput = Schema.Struct({
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "complianceAgreements",
    type: "query",
  }),
);
export type ComplianceAgreementsInput = typeof ComplianceAgreementsInput.Type;

// Output Schema (GraphQL selection set)
export const ComplianceAgreementsOutput = Schema.Struct({
  hasBAA: Schema.Boolean,
  hasDPA: Schema.Boolean,
}).pipe(T.ResponsePath("complianceAgreements"));
export type ComplianceAgreementsOutput = typeof ComplianceAgreementsOutput.Type;

/**
 * Get compliance agreements for a workspace including HIPAA BAA and GDPR DPA status.
 */
export const complianceAgreements = API.make(() => ({
  inputSchema: ComplianceAgreementsInput,
  outputSchema: ComplianceAgreementsOutput,
}));
