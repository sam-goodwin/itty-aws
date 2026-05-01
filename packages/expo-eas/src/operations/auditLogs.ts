import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query auditLogs {\n  auditLogs {\n    typeNamesMap {\n      publicName\n      typeName\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AuditLogsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "auditLogs",
    type: "query",
  }),
);
export type AuditLogsInput = typeof AuditLogsInput.Type;

// Output Schema (GraphQL selection set)
export const AuditLogsOutput = Schema.Struct({
  typeNamesMap: Schema.Array(
    Schema.Struct({
      publicName: Schema.String,
      typeName: Schema.Literals([
        "AccountEntity",
        "AccountSSOConfigurationEntity",
        "AndroidAppCredentialsEntity",
        "AndroidKeystoreEntity",
        "AppEntity",
        "AppStoreConnectApiKeyEntity",
        "AppStoreConnectAppEntity",
        "AppleDeviceEntity",
        "AppleDistributionCertificateEntity",
        "AppleProvisioningProfileEntity",
        "AppleTeamEntity",
        "BillingContractEntity",
        "BranchEntity",
        "ChannelEntity",
        "ConvexProjectEntity",
        "ConvexTeamConnectionEntity",
        "CustomerEntity",
        "EchoProjectEntity",
        "EchoVersionEntity",
        "GoogleServiceAccountKeyEntity",
        "IosAppCredentialsEntity",
        "LogRocketOrganizationEntity",
        "LogRocketProjectEntity",
        "UserInvitationEntity",
        "UserPermissionEntity",
        "VexoAccountConnectionEntity",
        "VexoAppEntity",
        "WorkerCustomDomainEntity",
        "WorkerDeploymentAliasEntity",
        "WorkerEntity",
        "WorkflowEntity",
        "WorkflowRevisionEntity",
        "WorkflowScheduleEntity",
      ]),
    }),
  ),
}).pipe(T.ResponsePath("auditLogs"));
export type AuditLogsOutput = typeof AuditLogsOutput.Type;

/**
 * Top-level query object for querying Account Audit Logs.
 */
export const auditLogs = API.make(() => ({
  inputSchema: AuditLogsInput,
  outputSchema: AuditLogsOutput,
}));
