# spec-mirror-cloudflare

A git mirror of the Cloudflare API reference as markdown — the per-method
pages at `developers.cloudflare.com/api/resources/**/methods/**`.

Cloudflare does not publish a first-party description the generator can
read: `cloudflare/api-schemas` has an OpenAPI document, but
`packages/cloudflare` converts these markdown pages (via `spec-to-smithy.ts`).
The docs host serves a markdown twin of each **method** page at
`<page>/index.md`. Heavier method pages (Workers, DNS, Zero Trust, …) still
return HTML; the fetch script turns their `stldocs-*` markup into the same
markdown dialect. Resource index pages are not mirrored.

The page list is taken from the sidebar of
https://developers.cloudflare.com/api/ — the navigation tree is
server-rendered into that one HTML page. Only paths containing `/methods/`
are downloaded.

Pages that the sidebar stops listing are deleted, so the mirror does not
accumulate dead operations. A run that loses more than 5% of the crawl skips
the prune and says so — a docs host having a bad day must not be able to
empty the corpus.

The mirror is updated every 24 hours and is designed to be used as a stable
git submodule.

## Usage as a submodule

```sh
git submodule add https://github.com/distilled-mirror/spec-mirror-cloudflare.git
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
