import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoChatUpdateChat($id: ID!, $input: UpdateEchoChatInput!) {\n  echoChat {\n    updateChat(id: $id, input: $input) {\n      agentMetadata\n      agentType\n      echoProject {\n        account {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        createdByActor {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        currentPreviewEchoVersion {\n          buildError\n          buildStatus\n          diffs\n          gitBranch\n          gitCommitHash\n          gitCommitMessage\n          id\n          previewDeployment\n          source\n          turnId\n        }\n        description\n        displayName\n        echoProjectIcon {\n          accentColor\n          createdAt\n          id\n          model\n          prompt\n          source\n          url\n        }\n        githubInfo {\n          accountType\n          branch\n          installationId\n          repoName\n          repoOwner\n          repoUrl\n        }\n        icon {\n          accentColor\n          url\n        }\n        iconGallery {\n          accentColor\n          createdAt\n          id\n          model\n          prompt\n          source\n          url\n        }\n        id\n        images {\n          createdAt\n          id\n          url\n        }\n        initFromGitHubUrl\n        lastMessageAt\n        slug\n        thumbnail {\n          accentColor\n          height\n          url\n          visualHash\n          width\n        }\n        updatedAt\n        visibility\n      }\n      id\n      state\n      stats\n      title\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoChatUpdateChatInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    agentMetadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    agentType: Schema.optional(
      Schema.NullOr(Schema.Literals(["CLAUDE_CODE", "CODEX", "GEMINI"])),
    ),
    state: Schema.optional(
      Schema.NullOr(Schema.Literals(["ACTIVE", "ARCHIVED"])),
    ),
    stats: Schema.optional(Schema.NullOr(Schema.Unknown)),
    title: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoChatUpdateChat",
    type: "mutation",
  }),
);
export type EchoChatUpdateChatInput = typeof EchoChatUpdateChatInput.Type;

// Output Schema (GraphQL selection set)
export const EchoChatUpdateChatOutput = Schema.Struct({
  agentMetadata: Schema.NullOr(Schema.Unknown),
  agentType: Schema.NullOr(Schema.Literals(["CLAUDE_CODE", "CODEX", "GEMINI"])),
  echoProject: Schema.Struct({
    account: Schema.Struct({
      appCount: Schema.Number,
      availableBuilds: Schema.NullOr(Schema.Number),
      createdAt: Schema.String,
      displayName: Schema.NullOr(Schema.String),
      environmentVariableEnvironments: Schema.Array(Schema.Unknown),
      hasBuilds: Schema.Boolean,
      id: Schema.String,
      isCurrent: Schema.Boolean,
      isDisabled: Schema.Boolean,
      isFreeAppDevDomainTier: Schema.Boolean,
      isSSOEnabled: Schema.Boolean,
      lastDeletionAttemptTime: Schema.NullOr(Schema.String),
      name: Schema.String,
      profileImageUrl: Schema.String,
      pushSecurityEnabled: Schema.Boolean,
      requireTwoFactor: Schema.Boolean,
      requiresAccessTokenForPushSecurity: Schema.Boolean,
      ssoAllowedAuthProviders: Schema.Array(
        Schema.Literals([
          "AMAZON_FEDERATE",
          "GENERIC",
          "GOOGLE_WS",
          "MS_ENTRA_ID",
          "OKTA",
          "ONE_LOGIN",
          "STUB_IDP",
        ]),
      ),
      subscriptionChangesPending: Schema.NullOr(Schema.Boolean),
      unlimitedBuilds: Schema.Boolean,
      updatedAt: Schema.String,
      userSpecifiedAccountUsage: Schema.NullOr(
        Schema.Literals(["COMPANY", "PERSONAL"]),
      ),
      willAutoRenewBuilds: Schema.NullOr(Schema.Boolean),
    }),
    createdByActor: Schema.NullOr(
      Schema.Struct({
        created: Schema.String,
        displayName: Schema.String,
        firstName: Schema.NullOr(Schema.String),
        id: Schema.String,
        isExpoAdmin: Schema.Boolean,
        lastDeletionAttemptTime: Schema.NullOr(Schema.String),
      }),
    ),
    currentPreviewEchoVersion: Schema.NullOr(
      Schema.Struct({
        buildError: Schema.NullOr(Schema.String),
        buildStatus: Schema.Literals([
          "BUILDING",
          "FAILED",
          "PENDING",
          "SUCCESS",
        ]),
        diffs: Schema.Unknown,
        gitBranch: Schema.String,
        gitCommitHash: Schema.NullOr(Schema.String),
        gitCommitMessage: Schema.NullOr(Schema.String),
        id: Schema.String,
        previewDeployment: Schema.NullOr(Schema.Unknown),
        source: Schema.Literals(["AGENT", "GITHUB", "MANUAL", "REVERT"]),
        turnId: Schema.NullOr(Schema.String),
      }),
    ),
    description: Schema.NullOr(Schema.String),
    displayName: Schema.NullOr(Schema.String),
    echoProjectIcon: Schema.NullOr(
      Schema.Struct({
        accentColor: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        id: Schema.String,
        model: Schema.NullOr(Schema.String),
        prompt: Schema.NullOr(Schema.String),
        source: Schema.Literals(["AI_GENERATED", "USER_UPLOADED"]),
        url: Schema.String,
      }),
    ),
    githubInfo: Schema.NullOr(
      Schema.Struct({
        accountType: Schema.NullOr(Schema.String),
        branch: Schema.String,
        installationId: Schema.Number,
        repoName: Schema.String,
        repoOwner: Schema.String,
        repoUrl: Schema.String,
      }),
    ),
    icon: Schema.NullOr(
      Schema.Struct({
        accentColor: Schema.NullOr(Schema.String),
        url: Schema.String,
      }),
    ),
    iconGallery: Schema.Array(
      Schema.Struct({
        accentColor: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        id: Schema.String,
        model: Schema.NullOr(Schema.String),
        prompt: Schema.NullOr(Schema.String),
        source: Schema.Literals(["AI_GENERATED", "USER_UPLOADED"]),
        url: Schema.String,
      }),
    ),
    id: Schema.String,
    images: Schema.Array(
      Schema.Struct({
        createdAt: Schema.String,
        id: Schema.String,
        url: Schema.String,
      }),
    ),
    initFromGitHubUrl: Schema.NullOr(Schema.String),
    lastMessageAt: Schema.NullOr(Schema.String),
    slug: Schema.NullOr(Schema.String),
    thumbnail: Schema.NullOr(
      Schema.Struct({
        accentColor: Schema.NullOr(Schema.String),
        height: Schema.NullOr(Schema.Number),
        url: Schema.String,
        visualHash: Schema.NullOr(Schema.String),
        width: Schema.NullOr(Schema.Number),
      }),
    ),
    updatedAt: Schema.String,
    visibility: Schema.Literals(["PRIVATE", "PUBLIC"]),
  }),
  id: Schema.String,
  state: Schema.Literals(["ACTIVE", "ARCHIVED"]),
  stats: Schema.NullOr(Schema.Unknown),
  title: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("echoChat.updateChat"));
export type EchoChatUpdateChatOutput = typeof EchoChatUpdateChatOutput.Type;

export const echoChatUpdateChat = API.make(() => ({
  inputSchema: EchoChatUpdateChatInput,
  outputSchema: EchoChatUpdateChatOutput,
}));
