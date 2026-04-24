import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAPIToken } from "../src/operations/v2/createAPIToken";
import { deleteAPIToken } from "../src/operations/v2/deleteAPIToken";
import { runEffect, testRunId } from "./setup";

describe("createAPIToken", () => {
  const cleanup = (id: string | undefined) =>
    id === undefined
      ? Effect.void
      : deleteAPIToken({ id }).pipe(Effect.ignore);

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
    "accepts an empty token name",
    async () => {
      // Probed live: axiom accepts an empty `name` and stores the token
      // with `name: ""`. The generated spec lists `name` as required which
      // matches the request shape, but the backend does not enforce
      // non-empty on the actual value. Assert the permissive behaviour so
      // we catch a regression either way — make sure we clean up the
      // stored token.
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const token = yield* createAPIToken({
          name: "",
          orgCapabilities: {
            datasets: ["read"],
          },
        });

        expect(token.name).toBe("");
        expect(typeof token.id).toBe("string");
        createdId = token.id;
      }).pipe(Effect.ensuring(Effect.suspend(() => cleanup(createdId))));

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
