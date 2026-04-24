import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAPIToken } from "../src/operations/v2/createAPIToken";
import { deleteAPIToken } from "../src/operations/v2/deleteAPIToken";
import { getAPIToken } from "../src/operations/v2/getAPIToken";
import { runEffect, testRunId } from "./setup";

describe("getAPIToken", () => {
  it(
    "fetches an API token by id and returns its configuration",
    async () => {
      const tokenName = `distilled-axiom-get-token-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createAPIToken({
          name: tokenName,
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        const fetched = yield* getAPIToken({ id: created.id });

        expect(fetched.id).toBe(created.id);
        expect(fetched.name).toBe(tokenName);
        expect(fetched.orgCapabilities.datasets).toContain("read");
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
        getAPIToken({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
