import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAPIToken } from "../src/operations/v2/createAPIToken";
import { deleteAPIToken } from "../src/operations/v2/deleteAPIToken";
import { getAPIToken } from "../src/operations/v2/getAPIToken";
import { runEffect, testRunId } from "./setup";

describe("deleteAPIToken", () => {
  it(
    "deletes an existing API token and subsequent fetches return NotFound",
    async () => {
      const tokenName = `distilled-axiom-del-token-${testRunId}`;
      let createdId: string | undefined;
      let deleted = false;

      const effect = Effect.gen(function* () {
        const created = yield* createAPIToken({
          name: tokenName,
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        yield* deleteAPIToken({ id: created.id });
        deleted = true;

        const afterDelete = yield* getAPIToken({ id: created.id }).pipe(
          Effect.flip,
        );
        expect((afterDelete as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined && !deleted) {
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
        deleteAPIToken({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
