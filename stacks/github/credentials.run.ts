import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as GitHub from "alchemy/GitHub";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
 * has no endpoint for creating PATs), so it is passed in via
 * `DISTILLED_REPOS_PAT` and stored as a secret like everything else.
 */

/** The repo whose Actions run the deploys — where the secrets live. */
const REPO = { owner: "alchemy-run", repository: "distilled" };

const ReposPat = Config.redacted("DISTILLED_REPOS_PAT");

const ReposOwner = Config.string("DISTILLED_REPOS_OWNER").pipe(
  Config.withDefault("alchemy-run"),
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

    yield* GitHub.Secret("repos-pat", {
      ...REPO,
      name: "ALCHEMY_GITHUB_TOKEN",
      value: yield* ReposPat,
    });

    yield* GitHub.Variable("repos-owner", {
      ...REPO,
      name: "DISTILLED_REPOS_OWNER",
      value: yield* ReposOwner,
    });

    return { accountId, tokenName: stateToken.name };
  }),
);
