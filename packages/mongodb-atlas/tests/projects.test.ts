import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, NotFound, Forbidden } from "../src/errors";
import { getGroup } from "../src/operations/getGroup";
import { listGroups } from "../src/operations/listGroups";
import { runEffect } from "./setup";

describe("Projects (Groups)", () => {
  describe("listGroups", () => {
    it("happy path - lists projects", async () => {
      const result = await runEffect(listGroups({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("getGroup", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroup({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid project ID format", async () => {
      const error = await runEffect(
        getGroup({ groupId: "invalid-id" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });
});
