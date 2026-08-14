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
(usually a no-op). The workflow needs:

- `ALCHEMY_GITHUB_TOKEN` (secret) — a fine-grained PAT owned by the snapshot
  org, scoped to **All repositories**, with **Administration: Read and write**
  and **Contents: Read and write** repository permissions (the built-in
  `GITHUB_TOKEN` cannot create repositories, so a PAT is required).
- `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` (secrets) — for the
  Cloudflare account hosting the remote state store.
- `DISTILLED_REPOS_OWNER` (repository variable) — the snapshot org name.

To deploy manually, log in once (`bunx alchemy login`) and:

```bash
cd stacks/github
bun alchemy deploy --stage prod
```
