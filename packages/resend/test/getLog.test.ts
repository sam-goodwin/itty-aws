import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getLog } from "../src/operations/getLog";
import { listLogs } from "../src/operations/listLogs";
import { runEffect } from "./setup";

const NON_EXISTENT_LOG_ID = "00000000-0000-4000-8000-000000000000";

describe("getLog", () => {
  it("retrieves a single log by id", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const list = yield* listLogs({ limit: 1 });
        const first = list.data?.[0];
        if (!first?.id) {
          return null;
        }
        return yield* getLog({ log_id: first.id });
      }),
    );

    if (result === null) {
      // No logs available on this account yet; nothing to assert beyond
      // the listLogs call completing without error.
      return;
    }

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("fails with NotFound for a non-existent log id", async () => {
    const error = await runEffect(
      getLog({ log_id: NON_EXISTENT_LOG_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
