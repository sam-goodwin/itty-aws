import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getOrgs } from "../src/operations/v2/getOrgs";
import { runEffect, testRunId } from "./setup";

describe("getOrgs", () => {
  it(
    "returns an array of organizations the caller can access",
    async () => {
      const orgs = await runEffect(getOrgs({}));

      expect(Array.isArray(orgs)).toBe(true);
      // The caller must belong to at least one org to have a valid API key.
      expect(orgs.length).toBeGreaterThan(0);

      for (const org of orgs) {
        expect(typeof org.id).toBe("string");
        expect(typeof org.name).toBe("string");
        expect(typeof org.primaryEmail).toBe("string");
        expect([
          "personal",
          "basicDirect",
          "teamMonthlyDirect",
          "teamMonthlyAws",
          "axiomCloud",
          "teamPlus",
          "enterprise",
          "comped",
        ]).toContain(org.plan);
        expect(["na", "failed", "success", "blocked"]).toContain(
          org.paymentStatus,
        );
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack org read access",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // authenticated but not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-token-${testRunId}`),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const error = await Effect.runPromise(
        getOrgs({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
