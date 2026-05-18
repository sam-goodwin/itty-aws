import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { followProject } from "../src/operations/followProject.ts";
import { unfollowProject } from "../src/operations/unfollowProject.ts";
import { runEffect } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;

// `sodium` is a public, long-lived Modrinth project that any authenticated
// user can follow.
const TEST_FOLLOW_SLUG = "sodium";

// Layer with no API key so we can deterministically trigger 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("followProject", () => {
  it.skipIf(!HAS_API_KEY)("follows a public project", async () => {
    // POST /project/{slug}/follow returns 204 when the caller starts following
    // the project. We unfollow afterwards so the test is self-contained and
    // re-runnable without leaving the account in a "following" state.
    await runEffect(
      // First make sure we're not already following from a previous run; the
      // unfollow is best-effort and ignored on errors.
      unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(Effect.ignore),
    );

    await runEffect(
      followProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(
        Effect.ensuring(
          unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest when following a project that is already followed",
    async () => {
      // The first follow succeeds; a second follow without an unfollow in
      // between yields a 400 invalid_input from Modrinth.
      await runEffect(
        followProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(Effect.ignore),
      );

      const error = await runEffect(
        followProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(
          Effect.flip,
          Effect.ensuring(
            unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(
              Effect.ignore,
            ),
          ),
        ),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /project/{slug}/follow requires auth. With a valid known slug
    // Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      followProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
