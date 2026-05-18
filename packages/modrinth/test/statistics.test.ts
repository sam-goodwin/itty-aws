import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_USER_AGENT } from "../src/credentials.ts";
import { NotFound } from "../src/errors.ts";
import { statistics } from "../src/operations/statistics.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that points the SDK at a non-existent path on the real Modrinth
// host. statistics takes no parameters, so the only way to exercise an
// SDK-mapped error path is to redirect the base URL to a route that
// 404s. This proves the operation's status-code → typed-error mapping
// works on a parameterless GET.
const BogusBaseUrlLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: `https://api.modrinth.com/v2-nonexistent-${testRunId}`,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("statistics", () => {
  it("returns the public Modrinth instance statistics", async () => {
    // GET /statistics is a public, parameterless read endpoint that
    // returns aggregate counts for the running Modrinth instance.
    // All four documented fields are optional, so we only assert the
    // shape — every present field must be a non-negative number.
    const stats = await runEffect(statistics({}));

    expect(typeof stats).toBe("object");
    expect(stats).not.toBeNull();
    if (stats.projects !== undefined) {
      expect(typeof stats.projects).toBe("number");
      expect(stats.projects).toBeGreaterThanOrEqual(0);
    }
    if (stats.versions !== undefined) {
      expect(typeof stats.versions).toBe("number");
      expect(stats.versions).toBeGreaterThanOrEqual(0);
    }
    if (stats.files !== undefined) {
      expect(typeof stats.files).toBe("number");
      expect(stats.files).toBeGreaterThanOrEqual(0);
    }
    if (stats.authors !== undefined) {
      expect(typeof stats.authors).toBe("number");
      expect(stats.authors).toBeGreaterThanOrEqual(0);
    }
  });

  it("returns NotFound when the base URL points to a non-existent path", async () => {
    // statistics has no input parameters, so the only deterministic
    // way to provoke a typed error from the SDK is to override the
    // base URL to a path that doesn't exist. Modrinth answers any
    // unrecognized route with `404 not_found`, which the SDK maps to
    // the typed `NotFound`.
    const error = await Effect.runPromise(
      statistics({}).pipe(Effect.flip, Effect.provide(BogusBaseUrlLayer)),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
