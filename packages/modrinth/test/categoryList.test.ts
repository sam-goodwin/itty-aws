import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound } from "../src/errors.ts";
import { categoryList } from "../src/operations/categoryList.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that points the SDK at a non-existent path on the real Modrinth
// host. categoryList takes no parameters, so the only way to exercise
// a SDK-mapped error path is to redirect the base URL to a route that
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

describe("categoryList", () => {
  it("returns the public list of project categories", async () => {
    // GET /tag/category is a public, parameterless read endpoint. Every
    // Modrinth deployment has at least the core categories (e.g. for
    // mods, modpacks, resourcepacks), so we assert the array shape and
    // that each entry carries the four documented string fields.
    const categories = await runEffect(categoryList({}));

    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    for (const category of categories) {
      expect(typeof category.icon).toBe("string");
      expect(typeof category.name).toBe("string");
      expect(typeof category.project_type).toBe("string");
      expect(typeof category.header).toBe("string");
    }
  });

  it("returns NotFound when the base URL points to a non-existent path", async () => {
    // categoryList has no input parameters, so the only deterministic
    // way to provoke a typed error from the SDK is to override the
    // base URL to a path that doesn't exist. Modrinth answers any
    // unknown route with `404 not_found`, which the SDK maps to the
    // typed `NotFound`.
    const error = await Effect.runPromise(
      categoryList({}).pipe(Effect.flip, Effect.provide(BogusBaseUrlLayer)),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
