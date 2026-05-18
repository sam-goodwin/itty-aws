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
import { readNotification } from "../src/operations/readNotification.ts";
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

describe("readNotification", () => {
  it.skipIf(!OWNED_USER_ID)(
    "marks an existing notification as read",
    async () => {
      // PATCH /notification/{id} marks the matching notification as read
      // and returns 204. We bootstrap by listing the auth'd user's
      // notifications and patching the first one. The operation is
      // idempotent (re-marking an already-read notification still
      // succeeds) so no rollback is needed; if the inbox is empty we skip
      // the assertion since there is nothing real to mark.
      const id = OWNED_USER_ID as string;
      const inbox = await runEffect(getUserNotifications({ id_or_username: id }));
      if (inbox.length === 0) {
        return;
      }
      const notificationId = inbox[0]!.id;

      // Output schema is Schema.Void; success means no thrown error.
      await runEffect(readNotification({ id: notificationId }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped id that does not exist",
    async () => {
      // With auth and a base62-shaped id Modrinth resolves the route,
      // looks up the notification, and returns 404 when nothing matches.
      // We pad the testRunId to 8 base62 chars so the path validator
      // accepts it and the lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        readNotification({ id }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /notification/{id} requires auth. With a base62-shaped id the
    // path validator passes, the auth check fires next, and Modrinth
    // returns 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      readNotification({ id }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
