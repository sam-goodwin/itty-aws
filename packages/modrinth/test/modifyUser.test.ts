import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { getUser } from "../src/operations/getUser.ts";
import { modifyUser } from "../src/operations/modifyUser.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;

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

describe("modifyUser", () => {
  it.skipIf(!OWNED_USER_ID)(
    "modifies the bio of the authenticated user and restores it",
    async () => {
      // PATCH /user/{id_or_username} returns 204 when the change is accepted.
      // We capture the original bio first and use Effect.ensuring to restore
      // it, so the test mutates a real user safely. The route requires the
      // `username` field in the body even when only changing other fields,
      // so we re-send the current username unchanged.
      const id = OWNED_USER_ID as string;
      const original = await runEffect(getUser({ id_or_username: id }));
      const restoredBio = original.bio ?? "";
      const newBio = `distilled bio ${testRunId}`;

      await runEffect(
        modifyUser({
          id_or_username: id,
          username: original.username,
          bio: newBio,
        }).pipe(
          Effect.ensuring(
            modifyUser({
              id_or_username: id,
              username: original.username,
              bio: restoredBio,
            }).pipe(Effect.ignore),
          ),
        ),
      );

      const updated = await runEffect(getUser({ id_or_username: id }));
      expect(updated.bio).toBe(newBio);
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With auth, a username prefixed with "zz-distilled-" plus testRunId
      // is guaranteed not to collide with any real account, so the route
      // returns 404.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        modifyUser({
          id_or_username: username,
          username,
          bio: `distilled bio ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /user/{id_or_username} requires auth. We target jellysquid3 — a
    // well-known public Modrinth account — so the path resolves and Modrinth
    // reaches the auth check, which returns 401 with no API key.
    const error = await Effect.runPromise(
      modifyUser({
        id_or_username: "jellysquid3",
        username: "jellysquid3",
        bio: `distilled noauth ${testRunId}`,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
