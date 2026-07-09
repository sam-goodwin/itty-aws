import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listContacts } from "../src/operations/listContacts";
import { runEffect } from "./setup";

describe("listContacts", () => {
  it("lists contacts in the test account", async () => {
    const result = await runEffect(listContacts({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const contact of result.data) {
        if (contact.id !== undefined) {
          expect(typeof contact.id).toBe("string");
        }
        if (contact.email !== undefined) {
          expect(typeof contact.email).toBe("string");
        }
      }
    }
  });

  it("lists contacts with a limit parameter", async () => {
    const result = await runEffect(listContacts({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for a non-existent segment_id", async () => {
    const error = await runEffect(
      listContacts({
        segment_id: "00000000-0000-4000-8000-000000000000",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
