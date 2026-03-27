import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { Forbidden, NotFound } from "../src/errors";
import { listGroupServiceAccounts } from "../src/operations/listGroupServiceAccounts";
import { getGroupServiceAccount } from "../src/operations/getGroupServiceAccount";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";
const ORG_ID = process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("Service Accounts", () => {
  describe("listGroupServiceAccounts", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupServiceAccounts({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupServiceAccount", () => {
    it("error - NotFound for non-existent service account", async () => {
      const error = await runEffect(
        getGroupServiceAccount({
          groupId: "000000000000000000000000",
          clientId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
