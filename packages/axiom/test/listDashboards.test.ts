import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { listDashboards } from "../src/operations/v2/listDashboards";
import { runEffect, testRunId } from "./setup";

describe("listDashboards", () => {
  it(
    "returns an array of dashboards",
    async () => {
      const dashboards = await runEffect(listDashboards({}));

      expect(Array.isArray(dashboards)).toBe(true);

      for (const d of dashboards) {
        expect(typeof d.id).toBe("string");
        expect(typeof d.uid).toBe("string");
        expect(typeof d.version).toBe("number");
        expect(typeof d.dashboard).toBe("object");
        expect(typeof d.dashboard.name).toBe("string");
        expect(typeof d.dashboard.owner).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "accepts limit and offset pagination parameters",
    async () => {
      const dashboards = await runEffect(
        listDashboards({ limit: 1, offset: 0 }),
      );

      expect(Array.isArray(dashboards)).toBe(true);
      expect(dashboards.length).toBeLessThanOrEqual(1);
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials are invalid",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-token-${testRunId}`),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const error = await Effect.runPromise(
        listDashboards({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
