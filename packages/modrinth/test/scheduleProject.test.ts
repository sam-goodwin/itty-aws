import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { scheduleProject } from "../src/operations/scheduleProject.ts";
import { runEffect } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// Modrinth requires the project to currently be in `processing` status for
// the schedule route to even exist — for any other status (or unknown slug)
// the API returns 404 regardless of auth state. The happy path AND the
// Unauthorized test therefore both need a project in `processing`.
const SCHEDULABLE_PROJECT_ID = process.env.MODRINTH_TEST_SCHEDULABLE_PROJECT_ID;
const OWNED_PROJECT_ID = process.env.MODRINTH_TEST_OWNED_PROJECT_ID;

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

describe("scheduleProject", () => {
  it.skipIf(!SCHEDULABLE_PROJECT_ID)(
    "schedules a project that is currently processing",
    async () => {
      // POST /project/{slug}/schedule returns 204 when the project is in the
      // `processing` state and the requested status is one of the allowed
      // transitions (e.g. `approved`).
      const projectId = SCHEDULABLE_PROJECT_ID as string;
      await runEffect(
        scheduleProject({
          id_or_slug: projectId,
          time: futureIso(),
          requested_status: "approved",
        }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY || !OWNED_PROJECT_ID)(
    "returns BadRequest when the schedule time is in the past",
    async () => {
      // With auth on an owned project the route reaches body validation;
      // Modrinth rejects past timestamps with a 400 invalid_input.
      const projectId = OWNED_PROJECT_ID as string;
      const error = await runEffect(
        scheduleProject({
          id_or_slug: projectId,
          time: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
          requested_status: "approved",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it.skipIf(!SCHEDULABLE_PROJECT_ID)(
    "returns Unauthorized when no API key is provided",
    async () => {
      // POST /project/{slug}/schedule requires auth. The route only exists
      // for projects in `processing` state, so the project id must point at
      // such a project for the auth check to be reachable.
      const projectId = SCHEDULABLE_PROJECT_ID as string;
      const error = await Effect.runPromise(
        scheduleProject({
          id_or_slug: projectId,
          time: futureIso(),
          requested_status: "approved",
        }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
      );

      expect(error._tag).toBe("Unauthorized");
      expect(error).toBeInstanceOf(Unauthorized);
    },
  );
});
