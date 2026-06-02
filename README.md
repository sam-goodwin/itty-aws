# Distilled

Effect-native SDKs for cloud providers with exhaustive error typing, retry policies, and streaming pagination.

```typescript
import * as Effect from "effect/Effect"
import * as Stream from "effect/Stream"
import * as Lambda from "@distilled.cloud/aws/lambda"
import * as S3 from "@distilled.cloud/aws/s3"

const bucket = yield* S3.getBucket({
  Bucket: "my-bucket"
}).pipe(
  Effect.catch("NoSuchBucket", () =>
    Effect.void
  )
)

const functions = yield* Lambda.listFunctions
  .items({})
  .pipe(Stream.take(10), Stream.runCollect)
```

## Generating SDKS

To generate an SDK just clone the distilled repo. run bun install then run the create-sdk-full command.

Every SDK has all of its sources as git submodules; you can either supply a git repo or an http url to an openapi (and a repo that updates nightly based on that http url will be generated). It's also reccommended you use --note to specify where the openapi spec is in the repo (agents will struggly to find it on their own). 

e.g. bun scripts/create-sdk-full.ts discord https://github.com/discord/discord-api-spec --note "use the spec is in /specs/openapi.json from the provided repo"

⚠️: this will use your local claude code with Opus 4.7. you must be signed in (highly reccomend max 20x plan since generating an SDK + test suite + nuke script is quite expensive). Please do not try and use other coding agents, or manually prompting you way to an SDK.

For larger SDKs its very likely you hit 5hr limits on claude, you can just run the command again when your limits are refershed and it will skip over what its already done on its own. (or if you want you can force skip over certain steps using cli flags see bun ./scripts/create-sdk-full --help)

## Packages

| Package | Description |
|---------|-------------|
| [`@distilled.cloud/core`](./packages/core) | Shared client, traits, errors, and categories |
| [`@distilled.cloud/aws`](./packages/aws) | AWS SDK from Smithy models (S3, Lambda, DynamoDB, 200+ services) |
| [`@distilled.cloud/cloudflare`](./packages/cloudflare) | Cloudflare SDK (Workers, R2, KV, D1, Queues, DNS) |
| [`@distilled.cloud/coinbase`](./packages/coinbase) | Coinbase CDP SDK (EVM/Solana wallets, swaps, faucets, onramp) |
| [`@distilled.cloud/fly-io`](./packages/fly-io) | Fly.io SDK from OpenAPI spec |
| [`@distilled.cloud/gcp`](./packages/gcp) | GCP SDK from Discovery Documents |
| [`@distilled.cloud/mongodb-atlas`](./packages/mongodb-atlas) | MongoDB Atlas SDK from OpenAPI spec |
| [`@distilled.cloud/neon`](./packages/neon) | Neon serverless Postgres SDK from OpenAPI spec |
| [`@distilled.cloud/planetscale`](./packages/planetscale) | PlanetScale MySQL SDK from OpenAPI spec |
| [`@distilled.cloud/prisma-postgres`](./packages/prisma-postgres) | Prisma Postgres SDK from OpenAPI spec |
| [`@distilled.cloud/stripe`](./packages/stripe) | Stripe SDK from OpenAPI spec |
| [`@distilled.cloud/supabase`](./packages/supabase) | Supabase Management API SDK from OpenAPI spec |
| [`@distilled.cloud/turso`](./packages/turso) | Turso SDK from OpenAPI spec |

## Getting Started

```bash
# Clone the repo (submodules are NOT needed for building or typechecking)
git clone https://github.com/alchemy-run/distilled.git

# Install dependencies
bun install

# Build (core first, then all packages)
bun run build

# Run all tests
bun run test
```

## Git Performance

This repo has 17+ submodules including very large repos (`kubernetes/kubernetes`, `azure-rest-api-specs`, `aws-sdk-js-v3`). Without the settings below, basic git commands will be extremely slow (~11+ seconds for `git status`).

### Global config (once per machine)

**Do NOT set `submodule.recurse=true`.** If it's already set, remove it — it makes every git command recurse into all submodules:

```bash
git config --global --unset submodule.recurse
```

These are fine to keep:

```bash
git config --global fetch.recurseSubmodules on-demand
git config --global push.recurseSubmodules on-demand
```

### Local config (once per clone)

```bash
git config --local diff.ignoreSubmodules dirty
git config --local status.submoduleSummary false
```

The `.gitmodules` file also has `ignore = dirty` on every submodule, so most of this is handled automatically on fresh clones.

### Why `ignore = dirty`?

| Setting | Tracks submodule HEAD changes | Scans submodule working tree |
|---------|------|------|
| `ignore = none` (default) | Yes | Yes (slow) |
| `ignore = dirty` | Yes | No (fast) |
| `ignore = all` | No | No (breaks `git add` after `specs:update`) |

`dirty` skips the expensive working tree scan but still detects when a submodule's committed SHA changes. After `specs:update`, `git status` will show the updated submodule and `git add` / `git commit` work normally.

### Committing submodule updates

After running `bun run specs:update` in a package directory:

```bash
git status                                    # shows submodule as modified
git add packages/{name}/specs/{submodule}
git commit -m "update {name} spec to latest"
```

## Submodules

Vendor API specifications are stored as git submodules under each package's `specs/` directory. They are **not needed for building or typechecking** — only for code generation (`bun run generate`). The exception is `aws`, which also needs submodules for testing. All submodules use `shallow = true` to avoid cloning full histories.

```bash
# Fetch specs for a specific package
bun run specs:fetch    # run inside a package directory

# Update specs to latest upstream
bun run specs:update   # run inside a package directory
```

| Package | Submodules |
|---------|-----------|
| `aws` | `api-models-aws`, `aws-sdk-js-v3`, `smithy`, `smithy-typescript` |
| `cloudflare` | `cloudflare-typescript` |
| `coinbase` | `cdp-sdk` |
| `fly-io` | `distilled-spec-fly-io` |
| `gcp` | `distilled-spec-gcp` |
| `mongodb-atlas` | `distilled-spec-mongodb-atlas` |
| `neon` | `distilled-spec-neon` |
| `planetscale` | `distilled-spec-planetscale` |
| `prisma-postgres` | `distilled-spec-prisma-postgres` |
| `stripe` | `stripe-openapi` |
| `supabase` | `distilled-spec-supabase` |
| `turso` | `turso-docs` |

## Scripts

| Script | Description |
|--------|-------------|
| `bun run build` | Build core, then all packages |
| `bun run typecheck` | Type check all packages |
| `bun run check` | Full check (types + lint + format) |
| `bun run test` | Run all tests |
| `bun run fmt` | Format all packages |
| `bun run lint` | Lint all packages |
| `bun run generate` | Regenerate all SDKs from specs |
| `bun run create-sdk <name> --specs <url>...` | Scaffold a new SDK package |

## Deployment

### Preview Packages

Preview packages are automatically published on every PR and push to `main` via [pkg-pr-new](https://github.com/nicolo-ribaudo/pkg-pr-new) (`.github/workflows/pkg-pr.yml`).

### NPM Releases

To publish a release to npm, manually trigger the **Release NPM Packages** workflow from the [GitHub Actions UI](../../actions/workflows/release.yml):

1. Go to **Actions** → **Release NPM Packages** → **Run workflow**
2. Choose a bump type (`patch` or `minor`) or provide an exact version override
3. The workflow will bump all package versions, commit, tag, create a GitHub release, build, and publish to npm

The release workflow uses npm's OIDC trusted publishing — no npm tokens needed.

### CI

The CI workflow (`.github/workflows/test.yml`) runs typecheck + lint + format + tests for each package that has changed files.

## Contributing

The TDD workflow for discovering and patching missing errors:

1. Write a test that triggers an error
2. Run with `DEBUG=1` to see the raw response
3. Add the error to the patch file (see package READMEs for format)
4. Regenerate: `bun run generate`
5. Import the typed error and handle it

See [AGENTS.md](./AGENTS.md) for detailed development guidelines.
