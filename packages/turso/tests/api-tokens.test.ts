import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listAPITokens } from "../src/operations/listAPITokens";
import { createAPIToken } from "../src/operations/createAPIToken";
import { revokeAPIToken } from "../src/operations/revokeAPIToken";
import { validateAPIToken } from "../src/operations/validateAPIToken";

const tokenName = `distilled-turso-tok-${testRunId}`;

describe("API Tokens", () => {
  describe("validateAPIToken", () => {
    it("happy path - validates the current token", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* validateAPIToken({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listAPITokens", () => {
    it("happy path - lists API tokens", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listAPITokens({});
          expect(result.tokens).toBeDefined();
          expect(Array.isArray(result.tokens)).toBe(true);
        }),
      );
    }, 30_000);
  });

  describe("createAPIToken", () => {
    it("happy path - creates and revokes a token", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createAPIToken({ tokenName });
          expect(result.name).toBe(tokenName);
          expect(result.token).toBeDefined();
        }).pipe(
          Effect.ensuring(
            revokeAPIToken({ tokenName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);
  });

  describe("revokeAPIToken", () => {
    it("error - NotFound for non-existent token", async () => {
      await runEffect(
        revokeAPIToken({
          tokenName: "nonexistent-token-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
