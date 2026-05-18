import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { getOpenReports } from "../src/operations/getOpenReports.ts";
import { getReport } from "../src/operations/getReport.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;

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

describe("getReport", () => {
  it.skipIf(!HAS_API_KEY)(
    "fetches a single report belonging to the authenticated user",
    async () => {
      // GET /report/{id} requires auth and returns the matching report.
      // We bootstrap by listing the auth'd user's open reports and using
      // the first id; if the queue is empty we skip the round-trip
      // assertion since there is nothing real to fetch — the listing
      // request itself still exercises the auth path.
      const openReports = await runEffect(getOpenReports({}));
      const seed = openReports.find((r) => r.id !== undefined);
      if (!seed || !seed.id) {
        // No open reports to round-trip — nothing meaningful to assert.
        return;
      }
      const reportId = seed.id;

      const result = await runEffect(getReport({ id: reportId }));

      expect(result.id).toBe(reportId);
      expect(typeof result.report_type).toBe("string");
      expect(typeof result.item_id).toBe("string");
      expect(["project", "user", "version"]).toContain(result.item_type);
      expect(typeof result.body).toBe("string");
      expect(typeof result.reporter).toBe("string");
      expect(typeof result.created).toBe("string");
      expect(typeof result.closed).toBe("boolean");
      expect(typeof result.thread_id).toBe("string");
    },
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key. This 400 is added by
    // patches/001-add-error-responses.patch.json.
    const error = await runEffect(
      getReport({ id: `zz!${testRunId}` }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped id that does not exist",
    async () => {
      // With auth and a base62-shaped id Modrinth resolves the route,
      // looks up the report, and returns 404 when nothing matches.
      // We pad the testRunId so the path validator accepts it and the
      // lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(
        getReport({ id }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /report/{id} requires auth. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      getReport({ id }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
