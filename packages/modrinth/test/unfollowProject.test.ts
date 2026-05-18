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
// user can follow/unfollow.
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

describe("unfollowProject", () => {
  it.skipIf(!HAS_API_KEY)(
    "unfollows a project the caller is currently following",
    async () => {
      // Set up the precondition: ensure the caller is following the project,
      // then call the operation under test (unfollow) and assert it succeeds.
      await runEffect(
        followProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(Effect.ignore),
      );

      await runEffect(unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest when unfollowing a project that is not followed",
    async () => {
      // Make sure we're not following the project, then a second unfollow
      // yields a 400 invalid_input from Modrinth.
      await runEffect(
        unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(Effect.ignore),
      );

      const error = await runEffect(
        unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /project/{slug}/follow requires auth. With a valid known slug
    // Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      unfollowProject({ id_or_slug: TEST_FOLLOW_SLUG }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
