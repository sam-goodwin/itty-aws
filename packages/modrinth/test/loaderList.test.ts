import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_USER_AGENT } from "../src/credentials.ts";
import { NotFound } from "../src/errors.ts";
import { loaderList } from "../src/operations/loaderList.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that points the SDK at a non-existent path on the real Modrinth
// host. loaderList takes no parameters, so the only way to exercise a
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

describe("loaderList", () => {
  it("returns the public list of loaders", async () => {
    // GET /tag/loader is a public, parameterless read endpoint. Every
    // Modrinth deployment ships with at least the core loaders (forge,
    // fabric, etc.), so we assert the array shape and that each entry
    // carries the documented fields.
    const loaders = await runEffect(loaderList({}));

    expect(Array.isArray(loaders)).toBe(true);
    expect(loaders.length).toBeGreaterThan(0);
    for (const loader of loaders) {
      expect(typeof loader.icon).toBe("string");
      expect(typeof loader.name).toBe("string");
      expect(Array.isArray(loader.supported_project_types)).toBe(true);
      for (const projectType of loader.supported_project_types) {
        expect(typeof projectType).toBe("string");
      }
    }
  });

  it("returns NotFound when the base URL points to a non-existent path", async () => {
    // loaderList has no input parameters, so the only deterministic
    // way to provoke a typed error from the SDK is to override the
    // base URL to a path that doesn't exist. Modrinth answers any
    // unknown route with `404 not_found`, which the SDK maps to the
    // typed `NotFound`.
    const error = await Effect.runPromise(
      loaderList({}).pipe(Effect.flip, Effect.provide(BogusBaseUrlLayer)),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
