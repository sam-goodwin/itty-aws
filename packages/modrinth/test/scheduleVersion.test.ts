import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { scheduleVersion } from "../src/operations/scheduleVersion.ts";
import { runEffect } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// Modrinth's version-schedule route only exists for versions in a state that
// can be scheduled (e.g. `processing`/`scheduled`). For any other state — or
// for unknown ids — the API returns 404 regardless of auth. The happy path
// AND the Unauthorized test therefore both need a schedulable version id.
const SCHEDULABLE_VERSION_ID = process.env.MODRINTH_TEST_SCHEDULABLE_VERSION_ID;
const OWNED_VERSION_ID = process.env.MODRINTH_TEST_OWNED_VERSION_ID;

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

// One hour in the future as ISO 8601 — Modrinth requires the schedule time to
// be strictly in the future.
const futureIso = (): string =>
  new Date(Date.now() + 60 * 60 * 1000).toISOString();

describe("scheduleVersion", () => {
  it.skipIf(!SCHEDULABLE_VERSION_ID)(
    "schedules a version that is currently in a schedulable state",
    async () => {
      // POST /version/{id}/schedule returns 204 when the version is in a
      // schedulable state and the requested status is one of the allowed
      // transitions (e.g. `approved`).
      const id = SCHEDULABLE_VERSION_ID as string;
      await runEffect(
        scheduleVersion({
          id,
          time: futureIso(),
          requested_status: "approved",
        }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY || !OWNED_VERSION_ID)(
    "returns BadRequest when the schedule time is in the past",
    async () => {
      // With auth on an owned version the route reaches body validation;
      // Modrinth rejects past timestamps with a 400 invalid_input.
      const id = OWNED_VERSION_ID as string;
      const error = await runEffect(
        scheduleVersion({
          id,
          time: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
          requested_status: "approved",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it.skipIf(!SCHEDULABLE_VERSION_ID)(
    "returns Unauthorized when no API key is provided",
    async () => {
      // POST /version/{id}/schedule requires auth. The route only exists for
      // schedulable versions, so the version id must point at one for the
      // auth check to be reachable.
      const id = SCHEDULABLE_VERSION_ID as string;
      const error = await Effect.runPromise(
        scheduleVersion({
          id,
          time: futureIso(),
          requested_status: "approved",
        }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
      );

      expect(error._tag).toBe("Unauthorized");
      expect(error).toBeInstanceOf(Unauthorized);
    },
  );
});
