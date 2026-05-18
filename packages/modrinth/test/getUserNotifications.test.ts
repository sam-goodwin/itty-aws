import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { getUserNotifications } from "../src/operations/getUserNotifications.ts";
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

describe("getUserNotifications", () => {
  it.skipIf(!OWNED_USER_ID)(
    "returns the notifications of the authenticated user",
    async () => {
      // GET /user/{id_or_username}/notifications requires auth and returns
      // the auth'd user's inbox. The list may legitimately be empty for
      // accounts with no pending notifications, so we only assert on
      // shape/types.
      const id = OWNED_USER_ID as string;
      const notifications = await runEffect(
        getUserNotifications({ id_or_username: id }),
      );

      expect(Array.isArray(notifications)).toBe(true);
      for (const n of notifications) {
        expect(typeof n.id).toBe("string");
        expect(typeof n.user_id).toBe("string");
        expect(typeof n.title).toBe("string");
        expect(typeof n.text).toBe("string");
        expect(typeof n.link).toBe("string");
        expect(typeof n.read).toBe("boolean");
        expect(typeof n.created).toBe("string");
        expect(Array.isArray(n.actions)).toBe(true);
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With auth Modrinth resolves the route, looks up the user, and
      // returns 404 when the username is unknown.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        getUserNotifications({ id_or_username: username }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /user/{id_or_username}/notifications requires auth. Modrinth
    // runs the auth check before any user lookup, so any well-formed
    // username (including the public `jellysquid3` account) yields 401
    // with no API key.
    const error = await Effect.runPromise(
      getUserNotifications({ id_or_username: "jellysquid3" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
