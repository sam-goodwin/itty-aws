import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect } from "./setup";
import { listLocations } from "../src/operations/listLocations";

describe("Locations", () => {
  describe("listLocations", () => {
    it("happy path - lists available locations", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listLocations({});
          expect(result.locations).toBeDefined();
          expect(typeof result.locations).toBe("object");
          // Should have at least one location
          expect(Object.keys(result.locations!).length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);
  });
});
