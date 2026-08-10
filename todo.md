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
- mirror the github spec into alchemy-run/distilled-spec-github
  - a full checkout of github/rest-api-description is ~6.7 GB (every GHES
    version back to 2.18, plus dereferenced variants, in JSON and YAML); the
    submodule is sparse-checked-out to the one 13 MB file we consume, but
    that config is local, so a fresh repo-root `specs:sync` still expands to
    6.7 GB. A one-file mirror repo — the neon/gcp/supabase pattern — removes
    the footgun.
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