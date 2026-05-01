# @distilled.cloud/expo-eas

Effect-native SDK for [Expo Application Services](https://expo.dev/eas) (EAS), generated from the [eas-cli](https://github.com/expo/eas-cli) GraphQL introspection schema. Drives the same `https://api.expo.dev/graphql` endpoint that powers `eas-cli` — Build, Submit, Update, and Hosting — with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/expo-eas effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { me } from "@distilled.cloud/expo-eas/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/expo-eas";

const program = Effect.gen(function* () {
  const result = yield* me({});
  return result;
});

const EasLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(EasLive), Effect.runPromise);
```

## Configuration

Set the following environment variables:

```bash
EXPO_TOKEN=your-access-token
# Optional: target staging instead of production
EXPO_API_URL=https://staging-api.expo.dev
```

Create an access token in the [Expo dashboard](https://expo.dev/settings/access-tokens). Personal and organization tokens are both supported and are sent as `Authorization: Bearer <token>`.

## Error Handling

EAS returns errors in the GraphQL `errors[]` envelope, each carrying an `extensions.errorCode`. The SDK maps known codes to dedicated tagged classes (`EasUpgradeRequired`, `EasValidationError`, `EasBuildFreeTierLimitExceeded`, …) and falls back to `UnknownEasError` for anything unrecognized.

```typescript
import { Effect } from "effect";
import { build } from "@distilled.cloud/expo-eas/Operations";
import {
  EasBuildFreeTierLimitExceeded,
  EasValidationError,
  UnknownEasError,
} from "@distilled.cloud/expo-eas";

build({}).pipe(
  Effect.catchTags({
    EasBuildFreeTierLimitExceeded: () =>
      Effect.succeed("Free tier exhausted — upgrade or wait for the next reset."),
    EasValidationError: (e) => Effect.fail(new Error(`Invalid input: ${e.message}`)),
    UnknownEasError: (e) => Effect.fail(new Error(`Unknown EAS error: ${e.message}`)),
  }),
);
```

## Services

The EAS GraphQL schema exposes ~140 top-level fields, generated as one operation per Query/Mutation field in `@distilled.cloud/expo-eas/Operations`. Operations group naturally into:

- **Build** — `build`, `builds`, `buildAnnotation`, `buildAnnotations`, `buildPublicData`, `keystoreGenerationUrl`, `localBuild`
- **Submit** — `submission`, `submissions`, `appStoreConnectApiKey`, `appStoreConnectApp`, `ascAppLink`, `googleServiceAccountKey`
- **Update** — `update`, `updates`, `updatesByGroup`, `updateBranch`, `branches`, `updateChannel`, `channels`, `publish`, `publishUpdateGroups`, `runtime`, `runtimes`, `fingerprint`
- **Hosting & Worker** — `deployments`, `customDomain`, `devDomainName`, `convexIntegration`, `convexTeamConnection`
- **Workflows** — `workflowRun`, `workflowRevision`, `workflowJobApproval`, `workflowDeviceTestCaseResult`, `workflowsInsights`
- **Credentials** — `androidAppBuildCredentials`, `androidAppCredentials`, `androidFcm`, `androidKeystore`, `iosAppBuildCredentials`, `iosAppCredentials`, `appleAppIdentifier`, `appleDevice`, `appleDistributionCertificate`, `appleProvisioningProfile`, `applePushKey`, `appleTeam`
- **Account & Project** — `account`, `app`, `appByAppId`, `appVersion`, `accessToken`, `me`, `userInvitation`, `environmentSecret`, `environmentVariable`
- **Webhooks & Integrations** — `webhook`, `githubApp`, `githubAppInstallation`, `githubBuildTrigger`, `githubJobRunTrigger`, `githubRepository`, `sentryInstallation`, `sentryProject`, `logRocketOrganization`, `logRocketProject`

See `src/operations/index.ts` for the full export list.

## License

MIT
