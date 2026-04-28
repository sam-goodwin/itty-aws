# @distilled.cloud/posthog

Effect-native PostHog SDK generated from the [PostHog OpenAPI specification](https://posthog.com/docs/api). Manage feature flags, experiments, insights, dashboards, persons, cohorts, error tracking, surveys, session recordings, and more — with exhaustive error typing.

Operations are grouped by service (matching the spec's tags) and exposed as namespaces from `@distilled.cloud/posthog/Operations`.

## Installation

```bash
npm install @distilled.cloud/posthog effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { FeatureFlags } from "@distilled.cloud/posthog/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/posthog";

const program = Effect.gen(function* () {
  const result = yield* FeatureFlags.featureFlagsList({
    project_id: "12345",
  });
  return result.results;
});

const PosthogLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(PosthogLive), Effect.runPromise);
```

## Configuration

Set the following environment variables:

```bash
POSTHOG_API_KEY=your-personal-api-key
# Optional — defaults to https://us.posthog.com (US Cloud).
# Use https://eu.posthog.com for EU Cloud, or your self-hosted host.
POSTHOG_HOST=https://us.posthog.com
```

Create a Personal API key in the [PostHog dashboard](https://us.posthog.com/settings/user-api-keys) under **Personal API Keys**.

## Error Handling

```typescript
import { Effect } from "effect";
import { FeatureFlags } from "@distilled.cloud/posthog/Operations";

FeatureFlags.featureFlagsRetrieve({
  project_id: "12345",
  id: 999_999,
}).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    Unauthorized: (e) => Effect.fail(new Error(`Auth failed: ${e.message}`)),
    UnknownPosthogError: (e) =>
      Effect.fail(new Error(`Unknown PostHog error: ${e.message}`)),
  }),
);
```

## Services

Operations are exposed as namespaces matching PostHog's API tags. A non-exhaustive list of the major service areas:

- **FeatureFlags** — list, create, update, evaluate, dependent flags, static cohorts
- **Experiments** — list, create, update, results, holdouts, saved metrics
- **Insights** — list, create, update, query, activity, sharing
- **Dashboards** — list, create, update, collaborators, sharing, templates
- **Persons** — list, retrieve, update, merge, properties, related
- **Cohorts** — list, create, update, persons, duplicate
- **Events** — list, retrieve, values
- **Sessions** — list, query, property values
- **SessionRecordings** — list, retrieve, delete, snapshots, sharing, playlists
- **Surveys** — list, create, update, responses, summary
- **ErrorTracking** — issues, fingerprints, releases, suppression rules, symbol sets
- **Annotations** — list, create, update, delete
- **Actions** — list, create, update, delete
- **Organizations** — members, invites, roles, projects, environments
- **Projects** — list, create, update, environments, secret API keys
- **DataWarehouse** — saved queries, tables, external data sources, schemas
- **HogFunctions** — list, create, update, invocations, logs, metrics, schedules
- **LLMAnalytics** — prompts, evaluations, datasets, traces
- **Query** — run HogQL queries, async query results

See `src/operations/index.ts` for the full list of namespaced services.

## License

MIT
