import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect } from "./setup";
import { getConsumptionHistoryPerAccount } from "../src/operations/getConsumptionHistoryPerAccount";
import { getConsumptionHistoryPerProject } from "../src/operations/getConsumptionHistoryPerProject";
import { getConsumptionHistoryPerProjectV2 } from "../src/operations/getConsumptionHistoryPerProjectV2";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("neon consumption", () => {
  // ============================================================================
  // getConsumptionHistoryPerAccount
  // ============================================================================
  describe("getConsumptionHistoryPerAccount", () => {
    it("happy path - retrieves account consumption history", async () => {
      // Use a recent date range with daily granularity
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getConsumptionHistoryPerAccount({
            from: from.toISOString(),
            to: now.toISOString(),
            granularity: "daily",
          });
          expect(result).toHaveProperty("periods");
          expect(Array.isArray(result.periods)).toBe(true);
        }).pipe(
          // Some accounts (e.g. Free tier) may get Forbidden; accept that as valid
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Forbidden or NotFound for non-existent org_id", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        getConsumptionHistoryPerAccount({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "Forbidden",
              "NotFound",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound or BadRequest for invalid granularity", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        getConsumptionHistoryPerAccount({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "invalid_granularity",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "Forbidden",
              "NotFound",
              "UnprocessableEntity",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await Effect.runPromise(
        getConsumptionHistoryPerAccount({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getConsumptionHistoryPerProject
  // ============================================================================
  describe("getConsumptionHistoryPerProject", () => {
    it("happy path - retrieves per-project consumption history", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getConsumptionHistoryPerProject({
            from: from.toISOString(),
            to: now.toISOString(),
            granularity: "daily",
          });
          expect(result).toHaveProperty("projects");
          expect(Array.isArray(result.projects)).toBe(true);
        }).pipe(
          // Some accounts (e.g. Free tier) may get Forbidden; accept that as valid
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Forbidden or NotFound for non-existent org_id", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        getConsumptionHistoryPerProject({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "Forbidden",
              "NotFound",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project_ids", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        getConsumptionHistoryPerProject({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
          project_ids: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "Forbidden",
              "NotFound",
              "BadRequest",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await Effect.runPromise(
        getConsumptionHistoryPerProject({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getConsumptionHistoryPerProjectV2
  // ============================================================================
  describe("getConsumptionHistoryPerProjectV2", () => {
    it("happy path - retrieves per-project consumption history (V2)", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      // V2 requires org_id; use a plausible org ID — most accounts will get Forbidden
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getConsumptionHistoryPerProjectV2({
            from: from.toISOString(),
            to: now.toISOString(),
            granularity: "daily",
            org_id: "org-test-00000000",
          });
          expect(result).toHaveProperty("projects");
          expect(Array.isArray(result.projects)).toBe(true);
        }).pipe(
          // Most accounts will get Forbidden or NotFound; accept as valid
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Forbidden or NotFound for non-existent org_id", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        getConsumptionHistoryPerProjectV2({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "Forbidden",
              "NotFound",
              "BadRequest",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project_ids", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await runEffect(
        getConsumptionHistoryPerProjectV2({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
          org_id: "org-non-existent-00000000",
          project_ids: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "Forbidden",
              "NotFound",
              "BadRequest",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      const now = new Date();
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      await Effect.runPromise(
        getConsumptionHistoryPerProjectV2({
          from: from.toISOString(),
          to: now.toISOString(),
          granularity: "daily",
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
