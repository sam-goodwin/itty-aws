import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_USER_AGENT } from "../src/credentials.ts";
import { NotFound } from "../src/errors.ts";
import { versionList } from "../src/operations/versionList.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that points the SDK at a non-existent path on the real Modrinth
// host. versionList takes no parameters, so the only way to exercise a
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

describe("versionList", () => {
  it("returns the public list of game versions", async () => {
    // GET /tag/game_version is a public, parameterless read endpoint.
    // Modrinth has tracked Minecraft versions for years so we expect a
    // sizable array; we assert the array shape and the documented
    // fields on each entry.
    const versions = await runEffect(versionList({}));

    expect(Array.isArray(versions)).toBe(true);
    expect(versions.length).toBeGreaterThan(0);
    for (const version of versions) {
      expect(typeof version.version).toBe("string");
      expect(["release", "snapshot", "alpha", "beta"]).toContain(
        version.version_type,
      );
      expect(typeof version.date).toBe("string");
      expect(typeof version.major).toBe("boolean");
    }
  });

  it("returns NotFound when the base URL points to a non-existent path", async () => {
    // versionList has no input parameters, so the only deterministic
    // way to provoke a typed error from the SDK is to override the
    // base URL to a path that doesn't exist. Modrinth answers any
    // unknown route with `404 not_found`, which the SDK maps to the
    // typed `NotFound`.
    const error = await Effect.runPromise(
      versionList({}).pipe(Effect.flip, Effect.provide(BogusBaseUrlLayer)),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
