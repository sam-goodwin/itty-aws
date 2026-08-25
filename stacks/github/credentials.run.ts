import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as GitHub from "alchemy/GitHub";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";

/**
 * One-shot credentials stack (deploy manually, NOT from CI).
 *
 * Provisions everything the `deploy-github-stack` workflow needs, following
 * https://alchemy.run/cloudflare/tutorial/part-5/: a scoped Cloudflare API
 * token is minted as code and written straight into this repo's Actions
 * secrets, so no credential is ever created or pasted by hand.
 *
 * Deploy with your own (admin) profile after `bun alchemy login
 * credentials.run.ts --profile <profile>`:
 *
 * ```sh
 * DISTILLED_REPOS_PAT=<org fine-grained PAT> \
 * DISTILLED_REPOS_OWNER=<snapshot org> \
 *   bun alchemy deploy credentials.run.ts --stage prod --profile <profile>
 * ```
 *
 * The org PAT is the one credential that cannot be minted via API (GitHub
 * has no endpoint for creating PATs). It is taken from `DISTILLED_REPOS_PAT`
 * when set, otherwise the profile's own signed-in GitHub token is stored.
 */

/** The repo whose Actions run the deploys — where the secrets live. */
const REPO = { owner: "alchemy-run", repository: "distilled" };

const ReposPat = Config.redacted("DISTILLED_REPOS_PAT").pipe(Config.option);

const ReposOwner = Config.string("DISTILLED_REPOS_OWNER").pipe(
  Config.withDefault("distilled-mirror"),
);

export default Alchemy.Stack(
  "distilled-github-credentials",
  {
    providers: Layer.mergeAll(Cloudflare.providers(), GitHub.providers()),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const { accountId } = yield* yield* Cloudflare.CloudflareEnvironment;

    // Scoped token for CI: just enough for Cloudflare.state() to reach (and,
    // when a new alchemy version ships, upgrade) the state-store worker.
    const stateToken = yield* Cloudflare.ApiToken.AccountApiToken(
      "state-store-token",
      {
        name: "distilled-github-stack-ci",
        accountId,
        policies: [
          {
            effect: "allow",
            permissionGroups: [
              "Workers Scripts Write",
              "Account Settings Write",
            ],
            resources: { [`com.cloudflare.api.account.${accountId}`]: "*" },
          },
        ],
      },
    );

    yield* GitHub.Secret("cf-api-token", {
      ...REPO,
      name: "CLOUDFLARE_API_TOKEN",
      value: stateToken.value,
    });

    yield* GitHub.Secret("cf-account-id", {
      ...REPO,
      name: "CLOUDFLARE_ACCOUNT_ID",
      value: Redacted.make(accountId),
    });

    const patOverride = yield* ReposPat;
    const reposPat = Option.isSome(patOverride)
      ? patOverride.value
      : // Fall back to the profile's signed-in GitHub token — correct when
        // the profile was logged in with the org PAT itself. The cast erases
        // the GitHubCredentials requirement: it is provided at runtime by
        // GitHub.providers() but is not part of the Stack requirement union.
        (yield* yield* GitHub.GitHubCredentials as unknown as Effect.Effect<
          Effect.Effect<{ readonly token: Redacted.Redacted<string> }>
        >).token;

    yield* GitHub.Secret("repos-pat", {
      ...REPO,
      name: "ALCHEMY_GITHUB_TOKEN",
      value: reposPat,
    });

    yield* GitHub.Variable("repos-owner", {
      ...REPO,
      name: "DISTILLED_REPOS_OWNER",
      value: yield* ReposOwner,
    });

    return { accountId, tokenName: stateToken.name };
  }),
);
