# @distilled.cloud/datadog

Effect-native Datadog SDK, generated from Datadog's official v1 OpenAPI
description.

## Spec source

The generator reads a single file:

```
specs/datadog-api-client-typescript/.generator/schemas/v1/openapi.yaml
```

That file is ~1.6 MB. The repository it lives in,
[DataDog/datadog-api-client-typescript](https://github.com/DataDog/datadog-api-client-typescript),
carries the full generated TypeScript client alongside the schemas, so the
submodule is **sparse-checked-out to the one file we consume**.

### Fetching it

```bash
bun run specs:fetch
```

Run this from `packages/datadog`. It initialises the submodule, narrows it to
the single schema file, and leaves ~1.6 MB on disk.

Note the same footgun as `packages/github`: sparse-checkout config lives in
local git config, so a plain `bun run specs:sync` at the repo root expands
this submodule to the full working tree. Not wrong, just larger than needed —
re-run `specs:fetch` here to narrow it again.

## Coverage

The v1 spec carries ~230 operations across 31 tags. Only allowlisted tags are
converted (see `TAG_ALLOWLIST` in `scripts/convert.ts`), so every generated
operation has a live-tested consumer in alchemy:

- **Monitors** (`src/services/monitors.ts`)
- **Service Level Objectives** (`src/services/service_level_objectives.ts`)

Grow coverage tag-by-tag (Downtimes, Dashboards, Synthetics, …) as resources
are brought up.

## Regenerating

```bash
bun run generate   # convert (OpenAPI → Smithy, patched) + generate (Smithy → SDK)
```

API-mismatch fixes are RFC-6902 patches against the OpenAPI document in
`patches/*.patch.json` — never edits to `src/services/*.ts`.
