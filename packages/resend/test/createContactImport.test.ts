import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContactImport } from "../src/operations/createContactImport";
import { runEffect, testRunId } from "./setup";

const MINIMAL_CSV = `email,first_name,last_name\nimport-${testRunId}-1@example.com,Alice,Tester\nimport-${testRunId}-2@example.com,Bob,Tester\n`;

describe("createContactImport", () => {
  it("creates a contact import from a CSV", async () => {
    const result = await runEffect(
      createContactImport({
        file: MINIMAL_CSV,
        on_conflict: "skip",
      }),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an empty file", async () => {
    const error = await runEffect(
      createContactImport({ file: "" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
