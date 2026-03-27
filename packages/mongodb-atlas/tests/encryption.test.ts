import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { Forbidden, NotFound } from "../src/errors";
import { getGroupEncryptionAtRestPrivateEndpoint } from "../src/operations/getGroupEncryptionAtRestPrivateEndpoint";
import { listGroupEncryptionAtRestPrivateEndpoints } from "../src/operations/listGroupEncryptionAtRestPrivateEndpoints";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";
const ORG_ID = process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("Encryption at Rest", () => {
  describe("getGroupEncryptionAtRestPrivateEndpoint", () => {
    it("error - NotFound for non-existent endpoint", async () => {
      const error = await runEffect(
        getGroupEncryptionAtRestPrivateEndpoint({
          groupId: "000000000000000000000000",
          cloudProvider: "AWS",
          endpointId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupEncryptionAtRestPrivateEndpoints", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupEncryptionAtRestPrivateEndpoints({
          groupId: "000000000000000000000000",
          cloudProvider: "AWS",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
