import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { notificationRules } from "../src/operations/notificationRules.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("notificationRules", () => {
  it("happy path - lists notification rules for a workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) return;

        const rules = yield* notificationRules({ workspaceId });

        expect(Array.isArray(rules)).toBe(true);
        for (const rule of rules) {
          expect(typeof rule.id).toBe("string");
          expect(typeof rule.workspaceId).toBe("string");
          expect(typeof rule.createdAt).toBe("string");
          expect(typeof rule.updatedAt).toBe("string");
          expect(Array.isArray(rule.eventTypes)).toBe(true);
          expect(Array.isArray(rule.severities)).toBe(true);
          for (const sev of rule.severities) {
            expect(["CRITICAL", "INFO", "NOTICE", "WARNING"]).toContain(sev);
          }
          expect(Array.isArray(rule.channels)).toBe(true);
          for (const channel of rule.channels) {
            expect(typeof channel.id).toBe("string");
            expect(typeof channel.workspaceId).toBe("string");
            expect(typeof channel.createdAt).toBe("string");
            expect(typeof channel.updatedAt).toBe("string");
          }
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
      notificationRules({ workspaceId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
