# @distilled.cloud/grafana

Effect-native SDK for the structured, self-hosted Grafana API.

## Support boundary

This package targets self-hosted Grafana OSS APIs exposed through the
structured `/apis` API. It generates a service module for every supported API
snapshot listed in `specs/manifest.json`; the snapshots are pinned to Grafana
13.2.0. It has no Cloud or Enterprise-only API dependency.

The generated service barrel is available as `Services`, and each service can
also be imported directly, for example
`@distilled.cloud/grafana/dashboard` or
`@distilled.cloud/grafana/playlist`. The exact operation list is intentionally
derived from the checked-in snapshots, so it stays synchronized with the
specification rather than with a hand-maintained export list.

### Included API groups

| Service module | Grafana group/version | Generated operations |
| --- | --- | ---: |
| `dashboard` | `dashboard.grafana.app/v2` | 8 |
| `folder` | `folder.grafana.app/v1` | 11 |
| `playlist` | `playlist.grafana.app/v1` | 11 |
| `alertingRules` | `rules.alerting.grafana.app/v0alpha1` (experimental) | 31 |
| `alertingNotifications` | `notifications.alerting.grafana.app/v1beta1` (beta) | 48 |

The table is a summary of the pinned snapshots. The generated files and
`services/index.ts` are the source of truth for the exported types and
operation names.

Resource history is part of the stable resource list contract rather than a
separate API group. Use the generated list operation with
`labelSelector: "grafana.app/get-history=true"` and
`fieldSelector: "metadata.name=<resource-name>"`.

### Grafana HTTP API “New” scope

| API | Package decision | Reason |
| --- | --- | --- |
| Dashboard, Folder, Playlist | Included | OSS `/apis` resources, generated and container-tested |
| Alert Rules, Alert Notifications | Included | OSS `/apis` alerting resources, generated and container-tested |
| Resource History | Included | Shared list/get capability, container-tested for supported resources |
| Banners, Secrets Management | Excluded from OSS profile | Not advertised by the pinned OSS image; requires a separate licensed self-hosted profile |
| Alert Enrichment, SLO | Excluded | Grafana Cloud-only |

This matrix covers the documented “New” areas relevant to this package. Alert
enrichment and SLO are Cloud-only and intentionally have no generated exports.
Banners and Secrets Management are not silently represented as working OSS
services: adding them requires a separately pinned self-hosted Enterprise
image, matching snapshots, and a separate E2E profile.

The alerting resource groups are generated from the OSS snapshot and tested when
the local image advertises them. Grafana may change alpha and beta contracts or
gate them behind feature flags, so consumers should treat those modules as
version-pinned experimental integrations.

The legacy `/api` endpoints, Grafana Cloud stack URLs, Cloud-only APIs, Cloud
OAuth flows, and unrelated Grafana plugins are deliberately out of scope.
The runtime rejects a legacy route even if one is accidentally added to a
generated model.

## Quick start

```ts
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import * as Grafana from "@distilled.cloud/grafana";
import * as Dashboard from "@distilled.cloud/grafana/dashboard";

const program = Effect.gen(function* () {
  return yield* Dashboard.getDashboard({
    namespace: "default",
    name: "my-dashboard",
  });
});

program.pipe(
  Effect.provide(
    Layer.mergeAll(
      FetchHttpClient.layer,
      Grafana.fromBasicAuth({
        apiBaseUrl: "http://localhost:3000",
        username: "admin",
        password: "admin",
      }),
    ),
  ),
  Effect.runPromise,
);
```

Generated operations expose the namespace as a typed request field. The
protocol also injects the configured namespace for dynamic callers that omit
it at runtime. Bearer service-account tokens are supported with
`Grafana.fromToken`.

## Generation

The checked-in OpenAPI snapshots in `specs/` are fetched from immutable Grafana
13.2.0 source commit `f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b` and verified by
SHA-256. Conversion produces `.generated-specs/`, and the shared repository
generator produces `src/services/`.

```bash
pnpm --dir packages/grafana run specs:fetch
pnpm --dir packages/grafana run generate
```

Do not edit generated service files by hand. Credentials, protocol, errors,
retry, pagination, and traits are intentionally handwritten because they
encode Grafana-specific runtime behavior.
