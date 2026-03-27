import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { Forbidden, NotFound } from "../src/errors";
import { getGroupProcess } from "../src/operations/getGroupProcess";
import { listGroupProcesses } from "../src/operations/listGroupProcesses";
import { runEffect } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Processes", () => {
  describe("listGroupProcesses", () => {
    it("error - NotFound for non-existent group", async () => {
      const error = await runEffect(
        listGroupProcesses({
          groupId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupProcess", () => {
    it("error - NotFound for non-existent process", async () => {
      const error = await runEffect(
        getGroupProcess({
          groupId: PROJECT_ID,
          processId: "nonexistent:27017",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });
});
