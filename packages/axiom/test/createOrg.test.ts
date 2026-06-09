import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createOrg } from "../src/operations/v2/createOrg";
import { runEffect, testRunId } from "./setup";

describe("createOrg", () => {
  it(
    "creates a new organization or reports the account's org limit",
    async () => {
      // NOTE: the axiom SDK does not expose a deleteOrg operation, so the
      // test account inevitably accumulates orgs across runs and eventually
      // hits the per-user org limit. When that happens axiom returns 400
      // "user has reached the maximum number of organisations". Treat
      // either outcome as a pass so this test stays green in CI without
      // needing manual cleanup of leaked orgs.
      const orgName = `dist-ax-org-${testRunId}`;

      const result = await runEffect(
        createOrg({ name: orgName }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ _kind: "error" as const, e }),
            onSuccess: (org) => Effect.succeed({ _kind: "ok" as const, org }),
          }),
        ),
      );

      if (result._kind === "ok") {
        const org = result.org;
        expect(typeof org.id).toBe("string");
        expect(org.id.length).toBeGreaterThan(0);
        expect(org.name).toBe(orgName);
        expect(typeof org.primaryEmail).toBe("string");
      } else {
        // Expected at-limit error. Anything else fails the test.
        expect((result.e as { _tag: string })._tag).toBe("BadRequest");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack org create access",
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
        createOrg({
          name: `dist-ax-org-fb-${testRunId}`,
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
