import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query userAuditLogs {\n  userAuditLogs {\n    typeNamesMap {\n      publicName\n      typeName\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UserAuditLogsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "userAuditLogs",
    type: "query",
  }),
);
export type UserAuditLogsInput = typeof UserAuditLogsInput.Type;

// Output Schema (GraphQL selection set)
export const UserAuditLogsOutput = Schema.Struct({
  typeNamesMap: Schema.Array(
    Schema.Struct({
      publicName: Schema.String,
      typeName: Schema.Literals([
        "AccessTokenEntity",
        "DiscordUserEntity",
        "GitHubUserEntity",
        "OAuthIdentityEntity",
        "PartnerProvisionedActorEntity",
        "PasswordEntity",
        "SSOUserEntity",
        "UserEntity",
        "UserPermissionEntity",
        "UserSecondFactorBackupCodesEntity",
        "UserSecondFactorDeviceEntity",
      ]),
    }),
  ),
}).pipe(T.ResponsePath("userAuditLogs"));
export type UserAuditLogsOutput = typeof UserAuditLogsOutput.Type;

/**
 * Top-level query object for querying User Audit Logs.
 */
export const userAuditLogs = API.make(() => ({
  inputSchema: UserAuditLogsInput,
  outputSchema: UserAuditLogsOutput,
}));
