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
- State is local (`.alchemy/state`, gitignored). CI runs start from empty
  state, which is safe for this stack because every resource reconciles
  against the live GitHub API.
- This directory is deliberately **not** a workspace member and has its own
  `bun.lock`: `alchemy` pins an older `effect` beta (`4.0.0-beta.103`) than
  the monorepo's catalog, and a shared workspace install would hoist a single
  incompatible copy of `effect`.

## Deploying

Runs automatically on every push to `main` via
[`.github/workflows/deploy-github-stack.yml`](../../.github/workflows/deploy-github-stack.yml)
(usually a no-op). The workflow authenticates with the `ALCHEMY_GITHUB_TOKEN`
repository secret — a PAT with `repo` scope and permission to create
repositories in the `alchemy-run` org (the workflow's built-in `GITHUB_TOKEN`
cannot create repositories, so a PAT is required).

To deploy manually:

```bash
cd stacks/github
GITHUB_ACCESS_TOKEN=<pat> CI=1 bun alchemy deploy --stage prod
```

(Or run `bunx alchemy login` once and drop the env vars.)
