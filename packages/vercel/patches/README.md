# Vercel OpenAPI patches

RFC-6902 JSON Patches applied to the committed OpenAPI document by `scripts/convert.ts`, **before** smithy conversion (the Neon/PlanetScale dialect — NOT Cloudflare's Smithy dialect).

## Layout (mirrors `cloudflare/patches/{service}/{op}.json`)

```
patches/{service}/{operationId}.patch.json
```

- `{service}` = the distilled service module name (`src/services/{service}.ts`): `projects`, `dns`, `global_config`, `storage`, …
- `{operationId}` = the generated operation the patch targets (`getProject`, `createRecord`, `patchEdgeConfigItems`, …). **One file per operation** — a second fix for the same operation goes into the existing file's `patches` array, not a new file.
- Patches that necessarily span one concept across several new operations (e.g. adding an undocumented path with GET+POST) may use a concept name: `storage/connections.patch.json`. Keep these rare.
- Files apply in sorted relative-path order; a file is `{ "description": string, "patches": RfcOp[] }`. Stale targets warn-and-skip; malformed patches fail the run.
- Flat files at the root still apply (migration tolerance) but must be filed into a service directory before merging.

## Regenerating

```sh
bun run convert && bun scripts/generate.ts --resource {service}
```

Always under the repo's regen lock when agents run concurrently (`mkdir .regen-lock` spin — convert rewrites the shared `.generated-specs/`).
