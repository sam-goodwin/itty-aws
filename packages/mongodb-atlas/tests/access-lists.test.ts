import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { Forbidden, NotFound } from "../src/errors";
import { listGroupAccessListEntries } from "../src/operations/listGroupAccessListEntries";
import { getGroupAccessListEntry } from "../src/operations/getGroupAccessListEntry";
import { listGroupApiKeys } from "../src/operations/listGroupApiKeys";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Access Lists", () => {
  describe("listGroupAccessListEntries", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupAccessListEntries({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupAccessListEntry", () => {
    it("error - NotFound for non-existent entry", async () => {
      const error = await runEffect(
        getGroupAccessListEntry({
          groupId: PROJECT_ID,
          entryValue: "192.0.2.0/24",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupApiKeys", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupApiKeys({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
