import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContactImport } from "../src/operations/createContactImport";
import { getContactImport } from "../src/operations/getContactImport";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_IMPORT_ID = "00000000-0000-4000-8000-000000000000";
const VALID_STATUSES = ["queued", "in_progress", "completed", "failed"];
const MINIMAL_CSV = `email,first_name,last_name\nget-import-${testRunId}-1@example.com,Alice,Tester\n`;

describe("getContactImport", () => {
  it("retrieves a contact import created in the test", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactImport({
          file: MINIMAL_CSV,
          on_conflict: "skip",
        });
        if (!created.id) {
          return yield* Effect.die(
            "createContactImport did not return an id",
          );
        }
        return yield* getContactImport({ id: created.id });
      }),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
    if (result.status !== undefined) {
      expect(VALID_STATUSES).toContain(result.status);
    }
  });

  it("fails with NotFound for a non-existent import id", async () => {
    const error = await runEffect(
      getContactImport({ id: NON_EXISTENT_IMPORT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
