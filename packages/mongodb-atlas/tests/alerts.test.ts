import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { listGroupAlertConfigs } from "../src/operations/listGroupAlertConfigs";
import { getGroupAlertConfig } from "../src/operations/getGroupAlertConfig";
import { listGroupAlerts } from "../src/operations/listGroupAlerts";
import { getGroupAlert } from "../src/operations/getGroupAlert";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Alerts", () => {
  describe("listGroupAlertConfigs", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupAlertConfigs({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupAlertConfig", () => {
    it("error - NotFound for non-existent alert config", async () => {
      const error = await runEffect(
        getGroupAlertConfig({
          groupId: PROJECT_ID,
          alertConfigId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupAlerts", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupAlerts({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupAlert", () => {
    it("error - NotFound for non-existent alert", async () => {
      const error = await runEffect(
        getGroupAlert({
          groupId: PROJECT_ID,
          alertId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
