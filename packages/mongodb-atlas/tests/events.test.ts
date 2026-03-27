import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { listGroupEvents } from "../src/operations/listGroupEvents";
import { getGroupEvent } from "../src/operations/getGroupEvent";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Events", () => {
  describe("listGroupEvents", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupEvents({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupEvent", () => {
    it("error - NotFound for non-existent event", async () => {
      const error = await runEffect(
        getGroupEvent({
          groupId: PROJECT_ID,
          eventId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
