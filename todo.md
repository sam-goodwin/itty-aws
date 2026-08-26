- strict distilled (runtime check for inputs and output)
- benchmarking
  - runtime perf
  - bundle time
  - bundle size
- new website
  - name and shame apis based on how many patches
- logging/otel/debug mode
- unlisted properties
- readme.md
- agents.md
- license.md
- extract cf docs mirror into its own submodule
- fix runaway spec-submodule size — IN PROGRESS (stacks/distilled-submodules)
  - the general problem: `specs:sync` at the repo root is a plain recursive
    `submodule update --init` over every package, so it materialises each
    upstream repo's ENTIRE working tree — even though every generator reads a
    handful of files. github is the worst case (~6.7 GB for one 13 MB file)
    but not the only one: kubernetes/kubernetes (~1.5 GB for one 4.3 MB file),
    Azure/azure-rest-api-specs (338k paths for ~780 documents) and
    aws/api-models-aws are all large checkouts of which we consume a fraction.
  - option 1 (mirror the consumed files into a spec repo) is the one being
    built: `stacks/distilled-submodules` now manages one `distilled-mirror/spec-mirror-<pkg>`
    repository per spec-consuming package, and an Alchemy Action commits the
    exact file set into each — a per-upstream `fetch-specs.ts` plus a daily
    workflow that refetches and commits.
  - REMAINING: rewire `.gitmodules` and each package's `specs:fetch` +
    generator spec paths onto the mirrors, once the mirrors have content.
    That is the step that actually shrinks a clone.
  - cloudflare is blocked, see below.
- cloudflare spec source is broken upstream
  - developers.cloudflare.com migrated to Astro/Starlight and now serves the
    full HTML page at every `<page>/index.md` URL — including the ones its own
    /api/llms.txt still advertises as markdown. So
    `packages/cloudflare/scripts/download-api-docs.ts` no longer downloads
    markdown: a crawl today yields 7.2 GB of HTML instead of ~16 MB of
    markdown, and `packages/cloudflare/specs` is a stale snapshot.
  - `spec-mirror-cloudflare` is therefore managed but unscaffolded.
  - likely fix: move the generator off the docs crawl and onto
    cloudflare/api-schemas, which publishes a real 24 MB openapi.json. That is
    a generator change (spec-to-smithy.ts parses markdown today), not a mirror
    change.
- requested sdks (name — source of the request)
  - xata — distilled#354
  - sentry — alchemy#1003 (review comment r3709110628)
  - spacetimedb — alchemy#1044 (review comment r3710539021)
  - docker — distilled#170
  - meilisearch — distilled#377
  - polar — distilled#373, distilled#236
  - clerk — distilled#317
  - resend — distilled#346
  - turbopuffer — distilled#357
  - better-auth — distilled#372
  - unkey — distilled#323
  - hostinger — distilled#338
  - discord — distilled#276
  - modrinth — distilled#287