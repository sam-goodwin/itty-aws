import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { Unauthorized } from "../src/errors.ts";
import { getOpenReports } from "../src/operations/getOpenReports.ts";
import { runEffect } from "./setup.ts";

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

describe("getOpenReports", () => {
  it.skipIf(!HAS_API_KEY)(
    "returns the open reports filed by the authenticated user",
    async () => {
      // GET /report lists the auth'd user's open (non-closed) reports. The
      // list may legitimately be empty for accounts that have never filed a
      // report, so we only assert on shape/types of any items returned.
      const reports = await runEffect(getOpenReports({}));

      expect(Array.isArray(reports)).toBe(true);
      for (const r of reports) {
        expect(typeof r.report_type).toBe("string");
        expect(typeof r.item_id).toBe("string");
        expect(["project", "user", "version"]).toContain(r.item_type);
        expect(typeof r.body).toBe("string");
        expect(typeof r.reporter).toBe("string");
        expect(typeof r.created).toBe("string");
        expect(typeof r.closed).toBe("boolean");
        expect(typeof r.thread_id).toBe("string");
        if (r.id !== undefined) {
          expect(typeof r.id).toBe("string");
        }
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "respects the count query parameter",
    async () => {
      // The optional `count` query bounds how many items the server returns.
      // We don't know how many reports the authenticated account has, so the
      // returned array length is `<= count`.
      const reports = await runEffect(getOpenReports({ count: 5 }));

      expect(Array.isArray(reports)).toBe(true);
      expect(reports.length).toBeLessThanOrEqual(5);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /report requires authentication. Modrinth answers any unauth'd
    // (or invalid-token) call with `401 unauthorized "Authentication method
    // was not valid"`, mapped by the SDK to the typed `Unauthorized`.
    const error = await Effect.runPromise(
      getOpenReports({}).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });

  // NotFound note:
  //   The Modrinth spec lists NotFound (404) as a possible response for
  //   GET /report, but the route has no path parameter and no resource
  //   lookup — it always returns the auth'd user's reports as a (possibly
  //   empty) array. Empirically the only non-2xx responses Modrinth emits
  //   for this endpoint are:
  //     - 400 invalid_input  (e.g. count=-1, count=abc, count=999999...)
  //     - 401 unauthorized   (no/empty/invalid Authorization header)
  //   There is no input the typed SDK can produce that surfaces a 404 for
  //   this operation, so the spec-listed NotFound branch is unreachable
  //   through valid SDK usage and intentionally has no test here. (If
  //   Modrinth ever changes the route to require a resource lookup that
  //   can 404, a NotFound test should be added at that time.)
});
