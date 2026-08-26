import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as GitHub from "alchemy/GitHub";
import * as Effect from "effect/Effect";

/**
 * TEMPORARY — delete this file once the teardown below has been run.
 *
 * This stack was called `distilled-github` before it was renamed to
 * `distilled-submodules`. The stack name keys its state, so the rename
 * strands everything the old name owns in the state store: `alchemy.run.ts`
 * now describes a stack the store has never seen, and there is no CLI flag to
 * point `destroy` at a name the code no longer declares.
 *
 * Hence this entrypoint: the old name, the same providers and state store, an
 * empty body. `destroy` ignores what a program declares — it plans the removal
 * of everything recorded under `{name, stage}` — so this tears down the old
 * state exactly as the pre-rename `alchemy.run.ts` would have.
 *
 * ```sh
 * cd stacks/distilled-submodules
 * bun alchemy destroy destroy-legacy.run.ts --stage prod --profile alchemy-prod --yes
 * ```
 *
 * Nothing on GitHub is deleted. `GitHub.Repository` defaults to a `retain`
 * removal policy and this stack never opted into `destroy()`, so the 22 mirror
 * repositories survive; and removing an `Alchemy.Action` drops its persisted
 * state without invoking its body, so no scaffold commit is made or reverted.
 * The specs the mirrors fetched are untouched — they live under `specs/`,
 * which the stack has never written to.
 */
export default Alchemy.Stack(
  "distilled-github",
  {
    providers: GitHub.providers(),
    state: Cloudflare.state(),
  },
  Effect.succeed({}),
);
