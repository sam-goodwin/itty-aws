import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_USER_AGENT } from "../src/credentials.ts";
import { NotFound } from "../src/errors.ts";
import { sideTypeList } from "../src/operations/sideTypeList.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that points the SDK at a non-existent path on the real Modrinth
// host. sideTypeList takes no parameters, so the only way to exercise a
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

describe("sideTypeList", () => {
  it("returns the public list of side types", async () => {
    // GET /tag/side_type is a public, parameterless read endpoint.
    // Modrinth ships with a baseline set of side types (required,
    // optional, unsupported) so we expect a non-empty array of
    // strings.
    const sideTypes = await runEffect(sideTypeList({}));

    expect(Array.isArray(sideTypes)).toBe(true);
    expect(sideTypes.length).toBeGreaterThan(0);
    for (const sideType of sideTypes) {
      expect(typeof sideType).toBe("string");
      expect(sideType.length).toBeGreaterThan(0);
    }
  });

  it("returns NotFound when the base URL points to a non-existent path", async () => {
    // sideTypeList has no input parameters, so the only deterministic
    // way to provoke a typed error from the SDK is to override the
    // base URL to a path that doesn't exist. Modrinth answers any
    // unrecognized route with `404 not_found`, which the SDK maps to
    // the typed `NotFound`.
    const error = await Effect.runPromise(
      sideTypeList({}).pipe(Effect.flip, Effect.provide(BogusBaseUrlLayer)),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
