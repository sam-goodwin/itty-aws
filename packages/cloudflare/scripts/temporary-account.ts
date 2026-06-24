#!/usr/bin/env bun
/**
 * Provision a Cloudflare *temporary preview account*.
 *
 * Backs the same public, proof-of-work-gated flow as `wrangler deploy
 * --temporary` (see https://blog.cloudflare.com/temporary-accounts/ and
 * workers-sdk/packages/workers-auth/src/temporary.ts). No Cloudflare login is
 * required: the endpoints are public and gated only by a proof-of-work
 * challenge to deter abuse.
 *
 *   1. POST /provisioning/previews/challenge  -> mint a PoW challenge
 *   2. solve the challenge locally (sequential SHA-256 chain)
 *   3. POST /provisioning/previews            -> redeem the solution
 *
 * The result is a short-lived (~60 min) account-scoped API token you can hand
 * to wrangler / the Cloudflare SDK, plus a claim URL a human can visit to
 * convert the temporary account into a permanent one.
 *
 * Usage:
 *   bun packages/cloudflare/scripts/temporary-account.ts
 *
 * Or import { provisionTemporaryAccount } and run it inside your own Effect
 * program (it requires a `Credentials` + `HttpClient` layer).
 */
import { createHash } from "node:crypto";
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";

import { fromApiToken } from "../src/credentials.ts";
import * as Provisioning from "../src/services/provisioning.ts";

// Cloudflare's terms the caller accepts by provisioning a temporary account.
const TERMS = {
  termsOfService: "https://www.cloudflare.com/terms/",
  privacyPolicy: "https://www.cloudflare.com/privacypolicy/",
} as const;

// Upper bound on total proof-of-work (k*g hashes). Mirrors the cap wrangler
// enforces so a buggy/hostile challenge can't make us spin forever.
const POW_MAX_ITERATIONS = 64_000_000;

/** Usable credentials for a freshly provisioned temporary account. */
export interface TemporaryAccountCredentials {
  /** The temporary account's ID. */
  readonly accountId: string;
  /** The temporary account's display name. */
  readonly accountName: string;
  /** Account-scoped API token (use as `CLOUDFLARE_API_TOKEN`). Revealed, not redacted. */
  readonly apiToken: string;
  /** ISO 8601 timestamp at which the account + token expire. */
  readonly expiresAt: string;
  /** URL a human can visit to claim the account and make it permanent. */
  readonly claimUrl: string;
  /** ISO 8601 timestamp at which the claim opportunity expires. */
  readonly claimExpiresAt: string;
}

// The SDK decodes sensitive fields to `Redacted<string>` at runtime even though
// the static type is `string`. Reveal it so the token is actually usable.
const reveal = (value: string): string =>
  Redacted.isRedacted(value) ? Redacted.value(value) : value;

/**
 * Solve a proof-of-work challenge: a sequential SHA-256 chain of `k` segments
 * of `g` hashes each, recording a checkpoint at every segment boundary. Returns
 * the standard-base64 encoding of the concatenated checkpoints, ready to send
 * as the `solution.checkpoints`. Ported from workers-sdk's `solvePow`.
 */
const solveChallenge = (seedBase64Url: string, k: number, g: number) =>
  Effect.sync(() => {
    const seed = Buffer.from(seedBase64Url, "base64url");
    const checkpoints: Buffer[] = Array.from({ length: k + 1 });
    let h = createHash("sha256").update(seed).digest();
    checkpoints[0] = h;
    for (let j = 0; j < k; j++) {
      for (let i = 0; i < g; i++) {
        h = createHash("sha256").update(h).digest();
      }
      checkpoints[j + 1] = h;
    }
    return Buffer.concat(checkpoints).toString("base64");
  });

/**
 * Provision a temporary preview account and return usable credentials.
 *
 * Requires a `Credentials` + `HttpClient` layer in context. The endpoints are
 * public, so the credentials are only a placeholder — any token works (the CLI
 * entry below provides a dummy one).
 */
export const provisionTemporaryAccount = Effect.gen(function* () {
  const challenge = yield* Provisioning.createTemporaryAccountChallenge({});

  // Refuse a malformed or unreasonably hard challenge rather than hanging.
  const seedBytes = Buffer.from(challenge.seed, "base64url").length;
  if (
    !Number.isInteger(challenge.k) ||
    !Number.isInteger(challenge.g) ||
    challenge.k <= 0 ||
    challenge.g <= 0 ||
    challenge.k * challenge.g > POW_MAX_ITERATIONS ||
    seedBytes !== 32
  ) {
    return yield* Effect.die(
      new Error(
        `Unsupported proof-of-work challenge (k=${challenge.k}, g=${challenge.g}, seed=${seedBytes}B)`,
      ),
    );
  }

  const checkpoints = yield* solveChallenge(
    challenge.seed,
    challenge.k,
    challenge.g,
  );

  const result = yield* Provisioning.createTemporaryAccount({
    termsOfService: TERMS.termsOfService,
    privacyPolicy: TERMS.privacyPolicy,
    acceptTermsOfService: "yes",
    challengeToken: challenge.challengeToken,
    solution: { checkpoints },
  });

  return {
    accountId: result.account.id,
    accountName: result.account.name,
    apiToken: reveal(result.account.apiToken),
    expiresAt: result.account.expiresAt,
    claimUrl: result.claim.url,
    claimExpiresAt: result.claim.expiresAt,
  } satisfies TemporaryAccountCredentials;
});

// ============================================================================
// CLI entry point
// ============================================================================

const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const CYAN = "\x1b[36m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

const main = Effect.gen(function* () {
  yield* Console.log(
    `${DIM}Provisioning a temporary Cloudflare account (solving proof-of-work)…${RESET}`,
  );

  const creds = yield* provisionTemporaryAccount;

  yield* Console.log(
    `\n${GREEN}${BOLD}✓ Temporary account provisioned${RESET}`,
  );
  yield* Console.log(`  ${BOLD}Account ID:${RESET}   ${creds.accountId}`);
  yield* Console.log(`  ${BOLD}Account name:${RESET} ${creds.accountName}`);
  yield* Console.log(`  ${BOLD}Expires at:${RESET}   ${creds.expiresAt}`);
  yield* Console.log(
    `  ${BOLD}Claim URL:${RESET}    ${CYAN}${creds.claimUrl}${RESET} ${DIM}(expires ${creds.claimExpiresAt})${RESET}`,
  );

  yield* Console.log(`\n${BOLD}Use it:${RESET}`);
  yield* Console.log(
    `${DIM}# export these, then run wrangler / the Cloudflare SDK against the temporary account${RESET}`,
  );
  yield* Console.log(`export CLOUDFLARE_ACCOUNT_ID=${creds.accountId}`);
  yield* Console.log(`export CLOUDFLARE_API_TOKEN=${creds.apiToken}`);
}).pipe(
  // Public endpoints ignore auth, but the SDK client always attaches a Bearer
  // token — provide a placeholder (or a real token via CLOUDFLARE_API_TOKEN).
  Effect.provide(
    fromApiToken({
      apiToken: process.env.CLOUDFLARE_API_TOKEN ?? "unauthenticated",
      apiBaseUrl: process.env.CLOUDFLARE_API_BASE_URL,
    }),
  ),
  Effect.provide(FetchHttpClient.layer),
);

if (import.meta.main) {
  BunRuntime.runMain(Effect.provide(main, BunServices.layer));
}
