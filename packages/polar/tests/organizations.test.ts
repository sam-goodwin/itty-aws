import { describe, expect, it } from "vitest";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { layer } from "../src/credentials.ts";
import { Unauthorized } from "../src/errors.ts";
import { organizationslist } from "../src/operations/organizationslist.ts";
import { hasCredentials, runEffect } from "./setup.ts";

// Live tests hit the Polar API and require a sandbox token
// (`POLAR_ACCESS_TOKEN`, with `POLAR_SERVER=sandbox`). They skip without it.
describe.skipIf(!hasCredentials)("Polar organizations (live)", () => {
  describe("organizationslist", () => {
    it("lists organizations for the token", { timeout: 30_000 }, async () => {
      const result = await runEffect(organizationslist({}));
      expect(result).toBeDefined();
      expect(Array.isArray((result as { items?: unknown[] }).items)).toBe(true);
    });

    it(
      "fails with Unauthorized for a bad token",
      { timeout: 30_000 },
      async () => {
        const badLayer = Layer.merge(
          layer({
            accessToken: "polar_pat_definitely-invalid",
            server: "sandbox",
          }),
          FetchHttpClient.layer,
        );
        const error = await Effect.runPromise(
          organizationslist({}).pipe(
            Effect.provide(badLayer),
            Effect.flip,
          ) as Effect.Effect<unknown, never, never>,
        );
        expect(error).toBeInstanceOf(Unauthorized);
      },
    );
  });
});
