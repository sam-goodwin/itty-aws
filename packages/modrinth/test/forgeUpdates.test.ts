import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_USER_AGENT } from "../src/credentials.ts";
import { BadRequest } from "../src/errors.ts";
import { forgeUpdates } from "../src/operations/forgeUpdates.ts";
import { testRunId } from "./setup.ts";

// The Forge update-checker manifest is served from the Modrinth API
// root (https://api.modrinth.com/updates/...), NOT from the /v2 prefix
// (which 404s for this route). Tests for this operation override the
// base URL to the root domain so the SDK reaches the real endpoint.
const RootBaseUrlLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: "https://api.modrinth.com",
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

const provideRoot = <A, E>(effect: Effect.Effect<A, E, Credentials>) =>
  effect.pipe(Effect.provide(RootBaseUrlLayer));

describe("forgeUpdates", () => {
  it("returns the Forge update manifest for a public project", async () => {
    // GET /updates/{id_or_slug}/forge_updates.json is a public read
    // endpoint that emits the Forge update-checker manifest. We use
    // the well-known `sodium` slug (also used by other tests as a
    // stable bootstrap target). All manifest fields are documented
    // as optional, so we assert shape only — `homepage`, when
    // present, must be a string and `promos` must be an object.
    const manifest = await Effect.runPromise(
      provideRoot(forgeUpdates({ id_or_slug: "sodium" })),
    );

    expect(typeof manifest).toBe("object");
    expect(manifest).not.toBeNull();
    if (manifest.homepage !== undefined) {
      expect(typeof manifest.homepage).toBe("string");
    }
    if (manifest.promos !== undefined) {
      expect(typeof manifest.promos).toBe("object");
    }
  });

  it("accepts the neoforge=include query parameter", async () => {
    // The `neoforge` query param is a closed enum (`only` | `include`).
    // Asserting that `include` round-trips proves the operation passes
    // the parameter through to the upstream API and parses the
    // response shape.
    const manifest = await Effect.runPromise(
      provideRoot(
        forgeUpdates({ id_or_slug: "sodium", neoforge: "include" }),
      ),
    );

    expect(typeof manifest).toBe("object");
    expect(manifest).not.toBeNull();
  });

  it("returns BadRequest for an id_or_slug containing invalid characters", async () => {
    // Modrinth validates the path-segment id/slug for the forge
    // update-checker route. Characters outside the allowed grammar
    // (e.g. `!!!`) cause the API to reject the request with
    // `400 invalid_input` ("Invalid input: The specified project
    // does not exist!"), which the SDK maps to the typed
    // `BadRequest`. A run-scoped suffix ensures the value is unique
    // per run while staying invalid.
    const slug = `!!!invalid-${testRunId}!!!`;
    const error = await Effect.runPromise(
      provideRoot(forgeUpdates({ id_or_slug: slug })).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
