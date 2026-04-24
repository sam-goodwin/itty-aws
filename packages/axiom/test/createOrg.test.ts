import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createOrg } from "../src/operations/v2/createOrg";
import { runEffect, testRunId } from "./setup";

describe("createOrg", () => {
  it(
    "creates a new organization and returns the record",
    async () => {
      // NOTE: The axiom SDK does not expose a deleteOrg operation, so this
      // test will leak a real org on every successful run. The testRunId
      // suffix makes the leaked org identifiable for manual cleanup.
      const orgName = `distilled-axiom-createorg-${testRunId}`;

      const org = await runEffect(createOrg({ name: orgName }));

      expect(typeof org.id).toBe("string");
      expect(org.id.length).toBeGreaterThan(0);
      expect(org.name).toBe(orgName);
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
    },
    { timeout: 60_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack org create access",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // authenticated but not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(Credentials, {
        apiKey: Redacted.make(`invalid-token-${testRunId}`),
        apiBaseUrl: "https://api.axiom.co",
      });

      const error = await Effect.runPromise(
        createOrg({
          name: `distilled-axiom-createorg-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
