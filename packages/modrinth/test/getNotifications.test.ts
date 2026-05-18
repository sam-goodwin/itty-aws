import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { getNotifications } from "../src/operations/getNotifications.ts";
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

describe("getNotifications", () => {
  it.skipIf(!OWNED_USER_ID)(
    "returns the requested notifications for a list of valid ids",
    async () => {
      // GET /notifications?ids=[...] reads `ids` as a JSON-encoded array
      // and returns the matching notifications. We bootstrap by listing
      // the auth'd user's inbox and round-tripping the first id; if the
      // inbox is empty we still confirm the bulk route accepts an empty
      // array and replies with an empty list.
      const id = OWNED_USER_ID as string;
      const inbox = await runEffect(getUserNotifications({ id_or_username: id }));

      if (inbox.length === 0) {
        const empty = await runEffect(
          getNotifications({ ids: JSON.stringify([]) }),
        );
        expect(Array.isArray(empty)).toBe(true);
        expect(empty.length).toBe(0);
        return;
      }

      const ids = inbox.slice(0, Math.min(2, inbox.length)).map((n) => n.id);
      const notifications = await runEffect(
        getNotifications({ ids: JSON.stringify(ids) }),
      );

      expect(Array.isArray(notifications)).toBe(true);
      expect(notifications.length).toBe(ids.length);
      for (const want of ids) {
        expect(notifications.some((n) => n.id === want)).toBe(true);
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound when none of the requested ids belong to the caller",
    async () => {
      // With auth Modrinth resolves the route, looks up each id, and
      // reports 404 when the bulk request resolves to no matching
      // notifications visible to the caller. We use base62-shaped ids
      // padded with testRunId to guarantee non-collision with real
      // notifications.
      const ids = [`zz${testRunId.slice(0, 6)}`, `yy${testRunId.slice(0, 6)}`];
      const error = await runEffect(
        getNotifications({ ids: JSON.stringify(ids) }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /notifications requires auth. Modrinth runs the auth check
    // before validating the `ids` query, so any well-formed request
    // (even one with an empty ids array) yields 401 with no API key.
    const error = await Effect.runPromise(
      getNotifications({ ids: JSON.stringify([]) }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
