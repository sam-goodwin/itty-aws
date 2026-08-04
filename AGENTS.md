# AGENTS.md

Guidance for agents working in this repository.

## What this repo is

distilled generates Effect-native SDKs from machine-readable API
descriptions. There is **one compiler** — `@distilled.cloud/core/codegen` —
and every package feeds it a Smithy model. Packages whose upstream ships
OpenAPI convert it to Smithy first (`core/codegen/openapi.ts`); packages
whose upstream ships Smithy (AWS) use it directly.

The consequence that matters most: **almost everything under
`packages/*/src/services/` is generated output.** It is committed so
consumers get it without running codegen, not because it is source.

## Never edit generated files

If a file is emitted by a generator, editing it is always wrong — the next
`bun run generate` silently reverts you, and reviewers can't tell an
intentional change from a stale one.

Generated, do not edit:

- `packages/*/src/services/**` — every service module and the barrel
- `packages/*/.generated-specs/**` — Smithy models converted from OpenAPI
- `packages/aws/src/rules-engine/partitions.json` — copied from the Smithy submodule
- anything with an `AUTO-GENERATED` header

To change generated output, change the thing that produced it:

| You want to change | Edit |
| --- | --- |
| One shape, member, or route in one provider | a patch: `packages/<pkg>/patches/**` |
| The shape of emitted code for all providers | `packages/core/src/codegen/**` |
| One provider's emission rules | `packages/<pkg>/scripts/generate.ts` (its `SdkSpec`) |
| A trait's runtime behaviour | `packages/<pkg>/src/traits.ts`, `protocol.ts` |
| The upstream API surface itself | the spec under `packages/<pkg>/specs/**` |

Then regenerate and commit the result with the change that caused it, so
the diff shows cause and effect together.

### Patches

Patches are RFC-6902 JSON Patch applied to the Smithy model before
generation, under `packages/<pkg>/patches/<resource>/*.json`. Files ending
`.manual.json` apply last. A patch whose target path doesn't exist warns
(the upstream spec moved); a malformed patch fails the run.

Every patch needs a `description` saying **why** — which upstream bug or
undocumented behaviour it compensates for, and how it was verified. A
patch without that is indistinguishable from a mistake six months later.

### Manual specs

When an API has no published machine-readable description at all, write the
model by hand under `packages/<pkg>/manual-specs/<name>.json` and let the
normal pipeline compile it. It is still a model, never a hand-written module.
See `packages/aws/manual-specs/` (classic SimpleDB, which AWS never modelled)
and `packages/cloudflare/manual-specs/` (the Containers API, which Cloudflare
doesn't document). A manual spec that collides with a published model fails
the run rather than shadowing it.

## Adding a new SDK

1. **Find the spec.** OpenAPI/Swagger, Smithy, or a GraphQL schema. This
   decides the size of the job — with a published document you are adding
   config; without one you are transcribing an API by hand.
2. **Vendor it** under `packages/<pkg>/specs/`. For specs we fetch
   ourselves, add `packages/<pkg>/scripts/fetch-specs.ts` and wire it into
   `.github/workflows/update-specs.yml` so it refreshes on a schedule.
   Large third-party spec repos stay git submodules (see below).
3. **Scaffold the package** by copying the closest existing one — `neon` for
   a plain OpenAPI REST API, `mongodb-atlas` for one with per-operation
   protocol quirks, `cloudflare` for an enveloped API. Copy its
   `package.json`, `tsconfig.json`, and `scripts/generate.ts` shape.
4. **Write `scripts/generate.ts`.** It is a `SdkSpec` plus a
   `runGeneratorCli` call. Provider-specific behaviour belongs in the spec
   object, not in edits to `core`.
5. **Write the runtime glue** in `src/`: `credentials.ts`, `protocol.ts`,
   `traits.ts`, `errors.ts`, `retry.ts`. Model these on an existing package;
   protocols share `core/protocol-http.ts` helpers.
6. **Generate, then read the output.** Spot-check that names, optionality,
   and error unions match the API's documentation. Where they don't, add a
   patch with a description rather than editing the output.
7. **Register the package** in the root `tsconfig.json` references, and in
   `.github/workflows/{pr-package,release}.yml` so it publishes.

Match the surrounding code: the packages are deliberately uniform, and an
SDK that invents its own idioms costs more to maintain than it saves.

## Specs

Specs live under `packages/<pkg>/specs/`. Two kinds:

- **Vendored** — checked into this repo, refreshed by
  `.github/workflows/update-specs.yml`, which runs each
  `packages/<pkg>/scripts/fetch-specs.ts` on a schedule and opens a PR. Use
  this for specs we fetch from a published URL.
- **Submodules** — large upstream spec repositories we don't own
  (`aws/api-models-aws`, `Azure/azure-rest-api-specs`, `stripe/openapi`,
  `kubernetes/kubernetes`, …). Cloning them into this repo would add
  hundreds of megabytes, and they are already maintained upstream.

Regenerating after a spec update is a deliberate act — a spec bump and the
regenerated output belong in the same commit, so the diff shows what
upstream actually changed.

## Type checking

`tsconfig.base.json` sets `noCheck: true`. Everyday `tsc -b` and **all
editor IntelliSense** therefore only *emit* the generated SDKs; they do not
type-check them. This is deliberate — checking hundreds of thousands of
generated lines on every keystroke is unusable.

It also means a plain `tsc -b` passing proves nothing about type
correctness. To actually check:

```bash
bun run typecheck:ci   # tsc -b --noCheck false
```

CI runs this on pull requests and again before any release. Run it before
claiming a type change works.

## Conventions

- **Formatting** is oxfmt. `bun run format` writes, `bun run format:check`
  verifies; CI enforces the latter.
- **No `as` casts in hand-written code.** The one sanctioned exception is
  the generator's `as any as <Type>` idiom for schemas whose type the
  compiler can't prove — it appears in *emitted* code, deliberately.
- **Inputs and outputs are never `readonly`.** Generated interfaces use
  `Array<T>`, not `ReadonlyArray<T>`.
- **Enums:** input types are open (`"a" | "b" | (string & {})`), output
  types are closed; the runtime is open in both directions, because
  providers add values without warning.
- **Wire names win.** A TS member is the wire name in camelCase — if the
  API says `cache_options`, the member is `cacheOptions`, not `cache`.
- **Tests** exist per package but do not run in CI right now. If you touch
  runtime behaviour, run the relevant suite locally and say what you ran.

## Before you finish

- `bun run typecheck:ci` and `bun run format:check` both clean.
- Regenerated output committed alongside the change that caused it.
- No edits to generated files that aren't explained by a generator, spec,
  or patch change in the same commit.
