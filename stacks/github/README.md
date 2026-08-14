# stacks/github

An [Alchemy](https://alchemy.run) stack that manages this monorepo's GitHub
repositories: one `alchemy-run/distilled-<name>` repository per directory under
`packages/` (every SDK plus `core`).

Long term these repositories hold per-SDK snapshots, so a consumer can fetch
just the SDK it needs at `--depth=1` instead of cloning the whole monorepo or
its multi-GB spec submodules. For now the stack only creates and converges the
repositories themselves; pushing snapshot content into them is a follow-up.

## How it works

- [`alchemy.run.ts`](./alchemy.run.ts) discovers the package list from
  `packages/*` at deploy time — adding a new SDK package automatically creates
  its repository on the next deploy.
- `GitHub.Repository` converges against the live repository: if the repo
  already exists it is adopted and its settings synced, never duplicated. The
  default removal policy is `retain`, so nothing here can delete a repository.
- State lives in the remote Cloudflare state store (`Cloudflare.state()`) —
  the same store the alchemy monorepo uses — so local and CI deploys converge
  one shared stack instead of each starting from scratch.
- The target org is `vars.DISTILLED_REPOS_OWNER` (repository variable),
  falling back to `alchemy-run` when unset.
- This directory is deliberately **not** a workspace member and has its own
  `bun.lock`: `alchemy` pins an older `effect` beta (`4.0.0-beta.103`) than
  the monorepo's catalog, and a shared workspace install would hoist a single
  incompatible copy of `effect`.

## Deploying

Runs automatically on every push to `main` via
[`.github/workflows/deploy-github-stack.yml`](../../.github/workflows/deploy-github-stack.yml)
(usually a no-op). CI reads `ALCHEMY_GITHUB_TOKEN`, `CLOUDFLARE_API_TOKEN`,
`CLOUDFLARE_ACCOUNT_ID` (secrets) and `DISTILLED_REPOS_OWNER` (variable) —
all provisioned by the credentials stack below, never pasted by hand.

## One-time setup: the credentials stack

[`credentials.run.ts`](./credentials.run.ts) follows the
[CI/CD tutorial](https://alchemy.run/cloudflare/tutorial/part-5/): deployed
once with your own (admin) profile, it mints a Cloudflare API token scoped to
the state-store worker and writes all four CI values into this repo's Actions
configuration.

The only input is the org PAT (GitHub has no API to mint PATs): a
fine-grained PAT owned by the snapshot org, scoped to **All repositories**,
with **Administration: Read and write** (create repos, settings, topics) and
**Contents: Read and write** (push snapshot files). Add **Workflows: Read and
write** if snapshots ever contain `.github/workflows/` files. No organization
permissions are needed. (The workflow's built-in `GITHUB_TOKEN` cannot create
repositories, which is why a PAT is required at all.)

```bash
cd stacks/github
bun alchemy login credentials.run.ts --profile <profile>
DISTILLED_REPOS_PAT=<org PAT> DISTILLED_REPOS_OWNER=<snapshot org> bun alchemy deploy credentials.run.ts --stage prod --profile <profile>
```

Your login needs admin on this repo (to write secrets), `API Tokens: Write`
on the Cloudflare account, and the Cloudflare account must be the one hosting
the shared alchemy state store.

## Deploying the repos stack manually

```bash
cd stacks/github
bun alchemy deploy --stage prod --profile <profile>
```
