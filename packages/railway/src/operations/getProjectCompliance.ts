import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectCompliance($projectId: String!) {\n  projectCompliance(projectId: $projectId) {\n    memberPermissions {\n      email\n      name\n      role\n    }\n    projectId\n    projectName\n    serviceBackups {\n      schedules\n      serviceId\n      serviceName\n    }\n    twoFactorMembers {\n      email\n      enabledMethods\n      name\n      twoFactorAuthEnabled\n    }\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectComplianceInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectCompliance",
    type: "query",
  }),
);
export type GetProjectComplianceInput = typeof GetProjectComplianceInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectComplianceOutput = Schema.Struct({
  memberPermissions: Schema.Array(
    Schema.Struct({
      email: Schema.String,
      name: Schema.NullOr(Schema.String),
      role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
    }),
  ),
  projectId: Schema.String,
  projectName: Schema.String,
  serviceBackups: Schema.Array(
    Schema.Struct({
      schedules: Schema.Array(Schema.Literals(["DAILY", "MONTHLY", "WEEKLY"])),
      serviceId: Schema.String,
      serviceName: Schema.String,
    }),
  ),
  twoFactorMembers: Schema.Array(
    Schema.Struct({
      email: Schema.String,
      enabledMethods: Schema.Array(
        Schema.Literals(["AUTHENTICATOR", "PASSKEY"]),
      ),
      name: Schema.NullOr(Schema.String),
      twoFactorAuthEnabled: Schema.Boolean,
    }),
  ),
  workspaceId: Schema.String,
}).pipe(T.ResponsePath("projectCompliance"));
export type GetProjectComplianceOutput = typeof GetProjectComplianceOutput.Type;

/**
 * Get comprehensive compliance information for a project including 2FA status, member permissions, backup schedules, and compliance agreements. Requires workspace API token with admin access.
 */
export const getProjectCompliance = API.make(() => ({
  inputSchema: GetProjectComplianceInput,
  outputSchema: GetProjectComplianceOutput,
}));
