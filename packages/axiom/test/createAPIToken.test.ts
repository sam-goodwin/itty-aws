import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAPIToken } from "../src/operations/v2/createAPIToken";
import { deleteAPIToken } from "../src/operations/v2/deleteAPIToken";
import { runEffect, testRunId } from "./setup";

describe("createAPIToken", () => {
  it(
    "creates an API token with org capabilities and returns the stored configuration",
    async () => {
      const tokenName = `distilled-axiom-token-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const token = yield* createAPIToken({
          name: tokenName,
          description: `distilled test token ${testRunId}`,
          orgCapabilities: {
            datasets: ["read"],
          },
        });

        expect(token.name).toBe(tokenName);
        expect(typeof token.id).toBe("string");
        expect(token.id.length).toBeGreaterThan(0);
        expect(token.orgCapabilities.datasets).toContain("read");
        createdId = token.id;
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
    "returns UnprocessableEntity when the token name is empty",
    async () => {
      // `name` is required and must be non-empty; axiom surfaces this as 422
      // → UnprocessableEntity.
      const error = await runEffect(
        createAPIToken({
          name: "",
          orgCapabilities: {
            datasets: ["read"],
          },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
