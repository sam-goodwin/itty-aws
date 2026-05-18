import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { getNotification } from "../src/operations/getNotification.ts";
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

describe("getNotification", () => {
  it.skipIf(!OWNED_USER_ID)(
    "fetches a single notification belonging to the authenticated user",
    async () => {
      // GET /notification/{id} requires auth and returns the matching
      // notification. We bootstrap by listing the auth'd user's
      // notifications and using the first id; if the inbox is empty we
      // skip the assertion since there is nothing real to fetch.
      const id = OWNED_USER_ID as string;
      const inbox = await runEffect(getUserNotifications({ id_or_username: id }));
      if (inbox.length === 0) {
        // No notifications to round-trip — nothing meaningful to assert,
        // but we still confirm the listing request succeeded above.
        return;
      }
      const notificationId = inbox[0]!.id;

      const result = await runEffect(getNotification({ id: notificationId }));

      expect(result.id).toBe(notificationId);
      expect(typeof result.user_id).toBe("string");
      expect(typeof result.title).toBe("string");
      expect(typeof result.text).toBe("string");
      expect(typeof result.link).toBe("string");
      expect(typeof result.read).toBe("boolean");
      expect(typeof result.created).toBe("string");
      expect(Array.isArray(result.actions)).toBe(true);
    },
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key.
    const error = await runEffect(
      getNotification({ id: `zz!${testRunId}` }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped id that does not exist",
    async () => {
      // With auth and a base62-shaped id Modrinth resolves the route,
      // looks up the notification, and returns 404 when nothing matches.
      // We pad the testRunId to 8 base62 chars so the path validator
      // accepts it and the lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        getNotification({ id }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /notification/{id} requires auth. With a base62-shaped id the
    // path validator passes, the auth check fires next, and Modrinth
    // returns 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      getNotification({ id }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
