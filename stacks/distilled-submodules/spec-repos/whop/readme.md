# spec-mirror-whop

A git mirror of Whop's two OpenAPI descriptions:

| surface | document | reference |
| --- | --- | --- |
| versioned | [`api-v1-native.json`](https://docs.whop.com/openapi/api-v1-native.json) | <https://docs.whop.com/api-reference/beta/overview> |
| legacy | [`api-v1-stable.json`](https://docs.whop.com/openapi/api-v1-stable.json) | <https://docs.whop.com/developer/api/getting-started> |

Whop documents one HTTP API through two reference sites, each with its own
document, and neither is a superset of the other — so both are mirrored and the
generator merges them, versioned winning every route both describe.

Both documents are stamped with the same `info.x-api-version-date`, which is
what the generated SDK pins every request to. The fetch script fails if that
ever stops being true, since a merged client can send only one pin.

The prose reference pages that `packages/whop/scripts/download-api-docs.ts`
saves are deliberately **not** mirrored here: the generator never reads them, so
they are not spec input.

The mirror is updated every 24 hours and is designed to be used as a stable git submodule.

## Usage as a submodule

```sh
git submodule add https://github.com/distilled-mirror/spec-mirror-whop.git
```

## Updating specs

From `.meta/`:

```sh
bun install
bun run fetch-specs
```

---

This repository is managed by the `distilled-submodules` Alchemy stack in
[alchemy-run/distilled](https://github.com/alchemy-run/distilled) (`stacks/distilled-submodules`).
Its scaffolding is generated — edit it there, not here.
