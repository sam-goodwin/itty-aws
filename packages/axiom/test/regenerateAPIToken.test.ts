import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAPIToken } from "../src/operations/v2/createAPIToken";
import { deleteAPIToken } from "../src/operations/v2/deleteAPIToken";
import { regenerateAPIToken } from "../src/operations/v2/regenerateAPIToken";
import { runEffect, testRunId } from "./setup";

describe("regenerateAPIToken", () => {
  it(
    "regenerates an existing API token and returns the new token configuration",
    async () => {
      const tokenName = `distilled-axiom-regen-token-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createAPIToken({
          name: tokenName,
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        // Existing token should expire shortly after regeneration. Pass an
        // ISO-8601 timestamp ~1 hour in the future.
        const existingTokenExpiresAt = new Date(
          Date.now() + 60 * 60 * 1000,
        ).toISOString();

        const regenerated = yield* regenerateAPIToken({
          id: created.id,
          existingTokenExpiresAt,
        });

        // Axiom returns the updated token record; the id is preserved.
        expect(regenerated.id).toBe(created.id);
        expect(typeof regenerated.name).toBe("string");
        expect(regenerated.orgCapabilities.datasets).toContain("read");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteAPIToken({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for an API token id that does not exist",
    async () => {
      const error = await runEffect(
        regenerateAPIToken({
          id: `doesnotexist-${testRunId}`,
          existingTokenExpiresAt: new Date(
            Date.now() + 60 * 60 * 1000,
          ).toISOString(),
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when existingTokenExpiresAt is not a valid ISO timestamp",
    async () => {
      const tokenName = `distilled-axiom-regen-422-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createAPIToken({
          name: tokenName,
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        const error = yield* regenerateAPIToken({
          id: created.id,
          existingTokenExpiresAt: "not-a-valid-timestamp",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteAPIToken({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );
});
