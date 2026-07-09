import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createApiKey } from "../src/operations/createApiKey";
import { deleteApiKey } from "../src/operations/deleteApiKey";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_API_KEY_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteApiKey", () => {
  it("deletes an API key created in the test", async () => {
    const name = `distilled-resend-deleteApiKey-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createApiKey({ name });
        if (!created.id) {
          return yield* Effect.die("createApiKey did not return an id");
        }
        return yield* deleteApiKey({ api_key_id: created.id });
      }),
    );

    expect(result).toBeDefined();
  });

  it("fails with NotFound for a non-existent API key id", async () => {
    const error = await runEffect(
      deleteApiKey({ api_key_id: NON_EXISTENT_API_KEY_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
