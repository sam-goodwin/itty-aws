# @distilled.cloud/modrinth

Effect-native Modrinth SDK generated from the [Modrinth OpenAPI specification](https://docs.modrinth.com/openapi.yaml). Browse, create, and manage projects, versions, users, teams, threads, and notifications on the Modrinth platform with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/modrinth effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { searchProjects } from "@distilled.cloud/modrinth/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/modrinth";

const program = Effect.gen(function* () {
  const results = yield* searchProjects({
    query: "fabric api",
    limit: 10,
  });
  return results.hits;
});

const ModrinthLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(ModrinthLive), Effect.runPromise);
```

## Configuration

```bash
# Optional — required only for endpoints that create/modify data or access
# private resources. Most read endpoints work without a token.
MODRINTH_API_KEY=mrp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Strongly recommended — Modrinth requires a uniquely-identifying User-Agent
# header and may throttle traffic that only identifies the HTTP client.
# Format: <github_username>/<project_name>/<version> (<contact>)
MODRINTH_USER_AGENT="my-org/my-app/1.0.0 (contact@example.com)"

# Optional — defaults to https://api.modrinth.com/v2.
# Use https://staging-api.modrinth.com/v2 to target the staging environment.
MODRINTH_API_BASE_URL=https://api.modrinth.com/v2
```

Personal access tokens are generated in [Modrinth account settings](https://modrinth.com/settings/account). Tokens are sent verbatim in the `Authorization` header (no `Bearer ` prefix) and are scoped — see the [scopes list](https://github.com/modrinth/labrinth/blob/master/src/models/pats.rs) for details.

## Error Handling

```typescript
import { getProject } from "@distilled.cloud/modrinth/Operations";
import { Effect } from "effect";

getProject({ "id|slug": "missing-project" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    Unauthorized: (e) => Effect.fail(new Error(`Auth: ${e.message}`)),
    UnknownModrinthError: (e) => Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

- **Projects** — `searchProjects`, `getProject`, `getProjects`, `createProject`, `modifyProject`, `deleteProject`, `randomProjects`, `checkProjectValidity`, `changeProjectIcon`, `deleteProjectIcon`, `addGalleryImage`, `modifyGalleryImage`, `deleteGalleryImage`, `getDependencies`, `followProject`, `unfollowProject`, `scheduleProject`
- **Versions** — `getProjectVersions`, `getVersion`, `getVersions`, `createVersion`, `modifyVersion`, `deleteVersion`, `scheduleVersion`, `getVersionFromIdOrNumber`, `addFilesToVersion`, `versionFromHash`, `versionsFromHashes`, `deleteFileFromHash`, `getLatestVersionFromHash`, `getLatestVersionsFromHashes`
- **Users** — `getUser`, `getUsers`, `getUserFromAuth`, `modifyUser`, `changeUserIcon`, `deleteUserIcon`, `getUserProjects`, `getFollowedProjects`, `getPayoutHistory`, `withdrawPayout`
- **Notifications** — `getUserNotifications`, `getNotification`, `getNotifications`, `readNotification`, `readNotifications`, `deleteNotification`, `deleteNotifications`
- **Teams** — `getProjectTeamMembers`, `getTeamMembers`, `getTeams`, `addTeamMember`, `joinTeam`, `modifyTeamMember`, `deleteTeamMember`, `transferTeamOwnership`
- **Threads & Reports** — `getThread`, `getThreads`, `sendThreadMessage`, `deleteThreadMessage`, `submitReport`, `getReport`, `getReports`, `getOpenReports`, `modifyReport`
- **Tags** — `categoryList`, `loaderList`, `versionList`, `licenseText`, `donationPlatformList`, `reportTypeList`, `projectTypeList`, `sideTypeList`
- **Misc** — `forgeUpdates`, `statistics`

## License

MIT
