import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, canManageApps } from "./test";
import { AppsList } from "../src/operations/AppsList";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("AppsList", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    it("happy path - lists apps for personal org", async (ctx) => {
    if (skipApps) return ctx.skip();
    const result = await runEffect(
      AppsList({ org_slug: "personal" }),
    );
    expect(result).toHaveProperty("apps");
    expect(Array.isArray(result.apps)).toBe(true);
  }, 30_000);

  it("happy path - returns total_apps count", async (ctx) => {
    if (skipApps) return ctx.skip();
    const result = await runEffect(
      AppsList({ org_slug: "personal" }),
    );
    expect(result).toHaveProperty("total_apps");
    expect(typeof result.total_apps).toBe("number");
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      AppsList({ org_slug: "personal" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
