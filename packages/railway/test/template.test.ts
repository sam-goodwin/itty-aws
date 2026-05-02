import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { template } from "../src/operations/template.ts";
import { templates } from "../src/operations/templates.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_CODE = "distilled-nonexistent-template-code-deadbeef";

describe("template", () => {
  it("happy path - returns template details for a real template code", async () => {
    await runEffect(
      Effect.gen(function* () {
        const page = yield* templates({ first: 1, verified: true });
        const code = page.edges[0]?.node.code;
        if (!code) {
          // No templates available; nothing to query.
          return;
        }

        const result = yield* template({ code });

        expect(result).toBeDefined();
        expect(result.code).toBe(code);
        expect(typeof result.id).toBe("string");
        expect(typeof result.name).toBe("string");
        expect(typeof result.createdAt).toBe("string");
        expect(typeof result.activeProjects).toBe("number");
        expect(typeof result.projects).toBe("number");
        expect(typeof result.recentProjects).toBe("number");
        expect(typeof result.totalPayout).toBe("number");
        expect(typeof result.isApproved).toBe("boolean");
        expect(typeof result.isV2Template).toBe("boolean");
        expect(typeof result.isVerified).toBe("boolean");
        expect(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]).toContain(result.status);
        expect(Array.isArray(result.similarTemplates)).toBe(true);
        if (result.creator !== null) {
          expect(typeof result.creator.hasPublicProfile).toBe("boolean");
        }
        if (result.tags !== null) {
          expect(Array.isArray(result.tags)).toBe(true);
        }
        if (result.languages !== null) {
          expect(Array.isArray(result.languages)).toBe(true);
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      template({ code: NON_EXISTENT_CODE }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent template code", async () => {
    const error = await runEffect(
      template({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
